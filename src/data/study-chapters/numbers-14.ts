import { hp, hy, hg, t, verse as verse, plain, type RichChapterContent } from './types';

/**
 * Numbers 14 — Israel&apos;s rebellion at the report of the spies. The people
 * weep and cry out, "would God we had died in this wilderness!" They want a
 * new captain to take them back to Egypt. Joshua and Caleb tear their clothes
 * and plead with the congregation. The glory of the LORD appears. God says He
 * will smite them with pestilence and disinherit them, starting over with
 * Moses. Moses intercedes, echoing the prayer from Exodus 32 — "let the power
 * of my Lord be great." God forgives but pronounces judgment: every adult
 * except Joshua and Caleb will die in the wilderness; forty years in the
 * wilderness, one year for each day of spying. The ten spies die immediately
 * by plague. The people attempt to go up the next morning and are routed.
 *
 * This is the pivot chapter of Numbers — the moment Israel&apos;s generation is
 * condemned to wander. The principle of proportional judgment (yom le-shanah,
 * a day for a year) becomes the backbone of biblical prophecy. Ezekiel 4:6
 * applies it explicitly; Daniel 9 builds on it.
 *
 * Hebrews 3–4 cites this chapter extensively as the great warning against
 * unbelief. Christ is the better Joshua who leads us into the true rest that
 * Israel missed. 1 Corinthians 10:5–11 holds this up as our instruction: do
 * not desire evil or grumble as the people did.
 */
