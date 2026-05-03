import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Nehemiah 8 — Ezra Reads the Law Publicly
 *
 * After the wall is built, the people gather as one man at the Water Gate.
 * Ezra brings the book of the law before them, and from morning until midday,
 * he reads. The people stand as the book opens — a gesture of reverence. The
 * Levites stand beside Ezra, translating and explaining so that all can
 * understand. And when the people hear the words of the law, they weep. But
 * Nehemiah tells them: this day is holy. The joy of the Lord is your strength.
 * They feast, they make booths, they keep the Feast of Tabernacles — for the
 * first time since the days of Joshua. The wall has been built. Now the people
 * are rebuilt through the public reading and exposition of God's word.
 */
export const NEHEMIAH_8: RichChapterContent = {
  bookSlug: 'nehemiah',
  bookName: 'Nehemiah',
  chapter: 8,

  estimatedMinutes: { beginner: 8, intermediate: 13, deep: 17 },
  intros: [
    'The wall is complete. The enemies have scattered. The people of Jerusalem have accomplished the impossible — they have rebuilt the walls of their city in just fifty-two days, while hostile nations watched and opposed. But now something more important must happen. The wall protects the body of the city. What protects the soul? What binds the people together, not with mortar and stone, but with covenant?',
    'In Nehemiah 8, the people gather at the Water Gate — a public gathering, a deliberate assembly. They ask Ezra the scribe to bring the book of the law of Moses. And for the first time since the exile, they hear it read aloud, publicly, with careful explanation so that all can understand. This is not a hidden revelation for the learned alone. This is the word of God made accessible to every man, woman, and child. And when they hear it, they weep. The response is so moving that the leaders must console them: this day is holy unto the Lord. Do not mourn. Rejoice. The joy of the Lord is your strength.',
  ],

  bottomShare: {
    label: 'Share Nehemiah 8',
    quote:
      'The people gathered as one man at the Water Gate, and Ezra read in the book of the law from morning until midday. "Read distinctly and gave the sense, and caused them to understand the reading." And the joy of the Lord was their strength.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Nehemiah 8 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-torah-scroll',
      kind: 'lexicon',
      source: 'Sefaria',
      label: 'Torah and Jewish Law Texts',
      url: 'https://www.sefaria.org/',
      description: 'Sefaria Hebrew texts on Torah readings and covenant renewal.',
    },
    {
      id: 'sefaria-nehemiah-8',
      kind: 'study',
      source: 'Sefaria',
      label: 'Nehemiah 8 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Nehemiah.8',
      description: 'The Hebrew text of Nehemiah 8 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },
    {
      id: 'bibleodyssey-nehemiah-overview-8',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Nehemiah — SBL Overview',
      url: 'https://www.bibleodyssey.org/articles/nehemiah/',
      description: 'Open-access SBL essay on the historical and literary setting of Nehemiah.',
    },

  ],

  sections: [
    /* ─── Nehemiah 8:1–2 — Gathered As One Man at the Water Gate ────────── */
    {
      ref: 'Nehemiah 8:1–2',
      title: 'Gathered As One Man at the Water Gate',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 1,
              spans: [
                t('And all the people gathered themselves together '),
                hg('as one man', 'gathered-one-man'),
                t(' into the street that was before the water gate; and spake unto Ezra the scribe to bring the book of the law of Moses, which the Lord had commanded to Israel.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And Ezra the priest brought the law before the congregation both of men and women, and all that could hear with understanding, upon the first day of the seventh month.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gathered-one-man',
          html:
            'The phrase "as one man" echoes throughout Scripture — it signals unity, common purpose, and covenant solidarity. The people have not simply repaired their walls; they have recognized that they need something deeper: the word of God. They gather publicly, at the Water Gate, a place of gathering and purification. The request itself is remarkable — they ask Ezra to read to them. The people, not the leaders, initiate this act of spiritual renewal. [res:sefaria-torah-scroll]',
        },
        {
          kind: 'commentary',
          id: 'water-gate-gathering',
          html:
            'The Water Gate is mentioned specifically. In the ancient world, water gates were places of access, of entry, of life itself. Here, at the threshold of this gate, the people gather to receive the water of the word — the living word that will sustain them spiritually as the physical water sustained them physically[res:sefaria-nehemiah-8][res:bibleodyssey-nehemiah-overview-8].',
        },
        {
          kind: 'hebrew',
          id: 'torah-word',
          title: 'Torah — "The Law" or "Teaching"',
          script: 'תּוֹרָה',
          translit: '<strong>Torah</strong> · law; instruction; teaching; the Pentateuch',
          description:
            'The Hebrew word Torah carries the sense not merely of law as restriction, but of teaching, instruction, and revelation. The people are asking not for a legal code to constrain them, but for the teaching of the Lord. This is pedagogy, not punishment.',
        },
        {
          kind: 'carry',
          html:
            'Do we gather for the word? Do we hunger for teaching? The people had built a wall — a practical, visible accomplishment. But they recognized that the real restoration required hearing from God. The call to public Scripture reading, to common gathering around the word, is a call we can still answer today. What would it mean for your community to gather, as one, to hear God speak?',
        },
        {
          kind: 'reflection',
          id: 'water-gate',
          prompt: 'When have you experienced the power of gathering with others to hear God&apos;s word? What draws you to seek teaching, or holds you back from it?',
        },
      ],
    },

    /* ─── Nehemiah 8:3–8 — The People Stood as the Book Opened ────────────── */
    {
      ref: 'Nehemiah 8:3–8',
      title: 'The People Stood as the Book Opened',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 3,
              spans: [
                t('And he read therein before the street that was before the water gate from the morning until midday, before the men and the women, and those that could understand; and the '),
                hg('ears of all the people were attentive unto the book of the law', 'attentive-law'),
                t('.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And Ezra the scribe stood upon a pulpit of wood, which they had made for the purpose; beside him stood Mattithiah and a list of names. And Ezra opened the book in the sight of all the people; (for he was above all the people;) when he opened it, '),
                hg('all the people stood up', 'all-stood'),
                t('.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And Ezra blessed the Lord, the great God. And all the people answered, "Amen, Amen," with lifting up their hands: and they bowed their heads, and worshipped the Lord with their faces to the ground.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('Also Jeshua, Bani, Sherebiah, Jamin, Akkub, Shabbethai, Hodijah, Maaseiah, Kelita, Azariah, Jozabad, Hanan, Pelaiah, the Levites, caused the people to understand the law: and the people stood in their place.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('So they '),
                hy('read in the book in the law of God distinctly, and gave the sense, and caused them to understand the reading', 'read-distinctly'),
                t('.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And Nehemiah, which is the Tirshatha, and Ezra the priest the scribe, and the Levites that taught the people, said unto all the people, "This day is holy unto the Lord your God; mourn not, nor weep." For all the people wept, when they heard the words of the law.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'attentive-law',
          html:
            'The attention of the people is itself a form of worship. From morning until midday — hours of sustained listening. They do not drift. They do not interrupt. Their ears are attentive to the book of the law. This kind of attention to Scripture is rare and precious. It requires discipline, hunger, and reverence.',
        },
        {
          kind: 'commentary',
          id: 'all-stood',
          html:
            'When Ezra opens the book, all the people stand. This is a gesture of reverence, of recognition that something sacred is about to be spoken. The act of standing acknowledges that God&apos;s word is not casual, not entertainment, but something that commands the full person — standing, not reclining, not sitting at ease. The body participates in the reverence of the word.',
        },
        {
          kind: 'commentary',
          id: 'blessed-lord',
          html:
            'Ezra blesses the Lord — and the people respond with their bodies, lifting their hands, bowing their heads, worshipping with their faces to the ground. This is embodied prayer. This is corporate response. The word of God is not received silently and privately; it is received with the full participation of the assembled body.',
        },
        {
          kind: 'hebrew',
          id: 'bin-understand',
          title: 'Bin — "To Understand" or "To Distinguish"',
          script: 'בִּין',
          translit: '<strong>Bin</strong> · to understand; to distinguish; to discern',
          description:
            'The Levites "caused the people to understand the law." The Hebrew word bin means not merely to passively hear, but to actively distinguish, to discern, to parse meaning. The Levites are translators and interpreters. They do not simply read the words; they help the people understand what the words mean.',
        },
        {
          kind: 'commentary',
          id: 'read-distinctly',
          html:
            'This verse is crucial for understanding biblical exposition: "Read in the book in the law of God distinctly, and gave the sense, and caused them to understand the reading." There are three parts: (1) read distinctly — with clarity and precision; (2) gave the sense — provided interpretation; (3) caused them to understand — ensured comprehension. The goal of public Scripture reading is not merely the words themselves, but understanding. The Levites are not passive performers; they are teachers, mediators between the text and the people.',
        },
        {
          kind: 'carry',
          html:
            'How do you encounter Scripture? Do you listen with attentive ears? Do you let your whole body participate in reverence? And do you seek not merely to hear the words, but to understand them — to let them be explained and made clear? The Levites&apos; practice of translating and explaining is still the calling of every teacher, every pastor, every mentor. And the people&apos;s hunger to understand is a hunger we can cultivate in ourselves.',
        },
        {
          kind: 'reflection',
          id: 'stood-book',
          prompt: 'The people wept when they heard the words of the law. What is the difference between hearing Scripture and being moved by it? When has God&apos;s word pierced your heart?',
        },
      ],
    },

    /* ─── Nehemiah 8:9–12 — The Joy of the Lord Is Your Strength ─────────── */
    {
      ref: 'Nehemiah 8:9–12',
      title: 'The Joy of the Lord Is Your Strength',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 9,
              spans: [
                t('And Nehemiah, which is the Tirshatha, and Ezra the priest the scribe, and the Levites that taught the people, said unto all the people, "This day is holy unto the Lord your God; '),
                hg('mourn not, nor weep', 'mourn-not'),
                t('. For all the people wept, when they heard the words of the law. Then he said unto them: Go your way, eat the fat, drink the sweet, send portions unto them for whom nothing is prepared: for this day is holy unto our Lord: neither be ye sorry; for '),
                hp('the joy of the Lord is your strength', 'joy-strength'),
                t('."'),
              ],
            },
            {
              number: 10,
              spans: [
                t('So the Levites stilled all the people, saying, "Hold your peace, for the day is holy; neither be ye grieved." And all the people went their way, to eat, and to drink, and to send portions, and to make great mirth, '),
                hg('because they had understood the words that were declared unto them', 'understood-words'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'mourn-not',
          html:
            'The people have heard God&apos;s word, and they weep. This is natural — they recognize how far they have fallen, how much they have failed. But Nehemiah and Ezra do not let them remain in that place of sorrow. They are told not to mourn, not to weep. Why? Because this day is holy. Mourning has its place, but not on a holy day. This is a feast day, a day of reunion with the word of God.',
        },
        {
          kind: 'hebrew',
          id: 'simcha-joy',
          title: 'Simcha — "Joy" or "Gladness"',
          script: 'שִׂמְחָה',
          translit: '<strong>Simcha</strong> · joy; gladness; celebration',
          description:
            'The Hebrew word simcha is not a light or superficial happiness. It is a deep joy, often associated with feasting, celebration, and the presence of God. It is the joy that arises when a person recognizes they are in the presence of the holy, in covenant with God.',
        },
        {
          kind: 'commentary',
          id: 'joy-strength',
          html:
            'This is one of Scripture&apos;s most powerful promises: "The joy of the Lord is your strength." Not endurance, not discipline alone, but joy is what gives strength. The people are told to eat, to drink, to celebrate, to send portions to those who have nothing. This is not frivolous indulgence; this is the commanded celebration of a holy people who have been reunited with God&apos;s word. The feast is spiritual nourishment.',
        },
        {
          kind: 'commentary',
          id: 'understood-words',
          html:
            'Notice the repetition: the people make great mirth "because they had understood the words that were declared unto them." The joy is not blind. It is the joy of comprehension, of the mind grasping truth. They understand. They recognize the word of God. And in that understanding, they find joy — and in that joy, strength.',
        },
        {
          kind: 'christ',
          id: 'christ-joy-strength',
          title: 'Christ Connection — The Joy That Strengthens',
          html:
            'The promise "the joy of the Lord is your strength" echoes throughout the New Testament. In John 15:11, Jesus says to His disciples: "These things have I spoken unto you, that my joy might remain in you, and that your joy might be full." And in Hebrews 12:2, we are told that Jesus "for the joy that was set before him endured the cross." The joy of alignment with God&apos;s purpose, the joy of covenant, the joy of understanding His will — this is the strength that sustains. The Tabernacles feast, which the people will soon keep, commemorates God&apos;s dwelling with Israel. In the New Testament, John writes: "And the Word was made flesh, and dwelt among us" (John 1:14) — the Greek word <em>skēnoō</em>, "tabernacled." Christ is the fulfillment of the feast, the final dwelling of God with His people. And He brings with Him the joy that is our strength.',
        },
        {
          kind: 'carry',
          html:
            'In a world that tells us to be serious, to stay vigilant, to never let our guard down, Scripture tells us something radical: joy is a strength. Not weakness, not irresponsibility — but joy. The joy that comes from understanding God&apos;s word, from knowing we are in covenant with Him, from feasting together as God&apos;s people. This is the strength that sustains through suffering. This is the strength that endures.',
        },
        {
          kind: 'reflection',
          id: 'joy-strength-2',
          prompt: 'When have you experienced joy as a source of strength? What distinction does Nehemiah draw between mourning and feasting? How can both have their place?',
        },
      ],
    },

    /* ─── Nehemiah 8:13–17 — Dwelling in Booths: The Feast Remembered ──────── */
    {
      ref: 'Nehemiah 8:13–17',
      title: 'Dwelling in Booths: The Feast Remembered',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 13,
              spans: [
                t('And on the second day were gathered together the chief of the fathers of all the people, the priests, and the Levites, unto Ezra the scribe, even to understand the words of the law.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And they found written in the law which the Lord had commanded by Moses, that the children of Israel should '),
                hg('dwell in booths', 'sukkot-booths'),
                t(' in the feast of the seventh month:'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And that they should publish and proclaim in all their cities, and in Jerusalem, saying, Go forth unto the mount, and fetch olive branches, and pine branches, and myrtle branches, and palm branches, and branches of thick trees, to make booths, as it is written.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('So the people went forth, and brought them, and made themselves booths, every one upon the roof of his house, in their courts, and in the courts of the house of God, and in the street of the water gate, and in the street of the gate of Ephraim.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And '),
                hg('all the congregation of them that were come again out of the captivity made booths, and sat under the booths: for since the days of Jeshua son of Nun unto that day had not the children of Israel done so', 'booths-since-joshua'),
                t('. And there was very great gladness.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'sukkot-booths',
          html:
            'As the people continue to read the law, they encounter the command to dwell in booths during the feast of the seventh month — the Feast of Tabernacles (Sukkot). This feast commemorates the wilderness wandering, when the people of Israel lived in tents, dependent on God&apos;s provision and presence. The command is to build booths and dwell in them, to remember that time.',
        },
        {
          kind: 'hebrew',
          id: 'sukkot-booths-word',
          title: 'Sukkot — "Booths" or "Tabernacles"',
          script: 'סֻכּוֹת',
          translit: '<strong>Sukkot</strong> · booths; temporary shelters; the Feast of Tabernacles',
          description:
            'The Hebrew word sukkot refers to temporary, frail structures — not permanent dwellings. Each booth is a reminder of vulnerability, of dependence. To dwell in a booth is to remember that we are not self-sufficient, that we rely on God&apos;s protection and provision.',
        },
        {
          kind: 'commentary',
          id: 'booths-since-joshua',
          html:
            'This detail is staggering. Since the days of Joshua, since the conquest of Canaan, the children of Israel had not kept the Feast of Tabernacles in this way. For over a thousand years, the feast had been neglected or kept only in token form. Now, in the aftermath of exile and restoration, the people rediscover the command, and they keep it — not in the temple alone, but in their homes, on their rooftops, in the streets. The whole city becomes a tent city, a reminder of the wilderness, of God&apos;s faithfulness.',
        },
        {
          kind: 'commentary',
          id: 'great-gladness',
          html:
            'And the response to this discovery is great gladness. The people have not been forced to keep this feast. They have read the law and discovered this command, and they respond with joy. The gladness comes not from obligation, but from recognition — the recognition that their ancestors\' journey through the wilderness was holy, that God sustained them then, and will sustain them now.',
        },
        {
          kind: 'carry',
          html:
            'The Feast of Tabernacles teaches us to remember vulnerability. In our security, we forget that we are dependent. In our permanent houses, we forget the wilderness, the exile, the time when we had nothing but God&apos;s presence. The command to dwell in booths is an invitation to remember — not to despair, but to remember our history with God, to acknowledge our dependence, and to rejoice that He has never abandoned us.',
        },
        {
          kind: 'reflection',
          id: 'booths-dwell',
          prompt: 'What would it mean for you to "dwell in booths" — to acknowledge your vulnerability and dependence? How do memories of God&apos;s faithfulness in the past strengthen you for the present?',
        },
      ],
    },

    /* ─── Nehemiah 8:18 — Day by Day, He Read in the Book of the Law ─────── */
    {
      ref: 'Nehemiah 8:18',
      title: 'Day by Day, the Word Is Read',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 18,
              spans: [
                t('Also day by day, from the first day unto the last day, '),
                hy('he read in the book of the law of God', 'read-daily'),
                t('. And they kept the feast seven days; and on the eighth day was a solemn assembly, according to the manner.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'read-daily',
          html:
            'The Feast of Tabernacles lasts seven days, and throughout those seven days, Ezra continues to read from the book of the law. This is not a one-time event; it is a sustained encounter with Scripture. Day after day, the people hear the word. They feast, they remember, they dwell in booths, and continuously, the word is read to them. By the eighth day, a solemn assembly concludes the feast — a time to rest, to reflect, to be solemnized by what has been heard and experienced.',
        },
        {
          kind: 'christ',
          id: 'christ-word-tabernacle',
          title: 'Christ Connection — The Word Tabernacled Among Us',
          html:
            'The Feast of Tabernacles celebrates God&apos;s dwelling with Israel. In John 1:14, we encounter this startling claim: "And the Word was made flesh, and dwelt among us (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth." The Greek word for "dwelt" is <em>skēnoō</em> — literally, "tabernacled." Jesus is the ultimate fulfillment of Tabernacles. He is God&apos;s dwelling place with humanity. And like Ezra reading the law day by day, Jesus embodies the sustained word of God — not a one-time revelation, but a continuous, daily presence teaching, healing, and redeeming.',
        },
        {
          kind: 'carry',
          html:
            'The pattern of daily reading is not just ancient. It is the call of every Christian life: to encounter the word daily, to feast on it, to let it dwell in you. The Feast of Tabernacles reminds us that God does not simply give us a law once and leave us. He comes to dwell with us. He speaks day by day. The rhythm of a life built on Scripture is the rhythm of daily return to the word — not once, not seasonally, but day by day.',
        },
        {
          kind: 'reflection',
          id: 'read-daily-life',
          prompt: 'How might your life change if you committed to engaging with Scripture daily, as Ezra did? What would a sustained encounter with the word look like for you?',
        },
      ],
    },
  ],
};
