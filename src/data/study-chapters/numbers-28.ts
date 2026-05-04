import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Numbers 28 — The Continual Burnt Offering and the Feasts.
 *
 * God speaks to Moses about the law of offerings: the continual (tamid)
 * burnt offering, every day, without ceasing. Morning and evening, lamb upon
 * lamb, forever. Then the calendar: Sabbath offerings double. New moon. The
 * Feast of Unleavened Bread. Pentecost. The Feast of Trumpets. The Day of
 * Atonement. The Feast of Tabernacles. Every day, every occasion, the exact
 * animals, exact grain, exact wine. Precision. Rhythm. Structure.
 *
 * The chapter is thirty-one verses of detail—the kind of detail that bores
 * a reader rushing through Scripture. But it is not boring to God. Each
 * offering is a conversation. Each day&apos;s sacrifice is a word spoken
 * between heaven and earth. The tamid does not end the year; it starts again
 * tomorrow. The rhythm of worship is relentless, ordinary, expected. And in
 * the New Testament, Hebrews 10:11–12 makes the connection: "Every priest
 * standeth daily ministering and offering oftentimes the same sacrifices,
 * which can never take away sins: But this man, after he had offered one
 * sacrifice for sins for ever, sat down on the right hand of God." Jesus&apos;s
 * once-for-all offering ended the tamid. The endless rhythm found its rest.
 */
