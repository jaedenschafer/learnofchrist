import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Chronicles 8 — Solomon's Building Works and Trade
 *
 * After twenty years of construction, Solomon's great work is complete. The
 * house of the Lord and his own house stand finished. The chapter moves swiftly
 * through his vast building program — cities restored and built, fortified
 * centers established throughout his kingdom. The foreign peoples remaining in
 * the land are made to serve as tribute-payers. The children of Israel,
 * however, are not made servants: they are men of war, captains of his armies.
 *
 * Then comes an intimate moment: Solomon moves Pharaoh's daughter to her own
 * house, declaring that the house of David is too holy for her now that the
 * ark has come there. The sacred and the profane cannot dwell together.
 *
 * The ritual life of the kingdom is then set in perfect order: burnt offerings,
 * the three feasts kept as Moses commanded, priests and Levites in their
 * appointed courses. And finally, the great enterprise is crowned: ships built,
 * a navy established, voyages undertaken to distant Ophir for gold.
 *
 * In every dimension — military, administrative, cultic, commercial — the
 * kingdom functions as a complete, ordered, prosperous whole. This is what a
 * king who has finished his father's work looks like: a work completed, a house
 * built, a people ordered, a worship system perfected, a wealth brought in.
 */
export const CHRONICLES_2_8: RichChapterContent = {
  bookSlug: '2-chronicles',
  bookName: '2 Chronicles',
  chapter: 8,

  estimatedMinutes: { beginner: 5, intermediate: 10, deep: 14 },
  intros: [
    'At the end of twenty years, the work was finished. Solomon had built the house of the Lord and his own house. The great enterprise that David began and Solomon undertook is now complete. But completion is not the end — it is the beginning of everything the completed work makes possible.',
    "In this chapter, we see what the finished kingdom of Israel looked like. Every detail matters: the cities fortified, the trade routes opened, the foreign populations put to work, the children of Israel set free from servitude, the ritual life ordered according to Moses, the three feasts kept in their seasons, the priesthood arranged in their courses. And overshadowing all of it, a single restraint — Pharaoh&apos;s daughter will not live in the house of David, because the ark of the Lord has made it holy. Even in abundance, even in power, the sacred is kept separate. The chapter asks us to see the shape of a completed work, and to consider: what does it mean for a king to finish what his father began?",
  ],

  bottomShare: {
    label: 'Share 2 Chronicles 8',
    quote:
      "After twenty years of building, Solomon&apos;s great work was finished. Cities fortified, fortunes made, priests appointed, feasts kept, the kingdom ordered in every dimension. The completion of the work pointed to the True King who would finish His Father&apos;s work and bring all the wealth of the nations into His kingdom.",
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Chronicles 8 · Study Guide',
  },

  resources: [
    {
      id: 'british-museum-cyrus',
      kind: 'museum',
      source: 'British Museum',
      label: 'The Cyrus Cylinder',
      url: 'https://www.britishmuseum.org/collection/objects/w3679',
      description: 'Ancient Persian cylinder decree allowing return from exile and temple rebuilding.',
    },
  ],

  sections: [
    /* ─── 2 Chronicles 8:1–6 — The Building Works ──────────────────────── */
    {
      ref: '2 Chronicles 8:1–6',
      title: 'The Building Works',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(
              1,
              'And it came to pass at the end of twenty years, wherein Solomon had built the house of the Lord, and his own house,',
            ),
            plain(
              2,
              'That the cities which Huram had restored to Solomon, Solomon built them, and caused the children of Israel to dwell there.',
            ),
            plain(
              3,
              'And Solomon went to Hamath-zobah, and prevailed against it.',
            ),
            plain(
              4,
              'And he built Tadmor in the wilderness, and all the store cities, which he built in Hamath.',
            ),
            plain(
              5,
              'Also he built Beth-horon the upper, and Beth-horon the nether, fenced cities, with walls, gates, and bars;',
            ),
            plain(
              6,
              'And Baalath, and all the store cities that Solomon had, and all the chariot cities, and the cities of his horsemen, and all that Solomon desired to build in Jerusalem, and in Lebanon, and throughout all the land of his dominion.',
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'twenty-years-complete',
          html:
            'Twenty years have passed. The house of the Lord and Solomon\'s own house are finished. The text moves immediately from completion to expansion: the cities Huram had given him are now settled and made into fortified centers throughout the kingdom. This is not the work of a finished man but of a man whose finished work becomes the foundation for everything that follows.',
        },
        {
          kind: 'commentary',
          id: 'hamath-zobah',
          html:
            'Solomon ventures forth in military conquest. Hamath-zobah is subdued. Tadmor is built in the wilderness — a trading outpost in the harsh interior, a sign of Solomon\'s reach extending beyond the coastlands and fertile valleys into the marginal territories.',
        },
        {
          kind: 'hebrew',
          id: 'c8-arim',
          title: 'Arim — "Cities"',
          script: 'עָרִים',
          translit: '<strong>Arim</strong> · cities; fortified centers',
          description:
            'The word here speaks not just of population centers but of fortified, strategic cities. Each one is a node in Solomon\'s network of power, placed deliberately to control trade routes, garrison troops, and secure the kingdom. A city (ir) in this context is a statement of order imposed upon the land.',
        },
        {
          kind: 'commentary',
          id: 'store-cities',
          html:
            'Store cities appear repeatedly in this list. These are not garrison towns but logistics centers — places where grain, oil, and supplies are held in reserve. They represent a kingdom thinking strategically about its own survival and capacity to extend power far from its center. [res:british-museum-cyrus]',
        },
        {
          kind: 'carry',
          html:
            'Completion in Scripture is never an ending. When the work is finished, it becomes the foundation for the next work. The temple is completed — and immediately begins to shape every aspect of the kingdom around it. Our own completed works — a degree finished, a relationship healed, a calling answered — often become the starting point for something we never expected. The question is not "What did I build?" but "What does my finished work make possible now?"',
        },
        {
          kind: 'reflection',
          id: 'completion-reflection',
          prompt:
            'What work have you completed that became the foundation for something larger? What doors did finishing one thing open for you?',
        },
      ],
    },

    /* ─── 2 Chronicles 8:7–10 — The Labor and the Distinction ──────────── */
    {
      ref: '2 Chronicles 8:7–10',
      title: 'The Remnant Peoples Made to Serve',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(
              7,
              'As for all the people that were left of the Hittites, and the Amorites, and the Perizzites, and the Hivites, and the Jebusites, which were not of Israel,',
            ),
            plain(
              8,
              'But of their children, who were left after them in the land, whom the children of Israel consumed not, them did Solomon make to pay tribute until this day.',
            ),
            plain(
              9,
              'But of the children of Israel did Solomon make no servants for his work; but they were men of war, and chief of his captains, and captains of his chariots and horsemen.',
            ),
            plain(
              10,
              'And these were the chief of king Solomon\'s officers, even two hundred and fifty, that bare rule over the people.',
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'remnant-peoples',
          html:
            'The Hittites, Amorites, Perizzites, Hivites, Jebusites — the peoples whom Joshua\'s generation did not fully drive out — remain in the land. Solomon does not attempt annihilation. Instead, he conscripts them as tribute-payers and forced laborers. They become the understructure upon which Israel\'s prosperity is built.',
        },
        {
          kind: 'commentary',
          id: 'israel-not-servants',
          html:
            'But Israel itself is not made servile. The children of Israel are soldiers, captains of chariots, captains of horsemen, commanders. There is a careful distinction here: foreign peoples serve Solomon\'s kingdom through labor; Israelites serve through leadership and war. The pattern reflects a political theology where the covenant people cannot be enslaved, even to their own king.',
        },
        {
          kind: 'hebrew',
          id: 'c8-mas',
          title: 'Mas — "Tribute" or "Forced Labor"',
          script: 'מַס',
          translit: '<strong>Mas</strong> · tribute; corvée labor; forced labor obligation',
          description:
            'The word carries the sense of a binding obligation imposed by power. To be put under mas is to be conscripted, to owe your labor to the state. It is distinct from voluntary service or ordinary taxation. The framework of the text makes clear: foreigners are under mas; Israelites are not.',
        },
        {
          kind: 'carry',
          html:
            'Power that is exercised justly maintains a distinction between the core community and those outside it. Solomon does not enslave his own people; he reserves that fate for others. This is not mercy in the modern sense, but it is an order — a recognition that the covenant people have a different status, a different claim. In our own time, the question persists: whom do we make to serve? And whom do we keep free from servitude? Justice asks us to think about these distinctions.',
        },
        {
          kind: 'reflection',
          id: 'labor-reflection',
          prompt:
            'What principles do you use to decide who carries responsibility and who carries the burden? How do you ensure those closest to you are treated differently from those outside your circle?',
        },
      ],
    },

    /* ─── 2 Chronicles 8:11 — Pharaoh's Daughter ──────────────────────── */
    {
      ref: '2 Chronicles 8:11',
      title: 'Pharaoh\'s Daughter Moved from the Holy House',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 11,
              spans: [
                t('And Solomon brought up the daughter of Pharaoh out of the city of David unto the house that he had built for her: for he said, '),
                hp('My wife shall not dwell in the house of David king of Israel', 'c8-holy'),
                t(', because the places are holy, whereunto the ark of the Lord hath come.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c8-holy',
          html:
            'This is a quiet, profound statement. Solomon is married to Pharaoh\'s daughter — a political alliance sealed in flesh. Yet he declares that she cannot dwell in the house of David because the ark of the Lord has come there. The sacred and the profane cannot share a roof. Pharaoh\'s daughter is not profane in herself, but her presence as a foreign wife in the house of the king, in the house that has been made sacred by the ark\'s presence, is a violation of that holiness. So Solomon builds her another house — and the text approves of this restraint. Even in his magnificence, the king knows that something must remain separated from him, that his power must yield to the presence of God.',
        },
        {
          kind: 'hebrew',
          id: 'c8-kodesh',
          title: 'Kodesh — "Holiness" or "Sacred Space"',
          script: 'קֹדֶשׁ',
          translit: '<strong>Kodesh</strong> · holiness; the sacred; set-apart space',
          description:
            'Holiness is not an abstract quality but a reality that inhabits place. Where the ark rests, the space itself becomes holy — marked, separated, requiring different treatment than ordinary dwellings. Solomon\'s restraint honors this reality. His power as king yields to the fact that the house has been made other by the presence of God\'s ark.',
        },
        {
          kind: 'carry',
          html:
            'There are spaces in life that should remain holy — set apart, protected, not subject to ordinary use. A marriage can be strong, a household prosperous, a kingdom vast — and still there should be something that remains sacred, untouched by commercial or political calculation. Solomon\'s willingness to move his wife rather than bring her into the holy house is an act of restraint that affirms something more important than his own comfort or desire.',
        },
        {
          kind: 'reflection',
          id: 'holiness-reflection',
          prompt:
            'What spaces or relationships in your life do you keep holy — set apart, protected from ordinary pressures? What does it cost to maintain that separation?',
        },
      ],
    },

    /* ─── 2 Chronicles 8:12–16 — The Three Feasts and the Priestly Order ─ */
    {
      ref: '2 Chronicles 8:12–16',
      title: 'The Three Feasts and the Perfected Worship',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(
              12,
              'Then Solomon offered burnt offerings unto the Lord on the altar of the Lord, which he had built before the porch,',
            ),
            plain(
              13,
              'Even after a certain rate every day, offering according to the commandment of Moses, on the sabbaths, and on the new moons, and on the solemn feasts, three times in the year, even in the feast of unleavened bread, and in the feast of weeks, and in the feast of tabernacles.',
            ),
            plain(
              14,
              'And he appointed, according to the order of David his father, the courses of the priests to their service, and the Levites to their charges, to praise and to minister before the priests, as the duty of every day required: the porters also by their courses at every gate: for so had David commanded.',
            ),
            plain(
              15,
              'And they departed not from the commandment of the king unto the priests and Levites concerning any matter, or concerning the treasures.',
            ),
            plain(
              16,
              'Now all the work of Solomon was prepared from the day of the foundation of the house of the Lord, and until it was finished. So the house of the Lord was perfected.',
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'burnt-offerings',
          html:
            'The altar now stands before the porch of the completed temple. And upon it, burnt offerings rise continually — daily offerings, offerings on the sabbaths, offerings on the new moons, offerings on the three solemn feasts. The rhythm is set. The worship system is engaged. The king himself stands at the center of this worship, not commanding it from a distance but participating in it, ensuring it happens according to Moses\' commandment.',
        },
        {
          kind: 'hebrew',
          id: 'c8-moed',
          title: 'Moed — "Appointed Time" or "Feast"',
          script: 'מוֹעֵד',
          translit: '<strong>Moed</strong> · appointed time; feast; season; assembly',
          description:
            'The word carries both meanings simultaneously: a time that is divinely set, divinely appointed, and the assembly that gathers at that time. The three feasts — Unleavened Bread, Weeks, and Tabernacles — are moedim — appointed times when the people gather before the Lord. They are not optional observances but structured encounters with the divine calendar.',
        },
        {
          kind: 'commentary',
          id: 'three-feasts',
          html:
            'The three feasts are explicitly named: the feast of unleavened bread (Passover, celebrating redemption from Egypt), the feast of weeks (Pentecost, celebrating the giving of the Law and the first harvest), the feast of tabernacles (remembering the wilderness wandering and God\'s sustaining care). All three point forward. All three will find their fullness in Christ.',
        },
        {
          kind: 'commentary',
          id: 'courses-priests',
          html:
            'David had established the courses of the priests — the divisions and schedules by which the priestly service rotates through the year. Solomon now implements this order in the completed temple. The Levites praise and minister. The porters keep the gates. Every person has a duty, every duty is assigned, every assignment flows from the commandment of the king and the order of David.',
        },
        {
          kind: 'christ',
          id: 'c8-christ',
          title: 'Christ Connection — The True King Who Finishes His Father\'s Work',
          html:
            'Solomon completed the work his father David began. He built the house of the Lord. He established the three feasts. He set the priesthood in order. And the text declares: "The house of the Lord was perfected."<br><br>The Gospels present Jesus as the One who finishes the work His Father gave Him. "I have glorified thee on the earth: I have finished the work which thou gavest me to do" (John 17:4). His work is not a temple made of stone but a true dwelling place of God — His own body, risen and ascended, and the body of believers gathered in His name.<br><br>The three feasts that Solomon kept according to Moses find their fulfillment in Him. Passover points to His death, "the Lamb slain from the foundation of the world," the ultimate redemption. Pentecost points to His gift of the Holy Spirit, the law written on human hearts. Tabernacles points to His final return, when God dwells with His people forever, and the wilderness wandering of this world is ended.<br><br>And like Solomon, He brings order to the worship of God\'s people. The priesthood in its courses becomes, in the New Testament, a "royal priesthood" — every believer serving without hierarchy, all access direct, all made priests through Him.<br><br>Most beautifully, the wealth of nations that Solomon drew into Jerusalem — the tribute, the gold from Ophir, the commerce of the known world — foreshadows what John saw in vision: "The nations of them which are saved shall walk in the light of it: and the kings of the earth do bring their glory and honour into it" (Revelation 21:24). The True King brings all the wealth of creation into His kingdom, not for His own glory, but as the inheritance of His redeemed people.',
        },
        {
          kind: 'carry',
          html:
            'Order matters. The three feasts were not innovations of Solomon\'s but commandments given through Moses. Solomon\'s genius was not in inventing a system but in implementing an existing one flawlessly. The priests in their courses, the Levites in their praise, the porters at their gates — all of this happened because someone had established it, and someone else (Solomon) had the discipline to maintain it. Our own lives often need this kind of order: not rigid or joyless, but structured, rhythmic, intentional. Daily prayer, weekly worship, annual remembrance — these become the architecture within which a faithful life is built.',
        },
        {
          kind: 'reflection',
          id: 'feasts-reflection',
          prompt:
            'What rituals and rhythms structure your spiritual life? How do the three themes — redemption, the gift of God\'s Spirit, and God\'s future dwelling with us — shape the way you practice your faith?',
        },
      ],
    },

    /* ─── 2 Chronicles 8:17–18 — The Navy and the Gold ──────────────────── */
    {
      ref: '2 Chronicles 8:17–18',
      title: 'The Navy at Ezion-geber',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(
              17,
              'Then went Solomon to Eziongeber, and to Eloth, at the sea side in the land of Edom.',
            ),
            plain(
              18,
              'And Huram sent him by the hands of his servants ships, and servants that had knowledge of the sea; and they went with the servants of Solomon to Ophir, and took thence four hundred and fifty talents of gold, and brought them to king Solomon.',
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'eziongeber',
          html:
            'Ezion-geber lies at the head of the Gulf of Aqaba, on the Red Sea, in the land of Edom. It is a frontier outpost, a window onto the wider world. Solomon ventures there and establishes his navy — not ships for war primarily, but merchant ships, trading vessels, vessels for the movement of goods and commerce.',
        },
        {
          kind: 'hebrew',
          id: 'c8-ophir',
          title: 'Ophir — The Land of Gold',
          script: 'אוֹפִיר',
          translit: '<strong>Ophir</strong> · a distant land, rich in gold; possibly East Africa or the Far East',
          description:
            'Ophir appears repeatedly in Scripture as the ultimate source of the finest gold. Its location is debated — it may be East Africa, it may be further east, perhaps even India or beyond. The point is not the geography but the aspiration: Ophir represents the farthest reaches of the known world, and Solomon\'s ships sail there and return laden with its treasure.',
        },
        {
          kind: 'commentary',
          id: 'huram-ships',
          html:
            'Hiram (or Huram), the king of Tyre, sends ships and sailors to Solomon. This is not conquest but commerce. The Phoenicians were master sailors; their skill was a commodity. Hiram provides both the vessels and the skilled crew, and together they venture into distant waters. The partnership brings back four hundred and fifty talents of gold — an immense wealth.',
        },
        {
          kind: 'carry',
          html:
            'The completion of the internal work — the temple built, the cities fortified, the worship ordered — opens onto the wider world. Solomon does not retreat into his kingdom; he reaches outward, establishes trade routes, brings in the wealth of distant lands. Our own completed works can do the same: a degree completed opens onto a career; a house built opens onto hospitality; a heart healed opens onto service to others. Completion is always also an opening.',
        },
        {
          kind: 'reflection',
          id: 'gold-reflection',
          prompt:
            'What horizons have opened for you after completing a significant work? How has your sense of possibility expanded?',
        },
      ],
    },

    /* ─── Closure: The Work Finished ──────────────────────────────────── */
    {
      blocks: [
        {
          kind: 'divider',
        },
        {
          kind: 'commentary',
          html:
            'The chapter ends where it began: with the completion of the work. "From the day of the foundation of the house of the Lord, and until it was finished. So the house of the Lord was perfected." The repetition is deliberate. The text wants us to see the arc: foundation, then work, then perfection. And the perfection is not an ending but a beginning — of a perfected worship, a settled kingdom, a reaching into the world for its wealth. This is what a true king, who has finished his father\'s work, looks like.',
        },
      ],
    },
  ],
};
