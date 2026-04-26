#!/usr/bin/env node
/**
 * Backfill 256px + 800px WebP thumbnails for every approved artwork.
 *
 * Pipeline per artwork:
 *   1. Fetch source image (preferring image_url; fall back to thumbnail_url)
 *   2. Sharp → resize to 256 (fit: cover) + 800 (fit: inside) as WebP
 *   3. Compute dominant color from the 256 thumb (single average pixel)
 *   4. Upload both files to Supabase Storage bucket `art-thumbs`
 *   5. UPDATE artworks SET thumbnail_256_url, thumbnail_800_url, dominant_color, width, height
 *
 * Idempotent — already-backfilled rows (thumbnail_256_url IS NOT NULL) are
 * skipped unless --force is passed.
 *
 * Resumable — failures are logged to scripts/.failures/thumbs-<run-id>.jsonl
 * for re-runs.
 *
 * Prereqs:
 *   • Migration 028 applied (adds thumbnail_256_url / thumbnail_800_url / dominant_color cols)
 *   • Supabase Storage bucket `art-thumbs` created with public read
 *   • SUPABASE_SERVICE_ROLE_KEY env var
 *
 * Usage:
 *   SUPABASE_SERVICE_ROLE_KEY=... node scripts/backfill-thumbnails.mjs
 *   SUPABASE_SERVICE_ROLE_KEY=... node scripts/backfill-thumbnails.mjs --force
 *   SUPABASE_SERVICE_ROLE_KEY=... node scripts/backfill-thumbnails.mjs --limit 100
 *   SUPABASE_SERVICE_ROLE_KEY=... node scripts/backfill-thumbnails.mjs --dry-run
 */

import sharp from 'sharp';
import { mkdirSync, appendFileSync } from 'node:fs';
import { resolve } from 'node:path';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://uqcgieillyvefzmohzpn.supabase.co';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const BUCKET = 'art-thumbs';

if (!SUPABASE_SERVICE_KEY) {
  console.error('Missing SUPABASE_SERVICE_ROLE_KEY env var');
  process.exit(1);
}

// CLI flags
const args = process.argv.slice(2);
const FORCE = args.includes('--force');
const DRY_RUN = args.includes('--dry-run');
const limitIdx = args.indexOf('--limit');
const LIMIT = limitIdx >= 0 ? parseInt(args[limitIdx + 1], 10) : null;
// Wikimedia rate-limits source fetches at roughly 10 req/s for unauthenticated
// clients with a real User-Agent. Keep concurrency low and sequence between
// batches so we don't burn through the budget.
const BATCH_SIZE = 4;
const MIN_FETCH_GAP_MS = 150;
const RUN_ID = new Date().toISOString().replace(/[:.]/g, '-');

// Failure log
mkdirSync(resolve('scripts/.failures'), { recursive: true });
const FAIL_LOG = resolve(`scripts/.failures/thumbs-${RUN_ID}.jsonl`);

function logFailure(row, err) {
  appendFileSync(
    FAIL_LOG,
    JSON.stringify({ id: row.id, slug: row.slug, image_url: row.image_url, error: String(err) }) + '\n',
  );
}

// ── Supabase REST helpers ──

async function sbSelect(path) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    headers: {
      apikey: SUPABASE_SERVICE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
    },
  });
  if (!res.ok) throw new Error(`Select ${path} → ${res.status}: ${await res.text()}`);
  return res.json();
}

async function sbPatch(table, idCol, idVal, patch) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${table}?${idCol}=eq.${idVal}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      apikey: SUPABASE_SERVICE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
      Prefer: 'return=minimal',
    },
    body: JSON.stringify(patch),
  });
  if (!res.ok) throw new Error(`PATCH ${table} ${idVal} → ${res.status}: ${await res.text()}`);
}

async function sbUploadStorage(bucket, path, buffer, contentType) {
  // Use upsert (POST with x-upsert) so re-running the script overwrites
  // any half-written objects from a previous failed pass.
  const res = await fetch(`${SUPABASE_URL}/storage/v1/object/${bucket}/${path}`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_SERVICE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
      'Content-Type': contentType,
      'x-upsert': 'true',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
    body: buffer,
  });
  if (!res.ok) throw new Error(`Upload ${bucket}/${path} → ${res.status}: ${await res.text()}`);
  return `${SUPABASE_URL}/storage/v1/object/public/${bucket}/${path}`;
}

// ── Image processing ──

