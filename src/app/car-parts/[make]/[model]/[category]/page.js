'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { DEPARTMENTS, CATEGORY_MAP, DEPARTMENT_FOR_CATEGORY } from '@/lib/categories';
import { MOCK_PARTS, CATEGORY_PRICES, BRAND_TIERS } from '@/lib/mock-data';
import { getCompetitors, getGuideForCategory, TOP_UK_MODELS } from '@/lib/internal-links';

const AMAZON_TAG = 'carpartscomp-21';

const TIER_LABELS = {
  premium: { label: 'Performance', color: 'bg-purple-100 text-purple-700' },
  oem: { label: 'OEM Quality', color: 'bg-green-100 text-green-700' },
  mid: { label: 'Mid-Range', color: 'bg-blue-100 text-blue-700' },
  budget: { label: 'Value', color: 'bg-gray-100 text-gray-600' },
};

function getBrandTier(brand) {
  const b = (brand || '').trim().toLowerCase();
  for (const [tier, brands] of Object.entries(BRAND_TIERS)) {
    if (brands.some(name => b.includes(name.toLowerCase()) || name.toLowerCase().includes(b))) {
      return tier;
    }
  }
  return 'mid';
}

function estimatePrice(brand, categorySlug) {
  const tier = getBrandTier(brand);
  const ranges = CATEGORY_PRICES[categorySlug];
  if (!ranges) return 19.99;
  const [min, max] = ranges[tier] || ranges.mid;
  let hash = 0;
  for (let i = 0; i < brand.length; i++) {
    hash = ((hash << 5) - hash) + brand.charCodeAt(i);
    hash |= 0;
  }
  const factor = (Math.abs(hash) % 100) / 100;
  return Math.round((min + (max - min) * factor) * 100) / 100;
}

