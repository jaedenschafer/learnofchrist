#!/usr/bin/env node
/**
 * Dedupe the artworks table on EXACT image_url match.
 *
 * Two artworks pointing at the same image_url are treated as the same
 * physical work, even if their slugs / external_ids / sources differ.
 * That covers the two biggest dupe sources we have today:
 *
 *   1. Met Open Access entries where the same composite image was
 *      catalogued against multiple Met object IDs (e.g. front+back of a
 *      panel registered as 5 separate accessions).
 *   2. The gap-fill source ingesting a Wikimedia file that was already
 *      ingested under a per-artist source (e.g. Caravaggio's Sacrifice
 *      of Isaac in both `caravaggio` and `gap_fill`).
 *
 * Cases this script intentionally does NOT touch:
 *
 *   • (artist, title) duplicates with different image_urls. The Met has
 *     62 different objects titled "Virgin and Child" — these are
 *     separate physical works (ivory, enamel, oil) that genuinely
 *     deserve separate rows.
 *   • Different scans of the same painting. Without perceptual hashing
 *     we can't safely identify these.
 *
 * Per-group keeper selection (in priority order):
 *   1. moderation_status = 'approved' beats anything else
 *   2. is_primary = true on any of its scripture_refs beats false
 *   3. Per-artist source (e.g. 'caravaggio') beats the catch-all
 *      'gap_fill' which beats 'met_openaccess' which beats 'wikimedia'
 *   4. Older created_at wins (longer in the DB → more likely cited)
 *
 * Before deleting non-keepers the script moves their scripture_refs to
 * the keeper, deduping on (book_id, chapter, verse_start, verse_end).
 * Otherwise the FK ON DELETE CASCADE would silently drop chapter
 * coverage that only the loser row carried.
 *
 * Usage:
 *   node scripts/dedupe-artworks.mjs               # dry-run, prints plan
 *   node scripts/dedupe-artworks.mjs --apply       # actually delete
 *
 * Idempotent: a re-run will find no dupes once it's been applied.
 */

const SUPABASE_URL = 'https://uqcgieillyvefzmohzpn.supabase.co';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!SUPABASE_SERVICE_KEY) {
  console.error('Missing SUPABASE_SERVICE_ROLE_KEY env var');
  process.exit(1);
}
const APPLY = process.argv.includes('--apply');

async function call(method, path, body) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      apikey: SUPABASE_SERVICE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
      Prefer: 'return=representation',
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`${method} ${path} -> ${res.status}: ${text}`);
  return text ? JSON.parse(text) : null;
}

async function fetchAllPages(path) {
  const out = [];
  let offset = 0;
  while (true) {
    const sep = path.includes('?') ? '&' : '?';
    const page = await call('GET', `${path}${sep}limit=1000&offset=${offset}`);
    if (!page || !page.length) break;
    out.push(...page);
    if (page.length < 1000) break;
    offset += 1000;
  }
  return out;
}

// ───────── per-group keeper selection ─────────

const SOURCE_RANK = {
  // Per-artist sources are most authoritative (curated)
  bloch: 1, hofmann: 1, bouguereau: 1, plockhorst: 1, rublev: 1, theophanes: 1,
  blake: 1, caravaggio: 1, dore: 1, duccio: 1, durer: 1, 'fra-angelico': 1,
  giotto: 1, michelangelo: 1, raphael: 1, rembrandt: 1, rubens: 1,
  schnorr: 1, tissot: 1,
  // Multi-artist curated bundles
  rijksmuseum: 2, gospel_art_book: 2,
  // The catch-all gap-fill
  gap_fill: 3,
  // Mass scrapes
  met_openaccess: 4,
  // Generic fallback
  wikimedia: 5,
};
const sourceRank = (s) => SOURCE_RANK[s] ?? 99;

function pickKeeper(rows, refsByArtworkId) {
  // Each row already has moderation_status, source, created_at
  return rows.slice().sort((a, b) => {
    // 1. Approved first
    const aApproved = a.moderation_status === 'approved' ? 0 : 1;
    const bApproved = b.moderation_status === 'approved' ? 0 : 1;
    if (aApproved !== bApproved) return aApproved - bApproved;
    // 2. Has a primary ref
    const aHasPrim = (refsByArtworkId.get(a.id) ?? []).some((r) => r.is_primary) ? 0 : 1;
    const bHasPrim = (refsByArtworkId.get(b.id) ?? []).some((r) => r.is_primary) ? 0 : 1;
    if (aHasPrim !== bHasPrim) return aHasPrim - bHasPrim;
    // 3. Better source rank
    const aSrc = sourceRank(a.source);
    const bSrc = sourceRank(b.source);
    if (aSrc !== bSrc) return aSrc - bSrc;
    // 4. Older row wins
    return (a.created_at || '').localeCompare(b.created_at || '');
  })[0];
}

// ───────── main ─────────

