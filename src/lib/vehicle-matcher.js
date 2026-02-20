import { getManufacturers, getModels, getVehicles } from './rapidapi.js';
import { cached } from './cache.js';

// Known DVLA make name → TecDoc manufacturer ID mappings
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

// Check if a year falls within a model's production range
function yearInRange(model, year) {
  if (!year) return true;
  const y = parseInt(year);
  const fromStr = model.modelYearFrom || '';
  const toStr = model.modelYearTo || '';
  const from = fromStr ? parseInt(fromStr) : 0;
  const to = toStr ? parseInt(toStr) : 9999;
  return y >= from && y <= to;
}

// Find best matching model from TecDoc models list
// v2 models have: modelId, modelName, modelYearFrom (date string), modelYearTo (date string)
// CRITICAL: Must use year to distinguish generations (e.g. Focus I vs Focus III)
export function findBestModel(models, dvlaModel, year) {
  const search = (dvlaModel || '').toUpperCase().trim();
  
  // CRITICAL: If model is empty, return null — caller must use brute-force path
  if (!search) return null;
  
  // Try exact match first (with year check)
  let match = models.find(m => m.modelName.toUpperCase() === search && yearInRange(m, year));
  if (match) return match;

  // Try exact match without year check
  match = models.find(m => m.modelName.toUpperCase() === search);
  if (match) return match;

  // Get all models that contain the search term (e.g. "FOCUS" matches "FOCUS I", "FOCUS III", etc.)
  const firstWord = search.split(/\s+/)[0];
  const candidates = models.filter(m => {
    const name = m.modelName.toUpperCase();
    return name === search || name.startsWith(search + ' ') || name.startsWith(firstWord + ' ') || name.includes(firstWord);
  });

  if (candidates.length === 0) return null;
  if (candidates.length === 1) return candidates[0];

  // Multiple matches — ALWAYS prefer the one whose year range covers this vehicle
  if (year) {
    const yearMatches = candidates.filter(m => yearInRange(m, year));
    if (yearMatches.length > 0) {
      // If multiple year matches, prefer the base model (shortest name, e.g. "FOCUS III" over "FOCUS III Turnier")
      yearMatches.sort((a, b) => a.modelName.length - b.modelName.length);
      console.log(`[TecDoc] Model matched by year ${year}: ${yearMatches[0].modelName} (modelId: ${yearMatches[0].modelId})`);
      return yearMatches[0];
    }
  }

  // No year match — return first candidate as fallback
  return candidates[0];
}

