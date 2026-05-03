import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Romans 7 — The Law and the Flesh
 *
 * Paul describes the inner conflict: "What I would, that do I not; but what
 * I hate, that do I." The law is holy, but the flesh is weak. "O wretched
 * man that I am! who shall deliver me from the body of this death? I thank
 * God through Jesus Christ our Lord."
 */
export const ROMANS_7: RichChapterContent = {
  bookSlug: 'romans',
  bookName: 'Romans',
  chapter: 7,

  estimatedMinutes: { beginner: 6, intermediate: 11, deep: 16 },
  intros: [
    'Romans 7 is the most painfully honest chapter in the New Testament about the war inside. Paul describes what every believer feels: I want to do good, but evil is present with me. I delight in God&apos;s law, but sin dwells in my members. This is not the cry of someone who has never met Jesus. It is the cry of someone who loves Him desperately and yet finds themselves enslaved to habits and appetites they despise.',
    'The chapter unfolds in three movements. First, the law is good—holy, just, good—yet it reveals sin rather than fixing it. Second, the conflict: the law is spiritual, but I am carnal, sold under sin. The will desires good; the flesh does evil. Third, the cry of deliverance: "O wretched man that I am! who shall deliver me from the body of this death? I thank God through Jesus Christ our Lord." The answer is not a new law, not more willpower, but grace.',
    'Romans 7 is the church&apos;s permission to be honest about the gap between who we want to be and who we are. It is the doorway to chapter 8, where that deliverance begins to take real form.',
  ],

  sections: [
    /* ─── Romans 7:1–6 — Married to a New Husband ─────────────────────────────── */
    {
      ref: 'Romans 7:1–6',
      title: 'Freed From the Law',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(1, 'Know ye not, brethren, (for I speak to them that know the law,) how that the law hath dominion over a man as long as he liveth?'),
            plain(2, 'For the woman which hath an husband is bound by the law to her husband so long as he liveth; but if the husband be dead, she is loosed from the law of her husband.'),
            plain(3, 'So then if, while her husband liveth, she be married to another man, she shall be called an adulteress: but if her husband be dead, she is free from that law; so that she is no adulteress, though she be married to another man.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom7-marriage-law',
          html:
            'Paul uses marriage law as a picture: a woman is bound to her husband until death. Once he dies, she is free to marry another without violating the law. It is a simple, concrete truth that the ancient reader understood in their bones. The law has authority only over the living.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(4, 'Wherefore, my brethren, ye also are become dead to the law by the body of Christ; that ye should be married to another, even to him who is raised from the dead, that we should bring forth fruit unto God.'),
            plain(5, 'For when we were in the flesh, the motions of sins, which were by the law, did work in our members to bring forth fruit unto death.'),
            plain(6, 'But now we are delivered from the law, that being dead wherein we were held; that we should serve in newness of spirit, and not in the oldness of the letter.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom7-dead-to-law',
          html:
            'This is the pivot: you have died to the law—not to God&apos;s will, but to the law as your master—through Christ&apos;s body on the cross. You are free now to be married to the risen Jesus. The old marriage (you and the law) ended. The new marriage (you and Christ) has begun. The fruit of the first was death. The fruit of the second is life.',
        },
        {
          kind: 'christ',
          id: 'rom7-christ-new-husband',
          title: 'Christ Connection — Dead to Law, Married to Christ',
          html:
            'You died with Christ on the cross ("ye also are become dead to the law by the body of Christ"). You are raised with Him ("married to another, even to him who is raised from the dead"). The law had you in its grip; Christ has freed you through His death. This freedom is not license to sin. It is freedom to serve in the Spirit rather than in fear of condemnation. The law said, "Do this or die." Christ says, "I died for you. Now live."',
        },
        {
          kind: 'carry',
          html:
            'You may feel trapped by old habits, old shame, old ways of thinking about yourself. The law in your head keeps listing reasons you should condemn yourself. But the gospel says you have been freed. Not freed to do whatever you want, but freed from the grip of the law as your judge. You are married to the risen Christ now. That marriage is the source of your freedom.',
        },
        {
          kind: 'reflection',
          id: 'rom7-newness',
          prompt: 'In what area of your life are you still serving "in the oldness of the letter" (following rules to avoid punishment) instead of "in newness of spirit" (loving Christ because He loves you)? What would change if you believed He had truly freed you?',
        },
      ],
    },

    /* ─── Romans 7:7–13 — The Law Reveals Sin ──────────────────────────────────── */
    {
      ref: 'Romans 7:7–13',
      title: 'The Law Is Holy, and Sin Is Revealed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(7, 'What shall we say then? Is the law sin? God forbid. Nay, I had not known sin, but by the law: for I had not known lust, except the law had said, Thou shalt not covet.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom7-law-mirror',
          html:
            'Paul defends the law fiercely. It is not sin. But it is a mirror. "I had not known lust except the law had said, Thou shalt not covet." Without the command, there is no sense of transgression. The law does not create the sin. It reveals it. It names what was already there, hidden, unacknowledged.',
        },
        {
          kind: 'greek',
          id: 'rom7-nomos',
          title: 'Nomos — &ldquo;law&rdquo;',
          script: 'νόμος',
          translit: '<strong>nomos</strong> · law; rule; the revealed will of God',
          description:
            'Nomos is not a system of punishment. It is God&apos;s will made visible. When Paul says "the law is holy," he means the law is an expression of God&apos;s holy nature. The law is good because God is good.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(9, 'For I was alive without the law once: but when the commandment came, sin revived, and I died.'),
            plain(10, 'And the commandment, which was ordained to life, I found to be unto death.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom7-sin-revived',
          html:
            '"When the commandment came, sin revived, and I died." Paul is speaking from the vantage of childhood, perhaps. Before the commandment came, he lived in innocence. But once he knew the standard, he saw his failure. Knowledge does not kill sin. It awakens it. The law meant to lead to life ("ordained to life"), but it led him to death because his flesh could not obey it.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(12, 'Wherefore the law is holy, and the commandment holy, and just, and good.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom7-law-holy',
          html:
            'Paul will not let the hearer blame the law. Three times: <em>holy, holy, just, good.</em> The law is not the problem. The problem is that we cannot obey it. The law is a true word; we are false to it.',
        },
        {
          kind: 'christ',
          id: 'rom7-christ-diagnose',
          title: 'Christ Connection — The Law Diagnoses; Christ Heals',
          html:
            'The law is like a physician who diagnoses a terminal illness but has no cure. Jesus is the physician with the cure. The law says, "You have sinned; the wages are death" (Rom. 6:23). Christ says, "I will pay that wage for you and give you life instead." The law was never meant to save us. It was meant to show us we need saving.',
        },
        {
          kind: 'carry',
          html:
            'Do not despise the law for showing you the truth about yourself. Despising the law is like despising a mirror for showing your face. The law is a faithful friend that tells you what you need to know: you cannot fix yourself. This knowledge is the beginning of grace.',
        },
        {
          kind: 'reflection',
          id: 'rom7-revealed',
          prompt: 'What does the law reveal in you that you wish were not there? Rather than hide it or excuse it, what if you named it honestly and turned toward grace?',
        },
      ],
    },

    /* ─── Romans 7:14–17 — Sold Under Sin, Yet Willing ────────────────────────── */
    {
      ref: 'Romans 7:14–17',
      title: 'Enslaved, Yet I Delight in the Law',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(14, 'For we know that the law is spiritual: but I am carnal, sold under sin.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom7-sold-under',
          html:
            '"I am carnal, sold under sin." Not "I struggle with sin." Not "I am tempted." Sold. Enslaved. A slave does not own himself. Sin has purchased him. This is the cry of someone who wants out of the slavery but finds the chains heavier than their own strength can break.',
        },
        {
          kind: 'greek',
          id: 'rom7-sarx',
          title: 'Sarx — &ldquo;flesh&rdquo;',
          script: 'σάρξ',
          translit: '<strong>sarx</strong> · flesh; the self oriented away from God; unredeemed appetites',
          description:
            'Sarx is not the body itself. It is the body as the seat of appetite and habit—the old way of living that does not account for God. To be "carnal" is to be oriented toward the flesh instead of the Spirit.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(15, 'For that which I do I allow not: for what I would, that do I not; but what I hate, that do I.'),
            plain(16, 'If then I do that which I would not, I consent unto the law that it is good.'),
            plain(17, 'Now then it is no more I that do it, but sin that dwelleth in me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom7-what-i-would',
          html:
            'This is the most famous line in the chapter: "What I would, that do I not; but what I hate, that do I." The will (the part of me that has encountered Christ) says yes to God. The flesh (the habitual, enslaved part) says yes to sin. And I am torn between them. Paul is not excusing himself. He is naming the experience of someone who genuinely wants to obey but finds themselves acting against their own will.',
        },

        {
          kind: 'christ',
          id: 'rom7-christ-consent-law',
          title: 'Christ Connection — The Law Bears Witness to Our True Self',
          html:
            'Here Paul says something crucial: "I consent unto the law that it is good." The truest part of you—the part that has been renewed in Christ—agrees with God&apos;s law. You are not sinful in your essence. You are enslaved in your habits. And that is a different kind of problem, one that only grace can solve. Christ does not just forgive your sins; He begins to free you from the slavery itself.',
        },
        {
          kind: 'carry',
          html:
            'You may feel like a hypocrite because you know what is right yet do what is wrong. But listen: the fact that you do <em>know</em> what is right, that you <em>hate</em> what you do, that you are tormented by the gap—that is proof that something in you has been changed. The old you would not have cared. You are a split person, not a false one. The Spirit in you mourns what the flesh still does. That mourning itself is a sign of grace.',
        },
        {
          kind: 'reflection',
          id: 'rom7-tension',
          prompt: 'What is something you genuinely hate about yourself but keep doing? What would it mean to stop blaming yourself for the slavery and ask Christ for freedom?',
        },
      ],
    },

    /* ─── Romans 7:18–20 — To Will and to Perform ────────────────────────────── */
    {
      ref: 'Romans 7:18–20',
      title: 'The Will Is Not the Power',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(18, 'For I know that in me (that is, in my flesh,) dwelleth no good thing: for to will is present with me; but how to perform that which is good I find not.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom7-will-perform',
          html:
            'This line cuts to the heart of the struggle. Paul is saying: I have the will. I have the desire. But I do not have the ability. Willpower will not fix this. Determination will not fix this. The machinery of the flesh—habit, appetite, fear, shame—is too strong for the will alone.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(19, 'For the good that I would do I do not: but the evil which I would not, that I do.'),
            plain(20, 'Now if I do that I would not, it is no more I that do it, but sin that dwelleth in me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom7-dwelleth',
          html:
            '"Sin that dwelleth in me." Paul is distinguishing between who he is and what sin does through him. He is not identical with sin. But sin dwells in him like an occupying force. This distinction is crucial for grace. You are not <em>evil</em>. You are <em>occupied.</em> Freedom comes not from trying harder but from being liberated.',
        },

        {
          kind: 'christ',
          id: 'rom7-christ-indwell',
          title: 'Christ Connection — Christ Shall Dwell in You',
          html:
            'Romans 7 ends with sin dwelling in Paul. But it is the setup for what comes next. Chapter 8 begins: "There is therefore now no condemnation to them which are in Christ Jesus… But if the Spirit of God dwell in you" (Rom. 8:1, 9). The Spirit of Christ replaces the dominion of sin. The occupying force is pushed out by a greater presence.',
        },
        {
          kind: 'carry',
          html:
            'Stop trying to fix this by willpower. The will is necessary—God holds you responsible for your choices—but the will is not sufficient. You need a power outside yourself. That power is Christ, not as a concept, but as a living presence. Ask Him not to strengthen your willpower but to displace the sin that dwells in you.',
        },
        {
          kind: 'reflection',
          id: 'rom7-power',
          prompt: 'In what area has your own willpower repeatedly failed you? What would it look like to stop relying on yourself and ask Christ for a different kind of power?',
        },
      ],
    },

    /* ─── Romans 7:21–23 — Another Law in My Members ────────────────────────── */
    {
      ref: 'Romans 7:21–23',
      title: 'The War of Two Laws',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(21, 'I find then a law, that, when I would do good, evil is present with me.'),
            plain(22, 'For I delight in the law of God after the inward man:'),
            plain(23, 'But I see another law in my members, warring against the law of my mind, and bringing me into captivity to the law of sin which is in my members.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom7-two-laws',
          html:
            'Paul names two laws. The law of God (the law of his mind, his renewed, inward self) and the law of sin (the law in his flesh, his members, his habits). These are not equal powers. But they are real. The law of sin is like gravity—always pulling downward. The law of God is like a bird trying to fly. Both are forces.',
        },
        {
          kind: 'commentary',
          id: 'rom7-inward-man',
          html:
            'Here is one of the most encouraging lines in the chapter: "I delight in the law of God after the inward man." The inner you—the part of you that has encountered God—genuinely loves His law. You are not false. You are not pretending. The real you agrees with God. The slavery is in the flesh, not in the heart.',
        },
        {
          kind: 'greek',
          id: 'rom7-esō-anthrōpos',
          title: 'Esō anthrōpos — &ldquo;inward man&rdquo;',
          script: 'ἔσω ἄνθρωπος',
          translit: '<strong>esō anthrōpos</strong> · the inner person; the true self; the renewed heart',
          description:
            'The inward man is the part of you that has been remade in Christ. It delights in God&apos;s law because it has been aligned with God&apos;s heart. This is your true identity. The flesh is the old clothing you are still wearing while you wait for full redemption.',
        },
        {
          kind: 'christ',
          id: 'rom7-christ-captive',
          title: 'Christ Connection — Made Captive, Then Set Free',
          html:
            'Paul cries out that he is "brought into captivity to the law of sin." Captivity. But captivity is not the final word. In chapter 8, Paul will proclaim: "Who shall deliver me from the body of this death? I thank God through Jesus Christ our Lord" (Rom. 7:24–25). And then: "O wretched man that I am! who shall deliver me from the body of this death? I thank God through Jesus Christ our Lord" (Rom. 8:2). The law of sin loses its hold. The Spirit of life sets you free.',
        },
        {
          kind: 'carry',
          html:
            'You are not in an even battle. The flesh has the advantage in your members—the habitual strength of your body, the weight of your history. But you are not without resources. The law of God is not something outside you; it dwells in your inward man, your renewed heart. When you pray, when you read Scripture, when you ask the Spirit for help, you are tapping into a law deeper than habit. A law of life.',
        },
        {
          kind: 'reflection',
          id: 'rom7-war',
          prompt: 'What does "the law of sin" mean in your body and habits? What part of you "delights in the law of God" even though another part fights against it?',
        },
      ],
    },

    /* ─── Romans 7:24–25 — O Wretched Man! And the Answer ─────────────────── */
    {
      ref: 'Romans 7:24–25',
      title: 'Who Shall Deliver Me? I Thank God.',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(24, 'O wretched man that I am! who shall deliver me from the body of this death?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom7-wretched',
          html:
            '"O wretched man that I am!" This is not despair. This is the cry of recognition. Paul sees his condition without excuse and without hiding. He is wretched. His body is a body of death—not his body is evil, but his body is enslaved by death, by habits formed in separation from God. He cannot deliver himself. And he admits it.',
        },
        {
          kind: 'greek',
          id: 'rom7-talaipōros',
          title: 'Talaipōros — &ldquo;wretched&rdquo;',
          script: 'ταλαίπωρος',
          translit: '<strong>talaipōros</strong> · wretched; miserable; a wretch; one worn down by hardship',
          description:
            'Talaipōros is not self-hatred. It is honest diagnosis. A man at the end of his strength, worn down, unable to fix his own condition. In that honesty, deliverance begins.',
        },

        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(25, 'I thank God through Jesus Christ our Lord. So then with the mind I myself serve the law of God; but with the flesh the law of sin.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom7-thanks-christ',
          html:
            'And then, at the moment of deepest despair, the answer appears: "I thank God through Jesus Christ our Lord." Not "I will try harder." Not "God will help me if I..." But gratitude. The answer to the cry "who shall deliver me?" is already given. It is Jesus. And the thanks is not for the feeling of deliverance but for the promise of it. With the mind, Paul is already serving God through Christ. The flesh still wars. But the outcome is not in doubt.',
        },
        {
          kind: 'christ',
          id: 'rom7-christ-answer',
          title: 'Christ Connection — The Deliverer Is Named',
          html:
            'The answer to "who shall deliver me from the body of this death?" is Jesus Christ our Lord. Not eventually, not after more effort, but now. The deliverance has begun. Romans 6:9 says Christ is "raised from the dead, and dieth no more. Death hath no more dominion over him." And Romans 6:11 says believers are "alive unto God through Jesus Christ our Lord." The body of death is crucified with Christ. The resurrection is already started. Full freedom is coming.',
        },
        {
          kind: 'carry',
          html:
            'If you are in Paul&apos;s wretchedness right now, if you have come to the end of your own strength, if the gap between who you want to be and who you are has broken you—then you are exactly where grace works. Do not wait until you have fixed yourself. Thank God now, through Jesus Christ, that He is delivering you. The thanks is an act of faith. It names what Christ has already done and what He is doing. And that faith itself begins to change you.',
        },
        {
          kind: 'reflection',
          id: 'rom7-deliver',
          prompt: 'What is the wretchedness Paul describes for you? And can you join him in this strange paradox: naming the reality with complete honesty, yet thanking God through Christ at the same moment?',
        },
        {
          kind: 'artwork',
          matchTitle: /bondage|captive|chain/i,
          caption: 'Romans 7:24–25 · Wretched Yet Delivered',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'O wretched man that I am! who shall deliver me from the body of this death? I thank God through Jesus Christ our Lord.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Romans 7 · Study Guide',
  },

  hasHebrew: false,
};
