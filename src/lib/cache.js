// In-memory cache with /tmp file fallback for Vercel
// Vercel serverless functions can't write to /var/task (read-only)
// but CAN write to /tmp (ephemeral, cleared between cold starts)

import fs from 'fs';
import path from 'path';

const CACHE_DIR = '/tmp/cpc-cache';
const memoryCache = new Map();
const MAX_MEMORY = 500;

function ensureDir() {
  try {
    if (!fs.existsSync(CACHE_DIR)) fs.mkdirSync(CACHE_DIR, { recursive: true });
    return true;
  } catch {
    return false;
  }
}

function keyToFile(key) {
  const safe = key.replace(/[^a-zA-Z0-9_-]/g, '_');
  return path.join(CACHE_DIR, `${safe}.json`);
}

export function cacheGet(key) {
  // Check memory first
  const mem = memoryCache.get(key);
  if (mem) {
    if (mem._expires && Date.now() > mem._expires) {
      memoryCache.delete(key);
    } else {
      return mem.value;
    }
  }

  // Try /tmp file
  try {
    const file = keyToFile(key);
    if (fs.existsSync(file)) {
      const raw = JSON.parse(fs.readFileSync(file, 'utf8'));
      if (raw._expires && Date.now() > raw._expires) {
        fs.unlinkSync(file);
        return null;
      }
      // Promote to memory cache
      memoryCache.set(key, raw);
      return raw.value;
    }
  } catch { /* ignore file errors */ }

  return null;
}

export function cacheSet(key, value, ttlMs = 30 * 24 * 60 * 60 * 1000) {
  const entry = { value, _expires: Date.now() + ttlMs };

  // Always set in memory
  memoryCache.set(key, entry);

  // Evict oldest if too large
  if (memoryCache.size > MAX_MEMORY) {
    const firstKey = memoryCache.keys().next().value;
    memoryCache.delete(firstKey);
  }

  // Try to persist to /tmp
  try {
    if (ensureDir()) {
      fs.writeFileSync(keyToFile(key), JSON.stringify(entry));
    }
  } catch { /* ignore file errors */ }
}

// Cache-through helper: check cache first, call fn if miss
export async function cached(key, fn, ttlMs) {
  const hit = cacheGet(key);
  if (hit) return hit;
  const result = await fn();
  cacheSet(key, result, ttlMs);
  return result;
}
