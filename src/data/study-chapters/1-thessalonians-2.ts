import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const FIRST_THESSALONIANS_2: RichChapterContent = {
  bookSlug: '1-thessalonians',
  bookName: '1 Thessalonians',
  chapter: 2,

  intros: [
    'Paul reflects on his ministry among the Thessalonians. He did not come with eloquence or flashy persuasion. He came with the gospel, and it came in power. And though he was treated roughly—he had been imprisoned and beaten—he loved the Thessalonians deeply.',
    'This is pastoral tenderness. Paul describes his care for them as a mother cherishing her children, as a father encouraging and urging. Ministry that is not rooted in love is hollow. Paul&apos;s preaching was inseparable from his affection.',
  ],

  bottomShare: {
    label: 'Share 1 Thessalonians 2',
    quote:
      'We were gentle among you, like a nursing mother caring for her children. Our gospel came not in word only but in power, and in the Holy Spirit.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Thessalonians 2 · Study Guide',
  },

  sections: [
    {
      ref: '1 Thessalonians 2:1–12',
      title: 'Gentle Ministry; Mothering and Fathering',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {{
              number: 3,
              spans: [
                t('For our exhortation was not of deceit, nor of uncleanness, nor in '),
                hp('guile', '1t2-guile'),
                t(':'),
              ],
            }},
            {{
              number: 7,
              spans: [
                t('But we were '),
                hg('gentle among you, even as a nurse cherisheth her children', '1t2-gentle'),
                t(':'),
              ],
            }},
            {{
              number: 8,
              spans: [
                t('So being affectionately desirous of you, we were willing to have imparted unto you, not the gospel of God only, but also our own '),
                hy('souls', '1t2-souls'),
                t(', because ye were dear unto us.'),
              ],
            }},
            plain(11, 'As ye know how we exhorted and comforted and charged every one of you, as a father doth his children,'),
          ],
        },
        {
          kind: 'commentary',
          id: '1t2-guile',
          html:
            'Paul asserts that his ministry was not deceptive or manipulative. There was no hidden agenda, no commercial motive. He spoke truth because he cared about the souls of the Thessalonians.',
        },
        {
          kind: 'commentary',
          id: '1t2-gentle',
          html:
            '"Gentle among you, even as a nurse cherisheth her children." This image of Paul as a nursing mother is extraordinary. Ministry rooted in strength and authority must also be rooted in tenderness. The nurse does not dominate; she nurtures.',
        },
        {
          kind: 'commentary',
          id: '1t2-souls',
          html:
            '"Imparted unto you...our own souls." Paul gave not just doctrine but himself. He invested his life, his heart, his care in the Thessalonians. This is the pattern: the gospel is communicated most powerfully through the person who bears it.',
        },
        {
          kind: 'carry',
          html:
            'You have received the gospel. But have you received it from someone who cares for you? Paul shows that true ministry is inseparable from love. If you have been mentored in faith, remember those who have given you not just words but themselves. And if you are called to minister to others, offer not just truth but love.',
        },
        {
          kind: 'reflection',
          id: '1t2-gentle-reflect',
          prompt: 'Who has ministered to you with gentle care? How have you seen the gospel communicated through someone&apos;s love?',
        },
      ],
    },
  ],
};
