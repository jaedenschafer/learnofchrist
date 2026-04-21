#!/usr/bin/env node
/**
 * Re-decide moderation_status for every artwork using the CURRENT thresholds
 * and the already-stored `moderation_scores.providers[].labels`. No images
 * are re-fetched and no moderation API calls are made.
 *
 * Behavior:
 *  - If a row is currently `flagged` and the new decision is `pending`
 *    (clean), promote it to `approved` with reviewed_by = 'bulk-reapply-thresholds'.
 *  - If a row is currently `approved` and the new decision is `flagged` or
 *    `rejected`, demote it and clear review fields.
 *  - Rows with provider errors are left in their current state (can't judge
 *    without a real scan).
 *
 * Usage:
 *   node --env-file=.env.local scripts/reapply-thresholds.mjs
 *   node --env-file=.env.local scripts/reapply-thresholds.mjs --dry-run
 */
import { createClient } from '@supabase/supabase-js';

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false } },
);
const DRY_RUN = process.argv.includes('--dry-run');

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

function decide(providers, refs) {
  const maxByLabel = {};
  let anyRan = false;
  let anyError = false;
  for (const p of providers || []) {
    if (!p.ran) continue;
    anyRan = true;
    if (p.error) anyError = true;
    for (const [k, v] of Object.entries(p.labels || {})) {
      maxByLabel[k] = Math.max(maxByLabel[k] || 0, v);
    }
  }
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
  if (anyError) { contextFlags.push('provider-error:openai'); /* don't auto-flag on error alone */ }
  if (!anyRan) { contextFlags.push('no-provider-ran'); flagged = true; }
  return {
    status: rejected ? 'rejected' : flagged ? 'flagged' : 'pending',
    reasons, worstScore, worstLabel, contextFlags,
    anyError, anyRan,
  };
}

async function fetchAll() {
  const out = [];
  let from = 0;
  while (true) {
    const { data, error } = await sb
      .from('artworks')
      .select('id, title, moderation_status, moderation_scores, moderation_reviewed_by')
      .range(from, from + 499);
    if (error) throw error;
    if (!data || data.length === 0) break;
    out.push(...data);
    if (data.length < 500) break;
    from += 500;
  }
  return out;
}

const all = await fetchAll();
console.log(`evaluating ${all.length} rows${DRY_RUN ? ' (DRY RUN)' : ''}`);

let promoted = 0, demotedFlag = 0, demotedRej = 0, unchanged = 0, skippedNoScores = 0, skippedProviderError = 0;

for (const a of all) {
  const scores = a.moderation_scores;
  if (!scores || !Array.isArray(scores.providers) || scores.providers.length === 0) {
    skippedNoScores++;
    continue;
  }
  const refs = await getRefs(a.id);
  const d = decide(scores.providers, refs);

  // If the row has a provider error AND no usable labels, we can't judge —
  // leave status alone.
  if (d.anyError && !d.anyRan) {
    skippedProviderError++;
    continue;
  }

  const current = a.moderation_status;
  const next = d.status === 'pending' ? 'approved' : d.status;

  if (current === next) {
    unchanged++;
    continue;
  }

  // Classification:
  //   approved -> flagged/rejected = demote
  //   flagged/rejected/pending -> approved = promote
  const isPromotion = next === 'approved';
  const isDemotion = current === 'approved' && (next === 'flagged' || next === 'rejected');

  const update = {
    moderation_status: next,
    moderation_scores: {
      ...scores,
      worstScore: d.worstScore,
      worstLabel: d.worstLabel,
      reasons: d.reasons,
      contextFlags: d.contextFlags,
      thresholdsAppliedAt: new Date().toISOString(),
    },
  };

  if (isPromotion) {
    update.moderation_reviewed_at = new Date().toISOString();
    update.moderation_reviewed_by = 'bulk-reapply-thresholds';
    update.moderation_notes = 'Auto-approved after reapplying relaxed thresholds (nudity-focused).';
    promoted++;
  } else if (isDemotion) {
    update.moderation_reviewed_at = null;
    update.moderation_reviewed_by = null;
    update.moderation_notes = null;
    if (next === 'rejected') demotedRej++;
    else demotedFlag++;
  } else {
    // e.g., flagged -> rejected; rare
    unchanged++;
    continue;
  }

  if (!DRY_RUN) {
    await sb.from('artworks').update(update).eq('id', a.id);
  }
}

console.log('');
console.log(
  `summary: ${promoted} promoted-to-approved · ${demotedFlag} demoted-flagged · ${demotedRej} demoted-rejected · ${unchanged} unchanged · ${skippedNoScores} no-scores · ${skippedProviderError} provider-error-skipped${DRY_RUN ? ' (DRY RUN — no writes)' : ''}`,
);
