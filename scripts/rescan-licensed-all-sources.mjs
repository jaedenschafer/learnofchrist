#!/usr/bin/env node
/**
 * Re-scan artworks that were approved by the external
 * `bulk-approve-licensed-all-sources` process. Fetches each image via
 * Wikimedia's thumbnail endpoint, calls OpenAI moderation (with retries on
 * 5xx), and rewrites the row. Rows that pass stay approved; rows that flag
 * are demoted to `flagged`; rows that hit the rejection thresholds are
 * demoted to `rejected`. Rows whose image still can't be fetched keep their
 * current approved status but gain a `provider-error` context flag so they
 * can be triaged later.
 *
 * Usage:
 *   node --env-file=.env.local scripts/rescan-licensed-all-sources.mjs
 */
import { createClient } from '@supabase/supabase-js';

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false } },
);
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const IMAGE_UA =
  'LearnOfChrist-ModerationBot/1.0 (https://learnofchrist.com; contact: podcaststudioaz@gmail.com)';

const REJECT_THRESHOLDS = {
  'explicit-nudity': 0.55,
  'sexual-minors': 0.2,
  'hate': 0.7,
};
const FLAG_THRESHOLDS = {
  'explicit-nudity': 0.2,
  'partial-nudity': 0.35,
  'underwear-or-swimwear': 0.45,
  'revealing-clothes': 0.5,
  'suggestive': 0.4,
};
const HIGH_RISK_CHAPTERS = new Set([
  'genesis/2','genesis/3','genesis/6','genesis/9','genesis/19','genesis/38','genesis/39',
  'judges/16','judges/19','2-samuel/11','2-samuel/13','1-kings/1',
  'proverbs/5','proverbs/7',
  'song-of-solomon/1','song-of-solomon/2','song-of-solomon/3','song-of-solomon/4',
  'song-of-solomon/5','song-of-solomon/6','song-of-solomon/7','song-of-solomon/8',
  'hosea/1','hosea/2','hosea/3',
  'revelation/17','revelation/18',
]);

function toModerationUrl(url) {
  try {
    const u = new URL(url);
    if (u.hostname.endsWith('wikimedia.org') || u.hostname.endsWith('wikipedia.org')) {
      if (!u.searchParams.has('width')) u.searchParams.set('width', '800');
      return u.toString();
    }
  } catch {}
  return url;
}

async function fetchImageBytes(url) {
  for (let attempt = 1; attempt <= 5; attempt++) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 30000);
    try {
      const r = await fetch(toModerationUrl(url), {
        headers: { 'User-Agent': IMAGE_UA, Accept: 'image/*,*/*;q=0.8' },
        redirect: 'follow',
        signal: controller.signal,
      });
      if (!r.ok) {
        if ([429, 503, 504].includes(r.status) && attempt < 5) {
          await new Promise((res) => setTimeout(res, 1500 * attempt));
          continue;
        }
        throw new Error(`fetch ${r.status}`);
      }
      const buf = Buffer.from(await r.arrayBuffer());
      const ct = (r.headers.get('content-type') || 'image/jpeg').split(';')[0].trim() || 'image/jpeg';
      return { buf, contentType: ct };
    } catch (e) {
      if (attempt === 5) throw e;
      await new Promise((res) => setTimeout(res, 1500 * attempt));
    } finally {
      clearTimeout(timer);
    }
  }
}

async function moderateOpenAI(bytes) {
  for (let attempt = 1; attempt <= 4; attempt++) {
    try {
      const dataUrl = `data:${bytes.contentType};base64,${bytes.buf.toString('base64')}`;
      const r = await fetch('https://api.openai.com/v1/moderations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'omni-moderation-latest',
          input: [{ type: 'image_url', image_url: { url: dataUrl } }],
        }),
      });
      if (!r.ok) {
        if ([429, 500, 502, 503, 504].includes(r.status) && attempt < 4) {
          await new Promise((res) => setTimeout(res, 2000 * attempt));
          continue;
        }
        const body = await r.text().catch(() => '');
        return { provider: 'openai', ran: true, error: `${r.status} ${body.slice(0, 120)}`, labels: {} };
      }
      const j = await r.json();
      const s = j.results?.[0]?.category_scores || {};
      return {
        provider: 'openai',
        ran: true,
        labels: {
          'explicit-nudity': s['sexual'] || 0,
          'sexual-minors': s['sexual/minors'] || 0,
          'violence-graphic': s['violence/graphic'] || 0,
          'violence': s['violence'] || 0,
          'hate': s['hate'] || 0,
          'self-harm': s['self-harm'] || 0,
        },
      };
    } catch (e) {
      if (attempt === 4) return { provider: 'openai', ran: true, error: e.message, labels: {} };
      await new Promise((res) => setTimeout(res, 2000 * attempt));
    }
  }
}

async function getRefs(id) {
  const { data } = await sb
    .from('artwork_scripture_refs')
    .select('chapter, books(slug)')
    .eq('artwork_id', id);
  return (data || [])
    .map((r) => {
      const b = Array.isArray(r.books) ? r.books[0] : r.books;
      return b ? `${b.slug}/${r.chapter}` : null;
    })
    .filter(Boolean);
}

