'use client';
import RegPlateInput from '@/components/RegPlateInput';

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
  { name: 'Air Filters', icon: '🌬️', slug: 'air-filters', desc: 'Keep your engine breathing clean' },
  { name: 'Oil Filters', icon: '🛢️', slug: 'oil-filters', desc: 'Protect your engine from contaminants' },
  { name: 'Brake Pads', icon: '🛞', slug: 'brake-pads', desc: 'Essential for safe stopping' },
  { name: 'Wiper Blades', icon: '🌧️', slug: 'wiper-blades', desc: 'Clear vision in all weather' },
  { name: 'Spark Plugs', icon: '⚡', slug: 'spark-plugs', desc: 'Keep your engine running smooth' },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-3xl mx-auto px-4 py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Compare Car Parts Prices<br />
            <span className="text-blue-400">Across the UK</span>
          </h1>
          <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
            Enter your registration plate to find compatible parts and compare prices from Amazon, eBay and specialist retailers.
          </p>
          <RegPlateInput />
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-white border-b border-gray-100 py-6">
        <div className="max-w-5xl mx-auto px-4 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-lg">✓</span> DVLA verified data
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-lg">✓</span> 698 manufacturers
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-lg">✓</span> Amazon &amp; eBay prices
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-500 text-lg">✓</span> 100% free to use
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center mb-12 text-gray-800">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { step: '1', title: 'Enter Your Reg', desc: 'Type your registration plate and we instantly identify your exact vehicle, engine size and fuel type.', color: 'bg-blue-600' },
            { step: '2', title: 'Choose a Part', desc: 'Browse compatible parts guaranteed to fit your specific vehicle — no guesswork needed.', color: 'bg-blue-600' },
            { step: '3', title: 'Compare & Save', desc: 'See prices from Amazon, eBay and specialist retailers side by side. Click to buy.', color: 'bg-blue-600' },
          ].map((item, i) => (
            <div key={item.step} className="text-center">
              <div className={`w-14 h-14 ${item.color} text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-5 shadow-lg`}>
                {item.step}
              </div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Part types */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-3 text-gray-800">Popular Part Categories</h2>
          <p className="text-gray-500 text-center mb-10">We cover the most commonly replaced car parts</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PART_TYPES.map((pt) => (
              <div key={pt.slug} className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md hover:border-blue-300 transition">
                <span className="text-2xl mb-2 block">{pt.icon}</span>
                <h3 className="font-semibold text-gray-800">{pt.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{pt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular makes */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-3 text-gray-800">Browse by Manufacturer</h2>
          <p className="text-gray-500 text-center mb-10">Or search directly by your car make</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
            {POPULAR_MAKES.map((make) => (
              <a
                key={make.slug}
                href={`/car-parts/${make.slug}`}
                className="bg-white border border-gray-200 rounded-lg py-4 text-center hover:border-blue-400 hover:shadow-sm transition"
              >
                <span className="font-medium text-gray-700 text-sm">{make.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Popular searches — direct links to high-volume category pages */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-3 text-gray-800">Popular Parts Searches</h2>
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
                className="bg-white border border-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-full hover:border-blue-300 hover:text-blue-700 transition"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="text-center mt-6">
            <a href="/car-parts" className="text-blue-600 font-medium text-sm hover:underline">Browse all makes and models →</a>
          </div>
        </div>
      </section>

      {/* Buying guides */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-3 text-gray-800">Expert Buying Guides</h2>
          <p className="text-gray-500 text-center mb-8">Not sure what to buy? Our guides help you choose the right parts and save money.</p>
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
                className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md hover:border-blue-300 transition block"
              >
                <span className="text-2xl mb-2 block">{guide.icon}</span>
                <h3 className="font-semibold text-gray-800">{guide.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{guide.desc}</p>
                <span className="text-xs text-blue-600 mt-2 block">Read guide →</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