export const NUMBERS_28: RichChapterContent = {
  bookSlug: 'numbers',
  bookName: 'Numbers',
  chapter: 28,

  estimatedMinutes: { beginner: 7, intermediate: 9, deep: 11 },
  topicTags: ['provision', 'protection', 'leadership', 'doubt'],
  opener: {
    topical: true,
    caption: 'Numbers 28',
  },
  intros: [
    'Numbers 28 opens with God commanding Moses: "Command the children of Israel, and say unto them, My offering, and my bread for my sacrifices made by fire, for a sweet savour unto me, shall ye observe to offer unto me in their due season." The language is intimate. These are God&apos;s offerings. God&apos;s bread. God has set a table. Israel is commanded to bring to it.',
    'What follows is the schedule of public sacrifice. The daily lamb. The Sabbath doubling. The new moon. The feasts—Passover, Unleavened Bread, Pentecost, Trumpets, Atonement, Tabernacles. Each has an exact count: bulls, rams, lambs, grain, wine. The precision is not bureaucratic. It is the precision of a conversation partner who has said, "Here is exactly what I expect. Here is exactly how you will meet me." And the pattern is not a burden. It is a rhythm.',
    'The chapter is the mirror image of Leviticus: not the individual laying hands on the sacrifice, but the nation, gathered, offering together. Not once, but constantly. The tamid—the continual burnt offering—happens every single day. It never ends. Tomorrow the lamb will be offered again. The Sabbath will come. The new moon will come. The feasts will rotate. The rhythm continues. And the rhythm is a prayer.',
  ],

  sections: [
    /* ─── Numbers 28:1–8 — The Continual Burnt Offering ────────────────── */
    {
      ref: 'Numbers 28:1–8',
      title: 'The Daily Continual Offering',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 1,
              spans: [
                t('And the LORD spake unto Moses, saying,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Command the children of Israel, and say unto them, '),
                hp('My offering, and my bread for my sacrifices made by fire, for a sweet savour unto me, shall ye observe to offer unto me in their due season', 'my-offering'),
                t(':'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And thou shalt say unto them, This is the offering made by fire which ye shall offer unto the LORD; two lambs of the first year without spot day by day, for a continual burnt offering.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('The one lamb shalt thou offer in the morning, and the other lamb shalt thou offer at even;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'numbers-28-78mid-1',
          html:
            'Daily offerings are commanded, then Sabbath offerings, then monthly feasts—the whole sacred calendar unfolds. Every moment of time is marked as holy.',
        },
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 5,
              spans: [
                t('And a tenth part of an ephah of fine flour for a meat offering, mingled with the fourth part of an hin of beaten oil.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('It is a continual burnt offering, which was ordained in mount Sinai for a sweet savour, a sacrifice made by fire unto the LORD.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And the drink offering thereof shall be the fourth part of a hin for the one lamb: in the holy place shalt thou cause the strong wine to be poured unto the LORD for a drink offering.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And the other lamb shalt thou offer at even: as the meat offering of the morning, and as the drink offering thereof, thou shalt offer it, a sacrifice made by fire, of a sweet savour unto the LORD.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'my-offering',
          html:
            'God calls the offering &ldquo;my offering.&rdquo; God&apos;s bread. God&apos;s table. The people are invited to participate in God&apos;s meal, not to bargain with Him. The continual burnt offering is ordained—commanded—set by God on Mount Sinai itself. It is not a human invention. It is a divine pattern.',
        },
        {
          kind: 'hebrew',
          id: 'tamid-continual',
          title: 'Tamid — &ldquo;continual&rdquo;',
          script: 'תָּמִיד',
          translit: '<strong>tamid</strong> · continual, perpetual, always, constantly',
          description:
            'The tamid is not occasional. It is not brought on special occasions only. It is every single day. Morning and evening. Lamb upon lamb. The root suggests that which does not cease, which goes on and on. The worship of Israel is to be a rhythm without end—until, in the New Testament, that perpetual rhythm finds its completion in Christ&apos;s once-for-all offering.',
        },
        {
          kind: 'carry',
          html:
            'The rhythm of worship is relentless by design. You do not wait for inspiration or feeling. Tomorrow morning, the lamb is offered. Tomorrow evening, the lamb is offered. In Christ, you have the comfort of rhythm without the weight of endless repetition. Your worship need not be perfect or flawless—the offering is perfect. Your faithfulness can be ordinary. The pattern holds.',
        },
        {
          kind: 'reflection',
          id: 'reflect-continual',
          prompt: 'What would it mean to approach each day with the expectation that God has set a time to meet you—that this day itself is part of an ordered rhythm?',
        },
      ],
    },

    /* ─── Numbers 28:9–10 — The Sabbath Offering ──────────────────────── */
    {
      ref: 'Numbers 28:9–10',
      title: 'The Sabbath Double Offering',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 9,
              spans: [
                t('And on the '),
                hg('sabbath day two lambs of the first year without spot, and two tenth deals of fine flour for a meat offering, mingled with oil, and the drink offering thereof', 'sabbath-double'),
                t(':'),
              ],
            },
            {
              number: 10,
              spans: [
                t('This is the burnt offering of every sabbath, beside the continual burnt offering, and his drink offering.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'sabbath-double',
          html:
            'On the seventh day, the offering is not halved or diminished. It is doubled. Two lambs instead of one. The Sabbath is not a day of less worship. It is a day of intensified worship. God rests on the seventh day, and Israel&apos;s offering rises to meet that rest. Even the rhythm of weekly work and rest finds its reflection in the rhythm of sacrifice.',
        },
        {
          kind: 'carry',
          html:
            'The Sabbath doubles the conversation between God and His people. The pace of worship increases, not decreases. In your week, the Sabbath is not a day of spiritual laziness. It is a day when your offering—your time, your attention, your presence—draws nearer. Rest and worship are intertwined.',
        },
      ],
    },

    /* ─── Numbers 28:11–15 — The New Moon Offering ────────────────────── */
    {
      ref: 'Numbers 28:11–15',
      title: 'The New Moon Offering',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 11,
              spans: [
                t('And in the beginnings of your months ye shall offer a burnt offering unto the LORD; two young bullocks, and one ram, seven lambs of the first year without spot;'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And three tenth deals of fine flour for a meat offering, mingled with oil, for one bullock; and two tenth deals of fine flour for a meat offering, mingled with oil, for one ram;'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And a several tenth deal of fine flour mingled with oil for a meat offering unto one lamb; for a burnt offering of a sweet savour, a sacrifice made by fire unto the LORD.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And their drink offerings shall be half an hin of wine unto a bullock, and the third part of an hin unto a ram, and a fourth part of an hin unto a lamb: this is the burnt offering of every month throughout the months of the year.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And one kid of the goats for a sin offering unto the LORD shall be offered, beside the continual burnt offering, and his drink offering.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'new-moon-intro',
          html:
            'With each new moon, the offering escalates. No longer two lambs daily, but two bullocks, one ram, seven lambs. The new moon marks a new month, a new cycle. The rhythm accelerates. The nation brings more—not because of guilt, but because each new beginning is marked in heaven. Each month opens with an offering.',
        },
        {
          kind: 'carry',
          html:
            'Every month brings a new beginning. Do you mark those beginnings with God? Not in guilt or penance, but in acknowledgment: &ldquo;A new cycle has opened. I am offering my renewed intention.&rdquo; The new moon is not a burden. It is an invitation to reset.',
        },
      ],
    },

    /* ─── Numbers 28:16–25 — Passover and Unleavened Bread ────────────── */
    {
      ref: 'Numbers 28:16–25',
      title: 'Passover and the Feast of Unleavened Bread',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 16,
              spans: [
                t('And in the fourteenth day of the first month is the passover of the LORD.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And in the fifteenth day of this month is the feast: seven days shall unleavened bread be eaten.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('In the first day shall be an holy convocation; ye shall do no manner of servile work therein:'),
              ],
            },
            {
              number: 19,
              spans: [
                t('But ye shall offer a sacrifice made by fire for a burnt offering unto the LORD; two young bullocks, and one ram, and seven lambs of the first year: they shall be unto you without blemish:'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And their meat offering shall be of fine flour mingled with oil: three tenth deals shall ye offer for a bullock, and two tenth deals for a ram;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'num28-sabbath-newmoon',
          html:
            'The daily offering doubles on the Sabbath; the new-moon offering adds bulls and goats. Time itself is consecrated — every day, every week, every month bringing its own gift.',
        },
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 21,
              spans: [
                t('A several tenth deal shalt thou offer for each of the seven lambs;'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And one goat for a sin offering, to make an atonement for you.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('Ye shall offer these beside the burnt offering in the morning, which is for a continual burnt offering.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('After this manner ye shall offer the meat of the sacrifice every day of the seven days, for a sweet savour unto the LORD: it shall be offered beside the continual burnt offering, and his drink offering.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And on the seventh day ye shall have an holy convocation; ye shall do no servile work.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'passover-feast',
          html:
            'Passover and Unleavened Bread are the feasts of remembrance and renewal. Israel celebrates the deliverance from Egypt. But the offering does not diminish. Two bullocks, one ram, seven lambs—for each day of the feast. The remembrance of what God did is not separate from the offering to God. They are one action. Memory and worship are the same breath.',
        },
        {
          kind: 'carry',
          html:
            'When you remember what God has done for you—deliverance, protection, redemption—let that remembrance become an offering. Your gratitude is not a feeling to be kept private. It is meant to rise like the aroma of burning incense. Tell God. Thank Him. Make your memory a conversation.',
        },
      ],
    },

    /* ─── Numbers 28:26–31 — Pentecost and the Feasts ──────────────────── */
    {
      ref: 'Numbers 28:26–31',
      title: 'Pentecost and the Feasts of the Year',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 26,
              spans: [
                t('Also in the day of the firstfruits, when ye bring a new meat offering unto the LORD, after your weeks be out, ye shall have an holy convocation; ye shall do no servile work:'),
              ],
            },
            {
              number: 27,
              spans: [
                t('But ye shall offer the burnt offering for a sweet savour unto the LORD; two young bullocks, one ram, seven lambs of the first year;'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And their meat offering of fine flour mingled with oil, three tenth deals unto one bullock, two tenth deals unto one ram,'),
              ],
            },
            {
              number: 29,
              spans: [
                t('A several tenth deal unto each of the seven lambs;'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And one kid of the goats, to make an atonement for you.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('Ye shall offer them beside the continual burnt offering, and his meat offering, (they shall be unto you without blemish) and their drink offerings.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'firstfruits-pentecost',
          html:
            'The Feast of Firstfruits (Pentecost) marks the harvest. Israel brings the first of what God has given. But again, the offering is constant: two bullocks, one ram, seven lambs. Whether the day is ordinary or extraordinary, the conversation continues. God does not weary of meeting His people. God does not accept less when the occasion is great. The rhythm holds. The offering stands.',
        },
        {
          kind: 'reflection',
          id: 'reflect-rhythm',
          prompt: 'In the calendar year, when do you feel most tempted to skip the rhythm of meeting with God? What would it take to keep the offering steady even then?',
        },
        {
          kind: 'christ',
          id: 'christ-tamid',
          title: 'Christ Connection — The One Sacrifice Ends the Endless',
          html:
            'Hebrews 10:11–12 makes the connection explicit: &ldquo;Every priest standeth daily ministering and offering oftentimes the same sacrifices, which can never take away sins: But this man, after he had offered one sacrifice for sins for ever, sat down on the right hand of God.&rdquo; The tamid was meant to be endless. Every day, forever. But Jesus ended it. His one offering—perfect, complete, unrepeatable—made the endless rhythm obsolete. The conversation that had been offered daily in perpetuity found its final word in Him. We do not bring lambs anymore. We bring our hearts into the rest He has made.',
        },
        {
          kind: 'carry',
          html:
            'You are not exhausted by the rhythm of your own offering. Christ has already brought the perfect one. Your worship now is not payment or penance. It is participation in the offering already made. You join your grateful heart to His grateful sacrifice, already seated at God&apos;s right hand. The rhythm is no longer burden. It is conversation with the God who has already answered.',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Every priest standeth daily ministering and offering oftentimes the same sacrifices, which can never take away sins: But this man, after he had offered one sacrifice for sins for ever, sat down on the right hand of God.',
    snippet: 'Hebrews 10:11–12',
    ref: 'Numbers 28; Hebrews 10:11–12',
    label: 'Share Numbers 28',
  },

  resources: [
    {
      id: 'sefaria-numbers-28',
      kind: 'study',
      source: 'Sefaria',
      label: 'Numbers 28',
      url: 'https://www.sefaria.org/Numbers.28',
      description: 'Laws of the continual burnt offering and the seasonal feast offerings throughout the year.',
    },
    {
      id: 'sefaria-feasts-calendar',
      kind: 'study',
      source: 'Sefaria',
      label: 'Festivals and Feasts (Num 28–29)',
      url: 'https://www.sefaria.org/Numbers.28-29',
      description: 'Complete calendar of Jewish festivals with prescribed offerings for each occasion.',
    },
    {
      id: 'jewish-festivals-timeline',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Jewish Festivals',
      url: 'https://www.bibleodyssey.org/dictionary/festival/',
      description: 'SBL overview of the three pilgrimage feasts and the religious calendar in biblical Israel.',
    },
  ],

  hasHebrew: true,
};
