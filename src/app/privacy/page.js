import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy — CarPartsCompare.co.uk',
  description: 'Privacy policy for CarPartsCompare.co.uk, explaining how we collect and use your data.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <nav className="text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600">Privacy Policy</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
      <p className="text-sm text-gray-400 mb-8">Last updated: February 2026</p>

      <div className="prose prose-gray max-w-none space-y-4 text-gray-600 leading-relaxed">
        <p>
          CarPartsCompare.co.uk (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting your privacy. 
          This policy explains how we collect, use, and protect your information when you use our website.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Information We Collect</h2>
        <p>
          <strong>Vehicle registration plates:</strong> When you search for car parts, you enter a 
          registration plate which we send to the DVLA Vehicle Enquiry Service to identify your vehicle. 
          We do not permanently store your registration plate or link it to any personal information.
        </p>
        <p>
          <strong>Usage data:</strong> We collect anonymous usage data including pages visited, search 
          queries, and referral sources to improve our service. This data cannot be used to identify you personally.
        </p>
        <p>
          <strong>Cookies:</strong> We use essential cookies to make the website function properly. 
          We may also use analytics cookies (such as Google Analytics) to understand how visitors use our site. 
          You can control cookie preferences through your browser settings.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">How We Use Your Information</h2>
        <p>We use the information we collect to:</p>
        <p>
          Identify your vehicle and show compatible parts. Improve our website and service. 
          Analyse usage patterns to provide a better experience. Display relevant advertising 
          through third-party ad networks.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Third-Party Services</h2>
        <p>
          <strong>DVLA Vehicle Enquiry Service:</strong> We query the DVLA API with your registration 
          plate to retrieve vehicle details. This is a UK government service and is subject to their 
          own privacy policy.
        </p>
        <p>
          <strong>Amazon Associates &amp; eBay Partner Network:</strong> When you click through to 
          Amazon or eBay, those platforms may set their own cookies for affiliate tracking purposes. 
          These are subject to Amazon&apos;s and eBay&apos;s respective privacy policies.
        </p>
        <p>
          <strong>Google AdSense:</strong> We may display advertisements served by Google. Google 
          may use cookies and web beacons to serve ads based on your prior visits to this and other 
          websites. You can opt out of personalised advertising by visiting Google&apos;s Ads Settings.
        </p>
        <p>
          <strong>Google Analytics:</strong> We may use Google Analytics to track and report website 
          traffic. Google Analytics collects data about your use of our website through cookies. 
          You can opt out by installing the Google Analytics Opt-out Browser Add-on.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Data Retention</h2>
        <p>
          We do not store personal data. Vehicle lookups are processed in real-time and are not 
          permanently recorded against any identifying information. Anonymous usage analytics are 
          retained for up to 26 months.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Your Rights</h2>
        <p>
          Under UK GDPR, you have the right to access, correct, or delete any personal data we hold 
          about you. As we do not collect or store personal data, there is typically nothing to request. 
          If you have any concerns, please contact us.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. Any changes will be posted on this page 
          with an updated revision date.
        </p>

        <h2 className="text-xl font-bold text-gray-800 mt-8 mb-3">Contact</h2>
        <p>
          If you have questions about this privacy policy, contact us at{' '}
          <a href="mailto:hello@carpartscompare.co.uk" className="text-blue-600 hover:underline">hello@carpartscompare.co.uk</a>.
        </p>
      </div>
    </div>
  );
}
