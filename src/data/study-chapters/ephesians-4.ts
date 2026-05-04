import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Ephesians 4 — One Body, One Spirit; Walk Worthy; Gifts of the Spirit
 *
 * "There is one body, and one Spirit, even as ye are called in one hope of
 * your calling." Ephesians 4 shifts from revelation to application. The church
 * is one body. This unity is not aspirational; it is the reality into which
 * Christ has already brought believers. The practical question becomes: How
 * should those who are one body treat each other?
 */
export const EPHESIANS_4: RichChapterContent = {
  bookSlug: 'ephesians',
  bookName: 'Ephesians',
  chapter: 4,

  estimatedMinutes: { beginner: 6, intermediate: 15, deep: 20 },
  opener: {
    matchTitle: /The Calling of Saint/i,
    caption: 'Ephesians 4',
  },
  intros: [
    'After three chapters of doctrine—of how believers are chosen, made alive, reconciled to God and each other—Paul now turns to how believers should live. He begins with an appeal: "I therefore, the prisoner of the Lord, beseech you that ye walk worthy of the vocation wherewith ye are called." The gospel is not merely believed; it is lived.',
    'Ephesians 4 unfolds Paul&apos;s vision of community. One body. One Spirit. One Lord. One faith. One baptism. One God. Then comes the counterintuitive claim: this unity is enacted through diversity. Christ has given different gifts to different members so that the whole body is built up, each part contributing its strength.',
  ],

  bottomShare: {
    label: 'Share Ephesians 4',
    quote:
      'There is one body, one Spirit, one Lord, one faith, one baptism. The church is unified, yet each member receives gifts to build up the whole. Walk worthy through love and unity.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ephesians 4 · Study Guide',
  },


  sections: [
    /* ─── Ephesians 4:1–3 — Walk Worthy of the Vocation ────────────────── */
    {
      ref: 'Ephesians 4:1–3',
      title: 'Walk Worthy of the Vocation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(1,
              t('I therefore, the prisoner of the Lord, beseech you that ye '),
              hg('walk worthy of the vocation wherewith ye are called', 'e4-walk-worthy'),
              t(','),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'e4-walk-worthy',
          html:
            'Paul appeals from his position as "the prisoner of the Lord"—imprisoned for preaching the gospel. His appeal is not a soft suggestion. It is an urgent beseeching. And the bar is high: "walk worthy of the vocation wherewith ye are called." The vocation is not a job you apply for. It is the calling God has placed on your life as a believer. How does one live in a way "worthy" of such a calling?',
        },
        {
          kind: 'greek',
          id: 'e4-axios',
          title: 'Axiōs — "Worthy"',
          script: 'ἀξίως',
          translit: '<strong>Axiōs</strong> · worthily; in a manner commensurate with',
          description:
            'Axiōs means to act in proportion to, to correspond with, to match the weight and significance of something. To walk axiōs means your daily life corresponds to the weight and truth of your calling. Not striving for perfection, but living as though the gospel is true.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(2, 'With all lowliness and meekness, with longsuffering, forbearing one another in love;'),
          ],
        },
        {
          kind: 'commentary',
          html:
            'Walking worthy means walking with "lowliness and meekness"—not self-deprecation, but honest assessment of your own standing before God. Meekness is strength under control. Add "longsuffering"—the patience to bear with others across time—and "forbearing one another in love," and the picture emerges: a believer who knows their own dependence on grace and extends that same grace to others.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(3,
              t('Endeavouring to keep the '),
              hg('unity of the Spirit', 'e4-unity-spirit'),
              t(' in the bond of peace.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'e4-unity-spirit',
          html:
            '"Endeavouring to keep the unity of the Spirit in the bond of peace." This is the hinge. Paul is not asking believers to create unity. Unity is already created—by the Spirit, through the cross. The question is whether believers will keep it, guard it, maintain it. And how? "In the bond of peace." Peace is not the absence of tension. It is the binding force that holds a diverse body together.',
        },
        {
          kind: 'carry',
          html:
            'How are you living? Are your daily choices—your humility, your patience, your willingness to forbear—reflecting the weight and calling of the gospel? Are you guarding the unity of the Spirit in your church, in your relationships, or are you fragmenting it?',
        },
        {
          kind: 'reflection',
          id: 'e4-worthy-reflect',
          prompt: 'What does it mean to you to "walk worthy of the vocation wherewith ye are called"? Where do you fall short?',
        },
      ],
    },

    /* ─── Ephesians 4:4–6 — The Sevenfold Unity ───────────────────────── */
    {
      ref: 'Ephesians 4:4–6',
      title: 'One Body, One Spirit, One Lord, One Faith, One Baptism, One God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(4,
              t('There is '),
              hg('one body, and one Spirit, even as ye are called in one hope of your calling', 'e4-one-body'),
              t(';'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'e4-one-body',
          html:
            'Paul opens with the foundational metaphor: "one body, and one Spirit." The church is not a collection of disconnected individuals who happen to meet in a building. It is one organism—the body of Christ—indwelt by one Spirit. You are not an isolated Christian. You are a member of a body. What affects one member affects the whole.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(5, 'One Lord, one faith, one baptism,'),
          ],
        },
        {
          kind: 'commentary',
          html:
            'Three more: One Lord (Christ, the head), one faith (the shared belief system), one baptism (the visible expression of covenant commitment). These are not options or preferences. They are the defining marks of the body.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(6, 'One God and Father of all, who is above all, and through all you, and in you all.'),
          ],
        },
        {
          kind: 'commentary',
          html:
            'And crowning it all: "One God and Father of all, who is above all, and through all you, and in you all." God is transcendent—above all. God is immanent—through all creation and through all believers. God is indwelling—in you all. The sevenfold unity rests on the triune reality: one Spirit, one Lord (Christ), one God and Father.',
        },
        {
          kind: 'greek',
          id: 'e4-henotēs',
          title: 'Henotēs — "Unity"',
          script: 'ἑνότης',
          translit: '<strong>Henotēs</strong> · unity; oneness; wholeness',
          description:
            'Henotēs is the quality of being one. Not uniformity or conformity—not "all the same"—but organic unity, the way different cells compose one body. Henotēs is not achieved through effort to get along. It is received as the reality that Christ has created through His death and resurrection.',
        },
        {
          kind: 'carry',
          html:
            'You belong to a body—not a club you chose, but an organism you were born into through baptism. That body has one Spirit, one Lord, one faith. The question is: Are you acting as though you belong? Or are you living as though you stand alone?',
        },
      ],
    },

    /* ─── Ephesians 4:7–10 — Grace According to the Gift of Christ ────── */
    {
      ref: 'Ephesians 4:7–10',
      title: 'Grace According to the Measure of the Gift of Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(7,
              t('But unto every one of us is given grace according to the '),
              hg('measure of the gift of Christ', 'e4-measure'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'e4-measure',
          html:
            'Paul now pivots from unity to diversity. The unity is not uniform. Each believer is given grace—not equally in quantity, but "according to the measure of the gift of Christ." Christ apportions gifts. Some receive more, some less. But each receives what Christ deems fitting for their calling.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(8,
              t('Wherefore he saith, '),
              hp('When he ascended up on high, he led captivity captive, and gave gifts unto men', 'e4-ascension'),
              t(';'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'e4-ascension',
          html:
            'Paul quotes Psalm 68:18[res:sefaria-psalm-68], reinterpreted in the light of Christ&apos;s resurrection and ascension. "When he ascended up on high"—Christ did not stay on earth. He ascended into heaven, taking His seat at the right hand of the Father. But as He ascended, He "led captivity captive." He overthrew the powers that held humanity captive—sin, death, the law, the demonic forces. And the result? "Gave gifts unto men."[res:intertextual-ephesians-4] The ascended Christ is a giving Christ. His ascension is not departure; it is investment in the church.',
        },
        {
          kind: 'christ',
          id: 'e4-christ-ascension',
          title: 'Christ Connection — The Ascension as the Pouring Out of Gifts',
          html:
            'Christ&apos;s ascension is often pictured as Him leaving. But in Ephesians 4, the ascension is the moment Christ begins distributing gifts to the church. "He ascended, therefore He gave." The ascended Christ is the giver. The Holy Spirit is sent as His gift (John 14:16; Acts 2:33). Spiritual gifts flow from His ascended person. When you receive a spiritual gift, you are receiving something the ascended Christ has given you.',
        },
        {
          kind: 'carry',
          html:
            'Christ ascended. Christ gives gifts. You have received grace. Not just salvation, but concrete gifts suited to your calling. The question is: What has Christ given you, and are you stewarding it?',
        },
      ],
    },

    /* ─── Ephesians 4:11–12 — The Gifts to the Church ───────────────────── */
    {
      ref: 'Ephesians 4:11–12',
      title: 'Apostles, Prophets, Evangelists, Pastors, Teachers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(11,
              t('And he gave some, '),
              hg('apostles', 'e4-apostoloi'),
              t('; and some, '),
              hg('prophets', 'e4-prophetai'),
              t('; and some, '),
              hg('evangelists', 'e4-euangelistai'),
              t('; and some, '),
              hp('pastors and teachers', 'e4-poimenas'),
              t(';'),
            ),
          ],
        },
        {
          kind: 'commentary',
          html:
            'Paul lists five leadership gifts[res:bibleodyssey-gifts]. Not five ranks, but five distinct roles Christ has given to the body. Some are sent as apostles—foundational figures with authority and a message for wider circles. Some are prophets—those who hear from God and speak His word into particular moments. Some are evangelists—proclaimers of the gospel, especially to those outside the fold. Some are pastors—shepherds who tend to the flock, knowing members by name. Some are teachers—those who explain Scripture and build understanding.',
        },
        {
          kind: 'greek',
          id: 'e4-apostoloi',
          title: 'Apostoloi — "Apostles"',
          script: 'ἀπόστολοι',
          translit: '<strong>Apostoloi</strong> · apostles; sent ones; those with authority',
          description:
            'Apostoloi derives from apostellō, "to send." An apostle is one sent with a commission. The Twelve had apostolic authority. Paul counted himself among the apostles. The apostolic office is foundational—building the structure of the church.',
        },
        {
          kind: 'greek',
          id: 'e4-prophetai',
          title: 'Prophetai — "Prophets"',
          script: 'προφῆται',
          translit: '<strong>Prophetai</strong> · prophets; those who speak forth God&apos;s word',
          description:
            'A prophet speaks pro (forth) the word of God. Not fortune-tellers, but those gifted to discern God&apos;s voice and speak it into the congregation in real time—comfort, correction, challenge, direction.',
        },
        {
          kind: 'greek',
          id: 'e4-euangelistai',
          title: 'Euangelistai — "Evangelists"',
          script: 'εὐαγγελισταί',
          translit: '<strong>Euangelistai</strong> · evangelists; gospel proclaimers; heralds of good news',
          description:
            'Euangelistai comes from euangelion, "gospel." An evangelist is a herald of good news, particularly to those who have not yet heard. The evangelists&apos; gift is to break through barriers and plant the gospel where it has not yet taken root.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(12,
              t('For the perfecting of the saints, for the work of the ministry, for the edifying of the body of Christ:'),
            ),
          ],
        },
        {
          kind: 'commentary',
          html:
            'Why are these gifts given? Not for prestige or titles. "For the perfecting of the saints, for the work of the ministry, for the edifying of the body of Christ." The gifts build up. They are not ends in themselves. They are means to the sanctification and maturation of every believer in the body.',
        },
        {
          kind: 'greek',
          id: 'e4-poimenas',
          title: 'Poimenas & Didaskalous — "Pastors" and "Teachers"',
          script: 'ποιμένας · διδασκάλους',
          translit: '<strong>Poimenas</strong> · pastors; shepherds · <strong>Didaskalous</strong> · teachers; instructors',
          description:
            'A pastor (poimenas) is a shepherd—one who knows the flock, tends to their wounds, feeds them, protects them. A teacher (didaskalos) is an instructor—one who explains, clarifies, helps understanding grow. Together they represent relational and intellectual care.',
        },
        {
          kind: 'carry',
          html:
            'Do you have a pastor or teacher? A prophet or evangelist? Receive their gifts. They are given for you. And if you sense you might have one of these gifts yourself, do not suppress it. The body needs you.',
        },
        {
          kind: 'reflection',
          id: 'e4-gifts-reflect',
          prompt: 'Which of these five gifts—apostle, prophet, evangelist, pastor, teacher—do you most recognize in leaders you know? And do you see any of these gifts stirring in yourself?',
        },
      ],
    },

    /* ─── Ephesians 4:13–16 — Maturity and Growth ────────────────────────── */
    {
      ref: 'Ephesians 4:13–16',
      title: 'Till We All Come to Maturity in Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(13,
              t('Till we all come in the unity of the faith, and of the knowledge of the Son of God, unto a '),
              hy('perfect man, unto the measure of the stature of the fulness of Christ', 'e4-perfect'),
              t(':'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'e4-perfect',
          html:
            'The goal of ministry is maturity—"a perfect man, unto the measure of the stature of the fulness of Christ." Perfection in Scripture means completeness, maturity, fulfilling one&apos;s intended purpose. The church is not meant to remain infantile. Through the gifts of apostles, prophets, evangelists, pastors, and teachers, the whole body is drawn toward a condition where every believer has grown toward the stature of Christ&apos;s fullness.',
        },
        {
          kind: 'greek',
          id: 'e4-teleiotes',
          title: 'Teleiotes — "Maturity" or "Completeness"',
          script: 'τελειότης',
          translit: '<strong>Teleiotes</strong> · perfection; maturity; completeness; fullness',
          description:
            'Teleiotes does not mean sinlessness. It means coming to full stature, realizing one&apos;s purpose, functioning as God designed. When the church reaches teleiotes, each member is operating in their calling, each gift is deployed, and the body is functioning as the living organism Christ designed.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(14, 'That we henceforth be no more children, tossed to and fro, and carried about with every wind of doctrine, by the sleight of men, and cunning craftiness, whereby they lie in wait to deceive;'),
          ],
        },
        {
          kind: 'commentary',
          html:
            'Immaturity is instability. Immature believers are "tossed to and fro…by every wind of doctrine"—swayed by false teachers, vulnerable to deception. Paul is not gently suggesting growth. He is warning against the danger of remaining undeveloped. Spiritual maturity is not optional if you want to withstand deception.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(15,
              t('But speaking the truth in love, may '),
              hg('grow up into him in all things, which is the head, even Christ', 'e4-head'),
              t(':'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'e4-head',
          html:
            '"Speaking the truth in love, may grow up into him in all things, which is the head, even Christ." This is how maturity happens: through truth spoken in love, and through growing toward Christ, who is the head. Growth is not gradual assimilation into the crowd. It is directional movement toward the one who is already fully mature.',
        },
        {
          kind: 'christ',
          id: 'e4-christ-head',
          title: 'Christ Connection — Christ as the Head',
          html:
            'In Colossians 2:19, Paul writes: "Holding the head, from which all the body by joints and bands having nourishment ministered, and knit together, increaseth with the increase of God." Christ is the head. The body grows from the head. When you grow up into Christ—when you move toward Him, learn from Him, take on His character—the whole body is nourished and grows. Your individual maturity contributes to the body&apos;s maturity.',
        },
        {
          kind: 'carry',
          html:
            'Are you growing? Are you being tossed about by every wind of doctrine, or are you anchored? How are you speaking truth? And are you growing toward Christ, or away from Him?',
        },
      ],
    },

    /* ─── Ephesians 4:17–24 — Walk Not as the Gentiles; Put Off, Put On ──── */
    {
      ref: 'Ephesians 4:17–24',
      title: 'Walk Not as the Gentiles; Put Off the Old Self, Put On the New',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(17,
              t('This I say therefore, and testify in the Lord, that ye henceforth walk not as other Gentiles walk, in the '),
              hg('vanity of their mind', 'e4-vanity'),
              t(';'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'e4-vanity',
          html:
            '"Walk not as other Gentiles walk, in the vanity of their mind."[res:intertextual-ephesians-4-walk] Paul testifies solemnly. Believers are not to pattern their thinking and behavior after those who do not believe. The Gentile mind—the mind not shaped by the gospel—is characterized by "vanity," emptiness, a futility that does not acknowledge God. The pathway diverges here.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(18,
              t('Having the understanding darkened, being alienated from the life of God through the ignorance that is in them, because of the blindness of their heart:'),
            ),
          ],
        },
        {
          kind: 'commentary',
          html:
            'Those who walk apart from God have minds darkened, are alienated from His life, and remain in ignorance "because of the blindness of their heart." Blindness of heart—not lack of information, but unwillingness to see. It is a condition of the will as much as the mind.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(22,
              t('That ye put off concerning the former conversation the '),
              hg('old man, which is corrupt according to the deceitful lusts', 'e4-old-man'),
              t(';'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'e4-old-man',
          html:
            '"Put off…the old man, which is corrupt according to the deceitful lusts.[res:sefaria-romans-6-identity]" The old self is not merely bad. It is corrupt—rotting from within—driven by desires that deceive. Paul is using the language of clothing: put off (apo-tithēmi) the old garment that no longer fits who you are.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(23,
              t('And be renewed in the '),
              hg('spirit of your mind', 'e4-renewed'),
              t(';'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'e4-renewed',
          html:
            '"Be renewed in the spirit of your mind." This is not a one-time event. Anakainoō is a present passive—a continuous being renewed. The seat of the renewal is "the spirit of your mind"—not emotion, but the inner core where thought and belief live. Transformation begins in the mind.',
        },
        {
          kind: 'greek',
          id: 'e4-anakainoō',
          title: 'Anakainoō — "Be Renewed"',
          script: 'ἀνακαινόω',
          translit: '<strong>Anakainoō</strong> · be renewed; be made new again; be refreshed',
          description:
            'Anakainoō (ana- "again" + kainoō "to make new") means to make new again—not to become something you have never been, but to recover and restore what was lost. In Romans 12:2, Paul uses this same word: "be ye transformed by the renewing of your mind." Renewal is the work of the Holy Spirit, but it requires your participation in thought and habit.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(24,
              t('And that ye put on the '),
              hp('new man, which after God is created in righteousness and true holiness', 'e4-new-man'),
              t(';'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'e4-new-man',
          html:
            '"Put on the new man, which after God is created in righteousness and true holiness." The new self is not created by your effort. It is created—by God—in righteousness and true holiness. Your role is to put it on (enduo), to wear it, to live from it. You become righteous and holy not through striving, but through aligning yourself with what God has made you in Christ.',
        },
        {
          kind: 'carry',
          html:
            'You are not trying to become something you are not. You are putting off what is decaying and putting on what Christ has already made you to be. Whose pattern are you following—the world&apos;s mind or God&apos;s?',
        },
      ],
    },

    /* ─── Ephesians 4:25–29 — Truth, Anger, and Speech ────────────────────── */
    {
      ref: 'Ephesians 4:25–29',
      title: 'Speak Truth, Be Angry Without Sinning, Let No Corrupt Speech',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(25,
              t('Wherefore putting away lying, '),
              hg('speak every man truth with his neighbour', 'e4-truth'),
              t(': for we are members one of another.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'e4-truth',
          html:
            '"Speak every man truth with his neighbour: for we are members one of another." Why tell the truth? Because you and your neighbor are members of one body. A lie fractures the body. Truth is tissue that holds the body together. Falsehood is a cut that fragments it.',
        },
        {
          kind: 'greek',
          id: 'e4-aletheuō',
          title: 'Aletheuō — "Speak Truth"',
          script: 'ἀληθεύω',
          translit: '<strong>Aletheuō</strong> · speak truth; act truthfully',
          description:
            'Aletheuō is not just "to tell the truth"; it means to act truthfully, to be a truth-teller by character and habit. In a culture of spin and appearance, a believer is called to be someone whose word can be trusted because their word matches reality.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(26,
              t('Be ye angry, and '),
              hg('sin not', 'e4-anger-sin'),
              t(': let not the sun go down upon your wrath:'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'e4-anger-sin',
          html:
            '"Be ye angry, and sin not." Paul does not condemn anger itself. God is angry at injustice. Jesus overturned tables in the temple. Anger at sin is righteous. But Paul warns: do not let anger become sin. "Let not the sun go down upon your wrath." Do not nurse it. Do not rehearse it through the night. Deal with it the same day. Anger that festers becomes bitterness. It becomes a stronghold for Satan.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(27, 'Neither give place to the devil.'),
          ],
        },
        {
          kind: 'commentary',
          html:
            '"Neither give place to the devil." Unresolved anger is a foothold for the enemy. Not because anger itself is demonic, but because unchecked anger leads to bitterness, and bitterness opens the door to all manner of sin.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(28, 'Let him that stole steal no more: but rather let him labour, working with his hands the thing which is good, that he may have to give to him that needeth.'),
          ],
        },
        {
          kind: 'commentary',
          html:
            'Paul moves from truth-telling and anger to concrete action. If someone has stolen, let them steal no more. Instead, "let him labour, working with his hands the thing which is good." Work is redeemed. The thief becomes a worker. And not just a self-sustainer, but a giver—"that he may have to give to him that needeth." The body cares for its own.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(29,
              t('Let no corrupt communication proceed out of your mouth, but that which is good to the use of '),
              hg('edifying', 'e4-edifying'),
              t(', that it may minister grace unto the hearers.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'e4-edifying',
          html:
            '"Let no corrupt communication proceed out of your mouth, but that which is good to the use of edifying, that it may minister grace unto the hearers." Speech is a tool. It builds up or tears down. Grace-filled speech—words that edify, that strengthen, that minister blessing—is your calling. Not flattery. Not false niceness. But truth spoken in love, words that build the hearer up.',
        },
        {
          kind: 'carry',
          html:
            'What comes out of your mouth? Are you a truth-teller? Do you let anger settle as sin? Do your words build up the body, or tear it down?',
        },
        {
          kind: 'reflection',
          id: 'e4-speech-reflect',
          prompt: 'What is one way you could speak more truth this week? And what is one area where your speech tears down rather than builds up?',
        },
      ],
    },

    /* ─── Ephesians 4:30–32 — Grieve Not the Holy Spirit; Forgive as God ──── */
    {
      ref: 'Ephesians 4:30–32',
      title: 'Grieve Not the Holy Spirit; Forgive as God Has Forgiven You',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(30,
              t('And '),
              hg('grieve not the holy Spirit of God', 'e4-grieve-spirit'),
              t(', whereby ye are sealed unto the day of redemption.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'e4-grieve-spirit',
          html:
            '"Grieve not the holy Spirit of God, whereby ye are sealed unto the day of redemption." The Holy Spirit is not an impersonal force. The Spirit can be grieved—wounded, saddened, repelled. What grieves the Spirit? Words and actions that fracture the body. Lies. Unresolved anger. Slander. Work against unity. Yet the Spirit is also the seal—the mark of ownership by which believers are sealed unto the day of redemption. The same Spirit who is grieved by your unfaithfulness is the Spirit who has guaranteed your redemption.',
        },
        {
          kind: 'greek',
          id: 'e4-lupeō',
          title: 'Lupeō — "Grieve"',
          script: 'λυπέω',
          translit: '<strong>Lupeō</strong> · grieve; cause sorrow; distress',
          description:
            'Lupeō means to cause grief, sorrow, or pain to someone. It emphasizes the emotional impact. You can grieve the Spirit the way a parent grieves at a child&apos;s betrayal. This is not juridical punishment; it is relational sadness.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(31, 'Let all bitterness, and wrath, and anger, and clamour, and evil speaking, be put away from you, with all malice:'),
          ],
        },
        {
          kind: 'commentary',
          html:
            'A comprehensive list: bitterness, wrath, anger, clamor, evil speaking, malice. Not one or two, but all. These are the grievances that fester. Bitterness is anger that has hardened. Wrath is explosive fury. Clamor is loud, harsh speech. Evil speaking is slander. Malice is the wish to harm. Put them all away.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(32,
              t('But be ye kind one to another, tenderhearted, '),
              hp('forgiving one another, even as God for Christ&apos;s sake hath forgiven you', 'e4-forgive'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'e4-forgive',
          html:
            '"But be ye kind one to another, tenderhearted, forgiving one another, even as God for Christ&apos;s sake hath forgiven you.[res:bibleodyssey-forgiveness-grace]" The antidote to bitterness is kindness, tenderheartedness, and forgiveness. But not cheap forgiveness. Not forgiveness that brushes over harm. Rather, forgiveness rooted in what God has done "for Christ&apos;s sake"—for the sake of the cross, God has forgiven you. That forgiveness is the pattern and the empowerment for forgiving others.',
        },
        {
          kind: 'christ',
          id: 'e4-christ-forgiveness',
          title: 'Christ Connection — The Cross as the Pattern of Forgiveness',
          html:
            'What does it mean that God forgave you "for Christ&apos;s sake"? It means that in Christ—in His death on the cross—God absorbed the wrath you deserved. He did not excuse your sin. He bore it. When He calls you to forgive "as God for Christ&apos;s sake hath forgiven you," He is not asking you to absorb another person&apos;s sin in the same way Christ did. But He is asking you to release the debt, to not extract payment, to lay down your right to harm them in return. The cross is the measure and the means of forgiveness.',
        },
        {
          kind: 'carry',
          html:
            'You have been forgiven—deeply, at great cost, through the cross. Now you are asked to extend that same forgiveness. Where are you holding onto bitterness? Where do you need to forgive "as God for Christ&apos;s sake hath forgiven you"?',
        },
        {
          kind: 'reflection',
          id: 'e4-forgive-reflect',
          prompt: 'God has forgiven you through Christ. How does this shape your capacity to forgive others? Is there someone you need to forgive?',
        },
      ],
    },
  ],

  resources: [
    {
      id: 'intertextual-ephesians-4-walk',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Two Ways: Believer vs. Unbeliever',
      url: 'https://www.intertextual.bible/',
      description: 'Explores the dichotomy in Ephesians 4:17 between walking as a believer in Christ and walking in the empty patterns of those without Christ&apos;s transformation.',
    },
    {
      id: 'bibleodyssey-forgiveness-grace',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Forgiveness in Christ',
      url: 'https://www.bibleodyssey.org/dictionary/forgiveness/',
      description: 'Scholarly exploration of how Christian forgiveness is grounded not in human capacity but in God&apos;s redemptive act through Christ.',
    },
    {
      id: 'sefaria-psalm-68',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 68 — The Ascension Psalm',
      url: 'https://www.sefaria.org/Psalms.68',
      description: 'Explores the psalm Paul quotes about Christ&apos;s ascension and the gifts He distributed to the church.',
    },
    {
      id: 'intertextual-ephesians-4',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Unity and Diversity of Gifts',
      url: 'https://www.intertextual.org/reader/Ephesians-4',
      description: 'Traces how one Spirit distributes diverse gifts to build up the one body of Christ.',
    },
  ],
};
