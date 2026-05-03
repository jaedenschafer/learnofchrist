import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Chronicles 7 — Northern Tribes Recorded
 *
 * The genealogies of the northern tribes — Issachar, Benjamin, Naphtali,
 * Manasseh, Ephraim, and Asher — are recorded, though many of these tribes
 * were carried into exile by Assyria. What remains is a sacred witness: their
 * names are written down. Among them is the lineage of Joshua. And woven into
 * Ephraim's record is a story of crushing loss and grieving consolation, a
 * father mourning slain sons who conceives a new boy and names him Beriah
 * ("in evil"), because it went evil with his house. From that pain comes
 * redemption: his descendants multiply. This is the Chronicler's message:
 * even the scattered tribes are remembered. Even sorrow becomes a name for hope.
 */
export const CHRONICLES_1_7: RichChapterContent = {
  bookSlug: '1-chronicles',
  bookName: '1 Chronicles',
  chapter: 7,

  estimatedMinutes: { beginner: 5, intermediate: 11, deep: 15 },
  intros: [
    'The Chronicler now turns to the genealogies of the northern tribes. Issachar, Benjamin, Naphtali, Manasseh, Ephraim, and Asher all receive their place in the sacred record. Most of these tribes have been carried away into exile by Assyria, scattered and seemingly lost to history. Yet the Chronicler does not forget them. He records their names, their line of descent, the numbers of their mighty men. His point is clear: these tribes still belong to Israel. They are still counted among the people of God, even in exile, even in exile.',
    'Within this chapter lies a narrative gem that speaks to the heart of what the Chronicler wants to convey: Ephraim&apos;s grief. His sons are killed by men of Gath who come to steal their cattle. Ephraim grieves many days, and his brethren come to comfort him. Then he conceives again and bears a son, naming him Beriah — "in evil" — because it went evil with his house. The pain becomes the name. And from that son, descendants multiply, many and mighty. Joshua, the great conqueror of the Promised Land, traces his lineage through this grieving father. In this small story, we see how God works through sorrow to redemption.',
  ],

  bottomShare: {
    label: 'Share 1 Chronicles 7',
    quote:
      'The Chronicler records the northern tribes, even though many are scattered in exile. Among them is Ephraim, who grieved his slain sons and named his new son Beriah — "in evil" — because suffering had come to his house. From that grief came Joshua, the conqueror of the land, and countless descendants. The pain was named, and the name became redemption.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Chronicles 7 · Study Guide',
  },

  sections: [
    /* ─── 1 Chronicles 7:1–11 — The Northern Tribes ──────────────────────── */
    {
      ref: '1 Chronicles 7:1–11',
      title: 'Issachar, Benjamin, Naphtali',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(1, 'Now the sons of Issachar were, Tola, and Puah, Jashub, and Shimrom, four.'),
            plain(2, 'And the sons of Tola; Uzzi, and Rephaiah, and Jeriel, and Jahmai, and Jibsam, and Shemuel, heads of their father&apos;s house of Tola: they were valiant men of might in their generations; whose number was in the days of David two and twenty thousand and six hundred.'),
            plain(3, 'And the sons of Uzzi; Izrahiah: and the sons of Izrahiah; Michael, and Obadiah, and Joel, Ishiah, five: all of them chief men.'),
            plain(4, 'And with them, by their generations, after the house of their fathers, were bands of soldiers for war, six and thirty thousand men: for they had many wives and sons.'),
            plain(5, 'And their brethren among all the families of Issachar were valiant men of might, reckoned in all by genealogy fourscore and seven thousand.'),
            plain(6, 'The sons of Benjamin; Bela, and Becher, and Jediael, three.'),
            plain(7, 'And the sons of Bela; Ezbon, and Uzzi, and Uzziel, and Jerimoth, and Iri, five; heads of the house of their fathers, mighty men of valour; and were reckoned by their genealogies twenty and two thousand and thirty and four.'),
            plain(8, 'And the sons of Becher; Zemira, and Joash, and Eliezer, and Elioenai, and Omri, and Jeremoth, and Abiah, and Anathoth, and Alemeth. All these are the sons of Becher.'),
            plain(9, 'And the number of them, after their genealogy by their generations, heads of the house of their fathers, mighty men of valour, was twenty thousand and two hundred.'),
            plain(10, 'The sons also of Jediael; Bilhan: and the sons of Bilhan; Jeush, and Benjamin, and Ehud, and Chenaanah, and Zethan, and Tharshish, and Ahishahar.'),
            plain(11, 'All these the sons of Jediael, by the heads of their fathers, mighty men of valour, were seventeen thousand and two hundred soldiers, fit to go out for war and battle.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'issachar-names',
          html:
            'The Chronicler begins with Issachar, recording the names and numbers of the tribes. Four sons of Issachar: Tola, Puah, Jashub, Shimrom. These are the heads of their fathers&apos; houses. What follows is a careful genealogy stretching through the generations, leading eventually to men of war — 87,000 valiant men of might. In a world of exile and scatter, the Chronicler is saying: these names matter. These people have descendants. They have strength. They have worth.',
        },
        {
          kind: 'commentary',
          id: 'benjamin-scattered',
          html:
            'Benjamin comes next — the tribe from which Saul came, the tribe from which Paul came. In a book focused on the southern kingdom of Judah, Benjamin is significant, for Benjamin remained with Judah even after the northern kingdom fell. Yet here the Chronicler records the full genealogy of Benjamin&apos;s sons in the north: Bela, Becher, Jediael. Each branch is followed to its conclusion in mighty men of war. The numbers accumulate: twenty-two thousand and thirty-four from Bela&apos;s line alone. The tribe is preserved in the record, even when history has scattered its people.',
        },
        {
          kind: 'commentary',
          id: 'naphtali-swift',
          html:
            'Naphtali receives the briefest mention: four sons, and sons of those sons. The record is thin, but the tribe is not forgotten. The Chronicler gives them their place.',
        },
        {
          kind: 'hebrew',
          id: 'gibor-chayil',
          title: 'Gibor Chayil — "Mighty Men of Valor"',
          script: 'גִּבּוֹר חַיִל',
          translit: '<strong>Gibor chayil</strong> · mighty man of valor; strong warrior; man of excellence',
          description:
            'The phrase "mighty men of might" (or "mighty men of valor") echoes throughout these genealogies. A "gibor" is a warrior, a strong man, one who has proven himself in battle or in life. "Chayil" means not just military strength, but excellence, worth, substance. To be a gibor chayil is to be a man who counts, whose life matters. The Chronicler uses this term repeatedly to affirm that these scattered, exiled tribes were still full of men of quality and strength.',
        },
        {
          kind: 'carry',
          html:
            'The Chronicler&apos;s genealogies might seem like dry lists of names and numbers. But they are acts of memory. When a people are scattered, when their kingdom falls, when exile seems to erase them from the map of history, the careful recording of their names and descendants is an act of defiance against forgetting. We live in a world that forgets quickly. We are scattered in our own ways — by job changes, by moves, by losses. Yet God keeps a genealogy of us. Our names matter. Our descendants matter. We are written down.',
        },
        {
          kind: 'reflection',
          id: 'issachar-remember',
          prompt: 'When you read a list of names like this, does it feel tedious or meaningful? What would it mean if someone, somewhere, was keeping a careful record of your name and your descendants, even if the world had scattered your family?',
        },
      ],
    },

    /* ─── 1 Chronicles 7:12–19 — Manasseh and the Daughters of Zelophehad ─── */
    {
      ref: '1 Chronicles 7:12–19',
      title: 'Manasseh and Zelophehad&apos;s Daughters',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(12, 'Shuppim also, and Huppim, the children of Ir, and Hushim, the children of Aher.'),
            plain(13, 'The sons of Naphtali; Jahziel, and Guni, and Jezer, and Shallum, the sons of Bilhah.'),
            plain(14, 'The sons of Manasseh; Asriel, whom she bare: (but his concubine the Aramitess bare Machir the father of Gilead:'),
            plain(15, 'And Machir took to wife the sister of Huppim and Shuppim, whose sister&apos;s name was Maachah;) and the name of the second was Zelophehad: and Zelophehad had daughters.'),
            plain(16, 'And Maachah the wife of Machir bare a son, and she called his name Peresh; and the name of his brother was Sheresh; and his sons were Ulam and Rakem.'),
            plain(17, 'And the sons of Ulam; Bedan. These were the sons of Gilead, the son of Machir, the son of Manasseh.'),
            plain(18, 'And his sister Hammoleketh bare Ishod, and Abiezer, and Mahlah.'),
            plain(19, 'And the sons of Shemida were, Ahian, and Shechem, and Likhi, and Aniam.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'manasseh-west',
          html:
            'Manasseh is one of the two half-tribes — one half remained east of the Jordan in Gilead, while the other half settled in Canaan itself. The Chronicler traces the genealogy of the western half (those in Canaan). The line goes from Manasseh to Asriel, through Machir to Gilead. This genealogy connects to the land itself — Gilead is a place, a region, named for a man in this line.',
        },
        {
          kind: 'commentary',
          id: 'zelophehad-daughters',
          html:
            'A striking detail emerges: Zelophehad had daughters. The Chronicler mentions this because these daughters, as we know from Numbers 27, came before Moses and the congregation to plead for an inheritance in the Promised Land. Their father had no sons, and they asked: why should our father&apos;s name disappear from our family because he had no sons? Give us a possession in the land. And the Lord, speaking through Moses, said: The daughters of Zelophehad speak what is right. You shall give them a possession. This is revolutionary. Women who ask for justice receive it. Women who plead their case are heard. The Chronicler, by mentioning Zelophehad&apos;s daughters here, is keeping alive the memory of a legal precedent that changed how inheritance worked in Israel.',
        },
        {
          kind: 'carry',
          html:
            'The daughters of Zelophehad insisted that their father&apos;s name not be forgotten because he had no sons. They stood up and made their case. And justice was done. Sometimes justice comes not from the powerful speaking to the powerless, but from the powerless standing up and speaking truth. Their courage changed the law for all of Israel.',
        },
        {
          kind: 'reflection',
          id: 'zelophehad-courage',
          prompt: 'When have you seen someone ask for justice and receive it? What made their request heard?',
        },
      ],
    },

    /* ─── 1 Chronicles 7:20–29 — Ephraim&apos;s Grief and Beriah ──────────────────── */
    {
      ref: '1 Chronicles 7:20–29',
      title: 'Ephraim Grieves and Names His Son Beriah',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(20, 'And the sons of Ephraim; Shuthelah, and Bered his son, and Tahath his son, and Eladah his son, and Tahath his son,'),
            plain(21, 'And Zabad his son, and Shuthelah his son, and Ezer, and Elead, whom the men of Gath that were born in that land slew, because they came down to take away their cattle.'),
            plain(22, 'And Ephraim their father mourned many days, and his brethren came to comfort him.'),
            plain(23, 'And when he went in to his wife, she conceived, and bare a son, and he called his name Beriah, because it went evil with his house.'),
            plain(24, '(And his daughter was Sherah, who built Beth-horon the nether, and the upper, and Uzzensherah.)'),
            plain(25, 'And Rephah was his son, also Resheph, and Telah his son, and Tahan his son,'),
            plain(26, 'Laadan his son, Ammihud his son, Elishama his son,'),
            plain(27, 'Non his son, Jehoshuah his son.'),
            plain(28, 'And their possessions and habitations were, Bethel and the towns thereof, and to the east Naaran, and to the west Gezer, with the towns thereof; Shechem also and the towns thereof, unto Gaza and the towns thereof:'),
            plain(29, 'And by the borders of the children of Manasseh, Beth-shean and her towns, Taanach and her towns, Megiddo and her towns, Dor and her towns. In these dwelt the children of Joseph the son of Jacob.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ephraim-sons-slain',
          html:
            'A terrible detail breaks into the genealogy: "Ezer and Elead, whom the men of Gath that were born in that land slew, because they came down to take away their cattle." Two of Ephraim&apos;s sons are killed — not in battle, but by men from Gath who raid to steal cattle. Their names are preserved, their deaths witnessed. These are not nameless losses. They are Ezer and Elead.',
        },
        {
          kind: 'commentary',
          id: 'ephraim-mourned',
          html:
            'And Ephraim their father mourned many days. The text does not rush past the grief. It names it. It lingers there. Ephraim is not a king or a mighty leader in this moment — he is a man who has lost his sons. He grieves. The brethren come to comfort him. This is the work of family: to witness sorrow, to be present, to console.',
        },
        {
          kind: 'commentary',
          id: 'beriah-evil',
          html:
            'After his mourning, Ephraim goes in to his wife. She conceives and bears a son. And he calls the name of this son Beriah, because "it went evil with his house." The name itself means "in evil" or "through calamity." Imagine: the father has suffered loss so intense that he names his new son after that loss. The pain is inscribed in the child&apos;s name. Yet from this name, from this grieving father, comes a line that multiplies. Rephah, Resheph, Telah, Tahan, Laadan, Ammihud, Elishama, Non, and finally Jehoshuah — Joshua. The great conqueror of Israel, the one who led the people into the Promised Land, traces his lineage back to Ephraim&apos;s grief.',
        },
        {
          kind: 'hebrew',
          id: 'beriah-evil-name',
          title: 'Beriah — "In Evil" or "In Calamity"',
          script: 'בְּרִיעָה',
          translit: '<strong>Beriah</strong> · in evil; in calamity; formed during calamity',
          description:
            'The name "Beriah" comes from the root meaning "to break" or "calamity." When Ephraim names his son Beriah because "it went evil with his house," he is not hiding the pain or pretending it did not happen. He is naming it. He is saying: this child was born of grief, born after loss, born in the midst of calamity. Yet in doing so, he transforms the calamity into a name, a witness, a memory that will be carried by all the generations that follow.',
        },
        {
          kind: 'hebrew',
          id: 'yehoshua-salvation',
          title: 'Yehoshua — "The Lord Saves"',
          script: 'יְהוֹשֻׁעַ',
          translit: '<strong>Yehoshua</strong> · the Lord saves; the salvation of the Lord',
          description:
            'Joshua, the great leader of Israel, has a name that means "the Lord saves" or "Yah saves." In this genealogy, he descends from Beriah, the son named for calamity. The message is profound: from grief and loss comes the one whose very name means salvation. The God of Israel is not indifferent to the suffering of His people. He works through their pain.',
        },
        {
          kind: 'christ',
          id: 'christ-grieves-redeems',
          title: 'Christ Connection — The One Who Grieves and Redeems',
          html:
            'Ephraim grieves his sons and names his new son Beriah — "in evil." From this son comes Joshua, whose name means "the Lord saves." The pattern echoes in the New Testament: Jesus wept over Jerusalem, the city that would reject and crucify Him (Luke 19:41–42). He too endured grief, endured loss — indeed, the deepest loss. And yet from His death, resurrection came. From the Cross, salvation. The New Testament calls Jesus the "better Joshua" (Hebrews 4:8–9) — not merely the conqueror of a land, but the redeemer of the human soul. "For we do not have a high priest which cannot be touched with the feeling of our infirmities; but was in all points tempted like as we are, yet without sin" (Hebrews 4:15). Christ knows grief. He knows loss. And through His grieving, He became our salvation. No pain in our lives is outside His understanding. He has named our sorrow. He has made it redemptive.',
        },
        {
          kind: 'carry',
          html:
            'When grief comes — when you lose what you love, when calamity marks your house — do not hide it. Do not pretend it was not real. Ephraim could have forgotten his slain sons. Instead, he named them. And he named his new son after the loss itself, as if to say: this pain is written into our family. This pain is part of our story. And look — from this pain came Joshua, who led Israel to salvation. Your grief is not wasted. It is not meaningless. God is not distant from it. He works through it. Your pain, your loss, your calamity — these become the soil in which your redemption grows.',
        },
        {
          kind: 'reflection',
          id: 'ephraim-grief',
          prompt: 'Ephraim named his son "Beriah," inscribing his sorrow in a name. What pain or loss in your own life deserves to be named and remembered, not hidden? How has grief changed you, even in ways that later brought unexpected growth?',
        },
      ],
    },

    /* ─── 1 Chronicles 7:30–40 — Asher&apos;s Warriors ────────────────────────── */
    {
      ref: '1 Chronicles 7:30–40',
      title: 'Asher and the Happy Inheritance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(30, 'The sons of Asher; Imnah, and Isuah, and Ishuai, and Beriah, and Serah their sister.'),
            plain(31, 'And the sons of Beriah; Heber, and Malchiel, who is the father of Birzavith.'),
            plain(32, 'And Heber begat Japhlet, and Shomer, and Hotham, and Shua their sister.'),
            plain(33, 'And the sons of Japhlet; Pasach, and Bimhal, and Ashvath. These are the children of Japhlet.'),
            plain(34, 'And the sons of Shomer; Ahi, and Rohgah, Jehubbah, and Aram.'),
            plain(35, 'And the sons of his brother Helem; Zophah, and Imna, and Shelesh, and Anam.'),
            plain(36, 'And the sons of Zophah; Suah, and Harnepher, and Shual, and Beri, and Imrah,'),
            plain(37, 'Bezer, and Hod, and Shamma, and Shilshah, and Ithran, and Beera.'),
            plain(38, 'And the sons of Jether; Jephunneh, and Pispa, and Ara.'),
            plain(39, 'And the sons of Ulla; Arah, and Haniel, and Rezia.'),
            plain(40, 'All these were the children of Asher, heads of their father&apos;s house, choice and mighty men of valour, chief of the princes. And the number of them reckoned in the way of the genealogy for to go out in the war and battle was twenty and six thousand men.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'asher-name',
          html:
            'Asher is one of the twelve tribes, and his name itself means "happy" or "blessed." In Jacob&apos;s blessing, Asher receives a blessing of abundance: "Out of Asher his bread shall be fat, and he shall yield royal dainties" (Genesis 49:20). The tribe whose name means happiness is marked out for prosperity. Here, in the genealogy, Asher&apos;s line is traced with all its branches, each multiplying.',
        },
        {
          kind: 'commentary',
          id: 'asher-mighty',
          html:
            'The text concludes the genealogy of Asher with a summary: "All these were the children of Asher, heads of their father&apos;s house, choice and mighty men of valour, chief of the princes." Twenty-six thousand men fit to go to war. Asher, the happy tribe, is also a tribe of warriors. There is no contradiction: true happiness does not mean weakness. The blessed are strong. They are ready. They have capacity.',
        },
        {
          kind: 'hebrew',
          id: 'asher-happy',
          title: 'Asher — "Happy" or "Blessed"',
          script: 'אָשֵׁר',
          translit: '<strong>Asher</strong> · happy; blessed; state of happiness or fortune',
          description:
            'The name "Asher" comes from the root meaning "to make happy" or "to be blessed." In Hebrew, Asher is also the relative pronoun "who" or "that which" — as in "Blessed (Asher) are those who..." (Psalm 1:1). When Jacob blesses his sons, Asher receives: "Let Asher be blessed with children; let him be acceptable to his brethren, and let him dip his foot in oil" (Deuteronomy 33:24). The tribe of happiness is also the tribe of strength and plenty.',
        },
        {
          kind: 'christ',
          id: 'christ-asher-blessing',
          title: 'Christ Connection — The Blessing of True Happiness',
          html:
            'Jesus opens the Sermon on the Mount with the Beatitudes: "Blessed (Asher-like) are the poor in spirit, for theirs is the kingdom of heaven. Blessed are those who mourn, for they shall be comforted..." (Matthew 5:3–12). Jesus redefines happiness. It is not found in strength alone, though strength has its place. True happiness comes through surrender, through mourning, through persecution for righteousness&apos; sake. The Asher-blessing is transformed: "Blessed are you when people revile you and persecute you and utter all kinds of evil against you falsely on my account. Rejoice and be glad, for your reward is great in heaven; for in the same way they persecuted the prophets who were before you" (Matthew 5:11–12). The tribe whose name means happiness is now the tribe whose members understand that real joy comes through covenant with the One who died and rose. The happy ones are not the powerful alone, but the grieving, the meek, the merciful, the peacemakers — those who have learned, like Ephraim, that calamity can become the name of salvation.',
        },
        {
          kind: 'carry',
          html:
            'Asher was blessed with the name of happiness. And in this genealogy, the tribe is shown as mighty and numerous. But Asher, like all the northern tribes, was carried into exile. How does a tribe named "happy" endure exile? How do we endure when the happiness we expected is torn away? Scripture suggests that true happiness is not dependent on outward circumstance. The Psalms return to this again and again: "I have learned, in whatsoever state I am, therewith to be content" (Philippians 4:11). The real Asher-blessing is learning to be happy not because everything is going well, but because we trust the One who sees our grief and will work it toward salvation. That is deeper than circumstance. That is the blessing that cannot be taken away.',
        },
        {
          kind: 'reflection',
          id: 'asher-happiness',
          prompt: 'Asher&apos;s name means "happy," yet the tribe faced exile like the others. What does it mean to be truly happy not because everything is going well, but because we trust God? When have you experienced happiness or contentment even in difficult circumstances?',
        },
      ],
    },

    /* ─── Closing Reflection ──────────────────────────────────────────────── */
    {
      blocks: [
        {
          kind: 'commentary',
          id: 'chronicler-message',
          html:
            'The Chronicler&apos;s message through these genealogies is this: the northern tribes are not lost. They are carried away, yes. Many are exiled to Assyria, and they never return as a people. Yet their names are written down. Their descendants are counted. And among them, Joshua — the conquerer of the land — traces his lineage back through Ephraim&apos;s grief, back to a father who mourned slain sons and then named his new son for the calamity that came to his house. God does not forget the scattered. He does not forget the grieving. He writes their names down. And He works redemption through their pain.',
        },
        {
          kind: 'carry',
          html:
            'In a world that forgets quickly, that erases the inconvenient and the fallen, the Chronicler offers a radically different vision: Remember. Write the names down. Count the generations. Honor the scattered. Witness the grief. And know that God is at work even in exile, even in loss, even in a son born from calamity. Your pain is not wasted. Your name is written. Your story has a redemptive arc, even if you cannot see it yet. The God of Israel is the God of the exiled, the God of the grieving, the God of those who have suffered loss. He has not forgotten you.',
        },
      ],
    },
  ],
};
