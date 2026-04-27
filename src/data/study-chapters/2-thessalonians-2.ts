import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Thessalonians 2 — The Man of Sin; Stand Fast and Hold Traditions
 *
 * "Let no man deceive you by any means: for that day shall not come, except
 * there come a falling away first, and that man of sin be revealed, the son of
 * perdition." Some Thessalonians have been shaken by false claims that the day
 * of the Lord has already come. Paul corrects them: no. The day cannot come until
 * apostasy comes and the man of sin is revealed. Until then, stand firm. Hold the
 * traditions you have been taught.
 */
export const SECOND_THESSALONIANS_2: RichChapterContent = {
  bookSlug: '2-thessalonians',
  bookName: '2 Thessalonians',
  chapter: 2,

  intros: [
    'False prophets have alarmed the Thessalonians, claiming that the day of the Lord has already arrived. Paul writes to calm them. The end has not come. Certain events must precede it: a great falling away, the revelation of a lawless figure opposed to God. Meanwhile, believers are called not to panic but to steadfastness.',
    'This chapter teaches discernment. Not every exciting claim about the end times is true. Believers should test teachings against Scripture. They should remain grounded in the traditions handed down by the apostles. Stability, not novelty; faithfulness, not fear.',
  ],

  bottomShare: {
    label: 'Share 2 Thessalonians 2',
    quote:
      'Let no man deceive you. Stand fast, and hold the traditions which ye have been taught. Therefore, brethren, stand fast, and hold the traditions which ye have been taught.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Thessalonians 2 · Study Guide',
  },

  sections: [
    {
      ref: '2 Thessalonians 2:1–17',
      title: 'The Apostasy; The Man of Sin; Stand Fast',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 3,
              spans: [
                t('Let no man deceive you by any means: for that day shall not come, except there come a '),
                hp('falling away first', '2t2-apostasy'),
                t(', and that '),
                hg('man of sin be revealed, the son of perdition', '2t2-man-sin'),
                t(';'),
              ],
            },
            {
              number: 7,
              spans: [
                t('For the mystery of iniquity doth already work: only he who now letteth will let, until he be '),
                hy('taken out of the way', '2t2-restraint'),
                t('.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('Therefore, brethren, '),
                hp('stand fast, and hold the traditions which ye have been taught', '2t2-traditions'),
                t(', whether by word, or our epistle.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('Now our Lord Jesus Christ himself, and God, even our Father, which hath loved us, and hath given us everlasting consolation and good hope through grace,'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2t2-apostasy',
          html:
            '"There come a falling away first." Before the day of the Lord, a great apostasy. This is a turning away from the faith. Not mere disagreement or debate, but fundamental abandonment. The church will not be spared the crisis of faith and belief.',
        },
        {
          kind: 'commentary',
          id: '2t2-man-sin',
          html:
            '"The man of sin...the son of perdition." A figure of rebellion against God. Throughout history, various figures have been identified as this "man of sin"—Roman emperors, papal powers, future Antichrist. The point is not to fix identity but to warn: opposition to God will be personified and powerful.',
        },
        {
          kind: 'commentary',
          id: '2t2-restraint',
          html:
            '"He who now letteth will let, until he be taken out of the way." Something or someone restrains the revelation of lawlessness. When that restraint is removed, rebellion breaks forth. The restraint may be the Spirit, the church, or providential ordering.',
        },
        {
          kind: 'commentary',
          id: '2t2-traditions',
          html:
            '"Hold the traditions which ye have been taught, whether by word, or our epistle." Tradition is not rebellion but continuity. The apostolic traditions—the faith once delivered—are the anchor in a sea of deception. Believers are to hold firm to what they have received.',
        },
        {
          kind: 'greek',
          id: '2t2-apostasia',
          title: 'Apostasia — "Falling Away" or "Apostasy"',
          script: 'ἀποστασία',
          translit: '<strong>Apostasia</strong> · apostasy; falling away; abandonment; defection from faith',
          description:
            'Apostasia is not mere sin or disagreement. It is deliberate, willful abandonment of the faith. It is the turning away from truth once received. In the end times, such apostasy will increase.',
        },
        {
          kind: 'christ',
          id: '2t2-christ-opposition',
          title: 'Christ Connection — Opposition to Christ',
          html:
            'Jesus taught of false prophets and false messiahs who would arise in the last days. Opposition to Christ and His gospel will increase until He returns to judge. But this opposition does not catch God by surprise; it is part of the unfolding revelation of history.',
        },
        {
          kind: 'carry',
          html:
            'You will hear false claims about the return of Christ. Do not be shaken. Do not panic. Stand fast in the apostolic faith you have received. The end is not here. There are signs that must precede it. In the meantime, hold firm to truth, test all teachings, and remain steadfast in hope.',
        },
        {
          kind: 'reflection',
          id: '2t2-stand-reflect',
          prompt: 'What false claims about the end times or faith have shaken you? How can you remain grounded in apostolic tradition while remaining open to truth?',
        },
      ],
    },
  ],
};
