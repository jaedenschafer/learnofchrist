import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 1 Esdras 7 — The Temple Finished and Dedicated; The Passover Kept
 *
 * King Darius searches the archives and discovers Cyrus&apos;s original decree
 * authorizing the temple&apos;s rebuilding. He not only affirms it but furnishes
 * funds from the royal treasury. The work accelerates. Under the prophetic
 * encouragement of Haggai and Zechariah, the temple is finished in the sixth year
 * of Darius&apos;s reign. The people dedicate it with great joy — sacrifices of
 * bullocks, rams, and lambs. Then they keep the Passover. Those who had
 * "separated themselves from the filthiness of the heathen" are welcomed to eat
 * and celebrate with the returnees. God&apos;s hand and a pagan king&apos;s heart move
 * in unison toward restoration.
 */
export const FIRST_ESDRAS_7: RichChapterContent = {
  bookSlug: '1-esdras',
  bookName: '1 Esdras',
  chapter: 7,

  estimatedMinutes: { beginner: 8, intermediate: 16, deep: 22 },
  intros: [
    'The work of rebuilding has met opposition. Enemies of Judah lodge complaints with King Darius, claiming no royal decree authorizes the Jews to rebuild their temple. The construction stalls. But Darius, rather than dismiss the Jews, orders the archives in Babylon searched. There, in the palace of the Medes, a scroll is discovered — the very decree of Cyrus, written and sealed, proving that the authorization is real.',
    'What Darius discovers ignites more than compliance. He adds his own royal voice to Cyrus&apos;s. Not only does he affirm the original order; he commands that expenses for the work be paid from the royal treasury. He supplies bullocks, rams, and lambs for the altar. He furnishes wheat, salt, wine, and oil for the priests. And he pronounces a curse on anyone foolish enough to alter his decree: let timber be torn from their own house and let them be hanged upon it.',
    'The result is swift. The opposition ceases. The elders of the Jews prosper. Through the words of the prophets Haggai and Zechariah, and through the help of Darius, the temple rises. In the sixth year of Darius&apos;s reign, on the third day of the month Adar, the work is finished. The people dedicate it with joy — 100 bullocks, 200 rams, 400 lambs, and twelve he-goats for a sin offering on behalf of all Israel. Then, finally, they keep the Passover. All who have separated themselves from the surrounding darkness to seek the Lord God of Israel are invited to eat and celebrate together.',
  ],

  opener: {
    matchTitle: /temple|dedication|rebuild/i,
    matchArtist: /tissot|fuerst|peixoto/i,
    caption: 'The Restored Temple: A Place Made Ready for God',
  },

  bottomShare: {
    quote:
      'The temple of the Lord was finished in the sixth year of Darius&apos;s reign. The children of Israel, the priests, the Levites, and all the captivity kept the dedication with joy. And they kept the Passover with great celebration, inviting all who had separated themselves from the filthiness of the heathen to seek the Lord God of Israel.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Esdras 7 · Study Guide',
  },

  sections: [
    /* ─── 1 Esdras 7:1–2 — Darius Searches the Archives ──────────────── */
    {
      ref: '1 Esdras 7:1–2',
      title: 'Darius Searches the Archives',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 1,
              spans: [
                t('Then '),
                hg('Darius made a decree', 'esdras7-decree'),
                t(', and search was made in the house of the rolls, where the treasures were laid up in Babylon.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras7-decree',
          html:
            'Darius does not dismiss the complaint or rule arbitrarily. Instead, he orders the truth to be sought. This is an act of humility before history, before the record. A king who searches the archives is a king willing to be corrected by facts. In Babylon, where the richest treasures and the oldest records are kept, the scroll lies waiting — proof of Cyrus&apos;s long-ago command. Decades have passed, but the decree has not faded. It is written. It is real.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 2,
              spans: [
                t('And there was found at Achmetha, in the palace of the province of the Medes, a roll: therein was a record '),
                hy('written', 'esdras7-written'),
                t(': In the first year of Cyrus the king the same Cyrus made a decree concerning the house of God at Jerusalem, Let the house be builded, the place where they offered sacrifices.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras7-written',
          html:
            'The written word endures. What is recorded becomes truth available to future generations. Cyrus had spoken; Cyrus had written. The decree was not hearsay, not rumor, not the fading memory of an old king&apos;s promise. It was inscribed on a scroll in the palace of the Medes. When Darius finds it, he finds proof — and proof, once found, compels action.',
        },
        {
          kind: 'carry',
          html:
            'When you face resistance or doubt, do you retreat, or do you search for the truth? Darius had every reason to dismiss the Jews — they were a small people, their God was not his God. Yet he chose to verify. What would change if you, like Darius, refused easy assumptions and instead searched the record?',
        },
        {
          kind: 'reflection',
          id: 'esdras7-search-truth',
          prompt:
            'Darius chose to investigate rather than to judge from the complaint alone. Describe a time when you sought the full truth of a situation instead of accepting someone&apos;s version of events. How did what you discovered change your response?',
        },
      ],
    },

    /* ─── 1 Esdras 7:3–7 — The Decree Found and Affirmed ──────────────── */
    {
      ref: '1 Esdras 7:3–7',
      title: 'The Royal Decree: Restoration and Provision',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 3,
              spans: [
                t('Now therefore, '),
                hg('be ye far from thence', 'esdras7-be-far'),
                t(': let the work of this house of God alone: let the governor of the Jews and the elders of the Jews build this house of God in his place.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras7-be-far',
          html:
            'Darius speaks with absolute authority, addressing those who have lodged the complaint. "Be ye far from thence." The opposition is commanded to cease. Leave the work alone. This is not a gentle suggestion; this is a royal command that cannot be disputed. The enemies of Judah, the officials who filed the complaint, are shut out. The Jews are free to build.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 4,
              spans: [
                t('Moreover, I make a decree what ye shall do to the elders of these Jews for the building of this house of God: of the king&apos;s goods, even of the tribute beyond the river, '),
                hg('forthwith expenses be given', 'esdras7-forthwith'),
                t(' unto these men, that they be not hindered.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras7-forthwith',
          html:
            'Darius does not stop at removing opposition; he becomes the patron of the work. From the royal treasury, from the tribute collected across the provinces beyond the river, funds are to flow immediately to the elders of the Jews. The word "forthwith" — without delay — shows the urgency of the king&apos;s will. The work must not falter. The king himself underwrites it.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 5,
              spans: [
                t('And that which they have need of, both '),
                hy('young bullocks, rams, lambs, for the burnt offerings', 'esdras7-beasts'),
                t(', wheat, salt, wine, oil, according to the appointment of the priests at Jerusalem, let it be given them day by day without fail: that they may offer sacrifices of sweet savours unto the God of heaven, and pray for the life of the king, and of his sons.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras7-beasts',
          html:
            'Every material need is provided. Bullocks, rams, and lambs for burnt offerings — the king ensures that the altar will never lack what is needed for sacrifice. Wheat, salt, wine, oil — the daily provisions for the priestly ministry. "Day by day without fail" — this is a commitment to sustenance, not a one-time gift. The priests will lack nothing because the king has bound himself to provide.',
        },
        {
          kind: 'carry',
          html:
            'Notice what Darius expects: that the priests will pray for the life of the king and his sons. Provision flows in both directions — the king provides material goods, and the priests provide intercessory prayer. Is this not the pattern of the kingdom? Those with resources provide; those with access to God pray. Both are sacred.',
        },
        {
          kind: 'reflection',
          id: 'esdras7-provision',
          prompt:
            'Darius provides everything the priests need to worship God. What provisions has God made for your own spiritual life? And what are you praying for those who have provided for you?',
        },
      ],
    },

    /* ─── 1 Esdras 7:6–10 — The King's Curse on Interference ─────────── */
    {
      ref: '1 Esdras 7:6–10',
      title: 'The King\'s Curse and Command',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 6,
              spans: [
                t('Also I have made a decree, that whosoever shall alter this word, let timber be pulled down from his house, and being set up, let him be hanged thereon; let his house be made a '),
                hg('dunghill', 'esdras7-dunghill'),
                t(' for this.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras7-dunghill',
          html:
            'Darius speaks a curse. The language is harsh by modern standards, but it belongs to the ancient world. To alter the king&apos;s decree concerning a sacred house is to court destruction. The penalty is not arbitrary cruelty; it is the language of oath and covenant in the ancient Near East. It says: this matter is sacred, and to violate it is to invite the displeasure of both the king and the God of heaven. The house becomes a dunghill — the opposite of the temple, which is holy ground.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 7,
              spans: [
                t('And the God that hath caused his name to dwell there destroy all kings and people, that shall put to their hand to alter and to destroy this house of God which is at Jerusalem. I Darius have made a decree; '),
                hg('let it be done with speed', 'esdras7-speed'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras7-speed',
          html:
            'The king invokes the God of Israel. He acknowledges that a divine name dwells in the temple at Jerusalem. He calls on that God to destroy anyone who would alter or destroy the house. This is remarkable: a pagan king, speaking the language of Israel&apos;s covenant, placing himself under the authority of Israel&apos;s God for the sake of the temple&apos;s protection. And then he commands speed. Let it be done with speed. The work must not languish. Every day of delay is a day the sacred work is undone.',
        },
        {
          kind: 'carry',
          html:
            'When something is truly sacred — when God&apos;s name dwells in it — does it not deserve urgency? Does it not demand speed? What in your own life do you treat as sacred? Does the urgency of your daily schedule reflect the sacredness of what you claim to honor?',
        },
        {
          kind: 'reflection',
          id: 'esdras7-sacred-speed',
          prompt:
            'Darius commanded the work be done with speed. What sacred thing in your own spiritual life needs to be done with speed — not hastily, but with the urgency that reflects its importance?',
        },
      ],
    },

    /* ─── 1 Esdras 7:11–15 — The Temple Finished ────────────────────── */
    {
      ref: '1 Esdras 7:11–15',
      title: 'The Temple Finished',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 11,
              spans: [
                t('Then the governors beyond the river, Shethar-boznai and their companions did '),
                hg('diligently', 'esdras7-diligent'),
                t(' what Darius the king had sent; and the elders of the Jews builded and prospered, through the prophesying of Haggai the prophet and Zechariah the son of Iddo.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras7-diligent',
          html:
            'Opposition ceases. Those same officials who had lodged the complaint now execute the king&apos;s command with diligence. The work accelerates. And the elders of the Jews are not working alone — they are encouraged by the prophets Haggai and Zechariah. These are not merely builders and priests; they are a people whose ears are open to God&apos;s voice through His messengers. Human effort meets divine encouragement. Stone upon stone, the temple rises.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 12,
              spans: [
                t('And they builded and finished it, according to the commandment of the God of Israel, and according to the decree of Cyrus, and Darius, and '),
                hy('Artaxerxes', 'esdras7-artaxerxes'),
                t(' king of Persia.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras7-artaxerxes',
          html:
            'The text names three kings whose decrees authorized the work: Cyrus, Darius, and Artaxerxes. Each in their turn affirmed the restoration. This is not the work of a single monarch&apos;s whim, but the consistent will of successive rulers. What God desires and what the great kings of Persia decree have become aligned. God&apos;s purposes flow through human authority when that authority listens.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 13,
              spans: [
                t('And this house was finished on the third day of the month Adar, in the sixth year of the reign of Darius the king.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras7-finished-date',
          html:
            'Exactness marks the moment. The third day of Adar. The sixth year of Darius. This is history, not myth. Seventy years had passed since Nebuchadnezzar destroyed the first temple. Now, in a specific month, on a specific day, in a specific year, the house of the Lord stands again. The work that seemed impossible is done.',
        },
        {
          kind: 'christ',
          id: 'esdras7-christ-temple',
          title: 'Christ Connection — Christ as the Greater Temple',
          html:
            'Jesus speaks of His own body as the temple: "Destroy this temple, and in three days I will raise it up" (John 2:19). He is speaking of His resurrection. The second temple, completed by the returned exiles, pointed forward to Christ, the true dwelling place of God. "In him dwelleth all the fulness of the Godhead bodily" (Colossians 2:9). The exiles labored to restore a house of stones; Christ became the living house where God&apos;s presence abides eternally. And through Him, every believer becomes a temple: "Know ye not that ye are the temple of the Holy Ghost which is in you?" (1 Corinthians 6:19).',
        },
        {
          kind: 'carry',
          html:
            'The temple took decades to rebuild — not because God lacks power, but because restoration requires human faithfulness, perseverance through opposition, and the willingness to listen to prophetic voices. What in your own life is being rebuilt? Have you grown impatient with the timeline, or are you discovering that the slowness itself teaches you something about God?',
        },
        {
          kind: 'reflection',
          id: 'esdras7-temple-finish',
          prompt:
            'The temple was finished in the sixth year of Darius&apos;s reign. From the time of its destruction to its completion, seventy years passed. What have you waited for that seemed like it would never come? When it finally arrived, did it feel worth the wait?',
        },
      ],
    },

    /* ─── 1 Esdras 7:14–22 — The Dedication and the Passover ────────── */
    {
      ref: '1 Esdras 7:14–22',
      title: 'The Dedication: Joy and Sacrifice',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 14,
              spans: [
                t('And the children of Israel, the priests, and the Levites, and the rest of them that were of the captivity, '),
                hg('kept the dedication of this house of God with joy', 'esdras7-joy'),
                t(':'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras7-joy',
          html:
            'The dedication is kept with joy. Not merely observed, not dutifully enacted, but celebrated. The Hebrew concept of keeping a feast or celebration (chagag) carries the sense of joyful assembly, of dancing and singing together. After decades of labor, opposition, and delay, the moment has come. The exiles, the priests, the Levites — all who have been part of this restoration — gather to keep the dedication with singing, with dancing, with unguarded celebration.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 15,
              spans: [
                t('And offered at the dedication of this house of God 100 bullocks, 200 rams, 400 lambs: and for a sin offering for all Israel, '),
                hy('twelve he goats', 'esdras7-twelve'),
                t(', according to the number of the tribes of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras7-twelve',
          html:
            'The numbers are not random. Twelve he-goats for a sin offering, one for each tribe of Israel. Even though most of the northern kingdom has been scattered across Assyria, even though the remnant consists primarily of Judah, Benjamin, and Levi, the sacrifice remembers all twelve tribes. The restored temple stands on behalf of the entire covenant people, both present and dispersed. No one is forgotten.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 16,
              spans: [
                t('And they set the priests in their divisions, and the Levites in their courses, for the service of God, which is at Jerusalem; as it is written in the book of Moses.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras7-order',
          html:
            'The ancient order is restored. The priests are set in their divisions, the Levites in their courses, according to the law of Moses. This is not innovation or improvisation; it is the renewal of what was. The liturgy, the priesthood, the whole structure of worship that had been interrupted by exile now resumes. The past and the present are woven together.',
        },
        {
          kind: 'hebrew',
          id: 'esdras7-chagag',
          title: 'Chagag — "To Keep a Feast" or "To Celebrate"',
          script: 'חָגַג',
          translit: '<strong>Chagag</strong> · to celebrate a feast; to dance in celebration; to observe with joy',
          description:
            'The root carries more than obligation. To chagag is to celebrate with your whole being — body, voice, heart. When the exiles keep the dedication, they are not merely going through motions. They are celebrating, rejoicing, allowing the joy of restoration to overflow.',
        },
        {
          kind: 'carry',
          html:
            'When something precious is restored, do you celebrate it with wholehearted joy, or do you move quickly to the next demand? The exiles stopped. They gathered. They sacrificed. They kept the dedication with joy. What joy in your own spiritual life are you failing to pause and celebrate?',
        },
        {
          kind: 'reflection',
          id: 'esdras7-dedication-joy',
          prompt:
            'The dedication includes offerings for all Israel — even the lost northern tribes. Whom do you carry in prayer? Whose restoration or healing do you celebrate even when they are far away or you cannot see the final outcome?',
        },
      ],
    },

    /* ─── 1 Esdras 7:23–36 — The Passover Kept ──────────────────────── */
    {
      ref: '1 Esdras 7:23–36',
      title: 'The Passover: The Covenant Renewed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 23,
              spans: [
                t('And after these things the children of the captivity that were come out of their captivity '),
                hg('kept the passover', 'esdras7-passover'),
                t(' upon the 14th day of the first month:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras7-passover',
          html:
            'Seventy years earlier, the Passover could not be kept in Jerusalem. The temple lay in ruins. The people were scattered, enslaved in a foreign land. Now, with the temple restored, the Passover is celebrated again in the very place where it is ordained to be observed. The festival that connects each generation to the exodus, to God&apos;s deliverance from Egypt, is now observed by people who have just experienced deliverance from exile. The ancient story becomes their own.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 24,
              spans: [
                t('For the priests and the Levites were purified together; and they were all purified: and they killed the passover for all the children of the captivity, and for their brethren the priests, and for themselves.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras7-purified',
          html:
            'To keep the Passover, one must first be purified. The priests and Levites make themselves clean, both ritually and ceremonially. This is not mere washing; it is the state of being prepared to approach God. They purify themselves, and then they kill the Passover lamb — not just for the laity, but for one another as well. There is no hierarchy here, no separation between priests and people. All are equally dependent on the sacrifice.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 25,
              spans: [
                t('And the children of Israel that were come again out of captivity, and '),
                hp('all such as had separated themselves unto them from the filthiness of the heathen of the land, to seek the Lord God of Israel', 'esdras7-separated'),
                t(', did eat, and '),
                hg('kept the feast of unleavened bread 7 days with joy', 'esdras7-unleavened'),
                t(': for the Lord had made them joyful.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras7-separated',
          html:
            'Notice the remarkable inclusivity. "All such as had separated themselves unto them from the filthiness of the heathen of the land, to seek the Lord God of Israel" — these are Gentiles who have chosen to follow the God of Israel. They have renounced the practices of the surrounding peoples. They have aligned themselves with God&apos;s people. And they are invited to eat the Passover. The Passover is not exclusive; it is open to all who seek the Lord God of Israel and have separated themselves from that which defiles. Identity is no longer tribal; it is covenantal. You become part of God&apos;s people by your choice to seek Him.',
        },
        {
          kind: 'commentary',
          id: 'esdras7-unleavened',
          html:
            'For seven days, unleavened bread is eaten — bread without yeast, bread that speaks of haste and deliverance, bread that has no room for corruption or fermentation. The feast lasts a full week. This is not a single meal; this is a season of celebration and renewal. And it is kept with joy — a joy that the text explicitly says the Lord Himself had given. This is grace. God is the source of the joy itself.',
        },
        {
          kind: 'christ',
          id: 'esdras7-christ-passover',
          title: 'Christ Connection — Christ Our Passover',
          html:
            'Paul writes: "For even Christ our passover is sacrificed for us: therefore let us keep the feast, not with old leaven, neither with the leaven of malice and wickedness; but with the unleavened bread of sincerity and truth" (1 Corinthians 5:7–8). The lambs slain in this Passover celebration point to Christ, the Lamb of God who takes away the sin of the world. And the inclusion of Gentiles who have separated themselves to seek God prefigures the gospel: "He came unto his own, and his own received him not. But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name" (John 1:11–12). In Christ, the division between Jew and Gentile is broken. All who believe, all who have separated themselves from sin to seek God, are welcome at His table.',
        },
        {
          kind: 'greek',
          id: 'esdras7-agnos',
          title: 'Agnos — Pure; Holy',
          script: 'ἁγνός',
          translit: '<strong>Agnos</strong> · pure; undefiled; set apart as holy',
          description:
            'To be agnos is to be free of impediment in one&apos;s relationship with the holy. The returned exiles purify themselves to keep the Passover, making themselves agnos — prepared to stand before God. This purity is not moral perfection; it is the state of having separated oneself from that which defiles and having aligned oneself with what is holy.',
        },
        {
          kind: 'carry',
          html:
            'The Passover is kept in a community that includes both native Israelites and those who have separated themselves from the world to seek God. No one is turned away who genuinely seeks. When you gather with others to worship, do you make room for those who may not look like you or come from your background, as long as they have separated themselves to seek the Lord? What walls have you broken down?',
        },
        {
          kind: 'reflection',
          id: 'esdras7-passover-final',
          prompt:
            'Those who "separated themselves from the filthiness of the heathen" were invited to keep the Passover with Israel. What does it mean to "separate yourself" from worldly patterns without becoming arrogant or exclusive? How do you balance conviction with welcome?',
        },
      ],
    },

    /* ─── Closing: The Lord Turned the King's Heart ──────────────────── */
    {
      ref: '1 Esdras 7:26–29',
      title: 'The Lord\'s Hand and the King\'s Heart',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 26,
              spans: [
                t('Moreover '),
                hg('the Lord turned the heart of the king', 'esdras7-heart-turned'),
                t(' of the Persians to strengthen their hands in the work of the house of God, the God of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras7-heart-turned',
          html:
            'The text makes explicit what has been implicit throughout: the Lord turned the king&apos;s heart. Darius did not come to his decision through his own wisdom alone. His heart was turned. This is the God of Israel at work in the councils of Persia, shaping the will of the mightiest ruler of the age toward the restoration of His house. The psalm says, "The king&apos;s heart is in the hand of the Lord, as the rivers of water: he turneth it whithersoever he will" (Psalm 21:1). Darius is living proof of that truth.',
        },
        {
          kind: 'carry',
          html:
            'The restoration of the temple is not the work of the Jews alone, and it is not the work of Darius alone. It is the convergence of human faithfulness, prophetic encouragement, royal provision, and divine direction. When you face an obstacle that seems too large for you alone, do you look for how God might be turning hearts around you? Do you trust that your own obedience is working in concert with larger purposes?',
        },
        {
          kind: 'reflection',
          id: 'esdras7-heart-reflection',
          prompt:
            'The Lord turned the king&apos;s heart. In your own life, have you ever witnessed someone&apos;s attitude or decision shift in a way that served God&apos;s purposes? How does knowing that God can turn hearts change the way you pray for those in authority over you?',
        },
      ],
    },
  ],

  hasHebrew: true,
};
