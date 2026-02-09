import Link from 'next/link';

export const metadata = {
  title: 'Car Parts Buying Guides — Expert Advice | CarPartsCompare UK',
  description: 'Expert buying guides to help you choose the right car parts. Learn about brake pads, oil filters, batteries, wiper blades and more. Save money on your next car repair.',
};

const GUIDES = [
  {
    slug: 'brake-pads',
    title: 'How to Choose the Right Brake Pads',
    description: 'Ceramic vs organic vs semi-metallic — understand the differences and find the best brake pads for your driving style and budget.',
    icon: '🛞',
    readTime: '6 min read',
  },
  {
    slug: 'oil-filters',
    title: 'Oil Filter Buying Guide: What You Need to Know',
    description: 'Why oil filter quality matters, how often to change yours, and what to look for when comparing brands and prices.',
    icon: '🛢️',
    readTime: '5 min read',
  },
  {
    slug: 'car-batteries',
    title: 'Car Battery Buying Guide for UK Drivers',
    description: 'CCA ratings, battery sizes, AGM vs EFB — everything you need to know before buying a replacement car battery.',
    icon: '🔋',
    readTime: '7 min read',
  },
  {
    slug: 'wiper-blades',
    title: 'Best Wiper Blades: A Complete Guide',
    description: 'Conventional vs flat blades, sizing, brands, and how to get the best value on replacement wiper blades in the UK.',
    icon: '🌧️',
    readTime: '5 min read',
  },
  {
    slug: 'when-to-replace-parts',
    title: 'When to Replace Common Car Parts',
    description: 'A practical guide to service intervals and warning signs — know when your brake pads, filters, belts and other parts need changing.',
    icon: '🔧',
    readTime: '8 min read',
  },
  {
    slug: 'saving-money-car-parts',
    title: 'How to Save Money on Car Parts in the UK',
    description: 'Smart strategies for comparing prices, understanding brand tiers, and knowing when OEM quality matters vs when budget parts are fine.',
    icon: '💰',
    readTime: '6 min read',
  },
];

export default function GuidesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600">Buying Guides</span>
      </nav>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">Car Parts Buying Guides</h1>
      <p className="text-gray-500 mb-10">
        Expert advice to help you choose the right parts and save money on your next car repair or service.
      </p>

      <div className="space-y-4">
        {GUIDES.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="group block bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition"
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl mt-1">{guide.icon}</span>
              <div className="flex-1">
                <h2 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition">{guide.title}</h2>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">{guide.description}</p>
                <span className="text-xs text-blue-600 mt-2 inline-block">{guide.readTime} · Read guide →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
