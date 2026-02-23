import Link from 'next/link';
import GuideFooterLinks from '@/components/GuideFooterLinks';
import JsonLd from '@/components/JsonLd';

export const metadata = {
  title: 'Car Filters Guide — Air, Cabin, Oil & Fuel Filters Explained | CarPartsCompare',
  description: 'Complete guide to car filters: what each one does, when to replace them, and which brands to choose. Covers engine air, cabin pollen, oil, and fuel filters. UK expert guide.',
};

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How often should I change my car\'s air filter?',
      acceptedAnswer: { '@type': 'Answer', text: 'Engine air filters should be replaced every 12,000 to 20,000 miles or once a year, whichever comes first. In dusty or urban environments they may need replacing sooner. A dirty air filter restricts airflow to the engine, reducing power and fuel economy by up to 10%.' },
    },
    {
      '@type': 'Question',
      name: 'What does a cabin filter do?',
      acceptedAnswer: { '@type': 'Answer', text: 'The cabin filter (also called a pollen filter) cleans the air that enters the car through the ventilation system. It removes dust, pollen, exhaust particles, and other pollutants. Activated carbon versions also reduce odours. They should be replaced every 12,000-15,000 miles or annually — more often if you drive in cities or suffer from allergies.' },
    },
    {
      '@type': 'Question',
      name: 'Can I clean and reuse a car filter?',
      acceptedAnswer: { '@type': 'Answer', text: 'Standard paper filters should not be cleaned and reused — the paper fibres trap particles within their structure and blowing them out can damage the filter. However, performance cotton filters (like K&N) are designed to be washed, re-oiled, and reused indefinitely. They cost more upfront but save money long-term.' },
    },
    {
      '@type': 'Question',
      name: 'Do I need to change the fuel filter?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most modern petrol cars have a lifetime fuel filter built into the fuel pump assembly and don\'t require regular replacement. However, diesel cars have a separate fuel filter that should be changed every 20,000-40,000 miles as part of routine servicing. Diesel fuel filters also have a water separator that needs draining periodically.' },
    },
  ],
};

const articleData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Car Filters Guide',
  description: 'Complete guide to all car filters — what they do, when to replace them, and which brands to choose.',
  publisher: { '@type': 'Organization', name: 'CarPartsCompare', url: 'https://carpartscompare.uk' },
  datePublished: '2026-02-23',
  dateModified: '2026-02-23',
};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://carpartscompare.uk' },
    { '@type': 'ListItem', position: 2, name: 'Buying Guides', item: 'https://carpartscompare.uk/guides' },
    { '@type': 'ListItem', position: 3, name: 'Car Filters', item: 'https://carpartscompare.uk/guides/car-filters' },
  ],
};

