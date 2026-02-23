// src/app/affiliate-disclosure/page.js
import Link from 'next/link';

export const metadata = {
  title: 'Affiliate Disclosure — CarPartsCompare.uk',
  description: 'CarPartsCompare.uk affiliate disclosure. We earn commissions from purchases made through our links to eBay, Amazon and other retailers.',
};

export default function AffiliateDisclosure() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-1">›</span>
        <span>Affiliate Disclosure</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-6">Affiliate Disclosure</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: February 2026</p>

      <div className="prose prose-gray max-w-none space-y-6">
        <p>
          CarPartsCompare.uk is a free price comparison service. We help UK drivers find 
          compatible car parts and compare prices across multiple retailers. <strong>We do not 
          sell car parts directly.</strong>
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">How We Earn Revenue</h2>
        <p>
          CarPartsCompare.uk participates in affiliate advertising programmes designed to provide 
          a means for websites to earn advertising fees by linking to retail websites. When you 
          click a link on our site and make a purchase from one of our partner retailers, we may 
          earn a small commission at no additional cost to you.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Our Affiliate Partners</h2>
        
        <h3 className="text-lg font-medium text-gray-800 mt-6 mb-2">eBay Partner Network</h3>
        <p>
          CarPartsCompare.uk is a member of the eBay Partner Network. When you click through to 
          eBay from our site and make a purchase, we may earn a commission from eBay. eBay prices 
          shown on our site are sourced via the eBay Browse API and represent real listings 
          available at the time of display. Prices may change at any time — the final price is 
          always determined by the eBay seller at the point of purchase. CarPartsCompare.uk is 
          an independent price comparison website and is not owned by, operated by, or affiliated 
          with eBay Inc. beyond our participation in their affiliate programme.
        </p>

        <h3 className="text-lg font-medium text-gray-800 mt-6 mb-2">Amazon Associates</h3>
        <p>
          CarPartsCompare.uk is a participant in the Amazon Associates Programme, an affiliate 
          advertising programme designed to provide a means for sites to earn advertising fees 
          by advertising and linking to amazon.co.uk. Amazon prices shown on our site are 
          estimates and may not reflect current pricing — always check the price on Amazon 
          before purchasing.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">How This Affects You</h2>
        <p>
          Our affiliate relationships do not affect the price you pay. You will never pay more 
          for a product because you clicked through from CarPartsCompare.uk. Our commission is 
          paid by the retailer, not by you.
        </p>
        <p>
          We strive to present accurate, unbiased price comparisons. Our affiliate relationships 
          do not influence how we rank or display products. Parts are listed based on compatibility 
          with your vehicle and sorted by price to help you find the best deal.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Editorial Independence</h2>
        <p>
          All buying guides, product recommendations, and editorial content on CarPartsCompare.uk 
          are written independently. Our content is not reviewed or influenced by any retailer or 
          affiliate partner. We recommend products based on quality, value, and suitability for 
          your vehicle.
        </p>

        <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Questions</h2>
        <p>
          If you have any questions about our affiliate relationships, please contact us 
          at{' '}
          <a href="mailto:hello@carpartscompare.co.uk" className="text-blue-600 hover:underline">
            hello@carpartscompare.co.uk
          </a>.
        </p>
      </div>
    </main>
  );
}
