#!/usr/bin/env node
/**
 * Bulk-CSV harvester for the Met Open Access biblical works.
 *
 * The Met publishes its full catalog as a single CSV at
 *   https://media.githubusercontent.com/media/metmuseum/openaccess/master/MetObjects.csv
 * (~318 MB, ~485k rows). The first-pass search-API harvester
 * (scripts/harvest-met.mjs) was capped at the top-60 most relevant
 * results per keyword, so it concentrated on famous oil paintings and
 * missed the deep Drawings & Prints holdings — which is where chapter-
 * by-chapter print Bibles live.
 *
 * This script:
 *   1. Reads the bulk CSV at .met-cache/openaccess.csv
 *   2. Filters to public-domain rows whose title or tags strongly imply
 *      a biblical subject AND whose classification is one we can render
 *      (Prints, Drawings, Paintings, Manuscripts and Illuminations,
 *      Sculpture, Stained Glass, Ivories, Textiles, Enamels).
 *   3. Skips rows by artists who are already covered through dedicated
 *      Wikimedia ingests (Doré, Schnorr, Tissot, Dürer, Blake, Rembrandt,
 *      Caravaggio, Raphael, Michelangelo, Rubens, Fra Angelico, Giotto,
 *      Duccio). The Met holds copies of their plates but our existing
 *      ingests already point at higher-resolution Wikimedia files.
 *   4. For every surviving candidate, fetches the full object record
 *      from the Met API to confirm `primaryImage` is non-empty.
 *      Re-uses the .met-cache/objects/ cache from the first pass, so
 *      already-fetched IDs are free.
 *   5. Anchors each plate to a scripture ref + scene using the same
 *      regex set as harvest-met.mjs (kept in sync via inline copy).
 *   6. Emits src/data/art/met.ts, replacing the previous file.
 *
 * Usage:
 *   curl -sL -o .met-cache/openaccess.csv \\
 *     https://media.githubusercontent.com/media/metmuseum/openaccess/master/MetObjects.csv
 *   node scripts/harvest-met-csv.mjs --budget-s 38   # resumable
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, join } from 'node:path';
import { createReadStream } from 'node:fs';
import { createInterface } from 'node:readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = resolve(__dirname, '..');

const ARGS = new Set(process.argv.slice(2));
const NO_CACHE = ARGS.has('--no-cache');
const BUDGET_IDX = process.argv.indexOf('--budget-s');
const WALL_BUDGET_S = BUDGET_IDX > -1 ? Number(process.argv[BUDGET_IDX + 1]) : 0;
const HARVEST_START = Date.now();
const overBudget = () => WALL_BUDGET_S > 0 && (Date.now() - HARVEST_START) / 1000 > WALL_BUDGET_S;

const CACHE_DIR = join(PROJECT_ROOT, '.met-cache');
const OBJECT_CACHE = join(CACHE_DIR, 'objects');
const CSV_PATH = join(CACHE_DIR, 'openaccess.csv');
const CANDIDATE_CACHE = join(CACHE_DIR, 'csv-candidates.json'); // memoized CSV filter result
for (const d of [CACHE_DIR, OBJECT_CACHE]) {
  if (!existsSync(d)) mkdirSync(d, { recursive: true });
}

const OBJECT_DELAY_MS = 200;
const RATE_LIMIT_BACKOFF_MS = 10_000;
const MAX_RETRIES = 5;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ───────────────────────────────────────────────────────────────────
// CSV filter: who counts as "biblical" + who to skip
// ───────────────────────────────────────────────────────────────────

// Strong biblical patterns. Stricter than the first-pass title regex —
// requires a recognizable narrative cue, person, or feast term, not
// just "Saint X" alone (which surfaces a lot of post-biblical hagiog-
// raphy that doesn't anchor to scripture).
const BIBLICAL_TITLE_RE = new RegExp(
  [
    'Christ', 'Jesus', 'Madonna', 'Virgin and Child', 'Virgin Mary',
    'Crucif', 'Annunciation', 'Nativity',
    'Adoration of (?:the )?(?:Magi|Shepherds)',
    'Resurrection', 'Ascension', 'Last Supper',
    'Piet[aà]', 'Lamentation(?:.*Christ)?', 'Entombment',
    'Deposition(?:.*Christ)?', 'Pentecost', 'Transfiguration',
    'Holy Family', 'Visitation(?!\\s+of)', 'Baptism of (?:Christ|Jesus|the Lord)',
    'Flight into Egypt', 'Massacre of (?:the )?Innocents',
    'Last Judg(?:ment|ement)', 'Apocalyp', 'Revelation of (?:Saint )?John',
    'Adam and Eve', 'Garden of Eden', 'Expulsion from (?:Paradise|Eden)',
    'Cain and Abel', 'Sacrifice of Abel',
    'Noah', 'the Flood', 'Tower of Babel',
    'Abraham', 'Isaac', 'Jacob and Esau', 'Jacob.s (?:Ladder|Dream)',
    'Joseph and (?:his Brothers|Potiphar)',
    'Moses', 'Aaron', 'Joshua at',
    'Samson', 'Delilah',
    'David and (?:Goliath|Bathsheba|Saul)', 'David playing',
    'Bathsheba', 'Solomon',
    'Elijah', 'Elisha',
    'Job(?:\\s+and|\\s+on|\\b)', 'Jonah', 'Daniel(?:.*Lions|.*Den)',
    'Esther', 'Tobias', 'Judith and Holofernes', 'Susanna',
    'Magdalen', 'Lazarus', 'Salome', 'Herod',
    'Sermon on the Mount', 'Beatitudes', 'Prodigal Son',
    'Good Samaritan', 'Doubting Thomas', 'Emmaus',
    'Wedding at Cana', 'Raising of Lazarus',
    'Saint (?:Peter|Paul|John|James|Andrew|Matthew|Mark|Luke|Stephen|Thomas|Bartholomew|Philip|Simon|Jude|Anne|Joachim|Joseph|Sebastian|Catherine|Jerome|Michael|George|Francis|Christopher)',
    'Christ Child', 'Holy Trinity',
    'Tabernacle', 'Menorah', 'Ark of the Covenant',
    'Manna', 'Quail', 'Aaron.s rod',
    'Brazen Serpent', 'Bronze Serpent', 'Spies of Canaan',
    'Balaam', 'Korah',
    'valley of dry bones', 'Ezekiel.s vision',
    'Beatus', 'Areopagus', 'Stoning of (?:Saint )?Stephen',
    'Conversion of (?:Saint )?Paul',
    'Wise and Foolish Virgins', 'Lost Sheep', 'Vine', 'Sower',
    'Christ (?:Healing|driving|with|among|on|before|carrying|crowned|enthroned|teaching|appearing)',
    'Mary at the (?:Tomb|Cross)', 'Three Marys',
    'Sacrifice of Isaac', 'Binding of Isaac',
    'Burning Bush', 'Crossing (?:the )?Red Sea', 'Ten Commandments',
    'Golden Calf', 'Walls of Jericho',
    'Queen of Sheba', 'Judgment of Solomon',
    'Ecce Homo', 'Noli Me Tangere',
    'Three Hebrews', 'Fiery Furnace', 'Lions.? Den',
    'Tobit', 'Esther before',
    'Cherub', 'Seraph', 'Archangel',
    'Holy Spirit', 'Dove of the Holy',
    'Adam and', 'Eve and the',
    'Old Testament', 'New Testament',
    'Bible.*scene', 'Gospel of',
  ].join('|'),
  'i',
);

// Patterns that imply non-biblical religious art that still slips
// through (saint hagiography, Madonna without Christ, generic
// "religion" tag). We don't drop these — many are still biblical
// paraphrase — but we use them to bias the anchor.
//
// These classifications survive into the candidate pool.
const ALLOWED_CLASSIFICATIONS = new Set([
  'Paintings',
  'Drawings',
  'Prints',
  'Drawings|Ornament & Architecture',
  'Prints|Ephemera',
  'Manuscripts and Illuminations',
  'Sculpture', 'Sculpture-Wood', 'Sculpture-Stone', 'Sculpture-Miniature',
  'Glass-Stained', 'Glass',
  'Ivories', 'Ivories-Bone', 'Ivories-Walrus',
  'Enamels-Champlevé', 'Enamels-Painted', 'Enamels',
  'Textiles-Tapestries', 'Textiles-Embroidered',
  'Medals and Plaquettes',
  'Metalwork-Silver', 'Metalwork-Gold',
  'Reliefs', 'Reliquaries',
  'Codices', 'Miniatures',
]);

// Artists where we already have higher-quality Wikimedia ingests.
// Skip Met copies of their plates so our existing per-artist sources
// remain the canonical version.
const COVERED_ARTIST_PATTERNS = [
  /\bGustave Dor[ée]\b/i,
  /\bJulius Schnorr\b/i,
  /\bJames Tissot\b/i, /\bJames Jacques Joseph Tissot\b/i,
  /\bAlbrecht D[üu]rer\b/i,
  /\bWilliam Blake\b/i,
  /\bRembrandt\b/i, /\bRembrandt van Rijn\b/i, /\bRembrandt Harmensz/i,
  /\bCaravaggio\b/i,
  /\bRaphael\b/i,
  /\bMichelangelo\b/i, /\bMichelangelo Buonarroti\b/i,
  /\bRubens\b/i, /\bPeter Paul Rubens\b/i,
  /\bFra Angelico\b/i,
  /\bGiotto\b/i,
  /\bDuccio\b/i,
];

const isAlreadyCovered = (artistName) => {
  if (!artistName) return false;
  return COVERED_ARTIST_PATTERNS.some((re) => re.test(artistName));
};

// ───────────────────────────────────────────────────────────────────
// Same biblical-tag whitelist + scripture rules as harvest-met.mjs
// (kept inline to avoid a shared-module dance).
// ───────────────────────────────────────────────────────────────────

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

// Same scripture rules as harvest-met.mjs (kept in lockstep — when you
// edit one, edit both). The CSV harvester adds extras at the bottom
// for the chapters underrepresented in the first pass.
const SCRIPTURE_RULES = [
  // Old Testament — first-pass rules
  { re: /\bAdam and Eve|Garden of Eden|Expulsion from Paradise|Fall of Man\b/i, book: 'genesis', chapter: 3, scene: 'fall' },
  { re: /\bCreation\b/i, book: 'genesis', chapter: 1, scene: 'creation' },
  { re: /\bCain and Abel|Sacrifice of Abel|Death of Abel\b/i, book: 'genesis', chapter: 4, scene: 'fall' },
  { re: /\bNoah|Building of the Ark|the Ark|the Flood|the Deluge\b/i, book: 'genesis', chapter: 7, scene: 'flood' },
  { re: /\bTower of Babel\b/i, book: 'genesis', chapter: 11, scene: 'babel' },
  { re: /\bAbraham(?!.*Isaac)|Sarah(?!\s*and\s*Tobit)|Hagar|Ishmael\b/i, book: 'genesis', chapter: 18, scene: 'abraham' },
  { re: /\b(Sacrifice of Isaac|Binding of Isaac|Abraham and Isaac)\b/i, book: 'genesis', chapter: 22, scene: 'abraham' },
  { re: /\bIsaac and Rebekah|Rebekah\b/i, book: 'genesis', chapter: 24, scene: 'patriarchs' },
  { re: /\bJacob and Esau|Jacob.*ladder|Jacob.*dream|Jacob.*Rachel|Jacob.*wrestl|Jacob.*Angel\b/i, book: 'genesis', chapter: 28, scene: 'patriarchs' },
  { re: /\bJoseph in Egypt|Joseph and his brothers|Joseph and Potiphar|Joseph sold\b/i, book: 'genesis', chapter: 37, scene: 'joseph' },
  { re: /\bMoses (?:and )?the burning bush|burning bush\b/i, book: 'exodus', chapter: 3, scene: 'moses' },
  { re: /\b(Crossing the Red Sea|Red Sea|Pharaoh.*pursuit)\b/i, book: 'exodus', chapter: 14, scene: 'exodus' },
  { re: /\b(Ten Commandments|Tables of the Law|Mount Sinai|Moses.*tablets)\b/i, book: 'exodus', chapter: 20, scene: 'moses' },
  { re: /\bGolden Calf\b/i, book: 'exodus', chapter: 32, scene: 'moses' },

  // NEW: Tabernacle → Exodus 25-26
  { re: /\bTabernacle(?!\b\s*by)|Holy of Holies\b/i, book: 'exodus', chapter: 25, scene: 'moses' },
  { re: /\bArk of the Covenant\b/i, book: 'exodus', chapter: 25, scene: 'moses' },
  { re: /\bMenorah(?:.*Tabernacle|.*Temple)?\b/i, book: 'exodus', chapter: 25, scene: 'moses' },
  { re: /\bShowbread|Bread of the Presence\b/i, book: 'exodus', chapter: 25, scene: 'moses' },
  { re: /\bMoses.*tabernacle|Bezalel|Tabernacle.*construction\b/i, book: 'exodus', chapter: 35, scene: 'moses' },

  { re: /\bMoses(?!.*the Black)\b/i, book: 'exodus', chapter: 2, scene: 'moses' },

  // NEW: Aaron's blessing, scapegoat, Day of Atonement → Leviticus
  { re: /\bAaron.s blessing|Priestly blessing\b/i, book: 'leviticus', chapter: 9, scene: 'moses' },
  { re: /\bScapegoat|Day of Atonement|Yom Kippur\b/i, book: 'leviticus', chapter: 16, scene: 'moses' },
  { re: /\bConsecration of (?:the )?priests|Aaron consecrat\b/i, book: 'leviticus', chapter: 8, scene: 'moses' },
  { re: /\bSabbath of the Lord|Sabbath laws?|Year of Jubilee\b/i, book: 'leviticus', chapter: 25, scene: 'moses' },

  // NEW: Numbers — Manna, Quail, Spies, Balaam, Korah, Brazen Serpent
  { re: /\bManna\b/i, book: 'numbers', chapter: 11, scene: 'exodus' },
  { re: /\bQuail(?:s)?\b/i, book: 'numbers', chapter: 11, scene: 'exodus' },
  { re: /\bSpies of Canaan|Twelve Spies|Joshua and Caleb returning\b/i, book: 'numbers', chapter: 13, scene: 'conquest' },
  { re: /\bKorah(?:.*rebellion|.*sons)?\b/i, book: 'numbers', chapter: 16, scene: 'moses' },
  { re: /\bAaron.s rod|Aaron.s budding rod\b/i, book: 'numbers', chapter: 17, scene: 'moses' },
  { re: /\bBrazen Serpent|Bronze Serpent|Brass Serpent\b/i, book: 'numbers', chapter: 21, scene: 'moses' },
  { re: /\bBalaam(?:.*donkey|.*ass|.*Ass)?\b/i, book: 'numbers', chapter: 22, scene: 'moses' },
  { re: /\bDaughters of Zelophehad\b/i, book: 'numbers', chapter: 27, scene: 'moses' },
  { re: /\bAaron(?!\s+(?:the carpenter))\b/i, book: 'exodus', chapter: 28, scene: 'moses' },

  // NEW: Deuteronomy — Moses' farewell, blessing of the tribes, death of Moses
  { re: /\bMoses.*farewell|Last words? of Moses|Song of Moses\b/i, book: 'deuteronomy', chapter: 32, scene: 'moses' },
  { re: /\bBlessing of (?:the )?tribes\b/i, book: 'deuteronomy', chapter: 33, scene: 'moses' },
  { re: /\bDeath of Moses|Moses.*Mount Nebo|Moses.*Pisgah\b/i, book: 'deuteronomy', chapter: 34, scene: 'moses' },

  { re: /\bJoshua|Walls of Jericho|Battle of Jericho\b/i, book: 'joshua', chapter: 6, scene: 'conquest' },
  { re: /\bDeborah\b/i, book: 'judges', chapter: 4, scene: 'judges' },
  { re: /\bGideon\b/i, book: 'judges', chapter: 7, scene: 'judges' },
  { re: /\bSamson(?:.*Delilah|.*Lion|.*Pillars|.*Temple)?\b/i, book: 'judges', chapter: 16, scene: 'judges' },
  { re: /\bDelilah\b/i, book: 'judges', chapter: 16, scene: 'judges' },
  { re: /\b(Ruth|Boaz|Naomi)\b/i, book: 'ruth', chapter: 2, scene: 'judges' },
  { re: /\bSamuel(?!\s+Beckett)\b/i, book: '1-samuel', chapter: 3, scene: 'prophets' },
  { re: /\bSaul(?!\s+(of Tarsus|on the road))\b/i, book: '1-samuel', chapter: 15, scene: 'david' },
  { re: /\bDavid and Goliath|Goliath\b/i, book: '1-samuel', chapter: 17, scene: 'david' },
  { re: /\bDavid and Bathsheba|Bathsheba\b/i, book: '2-samuel', chapter: 11, scene: 'david' },
  { re: /\bAbsalom\b/i, book: '2-samuel', chapter: 18, scene: 'david' },

  // NEW: David playing harp → 1 Sam 16; David before Saul → 1 Sam 16
  { re: /\bDavid playing (?:the )?harp|David.*harp(?:.*Saul)?\b/i, book: '1-samuel', chapter: 16, scene: 'david' },
  { re: /\bDavid (?:dancing|leaping)|David.*Ark\b/i, book: '2-samuel', chapter: 6, scene: 'david' },
  { re: /\bDavid\b/i, book: '1-samuel', chapter: 16, scene: 'david' },

  // NEW: Census of David → 2 Sam 24; Building of Temple → 1 Kings 6
  { re: /\bCensus of David|David.s census|Plague.*Israel\b/i, book: '2-samuel', chapter: 24, scene: 'david' },
  { re: /\bBuilding of (?:the )?Temple|Solomon.s Temple|Solomon dedicat\b/i, book: '1-kings', chapter: 6, scene: 'solomon' },

  { re: /\bJudgment of Solomon|Wisdom of Solomon\b/i, book: '1-kings', chapter: 3, scene: 'solomon' },
  { re: /\bQueen of Sheba\b/i, book: '1-kings', chapter: 10, scene: 'solomon' },
  { re: /\bSolomon\b/i, book: '1-kings', chapter: 3, scene: 'solomon' },
  { re: /\bElijah(?:.*Chariot|.*ravens|.*Carmel|.*ascending)?\b/i, book: '1-kings', chapter: 17, scene: 'prophets' },
  { re: /\bElisha\b/i, book: '2-kings', chapter: 2, scene: 'prophets' },
  { re: /\bJob\b/i, book: 'job', chapter: 1, scene: 'suffering' },

  // NEW: Psalms — David as psalmist + specific Psalm scenes
  { re: /\bPenitential Psalm|David penitent|David repentance\b/i, book: 'psalms', chapter: 51, scene: 'wisdom' },
  { re: /\bGood Shepherd|The Lord is my Shepherd|Psalm 23\b/i, book: 'psalms', chapter: 23, scene: 'wisdom' },
  { re: /\bRivers of Babylon|Psalm 137|By the waters of Babylon\b/i, book: 'psalms', chapter: 137, scene: 'wisdom' },
  { re: /\bDavid.*psalm|David.*psalter|Psalter\b/i, book: 'psalms', chapter: 1, scene: 'wisdom' },
  { re: /\b(Psalm|Psalms?)\b/i, book: 'psalms', chapter: 1, scene: 'wisdom' },

  // NEW: Proverbs — Wisdom personified, Lady Wisdom, the virtuous woman
  { re: /\bLady Wisdom|Wisdom personified|Wisdom calls?\b/i, book: 'proverbs', chapter: 8, scene: 'wisdom' },
  { re: /\bVirtuous woman|Capable wife|Worthy woman\b/i, book: 'proverbs', chapter: 31, scene: 'wisdom' },

  // NEW: Ecclesiastes — Vanitas
  { re: /\bVanitas|Vanity of vanities|Ecclesiastes\b/i, book: 'ecclesiastes', chapter: 1, scene: 'wisdom' },

  // NEW: Song of Solomon — Bride and Bridegroom imagery
  { re: /\bBride and Bridegroom|Song of Solomon|Canticle of Canticles|Shulamite\b/i, book: 'song-of-solomon', chapter: 1, scene: 'wisdom' },

  { re: /\bIsaiah\b/i, book: 'isaiah', chapter: 6, scene: 'prophets' },

  // NEW: Specific Jeremiah scenes
  { re: /\bJeremiah.*cistern|Jeremiah.*pit|Jeremiah.*prison\b/i, book: 'jeremiah', chapter: 38, scene: 'prophets' },
  { re: /\bPotter.s house|Potter and the clay|Jeremiah.*potter\b/i, book: 'jeremiah', chapter: 18, scene: 'prophets' },
  { re: /\bBoiling Pot|Jeremiah.*almond\b/i, book: 'jeremiah', chapter: 1, scene: 'prophets' },
  { re: /\bJeremiah(?:.*lamenting|.*ruins|.*Jerusalem)?\b/i, book: 'jeremiah', chapter: 1, scene: 'prophets' },
  { re: /\bLamentations of Jeremiah\b/i, book: 'lamentations', chapter: 1, scene: 'suffering' },

  // NEW: Specific Ezekiel scenes
  { re: /\bWheel within a wheel|Ezekiel.*wheel|Wheels of Ezekiel|Merkabah\b/i, book: 'ezekiel', chapter: 1, scene: 'prophets' },
  { re: /\bValley of dry bones|Dry bones|Vision of the dry bones\b/i, book: 'ezekiel', chapter: 37, scene: 'prophets' },
  { re: /\bFour creatures|Tetramorph\b/i, book: 'ezekiel', chapter: 1, scene: 'prophets' },
  { re: /\bEzekiel(?:.*vision)?\b/i, book: 'ezekiel', chapter: 1, scene: 'prophets' },

  { re: /\bDaniel.*Lion|Lions.*Den\b/i, book: 'daniel', chapter: 6, scene: 'prophets' },
  { re: /\bThree Hebrews|Fiery Furnace|Furnace\b/i, book: 'daniel', chapter: 3, scene: 'prophets' },
  { re: /\bBelshazzar.s Feast|writing on the wall|Mene Mene\b/i, book: 'daniel', chapter: 5, scene: 'prophets' },
  { re: /\bDaniel\b/i, book: 'daniel', chapter: 2, scene: 'prophets' },
  { re: /\bJonah(?:.*whale|.*fish|.*Nineveh|.*gourd)?\b/i, book: 'jonah', chapter: 2, scene: 'prophets' },

  // NEW: Minor prophets
  { re: /\bHosea\b/i, book: 'hosea', chapter: 1, scene: 'prophets' },
  { re: /\bAmos\b/i, book: 'amos', chapter: 7, scene: 'prophets' },
  { re: /\bMicah\b/i, book: 'micah', chapter: 5, scene: 'prophets' },
  { re: /\bHabakkuk\b/i, book: 'habakkuk', chapter: 3, scene: 'prophets' },
  { re: /\bZechariah(?!\s*priest|\b\s+father)\b/i, book: 'zechariah', chapter: 1, scene: 'prophets' },
  { re: /\bMalachi\b/i, book: 'malachi', chapter: 3, scene: 'prophets' },

  // Apocrypha — broadened
  { re: /\bSusanna and the Elders|Susanna\b/i, book: 'daniel', chapter: 13, scene: 'wisdom' },
  { re: /\bTobias|Tobit and the Angel|Tobias and the Angel|Archangel Raphael\b/i, book: 'tobit', chapter: 6, scene: 'wisdom' },
  { re: /\bJudith and Holofernes|Holofernes|Judith\b/i, book: 'judith', chapter: 13, scene: 'deliverance' },
  { re: /\bMaccabe\b/i, book: '1-maccabees', chapter: 1, scene: 'deliverance' },

  { re: /\bEsther|Mordecai|Ahasuerus|Haman\b/i, book: 'esther', chapter: 5, scene: 'deliverance' },

  // ── New Testament ──
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

  // NEW: Specific parables → Luke chapters
  { re: /\bWise and Foolish Virgins\b/i, book: 'matthew', chapter: 25, scene: 'parables' },
  { re: /\bLost Sheep|Good Shepherd parable\b/i, book: 'luke', chapter: 15, scene: 'parables' },
  { re: /\bThe Sower|Parable of the Sower\b/i, book: 'matthew', chapter: 13, scene: 'parables' },
  { re: /\bRich Man and Lazarus|Lazarus and Dives\b/i, book: 'luke', chapter: 16, scene: 'parables' },
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

  // NEW: Acts narrative episodes
  { re: /\bSaint Paul.*Areopagus|Paul.*Athens|Paul preaching\b/i, book: 'acts', chapter: 17, scene: 'apostles' },
  { re: /\bSaint Paul.*shipwreck|Paul.*Malta|Paul.*viper\b/i, book: 'acts', chapter: 27, scene: 'apostles' },
  { re: /\bMartyrdom of (?:Saint )?Peter|Crucifixion of (?:Saint )?Peter\b/i, book: 'acts', chapter: 12, scene: 'apostles' },
  { re: /\bPeter.s Denial|Denial of (?:Saint )?Peter\b/i, book: 'matthew', chapter: 26, scene: 'passion' },
  { re: /\bPeter and the Rooster|Peter weeping\b/i, book: 'luke', chapter: 22, scene: 'passion' },

  // NEW: Pauline epistle iconography (Saint Paul writing → Romans portrait)
  { re: /\bSaint Paul writing|Paul.*Epistle|Apostle Paul.*book\b/i, book: 'romans', chapter: 1, scene: 'apostles' },

  // People → soft anchors
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

  // NEW: each evangelist anchored to their own gospel
  { re: /\bSaint Matthew(?:\s+(?:writing|the Evangelist))?\b/i, book: 'matthew', chapter: 1, scene: 'apostles' },
  { re: /\bSaint Mark(?:\s+(?:writing|the Evangelist))?\b/i, book: 'mark', chapter: 1, scene: 'apostles' },
  { re: /\bSaint Luke(?:\s+(?:writing|the Evangelist|painting))?\b/i, book: 'luke', chapter: 1, scene: 'apostles' },
  { re: /\bSaint John (?:the Evangelist|on Patmos)\b/i, book: 'revelation', chapter: 1, scene: 'apocalypse' },

  // NEW: Catholic epistle authors anchored to their letter
  { re: /\bSaint James(?:\s+the Greater|\s+the Less)?(?:\s+writing)?\b/i, book: 'james', chapter: 1, scene: 'apostles' },
  { re: /\bSaint Jude(?:\s+writing)?\b/i, book: 'jude', chapter: 1, scene: 'apostles' },

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
  const haystack = `${obj.title || ''} ${(obj.tags || []).map((t) => typeof t === 'string' ? t : t.term).join(' ')}`;
  for (const rule of SCRIPTURE_RULES) {
    if (rule.re.test(haystack)) {
      return { bookSlug: rule.book, chapter: rule.chapter, sceneSlug: rule.scene };
    }
  }
  return null;
}

function isBiblical(obj) {
  if (!obj) return false;
  if (!obj.isPublicDomain) return false;
  if (!obj.primaryImage) return false;
  const tags = (obj.tags || []).map((t) => t.term);
  if (tags.some((t) => BIBLICAL_TAGS.has(t))) return true;
  return BIBLICAL_TITLE_RE.test(obj.title || '');
}

// ───────────────────────────────────────────────────────────────────
// Slug helpers (same as harvest-met.mjs)
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
  return slugify(displayName.split(/\s*\|\s*/)[0]) || 'anonymous';
}

