import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Mark 11 — The King&apos;s Authority
 *
 * Jesus enters Jerusalem on a donkey, and crowds hail Him: "Blessed is he that
 * cometh in the name of the Lord." The next day He curses a fig tree that bears
 * no fruit. Then He enters the temple and overturns the tables of the money
 * changers. "My house shall be called of all nations the house of prayer: but ye
 * have made it a den of thieves." The chief priests and scribes seek to destroy
 * Him. In the evening, the disciples see the fig tree has withered. Jesus teaches:
 * "Have faith in God." The fig tree becomes a parable of judgment and faith. The
 * chapter shows Christ&apos;s authority over nature, over the temple, over the powers
 * that claim authority. He comes as King, but not as the world expects. His
 * authority is exercised not through power but through word, through judgment, and
 * through the call to faith.
 */
export const MARK_11: RichChapterContent = {
  bookSlug: 'mark',
  bookName: 'Mark',
  chapter: 11,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 6 },
  intros: [
    'Mark 11 opens with the triumphal entry into Jerusalem. Jesus sends two disciples to find a young ass on which no one has yet sat. He rides this donkey into the city, and crowds hail Him, spreading garments and branches: "Hosanna; blessed is he that cometh in the name of the Lord: blessed is the kingdom of our father David, that cometh in the name of the Lord: Hosanna in the highest." Yet this is not the triumphal entry of a conquering military king. It is a lowly entry, on a beast of burden. The crowds expect one thing. Jesus offers something else.',
    'The next day, Jesus enters the temple and begins to cast out those who sold and bought, overturning the tables of the money changers. "My house shall be called of all nations the house of prayer: but ye have made it a den of thieves." The chief priests and scribes hear and seek a way to destroy Him. The chapter interweaves the incident of the fig tree—cursed for bearing no fruit, later found withered—with the cleansing of the temple. Both are acts of judgment. Both call for faith. The gospel is not a message of comfort but of challenge, judgment, and the call to bear fruit, to have faith, to worship truly.',
  ],

  sections: [
    /* ─── Mark 11:1–25 — Entry, Temple, and Faith ──────────────────────── */
    {
      ref: 'Mark 11:1–25',
      title: 'Authority Over All',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(9, 'And they that went before, and they that followed, cried, saying, Hosanna; Blessed is he that cometh in the name of the Lord:'),
            plain(10, 'Blessed is the kingdom of our father David, that cometh in the name of the Lord: Hosanna in the highest.'),
            plain(15, 'And they come to Jerusalem: and Jesus went into the temple, and began to cast out them that sold and bought in the temple, and overthrew the tables of the moneychangers, and the seats of them that sold doves;'),
            plain(17, 'And he taught, saying unto them, Is it not written, My house shall be called of all nations the house of prayer? but ye have made it a den of thieves.'),
            plain(22, 'And Jesus answering saith unto them, Have faith in God.'),
            plain(23, 'For verily I say unto you, That whosoever shall say unto this mountain, Be thou removed, and be thou cast into the sea; and shall not doubt in his heart, but shall believe that those things which he saith shall come to pass; he shall have whatsoever he saith.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark11-hosanna',
          html:
            'The crowds hail Jesus with "Hosanna"—which means "save us" or "save us now." They hope He is the liberator who will cast off Rome. But Jesus enters on a donkey, not a war horse. The kingdom He brings is not military but spiritual. It requires faith, not swords. The crowds will soon turn on Him.',
        },
        {
          kind: 'commentary',
          id: 'mark11-temple-cleansing',
          html:
            'Jesus enters the temple and overturns the tables of the money changers. This is not a minor incident. It is an act of prophetic judgment and a reclamation of the temple&apos;s true purpose. The money changers are not evil men. They perform a necessary service. But they have turned the temple into a market. Jesus recalls the words of Isaiah: "My house shall be called of all nations the house of prayer." The temple is meant to be a place of prayer, of communion with God, open to all nations.',
        },
        {
          kind: 'greek',
          id: 'mark11-naos',
          title: 'Naos — Temple, Sanctuary',
          script: 'ναός',
          translit: '<strong>Naos</strong> · temple; sanctuary; holy place; dwelling of deity',
          description:
            'The temple (naos) is the dwelling place of God on earth. Jesus&apos; cleansing asserts His authority over the sacred space. He defines what the temple is meant to be: a house of prayer for all nations, not a market.',
        },
        {
          kind: 'commentary',
          id: 'mark11-fig-tree',
          html:
            'Jesus curses a fig tree for bearing no fruit. Later, the disciples see it has withered from the roots. Jesus uses this to teach about faith: "Have faith in God." He teaches that faith can move mountains, that whatever is asked in prayer, believing, will be given. The fig tree becomes a sign—of judgment on fruitlessness, of the power of faith, of the authority of Jesus&apos; word.',
        },
        {
          kind: 'christ',
          id: 'mark11-christ-judge',
          title: 'Christ Connection — Judge and Purifier',
          html:
            'Jesus&apos; authority is not merely creative but also judgmental. He judges the temple, the money changers, the fruitless fig tree. But His judgment is always directed toward restoration, toward calling people back to their true purpose, toward the renewal of true worship.',
        },
        {
          kind: 'carry',
          html:
            'The teaching on faith challenges every small-mindedness, every doubt, every resignation to impossibility. Jesus says whatever you ask in prayer, believing, will be given. This is not the power to manipulate reality to your desires. It is the power to align your desires with God&apos;s and to trust His provision.',
        },
        {
          kind: 'reflection',
          id: 'mark11-faith-move',
          prompt: 'What mountain stands before you that needs to be removed? What would it take for you to have faith that God can move it?',
        },
      ],
    },

    /* ─── Mark 11:27–33 — Authority Questioned ────────────────────────── */
    {
      ref: 'Mark 11:27–33',
      title: 'By What Authority?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(27, 'And they come again to Jerusalem: and as he was walking in the temple, there come to him the chief priests, and the scribes, and the elders,'),
            plain(28, 'And say unto him, By what authority doest thou these things? and who gave thee this authority to do these things?'),
            plain(29, 'And Jesus answered and said unto them, I will also ask of you one question, and answer me, and I will tell you by what authority I do these things.'),
            plain(30, 'The baptism of John, was it from heaven, or of men? answer me.'),
            plain(33, 'And they answered and said unto Jesus, We cannot tell. And Jesus answering saith unto them, Neither do I tell you by what authority I do these things.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'mark11-authority-question',
          html:
            'The chief priests, scribes, and elders confront Jesus: "By what authority doest thou these things?" They are guardians of temple order. Jesus has overturned their arrangements. They demand His credentials. Jesus responds by asking them a question: "The baptism of John, was it from heaven, or of men?" This is not evasion. It is a challenge to their own authority. If they acknowledge John as from heaven, they must acknowledge John pointed to Jesus. If they deny John, they deny what the people believe.',
        },
        {
          kind: 'commentary',
          id: 'mark11-answer-unable',
          html:
            'The authorities cannot answer. To say John was from heaven commits them to acknowledging Jesus. To say John was of men contradicts the people&apos;s conviction. So they say: "We cannot tell." Jesus responds: "Neither do I tell you by what authority I do these things." But the answer is implicit: His authority is from God, the same God who sent John. It is a higher authority than the authorities they represent.',
        },
        {
          kind: 'greek',
          id: 'mark11-exousia',
          title: 'Exousia — Authority',
          script: 'ἐξουσία',
          translit: '<strong>Exousia</strong> · authority; power; the right to command',
          description:
            'Authority (exousia) is the right to command, the power to enact one&apos;s will. The religious authorities base their authority on their position—they are chief priests, elders, scribes. Jesus&apos; authority comes from God directly.',
        },
        {
          kind: 'carry',
          html:
            'The confrontation reveals the structure of opposition: institutional authority resisting divine authority. The authorities cannot openly deny Jesus without losing face with the people. Yet they cannot accept Him. So they seek to destroy Him.',
        },
        {
          kind: 'reflection',
          id: 'mark11-whose-authority',
          prompt: 'Whose authority do you recognize? Where do you submit to human authority? Where do you need to submit to God&apos;s?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'My house shall be called of all nations the house of prayer: but ye have made it a den of thieves. Have faith in God.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Mark 11 · Study Guide',
  },

  hasHebrew: false,
};
