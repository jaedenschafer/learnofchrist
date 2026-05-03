import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Joshua 9 — The Gibeonite Deception
 *
 * When Israel stands at the threshold of Canaan, a neighboring city resorts
 * to deception to survive. Joshua and the princes, without counsel from the
 * Lord, swear an oath. The chapter turns on a single phrase: "they asked not
 * counsel at the mouth of the Lord." Yet even a covenant made in haste binds
 * God&apos;s people — and the Gibeonites, sworn enemies turned servants,
 * end up serving at God&apos;s altar.
 */
export const JOSHUA_9: RichChapterContent = {
  bookSlug: 'joshua',
  bookName: 'Joshua',
  chapter: 9,

  estimatedMinutes: { beginner: 8, intermediate: 11, deep: 15 },
  intros: [
    'Joshua 9 opens with a united front against Israel. All the kings west of Jordan — the Hittites, Amorites, Canaanites, Perizzites, Hivites, and Jebusites — gather "with one accord to fight." But before the battle lines form, one city — Gibeon — chooses a different path. The Gibeonites, aware of what God has done for Israel, do not fight. They scheme.',
    'Their deception is masterfully simple: old sacks, worn sandals, moldy bread, patched wineskins. A story crafted to convince Israel they have traveled from a far country. Joshua and the princes, looking at the evidence and hearing the tale, make a covenant without asking the Lord. The sin is not the oath itself — oaths matter deeply in Scripture. The sin is the silence before the oath: "They asked not counsel at the mouth of the Lord."',
    'What follows is a study in covenant, consequence, and grace. The Gibeonites, found out, become perpetual servants at the altar. A punishment that becomes a blessing. And generations later, when King Saul breaks the oath, God&apos;s faithfulness to the Gibeonites proves that a hastily sworn covenant, kept with integrity, matters more than the wisdom of the one who swore it.',
  ],

  opener: {
    matchTitle: /gibeon/i,
    caption: 'Joshua 9 · The Gibeonite Deception',
  },

  bottomShare: {
    label: 'Share Joshua 9',
    quote:
      'Even when leaders fail to seek the Lord&apos;s counsel, God&apos;s name is honored by keeping an oath sworn in His name—and those who fear Him may find themselves serving at His altar.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Joshua 9 · Study Guide',
  },

  sections: [
    /* ─── Joshua 9:1–2 — The Gathering of Kings ──────────────────────────── */
    {
      ref: 'Joshua 9:1–2',
      title: 'The Kings Gather With One Accord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 1,
              spans: [
                t('And it came to pass, when all the kings which were on this side Jordan, in the hills, and in the valleys, and in all the coasts of the great sea over against Lebanon, the Hittite, and the Amorite, the Canaanite, the Perizzite, the Hivite, and the Jebusite, heard thereof;'),
              ],
            },
            {
              number: 2,
              spans: [
                t('That they gathered themselves together, to fight with Joshua and with Israel, '),
                hp('with one accord', 'gather-accord'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gather-accord',
          html:
            'Israel&apos;s victories at Jericho and Ai have alarmed the entire region. For the first time in Canaan&apos;s wars, the kings do not scatter into separate battles. They unite. Yet this unity is their weakness — it is also the moment when one city will break rank and choose a different strategy: not war, but wile.',
        },
        {
          kind: 'carry',
          html:
            'Fear can drive two ways. When threatened, some choose to gather in strength, to stand together against what comes. Others, when they understand the odds, choose the softer path — to approach with a story, with humility worn like old garments, with the hope that mercy is smarter than the sword. Both responses come from fear. Which one moves you more often?',
        },
        {
          kind: 'reflection',
          id: 'gather-reflect',
          prompt:
            'When you face a conflict you cannot win through strength alone, do you tend to gather allies, or do you tend to seek another way? What would it look like to bring that same wisdom to a hard conversation this week?',
        },
      ],
    },

    /* ─── Joshua 9:3–6 — The Gibeonite Deception ───────────────────────────── */
    {
      ref: 'Joshua 9:3–6',
      title: 'The Gibeonites Practice Wiliness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 3,
              spans: [
                t('And when the inhabitants of Gibeon heard what Joshua had done to Jericho and to Ai, they '),
                hy('did work wilily', 'gibeon-wilily'),
                t(', and went and made as if they had been ambassadors, and took old sacks upon their asses, and wine bottles, old, and rent, and bound up;'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And old shoes and clouted upon their feet, and old garments upon them; and all the bread of their provision was dry and mouldy.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And they went to Joshua unto the camp at Gilgal, and said unto him, and to the men of Israel, We be come from a far country: now therefore make ye a league with us.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And the men of Israel said unto the Gibeonites, Peradventure ye dwell among us; and how shall we make a league with you?'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'gibeon-wilily',
          title: 'Ormah — "wiliness; cunning"',
          script: 'עָרְמָה',
          translit: '<strong>ormah</strong> · crafted deceit, calculated strategy',
          description:
            'The word suggests not crude lying but refined, premeditated cunning — the work of artisans in deception. Every detail of the costume, the sacks, the bread, the shoes, is calculated. Ormah is intelligence applied to dishonesty.',
        },
        {
          kind: 'commentary',
          id: 'costume-of-travel',
          html:
            'Notice the precision of the costume. Worn-out shoes and patched garments speak of miles traveled. Moldy bread, rent wineskins, old sacks — all the marks of a long journey in the ancient heat. There is craft in the visual language. Every object is a false witness.',
        },
        {
          kind: 'carry',
          html:
            'Deception is always more work than honesty. The Gibeonites have prepared costumes, gathered props, rehearsed their story. What are you carrying — maybe worry, maybe shame, maybe a half-truth repeated so many times you&apos;ve started to believe it — because you&apos;re afraid the truth alone won&apos;t be enough? What would it cost to set the costume down?',
        },
        {
          kind: 'reflection',
          id: 'costume-reflect',
          prompt:
            'What "costume" are you wearing in some relationship or situation — a mask that takes more energy to maintain than honesty would? What would change if you took it off?',
        },
      ],
    },

    /* ─── Joshua 9:7–13 — The Story Told ──────────────────────────────────── */
    {
      ref: 'Joshua 9:7–13',
      title: '"They Asked Not Counsel at the Mouth of the Lord"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 7,
              spans: [
                t('And Joshua said unto them, Who are ye? and from whence come ye?'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And they said unto him, From a very far country thy servants are come because of the name of the Lord thy God: for we have heard the fame of him, and all that he did in Egypt,'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And all that he did to the two kings of the Amorites, that were beyond Jordan, to Sihon king of Heshbon, and to Og king of Bashan, which was at Ashtaroth.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Wherefore our elders and all the inhabitants of our country spake to us, saying, Take victuals with you for the journey, and go to meet them, and say unto them, We are your servants: therefore now make ye a league with us.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('This our bread we took hot for our provision out of our houses on the day we came forth to go unto you; but now, behold, it is dry, and it is mouldy:'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And these bottles of wine, which we filled, were new; and, behold, they be rent: and these our garments and our shoes are become old by reason of the very long journey.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And '),
                hy('the men took of their victuals, and asked not counsel at the mouth of the Lord', 'counsel-failure'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'counsel-failure',
          html:
            'This is the chapter&apos;s heart. The Gibeonites tell a plausible story — they invoke God&apos;s name, they cite known victories, they appeal to fear and the codes of hospitality. Joshua looks at the evidence: worn cloth, crumbled bread, patched wineskins. It all fits. And Joshua <em>makes a covenant without asking the Lord</em>. The error is not in the oath itself, but in the silence that preceded it.',
        },
        {
          kind: 'christ',
          id: 'christ-counsel',
          title: 'Christ Connection — The Wisdom of Asking',
          html:
            'The disciples often came to Jesus and asked Him directly. "Lord, teach us to pray" (Luke 11:1). "We do not even know what we ought to pray for" (Rom. 8:26). In Proverbs, wisdom is personified — a woman calling in the streets, inviting anyone to listen. Jesus is that Wisdom made flesh. The habit of asking before deciding, of seeking counsel from the Lord before acting, even when the decision seems clear, is the thread that runs through Scripture. We are invited into that habit.',
        },
        {
          kind: 'carry',
          html:
            'The Gibeonites tell a good story. The evidence fits. Your instinct says yes. You are smart, you have seen the world, you have made good calls before — so why ask? This is the whisper that precedes nearly every decision we regret. The one thing Joshua could have done, and didn&apos;t, was pause. Just pause. Not to doubt his judgment, but to ask. What decision are you about to make where that pause might change everything?',
        },
        {
          kind: 'reflection',
          id: 'counsel-reflect',
          prompt:
            'When is the last time you made a decision you thought was right, only to learn later you had missed something important? What would pausing to ask the Lord have uncovered?',
        },
      ],
    },

    /* ─── Joshua 9:14–21 — The Oath Kept ──────────────────────────────────── */
    {
      ref: 'Joshua 9:14–21',
      title: 'The Oath Binds, Even in Haste',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 14,
              spans: [
                t('And the men of Israel took of their victuals, and asked not counsel at the mouth of the Lord.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And Joshua made peace with them, and made a '),
                hy('league with them, to let them live', 'shevuah'),
                t(': and the princes of the congregation sware unto them.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And it came to pass at the end of three days after they had made a league with them, that they heard that they were their neighbours, and that they dwelt among them.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And the children of Israel journeyed, and came unto their cities on the third day. Now their cities were Gibeon, and Chephirah, and Beeroth, and Kirjath-jearim.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And the children of Israel smote them not, because the princes of the congregation had sworn unto them by the Lord God of Israel. And all the congregation murmured against the princes.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('But all the princes said unto all the congregation, We have sworn unto them by the Lord God of Israel: now therefore we may not touch them.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('This we will do to them; we will even let them live, lest wrath be upon us, because of the oath which we sware unto them.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And the princes said unto them, Let them live; but let them be '),
                hg('hewers of wood and drawers of water', 'servants-altar'),
                t(' unto all the congregation: and they did according to that which the princes had said unto them.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'shevuah',
          title: 'Shevuah — "oath; covenant"',
          script: 'שְׁבוּעָה',
          translit: '<strong>shevuah</strong> · a sworn binding commitment made before God',
          description:
            'An oath sworn "by the Lord God of Israel" is not a casual promise — it is a covenant made under God&apos;s name. To break it would be to dishonor God Himself. This is why the princes refuse to kill the Gibeonites, even though the deception is revealed.',
        },
        {
          kind: 'commentary',
          id: 'servants-altar',
          html:
            'The word "hewers of wood and drawers of water" refers to the humblest service — the kind of labor expected of servants and foreigners. In any other context, this would be bitter shame. But in the house of the Lord, even the lowest task is holy. The Gibeonites, sworn enemies, become servants not of Israel&apos;s armies but of God&apos;s altar.',
        },
        {
          kind: 'carry',
          html:
            'You have made promises in haste. You have sworn things, committed to things, said yes to things — and only later did you understand the cost. The first instinct is often to find a way out, to regret, to resent the person you promised. But the deeper instinct, the one that marks a covenant-keeper, is to honor what you have said. Not because you were smart when you said it, but because your word matters more than your comfort. That integrity is rare, and it is noticed.',
        },
        {
          kind: 'reflection',
          id: 'oath-reflect',
          prompt:
            'Is there a commitment you made in haste that you&apos;ve been wishing to undo? What would it cost — not in time or effort, but in character — to see it through?',
        },
      ],
    },

    /* ─── Joshua 9:22–27 — Joshua Speaks; the Gibeonites Answer ──────────── */
    {
      ref: 'Joshua 9:22–27',
      title: 'Curse Becomes Service; Fear Becomes Faith',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            {
              number: 22,
              spans: [
                t('And Joshua called for them, and he spake unto them, saying, '),
                hp('Wherefore have ye beguiled us', 'christ-deception'),
                t(', saying, We are very far from you; when ye dwell among us?'),
              ],
            },
            {
              number: 23,
              spans: [
                t('Now therefore ye are cursed, and there shall none of you be freed from being bondmen, and '),
                hg('hewers of wood and drawers of water', 'curse-servants'),
                t(' for the house of my God.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And they answered Joshua, and said, Because it was certainly told thy servants, how that the Lord thy God commanded his servant Moses to give you all the land, and to destroy all the inhabitants of the land from before you, therefore we were sore afraid of our lives because of you, and have we done this thing.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And now, behold, we are in thine hand: as it seemeth good and right unto thee to do unto us, do.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And so did he unto them, and delivered them out of the hand of the children of Israel, that they slew them not.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And Joshua made them that day '),
                t('hewers of wood and drawers of water'),
                t(' for the congregation, and for the altar of the Lord, even unto this day, in the place which he should choose.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'christ-deception',
          html:
            'Joshua&apos;s response is swift and public. The deception is called out — but notice: he does not kill them. The oath stands. What changes is their status. They are cursed to perpetual servitude, yet that curse becomes their salvation. Fear drove them to a lie; fear also moved them toward the God whose power they recognized. Both were true.',
        },
        {
          kind: 'greek',
          id: 'phobos-faith',
          title: 'Phobos — "fear; awe; reverence"',
          script: 'φόβος',
          translit: '<strong>phobos</strong> · fear that can turn toward faith',
          description:
            'The Gibeonites feared God — they heard what He did, and their response was to seek mercy rather than resist. In Scripture, "fear of the Lord" often marks the beginning of wisdom. Their fear was not paralysis; it was the threshold of faith.',
        },
        {
          kind: 'commentary',
          id: 'curse-servants',
          html:
            'The Gibeonites are cursed — their lie has a cost. But the curse is not death; it is service. And service at God&apos;s altar, even the humblest service, is a kind of proximity to the holy. They end up closer to God than they ever could have through conquest alone.',
        },
        {
          kind: 'carry',
          html:
            'When you are caught in a lie, or found out in a scheme, the mercy you receive may not look like mercy at first. It may look like obligation, like a reduction in status, like being bound to a commitment you didn&apos;t foresee. But bound to what? If it binds you to God&apos;s altar, to His work, even in the smallest way, then the curse has become a gift. The Gibeonites would serve at the place God chose — generation after generation, in the presence of the holy. Not what they plotted for, but what they needed.',
        },
        {
          kind: 'reflection',
          id: 'curse-reflect',
          prompt:
            'Have you ever experienced a consequence — a binding, a limitation, a "no" — that eventually became a strange gift? What did you learn about mercy in that season?',
        },
      ],
    },

    /* ─── Epilogue: The Oath Remembered ───────────────────────────────────── */
    {
      ref: 'Joshua 9 · The Oath Endures',
      title: 'What the Oath Teaches',
      blocks: [
        {
          kind: 'commentary',
          id: 'oath-remembered',
          html:
            'The chapter does not end at verse 27. The story of the Gibeonites reappears in 2 Samuel 21, where King Saul, in his zeal, slaughters the Gibeonites despite the oath. God sends a three-year famine in response. The oath, made in haste centuries before, still holds power. Joshua did not ask the Lord before swearing. But God honored the oath because it was sworn in His name. The integrity of God&apos;s character — His faithfulness to a covenant made under His own name — mattered more than the wisdom of the one who swore it.',
        },
        {
          kind: 'christ',
          id: 'christ-covenant',
          title: 'Christ Connection — The One Who Keeps Covenant',
          html:
            '"God is not a man, that he should lie; neither the son of man, that he should repent: hath he said, and shall he not do it?" (Num. 23:19). Jesus entered into covenant with His people at the cross — a covenant made in His own blood. He did not break it, even when breaking it would have been easier. "Though we believe not, yet he abideth faithful: he cannot deny himself" (2 Tim. 2:13). A covenant kept, even when the cost is death, is the foundation of our hope. The Gibeonites knew no such assurance in their own gods; they had to guess. We, on this side of the resurrection, know: the covenant will hold.',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],

  hasHebrew: true,
};
