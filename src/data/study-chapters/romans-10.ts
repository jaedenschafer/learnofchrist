import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Romans 10 — The Word of Faith
 *
 * Paul&apos;s heart breaks for Israel. They have zeal for God, but not according to knowledge.
 * Yet he lays bare the gospel in its simplest, most compelling form: confess Jesus as Lord,
 * believe He rose from the dead, and you are saved. This confession-and-belief is the gospel
 * in miniature. And it requires a word, heard aloud, from someone sent to speak.
 */
export const ROMANS_10: RichChapterContent = {
  bookSlug: 'romans',
  bookName: 'Romans',
  chapter: 10,

  intros: [
    'Romans 10 is the most direct gospel statement Paul ever wrote. After chapters of theology—justification by faith, the sovereignty of God, the mystery of Israel&apos;s stumbling—Paul pauses and distills salvation to its essence: confess with your mouth that Jesus is Lord, believe in your heart that God raised Him from the dead, and you will be saved. No complex doctrine. No ladder of spiritual achievement. A confession and a belief, spoken and held.',
    'But the chapter pulses with anguish. Paul&apos;s own people, Israel, have rejected this word. They have zeal for God, he says, but not according to knowledge. They seek to establish their own righteousness instead of submitting to God&apos;s. And this matters because salvation requires hearing—and hearing requires a preacher, and a preacher requires to be sent. The gospel chain is unbroken: sent, preaching, hearing, faith, salvation. Break one link and the others snap. Israel has broken the link of obedience.',
    'For the reader, Romans 10 moves from the simplicity of faith (verses 1–13) to the urgency of proclamation (verses 14–21). It is a chapter that opens inward to the individual heart, then opens outward to the entire human community: How shall they believe? How shall they hear? How shall they be sent? Every person reading this is either the one hearing, the one speaking, or the one who sent the speaker. Romans 10 tells you which one.',
  ],

  sections: [
    /* ─── Romans 10:1–2 — Paul's Anguish ────────────────────────────────── */
    {
      ref: 'Romans 10:1–2',
      title: 'My Heart&apos;s Desire',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 1,
              spans: [
                t('Brethren, my '),
                hg('heart&apos;s desire and prayer to God for Israel is, that they might be saved', 'rom10-desire'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom10-desire',
          html:
            'Paul does not theorize about Israel from a distance. He has &ldquo;great heaviness and continual sorrow&rdquo; in his heart for them (9:2). His prayer—his constant, persistent prayer—is that they would be saved. This is not an intellectual argument. It is the yearning of a man watching the people he loves miss the salvation he has found.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 2,
              spans: [
                t('For I bear them record that they have '),
                hg('a zeal of God, but not according to knowledge', 'rom10-zeal'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom10-zeal',
          html:
            'Here is the diagnosis. Israel is not apathetic. They are not cold toward God. They have <em>zeal</em>—a burning intensity. But zeal without knowledge is a fire without direction. They are passionate about God, but that passion has become disconnected from who God actually is and what He has actually done. A fierce heart in service of a false god is still service to a false god.',
        },
        {
          kind: 'carry',
          html:
            'Zeal without knowledge is a portrait of fervent mistake. You can be deeply sincere and entirely wrong. The most dangerous spiritual place is not indifference—it is misdirected passion. What am I zealous about that I have not studied thoroughly? What conviction do I hold with intensity but without really knowing the face of Jesus I claim to serve?',
        },
        {
          kind: 'reflection',
          id: 'rom10-zeal-check',
          prompt:
            'Where in your faith do you sense heat and passion? Is that passion grounded in knowledge of who Jesus actually is—or are you serving a version of Him you have constructed?',
        },
      ],
    },

    /* ─── Romans 10:3 — Seeking Their Own Righteousness ────────────────── */
    {
      ref: 'Romans 10:3',
      title: 'Their Own Righteousness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 3,
              spans: [
                t('For they being ignorant of God&apos;s righteousness, and going about to establish their own righteousness, '),
                hg('have not submitted themselves unto the righteousness of God', 'rom10-submission'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom10-submission',
          html:
            'The verb is stark: <em>have not submitted.</em> This is not failure due to weakness. This is refusal due to will. Israel has a choice between two kinds of righteousness. One is God&apos;s, given as a gift. One is their own, earned through effort and achievement. They choose the second. They build it stone by stone, commandment by commandment. But in building their own, they reject His.',
        },
        {
          kind: 'carry',
          html:
            'The choice is still yours. You can build a righteousness of your own—through discipline, through morality, through hard work, through proving yourself worthy. Or you can submit to the righteousness of God, which means laying your own building down and receiving what He has already built. One is exhausting. One is a gift. The question is not: do you have the strength? The question is: will you surrender?',
        },
      ],
    },

    /* ─── Romans 10:4 — Christ the End of the Law ────────────────────── */
    {
      ref: 'Romans 10:4',
      title: 'Christ Is the End of the Law',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 4,
              spans: [
                t('For '),
                hp('Christ is the end of the law for righteousness to every one that believeth', 'rom10-christ-telos'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom10-telos-end',
          html:
            'The law was never meant to be a permanent way of life. It was meant to lead somewhere. That somewhere is Christ. Every commandment, every ordinance, every requirement was a finger pointing at Him. When He arrived, the finger&apos;s job was done.',
        },
        {
          kind: 'greek',
          id: 'rom10-telos',
          title: 'Telos — &ldquo;end&rdquo;',
          script: 'τέλος',
          translit: '<strong>telos</strong> · completion; fulfillment; the end toward which something aims',
          description:
            'Telos is not termination—it is destination. Christ is the fulfillment of the law. To reach Him is to reach what the law was always meant to lead to. The law achieved its purpose when it brought you to Christ.',
        },
        {
          kind: 'christ',
          id: 'rom10-christ-telos',
          title: 'Christ Connection — The Completion of the Law',
          html:
            'Jesus said, "Think not that I am come to destroy the law… I am not come to destroy, but to fulfil" (Matt. 5:17). Christ fulfilled the law&apos;s demands perfectly, and in that fulfillment He completed what the law was meant to do. Now righteousness comes not through attempting what Christ has already accomplished, but through trusting Him who accomplished it.',
        },
        {
          kind: 'carry',
          html:
            'If you are still trying to earn your standing with God through obedience, you have missed the end of the law. Christ is the destination. The law was the path. You do not walk the path forever—you walk it until you reach the one it was always pointing to.',
        },
      ],
    },

    /* ─── Romans 10:5–8 — The Word Is Nigh Thee ─────────────────────── */
    {
      ref: 'Romans 10:5–8',
      title: 'The Word Is Near',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 5,
              spans: [
                t('For Moses describeth the righteousness which is of the law, That the man which doeth those things shall live by them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom10-moses-law',
          html:
            'Moses says: do these things and you will live. It is a covenant of works. But you cannot do them. No one can. The covenant of works is a dead end.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 6,
              spans: [
                t('But the righteousness which is of faith speaketh on this wise, '),
                hg('Say not in thine heart, Who shall ascend into heaven?', 'rom10-ascend'),
                t(' (that is, to bring Christ down from above:)'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 7,
              spans: [
                t('Or, Who shall descend into the deep? (that is, to bring up Christ again from the dead.)'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 8,
              spans: [
                t('But what saith it? '),
                hp('The word is nigh thee, even in thy mouth, and in thy heart', 'rom10-word-near'),
                t(': that is, the '),
                hg('word of faith, which we preach', 'rom10-word-near'),
                t(';'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom10-ascend',
          html:
            'You do not have to perform cosmic heroics to find Christ. You do not have to ascend to heaven or descend to the underworld. The distance between you and salvation is not vast. It is immediate. It is here. It is near.',
        },
        {
          kind: 'commentary',
          id: 'rom10-word-near',
          html:
            'Paul quotes Deuteronomy 30:14. Moses spoke of the law being near—in your mouth, in your heart. Paul takes that verse and applies it to Christ, to the gospel, to the word of faith. The gospel is not distant, not exotic, not exotic. It is at hand. In your mouth. In your heart. The word that saves you is the word you can speak and believe right now.',
        },
        {
          kind: 'greek',
          id: 'rom10-pistis',
          title: 'Pistis — &ldquo;faith&rdquo;',
          script: 'πίστις',
          translit: '<strong>pistis</strong> · faith; trust; confidence; reliance',
          description:
            'The word of faith is not irrational. It is trust placed in a person—in Christ—based on His word and His work. Faith is not blind; it is trust in One who has proven faithful.',
        },
        {
          kind: 'carry',
          html:
            'The gospel is not a secret you have to dig for. It is not hidden in mystical language or cosmic mysteries. It is right there. In your mouth—you can speak it. In your heart—you can believe it. If you are waiting for some more elaborate or more impressive word, you are waiting for the wrong thing. The simple word of faith in Christ is enough. It is everything.',
        },
        {
          kind: 'reflection',
          id: 'rom10-near',
          prompt:
            'What makes the gospel feel far away to you? What would it mean to trust that the word of faith is genuinely near—in your mouth and in your heart—right now?',
        },
      ],
    },

    /* ─── Romans 10:9–10 — Confess and Believe ──────────────────────────── */
    {
      ref: 'Romans 10:9–10',
      title: 'Confess and Believe',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 9,
              spans: [
                t('That if thou shalt '),
                hp('confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved', 'rom10-confess-core'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom10-confess-core',
          html:
            'This is the gospel in seventeen words. Two acts: confess and believe. Two locations: mouth and heart. Two truths: Jesus is Lord; God raised Him from the dead. One outcome: you shall be saved. Paul has peeled away every layer of complexity and left you with the core.',
        },
        {
          kind: 'greek',
          id: 'rom10-homologeo',
          title: 'Homologeo — &ldquo;confess&rdquo;',
          script: 'ὁμολογέω',
          translit: '<strong>homologeo</strong> · to speak the same as; to agree; to confess',
          description:
            'When you confess Jesus as Lord, you are saying the same thing God says about Him. You are aligning your tongue and your testimony with His truth. Confession is agreeing with God.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 10,
              spans: [
                t('For with the '),
                hg('heart man believeth unto righteousness', 'rom10-heart-righteousness'),
                t('; and with the mouth '),
                hg('confession is made unto salvation', 'rom10-mouth-salvation'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom10-heart-righteousness',
          html:
            'Belief is not intellectual assent. It is a commitment of the heart—your deepest self, your core, your will. When you believe in your heart, you are giving yourself away. You are surrendering your life to the one you confess as Lord.',
        },
        {
          kind: 'commentary',
          id: 'rom10-mouth-salvation',
          html:
            'Confession is the outward expression of inward faith. It is your mouth saying what your heart has come to know. This is not hypocrisy or performance. It is witness. When you confess Jesus as Lord with your mouth, you are stepping into your identity as one saved.',
        },
        {
          kind: 'christ',
          id: 'rom10-christ-confess',
          title: 'Christ Connection — Confession and Lordship',
          html:
            'To confess Jesus as Lord is to place Him at the center of your life and allegiances. It echoes the earliest Christian creed: "Jesus Christ is Lord" (Phil. 2:11). The resurrection proves His Lordship—that God vindicated Him, exalted Him, and seated Him at His right hand. Your confession joins you to that vindication.',
        },
        {
          kind: 'carry',
          html:
            'Belief does not stay silent. If you truly believe in your heart that Jesus is Lord, that belief will find its way to your mouth. It may come as a prayer, a conversation, a witness. The faith that saves is never a secret thing. It seeks to be spoken. Where is your heart telling you to confess?',
        },
        {
          kind: 'reflection',
          id: 'rom10-confess-reflect',
          prompt:
            'When you confess with your mouth that Jesus is Lord, what are you actually saying about who He is and who you are? What does confession cost you?',
        },
      ],
    },

    /* ─── Romans 10:11–13 — Whosoever Shall Call ─────────────────────── */
    {
      ref: 'Romans 10:11–13',
      title: 'Whosoever Shall Call Upon His Name',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 11,
              spans: [
                t('For the scripture saith, '),
                hg('Whosoever believeth on him shall not be ashamed', 'rom10-ashamed'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom10-ashamed',
          html:
            'To believe in Christ is not to be put to shame. You will not come to God saying "I wagered on the wrong savior." Your belief is vindicated. Christ is not a dead hope. He is a risen Lord. And those who bank their lives on Him will not be let down.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 12,
              spans: [
                t('For there is no difference between the Jew and the Greek: for the same Lord over all is rich unto all that '),
                hg('call upon him', 'rom10-no-difference'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom10-no-difference',
          html:
            'This is radical. Jew and Greek stand on equal ground. The wall between them, which Paul has spent Romans building and rebuilding, is here declared irrelevant to salvation. One Lord. One grace. Available to all who call.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 13,
              spans: [
                t('For '),
                hp('whosoever shall call upon the name of the Lord shall be saved', 'rom10-call-saved'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom10-call-saved',
          html:
            'This verse quotes Joel 2:32. In Joel, "the Lord" is Yahweh. Here, "the Lord" is Jesus. Paul has just applied to Christ a promise made to the God of Abraham. Christ is not a secondary figure. He is not a mediator. He is the Lord upon whose name we call for salvation.',
        },
        {
          kind: 'christ',
          id: 'rom10-christ-lord-name',
          title: 'Christ Connection — The Name Above All Names',
          html:
            'To call upon the name of the Lord for salvation is to invoke Jesus—the one at God&apos;s right hand, clothed in His authority and His power. Acts applies this same Joel promise to Peter&apos;s proclamation: "Neither is there salvation in any other: for there is none other name under heaven given among men, whereby we must be saved" (Acts 4:12). That name is Jesus.',
        },
        {
          kind: 'carry',
          html:
            'Salvation is not a commodity you attain through secret knowledge or exclusive membership. It is available to whosoever calls. You do not have to be worthy. You do not have to be in the right ethnicity or the right class. You call on the name of the Lord Jesus, and you are saved. The bar for entry into the kingdom is not high. It is open. The question is not whether you qualify. The question is whether you will call.',
        },
        {
          kind: 'reflection',
          id: 'rom10-call-reflect',
          prompt:
            'What does it mean to "call upon the name of the Lord"? Who can be saved, and what does that truth change about how you see the people around you?',
        },
        { kind: 'divider' },
      ],
    },

    /* ─── Romans 10:14–15 — How Shall They Hear Without a Preacher ──────── */
    {
      ref: 'Romans 10:14–15',
      title: 'How Shall They Hear?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 14,
              spans: [
                t('How then shall they call on him in whom they have not believed? and '),
                hg('how shall they believe in him of whom they have not heard?', 'rom10-heard'),
                t(' and how shall they '),
                hg('hear without a preacher?', 'rom10-preacher'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom10-heard',
          html:
            'Faith requires an object. You cannot believe in someone you have never heard of. The gospel is not intuitive. It is not something humans naturally come to through introspection. It must be proclaimed. Someone must speak it.',
        },
        {
          kind: 'commentary',
          id: 'rom10-preacher',
          html:
            'Here is the link in the chain: <em>someone must speak.</em> Paul poses this as a rhetorical question. The answer is clear. Without a preacher, they will not hear. Without hearing, they will not believe. Without belief, they cannot call. Without calling, they will not be saved. The gospel requires a voice.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 15,
              spans: [
                t('And how shall they preach, except they be sent? as it is written, '),
                hp('How beautiful are the feet of them that preach the gospel of peace, and bring glad tidings of good things!', 'rom10-beautiful-feet'),
                t(''),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom10-beautiful-feet',
          html:
            'Isaiah called beautiful the feet of one bringing good news (Isa. 52:7). Paul applies it to the preacher of the gospel. There is beauty in the simple act of feet moving toward someone to speak the news of salvation. Someone has been sent. Someone is willing to go. Someone&apos;s lips will form the words.',
        },
        {
          kind: 'carry',
          html:
            'You are somewhere in this chain. You are either the one hearing, the one speaking, or the one sending. If you are hearing, you have the privilege of responding. If you are speaking, you are doing the work that makes faith possible for others. If you are sending—through prayer, through support, through partnership—you are making the preacher&apos;s feet move. Where does the Lord want you in this chain?',
        },
        {
          kind: 'reflection',
          id: 'rom10-preach-reflect',
          prompt:
            'Who is someone whose preaching or witness brought you to faith? And whose faith might be waiting on a word you are called to speak?',
        },
      ],
    },

    /* ─── Romans 10:16–17 — Faith Comes by Hearing ───────────────────── */
    {
      ref: 'Romans 10:16–17',
      title: 'Faith Comes by Hearing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 16,
              spans: [
                t('But they have not all obeyed the gospel. For Esaias saith, '),
                hg('Lord, who hath believed our report?', 'rom10-report'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom10-report',
          html:
            'Isaiah knew it from the beginning. Not everyone who hears the gospel believes it. The report is spoken. Not all receive it. Not all obey. The problem is not that God has not spoken. The problem is that some have chosen not to hear.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 17,
              spans: [
                t('So then '),
                hp('faith cometh by hearing, and hearing by the word of God', 'rom10-faith-hearing'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom10-faith-hearing',
          html:
            'This is the mechanism. This is how faith comes into being. Not from trying harder. Not from thinking harder. From hearing the word spoken. God&apos;s word, when heard, creates the capacity for faith. Hearing is the doorway.',
        },
        {
          kind: 'christ',
          id: 'rom10-christ-word',
          title: 'Christ Connection — The Word Made Flesh Speaks',
          html:
            'The Word who became flesh and dwelt among us (John 1:14) is the one who speaks now through His preachers. When the gospel is proclaimed, it is not merely human words about Him—it is His word reaching out toward you. Faith comes by His word reaching your ears and your heart.',
        },
        {
          kind: 'carry',
          html:
            'Do not despise the simple act of hearing. In a world of noise and distraction, to truly hear the word of God is itself an act of faith. You are making space for His word. You are opening your ear to His voice. Whatever you heard today—a Scripture read, a sermon preached, a testimony shared—that was God&apos;s word reaching toward you. Will you listen?',
        },
        {
          kind: 'reflection',
          id: 'rom10-hearing-reflect',
          prompt:
            'When you hear the gospel preached or read, what happens in you? Do you listen as someone hearing good news, or have you grown deaf to words you have heard a thousand times?',
        },
      ],
    },

    /* ─── Romans 10:18–21 — Israel and Disobedience ──────────────────── */
    {
      ref: 'Romans 10:18–21',
      title: 'Israel&apos;s Choice',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 18,
              spans: [
                t('But I say, Have they not heard? Yes verily, their sound went into all the earth, and their words unto the ends of the world.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom10-heard-yet',
          html:
            'Paul shifts. Israel has heard. The message has reached them. The problem is not delivery. The problem is response.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 19,
              spans: [
                t('But I say, Did not Israel know? First Moses saith, I will provoke you to jealousy by them that are no people, and by a foolish nation I will anger you.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 20,
              spans: [
                t('But Esaias is '),
                hg('very bold', 'rom10-esaias-bold'),
                t(', and saith, I was found of them that sought me not; I was made manifest unto them that asked not for me.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom10-esaias-bold',
          html:
            'Isaiah speaks of God finding those who did not seek Him. Gentiles, who had not pursued God, suddenly find Him pursuing them. God&apos;s grace is more aggressive than human rejection. The gospel reaches those whom Israel assumed were beyond reach.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            {
              number: 21,
              spans: [
                t('But to Israel he saith, All day long I have stretched forth my hands unto a '),
                hg('disobedient and gainsaying people', 'rom10-disobedient'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rom10-disobedient',
          html:
            'The image is stark. God has stretched out His hands to Israel—an invitation, an appeal, an offer of embrace. But Israel has refused. Not from ignorance. From choice. They have contradicted Him, resisted Him, turned away. The problem is not God&apos;s reluctance to save. It is human refusal to be saved.',
        },
        {
          kind: 'carry',
          html:
            'God reaches toward you. His hands are outstretched. But faith is not forced. You can receive His invitation or refuse it. The tragedy of the gospel is not that God is unwilling to save. The tragedy is when those He calls turn away. What invitation from God are you in danger of refusing?',
        },
        {
          kind: 'reflection',
          id: 'rom10-obedience-reflect',
          prompt:
            'What does it mean to refuse the gospel, knowing its truth? Where might you be resisting God&apos;s outstretched hands?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'If thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Romans 10 · Study Guide',
  },

  hasHebrew: false,
};
