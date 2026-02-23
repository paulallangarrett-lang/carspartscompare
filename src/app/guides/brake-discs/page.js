import Link from 'next/link';
import GuideFooterLinks from '@/components/GuideFooterLinks';
import JsonLd from '@/components/JsonLd';

export const metadata = {
  title: 'Brake Disc Buying Guide — Solid vs Vented, Brands & When to Replace | CarPartsCompare',
  description: 'When to replace brake discs, the difference between solid and vented discs, and how to choose the right ones. Expert UK guide with brand comparisons and prices.',
};

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long do brake discs last?',
      acceptedAnswer: { '@type': 'Answer', text: 'Brake discs typically last 50,000 to 80,000 miles — roughly two to three sets of brake pads. Front discs wear faster than rears because they do most of the braking work (around 70% on a typical car). City driving with frequent braking wears discs faster than motorway cruising.' },
    },
    {
      '@type': 'Question',
      name: 'How do I know if my brake discs need replacing?',
      acceptedAnswer: { '@type': 'Answer', text: 'Check for a visible raised lip around the outer edge (meaning the disc has worn thinner in the swept area), deep score marks or grooves across the braking surface, rust that doesn\'t clear after a few brake applications, vibration or pulsing through the brake pedal, or the disc measuring below its minimum thickness (stamped on the disc or hub).' },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between solid and vented brake discs?',
      acceptedAnswer: { '@type': 'Answer', text: 'Solid discs are a single piece of metal, used mainly on rear brakes of lighter cars. Vented discs have two layers with cooling fins between them, allowing air to flow through and dissipate heat faster. Vented discs are standard on front brakes of most cars because fronts generate more heat. Always replace with the same type your car was designed for.' },
    },
    {
      '@type': 'Question',
      name: 'Should I always replace brake discs in pairs?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, always replace brake discs as an axle pair (both fronts or both rears). Mismatched disc thickness causes uneven braking, which can make the car pull to one side and trigger the ABS system unnecessarily. It\'s also recommended to fit new brake pads at the same time as new discs for optimal bedding-in and performance.' },
    },
  ],
};

const articleData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Brake Disc Buying Guide',
  description: 'When to replace brake discs, the difference between types, and how to choose the right ones for your car.',
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
    { '@type': 'ListItem', position: 3, name: 'Brake Discs', item: 'https://carpartscompare.uk/guides/brake-discs' },
  ],
};

