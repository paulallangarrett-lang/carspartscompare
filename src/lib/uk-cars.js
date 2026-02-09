// Top UK cars by registration volume - used for browse pages and sitemap
// Each make has: name, slug, and array of popular models

export const UK_MAKES = [
  {
    name: 'Ford', slug: 'ford',
    models: [
      { name: 'Fiesta', slug: 'fiesta', years: '2002-2023' },
      { name: 'Focus', slug: 'focus', years: '1998-2025' },
      { name: 'Puma', slug: 'puma', years: '2019-2025' },
      { name: 'Kuga', slug: 'kuga', years: '2008-2025' },
      { name: 'Mondeo', slug: 'mondeo', years: '2000-2022' },
      { name: 'EcoSport', slug: 'ecosport', years: '2014-2022' },
      { name: 'Galaxy', slug: 'galaxy', years: '2006-2023' },
      { name: 'S-Max', slug: 's-max', years: '2006-2023' },
      { name: 'C-Max', slug: 'c-max', years: '2003-2019' },
      { name: 'Ka', slug: 'ka', years: '2009-2016' },
      { name: 'Ka+', slug: 'ka-plus', years: '2016-2021' },
      { name: 'Ranger', slug: 'ranger', years: '2011-2025' },
      { name: 'Transit', slug: 'transit', years: '2000-2025' },
      { name: 'Transit Connect', slug: 'transit-connect', years: '2002-2025' },
      { name: 'Transit Custom', slug: 'transit-custom', years: '2012-2025' },
    ],
  },
  {
    name: 'Vauxhall', slug: 'vauxhall',
    models: [
      { name: 'Corsa', slug: 'corsa', years: '2000-2025' },
      { name: 'Astra', slug: 'astra', years: '2004-2025' },
      { name: 'Mokka', slug: 'mokka', years: '2012-2025' },
      { name: 'Grandland', slug: 'grandland', years: '2017-2025' },
      { name: 'Crossland', slug: 'crossland', years: '2017-2023' },
      { name: 'Insignia', slug: 'insignia', years: '2008-2022' },
      { name: 'Adam', slug: 'adam', years: '2013-2019' },
      { name: 'Viva', slug: 'viva', years: '2015-2019' },
      { name: 'Meriva', slug: 'meriva', years: '2003-2017' },
      { name: 'Zafira', slug: 'zafira', years: '2005-2018' },
      { name: 'Vivaro', slug: 'vivaro', years: '2001-2025' },
      { name: 'Combo', slug: 'combo', years: '2012-2025' },
    ],
  },
  {
    name: 'Volkswagen', slug: 'volkswagen',
    models: [
      { name: 'Golf', slug: 'golf', years: '2003-2025' },
      { name: 'Polo', slug: 'polo', years: '2002-2025' },
      { name: 'Up', slug: 'up', years: '2012-2023' },
      { name: 'T-Roc', slug: 't-roc', years: '2017-2025' },
      { name: 'Tiguan', slug: 'tiguan', years: '2007-2025' },
      { name: 'T-Cross', slug: 't-cross', years: '2019-2025' },
      { name: 'Passat', slug: 'passat', years: '2005-2025' },
      { name: 'Touran', slug: 'touran', years: '2003-2023' },
      { name: 'Touareg', slug: 'touareg', years: '2010-2025' },
      { name: 'ID.3', slug: 'id3', years: '2020-2025' },
      { name: 'ID.4', slug: 'id4', years: '2021-2025' },
      { name: 'Transporter', slug: 'transporter', years: '2003-2025' },
      { name: 'Caddy', slug: 'caddy', years: '2004-2025' },
    ],
  },
  {
    name: 'BMW', slug: 'bmw',
    models: [
      { name: '1 Series', slug: '1-series', years: '2004-2025' },
      { name: '2 Series', slug: '2-series', years: '2014-2025' },
      { name: '3 Series', slug: '3-series', years: '2005-2025' },
      { name: '4 Series', slug: '4-series', years: '2013-2025' },
      { name: '5 Series', slug: '5-series', years: '2003-2025' },
      { name: 'X1', slug: 'x1', years: '2009-2025' },
      { name: 'X2', slug: 'x2', years: '2018-2025' },
      { name: 'X3', slug: 'x3', years: '2004-2025' },
      { name: 'X5', slug: 'x5', years: '2007-2025' },
      { name: 'MINI Hatch', slug: 'mini-hatch', years: '2006-2025' },
      { name: 'MINI Countryman', slug: 'mini-countryman', years: '2010-2025' },
    ],
  },
  {
    name: 'Audi', slug: 'audi',
    models: [
      { name: 'A1', slug: 'a1', years: '2010-2025' },
      { name: 'A3', slug: 'a3', years: '2003-2025' },
      { name: 'A4', slug: 'a4', years: '2004-2025' },
      { name: 'A5', slug: 'a5', years: '2007-2025' },
      { name: 'A6', slug: 'a6', years: '2004-2025' },
      { name: 'Q2', slug: 'q2', years: '2016-2025' },
      { name: 'Q3', slug: 'q3', years: '2011-2025' },
      { name: 'Q5', slug: 'q5', years: '2008-2025' },
      { name: 'Q7', slug: 'q7', years: '2006-2025' },
      { name: 'TT', slug: 'tt', years: '2006-2023' },
    ],
  },
  {
    name: 'Toyota', slug: 'toyota',
    models: [
      { name: 'Yaris', slug: 'yaris', years: '2005-2025' },
      { name: 'Corolla', slug: 'corolla', years: '2019-2025' },
      { name: 'C-HR', slug: 'c-hr', years: '2016-2025' },
      { name: 'RAV4', slug: 'rav4', years: '2006-2025' },
      { name: 'Aygo', slug: 'aygo', years: '2005-2023' },
      { name: 'Aygo X', slug: 'aygo-x', years: '2022-2025' },
      { name: 'Prius', slug: 'prius', years: '2004-2025' },
      { name: 'Yaris Cross', slug: 'yaris-cross', years: '2021-2025' },
      { name: 'Hilux', slug: 'hilux', years: '2005-2025' },
      { name: 'Land Cruiser', slug: 'land-cruiser', years: '2003-2025' },
    ],
  },
  {
    name: 'Mercedes-Benz', slug: 'mercedes-benz',
    models: [
      { name: 'A-Class', slug: 'a-class', years: '2012-2025' },
      { name: 'B-Class', slug: 'b-class', years: '2012-2025' },
      { name: 'C-Class', slug: 'c-class', years: '2007-2025' },
      { name: 'E-Class', slug: 'e-class', years: '2009-2025' },
      { name: 'GLA', slug: 'gla', years: '2014-2025' },
      { name: 'GLB', slug: 'glb', years: '2019-2025' },
      { name: 'GLC', slug: 'glc', years: '2015-2025' },
      { name: 'GLE', slug: 'gle', years: '2015-2025' },
      { name: 'CLA', slug: 'cla', years: '2013-2025' },
      { name: 'Sprinter', slug: 'sprinter', years: '2006-2025' },
      { name: 'Vito', slug: 'vito', years: '2003-2025' },
    ],
  },
  {
    name: 'Nissan', slug: 'nissan',
    models: [
      { name: 'Qashqai', slug: 'qashqai', years: '2007-2025' },
      { name: 'Juke', slug: 'juke', years: '2010-2025' },
      { name: 'Micra', slug: 'micra', years: '2003-2025' },
      { name: 'Leaf', slug: 'leaf', years: '2011-2025' },
      { name: 'X-Trail', slug: 'x-trail', years: '2007-2025' },
      { name: 'Navara', slug: 'navara', years: '2005-2025' },
      { name: 'Note', slug: 'note', years: '2006-2017' },
      { name: 'Pulsar', slug: 'pulsar', years: '2014-2018' },
    ],
  },
  {
    name: 'Hyundai', slug: 'hyundai',
    models: [
      { name: 'i10', slug: 'i10', years: '2008-2025' },
      { name: 'i20', slug: 'i20', years: '2009-2025' },
      { name: 'i30', slug: 'i30', years: '2007-2025' },
      { name: 'Tucson', slug: 'tucson', years: '2004-2025' },
      { name: 'Kona', slug: 'kona', years: '2017-2025' },
      { name: 'IONIQ 5', slug: 'ioniq-5', years: '2021-2025' },
      { name: 'Santa Fe', slug: 'santa-fe', years: '2006-2025' },
      { name: 'Bayon', slug: 'bayon', years: '2021-2025' },
    ],
  },
  {
    name: 'Kia', slug: 'kia',
    models: [
      { name: 'Picanto', slug: 'picanto', years: '2004-2025' },
      { name: 'Rio', slug: 'rio', years: '2005-2025' },
      { name: 'Ceed', slug: 'ceed', years: '2007-2025' },
      { name: 'Sportage', slug: 'sportage', years: '2005-2025' },
      { name: 'Niro', slug: 'niro', years: '2016-2025' },
      { name: 'EV6', slug: 'ev6', years: '2021-2025' },
      { name: 'Stonic', slug: 'stonic', years: '2017-2025' },
      { name: 'Sorento', slug: 'sorento', years: '2003-2025' },
      { name: 'XCeed', slug: 'xceed', years: '2019-2025' },
    ],
  },
  {
    name: 'Honda', slug: 'honda',
    models: [
      { name: 'Civic', slug: 'civic', years: '2005-2025' },
      { name: 'Jazz', slug: 'jazz', years: '2002-2025' },
      { name: 'HR-V', slug: 'hr-v', years: '2015-2025' },
      { name: 'CR-V', slug: 'cr-v', years: '2002-2025' },
      { name: 'ZR-V', slug: 'zr-v', years: '2023-2025' },
    ],
  },
  {
    name: 'Peugeot', slug: 'peugeot',
    models: [
      { name: '108', slug: '108', years: '2014-2022' },
      { name: '208', slug: '208', years: '2012-2025' },
      { name: '308', slug: '308', years: '2007-2025' },
      { name: '508', slug: '508', years: '2011-2025' },
      { name: '2008', slug: '2008', years: '2013-2025' },
      { name: '3008', slug: '3008', years: '2009-2025' },
      { name: '5008', slug: '5008', years: '2009-2025' },
      { name: 'Partner', slug: 'partner', years: '2008-2025' },
      { name: 'Rifter', slug: 'rifter', years: '2018-2025' },
    ],
  },
  {
    name: 'Renault', slug: 'renault',
    models: [
      { name: 'Clio', slug: 'clio', years: '2005-2025' },
      { name: 'Captur', slug: 'captur', years: '2013-2025' },
      { name: 'Megane', slug: 'megane', years: '2003-2023' },
      { name: 'Kadjar', slug: 'kadjar', years: '2015-2022' },
      { name: 'Arkana', slug: 'arkana', years: '2021-2025' },
      { name: 'Zoe', slug: 'zoe', years: '2012-2023' },
      { name: 'Scenic', slug: 'scenic', years: '2003-2025' },
      { name: 'Trafic', slug: 'trafic', years: '2001-2025' },
    ],
  },
  {
    name: 'Citroen', slug: 'citroen',
    models: [
      { name: 'C1', slug: 'c1', years: '2005-2022' },
      { name: 'C3', slug: 'c3', years: '2002-2025' },
      { name: 'C3 Aircross', slug: 'c3-aircross', years: '2017-2025' },
      { name: 'C4', slug: 'c4', years: '2004-2025' },
      { name: 'C5 Aircross', slug: 'c5-aircross', years: '2019-2025' },
      { name: 'Berlingo', slug: 'berlingo', years: '2008-2025' },
      { name: 'Dispatch', slug: 'dispatch', years: '2007-2025' },
    ],
  },
  {
    name: 'SEAT', slug: 'seat',
    models: [
      { name: 'Ibiza', slug: 'ibiza', years: '2002-2025' },
      { name: 'Leon', slug: 'leon', years: '2005-2025' },
      { name: 'Arona', slug: 'arona', years: '2017-2025' },
      { name: 'Ateca', slug: 'ateca', years: '2016-2025' },
      { name: 'Tarraco', slug: 'tarraco', years: '2019-2025' },
    ],
  },
  {
    name: 'Skoda', slug: 'skoda',
    models: [
      { name: 'Fabia', slug: 'fabia', years: '2000-2025' },
      { name: 'Octavia', slug: 'octavia', years: '2004-2025' },
      { name: 'Superb', slug: 'superb', years: '2008-2025' },
      { name: 'Kamiq', slug: 'kamiq', years: '2019-2025' },
      { name: 'Karoq', slug: 'karoq', years: '2018-2025' },
      { name: 'Kodiaq', slug: 'kodiaq', years: '2017-2025' },
      { name: 'Scala', slug: 'scala', years: '2019-2025' },
      { name: 'Enyaq', slug: 'enyaq', years: '2021-2025' },
    ],
  },
  {
    name: 'Mazda', slug: 'mazda',
    models: [
      { name: 'Mazda2', slug: 'mazda2', years: '2007-2025' },
      { name: 'Mazda3', slug: 'mazda3', years: '2004-2025' },
      { name: 'Mazda6', slug: 'mazda6', years: '2002-2023' },
      { name: 'CX-3', slug: 'cx-3', years: '2015-2025' },
      { name: 'CX-30', slug: 'cx-30', years: '2019-2025' },
      { name: 'CX-5', slug: 'cx-5', years: '2012-2025' },
      { name: 'CX-60', slug: 'cx-60', years: '2022-2025' },
      { name: 'MX-5', slug: 'mx-5', years: '2005-2025' },
    ],
  },
  {
    name: 'Volvo', slug: 'volvo',
    models: [
      { name: 'XC40', slug: 'xc40', years: '2018-2025' },
      { name: 'XC60', slug: 'xc60', years: '2008-2025' },
      { name: 'XC90', slug: 'xc90', years: '2003-2025' },
      { name: 'V40', slug: 'v40', years: '2012-2019' },
      { name: 'V60', slug: 'v60', years: '2010-2025' },
      { name: 'V90', slug: 'v90', years: '2016-2025' },
      { name: 'S60', slug: 's60', years: '2010-2025' },
      { name: 'EX30', slug: 'ex30', years: '2024-2025' },
    ],
  },
  {
    name: 'Land Rover', slug: 'land-rover',
    models: [
      { name: 'Range Rover Evoque', slug: 'range-rover-evoque', years: '2011-2025' },
      { name: 'Range Rover Sport', slug: 'range-rover-sport', years: '2005-2025' },
      { name: 'Range Rover Velar', slug: 'range-rover-velar', years: '2017-2025' },
      { name: 'Range Rover', slug: 'range-rover', years: '2002-2025' },
      { name: 'Discovery Sport', slug: 'discovery-sport', years: '2014-2025' },
      { name: 'Discovery', slug: 'discovery', years: '2004-2025' },
      { name: 'Defender', slug: 'defender', years: '2020-2025' },
    ],
  },
  {
    name: 'MINI', slug: 'mini',
    models: [
      { name: 'Hatch', slug: 'hatch', years: '2006-2025' },
      { name: 'Clubman', slug: 'clubman', years: '2007-2025' },
      { name: 'Countryman', slug: 'countryman', years: '2010-2025' },
      { name: 'Convertible', slug: 'convertible', years: '2004-2025' },
    ],
  },
  {
    name: 'Fiat', slug: 'fiat',
    models: [
      { name: '500', slug: '500', years: '2008-2025' },
      { name: '500X', slug: '500x', years: '2015-2025' },
      { name: 'Panda', slug: 'panda', years: '2004-2025' },
      { name: 'Tipo', slug: 'tipo', years: '2016-2025' },
      { name: 'Ducato', slug: 'ducato', years: '2006-2025' },
    ],
  },
  {
    name: 'Suzuki', slug: 'suzuki',
    models: [
      { name: 'Swift', slug: 'swift', years: '2005-2025' },
      { name: 'Vitara', slug: 'vitara', years: '2015-2025' },
      { name: 'S-Cross', slug: 's-cross', years: '2013-2025' },
      { name: 'Jimny', slug: 'jimny', years: '2018-2025' },
      { name: 'Ignis', slug: 'ignis', years: '2017-2025' },
    ],
  },
  {
    name: 'Dacia', slug: 'dacia',
    models: [
      { name: 'Sandero', slug: 'sandero', years: '2013-2025' },
      { name: 'Duster', slug: 'duster', years: '2012-2025' },
      { name: 'Jogger', slug: 'jogger', years: '2022-2025' },
      { name: 'Spring', slug: 'spring', years: '2022-2025' },
    ],
  },
  {
    name: 'MG', slug: 'mg',
    models: [
      { name: 'ZS', slug: 'zs', years: '2017-2025' },
      { name: 'HS', slug: 'hs', years: '2019-2025' },
      { name: 'MG4', slug: 'mg4', years: '2022-2025' },
      { name: 'MG5', slug: 'mg5', years: '2022-2025' },
      { name: 'MG3', slug: 'mg3', years: '2018-2025' },
    ],
  },
  {
    name: 'Tesla', slug: 'tesla',
    models: [
      { name: 'Model 3', slug: 'model-3', years: '2019-2025' },
      { name: 'Model Y', slug: 'model-y', years: '2022-2025' },
      { name: 'Model S', slug: 'model-s', years: '2014-2025' },
      { name: 'Model X', slug: 'model-x', years: '2016-2025' },
    ],
  },
  {
    name: 'Jaguar', slug: 'jaguar',
    models: [
      { name: 'F-Pace', slug: 'f-pace', years: '2016-2025' },
      { name: 'E-Pace', slug: 'e-pace', years: '2018-2025' },
      { name: 'I-Pace', slug: 'i-pace', years: '2018-2025' },
      { name: 'XE', slug: 'xe', years: '2015-2023' },
      { name: 'XF', slug: 'xf', years: '2008-2025' },
      { name: 'F-Type', slug: 'f-type', years: '2013-2025' },
    ],
  },
  {
    name: 'Lexus', slug: 'lexus',
    models: [
      { name: 'NX', slug: 'nx', years: '2014-2025' },
      { name: 'RX', slug: 'rx', years: '2003-2025' },
      { name: 'UX', slug: 'ux', years: '2019-2025' },
      { name: 'IS', slug: 'is', years: '2005-2025' },
      { name: 'ES', slug: 'es', years: '2018-2025' },
    ],
  },
  {
    name: 'Porsche', slug: 'porsche',
    models: [
      { name: 'Cayenne', slug: 'cayenne', years: '2003-2025' },
      { name: 'Macan', slug: 'macan', years: '2014-2025' },
      { name: 'Taycan', slug: 'taycan', years: '2020-2025' },
      { name: '911', slug: '911', years: '2005-2025' },
      { name: 'Boxster', slug: 'boxster', years: '2004-2025' },
    ],
  },
  {
    name: 'CUPRA', slug: 'cupra',
    models: [
      { name: 'Formentor', slug: 'formentor', years: '2020-2025' },
      { name: 'Leon', slug: 'leon', years: '2020-2025' },
      { name: 'Born', slug: 'born', years: '2022-2025' },
    ],
  },
];

// Helper: find make by slug
export function findMake(slug) {
  return UK_MAKES.find(m => m.slug === slug);
}

// Helper: find model by make + model slug
export function findModel(makeSlug, modelSlug) {
  const make = findMake(makeSlug);
  if (!make) return null;
  return make.models.find(m => m.slug === modelSlug);
}

// Total counts for display
export const TOTAL_MAKES = UK_MAKES.length;
export const TOTAL_MODELS = UK_MAKES.reduce((sum, m) => sum + m.models.length, 0);
