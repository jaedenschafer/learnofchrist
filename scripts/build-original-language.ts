/**
 * build-original-language.ts
 * ──────────────────────────────────────────────────────────────────────────
 * Walks every hand-authored rich study chapter under
 * `src/data/study-chapters/` and extracts every `kind: 'hebrew'` block
 * (which also covers Greek — the script field's Unicode range is the
 * giveaway). Emits a flat, sorted, frozen array at
 * `src/data/derived/original-language.ts` for both web and iOS to read
 * the day-rotating "Word of the Day" Hebrew/Greek card from a real
 * corpus instead of a tiny hardcoded set.
 *
 *   Run:  npm run build:original-language
 *
 * The output file IS checked into git so Vercel deploys don't have to
 * re-run this — re-run it whenever a chapter file with new hebrew/greek
 * blocks lands.
 */
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { RICH_CHAPTER_KEYS } from '../src/data/study-chapters/index';
import type { Block, RichChapterContent } from '../src/data/study-chapters/types';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT_DIR = resolve(ROOT, 'src', 'data', 'derived');
const OUT_FILE = resolve(OUT_DIR, 'original-language.ts');

/**
 * The flat shape the runtime consumers (web + iOS) see. Mirrors the
 * Swift `RemoteHebrewWord` decoder. Keep these field names stable.
 */
interface OriginalLanguageEntry {
  id: string;
  /** Native script — Hebrew with niqqud or Greek with breathing/accents. */
  script: string;
  /** Raw author HTML, e.g. '<strong>tehom</strong> · the primeval …'. */
  translit: string;
  /** Raw author HTML, e.g. 'Tehom - &ldquo;the deep&rdquo;'. */
  title: string;
  description: string;
  bookSlug: string;
  chapter: number;
  /** Coarse classifier from the script's Unicode block. */
  language: 'hebrew' | 'greek';
}

/* ─── Script-language detection ──────────────────────────────────────────
 *
 * Authors store BOTH Hebrew and Greek words under `kind: 'hebrew'`. We
 * tell them apart by counting characters in each language's Unicode
 * block; whichever block has more letters wins.
 *
 *   Hebrew block:  U+0590 – U+05FF
 *   Greek block:   U+0370 – U+03FF (incl. extended U+1F00 – U+1FFF)
 */
function isHebrewScript(script: string): boolean {
  let hebrew = 0;
  let greek = 0;
  for (const ch of script) {
    const cp = ch.codePointAt(0) ?? 0;
    if (cp >= 0x0590 && cp <= 0x05ff) hebrew += 1;
    else if (cp >= 0x0370 && cp <= 0x03ff) greek += 1;
    else if (cp >= 0x1f00 && cp <= 0x1fff) greek += 1;
  }
  return hebrew >= greek;
}

/** Dynamic-import a single chapter module by its `<bookSlug>/<chapter>`
 *  key. Mirrors the `loadRichChapter` logic in
 *  `src/data/study-chapters/index.ts` but goes file-direct so we never
 *  touch the legacy Supabase-backed `getRichChapter` path. */
async function loadChapter(
  key: string,
): Promise<RichChapterContent | null> {
  const [bookSlug, chapterStr] = key.split('/');
  if (!bookSlug || !chapterStr) return null;
  // Use an absolute file URL so the import works regardless of cwd; tsx
  // resolves the .ts source directly.
  const modulePath = resolve(
    ROOT,
    'src',
    'data',
    'study-chapters',
    `${bookSlug}-${chapterStr}.ts`,
  );
  try {
    const mod = (await import(modulePath)) as Record<string, unknown>;
    const candidate =
      (mod.default as RichChapterContent | undefined) ??
      (Object.values(mod).find(
        (v): v is RichChapterContent =>
          Boolean(v) &&
          typeof v === 'object' &&
          v !== null &&
          'bookSlug' in (v as object) &&
          'sections' in (v as object),
      ) as RichChapterContent | undefined);
    return candidate ?? null;
  } catch (err) {
    process.stderr.write(`  ! could not load ${key}: ${(err as Error).message}\n`);
    return null;
  }
}

/** Walk a chapter and pull every block where the author called out a
 *  Hebrew/Greek word. Gracefully skips malformed blocks (missing
 *  `script`/`translit`/`title`/`description`). */
