import { findMake, findModel } from '@/lib/uk-cars';
import { CATEGORY_MAP, DEPARTMENT_FOR_CATEGORY } from '@/lib/categories';
import { CATEGORY_PRICES } from '@/lib/mock-data';
import JsonLd from '@/components/JsonLd';

export async function generateMetadata({ params }) {
  const { make: makeSlug, model: modelSlug, category: categorySlug } = await params;
  const make = findMake(makeSlug);
  const model = make ? findModel(makeSlug, modelSlug) : null;
  const cat = CATEGORY_MAP[categorySlug];

  if (!make || !model || !cat) return {};

  const fullName = `${make.name} ${model.name}`;
  return {
    title: `${fullName} ${cat.name} — Compare Prices from £ | CarPartsCompare UK`,
    description: `Compare ${fullName} ${cat.name.toLowerCase()} prices from Amazon, eBay and UK car parts retailers. Find ${cat.name.toLowerCase()} for ${model.years} ${fullName} models. Free price comparison, guaranteed compatibility.`,
  };
}

export default async function CategoryLayout({ children, params }) {
  const { make: makeSlug, model: modelSlug, category: categorySlug } = await params;
  const make = findMake(makeSlug);
  const model = make ? findModel(makeSlug, modelSlug) : null;
  const cat = CATEGORY_MAP[categorySlug];

  if (!make || !model || !cat) return children;

  const fullName = `${make.name} ${model.name}`;
  const dept = DEPARTMENT_FOR_CATEGORY[categorySlug];
  const prices = CATEGORY_PRICES[categorySlug];
  const lowPrice = prices ? Math.min(...Object.values(prices).map(r => r[0])) : 5;
  const highPrice = prices ? Math.max(...Object.values(prices).map(r => r[1])) : 200;
  const baseUrl = 'https://carpartscompare.uk';

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Browse Parts', item: `${baseUrl}/car-parts` },
      { '@type': 'ListItem', position: 3, name: make.name, item: `${baseUrl}/car-parts/${makeSlug}` },
      { '@type': 'ListItem', position: 4, name: model.name, item: `${baseUrl}/car-parts/${makeSlug}/${modelSlug}` },
      { '@type': 'ListItem', position: 5, name: cat.name, item: `${baseUrl}/car-parts/${makeSlug}/${modelSlug}/${categorySlug}` },
    ],
  };

  const productData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${fullName} ${cat.name}`,
    description: `Compare ${cat.name.toLowerCase()} prices for the ${fullName}. Find compatible ${cat.name.toLowerCase()} from premium, OEM, mid-range and budget brands.`,
    category: dept ? dept.name : 'Car Parts',
    brand: { '@type': 'Brand', name: make.name },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'GBP',
      lowPrice: lowPrice.toFixed(2),
      highPrice: highPrice.toFixed(2),
      offerCount: '8',
      availability: 'https://schema.org/InStock',
    },
  };

  return (
    <>
      <JsonLd data={breadcrumbData} />
      <JsonLd data={productData} />
      {children}
    </>
  );
}
