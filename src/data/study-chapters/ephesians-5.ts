import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ephesians 5 — Walk in Love; Christ&apos;s Love for the Church
 *
 * "Husbands, love your wives, even as Christ also loved the church, and gave
 * himself for it." Ephesians 5 extends Paul&apos;s practical ethics. Believers
 * are to walk in love, to live as "children of light," and in every
 * relationship—marriage, family, work—to reflect Christ&apos;s character. The
 * standard is not negotiable: Christ&apos;s self-giving love.
 */
export const EPHESIANS_5: RichChapterContent = {
  bookSlug: 'ephesians',
  bookName: 'Ephesians',
  chapter: 5,

  estimatedMinutes: { beginner: 11, intermediate: 21, deep: 29 },
  intros: [
    'Ephesians 5 opens with a simple command: "Be followers of God, as dear children." And what is the content of following God? "Walk in love." All that follows—teaching about relationships, marriage, family—flows from this foundation: that believers are people who have learned to love as Christ has loved them.',
    'The chapter moves from general principles of love and light to specific relationships. Marriage is presented not as a legal contract, but as a covenant image of Christ&apos;s relationship with the church. Christ "gave himself for" the church, making her "not having spot, or wrinkle, or any such thing; but that she should be holy and without blemish." This is the measure by which all love is understood.',
  ],

  opener: {
    matchArtist: /tissot/i,
    matchTitle: /married|love|bride/i,
    caption: 'The Measure of Love',
  },

  bottomShare: {
    label: 'Share Ephesians 5',
    quote:
      'Walk in love as Christ loved you. Husbands love your wives as Christ loved the church, giving himself for her. All relationships reflect Christ&apos;s self-giving love.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ephesians 5 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-genesis-2-marriage',
      kind: 'study',
      source: 'Sefaria',
      label: 'Genesis 2:24 — One Flesh',
      url: 'https://www.sefaria.org/Genesis.2.24',
      description: 'OT foundation for marriage and union that Paul applies to Christ and the church in verse 31.',
    },
    {
      id: 'intertextual-ephesians-5',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Genesis 2:24 & Ephesians 5:31–32',
      url: 'https://intertextual.bible/text/genesis-2.24/ephesians-5.31',
      description: 'Paul&apos;s reapplication of the creation account to reveal the mystery of Christ and the church.',
    },
    {
      id: 'bibleodyssey-marriage-ancient',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Marriage in Ancient Israel',
      url: 'https://www.bibleodyssey.org/search?q=marriage',
      description: 'Context for understanding marriage customs and Paul&apos;s teaching on marital love.',
    },
  ],

  sections: [
    /* ─── Ephesians 5:1–2 — Be Imitators of God ────────────────────────── */
    {
      ref: 'Ephesians 5:1–2',
      title: 'Be Ye Followers of God, As Dear Children',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 1,
              spans: [
                t('Be ye therefore '),
                hp('followers of God, as dear children', 'e5-mimetes'),
                t(';'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And '),
                hp('walk in love', 'e5-agape-love'),
                t(', as Christ also '),
                hg('loved us', 'e5-christ-love'),
                t(', and hath given himself for us an offering and a sacrifice to God for a sweetsmelling savour.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'e5-mimetes',
          html:
            'To be a "follower" is <em>mimetes</em> — one who imitates, who learns by copying. But this is not fake or hollow imitation. It is the imitation of a child learning from a father: intimate, relational, rooted in belonging. You do not earn the right to imitate God by being perfect first. You are His dear child. That relationship comes first. The imitation follows.',
        },
        {
          kind: 'greek',
          id: 'greek-mimetes',
          title: 'Mimetes — "Follower; Imitator"',
          script: 'μιμητής',
          translit: '<strong>mimetes</strong> · one who imitates; a student learning from a model',
          description:
            'Not mere copying or play-acting. Mimetes is the imitation of an apprentice: watching, learning, practicing until the pattern becomes your own. All three epistles use this word of believers learning to imitate God and Christ.',
        },
        {
          kind: 'commentary',
          id: 'e5-agape-love',
          html:
            'This is not sentiment. <em>Agape</em> is the willingness to lay down your life. To walk in love means to walk in the habit of giving yourself away, to order your choices around the good of the beloved rather than your own ease or reputation.',
        },
        {
          kind: 'greek',
          id: 'greek-agape',
          title: 'Agape — "Love; Self-giving"',
          script: 'ἀγάπη',
          translit: '<strong>agape</strong> · love; covenant love; self-giving for the sake of the beloved',
          description:
            'In Greek, <em>agape</em> is distinct from <em>philia</em> (friendship love) and <em>eros</em> (romantic attraction). Agape is intentional, sacrificial, not rooted in feeling but in choice. The love that laid down its life for us.',
        },
        {
          kind: 'christ',
          id: 'e5-christ-love',
          title: 'Christ Connection — Christ&apos;s Love as Sacrifice',
          html:
            'Jesus is "the Lamb of God, which taketh away the sin of the world" (John 1:29). His death is an "offering and a sacrifice" — the same language Paul uses here. In Ephesians 5:2, the measure is not how much you deserve to be loved, but how much Christ was willing to give. He emptied Himself. He died. He rose. And He did all of it for you. That is the love you are called to walk in.',
        },
        {
          kind: 'carry',
          html:
            'When you walk in love today, you are not trying to earn anything. You are imitating your Father. You are learning His pattern, the way a child learns from a father who never stops showing her what is possible. Where today will you walk in that love — the kind that gives first, asks nothing back, lays down its own comfort for someone else&apos;s good?',
        },
        {
          kind: 'reflection',
          id: 'e5-followers-reflect',
          prompt:
            'What would it look like to walk today as a beloved child of God, imitating His love? Where is He calling you to give yourself away?',
        },
      ],
    },

    /* ─── Ephesians 5:3–10 — Walk as Children of Light ──────────────────── */
    {
      ref: 'Ephesians 5:3–10',
      title: 'Walk as Children of Light',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 3,
              spans: [
                t('But '),
                hg('fornication, and all uncleanness, or covetousness', 'e5-sin'),
                t(', let it not be once named among you, as becometh saints;'),
              ],
            },
            {
              number: 4,
              spans: [
                t('Neither '),
                hg('filthiness, nor foolish talking, nor jesting', 'e5-speech'),
                t(', which are not convenient: but rather giving of thanks.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'e5-sin',
          html:
            'Paul is not listing vague moral failures. He is naming what destroys the body and spirit: sexual unfaithfulness, the endless hunger for more, the spiritual numbness that follows. A saint — one set apart by God — simply does not live this way. Not because of rules, but because of who you are.',
        },
        {
          kind: 'commentary',
          id: 'e5-speech',
          html:
            'Even your words matter. Filthy talk, foolish joking, jesting that mocks what is true — these corrode the soul. Instead, Paul sets a single practice: "giving of thanks." The way you speak either leads away from God or toward Him.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 5,
              spans: [
                t('For this ye know, that no '),
                hg('whoremonger, nor unclean person, nor covetous man, who is an idolater', 'e5-idolatry'),
                t(', hath any inheritance in the kingdom of Christ and of God.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('Let no man '),
                hp('deceive you with vain words', 'e5-deceive'),
                t(': for because of these things cometh the wrath of God upon the children of disobedience.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'e5-idolatry',
          html:
            'Paul names the whoremonger, the covetous man, and then identifies them together: they are idolaters. To worship your own pleasure, to never have enough, to give yourself over to appetite — this is idolatry. You are bowing before a god that is not God.',
        },
        {
          kind: 'commentary',
          id: 'e5-deceive',
          html:
            'People will tell you these things do not matter. That there is no cost to living for your appetite. That God is not watching. That nobody is hurt. These are "vain words" — empty, leading nowhere. Paul names the consequence: the wrath of God comes on those who believe the lie.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 8,
              spans: [
                t('For ye were sometimes '),
                hy('darkness', 'e5-darkness'),
                t(': but now are ye '),
                hp('light in the Lord', 'e5-light'),
                t(': walk as children of light:'),
              ],
            },
            {
              number: 9,
              spans: [
                t('(For the fruit of the Spirit is in all '),
                hg('goodness and righteousness and truth', 'e5-fruit'),
                t(')'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Proving what is acceptable unto the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'e5-darkness',
          html:
            'Before Christ, you were not merely "in the dark." You were darkness itself. This is not shame — it is the condition everyone starts in. But it is not where you stay. The darkness is not permanent.',
        },
        {
          kind: 'commentary',
          id: 'e5-light',
          html:
            'To be "light in the Lord" is not something you achieve by trying hard. You have been transferred from darkness to light. Christ is your light. The only response is to walk accordingly — openly, truthfully, without hiding.',
        },
        {
          kind: 'greek',
          id: 'greek-phos',
          title: 'Phos — "Light"',
          script: 'φῶς',
          translit: '<strong>phos</strong> · light; illumination; revelation; transparency',
          description:
            'To be "light in the Lord" means the Son of God has changed your entire nature. You are not trying to become good. You have already been made new. You are now light — and light exposes, reveals, shows things as they truly are.',
        },
        {
          kind: 'commentary',
          id: 'e5-fruit',
          html:
            'The fruit of the Spirit is goodness, righteousness, and truth. Not perfection, but the real. Not hiding anything, but living openly. When you walk as children of light, your life becomes a question — a silent proof — to everyone who sees it: Is there really something to this? Is God really real?',
        },
        {
          kind: 'christ',
          id: 'e5-christ-light-connection',
          title: 'Christ Connection — The True Light',
          html:
            'Jesus said, "I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life" (John 8:12). Paul is simply saying: you have followed Him. You have been made light. Now stop acting like you are still in the dark. Walk as what you are.',
        },
        {
          kind: 'carry',
          html:
            'Nobody wakes up wanting to be darkness. But left to itself, the soul defaults to hiding — covering up, numbing out, choosing appetite over integrity. You cannot white-knuckle your way to goodness. But you can walk as light. You can let what is true shine through. You can let yourself be seen. That is what it means to walk as a child of light.',
        },
        {
          kind: 'reflection',
          id: 'e5-light-reflect',
          prompt:
            'Where are you still walking as if you are in the dark — hiding, covering up, numbing out? What would it look like to walk as light, openly, today?',
        },
      ],
    },

    /* ─── Ephesians 5:11–14 — No Fellowship with Darkness ─────────────── */
    {
      ref: 'Ephesians 5:11–14',
      title: 'Have No Fellowship with the Works of Darkness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 11,
              spans: [
                t('And '),
                hp('have no fellowship with the unfruitful works of darkness', 'e5-no-fellowship'),
                t(', but rather '),
                hg('reprove them', 'e5-reprove'),
                t('.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('For it is a shame even to speak of those things which are done of them in secret.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'e5-no-fellowship',
          html:
            'Paul is not saying avoid all people who sin. He is saying: do not participate in their habits. Do not normalize them. Do not act as though the works of darkness are neutral. Friendship with darkness is enmity with God (James 4:4).',
        },
        {
          kind: 'commentary',
          id: 'e5-reprove',
          html:
            'To "reprove" means to bring light to. Not to shame or dominate, but to expose. When you see something evil, the Christian response is neither to hide nor to rage — it is to bring it into light, to name it truthfully, and trust God with the outcome.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 13,
              spans: [
                t('But all things that are '),
                hg('reproved are made manifest by the light', 'e5-light-manifest'),
                t(': for whatsoever doth make manifest is light.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Wherefore he saith, '),
                hp('Awake thou that sleepest', 'e5-awake'),
                t(', and arise from the dead, and Christ shall give thee light.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'e5-light-manifest',
          html:
            'This is how light works: it does not destroy darkness. It reveals it. When you bring light into a room, the room is simply seen as it is. The unrepented evil in your life will eventually be brought to light — either by repentance now, or by God&apos;s judgment later. Better to be found in the light while there is still time to turn.',
        },
        {
          kind: 'commentary',
          id: 'e5-awake',
          html:
            'Paul is quoting something ancient — whether Isaiah, the Psalms, or a hymn we no longer have. "Awake thou that sleepest, and arise from the dead" is a call to resurrection. It is a call to come back to life. The deadness you feel — that numbness, that going through the motions — is not your final state.',
        },
        {
          kind: 'christ',
          id: 'e5-christ-awake',
          title: 'Christ Connection — The Word That Wakes the Dead',
          html:
            'The passage Paul quotes is unclear in its original — some scholars trace it to Isaiah or the Psalms, others to an ancient hymn or prayer. What is clear: "Awake thou that sleepest, and arise from the dead" is a call to resurrection. And it is Christ who gives the light. In the cross and resurrection, Christ is the light that calls the dead to life. He speaks your name. You wake up. You arise.',
        },
        {
          kind: 'carry',
          html:
            'There is a numbness that comes from living in secret shame. A deadness. The longer you hide what is happening inside you, the less alive you feel. Paul is calling you to wake up. To step into the light — confession, repentance, honest conversation with God and trusted others. That is not punishment. That is the only path back to life.',
        },
        {
          kind: 'reflection',
          id: 'e5-awake-reflect',
          prompt:
            'Where are you still sleepwalking, still acting dead? What would it take for you to hear Christ&apos;s voice calling you to wake up?',
        },
      ],
    },

    /* ─── Ephesians 5:15–17 — Walk Circumspectly; Redeem the Time ───────── */
    {
      ref: 'Ephesians 5:15–17',
      title: 'Redeem the Time; Walk Wisely',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 15,
              spans: [
                t('See then that ye '),
                hy('walk circumspectly', 'e5-circumspect'),
                t(', not as fools, but as '),
                hg('wise', 'e5-wise'),
                t(':'),
              ],
            },
            {
              number: 16,
              spans: [
                t(''),
                hy('Redeeming the time', 'e5-exagorazo'),
                t(', because the days are evil.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Wherefore be ye not unwise, but understanding what the '),
                hp('will of the Lord', 'e5-will-lord'),
                t(' is.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'e5-circumspect',
          html:
            'To walk "circumspectly" is to be aware, watchful, careful. Not paranoid, but present. Paying attention to where you are going, what you are becoming, how your choices are shaping you. A fool stumbles through life numb. A wise person is awake.',
        },
        {
          kind: 'commentary',
          id: 'e5-wise',
          html:
            'Wisdom is not intelligence. It is the gift of seeing your life from God&apos;s perspective. It is the ability to know what matters and what does not, what is worth your time and what is a waste. Wisdom comes from seeking God, not from cleverness.',
        },
        {
          kind: 'commentary',
          id: 'e5-exagorazo',
          html:
            'The image is stark: the days are evil, and they are passing. Time is not infinitely available. Paul is calling you to be intentional, to buy back the hours from triviality and use them for what matters. Every moment is a choice — will you let it be stolen by the world, or will you consecrate it to God?',
        },
        {
          kind: 'greek',
          id: 'greek-exagorazo',
          title: 'Exagorazo — "Redeem the Time"',
          script: 'ἐξαγοράζω',
          translit: '<strong>exagorazo</strong> · to buy up; to redeem; to reclaim for a higher purpose',
          description:
            'The image is of a merchant buying up goods — or a slave owner buying a slave to set them free. To "redeem the time" means to reclaim your hours from trivial or sinful pursuits and consecrate them to God. Your time is being offered for sale. Are you buying it back?',
        },
        {
          kind: 'commentary',
          id: 'e5-will-lord',
          html:
            'The will of the Lord is not a secret code you have to break. It is revealed in Scripture, in prayer, in wise counsel, in the still small voice of the Spirit. To understand God&apos;s will is to ask: "What is He asking of me today? Where does He want me to go? How does He want me to love?"',
        },
        {
          kind: 'christ',
          id: 'e5-christ-time',
          title: 'Christ Connection — The Urgency of the Hour',
          html:
            'Jesus lived with a terrible urgency. He knew His time was short. "I must work the works of him that sent me, while it is day: the night cometh, when no man can work" (John 9:4). And now the same urgency applies to you. You do not know how much time you have. The days are evil — there is much that would pull you off course. But you have enough time to do what God calls you to do, if you use it wisely.',
        },
        {
          kind: 'carry',
          html:
            'Your hours are a gift. You are not going to get them back. Every hour spent on numbness, on comparison, on eating your own feelings — that is an hour you chose not to redeem. But redemption is possible right now. This moment. You can choose to be present. To do the next thing faithfully. To love the person in front of you. To seek God. This is what it means to redeem the time.',
        },
        {
          kind: 'reflection',
          id: 'e5-time-reflect',
          prompt:
            'If you only had one week left, what would you do with your time? Now ask: Why not do that with your actual time? What is stopping you?',
        },
      ],
    },

    /* ─── Ephesians 5:18–20 — Be Filled with the Spirit ─────────────────── */
    {
      ref: 'Ephesians 5:18–20',
      title: 'Be Filled with the Spirit',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 18,
              spans: [
                t('And be not drunk with wine, wherein is excess; but '),
                hp('be filled with the Spirit', 'e5-filled-spirit'),
                t(';'),
              ],
            },
            {
              number: 19,
              spans: [
                t('Speaking to yourselves in '),
                hg('psalms and hymns and spiritual songs', 'e5-music'),
                t(', singing and making '),
                hg('melody in your heart to the Lord', 'e5-melody'),
                t(';'),
              ],
            },
            {
              number: 20,
              spans: [
                t('Giving thanks always for all things unto God and the Father in the name of our Lord Jesus Christ;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'e5-filled-spirit',
          html:
            'A drunk man is mastered by something outside himself. Paul is saying: Do not be mastered by wine (or by anything — food, approval, fear, pleasure). Be mastered by the Spirit instead. Let the life of God flood through you instead. That is freedom.',
        },
        {
          kind: 'greek',
          id: 'greek-pleroo',
          title: 'Pleroo — "Fill; Complete"',
          script: 'πληρόω',
          translit: '<strong>pleroo</strong> · to fill; to complete; to make full',
          description:
            'The Spirit "fills" you — not as a vessel receives water, but as light fills a room. The Spirit is not a substance you collect. To be "filled" with the Spirit is to be so aligned with God that His life flows through every part of you, saturating your choices, your words, your desires.',
        },
        {
          kind: 'commentary',
          id: 'e5-music',
          html:
            'A community filled with the Spirit sings. Not because singing is required, but because the heart that is full has to overflow. Psalms (the ancient hymns of Scripture), hymns (structured songs of faith), and spiritual songs (spontaneous praise) — the full range of music becomes a language of prayer and community.',
        },
        {
          kind: 'commentary',
          id: 'e5-melody',
          html:
            'The melody is made "in your heart to the Lord." This is not performance. Nobody else needs to hear it. The song is between you and God. A spirit filled with the Holy Ghost naturally breaks into thanksgiving, into worship, into joy.',
        },
        {
          kind: 'christ',
          id: 'e5-christ-spirit',
          title: 'Christ Connection — Indwelt by the Spirit',
          html:
            'After His resurrection, Jesus told the disciples: "All power is given unto me in heaven and in earth… and, lo, I am with you alway, even unto the end of the world" (Matt. 28:18–20). His presence came by the Spirit. To be filled with the Spirit is to be indwelt by the risen Christ. The same resurrection power that changed everything is at work inside you.',
        },
        {
          kind: 'carry',
          html:
            'You cannot manufacture the Spirit. You cannot make yourself holy. But you can open yourself to be filled. You can turn off the numbing (the wine, the endless scrolling, the work that never stops). You can turn toward God in prayer, in Scripture, in community. You can notice the moments when joy breaks through. You can let the gratitude flow. That is what it means to make room for the Spirit to fill you.',
        },
        {
          kind: 'reflection',
          id: 'e5-spirit-reflect',
          prompt:
            'What have you been turning to instead of the Spirit — wine, work, approval, control? If you made space for the Spirit to fill you today, what would change?',
        },
      ],
    },

    /* ─── Ephesians 5:21 — Submission as Mutual Love ──────────────────────── */
    {
      ref: 'Ephesians 5:21',
      title: 'Submitting Yourselves One to Another',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 21,
              spans: [
                t(''),
                hp('Submitting yourselves one to another', 'e5-hypotasso'),
                t(' in the fear of God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'e5-hypotasso',
          html:
            'This is the hinge verse. "Submitting yourselves one to another" sets the tone for everything that follows. Paul is not introducing hierarchy here. He is introducing mutuality — you lay down your own desires for the sake of the beloved. This is what all Christian relationships look like.',
        },
        {
          kind: 'greek',
          id: 'greek-hypotasso',
          title: 'Hypotasso — "Submit; Be Subject"',
          script: 'ὑποτάσσω',
          translit: '<strong>hypotasso</strong> · to place oneself under; to yield; to submit to',
          description:
            'Hypotasso means to subordinate yourself to — not in the sense of inferiority, but in the sense of choosing to put another person&apos;s good first. A soldier subordinates himself to his commander not because he is less, but because the mission requires order. In marriage, both spouses submit to each other for the sake of the covenant.',
        },
        {
          kind: 'commentary',
          html:
            'The phrase "in the fear of God" is crucial. You submit not out of weakness or compulsion, but out of reverence for God. You lay down your rights because you trust God more than you trust yourself to protect your own interests.',
        },
        {
          kind: 'christ',
          id: 'e5-christ-submit',
          title: 'Christ Connection — The One Who Emptied Himself',
          html:
            'The foundational Christian act is not assertion of power but submission. Jesus "made himself of no reputation, and took upon him the form of a servant, and was made in the likeness of men: and being found in fashion as a man, he humbled himself, and became obedient unto death, even the death of the cross" (Phil. 2:7–8). Every Christian relationship is meant to echo that same self-giving.',
        },
        {
          kind: 'carry',
          html:
            'This verse undoes the whole kingdom of the world. In business, you climb over others to rise. In dating, you protect yourself first. In family, you assert your rights. Paul is saying: In the church, it works differently. You lay down your own interests. You listen more than you speak. You give rather than grab. Not out of fear. Out of love for God. Out of reverence for His way.',
        },
        {
          kind: 'reflection',
          id: 'e5-submit-reflect',
          prompt:
            'In one close relationship, what would it look like to actually submit to the other person — to lay down your own needs for theirs?',
        },
        {
          kind: 'artwork',
          matchTitle: /married|bride|groom|covenant/i,
          caption: 'Ephesians 5:21–33 · The Marriage Covenant',
        },
      ],
    },

    /* ─── Ephesians 5:22–27 — Wives and Husbands as Christ and the Church ── */
    {
      ref: 'Ephesians 5:22–27',
      title: 'Christ&apos;s Love for the Church; The Standard for Marriage',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 22,
              spans: [
                t('Wives, submit yourselves unto your own husbands, as unto the Lord.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('For the husband is the head of the wife, even as Christ is the head of the church: and he is the saviour of the body.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'Paul opens the marriage passage by grounding wives&apos; submission in their relationship to God — "as unto the Lord." The submission is not ultimately to a man, but to God. And the model for any authority is Christ.',
        },
        {
          kind: 'commentary',
          html:
            'When Paul calls the husband "head of the wife," he immediately clarifies what he means by comparing it to Christ and the church. Christ&apos;s headship is characterized by complete self-giving. He is the "saviour of the body." A head that does not save its body is not a head; it is a tyrant.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 25,
              spans: [
                t('Husbands, '),
                hp('love your wives, even as Christ also loved the church', 'e5-christ-model'),
                t(', and gave himself for it;'),
              ],
            },
            {
              number: 26,
              spans: [
                t('That he might sanctify and cleanse it with the '),
                hg('washing of water by the word', 'e5-sanctify'),
                t(','),
              ],
            },
            {
              number: 27,
              spans: [
                t('That he might '),
                hg('present it to himself a glorious church', 'e5-glorious'),
                t(', not having spot, or wrinkle, or any such thing; but that '),
                hp('it should be holy and without blemish', 'e5-holy-blameless'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'e5-christ-model',
          html:
            'This is the standard: "as Christ also loved the church." Not romantic love, not companionate love — though those things can be true. But self-sacrificial love. The kind that dies. The kind that asks nothing back. The kind that lays down its own comfort, its own preferences, its own safety for the beloved.',
        },
        {
          kind: 'greek',
          id: 'greek-hagiazao',
          title: 'Hagiazao — "Sanctify; Make Holy"',
          script: 'ἁγιάζω',
          translit: '<strong>hagiazao</strong> · to sanctify; to set apart; to make holy',
          description:
            'Christ&apos;s love of the church is not merely protective or sentimental. It is transformative. To sanctify means to set apart from sin, to make holy, to restore to the purpose God always had. That is what Christ does for the church.',
        },
        {
          kind: 'commentary',
          id: 'e5-sanctify',
          html:
            'The "washing of water by the word" is baptism — the public act of being made new. Christ does not just cleanse the church; He does it through His Word. He speaks, and what is unclean becomes clean. What is broken is made whole. This is the pattern of Christ&apos;s love: it transforms.',
        },
        {
          kind: 'commentary',
          id: 'e5-glorious',
          html:
            'Christ&apos;s purpose for the church is that she be "glorious" — full of beauty, honored, radiant. Not perfect in some sterile sense, but alive with the beauty of holiness. When you love another person as Christ loved the church, your aim is not control or possession, but their flourishing.',
        },
        {
          kind: 'commentary',
          id: 'e5-holy-blameless',
          html:
            'Paul returns to the image: "holy and without blemish." Holy means set apart for God. Without blemish means whole, healed, restored. This is what Christ has made the church. And this is the measure for any who claim to love: Do your choices move toward making the beloved more whole, more holy, more themselves?',
        },
        {
          kind: 'christ',
          id: 'e5-christ-bride',
          title: 'Christ Connection — The Heavenly Bridegroom',
          html:
            'Revelation presents the consummation of history as a wedding: "Let us be glad and rejoice, and give honour to him: for the marriage of the Lamb is come, and his wife hath made herself ready" (Rev. 19:7). The entire arc of Scripture is the love story between God and His people. Every human marriage is meant to echo that deepest reality: Christ gave Himself for the church. He is preparing her to be His bride. And the intimacy He offers — to be known, to be loved fully, to be made whole — has no equal.',
        },
        {
          kind: 'carry',
          html:
            'If you are married, this passage is not a rule book for domination or submission to domination. It is an invitation to something far stranger: to enact the love of Christ for the church in your daily life. If you love your spouse the way Christ loves the church, you will lay down your life. You will cleanse and sanctify — you will believe in the best version of them and help bring it forth. You will aim at their holiness, not their obedience. You will present them to themselves as a glorious person, worthy of love. If you are not married, this passage is not about you and a spouse. It is about you and God. Are you willing to be loved like this? To let yourself be made whole?',
        },
        {
          kind: 'reflection',
          id: 'e5-marriage-reflect',
          prompt:
            'If you are married: What would it look like to love your spouse as Christ loved the church — with the goal of their holiness and wholeness, not your control? If you are not married: Are you willing to receive the love of Christ for you — to be cleansed, sanctified, and presented as glorious?',
        },
      ],
    },

    /* ─── Ephesians 5:28–30 — Members of His Body ──────────────────────────── */
    {
      ref: 'Ephesians 5:28–30',
      title: 'Members of His Body, Of His Flesh, And Of His Bones',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 28,
              spans: [
                t('So ought men to love their wives as their own bodies. He that loveth his wife loveth himself.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('For no man ever yet hated his own flesh; but nourisheth and cherisheth it, even as the Lord the church:'),
              ],
            },
            {
              number: 30,
              spans: [
                t('For we are '),
                hp('members of his body, of his flesh, and of his bones', 'e5-body-flesh'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'e5-body-flesh',
          html:
            'This language echoes Genesis 2:23[res:sefaria-genesis-2-marriage], where Adam first sees Eve and says, "This is now bone of my bones, and flesh of my flesh." Paul uses that same language to describe the relationship between Christ and the church. You are not foreign to Christ. You are part of Him. Not symbolically, but really.',
        },
        {
          kind: 'commentary',
          html:
            'A person nourishes and cherishes their own body. They feed it, rest it, heal its wounds. Paul is saying: Treat your spouse the same way. Not as a servant, not as a project, not as a possession — as your own body. With the care you give to keeping yourself alive and well.',
        },
        {
          kind: 'christ',
          id: 'e5-christ-body',
          title: 'Christ Connection — The Body of Christ',
          html:
            'Paul elsewhere teaches that the church itself is the body of Christ. "Now ye are the body of Christ, and members in particular" (1 Cor. 12:27). When he tells husbands to love their wives as their own bodies, and then says "we are members of his body," he is using the same image. Just as you are Christ&apos;s body, your wife is part of that body. To wound her is to wound yourself. To care for her is to care for Christ.',
        },
        {
          kind: 'carry',
          html:
            'The deepest unity is not romantic feeling. It is this: to be so woven into another person&apos;s life that their pain is your pain, their flourishing is your joy. You nourish and cherish your own body without thinking about it. Paul is asking: What if you loved your spouse that naturally, that unselfconsciously, that completely?',
        },
        {
          kind: 'reflection',
          id: 'e5-body-reflect',
          prompt:
            'How well do you nourish and cherish your own body? Are you willing to offer the same care to your most intimate relationships?',
        },
      ],
    },

    /* ─── Ephesians 5:31–33 — A Great Mystery ────────────────────────────── */
    {
      ref: 'Ephesians 5:31–33',
      title: 'This Is a Great Mystery: I Speak Concerning Christ and the Church',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 31,
              spans: [
                t('For this cause shall a man leave his father and mother, and shall be joined unto his wife, and they two shall be one flesh.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('This is a great '),
                hy('mystery', 'e5-mystery'),
                t(': but I speak concerning Christ and the '),
                hy('church', 'e5-church-mystery'),
                t('.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('Nevertheless let every one of you in particular so love his wife even as himself; and the wife see that she reverence her husband.'),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: 'greek-mysterion',
          title: 'Mysterion — "Mystery"',
          script: 'μυστήριον',
          translit: '<strong>mysterion</strong> · a secret revealed; a hidden truth now made known',
          description:
            'In Greek, a mystery is not something unknowable, but something that was once hidden and is now revealed. Paul is saying: I have hidden truth to share with you about marriage. It is not just about two people. It is about Christ and His church.',
        },
        {
          kind: 'commentary',
          id: 'e5-mystery',
          html:
            'The mystery is that marriage itself is a parable. Two become one flesh[res:intertextual-ephesians-5]. That union was hidden in the rest of Scripture, hinted at in the covenant language, foreshadowed in the imagery of God as husband and Israel as bride. But Paul is making it explicit: Your marriage, if you are married, is meant to be a sign of Christ&apos;s covenant with the church.',
        },
        {
          kind: 'commentary',
          id: 'e5-church-mystery',
          html:
            'Paul is not reducing marriage to symbolism. Your actual marriage matters. But it also means something beyond itself[res:bibleodyssey-marriage-ancient]. The way you love your spouse, the way you give yourself to them, the way you build a life together — all of it is a language that speaks to the world about Christ&apos;s love for the church.',
        },
        {
          kind: 'commentary',
          html:
            'The final verse returns to the practical: "Let every one of you in particular so love his wife even as himself; and the wife see that she reverence her husband." Not "obey" — "reverence." Reverence means to hold someone in deep respect, to honor them, to recognize their goodness. This is mutual. Both lovers are called to lift the other up.',
        },
        {
          kind: 'christ',
          id: 'e5-christ-mystery',
          title: 'Christ Connection — The Love That Is Deeper Than Marriage',
          html:
            'When you strip away all the doctrines and debates, the core of the mystery is this: Christ loves the church with a love that is more intimate than any human marriage. He bought her with His own blood. He will present her to Himself as glorious. He will never leave her. He is not waiting for her to earn His love. He gives it freely, completely, forever. And if you are a believer, you are the church. You are loved like that.',
        },
        {
          kind: 'carry',
          html:
            'If you are married, your marriage is meant to be a living sermon about Christ&apos;s love. Not in the sense that you have to be perfect, but in the sense that you are always pointing to something deeper. The way you forgive, the way you show up, the way you believe in your spouse — all of it speaks about Christ. If you are not married, you are still part of the church. You are still the bride of Christ, loved with a love that makes human marriage look like a pale copy. Whatever your state, you are invited into union with Him. Deep, real, transformative, eternal union.',
        },
        {
          kind: 'reflection',
          id: 'e5-mystery-reflect',
          prompt:
            'What is the deepest kind of love you can imagine? Can you imagine being loved like that by Christ? What would it change about your life if you actually believed it?',
        },
      ],
    },
  ],
};
