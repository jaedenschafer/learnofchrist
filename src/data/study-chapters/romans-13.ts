import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Romans 13 — Submission to Authority and the Law of Love
 *
 * "Let every soul be subject unto the higher powers." Authority is ordained
 * by God. "Owe no man any thing, but to love one another: for he that loveth
 * another hath fulfilled the law. Put ye on the Lord Jesus Christ."
 */
export const ROMANS_13: RichChapterContent = {
  bookSlug: 'romans',
  bookName: 'Romans',
  chapter: 13,

  estimatedMinutes: { beginner: 8, intermediate: 14, deep: 20 },
  intros: [
    'Paul writes Romans 13 while living under Nero&apos;s rule—a tyrant who would later execute him[res:theoi-tacitus-annals-early-christians]. Yet he tells believers to submit to authority as ordained by God. This is not a blanket endorsement of every ruler. It is a statement that authority itself, the principle of divinely-ordered rule that restrains evil and rewards good, is part of God&apos;s design. The tension is real: you owe submission to civil order, yet you owe a higher submission to God&apos;s conscience and His law.',
    'But submission to authority is not the final word. Above it rises something higher: love. Love your neighbor as yourself—this is the fulfillment of all law. Every commandment, Paul says, hangs on love. When you love, you will not steal, lie, murder, or covet. Love does no ill. Love is the law&apos;s completion.',
    'The chapter ends with urgency. The night is far spent; the day is at hand. Wake up from slumber. Cast off the works of darkness. Clothe yourself in Christ as you would put on armor. The day is coming. You are not waiting passively—you are waking, arming yourself with His righteousness, moving toward Him with clear eyes.',
  ],

  sections: [
    /* ─── Romans 13:1 — Let Every Soul Be Subject ────────────────────────── */
    {
      ref: 'Romans 13:1',
      title: 'Authority Is Ordained by God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 1,
              spans: [
                t('Let every soul be subject unto the '),
                hp('higher powers', 'christ-authority'),
                t('. For there is no power but of God: the '),
                hy('powers that be are ordained of God', 'c-exousia'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-exousia',
          html:
            'Paul does not say that every ruler is righteous or that all authority deserves uncritical obedience. He says that authority itself—the structure God has put in place to restrain chaos and evil—comes from God. A ruler&apos;s power is delegated. It is not ultimate. Even a pagan emperor holds his seat by divine permission.',
        },
        {
          kind: 'greek',
          id: 'rom13-exousia',
          title: 'Exousia — Authority, Dominion',
          script: 'ἐξουσία',
          translit: '<strong>exousia</strong> · authority; power; right to rule; delegated authority',
          description:
            'Exousia is not absolute power. It is delegated authority—power granted by a higher source. When Paul says "the powers that be are ordained of God," he is asserting that no ruler holds ultimate authority. All earthly power is answerable to God.',
        },
        {
          kind: 'christ',
          id: 'christ-authority',
          title: 'Christ Connection — The Authority Above All',
          html:
            'Paul declares that Christ has been given "all authority in heaven and in earth" (Matt. 28:18). He is the one to whom every authority on earth is answerable. When you submit to earthly authority as ordained by God, you are ultimately submitting to the order Christ Himself sustains. "For by him were all things created... and by him all things consist" (Col. 1:16–17).',
        },
        {
          kind: 'carry',
          html:
            'You live under authority—civil law, an employer, a government. Submission is not weakness; it is recognizing that God has built order into the world for our protection. Yet never forget that all earthly authority answers to a higher one. Your ultimate allegiance is to Christ. When earthly rulers demand what Christ forbids, you are free—no, obligated—to obey God rather than man.',
        },
        {
          kind: 'reflection',
          id: 'rom13-authority',
          prompt: 'Where in your life do you struggle with submission to authority? What changes if you see that authority as ordained by God, not ultimate in itself?',
        },
      ],
    },

    /* ─── Romans 13:2–3 — Resistance and Conscience ────────────────────────── */
    {
      ref: 'Romans 13:2–3',
      title: 'Conscience and Not Wrath Alone',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 2,
              spans: [
                t('Whosoever therefore resisteth the power, resisteth the ordinance of God: and they that resist shall receive to themselves '),
                hg('damnation', 'c-kritis'),
                t('.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('For rulers are not a terror to '),
                hy('good works', 'c-agathos'),
                t(', but to the evil. Wilt thou then not be afraid of the power? do that which is good, and thou shalt have praise of the same:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-kritis',
          html:
            'The word for "damnation" here is <em>krisis</em>, judgment. Those who resist authority without cause bring judgment upon themselves. But Paul assumes a reader with a functioning conscience—someone who will distinguish between a law that serves God&apos;s order and one that contradicts it.',
        },
        {
          kind: 'commentary',
          id: 'c-agathos',
          html:
            'Paul&apos;s premise is stunning: rulers are designed to reward good and punish evil. This is their divine purpose. When a ruler rewards evil and punishes good, the divine design is inverted. Yet even then, Paul&apos;s counsel is not rebellion but a clear conscience: do good, and trust God to vindicate you.',
        },
        {
          kind: 'greek',
          id: 'rom13-hupotasso',
          title: 'Hupotassō — Submit, Be Subject To',
          script: 'ὑποτάσσω',
          translit: '<strong>hupotassō</strong> · submit; be subject to; place under; subordinate[res:sefaria-greek-hupotasso]',
          description:
            'The word carries the sense of arranging oneself under an order, not out of coercion but out of recognition of proper hierarchy. It is used elsewhere of creation submitting to God, and of believers submitting to one another in love. Submission is not slavery; it is alignment with order.',
        },
        {
          kind: 'greek',
          id: 'rom13-suneidesis',
          title: 'Suneidesis — Conscience',
          script: 'συνείδησις',
          translit: '<strong>suneidesis</strong> · conscience; inner witness; awareness of right and wrong',
          description:
            'Conscience is not the final authority for Paul—Scripture is. But conscience is your inner witness to what is right. A Christian submits to authority while keeping a clear conscience before God, knowing there are lines that authority cannot cross.',
        },
        {
          kind: 'carry',
          html:
            'Submit to authority not out of fear of punishment but out of respect for God&apos;s order and your own clear conscience. If a ruler asks you to do evil, your conscience—your witness to God&apos;s law—is your shield. You can respect authority and still refuse to sin. Doing good is always the safer path, and God honors those who choose it.',
        },
        {
          kind: 'reflection',
          id: 'rom13-conscience',
          prompt: 'Is there a command or pressure from authority that makes your conscience uneasy? What does it mean to "do good" in that situation, even if it brings friction?',
        },
      ],
    },

    /* ─── Romans 13:4–5 — Ministers of God ────────────────────────────────── */
    {
      ref: 'Romans 13:4–5',
      title: 'Rulers as God&apos;s Servants',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 4,
              spans: [
                t('For he is the minister of God to thee for good. But if thou doest that which is evil, be afraid; for he '),
                hg('beareth not the sword in vain', 'c-sword'),
                t(': for he is the minister of God, a revenger to execute wrath upon him that doeth evil.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Wherefore ye must needs be subject, not only for '),
                hy('wrath', 'rom13-wrath'),
                t(', but also for '),
                hy('conscience sake', 'rom13-conscience-sake'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-sword',
          html:
            'The sword is the symbol of authority to enforce justice and restrain evil. Paul does not say the sword is wrongly wielded. He says its purpose is to execute wrath on evildoing. A ruler who refuses this responsibility has abdicated the divine office. A ruler who misuses the sword—rewarding evil and punishing good—has perverted it.',
        },
        {
          kind: 'commentary',
          id: 'rom13-wrath',
          html:
            'You obey authority not only because you fear punishment ("for wrath"). Fear alone is a thin reason. It makes you a slave in your heart.',
        },
        {
          kind: 'commentary',
          id: 'rom13-conscience-sake',
          html:
            'But you also obey "for conscience sake"—because your own inward witness tells you that order, justice, and the restraint of evil are good things. Conscience gives obedience dignity. It makes you a free person who chooses submission because it is right.',
        },
        {
          kind: 'carry',
          html:
            'Obedience rooted only in fear is fragile. But obedience rooted in your own conviction that order and justice are good things—that is solid. Your conscience and God&apos;s law align. When you submit to a just law, you are not bending to force; you are choosing what your own heart affirms.',
        },
        {
          kind: 'reflection',
          id: 'rom13-why-obey',
          prompt: 'What laws or structures of authority do you obey because you actually believe they&apos;re just and good, not just because you fear punishment?',
        },
      ],
    },

    /* ─── Romans 13:6–7 — Render Unto All Their Dues ────────────────────────– */
    {
      ref: 'Romans 13:6–7',
      title: 'Render to All Their Dues',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 6,
              spans: [
                t('For for this cause pay ye '),
                hg('tribute also', 'c-tribute'),
                t(': for they are God&apos;s ministers, attending continually upon this very thing.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Render therefore to all their dues: '),
                hy('tribute to whom tribute is due', 'c-opheilete'),
                t('; custom to whom custom; fear to whom fear; '),
                hp('honour to whom honour', 'c-honor'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-tribute',
          html:
            'Paul tells believers to pay taxes to Rome—the very government that will eventually persecute the church. He does not qualify this with "unless the government is wicked." He roots it in principle: rulers depend on tribute to carry out their function[res:theoi-pliny-trajan-letters]. The money you pay sustains the order that protects you and restrains evil.',
        },
        {
          kind: 'commentary',
          id: 'c-opheilete',
          html:
            'Paul uses the language of debt. You owe various things to different people according to their station: taxes to the government, respect to civil order, honor to those placed over you. These are not burdens grudgingly given. They are dues—what is rightly owed.',
        },
        {
          kind: 'greek',
          id: 'rom13-opheilo',
          title: 'Opheilo — Owe, Be Obligated',
          script: 'ὀφείλω',
          translit: '<strong>opheilo</strong> · owe; be indebted; be obligated to give',
          description:
            'To owe is to be bound by a real obligation. Paul frames submission not as a grudging concession to fear but as a genuine debt—what is genuinely owed to those in authority.',
        },
        {
          kind: 'christ',
          id: 'c-honor',
          title: 'Christ Connection — Honor Given, Honor Received',
          html:
            'Paul speaks of rendering honor to whom honor is due. Jesus taught His disciples to sit at His feet and learn, to wash one another&apos;s feet, to honor the lowly. Yet He also said, "If any man serve me, him will my Father honour" (John 12:26). Honor is not withheld from rulers; it is also freely given to the humble. The economy of honor in the kingdom inverts worldly measures—but honor itself is sacred.',
        },
        {
          kind: 'carry',
          html:
            'Pay what you owe: your taxes, your respect, your obedience where it is just. This is not degrading. It is honest. You live in a community held together by mutual obligation. When you honor those placed over you and fulfill your civic duties, you are upholding the order God has established for everyone&apos;s good.',
        },
        {
          kind: 'reflection',
          id: 'rom13-dues',
          prompt: 'What "dues" do you owe to authority—financial, relational, respectful? Are you holding any of them back, and why?',
        },
      ],
    },

    /* ─── Romans 13:8 — Owe No Man Anything But Love ───────────────────────– */
    {
      ref: 'Romans 13:8',
      title: 'Owe No Man Anything But Love',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 8,
              spans: [
                t('Owe no man any thing, but to '),
                hp('love one another', 'christ-love-debt'),
                t(': for he that loveth another hath fulfilled the '),
                hy('law', 'rom13-nomos'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom13-debt-love',
          html:
            'Every other debt can be paid and discharged. You settle your tax bill. You pay your creditor. You fulfill your legal obligation. But love is different. Love is a perpetual debt. You never finish paying it. Every day you owe your neighbor fresh love. Every moment opens a new opportunity to love, and love seizes it.',
        },
        {
          kind: 'greek',
          id: 'rom13-nomos',
          title: 'Nomos — Law',
          script: 'νόμος',
          translit: '<strong>nomos</strong> · law; the commandments; the written will of God',
          description:
            'The law is fulfilled not through meticulous observance of every statute but through love. Love is the spirit that animates the law. When you love, all the law&apos;s requirements—do not steal, do not lie, do not murder—flow naturally from your heart.',
        },
        {
          kind: 'christ',
          id: 'christ-love-debt',
          title: 'Christ Connection — Love as Our Eternal Debt',
          html:
            'Jesus taught His disciples, "A new commandment I give unto you, That ye love one another; as I have loved you, that ye also love one another" (John 13:34). His love was not a debt He owed—it was a gift He gave freely. Yet He made love the commandment that defines all Christian life. When you owe love as an endless debt, you are echoing His example. You are living in the flow of the love He first poured out.',
        },
        {
          kind: 'carry',
          html:
            'You may have paid every bill, honored every obligation, rendered to Caesar what is Caesar&apos;s. But your truest debt—the one that never ends—is love. Think of someone in your orbit right now. That person is owed your love today, tomorrow, next week. Love is the debt that keeps growing because each act of love opens a new occasion for love.',
        },
        {
          kind: 'reflection',
          id: 'rom13-love-debt',
          prompt: 'Toward whom do you feel you&apos;ve "paid your dues" and now owe nothing? What would it look like to see them as still owed your love?',
        },
      ],
    },

    /* ─── Romans 13:9–10 — Love Fulfills the Law ──────────────────────────── */
    {
      ref: 'Romans 13:9–10',
      title: 'Love Fulfills All the Law',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 9,
              spans: [
                t('For this, Thou shalt not commit adultery, Thou shalt not kill, Thou shalt not steal, Thou shalt not bear false witness, Thou shalt not covet; and if there be any other commandment, it is briefly comprehended in this saying, namely, '),
                hg('Thou shalt love thy neighbour as thyself', 'c-love-neighbor'),
                t('.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Love worketh no ill to his neighbour: therefore '),
                hp('love is the fulfilling of the law', 'christ-love-fulfills'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-love-neighbor',
          html:
            'Paul does not erase the commandments. He shows their depth. Do not commit adultery—why? Because you love your neighbor, and you would not betray her trust. Do not steal—because you love your neighbor[res:sefaria-leviticus-19-18], and you would not take what is theirs. Do not bear false witness—because love demands truth. All the law&apos;s restrictions are guardrails around love.',
        },
        {
          kind: 'commentary',
          id: 'c-love-no-ill',
          html:
            '"Love worketh no ill to his neighbour." Love is not a feeling that comes and goes. It is a principle of action. When you love, you do not harm. You do not cheat. You do not envy. The commandments that restrain evil are all fulfilled in love because love naturally recoils from doing ill.',
        },
        {
          kind: 'christ',
          id: 'christ-love-fulfills',
          title: 'Christ Connection — Love as the Law&apos;s Fulfillment',
          html:
            'Jesus was asked which was the greatest commandment. He replied: "Thou shalt love the Lord thy God with all thy heart... And the second is like unto it, Thou shalt love thy neighbour as thyself. On these two commandments hang all the law and the prophets" (Matt. 22:37–40). All the law hangs on love. Christ fulfilled the law not by checking off every statute but by perfectly loving God and neighbor. When you move toward Him, you move toward the law&apos;s fulfillment.',
        },
        {
          kind: 'carry',
          html:
            'You do not need a rulebook to tell you not to steal from someone you love. You do not need a law to forbid you from lying to someone you genuinely care for. Love writes the law on your heart. If you are struggling with the rules—what you can and cannot do—ask yourself whether you truly love the person affected by your choice. Love will answer.',
        },
        {
          kind: 'reflection',
          id: 'rom13-law-love',
          prompt: 'Where do you find the commandments hard to keep? What would change if you approached that area not as rule-following but as an expression of love?',
        },
      ],
    },

    /* ─── Romans 13:11 — Now It Is High Time to Awake ────────────────────── */
    {
      ref: 'Romans 13:11',
      title: 'The High Time to Awake',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 11,
              spans: [
                t('And that, knowing the time, that now it is '),
                hg('high time to awake out of sleep', 'c-awake'),
                t(': for now is our salvation nearer than when we believed.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-awake',
          html:
            'Paul is not speaking to the weary. He is speaking to the spiritually asleep—those who have drifted into complacency, forgotten the nearness of Christ, begun to live as if this world were permanent. The Christian life is not a stupor. It is a constant, alert watchfulness. The day is nearer now than it was when you first believed. Stay awake.',
        },
        {
          kind: 'greek',
          id: 'rom13-kairos',
          title: 'Kairos — The Season, the Critical Hour',
          script: 'καιρός',
          translit: '<strong>kairos</strong> · the opportune moment; the season; the critical hour',
          description:
            'Kairos is not mere time passing. It is the moment charged with meaning and urgency. Paul says "knowing the kairos"—understanding that this is the moment, that history is moving toward its climax, that your time is now.',
        },
        {
          kind: 'carry',
          html:
            'Sleep is a luxury you cannot afford in this season. Not sleep of the body, but sleep of the soul—drifting along, letting the current carry you, forgetting why you believed. Your salvation is nearer now than when you first woke to Christ. That nearness should sharpen your senses, clarify your sight, quicken your pace.',
        },
        {
          kind: 'reflection',
          id: 'rom13-awake',
          prompt: 'Where in your life have you drifted into spiritual sleep—going through motions, forgetting your first love? What would it take to awake?',
        },
      ],
    },

    /* ─── Romans 13:12 — The Night Is Far Spent ───────────────────────────── */
    {
      ref: 'Romans 13:12',
      title: 'Cast Off Darkness, Put On Light',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 12,
              spans: [
                t('The night is far spent, the day is at hand: let us therefore cast off the works of '),
                hy('darkness', 'rom13-darkness'),
                t(', and let us put on the '),
                hy('armour of light', 'rom13-armor'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom13-darkness',
          html:
            'Darkness here is not ignorance alone. It is the active works of sin: the things done in secret, the deeds one would hide if light were shone on them. Paul calls you to shed them like a worn garment. Not to make a show of repentance before others, but to disrobe from sin itself.',
        },
        {
          kind: 'commentary',
          id: 'rom13-armor',
          html:
            'Light is not weakness. It is armor. The metaphor is military. As a soldier puts on protective gear, you put on light. Light is your shield against the works of darkness. It is your protection and your weapon both.',
        },
        {
          kind: 'greek',
          id: 'rom13-hopla',
          title: 'Hopla — Weapons, Armor',
          script: 'ὅπλα',
          translit: '<strong>hopla</strong> · weapons; armor; implements of war',
          description:
            'Armor of light—it sounds paradoxical until you remember that in Scripture, light is always active and protective. It is not passive illumination. It is the force of truth, righteousness, and Christ Himself arrayed against darkness.',
        },
        {
          kind: 'carry',
          html:
            'There are things you are still holding onto—habits, secrets, small compromises with darkness. They feel safe because they are hidden. But the day is at hand. Bring them to light. Not to shame yourself, but to shed them. Replace them with the light of Christ. What you do in the daylight, without apology, without hiding—that is your true armor.',
        },
        {
          kind: 'reflection',
          id: 'rom13-darkness',
          prompt: 'What "works of darkness" do you still cherish in secret? What would it cost to bring them to light and cast them off?',
        },
      ],
    },

    /* ─── Romans 13:13 — Let Us Walk Honestly ─────────────────────────────── */
    {
      ref: 'Romans 13:13',
      title: 'Walk Honestly as in the Day',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 13,
              spans: [
                t('Let us walk '),
                hg('honestly, as in the day', 'c-honestly'),
                t('; not in rioting and drunkenness, not in chambering and wantonness, not in strife and envying.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-honestly',
          html:
            'To walk honestly is to walk so that your life bears the light of day. Not hiding, not ashamed, not qualifying your behavior depending on who is watching. The vices Paul lists—rioting, drunkenness, sexual excess, quarreling, envy—are not sins because the law forbids them. They are sins because they are unworthy of someone clothed in light, someone walking toward Christ.',
        },
        {
          kind: 'commentary',
          id: 'rom13-vices',
          html:
            'The catalog of vices is specific: riot and drunkenness (loss of self-control), sexual sin (misuse of the body and another&apos;s body), strife and envy (division and covetousness). These are not abstract rules. They are poisons that seep into a community and rot it from within. To abstain from them is to be a healer, not a poison.',
        },
        {
          kind: 'carry',
          html:
            'How would your day be different if you lived it as if daylight never left? As if everything you did were visible, held up to the light of Christ? That is what "honestly, as in the day" means. Not a performance for others, but a life lived with nothing hidden because there is nothing to hide.',
        },
        {
          kind: 'reflection',
          id: 'rom13-honest',
          prompt: 'What behavior would you drop immediately if you truly lived "as in the day"—with nothing hidden? Why are you still doing it?',
        },
      ],
    },

    /* ─── Romans 13:14 — Put On the Lord Jesus Christ ──────────────────────── */
    {
      ref: 'Romans 13:14',
      title: 'Put On the Lord Jesus Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            {
              number: 14,
              spans: [
                t('But '),
                hp('put ye on the Lord Jesus Christ', 'christ-put-on'),
                t(', and make not provision for the flesh, to fulfil the lusts thereof.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom13-put-on-christ',
          html:
            'To put on Christ is the positive act that replaces all the casting off and shedding. It is not enough to stop sinning. You must be clothed in someone. That someone is Jesus. You take Him on like a garment, like armor, like an identity. His righteousness becomes your visible self.',
        },
        {
          kind: 'commentary',
          id: 'rom13-provision',
          html:
            'To "make not provision for the flesh" is to stop planning how to satisfy its desires. It is to stop leaving money in the account, so to speak. Every choice you make either moves you toward Christ or toward the flesh. There is no neutral ground. You are either provisioning one master or the other.',
        },
        {
          kind: 'greek',
          id: 'rom13-endusasthe',
          title: 'Endusasthe — Put On, Clothe Yourself',
          script: 'ἐνδύσασθε',
          translit: '<strong>endusasthe</strong> · put on; clothe yourself; be dressed in',
          description:
            'This is not a gentle suggestion. It is an imperative. Put Him on. Clothe yourself completely in Christ. Make Him your covering, your protection, your identity in the world.',
        },
        {
          kind: 'christ',
          id: 'christ-put-on',
          title: 'Christ Connection — Clothed in Righteousness',
          html:
            'Paul writes elsewhere, "For as many of you as have been baptized into Christ have put on Christ" (Gal. 3:27). Baptism is the outward sign of putting on Christ. But it is not a one-time event. You put Him on each day. "I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me" (Gal. 2:20). This is what it means to be clothed in the Lord Jesus Christ—His life becomes yours. His righteousness becomes your armor.',
        },
        {
          kind: 'carry',
          html:
            'Stop planning how to gratify the flesh. That is a waste of your energy and a betrayal of your baptism. Instead, ask yourself each morning: How am I going to put on Christ today? In what situation will I wear Him visibly? In what choice will I let His character, His patience, His love be my covering? By evening, you will have lived not as the old self but as His body in the world.',
        },
        {
          kind: 'reflection',
          id: 'rom13-put-on',
          prompt: 'What does it look like, practically, to "put on the Lord Jesus Christ" in your day—at work, at home, in a conflict? Name one concrete way.',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Put ye on the Lord Jesus Christ, and make not provision for the flesh, to fulfil the lusts thereof.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Romans 13 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-leviticus-19-18',
      kind: 'study',
      source: 'Sefaria',
      label: 'Leviticus 19:18 — Thou shalt love thy neighbour',
      url: 'https://www.sefaria.org/Leviticus.19.18',
      description: 'The Torah root of the love commandment that Paul quotes and fulfills through Christ.',
    },
    {
      id: 'theoi-pliny-trajan-letters',
      kind: 'archive',
      source: 'Theoi Classical Texts',
      label: 'Pliny the Younger, Letters Book 10',
      url: 'https://www.theoi.com/Text/PlinyYounger.html',
      description: 'First-century Roman official&apos;s correspondence with Emperor Trajan on Christians and civic authority.',
    },
    {
      id: 'sefaria-greek-hupotasso',
      kind: 'study',
      source: 'Sefaria',
      label: 'Hupotassō — Submit, Obey',
      url: 'https://www.sefaria.org/texts',
      description: 'Etymology and usage of the Greek word Paul uses for submission to authority.',
    },
    {
      id: 'theoi-tacitus-annals-early-christians',
      kind: 'archive',
      source: 'Theoi Classical Texts',
      label: 'Tacitus on Christians under Nero',
      url: 'https://www.theoi.com/Text/TacitusAnnals.html',
      description: 'Roman historian&apos;s account of early Christian persecution under imperial rule.',
    },
  ],

  hasHebrew: false,
};
