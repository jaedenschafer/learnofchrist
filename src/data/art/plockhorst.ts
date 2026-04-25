// Bernhard Plockhorst (1825–1907) — German painter best known for his
// devotional religious images, especially "Christ Blessing the Children",
// "The Good Shepherd", and "Guardian Angel". All works are in the public
// domain and verified on Wikimedia Commons.

export type PlockhorstPainting = {
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

export const PLOCKHORST_PAINTINGS: PlockhorstPainting[] = [
  {
    externalId: 'plockhorst-suffer-the-children',
    title: 'Christ Blessing the Children (Lasset die Kindlein)',
    wikimediaFile: 'Bernhard Plockhorst Lasset die Kindlein.jpg',
    year: 1885,
    medium: 'Oil on canvas',
    bookSlug: 'mark',
    chapter: 10,
    verseStart: 13,
    verseEnd: 16,
    sceneSlug: 'teaching',
  },
  {
    externalId: 'plockhorst-good-shepherd',
    title: 'The Good Shepherd',
    wikimediaFile: 'Bernhard Plockhorst - Good Shephard.jpg',
    year: 1878,
    medium: 'Oil on canvas',
    bookSlug: 'john',
    chapter: 10,
    verseStart: 11,
    verseEnd: 16,
    sceneSlug: 'teaching',
  },
  {
    externalId: 'plockhorst-guardian-angel',
    title: 'Guardian Angel (Schutzengel)',
    wikimediaFile: 'Bernhard Plockhorst - Schutzengel.jpg',
    year: 1900,
    medium: 'Oil on canvas',
    bookSlug: 'psalms',
    chapter: 91,
    verseStart: 11,
    verseEnd: 12,
    sceneSlug: 'deliverance',
  },
  {
    externalId: 'plockhorst-victory-over-the-grave',
    title: 'Victory over the Grave',
    wikimediaFile: 'Victory over the Grave.jpg',
    year: 1880,
    medium: 'Oil on canvas',
    bookSlug: 'matthew',
    chapter: 28,
    verseStart: 1,
    verseEnd: 7,
    sceneSlug: 'resurrection',
  },
  {
    externalId: 'plockhorst-immanuelkirche-altarpiece',
    title: 'Immanuelkirche Altarpiece (Berlin)',
    wikimediaFile: 'Berlin Immanuelkirche Altarbild.JPG',
    year: 1893,
    medium: 'Oil on canvas',
    bookSlug: 'matthew',
    chapter: 11,
    verseStart: 28,
    verseEnd: 30,
    sceneSlug: 'teaching',
  },
];
