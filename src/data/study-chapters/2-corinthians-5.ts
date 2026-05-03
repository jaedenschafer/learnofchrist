import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * 2 Corinthians 5 — New Creature; Ministry of Reconciliation
 *
 * Paul speaks of the believer&apos;s future resurrection body, our present groaning,
 * and the ministry of reconciliation entrusted to us. &quot;If any man be in Christ,
 * he is a new creature.&quot; God has reconciled us and given us the message of
 * reconciliation to carry to a world at enmity with Him. The whole chapter turns
 * on the great exchange at its heart: Christ became sin; we became His righteousness.
 */
export const SECOND_CORINTHIANS_5: RichChapterContent = {
  bookSlug: '2-corinthians',
  bookName: '2 Corinthians',
  chapter: 5,

  estimatedMinutes: { beginner: 8, intermediate: 16, deep: 19 },
  intros: [
    'Paul has been describing the present sufferings and afflictions of the believer. Now he lifts the gaze to what lies beyond—the resurrection body waiting in the heavens, eternal and not made with human hands. But this future hope is not an escape hatch. Instead, it awakens the believer to the urgency of now. We groan, yes. We are dying daily. But we are being renewed. We are being transformed from glory to glory. And we are entrusted with a message the world desperately needs to hear.',
    'Two great themes run through this chapter—the body waiting for us, and the ministry of reconciliation calling us. Both are rooted in Christ&apos;s great exchange: He became sin that we might become His righteousness. Everything that follows flows from that. We are new creatures. We are ambassadors. We speak on behalf of a King whose work of reconciliation is already accomplished.',
  ],

  sections: [
    /* ─── 2 Corinthians 5:1–2 — The Earthly Tabernacle and the Building of God ──── */
    {
      ref: '2 Corinthians 5:1–2',
      title: 'The Earthly Tent and the Eternal Building',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              1,
              t('For we know that if our earthly house of this '),
              hy('tabernacle', 'greek-skenos'),
              t(' were dissolved, we have a '),
              hy('building of God', 'cor5-building'),
              t(', an house not made with hands, eternal in the heavens.')
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'greek-skenos',
          title: 'Skēnos — "tent, tabernacle"',
          script: 'σκῆνος',
          translit: '<strong>skēnos</strong> · tent, temporary dwelling',
          description:
            'The body is a tent—temporary, shakable, meant to be folded away. Paul does not say the body is evil, only that it is provisional. We live in it now, but not forever.',
        },
        {
          kind: 'commentary',
          id: 'cor5-building',
          html:
            'Paul sets the temporary against the eternal. The present body is a &ldquo;tabernacle&rdquo;—you fold it up, and it&apos;s gone. But believers have a &ldquo;building of God, an house not made with hands, eternal in the heavens.&rdquo; This is not a metaphor about heaven as a place. This is Paul saying: there is a resurrection body, made not by human hands but by God&apos;s own work, waiting for each believer in the heavens. It is eternal. It does not fail.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              2,
              t('For in this we groan, earnestly desiring to be '),
              hg('clothed upon', 'cor5-clothed'),
              t(' with our house which is from heaven:')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor5-clothed',
          html:
            'The word &ldquo;clothed&rdquo; suggests putting on a garment. We groan—that is Paul&apos;s honest word for the present condition—longing to be dressed in the resurrection body. This is not disdain for the physical. It is longing for the physical made perfect, eternal, no longer subject to decay.',
        },
        {
          kind: 'christ',
          id: 'cor5-christ-resurrection',
          title: 'Christ Connection — The First Resurrection Body',
          html:
            'Christ was raised in a body. Not as a ghost, but in flesh—a real body that bore the scars of the cross, that could be touched, that ate fish. Yet it was transformed, passing through locked doors, appearing and vanishing. This is the prototype. &ldquo;As in Adam all die, even so in Christ shall all be made alive&rdquo; (1 Corinthians 15:22). Your resurrection body will follow the pattern of His.',
        },
        {
          kind: 'carry',
          html:
            'The groaning Paul names is not despair. It is the groaning of someone who knows what is coming and finds the waiting almost unbearable. You may feel it too—the sense that this body, for all it has meant to you, is not your final home. That ache is not a sign you are weak or unspiritual. It is the proof the Spirit is alive in you, awakening you to what you were made for.',
        },
        {
          kind: 'reflection',
          id: 'cor5-groaning',
          prompt: 'What do you groan for? Where do you sense the incompleteness of this present life most sharply?',
        },
      ],
    },

    /* ─── 2 Corinthians 5:3–5 — We Are Earnest, Not Naked ──────────────────── */
    {
      ref: '2 Corinthians 5:3–5',
      title: 'The Pledge of the Spirit',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(3, 'If so be that being clothed we shall not be found naked.'),
            verse(
              4,
              t('For we that are in this tabernacle do groan, being burdened: not for that we would be unclothed, but '),
              hg('clothed upon', 'cor5-burden'),
              t(', that mortality might be swallowed up of life.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor5-burden',
          html:
            'We do not want to be &ldquo;unclothed&rdquo;—naked, disembodied. We want to be &ldquo;clothed upon&rdquo;—mortality swallowed up by life. The resurrection is not an escape from the physical into pure spirit. It is the physical transfigured, death defeated, the body made eternal. The believer longs not for incorporeal existence but for the body made imperishable.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              5,
              t('Now he that hath wrought us for the selfsame thing is God, who also hath given unto us the '),
              hy('earnest', 'greek-arrabown'),
              t(' of the Spirit.')
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'greek-arrabown',
          title: 'Arrabōn — "earnest, pledge, down payment"',
          script: 'ἀρραβών',
          translit: '<strong>arrabōn</strong> · down payment, pledge, security deposit',
          description:
            'The Spirit is the &ldquo;earnest&rdquo;—the first installment, the guarantee. When you pay earnest money on a house, you are saying: I am coming back for the rest. The Spirit in the believer is God&apos;s guarantee: the resurrection is coming. This is not speculation. This is collateral.',
        },
        {
          kind: 'commentary',
          id: 'cor5-wrought',
          html:
            'God has &ldquo;wrought us for the selfsame thing&rdquo;—He has shaped, fashioned, made the believer precisely for resurrection. We are not accidents waiting to be corrected by death. We are works in progress, being prepared for an eternal body. And the earnest—the down payment—is the Spirit Himself, present now, transforming you now, the guarantee of what is coming.',
        },
        {
          kind: 'carry',
          html:
            'You feel the Spirit&apos;s work in moments of clarity, conviction, comfort, holiness. In those moments, you are touching the down payment. The Spirit present now is the proof of the resurrection to come. Whatever change you sense the Spirit making in you now—conviction of sin, deepening of love, awakening to holiness—that is a tiny, present taste of the transformation that will be completed when you receive your resurrection body.',
        },
        {
          kind: 'reflection',
          id: 'cor5-earnest',
          prompt: 'How have you experienced the Spirit&apos;s presence in your life? What does that presence tell you about your future?',
        },
      ],
    },

    /* ─── 2 Corinthians 5:6–10 — Absent from Body, Present with the Lord ────── */
    {
      ref: '2 Corinthians 5:6–10',
      title: 'The Courage of Faith',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              6,
              t('Therefore we are always '),
              hg('confident', 'cor5-courageous'),
              t(', knowing that, whilst we are at home in the body, we are absent from the Lord:')
            ),
            verse(
              7,
              t('(For we walk by '),
              hp('faith', 'cor5-faith-sight'),
              t(', not by sight:)')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor5-faith-sight',
          html:
            'Faith and sight are opposed. When you see, you no longer need to believe—you have evidence. But the believer lives by faith. You trust what you cannot yet see. The resurrection, the return of Christ, the presence of God—all of it is held by faith until it is seen.',
        },
        {
          kind: 'commentary',
          id: 'cor5-courageous',
          html:
            'The KJV word &ldquo;confident&rdquo; can seem strange here. Paul has just said we groan, we are burdened, we are absent from the Lord. How is that ground for confidence? But the Greek <em>tharreō</em> means bold courage in the face of danger. Paul is saying: knowing this—knowing we have the earnest, knowing resurrection is coming—we have courage to face the present.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              8,
              t('We are confident, I say, and willing rather to be '),
              hg('absent from the body', 'cor5-absent'),
              t(', and to be '),
              hp('present with the Lord', 'cor5-present-lord'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor5-absent',
          html:
            'This is one of the most tender verses in Scripture. Paul is not afraid to die. He is not clinging to this life. He knows that to be absent from the body is to be present with the Lord. This is not recklessness—Paul loves the Corinthians and wants to stay and serve them. But his fundamental hope is not anchored here. It is anchored there, with the Lord.',
        },
        {
          kind: 'christ',
          id: 'cor5-present-lord',
          title: 'Christ Connection — To Be with Christ is Better',
          html:
            'Paul says the same thing elsewhere: &ldquo;I am in a strait betwixt two, having a desire to depart, and to be with Christ; which is far better&rdquo; (Philippians 1:23). The goal of the believer&apos;s life is not mere survival or comfort here. It is to be with Christ. This world is the preparation. That presence is the destination. &ldquo;Father, I will that they also, whom thou hast given me, be with me where I am&rdquo; (John 17:24).',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              9,
              t('Wherefore we labour, that, whether '),
              hg('present or absent', 'cor5-labour'),
              t(', we may be accepted of him.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor5-labour',
          html:
            'Because the resurrection is secure, because death holds no sting, the believer can now labour with a clear conscience. The goal is not comfort or success or recognition. The goal is to be &ldquo;accepted of him&rdquo;—to hear &ldquo;well done&rdquo; from the Lord, whether Paul is alive to hear it or standing before His throne.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              10,
              t('For we must all appear before the '),
              hg('judgment seat of Christ', 'cor5-judgment'),
              t('; that every one may receive the things done in his body, according to that he hath done, whether it be good or bad.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor5-judgment',
          html:
            'This is not the final judgment that determines salvation. This is the believer appearing before Christ to have his or her works evaluated. What did you do with your body, your time, your gifts, your resources? The stakes are high. But they are not unknown. We know what Christ values. We know what He is looking for. We have time still to live accordingly.',
        },
        {
          kind: 'carry',
          html:
            'You live between two realities: present with the Lord in faith, absent in body. That is not a contradiction—it is the deepest wisdom. You are not meant to live as though this world is all there is. You are also not meant to live as though this world does not matter. You live here but not for here. You labour now but in light of the judgment to come. Everything you do in your body—kindness, courage, service, love—is being recorded. It will be judged by Christ. Make it count.',
        },
        {
          kind: 'reflection',
          id: 'cor5-judgment-seat',
          prompt: 'What would change in your life if you truly believed you will stand before Christ and give account for how you lived in this body?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── 2 Corinthians 5:11–15 — The Love of Christ Constrains ───────────── */
    {
      ref: '2 Corinthians 5:11–15',
      title: 'Constrained by Love',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              11,
              t('Knowing therefore '),
              hg('the terror of the Lord', 'cor5-terror'),
              t(', we persuade men; but we are made manifest unto God; and I trust also are made manifest in your consciences.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor5-terror',
          html:
            'The &ldquo;terror of the Lord&rdquo; is not a modern concept of fear. It is awe, reverence, the overwhelming reality of standing before the holy. Knowing that Christ&apos;s eyes see all, that all hearts will be revealed, that every word will be accounted for—this is what drives Paul&apos;s urgency in preaching.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              12,
              t('For we commend not ourselves again unto you, but give you occasion to glory on our behalf, that ye may have somewhat to answer them which glory in appearance, and not in heart.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor5-commend',
          html:
            'Paul is gently pushing back against critics who judge by appearances—fine speech, impressive credentials, visible status. But the real measure is the heart. What does Christ see when He looks inside? That is all that matters.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              14,
              t('For the love of Christ '),
              hp('constraineth us', 'cor5-constrain'),
              t('; because we thus judge, that if one died for all, then were all dead;')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor5-constrain',
          html:
            'The love of Christ &ldquo;constraineth&rdquo;—it presses in, it compels, it leaves no room for options. If Christ died for all, then something is true about all: they were dead. In sin, in separation from God, literally and spiritually dead. Christ&apos;s death for all is the proof of all&apos;s need.',
        },
        {
          kind: 'christ',
          id: 'cor5-died-for-all',
          title: 'Christ Connection — Died for All',
          html:
            'One died for all. That is the centre. Not a few elect, not the deserving, not the beautiful or powerful or righteous. All. &ldquo;Jesus Christ came into the world to save sinners&rdquo; (1 Timothy 1:15). His death for all is the measure of His love and the measure of humanity&apos;s universal need. No one is excluded from His reach. No one is beyond His care.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              15,
              t('And that he died for all, that they which live should not henceforth live unto themselves, but unto him which died for them, and rose again.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor5-live-unto-him',
          html:
            'If Christ died for you, you no longer own yourself. You were bought. The consequence is liberation: you no longer have to live for yourself, chasing your own agenda, defending your own reputation. You are free to live for Him. This is not servitude. It is the deepest freedom.',
        },
        {
          kind: 'carry',
          html:
            'The love of Christ is meant to constrain you too. Not to paralyze you with fear, but to draw you. When you contemplate that He died for you—not because you earned it, not because you were good enough, but simply because you were His—what happens? Does it make you want to hide or to run to Him? The answer is always: run to Him. Let that love do its work. Let it remake your priorities. You live for Him now.',
        },
        {
          kind: 'reflection',
          id: 'cor5-love-constrain',
          prompt: 'What would it mean for you to stop living for yourself and to live for Christ? What would have to change?',
        },
      ],
    },

    /* ─── 2 Corinthians 5:16–17 — New Creature ──────────────────────────── */
    {
      ref: '2 Corinthians 5:16–17',
      title: 'All Things New',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              16,
              t('Wherefore henceforth know we no man after the flesh: yea, though we have known '),
              hg('Christ after the flesh', 'cor5-after-flesh'),
              t(', yet now know we him no more.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor5-after-flesh',
          html:
            'Paul may be saying he once knew Christ by reputation or by physical presence, the way the twelve saw Jesus walk the earth. But now his knowledge is deeper—spiritual, by faith, by the Spirit. Or he is making a broader point: a believer no longer evaluates people, including Christ, by the standards of the flesh—appearance, power, prestige. Those categories no longer apply.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              17,
              t('Therefore if any man be in Christ, he is a '),
              hg('new creature', 'cor5-new-creature'),
              t(': '),
              hy('old things are passed away', 'greek-kainos'),
              t('; behold, '),
              hg('all things are become new', 'cor5-all-new'),
              t('.')
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'greek-kainos',
          title: 'Kainos — "new," fresh, of a different kind',
          script: 'καινός',
          translit: '<strong>kainos</strong> · new in quality, not merely in time',
          description:
            'This is not merely a new version of the old self. It is a fundamental remake. The root categories—shame, fear, self-centeredness, separation from God—are gone. What emerges is of a different kind entirely.',
        },
        {
          kind: 'commentary',
          id: 'cor5-new-creature',
          html:
            'This is the promise at the heart of the gospel. Not improvement. Not gradual self-help. Not you trying harder to be better while essentially staying the same. This is resurrection-level transformation. In Christ, you are a new creature. Your old identity—bound by shame, by sin, by the categories the world used to define you—is passed away. What you are becoming is so different that the old words no longer fit.',
        },
        {
          kind: 'commentary',
          id: 'cor5-all-new',
          html:
            'Not some things. All things. Your capacity to love—renewed. Your ability to be loved—renewed. Your sense of purpose—renewed. Your future—renewed. The God who made you is making you again. You are in the hands of Someone who does not tinker with broken goods. He remakes them entirely.',
        },
        {
          kind: 'christ',
          id: 'cor5-christ-new-creature',
          title: 'Christ Connection — The Pattern of Newness',
          html:
            'Christ is the new creature. &ldquo;The first man Adam was made a living soul; the last Adam was made a quickening spirit&rdquo; (1 Corinthians 15:45). He rose from the dead in a transformed body—still His, still scarred, still recognizable, but renewed. Every believer who becomes &ldquo;in Christ&rdquo; follows that same pattern: death to the old self, resurrection to a new self. &ldquo;Reckon ye also yourselves to be dead indeed unto sin, but alive unto God through Jesus Christ our Lord&rdquo; (Romans 6:11).',
        },
        {
          kind: 'carry',
          html:
            'You may feel bound by your past. The person you used to be, the mistakes you made, the shame you carry—it may feel permanent, definitional. But Paul says: that person has passed away. You are in Christ now. The old categories do not define you anymore. You are a new creature. This is not a metaphor. This is a new reality. Let yourself believe it. Start acting as though it is true. Because it is.',
        },
        {
          kind: 'reflection',
          id: 'cor5-new',
          prompt: 'What part of your old self have you struggled to believe is truly passed away? What would it mean to accept that you are made new in Christ?',
        },
      ],
    },

    /* ─── 2 Corinthians 5:18–19 — God Was in Christ, Reconciling ───────────── */
    {
      ref: '2 Corinthians 5:18–19',
      title: 'God Reconciling',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              18,
              t('And all things are of God, who hath '),
              hg('reconciled us to himself', 'cor5-reconciled'),
              t(' by Jesus Christ, and hath given to us the ministry of reconciliation;')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor5-reconciled',
          html:
            'Reconciliation means the breach has been closed. Two parties at enmity are made friends. But God takes the initiative—He has &ldquo;reconciled us to himself.&rdquo; We did not broker peace. We did not make amends. God did. And He did it by Jesus Christ—the one Person who could stand between the holy God and sinful humanity and bridge the gap.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              19,
              t('To wit, that God was in Christ, '),
              hp('reconciling the world unto himself', 'cor5-reconciling-world'),
              t(', '),
              hg('not imputing their trespasses unto them', 'cor5-not-imputing'),
              t('; and hath committed unto us the word of reconciliation.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor5-reconciling-world',
          html:
            'In Christ, God was doing the work of reconciliation. Not judging. Not demanding payment. Reconciling. This is the gospel: God stepping into the world in Christ, absorbing the breach, closing the gap. The work is done. The world is reconciled—not because everyone has believed it yet, but because Christ has accomplished it.',
        },
        {
          kind: 'commentary',
          id: 'cor5-not-imputing',
          html:
            '&ldquo;Not imputing their trespasses.&rdquo; This is astonishing. God does not count the sins against us. Not because they didn&apos;t happen. Not because they don&apos;t matter. But because Christ counted them against Himself. He bore them. God is free to reconcile without compromising justice because justice has been satisfied—in Christ.',
        },
        {
          kind: 'christ',
          id: 'cor5-god-in-christ',
          title: 'Christ Connection — God Became Human to Reconcile',
          html:
            'The full weight is in those words: &ldquo;God was in Christ.&rdquo; God did not send an angel. God did not send a law or a principle. God stepped into history in Christ to do the work of reconciliation Himself. &ldquo;God was manifest in the flesh&rdquo; (1 Timothy 3:16). &ldquo;God commendeth his love toward us, in that, while we were yet sinners, Christ died for us&rdquo; (Romans 5:8).',
        },
        {
          kind: 'carry',
          html:
            'If the world is reconciled to God in Christ, then reconciliation is not contingent on your performance, your worthiness, your understanding. It is a fact God has established. Your role now is not to achieve reconciliation—it is to announce it. To be the herald of news the world is dying to hear but doesn&apos;t yet believe.',
        },
        {
          kind: 'reflection',
          id: 'cor5-reconciling',
          prompt: 'Do you truly believe God is not counting your sins against you? What would change if you did?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── 2 Corinthians 5:20–21 — Ambassadors; The Great Exchange ────────── */
    {
      ref: '2 Corinthians 5:20–21',
      title: 'Ambassadors of Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              20,
              t('Now then we are '),
              hg('ambassadors for Christ', 'cor5-ambassadors'),
              t(', as though God did beseech you by us: we pray you in Christ&apos;s stead, '),
              hp('be ye reconciled to God', 'cor5-be-reconciled'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor5-ambassadors',
          html:
            'An ambassador represents a foreign power in a hostile or foreign land. The believer is an ambassador for Christ—representing the kingdom of heaven in a world not yet fully submitted to it. You do not represent yourself. You represent Him. Your words are meant to be heard as His words. Your love is meant to be seen as His love.',
        },
        {
          kind: 'commentary',
          id: 'cor5-be-reconciled',
          html:
            'This is the message. Not &ldquo;improve yourself.&rdquo; Not &ldquo;earn your way back.&rdquo; Not &ldquo;try harder.&rdquo; Be reconciled. Accept the peace. Receive the embrace. God has already done the work. Your part is to say yes.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(
              21,
              t('For he hath made him to be '),
              hp('sin for us', 'cor5-sin-for-us'),
              t(', who knew no sin; that we might be made '),
              hg('the righteousness of God in him', 'cor5-righteousness'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor5-sin-for-us',
          html:
            'The great exchange is stated here in its starkest form. Christ, who knew no sin—who had never done wrong, never fallen short, never broken the law—was made sin. All the sin, shame, guilt, judgment that belongs to us was transferred to Him. He became what we are in our fallenness. On the cross, He took the full weight of judgment.',
        },
        {
          kind: 'commentary',
          id: 'cor5-righteousness',
          html:
            'And we are made the righteousness of God in Him. This is not moral improvement. This is forensic justification—a declaration before the throne that you are righteous in Christ. His obedience becomes yours. His right standing becomes yours. You are clothed in His righteousness as your permanent identity.',
        },
        {
          kind: 'christ',
          id: 'cor5-great-exchange',
          title: 'Christ Connection — The Great Exchange',
          html:
            'This verse captures the gospel in one sentence. The innocent became guilty; the guilty are declared innocent. &ldquo;He was wounded for our transgressions, he was bruised for our iniquities: the chastisement of our peace was upon him; and with his stripes we are healed&rdquo; (Isaiah 53:5). &ldquo;Who his own self bare our sins in his own body on the tree&rdquo; (1 Peter 2:24). Everything Christ does—His incarnation, His ministry, His death, His resurrection—is aimed at making this exchange possible.',
        },
        {
          kind: 'carry',
          html:
            'You are an ambassador carrying a message of the greatest consequence. You have been reconciled. You have been made righteous in Christ. Now you get to say to a world broken and ashamed: this is available to you too. You do not have to earn it. You do not have to fix yourself first. Christ has done the work. Be reconciled to God. Step into that peace. That is your message. Carry it everywhere you go.',
        },
        {
          kind: 'reflection',
          id: 'cor5-ambassador-calling',
          prompt: 'If you truly are an ambassador for Christ, what message are you meant to carry? How will you carry it this week?',
        },
        {
          kind: 'artwork',
          matchTitle: /reconciliation|cross|resurrection/i,
          caption: '2 Corinthians 5:18–21 · Reconciliation Through Christ',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new. And all things are of God, who hath reconciled us to himself by Jesus Christ.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Corinthians 5 · Study Guide',
  },

  hasHebrew: false,
};
