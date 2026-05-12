/**
 * build-content-packs.ts
 * ──────────────────────────────────────────────────────────────────────────
 * Compiles the TS-authored chapter + study content into versioned JSON
 * packs for the iOS and Android apps.
 *
 *     dist/content/v1/
 *       manifest.json
 *       chapters/<book-slug>.json
 *
 * Each per-book pack contains every chapter for that book in the
 * RichChapterContent shape (hand-authored where it exists; auto-ported
 * from the legacy ChapterContent for everything else). Mobile clients
 * therefore get a uniform shape and never need to reimplement the
 * auto-port path.
 *
 * Run: `npm run content:build`
 *
 * Optional: pass `--upload` to push to Supabase Storage. Requires
 * SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY in env.
 */

import { createHash } from 'node:crypto';
import { mkdir, writeFile, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// Load .env.local so SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY are picked
// up when running with `--upload`. Resolved early so the imports below
// (which transitively touch supabase clients) see the same values.
import { config as loadEnv } from 'dotenv';
loadEnv({
  path: resolve(dirname(fileURLToPath(import.meta.url)), '..', '.env.local'),
});

import { bibleBooks, type BibleBook } from '../src/data/books';
import { getChapterContent } from '../src/data/chapter-content';
import { getRichChapter } from '../src/data/study-chapters';
import type {
  Block,
  RichChapterContent,
  RichSection,
} from '../src/data/study-chapters/types';
import { getFallbackCrossRefs } from '../src/data/study-chapters/cross-refs';

/**
 * Block kinds the iOS / Android decoders understand. Adding a new block
 * kind to the schema means teaching every native decoder to handle it
 * (see `ios/LearnOfChrist/Models/RichChapterContent.swift → Block`).
 * The build script warns whenever it serializes a kind outside this set
 * so we catch silent decoder drift at build time, not on a user's device.
 *
 * Keep alphabetised. Update this set in lock-step with the Swift enum.
 */
const SWIFT_KNOWN_BLOCK_KINDS: ReadonlySet<string> = new Set([
  'artwork',
  'carry',
  'christ',
  'commentary',
  'divider',
  'greek',
  'hebrew',
  'reflection',
  'scripture',
]);

/** Verse-span kinds the native decoders understand. Same lock-step rule. */
const SWIFT_KNOWN_SPAN_KINDS: ReadonlySet<string> = new Set([
  'mark',
  'resource',
  'text',
]);

/** Block kinds we've already warned about — once per build is plenty. */
const warnedBlockKinds = new Set<string>();
const warnedSpanKinds = new Set<string>();

const PACK_VERSION = 1;
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'dist', 'content', `v${PACK_VERSION}`);

interface ManifestEntry {
  path: string;       // relative to manifest, e.g. "chapters/genesis.json"
  hash: string;       // sha256 hex of the file body
  size: number;       // bytes
  book: string;       // 'genesis'
  book_name: string;  // 'Genesis'
  chapters: number;   // count of chapters with content in this pack
}

interface Manifest {
  pack_version: number;
  generated_at: string;
  generator: 'build-content-packs';
  entries: ManifestEntry[];
}

/* ─── Helpers ──────────────────────────────────────────────────────────── */

// Match the canonical web slug rule (BookGrid.tsx:10).
function bookSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/'/g, '');
}

function sha256(s: string): string {
  return createHash('sha256').update(s, 'utf8').digest('hex');
}

