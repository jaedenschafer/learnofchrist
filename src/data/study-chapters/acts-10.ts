import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Acts 10 — Cornelius and the Gentile Pentecost
 */
export const ACTS_10: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 10,

  intros: [
    'Peter receives a vision of a great sheet descending from heaven, filled with unclean animals. "Rise, Peter; kill and eat." But Peter resists. "Not so, Lord." Meanwhile, a Roman centurion named Cornelius also receives a vision: send for Peter. When they meet, the Spirit falls on the Gentiles as it fell on the Jews. The boundary has been broken. The gospel is truly for all people.',
  ],

  sections: [
    {
      ref: 'Acts 10:1–33',
      title: 'The Vision and the Call',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(13, 'And there came a voice to him, Rise, Peter; kill, and eat.'),
            plain(14, 'But Peter said, Not so, Lord; for I have never eaten any thing that is common or unclean.'),
            plain(28, 'And he said unto them, Ye know how that it is an unlawful thing for a man that is a Jew to keep company, or come unto one of another nation; but God hath shewed me that I should not call any man common or unclean.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts10-sheet',
          html: 'The sheet descending from heaven is laden with animals the Jewish law declares unclean. Peter is being asked to violate the law he has kept his entire life. His resistance is not sin. It is faithfulness to what he has been taught.',
        },
        {
          kind: 'greek',
          id: 'acts10-koinos',
          title: 'Koinos — Common',
          script: 'κοινός',
          translit: '<strong>Koinos</strong> · common; shared; unclean',
          description: 'In religious contexts, koinos carries the weight of ritual uncleanness. Peter is being asked to overturn the categories that have organized his entire religious life.',
        },
        {
          kind: 'commentary',
          id: 'acts10-cornelius',
          html: 'Cornelius is a Roman centurion—an outsider, a foreigner. Yet he is described as devout, one who fears God, gives alms, and prays. The vision that comes to him is not a rebuke but an affirmation. God sees his heart. Peter is being sent to him.',
        },
        {
          kind: 'christ',
          id: 'acts10-christ-boundaries',
          title: 'Christ Connection — Breaking Every Boundary',
          html: 'Jesus broke down the wall between Jew and Gentile in His earthly ministry. Now, through the vision and the Spirit, Peter understands that the resurrection of Jesus has made all things new. No one is unclean. No barrier is final.',
        },
        {
          kind: 'carry',
          html: 'Peter&apos;s journey to Cornelius&apos; house is an act of faith. He is called to step beyond everything that has formed him. But the God who forms us calls us to grow beyond our categories.',
        },
        {
          kind: 'reflection',
          id: 'acts10-boundaries-reflect',
          prompt: 'What boundaries do you maintain? How might the Spirit be calling you to cross them?',
        },
      ],
    },

    {
      ref: 'Acts 10:34–48',
      title: 'The Gentile Pentecost',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(34, 'Then Peter opened his mouth, and said, Of a truth I perceive that God is no respecter of persons:'),
            plain(44, 'While Peter yet spake these words, the Holy Ghost fell on all them which heard the word.'),
            plain(45, 'And they of the circumcision which believed were astonished, as many as came with Peter, because that on the Gentiles also was poured out the gift of the Holy Ghost.'),
            plain(47, 'Can any man forbid water, that these should not be baptized, which have received the Holy Ghost as well as we?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts10-no-respecter',
          html: 'Peter&apos;s statement is revolutionary: "God is no respecter of persons." The law of Moses, which separated clean from unclean, Jew from Gentile, is not erased—but it is fulfilled. Its purpose was to point toward the day when all barriers would be broken in Christ.',
        },
        {
          kind: 'commentary',
          id: 'acts10-spirit-gentiles',
          html: 'While Peter is still speaking, the Holy Spirit falls on the Gentiles just as it fell on the Jews at Pentecost. They speak in tongues and magnify God. The evidence is undeniable. The boundary is not merely cultural. It is spiritual.',
        },
        {
          kind: 'greek',
          id: 'acts10-prosopolempteia',
          title: 'Prosopolempteia — Partiality',
          script: 'προσωπολημψία',
          translit: '<strong>Prosopolempteia</strong> · partiality; favoritism',
          description: 'The verb means to accept one based on appearance or external status. God does not judge by these things. He sees the heart, the faith, the sincere desire to follow.',
        },
        {
          kind: 'christ',
          id: 'acts10-christ-universality',
          title: 'Christ Connection — Lord of All',
          html: 'Jesus is not merely the Messiah for Israel. He is Lord of all—Jew and Gentile alike. The gospel that Peter preaches is peace, reconciliation, the restoration of all things. No one is excluded.',
        },
        {
          kind: 'carry',
          html: 'Peter baptizes the Gentiles. No hesitation now. The vision and the Spirit have made clear what God intends. The movement toward Rome is beginning.',
        },
        {
          kind: 'reflection',
          id: 'acts10-gentile-reflect',
          prompt: 'What does it mean that there are no outsiders in God&apos;s kingdom?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Of a truth I perceive that God is no respecter of persons.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 10 · Study Guide',
  },

  hasHebrew: false,
};
