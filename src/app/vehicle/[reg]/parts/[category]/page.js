'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { CATEGORY_MAP, DEPARTMENT_FOR_CATEGORY } from '@/lib/categories';

const TIER_LABELS = {
  premium: { label: 'Performance', color: 'bg-purple-100 text-purple-700' },
  oem: { label: 'OEM Quality', color: 'bg-green-100 text-green-700' },
  mid: { label: 'Mid-Range', color: 'bg-blue-100 text-blue-700' },
  budget: { label: 'Value', color: 'bg-gray-100 text-gray-600' },
};

export default function PartsPage() {
  const { reg, category } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [sortBy, setSortBy] = useState('price-low');
  const [priceSource, setPriceSource] = useState('estimated');
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [brandDropdownOpen, setBrandDropdownOpen] = useState(false);

  const cat = CATEGORY_MAP[category];
  const dept = DEPARTMENT_FOR_CATEGORY[category];

  useEffect(() => {
    async function load() {
      try {
        const vRes = await fetch(`/api/lookup?reg=${reg}`);
        const vData = await vRes.json();
        if (vData.error) { setError(vData.error); setLoading(false); return; }
        if (!vData.model && typeof window !== 'undefined') {
          const storedModel = sessionStorage.getItem(`vehicle_model_${reg.toUpperCase()}`);
          if (storedModel) vData.model = storedModel;
        }
        setVehicle(vData);

        const pRes = await fetch(`/api/parts?reg=${reg}&category=${category}`);
        const pData = await pRes.json();
        if (pData.error) { setError(pData.error); setLoading(false); return; }
        setParts(pData.parts || []);
        setPriceSource(pData.priceSource || 'estimated');
      } catch (err) {
        setError('Failed to load parts');
      }
      setLoading(false);
    }
    load();
  }, [reg, category]);

  // Get unique brands sorted alphabetically
  const allBrands = [...new Set(parts.map(p => p.supplierName).filter(Boolean))].sort((a, b) => a.localeCompare(b));

  // Filter by selected brands
  const filteredParts = selectedBrands.length > 0
    ? parts.filter(p => selectedBrands.includes(p.supplierName))
    : parts;

  const sortedParts = [...filteredParts].sort((a, b) => {
    if (sortBy === 'price-low') return (a.amazonPrice || 999) - (b.amazonPrice || 999);
    if (sortBy === 'price-high') return (b.amazonPrice || 0) - (a.amazonPrice || 0);
    if (sortBy === 'brand') return (a.supplierName || '').localeCompare(b.supplierName || '');
    return 0;
  });

  const cheapestPrice = filteredParts.length > 0 ? Math.min(...filteredParts.map(p => p.amazonPrice || 999)) : null;
  const hasLivePrices = filteredParts.some(p => p.priceType === 'live');

  if (loading) return (
    <div className="max-w-6xl mx-auto px-4 py-20 text-center">
      <svg className="animate-spin h-10 w-10 text-blue-600 mx-auto mb-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
      <p className="text-gray-500 text-lg">Finding compatible {cat?.name || 'parts'}...</p>
    </div>
  );

  if (error) return (
    <div className="max-w-6xl mx-auto px-4 py-20 text-center">
      <div className="bg-red-50 border border-red-200 rounded-xl p-8 max-w-md mx-auto">
        <p className="text-red-700 font-medium mb-4">{error}</p>
        <Link href={`/vehicle/${reg}`} className="text-blue-600 hover:underline font-medium">← Back to vehicle</Link>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <Link href={`/vehicle/${reg}`} className="hover:text-blue-600">{vehicle?.make} {vehicle?.model}</Link>
        <span className="mx-2">›</span>
        {dept && <><Link href={`/vehicle/${reg}`} className="hover:text-blue-600">{dept.name}</Link><span className="mx-2">›</span></>}
        <span className="text-gray-600">{cat?.name}</span>
      </nav>

      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            {cat?.icon} {cat?.name}
          </h1>
          <p className="text-gray-500 mt-1">
            for <span className="font-medium text-gray-700">{vehicle?.make} {vehicle?.model}</span> ({vehicle?.yearOfManufacture}) • {vehicle?.engineCapacity}cc {vehicle?.fuelType}
          </p>
        </div>
        <Link href={`/vehicle/${reg}`} className="text-sm text-blue-600 hover:underline hidden md:block">← All categories</Link>
      </div>

      {/* Results count + sort */}
      <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-3 mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
        <p className="text-sm text-blue-800">
          <span className="font-bold">{filteredParts.length}</span>{selectedBrands.length > 0 ? ` of ${parts.length}` : ''} compatible parts found from <span className="font-bold">{new Set(filteredParts.map(p => p.supplierName)).size}</span> brands
          {cheapestPrice && cheapestPrice < 999 && <span> • From <span className="font-bold text-green-700">£{cheapestPrice.toFixed(2)}</span></span>}
          {hasLivePrices && (
            <span className="inline-flex items-center gap-1 ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              Live eBay prices
            </span>
          )}
        </p>
        <div className="flex items-center gap-2">
          {/* Brand filter dropdown */}
          <div className="relative">
            <button
              onClick={() => setBrandDropdownOpen(!brandDropdownOpen)}
              className="text-sm bg-white border border-blue-200 rounded-md px-2 py-1 text-gray-700 flex items-center gap-1 hover:bg-gray-50 transition"
            >
              Brands{selectedBrands.length > 0 && <span className="bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">{selectedBrands.length}</span>}
              <svg className={`w-3.5 h-3.5 transition-transform ${brandDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </button>
            {brandDropdownOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setBrandDropdownOpen(false)} />
                <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 w-64 max-h-80 overflow-hidden flex flex-col">
                  {/* Header */}
                  <div className="px-3 py-2 border-b border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-gray-700">Filter by brand ({allBrands.length})</span>
                    {selectedBrands.length > 0 && (
                      <button onClick={() => setSelectedBrands([])} className="text-xs text-blue-600 hover:underline">Clear all</button>
                    )}
                  </div>
                  {/* Brand list */}
                  <div className="overflow-y-auto flex-1 p-1">
                    {allBrands.map(brand => (
                      <label
                        key={brand}
                        className="flex items-center gap-2 px-2 py-1.5 rounded hover:bg-blue-50 cursor-pointer text-sm"
                      >
                        <input
                          type="checkbox"
                          checked={selectedBrands.includes(brand)}
                          onChange={() => {
                            setSelectedBrands(prev =>
                              prev.includes(brand)
                                ? prev.filter(b => b !== brand)
                                : [...prev, brand]
                            );
                          }}
                          className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span className="truncate text-gray-700">{brand}</span>
                      </label>
                    ))}
                  </div>
                  {/* Apply */}
                  <div className="px-3 py-2 border-t border-gray-100 bg-gray-50">
                    <button
                      onClick={() => setBrandDropdownOpen(false)}
                      className="w-full text-xs bg-blue-600 text-white rounded-md py-1.5 hover:bg-blue-700 transition font-medium"
                    >
                      Show {filteredParts.length} parts
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="text-sm bg-white border border-blue-200 rounded-md px-2 py-1 text-gray-700"
          >
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="brand">Brand A-Z</option>
          </select>
        </div>
      </div>

      {/* Parts grid + sidebar */}
      <div className="flex gap-6">
        {/* Main parts list */}
        <div className="flex-1 min-w-0">
          {sortedParts.length > 0 ? (
            <div className="space-y-3">
              {sortedParts.map((part, i) => {
                const isCheapest = part.amazonPrice === cheapestPrice && sortBy === 'price-low' && i === 0;
                const tier = TIER_LABELS[part.brandTier] || TIER_LABELS.mid;
                const cheaperStore = part.amazonPrice <= part.ebayPrice ? 'amazon' : 'ebay';
                const isLive = part.priceType === 'live';

                return (
                  <div key={part.articleId || i} className={`bg-white rounded-xl border ${isCheapest ? 'border-green-300 ring-1 ring-green-200' : 'border-gray-200'} p-4 md:p-5 hover:shadow-md transition relative`}>
                    {isCheapest && (
                      <span className="absolute -top-2.5 left-4 bg-green-600 text-white text-xs font-bold px-2.5 py-0.5 rounded-full">
                        ★ Best Price
                      </span>
                    )}
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
                        {part.imageUrl ? (
                          <img src={part.imageUrl} alt={`${part.supplierName} ${part.articleNumber}`} className="w-14 h-14 object-contain" />
                        ) : (
                          <span className="text-2xl">{cat?.icon}</span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <span className="font-bold text-gray-800">{part.supplierName}</span>
                          <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded font-mono">{part.articleNumber}</span>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${tier.color}`}>{tier.label}</span>
                          {isLive && (
                            <span className="text-xs px-1.5 py-0.5 rounded bg-green-50 text-green-600 font-medium">✓ Live</span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500">{part.productName}</p>
                      </div>
                      <div className="flex gap-2 flex-shrink-0">
                        <a
                          href={part.amazonUrl}
                          target="_blank"
                          rel="nofollow noopener"
                          className={`inline-flex flex-col items-center bg-[#FF9900] hover:bg-[#e88b00] text-white text-sm font-semibold px-4 py-2 rounded-lg transition shadow-sm min-w-[90px] ${cheaperStore === 'amazon' ? 'ring-2 ring-green-400' : ''}`}
                        >
                          {part.amazonPrice && <span className="text-base font-bold">£{part.amazonPrice.toFixed(2)}</span>}
                          <span className="flex items-center gap-1 text-xs">
                            Amazon
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                          </span>
                        </a>
                        <a
                          href={part.ebayUrl}
                          target="_blank"
                          rel="nofollow noopener"
                          className={`inline-flex flex-col items-center bg-[#0064D2] hover:bg-[#0050aa] text-white text-sm font-semibold px-4 py-2 rounded-lg transition shadow-sm min-w-[90px] ${cheaperStore === 'ebay' ? 'ring-2 ring-green-400' : ''}`}
                        >
                          {part.ebayPrice && (
                            <span className="text-base font-bold">
                              {isLive && <span className="text-[10px] font-normal block -mb-0.5">from</span>}
                              £{part.ebayPrice.toFixed(2)}
                            </span>
                          )}
                          <span className="flex items-center gap-1 text-xs">
                            eBay
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                          </span>
                        </a>
                        {part.euroCarPartsUrl && (
                          <a
                            href={part.euroCarPartsUrl}
                            target="_blank"
                            rel="nofollow noopener"
                            className="inline-flex flex-col items-center bg-white border border-red-200 hover:bg-red-50 text-gray-800 text-sm font-semibold px-4 py-2 rounded-lg transition shadow-sm min-w-[90px]"
                          >
                            <span className="text-xs text-gray-500">Check price</span>
                            <span className="flex items-center gap-1 text-xs text-red-600">
                              Euro Car Parts
                            </span>
                          </a>
                        )}
                        {part.gsfCarPartsUrl && (
                          <a
                            href={part.gsfCarPartsUrl}
                            target="_blank"
                            rel="nofollow noopener"
                            className="inline-flex flex-col items-center bg-white border border-emerald-200 hover:bg-emerald-50 text-gray-800 text-sm font-semibold px-4 py-2 rounded-lg transition shadow-sm min-w-[90px]"
                          >
                            <span className="text-xs text-gray-500">Check price</span>
                            <span className="flex items-center gap-1 text-xs text-emerald-600">
                              GSF Car Parts
                            </span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="bg-white rounded-xl border border-gray-200 p-10 text-center">
              <p className="text-gray-500 mb-4">No parts found for this category yet.</p>
              <Link href={`/vehicle/${reg}`} className="text-blue-600 hover:underline font-medium">← Try another category</Link>
            </div>
          )}
        </div>

        {/* Sticky sidebar */}
        <div className="hidden lg:block w-72 flex-shrink-0">
          <div className="sticky top-24 space-y-4">
            {hasLivePrices ? (
              <div className="bg-green-50 border border-green-200 rounded-xl p-4">
                <div className="flex items-start gap-2 mb-2">
                  <span className="text-green-500 text-lg mt-0.5">✅</span>
                  <h3 className="font-bold text-green-800 text-sm">Live Prices</h3>
                </div>
                <p className="text-xs text-green-700 leading-relaxed">
                  eBay prices marked <span className="font-medium">✓ Live</span> show the lowest price found. Click through to see all available listings.
                </p>
              </div>
            ) : (
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <div className="flex items-start gap-2 mb-2">
                  <span className="text-amber-500 text-lg mt-0.5">⚠️</span>
                  <h3 className="font-bold text-amber-800 text-sm">Prices May Vary</h3>
                </div>
                <p className="text-xs text-amber-700 leading-relaxed">
                  Prices shown are estimates based on typical UK retail pricing. Actual prices may differ — always check the retailer for the current price before purchasing.
                </p>
              </div>
            )}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
              <div className="flex items-start gap-2 mb-2">
                <span className="text-blue-500 text-lg mt-0.5">🔧</span>
                <h3 className="font-bold text-blue-800 text-sm">Check Fitment</h3>
              </div>
              <p className="text-xs text-blue-700 leading-relaxed">
                Always verify the <strong>part number</strong> matches your vehicle before purchasing. While we match parts using industry data, some vehicles may have multiple variants.
              </p>
            </div>
            {vehicle && (
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                <h3 className="font-bold text-gray-700 text-sm mb-2">Your Vehicle</h3>
                <div className="space-y-1 text-xs text-gray-600">
                  <p><span className="font-medium text-gray-800">{vehicle.make} {vehicle.model}</span></p>
                  <p>Year: {vehicle.yearOfManufacture}</p>
                  <p>Engine: {vehicle.engineCapacity}cc {vehicle.fuelType}</p>
                  <p>Colour: {vehicle.colour}</p>
                </div>
                <Link href={`/vehicle/${reg}`} className="text-xs text-blue-600 hover:underline mt-2 inline-block">← Change category</Link>
              </div>
            )}
            {dept && (
              <div className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-bold text-gray-700 text-sm mb-2">{dept.icon} More {dept.name}</h3>
                <div className="space-y-1">
                  {dept.categories.filter(c => c.slug !== category).slice(0, 5).map(c => (
                    <Link key={c.slug} href={`/vehicle/${reg}/parts/${c.slug}`} className="flex items-center gap-2 text-xs text-blue-600 hover:text-blue-800 hover:underline py-0.5">
                      <span>{c.icon}</span> {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
            <div className="bg-white border border-gray-200 rounded-xl p-4">
              <p className="text-xs text-gray-400 leading-relaxed">
                As an Amazon Associate and eBay Partner, we earn from qualifying purchases at no extra cost to you.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-8 space-y-2 text-center">
        <p className="text-xs text-gray-400">
          {hasLivePrices
            ? 'eBay prices show the lowest found and may vary. Amazon prices are estimates — click through to see the current price.'
            : 'Prices shown are estimated based on typical UK retail prices and may differ from actual listings. Click through to see the current price.'
          }
        </p>
        <p className="text-xs text-gray-400">
          As an Amazon Associate and eBay Partner, CarPartsCompare earns from qualifying purchases.
        </p>
      </div>
    </div>
  );
}