async function fetchImageBuffer(url, attempt = 0) {
  // Wikimedia + Met both serve very large originals — bound at 25MB so a
  // pathological row can't OOM the worker.
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'LearnOfChrist-Backfill/1.0 (contact: hello@learnofchrist.com)',
      'Accept': 'image/*',
    },
    redirect: 'follow',
  });
  if (res.status === 429 || res.status === 503) {
    if (attempt >= 4) throw new Error(`Fetch ${url} → ${res.status} after ${attempt} retries`);
    // Exponential backoff: 1s, 2s, 4s, 8s. Honor Retry-After if Wikimedia sends it.
    const retryAfter = parseInt(res.headers.get('retry-after') || '0', 10);
    const wait = retryAfter > 0 ? retryAfter * 1000 : Math.pow(2, attempt) * 1000;
    await new Promise((r) => setTimeout(r, wait));
    return fetchImageBuffer(url, attempt + 1);
  }
  if (!res.ok) throw new Error(`Fetch ${url} → ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length > 25 * 1024 * 1024) throw new Error(`Image too large: ${buf.length} bytes`);
  return buf;
}

async function processOne(row) {
  // Met's thumbnail_url points at images.metmuseum.org/.../web-large/<file>.jpg —
  // a museum-provided pre-sized variant (~500 KB) that's already plenty big
  // for our 800px output and 10× faster to fetch than the full original.
  // For other sources thumbnail_url may be a tiny 256 px Wikimedia thumb that
  // would visibly degrade our 800 px tier — fall back to image_url there.
  const preferThumb = row.source === 'met_openaccess' && row.thumbnail_url;
  const sourceUrl = preferThumb
    ? row.thumbnail_url
    : (row.image_url || row.thumbnail_url);
  if (!sourceUrl) throw new Error('No image URL on row');

  const buf = await fetchImageBuffer(sourceUrl);

  // Use a base image we re-decode for each variant — cheaper than re-fetching.
  const meta = await sharp(buf).metadata();

  const thumb256Buffer = await sharp(buf)
    .resize({ width: 256, height: 320, fit: 'cover', position: 'attention' })
    .webp({ quality: 78 })
    .toBuffer();

  const thumb800Buffer = await sharp(buf)
    .resize({ width: 800, withoutEnlargement: true })
    .webp({ quality: 80 })
    .toBuffer();

  // Dominant color from the 256 thumb. sharp().stats() gives per-channel
  // average — accurate enough for a single-pixel placeholder.
  const stats = await sharp(thumb256Buffer).stats();
  const [r, g, b] = stats.channels.slice(0, 3).map((c) => Math.round(c.mean));
  const hex = '#' + [r, g, b].map((n) => n.toString(16).padStart(2, '0')).join('');

  if (DRY_RUN) {
    return {
      width: meta.width ?? null,
      height: meta.height ?? null,
      dominant_color: hex,
      thumbnail_256_url: `(dry-run) ${row.slug}-256.webp (${thumb256Buffer.length}b)`,
      thumbnail_800_url: `(dry-run) ${row.slug}-800.webp (${thumb800Buffer.length}b)`,
    };
  }

  // Upload both. Path scheme: <slug>/<size>.webp — overwriteable, easy to inspect.
  const thumb256Url = await sbUploadStorage(
    BUCKET, `${row.slug}/256.webp`, thumb256Buffer, 'image/webp',
  );
  const thumb800Url = await sbUploadStorage(
    BUCKET, `${row.slug}/800.webp`, thumb800Buffer, 'image/webp',
  );

  return {
    width: meta.width ?? null,
    height: meta.height ?? null,
    dominant_color: hex,
    thumbnail_256_url: thumb256Url,
    thumbnail_800_url: thumb800Url,
  };
}

// ── Main ──

async function main() {
  const filter = FORCE
    ? '' // include everything
    : '&thumbnail_256_url=is.null';
  const limitClause = LIMIT ? `&limit=${LIMIT}` : '';
  const path =
    `artworks?select=id,slug,image_url,thumbnail_url,source,width,height` +
    `&moderation_status=eq.approved&status=eq.published&order=created_at.asc${filter}${limitClause}`;

  console.log(`Querying: ${path}`);
  const rows = await sbSelect(path);
  console.log(`Found ${rows.length} artwork(s) needing thumbnails${DRY_RUN ? ' (dry-run)' : ''}`);

  let ok = 0;
  let fail = 0;
  for (let i = 0; i < rows.length; i += BATCH_SIZE) {
    const batch = rows.slice(i, i + BATCH_SIZE);
    const results = await Promise.allSettled(batch.map(async (row) => {
      const patch = await processOne(row);
      if (!DRY_RUN) {
        await sbPatch('artworks', 'id', row.id, patch);
      }
      console.log(`  [${i + batch.indexOf(row) + 1}/${rows.length}] ${row.slug} — ${patch.dominant_color}`);
    }));
    // Polite pause between batches so we stay well under Wikimedia's
    // 10 req/s budget (≈4 reqs / 150ms ≈ 26 req/s on bursts; the gap
    // averages us down).
    await new Promise((r) => setTimeout(r, MIN_FETCH_GAP_MS));

    for (let j = 0; j < results.length; j++) {
      if (results[j].status === 'fulfilled') {
        ok++;
      } else {
        fail++;
        const err = results[j].reason;
        const row = batch[j];
        console.warn(`  ✗ ${row.slug}: ${err.message || err}`);
        logFailure(row, err);
      }
    }
  }

  console.log(`\nDone. ${ok} succeeded, ${fail} failed.`);
  if (fail > 0) console.log(`Failures logged to ${FAIL_LOG}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
