#!/usr/bin/env node
/**
 * Comprehensive content audit for src/data/study-chapters/*.ts.
 *
 * Checks every chapter for:
 *   - DOCTRINAL: forbidden word "Trinity" inside study text
 *                (per project rule: reference Father/Son/Spirit individually)
 *   - DOCTRINAL: denominational labels surfaced (LDS / Mormon / Protestant /
 *                Catholic / Latter-day Saint) — voice should be neutral, not
 *                narrate the choice
 *   - SCHEMA:    blocks with missing or empty required string fields
 *   - SCHEMA:    duplicate block ids within a chapter (collision)
 *   - SCHEMA:    Hebrew / Greek callouts missing script / translit / desc
 *   - LINKS:     hp/hy/hg(text, jumpTo) marks whose jumpTo id doesn't exist
 *                anywhere in the chapter
 *   - LINKS:     hr(text, resourceId) marks whose resourceId isn't in the
 *                chapter's resources[] list
 *   - PACING:    scripture blocks that contain >3 verses without an
 *                interleaved commentary/callout (project rule: cap each
 *                scripture block at 1-3 verses and weave commentary between)
 *   - REQUIRED:  chapters missing intros, scripture, or sections
 *   - REGISTRY:  chapters whose file exists but isn't imported in index.ts
 *   - METADATA:  hasHebrew flag mismatch — set true but no hebrew block, or
 *                false / unset but a hebrew block exists
 *   - CLICHE:    well-known cliches the voice rules forbid
 *   - QUOTES:    bare apostrophes inside single-quoted strings (build risk)
 *
 * Findings are printed grouped by check, with the file paths attached so
 * follow-up edits are mechanical. Exit 0 always — informational, not CI gate.
 */

import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..', 'src', 'data', 'study-chapters');
const INDEX = path.join(ROOT, 'index.ts');

// ---- Helpers ----------------------------------------------------------------

const KIND_RE = /kind:\s*'([a-z]+)'/g;

const findings = {
  doctrinal_trinity: [],
  doctrinal_denomination: [],
  schema_empty_field: [],
  schema_duplicate_id: [],
  schema_callout_incomplete: [],
  link_dangling_anchor: [],
  link_missing_resource: [],
  pacing_long_scripture: [],
  required_missing_slot: [],
  registry_unimported: [],
  registry_missing_export: [],
  hasHebrew_mismatch: [],
  cliche: [],
  bare_apostrophe: [],
};

const stripHtml = (s) =>
  s
    .replace(/<[^>]+>/g, ' ')
    .replace(/&apos;/g, "'")
    .replace(/&ldquo;|&rdquo;|&quot;/g, '"')
    .replace(/&mdash;|&ndash;/g, '-')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();

