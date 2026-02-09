import { UK_MAKES } from '@/lib/uk-cars';
import { DEPARTMENTS } from '@/lib/categories';

const BASE_URL = 'https://carpartscompare.uk';

const allCategories = DEPARTMENTS.flatMap(d => d.categories);

export default function sitemap() {
  const now = new Date().toISOString();

  // Static pages
  const staticPages = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/car-parts`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/guides`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE_URL}/guides/brake-pads`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/guides/oil-filters`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/guides/car-batteries`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/guides/wiper-blades`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/guides/when-to-replace-parts`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/guides/saving-money-car-parts`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${BASE_URL}/privacy`, lastModified: now, changeFrequency: 'monthly', priority: 0.2 },
    { url: `${BASE_URL}/terms`, lastModified: now, changeFrequency: 'monthly', priority: 0.2 },
  ];

  // Make pages: /car-parts/ford, /car-parts/bmw, etc.
  const makePages = UK_MAKES.map((make) => ({
    url: `${BASE_URL}/car-parts/${make.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Model pages: /car-parts/ford/focus, /car-parts/bmw/3-series, etc.
  const modelPages = UK_MAKES.flatMap((make) =>
    make.models.map((model) => ({
      url: `${BASE_URL}/car-parts/${make.slug}/${model.slug}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    }))
  );

  // Category pages: /car-parts/ford/focus/brake-pads, etc.
  const categoryPages = UK_MAKES.flatMap((make) =>
    make.models.flatMap((model) =>
      allCategories.map((cat) => ({
        url: `${BASE_URL}/car-parts/${make.slug}/${model.slug}/${cat.slug}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.6,
      }))
    )
  );

  return [...staticPages, ...makePages, ...modelPages, ...categoryPages];
}
