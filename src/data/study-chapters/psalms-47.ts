import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 47 — The Ascension
 *
 * "O clap your hands, all ye people." "God is gone up with a shout." The
 * psalmist celebrates the triumph of God, who has ascended on high, who is
 * King over all the earth. The Ascension of Christ—His return to the Father
 * after resurrection—fulfills this psalm. He has conquered, and now reigns.
 */
export const PSALMS_47: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 47,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 6 },
  intros: [
    'Psalm 47 is a shout of triumph. "O clap your hands, all ye people." Not a whisper, not a quiet prayer, but a jubilant cry. What is the cause? "God is gone up with a shout, the Lord with the sound of a trumpet." Someone has triumphed. Someone has ascended. Someone who is King over all the earth is going up to take His throne. The psalm celebrates the ascension of God—His rising above all earthly powers, His vindication, His supremacy.',
    'For Christian readers, the echo is unmistakable. After His resurrection, Christ ascended to heaven, where He now sits at the right hand of the Father. The Ascension is not an ending. It is a triumph, a vindication, a taking of His throne. The psalm calls all people to recognize it, to celebrate it, to understand that the One who was crucified has now been exalted above all.',
  ],

  sections: [
    {
      ref: 'Psalm 47:1–9',
      title: 'The King Ascends',
      blocks: [
        {
          kind: 'scripture',
          chapter: 47,
          lines: [
            plain(1, 'O clap your hands, all ye people; shout unto God with the voice of triumph.'),
            plain(2, 'For the Lord most high is terrible; he is a great King over all the earth.'),
            plain(3, 'He shall subdue the people under us, and the nations under our feet.'),
            plain(4, 'He shall choose our inheritance for us, the excellency of Jacob whom he loved. Selah.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps47-summons-reign[res:bible-odyssey-enthronement-psalms]',
          html:
            'All nations are summoned to clap. Now the vision deepens: God reigns over all the earth.',
        },
        {
          kind: 'scripture',
          chapter: 47,
          lines: [
            plain(5, 'God is gone up with a shout, the Lord with the sound of a trumpet.'),
            plain(6, 'Sing praises to God, sing praises: sing praises unto our King, sing praises.'),
            plain(7, 'For God is the King of all the earth: sing ye praises with understanding.'),
            plain(8, 'God reigneth over the heathen: God sitteth upon the throne of his holiness.'),
            plain(9, 'The princes of the people are gathered together, even the people of the God of Abraham: for the shields of the earth belong unto God: he is greatly exalted.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms47-clap',
          html:
            'The opening command is joyful and immediate: "O clap your hands, all ye people; shout unto God with the voice of triumph." This is not somber worship. This is celebration. All peoples—not just Israel, but all the nations of the earth—are invited to recognize what God has done. The voice of triumph is the shout of victory.',
        },
        {
          kind: 'hebrew',
          id: 'psalms47-nora',
          title: 'Nora — "Terrible" / "Awesome"',
          script: 'נוֹרָא',
          translit: '<strong>Nora</strong> · terrible; awesome; worthy of fear and reverence',
          description:
            'The Lord is nora—awesome in power, terrible in majesty. This is not the terror of evil, but the terror that comes from recognizing power and authority beyond all measure. To say God is nora is to say He is worthy of worship because He is beyond our capacity to fully comprehend.',
        },
        {
          kind: 'commentary',
          id: 'psalms47-high',
          html:
            '"For the Lord most high is terrible; he is a great King over all the earth." The King whose majesty the psalm celebrates is not merely Israel&apos;s king[res:sefaria-psalms-47]. He is King over all the earth. Not just some nations. Not just those who believe. Over all. His reign is universal, even if not all recognize it.',
        },
        {
          kind: 'commentary',
          id: 'psalms47-gone-up',
          html:
            '"God is gone up with a shout, the Lord with the sound of a trumpet." This is the climax. God has ascended. He has gone up with a shout—with celebration, with announcement, with the sound of a trumpet. This is not a quiet exit. This is a public, triumphant rising. Those who trust in Him are invited to witness and celebrate.',
        },
        {
          kind: 'commentary',
          id: 'psalms47-subdue',
          html:
            'The ascension is not separation. It is the taking of universal power. "He shall subdue the people under us, and the nations under our feet." The God who ascends will bring all things under submission. This was written long before Christ, yet Christian readers recognize in it the promise that at the name of Jesus, every knee shall bow.',
        },
        {
          kind: 'reflection',
          id: 'psalms47-triumph-voice',
          prompt: 'What would it mean for you to shout with the voice of triumph—to celebrate openly that God has ascended, that He reigns, that His power is supreme? What keeps you from that kind of open joy?',
        },
      ],
    },

    {
      ref: 'Psalm 47:6–9',
      title: 'The Reign Established',
      blocks: [
        {
          kind: 'scripture',
          chapter: 47,
          lines: [
            plain(6, 'Sing praises to God, sing praises: sing praises unto our King, sing praises.'),
            plain(7, 'For God is the King of all the earth: sing ye praises with understanding.'),
            plain(8, 'God reigneth over the heathen: God sitteth upon the throne of his holiness.'),
            plain(9, 'The princes of the people are gathered together, even the people of the God of Abraham: for the shields of the earth belong unto God: he is greatly exalted.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms47-sing-praises',
          html:
            'The refrain "Sing praises to God, sing praises...sing praises unto our King, sing praises" is a jubilant repetition. It is insistent. It will not be denied. The praise must be sung, must be voiced, must be witnessed by all. And it is sung "with understanding"—not mindlessly, but with comprehension of what God has done.',
        },
        {
          kind: 'hebrew',
          id: 'psalms47-maskil',
          title: 'Maskil — "With Understanding"',
          script: 'מַשְׂכִּיל',
          translit: '<strong>Maskil</strong> · with understanding; with wisdom; with insight',
          description:
            'To praise maskil is to praise with understanding, with awareness of what one is praising and why. It is not rote repetition, but enlightened worship. The person who praises maskil has thought about what they are praising and has aligned their mind with the reality they are acknowledging.',
        },
        {
          kind: 'commentary',
          id: 'psalms47-throne',
          html:
            '"God sitteth upon the throne of his holiness." The throne is not merely royal. It is holy. The One who sits upon it is absolutely, completely separated from all evil and impurity. And from this throne of holiness, God reigns over all the nations. No nation is outside His dominion. No power stands against Him.',
        },
        {
          kind: 'commentary',
          id: 'psalms47-shields',
          html:
            '"The shields of the earth belong unto God." Shields are the defense of nations, the instruments by which they protect themselves. Yet all the shields—all the powers that seem to protect and defend earthly nations—belong ultimately to God. They have no authority except what God permits. They cannot stand against His will.',
        },
        {
          kind: 'christ',
          id: 'psalms47-christ-ascension',
          title: 'Christ Connection — The Ascension',
          html:
            'In Acts 1:9–11, as the apostles watch, Jesus ascends to heaven: "And when he had spoken these things, while they beheld, he was taken up; and a cloud received him out of their sight...and while they looked steadfastly toward heaven as he went up, behold, two men stood by them in white apparel; which also said, Ye men of Galilee, why stand ye gazing up into heaven? this same Jesus, which is taken up from you into heaven, shall so come in like manner as ye have seen him go into heaven." The Ascension is Christ&apos;s triumphal return to the Father. He has conquered death. He now reigns at the right hand of God. And from that throne, He exercises dominion over all creation. Psalm 47 is the song of that triumph.',
        },
        {
          kind: 'carry',
          html:
            'Psalm 47 calls us to stop and recognize a fundamental reality: God reigns. Not just over Israel. Not just over the church. Over all the earth. Over all nations, all powers, all history. Christ, ascended and enthroned, is King of kings. The temptation is always to see earthly powers as supreme, to fear them, to imagine they have the final word. The psalm insists: clap your hands. Shout. Sing praises. God has ascended. He reigns. All earthly power is under His feet.',
        },
        {
          kind: 'reflection',
          id: 'psalms47-reign-truth',
          prompt: 'What would it change in your life if you truly believed that Christ reigns, that His power is supreme, that all earthly powers are ultimately under His dominion? How would that belief reshape your fears and your hopes?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'O clap your hands, all ye people; shout unto God with the voice of triumph. God is gone up with a shout.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 47 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalms-47',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalms 47 — Hebrew & Commentaries',
      url: 'https://www.sefaria.org/Psalms.47',
      description: 'Hymn of God&apos;s universal kingship with Jewish commentary.',
    },
    {
      id: 'bible-odyssey-enthronement-psalms',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Enthronement Psalms',
      url: 'https://www.bibleodyssey.org/dictionary/psalms/',
      description: 'Psalms celebrating God&apos;s eternal reign and coronation.',
    },
  ],

  hasHebrew: true,
};
