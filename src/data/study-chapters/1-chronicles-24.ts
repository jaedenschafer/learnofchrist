import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * 1 Chronicles 24 — The Priestly Courses
 *
 * David organizes the sons of Aaron into 24 divisions, each to serve in rotation
 * in the temple. The death of Nadab and Abihu in their father Aaron's time established
 * that the priestly line would continue through Eleazar and Ithamar. Now, centuries
 * later, David casts lots to determine the order of service — one of the most
 * detailed glimpses into the worship structure Israel built. One of these courses,
 * the course of Abijah, appears again in the New Testament when Zacharias, the
 * father of John the Baptist, is serving his week in the temple (Luke 1:5–8).
 *
 * What appears as administrative order is actually the tapestry of God&apos;s planning
 * across generations. And in Christ, we find the one Priest who needs no rotation,
 * who serves once and forever (Hebrews 7:24).
 */
export const CHRONICLES_1_24: RichChapterContent = {
  bookSlug: '1-chronicles',
  bookName: '1 Chronicles',
  chapter: 24,

  estimatedMinutes: { beginner: 5, intermediate: 8, deep: 12 },
  intros: [
    'The first book of Chronicles is a record written after the exile, a meditation on order and continuity. It traces the genealogy of Israel, the structure of worship, the organization of the temple — all the architectures of faith. In this chapter, David establishes something that will outlast him: the systematic division of the priesthood. Twenty-four courses, each serving in turn, each one week twice a year, in a pattern so stable that it will persist into the New Testament itself.',
    'Behind this organizational detail lies a story of lineage and loss. Nadab and Abihu, the sons of Aaron, died without children, leaving the priestly line to continue only through Eleazar and Ithamar. David does not simply assign them at random. He casts lots — invoking the sovereignty of God in the very mechanics of scheduling. The lots will determine order. God chooses through the casting of lots. And in one of these courses — the eighth, the course of Abijah — Zacharias, a priest, will be serving when an angel comes to tell him that his barren wife Elizabeth will bear a son named John, who will prepare the way for Jesus.',
  ],

  bottomShare: {
    label: 'Share 1 Chronicles 24',
    quote:
      'David cast lots for the courses of the priests. In this mundane administration lies a hidden pattern: the same course that serves in David&apos;s time will serve in the days of John the Baptist. God&apos;s planning spans generations.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Chronicles 24 · Study Guide',
  },

  sections: [
    /* ─── 1 Chronicles 24:1–6 — Nadab, Abihu, and the Division ────────── */
    {
      ref: '1 Chronicles 24:1–6',
      title: 'The Sons of Aaron and the Priestly Line',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            plain(1, 'Now these are the divisions of the sons of Aaron. The sons of Aaron; Nadab, and Abihu, Eleazar, and Ithamar.'),
            {
              number: 2,
              spans: [
                t('But Nadab and Abihu '),
                hg('died before their father', 'nadab-abihu-death'),
                t(', and had no children: therefore Eleazar and Ithamar executed the priest&apos;s office.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And David distributed them, both Zadok of the sons of Eleazar, and Ahimelech of the sons of Ithamar, according to their offices in their service.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And there were more chief men found of the sons of Eleazar than of the sons of Ithamar; and thus were they divided: Among the sons of Eleazar there were sixteen chief men of the house of their fathers, and eight among the sons of Ithamar according to the house of their fathers.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Thus were they divided '),
                hy('by lot', 'goral-lot'),
                t(', one sort with another; for the governors of the sanctuary, and governors of the house of God, were of the sons of Eleazar, and of the sons of Ithamar.'),
              ],
            },
            plain(6, 'And Shemaiah the son of Nethaneel the scribe, one of the Levites, wrote them before the king, and the princes, and Zadok the priest, and Ahimelech the son of Abiathar, and before the chief of the fathers of the priests and Levites: one principal household being taken for Eleazar, and one taken for Ithamar.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'nadab-abihu-death',
          html:
            'Nadab and Abihu died long ago, in the time of their father Aaron. Their deaths are recorded in Leviticus 10: they offered strange fire before the Lord and were consumed by fire from heaven. They had no children, so the priestly line did not pass through them. The text acknowledges this ancient loss as the foundation for the current structure: Eleazar and Ithamar are the only surviving sons, and thus they and their families alone carry the priestly office forward. What might have been a break in the priesthood becomes instead a redirection — the line continues, narrower but unbroken.',
        },
        {
          kind: 'hebrew',
          id: 'cohen-priest',
          title: 'Cohen — "Priest"',
          script: 'כּוֹהֵן',
          translit: '<strong>Cohen</strong> · priest; one who serves in the temple, mediates between God and people',
          description:
            'The Cohen was not merely a functionary. The priest stood in the holy place, offered sacrifice, bore the burden of intercession for the people. To be a Cohen was to carry sacred responsibility. The division of the priestly courses meant that each man had his appointed time, his rotation, his week to stand in the sanctuary. This was not random assignment; it was a pattern woven into the fabric of worship itself.',
        },
        {
          kind: 'commentary',
          id: 'goral-lot',
          html:
            'The lots were cast. This is not bureaucratic assignment; it is the invocation of God&apos;s choice. When lots are cast in Scripture, something holy is happening. God chooses through the casting of lots. The course order, the sequence in which families would serve, was determined not by human preference or political advantage, but by the roll of the dice — and in the theology of Israel, by the will of God working through those dice. Each course knew its time was coming, and each knew its time was God-ordained.',
        },
        {
          kind: 'carry',
          html:
            'David gives order to the worship. He sees chaos or potential confusion and structures it so that every man knows when he serves, every family knows its place, every course knows the routine. In our own lives, we often feel overwhelmed by the randomness of events. But here David models something: the creation of order, the building of systems, the establishment of regular rhythms so that sacred work can be done reliably. What structures or rhythms do you need to build in your own life so that what matters most can be done with intention?',
        },
        {
          kind: 'reflection',
          id: 'priestly-line',
          prompt: 'Nadab and Abihu died without children, but the priesthood continued through Eleazar and Ithamar. Have you experienced a loss or setback that seemed to close a door, only to find later that God had opened another?',
        },
      ],
    },

    /* ─── 1 Chronicles 24:7–19 — The Twenty-Four Courses ───────────────── */
    {
      ref: '1 Chronicles 24:7–19',
      title: 'The Twenty-Four Courses',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            {
              number: 7,
              spans: [
                t('Now the first lot came forth to Jehoiarib, the second to Jedaiah, The third to Harim, the fourth to Seorim, The fifth to Malchijah, the sixth to Mijamin, The seventh to Hakkoz, the '),
                hp('eighth to Abijah', 'abijah-course-luke'),
                t(', The ninth to Jeshua, the tenth to Shecaniah,'),
              ],
            },
            {
              number: 11,
              spans: [
                t('The eleventh to Eliashib, the twelfth to Jakim, The thirteenth to Huppah, the fourteenth to Jeshebeab, The fifteenth to Bilgah, the sixteenth to Immer, The seventeenth to Hezir, the eighteenth to Aphses,'),
              ],
            },
            {
              number: 19,
              spans: [
                t('The nineteenth to Pethahiah, the twentieth to Jehezekel, The one and twentieth to Jachin, the two and twentieth to Gamul, The three and twentieth to Delaiah, the four and twentieth to Maaziah.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'twenty-four-system',
          html:
            'Twenty-four courses. Each one served for one week, roughly twice per year, rotating through in a pattern that repeats. It is a system of astonishing elegance: enough courses that no man labors too often, yet frequent enough that the service is continuous. Someone is always in the temple. Someone is always offering. The worship never stops.',
        },
        {
          kind: 'commentary',
          id: 'abijah-course-luke',
          html:
            'The eighth course is Abijah. This name appears again in the New Testament, in Luke 1:5: "There was in the days of Herod, the king of Judaea, a certain priest named Zacharias, of the course of Abia" (Abijah). This is the moment when an angel comes to Zacharias in the temple while he is burning incense, and tells him that his wife Elizabeth will bear a son — John the Baptist. The course that David established in his day is the same course serving in the age of John and Jesus. God&apos;s planning spans centuries. The lot cast in David&apos;s time determines which priest will be standing in the holy place when heaven breaks open with news of redemption.',
        },
        {
          kind: 'hebrew',
          id: 'abiyyah-name',
          title: 'Abiyyah — "My Father Is Yah"',
          script: 'אֲבִיָּה',
          translit: '<strong>Abiyyah</strong> · My Father Is Yah; a name bearing the covenant name of God',
          description:
            'The eighth course bears a theophoric name — a name that carries the identity of God within it. "Abia" or "Abijah" means "My Father Is Yah." Yah is the shortened form of Yahweh, the covenant name of God revealed to Moses. So the course itself, in its very name, proclaims the relationship: I am the child of the Lord. When Zacharias serves in this course, he stands within a name that confesses God as Father.',
        },
        {
          kind: 'carry',
          html:
            'In our own day, we do not wait for a rotation to serve. Christ&apos;s work is not divided into courses — it is the work of the whole people of God, ongoing, unrehearsed, rising to meet each day&apos;s need. Yet these twenty-four courses teach us something about reliable rhythm: the discipline of appearing at your appointed time, the honor of knowing that others are counting on you, the peace of a structure that does not depend on any one person&apos;s enthusiasm. Do you have places in your life where you show up reliably, where your presence is expected and your service is part of a larger rhythm?',
        },
        {
          kind: 'reflection',
          id: 'course-system',
          prompt: 'The course of Abijah appears in both David&apos;s time and in the New Testament at John the Baptist&apos;s birth. What seemingly small act or choice in your life might echo into the future in ways you cannot yet see?',
        },
      ],
    },

    /* ─── 1 Chronicles 24:20–31 — The Remaining Levites ──────────────── */
    {
      ref: '1 Chronicles 24:20–31',
      title: 'The Remaining Levites and Their Lots',
      blocks: [
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            plain(20, 'And the rest of the sons of Levi were these: Of the sons of Amram; Shubael: of the sons of Shubael; Jehdeiah.'),
            plain(21, 'Concerning Rehabiah: of the sons of Rehabiah, the first was Isshiah. Of the Izharites; Shelomoth: of the sons of Shelomoth; Jahath.'),
            plain(22, 'Of the sons of Hebron; Jeriah the first, Amariah the second, Jahaziel the third, Jekameam the fourth.'),
            plain(23, 'Of the sons of Uzziel; Michah: of the sons of Michah; Shamir.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1-chronicles-24-mid-23',
          html:
            '<p>The genealogy traces how God preserved His people through generations and exile.</p>',
        },
        {
          kind: 'scripture',
          chapter: 24,
          lines: [
            plain(24, 'The brother of Michah was Isshiah: of the sons of Isshiah; Zechariah.'),
            {
              number: 25,
              spans: [
                t('The sons of Merari were Mahli and Mushi: the sons of Mahli; Eleazar, and Kish. And Eleazar died, and had no sons, but daughters: and their brethren the sons of Kish took them. The sons of Mushi; Mahli, and Eder, and Jerimoth, three.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('These were the sons of Levi after the house of their fathers; even the chief of the fathers as they were counted by number of names by their polls, that did the work for the service of the house of the Lord, from the age of twenty years and upward.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('These likewise cast lots over against their brethren the sons of Aaron in the presence of David the king, and Zadok, and Ahimelech, and the chief of the fathers of the priests and Levites, even the principal fathers over against their younger brethren.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'non-priestly-levites',
          html:
            'The priestly courses are only part of the story. The Levites who are not priests — those descended from Amram (beyond Aaron), from Rehabiah, from the Izharites, from Hebron, and from Uzziel — also have their appointed service. They will carry the tabernacle, care for the vessels, maintain the worship space. The machinery of the temple is vast, and every tribe has its place in it.',
        },
        {
          kind: 'hebrew',
          id: 'machleqot-courses',
          title: 'Machleqot — "Divisions" or "Courses"',
          script: 'מַחְלְקוֹת',
          translit: '<strong>Machleqot</strong> · divisions; courses; portions; assigned places in a system',
          description:
            'The word machleqot speaks of division and order. It is related to the root meaning to divide, to distribute, to portion out. Each machleqah knows its place. The system is not oppressive; it is liberating. Everyone knows where they fit. Everyone has a time to serve.',
        },
        {
          kind: 'commentary',
          id: 'eleazar-daughters',
          html:
            'Eleazar, a son of Merari, dies without sons — but he has daughters. The text mentions this quietly: the inheritance will not be lost. His brothers&apos; sons, the sons of Kish, will ensure that Eleazar&apos;s line does not disappear from the records. Even here, in the genealogical architecture of Israel, the care runs deep. A man is remembered not only through sons, but through the community that honors his daughters.',
        },
        {
          kind: 'carry',
          html:
            'The whole enterprise — priests, Levites, singers, gatekeepers, treasurers — is woven together in a single pattern. No one part is sufficient alone. No one person can do everything. David establishes this not as a burden, but as a gift: your role is defined, your people depend on you, and you are part of something larger than yourself. In modern life, we often feel we must do everything ourselves, or at least understand everything fully. But here the message is different: you have a course. You have a time. You serve with others. That is enough.',
        },
        {
          kind: 'reflection',
          id: 'levites-lots',
          prompt: 'All the Levites cast lots together — priests and non-priests, Amramites and Kohathites and Merarites. Who are the people in your life that share your work or purpose, even if your roles are different from theirs?',
        },
      ],
    },

    /* ─── Christ Connection — The Unchangeable Priesthood ──────────────── */
    {
      ref: 'Hebrews 7:24; Luke 1:5–8',
      title: 'The One Priest Who Does Not Rotate',
      blocks: [
        {
          kind: 'christ',
          id: 'christ-unchangeable-priest',
          title: 'Christ Connection — The Unchangeable Priesthood',
          html:
            'Twenty-four courses, each serving in rotation. The pattern is perfect — orderly, sustainable, holy. But it points beyond itself. In Hebrews 7:24, Paul writes of Jesus: "But this man, because he continueth ever, hath an unchangeable priesthood." Christ does not rotate. He does not pass his duties to a successor. He does not serve for a season and then step aside. "Wherefore he is able also to save them to the uttermost that come unto God by him, seeing he ever liveth to make intercession for them" (Hebrews 7:25). The 24 courses collapse into one. The intercession becomes eternal. The one Priest stands before God not for one week, but forever. And the remarkable detail: it was in the course of Abijah that Zacharias stood burning incense when the angel came to announce John the Baptist, who would prepare the way for this very Jesus. The system God established in David&apos;s time reaches toward its fulfillment centuries later, at the moment of John&apos;s conception. God&apos;s planning spans ages.',
        },
      ],
    },
  ],
};
