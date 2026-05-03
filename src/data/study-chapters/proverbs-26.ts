import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Proverbs 26 — The Paradox of Answering the Fool
 *
 * Answer not a fool according to his folly, lest thou also be like unto
 * him: Answer a fool according to his folly, lest he be wise in his own
 * conceit. This chapter teaches the wisdom of knowing when to speak and
 * when to remain silent, even before the same person.
 */
export const PROVERBS_26: RichChapterContent = {
  bookSlug: 'proverbs',
  bookName: 'Proverbs',
  chapter: 26,

  estimatedMinutes: { 5: 1, 10: 2, 15: 2 },
  intros: [
    'Proverbs 26 contains one of Scripture&apos;s most striking paradoxes: two back-to-back verses that seem to contradict each other. Do not answer a fool according to his folly (lest you become a fool). Yet answer a fool according to his folly (lest he think himself wise). The chapter teaches that wisdom is not a set of rules, but a discernment that knows the moment and the context. Sometimes silence is wisdom. Sometimes a reply is wisdom. The same fool may require different treatment depending on the occasion.',
  ],

  sections: [
    {
      ref: 'Proverbs 26:4–5; 26:12',
      title: 'The Wisdom of Knowing When to Speak',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            plain(4, 'Answer not a fool according to his folly, lest thou also be like unto him:'),
            plain(5, 'Answer a fool according to his folly, lest he be wise in his own conceit.'),
            plain(12, 'Seest thou a man wise in his own conceit? there is more hope of a fool than of him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov26-answer-not',
          html:
            'To answer a fool according to his folly is to engage on his terms, to descend to his level. This is dangerous because you will find yourself matching his irrationality, his malice, his distortion. You will become a fool yourself. So the wise person knows: sometimes the only appropriate response is silence.',
        },
        {
          kind: 'commentary',
          id: 'prov26-answer-fool',
          html:
            'Yet sometimes the fool must be answered—precisely according to his folly—lest he believe himself wise. To say nothing is to let his foolishness stand unopposed. This is also dangerous. The fool needs to know his folly has been seen and named. The key is discernment: which moment demands silence, and which demands response?',
        },
        {
          kind: 'commentary',
          id: 'prov26-wise-conceit',
          html:
            'The verse adds: there is more hope for the fool than for the man wise in his own conceit. The fool knows he does not know. The man wise in his own conceit does not know that he does not know. He is sealed off from wisdom by his own delusion. This is the worst condition.',
        },
        {
          kind: 'christ',
          id: 'prov26-christ-silence',
          title: 'Christ Connection — The Wisdom of Silence',
          html:
            'In Matthew 26, when the Sanhedrin tried to trap Jesus with false testimony, He remained silent. Yet when asked directly by the high priest, He answered. He knew which moment demanded silence and which demanded speech. His wisdom discerned the occasion.',
        },
        {
          kind: 'carry',
          html:
            'You will encounter fools. Some will demand response, some will demand silence. Learn to discern which is which. Not all battles require your words.',
        },
        {
          kind: 'reflection',
          id: 'prov26-silence',
          prompt: 'When have you regretted speaking? When have you regretted staying silent? How can you develop the discernment to choose better?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Answer not a fool according to his folly, lest thou also be like unto him: Answer a fool according to his folly, lest he be wise in his own conceit.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Proverbs 26 · Study Guide',
  },
};
