/**
 * build-content-packs.ts
 * ──────────────────────────────────────────────────────────────────────────
 * Compiles the TS-authored study/chapter content into versioned JSON packs
 * for the iOS and Android apps. Pack layout:
 *
 *     dist/content/v1/
 *       manifest.json
 *       chapters/<book-slug>.json     (legacy ChapterContent shape)
 *       study/<book-slug>-<chap>.json (RichChapterContent — hand-authored only)
 *
 * Web stays on the in-bundle imports for now. The mobile clients
 * download these packs at first launch and check `manifest.json` on
 * subsequent launches to pull deltas.
 *
 * Run: `npx tsx scripts/build-content-packs.ts`
 *
 * Optional: pass `--upload` to push to Supabase Storage. Requires
 * SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY in env.
 */

import { createHash } from 'node:crypto';
import { mkdir, writeFile, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { CHAPTERS, type ChapterContent } from '../src/data/chapter-content';
import { RICH_CHAPTERS } from '../src/data/study-chapters';
import type {
  Block,
  RichChapterContent,
  RichSection,
} from '../src/data/study-chapters/types';

// Inlined here (rather than importing from src/lib/chapterContent.ts)
// because that module pulls in `@/lib/supabase` and would force a full
// Next.js path-alias setup just to compile this script.
function serializeRegExp(re: RegExp | undefined | null) {
  if (!re) return null;
  return { pattern: re.source, flags: re.flags };
}

const PACK_VERSION = 1;
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'dist', 'content', `v${PACK_VERSION}`);

interface ManifestEntry {
  path: string; // relative to manifest, e.g. "chapters/genesis.json"
  hash: string; // sha256 hex
  size: number; // bytes
  type: 'chapters' | 'study';
  book: string;
  chapter?: number;
}

interface Manifest {
  pack_version: number;
  generated_at: string;
  generator: 'build-content-packs';
  entries: ManifestEntry[];
}

async function main() {
  const upload = process.argv.includes('--upload');

  await mkdir(join(OUT, 'chapters'), { recursive: true });
  await mkdir(join(OUT, 'study'), { recursive: true });

  const entries: ManifestEntry[] = [];

  // ─── 1. Per-book legacy chapter packs ───
  // CHAPTERS is keyed by `${bookSlug}-${chapter}`. Group by book.
  const byBook = new Map<string, Record<number, ChapterContent>>();
  for (const [key, content] of Object.entries(CHAPTERS)) {
    const m = key.match(/^(.+)-(\d+)$/);
    if (!m) continue;
    const [, book, chapStr] = m;
    const chap = parseInt(chapStr, 10);
    const bucket = byBook.get(book) ?? {};
    bucket[chap] = content;
    byBook.set(book, bucket);
  }

  for (const [book, chapters] of byBook) {
    const file = join(OUT, 'chapters', `${book}.json`);
    const payload = {
      book_slug: book,
      pack_version: PACK_VERSION,
      generated_at: new Date().toISOString(),
      chapters,
    };
    const json = JSON.stringify(payload, null, 0);
    await writeFile(file, json, 'utf8');
    entries.push({
      path: `chapters/${book}.json`,
      hash: sha256(json),
      size: Buffer.byteLength(json, 'utf8'),
      type: 'chapters',
      book,
    });
    process.stdout.write(`  ✓ chapters/${book}.json (${formatBytes(json.length)})\n`);
  }

  // ─── 2. Rich (hand-authored) study packs ───
  // RICH_CHAPTERS is keyed by `${bookSlug}-${chapter}`. One file per
  // chapter so the iOS app can lazy-load only what the user opens.
  for (const [key, rich] of Object.entries(RICH_CHAPTERS)) {
    const m = key.match(/^(.+)-(\d+)$/);
    if (!m) continue;
    const [, book, chapStr] = m;
    const chap = parseInt(chapStr, 10);

    const serialized = serializeRich(rich);
    const file = join(OUT, 'study', `${book}-${chap}.json`);
    const json = JSON.stringify(serialized, null, 0);
    await writeFile(file, json, 'utf8');
    entries.push({
      path: `study/${book}-${chap}.json`,
      hash: sha256(json),
      size: Buffer.byteLength(json, 'utf8'),
      type: 'study',
      book,
      chapter: chap,
    });
    process.stdout.write(`  ✓ study/${book}-${chap}.json (${formatBytes(json.length)})\n`);
  }

  // ─── 3. Manifest ───
  const manifest: Manifest = {
    pack_version: PACK_VERSION,
    generated_at: new Date().toISOString(),
    generator: 'build-content-packs',
    entries,
  };
  const manifestJson = JSON.stringify(manifest, null, 2);
  await writeFile(join(OUT, 'manifest.json'), manifestJson, 'utf8');
  process.stdout.write(
    `\n  ✓ manifest.json — ${entries.length} packs, total ${formatBytes(
      entries.reduce((a, e) => a + e.size, 0)
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

/* ─── Serialization ────────────────────────────────────────────────────── */

function serializeRich(rich: RichChapterContent) {
  // RegExp objects in Block.artwork and rich.opener can't survive JSON.
  // Convert to { pattern, flags } using the same helper the web uses.
  const sections: RichSection[] = rich.sections.map((s) => ({
    ...s,
    blocks: s.blocks.map((b) => serializeBlock(b)),
  }));
  return {
    ...rich,
    opener: rich.opener
      ? {
          ...rich.opener,
          matchTitle: serializeRegExp(rich.opener.matchTitle ?? null),
          matchArtist: serializeRegExp(rich.opener.matchArtist ?? null),
        }
      : undefined,
    sections,
  };
}

function serializeBlock(b: Block): unknown {
  if (b.kind === 'artwork') {
    return {
      ...b,
      matchTitle: serializeRegExp(b.matchTitle ?? null),
      matchArtist: serializeRegExp(b.matchArtist ?? null),
    };
  }
  return b;
}

/* ─── Hash + bytes helpers ────────────────────────────────────────────── */

function sha256(s: string): string {
  return createHash('sha256').update(s, 'utf8').digest('hex');
}

function formatBytes(n: number): string {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(2)} MB`;
}

/* ─── Optional upload ─────────────────────────────────────────────────── */

async function uploadAll(manifest: Manifest) {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error('SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY required for --upload');
  }

  // Minimal storage upload via REST (avoids adding @supabase/supabase-js
  // to the script's dependency surface — the project already has it,
  // but keeping the script minimal is nicer when running via tsx).
  const bucket = 'content';
  const prefix = `v${PACK_VERSION}`;

  for (const entry of manifest.entries) {
    const local = join(OUT, entry.path);
    const body = await readFile(local);
    const dest = `${prefix}/${entry.path}`;
    await uploadOne(url, key, bucket, dest, body);
    process.stdout.write(`  ↑ ${dest}\n`);
  }

  // manifest.json last so clients never see a partial deploy
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
