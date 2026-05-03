import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 2 Samuel 8 — David's Conquests and Expanded Kingdom
 *
 * The chapter stands as a summary of David's military expansion and the
 * fullness of his reign. Six nations — Philistines, Moab, Zobah, Syria,
 * Edom, and Amalek — are subdued. The Lord preserves David whithersoever
 * he goes. His court is established with priests, recorders, military
 * commanders, and administrators. All the wealth of conquest is dedicated
 * to the Lord. The Davidic kingdom reaches its territorial completeness.
 */
export const SAMUEL_2_8: RichChapterContent = {
  bookSlug: '2-samuel',
  bookName: '2 Samuel',
  chapter: 8,

  estimatedMinutes: { 5: 4, 10: 10, 15: 11 },
  intros: [
    'After years of securing his throne and establishing his dynasty, David turns his attention outward. In 2 Samuel 8, we see the fullness of his military victories — the wars that will make his name great among the nations, the campaigns that expand the Davidic kingdom to its greatest extent. Philistines, Moabites, Syrians, Edomites — all bow before him. Yet what stands out in this chapter is not the glory of conquest alone. It is the repeated statement that "the Lord preserved David whithersoever he went," and the image of a king who takes the treasures of war and dedicates them to his God.',
    'This chapter is, in many ways, a summary. It shows us David at the apex of his earthly power — his kingdom stretched from the Euphrates to the border of Egypt, his enemies subdued, his government functioning with judges and priests and military commanders. Yet it also points forward. A king whose dominion is vast, whose enemies are many, who takes his victories and offers them to the Lord — this is the pattern of the one who will come, the one whose dominion will finally reach all nations, and who will reign forever.',
  ],

  opener: {
    matchArtist: /tissot|lecomte|corot/i,
    matchTitle: /david|conquest|warrior|battle/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share 2 Samuel 8',
    quote:
      'David subdued the Philistines, Moabites, Syrians, and Edomites. The Lord preserved him whithersoever he went. He took the treasures of these nations and dedicated them to the Lord, reigning over all Israel with judgment and justice.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Samuel 8 · Study Guide',
  },

  sections: [
    /* ─── 2 Samuel 8:1–4 — The Subduing of Philistines and Moab ────────── */
    {
      ref: '2 Samuel 8:1–4',
      title: 'Victory Over Philistines and Moab',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 1,
              spans: [
                t('And after this it came to pass, that David '),
                hg('smote the Philistines', 'c-philistines'),
                t(', and subdued them: and David took '),
                hy('Methegammah', 'c-methegammah'),
                t(' out of the hand of the Philistines.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-philistines',
          html:
            'David&apos;s first great enemies are the Philistines. They have haunted Israel since the days of Samson and the judges. Now, with the kingdom unified under David, he breaks their power decisively. To "smite" the Philistines is to crush them as an independent force.',
        },
        {
          kind: 'commentary',
          id: 'c-methegammah',
          html:
            'Methegammah means "bridle of the mother city" — it may refer to Gath, the chief Philistine stronghold. By taking it, David seizes control of the Philistine heartland. The bridle suggests mastery — David now holds the reins of what once threatened to choke out Israel.',
        },

        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 2,
              spans: [
                t('And he smote Moab, and measured them with a line, casting them down to the ground; with two lines measured he to put to death, and with one full line to keep alive. So the Moabites became David&apos;s servants, and brought gifts.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-moab-measured',
          html:
            'The image of measuring with a line is stark. David is determining which Moabites will live and which will die — a ruthless calculation of two to one. It is conquest by proportion, not random slaughter. The Moabites who survive become tributaries, bringing gifts to Jerusalem. This is the price of resistance to the king.',
        },

        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 3,
              spans: [
                t('David smote also '),
                hy('Hadadezer', 'c-hadadezer'),
                t(', the son of Rehob, king of Zobah, as he went to recover his border at the '),
                hy('river Euphrates', 'c-euphrates'),
                t('. And David took from him a thousand chariots, and seven hundred horsemen, and twenty thousand footmen: and David '),
                hg('houghed all the chariot horses', 'c-houghed'),
                t(', but reserved of them for an hundred chariots.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hadadezer',
          html:
            'Hadadezer of Zobah is a major regional power — his kingdom stretches toward the Euphrates. Defeating him is not a local victory. It is a regional conquest, extending David&apos;s power northward to the great river itself.',
        },
        {
          kind: 'hebrew',
          id: 'c-euphrates',
          title: 'River Euphrates — פְרָת',
          script: 'פְרָת',
          translit: '<strong>Perat</strong> · Euphrates',
          description:
            'The Euphrates is the boundary of the promised land itself — the extent to which God promised Abraham his seed would be stretched out. David now stretches his dominion to that very river. The conquest becomes not just military victory, but the realization of ancient covenant.',
        },
        {
          kind: 'commentary',
          id: 'c-houghed',
          html:
            'To "hough" the horses is to cut the sinew of their hind legs, rendering them useless for war. David does not want his people seduced by chariot warfare — the strength of kings in those days. He keeps only a hundred chariots, the minimum for a king, and disables the rest. He is establishing his dominion on the Lord&apos;s power, not on mounted might.',
        },
      ],
    },

    /* ─── 2 Samuel 8:5–8 — The Syrians of Damascus and Captured Treasures ─ */
    {
      ref: '2 Samuel 8:5–8',
      title: 'Damascus and the Treasures of Conquest',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 5,
              spans: [
                t('And when the Syrians of Damascus came to '),
                hg('succour Hadadezer', 'c-succour'),
                t(' king of Zobah, David slew of the Syrians twenty and two thousand men.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('Then David put garrisons in Syria of Damascus: and the Syrians became servants to David, and brought gifts. And '),
                hp('the Lord preserved David', 'c-preserved-1'),
                t(' whithersoever he went.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-succour',
          html:
            'The Syrians come to help their ally. But David&apos;s victory is total. Twenty-two thousand Syrians fall. Yet it is not ruthless slaughter — it is decisive. David does not destroy Damascus itself. He plants garrisons and establishes a political dominion. The Syrians yield and bring tribute.',
        },
        {
          kind: 'commentary',
          id: 'c-preserved-1',
          html:
            'The chapter sounds this note twice: "The Lord preserved David whithersoever he went." In the midst of all these military conquests, in a chapter devoted to David&apos;s victories and expansion, the theological bottom line is clear. Not David&apos;s strength, not his strategy, not his military genius. The Lord&apos;s preservation. David goes — and the Lord goes with him.',
        },

        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 7,
              spans: [
                t('And David took the shields of gold that were on the servants of Hadadezer, and brought them to Jerusalem.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And from Betah, and from Berothai, cities of Hadadezer, king David took exceeding much brass.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-treasures',
          html:
            'The gold shields of Hadadezer&apos;s warriors, the brass of his cities — David takes these not to display his wealth, but to bring them to Jerusalem, to bring them to the house of the Lord. These treasures become part of the temple, part of the worship. The spoils of war are consecrated.',
        },
      ],
    },

    /* ─── 2 Samuel 8:9–12 — Toi of Hamath Sends Gifts ──────────────────── */
    {
      ref: '2 Samuel 8:9–12',
      title: 'Toi of Hamath and the Gifts of Nations',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 9,
              spans: [
                t('When Toi king of Hamath heard that David had smitten all the host of Hadadezer,'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Then Toi sent Joram his son unto king David, to '),
                hg('salute him', 'c-salute'),
                t(', and to '),
                hg('bless him', 'c-bless'),
                t(', because he had '),
                hg('fought against Hadadezer', 'c-had-fought'),
                t(', and smitten him: for Hadadezer had wars with Toi. And Joram brought with him vessels of silver, and vessels of gold, and vessels of brass:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-salute',
          html:
            'Toi does not resist David. He hears of David&apos;s victory and sends his son Joram to salute him — to greet him formally, to acknowledge his power. This is not the gesture of an equal. It is the gesture of a king who recognizes a greater king.',
        },
        {
          kind: 'commentary',
          id: 'c-bless',
          html:
            'Toi sends his son to bless David. In the ancient world, blessing was a precious thing — a conveying of divine favor, of good wishes backed by power. That Toi blesses David is to acknowledge that David stands in a place of honor, that God&apos;s hand is upon him.',
        },
        {
          kind: 'commentary',
          id: 'c-had-fought',
          html:
            'Toi is glad that David has fought against Hadadezer, for they themselves are enemies. David&apos;s victory becomes Toi&apos;s relief. The picture is of a regional power structure realigning itself around David&apos;s emerging dominance.',
        },

        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 11,
              spans: [
                t('Which also king David did dedicate unto the Lord, with the silver and gold of all nations which he subdued;'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Of Syria, and of Moab, and of the children of Ammon, and of the Philistines, and of Amalek, and of the spoil of Hadadezer, son of Rehob, king of Zobah.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-dedicated',
          html:
            'All of it — the gold shields, the brass vessels, the gifts from Toi, the spoils of every nation — David dedicates to the Lord. The conquests are not for David&apos;s palace. They are for the house of God. The king takes the wealth of six nations and gives it back to His God. It is a simple, profound act: I conquered so that I could give to You.',
        },
        {
          kind: 'christ',
          id: 'universal-dominion',
          title: 'Christ Connection — The Dominion of the True King',
          html:
            'David&apos;s kingdom stretches from the Euphrates to the borders of Egypt, from nation to nation, from sea to sea. Yet Jesus will teach us to pray: "Thy kingdom come. Thy will be done in earth, as it is in heaven" (Matt. 6:10). And the Psalmist will sing of the one who comes after David: "All the ends of the world shall remember and turn unto the Lord: and all the kindreds of the nations shall worship before thee. For the kingdom is the Lord&apos;s: and he is the governor among the nations" (Psalm 22:27–28). In Revelation, John hears: "And the seventh angel sounded; and there were great voices in heaven, saying, The kingdoms of this world are become the kingdoms of our Lord, and of his Christ; and he shall reign for ever and ever" (Rev. 11:15). David&apos;s expansion points to a dominion not of conquest, but of willing worship — a King whose kingdom, unlike David&apos;s, will have no borders, no end, and no need of armies.',
        },
      ],
    },

    /* ─── 2 Samuel 8:13–14 — Edom and the Name Made Great ───────────────── */
    {
      ref: '2 Samuel 8:13–14',
      title: 'Edom and David\'s Name Made Great',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 13,
              spans: [
                t('And David gat him a name when he returned from smiting of the Syrians in the valley of salt, being eighteen thousand men.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-name',
          html:
            '"And David gat him a name" — this is what the world marks. When David returns from the valley of salt with a victory of eighteen thousand, his name becomes known among the nations. He is a great king, a conqueror, a man of war. The text notes it simply and factually. And then it moves on.',
        },

        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 14,
              spans: [
                t('He put garrisons in Edom; throughout all Edom put he garrisons: and all they of Edom became David&apos;s servants. And '),
                hp('the Lord preserved David', 'c-preserved-2'),
                t(' whithersoever he went.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-preserved-2',
          html:
            'And again, the refrain: "The Lord preserved David whithersoever he went." This is the theological summary of all these conquests. It is not that David made a name for himself. It is that the Lord preserved him. The greatness is not his. It is the Lord&apos;s preservation that makes the victory possible.',
        },
      ],
    },

    /* ─── 2 Samuel 8:15–18 — The Justice of the Kingdom ───────────────── */
    {
      ref: '2 Samuel 8:15–18',
      title: 'The Administration of Justice',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 15,
              spans: [
                t('And David '),
                hg('reigned over all Israel', 'c-reigned'),
                t(': and David '),
                hp('executed judgment and justice', 'c-justice'),
                t(' unto all his people.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-reigned',
          html:
            'After the wars, after the victories, after the nations bow before him — David reigned over all Israel. Not in title alone, but in reality. The military victories have established the physical kingdom. Now we see the spiritual one: a king who reigns over all Israel, unified, from north to south.',
        },
        {
          kind: 'hebrew',
          id: 'c-justice',
          title: 'Mishpat U-Tzedaqah — Judgment and Justice',
          script: 'מִשְׁפָּט וּצְדָקָה',
          translit: '<strong>Mishpat U-Tzedaqah</strong> · Judgment and justice; right judgment and righteousness',
          description:
            'Judgment without justice is tyranny. Justice without judgment is chaos. The two words together — mishpat (the legal determination of what is due) and tzedaqah (righteousness, the doing of what is right and good) — describe the fullness of a righteous reign. David&apos;s kingdom is not measured by its territory. It is measured by its justice.',
        },

        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 16,
              spans: [
                t('And Joab the son of Zeruiah was over the host; and Jehoshaphat the son of Ahilud was recorder;'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And Zadok the son of Ahitub, and Ahimelech the son of Abiathar, were the priests; and Seraiah was the scribe;'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And Benaiah the son of Jehoiada was over both the Cherethites and the Pelethites; and David&apos;s sons were chief rulers.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-administration',
          html:
            'The chapter ends not with a war cry or a list of victories, but with a list of offices. Joab commands the host. Jehoshaphat records the king&apos;s deeds. Zadok and Ahimelech serve as priests. Seraiah writes. Benaiah guards. David&apos;s own sons rule. This is the fullness of a kingdom — not armies alone, but administrators, priests, judges, recorders, scribes. The apparatus of a just and ordered state.',
        },
        {
          kind: 'carry',
          html:
            'You may be facing a situation that calls for both strength and gentleness, both the ability to act decisively and the willingness to do so justly. David conquered nations, yet when the chapter summarizes his reign, it does not glorify the conquests. It glorifies the "judgment and justice" he brought to all his people. Power without justice is oppression. Justice requires the strength to enforce it, yes — but it also requires the character to administer it fairly. Whatever sphere you lead, whatever responsibility you carry — seek to be a person of both judgment and justice. Do what is necessary. Do what is right.',
        },
        {
          kind: 'reflection',
          id: 'judgment-justice',
          prompt:
            'Where in your life are you called to exercise both strength and justice? How do you balance the ability to act with the commitment to act fairly? What does it look like to serve both judgment and justice in your own sphere?',
        },
      ],
    },
  ],
};
