import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Chronicles 35 — Josiah's Great Passover and Tragic Death
 *
 * King Josiah calls all Israel to keep a Passover unlike any since the days
 * of Samuel the Prophet. The lambs come from the royal treasury, the Levites
 * are ordered to their courses, and the feast is kept with meticulous care.
 * It is a moment of national unity and religious fervor. And then, at the
 * height of his power and piety, Josiah refuses the word of God spoken through
 * a pagan king, marches to his death at Megiddo, and leaves Judah mourning.
 * Jeremiah himself composes a lament. In this chapter, we see the power and
 * the fragility of a life lived before God — and the consequence of turning
 * away from the Father's word, no matter how it comes.
 */
export const CHRONICLES_2_35: RichChapterContent = {
  bookSlug: '2-chronicles',
  bookName: '2 Chronicles',
  chapter: 35,

  estimatedMinutes: { 5: 4, 10: 9, 15: 12 },
  intros: [
    'By the eighteenth year of Josiah&apos;s reign, the temple has been cleansed and the book of the Law discovered in its stones. The kingdom is reformed. The idols are torn down. And now the king calls the people to a feast that will become legendary — a Passover kept with such care, such generosity, and such fervor that it will be said to be without equal since the time of Samuel the Prophet. Josiah gives freely from his own substance — thirty thousand lambs, three thousand bullocks — so that every family in Jerusalem can keep the feast. The priests stand in their courses, the Levites sing, and the people eat and celebrate.',
    'But the story does not end in triumph. It ends with Josiah watching an army march up from Egypt, with a king telling him to flee, and with a king who will not listen. The anointed refuses the word of God — even when that word comes from a Gentile king, spoken in warning. And at Megiddo, in the valley that will one day see the final gathering of nations, Josiah dies. All Judah mourns. Jeremiah himself composes a lament for the king who heard God&apos;s word too late.',
  ],

  bottomShare: {
    label: 'Share 2 Chronicles 35',
    quote:
      'The greatest Passover since Samuel — and a king who would not listen to the Father&apos;s voice, even when it came from an enemy. Josiah&apos;s death reminds us that piety without listening becomes pride.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Chronicles 35 · Study Guide',
  },

  sections: [
    /* ─── 2 Chronicles 35:1–9 — Josiah Commands the Passover ──────────── */
    {
      ref: '2 Chronicles 35:1–9',
      title: 'Josiah Calls the Feast',
      blocks: [
        {
          kind: 'scripture',
          chapter: 35,
          lines: [
            plain(
              1,
              'Moreover Josiah kept a passover unto the Lord in Jerusalem: and they killed the passover on the fourteenth day of the first month.'
            ),
            plain(
              2,
              'And he set the priests in their charges, and encouraged them to the service of the house of the Lord,'
            ),
            {
              number: 3,
              spans: [
                t(
                  'And said unto the Levites that taught all Israel, which were holy unto the Lord, Put the holy ark in the house which Solomon the son of David king of Israel did build; '
                ),
                hg('it shall not be a burden upon your shoulders', 'chr35-burden'),
                t(': serve now the Lord your God, and his people Israel,'),
              ],
            },
            plain(
              4,
              'And prepare yourselves by the houses of your fathers, after your courses, according to the writing of David king of Israel, and according to the writing of Solomon his son.'
            ),
            plain(
              5,
              'And stand in the holy place according to the divisions of the families of the fathers of your brethren the people, and after the division of the families of the Levites.'
            ),
            plain(
              6,
              'So kill the passover, and sanctify yourselves, and prepare your brethren, that they may do according to the word of the Lord by the hand of Moses.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'josiah-command',
          html:
            'Josiah does not leave the Passover to chance. He sets the priests in their charges, encourages them, and instructs the Levites with precise detail. This is not a spontaneous outpouring of piety, but a carefully ordered work — the king acting as the chief steward of worship. He is commanding the kingdom to remember.',
        },
        {
          kind: 'commentary',
          id: 'chr35-burden',
          html:
            'The ark — the holiest object in Israel, the throne of God&apos;s presence — shall not be a burden upon their shoulders. This is Josiah&apos;s first word: you are called to serve, not to be crushed. The priesthood is ordered and enabled. The king provides.',
        },
        {
          kind: 'scripture',
          chapter: 35,
          lines: [
            plain(
              7,
              'And Josiah gave to the people, of the flock, lambs and kids, all for the passover offerings, for all that were present, to the number of thirty thousand, and three thousand bullocks: these were of the king&apos;s substance.'
            ),
            plain(
              8,
              'And his princes gave willingly unto the people, to the priests, and to the Levites: Hilkiah and Zechariah and Jehiel, rulers of the house of God, gave unto the priests for the passover offerings two thousand and six hundred small cattle and three hundred oxen.'
            ),
            plain(
              9,
              'Conaniah also, and Shemaiah and Nethaneel, his brethren, and Hashabiah and Jeiel and Jozabad, chief of the Levites, gave unto the Levites for passover offerings five thousand small cattle and five hundred oxen.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'king-generosity',
          html:
            'The numbers are staggering: thirty thousand lambs, three thousand bullocks — all from the king&apos;s own substance. His princes follow his example. This is not a matter of obligation or tax; it is a matter of the heart. Josiah is giving what costs him to enable his people to worship. The Passover becomes a gift, not a burden.',
        },
        {
          kind: 'hebrew',
          id: 'pesach',
          title: 'Pesach — "Passover"',
          script: 'פֶּ֫סַח',
          translit: '<strong>Pesach</strong> · Passover; the festival commemorating the deliverance from Egypt',
          description:
            'The Passover marks the night when the Lord passed over the homes of Israel, striking down the firstborn of Egypt but sparing those under the blood of the lamb. Every Passover is a reenactment of that deliverance, a covenant renewal, a memory that binds the people to their God. Josiah is calling Israel back to this ancient feast with a freshness they have not known for generations.',
        },
        {
          kind: 'carry',
          html:
            'When we lead others in worship, we do not merely enforce rules. We invite, we enable, we give of ourselves so that others can meet God. Josiah gives from his own substance, not from excess, but so that the poorest family in Jerusalem can keep the feast. His generosity is an act of faith — a belief that worship is worth the cost.',
        },
        {
          kind: 'reflection',
          id: 'josiah-call',
          prompt:
            'Josiah removes barriers to worship and gives from his own wealth so others can participate. What barriers to spiritual practice do you see around you? How might you invite others to draw near?',
        },
      ],
    },

    /* ─── 2 Chronicles 35:10–19 — The Passover Kept ────────────────────── */
    {
      ref: '2 Chronicles 35:10–19',
      title: 'The Greatest Passover Since Samuel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 35,
          lines: [
            plain(
              10,
              'So the service was prepared, and the priests stood in their place, and the Levites in their courses, according to the king&apos;s commandment.'
            ),
            plain(
              11,
              'And they killed the passover, and the priests sprinkled the blood from their hands, and the Levites flayed them.'
            ),
            plain(
              12,
              'And they removed the burnt offerings, that they might give according to the divisions of the families of the people, to offer unto the Lord, as it is written in the book of Moses. And so did they with the oxen.'
            ),
            {
              number: 13,
              spans: [
                t('And they roasted the passover with fire according to the ordinance: but the other holy offerings sod they in pots, in caldrons, in pans, and '),
                hg('divided them speedily among all the people', 'chr35-speedily'),
                t('.'),
              ],
            },
            plain(
              14,
              'And afterward they made ready for themselves, and for the priests: because the priests the sons of Aaron were busied in offering of burnt offerings and the fat until night; therefore the Levites prepared for themselves, and for the priests the sons of Aaron.'
            ),
            plain(
              15,
              'And the singers the sons of Asaph were in their place according to the commandment of David, and Asaph, and Heman, and Jeduthun the king&apos;s seer; and the porters waited at every gate; they might not depart from their service; for their brethren the Levites prepared for them.'
            ),
            plain(
              16,
              'So all the service of the Lord was prepared the same day, to keep the passover, and to offer burnt offerings upon the altar of the Lord, according to the commandment of king Josiah.'
            ),
            {
              number: 17,
              spans: [
                t('And the children of Israel that were present kept the passover at that time, and the feast of unleavened bread '),
                hg('seven days', 'chr35-seven-days'),
                t('.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And '),
                hp('there was no passover like to that kept in Israel from the days of Samuel the prophet', 'chr35-greatest'),
                t('; neither did all the kings of Israel keep such a passover as Josiah kept, and the priests, and the Levites, and all Judah and Israel that were present, and the inhabitants of Jerusalem.'),
              ],
            },
            plain(
              19,
              'In the eighteenth year of the reign of Josiah was this passover kept.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'chr35-speedily',
          html:
            'The meat is divided speedily to all the people — no one is left out, no one waits. The machinery of worship hums with precision. The priests sprinkle, the Levites flay, the singers sing, the porters keep the gates. Every person in the service chain does their work with such care that the whole enterprise becomes a kind of prayer in motion.',
        },
        {
          kind: 'commentary',
          id: 'chr35-seven-days',
          html:
            'The feast of unleavened bread lasts seven days — a full week of remembrance. The people do not race through the Passover as if it were a bureaucratic obligation. They dwell in it. They celebrate for seven days, their lives ordered around the memory of what God has done.',
        },
        {
          kind: 'commentary',
          id: 'chr35-greatest',
          html:
            'This is the historian&apos;s verdict: there was no Passover like it since Samuel. Not since the great prophet who anointed David, not since the days when Israel was young in faith and the kingdom was new. And not one of the kings who came before Josiah — neither David nor Solomon, neither Hezekiah nor any other — kept such a Passover. This is the apex. This is the moment when the kingdom reaches a kind of perfection.',
        },
        {
          kind: 'carry',
          html:
            'When we approach worship with care, when we remove barriers for others, when we order our lives around remembrance — God sees. The Passover is not diminished because Josiah is the one keeping it. It is magnified. Obedience to the text, fidelity to what God commanded, care for the people — these things matter. They are remembered.',
        },
        {
          kind: 'reflection',
          id: 'passover-kept',
          prompt:
            'What spiritual practices have you kept faithfully? What makes them real and meaningful? How do you invite others into that remembrance?',
        },
      ],
    },

    /* ─── 2 Chronicles 35:20–24 — Necho&apos;s Warning; Josiah&apos;s Refusal ─────── */
    {
      ref: '2 Chronicles 35:20–24',
      title: 'The King Who Would Not Listen',
      blocks: [
        {
          kind: 'scripture',
          chapter: 35,
          lines: [
            {
              number: 20,
              spans: [
                t('After all this, when Josiah had prepared the temple, '),
                hg('Necho king of Egypt came up to fight against Carchemish by Euphrates', 'chr35-necho'),
                t(': and Josiah went out against him.'),
              ],
            },
            plain(
              21,
              'But he sent ambassadors to him, saying, What have I to do with thee, thou king of Judah? I come not against thee this day, but against the house wherewith I have war: for God commanded me to make haste: forbear thee from meddling with God, who is with me, that he destroy thee not.'
            ),
            {
              number: 22,
              spans: [
                t('Nevertheless Josiah would not turn his face from him, but disguised himself, that he might fight with him, and '),
                hp('hearkened not unto the words of Necho from the mouth of God', 'chr35-refused'),
                t(', but came to fight in the valley of Megiddo.'),
              ],
            },
            plain(
              23,
              'And the archers shot at king Josiah; and the king said to his servants, Have me away; for I am sore wounded.'
            ),
            plain(
              24,
              'His servants therefore took him out of that chariot, and put him in the second chariot that he had; and they brought him to Jerusalem, and he died, and was buried in one of the sepulchres of his fathers. And all Judah and Jerusalem mourned for Josiah.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'chr35-necho',
          html:
            'At the height of his power, at the moment of his greatest triumph, Necho of Egypt marches north toward Carchemish — not against Judah, but against a distant enemy. Josiah has just kept the greatest Passover in generations. The kingdom is reformed. The temple is prepared. And now the king will go to war.',
        },
        {
          kind: 'commentary',
          id: 'necho-message',
          html:
            'Necho&apos;s message is extraordinary: "God commanded me to make haste. Forbear thee from meddling with God, who is with me." A pagan king, a foreigner, is claiming that God has sent him on this errand. By the standards of the ancient world, this is an audacious claim — but Necho makes it. And he warns Josiah to step aside, lest God destroy him.',
        },
        {
          kind: 'commentary',
          id: 'chr35-refused',
          html:
            'Josiah refuses. He does not merely decline — he disguises himself to fight. He will not be deterred. He has just spent months ordering the kingdom according to God&apos;s law, has kept the Passover without equal, has led his people in worship. He has heard God&apos;s word through the prophet Huldah. And now he refuses to hear God&apos;s word when it comes from a Gentile king — when it comes, in fact, in the form of a warning from the God he has just honored.',
        },
        {
          kind: 'hebrew',
          id: 'megiddo',
          title: 'Megiddo — The Valley of the Final Battle',
          script: 'מְגִדּוֹ',
          translit: '<strong>Megiddo</strong> · a strategic valley in northern Israel; site of many ancient battles',
          description:
            'Megiddo is a place of power and peril in Scripture. It was where Deborah and Barak defeated Sisera. It was where many kings of Israel fought. And it is the place where Josiah dies — shot by archers, taken from his chariot, brought to Jerusalem to breathe his last. In the Book of Revelation, this valley is called Armageddon, the place of the final gathering of nations (Rev. 16:16). Josiah dies in a place that becomes, in Scripture, a symbol of the end of the world.',
        },
        {
          kind: 'carry',
          html:
            'Josiah&apos;s death is not the consequence of disobedience to God&apos;s law — he has kept that law perfectly. It is the consequence of refusing to listen when God speaks through an unexpected voice. He has heard God clearly through the prophet. He has kept the Passover in a way that matches the ancient law. But he cannot hear God&apos;s warning when it comes from an enemy king. Pride, perhaps. Or the assumption that obedience in the past guarantees wisdom in the present. Listening is not a one-time act. It must be renewed in every moment.',
        },
        {
          kind: 'reflection',
          id: 'listen-unlikely',
          prompt:
            'When has God&apos;s truth come to you through an unlikely or unwelcome source? Did you listen? What made it hard to hear?',
        },
      ],
    },

    /* ─── 2 Chronicles 35:25–27 — Jeremiah&apos;s Lament ────────────────────── */
    {
      ref: '2 Chronicles 35:25–27',
      title: 'Jeremiah Laments the King',
      blocks: [
        {
          kind: 'scripture',
          chapter: 35,
          lines: [
            {
              number: 25,
              spans: [
                t('And '),
                hg('Jeremiah lamented for Josiah', 'chr35-jeremiah'),
                t(': and all the singing men and the singing women spake of Josiah in their lamentations to this day, and made them an ordinance in Israel: behold, they are written in the lamentations.'),
              ],
            },
            plain(
              26,
              'Now the rest of the acts of Josiah, and his goodness, according to that which was written in the law of the Lord,'
            ),
            plain(
              27,
              'And his deeds, first and last, behold, they are written in the book of the kings of Israel and Judah.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'chr35-jeremiah',
          html:
            'Jeremiah himself composes a lament for Josiah. This is the same prophet who will soon proclaim judgment upon Judah, who will be called to stand against the nation, who will weep as Jerusalem falls. But now he weeps for Josiah — not as an enemy fallen, but as a king taken in the midst of his good work.',
        },
        {
          kind: 'commentary',
          id: 'lamentation-ordinance',
          html:
            'Jeremiah&apos;s lament becomes so powerful that it is made "an ordinance in Israel." The singing men and women, generation after generation, sing it. It is written in the book of Lamentations — a place of honor, a voice that echoes through history. A prophet&apos;s grief becomes a song for a nation.',
        },
        {
          kind: 'commentary',
          id: 'goodness-written',
          html:
            'The historian makes sure we know: Josiah&apos;s goodness is recorded. His deeds, first and last, are written in the book of the kings. But the book of the kings is not where this chapter ends. It ends with a prophet&apos;s lament, a song that will be sung for centuries. What is written in the hearts of people through their grief is sometimes more powerful than what is written in the annals of kings.',
        },
        {
          kind: 'christ',
          id: 'chr35-christ',
          title: 'Christ Connection — The King Who Heard the Father',
          html:
            'Josiah keeps the greatest Passover since Samuel, yet dies refusing the word of God. Christ, by contrast, is the true Passover Lamb (1 Corinthians 5:7) who does not refuse the Father&apos;s word, but embraces it. "Not my will, but thine, be done" (Luke 22:42). When tempted in the wilderness, when facing the cross, when confronted by His enemies, Christ listens to the Father&apos;s voice — not to the voice of the enemy, not to the voice of self-preservation. He hears. He obeys. And His obedience becomes the redemption of all who follow Him. Where Josiah died at Megiddo refusing to listen, Christ goes to Calvary listening to the end — and in that listening, becomes the Lamb without blemish. Megiddo is a place of the world&apos;s final war; Calvary is the place of the world&apos;s final peace.',
        },
        {
          kind: 'carry',
          html:
            'We tend to honor the past. We remember what we have done well. We build our identities on our goodness. But listening is not about the past. It is about this moment, this conversation, this voice calling us now. Josiah&apos;s failure was not in his obedience to the law — it was in his refusal to attend to the God who stood before him in the form of a warning. The King we follow did not cease to listen. Even in the garden, even on the cross, He heard the Father.',
        },
        {
          kind: 'reflection',
          id: 'josiah-end',
          prompt:
            'Josiah is remembered as a good king, yet his story ends in death and mourning. What does it mean to be righteous without being wise? Where do you most struggle to listen?',
        },
      ],
    },
  ],
};