function decide(openai, refs) {
  const maxByLabel = {};
  if (openai.ran) for (const [k, v] of Object.entries(openai.labels)) maxByLabel[k] = Math.max(maxByLabel[k] || 0, v);
  const reasons = [];
  const contextFlags = [];
  let worstScore = 0, worstLabel = null, rejected = false, flagged = false;
  for (const [k, v] of Object.entries(maxByLabel)) {
    if (v > worstScore) { worstScore = v; worstLabel = k; }
    if (REJECT_THRESHOLDS[k] !== undefined && v >= REJECT_THRESHOLDS[k]) {
      rejected = true;
      reasons.push(`${k} ${Math.round(v * 100)}% (auto-reject)`);
      continue;
    }
    if (FLAG_THRESHOLDS[k] !== undefined && v >= FLAG_THRESHOLDS[k]) {
      flagged = true;
      reasons.push(`${k} ${Math.round(v * 100)}% (flag)`);
    }
  }
  for (const r of refs) if (HIGH_RISK_CHAPTERS.has(r)) { contextFlags.push(`high-risk-chapter:${r}`); if (!rejected) flagged = true; }
  if (openai.error) { contextFlags.push('provider-error:openai'); if (!rejected) flagged = true; }
  if (!openai.ran) { contextFlags.push('no-provider-ran'); flagged = true; }
  return { status: rejected ? 'rejected' : flagged ? 'flagged' : 'pending', reasons, worstScore, worstLabel, contextFlags };
}

// Pull all rows approved by the external actor. Paginate to avoid the 1000-row cap.
async function fetchTargets() {
  const out = [];
  let from = 0;
  while (true) {
    const { data, error } = await sb
      .from('artworks')
      .select('id, title, image_url, moderation_scores')
      .eq('moderation_reviewed_by', 'bulk-approve-licensed-all-sources')
      .range(from, from + 499);
    if (error) throw error;
    if (!data || data.length === 0) break;
    out.push(...data);
    if (data.length < 500) break;
    from += 500;
  }
  return out;
}

const targets = await fetchTargets();
console.log(`rescanning ${targets.length} rows approved by bulk-approve-licensed-all-sources`);

const CONCURRENCY = parseInt(process.env.MOD_CONCURRENCY || '8', 10);
let processed = 0;
let kept = 0;       // scanned-clean, kept approved
let demotedFlag = 0;
let demotedRej = 0;
let fetchErr = 0;

async function processOne(a) {
  let bytes = null;
  let fetchErrMsg = null;
  try {
    bytes = await fetchImageBytes(a.image_url);
  } catch (e) {
    fetchErrMsg = e.message;
  }
  let openai;
  if (!bytes) openai = { provider: 'openai', ran: true, error: fetchErrMsg || 'no-bytes', labels: {} };
  else openai = await moderateOpenAI(bytes);
  const refs = await getRefs(a.id);
  const d = decide(openai, refs);

  // Decision: if the scan came back clean (pending), KEEP approved.
  // If it came back flagged or rejected, DEMOTE the row.
  // If provider errored AND fetch failed, leave status as approved but record the error (can't judge).
  const hadError = !!openai.error;
  let newStatus;
  if (hadError) {
    // Keep approved — we can't make a new judgment without a real scan.
    newStatus = 'approved';
  } else if (d.status === 'pending') {
    newStatus = 'approved';
  } else {
    newStatus = d.status; // flagged or rejected
  }

  const update = {
    moderation_status: newStatus,
    moderation_scores: {
      worstScore: d.worstScore,
      worstLabel: d.worstLabel,
      reasons: d.reasons,
      contextFlags: d.contextFlags,
      providers: [{ provider: openai.provider, ran: openai.ran, error: openai.error, labels: openai.labels }],
      scannedAt: new Date().toISOString(),
    },
  };
  // If we are demoting from approved -> flagged/rejected, clear review fields so it lands in the review queue.
  if (newStatus === 'flagged' || newStatus === 'rejected') {
    update.moderation_reviewed_at = null;
    update.moderation_reviewed_by = null;
    update.moderation_notes = null;
  }

  await sb.from('artworks').update(update).eq('id', a.id);

  processed++;
  if (hadError) fetchErr++;
  else if (d.status === 'pending') kept++;
  else if (d.status === 'rejected') demotedRej++;
  else demotedFlag++;

  const tag = hadError ? 'ERR' : d.status === 'pending' ? 'KEEP' : d.status === 'rejected' ? 'REJECT' : 'FLAG';
  const score = d.worstScore ? `  ${Math.round(d.worstScore * 100)}%` : '';
  const err = hadError ? `  [${openai.error.slice(0, 50)}]` : '';
  console.log(
    `[${processed}/${targets.length}] ${tag.padEnd(6)} ${(a.title || '').slice(0, 50).padEnd(51)}${score}${err}`,
  );
}

// worker pool
let nextIdx = 0;
async function worker() {
  while (true) {
    const i = nextIdx++;
    if (i >= targets.length) return;
    try { await processOne(targets[i]); }
    catch (e) {
      processed++;
      console.error(`[${processed}/${targets.length}] worker error on ${targets[i]?.id}: ${e.message}`);
    }
  }
}

const t0 = Date.now();
await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));
const secs = Math.round((Date.now() - t0) / 1000);

console.log('');
console.log(
  `summary (${secs}s): ${kept} kept-approved · ${demotedFlag} demoted-flagged · ${demotedRej} demoted-rejected · ${fetchErr} provider-error (kept approved)`,
);
