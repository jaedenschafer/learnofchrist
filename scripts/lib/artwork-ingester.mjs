/**
 * Generalized artwork ingestion framework.
 *
 * Every ingest-*.mjs script does roughly the same five things:
 *   1. Upsert the artist row(s)
 *   2. Upsert the scene row(s) it touches
 *   3. Verify each source URL is reachable (Wikimedia: imageinfo API)
 *   4. Upsert artwork rows in batch
 *   5. Upsert artwork_scripture_refs and artwork_scenes joins
 *
 * Common pitfalls those scripts independently re-implement:
 *   • Conservative batch size to avoid PostgREST's 1MB request body cap
 *   • Idempotency on (source, external_id)
 *   • Skipping rows whose image URL doesn't resolve
 *   • Rate-limiting Wikimedia HEAD/imageinfo calls
 *   • Logging which rows got skipped, where, and why
 *
 * The ArtworkIngester class consolidates all of that. New source scripts
 * become roughly 50 lines: declare the source, return normalized rows from
 * an iterator, and run().
 *
 * Existing ingest-*.mjs scripts continue to work — adopt this incrementally.
 */

import { mkdirSync, appendFileSync } from 'node:fs';
import { resolve } from 'node:path';

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://uqcgieillyvefzmohzpn.supabase.co';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_SERVICE_KEY) {
  throw new Error('Missing SUPABASE_SERVICE_ROLE_KEY env var');
}

// ─── Supabase REST primitives ──────────────────────────────────────────

export async function sbRequest(method, path, body, prefer = 'return=representation,resolution=merge-duplicates') {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      apikey: SUPABASE_SERVICE_KEY,
      Authorization: `Bearer ${SUPABASE_SERVICE_KEY}`,
      Prefer: prefer,
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`${method} ${path} → ${res.status}: ${text}`);
  return text ? JSON.parse(text) : null;
}

export async function sbSelect(path) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    headers: { apikey: SUPABASE_SERVICE_KEY, Authorization: `Bearer ${SUPABASE_SERVICE_KEY}` },
  });
  if (!res.ok) throw new Error(`Select ${path} → ${res.status}: ${await res.text()}`);
  return res.json();
}

export async function sbUpsert(table, rows, onConflict) {
  if (rows.length === 0) return [];
  // Batch to stay under PostgREST's 1MB body cap. 100 is conservative
  // for artwork rows (each ~2KB serialized).
  const BATCH = 100;
  const out = [];
  for (let i = 0; i < rows.length; i += BATCH) {
    const slice = rows.slice(i, i + BATCH);
    const inserted = await sbRequest('POST', `${table}?on_conflict=${onConflict}`, slice);
    if (inserted) out.push(...inserted);
  }
  return out;
}

// ─── Wikimedia image-existence verifier ────────────────────────────────

/**
 * Check whether a Wikimedia Commons file actually exists.
 *
 * The `Special:FilePath` redirect always returns a 200-ish response (it
 * redirects to a placeholder image even when the file is missing), so HEAD
 * requests on it lie. The MediaWiki imageinfo API gives us the truth and
 * also returns the canonical URL plus dimensions — useful for skipping
 * Sharp's metadata read later.
 *
 * Returns { exists, url, width, height } or { exists: false }.
 *
 * Rate-limited: Wikimedia asks for ≤ 10 req/s with a real User-Agent.
 */
const WIKIMEDIA_USER_AGENT = 'LearnOfChrist-Ingester/1.0 (https://learnofchrist.com)';

export async function wikimediaImageInfo(filename) {
  const u = new URL('https://commons.wikimedia.org/w/api.php');
  u.searchParams.set('action', 'query');
  u.searchParams.set('prop', 'imageinfo');
  u.searchParams.set('iiprop', 'url|size|mime');
  u.searchParams.set('titles', `File:${filename}`);
  u.searchParams.set('format', 'json');
  u.searchParams.set('formatversion', '2');
  const res = await fetch(u, { headers: { 'User-Agent': WIKIMEDIA_USER_AGENT } });
  if (!res.ok) return { exists: false };
  const json = await res.json();
  const page = json?.query?.pages?.[0];
  if (!page || page.missing) return { exists: false };
  const info = page.imageinfo?.[0];
  if (!info?.url) return { exists: false };
  return {
    exists: true,
    url: info.url,
    width: info.width ?? null,
    height: info.height ?? null,
  };
}

// ─── ArtworkIngester base class ────────────────────────────────────────

