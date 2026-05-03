import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Ezra 6 — Darius's Decree; The Temple Finished; The Passover Kept
 *
 * King Darius searches for the original decree of Cyrus and discovers it in
 * Babylon. He not only affirms Cyrus's order to rebuild the temple, but issues
 * his own expanded decree, funding the project from the royal treasury and
 * pronouncing a curse on anyone who would alter his word. The temple is finished
 * on the third day of Adar. The returnees dedicate it with joy and twelve he-goats,
 * one for each tribe. Finally, they keep the Passover — and the text emphasizes
 * that those "who had separated themselves from the filthiness of the heathen"
 * are welcomed to eat and celebrate with the children of Israel. God's heart and
 * the heart of the king turn as one. The remnant rejoices.
 */
export const EZRA_6: RichChapterContent = {
  bookSlug: 'ezra',
  bookName: 'Ezra',
  chapter: 6,

  estimatedMinutes: { 5: 7, 10: 13, 15: 18 },
  intros: [
    'The work of rebuilding has slowed. The enemies of Judah have lodged complaints with King Darius, claiming that no decree from Cyrus authorized the Jews to rebuild their temple. The construction stalls. But Darius, curious about the truth, orders a search through the archives in Babylon. There, in the house of the rolls, a scroll is found — the very decree of Cyrus, written on parchment, stored in a palace of the Medes.',
    'What Darius finds ignites more than compliance. He adds his own voice to Cyrus&apos;s. Not only does he affirm the original order; he funds the work from the royal treasury. He supplies beasts for the altar and flour, wine, and salt for the priests. And he pronounces a curse upon anyone foolish enough to alter his word: let timber be pulled from their house, and let them be hanged thereon.',
    'The result is swift. The elders of the Jews prosper through the help of Darius and through the words of the prophets Haggai and Zechariah. The temple is finished. They dedicate it with joy — 100 bullocks, 200 rams, 400 lambs offered. And then, finally, they keep the Passover. All Israel eats together, and with them, "all such as had separated themselves unto them from the filthiness of the heathen of the land, to seek the Lord God of Israel." The Gentiles are invited in. And the Lord has turned the king&apos;s heart.',
  ],

  bottomShare: {
    label: 'Share Ezra 6',
    quote:
      'The Lord turned the king&apos;s heart, and the temple was finished. Gentiles and Israelites ate the Passover together, for all who sought the God of Israel were made welcome at His table.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezra 6 · Study Guide',
  },

  sections: [
    /* ─── Ezra 6:1–5 — Darius Searches; Cyrus's Decree Found ──────────── */
    {
      ref: 'Ezra 6:1–5',
      title: 'The Scroll Found in Babylon',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(1, 'Then Darius the king made a decree, and search was made in the house of the rolls, where the treasures were laid up in Babylon.'),
            plain(
              2,
              'And there was found at Achmetha, in the palace of the province of the Medes, a roll: therein was a record thus written:'
            ),
            {
              number: 3,
              spans: [
                t('In the first year of Cyrus the king the same Cyrus the king made a decree concerning the house of God at Jerusalem, Let the house be builded, the place where they offered sacrifices, let the '),
                hg('foundations thereof be strongly laid', 'ez6-foundation'),
                t('; the height thereof 60 cubits, the breadth thereof 60 cubits;'),
              ],
            },
            plain(4, 'With three rows of great stones, and a row of new timber: let the expences be given out of the king\'s house:'),
            {
              number: 5,
              spans: [
                t('Also let the '),
                hy('golden and silver vessels of the house of God', 'ez6-vessels'),
                t(', which Nebuchadnezzar took forth out of the temple which is at Jerusalem, and brought unto Babylon, be restored, and brought again unto the temple which is at Jerusalem, every one to his place, and place them in the house of God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ez6-search',
          html:
            'Darius does not dismiss the complaint out of hand. He orders the archives searched. This simple act — to seek the truth, to look into the record — opens the door to everything that follows. In Babylon, in the palace of the Medes, the scroll lies waiting. Cyrus had written his decree. And now, decades later, it emerges as proof.',
        },
        {
          kind: 'commentary',
          id: 'ez6-foundation',
          html:
            'The decree specifies measurements: 60 cubits high, 60 cubits wide. Three rows of great stones, a row of new timber. The temple is to be built substantially, with foundations "strongly laid." This is not a hastily assembled shrine, but a proper house for the God of Israel. And the king&apos;s treasury will pay for it.',
        },
        {
          kind: 'commentary',
          id: 'ez6-vessels',
          html:
            'The vessels — the golden and silver treasures that Nebuchadnezzar plundered — are to be returned. What was taken in conquest is to be restored in grace. This is not merely a rebuilding. This is a restoration. The old sanctuary&apos;s furnishings will once again serve in God&apos;s house.',
        },
        {
          kind: 'hebrew',
          id: 'ez6-darshan',
          title: 'Daryaveshu — "Darius"',
          script: 'דָּרְיָוֶשׁ',
          translit: '<strong>Daryaveshu</strong> · Darius; the Persian king; bearer of authority',
          description:
            'The name appears in the Old Persian as "Dāryavahuš" and becomes known through the Behistun Inscription and other monuments. Darius I was a figure of remarkable organizational skill and justice — "the king of kings," as he styled himself. In this passage, the God of Israel uses even a foreign king&apos;s authority to accomplish His will.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes the truth we need is already written. It waits in the archives. It waits for someone to search for it, to ask the right questions, to be willing to look beyond the immediate complaint and seek what is actually true. When accusations come against you, or when you doubt the right course of action, do you have the courage to search for the truth, to look at the record?',
        },
        {
          kind: 'reflection',
          id: 'ez6-search-truth',
          prompt:
            'Darius could have simply ruled against the Jews without investigating. Instead, he searched. When have you discovered that the real story was quite different from what a complaint suggested? How did that change your response?',
        },
      ],
    },

    /* ─── Ezra 6:6–12 — Darius's Expanded Decree ────────────────────── */
    {
      ref: 'Ezra 6:6–12',
      title: 'The King\'s Decree: Funds and a Curse',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 6,
              spans: [
                t('Now therefore, Tatnai, governor beyond the river, Shethar-boznai, and your companions the Apharsachites, which are beyond the river: '),
                hg('BE YE FAR FROM THENCE', 'ez6-be-far'),
                t(': let the work of this house of God alone;'),
              ],
            },
            plain(7, 'Let the governor of the Jews and the elders of the Jews build this house of God in his place.'),
            {
              number: 8,
              spans: [
                t('Moreover I make a decree what ye shall do to the elders of these Jews for the building of this house of God: of the king\'s goods, even of the tribute beyond the river, '),
                hg('FORTHWITH EXPENSES BE GIVEN', 'ez6-forthwith'),
                t(' unto these men, that they be not hindered.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('That which they have need of, both '),
                hy('young bullocks, rams, lambs, for the burnt offerings', 'ez6-bullocks'),
                t(', wheat, salt, wine, oil, according to the appointment of the priests at Jerusalem, let it be given them day by day without fail: that they may offer sacrifices of sweet savours unto the God of heaven, and pray for the life of the king, and of his sons.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Also I have made a decree, that whosoever shall alter this word, let timber be pulled down from his house, and being set up, let him be hanged thereon; let his house be made a '),
                hg('dunghill', 'ez6-dunghill'),
                t(' for this.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And the God that hath caused his name to dwell there destroy all kings and people, that shall put to their hand to alter and to destroy this house of God which is at Jerusalem. I Darius have made a decree; let it be done with speed.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ez6-be-far',
          html:
            'Darius speaks with absolute authority. "Be ye far from thence." The opposition is dismissed. The rivals, the enemies of Judah, are commanded to cease and desist. Leave the work alone. Let the Jews build in peace. This is the voice of a king whose word cannot be disputed — and that word is liberation.',
        },
        {
          kind: 'commentary',
          id: 'ez6-forthwith',
          html:
            'The king goes further. Not only does he command the work to proceed; he funds it. From the royal treasury, from the tribute of the provinces beyond the river, expenses are to be given immediately to the elders of the Jews. "Without delay" — the work must not languish. The king himself becomes the project&apos;s patron.',
        },
        {
          kind: 'commentary',
          id: 'ez6-bullocks',
          html:
            'Every requirement is provided: bullocks for sacrifice, lambs, flour, wine, oil, salt. The priests are to lack nothing. Darius understands that a house for God requires not just stone and timber, but the means to worship. The sacrifices must be made. The prayers must be offered. And so the king provides.',
        },
        {
          kind: 'commentary',
          id: 'ez6-dunghill',
          html:
            'And then Darius speaks a curse. If anyone alters this decree, let timber be torn from their own house — and let them be hanged upon it. Let their house become a dunghill. This is the language of ancient Near Eastern oaths. The penalty is severe because the matter is sacred. To interfere with God&apos;s house is to court the displeasure of both the king and the God who dwells there.',
        },
        {
          kind: 'hebrew',
          id: 'ez6-chagag',
          title: 'Chagag — "To Celebrate" or "Keep a Feast"',
          script: 'חָגַג',
          translit: '<strong>Chagag</strong> · to keep or celebrate a feast; to dance in celebration',
          description:
            'The word carries the sense of joyful assembly, of a feast kept in remembrance. When the text says they "kept the Passover" (chagag et ha-Pesach), it means not merely to observe, but to celebrate with joy and communal presence. This verb will echo in the dedication ceremony that follows.',
        },
        {
          kind: 'carry',
          html:
            'Darius turns the king&apos;s heart — not by the Jews&apos; pleading, but by truth. When you seek to protect something sacred, you need not rely on your own persuasion. Truth, when found, carries its own authority. And sometimes those with power will use that power on behalf of righteousness. When has someone with real authority stepped in on your behalf, not because you demanded it, but because justice required it?',
        },
        {
          kind: 'reflection',
          id: 'ez6-king-heart',
          prompt:
            'The king&apos;s decree includes both provision (he funds the work) and protection (he curses those who interfere). In what ways do you need God to provide for you, and in what ways do you need Him to protect what is precious to you?',
        },
      ],
    },

    /* ─── Ezra 6:13–15 — The Temple Finished ──────────────────────────── */
    {
      ref: 'Ezra 6:13–15',
      title: 'The Temple Finished',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 13,
              spans: [
                t('Then Tatnai, Shethar-boznai, their companions, according to that which Darius the king had sent, so they did speedily.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And the elders of the Jews builded, '),
                hg('prospered', 'ez6-prospered'),
                t(', through the prophesying of Haggai the prophet and Zechariah son of Iddo. They builded, finished it, according to the commandment of the God of Israel, and according to the commandment of Cyrus, and Darius, and Artaxerxes king of Persia.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('THIS HOUSE WAS FINISHED on the third day of the month Adar, which was in the sixth year of the reign of Darius the king.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ez6-prospered',
          html:
            'The opposition ceases. The work accelerates. "The elders of the Jews builded, prospered." The verb carries the sense of moving forward successfully, of thriving in the work. And they do so through the encouragement of the prophets Haggai and Zechariah, whose words had stirred them to rebuild months earlier. Human effort meets divine encouragement, and the house rises.',
        },
        {
          kind: 'commentary',
          id: 'ez6-finished',
          html:
            'The text marks the completion with exactness: the third day of Adar, the sixth year of Darius&apos;s reign. This is not vague, this is history — a specific date, a specific moment when the work is done. The temple, destroyed seventy years earlier by Nebuchadnezzar, stands again. The holy place has been restored.',
        },
        {
          kind: 'commentary',
          id: 'ez6-double-king',
          html:
            'Notice the remarkable convergence: "according to the commandment of the God of Israel, and according to the commandment of Cyrus, and Darius." What God desires and what the kings decree are aligned. This is not accidental. It is a demonstration of how God&apos;s purposes flow through human authority — when that authority listens and obeys.',
        },
        {
          kind: 'christ',
          id: 'ez6-king-heart-connection',
          title: 'Christ Connection — God Turns the King\'s Heart',
          html:
            'The proverb says, "The king\'s heart is in the hand of the Lord, as the rivers of water: he turneth it whithersoever he will" (Proverbs 21:1). Darius does not come to this decree through his own inspiration. His heart is turned. And in the New Testament, the same truth applies: "Now when Jesus was born in Bethlehem of Judaea in the days of Herod the king, behold, there came wise men from the east" (Matthew 2:1). God guides even pagan rulers toward His purposes. And ultimately, Christ Himself is the One who reigns over all kingdoms, whose authority is eternal, whose word stands forever — a king more powerful than Darius, more generous, more just.',
        },
        {
          kind: 'carry',
          html:
            'The temple is finished not through human strength alone, but through the convergence of human effort, prophetic encouragement, and the turning of a king\'s heart by God. When you face an obstacle that seems too large for you alone, do you look for how God might be turning hearts around you? Do you trust that your own obedience may be working in concert with larger purposes?',
        },
        {
          kind: 'reflection',
          id: 'ez6-temple-finished',
          prompt:
            'The temple took seventy years to rebuild — from destruction to restoration. What have you had to rebuild in your own life that took far longer than you expected? What did you learn about persistence in that restoration?',
        },
      ],
    },

    /* ─── Ezra 6:16–18 — The Dedication with Joy ────────────────────── */
    {
      ref: 'Ezra 6:16–18',
      title: 'The Dedication: Joy and Sacrifice',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 16,
              spans: [
                t('And the children of Israel, the priests, the Levites, and the rest of the children of the captivity, '),
                hg('KEPT THE DEDICATION OF THIS HOUSE OF GOD WITH JOY', 'ez6-dedication-joy'),
                t(':'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And offered at the dedication of this house of God 100 bullocks, 200 rams, 400 lambs; and for a sin offering for all Israel, '),
                hy('12 he goats', 'ez6-twelve-goats'),
                t(', according to the number of the tribes of Israel.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And they set the priests in their divisions, and the Levites in their courses, for the service of God, which is at Jerusalem; as it is written in the book of Moses.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ez6-dedication-joy',
          html:
            'The dedication is kept with joy. Not solemnity alone, but celebration. The house is restored, the altar is ready, and the people rejoice. This is not a quiet ceremony; this is a festival. After years of opposition and exile, the children of Israel, the priests, the Levites, and "the rest of the children of the captivity" gather to keep the dedication with singing, with sacrifice, with gladness.',
        },
        {
          kind: 'commentary',
          id: 'ez6-twelve-goats',
          html:
            'The numbers are precise. Twelve he-goats for a sin offering "according to the number of the tribes of Israel." Even though most of the northern kingdom has been scattered, even though the remnant consists primarily of Judah, Benjamin, and Levi, the offering represents all Israel. The whole nation is remembered, the whole nation is interceded for. The restored temple stands on behalf of the covenant people as a whole.',
        },
        {
          kind: 'commentary',
          id: 'ez6-divisions',
          html:
            'The priestly order is established. The Levites are set in their courses. The worship of the temple resumes according to the law of Moses. This is not innovation; this is restoration. The ancient patterns of priesthood and service are honored and renewed.',
        },
        {
          kind: 'hebrew',
          id: 'ez6-nivdal',
          title: 'Nivdal — "Separated" or "Distinguished"',
          script: 'נִבְדָּל',
          translit: '<strong>Nivdal</strong> · to be separated; to be set apart; to be distinct',
          description:
            'This verb will appear in verse 21 — those who "separated themselves" from the filthiness of the heathen. The same root carries the sense of being set apart for a sacred purpose, of drawing near to God by drawing away from that which defiles.',
        },
        {
          kind: 'carry',
          html:
            'When something sacred is restored, it calls for more than obligation — it calls for joy. Do you approach worship with the joy of the dedicated remnant, or have you let routine drain away the celebration? What would it mean to "keep" something you love "with joy," rather than merely going through the motions?',
        },
        {
          kind: 'reflection',
          id: 'ez6-dedication',
          prompt:
            'The dedication includes sacrifices offered for all Israel — even the lost northern tribes. Whom do you carry in prayer, interceding for them even when they seem far away? What does it mean to remember them as part of God\'s people?',
        },
      ],
    },

    /* ─── Ezra 6:19–22 — The Passover Kept; Gentiles Welcomed ──────────── */
    {
      ref: 'Ezra 6:19–22',
      title: 'The Passover: Israel and the Converted Gentiles',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 19,
              spans: [
                t('And the children of the captivity '),
                hg('KEPT THE PASSOVER', 'ez6-kept-passover'),
                t(' upon the 14th day of the first month.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('For the priests and the Levites were purified together, all of them were pure, and killed the passover for all the children of the captivity, and for their brethren the priests, and for themselves.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And the children of Israel, which were come again out of captivity, and '),
                hp('ALL SUCH AS HAD SEPARATED THEMSELVES UNTO THEM FROM THE FILTHINESS OF THE HEATHEN OF THE LAND', 'ez6-separated-gentiles'),
                t(', to seek the Lord God of Israel, '),
                hg('did eat, and kept the feast of unleavened bread 7 days with joy', 'ez6-feast-joy'),
                t(': for the Lord had made them joyful, and turned the heart of the king of Assyria unto them, to strengthen their hands in the work of the house of God, the God of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ez6-kept-passover',
          html:
            'Seventy years earlier, the Passover could not be kept in Jerusalem. The temple lay in ruins. The people were in exile. Now, with the temple restored, the Passover is celebrated again. The memorial of the exodus, the feast that connects each generation to the deliverance from Egypt, is observed in the very place where it was ordained to be observed. The cycle is complete.',
        },
        {
          kind: 'commentary',
          id: 'ez6-separated-gentiles',
          html:
            'Notice the inclusivity of this moment. "All such as had separated themselves unto them from the filthiness of the heathen of the land, to seek the Lord God of Israel" — these are Gentiles who have chosen to follow the God of Israel. They have renounced the practices of the surrounding peoples. They have aligned themselves with God\'s covenant people. And they are invited to eat the Passover. The Passover is not exclusive; it is open to all who seek the Lord God of Israel and have separated themselves unto Him.',
        },
        {
          kind: 'commentary',
          id: 'ez6-feast-joy',
          html:
            'The feast is kept with joy. For seven days, Israel and the converted Gentiles eat unleavened bread, remembering deliverance. And the joy is not accidental — the Lord had made them joyful. This is grace. The Lord turned the heart of the king of Assyria (or Persia, as Darius might be called in reflection of ancient history) unto them, to strengthen their hands in the work. God is actively ensuring that the restored community prospers.',
        },
        {
          kind: 'christ',
          id: 'ez6-passover-connection',
          title: 'Christ Connection — Christ Our Passover',
          html:
            'Paul writes: "For even Christ our passover is sacrificed for us" (1 Corinthians 5:7). The lambs slain in this Passover celebration point to Christ, the Lamb of God. And the inclusion of Gentiles who have "separated themselves from the filthiness of the heathen" — those who are no longer defined by their former identity but by their choice to seek God — this prefigures the New Testament reality: "For he is our peace, who hath made both one, and hath broken down the middle wall of partition between us; having abolished in his flesh the enmity, even the law of commandments contained in ordinances; for to make in himself of twain one new man, so making peace" (Ephesians 2:14–15). In Christ, the division between Jew and Gentile is broken. All who seek Him are welcome at His table.',
        },
        {
          kind: 'carry',
          html:
            'The Passover is kept in a community that includes both the native Israelites and those who have separated themselves from the surrounding world to seek God. No one is turned away who genuinely seeks. What walls have you broken down in your own life between yourself and others? Whom have you welcomed to your table because they seek God alongside you?',
        },
        {
          kind: 'reflection',
          id: 'ez6-passover-gentiles',
          prompt:
            'Those who "separated themselves from the filthiness of the heathen" are invited to keep the Passover. What does it mean to "separate yourself" from worldly patterns without becoming arrogant or superior to those who have not yet made that choice? How do you balance conviction with welcome?',
        },
      ],
    },
  ],
};
