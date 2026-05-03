import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Deuteronomy 2 — After 38 years of wandering, the Lord commands Israel to turn
 * northward from Mount Seir. The chapter rehearses God&apos;s faithfulness in the
 * wilderness, His sovereignty over the nations (Edom, Moab, Ammon, giants), and
 * the conquest of Sihon at Heshbon. Herem — total devotion to destruction — frames
 * the judgment on Amorite iniquity. The conquest begins.
 *
 * CORE THEMES:
 * - God&apos;s 38-year faithfulness: "thou hast lacked nothing"
 * - God&apos;s sovereignty over all nations: He apportioned Seir, Moab, Ammon
 * - Sihon&apos;s hardened heart AND his refusal: both true simultaneously
 * - Herem as God&apos;s judgment, after long iniquity (Genesis 15:16 fulfilled)
 * - The conquest as a foreshadow of final judgment
 */
export const DEUTERONOMY_2: RichChapterContent = {
  bookSlug: 'deuteronomy',
  bookName: 'Deuteronomy',
  chapter: 2,

  estimatedMinutes: { beginner: 9, intermediate: 13, deep: 18 },
  intros: [
    'Deuteronomy 2 opens with a turning point. After 38 years of circling Mount Seir, the Lord tells Moses, "Ye have compassed this mountain long enough: turn you northward." The wilderness years are ending. The generation that refused to enter Canaan is dying away. A new generation is stepping toward the land.',
    'But the journey north is not a direct line. Israel must pass through the territories of three nations — Edom, Moab, and Ammon — all descended from Abraham&apos;s family (Esau and Lot). The Lord explicitly forbids contention with them. Each nation was given its land by God Himself. The contrast is stark: these lands are off-limits; Canaan is Israel&apos;s. God apportions territories. His will determines borders.',
    'Then comes a catalog of giants — the Emim, Anakim, Horim, Zamzummim — peoples God dispossessed so that other nations could possess their land. This is the precedent for what He will do for Israel. And finally, Israel defeats Sihon at Heshbon. The conquest begins. Everything hinges on God&apos;s sovereign purpose in history.',
  ],

  bottomShare: {
    label: 'Share Deuteronomy 2',
    quote:
      'After 38 years in the wilderness, God commanded Israel to turn northward. He reminded them of His faithfulness: "thou hast lacked nothing." He apportioned lands to Edom, Moab, and Ammon. When Sihon refused passage, God hardened his spirit and Israel defeated him at Heshbon. The conquest began.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Deuteronomy 2 · Study Guide',
  },

  sections: [
    /* ─── Deuteronomy 2:1–3 — The Turn Northward ─────────────────────────────── */
    {
      ref: 'Deuteronomy 2:1–3',
      title: 'The Turn Northward',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(1,
              t('Then we turned, and took our journey into the wilderness by the way of the Red sea, as the Lord spake unto me: and we '),
              hg('compassed mount Seir', 'compass-mount-seir'),
              t(' many days.')
            ),
            verse(2,
              t('And the Lord spake unto me, saying,')
            ),
            verse(3,
              t('Ye have '),
              hy('compassed this mountain long enough', 'compassed-long-enough'),
              t(': '),
              hp('turn you northward', 'turn-northward'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'compass-mount-seir',
          html:
            'For 38 years the people have circled this mountain. It is not punishment alone — it is the natural consequence of unbelief. A journey that should have taken weeks has stretched into four decades. The desert became their classroom in God&apos;s faithfulness.',
        },
        {
          kind: 'commentary',
          id: 'compassed-long-enough',
          html:
            'The Lord Himself speaks the words: enough. He is not saying the people have learned everything they need to learn. He is saying the time of wandering is finished. The old generation has passed. The promise is about to be fulfilled.',
        },
        {
          kind: 'commentary',
          id: 'turn-northward',
          html:
            'North is the direction of Canaan. This is the moment — after 38 years of circling, God commands forward movement. The change is not gradual or tentative. It is a direct command: "Turn northward." The wilderness years are ending.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes God keeps us in a season longer than we expect. Not because He is indifferent to our desire to move forward, but because the old self — the self that would not believe, that would not enter — needs time to die. The turn comes when He says it comes. Until then, the circling is itself His care. When He says "Turn," you turn.',
        },
        {
          kind: 'reflection',
          id: 'reflection-turn',
          prompt:
            'Have you been in a season of circling — waiting, going in circles, unable to move forward? What might God be waiting for before He says "Turn northward"?',
        },
      ],
    },

    /* ─── Deuteronomy 2:4–7 — Esau&apos;s Land; God&apos;s Faithfulness ──────────────── */
    {
      ref: 'Deuteronomy 2:4–7',
      title: 'Esau&apos;s Land; God&apos;s Forty-Year Care',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(4,
              t('And command thou the people, saying, Ye are to pass through the coast of your brethren the children of Esau, which dwell in Seir; and they shall be afraid of you: take ye good heed therefore:')
            ),
            verse(5,
              t('Meddle not with them; for I will not give you of their land, no, not so much as a foot breadth; because '),
              hy('I have given mount Seir unto Esau', 'seir-to-esau'),
              t(' for a possession.')
            ),
            verse(6,
              t('Ye shall '),
              hg('buy meat of them for money', 'buy-food'),
              t(', that ye may eat; and ye shall also '),
              hg('buy water of them for money', 'buy-water'),
              t(', that ye may drink.')
            ),
            verse(7,
              t('For '),
              hp('the Lord thy God hath blessed thee in all the works of thy hand', 'god-blessed-work'),
              t(': he '),
              hp('knoweth thy walking through this great wilderness', 'god-knows-walking'),
              t(': these forty years '),
              hp('the Lord thy God hath been with thee', 'god-with-thee'),
              t('; thou hast '),
              hy('lacked nothing', 'lacked-nothing'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'seir-to-esau',
          html:
            'This is a shocking statement. The Lord explicitly gave Mount Seir to Esau — the firstborn son Jacob supplanted. To Edom, the nation born of Esau&apos;s line. Not to Israel. This is God&apos;s sovereignty made visible: He does not belong to Israel alone. He apportions the earth as He wills, and His will can include giving good land to those outside the covenant.',
        },
        {
          kind: 'hebrew',
          id: 'lacked-nothing',
          title: 'Chasar — to lack, be in want',
          script: 'חָסַר',
          translit: '<strong>chasar</strong> · to lack, to be without, to want',
          description:
            'This is the word that summarizes the entire wilderness experience. For forty years, despite the hardship, despite the circling, despite the rebellion and judgment, Israel lacked nothing. Not manna, not water, not guidance, not God&apos;s presence. This is the measure of covenant faithfulness.',
        },
        {
          kind: 'commentary',
          id: 'buy-food',
          html:
            'Israel is not to take the land of Edom, but they are to buy from the people who live there. They are to use money, to trade fairly, to respect the sovereignty of another nation. They are not the only people on earth.',
        },
        {
          kind: 'commentary',
          id: 'buy-water',
          html:
            'Water — the most precious resource in the desert — is to be purchased. This is practical humility. Israel has been delivered, but they remain dependent on provision, on trade, on the cooperation of others. The conquest is not yet a license for taking.',
        },
        {
          kind: 'commentary',
          id: 'god-blessed-work',
          html:
            'The blessing is not abstract. It is concrete: in the works of thy hand. Whatever Israel has done, whatever effort they have made, God has blessed it. The work itself has been fruitful because God has been with them.',
        },
        {
          kind: 'commentary',
          id: 'god-knows-walking',
          html:
            'Not merely "God walked with you," but "He knoweth thy walking." He knows the pain of each step, the hunger, the thirst, the faithlessness, the faith. He is not distant; He knows the territory of your journey because He has been there.',
        },
        {
          kind: 'commentary',
          id: 'god-with-thee',
          html:
            'This is the gospel of Deuteronomy: the Lord thy God hath been with thee. Presence is the promise. Not comfort in the way we expect it, not the absence of hardship, but the unbroken presence of God Himself.',
        },
        {
          kind: 'christ',
          id: 'christ-presence',
          title: 'Christ Connection — The God Who Walks With Us',
          html:
            'Jesus picks up this theme in Matthew 28:20: "Lo, I am with you always, even unto the end of the world." Immanuel — God with us — is the promise running through all of Scripture. Israel in the wilderness knew this presence. The disciples knew it. And we are invited into the same covenant promise: the living God, walking with us through whatever wilderness we face, providing what we need, blessing the work of our hands.',
        },
        {
          kind: 'carry',
          html:
            'When you look back on a hard season — a time when you had to trust, when you had few options, when you had to depend on God&apos;s provision — can you see His hand? He knoweth thy walking. Not your success, not your comfort, but your actual journey through the difficulty. And if He has been with you through the wilderness, He is with you now.',
        },
        {
          kind: 'reflection',
          id: 'reflection-lacked-nothing',
          prompt:
            'Over the last year, what have you wanted that you lacked? And in looking back, what do you see you actually never lacked — what provision did you not see coming until it was already there?',
        },
      ],
    },

    /* ─── Deuteronomy 2:8–15 — Moab and Ammon; The Giants ───────────────── */
    {
      ref: 'Deuteronomy 2:8–15',
      title: 'Moab and Ammon; The Giants of the Past',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(8,
              t('And when we passed by from our brethren the children of Esau, which dwelt in Seir, by the way of the plain from Elath, and from Ezion-gaber, we turned and passed by the way of the wilderness of Moab.')
            ),
            verse(9,
              t('And the Lord said unto me, Distress not the Moabites, neither contend with them in battle: for I will not give thee of their land for a possession; because '),
              hy('I have given Ar unto the children of Lot', 'ar-to-lot'),
              t(' for a possession.')
            ),
            verse(10,
              t('The '),
              hg('Emim', 'emim-giants'),
              t(' dwelt therein in times past, a people great, and many, and tall, as the '),
              hg('Anakim', 'anakim-giants'),
              t(';')
            ),
            verse(11,
              t('Which also were accounted '),
              hg('giants, as the Anakim', 'giants-same-class'),
              t('; but the Moabites call them Emim.')
            ),
            verse(12,
              t('The '),
              hg('Horim', 'horim-giants'),
              t(' also dwelt in Seir beforetime; but the children of Esau succeeded them, when they had destroyed them before them, and dwelt in their stead; as Israel did unto the land of his possession, which the Lord gave unto them.')
            ),
            verse(13,
              t('Now rise up, said I, and get you over the brook Zered. And we went over the brook Zered.')
            ),
            verse(14,
              t('And the space in which we came from Kadesh-barnea, until we were come over the brook Zered, was thirty and eight years; until all the generation of the men of war were wasted out from among the host, as the Lord sware unto them.')
            ),
            verse(15,
              t('For indeed the hand of the Lord was against them, to destroy them from among the host, until they were consumed.')
            ),
          ],
        },
        {
          kind: 'hebrew',
          id: 'emim-giants',
          title: 'Emim — the terrible ones',
          script: 'אֵמִים',
          translit: '<strong>Emim</strong> · from emah, "terror"; the formidable ones',
          description:
            'The Emim were giants inhabiting Moab before the Moabites. Their name itself — "the terrors" — speaks to their reputation. Yet they are gone. Their land is now held by descendants of Lot. This is the pattern God will repeat for Israel.',
        },
        {
          kind: 'commentary',
          id: 'ar-to-lot',
          html:
            'Just as Seir was given to Esau, and Edom took it, Ar was given to Lot&apos;s children, and Moab dwells there. The Lord does not belong to Israel alone. His apportionment of the earth predates Israel&apos;s claim to Canaan.',
        },
        {
          kind: 'hebrew',
          id: 'anakim-giants',
          title: 'Anakim — the tall ones',
          script: 'עֲנָקִים',
          translit: '<strong>Anakim</strong> · from anak, "long-necked"; the giants of Canaan',
          description:
            'The Anakim are the giants Israel will later face in Canaan. Here they are mentioned as a comparison: the Emim were like the Anakim in size and terror. This establishes a parallel: as the Moabites replaced the Emim, so Israel will replace the Anakim.',
        },
        {
          kind: 'commentary',
          id: 'giants-same-class',
          html:
            'The text emphasizes the comparison. These were not small people. The Emim were as tall, as great, as numerous as the Anakim. Yet they are gone — dispossessed, replaced. The implication is clear: the giants of Canaan will also fall.',
        },
        {
          kind: 'hebrew',
          id: 'horim-giants',
          title: 'Horim — troglodytes (cave-dwellers)',
          script: 'חרִים',
          translit: '<strong>Horim</strong> · those dwelling in caves; often associated with Edom&apos;s ancient inhabitants',
          description:
            'The Horim dwelt in Seir before the Edomites (Esau&apos;s descendants) took it. Each nation dispossessed a former people. This is the rhythm of history: God prepares the way by removing those who came before.',
        },
        {
          kind: 'commentary',
          id: 'giants-same-class',
          html:
            'The parallels pile up: Emim displaced by Moabites, Horim displaced by Edomites, Anakim will be displaced by Israel. The giants are not invincible. They are real, they are terrifying, but they are mortal. God has been displacing them for generations. Israel is not the first, and the way has been prepared.',
        },
        {
          kind: 'carry',
          html:
            'When you face something that feels impossibly large — a fear, an obstacle, an enemy — remember that this is not the first time God has faced such things in history. The Emim looked invincible once. The Horim held their land. But God moved them aside for others, and He moved them aside because the time had come. The giants in your path are not the end of the story.',
        },
        {
          kind: 'reflection',
          id: 'reflection-giants',
          prompt:
            'What giants — what fears or obstacles that seem insurmountable — are you facing right now? What would it mean to trust that God has already been at work on your behalf?',
        },
      ],
    },

    /* ─── Deuteronomy 2:16–25 — Ammon; Moses Sends Messengers ────────────── */
    {
      ref: 'Deuteronomy 2:16–25',
      title: 'Ammon; Sihon&apos;s Refusal Foretold',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(16,
              t('So it came to pass, when all the men of war were consumed and dead from among the people,')
            ),
            verse(17,
              t('That the Lord spake unto me, saying,')
            ),
            verse(18,
              t('Thou art to pass over through Ar, the coast of Moab, this day:')
            ),
            verse(19,
              t('And when thou comest nigh over against the children of Ammon, distress them not, nor meddle with them: for I will not give thee of the land of the children of Ammon any possession; because '),
              hy('I have given it unto the children of Lot', 'ammon-to-lot'),
              t(' for a possession.')
            ),
            verse(20,
              t('(That also was accounted a land of giants: giants dwelt therein in old time; and the Ammonites call them '),
              hg('Zamzummim', 'zamzummim-giants'),
              t(';')
            ),
            verse(21,
              t('A people great, and many, and tall, as the Anakim; but the Lord destroyed them before them; and they succeeded them, and dwelt in their stead:')
            ),
            verse(22,
              t('As he did to the children of Esau, which dwelt in Seir, when he destroyed the Horim before them; and they succeeded them, and dwelt in their stead even unto this day:')
            ),
            verse(23,
              t('And the '),
              hg('Avim', 'avim-ancient'),
              t(' which dwelt in Hazerim, even unto Azzah, the Caphtorims which came forth out of Caphtor, destroyed them, and dwelt in their stead.)')
            ),
            verse(24,
              t('Rise ye up, take your journey, and pass over the river Arnon: behold, I have given into thine hand Sihon the Amorite, king of Heshbon, and his land: begin to possess it, and contend with him in battle.')
            ),
            verse(25,
              t('This day will I begin to put the dread of thee and the fear of thee upon all nations that are under the whole heaven, who shall hear report of thee, and shall tremble, and be in anguish because of thee.')
            ),
          ],
        },
        {
          kind: 'hebrew',
          id: 'ammon-to-lot',
          title: 'Ammon — Lot&apos;s descendants',
          script: 'עַמּוֹן',
          translit: '<strong>Ammon</strong> · "my people"; named after Lot&apos;s younger son',
          description:
            'Ammon, like Moab, descends from Lot. The Lord forbids Israel to take Ammon&apos;s land just as He forbade them Moab&apos;s. These are family lands, given by God, and they are off-limits. The prohibition is clear.',
        },
        {
          kind: 'hebrew',
          id: 'zamzummim-giants',
          title: 'Zamzummim — a race of giants',
          script: 'זמזמִים',
          translit: '<strong>Zamzummim</strong> · the "murmurers" or "hummers"; Ammon&apos;s ancient giant people',
          description:
            'Another category of giants, now gone. Each nation — Moab, Ammon, Edom — has its own history of displacing giants before Israel arrives. This is the clear pattern of history: God removes giants and prepares the way.',
        },
        {
          kind: 'commentary',
          id: 'avim-ancient',
          html:
            'The Avim were an ancient people who destroyed the Caphtorims (from Caphtor, likely Crete). This is a historical note: empires rise and fall, peoples come and go, and the Lord oversees it all. Nothing is permanent but His purpose.',
        },
        {
          kind: 'commentary',
          id: 'ammon-to-lot',
          html:
            'The repetition is intentional: Ammon&apos;s land is off-limits, just like Moab&apos;s and Edom&apos;s. There is a boundary. God protects the lands of nations outside the covenant. The conquest of Canaan is not a license for conquest everywhere. It is specific, limited, purposeful.',
        },
        {
          kind: 'carry',
          html:
            'God is precise about boundaries. He tells Israel exactly where they may go and where they may not. This is not limitation born of weakness; it is the order of a sovereign God. In your own life, boundaries are not punishment — they are the structure that makes peace possible. When God draws a line, He draws it to protect something precious.',
        },
      ],
    },

    /* ─── Deuteronomy 2:26–37 — Sihon&apos;s Refusal; The Conquest ────────────── */
    {
      ref: 'Deuteronomy 2:26–37',
      title: 'Sihon Refuses; Israel Conquers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(26,
              t('And I sent messengers out of the wilderness of Kedemoth unto Sihon king of Heshbon with words of peace, saying,')
            ),
            verse(27,
              t('Let me pass through thy land: I will go along by the high way, I will neither turn unto the right hand nor to the left.')
            ),
            verse(28,
              t('Thou shalt sell me meat for money, that I may eat; and give me water for money, that I may drink: only I will pass through on foot;')
            ),
            verse(29,
              t('As the children of Esau which dwell in Seir, and the Moabites which dwell in Ar, did unto me;) until I shall pass over Jordan into the land which the Lord our God giveth us.')
            ),
            verse(30,
              t('But '),
              hy('Sihon king of Heshbon would not let us pass by him', 'sihon-refuses'),
              t(': for '),
              hp('the Lord thy God hardened his spirit, and made his heart obstinate', 'god-hardened'),
              t(', to deliver him into thy hand, as appeareth this day.')
            ),
            verse(31,
              t('And the Lord said unto me, Behold, I have begun to give Sihon and his land before thee: begin to possess, that thou mayest inherit his land.')
            ),
            verse(32,
              t('Then Sihon came out against us, he and all his people, to fight at Jahaz.')
            ),
            verse(33,
              t('And the Lord our God '),
              hg('delivered him before us', 'god-delivers'),
              t('; and we '),
              hg('smote him, and his sons, and all his people', 'smite-all'),
              t('.')
            ),
            verse(34,
              t('And we took all his cities at that time, and utterly destroyed the men, and the women, and the little ones, of every city, we left none to remain:')
            ),
            verse(35,
              t('Only the cattle we took for a prey unto ourselves, and the spoil of the cities which we took.')
            ),
            verse(36,
              t('From Aroer, which is by the brink of the river Arnon, and from the city that is by the river, even unto Gilead, there was not one city too high for us: the Lord our God delivered all unto us:')
            ),
            verse(37,
              t('Only unto the land of the children of Ammon thou camest not, nor unto any place of the river Jabbok, nor unto the cities in the mountains, nor unto whatsoever the Lord our God forbade us.')
            ),
          ],
        },
        {
          kind: 'hebrew',
          id: 'sihon-refuses',
          title: 'Sihon — refusal',
          script: 'סִיחוֹן',
          translit: '<strong>Sihon</strong> · king of Heshbon; his name appears in this narrative alone',
          description:
            'Sihon is offered the same arrangement that Edom and Moab accepted — passage in exchange for payment. He refuses. His refusal becomes the hingepoint of history.',
        },
        {
          kind: 'commentary',
          id: 'sihon-refuses',
          html:
            'Sihon is offered a peaceful arrangement. He is shown that Israel has kept faith with Edom and Moab. He has a choice. He refuses. His refusal is an act of human will, real and free.',
        },
        {
          kind: 'christ',
          id: 'god-hardened',
          title: 'Christ Connection — God&apos;s Hardening and Human Refusal',
          html:
            'The text says both: "Sihon would not let us pass" AND "the Lord thy God hardened his spirit." Both are true. This is not a contradiction; it is the complexity of human freedom and divine purpose. God does not override Sihon&apos;s will; He confirms it. Sihon chooses to refuse, and God&apos;s purpose is accomplished through that refusal. The same mystery appears in Romans 9, where Paul grapples with Pharaoh: God hardens, and Pharaoh chooses. In Christ, both remain true. God accomplishes His purpose through human choice, not despite it.',
        },
        {
          kind: 'hebrew',
          id: 'god-hardened',
          title: 'Haram — to devote to destruction',
          script: 'חרם',
          translit: '<strong>haram</strong> · to devote, consecrate, ban (from the root for "devoted thing")',
          description:
            'The word for complete destruction is haram — to devote to the Lord. The conquered cities are not merely taken; they are set apart as devoted to God. They are removed from human use and returned entirely to Him. This is an act of covenant sanctification, not mere conquest.',
        },
        {
          kind: 'commentary',
          id: 'god-delivers',
          html:
            'The text is clear: the Lord delivers Sihon and his people into Israel&apos;s hand. This is not human military superiority. This is God&apos;s judgment executed through Israel&apos;s arms.',
        },
        {
          kind: 'commentary',
          id: 'smite-all',
          html:
            'Every person — men, women, little ones — is put to the sword. Only the cattle and spoil are taken. This is herem in its fullest extent. It is hard to read, and it must not be softened. But it must also be framed rightly: this is the judgment of God on Amorite iniquity that has ripened for four centuries (Genesis 15:16 — "the iniquity of the Amorites is not yet full"). It is covenant justice, not ethnic violence. And it foreshadows the final judgment Christ will execute on all evil at the end of history.',
        },
        {
          kind: 'carry',
          html:
            'When you read of the conquest, you encounter one of Scripture&apos;s hardest texts. God is not arbitrary; He is righteous. The Amorites have had four centuries to repent. At some point, judgment comes. In your own life, there are boundaries you have crossed and lines you have drawn. There is a place where patience ends and consequence begins. Trust that God knows the difference between temporary allowance (like His patience with Amorite iniquity) and final judgment. Seek His mercy while the time for repentance remains.',
        },
        {
          kind: 'reflection',
          id: 'reflection-hardened',
          prompt:
            'How do you reconcile God&apos;s hardening of Sihon&apos;s heart with Sihon&apos;s own refusal? What does this tell you about how God works in the world?',
        },
      ],
    },
  ],
};
