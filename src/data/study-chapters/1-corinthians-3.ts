import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Corinthians 3 — Foundation: Christ Alone
 *
 * Paul addresses the Corinthians&apos; divisions over their leaders. Some say
 * &quot;I am of Paul&quot; or &quot;I am of Apollos,&quot; creating factions. Paul reminds them
 * that all apostles are merely servants, building on a single foundation—Jesus
 * Christ. The quality of work will be revealed by fire. Only what is built on
 * Christ remains.
 */
export const FIRST_CORINTHIANS_3: RichChapterContent = {
  bookSlug: '1-corinthians',
  bookName: '1 Corinthians',
  chapter: 3,

  intros: [
    'The Corinthian church has fractured into parties, each claiming allegiance to a favorite teacher. This is not merely a personality issue—it strikes at the heart of the gospel. If believers follow teachers rather than Christ, they have lost the center. Paul must rebuild their understanding of what the church is: not a collection of cliques around charismatic leaders, but a building with a single foundation.',
    'Paul uses the image of construction: builders, materials, fire. Only Christ is the foundation. Everything else built upon it—whether wood, hay, stubble or gold, silver, precious stones—will be tested. The quality of the church is not determined by the brilliance of its leaders. It is determined by how faithfully the work rests on Christ.',
  ],

  sections: [
    {
      ref: '1 Corinthians 3:1–9',
      title: 'Servants of Christ, Not Rivals',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(1, 'And I, brethren, could not speak unto you as unto spiritual, but as unto carnal, even as unto babes in Christ.'),
            plain(3, 'For ye are yet carnal: for whereas there is among you envying, and strife, and divisions, are ye not carnal, and walk as men?'),
            plain(4, 'For while one saith, I am of Paul; and another, I am of Apollos; are ye not carnal?'),
            plain(5, 'Who then is Paul, and who is Apollos, but ministers by whom ye believed, even as the Lord gave to every man?'),
            plain(6, 'I have planted, Apollos watered; but God gave the increase.'),
            plain(9, 'For we are labourers together with God: ye are God&apos;s husbandry, ye are God&apos;s building.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor3-1-carnal',
          html:
            'Paul must speak to the Corinthians &quot;as unto carnal.&quot; They are believers, but they are acting like unbelievers. Envying and strife reveal that they have not yet grasped the nature of the gospel. They are still &quot;babes in Christ,&quot; consumed with earthly rivalry rather than heavenly truth.',
        },
        {
          kind: 'greek',
          id: 'cor3-1-sarx',
          title: 'Sarx — Flesh',
          script: 'σάρξ',
          translit: '<strong>Sarx</strong> · flesh; earthly nature; human weakness apart from God',
          description:
            'The Corinthians are operating &quot;sarx&quot;—in the flesh, by human strength and human standards. They are measuring greatness as the world does. Paul calls them to rise above this, to see all ministers as servants in God&apos;s greater purpose.',
        },
        {
          kind: 'commentary',
          id: 'cor3-1-planted-watered',
          html:
            'Paul and Apollos are not rivals competing for followers. Paul &quot;planted,&quot; Apollos &quot;watered,&quot; but God &quot;gave the increase.&quot; The image is of a garden. The laborers work the soil, but only God can make things grow. Why boast in the laborer? The growth is God&apos;s doing.',
        },
        {
          kind: 'christ',
          id: 'cor3-1-christ-foundation',
          title: 'Christ Connection — All Builders Serve Christ',
          html:
            'Whether Paul or Apollos, all builders are servants of Christ. They are not masters. They are not worthy of worship or unquestioning loyalty. They are servants, nothing more. The Corinthians&apos; loyalty must be to Christ alone.',
        },
        {
          kind: 'carry',
          html:
            'We are tempted to admire and follow teachers—and good teaching is a gift from God. But take care. No teacher is your foundation. No pastor is your rock. Christ is. Receive teaching gladly, but remember: the teacher is merely a laborer in God&apos;s field.',
        },
        {
          kind: 'reflection',
          id: 'cor3-1-foundation',
          prompt: 'Who are the spiritual leaders you admire? How can you honor their work while remembering that Christ, not they, is your foundation?',
        },
      ],
    },

    {
      ref: '1 Corinthians 3:10–17',
      title: 'The Building and the Fire',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(10, 'According to the grace of God which is given unto me, as a wise masterbuilder, I have laid the foundation, and another buildeth thereon. But let every man take heed how he buildeth thereupon.'),
            plain(11, 'For other foundation can no man lay than that is laid, which is Jesus Christ.'),
            plain(12, 'Now if any man build upon this foundation gold, silver, precious stones, wood, hay, stubble;'),
            plain(13, 'Every man&apos;s work shall be made manifest: for the day shall declare it, because it shall be revealed by fire; and the fire shall try every man&apos;s work of what sort it is.'),
            plain(16, 'Know ye not that ye are the temple of God, and that the Spirit of God dwelleth in you?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor3-2-foundation',
          html:
            'Paul lays the foundation &quot;according to the grace of God.&quot; He is not boasting in his own wisdom. His role is to lay Christ as the foundation. No other foundation can be laid. No alternative Messiah, no other gospel. Christ alone is the foundation that will not crack, that will not fail.',
        },
        {
          kind: 'greek',
          id: 'cor3-2-dokimazo',
          title: 'Dokimazo — To Approve by Testing',
          script: 'δοκιμάζω',
          translit: '<strong>Dokimazo</strong> · to test; to approve; to discern',
          description:
            'On the day of judgment, fire will test every work—dokimazo. Only what is built with precious materials, done with integrity and love, will survive the fire. Shoddy work, built for personal glory or selfish gain, will burn away.',
        },
        {
          kind: 'commentary',
          id: 'cor3-2-materials',
          html:
            'The image is vivid. Gold, silver, precious stones—these endure the fire. Wood, hay, stubble—these burn. The difference is not the builder&apos;s talent or reputation. It is the quality of the work. Is it done with integrity? With love? With faithfulness? Or is it done for show, for personal advancement?',
        },
        {
          kind: 'christ',
          id: 'cor3-2-christ-temple',
          title: 'Christ Connection — Christ Indwells the Living Temple',
          html:
            'The church is not a building of stone. It is the temple of God, indwelt by the Spirit. Every act of ministry either builds this temple up—making it more beautiful, more holy, more reflective of Christ—or damages it. Christ is both the foundation and the presence that dwells within.',
        },
        {
          kind: 'carry',
          html:
            'Examine your work: your ministry, your daily labor, your words, your influence. Are you building on Christ with precious materials? Or with wood and hay? The fire will reveal. Build with such care that you will not be ashamed on that day.',
        },
        {
          kind: 'reflection',
          id: 'cor3-2-fire-test',
          prompt: 'What work in your life do you think would survive the fire? What might burn away? How does that challenge you?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'For other foundation can no man lay than that is laid, which is Jesus Christ.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Corinthians 3 · Study Guide',
  },

  hasHebrew: false,
};
