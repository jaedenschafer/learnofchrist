import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Philippians 1 — Living Is Christ; Dying Is Gain
 *
 * "For to me to live is Christ, and to die is gain." Philippians is written
 * from prison. Yet it is perhaps the most joyful of Paul&apos;s letters. He
 * has found a perspective that renders his circumstances almost irrelevant.
 * Christ is so central that whether he lives or dies matters less than the
 * fact of Christ. This is not escapism. It is the deepest realism.
 */
export const PHILIPPIANS_1: RichChapterContent = {
  bookSlug: 'philippians',
  bookName: 'Philippians',
  chapter: 1,

  intros: [
    'Paul writes to the Philippians from a Roman prison, awaiting trial. The charge is uncertain. Death is possible. Yet he opens not with fear but with joy: "I rejoice, yea, and will rejoice." This is not denial. This is what happens when a human being discovers that Christ is more real than circumstance.',
    'Philippians 1 reveals that Paul&apos;s chief concern is not his own safety or comfort. It is the advance of the gospel. Whether he lives or dies, whether he is released or condemned, the gospel moves forward. And for a believer who grasps this truth—that Christ is greater than circumstance—indestructible joy becomes possible.',
  ],

  opener: {
    matchTitle: /paul.*prison|apostle.*chains/i,
    caption: 'Christ in the Cell',
  },

  bottomShare: {
    label: 'Share Philippians 1',
    quote:
      'To live is Christ, and to die is gain. Paul finds unshakeable joy in prison because his entire life is centered on Christ. Whether circumstances favor him or oppose him, Christ remains supreme.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Philippians 1 · Study Guide',
  },

  sections: [
    /* ─── Philippians 1:1–2 — Greeting ────────────────────────────────── */
    {
      ref: 'Philippians 1:1–2',
      title: 'Grace and Peace from Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'Paul and Timotheus, the servants of Jesus Christ, to all the saints in Christ Jesus which are at Philippi, with the bishops and deacons:'),
            {
              number: 2,
              spans: [
                t('Grace be unto you, and peace, from God our Father and from the Lord '),
                hp('Jesus Christ', 'p1-christ-greeting'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'p1-serve',
          html:
            'Paul calls himself and Timothy "servants of Jesus Christ." The Greek word is <em>doulos</em>, a slave—the strongest possible word for submission. Paul does not apologize for this. To be enslaved to Christ is freedom itself.',
        },
        {
          kind: 'christ',
          id: 'p1-christ-greeting',
          title: 'Christ Connection — The Source of Peace',
          html:
            'Grace and peace flow "from God our Father <em>and</em> from the Lord Jesus Christ." This is not poetic parallelism—it is a theological claim. Christ is not merely a messenger of grace and peace. He is a co-source. The same grace that comes from the Father comes from the Son. Peace is mediated through both. In the Gospel of John, Jesus says, "Peace I leave with you, my peace I give unto you" (John 14:27). The peace Paul greets the Philippians with is Christ&apos;s own peace.',
        },
        {
          kind: 'carry',
          html:
            'When you open your day, you stand where the Philippians stood: under the greeting of grace and peace from the living God and from Christ. This greeting is not ceremonial. It is a transfer of something real. Before you face anything else, you are greeted by the peace of the one who has already overcome the world.',
        },
        {
          kind: 'reflection',
          id: 'p1-greeting-reflect',
          prompt:
            'What would it mean to genuinely receive grace and peace from Christ as your first act each morning? How would that reframe what you face?',
        },
      ],
    },

    /* ─── Philippians 1:3–8 — Gratitude and Confidence ─────────────────── */
    {
      ref: 'Philippians 1:3–8',
      title: 'Rejoicing with Thanksgiving',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 3,
              spans: [
                t('I thank my God upon every '),
                hy('remembrance', 'p1-mneia'),
                t(' of you,'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Always in every prayer of mine for you all making request with joy,'),
              ],
            },
            {
              number: 5,
              spans: [
                t('For your '),
                hy('fellowship', 'p1-koinonia'),
                t(' in the gospel from the first day until now;'),
              ],
            },
            {
              number: 6,
              spans: [
                t('Being confident of this very thing, that '),
                hp('he which hath begun a good work in you will perform it until the day of Jesus Christ', 'p1-epitelei'),
                t(':'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Even as it is meet for me to think this of you all, because I have you in my '),
                hg('heart', 'p1-heart'),
                t('; inasmuch as both in my bonds, and in the defence and confirmation of the gospel, ye all are partakers of my grace.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('For God is my record, how greatly I long after you all in the '),
                hy('bowels', 'p1-splanchna'),
                t(' of Jesus Christ.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'p1-mneia',
          html:
            'Paul does not merely think of the Philippians in passing. He remembers them before God in prayer. Their faithfulness is not lost on him. This is what leadership looks like: noticing, thanking, praying.',
        },
        {
          kind: 'greek',
          id: 'p1-chara',
          title: 'Chara — "Joy"',
          script: 'χαρά',
          translit: '<strong>chara</strong> · joy; gladness; delight; rejoicing',
          description:
            'Joy in Scripture is not mere happiness dependent on pleasant circumstances. It is a deep gladness rooted in gratitude, in confidence in God, in the knowledge that ultimately all is well. Paul prays "with joy" from a prison cell.',
        },
        {
          kind: 'greek',
          id: 'p1-koinonia',
          title: 'Koinonia — "Fellowship"',
          script: 'κοινωνία',
          translit: '<strong>koinonia</strong> · fellowship; partnership; sharing; participation',
          description:
            'Not mere social friendship. Koinonia means a deep sharing in something—here, in the gospel itself. The Philippians are not distant supporters. They are partners with Paul in the advancement of Christ&apos;s message.',
        },
        {
          kind: 'commentary',
          id: 'p1-epitelei',
          html:
            'Paul is "confident" (pepeithenai) that God who began the good work will "perform" (epitelei) it. The Greek verb suggests completion, perfection, bringing something to fulfillment. This is not mere hope; it is deep confidence in God&apos;s faithfulness.',
        },
        {
          kind: 'christ',
          id: 'p1-christ-completer',
          title: 'Christ Connection — The Faithful Completer',
          html:
            'The work begun in believers will be "performed until the day of Jesus Christ." This echoes Hebrews 12:2, where Jesus is called the one who "finisheth our faith" (teleiotes)—the completer, the finisher. The same Greek root (telos, completion) runs through both passages. Christ is not only the one who initiates salvation but the one who brings it to its destined end. No work He begins ever remains unfinished.',
        },
        {
          kind: 'commentary',
          id: 'p1-heart',
          html:
            '"I have you in my heart." Paul does not see the Philippians as distant, abstract recipients of his ministry. They are in his heart—a phrase that speaks of deep affection and intimate connection, even across the barrier of a prison wall.',
        },
        {
          kind: 'greek',
          id: 'p1-splanchna',
          title: 'Splanchna — "Bowels" (Heart, Compassion)',
          script: 'σπλάγχνα',
          translit: '<strong>splanchna</strong> · bowels; inner organs; heart; affections; compassion',
          description:
            'Ancient people located emotion in the bowels, not the brain. To long after someone "in the bowels of Jesus Christ" is to long for them with the deepest, most tender compassion—Christ&apos;s own compassion.',
        },
        {
          kind: 'carry',
          html:
            'Paul prays for you with joy. He remembers you before God. He has you in his heart, even from prison. This tells you something crucial: the bonds between believers—especially between a pastor and those entrusted to his care—are real, unbreakable, and rooted in Christ. You are not forgotten. You are not distant. You are in someone&apos;s heart right now.',
        },
        {
          kind: 'reflection',
          id: 'p1-joy-reflect',
          prompt:
            'Paul rejoices with genuine joy from prison. What is keeping you from joining him in that joy? Is there a circumstance you need to release?',
        },
      ],
    },

    /* ─── Philippians 1:9–11 — Love and Discernment ──────────────────── */
    {
      ref: 'Philippians 1:9–11',
      title: 'Growing in Knowledge and Judgment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 9,
              spans: [
                t('And this I pray, that your '),
                hy('love may abound yet more and more', 'p1-abound'),
                t(' in knowledge and in all judgment;'),
              ],
            },
            {
              number: 10,
              spans: [
                t('That ye may approve things that are excellent; that ye may be '),
                hg('sincere', 'p1-sincere'),
                t(' and without offence till the day of Christ;'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Being filled with the fruits of righteousness, which are by Jesus Christ, unto the glory and praise of God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'p1-abound',
          html:
            '"Your love may abound yet more and more in knowledge and in all judgment." Paul does not ask for mere emotional effusiveness or blind sentiment. He asks that love grow—overflow—and be paired with knowledge and discernment. Growing love requires growing understanding. A love without knowledge becomes naive. Knowledge without love becomes cold.',
        },
        {
          kind: 'commentary',
          id: 'p1-sincere',
          html:
            'The Greek word <em>eilikrines</em> originally meant "tested in sunlight"—pure, unmixed. To be sincere is to be without mixture, without hidden agendas, without the tendency to compromise truth for comfort. The believer is called to be pure light.',
        },
        {
          kind: 'christ',
          id: 'p1-christ-fruit',
          title: 'Christ Connection — Christ as the Vine',
          html:
            'The fruits of righteousness "are by Jesus Christ." In John 15, Jesus says, "I am the vine, ye are the branches… As the branch cannot bear fruit of itself, except it abide in the vine; no more can ye, except ye abide in me" (John 15:4–5). The fruit of the believer—righteousness, love, judgment—flows not from self-effort but from abiding in Christ. To be "filled with the fruits of righteousness" is to be so connected to Christ that His character naturally flows through you.',
        },
        {
          kind: 'carry',
          html:
            'You are being asked to love more deeply—but never blindly. To grow in knowledge—so that your love becomes wise. To become sincere—transparent, without hidden corners. Not because it is self-improvement. But because the fruit of righteousness flows from Christ into a life that stays connected to Him.',
        },
        {
          kind: 'reflection',
          id: 'p1-fruit-reflect',
          prompt:
            'Where is your love blind right now? What knowledge or discernment do you need to ask God for?',
        },
      ],
    },

    /* ─── Philippians 1:12–14 — Persecution Unto Furtherance ──────────── */
    {
      ref: 'Philippians 1:12–14',
      title: 'Bonds That Serve the Gospel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 12,
              spans: [
                t('But I would ye should understand, brethren, that the things which happened unto me have '),
                hp('fallen out rather unto the furtherance of the gospel', 'p1-furtherance'),
                t(';'),
              ],
            },
            {
              number: 13,
              spans: [
                t('So that my bonds in Christ are made manifest in all the palace, and in all other places;'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And many of the brethren in the Lord, waxing confident by my bonds, are much more bold to speak the word without fear.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'p1-furtherance',
          html:
            'This is the radical reframe. Paul has been arrested, tried, imprisoned—but he understands his own suffering as an instrument for the gospel&apos;s advance. His bonds have made Christ visible "in all the palace" (likely the royal guards themselves), and his faithfulness has emboldened other believers. What the empire intended as oppression has become proclamation.',
        },
        {
          kind: 'carry',
          html:
            'When your circumstances work against you—when you face opposition, loss, or restriction—you are being invited into the same perspective Paul had. Your suffering is not pointless. It can become a witness. Your steadfastness under pressure can embolden others. This does not mean suffering is good; it means suffering can be redemptive when Christ remains central.',
        },
        {
          kind: 'reflection',
          id: 'p1-furtherance-reflect',
          prompt:
            'Can you trace a time when your suffering or opposition led to something good—either in your own growth or in others around you?',
        },
      ],
    },

    /* ─── Philippians 1:15–18 — The Gospel Preached, Whatever the Motive ──── */
    {
      ref: 'Philippians 1:15–18',
      title: 'Christ Preached in Truth and Pretense',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 15,
              spans: [
                t('Some indeed preach Christ even of envy and strife; and some also of '),
                hy('good will', 'p1-goodwill'),
                t(':'),
              ],
            },
            {
              number: 16,
              spans: [
                t('The one preach Christ of contention, not sincerely, supposing to add affliction to my bonds:'),
              ],
            },
            {
              number: 17,
              spans: [
                t('But the other of love, knowing that I am set for the defence of the gospel.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('What then? notwithstanding, every way, whether in '),
                hp('pretence, or in truth, Christ is preached', 'p1-preached'),
                t('; and I therein do rejoice, yea, and will rejoice.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'p1-goodwill',
          html:
            'Even within the church, preachers are divided. Some preach Christ from "goodwill"—genuine love for Christ and concern for the gospel. Others preach from ambition, hoping to increase their own standing or diminish Paul&apos;s. The church has never been a place of perfect motives.',
        },
        {
          kind: 'greek',
          id: 'p1-tharreo',
          title: 'Eudokia — "Good Will"',
          script: 'εὐδοκία',
          translit: '<strong>eudokia</strong> · good will; favor; pleasure; benevolence',
          description:
            'Not mere sentiment. Eudokia suggests a settled disposition toward the good. To preach "of good will" is to be motivated by deep, genuine favor toward Christ and His kingdom.',
        },
        {
          kind: 'christ',
          id: 'p1-preached',
          title: 'Christ Connection — Christ, Not the Preacher',
          html:
            'This is perhaps Paul&apos;s greatest insight: "Whether in pretence, or in truth, Christ is preached; and I therein do rejoice." The preacher may be compromised, ambitious, or insincere—yet if Christ is preached, something true happens. Christ Himself is greater than the vessel carrying the message. Even when the messenger is flawed, the message stands. This is why the gospel survives human failure. The focus is not on the preacher. It is on Christ.',
        },
        {
          kind: 'carry',
          html:
            'You will meet preachers, teachers, and leaders whose motives are mixed. Some may envy you. Some may contradict one another. Some may be sincere, others calculating. Do not rest your faith on any of them. Rest your faith on Christ, who is proclaimed even through imperfect vessels. The word is not diminished by the flaws of the one who speaks it.',
        },
        {
          kind: 'reflection',
          id: 'p1-preached-reflect',
          prompt:
            'Have you ever heard Christ preached by someone whose motives you questioned? How did that affect your faith? Can you separate the message from the messenger?',
        },
      ],
    },

    /* ─── Philippians 1:19–26 — To Live Is Christ, To Die Is Gain ──────── */
    {
      ref: 'Philippians 1:19–26',
      title: 'Life Centered on Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 19,
              spans: [
                t('For I know that this shall turn to my salvation through your prayer, and the supply of the Spirit of Jesus Christ,'),
              ],
            },
            {
              number: 20,
              spans: [
                t('According to my earnest expectation and my hope, that in nothing I shall be ashamed, but that with all boldness, as always, so now also '),
                hg('Christ shall be magnified in my body', 'p1-magnified'),
                t(', whether it be by life, or by death.'),
              ],
            },
            {
              number: 21,
              spans: [
                hp('For to me to live is Christ, and to die is gain', 'p1-christ-gain'),
                t('.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('But if I live in the flesh, this is the fruit of my labour: yet what I shall choose I wot not.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('For I am in a strait betwixt two, having a desire to '),
                hy('depart, and to be with Christ', 'p1-depart'),
                t('; which is far better:'),
              ],
            },
            {
              number: 24,
              spans: [
                t('Nevertheless to abide in the flesh is more needful for you.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And having this confidence, I know that I shall abide and continue with you all for your furtherance and joy of faith;'),
              ],
            },
            {
              number: 26,
              spans: [
                t('That your rejoicing may be more abundant in Jesus Christ for me by my coming to you again.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'p1-magnified',
          html:
            '"Christ shall be magnified in my body, whether it be by life, or by death." Paul&apos;s body—his visible, mortal, vulnerable body—is the arena where Christ will be made great. Living faithfully magnifies Him. Dying faithfully magnifies Him. The particular manner of life or death is secondary to the central question: Does this magnify Christ?',
        },
        {
          kind: 'christ',
          id: 'p1-christ-magnified',
          title: 'Christ Connection — The Believer&apos;s Glory',
          html:
            'Paul declares that Christ will be "magnified in my body." Paul echoes a principle Paul himself expressed in 2 Corinthians 4:10: "Always bearing about in the body the dying of the Lord Jesus, that the life also of Jesus might be made manifest in our body." The believer&apos;s body—their actions, their witness, their very presence—becomes a display case for Christ&apos;s glory. As Paul writes again in 1 Corinthians 6:19–20: "Know ye not that your body is the temple of the Holy Ghost?… Glorify God in your body."',
        },
        {
          kind: 'commentary',
          id: 'p1-christ-gain',
          html:
            'This is the sentence that sums up the entire letter: "For to me to live is Christ, and to die is gain." For Paul, living and dying have been collapsed into a single frame of reference: Christ. To live is not to pursue comfort, safety, or pleasure. It is to pursue Christ. And if living means Christ, then dying—the end of that pursuit on earth—is not a loss but a transition into unmediated presence with the one he has pursued.',
        },
        {
          kind: 'greek',
          id: 'p1-apothnesko',
          title: 'Apothnesko — "To Die"',
          script: 'ἀποθνῄσκω',
          translit: '<strong>apothnesko</strong> · to die; to perish; to be deprived of life',
          description:
            'Paul does not fear the word. He does not spiritualize death away. He names it plainly: to die is to die. Yet he reframes it: for the believer centered on Christ, death is not the end of gain but the culmination of it.',
        },
        {
          kind: 'commentary',
          id: 'p1-depart',
          html:
            '"I have a desire to depart, and to be with Christ." The Greek word <em>analusai</em> suggests a dissolving, a breaking camp, a journey onward. Paul does not fear death. He understands it as a transition from one form of service to another—from serving Christ in the flesh to being in His presence.',
        },
        {
          kind: 'carry',
          html:
            'To live is Christ. Not to live <em>for</em> Christ, though that too. But to live <em>is</em> Christ. Your entire existence—not just your Sunday mornings or your quiet times, but your entire life—is collapsed into Him. This is not morbidity about death. It is freedom in life. When Christ becomes so central that your comfort, your safety, your reputation matter less than His purpose, you become unstoppable. You become like Paul: imprisoned, yet free.',
        },
        {
          kind: 'reflection',
          id: 'p1-live-reflect',
          prompt:
            'To live is Christ. Does this describe you? What would need to change in your life for this to be true?',
        },
      ],
    },

    /* ─── Philippians 1:27–30 — Standing Fast in the Faith ───────────── */
    {
      ref: 'Philippians 1:27–30',
      title: 'Worthy Conduct and Fearless Suffering',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 27,
              spans: [
                t('Only let your '),
                hy('conversation be as it becometh the gospel of Christ', 'p1-conversation'),
                t(': that whether I come and see you, or else be absent, I may hear of your affairs, that ye stand fast in one spirit, with one mind striving together for the faith of the gospel;'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And '),
                hg('in nothing terrified by your adversaries', 'p1-terrified'),
                t(': which is to them an evident token of perdition, but to you of salvation, and that of God;'),
              ],
            },
            {
              number: 29,
              spans: [
                t('For unto you it is given in the behalf of Christ, not only to '),
                hp('believe on him, but also to suffer for his sake', 'p1-suffer'),
                t(';'),
              ],
            },
            {
              number: 30,
              spans: [
                t('Having the same conflict which ye saw in me, and now hear to be in me.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'p1-conversation',
          html:
            '"Let your conversation be as it becometh the gospel of Christ." The Greek word <em>politeuesthai</em> does not mean merely speech. It means to live as a citizen, to conduct oneself in a manner befitting one&apos;s citizenship. The Philippians were proud of their Roman citizenship; Paul calls them to an even deeper citizenship—in the kingdom of Christ. Their manner of life should reflect that higher allegiance.',
        },
        {
          kind: 'greek',
          id: 'p1-politeuesthai',
          title: 'Politeuesthai — "Conduct Oneself as a Citizen"',
          script: 'πολιτεύομαι',
          translit: '<strong>politeuesthai</strong> · to live as a citizen; to behave; to conduct oneself; to exercise citizenship',
          description:
            'A verb rooted in <em>polis</em>, the city-state. To politeuesthai is to exercise the rights and responsibilities of citizenship. Paul is saying: Live in a way worthy of your citizenship in Christ&apos;s kingdom.',
        },
        {
          kind: 'commentary',
          id: 'p1-terrified',
          html:
            '"In nothing terrified by your adversaries." The word <em>pturo</em> means to be frightened, to cower, to lose heart. Paul is not saying suffering won&apos;t come. He is saying fear should not be the believer&apos;s ruling emotion. To stand unafraid before adversaries is itself a sign of salvation—evidence to the watching world that the believer trusts in something deeper than survival.',
        },
        {
          kind: 'christ',
          id: 'p1-suffer',
          title: 'Christ Connection — Called to Suffer with Christ',
          html:
            '"Unto you it is given in the behalf of Christ, not only to believe on him, but also to suffer for his sake." Suffering is not a punishment for the believer but a privilege—a participation in Christ&apos;s suffering. Peter puts it similarly: "Rejoice, inasmuch as ye are partakers of Christ&apos;s sufferings; that, when his glory shall be revealed, ye may be glad also with exceeding joy" (1 Peter 4:13). To suffer for Christ is to be stitched into His own redemptive story.',
        },
        {
          kind: 'carry',
          html:
            'You are called to live as a citizen of Christ&apos;s kingdom. That means conducting yourself in a way that declares allegiance to Him over Caesar, over comfort, over safety. And yes, that may bring opposition. But opposition does not grant you permission to be afraid. You are being invited to the same witness Paul embodied: unafraid, faithful, confident that Christ is greater than any adversary.',
        },
        {
          kind: 'reflection',
          id: 'p1-suffer-reflect',
          prompt:
            'What opposition or fear are you facing right now? Can you reframe it as a calling to make Christ visible to those watching?',
        },
      ],
    },

    /* ─── Divider ──────────────────────────────────────────────────────── */
    {
      blocks: [{ kind: 'divider' }],
    },
  ],
};
