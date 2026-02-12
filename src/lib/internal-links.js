// Cross-linking data for internal SEO links
// Maps models to their competitors (similar segment cars people cross-shop)

export const COMPETITOR_MODELS = {
  // Superminis
  'ford/fiesta': ['vauxhall/corsa', 'volkswagen/polo', 'peugeot/208', 'renault/clio', 'seat/ibiza', 'hyundai/i20', 'kia/rio', 'toyota/yaris'],
  'vauxhall/corsa': ['ford/fiesta', 'volkswagen/polo', 'peugeot/208', 'renault/clio', 'seat/ibiza', 'hyundai/i20', 'kia/rio'],
  'volkswagen/polo': ['ford/fiesta', 'vauxhall/corsa', 'seat/ibiza', 'skoda/fabia', 'peugeot/208', 'renault/clio'],
  'peugeot/208': ['ford/fiesta', 'vauxhall/corsa', 'renault/clio', 'volkswagen/polo', 'citroen/c3'],
  'renault/clio': ['peugeot/208', 'ford/fiesta', 'vauxhall/corsa', 'citroen/c3', 'volkswagen/polo'],
  'seat/ibiza': ['volkswagen/polo', 'ford/fiesta', 'skoda/fabia', 'vauxhall/corsa', 'hyundai/i20'],
  'skoda/fabia': ['volkswagen/polo', 'seat/ibiza', 'ford/fiesta', 'hyundai/i20', 'kia/rio'],
  'hyundai/i20': ['ford/fiesta', 'vauxhall/corsa', 'kia/rio', 'toyota/yaris', 'volkswagen/polo'],
  'kia/rio': ['hyundai/i20', 'ford/fiesta', 'vauxhall/corsa', 'skoda/fabia', 'seat/ibiza'],
  'toyota/yaris': ['honda/jazz', 'hyundai/i20', 'ford/fiesta', 'vauxhall/corsa', 'mazda/mazda2'],

  // Family hatches
  'ford/focus': ['vauxhall/astra', 'volkswagen/golf', 'peugeot/308', 'hyundai/i30', 'kia/ceed', 'skoda/octavia', 'seat/leon', 'mazda/mazda3'],
  'vauxhall/astra': ['ford/focus', 'volkswagen/golf', 'peugeot/308', 'hyundai/i30', 'kia/ceed', 'skoda/octavia'],
  'volkswagen/golf': ['ford/focus', 'vauxhall/astra', 'seat/leon', 'skoda/octavia', 'peugeot/308', 'bmw/1-series', 'audi/a3'],
  'peugeot/308': ['ford/focus', 'vauxhall/astra', 'volkswagen/golf', 'renault/megane', 'citroen/c4'],
  'hyundai/i30': ['ford/focus', 'kia/ceed', 'vauxhall/astra', 'volkswagen/golf', 'mazda/mazda3'],
  'kia/ceed': ['hyundai/i30', 'ford/focus', 'vauxhall/astra', 'volkswagen/golf', 'skoda/octavia'],
  'skoda/octavia': ['volkswagen/golf', 'ford/focus', 'seat/leon', 'hyundai/i30', 'kia/ceed'],
  'seat/leon': ['volkswagen/golf', 'skoda/octavia', 'ford/focus', 'hyundai/i30', 'peugeot/308'],

  // Small SUVs
  'ford/puma': ['vauxhall/mokka', 'volkswagen/t-roc', 'peugeot/2008', 'hyundai/kona', 'kia/stonic', 'renault/captur', 'skoda/kamiq', 'nissan/juke'],
  'vauxhall/mokka': ['ford/puma', 'peugeot/2008', 'renault/captur', 'hyundai/kona', 'volkswagen/t-roc'],
  'volkswagen/t-roc': ['ford/puma', 'seat/arona', 'skoda/kamiq', 'hyundai/kona', 'kia/stonic'],
  'nissan/juke': ['ford/puma', 'hyundai/kona', 'renault/captur', 'vauxhall/mokka', 'peugeot/2008'],
  'hyundai/kona': ['kia/stonic', 'ford/puma', 'nissan/juke', 'volkswagen/t-roc', 'vauxhall/mokka'],
  'kia/stonic': ['hyundai/kona', 'ford/puma', 'nissan/juke', 'seat/arona', 'renault/captur'],
  'renault/captur': ['peugeot/2008', 'nissan/juke', 'ford/puma', 'vauxhall/mokka', 'citroen/c3-aircross'],
  'peugeot/2008': ['renault/captur', 'vauxhall/mokka', 'citroen/c3-aircross', 'ford/puma', 'volkswagen/t-roc'],

  // Mid SUVs
  'ford/kuga': ['vauxhall/grandland', 'volkswagen/tiguan', 'peugeot/3008', 'hyundai/tucson', 'kia/sportage', 'nissan/qashqai', 'skoda/karoq', 'toyota/rav4'],
  'nissan/qashqai': ['ford/kuga', 'hyundai/tucson', 'kia/sportage', 'toyota/c-hr', 'volkswagen/tiguan', 'peugeot/3008'],
  'hyundai/tucson': ['kia/sportage', 'ford/kuga', 'nissan/qashqai', 'volkswagen/tiguan', 'toyota/rav4'],
  'kia/sportage': ['hyundai/tucson', 'ford/kuga', 'nissan/qashqai', 'volkswagen/tiguan', 'skoda/karoq'],
  'volkswagen/tiguan': ['ford/kuga', 'skoda/karoq', 'seat/tarraco', 'hyundai/tucson', 'peugeot/3008'],
  'peugeot/3008': ['renault/kadjar', 'ford/kuga', 'volkswagen/tiguan', 'citroen/c5-aircross', 'nissan/qashqai'],

  // Premium
  'bmw/3-series': ['audi/a4', 'mercedes-benz/c-class', 'volkswagen/passat', 'volvo/s60', 'jaguar/xe'],
  'bmw/1-series': ['audi/a3', 'mercedes-benz/a-class', 'volkswagen/golf', 'mini/hatch'],
  'audi/a3': ['bmw/1-series', 'mercedes-benz/a-class', 'volkswagen/golf', 'seat/leon'],
  'audi/a4': ['bmw/3-series', 'mercedes-benz/c-class', 'volkswagen/passat', 'volvo/s60'],
  'mercedes-benz/a-class': ['bmw/1-series', 'audi/a3', 'volkswagen/golf', 'mini/hatch'],
  'mercedes-benz/c-class': ['bmw/3-series', 'audi/a4', 'volvo/s60', 'jaguar/xe'],

  // Premium SUVs
  'bmw/x1': ['audi/q3', 'mercedes-benz/gla', 'volvo/xc40', 'bmw/x2'],
  'bmw/x3': ['audi/q5', 'mercedes-benz/glc', 'volvo/xc60', 'land-rover/discovery-sport'],
  'bmw/x5': ['audi/q7', 'mercedes-benz/gle', 'volvo/xc90', 'land-rover/discovery'],
  'audi/q3': ['bmw/x1', 'mercedes-benz/gla', 'volvo/xc40', 'volkswagen/t-roc'],
  'audi/q5': ['bmw/x3', 'mercedes-benz/glc', 'volvo/xc60', 'land-rover/discovery-sport'],
  'mercedes-benz/glc': ['bmw/x3', 'audi/q5', 'volvo/xc60', 'land-rover/discovery-sport'],
};

