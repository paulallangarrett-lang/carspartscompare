// Common UK car models per manufacturer
// Used when DVLA doesn't return a model name

export const MODELS_BY_MAKE = {
  FORD: ['FIESTA', 'FOCUS', 'PUMA', 'KUGA', 'MONDEO', 'ECOSPORT', 'GALAXY', 'S-MAX', 'C-MAX', 'B-MAX', 'KA', 'KA+', 'MUSTANG', 'RANGER', 'TRANSIT', 'TRANSIT CONNECT', 'TRANSIT CUSTOM', 'TOURNEO', 'EDGE'],
  VAUXHALL: ['CORSA', 'ASTRA', 'MOKKA', 'GRANDLAND', 'CROSSLAND', 'INSIGNIA', 'ADAM', 'VIVA', 'MERIVA', 'ZAFIRA', 'VIVARO', 'COMBO', 'MOVANO'],
  VOLKSWAGEN: ['GOLF', 'POLO', 'UP', 'T-ROC', 'TIGUAN', 'T-CROSS', 'PASSAT', 'ARTEON', 'ID.3', 'ID.4', 'ID.5', 'TOURAN', 'SHARAN', 'TOUAREG', 'CADDY', 'TRANSPORTER', 'CRAFTER'],
  BMW: ['1 SERIES', '2 SERIES', '3 SERIES', '4 SERIES', '5 SERIES', '7 SERIES', '8 SERIES', 'X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'Z4', 'I3', 'I4', 'IX', 'IX3', 'M3', 'M4', 'M5', 'MINI'],
  AUDI: ['A1', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8', 'Q2', 'Q3', 'Q5', 'Q7', 'Q8', 'E-TRON', 'TT', 'RS3', 'RS4', 'RS5', 'RS6', 'S3', 'S4', 'S5'],
  MERCEDES: ['A-CLASS', 'B-CLASS', 'C-CLASS', 'E-CLASS', 'S-CLASS', 'CLA', 'CLS', 'GLA', 'GLB', 'GLC', 'GLE', 'GLS', 'EQA', 'EQB', 'EQC', 'EQS', 'VITO', 'SPRINTER'],
  'MERCEDES-BENZ': ['A-CLASS', 'B-CLASS', 'C-CLASS', 'E-CLASS', 'S-CLASS', 'CLA', 'CLS', 'GLA', 'GLB', 'GLC', 'GLE', 'GLS', 'EQA', 'EQB', 'EQC', 'EQS', 'VITO', 'SPRINTER'],
  TOYOTA: ['YARIS', 'COROLLA', 'C-HR', 'RAV4', 'AYGO', 'AYGO X', 'CAMRY', 'PRIUS', 'YARIS CROSS', 'HIGHLANDER', 'LAND CRUISER', 'GR86', 'SUPRA', 'HILUX', 'PROACE'],
  HONDA: ['CIVIC', 'JAZZ', 'HR-V', 'CR-V', 'E', 'ZR-V', 'ACCORD'],
  NISSAN: ['QASHQAI', 'JUKE', 'MICRA', 'LEAF', 'X-TRAIL', 'NAVARA', 'ARIYA', 'NOTE', 'PULSAR'],
  HYUNDAI: ['I10', 'I20', 'I30', 'TUCSON', 'KONA', 'IONIQ', 'IONIQ 5', 'IONIQ 6', 'SANTA FE', 'BAYON', 'I40'],
  KIA: ['PICANTO', 'RIO', 'CEED', 'SPORTAGE', 'NIRO', 'EV6', 'STONIC', 'SORENTO', 'XCEED', 'PROCEED', 'SOUL'],
  PEUGEOT: ['108', '208', '308', '508', '2008', '3008', '5008', 'PARTNER', 'RIFTER', 'EXPERT', 'BOXER'],
  CITROEN: ['C1', 'C3', 'C3 AIRCROSS', 'C4', 'C5 AIRCROSS', 'BERLINGO', 'DISPATCH', 'RELAY'],
  RENAULT: ['CLIO', 'CAPTUR', 'MEGANE', 'KADJAR', 'ARKANA', 'ZOE', 'SCENIC', 'TRAFIC', 'MASTER', 'KANGOO'],
  FIAT: ['500', '500X', '500L', 'PANDA', 'TIPO', 'PUNTO', 'DUCATO', 'DOBLO'],
  SEAT: ['IBIZA', 'LEON', 'ARONA', 'ATECA', 'TARRACO', 'MII'],
  SKODA: ['FABIA', 'OCTAVIA', 'SUPERB', 'KAMIQ', 'KAROQ', 'KODIAQ', 'SCALA', 'ENYAQ', 'CITIGO'],
  MAZDA: ['2', '3', '6', 'CX-3', 'CX-30', 'CX-5', 'CX-60', 'MX-5', 'MX-30'],
  VOLVO: ['XC40', 'XC60', 'XC90', 'V40', 'V60', 'V90', 'S60', 'S90', 'C40', 'EX30', 'EX90'],
  'LAND ROVER': ['RANGE ROVER', 'RANGE ROVER SPORT', 'RANGE ROVER EVOQUE', 'RANGE ROVER VELAR', 'DISCOVERY', 'DISCOVERY SPORT', 'DEFENDER'],
  JAGUAR: ['XE', 'XF', 'F-PACE', 'E-PACE', 'I-PACE', 'F-TYPE', 'XJ'],
  MINI: ['HATCH', 'CLUBMAN', 'COUNTRYMAN', 'CONVERTIBLE', 'ELECTRIC'],
  SUZUKI: ['SWIFT', 'VITARA', 'S-CROSS', 'JIMNY', 'IGNIS', 'ACROSS', 'SWACE'],
  DACIA: ['SANDERO', 'DUSTER', 'JOGGER', 'SPRING'],
  MG: ['ZS', 'HS', '3', '4', '5', 'MG4'],
  TESLA: ['MODEL 3', 'MODEL Y', 'MODEL S', 'MODEL X'],
  ALFA: ['GIULIA', 'STELVIO', 'GIULIETTA', 'MITO', 'TONALE'],
  'ALFA ROMEO': ['GIULIA', 'STELVIO', 'GIULIETTA', 'MITO', 'TONALE'],
  SUBARU: ['OUTBACK', 'FORESTER', 'XV', 'IMPREZA', 'BRZ', 'SOLTERRA'],
  MITSUBISHI: ['OUTLANDER', 'ASX', 'L200', 'ECLIPSE CROSS', 'SHOGUN'],
  PORSCHE: ['CAYENNE', 'MACAN', 'TAYCAN', '911', 'BOXSTER', 'CAYMAN', 'PANAMERA'],
  LEXUS: ['IS', 'ES', 'NX', 'RX', 'UX', 'LC', 'LS', 'LBX'],
  CUPRA: ['FORMENTOR', 'LEON', 'BORN', 'ATECA'],
  DS: ['DS 3', 'DS 4', 'DS 7', 'DS 9'],
  SMART: ['FORTWO', 'FORFOUR', '#1'],
};

// Get models for a make (case-insensitive lookup)
export function getModelsForMake(make) {
  if (!make) return [];
  const key = make.toUpperCase().trim();
  return MODELS_BY_MAKE[key] || [];
}
