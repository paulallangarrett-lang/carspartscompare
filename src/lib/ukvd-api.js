// src/lib/ukvd-api.js
// UKVD (UK Vehicle Data) API client for enhanced vehicle lookups
// Uses the vehicledataglobal.com R2 API with Bearer token auth

const UKVD_ENDPOINT = 'https://uk.api.vehicledataglobal.com/r2/lookup';
const UKVD_PACKAGE = 'VehicleDetailsWithImage';

// Simple in-memory cache (24hr TTL) to minimize API costs
const cache = new Map();
const CACHE_TTL = 24 * 60 * 60 * 1000; // 24 hours

function getCached(reg) {
  const entry = cache.get(reg.toUpperCase());
  if (entry && Date.now() - entry.timestamp < CACHE_TTL) {
    return entry.data;
  }
  cache.delete(reg.toUpperCase());
  return null;
}

function setCache(reg, data) {
  if (cache.size > 500) {
    const oldest = [...cache.entries()].sort((a, b) => a[1].timestamp - b[1].timestamp);
    for (let i = 0; i < 100; i++) cache.delete(oldest[i][0]);
  }
  cache.set(reg.toUpperCase(), { data, timestamp: Date.now() });
}

/**
 * Look up a vehicle by registration using the UKVD API.
 */
export async function lookupVehicleUKVD(reg) {
  const apiKey = process.env.UKVD_API_KEY;
  if (!apiKey) {
    return { error: 'UKVD_API_KEY not set in .env.local', hint: 'Add UKVD_API_KEY to your .env.local file' };
  }

  const cleanReg = reg.toUpperCase().replace(/\s+/g, '');

  // Check cache first
  const cached = getCached(cleanReg);
  if (cached) {
    return { ...cached, source: 'ukvd-cached' };
  }

  try {
    const params = new URLSearchParams({
      packageName: UKVD_PACKAGE,
      vrm: cleanReg,
    });

    const url = `${UKVD_ENDPOINT}?${params.toString()}`;

    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/json',
      },
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      const errorBody = await response.text().catch(() => '');
      console.error(`UKVD API error ${response.status}: ${errorBody}`);
      return { error: `UKVD API returned ${response.status}`, source: 'ukvd' };
    }

    const raw = await response.json();

    // Check response status using the R2 API structure
    const responseInfo = raw?.responseInformation || raw?.ResponseInformation || {};
    const isSuccess = responseInfo?.isSuccessStatusCode ?? responseInfo?.IsSuccessStatusCode;

    if (!isSuccess) {
      const msg = responseInfo?.statusMessage || responseInfo?.StatusMessage || 'Unknown error';
      console.error(`UKVD lookup failed for ${cleanReg}: ${msg}`);
      return { error: msg, source: 'ukvd' };
    }

    const parsed = parseUKVDResponse(raw, cleanReg);
    setCache(cleanReg, parsed);
    return { ...parsed, source: 'ukvd' };

  } catch (err) {
    console.error(`UKVD lookup error for ${cleanReg}:`, err.message);
    return { error: err.message, source: 'ukvd' };
  }
}

/**
 * Safe accessor - tries camelCase then PascalCase for property names.
 * The API may return either format.
 */
function get(obj, ...keys) {
  if (!obj) return undefined;
  let current = obj;
  for (const key of keys) {
    if (!current || typeof current !== 'object') return undefined;
    // Try exact key first
    if (current[key] !== undefined) {
      current = current[key];
      continue;
    }
    // Try camelCase
    const camel = key.charAt(0).toLowerCase() + key.slice(1);
    if (current[camel] !== undefined) {
      current = current[camel];
      continue;
    }
    // Try PascalCase
    const pascal = key.charAt(0).toUpperCase() + key.slice(1);
    if (current[pascal] !== undefined) {
      current = current[pascal];
      continue;
    }
    return undefined;
  }
  return current;
}

/**
 * Parse the raw UKVD R2 API response into a clean object.
 * Based on the PHP model classes from the Code Builder.
 *
 * Response structure:
 *   results.vehicleDetails (.vehicleIdentification, .vehicleStatus, .dvlaTechnicalDetails)
 *   results.modelDetails (.modelIdentification, .bodyDetails, .powertrain, .performance, .safety, .emissions, .dimensions, .weights)
 *   results.vehicleImageDetails (.vehicleImageList[])
 */
