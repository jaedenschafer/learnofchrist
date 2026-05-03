import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Chronicles 5 — The Sons of Reuben, Gad, and Half-Manasseh
 *
 * This chapter unfolds the genealogy of the eastern tribes — Reuben, Gad,
 * and half-Manasseh — and traces a paradox: these were valiant warriors,
 * mighty in battle, who won stunning victories through faith and trust in
 * God. Yet they fell to exile precisely because they "transgressed against
 * the God of their fathers." The narrative presents a sobering pattern: even
 * success does not preserve us from the consequences of faithlessness. But
 * threaded through it is a counterpoint — the promise of a True Firstborn,
 * Jesus Christ, who never defiled His Father&apos;s house and who reigns forever.
 */
export const CHRONICLES_1_5: RichChapterContent = {
  bookSlug: '1-chronicles',
  bookName: '1 Chronicles',
  chapter: 5,

  estimatedMinutes: { beginner: 6, intermediate: 13, deep: 18 },
  intros: [
    'The tribe of Reuben carries a name shadowed by failure. Jacob&apos;s firstborn, the one who should have inherited the double portion and the leadership of Israel, lost both birthright and blessing because he "defiled his father&apos;s bed" (Genesis 49:3–4). That ancient sin echoes into 1 Chronicles 5. The text begins by restating a truth that must have felt both shameful and explanatory to Israel: the birthright was not Reuben&apos;s. It went to Joseph. The rule — the scepter and chief ruler — went to Judah. And so Reuben is enrolled not as the head of tribes, but as one among them.',
    'Yet the chapter does not dwell in shame alone. The eastern tribes — Reuben, Gad, and half-Manasseh — emerge as formidable warriors. They numbered tens of thousands of men, skilled in bow and sword, "able to bear shield and sword." And when they cried to God in battle against the Hagarites, they were answered. They won decisively. They took spoil and dwelt securely in their lands.',
    'But the story does not end in triumph. The chapter closes with exile. These same tribes, having "transgressed against the God of their fathers," were carried away captive by the kings of Assyria to Halah, Habor, and the river Gozan. Success without faithfulness, strength without obedience — these do not anchor a people. In this chapter, we are invited to read a pattern that runs through all of Scripture: the consequence of turning from God, even when we are strong enough to defend ourselves. And in the silence of that exile, the promise of Christ — the True Firstborn — becomes the hope that does not fail.',
  ],

  bottomShare: {
    label: 'Share 1 Chronicles 5',
    quote:
      'They were helped against them, the Hagarites were delivered into their hand; for they cried to God in the battle, and he was intreated of them, because they put their trust in him. But they transgressed against the God of their fathers, and went a whoring after the gods of the people of the land.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Chronicles 5 · Study Guide',
  },

  resources: [
    {
      id: 'bibleodyssey-levites',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Levites and Levitical Cities',
      url: 'https://www.bibleodyssey.org/dictionary/levite/',
      description: 'SBL study entry on Levite origins, roles, and tribal allotments.',
    },
  ],

  sections: [
    /* ─── 1 Chronicles 5:1–2 — Reuben's Lost Birthright ──────────────────── */
    {
      ref: '1 Chronicles 5:1–2',
      title: 'Reuben&apos;s Lost Birthright',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 1,
              spans: [
                t('Now the sons of Reuben the firstborn of Israel, (for '),
                hg('he was the firstborn', 'reuben-firstborn'),
                t('; but, forasmuch as he '),
                hg('defiled his father&apos;s bed', 'defiled-bed'),
                t(', his '),
                hy('birthright was given unto the sons of Joseph', 'birthright-joseph'),
                t(';)'),
              ],
            },
            {
              number: 2,
              spans: [
                t('For Judah '),
                hg('prevailed above his brethren', 'judah-rule'),
                t(', of him came the chief ruler; but the birthright was Joseph&apos;s:)'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'reuben-firstborn',
          html:
            'Reuben is named first among the sons of Israel by right of birth-order. Yet the text immediately qualifies this position: "forasmuch as he defiled his father&apos;s bed." The firstborn carried a birthright — the double portion of inheritance, and often the patriarchal authority over the family. But Reuben&apos;s transgression cost him both. This is not told with judgment or condemnation in this moment, but simply as fact. A man&apos;s sins reshape the order of his household. [res:bibleodyssey-levites]',
        },
        {
          kind: 'commentary',
          id: 'defiled-bed',
          html:
            'The reference to defiling Jacob&apos;s bed points to Genesis 35:22, where Reuben lies with Bilhah, Jacob&apos;s concubine. In the ancient world, such an act was an assertion of dominance, a seizure of the patriarch&apos;s authority and status. It was rebellion as much as sin. And it forfeited everything. The consequences are binding and inevitable.',
        },
        {
          kind: 'hebrew',
          id: 'bekhorah',
          title: 'Bekhorah — "The Birthright"',
          script: 'בְּכוֹרָה',
          translit: '<strong>Bekhorah</strong> · birthright; the right of the firstborn to inherit a double portion and leadership',
          description:
            'In Hebrew culture, the bekhorah was not merely an inheritance — it was a covenant status, a sacred trust. To lose the birthright was to lose your place in the order of grace. Reuben lost it through moral failure. Yet the chapter will show that even without the birthright, there is provision, power, and a path. But there is always a cost to sin.',
        },
        {
          kind: 'commentary',
          id: 'birthright-joseph',
          html:
            'Joseph received the birthright in Reuben&apos;s place. This echoes Genesis 48, where Jacob adopts Joseph&apos;s two sons, Ephraim and Manasseh, giving them status as full tribes of Israel. Through them, Joseph received a double portion — two tribal inheritances instead of one. Reuben lost what he was born to hold.',
        },
        {
          kind: 'commentary',
          id: 'judah-rule',
          html:
            'Judah received what the firstborn might have carried: the rule, the chief ruler. The scepter did not pass to Reuben, nor was it ever intended to. It went to Judah, the fourth son, whose tribe would later produce King David and the line of kings that led to Christ Himself. The text is setting up a fundamental theological truth: leadership in God&apos;s people does not follow earthly logic. It follows God&apos;s selection.',
        },
        {
          kind: 'carry',
          html:
            'Our mistakes, our sins, can reshape our inheritance. What we were born with, we may forfeit through our own actions. Yet God&apos;s purposes do not fail. He redirects blessing to those who will receive it faithfully. If you have lost something through your own fault, take heart: God is not finished with His story. But honor the reality of the cost. Let the consequence teach you.',
        },
        {
          kind: 'reflection',
          id: 'reuben-lost',
          prompt: 'Reuben lost the birthright he was born to hold. Is there an inheritance — spiritual, relational, or otherwise — that you forfeited through your own choices? How do you make peace with that loss?',
        },
      ],
    },

    /* ─── 1 Chronicles 5:3–10 — The Sons of Reuben and Gad ─────────────── */
    {
      ref: '1 Chronicles 5:3–10',
      title: 'The Genealogy of Reuben and Gad',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(3, 'The sons of Reuben the firstborn; Hanoch, and Pallu, Hezron, and Carmi.'),
            plain(4, 'The sons of Joel; Shemaiah his son, Gog his son, Shimei his son,'),
            plain(5, 'Micah his son, Reaiah his son, Baal his son,'),
            plain(6, 'Beerah his son, whom Tilgath-pilneser king of Assyria carried away captive: he was prince of the Reubenites.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1-chronicles-5-mid-6',
          html:
            '<p>These names represent the leaders and builders God raised up for specific roles.</p>',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(7, 'And his brethren by their families, when the genealogy of their generations was reckoned, were the chief, Jeiel, and Zechariah,'),
            plain(8, 'And Bela the son of Azaz, the son of Shema, the son of Joel, who dwelt in Aroer, even unto Nebo and Baal-meon:'),
            plain(9, 'And eastward he inhabited unto the entering in of the wilderness from the river Euphrates: because their cattle were multiplied in the land of Gilead.'),
            plain(10, 'And in the days of Saul they made war with the Hagarites, who fell by their hand: and they dwelt in their tents throughout all the east land of Gilead.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'reuben-names',
          html:
            'The sons of Reuben are listed: Hanoch, Pallu, Hezron, Carmi. These are the names that anchored the tribe&apos;s identity. Each name represents a branch, a family, a strand of continuity stretching through generations. The genealogy is specific, detailed — it is a record of who they were, even as the tribe carried the memory of Reuben&apos;s shame.',
        },
        {
          kind: 'commentary',
          id: 'beerah-captive',
          html:
            'Beerah, a prince of the Reubenites, was carried away captive by Tilgath-pilneser, king of Assyria. The text introduces the exile casually, almost in passing, as part of the genealogical record. But it carries weight. A prince of Reuben — a man of authority and prominence — was taken from his land. This is the first mention of what will come later: the captivity of the eastern tribes.',
        },
        {
          kind: 'commentary',
          id: 'cattle-multiplied',
          html:
            'The Reubenites dwelt in Aroer, in the land of Gilead, and eastward toward the river Euphrates. Their cattle multiplied. They prospered in the land. This is the picture of earthly success: good land, abundant herds, security in territory. Strength and resources filled the eastern side of the Jordan.',
        },
        {
          kind: 'carry',
          html:
            'We can build, multiply, prosper — and all of it is fragile if we lose our moorings in God. The Reubenites had cattle, land, security. They would later have strength and victory in battle. Yet all of it would be taken. Prosperity is not a sign of God&apos;s permanent favor if we disconnect from His covenant. Guard your heart more carefully than you guard your possessions.',
        },
        {
          kind: 'reflection',
          id: 'reuben-genealogy',
          prompt: 'The Reubenites prospered in their land, yet later were carried into captivity. What does this teach us about the relationship between worldly success and spiritual faithfulness?',
        },
      ],
    },

    /* ─── 1 Chronicles 5:11–17 — The Sons of Gad ────────────────────────── */
    {
      ref: '1 Chronicles 5:11–17',
      title: 'Gad&apos;s Mighty Men',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(11, 'And the sons of Gad dwelt over against them, in the land of Bashan unto Salcah:'),
            {
              number: 12,
              spans: [
                t('Joel the chief, and Shapham the next, and Janai, and Shaphat in Bashan.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And their brethren of the house of their fathers were, Michael, and Meshullam, and Sheba, and Jorai, and Jachan, and Zia, and Heber, seven.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1-chronicles-5-mid-13',
          html:
            '<p>These names represent the leaders and builders God raised up for specific roles.</p>',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(14, 'These are the sons of Abihail the son of Huri, the son of Jaroah, the son of Gilead, the son of Michael, the son of Jeshishai, the son of Jahdo, the son of Buz;'),
            plain(15, 'Ahi the son of Abdiel, the son of Guni, chief of the house of their fathers.'),
            plain(16, 'And they dwelt in Gilead in Bashan, and in the towns thereof, and in all the suburbs of Sharon, upon their borders.'),
            plain(17, 'All these were reckoned by genealogies in the days of Jotham king of Judah, and in the days of Jeroboam king of Israel.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'gad-bashan',
          html:
            'The sons of Gad dwelt in Bashan — the high, fertile plateau east of the Jordan, known for its strength and resources. Joel is named the chief, with Shapham next in authority. The naming of these leaders is significant: they are remembered, recorded, and held up as the shepherds of the tribe. Leadership in Israel was not anonymous; it was personal and named.',
        },
        {
          kind: 'commentary',
          id: 'gad-houses',
          html:
            'The genealogy of Gad is extensive, tracing lineages back through Michael, Jeshishai, Jahdo, and Buz. This is not ornamental detail. Each name represents a household, a unit of the community, a voice in the council. The genealogy affirms that Gad was not a loose collection of individuals but a structured, organized people with clear lines of kinship and authority.',
        },
        {
          kind: 'hebrew',
          id: 'bashan',
          title: 'Bashan — "The Fertile High Land"',
          script: 'בָּשָׁן',
          translit: '<strong>Bashan</strong> · the high plateau east of the Jordan; known for strength, fertility, and the great herds of Bashan',
          description:
            'Bashan was proverbial for strength. "The kine of Bashan" in Amos 4:1 were symbols of well-fed luxury and power. Gad dwelt in this place of strength. The choice of land was good. Yet even the strength of Bashan would not save them from exile when they turned from God.',
        },
        {
          kind: 'carry',
          html:
            'The genealogies in Scripture are more than names. They are affirmations of identity, records of who belonged, who was seen, who was counted as part of the people of God. In our own lives, we sometimes feel unseen, uncounted. But God&apos;s record includes you. Your name is known. Your genealogy — your place in the family of faith — is secure in His sight.',
        },
        {
          kind: 'reflection',
          id: 'gad-genealogy',
          prompt: 'The Gadites are listed by name, lineage, and genealogy. What does it mean to you that God knows the names of His people, and that you are counted in His record?',
        },
      ],
    },

    /* ─── 1 Chronicles 5:18–22 — Victory Through Trust ──────────────────── */
    {
      ref: '1 Chronicles 5:18–22',
      title: 'Victory Through Trust in God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 18,
              spans: [
                t('The sons of Reuben, and the Gadites, and half the tribe of Manasseh, of valiant men, men able to bear buckler and sword, and to shoot with bow, and skilful in war, were four and forty thousand seven hundred and threescore, that went out to the war.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And they made war with the Hagarites, with Jetur, and Nephish, and Nodab.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And '),
                hg('they were helped against them', 'helped-victory'),
                t(', and the Hagarites were '),
                t('delivered into their hand'),
                t(', and all that were with them: for they '),
                t('cried to God in the battle'),
                t(', and '),
                t('he was intreated of them'),
                t('; '),
                hp('because they put their trust in him', 'trust-prevails'),
                t('.'),
              ],
            },
            plain(21, 'And they took away their cattle; of their camels fifty thousand, and of sheep two hundred and fifty thousand, and of asses two thousand, and of men an hundred thousand.'),
            plain(22, 'For there fell down many slain, because the war was of God. And they dwelt in their steads until the captivity.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'valiant-men',
          html:
            'The eastern tribes numbered 44,760 valiant men — warriors equipped and trained. They carried shield and sword, were skilled with the bow, and knew the disciplines of war. This was not a rag-tag militia. This was a formidable military force. Yet the text will show that their numbers and skills were not the source of their victory.',
        },
        {
          kind: 'commentary',
          id: 'hagarites-enemies',
          html:
            'The Hagarites were the enemy — possibly the Hagar-descended Arab tribes to the east. They were formidable foes, yet they fell to the Reubenites and Gadites. The victory was decisive. Fifty thousand camels, 250,000 sheep, 2,000 donkeys, and 100,000 men — the spoil was immense, and many enemy soldiers fell.',
        },
        {
          kind: 'commentary',
          id: 'helped-victory',
          html:
            'The text says "they were helped against them." Help came. It was not their own strength that secured victory, but assistance from beyond themselves. In the context of Scripture, such help is understood to come from God. The eastern tribes did not stand alone.',
        },
        {
          kind: 'hebrew',
          id: 'batach',
          title: 'Batach — "To Trust" or "To Put Confidence In"',
          script: 'בָּטַח',
          translit: '<strong>Batach</strong> · to trust; to rely upon; to put one&apos;s confidence in someone or something',
          description:
            'The verb batach carries the sense of leaning entirely on another for support. When the text says "they put their trust in him," it means they rested their full weight on God. They did not trust in their own weapons, their own skill, or their own numbers. They trusted God, and that trust was answered.',
        },
        {
          kind: 'commentary',
          id: 'trust-prevails',
          html:
            'Here is the spiritual hinge of the narrative: "Because they put their trust in him." Not because they were numerous. Not because they were skilled warriors. Not because they had the best weapons. They prevailed because they trusted God. They cried to Him in battle, and He was moved by that cry. This is the pattern of faith: we acknowledge our dependence, we call to God, and He responds.',
        },
        {
          kind: 'christ',
          id: 'hebrews-faith',
          title: 'Christ Connection — The Victory of Faith',
          html:
            'The writer of Hebrews lifts up this very principle: "And what shall I more say? for the time would fail me to tell of Gedeon, and of Barak, and of Samson, and of Jephthae; of David also, and Samuel, and of the prophets; Who through faith subdued kingdoms, wrought righteousness, obtained promises, stopped the mouths of lions" (Hebrews 11:32–34). The eastern tribes are not named in Hebrews, but they are part of this great cloud of witnesses — people who won victories not by their own might, but by faith in God. And Christ Himself is the fulfillment of this pattern. He is the One in whom all trust finds its ultimate anchor. His victory is not won by the sword, but by love and sacrifice and the power of God working through apparent weakness.',
        },
        {
          kind: 'carry',
          html:
            'What are you trusting in? Your own strength? Your own intelligence? Your own resources? The eastern tribes learned that these things are secondary. When you cry to God in your battle — when you acknowledge your dependence and call out to Him — you open yourself to a help that transcends your own capacity. It is not weakness to admit you need God. It is the only true strength.',
        },
        {
          kind: 'reflection',
          id: 'trust-battle',
          prompt: 'The eastern tribes won their battle not through superior force, but through trusting God. When have you experienced a victory that came not from your own strength, but from trust in God?',
        },
      ],
    },

    /* ─── 1 Chronicles 5:23–26 — Half-Manasseh and the Transgression ────── */
    {
      ref: '1 Chronicles 5:23–26',
      title: 'Transgression and the Eastern Tribes&apos; Exile',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(23, 'And the sons of the half tribe of Manasseh dwelt in the land: they increased from Bashan unto Baal-hermon and Senir, and unto mount Hermon.'),
            plain(24, 'And these were the heads of the house of their fathers, even Epher, and Ishi, and Eliel, and Azriel, and Jeremiah, and Hodaviah, and Jahdiel, mighty men of valour, famous men, and heads of the house of their fathers.'),
            {
              number: 25,
              spans: [
                t('And they '),
                hg('transgressed against the God of their fathers', 'transgressed-fathers'),
                t(', and '),
                hg('went a whoring after the gods of the people of the land', 'whoring-gods'),
                t(', whom God destroyed before them.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And the God of Israel '),
                hg('stirred up the spirit of Pul', 'pul-stirred'),
                t(' king of Assyria, and the spirit of Tilgath-pilneser king of Assyria, and he carried them away, even the Reubenites, and the Gadites, and the half tribe of Manasseh, and brought them unto Halah, and Habor, and Hara, and to the river of Gozan, unto this day.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'half-manasseh',
          html:
            'Half of the tribe of Manasseh dwelt east of the Jordan in Bashan, a land of strength and expansion. These were mighty men of valor, famous and renowned. The text emphasizes their power and status. Yet this power did not protect them from the consequences of their own unfaithfulness.',
        },
        {
          kind: 'commentary',
          id: 'transgressed-fathers',
          html:
            'The moment of fracture comes suddenly: "And they transgressed against the God of their fathers." Here is the turning point. After their great victory, their prosperity, their expansion — they turned away. They abandoned the covenant that had sustained them. This is not a matter of ignorance or accident. It is conscious rebellion.',
        },
        {
          kind: 'hebrew',
          id: 'asham',
          title: 'Chalal — "To Profane" or "To Defile"',
          script: 'חָלַל',
          translit: '<strong>Chalal</strong> · to profane; to defile; to break sacred order',
          description:
            'Just as Reuben "defiled" his father&apos;s bed (using a related concept), the eastern tribes "defiled" their covenant with God by turning to other gods. The word carries the sense of breaking what is sacred, of making common what should be set apart.',
        },
        {
          kind: 'commentary',
          id: 'whoring-gods',
          html:
            'The language "went a whoring after the gods of the people of the land" uses the metaphor of unfaithfulness, of infidelity to a covenant partner. The gods they turned to were the gods of the Canaanite peoples whom God had destroyed. They had seen God&apos;s power displayed in battle. Yet they turned to worship the very gods of the people God had driven out. The irony is profound and tragic.',
        },
        {
          kind: 'commentary',
          id: 'pul-stirred',
          html:
            'Pul (also known as Tiglath-Pileser) was king of Assyria, one of the greatest military powers of the ancient world. The text says God "stirred up the spirit" of this king. This is difficult language. It suggests that God used the Assyrian king as an instrument of judgment against Israel&apos;s unfaithfulness. God did not desire exile, but He permitted it as a consequence of His people&apos;s breaking covenant.',
        },
        {
          kind: 'commentary',
          id: 'halah-captivity',
          html:
            'The eastern tribes were carried away to Halah, Habor, Hara, and the river Gozan — distant cities in the Assyrian empire. The phrase "unto this day" indicates that when this genealogy was written, the exile was still in effect. The eastern tribes had not returned. Their cities sat empty. Their lands were occupied by others. The consequence was permanent — or so it seemed.',
        },
        {
          kind: 'carry',
          html:
            'Success and victory do not anchor us. Only faithfulness does. The eastern tribes had seen God work miracles in battle. They had won spoil beyond counting. They dwelt securely in a good land. And then they turned away. Perhaps they grew comfortable. Perhaps they thought their own power was sufficient. But covenant cannot be abandoned without cost. The exile came, and it did not pass quickly. Faithfulness is not a one-time choice. It is a daily practice, renewed even in the midst of blessing.',
        },
        {
          kind: 'reflection',
          id: 'transgression-exile',
          prompt: 'The eastern tribes transgressed after experiencing God&apos;s power and protection. How do we remain faithful when success tempts us to forget our dependence on God? What does faithfulness look like in times of blessing?',
        },
      ],
    },

    /* ─── Christ Connection: The True Firstborn ─────────────────────────── */
    {
      ref: 'Colossians 1:15; John 2:17',
      title: 'The True Firstborn Who Never Defiled His Father&apos;s House',
      blocks: [
        {
          kind: 'christ',
          id: 'true-firstborn',
          title: 'Christ Connection — The Eternal Firstborn',
          html:
            'Reuben was firstborn by birthright but lost it through defilement. Throughout Scripture, the theme recurs: the firstborn carries a promise and a responsibility. Yet Christ is presented as "the firstborn of all creation" (Colossians 1:15), and He is the firstborn who will never lose His inheritance. Unlike Reuben, He did not defile the house of His Father. Unlike the eastern tribes after their victory, He did not turn to other gods or forget His covenant. Instead, He redeemed the very birthright that human sin had forfeited. His zeal for the Father&apos;s house consumed Him (John 2:17). He is the Firstborn who never fails, the Son who never defiles, the One in whom all the promises of God find their Yes.',
        },
        {
          kind: 'carry',
          html:
            'Our failures do not define God&apos;s story. Reuben lost the birthright, but God&apos;s purposes continued. The eastern tribes fell into exile, but God did not abandon His covenant. And though we have all fallen short, we are invited into an inheritance that is not dependent on our own worthiness, but on the faithfulness of Christ. He is the True Firstborn. He is the One who holds the birthright forever, and He shares it with all who trust in Him.',
        },
      ],
    },
  ],
};
