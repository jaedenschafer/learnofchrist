// Gap-fill batch: targeted ingest to spread chapter coverage into books
// previously at zero coverage or near zero. Unlike the per-artist files
// (Bloch, Bouguereau, etc.) this is a deliberately heterogeneous dataset
// — Carolingian and Byzantine illuminated manuscripts (Khludov Psalter,
// Utrecht Psalter), Sistine Chapel prophets, Florence Baptistery panels,
// Russian icon portraits of minor prophets, and one-off paintings filling
// scriptural slots that have no other coverage (Holman Hunt's Scapegoat
// for Leviticus 16, Valentin de Boulogne's Saint Paul Writing for the
// Pauline corpus, etc.).
//
// All filenames verified on Wikimedia Commons via the imageinfo API.
// `source = 'gap_fill'` groups them so this batch can be moderated as a
// unit; each entry still has its own artist record.

export type GapFillItem = {
  externalId: string;
  title: string;
  artistSlug: string;
  artistName: string;
  artistBirthYear?: number;
  artistDeathYear?: number;
  artistNationality?: string;
  artistBio?: string;
  artistWikipediaUrl?: string;
  wikimediaFile: string;
  year: number;
  medium: string;
  bookSlug: string;
  chapter: number;
  verseStart?: number;
  verseEnd?: number;
  sceneSlug?: string;
  description?: string;
};

