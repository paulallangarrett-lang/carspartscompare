import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

export const metadata = {
  title: 'Best Wiper Blades: A Complete Buying Guide | CarPartsCompare',
  description: 'Conventional vs flat wiper blades, sizing, top UK brands, and fitting tips. Find the best replacement wiper blades for your car at the cheapest price.',
};

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What types of wiper blade are there?',
      acceptedAnswer: { '@type': 'Answer', text: 'Three types: Conventional/standard blades (£8-£18/pair) with a metal frame. Flat/beam blades (£12-£30/pair) which are frameless and more aerodynamic, now standard on most new cars. Hybrid blades (£15-£35/pair) which combine both designs.' },
    },
    {
      '@type': 'Question',
      name: 'How often should I replace wiper blades?',
      acceptedAnswer: { '@type': 'Answer', text: 'Replace every 12 months, or sooner if you notice streaking, smearing, squeaking, or juddering. UV light and temperature changes degrade the rubber over time. Autumn is the ideal time to replace them before winter.' },
    },
    {
      '@type': 'Question',
      name: 'What are the best wiper blade brands?',
      acceptedAnswer: { '@type': 'Answer', text: 'Bosch dominates the UK market with their Aerotwin flat blades. Valeo Silencio range is excellent. Denso makes outstanding hybrid blades. HELLA offers good mid-range options. Avoid very cheap unbranded blades as the rubber quality is poor.' },
    },
  ],
};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://carpartscompare.uk' },
    { '@type': 'ListItem', position: 2, name: 'Buying Guides', item: 'https://carpartscompare.uk/guides' },
    { '@type': 'ListItem', position: 3, name: 'Wiper Blades', item: 'https://carpartscompare.uk/guides/wiper-blades' },
  ],
};

export default function WiperBladesGuide() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <JsonLd data={faqData} />
      <JsonLd data={breadcrumbData} />
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/guides" className="hover:text-blue-600">Buying Guides</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600">Wiper Blades</span>
      </nav>

      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Best Wiper Blades: A Complete Guide</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: February 2026 · 5 min read</p>

        <p className="lead text-lg text-gray-700">
          Wiper blades are cheap, easy to replace, and make an enormous difference to your visibility and safety. In the UK's 
          wet climate, worn wipers are a genuine safety hazard. Yet most drivers wait far too long to replace them. Here's how 
          to choose the right ones.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Types of Wiper Blade</h2>

        <div className="bg-gray-50 rounded-xl p-5 my-6 space-y-4">
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Conventional (Standard) Blades</h3>
            <p className="text-sm text-gray-600">
              The traditional design with a metal frame that holds the rubber blade. Multiple pressure points distribute force 
              across the windscreen. These work well and are the cheapest option, but the exposed metal frame can collect ice 
              and snow in winter, reducing effectiveness. They also tend to lift at high motorway speeds due to wind resistance. 
              Still widely used and perfectly effective for most drivers.
            </p>
            <p className="text-sm text-gray-500 mt-1">Typical UK price: £8–£18 per pair</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Flat (Beam) Blades</h3>
            <p className="text-sm text-gray-600">
              The modern design, now standard on most new cars. A frameless design where a tensioned steel spring inside the 
              rubber creates even pressure across the entire blade length. They're more aerodynamic (less wind lift at speed, 
              quieter), handle curves in the windscreen better, and don't have exposed metal to clog with ice. They look 
              sleeker too. The downside is they cost slightly more than conventional blades.
            </p>
            <p className="text-sm text-gray-500 mt-1">Typical UK price: £12–£30 per pair</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Hybrid Blades</h3>
            <p className="text-sm text-gray-600">
              A combination of both designs — they use a conventional frame but encase it in an aerodynamic plastic shell. 
              Popular in Japan and increasingly available in the UK. They offer the best of both worlds: strong pressure 
              distribution from the frame, with aerodynamic performance and weather protection from the shell. Denso and 
              Bosch both offer good hybrid options.
            </p>
            <p className="text-sm text-gray-500 mt-1">Typical UK price: £15–£35 per pair</p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Getting the Right Size and Fitting</h2>

        <p className="text-gray-700 leading-relaxed">
          Wiper blades come in specific lengths (measured in inches or millimetres) and use different attachment types to 
          connect to the wiper arm. Most cars use different lengths for the driver and passenger side, and some have a third 
          rear wiper blade. The attachment type varies by manufacturer — common types include hook, pin, bayonet, side lock, 
          and top lock. Getting the wrong attachment means the blade simply won't clip onto your arm.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          The easiest way to get the right blade is to search by your registration plate, which identifies your exact car 
          and returns the correct sizes and attachment type. If you're buying in a shop, Bosch and Valeo both have fitting 
          guides on their websites where you can search by registration.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">When to Replace</h2>

        <p className="text-gray-700 leading-relaxed">
          Replace your wipers every 12 months, or sooner if you notice streaking, smearing, squeaking, juddering, or missed 
          areas. UV light, temperature changes, and general wear degrade the rubber over time even if you don't use them 
          often. In the UK, autumn is the ideal time to replace them — before winter rain and dark evenings when good 
          visibility matters most. A worn wiper blade is also an MOT advisory point if it doesn't clear the windscreen 
          effectively.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Best Wiper Blade Brands</h2>

        <p className="text-gray-700 leading-relaxed">
          <strong>Bosch</strong> dominates the UK wiper blade market and for good reason — their Aerotwin flat blades are 
          OEM on most European cars and offer consistent, quiet performance. <strong>Valeo</strong> is the other major OEM 
          supplier and their Silencio range is excellent. <strong>Denso</strong> makes outstanding hybrid blades, particularly 
          popular on Japanese cars. <strong>HELLA</strong> offers good mid-range options. Budget blades from <strong>SWF</strong> 
          and own-brand options work fine initially but the rubber tends to degrade faster, meaning more frequent replacement.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          One tip: avoid the very cheapest unbranded blades from marketplace sellers. Wiper blade rubber quality varies 
          enormously, and poor rubber can start streaking within weeks. The difference between a £10 pair and a £20 pair 
          from a known brand is significant in terms of longevity and wipe quality.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mt-8">
          <h3 className="font-bold text-blue-900 mb-2">🔍 Find Wiper Blades for Your Car</h3>
          <p className="text-sm text-blue-700 mb-3">
            Enter your registration plate to find the correct wiper blade size and fitting type for your car, with prices 
            compared across UK retailers.
          </p>
          <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-lg transition text-sm inline-block">
            Enter Your Reg Plate →
          </Link>
        </div>
      </article>
    </div>
  );
}