export const NUMBERS_14: RichChapterContent = {
  bookSlug: 'numbers',
  bookName: 'Numbers',
  chapter: 14,

  estimatedMinutes: { beginner: 9, intermediate: 15, deep: 18 },
  intros: [
    'Israel has heard the report. Ten men say the land is impossible. Only Caleb and Joshua say it is possible. Now the people move. Not forward — backward. All night they weep and cry out against Moses and Aaron: "Would God we had died in this wilderness! Why hath the Lord brought us unto this land, to fall by the sword? Our wives and our little ones will become a prey." They want to stone Joshua and Caleb. They want to choose a new captain to lead them back to Egypt.',
    'This is Israel&apos;s moment of breaking. Fear has crossed over into rebellion. They have moved from disbelief to active rejection of God&apos;s word. Joshua and Caleb tear their clothes — the sign of grief and intercession — and try to turn the people back. But the glory of the Lord appears and stops the proceedings. God speaks to Moses with a sentence that will echo through the rest of the book: He will strike the people with pestilence. But He will not wipe them out entirely. Instead, the adults will wander forty years in the wilderness until they die — one year in the wilderness for each day the spies spent in the land. No one over twenty will enter Canaan except Joshua, Caleb, and the children. The ten unfaithful spies die by plague immediately.',
    'This chapter is the turning point. It is also the great biblical warning against hardening the heart when God speaks. Hebrews 3–4 returns to it again and again: "Take heed, brethren, lest there be in any of you an evil heart of unbelief, in departing from the living God" (Hebrews 3:12). The wilderness generation learned the hard way that unbelief is not a private thought. It is rebellion, and it has consequences.',
  ],

  bottomShare: {
    label: 'Share Numbers 14',
    quote:
      'When Israel heard the bad report, they rebelled against God and wept, saying they wished they had died in the wilderness. God forgave them but judged them to wander forty years until that generation passed away, while Joshua and Caleb alone entered the promised land.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Numbers 14 · Study Guide',
  },

  sections: [
    /* ─── Numbers 14:1–4 — The Congregation Rises in Rebellion ──────────── */
    {
      ref: 'Numbers 14:1–4',
      title: 'The Rebellion Begins',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            verse(1,
              t('And all the congregation lifted up their voice, and '),
              hg('cried; and the people wept', 'weep-rebellion'),
              t(' that night.')
            ),
            verse(2,
              t('And all the children of Israel '),
              hg('murmured against Moses and against Aaron', 'murmur-complaint'),
              t(': and the whole congregation said unto them, '),
              hg('Would God we had died in this wilderness', 'death-wish'),
              t('!')
            ),
            verse(3,
              t('And wherefore hath the Lord brought us unto this land, to fall by the sword? Our wives and our little ones will be a prey: were it not better for us to return into Egypt?')
            ),
            verse(4,
              t('And they said one to another, '),
              hg('Let us make a captain, and let us return into Egypt', 'new-captain'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'weep-rebellion',
          html:
            'The people weep — not with sorrow for their unbelief, but with fear and desperation. Their tears are a sign of how deep the panic runs. But tears without repentance are not the same as turning to God. They are crying for a way out, not crying out to God.',
        },
        {
          kind: 'commentary',
          id: 'murmur-complaint',
          html:
            'Murmuring — <em>lun</em> in Hebrew — is a recurring word in Numbers. It appears when the people complain at Marah (Exodus 15), when they hunger for meat (Numbers 11), and now here at the edge of the promised land. Each time, it is a rejection of God&apos;s provision and guidance, wrapped in the language of complaint. [res:sefaria-numbers-14]',
        },
        {
          kind: 'commentary',
          id: 'death-wish',
          html:
            '"Would God we had died in the wilderness" — they wish they had died in Egypt or in the desert on the journey. They reject both the past (God&apos;s deliverance) and the future (God&apos;s promise). This is not sorrow; it is active rebellion against God&apos;s plan.',
        },
        {
          kind: 'commentary',
          id: 'new-captain',
          html:
            'The people do not simply reject the land. They reject Moses as God&apos;s mediator and try to choose a new one. They are undoing the exodus itself. This is more than fear; it is apostasy.',
        },
        {
          kind: 'carry',
          html:
            'Unbelief becomes dangerous the moment it moves from doubt to decision. You can doubt and still walk forward. But the moment you turn and try to lead others backward — the moment you make a choice against God&apos;s word — you have entered a different kind of rebellion. If you are facing something that terrifies you and someone is trying to lead you back to the old life instead of into God&apos;s future, ask yourself: who is speaking the truth?',
        },
        {
          kind: 'reflection',
          id: 'reflection-rebellion',
          prompt: 'When you are afraid, what is your instinct — to press forward despite the fear, to turn back to what feels safe, or something else?',
        },
      ],
    },

    /* ─── Numbers 14:5–10a — Joshua and Caleb Intercede ────────────────── */
    {
      ref: 'Numbers 14:5–10',
      title: 'The Faithful Stand and Plead',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            verse(5,
              t('Then Moses and Aaron '),
              hg('fell on their faces', 'fell-faces-intercession'),
              t(' before all the assembly of the congregation of the children of Israel.')
            ),
            verse(6,
              t('And Joshua the son of Nun, and Caleb the son of Jephunneh, which were of them that searched the land, '),
              hy('rent their clothes', 'rent-clothes-grief'),
              t(':')
            ),
            verse(7,
              t('And they spake unto all the company of the children of Israel, saying, The land, which we passed through to search it, is an '),
              hg('exceeding good land', 'land-good-report'),
              t('. If the Lord delight in us, then he will bring us into this land, and '),
              hp('give it us', 'christ-promise-kept'),
              t('; a land which floweth with milk and honey.')
            ),
            verse(8,
              t('Only '),
              hg('rebel not ye against the Lord', 'rebel-not'),
              t(', neither fear ye the people of the land; for they are '),
              hg('bread for us', 'bread-metaphor'),
              t(': their defence is departed from them, and the Lord is with us: fear them not.')
            ),
            verse(9,
              t('But all the congregation bade stone them with stones. And the glory of the Lord appeared in the tabernacle of the congregation before all the children of Israel.')
            ),
          ],
        },
        {
          kind: 'hebrew',
          id: 'rent-clothes-grief',
          title: 'Qara — "rent, tear"',
          script: 'קָרַע',
          translit: '<strong>qara&apos;</strong> · to tear, rend; the gesture of grief, intercession, and priestly mourning',
          description:
            'Joshua and Caleb tear their clothes — a physical act of grief over the people&apos;s unbelief. This is not anger at the people. It is mourning. They are giving their own bodies as a sign of what breaking faith with God costs.',
        },
        {
          kind: 'commentary',
          id: 'fell-faces-intercession',
          html:
            'Moses and Aaron fall on their faces before the congregation. This is the posture of intercession — lying down before the people to plead with them to turn back. They do not speak yet, but their bodies speak: we are begging you.',
        },
        {
          kind: 'commentary',
          id: 'land-good-report',
          html:
            'Joshua and Caleb do not deny the obstacles or the giants. They say the land is "exceeding good." But they add the condition: "If the Lord delight in us." The goodness of the promise depends not on the absence of enemies, but on the presence of God.',
        },
        {
          kind: 'commentary',
          id: 'rebel-not',
          html:
            '"Rebel not ye against the Lord" — Caleb names what the people are doing. This is not fear. This is rebellion. Fear might be natural; rebellion is a choice.',
        },
        {
          kind: 'commentary',
          id: 'bread-metaphor',
          html:
            '"They are bread for us" — a poetic way of saying the enemies are defeated already in the mind of God. What looks like an obstacle from the perspective of fear looks like food from the perspective of faith. The language is almost violent: the enemies are not rivals; they are sustenance.',
        },
        {
          kind: 'christ',
          id: 'christ-promise-kept',
          title: 'Christ Connection — The Promise Will Not Fail',
          html:
            'Joshua and Caleb trust that God will give them the land if He delights in them. Paul writes that God made a promise to Abraham and that promise is firm: "Now to Abraham and his seed were the promises made… And this I say, that the covenant, that was confirmed before of God in Christ, the law, which was four hundred and thirty years after, cannot disannul, that it should make the promise of none effect" (Galatians 3:16–17). Joshua and Caleb believed God&apos;s promise was unbreakable. In Jesus, that same unbreakable promise is made flesh. What God has spoken, He will do.',
        },
        {
          kind: 'reflection',
          id: 'reflection-faith-stand',
          prompt: 'Has there been a moment when your faith was a minority opinion? How did you respond?',
        },
      ],
    },

    /* ─── Numbers 14:10b–19 — The Glory Appears and Moses Intercedes ───── */
    {
      ref: 'Numbers 14:10–19',
      title: 'The Glory Stops Everything',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            verse(10,
              t('And the '),
              hy('glory of the Lord appeared', 'glory-appears'),
              t(' in the tabernacle of the congregation before all the children of Israel.')
            ),
            plain(11, 'And the Lord said unto Moses, How long will this people provoke me? and how long will it be ere they believe me, for all the signs which I have shewed among them?'),
            verse(12,
              t('I will smite them with the '),
              hy('pestilence, and disinherit them', 'smite-disinherit'),
              t(', and will '),
              hg('make of thee a greater nation and mightier than they', 'moses-new-beginning'),
              t('.')
            ),
            plain(13, 'And Moses said unto the Lord, Then the Egyptians shall hear it: (for thou broughtest up this people in thy might from among them;)'),
            verse(14,
              t('And they will tell it to the inhabitants of this land: for they have heard that thou Lord art among this people, that thou Lord art seen face to face, and that thy cloud standeth over them, and that thou goest before them, by day time in a pillar of a cloud, and in the night in a pillar of fire.')
            ),
            verse(15,
              t('Now if thou shalt kill all this people as one man, then the nations which have heard the fame of thee will speak, saying,')
            ),
            verse(16,
              t('Because the Lord was not able to bring this people into the land which he sware unto them, therefore he hath slain them in the wilderness.')
            ),
            verse(17,
              t('And now, I beseech thee, let the '),
              hp('power of my Lord be great', 'power-great-prayer'),
              t(', according as thou hast spoken, saying,')
            ),
            verse(18,
              t('The Lord is longsuffering, and of great mercy, forgiving iniquity and transgression, and by no means clearing the guilty; visiting the iniquity of the fathers upon the children unto the third and fourth generation.')
            ),
            plain(19, 'Pardon, I beseech thee, the iniquity of this people according unto the greatness of thy mercy, and as thou hast forgiven this people, from Egypt even until now.'),
          ],
        },
        {
          kind: 'hebrew',
          id: 'glory-appears',
          title: 'Kavod Yahweh — "the glory of the LORD"',
          script: 'כְּבוֹד יְהוָה',
          translit: '<strong>kavod yahweh</strong> · the visible manifestation of God&apos;s presence, weight, honor',
          description:
            'The glory is God&apos;s visible presence. It appeared at Sinai, at the tabernacle dedication, and now to stop the rebellion. When the glory appears, judgment is near. But the glory also makes space for intercession.',
        },
        {
          kind: 'commentary',
          id: 'smite-disinherit',
          html:
            'God does not offer compromise. He offers death. "I will smite them with pestilence and disinherit them" — this generation will not enter the land. The covenant promise stands, but this generation forfeits it by unbelief.',
        },
        {
          kind: 'commentary',
          id: 'moses-new-beginning',
          html:
            'God proposes to start over with Moses as the patriarch of a new nation. This echoes Exodus 32, where God offers the same to Moses after the golden calf. Again Moses refuses the offer. He intercedes for the people instead[res:sefaria-numbers-14].',
        },
        {
          kind: 'commentary',
          id: 'power-great-prayer',
          html:
            'Moses&apos; intercession is remarkable for what it does not ask. He does not ask God to forgive the people and let them enter the land. Instead, he asks God to show mercy in a way that honors His character: "Let the power of my Lord be great." Moses is asking God to be merciful in a way that makes His character bigger, not smaller.',
        },
        {
          kind: 'carry',
          html:
            'When you intercede for someone, you are asking God to act in a way that serves His own glory, not your own preferences. Real intercession is not "give me what I want." It is "be Yourself — merciful, just, and glorious — and let that mercy fall on the people I am praying for." If that prayer moves you toward alignment with God&apos;s actual character, you know you are praying rightly.',
        },
      ],
    },

    /* ─── Numbers 14:20–35 — The Judgment ───────────────────────────────── */
    {
      ref: 'Numbers 14:20–35',
      title: 'The Sentence: Forty Years',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            verse(20,
              t('And the Lord said, '),
              hg('I have pardoned according to thy word', 'pardoned-mercy'),
              t(':')
            ),
            verse(21,
              t('But as truly as I live, all the earth shall be filled with the glory of the Lord.')
            ),
            verse(22,
              t('Because all those men which have seen my glory, and my miracles, which I did in Egypt and in the wilderness, and have '),
              hg('tempted me', 'tempt-lord-test'),
              t(' now these ten times, and have not hearkened to my voice;')
            ),
            verse(23,
              t('Surely they shall not see the land which I sware unto their fathers, neither shall any of them that '),
              hg('provoked me', 'provoked-rebellion'),
              t(' see it:')
            ),
            verse(24,
              t('But my servant Caleb, because he had another spirit with him, and hath followed me fully, him will I bring into the land whereinto he went; and his seed shall possess it.')
            ),
            verse(25,
              t('(Now the Amalekites and the Canaanites dwelt in the valley.) To morrow turn you, and get you into the wilderness by the way of the Red sea.')
            ),
            verse(26,
              t('And the Lord spake unto Moses and unto Aaron, saying,')
            ),
            verse(27,
              t('How long shall I bear with this evil congregation, which murmur against me? I have heard the murmurings of the children of Israel, which they murmur against me.')
            ),
            verse(28,
              t('Say unto them, As truly as I live, saith the Lord, as ye have spoken in mine ears, so will I do to you:')
            ),
            verse(29,
              t('Your carcases shall fall in this wilderness; and all that were numbered of you, according to your whole number, from twenty years old and upward, which have murmured against me,')
            ),
            verse(30,
              t('Doubtless ye shall not come into the land, concerning which I sware to make you dwell therein, save Caleb the son of Jephunneh and Joshua the son of Nun.')
            ),
            verse(31,
              t('But your little ones, which ye said should be a prey, them will I bring in, and they shall know the land which ye have despised.')
            ),
            verse(32,
              t('But as for you, your carcases, they shall fall in this wilderness.')
            ),
            verse(33,
              t('And your children shall wander in the wilderness '),
              hy('forty years, and bear your whoredoms', 'forty-years-yom-shanah'),
              t(', until your carcases be wasted in the wilderness.')
            ),
            verse(34,
              t('After the number of the days in which ye searched the land, even '),
              hy('forty days', 'yom-le-shanah-principle'),
              t(', each day for a year, shall ye bear your iniquities, even forty years, and ye shall know my breach of promise.')
            ),
            verse(35,
              t('I the Lord have said, I will surely do it unto all this evil congregation, that are gathered together against me: in this wilderness they shall be consumed, and there they shall die.')
            ),
          ],
        },
        {
          kind: 'hebrew',
          id: 'tempt-lord-test',
          title: 'Nasah — "to tempt, test, try"',
          script: 'נָסָה',
          translit: '<strong>nasah</strong> · to test; to tempt someone to sin; to strain a relationship',
          description:
            'When humans tempt God (as Israel does here), they are testing whether He is real, whether His word stands, whether He will keep His promise. It is a refusal to trust. God counts it ten times — once at Marah, once at Massah, once in the wilderness when they complained about food, and so on, and now this final time at Kadesh.',
        },
        {
          kind: 'commentary',
          id: 'pardoned-mercy',
          html:
            'God pardons. The judgment comes, but it is not annihilation. The people will live, but they will die in the wilderness. Their children will inherit the promise. Mercy and justice are held together in God&apos;s response.',
        },
        {
          kind: 'commentary',
          id: 'provoked-rebellion',
          html:
            'To "provoke" God means to push against Him deliberately, to test His patience. This is worse than stumbling into sin. It is a deliberate choice to doubt His word and live against it.',
        },
        {
          kind: 'commentary',
          id: 'forty-years-yom-shanah',
          html:
            'Forty years in the wilderness. The number 40 appears throughout Scripture as a period of testing and judgment. Jesus fasted 40 days in the wilderness. The earth was rained on for 40 days at the flood. But the principle here — that judgment will last as long as the rebellion lasted — introduces the prophetic framework that will echo through Daniel, Ezekiel, and Revelation.',
        },
        {
          kind: 'commentary',
          id: 'yom-le-shanah-principle',
          html:
            '"A day for a year" — <em>yom le-shanah</em> in Hebrew. The spies were in the land for 40 days; Israel will wander for 40 years. This becomes the foundational principle of biblical prophecy. Ezekiel 4:6 applies it explicitly to a siege: God tells Ezekiel to lie on his side bearing the iniquity of Judah, "a day for a year." Daniel 9 builds entire prophetic calendars on this principle — 70 weeks for 70 years of exile. [res:bible-odyssey-wilderness-generation]',
        },
        {
          kind: 'carry',
          html:
            'The principle of proportionality runs through God&apos;s judgment: the rebellion lasted 40 days of scouting and then one night of murmuring; the consequence lasts 40 years. It seems harsh until you realize it is also merciful. Those children who heard their parents murmur will grow up in the wilderness and learn a different kind of faith. They will see God provide manna, water, and protection for forty years. By the time they reach Canaan, they will know in their bones what unbelief costs, and they will be more ready to believe.',
        },
        {
          kind: 'reflection',
          id: 'reflection-consequences',
          prompt: 'What is a consequence you have experienced that taught you something about God&apos;s character in a way you couldn&apos;t learn any other way?',
        },
      ],
    },

    /* ─── Numbers 14:36–45 — The Death of the Spies and the Failed Attempt ─ */
    {
      ref: 'Numbers 14:36–45',
      title: 'Plague and a Rout',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            verse(36,
              t('And the men, which Moses sent to search the land, who returned, and made all the congregation to murmur against him, by bringing up a slander upon the land,')
            ),
            verse(37,
              t('Even those men that did bring up the evil report upon the land, died by the plague before the Lord.')
            ),
            verse(38,
              t('But Joshua the son of Nun, and Caleb the son of Jephunneh, which were of the men that went to search the land, lived still.')
            ),
            verse(39,
              t('And Moses told these sayings unto all the children of Israel: and the people mourned greatly.')
            ),
            verse(40,
              t('And they rose up early in the morning, and gat them up into the top of the mountain, saying, Lo, we be here, and will go up unto the place which the Lord hath promised: for we have sinned.')
            ),
            verse(41,
              t('And Moses said, Wherefore now do ye transgress the commandment of the Lord? but it shall not prosper.')
            ),
            verse(42,
              t('Go not up, for the Lord is not among you; that ye be not smitten before your enemies.')
            ),
            verse(43,
              t('For the Amalekites and the Canaanites are there before you, and ye shall fall by the sword: because ye are turned away from the Lord, therefore the Lord will not be with you.')
            ),
            verse(44,
              t('But they presumed to go up unto the hill: nevertheless the ark of the covenant of the Lord, and Moses, departed not out of the camp.')
            ),
            verse(45,
              t('Then the Amalekites and the Canaanites, which dwelt in that mountain, came down, and smote them, and discomfited them, even unto Hormah.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'spies-plague',
          html:
            'The ten spies who brought the bad report die immediately by plague. They die before the congregation so that Israel will see: the word that came out of their mouths brought death. False reports of God kill those who speak them and those who believe them.',
        },
        {
          kind: 'commentary',
          id: 'joshua-caleb-live',
          html:
            'Joshua and Caleb, the faithful scouts, live on. They alone of the adult generation will see the promised land. Their faith is not theoretical; it is vindicated by their survival.',
        },
        {
          kind: 'commentary',
          id: 'people-rise-too-late',
          html:
            'The next morning, the people rise early and try to go up anyway. They confess their sin: "we have sinned." But confession comes too late to change the judgment. They try to force their way into the land without the ark, without Moses, without God&apos;s presence. They are routed immediately. Presumption — acting as if you have God&apos;s favor when you do not — is always followed by a rout.',
        },
        {
          kind: 'christ',
          id: 'christ-joshua-rest',
          title: 'Christ Connection — Joshua as Type of Jesus, the Better Deliverer',
          html:
            'Hebrews 3–4 builds its entire warning against unbelief on this chapter[res:hebrews-3-4-intertextual]. "Let us therefore fear, lest, a promise being left us of entering into his rest, any of you should seem to come short of it" (Hebrews 4:1). Joshua (Yeshua in Hebrew, the same name as Jesus) led only a remnant into the promised rest. But Jesus is the greater Joshua who leads all who believe into the true rest of God — not geographic Canaan, but the presence of God Himself. The wilderness generation could not enter because of unbelief (Hebrews 3:19). But those who believe in Jesus enter the rest that remains.',
        },
        {
          kind: 'carry',
          html:
            'There are seasons when the door closes. The people were right at the edge of the promised land, and one moment of unbelief sealed their fate for forty years. But even then, God did not abandon them. He led them through the wilderness, and a new generation — shaped by watching their parents fail — would enter the land. If you are facing judgment for something, the question is not "can I go back?" but "what is God teaching the next generation through what I am experiencing?"',
        },
        {
          kind: 'reflection',
          id: 'reflection-rout',
          prompt: 'Have you tried to move forward in your own strength, without waiting for God&apos;s presence to lead you? What happened?',
        },
      ],
    },
  ],

  resources: [
    {
      id: 'sefaria-numbers-14',
      kind: 'study',
      source: 'Sefaria',
      label: 'Numbers 14',
      url: 'https://www.sefaria.org/Numbers.14',
      description: 'Full Hebrew text with English translation and classical Jewish commentary on Israel&apos;s refusal to enter the promised land.',
    },
    {
      id: 'hebrews-3-4-intertextual',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Numbers 14 ↔ Hebrews 3–4',
      url: 'https://intertextual.bible/text/numbers-14/hebrews-3',
      description: 'Cross-references showing how Hebrews treats Israel&apos;s wilderness generation as a warning against hardening the heart toward the rest in Christ.',
    },
    {
      id: 'bible-odyssey-wilderness-generation',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Wilderness Generation',
      url: 'https://www.bibleodyssey.org/passages/related-articles/wilderness-generation/',
      description: 'SBL overview of the forty-year wilderness period and its role as a testing ground for faith and obedience.',
    },
  ],
};
