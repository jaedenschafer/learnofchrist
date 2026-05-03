import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 125 — They That Trust in the Lord
 *
 * "They that trust in the Lord shall be as mount Zion, which cannot be removed, but abideth for ever."
 * A song of ascents declaring the immovability of those who trust God.
 * "The Lord is round about his people from henceforth even for ever."
 * Christ connection: those in Christ are unmovable, grounded in Him,
 * surrounded and protected by God's eternal presence.
 */
export const PSALMS_125: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 125,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 3 },
  intros: [
    'Psalm 125 opens with a declaration that reverberates through the entire five-verse song: those who trust in the Lord shall be as Mount Zion—immovable, unmovable, firm, eternal. The psalmist stands on the temple mount and looks around at the mountains that ring Jerusalem. They are ancient. They are solid. They have stood through countless ages. And those who trust in the Lord, the psalmist declares, shall be as these mountains: not fragile, not temporary, not subject to being overthrown. They are as Zion itself—the place where God dwells, the unshakeable foundation.',
  ],

  sections: [
    {
      ref: 'Psalm 125:1–5',
      title: 'Unmovable in God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 125,
          lines: [
            plain(1, 'They that trust in the Lord shall be as mount Zion, which cannot be removed, but abideth for ever.'),
            plain(2, 'As the mountains are round about Jerusalem, so the Lord is round about his people from henceforth even for ever.'),
            plain(3, 'For the rod of the wicked shall not rest upon the lot of the righteous; lest the righteous put forth their hands unto iniquity.'),
            plain(4, 'Do good, O Lord, unto those that be good, and to them that are upright in their hearts.'),
            plain(5, 'As for such as turn aside unto their crooked ways, the Lord shall lead them forth with the workers of iniquity: but peace shall be upon Israel.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps125-zion',
          html:
            'Mount Zion is not merely a geographic location. It is the place where the temple stood, where God&apos;s presence dwelled. To say that those who trust in the Lord shall be "as mount Zion" is to say that they themselves become, in a sense, the dwelling place of God. They are immovable not because of their own strength, but because they are rooted in God&apos;s unmovable presence. "Cannot be removed, but abideth for ever"—this is the promise. [res:sefaria-psalm-125]',
        },
        {
          kind: 'commentary',
          id: 'ps125-encircled',
          html:
            '"As the mountains are round about Jerusalem, so the Lord is round about his people." The mountains form a circle of protection around the city. They are not attacking Jerusalem from within, but encircling it from without, a barrier against invasion from every direction. So the Lord encircles His people. They are surrounded by His presence. They are not alone in the chaos of the world. They are encircled, enclosed, protected on every side.',
        },
        {
          kind: 'commentary',
          id: 'ps125-rod',
          html:
            '"The rod of the wicked shall not rest upon the lot of the righteous." The righteous may face opposition, but they will not be crushed under it. The wickedness of others will not settle upon them permanently, will not take permanent possession. The psalmist prays not that evil will never approach, but that it will not have dominion, not have authority, not establish itself permanently over those who have chosen to trust.',
        },
        {
          kind: 'christ',
          id: 'ps125-christ-foundation',
          title: 'Christ Connection — The Unmovable Foundation',
          html:
            'Jesus is described in Matthew 7:24–25 as "a wise man, which built his house upon a rock: And the rain descended, and the floods came, and the winds blew, and beat upon that house; and it fell not: for it was founded upon a rock." Christ is that rock, that immovable foundation. In Him, believers are not subject to being swept away by the storms of life. They are as Mount Zion—unmovable, abiding, encircled by God&apos;s eternal presence. [res:bible-odyssey-psalm-125]',
        },
        {
          kind: 'carry',
          html:
            'Psalm 125 speaks to the stability that is available to those who place their trust not in circumstances or in their own understanding, but in God. You may face opposition. You may encounter the rod of the wicked. But if your foundation is in the Lord, if you are encircled by His presence, you cannot be moved. The mountains stood while kingdoms rose and fell. So those rooted in God stand while earthly powers shift and crumble.',
        },
        {
          kind: 'reflection',
          id: 'ps125-trust',
          prompt:
            'What are you trusting in for your stability? Your job, your relationships, your circumstances? What would it mean to be "as mount Zion"—immovable, unmovable, abiding? How might shifting your trust from external circumstances to God change your sense of security?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'They that trust in the Lord shall be as mount Zion, which cannot be removed, but abideth for ever. The Lord is round about his people from henceforth even for ever.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 125 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalm-125',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 125 with Jewish Commentary',
      url: 'https://www.sefaria.org/Psalms.125',
      description: 'Hebrew text with rabbinic and medieval Jewish commentaries.',
    },
    {
      id: 'bible-odyssey-psalm-125',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Psalm 125 Study Guide',
      url: 'https://www.bibleodyssey.org/?q=psalm+125',
      description: 'Thematic study and historical background from the Society of Biblical Literature.',
    },
  ],

};
