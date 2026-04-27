import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Colossians 2 — Beware Lest Any Man Spoil You; Christ All-Sufficient
 *
 * "Beware lest any man spoil you through philosophy and vain deceit, after the
 * tradition of men, after the rudiments of the world, and not after Christ."
 * Colossians 2 is Paul's warning against false teachers who would offer human
 * wisdom, angelic intercession, ascetic disciplines as supplements to Christ.
 * His response is unambiguous: Christ is all-sufficient. All the fullness of God
 * dwells in Him. You are complete in Him.
 */
export const COLOSSIANS_2: RichChapterContent = {
  bookSlug: 'colossians',
  bookName: 'Colossians',
  chapter: 2,

  intros: [
    'The Colossian false teachers likely taught that believers needed extra spiritual practices, dietary restrictions, and relationship with angelic beings to achieve fullness. Paul cuts through this decisively. You are complete in Christ. You have received the fullness. To add to this is to take away from it.',
    'Colossians 2 is a charter of Christian freedom. But not the license to do as you please. It is the freedom from the burden of earning favor, from the fear of cosmic powers, from trying to supplement what Christ has already given. This freedom liberates believers to focus wholly on Christ.',
  ],

  bottomShare: {
    label: 'Share Colossians 2',
    quote:
      'Beware that no one spoil you through philosophy. Christ is all-sufficient. In Him dwell all the treasures of wisdom. You are complete in Him.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Colossians 2 · Study Guide',
  },

  sections: [
    /* ─── Colossians 2:1–23 — Christ the Treasure; Complete in Him ─────────── */
    {
      ref: 'Colossians 2:1–23',
      title: 'All-Sufficiency in Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 3,
              spans: [
                t('In whom are hid all the '),
                hp('treasures of wisdom and knowledge', 'c2-treasures'),
                t('.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Beware lest any man spoil you through '),
                hg('philosophy and vain deceit', 'c2-spoil'),
                t(', after the tradition of men, after the rudiments of the world, and not after Christ.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('For in him dwelleth all the '),
                hp('fulness of the Godhead bodily', 'c2-fullness'),
                t('.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And ye are '),
                hy('complete in him', 'c2-complete'),
                t(', which is the head of all principality and power:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c2-treasures',
          html:
            '"All the treasures of wisdom and knowledge" are hidden in Christ. The false teachers offered human wisdom, angelic revelations, secret knowledge. Paul says: Christ has it all. Nothing is hidden from Him. Nothing is needed beyond Him.',
        },
        {
          kind: 'commentary',
          id: 'c2-spoil',
          html:
            '"Beware lest any man spoil you through philosophy and vain deceit." Paul is not against wisdom or reflection. He is against hollow human philosophy that ignores Christ. Wisdom that is not rooted in Christ is vain—empty, worthless.',
        },
        {
          kind: 'commentary',
          id: 'c2-fullness',
          html:
            '"In him dwelleth all the fulness of the Godhead bodily." All of God&apos;s fullness—every attribute, every power, every perfection—dwells in Christ in bodily form. This is the incarnation. God did not send a representative or an angel. He came Himself, in Christ.',
        },
        {
          kind: 'commentary',
          id: 'c2-complete',
          html:
            '"Ye are complete in him." This is the climax of Paul&apos;s argument. You lack nothing. You are whole. You need no supplementary spiritual practices, no angelic intercession, no ascetic achievement. Completeness is given in Christ.',
        },
        {
          kind: 'greek',
          id: 'c2-pleroma',
          title: 'Pleroma — "Fullness" or "Completeness"',
          script: 'πλήρωμα',
          translit: '<strong>Pleroma</strong> · fullness; completeness; that which fills or completes',
          description:
            'Pleroma is the totality, the whole. When Paul says God&apos;s pleroma dwells in Christ, he means the completeness of divinity, nothing lacking, nothing left outside.',
        },
        {
          kind: 'christ',
          id: 'c2-christ-all',
          title: 'Christ Connection — Christ the All-Sufficient One',
          html:
            'This is the scandal and the glory of Christianity: Christ is all-sufficient. Not Christ plus something else. Not Christ supplemented by angels or wisdom or discipline. Just Christ. Alone, He is complete. In Him, believers are complete.',
        },
        {
          kind: 'carry',
          html:
            'You may feel incomplete. You may sense gaps in your spiritual life, areas where you seem to lack. But Paul tells you: you are complete in Christ. This does not mean you will not grow or learn. It means that the foundation is solid. You lack nothing essential. Everything you need for redemption, for transformation, for growth is present in Christ.',
        },
        {
          kind: 'reflection',
          id: 'c2-complete-reflect',
          prompt: 'You are complete in Christ. Do you believe this? What are you still trying to add, to supplement, to complete?',
        },
      ],
    },
  ],
};
