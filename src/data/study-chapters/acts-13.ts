import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Acts 13 — Paul and Barnabas Sent; First Missionary Journey
 */
export const ACTS_13: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 13,

  intros: [
    'In the church at Antioch, the Holy Spirit speaks: "Separate me Barnabas and Saul for the work whereunto I have called them." They are set apart and sent out on the first missionary journey. Paul preaches in synagogues, proclaiming Jesus as the Messiah. Some believe. Some oppose. The pattern will repeat throughout his ministry. But the word spreads, and the Gentiles hear the gospel.',
  ],

  sections: [
    {
      ref: 'Acts 13:1–12',
      title: 'The Call and the Mission',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(2, 'As they ministered to the Lord, and fasted, the Holy Ghost said, Separate me Barnabas and Saul for the work whereunto I have called them.'),
            plain(3, 'And when they had fasted and prayed, and laid their hands on them, they sent them away.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts13-call',
          html: 'The Holy Spirit speaks to the church gathered in worship and prayer. "Separate me Barnabas and Saul." This is not a human decision. This is the Spirit calling out His witnesses. The church lays hands on them and sends them.',
        },
        {
          kind: 'greek',
          id: 'acts13-aphorizao',
          title: 'Aphorizao — To Separate',
          script: 'ἀφορίζω',
          translit: '<strong>Aphorizao</strong> · to separate; to set apart for a purpose',
          description: 'The word means to mark off for a specific task. Barnabas and Saul are set apart—consecrated—for the work of the gospel.',
        },
        {
          kind: 'christ',
          id: 'acts13-christ-call',
          title: 'Christ Connection — The Call to Go',
          html: 'Jesus called His disciples: "Go ye therefore, and teach all nations." That commission continues through the sending of Paul and Barnabas. The work of Christ spreads through called and sent witnesses.',
        },
        {
          kind: 'carry',
          html: 'The church fasts and prays. They lay hands on Paul and Barnabas. This is not a casual send-off. This is a solemn commissioning. Those who remain commit themselves to prayer for those who go.',
        },
        {
          kind: 'reflection',
          id: 'acts13-call-reflect',
          prompt: 'What work has God called you to do?',
        },
      ],
    },

    {
      ref: 'Acts 13:38–52',
      title: 'Paul in Antioch of Pisidia',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(38, 'Be it known unto you therefore, men and brethren, that through this man is preached unto you the forgiveness of sins:'),
            plain(39, 'And by him all that believe are justified from all things, from which ye could not be justified by the law of Moses.'),
            plain(49, 'And the word of the Lord was published throughout all the region.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts13-forgiveness',
          html: 'Paul&apos;s message is clear: through Jesus, forgiveness of sins is proclaimed. And something the law could never do, faith accomplishes: justification. The barrier between sinner and God is broken.',
        },
        {
          kind: 'commentary',
          id: 'acts13-opposition',
          html: 'The Jews oppose Paul and speak against him. But Paul turns to the Gentiles. "It was necessary that the word of God should first have been spoken to you... but seeing ye put it from you... I turn to the Gentiles." The gospel flows to those who receive it.',
        },
        {
          kind: 'greek',
          id: 'acts13-dikaiosynē',
          title: 'Dikaiosynē — Justification; Righteousness',
          script: 'δικαιοσύνη',
          translit: '<strong>Dikaiosynē</strong> · righteousness; justification',
          description: 'The word encompasses both the legal declaration of righteousness before God and the condition of being right with Him. Faith brings both.',
        },
        {
          kind: 'christ',
          id: 'acts13-christ-justification',
          title: 'Christ Connection — Justified by Faith',
          html: 'Jesus fulfilled the law and rose from the dead. His resurrection is the vindication of all who believe in Him. Through Him, we are justified—declared righteous by God.',
        },
        {
          kind: 'carry',
          html: 'The Gentiles rejoice at the word of God. But opposition follows. Not everyone receives the gospel. Some oppose it. Yet the word spreads. The mission continues.',
        },
        {
          kind: 'reflection',
          id: 'acts13-gospel-reflect',
          prompt: 'How do you share the gospel with those around you?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Be it known unto you therefore, men and brethren, that through this man is preached unto you the forgiveness of sins.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 13 · Study Guide',
  },

  hasHebrew: false,
};