// ───────────────────────────────────────────────────────────────────
// Cached HTTP (mirrors harvest-met.mjs)
// ───────────────────────────────────────────────────────────────────

function cachePathFor(id) {
  return join(OBJECT_CACHE, `${id}.json`);
}

async function fetchWithRetry(url, label) {
  for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
    const res = await fetch(url, { headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Safari/605.1.15',
      'Accept': 'application/json,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.9',
    } });
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

async function fetchObject(id) {
  const cachePath = cachePathFor(id);
  if (!NO_CACHE && existsSync(cachePath)) {
    const cached = JSON.parse(readFileSync(cachePath, 'utf8'));
    return cached === '__missing__' ? null : cached;
  }
  const url = `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`;
  const data = await fetchWithRetry(url, `object ${id}`);
  writeFileSync(cachePath, JSON.stringify(data ?? '__missing__'));
  await sleep(OBJECT_DELAY_MS);
  return data;
}

async function fetchObjectsConcurrent(ids, concurrency = 2) {
  const out = new Array(ids.length);
  let cursor = 0;
  let completed = 0;
  let exitedEarly = false;
  async function worker() {
    while (true) {
      if (overBudget()) { exitedEarly = true; return; }
      const i = cursor++;
      if (i >= ids.length) return;
      try { out[i] = await fetchObject(ids[i]); }
      catch (err) { console.log(`  ! object ${ids[i]}: ${err.message}`); out[i] = null; }
      completed++;
      if (completed % 200 === 0) console.log(`  fetched ${completed}/${ids.length}`);
    }
  }
  await Promise.all(Array.from({ length: concurrency }, () => worker()));
  return { results: out.filter(Boolean), exitedEarly, completed };
}

