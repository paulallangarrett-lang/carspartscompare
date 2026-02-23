import Link from 'next/link';
import GuideFooterLinks from '@/components/GuideFooterLinks';
import JsonLd from '@/components/JsonLd';

export const metadata = {
  title: 'Clutch Kit Buying Guide — When to Replace & What to Look For | CarPartsCompare',
  description: 'How to tell if your clutch is failing, what a clutch kit includes, and how to choose the right one for your car. Expert UK guide with brand comparisons and prices.',
};

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does a clutch last?',
      acceptedAnswer: { '@type': 'Answer', text: 'A clutch typically lasts 60,000 to 100,000 miles, though this varies hugely depending on driving style. City driving with frequent gear changes wears the clutch faster. Some drivers get 30,000 miles, others over 120,000 — it depends on habits like riding the clutch or resting your foot on the pedal.' },
    },
    {
      '@type': 'Question',
      name: 'What are the signs of a failing clutch?',
      acceptedAnswer: { '@type': 'Answer', text: 'Common signs include the clutch slipping (engine revs rise but the car doesn\'t accelerate), a high biting point that keeps getting higher, difficulty selecting gears, a burning smell when driving, vibration or judder when pulling away, and unusual noises when pressing or releasing the pedal.' },
    },
    {
      '@type': 'Question',
      name: 'Should I replace the flywheel with the clutch?',
      acceptedAnswer: { '@type': 'Answer', text: 'If your car has a dual mass flywheel (DMF), it should always be inspected when replacing the clutch. DMFs wear out and a failing one can destroy a new clutch quickly. Many mechanics recommend replacing both together since the labour cost is the same — the gearbox has to come out either way.' },
    },
    {
      '@type': 'Question',
      name: 'How much does a clutch replacement cost in the UK?',
      acceptedAnswer: { '@type': 'Answer', text: 'A clutch kit (friction plate, pressure plate, release bearing) costs £80–£250 for parts. Labour typically adds £300–£600 depending on the car. If the dual mass flywheel also needs replacing, add another £200–£500 for the part. Total cost ranges from £400 for a simple hatchback to over £1,000 for cars with DMF replacement.' },
    },
  ],
};

const articleData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Clutch Kit Buying Guide',
  description: 'How to tell if your clutch is failing, what a clutch kit includes, and how to choose the right replacement.',
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
    { '@type': 'ListItem', position: 3, name: 'Clutch Kits', item: 'https://carpartscompare.uk/guides/clutch-kits' },
  ],
};

