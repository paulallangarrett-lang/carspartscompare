'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { DEPARTMENTS } from '@/lib/categories';
import { getModelsForMake } from '@/lib/uk-models';

export default function VehiclePage() {
  const { reg } = useParams();
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [modelInput, setModelInput] = useState('');
  const [modelConfirmed, setModelConfirmed] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`/api/lookup?reg=${reg}`);
        const data = await res.json();
        if (data.error) { setError(data.error); }
        else {
          // Check sessionStorage for previously selected model
          const storedModel = typeof window !== 'undefined'
            ? sessionStorage.getItem(`vehicle_model_${reg.toUpperCase()}`)
            : null;
          if (storedModel && !data.model) {
            data.model = storedModel;
            setModelConfirmed(true);
          }
          setVehicle(data);
          if (data.model) setModelConfirmed(true);
        }
      } catch { setError('Failed to look up vehicle'); }
      setLoading(false);
    }
    load();
  }, [reg]);

  const handleModelSelect = (model) => {
    setVehicle(v => ({ ...v, model }));
    setModelConfirmed(true);
    sessionStorage.setItem(`vehicle_model_${reg.toUpperCase()}`, model);
  };

  const handleModelSubmit = (e) => {
    e.preventDefault();
    if (modelInput.trim()) {
      handleModelSelect(modelInput.trim().toUpperCase());
    }
  };

  const availableModels = vehicle ? getModelsForMake(vehicle.make) : [];
  const needsModel = vehicle && !modelConfirmed;
  const displayName = vehicle ? `${vehicle.make}${vehicle.model ? ' ' + vehicle.model : ''}` : '';

  if (loading) return (
    <div className="max-w-6xl mx-auto px-4 py-20 text-center">
      <svg className="animate-spin h-10 w-10 text-blue-600 mx-auto mb-4" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
      <p className="text-gray-500 text-lg">Looking up your vehicle...</p>
    </div>
  );

  if (error) return (
    <div className="max-w-6xl mx-auto px-4 py-20 text-center">
      <div className="bg-red-50 border border-red-200 rounded-xl p-8 max-w-md mx-auto">
        <p className="text-red-700 font-medium mb-4">{error}</p>
        <Link href="/" className="text-blue-600 hover:underline font-medium">← Try again</Link>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-600">{displayName}</span>
      </nav>

      {/* Vehicle header */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-2xl p-6 md:p-8 mb-8 text-white">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="bg-yellow-400 text-black font-mono font-black text-2xl px-5 py-2 rounded-lg border-2 border-black inline-block self-start tracking-wider">
            {(reg || '').toUpperCase()}
          </div>
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold">{displayName}</h1>
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-slate-300 text-sm">
              <span>📅 {vehicle?.yearOfManufacture}</span>
              <span>⛽ {vehicle?.fuelType}</span>
              <span>🔧 {vehicle?.engineCapacity}cc</span>
              <span>🎨 {vehicle?.colour}</span>
            </div>
          </div>
          <Link href="/" className="text-sm text-blue-300 hover:text-white self-start md:self-center">
            ← Different vehicle
          </Link>
        </div>
      </div>

      {/* Model selector - shown when DVLA doesn't return model */}
      {needsModel && (
        <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-6 md:p-8 mb-8">
          <div className="flex items-start gap-3 mb-4">
            <span className="text-2xl mt-0.5">⚠️</span>
            <div>
              <h2 className="text-lg font-bold text-amber-900">We need your model to find the right parts</h2>
              <p className="text-sm text-amber-700 mt-1">
                The DVLA confirmed your vehicle is a <strong>{vehicle.yearOfManufacture} {vehicle.make}</strong> ({vehicle.engineCapacity}cc {vehicle.fuelType}), 
                but didn't provide the model name. Please select or type your model below so we can show you the correct parts.
              </p>
            </div>
          </div>

          {/* How to find your model */}
          <div className="bg-white/60 rounded-lg p-4 mb-5 text-sm text-amber-800">
            <p className="font-semibold mb-1">💡 Not sure of your model?</p>
            <ul className="space-y-1 text-amber-700">
              <li>• Check your <strong>V5C logbook</strong> — the model is shown in section D.3</li>
              <li>• Look at the <strong>badge on the boot/tailgate</strong> of your car (e.g. "Focus", "Fiesta")</li>
              <li>• Check your <strong>insurance or MOT certificate</strong> — both list the model</li>
            </ul>
          </div>

          {/* Quick-pick buttons */}
          {availableModels.length > 0 && (
            <div className="mb-4">
              <p className="text-sm font-semibold text-amber-800 mb-2">Select your {vehicle.make} model:</p>
              <div className="flex flex-wrap gap-2">
                {availableModels.map((model) => (
                  <button
                    key={model}
                    onClick={() => handleModelSelect(model)}
                    className="bg-white border border-amber-300 text-amber-900 text-sm font-medium px-4 py-2 rounded-lg hover:bg-amber-100 hover:border-amber-400 transition shadow-sm"
                  >
                    {model}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Manual input */}
          <div className="border-t border-amber-200 pt-4">
            <p className="text-sm text-amber-700 mb-2">Or type your model if it's not listed above:</p>
            <form onSubmit={handleModelSubmit} className="flex gap-2">
              <input
                type="text"
                value={modelInput}
                onChange={(e) => setModelInput(e.target.value)}
                placeholder={`e.g. ${availableModels[0] || 'FOCUS'}`}
                className="flex-1 max-w-xs border border-amber-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 bg-white"
              />
              <button
                type="submit"
                disabled={!modelInput.trim()}
                className="bg-amber-600 hover:bg-amber-700 disabled:bg-amber-300 text-white font-semibold px-5 py-2 rounded-lg transition text-sm"
              >
                Confirm
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Change model link (shown after model is confirmed and was user-selected) */}
      {modelConfirmed && vehicle && !vehicle._dvlaModel && (
        <div className="flex justify-end mb-4 -mt-4">
          <button
            onClick={() => {
              setModelConfirmed(false);
              setVehicle(v => ({ ...v, model: '' }));
              sessionStorage.removeItem(`vehicle_model_${reg.toUpperCase()}`);
            }}
            className="text-xs text-gray-400 hover:text-blue-600 underline"
          >
            Wrong model? Change it
          </button>
        </div>
      )}

      {/* Parts count summary */}
      <div className="bg-blue-50 border border-blue-100 rounded-lg px-4 py-3 mb-8">
        <p className="text-sm text-blue-800">
          <span className="font-bold">{DEPARTMENTS.reduce((sum, d) => sum + d.categories.length, 0)}</span> part categories available across <span className="font-bold">{DEPARTMENTS.length}</span> departments. Select a category to compare prices from top UK retailers.
        </p>
      </div>

      {/* Department sections */}
      <div className="space-y-8">
        {DEPARTMENTS.map((dept) => (
          <section key={dept.slug}>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">{dept.icon}</span>
              <div>
                <h2 className="text-lg font-bold text-gray-900">{dept.name}</h2>
                <p className="text-xs text-gray-500">{dept.description}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3">
              {dept.categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/vehicle/${reg}/parts/${cat.slug}`}
                  className="group bg-white border border-gray-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-md transition flex flex-col items-center text-center"
                >
                  <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">{cat.icon}</span>
                  <span className="text-sm font-medium text-gray-800 group-hover:text-blue-700">{cat.name}</span>
                  <span className="text-xs text-blue-600 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Compare prices →</span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Popular searches */}
      <div className="mt-10 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-6">
        <h3 className="font-bold text-green-900 mb-2">🔥 Most Popular Searches</h3>
        <div className="flex flex-wrap gap-2">
          {['brake-pads', 'air-filters', 'oil-filters', 'wiper-blades', 'brake-discs', 'spark-plugs', 'batteries'].map(slug => {
            const cat = DEPARTMENTS.flatMap(d => d.categories).find(c => c.slug === slug);
            if (!cat) return null;
            return (
              <Link
                key={slug}
                href={`/vehicle/${reg}/parts/${slug}`}
                className="bg-white border border-green-200 text-green-800 text-sm px-3 py-1.5 rounded-full hover:bg-green-100 transition font-medium"
              >
                {cat.icon} {cat.name}
              </Link>
            );
          })}
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-gray-400">
        As an Amazon Associate and eBay Partner, CarPartsCompare earns from qualifying purchases.
      </p>
    </div>
  );
}
