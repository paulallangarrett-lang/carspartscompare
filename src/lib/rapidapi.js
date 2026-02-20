import { cached } from './cache.js';

const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY;
const RAPIDAPI_HOST = process.env.RAPIDAPI_HOST || 'auto-parts-catalog.p.rapidapi.com';
const BASE = `https://${RAPIDAPI_HOST}`;

const MONTH = 30 * 24 * 60 * 60 * 1000;

async function apiFetch(path) {
  console.log(`[RapidAPI] Fetching: ${path}`);
  const res = await fetch(`${BASE}${path}`, {
    headers: {
      'x-rapidapi-key': RAPIDAPI_KEY,
      'x-rapidapi-host': RAPIDAPI_HOST,
    },
  });
  if (!res.ok) {
    const text = await res.text();
    console.error(`[RapidAPI] Error ${res.status}: ${text}`);
    throw new Error(`RapidAPI ${res.status}: ${path}`);
  }
  return res.json();
}

// Get all manufacturers - cached forever (never changes)
export async function getManufacturers(typeId = 1, langId = 4, countryId = 63) {
  return cached(`manufacturers_${typeId}_${langId}_${countryId}`, () =>
    apiFetch(`/manufacturers/list/type-id/${typeId}/lang-id/${langId}/country-filter-id/${countryId}`)
  , MONTH * 12);
}

// Get models for a manufacturer - cached 3 months
// v2 response: { countModels, models: [...] }
export async function getModels(manufacturerId, typeId = 1, langId = 4, countryId = 63) {
  return cached(`models_v2_${manufacturerId}_${typeId}_${langId}_${countryId}`, async () => {
    const data = await apiFetch(`/models/list/type-id/${typeId}/manufacturer-id/${manufacturerId}/lang-id/${langId}/country-filter-id/${countryId}`);
    return data.models || data;
  }, MONTH * 3);
}

// Get vehicle variants for a model - cached 3 months
// v2 endpoint: list-vehicles-types (includes powerKw, fuelType, capacityTech etc.)
// v2 response: { modelType, countModelTypes, modelTypes: [...] }
export async function getVehicles(modelId, typeId = 1, langId = 4, countryId = 63) {
  return cached(`vehicles_v2_${modelId}`, async () => {
    const data = await apiFetch(`/types/type-id/${typeId}/list-vehicles-types/${modelId}/lang-id/${langId}/country-filter-id/${countryId}`);
    // Normalise field names to match what vehicle-matcher expects
    const types = data.modelTypes || data;
    return types.map(v => ({
      vehicleId: v.vehicleId,
      vehicleName: v.typeEngineName || '',
      manufacturerName: v.manufacturerName || '',
      modelName: v.modelName || '',
      powerKw: v.powerKw ? parseFloat(v.powerKw) : null,
      powerPs: v.powerPs ? parseFloat(v.powerPs) : null,
      fuelType: v.fuelType || '',
      bodyType: v.bodyType || '',
      capacityTech: v.capacityTech ? parseFloat(v.capacityTech) : null,
      capacityLt: v.capacityLt ? parseFloat(v.capacityLt) : null,
      numberOfCylinders: v.numberOfCylinders || null,
      engineCodes: v.engineCodes || '',
      constructionFrom: v.constructionIntervalStart || '',
      constructionTo: v.constructionIntervalEnd || '',
    }));
  }, MONTH * 3);
}

// Get parts for a vehicle+category - cached 1 month
// v2 response: { vehicleId, categoryId, countArticles, articles: [...] }
export async function getArticles(vehicleId, categoryId, typeId = 1, langId = 4) {
  return cached(`articles_v2_${vehicleId}_${categoryId}`, async () => {
    const data = await apiFetch(`/articles/list/type-id/${typeId}/vehicle-id/${vehicleId}/category-id/${categoryId}/lang-id/${langId}`);
    // Return in format parts route expects: { articles: [...] }
    const articles = data.articles || data;
    return {
      articles: articles.map(a => ({
        articleId: a.articleId,
        articleNumber: a.articleNo || a.articleNumber || '',
        supplierName: a.supplierName || '',
        productName: a.articleProductName || a.productName || '',
        imageUrl: a.s3image || a.imageUrl || null,
      })),
    };
  }, MONTH);
}

// Get part categories for a vehicle - cached 3 months
// v2 response: { categories: [...] }
export async function getCategories(vehicleId, langId = 4, typeId = 1) {
  return cached(`categories_v2_${vehicleId}_${langId}`, async () => {
    const data = await apiFetch(`/category/type-id/${typeId}/products-groups-variant-1/${vehicleId}/lang-id/${langId}`);
    return data.categories || data;
  }, MONTH * 3);
}
