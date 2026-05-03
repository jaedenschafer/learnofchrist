import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 2 John — Truth & Love
 *
 * The apostle John writes a brief, intense letter to "the elect lady and her children"—
 * possibly a woman of influence in a local church, possibly a metaphor for the church itself.
 * He opens with tenderness: I love you because you walk in truth. But he closes with a warning:
 * many deceivers have gone out into the world, denying the incarnation. Do not welcome them.
 * Truth and love are not separate virtues here; they are woven together. Love without truth
 * becomes compromise. Truth without love becomes harshness. John teaches a mature hospitality—
 * one that can affirm others and still draw a line.
 */
export const SECOND_JOHN_1: RichChapterContent = {
  bookSlug: '2-john',
  bookName: '2 John',
  chapter: 1,

  estimatedMinutes: { beginner: 6, intermediate: 13, deep: 18 },
  intros: [
    'The letter of 2 John is John writing to a specific community—"the elect lady and her children." Whether this is a literal woman and her household or a poetic way of naming a church is debated, but the warmth of the letter suggests both intimacy and authority. John loves these people deeply because they walk in truth. That is his measure of affection: not sentiment, but shared conviction in the gospel.',
    'Yet beneath the love lies an urgent pastoral warning. Deceivers have gone out into the world—those who deny that Jesus Christ has come in the flesh. This is no minor disagreement; it strikes at the heart of Christian faith. John urges the community to be wise: do not welcome these teachers into your home, do not bid them Godspeed. True love for God and His people includes the courage to say no. Truth and love must travel together.',
  ],

  sections: [
    /* ─── 2 John 1–3 — Greeting ──────────────────────────────────────── */
    {
      ref: '2 John 1–3',
      title: 'Greeting in Truth and Love',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(1,
              t('The elder unto the '),
              hp('elect lady', 'elect-lady'),
              t(' and her children, whom I love in the '),
              hy('truth', 'aletheia-intro'),
              t('; and not I only, but also all they that have known the truth;'),
            ),
            verse(2,
              t('For the truth&apos;s sake which dwelleth in us, and shall be with us for ever.'),
            ),
            verse(3,
              t('Grace be with you, mercy, and peace, from God the Father, and from the '),
              hp('Lord Jesus Christ, the Son of the Father', 'christ-son-father'),
              t(', in truth and love.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'elect-lady',
          html:
            'John addresses his recipients as "the elect lady"—a phrase of deep dignity. <em>Eklektos</em>, "chosen," echoes God&apos;s own choosing. This is not flattery; it is pastoral affirmation. The community John writes to is chosen by God, precious to Him, and John&apos;s love for them is rooted not in emotion but in <em>truth</em>—in shared conviction that the gospel is real and saves[res:sefaria-deuteronomy-5][res:perseus-apatao][res:intertextual-incarnation].',
        },
        {
          kind: 'greek',
          id: 'aletheia-intro',
          title: 'Aletheia — "truth"',
          script: 'ἀλήθεια',
          translit: '<strong>aletheia</strong> · truth; reality; unveiling; that which is true and reliable',
          description:
            'In John&apos;s vocabulary, truth is not abstract philosophy or personal opinion. It is <em>the gospel itself</em>—God&apos;s self-revelation in Christ. To walk in truth is to live according to Christ&apos;s teaching, to order one&apos;s whole life around the incarnation and redemption.',
        },
        {
          kind: 'commentary',
          id: 'truth-dwells',
          html:
            'The truth "dwelleth in us, and shall be with us for ever." This is not temporary conviction or passing feeling. The gospel takes up residence in believers. It shapes their conscience, their choices, their hope. The truth is not something they possess; it is something they are possessed <em>by</em>.',
        },
        {
          kind: 'christ',
          id: 'christ-son-father',
          title: 'Christ Connection — Son of the Father',
          html:
            'John opens his blessing by anchoring grace, mercy, and peace in both Father and Son. The full divinity and full authority of Christ shine in every word: "God the Father, and from the Lord Jesus Christ, the Son of the Father." This is not a subordinate figure; this is the one through whom God&apos;s full blessing flows. See John 1:1, 14: "The Word was with God, and the Word was God… And the Word was made flesh." To know the Son is to know the Father.',
        },
        {
          kind: 'carry',
          html:
            'Notice where John places love: within truth. His love for this community is not sentimental—it is grounded in shared faith, in common conviction that God is real and Christ has come. As you move through your week, ask yourself: what do I genuinely love? Where does that love rest? Is it anchored in truth, or in what feels good right now?',
        },
        {
          kind: 'reflection',
          id: 'greeting-reflection',
          prompt:
            'John says he loves "the elect lady" because she and her children walk in truth. Who in your life walks in truth? How does witnessing someone else&apos;s faith deepen your own?',
        },
      ],
    },

    /* ─── 2 John 4–5 — Rejoicing in the Children ──────────────────── */
    {
      ref: '2 John 4–5',
      title: 'I Rejoiced that Your Children Walk in Truth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(4,
              t('I '),
              hp('rejoiced greatly', 'rejoiced-greatly'),
              t(' that I found of thy children walking in '),
              hy('truth', 'aletheia-children'),
              t(', as we have received a '),
              hg('commandment from the Father', 'commandment-father'),
              t('.'),
            ),
            verse(5,
              t('And now I beseech thee, lady, not as though I wrote a new commandment unto thee, but that which we had from the beginning, that we '),
              hp('love one another', 'love-one-another'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rejoiced-greatly',
          html:
            'The word "rejoiced" (<em>chairo</em>) carries the sense of deep gladness, celebration. John is not merely satisfied with the community&apos;s faithfulness; he is <em>delighted</em> by it. This is pastoral joy—the joy of watching those you love persist in faith. The strongest joy in the Christian life often comes from seeing others flourish in truth.',
        },
        {
          kind: 'greek',
          id: 'aletheia-children',
          title: 'Walking in Truth',
          script: 'περιπατέω',
          translit: '<strong>peripateo</strong> · to walk; to conduct oneself; to order one&apos;s life',
          description:
            '"Walking" in Scripture is a metaphor for the entire shape of one&apos;s life—habits, choices, relationships, convictions. To walk in truth is not to have correct doctrine in your head; it is to <em>live</em> according to the gospel, to make decisions rooted in Christ.',
        },
        {
          kind: 'commentary',
          id: 'commandment-father',
          html:
            'John anchors this walking in "a commandment from the Father." He is not inventing something new. The call to walk in truth is not John&apos;s personal preference—it is <em>God&apos;s</em> commandment. This community knows it. They have been taught it. And they are keeping it.',
        },
        {
          kind: 'commentary',
          id: 'entole-old',
          html:
            'Notice verse 5: "not as though I wrote a new commandment unto thee, but that which we had from the beginning." John is reminding his readers that the call to love is ancient, not novel. Jesus taught it in His earthly ministry. The apostles have taught it. This is not a fresh idea from John; it is the <em>old</em>, established word of Christ.',
        },
        {
          kind: 'christ',
          id: 'love-one-another',
          title: 'Christ Connection — Love as Commandment',
          html:
            'Jesus gave this commandment directly to His disciples: "A new commandment I give unto you, That ye love one another; as I have loved you, that ye also love one another" (John 13:34). Yet John calls it "not new" but something "from the beginning." The resolution: it is new in its <em>depth</em>—Christ&apos;s love as the standard—but old in its <em>essence</em>. Love has always been the heartbeat of the law. Christ simply makes it visible in His own life and demands it of His followers with a new intensity.',
        },
        {
          kind: 'carry',
          html:
            'John&apos;s joy at hearing that these believers walk in truth should prompt you to ask: who needs to hear from you that you&apos;ve noticed their faithfulness? Where could you speak joy over someone&apos;s persistence in Christ? Pastoral affirmation—noticing when others are doing hard things well—is a gift the Holy Spirit invites you to give.',
        },
        {
          kind: 'reflection',
          id: 'rejoiced-reflection',
          prompt:
            'When have you felt genuine joy at someone else&apos;s walk in faith? What was it about their faithfulness that moved you?',
        },
      ],
    },

    /* ─── 2 John 6 — Love as Obedience ───────────────────────────── */
    {
      ref: '2 John 6',
      title: 'Love Is Walking After His Commandments',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(6,
              t('And this is '),
              hp('love', 'agape-love'),
              t(', that we walk after '),
              hy('his commandments', 'entole-commandment'),
              t('. This is the commandment, That, as ye have heard from the beginning, ye should walk in it.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'agape-love',
          html:
            'John&apos;s definition of love is stark and unsentimental: "And this <em>is</em> love, that we walk after his commandments." Love is not feeling, though it may include feeling. Love is <em>obedience</em>. It is alignment with Christ&apos;s will. When you order your life around God&apos;s word and Christ&apos;s teaching, you are loving. When you resist, you are refusing love.',
        },
        {
          kind: 'greek',
          id: 'agape-intro',
          title: 'Agapé — Love',
          script: 'ἀγάπη',
          translit: '<strong>agape</strong> · love; self-giving affection; covenant commitment',
          description:
            'Agapé in the New Testament is never mere sentiment. It is the love that flows from God—willing the good of the other, even at cost to oneself. To love in agapé is to align yourself with God&apos;s purposes and God&apos;s character.',
        },
        {
          kind: 'greek',
          id: 'entole-commandment',
          title: 'Entolé — Commandment',
          script: 'ἐντολή',
          translit: '<strong>entole</strong> · command; order; something delivered, handed down',
          description:
            'A commandment is not a suggestion or a nice idea. It is something handed down with authority, meant to be obeyed. Christ&apos;s commandments flow from His authority and His love. To keep them is to honor both.',
        },
        {
          kind: 'commentary',
          id: 'walk-commandment-loop',
          html:
            'The verse closes with a loop: "This is the commandment, That, as ye have heard from the beginning, ye should walk in it." Love is obedience to what you have already heard—the gospel you were taught when you believed. You are not searching for a new moral system. You are living out the old one, the one Christ gave, the one you received from the apostles.',
        },
        {
          kind: 'carry',
          html:
            'There is freedom in this. Love is not a mystery to be solved or a feeling to be chased. Love is a path already laid out. When you keep Christ&apos;s commandments—when you speak truth, forgive, honor others, offer mercy—you are loving. The path is clear. The command is old. Your job is to walk it.',
        },
        {
          kind: 'reflection',
          id: 'commandment-reflection',
          prompt:
            'Where does obedience to Christ&apos;s commandments feel hardest for you right now? How might viewing that obedience as an act of love change your perspective?',
        },
      ],
    },

    /* ─── 2 John 7–9 — Many Deceivers; One Doctrine ────────────── */
    {
      ref: '2 John 7–9',
      title: 'The Deception: Denying the Incarnation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(7,
              t('For '),
              hg('many deceivers', 'planos-many'),
              t(' are entered into the world, who confess not that '),
              hp('Jesus Christ is come in the flesh', 'incarnation-core'),
              t('. This is a deceiver and an '),
              hy('antichrist', 'antichrist-against'),
              t('.'),
            ),
            verse(8,
              t('Look to yourselves, that we lose not those things which we have wrought, but that we receive a full reward.'),
            ),
            verse(9,
              t('Whosoever transgresseth, and abideth not in the '),
              hy('doctrine of Christ', 'didache-christ'),
              t(', hath not God. He that abideth in the doctrine of Christ, he hath both the Father and the Son.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'planos-many',
          html:
            'A "deceiver" (<em>planos</em>)[res:perseus-apatao] is not merely someone with a wrong idea. The word means "wanderer," "seducer"—someone leading others astray, away from truth into confusion. Many such teachers "have entered into the world." This is not future threat; it is present reality. The community John writes to is living in an age when false teaching is active and spreading.',
        },
        {
          kind: 'commentary',
          id: 'incarnation-test',
          html:
            'The test John gives is stark: "who confess not that Jesus Christ is come in the flesh." This is the litmus test of true faith. The deceivers John is addressing likely taught a kind of Docetism—the idea that Christ only <em>appeared</em> to be human, that the divine Christ could not truly suffer or die. This is not a minor theological debate; it is a complete rejection of God&apos;s saving work. If Christ did not truly become human, He could not truly die for sin. If He did not truly die, there is no redemption.',
        },
        {
          kind: 'greek',
          id: 'antichrist-against',
          title: 'Antichristos — Antichrist',
          script: 'ἀντίχριστος',
          translit: '<strong>antichristos</strong> · against Christ; in place of Christ; opposing Christ',
          description:
            'An antichrist is not a single cosmic figure (though 1 John 2:18 warns of "the Antichrist"). The term means anyone who stands <em>against</em> Christ or <em>in the place of</em> Christ, offering a false gospel. The deceivers John warns about are antichrists—they undermine Christ&apos;s work and offer false hope to those who follow them.',
        },
        {
          kind: 'christ',
          id: 'incarnation-core',
          title: 'Christ Connection — The Incarnation as Gospel',
          html:
            'The incarnation is not incidental to Christianity; it is <em>the gospel</em>. "The Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth" (John 1:14). Christ did not merely visit the earth and then leave; He took on true human flesh, experienced true human life, and died a true human death. His resurrection proved His victory over death itself. To deny the incarnation is to deny everything. To affirm it is to affirm that God Himself entered our condition to redeem us.',
        },
        {
          kind: 'commentary',
          id: 'wrought-reward',
          html:
            'Verse 8 opens with urgency: "Look to yourselves, that we lose not those things which we have wrought." What have they wrought? Years of faithfulness, growth in Christ, obedience, love. The warning: false teaching can undermine all of it. This is why John calls for vigilance. Your spiritual foundation is precious. Guard it.',
        },
        {
          kind: 'greek',
          id: 'didache-christ',
          title: 'Didaché — Doctrine',
          script: 'διδαχή',
          translit: '<strong>didache</strong> · teaching; instruction; doctrine; that which is taught',
          description:
            '"The doctrine of Christ" means the teaching <em>about</em> Christ and the teaching <em>from</em> Christ—what He taught and what He is. To abide in it is to remain faithful to Christ Himself as He is revealed in Scripture.',
        },
        {
          kind: 'commentary',
          id: 'abideth-doctrine',
          html:
            'Verse 9 draws a hard line: "Whosoever transgresseth, and abideth not in the doctrine of Christ, hath not God." This is not compromise language. If someone denies who Christ is or what He taught, they do not have God—no matter what they claim. Conversely, "He that abideth in the doctrine of Christ, he hath both the Father and the Son." To know Christ truly is to know God truly.',
        },
        {
          kind: 'carry',
          html:
            'John is teaching you something essential: truth matters. False teaching is not a matter of preference or personal interpretation. Some claims about Christ are true; others are false. Your job is not to be naive and accept every sincere teacher. Your job is to <em>test</em> what you hear against Scripture. Does it affirm that Jesus truly came in the flesh? Does it center on His incarnation, death, and resurrection as the means of salvation? If it does not, it is false, no matter how appealing it sounds.',
        },
        {
          kind: 'reflection',
          id: 'doctrine-reflection',
          prompt:
            'Where are you tempted to soften or compromise the truth about who Christ is? What would it look like to hold the incarnation and Christ&apos;s lordship as non-negotiable?',
        },
      ],
    },

    /* ─── 2 John 10–11 — On Hospitality and Boundaries ──────────── */
    {
      ref: '2 John 10–11',
      title: 'Do Not Receive the Deceiver',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(10,
              t('If there come any unto you, and bring not this '),
              hy('doctrine', 'doctrine-house'),
              t(', receive him not into your house, neither bid him '),
              hg('God speed', 'partaker-evil'),
              t(':'),
            ),
            verse(11,
              t('For he that biddeth him God speed is '),
              hp('partaker of his evil deeds', 'partaker-evil'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'doctrine-house',
          html:
            'John is specific: do not receive false teachers "into your house." This is not a command to be rude or to never speak with such people. This is a command about <em>hospitality</em>—about who gets welcomed into the intimate space of the Christian community, who gets treated as a fellow believer, who gets affirmed and supported. To invite a false teacher into your home, to provide them food and shelter, is to implicitly endorse their teaching.',
        },
        {
          kind: 'greek',
          id: 'chairein-farewell',
          title: 'Chairein — "Godspeed"',
          script: 'χαίρειν',
          translit: '<strong>chairein</strong> · to greet; to say farewell; to wish well',
          description:
            'To bid someone "Godspeed" is to send them off with a blessing, to affirm them as they go. In context, it means treating a false teacher as though they were orthodox, as though their teaching were acceptable.',
        },
        {
          kind: 'commentary',
          id: 'partaker-evil',
          html:
            'This is the sting: "he that biddeth him God speed is partaker of his evil deeds." By receiving and blessing a false teacher, you make yourself <em>complicit</em> in the harm they do. Every soul they lead astray into false doctrine becomes, in a sense, your responsibility. This is why boundaries are an act of love.',
        },
        {
          kind: 'carry',
          html:
            'This is difficult teaching in an age that values tolerance above all. But John is not teaching intolerance of people; he is teaching discernment about truth. Love for God and for His people means protecting them from teaching that denies Christ&apos;s incarnation or undermines the gospel. It means being willing to say: I care about you too much to affirm what is false. This is mature hospitality—hospitable enough to be honest.',
        },
        {
          kind: 'reflection',
          id: 'boundaries-reflection',
          prompt:
            'Where do you struggle to draw a line between hospitality and compromise? How can you be both kind and clear about what you believe?',
        },
      ],
    },

    /* ─── 2 John 12–13 — Closing ─────────────────────────────────── */
    {
      ref: '2 John 12–13',
      title: 'Face to Face',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            verse(12,
              t('Having many things to write unto you, I would not write with paper and ink: but I trust to come unto you, and '),
              hp('speak face to face', 'face-to-face'),
              t(', that our joy may be full.'),
            ),
            verse(13,
              t('The children of thy elect sister greet thee. Amen.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'face-to-face',
          html:
            'John has written a brief letter, but his heart contains far more. "Having many things to write unto you, I would not write with paper and ink." There is an intimacy John longs for—presence, voice, the full reality of being together. He trusts that he will visit soon. And when he does, he will "speak face to face." This is not mere preference; it is a statement about <em>presence</em>. Some communication cannot be reduced to writing. Some truth requires embodied presence, the tone of voice, the look in your eyes, the shared meal. This is the incarnational principle applied to how we care for one another.',
        },
        {
          kind: 'commentary',
          id: 'joy-full',
          html:
            'He closes with a stunning phrase: "that our joy may be full." Joy is not optional in the Christian life; it is the goal. And joy is <em>relational</em>. It comes when we are together, when we share the same faith, when we can encourage one another face to face. The community John is writing to knows this too. Their joy awaits his presence.',
        },
        {
          kind: 'christ',
          id: 'incarnation-community',
          title: 'Christ Connection — Presence as Gospel',
          html:
            'The incarnation teaches us that God values presence. Christ could have redeemed the world from heaven. Instead, He came <em>here</em>—in flesh, in time, in place, visible and touchable. He sat with people, ate with them, healed them in person. His disciples did not merely read His words; they <em>knew</em> Him, walked with Him, heard Him teach. As John closes this letter by expressing his longing to visit, he is teaching what the incarnation teaches: proximity matters. Presence is a form of love. The community you are called to shepherd deserves not just your words but your presence.',
        },
        {
          kind: 'commentary',
          id: 'greetings-close',
          html:
            'The letter ends with a simple greeting from the sister community: "The children of thy elect sister greet thee." There are believers in another place who share this faith, who know the elder, who send their love. The church is not isolated; it is woven into a larger network of faith. You are not alone in this. Others are walking in truth too.',
        },
        {
          kind: 'carry',
          html:
            'John&apos;s closing reminds you of something easy to forget in a digital age: presence matters. A text is not the same as a call. An email is not the same as sitting across a table. If there are people in your faith community you care about, make time to be with them. Speak face to face. Share a meal. Let your joy be full in their presence. This is how Christ&apos;s incarnation shapes how you love.',
        },
        {
          kind: 'reflection',
          id: 'presence-reflection',
          prompt:
            'Who in your faith community needs your presence right now? How can you make time for face-to-face connection this week?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'The elder unto the elect lady and her children, whom I love in the truth. I rejoiced greatly that I found of thy children walking in truth. And this is love, that we walk after his commandments. Many deceivers are entered into the world, who confess not that Jesus Christ is come in the flesh.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 John · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-deuteronomy-5',
      kind: 'study',
      source: 'Sefaria',
      label: 'Deuteronomy 5 (Law and Commandments)',
      url: 'https://www.sefaria.org/Deuteronomy.5',
      description: 'The reiteration of God&apos;s commandments at the heart of covenant relationship, providing Old Testament context for John&apos;s emphasis on walking in truth through obedience.',
    },
    {
      id: 'perseus-apatao',
      kind: 'lexicon',
      source: 'Perseus Scaife',
      label: 'ἀπατάω (apatāō)',
      url: 'https://scaife.perseus.org/lexicon/entry/greek-lsj-ἀπατάω/1',
      description: 'Greek lexicon entry for apatāō (to deceive/beguile), essential for understanding John&apos;s warning about deceivers and false teachers.',
    },
    {
      id: 'intertextual-incarnation',
      kind: 'archive',
      source: 'Intertextual Bible',
      label: 'Incarnation of Christ',
      url: 'https://www.intertextual.bible/search?q=incarnation',
      description: 'Cross-references to incarnational theology throughout the New Testament, connecting John&apos;s test of true faith with the centrality of Christ&apos;s physical embodiment.',
    },
  ],

  hasHebrew: false,
};
