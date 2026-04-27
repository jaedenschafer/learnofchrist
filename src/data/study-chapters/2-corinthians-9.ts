import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Corinthians 9 — God Loveth a Cheerful Giver
 *
 * Paul continues on the theme of giving. God loves a cheerful giver. The one
 * who gives with joy, with grace, with faith that God will provide, pleases God.
 * Generosity is not a tax on the wealthy. It is the flowering of grace in every
 * heart.
 */
export const SECOND_CORINTHIANS_9: RichChapterContent = {
  bookSlug: '2-corinthians',
  bookName: '2 Corinthians',
  chapter: 9,

  intros: [
    'Paul concludes his teaching on generosity. The collection for Jerusalem is not a burden imposed from above. It is an opportunity for the Corinthians to express their faith in God&apos;s provision and their love for their brothers. The measure of generosity is not the amount given, but the spirit in which it is given.',
    'The famous verse—&quot;God loveth a cheerful giver&quot;—captures the essence of biblical generosity. It is not extracted from the unwilling. It flows from hearts transformed by grace, confident in God&apos;s abundance.',
  ],

  sections: [
    {
      ref: '2 Corinthians 9:1–9',
      title: 'Giving with Joy and Faith',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(6, 'But this I say, He which soweth sparingly shall reap also sparingly; and he which soweth bountifully shall reap also bountifully.'),
            plain(7, 'Every man according as he hath purposed in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver.'),
            plain(8, 'And God is able to make all grace abound toward you; that ye, always having all sufficiency in all things, may abound to every good work:'),
            plain(9, 'As it is written, He hath dispersed abroad; he hath given to the poor: his righteousness remaineth for ever.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-9-sow',
          html:
            'Paul uses the metaphor of sowing: &quot;He which soweth sparingly shall reap also sparingly; and he which soweth bountifully shall reap also bountifully.&quot; This is not a formula for prosperity theology. It is a statement of harvest. What you sow, you will reap.',
        },
        {
          kind: 'greek',
          id: 'cor2-9-hilaros',
          title: 'Hilaros — Cheerful',
          script: 'ἱλαρός',
          translit: '<strong>Hilaros</strong> · cheerful; joyful; ready; willing',
          description:
            'A hilaros giver is one who gives with lightness of heart, with joy, without resentment. The opposite is the giver motivated by obligation, duty, or pressure.',
        },
        {
          kind: 'commentary',
          id: 'cor2-9-purpose',
          html:
            '&quot;Every man according as he hath purposed in his heart, so let him give.&quot; Giving originates in the heart. It is a matter of inner decision and resolve, not external coercion. God sees the purpose. God honors the intention.',
        },
        {
          kind: 'christ',
          id: 'cor2-9-christ-abound',
          title: 'Christ Connection — God&apos;s Abounding Grace',
          html:
            'God is able to &quot;make all grace abound.&quot; Not only does God provide for our needs; He provides abundance so that we have more than enough to share. This overflowing grace is the foundation of all giving.',
        },
        {
          kind: 'carry',
          html:
            'Purpose in your heart what you will give. Give not from obligation, but from faith that God will provide. Give not grudgingly, but cheerfully. Your generosity is a declaration that you trust God&apos;s provision.',
        },
        {
          kind: 'reflection',
          id: 'cor2-9-cheerful',
          prompt: 'Are you a &quot;cheerful giver&quot;? What prevents you from giving with joy? What would need to change for you to trust God&apos;s provision enough to give freely?',
        },
      ],
    },

    {
      ref: '2 Corinthians 9:10–15',
      title: 'Blessing Through Generosity',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(10, 'Now he that ministereth seed to the sower both minister bread for your food, and multiply your seed sown, and increase the fruits of your righteousness;'),
            plain(11, 'Being enriched in every thing to all bountifulness, which causeth through us thanksgiving to God.'),
            plain(12, 'For the administration of this service not only supplieth the want of the saints, but is abundant also by many thanksgivings unto God;'),
            plain(13, 'Whiles by the experiment of this ministration they glorify God for your professed subjection unto the gospel of Christ, and for your liberal distribution unto them and unto all men;'),
            plain(15, 'Thanks be unto God for his unspeakable gift.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-9-increase',
          html:
            'God promises to &quot;multiply your seed sown, and increase the fruits of your righteousness.&quot; The seed you plant returns many times over. This is not guarantee of worldly prosperity, but assurance that generosity is never wasted.',
        },
        {
          kind: 'greek',
          id: 'cor2-9-diakonia',
          title: 'Diakonia — Service; Ministry',
          script: 'διακονία',
          translit: '<strong>Diakonia</strong> · service; ministry; attending to needs',
          description:
            'The giving is described as diakonia—service. It is not charity dispensed from above, but service—coming alongside those in need.',
        },
        {
          kind: 'commentary',
          id: 'cor2-9-thanksgiving',
          html:
            'The gift does more than supply physical need. It &quot;is abundant also by many thanksgivings unto God.&quot; It stirs gratitude. It glorifies God. The physical relief opens spiritual eyes.',
        },
        {
          kind: 'christ',
          id: 'cor2-9-christ-unspeakable',
          title: 'Christ Connection — Christ Is God&apos;s Unspeakable Gift',
          html:
            'The passage concludes with the ultimate gift: &quot;Thanks be unto God for his unspeakable gift.&quot; Christ is the gift that surpasses all gifts. Every act of generosity flows from and points to His grace.',
        },
        {
          kind: 'carry',
          html:
            'Your generosity matters. Not only to those who receive, but to God. Your gift glorifies Him. Your gift stirs thanksgiving. Your gift participates in the larger reality of Christ&apos;s grace overflowing to all.',
        },
        {
          kind: 'reflection',
          id: 'cor2-9-unspeakable',
          prompt: 'What is your response to God&apos;s &quot;unspeakable gift&quot; of Christ? How does that gift move you to generosity toward others?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'God loveth a cheerful giver. Thanks be unto God for his unspeakable gift.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Corinthians 9 · Study Guide',
  },

  hasHebrew: false,
};
