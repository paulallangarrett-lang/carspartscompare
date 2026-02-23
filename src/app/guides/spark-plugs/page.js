import Link from 'next/link';
import GuideFooterLinks from '@/components/GuideFooterLinks';
import JsonLd from '@/components/JsonLd';

export const metadata = {
  title: 'Spark Plug Buying Guide — Types, Intervals & Best Brands | CarPartsCompare',
  description: 'Copper vs platinum vs iridium spark plugs explained. How to choose the right plugs for your car, when to replace them, and which brands to trust. UK expert guide.',
};

const faqData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How often should spark plugs be replaced?',
      acceptedAnswer: { '@type': 'Answer', text: 'Standard copper spark plugs should be replaced every 20,000-30,000 miles. Platinum plugs last 40,000-60,000 miles. Iridium plugs can last 60,000-100,000 miles. Check your service book for the exact interval — it varies by engine. Diesel engines don\'t have spark plugs; they use glow plugs instead.' },
    },
    {
      '@type': 'Question',
      name: 'What happens if I don\'t change my spark plugs?',
      acceptedAnswer: { '@type': 'Answer', text: 'Worn spark plugs cause poor fuel economy (up to 30% worse), rough idling, misfires, difficulty starting (especially in cold weather), reduced power, and increased emissions. Eventually a badly worn plug can cause a misfire that damages the catalytic converter, which is far more expensive to replace.' },
    },
    {
      '@type': 'Question',
      name: 'Can I upgrade to iridium spark plugs?',
      acceptedAnswer: { '@type': 'Answer', text: 'In most cases yes. Iridium plugs will fit where standard copper plugs go and last 2-3 times longer. However, always match the heat range and thread size to what\'s specified for your engine. Using plugs with the wrong heat range can cause pre-ignition or fouling. Check your manufacturer\'s specification first.' },
    },
    {
      '@type': 'Question',
      name: 'Are expensive spark plugs worth it?',
      acceptedAnswer: { '@type': 'Answer', text: 'For most drivers, yes. Iridium plugs cost £8-£15 each versus £3-£5 for copper, but they last 3-4 times longer and maintain consistent performance throughout their life. Over the life of the plug you actually spend less, and you benefit from better fuel economy and smoother running the whole time.' },
    },
  ],
};

const articleData = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Spark Plug Buying Guide',
  description: 'Copper vs platinum vs iridium spark plugs explained. How to choose the right ones for your car.',
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
    { '@type': 'ListItem', position: 3, name: 'Spark Plugs', item: 'https://carpartscompare.uk/guides/spark-plugs' },
  ],
};

