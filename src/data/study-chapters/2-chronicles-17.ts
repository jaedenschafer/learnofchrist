import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Chronicles 17 — Jehoshaphat's Reign & the Teaching Mission
 *
 * King Jehoshaphat inherits the throne and walks in the ways of his father
 * David, turning his people back to God. But what makes his reign remarkable
 * is not his military might or his riches — though he gains both in abundance.
 * What sets him apart is a decision that echoes through all of Scripture:
 * in the third year of his reign, he sends princes, Levites, and priests
 * to teach the law of the Lord in every city of Judah. And because the people
 * are taught, the fear of the Lord falls on the surrounding nations. When God's
 * word is taught faithfully, protection and prosperity follow.
 */
export const CHRONICLES_2_17: RichChapterContent = {
  bookSlug: '2-chronicles',
  bookName: '2 Chronicles',
  chapter: 17,

  intros: [
    "After his father Asa&apos;s death, Jehoshaphat takes the throne of Judah. The kingdom is at a threshold. Israel to the north has fractured into rebellion and idolatry. Enemies surround Judah on all sides. A lesser king might have focused only on fortifications and military strength. But Jehoshaphat understands something deeper: a kingdom&apos;s true defense is the faith of its people. So he does something almost unheard of — he strengthens the cities, yes, but he also sends out teachers.",
    "The opening chapters of Kings and Chronicles show us two paths for a monarch. The path of power: fortifications, armies, wealth, tributary states. And the path of the covenant: walking in the ways of God, seeking His face, teaching His law. Jehoshaphat chooses both, but he chooses the covenant first. The result is that the fear of the Lord spreads beyond Judah&apos;s borders, and the kingdom prospers. In this chapter, we see the Great Commission not yet uttered by Christ, but already lived by a faithful king: teachers sent out into all the cities, carrying the book of the law, teaching the people.",
  ],

  bottomShare: {
    label: 'Share 2 Chronicles 17',
    quote:
      'Jehoshaphat sent princes and Levites throughout all the cities of Judah to teach the people the law of the Lord. And the fear of the Lord fell upon all the kingdoms round about, so that they made no war against Jehoshaphat.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Chronicles 17 · Study Guide',
  },

  sections: [
    /* ─── 2 Chronicles 17:1–6 — Jehoshaphat Strengthened in the Covenant ──────── */
    {
      ref: '2 Chronicles 17:1–6',
      title: 'Jehoshaphat Strengthens His Kingdom',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(1, 'And Jehoshaphat his son reigned in his stead, and strengthened himself against Israel.'),
            plain(2, 'And he placed forces in all the fenced cities of Judah, and set garrisons in the land of Judah, and in the cities of Ephraim, which Asa his father had taken.'),
            {
              number: 3,
              spans: [
                t('And the Lord was with Jehoshaphat, because he '),
                hp('walked in the first ways of his father David', 'walked-first-ways'),
                t(', and '),
                hg('sought not unto Baalim', 'sought-not-baalim'),
                t(';'),
              ],
            },
            plain(4, 'But sought to the Lord God of his father, and walked in his commandments, and not after the doings of Israel.'),
            plain(5, 'Therefore the Lord stablished the kingdom in his hand; and all Judah brought to Jehoshaphat presents; and he had riches and honour in abundance.'),
            {
              number: 6,
              spans: [
                t('And his heart was '),
                hp('lifted up in the ways of the Lord', 'heart-lifted-ways'),
                t(': moreover he took away the high places and groves out of Judah.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'walked-first-ways',
          html:
            'Jehoshaphat walks in the "first ways" of David — not the ways of David after his fall and failure, but the ways of David when he was young, faithful, seeking God. This phrase distinguishes between a king\'s entire life and his faithful seasons. We all have "first ways" — moments of genuine devotion before fear or ambition overtook us. Jehoshaphat chooses to walk in those first ways intentionally. He is a king choosing to begin again in faithfulness.',
        },
        {
          kind: 'commentary',
          id: 'sought-not-baalim',
          html:
            'The Baals are fertility gods, the false deities of Canaan that continually draw Israel away from the Lord. To "seek not unto Baalim" is to turn away from the seductive whisper of power outside covenant, prosperity without God, strength that doesn\'t bow to the Lord\'s commandments. Jehoshaphat refuses these temptations. He does not divide his heart between the Lord and the gods of the nations.',
        },
        {
          kind: 'commentary',
          id: 'heart-lifted-ways',
          html:
            'His heart is "lifted up" — an unusual phrase in Scripture, because being "lifted up" usually brings danger (pride goes before a fall). But here his heart is lifted up *in the ways of the Lord* — his exaltation is inseparable from his obedience. He is not proud; he is joyful. He exults in the covenant. This is the only safe place for a heart to be lifted up.',
        },
        {
          kind: 'hebrew',
          id: 'derech',
          title: 'Derech — "Way" or "Path"',
          script: 'דֶּרֶךְ',
          translit: '<strong>Derech</strong> · way; path; manner of life; journey',
          description:
            'The Hebrew word "derech" means way or path — and in Scripture, it almost always refers not to a physical road but to a way of life. To walk in the derech of the Lord is to walk in obedience, to live according to His revealed will. The metaphor of "walking" appears throughout Scripture because life is a journey, and the way we walk — whether toward God or away from Him — defines us.',
        },
        {
          kind: 'carry',
          html:
            'We inherit spiritual patterns. Jehoshaphat inherited Asa\'s kingdom, but he consciously chose to walk in David\'s first ways. What inheritance have you received — of faith, of prayer, of godly living — and are you choosing to walk in those first ways? Or have you drifted into compromise, prosperity without faithfulness, strength without seeking the Lord?',
        },
        {
          kind: 'reflection',
          id: 'inheritance-ways',
          prompt: 'When did your faith feel most alive, most genuine? What characterized those "first ways" in your own spiritual journey? What would it look like to choose them again?',
        },
      ],
    },

    /* ─── 2 Chronicles 17:7–9 — The Teaching Mission Throughout the Land ──────── */
    {
      ref: '2 Chronicles 17:7–9',
      title: 'Princes and Teachers Sent to the Cities',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 7,
              spans: [
                t('Also in the third year of his reign he sent of his princes, even Ben-hail, and Obadiah, and Zechariah, and Nethaneel, and Michaiah, '),
                hp('to teach in the cities of Judah', 'teach-cities'),
                t(';'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And with them he sent Levites, even Shemaiah, and Nethaniah, and Zebadiah, and Asahel, and Shemiramoth, and Jehonathan, and Adonijah, and Tobijah, and Tob-adonijah, Levites; and with them Elishama and Jehoram, '),
                hy('priests', 'priests-teachers'),
                t('.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And '),
                hg('they taught in Judah, and had the book of the law of the Lord with them', 'book-law-taught'),
                t(', and went about throughout all the cities of Judah, and '),
                hg('taught the people', 'taught-people'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'teach-cities',
          html:
            'This is extraordinary. A king, in the third year of his reign, sends princes — not soldiers, not tax collectors, but princes — to teach the law of the Lord. He takes his own leadership circle and deploys them as educators. This tells us something about Jehoshaphat\'s priorities. The military will be important, the treasury will be important, but first comes the teaching of God\'s word to the people.',
        },
        {
          kind: 'commentary',
          id: 'priests-teachers',
          html:
            'The team is mixed: princes from the royal house, Levites (who handled the temple and led worship), and priests (who offered sacrifice and mediated between God and the people). This is not a one-person operation. This is the spiritual leadership of the nation, sent out together, united in the mission of teaching.',
        },
        {
          kind: 'commentary',
          id: 'book-law-taught',
          html:
            '"Had the book of the law of the Lord with them" — they did not go with creative reinterpretations or their own ideas. They carried the text. The sefer hatorah — the book of the law — was their foundation. They went city to city, and wherever they went, the people heard the actual word of the Lord, read and explained.',
        },
        {
          kind: 'commentary',
          id: 'taught-people',
          html:
            'The repetition of "taught the people" emphasizes the ordinariness and completeness of the mission. Not the princes only, not the wealthy only, but the people — all the people in all the cities. They went everywhere, teaching everyone.',
        },
        {
          kind: 'hebrew',
          id: 'limmed',
          title: 'Limmed — "To Teach"',
          script: 'לִמַּד',
          translit: '<strong>Limmed</strong> · to teach; to train; to accustom',
          description:
            'The Hebrew word "limmed" (luh-MAHD) means to teach or train. It carries the sense of building into someone a new way of thinking, a new habit. When the princes and Levites teach the people, they are not merely delivering information — they are shaping how the people understand and relate to God.',
        },
        {
          kind: 'hebrew',
          id: 'sefer-hatorah',
          title: 'Sefer HaTorah — "The Book of the Law"',
          script: 'סֵפֶר הַתּוֹרָה',
          translit: '<strong>Sefer HaTorah</strong> · book of the law; the written text of God\'s instruction',
          description:
            'The "sefer hatorah" is the actual scroll — the written record of God\'s law given to Moses. It was not something each teacher could rephrase or reinterpret as they wished. It was the fixed text, carried from city to city, read aloud, explained. The text itself was the foundation. Teaching meant helping people understand what the text says.',
        },
        {
          kind: 'carry',
          html:
            'The mission of Jehoshaphat\'s teachers is the same as the Great Commission: go everywhere, teach everyone, carry with you the word of God. We live in an age of endless voices, endless opinions, endless reinterpretations. But the mission remains: to teach the actual text, the book of the law, to help people understand what God has said. Are you carrying the word as you go about your days? Are you teaching it to the people around you, or just living your private faith?',
        },
        {
          kind: 'reflection',
          id: 'teaching-mission',
          prompt: 'What does it mean to "have the book of the law with you" in your own life? Are there people in your circle who need to hear God\'s word taught clearly? What would it look like to be a teacher, even without formal authority?',
        },
      ],
    },

    /* ─── 2 Chronicles 17:10–11 — The Fear of the Lord and Protection ──────────── */
    {
      ref: '2 Chronicles 17:10–11',
      title: 'The Fear of the Lord Falls on the Nations',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 10,
              spans: [
                t('And the '),
                hp('fear of the Lord fell upon all the kingdoms of the lands', 'fear-kingdoms'),
                t(' that were round about Judah, so that they '),
                hp('made no war against Jehoshaphat', 'no-war'),
                t('.'),
              ],
            },
            plain(11, 'Also some of the Philistines brought Jehoshaphat presents, and tribute silver; and the Arabians brought him flocks, seven thousand and seven hundred rams, and seven thousand and seven hundred he goats.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'fear-kingdoms',
          html:
            'This is a remarkable consequence. The nations round about Judah sense something: the fear of the Lord. They see that Judah is a people walking with God, being taught God\'s law, carrying God\'s word. And that presence of the Lord — "fear" here means a deep, awestruck respect for God\'s power — falls on them. They recognize that Judah is under God\'s protection. It is not Jehoshaphat\'s army that deters them. It is the presence of the Lord.',
        },
        {
          kind: 'commentary',
          id: 'no-war',
          html:
            'The nations "make no war against Jehoshaphat." This is protection not through superior military force, but through the spiritual reality that Judah walks with God. When a people are faithful, when they are being taught and shaped by God\'s word, they move in an authority that transcends human power. Enemies sense it. They pause. They make no war.',
        },
        {
          kind: 'commentary',
          id: 'tribute',
          html:
            'The tributary gifts follow — not from Judah\'s conquest, but offered voluntarily. Philistines and Arabs bring presents and flocks, acknowledging Jehoshaphat\'s authority not through military victory but through the respect that comes from faithfulness to God. This is the paradox of the kingdom: seek the Lord first, and the things you would otherwise have to fight for come to you.',
        },
        {
          kind: 'christ',
          id: 'christ-teaching-protection',
          title: 'Christ Connection — The Word as Defense and Authority',
          html:
            'Before Jesus tells His followers to "go teach all nations," He promises them: "All power is given unto me in heaven and in earth" (Matthew 28:18–20). The disciples are sent out with no physical protection, no armies, no fortress cities. They are sent out carrying the word, and the word is their protection. The same pattern that protected Judah through Jehoshaphat\'s teaching mission protects the apostles: the presence of the Lord through the word. "Thy word is a lamp unto my feet" (Psalm 119:105). "The word of God is alive and powerful, sharper than any two-edged sword" (Hebrews 4:12). The word itself is the defense, the authority, the protection. When the disciples preach Christ, the fear of the Lord falls on the hearers, just as it fell on the kingdoms around Judah.',
        },
        {
          kind: 'carry',
          html:
            'We live in an anxious age, often focused on external security — bolts and bars, insurance and armies. But Jehoshaphat teaches us a different way: when you walk faithfully with God, when you are taught His word, when you carry His truth, you move in a protection that transcends human threats. Your faithfulness itself becomes your defense. Not through pride, not through aggression, but through the quiet authority of a life aligned with God\'s will.',
        },
        {
          kind: 'reflection',
          id: 'fear-lord-protection',
          prompt: 'When have you seen people or communities experience "the fear of the Lord" — a deep respect for God that created protection or peace? What role did faithful teaching of God\'s word play in that situation?',
        },
      ],
    },

    /* ─── 2 Chronicles 17:12–19 — The Great Army and the Abundance of the King ──────── */
    {
      ref: '2 Chronicles 17:12–19',
      title: 'The Prosperity of a Faithful Kingdom',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(12, 'And Jehoshaphat waxed great exceedingly; and he built in Judah castles, and cities of store.'),
            plain(13, 'And he had much business in the cities of Judah: and the men of war, mighty men of valour, in Jerusalem.'),
            {
              number: 14,
              spans: [
                t('And these are the numbers of them according to the house of their fathers: Of Judah, the captains of thousands; Adnah the chief, and with him '),
                hg('mighty men of valour, three hundred thousand', 'mighty-men'),
                t(';'),
              ],
            },
            plain(15, 'And next to him was Jehohanan the captain, and with him two hundred and fourscore thousand:'),
            plain(16, 'And next him was Amasiah the son of Zichri, who willingly offered himself unto the Lord; and with him two hundred thousand mighty men of valour.'),
            plain(17, 'And of Benjamin; Eliada a mighty man of valour, and with him armed men with bow and shield two hundred thousand:'),
            plain(18, 'And next him was Jehozabad, and with him an hundred and fourscore thousand ready prepared for the war.'),
            {
              number: 19,
              spans: [
                t('These waited on the king, beside those whom the king put in the fenced cities throughout all '),
                hy('Judah', 'judah-cities'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'mighty-men',
          html:
            'The list of generals and their armies is not given for mere military interest. It is the book\'s way of telling us that Jehoshaphat\'s faithfulness brought him not only spiritual abundance but practical, material strength. He built castles and cities of store — reserves for times of scarcity. He gathered mighty men of valor. This is the outworking of the promise: "But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you" (Matthew 6:33).',
        },
        {
          kind: 'commentary',
          id: 'willingly-offered',
          html:
            'One captain stands out: Amasiah, who "willingly offered himself unto the Lord." This phrase breaks into the military roster to tell us what made these men strong: they were not merely conscripted soldiers. They were men who had offered themselves to the Lord — their loyalty was first to God, and that made them faithful in every other duty. A people who serve God faithfully are also people who serve their king faithfully.',
        },
        {
          kind: 'commentary',
          id: 'judah-cities',
          html:
            'The picture concludes by reminding us that these soldiers "waited on the king, beside those whom the king put in the fenced cities throughout all Judah." The kingdom is secure not through a single massive army in one place, but through distributed strength — garrisons in every city, teachers in every city, the word of the Lord everywhere.',
        },
        {
          kind: 'hebrew',
          id: 'yirah',
          title: 'Yirah — "Fear" or "Reverent Awe"',
          script: 'יִרְאָה',
          translit: '<strong>Yirah</strong> · fear; reverence; awe of the Lord; godly respect',
          description:
            'The Hebrew "yirah" is sometimes translated "fear," but it means something richer — an awestruck reverence, a respectful trembling before the holy. The "fear of the Lord" is not terror but reverence, the kind of awe that makes a person want to walk carefully, faithfully, in alignment with God\'s will. "The fear of the Lord is the beginning of wisdom" (Proverbs 9:10) because awe of God reorders all your priorities.',
        },
        {
          kind: 'carry',
          html:
            'We often assume that faithfulness and practical strength are in tension — that to be spiritual is to be unworldly, and to be strong in the world is to compromise your faith. But Jehoshaphat shows us that they are not opposed. A kingdom that teaches God\'s word, that walks in God\'s ways, becomes a kingdom of strength. Its cities are built. Its soldiers are mighty. Its people are secure. Not because it sought power first, but because it sought the Lord first, and all these things were added. What in your own life would become stronger if you sought the Lord first?',
        },
        {
          kind: 'reflection',
          id: 'prosperity-faithfulness',
          prompt: 'Jehoshaphat\'s kingdom prospered materially because he sought the Lord faithfully. What does prosperity look like in your own life? Are the things you most want and need being withheld because you\'re seeking them instead of seeking God first?',
        },
      ],
    },
  ],
};
