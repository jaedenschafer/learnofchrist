import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 2 Corinthians 4 — Treasure in Earthen Vessels
 *
 * Paul reflects on the glory and the humility of his calling to preach the
 * gospel. The treasure—Christ, the light of the knowledge of God&apos;s glory—has
 * been entrusted to vessels of clay: weak, breakable, ordinary ministers. This
 * paradox is not a flaw. It is by divine design. When the container cracks, the
 * light shines through. The chapter is the gospel for the tired, the afflicted,
 * and anyone who has ever felt too small for what they have been asked to carry.
 */
export const SECOND_CORINTHIANS_4: RichChapterContent = {
  bookSlug: '2-corinthians',
  bookName: '2 Corinthians',
  chapter: 4,

  estimatedMinutes: { beginner: 7, intermediate: 12, deep: 18 },
  intros: [
    'Paul has just finished defending his apostolic authority against false teachers who question whether he is truly an apostle. Now, in chapter 4, he shifts to the heart of the matter: what is the point of the ministry itself? Why does God give such a glorious treasure—the gospel of Christ—to people as fragile as Paul, as beset by troubles and doubts as any of us? The answer is breathtaking: so that the power will belong to God alone, not to the vessel that carries it.',
    'Two truths hold together in this chapter. First, the gospel is treasure—incomparable, radiant, the knowledge of the glory of God in the face of Jesus Christ. Second, we who carry it are earthen vessels—breakable, ordinary, sometimes crushed by affliction. But when we are afflicted, we are not abandoned. When we are perplexed, we are not in despair. When we are cast down, we are not destroyed. Why? Because we are bearing about in our body the dying of Jesus, and His life is at work in us. The renewal that meets us day by day is resurrection itself.',
  ],

  sections: [
    /* ─── 2 Corinthians 4:1–2 — We Faint Not ────────────────────────────────── */
    {
      ref: '2 Corinthians 4:1–2',
      title: 'We Faint Not',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 1,
              spans: [
                t('Therefore seeing we have this ministry, as we have received mercy, '),
                hp('we faint not', 'christ-faint-not'),
                t(';'),
              ],
            },
            {
              number: 2,
              spans: [
                t('But have '),
                hg('renounced the hidden things of dishonesty', 'c-renounced'),
                t(', not walking in craftiness, nor handling the word of God deceitfully; but by manifestation of the truth commending ourselves to every man&apos;s conscience in the sight of God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-renounced',
          html:
            'Paul has already faced opponents who preach &ldquo;another Jesus,&rdquo; peddle &ldquo;deceitful spirits&rdquo; (11:4, 13). Here he names the temptation plainly: the hidden things of dishonesty. It would be easier to shade the truth, to twist the gospel into something the world wants. Paul refuses. The ministry stands or falls on truthfulness.',
        },
        {
          kind: 'greek',
          id: 'greek-egkakeo',
          title: 'Egkakeō — &ldquo;to lose heart&rdquo;',
          script: 'ἐγκακέω',
          translit: '<strong>egkakéō</strong> · to lose heart, grow weary, give up in despair',
          description:
            'Paul does not say &ldquo;we will not be afflicted&rdquo; or &ldquo;we will not struggle.&rdquo; He says &ldquo;we lose not heart.&rdquo; The affliction is real. The temptation to quit is real. But quitting is what we refuse.',
        },
        {
          kind: 'christ',
          id: 'christ-faint-not',
          title: 'Christ Connection — Jesus in Gethsemane',
          html:
            'Jesus faced a moment when He might have fainted—a moment of soul-crushing darkness in the garden. Yet He pressed through. Paul writes later, &ldquo;I can do all things through Christ which strengtheneth me&rdquo; (Phil. 4:13). The refusal to faint is not human resolve. It is the strength of the risen Jesus working through a weak vessel.',
        },
        {
          kind: 'carry',
          html:
            'There will be a Tuesday when you want to quit—when the thing you have been asked to do feels too hard, too thankless, too much. In that moment, you are standing where Paul stood. And he tells you plainly: the very weakness you feel is the place where His grace is most real. You do not faint because He does not faint in you.',
        },
        {
          kind: 'reflection',
          id: 'cor4-faint-not',
          prompt: 'Where are you most tempted to give up right now? What would it look like to refuse to faint, to keep going precisely because you are not relying on your own strength?',
        },
      ],
    },

    /* ─── 2 Corinthians 4:3–4 — The Gospel Hidden ──────────────────────────── */
    {
      ref: '2 Corinthians 4:3–4',
      title: 'If Our Gospel Be Hid',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 3,
              spans: [
                t('But if our gospel be '),
                hg('hid, it is hid to them that are lost', 'c-gospel-hid'),
                t(':'),
              ],
            },
            {
              number: 4,
              spans: [
                t('In whom the god of this world hath '),
                hy('blinded the minds', 'greek-tuphloo'),
                t(' of them which believe not, lest the light of the glorious gospel of Christ, who is the image of God, should shine unto them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-gospel-hid',
          html:
            'Paul does not say the gospel is hidden because it is too difficult or obscure. It is hidden to those who are lost—that is, to those who refuse to look at it. The gospel is accessible to anyone. But not everyone sees it. Why? Because there is a force working to keep them from seeing.',
        },
        {
          kind: 'greek',
          id: 'greek-tuphloo',
          title: 'Typhlóō — &ldquo;to blind&rdquo;',
          script: 'τυφλόω',
          translit: '<strong>typhlóō</strong> · to blind; to make blind; to cause intellectual darkness',
          description:
            'Not physical blindness. The world system, working against God, has darkened the minds of unbelievers. Paul speaks plainly: there is a real adversary who profits from people not seeing Christ. And yet the gospel is still light—still trying to break through.',
        },
        {
          kind: 'commentary',
          id: 'c-god-of-world',
          html:
            'Paul calls Satan &ldquo;the god of this world.&rdquo; He does not mean Satan is God. He means that in this age, Satan operates as a false deity, receiving worship and belief from those under his influence. The real light of the real God has come into the world. But many prefer the darkness.',
        },
        {
          kind: 'carry',
          html:
            'If you have ever found it hard to believe the gospel—hard to believe you are loved, hard to believe you are forgiven, hard to believe Christ&apos;s power is working in you—now you know you are not alone. There is a real resistance to the light. But the light is still shining. You are still invited to look.',
        },
        {
          kind: 'reflection',
          id: 'cor4-gospel-hid',
          prompt: 'What part of the gospel do you find hardest to see or believe? Ask God to open your eyes to see the light you are most resisting.',
        },
      ],
    },

    /* ─── 2 Corinthians 4:5–6 — Christ the Lord, Light in Our Hearts ──────────── */
    {
      ref: '2 Corinthians 4:5–6',
      title: 'Light to Shine Out of Darkness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 5,
              spans: [
                t('For we preach not ourselves, but '),
                hg('Christ Jesus the Lord', 'c-servants'),
                t('; and ourselves your servants for Jesus&apos; sake.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('For God, who commanded the '),
                hy('light to shine out of darkness', 'c-light-darkness'),
                t(', hath '),
                hp('shined in our hearts', 'christ-glory-face'),
                t(', to give the '),
                hy('light of the knowledge of the glory of God', 'greek-theotes'),
                t(' in the face of Jesus Christ.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-light-darkness',
          html:
            'Paul reaches back to Genesis 1:3—&ldquo;let there be light.&rdquo; The first creative word God spoke into a dark, formless chaos was the word of light. Now, in the gospel, the same voice speaks the same word. The light that blazed in the beginning is the same light that now shines in human hearts. Paul is saying: the resurrection and the gospel are as radical as creation itself.',
        },
        {
          kind: 'greek',
          id: 'greek-doxa',
          title: 'Doxa — &ldquo;glory&rdquo;',
          script: 'δόξα',
          translit: '<strong>doxa</strong> · glory; splendor; the manifest presence and power of God',
          description:
            'Not honor or reputation in the ordinary sense. The glory of God is His visible, radiant presence—what Moses saw on Mount Sinai, what the angels beheld at the Transfiguration. And now Paul says this glory is visible &ldquo;in the face of Jesus Christ.&rdquo; To see Jesus is to see the glory.',
        },
        {
          kind: 'greek',
          id: 'greek-theotes',
          title: 'Theotēs — &ldquo;the knowledge of the glory of God&rdquo;',
          script: 'θεότης',
          translit: '<strong>theotēs</strong> · godhead; divine nature; the essence of divinity',
          description:
            'The &ldquo;knowledge of the glory of God&rdquo; refers to an intimate knowing of God&apos;s divine character and presence. This knowledge is not abstract theology. It is revealed &ldquo;in the face of Jesus Christ&rdquo;—where God&apos;s nature becomes visible, tangible, personal.',
        },
        {
          kind: 'christ',
          id: 'christ-glory-face',
          title: 'Christ Connection — The Face of Glory',
          html:
            'When Jesus came, the glory of God—the very presence and power that Jews expected to see only in the Temple, only on rare occasions—appeared in human form. &ldquo;We beheld his glory, the glory as of the only begotten of the Father, full of grace and truth&rdquo; (John 1:14). And now, through faith, that same glory shines into the believer&apos;s heart. The light of Genesis 1:3 has found a face.',
        },
        {
          kind: 'commentary',
          id: 'c-servants',
          html:
            'The preacher&apos;s job is not to promote himself. Paul says plainly: we preach not ourselves. We are servants—people who carry water, stoop to wash feet, exist for someone else&apos;s sake. &ldquo;Ourselves your servants for Jesus&apos; sake.&rdquo; The smaller the vessel, the clearer the treasure.',
        },
        {
          kind: 'carry',
          html:
            'You have been given the same light that spoke creation into being. It now shines in your heart, not because you earned it, but because Christ has come. When you face darkness—in yourself, in others, in the world—remember: you are not the light. But the Light lives in you. And the Light knows how to overcome darkness.',
        },
        {
          kind: 'reflection',
          id: 'cor4-light-face',
          prompt: 'How is your understanding of Jesus changed by knowing that in His face, you see the glory of God—the same radiance that spoke light into being?',
        },
        {
          kind: 'artwork',
          matchTitle: /light|creation/i,
          matchArtist: /tissot|rembrandt/i,
          caption: '2 Corinthians 4:5–6 · Light to Shine Out of Darkness',
        },
      ],
    },

    /* ─── 2 Corinthians 4:7–9 — Earthen Vessels ────────────────────────────── */
    {
      ref: '2 Corinthians 4:7–9',
      title: 'Treasure in Earthen Vessels',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 7,
              spans: [
                t('But we have this '),
                hy('treasure in earthen vessels', 'greek-thesauros'),
                t(', that the '),
                hg('excellency of the power may be of God', 'c-power-of-god'),
                t(', and not of us.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('We are troubled on every side, yet '),
                hg('not distressed', 'c-affliction-paradox'),
                t('; we are perplexed, but not in despair;'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Persecuted, but not forsaken; cast down, but not destroyed;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-power-of-god',
          html:
            'The paradox is the point. If God chose to give the gospel to perfect, invincible people, the world might credit the messenger. &ldquo;Look what a strong person can accomplish!&rdquo; But He chose the weak. He chose the sick. He chose vessels so fragile they crack. Why? So that when the gospel transforms a life, heals the broken, raises the spiritually dead—everyone knows it is not the power of the vessel. It is the power of what the vessel carries.',
        },
        {
          kind: 'greek',
          id: 'greek-thesauros',
          title: 'Thēsauros — &ldquo;treasure&rdquo;',
          script: 'θησαυρός',
          translit: '<strong>thēsauros</strong> · treasure; stored wealth; something precious kept safe',
          description:
            'The word suggests something held in reserve, something of inestimable value. The gospel is not spare change. It is the wealth of the knowledge of God, the riches of Christ, the light of the world. And it is entrusted to us.',
        },
        {
          kind: 'greek',
          id: 'greek-ostrakinos',
          title: 'Ostrakinos — &ldquo;earthen&rdquo;',
          script: 'ὀστράκινος',
          translit: '<strong>ostrakinos</strong> · earthen; made of clay; fragile; cheap',
          description:
            'Clay vessels cost almost nothing. They break easily. Yet they were used throughout the ancient world to store precious liquids—oil, wine, perfume. The contrast between the cheapness of the container and the value of the contents is exactly Paul&apos;s point.',
        },
        {
          kind: 'commentary',
          id: 'c-affliction-paradox',
          html:
            'Paul does not say &ldquo;we are not troubled.&rdquo; He is honest about the affliction. Troubled on every side. Perplexed. Persecuted. Cast down. But watch the second half of each clause: &ldquo;not distressed,&rdquo; &ldquo;not in despair,&rdquo; &ldquo;not forsaken,&rdquo; &ldquo;not destroyed.&rdquo; The affliction is real. The breaking is real. But so is the refusal to break completely.',
        },
        {
          kind: 'carry',
          html:
            'You do not have to be extraordinary to carry the gospel. You do not have to be strong, confident, or put-together. The text says: you are earthen. You are fragile. You are ordinary. That is not a problem. That is exactly the point. When you speak the truth, love the unlovable, forgive the guilty, stand when you want to run—the world sees it is not you. It is Him. And that is when the treasure shows.',
        },
        {
          kind: 'reflection',
          id: 'cor4-earthen-vessels',
          prompt: 'What weakness or ordinariness have you been ashamed of? How might God actually be using that very thing to show His power to someone who needs to see it?',
        },
      ],
    },

    /* ─── 2 Corinthians 4:10–12 — Bearing the Dying of Jesus ─────────────────── */
    {
      ref: '2 Corinthians 4:10–12',
      title: 'Bearing the Dying of Jesus',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 10,
              spans: [
                t('Always '),
                hg('bearing about in the body the dying of the Lord Jesus', 'c-bearing-dying'),
                t(', that the life also of Jesus might be made manifest in our body.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('For we which live are alway delivered unto death for Jesus&apos; sake, that the life also of Jesus might be made manifest in our mortal flesh.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('So then death worketh in us, but life in you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-bearing-dying',
          html:
            'This is the mystery of the Christian life: we are not separate from Christ&apos;s death. We carry it about in our body. Every time we refuse what we want, every time we love instead of judge, every time we lose our life to find it, we are enacting the dying of Jesus. And as we die with Him, so we live with Him. The resurrection is not only future. It is breaking through now.',
        },
        {
          kind: 'greek',
          id: 'greek-nekrosis',
          title: 'Nekrōsis — &ldquo;putting to death&rdquo;',
          script: 'νέκρωσις',
          translit: '<strong>nekrōsis</strong> · dying; death; the deadening of the body',
          description:
            'Paul uses a word that means not just death but the active process of dying, the deadening. In the Gospel narratives, Jesus speaks of taking up a cross—of the daily mortification of the flesh. Paul says believers live in that same mortification, and in it, life is revealed.',
        },
        {
          kind: 'christ',
          id: 'christ-dying-rising',
          title: 'Christ Connection — Union with Christ&apos;s Death and Resurrection',
          html:
            'Paul writes elsewhere: &ldquo;I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me&rdquo; (Gal. 2:20). And to the Philippians: &ldquo;If by any means I might attain unto the resurrection of the dead. Not as though I had already attained, either were already perfect: but I follow after&rdquo; (Phil. 3:10–11). The believer&apos;s suffering is not punishment. It is participation in Christ&apos;s redemptive death—and His resurrection life begins now.',
        },
        {
          kind: 'commentary',
          id: 'c-death-life',
          html:
            'The economy of the gospel is always paradoxical: &ldquo;Death worketh in us, but life in you.&rdquo; The apostle drinks the cup that others are spared. He carries the dying so that those he serves can carry life. This is not meant to be an invitation to martyrdom for martyrdom&apos;s sake. But it is Paul&apos;s witness that self-denial, faithfulness, and the willingness to lose your life are not punishments. They are the very mechanics by which resurrection power enters the world.',
        },
        {
          kind: 'carry',
          html:
            'You will be asked to die. Not necessarily to lose your physical life, but to let go of what you want, to forgive what you want to hold against someone, to love when it costs you, to speak truth when silence is easier. Each time you do, you are bearing about the dying of Jesus. And each time, His life—His resurrection, His joy, His victory—breaks through in you and in others.',
        },
        {
          kind: 'reflection',
          id: 'cor4-dying-living',
          prompt: 'What is God asking you to die to right now? How might that dying actually be the birth of His life in you?',
        },
      ],
    },

    /* ─── 2 Corinthians 4:13–15 — The Same Spirit of Faith ─────────────────── */
    {
      ref: '2 Corinthians 4:13–15',
      title: 'The Same Spirit of Faith',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 13,
              spans: [
                t('We having the same spirit of faith, according as it is written, I believed, and therefore have I spoken; we also believe, and '),
                hg('therefore speak', 'c-faith-speak'),
                t(';'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Knowing that he which raised up the Lord Jesus shall also raise up us by Jesus, and shall present us with you.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('For all things are for your sakes, that the grace being multiplied through the thanksgiving of many may abound to the glory of God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-faith-speak',
          html:
            'Paul quotes Psalm 116:10—a psalm of someone in desperate circumstances who says, &ldquo;I believed, and therefore have I spoken.&rdquo; Faith does not stay silent. It speaks, witnesses, confesses, shares. Paul says: we have the same spirit. The same faith that moved the psalmist to speak moves the apostle to preach. And it moves us to testify.',
        },
        {
          kind: 'commentary',
          id: 'c-resurrection-hope',
          html:
            'All of Paul&apos;s confidence rests on resurrection. &ldquo;He which raised up the Lord Jesus shall also raise up us by Jesus.&rdquo; Not because we are strong. Not because we have earned it. But because death could not hold Jesus, and death will not hold us. The same power that overturned the grave is the power that sustains us now.',
        },
        {
          kind: 'carry',
          html:
            'You have seen what faith did: it made the psalmist speak. It makes Paul preach. It makes you testify. Not because you are eloquent or confident, but because you believe. The one thing the world needs from you is your voice. Tell them what you have seen, what you have learned, what you have come to believe about Jesus. Your story, broken as it is, is the gospel to someone.',
        },
        {
          kind: 'reflection',
          id: 'cor4-faith-speak',
          prompt: 'Who in your life needs to hear not a sermon, but your simple testimony—what you actually believe about God and why?',
        },
      ],
    },

    /* ─── 2 Corinthians 4:16–18 — Renewed Day by Day ────────────────────────── */
    {
      ref: '2 Corinthians 4:16–18',
      title: 'A Far More Exceeding and Eternal Weight of Glory',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 16,
              spans: [
                t('For which cause we faint not; but though our outward man '),
                hg('perish, yet the inward man is renewed day by day', 'greek-anakainoo'),
                t('.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('For our light affliction, which is but for a moment, worketh for us a '),
                hy('far more exceeding and eternal weight of glory', 'greek-hyperbol'),
                t(';'),
              ],
            },
            {
              number: 18,
              spans: [
                t('While we look not at the things which are seen, but at the things which are not seen: for the things which are '),
                hg('seen are temporal', 'c-temporal-eternal'),
                t('; but the things which are not seen are '),
                hg('eternal', 'c-temporal-eternal'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-temporal-eternal',
          html:
            'Paul ends the chapter with a vision that reframes everything. What we see—our bodies aging, our circumstances shifting, the world in turmoil—all of it is temporal. It is passing away. But there is an unseen reality that is eternal. Not less real. More real. The visible is the shadow. The invisible is the substance. To live as a Christian is to train your eyes to see what your physical sight cannot see.',
        },
        {
          kind: 'greek',
          id: 'greek-anakainoo',
          title: 'Anakainoō — &ldquo;to renew&rdquo;',
          script: 'ἀνακαινόω',
          translit: '<strong>anakainoō</strong> · to renew; to make new again; to restore',
          description:
            'The word suggests not just a patch-up but a radical making-new. Each day. Not once, at conversion. But every day, the inward person is renewed. The Greek suggests the action is continuous, habitual. Every morning brings a new grace.',
        },
        {
          kind: 'greek',
          id: 'greek-hyperbol',
          title: 'Hyperbolē — &ldquo;exceeding&rdquo;',
          script: 'ὑπερβολή',
          translit: '<strong>hyperbolē</strong> · excess; superiority; surpassing degree; transcendence',
          description:
            'Our English word &ldquo;hyperbole&rdquo; comes from this Greek word. Hyperbolē suggests something so far beyond comparison that language almost breaks down trying to describe it. Paul is saying: the glory that awaits is not just greater than our afflictions. It is incomparably greater. Beyond what words can hold.',
        },
        {
          kind: 'christ',
          id: 'christ-eternal-glory',
          title: 'Christ Connection — The Already-But-Not-Yet Kingdom',
          html:
            'Jesus taught His disciples to pray, &ldquo;Thy kingdom come. Thy will be done in earth, as it is in heaven&rdquo; (Matt. 6:10). The kingdom has come in Jesus. And it is still coming. Believers live in this tension—already saved, but not yet fully transformed; already raised with Christ, but not yet in bodies that do not perish; already experiencing renewal, but still aging in the flesh. Paul points believers to the unseen eternal reality (Heb. 12:2) that will one day be fully visible.',
        },
        {
          kind: 'commentary',
          id: 'c-light-affliction',
          html:
            'Paul calls his afflictions &ldquo;light affliction, which is but for a moment.&rdquo; Not because they do not hurt. He has been beaten, shipwrecked, imprisoned, abandoned. But because they are weighted against an eternal glory that surpasses them entirely. The comparison makes the affliction appear what it is: a passing shadow. The glory is what is real and lasting.',
        },
        {
          kind: 'carry',
          html:
            'Your outward circumstances—your body, your job, your address, the year you live in—all of it is temporary. It is not nothing. It matters because God made it and called it good. But it is not the deepest reality. The deepest reality is invisible: God&apos;s love, His kingdom, His resurrection power working in you, the eternal weight of glory waiting. Look there. Not instead of your life, but through it. And your whole life changes.',
        },
        {
          kind: 'reflection',
          id: 'cor4-eternal-weight',
          prompt: 'What temporal thing are you most anxious about right now? How might it look different if you truly saw it against the backdrop of an eternal, exceeding weight of glory?',
        },
        {
          kind: 'artwork',
          matchTitle: /eternal|glory|heaven/i,
          caption: '2 Corinthians 4:16–18 · An Eternal Weight of Glory',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'For our light affliction, which is but for a moment, worketh for us a far more exceeding and eternal weight of glory.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Corinthians 4 · Study Guide',
  },
};