// ───────────────────────────────────────────────────────────────────
// CSV parsing
// ───────────────────────────────────────────────────────────────────

function parseCsvLine(line) {
  // RFC-4180-ish: handles "" inside quotes. Met's CSV is well-formed.
  const out = [];
  let cur = '';
  let q = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (q) {
      if (c === '"') {
        if (line[i + 1] === '"') { cur += '"'; i++; }
        else q = false;
      } else cur += c;
    } else {
      if (c === '"') q = true;
      else if (c === ',') { out.push(cur); cur = ''; }
      else cur += c;
    }
  }
  out.push(cur);
  return out;
}

async function loadCandidatesFromCSV() {
  if (!existsSync(CSV_PATH)) {
    throw new Error(`Missing CSV: ${CSV_PATH}\nDownload it first:\n  curl -sL -o ${CSV_PATH} https://media.githubusercontent.com/media/metmuseum/openaccess/master/MetObjects.csv`);
  }
  if (!NO_CACHE && existsSync(CANDIDATE_CACHE)) {
    return JSON.parse(readFileSync(CANDIDATE_CACHE, 'utf8'));
  }

  console.log('Streaming CSV…');
  const rl = createInterface({ input: createReadStream(CSV_PATH, 'utf-8'), crlfDelay: Infinity });
  let header = null;
  let col = {};
  const candidates = [];
  let scanned = 0, kept = 0, skippedArtist = 0, skippedClass = 0;

  for await (const line of rl) {
    if (!header) {
      header = parseCsvLine(line);
      col = Object.fromEntries(header.map((h, i) => [h.replace(/^﻿/, ''), i]));
      continue;
    }
    scanned++;
    if (scanned % 50000 === 0) console.log(`  scanned ${scanned}  kept ${kept}  artist-dropped ${skippedArtist}  class-dropped ${skippedClass}`);

    const fields = parseCsvLine(line);
    if (fields[col['Is Public Domain']] !== 'True') continue;
    const title = fields[col['Title']] || '';
    const tags = fields[col['Tags']] || '';
    const cls = fields[col['Classification']] || '';
    const artist = fields[col['Artist Display Name']] || '';
    if (!BIBLICAL_TITLE_RE.test(title) && !BIBLICAL_TITLE_RE.test(tags)) continue;
    if (!ALLOWED_CLASSIFICATIONS.has(cls)) { skippedClass++; continue; }
    if (isAlreadyCovered(artist)) { skippedArtist++; continue; }
    candidates.push({
      objectId: Number(fields[col['Object ID']]),
      titleCsv: title,
      classCsv: cls,
      artistCsv: artist,
      tagsCsv: tags,
    });
    kept++;
  }
  console.log(`Done: scanned ${scanned}, kept ${kept}, dropped (artist) ${skippedArtist}, dropped (class) ${skippedClass}`);
  writeFileSync(CANDIDATE_CACHE, JSON.stringify(candidates));
  return candidates;
}

