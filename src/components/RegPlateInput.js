'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegPlateInput() {
  const [reg, setReg] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    const cleaned = reg.replace(/\s+/g, '').toUpperCase();
    if (cleaned.length < 2 || cleaned.length > 8) {
      setError('Please enter a valid UK registration plate');
      return;
    }
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/lookup?reg=${cleaned}`);
      const data = await res.json();
      if (data.error) {
        setError(data.error);
        setLoading(false);
        return;
      }
      router.push(`/vehicle/${cleaned}`);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
      <div className="flex rounded-xl overflow-hidden shadow-2xl shadow-black/20 border-2 border-yellow-500/50">
        <div className="bg-blue-800 flex items-center px-2.5">
          <div className="text-white text-[10px] font-bold leading-tight text-center">
            <div className="text-yellow-400 text-lg">★</div>
            <div>GB</div>
          </div>
        </div>
        <input
          type="text"
          value={reg}
          onChange={(e) => { setReg(e.target.value.toUpperCase()); setError(''); }}
          placeholder="ENTER REG"
          className="flex-1 px-4 py-5 text-2xl md:text-3xl font-bold text-center text-gray-900 bg-yellow-400 placeholder-yellow-600/60 border-none outline-none tracking-[0.15em]"
          maxLength={8}
          style={{ fontFamily: "'Courier New', monospace" }}
          autoComplete="off"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-5 font-bold text-lg transition disabled:opacity-50 whitespace-nowrap"
        >
          {loading ? (
            <span className="inline-flex items-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg>
              Searching
            </span>
          ) : 'Search'}
        </button>
      </div>
      {error && <p className="text-red-400 text-sm mt-3 bg-red-400/10 rounded-lg px-4 py-2">{error}</p>}
      <p className="text-gray-400 text-xs mt-4">
        Try: AB12CDE • BD51SMR • FG18XYZ — Vehicle data sourced from DVLA
      </p>
    </form>
  );
}
