import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Proverbs 23 — The Deceit of Appetite and the Gift of Your Heart
 *
 * Eat not the bread of him that hath an evil eye. Wine and the deceit of
 * strong drink. My son, give me thine heart. This chapter warns against
 * appetite and the seduction of material gain, while calling the reader to
 * give their heart—their deepest self—to wisdom.
 */
export const PROVERBS_23: RichChapterContent = {
  bookSlug: 'proverbs',
  bookName: 'Proverbs',
  chapter: 23,

  intros: [
    'Proverbs 23 opens with warnings about false generosity and spiritual danger, then turns to the vulnerability of appetite. Do not eat with one whose eye is evil, even if his table is laden with good things. His hospitality is a trap. And wine deceives—it appears to offer pleasure and liberation but delivers bondage. The chapter then moves to the deepest request: "My son, give me thine heart." Not your behavior, not your obedience, but your very self. Your heart.',
  ],

  sections: [
    {
      ref: 'Proverbs 23:4–5; 23:19–21',
      title: 'The Deceit of Appetite and Excess',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            plain(4, 'Labour not to be rich: cease from thine own wisdom.'),
            plain(5, 'Wilt thou set thine eyes upon that which is not? for riches certainly make themselves wings; they fly away as an eagle toward heaven.'),
            plain(19, 'Hear thou, my son, and be wise, and guide thine heart in the way.'),
            plain(20, 'Be not among winebibbers; among riotous eaters of flesh:'),
            plain(21, 'For the drunkard and the glutton shall come to poverty: and drowsiness shall clothe a man with rags.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov23-labour-rich',
          html:
            'Do not exhaust yourself pursuing riches. Do not trust in your own cleverness to make you wealthy. The moment you fix your eyes on riches, they become the object of your desire, and that desire becomes the object of your destruction. Riches are not evil, but the striving for them, the dependence on them, the trust in them—this is dangerous.',
        },
        {
          kind: 'commentary',
          id: 'prov23-wings',
          html:
            'Riches make themselves wings. They are not stable. They depart as suddenly as they arrive. To build your life on them is to build on shifting sand. The person who pursues them obsessively will find himself alone when they depart, which they will.',
        },
        {
          kind: 'commentary',
          id: 'prov23-winebibbers',
          html:
            'Do not join those who are slaves to appetite—wine, food, excess. The drunkard and glutton spiral toward poverty, not because of moral judgment, but because appetite, once unleashed, consumes everything. It consumes resources, time, health, dignity.',
        },
        {
          kind: 'carry',
          html:
            'What appetite rules you? What do you pursue as though it were the source of life itself? Proverbs calls you to master appetite rather than be mastered by it.',
        },
        {
          kind: 'reflection',
          id: 'prov23-appetite',
          prompt: 'What appetite most threatens your peace and stability? What would it cost to say no to it?',
        },
      ],
    },

    {
      ref: 'Proverbs 23:26',
      title: 'Give Me Your Heart',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            plain(26, 'My son, give me thine heart, and let thine eyes observe my ways.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov23-give-heart',
          html:
            'After all the warnings about appetite, deceit, and false paths, the wise one—the parent, the mentor, wisdom itself—makes the deepest request: not obedience, not information, but the gift of your heart. Your deepest self, your core affection, your inmost loyalty. Give it to me—to wisdom, to the way of righteousness, to God.',
        },
        {
          kind: 'commentary',
          id: 'prov23-observe',
          html:
            'And observe my ways. Learn by watching, by imitation, by seeing how wisdom lives in the world. This is not abstract instruction. It is formation by example. The student observes the master and, in observing, becomes like him.',
        },
        {
          kind: 'christ',
          id: 'prov23-christ-heart',
          title: 'Christ Connection — The Heart That Asks for Yours',
          html:
            'In Matthew 11:28, Jesus says, "Come unto me, all ye that labour and are heavy laden, and I will give you rest." And in Matthew 6:25, He teaches His disciples not to be anxious about provision—"Take therefore no thought for the morrow." He is asking for the very heart, for trust so complete that you abandon fear and anxiety and give yourself entirely to His care. This is the deepest request.',
        },
        {
          kind: 'carry',
          html:
            'Who is asking for your heart? Is it worthy of such a gift? Have you given your heart to something that will not keep it safe?',
        },
        {
          kind: 'reflection',
          id: 'prov23-whom',
          prompt: 'To whom have you given your heart? Is it to something or someone worthy of such a gift?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'My son, give me thine heart, and let thine eyes observe my ways.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Proverbs 23 · Study Guide',
  },
};
