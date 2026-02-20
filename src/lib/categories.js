// Full category structure matching Euro Car Parts / GSF
// TecDoc category IDs confirmed via API testing where possible

export const DEPARTMENTS = [
  {
    name: 'Service Parts',
    slug: 'service-parts',
    icon: '🔧',
    description: 'Routine maintenance parts to keep your car running smoothly',
    categories: [
      { slug: 'air-filters',    name: 'Air Filters',    icon: '🌬️', tecDocId: 100260, confirmed: true },
      { slug: 'oil-filters',    name: 'Oil Filters',    icon: '🛢️', tecDocId: 100259, confirmed: true },
      { slug: 'fuel-filters',   name: 'Fuel Filters',   icon: '⛽',  tecDocId: 100261, confirmed: true },
      { slug: 'cabin-filters',  name: 'Cabin Filters',  icon: '🍃', tecDocId: 100541, confirmed: false },
      { slug: 'spark-plugs',    name: 'Spark Plugs',    icon: '⚡',  tecDocId: 100008, confirmed: false },
      { slug: 'glow-plugs',     name: 'Glow Plugs',     icon: '🔥', tecDocId: 100009, confirmed: false },
    ],
  },
  {
    name: 'Brakes',
    slug: 'brakes',
    icon: '🛞',
    description: 'Brake components for safe stopping power',
    categories: [
      { slug: 'brake-pads',     name: 'Brake Pads',       icon: '🛞', tecDocId: 100030, confirmed: true },
      { slug: 'brake-discs',    name: 'Brake Discs',      icon: '💿', tecDocId: 100032, confirmed: true },
      { slug: 'brake-drums',    name: 'Brake Drums',      icon: '🥁', tecDocId: 100033, confirmed: true },
      { slug: 'brake-shoes',    name: 'Brake Shoes',      icon: '👟', tecDocId: 100031, confirmed: true },
      { slug: 'brake-hoses',    name: 'Brake Hoses',      icon: '〰️', tecDocId: 100035, confirmed: true },
      { slug: 'brake-calipers', name: 'Brake Calipers',   icon: '🔩', tecDocId: 100027, confirmed: true },
    ],
  },
  {
    name: 'Engine Parts',
    slug: 'engine-parts',
    icon: '⚙️',
    description: 'Engine components, belts, gaskets and timing parts',
    categories: [
      { slug: 'timing-belts',   name: 'Timing Belt Kits', icon: '⏱️', tecDocId: 100003, confirmed: true },
      { slug: 'drive-belts',    name: 'Drive Belts',      icon: '🔄', tecDocId: 100016, confirmed: true },
      { slug: 'gaskets-seals',  name: 'Gaskets & Seals',  icon: '🔲', tecDocId: 100007, confirmed: true },
      { slug: 'engine-mounts',  name: 'Engine Mounts',    icon: '🏗️', tecDocId: 100075, confirmed: false },
      { slug: 'turbo-parts',    name: 'Turbo Parts',      icon: '💨', tecDocId: 100060, confirmed: false },
    ],
  },
  {
    name: 'Suspension & Steering',
    slug: 'suspension-steering',
    icon: '🏎️',
    description: 'Suspension, steering and ride quality components',
    categories: [
      { slug: 'shock-absorbers',   name: 'Shock Absorbers',   icon: '🔽', tecDocId: 100011, confirmed: true },
      { slug: 'coil-springs',      name: 'Coil Springs',      icon: '🌀', tecDocId: 100361, confirmed: false },
      { slug: 'suspension-arms',   name: 'Suspension Arms',   icon: '💪', tecDocId: 100013, confirmed: true },
      { slug: 'tie-rod-ends',      name: 'Tie Rod Ends',      icon: '🔗', tecDocId: 100012, confirmed: true },
      { slug: 'wheel-bearings',    name: 'Wheel Bearings',    icon: '⭕', tecDocId: 100048, confirmed: false },
      { slug: 'anti-roll-bar-links', name: 'Anti-Roll Bar Links', icon: '🔗', tecDocId: 100056, confirmed: false },
    ],
  },
  {
    name: 'Electrical & Lighting',
    slug: 'electrical-lighting',
    icon: '💡',
    description: 'Batteries, alternators, starters and lighting',
    categories: [
      { slug: 'batteries',       name: 'Batteries',        icon: '🔋', tecDocId: 100050, confirmed: false },
      { slug: 'alternators',     name: 'Alternators',      icon: '⚡', tecDocId: 100010, confirmed: true },
      { slug: 'starter-motors',  name: 'Starter Motors',   icon: '🔑', tecDocId: 100040, confirmed: true },
      { slug: 'bulbs',           name: 'Bulbs & Lighting', icon: '💡', tecDocId: 100090, confirmed: false },
      { slug: 'sensors',         name: 'Sensors',          icon: '📡', tecDocId: 100038, confirmed: true },
      { slug: 'ignition-coils',  name: 'Ignition Coils',   icon: '⚡', tecDocId: 100055, confirmed: false },
    ],
  },
  {
    name: 'Cooling & Heating',
    slug: 'cooling-heating',
    icon: '🌡️',
    description: 'Radiators, thermostats, water pumps and heaters',
    categories: [
      { slug: 'radiators',      name: 'Radiators',        icon: '🌡️', tecDocId: 100180, confirmed: false },
      { slug: 'thermostats',    name: 'Thermostats',      icon: '🌡️', tecDocId: 100088, confirmed: true },
      { slug: 'water-pumps',    name: 'Water Pumps',      icon: '💧', tecDocId: 100066, confirmed: false },
      { slug: 'heater-parts',   name: 'Heater Parts',     icon: '♨️',  tecDocId: 100077, confirmed: false },
      { slug: 'cooling-fans',   name: 'Cooling Fans',     icon: '🌀', tecDocId: 100082, confirmed: false },
    ],
  },
  {
    name: 'Clutch & Transmission',
    slug: 'clutch-transmission',
    icon: '⚙️',
    description: 'Clutch kits, flywheels, CV joints and gearbox parts',
    categories: [
      { slug: 'clutch-kits',    name: 'Clutch Kits',      icon: '⚙️', tecDocId: 100652, confirmed: false },
      { slug: 'flywheels',      name: 'Flywheels',        icon: '🔄', tecDocId: 100653, confirmed: false },
      { slug: 'cv-joints',      name: 'CV Joints & Boots', icon: '🔗', tecDocId: 100014, confirmed: true },
      { slug: 'gearbox-mounts', name: 'Gearbox Mounts',   icon: '🏗️', tecDocId: 100076, confirmed: false },
    ],
  },
  {
    name: 'Body & Wipers',
    slug: 'body-wipers',
    icon: '🚗',
    description: 'Wiper blades, mirrors, exhausts and body parts',
    categories: [
      { slug: 'wiper-blades',   name: 'Wiper Blades',     icon: '🌧️', tecDocId: 100018, confirmed: true },
      { slug: 'exhaust-parts',  name: 'Exhaust Parts',    icon: '💨', tecDocId: 100004, confirmed: true },
      { slug: 'wing-mirrors',   name: 'Wing Mirrors',     icon: '🪞', tecDocId: 100165, confirmed: false },
      { slug: 'headlights',     name: 'Headlights',       icon: '🔦', tecDocId: 100092, confirmed: false },
    ],
  },
];

// Flat lookup by slug
export const CATEGORY_MAP = {};
export const DEPARTMENT_FOR_CATEGORY = {};
DEPARTMENTS.forEach(dept => {
  dept.categories.forEach(cat => {
    CATEGORY_MAP[cat.slug] = cat;
    DEPARTMENT_FOR_CATEGORY[cat.slug] = dept;
  });
});

// All category slugs
export const ALL_CATEGORY_SLUGS = Object.keys(CATEGORY_MAP);