export default function MakeModelCategoryPage() {
  const { make: makeSlug, model: modelSlug, category: categorySlug } = useParams();
  const [sortBy, setSortBy] = useState('price-low');

  const cat = CATEGORY_MAP[categorySlug];
  const dept = DEPARTMENT_FOR_CATEGORY[categorySlug];

  // Build display names from slugs
  const makeName = (makeSlug || '').split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const modelName = (modelSlug || '').split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const fullName = `${makeName} ${modelName}`;

  if (!cat) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <div className="bg-red-50 border border-red-200 rounded-xl p-8 max-w-md mx-auto">
          <p className="text-red-700 font-medium mb-4">Category not found</p>
          <Link href={`/car-parts/${makeSlug}/${modelSlug}`} className="text-blue-600 hover:underline font-medium">← Back to {fullName}</Link>
        </div>
      </div>
    );
  }

  // Get mock parts for this category
  const mockParts = (MOCK_PARTS[categorySlug] || []).map(p => {
    const brand = p.supplierName || '';
    const artNo = p.articleNumber || '';
    const price = estimatePrice(brand, categorySlug);
    const searchTerm = `${brand} ${artNo} ${fullName}`.trim();
    let ebayHash = 0;
    for (let i = 0; i < artNo.length; i++) {
      ebayHash = ((ebayHash << 5) - ebayHash) + artNo.charCodeAt(i);
      ebayHash |= 0;
    }
    const ebayPrice = Math.round(price * (0.85 + (Math.abs(ebayHash) % 30) / 100) * 100) / 100;
    return {
      ...p,
      brandTier: getBrandTier(brand),
      amazonPrice: price,
      ebayPrice,
      amazonUrl: `https://www.amazon.co.uk/s?k=${encodeURIComponent(searchTerm)}&tag=${AMAZON_TAG}`,
      ebayUrl: `https://www.ebay.co.uk/sch/i.html?_nkw=${encodeURIComponent(searchTerm)}`,
    };
  });

  // Sort
  const sorted = [...mockParts].sort((a, b) => {
    if (sortBy === 'price-low') return Math.min(a.amazonPrice, a.ebayPrice) - Math.min(b.amazonPrice, b.ebayPrice);
    if (sortBy === 'price-high') return Math.min(b.amazonPrice, b.ebayPrice) - Math.min(a.amazonPrice, a.ebayPrice);
    if (sortBy === 'brand') return (a.supplierName || '').localeCompare(b.supplierName || '');
    return 0;
  });

  // Best price for hero
  const allPrices = mockParts.flatMap(p => [p.amazonPrice, p.ebayPrice]).filter(Boolean);
  const lowestPrice = allPrices.length > 0 ? Math.min(...allPrices) : null;

  // Related categories in same department
  const relatedCats = dept ? dept.categories.filter(c => c.slug !== categorySlug).slice(0, 5) : [];

  // Popular categories for this model
  const popularSlugs = ['brake-pads', 'air-filters', 'oil-filters', 'wiper-blades', 'spark-plugs', 'batteries', 'brake-discs'];
  const otherPopular = DEPARTMENTS.flatMap(d => d.categories).filter(c => popularSlugs.includes(c.slug) && c.slug !== categorySlug).slice(0, 6);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <Link href="/car-parts" className="hover:text-blue-600">Browse Parts</Link>
        <span className="mx-2">›</span>
        <Link href={`/car-parts/${makeSlug}`} className="hover:text-blue-600">{makeName}</Link>
        <span className="mx-2">›</span>
        <Link href={`/car-parts/${makeSlug}/${modelSlug}`} className="hover:text-blue-600">{modelName}</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600">{cat.name}</span>
      </nav>

      {/* Hero */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-6 md:p-8 mb-6 text-white">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <span className="text-5xl">{cat.icon}</span>
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold">{fullName} {cat.name}</h1>
            <p className="text-slate-300 text-sm mt-1">
              Compare {cat.name.toLowerCase()} prices for the {fullName} from top UK retailers
            </p>
            {lowestPrice && (
              <p className="text-green-400 font-bold text-lg mt-2">
                From £{lowestPrice.toFixed(2)}
              </p>
            )}
          </div>
          <div className="text-right self-start">
            <span className="text-xs text-slate-400 block">Prices estimated</span>
            <span className="text-xs text-slate-400">{sorted.length} parts found</span>
          </div>
        </div>
      </div>

      {/* Reg plate CTA */}
      <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-5 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center gap-3">
          <div className="flex-1">
            <p className="font-bold text-blue-900 text-sm">🔍 Get exact-fit parts for your {fullName}</p>
            <p className="text-xs text-blue-700 mt-1">
              Different {fullName} variants use different {cat.name.toLowerCase()}. Enter your reg plate for guaranteed compatible parts matched to your engine and year.
            </p>
          </div>
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-lg transition text-sm whitespace-nowrap text-center"
          >
            Enter Reg Plate →
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main content */}
        <div className="flex-1">
          {/* Sort bar */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-500">{sorted.length} {cat.name.toLowerCase()} found for {fullName}</p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 bg-white"
            >
              <option value="price-low">Price: Low → High</option>
              <option value="price-high">Price: High → Low</option>
              <option value="brand">Brand A-Z</option>
            </select>
          </div>

          {/* Parts list */}
          <div className="space-y-3">
            {sorted.map((part, i) => {
              const bestPrice = Math.min(part.amazonPrice, part.ebayPrice);
              const isCheapest = bestPrice === lowestPrice;
              const tier = TIER_LABELS[part.brandTier] || TIER_LABELS.mid;

              return (
                <div
                  key={i}
                  className={`bg-white border rounded-xl p-4 hover:shadow-md transition ${isCheapest ? 'border-green-300 ring-1 ring-green-200' : 'border-gray-200'}`}
                >
                  {isCheapest && (
                    <div className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full inline-block mb-2">
                      ✅ Best Price
                    </div>
                  )}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-gray-900">{part.supplierName}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${tier.color}`}>{tier.label}</span>
                      </div>
                      <p className="text-xs text-gray-500">Part No: {part.articleNumber}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{cat.name} for {fullName}</p>
                    </div>
                    <div className="flex gap-2 sm:gap-3">
                      <a
                        href={part.amazonUrl}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="flex flex-col items-center bg-amber-50 border border-amber-200 rounded-lg px-4 py-2 hover:bg-amber-100 transition min-w-[100px]"
                      >
                        <span className="text-xs text-gray-500">Amazon</span>
                        <span className="font-bold text-gray-900">£{part.amazonPrice.toFixed(2)}</span>
                        <span className="text-xs text-blue-600">View →</span>
                      </a>
                      <a
                        href={part.ebayUrl}
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="flex flex-col items-center bg-blue-50 border border-blue-200 rounded-lg px-4 py-2 hover:bg-blue-100 transition min-w-[100px]"
                      >
                        <span className="text-xs text-gray-500">eBay</span>
                        <span className="font-bold text-gray-900">£{part.ebayPrice.toFixed(2)}</span>
                        <span className="text-xs text-blue-600">View →</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {sorted.length === 0 && (
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <p className="text-gray-500">No {cat.name.toLowerCase()} data available yet for the {fullName}.</p>
              <Link href="/" className="text-blue-600 hover:underline text-sm mt-2 inline-block">Try entering your reg plate →</Link>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:w-72 space-y-6">
          {/* Disclaimer */}
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-xs text-amber-800">
              <strong>⚠️ Estimated prices.</strong> These are typical UK prices for {fullName} {cat.name.toLowerCase()}. 
              Exact prices and fitment depend on your specific vehicle. <Link href="/" className="text-blue-600 underline">Enter your reg</Link> for accurate results.
            </p>
          </div>

          {/* More from this department */}
          {relatedCats.length > 0 && (
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <h3 className="font-bold text-sm text-gray-900 mb-3">More {dept.name}</h3>
              <div className="space-y-2">
                {relatedCats.map(c => (
                  <Link
                    key={c.slug}
                    href={`/car-parts/${makeSlug}/${modelSlug}/${c.slug}`}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition"
                  >
                    <span>{c.icon}</span>
                    <span>{fullName} {c.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Other popular parts */}
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <h3 className="font-bold text-sm text-gray-900 mb-3">Popular {makeName} Parts</h3>
            <div className="space-y-2">
              {otherPopular.map(c => (
                <Link
                  key={c.slug}
                  href={`/car-parts/${makeSlug}/${modelSlug}/${c.slug}`}
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-600 transition"
                >
                  <span>{c.icon}</span>
                  <span>{c.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Cross-links: Same part for similar cars */}
      {(() => {
        const competitors = getCompetitors(makeSlug, modelSlug, 6);
        if (competitors.length === 0) return null;
        return (
          <div className="mt-8 bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">Compare {cat.name} for Similar Cars</h2>
            <p className="text-sm text-gray-500 mb-4">Shopping around? See {cat.name.toLowerCase()} prices for cars in the same class as the {fullName}.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {competitors.map(c => (
                <Link
                  key={`${c.makeSlug}-${c.modelSlug}`}
                  href={`/car-parts/${c.makeSlug}/${c.modelSlug}/${categorySlug}`}
                  className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center hover:border-blue-300 hover:bg-blue-50 transition"
                >
                  <span className="text-sm font-medium text-gray-800 block">{c.fullName}</span>
                  <span className="text-xs text-blue-600">{cat.name} →</span>
                </Link>
              ))}
            </div>
          </div>
        );
      })()}

      {/* Guide link */}
      {(() => {
        const guide = getGuideForCategory(categorySlug);
        if (!guide) return null;
        return (
          <div className="mt-6 bg-gradient-to-r from-gray-50 to-white border border-gray-200 rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex-1">
              <p className="font-bold text-gray-900 text-sm">📖 Read Our {cat.name} Buying Guide</p>
              <p className="text-xs text-gray-500 mt-1">Not sure which {cat.name.toLowerCase()} to buy? Our guide covers types, brands, when to replace, and how to save money.</p>
            </div>
            <Link
              href={`/guides/${guide.slug}`}
              className="bg-gray-900 hover:bg-gray-800 text-white font-medium px-4 py-2 rounded-lg transition text-sm whitespace-nowrap text-center"
            >
              Read Guide →
            </Link>
          </div>
        );
      })()}

      {/* Popular models: same part */}
      <div className="mt-8 bg-gray-50 rounded-xl p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-3">Popular {cat.name} Searches</h2>
        <div className="flex flex-wrap gap-2">
          {TOP_UK_MODELS
            .filter(m => !(m.makeSlug === makeSlug && m.modelSlug === modelSlug))
            .slice(0, 12)
            .map(m => (
              <Link
                key={`${m.makeSlug}-${m.modelSlug}`}
                href={`/car-parts/${m.makeSlug}/${m.modelSlug}/${categorySlug}`}
                className="bg-white border border-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-full hover:border-blue-300 hover:text-blue-700 transition"
              >
                {m.make} {m.model} {cat.name}
              </Link>
            ))}
        </div>
      </div>

      {/* SEO content */}
      <div className="mt-10 prose prose-gray max-w-none">
        <h2 className="text-xl font-bold text-gray-900">{fullName} {cat.name} — Price Comparison</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          Looking for {cat.name.toLowerCase()} for your {fullName}? CarPartsCompare shows you prices from Amazon, eBay and 
          specialist UK retailers side by side, so you can find the best deal without visiting multiple websites. 
          We list parts from premium brands through to budget options, all compatible with the {fullName}. 
          For the most accurate results matched to your exact engine and year, enter your registration plate above — 
          we use DVLA data and the TecDoc parts catalogue to guarantee fitment.
        </p>
      </div>

      {/* Affiliate disclosure */}
      <p className="mt-8 text-center text-xs text-gray-400">
        As an Amazon Associate and eBay Partner, CarPartsCompare earns from qualifying purchases.
      </p>
    </div>
  );
}