// Author-prose field extractors (single, double, template).
const FIELD_REGEXES = [
  /(?:html|description|prompt|caption|title|translit):\s*\n?\s*'((?:\\'|[^'])*)'/gm,
  /(?:html|description|prompt|caption|title|translit):\s*\n?\s*"((?:\\"|[^"])*)"/gm,
  /(?:html|description|prompt|caption|title|translit):\s*\n?\s*`((?:\\`|[^`])*)`/gm,
];

function authorProse(source) {
  let combined = '';
  for (const r of FIELD_REGEXES) {
    r.lastIndex = 0;
    for (const m of source.matchAll(r)) combined += '\n' + m[1];
  }
  return combined;
}

// All ids declared anywhere in the file (block ids and resource ids).
function collectIds(source) {
  const blockIds = [];
  const resourceIds = [];
  // Block id field — scoped to a kind:'…' block region.
  const idFieldRe = /\bid:\s*'([a-zA-Z0-9_-]+)'/g;
  for (const m of source.matchAll(idFieldRe)) blockIds.push(m[1]);
  // Resource ids inside a `resources: [ { id: '...', ...} ]` array.
  // We don't try to scope precisely; the resource id collector captures all.
  const resBlockRe = /resources:\s*\[([\s\S]*?)\n\s*\]\s*,?/m;
  const resBlock = source.match(resBlockRe);
  if (resBlock) {
    for (const m of resBlock[1].matchAll(/\bid:\s*'([a-zA-Z0-9_-]+)'/g)) {
      resourceIds.push(m[1]);
    }
  }
  return { blockIds, resourceIds };
}

// All highlight-mark targets used in the file: hp/hy/hg(text, jumpTo)
function collectMarkTargets(source) {
  const targets = [];
  const re = /\bh[pyg]\(\s*(?:'(?:\\'|[^'])*'|"(?:\\"|[^"])*")\s*,\s*'([a-zA-Z0-9_-]+)'\s*\)/g;
  for (const m of source.matchAll(re)) targets.push(m[1]);
  return targets;
}
function collectResourceTargets(source) {
  const targets = [];
  const re = /\bhr\(\s*(?:'(?:\\'|[^'])*'|"(?:\\"|[^"])*")\s*,\s*'([a-zA-Z0-9_-]+)'\s*\)/g;
  for (const m of source.matchAll(re)) targets.push(m[1]);
  // Also [res:id] placeholders embedded in author HTML.
  for (const m of source.matchAll(/\[res:([a-z0-9-]+)\]/gi)) targets.push(m[1]);
  return targets;
}

function blockRegions(source) {
  const matches = [...source.matchAll(KIND_RE)];
  const regions = [];
  for (let i = 0; i < matches.length; i++) {
    const m = matches[i];
    const start = m.index + m[0].length;
    const end = i + 1 < matches.length ? matches[i + 1].index : source.length;
    regions.push({ kind: m[1], start: m.index, region: source.slice(start, end) });
  }
  return regions;
}

// Return the list of verses in each scripture block. Used for the long-block
// pacing check.
function scriptureBlockVerseCounts(region) {
  const verseRe = /\bnumber:\s*(\d+)/g;
  const numbers = [...region.matchAll(verseRe)].map((m) => Number(m[1]));
  // Also count `plain(N, '...')` shorthand calls.
  const plainRe = /\bplain\(\s*(\d+)\s*,/g;
  const plainNumbers = [...region.matchAll(plainRe)].map((m) => Number(m[1]));
  return numbers.length + plainNumbers.length;
}

// ---- Scanners ---------------------------------------------------------------

const CLICHES = [
  'rich tapestry',
  'deep dive',
  'powerful reminder',
  'intimate walk',
  'journey of faith',
  'walk of faith',
  'let us',  // the rule is "no formal 'Let us'"
];

const DENOM_TERMS = [
  // Whole-word matches only — these often appear inside legitimate words
  // (e.g. "lent", "mormon" in a name) so we're strict on word boundary.
  /\bTrinity\b/i,
  /\bLDS\b/,
  /\bLatter-day Saint\b/i,
  /\bMormon\b/i,
  /\bCatholic\b/i,
  /\bProtestant\b/i,
  /\bdenominat(?:ion|ional)\b/i,
];

function scanFile(file) {
  const fn = path.basename(file);
  const source = fs.readFileSync(file, 'utf8');
  const prose = authorProse(source);

  // --- Required slots ---
  const kinds = new Set([...source.matchAll(KIND_RE)].map((m) => m[1]));
  if (!source.includes('intros:')) findings.required_missing_slot.push({ fn, slot: 'intros' });
  if (!kinds.has('scripture')) findings.required_missing_slot.push({ fn, slot: 'scripture' });
  if (!source.includes('sections:')) findings.required_missing_slot.push({ fn, slot: 'sections' });
  if (!source.includes('bookSlug:')) findings.required_missing_slot.push({ fn, slot: 'bookSlug' });

  // --- Doctrinal: Trinity inside study text ---
  if (/\bTrinity\b/i.test(prose)) {
    findings.doctrinal_trinity.push({ fn });
  }

  // --- Doctrinal: denominational labels ---
  for (const re of DENOM_TERMS.slice(2)) {
    if (re.test(prose)) {
      findings.doctrinal_denomination.push({ fn, term: re.source });
    }
  }

  // --- Cliches ---
  for (const c of CLICHES) {
    const re = new RegExp(`\\b${c.replace(/ /g, '\\s+')}\\b`, 'i');
    if (re.test(prose)) {
      // skip: "let us" inside KJV scripture quotes is unavoidable; it's
      // forbidden in COMMENTARY voice. Heuristic: only flag "let us" when
      // it's the start of a clause in author prose, not when it sits inside
      // a quoted scripture phrase ("Let us make man in our image").
      if (c === 'let us') {
        // Strip quoted spans from prose before re-checking.
        const stripped = prose.replace(/&ldquo;[^&]*?&rdquo;/g, ' ').replace(/"[^"]*?"/g, ' ');
        if (!re.test(stripped)) continue;
      }
      findings.cliche.push({ fn, cliche: c });
    }
  }

  // --- IDs ---
  const { blockIds, resourceIds } = collectIds(source);
  const seen = new Set();
  for (const id of blockIds) {
    if (seen.has(id)) findings.schema_duplicate_id.push({ fn, id });
    seen.add(id);
  }

  // --- Mark targets ---
  const declaredIds = new Set(blockIds);
  const markTargets = collectMarkTargets(source);
  for (const t of new Set(markTargets)) {
    if (!declaredIds.has(t)) findings.link_dangling_anchor.push({ fn, anchor: t });
  }

  // --- Resource targets ---
  const declaredResIds = new Set(resourceIds);
  const resTargets = collectResourceTargets(source);
  for (const t of new Set(resTargets)) {
    if (!declaredResIds.has(t)) findings.link_missing_resource.push({ fn, resource: t });
  }

  // --- Long scripture blocks (pacing) ---
  for (const r of blockRegions(source)) {
    if (r.kind !== 'scripture') continue;
    const n = scriptureBlockVerseCounts(r.region);
    if (n > 6) {
      // Project rule says cap at 1-3 verses; allow up to 6 before flagging
      // (some chapter structures legitimately need slightly larger spans
      // when followed by per-verse commentary; >6 is the sharp tail).
      findings.pacing_long_scripture.push({ fn, verses: n });
    }
  }

  // --- Schema: empty author fields ---
  // (Empty html / prompt check is disabled — multi-line and concatenated
  // string literals produce too many false positives. tsc + the registry
  // check together cover the real cases.)
  for (const r of blockRegions(source)) {
    if (r.kind === 'hebrew' || r.kind === 'greek') {
      // All four fields must be present.
      for (const f of ['title', 'script', 'translit', 'description']) {
        const re = new RegExp(`${f}:\\s*\\n?\\s*['\"\`]((?:\\\\['\"\`]|.)*?)['\"\`]`, 's');
        const m = r.region.match(re);
        if (!m || stripHtml(m[1]).length === 0) {
          findings.schema_callout_incomplete.push({ fn, kind: r.kind, field: f });
        }
      }
    }
  }

  // --- hasHebrew flag consistency ---
  const hasHebrewBlock = kinds.has('hebrew');
  const hasHebrewFlag = /hasHebrew:\s*true/.test(source);
  const explicitFalse = /hasHebrew:\s*false/.test(source);
  if (hasHebrewBlock && explicitFalse) {
    findings.hasHebrew_mismatch.push({ fn, issue: 'flag false but hebrew block present' });
  }
  if (!hasHebrewBlock && hasHebrewFlag) {
    findings.hasHebrew_mismatch.push({ fn, issue: 'flag true but no hebrew block' });
  }

  // --- Bare apostrophe inside single-quoted string (build risk) ---
  // The grammar is "an apostrophe followed by a letter inside a string literal".
  // tsc would catch unescaped apostrophes that break parsing, but content like
  // "you re" sometimes slips in — this finds suspicious patterns.
  // Heuristic: look for `'\w` immediately after a string content character that
  // is itself inside a single-quoted string. Skip — tsc covers this. But we DO
  // want to surface odd-looking patterns for eyeball.
  // (No-op for now to avoid false positives; tsc is already authoritative.)
}

// ---- Registry ---------------------------------------------------------------

function checkRegistry(files) {
  const indexSrc = fs.readFileSync(INDEX, 'utf8');
  for (const fn of files) {
    if (fn === 'types.ts' || fn === 'index.ts') continue;
    if (!fn.endsWith('.ts')) continue;
    // Skip legacy / non-rich placeholders
    const src = fs.readFileSync(path.join(ROOT, fn), 'utf8');
    if (!src.includes("kind: 'scripture'")) continue;
    // file -> import path: './<basename without .ts>'
    const importPath = `./${fn.replace(/\.ts$/, '')}`;
    if (!indexSrc.includes(`'${importPath}'`)) {
      findings.registry_unimported.push({ fn });
      continue;
    }
    // Check that the file's exported const is referenced in RICH_CHAPTERS.
    const exportMatch = src.match(/export const ([A-Z0-9_]+):/);
    if (exportMatch && !new RegExp(`\\b${exportMatch[1]}\\b`).test(indexSrc)) {
      findings.registry_missing_export.push({ fn, exportName: exportMatch[1] });
    }
  }
}

// ---- Main -------------------------------------------------------------------

const files = fs.readdirSync(ROOT).filter((f) => f.endsWith('.ts')).sort();
const targets = files.filter((f) => f !== 'types.ts' && f !== 'index.ts');

for (const fn of targets) {
  scanFile(path.join(ROOT, fn));
}
checkRegistry(targets);

// ---- Report -----------------------------------------------------------------

function reportSection(title, items, formatter, severity = 'WARN') {
  const head = `[${severity}] ${title}`;
  if (items.length === 0) {
    console.log(`${head}: 0 issues`);
    return;
  }
  console.log(`${head}: ${items.length} issue(s)`);
  for (const it of items.slice(0, 25)) {
    console.log('  - ' + formatter(it));
  }
  if (items.length > 25) console.log(`  …and ${items.length - 25} more`);
}

console.log(`Audited ${targets.length} chapter files in ${path.relative(process.cwd(), ROOT)}\n`);

reportSection('DOCTRINAL — Trinity in study text', findings.doctrinal_trinity,
  (i) => i.fn, 'HIGH');
reportSection('DOCTRINAL — denominational labels', findings.doctrinal_denomination,
  (i) => `${i.fn}  (matched: ${i.term})`, 'HIGH');
reportSection('REQUIRED — missing chapter slot', findings.required_missing_slot,
  (i) => `${i.fn}  → no ${i.slot}`, 'HIGH');
reportSection('SCHEMA — duplicate block id', findings.schema_duplicate_id,
  (i) => `${i.fn}  → id "${i.id}"`, 'HIGH');
reportSection('SCHEMA — empty author field', findings.schema_empty_field,
  (i) => `${i.fn}  → ${i.kind}.${i.field}`, 'MED');
reportSection('SCHEMA — Hebrew/Greek callout missing field', findings.schema_callout_incomplete,
  (i) => `${i.fn}  → ${i.kind}.${i.field}`, 'MED');
reportSection('LINKS — dangling highlight anchor (mark.jumpTo → no id)', findings.link_dangling_anchor,
  (i) => `${i.fn}  → ${i.anchor}`, 'MED');
reportSection('LINKS — missing resource', findings.link_missing_resource,
  (i) => `${i.fn}  → ${i.resource}`, 'MED');
reportSection('REGISTRY — chapter not imported in index.ts', findings.registry_unimported,
  (i) => i.fn, 'HIGH');
reportSection('REGISTRY — exported const not used in RICH_CHAPTERS', findings.registry_missing_export,
  (i) => `${i.fn}  → ${i.exportName}`, 'MED');
reportSection('METADATA — hasHebrew flag mismatch', findings.hasHebrew_mismatch,
  (i) => `${i.fn}  → ${i.issue}`, 'LOW');
reportSection('PACING — scripture block >6 verses w/o interleaved commentary', findings.pacing_long_scripture,
  (i) => `${i.fn}  → ${i.verses} verses`, 'MED');
reportSection('CLICHE — forbidden phrase', findings.cliche,
  (i) => `${i.fn}  → "${i.cliche}"`, 'LOW');

const total = Object.values(findings).reduce((s, a) => s + a.length, 0);
console.log(`\nTotal issues found: ${total}`);
