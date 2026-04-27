import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Acts 14 — Iconium, Lystra, Derbe
 */
export const ACTS_14: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 14,

  intros: [
    'Paul and Barnabas move through Iconium, Lystra, and Derbe, proclaiming the gospel and performing miracles. In Lystra, they heal a man who has been lame from birth. The crowds are amazed and want to worship them as gods. Paul and Barnabas tear their clothes and cry out: "Sirs, why do ye these things? We also are men of like passions with you." Yet in the same city, Jews come and stone Paul. The apostle lies as dead, but he rises and continues his work.',
  ],

  sections: [
    {
      ref: 'Acts 14:1–20',
      title: 'Signs and Opposition',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(8, 'And there sat a certain man at Lystra, impotent in his feet, being a cripple from his mother&apos;s womb, who never had walked:'),
            plain(10, 'Said with a loud voice, Stand upright on thy feet. And he leaped and walked.'),
            plain(14, 'Which when the apostles, Barnabas and Paul, heard of, they rent their clothes, and ran in among the people, crying out,'),
            plain(15, 'Sirs, why do ye these things? We also are men of like passions with you, and preach unto you that ye should turn from these vanities unto the living God,'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts14-healing',
          html: 'A man sits at Lystra, lame from birth. Paul commands him to stand. The man leaps and walks. The crowds see this miracle and want to worship Paul and Barnabas as gods—a vivid reminder of how easily humans worship the visible.',
        },
        {
          kind: 'commentary',
          id: 'acts14-rejection',
          html: 'Yet opposition comes swiftly. Jews from Antioch and Iconium incite the crowd. They stone Paul, drag him outside the city, and leave him for dead. But he rises and returns to the city. The work continues.',
        },
        {
          kind: 'greek',
          id: 'acts14-anapeiro',
          title: 'Anapeiro — To Cripple',
          script: 'ἀναπείρω',
          translit: '<strong>Anapeiro</strong> · to cripple; to maim from birth',
          description: 'The man&apos;s condition was lifelong—from his mother&apos;s womb. The healing is not merely recovery but complete restoration.',
        },
        {
          kind: 'christ',
          id: 'acts14-christ-power',
          title: 'Christ Connection — Power and Humility',
          html: 'Jesus performed great miracles but refused to be made king. Similarly, Paul and Barnabas work miracles but immediately redirect worship to God. True apostolic power is always accompanied by humility.',
        },
        {
          kind: 'carry',
          html: 'Paul is stoned and left for dead, yet he rises and continues. His resilience is not human strength but the strength of the Spirit working in him. He will not be stopped.',
        },
        {
          kind: 'reflection',
          id: 'acts14-persecution-reflect',
          prompt: 'How can faith sustain us through opposition and hardship?',
        },
      ],
    },

    {
      ref: 'Acts 14:21–28',
      title: 'Return and Report',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(23, 'And when they had ordained them elders in every church, and had prayed with fasting, they commended them to the Lord, on whom they believed.'),
            plain(27, 'And when they were come, and had gathered the church together, they rehearsed all that God had done with them, and how he had opened the door of faith unto the Gentiles.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts14-elders',
          html: 'Paul and Barnabas return through the cities they visited, strengthening the disciples. They ordain elders in every church and commit them to the Lord through prayer and fasting. The churches are not left orphaned.',
        },
        {
          kind: 'commentary',
          id: 'acts14-report',
          html: 'Back in Antioch, Paul and Barnabas gather the church and rehearse all that God had done. They emphasize one thing: God had opened the door of faith to the Gentiles. The mission has succeeded.',
        },
        {
          kind: 'greek',
          id: 'acts14-thyra',
          title: 'Thyra — Door',
          script: 'θύρα',
          translit: '<strong>Thyra</strong> · door; opening; opportunity',
          description: 'The metaphor of the door represents both literal access to new places and the opening of hearts to receive the gospel.',
        },
        {
          kind: 'christ',
          id: 'acts14-christ-gospel',
          title: 'Christ Connection — The Gospel Opens All Doors',
          html: 'Jesus said, "I am the door." Through Him, all barriers fall. The gospel, carried by His apostles, opens the door of faith to all people.',
        },
        {
          kind: 'carry',
          html: 'The first missionary journey is complete. Churches are established. Elders are ordained. The foundation is laid for the continuing work. The mission of Jesus spreads.',
        },
        {
          kind: 'reflection',
          id: 'acts14-mission-reflect',
          prompt: 'What part does God want you to play in His work?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'And how he had opened the door of faith unto the Gentiles.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 14 · Study Guide',
  },

  hasHebrew: false,
};
