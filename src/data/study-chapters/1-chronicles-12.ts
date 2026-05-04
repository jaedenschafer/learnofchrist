import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Chronicles 12 — Those Who Joined David at Ziklag and Hebron
 *
 * The chapter opens with the warriors who came to David while he hid from Saul
 * at Ziklag — even men from Benjamin, Saul's own tribe, sensing that David was
 * chosen. These were not soldiers conscripted by force, but warriors who saw
 * something in David that compelled them to leave their king and join his cause.
 * The chapter culminates at Hebron, where all Israel came with one heart to make
 * David king. The diversity of the people — twelve tribes, each sending men of
 * might — speaks to a kingdom that transcends bloodlines and binds itself in
 * covenant. And the joy in Israel at the feast speaks to a nation gathered
 * around its rightful king.
 */
export const CHRONICLES_1_12: RichChapterContent = {
  bookSlug: '1-chronicles',
  bookName: '1 Chronicles',
  chapter: 12,

  estimatedMinutes: { beginner: 4, intermediate: 11, deep: 16 },
  topicTags: ['kingship', 'worship', 'covenant', 'faithfulness'],
  opener: {
    topical: true,
    caption: '1 Chronicles 12',
  },
  intros: [
    'First Chronicles 12 serves as an extended roster of those who recognized David as king before he wore the crown. Written during or after the Davidic era, it expands the brief account in 1 Samuel to reveal how universal — how Spirit-empowered — was the recognition of David as God&apos;s chosen leader.',
    'The chapter divides into two halves: the warriors who came to David at Ziklag, when he was still a fugitive hiding from Saul, and the vast assembly at Hebron when all Israel came to crown him king. In both scenes, we see not a military coup, but a gathering of hearts around one anointed by God. Even Saul&apos;s own tribe, Benjamin, sent soldiers to David. Men understood the times. They knew what Israel ought to do. And in that knowledge, they found joy.',
  ],

  bottomShare: {
    label: 'Share 1 Chronicles 12',
    quote:
      'All these men of war came to Hebron with a perfect heart to make David king. Three days they ate and drank together, and joy filled all Israel — for they came not by compulsion, but because they saw in David the king God had chosen.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Chronicles 12 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-tribal-lists',
      kind: 'study',
      source: 'Sefaria',
      label: 'Tribal Genealogies and Borders',
      url: 'https://www.sefaria.org/search?q=tribe+israel&tab=text',
      description: 'Sefaria resources on the twelve tribes, genealogies, and territorial divisions.',
    },
    {
      id: 'sefaria-1-chronicles-12',
      kind: 'study',
      source: 'Sefaria',
      label: '1 Chronicles 12 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/I_Chronicles.12',
      description: 'The Hebrew text of 1 Chronicles 12 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  sections: [
    /* ─── 1 Chronicles 12:1–7 — Benjamin Joins David at Ziklag ─────────── */
    {
      ref: '1 Chronicles 12:1–7',
      title: 'Even Benjamin Comes to David',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(1, 'Now these are they that came to David to Ziklag, while he yet kept himself close because of Saul the son of Kish: and they were among the mighty men, helpers of the war.'),
            plain(2, 'They were armed with bows, and could use both the right hand and the left in hurling stones and shooting arrows out of a bow, even of Saul&apos;s brethren of Benjamin.'),
            plain(3, 'The chief was Ahiezer, then Joash, the sons of Shemaah the Gibeathite; and Jeziel, and Pelet, the sons of Azmaveth; and Berachah, and Jehu the Anethothite,'),
          ],
        },
        {
          kind: 'commentary',
          id: '1-chronicles-12-mid-3',
          html:
            '<p>These connections reveal how God&apos;s family plan unfolded across centuries.</p> [res:sefaria-tribal-lists]',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(4, 'And Ismaiah the Gibeonite, a mighty man among the thirty, and over the thirty; and Jeremiah, and Jahaziel, and Johanan, and Josabad the Gederathite,'),
            plain(5, 'Eluzai, and Jerimoth, and Bealiah, and Shemariah, and Shephatiah the Haruphite,'),
            plain(6, 'Elkanah, and Isiah, and Azareel, and Joezer, and Jashobeam, the Korhites,'),
            plain(7, 'And Joelah, and Zebadiah, the sons of Jeroham of Gedor.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'benjamin-joins',
          html:
            'Saul was of the tribe of Benjamin. Yet men of Benjamin — of Saul&apos;s own kinsmen — left the king they knew and came to David at Ziklag. This is not a small detail. To abandon a reigning king was to make a profound choice, a statement that David possessed something Saul had lost: the blessing of God. These warriors saw something in David that transcended politics or pragmatism. They saw the future[res:sefaria-1-chronicles-12][res:bibleodyssey-1-chronicles-overview-12].',
        },
        {
          kind: 'commentary',
          id: 'both-hands',
          html:
            'The text notes that these warriors "could use both the right hand and the left in hurling stones and shooting arrows." This detail speaks to precision, discipline, versatility — the marks of warriors trained to excellence. But it also suggests a symbolic truth: David&apos;s kingdom would not be one-handed, incomplete. It would be ambidextrous, whole.',
        },
        {
          kind: 'hebrew',
          id: 'ziklag-refuge',
          title: 'Ziklag — City of Refuge',
          script: 'צִקְלַג',
          translit: '<strong>Ziklag</strong> · city of David&apos;s sojourn among the Philistines',
          description:
            'Ziklag was a Philistine city where David sought refuge from Saul&apos;s pursuit — an unlikely sanctuary. Yet even in exile, in a foreign land, men came to him. The warriors who joined him at Ziklag were not conscripted. They came voluntarily, recognizing in this fugitive prince the hand of God.',
        },
        {
          kind: 'carry',
          html:
            'We often think leadership is about authority or force — about commanding people to follow. But the greatest leaders draw followers not because they compel obedience, but because they embody something worth following. David, hiding in exile, attracted the best warriors of Israel. What quality in him did they see? It was not power or position, but covenant. He was the one God had chosen.',
        },
        {
          kind: 'reflection',
          id: 'ziklag-call',
          prompt: 'What causes you to leave security — to leave what is familiar and safe — and follow someone or something new? What would you need to see or feel before you made such a choice?',
        },
      ],
    },

    /* ─── 1 Chronicles 12:8–15 — The Gadites: Mighty Warriors ─────────── */
    {
      ref: '1 Chronicles 12:8–15',
      title: 'The Gadites: Warriors Like Lions',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(8, 'And of the Gadites there separated themselves unto David into the hold to the wilderness men of might, and men of war fit for the battle, that could handle shield and buckler, whose faces were like the faces of lions, and were as swift as the roes upon the mountains;'),
          ],
        },
        {
          kind: 'commentary',
          id: '1chr12-duel-trained',
          html:
            'These names represent David&apos;s dual army—men trained for both battle and administration. Seven brothers from Benjamin, bearing shield and spear. They came to David not as forced conscripts, but as men who understood the moment. They recognized their king.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(9, 'Ezer the first, Obadiah the second, Eliab the third,'),
            plain(10, 'Mishmannah the fourth, Jeremiah the fifth,'),
            plain(11, 'Attai the sixth, Eliel the seventh,'),
          ],
        },
        {
          kind: 'commentary',
          id: '1-chronicles-12-mid-11',
          html:
            '<p>This family boundary reveals the line through which God&apos;s covenant promises continued.</p>',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(12, 'Johanan the eighth, Elzabad the ninth,'),
            plain(13, 'Jeremiah the tenth, Machbanai the eleventh.'),
            plain(14, 'These were of the sons of Gad, captains of the host: one of the least was over an hundred, and the greatest over a thousand.'),
            plain(15, 'These are they that went over Jordan in the first month, when it had overflown all his banks; and they put to flight all them of the valleys, both toward the east, and toward the west.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'gadites-loyalty',
          html:
            'The Gadites "separated themselves unto David into the hold to the wilderness." This language is striking — they made an active choice, a separation, a covenant. They came not as mercenaries or opportunists, but as men who understood that David&apos;s cause was righteous.',
        },
        {
          kind: 'commentary',
          id: 'faces-like-lions',
          html:
            'To have "faces like lions" is to embody courage, power, and nobility. The Gadites were not merely brave soldiers; they were like lions, creatures of undeniable majesty. Yet these formidable warriors gave their allegiance to a fugitive king. What did they see in David that made them willing to serve?',
        },
        {
          kind: 'commentary',
          id: 'least-over-hundred',
          html:
            'The text notes that even "the least" among the Gadites captains was "over an hundred" soldiers, and "the greatest over a thousand." This is not merely a military census. It is a statement about the quality and organization of David&apos;s force. These were not rabble, but seasoned warriors with disciplined command structures.',
        },
        {
          kind: 'hebrew',
          id: 'gad-tribe',
          title: 'Gad — Tribe East of Jordan',
          script: 'גָּד',
          translit: '<strong>Gad</strong> · fortune; one of the twelve tribes, settled east of the Jordan',
          description:
            'The tribe of Gad had its inheritance on the east side of the Jordan River, far from Saul&apos;s seat of power in the north. Yet men of Gad crossed the Jordan at flood stage — a dangerous crossing — to reach David. Their journey was arduous, but their commitment was absolute.',
        },
        {
          kind: 'carry',
          html:
            'Faith sometimes requires us to cross boundaries — not merely geographical, but psychological. The Gadites crossed a swollen river in the first month of spring, when the Jordan was at its peak. They risked much to reach David. In our own lives, what river must we cross to follow what we believe is true?',
        },
        {
          kind: 'reflection',
          id: 'gadites-courage',
          prompt: 'The Gadites crossed a dangerous river to join David&apos;s cause. What conviction in your own life is worth crossing a river for? What boundary are you being called to cross?',
        },
      ],
    },

    /* ─── 1 Chronicles 12:16–18 — Amasai: "Thine Are We" ─────────────── */
    {
      ref: '1 Chronicles 12:16–18',
      title: 'The Spirit on Amasai: "Thine Are We"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(16, 'And there came of the children of Benjamin and Judah to the hold unto David.'),
            plain(17, 'And David went out to meet them, and answered and said unto them, If ye be come peaceably unto me to help me, mine heart shall be knit unto you: but if ye be come to betray me to mine enemies, seeing there is no wrong in mine hands, the God of our fathers look thereon, and rebuke it.'),
            {
              number: 18,
              spans: [
                t('Then the '),
                hy('spirit', 'spirit-amasai'),
                t(' came upon Amasai, who was chief of the captains, and he said, '),
                hp('Thine are we, David, and on thy side, thou son of Jesse', 'amasai-confession'),
                t(': peace, peace be unto thee, and peace be to thine helpers; for thy God helpeth thee. Then David received them, and made them captains of the band.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'spirit-amasai',
          html:
            'David asks a piercing question: "If ye be come peaceably unto me to help me... but if ye be come to betray me?" He knows that men&apos;s allegiances are changeable, that ambition can masquerade as loyalty. In response, the Spirit of God falls upon Amasai, and he makes a confession so pure, so unambiguous, that doubt dissolves.',
        },
        {
          kind: 'commentary',
          id: 'amasai-confession',
          html:
            'Amasai&apos;s confession — "Thine are we, David, and on thy side, thou son of Jesse" — is perhaps the most direct oath of fealty in Scripture. He does not say, "We will serve you if conditions are right," or "We are with you for now." He says, "We are yours." And he invokes the blessing of peace — "peace, peace be unto thee" — not once but twice, as though peace were so abundant, so complete, that it overflows even his repetition.',
        },
        {
          kind: 'hebrew',
          id: 'ruach-amasai',
          title: 'Ruach — The Spirit Falls',
          script: 'רוּחַ',
          translit: '<strong>Ruach</strong> · spirit; breath; the Spirit of God',
          description:
            'The Spirit came upon Amasai in a moment of covenant-making. This is not eloquence of the mouth alone, but the testimony of God Himself. When Amasai speaks, he speaks not from his own heart, but from the Holy Spirit empowering his words. His confession becomes a word of God.',
        },
        {
          kind: 'christ',
          id: 'christ-amasai',
          title: 'Christ Connection: Spirit-Empowered Confession',
          html:
            'In 1 Corinthians 12:3, Paul writes: "No one can say &apos;Jesus is Lord&apos; except by the Holy Spirit." Amasai&apos;s confession — "Thine are we, David" — is Spirit-empowered in exactly this way. When the Church confesses Christ as Lord, it is not merely human sentiment. It is the Spirit of God testifying to His lordship. David foreshadows Christ — the one around whom all tribes gather, the one whose kingdom is built not on force but on Spirit-empowered covenant.',
        },
        {
          kind: 'carry',
          html:
            'We sometimes think commitment is something we manufacture through our own willpower or determination. But the deepest commitments — the most enduring covenants — are those that come when the Spirit moves upon us. Amasai did not decide to be loyal. The Spirit came upon him, and his heart aligned with heaven&apos;s will. What matters is not our effort alone, but our openness to the Spirit.',
        },
        {
          kind: 'reflection',
          id: 'amasai-reflection',
          prompt: 'When has the Spirit moved upon you to align your heart with something larger than yourself? What changed in you in that moment?',
        },
      ],
    },

    /* ─── 1 Chronicles 12:19–22 — Manasseh Joins ────────────────────── */
    {
      ref: '1 Chronicles 12:19–22',
      title: 'Of Manasseh: Even When Apart',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(19, 'And there fell some of Manasseh unto David, when he came with the Philistines against Saul to battle: but they helped them not: for the lords of the Philistines upon advisement sent him back, saying, He will fall to the heads of his master Saul with the heads of our men.'),
            plain(20, 'As he went to Ziklag, there fell to him of Manasseh, Adnah, and Jozabad, and Jediael, and Michael, and Jozabad, and Elihu, and Zillethai, captains of the thousands that were of Manasseh.'),
            plain(21, 'And they helped David against the band of the rovers: for they were all mighty men of valour, and were captains in the host.'),
            plain(22, 'For at that time day by day there came to David to help him, until it was a great host, like the host of God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'manasseh-apart',
          html:
            'Men of Manasseh came to David, but they had been separated from him — they were with the Philistines when David was in Philistine service. Yet they did not fight against Israel. They helped them not, the text says. Even when circumstance kept them from David, their hearts remained with Israel&apos;s true king. When the opportunity came, they went to David and joined his force.',
        },
        {
          kind: 'commentary',
          id: 'host-of-god',
          html:
            'The text culminates in a remarkable phrase: David&apos;s gathering had become "like the host of God." This is not merely a military army. This is a people gathered by heaven&apos;s will. The phrase evokes the armies of angels, the divine legions. David&apos;s force, composite as it was, had become something transcendent.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes we find ourselves separated from the people we wish to serve — by circumstance, by geography, by trial. The men of Manasseh could not fight with David when he was with the Philistines, but their allegiance remained. What matters is not the moment of separation, but the alignment of the heart. Even when we cannot be where we wish, our hearts can be knit to the purposes of God.',
        },
        {
          kind: 'reflection',
          id: 'separation-loyalty',
          prompt: 'When have you been separated from those you love or the causes you serve? How did you maintain faithfulness in the midst of that separation?',
        },
      ],
    },

    /* ─── 1 Chronicles 12:23–37 — At Hebron: All Israel Comes ─────────── */
    {
      ref: '1 Chronicles 12:23–37',
      title: 'All Israel Gathers at Hebron',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(23, 'And these are the numbers of the bands that were ready armed to the war, and came to David to Hebron, to turn the kingdom of Saul unto him, according to the word of the Lord.'),
            plain(24, 'The children of Judah that bare shield and spear were six thousand and eight hundred, ready armed to the war.'),
            plain(25, 'Of the children of Simeon, mighty men of valour for the war, seven thousand and one hundred.'),
            plain(26, 'Of the children of Levi four thousand and six hundred.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1-chronicles-12-mid-26',
          html:
            '<p>The genealogy traces how God preserved His people through generations and exile.</p>',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(27, 'And Jehoiada was the leader of the Aaronites, and with him were three thousand and seven hundred;'),
            plain(28, 'And Zadok, a young man mighty of valour, and of his father&apos;s house twenty and two captains.'),
            plain(29, 'And of the children of Benjamin, the kindred of Saul, three thousand: for hitherto the greatest part of them had kept the ward of the house of Saul.'),
            plain(30, 'And of the children of Ephraim twenty thousand and eight hundred, mighty men of valour, famous throughout the house of their fathers.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1chr12-duel-trained-2',
          html:
            'These eight men of Issachar bear both shield and sword—warriors trained for the dual purpose of David&apos;s reign. The list names them, counts them: five thousand. Numbers tell power, but also precision. These are not a mob; they are a mustered army.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(31, 'And of the half tribe of Manasseh eighteen thousand, which were expressed by name, to come and make David king.'),
            plain(32, 'And of the children of Issachar, which were men that had understanding of the times, to know what Israel ought to do; the heads of them were two hundred; and all their brethren were at their commandment.'),
            plain(33, 'Of Zebulun, such as went forth to battle, expert in war, with all instruments of war, fifty thousand, which could keep rank: they were not of a double heart.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1-chronicles-12-mid-33',
          html:
            '<p>These connections reveal how God&apos;s family plan unfolded across centuries.</p>',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(34, 'And of Naphtali a thousand captains, and with them with shield and spear thirty and seven thousand.'),
            plain(35, 'And of the Danites expert in war twenty and eight thousand and six hundred.'),
            plain(36, 'And of Asher, such as went forth to battle, expert in war, forty thousand.'),
            plain(37, 'And on the other side of the Jordan, of the Reubenites, and the Gadites, and of the half tribe of Manasseh, an hundred and twenty thousand with all the instruments of war.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'all-tribes-hebron',
          html:
            'The assembly at Hebron is breathtaking in its scope. All twelve tribes sent warriors. Even Benjamin — Saul&apos;s tribe — sent soldiers, though the text notes that most had previously kept Saul&apos;s house. The shift is complete. Israel, in its totality, has turned to David. The text emphasizes that this was "according to the word of the Lord." This was not conquest; it was covenant. It was heaven&apos;s will becoming manifest on earth.',
        },
        {
          kind: 'commentary',
          id: 'issachar-discernment',
          html:
            'The tribe of Issachar is given special praise: "men that had understanding of the times, to know what Israel ought to do." Wisdom is not merely knowledge of facts. It is the capacity to perceive the times — to understand what moment history has reached, and what response is required. Issachar brought two hundred such wise men, and "all their brethren were at their commandment." Wisdom, when true, becomes leadership.',
        },
        {
          kind: 'hebrew',
          id: 'issachar-understanding',
          title: 'בִּינָה — Binah: Discernment and Understanding',
          script: 'בִּינָה',
          translit: '<strong>Binah</strong> · understanding; discernment; the capacity to perceive what is true',
          description:
            'The Hebrew word for "understanding" used here — binah — suggests not mere intellectual knowledge, but a deep perception of truth. The men of Issachar had binah: they could discern the times. They understood that David was the one God had chosen, and they knew what Israel needed to do. This kind of understanding births wise leadership.',
        },
        {
          kind: 'commentary',
          id: 'not-double-heart',
          html:
            'The text notes of Zebulun that they "were not of a double heart." They did not come wavering between allegiance to Saul and to David. Their commitment was whole. The "perfect heart" — the undivided heart — is a recurring theme in this chapter. Israel came to make David king with hearts that were unified, resolved, at peace.',
        },
        {
          kind: 'hebrew',
          id: 'levav-shalem',
          title: 'לֵבָב שָׁלֵם — Levav Shalem: Perfect Heart',
          script: 'לֵבָב שָׁלֵם',
          translit: '<strong>Levav shalem</strong> · a whole heart; undivided loyalty; complete covenant commitment',
          description:
            'The phrase "perfect heart" — levav shalem — appears again in verse 38, where it describes the entire assembly: "all these men of war came...with a perfect heart." A perfect heart is not perfection of deed, but integrity of purpose. It is the heart that is not divided, not calculating, not hedging its bets. It is the heart wholly given.',
        },
        {
          kind: 'carry',
          html:
            'We live in an age of competing loyalties and half-commitments. We are pulled in many directions. But the kingdom — any true kingdom, any true community — is built by those who come with "a perfect heart." Not a heart that pretends to have no doubts, but a heart that has resolved its doubts and committed fully to what it has discerned to be true. What would change in your own commitments if you brought a perfect heart?',
        },
        {
          kind: 'reflection',
          id: 'perfect-heart',
          prompt: 'The text emphasizes that all Israel came to make David king "with a perfect heart." What does it mean to give yourself wholly to something? What keeps your heart divided?',
        },
      ],
    },

    /* ─── 1 Chronicles 12:38–40 — The Feast and Joy in Israel ─────────── */
    {
      ref: '1 Chronicles 12:38–40',
      title: 'The Feast: Joy in Israel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(38, 'All these men of war, that could keep rank, came with a perfect heart to Hebron, to make David king over all Israel: and all the rest also of Israel were of one heart to make David king.'),
            plain(39, 'And they were there with David three days, eating and drinking: for their brethren had prepared for them.'),
            {
              number: 40,
              spans: [
                t('Moreover they that were nigh them, even unto Issachar and Zebulun and Naphtali, brought bread on asses, and on camels, and on mules, and on oxen, and meat, and meal, cakes of figs, and bunches of raisins, and wine, and oil, and oxen, and sheep abundantly: for there was '),
                hy('joy in Israel', 'joy-in-israel'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'perfect-heart-hebron',
          html:
            'The opening phrase returns us to the heart: "All these men of war...came with a perfect heart to Hebron." To have a perfect heart is to be whole — not divided in allegiance or intent. These warriors came not as conscripts or mercenaries, but as men who had resolved that David was God&apos;s choice, and their hearts were knit to that choice.',
        },
        {
          kind: 'commentary',
          id: 'three-days-feast',
          html:
            'For three days, all Israel celebrated together — eating, drinking, making merry. And the celebration was not hoarded by those in Hebron. Those from neighboring tribes — Issachar, Zebulun, Naphtali — brought provisions: bread on beasts of burden, meat, cakes of figs, raisins, wine, oil. The entire nation was feeding the joy. It was a moment of such unity, such peace, that abundance flowed from every tribe.',
        },
        {
          kind: 'commentary',
          id: 'joy-in-israel',
          html:
            'The text concludes with a single phrase that echoes across the generations: "for there was joy in Israel." This is not the joy of conquest or military victory. This is the joy of a people gathered under one king, united by covenant, recognizing in that unity the hand of God. The kingdom feast is a foretaste of something eternal.',
        },
        {
          kind: 'hebrew',
          id: 'simchah-israel',
          title: 'שִׂמְחָה — Simchah: The Joy of the Kingdom',
          script: 'שִׂמְחָה',
          translit: '<strong>Simchah</strong> · joy; celebration; the gladness of covenant fulfilled',
          description:
            'The Hebrew word simchah denotes not mere happiness, but sacred joy — the joy of God&apos;s purposes being fulfilled, of covenant being made, of a people united. The "joy in Israel" at Hebron was simchah: it was the joy of heaven touching earth, of all twelve tribes gathering as one.',
        },
        {
          kind: 'christ',
          id: 'christ-feast',
          title: 'Christ Connection: The Kingdom Feast',
          html:
            'In Luke 14:15–24, Jesus speaks of the kingdom feast — a great supper to which all are invited. The chapter of 1 Chronicles 12 prefigures this: a king gathering His people around Him, people coming from every tribe and place, a table spread with abundance. In Revelation 7:9, John sees "a great multitude which no one could count, from every nation and tribe and people and tongue, standing before the throne and before the Lamb, clothed in white robes." This is the ultimate fulfillment of what Hebron foreshadowed: all peoples, all tribes, gathered in joy around the true King.',
        },
        {
          kind: 'carry',
          html:
            'The chapter ends not with military strategy, but with a feast. Not with the aftermath of war, but with celebration. This tells us something essential about the kingdom: it is not built on force alone, but on the deep joy of communion. When people come to recognize a true king — one chosen by God, one who leads with wisdom and justice — the natural response is joy. It is not grim duty, but gladness. Have you tasted that joy — the joy of being part of something larger than yourself, something that gathers people from all walks of life?',
        },
        {
          kind: 'reflection',
          id: 'kingdom-joy',
          prompt: 'The chapter ends with "joy in Israel" at the feast. When have you experienced a moment of true community, where people from different backgrounds came together around a shared purpose? What made that moment joyful?',
        },
      ],
    },
  ],
};
