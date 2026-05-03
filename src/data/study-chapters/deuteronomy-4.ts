import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Deuteronomy 4 — Moses calls Israel to obey and remember. The heart of the
 * chapter is this: God revealed Himself as a voice without form at Horeb,
 * precisely so He cannot be reduced to an image. The warning is stark — if you
 * make a graven image, you will be scattered. But the promise is equally clear —
 * seek Him with all your heart in exile, and you will find Him.
 *
 * The chapter closes with the cities of refuge, establishing mercy before judgment.
 * This is the law as it really works: judgment follows disobedience, but even the
 * cities that stand against you contain the possibility of finding safety.
 */
export const DEUTERONOMY_4: RichChapterContent = {
  bookSlug: 'deuteronomy',
  bookName: 'Deuteronomy',
  chapter: 4,

  estimatedMinutes: { beginner: 10, intermediate: 16, deep: 21 },
  intros: [
    'Deuteronomy 4 is Moses at the threshold. The generation that saw the wonders of Egypt and heard God speak at Sinai is about to die in the wilderness. A new generation will enter the land. And Moses stands to call them into covenant — not through fear, but through memory. He reminds them of what they have seen, and what they are about to forget.',
    'The chapter pivots on a single command: do not add to God&apos;s word, and do not diminish from it. Do not make an image of God, because you did not see any form at Horeb — only a voice. This refusal to image God is where Christ enters. In the New Testament, Paul will write that Jesus is &ldquo;the image of the invisible God&rdquo; — not an idol made by human hands, but God&apos;s own choice of how to reveal Himself in flesh.',
    'The threat is real. If you forget and make an image, God will scatter you among the nations. But even in that scattering, a door remains. Seek Him with all your heart, and you will find Him. The chapter closes with three cities of refuge — mercy institutions standing ready before judgment falls, showing us that God establishes a way back before the way is lost.',
  ],

  opener: {
    matchTitle: /mount.*sinai|horeb|moses.*commandment|torah/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share Deuteronomy 4',
    quote:
      'Moses commands Israel to keep the statutes God has given, never adding to them or taking away. God revealed Himself as a voice without form at Horeb. When you seek Him with all your heart, you will find Him.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Deuteronomy 4 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-deuteronomy-4',
      kind: 'study',
      source: 'Sefaria',
      label: 'Deuteronomy 4 — Covenant Teaching',
      url: 'https://www.sefaria.org/Deuteronomy.4',
      description: 'Hebrew commentaries on covenant renewal, idolatry warnings, and the exclusivity of God&apos;s word.',
    },
    {
      id: 'baal-peor-idolatry-bible-odyssey',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Baal-Peor Apostasy',
      url: 'https://www.bibleodyssey.org/dictionary/baal-peor/',
      description: 'Open-access entry on Israel&apos;s worship of Baal-Peor and God&apos;s judgment as a warning against idolatry.',
    },
    {
      id: 'cities-refuge-ancient-laws-sbl',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Cities of Refuge',
      url: 'https://www.bibleodyssey.org/dictionary/city-of-refuge/',
      description: 'Biblical and archaeological study of asylum cities in ancient Israel and their parallel in ANE law codes.',
    },
  ],

  sections: [
    /* ─── Deuteronomy 4:1–2 — Hearken and Keep ────────────────────────────── */
    {
      ref: 'Deuteronomy 4:1–2',
      title: 'Hearken and Keep',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 1,
              spans: [
                t('Now therefore '),
                hy('hearken', 'hebrew-shema'),
                t(', O Israel, unto the statutes and unto the judgments, which I teach you, for to do them, that ye may live, and go in and possess the land which the LORD God of your fathers giveth you.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Ye shall not '),
                hg('add unto the word', 'c-add-diminish'),
                t(' which I command you, neither shall ye diminish ought from it, that ye may keep the commandments of the LORD your God which I command you.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shema',
          title: 'Shema — &ldquo;hear, hearken, obey&rdquo;',
          script: 'שָׁמַע',
          translit: '<strong>shema</strong> · to hear with the ear and heart; to listen and act',
          description:
            'The word does not mean passive hearing. To shema is to hear and to answer, to hear and to change. This is obedience listening — the ear and the will working together.',
        },
        {
          kind: 'commentary',
          id: 'c-add-diminish',
          html:
            'Moses sets up a boundary that will run through the entire Bible: <em>add not, take not away.</em> God&apos;s word is to be received as a whole, not rewritten by human preference. To add is to assume you can improve on what God said. To diminish is to assume you can soften what God said. Both are refusals to let God&apos;s word be what it is.',
        },
        {
          kind: 'carry',
          html:
            'You hold God&apos;s word in a kind of trust. Not as a text to be edited by your own convenience, not as something to be stretched into meanings it doesn&apos;t carry, but as something to be heard and kept. Where are you tempted to add your own spin to what God has said — to make His word softer, easier, more accommodating to your own wishes? Where are you tempted to subtract — to ignore the parts that cost something?',
        },
        {
          kind: 'reflection',
          id: 'deut4-add-diminish',
          prompt:
            'Think of one command of God that you find yourself either softening or ignoring. What would it look like to hear it fresh, without adding or diminishing?',
        },
      ],
    },

    /* ─── Deuteronomy 4:3–4 — The Baal-Peor Warning ────────────────────────── */
    {
      ref: 'Deuteronomy 4:3–4',
      title: 'The Cost of Forgetting',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 3,
              spans: [
                t('Your eyes have seen what the LORD did because of Baal-peor: for all the men that followed Baal-peor, the LORD thy God hath destroyed them from among you.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('But ye that did '),
                hg('cleave unto the LORD', 'c-cleave'),
                t(' your God are alive every one of you this day.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-cleave',
          html:
            'The word <em>cleave</em> appears only a few times in Scripture. It is the language of covenant loyalty — to stick to someone through everything. At Baal-peor, those who <em>cleaved</em> to God lived. Those who turned aside were destroyed. The choice is binary, and the stakes are absolute.',
        },
        {
          kind: 'commentary',
          id: 'c-baal-lesson',
          html:
            'Baal-peor is not ancient history for this generation. Some of them were alive when it happened. They watched friends and relatives die. They watched God&apos;s judgment fall. And now Moses is saying: you know what happens when you abandon covenant and chase other gods. Your eyes have seen it. Remember it, and do not repeat it.',
        },
        {
          kind: 'christ',
          id: 'christ-cleave',
          title: 'Christ Connection — Clinging to the True Covenant',
          html:
            'Jesus teaches His disciples: &ldquo;Abide in me, and I in you&rdquo; (John 15:4). The Greek word is <em>meno</em>, which carries the same force as the Hebrew <em>dbaq</em> — to dwell, to remain, to stick. The warning of Baal-peor shows that covenant with false gods leads to death. Christ offers a covenant whose fruit is life: &ldquo;If ye abide in my word… ye shall know the truth, and the truth shall make you free&rdquo; (John 8:31–32).',
        },
        {
          kind: 'carry',
          html:
            'You have seen things too — moments when loyalty to God cost you something, and moments when turning aside seemed easier. You know, as this generation knew, that the cost of forgetting is real. The question is not whether you can afford to remember. The question is: can you afford to forget?',
        },
        {
          kind: 'reflection',
          id: 'deut4-baal',
          prompt:
            'Where have you seen the cost of abandoning covenant loyalty? What does it mean to you personally to \"cleave unto the Lord\" in that same place?',
        },
      ],
    },

    /* ─── Deuteronomy 4:5–8 — Wisdom in Keeping ──────────────────────────── */
    {
      ref: 'Deuteronomy 4:5–8',
      title: 'Wisdom in Keeping',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 5,
              spans: [
                t('Behold, I have taught you statutes and judgments, even as the LORD my God commanded me, that ye should do so in the land whither ye go to possess it.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('Keep therefore and do them; for this is your wisdom and your '),
                hg('understanding in the sight of the nations', 'c-witness'),
                t(', which shall hear all these statutes, and say, Surely this great nation is a wise and understanding people.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('For what nation is there so great, who hath God so nigh unto them, as the LORD our God is in all things that we call upon him for?'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And what nation is there so great, that hath statutes and judgments so righteous as all this law, which I set before you this day?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-witness',
          html:
            'The nations will watch Israel not because Israel is strong or rich, but because Israel keeps the covenant. There is something beautiful — a kind of wisdom — in a people who submit themselves to a law that is righteous. And notice: this is not private obedience. It is visible. The world sees it. And in seeing it, the world sees the face of the God Israel serves.',
        },
        {
          kind: 'commentary',
          id: 'c-god-near',
          html:
            'No other nation can say this: your God is near to you whenever you call. The God of the nations is distant, or cruel, or demanding sacrifices of human blood. But Israel&apos;s God draws near in response to prayer. He listens. He answers. That intimacy is Israel&apos;s greatest treasure, not its land or its armies.',
        },
        {
          kind: 'carry',
          html:
            'Your obedience to God is not private. People are watching — not in judgment, but in curiosity. They want to know what it looks like to live under a covenant with the one true God. The world is looking for wisdom. Where you keep God&apos;s word faithfully, the world will see something it cannot produce on its own: a life that is centered, that is at peace, that calls on God and finds Him near.',
        },
        {
          kind: 'reflection',
          id: 'deut4-wisdom',
          prompt:
            'What does your faithfulness to God&apos;s word show the people around you? What would change if they saw you keeping His statutes not with gritted teeth, but with joy?',
        },
      ],
    },

    /* ─── Deuteronomy 4:9–20 — Voice Without Form ────────────────────────── */
    {
      ref: 'Deuteronomy 4:9–20',
      title: 'Voice Without Form',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 9,
              spans: [
                t('Only take heed to thyself, and keep thy soul diligently, lest thou forget the things which thine '),
                hy('eyes have seen', 'c-remember-eyes'),
                t(', and lest they depart from thy heart all the days of thy life: but teach them thy sons, and thy sons&apos; sons;'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Specially the day that thou stoodest before the LORD thy God in Horeb, when the LORD said unto me, '),
                hp('Gather me the people together', 'christ-gather'),
                t(', and I will make them hear my words, that they may learn to fear me all the days that they shall live upon the earth, and that they may teach their children.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-remember-eyes',
          html:
            'Memory is the work of the soul. Moses is saying: do not let this slip. Do not allow your eyes to deceive you into thinking you imagined it. You stood at Horeb. You heard the voice of God. And you did not see Him — only heard Him. That distinction, sustained in memory, is the antidote to idolatry.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 11,
              spans: [
                t('And ye came near and stood under the mountain; and '),
                t('the mountain burned'),
                t(' with fire unto the midst of heaven, with darkness, clouds, and thick darkness.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And the LORD spake unto you out of the midst of the fire: ye heard the '),
                hy('voice of the words', 'hebrew-temunah'),
                t(', but '),
                hg('saw no manner of similitude', 'c-no-similitude'),
                t('; only ye heard a voice.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-temunah',
          title: 'Temunah — &ldquo;form, likeness, similitude&rdquo;',
          script: 'תְּמוּנָה',
          translit: '<strong>temunah</strong> · the visual form or shape of something; a representation',
          description:
            'God made a point to reveal Himself as pure voice, not as form. He could have appeared in a burning bush shaped like a man, or a pillar of fire with features. Instead: fire without form, voice without shape. The refusal to be imaged is the refusal to be controlled.',
        },
        {
          kind: 'commentary',
          id: 'c-no-similitude',
          html:
            'This is emphatic. The text repeats it: no manner of similitude, only a voice. The reason is not ancient mysticism. It is practical: if you had seen a form, you would carve it. You would build a statue and say, &ldquo;This is God.&rdquo; And then you would stop looking for the real God and start bowing to the piece of wood. So God reveals Himself in a way that cannot be imaged — as a presence you can only hear and obey.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 13,
              spans: [
                t('And he declared unto you his covenant, which he commanded you to perform, even '),
                hy('ten commandments', 'c-decalogue'),
                t('; and he wrote them upon two tables of stone.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-decalogue',
          html:
            'The covenant is not a mystery or a secret. It is written. It is public. Ten words that the whole nation heard, and that Moses now brings to a second generation. The law is the covenant made visible and audible — God&apos;s word in words they can understand.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 14,
              spans: [
                t('And the LORD commanded me at that time to teach you statutes and judgments, that ye might do them in the land whither ye go over to possess it.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('Take ye therefore good heed unto yourselves; for ye '),
                hg('saw no manner of similitude', 'c-emphasis-no-image'),
                t(' on the day that the LORD spake unto you in Horeb out of the midst of the fire:'),
              ],
            },
            {
              number: 16,
              spans: [
                t('Lest ye corrupt yourselves, and make you a '),
                hy('graven image', 'hebrew-pesel'),
                t(', the similitude of any figure, the likeness of male or female,'),
              ],
            },
            {
              number: 17,
              spans: [
                t('The likeness of any beast that is on the earth, the likeness of any winged fowl that flieth in the air,'),
              ],
            },
            {
              number: 18,
              spans: [
                t('The likeness of any thing that creepeth on the ground, the likeness of any fish that is in the waters beneath the earth:'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And lest thou lift up thine eyes unto heaven, and when thou seest the '),
                hy('sun, and the moon, and the stars', 'c-lights'),
                t(', even all the host of heaven, shouldest be driven to worship them, and serve them, which the LORD thy God hath divided unto all nations under the whole heaven.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-pesel',
          title: 'Pesel — &ldquo;graven image&rdquo;',
          script: 'פֶּסֶל',
          translit: '<strong>pesel</strong> · something carved or cut from stone or wood; an idol',
          description:
            'The prohibition is total: no carved likeness of any creature — human, animal, bird, fish. Why? Because if you carve something, you can control it, move it, hide it. You can make God into a possession rather than a presence.',
        },
        {
          kind: 'commentary',
          id: 'c-emphasis-no-image',
          html:
            'Moses repeats it: no manner of similitude. It is the hinge of the entire chapter. God revealed Himself as voice because voice cannot be carved. Voice is always alive, always present, always demanding response. An image can sit on a shelf. A voice calls.',
        },
        {
          kind: 'commentary',
          id: 'c-lights',
          html:
            'Even the sun, moon, and stars — the most beautiful and powerful things in the sky — are not to be worshiped. They are creatures God has made and divided to the nations. In surrounding cultures, the sun and moon were gods. The text is saying: no. God is the one who made the sun and moon, and He is not visible in the way they are visible. He is the invisible God, revealed by His word.',
        },
        {
          kind: 'christ',
          id: 'christ-gather',
          title: 'Christ Connection — The Image Without Idolatry',
          html:
            'The law says: do not make an image of God. He cannot be imaged. And then the New Testament says that Jesus is &ldquo;the image of the invisible God&rdquo; (Col. 1:15). The difference is crucial: Jesus is not an image carved by human hands. He is God&apos;s own chosen self-revelation — not a picture of God, but God Himself in flesh. When you look at Jesus, you are not looking at an idol. You are listening to the voice of God in a form that can be heard and touched and followed. The prohibition against graven images was always pointing to this — a day when God would reveal Himself in person, not through human invention.',
        },
        {
          kind: 'carry',
          html:
            'You live in a world of images. Photographs, screens, statues, paintings — everywhere you turn, something is being carved and shaped and offered to you. The temptation to bow down is not ancient; it is right now. Maybe not to wooden idols, but to images of success, beauty, power, status. Jesus calls you to something else: to hear the voice of the living God and follow the one who cannot be reduced to a picture. To let Him remain alive and present and demanding, rather than fixing Him into a form you can control.',
        },
        {
          kind: 'reflection',
          id: 'deut4-no-image',
          prompt:
            'What image of God are you tempted to carve — a god who is smaller, safer, more convenient than the one revealed in Scripture? What would it look like to let Him remain wild and uncapturable, heard in His word rather than fixed in your imagination?',
        },
        {
          kind: 'artwork',
          matchTitle: /horeb|sinai.*fire|moses.*tablets|stone|covenant/i,
          caption: 'Deuteronomy 4:9–20 · Voice Without Form',
        },
      ],
    },

    /* ─── Deuteronomy 4:21–31 — Scattering and the Promise ─────────────────── */
    {
      ref: 'Deuteronomy 4:21–31',
      title: 'Scattering and Seeking',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 25,
              spans: [
                t('When thou shalt beget children, and children&apos;s children, and ye shall have remained long in the land, and shall '),
                hg('corrupt yourselves', 'c-corruption'),
                t(', and make a graven image, or the likeness of any thing, and shall do evil in the sight of the LORD thy God, to provoke him to anger:'),
              ],
            },
            {
              number: 26,
              spans: [
                t('I call heaven and earth to witness against you this day, that ye shall soon utterly '),
                hg('perish from off the land', 'c-scattered'),
                t(' whereunto ye go over Jordan to possess it; ye shall not prolong your days upon it, but shall utterly be destroyed.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And the LORD shall '),
                hg('scatter you among the nations', 'c-scatter-nations'),
                t(', and ye shall be left few in number among the heathen, whither the LORD shall lead you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-corruption',
          html:
            'Corruption comes slowly. Not in the first generation, but when the grandchildren of Horeb take the land for granted and carve their own gods. This is why the command to remember is so important. Forgetting leads to corruption. Corruption leads to exile.',
        },
        {
          kind: 'commentary',
          id: 'c-scattered',
          html:
            'The threat is real and specific. You will not be killed; you will be driven out. You will be forced to watch the land given to your ancestors pass to others. This is the judgment that falls when a people abandon their covenant.',
        },
        {
          kind: 'commentary',
          id: 'c-scatter-nations',
          html:
            'Scattering is not merely punishment; it is separation from the land, from the temple, from the ordinary rhythms of covenant life. You will be alone, surrounded by nations that do not know your God. And in that loneliness, you will understand what you threw away.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 28,
              spans: [
                t('And there ye shall serve gods, the work of men&apos;s hands, wood and stone, which neither see, nor hear, nor eat, nor smell.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('But if from thence thou shalt '),
                hp('seek the LORD thy God', 'christ-seek-find'),
                t(', thou shalt find him, if thou seek him with all thy heart and with all thy soul.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('When thou art in tribulation, and all these things are come upon thee, even in the latter days, if thou turn to the LORD thy God, and shalt be obedient unto his voice;'),
              ],
            },
            {
              number: 31,
              spans: [
                t('(For the LORD thy God is a merciful God;) he will not forsake thee, neither destroy thee, nor forget the covenant of thy fathers which he sware unto them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-merciful-god',
          html:
            'Even in exile, even after breaking covenant, there is a way back. And the way back is through the same mouth that called them at Horeb: seek Him with all your heart and all your soul. And He will answer. Because He is merciful. The greatest word in this passage is not scattered or destroy or utterly perish. It is merciful. The God who scatters is the God who does not forget.',
        },
        {
          kind: 'christ',
          id: 'christ-seek-find',
          title: 'Christ Connection — Seek and You Will Find',
          html:
            'Jesus teaches His disciples: &ldquo;Ask, and it shall be given you; seek, and ye shall find&rdquo; (Matt. 7:7). The promise Deuteronomy makes — that if you seek God with all your heart you will find Him — is the foundation of the Gospel. Repentance is not punishment. It is a door opening. The exile is real; the scattering is real. But the promise that follows is equally real: turn and seek, and you will find. God is not hidden. He is waiting.',
        },
        {
          kind: 'carry',
          html:
            'If you have wandered, if you have made other gods, if you have been scattered — this is the door. Seek God with all your heart and all your soul. Not halfway. Not when it is convenient. But as though your life depends on it, because it does. And the God you will find is merciful. Not willing to forget you, not willing to let you go, willing to meet you in the very exile you created.',
        },
        {
          kind: 'reflection',
          id: 'deut4-seek-find',
          prompt:
            'When you have turned away from God, what has it taken for you to turn back? What would change if you believed now, in this moment, that seeking Him with all your heart will result in finding Him?',
        },
      ],
    },

    /* ─── Deuteronomy 4:41–43 — Cities of Refuge ─────────────────────────── */
    {
      ref: 'Deuteronomy 4:41–43',
      title: 'Cities of Refuge',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 41,
              spans: [
                t('Then Moses severed '),
                hg('three cities', 'c-three-cities'),
                t(' on this side Jordan toward the sunrising;'),
              ],
            },
            {
              number: 42,
              spans: [
                t('That the slayer might flee thither, which should kill his neighbour unawares, and hated him not in times past; and that fleeing unto one of these cities he might live:'),
              ],
            },
            {
              number: 43,
              spans: [
                t('Namely, '),
                hy('Bezer', 'c-bezer'),
                t(' in the wilderness, in the plain country, of the Reubenites; and '),
                hy('Ramoth', 'c-ramoth'),
                t(' in Gilead, of the Gadites; and '),
                hy('Golan', 'c-golan'),
                t(' in Bashan, of the Manassites.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-three-cities',
          html:
            'Three cities east of the Jordan, set apart for refuge. The text is clear: these are not for the guilty. They are for those who killed without intent, without hatred — those who committed manslaughter, not murder. And yet they need refuge, because the family of the dead will seek vengeance. So the law creates a space where accidentally becoming a killer does not have to mean becoming a hunted person forever.',
        },
        {
          kind: 'commentary',
          id: 'c-bezer',
          html:
            'Bezer means &ldquo;refuge, safety.&rdquo; The city&apos;s name itself is a promise. When you flee there, you are fleeing to safety. The city does not ask whether you deserve it. It welcomes the one who needs refuge.',
        },
        {
          kind: 'commentary',
          id: 'c-ramoth',
          html:
            'Ramoth means &ldquo;heights.&rdquo; Golan means &ldquo;exile, passage.&rdquo; These names are not accidents. The refuge cities are geographically and symbolically placed — high places, passageways, places where a person fleeing does not have to hide or justify their flight.',
        },
        {
          kind: 'commentary',
          id: 'c-golan',
          html:
            'Notice the timing: these cities are established before the people even enter the land. Mercy is built into the structure before judgment has a chance to fall. The law knows that blood will be spilled — not always through malice, but through accident. And before any of that happens, God provides a way out.',
        },
        {
          kind: 'christ',
          id: 'christ-refuge',
          title: 'Christ Connection — The True Refuge',
          html:
            'Psalm 27:5 speaks of being hidden &ldquo;in the secret of his tabernacle,&rdquo; and Psalm 46:1 calls God &ldquo;our refuge and strength.&rdquo; The cities of refuge are temporary shelters in the wilderness. But Jesus offers something permanent: &ldquo;Come unto me, all ye that labour and are heavy laden, and I will give you rest&rdquo; (Matt. 11:28). And Hebrews applies the imagery directly: those who flee to the refuge cities are a picture of those who &ldquo;lay hold upon the hope set before us&rdquo; — that hope being Christ (Heb. 6:18–19). You are not fleeing to a city. You are fleeing to a person.',
        },
        {
          kind: 'carry',
          html:
            'Your sin may not have been intentional. You may have stumbled into something you never meant to do, and now there is brokenness you cannot undo. The law&apos;s answer is not &ldquo;you deserve death.&rdquo; The law&apos;s answer is &ldquo;there is a city.&rdquo; Not a city to hide in forever, but a safe place to stand while the heat cools. While the truth comes out. While the judgment is resolved. God builds mercy into the structure of justice itself.',
        },
        {
          kind: 'reflection',
          id: 'deut4-refuge',
          prompt:
            'When you have made a mistake you cannot undo, where have you found refuge? What does it mean to you that God has established these safe places not after judgment falls, but before?',
        },
        {
          kind: 'artwork',
          matchTitle: /refuge|israel.*land|city|jordan|wilderness/i,
          caption: 'Deuteronomy 4:41–43 · Cities of Refuge',
        },
      ],
    },
  ],
};
