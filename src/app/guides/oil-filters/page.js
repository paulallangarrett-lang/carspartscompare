import Link from 'next/link';

export const metadata = {
  title: 'Oil Filter Buying Guide — What You Need to Know | CarPartsCompare',
  description: 'Everything UK drivers need to know about oil filters: types, brands, change intervals, and how to find the right one for your car at the best price.',
};

export default function OilFiltersGuide() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/guides" className="hover:text-blue-600">Buying Guides</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600">Oil Filters</span>
      </nav>

      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Oil Filter Buying Guide: What You Need to Know</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: February 2026 · 5 min read</p>

        <p className="lead text-lg text-gray-700">
          Your oil filter does a simple but critical job — it removes metal particles, dirt, and combustion by-products from 
          your engine oil, keeping it clean enough to protect your engine. A cheap or wrong filter can lead to premature engine 
          wear, reduced performance, and expensive repairs. Here's what to look for.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Types of Oil Filter</h2>

        <p className="text-gray-700 leading-relaxed">
          There are two main types you'll encounter when buying a replacement for a UK car:
        </p>

        <div className="bg-gray-50 rounded-xl p-5 my-6 space-y-4">
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Spin-On Oil Filters</h3>
            <p className="text-sm text-gray-600">
              The traditional type — a self-contained metal canister that screws directly onto the engine. The filter element, 
              anti-drain valve, and bypass valve are all built in. You replace the entire unit each time. These are easy to 
              change and most common on older and simpler engines. You'll find them on many Ford, Vauxhall, and Japanese models.
            </p>
            <p className="text-sm text-gray-500 mt-1">Typical UK price: £4–£15</p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">Cartridge (Element) Oil Filters</h3>
            <p className="text-sm text-gray-600">
              Increasingly common on modern European cars — a paper or synthetic filter element that sits inside a reusable 
              plastic or metal housing on the engine. You replace just the element and its O-ring seal, not the housing. These 
              are more environmentally friendly (less waste) and often give better filtration. Common on BMW, Audi, VW, and 
              Mercedes. They can be slightly fiddlier to change as you need to remove the housing cap.
            </p>
            <p className="text-sm text-gray-500 mt-1">Typical UK price: £5–£18</p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">How Often to Change Your Oil Filter</h2>

        <p className="text-gray-700 leading-relaxed">
          The answer is straightforward: every time you change your oil. The filter should always be replaced with the oil, 
          not on alternate changes. A used filter is already partially clogged and will reduce the effectiveness of your fresh oil 
          immediately. Some manufacturers specify oil change intervals of 10,000–20,000 miles or 12–24 months, depending on the 
          engine and whether you use longlife oil. Check your owner's manual for the exact interval.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          If you do a lot of short journeys, especially in cold weather where the engine doesn't fully warm up, consider changing 
          your oil and filter more frequently than the manufacturer's schedule. Short journeys cause more condensation and fuel 
          contamination in the oil, which accelerates filter clogging.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">What Makes a Good Oil Filter</h2>

        <p className="text-gray-700 leading-relaxed">
          The key differences between oil filters come down to three things: the filter media (what the filter paper is made of 
          and how fine it filters), the anti-drain back valve (prevents oil draining out of the filter when the engine is off, 
          avoiding dry starts), and the bypass valve (allows oil to flow even if the filter clogs, preventing oil starvation).
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          Premium filters from brands like MANN-FILTER, Bosch, and MAHLE typically use multi-layer synthetic media that filters 
          down to smaller particle sizes and lasts longer before clogging. Budget filters often use simpler cellulose media that 
          provides adequate filtration initially but degrades faster. For most drivers doing standard service intervals, a 
          mid-range filter from a reputable brand is the sweet spot.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Brand Guide</h2>

        <p className="text-gray-700 leading-relaxed">
          <strong>MANN-FILTER</strong> is the market leader and supplies original equipment to most German manufacturers — if 
          your BMW, Audi, or VW came with a MANN filter from the factory, buying the same brand is a safe bet. 
          <strong> MAHLE</strong> is another major OEM supplier, particularly strong for European cars. 
          <strong> Bosch</strong> offers excellent all-round filters at competitive prices and is widely available. 
          <strong> FRAM</strong> and <strong>Champion</strong> are solid mid-range options. At the budget end, 
          <strong> BluePrint</strong> and various own-brand filters provide adequate filtration at the lowest cost, 
          though filter media quality can be inconsistent.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">Getting the Right Filter</h2>

        <p className="text-gray-700 leading-relaxed">
          Oil filters are specific to your engine — even within the same car model, different engines use different filters. 
          A 1.0 EcoBoost Ford Focus uses a completely different filter to a 1.5 TDCi diesel Focus. This is why using your 
          registration plate to look up the correct part is so much more reliable than searching by car model alone. The 
          wrong filter might physically fit but have different flow rates, bypass pressure, or seal sizes that could cause 
          oil leaks or poor filtration.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mt-8">
          <h3 className="font-bold text-blue-900 mb-2">🔍 Find the Right Oil Filter for Your Car</h3>
          <p className="text-sm text-blue-700 mb-3">
            Enter your registration plate to find oil filters guaranteed to fit your specific engine, with prices compared 
            across Amazon, eBay and specialist retailers.
          </p>
          <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-lg transition text-sm inline-block">
            Enter Your Reg Plate →
          </Link>
        </div>
      </article>
    </div>
  );
}