/**
 * Subclasses provide:
 *
 *   source               string from the art_source enum
 *   getArtists()         → Array<{ slug, name, birth_year?, ..., wikipedia_url? }>
 *   getScenes()          → Array<{ slug, name, description? }>     (optional)
 *   getArtworks()        → AsyncIterable<RawArtwork>
 *   normalize(raw)       → NormalizedArtwork
 *
 * Where NormalizedArtwork has:
 *   { external_id, title, artist_slug, year, medium, source_url, image_url,
 *     thumbnail_url?, width?, height?, description?, license, license_note,
 *     scripture_refs: [{ book_slug, chapter, verse_start?, verse_end?, is_primary? }],
 *     scenes?: [scene_slug, ...] }
 *
 * Then call `await new MyIngester().run({ batchSize, dryRun, verify })`.
 */
export class ArtworkIngester {
  constructor() {
    if (!this.source) throw new Error('Subclass must set this.source');
    this.runId = new Date().toISOString().replace(/[:.]/g, '-');
    mkdirSync(resolve('scripts/.failures'), { recursive: true });
    this.failLog = resolve(`scripts/.failures/${this.source}-${this.runId}.jsonl`);
    this.stats = { fetched: 0, verified: 0, skipped: 0, upserted: 0, failed: 0 };
  }

