import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Philippians 3 — Loss Is Gain; Knowing Christ Above All
 *
 * "I count all things but loss for the excellency of the knowledge of Christ
 * Jesus my Lord." Philippians 3 is Paul's personal testimony. He once had
 * credentials, status, achievements. Everything the world considers valuable.
 * Then he met Christ. And he counted it all garbage. Not from despair, but
 * from the overwhelming superiority of knowing Christ.
 */
export const PHILIPPIANS_3: RichChapterContent = {
  bookSlug: 'philippians',
  bookName: 'Philippians',
  chapter: 3,

  intros: [
    'Paul begins by warning against false teachers who teach that works or circumcision earn righteousness. Then he pivots to his own experience. He had everything such teachers could boast about—descent, legal status, zeal. Yet he "counted" it all loss.',
    'The language is crucial. He did not deny the reality of these things. He reassessed their value. And the reassessment was not made from failure but from encounter. He had met Christ, and that meeting transformed how he valued everything else. This is the logic of conversion: not denial of the old, but recognition that the new infinitely outweighs it.',
  ],

  bottomShare: {
    label: 'Share Philippians 3',
    quote:
      'I count all things but loss for the excellency of the knowledge of Christ Jesus. Paul abandoned human credentials and achievements to gain Christ—which is incomparably superior.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Philippians 3 · Study Guide',
  },

  sections: [
    /* ─── Philippians 3:1–11 — The Loss That Is Gain ────────────────────────── */
    {
      ref: 'Philippians 3:1–11',
      title: 'Everything Counted as Loss',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 7,
              spans: [
                t('But what things were gain to me, those I '),
                hp('counted loss for Christ', 'p3-loss'),
                t('.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Yea doubtless, and I count all things but loss for the '),
                hg('excellency of the knowledge of Christ Jesus my Lord', 'p3-knowledge'),
                t(': for whom I have suffered the loss of all things, and do count them but dung, that I may win Christ,'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And be found in him, not having mine own righteousness which is of the law, but that which is through the faith of Christ, the '),
                hy('righteousness which is of God by faith', 'p3-righteousness'),
                t(':'),
              ],
            },
            plain(10, 'That I may know him, and the power of his resurrection, and the fellowship of his sufferings, being made conformable unto his death;'),
            plain(11, 'If by any means I might attain unto the resurrection of the dead.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'p3-loss',
          html:
            '"I counted loss for Christ." The language is commercial—a cost-benefit analysis. What had value in the old economy (Jewish credentials, legal status, achievement) becomes worthless in the new economy. The shift is not from honor to shame but from lesser good to incomparably greater good.',
        },
        {
          kind: 'commentary',
          id: 'p3-knowledge',
          html:
            '"The excellency of the knowledge of Christ Jesus my Lord." Paul does not say mere knowledge of facts about Christ. He says knowledge of Christ Himself—personal, experiential, intimate knowledge. This is relationship, not information. And it is so surpassingly good that everything else becomes "dung" by comparison.',
        },
        {
          kind: 'commentary',
          id: 'p3-righteousness',
          html:
            '"The righteousness which is of God by faith." Paul abandoned self-righteousness—the sense that he had earned God&apos;s favor through keeping rules. In its place came righteousness that is a gift from God, received by faith. It is not something he produces; it is something he receives.',
        },
        {
          kind: 'greek',
          id: 'p3-gnosis',
          title: 'Epignosis — "Knowledge"',
          script: 'ἐπίγνωσις',
          translit: '<strong>Epignosis</strong> · full knowledge; intimate knowledge; recognition; understanding',
          description:
            'This is not abstract knowledge. It is intimate, personal knowledge. The same word is used for the most complete understanding, the deepest recognition. To know Christ is to be transformed by the relationship.',
        },
        {
          kind: 'christ',
          id: 'p3-christ-worth',
          title: 'Christ Connection — The Surpassing Worth of Christ',
          html:
            'Christ is worth everything. Paul echoes Jesus&apos; parable of the treasure in the field: "The kingdom of heaven is like unto treasure hid in a field; the which when a man hath found, he hideth, and for joy thereof goeth and selleth all that he hath, and buyeth that field" (Matthew 13:44). The joy of finding Christ is so great that surrendering all else is not a sacrifice; it is wisdom.',
        },
        {
          kind: 'carry',
          html:
            'What would you be willing to lose for Christ? This is not a call to recklessness. It is a call to reassessment. In the presence of the surpassing worth of Christ, what you once clung to becomes less important. Your status, your security, your comfort—all of it is negotiable when Christ becomes real to you.',
        },
        {
          kind: 'reflection',
          id: 'p3-knowledge-reflect',
          prompt: 'What would you count as loss in order to gain Christ? What are you holding onto that might be worth releasing?',
        },
      ],
    },

    /* ─── Philippians 3:12–21 — Press Toward the Mark; Heavenly Citizenship ─── */
    {
      ref: 'Philippians 3:12–21',
      title: 'Press Toward the Goal',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 12,
              spans: [
                t('Not as though I had already attained, either were already perfect: but I '),
                hp('follow after', 'p3-follow'),
                t(', if that I may apprehend that for which also I am apprehended of Christ Jesus.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Brethren, I count not myself to have apprehended: but this one thing I do, forgetting those things which are behind, and reaching forth unto those things which are before,'),
              ],
            },
            {
              number: 14,
              spans: [
                t('I '),
                hg('press toward the mark for the prize of the high calling of God in Christ Jesus', 'p3-mark'),
                t('.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('For our conversation is in heaven; from whence also we look for the Saviour, the Lord Jesus Christ:'),
              ],
            },
            {
              number: 21,
              spans: [
                t('Who shall change our vile body, that it may be '),
                hy('fashioned like unto his glorious body', 'p3-glorious'),
                t(', according to the working whereby he is able even to subdue all things unto himself.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'p3-follow',
          html:
            '"I follow after, if that I may apprehend that for which also I am apprehended of Christ Jesus." Paul describes a two-sided movement. Christ has apprehended him—seized him, claimed him. Now Paul apprehends, pursues, reaches forward. This is the life of faith: God&apos;s initiative meets human response.',
        },
        {
          kind: 'commentary',
          id: 'p3-mark',
          html:
            '"I press toward the mark for the prize of the high calling of God in Christ Jesus." The Christian life is not complacency. It is pressing forward, straining toward the goal. The goal is not some abstract achievement but a person—Christ—and conformity to Him.',
        },
        {
          kind: 'commentary',
          id: 'p3-glorious',
          html:
            '"Fashioned like unto his glorious body." The resurrection is not mere survival or ascent to disembodied heaven. It is transformation into a body like Christ&apos;s—glorified, physical, real. The believer&apos;s destiny is embodied existence in the presence of Christ.',
        },
        {
          kind: 'carry',
          html:
            'The Christian life is not arrival but journey. You have not yet apprehended the fullness of Christ, though He has apprehended you. So you press on. You forget what is behind—past failures, past achievements—and reach forward toward what is ahead. The goal is not perfection in this life, but the transformation that awaits at the resurrection.',
        },
        {
          kind: 'reflection',
          id: 'p3-press-reflect',
          prompt: 'What is holding you back from pressing toward the mark? What past thing do you need to forget? What future thing should you be reaching toward?',
        },
      ],
    },
  ],
};