// Find best vehicle variant using UKVD data for precision matching
// v2 vehicles from rapidapi.js are normalised with: vehicleId, vehicleName, powerKw, fuelType, capacityTech, etc.
export function findBestVehicle(vehicles, engineCapacity, fuelType, powerKW) {
  if (!vehicles || vehicles.length === 0) return null;
  
  // Deduplicate by vehicleId (v2 API can return duplicates)
  const seen = new Set();
  const unique = vehicles.filter(v => {
    if (seen.has(v.vehicleId)) return false;
    seen.add(v.vehicleId);
    return true;
  });
  
  if (unique.length === 1) return unique[0];

  let candidates = unique;

  // Step 1: Filter by fuel type using API's fuelType field directly
  if (fuelType) {
    const fuelUpper = fuelType.toUpperCase();
    const fuelMap = {
      'PETROL': ['petrol', 'gasoline', 'benzin'],
      'DIESEL': ['diesel'],
      'ELECTRIC': ['electric'],
      'HYBRID': ['hybrid'],
      'HYBRID ELECTRIC': ['hybrid'],
      'HYBRID ELECTRIC (CLEAN)': ['hybrid'],
    };
    const searchTerms = fuelMap[fuelUpper] || [fuelUpper.toLowerCase()];
    
    const fuelFiltered = candidates.filter(v => {
      const vFuel = (v.fuelType || '').toLowerCase();
      const vName = (v.vehicleName || '').toLowerCase();
      return searchTerms.some(t => vFuel.includes(t) || vName.includes(t));
    });
    if (fuelFiltered.length > 0) candidates = fuelFiltered;
  }

  // Step 2: Filter by engine capacity (within 50cc tolerance)
  if (engineCapacity) {
    const cc = parseInt(engineCapacity);
    if (cc > 0) {
      const ccFiltered = candidates.filter(v => {
        // Use capacityTech (exact cc from API) if available
        if (v.capacityTech) {
          return Math.abs(v.capacityTech - cc) < 100;
        }
        // Fallback: extract from vehicle name
        const litreMatch = (v.vehicleName || '').match(/(\d+\.\d+)/);
        if (litreMatch) {
          const approxCc = Math.round(parseFloat(litreMatch[1]) * 1000);
          return Math.abs(approxCc - cc) < 100;
        }
        return false;
      });
      if (ccFiltered.length > 0) candidates = ccFiltered;
    }
  }

  // Step 3: Match by powerKW — this is the game changer from UKVD
  // Uses the API's powerKw field directly (no regex extraction needed)
  if (powerKW) {
    const targetKw = typeof powerKW === 'number' ? powerKW : parseFloat(powerKW);
    if (targetKw > 0) {
      // Try exact match (within 2kW tolerance for rounding)
      const exactMatch = candidates.filter(v => {
        return v.powerKw !== null && Math.abs(v.powerKw - targetKw) <= 2;
      });

      if (exactMatch.length > 0) {
        console.log(`[TecDoc] powerKW exact match: ${targetKw}kW → ${exactMatch[0].vehicleName} (vehicleId: ${exactMatch[0].vehicleId})`);
        return exactMatch[0];
      }

      // Try closest kW within 10kW tolerance
      const withKw = candidates
        .filter(v => v.powerKw !== null)
        .sort((a, b) => Math.abs(a.powerKw - targetKw) - Math.abs(b.powerKw - targetKw));

      if (withKw.length > 0 && Math.abs(withKw[0].powerKw - targetKw) <= 10) {
        console.log(`[TecDoc] closest kW match: wanted ${targetKw}kW, found ${withKw[0].powerKw}kW → ${withKw[0].vehicleName} (vehicleId: ${withKw[0].vehicleId})`);
        return withKw[0];
      }
    }
  }

  // Step 4: No kW match, return first candidate
  if (candidates.length > 0) {
    console.log(`[TecDoc] fallback match (no kW): ${candidates[0].vehicleName} (vehicleId: ${candidates[0].vehicleId}, from ${candidates.length} candidates)`);
  }
  return candidates[0];
}

// Score how well a vehicle matches the DVLA/UKVD data (higher = better)
function scoreVehicleMatch(vehicle, engineCapacity, fuelType, powerKW) {
  let score = 0;

  // Fuel type match (+10)
  if (fuelType && vehicle.fuelType) {
    const fuelUpper = fuelType.toUpperCase();
    const fuelMap = {
      'PETROL': ['petrol', 'gasoline', 'benzin'],
      'DIESEL': ['diesel'],
      'ELECTRIC': ['electric'],
      'HYBRID': ['hybrid'],
      'HYBRID ELECTRIC': ['hybrid'],
      'HYBRID ELECTRIC (CLEAN)': ['hybrid'],
    };
    const searchTerms = fuelMap[fuelUpper] || [fuelUpper.toLowerCase()];
    const vFuel = (vehicle.fuelType || '').toLowerCase();
    const vName = (vehicle.vehicleName || '').toLowerCase();
    if (searchTerms.some(t => vFuel.includes(t) || vName.includes(t))) {
      score += 10;
    } else {
      score -= 20; // Wrong fuel is a dealbreaker
    }
  }

  // Engine capacity match (+10 for exact, +5 for close)
  if (engineCapacity) {
    const cc = parseInt(engineCapacity);
    const vCc = vehicle.capacityTech || 0;
    if (vCc > 0) {
      const diff = Math.abs(vCc - cc);
      if (diff < 50) score += 10;
      else if (diff < 100) score += 5;
      else score -= 5;
    }
  }

  // Power match (+20 for exact, +10 for close)
  if (powerKW && vehicle.powerKw) {
    const targetKw = typeof powerKW === 'number' ? powerKW : parseFloat(powerKW);
    const diff = Math.abs(vehicle.powerKw - targetKw);
    if (diff <= 2) score += 20;
    else if (diff <= 5) score += 15;
    else if (diff <= 10) score += 10;
    else score -= 5;
  }

  return score;
}

