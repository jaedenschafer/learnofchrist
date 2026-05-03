import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Kings 24 — The Fall of Jerusalem: Nebuchadnezzar's Siege
 *
 * In Jehoiakim's reign, Nebuchadnezzar king of Babylon marches against Judah.
 * The king submits, then rebels. The Lord sends bands of Chaldeans, Syrians,
 * Moabites, and Ammonites to destroy the land — judgment for Manasseh's sins
 * and innocent blood. Jehoiakim dies; his son Jehoiachin reigns 18 years old
 * for only 3 months. The city is besieged. All Jerusalem is carried away
 * captive — 10,000 mighty men, craftsmen, and smiths, including Daniel and
 * Ezekiel. The treasures of the temple are plundered. Zedekiah, Jehoiachin's
 * uncle, is installed as puppet king. The word of the Lord spoken by the
 * prophets comes to pass exactly. This is the end of the kingdom.
 */
export const KINGS_2_24: RichChapterContent = {
  bookSlug: '2-kings',
  bookName: '2 Kings',
  chapter: 24,

  estimatedMinutes: { beginner: 6, intermediate: 14, deep: 18 },
  intros: [
    'By the twenty-fourth chapter of 2 Kings, the kingdom of Judah stands at the edge of an abyss. The reign of good King Josiah has ended. His sons have turned from the Law. Kings rise and fall in rapid succession — some seeking to hold the line against the rising Babylonian empire, others buckling under pressure. The prophet Jeremiah has been warning for decades that Jerusalem will fall, that the temple will be destroyed, that the people will be led into exile. No one believes him. Now the judgment that has been threatened comes to pass.',
    'This chapter is a precise fulfillment of prophecy. Every event — the three-year vassalage, the bands of judgment, the emptying of the city, the deportation of the craftsmen and the mighty — unfolds exactly as the Lord&apos;s servants the prophets have spoken. And in the middle of this catastrophe, two figures emerge whose names will echo through the ages: Daniel and Ezekiel, carried away into Babylon to bear witness in the darkness that the God of Israel has not abandoned His people.',
  ],

  sections: [
    /* ─── 2 Kings 24:1–4 — Jehoiakim's Rebellion and God&apos;s Judgment ────── */
    {
      ref: '2 Kings 24:1–4',
      title: 'Jehoiakim&apos;s Rebellion: The Judgment Begins',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 1,
              spans: [
                t('In his days '),
                hy('Nebuchadnezzar king of Babylon', 'nebuchadnezzar-comes'),
                t(' came up, and Jehoiakim became his servant three years: then he turned and rebelled against him.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And the Lord sent against him '),
                hg('bands of the Chaldees, and bands of the Syrians, and bands of the Moabites, and bands of the children of Ammon', 'multinational-invasion'),
                t(', and sent them against Judah to destroy it, according to the word of the Lord, which he spake by his servants the prophets.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Surely at the commandment of the Lord came this upon Judah, to remove them out of his sight, for the sins of Manasseh, according to all that he did;'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And also for the innocent blood that he shed: for he filled Jerusalem with innocent blood; which the Lord would not pardon.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'nebuchadnezzar-comes',
          html:
            'Nebuchadnezzar, king of Babylon, is the instrument of God&apos;s judgment — though he does not know it. In the closing chapters of Isaiah, the Lord will call Cyrus the Persian His "servant" because Cyrus carries out God&apos;s purposes (Isa. 45:1). Here, Nebuchadnezzar serves the same role without understanding what he is doing. He comes to conquer Judah, and Judah submits. For three years, Jehoiakim pays tribute and bows before Babylon. Then he makes a fatal decision: he rebels.',
        },
        {
          kind: 'commentary',
          id: 'multinational-invasion',
          html:
            'The Lord does not send Nebuchadnezzar&apos;s army alone. He sends bands of Chaldeans, Syrians, Moabites, and Ammonites — a multinational force orchestrated by God Himself to bring judgment. The text is explicit: "the Lord sent against him" — this is not the mere politics of empires, this is the direct action of God. And the reason is stated with crushing clarity: judgment has come "according to the word of the Lord, which he spake by his servants the prophets."',
        },
        {
          kind: 'hebrew',
          id: 'gelalim',
          title: 'Gelalim — "Bands" or "Raiding Parties"',
          script: 'גְדוּדִים',
          translit: '<strong>Gelalim</strong> · bands; raiding parties; roving companies of soldiers',
          description:
            'The word used for these invading forces is <em>gelalim</em> — literally "bands" or "raiding companies." These are not just armies, but raiders sent to harass, to destroy, to make the land uninhabitable. The use of this word emphasizes the totality of the judgment: the land is not merely conquered, it is overrun by bands of soldiers from multiple nations, all working toward one end — the destruction of Judah.',
        },
        {
          kind: 'commentary',
          id: 'manasseh-sins',
          html:
            'The judgment, the text tells us, comes for "the sins of Manasseh, according to all that he did." Manasseh was a king who reigned over 55 years and filled Jerusalem with idolatry and bloodshed. Though he repented late in his reign, his sins accumulated like a spiritual debt that the nation could not pay. And then the text adds one more reason: "innocent blood that he shed: for he filled Jerusalem with innocent blood; which the Lord would not pardon." The shedding of innocent blood is a sin that Scripture does not pass over lightly. God hears the cry of the innocent (Genesis 4:10). Manasseh&apos;s blood guilt has become the nation&apos;s liability. The judgment is just.',
        },
        {
          kind: 'carry',
          html:
            'The decision to rebel seems simple — a king deciding to throw off a foreign yoke. But the text shows us that the rebellion is not merely political; it is theological. Jehoiakim rebels because he has forgotten who the real King is. He has forgotten that Judah&apos;s fate is not in the hands of the Babylonian king, but in the hands of God. And that God has made His will clear through His prophets. When we forget God&apos;s word, we make decisions that bring judgment upon ourselves. What words from Scripture have you forgotten or ignored, and what has that cost you?',
        },
        {
          kind: 'reflection',
          id: 'jehoiakim-rebellion',
          prompt: 'Jehoiakim rebelled after three years of vassalage, perhaps thinking the time was right to throw off Babylon&apos;s yoke. What makes a person feel that they can ignore God&apos;s warnings? And how do you discern between legitimate resistance and foolish rebellion?',
        },
      ],
    },

    /* ─── 2 Kings 24:5–7 — The Death of Jehoiakim ───────────────────────── */
    {
      ref: '2 Kings 24:5–7',
      title: 'The Acts of Jehoiakim',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            plain(5, 'Now the rest of the acts of Jehoiakim, and all that he did, are they not written in the book of the chronicles of the kings of Judah?'),
            plain(6, 'So Jehoiakim slept with his fathers: and Jehoiachin his son reigned in his stead.'),
            plain(7, 'And the king of Egypt came not again any more out of his land: for the king of Babylon had taken from the river of Egypt unto the river Euphrates all that pertained to the king of Egypt.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jehoiakim-sleep-fathers',
          html:
            'Jehoiakim "slept with his fathers" — the biblical phrase for death. But the brevity of this statement masks a failure. A king who rebelled, who rejected the word of the prophets, who filled the kingdom with his own will rather than God&apos;s — he dies without redemption, without repentance. The phrase "all that he did" points us to the fuller record in the Chronicles, but the lesson here is stark: rebellion leads to death, and the reign of the rebellious king ends not in victory, but in the darkness of the grave.',
        },
        {
          kind: 'commentary',
          id: 'egypt-defeated',
          html:
            'The king of Egypt comes not again out of his land. Egypt, once the dominant power in the ancient Near East, has been defeated by Babylon. The geopolitical reality has shifted. Babylon now controls everything from the river of Egypt to the river Euphrates. The small kingdoms caught between these empires — Judah among them — have no escape. They are trapped. And Judah made the worst possible choice: they rebelled against the one power that now held their fate.',
        },
      ],
    },

    /* ─── 2 Kings 24:8–12 — Jehoiachin Reigns and Falls ──────────────────── */
    {
      ref: '2 Kings 24:8–12',
      title: 'Jehoiachin the Young King',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 8,
              spans: [
                hy('Jehoiachin', 'jehoiachin-intro'),
                t(' was eighteen years old when he began to reign, and he reigned in Jerusalem three months. And his mother&apos;s name was Nehushta, the daughter of Elnathan of Jerusalem.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And he did that which was evil in the sight of the Lord, according to all that his father had done.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('At that time the servants of Nebuchadnezzar king of Babylon came up against Jerusalem, and the city was besieged.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And Nebuchadnezzar king of Babylon came against the city, and his servants did besiege it.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And '),
                hp('Jehoiachin king of Judah went out to the king of Babylon', 'jehoiachin-surrender'),
                t(', he, and his mother, and his servants, and his princes, and his officers: and the king of Babylon took him in the eighth year of his reign.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jehoiachin-intro',
          html:
            'Jehoiachin is eighteen years old when he becomes king — a boy, really, elevated to the throne in the midst of a crisis. He reigns for only three months. In that brief period, he does "that which was evil in the sight of the Lord, according to all that his father had done." The sin of Jehoiakim is not Jehoiachin&apos;s fault, yet Jehoiachin inherits both the throne and the consequences. This is the weight of generational sin: the father&apos;s rebellion becomes the son&apos;s doom.',
        },
        {
          kind: 'commentary',
          id: 'jehoiachin-surrender',
          html:
            'When Nebuchadnezzar himself arrives to besiege the city, Jehoiachin makes the rational choice: he goes out to the king of Babylon and surrenders. He brings his mother, his servants, his princes, his officers — the entire royal household. The text notes this happens "in the eighth year of his reign" — not the eighth year of Jehoiachin&apos;s reign (which is only three months old), but the eighth year of Nebuchadnezzar&apos;s reign over Babylon. This is a note of precise historical dating, anchoring the prophecies of Jeremiah and Ezekiel to the very moment of the city&apos;s fall.',
        },
        {
          kind: 'hebrew',
          id: 'jehoiachin-name',
          title: 'Yehoyachin — "The Lord Will Establish"',
          script: 'יְהוֹיָכִין',
          translit: '<strong>Yehoyachin</strong> · God establishes; "The Lord will establish"',
          description:
            'The name Jehoiachin means "The Lord Will Establish" — a name laden with hope. Yet the boy who bears this name is carried away into captivity at eighteen years old, reigning for only three months. The irony is bitter: his name proclaims what will not happen to him. Yet the meaning of the name points to something deeper: even in exile, the Lord will not abandon Jehoiachin or his line. His throne will be restored.',
        },
      ],
    },

    /* ─── 2 Kings 24:13–16 — The Temple Despoiled and All Jerusalem Carried Away ──── */
    {
      ref: '2 Kings 24:13–16',
      title: 'The Despoiling of the Temple and the Great Deportation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 13,
              spans: [
                t('And he carried out thence all the treasures of the house of the Lord, and the treasures of the king&apos;s house, and '),
                hg('cut in pieces all the vessels of gold', 'vessels-gold'),
                t(' which Solomon king of Israel had made in the temple of the Lord, as the Lord had said.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And he carried away all Jerusalem, and all the princes, and all the mighty men of valour, even ten thousand captives, and all the craftsmen and smiths: '),
                hg('none remained, save the poorest sort of the people of the land', 'poorest-remain'),
                t('.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And he carried away Jehoiachin to Babylon, and the king&apos;s mother, and the king&apos;s wives, and his officers, and the mighty of the land: those carried he into captivity from Jerusalem to Babylon.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And all the men of might, even seven thousand, and craftsmen and smiths a thousand, all that were strong and apt for war, even them the king of Babylon brought captive to Babylon.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'vessels-gold',
          html:
            'The vessels of gold that Solomon had made for the temple are cut to pieces. These are not ordinary treasures — they are instruments of worship, vessels used in the presence of the Lord. The temple itself, which Hezekiah had kept intact when the Assyrians threatened two centuries earlier, now sees its treasure torn apart. The text says this happens "as the Lord had said" — connecting this terrible act to prophecy. It is as if the Lord has already spoken the destruction of His own temple&apos;s wealth.',
        },
        {
          kind: 'commentary',
          id: 'poorest-remain',
          html:
            'All Jerusalem is carried away except the poorest sort of the people. This is a catastrophe of such totality that only the destitute remain. The princes, the mighty men of valor, the craftsmen, the smiths — all removed. The strategic evacuation of the skilled workers is a standard practice of imperial conquest, designed to impoverish the nation and ensure it cannot easily rebuild. But it is also, from the biblical perspective, a punishment: the land is emptied, the city is stripped, the kingdom is decapitated. Only the poorest, the weak, the least able to resist or support a rebellion, are left behind.',
        },
        {
          kind: 'hebrew',
          id: 'golah-diaspora',
          title: 'Golah — "Exile" or "Diaspora"',
          script: 'גּוֹלָה',
          translit: '<strong>Golah</strong> · exile; captivity; the dispersed people',
          description:
            'The Hebrew word <em>golah</em> refers to exile or diaspora — the carrying away of a people into captivity. This is the first great <em>golah</em>, the exile that inaugurates the Babylonian captivity. Among those carried away are Daniel and Ezekiel, who will bear witness to the truth of God in a foreign land. The <em>golah</em> is not, in the biblical perspective, merely a political disaster; it is a spiritual testing and a refinement, a place where faith is forged in the furnace of displacement.',
        },
        {
          kind: 'carry',
          html:
            'The specificity of the numbers in this passage — 10,000 captives, 7,000 men of might, 1,000 craftsmen and smiths — tells us that this was an orderly, calculated removal. Not a chaos of conquest, but a methodical stripping of the nation&apos;s strength. And the text notes that among those 10,000 who are carried away are Daniel and Ezekiel. They do not go as prisoners of war in the ordinary sense; they go as men whose God will speak through them in the exile. In their captivity, they become witnesses. Sometimes our exile is the place where God does His deepest work in us.',
        },
        {
          kind: 'reflection',
          id: 'deportation',
          prompt: 'The text lists the categories of people taken: princes, mighty men, craftsmen, smiths. What do these groups have in common? And what might the loss of these groups mean for a nation that is left behind?',
        },
      ],
    },

    /* ─── 2 Kings 24:17–20 — Zedekiah the Puppet King ──────────────────── */
    {
      ref: '2 Kings 24:17–20',
      title: 'Zedekiah: The Puppet and the Rebel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 17,
              spans: [
                t('And the king of Babylon made '),
                hy('Mattaniah', 'mattaniah-name'),
                t(' his father&apos;s brother '),
                hp('king in his stead', 'zedekiah-puppet'),
                t(', and '),
                hy('changed his name to Zedekiah', 'zedekiah-name'),
                t('.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Zedekiah was twenty and one years old when he began to reign, and he reigned eleven years in Jerusalem. And his mother&apos;s name was Hamutal, the daughter of Jeremiah of Libnah.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And he did that which was evil in the sight of the Lord, according to all that Jehoiakim had done.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('For through the anger of the Lord it came to pass in Jerusalem and Judah, until he had cast them out from his presence, that '),
                hp('Zedekiah rebelled against the king of Babylon', 'zedekiah-rebellion'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'mattaniah-name',
          html:
            'Mattaniah is Jehoiachin&apos;s uncle. He is a member of the royal family, and Nebuchadnezzar sees in him a useful figure — a king of Judah who will rule under Babylon&apos;s authority. Nebuchadnezzar does not simply appoint a foreign governor; he appoints a puppet king, a man with a claim to legitimacy among his own people. It is a strategy of control: let the people have their king, but make sure he answers to Babylon.',
        },
        {
          kind: 'commentary',
          id: 'zedekiah-puppet',
          html:
            'By making a member of the royal house king, Nebuchadnezzar ensures the appearance of continuity. But it is a phantom continuity. The real power rests in Babylon. Zedekiah is a king in name only, a puppet moved by Babylonian will. Yet the text tells us that this arrangement is itself God&apos;s doing — the king of Babylon acts, but God permits. And the irony runs deep: even the puppet king will eventually rebel, setting in motion the final destruction of the city and the temple.',
        },
        {
          kind: 'hebrew',
          id: 'zedekiah-name',
          title: 'Zedekiah — "My Righteousness Is the Lord"',
          script: 'צִדְקִיָּ֫הוּ',
          translit: '<strong>Tzidqiyahu</strong> · "My Righteousness Is the Lord" or "God&apos;s Justice"',
          description:
            'Mattaniah&apos;s name is changed to Zedekiah, which means "My Righteousness Is the Lord" or "God&apos;s Justice." The change of name echoes the renaming of Abram to Abraham, of Saul to Paul — a change meant to mark a new role or destiny. Yet Zedekiah, bearing a name that proclaims God&apos;s righteousness, will do evil in the sight of the Lord and will rebel against the very king to whom he swore allegiance. The name becomes ironic: a man bearing the name of God&apos;s justice will act unjustly and will bring the full weight of God&apos;s justice down upon his nation.',
        },
        {
          kind: 'commentary',
          id: 'zedekiah-rebellion',
          html:
            'The chapter closes with a forward glance. It tells us that "through the anger of the Lord," Zedekiah will rebel against the king of Babylon. This rebellion is not a separate event from God&apos;s anger; it is the consequence of it. The anger of the Lord comes to pass in Jerusalem and Judah "until he had cast them out from his presence" — and that casting out is enacted through the rebellion that will bring final judgment. Zedekiah, like his predecessor Jehoiakim, will choose to rebel. And his rebellion will bring the destruction of the temple and the complete emptying of the land. This final rebellion will be the subject of 2 Kings 25.',
        },
        {
          kind: 'christ',
          id: 'exile-christ',
          title: 'Christ Connection — The King Exiled for Our Sake',
          html:
            'Jehoiachin goes into exile at eighteen years old, carrying with him the weight of his nation&apos;s sins. He has done evil, yes, but the judgment that falls upon him is heavier than his personal sin warrants — it is the accumulated weight of the nation&apos;s rebellion. This pattern echoes in the New Testament when the sinless King bears the sin of the world. Jesus is taken from His own people and exiled, in a sense, to a cross outside the city — "outside the gate" (Hebrews 13:12), exiled from Jerusalem, exiled from the temple, exiled from the comfort of His own community. He bears the judgment that belongs to all of us. And like Jehoiachin, whose line God will preserve and restore (Jeremiah 52:31–34), Jesus will rise and ascend, and His kingdom will be restored. "If we endure, we also shall reign with him" (2 Timothy 2:12).',
        },
        {
          kind: 'carry',
          html:
            'The temple has been despoiled. The city has been emptied. The king has been taken captive. Yet the story does not end here. Even in exile, God does not abandon His people. Daniel in Babylon prays toward Jerusalem. Ezekiel by the river Chebar receives visions of the glory of God. The prophets speak that a return will come, that Jerusalem will be rebuilt. Zedekiah will rebel and the temple will fall, but the faith of the people of God will not fall. Sometimes we are called to be faithful not in victory, but in exile; not in the possession of the temple, but in its absence; not in the kingdom of this world, but in the kingdom that is yet to come.',
        },
        {
          kind: 'reflection',
          id: 'zedekiah-puppet',
          prompt: 'Zedekiah is made king by a foreign power, yet he is still called "king of Judah." How do you distinguish between legitimate authority and authority granted by force? And what does it mean to give allegiance to a king who rules under the shadow of another power?',
        },
      ],
    },

    /* ─── Divider ──────────────────────────────────────────────────── */
    {
      blocks: [
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── Epilogue: The Word Spoken by the Prophets ─────────────────── */
    {
      title: 'The Word Spoken by the Prophets',
      blocks: [
        {
          kind: 'commentary',
          html:
            'The refrain that runs through 2 Kings 24 is: "as the Lord had said." The vessels are cut in pieces "as the Lord had said" (verse 13). The judgment comes "according to the word of the Lord, which he spake by his servants the prophets" (verse 2). The exile that Jeremiah and Ezekiel have been preaching for decades comes to pass exactly as they have spoken. The text is not a record of history that simply happened; it is a record of God&apos;s word fulfilling itself. Every prophecy comes true. Every warning proves accurate. And the hardest truth for readers to hear: the judgment was just. The sins of Manasseh, the rebellion of Jehoiakim, the idolatry of the people — these accumulated into a debt that could only be paid by exile.',
        },
        {
          kind: 'commentary',
          html:
            'Yet even here, at the nadir of Judah&apos;s history, the promise has not been withdrawn. Jehoiachin is carried away, but the text will later tell us (2 Kings 25:27–30) that he is released from prison and honored in Babylon — a sign that the line of David has not been utterly cut off. Daniel and Ezekiel will minister in the exile. Jeremiah will proclaim that in seventy years, the people will return. And in the fullness of time, another King will come from Judah — the King without end, the One whose kingdom cannot be shaken. The exile is real. The judgment is just. But the hope is not taken away.',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 2 Kings 24',
    quote:
      'The vessels of gold are cut in pieces. The city is emptied. The king is taken captive. Yet even in exile, the word of the Lord does not fail. "According to the word of the Lord, which he spake by his servants the prophets."',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Kings 24 · Study Guide',
  },

  hasHebrew: true,
};
