import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 1 Peter 5 — The Chief Shepherd Calls His Flock
 *
 * Peter closes his epistle addressing the elders: shepherd willingly, not for
 * money or status. Young believers submit humbly to their elders. All believers
 * cast anxieties on God, who cares for them. Be watchful—the adversary prowls—
 * but resist in faith. Humble yourselves under God&apos;s mighty hand; He will
 * exalt you in due time. The chapter ends with greetings of peace in Christ.
 */
export const FIRST_PETER_5: RichChapterContent = {
  bookSlug: '1-peter',
  bookName: '1 Peter',
  chapter: 5,

  estimatedMinutes: { beginner: 6, intermediate: 12, deep: 16 },
  intros: [
    'Peter closes his letter by speaking to the elders—the pastors and leaders of the church. Their calling is to shepherd the flock of God, but not through domineering control. They are under-shepherds. Christ is the Chief Shepherd. They feed, guide, protect, and serve because Christ commissioned them, not because they crave position or money.',
    'Then he pivots to every believer. All of us are sheep. All of us are prone to anxiety. But God cares for you—truly. Cast all your worry on Him. Be vigilant against the enemy, who prowls like a roaring lion. Yet your faith is your weapon. Humble yourself before God. He opposes the proud but gives grace to the humble. In due time, He will lift you up.',
  ],

  opener: {
    matchArtist: /tissot|masolino|giotto/i,
    matchTitle: /shepherd|flock|sheep|peter|elder/i,
    caption: 'The Chief Shepherd & His Flock',
  },

  sections: [
    /* ─── 1 Peter 5:1–3 — The Elders I Exhort ────────────────────────── */
    {
      ref: '1 Peter 5:1–3',
      title: 'The Elders I Exhort',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(1,
              t('The elders which are among you I '),
              hp('exhort', '1pet5-parakaleo'),
              t(', who am also an elder, and a witness of the sufferings of Christ, and also a partaker of the glory that shall be revealed:'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '1pet5-parakaleo',
          html:
            'Peter speaks to the elders not as a distant authority but as a fellow elder—someone who has walked with Christ, suffered with Him, and will share in His revealed glory. His exhortation carries the weight of lived experience. He is not commanding from on high but appealing heart to heart, elder to elder.',
        },

        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(2,
              hp('Feed', '1pet5-poimainw'),
              t(' the flock of God which is among you, taking the '),
              hy('oversight thereof, not by constraint, but willingly', '1pet5-voluntary'),
              t('; not for filthy lucre, but of a ready mind;'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: '1pet5-poimainw',
          title: 'Poimaino — To Shepherd',
          script: 'ποιμαίνω',
          translit: '<strong>poimaino</strong> · to shepherd; to tend; to care for a flock',
          description:
            'Shepherding is not authority but service. A shepherd knows each sheep by name, protects them from predators, leads them to pasture, binds their wounds, carries the weak. This is the model for every church leader.',
        },
        {
          kind: 'commentary',
          id: '1pet5-voluntary',
          html:
            'The oversight must be willingly undertaken, not by compulsion. Not for money—"filthy lucre"—but with a ready, eager mind. The true shepherd serves because he has been gripped by the love of Christ and desires to care for His sheep. If you shepherd for status or wages, you have misunderstood the calling.',
        },

        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(3,
              t('Neither as being '),
              hg('lords over God&apos;s heritage', '1pet5-not-lords'),
              t(', but being '),
              hp('ensamples', '1pet5-typos'),
              t(' to the flock.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '1pet5-not-lords',
          html:
            'The elder is never the owner of the flock. The flock belongs to God—it is His "heritage," His treasured possession. The shepherd is a steward, accountable to the Head Shepherd. A lord dominates; a shepherd serves. A lord demands; a shepherd gives. A lord seeks his own glory; a shepherd points always to Christ.',
        },
        {
          kind: 'greek',
          id: '1pet5-typos',
          title: 'Typos — Example or Pattern',
          script: 'τύπος',
          translit: '<strong>typos</strong> · example; pattern; figure; impression',
          description:
            'The shepherd leads not by command but by example. His life is the text the flock reads. If the flock sees a shepherd who is humble, prayerful, sacrificial, and Christ-focused, they will follow. The example is more powerful than any words.',
        },
        {
          kind: 'christ',
          id: '1pet5-christ-chief-shepherd',
          title: 'Christ Connection — The Chief Shepherd',
          html:
            'Jesus calls Himself the Good Shepherd in John 10:11. He lays down His life for the sheep. Every elder in every church is an under-shepherd, serving the sheep on behalf of the Chief Shepherd. When Christ appears—when He gathers His flock—all faithful shepherds will receive from Him a crown of glory that does not fade away. The reward comes from Him alone.',
        },
      ],
    },

    /* ─── 1 Peter 5:4 — Crown of Glory That Fadeth Not Away ──────────── */
    {
      ref: '1 Peter 5:4',
      title: 'When the Chief Shepherd Shall Appear',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(4,
              t('And when the '),
              hp('chief Shepherd', '1pet5-archipoimhen'),
              t(' shall appear, ye shall receive a '),
              hp('crown of glory that fadeth not away', '1pet5-stephanos'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: '1pet5-archipoimhen',
          title: 'Archipoimḗn — Chief Shepherd',
          script: 'ἀρχιποιμήν',
          translit: '<strong>archipoimhen</strong> · chief shepherd; head shepherd; the one shepherd over all',
          description:
            'This word appears only here in Scripture. Christ is the ultimate Shepherd. All earthly shepherds derive their authority from Him and serve under His oversight. When He appears—when He is fully revealed—every shepherd will give account.',
        },
        {
          kind: 'greek',
          id: '1pet5-stephanos',
          title: 'Stephanos — Crown; Garland',
          script: 'στέφανος',
          translit: '<strong>stephanos</strong> · crown; wreath; garland of honor; victor&apos;s crown',
          description:
            'This is not a royal crown of dominion but a victor&apos;s crown, a reward for faithful service. And it "fadeth not away"—it does not wither, will never be stripped, never be surpassed. In Christ&apos;s economy, the faithful shepherd&apos;s reward is eternal.',
        },
        {
          kind: 'commentary',
          id: '1pet5-fadeth-not',
          html:
            'Earthly honor fades. Popularity wanes. Monuments crumble. The applause of crowds is hollow. But the crown Christ gives to the faithful shepherd—that is eternal. It is promised by the One who cannot lie, who will endure forever. This is why the true shepherd is not anxious for earthly recognition. His reward is secure in the hands of the Chief Shepherd.',
        },
        {
          kind: 'carry',
          html:
            'If you lead in any capacity—in your church, your family, your workplace—you are a shepherd. Lead not for status or money. Lead with the example of your own humble, faithful life. Remember always that you answer to the Chief Shepherd. Your reward will come from His hand alone.',
        },
        {
          kind: 'reflection',
          id: '1pet5-shepherd-reflect',
          prompt: 'In what ways are you called to shepherd others? How might you lead more like Christ—with sacrifice and humble love rather than authority?',
        },
      ],
    },

    /* ─── 1 Peter 5:5 — Submit One to Another, Clothed with Humility ──── */
    {
      ref: '1 Peter 5:5',
      title: 'Submit One to Another, Clothed with Humility',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(5,
              t('Likewise, ye younger, submit yourselves unto the elder. Yea, all of you be subject one to another, and be '),
              hy('clothed with humility', '1pet5-engkomboomai'),
              t(': for God resisteth the proud, and giveth grace to the humble.'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: '1pet5-engkomboomai',
          title: 'Egkomboomai — Clothe With; Wrap Around',
          script: 'ἐγκομβόω',
          translit: '<strong>egkomboomai</strong> · to put on; to wrap around; to clothe oneself with',
          description:
            'The same word is used when a servant ties on an apron. Humility is not merely an attitude; it is something you put on intentionally, visibly, like a garment. It is active, deliberate, something others can see.',
        },
        {
          kind: 'commentary',
          id: '1pet5-mutual-submission',
          html:
            'Peter first addresses the younger believers: honor and submit to your elders. But then he broadens it: "all of you be subject one to another." This is the paradox of Christian community. We are all servants. We all submit to each other. The leader is servant of all. The young are respectful of age and wisdom. But the elder is never above serving the young. Mutual submission is the air Christians breathe.',
        },
        {
          kind: 'commentary',
          id: '1pet5-resist-proud',
          html:
            'God opposes the proud—actively resists them, thwarts their plans, denies them His grace. But He gives grace to the humble—freely, generously, without measure. The choice is yours. Exalt yourself and find yourself opposed by the Almighty. Or humble yourself and find yourself upheld, sustained, and strengthened by His grace.',
        },
        {
          kind: 'christ',
          id: '1pet5-christ-humble',
          title: 'Christ Connection — Christ&apos;s Humility',
          html:
            'Christ is the pattern of humility. He who was God took on flesh, washed the disciples&apos; feet like a servant, and died on a cross. He humbled Himself. And therefore God exalted Him, gave Him a name above every name, made Him Lord of all (Philippians 2:8–9). When you humble yourself, you follow Christ. When you exalt yourself, you oppose Him.',
        },
      ],
    },

    /* ─── 1 Peter 5:6 — Humble Yourselves Under the Mighty Hand of God ─── */
    {
      ref: '1 Peter 5:6',
      title: 'Humble Yourselves Under the Mighty Hand of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(6,
              hp('Humble yourselves therefore under the mighty hand of God', '1pet5-mighty-hand'),
              t(', that he may exalt you in due time:'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '1pet5-mighty-hand',
          html:
            'Peter calls us to voluntarily bend the knee before God&apos;s mighty hand. To humble yourself is not to grovel or despise yourself. It is to acknowledge reality: God is great, I am not. His ways are infinitely above mine. His power is absolute. His wisdom is flawless. I place myself under His authority—not reluctantly but willingly, joyfully, knowing that He has my good in view.',
        },
        {
          kind: 'commentary',
          id: '1pet5-exalt-due-time',
          html:
            '"In due time" — not now, not necessarily when you want it, but when God knows it is best. The exaltation that comes from God is always at the right moment. It is always worth waiting for. The person who humbles himself is not humiliated; he is being prepared for exaltation. This is the pattern of the cross and resurrection. Death before life. Humility before honor.',
        },
        {
          kind: 'carry',
          html:
            'You are holding something in your fist. A worry about tomorrow. A grudge against someone. An ambition that burns. A fear that grips you. Open your hand. Place it under God&apos;s mighty hand. Acknowledge His authority over your life, your future, your reputation. This is the posture of faith. This is freedom.',
        },
        {
          kind: 'reflection',
          id: '1pet5-mighty-hand-reflect',
          prompt: 'What does it mean to place something "under the mighty hand of God"? What would you need to release?',
        },
      ],
    },

    /* ─── 1 Peter 5:7 — Casting All Your Care Upon Him ────────────────── */
    {
      ref: '1 Peter 5:7',
      title: 'Casting All Your Care Upon Him for He Careth for You',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(7,
              hp('Casting all your care upon him', '1pet5-casting-care'),
              t('; for he careth for you.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '1pet5-casting-care',
          html:
            'Do not clutch your cares. Do not rehearse them endlessly. Cast them. Throw them. Roll them onto God as if removing a heavy stone from your shoulders. This is not positive thinking or denial. It is an act of faith. You acknowledge the weight you carry. And then you place it in hands infinitely more capable than yours.',
        },
        {
          kind: 'commentary',
          id: '1pet5-he-careth',
          html:
            'Why can you cast your cares on God? Because He cares for you. Not in a distant, theoretical way. He knows your name. He sees your tears. He marks every anxiety you carry. He is not indifferent. He is not overwhelmed. He cares—tenderly, personally, with perfect understanding. This is the foundation of peace.',
        },
        {
          kind: 'christ',
          id: '1pet5-christ-casting-care',
          title: 'Christ Connection — Come Unto Me, All Ye That Labour',
          html:
            'Jesus said, "Come unto me, all ye that labour and are heavy laden, and I will give you rest" (Matthew 11:28). This is not rest from work but rest from anxiety, from the burden of trying to manage life in your own strength. Christ invites you to cast your cares on Him. He will carry what you cannot carry. This is His love made visible.',
        },
        {
          kind: 'carry',
          html:
            'Name one care you are carrying right now. Not tomorrow—now. Is it financial? Relational? Health? Status? Write it down or speak it aloud. Now visualize casting it onto the shoulders of Christ, the One who cares for you. He is willing to carry it. Let it go.',
        },
      ],
    },

    /* ─── 1 Peter 5:8–9 — Your Adversary the Devil as a Roaring Lion ───── */
    {
      ref: '1 Peter 5:8–9',
      title: 'Your Adversary the Devil as a Roaring Lion',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(8,
              t('Be sober, be vigilant; because your adversary the devil, as a '),
              hg('roaring lion', '1pet5-roaring-lion'),
              t(', walketh about, seeking whom he may devour:'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '1pet5-roaring-lion',
          html:
            'Peter does not minimize spiritual opposition. The enemy is real. He is active. He hunts. He seeks prey. But notice: he does not pounce from hiding. A roaring lion announces itself. The roar is meant to terrify, to make you freeze, to make you yield. Much of the enemy&apos;s work is intimidation. He wants you to believe you cannot resist, that the battle is already lost.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(9,
              t('Whom resist stedfast in the faith, knowing that the same afflictions are accomplished in your brethren that are in the world.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '1pet5-resist-stedfast',
          html:
            'You are not helpless. Resist him. Stand firm. Plant your feet. Do not yield. And remember: you are not alone in this struggle. Believers around the world, across the centuries, have faced the same temptations, the same trials, the same roaring. You are part of an army of the faithful. The adversary has never defeated the family of God. He will not defeat you.',
        },
        {
          kind: 'carry',
          html:
            'When tempted to despair, to doubt God&apos;s care, to turn back from faith—that is the roar. That is the enemy seeking whom he may devour. Your resistance is your faith in Christ. You have been tested. Others have been tested. And the faithful have always stood firm. Stand now.',
        },
        {
          kind: 'reflection',
          id: '1pet5-resist-reflect',
          prompt: 'What temptations or fears threaten your faith most often? How might you "resist stedfast" in those moments?',
        },
      ],
    },

    /* ─── 1 Peter 5:10 — The God of All Grace Make You Perfect ────────── */
    {
      ref: '1 Peter 5:10',
      title: 'The God of All Grace Make You Perfect',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(10,
              t('But the '),
              hp('God of all grace', '1pet5-god-of-grace'),
              t(', who hath called us unto his eternal glory by Christ Jesus, after that ye have suffered a while, '),
              hp('make you perfect', '1pet5-katartizo'),
              t(', stablish, strengthen, settle you.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '1pet5-god-of-grace',
          html:
            'Peter reminds us: God is the "God of all grace." Not the God of judgment alone or wrath alone, but grace. And this grace is available for every trial, every temptation, every moment of weakness. No situation is beyond His grace. No believer is beyond His mercy.',
        },
        {
          kind: 'greek',
          id: '1pet5-katartizo',
          title: 'Katartizo — Make Perfect; Complete; Equip',
          script: 'καταρτίζω',
          translit: '<strong>katartizo</strong> · to complete; to equip; to mend; to restore to proper condition',
          description:
            'This word is used for mending fishing nets and setting a broken bone. God does not discard broken things; He restores them. Your suffering is not wasted. It is part of the process by which God makes you complete, leaves you lacking nothing.',
        },
        {
          kind: 'commentary',
          id: '1pet5-called-eternal-glory',
          html:
            'You have been called into Christ&apos;s eternal glory. This is not a distant, abstract hope. This is your destiny. All of the suffering, all of the trials, all of the growth—it is pointing toward that glory. You are being prepared for it. God will not leave you incomplete. He will stablish, strengthen, and settle you.',
        },
        {
          kind: 'christ',
          id: '1pet5-christ-eternal-glory',
          title: 'Christ Connection — Called to His Eternal Glory',
          html:
            'We are called into Christ&apos;s eternal glory "by Christ Jesus." He is the one through whom every grace reaches us. He is the channel. He is the mediator. When God looks upon us, He sees us in Christ. Our calling, our redemption, our final glory—all are "by Christ Jesus." We have no standing before God except in Him.',
        },
        {
          kind: 'carry',
          html:
            'You may be in the midst of suffering right now. You may be broken, incomplete, struggling. But hear Peter: this is temporary. "A while." And through it, God is making you perfect, stablishing you, strengthening you, settling you. You are being prepared for eternal glory. Trust the process. Trust the God of all grace.',
        },
      ],
    },

    /* ─── 1 Peter 5:11 — Closing Doxology ──────────────────────────────── */
    {
      ref: '1 Peter 5:11',
      title: 'To Him Be Glory and Dominion',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(11,
              t('To him be '),
              hp('glory and dominion for ever and ever', '1pet5-doxology'),
              t('. Amen.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '1pet5-doxology',
          html:
            'Peter closes with doxology—a burst of praise to God. In the midst of opposition, affliction, and uncertainty, this is the bedrock truth: God reigns. His kingdom will be fully revealed. His glory is infinite and eternal. His dominion is absolute. Every power opposed to Him will be brought low. Every believer who stands firm in faith will share in His victory.',
        },
        {
          kind: 'carry',
          html:
            'This is the faith that sustains the Christian through every trial. Not that trials will be easy. Not that suffering will disappear. But that the God to whom all glory and dominion belong is guiding history toward the full revelation of His kingdom. When you are tempted to despair, return to this truth: God reigns. He is building something eternal. Your faithfulness matters.',
        },
      ],
    },

    /* ─── 1 Peter 5:12–14 — Closing Greetings ────────────────────────── */
    {
      ref: '1 Peter 5:12–14',
      title: 'Peace Be With You All That Are in Christ Jesus',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(12,
              t('By Silvanus, a faithful brother unto you, as I suppose, I have written briefly;'),
            ),
            verse(13,
              t('The church that is at Babylon, elected together with you, saluteth you; and so doth Marcus my son. '),
              t('Greet ye one another with a kiss of charity. '),
            ),
            verse(14,
              hp('Peace be with you all that are in Christ Jesus', '1pet5-peace-close'),
              t('. Amen.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '1pet5-peace-close',
          html:
            'Peter ends the epistle as he began it: with peace. But now it is a peace earned through the journey of the letter. You have been called to live as exiles, to endure suffering as Christ endured it, to maintain love and faith despite opposition, to cast your cares on God, to resist the enemy steadfastly. And through it all, the peace of Christ is yours. Not the peace of the world, which comes from favorable circumstances. But the peace that passes understanding, the peace of resting in God&apos;s hands. This peace is for all who are "in Christ Jesus."',
        },
        {
          kind: 'commentary',
          id: '1pet5-faithful-brother',
          html:
            'Silvanus (likely Silas, who traveled with Paul) was the scribe who wrote down Peter&apos;s words. The letter is written "briefly"—distilled wisdom, essential truths, no excess. Marcus (John Mark) sends greetings as Peter&apos;s son in faith. The church at Babylon (likely Rome, figuratively called Babylon) is part of the same faith community. Peter ends by weaving together the threads of the early Christian movement—Silvanus, Marcus, the scattered churches—all united in Christ.',
        },
        {
          kind: 'christ',
          id: '1pet5-christ-peace',
          title: 'Christ Connection — Christ Our Peace',
          html:
            'Jesus said, "Peace I leave with you, my peace I give unto you" (John 14:27). This is not a generic wish but a bequest—the peace Christ possessed in the face of the cross, now given to us. The letter ends not with anxiety or fear but with peace. The same peace Christ has. The same peace that enables shepherds to lead without fear, believers to endure without despair, churches to stand together without collapsing. This is Christ&apos;s gift to the faithful.',
        },
        {
          kind: 'carry',
          html:
            'Peter has spoken. The elders are exhorted. The young are called to humility. The anxious are invited to cast their cares on God. The tempted are promised that resistance in faith is possible. And all who are in Christ Jesus receive His peace. As you finish this epistle, receive that peace. It is not pie-in-the-sky. It is real. It is yours. Let it settle over your heart and mind.',
        },
        {
          kind: 'reflection',
          id: '1pet5-peace-reflect',
          prompt: 'What would it mean to "greet one another with a kiss of charity"? How can you show the same love and belonging to others in your faith community?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 1 Peter 5',
    quote:
      'Feed the flock of God which is among you willingly, not for money but with a ready mind. Humble yourselves under the mighty hand of God. Casting all your care upon him; for he careth for you. Resist stedfast in the faith. Peace be with you all that are in Christ Jesus.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Peter 5 · Study Guide',
  },

  hasHebrew: false,
};
