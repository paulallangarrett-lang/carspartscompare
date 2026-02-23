import Link from 'next/link';
import GuideFooterLinks from '@/components/GuideFooterLinks';
import JsonLd from '@/components/JsonLd';

export const metadata = {
  title: 'Shock Absorber Buying Guide — Signs of Wear & Best Brands | CarPartsCompare',
  description: 'How to tell if your shock absorbers need replacing, the difference between gas and oil shocks, and which brands offer the best value. UK expert guide.',
};

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long do shock absorbers last?',
      acceptedAnswer: { '@type': 'Answer', text: 'Shock absorbers typically last 50,000 to 80,000 miles, though UK road conditions with potholes and speed bumps can shorten this considerably. They degrade gradually so many drivers don\'t notice until they\'re badly worn. A professional bounce test or visual inspection during an MOT is the best way to check.' },
    },
    {
      '@type': 'Question',
      name: 'Should I replace shock absorbers in pairs?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, always replace shock absorbers in axle pairs (both fronts or both rears together). Mismatched shocks cause uneven handling and can make the car unstable under braking or cornering. If one side has failed, the other is likely close behind.' },
    },
    {
      '@type': 'Question',
      name: 'What\'s the difference between shock absorbers and struts?',
      acceptedAnswer: { '@type': 'Answer', text: 'A strut is a structural part of the suspension that includes the shock absorber as a component. MacPherson struts (used on most front-wheel-drive cars) combine the shock absorber, coil spring, and top mount into one assembly. When people say "shocks" on these cars, they usually mean the strut insert or complete strut assembly.' },
    },
    {
      '@type': 'Question',
      name: 'Do I need to replace springs when replacing shocks?',
      acceptedAnswer: { '@type': 'Answer', text: 'Not usually, unless the springs are broken, sagging, or corroded. However, fitting new shocks to a car with tired springs won\'t give you the full improvement. Springs on UK cars do corrode and snap — particularly rear springs on Ford Focus, Vauxhall Astra, and VW Golf models. Check them while the shocks are off.' },
    },
  ],
};

const articleData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Shock Absorber Buying Guide',
  description: 'How to tell if your shock absorbers need replacing and which brands offer the best value.',
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
    { '@type': 'ListItem', position: 3, name: 'Shock Absorbers', item: 'https://carpartscompare.uk/guides/shock-absorbers' },
  ],
};

