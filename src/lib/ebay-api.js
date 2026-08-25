// eBay Browse API client
// Uses OAuth 2.0 Client Credentials flow for application-level access
// Docs: https://developer.ebay.com/api-docs/buy/browse/overview.html

let cachedToken = null;
let tokenExpiry = 0;

// Get OAuth application token
async function getAccessToken() {
    // Return cached token if still valid (with 5 min buffer)
  if (cachedToken && Date.now() < tokenExpiry - 300000) {
        return cachedToken;
  }

  const appId = process.env.EBAY_APP_ID;
    const certId = process.env.EBAY_CERT_ID;

  if (!appId || !certId) {
        throw new Error('EBAY_APP_ID and EBAY_CERT_ID required');
  }

  const credentials = Buffer.from(`${appId}:${certId}`).toString('base64');

  const res = await fetch('https://api.ebay.com/identity/v1/oauth2/token', {
        method: 'POST',
        headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Basic ${credentials}`,
        },
        body: 'grant_type=client_credentials&scope=https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope',
  });

  if (!res.ok) {
        const err = await res.text();
        throw new Error(`eBay OAuth failed: ${res.status} ${err}`);
  }

  const data = await res.json();
    cachedToken = data.access_token;
    tokenExpiry = Date.now() + (data.expires_in * 1000);
    return cachedToken;
}

// Search eBay for car parts
// Returns array of items with price, title, image, url
export async function searchEbayParts(make, model, categoryName, options = {}) {
    const {
          limit = 12,
          minPrice = null,
          maxPrice = null,
          sortBy = 'BEST_MATCH',
    } = options;

  const token = await getAccessToken();

  // Build search query — specific enough to get relevant parts
  const query = `${make} ${model} ${categoryName}`;

  // Build filter string for UK marketplace
  const filters = [
        'deliveryCountry:GB',
        'itemLocationCountry:GB',
        'buyingOptions:{FIXED_PRICE}',
      ];

  if (minPrice) filters.push(`price:[${minPrice}]`);
    if (maxPrice) filters.push(`price:[..${maxPrice}]`);

  const params = new URLSearchParams({
        q: query,
        limit: String(limit),
        sort: sortBy,
        filter: filters.join(','),
        fieldgroups: 'MATCHING_ITEMS',
  });

  // IMPORTANT: 'CarPartsComparison' below is a placeholder, not a real eBay Partner
  // Network campaign ID (EPN campaign IDs are numeric, e.g. 5338xxxxxx). Until this is
  // replaced with a real campaign ID from partnernetwork.ebay.com, eBay is very likely
  // ignoring this header and itemAffiliateWebUrl will be empty on returned items, meaning
  // clicks are NOT earning commission. Set EBAY_EPN_CAMPAIGN_ID once you have a real one.
  const epnCampaignId = process.env.EBAY_EPN_CAMPAIGN_ID || 'CarPartsComparison';

  const res = await fetch(
        `https://api.ebay.com/buy/browse/v1/item_summary/search?${params}`,
    {
            headers: {
                      'Authorization': `Bearer ${token}`,
                      'X-EBAY-C-MARKETPLACE-ID': 'EBAY_GB',
                      'X-EBAY-C-ENDUSERCTX': `affiliateCampaignId=${epnCampaignId}`,
            },
            // Cache for 24 hours using Next.js fetch cache
            next: { revalidate: 86400 },
    }
      );

  if (!res.ok) {
        const err = await res.text();
        console.error(`eBay search failed: ${res.status} ${err}`);
        return [];
  }

  const data = await res.json();

  if (!data.itemSummaries || data.itemSummaries.length === 0) {
        return [];
  }

  // Map to our standard format
  return data.itemSummaries.map(item => ({
        id: item.itemId,
        title: item.title,
        price: parseFloat(item.price?.value) || null,
        currency: item.price?.currency || 'GBP',
        image: item.thumbnailImages?.[0]?.imageUrl || item.image?.imageUrl || null,
        url: item.itemAffiliateWebUrl || item.itemWebUrl,
        condition: item.condition || 'New',
        seller: item.seller?.username || null,
        sellerRating: item.seller?.feedbackPercentage ? parseFloat(item.seller.feedbackPercentage) : null,
        freeShipping: item.shippingOptions?.some(s => parseFloat(s.shippingCost?.value) === 0) || false,
        shippingCost: item.shippingOptions?.[0]?.shippingCost?.value
          ? parseFloat(item.shippingOptions[0].shippingCost.value)
                : null,
        source: 'ebay',
  }));
}

// Check if eBay API is configured
export function isEbayConfigured() {
    return !!(process.env.EBAY_APP_ID && process.env.EBAY_CERT_ID);
}
