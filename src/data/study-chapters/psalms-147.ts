import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 147 — He Healeth the Broken in Heart
 *
 * "Praise ye the Lord: for it is good to sing praises unto our God...He healeth
 * the broken in heart, and bindeth up their wounds." The psalm opens with an
 * exhortation to praise and immediately shows why: the Lord heals the broken,
 * binds wounds, counts the stars, calls them all by name. The theme is presence
 * and care—God&apos;s intimate knowledge of the cosmos and His intimate compassion
 * for broken human hearts. He is not a distant mechanic winding up the universe.
 * He is a healer, present and tender.
 */
export const PSALMS_147: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 147,

  estimatedMinutes: { 5: 1, 10: 3, 15: 3 },
  intros: [
    'Psalm 147 is a meditation on God&apos;s dual greatness: His cosmic power and His personal compassion. The Lord gathers the outcasts of Israel. He heals the broken in heart and binds their wounds. Yet He also has all the stars in His knowledge—He calls them all by name. The psalm refuses to separate cosmic authority from personal care. The God who orders the stars knows the number of hairs on your head. He who brings forth the snow and scatters the frost cares for the broken, the rejected, the wounded. Both truths flow from the same God.',
  ],

  sections: [
    {
      ref: 'Psalm 147:1–6',
      title: 'He Healeth the Broken in Heart',
      blocks: [
        {
          kind: 'scripture',
          chapter: 147,
          lines: [
            plain(1, 'Praise ye the Lord: for it is good to sing praises unto our God; for it is pleasant; and praise is comely.'),
            plain(2, 'The Lord doth build up Jerusalem: he gathereth together the outcasts of Israel.'),
            plain(3, 'He healeth the broken in heart, and bindeth up their wounds.'),
            plain(4, 'He telleth the number of the stars; he calleth them all by their names.'),
            plain(5, 'Great is our Lord, and of great power: his understanding is infinite.'),
            plain(6, 'The Lord lifteth up the meek: he casteth the wicked down to the ground.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalm147-good-pleasant',
          html:
            '"Praise ye the Lord: for it is good to sing praises unto our God; for it is pleasant; and praise is comely." The opening establishes why praise should be given: it is good, pleasant, appropriate. Not obligatory out of fear, but naturally fitting, beautiful, becoming.',
        },
        {
          kind: 'hebrew',
          id: 'psalm147-rapha',
          title: 'Rapha — "Healeth" (Heals)',
          script: 'רָפָא',
          translit: '<strong>Rapha</strong> · to heal, to make whole, to mend, to restore',
          description:
            'The verb rapha means to heal or mend. It is used of physicians healing sickness, of God healing the nation, of God healing the soul. It implies restoration to wholeness.',
        },
        {
          kind: 'commentary',
          id: 'psalm147-broken-heart',
          html:
            '"He healeth the broken in heart, and bindeth up their wounds." The broken in heart are those whose spirit is shattered, whose grief is overwhelming, whose sense of self is fractured. God heals them. The image of binding wounds is tender—like a physician or nurse caring for injury. God is present in the brokenness, not distant from it.',
        },
        {
          kind: 'commentary',
          id: 'psalm147-stars',
          html:
            '"He telleth the number of the stars; he calleth them all by their names." The scope expands to cosmic. God knows the number of stars—not roughly, but exactly. And He calls them all by name. In antiquity, stars were considered divine, eternal, beyond human reach. Yet God knows and names them all. His knowledge is complete, infinite.',
        },
        {
          kind: 'commentary',
          id: 'psalm147-infinite',
          html:
            '"Great is our Lord, and of great power: his understanding is infinite." The infinite understanding includes both the cosmic and the intimate. God understands the movements of stars and the movements of a broken heart. His understanding encompasses all.',
        },
      ],
    },

    {
      ref: 'Psalm 147:7–20',
      title: 'Nature and Providence',
      blocks: [
        {
          kind: 'scripture',
          chapter: 147,
          lines: [
            plain(7, 'Sing unto the Lord with thanksgiving; sing praise upon the harp unto our God:'),
            plain(8, 'Who covereth the heaven with clouds, who prepareth rain for the earth, who maketh grass to grow upon the mountains.'),
            plain(9, 'He giveth to the beast his food, and to the young ravens which cry.'),
            plain(10, 'He delighteth not in the strength of the horse: he taketh not pleasure in the legs of a man.'),
            plain(11, 'The Lord taketh pleasure in them that fear him, in those that hope in his mercy.'),
            plain(12, 'Praise the Lord, O Jerusalem; praise thy God, O Zion.'),
            plain(13, 'For he hath strengthened the bars of thy gates; he hath blessed thy children within thee.'),
            plain(14, 'He maketh peace in thy borders, and filleth thee with the finest of the wheat.'),
            plain(15, 'He sendeth forth his commandment upon earth: his word runneth very swiftly.'),
            plain(16, 'He giveth snow like wool: he scattereth the hoarfrost like ashes.'),
            plain(17, 'He casteth forth his ice like morsels: who can stand before his cold?'),
            plain(18, 'He sendeth out his word, and melteth them: he causeth his wind to blow, and the waters flow.'),
            plain(19, 'He sheweth his word unto Jacob, his statutes and his judgments unto Israel.'),
            plain(20, 'He hath not dealt so with any nation: and as for his judgments, they have not known them. Praise ye the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalm147-rain',
          html:
            'The psalm catalogs God&apos;s providential care: He covers heaven with clouds and prepares rain for the earth. He makes grass grow on mountains. He gives food to beasts and ravens. These are not minor acts. They are the fundamental structures of creation—sustenance, nourishment, the maintenance of life.',
        },
        {
          kind: 'commentary',
          id: 'psalm147-not-horse',
          html:
            '"He delighteth not in the strength of the horse: he taketh not pleasure in the legs of a man." God does not measure greatness by human standards—by military might, by physical prowess, by earthly power. Instead, "The Lord taketh pleasure in them that fear him, in those that hope in his mercy." True greatness, in God&apos;s sight, is reverence and hope in His mercy.',
        },
        {
          kind: 'commentary',
          id: 'psalm147-snow-ice',
          html:
            'The psalm then describes weather—snow, hoarfrost, ice—in poetic terms. Snow is like wool; hoarfrost is like ashes scattered abroad; ice is like morsels cast down. These are not harsh images alone. They are observations of nature&apos;s beauty. And God sends them. He sends His word, and the ice melts. The wind blows, and waters flow. All of nature responds to God&apos;s word.',
        },
        {
          kind: 'commentary',
          id: 'psalm147-jacob',
          html:
            '"He sheweth his word unto Jacob, his statutes and his judgments unto Israel." The psalm then moves from universal providence to particular revelation. God has shown His word—His instruction, His will—to Israel. This is covenant. This is the special relationship God has with His people.',
        },
        {
          kind: 'christ',
          id: 'psalm147-christ-heals',
          title: 'Christ Connection — The Healer',
          html:
            'In Luke 4:18, Jesus announces: "The Spirit of the Lord is upon me, because he hath anointed me to preach the gospel to the poor; he hath sent me to heal the brokenhearted." Christ is the healer the psalm celebrates. He binds the wounds of the broken, cares for the overlooked, and reveals God&apos;s mercy in human form.',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'He healeth the broken in heart, and bindeth up their wounds...He calleth them all by their names.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 147 · Study Guide',
  },

  hasHebrew: true,
};
