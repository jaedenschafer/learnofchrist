import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const SECOND_ESDRAS_10: RichChapterContent = {
  bookSlug: '2-esdras',
  bookName: '2 Esdras',
  chapter: 10,

  intros: [
    'The woman mourning her son is unveiled. She is not a widow but the Holy City itself—Zion—separated from her beloved. Yet in the revelation, she is transfigured, crowned with glory, transformed into a place of radiance.',
    'The vision moves from grief to restoration. What appeared to be loss is revealed as transition toward renewal. Zion shall be restored, more glorious than before.',
  ],

  sections: [
    {
      ref: '2 Esdras 10:1–10',
      title: 'The Revelation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(1, 'And as she thus spake, her face shone like the sun.'),
            plain(3, 'And I said unto her, Who art thou?'),
            plain(5, 'And she said, I am the city of Zion, the beloved of God.'),
            plain(8, 'And now do I mourn, separated from my Beloved, awaiting His return.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras10-zion',
          html:
            'The mourning woman is unveiled as Zion, the Holy City. Her grief is real—separation from God. Yet her identity is irrevocable: she is the beloved of God. This love will not be broken; it will be restored.',
        },
        {
          kind: 'hebrew',
          id: 'esdras10-tzion',
          title: 'Tzion—Zion',
          script: 'צִיּוֹן',
          translit: '<strong>Tzion</strong> · Zion; the holy city; God&apos;s dwelling',
          description: 'Zion is not merely a geographical location but the symbol of God&apos;s presence and covenant with His people. When Zion mourns, all of humanity mourns.',
        },
        {
          kind: 'christ',
          id: 'esdras10-christ-betrothed',
          title: 'Christ Connection—The Beloved Returns',
          html:
            'Jesus comes as the Beloved returning to His city. The separation is healed in Him. He becomes the Bridegroom; the Church becomes His Bride, arrayed in glory.',
        },
        {
          kind: 'carry',
          html:
            'You are part of Zion—God&apos;s beloved city. Your separation from Him, your exile, is real. Yet you are promised restoration. The Beloved has not forgotten you.',
        },
        {
          kind: 'reflection',
          id: 'esdras10-beloved',
          prompt: 'What does it mean to know that you are God&apos;s beloved? How does this identity shape how you understand your separation and longing for Him?',
        },
      ],
    },

    {
      ref: '2 Esdras 10:25–28',
      title: 'Zion Glorified',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(25, 'And as I beheld, the woman was no more.'),
            plain(26, 'But in her place stood a great and glorious city, its foundations shining like precious stones.'),
            plain(27, 'And the gates were made of pure light, and the inhabitants rejoiced without end.'),
            plain(28, 'This is Zion restored, the dwelling place of God with men.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras10-glory',
          html:
            'The mourning woman transforms into a glorious city. Zion is restored, more beautiful than memory. She has become the place of God&apos;s dwelling with humanity. This is the ultimate vision—creation and Creator reconciled.',
        },
        {
          kind: 'greek',
          id: 'esdras10-doxa',
          title: 'Doxa—Glory',
          script: 'δόξα',
          translit: '<strong>Doxa</strong> · glory; magnificence; divine splendor',
          description: 'Glory is not mere beauty but the manifest presence of God. When Zion is glorified, it shines with the doxa of the Almighty.',
        },
        {
          kind: 'christ',
          id: 'esdras10-christ-city',
          title: 'Christ Connection—The New Jerusalem',
          html:
            'In Revelation, John sees the New Jerusalem descending from heaven, radiant with God&apos;s glory. It is the fulfillment of this vision—the City of God dwelling with humanity, grief wiped away.',
        },
        {
          kind: 'carry',
          html:
            'This vision promises that grief is not eternal. The city awaits you—glorified, restored, luminous with God&apos;s presence. Your mourning shall be transformed into joy.',
        },
        {
          kind: 'reflection',
          id: 'esdras10-restored',
          prompt: 'What would it mean for your deepest grief to be transformed into glory? Can you imagine the restoration God promises?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'And she said, I am the city of Zion, the beloved of God. But in her place stood a great and glorious city, its foundations shining like precious stones.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Esdras 10 · Study Guide',
  },

  hasHebrew: true,
};
