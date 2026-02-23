import Link from 'next/link';
import GuideFooterLinks from '@/components/GuideFooterLinks';
import JsonLd from '@/components/JsonLd';

export const metadata = {
  title: 'Timing Belt Replacement Guide — Intervals, Cost & What to Know | CarPartsCompare',
  description: 'When to replace your timing belt, what happens if it snaps, and how to choose the right kit. Expert UK guide covering intervals for popular cars and cost breakdown.',
};

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How often should a timing belt be replaced?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most manufacturers recommend replacement every 40,000 to 100,000 miles or every 4 to 10 years, whichever comes first. The exact interval varies by engine — always check your owner\'s manual or service book. Age matters as much as mileage because the rubber degrades over time.' },
    },
    {
      '@type': 'Question',
      name: 'What happens if a timing belt snaps?',
      acceptedAnswer: { '@type': 'Answer', text: 'On an interference engine (most modern cars), a snapped timing belt causes the pistons to hit the open valves, bending them and potentially damaging the pistons and cylinder head. This typically costs £1,500–£3,000+ to repair — often more than the car is worth. On a non-interference engine the car simply stops, but these are increasingly rare.' },
    },
    {
      '@type': 'Question',
      name: 'Should I replace the water pump with the timing belt?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, in most cases. On many engines the water pump is driven by the timing belt and sits behind it. If the water pump fails later, you\'d need to pay for the full timing belt labour again. Most mechanics and manufacturers now recommend replacing both together. Many timing belt kits include the water pump.' },
    },
    {
      '@type': 'Question',
      name: 'Does my car have a timing belt or timing chain?',
      acceptedAnswer: { '@type': 'Answer', text: 'It depends on the engine. Many modern petrol engines use timing chains (which generally last the life of the engine), while most diesel engines use belts. Some manufacturers use belts across the range, others use chains. Check your owner\'s manual or search your specific engine code online.' },
    },
  ],
};

const articleData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Timing Belt Replacement Guide',
  description: 'When to replace your timing belt, what happens if it snaps, and how to choose the right kit.',
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
    { '@type': 'ListItem', position: 3, name: 'Timing Belts', item: 'https://carpartscompare.uk/guides/timing-belts' },
  ],
};

