import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Romans 12 — Living Sacrifice, Transformed Mind, Overcome Evil with Good
 *
 * "Present your bodies a living sacrifice, holy, acceptable unto God, which
 * is your reasonable service." Be not conformed to this world; be transformed
 * by the renewing of your mind. Spiritual gifts in the body of Christ. Many
 * members, one body. Love without dissimulation. Overcome evil with good.
 */
export const ROMANS_12: RichChapterContent = {
  bookSlug: 'romans',
  bookName: 'Romans',
  chapter: 12,

  estimatedMinutes: { beginner: 8, intermediate: 15, deep: 24 },
  intros: [
    'Having established justification by faith and God&apos;s purpose for both Jews and Gentiles, Paul now turns to the practical life of faith. The theology of Romans 1–11 is not abstract. It calls for transformation. "Present your bodies a living sacrifice." Your physical self, your daily choices, your presence in the world—all of it is an offering to God.',
    'Romans 12 is the bridge between doctrine and discipleship. The mercies of God demand a response. That response is not merely internal sentiment. It is embodied, concrete, visible. You are transformed by the renewing of your mind. You use spiritual gifts in service of others. You overcome evil not with more evil but with good. This is what the justified life looks like.',
  ],

  sections: [
    /* ─── Romans 12:1 — Present Your Bodies ──────────────────────────────── */
    {
      ref: 'Romans 12:1',
      title: 'The Living Sacrifice',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            verse(
              1,
              t('I beseech you therefore, brethren, by the mercies of God, that ye '),
              hp('present your bodies a living sacrifice', 'christ-living-sacrifice'),
              t(', '),
              hy('holy', 'rom12-hagios'),
              t(', '),
              hy('acceptable unto God', 'rom12-euarestos'),
              t(', which is your '),
              hy('reasonable service', 'rom12-logike'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom12-bodies-live',
          html:
            'The word translated "present" is the same word used for laying an offering on the altar. But this offering is alive. In the Old Testament, sacrifice was an animal brought to the altar and killed. Paul redefines sacrifice: it is your body, alive, given to God. Not a moment of dedication but an ongoing offering—the daily surrender of your will to His will. This is what "remembrance of me" looks like in actual time and space.',
        },
        {
          kind: 'greek',
          id: 'rom12-hagios',
          title: 'Hagios — Holy',
          script: 'ἅγιος',
          translit: '<strong>hagios</strong> · set apart; dedicated; belonging to God',
          description:
            'To be hagios is to be separated from ordinary use and devoted to God&apos;s purposes. Your body, offered to God, is not left common. It is set apart. Consecrated. Made His.',
        },
        {
          kind: 'greek',
          id: 'rom12-euarestos',
          title: 'Euarestos — Acceptable',
          script: 'εὐάρεστος',
          translit: '<strong>euarestos</strong> · pleasing; well-pleasing; agreeable to God',
          description:
            'This is not just an offering God will tolerate. It is one that pleases Him. When you present your body to God, you are offering Him something He finds beautiful—your actual obedience, your actual trust.',
        },
        {
          kind: 'greek',
          id: 'rom12-logike',
          title: 'Logikēn — Reasonable Service',
          script: 'λογικὴν',
          translit: '<strong>logikēn</strong> · rational; reasonable; of the mind or reason',
          description:
            'Service given through the mind—thoughtful, deliberate, intelligent. This is not blind obedience or compulsion. It is the response of a renewed mind that has seen the mercies of God and reasoned: this is what makes sense. This is worthy.',
        },
        {
          kind: 'christ',
          id: 'christ-living-sacrifice',
          title: 'Christ Connection — The Living Sacrifice Maker',
          html:
            'Jesus presented Himself as a sacrifice on the cross. But He did not remain dead. He rose, lived, ascended. His sacrifice was living in a way no animal sacrifice could be. Now He calls you to present your living body as a sacrifice. Your ongoing, embodied faith—that is His sacrifice extended into the world. "I am crucified with Christ: nevertheless I live" (Gal. 2:20). Your life, lived for Him, is the echo of His.',
        },
        {
          kind: 'carry',
          html:
            'Today, somewhere, you will be asked to surrender your body to something that is not God. A scroll. A temper. A comfort that numbs. A performance that exhausts. When that moment comes, the mercies of God are calling you to another altar. Your body—your physical presence, your actual choices—is not yours to trade away. It is God&apos;s living sacrifice.',
        },
        {
          kind: 'reflection',
          id: 'rom12-living-sac',
          prompt: 'What area of your embodied life—your time, your body, your daily choices—feels most difficult to surrender to God? Why?',
        },
      ],
    },

    /* ─── Romans 12:2 — Transformed by the Renewing of Your Mind ─────────── */
    {
      ref: 'Romans 12:2',
      title: 'Be Transformed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            verse(
              2,
              t('And '),
              hg('be not conformed to this world', 'rom12-aschematizo'),
              t(': but be ye '),
              hp('transformed by the renewing of your mind', 'christ-renewed-mind'),
              t(', that ye may prove what is that good, and acceptable, and perfect, will of God.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom12-aschematizo',
          html:
            'The Greek word for "conformed" suggests a mold or pattern—be not squeezed into the world&apos;s shape. The world wants to make you in its image: hurried, anxious, comparing, consuming, performing. But you are being called out of that mold.',
        },
        {
          kind: 'greek',
          id: 'rom12-metamorphoo',
          title: 'Metamorphoo — Transform',
          script: 'μεταμορφόω',
          translit: '<strong>metamorphoo</strong> · change form; transfigure; reshape from the inside out',
          description:
            'This is the same word used for Jesus&apos; transfiguration on the mountain, when His form shone with divine light. Transformation in Christ is a fundamental reshaping of who you are, not mere surface improvement.',
        },
        {
          kind: 'greek',
          id: 'rom12-anakainosis',
          title: 'Anakainōsis — Renewal',
          script: 'ἀνακαίνωσις',
          translit: '<strong>anakainōsis</strong> · making new again; restoration; complete renewal',
          description:
            'The renewing of your mind is not a patch or a tune-up. It is a complete remaking—your values, your reflexes, your sense of what matters. Old things pass away; all things become new.',
        },
        {
          kind: 'commentary',
          id: 'rom12-prove',
          html:
            'When your mind is renewed, you can finally "prove"—test, discern, approve—what God&apos;s will actually is. Before transformation, you cannot see it. You are too much shaped by the world. But a mind restored to God sees what He sees: that His will is good, acceptable, perfect.',
        },
        {
          kind: 'christ',
          id: 'christ-renewed-mind',
          title: 'Christ Connection — Having the Mind of Christ',
          html:
            'Paul says, "Let this mind be in you, which was also in Christ Jesus" (Phil. 2:5). The renewing is not a private project. It is a conforming of your mind to His mind. You are learning to think as He thinks, to see as He sees, to value what He values. "We have the mind of Christ" (1 Cor. 2:16).',
        },
        {
          kind: 'carry',
          html:
            'Your mind is not neutral ground. It is either being renewed by God or squeezed into the world&apos;s shape—daily, hourly. What you read, what you listen to, who you spend time with, what you let yourself think about—these are not small. They are reshaping you toward either the world or Christ. Choose today what mold you are entering.',
        },
        {
          kind: 'reflection',
          id: 'rom12-renew',
          prompt: 'In what area of your thinking is the world still pressing you into its mold? What would it cost to be renewed here?',
        },
        {
          kind: 'artwork',
          matchTitle: /transformation|transfigur/i,
          caption: 'Romans 12:2 · Transformed by Renewal',
        },
      ],
    },

    /* ─── Romans 12:3–6a — Sober Self-Assessment ───────────────────────── */
    {
      ref: 'Romans 12:3–6a',
      title: 'Sober Judgment About Yourself',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            verse(
              3,
              t('For I say, through the grace given unto me, to every man that is among you, not to '),
              hg('think of himself more highly than he ought to think', 'rom12-phroneo'),
              t('; but to think '),
              hy('soberly', 'rom12-sophronizo'),
              t(', according as God hath dealt to every man the measure of faith.')
            ),
            verse(
              4,
              t('For as we have many members in one body, and all members have not the same office:')
            ),
            verse(
              5,
              t('So we, being many, are one body in Christ, and every one members one of another.')
            ),
            verse(
              6,
              t('Having then '),
              hy('gifts differing', 'rom12-charisma'),
              t(' according to the grace that is given to us, let us use them:')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom12-phroneo',
          html:
            'Pride is not conquered by self-hatred. It is conquered by accuracy. You are not more than you are. You are also not less. The gift of grace has given you a measure of faith—real gifts, real capacity. But not more than the next person, not in a hierarchy of importance.',
        },
        {
          kind: 'greek',
          id: 'rom12-sophronizo',
          title: 'Sophronizō — Think Soberly',
          script: 'σωφρονίζω',
          translit: '<strong>sophronizō</strong> · be sound-minded; be sober; think with clarity',
          description:
            'To think soberly is to think clearly, without the distortion of pride or self-doubt. It is to see yourself as you actually are—a beloved child of God with real gifts and real limitations.',
        },
        {
          kind: 'greek',
          id: 'rom12-charisma',
          title: 'Charisma — Gift',
          script: 'χάρισμα',
          translit: '<strong>charisma</strong> · gift of grace; gift given freely by the Spirit',
          description:
            'Every ability you have is a charisma—a grace-gift. You did not earn it. You did not deserve it. It was given. This is why comparison is poisonous. You are comparing graces given to you with graces given to someone else. The question is not "why don&apos;t I have what they have?" but "what will I do with what God has given me?"',
        },
        {
          kind: 'commentary',
          id: 'rom12-body-one',
          html:
            'The body of Christ has many members. A foot is not a hand. An eye is not an ear. They do not compete for importance. They work in concert. You are not meant to be everything. You are meant to be part of a whole—dependent on others, necessary to others, offering what you alone can offer.',
        },
        {
          kind: 'carry',
          html:
            'You will be tempted to despise yourself for what you cannot do, or to strut over what you can. Both are lies. You have been given grace for your season, your role, your part in the body. That is enough. It is also everything God is asking of you right now.',
        },
        {
          kind: 'reflection',
          id: 'rom12-sober',
          prompt: 'What is the gift God has actually given you—not what you wish you had, but what is actually yours? And who needs it from you?',
        },
      ],
    },

    /* ─── Romans 12:6b–8 — Use Your Gifts with Joy ──────────────────────── */
    {
      ref: 'Romans 12:6b–8',
      title: 'Using Gifts in Service',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            verse(
              6,
              t('if prophecy, let us prophesy according to the proportion of faith;')
            ),
            verse(
              7,
              t('Or ministry, let us wait on our ministering: or he that teacheth, on teaching;')
            ),
            verse(
              8,
              t('Or he that exhorteth, on exhortation: he that giveth, let him do it with '),
              hy('liberality', 'rom12-haplotes'),
              t('; he that ruleth, with '),
              hy('diligence', 'rom12-spoude'),
              t('; he that sheweth mercy, with '),
              hy('cheerfulness', 'rom12-hilarotes'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom12-gifts-list',
          html:
            'Paul lists the gifts: prophecy, ministry, teaching, exhortation, giving, ruling, mercy. Some are visible and public. Some are quiet. Some are energetic; some are tender. Notice he does not rank them. Prophecy does not outrank giving. Teaching does not outrank mercy. Each is a channel through which God works.',
        },
        {
          kind: 'greek',
          id: 'rom12-haplotes',
          title: 'Haplotēs — Liberality',
          script: 'ἁπλότης',
          translit: '<strong>haplotēs</strong> · simplicity; generosity; singleness of heart',
          description:
            'When you give, give with a simple heart—no strings, no expectation of return, no account-keeping. Give as God gives: freely, without holding back, without making the receiver feel small.',
        },
        {
          kind: 'greek',
          id: 'rom12-spoude',
          title: 'Spoudē — Diligence',
          script: 'σπουδή',
          translit: '<strong>spoudē</strong> · earnestness; zeal; diligence; eager care',
          description:
            'When you lead or serve, do it with eager care. Not lazily, not half-heartedly. Not as a chore but as something you are eager to do well. Your diligence is a form of love for those you serve.',
        },
        {
          kind: 'greek',
          id: 'rom12-hilarotes',
          title: 'Hilarotēs — Cheerfulness',
          script: 'ἱλαρότης',
          translit: '<strong>hilarotēs</strong> · cheerfulness; gladness; joyful willingness',
          description:
            'To show mercy is to enter into another&apos;s suffering. It can be heavy. But Paul insists it be done with hilarotēs—genuine cheerfulness. Your mercy is most powerful when it is joyful, not grim. When you show mercy as someone who is glad to do it.',
        },
        {
          kind: 'commentary',
          id: 'rom12-tone-matters',
          html:
            'Notice that Paul does not just list gifts. He insists on the tone each should carry. Prophecy aligned with faith. Ministry to the one who ministers. Teaching to the teacher. Every gift has a posture, a spirit. The gift and the grace with which it is given are not separate.',
        },
        {
          kind: 'carry',
          html:
            'Whatever gift God has given you is not private. It is for others. And the way you use it matters as much as the fact that you use it. Are you giving with simplicity? Serving with diligence? Showing mercy with actual cheerfulness? The gift is the channel. The grace is how it flows.',
        },
        {
          kind: 'reflection',
          id: 'rom12-tone',
          prompt: 'When you use your gift, what tone do you typically bring to it—eagerness, resentment, duty, joy? What would it mean to offer it differently?',
        },
      ],
    },

    /* ─── Romans 12:9 — Love Without Pretense ────────────────────────────── */
    {
      ref: 'Romans 12:9',
      title: 'Let Love Be Genuine',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            verse(
              9,
              hy('Let love be without dissimulation', 'rom12-anupokritos'),
              t('. '),
              hg('Abhor that which is evil', 'rom12-evil-good'),
              t('; cleave to that which is good.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom12-love-genuine',
          html:
            'Paul now turns from gifts to the spirit that should animate them all: love. But not a sentimental love. Agape. Love is not a feeling you sometimes have. It is a commitment to the good of another, made real in action. Dissimulation is pretense, playing a part. Genuine love cannot hide. It shows itself in concrete choices.',
        },
        {
          kind: 'greek',
          id: 'rom12-anupokritos',
          title: 'Anupokritos — Without Dissimulation',
          script: 'ἀνυπόκριτος',
          translit: '<strong>anupokritos</strong> · unfeigned; sincere; without pretense or hypocrisy',
          description:
            'Love that is anupokritos is not a mask. It is the honest expression of genuine care for the other. It cannot be faked. Either it is real or it is not. You cannot perform love. You can only choose to love truly.',
        },
        {
          kind: 'commentary',
          id: 'rom12-evil-good',
          html:
            'Genuine love has edges. It is not permissive. It abhors evil. It cleaves to good. This is not meanness. This is clarity—and clarity is a form of love. If you care about someone, you will not bless the path that leads them to ruin.',
        },
        {
          kind: 'carry',
          html:
            'Check your loves. Are they genuine or performed? Do you love people for their own sake, or for what they do for you? Do you love the good, or do you accommodate whatever they want to hear? Real love is costly because it cannot hide behind pretense.',
        },
        {
          kind: 'reflection',
          id: 'rom12-genuine',
          prompt: 'Where are you tempted to perform love rather than live it? Who would experience real transformation if your love became truly genuine?',
        },
      ],
    },

    /* ─── Romans 12:10 — Kindly Affectioned ──────────────────────────────── */
    {
      ref: 'Romans 12:10',
      title: 'Affection for One Another',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            verse(
              10,
              t('Be kindly '),
              hy('affectioned one to another', 'rom12-philostorgos'),
              t(' with brotherly love; in '),
              hg('honour', 'rom12-prefer'),
              t(' preferring one another;')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom12-kindly-affection',
          html:
            'The command here is tender. You are to be kindly affectioned toward one another—not just dutiful, not just tolerant. Genuinely fond. The church is not a business. It is a family.',
        },
        {
          kind: 'greek',
          id: 'rom12-philostorgos',
          title: 'Philostorgos — Kindly Affectioned',
          script: 'φιλόστοργος',
          translit: '<strong>philostorgos</strong> · affectionate; tenderly fond; loving with familial warmth',
          description:
            'This is the warmth of family love—the kind of instinctive care a parent has for a child, or siblings for each other. Paul is saying: let the church be to you like family. Let affection flow naturally, not from duty alone.',
        },
        {
          kind: 'commentary',
          id: 'rom12-prefer',
          html:
            'To "prefer" someone in honor is to delight in their good as much as your own. You do not keep score. You do not demand recognition. You are genuinely glad when someone else is honored, as though it had happened to you.',
        },
        {
          kind: 'carry',
          html:
            'Affection cannot be manufactured. But it can be awakened. When you choose to see someone as your family—not just fellow church members, but true kin—something shifts. Their joy becomes your joy. Their struggle becomes your struggle. This is what it looks like when brotherly love becomes real.',
        },
        {
          kind: 'reflection',
          id: 'rom12-affection',
          prompt: 'Is there someone in your church or community toward whom genuine affection feels difficult? What would it take to see them as true family?',
        },
      ],
    },

    /* ─── Romans 12:11–13 — Diligent, Joyful, Hospitable ─────────────────── */
    {
      ref: 'Romans 12:11–13',
      title: 'Zeal, Hope, and Hospitality',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            verse(
              11,
              t('Not slothful in business; fervent in spirit; serving the Lord;')
            ),
            verse(
              12,
              t('Rejoicing in hope; patient in tribulation; continuing instant in prayer;')
            ),
            verse(
              13,
              t('Distributing to the necessity of saints; given to hospitality.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom12-zeal',
          html:
            'Paul moves into the practical rhythms of a transformed life. Do not be slothful—lazy, indifferent. Be fervent in spirit. This is enthusiasm for God&apos;s work. It does not come from human effort alone. It comes from having tasted the mercies of God.',
        },
        {
          kind: 'commentary',
          id: 'rom12-hope-prayer',
          html:
            'Rejoice in hope. The future belongs to God. Patient in tribulation—not denying the hardship but holding it in the context of hope. Continuing instant in prayer—give yourself to prayer not seasonally but steadily, earnestly. This is what faithfulness looks like in time.',
        },
        {
          kind: 'commentary',
          id: 'rom12-hospitality',
          html:
            'Share with the needy. Open your table. Hospitality in the ancient world was not a luxury; it was a necessity. When Paul writes of hospitality in the body of Christ, he is writing about concrete care: food, shelter, presence for those who need it.',
        },
        {
          kind: 'carry',
          html:
            'You do not need to be extraordinary in these things. You need to be faithful. Not slothful. Fervent. Hopeful even when the present is hard. Praying steadily. Sharing what you have. Over time, this ordinary faithfulness reshapes both you and your community.',
        },
        {
          kind: 'reflection',
          id: 'rom12-steadfast',
          prompt: 'Where is God calling you to trade sloth for fervor, despair for hope, isolation for prayer? What would it look like to begin this week?',
        },
      ],
    },

    /* ─── Romans 12:14–15 — Blessing and Sharing in Others&apos; Joy and Sorrow ── */
    {
      ref: 'Romans 12:14–15',
      title: 'Bless and Weep Together',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            verse(
              14,
              hy('Bless them which persecute you', 'rom12-bless'),
              t(': bless, and curse not.')
            ),
            verse(
              15,
              hy('Rejoice with them that do rejoice', 'rom12-weep'),
              t(', and '),
              hg('weep with them that weep', 'rom12-weep'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom12-bless',
          html:
            'This is radical. Not defend yourself, not withdraw, not retaliate. Bless. Pray for good on the head of those who would harm you. This is possible only when you have been transformed by Christ. It is not human instinct. It is the fruit of a renewed mind that understands mercy.',
        },
        {
          kind: 'commentary',
          id: 'rom12-weep',
          html:
            'Love is not one-dimensional. It rejoices fully in others&apos; joy—genuinely glad, not secretly envious. And it weeps with those who weep—enters the sorrow, does not minimize it or rush past it. This is the currency of real friendship.',
        },
        {
          kind: 'carry',
          html:
            'Your natural instinct is to protect your own joy and distance yourself from others&apos; sorrow. But Christ-shaped love does the opposite. It distributes itself—full presence in joy, full presence in grief. This is what it costs to love like this. It is also what makes you most fully alive.',
        },
        {
          kind: 'reflection',
          id: 'rom12-bless-weep',
          prompt: 'Who do you need to bless with actual prayer—even those who have hurt you? Whose joy or sorrow do you need to enter more fully?',
        },
      ],
    },

    /* ─── Romans 12:16 — Be of the Same Mind One Toward Another ──────────── */
    {
      ref: 'Romans 12:16',
      title: 'Unity of Mind',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            verse(
              16,
              hg('Be of the same mind one toward another', 'rom12-phronema'),
              t('. Mind not high things, but condescend to men of low estate. '),
              hg('Be not wise in your own conceits', 'rom12-conceit'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom12-phronema',
          html:
            'To be of the same mind is not to think identically. It is to be oriented toward the same Lord, the same truth, the same love. You can disagree on details and still be one in spirit—if your minds are fixed on Christ.',
        },
        {
          kind: 'commentary',
          id: 'rom12-conceit',
          html:
            'Do not assume you have reached perfect understanding. Do not exalt yourself above those who think differently. Wisdom that Jesus embodied was often foolish by the world&apos;s standards. Be humble. Be open. Be willing to learn from the most unexpected people.',
        },
        {
          kind: 'carry',
          html:
            'It is easy to feel superior—smarter, more mature, more right. But this fractures the body. Unity requires choosing to stand with people whose journey you do not fully understand, trusting that the Spirit is at work in them as truly as in you.',
        },
        {
          kind: 'reflection',
          id: 'rom12-same-mind',
          prompt: 'Who in your community thinks differently than you? What if you approached them with genuine curiosity instead of judgment?',
        },
      ],
    },

    /* ─── Romans 12:17–18 — Recompense and Peacemaking ─────────────────── */
    {
      ref: 'Romans 12:17–18',
      title: 'Recompense to No Man Evil',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            verse(
              17,
              hy('Recompense to no man evil for evil', 'rom12-recompense'),
              t('. Provide things '),
              hg('honest in the sight of all men', 'rom12-honest'),
              t('.')
            ),
            verse(
              18,
              t('If it be possible, as much as lieth in you, '),
              hg('live peaceably with all men', 'rom12-peace'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom12-recompense',
          html:
            '"Recompense to no man evil for evil." Someone wrongs you. Your first instinct is to right the score. To make them pay. But Paul says no. You are not in the business of vengeance. You are in the business of transformation.',
        },
        {
          kind: 'commentary',
          id: 'rom12-honest',
          html:
            'But also—provide things honest in the sight of all men. You do not withdraw. You do not become passive. You conduct yourself with integrity so obvious that even your adversary has nothing to say against your character. This is strength.',
        },
        {
          kind: 'commentary',
          id: 'rom12-peace',
          html:
            'Live peaceably—to the degree that depends on you. Notice the qualification. Some people will not be made peace with, no matter what you do. But you do your part. You do not escalate. You do not withdraw into bitterness. You remain open to reconciliation.',
        },
        {
          kind: 'carry',
          html:
            'When someone wrongs you, you have a choice about who you will become in response. Will you become mean and small? Or will you remain honest, kind, and at peace? The choice is not easy, but it is yours.',
        },
        {
          kind: 'reflection',
          id: 'rom12-recompense-reflect',
          prompt: 'Is there a conflict where you have been trying to right the score? What would it look like to step back and pursue peace instead?',
        },
      ],
    },

    /* ─── Romans 12:19–20 — Vengeance is God&apos;s; Feed Your Enemy ────────── */
    {
      ref: 'Romans 12:19–20',
      title: 'Overcome Evil with Good',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            verse(
              19,
              t('Dearly beloved, '),
              hy('avenge not yourselves', 'rom12-vengeance'),
              t(', but rather give place unto wrath: for it is written, '),
              hp('Vengeance is mine', 'christ-vengeance'),
              t('; I will repay, saith the Lord.')
            ),
            verse(
              20,
              t('Therefore if thine enemy hunger, '),
              hg('feed him', 'rom12-feed'),
              t('; if he thirst, give him drink: for in so doing thou shalt heap coals of fire on his head.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom12-vengeance',
          html:
            'Paul quotes Deuteronomy. Vengeance belongs to God. Not because God is petty or cruel, but because only God has perfect knowledge and perfect justice. You do not. When you avenge yourself, you avenge on the basis of incomplete information and wounded pride.',
        },
        {
          kind: 'greek',
          id: 'rom12-didomi-topon',
          title: 'Didōmi Topon — Give Place',
          script: 'δίδωμι τόπον',
          translit: '<strong>didōmi topon</strong> · give space; yield room; allow God to work',
          description:
            'To "give place unto wrath" does not mean you approve of wrongdoing. It means you step aside and let God&apos;s justice be His work. You make room for Him by not crowding in with your own retaliation.',
        },
        {
          kind: 'commentary',
          id: 'rom12-feed',
          html:
            'Feed your enemy. Clothe him. Care for him. This is not advice to be naive or to enable abuse. It is a call to radical generosity toward those who oppose you. When you feed your enemy, you are not denying his wrongdoing. You are refusing to become like him.',
        },
        {
          kind: 'commentary',
          id: 'rom12-coals',
          html:
            'The phrase "heap coals of fire on his head" is often misunderstood as a veiled curse. But in context, it is about shame and transformation. When someone acts with kindness toward their enemy, the enemy is called to account—confronted by the contrast between their hostility and the other&apos;s grace. Sometimes that is what it takes to break a cycle.',
        },
        {
          kind: 'christ',
          id: 'christ-vengeance',
          title: 'Christ Connection — Vengeance Surrendered',
          html:
            'Jesus was crucified unjustly. He had every right to call down judgment. Instead, He prayed for His killers: "Father, forgive them; for they know not what they do" (Luke 23:34). He did not defend Himself. He did not retaliate. He entrusted His cause to God and returned good for evil. His entire ministry is the pattern of overcoming evil not with power but with love.',
        },
        {
          kind: 'carry',
          html:
            'The next time someone wrongs you, you will feel the desire to even the score. When that moment comes, remember: vengeance belongs to God. Your job is not to punish. Your job is to love. Feed your enemy. Clothe him. Let God handle the rest. This is not weakness. This is the hardest strength—the strength to overcome evil with good.',
        },
        {
          kind: 'reflection',
          id: 'rom12-overcome',
          prompt: 'Who would be transformed if you actually fed them—acted toward them with genuine care—instead of waiting for them to apologize?',
        },
      ],
    },

    /* ─── Romans 12:21 — Overcome Evil with Good ────────────────────────── */
    {
      ref: 'Romans 12:21',
      title: 'The Final Word Is Good',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            verse(
              21,
              hp('Be not overcome of evil', 'christ-overcoming'),
              t(': but '),
              hp('overcome evil with good', 'christ-overcoming'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom12-final-victory',
          html:
            'This is the punchline of the chapter. Of the whole argument. The world&apos;s way is to answer evil with greater evil, to match force with force. But this only multiplies evil. It does not end it. Christ&apos;s way—the only winning way—is to break the cycle with goodness. Let good have the last word.',
        },
        {
          kind: 'commentary',
          id: 'rom12-overcome-how',
          html:
            'How do you overcome evil? Not by being more evil. Not by being passive. But by being good—actively, courageously, persistently good. Goodness is not weakness. It is the strongest force in the cosmos. It is the way Jesus conquered death itself.',
        },
        {
          kind: 'christ',
          id: 'christ-overcoming',
          title: 'Christ Connection — Victory Through Love',
          html:
            'The cross seemed like evil&apos;s greatest victory. Jesus dead. His movement broken. But that death was not overcome by force. It was overcome by resurrection. By love that refused to stop loving. By goodness that would not be defeated by violence. This is what Paul means: overcome evil with good. Let love have the final word, because love is the final word.',
        },
        {
          kind: 'carry',
          html:
            'Today and every day, you will be tested. Someone will be unkind. The news will be dark. You will feel the weight of the world&apos;s evil. And in that moment, you have a choice: be overcome, or overcome. The way to overcome is not more force. It is more good. More love. More faithfulness. The mercies of God are calling you to be an instrument of His goodness in a world that desperately needs it.',
        },
        {
          kind: 'reflection',
          id: 'rom12-final',
          prompt: 'In your sphere—your home, your work, your community—where is evil at work that only good can overcome? Where is God asking you to be the one who brings that good?',
        },
        {
          kind: 'artwork',
          matchTitle: /good|light|love|overcome/i,
          caption: 'Romans 12:21 · Overcome Evil with Good',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Present your bodies a living sacrifice. Be not conformed to this world; be transformed by the renewing of your mind. Let love be without dissimulation. Overcome evil with good.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Romans 12 · Study Guide',
  },

  hasHebrew: false,
};
