// Heinrich Hofmann (1824–1911) — German academic painter whose devotional
// images of Christ became some of the most widely reproduced religious
// paintings of the 19th–20th centuries (most famously Christ in Gethsemane
// and Christ in the Temple). All works are in the public domain and
// verified on Wikimedia Commons.

export type HofmannPainting = {
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

export const HOFMANN_PAINTINGS: HofmannPainting[] = [
  {
    externalId: 'hofmann-christ-in-the-temple',
    title: 'Christ in the Temple',
    wikimediaFile: 'ChristInTheTemple.jpg',
    year: 1881,
    medium: 'Oil on canvas',
    bookSlug: 'luke',
    chapter: 2,
    verseStart: 41,
    verseEnd: 52,
    sceneSlug: 'nativity',
  },
  {
    externalId: 'hofmann-visit-of-the-magi',
    title: 'The Visit of the Wise Men',
    wikimediaFile: 'The visit of the wise-men.jpg',
    year: 1900,
    medium: 'Oil on canvas',
    bookSlug: 'matthew',
    chapter: 2,
    verseStart: 1,
    verseEnd: 12,
    sceneSlug: 'nativity',
  },
  {
    externalId: 'hofmann-christ-and-rich-young-ruler',
    title: 'Christ and the Rich Young Ruler',
    wikimediaFile: 'Hoffman-ChristAndTheRichYoungRuler.jpg',
    year: 1889,
    medium: 'Oil on canvas',
    bookSlug: 'mark',
    chapter: 10,
    verseStart: 17,
    verseEnd: 22,
    sceneSlug: 'teaching',
  },
  {
    externalId: 'hofmann-christ-in-gethsemane',
    title: 'Christ in Gethsemane',
    wikimediaFile: 'Christ in Gethsemane.jpg',
    year: 1890,
    medium: 'Oil on canvas',
    bookSlug: 'matthew',
    chapter: 26,
    verseStart: 36,
    verseEnd: 46,
    sceneSlug: 'passion',
    description: "One of the most reproduced devotional images of the 19th century.",
  },
  {
    externalId: 'hofmann-arrest-of-christ',
    title: 'The Arrest of Christ',
    wikimediaFile: 'Hofmann, Arrest of Christ 1858.jpg',
    year: 1858,
    medium: 'Oil on canvas',
    bookSlug: 'matthew',
    chapter: 26,
    verseStart: 47,
    verseEnd: 56,
    sceneSlug: 'passion',
  },
  {
    externalId: 'hofmann-head-of-christ',
    title: 'Head of Christ',
    wikimediaFile: 'Christ, by Heinrich Hofmann.jpg',
    year: 1894,
    medium: 'Oil on canvas',
    bookSlug: 'john',
    chapter: 14,
    verseStart: 6,
    verseEnd: 6,
    sceneSlug: 'teaching',
  },
  {
    externalId: 'hofmann-jesus-christ-portrait',
    title: 'Jesus Christ',
    wikimediaFile: 'Jesus Christ - Hofmann.jpg',
    year: 1889,
    medium: 'Oil on canvas',
    bookSlug: 'john',
    chapter: 8,
    verseStart: 12,
    verseEnd: 12,
    sceneSlug: 'teaching',
  },
];
