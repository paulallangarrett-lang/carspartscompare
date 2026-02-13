import { NextResponse } from 'next/server';
import { matchVehicle } from '@/lib/vehicle-matcher';
import { getArticles } from '@/lib/rapidapi';
import { CATEGORY_MAP } from '@/lib/categories';
import { MOCK_PARTS, BRAND_TIERS, CATEGORY_PRICES } from '@/lib/mock-data';
import { searchEbayParts, isEbayConfigured } from '@/lib/ebay-api';

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

function formatPart(p, categoryName, categorySlug, ebayMatch) {
  const artNo = p.articleNumber || p.articleNo || '';
  const brand = p.supplierName || '';
  const searchTerm = `${brand} ${artNo}`.trim();
  const estimated = estimatePrice(brand, categorySlug);

  // If we have a live eBay match, use real data
  if (ebayMatch) {
    return {
      articleId: p.articleId,
      articleNumber: artNo,
      supplierName: brand,
      brandTier: getBrandTier(brand),
      productName: p.productName || p.articleProductName || categoryName,
      imageUrl: ebayMatch.image || p.imageUrl || p.images?.[0]?.imageURL200 || null,
      amazonUrl: `https://www.amazon.co.uk/s?k=${encodeURIComponent(searchTerm)}&tag=${AMAZON_TAG}`,
      ebayUrl: ebayMatch.url,
      amazonPrice: estimated,
      ebayPrice: ebayMatch.price,
      priceType: 'live',
    };
  }

  // Fallback: estimated prices
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

// Try to match eBay listings to TecDoc parts by part number
function matchEbayToParts(parts, ebayItems) {
  const matches = new Map();

  for (const part of parts) {
    const artNo = (part.articleNumber || part.articleNo || '').toUpperCase().replace(/[\s\-]/g, '');
    if (!artNo || artNo.length < 3) continue;

    for (const item of ebayItems) {
      const titleNorm = (item.title || '').toUpperCase().replace(/[\s\-]/g, '');
      if (titleNorm.includes(artNo)) {
        // Found a match — use cheapest if multiple matches
        const existing = matches.get(artNo);
        if (!existing || item.price < existing.price) {
          matches.set(artNo, item);
        }
      }
    }
  }

  return matches;
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

  let rawParts = null;
  let vehicle = null;
  let partsSource = 'mock';

  // Try live API if we have a vehicleId
  if (vehicleIdParam && process.env.RAPIDAPI_KEY) {
    try {
      const data = await getArticles(parseInt(vehicleIdParam), cat.tecDocId);
      if (data?.articles && data.articles.length > 0) {
        rawParts = data.articles;
        partsSource = 'live';
      }
    } catch (err) {
      console.error('RapidAPI error:', err.message);
    }
  }

  // Try DVLA → TecDoc match
  if (!rawParts && process.env.RAPIDAPI_KEY && !vehicleIdParam) {
    try {
      const lookupUrl = new URL('/api/lookup', request.url);
      lookupUrl.searchParams.set('reg', reg);
      const vRes = await fetch(lookupUrl);
      const vData = await vRes.json();
      if (vData && !vData.error && vData.make) {
        vehicle = vData;
        const match = await matchVehicle(vData);
        if (match && !match.error && match.vehicleId) {
          const data = await getArticles(match.vehicleId, cat.tecDocId);
          if (data?.articles && data.articles.length > 0) {
            rawParts = data.articles;
            partsSource = 'live';
            vehicle = { ...match, reg };
          }
        }
      }
    } catch (err) {
      console.error('Live lookup failed:', err.message);
    }
  }

  // Get vehicle info for eBay search if we don't have it yet
  if (!vehicle && reg) {
    try {
      const lookupUrl = new URL('/api/lookup', request.url);
      lookupUrl.searchParams.set('reg', reg);
      const vRes = await fetch(lookupUrl);
      const vData = await vRes.json();
      if (vData && !vData.error) {
        vehicle = vData;
      }
    } catch (e) { /* ignore */ }
  }

  // Use mock data as fallback
  if (!rawParts) {
    rawParts = MOCK_PARTS[category] || [];
  }

  // Fetch live eBay prices and try to match to parts
  let ebayMatches = new Map();
  if (isEbayConfigured() && rawParts.length > 0 && vehicle?.make && vehicle?.model) {
    try {
      const ebayItems = await searchEbayParts(vehicle.make, vehicle.model, cat.name, { limit: 20 });
      if (ebayItems.length > 0) {
        ebayMatches = matchEbayToParts(rawParts, ebayItems);
        console.log(`eBay: ${ebayItems.length} results, ${ebayMatches.size} matched to parts for ${vehicle.make} ${vehicle.model} ${cat.name}`);
      }
    } catch (err) {
      console.error('eBay price fetch failed:', err.message);
    }
  }

  // Format parts with eBay matches where available
  const parts = rawParts.map(p => {
    const artNo = (p.articleNumber || p.articleNo || '').toUpperCase().replace(/[\s\-]/g, '');
    const ebayMatch = ebayMatches.get(artNo) || null;
    return formatPart(p, cat.name, category, ebayMatch);
  });

  const response = {
    parts,
    category,
    source: partsSource,
    priceSource: ebayMatches.size > 0 ? 'live' : 'estimated',
    liveMatches: ebayMatches.size,
  };

  if (vehicle) {
    response.vehicle = vehicle;
  }

  return NextResponse.json(response);
}