export default function CarFiltersGuide() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <JsonLd data={faqData} />
      <JsonLd data={articleData} />
      <JsonLd data={breadcrumbData} />
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/guides" className="hover:text-blue-600">Buying Guides</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600">Car Filters</span>
      </nav>

      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Car Filters Guide — Everything You Need to Know</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: February 2026 · 8 min read</p>

        <p className="lead text-lg text-gray-700">
          Your car relies on several different filters to keep its engine, fuel system, and cabin clean. They're among the
          cheapest and easiest service items to replace, yet skipping filter changes is one of the most common false economies
          in car maintenance. This guide covers all four main filters, what they do, and how to choose the right replacements.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Engine Air Filter</h2>

        <p className="text-gray-700 leading-relaxed">
          The engine air filter prevents dust, grit, insects, and other debris from entering the engine's intake system. A
          modern petrol engine processes around 10,000 litres of air for every litre of fuel, so even tiny particles can
          cause significant wear over time. The filter sits in an airbox — usually a black plastic housing near the front
          of the engine bay — and on most cars can be replaced in under five minutes with no tools.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          A clogged air filter restricts airflow, forcing the engine to work harder. This reduces power, increases fuel
          consumption (by up to 10% in severe cases), and can cause the engine to run rich, which increases emissions
          and accelerates wear on spark plugs and the catalytic converter. Replacement interval is typically every 12,000
          to 20,000 miles or annually. In very dusty conditions — driving on unmade roads, living near construction sites —
          check it more frequently.
        </p>

        <div className="bg-gray-50 rounded-xl p-5 my-6">
          <h3 className="font-bold text-gray-900 mb-2">Standard vs Performance Air Filters</h3>
          <p className="text-sm text-gray-600">
            Standard paper filters cost £5–£15 and are replaced each service. Performance cotton filters (K&N, Pipercross,
            Green) cost £30–£50 but are washable and reusable for the life of the car. They also flow slightly more air
            than paper filters, though the power difference on an unmodified car is negligible. The main advantage is
            cost savings over time — after 3-4 changes you've broken even. K&N filters come with a million-mile warranty
            when properly maintained.
          </p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Cabin Filter (Pollen Filter)</h2>

        <p className="text-gray-700 leading-relaxed">
          The cabin filter cleans the air that comes through your car's ventilation system — the air you and your passengers
          breathe. It catches dust, pollen, exhaust particles, bacteria, and other airborne pollutants. Given that air
          pollution inside a car can be significantly worse than outside (especially in traffic), a functioning cabin filter
          is genuinely important for health.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          There are two types. A standard particulate filter catches physical particles and costs £8–£15. An activated
          carbon filter adds a layer of activated charcoal that also absorbs gases and odours — exhaust fumes, industrial
          pollution, and unpleasant smells. Carbon filters cost £12–£25 but are worth the extra, especially for urban
          driving or if you sit in traffic regularly. They're particularly beneficial for allergy sufferers.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          A clogged cabin filter reduces airflow from the vents, makes the blower motor work harder (potentially
          shortening its life), and can cause the windows to mist up more readily because the demister can't push enough
          air. Some cars will develop a musty smell from the ventilation — this is often the cabin filter. Replacement
          is usually straightforward: most are behind the glovebox and can be swapped in 10 minutes.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Oil Filter</h2>

        <p className="text-gray-700 leading-relaxed">
          The oil filter removes metal particles, carbon deposits, and contaminants from the engine oil as it circulates.
          It's always replaced at every oil change (typically every 12,000 miles or annually for most modern cars, though
          some manufacturers specify longer intervals with fully synthetic oil). Using a quality oil filter matters because
          a poor filter can let particles through or restrict oil flow, both of which accelerate engine wear.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          There are two main types: spin-on filters (a metal canister that screws directly onto the engine) and cartridge
          filters (a paper element that sits inside a reusable housing on the engine). Cartridge filters produce less waste
          and are increasingly common on newer cars. Oil filters cost £4–£12 for standard brands and £8–£18 for premium.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Fuel Filter</h2>

        <p className="text-gray-700 leading-relaxed">
          The fuel filter prevents contaminants in the fuel from reaching the fuel injectors or carburettor. On modern
          petrol cars, the fuel filter is usually integrated into the fuel pump assembly inside the fuel tank and is
          designed to last the life of the vehicle — it's not a regular service item. However, diesel cars have a separate
          in-line fuel filter that must be changed every 20,000 to 40,000 miles.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          Diesel fuel filters are more critical because diesel fuel is more susceptible to water contamination and
          biological growth (diesel bug). Most diesel fuel filters include a water separator — a small bowl at the
          bottom that collects water and needs draining periodically. A blocked diesel fuel filter causes poor
          starting, loss of power, engine stalling, and eventually can damage the expensive high-pressure fuel pump
          and injectors. Some modern diesels have a dashboard warning when the water separator needs draining.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Brand Recommendations</h2>

        <p className="text-gray-700 leading-relaxed">
          <strong>Mann-Filter</strong> is the gold standard for car filters — they're the OEM supplier to BMW, Mercedes,
          VW, Audi, and many other manufacturers. If you want guaranteed OEM quality, Mann is the go-to brand. They make
          all four filter types and their coverage for UK cars is comprehensive.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          <strong>Mahle</strong> (also known as Knecht) is another major OEM supplier, particularly to German and
          European manufacturers. Equivalent quality to Mann and often available at slightly lower prices. Excellent
          for all filter types.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          <strong>Bosch</strong> makes solid filters across all categories at competitive prices. Not always OEM spec
          but consistently good quality and very widely available. A safe mid-range choice for any car.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          <strong>Fram</strong> and <strong>BluePrint</strong> offer good budget-friendly options. Perfectly adequate
          for routine servicing, especially for air and cabin filters where the consequences of a slightly lower
          filtration standard are less critical than for oil or fuel filters.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Money-Saving Tips</h2>

        <p className="text-gray-700 leading-relaxed">
          Buying a complete service kit — air filter, cabin filter, oil filter (and fuel filter if diesel) — is
          almost always cheaper than buying them individually. Brands like Mann, Bosch, and Blueprint sell these as
          pre-packaged sets for popular cars. Replacing filters yourself is one of the easiest and most rewarding
          DIY maintenance tasks — all four filters on most cars can be changed in under an hour with minimal tools.
          The air and cabin filters typically require no tools at all.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mt-8">
          <h3 className="font-bold text-blue-900 mb-2">🔍 Compare Filter Prices for Your Car</h3>
          <p className="text-sm text-blue-700 mb-3">
            Enter your registration plate to find filters guaranteed to fit your specific vehicle, with prices compared
            across Amazon, eBay and specialist retailers.
          </p>
          <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-lg transition text-sm inline-block">
            Enter Your Reg Plate →
          </Link>
        </div>
        <GuideFooterLinks categorySlug="air-filters" categoryName="Air Filters" additionalCategories={[{slug:"cabin-filters",name:"Cabin Filters"},{slug:"oil-filters",name:"Oil Filters"},{slug:"fuel-filters",name:"Fuel Filters"}]} />
      </article>
    </div>
  );
}
