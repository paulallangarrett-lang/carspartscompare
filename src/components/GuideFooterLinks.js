import Link from 'next/link';
import { TOP_UK_MODELS } from '@/lib/internal-links';

// categorySlug: the primary category this guide relates to (e.g. 'brake-pads')
// additionalCategories: optional extra related categories to show
export default function GuideFooterLinks({ categorySlug, categoryName, additionalCategories = [] }) {
  const allGuides = [
    { slug: 'brake-pads', icon: '🛞', name: 'Brake Pads' },
    { slug: 'oil-filters', icon: '🛢️', name: 'Oil Filters' },
    { slug: 'car-batteries', icon: '🔋', name: 'Car Batteries' },
    { slug: 'wiper-blades', icon: '🌧️', name: 'Wiper Blades' },
    { slug: 'when-to-replace-parts', icon: '🔧', name: 'Replacement Intervals' },
    { slug: 'saving-money-car-parts', icon: '💰', name: 'Save Money on Parts' },
  ];

  // Remove current guide from the list
  const otherGuides = allGuides.filter(g => {
    // Match by guide slug path, not by category slug
    return g.slug !== categorySlug &&
      g.slug !== 'when-to-replace-parts' || categorySlug === 'when-to-replace-parts' ? g.slug !== categorySlug : true;
  }).slice(0, 5);

  return (
    <>
      {/* Popular model links for this category */}
      {categorySlug && (
        <div className="mt-8 bg-gray-50 rounded-xl p-6">
          <h3 className="font-bold text-gray-900 mb-3">Compare {categoryName} Prices by Model</h3>
          <p className="text-sm text-gray-500 mb-4">Find the best prices on {categoryName.toLowerCase()} for the UK's most popular cars.</p>
          <div className="flex flex-wrap gap-2">
            {TOP_UK_MODELS.map(m => (
              <Link
                key={`${m.makeSlug}-${m.modelSlug}`}
                href={`/car-parts/${m.makeSlug}/${m.modelSlug}/${categorySlug}`}
                className="bg-white border border-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-full hover:border-blue-300 hover:text-blue-700 transition"
              >
                {m.make} {m.model}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Additional related categories */}
      {additionalCategories.length > 0 && (
        <div className="mt-6 bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="font-bold text-gray-900 mb-3">Related Parts</h3>
          <div className="flex flex-wrap gap-2">
            {additionalCategories.map(cat => (
              <Link
                key={cat.slug}
                href={`/car-parts/ford/focus/${cat.slug}`}
                className="bg-gray-50 border border-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-full hover:border-blue-300 hover:text-blue-700 transition"
              >
                {cat.name} →
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Other guides */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="font-bold text-blue-900 mb-3">📖 More Buying Guides</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {otherGuides.map(g => (
            <Link
              key={g.slug}
              href={`/guides/${g.slug}`}
              className="bg-white border border-blue-200 rounded-lg px-3 py-2 text-sm text-gray-700 hover:text-blue-700 hover:border-blue-400 transition"
            >
              {g.icon} {g.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