export const GAP_FILL_ITEMS: GapFillItem[] = [
  // ───────── KHLUDOV PSALTER (Byzantine, c. 850) ─────────
  // Anonymous Byzantine masters; a single artist record covers the manuscript.
  {
    externalId: 'khludov-david-composing-psalms',
    title: 'David Composing the Psalms (Khludov Psalter)',
    artistSlug: 'khludov-master',
    artistName: 'Master of the Khludov Psalter',
    artistNationality: 'Byzantine',
    artistBio: 'Anonymous 9th-century Byzantine illuminator (or workshop) responsible for the Khludov Psalter, a marginal psalter containing some of the most polemical iconophile imagery surviving from the Iconoclast Controversy.',
    artistWikipediaUrl: 'https://en.wikipedia.org/wiki/Chludov_Psalter',
    wikimediaFile: 'Chludov david.jpg',
    year: 850, medium: 'Tempera on parchment',
    bookSlug: 'psalms', chapter: 1, verseStart: 1, verseEnd: 6, sceneSlug: 'wisdom',
  },
  {
    externalId: 'khludov-rivers-of-babylon',
    title: 'By the Rivers of Babylon (Khludov Psalter)',
    artistSlug: 'khludov-master', artistName: 'Master of the Khludov Psalter',
    wikimediaFile: 'Chludov - Rivers of Babylon (cropped).jpg',
    year: 850, medium: 'Tempera on parchment',
    bookSlug: 'psalms', chapter: 137, verseStart: 1, verseEnd: 4, sceneSlug: 'suffering',
  },
  {
    externalId: 'khludov-unicorn',
    title: 'The Unicorn (Khludov Psalter, Psalm 22)',
    artistSlug: 'khludov-master', artistName: 'Master of the Khludov Psalter',
    wikimediaFile: 'Chludov unicorn.jpg',
    year: 850, medium: 'Tempera on parchment',
    bookSlug: 'psalms', chapter: 22, verseStart: 21, verseEnd: 21, sceneSlug: 'suffering',
  },
  {
    externalId: 'khludov-assembly',
    title: 'The Assembly (Khludov Psalter, Psalm 95)',
    artistSlug: 'khludov-master', artistName: 'Master of the Khludov Psalter',
    wikimediaFile: 'Chludov sobor.jpg',
    year: 850, medium: 'Tempera on parchment',
    bookSlug: 'psalms', chapter: 95, verseStart: 1, verseEnd: 7, sceneSlug: 'wisdom',
  },
  {
    externalId: 'khludov-ascension',
    title: 'The Ascension (Khludov Psalter, Psalm 24)',
    artistSlug: 'khludov-master', artistName: 'Master of the Khludov Psalter',
    wikimediaFile: 'Chludov Ascension.jpg',
    year: 850, medium: 'Tempera on parchment',
    bookSlug: 'psalms', chapter: 24, verseStart: 7, verseEnd: 10, sceneSlug: 'ascension',
  },
  {
    externalId: 'khludov-jonah',
    title: 'Jonah Prefiguring the Resurrection (Khludov Psalter)',
    artistSlug: 'khludov-master', artistName: 'Master of the Khludov Psalter',
    wikimediaFile: 'Chludov jonah.jpg',
    year: 850, medium: 'Tempera on parchment',
    bookSlug: 'psalms', chapter: 69, verseStart: 1, verseEnd: 3, sceneSlug: 'deliverance',
  },
  {
    externalId: 'khludov-proclamation',
    title: 'The Proclamation (Khludov Psalter, Psalm 98)',
    artistSlug: 'khludov-master', artistName: 'Master of the Khludov Psalter',
    wikimediaFile: 'Chludov proclamation.jpg',
    year: 850, medium: 'Tempera on parchment',
    bookSlug: 'psalms', chapter: 98, verseStart: 1, verseEnd: 4, sceneSlug: 'wisdom',
  },
  {
    externalId: 'khludov-miriams-song',
    title: "Miriam's Song (Khludov Psalter, Psalm 68)",
    artistSlug: 'khludov-master', artistName: 'Master of the Khludov Psalter',
    wikimediaFile: 'Chludov Miriam.jpg',
    year: 850, medium: 'Tempera on parchment',
    bookSlug: 'psalms', chapter: 68, verseStart: 24, verseEnd: 27, sceneSlug: 'wisdom',
  },
  {
    externalId: 'khludov-red-sea',
    title: 'Crossing the Red Sea (Khludov Psalter, Psalm 78)',
    artistSlug: 'khludov-master', artistName: 'Master of the Khludov Psalter',
    wikimediaFile: 'Chludov red sea.jpg',
    year: 850, medium: 'Tempera on parchment',
    bookSlug: 'psalms', chapter: 78, verseStart: 12, verseEnd: 16, sceneSlug: 'deliverance',
  },
  {
    externalId: 'khludov-fiery-furnace',
    title: 'The Fiery Furnace (Khludov Psalter, Psalm 66)',
    artistSlug: 'khludov-master', artistName: 'Master of the Khludov Psalter',
    wikimediaFile: 'Chludov Fiery furnace.jpg',
    year: 850, medium: 'Tempera on parchment',
    bookSlug: 'psalms', chapter: 66, verseStart: 10, verseEnd: 12, sceneSlug: 'deliverance',
  },
  {
    externalId: 'khludov-charity',
    title: 'Charity to the Poor (Khludov Psalter, Psalm 41)',
    artistSlug: 'khludov-master', artistName: 'Master of the Khludov Psalter',
    wikimediaFile: 'Chludov charity.jpg',
    year: 850, medium: 'Tempera on parchment',
    bookSlug: 'psalms', chapter: 41, verseStart: 1, verseEnd: 3, sceneSlug: 'wisdom',
  },
  {
    externalId: 'khludov-angel-of-protection',
    title: 'Angel of Protection (Khludov Psalter, Psalm 91)',
    artistSlug: 'khludov-master', artistName: 'Master of the Khludov Psalter',
    wikimediaFile: 'Chludov angel.jpg',
    year: 850, medium: 'Tempera on parchment',
    bookSlug: 'psalms', chapter: 91, verseStart: 11, verseEnd: 12, sceneSlug: 'deliverance',
  },
  {
    externalId: 'khludov-daniel',
    title: 'Daniel (Khludov Psalter, Psalm 75)',
    artistSlug: 'khludov-master', artistName: 'Master of the Khludov Psalter',
    wikimediaFile: 'ChludovDaniil.jpg',
    year: 850, medium: 'Tempera on parchment',
    bookSlug: 'psalms', chapter: 75, verseStart: 7, verseEnd: 10, sceneSlug: 'wisdom',
  },
  {
    externalId: 'khludov-crucifixion-iconoclasts',
    title: 'The Crucifixion with Iconoclasts (Khludov Psalter, fol. 67r)',
    artistSlug: 'khludov-master', artistName: 'Master of the Khludov Psalter',
    wikimediaFile: 'Crucifixion with iconoclasts, Chludov Psalter, folio 67r.jpg',
    year: 850, medium: 'Tempera on parchment',
    bookSlug: 'psalms', chapter: 68, verseStart: 21, verseEnd: 23, sceneSlug: 'crucifixion',
    description: 'The mocking of Christ at Calvary paired with iconoclasts whitewashing an icon of Christ — one of the most famous polemical images of the Iconoclast Controversy.',
  },

  // ───────── UTRECHT PSALTER (Carolingian, c. 820–830) ─────────
  {
    externalId: 'utrecht-psalter-psalm-46',
    title: 'Utrecht Psalter, Psalm 46',
    artistSlug: 'utrecht-psalter-master',
    artistName: 'Master of the Utrecht Psalter',
    artistNationality: 'Carolingian (Frankish)',
    artistBio: 'Anonymous 9th-century Carolingian illuminator (or workshop) responsible for the Utrecht Psalter (c. 820–830, Hautvillers near Reims), the most influential Carolingian manuscript — a complete pen-drawn illustration cycle for all 150 psalms.',
    artistWikipediaUrl: 'https://en.wikipedia.org/wiki/Utrecht_Psalter',
    wikimediaFile: 'Utrechts-Psalter PSALM-46 lyres.jpg',
    year: 825, medium: 'Pen drawing on parchment',
    bookSlug: 'psalms', chapter: 46, verseStart: 1, verseEnd: 11, sceneSlug: 'wisdom',
  },
  {
    externalId: 'utrecht-psalter-psalm-48',
    title: 'Utrecht Psalter, Psalm 48',
    artistSlug: 'utrecht-psalter-master', artistName: 'Master of the Utrecht Psalter',
    wikimediaFile: 'Utrechts-Psalter PSALM-48 psaltery.jpg',
    year: 825, medium: 'Pen drawing on parchment',
    bookSlug: 'psalms', chapter: 48, verseStart: 1, verseEnd: 14, sceneSlug: 'wisdom',
  },
  {
    externalId: 'utrecht-psalter-psalm-67',
    title: 'Utrecht Psalter, Psalm 67',
    artistSlug: 'utrecht-psalter-master', artistName: 'Master of the Utrecht Psalter',
    wikimediaFile: 'Utrechts-Psalter PSALM-67 instruments.jpg',
    year: 825, medium: 'Pen drawing on parchment',
    bookSlug: 'psalms', chapter: 67, verseStart: 1, verseEnd: 7, sceneSlug: 'wisdom',
  },
  {
    externalId: 'utrecht-psalter-psalm-70',
    title: 'Utrecht Psalter, Psalm 70',
    artistSlug: 'utrecht-psalter-master', artistName: 'Master of the Utrecht Psalter',
    wikimediaFile: 'Utrechts-Psalter PSALM-70 cithara and harp intruments of psaltery.jpg',
    year: 825, medium: 'Pen drawing on parchment',
    bookSlug: 'psalms', chapter: 70, verseStart: 1, verseEnd: 5, sceneSlug: 'wisdom',
  },
  {
    externalId: 'utrecht-psalter-psalm-80',
    title: 'Utrecht Psalter, Psalm 80',
    artistSlug: 'utrecht-psalter-master', artistName: 'Master of the Utrecht Psalter',
    wikimediaFile: 'Utrechts-Psalter PSALM-80 horns.jpg',
    year: 825, medium: 'Pen drawing on parchment',
    bookSlug: 'psalms', chapter: 80, verseStart: 1, verseEnd: 19, sceneSlug: 'wisdom',
  },
  {
    externalId: 'utrecht-psalter-psalm-92',
    title: 'Utrecht Psalter, Psalm 92',
    artistSlug: 'utrecht-psalter-master', artistName: 'Master of the Utrecht Psalter',
    wikimediaFile: 'Utrechts-Psalter PSALM-92 trumpet1.jpg',
    year: 825, medium: 'Pen drawing on parchment',
    bookSlug: 'psalms', chapter: 92, verseStart: 1, verseEnd: 15, sceneSlug: 'wisdom',
  },
  {
    externalId: 'utrecht-psalter-psalm-107',
    title: 'Utrecht Psalter, Psalm 107',
    artistSlug: 'utrecht-psalter-master', artistName: 'Master of the Utrecht Psalter',
    wikimediaFile: 'Utrechts-Psalter PSALM-107 psaltery and cithara.jpg',
    year: 825, medium: 'Pen drawing on parchment',
    bookSlug: 'psalms', chapter: 107, verseStart: 1, verseEnd: 43, sceneSlug: 'wisdom',
  },
  {
    externalId: 'utrecht-psalter-psalm-134',
    title: 'Utrecht Psalter, Psalm 134',
    artistSlug: 'utrecht-psalter-master', artistName: 'Master of the Utrecht Psalter',
    wikimediaFile: 'Utrechts-Psalter PSALM-134 lyre.jpg',
    year: 825, medium: 'Pen drawing on parchment',
    bookSlug: 'psalms', chapter: 134, verseStart: 1, verseEnd: 3, sceneSlug: 'wisdom',
  },
  {
    externalId: 'utrecht-psalter-psalm-143',
    title: 'Utrecht Psalter, Psalm 143',
    artistSlug: 'utrecht-psalter-master', artistName: 'Master of the Utrecht Psalter',
    wikimediaFile: 'Utrechts-Psalter PSALM-143 psalterio or lyre.jpg',
    year: 825, medium: 'Pen drawing on parchment',
    bookSlug: 'psalms', chapter: 143, verseStart: 1, verseEnd: 12, sceneSlug: 'wisdom',
  },
  {
    externalId: 'utrecht-psalter-psalm-145',
    title: 'Utrecht Psalter, Psalm 145',
    artistSlug: 'utrecht-psalter-master', artistName: 'Master of the Utrecht Psalter',
    wikimediaFile: 'Utrechts-Psalter PSALM-145-PSALM-146 cythara and lyre.jpg',
    year: 825, medium: 'Pen drawing on parchment',
    bookSlug: 'psalms', chapter: 145, verseStart: 1, verseEnd: 21, sceneSlug: 'wisdom',
  },
  {
    externalId: 'utrecht-psalter-psalm-150',
    title: 'Utrecht Psalter, Psalm 150',
    artistSlug: 'utrecht-psalter-master', artistName: 'Master of the Utrecht Psalter',
    wikimediaFile: 'Utrechts-Psalter PSALM-149-PSALM-150 organ.jpg',
    year: 825, medium: 'Pen drawing on parchment',
    bookSlug: 'psalms', chapter: 150, verseStart: 1, verseEnd: 6, sceneSlug: 'wisdom',
  },
  {
    externalId: 'utrecht-psalter-psalm-91',
    title: 'Utrecht Psalter, Psalm 91',
    artistSlug: 'utrecht-psalter-master', artistName: 'Master of the Utrecht Psalter',
    wikimediaFile: 'Utrechts-Psalter PSALM-91 harp and cythara.jpg',
    year: 825, medium: 'Pen drawing on parchment',
    bookSlug: 'psalms', chapter: 91, verseStart: 1, verseEnd: 16, sceneSlug: 'deliverance',
  },

  // ───────── MICHELANGELO — Sistine Chapel prophets ─────────
  // Existing artist; add the prophet panels mapped to their books.
  {
    externalId: 'michelangelo-sistine-isaiah',
    title: 'The Prophet Isaiah (Sistine Chapel)',
    artistSlug: 'michelangelo-buonarroti',
    artistName: 'Michelangelo Buonarroti',
    artistBirthYear: 1475, artistDeathYear: 1564,
    artistNationality: 'Italian',
    artistBio: 'Italian Renaissance sculptor, painter, and architect; ceiling and altar wall of the Sistine Chapel (1508–1512, 1536–1541).',
    artistWikipediaUrl: 'https://en.wikipedia.org/wiki/Michelangelo',
    wikimediaFile: "'Isaiah Sistine Chapel ceiling' by Michelangelo JBU36.jpg",
    year: 1509, medium: 'Fresco',
    bookSlug: 'isaiah', chapter: 6, verseStart: 1, verseEnd: 8, sceneSlug: 'prophets',
  },
  {
    externalId: 'michelangelo-sistine-ezekiel',
    title: 'The Prophet Ezekiel (Sistine Chapel)',
    artistSlug: 'michelangelo-buonarroti', artistName: 'Michelangelo Buonarroti',
    wikimediaFile: 'Michelangelo - Sistine Chapel - Ezekiel, detail - 1510.jpg',
    year: 1510, medium: 'Fresco',
    bookSlug: 'ezekiel', chapter: 1, verseStart: 1, verseEnd: 28, sceneSlug: 'prophets',
  },
  {
    externalId: 'michelangelo-sistine-daniel',
    title: 'The Prophet Daniel (Sistine Chapel)',
    artistSlug: 'michelangelo-buonarroti', artistName: 'Michelangelo Buonarroti',
    wikimediaFile: 'Daniel SistineChapel.jpg',
    year: 1511, medium: 'Fresco',
    bookSlug: 'daniel', chapter: 7, verseStart: 1, verseEnd: 14, sceneSlug: 'prophets',
  },
  {
    externalId: 'michelangelo-sistine-jonah',
    title: 'The Prophet Jonah (Sistine Chapel)',
    artistSlug: 'michelangelo-buonarroti', artistName: 'Michelangelo Buonarroti',
    wikimediaFile: 'Sistine jonah.jpg',
    year: 1512, medium: 'Fresco',
    bookSlug: 'jonah', chapter: 2, verseStart: 1, verseEnd: 10, sceneSlug: 'deliverance',
  },
  {
    externalId: 'michelangelo-sistine-zechariah',
    title: 'The Prophet Zechariah (Sistine Chapel)',
    artistSlug: 'michelangelo-buonarroti', artistName: 'Michelangelo Buonarroti',
    wikimediaFile: 'Zacharias (Michelangelo).jpg',
    year: 1509, medium: 'Fresco',
    bookSlug: 'zechariah', chapter: 1, verseStart: 1, verseEnd: 6, sceneSlug: 'prophets',
  },
  {
    externalId: 'michelangelo-sistine-joel',
    title: 'The Prophet Joel (Sistine Chapel)',
    artistSlug: 'michelangelo-buonarroti', artistName: 'Michelangelo Buonarroti',
    wikimediaFile: 'Joel (Michelangelo).jpg',
    year: 1509, medium: 'Fresco',
    bookSlug: 'joel', chapter: 2, verseStart: 28, verseEnd: 32, sceneSlug: 'prophets',
  },

  // ───────── FLORENCE BAPTISTERY — Lorenzo Ghiberti et al. ─────────
  {
    externalId: 'florence-baptistery-habakkuk',
    title: 'The Prophet Habakkuk (Florence Baptistery)',
    artistSlug: 'florence-baptistery-master',
    artistName: 'Master of the Florence Baptistery (Ghiberti workshop)',
    artistNationality: 'Italian',
    artistBio: 'Lorenzo Ghiberti and his workshop produced the bronze prophet panels for the Gates of Paradise (1425–1452) at the Florence Baptistery.',
    artistWikipediaUrl: 'https://en.wikipedia.org/wiki/Florence_Baptistery',
    wikimediaFile: 'FlorenceBaptistery Habakkuk.png',
    year: 1452, medium: 'Bronze relief',
    bookSlug: 'habakkuk', chapter: 3, verseStart: 17, verseEnd: 19, sceneSlug: 'prophets',
  },
  {
    externalId: 'florence-baptistery-zephaniah',
    title: 'The Prophet Zephaniah (Florence Baptistery)',
    artistSlug: 'florence-baptistery-master',
    artistName: 'Master of the Florence Baptistery (Ghiberti workshop)',
    wikimediaFile: 'FlorenceBaptistery Zephaniah.png',
    year: 1452, medium: 'Bronze relief',
    bookSlug: 'zephaniah', chapter: 3, verseStart: 14, verseEnd: 17, sceneSlug: 'prophets',
  },
  {
    externalId: 'florence-baptistery-haggai',
    title: 'The Prophet Haggai (Florence Baptistery)',
    artistSlug: 'florence-baptistery-master',
    artistName: 'Master of the Florence Baptistery (Ghiberti workshop)',
    wikimediaFile: 'FlorenceBaptistery Haggai.png',
    year: 1452, medium: 'Bronze relief',
    bookSlug: 'haggai', chapter: 1, verseStart: 1, verseEnd: 11, sceneSlug: 'prophets',
  },
  {
    externalId: 'florence-baptistery-malachi',
    title: 'The Prophet Malachi (Florence Baptistery)',
    artistSlug: 'florence-baptistery-master',
    artistName: 'Master of the Florence Baptistery (Ghiberti workshop)',
    wikimediaFile: 'FlorenceBaptistery Malachi.png',
    year: 1452, medium: 'Bronze relief',
    bookSlug: 'malachi', chapter: 3, verseStart: 1, verseEnd: 6, sceneSlug: 'prophets',
  },

  // ───────── RUSSIAN PROPHET ICONS ─────────
  {
    externalId: 'russian-icon-obadiah',
    title: 'The Prophet Obadiah (Russian icon)',
    artistSlug: 'russian-icon-master',
    artistName: 'Master of the Russian Prophet Icons',
    artistNationality: 'Russian',
    artistBio: 'Anonymous Russian Orthodox iconographers responsible for the standard prophet portrait icons used in the iconostasis tradition.',
    wikimediaFile: 'Obadiah (Овдий).jpg',
    year: 1700, medium: 'Tempera on panel',
    bookSlug: 'obadiah', chapter: 1, verseStart: 1, verseEnd: 21, sceneSlug: 'prophets',
  },
  {
    externalId: 'russian-icon-nahum',
    title: 'The Prophet Nahum (Russian icon)',
    artistSlug: 'russian-icon-master', artistName: 'Master of the Russian Prophet Icons',
    wikimediaFile: 'Nahum-prophet.jpg',
    year: 1700, medium: 'Tempera on panel',
    bookSlug: 'nahum', chapter: 1, verseStart: 1, verseEnd: 15, sceneSlug: 'prophets',
  },

  // ───────── WILLIAM HOLMAN HUNT — Pre-Raphaelite ─────────
  {
    externalId: 'holman-hunt-scapegoat',
    title: 'The Scapegoat',
    artistSlug: 'william-holman-hunt',
    artistName: 'William Holman Hunt',
    artistBirthYear: 1827, artistDeathYear: 1910,
    artistNationality: 'English',
    artistBio: 'English painter, founding member of the Pre-Raphaelite Brotherhood. Best known for his religious works including The Light of the World, The Scapegoat, and The Finding of the Saviour in the Temple.',
    artistWikipediaUrl: 'https://en.wikipedia.org/wiki/William_Holman_Hunt',
    wikimediaFile: 'William Holman Hunt - The Scapegoat.jpg',
    year: 1856, medium: 'Oil on canvas',
    bookSlug: 'leviticus', chapter: 16, verseStart: 20, verseEnd: 22, sceneSlug: 'deliverance',
  },
  {
    externalId: 'holman-hunt-consecration-of-aaron',
    title: 'The Consecration of Aaron and His Sons',
    artistSlug: 'william-holman-hunt', artistName: 'William Holman Hunt',
    wikimediaFile: 'Holman Consecration of Aaron and His Sons.jpg',
    year: 1864, medium: 'Oil on canvas',
    bookSlug: 'leviticus', chapter: 8, verseStart: 1, verseEnd: 36, sceneSlug: 'wisdom',
  },

  // ───────── VALENTIN DE BOULOGNE ─────────
  {
    externalId: 'valentin-saint-paul-writing',
    title: 'Saint Paul Writing His Epistles',
    artistSlug: 'valentin-de-boulogne',
    artistName: 'Valentin de Boulogne',
    artistBirthYear: 1591, artistDeathYear: 1632,
    artistNationality: 'French',
    artistBio: 'French Caravaggesque painter who worked in Rome.',
    artistWikipediaUrl: 'https://en.wikipedia.org/wiki/Valentin_de_Boulogne',
    wikimediaFile: 'Valentin de Boulogne - Saint Paul Writing His Epistles - BF.1991.4 - Museum of Fine Arts.jpg',
    year: 1620, medium: 'Oil on canvas',
    bookSlug: '2-corinthians', chapter: 4, verseStart: 7, verseEnd: 12, sceneSlug: 'apostles',
  },

  // ───────── HANS MEMLING — Saint John Altarpiece ─────────
  {
    externalId: 'memling-john-on-patmos',
    title: 'Saint John on Patmos (St John Altarpiece, right wing)',
    artistSlug: 'hans-memling',
    artistName: 'Hans Memling',
    artistBirthYear: 1430, artistDeathYear: 1494,
    artistNationality: 'Flemish (German-born)',
    artistBio: 'Early Netherlandish painter active in Bruges. The St John Altarpiece (1474–1479) was painted for the Hospital of Saint John in Bruges.',
    artistWikipediaUrl: 'https://en.wikipedia.org/wiki/Hans_Memling',
    wikimediaFile: 'St John Altarpiece by Memling (c. 1479) — right wing (30970533506).jpg',
    year: 1479, medium: 'Oil on panel',
    bookSlug: 'revelation', chapter: 1, verseStart: 9, verseEnd: 11, sceneSlug: 'apocalypse',
  },

  // ───────── KING SOLOMON IN OLD AGE — for Ecclesiastes ─────────
  {
    externalId: 'anon-king-solomon-old-age',
    title: 'King Solomon in Old Age',
    artistSlug: 'anonymous-19c',
    artistName: 'Anonymous (19th-century engraver)',
    artistBio: 'Anonymous late-19th-century engraving of Solomon as the Preacher of Ecclesiastes.',
    wikimediaFile: 'Colorized King Solomon in Old Age.png',
    year: 1880, medium: 'Engraving (colorized)',
    bookSlug: 'ecclesiastes', chapter: 1, verseStart: 1, verseEnd: 11, sceneSlug: 'wisdom',
  },

  // ───────── VITTORE CARPACCIO — Stoning of Saint Stephen ─────────
  {
    externalId: 'carpaccio-stoning-of-stephen',
    title: 'The Stoning of Saint Stephen',
    artistSlug: 'vittore-carpaccio',
    artistName: 'Vittore Carpaccio',
    artistBirthYear: 1465, artistDeathYear: 1525,
    artistNationality: 'Italian (Venetian)',
    artistBio: 'Venetian Renaissance painter. The Stoning of Saint Stephen (c. 1520) was part of his Saint Stephen cycle for the Scuola di Santo Stefano in Venice.',
    artistWikipediaUrl: 'https://en.wikipedia.org/wiki/Vittore_Carpaccio',
    wikimediaFile: 'Vittore Carpaccio 084.jpg',
    year: 1520, medium: 'Oil on canvas',
    bookSlug: 'acts', chapter: 7, verseStart: 54, verseEnd: 60, sceneSlug: 'apostles',
  },

  // ───────── HANS BURGKMAIR — Apocalypse cycle ─────────
  {
    externalId: 'burgkmair-whore-of-babylon',
    title: 'The Whore of Babylon',
    artistSlug: 'hans-burgkmair',
    artistName: 'Hans Burgkmair the Elder',
    artistBirthYear: 1473, artistDeathYear: 1531,
    artistNationality: 'German',
    artistBio: 'German Renaissance printmaker and painter from Augsburg; one of the leading German woodcut artists of the Northern Renaissance.',
    artistWikipediaUrl: 'https://en.wikipedia.org/wiki/Hans_Burgkmair',
    wikimediaFile: 'Burgkmair whore babylon color.jpg',
    year: 1523, medium: 'Woodcut (colored)',
    bookSlug: 'revelation', chapter: 17, verseStart: 1, verseEnd: 18, sceneSlug: 'apocalypse',
  },

  // ───────── EL GRECO — Saint Jude Thaddeus (epistle author) ─────────
  {
    externalId: 'el-greco-st-jude-thaddeus',
    title: 'Saint Jude Thaddeus',
    artistSlug: 'el-greco',
    artistName: 'El Greco (Doménikos Theotokópoulos)',
    artistBirthYear: 1541, artistDeathYear: 1614,
    artistNationality: 'Greek (worked in Spain)',
    artistBio: 'Greek-born painter of the Spanish Renaissance whose dramatic, expressive style anticipated 20th-century modernism.',
    artistWikipediaUrl: 'https://en.wikipedia.org/wiki/El_Greco',
    wikimediaFile: 'El Greco - St. Jude Thaddeus - Google Art Project.jpg',
    year: 1612, medium: 'Oil on canvas',
    bookSlug: 'jude', chapter: 1, verseStart: 1, verseEnd: 4, sceneSlug: 'apostles',
  },

  // ───────── SAINT JAMES THE JUST (epistle author) ─────────
  {
    externalId: 'anon-saint-james-the-just',
    title: 'Saint James the Just',
    artistSlug: 'anonymous-byzantine',
    artistName: 'Anonymous (Byzantine icon tradition)',
    artistBio: 'Byzantine and Eastern Orthodox iconographic portrait of James the Just, brother of Jesus and traditional author of the Epistle of James.',
    wikimediaFile: 'Saint James the Just.jpg',
    year: 1500, medium: 'Tempera on panel',
    bookSlug: 'james', chapter: 1, verseStart: 1, verseEnd: 8, sceneSlug: 'apostles',
  },

  // ───────── HANS BALDUNG — Saint John on Patmos ─────────
  // Tag to 1 John (epistle author tradition) since Memling already covers Revelation 1.
  {
    externalId: 'baldung-st-john-at-patmos',
    title: 'Saint John at Patmos',
    artistSlug: 'hans-baldung',
    artistName: 'Hans Baldung Grien',
    artistBirthYear: 1484, artistDeathYear: 1545,
    artistNationality: 'German',
    artistBio: 'German Renaissance painter and printmaker, pupil of Albrecht Dürer.',
    artistWikipediaUrl: 'https://en.wikipedia.org/wiki/Hans_Baldung',
    wikimediaFile: 'Hans Baldung - St John at Patmos - WGA01203.jpg',
    year: 1511, medium: 'Oil on panel',
    bookSlug: '1-john', chapter: 1, verseStart: 1, verseEnd: 4, sceneSlug: 'apostles',
  },

  // ───────── CARAVAGGIO — Conversion of Saint Paul ─────────
  // Iconographically Acts 9 (Damascus road); but Acts 9 is already covered.
  // Tag instead to Galatians 1 where Paul recounts his own conversion —
  // makes the Galatians intro page useful and the painting fits.
  {
    externalId: 'caravaggio-conversion-of-saul',
    title: 'The Conversion on the Way to Damascus',
    artistSlug: 'caravaggio',
    artistName: 'Caravaggio (Michelangelo Merisi)',
    artistBirthYear: 1571, artistDeathYear: 1610,
    artistNationality: 'Italian',
    artistBio: 'Italian Baroque painter whose dramatic chiaroscuro and naturalistic figures redirected Western religious painting.',
    artistWikipediaUrl: 'https://en.wikipedia.org/wiki/Caravaggio',
    wikimediaFile: 'Conversion on the Way to Damascus-Caravaggio (c.1600-1).jpg',
    year: 1601, medium: 'Oil on canvas',
    bookSlug: 'galatians', chapter: 1, verseStart: 13, verseEnd: 16, sceneSlug: 'apostles',
    description: "Caravaggio's iconic painting of Saul knocked from his horse on the Damascus road — Paul's own account is in Galatians 1:13–16.",
  },

  // ───────── RUBENS — Saint Peter scenes ─────────
  // Tag 'Christ\'s Charge to Peter' to John 21 (already covered by Bloch?
  // unclear — safer: 2 Peter 1 where Peter recalls his commissioning).
  {
    externalId: 'rubens-christs-charge-to-peter',
    title: "Christ's Charge to Peter",
    artistSlug: 'peter-paul-rubens',
    artistName: 'Peter Paul Rubens',
    artistBirthYear: 1577, artistDeathYear: 1640,
    artistNationality: 'Flemish',
    artistBio: 'Flemish Baroque painter whose prolific workshop produced dynamic, sensual altarpieces and history paintings across Catholic Europe.',
    artistWikipediaUrl: 'https://en.wikipedia.org/wiki/Peter_Paul_Rubens',
    wikimediaFile: "Peter Paul Rubens - Christ's Charge to Peter.jpg",
    year: 1616, medium: 'Oil on panel',
    bookSlug: '2-peter', chapter: 1, verseStart: 12, verseEnd: 18, sceneSlug: 'apostles',
  },
];
