import Link from 'next/link';
import GuideFooterLinks from '@/components/GuideFooterLinks';
import JsonLd from '@/components/JsonLd';

export const metadata = {
  title: 'How to Save Money on Car Parts in the UK | CarPartsCompare',
  description: 'Smart strategies for finding cheap car parts without sacrificing quality. Learn about brand tiers, price comparison, and when budget parts are fine vs when to spend more.',
};

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How can I save money on car parts?',
      acceptedAnswer: { '@type': 'Answer', text: 'The biggest saving comes from comparing prices across retailers — the same part can vary 50-85% in price. Also understand brand tiers (budget vs OEM vs premium), buy parts yourself for garage fitting, time purchases around sales, and learn simple DIY jobs.' },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to buy cheap car parts?',
      acceptedAnswer: { '@type': 'Answer', text: 'It depends on the part. Wiper blades, cabin filters, and bulbs are fine to buy budget. But brake pads, oil filters, timing belts, and suspension components should be mid-range or OEM quality minimum — cheap versions can compromise safety or cause expensive damage.' },
    },
    {
      '@type': 'Question',
      name: 'Can I supply my own parts to a garage?',
      acceptedAnswer: { '@type': 'Answer', text: 'Many independent garages will happily fit parts you supply. You pay their labour rate but save on the parts markup, which can be 50-100% above trade price. Call ahead and ask. Most will agree as long as the parts are correct specification.' },
    },
  ],
};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://carpartscompare.uk' },
    { '@type': 'ListItem', position: 2, name: 'Buying Guides', item: 'https://carpartscompare.uk/guides' },
    { '@type': 'ListItem', position: 3, name: 'Save Money on Parts', item: 'https://carpartscompare.uk/guides/saving-money-car-parts' },
  ],
};

