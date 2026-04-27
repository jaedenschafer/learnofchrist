import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Peter 4 — Holiness & Love in the Fiery Trial
 *
 * Peter calls believers to arm themselves with the resolve of Christ&apos;s suffering.
 * To suffer in the flesh breaks the power of sin in our lives. The end of all things
 * is at hand—let that reality shape how we live. Above all, love one another fervently,
 * for charity covers the multitude of sins. Rejoice in the privilege of suffering
 * for Christ&apos;s sake.
 */
export const FIRST_PETER_4: RichChapterContent = {
  bookSlug: '1-peter',
  bookName: '1 Peter',
  chapter: 4,

  intros: [
    'Peter presses into a theme that runs through the epistle: the connection between suffering and holiness. When believers face trial, they are equipped to break with sin. The sufferings of Christ, endured in obedience to the Father, are the model. We are to arm ourselves with the same resolve: obedience to God even when it costs us.',
    'He then sounds an eschatological note: the end of all things approaches. This is not fear-mongering but a call to clarity. If all earthly things are temporary, what truly matters? Love. Service. The building up of the body of Christ. All other pursuits pale in the light of eternity.',
  ],

  sections: [
    /* ─── 1 Peter 4:1–11 — Armed With Resolve ────────────────────────── */
    {
      ref: '1 Peter 4:1–11',
      title: 'Living for God\'s Purpose',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(1, 'Forasmuch then as Christ hath suffered for us in the flesh, arm yourselves likewise with the same mind: for he that hath suffered in the flesh hath ceased from sin;'),
            plain(2, 'That he no longer should live the rest of his time in the flesh to the lusts of men, but to the will of God.'),
            plain(7, 'But the end of all things is at hand: be ye therefore sober, and watch unto prayer.'),
            plain(8, 'And above all things have fervent charity among yourselves: for charity shall cover the multitude of sins.'),
            plain(10, 'As every man hath received the gift, even so minister one to another, as good stewards of the manifold grace of God.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1pet4-arm',
          html:
            'Peter calls believers to arm themselves. Not with weapons of war, but with the resolve Christ showed in His suffering. Jesus endured rejection, betrayal, torture, death—not yielding to fear or anger, but remaining faithful to the Father&apos;s will. We are to have this same intention. In this resolve is power to overcome sin.',
        },
        {
          kind: 'greek',
          id: '1pet4-pathema',
          title: 'Pathema — Suffering',
          script: 'πάθημα',
          translit: '<strong>Pathema</strong> · suffering; passion; what one experiences or endures',
          description:
            'Suffering is not merely circumstantial. It is an experience that transforms us. When endured in faith, it becomes redemptive—it refines us, strengthens us, breaks the power of sin over us.',
        },
        {
          kind: 'commentary',
          id: '1pet4-end',
          html:
            'Peter speaks of the end of all things approaching. He may have believed Christ&apos;s return was imminent. Whether or not that was fulfilled as expected, the principle stands: all earthly things are temporary. In light of that reality, what choices make sense? Investment in eternal things—in God, in love, in the church—becomes the only rational response.',
        },
        {
          kind: 'christ',
          id: '1pet4-christ-suffering',
          title: 'Christ Connection — The Example of Suffering',
          html:
            'Christ suffered in the flesh, endured injustice, faced death—all without compromising His obedience to the Father. In His suffering, He broke the power of sin and death. We follow His example when we endure our trials with the same faith and resolve.',
        },
        {
          kind: 'carry',
          html:
            'Above all, have fervent charity—love that burns with intensity. Charity covers the multitude of sins. This does not mean overlooking injustice, but choosing love as the foundation even when there is brokenness and failure. Love is the solvent that holds the body of Christ together.',
        },
        {
          kind: 'reflection',
          id: '1pet4-charity',
          prompt: 'What would it mean to practice fervent love in your church community? Who needs to experience that love from you?',
        },
      ],
    },

    /* ─── 1 Peter 4:12–19 — Rejoice in Suffering ────────────────────── */
    {
      ref: '1 Peter 4:12–19',
      title: 'Suffering for Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(12, 'Beloved, think it not strange concerning the fiery trial which is to try you, as though some strange thing happened unto you:'),
            plain(13, 'But rejoice, inasmuch as ye are partakers of Christ&apos;s sufferings; that, when his glory shall be revealed, ye also may be glad with exceeding joy.'),
            plain(14, 'If ye be reproached for the name of Christ, happy are ye; for the spirit of glory and of God resteth upon you: on their part he is evil spoken of, but on your part he is glorified.'),
            plain(16, 'Yet if any man suffer as a Christian, let him not be ashamed; but let him glorify God on this behalf.'),
            plain(19, 'Wherefore let them that suffer according to the will of God commit the keeping of their souls to him in well doing, as unto a faithful Creator.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1pet4-fiery-trial',
          html:
            'Peter calls suffering a "fiery trial"—it is real, it is painful, it tests us. But it is not strange. It is not unexpected. Believers should anticipate it. Jesus promised that those who follow Him will face opposition. To be tried is to be in good company—the company of all faithful believers throughout history.',
        },
        {
          kind: 'greek',
          id: '1pet4-pyrosis',
          title: 'Pyrosis — Fiery Trial',
          script: 'πύρωσις',
          translit: '<strong>Pyrosis</strong> · burning; fiery test; the act of being tested by fire',
          description:
            'Fire is used in Scripture as a metaphor for testing. It consumes what is worthless and purifies what is valuable. A fiery trial is one that tests the authenticity of faith and burns away what does not belong.',
        },
        {
          kind: 'commentary',
          id: '1pet4-partakers',
          html:
            'To suffer for Christ&apos;s name is to be a partaker of His sufferings. This is an honor. When reproached for following Jesus, you are not diminished but elevated. The Spirit of God and the Spirit of glory rest upon you. Your suffering is not meaningless. It is participation in the redemptive work of Christ.',
        },
        {
          kind: 'christ',
          id: '1pet4-christ-glory',
          title: 'Christ Connection — Suffering & Glory',
          html:
            'Jesus was glorified through His suffering. His willingness to endure the cross became the means of our redemption and His exaltation. Similarly, believers who suffer for His sake share in His glory. Suffering and exaltation are linked in God&apos;s redemptive economy.',
        },
        {
          kind: 'carry',
          html:
            'Peter closes with encouragement: commit your soul to God as a faithful Creator. Not to a distant God, but to one who created you, knows you, loves you. He is faithful—He will not abandon you in your trial. Trust Him. Do well. Maintain your integrity and faith, and He will keep you.',
        },
        {
          kind: 'reflection',
          id: '1pet4-suffering',
          prompt: 'If you faced suffering for your faith, would you be ashamed? How might God&apos;s presence strengthen you through it?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Arm yourselves likewise with the same mind as Christ. The end of all things is at hand. Above all things have fervent charity among yourselves. Rejoice, inasmuch as ye are partakers of Christ&apos;s sufferings.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Peter 4 · Study Guide',
  },

  hasHebrew: false,
};
