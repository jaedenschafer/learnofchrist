import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Esther 10 — Mordecai Exalted
 *
 * The book of Esther closes with a brief epilogue: King Ahasuerus laid a tribute
 * on the land and isles. The acts of his power and might, and the declaration of
 * the greatness of Mordecai, are written in the chronicles of the kings of Media
 * and Persia. Mordecai the Jew was next unto the king, great among the Jews,
 * accepted of the multitude of his brethren, seeking the welfare of his people,
 * and speaking peace to all his seed. The faithful one, elevated to the right
 * hand of power, uses that power for the good of his people.
 */
export const ESTHER_10: RichChapterContent = {
  bookSlug: 'esther',
  bookName: 'Esther',
  chapter: 10,

  intros: [
    'The book of Esther closes not with a great battle or a final judgment, but with a quiet testimony to the elevation of Mordecai. He who sat at the king&apos;s gate, now sits at the king&apos;s right hand. His acts of faithfulness — his refusal to bow to Haman, his protection of the king, his advocacy for his people — have earned him a place of authority that will be remembered in the empire&apos;s official chronicles.',
    'And in this final glimpse, we see the defining mark of Mordecai&apos;s character: he uses his power not for personal glory, but "seeking the welfare of his people, and speaking peace to all his seed." The exile has become the advocate. The oppressed has become the voice of mercy. In this small portrait, we see the image of the faithful servant elevated, not to rule over others, but to serve his people with the authority the king has entrusted to him.',
  ],

  bottomShare: {
    quote:
      'Mordecai was great among the Jews, accepted of the multitude of his brethren, seeking the welfare of his people, and speaking peace to all his seed. The exalted one who remembers the oppressed, and lifts them up.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Esther 10 · Study Guide',
  },

  sections: [
    /* ─── Esther 10:1–3 — The King&apos;s Tribute and Mordecai&apos;s Honor ──── */
    {
      ref: 'Esther 10:1–3',
      title: 'The Exalted Servant',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(
              1,
              'And the king Ahasuerus laid a tribute upon the land, and upon the isles of the sea.'
            ),
            plain(
              2,
              'And all the acts of his power and of his might, and the declaration of the greatness of Mordecai, whereunto the king advanced him, are they not written in the book of the chronicles of the kings of Media and Persia?'
            ),
            {
              number: 3,
              spans: [
                t('For Mordecai the Jew was next unto the king Ahasuerus, and great among the Jews, and accepted of the multitude of his brethren, '),
                hp('seeking the welfare of his people', 'esth10-welfare'),
                t(', and '),
                hg('speaking peace to all his seed', 'esth10-peace'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'esth10-advance',
          html:
            'The king advanced Mordecai to the position of second in the empire. Mordecai is now "next unto the king" — a phrase that echoes the language of exaltation. He who was hunted, who sat in sackcloth, who was the target of death, is now seated at the pinnacle of power, his name recorded in the official chronicles of empire for all generations to remember.',
        },
        {
          kind: 'commentary',
          id: 'esth10-welfare',
          html:
            'But notice what the text emphasizes about Mordecai&apos;s greatness: "seeking the welfare of his people." His power is defined not by his authority but by his purpose. He is great because he uses his station to advocate for the Jews. The faithful servant has been elevated, and he remembers those who are still vulnerable.',
        },
        {
          kind: 'hebrew',
          id: 'esth10-shalom',
          title: 'Shalom — "Peace" or "Welfare"',
          script: 'שָׁלוֹם',
          translit: '<strong>Shalom</strong> · peace; wholeness; welfare; well-being',
          description:
            'Shalom encompasses far more than the absence of war. It is wholeness, restoration, well-being, the flourishing of a community. Mordecai&apos;s role is to speak shalom to his people — not merely to secure their safety, but to shepherd their flourishing.',
        },
        {
          kind: 'commentary',
          id: 'esth10-peace',
          html:
            'Mordecai speaks peace to "all his seed" — not merely to the Jews of his time, but to the generations to come. He is a voice of blessing, of hope, of assurance that the exiled people will continue to find favor and protection. His words echo into the future.',
        },
        {
          kind: 'christ',
          id: 'esth10-christ',
          title: 'Christ Connection — The Faithful Servant Exalted',
          html:
            'The Epistle to the Hebrews describes Christ in language that mirrors Mordecai&apos;s exaltation: "Made so much better than the angels, as he hath by inheritance obtained a more excellent name than they... Who being the brightness of his glory, and the express image of his person, and upholding all things by the word of his power, when he had by himself purged our sins, sat down on the right hand of the Majesty on high" (Hebrews 1:4, 3). And just as Mordecai, seated at the king&apos;s side, seeks the welfare of his people, so Christ "ever liveth to make intercession for them" (Hebrews 7:25). The faithful servant, elevated to the right hand of power, intercedes for the people.',
        },
        {
          kind: 'carry',
          html:
            'The arc of Esther is an arc of faithfulness meeting favor — Mordecai&apos;s refusal to compromise, his protection of Esther, his advocacy in the darkness — all these acts seem small, done when no one was watching, done when they might have cost him everything. Yet the king saw. God saw. And in the end, faithfulness is exalted. When we act with integrity, even when no reward seems possible, we are planting seeds that the invisible hand of providence will bring to harvest.',
        },
        {
          kind: 'reflection',
          id: 'esth10-faithfulness',
          prompt: 'Mordecai is exalted, but the text immediately defines his greatness by his service to others. If you were elevated to a position of authority, would you remember those who are still oppressed or vulnerable?',
        },
      ],
    },
  ],
};
