import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 2 Timothy 2 — Endure as a Good Soldier
 *
 * Paul writes Timothy with urgency. The gospel faces opposition; false teachers
 * circulate; the young pastor must stand firm. Paul piles image upon image—soldier,
 * athlete, farmer—each demanding discipline, focus, and single-minded devotion to
 * Christ. The core call is simple: "Study to show thyself approved unto God, a workman
 * that needeth not to be ashamed, rightly dividing the word of truth." This is what it
 * means to guard the gospel in an age of distraction. And beneath it all runs the faithful
 * saying: if we die with Christ, we shall live with Him; if we deny Him, He will deny us;
 * but He cannot deny Himself—His faithfulness is eternal and unchanging.
 */
export const SECOND_TIMOTHY_2: RichChapterContent = {
  bookSlug: '2-timothy',
  bookName: '2 Timothy',
  chapter: 2,

  intros: [
    'Paul writes to his young apprentice Timothy with the voice of a soldier passing the torch. Everything is urgent. False teachers spread like gangrene. Distraction is everywhere. The call is to endure—not with grim resignation but with strength anchored in grace. Each metaphor Paul uses—soldier, athlete, farmer—reveals the same truth: living for Christ demands discipline, focus, and willingness to sacrifice comfort for the mission.',
    'Yet Paul does not leave Timothy with mere commands. He anchors everything in the faithful saying, the gospel itself: "If we be dead with him, we shall also live with him: If we suffer, we shall also reign with him: if we deny him, he also will deny us: If we believe not, yet he abideth faithful: he cannot deny himself." Christ&apos;s faithfulness is not dependent on ours. It is the ground beneath every command. Study. Purge yourself. Flee youthful lusts. Serve gently. Why? Because He is already faithful, and you are invited to be faithful too.',
  ],

  opener: {
    matchArtist: /tissot|munkacsy|rembrandt/i,
    matchTitle: /timothy|soldier|epistle|letter/i,
    caption: 'The Whole Chapter at a Glance',
  },

  sections: [
    /* ─── 2 Timothy 2:1–2 — Be Strong in the Grace That Is in Christ Jesus ─── */
    {
      ref: '2 Timothy 2:1–2',
      title: 'Be Strong in the Grace That Is in Christ Jesus',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              1,
              t('Thou therefore, my son, '),
              hp('be strong in the grace that is in Christ Jesus', 'c-grace-strong'),
              t('.')
            ),
            verse(
              2,
              t('And the things that thou hast heard of me among many witnesses, '),
              hg('commit thou to faithful men, who shall be able to teach others also', 'c-commit-faithful'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-grace-strong',
          html:
            '"Be strong" does not mean conjure your own strength. It means lean into the grace. Paul opens not with exhortation but with gospel: grace is already in Christ Jesus. Your strength is receiving what He offers. This is the posture of the whole chapter—not straining from your own resources but anchored in what Christ has already done.',
        },
        {
          kind: 'commentary',
          id: 'c-commit-faithful',
          html:
            'Notice the chain: Paul told Timothy. Timothy must tell faithful men. Those men must teach others. This is how the gospel multiplies across generations. But it only works if the chain stays unbroken—if what is entrusted is entrusted accurately to those who will carry it forward.',
        },
        {
          kind: 'christ',
          id: 'christ-grace',
          title: 'Christ Connection — Grace as Your Strength',
          html:
            'The grace Paul speaks of is not sentimentality; it is the operative power of Christ&apos;s work. "My grace is sufficient for thee," Jesus told Paul when he pleaded to be freed from his thorn (2 Cor. 12:9). Paul&apos;s response: "Most gladly therefore will I rather glory in my infirmities, that the power of Christ may rest upon me." Strength in grace means weakness partnered with the power of the risen Christ.',
        },
        {
          kind: 'carry',
          html:
            'What would change if you truly understood that your strength is not your own—that the grace you need is already yours in Christ? Not something to earn or achieve, but something to receive and rely upon? Today&apos;s hardness, today&apos;s opposition, today&apos;s fatigue can all be met with the steady recognition: His grace is here, and it is enough.',
        },
        {
          kind: 'reflection',
          id: 'tim2-grace-strong',
          prompt:
            'Where are you trying to be strong in your own effort? What would it look like to trade that striving for resting in His grace?',
        },
      ],
    },

    /* ─── 2 Timothy 2:3–4 — Endure Hardship as a Good Soldier ─────────────── */
    {
      ref: '2 Timothy 2:3–4',
      title: 'Endure Hardship as a Good Soldier',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(3, t('Thou therefore '), hg('endure hardship, as a good soldier of Jesus Christ', 'c-soldier'), t('.')),
            verse(
              4,
              t('No man that '),
              hy('warreth entangleth himself', 'greek-strateuō'),
              t(' with the affairs of this life; that he may please him who hath chosen him to be a soldier.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-soldier',
          html:
            'A soldier does not choose his orders. He does not determine which battles matter and which do not. His will is subordinate to the mission. To call Timothy a "good soldier of Jesus Christ" is to strip away every excuse for divided loyalty. The commander has chosen him. The mission is clear. Hardship is part of the contract.',
        },
        {
          kind: 'greek',
          id: 'greek-strateuō',
          title: 'Strateuō — "War" / "Serve as a Soldier"',
          script: 'στρατεύω',
          translit: '<strong>strateuō</strong> · to serve in the army; to wage war; to campaign',
          description:
            'The verb carries the full weight of military service. A soldier campaigns. He fights. He endures hardship as part of his duty. Paul is not using soft language here. Following Christ is warfare against darkness, against false teaching, against the entanglement of divided affections.',
        },
        {
          kind: 'commentary',
          id: 'c-entangled-affairs',
          html:
            '"Entangleth himself with the affairs of this life"—not because ordinary life is evil, but because a soldier cannot serve two masters. Business dealings, personal advancement, social standing, the accumulation of comfort—these become liabilities when they compete with your primary allegiance. They divide you. They make you less effective.',
        },
        {
          kind: 'christ',
          id: 'christ-soldier-hardship',
          title: 'Christ Connection — The Commander Who Suffered',
          html:
            'Jesus called His disciples to "take up the cross" and follow Him (Matt. 16:24)—to endure as He endured. He was their commander, and He drank the bitter cup. He was beaten. He was crucified. A soldier does not ask for less than his commander bore. Yet this soldier is not abandoned: the Commander who asks Timothy to endure hardship is the risen Jesus, seated at the right hand of God, who "is able to succor them that are tempted" (Heb. 2:18).',
        },
        {
          kind: 'carry',
          html:
            'What entangles you in the affairs of this life? Name it. The career that feels like your identity. The screen that pulls your attention constantly. The relationship that has become your measure of worth. The need to win every argument. Paul is not calling you to asceticism. He is calling for clarity: when loyalty conflicts, which comes first? If the answer is anything other than Christ, you have been entangled.',
        },
        {
          kind: 'reflection',
          id: 'tim2-soldier',
          prompt:
            'What would it look like this week to live as a "good soldier of Jesus Christ"? What would you stop doing? What would you start doing?',
        },
      ],
    },

    /* ─── 2 Timothy 2:5–7 — The Athlete and the Husbandman ──────────────────── */
    {
      ref: '2 Timothy 2:5–7',
      title: 'The Athlete and the Husbandman',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              5,
              t('And if a man also strive for '),
              hg('masteries', 'c-agon'),
              t(', yet is he not crowned, except he strive lawfully.')
            ),
            verse(
              6,
              t('The '),
              hy('husbandman that laboureth', 'greek-georgos'),
              t(' must be first partaker of the fruits.')
            ),
            verse(7, t('Consider what I say; and the Lord give thee understanding.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-agon',
          html:
            'An athlete competes in the games. He trains. He disciplines his body. He runs the race. But if he cheats—if he takes a shortcut, uses an illegal move, bends the rules—he loses the crown. The reward belongs only to lawful effort. For Timothy, this means the gospel is not something to promote by any means necessary. It must be handled lawfully, truthfully, with integrity.',
        },
        {
          kind: 'greek',
          id: 'greek-georgos',
          title: 'Georgos — "Husbandman" / "Farmer"',
          script: 'γεωργός',
          translit: '<strong>georgos</strong> · a farmer; one who tills the earth',
          description:
            'A farmer sows. He waits through seasons. He waters. He weeds. He harvests. And rightly so—he is the first to eat from what he has cultivated. His labor produces fruit; the fruit is for him. Paul uses this image to tell Timothy that his work in the gospel will sustain him. He need not be paid by compromising the message.',
        },
        {
          kind: 'christ',
          id: 'christ-athlete-farmer',
          title: 'Christ Connection — The Faithful Labor',
          html:
            'Jesus told His disciples, "The worker is worthy of his meat," and, "The laborer is worthy of his reward" (Matt. 10:10). He Himself worked the soil of human hearts—sowing, tending, and reaping the harvest of faith. And He bore the cost of lawful work: He did not cut corners, did not compromise the message to make it more palatable, did not sin though tempted. His faithfulness to hard, honest labor is the model.',
        },
        {
          kind: 'carry',
          html:
            'Discipline takes time. The athlete trains. The farmer seasons her fields. Results do not come instantly. But they come sure. What faithfulness are you tending in your life? Where are you planting seed—in your family, your work, your relationships—that you have not yet seen fruit from? Paul says, Consider. Take a moment. The Lord will give you understanding about which labors are worth your life.',
        },
        {
          kind: 'reflection',
          id: 'tim2-athlete-farmer',
          prompt:
            'Where in your life are you doing hard, honest, lawful work that you have not yet seen the fruit of? What keeps you faithful to that sowing?',
        },
        {
          kind: 'artwork',
          matchTitle: /athlete|runner|laborer|farm|harvest/i,
          caption: '2 Timothy 2:5–7 · Lawful Labor',
        },
      ],
    },

    /* ─── 2 Timothy 2:8 — Remember Jesus Christ of the Seed of David ──────── */
    {
      ref: '2 Timothy 2:8',
      title: 'Remember Jesus Christ Raised from the Dead',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              8,
              hg('Remember that Jesus Christ of the seed of David was raised from the dead', 'c-gospel-summary'),
              t(' according to my gospel:')
            ),
            verse(
              9,
              t('Wherein I suffer trouble, as an evil doer, even unto bonds; but '),
              t('the word of God is not bound'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-gospel-summary',
          html:
            'Here is the gospel in thirty words: Jesus Christ, born of David&apos;s line, raised from the dead. This is Paul&apos;s gospel—the message at the heart of everything. Not a system. Not a philosophy. A Person, raised. This is what Timothy needs to remember when he is pressed, when false teachers surround him, when the culture seems to turn against him. The resurrection is the event that changes everything.',
        },
        {
          kind: 'commentary',
          id: 'c-suffering',
          html:
            'Paul is in chains. He is suffering "as an evil doer." The powerful of his day have branded him a criminal. Yet in the very next breath: "but the word of God is not bound." His imprisonment does not contain the gospel. The chains around Paul&apos;s wrists do not bind the message. This is the paradox Timothy must hold: your circumstances may narrow, but the gospel expands.',
        },
        {
          kind: 'christ',
          id: 'christ-resurrection-summary',
          title: 'Christ Connection — The Gospel Summary',
          html:
            'Every other promise, every other command, every other truth in 2 Timothy flows from this one: Jesus Christ raised from the dead. Paul names it as "my gospel"—the message that animates his life. When trials come, when doubt whispers, when faithfulness costs, Timothy is to remember: the Resurrection happened. Death could not hold Him. This is not theoretical. It is the event-fact on which all of history hangs.',
        },
        {
          kind: 'carry',
          html:
            'What would be different about your day if you truly remembered—not as an idea but as a lived reality—that Jesus Christ was raised from the dead? What fear might lose its grip? What doubt might soften? What hope might wake? Paul kept himself and Timothy focused on this one fact through all his suffering. It was enough then. It remains enough now.',
        },
        {
          kind: 'reflection',
          id: 'tim2-remember',
          prompt:
            'When you are discouraged or under pressure, what do you tend to remember instead of the Resurrection? What would it mean to consciously return to that one fact?',
        },
      ],
    },

    /* ─── 2 Timothy 2:11–13 — The Faithful Saying ────────────────────────────── */
    {
      ref: '2 Timothy 2:11–13',
      title: 'The Faithful Saying — Die and Reign with Him',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              11,
              hg('It is a faithful saying:', 'c-faithful-saying'),
              t(' For if we be dead with him, we shall also live with him:')
            ),
            verse(12, t('If we suffer, we shall also reign with him: if we deny him, he also will deny us:')),
            verse(
              13,
              t('If we believe not, yet he abideth faithful: '),
              hp('he cannot deny himself', 'christ-faithful-unchanging'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-faithful-saying',
          html:
            'Paul marks this as a "faithful saying"—meaning, this is trustworthy. This you can bank your life on. What follows is the core logic of discipleship: union with Christ in His death brings union with Him in His life. To suffer with Him is to reign with Him. Yet there is a sharp reversal: to deny Him is to be denied by Him.',
        },
        {
          kind: 'commentary',
          id: 'c-deny-denied',
          html:
            '"If we deny him, he also will deny us." This is not a threat meant to terrify. It is the law of the kingdom written plain. If you disown Him before others, He will disown you. Your covenant relationship with Christ is binding. It works both ways. Yet even this is held within grace—see verse 13—because His faithfulness does not depend on your performance.',
        },
        {
          kind: 'greek',
          id: 'greek-apothnēskō',
          title: 'Apothnēskō — "Dead" / "Die"',
          script: 'ἀποθνήσκω',
          translit: '<strong>apothnēskō</strong> · to die; to be dead',
          description:
            'Paul uses the same verb for death that marks baptism in Romans 6: dying with Christ. This is not metaphorical death. It means the surrender of your old identity, your old allegiances, your old way of living. Only in that death do you come alive to His life.',
        },
        {
          kind: 'christ',
          id: 'christ-faithful-unchanging',
          title: 'Christ Connection — His Faithfulness Is Eternal',
          html:
            'The remarkable turn comes in verse 13: even if you do not believe, even if you stumble, even if you deny Him—"He abideth faithful: he cannot deny himself." Jesus told Peter, "I have prayed for thee, that thy faith fail not" (Luke 22:32), and yet Peter denied Him three times. Yet Christ did not abandon him. His faithfulness is not earned by your faithfulness. It is grounded in His nature: He cannot deny Himself. The God who raised Jesus will not turn His back on you because you turned away. This is the foundation beneath all of Paul&apos;s commands to Timothy.',
        },
        {
          kind: 'carry',
          html:
            'You have failed Christ. Perhaps today, perhaps years ago, perhaps just now. You have denied Him—maybe not with words, but with your choices. The faithful saying holds even then: He abideth faithful. He cannot deny Himself. This is not an excuse to keep sinning. It is permission to stop hiding. His faithfulness to you does not depend on your faithfulness. It depends on His character, which is unchanging, immovable, sure.',
        },
        {
          kind: 'reflection',
          id: 'tim2-faithful-saying',
          prompt:
            'What would change in you if you truly believed that His faithfulness to you does not depend on your performance? What guilt might you set down?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── 2 Timothy 2:15 — Study to Show Thyself Approved ──────────────────── */
    {
      ref: '2 Timothy 2:14–15',
      title: 'Study to Show Thyself Approved',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              14,
              t('Of these things put them in remembrance, charging them before the Lord that they strive not about words to no profit, but to the subverting of the hearers.')
            ),
            verse(
              15,
              hy('Study to shew thyself approved unto God', 'greek-spoudazō'),
              t(', a workman that needeth not to be ashamed, '),
              hy('rightly dividing the word of truth', 'greek-orthotomeō'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-approved-god',
          html:
            'The standard of approval is not human praise. Not the applause of the congregation. Not being famous, impressive, or well-regarded. Approval before God. A workman who need not be ashamed is one whose labor holds up under divine scrutiny. No shortcuts. No compromise. No slickness covering emptiness. Work worthy of the One who called you.',
        },
        {
          kind: 'greek',
          id: 'greek-spoudazō',
          title: 'Spoudazō — "Study" / "Give Diligent Effort"',
          script: 'σπουδάζω',
          translit: '<strong>spoudazō</strong> · to be zealous; to be diligent; to be eager; to do one&apos;s utmost',
          description:
            'Not lazy study. Not casual reading. But eager effort, diligent work, the whole self engaged. This is what it takes to handle Scripture well, to teach it faithfully, to stand approved before God.',
        },
        {
          kind: 'greek',
          id: 'greek-orthotomeō',
          title: 'Orthotomeō — "Rightly Divide"',
          script: 'ὀρθοτομέω',
          translit: '<strong>orthotomeō</strong> · to cut straight; to rightly divide; to handle correctly',
          description:
            'The image is of a craftsman cutting a straight line, without waste or deviation. To rightly divide the word of truth means to handle Scripture accurately, in its context, with reverence for what it actually says. Not twisting it to support private agendas. Not cutting it to please an audience. But cutting it straight.',
        },
        {
          kind: 'christ',
          id: 'christ-word-divider',
          title: 'Christ Connection — The Word Divided and Fulfilled',
          html:
            'Jesus told the Pharisees, "Search the scriptures," and, "These are they which testify of me" (John 5:39). To rightly divide the word of truth is to see how all of Scripture points to Christ, to His work, to His character. The Old Testament is not a locked book; it is a door that opens toward Him. Paul himself demonstrated this constantly, showing how the law, the psalms, the prophets all converge on Jesus.',
        },
        {
          kind: 'carry',
          html:
            'You need not be a theologian, a pastor, or a scholar to study Scripture diligently and handle it rightly. You need attention. You need honesty—willing to change your mind when the text demands it. You need reverence—approaching God&apos;s word as something sacred, not something to bully into your predetermined shape. What does this text actually say? What does it mean? Where does it point? These questions, asked faithfully, make you a workman approved before God.',
        },
        {
          kind: 'reflection',
          id: 'tim2-approved',
          prompt:
            'How do you typically study Scripture? Are you more tempted to please your audience or to be approved before God? Where is the difference most stark?',
        },
      ],
    },

    /* ─── 2 Timothy 2:16–18 — Profane Babblings; the Resurrection Past ─────── */
    {
      ref: '2 Timothy 2:16–18',
      title: 'Profane Babblings and False Teachers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              16,
              t('But '),
              hg('shun profane and vain babblings', 'c-profane'),
              t(': for they will increase unto more ungodliness.')
            ),
            verse(
              17,
              t('And their word will eat as doth a canker: of whom is Hymenaeus and Philetus;')
            ),
            verse(
              18,
              t('Who concerning the truth have erred, saying that '),
              hg('the resurrection is past already', 'c-resurrection-past'),
              t('; and overthrow the faith of some.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-profane',
          html:
            '"Profane and vain babblings"—not cursing, but empty talk. Theological speculation detached from godliness. Word games that impress but do not transform. Paul tells Timothy to shun them. Not debate them. Not engage with them to prove superiority. Shun them. Why? Because "they will increase unto more ungodliness." False teaching spreads. It metastasizes.',
        },
        {
          kind: 'commentary',
          id: 'c-resurrection-past',
          html:
            'Hymenaeus and Philetus claim the resurrection is already past—perhaps meaning spiritual resurrection has already happened, so there is no future bodily resurrection to expect. This undermines the hope of the gospel. If resurrection is not future, if Christ is not coming, if there is no judgment to come, then why endure hardship? Why purity? Why sacrifice? They shipwreck the faith of some by stealing their hope.',
        },
        {
          kind: 'christ',
          id: 'christ-resurrection-hope',
          title: 'Christ Connection — The Resurrection We Await',
          html:
            'Paul was adamant: "Now is Christ risen from the dead, and become the firstfruits of them that slept" (1 Cor. 15:20). Christ&apos;s resurrection is past. Ours is future. We die now; we shall be raised when He comes. Hymenaeus and Philetus wanted to spiritualize away the hard truth of bodily death and bodily resurrection. Paul will not allow it. The faith stands or falls on literal history: Jesus rose in a body. We shall too.',
        },
        {
          kind: 'carry',
          html:
            'What false or vain teaching creeps into your hearing? Not always doctrinal error—sometimes it is a subtle message that your circumstances are all that matter, that comfort is the highest good, that the spiritual realm is less real than the physical. Paul says: shun it. Do not let it take root. Its spread is quiet but relentless.',
        },
        {
          kind: 'reflection',
          id: 'tim2-profane',
          prompt:
            'What "profane babblings" have you heard lately—messages that impress but do not transform? How have they affected your faith?',
        },
      ],
    },

    /* ─── 2 Timothy 2:19 — The Foundation of God Standeth Sure ────────────── */
    {
      ref: '2 Timothy 2:19',
      title: 'The Foundation of God Standeth Sure',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              19,
              hg('Nevertheless the foundation of God standeth sure', 'c-foundation-sure'),
              t(', having this seal, '),
              hy('The Lord knoweth them that are his', 'c-lord-knoweth'),
              t('. And, '),
              hy('Let every one that nameth the name of Christ depart from iniquity', 'c-depart-iniquity'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-foundation-sure',
          html:
            '"Nevertheless"—Paul acknowledges the enemy is real, false teachers are real, but nevertheless. Despite the chaos, despite Hymenaeus and Philetus, despite the spread of error, the foundation stands firm. This is not wishful thinking. It is theological realism. The kingdom of God does not rest on your faithfulness or on the state of the visible church. It rests on God&apos;s character.',
        },
        {
          kind: 'greek',
          id: 'greek-themelios',
          title: 'Themelios — "Foundation"',
          script: 'θεμέλιος',
          translit: '<strong>themelios</strong> · a foundation; what is laid at the base',
          description:
            'Not a wavering thing. Not something built on sand. A foundation is dug deep, built solid, meant to carry weight. God&apos;s foundation—His plan, His character, His sovereignty—is immovable.',
        },
        {
          kind: 'commentary',
          id: 'c-lord-knoweth',
          html:
            '"The Lord knoweth them that are his"—a seal, a mark. God knows His own. Not by external credentials or loud profession, but by deep knowledge. You cannot fool Him into your kingdom by right words. You cannot hide from Him by wrong actions. He knows.',
        },
        {
          kind: 'commentary',
          id: 'c-depart-iniquity',
          html:
            'But there is a responsibility on your side: "Let every one that nameth the name of Christ depart from iniquity." To call yourself Christian and live in sin is to lie. It is not that you must be perfect—all Christians stumble—but the direction matters. Your life ought to be a gradual, humble turning away from evil toward holiness.',
        },
        {
          kind: 'christ',
          id: 'christ-foundation-rock',
          title: 'Christ Connection — Built on the Rock',
          html:
            'Jesus told Peter, "Thou art Peter, and upon this rock I will build my church" (Matt. 16:18). The foundation is not Peter himself, but the confession Peter made: "Thou art the Christ, the Son of the living God." The church is built on Christ, the living stone. All the gates of Hades cannot shake it. Empires fall. Heresies spread. But His kingdom stands.',
        },
        {
          kind: 'carry',
          html:
            'When everything around you seems unstable—your circumstances, your relationships, the culture, the visible church—this word comes as steady ground beneath your feet: Nevertheless, the foundation stands sure. Not because things are going well, but because He is immovable. And He knows you. Your name is written on His seal.',
        },
        {
          kind: 'reflection',
          id: 'tim2-foundation',
          prompt:
            'What in your life is shaken right now? How does the truth that God&apos;s foundation stands sure speak into that shaking?',
        },
      ],
    },

    /* ─── 2 Timothy 2:20–21 — Vessels of Honor ──────────────────────────── */
    {
      ref: '2 Timothy 2:20–21',
      title: 'Vessels of Honor, Sanctified and Useful',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              20,
              t('But in a great house there are not only vessels of gold and of silver, but also of wood and of earth; and some to honour, and some to dishonour.')
            ),
            verse(
              21,
              t('If a man therefore purge himself from these, he shall be '),
              hp('a vessel unto honour, sanctified, and meet for the master&apos;s use', 'c-vessel-honour'),
              t(', and prepared unto every good work.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-vessel-honour',
          html:
            'The great house is the kingdom of God. In it are vessels of every kind—gold and silver, wood and earth. Some are honored, some are dishonorable. But notice: the difference is not in their material. It is in their use. A vessel of wood can be made honorable; a vessel of silver can be made dishonorable. What determines the honor is whether it is clean and ready for the Master&apos;s use.',
        },
        {
          kind: 'greek',
          id: 'greek-katharizō',
          title: 'Katharizō — "Purge" / "Cleanse"',
          script: 'καθαρίζω',
          translit: '<strong>katharizō</strong> · to make clean; to purify; to cleanse from impurity',
          description:
            'Self-purification is not passive. It requires discipline. It means choosing to refuse false teaching, to renounce unprofitable speech, to maintain integrity even when easier paths are open. The result: fitness for the Master&apos;s use.',
        },
        {
          kind: 'carry',
          html:
            'You are a vessel. Not because you are impressive—gold and silver are not more honored than wood and earth; the Master uses them all—but because you have been claimed. And your usefulness depends on one thing: purity. Are you clean? Have you washed away the contamination? Not perfection—a vessel can be used and then cleaned again. But direction. Are you moving toward wholeness or away from it?',
        },
        {
          kind: 'reflection',
          id: 'tim2-vessel',
          prompt:
            'What contaminates you that you need to be cleansed of? What would it mean to pursue purity not for your own righteousness but for usefulness to Christ?',
        },
        {
          kind: 'artwork',
          matchTitle: /vessel|pot|clay|house/i,
          caption: '2 Timothy 2:20–21 · A Vessel Prepared',
        },
      ],
    },

    /* ─── 2 Timothy 2:22–26 — Flee Youthful Lusts; Serve Gently ───────────── */
    {
      ref: '2 Timothy 2:22–26',
      title: 'Flee Youthful Lusts; Serve with Gentleness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              22,
              hg('Flee also youthful lusts:', 'c-flee-lusts'),
              t(' but follow righteousness, faith, charity, peace, with them that call on the Lord out of a pure heart.')
            ),
            verse(
              23,
              t('But foolish and unlearned questions avoid, knowing that they do gender strifes.')
            ),
            verse(
              24,
              t('And the servant of the Lord must not strive; but be '),
              hy('gentle unto all men', 'greek-epieikeia'),
              t(', apt to teach, patient;')
            ),
            verse(
              25,
              t('In meekness instructing those that oppose themselves; if God peradventure will give them repentance to the acknowledging of the truth;')
            ),
            verse(
              26,
              t('And that they may recover themselves out of the snare of the devil, who are taken captive by him at his will.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-flee-lusts',
          html:
            'Youthful lusts—not only sexual, but the passions of a young man: the hunger for status, the drive to win, the need to prove himself right. Timothy is to flee these. Not struggle against them. Not engage them. Flee. And simultaneously, pursue—righteousness, faith, charity, peace. Positive virtue, not merely negative abstinence.',
        },
        {
          kind: 'greek',
          id: 'greek-epieikeia',
          title: 'Epieikeia — "Gentle" / "Reasonable"',
          script: 'ἐπιείκεια',
          translit: '<strong>epieikeia</strong> · gentleness; reasonableness; fairness that goes beyond strict justice',
          description:
            'Not weakness. Not spinelessness. But a strength that knows when to yield, when to listen, when to absorb a blow without returning it. A servant of the Lord must not strive to win every argument. He must be reasonable, fair, and above all, gentle.',
        },
        {
          kind: 'commentary',
          id: 'c-meekness-instruct',
          html:
            'To instruct "those that oppose themselves"—those who are fighting against their own salvation, who resist the truth even as truth pursues them. How do you teach someone like that? Not by crushing them in argument. Not by winning. By meekness. By patience. By gentleness that opens a door they have slammed shut.',
        },
        {
          kind: 'christ',
          id: 'christ-gentle-teacher',
          title: 'Christ Connection — Gentleness That Attracts',
          html:
            '"Come unto me, all ye that labour and are heavy laden, and I will give you rest" (Matt. 11:28). Jesus&apos; invitation was not harsh. It was gentle. "Take my yoke upon you, and learn of me; for I am meek and lowly in heart" (Matt. 11:29). Meekness and power coexist in Him. He could crush His enemies; instead He bore the cross. A disciple is called to the same meekness—not because he is weak, but because he is secure in Christ.',
        },
        {
          kind: 'carry',
          html:
            'Who in your life opposes themselves—resisting the truth, fighting against what is good for them? Your instinct may be to win the argument, to prove them wrong. Paul says the opposite: be gentle. Be patient. Instruct in meekness. Why? Because only God gives repentance. Your job is not to force agreement. It is to hold the door open, to model what following Christ looks like, to pray that God peradventure will give them eyes to see.',
        },
        {
          kind: 'reflection',
          id: 'tim2-gentle-serve',
          prompt:
            'Where are you tempted to strive instead of serve gently? With whom do you most need the reminder that only God grants repentance?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 2 Timothy 2',
    quote:
      'Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth. Remember Jesus Christ of the seed of David was raised from the dead. He abideth faithful: he cannot deny himself.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Timothy 2 · Study Guide',
  },

  hasHebrew: false,
};
