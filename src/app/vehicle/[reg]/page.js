'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

const PART_CATEGORIES = [
  { id: 'air-filters', name: 'Air Filters', icon: '🌬️', desc: 'Engine air filtration', categoryId: 100260 },
  { id: 'oil-filters', name: 'Oil Filters', icon: '🛢️', desc: 'Engine oil filtration', categoryId: 100045 },
  { id: 'brake-pads', name: 'Brake Pads', icon: '🛞', desc: 'Front & rear brake pads', categoryId: 100802 },
  { id: 'wiper-blades', name: 'Wiper Blades', icon: '🌧️', desc: 'Windscreen wipers', categoryId: 100544 },
  { id: 'spark-plugs', name: 'Spark Plugs', icon: '⚡', desc: 'Ignition spark plugs', categoryId: 100374 },
];

export default function VehiclePage() {
  const { reg } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`/api/lookup?reg=${reg}`)
      .then(res => res.json())
      .then(data => {
        if (data.error) setError(data.error);
        else setVehicle(data);
        setLoading(false);
      })
      .catch(() => { setError('Failed to load vehicle'); setLoading(false); });
  }, [reg]);

  if (loading) return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center">
      <svg className="animate-spin h-10 w-10 text-blue-600 mx-auto mb-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
      <p className="text-gray-500 text-lg">Looking up {reg}...</p>
    </div>
  );

  if (error) return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-center">
      <div className="bg-red-50 border border-red-200 rounded-xl p-8 max-w-md mx-auto">
        <p className="text-red-700 text-lg font-medium mb-2">Vehicle Not Found</p>
        <p className="text-red-500 text-sm mb-4">{error}</p>
        <Link href="/" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition font-medium">Try Another Reg</Link>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600">{reg}</span>
      </nav>

      {/* Vehicle card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8 mb-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex items-center gap-1 bg-yellow-400 rounded-lg overflow-hidden shadow">
            <div className="bg-blue-800 text-white text-[9px] font-bold px-1.5 py-3 text-center leading-tight">
              <div className="text-yellow-400 text-xs">★</div>
              GB
            </div>
            <div className="px-3 py-2 text-xl font-bold tracking-wider text-gray-900" style={{ fontFamily: "'Courier New', monospace" }}>
              {reg}
            </div>
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{vehicle.make} {vehicle.model}</h1>
            <div className="flex flex-wrap gap-3 mt-2">
              <span className="inline-flex items-center gap-1 text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{vehicle.yearOfManufacture}</span>
              <span className="inline-flex items-center gap-1 text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{vehicle.fuelType}</span>
              {vehicle.engineCapacity && <span className="inline-flex items-center gap-1 text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{vehicle.engineCapacity}cc</span>}
              <span className="inline-flex items-center gap-1 text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{vehicle.colour}</span>
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-4">Vehicle identified via DVLA. <Link href="/" className="text-blue-500 hover:underline">Not your car?</Link></p>
      </div>

      {/* Part categories */}
      <h2 className="text-xl font-bold text-gray-800 mb-2">Choose a Part Category</h2>
      <p className="text-gray-500 text-sm mb-6">Select a category to compare prices from multiple retailers</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PART_CATEGORIES.map((cat) => (
          <Link
            key={cat.id}
            href={`/vehicle/${reg}/parts/${cat.id}`}
            className="bg-white rounded-xl border border-gray-200 p-6 hover:border-blue-400 hover:shadow-md transition group"
          >
            <span className="text-3xl mb-3 block">{cat.icon}</span>
            <h3 className="font-bold text-gray-800 group-hover:text-blue-600 transition">{cat.name}</h3>
            <p className="text-sm text-gray-400 mt-1">{cat.desc}</p>
            <p className="text-sm text-blue-600 font-medium mt-3 group-hover:translate-x-1 transition-transform inline-block">Compare prices →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