function parseUKVDResponse(raw, reg) {
  // The results object - try both cases
  const results = raw?.results || raw?.Results || {};

  // Vehicle Details (DVLA-sourced data)
  const vd = results?.vehicleDetails || results?.VehicleDetails || {};
  const vi = get(vd, 'vehicleIdentification') || {};
  const vs = get(vd, 'vehicleStatus') || {};
  const dvlaTech = get(vd, 'dvlaTechnicalDetails') || {};
  const ved = get(vs, 'vehicleExciseDutyDetails') || {};

  // Model Details (enhanced SMMT/manufacturer data)
  const md = results?.modelDetails || results?.ModelDetails || {};
  const mi = get(md, 'modelIdentification') || {};
  const mc = get(md, 'modelClassification') || {};
  const body = get(md, 'bodyDetails') || {};
  const dims = get(md, 'dimensions') || {};
  const weights = get(md, 'weights') || {};
  const powertrain = get(md, 'powertrain') || {};
  const ice = get(powertrain, 'iceDetails') || {};
  const transmission = get(powertrain, 'transmission') || {};
  const safety = get(md, 'safety') || {};
  const ncap = get(safety, 'euroNcap') || {};
  const emissions = get(md, 'emissions') || {};
  const perf = get(md, 'performance') || {};
  const power = get(perf, 'power') || {};
  const torque = get(perf, 'torque') || {};
  const stats = get(perf, 'statistics') || {};
  const economy = get(perf, 'fuelEconomy') || {};

  // Vehicle Image Details
  const imgDetails = results?.vehicleImageDetails || results?.VehicleImageDetails || {};
  const imgList = get(imgDetails, 'vehicleImageList') || [];
  const img = imgList[0] || {};

  const result = {
    // === Core identification (backward compatible with DVLA VES) ===
    make: get(mi, 'make') || get(vi, 'dvlaMake') || '',
    model: get(mi, 'range') || get(vi, 'dvlaModel') || '',
    yearOfManufacture: get(vi, 'yearOfManufacture') || '',
    engineCapacity: get(dvlaTech, 'engineCapacityCc') || get(ice, 'engineCapacityCc') || '',
    fuelType: normaliseFuel(get(vi, 'dvlaFuelType') || get(powertrain, 'fuelType') || ''),
    colour: get(get(get(vd, 'vehicleHistory'), 'colourDetails'), 'currentColour') || '',
    registrationNumber: reg,

    // === Enhanced model identification (critical for TecDoc) ===
    modelDescription: get(mi, 'model') || '',
    modelVariant: get(mi, 'modelVariant') || '',
    trim: get(mi, 'modelVariant') || '',
    modelSeries: get(mi, 'series') || '',
    generation: get(mi, 'mark') || '',
    countryOfOrigin: get(mi, 'countryOfOrigin') || '',
    bodyType: get(body, 'bodyStyle') || '',
    bodyShape: get(body, 'bodyShape') || '',
    doors: get(body, 'numberOfDoors') || '',
    seats: get(body, 'numberOfSeats') || '',
    vehicleClass: get(mc, 'vehicleClass') || '',
    powertrainType: get(powertrain, 'powertrainType') || '',

    // === Engine details ===
    engineDescription: get(ice, 'engineDescription') || '',
    engineManufacturer: get(ice, 'engineManufacturer') || '',
    engineFamily: get(ice, 'engineFamily') || '',
    engineCapacityCc: get(ice, 'engineCapacityCc') || '',
    engineCapacityLitres: get(ice, 'engineCapacityLitres') || '',
    aspiration: get(ice, 'aspiration') || '',
    cylinderArrangement: get(ice, 'cylinderArrangement') || '',
    numberOfCylinders: get(ice, 'numberOfCylinders') || '',
    valveGear: get(ice, 'valveGear') || '',
    valvesPerCylinder: get(ice, 'valvesPerCylinder') || '',
    bore: get(ice, 'boreMm') || '',
    stroke: get(ice, 'strokeMm') || '',
    fuelDelivery: get(ice, 'fuelDelivery') || '',

    // === Power output (key for TecDoc matching) ===
    powerBHP: get(power, 'bhp') || '',
    powerPS: get(power, 'ps') || '',
    powerKW: get(power, 'kw') || get(dvlaTech, 'maxNetPowerKw') || '',
    powerRPM: get(power, 'rpm') || '',
    torqueNm: get(torque, 'nm') || '',
    torqueLbFt: get(torque, 'lbFt') || '',
    torqueRPM: get(torque, 'rpm') || '',

    // === Transmission ===
    transmissionType: get(transmission, 'transmissionType') || '',
    numberOfGears: get(transmission, 'numberOfGears') || '',
    driveType: get(transmission, 'driveType') || '',
    drivingAxle: get(transmission, 'drivingAxle') || '',

    // === Performance ===
    zeroToSixty: get(stats, 'zeroToSixtyMph') || '',
    maxSpeedMph: get(stats, 'maxSpeedMph') || '',

    // === Fuel economy ===
    fuelEconomyUrbanMPG: get(economy, 'urbanColdMpg') || '',
    fuelEconomyExtraUrbanMPG: get(economy, 'extraUrbanMpg') || '',
    fuelEconomyCombinedMPG: get(economy, 'combinedMpg') || '',

    // === Emissions & tax ===
    co2: get(ved, 'dvlaCo2') || get(emissions, 'manufacturerCo2') || '',
    co2Band: get(ved, 'dvlaCo2Band') || '',
    vedBand: get(ved, 'dvlaBand') || '',
    euroStatus: get(emissions, 'euroStatus') || '',

    // === Safety ===
    ncapStars: get(ncap, 'ncapStarRating') || '',
    ncapAdult: get(ncap, 'ncapAdultPercent') || '',
    ncapChild: get(ncap, 'ncapChildPercent') || '',
    ncapPedestrian: get(ncap, 'ncapPedestrianPercent') || '',
    ncapSafetyAssist: get(ncap, 'ncapSafetyAssistPercent') || '',

    // === Dimensions ===
    length: get(dims, 'lengthMm') || '',
    width: get(dims, 'widthMm') || '',
    height: get(dims, 'heightMm') || '',
    wheelbase: get(dims, 'wheelbaseLengthMm') || '',
    kerbWeight: get(weights, 'kerbWeightKg') || '',
    grossVehicleWeight: get(weights, 'grossVehicleWeightKg') || '',

    // === Vehicle image ===
    imageUrl: get(img, 'imageUrl') || '',
    imageColour: get(img, 'colour') || '',
    imageDescription: get(img, 'description') || '',
    imageExpiry: get(img, 'expiryDate') || '',

    // === Dates ===
    dateFirstRegistered: get(vi, 'dateFirstRegisteredInUk') || get(vi, 'dateFirstRegistered') || '',
    dateOfManufacture: get(vi, 'dateOfManufacture') || '',
    vin: get(vi, 'vin') || '',

    // === Status ===
    isImported: get(vs, 'isImported') || false,
    isScrapped: get(vs, 'isScrapped') || false,
  };

  return result;
}

