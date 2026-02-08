import Link from 'next/link';

export const metadata = {
  title: 'About Us — CarPartsCompare.co.uk',
  description: 'Learn about CarPartsCompare, the UK car parts price comparison website helping drivers find the best deals on car parts.',
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600">About</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">About CarPartsCompare</h1>

      <div className="prose prose-gray max-w-none space-y-4 text-gray-600 leading-relaxed">
        <p>
          CarPartsCompare.co.uk is a free car parts price comparison website built for UK drivers. 
          We help you find the right parts for your vehicle at the best prices, comparing across 
          Amazon, eBay, and specialist UK car parts retailers.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">How It Works</h2>
        <p>
          Simply enter your vehicle registration plate and we instantly identify your exact car — 
          make, model, year, engine size, and fuel type — using official DVLA data. We then cross-reference 
          this with our parts database covering 698 manufacturers to show you every compatible part 
          from trusted brands like Bosch, MANN-FILTER, MAHLE, K&N Filters, and many more.
        </p>
        <p>
          For each compatible part, we search major UK retailers to find you the best available price. 
          Click through to buy directly from the retailer of your choice — we never hold your payment 
          details or act as a middleman.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Our Data</h2>
        <p>
          Our vehicle and parts compatibility data is sourced from TecDoc, the automotive industry&apos;s 
          leading parts catalogue used by professional mechanics and parts retailers across Europe. 
          This means the parts we show you are verified as compatible with your specific vehicle — 
          not just a generic fit for your car model, but for your exact engine variant.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Part Categories</h2>
        <p>
          We currently cover the most commonly replaced car parts including air filters, oil filters, 
          brake pads, wiper blades, and spark plugs. We&apos;re continuously expanding our coverage to 
          include cabin filters, brake discs, clutch kits, timing belts, batteries, and more.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Affiliate Disclosure</h2>
        <p>
          CarPartsCompare.co.uk is a participant in the Amazon Associates Programme and the eBay Partner 
          Network. When you click through to a retailer and make a purchase, we may earn a small 
          commission at no extra cost to you. This is how we keep the site free to use.
        </p>
        <p>
          Our comparison results are not influenced by affiliate relationships. We show all compatible 
          parts regardless of whether we earn a commission from the retailer.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Contact</h2>
        <p>
          Have a question, suggestion, or found an issue? We&apos;d love to hear from you. 
          Email us at <a href="mailto:hello@carpartscompare.co.uk" className="text-blue-600 hover:underline">hello@carpartscompare.co.uk</a>.
        </p>
      </div>
    </div>
  );
}
