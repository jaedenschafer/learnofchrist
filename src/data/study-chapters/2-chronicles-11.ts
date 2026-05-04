import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Chronicles 11 — Rehoboam Strengthens Judah
 *
 * After his hasty pursuit of rebellion, Rehoboam learns that the kingdom is
 * divided by God&apos;s own hand. He turns back. He fortifies cities. And then
 * something remarkable happens: the Levites and priests, cast off by Jeroboam&apos;s
 * idolatry, leave the north and come south to Jerusalem. Their hearts set on
 * seeking the Lord, they strengthen the kingdom of Judah. For three years,
 * Rehoboam walks in the way of David and Solomon. But then he takes many wives.
 * The seeds of decline are sown.
 */
export const CHRONICLES_2_11: RichChapterContent = {
  bookSlug: '2-chronicles',
  bookName: '2 Chronicles',
  chapter: 11,

  estimatedMinutes: { beginner: 3, intermediate: 7, deep: 11 },
  topicTags: ['kingship', 'worship', 'judgment', 'repentance'],
  opener: {
    topical: true,
    caption: '2 Chronicles 11',
  },
  intros: [
    'The kingdom is divided. Rehoboam, the new king, rushes north with 180,000 soldiers to crush the rebellion of Jeroboam and bring Israel back under his rule. But then the word of the Lord comes to Shemaiah the prophet: "Speak unto Rehoboam... Ye shall not go up, nor fight against your brethren: return every man to his house: for THIS THING IS DONE OF ME." It is God, not Jeroboam&apos;s strength, who has torn the kingdom apart. Rehoboam obeys. He turns back.',
    'What follows is a season of building — fortified cities, strong walls, stored provision. Judah is prepared. But more profoundly, the kingdom is strengthened by a migration of hearts. When Jeroboam establishes idolatrous worship in the north, setting up calves and priests for the "high places," the faithful abandon the north. Priests and Levites come to Jerusalem. Then, from all the tribes of Israel, those whose hearts seek the Lord God come too. Three years pass in faithfulness — three years they walk in the way of David and Solomon. But even as the kingdom grows strong, the seeds of its weakness are planted. Rehoboam takes many wives and multiplies his sons. Power, comfort, and the desires of the flesh begin their quiet work.',
  ],

  bottomShare: {
    label: 'Share 2 Chronicles 11',
    quote:
      'When faithful hearts seek the Lord and leave idolatry, they strengthen the kingdom. But the desires of the flesh—many wives, many children, the multiplication of self—begin the decline that will follow.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Chronicles 11 · Study Guide',
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
      id: 'sefaria-2-chronicles-11',
      kind: 'study',
      source: 'Sefaria',
      label: '2 Chronicles 11 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/II_Chronicles.11',
      description: 'The Hebrew text of 2 Chronicles 11 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },
    {
      id: 'bibleodyssey-2-chronicles-overview-11',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: '2 Chronicles — SBL Overview',
      url: 'https://www.bibleodyssey.org/articles/2-chronicles/',
      description: 'Open-access SBL essay on the historical and literary setting of 2 Chronicles.',
    },

  ],

  sections: [
    /* ─── 2 Chronicles 11:1–4 — Shemaiah Stops the War ──────────────────── */
    {
      ref: '2 Chronicles 11:1–4',
      title: 'Shemaiah&apos;s Word Stops the War',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(1, 'And when Rehoboam was come to Jerusalem, he gathered of the house of Judah and Benjamin an hundred and fourscore thousand chosen men, which were warriors, to fight against Israel, that he might bring the kingdom again to Rehoboam.'),
            plain(2, 'But the word of the Lord came to Shemaiah the man of God, saying,'),
            plain(3, 'Speak unto Rehoboam the son of Solomon, king of Judah, and to all Israel in Judah and Benjamin, saying,'),
            plain(4, 'Thus saith the Lord, Ye shall not go up, nor fight against your brethren: return every man to his house: for this thing is done of me. And they obeyed the words of the Lord, and returned from going against Jeroboam.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rehoboam-gathers-army',
          html:
            'Rehoboam has just lost the northern kingdom. His harshness and pride have driven ten tribes away. His first instinct is military: gather 180,000 chosen warriors, men of war, and fight to restore what he has lost. The impulse is human — to use force to recover what has been taken. [res:iaa-judah-monarchy]',
        },
        {
          kind: 'commentary',
          id: 'shemaiah-speaks',
          html:
            'But then the word of the Lord comes through the prophet Shemaiah. The message is stark: "Ye shall not go up." Stop. Return to your houses. And the reason is decisive: "This thing is done of me." The division is not Jeroboam&apos;s work, or a failure of Rehoboam&apos;s strength. It is God&apos;s doing. And God is not reversing it through war[res:sefaria-2-chronicles-11][res:bibleodyssey-2-chronicles-overview-11].',
        },
        {
          kind: 'hebrew',
          id: 'h-dabbar-yhwh',
          title: 'Dabbar Yahweh — "The Word of the Lord"',
          script: 'דְּבַר יְהוָה',
          translit: '<strong>Dabbar Yahweh</strong> · the word of the Lord; God&apos;s spoken instruction',
          description:
            'Throughout the Chronicles, "the word of the Lord" comes to redirect the king&apos;s will. It is not a suggestion or an interpretation. It is divine instruction that stands between human intention and human action. When Shemaiah speaks, Rehoboam must choose to obey or rebel. He chooses obedience.',
        },
        {
          kind: 'carry',
          html:
            'We make plans. We gather our strength. We prepare our arguments for why we are right and should fight for what we believe is ours. And sometimes, God says: Stop. This is not yours to fight for. This is not yours to control. The hardest wisdom is knowing when our strength is not the solution — when obedience to God means releasing the very thing we are trying to hold.',
        },
        {
          kind: 'reflection',
          id: 'shemaiah-stops-war',
          prompt: 'Have you ever been stopped from pursuing something you were certain was right? What was it like to learn that God had other plans?',
        },
      ],
    },

    /* ─── 2 Chronicles 11:5–12 — Rehoboam Fortifies the Cities ───────────── */
    {
      ref: '2 Chronicles 11:5–12',
      title: 'The Fortified Cities of Judah',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(5, 'And Rehoboam dwelt in Jerusalem, and built cities for defence in Judah:'),
            plain(6, 'He built even Bethlehem, and Etam, and Tekoa,'),
            plain(7, 'And Beth-zur, and Shoco, and Adullam,'),
            plain(8, 'And Gath, and Mareshah, and Ziph,'),
          ],
        },
        {
          kind: 'commentary',
          id: '2-chronicles-11-mid-8',
          html:
            '<p>The construction progresses: each phase brought the temple closer to completion.</p>',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(9, 'And Adoraim, and Lachish, and Azekah,'),
            plain(10, 'And Zorah, and Aijalon, and Hebron, which are in Judah and in Benjamin fenced cities.'),
            plain(11, 'And he fortified the strong holds, and put captains in them, and store of victual, and of oil and wine.'),
            plain(12, 'And in every several city he put shields and spears, and made them exceeding strong, having Judah and Benjamin on his side.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'defense-cities',
          html:
            'Rehoboam&apos;s strategy shifts from warfare to preparation. He builds cities for defense, not conquest. Bethlehem, Tekoa, Lachish, Hebron — the great strongholds of the south are fortified. This is prudent statecraft. The kingdom is vulnerable. But the fortification is not for vengeance; it is for survival and stability.',
        },
        {
          kind: 'hebrew',
          id: 'h-bitzaron',
          title: 'Bitzaron — "Stronghold" or "Fortified City"',
          script: 'בִּצָּרוֹן',
          translit: '<strong>Bitzaron</strong> · stronghold; fortified refuge',
          description:
            'A bitzaron is a city built with walls, gates, and towers — a place of refuge and strength. In the covenant language of the Psalms, God himself is called a bitzaron: "The Lord is my rock, my fortress, and my deliverer" (Psalm 18:2). To fortify the cities is to provide for the people&apos;s safety, to create places of refuge.',
        },
        {
          kind: 'commentary',
          id: 'provisions-shields',
          html:
            'Each city receives not only walls, but stores — victual, oil, wine. Captains are appointed. Shields and spears are distributed. This is total preparation: spiritual leaders (captains), material resources, and the tools of defense. Judah and Benjamin, the faithful remnant, are secure.',
        },
        {
          kind: 'carry',
          html:
            'After loss and correction, Rehoboam does not despair or strike back. He builds. He plans. He strengthens what remains. This is the quiet work of restoration — not dramatic, not vengeful, but steady and wise. What has been broken in your life? What would it look like to build it back, brick by brick, with patience and provision?',
        },
        {
          kind: 'reflection',
          id: 'fortified-cities',
          prompt: 'When you face loss or setback, do you retreat into despair, or do you rebuild? What spiritual "strongholds" do you need to fortify in your own life?',
        },
      ],
    },

    /* ─── 2 Chronicles 11:13–17 — Levites and Seekers Come South ─────────── */
    {
      ref: '2 Chronicles 11:13–17',
      title: 'Faithful Priests and Levites Leave Idolatry',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(13, 'And the priests and the Levites that were in all Israel resorted to him out of all their coasts.'),
            plain(14, 'For the Levites left their suburbs and their possession, and came to Judah and to Jerusalem: for Jeroboam and his sons had cast them off from executing the priest&apos;s office unto the Lord;'),
            plain(15, 'And he ordained him priests for the high places, and for the devils, and for the calves which he had made.'),
            plain(16, 'And after them out of all the tribes of Israel such as set their hearts to seek the Lord God of Israel came to Jerusalem, to sacrifice unto the Lord God of their fathers.'),
            plain(17, 'So they strengthened the kingdom of Judah, and made Rehoboam the son of Solomon strong, three years: for three years they walked in the way of David and Solomon.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'levites-leave-north',
          html:
            'Jeroboam has cast off the Levites and priests from their sacred office — the ministry of God. Instead, he has ordained priests for the high places, for carved images (the "devils," or goat-idols), and for the calves he has made. When the channels of true worship are closed by a ruler&apos;s idolatry, the faithful abandon them.',
        },
        {
          kind: 'hebrew',
          id: 'h-leviyim',
          title: 'Leviyim — "Levites"',
          script: 'לֵוִיִּים',
          translit: '<strong>Leviyim</strong> · Levites; the priestly tribe set apart for the Lord&apos;s service',
          description:
            'The Levites are the tribe set apart for worship, teaching, and service in the tabernacle and temple. When a ruler shuts them out from their calling and replaces them with idolatrous priests, the Levites themselves become migrants — they must leave their possessions and inheritance to follow faithfulness.',
        },
        {
          kind: 'commentary',
          id: 'hearts-seek-lord',
          html:
            'But the migration is not limited to priests and Levites. "After them out of all the tribes of Israel such as set their hearts to seek the Lord God of Israel came to Jerusalem." The principle is clear: wherever idolatry rules, faithful hearts will leave. Wherever the Lord is truly sought, they will gather.',
        },
        {
          kind: 'hebrew',
          id: 'h-nashim',
          title: 'Nashat — "Set Their Hearts"',
          script: 'נָתַן לֵב',
          translit: '<strong>Nashat lev</strong> · set the heart; determined intention',
          description:
            'To "set the heart" is to make a fixed commitment, a deliberate choice. These are not people swept along by circumstance. They have intentionally placed their hearts in pursuit of the Lord. Their choice to leave idolatry is an act of covenant commitment.',
        },
        {
          kind: 'commentary',
          id: 'three-years-faithfulness',
          html:
            'The result: "Three years they walked in the way of David and Solomon." The kingdom is strengthened not by Rehoboam&apos;s military might, but by faithful hearts — by priests, Levites, and seekers who choose the Lord&apos;s way over the corrupted worship of the north. This is a window of grace, a season when the kingdom is truly aligned with its calling. But it will not last.',
        },
        {
          kind: 'christ',
          id: 'christ-kingdom-seekers',
          title: 'Christ Connection — The King Whose People Seek Him',
          html:
            'Christ is the King whose kingdom is built on those who seek Him. Not on military power, not on numbers, but on faithful hearts that abandon every rival and come to Him. "Blessed are they that dwell in thy house: they will be still praising thee" (Psalm 84:4). The Levites left their inheritance to serve the Lord; seekers left their tribes and came to worship. In Christ, all who abandon the idols of their own making and "set their hearts" to seek Him become citizens of His kingdom (Ephesians 1:3–14).',
        },
        {
          kind: 'carry',
          html:
            'What idols have you inherited from the place you came from? What would it cost you to abandon them and seek the Lord instead? The Levites and the seekers left their homes, their possessions, their familiar structures. They chose faithful worship over comfort. Their courage is a mirror held up to our own.',
        },
        {
          kind: 'reflection',
          id: 'seekers-come-south',
          prompt: 'Have you ever had to leave something familiar behind to follow the Lord more faithfully? What did you gain, and what did you lose?',
        },
      ],
    },

    /* ─── 2 Chronicles 11:18–23 — Many Wives, Seeds of Decline ───────────── */
    {
      ref: '2 Chronicles 11:18–23',
      title: 'Many Wives and the Beginning of Decline',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(18, 'And Rehoboam took him Mahalath the daughter of Jerimoth the son of David to wife, and Abihail the daughter of Eliab the son of Jesse;'),
            plain(19, 'Which bare him children; Jeush, and Shamariah, and Zaham.'),
            plain(20, 'And after her he took Maachah the daughter of Absalom; which bare him Abijah, and Attai, and Ziza, and Shelomith.'),
            plain(21, 'And Rehoboam loved Maachah the daughter of Absalom above all his wives and his concubines: for he took eighteen wives, and threescore concubines; and begat twenty and eight sons, and threescore daughters.'),
            plain(22, 'And Rehoboam made Abijah the son of Maachah the chief, to be ruler among his brethren: for he thought to make him king.'),
            plain(23, 'And he dealt wisely, and dispersed of all his children throughout all the countries of Judah and Benjamin, unto every fenced city: gave them victual in abundance. And he desired many wives.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rehoboam-many-wives',
          html:
            'Even as Judah is strengthened by faithful hearts seeking the Lord, Rehoboam is multiplying his own desires. Eighteen wives. Sixty concubines. Twenty-eight sons and sixty daughters. The numbers are staggering. What begins as statecraft — marrying into various families for political alliance — becomes a symbol of appetite, of multiplying self.',
        },
        {
          kind: 'hebrew',
          id: 'h-nashim-2',
          title: 'Nashim — "Wives"',
          script: 'נָשִׁים',
          translit: '<strong>Nashim</strong> · wives; women in covenant of marriage',
          description:
            'The Hebrew word for wives is the feminine form of the word for "man" — they are companions, partners, bearers of covenant. Yet when multiplied beyond the covenant order, they become a sign of excess, of a king who has separated himself from the law. Moses commanded: the king "shall not multiply horses to himself, nor cause the people to return to Egypt... Neither shall he multiply wives to himself, that his heart turn not away" (Deuteronomy 17:16–17).',
        },
        {
          kind: 'commentary',
          id: 'maachah-favored',
          html:
            'Of all his wives, Rehoboam loves Maachah, daughter of Absalom, most. And he places her son Abijah above all his brothers, intending to make him king. This partiality — favoring one wife, favoring one son — is the beginning of internal division. A house divided against itself cannot stand.',
        },
        {
          kind: 'commentary',
          id: 'wisely-dispersed',
          html:
            'The text notes that Rehoboam "dealt wisely" by dispersing his children throughout the fortified cities, giving them provision. This is prudent — securing his sons in positions of power and security across the kingdom. But the same verse ends: "he desired many wives." The juxtaposition is telling. Even his wisdom is being corrupted by desire.',
        },
        {
          kind: 'christ',
          id: 'christ-one-bridegroom',
          title: 'Christ Connection — The One Bridegroom and One Bride',
          html:
            'Paul writes: "Husbands, love your wives, even as Christ also loved the church, and gave himself for it" (Ephesians 5:25–32). Christ has one Bride — the church, His people. The covenant of marriage is a shadow of the covenant Christ makes with His people: exclusive, sacrificial, eternal. When a king multiplies wives, he scatters his loyalty. When Christ loves the church, He gives Himself wholly, completely, without division. The pattern of one man, one woman, in permanent covenant, reflects something true about God Himself — His singular, exclusive commitment to His people.',
        },
        {
          kind: 'carry',
          html:
            'Rehoboam&apos;s story teaches a hard lesson. The kingdom was strengthened by faithful hearts who abandoned idolatry. For three years they walked in the way of David and Solomon. But the king himself was sowing the seeds of his own decline. The desires of the flesh — for many wives, for the multiplication of self — begin their quiet corruption. Even in the season of apparent blessing, the inward fracturing has begun. Do you see yourself in this? Where are your appetites taking you, even as you present yourself as faithful?',
        },
        {
          kind: 'reflection',
          id: 'many-wives',
          prompt: 'What does "multiplying" mean in your own life — what appetites, distractions, or divided loyalties are you feeding? What would it look like to be singular in your commitment to Christ?',
        },
      ],
    },
  ],
};
