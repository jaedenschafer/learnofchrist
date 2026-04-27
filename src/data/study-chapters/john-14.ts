import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * John 14 — The Way, the Truth, the Life
 *
 * "Let not your heart be troubled: ye believe in God, believe also in me." Jesus
 * speaks of His Father&apos;s house with many mansions. "I go to prepare a place for
 * you." Thomas asks: "How can we know the way?" Jesus answers: "I am the way, the
 * truth, and the life: no man cometh unto the Father, but by me." Philip asks to
 * see the Father. Jesus responds: "He that hath seen me hath seen the Father."
 * And He promises: "I will not leave you comfortless: I will come to you," speaking
 * of the Comforter, the Holy Ghost.
 */
export const JOHN_14: RichChapterContent = {
  bookSlug: 'john',
  bookName: 'John',
  chapter: 14,

  intros: [
    'Jesus speaks to calm the disciples&apos; troubled hearts. He is about to leave them through death. But He does not abandon them. "Let not your heart be troubled." He speaks of His Father&apos;s house, where there are many rooms. He goes to prepare a place for them. He will come again and take them to Himself, that where He is they may be also. The destination is secure. The way is prepared. The one who guides is trustworthy.',
    'When Thomas asks, "How can we know the way?" Jesus makes one of His clearest claims: "I am the way, the truth, and the life: no man cometh unto the Father, but by me." He is not a signpost pointing elsewhere. He is the path itself. He is not a partial truth among many. He is truth itself. He is not life offered from a distance. He is life incarnate. When Philip asks to see the Father, Jesus responds: "He that hath seen me hath seen the Father." In looking at Jesus, you see God. In meeting Jesus, you meet the Father.',
  ],

  sections: [
    /* ─── John 14:1–14 — The Way, the Truth, the Life ──────────────────── */
    {
      ref: 'John 14:1–14',
      title: 'I Am the Way, the Truth, and the Life',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(1, 'Let not your heart be troubled: ye believe in God, believe also in me.'),
            plain(2, 'In my Father&apos;s house are many mansions: if it were not so, I would have told you. I go to prepare a place for you.'),
            plain(4, 'And whither I go ye know, and the way ye know.'),
            plain(6, 'Jesus saith unto him, I am the way, the truth, and the life: no man cometh unto the Father, but by me.'),
            plain(9, 'Jesus saith unto him, Have I been so long time with you, and yet hast thou not known me, Philip? he that hath seen me hath seen the Father; and how sayest thou then, Show us the Father?'),
            plain(12, 'Verily, verily, I say unto you, He that believeth on me, the works that I do shall he do also; and greater works than these shall he do; because I go unto my Father.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john14-troubled',
          html:
            'Jesus addresses the disciples&apos; fear. They know He is about to leave them. The Passover is upon them. His death approaches. "Let not your heart be troubled." He does not deny the sorrow. He does not pretend the separation is not real. But He calls them to trust. "Ye believe in God, believe also in me." Faith in God must translate to faith in Him.',
        },
        {
          kind: 'commentary',
          id: 'john14-mansions',
          html:
            '"In my Father&apos;s house are many mansions." Jesus speaks of the Father&apos;s house as a place of abundance, of spaces prepared for each who comes. His death is not an end but a preparation. He goes before to make ready a place. The promise is not abstract, but concrete, particular. A place is being prepared for you.',
        },
        {
          kind: 'greek',
          id: 'john14-monai',
          title: 'Monai — Mansions / Dwelling Places',
          script: 'μοναί',
          translit: '<strong>Monai</strong> · mansions; dwelling places; rooms; abodes',
          description:
            'The monai are places to dwell, abodes, homes. Jesus speaks of the Father&apos;s house as a dwelling with infinite capacity. Each disciple has a prepared place. The image conveys security, familiarity, belonging. You will dwell in your Father&apos;s house.',
        },
        {
          kind: 'commentary',
          id: 'john14-way',
          html:
            '"I am the way, the truth, and the life." These three are not separate claims. They cohere. The way (path, direction) is the truth (reality, revelation) and leads to life (fullness, eternity). To follow Jesus is to walk in truth toward life. No other path leads to the Father. No other way opens the door.',
        },
        {
          kind: 'commentary',
          id: 'john14-father-known',
          html:
            '"He that hath seen me hath seen the Father." Philip asks for a vision of God. Jesus says: you have already seen Him. In all His words and works, the Father is revealed. Jesus is not pointing away from Himself to a distant God. He is saying: look at Me. In Me, the Father is visible.',
        },
        {
          kind: 'christ',
          id: 'john14-christ-way',
          title: 'Christ Connection — The Incarnate Way',
          html:
            'Jesus is the way not because He holds a map, but because He is the path itself. He is the truth not because He teaches doctrine, but because He is the reality of God made visible. He is the life not because He offers instructions, but because He is life incarnate. To know Him is to be in the way, to know truth, to possess life.',
        },
        {
          kind: 'carry',
          html:
            'You do not need to search for the Father. You do not need to wonder if He exists or if He cares. Look at Jesus. In Him you see the Father. In Him you encounter God. The distance has been closed. The separation has been bridged. The way is open.',
        },
        {
          kind: 'reflection',
          id: 'john14-see',
          prompt: 'What image of God do you carry? How does Jesus change that image? What does it mean that in Him you see the Father?',
        },
      ],
    },

    /* ─── John 14:15–31 — The Comforter and Peace ──────────────────────── */
    {
      ref: 'John 14:15–31',
      title: 'I Will Not Leave You Comfortless',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(15, 'If ye love me, keep my commandments.'),
            plain(16, 'And I will pray the Father, and he shall give you another Comforter, that he may abide with you for ever;'),
            plain(18, 'I will not leave you comfortless: I will come to you.'),
            plain(21, 'He that hath my commandments, and keepeth them, he it is that loveth me: and he that loveth me shall be loved of my Father, and I will love him, and will manifest myself to him.'),
            plain(26, 'But the Comforter, which is the Holy Ghost, whom the Father will send in my name, he shall teach you all things, and bring all things to your remembrance, whatsoever I have said unto you.'),
            plain(27, 'Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you. Let not your heart be troubled, neither let it be afraid.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john14-keep',
          html:
            '"If ye love me, keep my commandments." Love and obedience are bound together. Love is not sentimentality. It is commitment, expressed through keeping His word. To love Jesus is to order your life by His teaching, to structure your choices around His commandment.',
        },
        {
          kind: 'commentary',
          id: 'john14-comforter',
          html:
            '"I will pray the Father, and he shall give you another Comforter, that he may abide with you for ever." Jesus will depart, but He will not leave them orphaned. Another Comforter will come—the Holy Ghost, the Spirit of truth. This Comforter will not visit temporarily. He will abide with them forever, indwelling, guiding, teaching.',
        },
        {
          kind: 'greek',
          id: 'john14-parakletos',
          title: 'Parakletos — Comforter / Advocate',
          script: 'παράκλητος',
          translit: '<strong>Parakletos</strong> · comforter; advocate; counselor; one called alongside',
          description:
            'The Parakletos is one called alongside—to help, to advocate, to stand with. The Holy Spirit is not a distant judge but a present helper. He comforts in sorrow, advocates in conflict, guides in confusion. He is the continuing presence of Jesus after the resurrection.',
        },
        {
          kind: 'commentary',
          id: 'john14-manifest',
          html:
            '"I will manifest myself to him." Jesus will not be physically present after the resurrection. Yet He will reveal Himself, make Himself known, in a way that transcends physical proximity. The risen Christ is present in Spirit, more intimately available than He ever was in flesh.',
        },
        {
          kind: 'commentary',
          id: 'john14-peace',
          html:
            '"Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you." The world offers peace built on circumstances—success, security, the absence of conflict. But Jesus offers a peace independent of circumstances, a peace rooted in His presence, His love, His victory. This peace is unshakeable.',
        },
        {
          kind: 'christ',
          id: 'john14-christ-spirit',
          title: 'Christ Connection — The Spirit of the Risen Christ',
          html:
            'Jesus does not abandon His disciples at the cross. In the resurrection and the giving of the Spirit, He becomes more fully present than ever. The Spirit is not a substitute for Jesus, but the means through which the risen Christ dwells in every believer, in all times and places, forever.',
        },
        {
          kind: 'carry',
          html:
            'You are not comfortless. You are not orphaned. The Spirit of Jesus dwells within you, teaching, guiding, strengthening. The peace He offers is not dependent on your circumstances changing. It is the deep assurance that you are loved, held, guided by the risen Christ present in Spirit.',
        },
        {
          kind: 'reflection',
          id: 'john14-peace',
          prompt: 'What is the difference between the peace the world offers and the peace Jesus gives? Where do you need His peace most?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I am the way, the truth, and the life: no man cometh unto the Father, but by me. He that hath seen me hath seen the Father. Peace I leave with you, my peace I give unto you.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'John 14 · Study Guide',
  },

  hasHebrew: false,
};
