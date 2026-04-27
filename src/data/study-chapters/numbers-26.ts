import { hp, hy, hg, t, verse as verse, plain, type RichChapterContent } from './types';

/**
 * Numbers 26 — The second census. After 38 years of wandering in the
 * wilderness, God commands a new census of the people, tribe by tribe. The
 * count: 601,730 — almost identical to the first census in Numbers 1 (603,550),
 * despite forty years of wandering and the death of the entire first generation.
 * This is a stunning statement: a generation has died, but God's people remain.
 * The structure mirrors the first census: twelve tribes counted, Levites counted
 * separately (23,000), detailed notes on each tribe's numbers.
 *
 * A new detail emerges: the case of the five daughters of Zelophehad. These
 * women have no brothers, so the inheritance law is unclear. Their case will be
 * heard in chapter 27. This signals the shift to the next generation and their
 * concerns.
 *
 * The chapter ends with a parenthetical that is actually the headline: "But among
 * these there was not a man of them whom Moses and Aaron the priest numbered,
 * when they numbered the children of Israel in the wilderness of Sinai. For the
 * LORD had said of them, They shall surely die in the wilderness. And there was
 * not left a man of them, save Caleb the son of Jephunneh, and Joshua the son of
 * Nun." Every adult from the first census is dead except two: Caleb and Joshua.
 * God kept His word.
 *
 * The principle: God's purposes survive a generation's failure. Heb 4 warns, "let
 * us labour therefore to enter into that rest, lest any man fall after the same
 * example of unbelief." A whole generation was lost, but Joshua (Yeshua, "the
 * LORD saves") will lead the next one in.
 */
