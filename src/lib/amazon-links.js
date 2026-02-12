// Amazon affiliate link generator
// Uses search links with affiliate tag (PA-API requires 3 sales first)
// Once PA-API is available, this can be upgraded to pull real prices

const AMAZON_TAG = process.env.AMAZON_ASSOCIATE_TAG || 'carpartscomp-21';

// Category-specific Amazon search refinements
const CATEGORY_AMAZON_NODE = {
  // Amazon UK category node IDs for car parts
  'brake-pads': '381862031',
  'brake-discs': '381862031',
  'oil-filters': '381878031',
  'air-filters': '381878031',
  'cabin-filters': '381878031',
  'fuel-filters': '381878031',
  'spark-plugs': '381882031',
  'glow-plugs': '381882031',
  'batteries': '381860031',
  'wiper-blades': '381886031',
  'bulbs': '381884031',
  'headlights': '381884031',
  'alternators': '381864031',
  'starter-motors': '381864031',
};

// Generate a targeted Amazon search URL
export function getAmazonSearchUrl(make, model, categoryName, partNumber = null) {
  let query;

  if (partNumber) {
    // If we have a specific part number, search for that
    query = partNumber;
  } else {
    // Build a targeted search query
    query = `${make} ${model} ${categoryName}`;
  }

  const params = new URLSearchParams({
    k: query,
    tag: AMAZON_TAG,
  });

  // Add category node for better filtering if we have one
  const catSlug = categoryName.toLowerCase().replace(/\s+/g, '-');
  if (CATEGORY_AMAZON_NODE[catSlug]) {
    params.set('rh', `n:${CATEGORY_AMAZON_NODE[catSlug]}`);
  }

  return `https://www.amazon.co.uk/s?${params}`;
}

// Generate Amazon link for a specific product/brand
export function getAmazonProductUrl(brand, partNumber, categoryName) {
  const query = partNumber
    ? `${brand} ${partNumber}`
    : `${brand} ${categoryName}`;

  return `https://www.amazon.co.uk/s?k=${encodeURIComponent(query)}&tag=${AMAZON_TAG}`;
}
