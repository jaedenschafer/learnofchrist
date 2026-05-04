import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 2 Esdras 5 — The Signs of the End of the Age
 *
 * The angel Uriel has come to answer Ezra&apos;s anguished questions about God&apos;s
 * justice and the future of Israel. In chapter 5, Uriel describes the signs
 * that will precede the end of the age—a cascade of cosmic and social collapse
 * that will shake every certainty. Yet even as the world falls apart, Uriel
 * offers assurance: these very signs are the harbingers of salvation. When all
 * seems broken, redemption is drawing near.
 *
 * This chapter is one of the most vivid apocalyptic passages in Jewish literature,
 * influenced by and influencing similar visions in the New Testament (Mark 13,
 * Luke 21, Matthew 24). It paints a world in upheaval—moral, cosmic, relational—
 * before the coming of the one who will restore all things.
 */
export const SECOND_ESDRAS_5: RichChapterContent = {
  bookSlug: '2-esdras',
  bookName: '2 Esdras',
  chapter: 5,

  estimatedMinutes: { beginner: 7, intermediate: 14, deep: 19 },
  intros: [
    '2 Esdras 5 is one of the most famous "signs of the end" passages in all of apocalyptic literature. The angel Uriel catalogs the moral and cosmic upheaval that will mark the final age: faithlessness, hidden righteousness, cosmic disruption, the breakdown of nature itself, and the collapse of human bonds. Yet beneath the litany of collapse runs an assurance—these signs are not meaningless chaos, but the very labor pains of a new creation. When the world appears to be falling apart, that is often when God&apos;s deliverance is closest at hand.',
    'The passage deeply influenced the apocalyptic vision of the New Testament, shaping how Jesus Himself describes the end in Matthew 24 and Luke 21. But where Matthew speaks of wars and earthquakes, 2 Esdras adds a dimension that feels more modern—the disintegration of human trust, the breaking of kinship bonds, friends turning into enemies, women bearing not only children but monsters. It is a vision of a world where not only nature but the human heart becomes unreliable. Yet it is also a vision ultimately saturated with hope: after these signs, salvation shall arise.',
  ],

  sections: [
    /* ─── 2 Esdras 5:1–4 — The Opening Vision ────────────────────────── */
    {
      ref: '2 Esdras 5:1–4',
      title: 'Behold, I Will Speak Before You',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 1,
              spans: [
                t('And it came to pass that when I had made an end of speaking these words, the angel which had been sent unto me the night afore said unto me,'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Arise, Esdras, and '),
                hp('hear the words that I am come to tell thee', 'angel-word'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'angel-word',
          html:
            'The angel returns with new revelation. Ezra has spent the night wrestling with God&apos;s justice, and now the angel comes not with easy comfort but with truth. "Arise," the angel says—not a command to sleep, but to awaken to what is real. What Uriel has come to tell Ezra is not what he wants to hear, but what he needs to know. [res:sefaria-2-esdras-5-vision] [res:bible-odyssey-theodicy]',
        },

        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 3,
              spans: [
                t('And I said, Speak on, my lord. Then said he unto me, '),
                hg('Behold, I am come to shew thee the perils that shall come to pass in the latter times', 'perils-coming'),
                t('.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('For lo, the time shall come, that these tokens will be fulfilled, which I told thee of old. And then shall my Son be declared, whom thou hast heard called my Son in the time.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'perils-coming',
          html:
            'The angel promises not peace but clarity. The perils are not being invented; they are the fulfillment of words spoken long ago. This is crucial: the chaos that will come is not random, not outside God&apos;s knowledge, but foretold. And it all culminates in one moment—the declaration of God&apos;s Son. The signs are the labor, and the Son is the birth[res:sefaria-2-esdras-5].',
        },

        {
          kind: 'carry',
          html:
            'When the world begins to shake and you see the signs Uriel describes, your first instinct will be to despair. But the angel has come to tell you: these are <em>tokens</em>—signs that have been foretold. They are not chaos running wild; they are the appointed way to redemption. The very fragmentation of the world is the signal that something new is being born.',
        },

        {
          kind: 'reflection',
          id: 'tokens-fulfilled',
          prompt:
            'What signs are you already seeing in your own time that suggest the world is being shaken? How does it change your perspective to know these have been foretold?',
        },
      ],
    },

    /* ─── 2 Esdras 5:5–13 — Faithlessness Shall Increase ───────────────── */
    {
      ref: '2 Esdras 5:5–7',
      title: 'Faithlessness Shall Increase',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 5,
              spans: [
                t('And this shall be the estate of the things. '),
                hp('Wheresoever thou seest that the rule of man is turned into no rule', 'rule-no-rule'),
                t(', and that things fallen are kept no more in their office; thou shalt know that the highest hath beheld the end of those days.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rule-no-rule',
          html:
            'The first sign is the collapse of order. When the structures that hold societies together—law, leadership, custom—begin to dissolve, when things that ought to remain in their place are no longer kept there, that is the token. Order does not simply fade; it "turns into no rule." Power becomes arbitrary. Institutions hollow out. The machinery of civilization continues to run but does not steer anymore.',
        },

        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 6,
              spans: [
                t('And there shall come to pass, that '),
                hg('the sun shall suddenly shine in the night', 'sun-night'),
                t(', and '),
                hg('the moon thrice in a day', 'moon-thrice'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'sun-night',
          html:
            'If the first sign is the collapse of human order, the next are cosmic convulsions. The sun shines in the night. The laws of nature—the cycles that have marked time since the first day of creation—begin to shatter. The reliable becomes unreliable. The heavens themselves bear witness to the end.',
        },
        {
          kind: 'commentary',
          id: 'moon-thrice',
          html:
            'The moon appears three times in one day. Every clock is broken. The rhythms that organize life—day and night, seasons, years—are thrown into chaos. To the ancients, and to us, such disruption would be the ultimate horror: time itself unraveling.',
        },

        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 7,
              spans: [
                t('And '),
                hg('blood shall trickle out of wood', 'blood-wood'),
                t(', and '),
                hg('the stone shall give a sound', 'stone-voice'),
                t(', and the people shall be troubled.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'blood-wood',
          html:
            'Inanimate creation begins to writhe. Wood—the most common, most stable material of daily life—begins to bleed. A stone cries out. The boundary between the living and the dead, the animate and the inanimate, dissolves. Everything speaks and bleeds and manifests signs of corruption.',
        },
        {
          kind: 'commentary',
          id: 'stone-voice',
          html:
            'Stones give voice. This echoes Luke 19:40, where Jesus says that if the people do not praise Him, the stones will cry out. At the end, all creation speaks—not praise, but testimony to the fact that the world is being remade.',
        },

        {
          kind: 'greek',
          id: 'greek-semeion',
          title: 'Sēmeion — "Sign"',
          script: 'σημεῖον',
          translit: '<strong>Sēmeion</strong> · a sign; a mark; a token of what is to come',
          description:
            'A sign is not random chaos but an indicator. It points beyond itself. The blood, the stones, the sun shining at night—these are all sēmeia, signs that the world as it has been known is ending, and something wholly new is being born. They are terrible, but they are meaningful.',
        },

        {
          kind: 'carry',
          html:
            'In your own time, you will see the signs: institutions that once seemed permanent begin to crumble, human bonds fracture, the reliable world starts to unravel. Your instinct will be to cling to what is falling. But the angel has named these signs for what they are: tokens that the highest has not forgotten, that the end of these days is foretold. Do not cling. Stay awake. Watch. And wait for what is being born.',
        },

        {
          kind: 'reflection',
          id: 'signs-you-see',
          prompt:
            'What are the "no rules" and cosmic disruptions you are already seeing in your lifetime? How does it change your fear to know these are signs rather than accidents?',
        },
      ],
    },

    /* ─── 2 Esdras 5:8–9 — Righteousness Shall Be Hidden ────────────────── */
    {
      ref: '2 Esdras 5:8–9',
      title: 'Righteousness Shall Be Hidden',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 8,
              spans: [
                t('And '),
                hp('righteousness shall be hid, and wickedness shall abound', 'righteousness-hid'),
                t(': and as I told thee before, he that knoweth in those days shall be happy.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'righteousness-hid',
          html:
            'Here the collapse becomes moral. It is not only that external order fails; it is that <em>righteousness itself becomes hidden</em>. What is good is driven underground, silenced, made invisible. Wickedness does not merely exist—it abounds, flourishes openly, becomes the public face of the world. The righteous are not defeated in battle; they are erased from sight, rendered as though they never were.',
        },

        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 9,
              spans: [
                t('And the land, that thou seest now to have root, shall be turned upside down, so that no man shall be able to know the things that are in it: for every nation shall desire to oppress every other nation.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'upside-down',
          html:
            'The land itself—a metaphor for the stability of creation—is turned upside down. What was rooted and knowable becomes unknowable. And the social consequence: nations oppress nations. What was already fragile shatters into a chaos where every group seeks to dominate every other. There is no peace, no truce, no mercy—only endless cycles of oppression.',
        },

        {
          kind: 'carry',
          html:
            'You will live in days when the good are marginalized, when truth is hidden, and when human beings are pitted against each other in endless competitions for power. That hiddenness of righteousness will tempt you to despair: "Has God forgotten? Is there any good left in the world?" But the angel says: he that knoweth in those days shall be happy. Knowing the truth about God, about His plan, about what is coming—that knowledge is itself the grace that sustains you through the hiding of righteousness.',
        },

        {
          kind: 'reflection',
          id: 'hidden-righteousness',
          prompt:
            'Where do you see righteousness being hidden in your own time? How does seeking to know God help you endure when the good are unseen and the wicked flourish?',
        },
      ],
    },

    /* ─── 2 Esdras 5:10 — Beasts Changing Places ──────────────────────── */
    {
      ref: '2 Esdras 5:10',
      title: 'Beasts Shall Change Their Places',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 10,
              spans: [
                t('And it shall be, that '),
                hg('beasts shall go from their places', 'beasts-move'),
                t(', and the creatures of the earth shall change their one from another, and rebel against men, and consume the fruits of the earth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'beasts-move',
          html:
            'The animal kingdom goes into upheaval. Beasts abandon their territories, creatures defy their nature, the hierarchy of creation is inverted. Animals that were once prey become predators; those that served become wild and uncontrollable. And they turn against humans, consuming what humans have labored to grow. The dominion that Adam was given—the stewardship of creation—is taken back. Humans are no longer lords; they are dispossessed.',
        },

        {
          kind: 'carry',
          html:
            'When even the beasts rebel and the fruits of your labor are consumed by forces you cannot control, you are experiencing a reversal that touches something ancient and deep in human consciousness: the fear that the world itself has turned against you. Yet this too is a sign—the very moment when you feel most abandoned is when the angel says deliverance is nearest.',
        },

        {
          kind: 'reflection',
          id: 'nature-against',
          prompt:
            'What does it feel like when forces outside your control—illness, loss, upheaval—consume the fruits of your labor? How can you trust that even in that loss, God has not abandoned you?',
        },
      ],
    },

    /* ─── 2 Esdras 5:11–12 — Stones Shall Give Voice; Salt Waters ───────── */
    {
      ref: '2 Esdras 5:11–12',
      title: 'Stones Shall Give Voice; Salt Waters in Springs',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 11,
              spans: [
                t('And it shall be, that '),
                hg('stones shall be given a voice to cry out', 'stones-cry'),
                t(', and '),
                hg('the things that are now dumb shall speak', 'dumb-speak'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'stones-cry',
          html:
            'The cosmos itself is conscripted as a witness. Stones—the most silent of creation—begin to cry out. The inanimate speaks. In Jewish apocalyptic tradition, creation is not passive when the end comes; it testifies, protests, cries out. Every element of what God made becomes a voice proclaiming that the age is ending.',
        },
        {
          kind: 'commentary',
          id: 'dumb-speak',
          html:
            'What has been mute begins to speak. The silence of the natural world is broken. Everything that has been voiceless—the oppressed, the forgotten, the dead—will have their say when the end comes.',
        },

        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 12,
              spans: [
                t('And '),
                hg('salt waters shall be found in the sweet', 'salt-in-sweet'),
                t(', and all friends shall destroy one another; then shall appear the tree of life, and the city of my beloved shall be shewed.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'salt-in-sweet',
          html:
            'The fundamental categories of creation—salt and sweet, bitter and wholesome—collapse into one another. What was nourishing becomes toxic. The very springs from which life flows become poisoned. This is not only external chaos; it is poisoning from within, the corruption of sources.',
        },

        {
          kind: 'carry',
          html:
            'When the boundaries that hold creation together begin to dissolve—when what should nourish poisons, when what should be solid becomes liquid, when stones speak and flesh is silent—you are experiencing the final unraveling. But the angel offers one promise in the midst of all this: "Then shall appear the tree of life." In the moment when all earthly life seems to be dying, eternal life will be revealed. The city of God shall be shown.',
        },

        {
          kind: 'reflection',
          id: 'poisoned-springs',
          prompt:
            'What sources that should nourish your soul have been poisoned—relationships, institutions, beliefs you trusted? How do you wait for the tree of life to be revealed while drinking from corrupt springs?',
        },
      ],
    },

    /* ─── 2 Esdras 5:13–14 — Women Bearing Monsters; Friends Against Friends ── */
    {
      ref: '2 Esdras 5:13–14',
      title: 'Women Bearing Monsters; Friends Turned to Enemies',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 13,
              spans: [
                t('And it shall come to pass, that '),
                hg('they which have perceived the perils shall escape them, and they which have wrought abominations shall see them', 'perils-escape'),
                t('. And '),
                hg('women shall bring forth monsters', 'women-monsters'),
                t('; and their children shall become as a vapor, and die.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'perils-escape',
          html:
            'There is a division in the end times. Those who perceive the perils—who are awake, aware, watchful—shall escape them. But those who have wrought abominations shall see them come upon themselves. The end is not indiscriminate; it makes a division between the conscious and the unconscious, the aware and the oblivious.',
        },
        {
          kind: 'commentary',
          id: 'women-monsters',
          html:
            'The horror escalates to the profoundest level of human experience: women bearing monsters instead of children. The miracle of birth becomes nightmare. The future itself is corrupted at its source. Children die like vapor, unable to hold form or life. This is the ultimate desolation: the human capacity to create new life is twisted into creating abominations. Nothing is sacred anymore; not even motherhood is safe.',
        },

        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 14,
              spans: [
                t('And the women shall be mad, and cry, when they shall see their children perish: and '),
                hg('friends shall destroy one another', 'friends-destroy'),
                t('; brethren shall make war, and kinsmen shall fall upon their own blood.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'friends-destroy',
          html:
            'The collapse becomes relational. Friends turn into enemies. Kinship—the bond closest to the human heart—becomes a battle line. Brothers make war. Families destroy themselves from within. What you relied on to hold you up in chaos becomes the very thing that destroys you.',
        },

        {
          kind: 'greek',
          id: 'greek-apostasia',
          title: 'Apostasia — "Falling Away"',
          script: 'ἀποστασία',
          translit: '<strong>Apostasia</strong> · falling away; rebellion; the breaking of covenant',
          description:
            'In the end times, not only do institutions fall; covenant relationships fall away. The word apostasia appears in 2 Thessalonians 2:3 alongside the revelation of the lawless one. It is not just sin, but the deliberate, systemic falling away from allegiance to God and to each other.',
        },

        {
          kind: 'christ',
          id: 'christ-signs',
          title: 'Christ Connection — The Signs He Foretold',
          html:
            'Jesus describes these same signs in Matthew 24:6–8 and Luke 21:25–26. Wars, earthquakes, famines, signs in heaven. But Jesus adds something crucial: "These are the beginning of sorrows" (Matthew 24:8). They are not the end; they are the birth pangs of a new world. And then comes the promise: "When these things begin to come to pass, then look up, and lift up your heads; for your redemption draweth nigh" (Luke 21:28). The very collapse of the world is the signal that Christ&apos;s return is near. The signs are not meaningless destruction; they are the highway on which He comes.',
        },

        {
          kind: 'carry',
          html:
            'The deepest terror of the end is not cosmic chaos—it is the turning of the people you love against you. When friends become enemies and kinship becomes a battle, when the bonds meant to hold you up are the ones that wound you, you will be tempted to despair utterly. But the angel does not let the vision end here. Even in this darkness, there is a word: they which have perceived the perils shall escape them. Perception—the awareness that these things are foretold, that you are not abandoned—becomes your deliverance.',
        },

        {
          kind: 'reflection',
          id: 'bonds-broken',
          prompt:
            'Where have you seen bonds of trust and kinship dissolve into conflict? How does the knowledge that this is foretold affect the pain of that betrayal?',
        },
      ],
    },

    /* ─── 2 Esdras 5:15 — Then Shall Salvation Arise ──────────────────────── */
    {
      ref: '2 Esdras 5:15',
      title: 'Then Shall Salvation Arise',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 15,
              spans: [
                t('And '),
                hp('then shall salvation appear, and the earth shall be seen which before was hid', 'salvation-appear'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'salvation-appear',
          html:
            'After the catalog of horrors comes the reversal. Not gradually, but suddenly: salvation appears. And with it, the earth is revealed—the true earth, the one that was hidden beneath chaos, emerges into view. What was obscured by the violence and corruption of the end times is made visible. The real creation, purged and renewed, becomes visible at last.',
        },

        {
          kind: 'carry',
          html:
            'The entire vision has been building toward this moment. The angel did not describe the signs of the end to fill you with despair, but to orient you toward hope. Every sign that marks the world&apos;s dissolution is a countdown to the appearing of salvation. When you see the signs, do not look away. Look through them. Look past them. For in that very moment when the world appears to be falling most completely apart, salvation is appearing, and the true earth—the one you have always longed for—is being revealed.',
        },

        {
          kind: 'reflection',
          id: 'salvation-revealed',
          prompt:
            'In the midst of the chaos and pain you experience now, what hints do you catch of the salvation that is appearing? What would it look like to trust that the true earth is being revealed even as this one seems to crumble?',
        },

        {
          kind: 'artwork',
          matchTitle: /apocalypse|end|judgment/i,
          caption: '2 Esdras 5 · The Signs and the Salvation',
        },
      ],
    },

    /* ─── 2 Esdras 5:16–20 — Ezra Fasts and the Next Vision Begins ──────── */
    {
      ref: '2 Esdras 5:16–20',
      title: 'Ezra&apos;s Fast and the Next Vision',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 16,
              spans: [
                t('And '),
                hg('every one that is delivered from the aforesaid evils shall see my wonders', 'delivered-wonders'),
                t('. For my Son Jesus shall be revealed with those that be with him, and they that remain shall rejoice within four hundred years.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'delivered-wonders',
          html:
            'The promise is not for abstract salvation, but for those delivered—those who have been brought through the tribulation. They shall see God&apos;s wonders. More: they shall see Jesus revealed, no longer hidden, no longer obscured, but made manifest with those who are His. And after the four hundred years (a symbolic number in apocalyptic tradition), the righteous shall rejoice.',
        },

        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 17,
              spans: [
                t('And it shall be, that after these years '),
                hg('my Son Christ shall die, and all men that have life shall die the death of man', 'christ-dies'),
                t('.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Then the world shall turn into the old silence seven days, like as in the beginning; so that no man shall remain.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And after seven days the world that yet awaketh shall be raised up, and that shall die a death.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And the earth shall restore those that are asleep in it, and so shall the dust those that dwell in silence, and the secret places shall deliver those souls that were committed unto them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'christ-dies',
          html:
            'The text promises the death of Christ and the death of all mortal life, followed by a return to the silence before creation—the tohu wa-bohu, the chaos-waters of Genesis 1. And then the resurrection. The creation of all things is repeated: a new world is awakened; the dead are raised. What was asleep in the earth is restored. The dust itself gives back what it holds. The secret places of the earth release the souls committed to them.',
        },

        {
          kind: 'carry',
          html:
            'When Ezra hears this vision, he is transformed. The signs no longer crush him; he now understands them. He now knows that the breakdown of the world is not the victory of chaos, but the appointed way to restoration. He fasts—a physical practice of discipline and openness—waiting for the next word from God.',
        },

        {
          kind: 'reflection',
          id: 'vision-understood',
          prompt:
            'How does understanding the signs change your prayer? What would it mean to "fast" in your own life—to practice discipline and openness—while waiting for what God is doing beneath the surface of the world&apos;s collapse?',
        },
      ],
    },
  ],

  resources: [
    {
      id: 'bible-odyssey-theodicy',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Theodicy in Late Judaism',
      url: 'https://www.bibleodyssey.org/dictionary/evil/',
      description: 'Problem of evil and divine justice in postexilic Jewish thought.',
    },

  ],

  bottomShare: {
    label: 'Share 2 Esdras 5',
    quote:
      'The angel showed Ezra the signs of the end: faithlessness shall increase, righteousness shall be hidden, the sun shall shine at night, blood shall trickle from wood, stones shall give voice, women shall bear monsters, friends shall turn against friends. Yet through all these terrors, a promise: then shall salvation arise, and the earth shall be seen which before was hid.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Esdras 5 · Study Guide',
  },
};
