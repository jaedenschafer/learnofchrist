import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Proverbs 27 — Iron Sharpening Iron and the Faithful Wounding Friend
 *
 * Iron sharpeneth iron; so a man sharpeneth the countenance of his friend.
 * Faithful are the wounds of a friend. This chapter celebrates the power of
 * true friendship to refine and strengthen, even when that friendship demands
 * difficult truth.
 */
export const PROVERBS_27: RichChapterContent = {
  bookSlug: 'proverbs',
  bookName: 'Proverbs',
  chapter: 27,

  estimatedMinutes: { 5: 1, 10: 2, 15: 3 },
  intros: [
    'Proverbs 27 honors one of life&apos;s rarest gifts: a friend who loves you enough to tell you hard truth. Iron sharpens iron—one blade against another, friction creating keenness. So a friend, through honest challenge and loving confrontation, sharpens another. The wounds of a faithful friend are better than the kisses of an enemy. To be wounded by a friend is to be refined. To be flattered by an enemy is to be destroyed.',
  ],

  sections: [
    {
      ref: 'Proverbs 27:12; 27:17',
      title: 'Sharpening Through Friendship',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            plain(12, 'A prudent man foreseeth the evil, and hideth himself; but the simple pass on, and are punished.'),
            plain(17, 'Iron sharpeneth iron; so a man sharpeneth the countenance of his friend.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov27-iron-sharp',
          html:
            'When two pieces of iron are drawn across each other, both are sharpened. Neither one sharpens itself alone. In the same way, a man sharpens the countenance—the face, the presence, the whole aspect—of his friend. Through interaction, challenge, mutual growth, friends make each other keener, wiser, more refined.',
        },
        {
          kind: 'hebrew',
          id: 'prov27-cheren',
          title: 'Charen — "Sharpen" (Make Keen)',
          script: 'חָרֵן',
          translit: '<strong>Charen</strong> · to sharpen; to make keen; to whet',
          description:
            'A sharp blade is useful. A dull one is useless. To sharpen is to restore edge, utility, and purpose. A friend sharpens you by helping you become more useful, more true, more effective.',
        },
        {
          kind: 'carry',
          html:
            'Do you have friends who sharpen you? Or only friends who smooth and flatter? Seek those who make you better.',
        },
        {
          kind: 'reflection',
          id: 'prov27-sharp',
          prompt: 'Who sharpens you? And whom do you sharpen through your honest friendship?',
        },
      ],
    },

    {
      ref: 'Proverbs 27:12; 27:5–6',
      title: 'The Faithful Wounds of a Friend',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            plain(5, 'Open rebuke is better than secret love.'),
            plain(6, 'Faithful are the wounds of a friend: but the kisses of an enemy are deceitful.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov27-open-rebuke',
          html:
            'Secret love that does not speak truth is not love at all. It is complicity. True love says what needs to be said, even when it hurts. An open rebuke is better because it is honest, because it offers the chance to change, because it shows you matter enough to be corrected.',
        },
        {
          kind: 'commentary',
          id: 'prov27-wounds-friend',
          html:
            'The wounds of a faithful friend are received gladly, because you know they come from love. The friend wounds you not to destroy but to heal, not to humiliate but to correct. These wounds are expressions of loyalty. The kisses of an enemy, by contrast, are deceitful—they smile while they plot your harm, they flatter while they betray.',
        },
        {
          kind: 'christ',
          id: 'prov27-christ-truth',
          title: 'Christ Connection — Truth in Love',
          html:
            'In Ephesians 4:15, Paul writes: "But speaking the truth in love, may grow up into him in all things, which is the head, even Christ." Jesus told His disciples hard things—that they would betray Him, that they were slow of heart to believe. He did this not because He enjoyed their pain, but because He loved them too much to leave them in delusion.',
        },
        {
          kind: 'carry',
          html:
            'Are you capable of hearing hard truth from a friend? Can you speak hard truth to one you love? This is the test of true friendship.',
        },
        {
          kind: 'reflection',
          id: 'prov27-wound',
          prompt: 'When has a friend spoken a hard truth that hurt but helped? What made you able to receive it?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Iron sharpeneth iron; so a man sharpeneth the countenance of his friend.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Proverbs 27 · Study Guide',
  },

  hasHebrew: true,
};
