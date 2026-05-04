import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Acts 20 — Through Macedonia and Greece; Eutychus Raised; The Farewell at Miletus
 *
 * Paul travels through Macedonia and Greece, strengthening the churches. In Troas,
 * a young man named Eutychus falls asleep during a long night of preaching and tumbles
 * from a third-story window. The disciples believe him dead. Paul goes down, embraces him,
 * and raises him alive. The gospel spreads not only through words but through the power
 * of resurrection—through apostles who know that death itself yields to Christ&apos;s authority.
 * From Troas, Paul makes his way toward Jerusalem, knowing the Spirit has bound him for
 * persecution ahead. At Miletus, he calls the Ephesian elders and delivers a farewell sermon
 * that defines Christian leadership forever: "I am pure from the blood of all men... Feed
 * the church of God, which he hath purchased with his own blood... It is more blessed to give
 * than to receive." Paul kneels with them and weeps. He will see their faces no more.
 */
export const ACTS_20: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 20,

  estimatedMinutes: { beginner: 10, intermediate: 21, deep: 27 },
  intros: [
    'Paul is traveling through Macedonia and Greece, visiting the churches he has planted. His companions are with him—men from Thessalonica, Berea, Galatia, Asia, and beyond. Everywhere he goes, he strengthens the disciples, his presence a kind of visible ministry of encouragement. But as he travels, something is changing inside him. The Spirit has been telling him for weeks that bonds and afflictions await in Jerusalem. He cannot turn back. He cannot protect himself. He is bound in spirit toward a fate he cannot escape.',
    'In Troas, he speaks to the disciples from evening until midnight. A young man named Eutychus sits in an open window, listening. Sleep overtakes him. He falls three stories to the ground and is taken up dead. Paul goes down, lies on him, and embraces him. "Trouble not yourselves," he says, "his life is in him." The disciples bring the young man alive, and the company is not a little comforted. Death has yielded. The power of resurrection flows through Paul&apos;s obedience.',
    'Days later, at Miletus, Paul calls the Ephesian elders to meet him. He knows he will not see their faces again. What pours out is not a lecture. It is a farewell—a distillation of what matters: a clear conscience, a finished course, the gospel of grace, sacrifice, and a saying of Jesus no one else records: "It is more blessed to give than to receive." Paul kneels. They weep together. The apostle, the elders, the disciples embrace. There is no theology quite like a goodbye that knows it is a goodbye.',
  ],

  opener: {
    matchTitle: /paul|farewell|elders|miletus/i,
    caption: 'The Whole Chapter at a Glance',
  },

  sections: [
    /* ─── Acts 20:1–6 — Through Macedonia and Greece ─────────────────────── */
    {
      ref: 'Acts 20:1–6',
      title: 'Traveling and Strengthening',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            verse(
              1,
              t('And after the uproar was ceased, Paul called unto him the disciples, and '),
              hg('embraced them, and departed for to go into Macedonia', 'acts20-embrace'),
              t('.'),
            ),
            verse(
              2,
              t('And when he had gone over those parts, and had given them much exhortation, he came into Greece,'),
            ),
            verse(
              3,
              t('And there abode three months. And when the Jews laid wait for him, as he was about to sail into Syria, he purposed to return through Macedonia.'),
            ),
            verse(
              4,
              t('And there accompanied him into Asia Sopater of Berea; and of the Thessalonians, Aristarchus and Secundus; and Gaius of Derbe, and Timotheus; and of Asia, Tychicus and Trophimus.'),
            ),
            verse(
              5,
              t('These going before tarried for us at Troas.'),
            ),
            verse(
              6,
              t('And we sailed away from Philippi after the days of unleavened bread, and came unto them to Troas in five days; where we abode seven days.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts20-embrace',
          html:
            'Paul is leaving Ephesus, where he has spent nearly three years. The riot of the silversmiths has forced his departure. Before he goes, he embraces the disciples—a gesture of affection and comfort. He will not see most of these faces again. But he does not linger in grief. Instead, he moves forward with purpose. Macedonia and Greece await. Churches planted in recent years need strengthening. The gospel&apos;s momentum cannot stop[res:sefaria-acts-20].',
        },
        {
          kind: 'commentary',
          id: 'acts20-three-months',
          html:
            'Paul spends three months in Greece, traveling among the churches. He is giving them exhortation—calling them deeper, calling them higher. But the Jewish opposition is building. A plot forms. Paul learns of it and changes his route. Instead of sailing directly to Syria, he will return through Macedonia. The path is longer, but it keeps him alive.',
        },
        {
          kind: 'commentary',
          id: 'acts20-companions',
          html:
            'A remarkable list: Sopater from Berea, Aristarchus and Secundus from Thessalonica, Gaius from Derbe, Timothy, Tychicus and Trophimus from Asia. These are not nameless travelers. They are Paul&apos;s gospel partners, men he has mentored and discipled, men who carry the gospel forward with him. They represent the fruit of his ministry—not a one-man show, but a movement carried by many hands.',
        },
        {
          kind: 'carry',
          html:
            'Paul does not travel alone, and neither should you. The names of his companions matter. The men and women who strengthen you on the journey, who travel with you toward Christ, who stand when you stand—their presence is the gospel made visible. Notice who travels with you. Cherish them. You are not meant to walk the faith alone.',
        },
        {
          kind: 'reflection',
          id: 'acts20-companions-reflect',
          prompt:
            'Who strengthens you as you follow Christ? How are you strengthening them, and how are they strengthening you?',
        },
      ],
    },

    /* ─── Acts 20:7–12 — Eutychus Raised ───────────────────────────────── */
    {
      ref: 'Acts 20:7–12',
      title: 'Eutychus Falls; Eutychus Rises',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            verse(
              7,
              t('And upon the first day of the week, when the disciples came together to break bread, Paul preached unto them, ready to depart on the morrow; and '),
              hy('continued his speech until midnight', 'acts20-agrupneō'),
              t('.'),
            ),
            verse(
              8,
              t('And there were many lights in the upper chamber, where they were gathered together.'),
            ),
            verse(
              9,
              t('And there sat in a window a certain young man named Eutychus, being fallen into a deep sleep: and as Paul was long preaching, he sunk down with sleep, and '),
              hg('fell down from the third loft, and was taken up dead', 'acts20-death'),
              t('.'),
            ),
            verse(
              10,
              t('And Paul went down, and '),
              hp('fell on him, and embracing him said, Trouble not yourselves; for his life is in him', 'acts20-raising'),
              t('.'),
            ),
            verse(
              11,
              t('When therefore he was come up again, and had broken bread, and eaten, and talked a long while, even till break of day, he departed.'),
            ),
            verse(
              12,
              t('And they brought the young man alive, and '),
              hg('were not a little comforted', 'acts20-comfort'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts20-breaking-bread',
          html:
            'Paul and the disciples gather on the first day of the week—the Lord&apos;s Day—to break bread[res:didache-eucharist]. This is the central act of Christian worship: remembering Jesus through the breaking of bread, the outpouring of wine, the shared meal. Paul knows he is leaving tomorrow. He will not gather with these people again. So he preaches until midnight. He has much to say. His final hours with them matter.',
        },
        {
          kind: 'greek',
          id: 'acts20-agrupneō',
          title: 'Agrupneō — Watch; Be Wakeful',
          script: 'ἀγρυπνέω',
          translit: '<strong>agrupneō</strong> · to be sleepless; to watch all night; to keep vigil',
          description:
            'Paul continues speaking—not just preaching, but continuing, persisting, staying awake to speak the gospel until midnight and beyond. His watchfulness stands in sharp contrast to Eutychus&apos; sleepiness. The apostle is awake to the moment; the young man cannot stay awake.',
        },
        {
          kind: 'commentary',
          id: 'acts20-death',
          html:
            'Eutychus sits in a window. Sleep overcomes him. He does not wake. He falls three stories and is taken up dead. Not injured. Not barely alive. Dead. The disciples believe it. The fact is as final as a stone. And yet the dead will not stay dead when the risen Jesus is present through His apostle.',
        },
        {
          kind: 'commentary',
          id: 'acts20-raising',
          html:
            'Paul goes down. He falls on the young man. He embraces him. His action echoes Elijah raising the widow&apos;s son in 1 Kings 17, and Elisha raising the Shunnamite&apos;s son in 2 Kings 4. The apostolic ministry carries the power to restore what death has taken. Paul does not pray first. He does not lay hands in a formal way. He goes down and embraces the body. And he speaks: "His life is in him." The word of an apostle who has encountered the risen Jesus is enough.',
        },
        {
          kind: 'commentary',
          id: 'acts20-comfort',
          html:
            'The disciples are not a little comforted. The weight lifts. Eutychus is alive. Paul returns upstairs, breaks bread with them, eats, talks until break of day. He departs having given them not just a sermon but a sign—a visible reminder that the risen Jesus is Lord over death, and that His power flows through His servants to comfort and restore.',
        },
        {
          kind: 'christ',
          id: 'acts20-christ-eutychus',
          title: 'Christ Connection — The Raising of the Dead Continues',
          html:
            'Jesus raised the dead—He called Lazarus from his tomb (John 11:43–44), He raised Jairus&apos; daughter by taking her hand (Mark 5:41), He awakened the widow&apos;s son at Nain (Luke 7:14–15). Paul&apos;s raising of Eutychus shows that power continuing in the church. The risen Jesus is not confined to His own ministry on earth. He works through His apostles. Death yields to His authority wherever His name is spoken in faith.',
        },
        {
          kind: 'carry',
          html:
            'Eutychus&apos; fall is not punishment; it is mercy. He falls asleep, not from willful neglect, but from the weight of the hour. We are all prone to sleep when we should be awake—spiritually drowsy, missing what God is speaking, falling when we should be standing. If you find yourself on the ground, do not despair. The apostolic church is still here. Christ is still alive. His power to raise still flows through those who speak His name in faith and embrace you where you lie.',
        },
        {
          kind: 'reflection',
          id: 'acts20-eutychus-reflect',
          prompt:
            'Where have you fallen asleep spiritually? Where do you need to be raised, embraced, and reminded that you are alive in Christ?',
        },
        {
          kind: 'artwork',
          matchTitle: /eutychus|fall|raise|window/i,
          caption: 'Acts 20:7–12 · Eutychus Raised',
        },
      ],
    },

    /* ─── Acts 20:13–16 — Bound in the Spirit ────────────────────────────── */
    {
      ref: 'Acts 20:13–16',
      title: 'Bound in the Spirit',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            verse(
              13,
              t('And we went before to ship, and sailed unto Assos, there intending to take in Paul: for so had he appointed, minding himself to go afoot.'),
            ),
            verse(
              14,
              t('And when he met with us at Assos, we took him in, and came to Mitylene.'),
            ),
            verse(
              15,
              t('And we sailed thence, and came the next day over against Chios; and the next day we arrived at Samos, and tarried at Trogyllium; and the next day we came to Miletus.'),
            ),
            verse(
              16,
              t('For Paul had determined to sail by Ephesus, because he would not spend the time in Asia: for he hasted, as though he were '),
              hy('bound in the spirit unto Jerusalem', 'acts20-desmeutos'),
              t(', not knowing the things that should befall him there.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts20-bound-spirit',
          html:
            'Paul is bound in the spirit toward Jerusalem. He does not know what awaits him. The Spirit has told him in every city that bonds and afflictions await. Yet he presses forward as though pulled by an invisible cord. This is not compulsion that removes his will. Rather, it is alignment—his will has become one with God&apos;s will, and he moves toward the Father&apos;s purpose even though he cannot see past the next city.',
        },
        {
          kind: 'greek',
          id: 'acts20-desmeutos',
          title: 'Desmeutos — Bound; Imprisoned',
          script: 'δέσμιος',
          translit: '<strong>desmeutos</strong> · bound; imprisoned; chained',
          description:
            'The word literally means "imprisoned" or "bound in chains." Paul is bound not by chains, but by the Spirit. The external bondage awaiting him in Jerusalem mirrors an inward binding that is already at work. He is a prisoner of Christ in the truest sense.',
        },
        {
          kind: 'commentary',
          id: 'acts20-haste',
          html:
            'Paul hastens. He does not linger. He passes by Ephesus—the city where he spent nearly three years, where the church is strong, where his heart is—because he is consumed by the calling forward. The geography of his journey becomes a map of his obedience. Every mile is intentional. Every day is moving him toward the crucible.',
        },
        {
          kind: 'carry',
          html:
            'You may feel bound by the Spirit toward something difficult—a conversation you need to have, a change you need to make, a truth you need to speak. You may not see the end of the road. You may know danger awaits. But the binding of the Spirit is not a punishment. It is the greatest dignity: to be caught up in God&apos;s purpose, even when it costs everything. When you feel that binding, do not fight it. Hasten toward it.',
        },
        {
          kind: 'reflection',
          id: 'acts20-spirit-bind-reflect',
          prompt:
            'Where do you feel the Spirit binding you toward something difficult? What would it mean to hasten toward that calling rather than away from it?',
        },
      ],
    },

    /* ─── Acts 20:17–27 — The Farewell Begins ─────────────────────────────── */
    {
      ref: 'Acts 20:17–27',
      title: 'I Am Pure from the Blood of All Men',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            verse(
              17,
              t('And from Miletus he sent to Ephesus, and called the elders of the church.'),
            ),
            verse(
              18,
              t('And when they were come to him, he said unto them, Ye know, from the first day that I came into Asia, after what manner I have been with you at all seasons,'),
            ),
            verse(
              19,
              t('Serving the Lord with all humility of mind, and with many tears, and temptations which befell me by the lying in wait of the Jews:'),
            ),
            verse(
              20,
              t('And how I '),
              hg('kept back nothing that was profitable unto you, but have shewed you, and have taught you publicly, and from house to house', 'acts20-nothing-back'),
              t(','),
            ),
            verse(
              21,
              t('Testifying both to the Jews, and also to the Greeks, repentance toward God, and faith toward our Lord Jesus Christ.'),
            ),
            verse(
              22,
              t('And now, behold, I go bound in the spirit unto Jerusalem, not knowing the things that shall befall me there:'),
            ),
            verse(
              23,
              t('Save that the Holy Ghost witnesseth in every city, saying that '),
              hg('bonds and afflictions abide me', 'acts20-bonds-afflictions'),
              t('.'),
            ),
            verse(
              24,
              t('But none of these things move me, neither count I my life dear unto myself, so that I might finish my course with joy, and the ministry, which I have received of the Lord Jesus, to testify the gospel of the grace of God.'),
            ),
            verse(
              25,
              t('And now, behold, I know that ye all, among whom I have gone preaching the kingdom of God, shall see my face no more.'),
            ),
            verse(
              26,
              t('Wherefore I take you to record this day, '),
              hp('that I am pure from the blood of all men', 'acts20-pure-blood'),
              t('.'),
            ),
            verse(
              27,
              t('For I have not shunned to declare unto you all the counsel of God.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts20-summoned',
          html:
            'From Miletus, Paul sends messengers to Ephesus, summoning the elders. They come to him. What unfolds is not a business meeting but a ministry review—one apostle speaking to those he&apos;s trained to carry the gospel forward. The tone is tender and clear. Paul is making a record. Miletus, the seaport of Ephesus, has been excavated extensively[res:ascsa-agora-miletus], revealing the harbor where Paul would have arrived and the theater where such gatherings might have occurred.',
        },
        {
          kind: 'commentary',
          id: 'acts20-nothing-back',
          html:
            'Paul recalls his ministry among them. He has held back nothing. Public teaching and private house-to-house ministry—no filtering, no performance for the crowds and reserve at home. He has given everything. The consistency of his witness in every setting is his claim on their hearts now.',
        },
        {
          kind: 'commentary',
          id: 'acts20-bonds-afflictions',
          html:
            'The Spirit has testified repeatedly: bonds and afflictions await in Jerusalem. Paul is not naive. He has heard the warning in every city. Yet he goes anyway. Not in despair, but in clarity. He knows the cost. He has counted it. And it does not move him. This is the clarity of a man who has lost everything and found that nothing matters except finishing the course.',
        },
        {
          kind: 'greek',
          id: 'acts20-douleuō',
          title: 'Douleuō — Serve; Be a Servant',
          script: 'δουλεύω',
          translit: '<strong>douleuō</strong> · to serve; to be enslaved; to be a slave',
          description:
            'Paul serves with all humility. Not a hired servant, but a slave—someone who has given ownership of himself entirely to the Lord. This kind of service is not degrading; it is liberation. To serve Christ is to be wholly His.',
        },
        {
          kind: 'commentary',
          id: 'acts20-pure-blood',
          html:
            'I am pure from the blood of all men. What does this mean? It means Paul has declared the whole counsel of God. He has not soft-pedaled the gospel for comfort. He has not withheld the hard truths to avoid persecution. Every person who hears him hears the whole gospel. Therefore, if any of them perish in their sins, that blood is not on Paul&apos;s hands. He has given them everything. The responsibility is now theirs.',
        },
        {
          kind: 'carry',
          html:
            'Paul is taking a record. He is making it plain: I have held back nothing. I have withheld no word that could save you. This is the conscience of a pastor who knows he cannot save anyone, but he can be faithful to speak the whole truth. When you are tempted to soften a message for comfort, to hide a truth for approval, remember Paul&apos;s declaration. Be pure from the blood of all men. Speak what you have been given to speak.',
        },
        {
          kind: 'reflection',
          id: 'acts20-pure-reflect',
          prompt:
            'Is there a truth you have withheld from someone because you were afraid of their response? What would it mean to become "pure from their blood"?',
        },
      ],
    },

    /* ─── Acts 20:28–31 — Feed the Church of God ─────────────────────────── */
    {
      ref: 'Acts 20:28–31',
      title: 'Feed the Church of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            verse(
              28,
              t('Take heed therefore unto yourselves, and to all the flock over the which the Holy Ghost hath made you overseers, to '),
              hp('feed the church of God, which he hath purchased with his own blood', 'acts20-blood-purchased'),
              t('.'),
            ),
            verse(
              29,
              t('For I know this, that after my departing shall '),
              hg('grievous wolves enter in among you, not sparing the flock', 'acts20-wolves'),
              t(':'),
            ),
            verse(
              30,
              t('Also of your own selves shall men arise, speaking perverse things, to draw away disciples after them.'),
            ),
            verse(
              31,
              t('Therefore watch, and remember, that by the space of three years I ceased not to warn every one night and day with tears.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts20-overseers',
          html:
            'The elders are <em>overseers</em>—pastors, bishops, those who shepherd the flock. But Paul reminds them: you did not make yourselves overseers. The Holy Ghost made you. You are not in charge. You are caretakers of something that belongs to Christ. Your role is to feed, to guard, to shepherd. The weight of the office is not authority—it is responsibility.',
        },
        {
          kind: 'greek',
          id: 'acts20-episkopos',
          title: 'Episkopos — Overseer; Bishop',
          script: 'ἐπίσκοπος',
          translit: '<strong>episkopos</strong> · an overseer; a bishop; one who watches over',
          description:
            'The word means literally "one who watches over." An episkopos does not rule from on high. He watches over the flock, tends them, protects them from harm. The image is pastoral, not regal.',
        },
        {
          kind: 'commentary',
          id: 'acts20-blood-purchased',
          html:
            'The church is purchased with Christ&apos;s own blood. Not with gold, not with institutional power, not with human cleverness. Blood. The cost was infinite. Therefore, anyone who shepherds the church must understand: this is not a club you manage. This is Christ&apos;s body, bought at the price of His life. Your calling is to love it as He loves it, to guard it as He guards it.',
        },
        {
          kind: 'greek',
          id: 'acts20-peripoieō',
          title: 'Peripoieō — Purchase; Acquire; Make One&apos;s Own',
          script: 'περιποιέω',
          translit: '<strong>peripoieō</strong> · to acquire; to purchase; to save for oneself',
          description:
            'Christ purchased the church—acquired it, made it His own possession, saved it. The church belongs to Christ. Not to a pastor, not to inherited custom, not to a label on a building. To Christ alone, purchased by His blood.',
        },
        {
          kind: 'commentary',
          id: 'acts20-wolves',
          html:
            'Grievous wolves. Not sheep wearing sheep&apos;s clothing, but wolves—predators whose nature is to devour. Paul is not being paranoid. He is being prophetic. He sees the danger. From outside will come false teachers. From inside will come those who distort the gospel to gather followers for themselves. The shepherd&apos;s job is to know the difference between wolves and sheep, and to protect the flock.',
        },
        {
          kind: 'greek',
          id: 'acts20-lykos',
          title: 'Lykos — Wolf; Predator',
          script: 'λύκος',
          translit: '<strong>lykos</strong> · a wolf; a beast of prey; a predator',
          description:
            'The wolf is the natural enemy of the flock. It does not negotiate. It does not belong in the fold. When wolves come in, the shepherd&apos;s duty is clear: stand against them, even if it costs him his peace.',
        },
        {
          kind: 'commentary',
          id: 'acts20-tears-watch',
          html:
            'Paul has warned them for three years with tears. Not harshly, not in anger, but in weeping love. He has stayed awake, calling them to stay awake. The shepherd who cares most will sometimes be the least popular, because he will name the danger no one else wants to name. Paul is modeling what faithfulness looks like at the end.',
        },
        {
          kind: 'christ',
          id: 'acts20-christ-shepherd',
          title: 'Christ Connection — The Chief Shepherd',
          html:
            'Jesus said, "I am the good shepherd: the good shepherd giveth his life for the sheep" (John 10:11). He purchased the church with His own blood. Peter will later write to the elders of the churches: "Feed the flock of God... as a pattern to the flock... And when the chief Shepherd shall appear, ye shall receive a crown of glory that fadeth not away" (1 Peter 5:2–4). Paul passes this calling to the Ephesian elders. They are under-shepherds of the Chief Shepherd, Jesus.',
        },
        {
          kind: 'carry',
          html:
            'If you are in any position of leadership—in a church, in a family, in a school, in an organization—remember: you did not appoint yourself. You are a caretaker of something purchased at great cost. The flock belongs to Christ. Your job is not to build your name or gather followers. It is to feed them, protect them, warn them of danger, and point them always to the Chief Shepherd. Do this with tears if necessary. Do this even when you are not applauded.',
        },
        {
          kind: 'reflection',
          id: 'acts20-wolves-reflect',
          prompt:
            'Where do you see wolves threatening the flock—false teaching, predatory behavior, division? As a believer, what is your role in guarding the church?',
        },
      ],
    },

    /* ─── Acts 20:32–35 — More Blessed to Give ────────────────────────────── */
    {
      ref: 'Acts 20:32–35',
      title: 'More Blessed to Give',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            verse(
              32,
              t('And now, brethren, I commend you to God, and to the word of his grace, which is able to build you up, and to give you an inheritance among all them which are sanctified.'),
            ),
            verse(
              33,
              t('I have coveted no man&apos;s silver, or gold, or apparel.'),
            ),
            verse(
              34,
              t('Yea, ye yourselves know, that these hands have ministered unto my necessities, and to them that were with me.'),
            ),
            verse(
              35,
              t('I have shewed you all things, how that so labouring ye ought to support the weak: and to remember the words of the Lord Jesus, how he said, '),
              hp('It is more blessed to give than to receive', 'acts20-agraphon'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts20-commend-god',
          html:
            'Paul commends them to God and to the word of His grace. Not to himself. Not to the memory of his ministry. To God alone. The word of grace is able to build them up, to give them an inheritance. The Word of God—not Paul, not any apostle, not any institution—is the bedrock on which they must stand.',
        },
        {
          kind: 'commentary',
          id: 'acts20-covet',
          html:
            'Paul has coveted nothing. No money, no fine clothes, no comfort. He has supported himself by making tents. He has given his strength, his time, his very life. He has nothing to show for it except the gospel spread and lives changed. And this, somehow, is the evidence of his integrity. A leader who covets nothing is a leader who can be trusted.',
        },
        {
          kind: 'commentary',
          id: 'acts20-hands-serve',
          html:
            'These hands have ministered—not just in preaching, but in working. Paul did not float above his circumstances as some kind of spiritual elite. He made tents. He worked with his hands. He provided for himself and for those with him. The apostle who declared the gospel was also the worker who paid his own way.',
        },
        {
          kind: 'greek',
          id: 'acts20-chara-giving',
          title: 'Chara — Joy; Gladness',
          script: 'χαρά',
          translit: '<strong>chara</strong> · joy; gladness; delight',
          description:
            'It is more blessed to give. The word "blessed" carries the sense of joy and gladness. There is a joy in giving that receiving cannot match. The giver experiences the full joy of having something to offer.',
        },
        {
          kind: 'commentary',
          id: 'acts20-agraphon',
          html:
            'This saying of Jesus—"It is more blessed to give than to receive"—appears nowhere else in the four Gospels. It is an unwritten saying, an agraphon, preserved only in Paul&apos;s recollection. Paul heard it, remembered it, treasured it. Now, in his farewell, he passes it on. These elders must learn what Paul has learned: the blessing is in the giving, not the receiving. A church built on that principle will be unstoppable.',
        },
        {
          kind: 'christ',
          id: 'acts20-christ-agraphon',
          title: 'Christ Connection — The Precious Agraphon',
          html:
            'Jesus said, "It is more blessed to give than to receive." This saying does not appear in Matthew, Mark, Luke, or John. It survives only because Paul remembered it, treasured it, and passed it on. It is one of the most precious sayings of Christ—not because it is obscure, but because it is preserved only in the memory and faithfulness of the apostles. The church lives by these sayings, whether written in the Gospels or entrusted to the memory of those who walked with Jesus.',
        },
        {
          kind: 'carry',
          html:
            'You may not have much to give. You may feel poor in resources, poor in talent, poor in standing. But everyone can give. Paul gave his hands, his sweat, his sleepless nights, his tears. The blessing is not in the size of the gift but in the willingness to give it. Find what you can give—time, prayer, encouragement, a listening ear. Give it freely. That is where the real blessing lives.',
        },
        {
          kind: 'reflection',
          id: 'acts20-give-reflect',
          prompt:
            'What can you give that costs you something? How might receiving the joy of giving change the way you live this week?',
        },
      ],
    },

    /* ─── Acts 20:36–38 — Kneeling and Weeping ────────────────────────────── */
    {
      ref: 'Acts 20:36–38',
      title: 'Kneeling and Weeping',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            verse(
              36,
              t('And when he had thus spoken, he '),
              hg('kneeled down, and prayed with them all', 'acts20-kneel'),
              t('.'),
            ),
            verse(
              37,
              t('And they all wept sore, and '),
              hg('fell on Paul&apos;s neck, and kissed him', 'acts20-farewell-kiss'),
              t(','),
            ),
            verse(
              38,
              t('Sorrowing most of all for the words which he spake, that they should see his '),
              hg('face no more', 'acts20-see-no-more'),
              t('. And they accompanied him unto the ship.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts20-kneel',
          html:
            'Paul kneels. After all the words, all the exhortation, all the teaching, he kneels. Prayer is not the conclusion to ministry; it is the essence of it. He prays with them. Not for them alone, but <em>with</em> them. The pastor kneels with the flock, not above them.',
        },
        {
          kind: 'commentary',
          id: 'acts20-sore-weeping',
          html:
            'They weep sore—a great weeping. Men and women who have been taught by Paul, who have seen him face-to-face, who have heard the gospel from his lips now weep because they know they will not see him again. He is leaving them. Not for a season, but forever. The finality breaks open their hearts.',
        },
        {
          kind: 'commentary',
          id: 'acts20-farewell-kiss',
          html:
            'They fall on his neck and kiss him. This is not the formal kiss of greeting. This is the embrace of goodbye. Each elder steps forward, wraps his arms around Paul, kisses him. Some embrace him more than once. The physical affection says what words cannot: You matter. You have shaped us. Your leaving breaks our hearts. Will you remember us?',
        },
        {
          kind: 'commentary',
          id: 'acts20-see-no-more',
          html:
            'They sorrow most of all because they will see his face no more. The word "face" is key. It is not enough to hear from Paul at a distance, to receive a letter, to hear about his ministry. They wanted his <em>face</em>—his presence, his eyes, his acknowledgment of them as people he knows and loves. And now that face will never appear to them again.',
        },
        {
          kind: 'carry',
          html:
            'Paul does not leave them with a slogan or a charge without tears. He leaves them with his knees bent, his prayers offered, and his willingness to be embraced. If you are called to lead, to teach, to shepherd—do not leave your people without kneeling with them in prayer. Do not go without letting them see your heart break for them. The words matter. The deeds matter. But the tears matter most. They prove the love was real.',
        },
        {
          kind: 'reflection',
          id: 'acts20-face-reflect',
          prompt:
            'Who in your life has shaped you by their presence—their actual face, their actual voice? How can you honor that relationship while you still have the chance?',
        },
      ],
    },

    /* ─── Acts 20 — Summary and Promise ────────────────────────────────────── */
    {
      ref: 'Acts 20',
      title: 'The Binding of the Spirit',
      blocks: [
        {
          kind: 'commentary',
          id: 'acts20-conclusion',
          html:
            'Acts 20 is a chapter about what happens when an apostle knows the end is coming. Paul knows Jerusalem will end in persecution, possibly death. The Spirit has told him plainly: bonds and afflictions await. And yet he does not run. He does not hide. He travels toward it, strengthening churches along the way. He raises the dead—a sign that the power of resurrection flows through those who have met the risen Jesus. He gives his farewell, his clearest statement of what matters: speak the whole counsel of God, feed the flock with your own hands, guard against wolves, give yourself away, kneel and weep with your people. Then he leaves them. They accompany him to the ship, weeping because they know they will never see his face again.',
        },
        {
          kind: 'divider',
        },
        {
          kind: 'commentary',
          id: 'acts20-binding-power',
          html:
            'The binding of the Spirit is not a constraint that limits Paul. It is an alignment so complete that his will and God&apos;s will become one. He is bound in spirit toward Jerusalem—and he moves toward it with clarity, purpose, and even joy. He knows what awaits. He does not know if he will survive. But he knows his course, and he finishes it. This is what faithfulness looks like. This is what it means to be "bound in the spirit."',
        },
        {
          kind: 'carry',
          html:
            'You may be in a season where the path ahead is clear but the destination is frightening. You may feel bound by the Spirit toward something that requires everything you have to give. That binding is not punishment. It is purpose. It is the highest calling: to be so caught up in God&apos;s intention that nothing else moves you—not fear, not comfort, not the opinions of those you love. When you feel that binding, remember Paul. He goes toward Jerusalem weeping, but he goes. He finishes his course. And he leaves behind not a legacy of monuments but of changed hearts, fed flocks, and disciples who will carry the gospel forward.',
        },
        {
          kind: 'reflection',
          id: 'acts20-final-reflect',
          prompt:
            'What is one way the binding of the Spirit is calling you forward right now? How will you honor that calling this week?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I am pure from the blood of all men. Feed the church of God, which he hath purchased with his own blood. It is more blessed to give than to receive.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 20 · Study Guide',
  },

  resources: [
    {
      id: 'didache-eucharist',
      kind: 'study',
      source: 'Early Christian Writings',
      label: 'Didache: Teaching on the Eucharist',
      url: 'https://www.earlychristianwritings.com/didache.html',
      description: 'Early apostolic manual describing the breaking of bread and agape meal as core Christian practice, contemporary with Paul&apos;s era.',
    },
    {
      id: 'ascsa-agora-miletus',
      kind: 'archaeology',
      source: 'ASCSA',
      label: 'Miletus Excavations',
      url: 'https://agora.ascsa.net/',
      description: 'Ongoing excavations of the Miletus harbor and theater complex where Paul&apos;s farewell to the Ephesian elders likely took place.',
    },

  ],

  hasHebrew: false,
};
