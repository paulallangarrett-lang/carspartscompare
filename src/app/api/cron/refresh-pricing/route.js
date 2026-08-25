import { NextResponse } from 'next/server';
import { put } from '@vercel/blob';
import zlib from 'zlib';
import { parse } from 'csv-parse';
import { Readable } from 'stream';

// Rebuilds the Euro Car Parts / GSF Car Parts price-matching index from their
// AWIN product datafeeds and uploads it to Vercel Blob as a small gzip JSON
// file. Triggered daily by Vercel Cron (see vercel.json) and protected by
// CRON_SECRET. Can also be fired manually with the same secret.
//
// Index shape: { updatedAt, gsf: { "<suffix6>": [[mpnNorm, price, trackedUrl], ...] },
//                             euro: { "<suffix6>": [[codeNorm, price, trackedUrl], ...] } }
//
// GSF's feed lists the SAME physical part as one row PER vehicle fitment
// (e.g. "Oil Filter ... Fits: CHRYSLER PT CRUISER", "... Fits: DODGE NITRO"),
// each with its own aw_product_id / aw_deep_link pointing at a fitment-specific
// landing page. Linking to whichever fitment row happened to match first sent
// customers to a page for someone else's vehicle. merchant_deep_link is the
// canonical, non-fitment-specific product URL GSF itself uses, shared across
// every fitment row for the same part — we wrap that in Awin's generic
// tracking redirect (cread.php) instead of using the fitment-specific
// aw_deep_link, and dedupe by mpn so each part is stored once.

export const maxDuration = 300;
export const dynamic = 'force-dynamic';

const AWIN_PUBLISHER_ID = '2771194';

function normalize(s) {
  return (s || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
}

// Wraps a merchant's own product URL in Awin's generic tracked-click
// redirect, since merchant_deep_link itself carries no affiliate tracking.
function trackedUrl(merchantId, destUrl) {
  return `https://www.awin1.com/cread.php?awinmid=${merchantId}&awinaffid=${AWIN_PUBLISHER_ID}&clickref=&p=${encodeURIComponent(destUrl)}`;
}

const EURO_CODE_RE = /\|\s*([A-Za-z0-9\-./]{3,20})\s*\|/;

async function fetchAndParseFeed() {
  const feedUrl = process.env.AWIN_DATAFEED_URL;
  if (!feedUrl) throw new Error('AWIN_DATAFEED_URL not configured');

  const res = await fetch(feedUrl);
  if (!res.ok) throw new Error(`Datafeed fetch failed: ${res.status}`);
  if (!res.body) throw new Error('Datafeed response has no body');

  const gsf = {};
  const euro = {};
  const gsfSeenMpn = new Set();

  // Stream: HTTP response -> gunzip -> CSV parser. The decompressed CSV is
  // ~750MB, well past Node/V8's max string length, so this must never be
  // materialized as a single string or buffer.
  const nodeStream = Readable.fromWeb(res.body);
  const gunzip = zlib.createGunzip();
  const parser = parse({ columns: true, skip_empty_lines: true, relax_quotes: true });

  nodeStream.on('error', (err) => parser.destroy(err));
  gunzip.on('error', (err) => parser.destroy(err));
  nodeStream.pipe(gunzip).pipe(parser);

  for await (const row of parser) {
    const merch = row.merchant_name;
    const price = parseFloat(row.search_price);
    const pid = row.aw_product_id;
    if (!pid || Number.isNaN(price)) continue;

    if (merch === 'GSF Car Parts') {
      const mpn = normalize(row.mpn);
      if (mpn.length < 6) continue;
      // Same physical part appears once per vehicle fitment — keep only the
      // first (fitment-agnostic) row we see for each mpn.
      if (gsfSeenMpn.has(mpn)) continue;
      const dest = row.merchant_deep_link || row.aw_deep_link;
      if (!dest) continue;
      gsfSeenMpn.add(mpn);
      const key = mpn.slice(-6);
      const list = gsf[key] || (gsf[key] = []);
      if (list.length < 4) {
        const url = row.merchant_deep_link ? trackedUrl(row.merchant_id, dest) : dest;
        list.push([mpn, Math.round(price * 100) / 100, url]);
      }
    } else if (merch === 'Euro Car Parts') {
      const m = EURO_CODE_RE.exec(row.product_name || '');
      if (!m) continue;
      const code = normalize(m[1]);
      if (code.length < 5) continue;
      if (!row.aw_deep_link) continue;
      const key = code.length >= 6 ? code.slice(-6) : code;
      const list = euro[key] || (euro[key] = []);
      if (list.length < 4) list.push([code, Math.round(price * 100) / 100, row.aw_deep_link]);
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
