import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Matthew 8 — Miracles of Healing and Authority
 *
 * After the Sermon on the Mount, Matthew shifts from teaching to demonstration.
 * Jesus cleanses a leper who says "Lord, if thou wilt, thou canst make me clean."
 * The centurion&apos;s servant is healed at a distance by Jesus&apos; word. Peter&apos;s
 * mother-in-law is raised from her sickbed. The disciples are amazed: the demons
 * recognize Him; the disease flees at His command; the very winds and sea obey
 * Him. "What manner of man is this, that even the winds and the sea obey him?"
 * Christ is over demons and disease—He exercises dominion over the forces that
 * enslave and afflict humanity.
 */
export const MATTHEW_8: RichChapterContent = {
  bookSlug: 'matthew',
  bookName: 'Matthew',
  chapter: 8,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 7 },
  intros: [
    'Matthew moves from Jesus&apos; teaching to His actions. The Sermon on the Mount has proclaimed the nature of the kingdom. Now the kingdom is demonstrated. A leper approaches—a man excluded from society, cut off from human community. He kneels and says "Lord, if thou wilt, thou canst make me clean." It is not a demand but a prayer, expressing both faith in Jesus&apos; power and dependence on His will. And Jesus, moved with compassion, touches him. He touches the untouchable. And the leprosy departs immediately.',
    'What unfolds throughout the chapter is a pattern: sickness, demon possession, fear, and powerlessness are met by Jesus&apos; word and touch. The centurion&apos;s servant, whom He has never met, is healed by a word spoken at a distance. Peter&apos;s mother-in-law, seized by a fever, is raised up. At evening, many possessed with demons are brought to Him, and He casts them out with a word. The disciples witness all this and ask in amazement: "What manner of man is this, that even the winds and the sea obey him?"',
  ],

  sections: [
    {
      ref: 'Matthew 8:1–17',
      title: 'The Leper, the Centurion, and Peter&apos;s Mother',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(2, 'And, behold, there came a leper and worshipped him, saying, Lord, if thou wilt, thou canst make me clean.'),
            plain(3, 'And Jesus put forth his hand, and touched him, saying, I will; be thou clean. And immediately his leprosy was cleansed.'),
            plain(5, 'And when Jesus was entered into Capernaum, there came unto him a centurion, beseeching him,'),
            plain(6, 'Saying, Lord, my servant lieth at home sick of the palsy, grievously tormented.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matthew-8-78mid-1',
          html:
            'Jesus heals the centurion's servant from a distance; now He enters Peter's house where Peter's mother-in-law lies fevered. From gentile to disciple's family—He cares for all.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(8, 'The centurion answered and said, Lord, I am not worthy that thou shouldest come under my roof: but speak the word only, and my servant shall be healed.'),
            plain(10, 'When Jesus heard it, he marvelled, and said to them that followed, Verily I say unto you, I have not found so great faith, no, not in Israel.'),
            plain(14, 'And when Jesus was come into Peter&apos;s house, he saw his wife&apos;s mother laid, and sick of a fever.'),
            plain(15, 'And he touched her hand, and the fever left her: and she arose, and ministered unto him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt8-leper',
          html:
            'The leper approaches with reverence and trust: "Lord, if thou wilt, thou canst make me clean." He does not presume upon Jesus. He believes in His power but submits to His will. And Jesus, "moved with compassion," touches him and says "I will; be thou clean." By touching the leper, Jesus violates the law of uncleanness[res:sefaria-leviticus-13]. He identifies Himself with the outcast. Yet in touching him, He transfers not uncleanliness to Himself but cleanness to the leper. The disease departs immediately[res:bibleodyssey-miracles].',
        },
        {
          kind: 'commentary',
          id: 'matt8-centurion',
          html:
            'A centurion—a Gentile officer of the occupation force—approaches and asks for healing of his servant. Jesus offers to come to his house, but the centurion says "I am not worthy." Yet he expresses extraordinary faith: "Speak the word only, and my servant shall be healed."[res:iaa-capernaum-archaeology] He understands authority—he is under authority, and others are under his. He recognizes in Jesus an authority that operates through word alone. Jesus marvels: "I have not found so great faith, no, not in Israel." A Gentile outsider shows greater faith than the chosen people.',
        },
        {
          kind: 'commentary',
          id: 'matt8-peter-mother',
          html:
            'Jesus goes to Peter&apos;s house and finds Peter&apos;s mother-in-law lying in bed, sick of a fever. He touches her hand, and immediately the fever leaves and she arises and serves Him. The healing is complete and practical—she is well enough to minister to Him. The word "ministered" is significant: her healing enables her to serve. Christ&apos;s healing is not merely removal of symptom but restoration to wholeness and purpose.',
        },
        {
          kind: 'greek',
          id: 'matt8-aksios',
          title: 'Aksios — Worthy',
          script: 'ἄξιος',
          translit: '<strong>Aksios</strong> · worthy; fitting; deserving; having weight and value',
          description:
            'The centurion says he is not aksios—not worthy—for Jesus to enter his house. Yet Jesus says the centurion&apos;s faith is aksios—weighs, counts, deserves respect. There is a paradox: those who recognize their unworthiness often possess the greatest faith. Those who are aware of their need are open to Jesus&apos; power.',
        },
        {
          kind: 'christ',
          id: 'matt8-christ-over-demons',
          title: 'Christ Connection — Christ Over Demons and Disease',
          html:
            'These miracles reveal Jesus&apos; dominion. Over disease (the leper, the fever), over distance (the servant healed from afar), over the physical condition of the body. More than a healer, He is revealed as Lord over the forces of destruction and suffering that afflict humanity. His word has absolute authority. His touch has transformative power.',
        },
        {
          kind: 'carry',
          html:
            'The centurion teaches us about faith. He does not demand a sign. He does not insist that Jesus come and see for himself. He trusts Jesus&apos; word enough to let it act at a distance. True faith is not the demand for proof but the confidence that Jesus&apos; word is sufficient. He speaks, and it is done.',
        },
        {
          kind: 'reflection',
          id: 'matt8-faith',
          prompt: 'The centurion believed a word from Jesus could heal at a distance without Jesus physically present. What would it mean to trust Jesus&apos; word in that way in your own life?',
        },
      ],
    },

    {
      ref: 'Matthew 8:18–34',
      title: 'The Storm and the Demon-Possessed Men',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(23, 'And when he was entered into a ship, his disciples followed him.'),
            plain(24, 'And, behold, there arose a great tempest in the sea, insomuch that the ship was covered with the waves: but he was asleep.'),
            plain(25, 'And his disciples came to him, and awoke him, saying, Lord, save us: we perish.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matthew-8-78mid-2',
          html:
            'The scene shifts here — a new dialogue, a new healing, a new parable. Matthew gathers Jesus&apos; teaching by theme, not always by chronology.',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(26, 'And he saith unto them, Why are ye fearful, O ye of little faith? Then he arose, and rebuked the wind and the sea; and there was a great calm.'),
            plain(28, 'And when he was come to the other side into the country of the Gadarenes, there met him two possessed with devils, coming out of the tombs, exceeding fierce, so that no man might pass by that way.'),
            plain(29, 'And, behold, they cried out, saying, What have we to do with thee, Jesus, thou Son of God? art thou come hither to torment us before the time?'),
            plain(32, 'And he said unto them, Go. And when they were come out, they went into the herd of swine: and, behold, the whole herd of swine ran violently down a steep place into the sea, and perished in the waters.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'matt8-storm',
          html:
            'Jesus and His disciples enter a ship. A great tempest arises—the ship is covered with waves. The disciples are terrified. And Jesus is asleep. They awake Him: "Lord, save us: we perish." Jesus rebukes them: "Why are ye fearful, O ye of little faith?" Then He arises and rebukes the wind and the sea. And there is a great calm. The disciples are amazed: "What manner of man is this, that even the winds and the sea obey him?"',
        },
        {
          kind: 'commentary',
          id: 'matt8-demons',
          html:
            'Jesus crosses to the other side and encounters two men possessed with demons, so fierce that no one dares pass by. The demons cry out: "What have we to do with thee, Jesus, thou Son of God? art thou come hither to torment us before the time?" Even the demons recognize Jesus. They know He is the Son of God. They know His power and their own end. Jesus commands them to leave, and they enter a herd of swine, which rushes down a steep place into the sea.',
        },
        {
          kind: 'commentary',
          id: 'matt8-wind-sea',
          html:
            'The command to the wind and sea parallels the command to the demons. Both obey Jesus. Both recognize His authority. In Jewish thought, the sea and the forces of chaos are often symbolic of evil and death. That Jesus commands both wind and sea and demons shows His dominion over all the forces that threaten human life and peace. His kingdom is not merely a moral teaching. It is the establishment of His authority over all things.',
        },
        {
          kind: 'greek',
          id: 'matt8-oligopistos',
          title: 'Oligopistos — Little Faith',
          script: 'ὀλιγόπιστος',
          translit: '<strong>Oligopistos</strong> · little faith; faith of small measure; insufficient trust',
          description:
            'Jesus asks the disciples why they are oligopistos—of little faith. They have seen miracles. They are with the Son of God. Yet they panic at the storm. Jesus&apos; question challenges us: even in the midst of danger, even when circumstances are frightening, faith calls us to trust that Jesus is present, that He is Lord even over the storm.',
        },
        {
          kind: 'christ',
          id: 'matt8-christ-lord',
          title: 'Christ Connection — Christ the Lord of All',
          html:
            'The pattern of Matthew 8 is clear: Jesus&apos; authority extends over all the forces that threaten human wholeness—disease, distance, demons, nature itself. He is not a teacher in isolation from the world. He is Lord of the world. His word reframes all reality. The storm that seems absolute is subject to His command. The demons that seem powerful are subject to His will. The disciples&apos; fear is understandable, but Jesus invites them to a greater reality: that He is Lord.',
        },
        {
          kind: 'carry',
          html:
            'The disciples&apos; fear in the storm is natural. They are not wrong to be afraid. But Jesus invites them to a faith that transcends circumstance. He is present. He is Lord. Even sleeping in the boat, He is not absent. When we call out "Lord, save us," He responds. Our fear may be real, but His power is more real still.',
        },
        {
          kind: 'reflection',
          id: 'matt8-storm-faith',
          prompt: 'What "storms" are you facing right now? How is Jesus asking you to move from fear to faith, from despair to trust in His lordship?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Lord, if thou wilt, thou canst make me clean. Jesus saith unto them, Why are ye fearful? What manner of man is this, that even the winds and the sea obey him?',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Matthew 8 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-leviticus-13',
      kind: 'study',
      source: 'Sefaria',
      label: 'Leviticus 13 — Laws of Leprosy',
      url: 'https://www.sefaria.org/Leviticus.13',
      description: 'The purity laws governing lepers that Jesus transgresses by touching the leper, showing His power over ritual uncleanness.',
    },
    {
      id: 'iaa-capernaum-archaeology',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'Capernaum Excavations',
      url: 'https://www.antiquities.org.il/article-1068-en.html',
      description: 'Archaeological findings of first-century Capernaum, including houses and the centurion&apos;s garrison, contextualizing Matthew&apos;s narratives.',
    },
    {
      id: 'bibleodyssey-miracles',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Miracles in the Gospels',
      url: 'https://www.bibleodyssey.org/dictionary/miracle/',
      description: 'Overview of miracle narratives in the gospels, including healing miracles and their theological significance.',
    },
  ],

  hasHebrew: false,
};
