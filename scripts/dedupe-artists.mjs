#!/usr/bin/env node
/**
 * Deduplicate artists.
 *
 * The artists table has accumulated multiple rows for the same person —
 * the result of several ingestion sources using different naming
 * conventions ("Botticelli" vs "Sandro Botticelli" vs "Botticelli
 * (Alessandro di Mariano Filipepi)") and one mojibake-induced split
 * ("albrecht-durer" vs "albrecht-d-rer").
 *
 * This script:
 *   1. Groups artists with identical wikidata_id, OR identical
 *      wikipedia_url when one of the rows lacks a wikidata_id.
 *   2. Skips groups where any member has an attribution prefix
 *      ("Workshop", "Circle of", "Copy after", "Follower of", "After",
 *      "Attributed to", "School of") because those are art-historical
 *      conventions for distinct rows that happen to share a Q-ID.
 *   3. Picks the canonical row by:
 *        a. Highest number of approved artworks
 *        b. Has a bio_long
 *        c. Shortest slug
 *   4. Reassigns artworks from the dupes to the canonical row.
 *   5. Merges bio fields from the dupes into the canonical row when
 *      the canonical row is empty (one-way, never overwrite).
 *   6. Deletes the dupe rows.
 *
 * Usage:
 *   node --env-file=.env.local scripts/dedupe-artists.mjs              # dry-run
 *   node --env-file=.env.local scripts/dedupe-artists.mjs --execute    # apply
 */
import { createClient } from '@supabase/supabase-js';

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { persistSession: false } },
);

const EXECUTE = process.argv.includes('--execute');

const ATTRIBUTION_PREFIXES = [
  'workshop', 'circle of', 'copy after', 'follower of', 'after ',
  'attributed to', 'school of', 'and workshop',
];

function isAttribution(name) {
  const n = (name || '').toLowerCase();
  return ATTRIBUTION_PREFIXES.some(
    (p) => n.startsWith(p) || n.includes(' ' + p),
  );
}

/** "Anonymous, French, 18th century" and friends share the placeholder
 *  Q4233718 ("anonymous master") as a Wikidata target but are distinct
 *  attribution buckets we need to keep separate. */
function isAnonymousBucket(name) {
  return /\banonymous\b/i.test(name || '') ||
    /\bunknown\b/i.test(name || '');
}

/** Slugs derived from mojibake names look like `albrecht-d-rer` —
 *  single-letter mid-tokens are nearly always residue from a stripped
 *  accent. Multi-letter tokens (`van`, `de`, `da`, `di`) are legit. */
function singleLetterMidTokens(slug) {
  const tokens = (slug || '').split('-');
  let count = 0;
  for (let i = 1; i < tokens.length - 1; i++) {
    if (tokens[i].length === 1) count++;
  }
  // Trailing single-letter token like `gustave-dor` (a truncation, not
  // a residue) — count it too.
  if (tokens.length >= 2 && tokens[tokens.length - 1].length <= 2) {
    const last = tokens[tokens.length - 1];
    if (/^[bcdfghjklmnpqrstvwxz]+$/i.test(last)) count++;
  }
  return count;
}

/** Score a candidate row for canonical-picking. Higher = better. */
function canonicalScore(row, artworkCount) {
  const slug = row.slug || '';
  const tokens = slug.split('-');
  let s = 0;
  // Major penalty for likely-mojibake slugs.
  s -= singleLetterMidTokens(slug) * 100;
  // Mild penalty for verbose slugs with parenthesized full names.
  s -= tokens.length * 5;
  // Reward artworks, but cap at 20 so a clean two-token slug still wins
  // over a six-token verbose-name slug that just happens to be where
  // the bulk of artworks landed during ingestion. Moving artworks from
  // dupe → canonical is free, so favoring SEO-clean slugs is fine.
  s += Math.min(artworkCount, 20);
  if (row.bio_long) s += 3;
  return s;
}

