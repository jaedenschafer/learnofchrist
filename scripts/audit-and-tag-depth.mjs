#!/usr/bin/env node
/**
 * Audit & tag chapter depth-tier estimated reading times.
 *
 * Walks every src/data/study-chapters/<book>-<n>.ts file, counts words per
 * block kind (using the same regex-based extraction the planning audit used),
 * computes the per-tier reading time under the default rule (see
 * defaultMinTier in types.ts), and writes the result into the chapter's
 * RichChapterContent as `estimatedMinutes: { 5, 10, 15 }`.
 *
 * Idempotent: re-running on a previously tagged file replaces the field.
 *
 * Run with: node scripts/audit-and-tag-depth.mjs
 *           node scripts/audit-and-tag-depth.mjs --check   (dry run, exits 1 if any file would change)
 *           node scripts/audit-and-tag-depth.mjs --report  (just print the table, don't write files)
 */

import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', 'src', 'data', 'study-chapters');

// Words-per-minute model. Devotional reading is slower than prose; KJV
// scripture is slightly slower than that; reflection prompts are think-time.
const WPM = { prose: 180, scripture: 200, reflection: 60 };

// Block-kind → default minTier (mirror of types.ts defaultMinTier).
const DEFAULT_MIN_TIER = {
  scripture: 5, christ: 5, carry: 5, divider: 5,
  commentary: 10,
  hebrew: 15, greek: 15, reflection: 15, artwork: 15,
};

const KIND_RE = /kind:\s*'([a-z]+)'/g;

