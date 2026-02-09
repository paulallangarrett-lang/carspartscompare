import './globals.css';

export const metadata = {
  title: 'Car Parts Compare UK — Find the Cheapest Car Parts',
  description: 'Compare car parts prices across Amazon, eBay and more. Enter your reg plate to find compatible parts at the best prices.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3599505006694500"
          crossOrigin="anonymous"
        />
      </head>
      <body className="bg-gray-50 min-h-screen flex flex-col">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <a href="/" className="flex items-center gap-1.5">
              <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <span className="text-xl font-bold text-gray-800">CarParts</span>
              <span className="text-xl font-light text-blue-600">Compare</span>
            </a>
            <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
              <a href="/" className="hover:text-blue-600 transition">Home</a>
              <a href="/car-parts" className="hover:text-blue-600 transition">Browse Parts</a>
              <a href="/guides" className="hover:text-blue-600 transition">Guides</a>
              <a href="/about" className="hover:text-blue-600 transition">About</a>
            </nav>
          </div>
        </header>
        <main className="flex-1">{children}</main>
        <footer className="bg-gray-900 text-gray-400">
          <div className="max-w-6xl mx-auto px-4 py-10">
            <div className="grid md:grid-cols-4 gap-8 text-sm">
              <div>
                <h4 className="text-white font-semibold mb-3">CarPartsCompare</h4>
                <p className="leading-relaxed">Compare car parts prices across Amazon, eBay and specialist UK retailers. Find the right part for your vehicle at the best price.</p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">Popular Makes</h4>
                <div className="space-y-2">
                  <a href="/car-parts/ford" className="block hover:text-white transition">Ford Parts</a>
                  <a href="/car-parts/vauxhall" className="block hover:text-white transition">Vauxhall Parts</a>
                  <a href="/car-parts/volkswagen" className="block hover:text-white transition">Volkswagen Parts</a>
                  <a href="/car-parts/bmw" className="block hover:text-white transition">BMW Parts</a>
                  <a href="/car-parts/audi" className="block hover:text-white transition">Audi Parts</a>
                  <a href="/car-parts/toyota" className="block hover:text-white transition">Toyota Parts</a>
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">Buying Guides</h4>
                <div className="space-y-2">
                  <a href="/guides/brake-pads" className="block hover:text-white transition">Brake Pads Guide</a>
                  <a href="/guides/oil-filters" className="block hover:text-white transition">Oil Filters Guide</a>
                  <a href="/guides/car-batteries" className="block hover:text-white transition">Car Batteries Guide</a>
                  <a href="/guides/wiper-blades" className="block hover:text-white transition">Wiper Blades Guide</a>
                  <a href="/guides/when-to-replace-parts" className="block hover:text-white transition">Replacement Intervals</a>
                  <a href="/guides/saving-money-car-parts" className="block hover:text-white transition">Save Money on Parts</a>
                </div>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-3">Information</h4>
                <div className="space-y-2">
                  <a href="/about" className="block hover:text-white transition">About Us</a>
                  <a href="/privacy" className="block hover:text-white transition">Privacy Policy</a>
                  <a href="/terms" className="block hover:text-white transition">Terms of Use</a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-6 text-xs text-gray-500">
              <p>&copy; {new Date().getFullYear()} CarPartsCompare.uk — As an Amazon Associate and eBay Partner, we earn from qualifying purchases.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
