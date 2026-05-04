import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Kings 19 — Hezekiah's Prayer and the Angel's Deliverance
 *
 * When the king of Assyria's vast army encircles Jerusalem, demanding surrender,
 * King Hezekiah does something extraordinary: he spreads the blasphemous letter
 * before the Lord and prays. In that prayer, Hezekiah affirms that there is only
 * one God — not the gods of wood and stone that the Assyrians boast of, but the
 * living God who alone can save. That night, the angel of the Lord strikes down
 * 185,000 Assyrians. The city is saved. In this chapter, we encounter a king
 * who understands that true power lies not in military strength, but in the
 * sovereignty of the God who hears prayer.
 */
export const KINGS_2_19: RichChapterContent = {
  bookSlug: '2-kings',
  bookName: '2 Kings',
  chapter: 19,

  estimatedMinutes: { beginner: 7, intermediate: 13, deep: 16 },
  opener: {
    matchTitle: /Sennacherib/i,
    caption: '2 Kings 19',
  },
  intros: [
    'The kingdom of Judah stands on the edge of annihilation. The Assyrian army, under King Sennacherib, has already conquered the northern kingdom of Israel. Its cities are ruins. Its people are scattered or enslaved. Now the Assyrians turn their attention to Jerusalem, the capital of Judah, and the city walls are surrounded. The Assyrian commander, Rabshakeh, stands outside the gates and hurls insults — not just at the king and people, but at their God. "Let not thy God in whom thou trustest deceive thee," the message reads. The gods of every other nation have fallen before Assyrian might. Why should Jerusalem&apos;s God be any different?',
    'King Hezekiah hears this message. It would be easy to despair. It would be easy to negotiate, to offer tribute, to save the city by surrendering to Assyrian power. Instead, Hezekiah does something that will change the course of history: he takes the letter, spreads it before the Lord in the temple, and prays. In that prayer, spoken in the presence of the living God, Hezekiah makes a claim that stands against everything the Assyrians believe: that the Lord alone is God, that the gods of wood and stone are no gods at all, and that the name and reputation of the living God depends not on Assyrian military might, but on His own character.',
  ],

  sections: [
    /* ─── 2 Kings 19:1–7 — Hezekiah Turns to Isaiah ──────────────────── */
    {
      ref: '2 Kings 19:1–7',
      title: 'Hezekiah Turns to the Prophet',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 1,
              spans: [
                t('And it came to pass, when king Hezekiah heard it, that he '),
                hg('rent his clothes', 'hz-rent-clothes'),
                t(', and covered himself with sackcloth, and went into the house of the Lord.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And he sent Eliakim the master of the household, and Shebna the scribe, and the elders of the priests, covered with sackcloth, unto Isaiah the prophet the son of Amoz.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And they said unto him, Thus saith Hezekiah, This day is a day of trouble, and of rebuke, and of blasphemy: for the children are come to the birth, and there is not strength to bring them forth.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('It may be the Lord thy God will hear all the words of Rabshakeh, whom the king of Assyria his master hath sent to reproach the living God; and will reprove the words which the Lord thy God hath heard: wherefore lift up thy prayer for the remnant that are left.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'hz-rent-clothes',
          html:
            'Hezekiah&apos;s first response is not political calculation. It is grief and repentance. He tears his clothes and covers himself with sackcloth — the ancient signs of mourning and supplication. Then, crucially, he goes to the house of the Lord. His crisis drives him not to the war room, but to the temple. His quarrel is not ultimately with Assyria; it is with God[res:brit-museum-sennacherib-siege][res:sefaria-isaiah-hezekiah][res:iaa-siloam-tunnel].',
        },
        {
          kind: 'commentary',
          id: 'hz-strength-birth',
          html:
            'The phrase "children are come to the birth, and there is not strength to bring them forth" is a metaphor for helplessness. Jerusalem is in labor, but the strength to deliver has failed. The city is trapped between two forces: the enemy at the gates and the inability to break free. It is an image of extremity, of a people who have nowhere to turn but to the God who alone can deliver.',
        },
        {
          kind: 'hebrew',
          id: 'hz-cherpah',
          title: 'Cherpah — "Reproach" or "Blasphemy"',
          script: 'חֶרְפָּה',
          translit: '<strong>Cherpah</strong> · reproach; shame; insult; blasphemy',
          description:
            'The word cherpah means to shame or insult someone. When Rabshakeh reproaches the living God, he is not merely criticizing; he is publicly shaming Him, trying to strip away His honor. Hezekiah understands that the Assyrian army&apos;s words are an attack on God&apos;s name and reputation. The crisis is not merely military; it is theological.',
        },
      ],
    },

    /* ─── 2 Kings 19:8–13 — The Second Blasphemous Letter ──────────────── */
    {
      ref: '2 Kings 19:8–13',
      title: 'The Second Blasphemous Message',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 8,
              spans: [
                t('So Rabshakeh returned, and found the king of Assyria warring against Libnah: for he had heard that he was departed from Lachish.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And when he heard say of Tirhakah king of Ethopia, He is come out to fight against thee: he sent messengers again unto Hezekiah, saying,'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Thus shall ye speak to Hezekiah king of Judah, saying, Let not thy God in whom thou trustest '),
                hg('deceive thee', 'hz-deceive'),
                t(', saying, Jerusalem shall not be delivered into the hand of the king of Assyria.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Behold, thou hast heard what the kings of Assyria have done to all lands, by destroying them utterly: and shalt thou be delivered?'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Have the gods of the nations delivered them which my fathers have destroyed; as Gozan, and Haran, and Rezeph, and the children of Eden which were in Thelasar?'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Where is the king of Hamath, and the king of Arphad, and the king of the city of Sepharvaim, of Hena, and Ivah?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'hz-deceive',
          html:
            'Rabshakeh&apos;s second message is more cunning than the first. He appeals to experience: every city the Assyrians have conquered has trusted in its gods, and every one has fallen. The gods of Gozan, Haran, Rezeph — all were powerless. Why should Jerusalem&apos;s God be different? The Assyrian argument is not illogical. It is based on a terrifying historical pattern. The only answer is not strategy or military superiority, but faith that the God of Israel is not like the gods of wood and stone.',
        },
        {
          kind: 'commentary',
          id: 'hz-destroyed-gods',
          html:
            'The Assyrian record boasts of nations destroyed and their gods unable to save them. This was the brutal logic of ancient Near Eastern warfare: the conqueror&apos;s god is proven superior by military victory. But Hezekiah is about to overturn that logic entirely. He will not answer with military force. He will answer with a prayer that redefines what it means for God to be God.',
        },
        {
          kind: 'reflection',
          id: 'hz-second-letter',
          prompt: 'When have you faced an argument or attack that seemed logically compelling — based on past experience or evidence? How did you find faith when the evidence seemed against you?',
        },
      ],
    },

    /* ─── 2 Kings 19:14–19 — "Spread It Before the Lord" ──────────────── */
    {
      ref: '2 Kings 19:14–19',
      title: 'The Prayer Spread Before the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 14,
              spans: [
                t('And Hezekiah received the letter of the hand of the messengers, and read it: and Hezekiah went up into the house of the Lord, and '),
                hg('spread it before the Lord', 'hz-spread'),
                t('.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And Hezekiah prayed before the Lord, and said, O Lord God of Israel, '),
                hp('which dwellest between the cherubims', 'hz-between-cherubims'),
                t(', thou art the God, even thou alone, of all the kingdoms of the earth; thou hast made heaven and earth.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('Lord, bow down thine ear, and hear: open, Lord, thine eyes, and see: and hear the words of Sennacherib, which hath sent him to reproach the '),
                hp('living God', 'hz-living-god'),
                t('.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Of a truth, Lord, the kings of Assyria have destroyed the nations and their lands, and have cast their gods into the fire: for they were no gods, but the work of men&apos;s hands, wood and stone: therefore they have destroyed them.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Now therefore, O Lord our God, I beseech thee, save thou us out of his hand, that all the kingdoms of the earth may know that thou art the '),
                hp('Lord God, even thou only', 'hz-thee-only'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'hz-spread',
          html:
            'Hezekiah spreads the letter before the Lord. This is an extraordinary act. He takes the blasphemous words of the Assyrian king, enters the temple, and literally spreads them before God. It is as if he says: Here. Look at what they have said about You. Look at this attack on Your name. And he invites God to defend His own reputation. This is not a prayer of desperation alone; it is a prayer that calls God to vindicate His own character.',
        },
        {
          kind: 'hebrew',
          id: 'hz-betulah',
          title: 'Betulah — "Virgin Daughter"',
          script: 'בְּתוּלַת בַּת־צִיּוֹן',
          translit: '<strong>Betulat bat-Tziyon</strong> · virgin daughter of Zion; the undefeated city',
          description:
            'Later in the chapter, Isaiah will speak of "the virgin daughter of Zion" who "despised" and "laughed to scorn" the Assyrian king. The image is of a city that has never been conquered, that stands pure and undefeated. Though Jerusalem is surrounded, the prayer affirms that her virginity — her unconquered status — remains intact because she belongs to the Lord.',
        },
        {
          kind: 'commentary',
          id: 'hz-between-cherubims',
          html:
            'Hezekiah addresses God as the one "which dwellest between the cherubims" — a reference to the Holy of Holies, the innermost sanctuary of the temple where the Ark of the Covenant sits, flanked by golden cherubim. This is God in His holiest presence, hidden from mortal sight, dwelling in unapproachable light. Hezekiah speaks to that God, the God who is transcendent and utterly beyond the reach of Assyrian power.',
        },
        {
          kind: 'commentary',
          id: 'hz-living-god',
          html:
            'Hezekiah calls God the "living God" — a phrase that draws sharp contrast with the gods of wood and stone. Those gods do not live. They cannot hear. They cannot act. But the God of Israel is alive, conscious, present. He hears prayer. He sees. He acts in history.',
        },
        {
          kind: 'commentary',
          id: 'hz-thee-only',
          html:
            'The heart of Hezekiah&apos;s prayer is the affirmation: "thou art the Lord God, even thou only." This is not merely a religious claim; it is a statement that reorients all reality. Not Sennacherib&apos;s power, not the gods of conquered nations, but this God alone is ultimate. The prayer asks for deliverance not primarily for Jerusalem&apos;s sake, but "that all the kingdoms of the earth may know that thou art the Lord God, even thou only." Hezekiah prays for God&apos;s name to be vindicated among all peoples.',
        },
        {
          kind: 'christ',
          id: 'hz-christ-prayer',
          title: 'Christ Connection — The One Prayer That Always Reaches the Father',
          html:
            'Hezekiah&apos;s prayer is a model of the prayer that reaches the heart of God: a prayer that appeals not to personal safety or political advantage, but to the honor of God&apos;s name. In Hebrews 7:25, we read of Christ that He "ever liveth to make intercession for us" — His prayer, His petition before the Father, never fails. Like Hezekiah spreading the letter before the Lord, Christ brings before the Father every accusation against the name of God, every reproach spoken against His people, and intercedes that God&apos;s character be vindicated and His name be honored. The prayer that moves the hand of God is the prayer that seeks His glory above all else.',
        },
        {
          kind: 'carry',
          html:
            'Hezekiah does not pray for himself. He does not ask for safety as the ultimate goal. He prays that "all the kingdoms of the earth may know that thou art the Lord God, even thou only." This reframes what prayer is for. Prayer is not a request for comfort, though comfort may come. Prayer is a participation in God&apos;s work of making His character and power known. When you pray, do you pray for your own advantage, or do you pray that God&apos;s name be honored? Do you invite God to defend His own reputation by His action in your life?',
        },
        {
          kind: 'reflection',
          id: 'hz-prayer-spread',
          prompt: 'What burden or injustice do you need to spread before the Lord? What does it mean to invite God to defend His own name by acting in your situation?',
        },
      ],
    },

    /* ─── 2 Kings 19:20–34 — The Word of the Lord Through Isaiah ────────── */
    {
      ref: '2 Kings 19:20–34',
      title: 'The Word of the Lord Through the Prophet',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 20,
              spans: [
                t('Then Isaiah the son of Amoz sent to Hezekiah, saying, Thus saith the Lord God of Israel, That which thou hast prayed to me against Sennacherib king of Assyria I have heard.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('This is the word that the Lord hath spoken concerning him; The '),
                hy('virgin the daughter of Zion', 'hz-virgin-zion'),
                t(' hath despised thee, and laughed thee to scorn; the daughter of Jerusalem hath shaken her head at thee.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('Whom hast thou reproached and blasphemed? and against whom hast thou exalted thy voice, and lifted up thine eyes on high? even against the '),
                hp('Holy One of Israel', 'hz-holy-one'),
                t('.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('Therefore thus saith the Lord concerning the king of Assyria, He shall not come into this city, nor shoot an arrow there, nor come before it with shields, nor cast a bank against it.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('By the way that he came, by the same shall he return, and shall not come into this city, saith the Lord.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('For I will defend this city, to save it, for mine own sake, and for my servant David&apos;s sake.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'hz-virgin-zion',
          html:
            'Isaiah speaks of Jerusalem as "the virgin daughter of Zion" — a city that has never been conquered, that stands in her purity and dignity. The image is striking: surrounded by an enemy army, Jerusalem has been called weak, defenseless, doomed. But God sees her differently. She is a virgin — undefeated, belonging entirely to Him. She looks upon the mighty Assyrian king with scorn, as if his threats are nothing.',
        },
        {
          kind: 'hebrew',
          id: 'hz-qadosh',
          title: 'Qadosh — "Holy One"',
          script: 'קָדוֹשׁ',
          translit: '<strong>Qadosh</strong> · holy; set apart; separate from all else',
          description:
            'The Holy One of Israel is "qadosh" — entirely separate, utterly transcendent, set apart from all other powers and gods. To reproach the Holy One is to attack someone whose very nature is to be beyond the reach of human insult or power. Sennacherib has made the catastrophic mistake of supposing that a power that can be seen and measured — his armies, his archers — can stand against the One who is holy, uncreated, and eternal.',
        },
        {
          kind: 'commentary',
          id: 'hz-holy-one',
          html:
            'God identifies Himself as "the Holy One of Israel" — not merely a god among gods, but the one God who is set apart from all creation by His very nature. To blaspheme against the Holy One is to strike against the foundation of all reality. Sennacherib has challenged not a political rival, but the God who made heaven and earth. The outcome is not in doubt.',
        },
        {
          kind: 'commentary',
          id: 'hz-defend-own-sake',
          html:
            'God promises: "I will defend this city... for mine own sake, and for my servant David&apos;s sake." The deliverance is not earned by Jerusalem&apos;s righteousness or military strength. It is an act of grace, for the sake of God&apos;s own name and for the sake of the promise made to David. God acts because His reputation, His character, His faithfulness are at stake.',
        },
      ],
    },

    /* ─── 2 Kings 19:35–37 — The Angel of the Lord ────────────────────── */
    {
      ref: '2 Kings 19:35–37',
      title: 'The Angel Strikes the Assyrian Army',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            {
              number: 35,
              spans: [
                t('And it came to pass that night, that the '),
                hp('angel of the Lord', 'hz-angel-lord'),
                t(' went out, and smote in the camp of the Assyrians an hundred fourscore and five thousand: and when they arose early in the morning, behold, they were all dead corpses.'),
              ],
            },
            {
              number: 36,
              spans: [
                t('So Sennacherib king of Assyria departed, and went and returned, and dwelt at Nineveh.'),
              ],
            },
            {
              number: 37,
              spans: [
                t('And it came to pass, as he was worshipping in the house of Nisroch his god, that Adrammelech and Sharezer his sons smote him with the sword: and they escaped into the land of Ararat. And Esar-haddon his son reigned in his stead.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'hz-angel-lord',
          html:
            'In a single night, the angel of the Lord strikes down 185,000 Assyrians. The figure is so vast, the deliverance so complete and instantaneous, that it transcends military explanation. This is not a battle won by strategy or force of arms. This is an act of the divine will, executed by the angel of the Lord. The angel is God&apos;s instrument of judgment and salvation — the visible expression of God&apos;s power in history.',
        },
        {
          kind: 'hebrew',
          id: 'hz-malak',
          title: 'Malak — "Angel" or "Messenger"',
          script: 'מַלְאַךְ',
          translit: '<strong>Malak</strong> · angel; messenger; one sent on behalf of God',
          description:
            'The word malak means "messenger" or "one sent." An angel is not an independent power; the angel is God&apos;s agent, sent to accomplish God&apos;s will. The angel of the Lord who strikes down the Assyrians is the very presence of God&apos;s judgment made visible in history. In other passages, the angel of the Lord is identified with God Himself — God&apos;s personal engagement with history and His people.',
        },
        {
          kind: 'commentary',
          id: 'hz-morning-corpses',
          html:
            'The phrase "when they arose early in the morning, behold, they were all dead corpses" conveys both the suddenness and the totality of the judgment. The Assyrians went to sleep confident in their power, sure of their coming victory. They woke to find themselves surrounded by death. The catastrophe is so sudden, so complete, that it can only be explained as the work of the supernatural.',
        },
        {
          kind: 'commentary',
          id: 'hz-nisroch-judgment',
          html:
            'The irony deepens at the end of the chapter. Sennacherib escapes Jerusalem, but meets his own judgment in his homeland. While worshipping his god Nisroch, he is assassinated by his own sons. The man who blasphemed the living God, who declared that no god could stand before Assyrian power, dies not in battle, but in dishonor. His god could not save him. His sons could not be restrained. The final word belongs to God.',
        },
        {
          kind: 'christ',
          id: 'hz-christ-angel',
          title: 'Christ Connection — The Messenger of the Covenant',
          html:
            'The angel of the Lord who strikes down the Assyrians foreshadows the final judgment when Christ Himself will judge all nations and all powers that set themselves against God and His people. In Malachi 3:1, the prophet speaks of "the Messenger of the Covenant" — a figure identified throughout Scripture with Christ. The angel who silences blasphemers and destroys the enemies of God&apos;s people points to the final Judge and King who will vindicate God&apos;s name before all creation. Every accusation made against God, every reproach spoken against His people, will be answered when Christ returns in glory.',
        },
        {
          kind: 'carry',
          html:
            'The deliverance of Jerusalem teaches us that prayer changes things not because we are powerful, but because God is. Hezekiah did not defeat the Assyrians. He did not negotiate or compromise. He prayed, and God acted. When we face opposition, injustice, or enemies that seem overwhelming, we are called to the same faith: not to trust in our own strength or cleverness, but to bring the matter to God and trust that He will act for the sake of His own name.',
        },
        {
          kind: 'reflection',
          id: 'hz-angel-judgment',
          prompt: 'Where in your life do you need to trust that God will fight your battles, rather than relying on your own strength? What would it mean to lay down your weapons and let God defend His name through you?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 2 Kings 19',
    quote:
      'Hezekiah spreads the blasphemous letter before the Lord and prays that God will defend His own name. That night, the angel of the Lord strikes down 185,000 Assyrians. A prayer that seeks God&apos;s glory, not our own safety, moves the hand of God.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Kings 19 · Study Guide',
  },

  resources: [
    {
      id: 'brit-museum-sennacherib-siege',
      kind: 'museum',
      source: 'British Museum',
      label: 'Sennacherib&apos;s Invasion Accounts',
      url: 'https://www.britishmuseum.org/',
      description: 'Cuneiform records of Assyria&apos;s siege of Jerusalem and its miraculous deliverance.',
    },
    {
      id: 'sefaria-isaiah-hezekiah',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah and Hezekiah',
      url: 'https://www.sefaria.org/2_Kings.19',
      description: 'Isaiah&apos;s prophecy of deliverance during Sennacherib&apos;s siege of Jerusalem.',
    },
    {
      id: 'iaa-siloam-tunnel',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'Hezekiah&apos;s Tunnel and Siloam Inscription',
      url: 'https://www.antiquities.org.il/',
      description: 'Hezekiah&apos;s water engineering project bringing water into Jerusalem with Siloam inscription.',
    },
  ],
};
