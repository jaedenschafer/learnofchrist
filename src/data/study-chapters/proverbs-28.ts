import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Proverbs 28 — Confession, Forgetting, and the Law That Holds
 *
 * He that covereth his sins shall not prosper: but whoso confesseth and
 * forsaketh them shall have mercy. This chapter teaches the power of
 * confession and the futility of hiding, anchored in the foundation of a
 * just God.
 */
export const PROVERBS_28: RichChapterContent = {
  bookSlug: 'proverbs',
  bookName: 'Proverbs',
  chapter: 28,

  estimatedMinutes: { 5: 1, 10: 2, 15: 3 },
  intros: [
    'Proverbs 28 opens with the fundamental choice: cover your sins or confess them. The man who covers his sins shall not prosper. He cannot. The weight of hiding is too great. But the man who confesses and forsakes them shall have mercy. This is not negotiation. This is the way the world actually works, the way God has structured it. Honesty opens the path to grace. Hiding seals you off from it.',
  ],

  sections: [
    {
      ref: 'Proverbs 28:13',
      title: 'Confession and Forsaking',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            plain(13, 'He that covereth his sins shall not prosper: but whoso confesseth and forsaketh them shall have mercy.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov28-covereth',
          html:
            'To cover your sins is the natural human impulse. Hide them, deny them, minimize them, blame others. But covering does not work. It creates a distance between you and everyone around you, a careful inauthenticity. It exhausts you. And it blocks the only path to restoration: honesty.',
        },
        {
          kind: 'commentary',
          id: 'prov28-confess-forsake',
          html:
            'But the one who confesses and forsakes—who speaks the truth about what he has done and turns away from it—finds mercy. Notice both: confession (speaking) and forsaking (changing). Mercy is not given to those who confess and continue. It is given to those who confess and stop.',
        },
        {
          kind: 'hebrew',
          id: 'prov28-yada',
          title: 'Yada — "Confess" (Acknowledge, Know)',
          script: 'יָדַע',
          translit: '<strong>Yada</strong> · to know; to confess; to acknowledge fully',
          description:
            'To confess is not merely to say words. It is to know fully, to acknowledge completely, to bring the hidden thing into the light. It is an act of honesty toward yourself and toward God.',
        },
        {
          kind: 'christ',
          id: 'prov28-christ-confession',
          title: 'Christ Connection — Confession and Cleansing',
          html:
            'In 1 John 1:9, John writes: "If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness." This is the promise held out throughout Scripture. Confession is not punishment. It is the pathway to forgiveness and to the restoration of relationship. Christ does not demand silence. He demands honesty, because honesty is the only ground on which grace can stand.',
        },
        {
          kind: 'carry',
          html:
            'What are you covering? What would change if you brought it to light? Proverbs promises that confession opens the door to mercy.',
        },
        {
          kind: 'reflection',
          id: 'prov28-cover',
          prompt: 'What sin or failure are you still covering? What would it take to confess and forsake it?',
        },
      ],
    },

    {
      ref: 'Proverbs 28:4; 28:7',
      title: 'The Law and Its Keepers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            plain(4, 'They that forsake the law praise the wicked: but such as keep the law contend with them.'),
            plain(7, 'Whoso keepeth the law is a wise son: but he that is a companion of riotous men shameth his father.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov28-keep-law',
          html:
            'To keep the law—God&apos;s law, the moral order—is to understand that your actions have an ultimate reference point beyond mere social convenience. You keep the law not because it profits you, but because it is just and true. Those who keep the law stand against the wicked, even when it costs them.',
        },
        {
          kind: 'commentary',
          id: 'prov28-riotous',
          html:
            'To be a companion of riotous men is to attach yourself to those who mock the law, who live by appetite and impulse. This shames your father—it betrays the formation you were given, the heritage of those who loved you.',
        },
        {
          kind: 'carry',
          html:
            'Do you keep the law? Or have you begun to justify breaking it? Do you stand with the wise, or have you drifted toward those who mock what is good?',
        },
        {
          kind: 'reflection',
          id: 'prov28-companion',
          prompt: 'Who are your companions? Are they drawing you toward wisdom or away from it?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'He that covereth his sins shall not prosper: but whoso confesseth and forsaketh them shall have mercy.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Proverbs 28 · Study Guide',
  },

  hasHebrew: true,
};
