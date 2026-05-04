import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Philippians 4 — Rejoice; Be Careful for Nothing; The Peace of God
 *
 * From the opening ("therefore, my brethren dearly beloved") through unity calls,
 * rejoicing without circumstance, release of anxiety, God&apos;s peace, the discipline
 * of pure thinking, Paul&apos;s learned contentment, strength through Christ, the
 * Philippians&apos; generosity, God&apos;s provision, and the grace closing—Philippians 4
 * is Paul&apos;s practical theology of joy, trust, and the sovereign care of God.
 *
 * The chapter never promises the absence of pain. It promises the presence of God.
 */
export const PHILIPPIANS_4: RichChapterContent = {
  bookSlug: 'philippians',
  bookName: 'Philippians',
  chapter: 4,

  estimatedMinutes: { beginner: 7, intermediate: 13, deep: 17 },
  intros: [
    'Paul has written about partnership, joy in loss, resurrection power, and the surpassing knowledge of Christ. Now he turns to the street-level life of believers: friends in conflict, hearts prone to anxiety, minds tempted toward despair. He calls the church back to what matters: standing firm in the Lord, rejoicing, and releasing every fear to God in prayer.',
    'The promise of Philippians 4 is not that your problems disappear. It is that the peace of God—a peace beyond understanding—will guard your heart and mind. This peace is the presence of Christ in the midst of your difficulty, transforming fear into trust and anxiety into prayer.',
  ],

  opener: {
    matchArtist: /tissot/i,
    matchTitle: /paul|epistle/i,
    caption: 'Philippians 4 · The Whole Chapter',
  },

  bottomShare: {
    label: 'Share Philippians 4',
    quote:
      'Rejoice in the Lord alway. Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Philippians 4 · Study Guide',
  },

  sections: [
    /* ─── Philippians 4:1–3 — Stand Fast in the Lord ────────────────────── */
    {
      ref: 'Philippians 4:1–3',
      title: 'Stand Fast in the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 1,
              spans: [
                t('Therefore, my brethren dearly beloved and longed for, my joy and crown, so '),
                hp('stand fast in the Lord', 'p4-stand-fast'),
                t(', my dearly beloved.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'p4-stand-fast',
          html:
            'Paul&apos;s language is tender—"dearly beloved, longed for, my joy and crown." Then the command: stand fast. Not move. Not adjust. Not compromise. Stand. The word is <em>steko</em>, to take your position and hold it. In the Lord—not in your own strength, but in His. The church is Paul&apos;s joy because they persevere. Standing fast is how you remain in the truth.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 2,
              spans: [
                t('I beseech Euodias, and beseech Syntyche, that they be of the same '),
                hg('mind in the Lord', 'p4-unity'),
                t('.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And I intreat thee also, true yokefellow, help those women which laboured with me in the gospel, with Clement also, and with other my fellowlabourers, whose names are in the book of life.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'p4-unity',
          html:
            'Euodias and Syntyche are in conflict. Paul names them both—not in shame, but in love and in public call to reconciliation. He asks a "true yokefellow" to help them be of one mind in the Lord. Their disagreement matters. But their unity in Christ matters more. He reminds them their names are in the book of life—they belong to God, not to their dispute.',
        },

        {
          kind: 'carry',
          html:
            'Where in your life are you tempted to move off the line you have taken in Christ? Fear, pressure, or weariness can make standing feel impossible. But you are not standing alone. You stand in the Lord. Whatever unity is fractured around you—in your home, your church, your workplace—remember: your truest identity is not the argument you&apos;re in, but the Lord you belong to.',
        },

        {
          kind: 'reflection',
          id: 'p4-stand-reflect',
          prompt: 'Where do you need to stand fast in your conviction? What would help you remember you stand in the Lord, not in your own strength?',
        },
      ],
    },

    /* ─── Philippians 4:4–7 — Rejoice in the Lord; Be Careful for Nothing ── */
    {
      ref: 'Philippians 4:4–7',
      title: 'Rejoice; Be Careful for Nothing; The Peace of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 4,
              spans: [
                t('Rejoice in the Lord alway: and again I say, '),
                hp('Rejoice', 'p4-rejoice'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'p4-rejoice',
          html:
            'Rejoice. Not someday. Not when everything settles. Alway. And then Paul repeats it—"and again I say, Rejoice." The repetition signals weight. This is not optional. It is a command. Rejoicing is not happiness that arises from good circumstances. It is the deliberate choice to find your joy in the Lord. When you rejoice in Him, circumstance cannot dictate your joy.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 5,
              spans: [
                t('Let your '),
                hy('moderation be known unto all men', 'p4-moderation'),
                t('. The Lord is at hand.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'p4-moderation',
          html:
            'Moderation—<em>epieikeia</em>, forbearance, a kind of gentle reasonableness. Let it be known to all. The way you handle frustration, loss, disagreement shows who rules your heart. "The Lord is at hand"—He is coming; He is present; He sees how you treat others in this moment. Moderation is not weakness; it is the sign of a heart at rest in God.',
        },

        {
          kind: 'greek',
          id: 'p4-epieikeia',
          title: 'Epieikeia — &ldquo;Moderation&rdquo;',
          script: 'ἐπιείκεια',
          translit: '<strong>epieikeia</strong> · gentleness; forbearance; reasonableness; clemency',
          description:
            'This is not rigidity or harsh justice, but a supple reasonableness. The willingness to bend slightly, to extend grace where the letter of law would not require it. It is strength held gently.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 6,
              spans: [
                t('Be '),
                hg('careful for nothing', 'p4-anxious'),
                t('; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'p4-anxious',
          html:
            'Be careful for nothing. Do not be anxious. Anxiety whispers that the outcome depends on you, that you must control what is not in your hands, that you are responsible for securing your own future. Instead: in every thing—not some things, but every circumstance—bring your requests to God in prayer. With thanksgiving. You are giving thanks before you see the answer, which is the essence of faith.',
        },

        {
          kind: 'greek',
          id: 'p4-merimnaō',
          title: 'Merimnaō — &ldquo;Be anxious; be careful&rdquo;',
          script: 'μεριμνάω',
          translit: '<strong>merimnaō</strong> · to be anxious; to be divided in mind; to care for',
          description:
            'The root suggests being pulled in different directions, mentally divided. Anxiety is a kind of idolatry—a divided heart, split between trust in God and trust in your own solving. Prayer with thanksgiving reintegrates the heart toward God.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 7,
              spans: [
                t('And the '),
                hp('peace of God, which passeth all understanding, shall keep your hearts and your minds through Christ Jesus', 'p4-peace'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'p4-peace',
          html:
            'The <em>peace[res:eirene-scaife]</em> of God—not the world&apos;s peace, not mere absence of conflict, but <em>the peace of God</em>—a wholeness, a sense of being held. It passes all understanding. Your mind cannot explain it. The circumstances have not changed; your anxiety is the same; yet you are at peace. This peace shall keep—guard like a sentinel—your hearts and minds. It protects the inner life from being destroyed by external pressure. Through Christ Jesus. This peace is Christ&apos;s gift, mediated through Him, possible only in relationship with Him.',
        },

        {
          kind: 'christ',
          id: 'p4-christ-peace',
          title: 'Christ Connection — The Prince of Peace',
          html:
            'Jesus said, &ldquo;Peace I leave with you, my peace I give unto you: not as the world giveth, give I unto you&rdquo; (John 14:27). He did not promise a trouble-free life. He promised a kind of peace that operates <em>inside</em> trouble, that does not depend on circumstances. Paul writes that this peace, Christ&apos;s peace, will guard your hearts and minds. In 2 Corinthians 12:9, Paul learns that Christ&apos;s grace is sufficient in weakness. Here, Christ&apos;s peace is sufficient in anxiety.',
        },

        {
          kind: 'carry',
          html:
            'This day will offer you chances to be anxious. News will arrive that makes you worried. A conversation will stir fear about the future. And then comes this: be careful for nothing. Bring it to God. And if you do—if you actually release what you have been gripping—something extraordinary happens. A peace enters you that your mind cannot explain. It does not solve the problem. It lets you breathe in the midst of it.',
        },

        { kind: 'divider' },

        {
          kind: 'reflection',
          id: 'p4-peace-reflect',
          prompt: 'What anxiety are you carrying right now that you could bring to God in prayer with thanksgiving? What would it feel like to release it and trust Him with the result?',
        },
      ],
    },

    /* ─── Philippians 4:8–9 — Think on These Things ───────────────────────── */
    {
      ref: 'Philippians 4:8–9',
      title: 'Think on Whatsoever Things Are Pure',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 8,
              spans: [
                t('Finally, brethren, whatsoever things are true, whatsoever things are honest, whatsoever things are just, whatsoever things are pure, whatsoever things are '),
                hy('lovely', 'p4-lovely'),
                t(', whatsoever things are of good report; if there be any virtue, and if there be any praise, '),
                hg('think on these things', 'p4-think'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'p4-think',
          html:
            'Paul lists what believers should fix their minds on: true, honest (sincere, genuine), just, pure, lovely, and of good report. Notice what he does not list: gossip, fear, scandal, rage, bitterness. Your mind is a gate. You decide what enters. What you think about becomes what you become. In a world of infinite information, endless outrage, and constant noise, to think deliberately on what is true and lovely and of good report is a revolutionary spiritual discipline.',
        },

        {
          kind: 'commentary',
          id: 'p4-lovely',
          html:
            'Lovely—<em>prosphilēs</em>, winsome, gracious, things that draw you toward goodness. Paul is not calling believers to naive optimism. He is calling them to be intentional gardeners of the mind. Every scroll, every conversation, every choice to click or close is a choice about what you are feeding your soul.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 9,
              spans: [
                t('Those things, which ye have both learned, and received, and heard, and '),
                hg('seen in me', 'p4-pattern'),
                t(', do: and the God of peace shall be with you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'p4-pattern',
          html:
            'Paul does not teach and then disappear. He models it. "Seen in me." He learned, received (the gospel from others), heard (from believers and apostles), and then practiced it publicly. The Philippians could see his joy, his moderation, his prayers. The doctrine is not merely intellectual; it is embodied. God of peace shall be with you—not as a doctrine, but as an experience, a presence, a reality you encounter when you follow this pattern.',
        },

        {
          kind: 'carry',
          html:
            'What enters your mind becomes the furniture of your soul. Guard the gate. When anxiety knocks, turn toward what is true. When despair whispers, look for what is lovely. When bitterness rises, recall something of good report. You cannot stop thoughts from appearing, but you can choose which ones you dwell on. This is not positive thinking; it is spiritual discipline. And it works. The God of peace comes to dwell with the person who thinks this way.',
        },

        {
          kind: 'reflection',
          id: 'p4-think-reflect',
          prompt: 'What have you been thinking about most? Is it true, lovely, and of good report? What is one true or lovely thing you could deliberately think about tomorrow?',
        },
      ],
    },

    /* ─── Philippians 4:10–13 — Contentment & Strength Through Christ ──── */
    {
      ref: 'Philippians 4:10–13',
      title: 'I Have Learned to Be Content',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 10,
              spans: [
                t('But I rejoiced in the Lord greatly, that now at the last your care of me hath flourished again; wherein ye were also careful, but ye lacked opportunity.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Not that I speak in respect of want: for I have '),
                hy('learned', 'p4-learned'),
                t(', in whatsoever state I am, '),
                hg('therewith to be content', 'p4-content'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'p4-learned',
          html:
            'I have <em>learned</em>. Contentment is not a trait you are born with. It is a discipline, a cultivation, a practice. Paul is saying: I have gone through enough different circumstances that I know how to be content in each of them. Not because I have resolved all my problems, but because my joy does not depend on my problems being solved.',
        },

        {
          kind: 'commentary',
          id: 'p4-content',
          html:
            'Therewith to be content. Contentment is not resignation or passivity. It is freedom from envy, from grasping, from anxiety about status or security. It is the ability to look at your actual circumstances and say, "This is what I have right now. This is where God has me. I trust Him in this."',
        },

        {
          kind: 'greek',
          id: 'p4-autarkēs',
          title: 'Autarkēs — &ldquo;Content&rdquo;',
          script: 'αὐτάρκης',
          translit: '<strong>autarkēs</strong> · self-sufficient; content with oneself; asking for nothing more',
          description:
            'Self-sufficient does not mean you do not need others. It means your sense of worth does not depend on external circumstances—wealth, status, approval. You are enough, not because you are great, but because God is.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 12,
              spans: [
                t('I know both how to be abased, and I know how to abound: every where and in all things I am instructed both to be full and to be hungry, both to abound and to suffer need.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('I '),
                hp('can do all things through Christ which strengtheneth me', 'p4-strength'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'p4-strength',
          html:
            'Paul is not saying you can accomplish anything you dream up. He is saying, in context: I can endure <em>abundance or want[res:philippians-4-13-intertextual]</em>, honor or humiliation, fullness or hunger. The strength is for perseverance, not conquest. It is the strength of a soldier who holds the line through a long campaign. And it comes through Christ. Not from inside Paul, but through his connection to Christ. He is drawing on a strength outside himself.',
        },

        {
          kind: 'christ',
          id: 'p4-christ-strength',
          title: 'Christ Connection — Christ as Strength in Weakness',
          html:
            'Paul writes elsewhere, &ldquo;My grace is sufficient for thee: for my strength is made perfect in weakness&rdquo; (2 Corinthians 12:9). Jesus told him this when he was at the end of his own resources. Here, Paul reports the fruit of that truth: I can endure anything—not because I am strong, but because Christ strengthens me. It is a strength that works best when Paul is weak, when he has stopped trying to manage everything himself.',
        },

        {
          kind: 'carry',
          html:
            'Contentment is not laziness. It is the clarity that comes from knowing where your actual security lies. Not in wealth, not in status, not in whether circumstances are comfortable, but in Christ. You will face times of plenty and times of want. Both teach. Both tempt. Both are the place where Christ strengthens you. The promise is not abundance or ease. It is His presence in whatever comes.',
        },

        { kind: 'divider' },

        {
          kind: 'reflection',
          id: 'p4-strength-reflect',
          prompt: 'Where do you need strength to endure right now—a long hardship, a season of lack, or something that seems too much for you? Can you name it and ask Christ for His strength?',
        },
      ],
    },

    /* ─── Philippians 4:14–20 — The Philippians&apos; Generosity; God&apos;s Supply ─ */
    {
      ref: 'Philippians 4:14–20',
      title: 'Your Generosity; My God Shall Supply',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 14,
              spans: [
                t('Notwithstanding ye have well done, that ye did communicate with my afflictions.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('Now ye Philippians know also, that in the beginning of the gospel, when I departed from Macedonia, '),
                hg('no church communicated with me as concerning giving and receiving', 'p4-partnership'),
                t(', but ye only.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'p4-partnership',
          html:
            'Paul praises the Philippians for their partnership. When Paul left Macedonia, no other church sent support—except Philippi. They "communicated," meaning they entered into a shared mission. This is not charity; it is partnership. They were not giving to the poor; they were partnering in the gospel. That distinction matters.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 16,
              spans: [
                t('For even in Thessalonica ye sent once and again unto my necessity.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Not because I desire a gift: but I desire fruit that may abound to your account.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'Paul is not writing to thank them for the gift. He is writing to affirm that their giving is bearing fruit in their own souls. When you give—truly give, not to be seen, not for recognition, but because you are partnering in God&apos;s work—something happens in you. The account that matters is not your bank account; it is your account with God.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 18,
              spans: [
                t('But I have all, and abound: I am full, having received of Epaphroditus the things which were sent from you, an odour of a sweet smell, a '),
                hg('sacrifice acceptable, wellpleasing to God', 'p4-sacrifice'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'p4-sacrifice',
          html:
            'Paul describes their gift in the language of Old Testament sacrifice. An odor of sweet smell. A sacrifice acceptable to God. They are not just helping Paul; they are worshiping. Their generosity is an act of worship. This transforms how you think about giving—it is not mere transaction; it is an offering to God.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 19,
              spans: [
                t('But '),
                hp('my God shall supply all your need according to his riches in glory by Christ Jesus', 'p4-supply'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'p4-supply',
          html:
            'Paul does not promise they will become rich. He promises that God will supply their need. His riches are inexhaustible. He is not stingy; He is abundantly generous. But He supplies need, not greed. The measure is according to His riches—infinite, beyond what you can ask or imagine.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 20,
              spans: [
                t('Now unto God and our Father be glory forever and ever. Amen.'),
              ],
            },
          ],
        },

        {
          kind: 'carry',
          html:
            'When you give—your time, your money, your attention—you are participating in God&apos;s work. Your giving is not a loss; it is a form of worship. And the God who receives your worship, who values your sacrifice, promises to supply what you actually need. Not what you want, but what you truly need. His generosity is rooted not in scarcity but in His own infinite riches. When you trust Him enough to give, you learn to trust Him to provide.',
        },

        {
          kind: 'reflection',
          id: 'p4-supply-reflect',
          prompt: 'Where have you given something—time, money, attention—and learned to trust God more? How did He provide for you in that risk?',
        },
      ],
    },

    /* ─── Philippians 4:21–23 — Grace in Caesar&apos;s Household ────────────── */
    {
      ref: 'Philippians 4:21–23',
      title: 'Greetings and the Grace of Our Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 21,
              spans: [
                t('Salute every saint in Christ Jesus. The brethren which are with me greet you.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('All the saints salute you, chiefly they that are of '),
                hg('Caesar&apos;s household', 'p4-caesar'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'p4-caesar',
          html:
            'Paul is in Rome, under arrest, awaiting trial before Caesar. Yet believers in <em>Caesar&apos;s household[res:caesar-household-sbl]</em>—perhaps servants, perhaps officials—have become followers of Christ. The gospel is at work even in the seat of power. No place is outside the reach of Christ&apos;s kingdom. No person is beyond the redemption He offers.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 23,
              spans: [
                t('The grace of our Lord Jesus Christ be with you all. Amen.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'The letter closes as it opened—with the grace of Christ. Not a legal document; not a set of rules. A letter about grace. The grace of our Lord Jesus Christ. Not grace in the abstract, but grace embodied in a person, offered to you, promised to be with you all.',
        },

        {
          kind: 'christ',
          id: 'p4-grace-close',
          title: 'Christ Connection — The Grace That Closes Everything',
          html:
            'The entire letter of Philippians is framed by grace. Grace in the opening (1:2). Grace in the close. Between those two, Paul teaches believers how to live in the reality of that grace—how to rejoice, stand fast, release anxiety, discipline the mind, endure hardship, give generously. None of it is works. All of it flows from receiving His grace. The last word the Philippians hear from Paul is that this grace is with them all—not earned, not conditional, not limited. With you all. Always.',
        },

        {
          kind: 'carry',
          html:
            'You have read a letter written to a church in conflict, a church facing pressure from outside, a church prone to anxiety—not unlike your own life, your own church, your own heart. Paul&apos;s word to them is simple: Rejoice in the Lord. Be careful for nothing; pray about everything. Let the peace of God guard your heart. Think on what is pure and lovely. Learn to be content. Trust Christ for strength. Give generously. And in all of this, remember—the grace of our Lord Jesus Christ is with you all.',
        },

        { kind: 'divider' },

        {
          kind: 'reflection',
          id: 'p4-close-reflect',
          prompt: 'What is the one thing from Philippians 4 that speaks to where you are right now? How will you carry it with you this week?',
        },
      ],
    },
  ],

  resources: [
    {
      id: 'eirene-scaife',
      kind: 'lexicon',
      source: 'Perseus Scaife',
      label: 'Eirene (εἰρήνη) — Peace',
      url: 'https://scaife.perseus.org/lexica/lsj/εἰρήνη/',
      description: 'Greek word for the divine peace guarding believers&apos; hearts in Philippians 4:7—not absence of trouble but presence of God.',
    },
    {
      id: 'philippians-4-13-intertextual',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Philippians 4:13 — I Can Do All Things Through Christ',
      url: 'https://intertextual.bible/search?q=Philippians+4+13+',
      description: 'The context of Paul&apos;s declaration of strength through Christ, rooted in his experience of suffering and contentment.',
    },
    {
      id: 'caesar-household-sbl',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Caesar&apos;s Household',
      url: 'https://www.bibleodyssey.org/dictionary/caesars-household/',
      description: 'The imperial household and servants—a network of believers at the center of Roman power, mentioned in Philippians 4:22.',
    },
  ],
};
