import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Zechariah 6 — The Four Chariots and the Crowning of the Priest-King
 */
export const ZECHARIAH_6: RichChapterContent = {
  bookSlug: 'zechariah',
  bookName: 'Zechariah',
  chapter: 6,

  estimatedMinutes: { beginner: 1, intermediate: 2, deep: 4 },
  opener: {
    matchTitle: /Zechariah/i,
    caption: 'Zechariah 6',
  },
  intros: [
    'In the final vision of Zechariah&apos;s night sequence, four chariots emerge from between two bronze mountains—the chariots of heaven going forth to execute God&apos;s judgment upon the earth. Then the angel turns to speak of a man named the BRANCH, who will build God&apos;s temple and be a priest upon his throne. The separate offices of king and priest, divided since Israel&apos;s monarchy, will be united in the Messiah.',
  ],

  sections: [
    {
      ref: 'Zechariah 6:1–8',
      title: 'The Four Chariots',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(1, 'And I turned, and lifted up mine eyes, and looked, and, behold, there came four chariots out from between two mountains; and the mountains were mountains of brass.'),
            plain(2, 'In the first chariot were red horses; and in the second chariot black horses;'),
            plain(3, 'And in the third chariot white horses; and in the fourth chariot grisled and bay horses.'),
            plain(5, 'And the angel answered and said unto me, These are the four spirits of the heavens, which go forth from standing before the Lord of all the earth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'zech6-chariots',
          html: 'Four chariots emerge from between mountains of brass, representing God&apos;s power and strength. Each chariot is drawn by horses of different colors—red, black, white, and grisled—representing the full range of God&apos;s judgment and providence. These are the spirits of heaven, the agents of God&apos;s will moving throughout the earth. The vision assures Israel that God&apos;s justice and power are at work, even when Israel cannot see it[res:intertextual-zechariah-6-hebrews-5][res:sefaria-zechariah-6].',
        },
        {
          kind: 'hebrew',
          id: 'zech6-merkavah',
          title: 'Merkavah — "Chariot"',
          script: 'מרכבה',
          translit: '<strong>Merkavah</strong> · chariot; the divine chariot of God&apos;s throne',
          description: 'The merkavah in Jewish mysticism represents God&apos;s throne and power. These four chariots are God&apos;s means of moving through creation to accomplish His purposes.',
        },
        {
          kind: 'christ',
          id: 'zech6-christ-judge',
          title: 'Christ Connection — The Judge Who Comes on High',
          html: 'The vision of the four chariots points to Christ as the judge who executes God&apos;s justice. "He shall judge the quick and the dead; His kingdom will have no end." Christ rides forth with authority to bring God&apos;s justice and mercy to all the earth[res:bibleodyssey-zechariah-messianic-fulfillment].',
        },
        {
          kind: 'carry',
          html: 'When you wonder if God is at work in the world, remember the four chariots. God&apos;s judgments move throughout the earth in ways you cannot always see. His justice will accomplish His purposes.',
        },
        {
          kind: 'reflection',
          id: 'zech6-reflect-chariots',
          prompt: 'What injustices in the world make you question whether God is still at work? How might the vision of the four chariots strengthen your faith that God&apos;s judgment is moving through all things?',
        },
      ],
    },

    {
      ref: 'Zechariah 6:9–15',
      title: 'The Priest-King and the True Branch',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(11, 'Then take silver and gold, and make crowns, and set them upon the head of Joshua the son of Josedech, the high priest;'),
            plain(12, 'And speak unto him, saying, Thus speaketh the Lord of hosts, saying, Behold the man whose name is The BRANCH; and he shall grow up out of his place, and he shall build the temple of the Lord:'),
            plain(13, 'Even he shall build the temple of the Lord; and he shall bear the glory, and shall sit and rule upon his throne; and he shall be a priest upon his throne: and the counsel of peace shall be between them both.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'zech6-branch-priest-king',
          html: 'A crown is placed upon Joshua the high priest, but the word shifts to the future—to a man whose name is the BRANCH. This figure will build God&apos;s temple, bear glory, sit upon a throne, and serve as priest while being king. In Israel&apos;s history, the king and priest were separate offices, sometimes in tension. But the BRANCH will unite them. This is an explicit messianic promise.',
        },
        {
          kind: 'hebrew',
          id: 'zech6-tzemaach2',
          title: 'Tzemaach — "Branch" (The Growth)',
          script: 'צמח',
          translit: '<strong>Tzemaach</strong> · branch; sprout; living growth from a root',
          description: 'The BRANCH is not appointed arbitrarily but grows naturally from His place, as a branch grows from a tree. This is organic, inevitable, rooted in God&apos;s purposes.',
        },
        {
          kind: 'christ',
          id: 'zech6-christ-priest-king',
          title: 'Christ Connection — Priest Upon His Throne',
          html: 'Christ is the BRANCH who fulfills this prophecy. He is both priest and king—the priest who offers Himself as the sacrifice and the king whose reign has no end. "After the order of Melchizedek," the Psalms declare, Christ holds both offices. He builds God&apos;s temple, not of stone but of living believers.',
        },
        {
          kind: 'carry',
          html: 'The promise of the BRANCH tells you that Christ&apos;s rule is not merely spiritual or merely temporal. He is both priest and king. He offers intercession and carries authority. You live under a rule that holds together priesthood and justice, mercy and power.',
        },
        {
          kind: 'reflection',
          id: 'zech6-reflect-priest-king',
          prompt: 'What does it mean that Christ is both priest and king? How does this change your understanding of His authority and His mercy toward you?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Behold the man whose name is The BRANCH; and he shall grow up out of his place, and he shall build the temple of the Lord...and he shall be a priest upon his throne.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Zechariah 6 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-zechariah-6',
      kind: 'study',
      source: 'Sefaria',
      label: 'Zechariah 6 · Texts & Translations',
      url: 'https://www.sefaria.org/Zechariah.6',
      description: 'Primary sources on the vision of the four chariots and the prophecy of the BRANCH as priest and king.',
    },
    {
      id: 'intertextual-zechariah-6-hebrews-5',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Zechariah 6:13 → Hebrews 5:10 — Christ the High Priest Forever',
      url: 'https://intertextual.bible/search?query=zechariah+hebrews',
      description: 'The connection between Zechariah&apos;s vision of the BRANCH as priest-king and Hebrews&apos; declaration that Christ is a high priest after the order of Melchizedek.',
    },
  ],

  hasHebrew: true,
};
