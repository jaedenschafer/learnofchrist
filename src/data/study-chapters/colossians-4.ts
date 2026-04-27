import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Colossians 4 — Work Heartily; Walk in Wisdom; Greetings from Prison
 *
 * "And whatsoever ye do in word or deed, do all in the name of the Lord Jesus,
 * giving thanks to God and the Father by him." Colossians 4 extends Paul&apos;s
 * teaching to daily work and relationships. There is no distinction between
 * sacred and secular. All work is to be done "heartily, as to the Lord." And
 * all relationships—with believers, with outsiders—are to reflect Christ.
 */
export const COLOSSIANS_4: RichChapterContent = {
  bookSlug: 'colossians',
  bookName: 'Colossians',
  chapter: 4,

  intros: [
    'Colossians 4 opens with Paul&apos;s final instruction: servants are to obey masters, and masters are to treat servants with fairness and justice. Then comes the summary: "Whatsoever ye do in word or deed, do all in the name of the Lord Jesus." This is the principle by which all of life—work, speech, action—is to be measured.',
    'The chapter ends with greetings from Paul&apos;s companions in prison and an exhortation to prayer. Even in captivity, Paul is not bitter or self-pitying. He remembers his brothers and sisters, he asks for their prayers, and he calls them to walk in wisdom toward those outside the faith.',
  ],

  bottomShare: {
    label: 'Share Colossians 4',
    quote:
      'Whatever you do in word or deed, do all in the name of the Lord Jesus. Walk in wisdom toward those outside, redeeming the time. Pray without ceasing.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Colossians 4 · Study Guide',
  },

  sections: [
    /* ─── Colossians 4:1–18 — Work; Witness; Greetings ────────────────────── */
    {
      ref: 'Colossians 4:1–18',
      title: 'Living Before God in All Things',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 2,
              spans: [
                t('Continue in prayer, and watch in the same with '),
                hp('thanksgiving', 'c4-prayer'),
                t(';'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Walk in '),
                hg('wisdom toward them that are without, redeeming the time', 'c4-wisdom'),
                t('.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('Let your speech be always with grace, seasoned with salt, that ye may know how ye ought to answer '),
                hy('every man', 'c4-grace'),
                t('.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And say to Archippus, Take heed to the ministry which thou hast received in the Lord, that thou fulfil it.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('The salutation by the hand of me Paul. Remember my bonds. Grace be with you. Amen.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c4-prayer',
          html:
            '"Continue in prayer, and watch in the same with thanksgiving." Paul calls for perseverance in prayer, combined with watchfulness. And all prayer is to be bathed in thanksgiving. Gratitude reframes petition—you come before God not as a supplicant begging from want, but as a child of God offering thanks.',
        },
        {
          kind: 'commentary',
          id: 'c4-wisdom',
          html:
            '"Walk in wisdom toward them that are without, redeeming the time." Believers are to be wise in how they relate to those outside the faith. "Redeeming the time" means making the most of opportunities, using time wisely for witness and ministry.',
        },
        {
          kind: 'commentary',
          id: 'c4-grace',
          html:
            '"Let your speech be always with grace, seasoned with salt." Salt preserves and flavors. Graceful speech is both preserving—it keeps truth alive—and flavoring—it makes faith attractive. Every word is an opportunity to point toward Christ.',
        },
        {
          kind: 'greek',
          id: 'c4-exagorazo',
          title: 'Exagorazo — "Redeeming" or "Buying Up"',
          script: 'ἐξαγοράζω',
          translit: '<strong>Exagorazo</strong> · to buy up; to redeem; to make full use of',
          description:
            'The word means to purchase, to buy back, to redeem. When applied to time, it means to use every moment wisely, to make full use of the opportunities given. Time is not infinite; it must be redeemed.',
        },
        {
          kind: 'christ',
          id: 'c4-christ-witness',
          title: 'Christ Connection — Witnessing in Word and Deed',
          html:
            'Paul calls believers to walk in wisdom and grace toward those outside the faith. This is witness—not aggressive preaching alone, but the lived reality of faith demonstrated in work, in speech, in relationship. The gospel is communicated as much by how believers treat others as by what they say.',
        },
        {
          kind: 'carry',
          html:
            'Your work is not separate from your faith. Your speech is not separate from your testimony. Your relationships with colleagues, with neighbors, with strangers—all of it is "in the name of the Lord Jesus." This is not burdensome; it is liberating. You are not two different people in different contexts. You are one person, entirely Christ&apos;s, in all you do.',
        },
        {
          kind: 'reflection',
          id: 'c4-redeem-reflect',
          prompt: 'How are you redeeming the time? Where could you walk in greater wisdom toward those outside the faith?',
        },
      ],
    },
  ],
};
