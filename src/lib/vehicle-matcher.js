import { getManufacturers, getModels, getVehicles } from './rapidapi.js';
import { cached } from './cache.js';

// Known DVLA make name → TecDoc manufacturer ID mappings
// Built from our API test: 698 manufacturers returned
const MAKE_MAP = {
  'FORD': 36,
  'BMW': 16,
  'VOLKSWAGEN': 121,
  'VW': 121,
  'AUDI': 5,
  'TOYOTA': 111,
  'HONDA': 45,
  'NISSAN': 80,
  'MERCEDES-BENZ': 74,
  'MERCEDES': 74,
  'HYUNDAI': 183,
  'KIA': 184,
  'LAND ROVER': 1820,
  'JAGUAR': 56,
  'MG': 75,
  'MINI': 1523,
  'VAUXHALL': 117, // Opel in TecDoc
  'PEUGEOT': 84,
  'RENAULT': 90,
  'CITROEN': 25,
  'SEAT': 99,
  'SKODA': 100,
  'MAZDA': 69,
  'VOLVO': 120,
  'FIAT': 33,
  'SUZUKI': 106,
  'DACIA': 306,
  'PORSCHE': 88,
  'LEXUS': 1107,
  'SUBARU': 105,
  'MITSUBISHI': 77,
};

// Find manufacturer ID for a DVLA make name
export function findManufacturerId(dvlaMake) {
  const upper = dvlaMake.toUpperCase().trim();
  return MAKE_MAP[upper] || null;
}

// Find best matching model from TecDoc models list
export function findBestModel(models, dvlaModel, year) {
  const search = dvlaModel.toUpperCase().trim();
  
  // Try exact match first
  let match = models.find(m => m.modelName.toUpperCase() === search);
  if (match) return match;

  // Try starts-with match
  match = models.find(m => m.modelName.toUpperCase().startsWith(search));
  if (match) return match;

  // Try contains match
  match = models.find(m => m.modelName.toUpperCase().includes(search));
  if (match) return match;

  // Try matching first word (e.g. "FOCUS" from "FOCUS TITANIUM")
  const firstWord = search.split(/\s+/)[0];
  const candidates = models.filter(m => m.modelName.toUpperCase().includes(firstWord));
  
  if (candidates.length === 0) return null;
  if (candidates.length === 1) return candidates[0];

  // Multiple matches - find the one whose year range covers this vehicle
  if (year) {
    const yearMatch = candidates.find(m => {
      const from = parseInt(m.yearOfConstructionFrom);
      const to = m.yearOfConstructionTo ? parseInt(m.yearOfConstructionTo) : 9999;
      const y = parseInt(year);
      return y >= from && y <= to;
    });
    if (yearMatch) return yearMatch;
  }

  // Return first candidate as fallback
  return candidates[0];
}

// Find best vehicle variant matching engine size and fuel type
export function findBestVehicle(vehicles, engineCapacity, fuelType) {
  if (!vehicles || vehicles.length === 0) return null;
  if (vehicles.length === 1) return vehicles[0];

  // Try to match by engine capacity and fuel type
  const fuelMap = {
    'PETROL': ['petrol', 'benzin', 'gasoline'],
    'DIESEL': ['diesel'],
    'ELECTRIC': ['electric'],
    'HYBRID ELECTRIC': ['hybrid', 'mhev', 'phev'],
  };
  const fuelTerms = fuelMap[fuelType?.toUpperCase()] || [];
  
  let candidates = vehicles;

  // Filter by fuel type if possible
  if (fuelTerms.length > 0) {
    const fuelFiltered = candidates.filter(v => {
      const name = v.vehicleName?.toLowerCase() || '';
      return fuelTerms.some(t => name.includes(t));
    });
    if (fuelFiltered.length > 0) candidates = fuelFiltered;
  }

  // Filter by engine capacity if provided (within 50cc tolerance)
  if (engineCapacity) {
    const cc = parseInt(engineCapacity);
    const ccFiltered = candidates.filter(v => {
      const name = v.vehicleName || '';
      // Extract cc from name like "1.0 EcoBoost" → 999cc, "2.0 TDCi" → 1997cc
      const litreMatch = name.match(/(\d+\.\d+)/);
      if (litreMatch) {
        const litres = parseFloat(litreMatch[1]);
        const approxCc = Math.round(litres * 1000);
        return Math.abs(approxCc - cc) < 100;
      }
      return false;
    });
    if (ccFiltered.length > 0) candidates = ccFiltered;
  }

  return candidates[0];
}

// Full lookup: DVLA data → TecDoc vehicle ID
export async function matchVehicle(dvlaData) {
  const { make, model, yearOfManufacture, engineCapacity, fuelType } = dvlaData;
  
  // Step 1: Find manufacturer
  const mfgId = findManufacturerId(make);
  if (!mfgId) return { error: `Unknown manufacturer: ${make}`, step: 'manufacturer' };

  // Step 2: Get models (1 API call, cached)
  const models = await getModels(mfgId);
  if (!models || models.length === 0) return { error: `No models found for ${make}`, step: 'models' };

  // Step 3: Match model
  const bestModel = findBestModel(models, model, yearOfManufacture);
  if (!bestModel) return { error: `Could not match model: ${make} ${model}`, step: 'model-match' };

  // Step 4: Get vehicle variants (1 API call, cached)
  const vehicles = await getVehicles(bestModel.modelId);
  if (!vehicles || vehicles.length === 0) return { error: `No variants found for ${make} ${model}`, step: 'vehicles' };

  // Step 5: Match best vehicle variant
  const bestVehicle = findBestVehicle(vehicles, engineCapacity, fuelType);

  return {
    manufacturerId: mfgId,
    modelId: bestModel.modelId,
    modelName: bestModel.modelName,
    vehicleId: bestVehicle?.vehicleId || vehicles[0].vehicleId,
    vehicleName: bestVehicle?.vehicleName || vehicles[0].vehicleName,
    allVehicles: vehicles,
  };
}
