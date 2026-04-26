#!/usr/bin/env node
/**
 * Bulk-ingest every public-domain image in a Wikimedia Commons category.
 *
 * Built on scripts/lib/artwork-ingester.mjs — this is the worked example
 * for the Phase-1 framework. New images land at moderation_status='pending'
 * and need to be approved at /admin/artwork-moderation before they show.
 *
 * The Wikimedia API streams members 500 at a time; we follow continuations
 * automatically. Each member is fetched via imageinfo to confirm existence
 * and get the canonical URL + dimensions. Verified rows go through the
 * standard ArtworkIngester upsert path.
 *
 * Caveats:
 *   • Title-only metadata. Era, characters, themes, scripture refs are
 *     left blank — backfill-metadata.mjs fills them from the title later,
 *     and the moderation queue is where you assign canonical scripture
 *     refs. (Or attach them via --refs-from <book-slug>:<chapter> for a
 *     single-target run, e.g. crucifixion → john:19.)
 *   • Artist attribution comes from the source — we don't try to infer.
 *     Pass --artist-slug <slug> to attach to one artist for the whole run.
 *
 * Usage:
 *   SUPABASE_SERVICE_ROLE_KEY=... node scripts/ingest-wikimedia-category.mjs \
 *     --category "Paintings of the Crucifixion of Jesus Christ" \
 *     --artist-slug unknown \
 *     --refs-from john:19 \
 *     --limit 200
 *
 *   --dry-run         Don't upsert; print what would be inserted.
 *   --no-verify       Skip the per-file imageinfo check (faster, less safe).
 *   --batch <N>       Upsert batch size, default 50.
 */

import { ArtworkIngester, parseCli } from './lib/artwork-ingester.mjs';

const cli = parseCli();
const args = process.argv.slice(2);

function flag(name) {
  const i = args.indexOf(`--${name}`);
  return i >= 0 ? args[i + 1] : null;
}

const CATEGORY = flag('category');
const ARTIST_SLUG = flag('artist-slug') || 'unknown';
const ARTIST_NAME = flag('artist-name') || 'Unknown';
const REFS_FROM = flag('refs-from'); // e.g. "john:19" or "matthew:5:1-12"

if (!CATEGORY) {
  console.error('Required: --category "Wikimedia Category Name"');
  process.exit(1);
}

// Parse --refs-from into a single primary scripture_ref for every row.
function parseRefs(s) {
  if (!s) return [];
  // Forms: "john:19", "john:19:30", "john:19:25-27"
  const [book_slug, chapter, range] = s.split(':');
  if (!book_slug || !chapter) return [];
  let verse_start = null, verse_end = null;
  if (range) {
    const [a, b] = range.split('-').map((n) => parseInt(n, 10));
    verse_start = Number.isFinite(a) ? a : null;
    verse_end   = Number.isFinite(b) ? b : verse_start;
  }
  return [{
    book_slug,
    chapter: parseInt(chapter, 10),
    verse_start,
    verse_end,
    is_primary: true,
  }];
}
const DEFAULT_REFS = parseRefs(REFS_FROM);

class WikimediaCategoryIngester extends ArtworkIngester {
  constructor() {
    super();
    this.source = 'wikimedia';
  }

  async getArtists() {
    return [{
      slug: ARTIST_SLUG,
      name: ARTIST_NAME,
      birth_year: null,
      death_year: null,
      nationality: null,
      bio: null,
      wikipedia_url: null,
    }];
  }

  async getScenes() { return []; }

  async *getArtworks() {
    let cmcontinue = null;
    let yielded = 0;
    while (true) {
      const u = new URL('https://commons.wikimedia.org/w/api.php');
      u.searchParams.set('action', 'query');
      u.searchParams.set('list', 'categorymembers');
      u.searchParams.set('cmtitle', `Category:${CATEGORY}`);
      u.searchParams.set('cmtype', 'file');
      u.searchParams.set('cmlimit', '500');
      u.searchParams.set('format', 'json');
      u.searchParams.set('formatversion', '2');
      if (cmcontinue) u.searchParams.set('cmcontinue', cmcontinue);

      const res = await fetch(u, {
        headers: { 'User-Agent': 'LearnOfChrist-Ingester/1.0 (https://learnofchrist.com)' },
      });
      if (!res.ok) throw new Error(`Wikimedia API ${res.status}: ${await res.text()}`);
      const json = await res.json();
      const members = json?.query?.categorymembers ?? [];
      for (const m of members) {
        if (cli.limit && yielded >= cli.limit) return;
        // Strip "File:" prefix; that's our external_id.
        const filename = m.title.replace(/^File:/, '');
        // Filter out obviously non-image files (PDFs, OGV, etc.).
        if (!/\.(jpe?g|png|tiff?|gif|webp|svg)$/i.test(filename)) continue;
        yielded++;
        yield { filename, title: humanizeFilename(filename), pageid: m.pageid };
      }
      if (!json?.continue?.cmcontinue) return;
      cmcontinue = json.continue.cmcontinue;
    }
  }

  async normalize(raw) {
    return {
      external_id: raw.filename,
      title: raw.title,
      artist_slug: ARTIST_SLUG,
      year: null,
      medium: null,
      source_url: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(raw.filename).replace(/%20/g, '_')}`,
      // image_url + width/height are filled in by the verify step below.
      image_url: `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(raw.filename)}`,
      verifyAs: 'wikimedia',
      license: 'public_domain',
      license_note: `Public domain via Wikimedia Commons. Source: Category:${CATEGORY}.`,
      description: null,
      scripture_refs: DEFAULT_REFS,
      scenes: [],
    };
  }
}

function humanizeFilename(filename) {
  // "Caravaggio_-_The_Crucifixion_of_Saint_Peter_-_WGA04135.jpg"
  //   → "Caravaggio - The Crucifixion of Saint Peter - WGA04135"
  return filename
    .replace(/\.[a-z]+$/i, '')
    .replace(/_/g, ' ')
    .trim();
}

console.log(`Category: ${CATEGORY}`);
console.log(`Artist  : ${ARTIST_SLUG} (${ARTIST_NAME})`);
console.log(`Refs    : ${REFS_FROM || '(none)'}`);
console.log(`Mode    : ${cli.dryRun ? 'dry-run' : 'live'}, verify=${cli.verify}, limit=${cli.limit ?? 'all'}`);

await new WikimediaCategoryIngester().run({
  batchSize: cli.batchSize,
  dryRun: cli.dryRun,
  verify: cli.verify,
});
