import { NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import zlib from 'zlib';
import { parse } from 'csv-parse';

// Rebuilds the Euro Car Parts / GSF Car Parts price-matching index from their
// AWIN product datafeeds and uploads it to Vercel Blob as a small gzip JSON
// file. Triggered daily by Vercel Cron (see vercel.json) and protected by
// CRON_SECRET. Can also be fired manually with the same secret.
//
// Index shape: { updatedAt, gsf: { "<suffix6>": [[mpnNorm, price, awProductId], ...] },
//                             euro: { "<suffix6>": [[codeNorm, price, awProductId], ...] } }

export const maxDuration = 300;
export const dynamic = 'force-dynamic';

function normalize(s) {
  return (s || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
}

const EURO_CODE_RE = /\|\s*([A-Za-z0-9\-./]{3,20})\s*\|/;

async function fetchAndParseFeed() {
  const feedUrl = process.env.AWIN_DATAFEED_URL;
  if (!feedUrl) throw new Error('AWIN_DATAFEED_URL not configured');

  const res = await fetch(feedUrl);
  if (!res.ok) throw new Error(`Datafeed fetch failed: ${res.status}`);

  const buf = Buffer.from(await res.arrayBuffer());
  const csvText = zlib.gunzipSync(buf).toString('utf-8');

  const gsf = {};
  const euro = {};

  const parser = parse(csvText, { columns: true, skip_empty_lines: true, relax_quotes: true });

  for await (const row of parser) {
    const merch = row.merchant_name;
    const price = parseFloat(row.search_price);
    const pid = row.aw_product_id;
    if (!pid || Number.isNaN(price)) continue;

    if (merch === 'GSF Car Parts') {
      const mpn = normalize(row.mpn);
      if (mpn.length < 6) continue;
      const key = mpn.slice(-6);
      const list = gsf[key] || (gsf[key] = []);
      if (list.length < 4) list.push([mpn, Math.round(price * 100) / 100, pid]);
    } else if (merch === 'Euro Car Parts') {
      const m = EURO_CODE_RE.exec(row.product_name || '');
      if (!m) continue;
      const code = normalize(m[1]);
      if (code.length < 5) continue;
      const key = code.length >= 6 ? code.slice(-6) : code;
      const list = euro[key] || (euro[key] = []);
      if (list.length < 4) list.push([code, Math.round(price * 100) / 100, pid]);
    }
  }

  return { gsf, euro };
}

export async function GET(request) {
  const authHeader = request.headers.get('authorization');
  const expected = `Bearer ${process.env.CRON_SECRET}`;
  if (!process.env.CRON_SECRET || authHeader !== expected) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { gsf, euro } = await fetchAndParseFeed();
    const index = { updatedAt: new Date().toISOString(), gsf, euro };
    const json = JSON.stringify(index);

    const blob = await put('pricing/retailer-price-index.json', json, {
      access: 'public',
      contentType: 'application/json',
      addRandomSuffix: false,
      allowOverwrite: true,
    });

    const gsfEntries = Object.values(gsf).reduce((n, l) => n + l.length, 0);
    const euroEntries = Object.values(euro).reduce((n, l) => n + l.length, 0);

    return NextResponse.json({
      ok: true,
      url: blob.url,
      gsfEntries,
      euroEntries,
      bytes: json.length,
    });
  } catch (err) {
    console.error('refresh-pricing failed:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
