import Link from 'next/link';

export const metadata = {
  title: 'Terms of Use — CarPartsCompare.co.uk',
  description: 'Terms and conditions for using CarPartsCompare.co.uk.',
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600">Terms of Use</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">Terms of Use</h1>
      <p className="text-sm text-gray-400 mb-8">Last updated: February 2026</p>

      <div className="prose prose-gray max-w-none space-y-4 text-gray-600 leading-relaxed">
        <p>
          By using CarPartsCompare.co.uk (&quot;the website&quot;), you agree to be bound by these terms 
          and conditions. If you do not agree with any part of these terms, please do not use the website.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">About Our Service</h2>
        <p>
          CarPartsCompare.co.uk is a price comparison website that helps UK drivers find compatible 
          car parts and compare prices across multiple retailers. We do not sell car parts directly — 
          we provide links to third-party retailers where you can make your purchase.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Accuracy of Information</h2>
        <p>
          While we strive to ensure that all vehicle compatibility data and pricing information is 
          accurate and up to date, we cannot guarantee that all information on the website is 
          complete, current, or error-free.
        </p>
        <p>
          Vehicle compatibility data is sourced from industry databases and is intended as a guide. 
          We strongly recommend verifying part compatibility with the retailer or a qualified mechanic 
          before purchasing. Always check the part number matches what is required for your specific vehicle.
        </p>
        <p>
          Prices displayed are sourced from third-party retailers and may change at any time. 
          The actual price you pay will be determined by the retailer at the point of purchase.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Third-Party Retailers</h2>
        <p>
          When you click through to a retailer, you leave CarPartsCompare.co.uk and are subject to 
          that retailer&apos;s own terms, conditions, and privacy policy. We are not responsible for 
          the products, services, or policies of any third-party retailer.
        </p>
        <p>
          Any transaction you make with a third-party retailer is solely between you and that retailer. 
          We are not a party to any such transaction and have no liability in connection with it.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Affiliate Relationships</h2>
        <p>
          CarPartsCompare.co.uk participates in affiliate programmes including the Amazon Associates 
          Programme and the eBay Partner Network. This means we may earn a commission when you click 
          through to a retailer and make a purchase, at no additional cost to you.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Limitation of Liability</h2>
        <p>
          CarPartsCompare.co.uk is provided on an &quot;as is&quot; basis. To the fullest extent permitted 
          by law, we exclude all warranties, representations, and guarantees, whether express or implied.
        </p>
        <p>
          We shall not be liable for any direct, indirect, incidental, or consequential damages 
          arising from your use of the website or any information provided on it, including but not 
          limited to damages arising from incorrect part compatibility information or pricing errors.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Intellectual Property</h2>
        <p>
          All content on this website, including text, design, and code, is the property of 
          CarPartsCompare.co.uk unless otherwise stated. Part numbers, brand names, and product 
          images belong to their respective owners.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Changes to These Terms</h2>
        <p>
          We reserve the right to modify these terms at any time. Changes will be effective immediately 
          upon posting to this page. Your continued use of the website following any changes constitutes 
          acceptance of the revised terms.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Governing Law</h2>
        <p>
          These terms are governed by and construed in accordance with the laws of England and Wales. 
          Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the 
          courts of England and Wales.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Contact</h2>
        <p>
          If you have questions about these terms, contact us at{' '}
          <a href="mailto:hello@carpartscompare.co.uk" className="text-blue-600 hover:underline">hello@carpartscompare.co.uk</a>.
        </p>
      </div>
    </div>
  );
}
