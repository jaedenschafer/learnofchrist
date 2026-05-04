import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ezra 8 — Ezra's Caravan and the Fast at Ahava
 *
 * As Ezra gathers the remnant of Israel to return from Babylonian exile,
 * a crisis emerges: there are no Levites among them. He sends for the
 * priests and ministers, and God graciously provides. But it is Ezra's
 * refusal to ask the king for a military escort that defines this chapter.
 * Instead, he proclaims a fast at the river Ahava, seeking God's protection
 * over political power. The treasures of the Temple are weighed and guarded
 * with meticulous care, and the caravan departs under God's hand, delivered
 * through the wilderness.
 */
export const EZRA_8: RichChapterContent = {
  bookSlug: 'ezra',
  bookName: 'Ezra',
  chapter: 8,

  estimatedMinutes: { beginner: 6, intermediate: 13, deep: 18 },
  topicTags: ['return', 'worship', 'faithfulness', 'leadership'],
  opener: {
    topical: true,
    caption: 'Ezra 8',
  },
  intros: [
    'The book of Ezra records a journey of restoration. The temple has been rebuilt under Zerubbabel, and now a second group of exiles returns, led by Ezra the scribe. But the story of Ezra 8 is not merely about logistics. It is about faith tested at the threshold of the wilderness. Ezra must choose between the king&apos;s soldiers and God&apos;s protection. He chooses God. And in that choice, the people learn what it means to be brought back not by force of arms, but by the hand of the Almighty.',
    'This chapter gives us genealogies of the families who return, a crisis averted through divine provision, and a fast—a moment of corporate prayer and humility before God. But most of all, it shows us a leader&apos;s integrity: Ezra has told the king that God&apos;s hand is upon those who seek Him. He cannot now ask for the king&apos;s soldiers without making his faith look hollow. So he fasts, he prays, and God delivers.',
  ],

  bottomShare: {
    quote:
      'Ezra proclaimed a fast at the river of Ahava, that the people might afflict themselves before God, seeking a right way—not through the king&apos;s armies, but through the hand of the Almighty upon them.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezra 8 · Study Guide',
  },

  resources: [
    {
      id: 'oriental-institute-artaxerxes',
      kind: 'archive',
      source: 'Oriental Institute',
      label: 'Artaxerxes I and Achaemenid Court',
      url: 'https://oi.uchicago.edu/',
      description: 'OI scholarly resources on 5th-century BCE Persian rule and administration.',
    },
    {
      id: 'sefaria-ezra-8',
      kind: 'study',
      source: 'Sefaria',
      label: 'Ezra 8 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Ezra.8',
      description: 'The Hebrew text of Ezra 8 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },
    {
      id: 'bibleodyssey-ezra-overview-8',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Ezra — SBL Overview',
      url: 'https://www.bibleodyssey.org/articles/ezra/',
      description: 'Open-access SBL essay on the historical and literary setting of Ezra.',
    },

  ],

  sections: [
    /* ─── Ezra 8:1–14 — The Families Return ──────────────────────────── */
    {
      ref: 'Ezra 8:1–14',
      title: 'The Families Who Return',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(1, 'These are now the chief of their fathers, and this is the genealogy of them that went up with me from Babylon, in the reign of Artaxerxes the king:'),
            plain(2, 'Of the sons of Phinehas; Gershom: of the sons of Ithamar; Daniel: of the sons of David; Hattush.'),
            plain(3, 'Of the sons of Shechaniah, of the sons of Pharosh; Zechariah: and with him were reckoned by genealogy of the males an hundred and fifty.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezra_8_v1-7',
          html:
            '<p>Weaving God&apos;s ongoing care through each command and promise.</p> [res:oriental-institute-artaxerxes]',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(4, 'Of the sons of Pahath-moab; Elihoenai the son of Zerahiah, and with him two hundred males.'),
            plain(5, 'Of the sons of Shechaniah; the son of Jahaziel, and with him three hundred males.'),
            plain(6, 'Of the sons also of Adin; Ebed the son of Jonathan, and with him fifty males.'),
            plain(7, 'And of the sons of Elam; Jeshaiah the son of Athaliah, and with him seventy males.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezra8-priests-and-singers',
          html:
            'The first seven families are named: Phinehas, Ithamar, David (the priestly lines), and then Shechaniah, Pahath-moab, Adin, and Elam. Each brings a leader and a specific count of males—a family unit whole and accounted for. Each family bears the weight of the covenant promise, returning to rebuild what was destroyed[res:sefaria-ezra-8][res:bibleodyssey-ezra-overview-8].',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(8, 'And of the sons of Shephatiah; Zebadiah the son of Michael, and with him fourscore males.'),
            plain(9, 'Of the sons of Joab; Obadiah the son of Jehiel, and with him two hundred and eighteen males.'),
            plain(10, 'And of the sons of Shelomith; the son of Josiphiah, and with him an hundred and threescore males.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezra_8_v8-14',
          html:
            '<p>Weaving God&apos;s ongoing care through each command and promise.</p>',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(11, 'And of the sons of Bebai; Zechariah the son of Bebai, and with him twenty and eight males.'),
            plain(12, 'And of the sons of Azgad; Johann the son of Hakkatan, and with him an hundred and ten males.'),
            plain(13, 'And of the sons of Adonikam, whose names are these, Eliphelet, Jeiel, and Shemaiah, and with them threescore males.'),
            plain(14, 'Of the sons of Bigvai; Uthai, and Babbai, and with them seventy males.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'families-return',
          html:
            'The genealogies here are not merely a list. They are a record of covenant continuity. These are the families who will not let the covenant slip away. They return from exile bearing witness to God&apos;s faithfulness—that even in foreign captivity, the people of Israel remain the people of Israel. Each family brings the memory of their ancestors and the promise of their God.',
        },
        {
          kind: 'commentary',
          id: 'chief-fathers',
          html:
            'The "chief of their fathers" were the acknowledged leaders of each clan, the ones who bore responsibility for their households. In returning, they do not return as scattered refugees, but as covenantal families under recognized leadership. This order—this family structure—will help them rebuild not just a temple, but a community rooted in God&apos;s purpose.',
        },
        {
          kind: 'carry',
          html:
            'We, too, are part of a genealogy—a line of faith stretching backward to those who believed and forward to those who will believe. Whether you come from a heritage of faith or are the first to turn toward God in your family, you are being grafted into a larger story. You carry the memory of those who came before and bear witness to those who come after.',
        },
        {
          kind: 'reflection',
          id: 'genealogy-family',
          prompt: 'What inheritance of faith—or what hunger for faith—have you received from those who came before you? How does knowing you are part of a larger family affect the way you live?',
        },
      ],
    },

    /* ─── Ezra 8:15–20 — No Levites: A Crisis and Divine Provision ────── */
    {
      ref: 'Ezra 8:15–20',
      title: 'No Levites: Divine Provision',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 15,
              spans: [
                t('And I gathered them together to the '),
                hy('river that runneth to Ahava', 'ahava-river'),
                t('; and there abode we in tents three days: and I viewed the people, the priests, and found there '),
                hg('none of the sons of Levi', 'no-levites'),
                t('.'),
              ],
            },
            plain(16, 'Then sent I for Eliezer, for Ariel, for Shemaiah, and for Elnathan, and for Jarib, and for Elnathan, and for Nathan, and for Zechariah, and for Meshullam, chief men; also for Joiarib, and for Elnathan, men of understanding.'),
            plain(17, 'And I sent them with commandment unto Iddo the chief at the place Casiphia, and I told them what they should say unto Iddo, and to his brethren the Nethinims, at the place Casiphia, that they should bring unto us ministers for the house of our God.'),
            plain(18, 'And by the good hand of our God upon us they brought us a man of understanding, of the sons of Mahli, the son of Levi, the son of Israel; namely, Sherebiah, with his sons and his brethren, eighteen;'),
            plain(19, 'And Hashabiah, and with him Jeshaiah of the sons of Merari, his brethren and their sons, twenty;'),
            plain(20, 'Also of the Nethinims, whom David and the princes had appointed for the service of the Levites, two hundred and twenty Nethinims: all of them were expressed by name.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ahava-river',
          html:
            'The river Ahava is the gathering place—the threshold before the wilderness. Here, Ezra and the people pause. They have not yet begun the dangerous journey. But Ezra already discerns a problem.',
        },
        {
          kind: 'commentary',
          id: 'no-levites',
          html:
            'The absence of Levites is a spiritual crisis. The Levites are the ministers of the temple, the singers, the guardians of the sacred service. Without them, the returning community cannot fully restore the worship of God. Ezra recognizes this immediately. A building is not a temple without those set apart to minister in it.',
        },
        {
          kind: 'hebrew',
          id: 'levi-separation',
          title: 'Levi — "Joined" or "Devoted"',
          script: 'לֵוִי',
          translit: '<strong>Levi</strong> · one joined; the name given to the priestly tribe devoted to God&apos;s service',
          description:
            'The Levites were not given territory like the other tribes; they were given to God. The name itself suggests separation, dedication, being set apart. The absence of the Levites means the people lack those who have made the covenant to be wholly devoted to the work of worship.',
        },
        {
          kind: 'commentary',
          id: 'divine-provision',
          html:
            'But Ezra does not despair. He sends word to Iddo at Casiphia, and by "the good hand of our God," the Levites and Nethinims arrive—not by accident, but by divine provision. God sees the need and provides exactly what is necessary. Sherebiah and Hashabiah come with their families, eighteen and twenty respectively, and two hundred twenty more Nethinims come to serve. The answer to the crisis is not Ezra&apos;s ingenuity, but God&apos;s faithfulness.',
        },
        {
          kind: 'carry',
          html:
            'When we recognize a lack in our spiritual lives—a need for prayer, for wisdom, for fellowship, for teaching—the response is not anxiety, but a quiet seeking of God&apos;s provision. Ezra sends word, he trusts, and he receives. The hand of God is at work before we ever ask. What lacks are you aware of in your own walk? How might you seek God&apos;s provision rather than trying to solve it alone?',
        },
        {
          kind: 'reflection',
          id: 'divine-provision-reflection',
          prompt: 'Ezra recognized a critical lack and turned to God rather than relying on his own resources. When have you recognized a spiritual lack in your own life? Did you turn to God, or try to fill it yourself?',
        },
      ],
    },

    /* ─── Ezra 8:21–23 — The Fast at Ahava ──────────────────────────── */
    {
      ref: 'Ezra 8:21–23',
      title: "The Fast at Ahava: Refusing the King&apos;s Army",
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 21,
              spans: [
                t('Then I '),
                hg('proclaimed a fast', 'proclaimed-fast'),
                t(' there, at the river of Ahava, that we might '),
                t('afflict ourselves'),
                t(' before our God, to seek of him a '),
                hg('right way', 'right-way'),
                t(' for us, and for our little ones, and for all our substance.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('For I was '),
                hp('ashamed to require of the king', 'ashamed-king'),
                t(' a band of soldiers and horsemen to help us against the enemy in the way: because we had '),
                t('spoken unto the king'),
                t(', '),
                t('"The hand of our God is upon all them for good that seek him; but his power and his wrath is against all them that forsake him."'),
                t(''),
              ],
            },
            {
              number: 23,
              spans: [
                t('So we fasted and besought our God for this: and '),
                hp('he was intreated of us', 'intreated-us'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'proclaimed-fast',
          html:
            'Ezra proclaims a fast. This is not a private devotion; it is a corporate act of prayer and humility. The people gather at the river, and they abstain from food. This is what it means to "afflict" oneself—to deny the body its comforts in order to orient the spirit toward God. Fasting is a way of saying: this matter is urgent enough to require our whole selves.',
        },
        {
          kind: 'hebrew',
          id: 'tsom-fast',
          title: 'Tsom — "Fast" or "Abstinence from Food"',
          script: 'צוֹם',
          translit: '<strong>Tsom</strong> · fast; to abstain; the practice of denying oneself food as an act of prayer or penitence',
          description:
            'The Hebrew tsom is not merely the absence of eating. It is the presence of a spiritual intention. When the people fast, they are practicing a kind of poverty—a deliberate vulnerability—before God. The fast is a language of the body speaking what words cannot fully express.',
        },
        {
          kind: 'commentary',
          id: 'ashamed-king',
          html:
            'This is the pivot of the chapter. Ezra has told King Artaxerxes that "the hand of our God is upon all them for good that seek him; but his power and his wrath is against all them that forsake him." In other words, Ezra has declared to the king that God&apos;s protection is better and more reliable than any earthly power. To then ask the king for soldiers would be to contradict his own witness. It would be to say: I trust God, but I also trust the king&apos;s army more. That would be a lie. So Ezra refuses. Not because soldiers are evil, but because to ask for them would be to betray what he has said about God.',
        },
        {
          kind: 'commentary',
          id: 'right-way',
          html:
            'The "right way" is not the safest way, or the most heavily guarded way. It is the way that reflects what we have said about God. It is the way of integrity. Ezra seeks a "right way" not just through prayer, but through refusing to contradict prayer with his actions.',
        },
        {
          kind: 'commentary',
          id: 'intreated-us',
          html:
            'And God responds. "He was intreated of us"—He was moved by the fast, by the prayer, by the people&apos;s willingness to trust Him. God hears. God answers. The word "intreated" suggests a kind of persuasion, as though God were waiting to be asked before He acted. This too is part of the pattern: we pray, we seek, we open ourselves, and God responds with power.',
        },
        {
          kind: 'christ',
          id: 'christ-armies-refused',
          title: 'Christ Connection — Refusing Armies',
          html:
            'In Matthew 26:52–53, when the soldiers come to arrest Jesus in the Garden of Gethsemane, Peter draws a sword. Jesus says: "Put up again thy sword into his place: for all they that take the sword shall perish with the sword. Thinkest thou that I cannot now pray to my Father, and he shall presently give me more than twelve legions of angels? But how then shall the scriptures be fulfilled, that thus it must be?" Jesus refuses the way of armies. He could call angels to His aid. Instead, He chooses the way of faith, the way of vulnerability, the way that fulfills God&apos;s larger purpose. Like Ezra at the river Ahava, Jesus knows that to ask for the kingdom&apos;s protection would be to refuse the Father&apos;s way.',
        },
        {
          kind: 'carry',
          html:
            'We face this choice too. Do we speak faith and live fear? Do we say we trust God and then immediately build walls, gather weapons, make contingency plans based on distrust? Ezra teaches us that faith is not about recklessness—it is about coherence. It is about letting what we say about God shape what we do. The hardest prayers are the ones we are willing to live out when the answer requires us to be vulnerable.',
        },
        {
          kind: 'reflection',
          id: 'faith-words-deeds',
          prompt: 'What have you said about God&apos;s faithfulness that you are not yet living? Where in your life do your words and your actions contradict your stated trust in God?',
        },
      ],
    },

    /* ─── Ezra 8:24–30 — The Weighed Treasures ───────────────────────── */
    {
      ref: 'Ezra 8:24–30',
      title: 'The Treasures Weighed: Accountability and Care',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(24, 'Then I separated twelve of the chief of the priests, Sherebiah, Hashabiah, and ten of their brethren with them,'),
            {
              number: 25,
              spans: [
                t('And weighed unto them the silver, and the gold, and the vessels, even the offering of the house of our God, which the king and his counsellors and his lords and all Israel there present, had offered:'),
              ],
            },
            plain(26, 'Even six hundred and fifty talents of silver, and silver vessels an hundred talents, and of gold an hundred talents;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezra_8_v24-30',
          html:
            '<p>Weaving God&apos;s ongoing care through each command and promise.</p>',
        },
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(27, 'Also twenty basons of gold, a thousand drams; and two vessels of fine copper, precious as gold.'),
            {
              number: 28,
              spans: [
                t('And I said unto them, '),
                hg('"Ye are holy unto the Lord; the vessels are holy also; the silver and the gold are a freewill offering unto the Lord God of your fathers."', 'holy-vessels'),
                t(''),
              ],
            },
            {
              number: 29,
              spans: [
                t('"'),
                hg('Watch ye, and keep them', 'watch-keep'),
                t('", until ye weigh them before the chief of the priests and the Levites, and chief of the fathers of Israel, at Jerusalem, in the chambers of the house of the Lord.'),
              ],
            },
            plain(30, 'So took the priests and the Levites the weight of the silver, and the gold, and the vessels, to bring them to Jerusalem unto the house of our God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'holy-vessels',
          html:
            'Ezra calls the people holy. Not because they are sinless, but because they have been set apart for God&apos;s purpose. The treasures they carry—the silver, the gold, the vessels—are holy too. They are not cargo. They are worship. They are the means by which the people of God will meet God in the rebuilt temple. To carry them is to carry something sacred.',
        },
        {
          kind: 'hebrew',
          id: 'shaqal-weigh',
          title: 'Shaqal — "To Weigh" or "To Value"',
          script: 'שָׁקַל',
          translit: '<strong>Shaqal</strong> · to weigh; to judge; to consider of value; to pay',
          description:
            'The word "shaqal" means to weigh, but it carries deeper meaning. To weigh something is to determine its worth, its substance. Ezra weighs the treasures not as a merchant counts goods, but as a priest accounts for what is sacred. The weighing is an act of reverence, a way of saying: these things matter, and we take them seriously.',
        },
        {
          kind: 'commentary',
          id: 'watch-keep',
          html:
            'Ezra charges the twelve priests and Levites: "Watch ye, and keep them." This is not merely about security. This is about sacred stewardship. They are not to guard these treasures from thieves or from loss. They are to guard them from profanation, from careless handling, from being used for anything other than what God has appointed. To watch and keep means to maintain the boundary between the holy and the common.',
        },
        {
          kind: 'commentary',
          id: 'treasures-significance',
          html:
            'The treasures are not Ezra&apos;s, nor the priests&apos;, nor even the people&apos;s. They are a "freewill offering unto the Lord God of your fathers." What the people give, they give with open hands. The gold has been refined in fire. The silver has been worked by human hands. And now it goes to build a house where God will be worshipped. The treasures are a form of prayer made physical—beauty given back to beauty.',
        },
        {
          kind: 'carry',
          html:
            'What treasures has God entrusted to you? Not necessarily money—but your talents, your relationships, your influence, your time. Ezra teaches that stewardship is not ownership. We do not own what God gives. We are guardians of it. We are called to watch over it carefully, to keep it holy, to ensure that it is used for God&apos;s purposes, not our own. The question is not "What can I do with this?" but "How does God want this to be used?"',
        },
        {
          kind: 'reflection',
          id: 'stewardship-treasures',
          prompt: 'What have you been entrusted with that you need to guard more carefully? How might you "watch and keep" the gifts God has given you—not as your possessions, but as sacred trusts?',
        },
      ],
    },

    /* ─── Ezra 8:31–36 — The Journey and Safe Arrival ──────────────────── */
    {
      ref: 'Ezra 8:31–36',
      title: 'Departed from Ahava: God Delivers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 31,
              spans: [
                t('Then we departed from the river of Ahava on the twelfth day of the first month, to go unto Jerusalem: and '),
                hp('the hand of our God was upon us', 'hand-upon-us'),
                t(', he delivered us from the hand of the enemy, and of such as lay in wait by the way.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And we came to Jerusalem, and abode there three days.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('Now on the fourth day was the silver and the gold and the vessels '),
                hg('weighed', 'fourth-weighed'),
                t(' in the house of our God by the hand of Meremoth the son of Uriah the priest; and with him was Eleazar the son of Phinehas; and with them was Jozabad the son of Jeshua, and Noadiah the son of Binnui, Levites;'),
              ],
            },
            plain(34, 'By number and by weight of every one: and all the weight was written at that time.'),
            {
              number: 35,
              spans: [
                t('Also the children of those that had been carried away, which were come out of the captivity, '),
                hg('offered burnt offerings', 'burnt-offerings'),
                t(' unto the God of Israel, twelve bullocks for all Israel, ninety and six rams, seventy and seven lambs, twelve he goats for a sin offering: all this was a burnt offering unto the Lord.'),
              ],
            },
            plain(36, 'And they delivered the king&apos;s commissions unto the king&apos;s lieutenants and governors on this side the river: and they furthered the people, and the house of God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'hand-upon-us',
          html:
            'The hand of God. This phrase, which echoes throughout Ezra, is the answer. Ezra fasted. Ezra prayed. Ezra refused the king&apos;s soldiers. And the journey was safe. Not because Ezra was clever or because the road was empty, but because "the hand of our God was upon us." The wilderness held enemies and robbers. But those enemies could not touch the people. The hand that delivered them was greater than any power opposed to them.',
        },
        {
          kind: 'commentary',
          id: 'fourth-weighed',
          html:
            'Upon arrival in Jerusalem, the treasures are weighed again. Not to check whether anything was lost—though loss is always possible in the wilderness—but to fulfill the covenant of accountability. What was weighed at Ahava is weighed again at Jerusalem, before witnesses, in the house of God. Everything is recorded. Nothing is hidden. This is the language of trust made visible through transparency.',
        },
        {
          kind: 'commentary',
          id: 'burnt-offerings',
          html:
            'The people offer burnt offerings—a gift that is entirely consumed by fire, held back for no one, held back not even for the giver. Twelve bullocks for all Israel, ninety-six rams, seventy-seven lambs, and twelve he goats for a sin offering. These numbers may seem arbitrary, but each represents a statement: we have returned. We have been delivered. We make an offering in thanksgiving. We recognize our need for atonement. The wilderness journey is complete. Now the worship begins.',
        },
        {
          kind: 'hebrew',
          id: 'ahava-gathered',
          title: 'Ahava — The River Where God&apos;s Hand Gathers',
          script: 'אַהֲוָא',
          translit: '<strong>Ahava</strong> · the river where the remnant gathered; the place of decision, of fasting, of trust',
          description:
            'Ahava appears in no other chapter of Scripture. It is mentioned only here, in this story of Ezra&apos;s fast and the people&apos;s trust in God. The river Ahava is the threshold place—where the people stop and consider: Will we trust God, or will we trust human power? They choose God. And that choice, made at that river, defines the whole journey.',
        },
        {
          kind: 'christ',
          id: 'christ-protected-wilderness',
          title: 'Christ Connection — Protected Through the Wilderness',
          html:
            'After His baptism, Jesus is led into the wilderness by the Spirit. There He is tempted for forty days. Satan offers him kingdoms, power, and glory—shortcuts to fulfillment that bypass the way of the cross. Jesus refuses. "It is written, Man shall not live by bread alone, but by every word that proceedeth out of the mouth of God" (Matthew 4:4). Like Ezra&apos;s people, Jesus walks through the wilderness in trust. The difference is that Jesus walks alone. He has chosen not to call legions of angels. He trusts the Father&apos;s hand. And when the wilderness is complete, "angels came and ministered unto him" (Matthew 4:11). The Father&apos;s protection is not absent. It is complete.',
        },
        {
          kind: 'carry',
          html:
            'You have your own Ahava river—a moment or a season where you must choose between trust in God and trust in the protections the world offers. The world is right that enemies exist, that danger is real. But Ezra teaches us that trusting God is not denying danger. It is declaring that God&apos;s hand is mightier than any hand raised against us. What wilderness are you walking through? What choice are you being asked to make about where your trust lies?',
        },
        {
          kind: 'reflection',
          id: 'wilderness-trust',
          prompt: 'Ezra refused the king&apos;s protection because he had said that God&apos;s hand protects those who seek Him. In your own life, where are you asking for protection from sources other than God? What would it look like to trust God the way Ezra did?',
        },
      ],
    },
  ],
};