export default function SavingMoneyGuide() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <JsonLd data={faqData} />
      <JsonLd data={breadcrumbData} />
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/guides" className="hover:text-blue-600">Buying Guides</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600">Saving Money</span>
      </nav>

      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">How to Save Money on Car Parts in the UK</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: February 2026 · 6 min read</p>

        <p className="lead text-lg text-gray-700">
          UK drivers spend an average of £500–£800 per year on car maintenance and repairs. A significant portion of that 
          goes on parts. The good news is that with a bit of knowledge, you can cut your parts bill substantially without 
          compromising on safety or quality.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">1. Compare Prices — The Same Part Varies Hugely</h2>

        <p className="text-gray-700 leading-relaxed">
          The single biggest saving comes from comparing prices across retailers. The same Bosch oil filter might be £7.50 
          on Amazon, £9.99 at Euro Car Parts, £6.80 on eBay, and £12.99 at Halfords. That's an 85% price difference for 
          identical products. Multiply that across every part you buy over a year and the savings are significant. Price 
          comparison tools exist specifically for this — use them.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">2. Understand Brand Tiers</h2>

        <p className="text-gray-700 leading-relaxed">
          The aftermarket car parts industry has a clear tier structure, and understanding it helps you make smart decisions 
          about where to spend and where to save:
        </p>

        <div className="bg-gray-50 rounded-xl p-5 my-6 space-y-3">
          <div className="flex items-start gap-3">
            <span className="bg-purple-100 text-purple-700 text-xs font-bold px-2 py-1 rounded-full mt-0.5">PREMIUM</span>
            <p className="text-sm text-gray-600">
              Performance brands (Brembo, EBC, K&N, Bilstein). Designed to exceed OEM specs. Worth it for performance 
              cars or enthusiast driving. Overkill for a daily commuter.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full mt-0.5">OEM</span>
            <p className="text-sm text-gray-600">
              Factory-quality brands (Bosch, MANN-FILTER, TRW, Valeo, LuK). The same parts that car manufacturers fit 
              on the production line. The safe, predictable choice. Often the best value-for-quality ratio.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-1 rounded-full mt-0.5">MID-RANGE</span>
            <p className="text-sm text-gray-600">
              Solid aftermarket brands (Mintex, Pagid, Champion, First Line). Good quality at lower prices. Popular with 
              independent garages. Perfectly adequate for normal driving.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <span className="bg-gray-200 text-gray-600 text-xs font-bold px-2 py-1 rounded-full mt-0.5">BUDGET</span>
            <p className="text-sm text-gray-600">
              Unbranded or lesser-known brands. Meet minimum standards but may not last as long. Fine for some 
              applications, risky for others.
            </p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">3. Know When to Go Budget and When Not To</h2>

        <p className="text-gray-700 leading-relaxed">
          This is the key insight that separates smart savers from those who end up spending more in the long run. Some parts 
          are fine to buy cheap. Others really aren't.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          <strong>Safe to go budget:</strong> Wiper blades (you'll replace them annually anyway), cabin/pollen filters 
          (simple filtration job), number plate bulbs, screenwash, and other simple consumables where the part either works 
          or it doesn't, with no safety implications.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          <strong>Worth spending mid-range or OEM:</strong> Brake pads and discs (safety critical — cheap brakes can have 
          inconsistent friction, longer stopping distances, and fade under heat), oil filters (cheap media degrades faster, 
          reducing oil protection), air filters (poor quality can allow particles through), timing belts and water pumps 
          (failure is catastrophic on interference engines), and any suspension components (affect handling and tyre wear).
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">4. Buy Parts Yourself, Even for Garage Fitting</h2>

        <p className="text-gray-700 leading-relaxed">
          Many independent garages (not main dealers) will happily fit parts you supply. You pay their labour rate but save 
          on the parts markup, which can be 50–100% above trade price. Call ahead and ask — most will agree as long as the 
          parts are the correct specification. This is one of the best ways to save money while still getting professional 
          fitting.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          Be aware that most garages won't warranty work done with customer-supplied parts, so if the part itself is faulty, 
          you'll need to claim against the parts retailer rather than the garage. This is rarely an issue with branded parts 
          from reputable sellers.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">5. Time Your Purchases</h2>

        <p className="text-gray-700 leading-relaxed">
          Parts retailers run regular promotions. Euro Car Parts is known for frequent "up to 50% off" sales — signing up 
          for their email list means you'll rarely pay full price. Amazon often has lower prices during Prime Day (July) and 
          Black Friday (November). eBay runs regular discount codes. If a part isn't urgently needed, waiting a few weeks 
          for a sale can save you 20–40%.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">6. Consider DIY for Simple Jobs</h2>

        <p className="text-gray-700 leading-relaxed">
          Some car parts are genuinely easy to replace with basic tools and a YouTube tutorial. Oil and filter changes, 
          air filter replacement, wiper blades, bulbs, and cabin filters are all straightforward jobs that most people can 
          learn to do in their driveway. Front brake pads are also doable with basic mechanical confidence. The labour saving 
          alone (typically £50–£100 per hour at a garage) quickly adds up.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          That said, leave anything involving suspension, timing belts, fuel systems, or electrical diagnostics to a 
          professional. Getting these wrong can be dangerous or very expensive to fix.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mt-8">
          <h3 className="font-bold text-blue-900 mb-2">🔍 Start Comparing Prices Now</h3>
          <p className="text-sm text-blue-700 mb-3">
            Enter your registration plate to find parts for your specific car, with prices compared across Amazon, eBay 
            and specialist UK retailers — completely free.
          </p>
          <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-lg transition text-sm inline-block">
            Enter Your Reg Plate →
          </Link>
        </div>
        <GuideFooterLinks categorySlug="brake-pads" categoryName="Brake Pads" additionalCategories={[{slug:"oil-filters",name:"Oil Filters"},{slug:"air-filters",name:"Air Filters"},{slug:"wiper-blades",name:"Wiper Blades"},{slug:"batteries",name:"Batteries"}]} />
      </article>
    </div>
  );
}
