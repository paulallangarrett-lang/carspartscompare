'use client';
import RegPlateInput from '@/components/RegPlateInput';
import { AdBanner } from '@/components/AdUnits';

const POPULAR_MAKES = [
  { name: 'Ford', slug: 'ford' },
  { name: 'Vauxhall', slug: 'vauxhall' },
  { name: 'Volkswagen', slug: 'volkswagen' },
  { name: 'BMW', slug: 'bmw' },
  { name: 'Audi', slug: 'audi' },
  { name: 'Toyota', slug: 'toyota' },
  { name: 'Honda', slug: 'honda' },
  { name: 'Nissan', slug: 'nissan' },
  { name: 'Mercedes', slug: 'mercedes-benz' },
  { name: 'Hyundai', slug: 'hyundai' },
  { name: 'Kia', slug: 'kia' },
  { name: 'MINI', slug: 'mini' },
];

const PART_TYPES = [
  { name: 'Air Filters', icon: '🌬️', slug: 'air-filters', desc: 'Keep your engine breathing clean', tint: 'bg-sky-50 text-sky-600' },
  { name: 'Oil Filters', icon: '🛢️', slug: 'oil-filters', desc: 'Protect your engine from contaminants', tint: 'bg-amber-50 text-amber-600' },
  { name: 'Brake Pads', icon: '🛞', slug: 'brake-pads', desc: 'Essential for safe stopping', tint: 'bg-rose-50 text-rose-600' },
  { name: 'Wiper Blades', icon: '🌧️', slug: 'wiper-blades', desc: 'Clear vision in all weather', tint: 'bg-indigo-50 text-indigo-600' },
  { name: 'Spark Plugs', icon: '⚡', slug: 'spark-plugs', desc: 'Keep your engine running smooth', tint: 'bg-emerald-50 text-emerald-600' },
];

const RETAILERS = [
  { name: 'Amazon', badge: 'AMZ', tint: 'bg-orange-100 text-orange-600' },
  { name: 'eBay', badge: 'eB', tint: 'bg-blue-100 text-blue-600' },
  { name: 'Euro Car Parts', badge: 'ECP', tint: 'bg-red-100 text-red-600' },
  { name: 'GSF Car Parts', badge: 'GSF', tint: 'bg-emerald-100 text-emerald-600' },
];

