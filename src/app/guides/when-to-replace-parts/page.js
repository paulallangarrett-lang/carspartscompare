import Link from 'next/link';

export const metadata = {
  title: 'When to Replace Common Car Parts — Service Intervals Guide | CarPartsCompare',
  description: 'A practical guide to car part replacement intervals and warning signs. Know when to change brake pads, filters, batteries, belts, and other common parts.',
};

export default function WhenToReplaceGuide() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/guides" className="hover:text-blue-600">Buying Guides</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600">When to Replace Parts</span>
      </nav>

      <article className="prose prose-gray max-w-none">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">When to Replace Common Car Parts</h1>
        <p className="text-gray-500 text-sm mb-8">Last updated: February 2026 · 8 min read</p>

        <p className="lead text-lg text-gray-700">
          Replacing worn parts on schedule is the cheapest form of car maintenance — it's always less expensive than the 
          damage that a failed part causes. This guide covers the most commonly replaced parts on UK cars, with realistic 
          intervals and warning signs to watch for.
        </p>

        <div className="bg-gray-50 rounded-xl p-5 my-6 space-y-6">
          <div>
            <h3 className="font-bold text-gray-900 mb-1">🛢️ Engine Oil & Oil Filter</h3>
            <p className="text-sm text-gray-600">
              <strong>Interval:</strong> Every 10,000–20,000 miles or 12–24 months, whichever comes first. Check your handbook — 
              longlife oil intervals are longer but require specific synthetic oils. If in doubt, changing annually is good practice.
            </p>
            <p className="text-sm text-gray-600 mt-1">
              <strong>Warning signs:</strong> Dark, gritty oil on the dipstick. Oil level dropping between changes. Engine noise 
              increasing. Oil pressure warning light.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">🌬️ Air Filter</h3>
            <p className="text-sm text-gray-600">
              <strong>Interval:</strong> Every 15,000–30,000 miles or at every major service. More frequently if you drive on 
              dusty roads or in heavy traffic.
            </p>
            <p className="text-sm text-gray-600 mt-1">
              <strong>Warning signs:</strong> Reduced fuel economy. Sluggish acceleration. Engine misfires. Visibly dirty or 
              clogged filter when you inspect it (it should be off-white or light grey, not black).
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">⛽ Fuel Filter</h3>
            <p className="text-sm text-gray-600">
              <strong>Interval:</strong> Every 20,000–40,000 miles for diesel engines (critical — dirty diesel fuel can 
              destroy injectors costing thousands). Petrol fuel filters often last the life of the car on modern vehicles but 
              should be checked at major services.
            </p>
            <p className="text-sm text-gray-600 mt-1">
              <strong>Warning signs:</strong> Difficulty starting. Engine hesitation or stumbling under acceleration. 
              Loss of power, especially uphill or under load. Engine cutting out.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">🛞 Brake Pads</h3>
            <p className="text-sm text-gray-600">
              <strong>Interval:</strong> Every 25,000–60,000 miles depending on driving style. City driving wears pads much 
              faster than motorway cruising. Front pads wear faster than rears (typically 2:1 ratio).
            </p>
            <p className="text-sm text-gray-600 mt-1">
              <strong>Warning signs:</strong> Squealing or squeaking when braking. Grinding noise (urgent — metal on metal). 
              Car pulling to one side. Brake pedal feels soft. Dashboard warning light. Visible pad thickness under 3mm.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">💿 Brake Discs</h3>
            <p className="text-sm text-gray-600">
              <strong>Interval:</strong> Every 50,000–80,000 miles, or every 2–3 sets of brake pads. Check thickness against 
              the minimum stamped on the disc.
            </p>
            <p className="text-sm text-gray-600 mt-1">
              <strong>Warning signs:</strong> Visible lip on the outer edge. Deep score marks or grooves. Vibration or 
              pulsing through the brake pedal (warped disc). Blue discolouration (overheating).
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">🔋 Battery</h3>
            <p className="text-sm text-gray-600">
              <strong>Interval:</strong> Every 4–6 years. Test annually from age 3+, especially before winter.
            </p>
            <p className="text-sm text-gray-600 mt-1">
              <strong>Warning signs:</strong> Slow cranking when starting. Dimming headlights at idle. Electrical glitches. 
              Battery warning light. Needing a jump start. Swollen or leaking battery case.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">🌧️ Wiper Blades</h3>
            <p className="text-sm text-gray-600">
              <strong>Interval:</strong> Every 12 months. Replace before winter for best visibility.
            </p>
            <p className="text-sm text-gray-600 mt-1">
              <strong>Warning signs:</strong> Streaking. Smearing. Squeaking. Juddering or chattering. Missed areas. 
              Visible cracks or tears in the rubber.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">⚡ Spark Plugs</h3>
            <p className="text-sm text-gray-600">
              <strong>Interval:</strong> Standard copper plugs every 20,000–30,000 miles. Iridium or platinum plugs every 
              60,000–100,000 miles. Check your handbook — modern engines with longlife plugs often specify 60,000+ miles.
            </p>
            <p className="text-sm text-gray-600 mt-1">
              <strong>Warning signs:</strong> Engine misfiring. Rough idle. Poor fuel economy. Difficulty starting. 
              Failed emissions test. Check engine light.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">🔗 Timing Belt / Cambelt</h3>
            <p className="text-sm text-gray-600">
              <strong>Interval:</strong> Every 40,000–100,000 miles or 4–5 years, whichever comes first. This varies hugely 
              by engine — always check your manufacturer's specification. A snapped timing belt on an interference engine 
              destroys the engine, costing thousands. This is the single most important scheduled replacement on your car.
            </p>
            <p className="text-sm text-gray-600 mt-1">
              <strong>Warning signs:</strong> Usually none — timing belts fail without warning, which is why scheduled 
              replacement is critical. Occasionally a ticking noise from the engine cover or slight roughness at idle.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-gray-900 mb-1">🏎️ Clutch</h3>
            <p className="text-sm text-gray-600">
              <strong>Interval:</strong> No set interval — depends heavily on driving style. Typically 60,000–100,000 miles. 
              City driving and towing wear clutches faster.
            </p>
            <p className="text-sm text-gray-600 mt-1">
              <strong>Warning signs:</strong> Clutch slipping (engine revs rise without corresponding acceleration, especially 
              in higher gears). High biting point. Difficulty engaging gears. Burning smell. Juddering on pull-away.
            </p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mt-8 mb-3">A Note on Service Schedules</h2>

        <p className="text-gray-700 leading-relaxed">
          Your car's manufacturer service schedule is the best starting point for replacement intervals. It's designed for 
          your specific engine and takes into account the typical UK driving conditions. You'll find it in your owner's manual 
          or on the manufacturer's website. If you've lost the manual, a quick search for your car's make, model and year 
          plus "service schedule" will usually find it.
        </p>

        <p className="text-gray-700 leading-relaxed mt-3">
          Keep in mind that manufacturer intervals sometimes assume ideal conditions. If you do lots of short trips, drive in 
          heavy traffic, tow a caravan, or drive on dusty roads, consider shortening the intervals for wear items like oil, 
          filters, and brake pads.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mt-8">
          <h3 className="font-bold text-blue-900 mb-2">🔍 Find Parts for Your Car</h3>
          <p className="text-sm text-blue-700 mb-3">
            Enter your registration plate to find all compatible parts for your specific vehicle, with prices compared 
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
