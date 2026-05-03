import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Chronicles 14 — Asa's Reform and Victory Over Zerah
 *
 * After the death of his father Abijah, Asa becomes king of Judah. His reign
 * marks a great turning point: a reformation that strips the land of idolatry,
 * restores the worship of the true God, and establishes a decade of peace.
 * "Sought the Lord, He gave us rest." But when the Ethiopian Zerah comes
 * against Judah with a million soldiers and 300 chariots, the king who has
 * learned to depend on God utters one of Scripture's greatest prayers of
 * reliance: "It is nothing with thee to help, whether with many, or with them
 * that have no power. Help us, O Lord our God; for we rest on thee." The armies
 * clash. The Ethiopians flee. And Judah learns that the God who grants peace in
 * times of calm grants victory in times of war. The One we depend on is enough.
 */
export const CHRONICLES_2_14: RichChapterContent = {
  bookSlug: '2-chronicles',
  bookName: '2 Chronicles',
  chapter: 14,

  estimatedMinutes: { beginner: 4, intermediate: 9, deep: 14 },
  intros: [
    'Abijah has died. His son Asa now reigns over Judah, and the young king brings with him a vision of reform. The land is filled with the altars and images of strange gods — the spiritual debris of centuries of drift. Asa does what the great reformer kings do: he tears down the high places, breaks the images, cuts down the groves, and commands Judah to seek the Lord God of their fathers. For ten years, the land knows rest. No war. No conflict. The kingdom grows quiet before him. It is as if God Himself is honoring this faithful king with peace.',
    'But peace on earth is never absolute. In the 15th year of Asa\'s reign, Zerah the Ethiopian comes against him with an army of a million men and 300 chariots. The numbers are overwhelming. Judah\'s forces are smaller. By every military calculus, Asa should be afraid. Instead, he does something remarkable: he cries unto the Lord. His prayer is not a bargaining prayer or a prayer of desperation dressed as faith. It is a prayer that cuts to the heart of covenant reliance: "It is nothing with thee to help, whether with many, or with them that have no power. Help us, O Lord our God; for we rest on thee, and in thy name we go against this multitude." The battle turns. The Ethiopians flee before Judah. The One whom Asa depends on proves sufficient. In this chapter, we see the whole arc of faith: reform, rest, reliance in crisis, and deliverance.',
  ],

  bottomShare: {
    label: 'Share 2 Chronicles 14',
    quote:
      'Asa cries unto the Lord: "It is nothing with thee to help, whether with many, or with them that have no power. Help us, O Lord our God; for we rest on thee, and in thy name we go against this multitude." When God is our captain, the size of the enemy is irrelevant.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Chronicles 14 · Study Guide',
  },

  sections: [
    /* ─── 2 Chronicles 14:1–5 — Asa's Reformation: Idols Removed ───────── */
    {
      ref: '2 Chronicles 14:1–5',
      title: 'Asa Removes Idols and Calls Judah to Seek the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(1, 'So Abijah slept with his fathers, and they buried him in the city of David: and Asa his son reigned in his stead. And in his days the land was quiet ten years.'),
            plain(2, 'And Asa did that which was good and right in the eyes of the Lord his God:'),
            plain(3, 'For he took away the altars of the strange gods, and the high places, and brake down the images, and cut down the groves:'),
            plain(4, 'And commanded Judah to seek the Lord God of their fathers, and to do the law and the commandment.'),
            plain(5, 'Also he took away out of all the cities of Judah the high places and the images: and the kingdom was quiet before him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'asa-slept',
          html:
            'Abijah dies. Asa becomes king. But notice the first thing the text tells us: "in his days the land was quiet ten years." The Chronicler does not speak first of Asa\'s military campaigns or his political maneuvers. He speaks of peace. The land was quiet. This peace is not merely the absence of war; it is the result of Asa\'s reformation. The king who cleansed the land of idolatry created the conditions for God\'s blessing to rest upon it.',
        },
        {
          kind: 'commentary',
          id: 'altars-strange',
          html:
            'Asa begins his reign by removing "the altars of the strange gods." These are not the altars of the true God — they are altars to false gods that have crept into Judah\'s worship over generations. He breaks down the high places (the local shrines where people offered sacrifice), destroys the images (the carved and cast figures of false deities), and cuts down the groves (the sacred poles associated with Asherah worship). This is not minor liturgical reform; it is a thorough, systematic cleansing of idolatry from the land.',
        },
        {
          kind: 'hebrew',
          id: 'darash',
          title: 'Darash — "To Seek" or "To Inquire"',
          script: 'דָּרַשׁ',
          translit: '<strong>Darash</strong> · to seek; to inquire; to search after; to consult',
          description:
            'When Asa commands Judah to "seek the Lord God of their fathers," the word is darash — to actively inquire after, to search out, to pursue. It is not passive religiosity; it is an active, earnest turning toward God. Darash implies intentionality, effort, and the kind of seeking that expects to find. Asa is calling his people not to mere ritual compliance, but to a genuine seeking after the face of God.',
        },
        {
          kind: 'carry',
          html:
            'Asa understood something essential: idolatry is not a small matter. The altars, the images, the groves — they are not harmless cultural artifacts. They are spiritual obstacles that keep a nation from turning toward the true God. Asa\'s reformation was thorough because he knew that a divided heart cannot seek the Lord with wholeness. What "altars" or "high places" have you built in your own life — habits, attachments, loyalties — that might be keeping you from seeking God with your whole heart?',
        },
        {
          kind: 'reflection',
          id: 'altars-removed',
          prompt: 'Asa removed the altars of strange gods from his land. What practices, habits, or loyalties in your own life might be "altars of strange gods" — things pulling your devotion away from God? What would it mean for you to remove them?',
        },
      ],
    },

    /* ─── 2 Chronicles 14:6–8 — Building Cities in a Time of Rest ───────── */
    {
      ref: '2 Chronicles 14:6–8',
      title: 'Building Fortified Cities While the Land Is at Rest',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(6, 'And he built fenced cities in Judah: for the land had rest, and he had no war in those years; because the Lord had given him rest.'),
            plain(7, 'Therefore he said unto Judah, Let us build these cities, and make about them walls, and towers, gates, and bars, while the land is yet before us; because we have sought the Lord our God, we have sought him, and he hath given us rest on every side. So they built and prospered.'),
            plain(8, 'And Asa had an army of men that bare targets and spears, out of Judah three hundred thousand; and out of Benjamin that bare shields and drew bows, two hundred and fourscore thousand: all these were mighty men of valour.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'built-fenced',
          html:
            'In the years of peace that God has granted, Asa does not grow complacent or careless. Instead, he builds. He constructs fenced cities — fortified strongholds with walls, towers, gates, and bars. This is the wisdom of a leader who understands that peace from God is not an excuse for unreadiness, but an opportunity for preparation. Asa gathers his people and says: "Let us build these cities while the land is yet before us." The language suggests urgent opportunity — before circumstances change, before war comes again, let us fortify ourselves.',
        },
        {
          kind: 'hebrew',
          id: 'menuchah',
          title: 'Menuchah — "Rest" or "Repose"',
          script: 'מְנוּחָה',
          translit: '<strong>Menuchah</strong> · rest; repose; a place of rest; quietness; absence of disturbance',
          description:
            'The word menuchah appears twice in this passage: "the land had rest" (verse 6) and "he hath given us rest on every side" (verse 7). Menuchah is not mere inactivity; it is the kind of rest that comes from God — the secure peace that allows a kingdom to prosper and build. It is the peace purchased by faithfulness and granted by God\'s favor.',
        },
        {
          kind: 'commentary',
          id: 'sought-him',
          html:
            'Asa says to his people: "We have sought the Lord our God, we have sought him, and he hath given us rest on every side." The repetition — "we have sought him" — emphasizes that this rest is the fruit of their seeking. It is not accidental peace; it is the covenant response of God to a people who turned away from idols and turned toward Him. Asa frames the moment correctly: the peace you enjoy is because you sought the Lord. Use this season wisely.',
        },
        {
          kind: 'carry',
          html:
            'There is spiritual wisdom in Asa\'s building program. He does not squander the peace God has given. He uses the quiet years to prepare, to strengthen, to fortify. In our own lives, seasons of peace and rest are not indulgences to be enjoyed carelessly. They are opportunities to build spiritual fortifications — to deepen prayer, to strengthen faith, to prepare our hearts for the trials that may come. The building we do in times of rest will sustain us in times of trouble.',
        },
        {
          kind: 'reflection',
          id: 'rest-building',
          prompt: 'When you experience a period of peace or rest in your life, do you use it to build spiritual fortifications — through prayer, study, deeper relationships — or do you grow complacent? What spiritual "cities" do you need to build while the land is yet at peace?',
        },
      ],
    },

    /* ─── 2 Chronicles 14:9–11 — Zerah Comes; Asa Cries to the Lord ────── */
    {
      ref: '2 Chronicles 14:9–11',
      title: 'The Million Ethiopians; Asa&apos;s Prayer of Reliance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(9, 'And there came out against them Zerah the Ethiopian with an host of a thousand thousand, and three hundred chariots; and came unto Mareshah.'),
            plain(10, 'Then Asa went out against him, and they set the battle in array in the valley of Zephathah at Mareshah.'),
            {
              number: 11,
              spans: [
                t('And Asa cried unto the Lord his God, and said, Lord, '),
                hp('it is nothing with thee to help', 'nothing-help'),
                t(', whether with many, or with them that have no power: help us, O Lord our God; for we '),
                hp('rest on thee', 'rest-on-thee'),
                t(', and in thy name we go against this multitude. O Lord, thou art our God; let not man prevail against thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'zerah-come',
          html:
            'The peace is broken. Zerah the Ethiopian comes against Judah with a million soldiers and 300 chariots. The numbers are staggering. Zerah commands a force ten times larger than Asa\'s. By any military standard, Judah is outnumbered and outmatched. But notice: Asa does not panic. He does not hide. He goes out against him. The king who has sought the Lord and received rest is now called to walk in faith amid crisis.',
        },
        {
          kind: 'commentary',
          id: 'nothing-help',
          html:
            'Asa\'s prayer opens with a statement of faith that seems almost paradoxical: "It is nothing with thee to help, whether with many, or with them that have no power." The king is saying: God, for You to help is not a matter of having a large army or a small one. Numbers are irrelevant to Your power. Whether we have many soldiers or few, the outcome does not depend on that. It depends on You. This is a prayer that recognizes the fundamental truth of covenant faith: the power to deliver belongs to God, not to human might.',
        },
        {
          kind: 'commentary',
          id: 'rest-on-thee',
          html:
            'Then Asa states the ground of his prayer: "We rest on thee." The word "rest" here is different from menuchah (the peace God gives); it is more like "lean upon," "depend on," "trust in." Asa is saying: Our whole reliance is on You. We do not depend on the size of our army or the strength of our walls. We depend on You. And because we depend on You, "in thy name we go against this multitude." The name of God — His character, His power, His covenant faithfulness — is the banner under which Judah marches.',
        },
        {
          kind: 'hebrew',
          id: 'rov',
          title: 'Rov — "Multitude" or "Abundance"',
          script: 'רֹב',
          translit: '<strong>Rov</strong> · multitude; abundance; greatness; a large number',
          description:
            'When Asa says "we go against this multitude," the word is rov — a great abundance, a vastness, an overwhelming number. The same word can mean the abundance of God\'s mercies or the abundant blessings of a harvest. Here it describes the overwhelming size of Zerah\'s army. Yet Asa goes against it, not in human confidence, but in the name of God.',
        },
        {
          kind: 'christ',
          id: 'asa-christ',
          title: 'Christ Connection — The One We Rest Upon',
          html:
            'Asa\'s prayer echoes across the centuries and finds its fullness in Christ. Jesus teaches: "Come unto me, all ye that labour and are heavy laden, and I will give you rest. Take my yoke upon you, and learn of me; for I am meek and lowly in heart: and ye shall find rest unto your souls" (Matthew 11:28–29). Just as Asa teaches his people to rest upon the Lord, Jesus offers rest to all who come to Him. And just as Asa goes into battle leaning upon God\'s strength, Jesus says in Colossians 3:17: "And whatsoever ye do in word or deed, do all in the name of the Lord Jesus, giving thanks to God and the Father by him." We are called, like Asa, to rest on Him and to go forth in His name.',
        },
        {
          kind: 'carry',
          html:
            'Asa\'s crisis was not a test of his courage; it was a test of his faith. And his prayer reveals what the king has learned through his years of seeking the Lord: that the size of the problem is irrelevant when the size of your God is infinite. Fear whispers that our problems are bigger than our God. Faith declares that our God is bigger than any problem. Asa chose faith. In what area of your life are you tempted to trust in the size of your resources or your ability, rather than resting on God?',
        },
        {
          kind: 'reflection',
          id: 'zerah-prayer',
          prompt: 'Asa prays: "It is nothing with thee to help, whether with many, or with them that have no power." When you face a challenge that seems too large for you, do you count your own strength or rest on God? What would it mean to pray like Asa in your situation?',
        },
      ],
    },

    /* ─── 2 Chronicles 14:12–15 — The Lord Smites the Ethiopians ───────── */
    {
      ref: '2 Chronicles 14:12–15',
      title: 'The Deliverance: Zerah&apos;s Army Is Destroyed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(12, 'So the Lord smote the Ethiopians before Asa, and before Judah; and the Ethiopians fled.'),
            plain(13, 'And Asa and the people that were with him pursued them unto Gerar: and the Ethiopians were overthrown, that they could not recover themselves; for they were destroyed before the Lord, and before his host.'),
            plain(14, 'And they carried away very much spoil.'),
            plain(15, 'And they smote all the cities round about Gerar; for the fear of the Lord came upon them: and they spoiled all the cities; for there was exceeding much spoil in them. They smote also the tents of cattle, and carried away sheep and camels in abundance, and returned to Jerusalem.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'smote-ethiopians',
          html:
            'The battle unfolds exactly as Asa had prayed: the Lord smites the Ethiopians before Asa and before Judah. The Ethiopians flee. The men of Judah, energized by the Lord\'s intervention, pursue them unto Gerar. The Ethiopians are "overthrown, that they could not recover themselves; for they were destroyed before the Lord, and before his host." Notice the language: they are destroyed not by Judah\'s military prowess, but "before the Lord, and before his host." God Himself fights for Judah. The outcome that seemed impossible on the battlefield becomes inevitable.',
        },
        {
          kind: 'commentary',
          id: 'spoil-carried',
          html:
            'The victory is complete. Judah carries away very much spoil — the goods, the wealth, the possessions of Zerah\'s defeated army. The fear of the Lord comes upon all the cities round about Gerar, and they spoil every one of them because the people have seen what the Lord did. The fear of the Lord is not fear of Judah\'s military might; it is awe at the manifest power of God. The people recognize that they are witnessing divine intervention.',
        },
        {
          kind: 'commentary',
          id: 'tents-cattle',
          html:
            'The spoil includes cattle, sheep, and camels in abundance. Asa\'s kingdom returns to Jerusalem not merely victorious, but enriched. The enemy\'s own resources become provisions for Judah\'s expansion and building. What the enemy sent to destroy Judah becomes the material by which Judah is blessed. This is the pattern of covenant blessing: when a people trust God and the enemy comes against them, the enemy\'s own strength becomes the fuel for their advancement.',
        },
        {
          kind: 'carry',
          html:
            'The victory of Asa teaches a fundamental lesson about the nature of faith. Asa did not go into battle presuming that God would help. He prayed. He relied. He went in the name of the Lord. And God acted. The lesson is not that prayer guarantees victory in every circumstance — Scripture is more complex than that. The lesson is that when we genuinely rest our trust in God, when we go forward in His name rather than in our own strength, we align ourselves with His power. The outcome is in His hands, and His hands are good.',
        },
        {
          kind: 'reflection',
          id: 'deliverance',
          prompt: 'After Asa\'s prayer, the Lord smites the Ethiopians and Judah is delivered. Have you experienced a time when God acted in a way that seemed impossible — when He did something you could not have done for yourself? What did that teach you about reliance on Him?',
        },
      ],
    },
  ],
};
