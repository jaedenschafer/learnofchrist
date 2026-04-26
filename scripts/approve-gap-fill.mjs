#!/usr/bin/env node
/**
 * Bulk-approve the gap-fill batch (source = 'gap_fill').
 *
 * Every artwork in this source was hand-curated against a confirmed-bare
 * chapter list; every Wikimedia filename was pre-verified via the imageinfo
 * API; every URL chain was spot-checked end-to-end. The risk profile is
 * categorically different from a mass scrape (e.g. met_openaccess), which
 * is why this batch can be approved together rather than one-by-one.
 *
 * Usage:
 *   node scripts/approve-gap-fill.mjs                # dry-run, prints plan
 *   node scripts/approve-gap-fill.mjs --apply        # actually approve pending
 *   node scripts/approve-gap-fill.mjs --apply --include-flagged
 *                                                    # also approve flagged
 *   node scripts/approve-gap-fill.mjs --apply --source <slug>
 *                                                    # use a different source
 *
 * Idempotent — safe to re-run. Only updates rows whose current
 * moderation_status is in the target set; already-approved rows are left
 * alone.
 *
 * Reads env from .env.local automatically. Requires:
 *   NEXT_PUBLIC_SUPABASE_URL
 *   SUPABASE_SERVICE_ROLE_KEY
 */

import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error('Missing NEXT_PUBLIC_SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SERVICE_KEY, {
  auth: { persistSession: false },
});

// ───────── argv ─────────
const args = process.argv.slice(2);
const APPLY = args.includes('--apply');
const INCLUDE_FLAGGED = args.includes('--include-flagged');
const sourceIdx = args.indexOf('--source');
const SOURCE = sourceIdx >= 0 ? args[sourceIdx + 1] : 'gap_fill';

const TARGET_STATUSES = INCLUDE_FLAGGED
  ? ['pending', 'flagged']
  : ['pending'];

const REVIEWER_TAG = 'bulk-gap-fill-approval';
const APPROVAL_NOTE =
  'Approved via scripts/approve-gap-fill.mjs — curated gap-fill batch ' +
  'with pre-verified Wikimedia public-domain sources and gap-aware ' +
  'chapter targeting. See conversation transcript for individual ' +
  'iconographic decisions.';

// ───────── main ─────────

async function main() {
  console.log('═══ approve-gap-fill ═══');
  console.log(`Mode:           ${APPLY ? 'APPLY (will write)' : 'DRY-RUN (no writes)'}`);
  console.log(`Source filter:  ${SOURCE}`);
  console.log(`Target statuses: ${TARGET_STATUSES.join(', ')}`);
  console.log('');

  // 1. Inventory
  const { data: rows, error } = await supabase
    .from('artworks')
    .select('id, slug, title, source, moderation_status, moderation_reviewed_at, moderation_reviewed_by')
    .eq('source', SOURCE);
  if (error) {
    console.error('Inventory query failed:', error.message);
    process.exit(1);
  }
  console.log(`Total ${SOURCE} artworks: ${rows.length}`);

  const byStatus = rows.reduce((acc, r) => {
    acc[r.moderation_status] = (acc[r.moderation_status] || 0) + 1;
    return acc;
  }, {});
  for (const [status, count] of Object.entries(byStatus).sort()) {
    console.log(`  ${status.padEnd(10)} ${count}`);
  }

  const candidates = rows.filter((r) => TARGET_STATUSES.includes(r.moderation_status));
  console.log('');
  console.log(`Candidates to approve: ${candidates.length}`);

  if (candidates.length === 0) {
    console.log('Nothing to do.');
    return;
  }

  // Show first/last few so the operator can sanity-check
  console.log('');
  console.log('Sample (first 5):');
  for (const c of candidates.slice(0, 5)) {
    console.log(`  ${c.moderation_status.padEnd(8)} ${c.slug}  —  ${c.title}`);
  }
  if (candidates.length > 10) console.log('  …');
  if (candidates.length > 5) {
    console.log('Sample (last 5):');
    for (const c of candidates.slice(-5)) {
      console.log(`  ${c.moderation_status.padEnd(8)} ${c.slug}  —  ${c.title}`);
    }
  }

  if (!APPLY) {
    console.log('');
    console.log('DRY-RUN. No writes performed.');
    console.log('To apply: re-run with --apply');
    return;
  }

  // 2. Apply in chunks of 100. We update by id (in.()) rather than by
  // status filter so that the update is exact and we get an accurate
  // changed-row count.
  const BATCH = 100;
  let updated = 0;
  const reviewedAt = new Date().toISOString();

  for (let i = 0; i < candidates.length; i += BATCH) {
    const chunk = candidates.slice(i, i + BATCH);
    const ids = chunk.map((c) => c.id);
    const { error: updErr, count } = await supabase
      .from('artworks')
      .update(
        {
          moderation_status: 'approved',
          moderation_reviewed_at: reviewedAt,
          moderation_reviewed_by: REVIEWER_TAG,
          moderation_notes: APPROVAL_NOTE,
        },
        { count: 'exact' },
      )
      .in('id', ids);

    if (updErr) {
      console.error(`Batch ${i / BATCH + 1} failed:`, updErr.message);
      process.exit(1);
    }
    updated += count ?? chunk.length;
    console.log(
      `  batch ${(i / BATCH + 1).toString().padStart(3)} → updated ${count ?? chunk.length} of ${chunk.length}`,
    );
  }

  console.log('');
  console.log('═══ Done ═══');
  console.log(`Approved: ${updated} of ${candidates.length} candidate rows`);
  console.log(`reviewer: ${REVIEWER_TAG}`);
  console.log(`reviewed_at: ${reviewedAt}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
