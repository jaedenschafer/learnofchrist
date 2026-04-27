import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Galatians 3 — Abraham's Faith; Neither Jew nor Greek
 *
 * Paul appeals to Abraham. Abraham was justified by faith, not by law.
 * The law came 430 years later. It was a custodian, a teacher, but not
 * the final word. In Christ, the wall between Jew and Gentile collapses.
 * Race, status, gender—none of these define the believer. All are one in Christ.
 */
export const GALATIANS_3: RichChapterContent = {
  bookSlug: 'galatians',
  bookName: 'Galatians',
  chapter: 3,

  intros: [
    'Paul asks the Galatians a simple question: how did you receive the Spirit? By works of the law or by faith? Of course by faith. So why do you now trust in works? The pattern is clear from Scripture itself. Abraham was righteous because of faith, centuries before the law was given.',
    'The law served a purpose, but that purpose is fulfilled in Christ. In Christ, the ancient divisions collapse. Jew and Gentile, slave and free, male and female—these distinctions no longer determine your standing before God. All are one in Christ Jesus.',
  ],

  sections: [
    {
      ref: 'Galatians 3:1–14',
      title: 'Faith, Not Law; Abraham&apos;s Example',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(2, 'This only would I learn of you, Received ye the Spirit by the works of the law, or by the hearing of faith?'),
            plain(6, 'Even as Abraham believed God, and it was accounted to him for righteousness.'),
            plain(10, 'For as many as are of the works of the law are under the curse: for it is written, Cursed is every one that continueth not in all things which are written in the book of the law to do them.'),
            plain(11, 'But that no man is justified by the law in the sight of God, it is evident: for, The just shall live by faith.'),
            plain(13, 'Christ hath redeemed us from the curse of the law, being made a curse for us: for it is written, Cursed is every one that hangeth on a tree:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'gal-3-spirit',
          html:
            'Paul appeals to the Galatians&apos; own experience. How did they receive the Spirit? By faith in Christ. Not by circumcision, not by observing the law. Faith is the way in, and faith remains the way.',
        },
        {
          kind: 'greek',
          id: 'gal-3-pisteuo',
          title: 'Pisteuo — To Believe; To Trust; To Commit',
          script: 'πιστεύω',
          translit: '<strong>Pisteuo</strong> · to believe; to trust; to have faith; to commit oneself',
          description:
            'Abraham believed God. This is not intellectual assent but trust—commitment of the whole self to God&apos;s promise. This is the faith that justifies.',
        },
        {
          kind: 'commentary',
          id: 'gal-3-curse',
          html:
            'The law brings a curse. &quot;Cursed is every one that continueth not in all things which are written in the book of the law.&quot; The law demands perfection. No one can keep it fully. Christ rescues us from this curse by bearing it Himself.',
        },
        {
          kind: 'christ',
          id: 'gal-3-christ-redeemed',
          title: 'Christ Connection — Christ Bears the Curse',
          html:
            'Christ was &quot;made a curse for us.&quot; He took upon Himself the curse that the law brings. Through His death, He redeems those who cannot keep the law. This is substitutionary redemption.',
        },
        {
          kind: 'carry',
          html:
            'The law is not your ladder to heaven. Faith in Christ is. Stop trying to earn your way by works. Believe. Trust. Let Christ&apos;s work, not your own, be your foundation.',
        },
        {
          kind: 'reflection',
          id: 'gal-3-faith',
          prompt: 'Where are you still trying to earn God&apos;s favor through works? What would it mean to fully trust in Abraham&apos;s faith—faith without works?',
        },
      ],
    },

    {
      ref: 'Galatians 3:23–29',
      title: 'The Law as Custodian; One in Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(24, 'Wherefore the law was our schoolmaster to bring us unto Christ, that we might be justified by faith.'),
            plain(26, 'For ye are all the children of God by faith in Christ Jesus.'),
            plain(27, 'For as many of you as have been baptized into Christ have put on Christ.'),
            plain(28, 'There is neither Jew nor Greek, there is neither bond nor free, there is neither male nor female: for ye are all one in Christ Jesus.'),
            plain(29, 'And if ye be Christ&apos;s, then are ye Abraham&apos;s seed, and heirs according to the promise.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'gal-3-schoolmaster',
          html:
            'The law was a &quot;schoolmaster&quot;—a tutor who prepares the way for maturity. Once Christ comes, the tutoring is complete. The law&apos;s function is fulfilled. Maturity in Christ supersedes it.',
        },
        {
          kind: 'greek',
          id: 'gal-3-paidagogos',
          title: 'Paidagogos — Tutor; Custodian; Slave Guardian',
          script: 'παιδαγωγός',
          translit: '<strong>Paidagogos</strong> · tutor; custodian; slave guardian; pedagogue',
          description:
            'A paidagogos was a slave who escorted young children to school. Once the child matured, the slave&apos;s role ended. The law serves a similar function—until faith comes.',
        },
        {
          kind: 'commentary',
          id: 'gal-3-neither',
          html:
            '&quot;There is neither Jew nor Greek, there is neither bond nor free, there is neither male nor female.&quot; In Christ, the ancient categories collapse. All are one. This is not assimilation but radical equality.',
        },
        {
          kind: 'christ',
          id: 'gal-3-christ-unity',
          title: 'Christ Connection — One Body in Christ',
          html:
            'Race, status, gender—none of these divide you in Christ. You are baptized into Christ. You put on Christ. He is your identity, your status, your inheritance. All are Abraham&apos;s children through faith.',
        },
        {
          kind: 'carry',
          html:
            'Your worth in God&apos;s sight does not depend on your ethnicity, your social status, or your gender. It rests on Christ. In Him, all the world&apos;s divisions lose their power. You are one with every believer, regardless of background or circumstance.',
        },
        {
          kind: 'reflection',
          id: 'gal-3-one',
          prompt: 'What divisions—cultural, social, personal—do you struggle to overcome? How might the reality of being &quot;all one in Christ Jesus&quot; transform those divisions?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'There is neither Jew nor Greek, there is neither bond nor free, there is neither male nor female: for ye are all one in Christ Jesus.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Galatians 3 · Study Guide',
  },

  hasHebrew: false,
};
