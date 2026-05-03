import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Numbers 7 — Offerings of the Tribal Princes.
 *
 * The longest chapter in Numbers. After the tabernacle is erected and
 * anointed, the tribal princes bring offerings for its dedication. Twelve
 * princes, twelve days, twelve identical offerings. The chapter repeats the
 * entire offering twelve times in full—every word, every animal, every
 * measurement. Not a summary. Not a formula. Repetition. The Spirit of God
 * does not apologize for what comes next.
 *
 * Each prince gives: one silver charger (platter), one silver bowl, one
 * golden spoon of incense, one bull, one ram, one lamb for a burnt offering,
 * one kid for a sin offering, and two oxen, five rams, five he-goats, and
 * five lambs for a peace offering. Wealth does not vary the gift. Status
 * does not make the offering more acceptable. The poorest prince and the
 * richest bring the same thing. And God notices.
 *
 * The chapter ends with Moses entering the tabernacle and hearing God&apos;s
 * voice from between the cherubim. The offerings have opened the way for
 * conversation. Access secured through substitution—the theme of Leviticus
 * continued. And in the New Testament, Hebrews 6:10 names this: "God is not
 * unrighteous to forget your work and labour of love." Your faithfulness
 * matters. Even when it looks exactly like everyone else&apos;s.
 */
