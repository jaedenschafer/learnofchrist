import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Chronicles 18 — David's Wars & Conquests
 *
 * After years of building the kingdom, David's reign expands in a series of
 * military victories. The Philistines are subdued, Moab comes under David's
 * dominion, Hadarezer king of Zobah is defeated in a vast campaign, the
 * Syrians are broken, and Edom is conquered. Through it all, the text weaves
 * a refrain: "The Lord preserved David whithersoever he went." The chapter is
 * not a narrative of wars for their own sake, but a testimony to how God's
 * providence extends David's reign and gathers the nations under a righteous
 * king. The treasure taken from these conquests will fund Solomon's temple,
 * pointing forward to the day when the wealth of nations is brought into the
 * kingdom of God.
 */
export const CHRONICLES_1_18: RichChapterContent = {
  bookSlug: '1-chronicles',
  bookName: '1 Chronicles',
  chapter: 18,

  estimatedMinutes: { beginner: 3, intermediate: 7, deep: 11 },
  intros: [
    'The first book of Chronicles presents David not as a man searching for a throne, but as a king consolidating a kingdom. He is anointed, established, building the house of God. And in chapter 18, the text turns to a series of military campaigns that expand Israel&apos;s dominion. Yet these wars are told with a remarkable theological framing: not as the conquest of a mighty king, but as the work of the Lord establishing His kingdom upon the earth.',
    'Each victory — over Philistines, Moab, Hadarezer, Syria, Edom — is met with the same refrain: "Thus the Lord preserved David whithersoever he went." The conquests gather treasure that will be dedicated to the Lord and used to build the temple. David reigns and executes judgment and justice. In this chapter, we see a kingdom that is not built on the strength of one man, but on God&apos;s faithfulness to extend David&apos;s rule. And behind that rule is a pattern: the kingdom expanding, nations coming into submission, their wealth flowing into the worship of God.',
  ],

  bottomShare: {
    label: 'Share 1 Chronicles 18',
    quote:
      'The Lord preserved David whithersoever he went. As David&apos;s kingdom expanded through victory, the treasure of nations was gathered and dedicated to the worship of God — a pattern that points to the day when all kingdoms shall bow to Christ.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Chronicles 18 · Study Guide',
  },

  sections: [
    /* ─── 1 Chronicles 18:1–2 — The Philistines and Moab ─────────────────── */
    {
      ref: '1 Chronicles 18:1–2',
      title: 'Philistines and Moab Subdued',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(
              1,
              'Now after this it came to pass, that David smote the Philistines, and subdued them, and took Gath and her towns out of the hand of the Philistines.'
            ),
            plain(2, 'And he smote Moab; and the Moabites became David&apos;s servants, and brought gifts.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'philistines-subdued',
          html:
            'David moves against the Philistines, the ancient enemies of Israel. For generations, they had been a threat to Israel&apos;s stability. Saul died at their hands. But now David takes Gath — a major Philistine stronghold — and the dominion shifts. What was once a threat becomes a subject people. The language is simple: he "smote" and "subdued."',
        },
        {
          kind: 'commentary',
          id: 'moab-servants',
          html:
            'Moab, the nation born of Lot&apos;s incest (Genesis 19), becomes David&apos;s servant people. They bring gifts — a sign of submission and tribute. The conquered do not disappear; they are integrated into David&apos;s kingdom. They serve. They bring their wealth. Yet they remain. This is the pattern that repeats throughout the chapter: not annihilation, but subordination and tribute.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes what we have fought against for years — a habit, a fear, a rival — suddenly comes under our authority. Not through our own strength alone, but through circumstances that shift. David did not wake one morning believing he would defeat the Philistines. He moved, and the Lord preserved him. What battles in your own life might be turning, not because you have become stronger, but because the Lord has shifted the ground beneath your feet?',
        },
        {
          kind: 'reflection',
          id: 'philistines-moab',
          prompt:
            'What role has submission played in your growth? When you have yielded what you could not control, what has that opened up for you?',
        },
      ],
    },

    /* ─── 1 Chronicles 18:3–8 — Hadarezer & the Greater Conquest ──────────── */
    {
      ref: '1 Chronicles 18:3–8',
      title: 'Hadarezer Defeated & the Treasure Gathered',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(
              3,
              'And David smote Hadarezer king of Zobah unto Hamath, as he went to stablish his dominion by the river Euphrates.'
            ),
            plain(
              4,
              'And David took from him a thousand chariots, and seven thousand horsemen, and twenty thousand footmen: David also houghed all the chariot horses, but reserved of them an hundred chariots.'
            ),
            plain(
              5,
              'And when the Syrians of Damascus came to succour Hadarezer king of Zobah, David slew of the Syrians twenty and two thousand men.'
            ),
            plain(6, 'Then David put garrisons in Syriadamascus; and the Syrians became David&apos;s servants, and brought gifts. Thus the Lord preserved David whithersoever he went.'),
            plain(
              7,
              'And David took the shields of gold that were on the servants of Hadarezer, and brought them to Jerusalem.'
            ),
            plain(
              8,
              'Likewise from Tibhath and from Chun, cities of Hadarezer, brought David very much brass: wherewith Solomon made the brasen sea, and the pillars, and the vessels of brass.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'hadarezer-conquest',
          html:
            'David&apos;s campaign against Hadarezer king of Zobah is his most ambitious yet. Hadarezer was attempting to expand his own empire toward the river Euphrates — the boundary of the promised land. David confronts him and defeats him utterly. Chariots and horsemen are captured in vast numbers. The victory is overwhelming.',
        },
        {
          kind: 'commentary',
          id: 'houghed-chariots',
          html:
            'David "houghed all the chariot horses" — he hamstrung them. This is a telling detail. He does not build a chariot force. He reserves only a hundred chariots. There is a theological principle at work: a king of Israel is not to trust in horses and chariots but in the Lord (Psalm 20:7; Deuteronomy 17:16). David takes the chariots as trophies, as signs of dominion, but he disables them, declaring that Israel&apos;s security does not lie in military hardware.',
        },
        {
          kind: 'hebrew',
          id: 'natsar-hebrew',
          title: 'Natsar — "Preserved" or "Guarded"',
          script: 'נָצַר',
          translit: '<strong>Natsar</strong> · to preserve, guard, protect; to keep safe',
          description:
            'The word "natsar" appears in the refrain "Thus the Lord preserved David whithersoever he went." It carries the sense not of passive good luck, but of active divine protection — God as a garrison, as a watcher. The root suggests keeping safe, guarding as one guards a treasure. David is not an isolated conqueror; he is a man kept by the Lord in all his goings.',
        },
        {
          kind: 'commentary',
          id: 'treasure-for-temple',
          html:
            'The shields of gold, the brass from Tibhath and Chun — these are not kept for David&apos;s own wealth or display. They are brought to Jerusalem, destined for the temple. The text explicitly tells us that this brass becomes the material for Solomon&apos;s sea, the pillars, the sacred vessels. The victories of the present king fund the worship of the future. The conquest is not an end in itself; it is a channel through which God&apos;s provision flows toward the place where His name will dwell.',
        },
        {
          kind: 'carry',
          html:
            'What we gain — resources, position, influence — is not ours to keep. David had every right to keep the gold shields, to build a treasury for his own kingdom. Instead, they flow toward the worship of God. When you gain something, do you ask: how can this serve the kingdom of God? Or do you assume it is yours to keep?',
        },
        {
          kind: 'reflection',
          id: 'hadarezer',
          prompt:
            'What treasure has come to you through victory or effort? How might that treasure be dedicated to something larger than your own security or comfort?',
        },
      ],
    },

    /* ─── 1 Chronicles 18:9–13 — Tou of Hamath & Edom ───────────────────── */
    {
      ref: '1 Chronicles 18:9–13',
      title: 'The Nations Bring Gifts & Edom is Subdued',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(
              9,
              'Now when Tou king of Hamath heard that David had smitten all the host of Hadarezer king of Zobah;'
            ),
            plain(
              10,
              'He sent Hadoram his son to king David, to enquire of his welfare, and to congratulate him, because he had fought against Hadarezer, and smitten him; (for Hadarezer had war with Tou;) and with him all manner of vessels of gold and silver and brass.'
            ),
            plain(11, 'Them also king David dedicated unto the Lord, with the silver and the gold that he brought from all these nations;'),
            plain(
              12,
              'From Edom, and from Moab, and from the children of Ammon, and from the Philistines, and from Amalek.'
            ),
            plain(
              13,
              'Moreover Abishai the son of Zeruiah slew of the Edomites in the valley of salt eighteen thousand. And he put garrisons in Edom; and all the Edomites became David&apos;s servants. Thus the Lord preserved David whithersoever he went.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'tou-congratulate',
          html:
            'Tou king of Hamath sends his son to David with congratulations. He was himself in conflict with Hadarezer. When David defeats Hadarezer, Tou recognizes the shift in power and acts diplomatically. He sends vessels of gold, silver, and brass — gifts acknowledging David&apos;s new status as the dominant power in the region. The gift is also a hedge against future conflict. David&apos;s kingdom is becoming known.',
        },
        {
          kind: 'commentary',
          id: 'all-dedicated',
          html:
            'David dedicates all the vessels and treasures to the Lord. The text is emphatic: not just Tou&apos;s gifts, but all the treasures "from all these nations" — Edom, Moab, Ammon, Philistines, Amalek. The conquest is not private enrichment. It is the dedication of the wealth of nations to the God of Israel. This is a theological statement: all dominion, all treasure flows ultimately to God.',
        },
        {
          kind: 'hebrew',
          id: 'qodesh-hebrew',
          title: 'Qodesh — "Holy" or "Dedicated"',
          script: 'קֹ֫דֶשׁ',
          translit: '<strong>Qodesh</strong> · holiness, the sacred, that which is set apart for God',
          description:
            'When David "dedicates" the treasure to the Lord, the Hebrew often uses the root related to "qodesh" — to set apart as holy, to consecrate. The treasure is not merely given to the temple; it is removed from ordinary use and placed in the sacred realm. It becomes God&apos;s, not David&apos;s.',
        },
        {
          kind: 'commentary',
          id: 'abishai-edom',
          html:
            'Abishai (David&apos;s nephew, Joab&apos;s brother) defeats the Edomites in the valley of salt, slaying eighteen thousand. Edom, whose name means "red" and whose ancestor Esau sold his birthright, becomes David&apos;s servant. The last of the great victories is accomplished. And the refrain comes again: "Thus the Lord preserved David whithersoever he went."',
        },
        {
          kind: 'carry',
          html:
            'The refrain echoes twice now, and it will appear once more in the chapter. It is not David&apos;s might that is celebrated, but the Lord&apos;s faithfulness. In all these battles, in all these victories, the Lord preserved David. This is not the language of a warrior boasting of his prowess. It is the language of a man who knows he has been kept, guarded, protected by something beyond himself. Do you know that you are being preserved? Or do you live as though your safety depends only on your own vigilance and strength?',
        },
        {
          kind: 'reflection',
          id: 'edom-subdued',
          prompt:
            'When have you recognized that you were being preserved or protected by something beyond your own efforts? How did that change the way you lived?',
        },
      ],
    },

    /* ─── 1 Chronicles 18:14–17 — David's Righteous Administration ───────── */
    {
      ref: '1 Chronicles 18:14–17',
      title: 'David Reigns with Judgment and Justice',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(14, 'So David reigned over all Israel, and executed judgment and justice among all his people.'),
            plain(15, 'And Joab the son of Zeruiah was over the host; and Jehoshaphat the son of Ahilud, recorder;'),
            plain(16, 'And Zadok the son of Ahitub, and Abimelech the son of Abiathar, were the priests; and Shavsha was the scribe;'),
            plain(17, 'And Benaiah the son of Jehoiada was over the Cherethites and the Pelethites; and the sons of David were chief about the king.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'judgment-justice',
          html:
            'After the catalogue of wars comes a single, profound statement: "David reigned over all Israel, and executed judgment and justice among all his people." The wars gather the territory. But the reign is defined not by conquest alone, but by righteousness. Judgment and justice are the marks of a true king. They are the qualities that make a kingdom stable, that make a people trust their ruler.',
        },
        {
          kind: 'hebrew',
          id: 'mishpat-tzedakah',
          title: 'Mishpat & Tzedakah — "Judgment and Justice"',
          script: 'מִשְׁפָּט וּצְדָקָה',
          translit: '<strong>Mishpat</strong> · judgment, decree; <strong>Tzedakah</strong> · righteousness, justice, what is right',
          description:
            'These two words are often paired in Scripture to describe the foundation of a just kingdom. "Mishpat" is the judgment itself — the ruling, the decision. "Tzedakah" is the righteousness behind it — the sense of what is right and true. Together they describe a ruler who not only makes decisions, but makes decisions rooted in what is right. David&apos;s kingdom is built not on conquest alone, but on this foundation.',
        },
        {
          kind: 'commentary',
          id: 'david-officers',
          html:
            'The text names David&apos;s officers: Joab over the army, Jehoshaphat the recorder (keeper of records), Zadok and Abimelech the priests, Shavsha the scribe, Benaiah over the royal guard, and David&apos;s own sons as his closest advisors. This is not a kingdom ruled by one man&apos;s whim. It is a structured kingdom with clear roles and responsibilities. The administration is as important as the military.',
        },
        {
          kind: 'christ',
          id: 'christ-greater-kingdom',
          title: 'Christ Connection — The True King & His Everlasting Kingdom',
          html:
            'David&apos;s kingdom expands through military victory, yet its true glory is found in judgment and justice. But David&apos;s reign is temporary; his kingdom will pass to another. Jesus teaches that His kingdom "is not of this world" (John 18:36), yet it is no less real. Like David, Jesus executes perfect judgment and justice (Isaiah 9:7: "Of the increase of his government and peace there is no end, upon the throne of David, and upon his kingdom, to order it, and to establish it with judgment and with justice"). But where David&apos;s kingdom was expanded by the sword, Jesus&apos;s kingdom is expanded by the gospel — not by conquest of nations, but by the transformation of hearts. And where the treasure of nations flowed to Solomon&apos;s temple, Revelation shows us a vision of the end: "The kings of the earth do bring their glory and honour into it" (Revelation 21:24) — all the wealth of creation flowing at last into the worship of God through the Lamb. David&apos;s pattern prefigures Jesus&apos;s fulfillment.',
        },
        {
          kind: 'carry',
          html:
            'A true leader is known not by what he conquers, but by what he builds. Not by his enemies subdued, but by his people served. David reigned and executed judgment and justice. How do you exercise whatever authority or influence you have? Is it for domination, or for the flourishing of those under your care? Is it rooted in what is truly right, or in what benefits you?',
        },
        {
          kind: 'reflection',
          id: 'david-reign',
          prompt:
            'What role have judgment and justice played in your own life? When have you seen them honored, and when have you seen them violated? How do you want to exercise whatever influence you have?',
        },
      ],
    },
  ],
};
