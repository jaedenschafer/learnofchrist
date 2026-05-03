import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * John 15 — The True Vine
 *
 * "I am the true vine, and my Father is the husbandman." Jesus teaches that those
 * who abide in Him, as branches in a vine, will bear much fruit. "Without me ye can
 * do nothing." To abide in Christ is to keep His commandments, to love one another.
 * "Greater love hath no man than this, that a man lay down his life for his friends."
 * Jesus calls His disciples not servants, but friends. The world will hate them, as
 * it hates Him. Yet He sends them to bear fruit that will endure.
 */
export const JOHN_15: RichChapterContent = {
  bookSlug: 'john',
  bookName: 'John',
  chapter: 15,

  estimatedMinutes: { 5: 2, 10: 5, 15: 6 },
  intros: [
    'Jesus speaks of Himself as the true vine. The Father is the husbandman, the vinedresser. Those who believe in Jesus are branches attached to Him. The vitality of the branch depends entirely on its connection to the vine. "Without me ye can do nothing." This is not pessimism but realism. Apart from Christ, spiritual fruit is impossible. Connection to Him is the source of all fruitfulness.',
    'To abide in Christ is to remain in His love, to keep His commandments, to love one another. Jesus reveals the deepest pattern of discipleship: "Greater love hath no man than this, that a man lay down his life for his friends." He calls His disciples friends, not servants. He shares with them all that He knows from the Father. And He lays down His life for them. The world will hate them because it hates Him. But they are not alone. The Spirit will be with them, empowering, comforting, strengthening.',
  ],

  sections: [
    /* ─── John 15:1–17 — Abiding in the Vine ──────────────────────────── */
    {
      ref: 'John 15:1–17',
      title: 'I Am the True Vine',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(1, 'I am the true vine, and my Father is the husbandman.'),
            plain(4, 'Abide in me, and I in you. As the branch cannot bear fruit of itself, except it abide in the vine; no more can ye, except ye abide in me.'),
            plain(5, 'I am the vine, ye are the branches: He that abideth in me, and I in him, the same bringeth forth much fruit: for without me ye can do nothing.'),
            plain(7, 'If ye abide in me, and my words abide in you, ye shall ask what ye will, and it shall be done unto you.'),
            plain(12, 'This is my commandment, That ye love one another, as I have loved you.'),
            plain(14, 'Ye are my friends, if ye do whatsoever I command you.'),
            plain(15, 'Henceforth I call you not servants; for the servant knoweth not what his lord doeth: but I have called you friends; for all things that I have heard of my Father I have made known unto you.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john15-vine',
          html:
            '"I am the true vine." In Israel&apos;s history, the nation itself is sometimes called a vine—planted by God, yet producing wild grapes, corruption, failure. Jesus claims to be the true vine—the genuine article, the one who succeeds where Israel failed, the source of all genuine fruitfulness. The Father is the vinedresser, pruning, tending, cultivating.',
        },
        {
          kind: 'commentary',
          id: 'john15-abide',
          html:
            '"Abide in me, and I in you." Abiding is not a one-time act but a continuous state. It is remaining, dwelling, making your home in Christ. And as you abide in Him, He abides in you. The indwelling is mutual. His presence fills you. You are filled with His life.',
        },
        {
          kind: 'greek',
          id: 'john15-meno',
          title: 'Meno — Abide / Remain',
          script: 'μένω',
          translit: '<strong>Meno</strong> · to abide; to remain; to dwell; to stay',
          description:
            'Meno suggests permanence, stability, a dwelling place. To abide in Christ is not a passing experience. It is the condition of the believer&apos;s life—remaining in Him, drawing strength from Him continuously, moment by moment.',
        },
        {
          kind: 'commentary',
          id: 'john15-fruit',
          html:
            '"He that abideth in me, and I in him, the same bringeth forth much fruit." The fruit is not produced by effort or striving. It flows naturally from the connection. A branch that remains attached to a healthy vine produces fruit as a matter of course. Love, joy, peace, patience, kindness—the fruits of the Spirit—flow from abiding in Christ.',
        },
        {
          kind: 'commentary',
          id: 'john15-nothing',
          html:
            '"Without me ye can do nothing." This is not limitation but liberation. If you try to accomplish spiritual good in your own power, you will fail. But in Christ, all things are possible. The nothing is not emptiness. It is the necessary surrender that opens you to His everything.',
        },
        {
          kind: 'commentary',
          id: 'john15-friends',
          html:
            '"Ye are my friends, if ye do whatsoever I command you. Henceforth I call you not servants; for the servant knoweth not what his lord doeth: but I have called you friends." Jesus elevates His disciples. They are not mere servants blindly obedient to commands. They are friends who know His heart, to whom He reveals His mind. Obedience becomes the expression of friendship, not of slavery.',
        },
        {
          kind: 'christ',
          id: 'john15-christ-vine',
          title: 'Christ Connection — Source of All Life',
          html:
            'Jesus is the vine from which all spiritual life flows. To be severed from Him is to wither and die. To abide in Him is to be nourished, strengthened, made fruitful. He is not a teacher imparting information. He is the source of life itself, sustaining all who remain in connection with Him.',
        },
        {
          kind: 'carry',
          html:
            'Your productivity does not come from your striving. It comes from your connection. The question is not "How can I work harder?" but "Am I abiding in Christ? Is His life flowing through me?" Rest in the vine. Draw strength from the source. Fruit will follow.',
        },
        {
          kind: 'reflection',
          id: 'john15-branch',
          prompt: 'Are you abiding in Christ? What spiritual fruit is He calling you to bear? What would it mean to remain more fully connected to Him?',
        },
      ],
    },

    /* ─── John 15:18–27 — The Hatred of the World ──────────────────────── */
    {
      ref: 'John 15:18–27',
      title: 'The World Hates You',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(18, 'If the world hate you, ye know that it hated me before it hated you.'),
            plain(19, 'If ye were of the world, the world would love his own: but because ye are not of the world, but I have chosen you out of the world, therefore the world hateth you.'),
            plain(20, 'Remember the word that I said unto you, The servant is not greater than his lord. If they have persecuted me, they will also persecute you; if they have kept my saying, they will keep yours also.'),
            plain(26, 'But when the Comforter is come, whom I will send unto you from the Father, even the Spirit of truth, which proceedeth from the Father, he shall testify of me:'),
            plain(27, 'And ye also shall bear witness, because ye have been with me from the beginning.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john15-hate',
          html:
            '"If the world hate you, ye know that it hated me before it hated you." Jesus does not promise comfort in worldly terms. He promises that those who follow Him will be hated, as He is hated. Not all will hate you, but the world system—the power structures that oppose God—will oppose those who follow Christ.',
        },
        {
          kind: 'commentary',
          id: 'john15-chosen',
          html:
            '"Because ye are not of the world, but I have chosen you out of the world, therefore the world hateth you." Believers are not of the world&apos;s order. They belong to another kingdom. Their allegiance, their values, their hope are rooted elsewhere. The world recognizes the contradiction and rejects those who embody it.',
        },
        {
          kind: 'greek',
          id: 'john15-kosmos',
          title: 'Kosmos — World',
          script: 'κόσμος',
          translit: '<strong>Kosmos</strong> · world; the ordered system; the domain opposed to God; the world\'s inhabitants',
          description:
            'The kosmos is not the physical creation but the world system—the powers, values, and structures that oppose God. When Jesus says the world hates His followers, He means the organized opposition to God&apos;s kingdom will resist those who have been chosen out of that system.',
        },
        {
          kind: 'commentary',
          id: 'john15-servant',
          html:
            '"The servant is not greater than his lord. If they have persecuted me, they will also persecute you." Jesus does not shield His disciples from suffering. He warns them that following Him may mean persecution. Yet He gives them the pattern—He Himself endured. They can endure likewise. And in endurance, they witness to His faithfulness.',
        },
        {
          kind: 'commentary',
          id: 'john15-comforter-witness',
          html:
            '"The Comforter... shall testify of me: and ye also shall bear witness." The disciples are not left alone to face opposition. The Spirit of truth bears witness alongside them. Their witness is joined to the Spirit&apos;s witness. They testify because they have been with Jesus. They speak from lived experience, from relationship, from encounter.',
        },
        {
          kind: 'christ',
          id: 'john15-christ-rejected',
          title: 'Christ Connection — Costly Discipleship',
          html:
            'To follow Christ is not a path of ease. The world resists what Christ represents. But neither is it a path of isolation. The Spirit testifies. Others witness. A community of followers stands together, empowered by the presence of the risen Christ.',
        },
        {
          kind: 'carry',
          html:
            'If you face opposition for following Christ, it is not a sign of failure but of fidelity. Jesus told you this would happen. "Remember the word that I said unto you." You are not surprised or betrayed. You are equipped and called. The Spirit stands with you.',
        },
        {
          kind: 'reflection',
          id: 'john15-witness',
          prompt: 'Where are you called to bear witness despite opposition? How can the Spirit&apos;s presence strengthen your own testimony?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I am the true vine, and my Father is the husbandman. Without me ye can do nothing. Ye are my friends. Greater love hath no man than this, that a man lay down his life for his friends.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'John 15 · Study Guide',
  },

  hasHebrew: false,
};
