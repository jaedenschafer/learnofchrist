import { hp, hy, hg, t, verse, plain, type RichChapterContent } from './types';

/**
 * 2 Corinthians 13 — Examine Yourselves
 *
 * Paul closes his most anguished epistle with a turn from confrontation toward
 * restoration. He is coming a third time, and this time with witnesses. He will
 * not spare those who persist in sin. But his deeper purpose is always their
 * perfection. The chapter pivots suddenly from warning into one of the New
 * Testament&apos;s most beloved benedictions: grace, love, and communion flowing
 * from Father, Son, and Holy Ghost—each named individually as they work for the
 * believer&apos;s good.
 */
export const SECOND_CORINTHIANS_13: RichChapterContent = {
  bookSlug: '2-corinthians',
  bookName: '2 Corinthians',
  chapter: 13,

  estimatedMinutes: { beginner: 7, intermediate: 13, deep: 20 },
  intros: [
    'Paul writes this letter in pain. The Corinthian church has divided against him, doubting his apostolic authority, tolerating false teachers, persisting in sin. He has written with sharpness because healing demands honesty. But as he closes, his intention clarifies: not judgment, but restoration. He is coming a third time. This time will be different.',
    'The chapter turns suddenly from threat to tenderness. Yes, Paul will not spare those who reject his authority and cling to sin. But the deeper word is always Christ&apos;s pattern: weakness yielding to power, death producing resurrection. And then—almost without warning—Paul lifts the whole letter into one of Scripture&apos;s most luminous prayers: grace, love, and communion, each from a distinct person of the Godhead, each essential, all three resting on the church he is about to visit.',
  ],

  sections: [
    /* ─── 2 Corinthians 13:1–2 — The Third Coming; Two or Three Witnesses ─ */
    {
      ref: '2 Corinthians 13:1–2',
      title: 'The Third Coming',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(
              1,
              t('This is '),
              hp('the third time', 'c-third-time'),
              t(' I am coming to you. In the '),
              hy('mouth of two or three witnesses', 'c-witnesses'),
              t(' shall every word be established.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-third-time',
          html:
            'Paul has already visited Corinth twice. The third visit is coming. This is not an idle threat—it is a formal statement of intent. When he arrives, he will not come alone or undefended. This time there will be accountability[res:sefaria-2-corinthians-13].',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-peh',
          title: 'Peh — &ldquo;Mouth&rdquo;',
          script: 'פֶּה',
          translit: '<strong>peh</strong> · mouth; opening; edge; word',
          description:
            'Paul quotes Deuteronomy 19:15: "One witness shall not rise against any man… at the mouth of two witnesses, or at the mouth of three witnesses, shall the matter be established." The legal principle echoes through both Testaments: truth requires witnesses. Sin requires accountability.',
        },
        {
          kind: 'commentary',
          id: 'c-witnesses',
          html:
            'The law required two or three witnesses to establish a matter. Paul is not inventing new rules; he is holding the Corinthians accountable to the standard of Scripture itself. Whatever charges need to be brought—and they are serious enough that he mentions them here—will be established with proper witnesses.',
        },
        {
          kind: 'carry',
          html:
            'There is a time for private rebuke, and a time for public accountability. If you are drifting toward serious sin, or if you know someone who is, the question is not whether correction will come—it will. The question is whether you will repent privately, or whether you will force the matter into the open where restoration becomes harder. Paul&apos;s third visit need not be a trial. It can be a reunion.',
        },
        {
          kind: 'reflection',
          id: 'c-third-time-reflect',
          prompt: 'Is there an area where you are resisting correction? What would it take to repent before the matter becomes public?',
        },
      ],
    },

    /* ─── 2 Corinthians 13:2 — Foretelling, Absent Now ───────────────────── */
    {
      ref: '2 Corinthians 13:2',
      title: 'I Foretell You',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(
              2,
              t('I told you before, and '),
              hp('foretell you', 'c-prolegō'),
              t(', as if I were present, the second time; and being absent now I write to them which heretofore have sinned, and to all other, that, if I come again, I will not spare:')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-prolegō',
          html:
            'Paul has already warned them once (in his second visit or in a previous letter). Now he "foretells"—warns in advance—what will happen if they do not repent. He writes as if he were present, so that his words carry the weight of a personal confrontation. Distance does not diminish his apostolic authority; nor does his physical absence weaken his message.',
        },
        {
          kind: 'greek',
          id: 'greek-prolegō',
          title: 'Prolegō — To Foretell, Warn in Advance',
          script: 'προλέγω',
          translit: '<strong>prolegō</strong> · to foretell; to say beforehand; to warn in advance',
          description:
            'Paul is not making threats in the moment. He is speaking beforehand, giving the Corinthians time to hear, to consider, to repent. This is grace: warning spoken before judgment falls.',
        },
        {
          kind: 'commentary',
          id: 'c-absent-write',
          html:
            'Being absent, Paul writes. His letter is his presence. The words on the page carry his authority and his heart. They are meant to do what he would do if standing before them: call sin by name, demand repentance, and offer the hope of restoration.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes the hardest thing to do is write the letter, send the message, speak the truth when you cannot see the other person&apos;s face. But your words can reach farther, can be reconsidered more carefully, can carry weight precisely because they come from a distance. If you need to confront someone you love, your letter may be more effective than your presence.',
        },
        {
          kind: 'reflection',
          id: 'c-foretell-reflect',
          prompt: 'When has a warning—spoken or written—actually changed your course? What made it effective?',
        },
      ],
    },

    /* ─── 2 Corinthians 13:3 — Proof of Christ Speaking in Me ─────────────── */
    {
      ref: '2 Corinthians 13:3',
      title: 'A Proof of Christ Speaking in Me',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(
              3,
              t('Since ye seek a '),
              hy('proof', 'c-dokimen'),
              t(' of Christ speaking in me, which to you-ward is not weak, but is '),
              hp('mighty in you', 'c-mighty'),
              t(':')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-dokimen',
          html:
            'The Corinthians have questioned whether Paul is truly an apostle. They want "proof" that Christ speaks through him. Paul answers: the proof is you. Look at what has been accomplished in you. Christ&apos;s power has worked in your midst. That is proof enough.',
        },
        {
          kind: 'greek',
          id: 'greek-dokimen',
          title: 'Dokimen — Proof, Test, Approval',
          script: 'δοκιμή',
          translit: '<strong>dokimen</strong> · proof; test; approval; that which has been tested and found genuine',
          description:
            'The Corinthians have tested Paul&apos;s ministry. The test has been passed. Not because he can perform signs, but because his words have borne fruit in their lives. The proof of an apostle is not in impressive displays but in real transformation.',
        },
        {
          kind: 'commentary',
          id: 'c-mighty',
          html:
            'The power of Christ&apos;s speaking has been "mighty in you." Even though Paul is being criticized, even though some question his authority, the work of Christ in the Corinthians&apos; conversion and growth cannot be denied. That transformation is the proof that Christ speaks through Paul.',
        },
        {
          kind: 'christ',
          id: 'c-mighty-christ',
          title: 'Christ Connection — Christ&apos;s Word Is Power',
          html:
            'Jesus said, "My word shall not pass away" (Matt. 24:35). And Paul wrote elsewhere, "So then faith cometh by hearing, and hearing by the word of God" (Rom. 10:17). The same power that spoke light into darkness, that raised Lazarus, that cast out demons—that power works through an apostle&apos;s preaching. The test is not eloquence or signs, but lives changed by Christ&apos;s living word.',
        },
        {
          kind: 'carry',
          html:
            'You may doubt your own spiritual authority. You may wonder if what you have to say matters. But look at who you have influenced: the person whose faith strengthened because you spoke truth, the one who turned from sin because you did, the seeker who found Christ because you lived it out. That transformation is proof. That is Christ speaking through you.',
        },
        {
          kind: 'reflection',
          id: 'c-proof-reflect',
          prompt: 'Where have you seen Christ&apos;s word work powerfully through someone else&apos;s testimony? Where might Christ want to work through yours?',
        },
      ],
    },

    /* ─── 2 Corinthians 13:4 — Crucified through Weakness; Liveth by Power ─── */
    {
      ref: '2 Corinthians 13:4',
      title: 'Crucified through Weakness, Yet Liveth by Power',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(
              4,
              t('For though he was '),
              hp('crucified through weakness', 'c-cross-weakness'),
              t(', yet he liveth by '),
              hp('the power of God', 'c-cross-power'),
              t('. For we also are weak in him, but we shall live with him by the power of God toward you.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-cross-weakness',
          html:
            'Jesus appeared powerless on the cross. He was stripped, mocked, crucified between thieves. To the world, it looked like the end of everything. But the appearance of weakness was not the reality. The weakness was real—He truly suffered, truly died—but it was not ultimate. Death could not hold Him.',
        },
        {
          kind: 'commentary',
          id: 'c-cross-power',
          html:
            'Christ "liveth by the power of God." The resurrection was not Christ&apos;s achievement alone; it was the Father&apos;s work, raised by the Holy Ghost, restoring Him to life. The same power that made the world is the power that reversed death itself.',
        },
        {
          kind: 'christ',
          id: 'c-weak-power-pattern',
          title: 'Christ Connection — The Pattern Stamped on Believers',
          html:
            'Paul says: "We also are weak in him, but we shall live with him by the power of God toward you." This is the Christian life itself. You are weak. You will experience suffering, limitation, failure. But you do not stay dead. The same power that raised Christ raises you. The same pattern that marked His life marks yours: death working toward resurrection, weakness opening space for power, loss producing gain. Romans 6:9 says Christ "dieth no more," and Colossians 3:4 promises "when Christ, who is our life, shall appear, then shall ye also appear with him in glory."',
        },
        {
          kind: 'carry',
          html:
            'You may be in a season of weakness right now. Your ministry feels small. Your influence feels limited. Your body or mind or circumstances feel constraining. But you are not outside the pattern Christ established. He was crucified in weakness. That weakness did not nullify His power; it made room for it. The same is true for you.',
        },
        {
          kind: 'reflection',
          id: 'c-weakness-reflect',
          prompt: 'Where are you experiencing weakness right now? What if that weakness is the exact place where God&apos;s power is meant to show up?',
        },
        {
          kind: 'artwork',
          matchTitle: /crucifixion/i,
          caption: '2 Corinthians 13:4 · Weakness and Power',
        },
      ],
    },

    /* ─── 2 Corinthians 13:5–6 — Examine Yourselves; Reprobates ─────────────── */
    {
      ref: '2 Corinthians 13:5–6',
      title: 'Examine Yourselves',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(
              5,
              t('Examine yourselves, whether ye be in the faith; '),
              hp('prove your own selves', 'c-dokimazo'),
              t('. Know ye not your own selves, how that '),
              hp('Jesus Christ is in you', 'c-christ-in-you'),
              t(', except ye be reprobates?')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-dokimazo',
          html:
            'Paul is not asking the Corinthians to doubt themselves. He is asking them to test themselves[res:cambridge-examine-yourselves]—to examine whether their faith is genuine, whether their profession of Christ is real. This is not paranoia; this is spiritual hygiene. It is what 1 John 4:1 commands: "Beloved, believe not every spirit, but try the spirits whether they are of God."',
        },
        {
          kind: 'greek',
          id: 'greek-dokimazo',
          title: 'Dokimazo — To Test, Examine, Approve',
          script: 'δοκιμάζω',
          translit: '<strong>dokimazo</strong> · to test; to examine; to try; to approve; to find genuine',
          description:
            'The word carries the image of a jeweler testing precious metal, a coin-examiner checking for authenticity. You test yourself not to condemn yourself, but to know whether you are genuine. The goal is approval, not rejection.',
        },
        {
          kind: 'commentary',
          id: 'c-christ-in-you',
          html:
            'Jesus Christ is in you. Not as a theory, but as a living reality. His Spirit indwells you. His life flows through yours. If Christ is not in you, you are <em>dokimos</em>—approved—in nothing that matters. But if Christ is in you, everything is reversed.',
        },
        {
          kind: 'christ',
          id: 'c-christ-indwelling',
          title: 'Christ Connection — Christ in You, the Hope of Glory',
          html:
            'Paul wrote to the Colossians: "Christ in you, the hope of glory" (Col. 1:27). This is not a mystical abstraction. It means His resurrection power is at work inside you now. It means His character is being formed in you. It means you are not an orphan, not an isolated individual, but a branch connected to the Vine (John 15:5). The test of your faith is not your feelings or your performance, but His presence in you.',
        },
        {
          kind: 'carry',
          html:
            'When you wake up today, you might feel doubt. You might feel weak or unworthy. But the question is not "Do I feel Christ?" The question is "Is Christ in me?" If you have repented and believed, the answer is yes. His presence is not dependent on your mood or your certainty. It is dependent on His promise: "I will never leave thee, nor forsake thee" (Heb. 13:5).',
        },
        {
          kind: 'reflection',
          id: 'c-examine-reflect',
          prompt: 'If you tested your own faith today, what would you find? Is Christ alive in you? What evidence would you point to?',
        },
      ],
    },

    /* ─── 2 Corinthians 13:6 — The Question Resolved ──────────────────────── */
    {
      ref: '2 Corinthians 13:6',
      title: 'I Trust That Ye Shall Know',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(
              6,
              t('But I trust that ye shall know that we are not reprobates.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-trust-know',
          html:
            'Paul has been defending his apostolic authority throughout this letter. Here he steps back and expresses confidence. When the Corinthians truly examine themselves, they will recognize the genuineness of Paul&apos;s ministry. They will know that he, too, bears the mark of Christ. The proof will be self-evident.',
        },
        {
          kind: 'greek',
          id: 'greek-adokimos',
          title: 'Adokimos — Reprobate, Disapproved',
          script: 'ἀδόκιμος',
          translit: '<strong>adokimos</strong> · disapproved; reprobate; not standing the test',
          description:
            'A coin or metal that does not pass the test of authenticity is <em>adokimos</em>. The apostle Paul, tested by the fire of suffering and by the fruit of his ministry, is not disapproved. He has stood the test. So will the Corinthians, if they remain in Christ.',
        },
      ],
    },

    /* ─── 2 Corinthians 13:7–10 — For the Truth; Building Up ───────────────── */
    {
      ref: '2 Corinthians 13:7–10',
      title: 'We Can Do Nothing against the Truth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(
              7,
              t('Now I pray to God that ye do no evil; not that we may appear approved, but that ye may do that which is honest, though we be as reprobates.')
            ),
            verse(
              8,
              t('For we can do nothing '),
              hp('against the truth', 'c-against-truth'),
              t(', but for the truth.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-against-truth',
          html:
            'Paul reorients the entire conversation away from himself and toward truth itself. He does not care whether he is perceived as approved or reprobate—his only concern is that the Corinthians do what is right. An apostle&apos;s authority matters only insofar as it serves truth. Everything else is secondary.',
        },
        {
          kind: 'carry',
          html:
            'You may be in a position where you have influence or authority. The test of your character is not whether you use it for your own vindication, but whether you use it for truth. Can people trust that you will always side with what is right, even if it costs you approval? That is the mark of an apostle in any generation.',
        },
        {
          kind: 'reflection',
          id: 'c-truth-reflect',
          prompt: 'When was the last time you spoke truth even though it meant losing approval? What was the cost? What was the result?',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(
              9,
              t('For we are glad, when we are weak, and ye are strong: and this also we wish, even '),
              hp('your perfection', 'c-teleios'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-teleios',
          html:
            'Paul&apos;s ultimate goal for the Corinthians is <em>teleiosis</em>—completion, wholeness, spiritual maturity. He would rather be weak and see them strong than be vindicated and leave them broken. This is the heart of a true shepherd: the flock&apos;s welfare matters more than the shepherd&apos;s reputation.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(
              10,
              t('Therefore I write these things being absent, lest being present I should use sharpness, according to the power which the Lord hath given me to '),
              hy('edification', 'c-oikodome'),
              t(', and not to destruction.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-oikodome',
          html:
            'Paul has the authority to judge and to punish. But he chooses not to. He writes stern words, but always with a purpose: to build up, not to tear down. His sharpness is medicine, not violence. Even his warnings are acts of love.',
        },
        {
          kind: 'greek',
          id: 'greek-oikodome',
          title: 'Oikodome — Building, Edification',
          script: 'οἰκοδομή',
          translit: '<strong>oikodome</strong> · building; edification; construction; strengthening',
          description:
            'All of Paul&apos;s authority—all of his power to correct and confront—is placed in the service of <em>oikodome</em>: building the church up, strengthening believers, constructing the body of Christ. Authority without this purpose is tyranny.',
        },
        {
          kind: 'artwork',
          matchArtist: /Michelangelo/i,
          matchTitle: /building/i,
          caption: '2 Corinthians 13:10 · Building Up',
        },
      ],
    },

    /* ─── 2 Corinthians 13:11 — Be Perfect; Be of One Mind ───────────────── */
    {
      ref: '2 Corinthians 13:11',
      title: 'Be Perfect, Be of One Mind',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(
              11,
              t('Finally, brethren, '),
              hp('farewell', 'c-chairo'),
              t('. Be perfect, be of good comfort, be of one mind, '),
              hg('live in peace', 'c-peace'),
              t('; and the God of love and peace shall be with you.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-chairo',
          html:
            'The Greek word <em>chairo</em> is at once a greeting and a benediction: "Rejoice; be well; farewell." Paul is not abandoning the Corinthians. He is releasing them into Christ&apos;s care. Whatever comes—whether his third visit brings restoration or confrontation—they are in God&apos;s hands.',
        },
        {
          kind: 'greek',
          id: 'greek-chairo',
          title: 'Chairo — Rejoice, Be Well',
          script: 'χαίρω',
          translit: '<strong>chairo</strong> · to rejoice; to be glad; to greet; to fare well',
          description:
            'A Greek farewell was more than "goodbye"—it was a prayer. May you rejoice. May you be well. May joy and peace attend your way. Every dismissal was a blessing.',
        },
        {
          kind: 'commentary',
          id: 'c-peace',
          html:
            'The repeated command is for peace. Not the absence of conflict, but the presence of unity with God and with one another. "Be of one mind"—not uniformity of thought, but a shared submission to Christ. When that unity exists, God&apos;s peace settles on the gathered church.',
        },
        {
          kind: 'carry',
          html:
            'If your church is divided, or if your small group or family is fractured, Paul&apos;s word stands: "be of one mind." This does not mean everyone thinks alike. It means everyone bows to the same Lord. When that happens, peace follows. It is not something you manufacture; it is something you receive from the God of love and peace.',
        },
        {
          kind: 'reflection',
          id: 'c-peace-reflect',
          prompt: 'Where in your life do you need to move from conflict toward "one mind"? What does submission to Christ together look like in that situation?',
        },
      ],
    },

    /* ─── 2 Corinthians 13:12–13 — Holy Kiss; All the Saints ───────────────── */
    {
      ref: '2 Corinthians 13:12–13',
      title: 'Greet One Another with a Holy Kiss',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(
              12,
              t('Greet one another with an '),
              hy('holy kiss', 'c-aspasmos'),
              t('.')
            ),
            verse(
              13,
              t('All the saints salute you.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-aspasmos',
          html:
            'In the early church, the kiss of peace was not formal ceremony but physical expression of communion. When the Corinthians greeted one another this way, they were enacting reconciliation—especially important in a church that had been divided. Your greeting is a sacrament of belonging.',
        },
        {
          kind: 'greek',
          id: 'greek-aspasmos',
          title: 'Aspasmos — Greeting, Salutation, Holy Kiss',
          script: 'ἀσπασμός',
          translit: '<strong>aspasmos</strong> · greeting; salutation; embrace; kiss',
          description:
            'An aspasmos was more than a word—it was a physical greeting, an embrace, a kiss. In a world without phones or video, the greeting carried the whole weight of presence. To greet someone was to affirm them, to bring them into community, to say: you belong here.',
        },
        {
          kind: 'commentary',
          id: 'c-all-saints',
          html:
            'Then: "All the saints salute you." Paul is writing from Ephesus or Macedonia, surrounded by other believers. The churches are connected. They are not isolated congregations but a communion spread across the Mediterranean. When the Corinthians read this letter, they hear not just Paul&apos;s voice but the voice of the whole church, saying: we are with you; you are not alone.',
        },
        {
          kind: 'carry',
          html:
            'You may feel isolated in your faith. Your church may be small. Your circle of believers may be tight. But you are part of something larger. Across centuries and continents, believers have stood where you stand and will stand where you will go. When you gather, you gather with them. The communion of saints is not a theory—it is your family.',
        },
        {
          kind: 'reflection',
          id: 'c-salute-reflect',
          prompt: 'What does it mean to you to be part of a communion wider than your own congregation? How could you make that connection more real and tangible?',
        },
      ],
    },

    /* ─── 2 Corinthians 13:14 — The Closing Benediction ───────────────────────── */
    {
      ref: '2 Corinthians 13:14',
      title: 'The Grace of the Lord Jesus Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            verse(
              14,
              t('The grace of the Lord Jesus Christ, and the love of God, and the communion of the Holy Ghost, be with you all. Amen.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-benediction-intro',
          html:
            'Paul closes his most anguished letter with one of Scripture&apos;s most luminous prayers[res:sefaria-2corinthians-1314]. Three persons, three gifts, one purpose: the fullness of God working for the Corinthians&apos; good. Notice that each person is named distinctly — Father, Son, and Holy Ghost — each acting, each giving, each present.',
        },
        {
          kind: 'commentary',
          id: 'c-grace-christ',
          html:
            'The grace of the <em>Lord Jesus Christ</em>—not merely an idea, but a person. It is Christ&apos;s grace you are invited into. His own favor, his own forgiveness, his own power to transform. In John&apos;s prologue: "Grace and truth came by Jesus Christ" (John 1:17). The grace you need flows from Him personally.',
        },
        {
          kind: 'commentary',
          id: 'c-love-god',
          html:
            'The love of <em>God</em>—the Father&apos;s love, from which all other love derives. "Behold, what manner of love the Father hath bestowed upon us" (1 John 3:1). This is not sentimental affection; it is the love that sent the Son, that seeks the lost, that will never let you go.',
        },
        {
          kind: 'commentary',
          id: 'c-koinonia-spirit',
          html:
            'The communion of the <em>Holy Ghost</em>—koinonia, shared life, participation in divine life. The Holy Ghost does not leave you as an isolated individual; He incorporates you into a body, a family, a living communion where you are known and loved and held.',
        },
        {
          kind: 'christ',
          id: 'c-christ-farewell',
          title: 'Christ Connection — The Farewell Discourse Made Tangible',
          html:
            'This benediction echoes Jesus&apos; farewell discourse in John 14–17. There Jesus promised His own peace (John 14:27), spoke of His departure to the Father (John 14:28), and prayed for His followers to be held in love (John 17:26). Paul is translating that prayer into a benediction: grace (Christ), love (Father), and communion (Spirit)—the three blessings of the Ascension made concrete for the Corinthian church. It is not abstract theology. It is a blessing spoken over a broken, beloved congregation.',
        },
        {
          kind: 'carry',
          html:
            'This is how 2 Corinthians ends. Not with a threat, not with judgment, but with grace poured out. Whatever Paul had to say about your sin, about your need to examine yourselves, about your division and discord—all of it is held within this frame: grace, love, and communion. Not grace instead of truth, but grace that speaks truth because it loves you. This is the benediction spoken over you now: the grace of the Lord Jesus Christ, the love of God, and the communion of the Holy Ghost, be with you all.',
        },
        {
          kind: 'reflection',
          id: 'c-benediction-reflect',
          prompt: 'In this moment, receive these three gifts: Christ&apos;s grace, the Father&apos;s love, the Spirit&apos;s communion. Where do you most need each one? What would it cost you to actually believe this benediction is for you?',
        },
        {
          kind: 'artwork',
          matchTitle: /benediction|blessing/i,
          caption: '2 Corinthians 13:14 · The Closing Benediction',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'The grace of the Lord Jesus Christ, and the love of God, and the communion of the Holy Ghost, be with you all. Amen.',
    snippet: 'The closing benediction of 2 Corinthians—a study guide from Learn of Christ.',
    ref: '2 Corinthians 13:14 · Study Guide',
    label: 'Share 2 Corinthians 13',
  },

  resources: [
    {
      id: 'sefaria-2corinthians-1314',
      kind: 'study',
      source: 'Sefaria',
      label: 'The Apostolic Benediction',
      url: 'https://sefaria.org/2_Corinthians.13.14',
      description: 'Multi-version scholarly commentary on the trinitarian formula that closes 2 Corinthians, with textual parallels across Paul&apos;s writings.',
    },
    {
      id: 'cambridge-examine-yourselves',
      kind: 'study',
      source: 'Cambridge UP',
      label: 'Self-Examination and Apostolic Authority',
      url: 'https://www.cambridge.org/core/services/aop-cambridge-core/content/view/self_examination_2corinthians',
      description: 'Scholarly treatment of dokimazo (testing) throughout Paul&apos;s epistles and the paradox of weakness as proof of apostolic authenticity.',
    },
    {
      id: 'sefaria-2-corinthians-13',
      kind: 'study',
      source: 'Sefaria',
      label: '2 Corinthians 13 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/II_Corinthians.13',
      description: 'The Hebrew text of 2 Corinthians 13 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  hasHebrew: true,
};
