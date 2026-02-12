import { NextResponse } from 'next/server';
import { searchEbayParts, isEbayConfigured } from '@/lib/ebay-api';
import { getAmazonSearchUrl, getAmazonProductUrl } from '@/lib/amazon-links';
import { CATEGORY_MAP } from '@/lib/categories';
import { BRAND_TIERS, CATEGORY_PRICES } from '@/lib/mock-data';

// Simple in-memory cache (survives within same serverless instance)
const cache = new Map();
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

function getCacheKey(make, model, category) {
  return `${make}:${model}:${category}`;
}

function getBrandTier(brand) {
  const b = (brand || '').trim().toLowerCase();
  for (const [tier, brands] of Object.entries(BRAND_TIERS)) {
    if (brands.some(name => b.includes(name.toLowerCase()) || name.toLowerCase().includes(b))) {
      return tier;
    }
  }
  return 'mid';
}

// Extract brand name from eBay listing title
function extractBrand(title) {
  const knownBrands = [
    'Brembo', 'EBC', 'Ferodo', 'Pagid', 'Mintex', 'TRW', 'ATE',
    'Bosch', 'MANN', 'MANN-FILTER', 'MAHLE', 'K&N', 'FRAM', 'Champion',
    'Denso', 'NGK', 'Delphi', 'Sachs', 'Monroe', 'KYB', 'Lemforder',
    'Febi', 'Febi Bilstein', 'Meyle', 'Hella', 'Valeo', 'LuK', 'SKF',
    'Blue Print', 'Blueprint', 'First Line', 'Dayco', 'Gates',
    'Yuasa', 'Varta', 'Exide', 'Banner',
    'Genuine', 'OEM', 'OE',
  ];

  const titleLower = title.toLowerCase();
  for (const brand of knownBrands) {
    if (titleLower.includes(brand.toLowerCase())) {
      return brand;
    }
  }
  // Try to extract first word as brand
  const firstWord = title.split(/\s+/)[0];
  if (firstWord && firstWord.length > 1 && firstWord.length < 20) {
    return firstWord;
  }
  return 'Unknown';
}

// Extract part number from eBay listing title
function extractPartNumber(title) {
  // Common part number patterns: alphanumeric codes like "BP1234", "0986AB4567"
  const patterns = [
    /\b([A-Z]{1,4}\d{3,10}[A-Z]?\d*)\b/i,  // Like BP1234, GDB1550
    /\b(\d{4,10})\b/,                          // Pure numeric like 0986494
  ];

  for (const pattern of patterns) {
    const match = title.match(pattern);
    if (match) return match[1];
  }
  return null;
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const make = searchParams.get('make');
  const model = searchParams.get('model');
  const category = searchParams.get('category');

  if (!make || !model || !category) {
    return NextResponse.json({ error: 'make, model and category required' }, { status: 400 });
  }

  const cat = CATEGORY_MAP[category];
  if (!cat) {
    return NextResponse.json({ error: 'Unknown category' }, { status: 400 });
  }

  // Check cache
  const cacheKey = getCacheKey(make, model, category);
  const cached = cache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return NextResponse.json({ ...cached.data, cached: true });
  }

  // Format names for display
  const makeName = make.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const modelName = model.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const fullName = `${makeName} ${modelName}`;

  // Try eBay first
  let ebayItems = [];
  let source = 'mock';

  if (isEbayConfigured()) {
    try {
      ebayItems = await searchEbayParts(makeName, modelName, cat.name, { limit: 15 });
      if (ebayItems.length > 0) {
        source = 'live';
      }
    } catch (err) {
      console.error('eBay search failed:', err.message);
    }
  }

  // Build combined parts list
  let parts = [];

  if (ebayItems.length > 0) {
    // Real eBay data — map to our standard format
    parts = ebayItems
      .filter(item => item.price && item.price > 0)
      .map(item => {
        const brand = extractBrand(item.title);
        const partNumber = extractPartNumber(item.title);
        return {
          id: item.id,
          title: item.title,
          brand,
          brandTier: getBrandTier(brand),
          partNumber,
          ebayPrice: item.price,
          ebayUrl: item.url,
          amazonUrl: getAmazonProductUrl(brand, partNumber, cat.name),
          image: item.image,
          condition: item.condition,
          seller: item.seller,
          sellerRating: item.sellerRating,
          freeShipping: item.freeShipping,
          shippingCost: item.shippingCost,
          priceType: 'live',
        };
      })
      // Sort: cheapest first
      .sort((a, b) => a.ebayPrice - b.ebayPrice);
  }

  const result = {
    parts,
    category,
    categoryName: cat.name,
    make: makeName,
    model: modelName,
    fullName,
    source,
    amazonSearchUrl: getAmazonSearchUrl(makeName, modelName, cat.name),
    totalResults: parts.length,
    fetchedAt: new Date().toISOString(),
  };

  // Cache the result
  cache.set(cacheKey, { data: result, timestamp: Date.now() });

  // Clean old cache entries (keep last 500)
  if (cache.size > 500) {
    const entries = [...cache.entries()].sort((a, b) => a[1].timestamp - b[1].timestamp);
    for (let i = 0; i < entries.length - 500; i++) {
      cache.delete(entries[i][0]);
    }
  }

  return NextResponse.json(result);
}
