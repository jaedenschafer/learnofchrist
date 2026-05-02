import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Galatians 5 — Stand Fast in Liberty
 *
 * This is Paul&apos;s masterwork on Christian freedom. The Galatian churches have been
 * seduced into thinking they must add Law—particularly circumcision—to their faith in
 * Christ to be truly saved. Paul&apos;s response is unsparing: "If righteousness come by the law,
 * then Christ is become of no effect unto you."
 *
 * But freedom is not lawlessness. Paul does not leave his churches in antinomian chaos.
 * Instead, he shows them that true liberty has a single aim: love. The law is fulfilled in one
 * word—"Thou shalt love thy neighbour as thyself." And that love cannot be lived by the flesh,
 * the enslaved human nature apart from the Spirit. It requires the power of the Spirit, producing
 * fruit that no mere law could ever compel: love, joy, peace, longsuffering, gentleness, goodness,
 * faith, meekness, temperance.
 *
 * The chapter concludes with a statement so radical it takes the breath away: "They that are
 * Christ&apos;s have crucified the flesh with the affections and lusts." Your old self has been
 * executed. You are alive now only in and through Christ. Walk in that resurrection.
 */
export const GALATIANS_5: RichChapterContent = {
  bookSlug: 'galatians',
  bookName: 'Galatians',
  chapter: 5,

  intros: [
    'Paul has spent four chapters laying out the history and the gospel: Abraham was justified by faith, not by works. The Law came later, and it was never meant to be the path to righteousness—only a schoolmaster to drive us to Christ. So why are the Galatian churches abandoning faith and taking up the Law? Why are they allowing themselves to be drawn back into the very slavery from which Christ freed them? Paul&apos;s opening to Chapter 5 is raw urgency: "Stand fast therefore in the liberty wherewith Christ hath made us free, and be not entangled again with the yoke of bondage."',
    'But that freedom is not a blank check for licentiousness. Paul shows that the Law was never the real goal—love was. And love cannot be legislated. It can only be lived by the power of the Spirit working in a human heart. The chapter then unfolds two opposing powers: the flesh (sarx), humanity enslaved to its own desires, producing works of destruction; and the Spirit (pneuma), the indwelling power of the risen Christ, producing the fruit of redemption. To be in Christ is to have "crucified the flesh"—to have died to the tyranny of self-will. What remains is to walk in step with the Spirit, day after day, letting His character be formed in you.',
  ],

  sections: [
    /* ─── Galatians 5:1 — Stand Fast in Liberty ─────────────────────────── */
    {
      ref: 'Galatians 5:1',
      title: 'Stand Fast in Liberty',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(1, hy('Stand fast therefore in the liberty wherewith Christ hath made us free', 'greek-eleutheria'), t(', and '), hg('be not entangled again with the yoke of bondage', 'c-yoke-bondage'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-yoke-bondage',
          html: 'A yoke is an instrument of enslavement. When you place a yoke on an animal, you take away its freedom of movement. The Law, misunderstood as a path to salvation, is exactly that: a yoke that binds you to the impossible task of justifying yourself through your own obedience. Paul is not saying the Law is evil—he has been clear on this. But the Law as a savior is bondage. And once you have been freed from it through faith in Christ, to return to it is to voluntarily step back into slavery.',
        },
        {
          kind: 'greek',
          id: 'greek-eleutheria',
          title: 'Eleutheria — &ldquo;Liberty&rdquo; or &ldquo;Freedom&rdquo;',
          script: 'ἐλευθερία',
          translit: '<strong>eleutheria</strong> · freedom; liberty; the state of being unbound from constraint',
          description: 'The word carries more than mere absence of external control. It means freedom <em>for</em> something, not just freedom <em>from</em> something. Christ has made you free not so you can wander aimlessly, but so you can be re-bound—to Him, to His purposes, to His love. True liberty is slavery to love.',
        },
        {
          kind: 'christ',
          id: 'christ-liberty',
          title: 'Christ Connection — The Liberty Christ Offers',
          html: 'Jesus said, "Come unto me, all ye that labour and are heavy laden, and I will give you rest. Take my yoke upon you, and learn of me; for I am meek and lowly in heart: and ye shall find rest unto your souls. For my yoke is easy, and my burden is light" (Matthew 11:28–30). There are two yokes. One is the yoke of the Law—infinite demands placed on finite capacity. The other is the yoke of Christ—a shared burden, carried together with one whose strength is infinite. The first produces exhaustion and despair. The second produces rest and peace. Paul is calling the Galatians to remain under the easy yoke, the yoke that Christ Himself is pulling.',
        },
        {
          kind: 'carry',
          html: 'Where in your life have you slipped back under a yoke of bondage? Perhaps it&apos;s a legalism—a rule you&apos;ve made absolute that Christ never required. Perhaps it&apos;s the voice of shame: "You&apos;ll never be good enough; you have to earn your worth." Perhaps it&apos;s the enslaving demand to be sufficient for everyone around you. Stand fast. The word is stand <em>fast</em>—not with tentative steps, but with the full confidence that Christ has already won. Your freedom is not your achievement. It is His gift. And He is not asking you to give it back.',
        },
        {
          kind: 'reflection',
          id: 'gal5-liberty',
          prompt: 'What yoke have you been carrying? What would it mean to truly stand fast in the liberty Christ has given?',
        },
        {
          kind: 'artwork',
          matchTitle: /liberty|freedom|yoke|bondage|break|release|unfree/i,
          caption: 'Galatians 5:1 · Stand Fast in Liberty',
        },
      ],
    },

    /* ─── Galatians 5:2–4 — Fallen from Grace ────────────────────────────── */
    {
      ref: 'Galatians 5:2–4',
      title: 'Fallen from Grace',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(2, t('Behold, I Paul say unto you, that if ye be circumcised, Christ shall profit you nothing.')),
            verse(3, t('For I testify again to every man that is circumcised, that he is a debtor to do the whole law.')),
            verse(4, t('Christ is become of no effect unto you, whosoever of you are justified by the law; ye are '), hg('fallen from grace', 'c-fallen-grace'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-fallen-grace',
          html: 'To be "fallen from grace" does not mean you have lost your salvation. It means you have stepped out from under the umbrella of grace. You have chosen to rest your hope not on what Christ has done, but on what you can do. You have moved your foundation from the rock of His finished work to the sand of your own effort. This is not a state you can maintain—it will crumble. And the weight of that collapse will crush you.',
        },
        {
          kind: 'carry',
          html: 'When you try to add your own works to Christ&apos;s work—when you think you must earn your way into God&apos;s family, prove yourself worthy of His love, or achieve a certain standard to keep His favor—you are essentially saying Christ&apos;s work is not enough. You are nullifying the Gospel. But Christ cannot profit you and demand your works at the same time. The moment you step into self-justification, grace exits. This is not a complicated theological formula. It is a simple fact: you cannot simultaneously trust Christ to save you and trust yourself to save you. One or the other. And if it is self, then Christ has profited you nothing.',
        },
        {
          kind: 'reflection',
          id: 'gal5-fallen-grace',
          prompt: 'In what areas of your spiritual life have you drifted from grace into self-justification? What would it mean to step back under grace?',
        },
      ],
    },

    /* ─── Galatians 5:5–6 — Faith Working by Love ────────────────────────── */
    {
      ref: 'Galatians 5:5–6',
      title: 'Faith Which Worketh by Love',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(5, t('For we through the Spirit wait for the hope of righteousness by faith.')),
            verse(6, t('For in Jesus Christ neither circumcision availeth any thing, nor uncircumcision; but '), hy('faith which worketh by love', 'greek-agape'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-faith-love',
          html: 'Paul has just said that trying to add the works of the Law to faith in Christ cancels out Christ. Now he clarifies: faith itself is not passive. It works. But it works not through the energy of the flesh trying to obey rules. It works through love. And love is the opposite of legalism. A legalist asks, "What is the minimum I must do to be righteous?" A lover asks, "What can I give? How can I serve? What is the need in front of me?" Love is outward-flowing, other-focused, generous. When faith is animated by this love, it produces a life of genuine goodness—not the brittle obedience of rule-following, but the organic fruit of a transformed heart.',
        },
        {
          kind: 'greek',
          id: 'greek-agape',
          title: 'Agapē — &ldquo;Love&rdquo; (the highest kind)',
          script: 'ἀγάπη',
          translit: '<strong>agapē</strong> · selfless love; the love that seeks the good of the other; divine love',
          description: 'Not the love of attraction or affection (philia or eros), but the love that chooses to give, to serve, to seek another&apos;s good regardless of cost. This is the love Jesus demonstrated on the cross. This is the energy that animates faith. When you believe in Christ, and that belief is energized by agapē—by real, sacrificial, outward-giving love for God and others—that is when faith becomes alive and bears fruit.',
        },
        {
          kind: 'christ',
          id: 'christ-love',
          title: 'Christ Connection — The Character of Christ Is Love',
          html: 'The entire law and the prophets are summed up in one command: love God with all your heart, and love your neighbor as yourself (Matthew 22:37–40). Jesus lived this. His every action was animated by love—for the poor, the sick, the excluded, the despised. He broke the Sabbath to heal a man because healing was more important than a rule. He sat with a Samaritan woman at a well, violating every social boundary of His culture, because her thirst mattered. He went to the cross, bearing the debt that was not His to bear, because He loved. Faith in Christ that does not produce love in the believer is a contradiction. If you truly believe in Him, you will be remade in His image—and His image is love.',
        },
        {
          kind: 'carry',
          html: 'This week, listen to what your actions and words are saying about what you believe. Are they motivated by rule-keeping, by fear of judgment, by the desire to prove yourself? Or are they animated by love—real, costly, other-focused love? If you find yourself bound up in rules and demands, pause. Ask the Spirit to remind you that you are not under Law. You are under grace. And the response to grace is not fearful obedience. It is love.',
        },
        {
          kind: 'reflection',
          id: 'gal5-faith-love',
          prompt: 'What is one area where your faith is animated by love, and one area where it is still trapped in legalism? How might love transform that second area?',
        },
        {
          kind: 'artwork',
          matchTitle: /love|grace|heart|faith|light|connection|unity/i,
          caption: 'Galatians 5:5–6 · Faith Working by Love',
        },
      ],
    },

    /* ─── Galatians 5:7–10 — A Little Leaven ──────────────────────────────── */
    {
      ref: 'Galatians 5:7–10',
      title: 'A Little Leaven Leaveneth the Whole Lump',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(7, t('Ye did run well; who did hinder you that ye should not obey the truth?')),
            verse(8, t('This persuasion cometh not of him that calleth you.')),
            verse(9, t('A '), hy('little leaven leaveneth the whole lump', 'greek-zymē'), t('.')),
            verse(10, t('I have confidence in you through the Lord, that ye will be none otherwise minded: but he that troubleth you shall bear his judgment, whosoever he be.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-leaven-image',
          html: 'Paul uses the image of leaven—yeast—which, though small, works invisibly through a whole batch of dough until the entire mass rises. A little compromise with legalism will spread. A small group of teachers saying, "Yes, believe in Christ, but also do this Law thing," will leaven the whole congregation. Before long, everyone is back in bondage. Paul is not being paranoid. History has proven him right repeatedly. One false doctrine, tolerated and unchallenged, grows and spreads until the whole church has lost its moorings.',
        },
        {
          kind: 'greek',
          id: 'greek-zymē',
          title: 'Zymē — &ldquo;Leaven&rdquo; or &ldquo;Yeast&rdquo;',
          script: 'ζύμη',
          translit: '<strong>zymē</strong> · leaven; yeast; a small amount of ferment that works silently through a whole mass',
          description: 'In Scripture, leaven is often a symbol of corruption or hidden influence. A little bit of leaven was enough to leaven the whole lump of dough for the Passover—which is why unleavened bread was commanded for the Feast of Unleavened Bread. Paul uses the metaphor to warn: a little false teaching spreads.',
        },
        {
          kind: 'carry',
          html: 'What small compromises have you made with truth? What small accommodations with doubt have you allowed into your thinking? The danger is that they seem insignificant at first. One person says, "Maybe Christ isn&apos;t quite enough for this area of my life. I need to add something." Then another. Then another. And before you know it, the whole community has shifted. Stand fast. Defend the faith—not aggressively, but clearly. The Gospel is not a democracy where every voice gets equal weight. Some voices teach the truth. Some teach lies. And the difference matters.',
        },
        {
          kind: 'reflection',
          id: 'gal5-leaven',
          prompt: 'What false teachings or small lies have you allowed to work their way into your thinking? What is one area where you need to be clearer about what you actually believe?',
        },
      ],
    },

    /* ─── Galatians 5:11–13 — Called unto Liberty ──────────────────────────── */
    {
      ref: 'Galatians 5:11–13',
      title: 'Called Unto Liberty',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(11, t('And I, brethren, if I yet preach circumcision, why do I yet suffer persecution? then is the offence of the cross done away.')),
            verse(12, t('I would they were even cut off which trouble you.')),
            verse(13, t('For, brethren, ye have been called unto '), hg('liberty; only use not liberty for an occasion to the flesh', 'c-liberty-flesh'), t(', but by love '), hy('serve one another', 'c-serve-love'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-liberty-flesh',
          html: 'Here is the tension Paul wants you to feel: you are free. Free from the Law. Free from the demand to justify yourself through your own efforts. But that freedom is not freedom to do whatever you want. It is freedom <em>from</em> slavery so that you can be free <em>for</em> a new master—Christ, and His purposes. The flesh (sarx), your human nature apart from the Spirit, will always try to turn liberty into license. "I&apos;m free, so I can indulge myself." But that is a lie. That is trading one slavery for another—the slavery to self-will and desire.',
        },
        {
          kind: 'commentary',
          id: 'c-serve-love',
          html: 'The corrective is not a new set of rules. It is love. "By love serve one another." The Law commanded you to love your neighbor—but you could (and did) obey that command with a resentful or legalistic heart. Love is not a law; it is a disposition. When you are freed from the Law, you are freed to ask, "How can I genuinely love this person? What do they need? What can I give?" Serving in love is voluntary, from the heart, because you have been loved by Christ and that love flows out of you into others.',
        },
        {
          kind: 'carry',
          html: 'You are free. That is the first truth. Do not let anyone, anything, turn you back into a slave to rules, to performance, to the approval of others. But you are not free to be selfish. You are not free to use your liberty as a cover for indulgence. You are free to love. To serve. To give. To put others&apos; needs ahead of your own. This is the paradox of Christian liberty: you are most free when you are bound to love, most alive when you are dying to self-will.',
        },
        {
          kind: 'reflection',
          id: 'gal5-called-liberty',
          prompt: 'In what ways have you tried to turn your Christian freedom into license? What would it look like to use your liberty as an occasion to love instead?',
        },
        {
          kind: 'artwork',
          matchTitle: /liberty|freedom|serve|love|giving|heart|light/i,
          caption: 'Galatians 5:13 · Called unto Liberty',
        },
      ],
    },

    /* ─── Galatians 5:14 — The Whole Law Fulfilled ────────────────────────── */
    {
      ref: 'Galatians 5:14',
      title: 'The Law Fulfilled in One Word',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(14, t('For all the law is fulfilled in one word, even in this; '), hp('Thou shalt love thy neighbour as thyself', 'christ-love-neighbor'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-law-fulfilled',
          html: 'This is the resolution of a tension that has been building since Chapter 1. Paul has made it clear that you cannot be justified by the Law. You cannot earn your way into God&apos;s family through obedience. But the Law itself is not abolished. It is fulfilled. In love. The entire weight and demand of the Law—all 613 commandments, all the statutes and ordinances—come down to this one word: love. Love God. Love your neighbor. If you love, you will not steal, you will not commit adultery, you will not murder, you will not covet. Love is the fulfillment of the Law because love is its entire aim.',
        },
        {
          kind: 'christ',
          id: 'christ-love-neighbor',
          title: 'Christ Connection — Love Is the Law&apos;s Fulfillment',
          html: 'Jesus said: "Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind. This is the first and great commandment. And the second is like unto it, Thou shalt love thy neighbour as thyself. On these two commandments hang all the law and the prophets" (Matthew 22:37–40). The Law was never meant to be an end in itself. It was meant to point toward a Lover and a love. And the Lover is Christ. The love is agapē. The Law said, "Do this, and live." Christ says, "I have done this for you. Be alive in me." The Law was the tutor. Christ is the freedom. And love is the fruit.',
        },
        {
          kind: 'carry',
          html: 'Let go of your scorecard. You have been keeping track: Did I do this right? Did I obey this rule? Did I measure up? Put it down. The Law is fulfilled not in your effort but in your love. Ask yourself today: Am I loving? Am I considering the needs of others? Am I giving? Am I forgiving? Am I patient? If the answer is yes, then in that moment, you are fulfilling the Law. You are living as God always intended. Not as a slave under compulsion, but as a child under love.',
        },
        {
          kind: 'reflection',
          id: 'gal5-love-neighbor',
          prompt: 'Who is your "neighbor"—the person or people closest to you right now? How would you love them if you were truly free from performance and fear?',
        },
      ],
    },

    /* ─── Galatians 5:15–18 — Walk in the Spirit ─────────────────────────── */
    {
      ref: 'Galatians 5:15–18',
      title: 'Walk in the Spirit',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(15, t('But if ye bite and devour one another, take heed that ye be not consumed one of another.')),
            verse(16, t('This I say then, '), hy('Walk in the Spirit, and ye shall not fulfil the lust of the flesh', 'greek-peripateō'), t('.')),
            verse(17, t('For '), hg('the flesh lusteth against the Spirit, and the Spirit against the flesh', 'c-flesh-spirit'), t(': and these are contrary the one to the other: so that ye cannot do the things that ye would.')),
            verse(18, t('But if ye be led of the Spirit, ye are not under the law.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-flesh-spirit',
          html: 'This is the central war of the Christian life. The flesh and the Spirit are not two aspects of the same self that can be reconciled. They are opposed. The flesh—your human nature apart from God, enslaved to fear and desire and self-protection—lusts against the Spirit. It wants to control, to dominate, to protect itself. The Spirit—God&apos;s own power living in you—wants to dispossess you of self, to make you a vessel of love, to reshape you into the likeness of Christ. These two powers cannot both be in control. You cannot simultaneously be directed by your own will and by the Holy Spirit. One or the other. And the Christian life is not a careful balance between them. It is submission to the Spirit, and crucifixion of the flesh.',
        },
        {
          kind: 'greek',
          id: 'greek-peripateō',
          title: 'Peripateō — &ldquo;to Walk&rdquo; (a way of life)',
          script: 'περιπατέω',
          translit: '<strong>peripateō</strong> · to walk; to conduct oneself; to live; to move about',
          description: 'In Hebrew thought, "walking" is not just physical movement but the metaphor for one&apos;s entire way of life. "Walk in the Spirit" means to conduct your entire life—your choices, your reactions, your responses—in submission to the Spirit. It is not a single decision but a constant orientation.',
        },
        {
          kind: 'carry',
          html: 'You have been made alive in Christ. The Spirit now dwells in you. But that indwelling presence is not coercive. You have a will. You can resist the Spirit. Every moment, you must choose: Will I walk in the direction the Spirit is leading, or in the direction my flesh is pulling? Will I trust His wisdom or my impulse? Will I let Him reshape my desires or will I cling to my own? This is not a one-time decision. It is the texture of every day. And when you find yourself bitten and devouring one another—quarreling, competing, destroying—stop. Repent. Ask the Spirit to take control again. He will. Every single time.',
        },
        {
          kind: 'reflection',
          id: 'gal5-walk-spirit',
          prompt: 'In what specific area of your life are you struggling between the flesh and the Spirit? What would it look like to walk in the Spirit rather than gratify the flesh in that area?',
        },
        {
          kind: 'artwork',
          matchTitle: /spirit|light|path|walk|fire|dove|breath|wind/i,
          caption: 'Galatians 5:16–18 · Walk in the Spirit',
        },
      ],
    },

    /* ─── Galatians 5:19–21 — Works of the Flesh ──────────────────────────── */
    {
      ref: 'Galatians 5:19–21',
      title: 'The Works of the Flesh',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(19, t('Now the '), hy('works of the flesh', 'c-flesh-works'), t(' are manifest, which are these; '), hg('Adultery, fornication, uncleanness, lasciviousness', 'c-flesh-sexual'), t(',')),
            verse(20, hg('Idolatry, witchcraft, hatred, variance, emulations, wrath, strife, seditions, heresies', 'c-flesh-relational'), t(',')),
            verse(21, hg('Envyings, murders, drunkenness, revellings, and such like', 'c-flesh-destructive'), t(': of the which I tell you before, as I have also told you in time past, that they which do such things shall not inherit the kingdom of God.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-flesh-works',
          html: 'Paul now catalogs the works of the flesh—not to condemn individual sins as if one is worse than another, but to make clear that when you live under the dominion of the flesh, a whole ecosystem of destruction grows. These are not accidental lapses. These are the fruit of a life organized around self-will rather than submission to God. And Paul is blunt: people who practice these things will not inherit the kingdom of God. Not because God is harsh, but because these works are incompatible with His kingdom. You cannot simultaneously be enslaved to lust and be free in Christ. You cannot simultaneously be full of envy and full of the joy of the Lord.',
        },
        {
          kind: 'commentary',
          id: 'c-flesh-sexual',
          html: 'Adultery, fornication, uncleanness, lasciviousness—these are the works of sexual disorder. Not merely the physical acts, but the desire that has become uncontrolled, the imagination that has become enslaved to fantasy, the heart that has disconnected sex from covenant and commitment. The flesh wants to reduce you to your appetites. To make you a slave to your body&apos;s demands. Paul does not say sexuality is evil. He says sexuality enslaved to self-will is destructive.',
        },
        {
          kind: 'commentary',
          id: 'c-flesh-relational',
          html: 'Hatred, variance (strife), emulations (jealousy), wrath, strife, seditions (divisions), heresies (splinterings)—these are the works of broken relationship. They are what happens when people organize themselves around self-interest rather than the good of the community. Idolatry is the root: when you worship anything other than God—your success, your image, your power—you will sacrifice others to protect it. Witchcraft is the attempt to control through hidden means. All of these are the opposite of the unity, peace, and love that the Spirit produces.',
        },
        {
          kind: 'commentary',
          id: 'c-flesh-destructive',
          html: 'Envyings (wanting what others have), murders (the endpoint of hatred), drunkenness (the loss of self-control), revellings (wild partying)—these are the works of a life unmoored from any transcendent purpose. They are enjoyable in the moment, but they leave destruction in their wake. And Paul adds "and such like"—he is not trying to be exhaustive. He is showing you the pattern. When the flesh rules, destruction follows.',
        },
        {
          kind: 'carry',
          html: 'Look at this list. Not to shame yourself, but to see clearly. Where do you find yourself? Every human being struggles with some of these—the desire for control, the moment of anger, the envy of another&apos;s success, the indulgence that feels harmless. The question is not whether you have ever felt these impulses. The question is whether you are letting them rule. If you find yourself trapped in a pattern of these works, you have slipped out of the Spirit&apos;s control and back into the flesh&apos;s dominion. Repent. Turn. Ask the Spirit to take back the throne. He will.',
        },
        {
          kind: 'reflection',
          id: 'gal5-flesh-works',
          prompt: 'Which of these works of the flesh are you most prone to? What would need to change for the Spirit to rule that area instead of the flesh?',
        },
      ],
    },

    /* ─── Galatians 5:22–23 — Fruit of the Spirit ──────────────────────────── */
    {
      ref: 'Galatians 5:22–23',
      title: 'The Fruit of the Spirit',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(22, t('But the '), hy('fruit of the Spirit', 'greek-karpos'), t(' is '), hg('love, joy, peace, longsuffering, gentleness, goodness, faith', 'c-fruit-first'), t(',')),
            verse(23, hg('meekness, temperance', 'c-fruit-last'), t(': against such there is no law.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-fruit-first',
          html: 'Love (agapē)—the outpouring of self-sacrificial love, the willingness to give for the good of another. Joy (chara)—not happiness dependent on circumstances, but deep gladness rooted in the presence and purposes of God. Peace (eirēnē)—not the absence of conflict, but the deep settledness of a heart at rest in God. Longsuffering (makrothymia)—patience, the capacity to bear with others without losing your composure or your love. Gentleness (chrestotēs)—kindness, the quality of being pleasant and easy to be around. Goodness (agathōsynē)—active benevolence, the doing of good. Faith (pistis)—not just intellectual belief, but trustworthiness, reliability, fidelity.',
        },
        {
          kind: 'greek',
          id: 'greek-karpos',
          title: 'Karpos — &ldquo;Fruit&rdquo;',
          script: 'καρπός',
          translit: '<strong>karpos</strong> · fruit; the natural product that grows from a tree or plant; the result or outcome of labor',
          description: 'Paul does not say "the commands of the Spirit" or "the disciplines of the Spirit." He says "fruit." Fruit is not forced. It grows. It is the natural product of a healthy tree. If you are rooted in Christ, if the Spirit has claim over your life, then love, joy, peace—these will grow naturally. You will not have to manufacture them. They will flow out of you like sap through branches.',
        },
        {
          kind: 'commentary',
          id: 'c-fruit-last',
          html: 'Meekness (prautēs)—not weakness or spinelessness, but strength under control, the capacity to endure wrong without retaliation. Temperance (egkrateia)—self-control, the capacity to govern your appetites and desires by the Spirit rather than being governed by them. These are not nine separate virtues you are supposed to develop in isolation. They are the character of a single Spirit—the Spirit of Christ—working in you. When you are filled with the Spirit, you become, in miniature, what Jesus is.',
        },
        {
          kind: 'carry',
          html: 'Notice what is not on this list: no one is condemning you for not being joyful enough, not patient enough, not good enough. "Against such there is no law." There is no law that says, "Thou shalt be patient with a minimum quota." The fruit of the Spirit is not something you are graded on. It is something that grows. Your job is not to manufacture these virtues. Your job is to remain in the Spirit, to let Him reshape your desires, to open yourself to His work. And as you do, joy will grow. Peace will deepen. Love will expand. Not because you are trying harder, but because you are being transformed.',
        },
        {
          kind: 'reflection',
          id: 'gal5-fruit-spirit',
          prompt: 'Which of the fruit of the Spirit is most visible in your life? Which is most absent? What might it take for that absent fruit to begin to grow?',
        },
        {
          kind: 'artwork',
          matchTitle: /fruit|tree|harvest|growth|vineyard|vine|abundance|flourish/i,
          caption: 'Galatians 5:22–23 · The Fruit of the Spirit',
        },
      ],
    },

    /* ─── Galatians 5:24–25 — Crucified the Flesh ────────────────────────── */
    {
      ref: 'Galatians 5:24–25',
      title: 'They That Are Christ&apos;s Have Crucified the Flesh',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(24, t('And they that are Christ&apos;s have '), hp('crucified the flesh with the affections and lusts', 'christ-crucify-flesh'), t('.')),
            verse(25, t('If we live in the Spirit, '), hy('let us also walk in the Spirit', 'c-walk-consistency'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-walk-consistency',
          html: 'This is Paul&apos;s final word on the matter: if the Spirit has given you life, then live in consistency with that life. If you are alive to God in Christ, then your walking—your daily conduct, your choices, your words—should reflect that. Do not say one thing and do another. Do not claim to be in the Spirit while organizing your life around the flesh. Let your outer life correspond to your inner reality.',
        },
        {
          kind: 'greek',
          id: 'greek-stauros-sarx',
          title: 'Staurōō · &ldquo;to Crucify&rdquo;; Sarx · &ldquo;the Flesh&rdquo;',
          script: 'σταυρόω; σάρξ',
          translit: '<strong>staurōō</strong> · to crucify; to put to death on a cross · <strong>sarx</strong> · the flesh; human nature enslaved to sin; the appetitive self',
          description: 'To crucify the flesh is not to annihilate the body. The body is God&apos;s handiwork and will be redeemed. It is to execute the claim of the flesh—the demand that you satisfy your appetites, protect yourself, prove yourself, glorify yourself. That old self, that creature of desire and fear, has been crucified. You died. Now you are alive in Christ.',
        },
        {
          kind: 'christ',
          id: 'christ-crucify-flesh',
          title: 'Christ Connection — Union with Christ&apos;s Cross',
          html: 'Paul wrote earlier: "I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me: and the life which I now live in the flesh I live by the faith of the Son of God, who loved me, and gave himself for me" (Galatians 2:20). When Jesus hung on the cross, He bore your condemnation. But more than that: you hung there too. In God&apos;s sight, the old you—the self-seeking, self-protecting, self-justifying you—died. What remains is Christ. Romans 6:6 says, "Knowing this, that our old man is crucified with him, that the body of sin might be destroyed, that henceforth we should not serve sin." You are not waiting for your flesh to die. It has already been executed. The question is whether you will live in light of that reality or deny it.',
        },
        {
          kind: 'carry',
          html: 'You are dead. That might sound dark, but it is the most liberating word that has ever been spoken to you. You died when Christ died. The you that was enslaved to fear, to the need to perform, to the demand to be sufficient—that you is gone. You are alive now only in Christ. And that means you are free. Free from having to prove yourself. Free from having to protect yourself. Free from the tyranny of your own will. You can die to your agenda because your life is no longer yours. It is His. And that is the most alive you will ever be.',
        },
        {
          kind: 'reflection',
          id: 'gal5-crucified-flesh',
          prompt: 'What part of the "old you" most needs to stay dead? What would it look like to live fully from the reality that you have already been crucified with Christ?',
        },
        {
          kind: 'artwork',
          matchTitle: /cross|crucify|death|resurrection|light|victory|alive|life/i,
          caption: 'Galatians 5:24–25 · Crucified with Christ',
        },
      ],
    },

    /* ─── Galatians 5:26 — Not Consumed by Vanity ──────────────────────────── */
    {
      ref: 'Galatians 5:26',
      title: 'Not Desirous of Vain Glory',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            verse(26, t('Let us not be desirous of vain glory, provoking one another, envying one another.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-vain-glory',
          html: 'This is the final exhortation. Do not measure yourself against your brothers and sisters. Do not compete. Do not envy. Do not provoke. The flesh loves to create a hierarchy: I am better than you; I am more righteous, more gifted, more worthy. But in the Spirit, there is no hierarchy. You are all dead. You are all alive only in Christ. Vain glory—the empty, hollow pursuit of being seen as superior—is incompatible with that reality. When you are crucified with Christ, there is nothing left to glorify except Him.',
        },
        {
          kind: 'carry',
          html: 'This week, notice the moments when you are trying to prove yourself. Notice when you are comparing yourself to others. Notice when you are competing, even in small ways. In those moments, remember: the old you is dead. You do not need to prove anything. You are not in competition. You are not better or worse than your neighbor. You are alive in Christ, and so is he, and so is she. That is enough. That is everything.',
        },
        {
          kind: 'reflection',
          id: 'gal5-vain-glory',
          prompt: 'In what ways are you still seeking vain glory—approval, status, being seen as superior? What would change if you truly believed you were already fully seen, fully known, and fully loved by God?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Stand fast therefore in the liberty wherewith Christ hath made us free, and be not entangled again with the yoke of bondage.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Galatians 5 · Study Guide',
  },

  hasHebrew: false,
};
