import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Acts 16 — The Macedonian Call; Lydia; the Philippian Jailer
 *
 * Paul sees a vision: a man of Macedonia standing, begging, "Come over into
 * Macedonia, and help us." Paul and Silas travel to Philippi, where they meet
 * Lydia, a seller of purple, who opens her heart and her home. Later, a demon-
 * possessed slave girl, freed by Paul, brings persecution. Paul and Silas are
 * beaten and imprisoned. At midnight, as they sing hymns, an earthquake shakes
 * the prison. The jailer, seeing it, falls in fear at their feet. They preach
 * Christ, and he and his household are baptized.
 */
export const ACTS_16: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 16,

  intros: [
    'At Troas, Paul receives a vision in the night: a man of Macedonia stands and pleads, "Come over into Macedonia, and help us." The vision calls Paul westward, to Europe, to a region that has never heard the gospel from an apostle. Paul and Silas do not hesitate. They cross the sea to Philippi, a Roman colony, to answer the Macedonian call.',
    'In Philippi, the gospel finds soil that will prove fertile. Lydia, a woman of means who fears God, hears Paul preach by a riverside and opens her heart. Later, Paul casts out a demon from a slave girl, and her masters, enraged at losing their profit, have Paul and Silas beaten and thrown into the inner prison. Yet from that dungeon, songs rise. And the songs become the occasion for a miracle that changes an entire household.',
  ],

  sections: [
    {
      ref: 'Acts 16:1–15',
      title: 'The Macedonian Vision and Lydia',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(9, 'And a vision appeared to Paul in the night; There stood a man of Macedonia, and prayed him, saying, Come over into Macedonia, and help us.'),
            plain(10, 'And after he had seen the vision, immediately we endeavoured to go into Macedonia, assuredly gathering that the Lord had called us for to preach the gospel unto them.'),
            plain(13, 'And on the sabbath we went out of the city by a river side, where prayer was wont to be made; and we sat down, and spake unto the women which resorted thither.'),
            plain(14, 'And a certain woman named Lydia, a seller of purple, of the city of Thyatira, which worshipped God, heard us: whose heart the Lord opened, that she attended unto the things which were spoken of Paul.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts16-vision',
          html:
            'The vision is direct and personal. A man, presumably a Macedonian, stands before Paul pleading for help. Paul recognizes this as God&apos;s calling. The vision redirects the entire trajectory of the gospel, moving it from Asia Minor westward toward Europe. What seems like a simple request becomes the occasion for the gospel to reach the Western world.',
        },
        {
          kind: 'greek',
          id: 'acts16-dianoigo',
          title: 'Dianoigo — Open',
          script: 'διανοίγω',
          translit: '<strong>Dianoigo</strong> · to open; to open wide; to make receptive',
          description:
            'Lydia&apos;s heart is "opened" by the Lord. This is not coercion, but preparation. Her openness to God&apos;s word is itself the work of the Spirit. She has been praying, waiting, seeking. When the word comes, her heart—already positioned toward God—opens to receive it.',
        },
        {
          kind: 'christ',
          id: 'acts16-christ-guide',
          title: 'Christ Connection — The Spirit Guides into All Truth',
          html:
            'Paul&apos;s willingness to be interrupted by the vision, to abandon his original plans and follow the Macedonian call, shows a trust in Christ&apos;s active guidance. The risen Christ is not distant. He is present, directing His apostles into the work He has prepared for them.',
        },
        {
          kind: 'carry',
          html:
            'Do you have a plan for your life? The Spirit may interrupt it. An unexpected call, a surprising opportunity, a vision that draws you in a new direction. Openness to that interruption is openness to Christ&apos;s active presence. What is the Macedonian call appearing to you?',
        },
        {
          kind: 'reflection',
          id: 'acts16-direction',
          prompt: 'What Macedonian calls are appearing to you—unexpected invitations that might be God&apos;s redirection? Are you willing to abandon your plans to follow where the Spirit leads?',
        },
      ],
    },

    {
      ref: 'Acts 16:22–34',
      title: 'The Earthquake and the Jailer',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(25, 'And at midnight Paul and Silas prayed, and sang praises unto God: and the prisoners heard them.'),
            plain(26, 'And suddenly there was a great earthquake, so that the foundations of the prison were shaken: and immediately all the doors were opened, and every one&apos;s bands were loosed.'),
            plain(27, 'And the keeper of the prison awaking out of his sleep, and seeing the prison doors open, he drew out his sword, and would have killed himself, supposing that the prisoners had been fled.'),
            plain(30, 'And brought them out, and said, Sirs, what must I do to be saved?'),
            plain(33, 'And he took them the same hour of the night, and washed their stripes; and was baptized, he and all his, straightway.'),
            plain(34, 'And when he had brought them into his house, he set meat before them, and rejoiced, believing in God with all his household.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts16-midnight-song',
          html:
            'Paul and Silas are beaten, imprisoned in the inner prison, feet fastened in stocks. And at midnight, they pray and sing. Not prayers of complaint, but songs of praise. The other prisoners hear them. In the darkness, songs rise. This is faithfulness not as mere endurance, but as testimony—the testimony that God is worthy of praise even in the worst circumstances.',
        },
        {
          kind: 'greek',
          id: 'acts16-saleuo',
          title: 'Saleuo — Shake; Shaken',
          script: 'σαλεύω',
          translit: '<strong>Saleuo</strong> · to shake; to shake violently; to convulse',
          description:
            'The earthquake shakes the very foundations of the prison. But it is more than a natural disaster. It is the rumbling of God&apos;s kingdom breaking into a place of human imprisonment. The foundations that held prisoners are shaken and crumble.',
        },
        {
          kind: 'christ',
          id: 'acts16-christ-liberator',
          title: 'Christ Connection — The Liberator of Captives',
          html:
            'The jailer asks the question that all must ask: "What must I do to be saved?" Not just saved from execution or judgment, but saved from the spiritual death his life has embodied. Paul&apos;s answer is simple: believe on the Lord Jesus Christ. The jailer and his household are baptized that very night. Deliverance comes through faith.',
        },
        {
          kind: 'carry',
          html:
            'We all have prisons—circumstances, habits, fears that hold us captive. We can pray from our chains in despair, or we can sing. We can assume the worst, or we can trust. The jailer could have died in his fear, but instead he encountered the Christ who Paul and Silas served. In their faithfulness, he found his way to freedom.',
        },
        {
          kind: 'reflection',
          id: 'acts16-captivity',
          prompt: 'What prison are you in? How might faithfulness in the darkness, praise in the difficulty, become your testimony to Christ&apos;s power?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Come over into Macedonia, and help us. And at midnight Paul and Silas prayed, and sang praises unto God. Sirs, what must I do to be saved?',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 16 · Study Guide',
  },

  hasHebrew: false,
};
