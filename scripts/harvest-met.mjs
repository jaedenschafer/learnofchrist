#!/usr/bin/env node
/**
 * Harvest biblical artworks from the Metropolitan Museum of Art (Met)
 * Open Access collection and emit a curated TypeScript data file at
 * src/data/art/met.ts.
 *
 * The Met Collection API is keyless (https://collectionapi.metmuseum.org/)
 * but rate-limits aggressively (~80 req/s nominally; 403 returned long
 * before that under bursty load). This harvester is deliberately polite:
 *   - ≥ 1.0s spacing between search calls
 *   - ≥ 0.25s spacing between object fetches
 *   - Caches every response to a local cache dir, so re-runs are free
 *   - On 403, sleeps 30s and retries up to 5 times
 *
 * Strategy
 * --------
 * 1. Run ~190 search queries: every Bible book name, every major biblical
 *    figure, and every well-known biblical scene. Each query returns up
 *    to ~50 publicly-domain object IDs. The unions are deduped.
 * 2. For every unique objectID, fetch the full object record.
 * 3. Filter:
 *      - isPublicDomain = true
 *      - primaryImage non-empty
 *      - At least one tag whose `term` is in our biblical-tag whitelist,
 *        OR a regex hit on title against a biblical title pattern.
 *      That second clause prevents accidental matches (a portrait that
 *      happens to be called "Adam" but has no Christian tags).
 * 4. Anchor scripture references by title regex against per-book rule
 *    sets. A work can land in multiple books (e.g. a Crucifixion in all
 *    four Gospels' chapters); we pick the highest-priority hit.
 * 5. Anchor scene by tag/title regex against the 30 scene slugs in
 *    Supabase.
 *
 * Output
 * ------
 *   src/data/art/met.ts — exports MET_ARTISTS and MET_PLATES, the two
 *   arrays consumed by scripts/ingest-met.mjs.
 *
 * Usage
 * -----
 *   node scripts/harvest-met.mjs                   # full harvest, uses cache
 *   node scripts/harvest-met.mjs --no-cache        # bypass cache
 *   node scripts/harvest-met.mjs --limit 50        # smoke test
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, join } from 'node:path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = resolve(__dirname, '..');

const ARGS = new Set(process.argv.slice(2));
const NO_CACHE = ARGS.has('--no-cache');
const LIMIT_IDX = process.argv.indexOf('--limit');
const LIMIT = LIMIT_IDX > -1 ? Number(process.argv[LIMIT_IDX + 1]) : Infinity;
const PHASE_IDX = process.argv.indexOf('--phase');
const PHASE = PHASE_IDX > -1 ? process.argv[PHASE_IDX + 1] : 'all'; // search | fetch | emit | all
const BUDGET_IDX = process.argv.indexOf('--budget-s');
const WALL_BUDGET_S = BUDGET_IDX > -1 ? Number(process.argv[BUDGET_IDX + 1]) : 0; // 0 = no budget
const HARVEST_START = Date.now();
const overBudget = () => WALL_BUDGET_S > 0 && (Date.now() - HARVEST_START) / 1000 > WALL_BUDGET_S;

const CACHE_DIR = join(PROJECT_ROOT, '.met-cache');
const SEARCH_CACHE = join(CACHE_DIR, 'search');
const OBJECT_CACHE = join(CACHE_DIR, 'objects');
for (const d of [CACHE_DIR, SEARCH_CACHE, OBJECT_CACHE]) {
  if (!existsSync(d)) mkdirSync(d, { recursive: true });
}

const SEARCH_DELAY_MS = 1100;
const OBJECT_DELAY_MS = 250;
const RATE_LIMIT_BACKOFF_MS = 30_000;
const MAX_RETRIES = 5;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ───────────────────────────────────────────────────────────────────
// Keyword lists
// ───────────────────────────────────────────────────────────────────

// Every Bible book (canon + the apocryphal books carried in Supabase).
// Covers cases where a Met record's title or tags name the book.
const BIBLE_BOOKS = [
  'Genesis', 'Exodus', 'Leviticus', 'Numbers', 'Deuteronomy',
  'Joshua', 'Judges', 'Ruth', 'Samuel', 'Kings', 'Chronicles',
  'Ezra', 'Nehemiah', 'Esther',
  'Job', 'Psalms', 'Proverbs', 'Ecclesiastes', 'Song of Solomon',
  'Isaiah', 'Jeremiah', 'Lamentations', 'Ezekiel', 'Daniel',
  'Hosea', 'Joel', 'Amos', 'Obadiah', 'Jonah', 'Micah',
  'Nahum', 'Habakkuk', 'Zephaniah', 'Haggai', 'Zechariah', 'Malachi',
  'Matthew', 'Mark', 'Luke', 'John',
  'Acts', 'Romans', 'Corinthians', 'Galatians', 'Ephesians',
  'Philippians', 'Colossians', 'Thessalonians', 'Timothy', 'Titus',
  'Philemon', 'Hebrews', 'James', 'Peter', 'Jude', 'Revelation',
  'Apocalypse',
  'Tobit', 'Judith', 'Wisdom of Solomon', 'Sirach',
  'Maccabees', 'Baruch',
];

// Famous biblical figures. Searched separately because the Met search
// matches free-text — figure names tend to surface narrative paintings
// that a book-name search misses.
const BIBLICAL_FIGURES = [
  // Primeval / patriarchs
  'Adam', 'Eve', 'Cain', 'Abel', 'Seth',
  'Noah', 'Shem', 'Ham', 'Japheth',
  'Abraham', 'Sarah', 'Hagar', 'Ishmael',
  'Isaac', 'Rebekah', 'Jacob', 'Esau', 'Rachel', 'Leah',
  'Joseph in Egypt', 'Pharaoh',
  // Exodus / wilderness
  'Moses', 'Aaron', 'Miriam', 'Joshua', 'Caleb',
  // Judges
  'Deborah', 'Gideon', 'Samson', 'Delilah', 'Jephthah', 'Samuel',
  // Monarchy
  'Saul', 'Jonathan', 'David', 'Goliath',
  'Bathsheba', 'Absalom', 'Solomon',
  // Prophets
  'Elijah', 'Elisha',
  'Isaiah', 'Jeremiah', 'Ezekiel', 'Daniel',
  'Jonah', 'Hosea', 'Amos', 'Habakkuk', 'Zechariah',
  // Other Old Testament
  'Job', 'Ruth', 'Naomi', 'Boaz',
  // Apocrypha
  'Tobias', 'Judith', 'Holofernes', 'Susanna',
  'Esther', 'Mordecai', 'Haman',
  'Maccabees',
  // Holy Family + Nativity
  'Virgin Mary', 'Madonna', 'Holy Family',
  'Joseph the carpenter', 'Saint Joseph',
  'Elizabeth', 'Zechariah priest',
  'John the Baptist',
  // Christ
  'Jesus', 'Christ Child', 'Christ',
  // Apostles + disciples
  'Saint Peter', 'Saint Andrew',
  'Saint James', 'Saint John the Evangelist', 'Saint John',
  'Saint Matthew', 'Saint Bartholomew', 'Saint Thomas',
  'Saint Philip', 'Saint Simon', 'Saint Jude',
  'Judas Iscariot', 'Saint Mark', 'Saint Luke',
  'Saint Paul', 'Saint Stephen',
  // Other Gospel figures
  'Mary Magdalene', 'Martha and Mary', 'Lazarus',
  'Nicodemus', 'Zacchaeus',
  'Pontius Pilate', 'Herod', 'Salome',
  'Centurion', 'Samaritan',
  // Revelation / apocalyptic
  'Saint Michael', 'Archangel Gabriel', 'Archangel',
];

// Scene-level phrases that name a moment, not a person.
const BIBLICAL_SCENES = [
  'Annunciation', 'Visitation',
  'Nativity', 'Adoration of the Shepherds', 'Adoration of the Magi',
  'Presentation in the Temple',
  'Flight into Egypt', 'Massacre of the Innocents',
  'Holy Family', 'Christ among the Doctors',
  'Baptism of Christ',
  'Sermon on the Mount', 'Transfiguration',
  'Last Supper', 'Agony in the Garden', 'Garden of Gethsemane',
  'Betrayal of Christ', 'Arrest of Christ',
  'Christ before Pilate', 'Flagellation', 'Crowning with Thorns',
  'Ecce Homo', 'Road to Calvary', 'Crucifixion',
  'Deposition', 'Lamentation', 'Pieta', 'Entombment',
  'Resurrection', 'Noli Me Tangere',
  'Supper at Emmaus', 'Doubting Thomas',
  'Ascension', 'Pentecost',
  'Last Judgment',
  'Garden of Eden', 'The Fall', 'Expulsion from Paradise',
  'Cain and Abel', 'Sacrifice of Abel',
  'Building of the Ark', 'The Flood', 'Ark of Noah',
  'Tower of Babel',
  'Sacrifice of Isaac', 'Binding of Isaac',
  'Jacob wrestling', 'Jacob ladder',
  'Joseph and his brothers', 'Joseph in Egypt',
  'Moses at the burning bush', 'Crossing the Red Sea',
  'Ten Commandments', 'Golden Calf',
  'Brazen Serpent',
  'Walls of Jericho',
  'David and Goliath', 'David and Bathsheba',
  'Judgment of Solomon', 'Queen of Sheba',
  'Elijah ascending', 'Chariot of Fire',
  "Jonah and the whale",
  "Daniel in the Lion's Den",
  'Three Hebrews in the Furnace',
  'Susanna and the Elders',
  "Tobias and the Angel",
  'Judith and Holofernes',
  'Esther before Ahasuerus',
];

const ALL_QUERIES = [...new Set([...BIBLE_BOOKS, ...BIBLICAL_FIGURES, ...BIBLICAL_SCENES])];

// ───────────────────────────────────────────────────────────────────
// Cached HTTP
// ───────────────────────────────────────────────────────────────────

function cachePathFor(kind, key) {
  const safe = key.replace(/[^a-zA-Z0-9]+/g, '_').slice(0, 120);
  return join(kind === 'search' ? SEARCH_CACHE : OBJECT_CACHE, `${safe}.json`);
}

async function fetchWithRetry(url, label) {
  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    const res = await fetch(url, { headers: { 'User-Agent': 'LearnOfChrist/1.0 (biblical-art-ingest)' } });
    if (res.status === 200) return res.json();
    if (res.status === 404) return null;
    if (res.status === 403 || res.status === 429) {
      console.warn(`   ! ${label} -> ${res.status}, sleeping ${RATE_LIMIT_BACKOFF_MS / 1000}s`);
      await sleep(RATE_LIMIT_BACKOFF_MS);
      continue;
    }
    throw new Error(`${label} -> ${res.status}: ${(await res.text()).slice(0, 200)}`);
  }
  throw new Error(`${label}: too many retries`);
}

async function searchMet(query) {
  const cachePath = cachePathFor('search', query);
  if (!NO_CACHE && existsSync(cachePath)) {
    return JSON.parse(readFileSync(cachePath, 'utf8'));
  }
  const url = `https://collectionapi.metmuseum.org/public/collection/v1/search?q=${encodeURIComponent(query)}&hasImages=true&isPublicDomain=true`;
  const data = await fetchWithRetry(url, `search "${query}"`);
  await sleep(SEARCH_DELAY_MS);
  writeFileSync(cachePath, JSON.stringify(data ?? { total: 0, objectIDs: [] }));
  return data ?? { total: 0, objectIDs: [] };
}

async function fetchObject(id) {
  const cachePath = cachePathFor('object', String(id));
  if (!NO_CACHE && existsSync(cachePath)) {
    const cached = JSON.parse(readFileSync(cachePath, 'utf8'));
    return cached === '__missing__' ? null : cached;
  }
  const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`;
  const data = await fetchWithRetry(url, `object ${id}`);
  writeFileSync(cachePath, JSON.stringify(data ?? '__missing__'));
  // Sleep only after a real network round-trip — cache hits should be free.
  await sleep(OBJECT_DELAY_MS);
  return data;
}

// Fetch multiple object IDs with bounded concurrency. The Met API tolerates
// low single-digit concurrency on the /objects endpoint without 403'ing.
async function fetchObjectsConcurrent(ids, concurrency = 4) {
  const out = new Array(ids.length);
  let cursor = 0;
  let completed = 0;
  let exitedEarly = false;
  async function worker() {
    while (true) {
      if (overBudget()) { exitedEarly = true; return; }
      const i = cursor++;
      if (i >= ids.length) return;
      try {
        out[i] = await fetchObject(ids[i]);
      } catch (err) {
        console.log(`  ! object ${ids[i]}: ${err.message}`);
        out[i] = null;
      }
      completed++;
      if (completed % 100 === 0) console.log(`  fetched ${completed}/${ids.length}`);
    }
  }
  await Promise.all(Array.from({ length: concurrency }, () => worker()));
  return { results: out.filter(Boolean), exitedEarly };
}

// ───────────────────────────────────────────────────────────────────
// Biblical filter
// ───────────────────────────────────────────────────────────────────

// A whitelist of Met `tags[].term` values that imply the work depicts
// a biblical narrative or figure. Tags are curated by Met catalogers
// using AAT/Wikidata, so they're cleaner signal than raw title text.
const BIBLICAL_TAGS = new Set([
  'Christ', 'Jesus Christ', 'Virgin Mary', 'Holy Family',
  'Saints', 'Apostles', 'Angels', 'Archangels',
  'Madonna', 'Crucifixion', 'Last Judgement', 'Last Judgment',
  'Annunciation', 'Nativity', 'Adoration of the Magi',
  'Adoration of the Shepherds', 'Pieta', 'Pietà',
  'Lamentation', 'Resurrection', 'Ascension', 'Pentecost',
  'Last Supper', 'Baptism', 'Visitation',
  'Transfiguration', 'Entombment', 'Deposition',
  'Adam and Eve', 'Garden of Eden',
  'Noah', 'Moses', 'Abraham', 'Isaac', 'Jacob',
  'Joseph (Old Testament)', 'David', 'Solomon',
  'Samson', 'Delilah', 'Job', 'Jonah', 'Daniel',
  'Susanna', 'Tobias', 'Judith',
  'Mary Magdalene', 'John the Baptist', 'Saint Peter',
  'Saint Paul', 'Saint Joseph', 'Saint John the Baptist',
  'Saint Stephen', 'Saint Sebastian', 'Saint Catherine',
  'Saint Anne', 'Saint Jerome', 'Saint Michael', 'Saint George',
  'Saint Francis', 'Salome', 'Lazarus', 'Goliath',
  'Bible', 'Old Testament', 'New Testament',
  'Bathsheba', 'Esther', 'Cain', 'Abel', 'Eve', 'Adam',
  'Tower of Babel', 'Flight into Egypt',
  'Christ Child',
]);

// Title patterns that imply a biblical subject even when tags are missing.
const BIBLICAL_TITLE_RE = new RegExp(
  [
    'Christ', 'Jesus', 'Madonna', 'Virgin', 'Crucif', 'Annunciation',
    'Nativity', 'Adoration', 'Resurrection', 'Ascension',
    'Last Supper', 'Pieta', 'Pietà', 'Lamentation', 'Entombment',
    'Deposition', 'Pentecost', 'Transfiguration', 'Holy Family',
    'Visitation', 'Baptism of', 'Flight into Egypt',
    'Saint ', 'St\\. ', 'St\\.',
    'Apostle', 'Evangelist',
    'Last Judg', 'Judgement', 'Heaven',
    'Adam and Eve', 'Expulsion from', 'Garden of Eden',
    'Noah', 'Tower of Babel',
    'Abraham', 'Isaac', 'Jacob', 'Joseph and',
    'Moses', 'Aaron', 'Joshua',
    'Samson', 'Delilah',
    'David and', 'Bathsheba', 'Solomon',
    'Elijah', 'Elisha',
    'Job', 'Jonah', 'Daniel', 'Esther', 'Tobias', 'Judith',
    'Susanna', 'Hagar', 'Ruth',
    'Magdalen', 'Lazarus', 'Salome', 'Herod',
    'Sermon on', 'Beatitudes',
    'Prodigal', 'Good Samaritan',
    'Doubting Thomas', 'Emmaus',
    'Bible', 'Apocalyp', 'Revelation',
    'Cain', 'Abel',
  ].join('|'),
  'i',
);

function isBiblical(obj) {
  if (!obj) return false;
  if (!obj.isPublicDomain) return false;
  if (!obj.primaryImage) return false;
  const tags = (obj.tags || []).map((t) => t.term);
  if (tags.some((t) => BIBLICAL_TAGS.has(t))) return true;
  if (BIBLICAL_TITLE_RE.test(obj.title || '')) return true;
  return false;
}

// ───────────────────────────────────────────────────────────────────
// Scripture anchoring
// ───────────────────────────────────────────────────────────────────

// Each rule: title/tag pattern → primary scripture anchor.
// First match wins; rules run top-to-bottom so put more specific ones
// first (e.g. "Massacre of the Innocents" before generic "Christ").
const SCRIPTURE_RULES = [
  // Old Testament
  { re: /\bAdam and Eve|Garden of Eden|Expulsion from Paradise|Fall of Man\b/i, book: 'genesis', chapter: 3, scene: 'fall' },
  { re: /\bCreation\b/i, book: 'genesis', chapter: 1, scene: 'creation' },
  { re: /\bCain and Abel|Sacrifice of Abel|Death of Abel\b/i, book: 'genesis', chapter: 4, scene: 'fall' },
  { re: /\bNoah|Building of the Ark|the Ark|the Flood|the Deluge\b/i, book: 'genesis', chapter: 7, scene: 'flood' },
  { re: /\bTower of Babel\b/i, book: 'genesis', chapter: 11, scene: 'babel' },
  { re: /\bAbraham(?!.*Isaac)|Sarah(?!\s*and\s*Tobit)|Hagar|Ishmael\b/i, book: 'genesis', chapter: 18, scene: 'abraham' },
  { re: /\b(Sacrifice of Isaac|Binding of Isaac|Abraham and Isaac)\b/i, book: 'genesis', chapter: 22, scene: 'abraham' },
  { re: /\bIsaac and Rebekah|Rebekah\b/i, book: 'genesis', chapter: 24, scene: 'patriarchs' },
  { re: /\bJacob and Esau|Jacob.*ladder|Jacob.*dream|Jacob.*Rachel|Jacob.*wrestl|Jacob.*Angel\b/i, book: 'genesis', chapter: 28, scene: 'patriarchs' },
  { re: /\bJoseph(?!\s+(of Arimathea|the Carpenter|of Egypt only))(.*coat|.*brothers|.*Egypt|.*Pharaoh|.*dream)\b/i, book: 'genesis', chapter: 37, scene: 'joseph' },
  { re: /\bJoseph in Egypt|Joseph and his brothers|Joseph and Potiphar|Joseph sold\b/i, book: 'genesis', chapter: 37, scene: 'joseph' },
  { re: /\bMoses (?:and )?the burning bush|burning bush\b/i, book: 'exodus', chapter: 3, scene: 'moses' },
  { re: /\b(Crossing the Red Sea|Red Sea|Pharaoh.*pursuit)\b/i, book: 'exodus', chapter: 14, scene: 'exodus' },
  { re: /\b(Ten Commandments|Tables of the Law|Mount Sinai|Moses.*tablets)\b/i, book: 'exodus', chapter: 20, scene: 'moses' },
  { re: /\bGolden Calf\b/i, book: 'exodus', chapter: 32, scene: 'moses' },
  { re: /\bMoses(?!.*the Black)\b/i, book: 'exodus', chapter: 2, scene: 'moses' },
  { re: /\bBrazen Serpent|Bronze Serpent\b/i, book: 'numbers', chapter: 21, scene: 'moses' },
  { re: /\bAaron\b/i, book: 'exodus', chapter: 28, scene: 'moses' },
  { re: /\bJoshua|Walls of Jericho|Battle of Jericho\b/i, book: 'joshua', chapter: 6, scene: 'conquest' },
  { re: /\bDeborah\b/i, book: 'judges', chapter: 4, scene: 'judges' },
  { re: /\bGideon\b/i, book: 'judges', chapter: 7, scene: 'judges' },
  { re: /\bSamson(?:.*Delilah|.*Lion|.*Pillars|.*Temple)?\b/i, book: 'judges', chapter: 16, scene: 'judges' },
  { re: /\bDelilah\b/i, book: 'judges', chapter: 16, scene: 'judges' },
  { re: /\b(Ruth|Boaz|Naomi)\b/i, book: 'ruth', chapter: 2, scene: 'judges' },
  { re: /\bSamuel\b/i, book: '1-samuel', chapter: 3, scene: 'prophets' },
  { re: /\bSaul(?!\s+(of Tarsus|on the road))\b/i, book: '1-samuel', chapter: 15, scene: 'david' },
  { re: /\bDavid and Goliath|Goliath\b/i, book: '1-samuel', chapter: 17, scene: 'david' },
  { re: /\bDavid and Bathsheba|Bathsheba\b/i, book: '2-samuel', chapter: 11, scene: 'david' },
  { re: /\bAbsalom\b/i, book: '2-samuel', chapter: 18, scene: 'david' },
  { re: /\bDavid\b/i, book: '1-samuel', chapter: 16, scene: 'david' },
  { re: /\bJudgment of Solomon|Wisdom of Solomon\b/i, book: '1-kings', chapter: 3, scene: 'solomon' },
  { re: /\bQueen of Sheba\b/i, book: '1-kings', chapter: 10, scene: 'solomon' },
  { re: /\bSolomon\b/i, book: '1-kings', chapter: 3, scene: 'solomon' },
  { re: /\bElijah(?:.*Chariot|.*ravens|.*Carmel|.*ascending)?\b/i, book: '1-kings', chapter: 17, scene: 'prophets' },
  { re: /\bElisha\b/i, book: '2-kings', chapter: 2, scene: 'prophets' },
  { re: /\bJob\b/i, book: 'job', chapter: 1, scene: 'suffering' },
  { re: /\b(Psalm|Psalter)\b/i, book: 'psalms', chapter: 23, scene: 'wisdom' },
  { re: /\bIsaiah\b/i, book: 'isaiah', chapter: 6, scene: 'prophets' },
  { re: /\bJeremiah|Lamentations of Jeremiah\b/i, book: 'jeremiah', chapter: 1, scene: 'prophets' },
  { re: /\bEzekiel\b/i, book: 'ezekiel', chapter: 1, scene: 'prophets' },
  { re: /\bDaniel.*Lion|Lions.*Den\b/i, book: 'daniel', chapter: 6, scene: 'prophets' },
  { re: /\bThree Hebrews|Fiery Furnace|Furnace\b/i, book: 'daniel', chapter: 3, scene: 'prophets' },
  { re: /\bDaniel\b/i, book: 'daniel', chapter: 2, scene: 'prophets' },
  { re: /\bJonah(?:.*whale|.*fish|.*Nineveh)?\b/i, book: 'jonah', chapter: 2, scene: 'prophets' },
  // Apocrypha
  { re: /\bSusanna and the Elders|Susanna\b/i, book: 'daniel', chapter: 13, scene: 'wisdom' },
  { re: /\bTobias|Tobit and the Angel|Tobias and the Angel|Archangel Raphael\b/i, book: 'tobit', chapter: 6, scene: 'wisdom' },
  { re: /\bJudith and Holofernes|Holofernes|Judith\b/i, book: 'judith', chapter: 13, scene: 'deliverance' },
  { re: /\bMaccabe\b/i, book: '1-maccabees', chapter: 1, scene: 'deliverance' },
  // Esther
  { re: /\bEsther|Mordecai|Ahasuerus|Haman\b/i, book: 'esther', chapter: 5, scene: 'deliverance' },
  // New Testament — Gospel narrative
  { re: /\bAnnunciation\b/i, book: 'luke', chapter: 1, scene: 'nativity' },
  { re: /\bVisitation(?!\s+of\s+the\s+sepulchre)\b/i, book: 'luke', chapter: 1, scene: 'nativity' },
  { re: /\bNativity\b/i, book: 'luke', chapter: 2, scene: 'nativity' },
  { re: /\bAdoration of the Shepherds\b/i, book: 'luke', chapter: 2, scene: 'nativity' },
  { re: /\bAdoration of the Magi|Three Kings|Three Wise Men|Magi\b/i, book: 'matthew', chapter: 2, scene: 'nativity' },
  { re: /\bPresentation in the Temple|Simeon and Anna|Circumcision of Christ\b/i, book: 'luke', chapter: 2, scene: 'nativity' },
  { re: /\bFlight into Egypt|Rest on the Flight\b/i, book: 'matthew', chapter: 2, scene: 'nativity' },
  { re: /\bMassacre of the Innocents|Slaughter of the Innocents\b/i, book: 'matthew', chapter: 2, scene: 'nativity' },
  { re: /\bChrist among the Doctors|Disputation with the Doctors\b/i, book: 'luke', chapter: 2, scene: 'ministry' },
  { re: /\bBaptism of Christ\b/i, book: 'matthew', chapter: 3, scene: 'ministry' },
  { re: /\bJohn the Baptist\b/i, book: 'matthew', chapter: 3, scene: 'ministry' },
  { re: /\bSermon on the Mount|Beatitudes\b/i, book: 'matthew', chapter: 5, scene: 'teaching' },
  { re: /\bTransfiguration\b/i, book: 'matthew', chapter: 17, scene: 'ministry' },
  { re: /\bWedding at Cana|Marriage at Cana\b/i, book: 'john', chapter: 2, scene: 'miracles' },
  { re: /\bRaising of Lazarus|Lazarus(?!\s+at the rich man)\b/i, book: 'john', chapter: 11, scene: 'miracles' },
  { re: /\bGood Samaritan\b/i, book: 'luke', chapter: 10, scene: 'parables' },
  { re: /\bProdigal Son\b/i, book: 'luke', chapter: 15, scene: 'parables' },
  { re: /\bWoman at the Well|Samaritan Woman\b/i, book: 'john', chapter: 4, scene: 'ministry' },
  { re: /\bChrist (and|with) the Children|Suffer the Little Children\b/i, book: 'mark', chapter: 10, scene: 'ministry' },
  { re: /\bChrist Healing|Healing the\b/i, book: 'matthew', chapter: 9, scene: 'miracles' },
  { re: /\bChrist Walking on the Sea|Walking on Water\b/i, book: 'matthew', chapter: 14, scene: 'miracles' },
  { re: /\bFeeding of the Five Thousand|Loaves and Fishes\b/i, book: 'mark', chapter: 6, scene: 'miracles' },
  { re: /\bEntry into Jerusalem|Triumphal Entry|Palm Sunday\b/i, book: 'matthew', chapter: 21, scene: 'passion' },
  { re: /\bChrist (?:driving|cleansing)|Cleansing of the Temple\b/i, book: 'matthew', chapter: 21, scene: 'passion' },
  { re: /\bWashing of the Feet|Washing the Feet\b/i, book: 'john', chapter: 13, scene: 'passion' },
  { re: /\bLast Supper\b/i, book: 'matthew', chapter: 26, scene: 'passion' },
  { re: /\bAgony in the Garden|Gethsemane\b/i, book: 'matthew', chapter: 26, scene: 'passion' },
  { re: /\bBetrayal|Kiss of Judas|Arrest of Christ|Taking of Christ\b/i, book: 'matthew', chapter: 26, scene: 'passion' },
  { re: /\bChrist before Pilate|Christ before Annas|Christ before Caiaphas\b/i, book: 'matthew', chapter: 27, scene: 'passion' },
  { re: /\bMocking of Christ|Crowning with Thorns|Flagellation\b/i, book: 'matthew', chapter: 27, scene: 'passion' },
  { re: /\bEcce Homo\b/i, book: 'john', chapter: 19, scene: 'passion' },
  { re: /\bRoad to Calvary|Carrying the Cross|Way of the Cross|Stations of the Cross\b/i, book: 'mark', chapter: 15, scene: 'passion' },
  { re: /\bCrucifixion|Christ on the Cross|Calvary|Golgotha\b/i, book: 'matthew', chapter: 27, scene: 'crucifixion' },
  { re: /\bDeposition\b/i, book: 'mark', chapter: 15, scene: 'crucifixion' },
  { re: /\bLamentation(?:.*Christ)?\b/i, book: 'mark', chapter: 15, scene: 'crucifixion' },
  { re: /\b(Pieta|Pietà)\b/i, book: 'mark', chapter: 15, scene: 'crucifixion' },
  { re: /\bEntombment\b/i, book: 'matthew', chapter: 27, scene: 'crucifixion' },
  { re: /\bResurrection\b/i, book: 'matthew', chapter: 28, scene: 'resurrection' },
  { re: /\bNoli Me Tangere\b/i, book: 'john', chapter: 20, scene: 'resurrection' },
  { re: /\bThree Marys|Holy Women at the Tomb\b/i, book: 'mark', chapter: 16, scene: 'resurrection' },
  { re: /\bSupper at Emmaus|Road to Emmaus\b/i, book: 'luke', chapter: 24, scene: 'resurrection' },
  { re: /\bDoubting Thomas|Incredulity of (Saint )?Thomas\b/i, book: 'john', chapter: 20, scene: 'resurrection' },
  { re: /\bAscension of Christ\b/i, book: 'acts', chapter: 1, scene: 'ascension' },
  { re: /\bPentecost|Descent of the Holy Spirit\b/i, book: 'acts', chapter: 2, scene: 'apostles' },
  { re: /\bConversion of (Saint )?Paul|Saul on the road\b/i, book: 'acts', chapter: 9, scene: 'apostles' },
  { re: /\bStoning of (Saint )?Stephen\b/i, book: 'acts', chapter: 7, scene: 'apostles' },
  { re: /\bMartyrdom of (Saint )?Peter|Crucifixion of (Saint )?Peter\b/i, book: 'acts', chapter: 12, scene: 'apostles' },
  // People → soft anchors when nothing more specific matches
  { re: /\bMary Magdalen\b/i, book: 'luke', chapter: 7, scene: 'ministry' },
  { re: /\bMartha and Mary\b/i, book: 'luke', chapter: 10, scene: 'ministry' },
  { re: /\bSalome\b/i, book: 'matthew', chapter: 14, scene: 'ministry' },
  { re: /\bHerod\b/i, book: 'matthew', chapter: 2, scene: 'nativity' },
  { re: /\bSaint Stephen\b/i, book: 'acts', chapter: 7, scene: 'apostles' },
  { re: /\bSaint Sebastian\b/i, book: 'romans', chapter: 8, scene: 'apostles' },
  { re: /\bSaint Catherine\b/i, book: 'romans', chapter: 8, scene: 'apostles' },
  { re: /\bSaint Anne\b/i, book: 'luke', chapter: 1, scene: 'nativity' },
  { re: /\bSaint Jerome\b/i, book: 'romans', chapter: 8, scene: 'apostles' },
  { re: /\bSaint Michael\b/i, book: 'revelation', chapter: 12, scene: 'apocalypse' },
  { re: /\bSaint George\b/i, book: 'revelation', chapter: 12, scene: 'apocalypse' },
  { re: /\bSaint Francis\b/i, book: 'matthew', chapter: 5, scene: 'teaching' },
  { re: /\bSaint Peter|Apostle Peter|Saint Andrew|Apostle Andrew\b/i, book: 'matthew', chapter: 4, scene: 'apostles' },
  { re: /\bSaint Paul|Apostle Paul\b/i, book: 'acts', chapter: 9, scene: 'apostles' },
  { re: /\bEvangelist\b/i, book: 'john', chapter: 1, scene: 'apostles' },
  { re: /\bApostle\b/i, book: 'matthew', chapter: 10, scene: 'apostles' },
  // Christ portrayals (catch-all)
  { re: /\b(Madonna and Child|Virgin and Child|Holy Family|Mother of God|Christ Child|Madonna)\b/i, book: 'luke', chapter: 2, scene: 'nativity' },
  { re: /\bVirgin Mary\b/i, book: 'luke', chapter: 1, scene: 'nativity' },
  { re: /\bHoly Trinity\b/i, book: 'matthew', chapter: 28, scene: 'redemption' },
  { re: /\bLast Judgment|Last Judgement\b/i, book: 'revelation', chapter: 20, scene: 'judgment' },
  { re: /\bApocalyp|Revelation\b/i, book: 'revelation', chapter: 1, scene: 'apocalypse' },
  { re: /\bChrist\b/i, book: 'john', chapter: 1, scene: 'ministry' },
  { re: /\bJesus\b/i, book: 'john', chapter: 1, scene: 'ministry' },
];

function anchorScripture(obj) {
  const haystack = `${obj.title || ''} ${(obj.tags || []).map((t) => t.term).join(' ')}`;
  for (const rule of SCRIPTURE_RULES) {
    if (rule.re.test(haystack)) {
      return { bookSlug: rule.book, chapter: rule.chapter, sceneSlug: rule.scene };
    }
  }
  return null;
}

// ───────────────────────────────────────────────────────────────────
// Slug helpers
// ───────────────────────────────────────────────────────────────────

function slugify(s) {
  return (s || '')
    .toLowerCase()
    .replace(/[‘’“”]/g, '')
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

function artistSlug(displayName) {
  if (!displayName) return 'anonymous';
  // Met returns multi-artist credits like "Workshop of Rembrandt | Pupil of X".
  // Use the first listed name.
  return slugify(displayName.split(/\s*\|\s*/)[0]) || 'anonymous';
}

