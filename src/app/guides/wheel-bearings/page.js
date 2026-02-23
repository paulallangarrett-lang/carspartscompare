import Link from 'next/link';
import GuideFooterLinks from '@/components/GuideFooterLinks';
import JsonLd from '@/components/JsonLd';

export const metadata = {
  title: 'Wheel Bearing Buying Guide — Symptoms, Brands & Replacement Cost | CarPartsCompare',
  description: 'How to diagnose a worn wheel bearing, the difference between hub assemblies and press-in bearings, and which brands last longest. Expert UK buying guide.',
};

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a worn wheel bearing sound like?',
      acceptedAnswer: { '@type': 'Answer', text: 'A worn wheel bearing produces a humming, droning, or growling noise that gets louder with speed and changes when you turn the steering wheel. If the noise gets quieter when you turn left, the right bearing is likely worn (and vice versa), because turning shifts the car\'s weight away from the worn side.' },
    },
    {
      '@type': 'Question',
      name: 'How long do wheel bearings last?',
      acceptedAnswer: { '@type': 'Answer', text: 'Wheel bearings typically last 80,000 to 120,000 miles, though UK road conditions can shorten this. Driving through deep puddles or flood water can wash out the bearing grease and cause premature failure. Front bearings on front-wheel-drive cars tend to wear faster than rears because they handle both driving and steering forces.' },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to drive with a worn wheel bearing?',
      acceptedAnswer: { '@type': 'Answer', text: 'A mildly worn bearing that is just starting to hum can be driven on for a short time, but it should be replaced promptly. A severely worn bearing that is grinding, has noticeable play, or causes the ABS warning light to illuminate is dangerous and should be replaced immediately — in extreme cases the wheel can seize or detach.' },
    },
    {
      '@type': 'Question',
      name: 'How much does a wheel bearing replacement cost in the UK?',
      acceptedAnswer: { '@type': 'Answer', text: 'A wheel bearing costs £20-£80 for the part (or £60-£150 for a complete hub assembly). Labour is typically £60-£150 per side depending on the type — bolt-on hub assemblies are quick, while press-in bearings require a hydraulic press and take longer. Total cost per wheel is usually £80-£250.' },
    },
  ],
};

const articleData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Wheel Bearing Buying Guide',
  description: 'How to diagnose a worn wheel bearing and which brands to choose for your replacement.',
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
    { '@type': 'ListItem', position: 3, name: 'Wheel Bearings', item: 'https://carpartscompare.uk/guides/wheel-bearings' },
  ],
};

