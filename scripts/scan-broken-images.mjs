#!/usr/bin/env node
/**
 * Scan every approved/published artwork and flag any whose image_url
 * (or thumbnail_url) is broken — 4xx / 5xx / placeholder filename /
 * unreachable. Outputs a JSONL report to stdout.
 *
 * The Tissot Prodigal Son artwork was filed with a literal filename
 * "Brooklyn Museum - Prodigal (image title missing from API).jpg" —
 * an ingestion-pipeline bug that emitted a placeholder string when
 * the source feed didn't return a usable filename. This sweep finds
 * any other rows that slipped through with the same defect, plus any
 * URLs that have rotted since ingestion.
 *
 * Usage:
 *   node --env-file=.env.local scripts/scan-broken-images.mjs > /tmp/broken.jsonl
 *   node --env-file=.env.local scripts/scan-broken-images.mjs --limit 200
 */
import { createClient } from '@supabase/supabase-js';

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false } },
);

const limitIdx = process.argv.indexOf('--limit');
const LIMIT = limitIdx >= 0 ? parseInt(process.argv[limitIdx + 1], 10) : Infinity;
const offsetIdx = process.argv.indexOf('--offset');
const OFFSET = offsetIdx >= 0 ? parseInt(process.argv[offsetIdx + 1], 10) : 0;

const PLACEHOLDER_MARKERS = [
  'image title missing from api',
  'missing from api',
  'placeholder',
  'no_image',
  'noimage',
];

function looksPlaceholder(url) {
  if (!url) return false;
  const lower = decodeURIComponent(url).toLowerCase();
  return PLACEHOLDER_MARKERS.some((m) => lower.includes(m));
}

async function fetchAll() {
  const out = [];
  const PAGE = 1000;
  for (let from = 0; ; from += PAGE) {
    const { data, error } = await sb
      .from('artworks')
      .select('id, slug, title, image_url, thumbnail_url, source, source_url, status, moderation_status')
      .eq('status', 'published')
      .eq('moderation_status', 'approved')
      .order('id', { ascending: true })
      .range(from, from + PAGE - 1);
    if (error) throw error;
    if (!data || data.length === 0) break;
    out.push(...data);
    if (data.length < PAGE) break;
  }
  return out;
}

async function checkOnce(url) {
  // GET-then-cancel-stream is more accurate than HEAD on Wikimedia —
  // HEAD on Special:FilePath sometimes responds 405 even on valid
  // files. We only read the response headers, then abort.
  const ac = new AbortController();
  const t = setTimeout(() => ac.abort(), 8000);
  try {
    const r = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      signal: ac.signal,
      headers: {
        'User-Agent':
          'learnofchrist.com broken-image-scan (admin@learnofchrist.com)',
        Accept: 'image/*,*/*;q=0.5',
      },
    });
    // Cancel the body stream — we don't need the bytes.
    try { r.body?.cancel?.(); } catch {}
    return r.status;
  } catch (e) {
    return e.name === 'AbortError' ? 'TIMEOUT' : `ERR ${e.code || e.message}`;
  } finally {
    clearTimeout(t);
  }
}

/** Retry once on 429 / 503 / TIMEOUT to filter rate-limit false
 *  positives from genuine 404s. */
async function head(url) {
  let s = await checkOnce(url);
  if (s === 429 || s === 503 || s === 'TIMEOUT') {
    await new Promise((r) => setTimeout(r, 1500 + Math.random() * 1500));
    s = await checkOnce(url);
  }
  return s;
}

// Hosts that rate-limit aggressively and produce false positives in
// any HEAD/GET sweep. We trust their URLs as long as they came from
// a successful ingestion run.
const SKIP_NETWORK_HOSTS = new Set([
  'gallica.bnf.fr',
  'iiif.micr.io',
  'cdm21059.contentdm.oclc.org',
]);

async function check(art) {
  // 1. Placeholder filename — instant flag, no network needed.
  if (looksPlaceholder(art.image_url) || looksPlaceholder(art.thumbnail_url)) {
    return { reason: 'placeholder-filename', status: null };
  }
  if (!art.image_url) {
    return { reason: 'no-image-url', status: null };
  }
  // 2. Skip network check for hosts we know rate-limit aggressively.
  try {
    const host = new URL(art.image_url).hostname;
    if (SKIP_NETWORK_HOSTS.has(host)) return null;
  } catch {
    // Malformed URL → flag.
    return { reason: 'malformed-url', status: null };
  }
  // 3. Network check.
  const status = await head(art.image_url);
  if (status === 200) return null;
  // Filter remaining transient signals from the report.
  if (status === 429 || status === 503 || status === 'TIMEOUT') return null;
  return { reason: 'http', status };
}

async function main() {
  const all = await fetchAll();
  console.error(`scanning ${all.length} approved artworks (offset ${OFFSET})…`);
  let work = all.slice(OFFSET);
  if (LIMIT < Infinity) work = work.slice(0, LIMIT);

  const CONCURRENCY = 4;
  let cursor = 0;
  let scanned = 0;
  let broken = 0;

  async function worker() {
    while (true) {
      const i = cursor++;
      if (i >= work.length) return;
      const a = work[i];
      const result = await check(a);
      scanned++;
      if (scanned % 100 === 0) {
        console.error(`  scanned ${scanned}, broken so far: ${broken}`);
      }
      if (result) {
        // Skip remaining transient signals after retry — only record
        // real failures. 429/503/TIMEOUT here means BOTH attempts
        // failed, which is hopefully real but we still tag it.
        broken++;
        process.stdout.write(
          JSON.stringify({
            id: a.id,
            slug: a.slug,
            title: a.title,
            source: a.source,
            ...result,
            image_url: a.image_url,
          }) + '\n',
        );
      }
      // Inter-call pacing per worker.
      await new Promise((r) => setTimeout(r, 200));
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, worker));
  console.error(`\nDone. ${scanned} scanned; ${broken} broken.`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
