import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Judges 2 — The Pattern Revealed
 *
 * The generation[res:sefaria-generation-knew-not-lord]al pivot from Joshua&apos;s faithfulness to a cycle that will repeat
 * for four hundred years: sin, servitude, supplication, salvation, silence, and
 * back to sin. God reveals His method for testing covenant faithfulness and His
 * mercy that responds even to disobedient groaning.
 */
export const JUDGES_2: RichChapterContent = {
  bookSlug: 'judges',
  bookName: 'Judges',
  chapter: 2,

  estimatedMinutes: { beginner: 7, intermediate: 10, deep: 13 },
  opener: {
    matchTitle: /An Angel Appears to/i,
    caption: 'Judges 2',
  },
  intros: [
    'Judges 2 stands at a hinge moment. Joshua is dead. The generation that witnessed the exodus and conquest has passed. A new generation has arisen, and the text delivers a chilling diagnosis: they did not know the Lord or the works He did. In their ignorance, they forsook Him. The chapter reveals both the judgment that followed their disobedience and the mercy that was still available — the pattern of the judges cycle that will sustain the nation for the next four centuries.',
    'An angel of the Lord comes to Bochim (the place of weeping) to announce what God will no longer do: drive out the remaining nations. Why? Not as mere punishment, but as a covenant test. God uses the very enemies Israel was called to displace as a means to prove whether they will keep the way of the Lord. This chapter is Genesis 3 played at the national level — the Fall of Israel&apos;s first generation after promise.',
  ],

  sections: [
    /* ─── Judges 2:1–5 — The Angel at Bochim ───────────────────────────── */
    {
      ref: 'Judges 2:1–5',
      title: 'The Angel at Bochim',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 1,
              spans: [
                t('And an angel of the Lord came up from Gilgal to '),
                hy('Bochim', 'bochim-place'),
                t(', and said, I made you to go up out of Egypt, and have brought you unto the land which I sware unto your fathers; and I said, '),
                hp('I will never break my covenant with you', 'covenant-promise'),
                t('.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And ye shall make no league with the inhabitants of this land; ye shall throw down their altars: but ye have not obeyed my voice: '),
                hg('why have ye done this', 'disobedience-question'),
                t('?'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'bochim-place',
          title: 'Bochim — "the weepers"',
          script: 'בֹּכִים',
          translit: '<strong>bochim</strong> · plural of bokheh, those who weep',
          description:
            'The place is named for what happens there: weeping. Sorrow always follows the announcement of covenant breach. God&apos;s word of disappointment must lead to genuine weeping — not performance, but broken recognition of what has been lost.',
        },
        {
          kind: 'commentary',
          id: 'covenant-promise',
          html:
            'The angel begins where the whole story began: God&apos;s fidelity. "I made you to go up out of Egypt… I will never break my covenant." This is not a conditional opening. God anchors His own faithfulness before He addresses Israel&apos;s failure. Even as judgment is coming, the covenant foundation holds. This is the posture of all biblical discipline — it comes from inside a relationship that God will not break.',
        },
        {
          kind: 'commentary',
          id: 'disobedience-question',
          html:
            'The angel&apos;s question is not rhetorical — it carries genuine hurt. "Why have you done this?" The tone is not distant judgment but the bewilderment of a covenant partner. Israel has been given clear instructions — no leagues, no altars left standing — yet they have done nothing. The question invites reflection, not excuse.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 3,
              spans: [
                t('Wherefore I also said, '),
                hg('I will not drive them out from before you', 'nations-remain'),
                t('; but they shall be as thorns in your sides, and their gods shall be a snare unto you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'nations-remain',
          html:
            'God&apos;s judgment has a purpose embedded in it. He will not complete the conquest. The remaining nations become a test. They are not punishment in the sense of mere harm — they are a pruning tool, an instrument of covenant proving. Like thorns and snares, they will test Israel&apos;s devotion. The god-systems around them will tempt. And in that temptation, Israel will have to choose.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 4,
              spans: [
                t('And it came to pass, when the angel of the Lord spake these words unto all the children of Israel, that the people '),
                hp('lifted up their voice, and wept', 'weeping-response'),
                t('.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And they called the name of that place Bochim: and they sacrificed there unto the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'christ',
          id: 'weeping-response',
          title: 'Christ Connection — Grace Beyond Obedience',
          html:
            'Israel&apos;s weeping at Bochim is not the end of the story — they sacrifice. Even in their failure, even as the covenant has been broken, they cry[res:bibleodyssey-judges-cycle] out and offer. Jesus teaches that "blessed are those who mourn" (Matthew 5:4). The mourning comes first, and it opens a door. Throughout Judges, when Israel weeps and groans under oppression, deliverers rise — not because they deserve rescue, but because a God who repents when He hears their pain raises up judges (Judges 2:18). This is the gospel pattern: humans fail, humans weep, God hears the weeping, and grace arrives not earned.',
        },
        {
          kind: 'carry',
          html:
            'When you recognize your own covenant-breaking — the promises you made that you haven&apos;t kept, the clarity you were given that you ignored — the first step is Bochim. Weep. Let the disappointment sink in. The tears themselves are the gateway to what God does next.',
        },
        {
          kind: 'reflection',
          id: 'reflection-bochim',
          prompt: 'When have you recognized a broken promise you made, and what did it take for that recognition to sink in?',
        },
      ],
    },

    /* ─── Judges 2:6–10 — The Generation That Knew Not the Lord ──────────── */
    {
      ref: 'Judges 2:6–10',
      title: 'The Generation That Knew Not the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 6,
              spans: [
                t('And when Joshua had let the people go, the children of Israel went every man unto his inheritance to possess the land.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And the people served the Lord all the days of Joshua, and all the days of the elders that outlived Joshua, who had seen all the great works of the Lord, that he did for Israel.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And Joshua the son of Nun, the servant of the Lord, died, being an hundred and ten years old.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And they buried him in the border of his inheritance in Timnath-heres, in the mount of Ephraim, on the north side of the hill Gaash.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And also all that generation were gathered unto their fathers: and '),
                hg('there arose another generation after them, which knew not the Lord, nor yet the works which he had done for Israel', 'generational-pivot'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'generational-pivot',
          html:
            'This sentence may be the most chilling in the Old Testament. Not "they rejected the Lord" but "they knew not the Lord." Knowledge has evaporated in a single generation. The great works of the Lord — the parting of the sea, the tumbling walls, the conquest itself — have become memory, then story, then indifference. This is not doctrinal apostasy but generational amnesia. The discipleship gap of one generation is the story of human drift: when the witness dies, the work fades.',
        },
        {
          kind: 'carry',
          html:
            'Your faith cannot be inherited; it must be known. When parents or mentors pass, their witness passes with them unless you have made the works of God your own knowing. If your relationship with God is secondhand — borrowed from someone else&apos;s experience — you are one generation away from the same amnesia Israel faced. Seek your own encounter with the living God.',
        },
        {
          kind: 'reflection',
          id: 'reflection-generation',
          prompt: 'What spiritual works or knowledge have you inherited from others, and which ones have you truly made your own?',
        },
      ],
    },

    /* ─── Judges 2:11–15 — The Downward Spiral ──────────────────────────── */
    {
      ref: 'Judges 2:11–15',
      title: 'The Downward Spiral',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 11,
              spans: [
                t('And the children of Israel did '),
                hg('evil in the sight of the Lord', 'evil-deed'),
                t(', and served Baalim:'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And they forsook the Lord God of their fathers, which brought them out of the land of Egypt, and followed other gods, of the gods of the people that were round about them, and bowed themselves unto them, and provoked the Lord to anger.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And they forsook the Lord, and served Baal and Ashtaroth.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And the anger of the Lord was hot against Israel; and he delivered them into the hands of spoilers that spoiled them, and he sold them into the hands of their enemies round about, so that they could not any longer stand before their enemies.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('Whithersoever they went out, the hand of the Lord was against them for evil, as the Lord had said, and as the Lord had sworn unto them: and they were greatly distressed.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'evil-deed',
          html:
            'The evil Israel did was not random or private. It was structural: serving the gods of Canaan. Baal and Ashtaroth were fertility deities bound up in ritual practices that directly violated the covenant. Israel did not gradually drift — they actively served and bowed. The action is not passive backsliding but deliberate turning away[res:intertextual-judges-cycle-repentance].',
        },
        {
          kind: 'carry',
          html:
            'Evil is rarely chosen as evil. It is chosen as an alternative worship. When you serve money, status, or pleasure, you are not being neutral — you are bowing to something. The distress that follows is not arbitrary punishment but the natural fruit of serving a god who cannot deliver what he promises.',
        },
      ],
    },

    /* ─── Judges 2:16–19 — The Judges Cycle Begins ────────────────────────── */
    {
      ref: 'Judges 2:16–19',
      title: 'The Cycle Revealed: Saviors Rise and Fall',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 16,
              spans: [
                t('Nevertheless the Lord raised up '),
                hg('judges, which delivered them out of the hand of those that spoiled them', 'judges-rise'),
                t('.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And yet they would not hearken unto their judges, but went a whoring after other gods, and bowed themselves unto them: they turned quickly out of the way which their fathers walked in, obeying the commandments of the Lord; but they did not so.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And when the Lord raised them up judges, then the Lord was with the judge, and delivered them out of the hand of their enemies all the days of the judge: for it repented the Lord because of their groanings by reason of them that oppressed them and vexed them.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And it came to pass, when the judge was dead, that they returned, and corrupted themselves more than their fathers, in following other gods to serve them, and to bow down unto them; they ceased not from their own doings, nor from their stubborn way.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'judges-rise',
          title: 'Shaphat — "to judge"',
          script: 'שָׁפַט',
          translit: '<strong>shaphat</strong> · to judge, to deliver, to govern',
          description:
            'The Hebrew "judge" is not a courtroom official but a deliverer and governor combined. A shaphat is raised up by God to break the chains of oppression and restore covenant order. Jesus will be called the great Judge, the one who delivers finally.',
        },
        {
          kind: 'commentary',
          id: 'judges-mercy',
          html:
            'The pattern is stark and repeated: God raises up a deliverer, the people are freed as long as the judge lives, and the moment he dies, they plunge back in — even deeper than before. Yet notice why God raises up the judges: "because of their groanings." Disobedient groaning. Undeserved groaning. God&apos;s mercy reaches not on the basis of merit but on the sound of pain. This is the gospel pattern, four hundred years before the gospel arrives.',
        },
        {
          kind: 'hebrew',
          id: 'nacham',
          title: 'Nacham — "repent/relent"',
          script: 'נָחַם',
          translit: '<strong>nacham</strong> · to comfort, relent, turn back (from anger)',
          description:
            'When God "repents" in Scripture, He is not confessing sin. He is turning from anger toward compassion. It is an act of relenting. God hears the groan and His wrath gives way to mercy. The same God who disciplines is also the God who cannot stay angry when His people cry out.',
        },
        {
          kind: 'christ',
          id: 'christ-judges',
          title: 'Christ Connection — The Judge Who Stays',
          html:
            'Every judge in the book is a temporary savior. They deliver, they die, and the people fall again. Jesus is the Judge who "will judge the living and the dead; His kingdom will have no end" (Nicene Creed, drawing from Luke 1:33). The judges cycle ends in Christ because Christ is not only the deliverer but the transformer. He breaks the pattern by giving new hearts that can sustain faithfulness. Judges promises temporary relief; the gospel promises permanent restoration.',
        },
        {
          kind: 'carry',
          html:
            'You may have experienced the pattern of the judges in your own life: rescue, obedience for a season, relapse when the rescuer leaves. External salvation is always temporary. What changes the cycle is internal transformation — a new heart that wants to love God because it has tasted His goodness. That is what Christ offers.',
        },
        {
          kind: 'reflection',
          id: 'reflection-cycle',
          prompt: 'Have you experienced a cycle of external help followed by relapse? What would it mean for Christ to transform your heart so the cycle doesn&apos;t repeat?',
        },
      ],
    },

    /* ─── Judges 2:20–23 — The Nations Remain as a Test ───────────────────── */
    {
      ref: 'Judges 2:20–23',
      title: 'The Unconquered Enemies as Covenant Test',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 20,
              spans: [
                t('And the anger of the Lord was hot against Israel; and he said, Because that this people hath transgressed my covenant which I commanded their fathers, and have not hearkened unto my voice;'),
              ],
            },
            {
              number: 21,
              spans: [
                t('I also will not henceforth drive out any from before them of the nations which Joshua left when he died:'),
              ],
            },
            {
              number: 22,
              spans: [
                t('That through them I may '),
                hy('prove Israel', 'prove-test'),
                t(', whether they will keep the way of the Lord to walk therein, as their fathers did keep it, or not.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('Therefore the Lord left those nations, without driving them out hastily; neither delivered he them into the hand of Joshua.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'prove-test',
          html:
            'The nations that remain are not merely a punishment — they are a testing instrument. "Prove" here means to test and refine, as gold is proved in fire. God uses the pressure of surrounding enemies and their god-systems as a way of clarifying who Israel actually is. The temptation itself is the test. And a test implies it could go either way. The outcome is not predetermined.',
        },
        {
          kind: 'carry',
          html:
            'Your remaining temptations — the things you haven&apos;t conquered yet — are not accidents of divine carelessness. They are God&apos;s testing grounds. The invitation to return to a former addiction, the person who tempts you toward compromise, the pride that creeps in: these are like Israel&apos;s surrounding nations. They prove who you are becoming. Will you keep the way of the Lord when keeping it is costly?',
        },
        {
          kind: 'reflection',
          id: 'reflection-test',
          prompt: 'What unconquered "nation" — what habitual temptation — is God using to test whether you&apos;re truly committed to Him?',
        },
        {
          kind: 'divider',
        },
        {
          kind: 'commentary',
          html:
            '1 Corinthians 10:13 echoes this exact pattern: "There hath no temptation taken you but such as is common to man: but God is faithful, who will not suffer you to be tempted above that ye are able; but will with the temptation also make a way to escape, that ye may be able to bear it." Same God. Same pattern. The test is real. The way of escape is there. The choice is yours.',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Judges 2',
    quote:
      'Another generation arose that did not know the Lord, and His covenant became a test. Yet even in their disobedience, God heard their weeping and raised up judges to deliver them.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Judges 2 · Study Guide',
  },

  resources: [
    {
      id: 'bibleodyssey-judges-cycle',
      kind: 'study',
      source: 'Bible Odyssey',
      label: 'The Cycle of Judges: Forgetting and Deliverance',
      url: 'https://www.bibleodyssey.org/passages/main-passage/judges-2',
      description: 'The establishment of the recurring cycle in Judges: apostasy, oppression, repentance, and deliverance through a judge.',
    },
    {
      id: 'sefaria-generation-knew-not-lord',
      kind: 'study',
      source: 'Sefaria',
      label: 'A Generation That Knew Not the Lord',
      url: 'https://www.sefaria.org/Judges.2?lang=bi',
      description: 'The tragedy of spiritual amnesia: the failure to transmit knowledge of God from one generation to the next.',
    },
    {
      id: 'intertextual-judges-cycle-repentance',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'God Hears the Weeping (Judges to Psalms)',
      url: 'https://intertextual.bible/search?q=weeping+cry+god+hears+judges+deliverance+psalms',
      description: 'Despite Israel&apos;s repeated failures, God&apos;s compassion is aroused by their crying, demonstrating His persistent mercy throughout Judges.',
    },
  ],

  hasHebrew: true,
};
