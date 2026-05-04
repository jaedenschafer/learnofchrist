import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Numbers 10 — The Great Departure
 *
 * Two silver trumpets made for summoning the congregation and signaling march.
 * Israel breaks camp from Sinai for the first time and starts the journey toward Canaan.
 * The order of march. Moses asks Hobab to come as a guide. The great prayers spoken
 * whenever the ark moved or rested. The silver trumpets prefigure the trumpet of the
 * second coming; the "Rise up, LORD" prayers prefigure Christ's leading His church into
 * spiritual warfare and home.
 */
export const NUMBERS_10: RichChapterContent = {
  bookSlug: 'numbers',
  bookName: 'Numbers',
  chapter: 10,

  estimatedMinutes: { beginner: 9, intermediate: 14, deep: 16 },
  topicTags: ['provision', 'protection', 'leadership', 'doubt'],
  opener: {
    topical: true,
    caption: 'Numbers 10',
  },
  intros: [
    'Numbers 10 opens with two silver trumpets—made not for war or celebration, but for summoning the congregation and signaling when to march. These trumpets shape the whole chapter. They call Israel to assembly. They announce the beginning of the journey that will take forty years to complete.',
    'Israel has been camped at Sinai for eleven months. The tabernacle is built, the priesthood is ordained, the people have received the law, been counted, been organized by tribe and family. Now God gives the signal. The camp breaks. The ark moves. The people march. For the first time since leaving Egypt, Israel is on the move toward a promise.',
    'The chapter closes with two prayers—prayers spoken whenever the ark moved or rested. "Rise up, LORD, and let thine enemies be scattered" when the ark moved forward. "Return, O LORD, unto the many thousands of Israel" when it rested. These prayers carry the echoes of Exodus, the weight of Sinai, and the longing for Canaan. For those who know Christ, they echo something deeper still: a trumpet call to the pilgrimage, a guide to follow, a home being led toward.',
  ],

  showKjvNote: true,

  sections: [
    /* ─── Numbers 10:1–4 — The Two Silver Trumpets ────────────────────── */
    {
      ref: 'Numbers 10:1–4',
      title: 'The Two Silver Trumpets',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            { number: 1, spans: [t('And the LORD spake unto Moses, saying,')] },
            { number: 2, spans: [t('Make thee two '), hy('trumpets of silver', 'hebrew-chatsotsrah'), t('; of a whole piece shalt thou make them: that thou mayest use them for the calling of the assembly, and for the journeying of the camps.')] },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-chatsotsrah',
          title: 'Chatsotsrah — "trumpets of silver"',
          script: 'חֲצוֹצְרָה',
          translit: '<strong>chatsotsrah</strong> · a straight trumpet, made of beaten metal',
          description:
            'These are not the curved, ornate horns used in ancient warfare. They are straight, simple trumpets hammered from pure silver—instruments of clarity and authority, designed to carry a sound across the whole camp. Silver itself matters: the metal used for the atonement money, the metal of redemption.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            { number: 3, spans: [t('And when they shall blow with them, all the assembly shall assemble themselves unto thee at the door of the tabernacle of the congregation.')] },
            { number: 4, spans: [t('And if they blow but with one trumpet, then the princes, which are heads of the thousands of Israel, shall gather themselves unto thee.')] },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-trumpet-signal',
          html:
            'The trumpet has a language [res:sefaria-silver-trumpets]. Two blasts: the whole congregation gathers. One blast: the leaders assemble. Later in the chapter, a different kind of blast signals the camps to march. The same instrument carries different meanings depending on how it is sounded. The people learn to listen and obey.',
        },
        {
          kind: 'christ',
          id: 'christ-trumpet-second-coming',
          title: 'Christ Connection — The Trump of God',
          html:
            'Paul writes of the second coming: "The Lord himself shall descend from heaven with a shout, with the voice of the archangel, and with the trump of God: and the dead in Christ shall rise first" (1 Thess. 4:16). And in 1 Corinthians 15:52: "In a moment, in the twinkling of an eye, at the last trump: for the trumpet shall sound, and the dead shall be raised incorruptible." The silver trumpets of Sinai prefigure that final trumpet—a voice that calls the scattered to assembly, that wakes the dead, that summons a people home. For Israel, the trumpets meant: gather, march, move toward the promise. For the church, the final trumpet means: the promise fulfilled, the pilgrimage ended, the journey home.',
        },
        {
          kind: 'carry',
          html:
            'You may not hear the silver trumpet yet, but you have heard a call. The gospel is a trumpet sound—a voice that says "Gather. Move. Follow." Every time you hear that voice calling you toward faithfulness, toward community, toward home, you are listening to the same God who sounded the silver trumpets over Sinai.',
        },
        { kind: 'reflection', id: 'trumpet-call', prompt: 'What call are you hearing right now—to gather, to move, to follow? What would it look like to obey it?' },
        { kind: 'divider' },
      ],
    },

    /* ─── Numbers 10:5–10 — The Blasts and Their Meanings ──────────────── */
    {
      ref: 'Numbers 10:5–10',
      title: 'The Blasts and Their Meanings',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            { number: 5, spans: [t('When ye blow an alarm, then the camps that lie on the east side of the tabernacle shall take their journey.')] },
            { number: 6, spans: [t('When ye blow an alarm the second time, then the camps that lie on the south side of the tabernacle shall take their journey: they shall blow an alarm for their journeys.')] },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-alarm-sound',
          html:
            'The Hebrew word is <em>truah</em>—an alarm, a blast that signals movement. The first alarm: the eastern camp moves. The second alarm: the southern camp moves. The camps march in order, tribe by tribe, family by family. There is precision here. God does not move His people in chaos; there is a sequence, a leadership, a formation.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            { number: 7, spans: [t('But when the congregation is to be gathered together, ye shall blow, but ye shall not sound an alarm.')] },
            { number: 8, spans: [t('And the sons of Aaron, the priests, shall blow with the trumpets; and they shall be to you for an ordinance for ever throughout your generations.')] },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-priests-sound',
          html:
            'Only the priests blow the trumpets. The sound belongs to the priesthood, to those who stand before God on behalf of the people. When Israel hears the trumpet, they are hearing the voice of their mediators—and through them, the voice of God Himself. Authority and function are inseparable.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            { number: 9, spans: [t('And when ye go to war in your land against the enemy that oppresseth you, then ye shall blow an alarm with the trumpets; and ye shall be remembered before the LORD your God, and ye shall be saved from your enemies.')] },
            { number: 10, spans: [t('Also in the day of your gladness, and in your solemn feasts, and in the beginnings of your months, ye shall blow with the trumpets over your burnt offerings, and over the sacrifices of your peace offerings; that they may be to you for a memorial before your God: I am the LORD your God.')] },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-trumpet-memory',
          html:
            'The trumpets sound in war, in celebration, in solemn feasts, at the beginning of months—they are woven through the whole life of the community. Every trumpet blast is a memorial before God. The sound itself is remembrance. When Israel hears the trumpet, they remember: God is here. God is leading. God will fight for us. God receives our worship. The trumpet is both summons and prayer.',
        },
        {
          kind: 'carry',
          html:
            'What sounds in your life remind you that you belong to God? A hymn. A prayer spoken aloud. A gathering of believers. A moment when you remember: I am not alone in this. God is here. Whatever reminds you that you are part of a covenant people, part of a pilgrimage, part of God\'s march through history—that is your trumpet sound. Listen for it.',
        },
        { kind: 'reflection', id: 'memory-trumpet', prompt: 'What reminds you that you are part of God\'s people, marching toward a promise? How often do you hear that reminder?' },
        { kind: 'divider' },
      ],
    },

    /* ─── Numbers 10:11–28 — The Order of March ─────────────────────────── */
    {
      ref: 'Numbers 10:11–28',
      title: 'The Order of March',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            { number: 11, spans: [t('And it came to pass on the twentieth day of the second month, in the second year, that the cloud was taken up from over the tabernacle of the testimony.')] },
            { number: 12, spans: [t('And the children of Israel took their journeys out of the wilderness of Sinai; and the cloud rested in the wilderness of Paran.')] },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-leaving-sinai',
          html:
            'Israel has been at Sinai for eleven months. The cloud that led them out of Egypt stayed over the tabernacle while the law was given, the priesthood ordained, the people numbered. Now the cloud lifts. The pilgrimage resumes. Sinai was not home; it was a place of preparation. The promise is still ahead.',
        },
        {
          kind: 'carry',
          html:
            'There are seasons when God asks us to be still, to listen, to be shaped by His word and His presence. But stillness is never meant to be permanent. At some point, the cloud lifts. The signal comes. You are called to move. Not every season of your life happens at the mountain. Some seasons happen on the way.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            { number: 13, spans: [t('And they first took their journey according to the commandment of the LORD by the hand of Moses.')] },
            { number: 14, spans: [t('And in the first place went the standard of the camp of the children of Judah according to their armies: and over his host was Nahshon the son of Amminadab.')] },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-judah-first',
          html:
            'Judah leads. The order of march was established in Numbers 2: Judah at the front, Reuben and Simeon on the south, Ephraim on the west, Dan on the north. Each tribe has its place. Organization and structure make order possible. God does not move a mob; He leads a people arranged, cohesive, each family knowing their position.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            { number: 15, spans: [t('And over the host of the tribe of the children of Issachar was Nethaneel the son of Zuar.')] },
            { number: 16, spans: [t('And over the host of the tribe of the children of Zebulun was Eliab the son of Helon.')] },
            { number: 17, spans: [t('And the tabernacle was taken down; and the sons of Gershon and the sons of Merari set forward, bearing the tabernacle.')] },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-after-judah',
          html:
            'After Judah marches, the tabernacle is carried—not the whole structure at once, but divided among the Levites. The holy place goes in the middle of the procession, protected, honored, central to the whole movement. Everything in Israel\'s march revolves around the presence of God.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            { number: 18, spans: [t('And the standard of the camp of Reuben set forward according to their armies: and over his host was Elizur the son of Shedeur.')] },
            { number: 19, spans: [t('And over the host of the tribe of the children of Simeon was Shelumiel the son of Zurishaddai.')] },
            { number: 20, spans: [t('And over the host of the tribe of the children of Gad was Eliasaph the son of Deuel.')] },
            { number: 21, spans: [t('And the Kohathites set forward, bearing the holy things: and the tabernacle shall be set up in the meanwhile.')] },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-kohathites',
          html:
            'The Kohathites carry the most sacred vessels—the ark, the lampstand, the table of showbread, the altar. Because these are so holy, they cannot be carried until they are covered and prepared. The care shown to the holy things is meticulous. What is closest to God\'s presence requires the most protection.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            { number: 22, spans: [t('And the standard of the camp of the children of Ephraim set forward according to their armies: and over his host was Elishama the son of Ammihud.')] },
            { number: 23, spans: [t('And over the host of the tribe of the children of Manasseh was Gamaliel the son of Pedahzur.')] },
            { number: 24, spans: [t('And over the host of the tribe of the children of Benjamin was Abidan the son of Gideoni.')] },
            { number: 25, spans: [t('And the standard of the camp of the children of Dan set forward, which was the rearward of all the camps throughout their hosts: and over his host was Ahiezer the son of Ammishaddai.')] },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-dan-last',
          html:
            'Dan marches last—the rearguard. They protect the vulnerable, the stragglers, the ones who cannot keep pace. Even in the order of march, there is care for the weak. The pattern of Scripture is always: the strong serve the weak, the leaders protect those without protection.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            { number: 26, spans: [t('And over the host of the tribe of the children of Asher was Pagiel the son of Ocran.')] },
            { number: 27, spans: [t('And over the host of the tribe of the children of Naphtali was Ahira the son of Enan.')] },
            { number: 28, spans: [t('Thus were the journeyings of the children of Israel according to their armies, when they set forward.')] },
          ],
        },
        {
          kind: 'carry',
          html:
            'In God\'s people, there is an order. Not a hierarchy of worth—every tribe matters, every family is named. But an order of purpose. Some lead. Some carry sacred things. Some protect the rear. Some serve in ways others cannot see. Your place in the march may not be the front, but your place is essential. The whole journey is incomplete without you.',
        },
        { kind: 'reflection', id: 'place-in-march', prompt: 'Where do you see yourself in the march of God\'s people? What is your place, and what would it look like to take it faithfully?' },
        { kind: 'divider' },
      ],
    },

    /* ─── Numbers 10:29–34 — Hobab the Guide ──────────────────────────── */
    {
      ref: 'Numbers 10:29–34',
      title: 'Hobab the Guide',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            { number: 29, spans: [t('And Moses said unto Hobab, the son of Raguel the Midianite, Moses\' father in law, We are journeying unto the place of which the LORD said, I will give it you: come thou with us, and we will do thee good: for the LORD hath spoken good concerning Israel.')] },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hobab-role',
          html:
            'Hobab is a Midianite—Moses\' father-in-law\'s relative. He knows the wilderness; he has lived in it. Moses asks him to come along as a guide. This is a remarkable moment. Moses, who has seen God face to face, who carries the law written on stone, asks a man of the wilderness to show the way. God works through preparation and knowledge. He uses the gifts of others.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            { number: 30, spans: [t('And he said unto him, I will not go; but I will depart to mine own land, and to my kindred.')] },
            { number: 31, spans: [t('And he said, Leave us not, I pray thee; forasmuch as thou knowest how we are to encamp in the wilderness, and thou mayest be to us instead of eyes.')] },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-thou-mayest-be-eyes',
          html:
            '"Thou mayest be to us instead of eyes." This is the deepest form of trust. Moses is saying: you know what we cannot see. You know where water is. You know where the land is passable. You know dangers we do not. In the wilderness, the one who sees is more essential than the one who leads. Knowledge and guidance are gifts that the mighty need.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            { number: 32, spans: [t('And it shall be, if thou go with us, yea, it shall be, that what goodness the LORD shall do unto us, the same will we do unto thee.')] },
            { number: 33, spans: [t('And they departed from the mount of the LORD three days\' journey: and the ark of the covenant of the LORD went before them in the three days\' journey, to search out a resting place for them.')] },
            { number: 34, spans: [t('And the cloud of the LORD was upon them by day, when they set forward from the camp.')] },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-ark-searches',
          html:
            'The ark goes before them—not Hobab, not Moses. The ark searches out a resting place. Even as they march with a guide who knows the wilderness, they follow God\'s presence. The eye that matters most is God\'s eye, watching the way, choosing where they rest.',
        },
        {
          kind: 'carry',
          html:
            'You need guides. Other people who have walked hard roads before you, who know things you don\'t know, who see what you cannot see. It is not weakness to ask someone else to be "eyes" for you. It is wisdom. And even when you have the best guide, remember: God\'s presence leads further still. Guides matter. God matters more.',
        },
        { kind: 'reflection', id: 'hobab-guide', prompt: 'Who has been "eyes" for you when you could not see the way? And who might need your eyes right now?' },
        { kind: 'divider' },
      ],
    },

    /* ─── Numbers 10:35–36 — The Great Prayers ──────────────────────── */
    {
      ref: 'Numbers 10:35–36',
      title: 'The Great Prayers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            { number: 35, spans: [t('And it came to pass, when the ark set forward, that Moses said, '), t('Rise up, LORD, and let thine enemies be scattered'), t('; and let them that hate thee flee before thee.')] },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-ark-movement',
          html:
            'When the ark moves, Moses prays [res:bible-odyssey-ark-movement]. It is a prayer spoken in the moment of journey—not in the tabernacle, not in quiet prayer, but at the very moment the people begin to move forward. The prayer is an invocation: Rise up, scatter enemies, make a way. It is both confidence and plea. God, you have said you will do this. Now do it.',
        },
        {
          kind: 'christ',
          id: 'christ-leading-into-warfare',
          title: 'Christ Connection — Leading into Spiritual Warfare',
          html:
            'For Israel, the prayer meant: rise up against Canaanite kings, scatter those who oppose us, lead us to victory. For the church, Paul echoes the prayer in different form: "Finally, my brethren, be strong in the Lord, and in the power of his might. Put on the whole armour of God… Praying always with all prayer and supplication in the Spirit" (Eph. 6:10, 18). The march toward the promise is always a march through warfare. Christ leads His church into both—into conflict with principalities and powers, and out the other side, into the rest He has prepared. The prayer "Rise up, LORD" is the church\'s prayer still: Rise up and fight what opposes us. Rise up and lead us through.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            { number: 36, spans: [t('And when the ark rested, he said, '), hp('Return, O LORD, unto the many thousands of Israel', 'c-return-lord'), t('.')] },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-return-lord',
          html:
            'And when they stop, Moses prays again [res:sefaria-rise-up-prayer]: Return. Return to the many thousands of Israel. It is a prayer for rest, for God\'s presence to settle where the people settle. Not "return" as in coming back from a distance, but "return to your place"—settle here with us. Be at home where we are at home. The prayer bookends the journey: rise up to lead, return to dwell. The whole rhythm of faith is in these two prayers.',
        },
        {
          kind: 'carry',
          html:
            'Your life is both march and rest—times when God calls you to rise up and move forward through opposition, and times when He calls you to stop and settle in His presence. Both prayers are yours. When you feel the summons to move, to step out in faith, to face what is before you: Rise up, LORD. When you are weary and you rest, when you need His presence to settle on you and fill you: Return, O LORD. One prayer propels you forward. One prayer welcomes Him home in the midst of you. Both are the rhythm of pilgrimage.',
        },
        { kind: 'divider' },
        { kind: 'reflection', id: 'rise-and-return', prompt: 'When do you need to pray "Rise up, LORD"? When do you need to pray "Return, O LORD"? Speak both prayers today.' },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Numbers 10',
    quote:
      'The silver trumpets call Israel to gather and march. The ark leads them out from Sinai into the wilderness. Moses prays two prayers that shape the whole journey: "Rise up, LORD, and let thine enemies be scattered" when the ark moves forward, and "Return, O LORD, unto the many thousands of Israel" when it rests. The journey toward the promise has begun.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Numbers 10 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-silver-trumpets',
      kind: 'study',
      source: 'Sefaria',
      label: 'Numbers 10 — Silver Trumpets and the Great Departure',
      url: 'https://www.sefaria.org/Numbers.10',
      description: 'Rabbinic and Talmudic commentary on the significance of the silver trumpets, their different blasts, the order of march, and the timing of Israel&apos;s first departure from Sinai.',
    },
    {
      id: 'bible-odyssey-ark-movement',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'The Ark of the Covenant — God&apos;s Traveling Presence',
      url: 'https://www.bibleodyssey.org/dictionary/ark-of-the-covenant/',
      description: 'Overview of the ark as the symbol of God&apos;s presence during the wilderness journey, its role in the order of march, and its significance in Israel&apos;s spiritual warfare and pilgrimage toward Canaan.',
    },
    {
      id: 'sefaria-rise-up-prayer',
      kind: 'study',
      source: 'Sefaria',
      label: 'The Prayers of Movement — Rise Up and Return',
      url: 'https://www.sefaria.org/Numbers.10.35',
      description: 'Talmudic discussion of Moses&apos; prayers at the movement and rest of the ark, their role in binding the people to God&apos;s guidance, and their intertextual connection to spiritual pilgrimage and warfare.',
    },
  ],
};