function plateSlug(obj) {
  const t = slugify(obj.title);
  return `met-${obj.objectID}-${t}`.slice(0, 95);
}

// ───────────────────────────────────────────────────────────────────
// Main harvest
// ───────────────────────────────────────────────────────────────────

async function main() {
  console.log('=== Met Open Access — biblical art harvest ===\n');
  console.log(`Cache: ${CACHE_DIR}${NO_CACHE ? '  (bypassed)' : ''}`);
  console.log(`Queries: ${ALL_QUERIES.length}`);

  // 1. Search every keyword and union the IDs.
  let exitedEarly = false;
  const idToQueries = new Map(); // objectID -> Set<query>
  if (PHASE === 'search' || PHASE === 'all') {
    for (let i = 0; i < ALL_QUERIES.length; i++) {
      if (overBudget()) {
        console.log(`  ! wall budget exceeded during search (${i}/${ALL_QUERIES.length}); cache holds progress, re-run to continue`);
        exitedEarly = true;
        break;
      }
      const q = ALL_QUERIES[i];
      process.stdout.write(`  [${String(i + 1).padStart(3)}/${ALL_QUERIES.length}] "${q}"... `);
      let res;
      try {
        res = await searchMet(q);
      } catch (err) {
        console.log(`ERR: ${err.message}`);
        continue;
      }
      // Multi-word queries against the Met API OR rather than AND, which can
      // explode to tens of thousands of accidental matches (e.g. "John the
      // Baptist" matches anything mentioning John, the, or Baptist).
      // Met returns relevance-ranked IDs, so keep only the top slice per
      // query — the on-target hits cluster at the top.
      const PER_QUERY_CAP = 60;
      const allIds = res.objectIDs || [];
      const ids = allIds.slice(0, PER_QUERY_CAP);
      const dropped = allIds.length - ids.length;
      console.log(`${allIds.length} hits${dropped > 0 ? ` (taking top ${ids.length}, dropping ${dropped} long-tail)` : ''}`);
      for (const id of ids) {
        if (!idToQueries.has(id)) idToQueries.set(id, new Set());
        idToQueries.get(id).add(q);
      }
    }
  } else {
    // Reload search cache without making any HTTP calls. Apply the same
    // top-N cap that the live search loop applies, so cached blow-up
    // queries don't poison the candidate set.
    const PER_QUERY_CAP = 60;
    const { readdirSync } = await import('node:fs');
    for (const f of readdirSync(SEARCH_CACHE)) {
      const data = JSON.parse(readFileSync(join(SEARCH_CACHE, f), 'utf8'));
      const ids = (data.objectIDs || []).slice(0, PER_QUERY_CAP);
      for (const id of ids) {
        if (!idToQueries.has(id)) idToQueries.set(id, new Set());
        idToQueries.get(id).add(f);
      }
    }
  }
  console.log(`\nUnique candidate IDs: ${idToQueries.size}`);
  if (exitedEarly && PHASE === 'all') return;

  // 2. Fetch object records.
  const ids = [...idToQueries.keys()].slice(0, LIMIT);
  let objects = [];
  if (PHASE === 'fetch' || PHASE === 'all') {
    console.log(`\nFetching ${ids.length} object records (concurrency 2)...`);
    const { results, exitedEarly: ee } = await fetchObjectsConcurrent(ids, 2);
    objects = results;
    if (ee) {
      console.log(`  ! wall budget exceeded during fetch; cache holds progress, re-run to continue`);
      exitedEarly = true;
    }
    console.log(`Fetched ${objects.length} object records (cumulative on this run)`);
  }
  if (exitedEarly && PHASE === 'all') return;

  // If we just ran search-only, stop here — emit needs fetched object data.
  if (PHASE === 'search') {
    console.log('\nSearch phase done. Run `--phase fetch` next, then `--phase emit`.');
    return;
  }

  // For the emit phase, hydrate `objects` purely from cache (skipping anything not yet fetched).
  if (PHASE === 'emit') {
    objects = [];
    for (const id of ids) {
      const cachePath = cachePathFor('object', String(id));
      if (!existsSync(cachePath)) continue;
      const cached = JSON.parse(readFileSync(cachePath, 'utf8'));
      if (cached === '__missing__') continue;
      objects.push(cached);
    }
    console.log(`Loaded ${objects.length} cached object records (emit-only mode)`);
  }

  // 3. Filter to genuinely biblical works.
  const biblical = objects.filter(isBiblical);
  console.log(`Biblical (tag/title gate): ${biblical.length}`);

  // 4. Build artist + plate rows.
  const artistsBySlug = new Map();
  const plates = [];
  let unanchored = 0;

  for (const obj of biblical) {
    const aSlug = artistSlug(obj.artistDisplayName);
    if (!artistsBySlug.has(aSlug)) {
      artistsBySlug.set(aSlug, {
        slug: aSlug,
        name: obj.artistDisplayName || 'Anonymous',
        birthYear: Number(obj.artistBeginDate) || null,
        deathYear: Number(obj.artistEndDate) || null,
        nationality: obj.artistNationality || null,
        bio: obj.artistDisplayBio || null,
        wikipediaUrl: obj.artistWikidata_URL || null,
      });
    }

    const anchor = anchorScripture(obj);
    if (!anchor) {
      unanchored++;
      continue;
    }

    plates.push({
      externalId: `met-${obj.objectID}`,
      objectId: obj.objectID,
      title: obj.title || `Untitled (Met ${obj.objectID})`,
      year: Number(obj.objectBeginDate) || null,
      objectDate: obj.objectDate || null,
      medium: obj.medium || null,
      classification: obj.classification || null,
      department: obj.department || null,
      creditLine: obj.creditLine || null,
      objectURL: obj.objectURL,
      primaryImage: obj.primaryImage,
      primaryImageSmall: obj.primaryImageSmall,
      creatorSlug: artistSlug(obj.artistDisplayName),
      bookSlug: anchor.bookSlug,
      chapter: anchor.chapter,
      sceneSlug: anchor.sceneSlug,
    });
  }

  console.log(`Plates anchored:   ${plates.length}`);
  console.log(`Unanchored skipped: ${unanchored}`);
  console.log(`Unique artists:    ${artistsBySlug.size}`);

  // 5. Emit src/data/art/met.ts.
  const artistsArr = [...artistsBySlug.values()].sort((a, b) => a.slug.localeCompare(b.slug));
  plates.sort((a, b) => a.objectId - b.objectId);

  const out = renderTs({ artists: artistsArr, plates });
  const outPath = join(PROJECT_ROOT, 'src/data/art/met.ts');
  writeFileSync(outPath, out);
  console.log(`\nWrote ${outPath}  (${(out.length / 1024).toFixed(1)} KB)`);
}

