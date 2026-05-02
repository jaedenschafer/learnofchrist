import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 2 Corinthians 12 — Visions and Revelations; The Thorn in the Flesh;
 * My Grace Is Sufficient
 *
 * Paul opens by saying it is not expedient to glory in his own spiritual
 * experiences. Yet he will speak of visions and revelations. Caught up to the
 * third heaven, he heard unspeakable words. But that privilege came with a burden:
 * a "thorn in the flesh," given to humble him. Three times Paul prayed for its
 * removal. God&apos;s answer—not removal, but grace—became the center of his apostolic
 * life. When Paul is weak, Christ&apos;s strength becomes visible. The chapter ends
 * with Paul&apos;s pastoral concern: he is willing to spend and be spent for the
 * Corinthians, yet fears what he will find when he arrives.
 */
export const SECOND_CORINTHIANS_12: RichChapterContent = {
  bookSlug: '2-corinthians',
  bookName: '2 Corinthians',
  chapter: 12,

  intros: [
    'Paul is defending his apostolic authority to the Corinthians. He has been criticized for not being impressive enough, not bold enough. So he speaks—reluctantly—of spiritual experiences. He was caught up to paradise, heard words no human is permitted to utter. Yet he refuses to make that the ground of his ministry. Instead, he speaks of weakness.',
    'God answered Paul&apos;s prayer for deliverance not with relief, but with a paradox: "My grace is sufficient for thee; for my strength is made perfect in weakness." In this answer, Paul discovers the entire shape of Christian life. The goal is not to overcome weakness, but to let Christ&apos;s power flow through it. By chapter&apos;s end, Paul is weeping over the Corinthians, willing to be spent entirely on their behalf—not for return, but for their healing.',
  ],

  opener: {
    matchTitle: /heaven|paradise|thorn|weakness|strength/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share 2 Corinthians 12',
    quote:
      'I am caught up to paradise and heard unspeakable words. Yet God says to me: "My grace is sufficient for thee; for my strength is made perfect in weakness." Therefore I will gladly glory in my infirmities, that the power of Christ may rest upon me.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Corinthians 12 · Study Guide',
  },

  sections: [
    /* ─── 2 Corinthians 12:1–2 — It Is Not Expedient ──────────────────── */
    {
      ref: '2 Corinthians 12:1–2',
      title: 'Visions and Revelations',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 1,
              spans: [
                t('It is not expedient for me doubtless to glory. I will come to '),
                hg('visions and revelations of the Lord', 'cor2-12-visions'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-12-visions',
          html:
            'Paul opens by hesitating. He will speak of spiritual experiences, but he is already distancing himself from the act of boasting. The phrase "it is not expedient" suggests that even though he could boast, something in him resists. To speak of visions as credentials for apostolic authority feels like a concession to his critics.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 2,
              spans: [
                t('I knew a man in Christ above fourteen years ago, (whether in the body, I cannot tell; or whether out of the body, I cannot tell: God knoweth;) '),
                hp('such an one caught up to the third heaven', 'cor2-12-caught-up'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-12-caught-up',
          html:
            'Paul speaks of himself in the third person—"I knew a man." This is humbling. He distances himself from the experience even as he recounts it. "Caught up" suggests rapture, transport beyond his own control. He doesn&apos;t know if he was in the body or out of it. The experience transcends physical categories.',
        },
        {
          kind: 'greek',
          id: 'cor2-12-harpazo',
          title: 'Harpazo — Caught Up; Snatched Away; Raptured',
          script: 'ἁρπάζω',
          translit: '<strong>harpazo</strong> · to seize; to snatch away; to transport violently',
          description:
            'The word implies divine action—Paul did not ascend by his own effort. He was taken. The same word appears in 1 Thessalonians 4:17 for the rapture. Paul experienced what only the redeemed will experience at the resurrection.',
        },
        {
          kind: 'carry',
          html:
            'Spiritual experiences are not the measure of a believer. Paul had visions that would astound most Christians. Yet he will not use them as proof of his authority. He knows something deeper than the extraordinary moment: the slow work of grace in daily weakness.',
        },
        {
          kind: 'reflection',
          id: 'cor2-12-extraordinary',
          prompt:
            'Have you experienced something you knew was from God, but found it hard to speak about? What held you back from making it the centerpiece of your story?',
        },
      ],
    },

    /* ─── 2 Corinthians 12:3–4 — The Third Heaven ──────────────────────── */
    {
      ref: '2 Corinthians 12:3–4',
      title: 'Caught Up to Paradise',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 3,
              spans: [
                t('And I knew such a man, (whether in the body, or out of the body, I cannot tell: God knoweth;)'),
              ],
            },
            {
              number: 4,
              spans: [
                t('How that he was '),
                hg('caught up into paradise', 'cor2-12-paradise'),
                t(', and '),
                hg('heard unspeakable words', 'cor2-12-arrheeta'),
                t(', which it is not lawful for a man to utter.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-12-paradise',
          html:
            'Paul speaks of "paradise"—a place of ultimate joy and peace. "The third heaven" and "paradise" are used interchangeably here. Paul saw what very few have seen. Yet he cannot speak it. The experience itself passed beyond words, into realms where human language breaks down.',
        },
        {
          kind: 'greek',
          id: 'cor2-12-paradeisos',
          title: 'Paradeisos — Paradise',
          script: 'παράδεισος',
          translit: '<strong>paradeisos</strong> · paradise; garden; place of blessedness',
          description:
            'From Persian, meaning "garden" or "enclosure." In the New Testament, paradise is where the penitent thief enters at Jesus&apos; invitation (Luke 23:43), and where Paul is caught up here. It is the restored garden, the place of God&apos;s presence.',
        },
        {
          kind: 'greek',
          id: 'cor2-12-arrheeta',
          title: 'Arrēta — Unspeakable; Inexpressible; Forbidden',
          script: 'ἄρρητος',
          translit: '<strong>arrēta</strong> · not to be spoken; inexpressible; forbidden by sacred law',
          description:
            'The word carries two meanings: words that cannot be expressed in human language, and words that are unlawful to utter—sacred mysteries. Paul heard both: the inexpressible and the forbidden.',
        },
        {
          kind: 'commentary',
          id: 'cor2-12-unspeakable',
          html:
            'Paul deliberately does not tell us what he heard. The experience is sealed. He respects the boundary. He will not vulgarize what is sacred by trying to reduce it to words. This restraint—this silence—is itself an act of faith.',
        },
        {
          kind: 'christ',
          id: 'cor2-12-christ-presence',
          title: 'Christ Connection — Communion with Christ',
          html:
            'Paul heard God speaking directly. This is the deepest communion with God possible in this life—a foretaste of resurrection, of eternity. Jesus promised His followers, "I will not leave you comfortless" (John 14:18), "I will sup with him, and he with me" (Rev. 3:20). Paradise is where that fellowship is unbroken.',
        },
        {
          kind: 'carry',
          html:
            'You will not have visions like Paul&apos;s. But you know something of what he means: moments when God spoke to you so clearly that words could not contain it. Silence around such moments protects them. The deepest encounters with God are often the ones we guard most carefully.',
        },
        {
          kind: 'reflection',
          id: 'cor2-12-paradise-seen',
          prompt: 'When have you been "caught up"—brought near to something transcendent that left you speechless?',
        },
      ],
    },

    /* ─── 2 Corinthians 12:5–7 — Not Glorious; The Thorn ───────────────── */
    {
      ref: '2 Corinthians 12:5–7',
      title: 'Glory Not in Self; The Thorn Given',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 5,
              spans: [
                t('Of such an one will I glory: yet '),
                hg('of myself I will not glory', 'cor2-12-self-glory'),
                t(', but in mine infirmities.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-12-self-glory',
          html:
            'Paul makes a distinction. He will boast—but not of himself. He will boast of what happened to him, of what God did. The visions are God&apos;s gift, not evidence of Paul&apos;s spiritual achievement. This is the pivot of the entire chapter: Paul refuses to be impressed with himself.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 6,
              spans: [
                t('For though I would desire to glory, I shall not be a fool; for I will say the truth: but now I forbear, lest any man should think of me above that which he seeth me to be, or that he heareth of me.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-12-forbear',
          html:
            'Paul could boast more. But he stops himself. "I forbear"—he holds back. Why? Because to say everything he could about his spiritual experiences would cause people to think more highly of him than they should. He prefers to be seen as he really is: weak, human, dependent.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 7,
              spans: [
                t('And lest I should be '),
                hg('exalted above measure', 'cor2-12-exalted'),
                t(' through the abundance of the revelations, there was given to me a '),
                hy('thorn in the flesh', 'cor2-12-skolops'),
                t(', the '),
                t('messenger of Satan to buffet me'),
                t(', lest I should be exalted above measure.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-12-exalted',
          html:
            'Paul&apos;s visions were so extraordinary that they could have inflated him with pride. God knew this. So He gave Paul something else: a limitation. A thorn. A messenger of Satan—allowed by God—to humble him.',
        },
        {
          kind: 'greek',
          id: 'cor2-12-skolops',
          title: 'Skolops — Thorn; Stake; Splinter',
          script: 'σκόλοψ',
          translit: '<strong>skolops</strong> · thorn; stake; piercing point',
          description:
            'A sharp point driven into flesh. Splinter. Stake. The word carries physical pain. Paul experiences a chronic, piercing affliction. Commentators have guessed it was illness, opposition, or eyesight—but Paul deliberately does not tell us. What matters is not the identity but the purpose.',
        },
        {
          kind: 'greek',
          id: 'cor2-12-kolaphizo',
          title: 'Kolaphizō — To Buffet; To Strike with Fist',
          script: 'κολαφίζω',
          translit: '<strong>kolaphizō</strong> · to strike; to buffet; to pummel repeatedly',
          description:
            'Repeated blows. Not a single wound but ongoing battering. The image is visceral. The thorn is not a single sharp point but a continuous assault—kept in place to prevent pride.',
        },
        {
          kind: 'commentary',
          id: 'cor2-12-messenger-satan',
          html:
            'This phrase is shocking: a "messenger of Satan." Yet it is permitted by God. This is not contradiction. God uses even the work of the adversary to accomplish His purposes. Satan meant the thorn for destruction; God means it for sanctification.',
        },
        {
          kind: 'carry',
          html:
            'You have limitations—physical, emotional, circumstantial. They feel like enemies. But God may have allowed them precisely because He knows what would happen if you had unlimited capacity and success. Limitation may be the kindest thing He has done for you.',
        },
        {
          kind: 'reflection',
          id: 'cor2-12-thorn',
          prompt:
            'What limitation has humbled you? Can you see any way God might be using it to protect you or to keep you dependent on Him?',
        },
      ],
    },

    /* ─── 2 Corinthians 12:8–9 — The Prayer Answered ────────────────────── */
    {
      ref: '2 Corinthians 12:8–9',
      title: 'My Grace Is Sufficient',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 8,
              spans: [
                t('For this thing I '),
                hg('besought the Lord thrice', 'cor2-12-thrice'),
                t(', that it might depart from me.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-12-thrice',
          html:
            'Three times Paul prayed—the number of petition, of persistence. He was desperate. He asked God to remove the thorn. This is not a rhetorical prayer of acceptance. This is a man fighting for relief. And God says no.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 9,
              spans: [
                t('And he said unto me, '),
                hp('My grace is sufficient for thee', 'cor2-12-grace-sufficient'),
                t(': for '),
                hp('my strength is made perfect in weakness', 'cor2-12-strength-weakness'),
                t('. '),
                hy('Most gladly therefore will I rather glory in my infirmities', 'cor2-12-glory-infirmities'),
                t(', that the power of Christ may rest upon me.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-12-grace-sufficient',
          html:
            'Not relief. Grace. The answer is not the removal of the thorn but the sufficiency of God&apos;s grace in the midst of it. Grace is not a feeling; it is provision. The word "sufficient" means "to be enough"—enough to sustain, enough to work in, enough to be complete within.',
        },
        {
          kind: 'greek',
          id: 'cor2-12-arkei',
          title: 'Arkei — Is Sufficient; Is Enough',
          script: 'ἀρκέω',
          translit: '<strong>arkei</strong> · to be sufficient; to be adequate; to be enough',
          description:
            'Not merely "will help." But "is enough." Complete sufficiency. The word suggests that nothing else is needed; grace alone is the entire provision.',
        },
        {
          kind: 'commentary',
          id: 'cor2-12-strength-weakness',
          html:
            'This is God&apos;s great paradox: strength is "made perfect in weakness." Not strength displayed through weakness, but strength perfected, completed, fulfilled through weakness. Weakness is not an obstacle to God&apos;s power—it is the condition in which God&apos;s power becomes visible.',
        },
        {
          kind: 'greek',
          id: 'cor2-12-teleō',
          title: 'Teleō — To Perfect; To Complete; To Make Whole',
          script: 'τελέω',
          translit: '<strong>teleō</strong> · to perfect; to complete; to bring to an end; to fulfill',
          description:
            'Not "is displayed" but "is made perfect." God&apos;s strength reaches its fullest expression in human weakness. When you have exhausted your own resources, God&apos;s power becomes unobstructed.',
        },
        {
          kind: 'commentary',
          id: 'cor2-12-glory-infirmities',
          html:
            'Paul&apos;s response is radical. He stops asking for the thorn to be removed and instead "glories" in his infirmities. He chooses them. Not because pain is good, but because he has seen that God works through weakness more powerfully than through strength.',
        },
        {
          kind: 'christ',
          id: 'cor2-12-christ-cross',
          title: 'Christ Connection — The Cross as Weakness',
          html:
            'Jesus on the cross was weak. He could not save Himself. He hung in human vulnerability and pain. Yet that weakness—that cross—became the infinite power of salvation. Paul writes elsewhere: "Christ crucified... the power of God, and the wisdom of God" (1 Cor. 1:23–24). The cross looks like failure. It is actually the fullest expression of God&apos;s power. Paul&apos;s infirmities, offered to God, follow the same pattern.',
        },
        {
          kind: 'carry',
          html:
            'You are praying for relief from something. And God may be saying to you: my grace is sufficient. Not the removal of the difficulty, but my presence in it. The difficulty is where you will know me most deeply. Stop praying for escape. Start praying for grace. Offer your limitation to God and watch what He does with it.',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'cor2-12-grace-answer',
          prompt:
            'What are you asking God to remove? Can you imagine Him answering not with removal, but with the sufficiency of His grace? What would need to change in you to accept that answer?',
        },
      ],
    },

    /* ─── 2 Corinthians 12:10 — When I Am Weak ───────────────────────── */
    {
      ref: '2 Corinthians 12:10',
      title: 'When I Am Weak, Then Am I Strong',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 10,
              spans: [
                t('Therefore I take pleasure in infirmities, in reproaches, in necessities, in persecutions, in distresses for Christ&apos;s sake: for '),
                hg('when I am weak, then am I strong', 'cor2-12-weak-strong'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-12-weak-strong',
          html:
            'Paul lists the catalogue of his sufferings: infirmities, reproaches, necessities, persecutions, distresses. Not theoretically, but in actual experience. And to each one he adds: "for Christ&apos;s sake." His suffering has a shape and direction. It is not random; it is apostolic. And in it, he finds strength.',
        },
        {
          kind: 'greek',
          id: 'cor2-12-astheneia',
          title: 'Astheneia — Weakness; Infirmity; Lack of Strength',
          script: 'ἀσθένεια',
          translit: '<strong>astheneia</strong> · weakness; sickness; powerlessness; vulnerability',
          description:
            'Not metaphorical weakness, but actual human limitation. Paul speaks from lived experience of being undone, unable, empty.',
        },
        {
          kind: 'greek',
          id: 'cor2-12-dynamis',
          title: 'Dynamis — Power; Ability; Strength; Might',
          script: 'δύναμις',
          translit: '<strong>dynamis</strong> · power; ability; force; working of miracles; divine power',
          description:
            'The very word used for God&apos;s power. When Paul is weak (astheneia), God&apos;s power (dynamis) flows through. Not as two separate things, but as one reality: human limitation creating the space for divine action.',
        },
        {
          kind: 'commentary',
          id: 'cor2-12-pleasure',
          html:
            'Paul says he "takes pleasure" in his sufferings. Not masochism, but joy in knowing that each limitation is an occasion for God to work. He has shifted from asking "how can I avoid this?" to "what is God doing in this?"',
        },
        {
          kind: 'christ',
          id: 'cor2-12-christ-gethsemane',
          title: 'Christ Connection — Jesus in Gethsemane',
          html:
            'Jesus in the garden was weak. "Not my will, but thine, be done" (Luke 22:42). In that moment of complete surrender, of weakness, the entire work of redemption was confirmed. He offered "strong crying and tears" (Heb. 5:7), yet in that surrender came the power that would break death itself. Paul sees his own weakness as a kind of Gethsemane—a place where human will is emptied so God&apos;s will can flow through unobstructed.',
        },
        {
          kind: 'carry',
          html:
            'Your weakness is not your enemy. It is where Christ comes. The moment you stop being able to manage, to perform, to keep up the appearance of control—that is where His power becomes real. Stop fighting your limitation. Start offering it.',
        },
        {
          kind: 'reflection',
          id: 'cor2-12-weak-moment',
          prompt:
            'When have you felt weak, unable, completely dependent? Did you sense God&apos;s presence in that moment? What would "taking pleasure" in that moment mean?',
        },
      ],
    },

    /* ─── 2 Corinthians 12:11 — A Fool ───────────────────────────────── */
    {
      ref: '2 Corinthians 12:11',
      title: 'I Am Become a Fool',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 11,
              spans: [
                t('I am become a fool in glorying; ye have compelled me: for I ought to have been commended of you: for in nothing am I behind the very chiefest apostles, though I be nothing.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-12-fool',
          html:
            'Paul returns to his opening hesitation. Boasting feels foolish to him. And yet the Corinthians "compelled" him. They forced his hand by doubting his authority. So he spoke—against his nature. The irony is complete: Paul has proven his apostolic credentials by showing his weakness.',
        },
        {
          kind: 'commentary',
          id: 'cor2-12-nothing',
          html:
            'And yet his conclusion: "though I be nothing." He is not saying he accomplished nothing. He is saying that his worth is not dependent on what he has accomplished. He is nothing in himself—and that nothingness is his greatest strength because it leaves room for God.',
        },
        {
          kind: 'carry',
          html:
            'The pressure to prove yourself—your worth, your capabilities, your importance—is relentless. But what if the greatest thing you can do is admit you are nothing? Not in despair, but in freedom. Your value does not rest on your performance. It rests on God&apos;s choice to work through you.',
        },
      ],
    },

    /* ─── 2 Corinthians 12:12–13 — Signs and Wonders ──────────────────── */
    {
      ref: '2 Corinthians 12:12–13',
      title: 'Signs and Wonders',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 12,
              spans: [
                t('Truly the signs of an apostle were wrought among you in all patience, in signs, and wonders, and mighty deeds.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('For what is it wherein ye were made inferior to other churches, except it be that I myself was not burdensome to you? forgive me this wrong.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-12-signs',
          html:
            'Paul did perform signs and wonders. He is not denying that his ministry bore the marks of apostolic authority. But he did something else: he did not burden the Corinthians for support. He worked with his own hands. He gave instead of taking.',
        },
        {
          kind: 'commentary',
          id: 'cor2-12-self-gift',
          html:
            'Paul is being ironic. He says "forgive me this wrong"—as if his refusal to be supported was an offense. In fact, it was his greatest gift to them: a model of ministry that was not about taking but giving.',
        },
      ],
    },

    /* ─── 2 Corinthians 12:14–15 — I Seek Not Yours ──────────────────── */
    {
      ref: '2 Corinthians 12:14–15',
      title: 'I Seek Not Yours, But You',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 14,
              spans: [
                t('Behold, the third time I am ready to come to you; and '),
                hg('I will not be burdensome to you', 'cor2-12-burden'),
                t(': for '),
                hp('I seek not yours, but you', 'cor2-12-seek-you'),
                t(': for the children ought not to lay up for the parents, but the parents for the children.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-12-burden',
          html:
            'Paul is coming a third time. His concern is not financial support. He will not be "burdensome"—a word that plays on parasitic relationships. He will not take from them.',
        },
        {
          kind: 'commentary',
          id: 'cor2-12-seek-you',
          html:
            'This is the pivot sentence. "I seek not yours, but you." Not their money, their praise, their approval. He seeks them—their souls, their growth, their salvation. The parent does not live off the child; the parent pours everything into the child.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 15,
              spans: [
                t('And I will very gladly '),
                hy('spend and be spent', 'cor2-12-spend-spent'),
                t(' for you; though the more abundantly I love you, the less I be loved.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-12-spend-spent',
          html:
            'Paul will exhaust himself on their behalf. And he knows the cost: the more he loves them, the less love he will receive in return. This is not bitterness. It is the calculation of a pastor who has made a choice.',
        },
        {
          kind: 'greek',
          id: 'cor2-12-dapanaō',
          title: 'Dapanaō — To Spend; To Exhaust; To Use Up',
          script: 'δαπανάω',
          translit: '<strong>dapanaō</strong> · to spend money; to expend resources; to consume; to exhaust',
          description:
            'Used for money spent, resources consumed. Paul will spend his energy, his time, his very self. And then be "spent"—utterly used up.',
        },
        {
          kind: 'christ',
          id: 'cor2-12-christ-spend-spent',
          title: 'Christ Connection — Jesus Spent and Being Spent',
          html:
            'Jesus spent Himself on the cross. "He poured out his soul unto death" (Isa. 53:12). And He is continually being spent—"the same yesterday, and to day, and for ever" (Heb. 13:8)—interceding, sustaining, pouring out grace. Paul&apos;s willingness to be spent echoes the very pattern of Christ&apos;s life.',
        },
        {
          kind: 'carry',
          html:
            'You are made of limited time, limited energy, limited resources. The Christian question is not "how do I protect myself?" but "who am I called to spend myself on?" Paul answered: the Corinthians, even when they didn&apos;t love him back. Who has God put in your path to be spent on?',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'cor2-12-spend-answer',
          prompt:
            'Who are you willing to spend yourself on? Are you able to love even when that love is not returned? What would need to shift in you to answer as Paul did?',
        },
      ],
    },

    /* ─── 2 Corinthians 12:16–19 — We Speak Before God ────────────────── */
    {
      ref: '2 Corinthians 12:16–19',
      title: 'We Speak Before God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 16,
              spans: [
                t('But be it so, I did not myself burden you: nevertheless, being crafty, I caught you with guile.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Did I make a gain of you by any of them whom I sent unto you?'),
              ],
            },
            {
              number: 18,
              spans: [
                t('I desired Titus, and with him I sent a brother. Did Titus make a gain of you? walked we not in the same spirit? walked we not in the same steps?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-12-crafty',
          html:
            'Paul is being sarcastic. Some are saying that while Paul refused their money, he was "crafty" and "caught them with guile" through others. He is denying it—and his questions are rhetorical: Did I profit through Titus? Did he profit? The answer is no.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 19,
              spans: [
                t('Again, think ye that we excuse ourselves unto you? '),
                hg('we speak before God in Christ', 'cor2-12-before-god'),
                t(': but we do all things, dearly beloved, for your edifying.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-12-before-god',
          html:
            'Paul appeals to the highest court: God Himself. He is not speaking to win a debate. He is speaking the truth before God. Everything he has done has been "for your edifying"—not for his own gain, but for the building up of the church.',
        },
        {
          kind: 'carry',
          html:
            'It is possible to be right and yet be driven by wrong motives—to win an argument, to prove a point, to defend your reputation. Paul stops. He appeals to a higher standard: Are you doing this before God? Does it build others up, or does it serve yourself?',
        },
      ],
    },

    /* ─── 2 Corinthians 12:20–21 — Lest I Find You Not As I Would ────── */
    {
      ref: '2 Corinthians 12:20–21',
      title: 'Fear for the Corinthians',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 20,
              spans: [
                t('For I fear, lest, when I come, '),
                hg('I shall not find you such as I would', 'cor2-12-fear'),
                t(', and that I shall be found unto you such as ye would not: lest there be '),
                hg('debates, envyings, wraths, strifes, backbitings, whisperings, swellings, tumults', 'cor2-12-catalog'),
                t(':'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-12-fear',
          html:
            'Paul&apos;s final words are not about himself. They are about the Corinthians. He fears what he will find when he arrives. The church is fragmented. Broken. And his fear is not of conflict with them, but for them—that they may be falling away.',
        },
        {
          kind: 'commentary',
          id: 'cor2-12-catalog',
          html:
            'The catalogue of sins is grim: debates (disputing), envyings (jealousies), wraths (angers), strifes (contests), backbitings (slanders), whisperings (gossip), swellings (arrogance), tumults (riots). The list piles up. These are not just individual sins; they are relational ones. The church is eating itself.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            {
              number: 21,
              spans: [
                t('And lest, when I come again, my God will humble me among you, and '),
                hg('that I shall bewail many which have sinned already', 'cor2-12-mourn'),
                t(', and have not repented of the uncleanness and fornication and lasciviousness which they have committed.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-12-mourn',
          html:
            'Paul does not say "I will rebuke them." He says "I will bewail them"—mourn them. His fear is not anger but weeping. Many have sinned and not repented. They are in spiritual danger. Paul&apos;s heart is breaking for them.',
        },
        {
          kind: 'christ',
          id: 'cor2-12-christ-shepherd',
          title: 'Christ Connection — The Shepherd&apos;s Tears',
          html:
            'Jesus wept over Jerusalem: "O Jerusalem, Jerusalem, thou that killest the prophets... how often would I have gathered thy children together, even as a hen gathereth her chickens under her wings, and ye would not!" (Matt. 23:37). Paul echoes the shepherd&apos;s heart of Jesus. His power lies not in judgment but in sorrow—the breaking of his heart over those he loves.',
        },
        {
          kind: 'carry',
          html:
            'You know someone who is drifting spiritually. Your instinct may be to rebuke or to judge. But what if the deepest thing you could offer is the breaking of your heart on their behalf? Not condemnation, but the ache of someone who loves them and sees them heading toward ruin.',
        },
        {
          kind: 'reflection',
          id: 'cor2-12-final',
          prompt:
            'Who is God calling you to weep for? Not with judgment, but with the tenderness of Paul&apos;s pastoral heart. What would it mean to offer that kind of love?',
        },
        {
          kind: 'artwork',
          matchTitle: /paul|apostle|weakness|grace|thorn/i,
          caption: '2 Corinthians 12 · Caught Up to Paradise',
        },
      ],
    },
  ],

  hasHebrew: false,
};
