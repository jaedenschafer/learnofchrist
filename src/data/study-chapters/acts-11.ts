import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Acts 11 — Peter Explains; Antioch Called Christian
 */
export const ACTS_11: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 11,

  intros: [
    'The Jerusalem apostles hear that Peter has visited Gentiles and eaten with them. They question him. Peter recounts the vision and the pouring out of the Spirit on the Gentiles. The apostles are amazed. "Then hath God also to the Gentiles granted repentance unto life." In Antioch, the gospel spreads among Greeks as well as Jews. There they are called Christians for the first time—a name that will mark them forever.',
  ],

  sections: [
    {
      ref: 'Acts 11:1–18',
      title: 'Peter&apos;s Explanation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(15, 'And as I began to speak, the Holy Ghost fell on them, as on us at the beginning.'),
            plain(17, 'Forasmuch then as God gave them the like gift as he did unto us, who believed on the Lord Jesus Christ; what was I, that I could withstand God?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts11-explanation',
          html: 'Peter&apos;s defense is simple: what happened at Cornelius&apos; house was no different from what happened at Pentecost. The Spirit fell. The evidence is irrefutable. To oppose it would be to oppose God Himself.',
        },
        {
          kind: 'greek',
          id: 'acts11-dunamis',
          title: 'Dunamis — The Same Gift',
          script: 'δύναμις',
          translit: '<strong>Dunamis</strong> · power; the gift of the Spirit',
          description: 'The word emphasizes that the Spirit&apos;s power at Pentecost and at Cornelius&apos; house is the same. There is no hierarchy, no separation. The gift is universal.',
        },
        {
          kind: 'christ',
          id: 'acts11-christ-preach',
          title: 'Christ Connection — One Gospel for All',
          html: 'Jesus commissioned His apostles to preach repentance and remission of sins to all nations. Acts 11 shows that commission being fulfilled. The Spirit confirms it. All barriers fall.',
        },
        {
          kind: 'carry',
          html: 'The Jerusalem church accepts the Gentile conversion. They glorify God: "Then hath God also to the Gentiles granted repentance unto life." The unity of the church is preserved—but it is a unity that includes all peoples.',
        },
        {
          kind: 'reflection',
          id: 'acts11-unity-reflect',
          prompt: 'How does the Spirit work to bridge divisions among people?',
        },
      ],
    },

    {
      ref: 'Acts 11:19–30',
      title: 'Antioch and the Name Christian',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(21, 'And the hand of the Lord was with them: and a great number believed, and turned unto the Lord.'),
            plain(26, 'And the disciples were called Christians first in Antioch.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts11-antioch',
          html: 'In Antioch, the gospel spreads among Greeks as well as Jews. The movement is no longer confined to Jerusalem. It is becoming a worldwide religion. The hand of the Lord is with them.',
        },
        {
          kind: 'commentary',
          id: 'acts11-christian',
          html: 'They are called "Christians" for the first time. The name likely came from outsiders—those who observed that these followers were identified completely with Christ. The name would stick. It would define them for all time.',
        },
        {
          kind: 'greek',
          id: 'acts11-christianos',
          title: 'Christianos — Christian',
          script: 'Χριστιανός',
          translit: '<strong>Christianos</strong> · Christian; one who follows Christ',
          description: 'The name means follower of Christ, one who belongs to Christ. It is the permanent name for all believers from that moment onward.',
        },
        {
          kind: 'christ',
          id: 'acts11-christ-name',
          title: 'Christ Connection — Known by His Name',
          html: 'The disciples are known by their allegiance to Christ. They bear His name. In bearing it, they bear witness to His resurrection and His ongoing work in the world.',
        },
        {
          kind: 'carry',
          html: 'Antioch becomes a center of the faith. Prophets from Jerusalem come to Antioch. Agabus prophesies a famine. The church in Antioch sends relief to Judea. The unity of the body of Christ transcends geography.',
        },
        {
          kind: 'reflection',
          id: 'acts11-name-reflect',
          prompt: 'What does it mean to be called a Christian? How does that name shape your identity?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'And the disciples were called Christians first in Antioch.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 11 · Study Guide',
  },

  hasHebrew: false,
};
