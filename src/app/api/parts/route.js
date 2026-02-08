import { NextResponse } from 'next/server';
import { matchVehicle } from '@/lib/vehicle-matcher';
import { getArticles } from '@/lib/rapidapi';

const CATEGORY_MAP = {
  'air-filters': { name: 'Air Filters', id: 100260 },
  'oil-filters': { name: 'Oil Filters', id: 100045 },
  'brake-pads': { name: 'Brake Pads', id: 100802 },
  'wiper-blades': { name: 'Wiper Blades', id: 100544 },
  'spark-plugs': { name: 'Spark Plugs', id: 100374 },
};

const AMAZON_TAG = process.env.AMAZON_ASSOCIATE_TAG || 'carpartscomp-21';

// Brand tier classification for price estimation
const BRAND_TIERS = {
  // Premium brands - typically 30-50% more expensive
  premium: ['K&N Filters', 'Pipercross', 'Brembo', 'EBC', 'NGK', 'Denso', 'Bilstein', 'Sachs'],
  // OEM quality - mid-to-high pricing
  oem: ['Bosch', 'MANN-FILTER', 'MAHLE', 'Hengst Filter', 'TRW', 'ATE', 'Valeo', 'LuK', 'Continental'],
  // Mid-range - good value
  mid: ['FRAM', 'Champion', 'WIX Filters', 'Ferodo', 'Delphi', 'Mintex', 'Pagid'],
  // Budget-friendly
  budget: ['NAPA', 'Febi Bilstein', 'Blue Print', 'Comline', 'First Line', 'Apec'],
};

// Base price ranges by category (GBP) [min, max] for mid-tier
const CATEGORY_PRICES = {
  'air-filters':  { budget: [6, 12],  mid: [10, 18], oem: [14, 25], premium: [25, 55] },
  'oil-filters':  { budget: [4, 8],   mid: [6, 12],  oem: [8, 16],  premium: [14, 28] },
  'brake-pads':   { budget: [15, 25], mid: [22, 38], oem: [30, 55], premium: [45, 95] },
  'wiper-blades': { budget: [6, 10],  mid: [8, 16],  oem: [12, 22], premium: [18, 35] },
  'spark-plugs':  { budget: [2, 5],   mid: [4, 8],   oem: [6, 12],  premium: [10, 22] },
};

function getBrandTier(brand) {
  const b = (brand || '').trim();
  for (const [tier, brands] of Object.entries(BRAND_TIERS)) {
    if (brands.some(name => b.toLowerCase().includes(name.toLowerCase()) || name.toLowerCase().includes(b.toLowerCase()))) {
      return tier;
    }
  }
  return 'mid'; // default to mid-range
}

function estimatePrice(brand, category) {
  const tier = getBrandTier(brand);
  const ranges = CATEGORY_PRICES[category];
  if (!ranges) return null;
  const [min, max] = ranges[tier] || ranges.mid;
  // Generate a consistent "random" price based on brand name hash
  let hash = 0;
  for (let i = 0; i < brand.length; i++) {
    hash = ((hash << 5) - hash) + brand.charCodeAt(i);
    hash |= 0;
  }
  const factor = (Math.abs(hash) % 100) / 100;
  const price = min + (max - min) * factor;
  return Math.round(price * 100) / 100;
}

