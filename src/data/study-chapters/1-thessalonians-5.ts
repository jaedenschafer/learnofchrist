import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Thessalonians 5 — The Day of the Lord; Living in Light
 *
 * "For yourselves know perfectly that the day of the Lord so cometh as a thief
 * in the night." The closing chapter of 1 Thessalonians presents an eschatological
 * paradox: Christ&apos;s return is certain but unknowable. Believers are not destined
 * for wrath but for salvation. They are children of light called to sobriety,
 * vigilance, prayer, and grateful rejoicing. The chapter closes with Paul&apos;s
 * benediction of sanctification and grace.
 */
export const FIRST_THESSALONIANS_5: RichChapterContent = {
  bookSlug: '1-thessalonians',
  bookName: '1 Thessalonians',
  chapter: 5,

  intros: [
    'The day of the Lord is certain but unexpected. Those who belong to Christ are not in darkness; they have been called into light and are destined for salvation, not wrath. Yet this hope does not excuse passivity. Instead, it demands vigilance, sobriety, and a life of prayer and gratitude.',
    'Paul&apos;s closing exhortations to the Thessalonians form a single vision of life lived in readiness for Christ&apos;s return. Be watchful. Rejoice always. Pray without ceasing. Test all things. Hold fast to good. And look forward to the sanctification that will come at His appearing.',
  ],

  bottomShare: {
    label: 'Share 1 Thessalonians 5',
    quote:
      'The day of the Lord cometh as a thief in the night. Ye are all the children of light, and the children of the day. Rejoice evermore. Pray without ceasing. Prove all things; hold fast that which is good.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Thessalonians 5 · Study Guide',
  },

  sections: [
    /* ─── The Day of the Lord as a Thief ──────────────────────────────── */
    {
      ref: '1 Thessalonians 5:1–3',
      title: 'The Day of the Lord as a Thief',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 1,
              spans: [
                t('But of the times and the seasons, brethren, ye have no need that I write unto you.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('For yourselves know perfectly that the '),
                hp('day of the Lord so cometh as a thief in the night', 'thief-coming'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'thief-coming',
          html:
            '&ldquo;The day of the Lord so cometh as a thief in the night.&rdquo; The parousia—Christ&apos;s appearing—is sudden and unexpected. This does not mean it is unknowable in principle; rather, it is unpredictable in timing. The Thessalonians already understand this. Paul does not belabor the point but presses its ethical consequence: readiness is demanded of believers.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 3,
              spans: [
                t('For when they shall say, '),
                hg('Peace and safety; then sudden destruction cometh upon them, as travail upon a woman with child', 'peace-safety'),
                t('; and they shall not escape.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'peace-safety',
          html:
            '&ldquo;When they shall say, Peace and safety; then sudden destruction cometh upon them.&rdquo; The world cries peace and security, but judgment comes swiftly. Those who are not vigilant—who have not been watching—will be overtaken. The metaphor of birth pangs suggests both inevitability and a specific moment of arrival.',
        },
        {
          kind: 'greek',
          id: 'parousia',
          title: 'Parousia — &ldquo;Coming&rdquo;',
          script: 'παρουσία',
          translit: '<strong>Parousia</strong> · coming; arrival; presence; the appearing of Christ at the end of the age',
          description:
            'Parousia originally meant the arrival or visit of a king or dignitary. In the NT it denotes Christ&apos;s future appearing in power and glory. It is not a private event but a cosmic, public manifestation.',
        },
        {
          kind: 'christ',
          id: 'christ-thief',
          title: 'Christ Connection — The Thief in the Night',
          html:
            'Jesus Himself taught this parable: &ldquo;If the goodman of the house had known in what watch the thief would come, he would have watched&rdquo; (Matthew 24:43). The unexpectedness of His return is not weakness but a test of faithfulness. Believers are to watch even when the hour remains hidden.',
        },
        {
          kind: 'carry',
          html:
            'You do not know the day or the hour of Christ&apos;s return. But you do know it will come. This is not meant to provoke anxiety but wakefulness. How does your life look if Christ came today? Are you living in readiness?',
        },
        {
          kind: 'reflection',
          id: 'thief-reflect',
          prompt:
            'The day of the Lord comes like a thief—unexpected. Does this hope make you more vigilant, or does it make you anxious? What would change in your daily life if you truly lived in readiness?',
        },
      ],
    },

    /* ─── Children of Light ──────────────────────────────────────────── */
    {
      ref: '1 Thessalonians 5:4–5',
      title: 'Children of Light',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 4,
              spans: [
                t('But ye, brethren, are not in darkness, that that day should overtake you as a thief.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Ye are all the '),
                hg('children of light, and the children of the day', 'children-light'),
                t(': we are not of the night, nor of darkness.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'children-light',
          html:
            '&ldquo;Ye are all the children of light, and the children of the day.&rdquo; This is identity language. You are not merely trying to become light; you already are light. Your belonging to Christ has already transferred you from darkness to light. This reality—not as aspiration but as fact—must govern how you live.',
        },
        {
          kind: 'greek',
          id: 'teknon-phos',
          title: 'Teknon Phōtos — &ldquo;Children of Light&rdquo;',
          script: 'τέκνον φωτός',
          translit: '<strong>Teknon phōtos</strong> · child of light; one belonging to the realm of light; one bearing the nature of light',
          description:
            'To be a child of light is to share in the nature of light itself—clarity, truth, visibility. It is both a gift and a calling. You have been made light; now live as light.',
        },
        {
          kind: 'carry',
          html:
            'You belong to the day, not the night. You have been brought into light. This is not something you must achieve; it is something you already are in Christ. But it means you cannot live as those who stumble in darkness. Your identity demands a certain way of life.',
        },
      ],
    },

    /* ─── Watch and Be Sober ────────────────────────────────────────── */
    {
      ref: '1 Thessalonians 5:6–8',
      title: 'Watch and Be Sober',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 6,
              spans: [
                t('Therefore let us not sleep, as do others; but let us '),
                hg('watch and be sober', 'watch-sober'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'watch-sober',
          html:
            '&ldquo;Let us not sleep, as do others; but let us watch and be sober.&rdquo; Sleep here is not literal rest but spiritual torpor. The world sleeps—dull to the coming judgment, absorbed in false peace. Believers are to be awake and alert, not from fear but from vigilant love of the returning Lord.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 8,
              spans: [
                t('But let us, who are of the day, be sober, '),
                hy('putting on the breastplate of faith and love; and for an helmet, the hope of salvation', 'armor-faith'),
                t(';'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'armor-faith',
          html:
            '&ldquo;Putting on the breastplate of faith and love; and for an helmet, the hope of salvation.&rdquo; The armor language echoes Ephesians. But here it is abbreviated and domestic. Not elaborate weaponry but the three virtues that guard the believer: faith protects the heart, love sustains it, hope guards the mind. These are the armor of light.',
        },
        {
          kind: 'greek',
          id: 'grēgoreō',
          title: 'Grēgoreō — &ldquo;Watch&rdquo;',
          script: 'γρηγορέω',
          translit: '<strong>Grēgoreō</strong> · to be awake; to be vigilant; to keep watch; to remain alert',
          description:
            'Grēgoreō appears throughout the NT in Christ&apos;s commands to His disciples: &ldquo;Watch ye therefore&rdquo; (Matthew 24:42). It is not anxious worry but steady, prayerful alertness.',
        },
        {
          kind: 'christ',
          id: 'christ-armor',
          title: 'Christ Connection — Put On Christ',
          html:
            'Paul writes elsewhere, &ldquo;But put ye on the Lord Jesus Christ, and make not provision for the flesh&rdquo; (Romans 13:14). To put on faith, love, and hope is to put on Christ Himself. These virtues are not our manufacture but His gift and presence in us.',
        },
        {
          kind: 'carry',
          html:
            'You are called to be sober and watchful, not slack and asleep. This means tending to your heart with faith, your relationships with love, and your future with hope. These are not burdensome duties but the protection and strength Christ provides.',
        },
        {
          kind: 'reflection',
          id: 'watch-reflect',
          prompt:
            'Where do you most struggle to stay spiritually awake? What robs you of sobriety and vigilance? How would putting on faith, love, and hope strengthen you right now?',
        },
      ],
    },

    /* ─── God Hath Not Appointed Us to Wrath ───────────────────────── */
    {
      ref: '1 Thessalonians 5:9–10',
      title: 'God Hath Not Appointed Us to Wrath',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 9,
              spans: [
                t('For God hath not appointed us to wrath, but to obtain '),
                hp('salvation by our Lord Jesus Christ', 'salvation-appointed'),
                t(','),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'salvation-appointed',
          html:
            '&ldquo;God hath not appointed us to wrath, but to obtain salvation.&rdquo; This is the answer to anxiety. The Thessalonians may have feared that they would face God&apos;s judgment like the rest of the world. Paul assures them: no. You have been appointed to salvation. The final judgment that comes as a thief in the night does not overtake those who belong to Christ.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 10,
              spans: [
                t('Who '),
                hy('died for us, that, whether we wake or sleep, we should live together with him', 'died-together'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'died-together',
          html:
            '&ldquo;Who died for us, that, whether we wake or sleep, we should live together with him.&rdquo; Christ&apos;s death is the ground of our salvation. It is not our watchfulness that saves us but His death. And the promise is union with Him—whether we are alive or asleep (dead) at His appearing, we will live together with Him.',
        },
        {
          kind: 'greek',
          id: 'sotēria',
          title: 'Sotēria — &ldquo;Salvation&rdquo;',
          script: 'σωτηρία',
          translit: '<strong>Sotēria</strong> · salvation; deliverance; the state of being saved; preservation',
          description:
            'Salvation is not escape from the world but rescue from judgment and union with Christ. It is the central gift of the gospel—not what we earn but what Christ procures and gives.',
        },
        {
          kind: 'christ',
          id: 'christ-died',
          title: 'Christ Connection — Christ Died for Us',
          html:
            '&ldquo;Christ died for us&rdquo; (1 Thessalonians 5:10). This is the center of Paul&apos;s faith. The death of Christ is not a historical fact but the event through which believers are reconciled to God. His death secures our salvation. His resurrection ensures our future. His appearing will complete our redemption.',
        },
        {
          kind: 'carry',
          html:
            'You are not destined for wrath. Your salvation is not dependent on your watchfulness but on Christ&apos;s death. He died for you. That death covers your past, secures your present, and promises your future—union with Him, whether living or dead at His return.',
        },
      ],
    },

    /* ─── Comfort One Another ────────────────────────────────────────── */
    {
      ref: '1 Thessalonians 5:11',
      title: 'Comfort One Another',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 11,
              spans: [
                t('Wherefore '),
                hg('comfort yourselves together, and edify one another', 'comfort-together'),
                t(', even as also ye do.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'comfort-together',
          html:
            '&ldquo;Comfort yourselves together, and edify one another.&rdquo; The doctrine of Christ&apos;s return and our salvation through His death is not meant to isolate believers in personal hope. It is communal. We remind one another. We strengthen one another. The local church is the place where we tell each other the truth about Christ&apos;s coming and our security in Him.',
        },
        {
          kind: 'carry',
          html:
            'You have a ministry to those around you: to remind them of Christ&apos;s love, to assure them of salvation, to comfort them with the hope you share. This is what it means to edify one another—to build up the church through the gospel.',
        },
        {
          kind: 'reflection',
          id: 'comfort-reflect',
          prompt:
            'Who in your church or community needs to hear the comfort of Christ&apos;s return and promise of salvation? How can you encourage and edify them this week?',
        },
      ],
    },

    /* ─── Esteem Your Laborers ───────────────────────────────────────── */
    {
      ref: '1 Thessalonians 5:12–13',
      title: 'Esteem Your Laborers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 12,
              spans: [
                t('And we beseech you, brethren, to know them which '),
                hg('labour among you, and are over you in the Lord, and admonish you', 'labour-leaders'),
                t(';'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And to '),
                hy('esteem them very highly in love for their work&apos;s sake', 'esteem-love'),
                t('. And be at peace among yourselves.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'labour-leaders',
          html:
            '&ldquo;Know them which labour among you, and are over you in the Lord, and admonish you.&rdquo; Church leadership is defined by labour—hard work. Elders and overseers are not lords but servants who toil for the congregation. They bear the burden of pastoral care and correction.',
        },
        {
          kind: 'commentary',
          id: 'esteem-love',
          html:
            '&ldquo;Esteem them very highly in love for their work&apos;s sake.&rdquo; The congregation is called to honor those who labor. Not for their status but for their work. This respect holds the church together—leaders and people are bound by mutual respect rooted in Christ.',
        },
        {
          kind: 'carry',
          html:
            'If you are in a local church, your leaders carry a burden for your souls. Honor them. Support them. Receive their correction. And be at peace with one another. A divided congregation is a sign that leaders are not being honored and brothers and sisters are not esteeming one another.',
        },
      ],
    },

    /* ─── Warn the Unruly, Comfort the Feebleminded ──────────────────── */
    {
      ref: '1 Thessalonians 5:14–15',
      title: 'Warn the Unruly, Comfort the Feebleminded',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 14,
              spans: [
                t('Now we exhort you, brethren, '),
                hg('warn them that are unruly, comfort the feebleminded, support the weak, be patient toward all men', 'warn-comfort'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'warn-comfort',
          html:
            '&ldquo;Warn them that are unruly, comfort the feebleminded, support the weak, be patient toward all men.&rdquo; Paul names different kinds of people in the church and the different responses they need. Some are unruly and need warning. Some are fainthearted and need encouragement. Some are weak and need support. All need patience. The church is not one-size-fits-all.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 15,
              spans: [
                t('See that none '),
                hy('render evil for evil unto any man', 'evil-for-evil'),
                t('; but ever follow that which is good, both among yourselves, and to all men.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'evil-for-evil',
          html:
            '&ldquo;See that none render evil for evil unto any man.&rdquo; Retaliation is forbidden. Instead, believers are to follow that which is good. This applies to relationships within the church and to relationships with outsiders. The gospel transforms how we respond to injury.',
        },
        {
          kind: 'carry',
          html:
            'You will encounter different people in different seasons of struggle. Some need firm correction. Some need gentle encouragement. Some need practical support. Your calling is to discern what each person needs and to respond with patience and the love of Christ.',
        },
        {
          kind: 'reflection',
          id: 'warn-reflect',
          prompt:
            'Think of three different people in your life right now. One is unruly, one is fainthearted, one is weak. What would it look like to warn, comfort, and support each of them with genuine patience?',
        },
      ],
    },

    /* ─── Rejoice, Pray, Give Thanks ─────────────────────────────────── */
    {
      ref: '1 Thessalonians 5:16–18',
      title: 'Rejoice, Pray, Give Thanks',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 16,
              spans: [
                t('Rejoice '),
                hp('evermore', 'rejoice-evermore'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rejoice-evermore',
          html:
            '&ldquo;Rejoice evermore.&rdquo; This is not chasing happiness. It is the deep gladness that comes from knowing Christ and His promises. Even in hardship, the believer rejoices because the Lord is near and redemption is coming.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 17,
              spans: [
                t('Pray '),
                hp('without ceasing', 'pray-ceasing'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'pray-ceasing',
          html:
            '&ldquo;Pray without ceasing.&rdquo; This does not mean hours on your knees. It means a constant turning to God. Work, eat, speak—all of it can be suffused with prayer. You are in conversation with the Father throughout the day.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 18,
              spans: [
                t('In every thing give '),
                hg('thanks: for this is the will of God in Christ Jesus concerning you', 'thanks-will'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'thanks-will',
          html:
            '&ldquo;In every thing give thanks: for this is the will of God in Christ Jesus concerning you.&rdquo; Gratitude is the will of God. Not when circumstances are pleasant. In everything. In sorrow, in confusion, in uncertainty—the believer gives thanks, knowing that all things work together for good to those who love God.',
        },
        {
          kind: 'greek',
          id: 'adialeiptos',
          title: 'Adialeiptos — &ldquo;Without Ceasing&rdquo;',
          script: 'ἀδιάλειπτος',
          translit: '<strong>Adialeiptos</strong> · without ceasing; uninterrupted; continuous; unbroken',
          description:
            'Prayer without ceasing is a life posture, not a task. It is the unbroken communion of the believer with God—maintained even while sleeping, working, speaking, and resting.',
        },
        {
          kind: 'carry',
          html:
            'You are called to a threefold life: rejoicing in Christ&apos;s presence and promises, praying without ceasing, and giving thanks in all things. These are not separate duties but one unified posture—a heart turned toward God in all circumstances.',
        },
        {
          kind: 'reflection',
          id: 'rejoice-reflect',
          prompt:
            'What circumstance in your life right now makes rejoicing difficult? What would it look like to pray about it without ceasing and to give thanks even in uncertainty?',
        },
      ],
    },

    /* ─── Quench Not the Spirit; Hold Fast the Good ───────────────────── */
    {
      ref: '1 Thessalonians 5:19–22',
      title: 'Quench Not the Spirit; Hold Fast the Good',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 19,
              spans: [
                t('Quench not the '),
                hy('Spirit', 'spirit-quench'),
                t(';'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'spirit-quench',
          html:
            '&ldquo;Quench not the Spirit.&rdquo; The Holy Spirit is active in the church—speaking through prophets, empowering works of justice and love, guiding believers into truth. To quench the Spirit is to suppress Him, to demand order and control at the expense of His active presence.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 20,
              spans: [
                t('Despise not prophesyings.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'prophecy',
          html:
            '&ldquo;Despise not prophesyings.&rdquo; The gift of prophecy—of speaking God&apos;s word to the present moment—is not to be dismissed. Yet it is also not to be accepted uncritically. This tension is held in the next verses.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 21,
              spans: [
                t('Prove all things; '),
                hp('hold fast that which is good', 'prove-hold'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'prove-hold',
          html:
            '&ldquo;Prove all things; hold fast that which is good.&rdquo; Believers are not passive recipients of teaching or prophecy. You are called to discern. Test all things against Scripture. When you identify what is good—what is true, just, and holy—hold to it. Discernment is the balance of openness to the Spirit and adherence to truth.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 22,
              spans: [
                t('Abstain from all '),
                hg('appearance of evil', 'appearance-evil'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'appearance-evil',
          html:
            '&ldquo;Abstain from all appearance of evil.&rdquo; This is not legalism. It is wisdom. Avoid not only actual sin but even its appearance. Your witness matters. Your life is a sign pointing others toward Christ or away from Him.',
        },
        {
          kind: 'greek',
          id: 'dokimazo',
          title: 'Dokimazo — &ldquo;Prove&rdquo;',
          script: 'δοκιμάζω',
          translit: '<strong>Dokimazo</strong> · to test; to examine; to scrutinize; to discern and approve',
          description:
            'Dokimazo is the verb of assaying—testing metal to determine its purity. Believers are to test all things with the same rigor, discerning what is good and holding to it.',
        },
        {
          kind: 'christ',
          id: 'christ-spirit',
          title: 'Christ Connection — The Spirit of Christ',
          html:
            'Jesus promised the Holy Spirit would come after His ascension. &ldquo;But the Comforter, which is the Holy Ghost, whom the Father will send in my name, he shall teach you all things&rdquo; (John 14:26). To quench the Spirit is to resist Christ&apos;s own continuing presence in the church.',
        },
        {
          kind: 'carry',
          html:
            'You are called to welcome the Spirit&apos;s work while maintaining discernment. Do not suppress prophecy or gifts of the Spirit. Yet test all things. Do not accept every voice. Hold fast to what is true. This requires both openness and wisdom, both humility and courage.',
        },
        {
          kind: 'reflection',
          id: 'spirit-reflect',
          prompt:
            'Where might you be quenching the Spirit out of fear or desire for control? Where do you need to exercise more discernment? How can you cultivate both openness to the Spirit and fidelity to Scripture?',
        },
      ],
    },

    /* ─── Sanctification and Faithful Preservation ────────────────────── */
    {
      ref: '1 Thessalonians 5:23–24',
      title: 'Sanctification and Faithful Preservation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 23,
              spans: [
                t('And the very God of peace '),
                hp('sanctify you wholly; and I pray God your whole spirit and soul and body be preserved blameless unto the coming of our Lord Jesus Christ', 'sanctify-wholly'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'sanctify-wholly',
          html:
            '&ldquo;The very God of peace sanctify you wholly; and I pray God your whole spirit and soul and body be preserved blameless unto the coming of our Lord Jesus Christ.&rdquo; This is Paul&apos;s climactic prayer. Sanctification is not partial but whole—spirit and soul and body. Believers are to be entirely set apart for God, preserved intact until Christ returns.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 24,
              spans: [
                t('Faithful is he that calleth you, who also will do it.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'faithful-calls',
          html:
            '&ldquo;Faithful is he that calleth you, who also will do it.&rdquo; God does not call believers to sanctification and then leave them to their own devices. He who calls you will complete the work in you. Sanctification is not your burden alone; it is His ongoing work of grace.',
        },
        {
          kind: 'greek',
          id: 'hagiazō',
          title: 'Hagiazō — &ldquo;Sanctify&rdquo;',
          script: 'ἁγιάζω',
          translit: '<strong>Hagiazō</strong> · to make holy; to set apart for God; to consecrate; to cleanse from sin',
          description:
            'Sanctification is the progressive work of the Holy Spirit making believers holy. It begins at conversion and continues throughout life, culminating in the glorification of the whole person at Christ&apos;s appearing.',
        },
        {
          kind: 'christ',
          id: 'christ-faithful',
          title: 'Christ Connection — Christ Sanctifies',
          html:
            '&ldquo;Jesus also, that he might sanctify the people with his own blood, suffered without the gate&rdquo; (Hebrews 13:12). Christ&apos;s death is the foundation of sanctification. His ongoing intercession and the work of His Spirit in believers complete it. The sanctification begun at conversion will be finished at His appearing.',
        },
        {
          kind: 'carry',
          html:
            'You are not left to sanctify yourself by your own effort. God calls you to holiness and gives you His Spirit to accomplish it. Your part is to cooperate with His grace, to watch and pray, to test all things and hold fast to good. But His part is to preserve you blameless until Christ returns.',
        },
        {
          kind: 'reflection',
          id: 'sanctify-reflect',
          prompt:
            'What does it mean to you that God promises to sanctify you wholly—spirit, soul, and body? Where do you sense God working to make you more holy right now? Where do you need to surrender more fully to His work?',
        },
      ],
    },

    /* ─── The Closing Grace ───────────────────────────────────────────── */
    {
      ref: '1 Thessalonians 5:25–28',
      title: 'The Closing Grace',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 25,
              spans: [
                t('Brethren, pray for us.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('Greet all the brethren with an holy kiss.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('I charge you by the Lord that this epistle be read unto all the holy brethren.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('The grace of our Lord Jesus Christ be with you. Amen.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'closing-prayer',
          html:
            'Paul closes as he opened: with prayer. He asks the Thessalonians to pray for him. He commends them to greet one another with affection. He charges them to read this letter to all the brethren—it is not private instruction but a word for the whole congregation. And then the benediction: &ldquo;The grace of our Lord Jesus Christ be with you.&rdquo; Everything returns to grace.',
        },
        {
          kind: 'christ',
          id: 'christ-grace',
          title: 'Christ Connection — Grace is Our Inheritance',
          html:
            'The letter closes as it opened—with grace. &ldquo;Grace be unto you, and peace, from God our Father and the Lord Jesus Christ&rdquo; (1 Thessalonians 1:1). From first word to last, the epistle is enclosed in grace. Not the world&apos;s false peace, but the grace of Christ that sustains, sanctifies, and saves.',
        },
        {
          kind: 'carry',
          html:
            'You have been given this letter—or these truths drawn from it—to share with others. Do not hoard them. Tell your brothers and sisters that they are not destined for wrath but for salvation. Tell them they are children of light. Exhort them to rejoice, to pray without ceasing, to hold fast to good. And most of all, remind them that the grace of Christ is with them.',
        },
        {
          kind: 'reflection',
          id: 'grace-reflect',
          prompt:
            'What truth from 1 Thessalonians 5 has most shaped your faith? Who in your life needs to hear it? How can you share the gospel and these exhortations with them?',
        },
      ],
    },
  ],
};