export default function ShockAbsorbersGuide() {
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
        <span className="text-gray-600">Shock Absorbers</span>
      </nav>

      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Shock Absorber Buying Guide</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: February 2026 · 6 min read</p>

        <p className="lead text-lg text-gray-700">
          Worn shock absorbers affect everything from ride comfort to braking distance and tyre wear. Because they degrade
          gradually, many drivers don't realise how much their car's handling has deteriorated until they fit new ones.
          This guide explains what to look for, when to replace them, and which brands deliver the best results.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Signs Your Shocks Are Worn</h2>

        <p className="text-gray-700 leading-relaxed">
          The most obvious sign is a bouncy ride — if the car continues to bounce after going over a bump instead of settling
          quickly, the damping has deteriorated. Other symptoms include the car nosediving under braking, excessive body roll
          in corners, uneven tyre wear (particularly cupping or scalloping on the tread), and a general feeling that the car
          is less controlled than it used to be. Oil leaking from the shock body is a clear visual sign of failure.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          The classic test is to push down firmly on each corner of the car and release. A healthy shock absorber should bring
          the car back to level in one movement. If it bounces more than once, the shock is worn. During an MOT, testers check
          for leaks and excessive play, and many garages have a dedicated shock absorber testing machine.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Types of Shock Absorber</h2>

        <div className="bg-gray-50 rounded-xl p-5 my-6 space-y-4">
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Twin-Tube (Standard)</h3>
            <p className="text-sm text-gray-600">
              The most common and affordable type. Two cylinders — an inner working tube and an outer reserve tube — filled
              with hydraulic oil. These are adequate for normal driving but can suffer from aeration (the oil foaming) under
              sustained heavy use, leading to reduced damping. Most factory-fitted shocks on standard cars are twin-tube.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Gas-Charged (Gas Pressurised)</h3>
            <p className="text-sm text-gray-600">
              Similar to twin-tube but with a low-pressure nitrogen gas charge that prevents the oil from foaming. This gives
              more consistent damping, better road holding, and improved response over bumps. The difference is most noticeable
              on faster roads and when cornering. Brands like Monroe, Sachs, and Bilstein offer gas-charged shocks as their
              mid-range option.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Monotube (Performance)</h3>
            <p className="text-sm text-gray-600">
              A single tube design with a floating piston separating the oil from a high-pressure gas charge. Monotubes run
              cooler, respond faster, and offer the best damping consistency. They're the premium choice — Bilstein B4/B6
              and KYB Excel-G are popular monotube options. More expensive but noticeably better, particularly on cars driven
              enthusiastically.
            </p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Brand Guide</h2>

        <p className="text-gray-700 leading-relaxed">
          <strong>Monroe</strong> is the biggest name in shock absorbers worldwide and supplies OEM to many manufacturers. Their
          Original range matches factory specs exactly, while the Gas-Magnum range is a gas-charged upgrade. Very wide UK
          coverage — they make shocks for almost every car on British roads. Prices are mid-range and quality is consistently
          good.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          <strong>Sachs</strong> (owned by ZF) is the OEM supplier for BMW, Mercedes, Audi, and Porsche among others. If your
          car came with Sachs from the factory, buying Sachs replacements guarantees identical performance. Slightly more
          expensive than Monroe but excellent for German cars.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          <strong>KYB</strong> (formerly Kayaba) is the OEM supplier for most Japanese manufacturers — Toyota, Honda, Nissan,
          Mazda, and Suzuki all use KYB. Their Excel-G range is a gas-charged monotube design that's a genuine upgrade over
          standard twin-tube shocks, and it's priced competitively. If you drive a Japanese car, KYB is the obvious choice.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          <strong>Bilstein</strong> is the premium aftermarket choice, known for their distinctive yellow monotube dampers. The
          B4 range is an OE replacement, the B6 is a firmer, sportier option. Bilstein shocks are noticeably better than
          standard but cost more — typically £50–£80 each versus £25–£45 for Monroe or KYB. Worth it if you enjoy driving
          and want the best handling.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">UK-Specific Considerations</h2>

        <p className="text-gray-700 leading-relaxed">
          British roads are particularly hard on suspension. The combination of potholes, speed bumps, and wet conditions means
          UK cars tend to need shocks replaced sooner than the European average. Rear shocks often wear faster than fronts in
          the UK because of speed bumps — the rear axle hits them harder as the car has already started to accelerate away.
          If you're buying a used car, check whether the shocks have been replaced and budget for it if they haven't.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Pricing and Fitting</h2>

        <p className="text-gray-700 leading-relaxed">
          Shock absorbers typically cost £25–£80 each for standard replacements, so £50–£160 per axle pair. Fitting takes
          1–2 hours per axle, with labour costs of £60–£150 depending on the car. Rear shocks are usually easier and cheaper
          to fit than fronts. After fitting, a four-wheel alignment is recommended (£30–£50) to ensure the tyres wear evenly.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mt-8">
          <h3 className="font-bold text-blue-900 mb-2">🔍 Compare Shock Absorber Prices for Your Car</h3>
          <p className="text-sm text-blue-700 mb-3">
            Enter your registration plate to find shock absorbers guaranteed to fit your specific vehicle, with prices
            compared across Amazon, eBay and specialist retailers.
          </p>
          <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-lg transition text-sm inline-block">
            Enter Your Reg Plate →
          </Link>
        </div>
        <GuideFooterLinks categorySlug="shock-absorbers" categoryName="Shock Absorbers" additionalCategories={[{slug:"coil-springs",name:"Coil Springs"},{slug:"top-mounts",name:"Top Mounts"},{slug:"suspension-arms",name:"Suspension Arms"}]} />
      </article>
    </div>
  );
}
