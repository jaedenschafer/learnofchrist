import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

export const FIRST_THESSALONIANS_2: RichChapterContent = {
  bookSlug: '1-thessalonians',
  bookName: '1 Thessalonians',
  chapter: 2,

  estimatedMinutes: { beginner: 9, intermediate: 14, deep: 20 },
  topicTags: ['hope', 'second-coming', 'witness', 'love'],
  opener: {
    topical: true,
    caption: '1 Thessalonians 2',
  },
  intros: [
    'Paul reflects on his ministry among the Thessalonians with deep tenderness. He came not with flashy words or manipulation, but with the gospel itself—the powerful Word of God that remakes human hearts. Though his preaching was accompanied by opposition and hardship, his love for the Thessalonians was unwavering.',
    'What emerges is a portrait of apostolic ministry shaped by the self-giving love of Christ. Paul did not come to please people or draw attention to himself. He came as a servant, gentle as a nursing mother, generous as a father, willing to pour out his own soul for their sake. Every mark of his apostleship was love.',
  ],

  bottomShare: {
    label: 'Share 1 Thessalonians 2',
    quote:
      'We were gentle among you, even as a nurse cherisheth her children. We were willing to have imparted unto you not the gospel of God only, but also our own souls, because ye were dear unto us.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Thessalonians 2 · Study Guide',
  },

  sections: [
    /* ─── 1 Thessalonians 2:1–2 — Bold to Speak ──────────────────────── */
    {
      ref: '1 Thessalonians 2:1–2',
      title: 'Bold to Speak',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 1,
              spans: [
                t('For yourselves know our '),
                hg('entrance in unto you', '1t2-entrance'),
                t(', that it was not in vain:'),
              ],
            },
            {
              number: 2,
              spans: [
                t('But even after that we had suffered before, and were shamefully entreated, as ye know, at Philippi, we were '),
                hp('bold in our God to speak unto you the gospel of God', '1t2-bold'),
                t(' with much '),
                hy('contention', '1t2-agones'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1t2-entrance',
          html:
            'Paul&apos;s &ldquo;entrance&rdquo; was not accidental or empty. It bore fruit. The Thessalonians themselves are proof—their faith, their transformation, their love. Paul is not defending his authority abstractly; he is simply pointing to what they have seen and become.',
        },
        {
          kind: 'greek',
          id: '1t2-agones',
          title: 'Agōnes — &ldquo;contention&rdquo;',
          script: 'ἀγώνες',
          translit: '<strong>agōnes</strong> · contests, struggles, agonies',
          description:
            'The word for &ldquo;contention&rdquo; is the root of our &ldquo;agony.&rdquo; Paul did not preach the gospel in a safe, comfortable setting. He preached it under pressure, facing opposition, with difficulty. And yet he was bold.',
        },
        {
          kind: 'commentary',
          id: '1t2-bold',
          html:
            'Paul had been beaten at Philippi (Acts 16). He had been imprisoned and flogged. Most people would retreat. Instead, Paul says they were &ldquo;bold in our God&rdquo; to speak the gospel. Boldness is not the absence of fear or opposition. Boldness is speaking truth anyway, anchored in confidence in God, not in the absence of resistance.',
        },
        {
          kind: 'greek',
          id: '1t2-parrhesia',
          title: 'Parrēsiazō — &ldquo;bold&rdquo; (implied)',
          script: 'παρρησιάζω',
          translit: '<strong>parrēsiazō</strong> · to speak freely, boldly, openly',
          description:
            'This boldness (related root) is not recklessness. It is the confidence to speak openly and freely without hiding, because your life and message are rooted in God, not in what others think.',
        },
        {
          kind: 'carry',
          html:
            'You may be in a place right now where your faith, your integrity, or your convictions cost something. What would it look like to be &ldquo;bold in our God&rdquo; about it? Not aggressive or unkind—but genuinely unafraid because God is the one you answer to, not the crowd around you.',
        },
        {
          kind: 'reflection',
          id: '1t2-bold-reflect',
          prompt: 'Where is God inviting you to speak freely about Him, even when it comes with resistance?',
        },
      ],
    },

    /* ─── 1 Thessalonians 2:3–6 — Not of Deceit ──────────────────────── */
    {
      ref: '1 Thessalonians 2:3–6',
      title: 'Not of Deceit',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 3,
              spans: [
                t('For our exhortation was not of '),
                hg('deceit', '1t2-plane'),
                t(', nor of '),
                hg('uncleanness', '1t2-akathar'),
                t(', nor in '),
                hy('guile', '1t2-dolos'),
                t(':'),
              ],
            },
            {
              number: 4,
              spans: [t('But as we were allowed of God to be put in trust with the gospel, even so we speak; not as pleasing men, but God which trieth our hearts.')],
            },
            {
              number: 5,
              spans: [
                t('For neither at any time used we '),
                hy('flattering words', '1t2-kolakia'),
                t(', as ye know, nor a cloke of covetousness; God is witness:'),
              ],
            },
            {
              number: 6,
              spans: [
                t('Nor of men sought we '),
                hg('glory', '1t2-doxa'),
                t(', neither of you, nor yet of others, when we might have been burdensome, as the apostles of Christ.'),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: '1t2-plane',
          title: 'Planē — &ldquo;deceit&rdquo;',
          script: 'πλάνη',
          translit: '<strong>planē</strong> · error, delusion, wandering from truth',
          description:
            'Paul&apos;s message was not designed to mislead. It was not an illusion. It was rooted in truth—truth that Paul believed and lived.',
        },
        {
          kind: 'commentary',
          id: '1t2-akathar',
          html:
            'Paul rules out &ldquo;uncleanness.&rdquo; Ancient philosophers sometimes used their rhetoric for sexual exploitation or financial gain. Paul is saying his motives were pure. He did not come to extract from the Thessalonians.',
        },
        {
          kind: 'greek',
          id: '1t2-dolos',
          title: 'Dolos — &ldquo;guile&rdquo;',
          script: 'δόλος',
          translit: '<strong>dolos</strong> · deceit, craft, cunning',
          description:
            'No hidden agenda. No tricks. No crafty manipulation. Paul&apos;s method matched his message. The gospel of truth was communicated through truthful means.',
        },
        {
          kind: 'commentary',
          id: '1t2-doxa',
          html:
            'Paul did not seek &ldquo;glory&rdquo; from the Thessalonians. He was not building a personal brand or cult following. He points to the gospel, not to himself. The honor belongs to God alone.',
        },
        {
          kind: 'greek',
          id: '1t2-kolakia',
          title: 'Kolakeia — &ldquo;flattery&rdquo;',
          script: 'κολακεία',
          translit: '<strong>kolakeia</strong> · smooth talk, flattery, false praise',
          description:
            'Paul did not butter people up. He did not smooth-talk his way into their hearts. His words were genuine, sometimes difficult, always truthful.',
        },
        {
          kind: 'christ',
          id: '1t2-christ-servant',
          title: 'Christ Connection — The Pattern of Honesty',
          html:
            'Jesus consistently refused the offer to build His own kingdom or seek His own honor (Luke 4:5–7; John 5:41–44). His whole ministry was about directing people away from Himself and toward the Father. Paul&apos;s apostleship mirrors that refusal. When the Philippian jailer fell at his feet, Paul refused worship (Acts 14:14–15). The servant does not draw attention to himself; he points past himself to the one he serves.',
        },
        {
          kind: 'carry',
          html:
            'In a world of personal branding and self-promotion, Paul&apos;s example is radical. What would it look like in your own life—your work, your relationships, your influence—to communicate truth without manipulating, to serve without building yourself up, to give without keeping score? That is apostolic ministry. That is Christian witness.',
        },
        {
          kind: 'reflection',
          id: '1t2-deceit-reflect',
          prompt: 'Where do you feel tempted to use flattery, craft, or half-truth? What would integrity look like instead?',
        },
        { kind: 'divider' },
      ],
    },

    /* ─── 1 Thessalonians 2:4 — Put in Trust ──────────────────────────── */
    {
      ref: '1 Thessalonians 2:4',
      title: 'Put in Trust with the Gospel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 4,
              spans: [
                t('But as we were '),
                hp('allowed of God to be put in trust', '1t2-trust'),
                t(' with the gospel, even so we speak; not as pleasing men, but God which trieth our hearts.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1t2-trust',
          html:
            'Paul frames his apostleship as a trust[res:intertextual-1thess-2-stewardship]. God has entrusted the gospel to him. This is not something Paul earned or built; it is a sacred stewardship. Every word he speaks is accountable to the one who gave him the gospel to bear.',
        },
        {
          kind: 'commentary',
          id: '1t2-hearts',
          html:
            'God &ldquo;trieth our hearts.&rdquo; This is the only real audience that matters. Paul is not performing for the Thessalonians; he is serving before God. His motives are transparent to the one who sees everything.',
        },
        {
          kind: 'christ',
          id: '1t2-christ-word',
          title: 'Christ Connection — The Living Word',
          html:
            'When Paul speaks of being entrusted with the gospel, he is speaking of the Word of God made flesh in Christ. John tells us that &ldquo;the Word was made flesh, and dwelt among us&rdquo; (John 1:14). Paul, like all apostles, is a kind of echo—a voice carrying the echo of that one true Word. The gospel is not Paul&apos;s intellectual property; it is God&apos;s truth, and all who preach it are stewards, not owners. That Word will bear fruit. &ldquo;So shall my word be that goeth forth out of my mouth: it shall not return unto me empty, but it shall accomplish that which I please, and it shall prosper in the thing whereto I sent it&rdquo; (Isa. 55:11).',
        },
        {
          kind: 'carry',
          html:
            'If you are in a position of spiritual influence—as a parent, teacher, leader, friend—Paul&apos;s words remind you that the gospel is not yours to brand or shape. It is a trust. You are steward of something far larger than your own voice. That changes everything about how you handle it and how you answer for it.',
        },
        {
          kind: 'reflection',
          id: '1t2-trust-reflect',
          prompt: 'What truth has been entrusted to you to speak and live out? How might you be more faithful to that stewardship?',
        },
      ],
    },

    /* ─── 1 Thessalonians 2:7–8 — Gentle as a Nurse ───────────────────── */
    {
      ref: '1 Thessalonians 2:7–8',
      title: 'Gentle as a Nurse',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 7,
              spans: [
                t('But we were '),
                hy('gentle among you', '1t2-nepios'),
                t(', even as a '),
                hg('nurse cherisheth her children', '1t2-trophos'),
                t(':'),
              ],
            },
            {
              number: 8,
              spans: [
                t('So being affectionately desirous of you, we were willing to have imparted unto you, not the gospel of God only, but also our own '),
                hy('souls', '1t2-psych'),
                t(', because ye were dear unto us.'),
              ],
            },
          ],
        },
        {
          kind: 'greek',
          id: '1t2-nepios',
          title: 'Nepios — &ldquo;gentle, innocent&rdquo;',
          script: 'νήπιος',
          translit: '<strong>nepios</strong> · a nursing infant; innocent, guileless',
          description:
            'Some manuscripts have Paul saying they were &ldquo;gentle&rdquo; (letting &ldquo;n&rdquo; be read as a variant), others &ldquo;infants.&rdquo; Either way, the sense is the same: without guile, open, vulnerable, like a child. Paul&apos;s strength did not manifest as hardness.',
        },
        {
          kind: 'greek',
          id: '1t2-trophos',
          title: 'Troph&icirc; — &ldquo;nurse&rdquo;',
          script: 'τροφός',
          translit: '<strong>troph&icirc;</strong> · a nursing mother, a wet nurse',
          description:
            'This is not a distant caregiver. This is someone whose own life is poured into the child. The nurse feeds from her own body. The image Paul uses for his own ministry is total self-gift.',
        },
        {
          kind: 'greek',
          id: '1t2-psych',
          title: 'Psych&icirc; — &ldquo;souls&rdquo;',
          script: 'ψυχή',
          translit: '<strong>psych&icirc;</strong> · life, soul, self',
          description:
            'Paul did not impart just doctrine. He gave his own soul—his life, his struggle, his love. This is personal investment, not corporate messaging.',
        },
        {
          kind: 'commentary',
          id: '1t2-trophos-detail',
          html:
            'An apostle of Christ being likened to a nursing mother[res:sefaria-maternal-care-motherhood] is extraordinary. Power, authority, boldness—all present. But underneath, a tenderness so complete that Paul pours out his own life to sustain them. The gospel is not harsh correction shouted from a distance. It is care whispered close.',
        },
        {
          kind: 'christ',
          id: '1t2-christ-tender',
          title: 'Christ Connection — The Tenderness of Strength',
          html:
            'Jesus demonstrated this same paradox: &ldquo;He shall feed his flock like a shepherd: he shall gather the lambs with his arm, and carry them in his bosom&rdquo; (Isa. 40:11). The one who would overturn tables in the temple is also the one who received children and said the kingdom belongs to them. &ldquo;And he took them up in his arms, and blessed them, laying his hands upon them&rdquo; (Mark 10:16). Jesus never saw tenderness as weakness. His strength was big enough to hold gentleness without contradiction.',
        },
        {
          kind: 'carry',
          html:
            'If you care for others—children, students, colleagues, friends struggling with doubt—Paul&apos;s example invites you to a tenderness that costs something. Not soft, not enableing. But present. Willing to be vulnerable. Willing to pour out care even when it is not easy. That is ministry. That is love.',
        },
        {
          kind: 'reflection',
          id: '1t2-gentle-reflect',
          prompt: 'When have you been ministered to with this kind of tenderness? Who in your life needs that gentleness from you right now?',
        },
      ],
    },

    /* ─── 1 Thessalonians 2:9–12 — Father and Call ────────────────────── */
    {
      ref: '1 Thessalonians 2:9–12',
      title: 'Walking Worthy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 9,
              spans: [
                t('For ye remember, brethren, our labour and travail: for labouring night and day, because we would not be chargeable unto any of you, we preached unto you the gospel of God.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Ye are witnesses, and God also, '),
                hp('how holily and justly and unblameably we behaved ourselves', '1t2-holily'),
                t(' among you that believe:'),
              ],
            },
            {
              number: 11,
              spans: [
                t('As ye know '),
                hg('how we exhorted and comforted and charged every one of you, as a father doth his children', '1t2-pathos'),
                t(','),
              ],
            },
            {
              number: 12,
              spans: [
                t('That ye would '),
                hy('walk worthy of God', '1t2-peripateō'),
                t(', who hath called you unto his kingdom and glory.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1t2-holily',
          html:
            'Paul appeals to evidence[res:intertextual-1thess-2-conduct]. His behavior was visible, observable, open to scrutiny. He did not ask the Thessalonians to believe something about his character that was contradicted by how he lived. Word and conduct aligned. He worked with his own hands to support himself rather than burden the young church.',
        },
        {
          kind: 'commentary',
          id: '1t2-pathos',
          html:
            'The shift from nursing mother to father shows the shape of Paul&apos;s love through different seasons. In infancy, tenderness. As they grow, a father&apos;s exhortation—urging them toward maturity, charging them, holding them accountable in love.',
        },
        {
          kind: 'greek',
          id: '1t2-peripateō',
          title: 'Peripateō — &ldquo;walk&rdquo;',
          script: 'περιπατέω',
          translit: '<strong>peripateō</strong> · to walk, to conduct oneself, to live',
          description:
            'Walking is not a one-time decision. It is the pattern of your days. Paul is inviting them not to a moment of conversion but to a life lived differently—a life that matches the God who called them.',
        },
        {
          kind: 'commentary',
          id: '1t2-worthy',
          html:
            'To walk &ldquo;worthy&rdquo; of God is not to climb a ladder of spiritual achievement. It is to let your life be shaped by the truth that God has called you and claimed you for His kingdom. You belong to Him. That belonging changes how you move through the world.',
        },
        {
          kind: 'christ',
          id: '1t2-christ-walk',
          title: 'Christ Connection — The Pattern of Life',
          html:
            'Paul tells the Ephesians to &ldquo;walk worthy of the vocation wherewith ye are called&rdquo; (Eph. 4:1). And earlier in that letter: &ldquo;Walk in love, as Christ also hath loved us, and hath given himself for us&rdquo; (Eph. 5:2). When Paul speaks of walking worthy, he means conforming your life to the one who loved you and gave His life for you. Every step is an echo of His step. Every choice is a chance to say yes to His call on your life.',
        },
        {
          kind: 'carry',
          html:
            'You have been called to God&apos;s kingdom and glory. That calling is not theoretical. It meets you in Tuesday morning, in the conversation you&apos;re about to have, in the decision in front of you. What would it mean to walk worthy of that call today? Not perfectly. But genuinely, turning your actual feet in the direction of the God who claimed you.',
        },
        {
          kind: 'reflection',
          id: '1t2-walk-reflect',
          prompt: 'In what area of your life is God calling you to walk worthy of Him? What does that look like concretely this week?',
        },
        { kind: 'divider' },
      ],
    },

    /* ─── 1 Thessalonians 2:13 — Word Received as It Is ──────────────── */
    {
      ref: '1 Thessalonians 2:13',
      title: 'The Word Received as It Is',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 13,
              spans: [
                t('For this cause also thank we God without ceasing, because, when ye '),
                hg('received the word of God which ye heard of us', '1t2-word'),
                t(', ye '),
                hp('received it not as the word of men, but as it is in truth, the word of God', '1t2-aletheia'),
                t(', which effectually worketh also in you that believe.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1t2-word',
          html:
            'The Thessalonians heard Paul&apos;s words. But they did not stop at Paul. They heard through Paul to the voice of God Himself. The vessel mattered, but what mattered more was what the vessel carried. They recognized the gospel as God&apos;s speech, not mere human opinion.',
        },
        {
          kind: 'commentary',
          id: '1t2-aletheia',
          html:
            'Truth is not a system of ideas to be believed abstractly. Truth is God&apos;s Word, and it is active. It &ldquo;effectually worketh&rdquo; in those who receive it. It transforms. It rewires how you see, think, and live. The Thessalonians did not simply memorize doctrine; they allowed the Word to work on them.',
        },
        {
          kind: 'christ',
          id: '1t2-christ-living-word',
          title: 'Christ Connection — The Living Word Takes Root',
          html:
            'John opens his Gospel: &ldquo;In the beginning was the Word, and the Word was with God, and the Word was God… And the Word was made flesh, and dwelt among us&rdquo; (John 1:1, 14). Jesus is not a doctrine to be memorized. He is the living Word of God. When the gospel is received &ldquo;as it is in truth,&rdquo; it is Christ Himself taking root in a life. &ldquo;I am the way, the truth, and the life&rdquo; (John 14:6). The truth is not an abstraction. The truth is a person, and He is alive.',
        },
        {
          kind: 'carry',
          html:
            'How do you receive Scripture? As dead letters, as religious homework, as intellectual puzzles—or as the living Word of God that is meant to transform you? Paul&apos;s thanksgiving suggests a different posture: receiving with the understanding that God Himself is speaking, that this Word is meant to work in you, to reshape you, to make you more like the God who gave it.',
        },
        {
          kind: 'reflection',
          id: '1t2-word-reflect',
          prompt: 'Where have you experienced Scripture not as information but as God&apos;s voice actually working in you? What changed?',
        },
      ],
    },

    /* ─── 1 Thessalonians 2:14–16 — Followers of Churches ──────────────── */
    {
      ref: '1 Thessalonians 2:14–16',
      title: 'Followers of the Churches in Christ Jesus',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 14,
              spans: [
                t('For ye, brethren, became '),
                hg('followers of the churches of God', '1t2-churches'),
                t(' which in Judaea are in Christ Jesus: for ye also have suffered like things of your own countrymen, even as they have of the Jews:'),
              ],
            },
            {
              number: 15,
              spans: [
                t('Who both killed the Lord Jesus, and their own prophets, and have persecuted us; and they please not God, and are contrary to all men;'),
              ],
            },
            {
              number: 16,
              spans: [
                t('Forbidding us to speak to the Gentiles that they might be saved, to fill up their sins alway: for the wrath is come upon them to the uttermost.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1t2-churches',
          html:
            'The Thessalonians are not alone. They follow the pattern of the churches in Judaea—the Jerusalem church, the churches of Galilee and Samaria. Suffering for the gospel is not abnormal or a mark of failure. It is the pattern. To be in Christ is to join a story older and wider than your own circumstances.',
        },
        {
          kind: 'commentary',
          id: '1t2-suffering',
          html:
            'Paul does not minimize the Thessalonians&apos; suffering. They have been persecuted by their own countrymen, as the Jerusalem churches were persecuted by the Jewish leaders. This is costly. But it is not unique. It is part of the inheritance of faith. The gospel has always cost its bearers something.',
        },
        {
          kind: 'christ',
          id: '1t2-christ-communion',
          title: 'Christ Connection — Suffering with the Cloud of Witnesses',
          html:
            'The Thessalonians&apos; suffering links them to something vast. &ldquo;Therefore seeing we also are compassed about with so great a cloud of witnesses, let us lay aside every weight, and the sin which doth so easily beset us, and let us run with patience the race that is set before us&rdquo; (Heb. 12:1). They are part of a long story. The prophets suffered. The apostles suffered. Christ suffered. And in that suffering, believers are conformed to His death (Phil. 3:10). Suffering under opposition is not punishment; it is participation in His story.',
        },
        {
          kind: 'carry',
          html:
            'If your faith costs you something—the approval of your family, financial opportunity, social ease—Paul wants you to know you are not abandoned. You are joining a communion of saints across centuries who paid a price to follow Jesus. Their witness is your witness. Their strength is yours. You are not alone.',
        },
        {
          kind: 'reflection',
          id: '1t2-followers-reflect',
          prompt: 'What has your faith cost you? How does it help to know that others in the long history of the church have paid similar costs?',
        },
      ],
    },

    /* ─── 1 Thessalonians 2:17–20 — Hope and Joy and Crown ──────────────── */
    {
      ref: '1 Thessalonians 2:17–20',
      title: 'Our Hope and Joy and Crown',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 17,
              spans: [
                t('But we, brethren, being taken from you for a short time in presence, not in heart, endeavoured the more abundantly to see your face with great desire.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Wherefore we would have come unto you, even I Paul, once and again; but '),
                hg('Satan hindered us', '1t2-satan'),
                t('.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('For '),
                hy('what is our hope, or joy, or crown of rejoicing', '1t2-stephanos'),
                t('? '),
                hp('Are not even ye in the presence of our Lord Jesus Christ at his coming?', '1t2-parousia'),
              ],
            },
            {
              number: 20,
              spans: [
                t('For ye are our glory and joy.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1t2-satan',
          html:
            'Paul names the opposition as cosmic, not merely circumstantial. &ldquo;Satan hindered us.&rdquo; This is not paranoia; it is honest perception. The resistance to the gospel is not random or accidental. But Satan&apos;s hindrance does not ultimately thwart God&apos;s purposes. The letter itself proves it—Paul&apos;s love and care for the Thessalonians reaches them despite the obstruction.',
        },
        {
          kind: 'greek',
          id: '1t2-stephanos',
          title: 'Stephanos — &ldquo;crown&rdquo;',
          script: 'στέφανος',
          translit: '<strong>stephanos</strong> · a victor&apos;s crown, a wreath',
          description:
            'In the ancient world, a stephanos was the crown given to victors in athletic competitions. Paul uses it to describe the Thessalonians themselves. They are not a possession to Paul; they are his joy, his victory, his crown.',
        },
        {
          kind: 'greek',
          id: '1t2-parousia',
          title: 'Parousia — &ldquo;coming&rdquo;',
          script: 'παρουσία',
          translit: '<strong>parousia</strong> · presence, coming, arrival',
          description:
            'The &ldquo;coming&rdquo; of the Lord is the final gathering, the day of resurrection and judgment. Paul&apos;s hope is that the Thessalonians will stand with him before Christ at the parousia. That is the moment that gives meaning to everything else.',
        },
        {
          kind: 'commentary',
          id: '1t2-hope-joy',
          html:
            'Paul&apos;s hope, joy, and crown are not abstract. They are the Thessalonians themselves. His whole ministry finds meaning in the day when he will stand with them before Jesus and say: we did it. They believed. They held fast. Here they are. This is what pastoral love looks like. The shepherd&apos;s joy is the flock, standing safe before the throne.',
        },
        {
          kind: 'christ',
          id: '1t2-christ-coming',
          title: 'Christ Connection — The Parousia and Final Glory',
          html:
            'Paul&apos;s vision of the parousia is rooted in Jesus&apos;s own words: &ldquo;Hereafter shall ye see the Son of man sitting on the right hand of power, and coming in the clouds of heaven&rdquo; (Matt. 26:64). That coming is not a threat to believers; it is our hope. &ldquo;For the Lord himself shall descend from heaven with a shout, with the voice of the archangel, and with the trump of God: and the dead in Christ shall rise first: then we which are alive and remain shall be caught up together with them in the clouds, to meet the Lord in the air: and so shall we ever be with the Lord&rdquo; (1 Thess. 4:16–17). Everything Paul did in ministry was aimed at that moment—believers, purified and steadfast, standing before Jesus.',
        },
        {
          kind: 'carry',
          html:
            'What is your hope? Paul&apos;s hope is not escape from this world, but the return of Christ. Your hope is not your achievements, your safety, your comfort—it is that day when Jesus comes and makes all things new. The people you love, the work you do, the struggles you endure—all of it makes sense in light of that hope. It reframes everything. It makes hardship bearable. It makes love durable.',
        },
        {
          kind: 'reflection',
          id: '1t2-hope-reflect',
          prompt: 'How would your choices this week change if you truly believed Jesus is coming, and that He will ask about your faithfulness? What matters most in light of that coming?',
        },
      ],
    },
  ],

  resources: [
    {
      id: 'intertextual-1thess-2-stewardship',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Gospel as Sacred Trust',
      url: 'https://www.intertextual.bible/',
      description: 'Explores how the apostolic commission is presented throughout Scripture as a stewardship—a trust given not to be possessed but to be faithfully transmitted.',
    },
    {
      id: 'sefaria-maternal-care-motherhood',
      kind: 'study',
      source: 'Sefaria',
      label: 'Motherhood and Care in Scripture',
      url: 'https://www.sefaria.org/search?q=mother%20care%20nurture',
      description: 'The biblical image of maternal care as a model for spiritual leadership and pastoral tenderness, deeply rooted in Old Testament wisdom.',
    },
    {
      id: 'intertextual-1thess-2-conduct',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Word and Conduct Aligned',
      url: 'https://www.intertextual.bible/',
      description: 'Traces how prophets and apostles authenticate their message through visible conduct that matches their proclamation, creating credibility through consistency.',
    },
  ],

};
