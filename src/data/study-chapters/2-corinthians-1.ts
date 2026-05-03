import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * 2 Corinthians 1 — The God of All Comfort
 *
 * Paul opens his most personal letter from a place of severe affliction. He has suffered
 * so deeply that he despaired of life itself. Yet God met him there with comfort—not by
 * removing the pain, but by His presence within it. Now Paul writes to the Corinthians
 * to teach them that comfort flows through us to others, that Christ&apos;s sufferings abound
 * in us, and that God alone is worthy of trust.
 */
export const SECOND_CORINTHIANS_1: RichChapterContent = {
  bookSlug: '2-corinthians',
  bookName: '2 Corinthians',
  chapter: 1,

  estimatedMinutes: { beginner: 8, intermediate: 13, deep: 18 },
  intros: [
    '2 Corinthians is Paul&apos;s most vulnerable letter. He does not hide his weakness or his suffering. Instead, he exposes it—because in that exposure, his readers see God&apos;s strength. The letter opens not with triumph but with tribulation: Paul has been through something so severe that he despaired even of living. And in that darkness, God comforted him.',
    'The genius of this opening is that Paul does not move away from his suffering to speak of something else. He moves *into* his suffering to show what God does there. Comfort flowing through him to others. Sufferings of Christ abounding in him. A faith that trusts not in himself, but in the God who raises the dead. Chapter 1 sets the tone for everything that follows: weakness as the place where God&apos;s power becomes visible.',
  ],

  sections: [
    /* ─── Greeting and Apostolic Authority ─────────────────────────────── */
    {
      ref: '2 Corinthians 1:1–2',
      title: 'Paul&apos;s Greeting',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              1,
              t('Paul, '),
              hg('an apostle of Jesus Christ by the will of God', 'cor2-apostle'),
              t(', and Timothy our brother, unto the church of God which is at Corinth, with all the saints which are in all Achaia:'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-apostle',
          html:
            'Paul does not claim authority on his own terms. He is an apostle &ldquo;by the will of God.&rdquo; This matters because his readers have questioned his authority. But apostolic standing is not something you seize or prove through eloquence or power. It is conferred by God. Paul&apos;s whole letter will rest on this foundation: he speaks not for himself, but on behalf of God&apos;s will.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              2,
              t('Grace be to you and peace from God our Father, and from the '),
              hp('Lord Jesus Christ', 'christ-grace'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'christ',
          id: 'christ-grace',
          title: 'Christ Connection — Co-Source of Grace and Peace',
          html:
            'Paul sends grace and peace from God the Father *and* from Jesus Christ together, as if they were a single source (Philippians 4:9; 1 Corinthians 1:3). This simple greeting embedded Christ&apos;s full divinity into early Christian practice. He is not subordinate to the Father in the giving of grace; He is co-equal in bestowing it.',
        },
        {
          kind: 'reflection',
          id: 'cor2-1-greeting',
          prompt: 'Paul begins by reminding himself (and his readers) that his authority comes from God, not from himself. What in your life would change if you truly rested your identity on God&apos;s calling rather than your own effort?',
        },
      ],
    },

    /* ─── God of All Comfort ──────────────────────────────────────────── */
    {
      ref: '2 Corinthians 1:3–4',
      title: 'The God of All Comfort',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              3,
              t('Blessed be '),
              hp('God, even the Father of our Lord Jesus Christ, the Father of mercies, and the God of all comfort', 'cor2-god-comfort'),
              t(';'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-god-comfort',
          html:
            'This is a berakah—a Hebrew blessing. Paul does not argue for God&apos;s existence or defend Him. He simply praises what he has encountered. God is the &ldquo;Father of mercies&rdquo; and &ldquo;God of all comfort.&rdquo; These are not abstract titles. These are names earned in Paul&apos;s own suffering. He knows them because he has experienced them.',
        },
        {
          kind: 'greek',
          id: 'cor2-1-parakaleo',
          title: 'Parakaleo — &ldquo;Comfort&rdquo;; To Come Alongside',
          script: 'παρακαλέω',
          translit: '<strong>parakaleo</strong> · to comfort, encourage, exhort, call alongside',
          description:
            'The root para means &ldquo;beside.&rdquo; Parakaleo is to come alongside someone in their trouble—not to fix it, not to minimize it, but to be present. The noun form, Paraklete (often translated Comforter), becomes one of Jesus&apos;s names for the Holy Spirit (John 14:26).',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              4,
              t('Who '),
              t('comforteth us in all our tribulation'),
              t(', that we may be able to '),
              hg('comfort them which are in any trouble, by the comfort wherewith we ourselves are comforted of God', 'cor2-comfort-flow'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-comfort-flow',
          html:
            'Notice the pattern: God comforts us <em>in</em> our tribulation, not by removing it. And the purpose is not our private relief—it is that we become conduits of that same comfort to others. Suffering becomes the school where you learn to comfort others. You cannot teach what you have not learned.',
        },
        {
          kind: 'carry',
          html:
            'If you are walking through a hard season right now, you may feel your pain disqualifies you from ministry. Paul invites the opposite: your tribulation is becoming your training ground. The comfort God gives you in this darkness is not meant to be hoarded. It is meant to flow through you to someone else who will soon walk a path like the one you are on now. Your wound, tended by God, becomes a place of blessing for others.',
        },
        {
          kind: 'reflection',
          id: 'cor2-1-comfort-others',
          prompt: 'What tribulation or sorrow have you walked through? How has God&apos;s comfort met you in the midst of it? How might that comfort become a gift to someone else?',
        },
      ],
    },

    /* ─── Sufferings and Consolation ──────────────────────────────────── */
    {
      ref: '2 Corinthians 1:5–7',
      title: 'Sufferings of Christ Abound in Us',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              5,
              t('For as '),
              hp('the sufferings of Christ abound in us', 'christ-sufferings'),
              t(', so '),
              hg('our consolation also aboundeth by Christ', 'cor2-consolation'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-consolation',
          html:
            'This is Paul&apos;s theology of suffering: it is not punishment, not punishment, not meaningless. It is <em>participation</em> in Christ&apos;s own sufferings. And wherever there is suffering that belongs to Christ, consolation also abounds—not as escape, but as strength within it. The two abound together.',
        },
        {
          kind: 'christ',
          id: 'christ-sufferings',
          title: 'Christ Connection — Participation in Christ&apos;s Sufferings',
          html:
            'Paul elsewhere writes, &ldquo;I rejoice in my sufferings for you, and fill up that which is behind of the afflictions of Christ in my flesh for his body&apos;s sake, which is the church&rdquo; (Colossians 1:24). When you suffer faithfully, you are not suffering alone—you are suffering <em>with</em> Christ, adding your voice to His witnesses, taking up what belongs to His work in the world (Philippians 3:10).',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              6,
              t('And whether we be afflicted, it is for your consolation and salvation, which is effectual in the enduring of the same sufferings which we also suffer: or whether we be comforted, it is for your consolation and salvation:'),
            ),
            verse(
              7,
              t('And our hope of you is stedfast, knowing that as ye are partakers of the sufferings, so shall ye be also of the consolation.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-apostolic-suffering',
          html:
            'Paul&apos;s afflictions are not private. They serve the Corinthians&apos; comfort and salvation. This is the mystery of apostolic ministry: one person&apos;s faithful suffering becomes bread for others. And the Corinthians are not mere spectators—they are partners in the same sufferings and the same consolation.',
        },
        {
          kind: 'carry',
          html:
            'You may wonder if your pain is worth anything. Paul says yes. Your faithfulness in suffering—your choice to trust God when it would be easier to despair—that is not invisible. It is seed. It becomes sustenance for others who witness it and are strengthened. Do not waste your tribulation by refusing to let it teach you or others.',
        },
      ],
    },

    /* ─── Pressed Out of Measure ──────────────────────────────────────── */
    {
      ref: '2 Corinthians 1:8–9',
      title: 'The Sentence of Death',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              8,
              t('For we would not, brethren, have you ignorant of our trouble which came to us in Asia, that we were '),
              hy('pressed out of measure, above strength', 'cor2-thlipsis'),
              t(', insomuch that we despaired even of life:'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'cor2-thlipsis',
          title: 'Thlipsis — &ldquo;Pressed&rdquo;; Tribulation',
          script: 'θλῖψις',
          translit: '<strong>thlipsis</strong> · pressure, affliction, tribulation, distress',
          description:
            'The image is literal pressure—something pressing down. Paul uses it to describe afflictions so severe that they exceed his natural strength to bear. He was compressed, squeezed, unable to escape.',
        },
        {
          kind: 'commentary',
          id: 'cor2-despair',
          html:
            'Paul does not hide his despair. &ldquo;We despaired even of life.&rdquo; This is not the language of victory already won. This is the language of someone who has looked at the possibility of death and found it real. Paul&apos;s faith is not denial. It is clear-eyed. And he tells his readers this not to discourage them, but to set up what comes next: the only place to turn when you reach that breaking point is to God.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              9,
              t('But we had the '),
              t('sentence of death in ourselves'),
              t(', that we should not trust in ourselves, but in '),
              hp('God which raiseth the dead', 'christ-resurrection'),
              t(':'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'cor2-1-apokrima',
          title: 'Apokrima — &ldquo;Sentence&rdquo;; Judicial Verdict',
          script: 'ἀπόκριμα',
          translit: '<strong>apokrima</strong> · answer, response, verdict, judgment',
          description:
            'A legal term: the pronouncement of a court. Paul carries an internal death sentence. He has been judged and condemned by the weight of his circumstances. But this very sentence drives him away from himself and toward God.',
        },
        {
          kind: 'commentary',
          id: 'cor2-death-sentence',
          html:
            'The purpose of nearly dying is stated plainly: &ldquo;that we should not trust in ourselves.&rdquo; Paul would have remained self-reliant if he had not been pressed beyond his strength. God did not cause the affliction to teach a lesson, but He permitted it to break Paul&apos;s confidence in his own capacity. Now, Paul knows: he trusts in God, not himself.',
        },
        {
          kind: 'christ',
          id: 'christ-resurrection',
          title: 'Christ Connection — The God Who Raises the Dead',
          html:
            'God is not described as powerful in the abstract. He is the one who raises the dead (Romans 4:17; 1 Corinthians 6:14). Paul&apos;s confidence is not in escape from death, but in trust in the One who has power over death itself. Jesus is the resurrection and the life—to trust in the God who raises the dead is to trust in the One who has already risen (1 Corinthians 15:57).',
        },
        {
          kind: 'carry',
          html:
            'If you have reached a place of despair—where your own strength is exhausted and you face a kind of death—that is the place where faith begins in earnest. Not faith as optimism, but faith as trust in the only One who has actual power: the God who raises the dead. What dies in you there—your self-confidence, your illusion of control—that is the death that opens the door to resurrection.',
        },
        {
          kind: 'reflection',
          id: 'cor2-1-trust',
          prompt: 'Where have you been forced to stop trusting yourself? What happened when you finally turned to trust God instead?',
        },
      ],
    },

    /* ─── Deliverance and the Prayer of Others ─────────────────────────── */
    {
      ref: '2 Corinthians 1:10–11',
      title: 'Helped by Your Prayers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              10,
              t('Who delivered us from so great a death, and doth deliver: in whom we trust that he will yet deliver us;'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-three-tenses',
          html:
            'Paul shifts through three tenses: God has delivered us (past), does deliver us (present), will deliver us (future). Deliverance is not a one-time event. It is the shape of the Christian life—repeated rescue by the hand of God. Each tense confirms the others: if He delivered before, He is delivering now; if He is delivering now, He will deliver what comes next.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              11,
              t('Ye also '),
              hg('helping together by prayer for us', 'cor2-prayer'),
              t('; that for the gift bestowed upon us by the means of many persons thanks may be given by many on our behalf.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-prayer',
          html:
            'Paul attributes his deliverance partly to the prayers of the Corinthians. This is not a courtesy. Prayer is real work. When you pray for someone, you are genuinely helping them. And Paul makes it plain: he was sustained not by his own faith alone, but by the faith of others joined to his. The church prays him through.',
        },
        {
          kind: 'carry',
          html:
            'You may be tempted to think that prayer is secondary—that real help is money, advice, practical service. Paul says otherwise. Your prayers for someone who is suffering are a real force. You are genuinely helping them. Do not underestimate the power of intercession. And do not be ashamed to ask others to pray for you. Their prayers carry you when your own strength fails.',
        },
        {
          kind: 'reflection',
          id: 'cor2-1-prayer-community',
          prompt: 'Who are you holding up in prayer right now? And who has held you up through their prayers when you needed it most?',
        },
      ],
    },

    /* ─── Simplicity and Godly Sincerity ────────────────────────────────── */
    {
      ref: '2 Corinthians 1:12–14',
      title: 'Our Testimony Before God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              12,
              t('For our rejoicing is this, the testimony of our conscience, that in '),
              t('simplicity and godly sincerity'),
              t(', not with fleshly wisdom, but by the grace of God, we have had our conversation in the world, and more abundantly to you-ward.'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'cor2-1-eilikrineia',
          title: 'Haplotēs — &ldquo;Simplicity&rdquo;; Single-Mindedness',
          script: 'ἁπλότης',
          translit: '<strong>haplotēs</strong> · simplicity, sincerity, singleness of heart',
          description:
            'The word is akin to &ldquo;aplous&rdquo;—without folds, without hidden layers. To have sincerity is to be the same person on the outside as on the inside, not calculating how to use others, but genuinely open.',
        },
        {
          kind: 'commentary',
          id: 'cor2-sincerity',
          html:
            'Paul is answering an implicit charge: that his letters are cunning, his motives mixed, his conduct not what he claims. So he appeals to something external judges cannot directly see—the testimony of his own conscience. He knows his own heart. He has lived not with &ldquo;fleshly wisdom&rdquo; (calculated, self-serving) but by the grace of God. That is his defense, and it is sufficient.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              13,
              t('For we write none other things unto you, than what ye read or '),
              hg('acknowledge', 'cor2-acknowledge'),
              t('; and I trust ye shall acknowledge even to the end;'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-acknowledge',
          html:
            'Paul says: my letters say nothing you have not already read or understood. There is no hidden meaning, no double game. What you see is what you get. The Corinthians have a chance—and Paul trusts they will take it—to understand Paul as he truly is, and to acknowledge him fully.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              14,
              t('As also ye have acknowledged us in part, that we are your rejoicing, even as ye also are ours in the day of the Lord Jesus.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-rejoicing-mutual',
          html:
            'There is an unexpected note of tenderness here. Even as the Corinthians have questioned Paul, Paul says they have acknowledged him in part. And more: they are his rejoicing. On the day of the Lord, Paul will point to them and say: <em>these are the fruit of my labor.</em> The relationship is mutual and will echo into eternity.',
        },
        {
          kind: 'carry',
          html:
            'Paul invites his readers to clarity, honesty, and the kind of conduct that requires no explanation. Your life should be readable. Not ostentatious, not hiding anything in shadows. Live with the simplicity that comes from having nothing to conceal. When others look at you, let them see someone whose words and actions align, someone whose conscience is clear.',
        },
      ],
    },

    /* ─── Confidence in Visitation ──────────────────────────────────────── */
    {
      ref: '2 Corinthians 1:15–17',
      title: 'A Promise Deferred, Not Broken',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              15,
              t('And in this confidence I was minded to come unto you before, that ye might have a second benefit;'),
            ),
            verse(
              16,
              t('And to pass by you into Macedonia, and to come again out of Macedonia unto you, and of you to be brought on my way toward Judaea.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-plan-change',
          html:
            'Paul had promised to visit Corinth twice on his way to Macedonia and back. He has changed the plan. Some in Corinth see this as evidence of flightiness or broken faith. But Paul is about to explain why the change came not from weakness of character, but from strength of principle.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              17,
              t('When I therefore was thus minded, did I use lightness? or the things that I purpose, do I purpose according to the flesh, that with me there should be yea yea, and nay nay?'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-lightness',
          html:
            'Paul denies the charge of &ldquo;lightness&rdquo;—fickleness, instability. Does he plan by the flesh, carelessly, changing his word as whim dictates? No. This leads into one of Scripture&apos;s most theologically dense statements about the nature of God&apos;s word and Christ&apos;s reliability.',
        },
        {
          kind: 'reflection',
          id: 'cor2-1-reliability',
          prompt: 'Paul values the weight of his word and the reliability of his yes and no. In a world of broken promises, what would it mean to be someone whose word could be trusted absolutely?',
        },
      ],
    },

    /* ─── All Promises Yea and Amen in Christ ──────────────────────────── */
    {
      ref: '2 Corinthians 1:18–22',
      title: 'Christ: The Yes to Every Promise',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              18,
              t('But as God is true, our word toward you was not yea and nay.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-god-true',
          html:
            'Paul grounds his integrity in God&apos;s nature: <em>God is true.</em> His word is reliable. Therefore Paul&apos;s word is reliable. The Corinthians should not expect to hear one thing and have another happen. What Paul says stands.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              19,
              t('For the Son of God, Jesus Christ, who was preached among you by us, even by me and Silvanus and Timotheus, was not yea and nay, but in him was yea.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-christ-yea',
          html:
            'Jesus Christ is introduced not as an abstract doctrine but as the preached message: <em>the Son of God, who was preached among you.</em> And Christ&apos;s defining characteristic is that He is not &ldquo;yea and nay&rdquo;—not equivocal, not mixed, not undecided. He is the &ldquo;yea.&rdquo; He is a yes all the way through.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              20,
              t('For all the promises of God in him are yea, and in him Amen, unto the glory of God by us.'),
            ),
          ],
        },
        {
          kind: 'christ',
          id: 'christ-yes-promises',
          title: 'Christ Connection — The Amen to Every Promise',
          html:
            'Every promise in the Old Testament—the promise to Abraham, the covenant with David, the hope of a Messiah—all of them find their &ldquo;yea&rdquo; in Christ. He is the resolution of Scripture&apos;s entire chorus of promises. And &ldquo;Amen&rdquo; is not something we say after He finishes; it is who He is. Christ is God&apos;s &ldquo;Amen&rdquo; (Revelation 3:14)—His faithfulness made visible, His yes made flesh.',
        },
        {
          kind: 'commentary',
          id: 'cor2-amen-meaning',
          html:
            'The word &ldquo;Amen&rdquo; is often thought to mean &ldquo;so be it.&rdquo; But more deeply it means &ldquo;it is true, it is reliable, it is solid.&rdquo; Jesus is God&apos;s Amen—the embodiment of all His promises, the proof that what God says He will do.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(
              21,
              t('Now he which stablisheth us with you in Christ, and hath '),
              t('anointed us'),
              t(', is God;'),
            ),
            verse(
              22,
              t('Who hath also '),
              hg('sealed us, and given the earnest of the Spirit in our hearts', 'cor2-earnest'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'cor2-1-sphragizo',
          title: 'Sphragizō — &ldquo;Sealed&rdquo;; To Mark with a Seal',
          script: 'σφραγίζω',
          translit: '<strong>sphragizō</strong> · to seal, to mark as one&apos;s own, to authenticate',
          description:
            'In the ancient world, a seal was a mark of ownership and authenticity. When God seals a person, they become marked as belonging to Him, authenticated as His. The seal is not hidden—it is a claim upon them for all to see.',
        },
        {
          kind: 'greek',
          id: 'cor2-1-arrabōn',
          title: 'Arrabōn — &ldquo;Earnest&rdquo;; Down Payment',
          script: 'ἀρραβών',
          translit: '<strong>arrabōn</strong> · pledge, down payment, earnest money',
          description:
            'In a business transaction, the arrabōn is a deposit given as guarantee that the full payment will follow. The Holy Spirit is God&apos;s guarantee: the down payment that the full inheritance will be delivered. He is not all of what is promised, but He is real, He is precious, and He is the promise kept in miniature.',
        },
        {
          kind: 'commentary',
          id: 'cor2-earnest',
          html:
            'God has sealed us (marked us as His), and has given us the Spirit as an earnest—a down payment, a guarantee. The Holy Spirit living in the believer is not the completion of salvation; it is the promise that completion is coming. To have the Spirit now is to have a real taste of the inheritance that will be fully yours when Christ returns.',
        },
        {
          kind: 'christ',
          id: 'christ-spirit-earnest',
          title: 'Christ Connection — The Spirit As the Pledge of the Inheritance',
          html:
            'In Ephesians 1:14, Paul writes that the Spirit is &ldquo;the earnest of our inheritance until the redemption of the purchased possession.&rdquo; The Spirit seals us and gives us a foretaste of the glory to come. We do not have the full inheritance yet, but we have Someone who is both the proof of the promise and a genuine experience of it—enough to sustain us now, enough to make us long for the fullness that is coming (Romans 8:23).',
        },
        {
          kind: 'carry',
          html:
            'You are sealed. You belong to God. You carry the mark of His ownership on you. And He has given you a real experience of His Spirit now—not the whole future, but enough to sustain you. The Spirit living in you is God&apos;s down payment, His guarantee that the promise He has made will be fulfilled. When you feel the Spirit&apos;s work in you—His comfort, His direction, His fruit—you are tasting what is to come.',
        },
        {
          kind: 'reflection',
          id: 'cor2-1-sealed',
          prompt: 'What does it mean to be sealed by God? How does the Spirit living in you serve as a pledge of what God has promised? What confidence does that give you right now?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Blessed be God, even the Father of our Lord Jesus Christ, the Father of mercies, and the God of all comfort.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Corinthians 1 · Study Guide',
  },

  resources: [
    {
      id: 'perseus-parakaleo-lexicon',
      kind: 'study',
      source: 'Perseus Digital Library',
      label: 'Parakaleo (παρακαλέω) — Comfort &amp; Exhortation',
      url: 'https://www.perseus.tufts.edu/hopper/morph?l=parakalesis&la=greek',
      description: 'Perseus Scaife entry for parakaleo and related forms — the verb meaning to comfort, encourage, exhort by coming alongside.',
    },
    {
      id: 'sefaria-isaiah-65-promises',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah 65 — Renewal &amp; Promise',
      url: 'https://www.sefaria.org/Isaiah.65',
      description: 'Full text of Isaiah 65 with Rabbinic and Medieval Jewish commentary on God&apos;s promises of renewal — theological background for Paul&apos;s "Yea and Amen" theology.',
    },
    {
      id: 'theoi-homer-arrabōn',
      kind: 'archive',
      source: 'Theoi Classical Texts',
      label: 'Arrabōn in Ancient Greek Commerce',
      url: 'https://www.theoi.com/Library.html',
      description: 'Theoi collection of classical texts documenting arrabōn (earnest, down payment) in ancient Greek commercial law and maritime contracts.',
    },
    {
      id: 'topostext-asia-minor-sites',
      kind: 'archaeology',
      source: 'ToposText',
      label: 'Asia Minor Archaeological Sites &amp; Ancient Texts',
      url: 'https://topostext.org/the-places',
      description: 'ToposText database of 8,150 mapped historic places in Asia Minor and Mediterranean, with ancient literary citations — archaeological context for the province of Asia and Paul&apos;s affliction.',
    },
  ],

  hasHebrew: false,
};