function stripHtml(s) {
  return s
    .replace(/<[^>]+>/g, ' ')
    .replace(/&apos;/g, "'")
    .replace(/&ldquo;|&rdquo;|&quot;/g, '"')
    .replace(/&mdash;|&ndash;/g, '-')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

function wc(s) {
  const stripped = stripHtml(s);
  if (!stripped) return 0;
  return stripped.split(/\s+/).length;
}

// Field-extraction regexes for the prose-bearing fields on a block region.
const FIELD_REGEXES = [
  /(?:html|description|prompt|caption|title|translit):\s*\n?\s*'((?:\\'|[^'])*)'/gm,
  /(?:html|description|prompt|caption|title|translit):\s*\n?\s*"((?:\\"|[^"])*)"/gm,
  /(?:html|description|prompt|caption|title|translit):\s*\n?\s*`((?:\\`|[^`])*)`/gm,
];

const SCRIPTURE_REGEXES = [
  /\bt\(\s*'((?:\\'|[^'])*)'\s*\)/g,
  /\bt\(\s*"((?:\\"|[^"])*)"\s*\)/g,
  /\bh[pyg]\(\s*'((?:\\'|[^'])*)'/g,
  /\bh[pyg]\(\s*"((?:\\"|[^"])*)"/g,
  /\bhr\(\s*'((?:\\'|[^'])*)'/g,
  /\bhr\(\s*"((?:\\"|[^"])*)"/g,
];

function blockRegions(source) {
  const matches = [...source.matchAll(KIND_RE)];
  const regions = [];
  for (let i = 0; i < matches.length; i++) {
    const m = matches[i];
    const kind = m[1];
    const start = m.index + m[0].length;
    const end = i + 1 < matches.length ? matches[i + 1].index : source.length;
    regions.push({ kind, region: source.slice(start, end) });
  }
  return regions;
}

function countWordsForBlock(kind, region) {
  if (kind === 'divider') return 0;
  if (kind === 'scripture') {
    let n = 0;
    for (const r of SCRIPTURE_REGEXES) {
      r.lastIndex = 0;
      for (const m of region.matchAll(r)) n += wc(m[1]);
    }
    return n;
  }
  let n = 0;
  for (const r of FIELD_REGEXES) {
    r.lastIndex = 0;
    for (const m of region.matchAll(r)) n += wc(m[1]);
  }
  return n;
}

function introWords(source) {
  const m = source.match(/intros:\s*\[([\s\S]*?)\],\s*\n/);
  if (!m) return 0;
  const body = m[1];
  let n = 0;
  for (const r of [/'((?:\\'|[^'])*)'/g, /"((?:\\"|[^"])*)"/g, /`((?:\\`|[^`])*)`/g]) {
    for (const x of body.matchAll(r)) n += wc(x[1]);
  }
  return n;
}

function tierMinutes(words) {
  // words: { scripture, christ, carry, commentary, hebrew, greek, reflection,
  //          artwork, intros }
  const minsAt = (kindList, introCap) => {
    let m = 0;
    for (const k of kindList) {
      const w = words[k] || 0;
      if (k === 'scripture') m += w / WPM.scripture;
      else if (k === 'reflection') m += w / WPM.reflection;
      else m += w / WPM.prose;
    }
    // Intros: at tier 5 we render only the first intro (~half on average).
    const introWords = words.intros || 0;
    if (introCap === 'half') m += Math.min(introWords / 2, 90) / WPM.prose;
    else m += introWords / WPM.prose;
    return m;
  };

  const five    = minsAt(['scripture', 'christ', 'carry'], 'half');
  const ten     = minsAt(['scripture', 'christ', 'carry', 'commentary'], 'full');
  const fifteen = minsAt(['scripture', 'christ', 'carry', 'commentary', 'hebrew', 'greek', 'reflection', 'artwork'], 'full');

  // Round to whole minutes; floor of 1 because "0 min" reads as broken.
  const round = (m) => Math.max(1, Math.round(m));
  return { 5: round(five), 10: round(ten), 15: round(fifteen) };
}

// Insert / replace `estimatedMinutes: { 5: X, 10: Y, 15: Z },` immediately
// after the `chapter: N,` line. Idempotent — re-running on a tagged file
// preserves surrounding blank lines and produces a byte-identical output if
// nothing has changed.
function rewriteWithEstimates(source, est) {
  const newLine = `  estimatedMinutes: { 5: ${est[5]}, 10: ${est[10]}, 15: ${est[15]} },`;

  // Match ONLY the existing tagged line (anchored on its own line, without
  // consuming surrounding blank lines).
  const existingRe = /^[ \t]*estimatedMinutes:\s*\{[^}]*\},[ \t]*$/m;
  if (existingRe.test(source)) {
    return source.replace(existingRe, newLine);
  }

  // First-time insert: place the line on its own row right after
  // `chapter: <n>,` plus a blank line above for breathing room.
  const chapterRe = /^([ \t]*chapter:\s*\d+,[ \t]*)\n/m;
  if (chapterRe.test(source)) {
    return source.replace(chapterRe, (_m, p1) => `${p1}\n\n${newLine}\n`);
  }

  // Fallback: insert just before the final `};`.
  return source.replace(/(\n\};\s*)$/, `\n${newLine}\n};\n`);
}

function processFile(filePath, mode) {
  const source = fs.readFileSync(filePath, 'utf8');
  // Skip non-rich placeholder/legacy chapters (no scripture block).
  if (!source.includes("kind: 'scripture'")) {
    return { skipped: true };
  }

  const words = { intros: introWords(source) };
  for (const { kind, region } of blockRegions(source)) {
    if (!Object.prototype.hasOwnProperty.call(words, kind)) words[kind] = 0;
    words[kind] += countWordsForBlock(kind, region);
  }

  const est = tierMinutes(words);

  if (mode === 'report') return { skipped: false, est, words };

  const next = rewriteWithEstimates(source, est);
  const changed = next !== source;
  if (changed && mode !== 'check') {
    fs.writeFileSync(filePath, next);
  }
  return { skipped: false, est, words, changed };
}

function main() {
  const args = new Set(process.argv.slice(2));
  const mode = args.has('--check') ? 'check' : args.has('--report') ? 'report' : 'write';

  const files = fs
    .readdirSync(ROOT)
    .filter((f) => f.endsWith('.ts') && f !== 'types.ts' && f !== 'index.ts')
    .sort();

  let processed = 0;
  let changed = 0;
  let skipped = 0;
  const buckets = { 5: [], 10: [], 15: [] };
  const wouldChange = [];

  for (const fn of files) {
    const result = processFile(path.join(ROOT, fn), mode);
    if (result.skipped) { skipped++; continue; }
    processed++;
    buckets[5].push(result.est[5]);
    buckets[10].push(result.est[10]);
    buckets[15].push(result.est[15]);
    if (result.changed) {
      changed++;
      wouldChange.push(fn);
    }
  }

  const median = (arr) => {
    const s = [...arr].sort((a, b) => a - b);
    return s[Math.floor(s.length / 2)];
  };
  const mean = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
  const max = (arr) => arr.reduce((a, b) => (b > a ? b : a), 0);

  console.log(`Rich chapters: ${processed}  ·  skipped (legacy): ${skipped}`);
  console.log('');
  console.log('Estimated minutes per tier across all rich chapters:');
  for (const t of [5, 10, 15]) {
    console.log(
      `  tier ${String(t).padStart(2)}  median=${median(buckets[t])}  mean=${mean(buckets[t]).toFixed(1)}  max=${max(buckets[t])}`,
    );
  }

  if (mode === 'check') {
    console.log('');
    console.log(`--check: ${changed} file(s) would change.`);
    if (changed > 0) {
      for (const fn of wouldChange.slice(0, 10)) console.log(`  ${fn}`);
      if (wouldChange.length > 10) console.log(`  …and ${wouldChange.length - 10} more`);
      process.exit(1);
    }
  } else if (mode === 'write') {
    console.log('');
    console.log(`Wrote estimatedMinutes to ${changed} file(s).`);
  }
}

main();