// Top 15 most popular UK models — used for "popular parts" sections
export const TOP_UK_MODELS = [
  { make: 'Ford', makeSlug: 'ford', model: 'Fiesta', modelSlug: 'fiesta' },
  { make: 'Ford', makeSlug: 'ford', model: 'Focus', modelSlug: 'focus' },
  { make: 'Ford', makeSlug: 'ford', model: 'Puma', modelSlug: 'puma' },
  { make: 'Vauxhall', makeSlug: 'vauxhall', model: 'Corsa', modelSlug: 'corsa' },
  { make: 'Volkswagen', makeSlug: 'volkswagen', model: 'Golf', modelSlug: 'golf' },
  { make: 'Volkswagen', makeSlug: 'volkswagen', model: 'Polo', modelSlug: 'polo' },
  { make: 'Nissan', makeSlug: 'nissan', model: 'Qashqai', modelSlug: 'qashqai' },
  { make: 'BMW', makeSlug: 'bmw', model: '3 Series', modelSlug: '3-series' },
  { make: 'Toyota', makeSlug: 'toyota', model: 'Yaris', modelSlug: 'yaris' },
  { make: 'Hyundai', makeSlug: 'hyundai', model: 'Tucson', modelSlug: 'tucson' },
  { make: 'Kia', makeSlug: 'kia', model: 'Sportage', modelSlug: 'sportage' },
  { make: 'Peugeot', makeSlug: 'peugeot', model: '208', modelSlug: '208' },
  { make: 'Audi', makeSlug: 'audi', model: 'A3', modelSlug: 'a3' },
  { make: 'Mercedes', makeSlug: 'mercedes-benz', model: 'A-Class', modelSlug: 'a-class' },
  { make: 'Mini', makeSlug: 'mini', model: 'Hatch', modelSlug: 'hatch' },
];

// Category to guide mapping
export const CATEGORY_GUIDES = {
  'brake-pads': { slug: 'brake-pads', title: 'How to Choose the Right Brake Pads' },
  'brake-discs': { slug: 'brake-pads', title: 'Brake Pads & Discs Buying Guide' },
  'oil-filters': { slug: 'oil-filters', title: 'Oil Filter Buying Guide' },
  'batteries': { slug: 'car-batteries', title: 'Car Battery Buying Guide' },
  'wiper-blades': { slug: 'wiper-blades', title: 'Best Wiper Blades Guide' },
  'air-filters': { slug: 'oil-filters', title: 'Filter Buying Guide' },
  'cabin-filters': { slug: 'oil-filters', title: 'Filter Buying Guide' },
  'fuel-filters': { slug: 'oil-filters', title: 'Filter Buying Guide' },
  'spark-plugs': { slug: 'when-to-replace-parts', title: 'When to Replace Parts Guide' },
  'timing-belts': { slug: 'when-to-replace-parts', title: 'When to Replace Parts Guide' },
  'clutch-kits': { slug: 'when-to-replace-parts', title: 'When to Replace Parts Guide' },
};

// Get competitor models for a given make/model
export function getCompetitors(makeSlug, modelSlug, limit = 6) {
  const key = `${makeSlug}/${modelSlug}`;
  const competitors = COMPETITOR_MODELS[key] || [];
  return competitors.slice(0, limit).map(path => {
    const [mk, md] = path.split('/');
    const makeName = mk.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    const modelName = md.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
    return { makeSlug: mk, modelSlug: md, makeName, modelName, fullName: `${makeName} ${modelName}` };
  });
}

// Get guide for a category
export function getGuideForCategory(categorySlug) {
  return CATEGORY_GUIDES[categorySlug] || null;
}