export default function SparkPlugsGuide() {
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
        <span className="text-gray-600">Spark Plugs</span>
      </nav>

      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Spark Plug Buying Guide</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: February 2026 · 6 min read</p>

        <p className="lead text-lg text-gray-700">
          Spark plugs are cheap, easy to replace on most cars, and make a noticeable difference to how your engine runs.
          Despite this, they're one of the most overlooked service items. This guide explains the different types, when
          to change them, and why spending a few extra pounds on better plugs pays for itself.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">How Spark Plugs Work</h2>

        <p className="text-gray-700 leading-relaxed">
          A spark plug creates the electrical spark that ignites the air-fuel mixture in each cylinder of a petrol engine.
          It does this thousands of times per minute, in conditions of extreme heat (up to 2,500°C at the electrode tip)
          and pressure. Over time, the electrode erodes and the gap between the electrodes widens, making the spark weaker
          and less consistent. This gradually reduces engine efficiency, power, and fuel economy.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">The Three Types of Spark Plug</h2>

        <div className="bg-gray-50 rounded-xl p-5 my-6 space-y-4">
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Copper / Nickel (Standard)</h3>
            <p className="text-sm text-gray-600">
              The traditional type, with a nickel alloy electrode and copper core. These are the cheapest but wear the fastest
              because nickel is a relatively soft metal. They actually provide excellent conductivity when new, which is why
              some high-performance and older engines specify copper plugs. But for everyday cars, they need replacing more
              frequently — every 20,000 to 30,000 miles.
            </p>
            <p className="text-sm text-gray-500 mt-1">Typical UK price: £2–£5 each</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Platinum</h3>
            <p className="text-sm text-gray-600">
              A platinum disc welded to the centre electrode resists erosion much better than nickel, roughly doubling the
              lifespan to 40,000–60,000 miles. Single-platinum plugs have platinum on the centre electrode only, while
              double-platinum plugs have it on both the centre and ground electrode (required for waste-spark ignition
              systems used by some manufacturers). Most modern cars from around 2000 onwards specify platinum or better.
            </p>
            <p className="text-sm text-gray-500 mt-1">Typical UK price: £5–£10 each</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Iridium</h3>
            <p className="text-sm text-gray-600">
              Iridium is harder and more durable than platinum, allowing a finer centre electrode (typically 0.4–0.6mm
              versus 0.8mm for platinum). The finer electrode requires less voltage to fire and produces a more focused spark,
              improving combustion efficiency. Iridium plugs last 60,000–100,000 miles and maintain more consistent
              performance throughout their life. Most new cars now come with iridium plugs as standard.
            </p>
            <p className="text-sm text-gray-500 mt-1">Typical UK price: £8–£15 each</p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Getting the Right Plug for Your Engine</h2>

        <p className="text-gray-700 leading-relaxed">
          Spark plugs are not interchangeable between engines. The key specifications are thread diameter (usually 12mm or
          14mm), thread length (reach), hex size (for the socket), heat range, and electrode gap. The easiest way to get the
          right plug is to look up your car's registration or use the manufacturer's part number cross-reference. NGK and
          Denso both have online lookup tools on their websites.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          The heat range is particularly important. It determines how quickly the plug dissipates heat from the combustion
          chamber. A plug that's too cold will foul up with carbon deposits; one that's too hot can cause pre-ignition and
          engine damage. Always match the heat range specified by the engine manufacturer unless you've made significant
          modifications.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Brand Guide</h2>

        <p className="text-gray-700 leading-relaxed">
          <strong>NGK</strong> is the world's largest spark plug manufacturer and the OEM supplier to the majority of car
          makers. Their standard BKR/BPR range covers copper plugs, the G-Power range is platinum, and the Iridium IX and
          Laser Iridium ranges are their premium offerings. If in doubt, NGK is always a safe choice — they almost certainly
          made the plugs your car came with.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          <strong>Denso</strong> is the OEM supplier for Toyota, Honda, and most other Japanese manufacturers, and also
          supplies to several European makers. Their Iridium TT plugs feature a patented twin-tip design that's claimed to
          improve ignitability. Particularly good for Japanese cars but covers most makes.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          <strong>Bosch</strong> is the OEM supplier for many German manufacturers including VW, BMW, and Mercedes. Their
          standard range is solid, and the Double Iridium plugs are their premium offering. Bosch plugs tend to be slightly
          more expensive than NGK/Denso equivalents but are excellent for German cars.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          <strong>Champion</strong> is a well-known brand with a long history, now owned by Federal-Mogul. Their standard
          range is adequate and affordable, but for premium applications NGK, Denso, or Bosch are generally preferred by
          mechanics.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">DIY Replacement Tips</h2>

        <p className="text-gray-700 leading-relaxed">
          Spark plugs are one of the most accessible DIY jobs. On most four-cylinder engines, you just need a spark plug
          socket (16mm or 21mm depending on the plug), a ratchet with an extension bar, and a torque wrench. Remove plugs
          when the engine is cold, check the gap matches the specification (most modern plugs come pre-gapped), and tighten
          to the manufacturer's torque setting — over-tightening can damage the cylinder head threads. Apply a thin coating
          of anti-seize compound to the threads to prevent them seizing in the head over time. On some modern engines with
          coil-on-plug ignition, you'll also need to unclip the ignition coils first.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mt-8">
          <h3 className="font-bold text-blue-900 mb-2">🔍 Compare Spark Plug Prices for Your Car</h3>
          <p className="text-sm text-blue-700 mb-3">
            Enter your registration plate to find spark plugs guaranteed to fit your specific engine, with prices compared
            across Amazon, eBay and specialist retailers.
          </p>
          <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-lg transition text-sm inline-block">
            Enter Your Reg Plate →
          </Link>
        </div>
        <GuideFooterLinks categorySlug="spark-plugs" categoryName="Spark Plugs" additionalCategories={[{slug:"ignition-coils",name:"Ignition Coils"},{slug:"glow-plugs",name:"Glow Plugs"},{slug:"ht-leads",name:"HT Leads"}]} />
      </article>
    </div>
  );
}