function extractWordsFromChapter(
  chapter: RichChapterContent,
  key: string,
): OriginalLanguageEntry[] {
  const [bookSlug, chapterStr] = key.split('/');
  const chapterNum = parseInt(chapterStr ?? '0', 10);
  const out: OriginalLanguageEntry[] = [];

  for (const section of chapter.sections ?? []) {
    for (const block of section.blocks ?? []) {
      if (block.kind !== 'hebrew' && block.kind !== 'greek') continue;
      const b = block as Extract<Block, { kind: 'hebrew' | 'greek' }>;
      // Skip if any field is missing/empty — authors occasionally leave
      // a stub `hebrew` block while drafting.
      if (
        typeof b.script !== 'string' || b.script.trim().length === 0 ||
        typeof b.translit !== 'string' || b.translit.trim().length === 0 ||
        typeof b.title !== 'string' || b.title.trim().length === 0 ||
        typeof b.description !== 'string' || b.description.trim().length === 0 ||
        typeof b.id !== 'string' || b.id.trim().length === 0
      ) {
        continue;
      }
      out.push({
        id: b.id,
        script: b.script,
        translit: b.translit,
        title: b.title,
        description: b.description,
        bookSlug: bookSlug ?? '',
        chapter: chapterNum,
        language: b.kind === 'greek' || !isHebrewScript(b.script) ? 'greek' : 'hebrew',
      });
    }
  }
  return out;
}

/** Sort key — same for every run, so the derived file diffs cleanly. */
function sortKey(e: OriginalLanguageEntry): string {
  // Pad the chapter so '2' sorts before '10' inside a book.
  return `${e.bookSlug}/${String(e.chapter).padStart(4, '0')}/${e.id}`;
}

async function main(): Promise<void> {
  const keys = [...RICH_CHAPTER_KEYS];
  process.stdout.write(`Scanning ${keys.length} hand-authored chapters…\n`);

  const all: OriginalLanguageEntry[] = [];
  let chaptersWithWords = 0;
  let missing = 0;

  for (const key of keys) {
    const chapter = await loadChapter(key);
    if (!chapter) {
      missing += 1;
      continue;
    }
    const words = extractWordsFromChapter(chapter, key);
    if (words.length > 0) chaptersWithWords += 1;
    all.push(...words);
  }

  all.sort((a, b) => (sortKey(a) < sortKey(b) ? -1 : sortKey(a) > sortKey(b) ? 1 : 0));

  // De-dupe on id+bookSlug+chapter — a single author sometimes copy-
  // pastes the same Hebrew block id across two adjacent chapters.
  const seen = new Set<string>();
  const deduped: OriginalLanguageEntry[] = [];
  for (const e of all) {
    const k = `${e.bookSlug}/${e.chapter}/${e.id}`;
    if (seen.has(k)) continue;
    seen.add(k);
    deduped.push(e);
  }

  const hebrewCount = deduped.filter((e) => e.language === 'hebrew').length;
  const greekCount = deduped.filter((e) => e.language === 'greek').length;

  await mkdir(OUT_DIR, { recursive: true });

  const header = [
    '// AUTO-GENERATED — do not edit; run `npm run build:original-language` to regenerate.',
    '//',
    '// Source: every `kind: \'hebrew\'` / `kind: \'greek\'` callout block under',
    '// src/data/study-chapters/. The day-rotating "Word of the Day" card on the',
    '// iOS home screen and the matching web component both read from this list.',
    `// Generated at: ${new Date().toISOString()}`,
    `// Entries: ${deduped.length} (${hebrewCount} Hebrew, ${greekCount} Greek)`,
    '',
    'export interface OriginalLanguageWord {',
    '  id: string;',
    '  script: string;',
    '  translit: string;',
    '  title: string;',
    '  description: string;',
    '  bookSlug: string;',
    '  chapter: number;',
    '  language: "hebrew" | "greek";',
    '}',
    '',
    'export const ORIGINAL_LANGUAGE_WORDS: readonly OriginalLanguageWord[] = Object.freeze(',
  ].join('\n');

  const body = JSON.stringify(deduped, null, 2);
  const footer = ');\n';

  await writeFile(OUT_FILE, `${header}${body}${footer}`, 'utf8');

  process.stdout.write(
    `\n✓ Wrote ${deduped.length} entries (${hebrewCount} Hebrew, ${greekCount} Greek) ` +
      `from ${chaptersWithWords} chapters → ${OUT_FILE.replace(ROOT + '/', '')}\n`,
  );
  if (missing > 0) {
    process.stdout.write(`  (${missing} chapter file(s) listed in RICH_CHAPTER_KEYS could not be loaded)\n`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
