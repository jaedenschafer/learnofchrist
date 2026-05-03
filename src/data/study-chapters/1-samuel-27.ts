import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 1 Samuel 27 — David Flees to Gath
 *
 * In despair, David abandons Israel and seeks refuge among the Philistines,
 * the very enemies he has fought his entire life. He deceives King Achish,
 * telling lies about his raids while secretly striking Israel&apos;s enemies.
 * It is the lowest point of David&apos;s faith — a season of exile and compromise
 * where he acts from fear rather than trust. Yet God&apos;s purposes proceed even
 * through David&apos;s darkest seasons, and mercy survives the moments when even
 * the righteous despair.
 */
export const SAMUEL_1_27: RichChapterContent = {
  bookSlug: '1-samuel',
  bookName: '1 Samuel',
  chapter: 27,

  estimatedMinutes: { beginner: 6, intermediate: 11, deep: 14 },
  intros: [
    'The chapter opens with a confession: "I shall now perish one day by the hand of Saul." David, the man who has escaped Saul a hundred times, whose faith has been tested and proven in the wilderness, finds himself overcome by fear. He has stopped believing that God will deliver him. Instead, he believes that escape is his only survival. And so he does what he has never done before — he leaves Israel, leaves the Promised Land, and seeks refuge in enemy territory.',
    'What follows is a season of exile and moral ambiguity. David dwells in the land of the Philistines for a year and four months. He raids the enemies of Israel while lying to Achish, the Philistine king, about whom he is actually striking. He lets no one live who might report his deception. It is a dark portrait — not of David falling into sin, but of a righteous man acting from despair, making compromised choices in a place he should never have been. Yet even here, God&apos;s providence continues to work. David is not abandoned. Even in exile, his story moves toward the throne.',
  ],

  sections: [
    /* ─── 1 Samuel 27:1–4 — David's Despair and the Flight ─────────────── */
    {
      ref: '1 Samuel 27:1–4',
      title: 'The Despair: "I Shall Now Perish"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 1,
              spans: [
                t('And David said in his heart, I shall now perish one day by the hand of Saul: '),
                hg('there is nothing better for me than that I should speedily escape into the land of the Philistines', 'c-despair'),
                t('; and Saul shall despair of me, to seek me any more in any coast of Israel: so shall I escape out of his hand.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-despair',
          html:
            'Here is the crisis of faith. David does not say "God will deliver me." He says "I shall perish." He has forgotten every deliverance in the caves, every narrow escape, every time the Lord has hidden him and preserved him. Fear has overwhelmed hope. And his solution is to flee to Gath, the city of Goliath — the very enemy who embodied everything he feared before he slew him. He is moving backward, into the land of the Philistines, because he no longer believes God will keep him in Israel.[res:sefaria-hannah-prayer][res:bible-odyssey-eli][res:iaa-shiloh]',
        },

        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 2,
              spans: [
                t('And David arose; he passed over with the '),
                hy('600 men', 'c-men'),
                t(' that were with him unto Achish, the son of Maoch, king of Gath.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-men',
          html:
            'David brings 600 men with him — the band of soldiers who have followed him, stayed with him in the wilderness, defended him against Saul. These men follow their leader into enemy territory. They move from Israel to Philistia, from the Promised Land to the land of their ancient enemies.',
        },

        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 3,
              spans: [
                t('David dwelt with Achish at Gath, he and his men, every man with his household, even David with his two wives, Ahinoam the Jezreelitess, '),
                hy('Abigail', 'c-abigail'),
                t(' the Carmelitess, Nabal&apos;s wife.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-abigail',
          html:
            'David settles in Gath not as a refugee but as a man establishing himself. He brings his wives — Ahinoam and Abigail (the widow of Nabal, whose wisdom saved her household years before). His men bring their families. David is not fleeing as a fugitive. He is defecting to the enemy as a fugitive general.',
        },

        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 4,
              spans: [
                t('And it was told Saul that David was fled to Gath; he sought no more again for him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-saul-ceases',
          html:
            'The strangest verse: Saul stops searching. In one sense, David&apos;s strategy works — Saul despairs of finding him, just as David hoped. But this is not deliverance. This is the removal of pursuit that comes at the cost of exile. David wanted to be left alone, and he is. But he has had to abandon everything to gain it.',
        },
        {
          kind: 'carry',
          html:
            'You may find yourself in a season where the weight of your circumstances feels unbearable. Where it seems easier to abandon what you have been called to than to wait and trust. David felt that. He did not commit a grave sin here, but he acted from fear instead of faith. And he ended up in a place he never should have been — living among enemies, making compromises he would not have made in Israel. Sometimes the worst thing we can do is the thing that feels most practical, most immediate, most like survival. Sometimes faith means staying. Sometimes it means believing that God is not done with you, even when the pressure is overwhelming.',
        },
        {
          kind: 'reflection',
          id: 'despair',
          prompt:
            'When have you been tempted to flee a difficult situation instead of staying and trusting? What would it look like to bring that fear to God instead of acting from it?',
        },
      ],
    },

    /* ─── 1 Samuel 27:5–8 — Ziklag Granted ─────────────────────────────── */
    {
      ref: '1 Samuel 27:5–8',
      title: 'The Town of Ziklag',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 5,
              spans: [
                t('And David said to Achish, If I have now found grace in thine eyes, let them give me a place in some town in the country, that I may dwell there: '),
                hg('for why should thy servant dwell in the royal city with thee', 'c-distance'),
                t('?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-distance',
          html:
            'David does not want to live in Gath itself, in the king&apos;s house. He asks for a place away from the court, a town in the country. His words are deferential ("thy servant"), but his real concern is distance — he needs space to maneuver, to hide his true activities. He cannot sustain his deception while living under the king&apos;s eye.',
        },

        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 6,
              spans: [
                t('Achish gave him '),
                hy('Ziklag', 'c-ziklag'),
                t(' that day: wherefore Ziklag pertaineth unto the kings of Judah unto this day.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'c-ziklag',
          title: 'Ziklag — צִקְלַג',
          script: 'צִקְלַג',
          translit: '<strong>Ziklag</strong> · A town on the border of Judah and the Philistine territory',
          description:
            'Achish gives David the town of Ziklag. The text notes that because of this gift, Ziklag "pertaineth unto the kings of Judah unto this day" — meaning that the town became part of Judah&apos;s inheritance. A Philistine king gives David a town that will one day belong to the kingdom David will establish. Even in exile, even in deception, even in David&apos;s compromised season, God&apos;s providence is at work.',
        },

        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 7,
              spans: [
                t('And the time that David dwelt in the country of the Philistines was a full year and four months.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-duration',
          html:
            'A year and four months. David does not stay a few weeks, waiting for the heat to cool. He settles in as a long-term resident of Philistia. He lives in enemy territory for more than a year, becoming a part of Achish&apos;s court, raising his family in a foreign land, all the while maintaining an elaborate deception.',
        },

        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 8,
              spans: [
                t('And David and his men went up, and invaded '),
                hy('the Geshurites, the Gezrites', 'c-enemies'),
                t(', '),
                hy('the Amalekites', 'c-amalekites'),
                t(': for of old the inhabitants of the land, as thou goest to Shur, even unto the land of Egypt.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'c-enemies',
          title: 'Geshurites and Gezrites — גְּשׁוּרִי',
          script: 'גְּשׁוּרִי',
          translit: '<strong>Geshurim</strong> · Inhabitants of border regions south of Judah',
          description:
            'David raids the Geshurites and Gezrites — peoples who lived to the south of Judah, in the borderlands toward Egypt. These were ancient enemies, people on the periphery of Israel.',
        },
        {
          kind: 'hebrew',
          id: 'c-amalekites',
          title: 'Amalekites — עֲמָלֵקִים',
          script: 'עֲמָלֵקִים',
          translit: '<strong>Amalekites</strong> · Ancient enemies of Israel; the people who first attacked Israel after the Exodus',
          description:
            'The Amalekites are Israel&apos;s first enemies after the Exodus (Exodus 17). They are perennial opponents of God&apos;s people. David&apos;s raids target genuine enemies — but his deception about whom he is striking is what makes his actions morally questionable.',
        },
        {
          kind: 'carry',
          html:
            'David is doing something strategically wise but morally compromised. He is striking real enemies of Israel, enemies who deserve to be struck. But he is lying about it to a foreign king, and he is killing the survivors so that no news can reach Achish. He is making his own survival depend on deception and bloodshed. This is what fear does — it does not lead you into great sins, sometimes it leads you into a thousand small compromises that together become a season you did not want to live in.',
        },
        {
          kind: 'reflection',
          id: 'ziklag',
          prompt:
            'Where in your own life have you built a carefully maintained lie to protect yourself? What would it take to stop and tell the truth, even if the truth felt unsafe?',
        },
      ],
    },

    /* ─── 1 Samuel 27:8–12 — The Deception ─────────────────────────────── */
    {
      ref: '1 Samuel 27:8–12',
      title: 'The Lie: Deceiving Achish',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 9,
              spans: [
                t('And David smote the land, and '),
                hg('left neither man nor woman alive', 'c-no-survivors'),
                t(', and took away the sheep, oxen, asses, camels, apparel, and returned, and came to Achish.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-no-survivors',
          html:
            'David kills everyone. Not a tactical necessity, but a precaution — he leaves no one alive to report to Achish whom he has actually been raiding. The text does not endorse this. It reports it. We are seeing David at his darkest, not in outright wickedness, but in the grip of a fear that drives him to do things that would horrify him.',
        },

        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 10,
              spans: [
                t('And Achish said, '),
                hg('Whither have ye made a road today?', 'c-question'),
                t(' And David said, Against the south of Judah, and against the south of the Jerahmeelites, and against the south of the Kenites.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-question',
          html:
            'Achish asks directly: where have you been raiding? And David lies. He claims he has been striking Judah and tribes of Judah — the very people he is actually protecting. He has raided the Amalekites, Geshurites, and Gezrites — enemies of Israel — but he tells Achish he has been raiding Israel itself. The lie is calculated to make Achish trust him, to convince him that David has "turned" and no longer holds allegiance to his own people.',
        },

        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 11,
              spans: [
                t('David saved neither man nor woman alive, to bring tidings to Gath, saying, Lest they should tell on us, saying, '),
                hg('So did David, and so will be his manner all the while he dwelleth in the country of the Philistines', 'c-pattern'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-pattern',
          html:
            'The text explains David&apos;s method: he kills everyone so that no one can report the truth. The last phrase — "so will be his manner all the while he dwelleth" — makes clear that this is his ongoing strategy. For the entire year-and-four-months he spends in Philistia, David will maintain this pattern: he will raid the actual enemies of Israel, then lie about it to Achish, then kill anyone who might expose the lie.',
        },

        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 12,
              spans: [
                t('And Achish believed David, saying, '),
                hp('He hath made his people Israel utterly to abhor him', 'c-believes'),
                t('; therefore he shall be my servant for ever.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-believes',
          html:
            'Achish is convinced. He believes David&apos;s lie. He thinks David has turned against his own people so thoroughly that the Israelites now hate him. And Achish concludes: David will be his loyal servant forever. But Achish does not understand whom he is dealing with. David is not a traitor to Israel. He is a man in exile, lying to survive, and already planning his return.',
        },
        {
          kind: 'christ',
          id: 'christ-exile',
          title: 'Christ Connection — True Exile Without Sin',
          html:
            'In Hebrews 4:15, Paul writes of Jesus: "We have not an high priest which cannot be touched with the feeling of our infirmities; but was in all points tempted like as we are, yet without sin." Jesus, like David, entered enemy territory. He came into a world that opposed Him, that sought to kill Him, where He was surrounded by those who would betray and crucify Him. But unlike David in Gath, Jesus was never tempted to lie, never tempted to compromise, never tempted to save Himself through deception. He "suffered, being tempted" (Heb. 2:18), yet without yielding. He endured the wilderness. He dwelt in the presence of enemies. And He emerged not compromised but perfect. David&apos;s exile in Philistia shows us what exile looks like without the presence of God — fear, deception, compromise. But the cross shows us true exile: despair that is borne without breaking faith, agony that leads to resurrection, not to compromise.',
        },
        {
          kind: 'carry',
          html:
            'You may be in a place right now where you feel as though you are living a lie — where you are saying things you do not believe to survive, where you are hiding who you really are to be safe. You are exhausted by the deception. You are not the only one. Even David lived this way, and he was a man after God&apos;s heart. But the text asks us to look at it straight on. This is what fear produces. This is what it costs to try to save yourself through deception. God did not abandon David in Gath, and He will not abandon you. But He is also calling you out of exile. Not back into a place that is no longer safe, but into the truth. Into freedom. That is the mercy that comes after the season of hiding.',
        },
        {
          kind: 'reflection',
          id: 'deception',
          prompt:
            'What lies are you living right now to feel safe or accepted? What would change if you stopped performing and spoke the truth about who you really are?',
        },
      ],
    },

    /* ─── Closing — Providence in the Dark ───────────────────────────────── */
    {
      ref: '1 Samuel 27 · The Whole Chapter',
      title: 'Providence Working Through Compromise',
      blocks: [
        {
          kind: 'commentary',
          id: 'c-closing',
          html:
            'This chapter is a portrait of a righteous man in exile, making compromised choices. David is not falling into grave sin, but into the small, relentless compromises that come from fear. He is lying. He is killing to cover his lies. He is settling into a foreign land as though he will never go home. Yet even here, God&apos;s purposes proceed. Achish trusts him. David accumulates power and resources. And Ziklag, given to him by a Philistine king, will one day belong to the kingdom David will establish. God does not abandon His people in their seasons of weakness. Even in Gath, even in exile, even in the midst of a year and four months of deception, David is not beyond the reach of God&apos;s mercy. He is in the wrong place, making wrong choices. But he has not been cast off. The story will continue. David will return. And the mercies that wait are far greater than the compromises he is making now.',
        },
        {
          kind: 'carry',
          html:
            'If you are in a season of exile right now — a place you should not be, making choices that do not align with who you know you are — hear this: God has not abandoned you. You are not beyond recovery. Even the darkest compromises we make do not place us outside the reach of His mercy. What you need is not condemnation. You need to come home. You need to leave the lie and walk back into the truth. That walk is harder than staying in the comfort of a lie, but it leads somewhere — not to judgment, but to restoration. To the throne. To the purposes God has for you all along.',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 1 Samuel 27',
    quote:
      'In despair, David flees to the land of the Philistines and lives a year in exile, deceiving the king and maintaining an elaborate lie. Even in this dark season, God&apos;s purposes proceed, and mercy waits for his return.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Samuel 27 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-hannah-prayer',
      kind: 'study',
      source: 'Sefaria',
      label: 'Hannah&apos;s Prayer',
      url: 'https://www.sefaria.org/1_Samuel.1',
      description: 'Complete text and commentary on Hannah&apos;s prayer and Samuel&apos;s birth.',
    },
    {
      id: 'bible-odyssey-eli',
      kind: 'study',
      source: 'Bible Odyssey/SBL',
      label: 'Eli and the Priesthood',
      url: 'https://www.bibleodyssey.org/dictionary/eli/',
      description: 'Overview of Eli&apos;s role as high priest and the corruption of his sons.',
    },
    {
      id: 'iaa-shiloh',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'Shiloh Excavation',
      url: 'https://www.antiquities.org.il/',
      description: 'Archaeological evidence of the Shiloh temple site where Hannah and Eli worshipped.',
    },
  ],
};
