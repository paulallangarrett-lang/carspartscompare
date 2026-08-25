import { Inter } from 'next/font/google';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata = {
  title: 'Car Parts Compare UK — Find the Cheapest Car Parts',
  description: 'Compare car parts prices across Amazon, eBay and more. Enter your reg plate to find compatible parts at the best prices.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3599505006694500"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'CarPartsCompare',
            url: 'https://carpartscompare.uk',
            description: 'Compare car parts prices across Amazon, eBay and specialist UK retailers.',
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://carpartscompare.uk/vehicle/{search_term_string}',
              'query-input': 'required name=search_term_string',
            },
          }) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'CarPartsCompare',
            url: 'https://carpartscompare.uk',
            description: 'UK car parts price comparison. Compare prices from Amazon, eBay and specialist retailers.',
          }) }}
        />
      </head>
      <body className="bg-gray-50 min-h-screen flex flex-col font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
