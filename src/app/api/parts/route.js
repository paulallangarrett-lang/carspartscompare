import { NextResponse } from 'next/server';
import { matchVehicle } from '@/lib/vehicle-matcher';
import { getArticles } from '@/lib/rapidapi';
import { CATEGORY_MAP } from '@/lib/categories';
import { MOCK_PARTS, BRAND_TIERS, CATEGORY_PRICES } from '@/lib/mock-data';

const AMAZON_TAG = process.env.AMAZON_ASSOCIATE_TAG || 'carpartscomp-21';

function getBrandTier(brand) {
  const b = (brand || '').trim();
  for (const [tier, brands] of Object.entries(BRAND_TIERS)) {
    if (brands.some(name => b.toLowerCase().includes(name.toLowerCase()) || name.toLowerCase().includes(b.toLowerCase()))) {
      return tier;
    }
  }
  return 'mid';
}

function estimatePrice(brand, categorySlug) {
  const tier = getBrandTier(brand);
  const ranges = CATEGORY_PRICES[categorySlug];
  if (!ranges) return null;
  const [min, max] = ranges[tier] || ranges.mid;
  let hash = 0;
  for (let i = 0; i < brand.length; i++) {
    hash = ((hash << 5) - hash) + brand.charCodeAt(i);
    hash |= 0;
  }
  const factor = (Math.abs(hash) % 100) / 100;
  const price = min + (max - min) * factor;
  return Math.round(price * 100) / 100;
}

function formatPart(p, categoryName, categorySlug) {
  const artNo = p.articleNumber || p.articleNo || '';
  const brand = p.supplierName || '';
  const searchTerm = `${brand} ${artNo}`.trim();
  const estimated = estimatePrice(brand, categorySlug);
  let ebayEstimated = null;
  if (estimated) {
    let hash = 0;
    for (let i = 0; i < artNo.length; i++) {
      hash = ((hash << 5) - hash) + artNo.charCodeAt(i);
      hash |= 0;
    }
    const variation = 0.85 + (Math.abs(hash) % 30) / 100;
    ebayEstimated = Math.round(estimated * variation * 100) / 100;
  }
  return {
    articleId: p.articleId,
    articleNumber: artNo,
    supplierName: brand,
    brandTier: getBrandTier(brand),
    productName: p.productName || p.articleProductName || categoryName,
    imageUrl: p.imageUrl || p.images?.[0]?.imageURL200 || null,
    amazonUrl: `https://www.amazon.co.uk/s?k=${encodeURIComponent(searchTerm)}&tag=${AMAZON_TAG}`,
    ebayUrl: `https://www.ebay.co.uk/sch/i.html?_nkw=${encodeURIComponent(searchTerm)}`,
    amazonPrice: estimated,
    ebayPrice: ebayEstimated,
    priceType: 'estimated',
  };
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const reg = searchParams.get('reg');
  const category = searchParams.get('category');
  const vehicleIdParam = searchParams.get('vehicleId');
  if (!reg || !category) {
    return NextResponse.json({ error: 'reg and category required' }, { status: 400 });
  }
  const cat = CATEGORY_MAP[category];
  if (!cat) {
    return NextResponse.json({ error: 'Unknown category' }, { status: 400 });
  }
  // Try live API if we have a vehicleId
  if (vehicleIdParam && process.env.RAPIDAPI_KEY) {
    try {
      const data = await getArticles(parseInt(vehicleIdParam), cat.tecDocId);
      if (data?.articles && data.articles.length > 0) {
        const parts = data.articles.map(p => formatPart(p, cat.name, category));
        return NextResponse.json({ parts, category, source: 'live' });
      }
    } catch (err) {
      console.error('RapidAPI error:', err.message);
    }
  }
  // Try DVLA → TecDoc match
  if (process.env.RAPIDAPI_KEY && !vehicleIdParam) {
    try {
      const lookupUrl = new URL('/api/lookup', request.url);
      lookupUrl.searchParams.set('reg', reg);
      const vRes = await fetch(lookupUrl);
      const vehicle = await vRes.json();
      if (vehicle && !vehicle.error && vehicle.make) {
        const match = await matchVehicle(vehicle);
        if (match && !match.error && match.vehicleId) {
          const data = await getArticles(match.vehicleId, cat.tecDocId);
          if (data?.articles && data.articles.length > 0) {
            const parts = data.articles.map(p => formatPart(p, cat.name, category));
            return NextResponse.json({ parts, category, source: 'live', vehicle: { ...match, reg } });
          }
        }
      }
    } catch (err) {
      console.error('Live lookup failed:', err.message);
    }
  }
  // Fallback: mock data
  const mockParts = MOCK_PARTS[category] || [];
  const parts = mockParts.map(p => formatPart(p, cat.name, category));
  return NextResponse.json({ parts, category, source: 'mock' });
}
