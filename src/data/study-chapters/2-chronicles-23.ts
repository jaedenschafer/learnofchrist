import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Chronicles 23 — Jehoiada's Coup: The King Unveiled
 *
 * In the seventh year, the faithful priest Jehoiada moves. He gathers the
 * captains of the Levites and makes a covenant to crown the young king Joash,
 * hidden away since his mother Athaliah seized the throne and murdered the
 * royal line. In a carefully orchestrated ceremony at the temple, guarded by
 * priests and Levites with weapons in hand, the king is crowned and anointed.
 * Athaliah tears her clothes in rage — "Treason!" — and is led outside and
 * executed. In a moment of national joy, the people return to God: they make
 * a covenant with the Lord, tear down the temple of Baal, and restore the
 * worship that had been abandoned. A hidden king revealed. A nation renewed.
 * A pattern of Christ.
 */
export const CHRONICLES_2_23: RichChapterContent = {
  bookSlug: '2-chronicles',
  bookName: '2 Chronicles',
  chapter: 23,

  estimatedMinutes: { beginner: 7, intermediate: 14, deep: 17 },
  topicTags: ['kingship', 'worship', 'judgment', 'repentance'],
  opener: {
    topical: true,
    caption: '2 Chronicles 23',
  },
  intros: [
    'For six years, Israel has suffered under a usurper. When King Ahaziah died, his mother Athaliah seized the throne and murdered every royal heir she could find — nearly extinguishing the line of David. But one child escaped: Joash, the young king, hidden in the temple by his aunt Jehosheba and raised in secret by Jehoiada the priest. The nation knows nothing of him. The throne seems lost.',
    'Then, in the seventh year, everything changes. Jehoiada the priest moves. He does not seize power by force or declare himself king. Instead, he gathers the captains and the Levites, makes them swear a covenant, and orchestrates an unveiling. At the temple, surrounded by guards with shields and spears that belonged to King David, the young king is brought out into the light. The crown is placed upon his head. The people shout: "God save the king!" It is a moment of astonishing trust — the trust that God keeps His promises, that the hidden heir will be revealed in His time, that the Levitical priesthood still serves the purposes of heaven.',
  ],

  bottomShare: {
    label: 'Share 2 Chronicles 23',
    quote:
      'In the seventh year, the hidden king was revealed and crowned. A faithful priest unveiled the heir, the people made a covenant, and a nation turned back to God. This is the pattern of every unveiling: waiting, then revelation; covenant, then worship.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Chronicles 23 · Study Guide',
  },

  resources: [
    {
      id: 'iaa-judah-monarchy',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'Judah in the Monarchy Period',
      url: 'https://www.antiquities.org.il/en/',
      description: 'IAA database of Iron Age Judahite sites, inscriptions, and settlement patterns.',
    },
    {
      id: 'sefaria-2-chronicles-23',
      kind: 'study',
      source: 'Sefaria',
      label: '2 Chronicles 23 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/II_Chronicles.23',
      description: 'The Hebrew text of 2 Chronicles 23 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  sections: [
    /* ─── 2 Chronicles 23:1–3 — Jehoiada Strengthens Himself ────────────── */
    {
      ref: '2 Chronicles 23:1–3',
      title: 'In the Seventh Year, the Priest Moves',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 1,
              spans: [
                t('And in the seventh year '),
                hg('Jehoiada strengthened himself', 'jeh-strengthens'),
                t(', and took the captains of hundreds, Azariah the son of Jeroham, and Ishmael the son of Jehohanan, and Azariah the son of Obed, and Maaseiah the son of Adaiah, and Elishaphat the son of Zichri, into covenant with him.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And they went about in Judah, and gathered the Levites out of all the cities of Judah, and the chief of the fathers of Israel, and they came to Jerusalem.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And all the congregation made a covenant with the king in the house of God. And he said unto them, Behold, the '),
                hp('king&apos;s son shall reign', 'king-shall-reign'),
                t('; as the Lord hath said of the sons of David.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jeh-strengthens',
          html:
            'Jehoiada "strengthened himself." This phrase carries the sense of gathering resolve, of a man moving with deliberate purpose. After six years of watching Athaliah rule and the royal line grow silent, the priest acts. He is not a man seizing power for himself. He is a man summoning others to stand with him in faithfulness. He calls the captains of hundreds — the military leaders — and makes them swear a covenant. A covenant, not a command. This is not a coup in the modern sense, but a covenant renewal, a restoration of what God had promised. [res:iaa-judah-monarchy]',
        },
        {
          kind: 'commentary',
          id: 'gathering-levites',
          html:
            'Jehoiada gathers not just soldiers, but Levites from all the cities of Judah, and "the chief of the fathers of Israel." This is a national gathering. The whole congregation comes to Jerusalem, to the house of God. What is happening is not a military seizure but a religious reassembly — the people gathering to remember who they are and whose covenant they belong to[res:sefaria-2-chronicles-23][res:bibleodyssey-2-chronicles-overview-23].',
        },
        {
          kind: 'commentary',
          id: 'king-shall-reign',
          html:
            'Jehoiada speaks to the gathered people with one declaration: "Behold, the king&apos;s son shall reign; as the Lord hath said of the sons of David." He does not claim authority to choose a king. He appeals to the Lord&apos;s promise. The covenant is not between Jehoiada and the people; it is between God, the king, and the people. The priest is a servant of that covenant, not its maker.',
        },
        {
          kind: 'hebrew',
          id: 'jehoiada-name',
          title: 'Yehoyada — "Yah Knows"',
          script: 'יְהוֹיָדָע',
          translit: '<strong>Yehoyada</strong> · Yah knows; God knows',
          description:
            'Jehoiada&apos;s name itself speaks his calling. "Yah knows" — the Lord knows what is hidden, knows the truth that has been concealed, knows the heir who has waited in darkness. The priest&apos;s role is to align himself with what God knows, to be the instrument through which God&apos;s knowledge becomes visible to the people.',
        },
        {
          kind: 'carry',
          html:
            'In our own lives, there are moments when faithfulness requires gathering — bringing others together around what we know to be true, even when the world has other plans, even when power seems to belong to someone else. Jehoiada did not try to hide his intention or manipulate people into compliance. He gathered them openly around the covenant. Whom do you need to gather around the truth you hold?',
        },
        {
          kind: 'reflection',
          id: 'jeh-strengthens-reflection',
          prompt: 'When have you had to "strengthen yourself" and ask others to stand with you around something you believed was true? How did you invite them to make a covenant, rather than simply commanding them?',
        },
      ],
    },

    /* ─── 2 Chronicles 23:4–11 — The Temple Defended; The King Crowned ──── */
    {
      ref: '2 Chronicles 23:4–11',
      title: 'Behold the King: Crowned and Anointed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 4,
              spans: [
                t('This is the thing that ye shall do; A third part of you that enter on the sabbath, of the priests and of the Levites, shall be porters of the doors;'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And a third part shall be at the king&apos;s house; and a third part at the gate of the foundation: and all the people shall be in the courts of the house of the Lord.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('But let none come into the house of the Lord, save the priests, and they that minister of the Levites; they shall go in, for they are holy: but all the people shall keep the watch of the Lord.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And the Levites shall compass the king round about, every man with his weapons in his hand; and whosoever else cometh into the house, he shall be put to death: but be ye with the king when he cometh in, and when he goeth out.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2-chronicles-23-mid-7',
          html:
            '<p>The construction progresses: each phase brought the temple closer to completion.</p>',
        },
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 8,
              spans: [
                t('So the Levites and all Judah did according to all things that Jehoiada the priest had commanded, and took every man his men that were to come in on the sabbath, with them that were to go out on the sabbath: for Jehoiada the priest dismissed not the courses.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Also Jehoiada the priest delivered to the captains of the hundreds spears, and bucklers, and shields, that had been king David&apos;s, which were in the house of God.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And he set all the people, every man having his weapon in his hand, from the right side of the temple to the left side of the temple, along by the altar and the temple, by the king round about.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Then they brought out the '),
                hp('king&apos;s son', 'king-son-unveiled'),
                t(', and put upon him the crown, and gave him the testimony, and made him king. And Jehoiada and his sons '),
                hy('anointed him', 'anointed-him'),
                t(': and they said, God save the king.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'temple-defended',
          html:
            'Jehoiada organizes the Levites into three companies: one third at the doors, one third at the king&apos;s house, one third at the gate. This is not the language of warfare, but of sacred order. The temple becomes a sanctuary, protected not by secret police but by the priesthood. The sanctuary is for the holy ones — the priests and the Levites who minister. But "all the people shall keep the watch of the Lord." Everyone has a role in guarding what is sacred.',
        },
        {
          kind: 'commentary',
          id: 'weapons-ready',
          html:
            'The Levites surround the king "every man with his weapons in his hand." But these are not weapons of ambition or conquest. They are the shields and spears of King David, stored in the house of God. The priest retrieves the instruments of the former reign, of the true line, and places them in the hands of those who serve the Lord. The message is clear: this is not Athaliah&apos;s kingdom being overthrown by rebels. This is David&apos;s kingdom being restored by those faithful to God&apos;s covenant.',
        },
        {
          kind: 'commentary',
          id: 'king-son-unveiled',
          html:
            'The text reaches its moment: "Then they brought out the king&apos;s son." After six years in hiding, the heir is revealed. Not in secret, not in a back room, but in the house of God, surrounded by the people of Judah, with the weapons of David in the hands of the Levites. The crown is placed upon his head. The testimony — the covenant law, the instruction of God — is given to him. He is made king.',
        },
        {
          kind: 'commentary',
          id: 'anointed-him',
          html:
            'Jehoiada and his sons anoint him. Not just one priest, but the whole priestly line participates in the anointing. This is a sign that the priesthood affirms this king, that the Lord&apos;s anointing is upon him. And the people cry out: "God save the king!" It is not a political acclamation. It is a prayer. They invoke God&apos;s protection and blessing upon the unveiled heir.',
        },
        {
          kind: 'hebrew',
          id: 'mashach-anoint',
          title: 'Mashach — "To Anoint"',
          script: 'מָשַׁח',
          translit: '<strong>Mashach</strong> · to anoint; to consecrate; to set apart for sacred purpose',
          description:
            'To anoint is to pour oil upon someone as a sign that God has set them apart for a particular purpose. The anointing is not the crown — it is what makes the crown sacred. It says: this person is not merely politically selected. This person is set apart by heaven. The anointing of the king is one of the deepest symbols of God&apos;s choice and blessing.',
        },
        {
          kind: 'christ',
          id: 'king-unveiled-connection',
          title: 'Christ Connection — The King Revealed in His Time',
          html:
            'Joash was hidden for his time, then unveiled. This pattern echoes Paul: &quot;But when the fulness of the time was come, God sent forth his Son, made of a woman, made under the law&quot; (Galatians 4:4). The King was not manifested until the appointed time. And when He was, He was not crowned by human hands in a palace, but by His Father&apos;s anointing — revealed not to the political world, but to those who could see what the anointing meant. The hidden heir, revealed and anointed, crowned not by conquest but by covenant.',
        },
        {
          kind: 'carry',
          html:
            'There are promises in your own life that have seemed to be hidden, times when you have waited and wondered if God had forgotten. Jehoiada waited six years. But he did not despair. He prepared. He gathered. He trusted that the time would come when the king would be revealed. When that moment came, it was not sudden for those who had been waiting. It was the fulfillment of a covenant. What promise are you waiting to see unveiled?',
        },
        {
          kind: 'reflection',
          id: 'king-unveiled-reflection',
          prompt: 'When you see a hidden heir finally crowned, what does it stir in you about your own life? What is waiting to be revealed?',
        },
      ],
    },

    /* ─── 2 Chronicles 23:12–15 — Athaliah's Rage; Her End ──────────────── */
    {
      ref: '2 Chronicles 23:12–15',
      title: 'Athaliah Sees and Falls',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 12,
              spans: [
                t('Now when Athaliah heard the noise of the people running and praising the king, she came to the people into the house of the Lord:'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And she looked, and, behold, the king stood at his pillar at the entering in, and the princes and the trumpets by the king: and all the people of the land rejoiced, and sounded with trumpets, also the singers with instruments of musick, and such as taught to sing praise. Then Athaliah rent her clothes, and said, Treason, Treason.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Then Jehoiada the priest brought out the captains of hundreds that were set over the host, and said unto them, Have her forth of the ranges: and whoso followeth her, let him be slain with the sword. For the priest said, Slay her not in the house of the Lord.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('So they laid hands on her; and when she was come to the entering of the horse gate by the king&apos;s house, they slew her there.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'athaliah-hears',
          html:
            'The usurper hears the noise first. She hears the people running, singing, celebrating. This is not a silent transition of power. This is a nation rejoicing. She does not understand — not until she arrives at the temple and sees the boy-king standing at his pillar, crowned and surrounded by princes and trumpets, while the people sing and the singers make music with instruments. In that instant, she understands everything: she has lost.',
        },
        {
          kind: 'commentary',
          id: 'treason-treason',
          html:
            'Athaliah cries out: "Treason, Treason!" But she is wrong. This is not treason. This is restoration. She murdered the royal line to seize the throne. Those she calls traitors are restoring the rightful heir. Her cry of "treason" reveals how she sees power: as something seized and held by force, as a throne that belongs to whoever can murder their way to it. She cannot imagine that others might value covenant over conquest.',
        },
        {
          kind: 'commentary',
          id: 'priest-judgment',
          html:
            'Jehoiada gives a remarkable order: "Have her forth of the ranges ... Slay her not in the house of the Lord." The usurper will be executed, but not in the sanctuary. Not where God dwells. The priest protects the holiness of the temple even as he removes the one who has defiled the nation. This is justice tempered with reverence. The priest&apos;s role is to guard what is sacred, even while executing judgment on those who would destroy it.',
        },
        {
          kind: 'carry',
          html:
            'Athaliah could not see what was happening because she did not understand covenant. She saw only power being seized or lost. But the people saw restoration — a return to what had always been promised. When you look at the circumstances of your own life, do you see only the visible struggle for control? Or can you see the hand of God unveiling what was always meant to be?',
        },
        {
          kind: 'reflection',
          id: 'athaliah-falls-reflection',
          prompt: 'What do you hold so tightly that you fear losing it? What if, like Athaliah, you were to discover that what you were fighting to keep was already gone, and something far better was already being revealed?',
        },
      ],
    },

    /* ─── 2 Chronicles 23:16–21 — The Covenant Renewed; Baal Destroyed ──── */
    {
      ref: '2 Chronicles 23:16–21',
      title: 'The Covenant Renewed and Worship Restored',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 16,
              spans: [
                t('And Jehoiada made a covenant between him, and all the people, and the king, that they should be the '),
                t('Lord&apos;s people'),
                t('.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Then all the people went to the house of Baal, and brake it down, and brake his altars and his images in pieces, and slew Mattan the priest of Baal before the altars.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Also Jehoiada appointed the offices of the house of the Lord by the hand of the priests and Levites, whom David had distributed in the house of the Lord, to offer the burnt offerings of the Lord, as it is written in the law of Moses, with rejoicing and with singing, as it was ordained by David.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And he set the porters at the gates of the house of the Lord, that none which was unclean in any thing should enter in.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And he took the captains of hundreds, and the nobles, and the governors of the people, and all the people of the land, and brought down the king from the house of the Lord: and they came through the high gate into the king&apos;s house, and set the king upon the throne of the kingdom.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And all the people of the land rejoiced: and the city was quiet, after they had slain Athaliah with the sword.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'three-way-covenant',
          html:
            'Jehoiada makes a covenant "between him, and all the people, and the king." This is a three-way covenant: between the priest (who represents God&apos;s authority), the people (who represent the nation), and the king (who represents God&apos;s anointed). All three parties swear to each other. The people swear to the king. The king swears to the people. Both swear before the priest that they will be "the Lord&apos;s people." The covenant is not between human powers. It is between the nation and God, with the priest and the king both serving that larger covenant.',
        },
        {
          kind: 'commentary',
          id: 'baal-destroyed',
          html:
            'The people do not celebrate the usurper&apos;s death and then slowly return to their old ways. They move immediately to tear down the house of Baal, to break his altars and images, to execute Mattan the priest of Baal. Worship of Baal — the foreign god, the god that had lured so many of Israel&apos;s kings into idolatry — is rooted out. The false worship that flourished under Athaliah&apos;s reign is destroyed. This is what covenant renewal looks like: not a return to comfortable compromise, but a radical realignment toward the Lord alone.',
        },
        {
          kind: 'commentary',
          id: 'worship-restored',
          html:
            'Jehoiada appoints the offices of worship according to what David had ordained. The burnt offerings resume. The Levites sing and make music, as they did when David first brought the ark into Jerusalem. The worship is restored "with rejoicing and with singing, as it was ordained by David." This is not the bare restoration of ritual. This is joy returning to the sanctuary. The people have not merely removed an evil regime; they have rekindled what is holy.',
        },
        {
          kind: 'hebrew',
          id: 'berit-covenant',
          title: 'Berit — "Covenant"',
          script: 'בְּרִית',
          translit: '<strong>Berit</strong> · covenant; agreement; binding relationship',
          description:
            'A covenant is not a mere contract. It is a binding relationship sealed with commitment and often with blood. When Jehoiada makes a covenant between the priest, the people, and the king, he is establishing a relationship that goes beyond political alliance. All three parties are bound to each other and to God. The covenant is the sacred container in which kingship, priesthood, and peoplehood are held together.',
        },
        {
          kind: 'christ',
          id: 'covenant-connection',
          title: 'Christ Connection — The Covenant Renewed in Blood',
          html:
            'Jehoiada makes a covenant between the priest, the people, and the king. The New Testament shows Christ fulfilling all three roles: He is the eternal Priest (Hebrews 7:24–25), the anointed King of kings (Revelation 19:16), and the head of a redeemed people (Ephesians 1:22–23). And the covenant He establishes is sealed not with animal sacrifice in a temple, but with His own blood, shed &quot;for the remission of sins&quot; (Matthew 26:28). The pattern Jehoiada enacted — priest, people, and king bound together by covenant — reaches its perfection in Christ, who becomes all three and offers a covenant that cannot be broken.',
        },
        {
          kind: 'carry',
          html:
            'The people rejoiced, and "the city was quiet." This is the peace that follows covenant renewal — not the absence of conflict, but the presence of alignment. When we align ourselves with God, when we remove what is false and return to what is true, there is a quietness that settles over the heart. It is not the quiet of defeat. It is the quiet of a people who know where they belong.',
        },
        {
          kind: 'reflection',
          id: 'covenant-reflection',
          prompt: 'What would it look like to renew a covenant in your own life? What false worship (false allegiance, false comfort, false security) would need to be torn down so that true worship could be restored?',
        },
      ],
    },
  ],
};
