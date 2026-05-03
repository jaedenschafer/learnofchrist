import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Job 7 — Job Continues His Lament: "What Is Man, That Thou Shouldest
 * Magnify Him?"
 *
 * Job continues his speech to his friends. He speaks of the hard lot of human
 * life: "Is there not an appointed time to man upon earth? are not his days also
 * like the days of an hireling?" A laborer counts the days until he is paid and
 * released. So too, Job wishes his days to end. He speaks of his flesh clothed
 * with worms, his body spread with dust. And then the profound question: "What is
 * man, that thou shouldest magnify him? and that thou shouldest set thine heart
 * upon him? And that thou shouldest visit him every morning, and try him every
 * moment?" This echoes Psalm 8, but with bitter inversion. Why would God care so
 * much about a creature that is only pain? Why not simply let him go? The chapter
 * shows Job wrestling not with theodicy but with the mystery of God\'s attention
 * to human suffering.
 */
export const JOB_7: RichChapterContent = {
  bookSlug: 'job',
  bookName: 'Job',
  chapter: 7,

  estimatedMinutes: { beginner: 4, intermediate: 10, deep: 14 },
  intros: [
    'Job continues his lament. He speaks not to his friends now, but directly to God, though God does not answer. He speaks of the condition of human existence: the hard work, the brief reprieve, the inevitability of death. A laborer — a hired man — counts his days until he is freed from his contract and paid. So Job counts his days, but what awaits him at the end is not payment but the grave.',
    'Job then speaks of his own body: clothed with worms, lying in dust, yet still alive. His skin breaks open and festers. The nights are long, his mornings filled with pain. He says: "I am a burden to myself. Why hast thou set me as a mark against thee?" He experiences his own existence as a burden, as a mark, a target for God\'s attention.',
    'And then Job asks one of the most profound questions in all of Scripture: "What is man, that thou shouldest magnify him?" This echoes the eighth Psalm, but inverted. The Psalmist marvels at God\'s care for humanity. Job asks: why? Why would God care so much about a creature whose only experience is suffering? The question is not rebellion. It is genuine perplexity at the mystery of divine attention to human pain.',
  ],

  bottomShare: {
    label: 'Share Job 7',
    quote:
      '"What is man, that thou shouldest magnify him?" Job asks the question that haunts all who suffer: why does God attend so closely to our pain? The answer—in Job, and later in Christ—is that God\'s attention to suffering is itself redemption.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Job 7 · Study Guide',
  },

  sections: [
    /* ─── Job 7:1–6 — "Is There Not an Appointed Time?" ──────────────────── */
    {
      ref: 'Job 7:1–6',
      title: 'The Appointed Time of a Man',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 1,
              spans: [
                t('Is there not an '),
              hg('appointed time', 'appointed-time'),
              t(' to man upon earth? are not his days also like the days of an '),
              hg('hireling', 'hireling-days'),
              t('?'),
              ],
            },
            {
              number: 2,
              spans: [
                t('As a servant eagerly desireth the shadow, and as an hireling looketh for the reward of his work:'),
              ],
            },
            {
              number: 3,
              spans: [
                t('So am I made to possess '),
              hg('months of vanity', 'months-vanity'),
              t(', and wearisome nights are appointed to me.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('When I lie down, I say, When shall I arise? and the night is gone: and I am full of tossings till the dawning of the day.'),
              ],
            },
            plain(5, 'My flesh is clothed with worms and clods of dust; my skin is broken, and become loathsome.'),
            plain(6, 'My days are swifter than a weaver\'s shuttle, and are spent without hope.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'appointed-time',
          html:
            'Job begins by asking about the fundamental condition of human existence. Is there not an appointed time — a limit, a term — to a man upon earth? The answer is yes. Every human life has boundaries. Every person will die. And Job is asking: why do we not simply accept this limit and let death come when it comes? Why must we suffer while we wait for the appointed time?',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-sakar',
          title: 'Sakar — "Wages" or "Hire"',
          script: 'שָׂכַר',
          translit: '<strong>Sakar</strong> · wages; reward; hire; payment for labor',
          description:
            'A hireling — a day laborer — works for wages, for the daily bread. He counts the days until he receives his sakar, his wages, and is free. Job compares human life to this: a laborer counting days until he is paid and released.',
        },
        {
          kind: 'commentary',
          id: 'hireling-days',
          html:
            'Job compares human life to the days of a hired worker. A servant longs for the evening shadow — the end of the workday, relief from labor. A laborer looks for his wages — the payment that marks the end of his contract and his release. So too, Job suggests, a human being should count his days toward the appointed end, the release of death.',
        },
        {
          kind: 'commentary',
          id: 'months-vanity',
          html:
            'Job says he is "made to possess months of vanity, and wearisome nights are appointed to me." His months are futile, empty, without purpose. And the nights — the time of rest that should be restorative — are wearisome, full of tossing and turning, sleeplessness. The day and night are both burdens.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-hebel',
          title: 'Hebel — "Vanity" or "Emptiness"',
          script: 'הֶבֶל',
          translit: '<strong>Hebel</strong> · vanity; emptiness; futility; breath that dissipates',
          description:
            'The Hebrew hebel is the word Ecclesiastes uses to describe all human striving: "Vanity of vanities, all is vanity." It speaks of something that is insubstantial, that comes to nothing, that is like breath — momentary and gone. Job\'s months are hebel, empty and futile.',
        },
        {
          kind: 'commentary',
          id: 'worms-dust',
          html:
            'Job then describes his physical state: "My flesh is clothed with worms and clods of dust." His body, still alive, is beginning to decay. The worms are already on him as if he were dead. His skin is broken and loathsome. He is living a half-death, still breathing but already decomposing.',
        },
        {
          kind: 'carry',
          html:
            'Job speaks of human existence as labor with an appointed end. There is a strange mercy in this perspective — all work has a term, all suffering has a limit, all life ends. But there is also a terrible awareness: the one suffering is still waiting for that appointed time to come. The days stretch out. The nights are long. And no matter how much one wishes for the end, it comes at its own appointed pace.',
        },
        {
          kind: 'reflection',
          id: 'appointed-end',
          prompt: 'Job sees his life as the days of a hireling — working toward a wage and release. What would it mean to accept that your own life has an appointed time? Does this thought comfort you or disturb you?',
        },
      ],
    },

    /* ─── Job 7:7–16 — "I Am a Burden to Myself" ────────────────────────── */
    {
      ref: 'Job 7:7–16',
      title: 'I Am a Burden to Myself',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 7,
              spans: [
                t('O remember that my '),
              hg('life is wind', 'life-wind'),
              t(': mine eye shall no more see good.'),
              ],
            },
            plain(8, 'The eye of him that hath seen me shall see me no more: thine eyes are upon me, and I am not.'),
            plain(9, 'As the cloud is consumed and vanisheth away: so he that goeth down to the grave shall come up no more.'),
            plain(10, 'He shall return no more to his house, neither shall his place know him any more.'),
            {
              number: 11,
              spans: [
                t('Therefore I will not refrain my mouth; I will speak in the '),
              hy('anguish of my spirit', 'anguish-spirit'),
              t('; I will complain in the bitterness of my soul.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'job7-breath-lament',
          html:
            'Job shifts from describing his restless nights to addressing God directly. Complaint becomes appeal.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(12, 'Am I a sea, or a whale, that thou settest a watch over me?'),
            plain(13, 'When I say, My bed shall comfort me, my couch shall ease my complaint;'),
            plain(14, 'Then thou scarest me with dreams, and terrifiest me through visions:'),
            plain(15, 'So that my soul chooseth strangling, and death rather than my life.'),
            plain(16, 'I loathe it; I would not live alway: let me alone; for my days are vanity.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'life-wind',
          html:
            'Job begs God to remember something: "My life is wind." Life is insubstantial, like the wind — it comes, passes, and is gone. And more: "Mine eye shall no more see good." Job expects no relief. He does not anticipate a time when things will be well again. All that remains is suffering unto death.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-ruach',
          title: 'Ruach — "Wind" or "Spirit"',
          script: 'רוּחַ',
          translit: '<strong>Ruach</strong> · wind; breath; spirit; that which moves and is invisible',
          description:
            'The Hebrew ruach is the same word for the breath of God, for spirit, for wind. It speaks of something that is real but intangible, that moves and cannot be grasped. When Job says his life is ruach, he is saying it is like wind — real in its effects, but insubstantial, temporary, unable to be held.',
        },
        {
          kind: 'commentary',
          id: 'no-more',
          html:
            '"The eye of him that hath seen me shall see me no more: thine eyes are upon me, and I am not." Job speaks as if he were already dead. Those who knew him will not see him again. He is not — he does not exist in the way he once did. Yet paradoxically, God\'s eyes are upon him. God sees him in his non-existence. God attends to him in his dissolution.',
        },
        {
          kind: 'commentary',
          id: 'grave-return',
          html:
            'Job speaks of death with finality: "He shall return no more to his house, neither shall his place know him any more." A dead person does not return. The house does not see him again. The place, the world, moves on without him. This is both the promise and the threat of death — complete release, complete absence.',
        },
        {
          kind: 'commentary',
          id: 'anguish-spirit',
          html:
            'Job declares that he will not refrain his mouth: "I will speak in the anguish of my spirit; I will complain in the bitterness of my soul." He has decided that he will no longer hold back his words. His speech, his lament, his complaint is not a sin he will suppress. It is an honest expression of his suffering. He will cry out.',
        },
        {
          kind: 'commentary',
          id: 'watched-like-monster',
          html:
            '"Am I a sea, or a whale, that thou settest a watch over me?" Job asks this with bitterness. Why would God set a watch over him as if he were dangerous, like a sea that needs to be contained or a whale that needs to be guarded? Is he such a threat that God must watch him constantly?',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-mishmeret',
          title: 'Mishmeret — "Watch" or "Guard"',
          script: 'מִשְׁמֶרֶת',
          translit: '<strong>Mishmeret</strong> · watch; guard; custody; that which is kept and observed',
          description:
            'A mishmeret is a guard or custody. It can mean the guard that watches a prisoner. Job is asking: why do you keep guard over me as if I were a prisoner? Why is your attention focused upon me in this way?',
        },
        {
          kind: 'commentary',
          id: 'dreams-terrors',
          html:
            'When Job seeks comfort in his bed and couch, God terrifies him with dreams and visions. Even his rest is invaded. Even the solace of sleep is denied him. God, in Job\'s experience, actively prevents him from finding any relief.',
        },
        {
          kind: 'commentary',
          id: 'choose-death',
          html:
            '"So that my soul chooseth strangling, and death rather than my life." Job\'s soul — his essential self — would choose death by strangulation, violent death, over the life he is living. This is the ultimate inversion: continued life has become a curse greater than death itself.',
        },
        {
          kind: 'carry',
          html:
            'Job teaches us something we do not often hear in comfort language: that sometimes, suffering becomes so unbearable that the sufferer prefers non-existence. This is not something to lecture away with theology. It is a place where someone has gone, and they need to be met there with presence, not argument. Job says: "I am a burden to myself." What would it mean to simply acknowledge that truth?',
        },
        {
          kind: 'reflection',
          id: 'burden-self',
          prompt: 'Job says "I am a burden to myself." Have you ever felt that way? What kept you alive in that moment — not reasons or arguments, but what small thing made continued existence possible?',
        },
      ],
    },

    /* ─── Job 7:17–21 — "What Is Man, That Thou Shouldest Magnify Him?" ── */
    {
      ref: 'Job 7:17–21',
      title: 'What Is Man?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            {
              number: 17,
              spans: [
                t('What is man, that '),
                hp('thou shouldest magnify him', 'magnify-man'),
                t('? and that thou shouldest set thine heart upon him?'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And that thou shouldest '),
              hg('visit him every morning', 'visit-morning'),
              t(', and try him every moment?'),
              ],
            },
            {
              number: 19,
              spans: [
                t('How long wilt thou not depart from me, nor let me alone till I swallow down my spittle?'),
              ],
            },
            plain(20, 'I have sinned; what shall I do unto thee, O thou preserver of men? why hast thou set me as a mark against thee, so that I am a burden unto myself?'),
            plain(21, 'And why dost thou not pardon my transgression, and take away mine iniquity? for now shall I sleep in the dust; and thou shalt seek me in the morning, but I shall not be.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'magnify-man',
          html:
            'Job asks the question that Psalm 8 celebrates with wonder, but here asks with anguish: "What is man, that thou shouldest magnify him?" The Psalmist wonders at God\'s care, at the fact that God has set humans a little lower than the angels, crowned them with glory and honor. But Job asks: why? Why would God care so much about something so fragile, so temporary, so prone to suffering? Why exalt what is only pain?',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-gadal',
          title: 'Gadal — "To Magnify" or "To Make Great"',
          script: 'גָּדַל',
          translit: '<strong>Gadal</strong> · to make great; to magnify; to exalt; to grow large',
          description:
            'The Hebrew gadal is the same word used when Israel is made great, when God exalts His people. When God magnifies man, He lifts him up, gives him significance. But in Job\'s case, that magnification is experienced as a burden.',
        },
        {
          kind: 'commentary',
          id: 'visit-morning',
          html:
            'God "settest thine heart upon" man — God thinks of him, remembers him. And God "visiteth him every morning" — each day, God attends to him, checks on him as a master checks on a servant or prisoner. God "trieth him every moment" — constantly tests him, watches him. This constant divine attention, which the Psalmist celebrates, Job experiences as surveillance, as punishment.',
        },
        {
          kind: 'commentary',
          id: 'depart-alone',
          html:
            '"How long wilt thou not depart from me, nor let me alone?" Job is asking God to turn away. He is asking for neglect, for abandonment. Such is his suffering that he would prefer to be forgotten by God rather than to continue to be the object of God\'s attention. The very thing the Psalmist celebrates — that God does not forget us — Job experiences as torment.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-raga',
          title: 'Raga — "To Ease" or "To Let Rest"',
          script: 'רָגַע',
          translit: '<strong>Raga</strong> · to ease; to rest; to let be undisturbed',
          description:
            'Job is asking for raga — relief, ease, the permission to be let alone. He is asking God to step back, to stop watching, to stop trying. He wants peace through abandonment.',
        },
        {
          kind: 'commentary',
          id: 'confession-ironic',
          html:
            'Job then makes a strange statement: "I have sinned; what shall I do unto thee, O thou preserver of men?" He confesses sin — but with apparent irony. If he has sinned, what difference does it make? He cannot change the past. And if God is truly the "preserver of men," why does God preserve only suffering? Why not preserve peace or release?',
        },
        {
          kind: 'commentary',
          id: 'mark-against',
          html:
            '"Why hast thou set me as a mark against thee, so that I am a burden unto myself?" Job returns to the image of being targeted, marked. God has made him a mark, a target, a thing to be aimed at. And Job himself has become a burden to himself because of this divine marking.',
        },
        {
          kind: 'commentary',
          id: 'pardon-dust',
          html:
            'Job asks the final question: "Why dost thou not pardon my transgression, and take away mine iniquity?" If he is guilty, why not forgive him? "For now shall I sleep in the dust; and thou shalt seek me in the morning, but I shall not be." By the time morning comes and God seeks him, he will be dead, gone, unable to be found. There is a tragic urgency: forgiveness delayed until death comes is forgiveness never received.',
        },
        {
          kind: 'christ',
          id: 'christ-what-is-man',
          title: 'Christ Connection — What Is Man? Fulfilled in the God-Man',
          html:
            'Job asks: "What is man, that thou shouldest magnify him?" Psalm 8 celebrates the answer. But Scripture\'s deepest answer comes in the Incarnation. Christ is the answer to Job\'s question. He is man magnified by being joined to God Himself. "In the beginning was the Word, and the Word was with God, and the Word was God" (John 1:1). And then: "The Word was made flesh, and dwelt among us" (John 1:14). God does visit man every day. God does try man — but in Christ, who "was in all points tempted like as we are, yet without sin" (Hebrews 4:15). And Christ, the God-man, does ultimately answer Job\'s deepest question: "Why hast thou set me as a mark against thee?" In the cross, Christ becomes the mark, the target. He takes upon Himself what was meant for others. And in His resurrection, He shows that death does not have the final word. The one who sleeps in the dust does not remain there.',
        },
        {
          kind: 'carry',
          html:
            'Job teaches us that God\'s attention to our suffering, God\'s constant presence with us, can be experienced as either comfort or torment, depending on where we stand. For the Psalmist at peace, God\'s care is a wonder. For Job in agony, that same care can feel like surveillance, like judgment. Perhaps the difference is not in what God is doing, but in whether we believe God\'s attention is aimed at our good or our harm. Job believes he is being hunted. The Psalmist believes he is being loved. Both are experiencing God\'s presence — but one hears it as mercy, the other as curse.',
        },
        {
          kind: 'reflection',
          id: 'gods-attention',
          prompt: 'Job experiences God\'s constant attention as a burden, while the Psalmist celebrates it as love. When you feel God\'s presence, which do you experience—comfort or scrutiny? What would have to change for you to experience God\'s attention as mercy?',
        },
      ],
    },
  ],
};
