#!/usr/bin/env node
/**
 * Surgically split a long scripture block in a chapter file.
 *
 * Usage:
 *   node scripts/split-block.mjs <file> <splitAfterVerse> <commentaryId> <commentaryHtml>
 *
 * The script finds the scripture block whose `lines:` array contains
 * `splitAfterVerse`, locates the closing `},` of that verse object, and
 * replaces it with:
 *
 *     },
 *   ],
 * },
 * {
 *   kind: 'commentary',
 *   id: '<commentaryId>',
 *   html:
 *     '<commentaryHtml>',
 * },
 * {
 *   kind: 'scripture',
 *   chapter: <same>,
 *   lines: [
 *
 * The next verse object then continues naturally inside the new block.
 *
 * No duplication, no orphaned braces. Just one in-place rewrite.
 */
import fs from 'node:fs';

const [file, splitVerseStr, commentaryId, commentaryHtml] = process.argv.slice(2);
if (!file || !splitVerseStr || !commentaryId || !commentaryHtml) {
  console.error('Usage: node split-block.mjs <file> <splitAfterVerse> <commentaryId> <commentaryHtml>');
  process.exit(1);
}
const splitVerse = parseInt(splitVerseStr, 10);
const src = fs.readFileSync(file, 'utf8');

// Find every scripture block, parse its verse list, identify the one that
// contains splitVerse, then find that verse's closing brace.
const KIND_RE = /kind:\s*'([a-z]+)'/g;
const matches = [...src.matchAll(KIND_RE)];

let chapter = null;
let blockStart = -1;
let blockEnd = -1;
for (let i = 0; i < matches.length; i++) {
  if (matches[i][1] !== 'scripture') continue;
  const start = matches[i].index + matches[i][0].length;
  const end = i + 1 < matches.length ? matches[i + 1].index : src.length;
  const region = src.slice(start, end);
  // Verses can be `{ number: N, ...}` or `plain(N, ...)`.
  const verseNums = [
    ...region.matchAll(/\bnumber:\s*(\d+)/g),
    ...region.matchAll(/\bplain\(\s*(\d+)/g),
  ].map((m) => parseInt(m[1], 10));
  if (verseNums.includes(splitVerse) && verseNums.length > splitVerse - verseNums[0] + 1) {
    // splitVerse exists AND there are more verses after it
    if (verseNums[verseNums.length - 1] > splitVerse) {
      // capture chapter
      const chapMatch = region.match(/chapter:\s*(\d+)/);
      chapter = chapMatch ? parseInt(chapMatch[1], 10) : null;
      blockStart = matches[i].index;
      blockEnd = end;
      break;
    }
  }
}

if (blockStart < 0 || chapter === null) {
  console.error(`Could not find scripture block containing verse ${splitVerse} (with verses after) in ${file}`);
  process.exit(2);
}

// Within that block, find the closing brace `}` of the splitVerse object.
// Two shapes to handle:
//  (a) plain(<v>, '...')                — followed by `,\n`
//  (b) { number: <v>, spans: [...] }    — followed by `},\n`
const blockSrc = src.slice(blockStart, blockEnd);

// Search for the verse object's END marker.
let cutWithinBlock = -1;
let toReplace = '';
let replaceWith = '';
const indent = '          '; // typical inner indent in these files

// Try shape (b): { number: <v>, ... }
const bRe = new RegExp(`(\\{\\s*\\n?\\s*number:\\s*${splitVerse}\\s*,[\\s\\S]*?\\}),\\s*\\n`, 'g');
const bMatch = bRe.exec(blockSrc);
if (bMatch) {
  cutWithinBlock = bMatch.index + bMatch[0].length;
  toReplace = bMatch[0];
  // Build replacement: close the verse normally, close lines/scripture, insert
  // commentary, reopen new scripture block.
  const verseText = bMatch[1];
  replaceWith = verseText + `,\n${indent}],\n        },\n        {\n          kind: 'commentary',\n          id: '${commentaryId}',\n          html:\n            '${commentaryHtml.replace(/'/g, "\\'")}',\n        },\n        {\n          kind: 'scripture',\n          chapter: ${chapter},\n          lines: [\n`;
} else {
  // Shape (a): plain(<v>, '...')
  const aRe = new RegExp(`(plain\\(\\s*${splitVerse}\\s*,[\\s\\S]*?\\)),\\s*\\n`, 'g');
  const aMatch = aRe.exec(blockSrc);
  if (aMatch) {
    cutWithinBlock = aMatch.index + aMatch[0].length;
    toReplace = aMatch[0];
    const verseText = aMatch[1];
    replaceWith = verseText + `,\n${indent}],\n        },\n        {\n          kind: 'commentary',\n          id: '${commentaryId}',\n          html:\n            '${commentaryHtml.replace(/'/g, "\\'")}',\n        },\n        {\n          kind: 'scripture',\n          chapter: ${chapter},\n          lines: [\n`;
  }
}

if (cutWithinBlock < 0) {
  console.error(`Found block but couldn't locate end of verse ${splitVerse}`);
  process.exit(3);
}

// Splice replacement into src.
const absoluteCutStart = blockStart + (cutWithinBlock - toReplace.length);
const absoluteCutEnd = blockStart + cutWithinBlock;
const newSrc = src.slice(0, absoluteCutStart) + replaceWith + src.slice(absoluteCutEnd);

fs.writeFileSync(file, newSrc);
console.log(`✓ ${file}: split after v${splitVerse}, inserted commentary '${commentaryId}'`);
