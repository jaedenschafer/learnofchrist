import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Chronicles 9 — The Post-Exile Residents Return to Jerusalem
 *
 * After the genealogies that opened 1 Chronicles, the text turns to history.
 * This chapter lists the first inhabitants who returned and resettled in their
 * cities after the exile — the priests, Levites, temple servants (Nethinim),
 * and gatekeepers who bore the sacred work of the house of God. It is a catalog
 * of the mundane: who baked the shewbread, who kept the spices, who opened the
 * doors. Yet in these unnoticed offices, Christ shows us the value He places on
 * faithful service, no matter how humble. The chapter concludes with a repeat of
 * Saul's genealogy, bridging the story toward his fall in chapter 10.
 */
export const CHRONICLES_1_9: RichChapterContent = {
  bookSlug: '1-chronicles',
  bookName: '1 Chronicles',
  chapter: 9,

  estimatedMinutes: { beginner: 7, intermediate: 13, deep: 17 },
  intros: [
    'The first eight chapters of 1 Chronicles are genealogy — the long thread of descent from Adam through the tribes of Israel, preserving the names of those who went into exile in Babylon. The Chronicler writes for the remnant who returned, reminding them of their heritage, their place in God&apos;s story, and their covenant connection to the land and the temple.',
    'Now, in chapter 9, the focus shifts. The genealogies give way to narrative, and we see the people who actually returned and resettled Jerusalem and the surrounding cities. Among them are priests and Levites, the gatekeepers and singers, the temple servants and the ordinary workers who made the house of God function. In a list that might seem merely administrative, the Chronicler teaches us something profound: God notices the faithful work that no one else sees. He values the cup of cold water, the door kept open, the bread prepared in obedience. This is the kingdom of heaven — not always the visible triumph, but the small, persistent, unnoticed faithfulness.',
  ],

  bottomShare: {
    label: 'Share 1 Chronicles 9',
    quote:
      'The post-exile community returns to the house of God, not as conquerors, but as servants — priests and Levites, gatekeepers and singers, chosen in their generations to keep the work of the Lord. In their faithful service, we see Christ&apos;s own valuation: that the smallest office in the kingdom of heaven is honored by the King.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Chronicles 9 · Study Guide',
  },

  sections: [
    /* ─── 1 Chronicles 9:1–9 — The First Inhabitants Return ────────────── */
    {
      ref: '1 Chronicles 9:1–9',
      title: 'The First Inhabitants Return',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(1, 'So all Israel were reckoned by genealogies; and, behold, they were written in the book of the kings of Israel and Judah, who were carried away to Babylon for their transgression.'),
            plain(2, 'Now the first inhabitants that dwelt in their possessions in their cities were, the Israelites, the priests, Levites, and the Nethinims.'),
            plain(3, 'And in Jerusalem dwelt of the children of Judah, and of the children of Benjamin, and of the children of Ephraim, and Manasseh;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'exile-return',
          html:
            'The exile is not erased from the record. These are the people "who were carried away to Babylon for their transgression." Yet they are also the people who returned. The Chronicler holds both truths together: judgment came, but so did restoration. The people of God did not remain in captivity. They came home.',
        },
        {
          kind: 'commentary',
          id: 'first-inhabitants',
          html:
            'The text specifies the "first inhabitants" who resettled — these are the pioneers who returned first, who rebuilt the temple and the city. Notice the careful listing: Israel, priests, Levites, Nethinims. This is not a random list. It reflects the structure of God&apos;s covenant community — the ordinary Israelites, the ones set apart to serve at the altar, the ones set apart to sing and keep the records, and the ones bound to serve the temple. All of them mattered.',
        },
        {
          kind: 'hebrew',
          id: 'nethinim',
          title: 'Nethinim — "The Given Ones"',
          script: 'נְתִינִים',
          translit: '<strong>Nethinim</strong> · the given ones; temple servants',
          description:
            'The Nethinim were a special class of temple servants — their name means "the given ones," those given to serve the temple. They are not Levites, but they bear a calling alongside them. The Chronicler honors them by including them at all, by giving them a place in the restored community.',
        },
        {
          kind: 'carry',
          html:
            'After exile and humiliation, the people returned not as a mighty army, but as a community of priests and servants, ordinary folk and those bound to humble work. Restoration is not always restoration to power. Often it is restoration to faithfulness, to ordinary life lived in covenant with God.',
        },
        {
          kind: 'reflection',
          id: 'first-inhabitants-2',
          prompt: 'When have you had to begin again after a loss or failure? What did it feel like to return, not to power, but to ordinary faithfulness?',
        },
      ],
    },

    /* ─── 1 Chronicles 9:10–17 — The Priests and Levites ──────────────────── */
    {
      ref: '1 Chronicles 9:10–17',
      title: 'Priests and Levites in the House of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 10,
              spans: [
                t('Of the priests; Jedaiah, and Jehoiarib, and Jachin,'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And Azariah the son of Hilkiah, the son of Meshullam, the son of Zadok, the son of Meraioth, the son of Ahitub, the ruler of the house of God;'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And Adaiah the son of Jeroham, the son of Pashur, the son of Malchijah, and Maasiai the son of Adiel, the son of Jahzerah, the son of Meshullam, the son of Meshillemith, the son of Immer;'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And their brethren, heads of the houses of their fathers, a thousand and seven hundred and threescore; very able men for the work of the service of the house of God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1-chronicles-9-mid-13',
          html:
            '<p>The genealogy traces how God preserved His people through generations and exile.</p>',
        },
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 14,
              spans: [
                t('And of the Levites; Shemaiah the son of Hasshub, the son of Azrikam, the son of Hashabiah, of the sons of Merari;'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And Bakbakkar, Heresh, and Galal, and Mattaniah the son of Mica, the son of Zichri, the son of Asaph;'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And Obadiah the son of Shemaiah, the son of Galal, the son of Jeduthun, and Berechiah the son of Asa, the son of Elkanah, that dwelt in the villages of the Netophathites.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And the porters were, Shallum, and Akkub, and Talmon, and Ahiman, and their brethren: Shallum was the chief;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'priests-numbered',
          html:
            'The priests are listed by genealogy — each name a thread connecting them to the ancient priesthood. They are not new priests; they are the lineal descendants of Aaron, returning to the office their ancestors held. Among them is Azariah, the "ruler of the house of God" — the chief priest, the one who oversees the sacred work. The text emphasizes their number: "a thousand and seven hundred and threescore; very able men for the work of the service of the house of God." They were chosen not just by descent, but by their capability and fitness for the work.',
        },
        {
          kind: 'commentary',
          id: 'levites-singers',
          html:
            'The Levites listed here include the singers — Mattaniah, an Asaphite (a descendant of Asaph, the great psalmist), and Obadiah, a Jeduthunite (a descendant of Jeduthun, another chief musician). These are not merely administrative figures; they were the voice of the congregation, the ones who led the people in worship and lament, in praise and petition.',
        },
        {
          kind: 'hebrew',
          id: 'kohanim',
          title: 'Kohanim — "The Priests"',
          script: 'כֹּהֲנִים',
          translit: '<strong>Kohanim</strong> · priests; the consecrated ones',
          description:
            'The priests, called kohanim in Hebrew, were set apart by the Lord through Aaron and his sons. They were the mediators between God and the people, and their service in the tabernacle and temple was the central act of Israel&apos;s worship. Every priest was a man of his lineage — his identity was inseparable from his office.',
        },
        {
          kind: 'carry',
          html:
            'These are men whose entire lineage, whose entire identity, was bound up in serving God. They came back to do the work their ancestors did, in the place their ancestors served. There is something steadying in that — the knowledge that your place was kept, that you are not starting from zero, but inheriting a calling that has persisted through exile and loss.',
        },
        {
          kind: 'reflection',
          id: 'priests-levites',
          prompt: 'These men returned to the offices their ancestors held. What calling or tradition have you inherited, and how does it shape your own purpose?',
        },
      ],
    },

    /* ─── 1 Chronicles 9:17–34 — The Gatekeepers and Their Sacred Trust ────── */
    {
      ref: '1 Chronicles 9:17–34',
      title: 'The Gatekeepers: Faithful in the Small Office',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 17,
              spans: [
                t('And the porters were, Shallum, and Akkub, and Talmon, and Ahiman, and their brethren: Shallum was the '),
                hg('chief', 'gatekeeper-chief'),
                t(';'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Who hitherto waited in the king&apos;s gate eastward: they were porters in the camps of the children of Levi.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And Shallum the son of Kore, the son of Ebiasaph, the son of Korah, and his brethren, of the house of his father, the Korahites, were over the '),
                hp('work of the service', 'gate-work'),
                t(', keepers of the '),
                hg('gates of the tabernacle', 'gate-tabernacle'),
                t(': and their fathers, being over the host of the Lord, were keepers of the entry.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And Phinehas the son of Eleazar was the ruler over them in time past, and the Lord was with him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1chr9-gatekeepers',
          html:
            'The gatekeepers are named, post by post. Their work is quiet but constant — every door watched, every threshold guarded. Worship requires watchmen.',
        },
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 21,
              spans: [
                t('And Zechariah the son of Meshelemiah was porter of the door of the tabernacle of the congregation.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('All these which were chosen to be porters in the gates were two hundred and twelve. These were reckoned by their genealogy in their villages, whom David and Samuel the seer did ordain in their set office.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('So they and their children had the oversight of the gates of the house of the Lord, namely, the house of the tabernacle, by wards.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('In four quarters were the porters, toward the east, west, north, and south.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And their brethren, which were in their villages, were to come after seven days from time to time with them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gatekeeper-chief',
          html:
            'Shallum is the chief of the gatekeepers — a position of honor and responsibility. He is a Korahite, a son of Korah. There is irony here: Korah led a rebellion against Moses in the wilderness, yet his descendants were restored to honor as keepers of the Lord&apos;s house. This suggests that even family shame can be redeemed through faithfulness across generations.',
        },
        {
          kind: 'commentary',
          id: 'gate-work',
          html:
            'The "work of the service" is the keeping of the gates. It does not sound grand. It is not preaching or teaching, not leading in battle. It is opening and closing doors, keeping watch, turning away the unclean, allowing the faithful to enter. Yet the text calls this "the work of the service." Every work in the house of God is the Lord&apos;s work.',
        },
        {
          kind: 'commentary',
          id: 'gate-tabernacle',
          html:
            'The gatekeepers are described as "keepers of the gates of the tabernacle." They stand at the threshold between the holy and the unholy, between the presence of God and the common world. They are guardians of a boundary, and that boundary matters. Their faithfulness in watching who enters and who does not is a sacred trust.',
        },
        {
          kind: 'commentary',
          id: 'phinehas-precedent',
          html:
            'Phinehas, the son of Eleazar, is invoked as a model. Phinehas was the priest who turned away God&apos;s wrath by his zealous action in Numbers 25. The Chronicler reminds us: "the Lord was with him." The gatekeepers stand in a line of faithful men, and the Lord&apos;s favor rests on them.',
        },
        {
          kind: 'hebrew',
          id: 'shoer',
          title: 'Shoer — "Gatekeeper" or "Porter"',
          script: 'שׁוֹעֵר',
          translit: '<strong>Shoer</strong> · gatekeeper; porter; one who stands at the gate',
          description:
            'The Hebrew shoer comes from the root meaning "to open." The gatekeeper is the one who opens — or closes — the gate. It is a humble office, but essential. The gate cannot stand open to all; it cannot be shut to the faithful. The gatekeeper judges who belongs and who does not. This judgment is sacred work.',
        },
        {
          kind: 'hebrew',
          id: 'lechem-ha-panim',
          title: 'Lechem Ha-Panim — "The Bread of the Presence"',
          script: 'לֶ֫חֶם הַפָּנִים',
          translit: '<strong>Lechem Ha-Panim</strong> · the bread of the presence; the shewbread',
          description:
            'Verse 32 mentions those responsible for "the shewbread" or "the bread of the presence." This is the bread set out in the tabernacle as a perpetual offering, a sign of God&apos;s presence among His people. Someone had to prepare it, bake it, replace it. It was the work of these Levites. No one outside the priesthood saw it being made, but it was essential. Jesus, in the New Testament, calls Himself "the Bread of Life" — and suggests a deeper presence than any temple bread could offer.',
        },
        {
          kind: 'commentary',
          id: '212-chosen',
          html:
            'The text specifies: "All these which were chosen to be porters in the gates were two hundred and twelve." They are numbered. They are named. They were chosen by David and Samuel the seer — the great king and the great prophet — "in their set office." This is not accidental work; it is vocation. It is calling.',
        },
        {
          kind: 'commentary',
          id: 'four-quarters',
          html:
            'The gatekeepers stood at four quarters — east, west, north, south. They covered all approach, all entry. And their brethren in the villages were to come to Jerusalem every seven days to relieve them, to take their turn. This is rotating duty, a shared burden, a community responsibility. No one man bears it alone.',
        },
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 26,
              spans: [
                t('For these Levites, the four chief porters, were in their set office, and were over the chambers and treasuries of the house of God.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And they lodged round about the house of God, because the charge was upon them, and the opening thereof every morning pertained to them.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And certain of them had the charge of the ministering vessels, that they should bring them in and out by tale.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('Some of them also were appointed to oversee the vessels, and all the instruments of the sanctuary, and the fine flour, and the wine, and the oil, and the frankincense, and the spices.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1-chronicles-9-mid-29',
          html:
            '<p>This family boundary reveals the line through which God&apos;s covenant promises continued.</p>',
        },
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 30,
              spans: [
                t('And some of the sons of the priests made the ointment of the spices.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('And Mattithiah, one of the Levites, who was the firstborn of Shallum the Korhite, had the set office over the things that were made in the pans.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And other of their brethren, of the sons of the Kohathites, were appointed over the shewbread, to prepare it every sabbath.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('And these are the singers, chief of the fathers of the Levites, who remaining in the chambers were free: for they were employed in that work day and night.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'four-chief',
          html:
            'Four chief porters had oversight of the chambers and treasuries. They lodged "round about the house of God." This is not a 9-to-5 job; it is a vocation that requires presence, vigilance, sacrifice of ordinary life. They were "employed in that work day and night."',
        },
        {
          kind: 'commentary',
          id: 'vessels-fine-flour',
          html:
            'The work was meticulous. They counted vessels — "by tale," meaning by careful count. They watched over flour, wine, oil, frankincense, spices. Each item essential to the worship of the Lord. Each item requiring attention, care, knowledge. These were not careless men; they were stewards of sacred things.',
        },
        {
          kind: 'commentary',
          id: 'spices-ointment',
          html:
            'Some "made the ointment of the spices." Someone had to know the formula, the proportions, the blend. Someone had to do the work with precision, with care. The ointment anointed the priests and the sacred objects. The work done in secret — in the kitchens and storerooms of the temple — was as vital as the work done at the altar before all Israel.',
        },
        {
          kind: 'commentary',
          id: 'shewbread-sabbath',
          html:
            'Every Sabbath, the shewbread had to be prepared and replaced. This was not ceremonial gesture; it was actual work. Someone had to mix the flour, form the loaves, bake them, arrange them on the golden table. It happened every week, year after year, generation after generation. The faithfulness is in the repetition, in the willingness to do the necessary thing over and over.',
        },
        {
          kind: 'christ',
          id: 'christ-door',
          title: 'Christ Connection — The True Door',
          html:
            'In the Gospel of John, Jesus says, "I am the door: by me if any man enter in, he shall be saved" (John 10:9). The gatekeeper stands at the threshold, deciding who may enter the house of God. Christ is the one through whom we enter into the presence of God. He is not merely symbolic — He is the actual threshold, the actual Way. And in His faithfulness to be the Door, we see a deeper meaning to the gatekeeper&apos;s office. They kept watch; He is the watch. They opened to the faithful; He calls to Himself all who will come.',
        },
        {
          kind: 'christ',
          id: 'christ-bread',
          title: 'Christ as the Bread of the Presence',
          html:
            'Jesus says, "I am the bread of life" (John 6:35). The shewbread was set in God&apos;s presence as a perpetual reminder — God is present, God provides. But Jesus embodies the deeper truth: His presence is not symbolized in bread; His presence IS the sustenance we need. And those who prepared that bread, who "remained in the chambers," who were "employed in that work day and night" — they stand in a line of faithful servants who point to His faithfulness.',
        },
        {
          kind: 'christ',
          id: 'christ-small-office',
          title: 'Christ Honors the Small Office',
          html:
            'Jesus teaches: "Whosoever shall give to drink unto one of these little ones a cup of cold water only in the name of a disciple, verily I say unto you, He shall in no wise lose his reward" (Matthew 10:42). The gatekeeper&apos;s work is not seen by crowds. The baker of shewbread is not famous. The counter of vessels is not remembered in songs. Yet Jesus values these works. In Matthew 25, He separates the nations based on their response to "the least of these" — their care for the hungry, the thirsty, the stranger, the sick, the imprisoned. The kingdom values the cup of cold water more than kingdoms value crowns. The small office, done in faith, is honored by the King.',
        },
        {
          kind: 'carry',
          html:
            'We live in an age that celebrates the visible, the famous, the influential. But the faithful work of the kingdom is often done unseen. Someone opens the doors so others can worship. Someone prepares the bread that sustains the work of God. Someone counts the vessels and ensures they are kept in their proper place. No one applauds. No one remembers. Yet the work is sacred, and the Lord sees. In our own lives, the small faithfulness — the cup of cold water, the door held open, the work done well though no one watches — is the work of the kingdom. This is how the kingdom operates. Not through power, but through the quiet faithfulness of those who have learned to see their work as worship.',
        },
        {
          kind: 'reflection',
          id: 'small-office',
          prompt: 'What is the small, unseen work you do that feels insignificant but that you sense matters? How might Jesus be honoring that work even now?',
        },
      ],
    },

    /* ─── 1 Chronicles 9:35–44 — Saul's Genealogy (Bridge to Chapter 10) ──── */
    {
      ref: '1 Chronicles 9:35–44',
      title: "Saul&apos;s Genealogy (Bridge to Chapter 10)",
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(35, 'And in Gibeon dwelt the father of Gibeon, Jeiel; whose wife&apos;s name was Maachah:'),
            plain(36, 'And his firstborn son Abdon, and Zur, and Kish, and Baal, and Ner, and Nadab,'),
            plain(37, 'And Gedor, and Ahio, and Zechariah, and Mikloth.'),
            plain(38, 'And Mikloth begat Shimeam. And they also dwelt with their brethren at Jerusalem, over against their brethren.'),
            plain(39, 'And Ner begat Kish; and Kish begat Saul; and Saul begat Jonathan, and Malchishua, and Abinadab, and Eshbaal.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1chr9-saul-line',
          html:
            'Saul&apos;s house is preserved on the roll long after his throne is gone. The chronicler refuses to erase a family God once chose, even after the kingdom passed to David.',
        },
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(40, 'And the son of Jonathan was Merib-baal; and Merib-baal begat Micah.'),
            plain(41, 'And the sons of Micah were, Pithon, and Melech, and Tahrea, and Ahaz.'),
            plain(42, 'And Ahaz begat Jarah; and Jarah begat Alemeth, and Azmaveth, and Zimri; and Zimri begat Moza;'),
            plain(43, 'And Moza begat Binea; and Rephaiah his son, Eleasah his son, Azel his son.'),
            plain(44, 'And Azel had six sons, whose names are these, Azrikam, Bocheru, and Ishmael, and Sheariah, and Obadiah, and Hanan: these were the sons of Azel.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'saul-genealogy',
          html:
            'The Chronicler repeats the genealogy of Saul, the first king of Israel. This genealogy was already given in 1 Chronicles 8. The repetition here serves a narrative purpose: it connects the list of the faithful workers — the priests, Levites, gatekeepers — with the story that is about to unfold. Chapter 10 will tell of Saul&apos;s fall in battle, a moment that marks both an ending and a beginning. The genealogy reminds us that Saul was a man of his lineage, a man chosen by the Lord, yet a man whose kingship would not endure.',
        },
        {
          kind: 'commentary',
          id: 'bridge-to-10',
          html:
            'By placing Saul&apos;s genealogy at the end of chapter 9, the Chronicler bridges the story. We have just read of the faithful workers in God&apos;s house — the priests, the singers, the gatekeepers. Now we turn to the story of the king, and to the judgment that comes upon him. This is the structure of the Chronicler&apos;s history: faithfulness in the work of God is honored; unfaithfulness in the offices of authority brings judgment.',
        },
        {
          kind: 'carry',
          html:
            'The genealogy of Saul is preserved, but it is not the center of the story. The Chronicler does not dwell on Saul&apos;s descendants or elaborate on his line. Instead, the chapter ends with his name, and the next chapter begins with his fall. This suggests a truth: earthly kingship, earthly power, is not permanent. But the faithful work of ordinary people — the priest who keeps the law, the Levite who sings the psalm, the gatekeeper who stands watch — that work endures because it is joined to the work of God.',
        },
        {
          kind: 'reflection',
          id: 'saul-bridge',
          prompt: 'Saul was king, yet his kingdom ended. The faithful workers of the temple were never kings, yet their work endured. What does this teach us about what truly lasts?',
        },
      ],
    },
  ],
};
