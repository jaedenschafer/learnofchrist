import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Romans 3 - The Courtroom Closes, the Gospel Breaks Open
 *
 * Paul systematically closes every escape route. Jew and Gentile stand
 * equally guilty before God. No boasting. No privilege. No works. Yet in
 * verses 21-26 the gospel erupts: redemption through Christ, justification
 * by grace through faith, God both perfectly just AND the justifier of all
 * who believe. This is the hinge of Romans.
 */
export const ROMANS_3: RichChapterContent = {
  bookSlug: 'romans',
  bookName: 'Romans',
  chapter: 3,

  estimatedMinutes: { beginner: 7, intermediate: 15, deep: 20 },
  intros: [
    'Paul has led Jew and Gentile both into a courtroom. The Gentile stands accused—creation screams God&apos;s existence and power, yet you hardened your heart. The Jew stands accused—you have the law itself, yet you did not keep it. Now Paul closes the case. Chapter 3 is the moment when every mouth falls silent before God. There is no advantage. There is no escape. All have sinned. All fall short. This is not cruelty. This is the only foundation on which grace can be built.',
    'But Romans 3 is also the moment when everything changes. In the middle of the indictment, the gospel erupts. God has done what the law could never do. He has provided redemption through Christ&apos;s blood. He declares us righteous—not because we deserve it, not because we have finally obeyed, but because we are "justified freely by his grace." The mercy seat, once hidden in the temple, is now revealed in the body of Christ. His blood is the place where God&apos;s justice and mercy finally meet. And we get to come home through faith.',
  ],

  sections: [
    /* --- Romans 3:1-8 - The Advantage of the Jew --- */
    {
      ref: 'Romans 3:1-8',
      title: 'The Advantage of the Jew',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 1,
              spans: [t('What advantage then hath the Jew? or what profit is there of circumcision?')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom3-advantage-intro',
          html:
            'Paul asks the question his reader is already asking. If both Jew and Gentile are guilty, if righteousness does not come from works, then what good was it to be God&apos;s chosen people? Why receive the law? Why practice circumcision? Paul does not dismiss the question. He answers it directly.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 2,
              spans: [
                t('Much every way: chiefly, because that unto them were committed the '),
                hg('oracles of God', 'rom3-oracles'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom3-oracles',
          html:
            'The oracles of God are the words of God—the Old Testament Scripture. This is the unique treasure of Israel. Not privilege that exempts from judgment, but responsibility for custody of God&apos;s word. The Jew who has the law and breaks it bears a heavier weight of accountability than the Gentile who never received it (Rom. 2:12). Advantage and obligation are two sides of the same coin.',
        },
        {
          kind: 'carry',
          html:
            'You have been given God&apos;s word—in Scripture, in church, in the voice of the Spirit. That is an undeserved advantage. But advantage always comes with weight. What you know, you are responsible for. What you have heard, you must answer for. This is not meant to shame you. It is meant to awaken you to the seriousness of what you hold.',
        },
        {
          kind: 'reflection',
          id: 'rom3-advantage',
          prompt: 'What "oracles of God" have you been entrusted with? What is God calling you to do with what you know?',
        },
      ],
    },

    /* --- Romans 3:3-7 - Let God Be True --- */
    {
      ref: 'Romans 3:3-7',
      title: 'Let God Be True',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 3,
              spans: [
                t('For what if some did not believe? shall their unbelief make the faith of God of none effect?'),
              ],
            },
            {
              number: 4,
              spans: [
                t('God forbid: yea, let '),
                hy('God be true', 'rom3-true-word'),
                t(', but every man a liar; as it is written, That thou mightest be justified in thy sayings, and mightest overcome when thou art judged.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom3-true-word',
          html:
            'Paul throws down the bottom line: human faithlessness does not erase God&apos;s faithfulness. The world shouts lies. Men betray, backslide, deny, doubt. But God&apos;s word stands. His promises cannot be unmade. Let every human mouth fall silent, every excuse evaporate—God remains true. This is not a doctrine. It is the one solid ground you can build your life on.',
        },
        {
          kind: 'greek',
          id: 'rom3-pistis',
          title: 'Pistis - Faith, Faithfulness',
          script: 'πίστις',
          translit: '<strong>Pistis</strong> · faith; belief; faithfulness; trustworthiness',
          description:
            'Paul plays on the word&apos;s double meaning. Human <em>pistis</em> (faith, belief) fails. But God&apos;s <em>pistis</em> (faithfulness, reliability) never wavers. The same root word becomes the great tension of the chapter: we are justified through faith, but our faith is only sure because it rests on God&apos;s faithfulness.',
        },
        {
          kind: 'christ',
          id: 'rom3-christ-faithful',
          title: 'Christ Connection - The Faithful One',
          html:
            'When your faith falters, Christ&apos;s does not. He is "the faithful witness" (Rev. 1:5), the one who "remained faithful" even unto death (Rev. 2:10, 3:14). Hebrews says Christ learned obedience through suffering, yet never once failed to trust His Father. Your justification does not depend on the steadiness of your faith, but on the unwavering faithfulness of the one you believe in. When you are faithless, he remains faithful (2 Tim. 2:13).',
        },
        {
          kind: 'carry',
          html:
            'There will come a moment when your belief wavers. Some circumstance will shake you. The promise will not seem to be coming. God&apos;s voice will feel far away. In that hour, let God be true, and every comfortable feeling a liar. His faithfulness does not depend on whether you are feeling faithful. Build your life on what He has said, not on the fluctuating tides of your own certainty.',
        },
        {
          kind: 'reflection',
          id: 'rom3-faithfulness',
          prompt: 'When has God proven faithful even when you were not? How might your life look different if you chose to believe His faithfulness more than your doubt?',
        },
      ],
    },

    /* --- Romans 3:9-10 - The Case Is Closed --- */
    {
      ref: 'Romans 3:9-10',
      title: 'The Case Is Closed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 9,
              spans: [
                t('What then? are we better than they? No, in no wise: for we have before proved both Jews and Gentiles, that they are all under sin;'),
              ],
            },
            {
              number: 10,
              spans: [
                t('As it is written, '),
                hg('There is none righteous, no, not one', 'rom3-catalog-start'),
                t(':'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom3-catalog-start',
          html:
            'Paul now quotes the Psalms and Isaiah. These are the Old Testament words about the human condition—not the words of Paul, but the words of Scripture itself. From verse 10 through verse 18, Paul strings together a catalog of indictments: none righteous, none seeking God, all gone astray. This is the courtroom testimony. Not an opinion. Scripture itself declares it.',
        },
        {
          kind: 'commentary',
          id: 'rom3-under-sin',
          html:
            'Paul has now made his case. Jew and Gentile are not on different footing—they are both on the same side of a verdict. Both "under sin." Not merely guilty of particular sins, but standing under the power and regime of sin itself. This is not a list of bad deeds. It is a confession of the human condition.',
        },
        {
          kind: 'carry',
          html:
            'You have probably wanted to believe you are better than you are. That your mistakes are fewer, your intentions purer, your heart more true than the next person. These 40 verses are designed to quietly dismantle that wish. Not to crush you, but to humble you into the only posture in which grace can find you: honest about who you really are.',
        },
      ],
    },

    /* --- Romans 3:11-13 - The Catalog: Speech --- */
    {
      ref: 'Romans 3:11-13',
      title: 'The Catalog: What Comes Out',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 11,
              spans: [
                t('None that understandeth, '),
                hg('none that seeketh after God', 'rom3-seek'),
                t('.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('They are all gone out of the way, they are together become unprofitable; there is '),
                hg('none that doeth good, no, not one', 'rom3-good'),
                t('.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Their '),
                hy('throat is an open sepulchre', 'rom3-throat'),
                t('; with their tongues they have used deceit; the poison of asps is under their lips:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom3-seek',
          html:
            'The Psalms Paul quotes paint a portrait of the human condition. Nobody seeks God by nature. We flee from Him instinctively. This is not slander—it is diagnosis. The psalmist is not saying some people seek Him and some don&apos;t. He is saying nobody does. The entire race has turned away.',
        },
        {
          kind: 'commentary',
          id: 'rom3-good',
          html:
            '"None that doeth good, no, not one." This is perhaps the hardest line Paul quotes. It does not say none that doeth perfect good, or none that doeth consistent good. It says <em>none that doeth good</em>—period. Even what we call our goodness is tainted at the root. We do kind things for selfish reasons. We give to be seen. We help to be praised. The good we imagine ourselves to be is, when God looks at the root, not good at all.',
        },
        {
          kind: 'hebrew',
          id: 'rom3-throat',
          title: 'Throat - An Open Sepulchre',
          script: 'גָּרוֹן',
          translit: '<strong>Garon</strong> · throat; speech; mouth',
          description:
            'Paul quotes Psalm 5:9—your throat is an open grave, spilling corruption. The image is visceral. What comes out of your mouth reveals what is dead and decaying inside you. Lies, flattery, poison, deceit—these do not come from nowhere. They flow from the grave within.',
        },
        {
          kind: 'carry',
          html:
            'Listen to the words that come out of your mouth when you are not being careful. The little lies you tell to make yourself sound better. The way you reshape a story to make yourself the hero. The moment you use someone&apos;s weakness against them. Paul is not being poetic. He is saying your words are revealing the dead places inside you. The good news is that a dead place is exactly where resurrection is possible.',
        },
      ],
    },

    /* --- Romans 3:14-18 - The Catalog: Deeds --- */
    {
      ref: 'Romans 3:14-18',
      title: 'The Catalog: What We Do',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 14,
              spans: [
                t('Whose '),
                hy('mouth is full of cursing and bitterness', 'rom3-mouth'),
                t(':'),
              ],
            },
            {
              number: 15,
              spans: [
                t('Their '),
                hg('feet are swift to shed blood', 'rom3-feet'),
                t(':'),
              ],
            },
            {
              number: 16,
              spans: [
                t('Destruction and misery are in their ways:'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And the way of peace have they not known.'),
              ],
            },
            {
              number: 18,
              spans: [
                hp('There is no fear of God before their eyes', 'rom3-fear-god'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom3-mouth',
          html:
            'From cursing and bitterness come wars and relational destruction. What the mouth speaks, the hand follows. Cursing is not only profanity—it is the default posture toward others who frustrate us, the contempt we nurse in our hearts, the ways we diminish people through our words.',
        },
        {
          kind: 'commentary',
          id: 'rom3-feet',
          html:
            'Paul shifts from words to deeds. Swift feet to shed blood: he is not describing only murderers, but every human heart that moves quickly toward destruction. The rage that erupts. The betrayal that flows. The violence you enact—whether in a fight, a firing, a cold shoulder, or a reputation ruined by gossip. You do not need a weapon to shed the blood God cares about.',
        },
        {
          kind: 'commentary',
          id: 'rom3-fear-god',
          html:
            'And the root of it all: no fear of God before their eyes. Not cowering terror, but reverence—the kind of respect that rewires how you treat others. The absence of God-fear means the absence of a reality check. You become the measure of all things. Your hurt justifies your harm. Your desire justifies your betrayal. You act as though no one is watching and no one will judge.',
        },
        {
          kind: 'greek',
          id: 'rom3-phobos',
          title: 'Phobos - Fear, Reverence',
          script: 'φόβος',
          translit: '<strong>Phobos</strong> · fear; reverence; awe-filled respect',
          description:
            'In the New Testament, fear of God is not panic. It is the awestruck reordering of your entire being that happens when you remember you stand before the infinite. It is the line drawn by the knowledge: "I am not God. God is God. And I will answer to Him."',
        },
        {
          kind: 'carry',
          html:
            'The most honest moment in your week might be when you finally name it: you do not live in fear of God. You live as though you are the center, as though your feelings are the court of final appeal, as though nobody is watching. But somebody is. And the reordering of your heart toward Him—toward reverence, not rebellion—is the beginning of everything that is good.',
        },
        {
          kind: 'reflection',
          id: 'rom3-fear-of-god',
          prompt: 'If you lived as though God were actually watching and you would answer to Him, what would change about the way you speak? The way you act? The way you treat the people around you?',
        },
      ],
    },

    /* --- Romans 3:19 - Every Mouth Stopped --- */
    {
      ref: 'Romans 3:19',
      title: 'Every Mouth Stopped',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 19,
              spans: [
                t('Now we know that what things soever the law saith, it saith to them who are under the law: that '),
                hg('every mouth may be stopped, and all the world may become guilty before God', 'rom3-guilt'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom3-guilt',
          html:
            'The courtroom is now silent. Not because anyone has been excused, but because there is nothing left to say. The law—the Scripture itself—has convicted the world. Jew and Gentile. Wise and foolish. Moral and immoral. All guilty. This is the moment of total judgment. Paul is not leaving a loophole. He is not opening a door. He is closing a coffin lid.',
        },
        {
          kind: 'carry',
          html:
            'This is the hardest moment in the Christian life: the moment when you stop talking. When you stop explaining yourself, defending yourself, making excuses. When you step out of the courtroom knowing you have been found guilty. Many people never reach this moment—they argue with God until death. But those who do find something incredible waits on the other side: not condemnation, but mercy.',
        },
      ],
    },

    /* --- Romans 3:20 - By the Law, Knowledge of Sin --- */
    {
      ref: 'Romans 3:20',
      title: 'By the Law, Knowledge of Sin',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 20,
              spans: [
                t('Therefore by the deeds of the law there shall no flesh be justified in his sight: for by the law is the '),
                hy('knowledge of sin', 'rom3-knowledge-sin'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom3-knowledge-sin',
          html:
            'This is the law&apos;s true function. Not to save you. Not to make you righteous. But to show you where you have missed the mark. The law is like a mirror. It does not make your face clean. It shows you your face is dirty. Paul is about to announce that the law cannot justify anyone. But before he does, he reminds us: without the law, we would not even know we were guilty. The law diagnoses the disease. It does not cure it.',
        },
        {
          kind: 'greek',
          id: 'rom3-epignosis',
          title: 'Epignosis - Knowledge',
          script: 'ἐπίγνωσις',
          translit: '<strong>Epignosis</strong> · precise knowledge; full awareness; clear recognition',
          description:
            'This is not vague awareness. It is the kind of knowledge that changes how you see yourself. When you read "Thou shalt not covet" and realize your heart is a hall of envies, that is <em>epignosis</em>—the piercing clarity that the law brings.',
        },
        {
          kind: 'carry',
          html:
            'You know the law—at least the basic outline of it. Do not steal. Do not lie. Love your neighbor. Love God with all your heart. The moment you truly absorb what the law demands, you know you are failing. The question is: will you let that knowledge drive you to Christ, or will you double down on pretending you are doing fine?',
        },
      ],
    },

    /* --- Romans 3:21-26 - But Now: The Gospel --- */
    {
      ref: 'Romans 3:21-26',
      title: 'But Now: The Gospel Breaks Open',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 21,
              spans: [
                hp('But now the righteousness of God without the law is manifested', 'rom3-righteousness'),
                t(', being witnessed by the law and the prophets;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom3-righteousness',
          html:
            'The turning point. Paul shifts from the law&apos;s verdict to God&apos;s solution. The righteousness that the law demands but cannot produce—God now offers it freely. And it is manifested "without the law"—it does not come through obedience, but through grace. This is not a new idea. The law and prophets pointed to it all along. Moses saw it. David saw it. Abraham saw it. But now it is no longer hidden. It is revealed.',
        },
        {
          kind: 'greek',
          id: 'rom3-dikaiosyne',
          title: 'Dikaiosynē - Righteousness',
          script: 'δικαιοσύνη',
          translit: '<strong>Dikaiosynē</strong> · righteousness; justice; right standing; being set right',
          description:
            'This is not self-righteousness. It is the state of being right with God—declared innocent, put in proper relationship with Him. You cannot produce it. But God can declare you to have it, and then the declaration becomes true. This is the heart of the gospel.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 22,
              spans: [
                t('Even the '),
                hg('righteousness of God through faith in Jesus Christ', 'rom3-faith-christ'),
                t(' unto all them that believe: for there is no difference;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom3-faith-christ',
          html:
            'The righteousness of God is made available through faith in Christ. Not through your effort, not through your moral improvement, but through believing in who Christ is and what He has done. And this is "unto all them that believe"—the same offer to every person. Jew and Gentile. Moral and immoral. The only prerequisite is belief.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 23,
              spans: [
                t('For '),
                hy('all have sinned', 'rom3-all-sinned'),
                t(', and come short of the glory of God;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom3-all-sinned',
          html:
            'Paul brings back the diagnosis, but now as the foundation for grace, not condemnation. You have sinned. Your best friend has sinned. The person who appears most righteous has sinned. Everyone. And what now? Not judgment, but the next verse.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 24,
              spans: [
                t('Being '),
                hp('justified freely by his grace', 'rom3-justified-grace'),
                t(' through the '),
                hy('redemption that is in Christ Jesus', 'rom3-redemption'),
                t(':'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom3-justified-grace',
          html:
            'Freely—without price from you, though at infinite price from Christ. By grace—not earned, not deserved, pure gift. Justified—declared righteous in a court of law. All of this happens because of His grace, not your effort. This word "justified" is a legal term. God is the judge. You are the guilty party. But His verdict is: not guilty. Righteous. Acceptable.',
        },
        {
          kind: 'commentary',
          id: 'rom3-redemption',
          html:
            'Redemption—the bought-back freedom of someone held in captivity. You were prisoners of sin and death. Redemption is the price paid to set you free. That price is Christ Himself. His blood is the ransom. Not a theoretical transaction, but a cosmic exchange: you give Him your guilt; He gives you His righteousness.',
        },
        {
          kind: 'greek',
          id: 'rom3-apolytrosis',
          title: 'Apolytrosis - Redemption',
          script: 'ἀπολύτρωσις',
          translit: '<strong>Apolytrosis</strong> · redemption; release; liberation at a price',
          description:
            'You were held captive by sin and death. Apolytrosis means you have been freed from that captivity—but the freedom cost something. The ransom was paid. Not with money, but with blood. Christ Himself is the price of your liberation (Mark 10:45).',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 25,
              spans: [
                t('Whom God hath '),
                hy('set forth to be a propitiation', 'rom3-hilasterion'),
                t(' through faith in his blood, to declare his righteousness for the remission of sins that are past, through the forbearance of God;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom3-hilasterion',
          html:
            'A propitiation is the place where sacrifice turns away wrath. In the Old Testament, it was the mercy seat—the lid of the ark where the high priest sprinkled blood once a year to atone for the people. Christ Himself becomes that mercy seat. His blood is poured out to satisfy God&apos;s justice. The wrath that you deserve is poured onto Him instead. And then He rises.',
        },
        {
          kind: 'greek',
          id: 'rom3-hilasterion-word',
          title: 'Hilastērion - Propitiation, Mercy Seat',
          script: 'ἱλαστήριον',
          translit: '<strong>Hilastērion</strong> · propitiation; atonement; mercy seat; place of reconciliation',
          description:
            'This word echoes the mercy seat of the ark of the covenant (Exodus 25:17). The place where God&apos;s justice and mercy met once a year now becomes Christ Himself. His body is the meeting place. His blood is the sacrifice. His death is the atonement. The temple veil tears because access is now open to all.',
        },
        {
          kind: 'christ',
          id: 'rom3-christ-mercy-seat',
          title: 'Christ Connection - The Mercy Seat in His Blood',
          html:
            'On the Day of Atonement, the high priest alone entered the Holy of Holies carrying blood to sprinkle on the mercy seat. All the sins of the year were transferred onto the scapegoat, which was sent into the wilderness. Christ is both: the scapegoat who bears away our sin, and the mercy seat where God&apos;s judgment and mercy finally embrace. "In his blood" — the imagery is explicit. The place where His blood is poured is the place where justice is satisfied and we are reconciled (1 John 2:2).',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 26,
              spans: [
                t('To declare, I say, at this time his righteousness: that he might be just, and the '),
                hp('justifier of him which believeth in Jesus', 'rom3-just-justifier'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom3-just-justifier',
          html:
            'God does not wink at sin. He does not wave away your guilt. He is perfectly just—sin must be punished. But He also justifies you—declares you righteous. How can He do both? Through Christ. Christ takes the punishment you deserve. You receive the righteousness He earned. God is both just in His judgment and kind in His justification. The cross is the only place where these two can be true at the same time.',
        },
        {
          kind: 'carry',
          html:
            'You have been guilty. You are guilty. And you will be guilty again before the day is done. But if you believe in Jesus—if you trust that He really did bear your sin and rise again—then you are also justified. Right now. Not because you feel it. Not because you have cleaned yourself up. But because He has already paid.',
        },
        {
          kind: 'reflection',
          id: 'rom3-justification',
          prompt: 'What would it mean for you to truly stop trying to justify yourself, and to let Christ be your justifier instead? What would become possible if you really believed that?',
        },
      ],
    },

    /* --- Romans 3:27-28 - Boasting Excluded --- */
    {
      ref: 'Romans 3:27-28',
      title: 'Boasting Excluded',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 27,
              spans: [
                t('Where is boasting then? It is '),
                hg('excluded', 'rom3-boast-excluded'),
                t('. By what law? of works? Nay: but by the law of faith.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom3-boast-excluded',
          html:
            'Paul circles back to his opening question: what advantage has the Jew? What is there to boast about? The answer now is clarified: nothing. If salvation came by works, then the person who worked hardest could boast. But salvation comes by faith—and faith is an admission that you cannot do it yourself. Faith is the death of boasting. The moment you believe, you concede: I could not save myself. Someone else had to.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 28,
              spans: [
                t('Therefore we conclude that a man is '),
                hp('justified by faith', 'rom3-faith-justifies'),
                t(', without the deeds of the law.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom3-faith-justifies',
          html:
            'This is the hinge. Not the deeds of the law. Not your moral achievements, your religious practices, your good behavior, your spiritual disciplines. Faith. Trust. Belief in the one who has already done what the law demanded and you could not. This does not mean the law is bad. It means the law was never meant to save you. It was meant to show you that you need a Savior.',
        },
        {
          kind: 'carry',
          html:
            'You have probably spent energy trying to be good enough. To earn God&apos;s favor through your obedience, your service, your effort. And the gospel says: stop. You will never be good enough. And you do not have to be. Believe. Rest. Trust Christ. Let go of the machinery of self-improvement and enter into the reality of being loved while you are still a sinner.',
        },
        {
          kind: 'reflection',
          id: 'rom3-boasting',
          prompt: 'Where in your life are you still trying to earn something that has already been given to you? What would it look like to surrender that and simply believe?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'All have sinned, and come short of the glory of God; Being justified freely by his grace through the redemption that is in Christ Jesus; whom God hath set forth to be a propitiation through faith in his blood.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Romans 3 · Study Guide',
  },
};
