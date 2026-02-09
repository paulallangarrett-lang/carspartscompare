import { findMake, findModel } from '@/lib/uk-cars';
import { CATEGORY_MAP } from '@/lib/categories';

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

export default function CategoryLayout({ children }) {
  return children;
}
