import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 1 John 3 — Behold What Manner of Love
 *
 * The climactic statement: "Behold, what manner of love the Father hath bestowed upon us,
 * that we should be called the sons of God." We are God's children now. When He appears,
 * we shall be like Him. This identity shapes everything—righteousness, love, our hope.
 * The chapter moves from identity (children of God) through destiny (we shall be like Him)
 * to evidence (love one another).
 */
export const FIRST_JOHN_3: RichChapterContent = {
  bookSlug: '1-john',
  bookName: '1 John',
  chapter: 3,

  intros: [
    'John opens chapter 3 with one of Scripture\'s most staggering declarations: "Behold, what manner of love." The Father has given us a status we do not deserve and cannot earn—we are called the sons of God. This is not poetry or aspiration. This is who you are, here and now, if you believe on Jesus. You belong to God\'s family.',
    'But adoption into His family is not the end of the story—it is the beginning. When He appears, what you shall be will exceed even this. You will see Him as He is. You will be like Him. That future hope, properly believed, transforms you now. It makes you pure. And the mark of belonging to God is unmistakable: you love one another. Love is not optional for God\'s children. It is the evidence that you have passed from death to life.',
  ],

  sections: [
    /* ─── 1 John 3:1 — Behold What Manner of Love ────────────────────── */
    {
      ref: '1 John 3:1',
      title: 'Behold, What Manner of Love',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              1,
              hp('Behold, what manner of love', 'christ-love-father'),
              t(' the Father hath bestowed upon us, that we should be called the '),
              hy('sons of God', 'greek-teknon'),
              t(': therefore the world knoweth us not; because it knew him not.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-behold-love',
          html:
            'The word "behold" opens with wonder. John is not making a casual observation but calling us to stop and truly see what the Father has done. The love is so extraordinary, so other, that John struggles to name it: "what manner" — of what kind, of what quality, of what depth is this love? The answer: it is fatherly love. Not distant judgment. Not conditional approval. The fierce, protective, sacrificial love of a father for his child. And this love has made us God\'s children.',
        },
        {
          kind: 'greek',
          id: 'greek-teknon',
          title: 'Tekna — Children (Not Servants)',
          script: 'τέκνα',
          translit: '<strong>tekna</strong> · children; offspring; born ones; beloved dependents',
          description:
            'Tekna is not doulos (slave) or diakonos (servant). Tekna means children born into a family. The emphasis is intimacy, inheritance, belonging. You are not hired help in God\'s household. You are not even angels standing afar off. You are beloved children with full family standing. The Father knows you. He holds you. He provides for you. He will see you through to glory.',
        },
        {
          kind: 'commentary',
          id: 'c-world-knows-not',
          html:
            'But there is a cost to this identity. The world does not know you as God\'s children because the world did not know Him. Followers of Jesus will be misunderstood, rejected, sometimes despised by those who remain in darkness. This is not a sign of failure. It is a mark of faithful belonging. Your estrangement from the world\'s values is a sign that you have been claimed by Another.',
        },
        {
          kind: 'christ',
          id: 'christ-love-father',
          title: 'Christ Connection — The Son Shows the Father\'s Love',
          html:
            'Jesus came to show us the Father\'s love. "He that hath seen me hath seen the Father" (John 14:9). Every act of Jesus—healing the sick, feeding the hungry, laying down His life—is the Father\'s love made visible. When you see Jesus weeping at Lazarus\'s tomb, you see how the Father loves. When you see Jesus die for sinners, you see the Father\'s heart. The manner of love John asks you to behold is the love of the Father poured out through Christ.',
        },
        {
          kind: 'carry',
          html:
            'Stop for a moment and truly see what John asks you to see. You are the beloved child of God. Not by accident. Not by luck. By deliberate, personal, fatherly love. The Father looked at you before time began and claimed you as His own. This is not something you earned by your righteousness or your prayers or your good deeds. It is pure grace. And if that is how the Father has loved you, how can you live as though it is not true?',
        },
        {
          kind: 'reflection',
          id: 'behold-love',
          prompt:
            'What would change in your life today if you truly believed—down in your bones—that you are loved by the Father as His beloved child? Where do you live as though you are still an orphan?',
        },
        {
          kind: 'artwork',
          matchTitle: /father.*child|embrace|prodigal/i,
          matchArtist: /rembrandt|tissot|caravaggio/i,
          caption: '1 John 3:1 — The Father\'s Love',
        },
      ],
    },

    /* ─── 1 John 3:2 — Sons of God / We Shall Be Like Him ─────────────── */
    {
      ref: '1 John 3:2',
      title: 'Sons of God & Future Glory',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              2,
              t('Beloved, now are we the sons of God, and it doth not yet appear what we shall be: but we know that, when he shall appear, we shall be '),
              hp('like him', 'christ-like-him'),
              t('; for we shall see him as he is.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-now-and-not-yet',
          html:
            'John holds two truths in tension: "now are we the sons of God" and "it doth not yet appear what we shall be." This is the biblical rhythm of "already, but not yet." You are God\'s child now—this is present reality. But what you shall become in the fullness of the kingdom is hidden, waiting, not yet revealed. The resurrection will unveil a transformation you cannot yet imagine. Paul writes of the same mystery: "When Christ, who is our life, shall appear, then shall ye also appear with him in glory" (Col. 3:4).',
        },
        {
          kind: 'greek',
          id: 'greek-phaneroō',
          title: 'Phaneroō — To Make Manifest; To Appear',
          script: 'φανερόω',
          translit: '<strong>phaneroō</strong> · to make visible; to appear; to reveal what was hidden; to show plainly',
          description:
            'When Christ appears (phaneroō), His appearance will not be a rumor or a symbol but a public unveiling of glory. And in that moment, what you are shall also be revealed. The glory you will inherit was purchased for you at the cross; it will be made visible at the resurrection. Until then it is hidden, safe, kept for you in heaven.',
        },
        {
          kind: 'commentary',
          id: 'c-like-him',
          html:
            'You shall be like Him. Not nearly like Him. Not somewhat like Him. But like Him. Paul draws the same line: "I know that, when he shall appear, we shall be like him; for we shall see him as he is" (1 Cor. 13:12, paraphrased). "Conformed to the image of his Son" (Rom. 8:29). The goal of redemption is not escape from creation but radical transformation into the likeness of Christ. You will be healed, whole, glorified, perfected—a new creation who bears Christ\'s image fully.',
        },
        {
          kind: 'christ',
          id: 'christ-like-him',
          title: 'Christ Connection — Transformation into His Image',
          html:
            'Christ is the image of the invisible God. "For whom he did foreknow, he also did predestinate to be conformed to the image of his Son" (Rom. 8:29). You are already declared righteous in Christ. But in the resurrection, that righteousness will become actual. You will walk as He walks. You will love as He loves. You will shine with His glory. This is not vanity or pride—it is the destiny the Father set for you when He chose you in Christ before the foundation of the world.',
        },
        {
          kind: 'carry',
          html:
            'John ties transformation to sight: "we shall see him as he is." Right now, you see Christ through Scripture, through testimony, through faith. In the resurrection, you will see Him face to face. And that sight—that unveiling of His beauty and holiness and love—will complete your transformation. What are you becoming as you catch glimpses of His glory now? What kind of person are you becoming as you love Him, believe Him, follow Him? That trajectory leads to glory.',
        },
        {
          kind: 'reflection',
          id: 'like-him',
          prompt:
            'Imagine yourself in the resurrection—fully like Christ, fully healed, fully glorified. What character trait of Jesus do you most long to embody? How can you grow into that likeness in the days ahead?',
        },
      ],
    },

    /* ─── 1 John 3:3 — This Hope Purifieth ──────────────────────────── */
    {
      ref: '1 John 3:3',
      title: 'This Hope Purifieth Himself',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              3,
              t('And every man that hath this hope in him '),
              hy('purifieth himself', 'greek-hagnizō'),
              t(', even as he is pure.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hope-purifies',
          html:
            'This hope—that you shall be like Him, shall see Him as He is—is not abstract or escapist. It is powerfully practical. When you truly believe you will be conformed to Christ\'s image, you begin to purify yourself now. You remove impurity. You turn from sin. You order your life toward holiness. The hope of future glory is the engine of present sanctification. If you say you hope to see Jesus face to face, you cannot cling to sin that separates you from His holiness. The two cannot coexist.',
        },
        {
          kind: 'greek',
          id: 'greek-hagnizō',
          title: 'Hagnizō — To Purify; To Make Clean',
          script: 'ἁγνίζω',
          translit: '<strong>hagnizō</strong> · to purify; to cleanse; to make holy; to separate from defilement; to consecrate',
          description:
            'Hagnizō is deliberate action—you purify yourself. This is not passive waiting for God to clean you up. It is active response to the hope set before you. You put off what defiles. You choose holiness. You align your life with the destiny you believe in. The root is hagnes, "pure," connected to the temple and to ritual cleansing. You are making yourself fit for the presence of holiness.',
        },
        {
          kind: 'commentary',
          id: 'c-even-as-he',
          html:
            'The standard is "even as he is pure"—as pure as Christ is pure. This is not perfectionism as the world knows it. It is wholehearted, earnest desire to be like Him. It is confession when you fail. It is repentance. It is the mortification of sin and the cultivation of the fruit of the Spirit. Every time you resist temptation, you are purifying yourself. Every time you choose love over bitterness, you are purifying yourself. Every time you confess and return to the Father, you are purifying yourself in light of that glorious hope.',
        },
        {
          kind: 'carry',
          html:
            'Your future glory is not only a promise; it is a calling. The hope of seeing Jesus as He is, of being like Him, of dwelling with Him forever—this hope should reshape your priorities right now. What are you clinging to that compromises that future? What patterns of thought, what relationships, what secret habits are you protecting when you should be purifying yourself? The hope John offers is not for the faint of heart. It calls you to radical alignment with Christ.',
        },
        {
          kind: 'reflection',
          id: 'hope-purifies',
          prompt:
            'Where do you need to purify yourself in light of your future glory? What sin, habit, or compromise are you tolerating that your hope in Christ should burn away?',
        },
      ],
    },

    /* ─── 1 John 3:4–5 — Sin Is Transgression of the Law ──────────────── */
    {
      ref: '1 John 3:4–5',
      title: 'Sin is Transgression of the Law',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              4,
              t('Whosoever committeth sin '),
              hy('transgresseth also the law', 'greek-anomia'),
              t(': for sin is the transgression of the law.')
            ),
            verse(
              5,
              t('And ye know that '),
              hp('he was manifested to take away our sins', 'christ-sins'),
              t('; and '),
              hy('in him is no sin', 'greek-hamartia'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-sin-transgression',
          html:
            'John defines sin sharply: it is transgression of the law. Not weakness. Not misunderstanding. Not accident. Transgression is deliberate crossing of a known boundary. It is rebellion against God\'s good law. The law reflects God\'s character. To transgress it is to say, "I reject what God says is right and good." This matters because it frames sin not as personal failure but as cosmic offense—an affront to God\'s authority and holiness.',
        },
        {
          kind: 'greek',
          id: 'greek-anomia',
          title: 'Anomia — Lawlessness; Breaking God\'s Law',
          script: 'ἀνομία',
          translit: '<strong>anomia</strong> · lawlessness; transgression; violation of God\'s law; rebellion',
          description:
            'Anomia is more than breaking rules—it is refusing rule. It is living as though God\'s law does not bind you, does not matter, does not reflect His good and holy character. The antichrist is the "man of sin," the "son of perdition," described as anomos—lawless. At the heart of sin is rejection of God\'s authority over your life.',
        },
        {
          kind: 'greek',
          id: 'greek-hamartia',
          title: 'Hamartia — Sin; Missing the Mark',
          script: 'ἁμαρτία',
          translit: '<strong>hamartia</strong> · sin; missing the mark; falling short of God\'s standard; wrongdoing',
          description:
            'Hamartia pictures an archer missing the target. Sin is falling short—short of God\'s glory, short of His perfection, short of what you were made to be. Every sin is a failure to hit the mark of God\'s holiness. But Christ hit the mark perfectly. In Him is no sin, no shortcoming, no transgression.',
        },
        {
          kind: 'christ',
          id: 'christ-sins',
          title: 'Christ Connection — He Was Manifested to Take Away Sins',
          html:
            'Jesus came into the world with one mission: to take away sins. Not to excuse them or overlook them. To take them—to bear them Himself, to atone for them, to destroy their power. "The Lamb of God which taketh away the sin of the world" (John 1:29). His work on the cross was the moment of greatest power—when He, the spotless Lamb, took upon Himself the sins of the world and paid the penalty that we owed. In Him is no sin. His perfection is your righteousness. His sacrifice is your freedom.',
        },
        {
          kind: 'carry',
          html:
            'If you belong to Christ, your sins are taken away. You are not released from the law\'s demand for righteousness—you are made righteous in Christ. You are not free to sin; you are free from sin. The chains are broken. The power of sin to condemn you is gone. But this does not mean you can treat sin casually. You have been bought at a price. You have been forgiven much. Your response is to love the One who loved you first and to purify yourself even as He is pure.',
        },
        {
          kind: 'reflection',
          id: 'sin-transgression',
          prompt:
            'Where do you see lawlessness—in yourself, in the world—treating God\'s boundaries as if they don\'t matter? How has Christ\'s sacrifice freed you to reject that lawlessness?',
        },
      ],
    },

    /* ─── 1 John 3:6–8 — The Son of God Destroyed the Works of the Devil */
    {
      ref: '1 John 3:6–8',
      title: 'The Son of God Destroyed the Works of the Devil',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              6,
              t('Whosoever abideth in him sinneth not: whosoever sinneth hath not seen him, neither known him.')
            ),
            verse(
              8,
              t('He that committeth sin is of the devil; for the devil sinneth from the beginning. For this purpose the '),
              hp('Son of God was manifested, that he might destroy the works of the devil', 'christ-destroy-devil'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-abideth-sinneth-not',
          html:
            'John makes a stark claim: "Whosoever abideth in him sinneth not." This does not mean that believers never stumble or fall short. Paul confesses his own remaining struggle with sin (Rom. 7). Rather, John means that the habitual pattern, the ruling passion, the defining characteristic of one who abides in Christ is not sin but righteousness. The pattern of your life is not transgression but obedience. When you do slip, you confess and return to Him, because abiding means your roots are in Christ, not in rebellion.',
        },
        {
          kind: 'commentary',
          id: 'c-devil-sinneth',
          html:
            'The devil is the original sinner, "from the beginning." His sin was pride and rebellion—he refused to accept the order of creation, the rule of God. He aspired to usurp God\'s throne. Every human sin that follows is an echo of his original rebellion. When you sin, you align yourself with his rebellion. You choose his values over God\'s. You follow his example of rejecting God\'s authority.',
        },
        {
          kind: 'greek',
          id: 'greek-phaneroō-destroy',
          title: 'Phaneroō & Luō — To Manifest & to Destroy',
          script: 'φανερόω · λύω',
          translit: '<strong>phaneroō</strong> (to make visible) + <strong>luō</strong> (to dissolve; to destroy; to loose)',
          description:
            'Christ was manifested (revealed, made visible) for a purpose: to luō—to destroy, to dissolve, to loose, to break—the works of the devil. Not to negotiate with evil. Not to contain it. To destroy it. Christ\'s life, death, resurrection, and ascension constitute a cosmic defeat of Satan\'s kingdom. His works are being progressively destroyed. The final destruction awaits the end, but the victory is already won.',
        },
        {
          kind: 'christ',
          id: 'christ-destroy-devil',
          title: 'Christ Connection — His Mission Summarized',
          html:
            'From His birth through His resurrection, Christ was destroying the works of the devil. He healed the sick (undoing the devil\'s oppression). He cast out demons (defeating Satan\'s servants directly). He taught truth (countering the devil\'s lies). And supremely, He died and rose—crushing the power of sin and death that the devil used as weapons. "I am he that liveth, and was dead; and, behold, I am alive for evermore, Amen; and have the keys of hell and of death" (Rev. 1:18). The devil\'s dominion is broken. Christ reigns.',
        },
        {
          kind: 'carry',
          html:
            'You are caught in the midst of cosmic conflict. The devil is still active, still seeking whom he may devour. But his ultimate defeat is assured. And if you abide in Christ, you are on the winning side. When you resist temptation, you are participating in Christ\'s victory. When you forgive, you defeat bitterness that the enemy sows. When you speak truth, you undermine his lies. You are not facing a future victory; you are joining a battle already won.',
        },
        {
          kind: 'reflection',
          id: 'destroy-devil',
          prompt:
            'Where do you see the devil\'s works—deceit, division, despair, lust, pride—at work in your own heart or in the world? How can you join Christ in destroying them?',
        },
        {
          kind: 'artwork',
          matchTitle: /defeat of evil|victory|christ.*triumph/i,
          matchArtist: /caravaggio|rembrandt/i,
          caption: '1 John 3:8 — Christ Destroys the Devil\'s Works',
        },
      ],
    },

    /* ─── 1 John 3:9–10 — Born of God; Children of God vs. Devil ──────── */
    {
      ref: '1 John 3:9–10',
      title: 'Born of God; Children of God vs. Devil',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              9,
              t('Whosoever is born of God doth not commit sin; for his '),
              hy('seed', 'greek-sperma'),
              t(' remaineth in him: and he cannot sin, because he is born of God.')
            ),
            verse(
              10,
              t('In this the children of God are manifest, and the children of the devil: whosoever doeth not righteousness is not of God, neither he that loveth not his brother.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-born-of-god',
          html:
            'Being "born of God" is not metaphor. It is spiritual reality. When you are born again, God\'s seed—His life, His nature—is planted in you. This seed abides. It grows. It shapes who you are and what you become. The pattern of a person born of God is righteousness. Not perfection, but the ruling character of your life is alignment with God, not rebellion against Him. The power of sin to dominate you is broken.',
        },
        {
          kind: 'greek',
          id: 'greek-sperma',
          title: 'Sperma — Seed; God\'s Life in You',
          script: 'σπέρμα',
          translit: '<strong>sperma</strong> · seed; offspring; descendants; the generative principle; what is sown',
          description:
            'God\'s seed—His nature, His life—is planted in you through new birth. This seed carries God\'s character. It grows toward holiness. It bears fruit. You are not merely cleaned once; you are regenerated. Life itself is imparted to you. This is why sin cannot rule you—God\'s life is working against it, pressing you toward righteousness.',
        },
        {
          kind: 'commentary',
          id: 'c-manifest-children',
          html:
            'John gives the ultimate test of spiritual identity: "In this the children of God are manifest, and the children of the devil." It is not what you claim. It is not your feelings or your experiences. It is visible in your character and your choices. Do you do righteousness? Do you love your brother? These mark you as God\'s child. Do you practice sin? Do you harbor hatred? These mark you as belonging to the devil. The fruit reveals the root.',
        },
        {
          kind: 'carry',
          html:
            'You cannot hide your true father. A child of God will bear God\'s marks: righteousness, love, truth, holiness. A child of the devil will bear his marks: lies, hatred, pride, lawlessness. You know yourself. Where is the momentum of your life? Are you being drawn toward Christ or away from Him? Are you growing in love or hardening in bitterness? Are you seeking righteousness or excusing sin? Your answer reveals whom you belong to.',
        },
        {
          kind: 'reflection',
          id: 'born-of-god',
          prompt:
            'What does it mean in your life that God\'s seed abides in you? What evidence is there that you are born of God? Where do you still struggle with the devil\'s marks in your character?',
        },
      ],
    },

    /* ─── 1 John 3:11–13 — Love One Another / Cain & Abel ──────────────── */
    {
      ref: '1 John 3:11–13',
      title: 'Love One Another; The Example of Cain',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              11,
              t('For this is the message that ye heard from the beginning, That we should '),
              hg('love one another', 'c-love-one-another'),
              t('.')
            ),
            verse(
              12,
              t('Not as Cain, who was of that wicked one, and '),
              hy('slew his brother', 'cain-abel'),
              t('. And wherefore slew he him? Because his own works were evil, and his brother&apos;s righteous.')
            ),
            verse(
              13,
              t('Marvel not, my brethren, if the world hate you. We know that we have passed from death unto life, because we love the brethren.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-love-one-another',
          html:
            'The message is ancient. It is not new. From the beginning—from the mouth of Jesus in the Gospels, from the law given through Moses, from the prophets—the command is one: love one another. This is not optional. This is not a higher counsel for spiritual athletes. This is the heart of the law, the essence of the gospel, the core identity marker of God\'s people. You cannot claim to belong to Christ while refusing to love His people.',
        },
        {
          kind: 'commentary',
          id: 'cain-abel',
          html:
            'Cain stands as the cautionary tale. He was "of that wicked one"—aligned with the devil. His works were evil while Abel\'s were righteous. Cain could not bear the comparison. Rather than repent and align himself with righteousness, he murdered his righteous brother. Envy ate at him. Pride kept him from humbling himself. Hatred finished what jealousy began. You will face similar moments: seeing another\'s goodness, feeling the sting of it, tempted to hate rather than repent. The Cain path leads to death. The path of love leads to life.',
        },
        {
          kind: 'carry',
          html:
            'If the world hates you, do not be shocked. The world hated Jesus. It will hate those who follow Him, especially those who refuse the world\'s values—selfishness, revenge, pride. But your confidence is in a different kind of knowing: you have passed from death to life. You know it by the fruit of love in your heart. You see it in your capacity to love the brethren even when they are difficult, even when the world says "protect yourself, hate those who oppose you." Your love is evidence of new life. Your hatred would be evidence of remaining in death.',
        },
        {
          kind: 'christ',
          id: 'christ-cain-pattern',
          title: 'Christ Connection — The Cain Pattern Broken',
          html:
            'Cain\'s story is the pattern of human pride: I will do what seems good to me. I will measure myself by my own standard, not God\'s. When called to repentance, I will kill rather than submit. Christ breaks this pattern entirely. "Not my will, but thine, be done" (Luke 22:42). Even in the garden, facing death, Christ submitted to the Father\'s will and loved His enemies. He died for those who hated Him. The measure of Christ\'s love unmasks Cain\'s hatred as what it is: rebellion masquerading as righteousness.',
        },
        {
          kind: 'reflection',
          id: 'cain-love',
          prompt:
            'Where do you see the Cain pattern in yourself—comparison, envy, resentment against those who seem more righteous, more successful, more loved? How does the love of Christ call you to break free?',
        },
        {
          kind: 'artwork',
          matchTitle: /cain.*abel|sacrifice/i,
          matchArtist: /tissot|baroque/i,
          caption: '1 John 3:12 — Cain and Abel',
        },
      ],
    },

    /* ─── 1 John 3:14–16 — Passed from Death to Life; Love One Another ─── */
    {
      ref: '1 John 3:14–16',
      title: 'He Laid Down His Life for Us',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              14,
              t('We know that we have passed from death unto life, because we love the brethren. He that loveth not his brother abideth in death.')
            ),
            verse(
              15,
              t('Whosoever hateth his brother is a murderer: and ye know that no murderer hath eternal life abiding in him.')
            ),
            verse(
              16,
              t('Hereby perceive we the love of God, because he '),
              hp('laid down his life for us', 'christ-laid-down'),
              t(': and we ought to lay down our lives for the brethren.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-death-to-life',
          html:
            'You have passed from death unto life. This is not future prospect. This is past action completed. Your old life—separated from God, enslaved to sin, destined for judgment—is behind you. You are alive now, in Christ, with the life of God flowing through you. The proof is tangible: you love the brethren. Love is the sign of life. Hatred is the mark of remaining in death. This is not sentimental affection. It is deliberate commitment to the good of other believers, even when they are hard to love.',
        },
        {
          kind: 'commentary',
          id: 'c-hate-murder',
          html:
            '"Whosoever hateth his brother is a murderer." This is startling language. Hatred and murder are in the same family. Hatred wishes the other dead. Hatred delights in their harm. Jesus taught that murder begins in the heart with anger (Matt. 5:21–22). If you harbor hatred against a believer, if you secretly wish them harm, if you rejoice in their suffering, you are living as a murderer lives—cut off from eternal life, still in the dominion of death.',
        },
        {
          kind: 'greek',
          id: 'greek-agapē-love',
          title: 'Agapē — Love; Covenant Commitment',
          script: 'ἀγάπη',
          translit: '<strong>agapē</strong> · love; selfless regard; will-powered commitment; the love of God',
          description:
            'Agapē is not emotion. It is not preference or affection. It is the deliberate choice to regard another\'s good as important as your own. It is covenant commitment. The love of God for you is agapē—He chose to die for you when you were yet a sinner, when you were His enemy. Agapē is what calls you to lay down your life for the brethren.',
        },
        {
          kind: 'christ',
          id: 'christ-laid-down',
          title: 'Christ Connection — The Standard of Love',
          html:
            'Christ laid down His life for us. Not for the righteous, but for the ungodly. Not for those who loved Him, but for His enemies. This is the definition and measure of agapē. This is what love looks like at its truest and deepest. "Greater love hath no man than this, that a man lay down his life for his friends" (John 15:13). And Jesus laid down His life for those who were not even His friends—He was their judge, their redeemer, their sacrifice. This love breaks the power of hatred. This love conquers the world. And if you abide in Christ, you abide in this love. You are learning to love as He loved.',
        },
        {
          kind: 'carry',
          html:
            'To lay down your life does not necessarily mean martyrdom. It means putting the good of others before your own comfort, convenience, preferences. It means the sacrifice of your time for someone in need. Your words of encouragement when you are tired. Your forgiveness when you want revenge. Your generosity when you want to hoard. Your vulnerability when you want to hide. You lay down your life in small ways, again and again, as Christ laid down His life for you. This is the shape of love in a world broken by sin.',
        },
        {
          kind: 'reflection',
          id: 'lay-down-life',
          prompt:
            'How is Christ asking you to lay down your life—your comfort, your time, your pride—for a brother or sister in need? Where does love call you to sacrifice?',
        },
      ],
    },

    /* ─── 1 John 3:17 — Love in Deed and Truth ───────────────────────── */
    {
      ref: '1 John 3:17',
      title: 'Love in Deed, Not Word Only',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              17,
              t('But whoso hath this world&apos;s good, and seeth his brother have need, and '),
              hy('shutteth up his bowels of compassion', 'compassion-shut'),
              t(' from him, how dwelleth the love of God in him?')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-world-good-brother-need',
          html:
            'John brings love down to earth. It is not abstract. You have goods—resources, money, food, shelter. Your brother has need. You see it. You are aware of it. The question is whether you respond. If you see need and deliberately shut your heart against compassion, how can you claim that the love of God dwells in you? The question is rhetorical. It cannot. Love must express itself in action toward the needy. To have means and refuse to share is to reveal that you are not indwelt by God\'s love.',
        },
        {
          kind: 'greek',
          id: 'compassion-shut',
          title: 'Splagchna — Bowels; Compassion; Deep Feeling',
          script: 'σπλάγχνα',
          translit: '<strong>splagchna</strong> · bowels; innermost parts; seat of emotion; compassion; deep feeling',
          description:
            'The Greeks located emotion in the splagchna—the bowels, the viscera. When Jesus saw the multitude, He was "moved with compassion" in His splagchna (Matt. 14:14). To shut up your splagchna from a brother in need is to harden your heart, to suppress the natural human response to suffering, to say by your action: "Your pain is not my concern." This is the opposite of love.',
        },
        {
          kind: 'commentary',
          id: 'c-love-deed-truth',
          html:
            'Love must express itself in concrete action. Not in kind feelings alone. Not in prayers that are not backed by effort. Not in words without deeds. Real love sees need, feels compassion, and acts. It gives food to the hungry. It clothes the naked. It visits the prisoner. It sends aid to the widow. This is why Jesus taught that the final judgment turns on these concrete acts (Matt. 25:31–46). The love of God is not sentimental. It is costly. It is active. It is real.',
        },
        {
          kind: 'carry',
          html:
            'You cannot hide from this. You either have resources or you do not. If you do, and a brother is in need, the test is simple: do you share? Does your love move from your heart into your hands, your wallet, your schedule? If not, what are you protecting? What are you afraid of? What lies are you believing about scarcity or deservedness that keep you closed? The love of God in you—the agapē of Christ—calls you to open your heart, your home, your resources to those in need.',
        },
        {
          kind: 'reflection',
          id: 'deed-truth',
          prompt:
            'Who in your circle has need that you are aware of? What would it look like to love that person in deed, not just in word? What one concrete action can you take?',
        },
      ],
    },

    /* ─── 1 John 3:18 — Let Us Not Love in Word but in Deed ──────────── */
    {
      ref: '1 John 3:18',
      title: 'Let Us Not Love in Word but in Deed and Truth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              18,
              t('My little children, let us not '),
              hg('love in word, neither in tongue', 'c-word-only'),
              t('; but '),
              hg('in deed and in truth', 'c-deed-truth'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-word-only',
          html:
            'Love in word only is easy. It costs nothing. You can speak tenderness, affection, concern—and do nothing. You can write a kind message and ignore the need. You can offer prayers and withhold action. But this is not love. This is performance. This is deception. It is what James calls faith without works—dead, useless, a contradiction in terms. The world is full of words. Words are cheap. Love proves itself in sacrifice, in action, in cost.',
        },
        {
          kind: 'commentary',
          id: 'c-deed-truth',
          html:
            'Real love expresses itself in deed and in truth. Deed is action—giving, serving, sacrificing. Truth is authenticity—doing what you say, following through on commitment, acting from genuine care rather than pretense. When you love in deed and in truth, your actions line up with your words. Your sacrifice is real. Your care is genuine. This is what builds trust. This is what changes hearts. This is what mirrors Christ.',
        },
        {
          kind: 'carry',
          html:
            'John calls you "little children"—not in diminishment but in affection. He is inviting you into a better way. Stop performing love. Stop speaking empty words. Start acting. Start giving. Start serving. Start laying down your life in ways that cost you something. Let your love be real enough that others can see it, touch it, receive it. This is the revolution Christ calls. Not more words. Fewer, more truthful words. More deeds. More sacrifice. More real, concrete, risky love.',
        },
        {
          kind: 'reflection',
          id: 'deed-not-word',
          prompt:
            'Where in your life is your love still stuck in words? Where do you need to move from talking about love to actually loving someone in deed and truth?',
        },
      ],
    },

    /* ─── 1 John 3:19–21 — Assurance; Conscience; God is Greater ──────── */
    {
      ref: '1 John 3:19–21',
      title: 'If Our Heart Condemn Us, God Is Greater',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              19,
              t('And hereby we know that we are of the truth, and shall assure our hearts before him.')
            ),
            verse(
              20,
              t('For if our heart condemn us, God is greater than our heart, and knoweth all things.')
            ),
            verse(
              21,
              t('Beloved, if our heart condemn us not, then have we confidence toward God.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-know-truth',
          html:
            'How do you know you are of the truth? Not by perfect sinlessness. Not by your feelings. But by the trajectory of your life toward love, toward righteousness, toward following Christ. You grow in love. You repent when you fall. You seek to know Him better. You obey His commandments. This trajectory—however imperfect—is the evidence of truth abiding in you. And in this, you can assure your heart before God. You are His. Your sins are forgiven. Your future is secure.',
        },
        {
          kind: 'commentary',
          id: 'c-heart-condemn',
          html:
            'But there is a moment when your conscience speaks against you. You have done wrong. You know it. Your heart condemn you. In that moment, John reminds you: God is greater than your heart. He knows all things. He knows your failure—you cannot hide it from Him. But He also knows your repentance, your desire to change, your remorse. He knows the context of your struggle, the temptations you face, the fear that gripped you. God\'s knowledge is complete. His judgment is just. And if you have confessed, His forgiveness is complete. Your condemnation cannot stand against His mercy.',
        },
        {
          kind: 'carry',
          html:
            'You will struggle. You will fail. Your conscience will condemn you. In those moments, do not despair. Run to the Father. Confess. Receive forgiveness. Trust that His knowledge of you is complete and His mercy is greater than your failure. And as you walk in integrity, as you seek to love and serve, your heart will grow quieter. Your confidence toward God will strengthen. Not because you are perfect, but because you are honest. Because you are His. Because you have been bought at a price and your sins have been taken away.',
        },
        {
          kind: 'reflection',
          id: 'heart-condemn',
          prompt:
            'What is your heart condemning you for right now? How does it change your perspective to know that God is greater than your heart and knows all things—including your repentance and your desire to change?',
        },
      ],
    },

    /* ─── 1 John 3:22–23 — God Answers Prayer; Believe & Love ─────────── */
    {
      ref: '1 John 3:22–23',
      title: 'Believe on His Name & Love One Another',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              22,
              t('And whatsoever we ask, we receive of him, because we keep his commandments, and do those things that are pleasing in his sight.')
            ),
            verse(
              23,
              t('And this is his commandment, That we should '),
              hy('believe on the name of his Son Jesus Christ', 'c-believe-christ'),
              t(', and '),
              hg('love one another', 'c-love-summary'),
              t(', as he gave us commandment.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-ask-receive',
          html:
            'This is a remarkable promise: whatever you ask, you will receive. But it has a condition. You must keep His commandments and do those things that please Him. In other words, if your life is aligned with His will, if you are seeking what He seeks, your prayers will align with His purposes. You will not ask for selfish things. You will not ask for revenge or harm. You will ask for what He wants to give. And your asking will be granted.',
        },
        {
          kind: 'commentary',
          id: 'c-believe-christ',
          html:
            'Faith in Jesus Christ is the first and foundational commandment. Not mere intellectual assent that He existed, but trust—committing your life to His lordship, your future to His hands, your salvation to His work on the cross. When you believe on His name, you are aligning yourself with His character, His values, His reign. Everything else flows from this belief.',
        },
        {
          kind: 'commentary',
          id: 'c-love-summary',
          html:
            'What is His commandment? John reduces it to two things: believe on the name of His Son Jesus Christ, and love one another. These are not ten commandments or six hundred rules. They are two: faith and love. Trust in Christ. Love your neighbor. Everything in Scripture hangs on these two. If you do these, you fulfill the law. If you fail at these, you fail at everything. All other obedience flows from these two fountains.',
        },
        {
          kind: 'carry',
          html:
            'Your prayer life is powerful when it is rooted in obedience. But obedience is not distant perfection. It is these two things: do you believe in Jesus Christ as Lord and Savior? Do you love the people around you? If you are struggling with prayer, start here. Deepen your faith. Soften your heart toward your neighbor. Take a step of love. And as you do, you will find that your prayers flow more freely, and God listens.',
        },
        {
          kind: 'reflection',
          id: 'believe-love',
          prompt:
            'Where is your faith in Christ most tested? Where is your love for others most difficult? How might strengthening one of these—faith or love—transform the other?',
        },
      ],
    },

    /* ─── 1 John 3:24 — Abideth in Us by the Spirit ──────────────────── */
    {
      ref: '1 John 3:24',
      title: 'Abideth in Us by the Spirit',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              24,
              t('And he that keepeth his commandments dwelleth in him, and he in him. And hereby we know that he '),
              hp('abideth in us, by the Spirit', 'christ-spirit-abide'),
              t(' which he hath given us.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-keepeth-commandments',
          html:
            'The promise is mutual indwelling. You keep His commandments, and you dwell in Him, and He dwells in you. This is not transactional—you obey, therefore He rewards you. It is relational. As you align yourself with His will, you move closer to Him. As you trust Him, He draws near. As you love His people, you are abiding in Him because He is love, and to love is to be in Him. This mutual dwelling is the heart of Christianity.',
        },
        {
          kind: 'greek',
          id: 'greek-menō-abide',
          title: 'Menō — To Abide; To Dwell; To Remain',
          script: 'μένω',
          translit: '<strong>menō</strong> · to remain; to stay; to dwell; to continue; to abide',
          description:
            'Menō is not visiting or passing through. It is remaining, settling, making your home. When Christ abides in you by the Spirit, He is not a guest passing through. He has moved in. He is making His home in your heart. You are His dwelling place, His temple. And you abide in Him—you make your home in His love, His truth, His presence.',
        },
        {
          kind: 'commentary',
          id: 'c-spirit-given',
          html:
            'How do you know Christ abides in you? By the Spirit. God has given you His Spirit as the seal and guarantee of your redemption, as the down payment of your future glory, as the means by which Christ dwells in you now. The Spirit testifies to your spirit that you are God\'s child. The Spirit produces fruit in your life—love, joy, peace, patience, kindness. The Spirit intercedes for you in prayer. The Spirit transforms you from glory to glory into the image of Christ. This is how you know.',
        },
        {
          kind: 'christ',
          id: 'christ-spirit-abide',
          title: 'Christ Connection — Indwelt by God through the Spirit',
          html:
            'The chapter ends where it began, with intimacy and wonder. The Father has loved you and made you His child. The Son has laid down His life for you and died to take away your sins. The Spirit has been given to you as your Counselor, Comforter, and Guide. This is the gospel: not a distant God, but an intimate God who chooses to dwell in you. As Paul writes: "Christ in you, the hope of glory" (Col. 1:27). You are not alone. You are never abandoned. The God who created the cosmos has made His home in your heart.',
        },
        {
          kind: 'carry',
          html:
            'Let this truth settle into your bones. You are not striving alone. You are not trying to be good by your own effort. The Spirit of God is working in you, transforming you, leading you, comforting you. When you fail, the Spirit grieves—not to condemn you, but to turn you back toward righteousness. When you succeed, it is His strength working through you. When you love, it is His love flowing through your heart. You are not bearing this burden alone. Abide in Him. Let Him abide in you. Trust the Spirit who has been given to you.',
        },
        {
          kind: 'reflection',
          id: 'abide-spirit',
          prompt:
            'What would it mean for you to more deeply experience Christ\'s abiding presence by the Spirit? Where do you most need to sense His comfort, guidance, or strength right now?',
        },
        {
          kind: 'artwork',
          matchTitle: /spirit|dove|light|glory|presence/i,
          matchArtist: /caravaggio|rembrandt|tissot/i,
          caption: '1 John 3:24 — Abideth in Us by the Spirit',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'Behold, what manner of love the Father hath bestowed upon us, that we should be called the sons of God. We are God\'s children now. When He shall appear, we shall be like Him. Love one another. He laid down His life for us; and we ought to lay down our lives for the brethren.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 John 3 · Study Guide',
  },

  hasHebrew: false,
};
