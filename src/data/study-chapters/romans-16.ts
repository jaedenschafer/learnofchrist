import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Romans 16 — Closing Commendations and Final Benediction
 *
 * Paul closes his monumental letter not with doctrine but with faces. Phebe
 * the deacon. Priscilla and Aquila who risked their necks for his life. Mary
 * who "bestowed much labour." Andronicus and Junia "of note among the apostles."
 * Twenty-six names, most of them obscure in history. But not to God. The chapter
 * ends with a doxology that brings the whole gospel to its pinnacle: Christ as
 * the revealed mystery, and all glory flowing through Him to God alone.
 */
export const ROMANS_16: RichChapterContent = {
  bookSlug: 'romans',
  bookName: 'Romans',
  chapter: 16,

  estimatedMinutes: { beginner: 6, intermediate: 14, deep: 20 },
  topicTags: ['mercy', 'faithfulness', 'hope', 'righteousness'],
  opener: {
    topical: true,
    caption: 'Romans 16',
  },
  intros: [
    'The great epistle closes not with abstract doctrine but with people. Paul names them one by one: a deacon who carries the letter, a husband and wife who laid down their own necks, a woman who labored without counting the cost, leaders and workers both celebrated and forgotten. These are not names in a ledger. They are the gospel made visible — the invisible God working through visible hands, feet, voices, sacrifices.',
    'The chapter is a tapestry of remembrance. Someone remembered Epenetus as "the firstfruits of Achaia unto Christ." Someone noted that Priscilla and Aquila risked their necks for Paul&apos;s life. Someone saw Mary "bestow much labour" and decided it was worth recording. God&apos;s memory is not short. The gospel is not an idea transmitted by television. It is person to person, name to name, the kingdom of God made tangible in the communion of saints.',
    'But the peace of that communion is not automatic. The chapter warns sharply against those who cause divisions through smooth words and deceptive flattery — wolves in shepherds&apos; clothing. The antidote is not fear but grace. The God of peace will crush Satan under the feet of the Roman church. And the closing doxology lifts the whole letter into the clouds: to Him that is able to establish you, to God only wise, be glory through Jesus Christ for ever.',
  ],

  sections: [
    /* ─── Romans 16:1–2 — Phebe, Deacon and Patroness ────────────────────── */
    {
      ref: 'Romans 16:1–2',
      title: 'Phebe, Deacon and Patroness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 1,
              spans: [
                t('I commend unto you '),
                hg('Phebe our sister', 'rom16-phebe-intro'),
                t(', which is a '),
                hy('servant', 'rom16-diakonos'),
                t(' of the church which is at Cenchrea:'),
              ],
            },
            {
              number: 2,
              spans: [
                t('That ye receive her in the Lord, as becometh saints, and that ye '),
                hg('assist her in whatsoever business she hath need of you', 'rom16-assist'),
                t(': for she hath been a '),
                hy('succourer of many', 'rom16-prostatis'),
                t(', and of myself also.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom16-phebe-intro',
          html:
            'Phebe arrives in Rome carrying the letter you have just read — this entire epistle to the Romans. She does not arrive as a messenger; she arrives as a deacon[res:bibleodyssey-women-leadership] of the church at Cenchrea[res:topostext-cenchreae], a port city east of Corinth[res:ascsa-corinth]. Paul commends her to the Roman church with the weight of apostolic authority[res:theoi-priscilla-aquila]. Receive her. Help her. She has earned it.',
        },
        {
          kind: 'greek',
          id: 'rom16-diakonos',
          title: 'Diakonos — Servant/Deacon',
          script: 'διάκονος',
          translit: '<strong>diakonos</strong> · servant; deacon; minister',
          description:
            'A diakonos is one who waits table, who carries, who serves. In the early church the deacons cared for widows, the poor, the sick, and the practical needs of the community. Phebe held the office of deacon — a position of recognized leadership and sacred responsibility.',
        },
        {
          kind: 'greek',
          id: 'rom16-prostatis',
          title: 'Prostatis — Patroness/Helper',
          script: 'προστάτις',
          translit: '<strong>prostatis</strong> · patroness; helper; one who stands before',
          description:
            'A prostatis is a woman of standing who opens her home, her resources, her protection to others. The word implies wealth, influence, and the willingness to use both in service. Phebe has been a prostatis to Paul himself and to many others.',
        },
        {
          kind: 'commentary',
          id: 'rom16-assist',
          html:
            'The Greek word here is <em>paristemi</em> — to stand beside, to support, to assist. Paul is not asking for small kindness. He is asking the Roman church to stand beside Phebe as she stands beside others. To become, for her, what she has become for so many.',
        },
        {
          kind: 'carry',
          html:
            'You know women like Phebe — women who show up, who help, who remember the forgotten, who open what they have. The world often counts them as background figures, but the apostle Paul lifts them into the light. If you are such a woman, this is your apostolic letter of commendation. If you know such a woman, this is permission to see her as Paul sees her: a deacon, a patroness, a minister of the gospel.',
        },
        {
          kind: 'reflection',
          id: 'rom16-phebe-reflect',
          prompt:
            'Who is someone you know who serves quietly and faithfully, like Phebe? How might you "receive her in the Lord" and publicly honor her labor?',
        },
      ],
    },

    /* ─── Romans 16:3–5 — Priscilla and Aquila ───────────────────────────── */
    {
      ref: 'Romans 16:3–5',
      title: 'Priscilla and Aquila: Risk and Hospitality',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 3,
              spans: [
                t('Greet '),
                hg('Priscilla and Aquila', 'rom16-priscilla-aquila'),
                t(', my '),
                hy('helpers in Christ Jesus', 'rom16-sunergo'),
                t(':'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Who have for my life laid down their own necks: unto whom not only I give thanks, but also all the churches of the Gentiles.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Likewise greet the church that is in their house. Salute my wellbeloved Epenetus, who is the '),
                hg('firstfruits of Achaia', 'rom16-epenetus'),
                t(' unto Christ.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom16-priscilla-aquila',
          html:
            'Priscilla and Aquila are Paul&apos;s partners in the gospel. They are tentmakers like him, working with their hands while proclaiming Christ. They have traveled with him, prayed with him, taught Apollos to know Christ more accurately. And at some point in some city — the text does not say where — they risked execution to save Paul&apos;s life. The apostle never forgets it.',
        },
        {
          kind: 'greek',
          id: 'rom16-sunergo',
          title: 'Sunergo — Fellow Worker',
          script: 'συνεργός',
          translit: '<strong>sunergo</strong> · fellow worker; co-laborer; one who works alongside',
          description:
            'Paul calls them not servants but <em>sunergo</em> — fellow workers alongside him, partners in the same labor. The word implies equality, shared purpose, and mutual respect. These are not subordinates. These are allies.',
        },
        {
          kind: 'commentary',
          id: 'rom16-epenetus',
          html:
            'Epenetus is named as "the firstfruits of Achaia unto Christ" — he was the first convert in that region to believe in Jesus. Someone saw him turn to Christ and thought it worth remembering. Someone in the Roman church carries that memory: you remember when Epenetus first believed. You were there for it. God was there for it.',
        },
        {
          kind: 'commentary',
          id: 'rom16-church-in-house',
          html:
            'The church at Rome gathers in Priscilla and Aquila&apos;s house. They do not rent a cathedral. They open their home, their table, their roof to the body of Christ. The early church had no buildings — it had homes. It had hospitality. It had people willing to say, "the church will meet here, and we will feed them."',
        },
        {
          kind: 'carry',
          html:
            'The church is not a building or an institution. It is people who open their homes, who labor alongside others, who risk themselves for the gospel without fanfare. If your home is a place where Christ&apos;s body gathers, you are Priscilla and Aquila. If you work alongside others in faith without needing credit, you are already at the labor they model.',
        },
        {
          kind: 'reflection',
          id: 'rom16-risk-reflect',
          prompt:
            'What does it mean to "lay down your neck" for the gospel today? Where might God be asking you to risk something — your comfort, your safety, your reputation — for Christ and His body?',
        },
      ],
    },

    /* ─── Romans 16:6–11 — The Workers and the Hidden Saints ──────────────── */
    {
      ref: 'Romans 16:6–11',
      title: 'The Workers and the Hidden Saints',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 6,
              spans: [
                t('Greet '),
                hg('Mary', 'rom16-mary'),
                t(', who '),
                hy('bestowed much labour', 'rom16-kopiao'),
                t(' on us.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Salute '),
                hg('Andronicus and Junia', 'rom16-andronicus-junia'),
                t(', my kinsmen, and my fellowprisoners, who are '),
                hp('of note among the apostles', 'rom16-apostles'),
                t(', who also were in Christ before me.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Salute Amplias my beloved in the Lord.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Salute Urbanus, our helper in Christ, and Stachys my beloved.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Salute Apelles approved in Christ. Salute them which are of Aristobulus&apos; household.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Salute Herodion my kinsman. Greet them that be of the household of Narcissus, which are in the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom16-mary',
          html:
            'Mary. We know nothing about her except that she "bestowed much labour" on the Roman church. Some commentators guess she may have been a leader, a teacher, a counselor — but the text simply records her labor. It is a remarkable thing in ancient literature: a woman named for her work, not her family or her beauty or her virtue, but simply her labor, her <em>kopiao</em>. The work is enough.',
        },
        {
          kind: 'greek',
          id: 'rom16-kopiao',
          title: 'Kopiao — To Labor, to Toil',
          script: 'κοπιάω',
          translit: '<strong>kopiao</strong> · to labor; to toil; to grow weary through labor',
          description:
            'The word does not mean a light effort. <em>Kopiao</em> is the labor of a farmer bent over a plow, a servant carrying water, a woman who has given her strength to a task. Mary has given her strength to the Roman church. That is all the text says, and it is everything.',
        },
        {
          kind: 'commentary',
          id: 'rom16-andronicus-junia',
          html:
            'Andronicus and Junia — probably a husband and wife — have been Paul&apos;s fellow prisoners (they have been arrested alongside him for the gospel), and they are called "of note among the apostles." The Greek phrase is <em>episemos en tois apostolois</em>. That can mean they are "well-known to the apostles" or that they themselves are "well-known apostles." The text is genuinely ambiguous, and that ambiguity has generated centuries of argument. But one thing is clear: they are believers of standing, imprisoned for Christ, and named with honor by the apostle Paul.',
        },
        {
          kind: 'commentary',
          id: 'rom16-apostles',
          html:
            'Whether Andronicus and Junia are apostles themselves or simply known to the apostles, Paul marks them as <em>episemos</em> — distinguished, of note, marked out as significant. They have given their freedom, their safety, their bodies to the gospel alongside the apostle. That is enough for Paul to commend them.',
        },
        {
          kind: 'greek',
          id: 'rom16-episemos',
          title: 'Episemos — Of Note, Distinguished',
          script: 'ἐπίσημος',
          translit: '<strong>episemos</strong> · of note; distinguished; marked; conspicuous',
          description:
            'A seal or mark makes something conspicuous, set apart, noted. <em>Episemos</em> means to bear such a mark — to be someone whose work, whose faith, whose sacrifice is widely seen and known. Andronicus and Junia bear that mark.',
        },
        {
          kind: 'commentary',
          id: 'rom16-amplias-urbanus',
          html:
            'Then come the names we have no story for: Amplias, Urbanus, Stachys, Apelles. Some are described as "approved in Christ" — meaning their faith is tested and found genuine. Some are listed as helpers, as beloved. The text does not tell their stories. But God records their names. The point of naming so many is to say: the gospel is not carried by famous people alone. It is carried by Amplias and Urbanus and Stachys and Apelles. It is carried by the faithful whose names we will never know.',
        },
        {
          kind: 'carry',
          html:
            'You may not be famous. You may never be the speaker on the stage or the author of the article. You may be known only to a small circle, doing your labor faithfully, week by week, without applause. This chapter is for you. Mary is named. Apelles is named. Amplias is named. God remembers. The apostle remembers. And when that letter is read aloud in the Roman church, your people hear your name and rejoice.',
        },
        {
          kind: 'reflection',
          id: 'rom16-labor-reflect',
          prompt:
            'What labor in Christ are you doing that no one else sees? What would it mean to you to believe that God sees it, and that your name is written in the Lamb&apos;s book of life?',
        },
      ],
    },

    /* ─── Romans 16:12–16 — The Living Community ────────────────────────────── */
    {
      ref: 'Romans 16:12–16',
      title: 'The Living Community of Saints',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 12,
              spans: [
                t('Salute Tryphena and Tryphosa, who '),
                hg('labour in the Lord', 'rom16-labour-lord'),
                t('. Salute the beloved Persis, which laboured much in the Lord.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Salute Rufus '),
                hg('chosen in the Lord', 'rom16-chosen'),
                t(', and his mother and mine.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Salute Asyncritus, Phlegon, Hermes, Patrobas, Hermas, and the brethren which are with them.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('Salute Philologus, and Julia, Nereus, and his sister, and Olympas, and all the saints which are with them.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('Salute one another with an '),
                hg('holy kiss', 'rom16-holy-kiss'),
                t('. '),
                t('The churches of Christ salute you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom16-labour-lord',
          html:
            'Tryphena and Tryphosa — the names suggest they are sisters or perhaps twins — "labour in the Lord." Then Persis is greeted as "beloved" and noted that she "laboured much." The repetition of <em>labour</em> is intentional. The gospel work in Rome is being done by women. Not alone, but prominently, visibly, without apology.',
        },
        {
          kind: 'commentary',
          id: 'rom16-chosen',
          html:
            'Rufus is "chosen in the Lord." The word does not refer to Judas&apos;s betrayal but to election, to the sense that God has set him apart, marked him, called him out for His own purposes. And then Paul adds, "and his mother and mine" — Rufus&apos;s mother has mothered Paul too. She has opened her home, her table, her heart to the apostle. Even in a salutation, relationship is visible.',
        },
        {
          kind: 'commentary',
          id: 'rom16-holy-kiss',
          html:
            'The holy kiss is how the early church greeted one another in the gatherings for worship. Not a formal handshake but an embrace, a kiss of peace, a physical expression of koinonia — communion, shared life. When this letter is read aloud in the Roman church, the congregation turns to one another and kisses. They receive Paul through that kiss. They become, in that moment, one body scattered across the Mediterranean.',
        },
        {
          kind: 'commentary',
          id: 'rom16-all-churches',
          html:
            'Then something remarkable happens: "The churches of Christ salute you." Paul does not say "I greet you on behalf of the churches." He says the churches themselves are greeting the Romans. The boundary between the Roman church and the other churches dissolves. They are one communion. One body. One spirit. The letter has become a vehicle for the whole church to embrace the part of it in Rome.',
        },
        {
          kind: 'carry',
          html:
            'You live in a communion that stretches beyond your town, your country, your century. Every Christian who has ever lived, who lives now, who will live — you are of one body, one spirit, one family. The kiss of peace is how you enter that communion: not through a screen, not through a transaction, but through touch, through presence, through the embrace of those near you who carry the same Spirit.',
        },
        {
          kind: 'reflection',
          id: 'rom16-communion-reflect',
          prompt:
            'How do you experience being part of a communion wider than your own congregation? What would it mean to truly feel that you are part of "the churches of Christ" across all time and distance?',
        },
      ],
    },

    /* ─── Romans 16:17–20 — Guard Against Divisions; God of Peace ───────────── */
    {
      ref: 'Romans 16:17–20',
      title: 'Guard Against Divisions; Crush Satan',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 17,
              spans: [
                t('Now I beseech you, brethren, '),
                hy('mark them which cause divisions', 'rom16-skandalon'),
                t(' and offences '),
                hg('contrary to the doctrine', 'rom16-mark'),
                t(' which ye have learned; and '),
                hg('avoid them', 'rom16-avoid'),
                t('.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('For they that are such serve not our Lord Jesus Christ, but their own belly; and by good words and fair speeches deceive the hearts of the simple.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('For your obedience is come abroad unto all men. I am glad therefore on your behalf: but yet I would have you wise as serpents, and harmless as doves.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And the '),
                hp('God of peace', 'rom16-peace-crush'),
                t(' shall '),
                hp('bruise Satan under your feet', 'rom16-peace-crush'),
                t(' shortly. The grace of our Lord Jesus Christ be with you. Amen.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom16-mark',
          html:
            'Paul&apos;s warning is not abstract. False teachers have already infiltrated the church. They use flattery and smooth words — they are manipulative, they are strategic, they are dangerous. "Mark" them means to notice, to identify, to remember who they are. Do not give them your trust.',
        },
        {
          kind: 'greek',
          id: 'rom16-skandalon',
          title: 'Skandalon — Stumbling Block, Offense',
          script: 'σκάνδαλον',
          translit: '<strong>skandalon</strong> · stumbling block; offense; trap',
          description:
            'The original <em>skandalon</em> was the stick that holds open an animal trap. These teachers are traps — they look like ministers of Christ but they are snares laid to entangle the simple in falsehood.',
        },
        {
          kind: 'commentary',
          id: 'rom16-avoid',
          html:
            'The command is not to debate them, not to refute them endlessly, but to <em>avoid them</em>. Separate from them. Do not let them have a seat in your assembly. Do not drink from their well. The early church was not naive about wolves, and neither should you be.',
        },
        {
          kind: 'commentary',
          id: 'rom16-peace-crush',
          html:
            'Then — suddenly — Paul lifts his eyes from the wolves and fastens them on God. "The God of peace shall bruise Satan under your feet shortly." This is an echo of Genesis 3:15, where the seed of the woman will bruise the serpent&apos;s head. Paul is telling the Romans: you think you are fighting alone. You are not. God is with you. And the victory is already won. Satan&apos;s head will be crushed — <em>shortly</em>, soon, imminently. Not a thousand years away. Now.',
        },
        {
          kind: 'carry',
          html:
            'If you are fighting false teaching in your own congregation, or battling a lie that is eating at your faith, or standing against a deception that is seductive and smooth-worded — you are not alone. The God of peace is with you. Not a god of vengeance, but of peace. And that God is moving against the serpent&apos;s head. You can stand firm.',
        },
        {
          kind: 'reflection',
          id: 'rom16-guard-reflect',
          prompt:
            'What deception or falsehood have you encountered in the church or in your own faith that seemed attractive but was contrary to the doctrine of Christ? How did you learn to recognize it? How did you escape it?',
        },
      ],
    },

    /* ─── Romans 16:25–27 — The Mystery Revealed; Glory to God ──────────────── */
    {
      ref: 'Romans 16:25–27',
      title: 'The Mystery Revealed; Glory to God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            {
              number: 25,
              spans: [
                t('Now to him that is of power to stablish you according to '),
                hg('my gospel', 'rom16-gospel'),
                t(', and the preaching of Jesus Christ, according to the revelation of '),
                hy('the mystery', 'rom16-mysterion'),
                t(', which was '),
                hg('kept secret', 'rom16-kept-secret'),
                t(' since the world began,'),
              ],
            },
            {
              number: 26,
              spans: [
                t('But now is '),
                hp('made manifest', 'rom16-apokalupto'),
                t(', and by the scriptures of the prophets, according to the commandment of the everlasting God, made known to all nations for the obedience of faith:'),
              ],
            },
            {
              number: 27,
              spans: [
                t('To '),
                hg('God only wise', 'rom16-only-wise'),
                t(', be glory '),
                hp('through Jesus Christ', 'rom16-through-christ'),
                t(' for ever. Amen.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom16-gospel',
          html:
            'Paul calls it "my gospel" — not that he invented it, but that it has become the fire of his life. His whole being is consumed with the news that Christ died for sinners and rose again. This gospel is the power by which God will establish the Romans — the foundation they stand on, the rock that will not move.',
        },
        {
          kind: 'greek',
          id: 'rom16-mysterion',
          title: 'Mysterion — Mystery',
          script: 'μυστήριον',
          translit: '<strong>mysterion</strong> · mystery; secret thing; revealed secret',
          description:
            'In biblical Greek, a mystery is not something that will remain secret forever. It is a secret that has been or will be revealed. God&apos;s plan — hidden for ages — is now made known. Christ is that mystery incarnate.',
        },
        {
          kind: 'commentary',
          id: 'rom16-kept-secret',
          html:
            '"Kept secret since the world began" — the plan of salvation through Christ was hidden in God&apos;s mind from the foundation of creation. Not because God was playing games, but because the time had not yet come. Then Jesus came. He died. He rose. And the secret poured out into the world.',
        },
        {
          kind: 'greek',
          id: 'rom16-apokalupto',
          title: 'Apokalupto — To Reveal, Uncover, Unveil',
          script: 'ἀποκαλύπτω',
          translit: '<strong>apokalupto</strong> · to uncover; to unveil; to reveal; to make manifest',
          description:
            'The mystery is no longer hidden. It is <em>apokalupto</em> — uncovered, unveiled, exposed to the light. The veil has been torn. What was hidden is now visible to all who have eyes to see.',
        },
        {
          kind: 'christ',
          id: 'rom16-apokalupto-2',
          title: 'Christ Connection — The Mystery Made Known',
          html:
            'What is the mystery? Christ. His incarnation, His death, His resurrection, His offer of righteousness to all who believe. Paul writes in Colossians: "Christ in you, the hope of glory" (Col. 1:27). The secret that was kept since the world began is this: God Himself, in human flesh, dying for your sins, rising for your justification. That is the gospel. That is the power that will establish you.',
        },
        {
          kind: 'commentary',
          id: 'rom16-only-wise',
          html:
            'Paul closes by directing all glory, all honor, all wisdom to God. Not to the churches, not to the apostles, not to teachers or prophets — to God alone. And not to God in isolation, but to God as He works <em>through Jesus Christ</em>. All the glory flows back to the Father through the Son. The source and the channel, the beginning and the One through whom all things move.',
        },
        {
          kind: 'commentary',
          id: 'rom16-through-christ',
          html:
            'This phrase — "through Jesus Christ" — is the hinge upon which the entire Bible turns. All relationship with God now goes through Christ. Not through temples, not through priests alone, not through rituals. Through the One who is Himself God incarnate, who died, who rose, who stands at the right hand of the Father and opens access to the throne of grace.',
        },
        {
          kind: 'carry',
          html:
            'You have been given the knowledge of the mystery. The gospel has been unveiled to you. This is not a secret to guard jealously but a truth to live by and to share. Stand firm in the doctrine you have learned. Know that God is establishing you through Christ. And when you give glory — when you pray, when you sing, when you live — direct it all back to God, always through Jesus Christ. That is the shape of Christian worship: Father, through the Son, in all eternity.',
        },
        {
          kind: 'reflection',
          id: 'rom16-mystery-reflect',
          prompt:
            'What would it mean in your life to truly live as if you possessed the mystery — that God has made Christ known to you? How would your prayers, your speech, your service change if you really believed it?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'Now to him that is of power to stablish you according to my gospel, and the preaching of Jesus Christ, according to the revelation of the mystery, which was kept secret since the world began, but now is made manifest… To God only wise, be glory through Jesus Christ for ever. Amen.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Romans 16 · Study Guide',
  },

  resources: [
    {
      id: 'topostext-cenchreae',
      kind: 'archaeology',
      source: 'ToposText',
      label: 'Cenchreae (Korinthos)',
      url: 'https://topostext.org/place/383237SCen',
      description: 'Detailed geographical and archaeological record of Cenchreae&apos;s role as a trading port and Christian community site.',
    },
    {
      id: 'ascsa-corinth',
      kind: 'archaeology',
      source: 'ASCSA',
      label: 'Athenian Agora Excavations',
      url: 'https://agora.ascsa.net/',
      description: 'Continuous excavation and digital archive of classical Mediterranean sites, including records on port cities and commerce in Paul&apos;s era.',
    },
  ],

  hasHebrew: false,
};
