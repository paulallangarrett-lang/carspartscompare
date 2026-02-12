import Link from 'next/link';
import GuideFooterLinks from '@/components/GuideFooterLinks';
import JsonLd from '@/components/JsonLd';

export const metadata = {
  title: 'How to Choose the Right Brake Pads — Buying Guide | CarPartsCompare',
  description: 'Ceramic vs organic vs semi-metallic brake pads explained. Learn which type suits your car, driving style and budget. Expert UK buying guide with price comparisons.',
};

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What are the different types of brake pads?',
      acceptedAnswer: { '@type': 'Answer', text: 'There are three main types: Organic (NAO) pads are quietest and cheapest (£15-£35/axle) but wear faster. Semi-metallic pads offer the best balance of performance and durability (£25-£55/axle). Ceramic pads last longest, produce least dust, and run quietly (£40-£95/axle) but cost more.' },
    },
    {
      '@type': 'Question',
      name: 'When should I replace my brake pads?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most brake pads last 25,000-60,000 miles. Replace them when you hear squealing or grinding, the car pulls to one side when braking, the pedal feels soft, or a warning light appears. The legal minimum thickness is 1.5mm but mechanics recommend replacing at 3mm.' },
    },
    {
      '@type': 'Question',
      name: 'Should I replace brake discs at the same time as pads?',
      acceptedAnswer: { '@type': 'Answer', text: 'Not always. Brake discs typically last 2-3 sets of pads. Replace them if there is a visible lip around the edge, deep score marks, or the thickness is below the minimum stamped on the disc. Fitting new pads on worn discs reduces performance.' },
    },
    {
      '@type': 'Question',
      name: 'What are the best brake pad brands in the UK?',
      acceptedAnswer: { '@type': 'Answer', text: 'Premium brands include Brembo, EBC, and Ferodo Racing. OEM-quality brands include TRW, Bosch, and Delphi. Mid-range options like Mintex and Pagid offer good value. Budget brands meet minimum standards but may wear faster.' },
    },
  ],
};

const articleData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Choose the Right Brake Pads',
  description: 'Ceramic vs organic vs semi-metallic brake pads explained. Learn which type suits your car, driving style and budget.',
  publisher: { '@type': 'Organization', name: 'CarPartsCompare', url: 'https://carpartscompare.uk' },
  datePublished: '2026-02-09',
  dateModified: '2026-02-09',
};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://carpartscompare.uk' },
    { '@type': 'ListItem', position: 2, name: 'Buying Guides', item: 'https://carpartscompare.uk/guides' },
    { '@type': 'ListItem', position: 3, name: 'Brake Pads', item: 'https://carpartscompare.uk/guides/brake-pads' },
  ],
};

