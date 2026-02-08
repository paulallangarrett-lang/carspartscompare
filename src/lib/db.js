// Simple JSON file cache - no native dependencies needed
// Will upgrade to proper database when we need it
import fs from 'fs';
import path from 'path';

const CACHE_DIR = path.join(process.cwd(), 'data');

function ensureDir() {
  if (!fs.existsSync(CACHE_DIR)) fs.mkdirSync(CACHE_DIR, { recursive: true });
}

export function cacheGet(key) {
  ensureDir();
  const file = path.join(CACHE_DIR, `${key}.json`);
  if (!fs.existsSync(file)) return null;
  try {
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    // Check if expired (default 24 hours)
    if (data._expires && Date.now() > data._expires) {
      fs.unlinkSync(file);
      return null;
    }
    return data.value;
  } catch { return null; }
}

export function cacheSet(key, value, ttlMs = 24 * 60 * 60 * 1000) {
  ensureDir();
  const file = path.join(CACHE_DIR, `${key}.json`);
  fs.writeFileSync(file, JSON.stringify({ value, _expires: Date.now() + ttlMs }));
}