export default function WheelBearingsGuide() {
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
        <span className="text-gray-600">Wheel Bearings</span>
      </nav>

      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Wheel Bearing Buying Guide</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: February 2026 · 6 min read</p>

        <p className="lead text-lg text-gray-700">
          Wheel bearings are hidden components that most drivers never think about until one fails. A worn bearing
          announces itself with an unmistakable droning noise that gets worse over time. This guide explains how to
          identify the problem, understand the different types, and choose a replacement that will last.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">How to Diagnose a Worn Wheel Bearing</h2>

        <p className="text-gray-700 leading-relaxed">
          The classic symptom is a continuous humming or droning noise that increases with road speed and doesn't change
          with engine revs (if you put the car in neutral and coast, the noise continues — this rules out gearbox or
          engine noise). The most useful diagnostic trick is to listen for the noise changing when you gently weave the
          steering wheel left and right at speed. When you turn left, weight shifts to the right side of the car, loading
          the right bearing more. If the noise gets louder when turning left, the right-side bearing is the culprit.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          With the car jacked up, you can also check for play by gripping the tyre at 12 and 6 o'clock and rocking it.
          Any noticeable movement that isn't from a worn ball joint indicates bearing wear. Spinning the wheel by hand
          may also reveal roughness or grinding. On cars with ABS, a failing bearing can cause the ABS sensor to give
          erratic readings, triggering the ABS warning light — this is actually one of the more common reasons for an
          ABS light on older cars.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Types of Wheel Bearing</h2>

        <div className="bg-gray-50 rounded-xl p-5 my-6 space-y-4">
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Press-In Bearings</h3>
            <p className="text-sm text-gray-600">
              The traditional type found on many older cars and some modern ones. The bearing is pressed into the hub or
              knuckle using a hydraulic press. This is a more involved job that typically requires removing the hub and
              using specialist equipment — most home mechanics can't do this without a press. Common on Vauxhall Corsa,
              VW Polo, Peugeot 206/207, and many French cars.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Bolt-On Hub Assembly (Hub Unit)</h3>
            <p className="text-sm text-gray-600">
              A complete assembly that includes the bearing, hub, and often the ABS sensor ring pre-assembled. These bolt
              directly onto the knuckle with typically 3-4 bolts, making replacement much simpler and faster. Common on
              Ford Focus and Fiesta, many modern Japanese cars, and increasingly on newer European cars. More expensive
              than a bare bearing but saves significant labour time.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Flange Bearing</h3>
            <p className="text-sm text-gray-600">
              A bearing with an integrated flange that bolts to the knuckle on one side and has studs for the wheel on
              the other. Common on many modern VW, Audi, and Skoda models. These are a middle ground — easier than
              press-in but requiring more work than a simple hub unit. Some have integrated ABS encoders.
            </p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Brand Guide</h2>

        <p className="text-gray-700 leading-relaxed">
          <strong>SKF</strong> is the world's leading bearing manufacturer and the OEM supplier to most car makers. Their
          wheel bearing kits include everything needed for the job — bearing, seals, nuts, and any circlips. SKF is the
          safe choice for any car and widely available from all UK parts suppliers. You're almost certainly replacing
          with the same brand that was originally fitted.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          <strong>FAG</strong> (part of the Schaeffler group) is the other major OEM bearing manufacturer, supplying VW,
          Audi, BMW, and Mercedes among others. If your car is German, there's a good chance it came with FAG bearings.
          Quality is equivalent to SKF and they offer excellent coverage for European cars.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          <strong>NTN-SNR</strong> is a Japanese-French bearing manufacturer that supplies to Renault, Peugeot, Citroën,
          and several Japanese makers. Their wheel bearing kits offer OEM quality at slightly lower prices than SKF/FAG.
          Good choice for French and Japanese cars.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          <strong>Budget bearings</strong> from lesser-known brands are available for 50–60% less than OEM brands. However,
          wheel bearings are a safety-critical component and a cheap bearing that fails prematurely means paying for the
          labour again. Given that the bearing itself is typically £20–£80, saving £15 on a budget brand isn't worth the
          risk when labour costs £60–£150.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">What Causes Premature Failure</h2>

        <p className="text-gray-700 leading-relaxed">
          The biggest killer of wheel bearings in the UK is water ingress. Driving through deep puddles, floods, or even
          frequent heavy rain can wash grease out of the bearing seal, leading to corrosion and accelerated wear. Potholes
          and kerb impacts can damage the bearing races, causing rough spots that gradually worsen. Incorrect fitting —
          particularly overtightening the hub nut or damaging the seal during installation — is another common cause of
          early failure. Modified cars with larger wheels or lowered suspension put extra stress on bearings and may need
          them replaced more frequently.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mt-8">
          <h3 className="font-bold text-blue-900 mb-2">🔍 Compare Wheel Bearing Prices for Your Car</h3>
          <p className="text-sm text-blue-700 mb-3">
            Enter your registration plate to find wheel bearings guaranteed to fit your specific vehicle, with prices
            compared across Amazon, eBay and specialist retailers.
          </p>
          <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-lg transition text-sm inline-block">
            Enter Your Reg Plate →
          </Link>
        </div>
        <GuideFooterLinks categorySlug="wheel-bearings" categoryName="Wheel Bearings" additionalCategories={[{slug:"hub-assemblies",name:"Hub Assemblies"},{slug:"abs-sensors",name:"ABS Sensors"}]} />
      </article>
    </div>
  );
}
