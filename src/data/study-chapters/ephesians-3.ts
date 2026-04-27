import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ephesians 3 — The Mystery Revealed; Christ Dwelling in Your Heart
 *
 * "That Christ may dwell in your hearts by faith; that ye, being rooted and
 * grounded in love, may be able to comprehend with all saints what is the
 * breadth, and length, and depth, and height..." This chapter reveals the
 * mystery hidden for ages: Gentiles are fellow heirs, co-members of the body,
 * and co-partakers of God&apos;s promise in Christ. It is a mystery not of
 * confusion, but of inclusion.
 */
export const EPHESIANS_3: RichChapterContent = {
  bookSlug: 'ephesians',
  bookName: 'Ephesians',
  chapter: 3,

  intros: [
    'Ephesians 3 opens with Paul reflecting on his calling as an apostle to the Gentiles. He does not present this as his own achievement, but as a stewardship of grace. Then he unveils the mystery: what was hidden "from the beginning of the world" is now revealed—that Jews and Gentiles share one body, one Spirit, one Lord, one faith.',
    'The chapter concludes with one of Scripture&apos;s most expansive prayers—not for worldly success, but for spiritual depth. Paul prays that believers would be filled with the fullness of God. Not as isolated individuals, but as a community rooted and grounded in love, able to comprehend the love of Christ that surpasses knowledge.',
  ],

  bottomShare: {
    label: 'Share Ephesians 3',
    quote:
      'The mystery hidden for ages is revealed: Gentiles are co-heirs with Israel in Christ. Paul prays that believers would dwell rooted in love, comprehending the infinite love of Christ.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ephesians 3 · Study Guide',
  },

  sections: [
    /* ─── Ephesians 3:1–12 — The Mystery of the Gentiles Revealed ──────────── */
    {
      ref: 'Ephesians 3:1–12',
      title: 'Gentiles Are Fellow Heirs',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(3, 'How that by revelation he made known unto me the mystery; (as I wrote afore in few words,'),
            {
              number: 4,
              spans: [
                t('Whereby, when ye read, ye may understand my knowledge in the '),
                hp('mystery of Christ', 'e3-mystery'),
                t(')'),
              ],
            },
            plain(6, 'That the Gentiles should be fellowheirs, and of the same body, and partakers of his promise in Christ by the gospel:'),
            {
              number: 8,
              spans: [
                t('Unto me, who am less than the least of all saints, is this grace given, that I should '),
                hg('preach among the Gentiles the unsearchable riches of Christ', 'e3-riches'),
                t(';'),
              ],
            },
            plain(9, 'And to make all men see what is the fellowship of the mystery, which from the beginning of the world hath been hid in God, who created all things by Jesus Christ:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'e3-mystery',
          html:
            'Paul calls it "the mystery of Christ." In Scripture, a mystery is not something mysterious or incomprehensible. It is something hidden in former times but now revealed. The mystery Paul speaks of is this: Christ&apos;s work includes Gentiles. They are not outsiders or converts to Judaism. They are fellow heirs.',
        },
        {
          kind: 'commentary',
          id: 'e3-riches',
          html:
            'Paul speaks of "the unsearchable riches of Christ." Riches are what Christ offers—not material wealth, but spiritual treasure beyond measure. These riches are "unsearchable"—not because they cannot be known, but because they are inexhaustible. The deeper you search, the more you find.',
        },
        {
          kind: 'greek',
          id: 'e3-mysterion',
          title: 'Mysterion — "Mystery"',
          script: 'μυστήριον',
          translit: '<strong>Mysterion</strong> · mystery; secret; something hidden then revealed',
          description:
            'In Paul&apos;s language, a mystery is not something irrational. It is a plan of God that was hidden in the Old Testament but is now made known. The mystery of Ephesians is that God&apos;s redemption extends to all people, breaking down the historical barrier between Jew and Gentile.',
        },
        {
          kind: 'christ',
          id: 'e3-christ-mystery',
          title: 'Christ Connection — The Mediator Who Unites All',
          html:
            'Christ is Himself the mystery. His incarnation, His cross, His resurrection—all of this enacts the reconciliation of Jew and Gentile. Before Christ, the barrier stood. Through Christ, it is broken. The gospel is the public proclamation of what Christ has accomplished.',
        },
        {
          kind: 'carry',
          html:
            'You are called to understand and to live out a mystery—that you, whoever you are, are a co-heir with believers across every boundary. This is not a theological abstraction. It is a calling to community. It is a call to see every other believer not as an outsider or a stranger, but as a fellow heir.',
        },
        {
          kind: 'reflection',
          id: 'e3-mystery-reflect',
          prompt: 'The mystery is that you are a co-heir with believers of every background in Christ. How does this change your view of the global church?',
        },
      ],
    },

    /* ─── Ephesians 3:14–21 — Prayer for Spiritual Strength and Fullness ───── */
    {
      ref: 'Ephesians 3:14–21',
      title: 'Rooted in Love; Filled with God&apos;s Fullness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(14, 'For this cause I bow my knees unto the Father of our Lord Jesus Christ,'),
            {
              number: 16,
              spans: [
                t('That he would grant you, according to the riches of his glory, to be '),
                hp('strengthened with might by his Spirit in the inner man', 'e3-strength'),
                t(';'),
              ],
            },
            {
              number: 17,
              spans: [
                t('That '),
                hp('Christ may dwell in your hearts by faith', 'e3-dwell'),
                t('; that ye, being rooted and grounded in love,'),
              ],
            },
            {
              number: 18,
              spans: [
                t('May be able to '),
                hg('comprehend with all saints what is the breadth, and length, and depth, and height', 'e3-comprehend'),
                t(';'),
              ],
            },
            plain(19, 'And to know the love of Christ, which passeth knowledge, that ye might be filled with all the fulness of God.'),
            {
              number: 20,
              spans: [
                t('Now unto him that is able to do exceeding abundantly above all that we ask or think, according to the '),
                hy('power that worketh in us', 'e3-power'),
                t(','),
              ],
            },
            plain(21, 'Unto him be glory in the church by Christ Jesus throughout all ages, world without end. Amen.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'e3-strength',
          html:
            'Paul prays that believers would be "strengthened with might by his Spirit in the inner man." This is not physical strength, but spiritual resilience—the capacity to endure, to resist, to stand firm. This strength comes from the Spirit, not from the self.',
        },
        {
          kind: 'commentary',
          id: 'e3-dwell',
          html:
            '"That Christ may dwell in your hearts by faith." Christ&apos;s presence is not external, like a guest in a house. It is intimate—He dwells in the heart. And this dwelling is established through faith. The more a believer trusts Christ, the more fully He occupies and transforms the heart.',
        },
        {
          kind: 'commentary',
          id: 'e3-comprehend',
          html:
            'Paul prays that believers would "comprehend with all saints what is the breadth, and length, and depth, and height"—a fourfold dimension. This is the love of Christ. It is not solitary. It is comprehended "with all saints." The love of Christ is understood most fully in community.',
        },
        {
          kind: 'greek',
          id: 'e3-plero',
          title: 'Pleroo — "Filled" or "Fulfilled"',
          script: 'πληρόω',
          translit: '<strong>Pleroo</strong> · to fill; to complete; to fulfill; to make full',
          description:
            'To be "filled with all the fulness of God" means to be so indwelt by God that you are complete, lacking nothing. It is not a onetime filling but an ongoing process—being continually filled with God&apos;s presence.',
        },
        {
          kind: 'carry',
          html:
            'Paul prays for you. He asks that Christ would dwell in your heart, that you would be rooted in love, that you would comprehend love with all the saints, and that you would be filled with God&apos;s fullness. These are not small requests. They are the deepest prayer a believer can pray. What would it look like to accept this prayer for yourself?',
        },
        {
          kind: 'reflection',
          id: 'e3-dwell-reflect',
          prompt: 'Christ may dwell in your heart by faith. What does it mean for Him to dwell in you? How would it change your life?',
        },
      ],
    },
  ],
};
