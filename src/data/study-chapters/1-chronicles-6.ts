import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Chronicles 6 — The Priestly Line and the Levitical Cities
 *
 * This chapter traces the genealogy of Levi through his three sons — Gershon,
 * Kohath, and Merari — with special emphasis on the unbroken line of high
 * priests through Aaron, from the wilderness to the exile. It names the three
 * great guilds of temple musicians: Heman, Asaph, and Ethan, who maintained
 * worship across centuries. And it records the 48 Levitical cities scattered
 * throughout all Israel, places of refuge and centers of priestly ministry.
 *
 * The chapter is about continuity, about how God embedded atonement and worship
 * into the very geography of the promised land. Aaron's sons offer sacrifice
 * century after century, their names a chain linking the exodus from Egypt to
 * the exile in Babylon. And in that long line, we see a shadow of the
 * Unchangeable Priest who would come.
 */
export const CHRONICLES_1_6: RichChapterContent = {
  bookSlug: '1-chronicles',
  bookName: '1 Chronicles',
  chapter: 6,

  estimatedMinutes: { beginner: 6, intermediate: 11, deep: 16 },
  intros: [
    'The book of 1 Chronicles opens with genealogies — long lists of names that might seem to be mere historical record, but which tell a story of God&apos;s continuity with His people. Chapter 6 is one of the most genealogically dense chapters in all of Scripture, yet it is deeply theological. It traces not just family lines, but the unbroken priesthood of Aaron, the leadership of Levite singers, and the network of cities where God&apos;s worship was centered.',
    'At the heart of this chapter is a profound truth: God did not leave His people without mediation, without worship, without refuge. The high priests traced in these verses — from Aaron through Eleazar to the young Azariah who served in Solomon&apos;s temple — form an unbroken chain of atonement-work. The Levitical singers — Heman, Asaph, and Ethan — wrote the psalms that still instruct our worship. And the 48 Levitical cities, scattered throughout every tribe, meant that no Israelite was far from a place of worship or a city of refuge. The genealogy is a map of God&apos;s faithfulness.',
  ],

  bottomShare: {
    label: 'Share 1 Chronicles 6',
    quote:
      'The priestly line never broke. For centuries, the sons of Aaron offered atonement. Their names echo from the wilderness to the exile — a chain of faithful mediation that points to the One Priest whose intercession never ceases.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Chronicles 6 · Study Guide',
  },

  sections: [
    /* ─── 1 Chronicles 6:1–19 — The Three Sons of Levi ────────────────────── */
    {
      ref: '1 Chronicles 6:1–19',
      title: 'The Sons of Levi and the Line of Aaron',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(
              1,
              'The sons of Levi; Gershon, Kohath, and Merari.'
            ),
            plain(
              2,
              'And the sons of Kohath; Amram, Izhar, and Hebron, and Uzziel.'
            ),
            plain(
              3,
              'And the children of Amram; Aaron, and Moses, and Miriam. The sons also of Aaron; Nadab, and Abihu, Eleazar, and Ithamar.'
            ),
            {
              number: 4,
              spans: [
                t('And '),
                hp('Eleazar', 'line-eleazar'),
                t(' begat Phinehas, and Phinehas begat Abishua,'),
              ],
            },
            plain(
              5,
              'And Abishua begat Bukki, and Bukki begat Uzzi,'
            ),
            plain(
              6,
              'And Uzzi begat Zerahiah, and Zerahiah begat Meraioth,'
            ),
            plain(
              7,
              'Meraioth begat Amariah, and Amariah begat Ahitub,'
            ),
            plain(
              8,
              'And Ahitub begat Zadok, and Zadok begat Ahimaaz.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'sons-of-levi',
          html:
            'The chapter opens with the three sons of Levi: Gershon, Kohath, and Merari. From these three branches came the entire order of Levites — those set apart to serve the tabernacle and later the temple. But within Kohath&apos;s line, there is something more: the priestly family of Aaron. It is through Aaron that the high priesthood will run, an unbroken succession from the wilderness to the exile.',
        },
        {
          kind: 'hebrew',
          id: 'kohath-meaning',
          title: 'Kohath — "Assembly"',
          script: 'קְהָת',
          translit: '<strong>Kohath</strong> · assembly; gathering',
          description:
            'Kohath&apos;s name carries the sense of gathering or assembly. It is fitting: Kohath&apos;s family guarded the most holy things — the ark of the covenant, the table of shewbread, the golden lampstand. They gathered around the holy things and carried them at the Lord&apos;s command.',
        },
        {
          kind: 'commentary',
          id: 'line-eleazar',
          html:
            'Eleazar is the son of Aaron through whom the priesthood continues. His brother Nadab and Abihu perished when they offered strange fire before the Lord (Leviticus 10). It is Eleazar who carries the weight of the priestly office forward — and through him, an unbroken line reaches all the way to the temple of Solomon.',
        },
        {
          kind: 'carry',
          html:
            'Genealogies can feel distant, a mere list of names. But each name represents a person who woke each day to priestly duty — offering sacrifice, interceding for the people, guarding the holy place. These were real people, a real chain of faith passed from father to son, generation after generation. Think of someone in your own life who has passed on to you a faith, a practice, a way of faithful living. How has that continuity shaped you?',
        },
        {
          kind: 'reflection',
          id: 'priestly-line',
          prompt: 'What spiritual practices or acts of faithfulness have been passed down to you through your family or faith community? How do you honor those who came before you by continuing them?',
        },
      ],
    },

    /* ─── 1 Chronicles 6:49–53 — Aaron's Atonement Work ──────────────────────── */
    {
      ref: '1 Chronicles 6:49–53',
      title: 'The Atonement Work of Aaron',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 49,
              spans: [
                t('But '),
                hg('Aaron and his sons offered upon the altar of the burnt offering, and on the altar of incense', 'atonement-work'),
                t(', and were appointed for all the work of the place most holy, and to make atonement for Israel, according to all that Moses the servant of God had commanded.'),
              ],
            },
            plain(
              50,
              'And these are the sons of Aaron; Eleazar his son, Ithamar his son.'
            ),
            plain(
              51,
              'But Nadab and Abihu died before their father, and had no children: therefore Eleazar and Ithamar executed the priest&apos;s office.'
            ),
            plain(
              52,
              'And the Levites appointed all the service of the tabernacle of the house of God.'
            ),
            plain(
              53,
              'But Aaron and his sons offered upon the altar of the burnt offering, and on the altar of incense, and were appointed for all the work of the place most holy, and to make atonement for Israel, according to all that Moses the servant of God had commanded.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'atonement-work',
          html:
            'This is the summary of Aaron&apos;s calling. Every day, he or one of his sons stood at the altars. Every day, sacrifice was offered — the daily burnt offering, the incense that rose continually before the Lord. Every year, on the Day of Atonement, the high priest entered the Holy of Holies itself to sprinkle blood on the mercy seat. This was Aaron&apos;s work: to stand between God and the people, to intercede through blood, to make atonement.',
        },
        {
          kind: 'hebrew',
          id: 'kohen-meaning',
          title: 'Kohen — "Priest"',
          script: 'כֹּהֵן',
          translit: '<strong>Kohen</strong> · priest; one who stands before God',
          description:
            'The Hebrew word for priest, kohen, likely comes from a root meaning "to stand" — the priest stands before God on behalf of the people. It is a posture of mediation, of intercession. Aaron and his sons were kohanim — those who stand in the presence of God to bring offerings and make atonement.',
        },
        {
          kind: 'commentary',
          id: 'nadab-abihu',
          html:
            'Nadab and Abihu burned strange fire and died. Their names are mentioned here not to forget them, but to mark the weight of the office. The priesthood is not a casual calling. It is not for those who approach God carelessly. Eleazar and Ithamar inherit a burden: they must execute the office that cost their brothers their lives.',
        },
        {
          kind: 'christ',
          id: 'unchangeable-priest',
          title: 'Christ Connection — The Unchangeable Priest',
          html:
            'The Epistle to the Hebrews takes this genealogy of priests and speaks of a priest who does not change. "But this man, because he continueth ever, hath an unchangeable priesthood. Wherefore he is able also to save them to the uttermost that come unto God by him, seeing he ever liveth to make intercession for them" (Hebrews 7:24–25). Generation after generation of priests succeeded one another — each one mortal, each one incomplete. But Jesus is the High Priest who never dies, who does not need to offer sacrifice daily (Hebrews 10:10), and whose intercession is eternal. The long chain of Aaron&apos;s descendants points to the One whose priesthood never ceases.',
        },
        {
          kind: 'carry',
          html:
            'We live in an age when we often feel distant from God — separated by our weakness, our failure, our shame. But Aaron&apos;s priesthood teaches us that mediation is woven into God&apos;s design. He does not leave us without an intercessor. And Christ is the perfect Intercessor — always present, always pleading for us, never needing to be replaced. You are not left alone before God.',
        },
        {
          kind: 'reflection',
          id: 'intercession',
          prompt: 'When have you felt the need for someone to intercede for you — to stand between you and judgment? What does it mean to you that Christ is an "unchangeable priest" who intercedes eternally?',
        },
      ],
    },

    /* ─── 1 Chronicles 6:31–48 — The Temple Singers ────────────────────────── */
    {
      ref: '1 Chronicles 6:31–48',
      title: 'The Three Guilds of Temple Musicians',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(
              31,
              'And these are they whom David set over the service of song in the house of the Lord, after that the ark had rest.'
            ),
            {
              number: 32,
              spans: [
                t('And they ministered before the dwelling place of the tabernacle of the congregation with singing, until Solomon had built the house of the Lord in Jerusalem: and then they waited on their office according to their order.'),
              ],
            },
            plain(
              33,
              'And these are they that waited with their children.'
            ),
            {
              number: 39,
              spans: [
                t('And '),
                hg('Heman', 'heman-line'),
                t(' the singer the son of Joel, the son of Samuel,'),
              ],
            },
            plain(
              40,
              'The son of Elkanah, the son of Jeroham, the son of Eliel, the son of Toah,'
            ),
            plain(
              41,
              'The son of Zuph, the son of Elkanah, the son of Mahath, the son of Amasai,'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '1chr6-singers-davidic',
          html:
            'These are the men David set over the song after the ark came to rest in Jerusalem. The list is not decorative — it names the worshippers whose voices stood watch in the tabernacle while the temple was still a dream in David&apos;s heart.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(
              42,
              'The son of Elkanah, the son of Joel, the son of Azariah, the son of Zephaniah,'
            ),
            plain(
              43,
              'The son of Tahath, the son of Assir, the son of Ebiasaph, the son of Korah,'
            ),
            plain(
              44,
              'The son of Izhar, the son of Kohath, the son of Levi, the son of Israel.'
            ),
            plain(
              45,
              'And his brother '),
            {
              number: 46,
              spans: [
                t('Asaph, who stood on his right hand, even '),
                hg('Asaph', 'asaph-line'),
                t(' the son of Berachiah; and Ethan the son of Kushaiah, who was the son of Merari;'),
              ],
            },
            plain(
              47,
              'Their brethren also the Levites were appointed unto all manner of service of the tabernacle of the house of God.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'singers-before-ark',
          html:
            'After David brought the ark of the covenant to Jerusalem, he set musicians to minister in song before it. These were not haphazard appointments — they were carefully structured, organized by David himself, and continued through Solomon&apos;s reign and beyond. Worship in the tabernacle and temple depended on these singers. Their songs were prayers, thanksgivings, and laments that became the Psalter itself.',
        },
        {
          kind: 'hebrew',
          id: 'asaph-meaning',
          title: 'Asaph — "Gatherer"',
          script: 'אָסָף',
          translit: '<strong>Asaph</strong> · to gather; to collect',
          description:
            'Asaph&apos;s name means "to gather." In the temple, he gathered voices in song, gathered the people in worship. Twelve psalms in the Psalter are ascribed to Asaph (Psalms 50, 73–83), songs that gather the community around themes of God&apos;s justice, covenant faithfulness, and the people&apos;s restoration.',
        },
        {
          kind: 'commentary',
          id: 'heman-line',
          html:
            'Heman traces his lineage back through Kohath to Levi and Israel himself. He is of the Kohathite line — the same line that produced Aaron and the high priests. This makes him not just a singer, but a liturgical officer of profound importance. The genealogy makes clear that Heman did not take his place in the temple casually; he inherited a calling that stretched back centuries.',
        },
        {
          kind: 'commentary',
          id: 'asaph-line',
          html:
            'Asaph comes through a different genealogy — through Gershom, tracing back to Gershon the son of Levi. And Ethan comes from Merari. The three guilds — Heman, Asaph, and Ethan — represent the three main branches of Levi itself. All three families of Levi together maintained the worship of God in the temple. No single family bore the weight alone.',
        },
        {
          kind: 'christ',
          id: 'true-worship-leader',
          title: 'Christ Connection — The True Worship Leader',
          html:
            'The psalms written by Heman, Asaph, and Ethan still teach us how to pray. But the Epistle to the Hebrews gives us another song, another voice of worship: "In the midst of the church will I sing praise unto thee" (Hebrews 2:12, quoting Psalm 22). This is Jesus, the True Worship Leader, gathering a people around Himself not in the temple at Jerusalem, but in the presence of God Himself. Where Heman, Asaph, and Ethan led Israel in song, Christ leads the redeemed in the eternal worship of God.',
        },
        {
          kind: 'carry',
          html:
            'When you sing a psalm, you are singing with Heman, Asaph, and Ethan. Their songs shaped worship for thousands of years because they expressed what the human heart knows: longing, grief, praise, thanksgiving, trust, and the yearning to come before God. Your own worship — whether sung or silent — joins a chorus that stretches back to the temple and forward to the throne of God.',
        },
        {
          kind: 'reflection',
          id: 'worship-singers',
          prompt: 'What songs or words of worship have shaped your prayer life? How does it change your understanding of those words to know they were written by men serving in the temple, and that you sing them now as part of an eternal chorus?',
        },
      ],
    },

    /* ─── 1 Chronicles 6:54–81 — The Levitical Cities ────────────────────────── */
    {
      ref: '1 Chronicles 6:54–81',
      title: 'The 48 Levitical Cities and Cities of Refuge',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(
              54,
              'Now these are their dwelling places throughout their castles in their coasts, of the sons of Aaron, of the families of the Kohathites: for theirs was the lot.'
            ),
            plain(
              55,
              'And they gave them Hebron in the land of Judah, and the suburbs thereof round about it.'
            ),
            {
              number: 56,
              spans: [
                t('But the fields of the city, and the villages thereof, they gave to Caleb the son of Jephunneh. And to the sons of Aaron they gave the cities of Judah, namely, '),
                hy('Hebron', 'hebron-refuge'),
                t(', the city of refuge, and Libnah with her suburbs, and Jattir, and Eshtemoa, with their suburbs,'),
              ],
            },
            plain(
              57,
              'And Hilen with her suburbs, Debir with her suburbs,'
            ),
            plain(
              58,
              'And Ashan with her suburbs, and Bethshemesh with her suburbs:'
            ),
            plain(
              59,
              'And out of the tribe of Benjamin; Geba with her suburbs, and Alemeth with her suburbs, and Anathoth with her suburbs. All their cities throughout their families were thirteen cities.'
            ),
            plain(
              60,
              'And unto the sons of Kohath, which were left of the family of that tribe, were cities given out of half the tribe, namely, out of half Manasseh, by lot, ten cities.'
            ),
            plain(
              61,
              'And to the sons of Gershom throughout their families out of the tribe of Issachar, and out of the tribe of Asher, and out of the tribe of Naphtali, and out of the tribe of Manasseh in Bashan, thirteen cities.'
            ),
            plain(
              62,
              'And to the sons of Merari by their families out of the tribe of Reuben, and out of the tribe of Gad, and out of the tribe of Zebulun, twelve cities.'
            ),
            plain(
              63,
              'So the children of Israel gave to the Levites these cities with their suburbs.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'levitical-cities-geography',
          html:
            'The Levitical cities were strategically distributed throughout all the tribes of Israel. The sons of Aaron (the priests proper) received 13 cities; the rest of the Kohathites received 10; Gershom&apos;s sons received 13; Merari&apos;s sons received 12. In total, 48 cities were set aside as places where Levites would dwell and serve. No Israelite was far from a Levite, no tribe without access to priestly ministry and instruction.',
        },
        {
          kind: 'hebrew',
          id: 'miqlat-refuge',
          title: 'Miqlat — "City of Refuge"',
          script: 'מִקְלָט',
          translit: '<strong>Miqlat</strong> · refuge; shelter; place to flee to',
          description:
            'Among the Levitical cities were six cities of refuge — places where someone who had caused unintentional death could flee and live, safe from the avenger of blood. Mercy was built into the geography. The cities of refuge (Hebron in the south, Shechem in the north among others) were Levitical cities — places where the law was known, where justice could be administered, where the innocent could find sanctuary.',
        },
        {
          kind: 'commentary',
          id: 'hebron-refuge',
          html:
            'Hebron, one of the great cities of the Bible, was a city of refuge. Abraham bought the cave of Machpelah there to bury his dead. David reigned there before becoming king of all Israel. And for the Levites and the fugitive seeking sanctuary, it was a place of mercy — a place where the law was upheld and the innocent protected.',
        },
        {
          kind: 'commentary',
          id: 'cities-distributed',
          html:
            'The distribution is striking. Levitical cities were not clustered in one region; they were woven throughout the entire land. Priests and Levites lived among the people, teaching the law, offering sacrifice at the appointed times, serving as judges and teachers. The Levites did not withdraw from ordinary life into a cloister; they were embedded in the tribes, their ministry diffused through the land.',
        },
        {
          kind: 'christ',
          id: 'true-refuge',
          title: 'Christ Connection — The True City of Refuge',
          html:
            'The cities of refuge point to a higher reality. The Epistle to the Hebrews speaks of those "who have fled for refuge to lay hold upon the hope set before us" (Hebrews 6:18). And that refuge is Christ. Those who are pursued by fear, by guilt, by the accuser can flee into the presence of Christ and find sanctuary. He is the Refuge stronger than any earthly city, the Place where the innocent find shelter and the guilty find pardon. Where Hebron and Shechem protected the manslayer, Christ protects the sinner — not from judgment alone, but through judgment, having taken it upon Himself.',
        },
        {
          kind: 'carry',
          html:
            'The Levitical cities scattered throughout Israel meant that worship and justice were not distant things, kept in the capital and available only to the powerful. They were nearby, accessible, woven into the fabric of ordinary life. In the same way, Christ is not distant. He is "nigh unto thee, even in thy mouth, and in thy heart" (Romans 10:8). Mercy and refuge are not far away — they are here, available to all who seek them.',
        },
        {
          kind: 'reflection',
          id: 'cities-of-refuge',
          prompt: 'When have you needed a refuge — a safe place where you could be protected and restored? How has Christ been that refuge for you?',
        },
      ],
    },

    /* ─── The Levites as a Blessing to All Israel ──────────────────────────── */
    {
      ref: '1 Chronicles 6',
      title: 'The Priestly Line Reaches to the Exile',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(
              14,
              'And Ahimaaz begat Azariah, and Azariah begat Johanan,'
            ),
            plain(
              15,
              'And Johanan begat Azariah, (he it is that executed the priest&apos;s office in the temple that Solomon built in Jerusalem:)'
            ),
            plain(
              16,
              'And Azariah begat Amariah, and Amariah begat Ahitub,'
            ),
            plain(
              17,
              'And Ahitub begat Zadok, and Zadok begat Shallum,'
            ),
            plain(
              18,
              'And Shallum begat Hilkiah, and Hilkiah begat Azariah,'
            ),
            plain(
              19,
              'And Azariah begat Seraiah, and Seraiah begat Jehozadak,'
            ),
            plain(
              20,
              'And Jehozadak went into captivity, when the Lord carried away Judah and Jerusalem by the hand of Nebuchadnezzar.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'priestly-continuity',
          html:
            'The genealogy continues all the way to Jehozadak, the high priest taken into exile by Nebuchadnezzar. This is a chain of about 600 years — from the time of the wilderness, through the conquest, the united monarchy, the divided kingdoms, down to the fall of Jerusalem. For six centuries, there was never a break. Aaron&apos;s sons offered sacrifice in the tabernacle, then in the temple at Jerusalem. Their names changed, but the office did not.',
        },
        {
          kind: 'commentary',
          id: 'azariah-solomon-temple',
          html:
            'The text specifically notes that one Azariah "executed the priest&apos;s office in the temple that Solomon built in Jerusalem." This marks a transition — not a break, but a continuation. The priesthood did not end when the tabernacle was replaced by the temple. The same family, the same calling, persisted. The sacrifice that began in the wilderness continued in the permanent house of God.',
        },
        {
          kind: 'commentary',
          id: 'exile-not-end',
          html:
            'Even the exile does not end the priestly line. Jehozadak goes into captivity, but his descendants will return. After the exile, when the people rebuild the temple, the priestly line resumes. It is Zerubbabel (a descendant of David) and Joshua son of Jozadak (a descendant of Jehozadak) who lead the rebuilding. The priesthood survives the exile itself.',
        },
        {
          kind: 'christ',
          id: 'priesthood-fulfilled',
          title: 'Christ Connection — When the Priesthood Ends and Begins Anew',
          html:
            'The chain of high priests breaks when Christ comes. "For there is verily a disannulling of the commandment going before for the weakness and unprofitableness thereof. For the law made nothing perfect, but the bringing in of a better hope did; by the which we draw nigh unto God" (Hebrews 7:18–19). Christ is not a high priest in the line of Aaron; He is a priest "after the order of Melchisedec" (Hebrews 5:6) — a priesthood that precedes Aaron and continues beyond the temple sacrifice. The genealogy of Aaron reaches its fulfillment and its end in Him. The priesthood was not abolished — it was perfected.',
        },
        {
          kind: 'carry',
          html:
            'The long genealogy can teach us something about faithfulness. Generation after generation, Aaron&apos;s descendants came to the altar. They did not all become famous. Many of their names appear only in these lists. But each one played a part in the unbroken work of mediation. In your own life, what quiet, faithful work are you doing that will never make you famous but serves God and others? How can you honor that work as sacred?',
        },
        {
          kind: 'reflection',
          id: 'faithfulness-generations',
          prompt: 'Many of the priests in this genealogy are named but never again mentioned in Scripture. Yet they bore the priestly office faithfully. What does it mean to be faithful in a role that goes mostly unseen and unremembered?',
        },
      ],
    },
  ],
};
