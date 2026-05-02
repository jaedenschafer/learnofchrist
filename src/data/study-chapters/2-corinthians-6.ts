import { hp, hy, hg, t, verse, plain, type RichChapterContent } from './types';

/**
 * 2 Corinthians 6 — Reconciliation Lived Out
 *
 * Paul has proclaimed reconciliation through Christ. Now he calls the Corinthians
 * to live as reconciled people. Received grace must be embodied—not wasted, not
 * squandered. He then warns against being yoked with unbelievers, not from arrogance
 * but from wisdom: some partnerships would pull you away from Christ. The chapter
 * ends with the promise that God will dwell in us, and we shall be His people.
 */
export const SECOND_CORINTHIANS_6: RichChapterContent = {
  bookSlug: '2-corinthians',
  bookName: '2 Corinthians',
  chapter: 6,

  intros: [
    'Paul opens with urgency: you have received grace—a gift poured out at the cross, available now, yours to claim. But grace can be received and then lived as if nothing changed. The Corinthians know the good news. The question is: will they live it?',
    'To prove his sincerity, Paul catalogs his own suffering—not as boasting, but as evidence that authentic ministry flows from Christ, not from ease or acclaim. Then he turns to the thorniest question: who can you trust your soul to? The answer shapes everything.',
  ],

  sections: [
    /* ─── 2 Corinthians 6:1–2 — Accepting the Gift ───────────────────────── */
    {
      ref: '2 Corinthians 6:1–2',
      title: 'Workers Together; Now is the Day',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(1,
              t('We then, as '),
              hy('workers together with him', 'cor6-synergeo'),
              t(', beseech you also that ye '),
              hg('receive not the grace of God in vain', 'cor6-charis-vain'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor6-synergeo',
          html:
            'Paul calls believers "workers together"—<em>synergoi</em>—partners with Christ in His redemptive work. You are not passive spectators. Reconciliation is a gift, yes, but you are active in living it out. Grace that transforms is grace received.',
        },
        {
          kind: 'greek',
          id: 'cor6-greek-synergeo',
          title: 'Synergeō — "work together"',
          script: 'συνεργέω',
          translit: '<strong>synergeō</strong> · to work together, to cooperate, to be a partner',
          description:
            'The root is <em>syn</em> (together) and <em>ergon</em> (work). It is not the grace doing everything while you sit. You and Christ are yoking your strength to the same plow. The cost is real. The partnership is real.',
        },
        {
          kind: 'commentary',
          id: 'cor6-charis-vain',
          html:
            'Grace received "in vain"—that is, to no effect—is Paul&apos;s deepest fear for the Corinthians. They have heard the gospel. They have been reconciled. But reconciliation that does not reshape your choices, your loyalty, your commitments is grace squandered. To receive grace is to let it work.',
        },

        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(2,
              t('(For he saith, '),
              hy('I have heard thee in a time accepted', 'cor6-dektos'),
              t(', and in the day of salvation have I succoured thee: '),
              hp('behold, now is the accepted time', 'cor6-christ-now'),
              t('; '),
              hp('behold, now is the day of salvation', 'cor6-christ-now'),
              t(')')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor6-dektos',
          html:
            'Paul quotes Isaiah 49:8—God responding to the suffering servant with rescue at precisely the right moment. <em>Kairos</em> time, not <em>chronos</em>. This is the moment God has chosen. Right now, grace is available. The door is open. You are being called to step through.',
        },
        {
          kind: 'greek',
          id: 'cor6-greek-dektos',
          title: 'Euprosdektos — "accepted"',
          script: 'εὐπρόσδεκτος',
          translit: '<strong>euprosdektos</strong> · welcome, acceptable, well-received',
          description:
            'Not just any time—the <em>accepted</em> time. The moment of God&apos;s favor. And Paul is saying: that moment is <em>now</em>. Not tomorrow, not when you are older or holier. The day of salvation is today.',
        },
        {
          kind: 'christ',
          id: 'cor6-christ-now',
          title: 'Christ Connection — The Appointed Now',
          html:
            'When Paul writes "now is the accepted time," he is speaking of the entire era opened by Christ&apos;s resurrection. Hebrews echoes this: "Today, if ye will hear his voice, harden not your hearts" (Heb. 4:7). Christ has made this moment sacred. The invitation stands. The offer is real. The gospel is not a future promise—it is a present call.',
        },
        {
          kind: 'carry',
          html:
            'You do not need to wait for the perfect moment, the perfect setup, perfect circumstances. The gift is offered now. The door opens now. If you sense the Spirit calling you to take a step—to reconcile, to give, to forgive, to trust—the accepted time is not next month. It is today.',
        },
        {
          kind: 'reflection',
          id: 'cor6-now',
          prompt:
            'What would it look like to receive grace not in vain today—to let it reshape one real choice, one real conversation, one real commitment?',
        },
      ],
    },

    /* ─── 2 Corinthians 6:3 — Giving No Offence ───────────────────────────── */
    {
      ref: '2 Corinthians 6:3',
      title: 'Giving No Offence',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(3,
              t('Giving no offence in any thing, that the '),
              hg('ministry be not blamed', 'cor6-diakonos'),
              t(':')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor6-diakonos',
          html:
            'Paul is ruthlessly aware of how believers are watched. If a minister of reconciliation lives carelessly, greedily, angrily—the gospel itself is damaged in the eyes of those watching. Ministry is not just what you preach; it is the life behind the preaching.',
        },
        {
          kind: 'carry',
          html:
            'You are a minister of reconciliation too—not from a pulpit, but in your home, your workplace, your community. When you live with integrity, others see Christ&apos;s name honored. When you fall short—which you will—own it. The gospel is not harmed by your failure; it is harmed by your hypocrisy.',
        },
      ],
    },

    /* ─── 2 Corinthians 6:4–5 — Afflictions & Stripes (Part 1) ───────────── */
    {
      ref: '2 Corinthians 6:4–5',
      title: 'Approved in Much Patience; In Afflictions',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(4,
              t('But in all things approving ourselves as the ministers of God, in '),
              hy('much patience', 'cor6-makrothymia'),
              t(', in '),
              hg('afflictions', 'cor6-thlipsis'),
              t(', in necessities, in distresses,')
            ),
            verse(5,
              t('In '),
              hg('stripes', 'cor6-plege'),
              t(', in imprisonments, in tumults, in labours, in watchings, in fastings;')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor6-thlipsis',
          html:
            'Paul does not prove his ministry by comfort or success. He proves it by endurance. Afflictions (Greek <em>thlipsis</em>—"pressure," "crushing distress") are where apostolic credibility is forged. He has been beaten, imprisoned, exhausted. And he kept working.',
        },
        {
          kind: 'greek',
          id: 'cor6-greek-makrothymia',
          title: 'Makrothymia — "patience"',
          script: 'μακροθυμία',
          translit: '<strong>makrothymia</strong> · long-suffering, forbearance, patient endurance',
          description:
            'Not passive resignation, but active, steadfast bearing of hardship without complaint or bitterness. Makrothymia is what holds you upright when the weight will not lighten.',
        },
        {
          kind: 'commentary',
          id: 'cor6-makrothymia',
          html:
            'Paul catalogs not just external hardships but the internal strength required to bear them. Much patience—<em>makrothymia</em>—is not gritted teeth. It is the sustained, gentle endurance that Christ Himself modeled.',
        },
        {
          kind: 'commentary',
          id: 'cor6-plege',
          html:
            'Stripes (beatings), imprisonments, tumults—Paul is not exaggerating. He would later list these in detail in 2 Corinthians 11. He was whipped repeatedly, jailed, mob-attacked. The catalog here is his credential. If he preaches reconciliation while suffering men who hate him, his message has weight.',
        },
        {
          kind: 'carry',
          html:
            'Your sufferings—small or large—are not disqualifying you from serving Christ. They are the furnace where real faith is tested and proven. Whatever pressure you are under, whatever loss you are carrying, it does not make you less effective in God&apos;s hands. It makes you more real, more credible, more humble.',
        },
        {
          kind: 'reflection',
          id: 'cor6-afflictions',
          prompt:
            'Where are you being pressed right now—in your work, your relationships, your circumstances? How might God be using that pressure to deepen your witness to others?',
        },
      ],
    },

    /* ─── 2 Corinthians 6:6–7 — In Holiness & Righteousness (Part 2) ─────── */
    {
      ref: '2 Corinthians 6:6–7',
      title: 'By Purity and Truth; Armed with Righteousness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(6,
              t('By pureness, in knowledge, in longsuffering, in kindness, by the '),
              hp('Holy Ghost', 'cor6-christ-spirit'),
              t(', by '),
              hg('love unfeigned', 'cor6-agape-anupokritos'),
              t(',')
            ),
            verse(7,
              t('By the word of truth, by the '),
              hg('power of God', 'cor6-dynamis'),
              t(', by the '),
              hy('armour of righteousness', 'cor6-hoplon'),
              t(' on the right hand and on the left;')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor6-agape-anupokritos',
          html:
            'Love that is not faked—<em>agape anupokritos</em>. Unfeigned love is rare. It costs. Yet this is what authenticates ministry. You can bear anything if you truly love the people you are bearing it for.',
        },
        {
          kind: 'commentary',
          id: 'cor6-dynamis',
          html:
            'The power of God is not Paul&apos;s personal charisma or rhetorical skill. It is God&apos;s <em>dynamis</em>—the same power that raised Jesus from the dead. Paul is a channel for something far larger than himself.',
        },
        {
          kind: 'greek',
          id: 'cor6-greek-hoplon',
          title: 'Hoplon — "armour"',
          script: 'ὅπλον',
          translit: '<strong>hoplon</strong> · weapon, shield, piece of armor',
          description:
            'The image is military: righteousness as armor, with truth on one side and God&apos;s power on the other. A believer is not defenseless in a hostile world. You are equipped with something that protects.',
        },
        {
          kind: 'commentary',
          id: 'cor6-hoplon',
          html:
            'The armor of righteousness is not something you forge from your own moral effort. It is something God provides. Your defense against compromise and corruption is alignment with His character and truth.',
        },
        {
          kind: 'christ',
          id: 'cor6-christ-spirit',
          title: 'Christ Connection — Armed by the Spirit',
          html:
            'Paul says ministry is carried out "by the Holy Ghost." Ephesians later uses the same armor metaphor: "the whole armour of God… that ye may be able to withstand in the evil day" (Eph. 6:11, 13). The armor is not something you earn or forge. The Spirit gives it. You put it on.',
        },
        {
          kind: 'carry',
          html:
            'You face opposition—sometimes obvious, sometimes subtle. The world pulls toward compromise, comfort, and self-interest. Your armor is not made of steel. It is made of truth, righteousness, and the Spirit&apos;s power. These are not abstract. They are what keep you standing.',
        },
      ],
    },

    /* ─── 2 Corinthians 6:8–10 — Paradoxes of the Apostolic Life (Part 3) ── */
    {
      ref: '2 Corinthians 6:8–10',
      title: 'By Honour and Dishonour; Dying Yet Living',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(8,
              t('By honour and dishonour, by evil report and good report: as '),
              hg('deceivers, and yet true', 'cor6-paradox-deceivers'),
              t(';')
            ),
            verse(9,
              t('As unknown, and yet '),
              hg('well known', 'cor6-paradox-unknown'),
              t('; as '),
              hg('dying', 'cor6-paradox-dying'),
              t(', and, '),
              hp('behold, we live', 'cor6-christ-dying-living'),
              t('; as '),
              hg('chastened, and not killed', 'cor6-paradox-chastened'),
              t(';')
            ),
            verse(10,
              t('As sorrowful, yet alway '),
              hg('rejoicing', 'cor6-paradox-rejoicing'),
              t('; as poor, yet '),
              hg('making many rich', 'cor6-paradox-rich'),
              t('; as having nothing, and yet '),
              hg('possessing all things', 'cor6-paradox-all'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor6-paradox-deceivers',
          html:
            'Paul is slandered as a deceiver by his enemies. Yet he is true. This is not naïveté—it is the clash between what the world says and what God knows. A believer lives caught between two verdicts: the world&apos;s verdict and God&apos;s verdict. Often they contradict.',
        },
        {
          kind: 'commentary',
          id: 'cor6-paradox-unknown',
          html:
            'Unknown in the cities he passes through, yet his name and work are becoming known across the empire. Obscurity and renown exist at the same time. This is the peculiar tension of faithful work: you labor whether anyone notices or not.',
        },
        {
          kind: 'commentary',
          id: 'cor6-paradox-dying',
          html:
            'Paul is literally dying for the gospel—his body beaten, his life threatened. Yet resurrection is happening inside him. Death and life coexist in the believer. This echoes Jesus&apos;s own paradox: he died the death we deserved and rose to the life we craved.',
        },
        {
          kind: 'christ',
          id: 'cor6-christ-dying-living',
          title: 'Christ Connection — The Pattern of the Cross',
          html:
            'Paul&apos;s catalog of paradoxes is a mirror of Christ&apos;s own story, as Paul describes it in Philippians 2: humiliated, then exalted; emptied, then filled; died, then rose. This is not Paul&apos;s invention. This is the shape of redemption itself. "Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new" (2 Cor. 5:17). The cross is the hinge. Everything reverses.',
        },
        {
          kind: 'commentary',
          id: 'cor6-paradox-chastened',
          html:
            'Chastened (disciplined, corrected by God) but not killed. There is a difference between God&apos;s correction and condemnation. A loving father disciplines his child to shape them, not to destroy them.',
        },
        {
          kind: 'commentary',
          id: 'cor6-paradox-rejoicing',
          html:
            'Sorrowful, yet alway rejoicing. This is not denying the sorrow. It is not pretending to joy you do not feel. It is the strange simultaneity of grief and hope—mourning the cost while trusting the outcome, holding both in the hands of God.',
        },
        {
          kind: 'commentary',
          id: 'cor6-paradox-rich',
          html:
            'Poor (materially depleted) yet making many rich (in faith, in hope, in the gospel). Paul possesses nothing, yet his gifts to the Corinthians are beyond measure. This is the paradox of spiritual wealth: the one who holds least gives most.',
        },
        {
          kind: 'commentary',
          id: 'cor6-paradox-all',
          html:
            'Having nothing, yet possessing all things. This is the deepest paradox: stripped of everything by the world&apos;s reckoning, yet the believer owns the promises of God, the presence of Christ, the inheritance of heaven. Externally destitute. Internally, heir to everything.',
        },
        {
          kind: 'carry',
          html:
            'Your life contains paradoxes you cannot resolve. Joy and sorrow. Strength and weakness. Provision and poverty. Loss and gain. You are not meant to solve these tensions or pretend one side is not real. You are meant to stand in them and trust that something larger than either side is at work. That something is Christ.',
        },
        {
          kind: 'reflection',
          id: 'cor6-paradoxes',
          prompt:
            'Where are you living a paradox right now—carrying two opposite truths at once? Where do you need to trust that God is at work in both sides?',
        },
      ],
    },

    /* ─── 2 Corinthians 6:11–13 — Our Heart is Enlarged ─────────────────── */
    {
      ref: '2 Corinthians 6:11–13',
      title: 'Our Heart is Enlarged Toward You',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(11,
              t('O ye Corinthians, '),
              hg('our mouth is open unto you', 'cor6-mouth-open'),
              t(', '),
              hg('our heart is enlarged', 'cor6-heart-enlarged'),
              t('.')
            ),
            verse(12,
              t('Ye are not straitened in us, but ye are straitened in your own bowels.')
            ),
            verse(13,
              t('Now for a recompence in the same, (I speak as to my children,) '),
              hg('be ye also enlarged', 'cor6-enlarge-back'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor6-mouth-open',
          html:
            'Paul opens his mouth without holding back. His heart is enlarged—wide open to the Corinthians. This is what authentic leadership looks like: full access, full vulnerability, full investment.',
        },
        {
          kind: 'commentary',
          id: 'cor6-heart-enlarged',
          html:
            'The heart is "enlarged" (Greek <em>plateuno</em>, to widen, expand). Paul&apos;s love for them is not small or conditional. It is spacious. The Corinthians are not straitened—limited, confined—by Paul. The only limit is their own willingness to receive.',
        },
        {
          kind: 'commentary',
          id: 'cor6-enlarge-back',
          html:
            'In essence, Paul is asking: Will you enlarge your hearts back to me? Will you open your trust to me as I have opened mine to you? This is how relationships deepen—through mutual vulnerability and reciprocal openness.',
        },
        {
          kind: 'carry',
          html:
            'Someone has opened their heart to you—a mentor, a parent, a friend, God Himself. Are you narrowing their gift by your caution? Is there someone whose love for you deserves your enlarged heart in return?',
        },
      ],
    },

    /* ─── 2 Corinthians 6:14–16 — Be Ye Not Unequally Yoked ──────────────── */
    {
      ref: '2 Corinthians 6:14–16',
      title: 'Be Not Unequally Yoked; Ye Are the Temple',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(14,
              t('Be ye not '),
              hy('unequally yoked together with unbelievers', 'cor6-heterozygeo'),
              t(': for what fellowship hath '),
              hg('righteousness with unrighteousness', 'cor6-yoking-light'),
              t('? and what communion hath light with darkness?')
            ),
            verse(15,
              t('And what concord hath '),
              hg('Christ with Belial', 'cor6-christ-belial'),
              t('? or what part hath he that believeth with an infidel?')
            ),
            verse(16,
              t('And what agreement hath the '),
              hg('temple of God with idols', 'cor6-temple-idols'),
              t('? for '),
              hp('ye are the temple of the living God', 'cor6-christ-temple-dwelling'),
              t('; as God hath said, I will dwell in them, and walk in them; and I will be their God, and they shall be my people.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor6-heterozygeo',
          html:
            'Unequally yoked—<em>heterozygountes</em>. The image is agricultural: an ox and a donkey harnessed together cannot plow straight. They pull in different directions. A believer and unbeliever pursuing different masters, different values, different eternal destinations will tear each other apart.',
        },
        {
          kind: 'greek',
          id: 'cor6-greek-heterozygeo',
          title: 'Heterozygountes — "unequally yoked"',
          script: 'ἑτεροζυγοῦντες',
          translit: '<strong>heterozygountes</strong> · mismatched in the harness; bound to unlike partners',
          description:
            'Not a command to avoid unbelievers entirely—Paul worked and lived among them. But intimate partnership (marriage, deep business alliance, closest counsel) with someone who does not share your foundation in Christ creates a rift that cannot be healed.',
        },
        {
          kind: 'commentary',
          id: 'cor6-yoking-light',
          html:
            'Paul uses pairs: righteousness and unrighteousness, light and darkness, Christ and Belial (a name for Satan), belief and unbelief. These are not compatible. They cannot be harmonized or split the difference.',
        },
        {
          kind: 'commentary',
          id: 'cor6-christ-belial',
          html:
            'Belial is the biblical name for the adversary. Paul is saying: Can Christ and His enemy have anything in common? Can they make a deal, a compromise? The question is rhetorical. The answer is no.',
        },
        {
          kind: 'commentary',
          id: 'cor6-temple-idols',
          html:
            'An idol in a temple of God is the ultimate contradiction—two sacred claims in the same space, pulling opposite ways. When you are the temple of God and you bind yourself to someone who does not honor God, you are trying to house two gods.',
        },
        {
          kind: 'christ',
          id: 'cor6-christ-temple-dwelling',
          title: 'Christ Connection — God Dwelling in Us',
          html:
            'God dwells in His temple—and now, Paul says, that temple is <em>you</em>. In Ephesians, Paul links this directly to Christ: "In whom all the building fitly framed together groweth unto an holy temple in the Lord… for an habitation of God through the Spirit" (Eph. 2:21–22). Christ is the cornerstone; believers are the living stones. The temple is not a building anymore. It is a people. And whatever pulls that people away from God defiles the holy place.',
        },
        {
          kind: 'carry',
          html:
            'Before you bind yourself in covenant to another—in marriage, business partnership, or closest community—ask: Does this person honor God? Are we yoked to the same master? If your deepest allegiance is to Christ and theirs is not, the marriage of souls will be perpetually strained. Love alone cannot resolve a foundation that divided.',
        },
        {
          kind: 'reflection',
          id: 'cor6-yoked',
          prompt:
            'Are there areas where you are "unequally yoked" with someone whose values or faith differ fundamentally from yours? What would faithful wisdom look like in that situation?',
        },
      ],
    },

    /* ─── 2 Corinthians 6:17–18 — Come Out; I Will Receive You ────────────── */
    {
      ref: '2 Corinthians 6:17–18',
      title: 'Come Out and Be Separate; I Will Be Your God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            verse(17,
              t('Wherefore '),
              hg('come out from among them, and be ye separate', 'cor6-separation'),
              t(', saith the Lord, and '),
              hg('touch not the unclean thing', 'cor6-unclean'),
              t('; and I will receive you,')
            ),
            verse(18,
              t('And will be a Father unto you, and ye shall be my sons and daughters, saith the Lord Almighty.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor6-separation',
          html:
            'This is not snobbery or bigotry. This is spiritual protection. The believer must guard against being pulled away from Christ by intimate partnerships with those who do not share faith in Him. The command is not to disdain unbelievers; it is to protect the sanctuary of your own soul.',
        },
        {
          kind: 'commentary',
          id: 'cor6-unclean',
          html:
            'To "touch not the unclean thing" is to preserve your own spiritual integrity. You are made clean by Christ. Guard that. Certain entanglements muddy what God has clarified.',
        },
        {
          kind: 'commentary',
          id: 'cor6-receive',
          html:
            'But separation is not rejection. Separation is the condition for a deeper reception. God says: Come out, and I will receive you. I will be your Father. You will be my children. The promise is intimacy, not isolation.',
        },
        {
          kind: 'christ',
          id: 'cor6-christ-father',
          title: 'Christ Connection — Adopted as Sons and Daughters',
          html:
            'Paul echoes the language of adoption. Romans 8:15–17 is the fuller picture: "Ye have received the Spirit of adoption, whereby we cry, Abba, Father… If children, then heirs; heirs of God, and joint-heirs with Christ." To be separated unto God is to be brought into the family. Separation and intimacy are two sides of the same covenant.',
        },
        {
          kind: 'carry',
          html:
            'If you sense God calling you to disentangle from something or someone that pulls you from Him, the call is not to be alone. It is to move closer to Him. The promise is not deprivation but adoption—a Father who claims you, welcomes you, loves you as a child.',
        },
        {
          kind: 'reflection',
          id: 'cor6-come-out',
          prompt:
            'Is God asking you to "come out" from anything that compromises your walk with Him? If you stepped away, what Father-relationship might deepen in its place?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 2 Corinthians 6',
    quote:
      'Be ye not unequally yoked together with unbelievers. Ye are the temple of the living God; I will dwell in them, and walk in them; and I will be their God, and they shall be my people.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Corinthians 6 · Study Guide',
  },

  hasHebrew: false,
};
