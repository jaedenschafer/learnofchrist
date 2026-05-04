import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Chronicles 26 — The Gatekeepers, Treasurers, and Administrators
 *
 * The kingdom is built not by heroes alone, but by the faithful stewards
 * who tend the gates, guard the treasures, and administer justice across
 * the land. This chapter lists the divisions of the porters — the gatekeepers
 * assigned by lot to guard the house of the Lord. It names the treasurers
 * over the dedicated things, and the officers and judges scattered across
 * Israel, caring for every matter pertaining to God and the affairs of the
 * king. In the details of rotation and assignment, we see a kingdom run
 * with care. And in the faithfulness of the unseen servants, we see a
 * pattern of true power: delegation, trust, and the reward for faithful work.
 */
export const CHRONICLES_1_26: RichChapterContent = {
  bookSlug: '1-chronicles',
  bookName: '1 Chronicles',
  chapter: 26,

  estimatedMinutes: { beginner: 5, intermediate: 10, deep: 14 },
  topicTags: ['kingship', 'worship', 'covenant', 'faithfulness'],
  opener: {
    topical: true,
    caption: '1 Chronicles 26',
  },
  intros: [
    'The house of the Lord is finished. The ark rests in the inner sanctuary. And now David turns his attention to the intricate work of maintaining that house — not through one man&apos;s strength, but through the careful organization of thousands. This chapter reveals how a kingdom functions when every role is honored: the gatekeeper, the treasurer, the judge far from the capital. It is a chapter about stewardship — who watches the doors, who cares for the sacred treasures, who administers justice in the outlying towns. And it tells us something profound about what true kingship looks like: not one man ruling from a throne, but a king who trusts others, assigns them work, and watches over them with care.',
    'The assignment of gates and duties is done by lot — by casting lots, as the Lord&apos;s way of distributing work without favoritism. Whether you are assigned to the east gate or the north, whether you serve as gatekeeper or treasurer, the work is sacred. The smallest rotation is mentioned. The most distant judge is named. Nothing is too small for the kingdom of God to care about. And in this attention to detail, we see how the kingdom mirrors its King — one who knows every sparrow, who counts every hair, who sees the gatekeeper&apos;s faithful service in the dark hours before dawn.',
  ],

  bottomShare: {
    label: 'Share 1 Chronicles 26',
    quote:
      'The faithful work in the background — the gatekeepers, the treasurers, the judges — makes the kingdom possible. They are unseen but essential. Their service is sacred. And they are remembered.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Chronicles 26 · Study Guide',
  },

  resources: [
    {
      id: 'british-museum-david',
      kind: 'archaeology',
      source: 'British Museum',
      label: 'David in the Ancient Near East',
      url: 'https://www.britishmuseum.org/',
      description: 'British Museum collections on Iron Age Levantine kingdoms and David.',
    },
    {
      id: 'sefaria-1-chronicles-26',
      kind: 'study',
      source: 'Sefaria',
      label: '1 Chronicles 26 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/I_Chronicles.26',
      description: 'The Hebrew text of 1 Chronicles 26 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },
    {
      id: 'bibleodyssey-1-chronicles-overview-26',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: '1 Chronicles — SBL Overview',
      url: 'https://www.bibleodyssey.org/articles/1-chronicles/',
      description: 'Open-access SBL essay on the historical and literary setting of 1 Chronicles.',
    },

  ],

  sections: [
    /* ─── 1 Chronicles 26:1–19 — The Divisions of the Porters by Lot ──── */
    {
      ref: '1 Chronicles 26:1–19',
      title: 'The Gatekeepers Assigned by Lot',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            plain(
              1,
              'Concerning the divisions of the porters: Of the Korhites was Meshelemiah the son of Kore, of the sons of Asaph.',
            ),
            plain(
              2,
              'And the sons of Meshelemiah were, Zechariah the firstborn, Jediael the second, Zebadiah the third, Jathniel the fourth,',
            ),
            plain(
              3,
              'Elam the fifth, Jehohanan the sixth, Elioenai the seventh.',
            ),
            plain(
              4,
              'Moreover the sons of Obed-edom were, Shemaiah the firstborn, Jehozabad the second, Joah the third, and Sacar the fourth, and Nethaneel the fifth,',
            ),
            plain(
              5,
              'Ammiel the sixth, Issachar the seventh, Peulthai the eighth: for God blessed him.',
            ),
            plain(
              6,
              'Also unto Shemaiah his son were sons born, that ruled throughout the house of their father: for they were mighty men of valour.',
            ),
            plain(
              7,
              'The sons of Shemaiah; Othni, and Rephael, and Obed, Elzabad, whose brethren were strong men, Elihu, and Semachiah.',
            ),
            plain(
              8,
              'All these of the sons of Obed-edom: they and their sons and their brethren, able men for strength for the service, were threescore and two of Obed-edom.',
            ),
            plain(
              9,
              'And Meshelemiah had sons and brethren, strong men, eighteen.',
            ),
            plain(
              10,
              'Also Hosah, of the children of Merari, had sons; Simri the chief, (for though he was not the firstborn, yet his father made him the chief;)',
            ),
            plain(
              11,
              'Hilkiah the second, Tebaliah the third, Zechariah the fourth: all the sons and brethren of Hosah were thirteen.',
            ),
            plain(
              12,
              'Among these were the divisions of the porters, even among the chief men, having wards one against another, to minister in the house of the Lord.',
            ),
            {
              number: 13,
              spans: [
                t('And '),
                hg('they cast lots', '26-cast-lots'),
                t(', as well the small as the great, according to the house of their fathers, for every gate.'),
              ],
            },
            plain(
              14,
              'And the lot eastward fell to Shelemiah. Then for Zechariah his son, a wise counsellor, they cast lots; and his lot came out northward.',
            ),
            plain(
              15,
              'To Obed-edom southward; and to his sons the house of the storehouse.',
            ),
            plain(
              16,
              'To Shuppim and Hosah the lot came out westward, with the gate Shallecheth, by the causeway of the going up, ward against ward.',
            ),
            plain(
              17,
              'Eastward were six Levites, northward four a day, southward four a day, and toward the storehouse two and two.',
            ),
            plain(
              18,
              'At Parbar westward, four at the causeway, and two at Parbar.',
            ),
            plain(
              19,
              'These are the divisions of the porters among the sons of Kore, and among the sons of Merari.',
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '26-lineages',
          html:
            'The passage begins not with a grand narrative, but with a list. Meshelemiah, Obed-edom, Hosah. Their sons and their sons&apos; sons. Each name recorded. Each family assigned. This is how the work of the kingdom is done — not by one heroic figure, but by families, clans, lineages committed over generations. The porters are Levites, descendants of Kore, of Merari. They carry forward a sacred trust given to their ancestors. [res:british-museum-david]',
        },
        {
          kind: 'hebrew',
          id: '26-shoer',
          title: 'Shoer — "Gatekeeper" or "Porter"',
          script: 'שׁוֹעֵר',
          translit: '<strong>Shoer</strong> · gatekeeper; porter; one who guards the gate',
          description:
            'The word "shoer" comes from a root meaning "to open" — and perhaps also "to guard." A gatekeeper must both open the way for those who belong and guard against those who do not. The shoer stands at the threshold, the boundary between the outside and the sacred house. The role carries both welcome and vigilance. In ancient Israel, the gatekeeper was one of the most visible servants of the sanctuary — present at every hour, seen by everyone entering the house of God.',
        },
        {
          kind: 'commentary',
          id: '26-cast-lots',
          html:
            'The assignment of gates is done by casting lots — the ancient Israelite method of letting the Lord decide. No favoritism, no negotiation, no one choosing the "best" gate or the "easiest" shift. The small and the great cast lots together. A young gatekeeper and an elder receive assignments with equal gravity. The lot, in Scripture, is how the Lord&apos;s will is made known when humans cannot see the full picture. In the case of these gates, the lot says: this is your post. This is where you serve. This is your sacred work[res:sefaria-1-chronicles-26][res:bibleodyssey-1-chronicles-overview-26].',
        },
        {
          kind: 'carry',
          html:
            'We do not all do the same work. Some of us are called to be visible — teachers, leaders, those who speak. Some of us are called to stand at the threshold — the ones who tend the boundaries, who keep watch, who notice what is trying to enter and what is trying to leave. This is not a lesser calling. The gatekeeper is not waiting for more important work. The gatekeeper&apos;s work is the sacred work of protection and welcome. Ask yourself: where do I stand? What boundary am I guarding? What threshold am I keeping? Is my post small in the eyes of the world? It is never small in the eyes of God.',
        },
        {
          kind: 'reflection',
          id: '26-casting-lots',
          prompt:
            'The lots are cast to assign work without human favoritism. When have you accepted an assignment or circumstance not of your choosing and found it to be sacred work?',
        },
      ],
    },

    /* ─── 1 Chronicles 26:20–28 — Ahijah and the Treasurers ───────────── */
    {
      ref: '1 Chronicles 26:20–28',
      title: 'The Treasurers of the House of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            plain(
              20,
              'And of the Levites, Ahijah was over the treasures of the house of God, and over the treasures of the dedicated things.',
            ),
            plain(
              21,
              'As concerning the sons of Laadan; the sons of the Gershonite Laadan, chief fathers, even of Laadan the Gershonite, were Jehieli.',
            ),
            plain(
              22,
              'The sons of Jehieli; Zetham, and Joel his brother, which were over the treasures of the house of the Lord.',
            ),
            {
              number: 23,
              spans: [
                t('Of the Amramites, and the Izharites, the Hebronites, and the Uzzielites:'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And Shebuel the son of Gershom, the son of Moses, was ruler of the treasures.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And his brethren by Eliezer; Rehabiah his son, and Jeshaiah his son, and Joram his son, and Zichri his son, and Shelomith his son.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('Which Shelomith and his brethren were over all the treasures of the dedicated things, which David the king, and the chief fathers, the captains over thousands and hundreds, and the captains of the host, had dedicated.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('Out of the spoils won in battles did they dedicate to maintain the house of the Lord.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And all that Samuel the seer, and Saul the son of Kish, and Abner the son of Ner, and Joab the son of Zeruiah, had dedicated; and whosoever had dedicated any thing, it was under the hand of Shelomith and his brethren.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '26-treasures-dedicated',
          html:
            'A new work is named: the treasures of the house of God. Not the everyday provisions — those would be managed differently — but the dedicated things. The treasures brought by kings and captains. The spoils of battles, given to maintain God&apos;s house. The gifts Samuel brought, the offerings Joab dedicated. Each treasure has a story. Someone won a battle and wanted to honor God with the spoils. Someone was moved to give something precious to the sanctuary. And all of it is gathered in one place, under the care of Shelomith and his brethren.',
        },
        {
          kind: 'hebrew',
          id: '26-otsar',
          title: 'Otsar — "Treasury" or "Treasure"',
          script: 'אוֹצָר',
          translit: '<strong>Otsar</strong> · treasury; storehouse; treasured thing',
          description:
            'The word "otsar" refers to a place where precious things are kept safe — a storehouse, a vault, a treasury. But it also carries the sense of something precious in itself. The dedicated things are not stored merely for safekeeping; they are treasured as visible reminders of the people&apos;s devotion. Each gift placed in the otsar says: this is how we honor God. This is what we have set aside from all we possess. To be a treasurer of the otsar is to be the keeper not just of objects, but of the people&apos;s covenant commitment.',
        },
        {
          kind: 'commentary',
          id: '26-shelomith-hand',
          html:
            'Shelomith is named as the one under whose hand all the dedicated things rest. The phrase "under the hand of" suggests both responsibility and authority. Shelomith is accountable for what is dedicated. He must guard it, preserve it, perhaps account for it. But more than that, he is the steward of a sacred trust. These are not personal possessions. They are the people&apos;s offerings to God. To hold them "under the hand" is to carry them with both hands, with care, with the knowledge that they are not yours but the Lord&apos;s.',
        },
        {
          kind: 'christ',
          id: '26-christ-steward',
          title: 'Christ Connection — The Faithful Steward',
          html:
            'In Luke 12:42, Jesus asks: "Who then is a faithful and wise steward, whom his lord shall make ruler over his household, to give them their portion of meat in due season?" Jesus teaches about stewardship — about those trusted with what belongs to another. The faithful steward is not the owner; he is the keeper. He must manage well, account carefully, and be ready to render an accounting at any moment. Shelomith and his brethren, in their care over the dedicated things, are stewards of the Lord&apos;s house. And we, in every work we do, every trust we are given, are also stewards. We do not own what we tend. We keep it safe for the One to whom it belongs.',
        },
        {
          kind: 'carry',
          html:
            'What have you been entrusted with? Not merely money or possessions — though those may be included — but time, relationships, a role, a name, a gift. If you are a parent, you are a steward of a child. If you are a teacher, you are a steward of knowledge and young minds. If you are a friend, you are a steward of trust. The treasurer of the dedicated things must account for every gift. Are you accounting for what you have been given? Are you guarding it with care? Are you using it in a way that honors the One to whom it truly belongs?',
        },
        {
          kind: 'reflection',
          id: '26-stewardship',
          prompt:
            'What responsibility or trust have you been given that is not truly yours but belongs to God or others? How are you stewarding it faithfully?',
        },
      ],
    },

    /* ─── 1 Chronicles 26:29–32 — The Officers and Judges ───────────── */
    {
      ref: '1 Chronicles 26:29–32',
      title: 'The Officers and Judges Across Israel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 29,
              spans: [
                t('Of the Izharites, Chenaniah and his sons were for the outward business over Israel, for officers and '),
                hg('judges', '26-judges'),
                t('.'),
              ],
            },
            plain(
              30,
              'And of the Hebronites, Hashabiah and his brethren, men of valour, a thousand and seven hundred, were officers over Israel on this side Jordan westward in all the business of the Lord, and in the service of the king.',
            ),
            plain(
              31,
              'Among the Hebronites was Jerijah the chief, even among the Hebronites, according to the generations of his fathers. In the fortieth year of the reign of David they were sought for, and there were found among them mighty men of valour at Jazer of Gilead.',
            ),
            {
              number: 32,
              spans: [
                t('And his brethren, men of '),
                hg('valour', '26-chayil'),
                t(', two thousand and seven hundred chief fathers, whom king David made rulers over the Reubenites, the Gadites, and the half tribe of Manasseh, for every matter pertaining to God, and affairs of the king.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '26-judges',
          html:
            'Beyond the sanctuary, beyond the capital, across the land of Israel, judges and officers do the work of administering justice and order. These are not priests. They are Levites appointed to handle "all the business of the Lord and the service of the king" — the governance that keeps a kingdom functioning. They hear disputes. They adjudicate. They ensure that the laws given to Moses are applied justly in towns and villages far from Jerusalem. The work of justice is not confined to a throne room. It reaches into every corner of the realm.',
        },
        {
          kind: 'hebrew',
          id: '26-chayil',
          title: 'Chayil — "Valor," "Strength," "Mighty Ones"',
          script: 'חַ֫יִל',
          translit: '<strong>Chayil</strong> · strength; valor; might; wealth; an army',
          description:
            'The word "chayil" in Hebrew carries layers of meaning. It can mean physical strength or martial valor — mighty men of war. But it also means wealth, substance, and the capacity to accomplish. A person of "chayil" is someone who can be relied upon — someone whose word is solid, whose judgment is trustworthy, whose presence in a room changes outcomes. The officers and judges chosen from the Hebronites are described as "men of chayil" — they are the capable ones, the reliable ones, the ones who can be trusted with the responsibility of administration. They have the strength of character to judge fairly, the valor to stand firm in difficult decisions, and the substance to be counted upon.',
        },
        {
          kind: 'commentary',
          id: '26-matter-pertaining-god',
          html:
            'Notice the phrase: "for every matter pertaining to God, and affairs of the king." In the world of Israel, these two are inseparable. Religious matters and civil governance are woven together. The judges do not separate the Law of Moses from the practical governance of the tribes. To judge rightly in any matter is to serve both God and the king — to be an instrument of both divine justice and civil order. The 4,400 officers mentioned across the passage (1,700 from the Hebronites in verse 30, another 2,700 in verse 32) are scattered throughout the land, far from the temple, serving in the borderlands and the tribal territories. They are the kingdom&apos;s network of justice.',
        },
        {
          kind: 'commentary',
          id: '26-fortieth-year',
          html:
            'In the fortieth year of David&apos;s reign, a search is made for mighty men of valor. David is aging; he knows that the succession and the stability of the kingdom rest on finding capable leaders to scatter throughout the realm. The search discovers men like Jerijah, who become chief fathers and administrators. This is David at his wisest: not holding all power in his own hands, but seeking out the competent, the strong of character, and distributing trust across a nation. The best kingdoms, David seems to understand, are not held together by a single strong ruler, but by many rulers who are faithful, capable, and accountable.',
        },
        {
          kind: 'christ',
          id: '26-christ-kingdom-delegates',
          title: 'Christ Connection — A King Who Delegates',
          html:
            'In Matthew 25, Christ teaches about the kingdom through the parable of the talents. A master distributes his wealth to servants — five talents to one, two to another, one to a third. The master trusts them with what is his. He goes away, leaving them to steward and to grow what they have been given. Upon his return, he does not judge them by their wealth, but by their faithfulness. The servant with five talents is praised equally with the servant who turned two into four: "Well done, good and faithful servant; thou wast faithful over a few things, I will make thee ruler over many things" (Matthew 25:21). This is the pattern Christ establishes — a king or master who delegates, who trusts, who judges by faithfulness rather than by scale. David, in his distribution of judges and officers across Israel, prefigures this kingdom principle.',
        },
        {
          kind: 'carry',
          html:
            'If you lead anything — a family, a team, a ministry, a business — are you trusting others with responsibility? Or are you holding everything in your own hands? The multiplication of the kingdom does not come from a single strong figure. It comes when capable people are trusted, assigned, and held accountable for the work in front of them. Seek out the people of "chayil" — strength and reliability — in your sphere of influence. Place them in positions where they can serve. Let your delegation be an act of faith that God works through many hands, not just yours.',
        },
        {
          kind: 'reflection',
          id: '26-delegation',
          prompt:
            'Who are the people of strength and valor in your life — the ones you could trust with responsibility and authority? How might you distribute your trust more widely?',
        },
      ],
    },

    /* ─── Divider ────────────────────────────────────────────────────── */
    {
      blocks: [{ kind: 'divider' }],
    },

    /* ─── Summary Section ────────────────────────────────────────────── */
    {
      blocks: [
        {
          kind: 'commentary',
          html:
            '<strong>The Kingdom of the Faithful Unseen</strong><br><br>This chapter holds a quiet power. It does not describe battles or coronations. It lists the names of the gatekeepers, the treasurers, and the judges — the ones who make a kingdom function in its daily work. They are unseen. Few will sing songs of them. But without them, the sacred house cannot be guarded. The people&apos;s offerings cannot be kept safe. The outlying tribes cannot receive justice.<br><br>David understands something profound: great kingdoms are not the work of one great man. They are the work of faithful stewards scattered throughout the land, each doing their sacred work, each trusted, each accountable. And in their faithfulness, the kingdom endures.',
        },
      ],
    },
  ],
};
