import { NextResponse } from 'next/server';

// Mock DVLA lookup for development (replace with real API call)
// Real DVLA VES API needs an API key from https://developer-portal.driver-vehicle-licensing.api.gov.uk/
const MOCK_VEHICLES = {
  'AB12CDE': { make: 'FORD', model: 'FOCUS', yearOfManufacture: 2019, fuelType: 'PETROL', engineCapacity: 999, colour: 'BLUE' },
  'BD51SMR': { make: 'BMW', model: '3 SERIES', yearOfManufacture: 2020, fuelType: 'DIESEL', engineCapacity: 1995, colour: 'BLACK' },
  'FG18XYZ': { make: 'VOLKSWAGEN', model: 'GOLF', yearOfManufacture: 2018, fuelType: 'PETROL', engineCapacity: 1498, colour: 'WHITE' },
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const reg = searchParams.get('reg')?.replace(/\s+/g, '').toUpperCase();

  if (!reg) {
    return NextResponse.json({ error: 'Registration plate required' }, { status: 400 });
  }

  // Try real DVLA API first
  if (process.env.DVLA_API_KEY) {
    try {
      const res = await fetch('https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.DVLA_API_KEY,
        },
        body: JSON.stringify({ registrationNumber: reg }),
      });
      if (res.ok) {
        const data = await res.json();
        return NextResponse.json({
          reg,
          make: data.make,
          model: data.model || '',
          modelFromDvla: !!data.model,
          yearOfManufacture: data.yearOfManufacture,
          fuelType: data.fuelType,
          engineCapacity: data.engineCapacity,
          colour: data.colour,
        });
      }
      if (res.status === 404) {
        return NextResponse.json({ error: 'Vehicle not found. Please check your registration plate.' }, { status: 404 });
      }
    } catch (err) {
      console.error('DVLA API error:', err);
    }
  }

  // Fall back to mock data in development
  const vehicle = MOCK_VEHICLES[reg];
  if (!vehicle) {
    return NextResponse.json({ error: 'Vehicle not found. Please check your registration plate.' }, { status: 404 });
  }

  return NextResponse.json({ reg, ...vehicle });
}