export const NUMBERS_26: RichChapterContent = {
  bookSlug: 'numbers',
  bookName: 'Numbers',
  chapter: 26,

  intros: [
    'Thirty-eight years have passed since the judgment at Kadesh Barnea. The first generation is nearly gone. God tells Moses to count the people again — a new census of the wilderness survivors. Tribe by tribe, the people are numbered. The total: 601,730. Astonishingly, this is almost identical to the first census forty years earlier — 603,550 — despite the fact that almost an entire generation has died. The shape of Israel has not changed. God has preserved a people.',
    'As the tribes are counted, a new detail appears. Five women named Zelophehad — they have no brothers, and their father is dead. Under the current inheritance law, there is no provision for daughters. They step forward with a problem: the law was written for a different situation. Their case will be heard in the next chapter. It is a signal that the focus is shifting from the old generation to the new.',
    'The chapter closes with a statement that reads like a parenthetical but is actually the entire point: "But among these there was not a man of them whom Moses and Aaron the priest numbered, when they numbered the children of Israel in the wilderness of Sinai. For the LORD had said of them, They shall surely die in the wilderness. And there was not left a man of them, save Caleb the son of Jephunneh, and Joshua the son of Nun." God kept His word. One generation is gone. But the people remain. And the man who will lead them in is named Joshua — which means "the LORD saves."',
  ],

  bottomShare: {
    label: 'Share Numbers 26',
    quote:
      'After forty years in the wilderness, God counted the people a second time. The total was nearly identical to the first census: 601,730 souls. Every adult of the first generation was dead except Caleb and Joshua. God had kept His word, and a new generation was ready to enter the land.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Numbers 26 · Study Guide',
  },

  sections: [
    /* ─── Numbers 26:1–4 — The Command to Count ──────────────────────────── */
    {
      ref: 'Numbers 26:1–4',
      title: 'After Thirty-Eight Years',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            verse(1,
              t('And it came to pass after the plague, that the Lord spake unto Moses and unto Eleazar the son of Aaron the priest, saying,')
            ),
            verse(2,
              t('Take the sum of all the congregation of the children of Israel, from '),
              hg('twenty years old and upward', 'age-twenty-census'),
              t(', throughout their fathers\' house, all that are able to go to war in Israel.')
            ),
            verse(3,
              t('And Moses and Eleazar the priest spake with them in the plains of Moab by Jordan near Jericho, saying,')
            ),
            verse(4,
              t('Take the sum of the people, from '),
              hg('twenty years old and upward', 'age-second-census'),
              t('; as the Lord commanded Moses and the children of Israel, which went forth out of the land of Egypt.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'age-twenty-census',
          html:
            'The census counts only males twenty years old and upward — the same criterion as the first census. But there is a crucial difference: thirty-eight years ago, these were fighting men of the first generation. Now they are the next generation. The first group was counted on the edge of the Red Sea, filled with fear and unbelief. This generation is being counted on the edge of Canaan, ready to cross.',
        },
        {
          kind: 'commentary',
          id: 'age-second-census',
          html:
            'The command comes after "the plague" — likely referring to the plague that killed the ten unfaithful spies (Numbers 14:37). Now, with thirty-eight more years of deaths, the census is taken again. Moses and Eleazar — the new high priest (Aaron is near the end of his life) — perform the count in the same way as before, "as the Lord commanded." This is not arbitrary; it echoes the first census and shows continuity: God still has a people, still knows their number, still marches with them.',
        },
        {
          kind: 'carry',
          html:
            'There is something deeply comforting in the fact that God asks for a count. He is not impatient with the waiting. He is not abandoning the people because a generation failed. Instead, He takes the time to number the next generation, to know them, to account for them. If you feel like you are in a season of waiting, that a previous season ended in failure, that you are somehow in exile or in between — God knows your number. He is not distracted by what was lost.',
        },
        {
          kind: 'reflection',
          id: 'reflection-count',
          prompt: 'What would it mean to you to know that God has counted you, that you are not just one face in a crowd, but personally known and numbered?',
        },
      ],
    },

    /* ─── Numbers 26:5–50 — The Tribes Are Numbered ──────────────────────── */
    {
      ref: 'Numbers 26:5–50',
      title: 'Reuben, Simeon, Gad, Judah, and Beyond',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            verse(5,
              t('Reuben, the eldest son of Israel: the children of Reuben; Hanoch, of whom cometh the family of the Hanochites: of Pallu, the family of the Palluites.')
            ),
            verse(6,
              t('Of Hezron, the family of the Hezronites: of Carmi, the family of the Carmites.')
            ),
            verse(7,
              t('These are the families of the Reubenites: and they that were numbered of them were forty and three thousand and seven hundred and thirty.')
            ),
            plain(8, 'And the sons of Pallu; Eliab.'),
            verse(9,
              t('And the sons of Eliab; Nemuel, and Dathan, and Abiram. This is that Dathan and Abiram, which were '),
              hg('famous in the congregation', 'dathan-abiram-rebellion'),
              t(', who strove against Moses and against Aaron in the company of Korah, when they strove against the Lord.')
            ),
            verse(10,
              t('And the earth opened her mouth, and swallowed them up together with Korah, when that company died, what time the fire devoured two hundred and fifty men: and they became a '),
              hg('sign', 'sign-korah-deaths'),
              t('.')
            ),
            verse(11,
              t('Notwithstanding the children of Korah died not.')
            ),
            plain(12, 'The sons of Simeon after their families: of Nemuel, the family of the Nemuelites: of Jamin, the family of the Jaminites: of Jachin, the family of the Jachinites:'),
            plain(13, 'Of Zerah, the family of the Zarhites: of Shaul, the family of the Shaulites.'),
            verse(14,
              t('These are the families of the Simeonites, twenty and two thousand and two hundred.')
            ),
            plain(15, 'The children of Gad after their families: of Zephon, the family of the Zephonites: of Haggi, the family of the Haggites: of Shuni, the family of the Shunites:'),
            plain(16, 'Of Ozni, the family of the Oznites: of Eri, the family of the Erites:'),
            verse(17,
              t('Of Arod, the family of the Arodites: of Areli, the family of the Arelites.')
            ),
            verse(18,
              t('These are the families of the children of Gad according to those that were numbered of them, forty thousand and five hundred.')
            ),
            plain(19, 'The sons of Judah were Er and Onan: and Er and Onan died in the land of Canaan.'),
            plain(20, 'And the sons of Judah after their families were; of Shelah, the family of the Shelanites: of Pharez, the family of the Pharzites: of Zerah, the family of the Zarhites.'),
            verse(21,
              t('And the sons of Pharez were; of Hezron, the family of the Hezronites: of Hamul, the family of the Hamulites.')
            ),
            verse(22,
              t('These are the families of Judah according to those that were numbered of them, threescore and sixteen thousand and five hundred.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'dathan-abiram-rebellion',
          html:
            'Dathan and Abiram led the rebellion against Moses in Numbers 16, allied with Korah. The text does not let us forget them — their names are still "famous" or "notorious" in the congregation. This is a warning: the names of those who oppose God are remembered, not forgotten. But the families they came from still exist, still count. Dathan and Abiram are gone; the congregation goes on.',
        },
        {
          kind: 'commentary',
          id: 'sign-korah-deaths',
          html:
            'The judgment on Korah and his followers becomes a "sign" — a permanent lesson written into the history of Israel. The text pauses to record this moment because it matters for the next generation. They need to know: rebellion against God has consequences.',
        },
        {
          kind: 'commentary',
          id: 'note-tribes',
          html:
            'The text continues through all the tribes, listing each family and its number. Judah is the largest tribe (76,500), followed by Issachar and Zebulun. The details are less important than the pattern: each tribe has families, each family has a number. God knows them all. The text is genealogical and precise — this is not poetry; this is the brass tacks of how a people is counted and known.',
        },
        {
          kind: 'carry',
          html:
            'In a census, everyone matters. The great names are recorded alongside the ordinary ones. A family from Reuben counts the same as a family from Judah. In God\'s accounting, every person is a name, every family a count. If you are here, if you are part of His people, you are not a statistic — you are a number that God knows.',
        },
      ],
    },

    /* ─── Numbers 26:51–56 — The Total Count ──────────────────────────────── */
    {
      ref: 'Numbers 26:51–56',
      title: 'The New Generation Counted',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            verse(51,
              t('These were the numbered of the children of Israel, '),
              hp('six hundred one thousand and seven hundred and thirty', 'total-census-second'),
              t('.')
            ),
            verse(52,
              t('And the Lord spake unto Moses, saying,')
            ),
            verse(53,
              t('Unto these the land shall be divided for an inheritance according to the number of names.')
            ),
            verse(54,
              t('To many thou shalt give the more inheritance, and to few thou shalt give the less inheritance: to every one shall his inheritance be given according to those that were numbered of him.')
            ),
            verse(55,
              t('Notwithstanding the land shall be divided by lot: according to the names of the tribes of their fathers they shall inherit.')
            ),
            verse(56,
              t('According to the lot shall the possession thereof be divided between many and few.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'total-census-second',
          html:
            'Six hundred one thousand seven hundred and thirty. Compare this to the first census in Numbers 1:46 — 603,550. The difference: only 1,820 people fewer after forty years in the wilderness. A generation has died, but the size of the nation is virtually identical. This is not by accident. It is by God\'s hand. He has preserved a people for the land.',
        },
        {
          kind: 'commentary',
          id: 'division-inheritance',
          html:
            'The inheritance of Canaan will be divided by lot, but the proportion of each tribe\'s inheritance is determined by its census number. Larger tribes get larger portions. This ensures the distribution is both fair (proportional to size) and divine (determined by lot). God\'s justice is both mathematical and mysterious.',
        },
        {
          kind: 'christ',
          id: 'christ-purposes-survive',
          title: 'Christ Connection — God\'s Purposes Survive Failure',
          html:
            'One generation rejected God\'s word and died in the wilderness. Their unbelief seemed to have shattered the promise. But God did not waver. The promise was transferred to the next generation. Hebrews 4:1 echoes this: "Let us therefore fear, lest, a promise being left us of entering into his rest, any of you should seem to come short of it." The people who died in unbelief lost the promise. But the promise itself did not fail. A whole generation of Israel could be lost, and God\'s purposes would still stand. In Christ, this is the scandal and the comfort of the gospel: God\'s purposes do not depend on any one person\'s faithfulness. They depend on His own.',
        },
        {
          kind: 'carry',
          html:
            'If you have watched a generation — maybe your own parents, maybe your own peers — turn away from what they once believed, you have probably felt the weight of that: does God still care? Is the promise still good? This chapter answers: yes. God\'s promise is not hostage to any generation\'s faith. It moves forward. It may skip over some. It will not skip over His word.',
        },
      ],
    },

    /* ─── Numbers 26:57–62 — The Levites Counted Separately ────────────────── */
    {
      ref: 'Numbers 26:57–62',
      title: 'The Levites: A Separate Count',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            plain(57, 'And these are they that were numbered of the Levites after their families: of Gershon, the family of the Gershonites: of Kohath, the family of the Kohathites: of Merari, the family of the Merarites.'),
            plain(58, 'These are the families of the Levites: the family of the Libnites, the family of the Hebronites, the family of the Mahlites, the family of the Mushites, the family of the Korathites. And Kohath begat Amram.'),
            verse(59,
              t('And the name of Amram\'s wife was Jochebed, the daughter of Levi, whom her mother bare to Levi in Egypt: and she bare unto Amram Aaron and Moses, and Miriam their sister.')
            ),
            verse(60,
              t('And Aaron begat Nadab, and Abihu, Eleazar, and Ithamar.')
            ),
            verse(61,
              t('And Nadab and Abihu died, when they offered '),
              hg('strange fire before the Lord', 'strange-fire-nadab-abihu'),
              t('.')
            ),
            verse(62,
              t('And those that were numbered of them were twenty and three thousand, all males from a month old and upward: for they were not numbered among the children of Israel, because there was not given them any inheritance among the children of Israel.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'strange-fire-nadab-abihu',
          html:
            'The text pauses to note that Nadab and Abihu — Aaron\'s sons — died for offering "strange fire" to the Lord (Numbers 10). Their death is not punishment for gross rebellion; it is judgment for irreverence. They treated the holy presence of God with casualness. Their names are in the text to mark: holiness matters. Even priests, even the sons of the high priest, fall under God\'s law.',
        },
        {
          kind: 'commentary',
          id: 'levites-no-inheritance',
          html:
            'The Levites are numbered separately and explicitly excluded from the inheritance of Canaan. They receive no portion of land. Instead, they receive cities scattered throughout the land and the tithes of the people. Their inheritance is God Himself. This is not less; it is different. They will live among the people but not settle like them. They are set apart for service.',
        },
        {
          kind: 'carry',
          html:
            'If your calling is a different calling — if you are meant to serve rather than settle, to give rather than accumulate, to be dispersed rather than consolidated — this is not less than others are called to. It is a different glory. The Levites had no land, but they had the tabernacle. They had no permanent home, but they had God\'s presence. What you do not get may be exactly what makes space for what you do.',
        },
      ],
    },

    /* ─── Numbers 26:63–65 — The Conclusion: All Are Dead Except Two ────────── */
    {
      ref: 'Numbers 26:63–65',
      title: 'Only Two Remain',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            verse(63,
              t('These are they that were numbered by Moses and Eleazar the priest, who numbered the children of Israel in the plains of Moab by Jordan near Jericho.')
            ),
            verse(64,
              t('But '),
              hg('among these there was not a man of them whom Moses and Aaron the priest numbered, when they numbered the children of Israel in the wilderness of Sinai', 'not-a-man-remains'),
              t('.')
            ),
            verse(65,
              t('For the Lord had said of them, '),
              hp('They shall surely die in the wilderness', 'death-word-kept'),
              t('. And there '),
              hg('was not left a man of them, save Caleb the son of Jephunneh, and Joshua the son of Nun', 'caleb-joshua-alone'),
              t('.')
            ),
          ],
        },
        {
          kind: 'hebrew',
          id: 'not-a-man-remains',
          title: 'Ish — "man"',
          script: 'אִישׁ',
          translit: '<strong>ish</strong> · a man, a person; here, not a single man remains',
          description:
            'The word emphasizes the completeness of the judgment. Not one man from the old generation except two. Every adult who was numbered at Sinai is dead. The wilderness has claimed them all.',
        },
        {
          kind: 'christ',
          id: 'death-word-kept',
          title: 'Christ Connection — God Keeps His Word',
          html:
            'God said in Numbers 14:29, "Your carcases shall fall in this wilderness." Every word God spoke has come to pass. The adults who heard His promise and rejected it are dead. The children and two faithful men alone remain. This is not cruelty; it is the fundamental nature of God: His word does not fall empty. When He speaks judgment, it executes. When He speaks promise, it endures. In Christ, the same God who kept this terrible word keeps His promises of mercy. What He says about sin, about judgment, about redemption — it all stands. His word is not empty.',
        },
        {
          kind: 'commentary',
          id: 'caleb-joshua-alone',
          html:
            'Caleb and Joshua. Two men. Not because they were stronger or smarter, but because they believed God\'s word when no one else did. Their reward is not immediate ease; it is the privilege of leading a new generation into a land their own could not enter. Joshua will be the first to cross the Jordan. His name — Yeshua — means "the LORD saves." It is no accident that the man who will lead Israel into Canaan bears a name that means the Lord\'s salvation.',
        },
        {
          kind: 'reflection',
          id: 'reflection-faith-survival',
          prompt: 'Caleb and Joshua were outnumbered 600,000 to 2, yet their faith is what endures. When your faith is a minority, what keeps you standing?',
        },
        {
          kind: 'carry',
          html:
            'One generation dies in the wilderness. But Joshua lives. Joshua will cross. Joshua will lead. The promise does not end with the first generation\'s failure. It passes to the next. And the man who carries it bears a name that means salvation. This is the shape of God\'s work: a generation may fall away, but His purposes march forward. He always has a Joshua. Always. Even when yours feels impossible, when everything looks dead, when you think the promise has died with the old generation — He has a Joshua waiting in the next season. Your job is to believe when no one else does, as Caleb did, and to let Him do what only He can do, as Joshua would.',
        },
      ],
    },
  ],
};
