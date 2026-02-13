import { NextResponse } from 'next/server';
import { matchVehicle } from '@/lib/vehicle-matcher';
import { getArticles } from '@/lib/rapidapi';
import { CATEGORY_MAP } from '@/lib/categories';
import { MOCK_PARTS, BRAND_TIERS, CATEGORY_PRICES } from '@/lib/mock-data';
import { searchEbayParts, isEbayConfigured } from '@/lib/ebay-api';

const AMAZON_TAG = process.env.AMAZON_ASSOCIATE_TAG || 'carpartscomp-21';

// Cache eBay results by part number (survives within same serverless instance)
const ebayCache = new Map();
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

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

// Validate that an eBay listing actually matches the brand we searched for
function isRelevantResult(ebayTitle, brand) {
  if (!ebayTitle || !brand) return false;
  const titleLower = ebayTitle.toLowerCase();
  const brandLower = brand.toLowerCase().trim();

  // Direct brand match
  if (titleLower.includes(brandLower)) return true;

  // Handle common brand name variations
  const brandAliases = {
    'mann-filter': ['mann', 'mann filter'],
    'mann': ['mann-filter', 'mann filter'],
    'blue print': ['blueprint', 'blue print'],
    'blueprint': ['blue print'],
    'wix filters': ['wix'],
    'wix': ['wix filters'],
    'febi bilstein': ['febi'],
    'febi': ['febi bilstein'],
    'k&n': ['kn', 'k and n', 'k&n'],
    'first line': ['firstline'],
  };

  const aliases = brandAliases[brandLower] || [];
  for (const alias of aliases) {
    if (titleLower.includes(alias)) return true;
  }

  return false;
}

// Search eBay for a specific part by brand + part number
async function getEbayPriceForPart(brand, partNumber, categoryName) {
  const cacheKey = `${brand}:${partNumber}`.toLowerCase();
  const cached = ebayCache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data;
  }

  try {
    const cleanPartNo = partNumber.replace(/[\s\/\-]/g, '');
    const results = await searchEbayParts(brand, cleanPartNo, categoryName, { limit: 5 });

    if (results.length > 0) {
      // Filter to only results that actually contain the brand name
      const relevant = results.filter(item => isRelevantResult(item.title, brand));

      if (relevant.length > 0) {
        const best = relevant.sort((a, b) => a.price - b.price)[0];
        const data = {
          price: best.price,
          image: best.image,
          url: best.url,
          title: best.title,
          seller: best.seller,
          freeShipping: best.freeShipping,
        };
        ebayCache.set(cacheKey, { data, timestamp: Date.now() });
        return data;
      }
    }
  } catch (err) {
    // Silently fail — we'll use estimated prices
  }

  ebayCache.set(cacheKey, { data: null, timestamp: Date.now() });
  return null;
}

function formatPart(p, categoryName, categorySlug, ebayData) {
  const artNo = p.articleNumber || p.articleNo || '';
  const brand = p.supplierName || '';
  const searchTerm = `${brand} ${artNo}`.trim();
  // Strip spaces/slashes from part number for eBay search URL
  const cleanPartNo = artNo.replace(/[\s\/\-]/g, '');
  const cleanSearchTerm = `${brand} ${cleanPartNo}`.trim();
  const estimated = estimatePrice(brand, categorySlug);

  // If we have live eBay data, use it
  if (ebayData) {
    const ebaySearchUrl = `https://www.ebay.co.uk/sch/i.html?_nkw=${encodeURIComponent(cleanSearchTerm)}&_sacat=0&LH_BIN=1&LH_PrefLoc=1&_sop=15&mkevt=1&mkcid=1&mkrid=710-53481-19255-0&campid=CarPartsComparison`;
    return {
      articleId: p.articleId,
      articleNumber: artNo,
      supplierName: brand,
      brandTier: getBrandTier(brand),
      productName: p.productName || p.articleProductName || categoryName,
      imageUrl: ebayData.image || p.imageUrl || p.images?.[0]?.imageURL200 || null,
      amazonUrl: `https://www.amazon.co.uk/s?k=${encodeURIComponent(searchTerm)}&tag=${AMAZON_TAG}`,
      ebayUrl: ebaySearchUrl,
      amazonPrice: estimated,
      ebayPrice: ebayData.price,
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
    ebayUrl: `https://www.ebay.co.uk/sch/i.html?_nkw=${encodeURIComponent(cleanSearchTerm)}&_sop=15`,
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

  // Get vehicle info if we don't have it yet
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

  // Fetch live eBay prices per part in parallel
  let ebayResults = new Map();
  let liveCount = 0;

  if (isEbayConfigured() && rawParts.length > 0) {
    try {
      const partsToSearch = rawParts.slice(0, 12);
      const searches = partsToSearch.map(p => {
        const brand = p.supplierName || '';
        const artNo = p.articleNumber || p.articleNo || '';
        if (!brand || !artNo) return Promise.resolve({ key: '', data: null });
        
        const key = (p.articleId || artNo).toString();
        return getEbayPriceForPart(brand, artNo, cat.name)
          .then(data => ({ key, data }));
      });

      const results = await Promise.all(searches);
      for (const { key, data } of results) {
        if (key && data) {
          ebayResults.set(key, data);
          liveCount++;
        }
      }
      
      if (liveCount > 0) {
        console.log(`eBay: ${liveCount}/${partsToSearch.length} parts matched with live prices for ${cat.name}`);
      }
    } catch (err) {
      console.error('eBay batch search failed:', err.message);
    }
  }

  // Format parts with eBay data where available
  const parts = rawParts.map(p => {
    const key = (p.articleId || p.articleNumber || p.articleNo || '').toString();
    const ebayData = ebayResults.get(key) || null;
    return formatPart(p, cat.name, category, ebayData);
  });

  const response = {
    parts,
    category,
    source: partsSource,
    priceSource: liveCount > 0 ? 'live' : 'estimated',
    liveMatches: liveCount,
  };

  if (vehicle) {
    response.vehicle = vehicle;
  }

  // Clean old cache entries (keep last 1000)
  if (ebayCache.size > 1000) {
    const entries = [...ebayCache.entries()].sort((a, b) => a[1].timestamp - b[1].timestamp);
    for (let i = 0; i < entries.length - 1000; i++) {
      ebayCache.delete(entries[i][0]);
    }
  }

  return NextResponse.json(response);
}
