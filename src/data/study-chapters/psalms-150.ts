import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 150 — Let Every Thing That Hath Breath Praise the Lord
 *
 * "Praise ye the Lord...Praise him in his sanctuary...Praise him in the firmament
 * of his power...Praise him with the sound of the trumpet...with the psaltery and
 * harp...with the timbrel and dance...with stringed instruments and organs...with
 * the loud cymbals." The final psalm of the Psalter is the ultimate crescendo—
 * calling everything that exists, in every place, with every instrument, to give
 * praise. "Let every thing that hath breath praise the Lord." And then, the
 * briefest of closings: "Praise ye the Lord."
 */
export const PSALMS_150: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 150,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  intros: [
    'Psalm 150 is the final psalm of the Psalter—the conclusion of 150 chapters of prayer, lament, praise, thanksgiving, and petition. It is entirely praise. There is no complaint, no petition, no lament. Only the single command, repeated and amplified: praise. The psalm catalogs where praise should happen ("in his sanctuary"), why it should happen ("for his mighty acts," "for his excellent greatness"), and how it should happen (with every instrument named—trumpet, psaltery, harp, timbrel, dance, stringed instruments, organs, loud cymbals). The climax is universal: "Let every thing that hath breath praise the Lord." The Psalter ends not with a question or a sigh, but with the cry: "Praise ye the Lord." It is both an ending and an invitation that echoes beyond the text into the life of the reader.',
  ],

  sections: [
    {
      ref: 'Psalm 150:1–6',
      title: 'The Ultimate Praise',
      blocks: [
        {
          kind: 'scripture',
          chapter: 150,
          lines: [
            plain(1, 'Praise ye the Lord. Praise God in his sanctuary: praise him in the firmament of his power.'),
            plain(2, 'Praise him for his mighty acts: praise him according to his excellent greatness.'),
            plain(3, 'Praise him with the sound of the trumpet: praise him with the psaltery and harp.'),
            plain(4, 'Praise him with the timbrel and dance: praise him with stringed instruments and organs.'),
            plain(5, 'Praise him upon the loud cymbals: praise him upon the high sounding cymbals.'),
            plain(6, 'Let every thing that hath breath praise the Lord. Praise ye the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalm150-sanctuary',
          html:
            '"Praise God in his sanctuary: praise him in the firmament of his power." The psalm opens with location: praise in the sanctuary—the holy place, God&apos;s dwelling. But also "in the firmament of his power"—in the heavens, where God&apos;s power is displayed. Praise belongs in both places: the inner sanctuary and the outer cosmos.',
        },
        {
          kind: 'hebrew',
          id: 'psalm150-geburah',
          title: 'Geburah — "Mighty Acts" (Strength)',
          script: 'גְבוּרָה',
          translit: '<strong>Geburah</strong> · strength, power, mighty deeds, acts of valor',
          description:
            'Geburah encompasses both the strength of God and the displays of that strength—the mighty acts that reveal His power. All through Scripture, God&apos;s mighty deeds—creation, exodus, salvation—are cause for praise.',
        },
        {
          kind: 'commentary',
          id: 'psalm150-mighty-acts',
          html:
            '"Praise him for his mighty acts: praise him according to his excellent greatness." The reasons for praise are named: His mighty acts and His excellent greatness. We praise because of what He has done and who He is. The deeds of God and the nature of God are inseparable.',
        },
        {
          kind: 'commentary',
          id: 'psalm150-instruments',
          html:
            'Then the instruments are named, in rapid succession, building to a crescendo: trumpet, psaltery, harp, timbrel, dance, stringed instruments, organs, cymbals (loud and high-sounding). The catalog is not exhaustive. It is exemplary—a representation of every possible sound, every possible way of making music. Every instrument humanity has created is called to praise.',
        },
        {
          kind: 'commentary',
          id: 'psalm150-breath',
          html:
            '"Let every thing that hath breath praise the Lord." This is the final word before the closing call: every creature that lives, that breathes, is called to praise. Not just humans, not just the righteous, but every living thing. The call is universal and total.',
        },
        {
          kind: 'commentary',
          id: 'psalm150-closing',
          html:
            '"Praise ye the Lord." And then the briefest of endings: the command repeated once more. It is both conclusion and perpetual invitation. The Psalter ends as it began—with the call to praise. And the call does not end with the book. It echoes into the life of the reader: Praise ye the Lord.',
        },
        {
          kind: 'carry',
          html:
            'Psalm 150 reminds us that praise is the natural response to encountering God. It is not obligation or duty. It is joy breaking forth, gratitude finding voice, the soul recognizing its Maker and responding with everything it has. The psalm asks: What will your praise look like? What instruments will you use? What voice will you add to the cosmic chorus that praises God without ceasing?',
        },
        {
          kind: 'reflection',
          id: 'psalm150-final',
          prompt: 'As you come to the end of the Psalter, what would it mean for you to join in the final cry: "Let every thing that hath breath praise the Lord"? How might your whole life—your work, your rest, your struggles, your joys—become an offering of praise?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Praise ye the Lord...Let every thing that hath breath praise the Lord. Praise ye the Lord.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 150 · Study Guide',
  },

  hasHebrew: true,
};
