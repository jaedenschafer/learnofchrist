import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Corinthians 12 — The Thorn in the Flesh; My Grace Is Sufficient
 *
 * Paul has been caught up to the third heaven and heard unspeakable words.
 * To keep him from pride, he was given a &quot;thorn in the flesh.&quot; Three times he
 * prayed for it to be removed. God&apos;s answer: &quot;My grace is sufficient for thee.&quot;
 * In weakness, Christ&apos;s power works. This is the heart of Paul&apos;s spirituality.
 */
export const SECOND_CORINTHIANS_12: RichChapterContent = {
  bookSlug: '2-corinthians',
  bookName: '2 Corinthians',
  chapter: 12,

  intros: [
    'Paul has boasted of visions. Now he speaks of his weakness. He was caught up to the third heaven, heard unspeakable words. But that privilege came with a burden: a thorn in the flesh. The thorn is meant to humble him, to keep him dependent on God. It is a gift, even though it is painful.',
    'In God&apos;s answer to Paul&apos;s prayer for deliverance—&quot;My grace is sufficient for thee; for my strength is made perfect in weakness&quot;—Paul finds the key to his entire apostolic life. The goal is not comfort or achievement, but the display of Christ&apos;s power through human weakness.',
  ],

  sections: [
    {
      ref: '2 Corinthians 12:1–10',
      title: 'The Thorn; Grace Sufficient',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(2, 'I knew a man in Christ above fourteen years ago, (whether in the body, I cannot tell; or whether out of the body, I cannot tell: God knoweth;) such an one caught up to the third heaven.'),
            plain(4, 'How that he was caught up into paradise, and heard unspeakable words, which it is not lawful for a man to utter.'),
            plain(7, 'And lest I should be exalted above measure through the abundance of the revelations, there was given to me a thorn in the flesh, the messenger of Satan to buffet me, lest I should be exalted above measure.'),
            plain(8, 'For this thing I besought the Lord thrice, that it might depart from me.'),
            plain(9, 'And he said unto me, My grace is sufficient for thee: for my strength is made perfect in weakness. Most gladly therefore will I rather glory in my infirmities, that the power of Christ may rest upon me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-12-heaven',
          html:
            'Paul was &quot;caught up to the third heaven&quot; and &quot;heard unspeakable words.&quot; This is a profound spiritual experience—direct encounter with God beyond what human words can express. Yet Paul speaks of it almost in passing.',
        },
        {
          kind: 'greek',
          id: 'cor2-12-skolops',
          title: 'Skolops — Thorn; Stake; Splinter',
          script: 'σκόλοψ',
          translit: '<strong>Skolops</strong> · thorn; stake; splinter; piercing pain',
          description:
            'The &quot;thorn in the flesh&quot; is a physical ailment of some kind—Paul does not specify. What matters is not its identity but its purpose: to keep Paul humble, dependent on God.',
        },
        {
          kind: 'commentary',
          id: 'cor2-12-grace-sufficient',
          html:
            'God&apos;s answer is not removal but grace: &quot;My grace is sufficient for thee; for my strength is made perfect in weakness.&quot; Paul&apos;s prayer for deliverance is answered with a deeper truth: the thorn is the occasion for experiencing Christ&apos;s power.',
        },
        {
          kind: 'christ',
          id: 'cor2-12-christ-strength',
          title: 'Christ Connection — Christ&apos;s Strength in Weakness',
          html:
            '&quot;My strength is made perfect in weakness.&quot; This is not merely consolation. It is the disclosure of how Christ actually works. Divine power flows through human weakness unobstructed.',
        },
        {
          kind: 'carry',
          html:
            'You have weaknesses—physical, emotional, spiritual. Your instinct is to hide them, to overcome them. But God may be telling you: my grace is sufficient. Your weakness is the place where Christ&apos;s power becomes visible. Stop resisting it. Embrace it.',
        },
        {
          kind: 'reflection',
          id: 'cor2-12-weakness',
          prompt: 'What &quot;thorn&quot; has God allowed in your life? What grace has He offered in the midst of it? How is His strength being made perfect in your weakness?',
        },
      ],
    },

    {
      ref: '2 Corinthians 12:14–21',
      title: 'Paul&apos;s Concern for the Corinthians',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(14, 'Behold, the third time I am ready to come to you; and I will not be burdensome to you: for I seek not yours, but you: for the children ought not to lay up for the parents, but the parents for the children.'),
            plain(15, 'And I will very gladly spend and be spent for you; though the more abundantly I love you, the less I be loved.'),
            plain(19, 'Again, think ye that we excuse ourselves unto you? we speak before God in Christ: but we do all things, dearly beloved, for your edifying.'),
            plain(20, 'For I fear, lest, when I come, I shall not find you such as I would, and that I shall be found unto you such as ye would not: lest there be debates, envyings, wraths, strifes, backbitings, whisperings, swellings, tumults:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-12-burden',
          html:
            'Paul is coming to Corinth a third time. He will not be a financial burden. &quot;I seek not yours, but you.&quot; His concern is not for their money but for their souls. He will &quot;very gladly spend and be spent&quot; for them.',
        },
        {
          kind: 'greek',
          id: 'cor2-12-dakneo',
          title: 'Dakneo — To Spend; To Exhaust Oneself',
          script: 'δαπανάω',
          translit: '<strong>Dakneo</strong> · to spend; to expend; to exhaust; to use up',
          description:
            'Paul will &quot;spend and be spent&quot;—exhaust himself in service to the Corinthians. This is not calculated. It is lavish self-giving.',
        },
        {
          kind: 'commentary',
          id: 'cor2-12-fear',
          html:
            'Yet Paul fears what he will find when he arrives. Debates, envyings, wraths, strifes. The church is fractured. Paul&apos;s heart aches for them. He is willing to spend himself on their healing.',
        },
        {
          kind: 'christ',
          id: 'cor2-12-christ-edifying',
          title: 'Christ Connection — Building Up the Body',
          html:
            'Everything Paul does is &quot;for your edifying.&quot; Not for his own glory or comfort, but to build up the church in Christ.',
        },
        {
          kind: 'carry',
          html:
            'Paul&apos;s love for the Corinthians is not contingent on their love for him. He loves them sacrificially, even when that love is not returned. This is the pattern: love that expends itself, that persists even in rejection.',
        },
        {
          kind: 'reflection',
          id: 'cor2-12-spend',
          prompt: 'What does it mean to be &quot;spent&quot; for others? Are you willing to love even when that love is not returned? What would that require?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'My grace is sufficient for thee: for my strength is made perfect in weakness.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Corinthians 12 · Study Guide',
  },

  hasHebrew: false,
};