/**
 * Normalise fuel type strings to consistent format.
 */
function normaliseFuel(fuel) {
  const f = (fuel || '').toUpperCase().trim();
  const map = {
    'HEAVY OIL': 'Diesel',
    'DIESEL': 'Diesel',
    'PETROL': 'Petrol',
    'ELECTRICITY': 'Electric',
    'ELECTRIC': 'Electric',
    'HYBRID ELECTRIC (CLEAN)': 'Hybrid',
    'GAS BI-FUEL': 'Gas Bi-Fuel',
    'GAS/BI-FUEL': 'Gas Bi-Fuel',
    'STEAM': 'Steam',
  };
  return map[f] || fuel;
}

/**
 * Check if UKVD API is configured
 */
export function isUKVDConfigured() {
  return !!process.env.UKVD_API_KEY;
}

/**
 * Get the key TecDoc matching fields from UKVD vehicle data.
 */
export function getTecDocMatchFields(vehicle) {
  return {
    make: vehicle.make,
    model: vehicle.model,
    year: vehicle.yearOfManufacture,
    powerKW: vehicle.powerKW ? parseFloat(vehicle.powerKW) : null,
    engineCapacityCc: vehicle.engineCapacity ? parseInt(String(vehicle.engineCapacity).replace(/,/g, '')) : null,
    engineDescription: vehicle.engineDescription,
    modelSeries: vehicle.modelSeries,
    generation: vehicle.generation,
    fuelType: vehicle.fuelType,
    transmissionType: vehicle.transmissionType,
    bodyType: vehicle.bodyType,
  };
}
