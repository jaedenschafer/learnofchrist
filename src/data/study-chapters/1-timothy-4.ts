import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 1 Timothy 4 — Refuse Fables, Exercise Unto Godliness
 *
 * The Spirit speaks expressly: in the latter times, some will depart from the
 * faith, giving heed to seducing spirits and doctrines of devils. The false
 * teachers forbid marriage and demand abstinence from meats. Paul cuts through
 * this gnosticism with apostolic clarity: God created all things good. Creation
 * is sanctified through God&apos;s word and prayer. Timothy is called to refuse
 * fables and exercise himself unto godliness—training like an athlete, with
 * discipline aimed at Christlikeness. His profiting should be evident to all.
 * He must take heed to doctrine and endure, for in doing so he will save both
 * himself and those who hear him.
 */
export const FIRST_TIMOTHY_4: RichChapterContent = {
  bookSlug: '1-timothy',
  bookName: '1 Timothy',
  chapter: 4,

  estimatedMinutes: { 5: 10, 10: 17, 15: 26 },
  intros: [
    'Asceticism creeps into the church. False teachers speak with confidence born of deception, forbidding marriage and demanding abstinence from certain foods. Their theology inverts the created order: the body becomes enemy territory to be starved, rather than God&apos;s creation to be received with gratitude. Paul responds with pastoral firmness, cutting through the spiritual seduction with apostolic authority.',
    'Yet Paul does not dismiss all discipline. He calls Timothy to "exercise thyself unto godliness." The Greek word is gumnaze—to train as an athlete. Discipline is necessary. But it aims not at self-punishment or the denial of creation, but at becoming conformed to Christ. Training the spirit means proper alignment of the whole person—body, soul, and spirit—toward the image of Jesus.',
  ],

  opener: {
    matchTitle: /timothy|paul|letter/i,
    matchArtist: /tissot|burnand/i,
    caption: 'Paul&apos;s Charge to Timothy',
  },

  sections: [
    /* ─── 1 Timothy 4:1–3 — The Spirit Speaks of Latter Times ────────────── */
    {
      ref: '1 Timothy 4:1–3',
      title: 'In the Latter Times',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(1,
              t('Now the Spirit speaketh expressly, that '),
              hg('in the latter times', 'latter-times-apostasia'),
              t(' '),
              hg('some shall depart from the faith', 'apostasia'),
              t(', giving heed to '),
              hy('seducing spirits, and doctrines of devils', 'planao'),
              t(';')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'latter-times-apostasia',
          html:
            'Paul speaks of "the latter times"—the age between the first and second advents of Christ. In this period, true and false prophets coexist. The Spirit forewarns Timothy: apostasy will come. But forewarned is forearmed. The false teachers in Ephesus are a sign of these latter times.',
        },
        {
          kind: 'commentary',
          id: 'apostasia',
          html:
            'The Greek word is <em>apostasia</em>, "standing away," a deliberate turning from the truth. This is not a slow drift or gradual cooling. It is apostasy—a conscious departure from the faith once delivered. Paul uses the language of defection, as if the church were a garrison and some soldiers are deserting the post. The Spirit speaks not cautiously but <em>expressly</em>—with direct, unambiguous clarity.',
        },
        {
          kind: 'greek',
          id: 'planao',
          title: 'Planao — Seduce, Deceive, Lead Astray',
          script: 'πλανάω',
          translit: '<strong>planao</strong> · to deceive; to seduce; to cause to wander from truth',
          description:
            'Planao does not mean "inform of falsehood" but "seduce"—to attract and draw away. Deception is not always crude. Often it wears the mask of piety, severity, and concern for holiness. The only defense is vigilance and knowledge of the truth. These false teachers convince themselves first.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(2,
              hp('Speaking lies in hypocrisy', 'hypokrisis'),
              t('; having their '),
              hy('conscience seared with a hot iron', 'kaio'),
              t(';')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'hypokrisis',
          html:
            'Hypocrisy is speaking under a mask—pretending to be what you are not. But worse: these false teachers have <em>seared their conscience</em>. A seared conscience is past feeling. Like scar tissue, it no longer registers pain or warning. They have sinned so often, compromised so repeatedly, that they no longer feel the conviction of the Holy Spirit. They speak lies with confidence because they have killed the inner voice that would stop them.',
        },
        {
          kind: 'greek',
          id: 'kaio',
          title: 'Kaio — Sear, Burn',
          script: 'καίω',
          translit: '<strong>kaio</strong> · to burn; to sear; to cauterize',
          description:
            'The image is surgical cauterization—burning tissue until it goes numb. A seared conscience has lost all sensitivity. The conscience, meant to be the Spirit&apos;s alarm system in the soul, becomes deadened through repeated violation. The searing is self-inflicted, the result of ignoring warning after warning.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(3,
              t('Forbidding to marry, and commanding to abstain from meats, which God hath created to be received with thanksgiving of them which believe and know the truth.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'forbidding',
          html:
            'These specific prohibitions reveal the nature of the error: it is essentially gnostic. It treats the body as fundamentally problematic, something to be suppressed rather than sanctified. Marriage and food are not moral issues. They are God&apos;s good gifts. To forbid them is to contradict the Creator Himself. The false teachers position themselves as guardians of holiness, but they are actually contradicting the very word of God that declares creation "very good."',
        },
        {
          kind: 'christ',
          id: 'christ-incarnate',
          title: 'Christ Connection — God Became Flesh',
          html:
            'The incarnation is the ultimate argument against asceticism. God did not remain spirit. He became flesh. He ate bread, drank wine, slept, wept, and touched lepers. He blessed marriage by attending a wedding. He blessed food by multiplying loaves and fishes. To despise the body or forbid its legitimate goods is to despise the God who took a body. The Word made flesh declares that physicality is not the enemy of holiness but its arena (John 1:14; 1 John 4:2). True piety honors the physical creation as the place where God&apos;s redemptive work unfolds.',
        },
        {
          kind: 'carry',
          html:
            'You live in a time of subtle seductions too. Perhaps not ancient asceticism, but cultural voices that whisper the body is your enemy—overidentify with productivity, starve yourself of rest, despise pleasure, divorce the physical from the spiritual. The gospel speaks differently. Your body is the temple of the Spirit. Your marriage is a sign and seal. Your meals are places of communion. Where do you practice false spirituality instead of true?',
        },
        {
          kind: 'reflection',
          id: 'latter-times',
          prompt: 'What are the "seducing spirits" of your own time? What voices subtly tell you the body, pleasure, or creation itself is something to despise?',
        },
      ],
    },

    /* ─── 1 Timothy 4:4–5 — Every Creature of God is Good ────────────────── */
    {
      ref: '1 Timothy 4:4–5',
      title: 'Every Creature of God is Good',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(4,
              hg('For every creature of God is good', 'creature-good'),
              t(', and '),
              hp('nothing to be refused, if it be received with thanksgiving', 'eucharistia'),
              t(':')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'creature-good',
          html:
            'Paul appeals to Genesis. "Every creature of God is good"—not neutral, not dangerous, not contaminating. Good. This is not compromise or spiritual laziness. This is theology grounded in creation itself. God made the world and pronounced it "very good" (Genesis 1:31). That verdict has never been revoked. Food is not fallen. Marriage is not corrupted. The body is not the enemy. To treat them as if they were is to call God a liar.',
        },
        {
          kind: 'greek',
          id: 'eucharistia',
          title: 'Eucharistia — Thanksgiving, Gratitude',
          script: 'εὐχαριστία',
          translit: '<strong>eucharistia</strong> · thanksgiving; the Eucharist itself (the "grateful offering")',
          description:
            'Eucharistia carries the sense of a grateful, joyful response. To receive anything "with thanksgiving" is to bless it, to sanctify it through gratitude. This is how a created thing becomes holy—not by abstaining from it, but by receiving it with a grateful heart, as from God&apos;s hand. The Eucharist itself is the supreme example: bread and wine, gifts of creation, made sacred through thanksgiving and the word of God.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(5,
              t('For it is '),
              hg('sanctified by the word of God and prayer', 'sanctified'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'sanctified',
          html:
            'This is the hinge of the passage. A creature is not sanctified by being denied, avoided, or stripped of its use. It is sanctified—made holy—through the <em>word of God</em> (which declares it good) and through <em>prayer</em> (which receives it with gratitude and invocation of God&apos;s blessing). This is how an ordinary meal becomes an act of worship. This is how marriage becomes a covenant. This is how the body becomes the temple of the Spirit. Not by denial, but by submission to God&apos;s word and blessing through prayer.',
        },
        {
          kind: 'christ',
          id: 'christ-word-prayer',
          title: 'Christ Connection — Sanctified by His Word',
          html:
            'Jesus taught His disciples to pray before eating: "bless the food." He often blessed and broke bread with His disciples. He stood in the synagogue and declared that those who come to Him would never hunger or thirst—He is the living Bread (John 6:35). The word spoken over bread makes it holy. The prayer offered before eating makes it an encounter with God&apos;s providence. John 17:17 captures it: "Sanctify them through thy truth; thy word is truth." All things are sanctified through the word of God—food, marriage, the body itself—when received in faith and gratitude.',
        },
        {
          kind: 'carry',
          html:
            'When you next sit down to eat, pause. Bless the food. Give thanks. In that moment of gratitude, you are saying: "This is from God. I receive it. I am His." That simple practice—one meal, one day—sanctifies the ordinary. It teaches you that holiness is not achieved by what you deny, but by how you receive. What good thing could you receive today with new gratitude?',
        },
        {
          kind: 'reflection',
          id: 'creature-good',
          prompt: 'What is one creature, one simple good thing (food, rest, a relationship, your body), that you could receive with more conscious thanksgiving? What might change if you did?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── 1 Timothy 4:6 — A Good Minister ────────────────────────────────── */
    {
      ref: '1 Timothy 4:6',
      title: 'Nourished in the Words of Faith',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(6,
              t('If thou put the brethren in remembrance of these things, thou shalt be a '),
              hp('good minister of Jesus Christ', 'deacon'),
              t(', nourished up in the '),
              hy('words of faith', 'logos'),
              t(' and of good doctrine, whereunto thou hast attained.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'deacon',
          html:
            'Paul does not call Timothy to invent new doctrine. He calls him to <em>remind</em> the church of what it has already received. Timothy&apos;s task is stewardship, not creativity. He is a minister—a servant—of the truth entrusted to him. A "good minister" is one who faithfully passes on what he has been taught, who guards the deposit, who calls the church back to its foundations when drift occurs.',
        },
        {
          kind: 'greek',
          id: 'logos',
          title: 'Logos — Word, Reason, Doctrine',
          script: 'λόγος',
          translit: '<strong>logos</strong> · word; reason; the Word (Christ); doctrine',
          description:
            'Logos is not mere sound or speech. It carries the weight of reason, meaning, and reality. To be "nourished in the words of faith" is to be sustained by the actual substance of Christian teaching—the apostolic deposit that carries the mind and heart of Christ. You cannot give what you have not received and internalized.',
        },
        {
          kind: 'carry',
          html:
            'You are also called to remind others—in your home, your work, your circle of influence—of what you have received. Not to impose, not to dominate, but to remind. Remind your children of the gospel. Remind your friend of what she knows to be true but has forgotten in a moment of fear. Remind the one drifting that the faith still holds. This is ministerial work. It flows from a heart nourished in the word.',
        },
        {
          kind: 'reflection',
          id: 'good-minister',
          prompt: 'Who in your life needs to be reminded of the truth? What truth has sustained you that you could gently bring to mind for them?',
        },
      ],
    },

    /* ─── 1 Timothy 4:7 — Refuse Fables, Exercise Unto Godliness ────────── */
    {
      ref: '1 Timothy 4:7',
      title: 'Refuse Profane Fables',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(7,
              t('But '),
              hg('refuse profane and old wives&apos; fables', 'muthos'),
              t(', and '),
              hp('exercise thyself rather unto godliness', 'eusebeia'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'muthos',
          html:
            'False doctrine is not merely wrong—it is <em>profane</em>, unholy. The word "fables" (Greek: muthos) carries contempt. These are "old wives&apos; fables"—idle gossip, the chatter of those who have lost touch with truth. Paul is not being gentle here. He is drawing a clear line. Refuse them. Do not engage, do not entertain, do not half-believe them. Cut them off.',
        },
        {
          kind: 'greek',
          id: 'eusebeia',
          title: 'Eusebeia — Godliness, Piety',
          script: 'εὐσέβεια',
          translit: '<strong>eusebeia</strong> · godliness; piety; reverence toward God',
          description:
            'Eusebeia is the opposite of muthos. It is not idle chatter but solid devotion. Not superstition but true reverence. It involves training, habit, repetition—the practices that shape the soul. Godliness is the fruit of discipline aligned toward the true God.',
        },
        {
          kind: 'carry',
          html:
            'You too must refuse the fables of your own time. The lie that productivity defines you. The superstition that if you just achieve enough, you will finally feel at peace. The old wives&apos; tale that you are too broken to be loved. These are the muthos that whisper in your ear. Instead, exercise yourself unto godliness. Train yourself in prayer. Practice gratitude. Cultivate mercy. These are the disciplines that actually transform.',
        },
        {
          kind: 'reflection',
          id: 'refuse-fables',
          prompt: 'What are the "old wives&apos; fables" you catch yourself believing? What would it mean to refuse them deliberately?',
        },
      ],
    },

    /* ─── 1 Timothy 4:8 — Godliness Profitable for All Things ──────────── */
    {
      ref: '1 Timothy 4:8',
      title: 'Godliness Profitable for All Things',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(8,
              t('For bodily exercise profiteth '),
              hg('a little', 'proskairos'),
              t(': but godliness is '),
              hp('profitable unto all things', 'opheleia'),
              t(', having promise of '),
              hy('the life that now is, and of that which is to come', 'aionios'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'proskairos',
          html:
            'Paul does not say physical exercise is useless. He says it is temporary—profitable for a little time, for the span of this life only. The body decays. Strength fades. But godliness—the cultivation of a Christlike character—extends beyond this life. It is eschatological. It echoes into eternity. This is not a denigration of the body but a proper ordering of what matters most.',
        },
        {
          kind: 'greek',
          id: 'opheleia',
          title: 'Opheleia — Profit, Benefit',
          script: 'ὠφέλεια',
          translit: '<strong>opheleia</strong> · profit; benefit; advantage',
          description:
            'Godliness is universally profitable—for health of soul, peace of conscience, steadfastness in trial, clarity of purpose, and eternal reward. It works in all conditions and for all aspects of human flourishing. Not narrowly, but comprehensively.',
        },
        {
          kind: 'greek',
          id: 'aionios',
          title: 'Aionios — Eternal, Everlasting',
          script: 'αἰώνιος',
          translit: '<strong>aionios</strong> · eternal; of the age; everlasting',
          description:
            'This word reaches both directions in time: "the life that now is" (the present age, in which we live) and "that which is to come" (the age of resurrection and glory). Godliness does not wait for heaven to show its fruit. It transforms your life now. But its full profit extends forever.',
        },
        {
          kind: 'christ',
          id: 'christ-profit',
          title: 'Christ Connection — Gain and Loss Rightly Ordered',
          html:
            'Jesus taught: "What shall it profit a man, if he shall gain the whole world, and lose his own soul?" (Matt. 16:26). And again: "seek ye first the kingdom of God and his righteousness; and all these things shall be added unto you" (Matt. 6:33). Godliness—right alignment with God—puts everything else in perspective. It does not despise the body or the present life, but it refuses to worship them. The profit Paul speaks of is the peace that comes from knowing you are building something that lasts.',
        },
        {
          kind: 'carry',
          html:
            'This does not mean neglecting your body. Feed it, move it, rest it. But build your life on something more durable than a strong body or a full calendar. Train your spirit. Pray. Read Scripture. Practice mercy. Forgive. Show up. Be faithful in small things. These investments—which look small in the moment—produce dividends in your life right now and echo forever.',
        },
        {
          kind: 'reflection',
          id: 'godliness-profit',
          prompt: 'Where are you building for this life only? What spiritual discipline could you add that would bear fruit both now and eternally?',
        },
      ],
    },

    /* ─── 1 Timothy 4:9–11 — A Faithful Saying ──────────────────────────── */
    {
      ref: '1 Timothy 4:9–11',
      title: 'Labour and Reproach',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(9,
              hg('This is a faithful saying and worthy of all acceptation', 'logos-pistos'),
              t('. ')
            ),
            verse(10,
              t('For therefore we both labour and suffer reproach, because we '),
              hp('trust in the living God', 'zao'),
              t(', who is the '),
              hy('Saviour of all men', 'soter'),
              t(', specially of those that believe.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'logos-pistos',
          html:
            'A "faithful saying" (Greek: <em>pistos logos</em>) marks the most important truths in the pastoral epistles. Paul is not offering opinion. He is marking doctrine that demands belief and acceptance. The saying he is affirming is the paradox of verses 8–10: that godliness, though it costs everything, is worth everything.',
        },
        {
          kind: 'commentary',
          id: 'labour-reproach',
          html:
            'To exercise yourself unto godliness has a cost. Paul speaks from experience: labour and reproach. The world mocks what it does not understand. Worldly ambitions collide with godly allegiance. You will pay. But Paul names the reason we pay: trust in the living God. Not abstract faith, but trust in <em>a God who lives</em>—who is present, active, and worthy of sacrifice.',
        },
        {
          kind: 'greek',
          id: 'soter',
          title: 'Soter — Saviour, Rescuer',
          script: 'σωτήρ',
          translit: '<strong>soter</strong> · saviour; rescuer; deliverer',
          description:
            'God is the Saviour of all men (offering salvation to all) and "specially of those that believe" (actually rescuing those who trust Him). The redemption is universal in offer, particular in reception. All are invited into rescue; only those who believe enter it.',
        },
        {
          kind: 'greek',
          id: 'zao',
          title: 'Zao — To Live, To Be Alive',
          script: 'ζάω',
          translit: '<strong>zao</strong> · to live; to be alive; to be active',
          description:
            'The "living God" is no distant abstraction, no mere idea. He is alive, active, present. He hears prayer. He moves. He rescues. This is the God who makes labour and reproach worth bearing.',
        },
        {
          kind: 'christ',
          id: 'christ-saviour',
          title: 'Christ Connection — The Saviour Particularly of the Church',
          html:
            'Christ is called <em>Saviour</em> in the Gospel accounts and epistles. He is "the Saviour of the body… the church" (Ephesians 5:23). While God offers salvation to all, Christ particularly saves those who are His own—the bride He redeemed with His blood. Paul is affirming that the God we trust is the God incarnate in Christ, who died and rose to be our Saviour. His resurrection is the proof that labour and suffering for righteousness are not in vain.',
        },
        {
          kind: 'carry',
          html:
            'You will face reproach for living differently. For taking time to pray instead of scrolling. For choosing rest over productivity. For refusing dishonesty even when it would gain you something. For showing mercy to someone the world dismisses. And you will wonder if it is worth it. Paul says: you trust in the living God. He is a Saviour. He rescues those who stake everything on Him. That is worth the labour and the reproach.',
        },
        {
          kind: 'reflection',
          id: 'labour-trust',
          prompt: 'What labour or reproach have you endured for Christ or godliness? How has that cost served to deepen your trust in God?',
        },
      ],
    },

    /* ─── 1 Timothy 4:12 — Let No Man Despise Thy Youth ────────────────── */
    {
      ref: '1 Timothy 4:12',
      title: 'Be an Example of the Believers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(12,
              t('Let no man '),
              hg('despise thy youth', 'neotēs'),
              t('; but be thou an '),
              hp('example of the believers', 'typos'),
              t(', in '),
              hy('word, in conversation, in charity, in spirit, in faith, in purity', 'virtues'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'neotēs',
          html:
            'Timothy may have been in his thirties (1 Corinthians 4:17 calls him "my beloved son"), which was young for a senior pastoral role. The Ephesian church might have questioned his authority. Paul tells Timothy not to accept that contempt. Your youth is not a liability if you live with character. Conduct can overcome age.',
        },
        {
          kind: 'greek',
          id: 'typos',
          title: 'Typos — Example, Pattern, Type',
          script: 'τύπος',
          translit: '<strong>typos</strong> · example; pattern; type; impression (as in a stamp)',
          description:
            'A typos is not mere instruction but demonstration—a living pattern. Timothy is to be a "type" that believers can imitate. Not perfect, but consistent. Not distant, but exemplary in daily life. Your life stamps an impression on those around you.',
        },
        {
          kind: 'commentary',
          id: 'virtues',
          html:
            'Paul lists six areas where Timothy must lead by example: in <em>word</em> (speech is honest and edifying), in <em>conversation</em> (conduct is consistent and gracious), in <em>charity</em> (love governs action), in <em>spirit</em> (attitude reflects devotion), in <em>faith</em> (trust is evident), in <em>purity</em> (the body and mind are kept clean). These are not extraordinary virtues. They are the daily disciplines of a person aligned with Christ.',
        },
        {
          kind: 'christ',
          id: 'christ-example',
          title: 'Christ Connection — The Supreme Example',
          html:
            'Jesus said, "Take my yoke upon you, and learn of me" (Matthew 11:29). He did not teach abstraction. He taught by example: washing feet, feeding the hungry, sitting with the despised. Peter writes: "Christ also suffered for us, leaving us an example, that ye should follow his steps" (1 Peter 2:21). Timothy is to be "an example" by reflecting the Example—Jesus. When people see Timothy&apos;s word, conversation, charity, spirit, faith, and purity, they see a faint echo of Christ&apos;s pattern.',
        },
        {
          kind: 'carry',
          html:
            'Someone is watching how you live. Your child, your colleague, your friend. They may never read a word of Scripture, but they see your word—whether you keep promises, whether you speak truth. They observe your charity—whether you give time, whether you forgive. They notice your purity—whether your yes is yes and your no is no. You are a type, an example. Not by giving a sermon, but by living one.',
        },
        {
          kind: 'reflection',
          id: 'be-example',
          prompt: 'Who is watching how you live? In which of the six areas (word, conversation, charity, spirit, faith, purity) do you most want to be a stronger example?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── 1 Timothy 4:13–14 — Attending to Reading and Doctrine ────────── */
    {
      ref: '1 Timothy 4:13–14',
      title: 'Till I Come, Give Attendance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(13,
              t('Till I come, give '),
              hp('attendance to reading, to exhortation, to doctrine', 'prosoche'),
              t(';')
            ),
            verse(14,
              t('Neglect not the '),
              hy('gift that is in thee', 'charisma'),
              t(', which was given thee by prophecy, with the '),
              hg('laying on of the hands of the presbytery', 'cheirothesia'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'prosoche',
          html:
            'Paul tells Timothy where to focus his energy: reading (of Scripture), exhortation (speaking encouragement and correction to the flock), and doctrine (teaching sound theology). Not administration, not politics, not innovation. The core tasks. This is Timothy&apos;s ordered life until Paul returns.',
        },
        {
          kind: 'greek',
          id: 'charisma',
          title: 'Charisma — Gift, Endowment',
          script: 'χάρισμα',
          translit: '<strong>charisma</strong> · gift; grace-gift; spiritual endowment',
          description:
            'Charisma is a divine gift—not earned but given by grace. Timothy has been gifted by the Spirit for his task. But the gift can be neglected. It is Timothy&apos;s responsibility to tend it, use it, and develop it. God gives the gift; Timothy must not waste it.',
        },
        {
          kind: 'greek',
          id: 'cheirothesia',
          title: 'Cheirothesia — Laying on of Hands',
          script: 'χειροθεσία',
          translit: '<strong>cheirothesia</strong> · laying on of hands; the laying on in commissioning or ordination',
          description:
            'This was the act by which the church formally recognized and commissioned Timothy for ministry. The presbytery (the council of elders) laid hands on him, receiving a prophetic utterance about his calling. It was not mere ceremony but a moment when the Spirit confirmed what God had already determined about Timothy.',
        },
        {
          kind: 'christ',
          id: 'christ-gift',
          title: 'Christ Connection — Gifts Distributed by the Spirit',
          html:
            'Paul teaches that "the manifestation of the Spirit is given to every man to profit withal" (1 Corinthians 12:7). Each believer receives gifts—charisma—from the Holy Spirit. These gifts are not for self-enrichment but for service to the body. Timothy&apos;s gift was recognized publicly through the laying on of hands. Our gifts may be less formally commissioned, but they are no less real. We are all to tend what God has given us.',
        },
        {
          kind: 'carry',
          html:
            'What gift has God given you? Teaching, mercy, service, administration, exhortation? The Spirit has distributed gifts to every believer. You may not have had a public laying on of hands, but you have been equipped. And you have the same charge Timothy did: neglect not the gift. Tend it. Use it. Develop it. It is not for you to hide or diminish, but to cultivate for the body of Christ.',
        },
        {
          kind: 'reflection',
          id: 'attend-gift',
          prompt: 'What spiritual gift do you sense God has given you? How are you currently neglecting or developing it?',
        },
      ],
    },

    /* ─── 1 Timothy 4:15 — Meditate Upon These Things ──────────────────── */
    {
      ref: '1 Timothy 4:15',
      title: 'Meditate Upon These Things',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(15,
              hp('Meditate upon these things', 'meletao'),
              t('; '),
              hg('give thyself wholly to them', 'wholly'),
              t('; that thy '),
              hy('profiting may appear to all', 'prokope'),
              t('.')
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'meletao',
          title: 'Meletao — Meditate, Ponder, Rehearse',
          script: 'μελετάω',
          translit: '<strong>meletao</strong> · to meditate; to ponder; to practice and rehearse',
          description:
            'This is not passive contemplation. It is active rehearsal. The word implies thinking through, working with, internalizing. Like an actor rehearsing lines until they become natural, Timothy is to work these truths into his bones until they shape his instinctive responses.',
        },
        {
          kind: 'commentary',
          id: 'wholly',
          html:
            'Paul does not allow for divided attention. "Give thyself wholly to them." Not in your spare time. Not between other pursuits. Wholly. This is the seriousness with which Timothy is to treat his calling. The truths of the gospel and the discipline of godliness are not secondary pursuits but the center around which everything else orbits.',
        },
        {
          kind: 'commentary',
          id: 'prokope',
          html:
            'Timothy&apos;s growth in grace is not meant to be private. It is meant to be evident. "That thy profiting may appear to all." Not through self-promotion but through the natural effect of a life being transformed by the gospel and shaped by discipline. People will see.',
        },
        {
          kind: 'greek',
          id: 'prokope-def',
          title: 'Prokope — Progress, Advancement',
          script: 'προκοπή',
          translit: '<strong>prokope</strong> · progress; advancement; visible progress',
          description:
            'Timothy&apos;s growth in grace is not meant to be private. It is meant to be evident. "That thy profiting may appear to all." Not through self-promotion but through the natural effect of a life being transformed by the gospel and shaped by discipline. People will see.',
        },
        {
          kind: 'christ',
          id: 'christ-meditate',
          title: 'Christ Connection — Meditating the Gospel into Your Life',
          html:
            'Joshua was told: "This book of the law shall not depart out of thy mouth; but thou shalt meditate therein day and night" (Joshua 1:8). The Psalmist says: "Blessed is the man… [whose] delight is in the law of the Lord; and in his law doth he meditate day and night" (Psalm 1:1–2). This is not mere intellectual work but a practice that shapes the whole person. Jesus modeled it: He spent nights in prayer, He knew Scripture, He meditated on the Father&apos;s work. To meditate on truth is to let it gradually reshape you from the inside out.',
        },
        {
          kind: 'carry',
          html:
            'You too are called to meditate. Not as an exotic spiritual practice, but as the ordinary work of turning the gospel over in your mind and heart. When a Scripture passage strikes you, don&apos;t move on. Sit with it. What does it say? What does it mean? How does it reshape what you thought you knew? How does it change your next decision? As you practice this, your profiting will appear to all—not through performance, but through genuine transformation visible in how you live.',
        },
        {
          kind: 'reflection',
          id: 'meditate',
          prompt: 'What truth from Scripture have you been sitting with lately? Where do you sense God asking you to "meditate" more deeply?',
        },
      ],
    },

    /* ─── 1 Timothy 4:16 — Take Heed to Thyself and the Doctrine ────────── */
    {
      ref: '1 Timothy 4:16',
      title: 'Take Heed to Thyself and the Doctrine',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(16,
              t('Take heed unto '),
              hg('thyself', 'seautou'),
              t(', and unto the '),
              hp('doctrine', 'didaskalia'),
              t('; '),
              hy('continue in them', 'proskartereō'),
              t(': for in doing this thou shalt both save thyself, and them that hear thee.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'seautou',
          html:
            'Paul names two fronts: yourself and the doctrine. A pastor or teacher must tend both. The inner life—your spiritual state, your prayer, your walk with God—is as important as the truth you proclaim. In fact, your inner life determines the integrity of your proclamation. You cannot give what you do not possess. Hypocrisy ruins witness. But neither can you be satisfied with private piety while neglecting doctrine.',
        },
        {
          kind: 'greek',
          id: 'didaskalia',
          title: 'Didaskalia — Doctrine, Teaching',
          script: 'διδασκαλία',
          translit: '<strong>didaskalia</strong> · doctrine; teaching; the content of instruction',
          description:
            'This is not opinion or preference but the substance of Christian teaching. Doctrine is not a luxury. It is the shape of truth itself. To take heed to doctrine is to guard what has been entrusted, to know it deeply, and to proclaim it faithfully.',
        },
        {
          kind: 'greek',
          id: 'proskartereō',
          title: 'Proskartereō — Continue, Persevere, Be Devoted',
          script: 'προσκαρτερέω',
          translit: '<strong>proskartereō</strong> · to continue; to persevere; to be steadfast and devoted',
          description:
            'This is not a casual recommendation. It is a call to unwavering commitment. To continue in yourself and in doctrine means: no drifting, no compromise, no season of carelessness. Steadfast attention, every day.',
        },
        {
          kind: 'commentary',
          id: 'save-thyself',
          html:
            'The promise is remarkable: "thou shalt both save thyself, and them that hear thee." This is not works-righteousness. It is a statement of consequence. As you guard your own soul and proclaim sound doctrine, you participate in the redemption of those under your care. The stakes are high. Your faithfulness matters eternally.',
        },
        {
          kind: 'christ',
          id: 'christ-heed',
          title: 'Christ Connection — The Gospel as Saving Truth',
          html:
            'The gospel saves both the speaker and the hearer. Paul writes: "Meditate upon these things; give thyself wholly to them; that thy profiting may appear to all. Take heed unto thyself, and unto the doctrine; continue in them: for in doing this thou shalt both save thyself, and them that hear thee" (1 Timothy 4:15–16). The word of Christ, when preached and lived faithfully, has saving power. Not because of the speaker&apos;s eloquence, but because the gospel is the power of God unto salvation (Romans 1:16). As you hold fast to Christ and to the truth about Him, you become a conduit of that saving power.',
        },
        {
          kind: 'carry',
          html:
            'You may not be ordained clergy, but you are a minister in your sphere. Your words and your example speak into the souls of your children, your friends, your colleagues. As you take heed to your own walk with God—your prayers, your repentance, your growth—and as you hold fast to the truth of the gospel, you become a means of grace for those around you. They will be drawn toward Christ not by your perfection but by your faithfulness. Not by your credentials but by your consistency. Continue in yourself and in the doctrine. The stakes are eternal.',
        },
        {
          kind: 'reflection',
          id: 'take-heed',
          prompt: 'Where are you most vulnerable to drifting—in your own spiritual life or in your grasp of doctrine? What would "taking heed" look like this week?',
        },
        {
          kind: 'artwork',
          matchTitle: /timothy|paul|apostle/i,
          caption: '1 Timothy 4 — A Charge to Timothy',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Refuse profane and old wives&apos; fables, and exercise thyself rather unto godliness. For bodily exercise profiteth a little: but godliness is profitable unto all things, having promise of the life that now is, and of that which is to come.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Timothy 4 · Study Guide',
  },

  hasHebrew: false,
};
