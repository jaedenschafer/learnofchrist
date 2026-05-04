import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 1 Timothy 1 — The Charge Against False Teachers
 *
 * Paul writes to Timothy, his trusted companion in ministry, entrusting him with
 * the oversight of the church at Ephesus. The apostle&apos;s first concern is not
 * organization or comfort, but doctrinal soundness. False teachers have arisen,
 * peddling endless genealogies and speculations rather than the gospel of Christ.
 * Paul calls Timothy to stand firm: this calling is a warfare, a good fight of faith.
 */
export const FIRST_TIMOTHY_1: RichChapterContent = {
  bookSlug: '1-timothy',
  bookName: '1 Timothy',
  chapter: 1,

  estimatedMinutes: { beginner: 7, intermediate: 12, deep: 19 },
  opener: {
    matchTitle: /Saint Timothy/i,
    caption: '1 Timothy 1',
  },
  intros: [
    'Paul addresses Timothy not as a subordinate to be commanded, but as a fellow worker—someone he has trained, tested, and trusted with the life of an entire congregation. The church at Ephesus was no isolated village gathering. It was a city caught between pagan sophistication and the claims of the gospel. Into this tension, Timothy is sent to "charge some that they teach no other doctrine."',
    'Paul&apos;s opening is urgent. False teachers had infiltrated the assembly, men "desirous of being teachers of the law, understanding neither what they say, nor whereof they affirm." They spoke with confidence but without substance. They multiplied genealogies—endless tracing of ancestry—when what the church needed was love, faith, and a good conscience. Paul will circle back to this repeatedly: truth matters. Right doctrine leads to right living. Deviance leads to shipwreck.',
  ],

  sections: [
    /* ─── 1 Timothy 1:1–2 — The Greeting ─────────────────────────────────── */
    {
      ref: '1 Timothy 1:1–2',
      title: 'The Greeting',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(1,
              t('Paul, an apostle of Jesus Christ by the commandment of God our Saviour, and '),
              hp('Lord Jesus Christ', 'tim1-lord-saviour'),
              t(', which is our hope;'),
            ),
            verse(2,
              t('Unto Timothy, my own son in the faith: Grace, mercy, and peace, from God our Father and Jesus Christ our Lord.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim1-apostle',
          html:
            'Paul opens not with personal opinion but with apostolic authority. He is commissioned "by the commandment of God our Saviour"—not self-appointed. Timothy is his "own son in the faith," a designation of deep spiritual kinship. This is not a formal memo. This is a father&apos;s urgent care for a child he has trained. [res:sefaria-1tim-1]',
        },
        {
          kind: 'christ',
          id: 'tim1-lord-saviour',
          title: 'Christ Connection — Our Hope',
          html:
            'In Paul&apos;s greeting, Christ holds two titles: Lord and Saviour. Both office and rescue. The One who has authority over all things is also the One who reaches down to save. This dual nature of Christ—His kingship and His mercy—sets the tone for everything Timothy must teach. A church under false doctrine loses its moorings. A church anchored to Christ remains secure.',
        },
        {
          kind: 'carry',
          html:
            'Notice the order of Paul&apos;s prayer: "Grace, mercy, and peace." Grace comes first—unearned favor. Mercy follows—compassion toward what we deserve. Peace is the result—the settled stillness that flows from receiving both. As you step into your calling today, this is the order you need too.',
        },
      ],
    },

    /* ─── 1 Timothy 1:3–7 — Charge Some That They Teach No Other Doctrine ──── */
    {
      ref: '1 Timothy 1:3–7',
      title: 'Charge Some That They Teach No Other Doctrine',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(3,
              t('As I besought thee to abide still at Ephesus, when I went into Macedonia, that thou mightest '),
              hp('charge some that they teach no other doctrine', 'tim1-heterodidaskaleō'),
              t(','),
            ),
            verse(4,
              t('Neither give heed to '),
              hy('fables and endless genealogies', 'tim1-genealogies'),
              t(', which minister questions, rather than godly edifying which is in faith: so do.'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'tim1-heterodidaskaleō',
          title: 'Heterodidaskaleō — Teach Otherwise',
          script: 'ἑτεροδιδασκαλέω',
          translit: '<strong>heterodidaskaleō</strong> · to teach differently or falsely',
          description:
            'The prefix hetero means "other" or "different." Teachers who push different doctrine fracture the church. They introduce competing authorities, rival centers. Paul&apos;s charge is not to suppress questions but to establish one firm center: Christ and His gospel.',
        },
        {
          kind: 'commentary',
          id: 'tim1-genealogies',
          html:
            'First-century Ephesus was awash in gnostic speculation—endless tracing of cosmic genealogies, secret names of angels, layers of knowledge reserved for the elite. These false teachers promised a shortcut to God. What they delivered was confusion. Paul names the fruit of false doctrine clearly: questions, division, pride. True doctrine produces something different entirely. [res:perseus-soter]',
        },
        {
          kind: 'carry',
          html:
            'You encounter "false doctrine" today not always in obvious form. It whispers through social media certainty, through leaders who claim hidden knowledge, through ideas that flatter you while separating you from others. The acid test remains what Paul taught: Does this teaching produce "godly edifying"? Does it build up faith? Does it knit believers together in love?',
        },
        {
          kind: 'reflection',
          id: 'tim1-charge',
          prompt: 'What teachings or ideas have you had to "charge against" in your own circle? What makes you hesitant to do so?',
        },
      ],
    },

    /* ─── 1 Timothy 1:5 — The End of the Commandment Is Charity ──────────── */
    {
      ref: '1 Timothy 1:5',
      title: 'The End of the Commandment Is Charity',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(5,
              t('Now the '),
              hp('end of the commandment', 'tim1-telos'),
              t(' is '),
              hy('charity out of a pure heart', 'tim1-agapē'),
              t(', and of a good conscience, and of '),
              hy('faith unfeigned', 'tim1-anupokritos'),
              t(':'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'tim1-telos',
          title: 'Telos — End, Purpose, Goal',
          script: 'τέλος',
          translit: '<strong>telos</strong> · end; completion; aim; fulfillment',
          description:
            'The goal of all commandment is not behavior modification but love. Not rule-keeping but transformation. Not external conformity but a renovated heart. This is the ultimate measure of spiritual maturity.',
        },
        {
          kind: 'greek',
          id: 'tim1-agapē',
          title: 'Agapē — Love',
          script: 'ἀγάπη',
          translit: '<strong>agapē</strong> · selfless love; the love of God toward us',
          description:
            'Not sentimental affection (philos) but the sacrificial, others-centered love that lays down its own interests. This is the kind of love Christ demonstrated on the cross—unconditional, costly, freely given.',
        },
        {
          kind: 'greek',
          id: 'tim1-anupokritos',
          title: 'Anupokritos — Unfeigned, Genuine',
          script: 'ἀνυπόκριτος',
          translit: '<strong>anupokritos</strong> · without hypocrisy; sincere; genuine',
          description:
            'The prefix an- means "not"; hypokritos is "actor" or "pretender." Genuine faith is not a performance. It is what remains when no one is watching—what you believe when you are alone.',
        },
        {
          kind: 'commentary',
          id: 'tim1-pure-heart',
          html:
            'Paul identifies three components of spiritual health: a pure heart (singlemindedness toward God), a good conscience (alignment between belief and action), and genuine faith (not theater, not borrowed conviction). Together they produce agapē—love that is not self-serving but other-oriented. This is the real fruit of sound doctrine. [res:bibleodyssey-timothy]',
        },
        {
          kind: 'carry',
          html:
            'How do you measure the teaching you receive? Paul gives you the metric: Does it produce genuine love from a pure heart? Does it settle your conscience, or does it complicate it? Does it deepen sincere faith, or does it breed doubt and superiority? These three questions cut through all the noise.',
        },
        {
          kind: 'reflection',
          id: 'tim1-fruit',
          prompt: 'Where in your life do you see agapē—love from a pure heart, good conscience, and unfeigned faith? Where do you see the opposite? What would shift?',
        },
      ],
    },

    /* ─── 1 Timothy 1:8–11 — The Law and the Lawless ───────────────────── */
    {
      ref: '1 Timothy 1:8–11',
      title: 'The Law and the Lawless',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(8,
              t('But we know that the law is good, if a man '),
              hp('use it lawfully', 'tim1-lawfully'),
              t(';'),
            ),
            verse(9,
              t('Knowing this, that the law is not made for a righteous man, but for the '),
              hy('lawless and disobedient', 'tim1-anomos'),
              t(', for the ungodly and for sinners, for unholy and profane, for murderers of fathers and murderers of mothers, for manslayers,'),
            ),
            verse(10,
              t('For whoremongers, for them that defile themselves with mankind, for menstealers, for liars, for perjured persons, and if there be any other thing that is contrary to sound doctrine;'),
            ),
            verse(11,
              t('According to the '),
              hp('glorious gospel of the blessed God', 'tim1-gospel'),
              t(', which was committed to my trust.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim1-lawfully',
          html:
            'The law itself is "good." Paul does not disdain it. But it must be used for its intended purpose. The law is not a ladder for self-improvement or a way to earn God&apos;s favor. It is a mirror that shows us our guilt and drives us toward grace. When teachers abuse the law—when they turn it into a system of rules and shame—they misuse it.',
        },
        {
          kind: 'greek',
          id: 'tim1-anomos',
          title: 'Anomos — Without Law, Lawless',
          script: 'ἄνομος',
          translit: '<strong>anomos</strong> · lawless; transgressor; one who rejects divine authority',
          description:
            'The law was given to restrain the lawless and guide the wandering. It addresses those who actively rebel against God&apos;s order. The righteous—those already transformed by grace—live from a different motive: love, not law.',
        },
        {
          kind: 'commentary',
          id: 'tim1-catalog',
          html:
            'Paul lists specific transgressions—murderers, the sexually immoral, slave traders, liars, perjurers—not to shame the church but to illustrate what the law addresses. These are people far from God, living in opposition to His design. The law says "no." The gospel says "there is mercy, there is a way back."',
        },
        {
          kind: 'christ',
          id: 'tim1-gospel',
          title: 'Christ Connection — The Glorious Gospel Committed to His Trust',
          html:
            'The gospel is called "glorious" because it does what the law cannot: it transforms the lawless into the righteous. It does not merely condemn—it redeems. Paul was a murderer of Christians. The law could only pronounce him worthy of death. The gospel reversed his entire trajectory. This is why Paul calls the gospel "glorious."',
        },
        {
          kind: 'carry',
          html:
            'You may know the law&apos;s condemnation intimately. You may have internalized every "you should" and felt the weight of every failure. The gospel announces something different: The law was never meant to save you. It was meant to show you that you need saving. And Christ has already done that work.',
        },
        {
          kind: 'reflection',
          id: 'tim1-law',
          prompt: 'Where are you tempted to use the law wrongly—to shame yourself or others, or to earn favor with God? What would it mean to set that aside?',
        },
      ],
    },

    /* ─── 1 Timothy 1:12–14 — Christ Enables the Unworthy ─────────────── */
    {
      ref: '1 Timothy 1:12–14',
      title: 'I Am Chief Among Sinners',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(12,
              t('And I thank Christ Jesus our Lord, who hath '),
              hp('enabled me', 'tim1-dynamis'),
              t(', for that he counted me faithful, putting me into the ministry;'),
            ),
            verse(13,
              t('Who was before a blasphemer, and a persecutor, and injurious: but I obtained mercy, because I did it ignorantly in unbelief.'),
            ),
            verse(14,
              t('And the grace of our Lord was exceeding abundant with '),
              hy('faith and love which is in Christ Jesus', 'tim1-faith-love'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim1-enabled',
          html:
            'Paul is not boasting about his calling. He is amazed by it. He had hunted Christians. He voted for their deaths. He blasphemed the Christ he now serves. By every standard of justice, he deserved exactly what he sought for others. Yet Christ "counted me faithful." This is not reward for past virtue. This is the grace of God working backward through a man&apos;s entire history and rewriting it.',
        },
        {
          kind: 'commentary',
          id: 'tim1-faith-love',
          html:
            'Grace was not merely extended to Paul—it was "exceeding abundant." It overflowed with both faith and love "which is in Christ Jesus." This abundance is not isolated to Paul&apos;s past. It continues in the present, sustaining him in ministry, and it is available to anyone who trusts Christ.',
        },
        {
          kind: 'greek',
          id: 'tim1-dynamis',
          title: 'Dynamis — Power, Ability, Strength',
          script: 'δύναμις',
          translit: '<strong>dynamis</strong> · power; strength; ability; divine enablement',
          description:
            'Christ empowered Paul—not because Paul earned it but because Christ&apos;s grace is stronger than any past failure. This same empowerment is available to you. Not because you are worthy, but because Christ is generous.',
        },
        {
          kind: 'commentary',
          id: 'tim1-ignorantly',
          html:
            'Paul says he "did it ignorantly in unbelief." This is crucial. He is not excusing himself. He is saying: I was blind. I did not understand what I was doing. Grace opened my eyes. This is why Paul can later call himself "chief" among sinners without despair—because his worst actions came from ignorance, not from final rejection of God.',
        },
        {
          kind: 'carry',
          html:
            'If you have done things you are ashamed of—things done in ignorance, in blindness, in resistance to God—Paul&apos;s story speaks directly. He was not beyond recovery. Neither are you. The same grace that stopped him on the Damascus Road is accessible to you today.',
        },
        {
          kind: 'reflection',
          id: 'tim1-persecution',
          prompt: 'Paul was a persecutor who became an apostle. What part of your past—something you did in ignorance or unbelief—are you struggling to release?',
        },
      ],
    },

    /* ─── 1 Timothy 1:15 — Christ Came to Save Sinners ──────────────────── */
    {
      ref: '1 Timothy 1:15',
      title: 'Christ Jesus Came Into the World to Save Sinners',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(15,
              t('This is a faithful saying, and worthy of all acceptation, That '),
              hp('Christ Jesus came into the world to save sinners', 'tim1-came-save'),
              t('; of whom I am chief.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim1-faithful-saying',
          html:
            'Paul marks this as doctrinal bedrock. "Faithful saying"—not speculation, not philosophy, not the opinion of one teacher. This is the core truth: Christ came into the world to save sinners. Not the righteous, not the self-sufficient, not those who have paid their dues. Sinners. Those who know they are lost.',
        },
        {
          kind: 'greek',
          id: 'tim1-came-save',
          title: 'Came to Save — Mission Compressed',
          script: 'ἦλθεν εἰς τὸν κόσμον σῶσαι ἁμαρτωλοὺς',
          translit: '<strong>ēlthen eis ton kosmon sōsai hamartōlous</strong> · came into the world to save sinners',
          description:
            'This is Christ&apos;s entire mission compressed into one sentence. Not to condemn, not to judge, not to remain distant. To save. To rescue. To bring into relationship with God. Everyone who has ever felt far from God is His target audience.',
        },
        {
          kind: 'christ',
          id: 'tim1-christ-mission',
          title: 'Christ Connection — The Pattern of Mercy',
          html:
            'Jesus&apos; earthly ministry was oriented entirely toward reclaiming those who were far from God. Tax collectors, prostitutes, demon-possessed outcasts, lepers. Not once did He turn away someone who knew they were lost. His "longsuffering" (verse 16) means He does not give up quickly. He waits. He calls. He holds out grace even to those who resist Him longest. And everyone who meets Him becomes a living witness to His patience and His power to transform.',
        },
        {
          kind: 'carry',
          html:
            'If you have ever felt beyond redemption, unsalvageable, too far gone—listen to what Paul says about himself: "chief" among sinners. The worst. The most unlikely candidate. Yet mercy reached him. The same mercy awaits you. Christ came into the world specifically for people like you, like me. This is not the gospel for people who have it mostly figured out. This is the gospel for sinners.',
        },
        {
          kind: 'reflection',
          id: 'tim1-worthy',
          prompt: 'Paul calls this saying "worthy of all acceptation." What part of "Christ came to save sinners" is hardest for you to accept about yourself?',
        },
      ],
    },

    /* ─── 1 Timothy 1:16 — A Pattern of Longsuffering ───────────────────── */
    {
      ref: '1 Timothy 1:16',
      title: 'A Pattern of Longsuffering',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(16,
              t('Howbeit for this cause I obtained mercy, that in me first Jesus Christ might shew forth all '),
              hy('longsuffering', 'tim1-makrothymia'),
              t(', for a '),
              hp('pattern', 'tim1-hupotyposis'),
              t(' to them which should hereafter believe on him to life everlasting.'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'tim1-makrothymia',
          title: 'Makrothymia — Longsuffering, Patience',
          script: 'μακροθυμία',
          translit: '<strong>makrothymia</strong> · long-suffering; patience; forbearance; endurance of provocation',
          description:
            'Makro = long; thymos = wrath. Christ&apos;s patience is not the absence of wrath but its suspension. He bore with Paul&apos;s persecution, his blasphemy, his unbelief. And He bears with you. This is the longsuffering of a God who will not quickly give up on what He loves.',
        },
        {
          kind: 'greek',
          id: 'tim1-hupotyposis',
          title: 'Hupotyposis — Pattern, Example, Outline',
          script: 'ὑποτύπωσις',
          translit: '<strong>hupotyposis</strong> · pattern; example; sketch; outline set before us',
          description:
            'Paul&apos;s transformation is not a one-off miracle but a template. His life becomes a pattern—a living example—for everyone who comes after him. If Christ&apos;s longsuffering could change Paul the persecutor, it can change anyone.',
        },
        {
          kind: 'commentary',
          id: 'tim1-pattern',
          html:
            'God did not have to save Paul. He could have struck him dead on the Damascus Road and been entirely just. Instead, God rescued him specifically so that Paul&apos;s transformation could become a sign to future generations. Look at Paul&apos;s story and see what Christ&apos;s longsuffering looks like. This is not an abstract doctrine. It is a person.',
        },
        {
          kind: 'carry',
          html:
            'You are also a pattern. Your story—where you came from, what Christ has done in you, how you have grown and changed—is a gift to others who are watching. Someone who is far from God, someone who thinks they are beyond reach, needs to see what Christ&apos;s patience looks like in your life. Your transformation is not just for you. It is for them.',
        },
        {
          kind: 'reflection',
          id: 'tim1-pattern-bearer',
          prompt: 'How is your story becoming a pattern to those who watch you? Where do others see Christ&apos;s longsuffering at work in you?',
        },
      ],
    },

    /* ─── 1 Timothy 1:17 — The Doxology ──────────────────────────────────── */
    {
      ref: '1 Timothy 1:17',
      title: 'The Doxology',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(17,
              t('Now unto the King eternal, '),
              hy('immortal', 'tim1-aphtartos'),
              t(', invisible, the only wise God, be honour and glory for ever and ever. Amen.'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'tim1-aphtartos',
          title: 'Aphtartos — Immortal, Incorruptible',
          script: 'ἄφθαρτος',
          translit: '<strong>aphtartos</strong> · immortal; incorruptible; not subject to decay or death',
          description:
            'We are bound by time and death. Christ is not. Kings die. Kingdoms fall. Christ&apos;s reign never ends. His nature never decays. This God—eternal, beyond corruption, beyond all wisdom—receives all honor and glory.',
        },
        {
          kind: 'commentary',
          id: 'tim1-doxology',
          html:
            'Paul pauses his instruction to worship. He has just laid out a problem—false teachers, confused doctrine, lives heading in the wrong direction. Before he moves forward, he reorients everything toward God. The King is eternal. He is beyond corruption. He is invisible yet infinitely wise. Whatever chaos surrounds Timothy in Ephesus, this reality does not change.',
        },
        {
          kind: 'christ',
          id: 'tim1-king-eternal',
          title: 'Christ Connection — King Eternal',
          html:
            'Paul addresses this doxology to "the King eternal." In Revelation, Christ is called the "King of kings." His kingdom will not be shaken. His rule will not end. When Timothy feels overwhelmed by false doctrine in Ephesus, when you feel overwhelmed by competing voices, this truth holds steady: There is a King who is eternal, who cannot be corrupted, whose reign cannot fail.',
        },
        {
          kind: 'carry',
          html:
            'Take a moment to reorient as Paul does. Whatever complexity surrounds you—whatever confusion from false teaching, whatever pressure to compromise truth, whatever weariness in well-doing—pause and acknowledge the King eternal. He is immune to time&apos;s erosion. He is not threatened by opposition. He is wise beyond all human cleverness. Honor and glory are His. This is the stability underneath everything else.',
        },
        {
          kind: 'reflection',
          id: 'tim1-worship',
          prompt: 'When do you need to pause and worship the King eternal instead of wrestling with the voices around you?',
        },
      ],
    },

    /* ─── 1 Timothy 1:18–20 — War a Good Warfare ──────────────────────── */
    {
      ref: '1 Timothy 1:18–20',
      title: 'War a Good Warfare',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(18,
              t('This charge I commit unto thee, son Timothy, according to the prophecies which went before on thee, that thou by them mightest '),
              hp('war a good warfare', 'tim1-good-warfare'),
              t(';'),
            ),
            verse(19,
              t('Holding faith, and a good conscience; which some having put away concerning faith have made shipwreck:'),
            ),
            verse(20,
              t('Of whom is Hymenaeus and Alexander; whom I have '),
              hy('delivered unto Satan', 'tim1-delivered'),
              t(', that they may learn not to blaspheme.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim1-charge-timothy',
          html:
            'Paul frames Timothy&apos;s calling as "warfare"—not in the sense of violence but of struggle, of standing firm against opposition. The "prophecies which went before" suggest that others in the church had spoken blessing and direction over Timothy before Paul ever wrote this letter. He is not alone in this task. The church has already designated him.',
        },
        {
          kind: 'commentary',
          id: 'tim1-holding',
          html:
            'The resources for this warfare are two: "faith, and a good conscience." Not weapons, not organizational power, not political leverage. Faith in Christ and a cleared conscience before God. These are what enable a leader to stand against false doctrine without wavering. Without them, a leader is vulnerable to compromise.',
        },
        {
          kind: 'greek',
          id: 'tim1-good-warfare',
          title: 'War a Good Warfare — Stratomeuō',
          script: 'στρατεύω / στρατεία',
          translit: '<strong>strateuō / strateia</strong> · to wage war; to fight; military campaign',
          description:
            'The Christian life is described as warfare—not against flesh and blood but against principalities and powers, against false doctrine, against the inclinations of the old self. This is not a metaphor. It is a reality Timothy must prepare to face.',
        },
        {
          kind: 'commentary',
          id: 'tim1-shipwreck',
          html:
            'Some "have made shipwreck" of their faith. Paul names two: Hymenaeus and Alexander. They "put away" faith and a good conscience—they deliberately rejected both. The result was catastrophe. A shipwrecked life is not a small matter. It is total loss.',
        },
        {
          kind: 'greek',
          id: 'tim1-delivered',
          title: 'Delivered unto Satan',
          script: 'παραδίδωμι τῷ Σατανᾷ',
          translit: '<strong>paradidōmi tō Satanǎ</strong> · deliver over to Satan; commit to Satan&apos;s domain',
          description:
            'This is Paul&apos;s language of church discipline. Those who reject Christ and His truth are not protected by the church&apos;s spiritual covering. They are delivered to consequences—presumably so that hardship might teach them to "learn not to blaspheme." This is discipline meant ultimately for restoration, not for permanent condemnation.',
        },
        {
          kind: 'carry',
          html:
            'You are engaged in a good warfare too. Not a warfare of violence or coercion but of standing for truth, of maintaining faith and a clear conscience, of resisting false doctrine and the compromise that accompanies it. This work is exhausting. But it is also essential. The stakes are real. Lives depend on leaders who will not shipwreck their faith.',
        },
        {
          kind: 'reflection',
          id: 'tim1-warfare',
          prompt: 'Where are you called to "war a good warfare" right now? What would it mean to hold fast to faith and a good conscience in that situation?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'This is a faithful saying, and worthy of all acceptation, That Christ Jesus came into the world to save sinners; of whom I am chief.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Timothy 1 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-1tim-1',
      kind: 'study',
      source: 'Sefaria',
      label: '1 Timothy 1',
      url: 'https://www.sefaria.org/1%20Timothy.1',
      description: 'Open-access multiple translations and Jewish/Christian commentary on the chapter.',
    },
    {
      id: 'perseus-soter',
      kind: 'lexicon',
      source: 'Perseus Scaife',
      label: 'Sōtēr — Saviour',
      url: 'https://www.perseus.tufts.edu/hopper/resolveform?type=exact&lookup=soter&lang=greek',
      description: 'Greek lexicon entry for sōtēr (saviour), tracing its usage across the New Testament and classical texts.',
    },
    {
      id: 'bibleodyssey-timothy',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Timothy and the Pastoral Epistles',
      url: 'https://www.bibleodyssey.org/dictionary/timothy/',
      description: 'Overview of Timothy&apos;s role in Paul&apos;s mission and the historical context of the pastoral letters.',
    },
  ],

  hasHebrew: false,
};