export default function ClutchKitsGuide() {
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
        <span className="text-gray-600">Clutch Kits</span>
      </nav>

      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Clutch Kit Buying Guide</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: February 2026 · 7 min read</p>

        <p className="lead text-lg text-gray-700">
          A clutch replacement is one of the bigger repair bills most drivers face, but understanding what's involved can help
          you make better decisions about parts and timing. This guide covers how clutches work, when they need replacing, and
          how to choose the right kit without overpaying.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">What's in a Clutch Kit?</h2>

        <p className="text-gray-700 leading-relaxed">
          A standard clutch kit contains three components that work together to connect and disconnect your engine from the
          gearbox. The friction plate (also called the clutch disc) sits between the flywheel and pressure plate and is the
          part that actually wears down over time. The pressure plate clamps the friction plate against the flywheel using
          heavy-duty springs. The release bearing (or thrust bearing) is what moves when you press the clutch pedal, pushing
          against the pressure plate to disengage the clutch.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          Some kits also include a spigot bearing (which centres the gearbox input shaft) and an alignment tool for fitting.
          Higher-end kits from brands like LuK and Sachs often include these extras. If your car has a concentric slave
          cylinder (CSC) — common on Ford, Vauxhall, and many modern cars — it's usually wise to replace this at the same
          time since it sits inside the bellhousing and requires the same labour to access.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Signs Your Clutch Is Failing</h2>

        <p className="text-gray-700 leading-relaxed">
          Clutches don't fail overnight — they typically give warning signs over weeks or months. The most common sign is
          slipping: you press the accelerator and the engine revs rise faster than the car accelerates, especially in higher
          gears or going uphill. This means the friction plate is worn too thin to grip properly.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          A biting point that's getting progressively higher is another telltale sign. If you find yourself lifting the clutch
          pedal almost to the top before the car starts to move, the friction material is wearing down. A burning smell —
          similar to burnt toast — after heavy clutch use (like a hill start or slow traffic) suggests the remaining material
          is overheating. Difficulty selecting gears, particularly first and reverse, can indicate a worn release bearing or
          a problem with the pressure plate. Judder or vibration when pulling away from a standstill often points to a warped
          friction plate or contamination from an oil leak.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">The Dual Mass Flywheel Question</h2>

        <p className="text-gray-700 leading-relaxed">
          Most modern cars, especially diesels, use a dual mass flywheel (DMF) rather than a solid flywheel. The DMF absorbs
          vibrations from the engine, making the car smoother and quieter. But DMFs wear out — they typically last 80,000 to
          150,000 miles — and when they do, the symptoms can mimic clutch failure: juddering, rattling at idle, difficulty
          selecting gears.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          Since the gearbox has to come out to replace either the clutch or the flywheel, most mechanics strongly recommend
          inspecting — and often replacing — both at the same time. The labour is identical whether you replace one or both,
          so you only pay for the extra part. A DMF costs £200–£500 depending on the car. If your car has done over 80,000
          miles and you're replacing the clutch, replacing the DMF at the same time is usually the sensible long-term choice.
          Brands like LuK and Sachs sell combined clutch-and-DMF kits for common UK cars that work out cheaper than buying
          separately.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Brand Tiers</h2>

        <div className="bg-gray-50 rounded-xl p-5 my-6 space-y-4">
          <div>
            <h3 className="font-bold text-gray-900 mb-1">OEM Suppliers — LuK, Sachs, Valeo</h3>
            <p className="text-sm text-gray-600">
              These three brands supply clutches to car manufacturers as original equipment. LuK supplies Ford, Audi, BMW, and
              VW among others. Sachs (owned by ZF) is OEM for Mercedes, Porsche, and many VAG cars. Valeo supplies Peugeot,
              Citroën, Renault, and several Asian manufacturers. Buying from the OEM supplier for your car guarantees you're
              getting factory-equivalent quality.
            </p>
            <p className="text-sm text-gray-500 mt-1">Typical UK price: £120–£250 for a 3-piece kit</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Quality Aftermarket — National, Borg & Beck</h3>
            <p className="text-sm text-gray-600">
              National (owned by Schaeffler, the same group as LuK) and Borg & Beck offer solid clutch kits at slightly lower
              prices than OEM brands. Popular with independent garages across the UK, they provide good quality and wide coverage
              for British and European cars.
            </p>
            <p className="text-sm text-gray-500 mt-1">Typical UK price: £80–£180 for a 3-piece kit</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Budget Options</h3>
            <p className="text-sm text-gray-600">
              Various budget clutch kits are available for under £80. Given that labour for a clutch replacement is £300–£600,
              saving £40–£60 on parts is a false economy if the clutch doesn't last. A cheap clutch that fails at 30,000 miles
              instead of 80,000 means paying for the full labour again. For clutches more than most parts, it pays to buy quality.
            </p>
            <p className="text-sm text-gray-500 mt-1">Typical UK price: £50–£80 for a 3-piece kit</p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Common UK Cars and Their Clutch Quirks</h2>

        <p className="text-gray-700 leading-relaxed">
          The Ford Focus and Fiesta with 1.6 TDCi engines are notorious for dual mass flywheel failure, often between 60,000
          and 90,000 miles. The Vauxhall Astra and Corsa frequently need a concentric slave cylinder alongside the clutch.
          VW Golf and Polo owners should be aware that VAG cars often require a special tool to reset the self-adjusting clutch
          mechanism after fitting. BMW 1 Series and 3 Series clutches tend to be more expensive due to the rear-wheel-drive
          layout requiring more labour.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">DIY vs Professional Fitting</h2>

        <p className="text-gray-700 leading-relaxed">
          A clutch replacement is not a beginner DIY job. It requires removing the gearbox, which is heavy and awkward, and
          needs proper support equipment. Most home mechanics need a full weekend, a transmission jack, and a good deal of
          experience. For the majority of drivers, professional fitting is the way to go. Get quotes from at least three
          independent garages — clutch replacement prices vary enormously. Ask whether the quote includes the DMF inspection,
          and whether a concentric slave cylinder is included if your car has one.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mt-8">
          <h3 className="font-bold text-blue-900 mb-2">🔍 Compare Clutch Kit Prices for Your Car</h3>
          <p className="text-sm text-blue-700 mb-3">
            Enter your registration plate to find clutch kits guaranteed to fit your specific vehicle, with prices compared
            across Amazon, eBay and specialist retailers.
          </p>
          <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-lg transition text-sm inline-block">
            Enter Your Reg Plate →
          </Link>
        </div>
        <GuideFooterLinks categorySlug="clutch-kits" categoryName="Clutch Kits" additionalCategories={[{slug:"flywheels",name:"Flywheels"},{slug:"clutch-cables",name:"Clutch Cables"}]} />
      </article>
    </div>
  );
}