// Full lookup: DVLA/UKVD data → TecDoc vehicle ID
export async function matchVehicle(dvlaData) {
  const { make, model, yearOfManufacture, engineCapacity, fuelType, powerKW } = dvlaData;
  
  // Step 1: Find manufacturer
  const mfgId = findManufacturerId(make);
  if (!mfgId) return { error: `Unknown manufacturer: ${make}`, step: 'manufacturer' };

  // Step 2: Get models (1 API call, cached)
  const models = await getModels(mfgId);
  if (!models || models.length === 0) return { error: `No models found for ${make}`, step: 'models' };

  const hasModel = model && model.trim() !== '';

  // ===== PATH A: We have a model name (e.g. "Focus", "Q3") =====
  if (hasModel) {
    const bestModel = findBestModel(models, model, yearOfManufacture);
    if (!bestModel) return { error: `Could not match model: ${make} ${model}`, step: 'model-match' };
    console.log(`[TecDoc] Model: ${bestModel.modelName} (modelId: ${bestModel.modelId}, years: ${bestModel.modelYearFrom} to ${bestModel.modelYearTo})`);

    const vehicles = await getVehicles(bestModel.modelId);
    if (!vehicles || vehicles.length === 0) return { error: `No variants found for ${make} ${model}`, step: 'vehicles' };

    const bestVehicle = findBestVehicle(vehicles, engineCapacity, fuelType, powerKW);

    return {
      manufacturerId: mfgId,
      modelId: bestModel.modelId,
      modelName: bestModel.modelName,
      vehicleId: bestVehicle?.vehicleId || vehicles[0].vehicleId,
      vehicleName: bestVehicle?.vehicleName || vehicles[0].vehicleName,
      allVehicles: vehicles,
    };
  }

  // ===== PATH B: No model name (DVLA-only data) =====
  // Brute-force: check all year-matching models, score vehicles by fuel+cc+kW
  console.log(`[TecDoc] No model name for ${make} ${yearOfManufacture} ${engineCapacity}cc ${fuelType} ${powerKW || '?'}kW — using brute-force search`);

  // Filter models by year range
  const yearCandidates = yearOfManufacture
    ? models.filter(m => yearInRange(m, yearOfManufacture))
    : models;

  // Prefer base models (shorter names, e.g. "3 (E90)" over "3 Gran Turismo")
  // and sort by name length to check common models first
  const sortedCandidates = [...yearCandidates].sort((a, b) => a.modelName.length - b.modelName.length);

  // Limit to avoid excessive API calls (each getVehicles is 1 call, but cached)
  const modelsToCheck = sortedCandidates.slice(0, 12);
  console.log(`[TecDoc] Checking ${modelsToCheck.length} of ${yearCandidates.length} year-matching models`);

  let bestMatch = null;
  let bestScore = -Infinity;

  for (const candidateModel of modelsToCheck) {
    try {
      const vehicles = await getVehicles(candidateModel.modelId);
      if (!vehicles || vehicles.length === 0) continue;

      for (const v of vehicles) {
        const score = scoreVehicleMatch(v, engineCapacity, fuelType, powerKW);
        if (score > bestScore) {
          bestScore = score;
          bestMatch = {
            manufacturerId: mfgId,
            modelId: candidateModel.modelId,
            modelName: candidateModel.modelName,
            vehicleId: v.vehicleId,
            vehicleName: v.vehicleName,
            allVehicles: vehicles,
          };
        }
      }
    } catch (err) {
      console.error(`[TecDoc] Error checking model ${candidateModel.modelName}: ${err.message}`);
    }
  }

  if (bestMatch && bestScore >= 15) {
    console.log(`[TecDoc] Brute-force match: ${bestMatch.modelName} → ${bestMatch.vehicleName} (score: ${bestScore})`);
    return bestMatch;
  }

  if (bestMatch) {
    console.log(`[TecDoc] Low-confidence brute-force match: ${bestMatch.modelName} → ${bestMatch.vehicleName} (score: ${bestScore})`);
    return bestMatch;
  }

  return { error: `Could not match vehicle: ${make} (no model name available)`, step: 'model-match' };
}