export default function BrakeDiscsGuide() {
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
        <span className="text-gray-600">Brake Discs</span>
      </nav>

      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Brake Disc Buying Guide</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: February 2026 · 6 min read</p>

        <p className="lead text-lg text-gray-700">
          Brake discs are the large metal rotors behind your wheels that your brake pads clamp onto to slow the car down.
          Unlike pads, which are a cheap consumable, discs are more substantial components — but they still wear out and
          need periodic replacement. This guide explains when they need changing, the different types available, and how
          to get the best value.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">When Do Brake Discs Need Replacing?</h2>

        <p className="text-gray-700 leading-relaxed">
          Every brake disc has a minimum thickness stamped on it (usually on the hub area or edge). Once the disc wears
          below this measurement, it's no longer safe and must be replaced. You can measure this with a micrometer or
          vernier caliper, but there are visual signs too: a pronounced lip around the outer edge of the disc, deep
          grooves or scoring across the surface, visible cracks, or excessive rust that doesn't clear after a few brake
          applications.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          Brake pedal vibration or pulsing — sometimes called disc run-out or warping — is another common reason for
          replacement. This happens when the disc surface is no longer perfectly flat, causing the pads to push the pedal
          back as they ride over the high spots. While discs can sometimes be skimmed (machined flat again), this is only
          possible if there's enough remaining thickness, and the cost of skimming often approaches the cost of new budget
          discs, making replacement the more sensible option for most cars.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Types of Brake Disc</h2>

        <div className="bg-gray-50 rounded-xl p-5 my-6 space-y-4">
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Solid Discs</h3>
            <p className="text-sm text-gray-600">
              A single slab of cast iron. Used on the rear brakes of most small and medium cars, and on all four corners
              of some city cars. They're cheaper and simpler but retain more heat than vented discs. Perfectly adequate
              where braking demands are lower.
            </p>
            <p className="text-sm text-gray-500 mt-1">Typical UK price: £15–£35 each</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Vented Discs</h3>
            <p className="text-sm text-gray-600">
              Two layers of cast iron separated by internal cooling vanes that allow air to flow through the disc. This
              dramatically improves heat dissipation, reducing the risk of brake fade during heavy or repeated braking.
              Standard on the front brakes of virtually all modern cars, and on all four corners of heavier or more
              powerful vehicles. Always replace a vented disc with a vented disc — never substitute a solid one.
            </p>
            <p className="text-sm text-gray-500 mt-1">Typical UK price: £25–£65 each</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Drilled and Grooved Discs</h3>
            <p className="text-sm text-gray-600">
              Performance discs with holes drilled through them (drilled), slots machined into the surface (grooved), or
              both. The holes and grooves help channel away water, gas, and dust, maintaining pad contact. They look
              impressive behind alloy wheels and offer marginal improvements in wet weather and under hard braking.
              However, for normal road driving the difference over standard vented discs is minimal, and drilled discs
              can develop cracks around the holes over time. Best suited to enthusiast drivers and track days.
            </p>
            <p className="text-sm text-gray-500 mt-1">Typical UK price: £45–£120 each</p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Getting the Right Size</h2>

        <p className="text-gray-700 leading-relaxed">
          Brake disc sizes vary significantly between models and even between variants of the same model. A Ford Focus
          with a 1.0 EcoBoost has smaller discs than one with a 2.0 TDCi because the heavier, faster car needs more
          braking capacity. Many cars also had different disc sizes depending on the trim level or options fitted.
          The only reliable way to get the correct disc is to match your exact vehicle specification — registration
          plate lookup is the easiest way to do this.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          Key measurements are the outer diameter, thickness, and the number and pattern of bolt holes on the hub
          mounting. Some cars also have different centre bore sizes. If in doubt, remove the old disc and measure it,
          or compare the part number stamped on it with the new disc.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Brand Guide</h2>

        <p className="text-gray-700 leading-relaxed">
          <strong>Brembo</strong> is the most recognised brake disc brand globally, supplying OEM to Ferrari, Porsche,
          Mercedes, and many others. Their aftermarket discs for everyday cars are excellent — they're coated to resist
          corrosion, precisely manufactured, and come with a protective UV coating that makes them look good behind
          open-spoke alloys. Premium priced but genuinely superior.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          <strong>ATE</strong> (owned by Continental) is the OEM supplier for many European manufacturers including
          VW, BMW, and Volvo. Their discs feature a distinctive coating on the non-swept areas that prevents unsightly
          rust. Very popular with UK garages and an excellent choice for German cars in particular.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          <strong>TRW</strong> (owned by ZF) is another major OEM supplier with wide UK coverage. Good quality discs
          at slightly lower prices than Brembo and ATE. TRW discs are a solid mid-range choice and are widely stocked
          by UK motor factors.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          <strong>Mintex, Pagid, and Eicher</strong> are popular budget-to-mid-range brands. Mintex in particular has
          a long UK heritage (they're based in Yorkshire) and offers good quality at competitive prices. For everyday
          driving, these brands provide perfectly adequate performance.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Fitting Tips and Costs</h2>

        <p className="text-gray-700 leading-relaxed">
          New brake discs should always be fitted with new pads — bedding old pads onto new discs (or new pads onto
          old discs) prevents proper contact and reduces braking effectiveness. After fitting, new discs and pads need
          a bedding-in period of around 200 miles of gentle braking to allow the pad material to transfer a thin layer
          onto the disc surface. Avoid heavy braking during this period.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          Fitting a pair of front discs and pads typically costs £50–£120 for parts (discs + pads) and £60–£120 in
          labour, so £110–£240 total per axle at an independent garage. Rear discs are usually cheaper because
          they're smaller. Main dealer prices are typically 50–100% more. This is one of the most straightforward jobs
          for a competent home mechanic with a jack, axle stands, and basic tools.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mt-8">
          <h3 className="font-bold text-blue-900 mb-2">🔍 Compare Brake Disc Prices for Your Car</h3>
          <p className="text-sm text-blue-700 mb-3">
            Enter your registration plate to find brake discs guaranteed to fit your specific vehicle, with prices
            compared across Amazon, eBay and specialist retailers.
          </p>
          <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-lg transition text-sm inline-block">
            Enter Your Reg Plate →
          </Link>
        </div>
        <GuideFooterLinks categorySlug="brake-discs" categoryName="Brake Discs" additionalCategories={[{slug:"brake-pads",name:"Brake Pads"},{slug:"brake-calipers",name:"Brake Calipers"}]} />
      </article>
    </div>
  );
}
