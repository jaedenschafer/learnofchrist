import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Proverbs 17 — Knowledge, Silence, and the Friend Who Loves Always
 *
 * He that hath knowledge spareth his words. A friend loveth at all times.
 * This chapter teaches the power of restraint and the gift of unwavering
 * friendship. In a world of noise and judgment, wisdom is quiet strength,
 * and love is loyalty.
 */
export const PROVERBS_17: RichChapterContent = {
  bookSlug: 'proverbs',
  bookName: 'Proverbs',
  chapter: 17,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  intros: [
    'Proverbs 17 frames knowledge as an art of restraint. The man with knowledge does not pour out all he knows. He is measured, careful, aware that not every word deserves utterance. This is not ignorance masquerading as wisdom. This is wisdom knowing the power of silence. And in the same chapter, Solomon celebrates friendship—the one who loves at all times, not when circumstances demand it, not when benefit flows from it, but at all times. This is the constancy of love itself.',
  ],

  sections: [
    {
      ref: 'Proverbs 17:27–28',
      title: 'The Power of Sparing Words',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(27, 'He that hath knowledge spareth his words: and a man of understanding is of an excellent spirit.'),
            plain(28, 'Even a fool, when he holdeth his peace, is counted wise: and he that shutteth his lips is esteemed a man of understanding.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov17-spare-words',
          html:
            'Knowledge is not the multiplication of speech. The man with knowledge does not display his learning by filling every silence. He spares his words—uses them carefully, places them where they matter. A man of understanding has an excellent spirit, a spirit of restraint and discernment. He knows that the most powerful speech is the speech that comes after thoughtfulness.',
        },
        {
          kind: 'commentary',
          id: 'prov17-fool-peace',
          html:
            'Even a fool can appear wise if he remains silent. There is dark humor here—the fool is not wise, but his silence disguises his foolishness. Conversely, the moment he opens his mouth, all becomes clear. This is a call to silence as protection and as power. In a world that equates visibility with worth and noise with strength, wisdom whispers: silence is its own testimony.',
        },
        {
          kind: 'carry',
          html:
            'Where could you spare your words today? What would change if you listened more and spoke less? What silence might protect, and what might it reveal?',
        },
        {
          kind: 'reflection',
          id: 'prov17-spare',
          prompt: 'When you speak the most, are you usually saying things that matter? What would happen if you spoke only when you truly had something necessary to say?',
        },
      ],
    },

    {
      ref: 'Proverbs 17:17',
      title: 'The Friend Who Loves Always',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(17, 'A friend loveth at all times, and a brother is born for adversity.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov17-friend-always',
          html:
            'Most loves are conditioned. They flourish when circumstances align, when benefit flows, when affection is returned in kind. But a friend loves at all times—in success and failure, in clarity and confusion, when the cost is high and when it might be higher. This is not romantic love, which burns hot and can burn out. This is the steady flame of true friendship, burning regardless of season or circumstance.',
        },
        {
          kind: 'commentary',
          id: 'prov17-brother-adversity',
          html:
            'A brother is born for adversity. The bond of kinship exists partly to carry us through difficulty. In the ancient world, family was the primary source of material and emotional support in times of crisis. This verse suggests that true friendship functions as family—it is the bond that holds in the darkest hour, when the stakes are highest.',
        },
        {
          kind: 'christ',
          id: 'prov17-christ-friend',
          title: 'Christ Connection — The Friend Who Never Leaves',
          html:
            'In John 15:15, Jesus says to His disciples, "I have called you friends." And in Hebrews 13:5, the promise is made: "I will never leave thee, nor forsake thee." Christ is the Friend who loves at all times. He does not withdraw when we fail. He does not turn away in our adversity. He stands born for our extremity, present in the darkness, loving beyond all condition or deserving.',
        },
        {
          kind: 'carry',
          html:
            'Who is the friend who loves you at all times? And whose friend are you—the one who shows up in the bright seasons, or the one who stays when the light fades?',
        },
        {
          kind: 'reflection',
          id: 'prov17-friend-cost',
          prompt: 'Who in your life has loved you when it cost them? How might you become that kind of friend to someone else?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'A friend loveth at all times, and a brother is born for adversity.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Proverbs 17 · Study Guide',
  },
};