// ───────────────────────────────────────────────────────────────────
// Main
// ───────────────────────────────────────────────────────────────────

async function main() {
  console.log('=== Met Open Access — bulk-CSV biblical art harvest ===\n');

  // 1. Load candidate IDs from the CSV.
  const candidates = await loadCandidatesFromCSV();
  console.log(`\nCandidate IDs: ${candidates.length}`);

  // 2. Fetch full object record for each (re-using cache from first pass).
  const ids = candidates.map((c) => c.objectId);
  console.log(`\nFetching object records (concurrency 2, cache hit = free)…`);
  const { results: objects, exitedEarly, completed } = await fetchObjectsConcurrent(ids, 2);
  console.log(`Fetched ${objects.length} non-null objects out of ${completed} attempts`);
  if (exitedEarly) {
    console.log('  ! wall budget exceeded; cache holds progress, re-run to continue');
    return;
  }

  // 3. Filter to genuinely biblical works using the same gate as harvest-met.mjs.
  const biblical = objects.filter(isBiblical);
  console.log(`Biblical (tag/title gate after API enrichment): ${biblical.length}`);

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
    if (!anchor) { unanchored++; continue; }

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

  console.log(`\nPlates anchored:      ${plates.length}`);
  console.log(`Unanchored skipped:   ${unanchored}`);
  console.log(`Unique artists:       ${artistsBySlug.size}`);

  const artistsArr = [...artistsBySlug.values()].sort((a, b) => a.slug.localeCompare(b.slug));
  plates.sort((a, b) => a.objectId - b.objectId);

  const outPath = join(PROJECT_ROOT, 'src/data/art/met.ts');
  writeFileSync(outPath, renderTs({ artists: artistsArr, plates }));
  console.log(`\nWrote ${outPath}`);
}

function jstr(v) { return JSON.stringify(v); }

function renderTs({ artists, plates }) {
  const header = `// Metropolitan Museum of Art — Open Access biblical works.
//
// Harvested from the Met's bulk Open Access CSV
// (github.com/metmuseum/openaccess) and confirmed against the live
// Met Collection API for image URL + tag verification. Every plate
// here has:
//   - isPublicDomain = true (Met Open Access / CC0)
//   - a primaryImage URL on images.metmuseum.org
//   - a tag- or title-derived biblical anchor
//
// Auto-generated by scripts/harvest-met-csv.mjs. Re-run that script
// to refresh; do not hand-edit. Anchors are heuristic — a curator
// should spot-check before relying on them in study material.

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
  objectId: number;
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

  const artistLines = artists.map((a) => `  ${jstr(a)},`).join('\n');
  const plateLines = plates.map((p) => `  ${jstr(p)},`).join('\n');
  return (
    header +
    `export const MET_ARTISTS: MetArtist[] = [\n${artistLines}\n];\n\n` +
    `export const MET_PLATES: MetPlate[] = [\n${plateLines}\n];\n`
  );
}

main().catch((err) => { console.error(err); process.exit(1); });
