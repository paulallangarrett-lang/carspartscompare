import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

export const metadata = {
  title: 'Car Battery Buying Guide for UK Drivers | CarPartsCompare',
  description: 'CCA ratings, battery sizes, AGM vs EFB explained. How to choose the right replacement car battery for your vehicle and UK climate. Expert guide with price tips.',
};

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What types of car battery are there?',
      acceptedAnswer: { '@type': 'Answer', text: 'Three types: Conventional lead-acid (£55-£100) for cars without start-stop. EFB/Enhanced Flooded Battery (£80-£130) for basic start-stop systems. AGM/Absorbent Glass Mat (£100-£180) for advanced start-stop and high electrical demand vehicles like BMW and Mercedes.' },
    },
    {
      '@type': 'Question',
      name: 'What does CCA mean on a car battery?',
      acceptedAnswer: { '@type': 'Answer', text: 'CCA stands for Cold Cranking Amps — it measures how much current the battery can deliver at -18°C for 30 seconds. Always match or exceed your car\'s original CCA rating. Higher CCA gives more cold-weather starting margin.' },
    },
    {
      '@type': 'Question',
      name: 'How long does a car battery last?',
      acceptedAnswer: { '@type': 'Answer', text: 'Most car batteries last 4-6 years in UK conditions. Signs of failure include slow cranking, dimming headlights at idle, electrical glitches, and needing a jump start. Test annually from age 3+, especially before winter.' },
    },
    {
      '@type': 'Question',
      name: 'What is battery registration?',
      acceptedAnswer: { '@type': 'Answer', text: 'Modern BMW, Mini, Audi and Mercedes models need the battery management system told when a new battery is fitted, using a diagnostic tool. Without registration, the alternator may overcharge or undercharge the new battery.' },
    },
  ],
};

const breadcrumbData = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://carpartscompare.uk' },
    { '@type': 'ListItem', position: 2, name: 'Buying Guides', item: 'https://carpartscompare.uk/guides' },
    { '@type': 'ListItem', position: 3, name: 'Car Batteries', item: 'https://carpartscompare.uk/guides/car-batteries' },
  ],
};