// Mock data fallback (from our real API test)
const MOCK_PARTS = {
  'air-filters': [
    { articleId: 1, articleNumber: 'F 026 400 672', supplierName: 'Bosch', productName: 'Air Filter' },
    { articleId: 2, articleNumber: 'C 27 031', supplierName: 'MANN-FILTER', productName: 'Air Filter' },
    { articleId: 3, articleNumber: 'LX 4849', supplierName: 'MAHLE', productName: 'Air Filter' },
    { articleId: 4, articleNumber: '33-3131', supplierName: 'K&N Filters', productName: 'Air Filter' },
    { articleId: 5, articleNumber: 'CA12617', supplierName: 'FRAM', productName: 'Air Filter' },
    { articleId: 6, articleNumber: 'CAF101189P', supplierName: 'Champion', productName: 'Air Filter' },
    { articleId: 7, articleNumber: 'E1628L', supplierName: 'Hengst Filter', productName: 'Air Filter' },
    { articleId: 8, articleNumber: 'WA9878', supplierName: 'WIX Filters', productName: 'Air Filter' },
    { articleId: 9, articleNumber: 'PP2008', supplierName: 'Pipercross', productName: 'Air Filter' },
    { articleId: 10, articleNumber: 'NFA1416', supplierName: 'NAPA', productName: 'Air Filter' },
    { articleId: 11, articleNumber: '109102', supplierName: 'Febi Bilstein', productName: 'Air Filter' },
    { articleId: 12, articleNumber: 'ADF122238', supplierName: 'Blue Print', productName: 'Air Filter' },
  ],
  'oil-filters': [
    { articleId: 20, articleNumber: 'F 026 407 213', supplierName: 'Bosch', productName: 'Oil Filter' },
    { articleId: 21, articleNumber: 'W 712/94', supplierName: 'MANN-FILTER', productName: 'Oil Filter' },
    { articleId: 22, articleNumber: 'OC 1480', supplierName: 'MAHLE', productName: 'Oil Filter' },
  ],
  'brake-pads': [
    { articleId: 30, articleNumber: '0 986 494 664', supplierName: 'Bosch', productName: 'Brake Pad Set, Front' },
    { articleId: 31, articleNumber: 'FDB4642', supplierName: 'Ferodo', productName: 'Brake Pad Set, Front' },
    { articleId: 32, articleNumber: 'GDB2117', supplierName: 'TRW', productName: 'Brake Pad Set, Front' },
  ],
};

function formatPart(p, category, categorySlug) {
  const artNo = p.articleNumber || p.articleNo || '';
  const brand = p.supplierName || '';
  const searchTerm = `${brand} ${artNo}`.trim();
  const estimated = estimatePrice(brand, categorySlug);
  // Vary eBay price slightly (typically 5-15% different from Amazon)
  let ebayEstimated = null;
  if (estimated) {
    let hash = 0;
    for (let i = 0; i < artNo.length; i++) {
      hash = ((hash << 5) - hash) + artNo.charCodeAt(i);
      hash |= 0;
    }
    const variation = 0.85 + (Math.abs(hash) % 30) / 100; // 0.85 to 1.15
    ebayEstimated = Math.round(estimated * variation * 100) / 100;
  }
  return {
    articleId: p.articleId,
    articleNumber: artNo,
    supplierName: brand,
    brandTier: getBrandTier(brand),
    productName: p.productName || p.articleProductName || category,
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

  // If we have a direct vehicleId, use it
  if (vehicleIdParam) {
    try {
      const articles = await getArticles(parseInt(vehicleIdParam), cat.id);
      const parts = (articles || []).map(p => formatPart(p, cat.name, category));
      return NextResponse.json({ parts, category, source: 'live' });
    } catch (err) {
      console.error('RapidAPI error:', err);
      // Fall through to mock
    }
  }

  // Try to match vehicle via DVLA data → TecDoc
  if (process.env.RAPIDAPI_KEY) {
    try {
      // Get vehicle info from lookup API
      const lookupUrl = new URL('/api/lookup', request.url);
      lookupUrl.searchParams.set('reg', reg);
      const vRes = await fetch(lookupUrl);
      const vehicle = await vRes.json();
      
      if (vehicle && !vehicle.error && vehicle.make) {
        const match = await matchVehicle(vehicle);
        if (match && !match.error && match.vehicleId) {
          const articles = await getArticles(match.vehicleId, cat.id);
          const parts = (articles || []).map(p => formatPart(p, cat.name, category));
          return NextResponse.json({
            parts,
            category,
            source: 'live',
            vehicle: { ...match, reg },
          });
        }
      }
    } catch (err) {
      console.error('Live lookup failed, using mock:', err.message);
    }
  }

  // Fallback: mock data
  const parts = (MOCK_PARTS[category] || []).map(p => formatPart(p, cat.name, category));
  return NextResponse.json({ parts, category, source: 'mock' });
}
