// Real-price matching against Euro Car Parts / GSF Car Parts AWIN product datafeeds.
//
// A scheduled job (src/app/api/cron/refresh-pricing/route.js) downloads both
// retailers' AWIN datafeeds, builds a compact "suffix index" (keyed by the last
// 6 characters of a normalised part number), and uploads it as a small gzip JSON
// blob via Vercel Blob. This module fetches + caches that blob in memory and
// exposes a lookup used to attach a real price + product link to a part when
// the retailer actually stocks it. When there's no confident match, callers
// should fall back to a plain AWIN search link (no price shown).
//
// The index stores a ready-to-use tracked URL per entry (built at index-build
// time — see route.js for why GSF entries use merchant_deep_link wrapped in
// Awin's cread.php redirect rather than the fitment-specific aw_deep_link),
// so this module just reads it straight through.

let cache = null; // { data, fetchedAt }
const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

function normalize(s) {
  return (s || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
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
  for (const [mpn, price, url] of candidates) {
    if (mpn.endsWith(norm) || norm.endsWith(mpn)) {
      return { price, url };
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
    result.gsfUrl = gsfMatch.url;
  }

  const euroMatch = lookupIn(index.euro, partNumber);
  if (euroMatch) {
    result.euroPrice = euroMatch.price;
    result.euroUrl = euroMatch.url;
  }

  return result;
}
