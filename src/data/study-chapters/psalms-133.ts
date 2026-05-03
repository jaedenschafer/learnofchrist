import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 133 — Behold, How Good and How Pleasant
 *
 * "Behold, how good and how pleasant it is for brethren to dwell together in unity!"
 * A short song of ascents celebrating the beauty of communal unity.
 * "It is like the precious ointment upon the head, that ran down upon the beard, even Aaron's beard."
 * Unity is precious, holy, anointing—like the sacred oil that consecrates the priest.
 * Christ connection: unity in Christ (John 17:21); the church as one body;
 * the church as the body of Christ, all members anointed and consecrated.
 */
export const PSALMS_133: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 133,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  intros: [
    'Psalm 133 is a short song, but its vision of unity is profound and moving. "Behold, how good and how pleasant it is for brethren to dwell together in unity!" The psalmist does not merely say that unity is good. He calls readers to behold it, to see it, to recognize it in all its beauty. There is a quality of wonder in the word "behold"—as though the psalmist has glimpsed something rare and precious. Brethren dwelling together in unity is not mundane. It is remarkable. It is beautiful. And it is compared to the most sacred and precious thing the psalmist knows: the anointing oil poured upon the high priest.',
  ],

  sections: [
    {
      ref: 'Psalm 133:1–3',
      title: 'The Precious Ointment of Unity',
      blocks: [
        {
          kind: 'scripture',
          chapter: 133,
          lines: [
            plain(1, 'Behold, how good and how pleasant it is for brethren to dwell together in unity!'),
            plain(2, "It is like the precious ointment upon the head, that ran down upon the beard, even Aaron&apos;s beard: that went down to the skirts of his garments;"),
            plain(3, 'As the dew of Hermon, and as the dew that descended upon the mountains of Zion: for there the Lord commanded the blessing, even life for evermore.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps133-behold',
          html:
            'The opening imperative—"Behold"—invites the reader into a moment of recognition. Stop. Look. See how good and how pleasant it is. The superlatives pile up: good, pleasant. These are not grudging acknowledgments. These are celebrations. Unity is not a begrudging compromise or a necessary evil. It is good. It is beautiful. It is worth beholding, worth treasuring, worth pursuing. [res:sefaria-psalm-133]',
        },
        {
          kind: 'commentary',
          id: 'ps133-anointing',
          html:
            'The comparison to precious ointment is not casual. This ointment is the sacred anointing oil prepared according to God&apos;s specification (Exodus 30:22–33). It was poured upon the heads of priests at their consecration, setting them apart for holy service. When the psalmist compares unity to this oil, he is saying that unity is sacred, holy, consecrating. It transforms those who experience it.',
        },
        {
          kind: 'commentary',
          id: 'ps133-overflow',
          html:
            'The ointment runs down upon Aaron&apos;s beard, flows down to the skirts of his garments. The image suggests abundance, overflow, permeation. The oil does not remain localized. It spreads. It sanctifies not just the head, but the entire person. So unity in the church is not something that affects only leadership or a special few. It flows down, reaches everyone, consecrates the whole community.',
        },
        {
          kind: 'commentary',
          id: 'ps133-dew',
          html:
            'The second image shifts to dew—the dew of Hermon descending upon the mountains of Zion. Here is the unity of geography, the bringing together of distant places through moisture that falls from heaven. The dew is a gift, not manufactured, descending from above. So the unity of believers is a gift from God, descending from heaven, not something that arises from human effort alone.',
        },
        {
          kind: 'commentary',
          id: 'ps133-blessing',
          html:
            '"For there the Lord commanded the blessing, even life for evermore." Where there is unity, the Lord commands the blessing. Where brethren dwell together in unity, life eternal dwells. The unity is not merely pleasant or good. It is the condition in which God&apos;s blessing flows, in which His command for life goes forth.',
        },
        {
          kind: 'christ',
          id: 'ps133-christ-unity',
          title: 'Christ Connection — Unity in Christ',
          html:
            'In John 17, Christ prays for those who believe in Him: "That they all may be one; as thou, Father, art in me, and I in thee...I in them, and thou in me, that they may be made perfect in one" (vv. 20–23). Paul describes the church as the body of Christ, with individual believers as members, all functioning together (1 Corinthians 12:12–27). The anointing oil of the Spirit falls upon the body, consecrating it, sanctifying it. As Psalm 133 declares, it is precious. It is holy. In that unity, Christ dwells and the life eternal flows. [res:bible-odyssey-psalm-133]',
        },
        {
          kind: 'carry',
          html:
            'Psalm 133 calls you to recognize the preciousness of Christian unity—not as a strategic goal or a practical necessity, but as something sacred, something commanded by the Lord, something through which His blessing flows. Whether you are experiencing fragmentation or sweet community, the psalm invites you to treasure and cultivate unity, to see in it the anointing oil of God, the descent of dew from heaven, the place where eternal life is commanded.',
        },
        {
          kind: 'reflection',
          id: 'ps133-together',
          prompt:
            'Where have you experienced true unity with other believers? What made that experience precious? Where is there fragmentation or isolation in your community of faith? What would it mean to commit yourself to cultivating unity—to being a conduit for the anointing oil of God&apos;s Spirit to flow?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Behold, how good and how pleasant it is for brethren to dwell together in unity! For there the Lord commanded the blessing, even life for evermore.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 133 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalm-133',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 133 with Jewish Commentary',
      url: 'https://www.sefaria.org/Psalms.133',
      description: 'Hebrew text with rabbinic and medieval Jewish commentaries.',
    },
    {
      id: 'bible-odyssey-psalm-133',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Psalm 133 Study Guide',
      url: 'https://www.bibleodyssey.org/?q=psalm+133',
      description: 'Thematic study and historical background from the Society of Biblical Literature.',
    },
  ],

};
