// Real-price matching against Euro Car Parts / GSF Car Parts AWIN product datafeeds.
//
// A scheduled job (src/app/api/cron/refresh-pricing/route.js) downloads both
// retailers' AWIN datafeeds, builds a compact "suffix index" (keyed by the last
// 6 characters of a normalised part number), and uploads it as a small gzip JSON
// blob via Vercel Blob. This module fetches + caches that blob in memory and
// exposes a lookup used to attach a real price + product link to a part when
// the retailer actually stocks it. When there's no confident match, callers
// should fall back to a plain AWIN search link (no price shown).

const AWIN_PUBLISHER_ID = '2771194';
const EUROCARPARTS_MERCHANT_ID = '3997';
const GSF_MERCHANT_ID = '12707';

let cache = null; // { data, fetchedAt }
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

function normalize(s) {
  return (s || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
}

function buildDeepLink(merchantId, awProductId) {
  return `https://www.awin1.com/pclick.php?p=${awProductId}&a=${AWIN_PUBLISHER_ID}&m=${merchantId}`;
}

async function loadIndex() {
  const url = process.env.PRICING_INDEX_URL;
  if (!url) return null;
  if (cache && Date.now() - cache.fetchedAt < CACHE_TTL_MS) {
    return cache.data;
  }
  try {
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) return cache?.data || null;
    const data = await res.json();
    cache = { data, fetchedAt: Date.now() };
    return data;
  } catch (err) {
    console.error('Failed to load pricing index:', err.message);
    return cache?.data || null;
  }
}

function lookupIn(bucketMap, partNumber) {
  const norm = normalize(partNumber);
  if (norm.length < 6) return null;
  const key = norm.slice(-6);
  const candidates = bucketMap?.[key];
  if (!candidates) return null;
  for (const [mpn, price, awProductId] of candidates) {
    if (mpn.endsWith(norm) || norm.endsWith(mpn)) {
      return { price, awProductId };
    }
  }
  return null;
}

// Returns { gsfPrice, gsfUrl, euroPrice, euroUrl } — any field may be null/undefined
// when there's no confident match for that retailer.
export async function matchRetailerPrices(partNumber) {
  const index = await loadIndex();
  if (!index) return {};

  const result = {};

  const gsfMatch = lookupIn(index.gsf, partNumber);
  if (gsfMatch) {
    result.gsfPrice = gsfMatch.price;
    result.gsfUrl = buildDeepLink(GSF_MERCHANT_ID, gsfMatch.awProductId);
  }

  const euroMatch = lookupIn(index.euro, partNumber);
  if (euroMatch) {
    result.euroPrice = euroMatch.price;
    result.euroUrl = buildDeepLink(EUROCARPARTS_MERCHANT_ID, euroMatch.awProductId);
  }

  return result;
}
