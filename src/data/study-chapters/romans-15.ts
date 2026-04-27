import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Romans 15 — The Strong Bearing the Weak; Christ&apos;s Example
 *
 * "We then that are strong ought to bear the infirmities of the weak, and
 * not to please ourselves." Christ pleased not Himself. Paul&apos;s mission to
 * the Gentiles. Greetings to the churches. "The God of peace shall bruise
 * Satan under your feet shortly."
 */
export const ROMANS_15: RichChapterContent = {
  bookSlug: 'romans',
  bookName: 'Romans',
  chapter: 15,

  intros: [
    'Paul drives home the lesson of chapter 14: the strong do not exist for themselves. They exist to serve the weak. Christ did not please Himself. He bore the reproaches of those who rejected Him. Christians are to follow His pattern. The entire letter now points toward its final purpose: Paul&apos;s ministry to the Gentiles and the collection he is bringing to Jerusalem, a sign of unity between Jewish and Gentile churches.',
    'Romans 15 is the practical application of the gospel. It is not enough to understand justification by faith. One must live it out in relationship with others, bearing one another&apos;s burdens, seeking the good of the other rather than one&apos;s own. The God of peace will crush Satan under your feet—but first, there is the work of bearing, of strengthening, of ministry.',
  ],

  sections: [
    /* ─── Romans 15:1–13 — Bearing the Weak; Christ&apos;s Example ─────────────── */
    {
      ref: 'Romans 15:1–13',
      title: 'Bearing and Building Up',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(1, 'We then that are strong ought to bear the infirmities of the weak, and not to please ourselves.'),
            plain(2, 'Let every one of us please his neighbour for his good to edification.'),
            plain(3, 'For even Christ pleased not himself; but as it is written, The reproaches of them that reproached thee fell on me.'),
            plain(5, 'Now the God of patience and consolation grant you to be likeminded one toward another according to Christ Jesus:'),
            plain(7, 'Wherefore receive ye one another, as Christ also received us to the glory of God.'),
            plain(13, 'Now the God of hope fill you with all joy and peace in believing, that ye may abound in hope, through the power of the Holy Ghost.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom15-bear',
          html:
            '"We then that are strong ought to bear the infirmities of the weak." Strength is not for self-exaltation. It is for service. The strong exist to strengthen the weak, to help carry their burden, to support their journey. This is the inversion of the world&apos;s values.',
        },
        {
          kind: 'greek',
          id: 'rom15-bastaso',
          title: 'Bastaso — Bear/Carry',
          script: 'βαστάζω',
          translit: '<strong>Bastaso</strong> · bear; carry; take up; support',
          description:
            'To bastaso is to take on the weight, to shoulder the burden with someone else. It is not condescension but solidarity. The strong do not lord their strength over the weak. They use it to lighten the load.',
        },
        {
          kind: 'commentary',
          id: 'rom15-christ-pleased-not',
          html:
            '"For even Christ pleased not himself." Christ did not come to satisfy His own preferences or wishes. He came to do the Father&apos;s will, to bear the sins of others, to submit Himself to suffering for the sake of redemption. This is the model for all strength.',
        },
        {
          kind: 'commentary',
          id: 'rom15-receive',
          html:
            '"Receive ye one another, as Christ also received us to the glory of God." Christ received you—not on the basis of your merit, not because you were strong enough to deserve it, but because of grace. You are to extend that same reception to others.',
        },
        {
          kind: 'christ',
          id: 'rom15-christ-burden',
          title: 'Christ Connection — Christ Bearing Our Infirmity',
          html:
            'Christ bore our infirmities. He bore our sins, our sorrows, our reproaches. In His bearing, we see what it means to be strong. Strength that serves, strength that bears, strength that does not please itself—this is Christ&apos;s strength.',
        },
        {
          kind: 'carry',
          html:
            'Where are you using your strength to please yourself instead of to serve? Look to Christ. He laid down His prerogatives. He submitted to shame. He bore what was not His to bear. Do likewise with whatever strength you have—time, ability, resources. Use it to strengthen another.',
        },
        {
          kind: 'reflection',
          id: 'rom15-strength',
          prompt: 'In what area of life do you have strength that you could use to bear another&apos;s infirmity? How would your life change if you viewed your strength as something to offer rather than something to enjoy?',
        },
      ],
    },

    /* ─── Romans 15:14–33 — Paul&apos;s Mission; Greetings ────────────────────── */
    {
      ref: 'Romans 15:14–33',
      title: 'Ministry and Mission',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(15, 'Nevertheless, brethren, I have written the more boldly unto you in some sort, as putting you in mind, because of the grace given unto me of God,'),
            plain(19, 'Through mighty signs and wonders, by the power of the Spirit of God; so that from Jerusalem, and round about unto Illyricum, I have fully preached the gospel of Christ.'),
            plain(25, 'But now I go unto Jerusalem to minister unto the saints.'),
            plain(26, 'For it hath pleased them of Macedonia and Achaia to make a certain contribution for the poor saints which are at Jerusalem.'),
            plain(30, 'Now I beseech you, brethren, for the Lord Jesus Christ&apos;s sake, and for the love of the Spirit, that ye strive together with me in your prayers to God for me;'),
            plain(33, 'Now the God of peace be with you all. Amen.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom15-mission',
          html:
            'Paul describes his mission: he has preached the gospel from Jerusalem to Illyricum. Not merely in word but in power, with signs and wonders worked by the Spirit. His mission is complete in this region, and he is now moving on, westward to Spain.',
        },
        {
          kind: 'greek',
          id: 'rom15-diakonia',
          title: 'Diakonia — Ministry/Service',
          script: 'διακονία',
          translit: '<strong>Diakonia</strong> · service; ministry; aid; the work of serving',
          description:
            'Paul&apos;s ministry is not exalted or grandiose. It is diakonia—service. He serves the saints through preaching, through prayer, through carrying a collection that embodies unity between Jewish and Gentile churches.',
        },
        {
          kind: 'commentary',
          id: 'rom15-collection',
          html:
            'The collection Paul is bringing from Macedonia and Achaia to Jerusalem is not merely charitable. It is a sign of unity. Gentile Christians are bearing the financial burdens of Jewish Christians. This is the gospel made visible.',
        },
        {
          kind: 'christ',
          id: 'rom15-christ-mission',
          title: 'Christ Connection — Sent by the Spirit',
          html:
            'Paul&apos;s mission is not his invention. It is the work of the Holy Spirit, who sent him and empowers his word with signs and wonders. All Christian ministry flows from the Spirit&apos;s work in Christ.',
        },
        {
          kind: 'carry',
          html:
            'Paul asks the church to pray for him and to join him in his prayers. He does not present himself as self-sufficient. He asks for partnership in prayer, which is the highest form of mutual bearing. Who can you ask to bear you up in prayer? Who is asking you to do the same?',
        },
        {
          kind: 'reflection',
          id: 'rom15-prayer',
          prompt: 'What work is God calling you to do? Who can you ask to join you in prayer for that work? How might you join others in their prayers for their callings?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'We that are strong ought to bear the infirmities of the weak. Christ pleased not himself. Receive ye one another as Christ received us. The God of peace be with you all.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Romans 15 · Study Guide',
  },

  hasHebrew: false,
};
