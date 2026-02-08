import fs from 'fs';
import path from 'path';

const CACHE_DIR = path.join(process.cwd(), 'data', 'cache');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function keyToFile(key) {
  const safe = key.replace(/[^a-zA-Z0-9_-]/g, '_');
  return path.join(CACHE_DIR, `${safe}.json`);
}

export function cacheGet(key) {
  const file = keyToFile(key);
  if (!fs.existsSync(file)) return null;
  try {
    const raw = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (raw._expires && Date.now() > raw._expires) {
      fs.unlinkSync(file);
      return null;
    }
    return raw.value;
  } catch { return null; }
}

export function cacheSet(key, value, ttlMs = 30 * 24 * 60 * 60 * 1000) {
  ensureDir(CACHE_DIR);
  const file = keyToFile(key);
  fs.writeFileSync(file, JSON.stringify({ value, _expires: Date.now() + ttlMs }));
}

// Cache-through helper: check cache first, call fn if miss
export async function cached(key, fn, ttlMs) {
  const hit = cacheGet(key);
  if (hit) return hit;
  const result = await fn();
  cacheSet(key, result, ttlMs);
  return result;
}