export default function BrakePadsGuide() {
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
        <span className="text-gray-600">Brake Pads</span>
      </nav>

      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">How to Choose the Right Brake Pads</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: February 2026 · 6 min read</p>

        <p className="lead text-lg text-gray-700">
          Brake pads are one of the most commonly replaced car parts in the UK, and choosing the right ones can make a real
          difference to your stopping distance, noise levels, and how often you need to replace them. This guide explains
          the different types, when to replace them, and how to get the best value.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">The Three Types of Brake Pad</h2>

        <p className="text-gray-700 leading-relaxed">
          Most brake pads sold in the UK fall into three categories. Each uses a different friction material, which affects 
          performance, noise, dust production, and price. Understanding these differences is the single most useful thing 
          you can do before buying.
        </p>

        <div className="bg-gray-50 rounded-xl p-5 my-6 space-y-4">
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Organic (NAO) Brake Pads</h3>
            <p className="text-sm text-gray-600">
              Made from a mixture of fibres like glass, rubber, carbon, and Kevlar bound together with resin. These are the 
              quietest and gentlest on your brake discs, producing the least dust. They're ideal for everyday city driving where 
              you rarely need to brake hard. However, they wear faster than other types and don't perform as well under heavy 
              braking or high temperatures. Most budget brake pads are organic.
            </p>
            <p className="text-sm text-gray-500 mt-1">Typical UK price: £15–£35 per axle</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Semi-Metallic Brake Pads</h3>
            <p className="text-sm text-gray-600">
              Contain 30–70% metal (usually copper, iron, or steel wool) mixed with friction modifiers. These are the most common 
              type fitted as OEM parts by manufacturers. They offer a good balance of performance and durability, work well across 
              a wide temperature range, and last longer than organic pads. The trade-off is slightly more brake dust and noise. 
              Most mid-range brands like Mintex, TRW, and Pagid produce semi-metallic pads.
            </p>
            <p className="text-sm text-gray-500 mt-1">Typical UK price: £25–£55 per axle</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Ceramic Brake Pads</h3>
            <p className="text-sm text-gray-600">
              Made from ceramic fibres, bonding agents, and sometimes small amounts of copper. Ceramic pads produce the least 
              dust (and the dust they do produce is light-coloured, so it doesn't stain alloy wheels), run very quietly, and 
              last significantly longer than other types. They're the premium choice — brands like Brembo, EBC Redstuff, and 
              Ferodo Premier offer ceramic options. The downside is price, and they can be slightly less effective in very cold 
              conditions until they warm up.
            </p>
            <p className="text-sm text-gray-500 mt-1">Typical UK price: £40–£95 per axle</p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">When to Replace Your Brake Pads</h2>

        <p className="text-gray-700 leading-relaxed">
          Most brake pads last between 25,000 and 60,000 miles, depending on the type of pad, your driving style, and whether 
          you do mostly motorway or city driving. City driving wears pads much faster because of constant stopping and starting.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          Watch for these warning signs: a high-pitched squealing noise when braking (most pads have a built-in wear indicator 
          that causes this), a grinding or scraping sound (which means the pads are completely worn and the metal backing plate 
          is contacting the disc — get this checked immediately), the car pulling to one side under braking, a soft or spongy 
          brake pedal, or a brake warning light on your dashboard. Many modern cars also display a brake pad wear warning on the 
          instrument cluster.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          At your MOT, the tester will check your brake pad thickness. Pads are typically 8–12mm thick when new, and the legal 
          minimum is 1.5mm — but most mechanics recommend replacing them at 3mm to maintain safe stopping performance.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Brand Tiers Explained</h2>

        <p className="text-gray-700 leading-relaxed">
          The UK aftermarket brake pad market broadly splits into four tiers:
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          <strong>Premium performance brands</strong> like Brembo, EBC, and Ferodo Racing are designed for enthusiast and 
          high-performance driving. They offer the best stopping power and fade resistance but at the highest price.
        </p>
        <p className="text-gray-700 leading-relaxed mt-3">
          <strong>OEM-quality brands</strong> like TRW, Ferodo Premier, Bosch, and Delphi are what most car manufacturers 
          use as original equipment. They're the safe choice — you know you're getting the same quality as the pads your car 
          left the factory with.
        </p>
        <p className="text-gray-700 leading-relaxed mt-3">
          <strong>Mid-range brands</strong> like Mintex, Pagid, and Blueprint offer solid performance at a lower price point. 
          These are popular with independent garages and are perfectly adequate for normal driving.
        </p>
        <p className="text-gray-700 leading-relaxed mt-3">
          <strong>Budget brands</strong> are unbranded or lesser-known manufacturers. They'll meet minimum safety standards 
          but may wear faster, produce more noise, and offer less consistent braking feel. For most drivers, spending a bit 
          more on a mid-range brand is worth it for the peace of mind.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Should You Replace Discs at the Same Time?</h2>

        <p className="text-gray-700 leading-relaxed">
          Not always, but it's worth checking. Brake discs typically last 2–3 sets of pads. If your discs have a visible lip 
          around the edge, score marks across the surface, or measure below the minimum thickness (stamped on the disc itself), 
          they should be replaced alongside the pads. Fitting new pads on worn discs reduces braking performance and can cause 
          the new pads to wear unevenly.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">How to Save Money</h2>

        <p className="text-gray-700 leading-relaxed">
          Brake pads are one of the parts where it's easiest to save money by shopping around. Prices for the same brand and 
          part number can vary significantly between retailers. Using a price comparison tool helps you spot the best deals 
          quickly. Buying a full axle set (both sides) is almost always cheaper per pad than buying singles. And if you're 
          comfortable with basic DIY, front brake pads are one of the easier jobs to do at home with basic tools — there are 
          excellent guides on YouTube for most popular UK cars.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mt-8">
          <h3 className="font-bold text-blue-900 mb-2">🔍 Compare Brake Pad Prices for Your Car</h3>
          <p className="text-sm text-blue-700 mb-3">
            Enter your registration plate to find brake pads guaranteed to fit your specific vehicle, with prices compared 
            across Amazon, eBay and specialist retailers.
          </p>
          <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-lg transition text-sm inline-block">
            Enter Your Reg Plate →
          </Link>
        </div>
        <GuideFooterLinks categorySlug="brake-pads" categoryName="Brake Pads" additionalCategories={[{slug:"brake-discs",name:"Brake Discs"},{slug:"brake-calipers",name:"Brake Calipers"},{slug:"brake-hoses",name:"Brake Hoses"}]} />
      </article>
    </div>
  );
}