function formatBytes(n: number): string {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(2)} MB`;
}

/* ─── Serialization ────────────────────────────────────────────────────── */
// RichChapterContent contains RegExp objects in `Block.artwork.matchTitle`,
// `Block.artwork.matchArtist`, and (optionally) `opener.match*`. JSON.stringify
// silently drops them — convert to { pattern, flags } first.

function serializeRegExp(re: RegExp | undefined | null) {
  if (!re) return null;
  return { pattern: re.source, flags: re.flags };
}

function serializeBlock(b: Block, ctx: { bookSlug: string; chapter: number }): unknown {
  // Warn (once) on any block kind native decoders don't recognise yet.
  if (!SWIFT_KNOWN_BLOCK_KINDS.has(b.kind) && !warnedBlockKinds.has(b.kind)) {
    warnedBlockKinds.add(b.kind);
    process.stderr.write(
      `  ⚠ unknown block kind "${b.kind}" first seen at ${ctx.bookSlug}/${ctx.chapter}. ` +
      `Native decoders will fall back to .unknown — add it to SWIFT_KNOWN_BLOCK_KINDS ` +
      `here and to ios/LearnOfChrist/Models/RichChapterContent.swift → Block before shipping.\n`
    );
  }
  // Same warning, one level deeper, for verse-span kinds inside scripture
  // blocks. The Swift VerseSpan decoder falls back to plain text on
  // unknown kinds — silent loss of meaning, exactly what this warning
  // exists to prevent.
  if (b.kind === 'scripture') {
    for (const line of b.lines) {
      for (const span of line.spans) {
        if (!SWIFT_KNOWN_SPAN_KINDS.has(span.kind) && !warnedSpanKinds.has(span.kind)) {
          warnedSpanKinds.add(span.kind);
          process.stderr.write(
            `  ⚠ unknown verse-span kind "${span.kind}" first seen at ${ctx.bookSlug}/${ctx.chapter}:${line.number}. ` +
            `Native decoders will render it as plain text — add it to SWIFT_KNOWN_SPAN_KINDS ` +
            `here and to ios/LearnOfChrist/Models/RichChapterContent.swift → VerseSpan.\n`
          );
        }
      }
    }
  }

  if (b.kind === 'artwork') {
    return {
      ...b,
      matchTitle: serializeRegExp(b.matchTitle ?? null),
      matchArtist: serializeRegExp(b.matchArtist ?? null),
    };
  }
  return b;
}

/**
 * Resolve and bake per-section cross-refs into the pack so native clients
 * don't need to ship the fallback table. Mirrors the renderer logic at
 * `src/components/RichStudyGuide.tsx` (the `getFallbackCrossRefs` block):
 * curated section refs win, then the FIRST section without curated refs
 * inherits the chapter-level fallback pool, then subsequent sections
 * without curated refs stay empty (no repetition down the page).
 */
function bakeSectionCrossRefs(
  sections: RichSection[],
  bookSlug: string,
  chapter: number
): RichSection[] {
  const fallback = getFallbackCrossRefs(bookSlug, chapter);
  let fallbackUsed = false;
  return sections.map((s) => {
    if (s.crossRefs && s.crossRefs.length > 0) return s;
    if (!fallbackUsed && fallback.length > 0) {
      fallbackUsed = true;
      return { ...s, crossRefs: fallback };
    }
    return s;
  });
}

function serializeRich(rich: RichChapterContent) {
  const ctx = { bookSlug: rich.bookSlug, chapter: rich.chapter };
  const baked = bakeSectionCrossRefs(rich.sections, rich.bookSlug, rich.chapter);
  return {
    ...rich,
    opener: rich.opener
      ? {
          ...rich.opener,
          matchTitle: serializeRegExp(rich.opener.matchTitle ?? null),
          matchArtist: serializeRegExp(rich.opener.matchArtist ?? null),
        }
      : undefined,
    sections: baked.map((s) => ({
      ...s,
      blocks: s.blocks.map((b) => serializeBlock(b, ctx)),
    })),
  };
}

/* ─── Build ────────────────────────────────────────────────────────────── */

async function main() {
  const upload = process.argv.includes('--upload');

  await mkdir(join(OUT, 'chapters'), { recursive: true });

  const entries: ManifestEntry[] = [];
  let totalChapters = 0;
  let booksWithContent = 0;

  for (const book of bibleBooks as BibleBook[]) {
    const slug = bookSlug(book.name);
    const chapters: Record<number, ReturnType<typeof serializeRich>> = {};
    let chapterCount = 0;

    for (let ch = 1; ch <= book.chapters; ch++) {
      const legacy = getChapterContent(slug, ch);
      // getRichChapter returns hand-authored if registered, otherwise the
      // auto-port output if legacy exists, otherwise emptyChapter shell.
      const rich = getRichChapter(slug, book.name, ch, legacy, []);
      if (!rich) continue;

      // Skip empty shells (no real content) so the pack only carries
      // chapters worth shipping.
      const hasContent =
        Boolean(legacy) ||
        rich.intros.length > 0 ||
        rich.sections.length > 0;
      if (!hasContent) continue;

      chapters[ch] = serializeRich(rich);
      chapterCount += 1;
    }

    if (chapterCount === 0) continue;

    const payload = {
      book_slug: slug,
      book_name: book.name,
      pack_version: PACK_VERSION,
      generated_at: new Date().toISOString(),
      chapters,
    };
    const json = JSON.stringify(payload);
    const file = join(OUT, 'chapters', `${slug}.json`);
    await writeFile(file, json, 'utf8');

    const size = Buffer.byteLength(json, 'utf8');
    entries.push({
      path: `chapters/${slug}.json`,
      hash: sha256(json),
      size,
      book: slug,
      book_name: book.name,
      chapters: chapterCount,
    });
    totalChapters += chapterCount;
    booksWithContent += 1;
    process.stdout.write(
      `  ✓ chapters/${slug}.json — ${chapterCount} chapter${
        chapterCount === 1 ? '' : 's'
      } (${formatBytes(size)})\n`
    );
  }

  // ─── Manifest ───
  const manifest: Manifest = {
    pack_version: PACK_VERSION,
    generated_at: new Date().toISOString(),
    generator: 'build-content-packs',
    entries,
  };
  const manifestJson = JSON.stringify(manifest, null, 2);
  await writeFile(join(OUT, 'manifest.json'), manifestJson, 'utf8');

  const totalSize = entries.reduce((a, e) => a + e.size, 0);
  process.stdout.write(
    `\n  ✓ manifest.json — ${booksWithContent} books, ${totalChapters} chapters, ${formatBytes(
      totalSize
    )}\n`
  );

  if (upload) {
    await uploadAll(manifest);
  } else {
    process.stdout.write(
      `\n  Skipped upload. Pass --upload to push to Supabase Storage.\n`
    );
  }
}

/* ─── Optional upload ─────────────────────────────────────────────────── */

async function uploadAll(manifest: Manifest) {
  const url = process.env.SUPABASE_URL ?? process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error(
      'SUPABASE_URL (or NEXT_PUBLIC_SUPABASE_URL) + SUPABASE_SERVICE_ROLE_KEY required for --upload'
    );
  }

  const bucket = 'content';
  const prefix = `v${PACK_VERSION}`;

  for (const entry of manifest.entries) {
    const local = join(OUT, entry.path);
    const body = await readFile(local);
    const dest = `${prefix}/${entry.path}`;
    await uploadOne(url, key, bucket, dest, body);
    process.stdout.write(`  ↑ ${dest}\n`);
  }

  // manifest.json last so clients never see a partial deploy.
  const manifestPath = join(OUT, 'manifest.json');
  if (existsSync(manifestPath)) {
    await uploadOne(
      url,
      key,
      bucket,
      `${prefix}/manifest.json`,
      await readFile(manifestPath)
    );
    process.stdout.write(`  ↑ ${prefix}/manifest.json\n`);
  }
}

async function uploadOne(
  baseUrl: string,
  serviceKey: string,
  bucket: string,
  path: string,
  body: Buffer
) {
  const url = `${baseUrl}/storage/v1/object/${bucket}/${path}`;
  const resp = await fetch(url, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${serviceKey}`,
      apikey: serviceKey,
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=3600',
      'x-upsert': 'true',
    },
    body,
  });
  if (!resp.ok) {
    throw new Error(
      `upload failed ${resp.status} ${resp.statusText}: ${await resp.text()}`
    );
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