async function main() {
  console.log('═══ dedupe-artworks ═══');
  console.log(`Mode: ${APPLY ? 'APPLY (will delete)' : 'DRY-RUN'}`);
  console.log('');

  // 1. Pull every artwork with the dedupe-relevant fields
  console.log('Loading all artworks...');
  const artworks = await fetchAllPages(
    'artworks?select=id,slug,title,source,external_id,image_url,moderation_status,created_at',
  );
  console.log(`  ${artworks.length} artworks`);

  // 2. Pull every scripture_ref so we can move them to keepers
  console.log('Loading all scripture refs...');
  const refs = await fetchAllPages(
    'artwork_scripture_refs?select=id,artwork_id,book_id,chapter,verse_start,verse_end,is_primary',
  );
  console.log(`  ${refs.length} refs`);

  const refsByArtworkId = new Map();
  for (const r of refs) {
    if (!refsByArtworkId.has(r.artwork_id)) refsByArtworkId.set(r.artwork_id, []);
    refsByArtworkId.get(r.artwork_id).push(r);
  }

  // 3. Group artworks by image_url
  const byUrl = new Map();
  for (const a of artworks) {
    if (!a.image_url) continue;
    if (!byUrl.has(a.image_url)) byUrl.set(a.image_url, []);
    byUrl.get(a.image_url).push(a);
  }
  const dupeGroups = Array.from(byUrl.values()).filter((lst) => lst.length > 1);
  const totalDupeRows = dupeGroups.reduce((s, lst) => s + lst.length - 1, 0);
  console.log(`\nDuplicate groups: ${dupeGroups.length}`);
  console.log(`Rows to remove:  ${totalDupeRows}`);

  // 4. Plan keeper + losers per group; also plan ref moves
  const losers = []; // artwork rows to delete
  const refMovePlan = []; // { ref_id, from_artwork_id, to_artwork_id }
  let chapterPreservedCount = 0;
  let chapterDuplicateCount = 0;

  for (const group of dupeGroups) {
    const keeper = pickKeeper(group, refsByArtworkId);
    const groupLosers = group.filter((a) => a.id !== keeper.id);

    // What chapters are already covered by the keeper's refs?
    const keeperKeys = new Set(
      (refsByArtworkId.get(keeper.id) ?? []).map((r) =>
        `${r.book_id}|${r.chapter}|${r.verse_start ?? ''}|${r.verse_end ?? ''}`,
      ),
    );

    for (const loser of groupLosers) {
      losers.push(loser);
      for (const r of refsByArtworkId.get(loser.id) ?? []) {
        const key = `${r.book_id}|${r.chapter}|${r.verse_start ?? ''}|${r.verse_end ?? ''}`;
        if (keeperKeys.has(key)) {
          // Keeper already covers this exact ref; the loser's ref will
          // simply be deleted via cascade. Coverage preserved by keeper.
          chapterDuplicateCount += 1;
        } else {
          // Need to repoint this ref to the keeper or coverage is lost.
          refMovePlan.push({
            ref_id: r.id,
            from_artwork_id: loser.id,
            to_artwork_id: keeper.id,
          });
          keeperKeys.add(key);
          chapterPreservedCount += 1;
        }
      }
    }
  }

  console.log(`\nRef plan: ${refMovePlan.length} refs need to move to keepers`);
  console.log(`         ${chapterDuplicateCount} refs are already covered by the keeper (no move needed)`);
  console.log(`         (Total chapters preserved across groups: ${chapterPreservedCount})`);

  // Print sample groups
  console.log('\nSample plan (first 8 dupe groups):');
  for (let i = 0; i < Math.min(8, dupeGroups.length); i++) {
    const g = dupeGroups[i];
    const keeper = pickKeeper(g, refsByArtworkId);
    const groupLosers = g.filter((a) => a.id !== keeper.id);
    const title = (keeper.title || '').slice(0, 60);
    console.log(`  ${title}`);
    console.log(`    KEEP  ${keeper.id.slice(0, 8)}  source=${keeper.source} mod=${keeper.moderation_status}`);
    for (const l of groupLosers) {
      console.log(`    DROP  ${l.id.slice(0, 8)}  source=${l.source} mod=${l.moderation_status}`);
    }
  }

  if (!APPLY) {
    console.log('\nDRY-RUN. Re-run with --apply to execute.');
    return;
  }

  // 5. Execute: move refs first, then delete loser artworks
  console.log('\n═══ Applying ═══');

  // Move refs by patching artwork_id. PostgREST PATCH handles single-row
  // updates well; we batch by id.
  let moved = 0;
  for (const m of refMovePlan) {
    await call('PATCH', `artwork_scripture_refs?id=eq.${m.ref_id}`, {
      artwork_id: m.to_artwork_id,
    });
    moved += 1;
    if (moved % 25 === 0) console.log(`  moved ${moved}/${refMovePlan.length} refs`);
  }
  console.log(`Moved ${moved} refs to keeper artworks`);

  // Delete losers in chunks
  let deleted = 0;
  const CHUNK = 100;
  for (let i = 0; i < losers.length; i += CHUNK) {
    const chunk = losers.slice(i, i + CHUNK);
    const ids = chunk.map((a) => `"${a.id}"`).join(',');
    await call('DELETE', `artworks?id=in.(${encodeURIComponent(ids)})`);
    deleted += chunk.length;
    console.log(`  deleted ${deleted}/${losers.length} loser artworks`);
  }

  console.log(`\n═══ Done ═══`);
  console.log(`Removed:        ${deleted} duplicate artwork rows`);
  console.log(`Refs moved:     ${moved}`);
  console.log(`Chapters held:  ${chapterPreservedCount} (would have been lost without ref-move)`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
