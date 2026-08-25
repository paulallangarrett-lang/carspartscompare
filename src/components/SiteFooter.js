export default function SiteFooter() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-10 text-sm">
          <div>
            <a href="/" className="flex items-center gap-2.5 mb-3">
              <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                <svg className="w-4.5 h-4.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.25}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35m2.35-5.15a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" />
                </svg>
              </span>
              <span className="text-white font-bold">CarPartsCompare</span>
            </a>
            <p className="leading-relaxed text-slate-400">
              Compare car parts prices across Amazon, eBay and specialist UK retailers. Find the right part for your vehicle at the best price.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-wider">Popular Makes</h4>
            <div className="space-y-2.5">
              <a href="/car-parts/ford" className="block hover:text-white transition-colors">Ford Parts</a>
              <a href="/car-parts/vauxhall" className="block hover:text-white transition-colors">Vauxhall Parts</a>
              <a href="/car-parts/volkswagen" className="block hover:text-white transition-colors">Volkswagen Parts</a>
              <a href="/car-parts/bmw" className="block hover:text-white transition-colors">BMW Parts</a>
              <a href="/car-parts/audi" className="block hover:text-white transition-colors">Audi Parts</a>
              <a href="/car-parts/toyota" className="block hover:text-white transition-colors">Toyota Parts</a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-wider">Buying Guides</h4>
            <div className="space-y-2.5">
              <a href="/guides/brake-pads" className="block hover:text-white transition-colors">Brake Pads Guide</a>
              <a href="/guides/oil-filters" className="block hover:text-white transition-colors">Oil Filters Guide</a>
              <a href="/guides/car-batteries" className="block hover:text-white transition-colors">Car Batteries Guide</a>
              <a href="/guides/wiper-blades" className="block hover:text-white transition-colors">Wiper Blades Guide</a>
              <a href="/guides/when-to-replace-parts" className="block hover:text-white transition-colors">Replacement Intervals</a>
              <a href="/guides/saving-money-car-parts" className="block hover:text-white transition-colors">Save Money on Parts</a>
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-wider">Information</h4>
            <div className="space-y-2.5">
              <a href="/about" className="block hover:text-white transition-colors">About Us</a>
              <a href="/privacy" className="block hover:text-white transition-colors">Privacy Policy</a>
              <a href="/terms" className="block hover:text-white transition-colors">Terms of Use</a>
              <a href="/affiliate-disclosure" className="block hover:text-white transition-colors">Affiliate Disclosure</a>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} CarPartsCompare.uk — All rights reserved.</p>
          <p>
            As an <a href="/affiliate-disclosure" className="underline hover:text-slate-300">Amazon Associate and eBay Partner</a>, we earn from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  );
}
