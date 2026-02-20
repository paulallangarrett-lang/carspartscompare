// app/api/lookup/route.js
// Vehicle registration lookup - tries UKVD first, falls back to DVLA VES
import { NextResponse } from 'next/server';
import { lookupVehicleUKVD, isUKVDConfigured } from '@/lib/ukvd-api';

// Raw UKVD lookup for debugging — bypasses cache and parsing
async function rawUKVDLookup(reg) {
  const apiKey = process.env.UKVD_API_KEY;
  if (!apiKey) return { error: 'UKVD_API_KEY not set' };
  const url = `https://uk.api.vehicledataglobal.com/r2/lookup?packageName=VehicleDetailsWithImage&vrm=${reg}`;
  const res = await fetch(url, {
    headers: { 'Authorization': `Bearer ${apiKey}`, 'Accept': 'application/json' },
    signal: AbortSignal.timeout(10000),
  });
  if (!res.ok) return { error: `UKVD ${res.status}` };
  return res.json();
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const reg = searchParams.get('reg');

  if (!reg) {
    return NextResponse.json({ error: 'Registration number required' }, { status: 400 });
  }

  const cleanReg = reg.toUpperCase().replace(/\s+/g, '');
  const startTime = Date.now();

  // Debug mode: return raw UKVD response to see all available fields
  const raw = searchParams.get('raw');
  if (raw === 'true' && isUKVDConfigured()) {
    try {
      const rawData = await rawUKVDLookup(cleanReg);
      return NextResponse.json({ _debug: true, reg: cleanReg, rawUKVD: rawData });
    } catch (err) {
      return NextResponse.json({ _debug: true, error: err.message });
    }
  }

  // Try UKVD first (enhanced data)
  if (isUKVDConfigured()) {
    const ukvdResult = await lookupVehicleUKVD(cleanReg);
    if (!ukvdResult.error) {
      console.log(`UKVD lookup success for ${cleanReg} in ${Date.now() - startTime}ms`);
      return NextResponse.json(ukvdResult);
    }
    console.warn(`UKVD lookup failed for ${cleanReg}: ${ukvdResult.error}, trying DVLA VES fallback`);
  }

  // Fallback to DVLA VES API
  try {
    const vesResponse = await fetch(
      `https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles`,
      {
        method: 'POST',
        headers: {
          'x-api-key': process.env.DVLA_API_KEY || '',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ registrationNumber: cleanReg }),
      }
    );

    if (!vesResponse.ok) {
      const elapsed = Date.now() - startTime;
      return NextResponse.json(
        { error: `Vehicle not found (${vesResponse.status})`, elapsed: `${elapsed}ms` },
        { status: vesResponse.status === 404 ? 404 : 502 }
      );
    }

    const vesData = await vesResponse.json();
    const elapsed = Date.now() - startTime;

    return NextResponse.json({
      make: vesData.make || '',
      model: vesData.model || '',
      yearOfManufacture: vesData.yearOfManufacture || '',
      engineCapacity: vesData.engineCapacity || '',
      fuelType: vesData.fuelType || '',
      colour: vesData.colour || '',
      registrationNumber: cleanReg,
      source: 'dvla-ves',
      elapsed: `${elapsed}ms`,
    });
  } catch (err) {
    console.error('DVLA VES fallback error:', err.message);
    return NextResponse.json(
      { error: 'Both UKVD and DVLA VES lookups failed', details: err.message },
      { status: 502 }
    );
  }
}
