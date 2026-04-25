// Theophanes the Greek (c. 1340 – c. 1410) — Byzantine-trained icon
// painter and muralist who worked in Novgorod and Moscow. Among his
// surviving works are frescoes at the Church of the Transfiguration on
// Ilyin Street (Novgorod, 1378) and icons of the Deësis tier at the
// Annunciation Cathedral in Moscow. All works here are in the public
// domain and verified on Wikimedia Commons.

export type TheophanesIcon = {
  externalId: string;
  title: string;
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

export const THEOPHANES_ICONS: TheophanesIcon[] = [
  {
    externalId: 'theophanes-don-mother-of-god',
    title: 'The Mother of God of the Don',
    wikimediaFile: 'Feofan Donskaja.jpg',
    year: 1392,
    medium: 'Tempera on panel',
    bookSlug: 'luke',
    chapter: 2,
    verseStart: 16,
    verseEnd: 19,
    sceneSlug: 'nativity',
  },
  {
    externalId: 'theophanes-don-mother-of-god-wga',
    title: 'The Mother of God of the Don (alternate)',
    wikimediaFile: 'Feofan Grek - Madonna of Don Icon - WGA22207.jpg',
    year: 1392,
    medium: 'Tempera on panel',
    bookSlug: 'luke',
    chapter: 2,
    verseStart: 16,
    verseEnd: 19,
    sceneSlug: 'nativity',
  },
  {
    externalId: 'theophanes-transfiguration',
    title: 'The Transfiguration',
    wikimediaFile: '1400-10 Theophanes the Greek Transfiguration anagoria.JPG',
    year: 1408,
    medium: 'Tempera on panel',
    bookSlug: 'matthew',
    chapter: 17,
    verseStart: 1,
    verseEnd: 9,
    sceneSlug: 'ministry',
  },
  {
    externalId: 'theophanes-hospitality-of-abraham',
    title: 'The Hospitality of Abraham (Old Testament)',
    wikimediaFile: 'Феофан Грек. Ветхозаветная Троица.jpg',
    year: 1378,
    medium: 'Fresco',
    bookSlug: 'genesis',
    chapter: 18,
    verseStart: 1,
    verseEnd: 15,
    sceneSlug: 'abraham',
  },
  {
    externalId: 'theophanes-stylites',
    title: 'The Stylites',
    wikimediaFile: 'Феофан Грек. Столпники.jpg',
    year: 1378,
    medium: 'Fresco',
    bookSlug: 'hebrews',
    chapter: 11,
    verseStart: 35,
    verseEnd: 40,
    sceneSlug: 'suffering',
  },
  {
    externalId: 'theophanes-patriarch-abel',
    title: 'Patriarch Abel (Spas na Ilyine)',
    wikimediaFile: 'Spas na Ilyine - Patriarch Abel.jpg',
    year: 1378,
    medium: 'Fresco',
    bookSlug: 'genesis',
    chapter: 4,
    verseStart: 1,
    verseEnd: 8,
    sceneSlug: 'fall',
  },
  {
    externalId: 'theophanes-archangel-michael',
    title: 'Archangel Michael (Spas na Ilyine)',
    wikimediaFile: 'Spas na Ilyine - Archangel Michael.jpg',
    year: 1378,
    medium: 'Fresco',
    bookSlug: 'revelation',
    chapter: 12,
    verseStart: 7,
    verseEnd: 9,
    sceneSlug: 'apocalypse',
  },
  {
    externalId: 'theophanes-forerunner',
    title: 'John the Forerunner',
    wikimediaFile: 'Feofan predtecha.jpg',
    year: 1405,
    medium: 'Tempera on panel',
    bookSlug: 'john',
    chapter: 1,
    verseStart: 19,
    verseEnd: 28,
    sceneSlug: 'ministry',
  },
];