/** Union-find: merge any candidate groups that share at least one row. */
function unionGroups(groups) {
  const parent = new Map();
  function find(x) {
    if (!parent.has(x)) parent.set(x, x);
    while (parent.get(x) !== x) {
      parent.set(x, parent.get(parent.get(x)));
      x = parent.get(x);
    }
    return x;
  }
  function union(a, b) {
    const ra = find(a), rb = find(b);
    if (ra !== rb) parent.set(ra, rb);
  }
  for (const g of groups) {
    for (let i = 1; i < g.length; i++) union(g[0].id, g[i].id);
  }
  // Bucket all rows that appeared in any group by their root.
  const bucket = new Map();
  for (const g of groups) {
    for (const r of g) {
      const root = find(r.id);
      if (!bucket.has(root)) bucket.set(root, new Map());
      bucket.get(root).set(r.id, r);
    }
  }
  return [...bucket.values()].map((m) => [...m.values()]);
}

async function fetchAllArtists() {
  const out = [];
  for (let from = 0; ; from += 1000) {
    const { data, error } = await sb
      .from('artists')
      .select('id, slug, name, birth_year, death_year, nationality, bio, bio_long, bio_sources, notable_works, wikipedia_url, wikidata_id')
      .order('slug', { ascending: true })
      .range(from, from + 999);
    if (error) throw error;
    if (!data || data.length === 0) break;
    out.push(...data);
    if (data.length < 1000) break;
  }
  return out;
}

async function countArtworks(artistId) {
  const { count } = await sb
    .from('artworks')
    .select('id', { count: 'exact', head: true })
    .eq('artist_id', artistId);
  return count ?? 0;
}

async function buildGroups(rows) {
  const byKey = new Map();
  for (const r of rows) {
    const keys = [];
    if (r.wikidata_id) keys.push(`qid:${r.wikidata_id}`);
    if (r.wikipedia_url) keys.push(`url:${r.wikipedia_url}`);
    for (const k of keys) {
      if (!byKey.has(k)) byKey.set(k, []);
      byKey.get(k).push(r);
    }
  }
  const rawGroups = [];
  for (const [, rs] of byKey) if (rs.length >= 2) rawGroups.push(rs);
  // Coalesce groups that share at least one row (wikidata_id key + a
  // wikipedia_url key can produce overlapping but non-identical groups).
  return unionGroups(rawGroups);
}

function pickCanonical(group, counts) {
  return [...group].sort((a, b) => {
    const sa = canonicalScore(a, counts.get(a.id) ?? 0);
    const sb = canonicalScore(b, counts.get(b.id) ?? 0);
    if (sb !== sa) return sb - sa;
    return a.slug.length - b.slug.length;
  })[0];
}

function mergePatch(canon, dupe) {
  // One-way fill: only set fields when canonical is empty.
  const patch = {};
  if (!canon.bio && dupe.bio) patch.bio = dupe.bio;
  if (!canon.bio_long && dupe.bio_long) patch.bio_long = dupe.bio_long;
  if (canon.birth_year == null && dupe.birth_year != null) patch.birth_year = dupe.birth_year;
  if (canon.death_year == null && dupe.death_year != null) patch.death_year = dupe.death_year;
  if (!canon.nationality && dupe.nationality) patch.nationality = dupe.nationality;
  if (!canon.wikipedia_url && dupe.wikipedia_url) patch.wikipedia_url = dupe.wikipedia_url;
  if (!canon.wikidata_id && dupe.wikidata_id) patch.wikidata_id = dupe.wikidata_id;

  // Merge jsonb arrays additively (no duplicate URLs in bio_sources).
  const canonSources = Array.isArray(canon.bio_sources) ? canon.bio_sources : [];
  const dupeSources = Array.isArray(dupe.bio_sources) ? dupe.bio_sources : [];
  const knownUrls = new Set(canonSources.map((s) => s?.url).filter(Boolean));
  const merged = [...canonSources];
  for (const s of dupeSources) {
    if (s?.url && !knownUrls.has(s.url)) {
      merged.push(s);
      knownUrls.add(s.url);
    } else if (s?.type === 'portrait' && !merged.some((m) => m?.type === 'portrait')) {
      merged.unshift(s);
    }
  }
  if (JSON.stringify(merged) !== JSON.stringify(canonSources)) {
    patch.bio_sources = merged;
  }

  const canonNotable = Array.isArray(canon.notable_works) ? canon.notable_works : [];
  const dupeNotable = Array.isArray(dupe.notable_works) ? dupe.notable_works : [];
  if (canonNotable.length === 0 && dupeNotable.length > 0) {
    patch.notable_works = dupeNotable;
  }

  return patch;
}

