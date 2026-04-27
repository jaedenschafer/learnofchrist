import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Acts 13 — Paul and Barnabas Sent
 *
 * In Antioch, the church receives a direction from the Holy Ghost: "Separate me
 * Barnabas and Saul for the work whereunto I have called them." The church
 * fasts and prays, lays hands on them, and sends them forth. Paul (formerly Saul)
 * and Barnabas travel to Cyprus and Antioch in Pisidia, preaching in synagogues.
 * Paul addresses the Jews with the history of Israel and the promise of Christ.
 * Some believe, but others oppose and blaspheme.
 */
export const ACTS_13: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 13,

  intros: [
    'The church in Antioch is alive with the Spirit. It is not organized from the top down, but from the Spirit outward. As the believers worship and fast, the Holy Ghost speaks: set apart for Me Barnabas and Saul for the work to which I have called them. The church lays hands on them, and they are sent out as apostles—not appointed by Jerusalem, but commissioned by the Spirit through the prayer and obedience of the local church.',
    'On their journey, Paul and Barnabas encounter opposition and belief. In the synagogues, Paul stands and speaks the gospel, tracing God&apos;s faithfulness through Israel&apos;s history and arriving at Jesus as the promised Messiah. Some hearts open; others harden. Paul learns that preaching the gospel is not debate or persuasion, but the offering of light to those willing to see.',
  ],

  sections: [
    {
      ref: 'Acts 13:1–15',
      title: 'The Call and the Mission',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(1, 'Now there were in the church that was at Antioch certain prophets and teachers; as Barnabas, and Simeon that was called Niger, and Lucius of Cyrene, and Manaen, which had been brought up with Herod the tetrarch, and Saul.'),
            plain(2, 'As they ministered to the Lord, and fasted, the Holy Ghost said, Separate me Barnabas and Saul for the work whereunto I have called them.'),
            plain(3, 'And when they had fasted and prayed, and laid their hands on them, they sent them away.'),
            plain(4, 'So they, being sent forth by the Holy Ghost, departed unto Seleucia; and from thence they sailed to Cyprus.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts13-antioch-prophets',
          html:
            'Antioch is filled with prophets and teachers. Barnabas is there—the one who trusted Saul when others were afraid. Simeon, Lucius, Manaen—men of different backgrounds and stations, all serving the Lord. The church at Antioch is not one thing; it is diverse, multicultural, Spirit-led.',
        },
        {
          kind: 'greek',
          id: 'acts13-aphorizeo',
          title: 'Aphorizeo — Separate; Set Apart',
          script: 'ἀφορίζω',
          translit: '<strong>Aphorizeo</strong> · to separate; to set apart; to divide off',
          description:
            'The Spirit does not command; it invites and sets apart. Barnabas and Saul are not conscripted or compelled. They are separated—called out from the general work to a specific calling. The Spirit has a work for them that requires their particular gifts and obedience.',
        },
        {
          kind: 'christ',
          id: 'acts13-christ-calling',
          title: 'Christ Connection — The Spirit Sends Apostles',
          html:
            'The risen Christ, working through the Spirit in the church, calls out apostles for the spread of the gospel. This is not a structure imposed from above, but a movement born from prayer and fasting. The church&apos;s laying on of hands does not transfer power; it affirms and supports what the Spirit has already initiated.',
        },
        {
          kind: 'carry',
          html:
            'Every believer has a calling. Not all are called to travel and preach to the nations, but all are called to something. The question is: Are you listening for the Spirit&apos;s call? Are you willing to have the comfort of your current station disrupted by an invitation to obedience?',
        },
        {
          kind: 'reflection',
          id: 'acts13-calling',
          prompt: 'What calling do you sense the Spirit placing on your life? Are you willing to leave the familiar to answer it? What would it take for you to say yes?',
        },
      ],
    },

    {
      ref: 'Acts 13:44–52',
      title: 'Opposition and Faith',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(44, 'And the next sabbath day came almost the whole city together to hear the word of God.'),
            plain(45, 'But when the Jews saw the multitudes, they were filled with envy, and spake against those things which were spoken by Paul, contradicting and blaspheming.'),
            plain(46, 'Then Paul and Barnabas waxed bold, and said, It was necessary that the word of God should first have been spoken to you: but seeing ye put it from you, and judge yourselves unworthy of everlasting life, lo, we turn to the Gentiles.'),
            plain(48, 'And when the Gentiles heard this, they were glad, and glorified the word of the Lord: and as many as were ordained to eternal life believed.'),
            plain(52, 'And the disciples were filled with joy, and with the Holy Ghost.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts13-envy',
          html:
            'The success of Paul and Barnabas provokes envy in the Jewish leaders. When opposition comes, it is not always from those who reject the truth out of honest disagreement. Often it comes from those who feel their authority or prestige threatened. The gospel grows, and the guardians of the old order resist.',
        },
        {
          kind: 'greek',
          id: 'acts13-tasso',
          title: 'Tasso — Ordained; Appointed',
          script: 'τάσσω',
          translit: '<strong>Tasso</strong> · to arrange; to appoint; to ordain; to assign',
          description:
            'The word "ordained to eternal life" speaks to God&apos;s ordering of human hearts and destinies. It is not that some are arbitrarily chosen and others arbitrarily rejected, but that God has arranged the cosmos so that those whose hearts are prepared, whose wills are open to receive, come to faith.',
        },
        {
          kind: 'christ',
          id: 'acts13-christ-opens-door',
          title: 'Christ Connection — The Gospel to All Nations',
          html:
            'Paul and Barnabas do not abandon the gospel when the Jewish leaders reject it. Instead, they turn to the Gentiles. This is not defiance, but obedience. Jesus had commanded: Go into all the world and preach the gospel to every creature. If one door closes, another opens.',
        },
        {
          kind: 'carry',
          html:
            'Not every seed falls on good soil. Not every word is received. This does not mean the word is weak or the speaker has failed. Some hearts are closed; others are open. The faithful servant preaches to the closed door, then turns to the open one, trusting God with the results.',
        },
        {
          kind: 'reflection',
          id: 'acts13-rejection',
          prompt: 'Have you experienced rejection when sharing your faith or convictions? How might Paul&apos;s willingness to turn to the Gentiles inform your response to resistance?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Separate me Barnabas and Saul for the work whereunto I have called them. And as many as were ordained to eternal life believed.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 13 · Study Guide',
  },

  hasHebrew: false,
};