export const NUMBERS_7: RichChapterContent = {
  bookSlug: 'numbers',
  bookName: 'Numbers',
  chapter: 7,

  estimatedMinutes: { beginner: 11, intermediate: 14, deep: 16 },
  intros: [
    'Numbers 7 is a chapter many readers skip. It is nearly ninety verses of names and numbers—tribal princes bringing offerings to dedicate the tabernacle. The same offering, twelve times over, one tribe per day for twelve days. Each prince gives identical gifts: a silver charger and bowl, a golden spoon, oxen and rams and lambs and goats, bullocks and kids. The chapter does not summarize. It does not abbreviate. It repeats the entire offering, word for word, twelve times.',
    'Why? Because God wants you to know: I see each one. Each name matters. Each offering is distinct to me, even when it is identical to all the others. The wealthiest prince and the poorest bring the same things. And God takes notice of each one individually. The repetition is not a bug. It is the point. Faithfulness that looks ordinary to everyone else is extraordinary to God.',
    'The chapter ends with Moses entering the tabernacle, and God calling him from between the cherubim. The offerings have done their work. Access to God is open. The conversation begins. And every name that filled the previous verses—every prince who brought his offering in faith—hears in that moment that God had been listening the whole time.',
  ],

  sections: [
    /* ─── Numbers 7:1–9 — The Dedication Begins ────────────────────── */
    {
      ref: 'Numbers 7:1–9',
      title: 'The Dedication Begins',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 1,
              spans: [
                t('And it came to pass on the day that Moses had fully set up the tabernacle, and had '),
                hy('anointed it', 'anoint-consecrate'),
                t(', and sanctified it, and all the instruments thereof, both the altar and all the vessels thereof, and had '),
                hy('anointed them', 'anoint-consecrate'),
                t(', and sanctified them;'),
              ],
            },
            {
              number: 2,
              spans: [
                t('That the princes of Israel, heads of the house of their fathers, who were the princes of the tribes, and were over them that were numbered, offered:'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And they brought their offering before the LORD, six covered wagons, and twelve oxen; a wagon for two of the princes, and for each one an ox: and they brought them before the tabernacle.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And the LORD spake unto Moses, saying,'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Take it of them, that '),
                hp('they may be to do the service of the tabernacle of the congregation', 'service-access'),
                t(': and thou shalt give them unto the Levites, every man according to his service.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And Moses took the wagons and the oxen, and gave them unto the Levites.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Two wagons and four oxen he gave to the sons of Gershon, according to their service:'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And four wagons and eight oxen he gave to the sons of Merari, according unto their service, under the hand of Ithamar the son of Aaron the priest.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('But unto the sons of Kohath he gave none: because the service of the sanctuary belonging unto them was that they should bear upon their shoulders.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'anoint-consecrate',
          title: 'Mashach — &ldquo;anoint&rdquo;',
          script: 'מָשַׁח',
          translit: '<strong>mashach</strong> · to anoint; to consecrate, set apart, make holy',
          description:
            'The tabernacle is not merely a structure. It is made holy by anointing. It is set apart. It becomes the dwelling place of God. And because it is holy, access to it must be approached with care, with offering, with the knowledge that you are drawing near to the presence of the living God.',
        },
        {
          kind: 'commentary',
          id: 'service-access',
          html:
            'The princes first offer wagons and oxen for the Levites&apos; service. The infrastructure of worship is being provided. The tabernacle now stands anointed, and the people are preparing to serve in it. But before the individual offerings for dedication begin, this gift is given—a gift that enables others to do the work of the sanctuary. Service flows from the willingness of the people to provide not just themselves, but the tools others need[res:sefaria-altar-dedication][res:bible-odyssey-tabernacle-dedication].',
        },
        {
          kind: 'carry',
          html:
            'When you offer something to God—your time, your talents, your resources—you are not offering in a vacuum. Your gift enables others to serve, to draw near, to participate in worship. The faithfulness you bring has ripple effects you may never see. Someone else uses what you have given to enter the presence of God.',
        },
        {
          kind: 'reflection',
          id: 'reflect-dedication',
          prompt:
            'What are you offering right now, not for your own benefit, but so that others can draw near to God?',
        },
      ],
    },

    /* ─── Numbers 7:10–89 — The Princes&apos; Offerings (Repetition) ──────────── */
    {
      ref: 'Numbers 7:10–89',
      title: 'The Princes&apos; Offerings: Each Name Seen',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 10,
              spans: [
                t('And the princes offered for dedicating of the altar in the day that it was anointed, by the princes: and they offered their offering before the altar.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And the LORD said unto Moses, They shall offer their offering, each prince on his day, for the dedicating of the altar.'),
              ],
            },
            {
              number: 12,
              spans: [
                hy('And he that offered his offering the first day was Nahshon the son of Amminadab', 'first-prince'),
                t(', of the tribe of Judah:'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And his offering was one silver charger, the weight thereof was an hundred and thirty shekels, one silver bowl of seventy shekels, after the shekel of the sanctuary; both of them were full of fine flour mingled with oil for a meat offering:'),
              ],
            },
            {
              number: 14,
              spans: [
                t('One spoon of gold of ten shekels, full of incense:'),
              ],
            },
            {
              number: 15,
              spans: [
                t('One young bullock, one ram, one lamb of the first year, for a burnt offering:'),
              ],
            },
            {
              number: 16,
              spans: [
                t('One kid of the goats for a sin offering:'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And for a sacrifice of peace offerings, two oxen, five rams, five he goats, five lambs of the first year: this was the offering of Nahshon the son of Amminadab.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'first-prince',
          html:
            'Nahshon is the first prince named. Judah is the first tribe. This is not random. Judah, the lion tribe, the one from which the Messiah will come, leads the procession. And God names him. God knows his name. God will know the names of all twelve that follow.',
        },
        {
          kind: 'hebrew',
          id: 'qorban-offering',
          title: 'Korban — &ldquo;offering&rdquo;',
          script: 'קׇרְבָּן',
          translit: '<strong>korban</strong> · an offering; a gift that brings the giver near',
          description:
            'The same word from Leviticus. The offering is the mechanism by which the worshiper draws near to God. Not money, not status, not military might. An offering. An act of faith. A willingness to approach.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 18,
              spans: [
                t('On the second day Nethaneel the son of Zuar, prince of Issachar, did offer:'),
              ],
            },
            {
              number: 19,
              spans: [
                t('He offered for his offering one silver charger, the weight whereof was an hundred and thirty shekels, one silver bowl of seventy shekels, after the shekel of the sanctuary; both of them full of fine flour mingled with oil for a meat offering:'),
              ],
            },
            {
              number: 20,
              spans: [
                t('One spoon of gold of ten shekels, full of incense:'),
              ],
            },
            {
              number: 21,
              spans: [
                t('One young bullock, one ram, one lamb of the first year, for a burnt offering:'),
              ],
            },
            {
              number: 22,
              spans: [
                t('One kid of the goats for a sin offering:'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And for a sacrifice of peace offerings, two oxen, five rams, five he goats, five lambs of the first year: this was the offering of Nethaneel the son of Zuar.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'repetition-meaning',
          html:
            'Notice what happens: the entire offering is repeated. Every measurement. Every animal. Every detail. Nahshon brought a silver charger of 130 shekels. So does Nethaneel. A silver bowl of 70 shekels. So does Nethaneel. A golden spoon, a bullock, a ram, a lamb, a kid, two oxen, five rams, five he-goats, five lambs. The same. The same. The same. For twelve days. Twelve princes. Twelve times the offering is repeated in full. This is not a summary. This is God saying: I want you to understand. I see each one. Each name. Each offering. Each faith. Even when it is identical to all the others.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 24,
              spans: [
                t('On the third day Eliab the son of Helon, prince of Zebulun, did offer:'),
              ],
            },
            {
              number: 25,
              spans: [
                t('His offering was one silver charger, the weight whereof was an hundred and thirty shekels, one silver bowl of seventy shekels, after the shekel of the sanctuary; both of them full of fine flour mingled with oil for a meat offering:'),
              ],
            },
            {
              number: 26,
              spans: [
                t('One golden spoon of ten shekels, full of incense:'),
              ],
            },
            {
              number: 27,
              spans: [
                t('One young bullock, one ram, one lamb of the first year, for a burnt offering:'),
              ],
            },
            {
              number: 28,
              spans: [
                t('One kid of the goats for a sin offering:'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And for a sacrifice of peace offerings, two oxen, five rams, five he goats, five lambs of the first year: this was the offering of Eliab the son of Helon.'),
              ],
            },
          ],
        },
        {
          kind: 'divider',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 30,
              spans: [
                t('On the fourth day Elizur the son of Shedeur, prince of Reuben, did offer:'),
              ],
            },
            {
              number: 31,
              spans: [
                t('His offering was one silver charger of the weight of an hundred and thirty shekels, one silver bowl of seventy shekels, after the shekel of the sanctuary; both of them full of fine flour mingled with oil for a meat offering:'),
              ],
            },
            {
              number: 32,
              spans: [
                t('One golden spoon of ten shekels, full of incense:'),
              ],
            },
            {
              number: 33,
              spans: [
                t('One young bullock, one ram, one lamb of the first year, for a burnt offering:'),
              ],
            },
            {
              number: 34,
              spans: [
                t('One kid of the goats for a sin offering:'),
              ],
            },
            {
              number: 35,
              spans: [
                t('And for a sacrifice of peace offerings, two oxen, five rams, five he goats, five lambs of the first year: this was the offering of Elizur the son of Shedeur.'),
              ],
            },
          ],
        },
        {
          kind: 'divider',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 36,
              spans: [
                t('On the fifth day Shelumiel the son of Zurishaddai, prince of Simeon, did offer:'),
              ],
            },
            {
              number: 37,
              spans: [
                t('His offering was one silver charger, the weight whereof was an hundred and thirty shekels, one silver bowl of seventy shekels, after the shekel of the sanctuary; both of them full of fine flour mingled with oil for a meat offering:'),
              ],
            },
            {
              number: 38,
              spans: [
                t('One spoon of gold of ten shekels, full of incense:'),
              ],
            },
            {
              number: 39,
              spans: [
                t('One young bullock, one ram, one lamb of the first year, for a burnt offering:'),
              ],
            },
            {
              number: 40,
              spans: [
                t('One kid of the goats for a sin offering:'),
              ],
            },
            {
              number: 41,
              spans: [
                t('And for a sacrifice of peace offerings, two oxen, five rams, five he goats, five lambs of the first year: this was the offering of Shelumiel the son of Zurishaddai.'),
              ],
            },
          ],
        },
        {
          kind: 'divider',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 42,
              spans: [
                t('On the sixth day Eliasaph the son of Deuel, prince of Gad, did offer:'),
              ],
            },
            {
              number: 43,
              spans: [
                t('His offering was one silver charger of the weight of an hundred and thirty shekels, a silver bowl of seventy shekels, after the shekel of the sanctuary; both of them full of fine flour mingled with oil for a meat offering:'),
              ],
            },
            {
              number: 44,
              spans: [
                t('One golden spoon of ten shekels, full of incense:'),
              ],
            },
            {
              number: 45,
              spans: [
                t('One young bullock, one ram, one lamb of the first year, for a burnt offering:'),
              ],
            },
            {
              number: 46,
              spans: [
                t('One kid of the goats for a sin offering:'),
              ],
            },
            {
              number: 47,
              spans: [
                t('And for a sacrifice of peace offerings, two oxen, five rams, five he goats, five lambs of the first year: this was the offering of Eliasaph the son of Deuel.'),
              ],
            },
          ],
        },
        {
          kind: 'divider',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 48,
              spans: [
                t('On the seventh day Elishama the son of Ammihud, prince of Ephraim, did offer:'),
              ],
            },
            {
              number: 49,
              spans: [
                t('His offering was one silver charger, the weight whereof was an hundred and thirty shekels, one silver bowl of seventy shekels, after the shekel of the sanctuary; both of them full of fine flour mingled with oil for a meat offering:'),
              ],
            },
            {
              number: 50,
              spans: [
                t('One golden spoon of ten shekels, full of incense:'),
              ],
            },
            {
              number: 51,
              spans: [
                t('One young bullock, one ram, one lamb of the first year, for a burnt offering:'),
              ],
            },
            {
              number: 52,
              spans: [
                t('One kid of the goats for a sin offering:'),
              ],
            },
            {
              number: 53,
              spans: [
                t('And for a sacrifice of peace offerings, two oxen, five rams, five he goats, five lambs of the first year: this was the offering of Elishama the son of Ammihud.'),
              ],
            },
          ],
        },
        {
          kind: 'divider',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 54,
              spans: [
                t('On the eighth day offered Gamaliel the son of Pedahzur, prince of Manasseh:'),
              ],
            },
            {
              number: 55,
              spans: [
                t('His offering was one silver charger of the weight of an hundred and thirty shekels, one silver bowl of seventy shekels, after the shekel of the sanctuary; both of them full of fine flour mingled with oil for a meat offering:'),
              ],
            },
            {
              number: 56,
              spans: [
                t('One golden spoon of ten shekels, full of incense:'),
              ],
            },
            {
              number: 57,
              spans: [
                t('One young bullock, one ram, one lamb of the first year, for a burnt offering:'),
              ],
            },
            {
              number: 58,
              spans: [
                t('One kid of the goats for a sin offering:'),
              ],
            },
            {
              number: 59,
              spans: [
                t('And for a sacrifice of peace offerings, two oxen, five rams, five he goats, five lambs of the first year: this was the offering of Gamaliel the son of Pedahzur.'),
              ],
            },
          ],
        },
        {
          kind: 'divider',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 60,
              spans: [
                t('On the ninth day Abidan the son of Gideoni, prince of Benjamin, did offer:'),
              ],
            },
            {
              number: 61,
              spans: [
                t('His offering was one silver charger, the weight whereof was an hundred and thirty shekels, one silver bowl of seventy shekels, after the shekel of the sanctuary; both of them full of fine flour mingled with oil for a meat offering:'),
              ],
            },
            {
              number: 62,
              spans: [
                t('One golden spoon of ten shekels, full of incense:'),
              ],
            },
            {
              number: 63,
              spans: [
                t('One young bullock, one ram, one lamb of the first year, for a burnt offering:'),
              ],
            },
            {
              number: 64,
              spans: [
                t('One kid of the goats for a sin offering:'),
              ],
            },
            {
              number: 65,
              spans: [
                t('And for a sacrifice of peace offerings, two oxen, five rams, five he goats, five lambs of the first year: this was the offering of Abidan the son of Gideoni.'),
              ],
            },
          ],
        },
        {
          kind: 'divider',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 66,
              spans: [
                t('On the tenth day Ahiezer the son of Ammishaddai, prince of Dan, did offer:'),
              ],
            },
            {
              number: 67,
              spans: [
                t('His offering was one silver charger, the weight whereof was an hundred and thirty shekels, one silver bowl of seventy shekels, after the shekel of the sanctuary; both of them full of fine flour mingled with oil for a meat offering:'),
              ],
            },
            {
              number: 68,
              spans: [
                t('One golden spoon of ten shekels, full of incense:'),
              ],
            },
            {
              number: 69,
              spans: [
                t('One young bullock, one ram, one lamb of the first year, for a burnt offering:'),
              ],
            },
            {
              number: 70,
              spans: [
                t('One kid of the goats for a sin offering:'),
              ],
            },
            {
              number: 71,
              spans: [
                t('And for a sacrifice of peace offerings, two oxen, five rams, five he goats, five lambs of the first year: this was the offering of Ahiezer the son of Ammishaddai.'),
              ],
            },
          ],
        },
        {
          kind: 'divider',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 72,
              spans: [
                t('On the eleventh day Pagiel the son of Ocran, prince of Asher, did offer:'),
              ],
            },
            {
              number: 73,
              spans: [
                t('His offering was one silver charger, the weight whereof was an hundred and thirty shekels, one silver bowl of seventy shekels, after the shekel of the sanctuary; both of them full of fine flour mingled with oil for a meat offering:'),
              ],
            },
            {
              number: 74,
              spans: [
                t('One golden spoon of ten shekels, full of incense:'),
              ],
            },
            {
              number: 75,
              spans: [
                t('One young bullock, one ram, one lamb of the first year, for a burnt offering:'),
              ],
            },
            {
              number: 76,
              spans: [
                t('One kid of the goats for a sin offering:'),
              ],
            },
            {
              number: 77,
              spans: [
                t('And for a sacrifice of peace offerings, two oxen, five rams, five he goats, five lambs of the first year: this was the offering of Pagiel the son of Ocran.'),
              ],
            },
          ],
        },
        {
          kind: 'divider',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 78,
              spans: [
                t('On the twelfth day Ahira the son of Enan, prince of Naphtali, did offer:'),
              ],
            },
            {
              number: 79,
              spans: [
                t('His offering was one silver charger, the weight whereof was an hundred and thirty shekels, one silver bowl of seventy shekels, after the shekel of the sanctuary; both of them full of fine flour mingled with oil for a meat offering:'),
              ],
            },
            {
              number: 80,
              spans: [
                t('One golden spoon of ten shekels, full of incense:'),
              ],
            },
            {
              number: 81,
              spans: [
                t('One young bullock, one ram, one lamb of the first year, for a burnt offering:'),
              ],
            },
            {
              number: 82,
              spans: [
                t('One kid of the goats for a sin offering:'),
              ],
            },
            {
              number: 83,
              spans: [
                t('And for a sacrifice of peace offerings, two oxen, five rams, five he goats, five lambs of the first year: this was the offering of Ahira the son of Enan.'),
              ],
            },
          ],
        },
        {
          kind: 'divider',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 84,
              spans: [
                t('This was the dedication of the altar, in the day when it was anointed, by the princes of Israel: twelve chargers of silver, twelve silver bowls, and twelve spoons of gold:'),
              ],
            },
            {
              number: 85,
              spans: [
                t('Each charger of silver weighing an hundred and thirty shekels, each bowl seventy: all the silver vessels weighed two thousand and four hundred shekels, after the shekel of the sanctuary:'),
              ],
            },
            {
              number: 86,
              spans: [
                t('The golden spoons were twelve, full of incense, weighing ten shekels apiece, after the shekel of the sanctuary: all the gold of the spoons was an hundred and twenty shekels:'),
              ],
            },
            {
              number: 87,
              spans: [
                t('All the oxen for the burnt offering were twelve bullocks, the rams twelve, the lambs of the first year twelve, with their meat offering: and the kids of the goats for sin offering twelve.'),
              ],
            },
            {
              number: 88,
              spans: [
                t('And all the oxen for the sacrifice of the peace offerings were twenty and four bullocks, the rams sixty, the he goats sixty, and the lambs of the first year sixty. This was the dedication of the altar, after that it was anointed.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'the-tally',
          html:
            'The tally is given. Twelve chargers, twelve bowls, twelve spoons. Twelve bulls, twelve rams, twelve lambs. Everything comes in twelves—one for each tribe, one for each prince, one for each name that was spoken aloud. The repetition is complete. And it has been heard.',
        },
        {
          kind: 'christ',
          id: 'christ-faithfulness',
          title: 'Christ Connection — Each Name Known',
          html:
            'Hebrews 6:10 says: "God is not unrighteous to forget your work and labour of love." Christ himself says in Revelation 2:2, "I know thy works." He is not overwhelmed by multitude. He is not bored by repetition. He knows the name of every person who has ever brought an offering in faith. He remembers. He notices. And in His presence, there is no obscurity—no faithfulness so small that it goes unseen, no name so common that it gets lost in the crowd.',
        },
        {
          kind: 'carry',
          html:
            'You live in a world that measures significance by size. The biggest gift. The most visible name. The work that gets applause. But the truth in this chapter is different. God is watching the faithfulness that looks ordinary to everyone else. The ordinary showing up. The ordinary offering. The ordinary name. It is extraordinary to Him. Because He sees you. Individually. By name.',
        },
        {
          kind: 'reflection',
          id: 'reflect-seen',
          prompt:
            'What offering of faithfulness are you bringing that feels ordinary to everyone else but matters deeply to you? Does God noticing it change anything?',
        },
      ],
    },

    /* ─── Numbers 7:89 — The Voice from Between the Cherubim ────────── */
    {
      ref: 'Numbers 7:89',
      title: 'The Voice Opens',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 89,
              spans: [
                t('And when Moses was gone into the tabernacle of the congregation to speak with him, then he heard the voice of one speaking unto him from off the '),
                hy('mercy seat that was upon the ark of the testimony', 'mercy-seat'),
                t(', from between the two cherubims: and '),
                hp('he spake unto him', 'god-speaks'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'mercy-seat',
          title: 'Kapporet — &ldquo;mercy seat&rdquo;',
          script: 'כַּפֹּרֶת',
          translit: '<strong>kapporet</strong> · the mercy seat, the cover of the ark; the place of atonement',
          description:
            'Kapporet literally means "the place of atonement." It is the golden lid on top of the ark of the covenant. And from that place, between the two golden cherubim, God speaks. The offerings have created access. The path is open. Conversation can begin.',
        },
        {
          kind: 'commentary',
          id: 'god-speaks',
          html:
            'Moses enters the tabernacle[res:sefaria-mercy-seat]. The offerings have been made. The altar is dedicated. The names have been spoken. And now—God speaks. Not to rebuke. Not to demand. To converse. To speak to Moses "face to face," as it will later be said, "as a man speaketh unto his friend." The twelve days of offerings, the repetition, the names—all of it has opened the way for this. This is what faithfulness does. It opens conversation. It creates access. It makes room for the voice of God to be heard.',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Numbers 7',
    quote:
      'The tribal princes brought twelve identical offerings for the dedication of the altar. God noticed each one individually, remembering every name, every offering, every act of faith—no matter how ordinary it appeared to others.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Numbers 7 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-altar-dedication',
      kind: 'study',
      source: 'Sefaria',
      label: 'Numbers 7 — Dedication of the Altar',
      url: 'https://www.sefaria.org/Numbers.7',
      description: 'Analysis of the twelve days of tribal offerings for the tabernacle altar dedication, with medieval commentary on each tribe&apos;s identical yet individual gifts.',
    },
    {
      id: 'bible-odyssey-tabernacle-dedication',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Tabernacle Dedication Ritual',
      url: 'https://www.bibleodyssey.org/dictionary/tabernacle/',
      description: 'Overview of the tabernacle consecration ceremony, the role of tribal leaders, and the significance of the altar&apos;s anointing for Israel&apos;s worship.',
    },
    {
      id: 'sefaria-mercy-seat',
      kind: 'study',
      source: 'Sefaria',
      label: 'The Mercy Seat and God&apos;s Presence',
      url: 'https://www.sefaria.org/Exodus.25.17',
      description: 'Explanation of the kapporet (mercy seat) atop the ark of the covenant and its role as the place where God speaks to Moses and Israel.',
    },
  ],

  hasHebrew: true,
};
