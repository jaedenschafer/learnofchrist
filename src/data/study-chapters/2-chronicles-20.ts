import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Chronicles 20 — Jehoshaphat's Prayer; God Fights for Judah
 *
 * A great multitude marches toward Judah — the children of Moab, Ammon, and
 * others from beyond the sea. King Jehoshaphat is afraid, but fear becomes
 * the catalyst for faith. He proclaims a fast throughout all Judah, and the
 * people gather to seek the Lord. In the house of the Lord, Jehoshaphat
 * prays one of the most vulnerable prayers in Scripture: "We have no might
 * against this great company that cometh against us; neither know we what to
 * do: but our eyes are upon thee." And then comes the word of the Lord through
 * the prophet Jahaziel: "The battle is not yours, but God's." When Judah rises
 * to worship, when the singers go forth praising the Lord, God ambushes the
 * enemies. Worship becomes warfare. Prayer becomes victory. The valley where
 * they gather the spoil becomes the Valley of Berachah — the Valley of Blessing.
 * This is a chapter about a king and a people who learned that their power lies
 * not in their might, but in their eyes fixed upon the Lord.
 */
export const CHRONICLES_2_20: RichChapterContent = {
  bookSlug: '2-chronicles',
  bookName: '2 Chronicles',
  chapter: 20,

  estimatedMinutes: { beginner: 10, intermediate: 19, deep: 25 },
  intros: [
    'King Jehoshaphat rules over Judah during a time of relative peace and prosperity. But peace, in a fallen world, is always temporary. Word comes that a great multitude is marching toward Judah from beyond the sea — the children of Moab, the children of Ammon, and others, gathered together. It is a moment of crisis, the kind that threatens kingdoms. But Jehoshaphat&apos;s response reveals something profound about faith: fear becomes the doorway to seeking the Lord.',
    'What follows is not a military campaign. It is a prayer meeting. It is a congregation gathered before the house of the Lord, with women and children present, all seeking God&apos;s help. And in that moment of complete vulnerability — "we have no might, neither know we what to do" — God speaks. A prophet named Jahaziel receives the Spirit of the Lord and delivers a message that turns everything upside down: the battle does not belong to Judah. It belongs to the Lord. And when the people rise to worship, when singers go forth before the army praising the beauty of holiness, God sets ambushments against the enemies. The Lord fights. Worship is the weapon.',
  ],

  bottomShare: {
    label: 'Share 2 Chronicles 20',
    quote:
      'In a moment of crisis, Jehoshaphat prays: "We have no might against this great company that cometh against us; neither know we what to do: but our eyes are upon thee." And God answers: "The battle is not yours, but God\'s." When we cannot fight, we worship. And the Lord fights for us.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Chronicles 20 · Study Guide',
  },

  sections: [
    /* ─── 2 Chronicles 20:1–4 — The Great Multitude Comes ────────────────── */
    {
      ref: '2 Chronicles 20:1–4',
      title: 'The Great Multitude Comes',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(
              1,
              'It came to pass after this also, that the children of Moab and the children of Ammon, and with them other beside the Ammonites, came to battle against Jehoshaphat.'
            ),
            plain(
              2,
              'Then there came some that told Jehoshaphat, saying, There cometh a great multitude against thee from beyond the sea on this side Syria; and, behold, they be in Hazazon-tamar, which is En-gedi.'
            ),
            {
              number: 3,
              spans: [
                t('And Jehoshaphat '),
                hg('feared', 'fear-becomes-seeking'),
                t(', and set himself to seek the Lord, and proclaimed a fast throughout all Judah.'),
              ],
            },
            plain(
              4,
              'And Judah gathered themselves together, to ask help of the Lord: even out of all the cities of Judah they came to seek the Lord.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'fear-becomes-seeking',
          html:
            'Jehoshaphat is afraid. This is not weakness; this is the beginning of wisdom. His fear does not paralyze him into despair or into foolish military scheming. Instead, it drives him toward God. He proclaims a fast throughout all Judah — a national act of seeking, of turning away from food to turn toward prayer. And the people respond. From all the cities of Judah they gather, not to sharpen weapons or count soldiers, but to seek the Lord. Fear, when it turns a king&apos;s heart toward God, becomes the gateway to faith.',
        },
        {
          kind: 'commentary',
          id: 'hazazon-tamar',
          html:
            'The enemies gather at Hazazon-tamar, also called En-gedi — a place of springs in the wilderness. They come in abundance, a "great multitude." Judah is outmatched by numbers, by foreign armies, by the odds of human calculation. This is precisely the moment when human strength becomes irrelevant.',
        },
        {
          kind: 'carry',
          html:
            'When you are afraid, what do you do? Do you try to control the situation, to find a way to win by human strength? Or does fear turn you toward God? Jehoshaphat shows us that fear itself is not the enemy — the misdirection of fear is. He takes his fear and transforms it into seeking.',
        },
        {
          kind: 'reflection',
          id: 'multitude-comes',
          prompt:
            'What fear in your life, right now, could become a catalyst for seeking the Lord? How would it change your day if you treated this fear as an invitation to prayer rather than as a crisis to solve?',
        },
      ],
    },

    /* ─── 2 Chronicles 20:5–12 — The Prayer: "Our Eyes Are Upon Thee" ────── */
    {
      ref: '2 Chronicles 20:5–12',
      title: 'The Prayer: "Our Eyes Are Upon Thee"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(
              5,
              'And Jehoshaphat stood in the congregation of Judah and Jerusalem, in the house of the Lord, before the new court,'
            ),
            {
              number: 6,
              spans: [
                t('And said, O Lord God of our fathers, art not thou God in heaven? and rulest not thou over all the kingdoms of the heathen? and in thine hand is there not power and might, so that none is able to withstand thee?'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Art not thou our God, who didst drive out the inhabitants of this land before thy people Israel, and gavest it to the seed of Abraham thy friend for ever?'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And they dwelt therein, and have built thee a sanctuary therein for thy name, saying,'),
              ],
            },
            {
              number: 9,
              spans: [
                t('If, when evil cometh upon us, as the sword, judgment, or pestilence, or famine, we stand before this house, and in thy presence, (for thy name is in this house,) and cry unto thee in our affliction, then thou wilt hear and help.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And now, behold, the children of Ammon and Moab and mount Seir, whom thou wouldest not let Israel invade, when they came out of the land of Egypt, but they turned from them, and destroyed them not;'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Behold, I say, how they reward us, to come to cast us out of thy possession, which thou hast given us to inherit.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('O our God, wilt thou not judge them? for we have '),
                hp('no might against this great company that cometh against us', 'no-might'),
                t('; '),
                hp('neither know we what to do', 'no-way'),
                t(': but our '),
                hp('eyes are upon thee', 'eyes-upon-thee'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'no-might',
          html:
            'Jehoshaphat stands in the congregation — not alone in the privacy of prayer, but in the hearing of all Judah and Jerusalem. And his prayer is remarkable for its honesty. He does not pretend to power that does not exist. He does not say, "We will fight bravely." He says plainly: "We have no might against this great company that cometh against us." This is not despair. This is clarity. This is a prayer that begins not with false strength but with true weakness.',
        },
        {
          kind: 'commentary',
          id: 'no-way',
          html:
            'The prayer continues: "Neither know we what to do." In military terms, Judah has no strategy. The situation is beyond calculation. There is no plan that can be devised by human wisdom that will deliver them. Jehoshaphat does not hide this. He confesses it before all the people. And in that confession is the soil from which faith grows.',
        },
        {
          kind: 'hebrew',
          id: 'einay-elecha',
          title: 'עֵינֵינוּ אֵלֶיךָ — Einay Elecha — "Our Eyes Upon Thee"',
          script: 'עֵינֵינוּ אֵלֶיךָ',
          translit:
            '<strong>Einay elecha</strong> · our eyes (upon/toward) you; the turning of one&apos;s gaze toward another',
          description:
            'The Hebrew word "einay" (eyes) carries the sense of focus, attention, waiting. To turn one&apos;s eyes toward the Lord is to fix one&apos;s gaze, to attend, to wait upon Him. It is not passive, but actively receptive — the posture of one who no longer looks to human strength but turns to look at God. This same phrase will echo in the New Testament: "I lift up my eyes unto the hills, from whence cometh my help" (Psalm 121:1).',
        },
        {
          kind: 'commentary',
          id: 'eyes-upon-thee',
          html:
            'And then comes the pivot: "But our eyes are upon thee." This word "but" is the hinge of the prayer. Yes, we are weak. Yes, we do not know what to do. But — we know where to look. We know whom to trust. The eyes that cannot see a strategy turn to gaze upon the Lord. This is the prayer of one who has surrendered human solutions and found something truer.',
        },
        {
          kind: 'carry',
          html:
            'Do you know how to take your prayers from complaints into surrender, from anxiety into trust? The key is this: tell God the truth about your powerlessness, and then turn your eyes toward Him. Jehoshaphat does not hide his fear. He states it fully. And then he looks toward God. What would change in your prayers if you began them with absolute honesty about your limits, and ended them with your eyes turned toward the One who has no limits?',
        },
        {
          kind: 'reflection',
          id: 'prayer-eyes',
          prompt:
            'When you pray, do you tend to present your problems as solvable by human effort? What would it feel like to pray the prayer Jehoshaphat prayed — to say, "I have no might, I do not know what to do, but my eyes are upon You"?',
        },
      ],
    },

    /* ─── 2 Chronicles 20:14–19 — Jahaziel's Word: "The Battle Is Not Yours" */
    {
      ref: '2 Chronicles 20:14–19',
      title: 'Jahaziel Speaks: "The Battle Is Not Yours, But God\'s"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 14,
              spans: [
                t('Then upon Jahaziel the son of Zechariah, the son of Benaiah, the son of Jeiel, the son of Mattaniah, a Levite of the sons of Asaph, '),
                hy('came the Spirit of the Lord', 'spirit-jahaziel'),
                t(' in the midst of the congregation;'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And he said, Hearken ye, all Judah, and ye inhabitants of Jerusalem, and thou king Jehoshaphat, Thus saith the Lord unto you, Be not afraid nor dismayed by reason of this great multitude; for '),
                hp('the battle is not yours, but God\'s', 'battle-gods'),
                t('.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('To morrow go ye down against them: behold, they come up by the cliff of Ziz; ye shall find them at the end of the brook, before the wilderness of Jeruel.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Ye shall not need to fight in this battle: '),
                hp('set yourselves, stand ye still, and see the salvation of the Lord with you, O Judah and Jerusalem', 'stand-still'),
                t(': fear not, nor be dismayed; to morrow go out against them: for the Lord will be with you.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And Jehoshaphat bowed his head with his face to the ground: and all Judah and the inhabitants of Jerusalem fell before the Lord, worshipping the Lord.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And the Levites, of the children of the Kohathites, and of the children of the Korhites, stood up to praise the Lord God of Israel with a loud voice on high.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'spirit-jahaziel',
          html:
            'Jahaziel is a Levite, a descendant of Asaph — the ancient singers of Israel. He is not a king. He is not a military commander. He is a singer and a priest. And upon him, in the midst of the congregation, comes the Spirit of the Lord. In this moment, the word of God does not come through might or status. It comes through the Spirit, falling upon one who stands within the worshiping community. This is the pattern: God&apos;s voice breaks through not to the powerful, but to those gathered in seeking.',
        },
        {
          kind: 'commentary',
          id: 'battle-gods',
          html:
            'The message is immediate and stunning: "The battle is not yours, but God\'s." Judah has gathered before the Lord, confessed their weakness, and turned their eyes to the Lord. And the Lord answers: I am taking this battle from you. It is no longer your responsibility. The battle is mine. This is the answer to powerlessness. Not a strategy to regain strength, but the transfer of the battle itself into God&apos;s hands.',
        },
        {
          kind: 'commentary',
          id: 'stand-still',
          html:
            'And what is Judah to do? Go down against the enemies — yes. But "ye shall not need to fight in this battle." Instead, "set yourselves, stand ye still, and see the salvation of the Lord with you." This is the rhythm of faith: move forward in obedience, but do not fight. Stand and watch. The victory belongs to the Lord. Your part is to be present, to be faithful, to see what God will do. There is something almost unimaginable in this — an army told to go to war without fighting.',
        },
        {
          kind: 'carry',
          html:
            'Many battles in our lives feel like they require our fighting. Our effort. Our strategy. Our strength. But what if, like Judah, we were called to go forward in faith without depending on our own fighting? To stand still and see the salvation of the Lord? This does not mean passivity. Judah goes down to face the enemies. But the outcome rests with God. Where in your life are you fighting a battle that God is asking you to give over to Him?',
        },
        {
          kind: 'reflection',
          id: 'battle-gods-reflection',
          prompt:
            'Is there a battle in your life right now — a fear, a conflict, a challenge — that you have been trying to fight alone? What would it mean to hear, "This battle is not yours, but God\'s"?',
        },
      ],
    },

    /* ─── 2 Chronicles 20:20–23 — Singing as Warfare; God Ambushes ──────────── */
    {
      ref: '2 Chronicles 20:20–23',
      title: 'The Singers Go Forth; God Ambushes',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 20,
              spans: [
                t('And they rose early in the morning, and went forth into the wilderness of Tekoa: and as they went forth, Jehoshaphat stood and said, Hear me, O Judah, and ye inhabitants of Jerusalem; '),
                hp('Believe in the Lord your God, so shall ye be established; believe his prophets, so shall ye prosper', 'believe-prosper'),
                t('.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And when he had consulted with the people, he appointed '),
                hg('singers unto the Lord', 'singers-appointed'),
                t(', that should praise the '),
                hg('beauty of holiness', 'beauty-holiness'),
                t(', as they went out before the army, saying, Praise the Lord; for his mercy endureth for ever.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And '),
                hp('when they began to sing and to praise', 'worship-ambush'),
                t(', the Lord set '),
                hp('ambushments against the children of Ammon, Moab, and mount Seir', 'ambushments'),
                t(', which were come against Judah; and they were smitten.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('For the children of Ammon and Moab stood up against the inhabitants of mount Seir, utterly to slay and destroy them: and when they had made an end of the inhabitants of Seir, every one helped to destroy another.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'believe-prosper',
          html:
            'Jehoshaphat&apos;s last words before the battle are not commands about military formation or strategy. They are about belief. "Believe in the Lord your God, so shall ye be established; believe his prophets, so shall ye prosper." Believe. Not in your own strength, but in the Lord and in the word He has spoken through Jahaziel. This is the condition: faith in the word of the Lord.',
        },
        {
          kind: 'commentary',
          id: 'singers-appointed',
          html:
            'And then — a choice that seems almost mad from a military perspective. Jehoshaphat appoints singers. Not soldiers to march ahead, but singers. Men whose role is praise, not warfare. They go out before the army, singing. This is not a distraction from the battle. This is the battle. The singers are the front line.',
        },
        {
          kind: 'hebrew',
          id: 'tiferet-kedosh',
          title: 'תִּפְאֶרֶת קֹדֶשׁ — Tiferet Kedosh — "Beauty of Holiness"',
          script: 'תִּפְאֶרֶת קֹדֶשׁ',
          translit:
            '<strong>Tiferet kedosh</strong> · beauty/splendor of holiness; the radiant majesty of the sacred',
          description:
            'The phrase combines "tiferet" (beauty, splendor, adornment) with "kedosh" (holy, sacred, set apart). It is the beauty that belongs to the holy — not earthly beauty, but the radiance of the sacred. The singers praise the "beauty of holiness," pointing the people&apos;s attention toward what is truly magnificent, what is truly worthy of praise.',
        },
        {
          kind: 'commentary',
          id: 'beauty-holiness',
          html:
            'The singers sing as they go: "Praise the Lord; for his mercy endureth for ever." This is the song of the Temple, the song of praise. And it is not a war song. It is a song of mercy and endurance. It is a song of the holy. The singers go before the army singing not about victory, but about the goodness of the Lord.',
        },
        {
          kind: 'commentary',
          id: 'worship-ambush',
          html:
            'And then the text gives us something that seems almost impossible: "When they began to sing and to praise, the Lord set ambushments against the children of Ammon, Moab, and mount Seir, which were come against Judah; and they were smitten." The moment worship begins, the battle shifts. The enemies are struck. And what follows is extraordinary: "The children of Ammon and Moab stood up against the inhabitants of mount Seir, utterly to slay and destroy them; and when they had made an end of the inhabitants of Seir, every one helped to destroy another." The enemies turn on each other. The Lord ambushes them — and they destroy themselves.',
        },
        {
          kind: 'commentary',
          id: 'ambushments',
          html:
            'This is God&apos;s kind of warfare. Not a visible army, not a blade, but "ambushments" — hidden forces that strike when the singers sing. The enemies are "smitten" — struck down. And then, in a moment of divine irony, they become their own enemy. Ammon and Moab turn on Seir, and then on each other. The battle that Judah was not to fight is fought entirely by the enemies against themselves.',
        },
        {
          kind: 'christ',
          id: 'christ-worship-warfare',
          title: 'Christ Connection — Worship as Our Weapon',
          html:
            'In the New Testament, Paul writes: "For the weapons of our warfare are not carnal, but mighty through God to the pulling down of strong holds" (2 Corinthians 10:4). This is the pattern Jehoshaphat discovers: the victory is not won by the sword, but by worship. The weapons are not carnal — they are spiritual. They are praise, trust, and the name of the Lord. And Christ, in His crucifixion and resurrection, disarms the powers that held creation captive. "And having spoiled principalities and powers, he made a shew of them openly, triumphing over them in it" (Colossians 2:15). The cross is the ultimate ambushment — the place where God defeats the cosmic enemies through what appears to be weakness, but is infinite strength. Like Jehoshaphat&apos;s singers, the cross seems foolish to human calculation. But it is the victory.',
        },
        {
          kind: 'carry',
          html:
            'When you face a battle — a conflict with someone, a struggle within yourself, a challenge that seems beyond your strength — what do you do? Do you fight harder? Do you devise a strategy? Or do you worship? Jehoshaphat teaches us that worship can be a weapon. When the singers sing, the Lord sets ambushments. When we praise, the battle shifts. The weapons of our warfare are not the armor we wear or the arguments we make. They are the praises we sing. What would happen if your response to crisis was to worship?',
        },
        {
          kind: 'reflection',
          id: 'worship-warfare',
          prompt:
            'Have you ever experienced a moment where worship or praise shifted the spiritual climate of a situation? What did it feel like to see "battle" happen through worship rather than through effort or conflict?',
        },
      ],
    },

    /* ─── 2 Chronicles 20:24–28 — The Spoil and the Valley of Berachah ──────── */
    {
      ref: '2 Chronicles 20:24–28',
      title: 'The Valley of Berachah — A Valley of Blessing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 24,
              spans: [
                t('And when Judah came toward the watch tower in the wilderness, they looked unto the multitude, and, behold, they were '),
                hg('dead bodies fallen to the earth, and none escaped', 'dead-bodies'),
                t('.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And when Jehoshaphat and his people came to take away the spoil of them, they found among them in abundance both riches with the dead bodies, and precious jewels, which they stripped off for themselves, more than they could carry away: and they were three days in gathering of the spoil, it was so much.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And on the fourth day they assembled themselves in the valley of '),
                hy('Berachah', 'berachah-valley'),
                t('; for there they blessed the Lord: therefore the name of the same place was called, The Valley of Berachah, unto this day.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('Then they returned, every man of Judah and Jerusalem, and Jehoshaphat in the forefront of them, to go again to Jerusalem with joy; for the Lord had made them to rejoice over their enemies.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And they came to Jerusalem with psalteries, harps, and trumpets unto the house of the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'dead-bodies',
          html:
            'What Judah finds is not a battle-scarred landscape of their own making. They find the enemies "dead bodies fallen to the earth, and none escaped." The Lord has done this. Completely. None survived. The victory is total, and it came not through their swords, but through God&apos;s ambushment.',
        },
        {
          kind: 'commentary',
          id: 'spoil',
          html:
            'And then comes the abundance. So much wealth — riches, precious jewels — that the people spend three days gathering the spoil and still cannot carry it all away. This is not merely the recovery of what was lost. This is overflow. This is blessing poured out. Judah went to battle with nothing but their eyes fixed on the Lord. They return with abundance.',
        },
        {
          kind: 'hebrew',
          id: 'berachah',
          title: 'בְּרָכָה — Berachah — "Blessing"',
          script: 'בְּרָכָה',
          translit: '<strong>Berachah</strong> · blessing; benediction; abundant gift from God',
          description:
            'The word "berachah" comes from the root "barak," to bless or to kneel before. A blessing is something given by one who is in a position of power to one in a position of need. The Valley of Berachah is literally the valley where blessing flows — where God gave abundance, where the people gathered to acknowledge what the Lord had done. The valley is named after the blessing itself.',
        },
        {
          kind: 'commentary',
          id: 'berachah-valley',
          html:
            'On the fourth day, they gather in the valley of Berachah — and "there they blessed the Lord." They do not bless themselves for their victory. They do not congratulate themselves on their courage. They bless the Lord, because they know the victory came from Him. And the valley is named after this act: the Valley of Berachah, the Valley of Blessing, "unto this day." The place is forever marked by what happened there — not a place of warfare, but a place of blessing and praise.',
        },
        {
          kind: 'commentary',
          id: 'return-with-joy',
          html:
            'The people return to Jerusalem "with joy." And "the Lord had made them to rejoice over their enemies." Notice: they rejoice not because they defeated the enemies, but because the Lord made them rejoice. The joy is God&apos;s gift, not their achievement. They return with instruments of praise — "psalteries, harps, and trumpets" — singing their way back to the house of the Lord. The entire journey has become a festival of praise.',
        },
        {
          kind: 'carry',
          html:
            'After a victory, after a deliverance, what do you do? Do you take credit? Do you feel proud of what you accomplished? Or do you, like Judah, gather together and bless the Lord, acknowledging that the victory came from His hand? The Valley of Berachah teaches us that the place where we bless God becomes itself a place of blessing. Your acknowledgment of God\'s work is not just words — it marks the place where you stand. It becomes the name of that moment in your life. What will you call the valley you have just passed through?',
        },
        {
          kind: 'reflection',
          id: 'berachah-reflection',
          prompt:
            'When something difficult has been resolved or a crisis has passed, do you tend to feel relief, accomplishment, or the joy of being blessed by God? How could you "name the valley" — acknowledge the blessing — in a way that would mark that moment forever in your memory?',
        },
      ],
    },

    /* ─── 2 Chronicles 20:29–37 — The Fear of God; A Compromise ────────────── */
    {
      ref: '2 Chronicles 20:29–37',
      title: 'The Fear of God; A Compromise That Breaks',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 29,
              spans: [
                t('And the '),
                hg('fear of God was on all the kingdoms of those countries', 'fear-spreads'),
                t(', when they heard that the Lord fought against the enemies of Israel.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('So the realm of Jehoshaphat was quiet: for his God gave him rest round about.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('And Jehoshaphat reigned over Judah: and he was thirty and five years old when he began to reign, and he reigned twenty and five years in Jerusalem. And his mother\'s name was Azubah the daughter of Shilhi.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And he walked in the way of his father Asa, and departed not from it, doing that which was right in the sight of the Lord.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('Howbeit the high places were not taken away: for as yet the people had not prepared their hearts unto the God of their fathers.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('And the rest of the acts of Jehoshaphat, first and last, behold, they are written in the book of the chronicles of the kings of Israel.'),
              ],
            },
            {
              number: 35,
              spans: [
                t('And after this did Jehoshaphat king of Judah join himself with Ahaziah king of Israel, who did very wickedly:'),
              ],
            },
            {
              number: 36,
              spans: [
                t('And he joined with him to make ships to go to Tarshish: and they made the ships in Eziongeber.'),
              ],
            },
            {
              number: 37,
              spans: [
                t('And Eliezer the son of Dodavah of Mareshah prophesied against Jehoshaphat, saying, Because thou hast joined thyself with Ahaziah, the Lord hath broken thy works. And the ships were broken, that they were not able to go to Tarshish.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'fear-spreads',
          html:
            'The victory at the Valley of Berachah has a consequence that ripples outward. "The fear of God was on all the kingdoms of those countries, when they heard that the Lord fought against the enemies of Israel." The neighboring nations hear what the Lord has done, and fear seizes them. They do not approach Judah because they have seen God defend His people. The name of the Lord is exalted throughout the region. Jehoshaphat&apos;s realm enjoys peace — not because he is a mighty warrior, but because all the surrounding kingdoms fear the God of Israel.',
        },
        {
          kind: 'commentary',
          id: 'walking-asa',
          html:
            'The text tells us that Jehoshaphat "walked in the way of his father Asa, and departed not from it, doing that which was right in the sight of the Lord." Asa was a king who, for many years, did what was right. But Asa&apos;s legacy is mixed — his walk was righteous, yet "the high places were not taken away." Incomplete reformation. And we see the same pattern beginning in Jehoshaphat.',
        },
        {
          kind: 'commentary',
          id: 'ahaziah-compromise',
          html:
            'And then comes the text&apos;s saddest turn: "And after this did Jehoshaphat king of Judah join himself with Ahaziah king of Israel, who did very wickedly." After the great victory, after the demonstration of God&apos;s power, Jehoshaphat makes an unequal alliance with a wicked king. He joins himself with Ahaziah to make ships to go to Tarshish — ships that are meant to bring wealth and power. This is the old temptation: to rely on human alliance, on commercial power, on the methods of the world.',
        },
        {
          kind: 'carry',
          html:
            'Do you see the pattern? Jehoshaphat cries out to God in desperation. God responds. The Lord sets ambushments. Judah is delivered. They gather in the Valley of Berachah and bless the Lord. The fear of God spreads to all the surrounding nations. And then — when the realm is quiet, when victory has been won — Jehoshaphat compromises. He joins with a wicked king. He goes back to the methods he had abandoned in the moment of crisis. A prophet warns him: "Because thou hast joined thyself with Ahaziah, the Lord hath broken thy works. And the ships were broken, that they were not able to go to Tarshish." The works are broken. The ships sink. When we forget the lesson of the Valley of Berachah and return to trusting in human alliances and human power, we find that even our plans for prosperity break beneath us.',
        },
        {
          kind: 'reflection',
          id: 'after-victory',
          prompt:
            'When you have experienced a real deliverance from the Lord, when you have seen Him work in your life, how long does it take before you forget that lesson and return to your old ways of trying to handle things through human effort and alliance? What would it look like to "stay in the Valley of Berachah"?',
        },
      ],
    },
  ],
};
