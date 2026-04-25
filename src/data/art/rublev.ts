// Andrei Rublev (c. 1360s–1430) — Medieval Russian iconographer.
// Surviving icons attributed to him include the Hospitality of Abraham
// (the famous icon often called the "Old Testament Trinity") and the
// festal tier of the Annunciation Cathedral in the Moscow Kremlin
// (c. 1405). All works are in the public domain and verified on
// Wikimedia Commons.

export type RublevIcon = {
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

export const RUBLEV_ICONS: RublevIcon[] = [
  {
    externalId: 'rublev-hospitality-of-abraham',
    title: 'The Hospitality of Abraham',
    wikimediaFile: 'Rublev Troitsa.jpg',
    year: 1411,
    medium: 'Tempera on panel',
    bookSlug: 'genesis',
    chapter: 18,
    verseStart: 1,
    verseEnd: 15,
    sceneSlug: 'abraham',
    description: 'Three visitors at the oak of Mamre, painted c. 1411–1425 for the Trinity Cathedral at Sergiev Posad.',
  },
  {
    externalId: 'rublev-annunciation-festal',
    title: 'The Annunciation (Festal Tier)',
    wikimediaFile: 'Annunciation (Annunciation Cathedral in Moscow).jpg',
    year: 1405,
    medium: 'Tempera on panel',
    bookSlug: 'luke',
    chapter: 1,
    verseStart: 26,
    verseEnd: 38,
    sceneSlug: 'nativity',
  },
  {
    externalId: 'rublev-annunciation-sergiev-posad',
    title: 'The Annunciation (Sergiev Posad)',
    wikimediaFile: 'Annunciation (1420s, Sergiev Posad).jpg',
    year: 1425,
    medium: 'Tempera on panel',
    bookSlug: 'luke',
    chapter: 1,
    verseStart: 26,
    verseEnd: 38,
    sceneSlug: 'nativity',
  },
  {
    externalId: 'rublev-nativity',
    title: 'The Nativity',
    wikimediaFile: 'Nativity (15th c., Annunciation Cathedral in Moscow).jpg',
    year: 1405,
    medium: 'Tempera on panel',
    bookSlug: 'luke',
    chapter: 2,
    verseStart: 6,
    verseEnd: 14,
    sceneSlug: 'nativity',
  },
  {
    externalId: 'rublev-presentation',
    title: 'The Presentation in the Temple (Sretenie)',
    wikimediaFile: 'Sretenie (Annunciation Cathedral in Moscow).jpg',
    year: 1405,
    medium: 'Tempera on panel',
    bookSlug: 'luke',
    chapter: 2,
    verseStart: 22,
    verseEnd: 38,
    sceneSlug: 'nativity',
  },
  {
    externalId: 'rublev-baptism',
    title: 'The Baptism of Christ',
    wikimediaFile: 'Baptism (15th c., Annunciation Cathedral in Moscow).jpg',
    year: 1405,
    medium: 'Tempera on panel',
    bookSlug: 'matthew',
    chapter: 3,
    verseStart: 13,
    verseEnd: 17,
    sceneSlug: 'ministry',
  },
  {
    externalId: 'rublev-transfiguration',
    title: 'The Transfiguration',
    wikimediaFile: 'Transfiguration (Annunciation Cathedral, Kremlin).jpg',
    year: 1405,
    medium: 'Tempera on panel',
    bookSlug: 'matthew',
    chapter: 17,
    verseStart: 1,
    verseEnd: 9,
    sceneSlug: 'ministry',
  },
  {
    externalId: 'rublev-resurrection-of-lazarus',
    title: 'The Resurrection of Lazarus',
    wikimediaFile: 'Resurrection of Lazarus (Annunciation Cathedral in Moscow).jpg',
    year: 1405,
    medium: 'Tempera on panel',
    bookSlug: 'john',
    chapter: 11,
    verseStart: 38,
    verseEnd: 44,
    sceneSlug: 'miracles',
  },
  {
    externalId: 'rublev-entry-into-jerusalem',
    title: 'The Entry into Jerusalem',
    wikimediaFile: 'Entry into Jerusalem (Annunciation Cathedral in Moscow).jpg',
    year: 1405,
    medium: 'Tempera on panel',
    bookSlug: 'matthew',
    chapter: 21,
    verseStart: 1,
    verseEnd: 11,
    sceneSlug: 'passion',
  },
  {
    externalId: 'rublev-ascension',
    title: 'The Ascension',
    wikimediaFile: 'Ascension (1410-20s, GTG).jpg',
    year: 1415,
    medium: 'Tempera on panel',
    bookSlug: 'acts',
    chapter: 1,
    verseStart: 9,
    verseEnd: 11,
    sceneSlug: 'ascension',
  },
  {
    externalId: 'rublev-saviour-of-zvenigorod',
    title: 'The Saviour of Zvenigorod',
    wikimediaFile: "Rublev's saviour.jpg",
    year: 1410,
    medium: 'Tempera on panel',
    bookSlug: 'john',
    chapter: 14,
    verseStart: 6,
    verseEnd: 9,
    sceneSlug: 'teaching',
  },
  {
    externalId: 'rublev-vladimirskaya',
    title: 'The Vladimir Mother of God (after the original)',
    wikimediaFile: 'Vladimirskaya by A.Rublev (1395-1410s, Vladimir museum).jpg',
    year: 1408,
    medium: 'Tempera on panel',
    bookSlug: 'luke',
    chapter: 2,
    verseStart: 16,
    verseEnd: 19,
    sceneSlug: 'nativity',
  },
];
