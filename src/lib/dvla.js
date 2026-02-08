const DVLA_URL = 'https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles';

export async function lookupVehicle(registrationNumber) {
  // Clean reg plate: remove spaces, uppercase
  const reg = registrationNumber.replace(/\s+/g, '').toUpperCase();
  
  const res = await fetch(DVLA_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': process.env.DVLA_API_KEY || '' },
    body: JSON.stringify({ registrationNumber: reg }),
  });

  if (!res.ok) {
    if (res.status === 404) return null;
    throw new Error(`DVLA API error: ${res.status}`);
  }

  const data = await res.json();
  
  return {
    reg: reg,
    make: data.make,
    colour: data.colour,
    fuelType: data.fuelType,
    yearOfManufacture: data.yearOfManufacture,
    engineCapacity: data.engineCapacity,
    co2Emissions: data.co2Emissions,
    taxStatus: data.taxStatus,
    motStatus: data.motStatus,
    motExpiryDate: data.motExpiryDate,
    taxDueDate: data.taxDueDate,
  };
}
