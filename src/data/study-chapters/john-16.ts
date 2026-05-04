import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * John 16 — The Comforter and Victory
 *
 * Jesus continues His farewell discourse. "It is expedient for you that I go away:
 * for if I go not away, the Comforter will not come unto you; but if I depart, I
 * will send him unto you." The Spirit will reprove the world of sin, of righteousness,
 * and of judgment. Yet Jesus assures: "Be of good cheer; I have overcome the world."
 * The disciples&apos; sorrow will be turned to joy. "Your joy no man taketh from you."
 * In His name, they will ask and receive. His peace He leaves with them.
 */
export const JOHN_16: RichChapterContent = {
  bookSlug: 'john',
  bookName: 'John',
  chapter: 16,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 7 },
  topicTags: ['incarnation', 'love', 'glory', 'witness'],
  opener: {
    topical: true,
    caption: 'John 16',
  },
  intros: [
    'Jesus speaks of His departure and the coming of the Spirit. "It is expedient for you that I go away." His physical absence will enable a greater presence—the Spirit indwelling in every believer, everywhere, always. The Comforter will reprove the world, will bring conviction, will reveal truth. Yet for the disciples, this transition brings sorrow. They do not understand why He must leave. They cannot yet grasp the reality of resurrection and the pouring out of the Spirit.',
    '"Your sorrow shall be turned into joy." Jesus promises that the disciples&apos; grief will give way to rejoicing. When they see Him risen, when they receive the Spirit, when they understand His purpose, their mourning will yield to celebration. And that joy, once given, "no man taketh from you." The world can take much. It can take freedom, possession, even life. But it cannot take the deep joy of knowing that Christ has overcome the world.',
  ],

  sections: [
    /* ─── John 16:1–15 — The Coming of the Comforter ───────────────────── */
    {
      ref: 'John 16:1–15',
      title: 'It Is Expedient for You That I Go Away',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(7, 'Nevertheless I tell you the truth; It is expedient for you that I go away: for if I go not away, the Comforter will not come unto you; but if I depart, I will send him unto you.'),
            plain(8, 'And when he is come, he will reprove the world of sin, and of righteousness, and of judgment:'),
            plain(13, 'Howbeit when he, the Spirit of truth, is come, he will guide you into all truth: for he shall not speak of himself; but whatsoever he shall hear, that shall he speak; and he will shew you things to come.'),
            plain(14, 'He shall glorify me: for he shall receive of mine, and shall shew it unto you.'),
            plain(15, 'All things that the Father hath are mine: therefore said I, The Spirit shall take of mine, and shall shew it unto you.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john16-expedient',
          html:
            '"It is expedient for you that I go away." This seems paradoxical. The disciples love Jesus. They fear His departure. Yet He asserts it is better for them that He leave. Why? Because His physical limitation—His presence in one place at one time—must give way to the Spirit&apos;s unlimited presence, available everywhere to every believer.',
        },
        {
          kind: 'commentary',
          id: 'john16-comforter-coming',
          html:
            '"If I depart, I will send him unto you." The Comforter will come not in place of Jesus, but as His representative, carrying His presence, His teaching, His power into the world. The Comforter will not diminish Christ&apos;s presence. The Comforter extends it.',
        },
        {
          kind: 'greek',
          id: 'john16-elegcho',
          title: 'Elegcho — Reprove / Convict',
          script: 'ἐλέγχω',
          translit: '<strong>Elegcho</strong> · to reprove; to convict; to convince; to expose',
          description:
            'The Spirit will convict the world—will expose its sin, will make clear the righteousness of Christ, will reveal the judgment that stands against evil[res:perseus-parakletos-2]. This conviction is not mere condemnation. It is a call to truth, an opportunity to repent, to turn from darkness to light.',
        },
        {
          kind: 'commentary',
          id: 'john16-guide',
          html:
            '"He will guide you into all truth."[res:bible-odyssey-spirit-witness] The Spirit is not only a comforter in sorrow. He is a guide into understanding. He will lead the disciples into deeper comprehension of Christ&apos;s teaching, of God&apos;s plan, of spiritual reality. The revelation does not cease at Pentecost. It continues as the Spirit guides the church into truth.',
        },
        {
          kind: 'commentary',
          id: 'john16-glorify',
          html:
            '"He shall glorify me: for he shall receive of mine, and shall shew it unto you." The Spirit&apos;s role is not to draw attention to Himself, but to Christ. Whatever the Spirit reveals, He reveals of Christ. The Spirit is the ongoing presence of Christ, making His glory known, His truth plain, His victory evident.',
        },
        {
          kind: 'christ',
          id: 'john16-christ-spirit',
          title: 'Christ Connection — Presence Extended Through the Spirit',
          html:
            'Jesus does not abandon His disciples when He returns to the Father. Instead, He sends the Spirit, through whom His presence becomes more fully available—not to a small group in one place, but to all believers everywhere. The resurrection and the gift of the Spirit represent the intensification, not the diminishment, of Christ&apos;s presence.',
        },
        {
          kind: 'carry',
          html:
            'The Spirit is your guide, your teacher, your comforter. He draws you closer to Christ, not away from Him. As you open yourself to the Spirit&apos;s teaching, Christ is revealed more fully. You are never left without guidance or presence. The Comforter dwells within.',
        },
        {
          kind: 'reflection',
          id: 'john16-truth',
          prompt: 'Where is the Spirit guiding you into deeper truth? How is the Spirit glorifying Christ in your life?',
        },
      ],
    },

    /* ─── John 16:16–33 — From Sorrow to Joy ──────────────────────────── */
    {
      ref: 'John 16:16–33',
      title: 'Your Sorrow Shall Be Turned Into Joy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(16, 'A little while, and ye shall not see me: and again, a little while, and ye shall see me, because I go to the Father.'),
            plain(20, 'Verily, verily, I say unto you, That ye shall weep and lament, but the world shall rejoice: and ye shall be sorrowful, but your sorrow shall be turned into joy.'),
            plain(22, 'And ye now therefore have sorrow: but I will see you again, and your heart shall rejoice, and your joy no man taketh from you.'),
            plain(24, 'Hitherto have ye asked nothing in my name: ask, and ye shall receive, that your joy may be full.'),
            plain(27, 'For the Father himself loveth you, because ye have loved me, and have believed that I came out from God.'),
            plain(33, 'These things I have spoken unto you, that in me ye might have peace. In the world ye shall have tribulation: but be of good cheer; I have overcome the world.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john16-little-while',
          html:
            '"A little while, and ye shall not see me: and again, a little while, and ye shall see me." Jesus speaks of His death as a brief absence, followed by resurrection and ongoing presence through the Spirit. The disciples cannot yet understand. Their grief is real and immediate. Yet He assures them: the separation is temporary. Reunion is coming.',
        },
        {
          kind: 'commentary',
          id: 'john16-weep',
          html:
            '"Ye shall weep and lament, but the world shall rejoice: and ye shall be sorrowful, but your sorrow shall be turned into joy." The world will celebrate His death, mistaking it for defeat. But the disciples&apos; sorrow will be transformed. What looks like ending will prove to be beginning. What appears as loss will yield to gain.',
        },
        {
          kind: 'greek',
          id: 'john16-chara',
          title: 'Chara — Joy',
          script: 'χαρά',
          translit: '<strong>Chara</strong> · joy; gladness; rejoicing; delight',
          description:
            'Joy is not mere happiness, which fluctuates with circumstances. It is the deep delight of knowing you are loved, redeemed, connected to Christ. The world can take your circumstances, your possessions, even your life. But it cannot take the joy of knowing Christ has overcome.',
        },
        {
          kind: 'commentary',
          id: 'john16-heart-rejoice',
          html:
            '"I will see you again, and your heart shall rejoice, and your joy no man taketh from you." The risen Christ will appear to His disciples. They will see Him. And the joy of that encounter will be permanent. Nothing—no loss, no persecution, no sorrow—can take it away. It is grounded in something eternal.',
        },
        {
          kind: 'commentary',
          id: 'john16-ask-name',
          html:
            '"Hitherto have ye asked nothing in my name: ask, and ye shall receive, that your joy may be full." Prayer in Jesus&apos; name is not a formula but a reality. To ask in His name is to align your request with His character, His will, His kingdom. When you do, you receive—not always material goods, but what you most deeply need. And in receiving, your joy is made full.',
        },
        {
          kind: 'commentary',
          id: 'john16-overcome',
          html:
            '"Be of good cheer; I have overcome the world."[res:intertextual-victory] The final assurance. Jesus does not promise a life free from tribulation. He promises that He has overcome. The powers that oppose you—sin, death, fear, the world system—have been conquered. Their ultimate authority has been broken. You live in the victory of the risen Christ.',
        },
        {
          kind: 'christ',
          id: 'john16-christ-victory',
          title: 'Christ Connection — Victor Over the World',
          html:
            'Jesus does not merely teach about victory. He is the one who conquered. He entered death and rose from it. His resurrection is the proof of His power over all opposition. In Him, all who believe share in that victory. You can face the world&apos;s hatred and tribulation because Christ has already won.',
        },
        {
          kind: 'carry',
          html:
            'Your sorrow is real. Your losses are genuine. But they are not final. Christ has overcome. The joy that comes from knowing Him, from experiencing His victory, is permanent. Nothing the world does can diminish it. Ask in His name. Receive from His abundance. Let your joy be complete.',
        },
        {
          kind: 'reflection',
          id: 'john16-sorrow-joy',
          prompt: 'What sorrow are you bearing that Christ calls you to offer to Him? What does it mean that He has overcome the world, and how does that change your perspective?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'It is expedient for you that I go away. Your sorrow shall be turned into joy. Your joy no man taketh from you. I have overcome the world. Be of good cheer.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'John 16 · Study Guide',
  },

  resources: [
    {
      id: 'perseus-parakletos-2',
      kind: 'lexicon',
      source: 'Perseus Digital Library',
      label: 'Parakletos Revisited — Advocate and Comforter',
      url: 'https://www.perseus.tufts.edu/',
      description: 'Extended analysis of the Greek parakletos as Jesus describes the Holy Spirit&apos;s role after His departure.',
    },
    {
      id: 'bible-odyssey-spirit-witness',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Holy Spirit as Witness and Teacher',
      url: 'https://www.bibleodyssey.org/dictionary/holy-spirit/',
      description: 'SBL resource on the Spirit&apos;s functions in the Johannine theology of the farewell discourse.',
    },
    {
      id: 'intertextual-victory',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Psalm 27:1 ↔ John 16:33',
      url: 'https://intertextual.bible/search?q=Psalm+27+1+John+16+33',
      description: 'Jesus&apos; victory echoing the psalmist&apos;s trust in God&apos;s power over all opposition.',
    },
  ],

  hasHebrew: false,
};
