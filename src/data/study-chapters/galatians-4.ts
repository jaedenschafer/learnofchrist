import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Galatians 4 — Abba, Father; Hagar and Sarah
 *
 * Paul develops the theme of inheritance. The heir is under guardians while
 * young, but when maturity comes, freedom follows. So with believers. Once
 * the Spirit comes, you are no longer a slave but a child of God. You cry
 * &quot;Abba, Father.&quot; Paul also uses the Hagar-Sarah narrative to show that the
 * old covenant (the law) has been superseded by the new covenant (promise).
 */
export const GALATIANS_4: RichChapterContent = {
  bookSlug: 'galatians',
  bookName: 'Galatians',
  chapter: 4,

  intros: [
    'Paul returns to the heir metaphor. A child born to wealth is no different from a servant while still under age. Both are under guardians and managers. But when the time comes, the heir is set free and enters into his inheritance. So believers are heirs of God, freed from guardianship by the coming of Christ.',
    'Paul also interprets the Hagar-Sarah story typologically. Hagar represents the old covenant based on works and law. Sarah represents the new covenant based on promise and grace. The law-keepers are like Ishmael, born after the flesh. Believers are like Isaac, born by promise. We belong to Sarah&apos;s line.',
  ],

  sections: [
    {
      ref: 'Galatians 4:1–11',
      title: 'From Slavery to Sonship; Abba, Father',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(4, 'But when the fulness of the time was come, God sent forth his Son, made of a woman, made under the law,'),
            plain(5, 'To redeem them that were under the law, that we might receive the adoption of sons.'),
            plain(6, 'And because ye are sons, God hath sent forth the Spirit of his Son into your hearts, crying, Abba, Father:'),
            plain(7, 'Wherefore thou art no more a servant, but a son; and if a son, then an heir of God through Christ.'),
            plain(9, 'But now, after that ye have known God, or rather are known of God, how turn ye again to the weak and beggarly elements, whereunto ye desire again to be in bondage?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'gal-4-fullness',
          html:
            'God sent His Son &quot;when the fulness of the time was come.&quot; The moment was appointed. Christ came to redeem those under the law, to free them from the burden of works and restore them to sonship.',
        },
        {
          kind: 'greek',
          id: 'gal-4-huiothesia',
          title: 'Huiothesia — Adoption; Sonship',
          script: 'υἱοθεσία',
          translit: '<strong>Huiothesia</strong> · adoption; placing as son; sonship; legal status as child',
          description:
            'Adoption confers full legal status. The adopted child has all the rights and privileges of a born child. Believers are legally constituted as God&apos;s children through adoption in Christ.',
        },
        {
          kind: 'commentary',
          id: 'gal-4-abba',
          html:
            '&quot;Crying, Abba, Father.&quot; Abba is Aramaic intimacy—the child&apos;s word for father. Slaves did not cry Abba. Only sons did. The Spirit gives believers this intimate relationship with God.',
        },
        {
          kind: 'christ',
          id: 'gal-4-christ-redeemed',
          title: 'Christ Connection — Redeemed into Sonship',
          html:
            'Christ was made under the law to redeem those under the law. He took the slave&apos;s position so that believers might take the son&apos;s. This is the logic of redemptive exchange.',
        },
        {
          kind: 'carry',
          html:
            'You are not a slave in God&apos;s household. You are a son or daughter. You have the right to cry &quot;Abba, Father.&quot; Your inheritance is secure. Do not return to slavery. Do not turn back to the weak elements that cannot save you.',
        },
        {
          kind: 'reflection',
          id: 'gal-4-abba',
          prompt: 'Can you cry &quot;Abba, Father&quot; to God with full confidence and love? What still makes you feel like a slave rather than a child in God&apos;s house?',
        },
      ],
    },

    {
      ref: 'Galatians 4:21–31',
      title: 'Hagar and Sarah; Children of Promise',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(22, 'For it is written, that Abraham had two sons, the one by a bondmaid, the other by a free woman.'),
            plain(24, 'Which things are an allegory: for these are the two covenants; the one from the mount Sinai, which gendereth to bondage, which is Agar;'),
            plain(25, 'For this Agar is mount Sinai in Arabia, and answereth to Jerusalem which now is, and is in bondage with her children.'),
            plain(29, 'But as then he that was born after the flesh persecuted him that was born after the Spirit, even so it is now.'),
            plain(31, 'So then, brethren, we are not children of the bondwoman, but of the free woman.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'gal-4-hagar',
          html:
            'Abraham&apos;s two sons represent two covenants. Ishmael, born of Hagar the slave, represents the law-covenant—the Sinai covenant that brings bondage. Isaac, born of Sarah the free woman, represents the promise-covenant—the gospel that brings freedom.',
        },
        {
          kind: 'greek',
          id: 'gal-4-allegoria',
          title: 'Allegoria — Allegory; Speaking Differently',
          script: 'ἀλληγορία',
          translit: '<strong>Allegoria</strong> · allegory; figurative speech; saying one thing to signify another',
          description:
            'Paul reads the Hagar-Sarah narrative allegorically, not as literal history but as theological pattern. Law and promise, slavery and freedom, flesh and Spirit—these are the true meanings.',
        },
        {
          kind: 'commentary',
          id: 'gal-4-bondage',
          html:
            'Mount Sinai is in bondage. The law generates obligation and fear. Sarah, the free woman, represents the promise that gives birth without constraint. Believers are children of the promise, not of the law.',
        },
        {
          kind: 'christ',
          id: 'gal-4-christ-promise',
          title: 'Christ Connection — Born of Promise',
          html:
            'Christ is the fulfillment of the promise to Abraham. Believers are Abraham&apos;s seed through faith in Christ. You are born of promise, not of law. Your status rests on grace, not works.',
        },
        {
          kind: 'carry',
          html:
            'There are two ways of living: the way of the slave, trying to earn approval through works; the way of the child, living from the promise. You are a child of the promise. Live from that identity. Do not shrink back into slavery.',
        },
        {
          kind: 'reflection',
          id: 'gal-4-promise',
          prompt: 'Are you living as a child of the promise or as a slave under the law? Where do you feel that tension most acutely? How can you more fully embrace your freedom?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'And because ye are sons, God hath sent forth the Spirit of his Son into your hearts, crying, Abba, Father.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Galatians 4 · Study Guide',
  },

  hasHebrew: false,
};
