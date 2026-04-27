import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Romans 7 — The Law and the Flesh
 *
 * Paul describes the inner conflict: "What I would, that do I not; but what
 * I hate, that do I." The law is holy, but the flesh is weak. "O wretched
 * man that I am! who shall deliver me from the body of this death? I thank
 * God through Jesus Christ our Lord."
 */
export const ROMANS_7: RichChapterContent = {
  bookSlug: 'romans',
  bookName: 'Romans',
  chapter: 7,

  intros: [
    'Romans 7 is the cry of the human heart caught between desire and inability. Paul describes the struggle that every believer knows: I want to do good, but I do evil. I delight in God&apos;s law, but another law wars against it. This is not the cry of someone who has never encountered God. It is the cry of someone who loves God yet finds themselves unable to live out that love.',
    'The resolution comes not through greater effort or higher standards, but through surrender. "O wretched man that I am! who shall deliver me from the body of this death? I thank God through Jesus Christ our Lord." The law reveals our need. The flesh reveals our weakness. But Christ reveals the way out—not through the law, but through grace.',
  ],

  sections: [
    /* ─── Romans 7:7–12 — The Law Is Holy ────────────────────────────────── */
    {
      ref: 'Romans 7:7–12',
      title: 'The Law Reveals Sin',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(7, 'What shall we say then? Is the law sin? God forbid. Nay, I had not known sin, but by the law: for I had not known lust, except the law had said, Thou shalt not covet.'),
            plain(9, 'For I was alive without the law once: but when the commandment came, sin revived, and I died.'),
            plain(10, 'And the commandment, which was ordained to life, I found to be unto death.'),
            plain(12, 'Wherefore the law is holy, and the commandment holy, and just, and good.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom7-law-reveals',
          html:
            'Paul defends the law: it is holy, just, and good. But the law was not given to save. It was given to reveal. "I had not known sin, but by the law." The law is like a mirror. It shows us what we are. It does not transform us. It only reveals our condition.',
        },
        {
          kind: 'greek',
          id: 'rom7-nomos',
          title: 'Nomos — Law',
          script: 'νόμος',
          translit: '<strong>Nomos</strong> · law; principle; rule; God&apos;s standard',
          description:
            'Nomos is not merely a collection of rules. It is the revealed will of God, the transcript of His character. When the law says "Thou shalt not covet," it is expressing God&apos;s own nature—the love that desires good for others, not for itself.',
        },
        {
          kind: 'commentary',
          id: 'rom7-sin-revived',
          html:
            '"When the commandment came, sin revived, and I died." Knowledge of the law does not kill sin. It awakens it. You cannot battle what you do not see. Once you see the standard, you see your failure. The law brings knowledge of sin, but knowledge alone does not break sin&apos;s power.',
        },
        {
          kind: 'christ',
          id: 'rom7-christ-life',
          title: 'Christ Connection — The Law Points to Grace',
          html:
            'The law is good because it reveals the holiness of God. But it points beyond itself. It shows us our desperate need for One who can do what we cannot—obey fully and bear the consequences of our failure. That One is Christ.',
        },
        {
          kind: 'carry',
          html:
            'Do not blame the law for your helplessness. The law is a friend that shows you the truth. You are not able to save yourself through obedience. This is not failure on the law&apos;s part. It is revelation. Knowing this, you are free to look beyond the law to the One who can save you.',
        },
        {
          kind: 'reflection',
          id: 'rom7-helpless',
          prompt: 'Where do you feel the distance between what you know is right and what you actually do? Rather than condemning yourself, what does this gap reveal about your need for grace?',
        },
      ],
    },

    /* ─── Romans 7:14–25 — The Inner Conflict ──────────────────────────────── */
    {
      ref: 'Romans 7:14–25',
      title: 'The Battle Within',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(14, 'For we know that the law is spiritual: but I am carnal, sold under sin.'),
            plain(15, 'For that which I do I allow not: for what I would, that do I not; but what I hate, that do I.'),
            plain(18, 'For I know that in me (that is, in my flesh,) dwelleth no good thing: for to will is present with me; but how to perform that which is good I find not.'),
            plain(24, 'O wretched man that I am! who shall deliver me from the body of this death?'),
            plain(25, 'I thank God through Jesus Christ our Lord. So then with the mind I myself serve the law of God; but with the flesh the law of sin.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom7-carnal',
          html:
            '"I am carnal, sold under sin." Paul does not excuse himself. He names the reality. His will loves the good, but his flesh is enslaved. He is a prisoner in his own body, subject to appetites and habits he despises. This is not the description of an unbeliever. This is the cry of someone who truly wants to obey but finds themselves unable.',
        },
        {
          kind: 'greek',
          id: 'rom7-sarx',
          title: 'Sarx — Flesh',
          script: 'σάρξ',
          translit: '<strong>Sarx</strong> · flesh; natural human nature; the self oriented away from God',
          description:
            'Sarx is not the body itself but the body as the seat of appetite and habit. The flesh wars against the spirit. To live in the flesh is to be enslaved to what the body demands. To die to the flesh is to be free of that tyranny.',
        },
        {
          kind: 'commentary',
          id: 'rom7-wretched',
          html:
            '"O wretched man that I am! who shall deliver me from the body of this death?" This is not despair. This is the cry that precedes deliverance. Paul recognizes his helplessness. He cannot save himself. He cannot fix himself. He needs a deliverer.',
        },
        {
          kind: 'christ',
          id: 'rom7-christ-deliverer',
          title: 'Christ Connection — Deliverance Through Grace',
          html:
            'The answer to "who shall deliver me?" is Jesus Christ. Not through the law, not through willpower, but through grace. Christ does not condemn the struggle. He enters it, bears it, and offers freedom through His own sacrifice.',
        },
        {
          kind: 'carry',
          html:
            'If you feel the inner conflict Paul describes, do not despair. This is not a sign that you are not a believer. It is a sign that you are awake to your condition. The cry "O wretched man!" is the beginning of repentance, the beginning of turning toward grace. In that turning, deliverance begins.',
        },
        {
          kind: 'reflection',
          id: 'rom7-deliverance',
          prompt: 'What inner conflict is Paul describing here, and where do you feel it in your own life? What would it mean to stop trying to fix it yourself and receive deliverance through Christ?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'What I would, that do I not; but what I hate, that do I. O wretched man that I am! who shall deliver me from the body of this death? I thank God through Jesus Christ our Lord.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Romans 7 · Study Guide',
  },

  hasHebrew: false,
};
