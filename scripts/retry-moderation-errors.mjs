#!/usr/bin/env node
/**
 * Targeted retry for artwork rows whose moderation_scores contains a
 * provider-error. Fetches each image via Wikimedia's thumbnail endpoint,
 * calls OpenAI moderation with retries on 5xx, and rewrites the row.
 *
 * Usage:
 *   node --env-file=.env.local scripts/retry-moderation-errors.mjs
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

const { data: flaggedRows } = await sb
  .from('artworks')
  .select('id, title, image_url, moderation_scores')
  .eq('moderation_status', 'flagged')
  .range(0, 4999);

const targets = (flaggedRows || []).filter((a) => (a.moderation_scores?.providers || []).some((p) => p.error));
console.log(`retrying ${targets.length} rows`);

let stillErr = 0, nowClean = 0, nowFlagged = 0, brokenUrl = 0;
for (const a of targets) {
  let bytes = null;
  let fetchErr = null;
  try {
    bytes = await fetchImageBytes(a.image_url);
  } catch (e) {
    fetchErr = e.message;
  }
  let openai;
  if (!bytes) openai = { provider: 'openai', ran: true, error: fetchErr || 'no-bytes', labels: {} };
  else openai = await moderateOpenAI(bytes);
  const refs = await getRefs(a.id);
  const d = decide(openai, refs);
  await sb
    .from('artworks')
    .update({
      moderation_status: d.status,
      moderation_scores: {
        worstScore: d.worstScore,
        worstLabel: d.worstLabel,
        reasons: d.reasons,
        contextFlags: d.contextFlags,
        providers: [{ provider: openai.provider, ran: openai.ran, error: openai.error, labels: openai.labels }],
        scannedAt: new Date().toISOString(),
      },
    })
    .eq('id', a.id);
  const hasErr = !!openai.error;
  const is404 = openai.error && /fetch 404/.test(openai.error);
  if (hasErr) stillErr++;
  if (is404) brokenUrl++;
  if (!hasErr && d.status === 'pending') nowClean++;
  else if (!hasErr) nowFlagged++;
  const tag = is404 ? 'BAD-URL' : hasErr ? 'STILL-ERR' : d.status.toUpperCase();
  const score = d.worstScore ? `  ${Math.round(d.worstScore * 100)}%` : '';
  const err = hasErr ? `  [${openai.error.slice(0, 60)}]` : '';
  console.log(`${tag.padEnd(10)} ${a.title.slice(0, 55).padEnd(56)}${score}${err}`);
}
console.log('');
console.log(`summary: ${nowClean} scanned-clean · ${nowFlagged} flagged · ${stillErr} still-error (${brokenUrl} broken URL)`);

// If any are now scanned-clean, auto-approve them to match the earlier batch
if (nowClean > 0) {
  const { data: newlyClean } = await sb
    .from('artworks')
    .select('id')
    .eq('moderation_status', 'pending')
    .not('moderation_scores', 'is', null);
  const ids = (newlyClean || []).map((r) => r.id);
  if (ids.length > 0) {
    await sb
      .from('artworks')
      .update({
        moderation_status: 'approved',
        moderation_reviewed_at: new Date().toISOString(),
        moderation_reviewed_by: 'bulk-auto-approve-retry',
        moderation_notes: 'Auto-approved after successful retry of provider-error scan.',
      })
      .in('id', ids);
    console.log(`auto-approved ${ids.length} newly clean row(s)`);
  }
}
