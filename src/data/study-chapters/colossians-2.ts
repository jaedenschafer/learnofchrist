import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Colossians 2 - All-Sufficiency in Christ
 *
 * Paul writes to believers facing false teachers offering supplements to Christ:
 * angelic worship, ascetic disciplines, hidden wisdom, cosmic powers. His response
 * is categorical: Christ is all-sufficient. In Him dwell all the treasures of wisdom.
 * You are complete in Him. This is the charter of Christian freedom — not permission
 * to sin, but liberation from the impossible burden of earning favor through works.
 * Every false practice, every false teacher, every fear of cosmic forces dissolves
 * in the presence of Christ&apos;s all-sufficiency.
 */
export const COLOSSIANS_2: RichChapterContent = {
  bookSlug: 'colossians',
  bookName: 'Colossians',
  chapter: 2,

  estimatedMinutes: { beginner: 9, intermediate: 18, deep: 27 },
  topicTags: ['kingship', 'unity', 'holiness', 'love'],
  opener: {
    topical: true,
    caption: 'Colossians 2',
  },
  intros: [
    'Paul writes to the church at Colossae under siege. False teachers have arrived, offering a spiritual upgrade — hidden wisdom, mediation through angels, observance of dietary rules and holy days, ascetic practices. The promise is spiritual fullness. The result is spiritual slavery. These teachers agreed that Christ was important, but He was not enough. You needed more. You needed supplements.',
    'Paul&apos;s response cuts to the heart. In Christ dwells all the fullness of God bodily. You have received everything. You are complete. To add to this is to diminish it. Colossians 2 is an explosive restatement of Christian freedom — not the freedom to do as you please, but freedom from the burden of earning divine favor, freedom from fear of cosmic powers, freedom from the tyranny of works. You are in Christ. That is enough.',
  ],

  sections: [
    /* ─── Colossians 2:1–3 — Paul&apos;s Great Conflict ────────────────── */
    {
      ref: 'Colossians 2:1–2',
      title: 'Paul&apos;s Great Conflict for You',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 1,
              spans: [
                t('For I would that ye knew what '),
                hp('great conflict I have for you', 'c2-conflict'),
                t(', and for them at Laodicea, and for as many as have not seen my face in the flesh;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c2-conflict',
          html:
            'Paul speaks of his struggle for the Colossians. This is no armchair philosophy—he is in anguish. He has not visited them in person, yet he is wrestling in prayer, contending spiritually on their behalf. The word <em>agōn</em> (conflict) is the word used for an athletic contest or a battle. Paul is in a fight for their souls. Not a fight against them, but for them. Against the lies they are being taught.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 2,
              spans: [
                t('That their hearts might be comforted, being '),
                hg('knit together in love', 'c2-knit'),
                t(', and unto all riches of the full assurance of understanding, to the acknowledgement of '),
                hp('the mystery of God, and of the Father, and of Christ', 'c2-mystery'),
                t(';'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c2-knit',
          html:
            'Paul wants their hearts "knit together in love," leading to <em>full assurance[res:plerophoria-scaife]</em> of understanding. Not divided by false doctrine, not scattered by competing loyalties to angels and disciplines, but bound together in love. This is the antidote to false teaching. Not isolation, but community. Not private knowledge hidden from others, but shared affection. True assurance comes from being rooted together in Christ.',
        },
        {
          kind: 'commentary',
          id: 'c2-mystery',
          html:
            'Paul speaks of <em>the mystery of God, and of the Father, and of Christ</em>. Notice how he holds these together. The mystery is not hidden cosmic knowledge for initiates. It is the revelation of God through Christ. The false teachers claimed to have <em>secret knowledge[res:gnosticism-sbl]</em> that led to mystical experiences and hidden wisdom. Paul says: the real mystery—God&apos;s hidden purpose—has been revealed in Christ. Everything you need to know is there.',
        },
        {
          kind: 'greek',
          id: 'c2-mysterion',
          title: 'Mystērion — "Mystery"',
          script: 'μυστήριον',
          translit: '<strong>Mystērion</strong> · mystery; hidden secret; divine plan revealed',
          description:
            'In Paul, <em>mystērion</em> is not something permanently hidden, but a secret that God has made known. The false teachers promised revelation of secret mysteries through angel worship and discipline. Paul says the real mystery—God&apos;s purpose from before the foundation of the world—has been revealed in Christ. You do not need a secret initiation. Christ is the revelation.',
        },
        {
          kind: 'carry',
          html:
            'You may feel as Paul did—in a fight for something or someone you care about. That fight is real. Your prayer for the people you love matters. The false voices are loud, seductive, offering something that sounds like spiritual upgrade. But you are not powerless. Your love, your truth-telling, your own rootedness in Christ speaks louder than you know.',
        },
        {
          kind: 'reflection',
          id: 'c2-conflict-reflect',
          prompt: 'Who are you in a "great conflict" for right now? What false teachings or lies are you watching someone you love begin to believe? How might your prayer and faithful witness turn the tide?',
        },
      ],
    },

    /* ─── Colossians 2:3 — All Treasures Hidden in Christ ──────────── */
    {
      ref: 'Colossians 2:3',
      title: 'All the Treasures of Wisdom and Knowledge',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 3,
              spans: [
                t('In whom are hid all the '),
                hp('treasures of wisdom and knowledge', 'c2-treasures'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c2-treasures',
          html:
            'Paul makes an audacious claim. All the treasures of wisdom and knowledge are hidden in Christ. Not half. Not most. All. The false teachers offered human philosophy, secret gnosis, angelic mediation as sources of wisdom. Paul cuts through: Christ has it. Everything. Nothing is hidden from Him. Nothing is locked away in some mystery that requires a guide to unlock. If wisdom is what you are seeking, look to Christ. If knowledge is what you are hungering for, you will find it in Him.',
        },
        {
          kind: 'greek',
          id: 'c2-thesauros',
          title: 'Thēsauros — "Treasure"',
          script: 'θησαυρός',
          translit: '<strong>Thēsauros</strong> · treasure; store; repository; what is of great value',
          description:
            'A thesauros is not something cheap or trivial. It is treasure—wealth so valuable that people give their lives to find it. Paul says all of this is hidden in Christ. Every insight, every truth, every key to understanding the cosmos and your own soul. The only place to dig is in Christ.',
        },
        {
          kind: 'christ',
          id: 'c2-christ-wisdom',
          title: 'Christ Connection — The Treasure You Already Possess',
          html:
            'Paul will later write that Christ Himself is "the wisdom of God" (1 Cor. 1:24). Every wisdom you need is not somewhere else, with some other teacher, through some other discipline. It is in Christ. And if you are in Christ, you are not seeking outside yourself. The treasure is not distant. It is not hidden in some esoteric text or angelic revelation. It is in the person you have already trusted. Every spiritual depth you hunger for is found in deepening your knowledge of Him.',
        },
        {
          kind: 'carry',
          html:
            'You may feel the pull toward wisdom elsewhere — in psychology, in spirituality, in philosophy, in the advice of those who sound more sophisticated, more enlightened, more initiated than simple faith in Christ. Paul says: why look elsewhere when all the treasures are already yours? The hunger for meaning, for truth, for depth — it will be satisfied in Christ, not in chasing what you think is hidden.',
        },
        {
          kind: 'reflection',
          id: 'c2-treasures-reflect',
          prompt: 'What treasure are you secretly searching for — approval, significance, secret knowledge, spiritual power? How might your life change if you truly believed all of it is hidden in Christ?',
        },
      ],
    },

    /* ─── Colossians 2:4–8 — Beware Lest Any Man Spoil You ──────────────── */
    {
      ref: 'Colossians 2:4–8',
      title: 'Beware Lest Any Man Spoil You',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 4,
              spans: [
                t('And this I say, lest any man should '),
                hg('beguile you with enticing words', 'c2-beguile'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c2-beguile',
          html:
            'False teaching does not arrive in sackcloth and ashes. It comes with <em>enticing words</em> — attractive, plausible, sophisticated. The false teachers at Colossae offered their system in compelling language. Philosophy. Discipline. Cosmic knowledge. It all sounded reasonable. It all sounded like it would deepen your spiritual life. Paul says: do not be dazzled. Attractive language can conceal destructive error.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 5,
              spans: [
                t('For though I be absent in the flesh, yet am I with you in the spirit, joying and beholding your '),
                hg('order, and the stedfastness of your faith in Christ', 'c2-steadfast'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c2-steadfast',
          html:
            'Paul affirms them. He sees order and steadfastness in their faith. Not because they are perfect, but because they have held fast to Christ. This is not weakness or gullibility. This is strength — the strength of not being swayed by new doctrines every season.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 6,
              spans: [
                t('As ye have therefore received Christ Jesus the Lord, so '),
                hp('walk ye in him', 'c2-walk-in-him'),
                t(': Rooted and built up in him, and stablished in the faith, as ye have been taught, abounding therein with thanksgiving.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c2-walk-in-him',
          html:
            'This is the pattern Paul urges: walk in the same way you received Christ. You did not receive Him through secret knowledge or angelic mediation. You received Him through the gospel — by grace, through faith. So walk in Him the same way. Not by adding disciplines. Not by adding fears. But by deepening your trust, your dependence, your gratitude. Root yourself deeper in Christ.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 8,
              spans: [
                t('Beware lest any man spoil you through '),
                hg('philosophy and vain deceit', 'c2-spoil'),
                t(', after the tradition of men, after the rudiments of the world, and not after Christ.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c2-spoil',
          html:
            'Philosophy and vain deceit — human wisdom that ignores Christ. The false teachers at Colossae mixed Christian faith with Jewish law-keeping, with Pagan asceticism, with angel worship. None of it "after Christ." All of it based on "the tradition of men" and "the rudiments of the world" — elementary principles that belong to the old creation, not the new. Paul says clearly: this will spoil you. It will rob you of the freedom and fullness you have in Christ.',
        },
        {
          kind: 'greek',
          id: 'c2-philosophia',
          title: 'Philosophia — "Philosophy"',
          script: 'φιλοσοφία',
          translit: '<strong>Philosophia</strong> · philosophy; human wisdom; reasoning apart from revelation',
          description:
            'Paul is not against thinking or reflection. He is against any wisdom system that ignores Christ and relies on human reasoning alone. When philosophy becomes a replacement for faith in Christ — whether in the form of Greek rationalism, mysticism, or asceticism — it becomes "vain deceit," hollow and deceptive.',
        },
        {
          kind: 'carry',
          html:
            'The enticing words are still here. Different flavors, same poison. Spirituality without Christ. Self-improvement without grace. The promise that if you do enough, understand enough, achieve enough, you will finally be complete. Paul says: you already are. In Christ, you are already complete. Any system that suggests otherwise, no matter how compelling it sounds, is spoiling you. It is robbing you of the very fullness it promises.',
        },
        {
          kind: 'reflection',
          id: 'c2-spoil-reflect',
          prompt: 'What "enticing words" are you listening to right now? What false philosophy is slowly replacing your trust in Christ? Name it. And choose again to walk in Him.',
        },
      ],
    },

    /* ─── Colossians 2:9–10 — The Fullness of the Godhead in Christ ─────────── */
    {
      ref: 'Colossians 2:9–10',
      title: 'In Him Dwells the Fullness of the Godhead Bodily',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 9,
              spans: [
                t('For in him dwelleth all the '),
                hp('fulness of the Godhead bodily', 'c2-fullness-godhead'),
                t('. And ye are complete in him, which is the head of all principality and power:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c2-fullness-godhead',
          html:
            'This is the theological heart of Colossians. All of God&apos;s fullness — His power, His wisdom, His holiness, His love — dwells in Christ in bodily form. Not in hints or whispers. Not mediated through angels or cosmic intermediaries. But directly, in a human body. God did not send a representative. He came Himself. The false teachers feared that the divine was too vast, too pure, to touch matter. Paul says: that fear is exactly backward. God did touch matter. He became matter. In Christ, divinity and humanity are united without mixture or separation.',
        },
        {
          kind: 'greek',
          id: 'c2-pleroma',
          title: 'Plērōma — "Fullness" or "Completeness"',
          script: 'πλήρωμα',
          translit: '<strong>Plērōma</strong> · fullness; completeness; the totality; that which fills',
          description:
            'Pleroma is the whole, complete thing — nothing left out. When Paul says God&apos;s pleroma dwells in Christ, he means the totality of divinity. Nothing is lacking. No divine attribute is withheld. No cosmic wisdom is hidden elsewhere. It is all there, in Christ.',
        },
        {
          kind: 'greek',
          id: 'c2-theotes',
          title: 'Theotēs — "Deity" or "Godhood"',
          script: 'θεότης',
          translit: '<strong>Theotēs</strong> · deity; godhood; the nature of being God',
          description:
            'The unique nature of being God — infinite, eternal, all-knowing, all-powerful — this <em>theotēs</em>, this godhood, dwells in Christ bodily. Not as a quality He assumed. As His essential nature, made manifest in flesh.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 10,
              spans: [
                t('And ye are '),
                hy('complete in him', 'c2-complete-verse'),
                t(', which is the head of all principality and power:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c2-complete-verse',
          html:
            'Now comes the pivot. Because Christ possesses all fullness, you do not lack. You are complete in Him. Not growing toward completeness. Not seeking completeness. Already, right now, complete. The false teachers promised that through their disciplines and knowledge you would become complete. Paul says: you already are. The moment you were baptized into Christ, you received the completeness of the God who fills all things. You do not earn it. You cannot improve on it. You possess it.',
        },
        {
          kind: 'christ',
          id: 'c2-christ-head',
          title: 'Christ Connection — The Head of All Powers',
          html:
            'Paul adds a crucial word: Christ is "the head of all principality and power." The cosmic powers that terrified the false teachers — the angelic beings, the demonic forces, the cosmic rulers — all of them are under Christ&apos;s authority. They are not threats to you. They are not beings you need to fear or placate or mediate with through angels. Christ is their Lord. And He is your Lord. You do not need their power. You have His.',
        },
        {
          kind: 'carry',
          html:
            'You may feel incomplete. Lacking. Searching. Not enough. But if you are in Christ, you need to hear this truth: you are complete. Not because you have earned it. Not because you have finally figured it out. But because the fullness of God dwells in Christ, and you are in Christ. Every spiritual depth you hunger for is already yours. Every power you need, He possesses. Every truth you seek, He is. The question is not whether you have enough. The question is whether you will believe it.',
        },
        {
          kind: 'reflection',
          id: 'c2-complete-reflect',
          prompt: 'You are complete in Christ. Do you believe this in your bones? What does your daily life suggest you actually believe about your completeness? Where are you still searching elsewhere?',
        },
      ],
    },

    /* ─── Colossians 2:11–13 — Circumcision Made Without Hands ─────────────────── */
    {
      ref: 'Colossians 2:11–13',
      title: 'The Circumcision Made Without Hands',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 11,
              spans: [
                t('In whom also ye are '),
                hy('circumcised with the circumcision made without hands', 'c2-circumcision'),
                t(', in putting off the body of the sins of the flesh by the circumcision of Christ:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c2-circumcision',
          html:
            'The false teachers apparently taught that believers needed to submit to physical circumcision — the Jewish rite that marked covenant membership. Paul says: you have already received a circumcision far greater than the physical one. This is a circumcision of the heart, wrought by Christ Himself. He has cut away your old nature, your sinful flesh, your alienation from God. Not by a blade, but by His death.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 12,
              spans: [
                t('Buried with him in '),
                hg('baptism', 'c2-baptism'),
                t(', wherein also ye are risen with him through the faith of the operation of God, who hath raised him from the dead.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c2-baptism',
          html:
            'Baptism is the sign and seal of what has happened in Christ. You have been buried with Him — your old self, your sins, your separation from God all submerged. But you have also been raised with Him. Not as a future hope, but as a present reality. The power that raised Christ from death — the greatest power in the cosmos — is the power that has raised you to new life. You are not waiting for this. You are in it.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 13,
              spans: [
                t('And you, being dead in your sins and the uncircumcision of your flesh, hath he quickened together with him, having forgiven you all trespasses;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c2-quickened',
          html:
            'You were dead. Cut off from God, trapped in sin, unable to save yourself. But Christ has made you alive. Quickened. Your sins — all of them, past, present, future — have been forgiven. Not because you deserve it. Not because you are finally good enough. But because Christ bore them. You do not have to fear judgment for sins He has already carried away.',
        },
        {
          kind: 'carry',
          html:
            'The old you is dead. That person who lived in fear, in shame, in the burden of trying to earn favor — that person was buried with Christ. And the you that rose from the water is a new creation. A person who is forgiven, alive, empowered by the same Spirit that raised Christ. You may still feel the gravity of your old self sometimes. But you are no longer trapped there. You have risen.',
        },
        {
          kind: 'reflection',
          id: 'c2-circumcision-reflect',
          prompt: 'What part of your old self — your shame, your guilt, your self-hatred — have you not yet let Christ bury with Him? What would it mean to truly believe you have risen into new life?',
        },
      ],
    },

    /* ─── Colossians 2:14–15 — Nailing It to the Cross ────────────────────── */
    {
      ref: 'Colossians 2:14–15',
      title: 'The Handwriting Against Us, Nailed to the Cross',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 14,
              spans: [
                t('Blotting out the '),
                hg('handwriting of ordinances that was against us', 'c2-handwriting'),
                t(', which was contrary to us, and took it out of the way, nailing it to his cross;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c2-handwriting',
          html:
            'Paul uses the image of a legal document — the <em>handwriting[res:handwriting-cross-intertextual]</em> (cheirographon) that records your debt. The law, with all its demands, stands against you. You cannot keep it. You have broken it. That document is a sentence of death upon you. But Christ has taken it off the record. He has nailed it to His cross. The legal verdict against you is no longer active. It has been discharged.',
        },
        {
          kind: 'greek',
          id: 'c2-cheirographon',
          title: 'Cheirographon — "Handwriting" or "Document"',
          script: 'χειρόγραφον',
          translit: '<strong>Cheirographon</strong> · handwriting; written document; record of debt or obligation',
          description:
            'In the first-century world, a cheirographon was a document written in your own hand — a record of a debt or obligation you owed. Paul uses this image to describe the law. It is the record of what you owe to God. And Christ has taken that record to the cross and obliterated it.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 15,
              spans: [
                t('And having '),
                hp('spoiled principalities and powers', 'c2-spoiled-powers'),
                t(', he made a shew of them openly, '),
                hg('triumphing over them in it', 'c2-triumph'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c2-spoiled-powers',
          html:
            'Paul uses military language. The principalities and powers — the cosmic forces of evil, the demonic realms — have been spoiled, stripped of their armor, rendered powerless. This is not future language. It happened at the cross. Christ defeated them, publicly, decisively.',
        },
        {
          kind: 'commentary',
          id: 'c2-triumph',
          html:
            'Christ made a "shew of them openly," displaying them in triumph. The cross looked like a defeat. A man, executed, dead, buried. But it was the greatest triumph in history. The powers that held humanity in bondage — fear, shame, death itself — all defeated. And He displayed His victory publicly. Everyone saw. Everyone knows.',
        },
        {
          kind: 'greek',
          id: 'c2-thriambeuō',
          title: 'Thriambeuō — "Triumphing"',
          script: 'θριαμβεύω',
          translit: '<strong>Thriambeuō</strong> · to triumph over; to display as a conquered enemy; to celebrate victory',
          description:
            'In Roman warfare, a general would lead his defeated enemies through the city in chains, displaying them to all. Paul uses this word for Christ&apos;s victory. The powers of evil are led in chains, conquered, defeated, their power over you forever broken.',
        },
        {
          kind: 'christ',
          id: 'c2-christ-victory',
          title: 'Christ Connection — Your Cosmic Advocate',
          html:
            'The cosmic forces that terrified the false teachers — Paul tells you they are not your threat. Christ has already dealt with them. They tried to hold you by shame, by fear, by the legal condemnation of the law. But Christ has severed all those chains. The handwriting against you is gone. The powers that enslaved you are defeated. You stand under the protection of the one who has conquered all.',
        },
        {
          kind: 'carry',
          html:
            'You may still feel the weight of shame — the record of your sins, the condemnation of the law you cannot keep. That weight was real. But it has been nailed to the cross. Christ took it there. And the forces that used that condemnation against you — fear, accusation, despair — they have been defeated. Not tomorrow. Not after you have done enough. Now. Already. They have no legal standing over you anymore.',
        },
        {
          kind: 'reflection',
          id: 'c2-triumph-reflect',
          prompt: 'What condemns you most powerfully right now — shame, failure, the voice that says you are not enough? Christ has nailed that condemnation to the cross. Will you believe it?',
        },
      ],
    },

    /* ─── Colossians 2:16–17 — Shadow and Body ───────────────────────────── */
    {
      ref: 'Colossians 2:16–17',
      title: 'Shadow and Body: The Substance Is in Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 16,
              spans: [
                t('Let no man therefore judge you in meat, or in drink, or in respect of an holyday, or of the new moon, or of the sabbath days: Which are a shadow of things to come; but the body is of Christ.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c2-shadow-body',
          html:
            'The false teachers were insisting on dietary restrictions and observance of Jewish festivals. Paul says: these are shadows. Real shadows, cast by real things — the Old Testament system with its sacrifices, its feasts, its rest days, all pointing forward to Christ. But shadows are not the reality. You are not living under the shadow anymore. You are living in the substance. The shadow was the preparation. Christ is the fulfillment. To demand that you keep living under the shadow when the substance has arrived is to turn the clock backward.',
        },
        {
          kind: 'greek',
          id: 'c2-skia',
          title: 'Skia — "Shadow"',
          script: 'σκία',
          translit: '<strong>Skia</strong> · shadow; that which is cast by light; preliminary indication',
          description:
            'A shadow is real — it proves that something solid is blocking the light. But a shadow is not the thing itself. The Old Testament rituals, holy days, and dietary laws were not useless. They cast a shadow of Christ. But Christ Himself has come. The shadow can be set aside. The substance has arrived.',
        },
        {
          kind: 'christ',
          id: 'c2-christ-substance',
          title: 'Christ Connection — You Live in the Substance',
          html:
            'Every Sabbath rest pointed to the eternal rest that Christ offers. Every sin offering pointed to His sacrifice. Every Day of Atonement pointed to His reconciliation of humanity with God. The feasts, the temples, the priesthood — all shadows cast by the light of Christ coming. Now He is here. Now you live in the reality. Hebrews makes this clear: Christ is superior to the shadows because He is the substance. To cling to the shadow is to say you do not trust the substance.',
        },
        {
          kind: 'carry',
          html:
            'You may feel pressure to earn spiritual standing through disciplines, observances, self-deprivation. Eat less. Do more. Achieve more. These can sound pious. But Paul says: you are no longer under the shadow of the law. You are living in the substance of Christ. Your freedom from condemnation is not conditional on your effort. Your acceptance before God is not earned through your works. You are in Christ. That is the substance. Everything else is shadow.',
        },
        {
          kind: 'reflection',
          id: 'c2-shadow-reflect',
          prompt: 'What shadows — works, disciplines, religious performances — are you still trying to live under? What would it look like to step fully into the substance of Christ instead?',
        },
      ],
    },

    /* ─── Colossians 2:18–19 — Holding to the Head ───────────────────────────── */
    {
      ref: 'Colossians 2:18–19',
      title: 'Holding to the Head, from Which the Body Grows',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 18,
              spans: [
                t('Let no man '),
                hg('beguile you of your reward', 'c2-beguile-reward'),
                t(' in a voluntary humility and worshipping of angels, intruding into those things which he hath not seen, vainly puffed up by his fleshly mind;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c2-beguile-reward',
          html:
            'The false teachers promoted angel worship as a spiritual practice — a way to go deeper, to access hidden realms. They dressed it in the language of "humility," claiming that approaching God directly was presumptuous — better to go through intermediaries. Paul says this will rob you. It will steal your reward, your inheritance in Christ. And it is deceptive. They claim to have seen visions ("intruding into those things which he hath not seen"), but they are actually puffed up with empty pride.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 19,
              spans: [
                t('And not '),
                hp('holding the Head', 'c2-hold-head'),
                t(', from which all the body by joints and bands having nourishment ministered, and knit together, increaseth with the increase of God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c2-hold-head',
          html:
            'This is the bottom line. If you let go of Christ — if you stop holding to Him as your head and your source — the body cannot grow. You cannot skip over Christ to access some higher truth. You cannot go around Him to some angelic realm. He is the head. All nourishment, all growth, all increase comes from Him. The metaphor is organic: joints, bands, nourishment, growth. A body separated from its head does not grow. It dies. Your spiritual growth is entirely dependent on your connection to Christ as the head.',
        },
        {
          kind: 'greek',
          id: 'c2-auxanō',
          title: 'Auxanō — "To Grow" or "To Increase"',
          script: 'αὐξάνω',
          translit: '<strong>Auxanō</strong> · to grow; to increase; to multiply; to become greater',
          description:
            'This word describes organic growth — the way a plant grows, the way a body grows, the way a church grows. The growth is not imposed from outside. It comes from the life-giving connection to the source. For believers, that source is Christ. Cut off from the head, growth ceases. Connected to Christ, you increase with His own increase.',
        },
        {
          kind: 'carry',
          html:
            'You are not growing spiritually by going around Christ to access something higher. You are not deepening your faith by looking past Him to some cosmic principle or angelic guide. Your growth — real growth, lasting growth, growth that satisfies your deepest hunger — comes from holding more tightly to Christ, learning more of Him, trusting Him more deeply. He is the source. He is the nourishment. All you need is already flowing from Him into you.',
        },
        {
          kind: 'reflection',
          id: 'c2-head-reflect',
          prompt: 'Are you holding to Christ as your head? Or are you looking past Him, seeking nourishment elsewhere? What would it look like to let all your growth come from Him?',
        },
      ],
    },

    /* ─── Colossians 2:20–23 — Dead with Christ, Free from Ordinances ───────────────── */
    {
      ref: 'Colossians 2:20–23',
      title: 'Dead with Christ: Released from the Ordinances of the World',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 20,
              spans: [
                t('Wherefore if ye be '),
                hg('dead with Christ from the rudiments of the world', 'c2-dead-rudiments'),
                t(', why, as though living in the world, are ye subject to ordinances,'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c2-dead-rudiments',
          html:
            'Paul moves to the logical conclusion. You have died with Christ. You have been buried with Him. You have risen with Him. You are no longer bound by the basic principles of this world — the fear-driven systems, the shame-driven disciplines, the human philosophies that promise spiritual depth but deliver only bondage. You are dead to all of that. Why, then, would you willingly re-enslave yourself?',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 21,
              spans: [
                t('('),
                hg('Touch not; taste not; handle not', 'c2-asceticism'),
                t(';'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c2-asceticism',
          html:
            'Paul quotes the false teachers&apos; regulations. Don&apos;t touch this. Don&apos;t taste that. Don&apos;t handle the other thing. These rules sound spiritual. They sound like you are taking the faith seriously. But they are, Paul says, rules about earthly things — not about heaven, not about your eternal standing, not about your relationship with God. They are surface prohibitions that address symptoms, not the root.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 22,
              spans: [
                t('Which all are to perish with the using;) after the commandments and doctrines of men.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c2-perish-using',
          html:
            'These rules address things that perish in the using. Physical food, physical touch, physical objects — all temporary, all corruptible. The false teachers have created entire spiritual systems around managing the temporary. But you are not made for this. You are made for Christ. Your real life is hidden with Him in God. To invest your spiritual energy in prohibitions about the physical world is to miss what matters.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 23,
              spans: [
                t('Which things have indeed a shew of wisdom in will worship, and humility, and neglecting of the body; not in any honour to the '),
                hp('satisfying of the flesh', 'c2-satisfy-flesh'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c2-satisfy-flesh',
          html:
            'This is Paul&apos;s final, cutting observation. These rules have the appearance of wisdom. They look humble. They sound disciplined. But they do not work. They do not actually subdue the flesh or satisfy the deepest hungers of your soul. Why? Because they address the symptom, not the disease. The disease is sin, alienation from God, the death in your spirit. The cure is Christ. All the ascetic disciplines in the world will never substitute for being alive in Him. And the moment you are alive in Him — truly connected to Him, truly receiving His life — the other hungers lose their grip.',
        },
        {
          kind: 'carry',
          html:
            'You have probably felt the allure of discipline-driven spirituality. Do more. Deny yourself. Push harder. And somewhere in you there is the hope that if you do enough, you will finally feel complete, finally be acceptable, finally arrive. Paul says: you already have. In Christ, you have already died to the old system. You have already risen to new life. The rules cannot take you deeper. Only Christ can. And He already has.',
        },
        {
          kind: 'reflection',
          id: 'c2-ordinances-reflect',
          prompt: 'What rules or disciplines are you obeying in the hope that they will finally make you acceptable? What would it mean to truly believe you are already complete in Christ, regardless of what you eat, what you touch, what you achieve?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Colossians 2',
    quote:
      'In Christ are hid all the treasures of wisdom and knowledge. Ye are complete in him. Holding the Head, from which all the body by joints and bands having nourishment ministered, increaseth with the increase of God.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Colossians 2 · Study Guide',
  },

  resources: [
    {
      id: 'plerophoria-scaife',
      kind: 'lexicon',
      source: 'Perseus Scaife',
      label: 'Plerophoria (πληροφορία) — Full Assurance',
      url: 'https://scaife.perseus.org/lexica/lsj/πληροφορία/',
      description: 'Paul&apos;s word for the confidence and certainty believers have in Christ—complete assurance in Him (Colossians 2:2).',
    },
    {
      id: 'handwriting-cross-intertextual',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Colossians 2:14 — Blotting Out the Handwriting',
      url: 'https://intertextual.bible/search?q=Colossians+2+14+',
      description: 'Christ&apos;s cross canceled the debt—the handwriting (chirograph) of ordinances against believers.',
    },
  ],
};
