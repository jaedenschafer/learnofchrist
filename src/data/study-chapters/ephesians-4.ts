import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ephesians 4 — One Body, One Spirit; Walk Worthy; Gifts of the Spirit
 *
 * "There is one body, and one Spirit, even as ye are called in one hope of
 * your calling." Ephesians 4 shifts from revelation to application. The church
 * is one body. This unity is not aspirational; it is the reality into which
 * Christ has already brought believers. The practical question becomes: How
 * should those who are one body treat each other?
 */
export const EPHESIANS_4: RichChapterContent = {
  bookSlug: 'ephesians',
  bookName: 'Ephesians',
  chapter: 4,

  intros: [
    'After three chapters of doctrine—of how believers are chosen, made alive, reconciled to God and each other—Paul now turns to how believers should live. He begins with an appeal: "I therefore, the prisoner of the Lord, beseech you that ye walk worthy of the vocation wherewith ye are called." The gospel is not merely believed; it is lived.',
    'Ephesians 4 unfolds Paul&apos;s vision of community. One body. One Spirit. One Lord. One faith. One baptism. One God. Then comes the counterintuitive claim: this unity is enacted through diversity. Christ has given different gifts to different members so that the whole body is built up, each part contributing its strength.',
  ],

  bottomShare: {
    label: 'Share Ephesians 4',
    quote:
      'There is one body, one Spirit, one Lord, one faith, one baptism. The church is unified, yet each member receives gifts to build up the whole. Walk worthy through love and unity.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ephesians 4 · Study Guide',
  },

  sections: [
    /* ─── Ephesians 4:1–16 — One Body, Many Gifts ────────────────────────── */
    {
      ref: 'Ephesians 4:1–16',
      title: 'Unity and Diversity',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(1, 'I therefore, the prisoner of the Lord, beseech you that ye walk worthy of the vocation wherewith ye are called,'),
            plain(2, 'With all lowliness and meekness, with longsuffering, forbearing one another in love;'),
            plain(3, 'Endeavouring to keep the unity of the Spirit in the bond of peace.'),
            {
              number: 4,
              spans: [
                t('There is '),
                hg('one body, and one Spirit, even as ye are called in one hope of your calling', 'e4-unity'),
                t(';'),
              ],
            },
            plain(5, 'One Lord, one faith, one baptism,'),
            plain(6, 'One God and Father of all, who is above all, and through all you, and in you all.'),
            {
              number: 11,
              spans: [
                t('And he gave some, apostles; and some, prophets; and some, evangelists; and some, '),
                hp('pastors and teachers', 'e4-gifts'),
                t(';'),
              ],
            },
            plain(12, 'For the perfecting of the saints, for the work of the ministry, for the edifying of the body of Christ:'),
            {
              number: 13,
              spans: [
                t('Till we all come in the unity of the faith, and of the knowledge of the Son of God, unto a '),
                hy('perfect man, unto the measure of the stature of the fulness of Christ', 'e4-perfect'),
                t(':'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'e4-unity',
          html:
            '"There is one body, and one Spirit, even as ye are called in one hope of your calling." This is not an invitation to create unity. This is a declaration of what is already true. Believers share one body. One Spirit. One Lord. One faith. One baptism. One God. The command is not to create unity; it is to "keep the unity of the Spirit in the bond of peace."',
        },
        {
          kind: 'commentary',
          id: 'e4-gifts',
          html:
            'Christ has given gifts to the church: apostles, prophets, evangelists, pastors, and teachers. Each role serves "the perfecting of the saints, for the work of the ministry, for the edifying of the body of Christ." Gifts are not for personal prestige. They are for building up the whole.',
        },
        {
          kind: 'commentary',
          id: 'e4-perfect',
          html:
            'The goal of ministry is maturity—"a perfect man, unto the measure of the stature of the fulness of Christ." Perfection in Scripture means completeness, maturity, fulfilling one&apos;s intended purpose. The church is meant to grow toward Christ&apos;s fullness.',
        },
        {
          kind: 'greek',
          id: 'e4-teleiotes',
          title: 'Teleiotes — "Perfection" or "Maturity"',
          script: 'τελειότης',
          translit: '<strong>Teleiotes</strong> · perfection; maturity; completeness; fullness',
          description:
            'Teleiotes does not mean moral sinlessness. It means coming to full stature, realizing one&apos;s purpose. When Paul prays that believers reach "the measure of the stature of the fulness of Christ," he means growing toward the fullness and completeness that Christ embodies.',
        },
        {
          kind: 'christ',
          id: 'e4-christ-body',
          title: 'Christ Connection — The Head of the Body',
          html:
            'Christ is the head of the church, which is His body. This is not metaphor. It expresses a vital union. Just as the head directs the body, Christ directs the church through His Spirit. And just as different parts of a physical body have different functions but work toward the health of the whole, so believers have different gifts but work toward the building up of the body.',
        },
        {
          kind: 'carry',
          html:
            'You are part of one body. Not a body you are trying to build, but one Christ has already built through His cross. You are not an isolated individual Christian. You are a member, and your gifts matter. The question is: Are you using your gifts to build up the body, or for your own advancement?',
        },
        {
          kind: 'reflection',
          id: 'e4-gifts-reflect',
          prompt: 'Christ has given you gifts for the building up of the body. What gifts have you been given? How are you using them?',
        },
      ],
    },

    /* ─── Ephesians 4:25–32 — Anger, Truth, and Forgiveness ────────────────── */
    {
      ref: 'Ephesians 4:25–32',
      title: 'Be Angry and Sin Not; Forgive as Christ Forgave',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(25, 'Wherefore putting away lying, speak every man truth with his neighbour: for we are members one of another.'),
            {
              number: 26,
              spans: [
                t('Be ye angry, and '),
                hg('sin not', 'e4-anger'),
                t(': let not the sun go down upon your wrath:'),
              ],
            },
            plain(27, 'Neither give place to the devil.'),
            plain(29, 'Let no corrupt communication proceed out of your mouth, but that which is good to the use of edifying, that it may minister grace unto the hearers.'),
            {
              number: 31,
              spans: [
                t('Let all bitterness, and wrath, and anger, and clamour, and evil speaking, be put away from you, with all malice:'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And be ye kind one to another, tenderhearted, '),
                hp('forgiving one another, even as God for Christ&apos;s sake hath forgiven you', 'e4-forgive'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'e4-anger',
          html:
            '"Be ye angry, and sin not." Paul does not condemn anger itself. Anger at injustice, at wrong, at evil—this is righteous. But Paul warns: do not let anger become sin. Do not let the sun go down on your wrath. Anger that festers becomes bitterness. It becomes a foothold for the enemy.',
        },
        {
          kind: 'commentary',
          id: 'e4-forgive',
          html:
            '"Forgiving one another, even as God for Christ&apos;s sake hath forgiven you." Forgiveness is not mere sentiment. It is the echo of what has been done for you. God has forgiven you through Christ. That forgiveness is the pattern and the empowerment for forgiving others.',
        },
        {
          kind: 'greek',
          id: 'e4-charis',
          title: 'Charis — "Grace"',
          script: 'χάρις',
          translit: '<strong>Charis</strong> · grace; gift; favor; kindness',
          description:
            'Grace is unmerited favor. When Paul says believers should "minister grace unto the hearers," he means speaking words that convey God&apos;s kindness, not human judgment. Grace-filled speech edifies.',
        },
        {
          kind: 'carry',
          html:
            'You live in community with others who are members of the same body. How you speak, how you handle anger, whether you forgive—these are not private matters. They affect the whole body. You are called to truthfulness, to short-tempered anger that does not become resentment, and to forgiveness rooted in Christ&apos;s forgiveness of you.',
        },
        {
          kind: 'reflection',
          id: 'e4-forgive-reflect',
          prompt: 'God has forgiven you through Christ. How does this shape your capacity to forgive others?',
        },
      ],
    },
  ],
};
