import Link from 'next/link';
import { notFound } from 'next/navigation';
import { UK_MAKES, findMake, findModel } from '@/lib/uk-cars';
import { DEPARTMENTS } from '@/lib/categories';
import { getCompetitors, TOP_UK_MODELS } from '@/lib/internal-links';
import { AdBanner } from '@/components/AdUnits';
import RegPlateInput from '@/components/RegPlateInput';
import { ModelInsights } from '@/components/ModelInsights';

export async function generateStaticParams() {
  const params = [];
  UK_MAKES.forEach((make) => {
    make.models.forEach((model) => {
      params.push({ make: make.slug, model: model.slug });
    });
  });
  return params;
}

export async function generateMetadata({ params }) {
  const { make: makeSlug, model: modelSlug } = await params;
  const make = findMake(makeSlug);
  const model = make ? findModel(makeSlug, modelSlug) : null;
  if (!make || !model) return {};
  return {
    title: `${make.name} ${model.name} Parts — Compare Prices UK | CarPartsCompare`,
    description: `Compare ${make.name} ${model.name} car parts prices. Find brake pads, filters, spark plugs, batteries and more from Amazon, eBay and UK retailers. Guaranteed compatibility for ${model.years} models.`,
  };
}

export default async function ModelPage({ params }) {
  const { make: makeSlug, model: modelSlug } = await params;
  const make = findMake(makeSlug);
  const model = make ? findModel(makeSlug, modelSlug) : null;
  if (!make || !model) notFound();

  const fullName = `${make.name} ${model.name}`;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/car-parts" className="hover:text-blue-600">Browse Parts</Link>
        <span className="mx-2">›</span>
        <Link href={`/car-parts/${make.slug}`} className="hover:text-blue-600">{make.name}</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600">{model.name}</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">{fullName} Parts</h1>
      <p className="text-gray-500 mb-2">
        Compare prices for {fullName} parts ({model.years}) from top UK retailers.
      </p>

      {/* Reg prompt — key CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 md:p-8 mb-8 text-white">
        <h2 className="text-xl font-bold mb-2">🔍 Enter Your Registration for Exact Parts</h2>
        <p className="text-blue-100 text-sm mb-4">
          Different {fullName} variants use different parts depending on engine size, fuel type and year.
          Enter your reg plate for guaranteed compatible parts.
        </p>
        <div className="max-w-md">
          <RegPlateInput />
        </div>
      </div>

      {/* Department sections */}
      <div className="space-y-8">
        {DEPARTMENTS.map((dept) => (
          <section key={dept.slug}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">{dept.icon}</span>
              <div>
                <h2 className="text-lg font-bold text-gray-900">{fullName} {dept.name}</h2>
                <p className="text-xs text-gray-500">{dept.description}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
              {dept.categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/car-parts/${make.slug}/${model.slug}/${cat.slug}`}
                  className="group bg-white border border-gray-200 rounded-xl p-4 flex flex-col items-center text-center hover:border-blue-300 hover:shadow-md transition"
                >
                  <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">{cat.icon}</span>
                  <span className="text-sm font-medium text-gray-800 group-hover:text-blue-700">{cat.name}</span>
                  <span className="text-xs text-blue-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Compare prices →</span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Ad placement */}
      <div className="mt-8">
        <AdBanner />
      </div>

      {/* Other models from same make */}
      <div className="mt-10 bg-gray-50 rounded-xl p-6">
        <h3 className="font-bold text-gray-900 mb-3">Other {make.name} Models</h3>
        <div className="flex flex-wrap gap-2">
          {make.models.filter(m => m.slug !== model.slug).map(m => (
            <Link
              key={m.slug}
              href={`/car-parts/${make.slug}/${m.slug}`}
              className="bg-white border border-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-full hover:border-blue-300 hover:text-blue-700 transition"
            >
              {make.name} {m.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Competitor models */}
      {(() => {
        const competitors = getCompetitors(make.slug, model.slug, 8);
        if (competitors.length === 0) return null;
        return (
          <div className="mt-6 bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="font-bold text-gray-900 mb-2">Similar Cars to the {fullName}</h3>
            <p className="text-sm text-gray-500 mb-4">Comparing alternatives? Browse parts for cars in the same class.</p>
            <div className="flex flex-wrap gap-2">
              {competitors.map(c => (
                <Link
                  key={`${c.makeSlug}-${c.modelSlug}`}
                  href={`/car-parts/${c.makeSlug}/${c.modelSlug}`}
                  className="bg-gray-50 border border-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-full hover:border-blue-300 hover:text-blue-700 transition"
                >
                  {c.fullName} Parts
                </Link>
              ))}
            </div>
          </div>
        );
      })()}

      {/* Buying guides */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="font-bold text-blue-900 mb-3">📖 Buying Guides</h3>
        <p className="text-sm text-blue-700 mb-4">Not sure what to buy? Our expert guides help you choose the right parts.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          <Link href="/guides/brake-pads" className="bg-white border border-blue-200 rounded-lg px-3 py-2 text-sm text-gray-700 hover:text-blue-700 hover:border-blue-400 transition">🛞 Brake Pads Guide</Link>
          <Link href="/guides/oil-filters" className="bg-white border border-blue-200 rounded-lg px-3 py-2 text-sm text-gray-700 hover:text-blue-700 hover:border-blue-400 transition">🛢️ Oil Filters Guide</Link>
          <Link href="/guides/car-batteries" className="bg-white border border-blue-200 rounded-lg px-3 py-2 text-sm text-gray-700 hover:text-blue-700 hover:border-blue-400 transition">🔋 Car Batteries Guide</Link>
          <Link href="/guides/wiper-blades" className="bg-white border border-blue-200 rounded-lg px-3 py-2 text-sm text-gray-700 hover:text-blue-700 hover:border-blue-400 transition">🌧️ Wiper Blades Guide</Link>
          <Link href="/guides/when-to-replace-parts" className="bg-white border border-blue-200 rounded-lg px-3 py-2 text-sm text-gray-700 hover:text-blue-700 hover:border-blue-400 transition">🔧 Replacement Intervals</Link>
          <Link href="/guides/saving-money-car-parts" className="bg-white border border-blue-200 rounded-lg px-3 py-2 text-sm text-gray-700 hover:text-blue-700 hover:border-blue-400 transition">💰 Save Money Guide</Link>
        </div>
      </div>

      {/* Model-specific insights (replaces generic SEO text) */}
      <ModelInsights makeSlug={make.slug} modelSlug={model.slug} />
    </div>
  );
}
