import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Samuel 5 — David King Over All Israel
 *
 * All the tribes of Israel come to David at Hebron and anoint him king over
 * all Israel — not merely over Judah, but over the united nation. At thirty
 * years old, David begins his reign. He captures Jerusalem, the city of Zion,
 * which will become the city of God. The Philistines come against him twice,
 * and twice the Lord gives him victory — but each time with a different strategy.
 * The pattern is clear: the Lord God of hosts is with David, and he grows great.
 */
export const SAMUEL_2_5: RichChapterContent = {
  bookSlug: '2-samuel',
  bookName: '2 Samuel',
  chapter: 5,

  estimatedMinutes: { beginner: 6, intermediate: 14, deep: 18 },
  intros: [
    'Chapter 5 marks a turning point in David&apos;s story: the moment when a man who has been king over Judah becomes king over all Israel. The tribes come to him at Hebron and say, "Behold, we are thy bone and thy flesh" — and they anoint him. What was divided is now one kingdom. What was scattered is now gathered under a single head.',
    'But David does not rest in his new throne. He moves immediately to Jerusalem, captures the stronghold of Zion from the Jebusites, and establishes his capital in the city that will bear his name. Then comes trial: the Philistines, hearing that David has been anointed king, come up to seek him. Twice they march. Twice David inquires of the Lord. And twice the Lord delivers them into his hand — but never in the same way. Each time, the Lord gives fresh strategy, fresh wisdom, fresh victory. The chapter is a study in kingship tested and refined, in God&apos;s presence made visible in victory.',
  ],

  sections: [
    /* ─── 2 Samuel 5:1–5 — David Anointed King Over All Israel ──────────── */
    {
      ref: '2 Samuel 5:1–5',
      title: 'David Anointed King Over All Israel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 1,
              spans: [
                t('Then came all the tribes of Israel to David unto Hebron, and spake, saying, '),
                hg('Behold, we are thy bone and thy flesh', 'c-bone-flesh'),
                t('.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Also in time past, when Saul was king over us, thou wast he that '),
                hg('leddest out and broughtest in Israel', 'c-leadership'),
                t(': and the Lord said to thee, '),
                hg('Thou shalt feed my people Israel', 'c-shepherd'),
                t(', and thou shalt be a captain over Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-bone-flesh',
          html:
            'The tribes come to David and say, "We are thy bone and thy flesh." This is the language of covenant, of kinship, of a binding that goes back to creation itself. When Adam saw Eve, he said the same words: "This is now bone of my bones, and flesh of my flesh" (Gen. 2:23). The tribes are adopting David as one body. They are not submitting to a foreign king. They are recognizing one of their own as the head of a united people.',
        },
        {
          kind: 'commentary',
          id: 'c-leadership',
          html:
            'The tribes remember that David, even when Saul was king, was the one who "leddest out and broughtest in Israel." He led them out to battle and brought them back home. He was their shepherd, their protector, their leader — in fact if not in name. Now they make the fact align with what was always true.',
        },
        {
          kind: 'commentary',
          id: 'c-shepherd',
          html:
            'The tribes cite the Lord&apos;s own words to David: "Thou shalt feed my people Israel." The language is pastoral — David as shepherd, the people as sheep. A king&apos;s job is not to reign for his own glory but to feed, guide, and protect the flock entrusted to him. This is what God has promised, and this is what the people now acknowledge.',
        },

        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 3,
              spans: [
                t('So all the elders of Israel came to the king to Hebron; and king David made a '),
                hg('league with them in Hebron before the Lord', 'c-covenant'),
                t(': and they '),
                hg('anointed David king over Israel', 'c-anointed'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-covenant',
          html:
            'The covenant is made "before the Lord." This is not a mere political arrangement struck between men. It is a sacred act, done in the sight of God, binding king and people, promising mutual faithfulness — the king to feed the people, the people to accept his rule.',
        },
        {
          kind: 'hebrew',
          id: 'anointing-david',
          title: 'Anointing: Masach — Setting Apart for the Lord',
          script: 'מָשַׁח',
          translit: '<strong>Masach</strong> · to anoint; to set apart as king',
          description:
            'David has been anointed before — as a boy, when Samuel poured oil on his head (1 Sam. 16:13), when "the Spirit of the Lord came upon David from that day forward." Now the nation anoints him. The second anointing does not contradict the first; it confirms it. What the prophet saw in secret, the people now see and declare openly.',
        },

        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 4,
              spans: [
                t('David was '),
                hg('thirty years old', 'c-age-thirty'),
                t(' when he began to reign, and he reigned forty years.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('In Hebron he reigned over Judah seven years and six months: and in Jerusalem he reigned thirty and three years over all Israel and Judah.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-age-thirty',
          html:
            'David was thirty years old when he began to reign over all Israel. It is the same age at which Jesus began His ministry (Luke 3:23). The parallel is deliberate — both men began their public work at the threshold of full manhood, both entered into their calling having been set apart and tested in the wilderness, both were anointed by the Spirit to do the work of God.',
        },
        {
          kind: 'carry',
          html:
            'You may have gifts, a calling, a sense of purpose that has been growing in you for years — through trial, through waiting, through a wilderness season. You may have had it confirmed in secret, sensed it in your own heart. But there is another kind of confirmation that comes when the people you lead recognize it, when they align themselves with what God has made visible. When that alignment happens, something shifts. You are no longer the only one who knows. You are no longer alone in the calling. The Lord makes it public.',
        },
        {
          kind: 'reflection',
          id: 'david-anointed',
          prompt:
            'When have you sensed a calling or a gift in your own life? How was that inner knowing later confirmed outwardly, through the recognition of others or the opening of a door?',
        },
      ],
    },

    /* ─── 2 Samuel 5:6–9 — The Capture of Jerusalem ──────────────────────── */
    {
      ref: '2 Samuel 5:6–9',
      title: 'The Taking of Zion',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 6,
              spans: [
                t('And the king and his men went to Jerusalem unto the Jebusites, the inhabitants of the land: and they spake unto David, saying, Except thou take away the '),
                hy('blind and the lame', 'c-blind-lame'),
                t(', thou shalt not come in hither: thinking, David cannot come in hither.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-blind-lame',
          html:
            'The Jebusites, defenders of Jerusalem, taunt David. They say that even if he tries to enter the city, he would not need to bring warriors — the blind and the lame (the city&apos;s weakest) would be enough to keep him out. It is a confidence born of the city&apos;s natural stronghold, its high walls, its position on a hill. They believe themselves impregnable. David&apos;s answer will be not words, but action.',
        },

        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 7,
              spans: [
                t('Nevertheless David took the strong hold of Zion: the same is the city of David.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'David takes the stronghold. It becomes known as the city of David — not the city of the Jebusites, not the city of conquest, but the city that bears his name. This is the beginning of Jerusalem&apos;s transformation into the holy city, the city of God.',
        },
        {
          kind: 'hebrew',
          id: 'zion-meaning',
          title: 'צִיּוֹן Zion — The Fortress City',
          script: 'צִיּוֹן',
          translit: '<strong>Tziyyon</strong> · stronghold; the holy mountain; God&apos;s dwelling place',
          description:
            'Zion began as the name of the Jebusite stronghold on the southeastern hill of Jerusalem. But it becomes, throughout Scripture, the dwelling place of God, the holy city, the place from which God reigns. David&apos;s capture of Zion marks the beginning of its spiritual transformation.',
        },

        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 8,
              spans: [
                t('And David said on that day, Whosoever getteth up to the gutter, and smiteth the Jebusites, and the '),
                hy('lame and the blind, that are hated of David&apos;s soul', 'c-hated'),
                t(', he shall be chief and captain. Wherefore they said, The blind and the lame shall not come into the house.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hated',
          html:
            'David speaks of the "lame and the blind that are hated of David&apos;s soul." Some scholars see this as David turning the Jebusites&apos; own taunt back against them — invoking their arrogance. Others see it as David&apos;s contempt for those who would mock the disabled. Either way, it is Joab who first reaches the gutter (the water shaft) and strikes through. Strategy and courage overcome what seemed impregnable.',
        },
        {
          kind: 'commentary',
          html:
            'The gutter — likely the water shaft or underground passage that brought water into the besieged city — becomes the way in. Joab, David&apos;s commander, climbs up through it. It is not a frontal assault. It is a recognition of weakness in what seems strongest, an insight that turns strategy into victory. Every fortress has a hidden way in. Every stronghold has a vulnerability.',
        },

        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 9,
              spans: [
                t('So David dwelt in the fort, and called it the city of David. And David built round about from Millo even to the house round about.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And David went on, and grew great, and the Lord God of hosts was with him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'David dwells in the stronghold and rebuilds it, expanding outward from the Millo (the filled-in area or rampart). And the text gives the formula of blessing: "David went on, and grew great, and the Lord God of hosts was with him." The order matters. Because God was with him, David grew great. Not the other way around.',
        },
        {
          kind: 'reflection',
          id: 'zion-taken',
          prompt:
            'Where in your life do you face something that seems impregnable, immovable, impossible to overcome? What would it look like to see, as David did, the hidden way in — the strategy, the insight, the weak point in what seems strongest?',
        },
      ],
    },

    /* ─── 2 Samuel 5:11–16 — Hiram and David&apos;s Household ─────────────────── */
    {
      ref: '2 Samuel 5:11–16',
      title: 'The Cedar House and the Royal Seed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 11,
              spans: [
                t('And '),
                hg('Hiram king of Tyre', 'c-hiram'),
                t(' sent messengers to David, and cedar trees, and carpenters, and masons: and they built David an house.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hiram',
          html:
            'Hiram, the king of Tyre, reaches out to David. He sends cedar, carpenters, masons — everything needed to build a royal palace. Tyre was Israel&apos;s neighbor and trading partner to the north, skilled in maritime commerce and building. The gift is not merely practical. It is a recognition of David&apos;s rising power, a seal of alliance between nations.',
        },

        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 12,
              spans: [
                t('And David perceived that the Lord had '),
                hp('established him king over Israel', 'c-established'),
                t(', and that he had '),
                hp('exalted his kingdom for his people Israel&apos;s sake', 'c-exalted'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-established',
          html:
            'David "perceived" that the Lord had established him. The word suggests understanding, insight, a deepening knowledge. It is not merely that the tribes anointed him, or that he captured Jerusalem. It is that David sees, in all of this — in the gift from Hiram, in the building of the house, in the expansion of his kingdom — the hand of God working. He understands that his kingdom is not his own achievement but the Lord&apos;s work.',
        },
        {
          kind: 'commentary',
          id: 'c-exalted',
          html:
            'The Lord has exalted his kingdom "for his people Israel&apos;s sake." David&apos;s exaltation is not for David&apos;s sake. It is for the sake of the people. A king is raised up to serve, to feed, to lead the flock. David understands this. His throne is not a throne of personal ambition. It is a throne established by God for the sake of the people entrusted to him.',
        },

        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 13,
              spans: [
                t('And David took him more concubines and wives out of Jerusalem after he was come from Hebron: and there were yet sons and daughters born to David.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Now these be the names of those that were born unto him in Jerusalem; Shammuah, and Shobab, and Nathan, and Solomon, Ibhar also, and Elishua, and Nepheg, and Japhia, Elishama also, and Eliada, and Eliphalet.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'David takes more wives and concubines in Jerusalem and fathers more children. The text names some of them: Nathan and Solomon among them — names that will echo through history. Solomon will succeed David as king. Nathan will become a prophet who will confront David with his sin (2 Samuel 12). The royal seed is multiplying. A dynasty is being established. But the text simply records it without commentary, neither celebrating nor condemning. The children are born. Their names are written. What they will become remains to be seen.',
        },
        {
          kind: 'reflection',
          id: 'david-house',
          prompt:
            'When success comes — when doors open, when you are established in a place you have fought for — what happens to your focus? Does a deeper sense of calling emerge, or is there a risk of losing sight of what mattered most?',
        },
      ],
    },

    /* ─── 2 Samuel 5:17–25 — The Philistine Wars ────────────────────────── */
    {
      ref: '2 Samuel 5:17–25',
      title: 'Two Victories, Two Strategies',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 17,
              spans: [
                t('But when the Philistines heard that they had '),
                hg('anointed David king over Israel', 'c-philistines-heard'),
                t(', all the Philistines came up to seek David; and David heard of it, and went down to the hold.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-philistines-heard',
          html:
            'The Philistines hear that David has been anointed king over all Israel — and they feel the threat. As long as David was king only over Judah, he was one kingdom among others. But now, united, Israel is a force they cannot ignore. They come up to seek David, to destroy him before he can consolidate his power. The test comes quickly.',
        },

        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 18,
              spans: [
                t('And David '),
                hg('inquired of the Lord', 'c-inquired'),
                t(', saying, Shall I go up to the Philistines? wilt thou deliver them into mine hand? And the Lord said unto David, Go up: for I will doubtless deliver the Philistines into thine hand.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-inquired',
          html:
            'David&apos;s first instinct is not to trust his own military judgment. He inquires of the Lord. "Shall I go up? Wilt thou deliver them into mine hand?" This is the sign of a man who understands that victory comes not from strategy alone or strength alone, but from the alignment of human effort with God&apos;s will. The Lord answers: "Go up, for I will doubtless deliver them."',
        },

        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 19,
              spans: [
                t('And David came to '),
                hy('Baal-perazim', 'c-baal-perazim'),
                t('; and David smote them there, and said, The Lord hath broken forth upon mine enemies before me, as the breach of waters. Therefore he called the name of that place '),
                hy('Baal-perazim', 'c-baal-perazim-name'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'c-baal-perazim',
          title: 'בַּ֫עַל פְּרָצִים Baal-perazim — "The Lord of Breakings Forth"',
          script: 'בַּעַל פְּרָצִים',
          translit: '<strong>Baal-perazim</strong> · the lord of breakthroughs; lord of breaking through',
          description:
            'The name comes from *perez*, meaning a breach or breakthrough. "Baal" is "lord." The place name itself commemorates the victory: the Lord broke forth upon David&apos;s enemies like a breach of waters — a flood that cannot be stopped or contained. What was a stronghold of David&apos;s enemy becomes a monument to God&apos;s power.',
        },

        {
          kind: 'commentary',
          id: 'c-baal-perazim-name',
          html:
            'David names the place Baal-perazim — the Lord of Breakthroughs. He does not name it after himself, or after his strategy, or even after the victory in a neutral way. He names it as a witness to God&apos;s action. "The Lord hath broken forth upon mine enemies before me, as the breach of waters." The image is of a dam breaking, waters pouring through unstoppably. That is what the presence of God does.',
        },

        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 20,
              spans: [
                t('And they left their images, and David and his men burned them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'After the victory, David and his men burn the Philistine idols left on the battlefield. It is an act of cleansing, of refusing to be contaminated by the gods the Philistines worship. It is also a declaration: the god of Israel, the God of David, is the only God worth keeping.',
        },

        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 21,
              spans: [
                t('And the Philistines came up yet again, and spread themselves in the valley of Rephaim.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And David '),
                hg('inquired of the Lord', 'c-inquired-again'),
                t(' again. And the Lord said unto him, Thou shalt not go up; but fetch a compass behind them, and come upon them over against the mulberry trees.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-inquired-again',
          html:
            'The Philistines come up a second time. And David inquires of the Lord again. This is crucial. David does not assume that the same strategy that worked once will work again. He does not rest on the memory of the first victory. He asks again. And the Lord gives a different answer: "Thou shalt not go up" — not a frontal assault this time — "but fetch a compass behind them, and come upon them over against the mulberry trees." God&apos;s wisdom is fresh each time. The Lord does not repeat Himself. He meets each challenge with a strategy suited to it.',
        },
        {
          kind: 'hebrew',
          id: 'rephaim-valley',
          title: 'רְפָאִים Rephaim — The Valley of Giants',
          script: 'רְפָאִים',
          translit: '<strong>Rephaim</strong> · the shades; the giants',
          description:
            'The valley takes its name from the Rephaim, a race of giants in the land — enemies of Israel from generations past. That David faces the Philistines in a place whose very name speaks of giants and enemies suggests he is fighting not merely a military opponent but powers that have long opposed God&apos;s people.',
        },

        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 23,
              spans: [
                t('When thou hearest the sound of a going in the tops of the mulberry trees, then thou shalt bestir thyself: for then shall the Lord go out before thee, to smite the host of the Philistines.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And David did so, as the Lord had commanded him; and smote the Philistines from Geba until thou come to Gazer.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'The Lord gives David a sign: when he hears a sound in the mulberry trees, he will know that the Lord has gone before him. It is not a dramatic sign — not thunder, not fire from heaven. It is a sound in the trees, a whisper, perhaps the wind that carries the scent of God&apos;s presence. David learns to listen for the subtle sign, to move when the moment is right. He follows the Lord&apos;s command exactly, and the victory is complete — from Geba to Gazer, the Philistines are driven back.',
        },
        {
          kind: 'christ',
          id: 'true-david',
          title: 'Christ Connection — The True David, Anointed at Thirty',
          html:
            'Jesus began His ministry at thirty years old, the same age David became king over all Israel. Like David, He was anointed — not with oil, but with the Spirit at His baptism (Matt. 3:16–17). Like David, He was led into the wilderness and tested. And like David, He faced enemies and temptations that tested His understanding of God&apos;s will. But where David learned to inquire and to listen for the sign in the mulberry trees, Jesus listened to the Father at every moment: "I do nothing of myself; but as my Father hath taught me, I speak these things" (John 8:28). David won battles. Jesus conquered sin and death itself. And like David, Jesus did not do it by His own power. "The Father that dwelleth in me, he doeth the works" (John 14:10). Every victory was the Father&apos;s working. Every triumph was the Lord going before Him.',
        },
        {
          kind: 'carry',
          html:
            'You may face the same kind of opposition twice, or what looks like the same challenge repeatedly. Your first instinct might be to repeat the strategy that worked last time. But God does not work by formula. Each challenge, each enemy, each moment requires you to inquire afresh: What does the Lord say now? What is the strategy for this particular trial? What sign am I listening for? The sound in the mulberry trees is different for each person, each season. Learn to listen. Learn to move when you hear the Lord&apos;s signal. Do not assume yesterday&apos;s victory predicts today&apos;s strategy. Inquire. Wait. Listen. Move.',
        },
        {
          kind: 'reflection',
          id: 'strategies',
          prompt:
            'Think of a challenge you have faced twice or repeatedly. Were you tempted to use the same solution both times? What would it look like to inquire of God afresh each time, instead of relying on a formula?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'All the tribes of Israel came to David and said, "We are thy bone and thy flesh." He was anointed king over all Israel. He took the stronghold of Zion. Twice the Philistines came against him; twice the Lord delivered them. The formula: David inquired of the Lord, and the Lord went before him.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Samuel 5 · Study Guide',
  },
};
