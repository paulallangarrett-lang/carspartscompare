import Link from 'next/link';
import { UK_MAKES, TOTAL_MAKES, TOTAL_MODELS } from '@/lib/uk-cars';
import { DEPARTMENTS } from '@/lib/categories';
import { TOP_UK_MODELS } from '@/lib/internal-links';

const totalCategories = DEPARTMENTS.reduce((sum, d) => sum + d.categories.length, 0);

export const metadata = {
  title: 'Browse Car Parts by Make & Model — CarPartsCompare UK',
  description: `Compare car parts prices for ${TOTAL_MAKES}+ makes and ${TOTAL_MODELS}+ models. Find brake pads, filters, spark plugs and more at the best UK prices from Amazon, eBay and specialist retailers.`,
};

export default function BrowsePartsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600">Browse Parts</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Car Parts by Make</h1>
      <p className="text-gray-500 mb-8">
        Select your car manufacturer to find compatible parts. We cover {totalCategories} part categories across {TOTAL_MAKES} popular UK makes.
      </p>

      {/* Search prompt */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-8">
        <p className="text-sm text-blue-800">
          <strong>💡 Know your registration?</strong> For the most accurate results, <Link href="/" className="text-blue-600 font-semibold hover:underline">enter your reg plate on the homepage</Link> — we'll use DVLA data to identify your exact vehicle.
        </p>
      </div>

      {/* Makes grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {UK_MAKES.map((make) => (
          <Link
            key={make.slug}
            href={`/car-parts/${make.slug}`}
            className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition text-center"
          >
            <span className="text-lg font-bold text-gray-800 group-hover:text-blue-700 block">{make.name}</span>
            <span className="text-xs text-gray-400 mt-1 block">{make.models.length} models</span>
          </Link>
        ))}
      </div>

      {/* Popular models quick links */}
      <div className="mt-12">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Most Popular Models</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {TOP_UK_MODELS.map(m => (
            <Link
              key={`${m.makeSlug}-${m.modelSlug}`}
              href={`/car-parts/${m.makeSlug}/${m.modelSlug}`}
              className="bg-white border border-gray-200 rounded-lg p-3 text-center hover:border-blue-300 hover:shadow-sm transition"
            >
              <span className="text-sm font-medium text-gray-800 block">{m.make} {m.model}</span>
              <span className="text-xs text-blue-600">Browse parts →</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Popular categories */}
      <div className="mt-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Popular Part Categories</h2>
        <p className="text-sm text-gray-500 mb-3">Pick a category and model to jump straight to price comparisons.</p>
        <div className="flex flex-wrap gap-2">
          {DEPARTMENTS.flatMap(d => d.categories).slice(0, 15).map(cat => (
            <Link
              key={cat.slug}
              href={`/car-parts/ford/focus/${cat.slug}`}
              className="bg-gray-100 text-gray-600 text-sm px-3 py-1.5 rounded-full hover:bg-blue-50 hover:text-blue-700 transition"
            >
              {cat.icon} {cat.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Buying guides */}
      <div className="mt-10 bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h2 className="text-xl font-bold text-blue-900 mb-3">📖 Buying Guides</h2>
        <p className="text-sm text-blue-700 mb-4">Not sure what parts you need? Our expert guides cover everything from choosing the right brake pads to saving money on car maintenance.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          <Link href="/guides/brake-pads" className="bg-white border border-blue-200 rounded-lg px-3 py-2 text-sm text-gray-700 hover:text-blue-700 hover:border-blue-400 transition">🛞 Brake Pads Guide</Link>
          <Link href="/guides/oil-filters" className="bg-white border border-blue-200 rounded-lg px-3 py-2 text-sm text-gray-700 hover:text-blue-700 hover:border-blue-400 transition">🛢️ Oil Filters Guide</Link>
          <Link href="/guides/car-batteries" className="bg-white border border-blue-200 rounded-lg px-3 py-2 text-sm text-gray-700 hover:text-blue-700 hover:border-blue-400 transition">🔋 Car Batteries Guide</Link>
          <Link href="/guides/wiper-blades" className="bg-white border border-blue-200 rounded-lg px-3 py-2 text-sm text-gray-700 hover:text-blue-700 hover:border-blue-400 transition">🌧️ Wiper Blades Guide</Link>
          <Link href="/guides/when-to-replace-parts" className="bg-white border border-blue-200 rounded-lg px-3 py-2 text-sm text-gray-700 hover:text-blue-700 hover:border-blue-400 transition">🔧 Replacement Intervals</Link>
          <Link href="/guides/saving-money-car-parts" className="bg-white border border-blue-200 rounded-lg px-3 py-2 text-sm text-gray-700 hover:text-blue-700 hover:border-blue-400 transition">💰 Save Money Guide</Link>
        </div>
      </div>

      {/* SEO content */}
      <div className="mt-10 prose prose-gray max-w-none">
        <h2 className="text-xl font-bold text-gray-900">Car Parts Price Comparison</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          CarPartsCompare helps UK drivers find the right parts at the best prices. Whether you need brake pads for a Ford Focus, 
          oil filters for a Volkswagen Golf, or wiper blades for a BMW 3 Series, we compare prices from Amazon, eBay and specialist 
          retailers so you don't have to. All parts are matched to your specific vehicle using DVLA registration lookup and the TecDoc 
          parts database covering over 698 manufacturers.
        </p>
      </div>
    </div>
  );
}