function jstr(v) {
  return JSON.stringify(v);
}

function renderTs({ artists, plates }) {
  const header = `// Metropolitan Museum of Art — Open Access biblical works.
//
// Harvested from the keyless Met Collection API
// (collectionapi.metmuseum.org). Every plate here has:
//   - isPublicDomain = true (Met Open Access / CC0)
//   - a primaryImage URL on images.metmuseum.org
//   - a tag- or title-derived biblical anchor
//
// Auto-generated by scripts/harvest-met.mjs. Re-run that script to
// refresh; do not hand-edit. Anchors are heuristic — a curator should
// spot-check before relying on them in study material.

export type MetArtist = {
  slug: string;
  name: string;
  birthYear: number | null;
  deathYear: number | null;
  nationality: string | null;
  bio: string | null;
  wikipediaUrl: string | null;
};

export type MetPlate = {
  externalId: string;        // \`met-\${objectId}\`
  objectId: number;          // Met object ID
  title: string;
  year: number | null;
  objectDate: string | null;
  medium: string | null;
  classification: string | null;
  department: string | null;
  creditLine: string | null;
  objectURL: string;
  primaryImage: string;
  primaryImageSmall: string | null;
  creatorSlug: string;
  bookSlug: string;
  chapter: number;
  sceneSlug: string | null;
};

`;

  const artistLines = artists.map((a) => `  ${jstr({
    slug: a.slug,
    name: a.name,
    birthYear: a.birthYear,
    deathYear: a.deathYear,
    nationality: a.nationality,
    bio: a.bio,
    wikipediaUrl: a.wikipediaUrl,
  })},`).join('\n');

  const plateLines = plates.map((p) => `  ${jstr(p)},`).join('\n');

  return (
    header +
    `export const MET_ARTISTS: MetArtist[] = [\n${artistLines}\n];\n\n` +
    `export const MET_PLATES: MetPlate[] = [\n${plateLines}\n];\n`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
