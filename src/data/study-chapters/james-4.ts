import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * James 4 — On the warring lusts within, asking amiss, worldly friendship,
 * humility, and the brevity of life. Calls readers to submit to God, draw
 * near to Him, refrain from judging, and live in dependence on His will.
 */
export const JAMES_4: RichChapterContent = {
  bookSlug: 'james',
  bookName: 'James',
  chapter: 4,

  estimatedMinutes: { beginner: 9, intermediate: 14, deep: 23 },
  intros: [
    'James 4 moves from false teaching about faith without works (chapter 2) and the power of the tongue (chapter 3) to something more intimate: the lusts warring inside us. The chapter is brutally honest. Where do quarrels come from? From your own desires. Why don\'t you have what you ask for? Because you ask amiss. You want to be friends with the world, but friendship with the world is enmity with God. The chapter reads like a sermon from someone who has looked hard at the human heart and found it fractured.',
    'The cure is just as direct: submit yourself to God, draw near to Him, and He will draw near to you. Confess. Stop judging. Remember that life is a vapor. Accept that you don\'t know tomorrow. This is not complicated theology; it is a call to humility, to honesty, and to the recognition that God is with you if you are willing to stop fighting Him.',
  ],

  opener: {
    matchTitle: /war|fight|battle|conflict/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share James 4',
    quote:
      'Out of the lusts within come quarrels and fighting. God asks us to draw near to Him, submit to His will, humble ourselves, and remember that life is brief and uncertain without Him.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'James 4 · Study Guide',
  },

  sections: [
    /* ─── James 4:1 — Wars and Fightings ──────────────────────────────── */
    {
      ref: 'James 4:1',
      title: 'Wars and Fightings from Your Lusts',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 1,
              spans: [
                t('From whence come wars and fightings among you? come they not hence, even of your '),
                hy('lusts', 'greek-epithymia'),
                t(' that '),
                hg('war in your members', 'c-war-members'),
                t('?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-war-members',
          html:
            'James does not point to external enemies. The wars and fightings are <em>among you</em>, in your community — and they spring from a place that is even more internal. Desires at war in your own members, your own body. This is the anatomy of conflict: it begins as a war within before it breaks out between people.',
        },
        {
          kind: 'greek',
          id: 'greek-epithymia',
          title: 'Epithymia — "lust"',
          script: 'ἐπιθυμία',
          translit: '<strong>epithymia</strong> · desire, craving, longing',
          description:
            'The word means any strong desire — not only sexual, though it can be. Epithymia is the appetite of the flesh that pulls against the Spirit (Gal. 5:17). It is what you want, moment by moment, often at odds with what you know you should want.',
        },
        {
          kind: 'carry',
          html:
            'Before you blame someone else for a quarrel, James asks you to trace it back to your own desire. The longing to be right. The need to win. The ache to be seen. The hunger for what someone else has. Every war outside you began as a war inside you. That is not meant as shame — it is meant as freedom. Once you see the desire, you can ask God to help you want something different.',
        },
        {
          kind: 'reflection',
          id: 'wars-and-lusts',
          prompt:
            'Trace one conflict in your life right now back to a desire inside you. Not blame — just honest naming. What were you actually hungry for?',
        },
      ],
    },

    /* ─── James 4:2–3 — Ye Ask Amiss ──────────────────────────────────── */
    {
      ref: 'James 4:2–3',
      title: '"Ye Ask Amiss"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 2,
              spans: [
                t('Ye '),
                hg('lust, and have not', 'c-lust-have-not'),
                t(': ye kill, and desire to have, and cannot obtain: ye '),
                hg('fight and war', 'c-lust-have-not'),
                t(' yet ye have not, because ye '),
                hp('ask not', 'c-ask-receive'),
                t('.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Ye '),
                hy('ask, and receive not', 'c-ask-receive'),
                t(', because ye ask '),
                hg('amiss', 'greek-aitos'),
                t(', that ye may consume it upon your '),
                hy('lusts', 'greek-epithymia'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-lust-have-not',
          html:
            'The cycle is clear: you want something, you don\'t have it, you want it badly enough to fight for it, but the fight doesn\'t get it for you. The first reason: you don\'t ask. The second: when you do ask, you ask <em>amiss</em> — wrongly, for the wrong motive.',
        },
        {
          kind: 'greek',
          id: 'greek-aitos',
          title: 'Aiteo / Amiss — "ask wrongly"',
          script: 'αἰτέω',
          translit: '<strong>aite&apos;o</strong> · to ask, request; amiss = with wrong motives',
          description:
            'When you ask God, are you asking for something to use, to consume, to make yourself happy? That is asking amiss. Asking rightly is asking for what serves God&apos;s purposes, what builds the kingdom, what makes you more like Christ.',
        },
        {
          kind: 'commentary',
          id: 'c-ask-receive',
          html:
            'Prayer is not a magical transaction where you name something and get it. God listens to the heart behind the request. He does not give you money to stay addicted to money. He does not give you a relationship to feed your self-worship. He does not give you power so you can dominate others. He listens to what you really want — and if what you really want is yourself, He honors that choice by letting you have it, without Him.',
        },
        {
          kind: 'carry',
          html:
            'This is not a rule about prayer; it is a mercy. God will not fuel your lusts. But it also means that when you ask for something — for healing, for a breakthrough, for a relationship, for provision — it\'s worth asking yourself: what am I asking <em>for</em>? What do I think having this will do for me? If the honest answer is "make me the center of my own universe," you may have found why you haven\'t received it yet.',
        },
        {
          kind: 'reflection',
          id: 'ask-amiss',
          prompt:
            'What is something you\'ve been asking God for? Sit with it. Are you asking for it to feed yourself, or to feed something beyond yourself? Be honest.',
        },
      ],
    },

    /* ─── James 4:4 — Friendship of the World ────────────────────────── */
    {
      ref: 'James 4:4',
      title: '"Friendship of the World is Enmity with God"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 4,
              spans: [
                t('Ye '),
                hy('adulterers and adulteresses', 'c-covenant'),
                t(', know ye not that the '),
                hg('friendship of the world', 'christ-world'),
                t(' is '),
                hy('enmity', 'greek-echthra'),
                t(' with God? whosoever therefore will be a friend of the world is the enemy of God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-covenant',
          html:
            'The language is shocking. Adulterers and adulteresses — not a literal condemnation of behavior, but a description of spiritual infidelity. You made a covenant with God. If you are clinging to the world\'s value system, its measure of success, its measure of worth, you are breaking that covenant. You are being unfaithful.',
        },
        {
          kind: 'greek',
          id: 'greek-echthra',
          title: 'Echthra — "enmity"',
          script: 'ἔχθρα',
          translit: '<strong>echthra</strong> · hostility, opposition, hatred',
          description:
            'Not neutral difference. Enmity is active opposition. To choose the world\'s way of thinking — that worth comes from status, that love is about winning, that life is about accumulation — is to oppose God\'s kingdom directly.',
        },
        {
          kind: 'commentary',
          id: 'c-world-system',
          html:
            'By "world" James means not the physical creation (which God loves) but the system — the set of values that says: take what you can, love what flatters you, trust what you can see, protect yourself first. It is the operating system of pride. And you cannot run two operating systems at once. You cannot run the code of heaven and the code of the world on the same heart.',
        },
        {
          kind: 'christ',
          id: 'christ-world',
          title: 'Christ Connection — What "World" Jesus Rejected',
          html:
            'Jesus was offered all the kingdoms of the world — glory, power, the kind of messianic role the world wanted Him to play (Matt. 4:8–10). He refused. Later, He told His disciples, "If the world hate you, ye know that it hated me before it hated you… Because ye are not of the world" (John 15:18–19). James is asking the same question Jesus posed: which kingdom are you actually in? Are you trying to serve two masters?',
        },
        {
          kind: 'carry',
          html:
            'The hard thing about friendship with the world is that it doesn\'t feel like infidelity. It feels practical. Checking your phone the moment you wake up — that\'s just staying connected. Measuring your worth by your output — that\'s ambition. Keeping score in a relationship — that\'s just protecting yourself. But James calls it what it is: a competing allegiance. You are being asked to choose. Not to hate the world, but to stop letting it set your values.',
        },
        {
          kind: 'reflection',
          id: 'world-friendship',
          prompt:
            'What does "the world" actually want from you right now? Status? Productivity? Approval? Name it. Then ask: is that the kind of person I want to be?',
        },
      ],
    },

    /* ─── James 4:5–6 — "He Giveth More Grace" ───────────────────────── */
    {
      ref: 'James 4:5–6',
      title: '"He Giveth More Grace"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 5,
              spans: [
                t('Do ye think that the scripture saith in vain, The spirit that dwelleth in us lusteth to envy?'),
              ],
            },
            {
              number: 6,
              spans: [
                t('But '),
                hg('he giveth more grace', 'c-grace-more'),
                t('. Wherefore he saith, '),
                hy('God resisteth the proud', 'greek-hyperephanos'),
                t(', but giveth grace unto the '),
                hy('humble', 'greek-tapeinos'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-grace-more',
          html:
            'Against every impulse toward envy and lust inside you, God offers something more. Not less grace, not just enough grace, but more. This is the pivot of the chapter. You have named your warfare, your amiss-asking, your divided loyalty — and now you are invited to something else.',
        },
        {
          kind: 'greek',
          id: 'greek-hyperephanos',
          title: 'Hyperephanos — "proud"',
          script: 'ὑπερήφανος',
          translit: '<strong>hyperephanos</strong> · arrogant, haughty, exalted above others',
          description:
            'Pride is not just confidence. It is the stance of someone who elevates themselves above others, who thinks they don\'t need help, who is too high to be brought low. God opposes that posture directly.',
        },
        {
          kind: 'greek',
          id: 'greek-tapeinos',
          title: 'Tapeinos — "humble"',
          script: 'ταπεινός',
          translit: '<strong>tapeinos</strong> · lowly, brought low, of humble circumstances',
          description:
            'Humility in Scripture is not self-condemnation. It is clarity about your actual need. It is the lowness that makes room for God. The humble person is not ashamed of needing help; they know they can\'t do it alone.',
        },
        {
          kind: 'carry',
          html:
            'Somewhere inside you, you are still trying to prove something. To earn, to win, to become enough. And against that constant noise, God says: I will give you <em>more</em> grace. Not less, not measured out, but more than your pride can even imagine. But you have to get low enough to receive it. As long as you\'re reaching up to pull yourself higher, your hands aren\'t open to what grace wants to give.',
        },
        {
          kind: 'reflection',
          id: 'grace-and-pride',
          prompt:
            'Where are you still trying to be proud? What would it feel like to get low about that — to admit you can\'t do it?',
        },
      ],
    },

    /* ─── James 4:7–8 — Submit & Draw Nigh ──────────────────────────── */
    {
      ref: 'James 4:7–8',
      title: 'Submit Yourselves to God; Draw Nigh to Him',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 7,
              spans: [
                t('Submit yourselves therefore to God. '),
                hp('Resist the devil, and he will flee from you', 'christ-resist'),
                t('.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Draw nigh to God, and he will '),
                hg('draw nigh to you', 'c-drawing-near'),
                t('. Cleanse your hands, ye sinners; and purify your hearts, ye '),
                hy('double minded', 'greek-dipsychos'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-drawing-near',
          html:
            'This is one of Scripture\'s most beautiful promises: <em>if you draw near to Him, He will draw near to you.</em> Not from a distance. Not as a distant judge. As someone who moves toward you when you move toward Him. The metaphor is intimate — the closeness of presence, not the coldness of obligation.',
        },
        {
          kind: 'greek',
          id: 'greek-dipsychos',
          title: 'Dipsychos — "double minded"',
          script: 'δίψυχος',
          translit: '<strong>dipsychos</strong> · two-souled, divided in loyalty',
          description:
            'You are trying to love God and love the world. To trust God and trust yourself. To serve two masters. A double mind cannot receive what a whole heart can. Purity of heart, in James, means coherence — your hands and your heart aligned toward the same good.',
        },
        {
          kind: 'christ',
          id: 'christ-resist',
          title: 'Christ Connection — Jesus & the Devil in the Wilderness',
          html:
            'When Satan tempted Jesus in the wilderness, offering him all the kingdoms of the world (Matt. 4:1–11), Jesus did not negotiate or argue. He submitted to God\'s word and the devil fled. Every time Jesus was tested, He moved closer to the Father, not away. Resistance is not bravado; it is proximity to God. You resist the devil by moving nearer to the One who defeats him.',
        },
        {
          kind: 'carry',
          html:
            'You do not have the strength to resist the devil on your own. But you do not have to. The promise is not "resist and you will win a fair fight." The promise is "resist, and he will flee." He cannot stay where God is drawing near. He cannot hold ground in a heart that is moving toward God. So the move is not against the devil; the move is toward God. Let God do the rest.',
        },
        {
          kind: 'divider',
        },
        {
          kind: 'reflection',
          id: 'submit-resist',
          prompt:
            'Where do you sense the devil trying to pull you? Don\'t fight him directly. Just move toward God — prayer, worship, Scripture, community. What would that look like today?',
        },
      ],
    },

    /* ─── James 4:8 (continued) — Cleanse & Purify ────────────────────── */
    {
      ref: 'James 4:8',
      title: 'Cleanse Your Hands; Purify Your Hearts',
      blocks: [
        {
          kind: 'commentary',
          id: 'c-cleanse',
          html:
            'Hands represent works; heart represents the root intention. You can do the right things with the wrong heart. You can refrain from sin externally while harboring it internally. James calls for both: the visible change (hands) and the invisible change (heart). Not one without the other.',
        },
        {
          kind: 'carry',
          html:
            'Confession is not generic. It is specific. Not "I have sinned" but "I was envious of what he had, and it made me cruel." Not "I\'ve been thinking bad thoughts" but "I have nursed that resentment every time I saw her succeed." That specificity is what lets God clean it. You name it, you own it, and you let Him have it. Both the outside — what you did — and the inside — why you did it.',
        },
        {
          kind: 'reflection',
          id: 'cleanse-purify',
          prompt:
            'What is one thing you\'ve been hiding — not the act, but the motive behind it? What would confession look like, not to a judge, but to a God who wants to make you clean?',
        },
      ],
    },

    /* ─── James 4:9–10 — Humble Yourselves ──────────────────────────── */
    {
      ref: 'James 4:9–10',
      title: 'Humble Yourselves in the Sight of the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 9,
              spans: [
                t('Be afflicted, and mourn, and weep: let your laughter be turned to mourning, and your joy to heaviness.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Humble yourselves in the sight of the Lord, and '),
                hg('he shall lift you up', 'c-lift-up'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-lift-up',
          html:
            'The movement is always the same in Scripture: down and then up. You bow; God raises. You confess; He cleanses. You die; He resurrects. James is not calling for permanent sadness — he is calling for the moment of humbling, the acknowledgment that you cannot do this alone. And the promise is that this moment of lowness is not the end. He will lift you up.',
        },
        {
          kind: 'christ',
          id: 'christ-blessed-meek',
          title: 'Christ Connection — "Blessed Are the Meek"',
          html:
            'Jesus said, "Blessed are the meek: for they shall inherit the earth" (Matt. 5:5). Not the powerful, not the self-sufficient, not the proud. The meek — those who have been brought low and have accepted it. The inheritance that comes to them is not what they fought for; it is what they received as a gift from God. James is echoing the Sermon on the Mount: humility is not weakness; it is the position of power in God\'s kingdom.',
        },
        {
          kind: 'carry',
          html:
            'Lift yourself up, and you will eventually fall. But bow yourself, make yourself small before God, and He will lift you up to a height you could never have climbed to yourself. This is not humiliation; this is humility. And it is the only way up that actually holds.',
        },
        {
          kind: 'divider',
        },
        {
          kind: 'reflection',
          id: 'humble-yourself',
          prompt:
            'What would it mean to humble yourself in one area of your life right now? Not to feel ashamed, but to stop pretending you have it handled. What would letting God lift you up look like?',
        },
      ],
    },

    /* ─── James 4:11 — Speak Not Evil One of Another ───────────────── */
    {
      ref: 'James 4:11',
      title: 'Speak Not Evil One of Another',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 11,
              spans: [
                t('Speak not evil one of another, brethren. He that speaketh evil of his brother, and '),
                hg('judgeth his brother', 'c-judge'),
                t(', speaketh evil of the law, and judgeth the law: but if thou judgest the law, thou art not a doer of the law, but a judge.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-judge',
          html:
            'When you judge another person\'s motives or character, you are not applying the law; you are sitting above it. You are positioning yourself as the authority. But the law is not yours to judge — the law is God\'s. There is one <em>Lawgiver</em>, James says next. You are not it. Neither am I.',
        },
        {
          kind: 'carry',
          html:
            'You do not have enough information to judge another person\'s heart. You do not know their struggles, their prayers, their intentions, what God is doing in them. When you speak evil of them, you are not defending the truth; you are playing judge of what you cannot see. The law calls for love; the law calls for believing the best. Every word against someone else is a word against the One who made them.',
        },
        {
          kind: 'reflection',
          id: 'speak-evil',
          prompt:
            'Is there someone whose motives or character you have been judging? What would it mean to stop? To assume the best, or at least to stay silent?',
        },
      ],
    },

    /* ─── James 4:12 — There Is One Lawgiver ─────────────────────────── */
    {
      ref: 'James 4:12',
      title: 'There Is One Lawgiver',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 12,
              spans: [
                t('There is one '),
                hy('lawgiver', 'greek-nomothetes'),
                t(', who is able to save and to destroy: who art thou that '),
                hg('judgeth another', 'c-judging-another'),
                t('?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-judging-another',
          html:
            'The question is not rhetorical in a harsh way. It is invitation. Who are you? Are you God? No. Do you have the authority to save or destroy? No. Then why are you judging? Step back. Let the One who is wise enough and good enough to hold that authority do it.',
        },
        {
          kind: 'greek',
          id: 'greek-nomothetes',
          title: 'Nomothetes — "lawgiver"',
          script: 'νομοθέτης',
          translit: '<strong>nomothetes</strong> · legislator, one who makes law',
          description:
            'God alone has the power to give law, to enforce it, and to show mercy within it. Every human attempt to legislate morality for others is an usurpation of His role. We are not made to carry that weight.',
        },
        {
          kind: 'carry',
          html:
            'The freedom that comes from accepting that you are not the judge is enormous. You do not have to police the world. You do not have to make sure people suffer for their wrongs. You do not have to be right about them. You can love them without approving everything they do. You can disagree without condemning. You can see sin without playing God. That weight was never yours to carry.',
        },
        {
          kind: 'reflection',
          id: 'one-lawgiver',
          prompt:
            'Where have you been trying to be the judge? Of a family member? A coworker? Yourself? What would change if you truly believed God is the judge?',
        },
      ],
    },

    /* ─── James 4:13–15 — Go To Now ─────────────────────────────────── */
    {
      ref: 'James 4:13–15',
      title: 'What Is Your Life? It Is Even a Vapour',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 13,
              spans: [
                t('Go to now, ye that say, To day or to morrow we will go into such a city, and continue there a year, and buy and sell, and '),
                hy('get gain', 'c-get-gain'),
                t(':'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Whereas ye know not what shall be on the morrow. For what is your life? It is even a '),
                hy('vapour', 'greek-atmis'),
                t(', that appeareth for a little time, and then '),
                hg('vanisheth away', 'c-vanish'),
                t('.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('For that ye ought to say, '),
                hp('"If the Lord will, we shall live, and do this, or that"', 'christ-will'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-get-gain',
          html:
            'There is nothing wrong with planning or work. But notice the planning in verse 13: a year in a city, buying and selling and gaining. The speaker is assuming control of next year, next month, next week. They know exactly what will happen. James says: you don\'t know what tomorrow brings. Why are you planning as if you do?',
        },
        {
          kind: 'greek',
          id: 'greek-atmis',
          title: 'Atmis — "vapour"',
          script: 'ἀτμίς',
          translit: '<strong>atmis</strong> · mist, vapor, steam',
          description:
            'Your life is not a building you are constructing. It is not a project with phases and timelines. It is a breath, visible for a moment and then gone. Not to make life meaningless, but to make it precious. A vapor that vanishes — which means every moment that appears now matters infinitely.',
        },
        {
          kind: 'commentary',
          id: 'c-vanish',
          html:
            'The word for vanishing away is <em>aphanizo</em> — it disappears, becomes unseen. Life does not end with fanfare. It fades. Which is why the advice is not to stop planning, but to hold all plans lightly, with the constant awareness that you are not ultimately in control.',
        },
        {
          kind: 'christ',
          id: 'christ-will',
          title: 'Christ Connection — The Will of God',
          html:
            'Jesus taught His disciples to pray, "Thy will be done" (Matt. 6:10). When facing the cross, He prayed, "Not my will, but thine, be done" (Luke 22:42). This is not resignation; it is alignment. The happiest people in Scripture are those whose will has come into accord with God\'s will. James is offering the same invitation: make your plans, but make them as someone who knows the Lord holds tomorrow.',
        },
        {
          kind: 'carry',
          html:
            'The antidote to the anxiety of not knowing tomorrow is not to know it anyway (you can\'t) but to know the One who does. To say before you plan, before you worry, before you scheme: if the Lord will. This is not fatalism. It is freedom. You can work hard today, plan well, build something good — but you can do it as someone who knows that God is holding the future, not you.',
        },
        {
          kind: 'reflection',
          id: 'if-the-lord-will',
          prompt:
            'What are you trying to control that you cannot? Make that plan again — but this time with the words "if the Lord will" underneath. Does something shift?',
        },
      ],
    },

    /* ─── James 4:16–17 — To Him That Knoweth to Do Good ───────────── */
    {
      ref: 'James 4:16–17',
      title: 'To Him That Knoweth to Do Good and Doeth It Not',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 16,
              spans: [
                t('But now ye '),
                hg('rejoice in your boastings', 'c-boast'),
                t(': all such rejoicing is evil.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Therefore to him that '),
                hy('knoweth to do good', 'c-know-good'),
                t(', and '),
                hg('doeth it not', 'c-do-it-not'),
                t(', to him it is sin.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-boast',
          html:
            'A small note before the final verse: boasting about your plans, your city, your gain — even this is evil, James says. It is the posture of someone who thinks they control the future. Let that drop.',
        },
        {
          kind: 'commentary',
          id: 'c-know-good',
          html:
            'The verse is often misunderstood as a general command. In context, it is more specific: you know what God is calling you to do. You have heard Him. You sense it. And yet you are not doing it. That refusal — that is what James is naming as sin.',
        },
        {
          kind: 'commentary',
          id: 'c-do-it-not',
          html:
            'This is the closing argument of the chapter. Not that you have sinned — that you have known what you should do and chosen not to do it. Not that you failed, but that you refused. There is a difference. A refusal is a choice you make with open eyes.',
        },
        {
          kind: 'carry',
          html:
            'By the time you reach verse 17, you know what you know. You have been convicted. You have felt the pull toward humility. You have heard the call to draw near to God. You know it is not about your boasts. You know that life is a vapor. You know to refrain from judging. You know to ask God. And now the question is: will you do it, or will you walk away and pretend you never heard? The sin James is naming is not ignorance. It is knowing and refusing.',
        },
        {
          kind: 'reflection',
          id: 'know-good',
          prompt:
            'What is one thing God is clearly asking you to do right now? Not someday, not theoretically — but the thing that comes to mind immediately. What would it cost to say yes?',
        },
      ],
    },
  ],

};
