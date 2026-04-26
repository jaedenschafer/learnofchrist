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

  // ═════════════════════════════════════════════════════════════════════
  // PSALMS — second wave: Theodore Psalter, Stuttgart Psalter folios,
  // Harley Psalter folios, plus thematic Psalm paintings.
  //
  // Note on numbering: Theodore Psalter (Byzantine, 1066), Stuttgart
  // Psalter (Carolingian, c.825), Harley 603 (10th c.), and the Bosworth
  // Psalter all use Septuagint/Vulgate psalm numbers, which differ from
  // the Hebrew/English numbering by ±1 across most of the Psalter.
  // Mappings below convert to English Bible numbering (used by this site).
  // ═════════════════════════════════════════════════════════════════════

  // ───────── THEODORE PSALTER (1066, Byzantine) ─────────
  // Filenames carry "Ps.NN" tags — Septuagint numbering, converted below.
  {
    externalId: 'theodore-psalter-david-throne',
    title: "David at the Lord's Throne (Theodore Psalter)",
    artistSlug: 'theodore-of-caesarea',
    artistName: 'Theodore of Caesarea',
    artistBirthYear: 1000, artistDeathYear: 1080,
    artistNationality: 'Byzantine',
    artistBio: 'Byzantine monk-illuminator who in 1066 produced the Theodore Psalter (BL Add MS 19352) at the Stoudios Monastery in Constantinople — one of the most fully illustrated marginal psalters surviving from the post-iconoclastic period.',
    artistWikipediaUrl: 'https://en.wikipedia.org/wiki/Theodore_Psalter',
    wikimediaFile: "Theodore Psalter page 011v. Ps.11.4-6 David at Lord's throne.jpg",
    year: 1066, medium: 'Tempera on parchment',
    // Septuagint Ps 11 = Hebrew/English Ps 12
    bookSlug: 'psalms', chapter: 12, verseStart: 4, verseEnd: 6, sceneSlug: 'wisdom',
  },
  {
    externalId: 'theodore-psalter-baptism',
    title: 'The Baptism of Christ (Theodore Psalter, Ps. 77)',
    artistSlug: 'theodore-of-caesarea', artistName: 'Theodore of Caesarea',
    wikimediaFile: 'Theodore Psalter page 099r Ps 76.17 Baptism of Christ.jpg',
    year: 1066, medium: 'Tempera on parchment',
    // Septuagint 76 = Hebrew 77
    bookSlug: 'psalms', chapter: 77, verseStart: 16, verseEnd: 19, sceneSlug: 'ministry',
  },
  {
    externalId: 'theodore-psalter-moses-aaron',
    title: 'Moses and Aaron (Theodore Psalter, Ps. 77)',
    artistSlug: 'theodore-of-caesarea', artistName: 'Theodore of Caesarea',
    wikimediaFile: 'Theodore Psalter page 099v. Ps.76.21 - Moses and Aaron.jpg',
    year: 1066, medium: 'Tempera on parchment',
    bookSlug: 'psalms', chapter: 77, verseStart: 20, verseEnd: 20, sceneSlug: 'wisdom',
  },
  {
    externalId: 'theodore-psalter-anointing-of-david-78',
    title: 'The Anointing of David (Theodore Psalter, Ps. 78)',
    artistSlug: 'theodore-of-caesarea', artistName: 'Theodore of Caesarea',
    wikimediaFile: 'Theodore Psalter page 106r. Ps.77.68 annoing of David.jpg',
    year: 1066, medium: 'Tempera on parchment',
    bookSlug: 'psalms', chapter: 78, verseStart: 70, verseEnd: 72, sceneSlug: 'wisdom',
  },
  {
    externalId: 'theodore-psalter-anointing-of-david-89',
    title: 'The Anointing of David (Theodore Psalter, Ps. 89)',
    artistSlug: 'theodore-of-caesarea', artistName: 'Theodore of Caesarea',
    wikimediaFile: 'Theodore Psalter page 118v.Ps.88.21 Annoing of David.jpg',
    year: 1066, medium: 'Tempera on parchment',
    bookSlug: 'psalms', chapter: 89, verseStart: 20, verseEnd: 21, sceneSlug: 'wisdom',
  },
  {
    externalId: 'theodore-psalter-ps-95',
    title: 'Sing unto the Lord (Theodore Psalter, Ps. 95)',
    artistSlug: 'theodore-of-caesarea', artistName: 'Theodore of Caesarea',
    wikimediaFile: 'Theodore Psalter page 127r. Ps.94.1.jpg',
    year: 1066, medium: 'Tempera on parchment',
    bookSlug: 'psalms', chapter: 96, verseStart: 1, verseEnd: 1, sceneSlug: 'wisdom',
  },
  {
    externalId: 'theodore-psalter-ps-102',
    title: 'Theodore Psalter, Ps. 102',
    artistSlug: 'theodore-of-caesarea', artistName: 'Theodore of Caesarea',
    wikimediaFile: 'Theodore Psalter page 134r. Ps. 101.7.jpg',
    year: 1066, medium: 'Tempera on parchment',
    bookSlug: 'psalms', chapter: 102, verseStart: 6, verseEnd: 7, sceneSlug: 'suffering',
  },
  {
    externalId: 'theodore-psalter-praising-148',
    title: 'Praise the Lord (Theodore Psalter, Ps. 148)',
    artistSlug: 'theodore-of-caesarea', artistName: 'Theodore of Caesarea',
    wikimediaFile: 'Theodore Psalter - Praising singing, ps 148. 5-14.jpg',
    year: 1066, medium: 'Tempera on parchment',
    bookSlug: 'psalms', chapter: 148, verseStart: 5, verseEnd: 14, sceneSlug: 'wisdom',
  },
  {
    externalId: 'theodore-psalter-david-killing-goliath',
    title: 'David Killing Goliath (Theodore Psalter, Ps. 151)',
    artistSlug: 'theodore-of-caesarea', artistName: 'Theodore of Caesarea',
    wikimediaFile: 'Theodore Psalter page 191r Ps.151. 7-8 - David killing Goliath.jpg',
    year: 1066, medium: 'Tempera on parchment',
    // Septuagint Ps 151 narrates 1 Sam 17 (David and Goliath); no Hebrew
    // psalm equivalent. Tag to the underlying narrative in 1 Samuel.
    bookSlug: '1-samuel', chapter: 17, verseStart: 49, verseEnd: 51, sceneSlug: 'david',
  },
  {
    externalId: 'theodore-psalter-samuel-and-david',
    title: 'Samuel and David (Theodore Psalter)',
    artistSlug: 'theodore-of-caesarea', artistName: 'Theodore of Caesarea',
    wikimediaFile: 'Theodore Psalter page 190r Samuel and David.jpg',
    year: 1066, medium: 'Tempera on parchment',
    bookSlug: '1-samuel', chapter: 16, verseStart: 11, verseEnd: 13, sceneSlug: 'david',
  },
  {
    externalId: 'theodore-psalter-ps-27',
    title: 'Theodore Psalter, Ps. 27',
    artistSlug: 'theodore-of-caesarea', artistName: 'Theodore of Caesarea',
    wikimediaFile: 'Theodore Psalter, Pslam 26, 1066.jpg',
    year: 1066, medium: 'Tempera on parchment',
    // Septuagint Ps 26 = Hebrew Ps 27
    bookSlug: 'psalms', chapter: 27, verseStart: 1, verseEnd: 6, sceneSlug: 'wisdom',
  },
  {
    externalId: 'theodore-psalter-angel-david',
    title: 'Angel Approaching David (Theodore Psalter)',
    artistSlug: 'theodore-of-caesarea', artistName: 'Theodore of Caesarea',
    wikimediaFile: 'Angel approaching David, call to be king, Theodore Psalter.jpg',
    year: 1066, medium: 'Tempera on parchment',
    bookSlug: 'psalms', chapter: 89, verseStart: 19, verseEnd: 20, sceneSlug: 'david',
  },
  {
    externalId: 'theodore-psalter-david-flute',
    title: 'David Playing the Flute (Theodore Psalter)',
    artistSlug: 'theodore-of-caesarea', artistName: 'Theodore of Caesarea',
    wikimediaFile: 'David playing flute, Theodore Psalter.jpg',
    year: 1066, medium: 'Tempera on parchment',
    bookSlug: 'psalms', chapter: 33, verseStart: 1, verseEnd: 3, sceneSlug: 'wisdom',
  },
  {
    externalId: 'theodore-psalter-fol-137r',
    title: 'Theodore Psalter, fol. 137r',
    artistSlug: 'theodore-of-caesarea', artistName: 'Theodore of Caesarea',
    wikimediaFile: 'TheodorePsalter 137r 1.png',
    year: 1066, medium: 'Tempera on parchment',
    bookSlug: 'psalms', chapter: 105, verseStart: 1, verseEnd: 5, sceneSlug: 'wisdom',
  },

  // ───────── STUTTGART PSALTER (Carolingian, c.825) ─────────
  // Folio numbers map to Gallican (Vulgate/Septuagint) psalms; conversion
  // to Hebrew/English numbering applied. Where exact mapping is uncertain,
  // tag to the closest psalm in the run.
  {
    externalId: 'stuttgart-psalter-folio-2r',
    title: 'Stuttgart Psalter, folio 2r (incipit)',
    artistSlug: 'stuttgart-psalter-master',
    artistName: 'Master of the Stuttgart Psalter',
    artistNationality: 'Carolingian (Frankish)',
    artistBio: 'Anonymous Carolingian illuminator (or workshop) responsible for the Stuttgart Psalter (Württembergische Landesbibliothek, Cod.bibl.fol.23, c. 820–830) — one of the most densely illustrated manuscripts of the early Middle Ages, containing 316 illustrations across 150 psalms.',
    artistWikipediaUrl: 'https://en.wikipedia.org/wiki/Stuttgart_Psalter',
    wikimediaFile: 'Stuttgarter Psalter f2r.jpg',
    year: 825, medium: 'Tempera on parchment',
    bookSlug: 'psalms', chapter: 1, verseStart: 1, verseEnd: 6, sceneSlug: 'wisdom',
  },
  {
    externalId: 'stuttgart-psalter-folio-7v',
    title: 'Stuttgart Psalter, folio 7v',
    artistSlug: 'stuttgart-psalter-master', artistName: 'Master of the Stuttgart Psalter',
    wikimediaFile: 'StuttgartPsalter 7v detail.jpg',
    year: 825, medium: 'Tempera on parchment',
    // f.7v area is Psalm 6 (Domine ne in furore)
    bookSlug: 'psalms', chapter: 6, verseStart: 1, verseEnd: 10, sceneSlug: 'suffering',
  },
  {
    externalId: 'stuttgart-psalter-folio-42v',
    title: 'Stuttgart Psalter, folio 42v',
    artistSlug: 'stuttgart-psalter-master', artistName: 'Master of the Stuttgart Psalter',
    wikimediaFile: 'Stuttgart Psalter 42v detail.jpg',
    year: 825, medium: 'Tempera on parchment',
    // f.42v area is approximately Psalm 37 (Hebrew) / 36 (Vulgate)
    bookSlug: 'psalms', chapter: 37, verseStart: 1, verseEnd: 11, sceneSlug: 'wisdom',
  },
  {
    externalId: 'stuttgart-psalter-folio-97v',
    title: 'Stuttgart Psalter, folio 97v',
    artistSlug: 'stuttgart-psalter-master', artistName: 'Master of the Stuttgart Psalter',
    wikimediaFile: 'Stuttgarter Psalter - Cod.bibl.fol.23 97v.jpg',
    year: 825, medium: 'Tempera on parchment',
    // f.97v area is approximately Psalm 81 (Hebrew) / 80 (Vulgate)
    bookSlug: 'psalms', chapter: 81, verseStart: 1, verseEnd: 7, sceneSlug: 'wisdom',
  },
  {
    externalId: 'stuttgart-psalter-folio-163v',
    title: 'Stuttgart Psalter, folio 163v (trumpets)',
    artistSlug: 'stuttgart-psalter-master', artistName: 'Master of the Stuttgart Psalter',
    wikimediaFile: 'Stuttgarter Psalter - Cod.bibl.fol.23, folio 163v.jpg',
    year: 825, medium: 'Tempera on parchment',
    // f.163v is in the late-psalter trumpet/Buisine cluster
    bookSlug: 'psalms', chapter: 149, verseStart: 1, verseEnd: 9, sceneSlug: 'wisdom',
  },

  // ───────── HARLEY PSALTER (BL Harley MS 603, English copy of Utrecht, 10th c.) ─────────
  {
    externalId: 'harley-603-psalm-108',
    title: 'Harley Psalter, Psalm 108 (fol. 55v)',
    artistSlug: 'harley-603-master',
    artistName: 'Master of the Harley Psalter',
    artistNationality: 'English (Anglo-Saxon)',
    artistBio: 'Anonymous English illuminator who, c. 1010 at Christ Church Canterbury, copied and adapted the Utrecht Psalter — producing British Library Harley MS 603, the first of three English copies of the Utrecht model.',
    artistWikipediaUrl: 'https://en.wikipedia.org/wiki/Harley_Psalter',
    wikimediaFile: 'Harley Psalter - BL Harley 603 psalm 108 f55v.jpg',
    year: 1010, medium: 'Pen drawing on parchment',
    bookSlug: 'psalms', chapter: 109, verseStart: 1, verseEnd: 6, sceneSlug: 'suffering',
    // Note: Vulgate Ps 108 = Hebrew Ps 109
  },
  {
    externalId: 'harley-603-folio-2r',
    title: 'Harley Psalter, fol. 2r (Beatus Vir)',
    artistSlug: 'harley-603-master', artistName: 'Master of the Harley Psalter',
    wikimediaFile: 'Harley ms 603 f002r.jpg',
    year: 1010, medium: 'Pen drawing on parchment',
    bookSlug: 'psalms', chapter: 1, verseStart: 1, verseEnd: 6, sceneSlug: 'wisdom',
  },
  {
    externalId: 'harley-603-folio-24v-instruments',
    title: 'Harley Psalter, fol. 24v (musical instruments)',
    artistSlug: 'harley-603-master', artistName: 'Master of the Harley Psalter',
    wikimediaFile: 'Harley Psalter folio 24v instruments.jpg',
    year: 1010, medium: 'Pen drawing on parchment',
    // f.24v area corresponds approximately to Psalm 42-43 (Hebrew)
    bookSlug: 'psalms', chapter: 43, verseStart: 1, verseEnd: 5, sceneSlug: 'wisdom',
  },
  {
    externalId: 'harley-603-folio-50r',
    title: 'Harley Psalter, fol. 50r',
    artistSlug: 'harley-603-master', artistName: 'Master of the Harley Psalter',
    wikimediaFile: 'Harley ms 603 f050r.jpg',
    year: 1010, medium: 'Pen drawing on parchment',
    // f.50r area corresponds approximately to Psalm 100 (Hebrew)
    bookSlug: 'psalms', chapter: 100, verseStart: 1, verseEnd: 5, sceneSlug: 'wisdom',
  },
  {
    externalId: 'harley-603-folio-50v',
    title: 'Harley Psalter, fol. 50v',
    artistSlug: 'harley-603-master', artistName: 'Master of the Harley Psalter',
    wikimediaFile: 'Harley ms 603 f050v.jpg',
    year: 1010, medium: 'Pen drawing on parchment',
    bookSlug: 'psalms', chapter: 101, verseStart: 1, verseEnd: 8, sceneSlug: 'wisdom',
  },
  {
    externalId: 'harley-603-folio-70r',
    title: 'Harley Psalter, fol. 70r',
    artistSlug: 'harley-603-master', artistName: 'Master of the Harley Psalter',
    wikimediaFile: 'Harley ms 603 f070r.jpg',
    year: 1010, medium: 'Pen drawing on parchment',
    // f.70r area corresponds approximately to Psalm 140-141 (Hebrew)
    bookSlug: 'psalms', chapter: 141, verseStart: 1, verseEnd: 10, sceneSlug: 'suffering',
  },

  // ───────── BOSWORTH PSALTER (BL Add MS 37517, 10th c.) ─────────
  {
    externalId: 'bosworth-psalter-quid-gloriaris',
    title: 'Bosworth Psalter, Quid Gloriaris (fol. 33r)',
    artistSlug: 'bosworth-psalter-master',
    artistName: 'Master of the Bosworth Psalter',
    artistNationality: 'English (Anglo-Saxon)',
    artistBio: 'Late 10th-century English illuminator (Canterbury or Glastonbury) responsible for the Bosworth Psalter, BL Add MS 37517.',
    artistWikipediaUrl: 'https://en.wikipedia.org/wiki/Bosworth_Psalter',
    wikimediaFile: 'Bosworth Psalter - British Library Add MS 37517 f33r (Quid Gloriaris).jpg',
    year: 990, medium: 'Tempera on parchment',
    // "Quid gloriaris" = Vulgate Ps 51 = Hebrew Ps 52
    bookSlug: 'psalms', chapter: 52, verseStart: 1, verseEnd: 9, sceneSlug: 'wisdom',
  },

  // ───────── SAINT LOUIS PSALTER (Paris, c.1255) ─────────
  {
    externalId: 'saint-louis-psalter-30v',
    title: 'Saint Louis Psalter, fol. 30v',
    artistSlug: 'saint-louis-psalter-master',
    artistName: 'Master of the Saint Louis Psalter',
    artistNationality: 'French (Gothic)',
    artistBio: 'Anonymous Parisian illuminators who, c. 1255–1270, produced the Psalter of Saint Louis (BnF Latin 10525) for King Louis IX — one of the supreme achievements of Gothic illumination.',
    artistWikipediaUrl: 'https://en.wikipedia.org/wiki/Psalter_of_Saint_Louis',
    wikimediaFile: 'Saint Louis Psalter 30 verso.jpg',
    year: 1260, medium: 'Tempera and gold on parchment',
    // f.30v of the Saint Louis Psalter is in the prefatory cycle showing
    // Old Testament narrative scenes — typical placement is Genesis stories.
    bookSlug: 'genesis', chapter: 22, verseStart: 1, verseEnd: 14, sceneSlug: 'abraham',
  },

  // ───────── BL STOWE 2 PSALTER ─────────
  {
    externalId: 'stowe-2-psalm-52-initial',
    title: 'Stowe Psalter, Initial Q (fol. 56r) — Psalm 52',
    artistSlug: 'stowe-2-master',
    artistName: 'Master of the Stowe 2 Psalter',
    artistNationality: 'English (Anglo-Saxon)',
    wikimediaFile: 'PsalterBLStowe2Folio56rInitialQ.jpg',
    year: 1050, medium: 'Tempera on parchment',
    bookSlug: 'psalms', chapter: 52, verseStart: 1, verseEnd: 9, sceneSlug: 'wisdom',
  },

  // ───────── VITAE IMPERATORUM CHOIR PSALTER (Cleveland Museum) ─────────
  {
    externalId: 'vitae-imperatorum-beatus-vir',
    title: 'Initial B (Beatus Vir) — Choir Psalter',
    artistSlug: 'vitae-imperatorum-master',
    artistName: "Master of the Vitae Imperatorum",
    artistBirthYear: 1430, artistDeathYear: 1460,
    artistNationality: 'Italian',
    artistBio: '15th-century Lombard illuminator named for the manuscript of Suetonius\'s Vitae Imperatorum he illustrated; this Beatus Vir initial opens a choir psalter.',
    wikimediaFile: 'Master of the \'Vitae Imperatorum\' - Initial "B" (eatus Vir) from a Choir Psalter - 2011.50 - Cleveland Museum of Art.tif',
    year: 1450, medium: 'Tempera and gold on parchment',
    bookSlug: 'psalms', chapter: 1, verseStart: 1, verseEnd: 3, sceneSlug: 'wisdom',
  },

  // ───────── VESPASIAN PSALTER (8th c. Anglo-Saxon) ─────────
  {
    externalId: 'vespasian-david-musicians',
    title: 'David and his Musicians (Vespasian Psalter, fol. 30v)',
    artistSlug: 'vespasian-psalter-master',
    artistName: 'Master of the Vespasian Psalter',
    artistNationality: 'Anglo-Saxon',
    artistBio: 'Anonymous 8th-century English illuminator responsible for the Vespasian Psalter (BL Cotton MS Vespasian A I), among the earliest surviving Anglo-Saxon illuminated manuscripts.',
    artistWikipediaUrl: 'https://en.wikipedia.org/wiki/Vespasian_Psalter',
    wikimediaFile: 'VespasianPsalterFolio30VDavidWthMusicians.jpg',
    year: 730, medium: 'Tempera on parchment',
    // The David & Musicians frontispiece introduces the entire Psalter — tag to Ps 1
    bookSlug: 'psalms', chapter: 33, verseStart: 1, verseEnd: 5, sceneSlug: 'wisdom',
  },

  // ───────── BRISTOL PSALTER ─────────
  {
    externalId: 'bristol-psalter-chaldeans-captives',
    title: 'Chaldean Soldiers with Hebrew Captives (Bristol Psalter)',
    artistSlug: 'bristol-psalter-master',
    artistName: 'Master of the Bristol Psalter',
    artistNationality: 'Byzantine',
    artistBio: 'Anonymous 11th-century Byzantine illuminator responsible for the Bristol Psalter (BL Add MS 40731), a marginal psalter in the Khludov tradition.',
    artistWikipediaUrl: 'https://en.wikipedia.org/wiki/Bristol_Psalter',
    wikimediaFile: 'Chaldean soldiers with Hebrew captives.jpg',
    year: 1070, medium: 'Tempera on parchment',
    // Iconographic referent: Psalm 137 (the Babylonian captivity)
    bookSlug: 'psalms', chapter: 137, verseStart: 1, verseEnd: 9, sceneSlug: 'suffering',
  },

  // ───────── REMBRANDT — Saul and David ─────────
  // Tag to 1 Samuel 16 (the source narrative) since Psalms is well-served above.
  {
    externalId: 'rembrandt-saul-and-david',
    title: 'Saul and David',
    artistSlug: 'rembrandt-van-rijn',
    artistName: 'Rembrandt van Rijn',
    artistBirthYear: 1606, artistDeathYear: 1669,
    artistNationality: 'Dutch',
    artistBio: 'Dutch Golden Age painter and printmaker; one of the supreme religious painters in Western history.',
    artistWikipediaUrl: 'https://en.wikipedia.org/wiki/Rembrandt',
    wikimediaFile: 'Saul and David by Rembrandt Mauritshuis 621.jpg',
    year: 1655, medium: 'Oil on canvas',
    bookSlug: '1-samuel', chapter: 16, verseStart: 14, verseEnd: 23, sceneSlug: 'david',
  },

  // ───────── DAVID DANCING BEFORE THE ARK (Rijksmuseum print) ─────────
  // 1 Chronicles 15 (David brings the Ark to Jerusalem) — fills the 1 Chr gap.
  {
    externalId: 'rijks-david-dancing-before-ark',
    title: 'David Dancing Before the Ark of the Covenant',
    artistSlug: 'anonymous-rijks-engraver',
    artistName: 'Anonymous (17th-c. Dutch engraver)',
    artistNationality: 'Dutch',
    artistBio: 'Anonymous 17th-century Dutch print after a Wierix-school composition of David dancing before the Ark.',
    wikimediaFile: 'David speelt op zijn harp en danst voor de Ark van het Verbond, RP-P-OB-116.025.jpg',
    year: 1640, medium: 'Engraving',
    bookSlug: '1-chronicles', chapter: 15, verseStart: 25, verseEnd: 29, sceneSlug: 'david',
  },

  // ───────── PSALM 23 — generic Good Shepherd / Sheep ─────────
  {
    externalId: 'lord-is-my-good-shepherd',
    title: 'The Lord is my Shepherd (Psalm 23)',
    artistSlug: 'anonymous-19c',
    artistName: 'Anonymous (19th-century engraver)',
    wikimediaFile: 'The Lord is my Good Shepherd.jpg',
    year: 1880, medium: 'Engraving',
    bookSlug: 'psalms', chapter: 23, verseStart: 1, verseEnd: 6, sceneSlug: 'wisdom',
  },
];
