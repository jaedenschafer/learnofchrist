import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * John 12 — The Anointing and the Triumphal Entry
 *
 * Six days before Passover, Jesus is anointed with costly spikenard by Mary
 * at Bethany. Judas protests: the ointment could have been sold and the money
 * given to the poor. But Jesus says: "Let her alone: against the day of my
 * burying hath she kept this." Then comes the triumphal entry. "Blessed is the
 * King of Israel." Yet Jesus speaks of judgment coming: "Except a corn of wheat
 * fall into the ground and die, it abideth alone: but if it die, it bringeth
 * forth much fruit." His hour is near.
 */
export const JOHN_12: RichChapterContent = {
  bookSlug: 'john',
  bookName: 'John',
  chapter: 12,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 6 },
  opener: {
    matchTitle: /Mary of Bethany Anoints/i,
    caption: 'John 12',
  },
  intros: [
    'Six days before Passover, Jesus is in Bethany at the house of Lazarus, whom He has raised from the dead. Mary sits at His feet and anoints them with a pound of costly spikenard. The ointment fills the house with fragrance. But Judas objects: "Why was not this ointment sold for three hundred pence, and given to the poor?" He speaks as though concern for the poor drives him, but the text reveals his true motive: he is a thief, and he steals from the money box. Jesus responds to Mary with affirmation: "Let her alone: against the day of my burying hath she kept this." Mary&apos;s act is not mere extravagance. It is prophecy, preparation, love poured out.',
    'The next day, Jesus enters Jerusalem in triumph. The people cry: "Hosanna: Blessed is the King of Israel that cometh in the name of the Lord." Yet the shadow of death grows longer. Jesus speaks of a corn of wheat that must fall into the ground and die in order to bring forth much fruit. His own death approaches. And in that death lies redemption for the world. The hour of His glorification has come.',
  ],

  sections: [
    /* ─── John 12:1–11 — The Anointing ────────────────────────────────── */
    {
      ref: 'John 12:1–11',
      title: 'Against the Day of My Burying',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(2, 'There they made him a supper; and Martha served: but Lazarus was one of them that sat at the table with him.'),
            plain(3, 'Then took Mary a pound of ointment of spikenard, very costly, and anointed the feet of Jesus, and wiped his feet with her hair: and the house was filled with the odour of the ointment.'),
            plain(5, 'Why was not this ointment sold for three hundred pence, and given to the poor?'),
            plain(7, 'Then said Jesus, Let her alone: against the day of my burying hath she kept this.'),
            plain(8, 'For the poor always ye have with you; but me ye have not always.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john12-supper',
          html:
            'A supper is made in honor of Lazarus, whom Jesus has raised[res:bible-odyssey-mary-martha]. Martha serves—she is the one who works, who tends to need. Lazarus sits at table with Jesus, a living testimony to resurrection. Mary sits at Jesus&apos; feet. Her posture is one of discipleship, of attentiveness, of love. Then she takes costly ointment and anoints His feet, wiping them with her hair—an act of profound devotion and humility.',
        },
        {
          kind: 'commentary',
          id: 'john12-costly',
          html:
            'The ointment is spikenard, imported from far places, very costly. A pound of it worth three hundred denarii—a worker&apos;s wage for a year. To pour such a thing on feet seems wasteful, excessive, foolish. Yet Mary does not calculate. She pours out what is valuable without measure. Love does not calculate. It gives.',
        },
        {
          kind: 'greek',
          id: 'john12-muron',
          title: 'Muron — Ointment / Perfume',
          script: 'μύρον',
          translit: '<strong>Muron</strong> · ointment; perfume; precious oil',
          description:
            'Muron is not mere oil. It is precious, fragrant, used for anointing the body. To anoint someone is to set them apart, to honor them, to prepare them for a special calling. Mary&apos;s act, though she may not fully understand it, is prophetic. She anoints Jesus for His burial.',
        },
        {
          kind: 'commentary',
          id: 'john12-burying',
          html:
            'Jesus says: "Against the day of my burying hath she kept this." Mary&apos;s act of love is understood by Jesus as preparation for His death. She acts in love. He interprets her love as prophetic. She does not know what she does, yet her action aligns with the coming reality[res:intertextual-entry]. The fragrance that fills the house is the fragrance of His approaching death.',
        },
        {
          kind: 'christ',
          id: 'john12-christ-death',
          title: 'Christ Connection — Death the Path to Glory',
          html:
            'Jesus understands that His death is near. Yet He does not flee it or mourn it as an interruption. He receives Mary&apos;s anointing as preparation. In her act of love, the shadow of the cross is acknowledged. The fragrance of the ointment mingles with the reality of approaching suffering.',
        },
        {
          kind: 'carry',
          html:
            'Mary does not calculate or debate whether her act is wise. She loves and gives without reservation. Judas calculates, counts the cost, sees waste. Yet Jesus affirms Mary. The question is not whether an act is efficient, but whether it is love. Love gives beyond calculation.',
        },
        {
          kind: 'reflection',
          id: 'john12-pour',
          prompt: 'What precious thing is Jesus inviting you to pour out without calculation? Where is He calling you to love beyond the measurement of profit and loss?',
        },
      ],
    },

    /* ─── John 12:12–50 — The Triumphal Entry and the Hour ──────────────── */
    {
      ref: 'John 12:12–50',
      title: 'Except a Corn of Wheat Fall Into the Ground',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(12, 'On the next day much people that were come to the feast, when they heard that Jesus was coming to Jerusalem,'),
            plain(13, 'Took branches of palm trees, and went forth to meet him, and cried, Hosanna: Blessed is the King of Israel that cometh in the name of the Lord.'),
            plain(23, 'And Jesus answered them, saying, The hour is come, that the Son of man should be glorified.'),
            plain(24, 'Verily, verily, I say unto you, Except a corn of wheat fall into the ground and die, it abideth alone: but if it die, it bringeth forth much fruit.'),
            plain(31, 'Now is the judgment of this world: now shall the prince of this world be cast out.'),
            plain(32, 'And I, if I be lifted up from the earth, will draw all men unto me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'john12-hosanna',
          html:
            'The crowds hail Jesus as He enters Jerusalem. "Hosanna" means "save us." They wave palm branches[res:bible-odyssey-triumphal-entry]—symbols of victory and deliverance. They proclaim Him king. Yet the acclamation will turn to rejection within days. The same crowds will cry "Crucify Him." The triumphal entry is temporary. The hour is approaching when He will be rejected and killed.',
        },
        {
          kind: 'commentary',
          id: 'john12-hour',
          html:
            '"The hour is come, that the Son of man should be glorified." Throughout John, "the hour" refers to the appointed time of Jesus&apos; passion, death, and resurrection. Now it arrives. The glorification Jesus speaks of is not worldly triumph, but self-offering, the laying down of His life. That self-gift is His glory.',
        },
        {
          kind: 'greek',
          id: 'john12-kokkos',
          title: 'Kokkos — Corn / Grain / Seed',
          script: 'κόκκος',
          translit: '<strong>Kokkos</strong> · grain; seed; small thing containing potential life',
          description:
            'A grain is small, seemingly insignificant, containing hidden life. When it falls into the ground and dies, it splits open, releases its potential, and grows into a harvest. Jesus uses this image for His own death. His death is not an ending but a beginning, not a failure but the release of infinite fruit.',
        },
        {
          kind: 'commentary',
          id: 'john12-fruit',
          html:
            '"If it die, it bringeth forth much fruit." The logic is paradoxical. Death produces life. Loss produces gain. Jesus speaks the principle that governs His own mission and all discipleship: self-offering leads to renewal, sacrifice leads to abundance, death leads to resurrection.',
        },
        {
          kind: 'commentary',
          id: 'john12-lifted-up',
          html:
            '"I, if I be lifted up from the earth, will draw all men unto me." Jesus speaks of His crucifixion—being lifted up on the cross. Yet He sees in that death not defeat but drawing power. From the cross, He draws all people unto Himself. His death is the magnet that pulls humanity toward God.',
        },
        {
          kind: 'christ',
          id: 'john12-christ-seed',
          title: 'Christ Connection — The Seed That Dies and Bears Fruit',
          html:
            'Jesus is the grain of wheat that falls and dies. His death is not an accident or defeat. It is the necessary condition for the harvest. In His death lies the redemption of the world. His blood poured out, His body broken—these become the sustenance of life for all who believe.',
        },
        {
          kind: 'carry',
          html:
            'The principle of the grain applies to all of Jesus&apos; disciples. "He that loveth his life shall lose it; and he that hateth his life in this world shall keep it unto life eternal." To follow Jesus is to embrace a paradoxical logic: loss leads to gain, death leads to life, emptying oneself leads to being filled.',
        },
        {
          kind: 'reflection',
          id: 'john12-grain',
          prompt: 'What part of your life feels like a grain that must fall and die? How is Jesus inviting you to trust that this dying will bring forth fruit?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Against the day of my burying hath she kept this. Except a corn of wheat fall into the ground and die, it abideth alone: but if it die, it bringeth forth much fruit. I, if I be lifted up from the earth, will draw all men unto me.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'John 12 · Study Guide',
  },

  resources: [
    {
      id: 'bible-odyssey-triumphal-entry',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Triumphal Entry',
      url: 'https://www.bibleodyssey.org/dictionary/triumphal-entry/',
      description: 'Open-access SBL resource on Jesus&apos; entry into Jerusalem and its messianic significance.',
    },
    {
      id: 'bible-odyssey-mary-martha',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Mary, Martha, and Anointing',
      url: 'https://www.bibleodyssey.org/dictionary/mary-martha/',
      description: 'SBL entry on the sisters of Lazarus and Mary&apos;s act of anointing Jesus.',
    },
    {
      id: 'intertextual-entry',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Zechariah 9:9 ↔ John 12:12–13',
      url: 'https://intertextual.bible/text/zechariah-9.9/john-12.12-13',
      description: 'How Jesus fulfills the prophecy of the king coming humbly on a donkey.',
    },
  ],

  hasHebrew: false,
};
