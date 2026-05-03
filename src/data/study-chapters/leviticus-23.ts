import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Leviticus 23 — The Seven Appointed Feasts (Moadim)
 *
 * The festal calendar of Israel: Sabbath, Passover, Unleavened Bread,
 * Firstfruits, Pentecost (Weeks), Trumpets, Day of Atonement, Tabernacles.
 *
 * Four spring feasts fulfilled in Christ&apos;s first coming; three fall feasts
 * pointing to His second coming. The rhythm of Israel&apos;s year is the rhythm
 * of redemption.
 */
export const LEVITICUS_23: RichChapterContent = {
  bookSlug: 'leviticus',
  bookName: 'Leviticus',
  chapter: 23,

  estimatedMinutes: { beginner: 14, intermediate: 18, deep: 23 },
  intros: [
    'Leviticus 23 opens with a single word: moadim — appointed times, feasts. Not suggestions, not optional celebrations, but the rhythm God built into His people&apos;s year. Seven sacred seasons frame the calendar of Israel, each one a rehearsal of redemption. Four of them cluster in spring (Passover, Unleavened Bread, Firstfruits, Pentecost), walking through death and resurrection and the gift of the Spirit. Three arrive in fall (Trumpets, Atonement, Tabernacles), painting a picture of return, judgment, and God&apos;s dwelling with His people.',
    'For the Israelite, every season was theology. You couldn&apos;t live through the year without walking through the story of deliverance over and over again. And for the reader on this side of the cross, each feast is a prophecy wearing a calendar date. Every spring celebration was already whispering about a day when God&apos;s Son would become the Passover Lamb, the unleavened bread, the firstfruits of resurrection, the Pentecost gift to the nations. The feasts are not merely history; they are the architecture of God&apos;s plan.',
    'This is a chapter of weight. It is thin on narrative and thick with revelation. God is not telling a story here — He is choreographing a dance, and every step matters.',
  ],

  sections: [
    /* ─── Leviticus 23:1–3 — The Sabbath ──────────────────────────────── */
    {
      ref: 'Leviticus 23:1–3',
      title: 'The Sabbath: Hallowed Rest',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 1,
              spans: [
                t('And the Lord spake unto Moses, saying, '),
                hg('Speak unto the children of Israel', 'lev23-appointed'),
                t(', and say unto them, Concerning the '),
                hy('feasts of the Lord', 'hebrew-moed'),
                t(', which ye shall proclaim to be holy convocations, even these are my feasts.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Six days shall work be done: but the seventh day is the '),
                hy('sabbath of rest', 'c-sabbath-rest'),
                t(', a '),
                hp('holy convocation', 'c-holy-convocation'),
                t('; ye shall do no work therein: it is the sabbath of the Lord in all your dwellings.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('These are the feasts of the Lord, even '),
                t('holy convocations'),
                t(', which ye shall proclaim in their seasons.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'lev23-appointed',
          html:
            'God &ldquo;spake unto Moses&rdquo; — the feasts are not Israel&apos;s invention, but God&apos;s design[res:sefaria-leviticus-23]. Every feast that follows is His word, His calendar, His intent for His people. Before anything else, God makes clear: these times belong to Him.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-moed',
          title: 'Moed — &ldquo;appointed time, feast&rdquo;',
          script: 'מוֹעֵד',
          translit: '<strong>moed</strong> · a meeting place, a fixed time',
          description:
            'Moed carries both meanings: a time and a place where people meet. God appoints the time; His people gather in that time. Every feast is an appointment between God and His people.',
        },
        {
          kind: 'commentary',
          id: 'c-sabbath-rest',
          html:
            'The Sabbath comes first in the list of feasts, though it arrives every week, not once a year. It is the foundation of all feasts — a day that rehearses the rest God promised. Even before Passover, God&apos;s people live in the rhythm of rest.',
        },
        {
          kind: 'christ',
          id: 'c-holy-convocation',
          title: 'Christ Connection — The True Sabbath Rest',
          html:
            'The Sabbath points to a rest that only Christ can give. &ldquo;There remaineth therefore a rest to the people of God: for he that is entered into his rest, he also hath ceased from his own works, as God did from his&rdquo; (Heb. 4:9, 10). Jesus says, &ldquo;Come unto me, all ye that labour and are heavy laden, and I will give you rest&rdquo; (Matt. 11:28). In Him, every day becomes a Sabbath — a ceasing from works, a entering into His finished work of salvation.',
        },
        {
          kind: 'carry',
          html:
            'The Sabbath is the only feast that recurs weekly. God built rest into the rhythm of time itself. One day every seven days, the work stops — not because it&apos;s finished, but because the point of the day is not your work; it&apos;s your return to Him. When you step out of the cycle of producing and earning, you are echoing something ancient and true: you are made for relationship with God, not for your output.',
        },
        {
          kind: 'reflection',
          id: 'sabbath',
          prompt: 'What would have to change in your week for one full day to actually belong to God and rest?',
        },
      ],
    },

    /* ─── Leviticus 23:4–8 — Passover & Unleavened Bread ────────────── */
    {
      ref: 'Leviticus 23:4–8',
      title: 'Passover and Unleavened Bread: Death and Deliverance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 4,
              spans: [t('These are the feasts of the Lord, even the appointed seasons in their due season.')],
            },
            {
              number: 5,
              spans: [
                t('In the fourteenth day of the first month at even is the '),
                hp('Lord&apos;s passover', 'c-passover-lamb'),
                t('.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And on the fifteenth day of the same month is the feast of '),
                hp('unleavened bread', 'c-unleavened-sinless'),
                t(' unto the Lord: seven days ye must eat unleavened bread.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('In the first day ye shall have an '),
                hy('holy convocation', 'c-work-shall-not-be-done'),
                t('; ye shall do no servile work therein.'),
              ],
            },
            {
              number: 8,
              spans: [t('But ye shall offer an offering made by fire unto the Lord seven days: in the seventh day is an holy convocation: ye shall do no servile work therein.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-work-shall-not-be-done',
          html:
            'On both the first and seventh days of Unleavened Bread, &ldquo;ye shall do no servile work.&rdquo; The Egyptian bondage is being remembered and rehearsed — those days of forced labor are over. The feast bookends a week of rest in the middle of the work-year, a week that says: you have been set free.',
        },
        {
          kind: 'christ',
          id: 'c-passover-lamb',
          title: 'Christ Connection — The Passover Lamb',
          html:
            'The Passover Lamb dies so that death passes over[res:intertextual-resurrection-feasts-leviticus-23]. Paul writes, &ldquo;Christ our passover is sacrificed for us&rdquo; (1 Cor. 5:7). On the very date of Passover, Jesus shed His blood so that God&apos;s wrath would pass over all who trust in Him. The lamb slaughtered in Egypt foreshadowed the Lamb slaughtered at Golgotha.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-chametz',
          title: 'Chametz — &ldquo;leaven&rdquo;',
          script: 'חָמֵץ',
          translit: '<strong>chametz</strong> · leavened dough, the old yeast',
          description:
            'Leaven ferments and spreads unseen — it corrupts silently. In Scripture, leaven often represents sin, corruption, hypocrisy. Eating unleavened bread for seven days is a weekly training in holiness.',
        },
        {
          kind: 'christ',
          id: 'c-unleavened-sinless',
          title: 'Christ Connection — Unleavened Bread: His Sinless Body',
          html:
            'Jesus &ldquo;knew no sin,&rdquo; Peter writes, &ldquo;neither was guile found in his mouth&rdquo; (1 Pet. 2:22, 1 Pet. 3:9). Paul echoes it: &ldquo;Purge out therefore the old leaven, that ye may be a new lump, as ye are unleavened. For even Christ our passover is sacrificed for us&rdquo; (1 Cor. 5:7, 8). The bread without leaven is His body — pure, unblemished, unbroken by corruption.',
        },
        {
          kind: 'carry',
          html:
            'For seven days, Israel ate bread with no leaven. No rising agent, no puffing up, no hidden corruption spreading through the dough. Every meal for a week was a reminder: this is what freedom looks like. Not the absence of rules, but the presence of something pure. When you sit down to eat and taste bitterness and find yourself celebrating deliverance, you are living out what this feast still teaches.',
        },
        {
          kind: 'reflection',
          id: 'passover',
          prompt: 'What in your life still feels like Egypt — still feels like bondage? What would it look like to trust that Christ&apos;s death is your Passover?',
        },
      ],
    },

    /* ─── Leviticus 23:9–14 — Firstfruits ──────────────────────────── */
    {
      ref: 'Leviticus 23:9–14',
      title: 'Firstfruits: Resurrection Declared',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 9,
              spans: [t('And the Lord spake unto Moses, saying,')],
            },
            {
              number: 10,
              spans: [
                t('Speak unto the children of Israel, and say unto them, When ye be come into the land which I give unto you, and shall reap the harvest thereof, then ye shall bring '),
                hp('a sheaf of the firstfruits', 'c-firstfruits-harvest'),
                t(' of your harvest unto the priest:'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And he shall wave the sheaf before the Lord, to be accepted for you: on the morrow after the sabbath the priest shall wave it.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And ye shall offer that day when ye wave the sheaf an he lamb without blemish of the first year for a burnt offering unto the Lord.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And the meat offering thereof shall be two tenth deals of fine flour mingled with oil, an offering made by fire unto the Lord for a sweet savour: and the drink offering thereof shall be of wine, the fourth part of an hin.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And ye shall eat '),
                hy('neither bread', 'c-old-covenant-eaten'),
                t(', nor parched corn, nor green ears, until the selfsame day that ye have brought an offering unto your God: it shall be a statute for ever throughout your generations in all your dwellings.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-firstfruits-harvest',
          html:
            'The firstfruits feast is a single day — &ldquo;on the morrow after the sabbath,&rdquo; which lands it on the first day of the week. A sheaf is waved before the Lord. Not just any grain, but the first of the crop, brought and lifted up in declaration: the harvest has begun.',
        },
        {
          kind: 'commentary',
          id: 'c-old-covenant-eaten',
          html:
            'Israel cannot eat from the new harvest until the firstfruits have been offered to God. The first yield of the ground belongs to Him. It is a statement of trust: God owns the crop; we are permitted to participate in His abundance.',
        },
        {
          kind: 'christ',
          id: 'c-firstfruits-resurrection',
          title: 'Christ Connection — The Firstfruits of Resurrection',
          html:
            'Paul writes, &ldquo;Now is Christ risen from the dead, and become the firstfruits of them that slept&rdquo; (1 Cor. 15:20). The Firstfruits feast was celebrated on the very day Jesus rose. Every detail fits: He is the sheaf lifted up, the first to break the power of death, the guarantee that those who sleep in Him will also rise. The wave offering declares what the empty tomb proves — death does not hold the final word.',
        },
        {
          kind: 'carry',
          html:
            'Firstfruits teaches something quiet and enormous: the first and the best belong to God. It trains the Israelite to look at the front of the year, the beginning of blessing, and say, &ldquo;This is His.&rdquo; When you receive something good — a fresh opportunity, a blessing you didn&apos;t expect, a season opening up — your first response can be to lift it to Him in gratitude and recognize His hand in it.',
        },
        {
          kind: 'reflection',
          id: 'firstfruits',
          prompt: 'What is a &ldquo;firstfruits&rdquo; of blessing you received this season? Did you lift it to God, or did you move straight into enjoying it?',
        },
      ],
    },

    /* ─── Leviticus 23:15–21 — Pentecost/Weeks ────────────────────── */
    {
      ref: 'Leviticus 23:15–21',
      title: 'Pentecost: The Gift of the Spirit',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 15,
              spans: [t('And ye shall count unto you from the morrow after the sabbath, from the day that ye brought the sheaf of the wave offering; seven sabbaths shall be complete:')],
            },
            {
              number: 16,
              spans: [t('Even unto the morrow after the seventh sabbath shall ye number fifty days; and ye shall offer a new meat offering unto the Lord.')],
            },
            {
              number: 17,
              spans: [t('Ye shall bring out of your habitations two wave loaves of two tenth deals: they shall be of fine flour; they shall be baken with leaven; they are the firstfruits unto the Lord.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'leviticus_23_v15-21',
          html:
            '<p>Weaving God&apos;s ongoing care through each command and promise.</p>',
        },
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 18,
              spans: [
                t('And ye shall offer with the bread seven lambs without blemish of the first year, and one young bullock, and two rams: they shall be for a burnt offering unto the Lord with their meat offering and their drink offerings, even an offering made by fire, of sweet savour unto the Lord.'),
              ],
            },
            {
              number: 19,
              spans: [t('Then ye shall sacrifice one kid of the goats for a sin offering, and two lambs of the first year for a sacrifice of peace offerings.')],
            },
            {
              number: 20,
              spans: [
                t('And the priest shall wave them with the bread of the firstfruits for a wave offering before the Lord with the two lambs: they shall be holy to the Lord for the priest.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And ye shall proclaim on the selfsame day, that it may be an '),
                hy('holy convocation', 'c-pentecost-convocation'),
                t(' unto you: ye shall do no servile work therein: it shall be a statute for ever in all your dwellings throughout your generations.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-pentecost-convocation',
          html:
            'Pentecost means &ldquo;fiftieth day&rdquo; — fifty days from Firstfruits, seven complete weeks. Only here, bread is offered <em>with leaven</em>. The earlier offerings were unleavened, pointing to sinlessness; Pentecost brings bread with leaven — bread that has risen, bread made for nourishment and community. It is a different kind of offering altogether.',
        },
        {
          kind: 'christ',
          id: 'c-pentecost-spirit',
          title: 'Christ Connection — The Spirit Poured Out at Pentecost',
          html:
            'Fifty days after Firstfruits (Jesus&apos; resurrection), Peter stands up at Pentecost and calls the crowd to repent and believe. &ldquo;And they were all filled with the Holy Ghost, and began to speak with other tongues, as the Spirit gave them utterance&rdquo; (Acts 2:4). The gift the Spirit gives now — His indwelling, His empowering, His voice in the hearts of believers — is the leavened bread: the nourishment that will feed the Church and cause it to rise. Paul calls this power &ldquo;the earnest of our inheritance&rdquo; (Eph. 1:14) — the down payment of glory, the first taste of the age to come.',
        },
        {
          kind: 'carry',
          html:
            'Pentecost is the feast where Israel brings bread with leaven — bread that rises, bread that leavens all the dough. The Spirit Jesus promised does not come as a rule or a voice from heaven. He comes as an internal rising, an indwelling presence that leavens everything He touches. When you say &ldquo;yes&rdquo; to Him, what rises inside you — joy, courage, clarity, peace — is His work in you, leavening your whole life.',
        },
        {
          kind: 'reflection',
          id: 'pentecost',
          prompt: 'How has the Holy Spirit &ldquo;leavened&rdquo; your life? Where do you see Him rising up inside you, changing you from the inside out?',
        },
      ],
    },

    /* ─── Leviticus 23:23–25 — Trumpets ───────────────────────────── */
    {
      ref: 'Leviticus 23:23–25',
      title: 'Trumpets: The Call to Gather',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 23,
              spans: [t('And the Lord spake unto Moses, saying,')],
            },
            {
              number: 24,
              spans: [
                t('Speak unto the children of Israel, saying, In the seventh month, in the first day of the month, shall ye have a '),
                hy('sabbath', 'c-trumpet-rest'),
                t(', a memorial of blowing of '),
                hy('trumpets', 'hebrew-shofar'),
                t(', an holy convocation.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('Ye shall do no servile work therein: but ye shall offer an offering made by fire unto the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shofar',
          title: 'Shofar — &ldquo;trumpet&rdquo;',
          script: 'שׁוֹפָר',
          translit: '<strong>shofar</strong> · a horn blown for proclamation',
          description:
            'The shofar is not a metal instrument of elegance but a natural horn — a ram&apos;s horn. It sounds raw and piercing, cutting through the ordinary to demand attention. Its sound is a call, an alarm, a summons to the assembly.',
        },
        {
          kind: 'commentary',
          id: 'c-trumpet-rest',
          html:
            'The feast of Trumpets arrives in the seventh month — not by accident. The seventh month carries the weight of completion and judgment in Scripture. The trumpet blast on this day is a summons: gather, remember, prepare.',
        },
        {
          kind: 'christ',
          id: 'c-trumpets-gathering',
          title: 'Christ Connection — The Trumpet at His Return',
          html:
            'Paul writes, &ldquo;For the Lord himself shall descend from heaven with a shout, with the voice of the archangel, and with the trump of God: and the dead in Christ shall rise first&rdquo; (1 Thess. 4:16). The feast of Trumpets points forward to that moment when Christ returns to gather His people. A trumpet call summons the dispersed; on that day, His shout will call all His people to gather at last.',
        },
        {
          kind: 'carry',
          html:
            'The trumpet was the sound of God&apos;s attention — it summoned the people, announced the arrival of something momentous. In a world that is mostly noise, there are times when God cuts through and demands your full attention: a moment of beauty, a word that lands, a face that matters, a season turning. When that happens, you are hearing the call of Trumpets — the summons to stop and listen and gather your whole self before Him.',
        },
        {
          kind: 'reflection',
          id: 'trumpets',
          prompt: 'When has God called you — interrupted the ordinary, demanded your attention, summoned you back to Him? What did you hear?',
        },
      ],
    },

    /* ─── Leviticus 23:26–32 — Day of Atonement ────────────────────── */
    {
      ref: 'Leviticus 23:26–32',
      title: 'Day of Atonement: Judgment and Cleansing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 26,
              spans: [t('And the Lord spake unto Moses, saying,')],
            },
            {
              number: 27,
              spans: [
                t('Also on the tenth day of this seventh month there shall be a day of atonement: it shall be an holy convocation unto you; and ye shall '),
                hy('afflict your souls', 'c-afflict-souls'),
                t(', and offer an offering made by fire unto the Lord.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And ye shall do no work in that same day: for it is a day of atonement, to make an atonement for you before the Lord your God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'leviticus_23_v26-32',
          html:
            '<p>Weaving God&apos;s ongoing care through each command and promise.</p>',
        },
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 29,
              spans: [
                t('For whatsoever soul it be that shall not be afflicted in that day, he shall be cut off from among his people.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And whatsoever soul it be that doeth any work in that day, the same soul will I destroy from among his people.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('Ye shall do no manner of work: it shall be a statute for ever throughout your generations in all your dwellings.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('It shall be unto you a sabbath of rest, and ye shall '),
                hg('afflict your souls', 'c-atonement-sorrow'),
                t(': in the ninth day of the month at even, from even unto even, shall ye celebrate your sabbath.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-afflict-souls',
          html:
            '&ldquo;Afflict your souls&rdquo; is not self-harm; it means to fast, to weep, to stop all ordinary activity and face the reality of sin. This is not celebration but confession. The whole nation pauses to acknowledge: without atonement, we cannot stand before God.',
        },
        {
          kind: 'commentary',
          id: 'c-atonement-sorrow',
          html:
            'Yom Kippur (Day of Atonement) stands apart[res:bibleodyssey-jewish-feasts]. No festival meal, no rejoicing, no ordinary work. Only the high priest can enter the Holy of Holies, and only once a year, carrying the blood that covers the nation&apos;s sins. It is a day that says: your standing before God requires blood, requires sacrifice, requires someone to bear what you cannot bear.',
        },
        {
          kind: 'christ',
          id: 'c-atonement-judgment',
          title: 'Christ Connection — The Final Atonement',
          html:
            'Hebrews unpacks this feast entirely through Jesus. &ldquo;For Christ is not entered into the holy places made with hands… but into heaven itself, now to appear in the presence of God for us: nor yet that he should offer himself often… but now once in the end of the world hath he appeared to put away sin by the sacrifice of himself&rdquo; (Heb. 9:24, 26). Jesus is both the high priest who enters and the offering that is brought. His death is the atonement that covers all sin for all time. The Day of Atonement pointed toward the day He hung on the cross.',
        },
        {
          kind: 'carry',
          html:
            'The Day of Atonement was a day when ordinary life stopped and the nation faced its sin. In your life, can you name a moment like that? Not shame, but honest facing of what you cannot fix yourself? That moment of recognition — &ldquo;I need someone else to bear this&rdquo; — is the heart of what this feast teaches. Christ bore what the high priest only pretended to carry. His blood actually covers. His sacrifice is the final word.',
        },
        {
          kind: 'reflection',
          id: 'atonement',
          prompt: 'What sin have you been carrying that you finally admitted you cannot fix? How does it feel to know Christ&apos;s blood covers it completely?',
        },
      ],
    },

    /* ─── Leviticus 23:33–43 — Tabernacles ──────────────────────── */
    {
      ref: 'Leviticus 23:33–43',
      title: 'Tabernacles: God Dwelling Among Us',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 33,
              spans: [t('And the Lord spake unto Moses, saying,')],
            },
            {
              number: 34,
              spans: [
                t('Speak unto the children of Israel, saying, The fifteenth day of this seventh month shall be the feast of '),
                hp('tabernacles', 'c-tabernacles-dwelling'),
                t(' for the space of seven days unto the Lord.'),
              ],
            },
            {
              number: 35,
              spans: [t('On the first day shall be an holy convocation: ye shall do no servile work therein.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'leviticus_23_v33-39',
          html:
            '<p>Weaving God&apos;s ongoing care through each command and promise.</p>',
        },
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 36,
              spans: [
                t('Seven days ye shall offer an offering made by fire unto the Lord: on the eighth day shall be an holy convocation unto you; and ye shall offer an offering made by fire unto the Lord: it is a solemn assembly; and ye shall do no servile work therein.'),
              ],
            },
            {
              number: 37,
              spans: [t('These are the feasts of the Lord, which ye shall proclaim to be holy convocations, to offer an offering made by fire unto the Lord, a burnt offering, and a meat offering, a sacrifice, and drink offerings, every thing upon his day:')],
            },
            {
              number: 38,
              spans: [
                t('Beside the sabbaths of the Lord, and beside your gifts, and beside all your vows, and beside all your freewill offerings, which ye give unto the Lord.'),
              ],
            },
            {
              number: 39,
              spans: [
                t('Also in the fifteenth day of the seventh month, when ye have gathered in the fruit of the land, ye shall keep a feast unto the Lord seven days: on the first day shall be a sabbath, and on the eighth day shall be a sabbath.'),
              ],
            },
          ],
        },
        { kind: 'commentary', id: 'lev23-mid', html: 'The feast is proclaimed. The dates are set. The offerings are named. Now comes the lived experience—not the law, but the practice. The people will take branches, rejoice, dwell in booths. Theory becomes habit becomes memory becomes identity.' },
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 40,
              spans: [
                t('And ye shall take you on the first day the boughs of goodly trees, '),
                hy('branches of palm trees', 'hebrew-lulav'),
                t(', and the boughs of thick trees, and willows of the brook; and ye shall rejoice before the Lord your God seven days.'),
              ],
            },
            {
              number: 41,
              spans: [t('And ye shall keep it a feast unto the Lord seven days in the year. It shall be a statute for ever in your generations: ye shall celebrate it in the seventh month.')],
            },
            {
              number: 42,
              spans: [
                t('Ye shall dwell in '),
                hy('booths', 'hebrew-sukkah'),
                t(' seven days; all that are Israelites born shall dwell in booths:'),
              ],
            },
            {
              number: 43,
              spans: [
                t('That your generations may know that I made the children of Israel to dwell in booths, when I brought them out of the land of Egypt: I am the Lord your God.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-sukkah',
          title: 'Sukkah — &ldquo;booth&rdquo;',
          script: 'סוּכָּה',
          translit: '<strong>sukkah</strong> · a temporary shelter, a hut',
          description:
            'For seven days, Israel dwells in temporary booths — a reminder of the wilderness years when they camped in tents. No permanent house, but God&apos;s presence leading them. A sukkah is deliberately fragile: you can see the sky through the roof.',
        },
        {
          kind: 'commentary',
          id: 'c-rejoice-before-lord',
          html:
            'Unlike the Day of Atonement with its affliction and fasting, Tabernacles is pure joy. &ldquo;Ye shall rejoice before the Lord your God seven days.&rdquo; This is a feast of harvest completion and celebration — the work is done, the grain is stored, life is secure. God has led them through the year.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-lulav',
          title: 'Lulav — &ldquo;palm branch&rdquo;',
          script: 'לוּלָב',
          translit: '<strong>lulav</strong> · a palm branch, taken as a bundle of branches',
          description:
            'The lulav is a bundle of four species — palm, myrtle, willow, and etrog (citron). Each represents different qualities; together they are waved toward all four directions, acknowledging God&apos;s rule over all creation.',
        },
        {
          kind: 'christ',
          id: 'c-tabernacles-dwelling',
          title: 'Christ Connection — God Dwelling With Us',
          html:
            'John opens his Gospel with the most profound line on Tabernacles: &ldquo;And the Word was made flesh, and dwelt among us (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth&rdquo; (John 1:14). The Greek word <em>dwelt</em> literally means &ldquo;tabernacled&rdquo; — he pitched his tent among us. Jesus is God&apos;s sukkah — the temporary shelter through which God comes near, the place where heaven and earth meet. And the ultimate fulfillment is yet to come: &ldquo;Behold, the tabernacle of God is with men, and he will dwell with them&rdquo; (Rev. 21:3) — the eternal booth, the final home, where all separation ends.',
        },
        {
          kind: 'carry',
          html:
            'A booth is temporary. It teaches something hard and true: the home you are building now is not your final home. The house you love, the city you belong to, even the body you inhabit — these are temporary dwellings. But while you dwell here, you are not abandoned. God&apos;s presence comes near; His tent is pitched beside yours. One day He will bring you home to a city that needs no booth, where you will dwell with Him openly, forever.',
        },
        {
          kind: 'artwork',
          matchTitle: /sukkot|tabernacle/i,
          caption: 'Leviticus 23:33–43 · The Feast of Tabernacles',
        },
        {
          kind: 'reflection',
          id: 'tabernacles',
          prompt: 'What home are you trying to build that might actually be a temporary booth? How does it change things to remember that God&apos;s presence, not your permanence, is what matters?',
        },
      ],
    },

    /* ─── Leviticus 23:44 — Closing ───────────────────────────────── */
    {
      ref: 'Leviticus 23:44',
      title: 'The Rhythm Established',
      blocks: [
        {
          kind: 'scripture',
          chapter: 23,
          lines: [
            {
              number: 44,
              spans: [
                t('And Moses '),
                hg('declared unto the children of Israel', 'c-declared-feasts'),
                t(' the feasts of the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-declared-feasts',
          html:
            'The chapter ends with a simple statement: Moses declared. The feasts are no longer God&apos;s alone; they are now Israel&apos;s inheritance. The rhythm of redemption becomes the rhythm of a people&apos;s life. Every year, they will live through the story again.',
        },
        {
          kind: 'carry',
          html:
            'The eight appointed times are not a burden — they are a gift. They give Israel a calendar where every season carries meaning. Spring feasts rehearse deliverance and resurrection. Fall feasts look toward judgment and final dwelling. By living within this rhythm year after year, a believer learns something that only time can teach: God is faithful, redemption is real, and the end of the story is certain. You are not drifting through random days. You are living inside a story that has already been written by God.',
        },
        {
          kind: 'divider',
        },
        {
          kind: 'reflection',
          id: 'all-feasts',
          prompt: 'Which feast speaks most deeply to you right now? What is it calling you to believe or to do?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'The feasts of the Lord are appointed times — the rhythm of Israel&apos;s year is the rhythm of redemption. Every feast points to Christ.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Leviticus 23 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-leviticus-23',
      kind: 'study',
      source: 'Sefaria',
      label: 'Leviticus 23 — Sefaria Community Notes',
      url: 'https://www.sefaria.org/Leviticus.23',
      description: 'Annotated text with rabbinic commentary on the Jewish festivals and appointed times.',
    },
    {
      id: 'bibleodyssey-jewish-feasts',
      kind: 'study',
      source: 'Bible Odyssey',
      label: 'Jewish Festivals and Their Meanings',
      url: 'https://www.bibleodyssey.org',
      description: 'Overview of Passover, Shavuot, Sukkot, and their theological significance in Israel.',
    },
    {
      id: 'intertextual-resurrection-feasts-leviticus-23',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Christ Crucified and Risen — The Feast Calendar',
      url: 'https://intertextalbible.com',
      description: 'How Jesus&apos; death and resurrection fulfill the prophetic symbolism of the appointed feasts.',
    },
  ],

  hasHebrew: true,
};
