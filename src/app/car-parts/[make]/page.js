import Link from 'next/link';
import { notFound } from 'next/navigation';
import { UK_MAKES, findMake } from '@/lib/uk-cars';
import { DEPARTMENTS } from '@/lib/categories';

export async function generateStaticParams() {
  return UK_MAKES.map((make) => ({ make: make.slug }));
}

export async function generateMetadata({ params }) {
  const { make: makeSlug } = await params;
  const make = findMake(makeSlug);
  if (!make) return {};
  return {
    title: `${make.name} Car Parts — Compare Prices UK | CarPartsCompare`,
    description: `Compare ${make.name} car parts prices from Amazon, eBay and UK retailers. Find brake pads, filters, batteries and more for ${make.models.map(m => m.name).slice(0, 5).join(', ')} and other ${make.name} models.`,
  };
}

export default async function MakePage({ params }) {
  const { make: makeSlug } = await params;
  const make = findMake(makeSlug);
  if (!make) notFound();

  const popularCategories = ['brake-pads', 'air-filters', 'oil-filters', 'wiper-blades', 'spark-plugs', 'batteries'];
  const categories = DEPARTMENTS.flatMap(d => d.categories).filter(c => popularCategories.includes(c.slug));

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/car-parts" className="hover:text-blue-600">Browse Parts</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600">{make.name}</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">{make.name} Car Parts</h1>
      <p className="text-gray-500 mb-8">
        Select your {make.name} model to compare parts prices from UK retailers.
      </p>

      {/* Reg prompt */}
      <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 mb-8">
        <p className="text-sm text-blue-800">
          <strong>💡 Have your reg plate?</strong> <Link href="/" className="text-blue-600 font-semibold hover:underline">Enter it on the homepage</Link> for the most accurate vehicle match using DVLA data.
        </p>
      </div>

      {/* Models grid */}
      <h2 className="text-xl font-bold text-gray-900 mb-4">Choose Your {make.name} Model</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-10">
        {make.models.map((model) => (
          <Link
            key={model.slug}
            href={`/car-parts/${make.slug}/${model.slug}`}
            className="group bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition"
          >
            <span className="font-bold text-gray-800 group-hover:text-blue-700 block">{make.name} {model.name}</span>
            <span className="text-xs text-gray-400 mt-1 block">{model.years}</span>
          </Link>
        ))}
      </div>

      {/* Popular parts for this make */}
      <h2 className="text-xl font-bold text-gray-900 mb-4">Popular {make.name} Parts</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
        {categories.map(cat => (
          <div key={cat.slug} className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3">
            <span className="text-2xl">{cat.icon}</span>
            <div>
              <span className="font-medium text-gray-800 text-sm block">{make.name} {cat.name}</span>
              <span className="text-xs text-gray-400">Compare prices from £</span>
            </div>
          </div>
        ))}
      </div>

      {/* SEO content */}
      <div className="prose prose-gray max-w-none">
        <h2 className="text-xl font-bold text-gray-900">{make.name} Parts Price Comparison</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Find the cheapest {make.name} car parts from trusted UK retailers. CarPartsCompare covers {make.models.length} popular {make.name} models 
          including the {make.models.slice(0, 3).map(m => m.name).join(', ')} and more. We compare prices from Amazon, eBay and specialist 
          {make.name} parts suppliers to help you save money on servicing and repairs. All parts are matched to your specific vehicle for guaranteed compatibility.
        </p>
      </div>

      {/* Other makes */}
      <div className="mt-8 bg-gray-50 rounded-xl p-6">
        <h3 className="font-bold text-gray-900 mb-3">Browse Other Makes</h3>
        <div className="flex flex-wrap gap-2">
          {UK_MAKES.filter(m => m.slug !== make.slug).slice(0, 20).map(m => (
            <Link
              key={m.slug}
              href={`/car-parts/${m.slug}`}
              className="bg-white border border-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-full hover:border-blue-300 hover:text-blue-700 transition"
            >
              {m.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Buying guides */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="font-bold text-blue-900 mb-3">📖 Buying Guides</h3>
        <p className="text-sm text-blue-700 mb-4">Our expert guides help you choose the right parts and save money.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          <Link href="/guides/brake-pads" className="bg-white border border-blue-200 rounded-lg px-3 py-2 text-sm text-gray-700 hover:text-blue-700 hover:border-blue-400 transition">🛞 Brake Pads Guide</Link>
          <Link href="/guides/oil-filters" className="bg-white border border-blue-200 rounded-lg px-3 py-2 text-sm text-gray-700 hover:text-blue-700 hover:border-blue-400 transition">🛢️ Oil Filters Guide</Link>
          <Link href="/guides/car-batteries" className="bg-white border border-blue-200 rounded-lg px-3 py-2 text-sm text-gray-700 hover:text-blue-700 hover:border-blue-400 transition">🔋 Car Batteries Guide</Link>
          <Link href="/guides/wiper-blades" className="bg-white border border-blue-200 rounded-lg px-3 py-2 text-sm text-gray-700 hover:text-blue-700 hover:border-blue-400 transition">🌧️ Wiper Blades Guide</Link>
          <Link href="/guides/when-to-replace-parts" className="bg-white border border-blue-200 rounded-lg px-3 py-2 text-sm text-gray-700 hover:text-blue-700 hover:border-blue-400 transition">🔧 Replacement Intervals</Link>
          <Link href="/guides/saving-money-car-parts" className="bg-white border border-blue-200 rounded-lg px-3 py-2 text-sm text-gray-700 hover:text-blue-700 hover:border-blue-400 transition">💰 Save Money Guide</Link>
        </div>
      </div>
    </div>
  );
}
