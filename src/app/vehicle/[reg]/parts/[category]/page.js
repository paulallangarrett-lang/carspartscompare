'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const CATEGORY_MAP = {
  'air-filters': { name: 'Air Filters', icon: '🌬️' },
  'oil-filters': { name: 'Oil Filters', icon: '🛢️' },
  'brake-pads': { name: 'Brake Pads', icon: '🛞' },
  'wiper-blades': { name: 'Wiper Blades', icon: '🌧️' },
  'spark-plugs': { name: 'Spark Plugs', icon: '⚡' },
};

export default function PartsPage() {
  const { reg, category } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [parts, setParts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const cat = CATEGORY_MAP[category];

  useEffect(() => {
    async function load() {
      try {
        const vRes = await fetch(`/api/lookup?reg=${reg}`);
        const vData = await vRes.json();
        if (vData.error) { setError(vData.error); setLoading(false); return; }
        setVehicle(vData);

        const pRes = await fetch(`/api/parts?reg=${reg}&category=${category}`);
        const pData = await pRes.json();
        if (pData.error) { setError(pData.error); setLoading(false); return; }
        setParts(pData.parts || []);
      } catch (err) {
        setError('Failed to load parts');
      }
      setLoading(false);
    }
    load();
  }, [reg, category]);

  if (loading) return (
    <div className="max-w-5xl mx-auto px-4 py-20 text-center">
      <svg className="animate-spin h-10 w-10 text-blue-600 mx-auto mb-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
      <p className="text-gray-500 text-lg">Finding compatible {cat?.name || 'parts'}...</p>
    </div>
  );

  if (error) return (
    <div className="max-w-5xl mx-auto px-4 py-20 text-center">
      <div className="bg-red-50 border border-red-200 rounded-xl p-8 max-w-md mx-auto">
        <p className="text-red-700 font-medium mb-4">{error}</p>
        <Link href={`/vehicle/${reg}`} className="text-blue-600 hover:underline font-medium">← Back to vehicle</Link>
      </div>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <Link href={`/vehicle/${reg}`} className="hover:text-blue-600">{vehicle?.make} {vehicle?.model}</Link>
        <span className="mx-2">›</span>
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

      {/* Results count */}
      <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-3 mb-6 flex items-center justify-between">
        <p className="text-sm text-blue-800">
          <span className="font-bold">{parts.length}</span> compatible parts found from <span className="font-bold">{new Set(parts.map(p => p.supplierName)).size}</span> brands
        </p>
      </div>

      {/* Parts grid */}
      {parts.length > 0 ? (
        <div className="space-y-3">
          {parts.map((part, i) => (
            <div key={part.articleId || i} className="bg-white rounded-xl border border-gray-200 p-4 md:p-5 hover:shadow-md transition">
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* Part image placeholder */}
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  {part.imageUrl ? (
                    <img src={part.imageUrl} alt="" className="w-14 h-14 object-contain" />
                  ) : (
                    <span className="text-2xl">{cat?.icon}</span>
                  )}
                </div>

                {/* Part info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-gray-800">{part.supplierName}</span>
                    <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded font-mono">{part.articleNumber}</span>
                  </div>
                  <p className="text-sm text-gray-500">{part.productName}</p>
                </div>

                {/* Price buttons */}
                <div className="flex gap-2 flex-shrink-0">
                  <a
                    href={part.amazonUrl}
                    target="_blank"
                    rel="nofollow noopener"
                    className="inline-flex items-center gap-1.5 bg-[#FF9900] hover:bg-[#e88b00] text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition shadow-sm"
                  >
                    {part.amazonPrice ? `£${part.amazonPrice.toFixed(2)}` : 'Amazon'}
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                  <a
                    href={part.ebayUrl}
                    target="_blank"
                    rel="nofollow noopener"
                    className="inline-flex items-center gap-1.5 bg-[#0064D2] hover:bg-[#0050aa] text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition shadow-sm"
                  >
                    {part.ebayPrice ? `£${part.ebayPrice.toFixed(2)}` : 'eBay'}
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-200 p-10 text-center">
          <p className="text-gray-500 mb-4">No parts found for this category yet.</p>
          <Link href={`/vehicle/${reg}`} className="text-blue-600 hover:underline font-medium">← Try another category</Link>
        </div>
      )}

      {/* Affiliate disclosure */}
      <p className="text-xs text-gray-400 mt-8 text-center">
        As an Amazon Associate and eBay Partner, CarPartsCompare earns from qualifying purchases. Prices may vary.
      </p>
    </div>
  );
}
