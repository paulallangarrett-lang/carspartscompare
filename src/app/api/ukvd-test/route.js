// app/api/ukvd-test/route.js
// Debug endpoint - remove before production!
// Test: /api/ukvd-test?reg=AX64EXE
// Raw:  /api/ukvd-test?reg=AX64EXE&raw=1
import { NextResponse } from 'next/server';
import { lookupVehicleUKVD, isUKVDConfigured, getTecDocMatchFields } from '@/lib/ukvd-api';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const reg = searchParams.get('reg');
  const raw = searchParams.get('raw');

  if (!reg) {
    return NextResponse.json({
      error: 'Usage: /api/ukvd-test?reg=AX64EXE',
      configured: isUKVDConfigured(),
      note: 'Sandbox only accepts registrations containing the letter A',
    });
  }

  // Raw mode - dump the raw API response for debugging JSON paths
  if (raw) {
    const apiKey = process.env.UKVD_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'UKVD_API_KEY not set in .env.local' });
    }

    const cleanReg = reg.toUpperCase().replace(/\s+/g, '');
    const startTime = Date.now();

    try {
      const params = new URLSearchParams({
        packageName: 'VehicleDetailsWithImage',
        vrm: cleanReg,
      });
      const url = `https://uk.api.vehicledataglobal.com/r2/lookup?${params.toString()}`;

      const response = await fetch(url, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Accept': 'application/json',
        },
        signal: AbortSignal.timeout(10000),
      });

      const elapsed = Date.now() - startTime;
      const body = await response.json();

      return NextResponse.json({
        status: response.status,
        elapsed: `${elapsed}ms`,
        rawResponse: body,
      });
    } catch (err) {
      return NextResponse.json({ error: err.message });
    }
  }

  // Normal mode - show parsed data
  const startTime = Date.now();
  const result = await lookupVehicleUKVD(reg);
  const elapsed = Date.now() - startTime;

  if (result.error) {
    return NextResponse.json({
      error: result.error,
      source: result.source || 'ukvd',
      elapsed: `${elapsed}ms`,
      note: 'Sandbox only accepts registrations containing the letter A',
    });
  }

  const tecDocFields = getTecDocMatchFields(result);

  return NextResponse.json({
    success: true,
    elapsed: `${elapsed}ms`,
    source: result.source,
    tecDocMatchFields: tecDocFields,
    vehicleSummary: {
      name: `${result.yearOfManufacture} ${result.make} ${result.modelDescription || result.model}`,
      engine: result.engineDescription,
      power: `${result.powerBHP}bhp / ${result.powerPS}ps / ${result.powerKW}kW`,
      torque: `${result.torqueNm}Nm`,
      transmission: `${result.transmissionType} ${result.numberOfGears}-speed`,
      body: `${result.bodyType} ${result.doors}-door`,
      fuel: result.fuelType,
      image: result.imageUrl,
    },
    fullData: result,
  });
}
