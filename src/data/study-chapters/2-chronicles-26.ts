import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Chronicles 26 — Uzziah's Prosperity and Fall into Pride
 *
 * The people make the young Uzziah, sixteen years old, king in place of his
 * father. As long as he seeks God, the Lord prospers him mightily: he breaks
 * down enemy walls, builds towers and wells, gathers a mighty army, and
 * invents machines of war. But when he becomes strong, his heart lifts up to
 * his destruction. He enters the temple to burn incense — a priest's work, not
 * a king's — and the leprosy rises on his forehead even as the high priest
 * reproves him. The king spends his remaining years in a separate house, cut
 * off from God's dwelling place. In this chapter, a man learns that power and
 * success can harden the heart into pride — and that God's holiness cannot be
 * trifled with, even by a king.
 */
export const CHRONICLES_2_26: RichChapterContent = {
  bookSlug: '2-chronicles',
  bookName: '2 Chronicles',
  chapter: 26,

  estimatedMinutes: { beginner: 7, intermediate: 18, deep: 22 },
  topicTags: ['kingship', 'worship', 'judgment', 'repentance'],
  opener: {
    topical: true,
    caption: '2 Chronicles 26',
  },
  intros: [
    'Uzziah is sixteen years old when he takes the throne — a boy stepping into the role of a man, following a father whose reign has ended. The beginning of his story is marked by a pattern that will recur throughout the Bible: "As long as he sought the Lord, God made him to prosper." For decades, Uzziah walks in this way. He seeks God. God blesses him. He is successful in war. His cities flourish. His army grows to enormous numbers. He even innovates in warfare, devising engines to cast arrows and stones from towers. His fame spreads to the borders of Egypt. He is a successful king, and success is intoxicating.',
    'But the chapter holds a turning point, marked by one of the most important words in Scripture: "But when he was strong, his heart was lifted up to his destruction." Strength itself becomes his undoing. The king, secure in his power and his accomplishments, forgets the very source of that power. He crosses a line — not in rebellion against God outwardly, but in presumption. He enters the temple to burn incense, a priestly act reserved for the sons of Aaron. The high priest confronts him. But Uzziah, angry, clenches his censer in his hand — and in that moment, leprosy breaks out on his forehead. The visible mark of God\'s judgment appears before the priests. The king is expelled, and he hastens out, understanding that the Lord has smitten him. He spends the rest of his life in isolation, a king no longer allowed in the temple, cut off from the worship of the people he ruled. In his death, they say: He is a leper. The chapter ends with a reference to Isaiah the prophet — the same Isaiah who, in the year that King Uzziah died, saw the Lord sitting upon a throne high and lifted up.',
  ],

  bottomShare: {
    label: 'Share 2 Chronicles 26',
    quote:
      'When he was strong, his heart was lifted up to his destruction. Pride in the power that God has given us becomes the soil where our worst failures grow.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Chronicles 26 · Study Guide',
  },

  resources: [
    {
      id: 'iaa-judah-monarchy',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'Judah in the Monarchy Period',
      url: 'https://www.antiquities.org.il/en/',
      description: 'IAA database of Iron Age Judahite sites, inscriptions, and settlement patterns.',
    },
    {
      id: 'sefaria-2-chronicles-26',
      kind: 'study',
      source: 'Sefaria',
      label: '2 Chronicles 26 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/II_Chronicles.26',
      description: 'The Hebrew text of 2 Chronicles 26 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  sections: [
    /* ─── 2 Chronicles 26:1–5 — The Boy King Seeks the Lord ─────────────── */
    {
      ref: '2 Chronicles 26:1–5',
      title: 'A Young King Seeks the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            plain(
              1,
              'Then all the people of Judah took Uzziah, who was but sixteen years old, and made him king in the room of his father Amaziah.'
            ),
            plain(
              2,
              'He built Eloth, and restored it to Judah, after that the king slept with his fathers.'
            ),
            plain(
              3,
              'Sixteen years old was Uzziah when he began to reign, and he reigned fifty and two years in Jerusalem. His mother\'s name also was Jecoliah of Jerusalem.'
            ),
            {
              number: 4,
              spans: [
                t('And he did that which was right in the sight of the Lord, according to all that his father Amaziah did.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And he '),
                t('sought God in the days of Zechariah'),
                t(', who had understanding in the '),
                t('visions of God'),
                t(': and '),
                hp('as long as he sought the Lord, God made him to prosper', 'pattern-prosper'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'sixteen-king',
          html:
            'Uzziah (also called Azariah) comes to the throne as a boy. Sixteen years old — he has not yet reached manhood in any practical sense, yet the people place upon him the responsibility of governing a kingdom. This is a vulnerable moment for any ruler, more so for one so young. Yet the chronicler notes that he "did that which was right in the sight of the Lord, according to all that his father Amaziah did." There is a continuity here, a sense that Uzziah, young as he is, follows the example set before him. [res:iaa-judah-monarchy]',
        },
        {
          kind: 'commentary',
          id: 'zechariah-guide',
          html:
            'Uzziah does not rule alone. The text tells us he seeks God "in the days of Zechariah, who had understanding in the visions of God." This Zechariah is not the prophet of the later book (that comes centuries later), but a mentor figure — a priest, a seer, a man who knows the will of God. For a young king, such a guide is invaluable. Uzziah has someone to turn to, someone who can speak to him of God\'s direction[res:sefaria-2-chronicles-26][res:bibleodyssey-2-chronicles-overview-26].',
        },
        {
          kind: 'hebrew',
          id: 'darash',
          title: 'Darash — דָּרַשׁ',
          script: 'דָּרַשׁ',
          translit: '<strong>Darash</strong> · to seek, to inquire, to search after',
          description:
            'The verb "darash" appears twice in this section: "he sought God" and "as long as he sought the Lord." It is a word of active seeking — not passive belief, but a deliberate turning toward God to understand His will. To darash is to consult, to ask, to search out. This is what Uzziah does, and this is what brings blessing.',
        },
        {
          kind: 'commentary',
          id: 'pattern-prosper',
          html:
            'The formula is clear and appears throughout Scripture: "As long as he sought the Lord, God made him to prosper." This is not a guarantee of prosperity in every sense — wealth, health, the absence of struggle. Rather, it is a pattern of blessing: when a ruler\'s heart is turned toward God, when he seeks God\'s will, God sustains him, protects him, blesses his endeavors. The condition is "as long as" — which implies that if the seeking stops, so does the blessing.',
        },
        {
          kind: 'carry',
          html:
            'A young king, guided by a priest who understands God\'s visions, seeks the Lord consistently. This is his secret. Not his age (though his youth could be a liability), not his inherited power, but his habit of turning toward God. In our own lives, what guides us toward God? Who speaks to us of God\'s direction? And do we, like Uzziah, actively seek God\'s will, or do we assume we know what should happen next?',
        },
        {
          kind: 'reflection',
          id: 'young-seeker',
          prompt: 'Uzziah had Zechariah to guide him toward God\'s will. Who or what helps you seek God? When you face a decision, what helps you turn toward God rather than away?',
        },
      ],
    },

    /* ─── 2 Chronicles 26:6–15 — Fortifications, Engines, and Fame ───────── */
    {
      ref: '2 Chronicles 26:6–15',
      title: 'Fortifications, Engines, and Expanding Power',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 6,
              spans: [
                t('For he went forth and warred against the Philistines, and brake down the wall of Gath, and the wall of Jabneh, and the wall of Ashdod, and built cities about Ashdod, and among the Philistines.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And God helped him against the Philistines, and against the Arabians that dwelt in Gur-baal, and the Mehunims.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And the Ammonites gave gifts to Uzziah: and his name spread abroad even to the entering in of Egypt; for he strengthened himself exceedingly.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Moreover Uzziah built towers in Jerusalem at the corner gate, and at the valley gate, and at the turning of the wall, and fortified them.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Also he built towers in the desert, and digged many wells: for he had much cattle in the low country, and in the plains: husbandmen also, and vine dressers in the mountains, and in Carmel: for he loved husbandry.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2chr26-uzziah-prosperous',
          html:
            'Uzziah builds, digs cisterns, equips an army — every metric of a kingdom in motion. The verses to come will show what happens when prosperity meets pride.',
        },
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 11,
              spans: [
                t('Moreover Uzziah had an host of '),
                t('fighting men'),
                t(', that went out to war by bands, according to the number of their account by the hand of Jeiel the scribe and Maaseiah the ruler, under the hand of Hananiah, one of the king\'s captains.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('The whole number of the chief of the fathers of the mighty men of valour were two thousand and six hundred.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And under their hand was an army of '),
                hg('three hundred thousand and seven thousand and five hundred', 'army-number'),
                t(', that made war with mighty power, to help the king against the enemy.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And Uzziah prepared for them throughout all the host shields, and spears, and helmets, and habergeons, and bows, and slings to cast stones.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And he made in Jerusalem '),
                hp('engines, invented by cunning men, to be on the towers and upon the bulwarks, to shoot arrows and great stones withal', 'engines-invented'),
                t('. And his name spread far abroad; for he was marvellously helped, till he was strong.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'breached-walls',
          html:
            'Uzziah goes forth in war and breaks down the walls of enemy cities: Gath, Jabneh, Ashdod — cities of the ancient Philistines. He does not merely defeat them in battle; he dismantles their fortifications. He builds cities in the territories he takes. This is conquest in the ancient world — not just military victory, but political establishment. Yet the text tells us: "God helped him." Uzziah\'s victories are attributed not to his own strength alone, but to God\'s aid.',
        },
        {
          kind: 'commentary',
          id: 'tribute-egypt',
          html:
            'The Ammonites, rather than fighting, give gifts to Uzziah. His fame spreads — the text says it reaches "even to the entering in of Egypt." This is extraordinary. The king of a small nation has become so powerful that his name reaches into the geopolitical consciousness of the great powers. And the text tells us the reason: "he strengthened himself exceedingly." Uzziah has organized his resources, built his forces, made himself formidable.',
        },
        {
          kind: 'commentary',
          id: 'towers-cities',
          html:
            'Uzziah builds towers in Jerusalem itself — at strategic points (corner gate, valley gate, turning of the wall). He is not only a man of war; he is a builder. He constructs towers in the desert, digs wells for the pastoral wealth of his kingdom. He has "husbandmen also, and vine dressers in the mountains." The king is interested not merely in military might, but in the flourishing of his people — their agriculture, their herds, their ability to produce and prosper.',
        },
        {
          kind: 'hebrew',
          id: 'tzaba',
          title: 'Tzaba — צָבָא',
          script: 'צָבָא',
          translit: '<strong>Tzaba</strong> · army, host, band of soldiers; service',
          description:
            'The Hebrew word "tzaba" refers to an organized military force — not a mob, but an array of soldiers arranged in bands, numbered and accounted for. Uzziah\'s tzaba numbers three hundred thousand and seven thousand and five hundred men — a vast standing army. The word also carries the sense of service or labor — the army is performing service for the king and the kingdom.',
        },
        {
          kind: 'commentary',
          id: 'army-number',
          html:
            'The numbers are staggering: 2,600 chiefs, under whom serve 307,500 fighting men. This is an enormous military force for a small kingdom, and it reflects that Uzziah has organized the entire male population capable of war into a coordinated system. Every soldier is accounted for. Every chief has a specific number of men under him. This is not casual militia; it is a professional standing army.',
        },
        {
          kind: 'commentary',
          id: 'engines-invented',
          html:
            'Uzziah does not rely on ancient methods alone. The text tells us he "made in Jerusalem engines, invented by cunning men, to be on the towers and upon the bulwarks, to shoot arrows and great stones." These are siege machines — innovations in warfare, designed by craftsmen under his command. He is not merely inheriting ancient warfare; he is advancing it, inventing new technologies to project power. This innovation becomes part of his fame. His name spreads "for he was marvellously helped, till he was strong."',
        },
        {
          kind: 'carry',
          html:
            'Uzziah builds, conquers, organizes, and innovates. Everything he does turns to success. His soldiers are equipped. His defenses are strong. His technology is advanced. His wealth grows. His power expands. But notice: the blessing is real, the success is genuine — "God helped him" — and yet, everything is leading toward a cliff edge. Everything that makes him strong is also accumulating in his heart a sense of his own sufficiency. He is growing in every way. But is he growing in humility? Is he remaining dependent on God? Or is he beginning to believe that his own strength is his salvation?',
        },
        {
          kind: 'reflection',
          id: 'success-humility',
          prompt: 'When you are successful — when your plans work out, when you accomplish what you\'ve set out to do — how do you respond? Do you attribute it to God\'s help, or do you quietly claim the credit?',
        },
      ],
    },

    /* ─── 2 Chronicles 26:16–18 — The Pride and the Presumption ────────── */
    {
      ref: '2 Chronicles 26:16–18',
      title: 'When Strength Became Pride',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 16,
              spans: [
                t('But when he was '),
                hg('strong, his heart was lifted up to his destruction', 'strong-lifted'),
                t(': for he '),
                hy('transgressed against the Lord his God', 'transgressed-god'),
                t(', and went into the temple of the Lord to burn incense upon the altar of incense.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And Azariah the priest went in after him, and with him fourscore priests of the Lord, that were valiant men:'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And they withstood the king, and said unto him, It appertaineth not unto thee, Uzziah, to burn incense unto the Lord, but to the priests the sons of Aaron, that are consecrated to burn incense: go out of the sanctuary; for thou hast trespassed; neither shall it be for thine honour from the Lord God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'strong-lifted',
          html:
            'The turning point comes with a single conjunction: "But." All the blessing, all the success, all the military might and innovation have led to this moment. "When he was strong, his heart was lifted up to his destruction." This is one of the most important theological statements in Scripture. Strength itself becomes the occasion for the fall. The king, made mighty by God\'s help, forgets the source of his might. His heart lifts up — not merely with confidence, but with pride. And this lifting up leads directly to his destruction.',
        },
        {
          kind: 'hebrew',
          id: 'gavah',
          title: 'Gavah — גָּבַהּ',
          script: 'גָּבַהּ',
          translit: '<strong>Gavah</strong> · to be high, to lift up, to be exalted; pride',
          description:
            'The Hebrew verb "gavah" means to lift up, to rise high, to become exalted. In its root form, it describes a physical elevation — but when applied to the heart, as here, it means pride, arrogance, the exaltation of oneself. Uzziah\'s heart has become high — he has elevated himself in his own estimation. Where once he sought God, now he seeks his own will.',
        },
        {
          kind: 'commentary',
          id: 'transgressed-god',
          html:
            'Uzziah transgresses against God. The transgression is not ambiguous in its nature: he enters the temple of the Lord and approaches the altar of incense. This is a priestly act, reserved by divine law for the sons of Aaron. A king may rule the nation, may command armies, may build cities — but he cannot blur the line between kingship and priesthood. That line was established by God Himself. Uzziah\'s transgression is not a moment of weakness or a slip into sin. It is an assertion of his own power over God\'s law.',
        },
        {
          kind: 'commentary',
          id: 'eighty-priests',
          html:
            'Azariah the high priest does not stand alone. He brings with him eighty priests, "valiant men" — men of courage. They form a barrier, literally standing between the king and the altar. This is not timidity on the priests\' part; it is courage. These are men willing to contradict a king, willing to stand in the way of royal presumption. They understand that God\'s holiness is more important than a king\'s authority.',
        },
        {
          kind: 'commentary',
          id: 'appertaineth-not',
          html:
            'Azariah\'s words are clear and direct: "It appertaineth not unto thee, Uzziah, to burn incense unto the Lord, but to the priests the sons of Aaron, that are consecrated to burn incense." The priestly office is not his to claim. It is reserved for those who have been consecrated, set apart for that specific work. Uzziah may be king, but he is not priest. The roles are distinct, and he has no authority to cross that boundary.',
        },
        {
          kind: 'commentary',
          id: 'honor-god',
          html:
            'Azariah adds a final, pastoral touch: "neither shall it be for thine honour from the Lord God." The high priest is not merely citing the law; he is warning the king about the consequences. If Uzziah persists, it will not bring him honor; it will bring judgment. The Lord God will respond. Azariah is giving Uzziah a chance to turn back.',
        },
        {
          kind: 'carry',
          html:
            'The priests stand firm. They do not bow to a king. They do not rationalize away the law to please a powerful man. They speak the truth because God\'s holiness is at stake. Their courage in this moment is a reminder that there are truths that transcend human power, boundaries that cannot be crossed, lines that must be held — even if the cost is facing down a king.',
        },
        {
          kind: 'reflection',
          id: 'priestly-courage',
          prompt: 'The priests risked their position and safety to speak truth to the king. What truths are you unwilling to compromise, even if speaking them costs you something?',
        },
      ],
    },

    /* ─── 2 Chronicles 26:19–21 — The Leprosy and the Exile ───────────── */
    {
      ref: '2 Chronicles 26:19–21',
      title: 'Leprosy and Separation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 19,
              spans: [
                t('Then Uzziah was wroth, and had a censer in his hand to burn incense: and while he was wroth with the priests, the '),
                hg('leprosy even rose up in his forehead before the priests in the house of the Lord, from beside the incense altar', 'leprosy-rose'),
                t('.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And Azariah the chief priest, and all the priests, looked upon him, and, behold, he was leprous in his forehead, and they '),
                hy('thrust him out from thence', 'thrust-out'),
                t('; yea, '),
                hy('himself also hasted also to go out', 'hasted-out'),
                t(', '),
                hp('because the Lord had smitten him', 'smitten-lord'),
                t('.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And Uzziah the king was a leper unto the day of his death, and dwelt in a several house, being a leper; for he was cut off from the house of the Lord: and Jotham his son was over the king\'s house, judging the people of the land.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'leprosy-rose',
          html:
            'The response is immediate and visible. Uzziah, in his anger, still holding the censer to burn incense, is confronted by something that cannot be reasoned with or commanded away. Leprosy breaks out on his forehead — in the very place he stands, before the priests, in the house of the Lord, beside the altar of incense. This is not a delayed judgment that comes years later. This is God\'s immediate response. The king\'s presumption is met with a visible mark of separation from God.',
        },
        {
          kind: 'hebrew',
          id: 'tsaraat',
          title: 'Tsaraat — צָרַ֫עַת',
          script: 'צָרַ֫עַת',
          translit: '<strong>Tsaraat</strong> · leprosy; a skin disease that renders one ritually unclean',
          description:
            'Tsaraat in Scripture is not merely a physical disease; it is a sign of ritual uncleanness, of separation from the holy. Those afflicted with tsaraat were isolated from the community and the temple. The disease itself was understood as a visible mark of separation from God\'s people and God\'s presence. For a king, there could be no worse mark. For a man who tried to approach the altar, no worse response.',
        },
        {
          kind: 'commentary',
          id: 'thrust-out',
          html:
            'The priests thrust him out. They do not gently escort him. The action is forceful, final. Uzziah the king — the man who commanded armies, who built cities, whose name spread to Egypt — is expelled from the temple. The priests are still faithful to the law, still acting as guardians of God\'s holiness. They will not allow a leprous man — king or not — to remain in the house of the Lord.',
        },
        {
          kind: 'commentary',
          id: 'hasted-out',
          html:
            'And Uzziah himself hastens to go out. He does not resist. He does not argue with the priests again. The moment he sees his own leprosy, the moment he understands that God has smitten him, he knows he must leave. His own awareness of what has happened is part of the judgment. He sees what he has become.',
        },
        {
          kind: 'commentary',
          id: 'smitten-lord',
          html:
            'The text is explicit: "because the Lord had smitten him." This is not a natural disease that happens to strike at an inconvenient moment. This is God\'s judgment. God has smitten the king. The disease is a visible sign of God\'s response to royal presumption.',
        },
        {
          kind: 'commentary',
          id: 'several-house',
          html:
            'Uzziah spends the rest of his life in isolation — "in a several house, being a leper." He is separated not only from the temple but from the palace, from the people, from the normal intercourse of a king. He is cut off from the house of the Lord — the very place he tried to enter without permission. His son Jotham takes his place, judging the people of the land. The king who once ruled is now nothing more than a leper in a house apart. His power is gone. His glory is gone. All that remains is his isolation and the visible mark of God\'s judgment.',
        },
        {
          kind: 'carry',
          html:
            'There is no restoration in this chapter, no repentance followed by forgiveness. Uzziah is judged, isolated, and his remaining years are spent in separation from everything he loved. This is hard. The text does not soften it. But it also invites us to ask: what line are we in danger of crossing? Where is God calling us to stay faithful to a boundary that the world says should not matter? And what would it cost us if, like Uzziah, we allowed our success to harden into pride?',
        },
        {
          kind: 'reflection',
          id: 'isolation-reflect',
          prompt: 'Uzziah\'s last years were spent isolated, separated from the place he tried to enter without permission. What does it mean to be "cut off" from God\'s presence? Have you ever felt that separation?',
        },
      ],
    },

    /* ─── 2 Chronicles 26:22–23 — The End and the Echo ──────────────────── */
    {
      ref: '2 Chronicles 26:22–23',
      title: 'The Death of a Leper — Isaiah\'s Vision',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 22,
              spans: [
                t('Now the rest of the acts of Uzziah, first and last, did Isaiah the prophet, the son of Amoz, write.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('So Uzziah slept with his fathers, and they buried him with his fathers in the field of the burial which belonged to the kings; for they said, He is a leper. And Jotham his son reigned in his stead.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah-wrote',
          html:
            'Isaiah the prophet is brought into the narrative. It is Isaiah, son of Amoz, who records the rest of Uzziah\'s acts. This detail is significant because Isaiah will become one of the greatest prophets in Scripture. And the book of Isaiah opens with a date marker: "In the year that king Uzziah died, I saw also the Lord sitting upon a throne, high and lifted up" (Isaiah 6:1). The same Isaiah who chronicled the fall of Uzziah will be given a vision of the True King — the One who sits truly high and lifted up, whose throne cannot be shaken, whose judgment cannot be questioned.',
        },
        {
          kind: 'commentary',
          id: 'buried-leper',
          html:
            'Uzziah "slept with his fathers" — a euphemism for death. But the text adds a crucial detail: "they buried him with his fathers in the field of the burial which belonged to the kings; for they said, He is a leper." He is buried in the royal sepulcher, but the note is added: he is a leper. This is his epitaph. A king who tried to act as a priest. A man who was strong and became proud. A ruler who was smitten by God.',
        },
        {
          kind: 'christ',
          id: 'christ-true-king',
          title: 'Christ Connection — The True King-Priest',
          html:
            'Uzziah attempted to perform the priestly office — to burn incense, to enter the holy place. He was rejected. But the epistle to the Hebrews speaks of Christ in language that directly echoes this story: Christ is "a priest for ever after the order of Melchizedek" (Hebrews 5:6, 7:17). He is the True King and the True Priest simultaneously — not by presumption, but by divine right. Where Uzziah tried to seize what was not his and was struck down, Christ inherits both offices legitimately. He is the King of kings and the High Priest. He offers incense — the prayers of the saints — at the altar. And He does so not in arrogance, but in perfect obedience to the Father. Most powerfully, in the year that King Uzziah died, Isaiah saw the Lord "sitting upon a throne, high and lifted up." This is the vision of Christ the King — the One who is truly exalted, whose authority is beyond question, whose holiness cannot be trifled with.',
        },
        {
          kind: 'carry',
          html:
            'Uzziah\'s story invites a hard question: what happens when we become confident in our own strength? When we blur the lines between what is ours and what is God\'s? When we assume that authority in one realm gives us authority in every realm? The answer is not always immediate judgment — but judgment comes. And the loneliness of that judgment — spending years in isolation, separated from the place we loved — is a price that no earthly power is worth paying.',
        },
        {
          kind: 'reflection',
          id: 'blurred-lines',
          prompt: 'Uzziah crossed a line between king and priest. In your own life, what lines do you need to respect? What roles are not yours to fill? What is God\'s alone?',
        },
      ],
    },
  ],
};