  async run({ batchSize = 50, dryRun = false, verify = true } = {}) {
    console.log(`\n=== ${this.source} ingest (run ${this.runId}) ===`);

    // 1. Artists
    const artists = await this.getArtists();
    console.log(`→ Upserting ${artists.length} artist(s)`);
    if (!dryRun) await sbUpsert('artists', artists, 'slug');
    const artistRows = await sbSelect(
      `artists?select=id,slug&slug=in.(${artists.map((a) => a.slug).join(',')})`,
    );
    const artistIdBySlug = new Map(artistRows.map((a) => [a.slug, a.id]));

    // 2. Scenes
    const scenes = (await this.getScenes?.()) ?? [];
    if (scenes.length > 0) {
      console.log(`→ Upserting ${scenes.length} scene(s)`);
      if (!dryRun) await sbUpsert('scenes', scenes, 'slug');
    }
    const sceneRows = scenes.length
      ? await sbSelect(`scenes?select=id,slug&slug=in.(${scenes.map((s) => s.slug).join(',')})`)
      : [];
    const sceneIdBySlug = new Map(sceneRows.map((s) => [s.slug, s.id]));

    // 3. Books (we need ids for scripture refs).
    const bookRows = await sbSelect('books?select=id,slug');
    const bookIdBySlug = new Map(bookRows.map((b) => [b.slug, b.id]));

    // 4. Artworks — fetch + normalize + verify in batches.
    const verifiedArtworks = [];
    const refsByExternalId = new Map();
    const scenesByExternalId = new Map();

    for await (const raw of this.getArtworks()) {
      this.stats.fetched++;
      let normalized;
      try {
        normalized = await this.normalize(raw);
      } catch (err) {
        this.stats.failed++;
        this._logFailure(raw, err);
        continue;
      }

      if (verify && normalized.verifyAs === 'wikimedia') {
        const info = await wikimediaImageInfo(normalized.external_id);
        if (!info.exists) {
          this.stats.skipped++;
          console.warn(`  ✗ skipping (missing on Commons): ${normalized.external_id}`);
          continue;
        }
        normalized.image_url ??= info.url;
        normalized.width    ??= info.width;
        normalized.height   ??= info.height;
        // Polite throttle.
        await new Promise((r) => setTimeout(r, 100));
      }
      this.stats.verified++;

      const artistId = artistIdBySlug.get(normalized.artist_slug);
      if (!artistId) {
        this.stats.skipped++;
        console.warn(`  ✗ unknown artist slug: ${normalized.artist_slug}`);
        continue;
      }

      // Topic tags are stored in the existing `tags` text[] column with a
      // `topic:` prefix (see src/lib/supabase.ts encodeTopicTag). The
      // chapter-page resolver matches against these to fill themed
      // fallback slots when no chapter-specific plate is available.
      const topicTags = Array.isArray(normalized.topicTags)
        ? normalized.topicTags.map((t) => `topic:${t}`)
        : [];
      const extraTags = Array.isArray(normalized.tags) ? normalized.tags : [];
      const tags = [...extraTags, ...topicTags];

      verifiedArtworks.push({
        slug: normalized.external_id,
        title: normalized.title,
        artist_id: artistId,
        year: normalized.year ?? null,
        medium: normalized.medium ?? null,
        source: this.source,
        source_url: normalized.source_url ?? null,
        external_id: normalized.external_id,
        image_url: normalized.image_url,
        thumbnail_url: normalized.thumbnail_url ?? null,
        width: normalized.width ?? null,
        height: normalized.height ?? null,
        license: normalized.license ?? 'public_domain',
        license_note: normalized.license_note ?? null,
        description: normalized.description ?? null,
        status: 'published',
        tags: tags.length ? tags : null,
        // moderation_status defaults to 'pending' (see migration 021)
      });
      refsByExternalId.set(normalized.external_id, normalized.scripture_refs || []);
      scenesByExternalId.set(normalized.external_id, normalized.scenes || []);
    }

    if (verifiedArtworks.length === 0) {
      console.log('\nNothing to upsert.');
      this._summary();
      return;
    }

    // 5. Upsert artworks.
    console.log(`\n→ Upserting ${verifiedArtworks.length} artwork(s)`);
    let artworkRows = [];
    if (!dryRun) {
      // Batches because we want to stream progress for big imports.
      for (let i = 0; i < verifiedArtworks.length; i += batchSize) {
        const slice = verifiedArtworks.slice(i, i + batchSize);
        const inserted = await sbUpsert('artworks', slice, 'source,external_id');
        artworkRows.push(...inserted);
        process.stdout.write(`  [${Math.min(i + batchSize, verifiedArtworks.length)}/${verifiedArtworks.length}]\r`);
      }
      process.stdout.write('\n');
    } else {
      // In dry-run we still want to map external_id → id so refs/scenes
      // log accurately. Re-select existing rows; missing ones get a stub.
      const existing = await sbSelect(
        `artworks?select=id,external_id&source=eq.${this.source}` +
        `&external_id=in.(${verifiedArtworks.map((a) => encodeURIComponent(a.external_id)).join(',')})`,
      );
      artworkRows = existing.length
        ? existing
        : verifiedArtworks.map((a) => ({ id: '(dry-run)', external_id: a.external_id }));
    }
    this.stats.upserted = artworkRows.length;
    const artworkIdByExternalId = new Map(artworkRows.map((a) => [a.external_id, a.id]));

    // 6. Scripture refs.
    const scriptureRows = [];
    for (const a of verifiedArtworks) {
      const artworkId = artworkIdByExternalId.get(a.external_id);
      if (!artworkId) continue;
      for (const ref of refsByExternalId.get(a.external_id) ?? []) {
        const bookId = bookIdBySlug.get(ref.book_slug);
        if (!bookId) {
          console.warn(`  ! unknown book slug: ${ref.book_slug}`);
          continue;
        }
        scriptureRows.push({
          artwork_id: artworkId,
          book_id: bookId,
          chapter: ref.chapter,
          verse_start: ref.verse_start ?? null,
          verse_end: ref.verse_end ?? null,
          is_primary: ref.is_primary ?? false,
        });
      }
    }
    if (scriptureRows.length > 0) {
      console.log(`→ Upserting ${scriptureRows.length} scripture ref(s)`);
      if (!dryRun) {
        await sbUpsert(
          'artwork_scripture_refs',
          scriptureRows,
          'artwork_id,book_id,chapter,verse_start,verse_end',
        );
      }
    }

    // 7. Scene joins.
    const sceneJoins = [];
    for (const a of verifiedArtworks) {
      const artworkId = artworkIdByExternalId.get(a.external_id);
      if (!artworkId) continue;
      for (const sceneSlug of scenesByExternalId.get(a.external_id) ?? []) {
        const sceneId = sceneIdBySlug.get(sceneSlug);
        if (!sceneId) {
          console.warn(`  ! unknown scene slug: ${sceneSlug}`);
          continue;
        }
        sceneJoins.push({ artwork_id: artworkId, scene_id: sceneId });
      }
    }
    if (sceneJoins.length > 0) {
      console.log(`→ Upserting ${sceneJoins.length} scene join(s)`);
      if (!dryRun) await sbUpsert('artwork_scenes', sceneJoins, 'artwork_id,scene_id');
    }

    this._summary();
  }

  _logFailure(raw, err) {
    appendFileSync(this.failLog, JSON.stringify({ raw, error: String(err) }) + '\n');
  }

  _summary() {
    const s = this.stats;
    console.log(
      `\nDone. fetched=${s.fetched} verified=${s.verified} ` +
      `upserted=${s.upserted} skipped=${s.skipped} failed=${s.failed}`,
    );
    if (s.failed > 0) console.log(`Failures logged to ${this.failLog}`);
  }
}

/* ─── Tiny CLI helper for source scripts ─────────────────────────────── */

export function parseCli() {
  const args = process.argv.slice(2);
  return {
    dryRun: args.includes('--dry-run'),
    verify: !args.includes('--no-verify'),
    batchSize:
      args.includes('--batch')
        ? parseInt(args[args.indexOf('--batch') + 1], 10) || 50
        : 50,
    limit: args.includes('--limit')
      ? parseInt(args[args.indexOf('--limit') + 1], 10)
      : null,
  };
}