export default function CarBatteriesGuide() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <JsonLd data={faqData} />
      <JsonLd data={breadcrumbData} />
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/guides" className="hover:text-blue-600">Buying Guides</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600">Car Batteries</span>
      </nav>

      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Car Battery Buying Guide for UK Drivers</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: February 2026 · 7 min read</p>

        <p className="lead text-lg text-gray-700">
          A flat battery is the most common cause of breakdown callouts in the UK, especially during winter. Replacing your 
          battery before it fails completely saves you the stress and cost of an emergency callout. Here's everything you 
          need to know about choosing the right replacement.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Battery Types Explained</h2>

        <p className="text-gray-700 leading-relaxed">
          Modern cars use one of three battery technologies, and it's important to replace like-for-like. Fitting the wrong 
          type can cause charging problems, premature failure, or even damage to your car's electrical system.
        </p>

        <div className="bg-gray-50 rounded-xl p-5 my-6 space-y-4">
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Conventional Lead-Acid (SLI)</h3>
            <p className="text-sm text-gray-600">
              The standard battery type used in most cars without start-stop technology. A lead-acid battery uses lead plates 
              submerged in sulphuric acid electrolyte. They're reliable, well-understood, and the cheapest option. Most 
              maintenance-free versions are sealed and don't need topping up. If your car doesn't have start-stop, this is 
              almost certainly what you need.
            </p>
            <p className="text-sm text-gray-500 mt-1">Typical UK price: £55–£100</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">EFB (Enhanced Flooded Battery)</h3>
            <p className="text-sm text-gray-600">
              An improved version of lead-acid, designed for cars with basic start-stop systems. EFB batteries handle the 
              extra charge/discharge cycles that start-stop demands. They use enhanced plate design and improved electrolyte 
              circulation. If your car came with an EFB, you can replace it with an EFB or upgrade to an AGM — but never 
              downgrade to a standard lead-acid.
            </p>
            <p className="text-sm text-gray-500 mt-1">Typical UK price: £80–£130</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">AGM (Absorbent Glass Mat)</h3>
            <p className="text-sm text-gray-600">
              The premium option, required for cars with advanced start-stop, regenerative braking, or high electrical demands 
              (heated seats, large infotainment systems, dashcams, etc). AGM batteries absorb the electrolyte into glass fibre 
              mats between the plates, making them spill-proof and far more resistant to vibration and deep discharge. They 
              charge faster and last longer. Common on BMW, Audi, Mercedes, and most premium cars from 2015 onwards. If your 
              car came with AGM, you must replace with AGM.
            </p>
            <p className="text-sm text-gray-500 mt-1">Typical UK price: £100–£180</p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Key Specifications to Match</h2>

        <p className="text-gray-700 leading-relaxed">
          <strong>Physical size and terminal layout</strong> — batteries come in standard European sizes (like 096, 075, 110, etc.) 
          that determine the dimensions and terminal positions. The battery must physically fit your battery tray and the terminals 
          must be on the correct side for your cables to reach. Getting this wrong means the battery literally won't fit in your car.
        </p>
        <p className="text-gray-700 leading-relaxed mt-3">
          <strong>CCA (Cold Cranking Amps)</strong> — this is the most important performance number. It measures how much current 
          the battery can deliver at -18°C for 30 seconds while maintaining at least 7.2V. In the UK winter, this matters. 
          Always match or exceed your car's original CCA rating. A higher CCA than original is fine and gives you more cold-weather 
          starting margin, but never go lower.
        </p>
        <p className="text-gray-700 leading-relaxed mt-3">
          <strong>Ah (Amp-hours)</strong> — this measures total capacity, or how long the battery can supply power before going flat. 
          Again, match or exceed the original. Cars with lots of electrical accessories benefit from higher Ah ratings. A typical 
          small car might need 44Ah, a medium car 60–70Ah, and a large SUV or diesel 80–110Ah.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">When to Replace</h2>

        <p className="text-gray-700 leading-relaxed">
          Most car batteries last 4–6 years in UK conditions. Signs yours is failing include: slow cranking when starting 
          (the engine turns over sluggishly), dimming headlights at idle, electrical glitches, the battery warning light 
          appearing, or needing a jump start. If your battery is over 4 years old and showing any of these symptoms, replace 
          it proactively rather than waiting for it to leave you stranded on a cold morning.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          Many garages and battery retailers offer free battery health testing — Halfords, Kwik Fit, and the AA all provide 
          this service. It takes a few minutes and gives you a clear pass/marginal/fail result. Worth doing before winter if 
          your battery is more than three years old.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Trusted Brands</h2>

        <p className="text-gray-700 leading-relaxed">
          <strong>Bosch</strong> and <strong>Varta</strong> are market leaders and OEM suppliers to most European manufacturers — 
          they're made in the same factories and are essentially the same batteries with different labels. <strong>Yuasa</strong> is 
          the dominant brand for Japanese vehicles and is an excellent all-round choice. <strong>Exide</strong> supplies original 
          equipment to many French and Italian manufacturers. At the budget end, <strong>Lion</strong> and various own-brand 
          batteries offer adequate performance at lower prices, though longevity can be shorter.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Battery Registration</h2>

        <p className="text-gray-700 leading-relaxed">
          One important note for modern cars, particularly BMW, Mini, and some Audi and Mercedes models: after fitting a new 
          battery, the car's battery management system (BMS) needs to be told that a new battery has been installed. This is 
          called "battery registration" and typically requires a diagnostic tool. Without it, the alternator may overcharge 
          or undercharge the new battery, significantly reducing its lifespan. If you're fitting the battery yourself on one of 
          these cars, you'll need access to a compatible OBD tool or a trip to a garage for registration.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mt-8">
          <h3 className="font-bold text-blue-900 mb-2">🔍 Find the Right Battery for Your Car</h3>
          <p className="text-sm text-blue-700 mb-3">
            Enter your registration plate to find batteries that fit your specific vehicle, with the correct size, CCA, and 
            technology type, with prices compared across UK retailers.
          </p>
          <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-lg transition text-sm inline-block">
            Enter Your Reg Plate →
          </Link>
        </div>
      </article>
    </div>
  );
}
