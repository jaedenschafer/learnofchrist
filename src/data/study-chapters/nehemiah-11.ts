import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Nehemiah 11 — The Willingly Offered: Repopulating the Holy City
 *
 * After the wall is built, the city of Jerusalem lies mostly empty. The
 * returned exiles live in the surrounding towns. So Nehemiah casts lots: 1 in
 * 10 will move into Jerusalem, the holy city. But something unexpected happens
 * — the people bless those who volunteer. The chapter then lists the residents
 * by tribe and office: the priests, Levites, gatekeepers, and common people
 * who made the willing choice to inhabit the holy city. In this roster of
 * names, we see God's people making a covenant with the land itself.
 */
export const NEHEMIAH_11: RichChapterContent = {
  bookSlug: 'nehemiah',
  bookName: 'Nehemiah',
  chapter: 11,

  estimatedMinutes: { beginner: 6, intermediate: 9, deep: 15 },
  intros: [
    'The wall of Jerusalem is complete. The gates are hung. The people have gathered to hear Ezra read the Law. And yet the city itself is still mostly empty. The returned exiles have scattered into the towns and villages around Jerusalem — they have homes there, fields, lives. Moving into the city would mean leaving those lives behind. So Nehemiah turns to the question: who will dwell in the holy city?',
    'His answer is surprisingly democratic for an ancient Near Eastern context. He does not command; he casts lots. One in ten will move to Jerusalem. Let the Lord decide. But then something moves. Volunteers come forward. They will leave their towns, their vineyards, their established homes, and move into Jerusalem. And when they do, the rest of the people bless them for it. Nehemiah 11 is not just a roster of residents — it is a record of willing sacrifice, and the blessing that rests upon those who offer themselves for something holy.',
  ],

  bottomShare: {
    label: 'Share Nehemiah 11',
    quote:
      'The people blessed those who willingly offered themselves to dwell in Jerusalem, the holy city. Some by lot, some by voluntary covenant, they made the holy city their home.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Nehemiah 11 · Study Guide',
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
      id: 'sefaria-nehemiah-11',
      kind: 'study',
      source: 'Sefaria',
      label: 'Nehemiah 11 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Nehemiah.11',
      description: 'The Hebrew text of Nehemiah 11 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },
    {
      id: 'bibleodyssey-nehemiah-overview-11',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Nehemiah — SBL Overview',
      url: 'https://www.bibleodyssey.org/articles/nehemiah/',
      description: 'Open-access SBL essay on the historical and literary setting of Nehemiah.',
    },

  ],

  sections: [
    /* ─── Nehemiah 11:1–2 — The Lot and the Willing ──────────────────────── */
    {
      ref: 'Nehemiah 11:1–2',
      title: 'The Lot Cast, the Willing Offered',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 1,
              spans: [
                t('And the rulers of the people dwelt at Jerusalem: the rest of the people also '),
                hg('cast lots', 'nehemiah-goral'),
                t(', to bring one of ten to dwell in Jerusalem the holy city, and nine parts to dwell in other cities.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'nehemiah-goral',
          html:
            'The lot is cast not as a mere administrative measure, but as an appeal to God&apos;s will. In biblical practice, the casting of lots is a way of asking God to decide. The people do not resist this; they accept it as God&apos;s judgment. To be chosen by lot is to be chosen by the Lord Himself. [res:sefaria-torah-scroll]',
        },
        {
          kind: 'hebrew',
          id: 'nehemiah-goral-word',
          title: 'Goral — &ldquo;Lot&rdquo;',
          script: 'גוֹרָל',
          translit: '<strong>goral</strong> · a lot cast to determine God&apos;s will; a portion or share',
          description:
            'The Hebrew word goral carries the sense of both chance and divine intention. When you cast the lot, you are placing the decision into God&apos;s hands. It is the mechanism by which the invisible will becomes visible.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 2,
              spans: [
                t('And the people '),
                hg('blessed all the men', 'nehemiah-blessed'),
                t(' that '),
                hg('willingly offered themselves', 'nehemiah-nadav'),
                t(' to dwell at Jerusalem.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'nehemiah-blessed',
          html:
            'The people &ldquo;blessed&rdquo; those who volunteered — a significant gesture. In Hebrew culture, blessing is not mere words of approval; it is a transfer of goodwill, a covering of favor. The community that will not move honors those who will[res:sefaria-nehemiah-11][res:bibleodyssey-nehemiah-overview-11].',
        },
        {
          kind: 'commentary',
          id: 'nehemiah-nadav',
          html:
            'The text says some moved by lot, but others &ldquo;willingly offered themselves.&rdquo; They did not wait for the lot to decide their fate; they came forward on their own. Willingness is an act of covenant. These are the ones willing to give up the security of established homes for the holiness of a shared cause.',
        },
        {
          kind: 'hebrew',
          id: 'nehemiah-nadav-word',
          title: 'Nadav — &ldquo;Willing Offering&rdquo;',
          script: 'נָדַב',
          translit: '<strong>nadav</strong> · to volunteer; to offer willingly; to make a freewill offering',
          description:
            'The verb nadav appears throughout Scripture for those who volunteer their service, their resources, their lives. To nadav is to say: I will do this, not because I must, but because I choose to consecrate myself to something holy.',
        },
        {
          kind: 'carry',
          html:
            'Most of us live in the ordinary cities — the established towns of routine, of safety, of what we already know. We do not naturally uproot ourselves for the abstract goodness of a holy city. But Scripture tells us of those who do. They leave the vineyard to live in the sacred place. And when they do, the rest of us — the ones staying behind in the ordinary towns — are called to bless them, not resent them. Whose willing offering have you failed to honor?',
        },
        {
          kind: 'reflection',
          id: 'willing-offered',
          prompt:
            'What would it mean for you to willingly offer yourself for something holy — something that costs you the safety of the established place?',
        },
      ],
    },

    /* ─── Nehemiah 11:3–8 — Judah's Chiefs in Jerusalem ──────────────────── */
    {
      ref: 'Nehemiah 11:3–8',
      title: 'Judah&apos;s Dwelling in the Holy City',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(3, 'Now these are the chief of the province that dwelt in Jerusalem: but in the cities of Judah dwelt every one in his possession in their cities, to wit, Israel, the priests, and the Levites, and the Nethinims, and the children of Solomon&apos;s servants.'),
            {
              number: 4,
              spans: [
                t('And in Jerusalem dwelt certain of the children of Judah, and of the children of Benjamin. Of the children of Judah; '),
                hg('Athaiah the son of Uzziah', 'nehemiah-judah-list'),
                t(', the son of Zechariah, the son of Amariah, the son of Shephatiah, the son of Mahalaleel, of the children of Perez;'),
              ],
            },
            plain(5, 'And Maaseiah the son of Baruch, the son of Col-hozeh, the son of Hazaiah, the son of Adaiah, the son of Joiarib, the son of Zechariah, the son of Shiloni.'),
            plain(6, 'All the sons of Perez that dwelt at Jerusalem were four hundred threescore and eight valiant men.'),
            plain(7, 'And these are the sons of Benjamin; Sallu the son of Meshullam, the son of Joed, the son of Pedaiah, the son of Kolaiah, the son of Maaseiah, the son of Ithiel, the son of Jesaiah.'),
            plain(8, 'And after him Gabbai, Sallai, nine hundred twenty and eight.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'nehemiah-judah-list',
          html:
            'The genealogies matter. These are not anonymous settlers; they are known persons, rooted in family lines that go back generations. Each name represents a family willing to plant itself in Jerusalem. The text gives us the count — 468 valiant men from Judah, 928 from Benjamin. These are precise numbers: the rebuilt city is being repopulated with intention.',
        },
        {
          kind: 'carry',
          html:
            'We often think of building — of walls, institutions, cities — as an impersonal work. But Scripture insists that a holy place is made holy by the people who dwell there. Each name in this roster is a choice: to live here, to raise children here, to make a life in the sacred place. Your own dwelling — your home, your church, your circle of believers — is similarly made holy by the willingness of those who choose to be there.',
        },
        {
          kind: 'reflection',
          id: 'dwelling-jerusalem',
          prompt:
            'What does it mean to dwell somewhere &ldquo;in the holy city&rdquo;? What makes a place holy — is it the place itself, or the people who live there willing to honor it?',
        },
      ],
    },

    /* ─── Nehemiah 11:9–13 — The Priests and Overseers ────────────────────── */
    {
      ref: 'Nehemiah 11:9–13',
      title: 'The Priests and the House of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(9, 'And Joel the son of Zichri was their overseer: and Judah the son of Senuah was second over the city.'),
            plain(10, 'Of the priests: Jedaiah the son of Joiarib, Jachin,'),
            plain(11, 'Seraiah the son of Hilkiah, the son of Meshullam, the son of Zadok, the son of Meraioth, the son of Ahitub, was the ruler of the house of God.'),
            {
              number: 12,
              spans: [
                t('And their brethren that did the work of the house '),
                hy('were eight hundred twenty and two', 'nehemiah-priestly-work'),
                t(': and Adaiah the son of Jeroham, the son of Pelaliah, the son of Amzi, the son of Zechariah, the son of Pashhur, the son of Malchijah,'),
              ],
            },
            plain(13, 'And his brethren, chief of the fathers, two hundred forty and two: and Amashai the son of Azareel, the son of Ahasai, the son of Meshillemoth, the son of Immer,'),
          ],
        },
        {
          kind: 'commentary',
          id: 'nehemiah-priestly-work',
          html:
            'The priests are not named as political rulers but as keepers of the Temple — "the ruler of the house of God." These men have given themselves not to power but to service. And their numbers matter: 822 of them who work in the house. The sacred work of worship requires a community of practitioners.',
        },
        {
          kind: 'carry',
          html:
            'A holy city needs people whose primary calling is not to govern or to accumulate, but to maintain the sacred space. Seraiah is the &ldquo;ruler of the house of God&rdquo; — a ruler whose domain is not territory but temple. In your own life, do you have places — spaces of prayer, of worship, of sacred time — that you guard and maintain, not as a secondary duty but as your primary calling?',
        },
        {
          kind: 'reflection',
          id: 'house-of-god',
          prompt:
            'What role do the priests play in this chapter? What does it mean that the house of God requires its own rulers, distinct from the city&apos;s political leaders?',
        },
      ],
    },

    /* ─── Nehemiah 11:14–19 — The Levites and Gatekeepers ────────────────── */
    {
      ref: 'Nehemiah 11:14–19',
      title: 'The Levites and Those Who Keep the Gates',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(14, 'And his brethren, mighty men of valour, an hundred twenty and eight: and their overseer was Zabdiel the son of one of the great men.'),
            {
              number: 15,
              spans: [
                t('Also of the Levites: Shemaiah the son of Hashub, the son of Azrikam, the son of Hashabiah, the son of Bunni;'),
              ],
            },
            plain(16, 'And Shabbethai and Jozabad, of the chief of the Levites, had the oversight of the outward business of the house of God.'),
            {
              number: 17,
              spans: [
                t('And Mattaniah the son of Micha, the son of Zabdi, the son of Asaph, '),
                hg('was the principal to begin the thanksgiving in prayer', 'nehemiah-mattaniah'),
                t(': and Bakbukiah the second among his brethren: and Abda the son of Shammua, the son of Galal, the son of Jeduthun.'),
              ],
            },
            plain(18, 'All the Levites in the holy city were two hundred fourscore and four.'),
            {
              number: 19,
              spans: [
                t('Moreover the porters: Akkub, Talmon, and their brethren that kept the gates, were an hundred seventy and two.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'nehemiah-mattaniah',
          html:
            'Mattaniah is called "the principal to begin the thanksgiving in prayer." He is the one who leads worship — whose voice rises first in gratitude to God. This is his primary role in the city. Not to build or govern, but to teach the people to give thanks. And he is Levite, a descendant of Asaph, the ancient psalmist of David&apos;s court.',
        },
        {
          kind: 'hebrew',
          id: 'nehemiah-hodah-word',
          title: 'Hodah — &ldquo;Thanksgiving&rdquo;',
          script: 'הוֹדָה',
          translit: '<strong>hodah</strong> · thanksgiving; acknowledgment; confession of praise',
          description:
            'To give hodah is to acknowledge what God has done. It is the act of recognizing goodness beyond ourselves. Mattaniah&apos;s role is to begin each day with this act of acknowledgment — a reminder that the city exists not by human effort alone, but by God&apos;s faithfulness.',
        },
        {
          kind: 'carry',
          html:
            'A holy city needs gatekeepers — those who stand at the threshold, discerning what enters and what stays out. It needs Levites to oversee the outward business, the daily operations that keep the sacred space functional. And it needs someone like Mattaniah, whose voice rises first in thanksgiving. Do you have someone in your household, your church, your circle who is the "principal to begin the thanksgiving"? And are you that person for anyone?',
        },
        {
          kind: 'reflection',
          id: 'gatekeepers',
          prompt:
            'What is the significance of having gatekeepers, Levites, and one who leads in thanksgiving all living in the city? What does a truly holy community need?',
        },
      ],
    },

    /* ─── Nehemiah 11:20–24 — The Common People and the Governor ─────────── */
    {
      ref: 'Nehemiah 11:20–24',
      title: 'The Common People and the Overseer at the King&apos;s Hand',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(20, 'And the residue of Israel, of the priests and the Levites, were in all the cities of Judah, every one in his inheritance.'),
            {
              number: 21,
              spans: [
                t('But the Nethinims dwelt in '),
                hy('Ophel', 'nehemiah-ophel'),
                t(': and Ziha and Gispa were over the Nethinims.'),
              ],
            },
            plain(22, 'The overseer also of the Levites at Jerusalem was Uzzi the son of Bani, the son of Hashabiah, the son of Mattaniah, the son of Micha. Of the sons of Asaph, the singers were in the business of the house of God.'),
            {
              number: 23,
              spans: [
                t('For it was the king&apos;s commandment concerning them, that a certain portion should be for the singers, '),
                hg('due for every day', 'nehemiah-provision'),
                t('.'),
              ],
            },
            plain(24, 'And Pethahiah the son of Meshezabeel, of the children of Zerah the son of Judah, was at the king&apos;s hand in all matters concerning the people.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'nehemiah-ophel',
          html:
            'Ophel is the hillside of the Temple — a sacred precinct. The Nethinims, the temple servants, dwelt there. They were non-Israelites who had been given to the Temple by the ancient kings to serve in its most menial tasks — carrying wood and water, preparing sacrifices. They had no inheritance of land, no family lineage in Israel. But they too had a place in the holy city.',
        },
        {
          kind: 'commentary',
          id: 'nehemiah-provision',
          html:
            'The singers are provided for — a daily portion set aside by the king&apos;s commandment. This is a remarkable provision: that singers, those whose work is worship and beauty, are fed and sustained by the king&apos;s own order. They do not work for commercial gain; they work because their voice is needed in the daily prayer of the city.',
        },
        {
          kind: 'hebrew',
          id: 'nehemiah-ir-word',
          title: 'Ir haqqodesh — &ldquo;The Holy City&rdquo;',
          script: 'עִיר הַקֹּ֫דֶשׁ',
          translit: '<strong>ir haqqodesh</strong> · the holy city; the city set apart',
          description:
            'Jerusalem is not merely a city; it is the holy city. Every person — from the overseer of the Levites to the Nethinims, from the priests to the singers — finds a place within this holiness. Nothing is outside the sacred. All are part of the restoration.',
        },
        {
          kind: 'carry',
          html:
            'A holy community makes space for everyone — the priest and the gatekeeper, the singer sustained by the king&apos;s provision and the servant carrying water. Each has a role in the sacred work. And notice: those with no inheritance of land, no family lineage in the nation, are not left out. They dwell in Ophel. They are remembered in the roster. Do your own circles of community make space for everyone, or do you only honor those with status and inheritance?',
        },
        {
          kind: 'reflection',
          id: 'common-people',
          prompt:
            'What does it mean that even the Nethinims — the servants who had no inheritance — are named and given a place in the holy city? What does this say about true community?',
        },
      ],
    },

    /* ─── Nehemiah 11:25–36 — The Villages of Judah and Benjamin ────────── */
    {
      ref: 'Nehemiah 11:25–36',
      title: 'The Territories: Judah and Benjamin Dwelling in Their Inheritance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(25, 'And for the villages, with their fields, some of the children of Judah dwelt at Kirjath-arba, and in the villages thereof, and at Dibon, and in the villages thereof, and at Jekabzeel, and in the villages thereof,'),
            plain(26, 'And at Jeshua, and at Moladah, and at Beth-phelet,'),
            plain(27, 'And at Hazar-shual, and at Beer-sheba, and in the villages thereof,'),
            plain(28, 'And at Ziklag, and at Mekonah, and in the villages thereof,'),
            plain(29, 'And at En-rimmon, and at Zareah, and at Jarmuth,'),
            plain(30, 'Zanoah, Adullam, and in their villages, Lachish, and the fields thereof, Azekah, and in the villages thereof. And they dwelt from Beer-sheba unto the valley of Hinnom.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'neh11-villages-restored',
          html:
            'These villages are not famous. None of them produced kings or prophets. But the chronicler names them anyway, because the rebuilt Jerusalem is not just a city — it is a homeland with rural lungs, and every named hamlet is a sign that the exile did not have the last word.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(31, 'The children also of Benjamin from Geba dwelt at Michmash, and Aija, and Beth-el, and in their villages,'),
            plain(32, 'And at Anathoth, Nob, Ananiah,'),
            plain(33, 'Hazor, Rama, Gittaim,'),
            plain(34, 'Hadid, Zeboim, Neballat,'),
            plain(35, 'Lod, and Ono, the valley of craftsmen.'),
            plain(36, 'And of the Levites were divisions in Judah, and in Benjamin.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'nehemiah-villages',
          html:
            'The text shifts now to the villages — not the holy city itself, but the towns surrounding it. Each is named. Each has its fields, its inheritance. These are the places where nine out of ten have remained — where they live their ordinary lives, tend their vineyards, raise their children. And they too are part of the restoration. The holy city is not holy in isolation; it rests at the center of a network of communities, all connected, all honored.',
        },
        {
          kind: 'carry',
          html:
            'Not everyone is called to live in the sacred center. Most of us live in the villages — in ordinary places, with ordinary work, ordinary rhythms. We tend our vineyards, keep our homes, raise our families. The text honors this. These villages and their fields are part of the story of restoration just as truly as Jerusalem&apos;s walls are. Your ordinary place, your ordinary work, is holy too.',
        },
        {
          kind: 'reflection',
          id: 'villages-inheritance',
          prompt:
            'What does it mean that the text carefully lists all the villages of Judah and Benjamin? Why does it matter that the "nine" who stay in their towns are honored just as much as the "one" who moves to Jerusalem?',
        },
        {
          kind: 'artwork',
          matchTitle: /jerusalem|map|judah|benjamin/i,
          caption: 'Nehemiah 11:25–36 · The Territories of Judah and Benjamin',
        },
      ],
    },

    /* ─── Nehemiah 11:1–36 — Christ Connection and Final Reflection ─────── */
    {
      ref: 'Nehemiah 11 · The Willing Offering',
      title: 'The New Jerusalem: Willing Inhabitants',
      blocks: [
        {
          kind: 'christ',
          id: 'nehemiah-christ-jerusalem',
          title: 'Christ Connection — The New Jerusalem',
          html:
            'Revelation opens its vision of the end with a city: "And I John saw the holy city, new Jerusalem, coming down from God out of heaven, prepared as a bride adorned for her husband" (Rev. 21:2). John sees a city that descends, fully restored, fully beautiful. But before that final city, we have this one — Jerusalem rebuilt in pieces, inhabited by the willing, blessed by their neighbors. Christ Himself is the one who gathers a people to Himself. "I am the door: by me if any man enter in, he shall be saved" (John 10:9). Just as Nehemiah&apos;s city needed inhabitants who would willingly choose to dwell there, so also the city of God awaits those who willingly choose to follow Christ into the new creation. The lot has been cast. The blessing awaits the willing.',
        },
        {
          kind: 'divider',
        },
        {
          kind: 'carry',
          html:
            'The story of the wall is complete. The gates are hung. The names are written down. But the holiness of Jerusalem rests on this final chapter — on ordinary people making an extraordinary choice. On ten percent willing to leave what they had. On the ninety percent blessing them for it. On priests and Levites and singers and gatekeepers all finding their place, each essential, each honored. On the villages surrounding the city, secure in their inheritance, supporting what stands at the center. The city is holy because its people chose holiness.',
        },
        {
          kind: 'reflection',
          id: 'nehemiah-final',
          prompt:
            'If you were offered the choice that Nehemiah offered — to dwell in the holy city or to remain in the villages with your inheritance — which would you choose? And what would the community lose or gain by your choice?',
        },
      ],
    },
  ],
};