export default function TimingBeltsGuide() {
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
        <span className="text-gray-600">Timing Belts</span>
      </nav>

      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Timing Belt Replacement Guide</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: February 2026 · 7 min read</p>

        <p className="lead text-lg text-gray-700">
          A timing belt replacement is one of the most important scheduled maintenance jobs on any car that has one. Getting
          it done on time is straightforward and relatively affordable. Ignoring it can destroy your engine. This guide
          explains what's involved, when it needs doing, and how to keep costs down.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">What Does a Timing Belt Do?</h2>

        <p className="text-gray-700 leading-relaxed">
          The timing belt (or cambelt) synchronises the rotation of the crankshaft and camshaft, ensuring that the engine's
          valves open and close at precisely the right moment relative to the pistons. It's a reinforced rubber belt with
          teeth that sits behind a cover on the front of the engine. Unlike a serpentine belt (which drives accessories like
          the alternator and power steering), the timing belt is critical to the engine's operation — if it breaks or skips
          teeth, the engine stops immediately.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Why Replacement Intervals Matter</h2>

        <p className="text-gray-700 leading-relaxed">
          Timing belts are made of rubber compounds reinforced with fibres, and they degrade with both use and age. Heat
          cycles, oil contamination, and simple aging cause the rubber to crack and the fibres to weaken. A belt that looks
          fine visually can be close to failure — there's often no warning before it snaps. That's why manufacturers specify
          both a mileage and a time interval, and you should follow whichever comes first.
        </p>

        <div className="bg-gray-50 rounded-xl p-5 my-6">
          <h3 className="font-bold text-gray-900 mb-3">Common Replacement Intervals for UK Cars</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-gray-700">Ford Focus / Fiesta 1.6 TDCi</span>
              <span className="text-gray-600 font-medium">100,000 miles / 10 years</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-gray-700">VW Golf / Polo 1.4 TSI</span>
              <span className="text-gray-600 font-medium">Timing chain (no belt)</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-gray-700">Vauxhall Corsa / Astra 1.3 CDTi</span>
              <span className="text-gray-600 font-medium">60,000 miles / 6 years</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-gray-700">Peugeot 308 / Citroën C3 1.6 HDi</span>
              <span className="text-gray-600 font-medium">80,000 miles / 10 years</span>
            </div>
            <div className="flex justify-between border-b border-gray-200 pb-2">
              <span className="text-gray-700">Renault Clio 1.5 dCi</span>
              <span className="text-gray-600 font-medium">72,000 miles / 6 years</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-700">Toyota Yaris 1.0 / 1.3 VVT-i</span>
              <span className="text-gray-600 font-medium">Timing chain (no belt)</span>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">What's in a Timing Belt Kit?</h2>

        <p className="text-gray-700 leading-relaxed">
          A basic timing belt kit includes the belt itself plus the tensioner pulley (which keeps the belt at the correct
          tension) and any idler pulleys that guide the belt around the engine. These pulleys have bearings that wear out,
          and a seized pulley can cause a belt to snap even if the belt itself is fine — so replacing everything together is
          standard practice.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          A timing belt and water pump kit adds the water pump, which on many engines is driven by the timing belt. Since
          you're already paying for the labour to access the belt, replacing the water pump at the same time is a no-brainer
          — it adds £30–£60 in parts but saves £200+ in labour if the pump fails later. Most manufacturers now recommend
          this as standard, and many timing belt kits come with the water pump included.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Brand Guide</h2>

        <div className="bg-gray-50 rounded-xl p-5 my-6 space-y-4">
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Gates</h3>
            <p className="text-sm text-gray-600">
              The world's largest manufacturer of timing belts and the OEM supplier to many car manufacturers including Ford,
              VW, and Fiat. Gates PowerGrip kits are widely considered the gold standard. They invented the timing belt in
              1945 and their kits include everything needed — belt, tensioner, idler pulleys, and often a water pump.
            </p>
            <p className="text-sm text-gray-500 mt-1">Typical UK price: £60–£150 (belt kit), £90–£220 (with water pump)</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Dayco</h3>
            <p className="text-sm text-gray-600">
              Another major OEM supplier, particularly to Italian and French manufacturers. Dayco kits are excellent quality
              and often slightly cheaper than Gates. Their KTBWP kits (with water pump) offer great value.
            </p>
            <p className="text-sm text-gray-500 mt-1">Typical UK price: £50–£130 (belt kit), £80–£200 (with water pump)</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Continental / INA</h3>
            <p className="text-sm text-gray-600">
              Continental makes the belts and INA (part of the Schaeffler group, which also owns LuK and FAG) makes the
              tensioners and pulleys. OEM supplier to many German manufacturers. Especially good for VW, Audi, and BMW
              applications.
            </p>
            <p className="text-sm text-gray-500 mt-1">Typical UK price: £55–£140 (belt kit), £85–£210 (with water pump)</p>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 my-6">
          <h3 className="font-bold text-amber-900 mb-2">⚠️ Don't Skimp on Timing Belt Parts</h3>
          <p className="text-sm text-amber-800">
            This is one part where buying cheap is genuinely risky. A budget timing belt that fails early can cause thousands
            of pounds of engine damage. Stick with Gates, Dayco, or Continental/INA — the price difference between a quality
            kit and a budget one is usually only £20–£40, which is trivial compared to the labour cost and the risk.
          </p>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Cost Breakdown</h2>

        <p className="text-gray-700 leading-relaxed">
          A timing belt replacement typically costs between £250 and £600 all-in for most UK cars. The parts (belt kit with
          water pump) are usually £80–£220, while labour is £150–£400 depending on engine accessibility. Some cars are
          significantly more expensive — anything with a V6 or where engine mounts need removing to access the belt will be
          at the higher end. Getting quotes from multiple independent garages is worthwhile as prices vary considerably.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mt-8">
          <h3 className="font-bold text-blue-900 mb-2">🔍 Compare Timing Belt Kit Prices for Your Car</h3>
          <p className="text-sm text-blue-700 mb-3">
            Enter your registration plate to find timing belt kits guaranteed to fit your specific engine, with prices
            compared across Amazon, eBay and specialist retailers.
          </p>
          <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-lg transition text-sm inline-block">
            Enter Your Reg Plate →
          </Link>
        </div>
        <GuideFooterLinks categorySlug="timing-belts" categoryName="Timing Belts" additionalCategories={[{slug:"water-pumps",name:"Water Pumps"},{slug:"tensioner-pulleys",name:"Tensioner Pulleys"}]} />
      </article>
    </div>
  );
}
