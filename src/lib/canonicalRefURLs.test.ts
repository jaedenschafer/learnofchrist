/**
 * canonicalRefURLs.test.ts
 * ───────────────────────────────────────────────────────────────────────────
 * Round-trip every kind of ref through urlForRef → canonicalRefFromURL
 * to lock in the URL shape. Plus a few hand-picked malformed inputs.
 */

import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { canonical, makeRef } from './canonicalRef';
import {
  canonicalRefFromURL,
  chapterRef,
  rangeRef,
  shareURLForRef,
  urlForRef,
  verseRef,
} from './canonicalRefURLs';

describe('canonicalRefURLs — urlForRef shape', () => {
  it('whole chapter → /bible/<book>/<chapter> with no query', () => {
    assert.equal(urlForRef(chapterRef('genesis', 1)), '/bible/genesis/1');
  });

  it('single verse → /bible/<book>/<chapter>?v=<n>', () => {
    assert.equal(urlForRef(verseRef('john', 3, 16)), '/bible/john/3?v=16');
  });

  it('range → /bible/<book>/<chapter>?v=<a>-<b>', () => {
    assert.equal(
      urlForRef(rangeRef('1-corinthians', 13, 4, 7)),
      '/bible/1-corinthians/13?v=4-7',
    );
  });

  it('with base produces an absolute URL', () => {
    assert.equal(
      urlForRef(verseRef('psalms', 23, 1), 'https://learnofchrist.com'),
      'https://learnofchrist.com/bible/psalms/23?v=1',
    );
  });

  it('shareURLForRef defaults to the production origin', () => {
    assert.equal(
      shareURLForRef(verseRef('john', 3, 16)),
      'https://learnofchrist.com/bible/john/3?v=16',
    );
  });
});

describe('canonicalRefURLs — round trip', () => {
  const cases = [
    chapterRef('genesis', 1),
    chapterRef('psalms', 23),
    chapterRef('revelation', 22),
    verseRef('john', 3, 16),
    verseRef('1-john', 4, 8),
    verseRef('song-of-solomon', 2, 1),
    rangeRef('genesis', 1, 1, 3),
    rangeRef('1-corinthians', 13, 4, 7),
    rangeRef('matthew', 5, 3, 12),
  ];

  for (const ref of cases) {
    it(`${canonical(ref)}`, () => {
      const url = urlForRef(ref);
      const parsed = canonicalRefFromURL(url);
      assert.ok(parsed, `expected to parse ${url}`);
      assert.equal(canonical(parsed!), canonical(ref));
    });
  }

  it('absolute URLs round-trip too', () => {
    const ref = rangeRef('genesis', 1, 1, 3);
    const absolute = shareURLForRef(ref);
    const parsed = canonicalRefFromURL(absolute);
    assert.ok(parsed);
    assert.equal(canonical(parsed!), 'genesis.1.1-3');
  });
});

describe('canonicalRefURLs — rejection', () => {
  const bad = [
    '/notbible/genesis/1',           // wrong root
    '/bible/genesis',                // no chapter
    '/bible/genesis/1/extra',        // too many segments
    '/bible/genesis/0',              // chapter must be >= 1
    '/bible/genesis/-1',             // negative chapter
    '/bible/genesis/1?v=0',          // verse must be >= 1
    '/bible/genesis/1?v=3-2',        // descending range
    '/bible/genesis/1?v=abc',        // non-numeric verse
    '/bible/JOHN/3?v=16',            // uppercase book slug
    '/bible/john3/16',               // missing dot equivalent
    '/bible/1corinthians/13?v=4',    // missing hyphen in compound book
  ];

  for (const path of bad) {
    it(`rejects ${path}`, () => {
      assert.equal(canonicalRefFromURL(path), null);
    });
  }
});

describe('canonicalRefURLs — empty parser short-circuits', () => {
  it('rejects empty input', () => {
    assert.equal(canonicalRefFromURL(''), null);
  });

  it('rejects garbage that does not parse as URL', () => {
    // new URL throws on whitespace-only strings; we should treat that
    // as "no, not a valid URL ref" rather than crashing.
    assert.equal(canonicalRefFromURL('   '), null);
  });
});

describe('canonicalRefURLs — built helpers match canonical()', () => {
  it('chapterRef + canonical matches manual makeRef', () => {
    assert.equal(canonical(chapterRef('jonah', 4)), canonical(makeRef('jonah', 4)));
  });
  it('verseRef + canonical matches manual makeRef', () => {
    assert.equal(canonical(verseRef('jonah', 4, 11)), 'jonah.4.11');
  });
  it('rangeRef + canonical matches manual makeRef', () => {
    assert.equal(canonical(rangeRef('jonah', 4, 1, 11)), 'jonah.4.1-11');
  });
});
