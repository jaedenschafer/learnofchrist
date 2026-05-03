import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Romans 6 — Dead to Sin, Alive in Christ
 *
 * The slander against grace: if God&apos;s grace abounds and forgets sin,
 * won&apos;t people simply sin more? Paul&apos;s answer is union with Christ.
 * Those baptized into Christ are baptized into His death. The believer is no
 * longer enslaved to sin but alive to God — a freed slave now serving
 * righteousness instead. The wages of sin is death; the gift of God is
 * eternal life through Jesus Christ.
 */
export const ROMANS_6: RichChapterContent = {
  bookSlug: 'romans',
  bookName: 'Romans',
  chapter: 6,

  estimatedMinutes: { 5: 5, 10: 13, 15: 19 },
  intros: [
    'A question looms: If grace abounds and sinners abound under grace, should we not continue in sin that grace may abound much more? It is a perversion of Paul&apos;s message, yet a natural objection to his theology. Paul does not argue the question away with theory. He plants the reader inside the baptismal waters and asks: Have you forgotten what happened to you there?',
    'Romans 6 is the charter of Christian freedom. Not freedom to sin, but freedom from sin. When you were baptized into Christ, you died with Him. You were buried with Him. You were raised with Him to newness of life. Sin no longer has dominion over you. The old master—slavery to appetite and death—no longer commands your allegiance. A new master—righteousness and God—now claims you. You are alive.',
  ],

  sections: [
    /* ─── Romans 6:1–3 — Shall We Continue in Sin? ─────────────────────── */
    {
      ref: 'Romans 6:1–3',
      title: 'Shall We Continue in Sin?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(1, 'What shall we say then? Shall we continue in sin, that grace may abound?'),
            plain(2, 'God forbid. How shall we, that are dead to sin, live any longer therein?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom6-slander',
          html:
            'Paul has just said that where sin increased, grace increased all the more. It is a true statement. But it can be twisted. If grace is limitless and forgives all sin, why not sin freely? Why not test the limits of grace? Paul&apos;s answer is swift and fierce: <em>God forbid.</em> The Greek word is <em>mē genoito</em>—literally, "may it not happen," "let it never be." This is not a debate. It is a scandal too terrible to entertain.',
        },
        {
          kind: 'commentary',
          id: 'rom6-dead',
          html:
            'But Paul does not stop there. He asks a more troubling question: &ldquo;How shall we, that are dead to sin, live any longer therein?&rdquo; He is not saying you <em>ought</em> to stop sinning because grace is an abuse or because God has rules. He is saying something more radical: <em>You are already dead.</em> Sinning is not a temptation to a free person; it is a contradiction to one who has died.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(3, 'Know ye not, that so many of us as were baptized into Jesus Christ were baptized into his death?'),
          ],
        },
        {
          kind: 'carry',
          html:
            'When you became a Christian—when you were baptized into Christ—something happened that you may have almost forgotten. You died. Not metaphorically. Sacramentally. Your old self, the one enslaved to sin and appetite and fear of death, went under the water. That person no longer exists. How, then, can you live as though you do?',
        },
        {
          kind: 'reflection',
          id: 'rom6-continue-sin',
          prompt: 'If you are baptized into Christ—if you died with Him—what is one area where you still live as though the old you were alive?',
        },
      ],
    },

    /* ─── Romans 6:4–5 — Buried with Him in Baptism ────────────────────── */
    {
      ref: 'Romans 6:4–5',
      title: 'Buried with Him in Baptism',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(4, 'Therefore we are buried with him by baptism into death: that like as Christ was raised up from the dead by the glory of the Father, even so we also should walk in newness of life.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom6-buried',
          html:
            'Baptism is not a shower or a sprinkling to mark membership. It is a burial. The waters close over you as the grave closed over Christ. You do not rise from that water unchanged. You rise <em>transformed.</em> The Greek word Paul uses is <em>baptizō</em>—to immerse, to plunge under, to submerge completely. You go down dead and come up alive. And the life you come up to is not merely <em>your</em> life renewed; it is Christ&apos;s resurrection life made yours.',
        },
        {
          kind: 'greek',
          id: 'rom6-baptizo',
          title: 'Baptizō — &ldquo;to baptize, immerse&rdquo;',
          script: 'βαπτίζω',
          translit: '<strong>baptizō</strong> · to immerse, to plunge under, to submerge completely',
          description:
            'The Greek word does not mean "to sprinkle" or "to wash." It means to be plunged entirely under something—to be completely soaked or submerged. When you are baptized into Christ, you are completely immersed in His death and resurrection. There is no part of you that escapes.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(5, 'For if we have been planted together in the likeness of his death, we shall be also in the likeness of his resurrection:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom6-planted',
          html:
            'Paul uses the image of a seed planted in the ground. If you are planted in the likeness of Christ&apos;s death, you cannot help but grow into the likeness of His resurrection. The death and the rising are inseparable. You cannot have one without the other. To be a Christian is to have been planted with Christ in His grave and to be growing, now, into His risen life.',
        },
        {
          kind: 'christ',
          id: 'rom6-christ-death-res',
          title: 'Christ Connection — Union in Death and Resurrection',
          html:
            'The believer is not merely <em>forgiven by</em> Christ&apos;s death; the believer is <em>united with</em> Christ in His death and resurrection (Col. 2:12). Paul says this is not theoretical. It is sacramental—enacted in baptism, made real in your body. You do not stand outside Christ&apos;s story asking for help. You are <em>in</em> His story. His death is your death. His rising is your rising.',
        },
        {
          kind: 'carry',
          html:
            'Baptism is not the end of your old life; it is your old life literally put to death. You will struggle with habits and appetites and the memory of slavery. But the truth is already established in the waters: you are dead. You are also, now, alive to God. The struggle is not about becoming something you are not. It is about living out what you already are—what you became the moment you came up out of the water.',
        },
        {
          kind: 'reflection',
          id: 'rom6-newness-life',
          prompt: 'If you are meant to "walk in newness of life," what does that look like for you this week? What is one way you could live into the resurrection life you already possess?',
        },
      ],
    },

    /* ─── Romans 6:6–7 — Our Old Man is Crucified ────────────────────────── */
    {
      ref: 'Romans 6:6–7',
      title: 'Our Old Man Crucified with Him',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(6, 'Knowing this, that our old man is crucified with him, that the body of sin might be destroyed, that henceforth we should not serve sin.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom6-old-man',
          html:
            'The &ldquo;old man&rdquo; is not a part of you that needs improvement. It is not your personality or your memories. It is the &ldquo;you&rdquo; that was enslaved to sin—the self that thought sin was master, that believed death was the end, that had no hope. That self is crucified. Not improved, not reformed: <em>crucified.</em> It is dead. Paul is not calling you to kill it; he is announcing what is already true. Your old self is dead. The body of sin is destroyed.',
        },
        {
          kind: 'greek',
          id: 'rom6-syntaphao',
          title: 'Syntaphao — &ldquo;buried with, co-buried&rdquo;',
          script: 'συνθάπτω',
          translit: '<strong>syntaphao</strong> · to bury together with, to be buried alongside',
          description:
            'Paul uses the prefix <em>syn</em>—"with"—repeatedly in this chapter. You are buried <em>with</em> Him. You die <em>with</em> Him. You are raised <em>with</em> Him. This is not external forgiveness at a distance. It is union, participation, identification. What happened to Him happens to you.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(7, 'For he that is dead is freed from sin.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom6-freed-from',
          html:
            'Death breaks all bonds. A person in bondage to sin is a slave. But a dead person is free from that slave-master. The master has no more claim on a corpse. Paul is saying: You are no longer enslaved to sin because you are dead. You have been acquitted by the only court that matters—death itself.',
        },
        {
          kind: 'christ',
          id: 'rom6-christ-crucified',
          title: 'Christ Connection — Crucified with Him',
          html:
            'Paul wrote, &ldquo;I am crucified with Christ&rdquo; (Gal. 2:20). Not <em>instead of</em> Christ. <em>With</em> Christ. His crucifixion is not something that happened to Him alone, two thousand years ago. It is something that happened to <em>you</em> when you believed. Your old self was crucified with Him. You died the death He died. And so you rose the resurrection He rose.',
        },
        {
          kind: 'carry',
          html:
            'Sin will still call to you. Appetite, fear, old habits, familiar comforts—they will all claim they have the right to your allegiance. But sin is a liar now. It speaks to a dead person. You are not enslaved anymore. The old you died when you were baptized. The new you is free.',
        },
      ],
    },

    /* ─── Romans 6:8–10 — Alive Unto God ────────────────────────────────── */
    {
      ref: 'Romans 6:8–10',
      title: 'Alive Unto God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(8, 'Now if we be dead with Christ, we believe that we shall also live with him:'),
            plain(9, 'Knowing that Christ being raised from the dead dieth no more; death hath no more dominion over him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom6-live-with',
          html:
            'Death is not the end of the story. It is the doorway. You die with Christ. You do not stay dead. You rise with Him. And the life you rise to is not a return to your old life, patched up and forgiven. It is <em>His</em> life—resurrection life, eternal life, life that death will never touch again.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(10, 'For in that he died, he died unto sin once: but in that he liveth, he liveth unto God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom6-died-once',
          html:
            'Christ died to sin—once, completely, finally. He does not die again. He does not pay the price again. He lives. And His life is lived <em>unto God</em>—in total allegiance, in perfect obedience, in unbroken communion. That is the life you now share. You are not living to yourself anymore. You are alive to God.',
        },
        {
          kind: 'carry',
          html:
            'You may still struggle with guilt over past sins. But Paul is telling you something more important: Christ did not stay dead for those sins. He rose. And you rose with Him. His defeat of death is now your defeat of death. His resurrection is your resurrection. Live from that reality.',
        },
        {
          kind: 'reflection',
          id: 'rom6-alive-to-god',
          prompt: 'Where in your life are you still living to yourself instead of to God? What would shift if you lived as though you were already dead to your own desires and alive to His?',
        },
      ],
    },

    /* ─── Romans 6:11–12 — Reckon Yourselves Dead ──────────────────────── */
    {
      ref: 'Romans 6:11–12',
      title: 'Reckon Yourselves Dead Indeed unto Sin',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(11, 'Likewise reckon ye also yourselves to be dead indeed unto sin, but alive unto God through Jesus Christ our Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom6-reckon',
          html:
            'Paul now issues a command: <em>Reckon.</em> Consider. Count it as true. Calculate. The Greek word is <em>logizomai</em>—to think, to reason, to regard as true. Your feelings may tell you otherwise. Sin may still have a grip on your body. Temptation may still rise. But you are not to reckon sin as your master anymore. You are to reckon yourself dead to sin and alive to God—and then live from that reckoning.',
        },
        {
          kind: 'greek',
          id: 'rom6-logizomai',
          title: 'Logizomai — &ldquo;to reckon, count, regard as&rdquo;',
          script: 'λογίζομαι',
          translit: '<strong>logizomai</strong> · to reckon, to count, to think, to regard as true',
          description:
            'This is not blind faith or positive thinking. It is an act of the will based on objective fact. You <em>are</em> dead and alive in Christ. The reckoning is not creating reality; it is aligning your understanding with what is already true. You are choosing to live from the truth.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(12, 'Let not sin therefore reign in your mortal body, that ye should obey it in the lusts thereof.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom6-reign',
          html:
            'Sin is still present in your mortal, dying body. But it should not <em>reign.</em> It should not be king anymore. It should not issue orders that you feel obligated to obey. Paul is not being naive. He knows sin will tempt. But he is saying sin has lost its authority. You do not have to obey the desires of the flesh anymore. You are not enslaved. You have a new king.',
        },
        {
          kind: 'christ',
          id: 'rom6-christ-alive',
          title: 'Christ Connection — Alive Through Him',
          html:
            'You are alive unto God <em>through Jesus Christ our Lord.</em> This is not your accomplishment. This is not your effort or your discipline. Your life is <em>through</em> Him—rooted in His death, rising from His resurrection, sustained by His intercession. Your freedom is His gift.',
        },
        {
          kind: 'carry',
          html:
            'When temptation comes—and it will—your job is not to feel strong or virtuous. Your job is to <em>reckon.</em> To say: I am dead. This appetite, this fear, this old habit does not have authority over a dead person. I am alive to God. That is not wishful thinking; that is the truth of your baptism. Live from it.',
        },
        {
          kind: 'reflection',
          id: 'rom6-reign-sin',
          prompt: 'What is one lust of the flesh that still tempts you to disobey? If you genuinely reckoned yourself dead to it, how would you respond the next time it called?',
        },
      ],
    },

    /* ─── Romans 6:13–14 — Yield Yourselves to God ─────────────────────── */
    {
      ref: 'Romans 6:13–14',
      title: 'Yield Yourselves unto God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(13, 'Neither yield ye your members as instruments of unrighteousness unto sin: but yield yourselves unto God, as those that are alive from the dead, and your members as instruments of righteousness unto God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom6-yield',
          html:
            'Do not offer yourself to sin as a tool. Your body, your hands, your mouth, your mind—these are not tools for sin to use. Instead, yield them to God. Offer them. Present them. The verb is <em>paristēmi</em> in Greek—to present, to place beside, to put at the disposal of. You are handing yourself over. And you are doing it as someone who has already been raised from the dead.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(14, 'For sin shall not have dominion over you: for ye are not under the law, but under grace.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom6-not-under-law',
          html:
            'This does not mean anything goes. It means sin is not your king anymore. The law of God is still true. Righteousness is still the goal. But you are not enslaved to a law that can only condemn you. You are under grace—the unearned favor of God that gives you power to obey, not just commands to obey. Grace does not make sin permissible. Grace makes righteousness possible.',
        },
        {
          kind: 'carry',
          html:
            'Your body is not an enemy to escape. Your members—your hands, your eyes, your strength—are not evil tools. They are instruments. The question is: instruments of what? Of righteousness or of sin? Paul is saying: Present them to God. Use them for His glory. This is not bondage to a harsh law. This is the freedom of serving the one who died and rose for you, and who now gives you the power to follow.',
        },
        {
          kind: 'reflection',
          id: 'rom6-yield',
          prompt: 'What is one of your gifts or abilities that you have been offering to sin? What would it mean to yield that same gift to God instead?',
        },
      ],
    },

    /* ─── Romans 6:15–18 — Servants of Righteousness ────────────────────── */
    {
      ref: 'Romans 6:15–18',
      title: 'Servants of Righteousness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(15, 'What then? shall we sin, because we are not under the law, but under grace? God forbid.'),
            plain(16, 'Know ye not, that to whom ye yield yourselves servants to obey, his servants ye are to whom ye obey; whether of sin unto death, or of obedience unto righteousness?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom6-whom-yield',
          html:
            'The same objection resurfaces: If we are under grace, not law, can we not sin freely? And again, Paul says <em>God forbid.</em> Then he makes a stark observation: You are always a servant. Always. Every person obeys <em>someone</em>. The question is not whether you will serve but <em>whom.</em> There is no neutral ground. You either serve sin unto death, or you serve obedience unto righteousness.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(17, 'But God be thanked, that ye were the servants of sin, but ye have obeyed from the heart that form of doctrine which was delivered you.'),
            plain(18, 'Being then made free from sin, ye became the servants of righteousness.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom6-from-heart',
          html:
            'Paul pauses to give thanks. <em>You were</em> servants of sin. But you have obeyed—not out of compulsion, but from the heart. The gospel you received has seized you. You chose it. You embraced it. And now you are free. Not to do nothing. You are free to serve righteousness. This is the paradox: true freedom is slavery to something worthy. You are now the slave of righteousness, and that slavery is where your freedom actually lives.',
        },
        {
          kind: 'greek',
          id: 'rom6-doulos',
          title: 'Doulos — &ldquo;servant, slave&rdquo;',
          script: 'δοῦλος',
          translit: '<strong>doulos</strong> · servant; slave; one completely under another&apos;s authority',
          description:
            'A <em>doulos</em> is not a hired hand who can walk away. It is one whose whole self is bound to another. To be a <em>doulos</em> of righteousness is to place your complete allegiance there—not reluctantly, but willingly. Your body, your time, your energy, your will—all of it is at the disposal of the one you serve.',
        },
        {
          kind: 'christ',
          id: 'rom6-christ-obedience',
          title: 'Christ Connection — Obeyed from the Heart',
          html:
            'Jesus was the servant of righteousness. He yielded Himself entirely to His Father&apos;s will. &ldquo;Not my will, but thine&rdquo; (Luke 22:42). He obeyed from the heart, all the way to death. And in doing so, He freed you to do the same—to obey not from fear or compulsion, but from love.',
        },
        {
          kind: 'carry',
          html:
            'You cannot escape servitude. You will serve someone or something. The freedom Paul is offering is not the freedom to serve no one. It is the freedom to stop serving sin—stop serving appetite, fear, shame, death—and start serving the one who loves you and gave Himself for you. That is not imprisonment. That is the only thing that feels like home.',
        },
        {
          kind: 'reflection',
          id: 'rom6-serve-whom',
          prompt: 'Who or what are you serving right now? Where are you still trying to obey from compulsion rather than from the heart?',
        },
      ],
    },

    /* ─── Romans 6:19–22 — Holiness as the Fruit ───────────────────────── */
    {
      ref: 'Romans 6:19–22',
      title: 'Fruit Unto Holiness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(19, 'I speak after the manner of men because of the infirmity of your flesh: for as ye have yielded your members servants to uncleanness and to iniquity unto iniquity; even so now yield your members servants to righteousness unto holiness.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom6-infirmity',
          html:
            'Paul apologizes for using the language of slavery at all. He is aware it is a crude metaphor for spiritual reality. But he uses it <em>because of the infirmity of your flesh</em>—because you are human, embodied, struggling. You understand servitude. So he uses it to make a point: Just as you once yielded your body to uncleanness and it led further into iniquity, so now yield your body to righteousness, and it will lead into holiness.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(20, 'For when ye were the servants of sin, ye had your fruit unto death.'),
            plain(21, 'But now being made free from sin, and become servants to God, ye have your fruit unto holiness, and the end everlasting life.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom6-fruit-death',
          html:
            'Sin has a harvest. You serve sin, you reap death—a slow death, perhaps, but real. Spiritual death, relational death, eventually physical death. It is the law of the universe: you reap what you sow. But now you serve God. Your harvest has changed. You now bear fruit unto holiness—a life set apart, consecrated, transformed. And the harvest&apos;s end is eternal life.',
        },
        {
          kind: 'carry',
          html:
            'Look at your life. What have you been harvesting? What are the consequences of the seeds you have been planting? If you have yielded your members to uncleanness, to anger, to bitterness, the fruit is visible—isolation, shame, broken relationships. Now change direction. Yield instead to righteousness. The fruit will take time to grow. But it will come. You will reap what you sow.',
        },
        {
          kind: 'reflection',
          id: 'rom6-fruit-harvest',
          prompt: 'What fruit are you bearing in your life right now? Is it the fruit of serving sin or the fruit of serving righteousness? How can you tell?',
        },
      ],
    },

    /* ─── Romans 6:23 — The Wages of Sin, The Gift of God ───────────────── */
    {
      ref: 'Romans 6:23',
      title: 'The Wages and The Gift',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(23, 'For the wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom6-wages',
          html:
            'A wage is earned. It is what you receive for work done. Sin is work. A lifetime of yielding to appetite, to fear, to rebellion. And the wage for that work is death. Not metaphorical death. Real death. The consequence is proportionate and inevitable. <em>But</em>—the greatest but in Scripture—eternal life is not a wage. It is a gift. A gift is not earned. It cannot be bought or worked for. It is given freely, by grace, to the undeserving.',
        },
        {
          kind: 'greek',
          id: 'rom6-charisma',
          title: 'Charisma — &ldquo;gift, favor&rdquo;',
          script: 'χάρισμα',
          translit: '<strong>charisma</strong> · a gift given in grace; something given freely without merit',
          description:
            'A <em>charisma</em> is a gift flowing from grace. It is not payment for services rendered. It is freely given, undeserved, unearned. Eternal life through Christ is the supreme <em>charisma</em>—the gift that reveals who God is: generous, loving, forgiving beyond measure.',
        },
        {
          kind: 'commentary',
          id: 'rom6-through-christ',
          html:
            'But the gift comes <em>through Jesus Christ our Lord.</em> It is not that God simply wipes sin away. It is that Christ bore the wages. Christ died the death. Christ paid the price. And now He stands in the gap and offers you what He received—eternal life, resurrection life, life that death cannot touch. All of it flows through Him.',
        },
        {
          kind: 'christ',
          id: 'rom6-christ-gift',
          title: 'Christ Connection — The Gift Made Flesh',
          html:
            'Christ is Himself the gift. He is the one who brings eternal life to the world. &ldquo;The gift of God is eternal life through Jesus Christ&rdquo;—not <em>from</em> Him, as if He were merely delivering something. He <em>is</em> the life. &ldquo;I am the resurrection, and the life: he that believeth in me, though he were dead, yet shall he live&rdquo; (John 11:25). To receive the gift is to receive Him.',
        },
        {
          kind: 'artwork',
          matchTitle: /crucifix|cross|death|resurrection/i,
          caption: 'Romans 6:23 · The Wages and the Gift',
        },
        {
          kind: 'carry',
          html:
            'You cannot earn eternal life. You cannot deserve it. You cannot work hard enough or behave well enough to buy your way in. But you can receive it. Right now. As a gift. That is what Paul is saying. Your wages are death. But God&apos;s gift to you, through Christ, is life eternal. Will you take it?',
        },
        {
          kind: 'reflection',
          id: 'rom6-gift-wages',
          prompt: 'What would it mean for you to stop trying to earn God&apos;s favor and simply receive the gift of eternal life through Christ? What is holding you back?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'We are baptized into Jesus Christ, baptized into his death. Our old man is crucified with him. The wages of sin is death; but the gift of God is eternal life through Jesus Christ our Lord.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Romans 6 · Study Guide',
  },

  hasHebrew: false,
};