const TRUST_STATS = [
  { value: 'DVLA', label: 'Verified vehicle data' },
  { value: '698', label: 'Manufacturers covered' },
  { value: '4', label: 'Retailers compared' },
  { value: 'Free', label: 'Always free to use' },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.15] pointer-events-none">
          <div className="absolute top-[-4rem] left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-[-4rem] right-1/4 w-96 h-96 bg-sky-400 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-blue-200 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Compare prices from the UK's top retailers instantly
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
            Compare Car Parts Prices<br />
            <span className="text-blue-400">Across the UK</span>
          </h1>
          <p className="text-lg text-slate-300 mb-10 max-w-xl mx-auto leading-relaxed">
            Enter your registration plate to find compatible parts and compare prices from Amazon, eBay and specialist retailers.
          </p>
          <RegPlateInput />
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-b border-gray-100 py-10">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {TRUST_STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-extrabold text-gray-900">{s.value}</div>
              <div className="text-sm text-gray-500 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-3 text-gray-900 tracking-tight">How It Works</h2>
        <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">Finding the right parts at the best price takes less than 60 seconds.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { step: '1', title: 'Enter Your Reg', desc: 'Type your registration plate and we instantly identify your exact vehicle, engine size and fuel type.' },
            { step: '2', title: 'Choose a Part', desc: 'Browse compatible parts guaranteed to fit your specific vehicle — no guesswork needed.' },
            { step: '3', title: 'Compare & Save', desc: 'See prices from Amazon, eBay and specialist retailers side by side. Click to buy.' },
          ].map((item) => (
            <div key={item.step} className="relative bg-white rounded-2xl border border-gray-200 p-7 text-center hover:shadow-lg hover:border-blue-200 transition-all">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center text-lg font-bold mx-auto mb-5 shadow-lg shadow-blue-500/25">
                {item.step}
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Part types */}
      <section className="bg-gray-50 py-20 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3 text-gray-900 tracking-tight">Popular Part Categories</h2>
          <p className="text-gray-500 text-center mb-12">We cover the most commonly replaced car parts</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PART_TYPES.map((pt) => (
              <a
                key={pt.slug}
                href={`/car-parts`}
                className="bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-lg hover:border-blue-200 transition-all flex items-start gap-4"
              >
                <span className={`w-11 h-11 shrink-0 rounded-xl flex items-center justify-center text-xl ${pt.tint}`}>{pt.icon}</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{pt.name}</h3>
                  <p className="text-sm text-gray-500 mt-0.5">{pt.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Popular makes */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3 text-gray-900 tracking-tight">Browse by Manufacturer</h2>
          <p className="text-gray-500 text-center mb-12">Or search directly by your car make</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {POPULAR_MAKES.map((make) => (
              <a
                key={make.slug}
                href={`/car-parts/${make.slug}`}
                className="bg-white border border-gray-200 rounded-xl py-4 text-center hover:border-blue-300 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <span className="font-semibold text-gray-700 text-sm">{make.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Retailers we compare */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3 text-white tracking-tight">We Compare Prices From</h2>
          <p className="text-slate-400 text-center mb-12">Trusted UK retailers with genuine branded parts and reliable delivery</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14">
            {RETAILERS.map((r) => (
              <div key={r.name} className="text-center">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-2.5 font-extrabold text-sm ${r.tint}`}>
                  {r.badge}
                </div>
                <div className="font-medium text-slate-300 text-sm">{r.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad placement */}
      <div className="max-w-5xl mx-auto px-4">
        <AdBanner />
      </div>

      {/* Popular searches — direct links to high-volume category pages */}
      <section className="bg-gray-50 py-20 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3 text-gray-900 tracking-tight">Popular Parts Searches</h2>
          <p className="text-gray-500 text-center mb-8">Jump straight to price comparisons for the UK's most searched car parts.</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { label: 'Ford Fiesta Brake Pads', path: '/car-parts/ford/fiesta/brake-pads' },
              { label: 'VW Golf Oil Filters', path: '/car-parts/volkswagen/golf/oil-filters' },
              { label: 'Vauxhall Corsa Batteries', path: '/car-parts/vauxhall/corsa/batteries' },
              { label: 'BMW 3 Series Brake Discs', path: '/car-parts/bmw/3-series/brake-discs' },
              { label: 'Ford Focus Wiper Blades', path: '/car-parts/ford/focus/wiper-blades' },
              { label: 'Nissan Qashqai Air Filters', path: '/car-parts/nissan/qashqai/air-filters' },
              { label: 'Audi A3 Spark Plugs', path: '/car-parts/audi/a3/spark-plugs' },
              { label: 'Toyota Yaris Cabin Filters', path: '/car-parts/toyota/yaris/cabin-filters' },
              { label: 'Hyundai Tucson Brake Pads', path: '/car-parts/hyundai/tucson/brake-pads' },
              { label: 'Kia Sportage Oil Filters', path: '/car-parts/kia/sportage/oil-filters' },
              { label: 'Peugeot 208 Batteries', path: '/car-parts/peugeot/208/batteries' },
              { label: 'Mercedes A-Class Wiper Blades', path: '/car-parts/mercedes-benz/a-class/wiper-blades' },
              { label: 'VW Polo Timing Belts', path: '/car-parts/volkswagen/polo/timing-belts' },
              { label: 'Ford Puma Brake Pads', path: '/car-parts/ford/puma/brake-pads' },
              { label: 'Mini Hatch Oil Filters', path: '/car-parts/mini/hatch/oil-filters' },
            ].map(link => (
              <a
                key={link.path}
                href={link.path}
                className="bg-white border border-gray-200 text-gray-700 text-sm px-3.5 py-1.5 rounded-full hover:border-blue-300 hover:text-blue-700 hover:shadow-sm transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="/car-parts" className="text-blue-600 font-semibold text-sm hover:underline">Browse all makes and models →</a>
          </div>
        </div>
      </section>

      {/* Buying guides */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-3 text-gray-900 tracking-tight">Expert Buying Guides</h2>
          <p className="text-gray-500 text-center mb-12">Not sure what to buy? Our guides help you choose the right parts and save money.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { slug: 'brake-pads', icon: '🛞', title: 'Brake Pads', desc: 'Types, brands, and when to replace them' },
              { slug: 'oil-filters', icon: '🛢️', title: 'Oil Filters', desc: 'Spin-on vs cartridge and top brands' },
              { slug: 'car-batteries', icon: '🔋', title: 'Car Batteries', desc: 'CCA ratings, AGM vs EFB, and sizing' },
              { slug: 'wiper-blades', icon: '🌧️', title: 'Wiper Blades', desc: 'Flat vs conventional and fitting types' },
              { slug: 'when-to-replace-parts', icon: '🔧', title: 'Replacement Intervals', desc: '10 common parts and when they need changing' },
              { slug: 'saving-money-car-parts', icon: '💰', title: 'Save Money on Parts', desc: 'Pro tips for getting the best deals' },
            ].map(guide => (
              <a
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-lg hover:border-blue-200 transition-all block group"
              >
                <span className="text-2xl mb-3 block">{guide.icon}</span>
                <h3 className="font-semibold text-gray-900">{guide.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{guide.desc}</p>
                <span className="text-xs text-blue-600 mt-3 font-medium inline-flex items-center gap-1 group-hover:gap-1.5 transition-all">Read guide →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-600 to-blue-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-3 tracking-tight">Ready to find your parts?</h2>
          <p className="text-blue-100 mb-8">Enter your reg plate above and compare prices in seconds — completely free.</p>
          <a
            href="#top"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-7 py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
          >
            Enter Your Reg Number
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </section>

      {/* SEO content — keyword-rich for broader ranking */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Compare Car Parts Prices?</h2>
          <div className="prose prose-gray max-w-none text-gray-600 text-sm leading-relaxed space-y-4">
            <p>
              Car parts prices vary enormously between retailers. The same set of brake pads can cost £18 from one
              seller and £45 from another — and both are genuine, brand-name parts. Without comparing, you could
              easily overpay by 50% or more on routine service items like oil filters, air filters, and wiper blades.
              CarPartsCompare solves this by showing you prices from Amazon, eBay and specialist UK car parts
              retailers side by side, so you can spot the best deal in seconds.
            </p>
            <p>
              One of the biggest challenges when buying car parts online is making sure they actually fit your vehicle.
              A Ford Focus brake pad won't necessarily fit every Focus — it depends on the engine size, year of
              manufacture, and trim level. That's why we built our registration plate lookup tool. Enter your reg
              and we use official DVLA data to identify your exact vehicle, then cross-reference it against the
              TecDoc parts catalogue — the same database used by professional garages — to show you only parts
              that are guaranteed to fit.
            </p>

            <h3 className="text-lg font-bold text-gray-900 pt-2">How Much Can You Save?</h3>
            <p>
              UK drivers spend an average of £500–£700 per year on car maintenance and repairs. Even on basic service
              items, the savings from comparing prices add up quickly. A set of front brake pads might cost £22 on
              eBay versus £38 at a high street retailer. An oil filter could be £5 on Amazon versus £12 elsewhere.
              Over the course of a year's routine maintenance — oil changes, brake pads, filters, wiper blades —
              comparing prices can easily save you £100–£200.
            </p>

            <h3 className="text-lg font-bold text-gray-900 pt-2">OEM vs Aftermarket: What's the Difference?</h3>
            <p>
              When browsing car parts, you'll see terms like OEM, aftermarket, and pattern parts. OEM (Original
              Equipment Manufacturer) parts are made by the same company that supplied the car manufacturer —
              brands like Bosch, Brembo, MAHLE, and Denso. These are identical to what came with your car.
              Aftermarket parts are made by third-party manufacturers and can range from premium alternatives
              to budget options. For most drivers, mid-range aftermarket brands offer excellent value — you get
              90% of the quality at 50% of the price. Our comparison tool shows you parts across all tiers
              so you can make an informed choice.
            </p>

            <h3 className="text-lg font-bold text-gray-900 pt-2">Trusted UK Retailers</h3>
            <p>
              We compare prices from the UK's most popular car parts retailers including Amazon, eBay, Euro Car
              Parts, and GSF Car Parts. All retailers we list offer UK delivery, returns policies, and genuine
              branded parts. Whether you prefer buying from a marketplace like Amazon for Prime delivery, or a
              specialist like Euro Car Parts for expert fitment advice, you'll find the best price here.
            </p>

            <h3 className="text-lg font-bold text-gray-900 pt-2">Most Popular Car Parts Searches</h3>
            <p>
              The most commonly replaced car parts in the UK are brake pads, oil filters, air filters, wiper
              blades, spark plugs, and car batteries. These are all routine service items that wear out over
              time and need periodic replacement. Our <a href="/guides" className="text-blue-600 hover:underline">buying guides</a> cover
              each category in detail, explaining what to look for, which brands to trust, and when to replace them.
              For a full list of the 45 part categories we cover, <a href="/car-parts" className="text-blue-600 hover:underline">browse by make and model</a>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