async function main() {
  const rows = await fetchAllArtists();
  console.log(`Loaded ${rows.length} artists.`);

  const groups = await buildGroups(rows);
  console.log(`Found ${groups.length} candidate duplicate groups.`);

  // Drop groups where any member is an attribution variant (Workshop /
  // Circle of / Follower of) or an Anonymous-Master placeholder — those
  // are art-historical buckets that must stay distinct even though they
  // share a Q-ID.
  const filtered = groups.filter(
    (g) => !g.some((r) => isAttribution(r.name) || isAnonymousBucket(r.name)),
  );
  const droppedAnon = groups.filter((g) =>
    g.some((r) => isAnonymousBucket(r.name)),
  ).length;
  const droppedAttr =
    groups.length - filtered.length - droppedAnon;
  console.log(
    `${filtered.length} groups will be merged. (skipped ${droppedAttr} attribution; ${droppedAnon} anonymous-bucket).`,
  );

  // Count artworks per row for canonical selection.
  const counts = new Map();
  const allIds = new Set();
  for (const g of filtered) for (const r of g) allIds.add(r.id);
  for (const id of allIds) counts.set(id, await countArtworks(id));

  let totalDupes = 0;
  let totalArtworksMoved = 0;
  let totalDeleted = 0;
  let totalUpdated = 0;
  const skippedAttribution = groups.length - filtered.length;

  for (const g of filtered) {
    const canon = pickCanonical(g, counts);
    const dupes = g.filter((r) => r.id !== canon.id);
    totalDupes += dupes.length;

    console.log(`\n→ canonical: ${canon.slug} (${counts.get(canon.id)} works)`);
    for (const d of dupes) {
      console.log(`    dupe: ${d.slug} (${counts.get(d.id)} works)`);
    }

    if (!EXECUTE) continue;

    // Move artworks.
    for (const d of dupes) {
      const dupeCount = counts.get(d.id) ?? 0;
      if (dupeCount > 0) {
        const { error } = await sb
          .from('artworks')
          .update({ artist_id: canon.id })
          .eq('artist_id', d.id);
        if (error) {
          console.error(`    ✗ artwork move ${d.slug}: ${error.message}`);
          continue;
        }
        totalArtworksMoved += dupeCount;
      }

      // Merge bio fields if canonical is empty.
      const patch = mergePatch(canon, d);
      if (Object.keys(patch).length > 0) {
        const { error } = await sb
          .from('artists')
          .update(patch)
          .eq('id', canon.id);
        if (error) {
          console.error(`    ✗ canon update: ${error.message}`);
          continue;
        }
        // Reflect in local copy so subsequent dupes don't re-fill.
        Object.assign(canon, patch);
        totalUpdated++;
      }

      // Delete dupe row.
      const { error: delErr } = await sb
        .from('artists')
        .delete()
        .eq('id', d.id);
      if (delErr) {
        console.error(`    ✗ delete ${d.slug}: ${delErr.message}`);
        continue;
      }
      console.log(`    ✓ merged ${d.slug} → ${canon.slug}`);
      totalDeleted++;
    }
  }

  console.log(
    `\n${EXECUTE ? '' : '[dry-run] '}groups planned: ${filtered.length}; dupes: ${totalDupes}; ` +
      `attribution-variants kept separate: ${skippedAttribution}.`,
  );
  if (EXECUTE) {
    console.log(
      `Artworks reassigned: ${totalArtworksMoved}; rows deleted: ${totalDeleted}; canonical rows enriched: ${totalUpdated}.`,
    );
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
