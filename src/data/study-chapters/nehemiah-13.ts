import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Nehemiah 13 — The Unfinished Work of Reform
 *
 * The book of Nehemiah closes not with triumph, but with an aging governor
 * returning from the Persian court to find the temple corrupted and his
 * reforms unraveling. An old enemy sits in a chamber meant for sacred vessels.
 * The Levites have fled because their portions were not given. Men marry women
 * of foreign nations. The Sabbath is profaned. It is a portrait of a people
 * who build walls and altars but cannot sustain holiness without vigilance.
 * Nehemiah does not declare victory. He asks God to remember him. And that
 * prayer — "Remember me, O my God, concerning this" — is the cry of a man who
 * understands that no human reform is complete without the One who alone can
 * cleanse the temple forever.
 */
export const NEHEMIAH_13: RichChapterContent = {
  bookSlug: 'nehemiah',
  bookName: 'Nehemiah',
  chapter: 13,

  estimatedMinutes: { 5: 4, 10: 11, 15: 16 },
  intros: [
    'Nehemiah 13 is the final chapter of Nehemiah&apos;s record, and it reads not as a victory lap but as a return to battle. The great wall has been built, the dedication has been celebrated, the law has been publicly read. But time passes. Nehemiah returns to the Persian court in the 32nd year of Artaxerxes. And when he comes back to Jerusalem, he finds that what took immense effort to rebuild is unraveling under the weight of human carelessness and corruption.',
    'The chapter unfolds as a series of confrontations: a chamber in the temple has been given to an old enemy of the people; the Levites have not been paid and have scattered to their fields; merchants and foreign traders profane the Sabbath at the city gates; young Jews have married women of foreign nations, and their children have forgotten the language of their people. Each problem demands swift correction. Each correction comes at Nehemiah&apos;s own hand — he clears the chamber, he gathers the Levites, he closes the gates, he confronts the nobles and priests. But the work is not finished. The battles must be fought again. And three times in this chapter, Nehemiah prays a prayer that echoes the weary persistence of a leader who knows that human effort alone cannot sustain what God has begun: "Remember me, O my God, concerning this."',
  ],

  bottomShare: {
    label: 'Share Nehemiah 13',
    quote:
      'Even after a great work of restoration, the people of God must remain vigilant. The walls built and the law read are not enough without the ongoing cleansing and remembrance that come from God Himself.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Nehemiah 13 · Study Guide',
  },

  sections: [
    /* ─── Nehemiah 13:1–3 — The Law Read; Mixed Multitude Separated ──────── */
    {
      ref: 'Nehemiah 13:1–3',
      title: 'On That Day the Law Was Read',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(
              1,
              'Now on that day they read in the book of the law of Moses in the audience of the people; and therein was found written, that the Ammonite and the Moabite should not come into the congregation of God for ever;',
            ),
            plain(
              2,
              'Because they met not the children of Israel with bread and water, but hired Balaam against them, that he should curse them: howbeit our God turned the curse into a blessing.',
            ),
            plain(
              3,
              'Now it came to pass, when they had heard the law, that they separated from Israel all the mixed multitude.',
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'law-read-today',
          html:
            'The public reading of the law has an immediate and radical effect: the people hear the word of God and understand that certain nations are forbidden to enter the congregation. The passage recalls Deuteronomy 23:3–6, where Ammon and Moab are barred because they refused to welcome Israel with bread and water in the wilderness, and because they hired Balaam to curse the people. Yet what the enemy meant for curse, God turned into blessing. The law, once understood, compels action. The mixed multitude—those of foreign origin living among the people—are separated. Obedience follows hearing.',
        },
        {
          kind: 'hebrew',
          id: 'kahal-congregation',
          title: 'Kahal — "Congregation" or "Assembly"',
          script: 'קָהָל',
          translit: '<strong>Kahal</strong> · assembly; congregation; the gathered people of God',
          description:
            'The word "kahal" refers to the formal assembly of God&apos;s people. To be barred from the kahal is to be excluded from the very identity of the people. The law makes clear: there are boundaries to belonging. Not everyone can enter the congregation. The separation that follows the law&apos;s reading is not cruelty, but the boundary-marking that defines a covenant community.',
        },
        {
          kind: 'carry',
          html:
            'Hearing the word of God carries weight. We cannot read Scripture and remain unchanged. When the people hear the law read aloud, they immediately understand what must be done. How does the word of God sit with you when you read it? Does it move you to action, or do you let it pass without response?',
        },
        {
          kind: 'reflection',
          id: 'law-heard',
          prompt:
            'When you hear or read Scripture that challenges you directly, what prevents you from acting on it immediately? What would it look like to respond to God&apos;s word the way Nehemiah&apos;s people did?',
        },
      ],
    },

    /* ─── Nehemiah 13:4–9 — Tobiah in the Temple Chamber ──────────────────── */
    {
      ref: 'Nehemiah 13:4–9',
      title: 'The Enemy in the Holy Place',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(
              4,
              'And before this, Eliashib the priest, having the oversight of the chamber of the house of our God, was allied unto Tobiah:',
            ),
            plain(
              5,
              'And he had prepared for him a great chamber, where aforetime they laid the meat offerings, frankincense, and the vessels, and the tithes of the corn, the new wine, and the oil, which were commanded to be given to the Levites, and the singers, and the porters; and the offerings of the priests.',
            ),
            plain(
              6,
              'But in all this time was not I at Jerusalem: for in the 32nd year of Artaxerxes king of Babylon came I unto the king, and after certain days obtained I leave of the king.',
            ),
            plain(
              7,
              'And I came to Jerusalem, and understood of the evil that Eliashib did for Tobiah, in preparing him a chamber in the courts of the house of God.',
            ),
            plain(8, 'And it grieved me sore: therefore I cast forth all the household stuff of Tobiah out of the chamber.'),
            plain(9, 'Then commanded I, and they cleansed the chambers: and thither brought I again the vessels of the house of God, with the meat offering, and the frankincense.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'tobiah-enemy',
          html:
            'Tobiah the Ammonite was an adversary of Nehemiah from the beginning of the rebuilding (Nehemiah 2:10, 19; 4:3, 7). He mocked the work, plotted against it, sent intimidating letters. He represented the foreign opposition to God&apos;s people. Yet here, in Nehemiah&apos;s absence, Eliashib the high priest—the very man who should guard the sanctity of the temple—has given Tobiah a great chamber in the courts of the house of God. The enemies of God&apos;s work have infiltrated the holy place itself. This is corruption not by pagan force, but by the compromise of the leaders within.',
        },
        {
          kind: 'commentary',
          id: 'chamber-corrupted',
          html:
            'The chamber Tobiah occupies was meant to house the offerings, the tithes, the vessels—the very things that sustained the Levites and singers and priests in their sacred work. By allowing an enemy to occupy this space, Eliashib has made it impossible for the temple&apos;s work to continue. The sacred has been displaced by the profane. The covenant supplies have been made subordinate to the favor shown to an adversary.',
        },
        {
          kind: 'carry',
          html:
            'Nehemiah is grieved—not merely inconvenienced, but cut to the heart. He does not deliberate or seek compromise. He casts out the household stuff of Tobiah, cleanses the chamber, and restores the vessels. Sometimes we must grieve what has gone wrong before we can act to set it right. Is there a place in your life—your habits, your relationships, your faith—where an enemy has claimed territory that belongs to God? What would it mean to cast it out?',
        },
        {
          kind: 'reflection',
          id: 'tobiah-chamber',
          prompt:
            'What "Tobiahs"—enemies of your spiritual growth—have you unknowingly allowed into places that should be sacred to your faith? What would it cost you to cast them out?',
        },
      ],
    },

    /* ─── Nehemiah 13:10–14 — The Levites Scattered; Their Portions Given ─── */
    {
      ref: 'Nehemiah 13:10–14',
      title: 'The Levites Forgotten',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(
              10,
              'And I perceived that the portions of the Levites had not been given them: for the Levites and the singers, that did the work, were fled every one to his field.',
            ),
            plain(
              11,
              'Then contended I with the rulers, and said, Why is the house of God forsaken? And I gathered them together, and set them in their place.',
            ),
            plain(
              12,
              'Then brought all Judah the tithe of the corn and the new wine and the oil unto the treasuries.',
            ),
            plain(
              13,
              'And I made treasurers over the treasuries, Shelemiah the priest, and Zadok the scribe, and of the Levites Pedaiah; and next to them was Hanan the son of Zaccur the son of Mattaniah: for they were counted faithful, and their office was to distribute unto their brethren.',
            ),
            plain(
              14,
              'Remember me, O my God, concerning this, and wipe not out my good deeds that I have done for the house of my God, and for the offices thereof.',
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'levites-fled',
          html:
            'The Levites and singers have abandoned the temple because they have not received their portions—the tithes and offerings that were commanded to sustain them in their sacred work. They cannot live on holiness alone. Their families need bread. The negligence of the rulers has forced the temple servants to choose between starvation and abandoning their post. This is a failure of covenant obligation. Those who consecrate themselves to God&apos;s house must not be forgotten.',
        },
        {
          kind: 'commentary',
          id: 'contend-rulers',
          html:
            'Nehemiah does not excuse the Levites for leaving, nor does he scold them. He contends with the rulers—the officials who have failed in their duty. He gathers the Levites, organizes the collection of tithes, and appoints faithful treasurers to distribute the offerings. This is administration in service of the sacred. Nehemiah understands that the work of God requires both spiritual commitment and practical care.',
        },
        {
          kind: 'hebrew',
          id: 'zakar-remember',
          title: 'Zakar — "Remember"',
          script: 'זָכַר',
          translit: '<strong>Zakar</strong> · to remember; to keep in mind; to hold as significant',
          description:
            'Three times in this chapter, Nehemiah will pray, "Remember me, O my God." The word "zakar" is not merely a request to be kept in mind, but to be acted upon. To be remembered by God is to be sustained, to be vindicated, to be kept covenant with. Nehemiah stakes his hope not on the stability of his reforms, but on God&apos;s remembrance of his good deeds.',
        },
        {
          kind: 'carry',
          html:
            'Nehemiah recognizes that securing the tithes will not complete his work. He can organize the treasurers, can set the Levites in their place, can order the collection of what is due. But he cannot make the system permanent by his own hand. So he prays: "Remember me, O my God, concerning this." He entrusts his work to God&apos;s memory and covenant keeping. What work have you done that you must now entrust to God&apos;s keeping?',
        },
        {
          kind: 'reflection',
          id: 'levites-portion',
          prompt:
            'Do those who serve in sacred work in your community—pastors, teachers, musicians—receive what they need? What prevents communities from honoring the covenant obligation to care for those who serve?',
        },
      ],
    },

    /* ─── Nehemiah 13:15–22 — The Sabbath Profaned; Nehemiah Closes the Gates ──── */
    {
      ref: 'Nehemiah 13:15–22',
      title: 'Guarding the Sabbath',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(
              15,
              'In those days saw I in Judah some treading wine presses on the sabbath, and bringing in sheaves, and lading asses; as also wine, grapes, and figs, and all manner of burdens, brought into Jerusalem on the sabbath day: and I testified against them in the day wherein they sold victuals.',
            ),
            plain(
              16,
              'There dwelt men of Tyre also therein, which brought fish, and all manner of ware, and sold on the sabbath unto the children of Judah, and in Jerusalem.',
            ),
            plain(
              17,
              'Then I contended with the nobles of Judah, and said unto them, What evil thing is this that ye do, and profane the sabbath day?',
            ),
            plain(
              18,
              'Did not your fathers thus, and did not our God bring all this evil upon us, and upon this city? yet ye bring more wrath upon Israel by profaning the sabbath.',
            ),
            plain(
              19,
              'And it came to pass, that when the gates of Jerusalem began to be dark before the sabbath, I commanded that the gates should be shut, and charged that they should not be opened till after the sabbath: and some of my servants set I at the gates, that there should no burden be brought in on the sabbath day.',
            ),
            plain(
              20,
              'So the merchants and sellers of all kind of ware lodged without Jerusalem once or twice.',
            ),
            plain(
              21,
              'Then I testified against them, and said unto them, Why lodge ye about the wall? if ye do so again, I will lay hands on you. From that time forth came they no more on the sabbath.',
            ),
            plain(
              22,
              'And I commanded the Levites that they should cleanse themselves, and that they should come and keep the gates, to sanctify the sabbath day. Remember me, O my God, concerning this also, and spare me according to the greatness of thy mercy.',
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'sabbath-profaned',
          html:
            'The Sabbath is foundational to God&apos;s covenant with Israel—not merely a day of rest, but a sign of the covenant itself. To profane the Sabbath is to break covenant. Yet here, in Jerusalem itself, the people tread wine presses and bring in burdens on the holy day. Foreign merchants from Tyre sell fish and wares. The boundary between the sacred day and the commercial week has been erased by indifference and greed.',
        },
        {
          kind: 'commentary',
          id: 'fathers-evil',
          html:
            'Nehemiah appeals to history: did not your fathers do this very thing? And did not God bring evil upon the city because of it? The exile itself was a consequence of Sabbath profanation. Yet the people, having returned from exile, are repeating the very sin that cost them everything. There is a kind of willful amnesia at work—the people have forgotten what the breaking of covenant cost them.',
        },
        {
          kind: 'hebrew',
          id: 'shabbat-sabbath',
          title: 'Shabbat — "The Sabbath"',
          script: 'שַׁבָּת',
          translit: '<strong>Shabbat</strong> · the Sabbath; the seventh day; ceasing from work',
          description:
            'The Sabbath is not merely a day of rest, but the sign of God&apos;s covenant with Israel (Exodus 31:13; Ezekiel 20:12). To keep the Sabbath holy is to affirm that God, not human effort, sustains life. To profane it is to declare that human commerce and production matter more than covenant fidelity. When Nehemiah closes the gates to enforce Sabbath rest, he is defending the very heart of Israel&apos;s identity as God&apos;s people.',
        },
        {
          kind: 'commentary',
          id: 'gates-closed',
          html:
            'Nehemiah does not merely ask or persuade. He acts. He closes the gates before the Sabbath begins and posts servants to guard them. The merchants try once or twice to lodge outside the walls, hoping to continue their trade, but when Nehemiah threatens to lay hands on them, they cease. The Sabbath is enforced not by exhortation but by structure—by the concrete refusal to permit commerce, by the locked gates, by the guard at the door.',
        },
        {
          kind: 'carry',
          html:
            'We live in a world of constant commerce and productivity. The boundaries between work and rest, between the sacred and the secular, are perpetually blurred. We check email on Sundays. We conduct business at all hours. We have forgotten what it means to cease, to rest, to declare one day holy. Nehemiah closed the gates. What gates might you close in your own life to protect the sacred from the relentless pressure to produce and consume?',
        },
        {
          kind: 'reflection',
          id: 'sabbath-guarded',
          prompt:
            'What "merchants" and "burdens" do you bring into your Sabbath—the rhythms and spaces of rest in your life? What would it look like to close the gates to them, at least one day a week?',
        },
      ],
    },

    /* ─── Nehemiah 13:23–28 — Mixed Marriages; Solomon Recalled ─────────── */
    {
      ref: 'Nehemiah 13:23–28',
      title: 'Purity of the Covenant People',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(
              23,
              'In those days also saw I Jews that had married wives of Ashdod, of Ammon, and of Moab:',
            ),
            plain(
              24,
              'And their children spake half in the speech of Ashdod, and could not speak in the Jews&apos; language, but according to the language of each people.',
            ),
            plain(
              25,
              'And I contended with them, and cursed them, and smote certain of them, and plucked off their hair, and made them swear by God, saying, Ye shall not give your daughters unto their sons, nor take their daughters unto your sons, or for yourselves.',
            ),
            plain(
              26,
              'Did not Solomon king of Israel sin by these things? yet among many nations was there no king like him, who was beloved of his God, and God made him king over all Israel: nevertheless even him did outlandish women cause to sin.',
            ),
            plain(
              27,
              'Shall we then hearken unto you to do all this great evil, to transgress against our God in marrying strange wives?',
            ),
            plain(
              28,
              'And one of the sons of Joiada, son of the high priest Eliashib, was son in law to Sanballat the Horonite: therefore I chased him from me.',
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'mixed-marriages',
          html:
            'The children of Jews married to women of Ashdod, Ammon, and Moab are losing their language and cultural identity. They cannot speak in the Jewish tongue; instead, they speak according to the language of each people. This is not merely a linguistic matter. Language is the carrier of covenant memory, of the stories that bind a people to God. When the language is lost, the covenant is threatened. Intermarriage with foreign women leads to spiritual assimilation—the gods of the foreign wives will follow, the practices of those nations will seep in.',
        },
        {
          kind: 'commentary',
          id: 'nehemiah-harsh',
          html:
            'Nehemiah&apos;s response is harsh by modern standards: he curses the men, strikes some of them, tears out their hair. Yet this is not mere cruelty. Nehemiah understands that the very existence of the covenant people depends on maintaining the boundary between Israel and the nations. Eliashib the high priest could not enforce it; his own son married into the family of Sanballat the enemy. So Nehemiah, as governor, must act with force to preserve what the priests will not.',
        },
        {
          kind: 'commentary',
          id: 'solomon-fallen',
          html:
            'Nehemiah invokes the terrible example of Solomon. Solomon was the beloved of God, made king over all Israel, wiser and greater than any other king. Yet "even him did outlandish women cause to sin" (1 Kings 11:3–4). Solomon took hundreds of foreign wives and concubines, and their gods led him astray. If Solomon could fall through foreign marriage, what hope is there for the common people? Nehemiah&apos;s point is stark: the covenant cannot be maintained through wisdom or greatness alone. It requires vigilance, boundary-keeping, and the willingness to say no to those who would blur the line between Israel and the nations.',
        },
        {
          kind: 'hebrew',
          id: 'nokhri-foreign',
          title: 'Nokhri — "Strange" or "Foreign"',
          script: 'נָכְרִי',
          translit: '<strong>Nokhri</strong> · foreign; strange; belonging to another nation',
          description:
            'The word "nokhri" does not refer to race or ethnicity in a modern sense, but to those outside the covenant. A "strange wife" is one who does not share the faith and practice of the God of Israel. The prohibition is not against another ethnicity per se, but against marriage that breaks the covenant unity of the people and introduces the worship of other gods.',
        },
        {
          kind: 'carry',
          html:
            'This passage is difficult. It speaks of marriage restrictions, of ethnic boundary-keeping, of actions that make us uncomfortable. Yet the underlying concern is real: what we choose to yoke ourselves to shapes us. The people Nehemiah confronts are losing their language, their identity, their covenant memory—not through force, but through the slow assimilation that comes from belonging to someone whose god is another. In our own lives, what "strange marriages" have we made—partnerships, habits, loves that have slowly pulled us away from the faith and practice that once defined us?',
        },
        {
          kind: 'reflection',
          id: 'strange-wives',
          prompt:
            'Setting aside the historical context of literal marriage, what commitments or relationships in your life have begun to compromise your covenant fidelity? What would it mean to say no, as Nehemiah did, to protect what matters most?',
        },
      ],
    },

    /* ─── Nehemiah 13:29–31 — The Final Prayer; Cleansed and Appointed ───── */
    {
      ref: 'Nehemiah 13:29–31',
      title: 'Remember Me, O My God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(
              29,
              'Remember them, O my God, because they have defiled the priesthood, and the covenant of the priesthood, and of the Levites.',
            ),
            plain(
              30,
              'Thus cleansed I them from all strangers, and appointed the wards of the priests and the Levites, every one in his business; and for the wood offering, at times appointed, and for the firstfruits.',
            ),
            plain(31, 'Remember me, O my God, for good.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cleansed-strangers',
          html:
            'Nehemiah has confronted corruption in the temple, neglect of the Levites, profanation of the Sabbath, intermarriage with foreign women. One by one, he has "cleansed" the city from all strangers—not by expulsion, but by enforcing the covenant boundaries that separate the people of God from those who do not share their faith. He appoints the wards of the priests and Levites, sets the schedules for the wood offerings and firstfruits. The machinery of the covenant is restored.',
        },
        {
          kind: 'commentary',
          id: 'final-prayer',
          html:
            'Yet the chapter does not end with Nehemiah&apos;s accomplishments. It ends with a prayer: "Remember me, O my God, for good." Three times in this chapter, Nehemiah has prayed "Remember me"—after restoring the temple, after securing the Levites&apos; portions, after enforcing the Sabbath. He does not rest in his own strength or in the permanence of what he has accomplished. He knows that what he has done, without God&apos;s ongoing remembrance and mercy, will unravel again. His good deeds will be forgotten. The reforms will fade. Only God&apos;s remembrance can make them stick.',
        },
        {
          kind: 'christ',
          id: 'greater-cleanser',
          title: 'Christ Connection — The One Who Cleanses the Temple Forever',
          html:
            'Nehemiah cleanses the temple, but the temple is defiled again. His reforms are needed repeatedly. His prayers for remembrance grow more insistent. But Jesus, when He enters the temple in John 2:15–17, says something final: "It is written, The zeal of thine house hath eaten me up." He drives out the money-changers and merchants, He overturns the tables, He acts with the authority of one who owns what the builders merely tend. Where Nehemiah must return again and again to enforce the boundary, Christ offers a final cleansing — not of a building, but of the hearts of His people. He is the temple (John 2:19–21). In Him, the work of purification is complete. And where Nehemiah prays "Remember me," Christ tells the thief on the cross, "To day shalt thou be with me in paradise" (Luke 23:43)—a word of remembrance that carries the power of eternal vindication.',
        },
        {
          kind: 'carry',
          html:
            'Nehemiah ends in prayer, not triumph. He has done the work, but he knows it is incomplete. We live in the same tension. We build, we reform, we clean, we set boundaries. But we cannot make what we have done permanent by our own hand. Like Nehemiah, we must entrust our work to God&apos;s remembrance. "Remember me, O my God, for good"—is not this the prayer of every person who has given themselves to serving God? Not "I have won," but "I have tried to be faithful. Please do not forget. Please remember me."',
        },
        {
          kind: 'reflection',
          id: 'final-prayer',
          prompt:
            'What work have you done that you cannot guarantee will last? What would it mean to entrust it to God&apos;s remembrance, as Nehemiah did, rather than trying to make it permanent by your own effort?',
        },
      ],
    },
  ],
};
