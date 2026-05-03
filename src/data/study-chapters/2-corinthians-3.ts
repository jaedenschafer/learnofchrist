import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 2 Corinthians 3 — The New Covenant Written on Hearts
 *
 * Paul has been accused of inflating his own credentials. His response is startling:
 * his credentials are the Corinthians themselves—a letter written not with ink but with
 * the Spirit of God, written not on stone but on human hearts.
 *
 * From there, Paul unfolds the glory of the new covenant. The old covenant, written
 * on tablets of stone, was glorious—so glorious that Moses&apos; face shone so brightly
 * the people could not look at him. But its glory is fading. The new covenant, written
 * on the human heart and administered by the Spirit, exceeds it. And the sign of living
 * under the new covenant is not fear or distance, but transformation—constant metamorphosis
 * from glory to glory into the very image of Christ, through the power of the Spirit.
 */
export const SECOND_CORINTHIANS_3: RichChapterContent = {
  bookSlug: '2-corinthians',
  bookName: '2 Corinthians',
  chapter: 3,

  estimatedMinutes: { beginner: 7, intermediate: 13, deep: 18 },
  intros: [
    'Paul addresses a nagging accusation: that he inflates his own authority. But instead of defending himself with credentials on parchment, he points to something far more powerful—the Corinthians themselves. Their transformed lives are his letter of recommendation. This moves into a profound theology of covenants. The old covenant was written on stone tablets, brought down by Moses from Sinai. Its glory was so intense that Moses&apos; face shone, and he had to veil himself so the people could bear to look at him. But that glory, Paul says, is fading. Fading toward what? Toward Christ, and toward a new covenant written on human hearts.',
    'To live under the new covenant is to live in constant transformation. Not through the letter of the law (which kills), but through the Spirit (which gives life). Not in fear and distance, but in liberty—the freedom that comes when you can look directly at the Lord&apos;s face without a veil. And as you behold His glory, you yourself are changed, from one degree of glory to the next, being remade into His likeness by the very Spirit of God. This is what Paul means by sufficiency: not sufficiency of ourselves, but sufficiency through Christ.',
  ],

  sections: [
    /* ─── 2 Corinthians 3:1–3 — The Epistle of Christ ────────────────────── */
    {
      ref: '2 Corinthians 3:1–3',
      title: 'Ye Are Our Epistle',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(1, t('Do we begin again to commend ourselves? or need we, as some others, '), hy('epistles of commendation', 'greek-epistle'), t(' to you, or letters of commendation from you?')),
            verse(2, t('Ye are our epistle written in our hearts'), t(', '), t('known and read of all men'), t('.')),
            verse(3, t('Forasmuch as ye are manifestly declared to be the '), hg('epistle of Christ', 'c-epistle-christ'), t(' ministered by us, '), hg('written not with ink, but with the Spirit of the living God', 'c-spirit-write'), t('; not in tables of stone, but in '), hy('fleshy tables of the heart', 'c-heart-flesh'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-epistle-christ',
          html: 'The Corinthians are not merely Paul&apos;s letter of recommendation; they are <em>Christ&apos;s</em> letter, ministered by him. Their changed lives spell out the message of the Gospel. They are not read in the sense of being scrutinized; they are read the way you read a proclamation posted in the city square. Their lives publicly declare what Christ has done.',
        },
        {
          kind: 'greek',
          id: 'greek-epistle',
          title: 'Epistolē — &ldquo;Letter&rdquo; or &ldquo;Epistle&rdquo;',
          script: 'ἐπιστολή',
          translit: '<strong>epistolē</strong> · a written message; a letter; a missive',
          description: 'In the ancient world, a letter was a formal document. To be someone&apos;s epistle was to carry their message in written form. The Corinthians carry Christ&apos;s message, not on parchment, but inscribed into the very texture of their transformed lives.',
        },
        {
          kind: 'commentary',
          id: 'c-spirit-write',
          html: 'Not written with ink. The Spirit&apos;s writing is not external compliance or surface obedience. It is interior transformation. Where the Law was engraved in stone by God&apos;s finger, the Spirit engraves the law upon the human heart.',
        },
        {
          kind: 'commentary',
          id: 'c-heart-flesh',
          html: 'The &ldquo;fleshy tables of the heart&rdquo; is not a crude phrase. It is exquisitely precise. Your heart—your actual, physical, material, embodied self—becomes the writing surface[res:intertextual-exodus-spirit]. You are not a spirit walking around in a body; you are embodied soul, and your whole person is claimed and transformed by the Spirit.',
        },
        {
          kind: 'carry',
          html: 'Your life is a letter written by the Spirit of God. What does the reading public see? When others encounter you, are they reading a message of Christ—His patience, His forgiveness, His resurrection-life—written into your actual relationships, your actual work, your actual Tuesday? Or are you still trying to authenticate yourself on parchment, with words about who you are instead of the living demonstration?',
        },
        {
          kind: 'reflection',
          id: 'cor3-epistle-life',
          prompt: 'What would a person learn about Christ from reading the epistle of your life? What one thing needs to be rewritten?',
        },
        {
          kind: 'artwork',
          matchTitle: /letter|epistle|write|writing/i,
          caption: '2 Corinthians 3:1–3 · Written on Hearts',
        },
      ],
    },

    /* ─── 2 Corinthians 3:4–6 — Sufficiency from God ───────────────────── */
    {
      ref: '2 Corinthians 3:4–6',
      title: 'Our Sufficiency Is of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(4, t('And such trust have we through Christ to God-ward.')),
            verse(5, t('Not that we are '), hg('sufficient of ourselves', 'c-not-sufficient'), t(' to think any thing as of ourselves; but our '), hp('sufficiency is of God', 'christ-sufficiency'), t(':')),
            verse(6, t('Who also hath made us able ministers of the new testament; '), hg('not of the letter, but of the spirit', 'c-letter-spirit'), t(': for '), hy('the letter killeth', 'greek-apokteinō'), t(', but the '), hy('spirit giveth life', 'greek-zōopoieō'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-not-sufficient',
          html: 'This is the hinge of the passage. Paul states it baldly: we are not sufficient. Not in ourselves. The sentence does not end there. The sufficiency comes from God. This is not false humility; it is theological precision. To claim sufficiency in yourself is to be a fool or a liar. To claim it of God is to be wise.',
        },
        {
          kind: 'greek',
          id: 'greek-apokteinō',
          title: 'Apokteō — &ldquo;to Kill&rdquo;',
          script: 'ἀποκτείνω',
          translit: '<strong>apoktein</strong> · to kill; to put to death; to cause death',
          description: 'The letter—the written law—kills. Not metaphorically, but truly. It shows you your sin without giving you power to overcome it. It pronounces condemnation. In the hands of flesh-bound humanity, the law becomes an instrument of death.',
        },
        {
          kind: 'greek',
          id: 'greek-zōopoieō',
          title: 'Zōopoieō — &ldquo;to Give Life&rdquo;',
          script: 'ζῳοποιέω',
          translit: '<strong>zōopoieō</strong> · to make alive; to quicken; to impart life',
          description: 'The Spirit gives life. Not abstract life, but <em>zōē</em>—the kind of life that Jesus has and that He gives. The Spirit does not merely condemn or instruct; it infuses. It resurrects.',
        },
        {
          kind: 'commentary',
          id: 'c-letter-spirit',
          html: 'The contrast is total. The letter (gramma) is fixed, external, written, demanding. The spirit (pneuma) is alive, internal, transformative, empowering. You cannot live under both at once. To rest your hope on your own capacity to keep the letter is to rest on death. To rest it on the Spirit is to rest on a Living Power.',
        },
        {
          kind: 'christ',
          id: 'christ-sufficiency',
          title: 'Christ Connection — Sufficient Through Christ',
          html: 'Paul says our sufficiency is of God, and specifically through Christ. This echoes his earlier word to the Corinthians: "My grace is sufficient for thee: for my strength is made perfect in weakness" (2 Cor. 12:9)—Christ speaking. The sufficiency is not a thing we accumulate. It is a Person we turn to. And it is offered not to the strong but to those who know their weakness. The one who rests on his own righteousness is lost. The one who rests on Christ is complete.',
        },
        {
          kind: 'carry',
          html: 'Where are you trying to be sufficient? In your parenting, your work, your marriage, your faith—you cannot be sufficient. You will fail. The law will kill you. But you are offered sufficiency from outside yourself, through Christ and by the Spirit. This changes everything. You can stop performing. You can stop managing your image. You can admit that you don&apos;t have what it takes, and turn to the One who does.',
        },
        {
          kind: 'reflection',
          id: 'cor3-sufficiency',
          prompt: 'Where has trying to be sufficient in yourself left you dead? What would it look like to trade that for sufficiency in Christ?',
        },
      ],
    },

    /* ─── 2 Corinthians 3:7–11 — Fading Glory to Exceeding Glory ───────────── */
    {
      ref: '2 Corinthians 3:7–11',
      title: 'The Old Covenant&apos;s Fading Light',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(7, t('But if the ministration of death, '), hg('written and engraven in stones', 'c-ministry-death'), t(', was glorious, so that the children of Israel could not '), hy('stedfastly behold the face of Moses', 'c-moses-face'), t(' for the glory of his countenance; which '), hg('glory was to be done away', 'c-fading-glory'), t(':')),
            verse(8, t('How shall not the ministration of the spirit be rather glorious?')),
            verse(9, t('For if the ministration of condemnation be glory, much more doth the ministration of righteousness exceed in glory.')),
            verse(10, t('For even that which was made glorious had no glory in this respect, by reason of the glory that excelleth: for that which was done away is glorious, but that which remaineth is more glorious.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-ministry-death',
          html: 'The old covenant is called the &ldquo;ministration of death.&rdquo; This is not a slur. Death here means what the law brings: the knowledge of sin, the pronouncement of guilt, the condition of being condemned. And yet it was written by God&apos;s own finger into stone. It is holy and true. But it brings death because the law shows you what you cannot do, without giving you the power to do it.',
        },
        {
          kind: 'commentary',
          id: 'c-moses-face',
          html: 'The people could not look at Moses&apos; face because it shone with the reflected glory of God[res:sefaria-exodus-34-sinai]. He had been in God&apos;s presence. The light was so bright it terrified them. So he wore a veil. This is the picture of the old covenant: you cannot look directly at God. The law stands between you and Him.',
        },
        {
          kind: 'commentary',
          id: 'c-fading-glory',
          html: 'The old covenant&apos;s glory was <em>to be done away.</em> Paul is saying that in the moment of its greatest brilliance—on Sinai, inscribed in stone, written by God&apos;s finger—it was already being superseded. Something greater was coming.',
        },
        {
          kind: 'greek',
          id: 'greek-doxa-hyperbola',
          title: 'Doxa — &ldquo;Glory&rdquo; (with Hyperbolia — &ldquo;Excess&rdquo;)',
          script: 'δόξα',
          translit: '<strong>doxa</strong> · glory; brightness; honor; the revealed character of God',
          description: 'Paul piles up the language of glory. The old covenant had doxa. But the new covenant has doxa that exceeds by hyperbolia—it has a surplus of glory so overwhelming that the old covenant&apos;s glory becomes invisible by comparison.',
        },
        {
          kind: 'commentary',
          id: 'c-righteousness-glory',
          html: 'The new covenant is called the &ldquo;ministration of righteousness.&rdquo; Not the declaration of what you have failed to do, but the impartation of what Christ has done for you and the Spirit is doing in you. This is why its glory exceeds: it does not merely tell you the standard; it transforms you into the likeness of the standard.',
        },
        {
          kind: 'carry',
          html: 'You do not live under the law that brings knowledge of your failure without the power to overcome it. You live under grace—the impartation of Christ&apos;s righteousness, the working of the Spirit in your heart, the constant transformation that brings you closer to the image of Christ. The old way was glorious, but it was meant to be done away. The new way is more glorious because it does not leave you condemned; it makes you alive.',
        },
        {
          kind: 'reflection',
          id: 'cor3-righteousness',
          prompt: 'Have you lived under the &ldquo;ministration of condemnation,&rdquo; seeing the standard but feeling powerless to meet it? What would it mean to live instead under the &ldquo;ministration of righteousness&rdquo;?',
        },
        {
          kind: 'artwork',
          matchTitle: /moses|sinai|tablets|glory|face|veil/i,
          caption: '2 Corinthians 3:7–11 · From Fading Glory to Exceeding Glory',
        },
      ],
    },

    /* ─── 2 Corinthians 3:12–15 — Moses&apos; Veil and the Blinded Mind ─────── */
    {
      ref: '2 Corinthians 3:12–15',
      title: 'The Veil That Blinds',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(12, t('Seeing then that we have such hope, we use great plainness of speech:')),
            verse(13, t('And not as Moses, which put a '), hy('vail over his face', 'c-moses-veil'), t(', that the children of Israel could not stedfastly look to the end of that which is '), hg('abolished', 'c-abolished-doxa'), t(':')),
            verse(14, t('But their minds were '), hy('blinded', 'greek-pōroō'), t(': for until this day remaineth the same vail untaken away in the reading of the old testament; which vail is done away in Christ.')),
            verse(15, t('But even unto this day, when Moses is read, the vail is upon their heart.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-moses-veil',
          html: 'Paul references Exodus 34, where Moses veils his face because the people are afraid to look at him. But Paul reinterprets the veil: it was not just to protect the people from the brightness. It was to hide from them the <em>fact that the brightness was fading.</em> The law&apos;s glory was transient. Moses wore the veil so no one would see that the light was growing dim.',
        },
        {
          kind: 'commentary',
          id: 'c-abolished-doxa',
          html: 'The old covenant&apos;s glory was <em>abolished</em>. Not in the sense that it was evil or wrong. But it was temporary. Meant to pass away. The veil prevented Israel from seeing this. They thought the law&apos;s glory was permanent, ultimate, unchangeable. The veil was a kindness, but also a blindness.',
        },
        {
          kind: 'greek',
          id: 'greek-pōroō',
          title: 'Pōroō — &ldquo;to Blind&rdquo; or &ldquo;to Harden&rdquo;',
          script: 'πωρόω',
          translit: '<strong>pōroō</strong> · to harden; to make insensitive; to seal; to render spiritually blind',
          description: 'The root image is of hardened scar tissue. Repeated pressure hardens the flesh until it no longer responds to sensation. To be pōroō is to have one&apos;s spiritual senses sealed shut. The mind cannot perceive what is true.',
        },
        {
          kind: 'commentary',
          id: 'c-veil-heart',
          html: 'The veil has passed from Moses&apos; face to the hearts of those who read the old covenant without seeing that it points to Christ. The veil is not a visible cloth; it is spiritual blindness. The same Scripture that should reveal Jesus is read without perceiving Him, because a veil—an interior one—remains.',
        },
        {
          kind: 'carry',
          html: 'There is a veil that can settle over your heart. Not a physical one, but a spiritual blindness that prevents you from seeing what Christ has done for you. It settles slowly: a day of not turning toward Him becomes a week, becomes a season, becomes a habit of heart. You can be reading Scripture, hearing the Gospel, sitting in the community of faith—and the veil keeps you from seeing. What turns the veil away is not intellectual effort. It is turning.',
        },
        {
          kind: 'reflection',
          id: 'cor3-veil-heart',
          prompt: 'Is there a veil over your heart right now—a particular blindness to Christ&apos;s grace, His presence, His promises for you? Name it.',
        },
      ],
    },

    /* ─── 2 Corinthians 3:16–17 — The Veil Removed; Liberty in the Spirit ─ */
    {
      ref: '2 Corinthians 3:16–17',
      title: 'Turning Removes the Veil',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(16, t('Nevertheless when it '), hp('shall turn to the Lord', 'christ-turn'), t(', the vail shall be taken away.')),
            verse(17, t('Now the Lord is '), hg('that Spirit', 'c-lord-spirit'), t(': and where the Spirit of the Lord is, there is '), hy('liberty', 'greek-eleutheria'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-lord-spirit',
          html: 'This is one of the most astonishing sentences in Paul: "Now the Lord is that Spirit." The Lord—Jesus Christ—is the Spirit. Not in the sense that there is no distinction; rather, the Spirit who indwells believers, who writes the law on hearts, who gives life—this Spirit is the living power of the risen Christ. Where the Spirit acts, Christ is at work.',
        },
        {
          kind: 'greek',
          id: 'greek-eleutheria',
          title: 'Eleutheria — &ldquo;Liberty&rdquo; or &ldquo;Freedom&rdquo;',
          script: 'ἐλευθερία',
          translit: '<strong>eleutheria</strong> · freedom; liberty; the state of being unbound',
          description: 'Not lawlessness, but the freedom that comes from being released from the power of sin and death. Where the Spirit is, you are no longer enslaved to fear, to shame, to the relentless voice of condemnation. You are free.',
        },
        {
          kind: 'commentary',
          id: 'c-turn-lord',
          html: 'The veil is removed when "it shall turn to the Lord." This "it" refers to the heart, the mind—Israel, or any reader. The turning is not complicated. It is the decision to redirect your gaze, to stop looking at yourself and your failures, and to look toward Christ. In that moment, the veil lifts.',
        },
        {
          kind: 'christ',
          id: 'christ-turn',
          title: 'Christ Connection — Turning to See',
          html: 'Christ is Lord, and the Spirit who dwells in believers is the Spirit of Christ. To turn to the Lord is to turn to Jesus. And in that turning, the scales fall from your eyes. You see Him as He is—not as a condemner, but as the One who took your condemnation. Not as a lawgiver leaving you to your own weakness, but as the One whose resurrection power is available to you now. The veil is not torn away slowly or from the outside. It falls the moment you genuinely turn toward Him (cf. Ephesians 1:17–18, where Paul prays that "the eyes of your understanding being enlightened").',
        },
        {
          kind: 'carry',
          html: 'The veil comes off the moment you stop looking at yourself and turn toward Christ. Not a moment from now. Not after you get your act together. Now. The Spirit is not offering you information about freedom; He is offering you freedom itself. You are released from the law of sin and death. You are no longer trying to justify yourself; you are living from justification already given. This is what liberty looks like: the ability to be fully seen and fully known and fully loved by God, with nothing to hide and nothing to prove.',
        },
        {
          kind: 'reflection',
          id: 'cor3-turn',
          prompt: 'What does it mean to "turn to the Lord" in your specific situation right now? What would change if you genuinely turned—away from trying to justify yourself and toward His already-finished justification?',
        },
        {
          kind: 'artwork',
          matchTitle: /veil|unveiled|face|turn|freedom|liberty/i,
          caption: '2 Corinthians 3:16–17 · The Veil Removed',
        },
      ],
    },

    /* ─── 2 Corinthians 3:18 — From Glory to Glory ────────────────────────── */
    {
      ref: '2 Corinthians 3:18',
      title: 'Beholding, Transformed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(18, t('But we all, with open face '), hg('beholding as in a glass', 'c-beholding'), t(' the glory of the Lord, are '), hy('changed into the same image', 'greek-metamorphoo'), t(' from glory to glory, even as by the Spirit of the Lord.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-beholding',
          html: 'To behold "as in a glass" is to see a reflection. When you look at Christ—in Scripture, in prayer, in His people—you see His glory reflected back to you. But this is not idle gazing. Every act of beholding is transformative. You cannot truly see Jesus and remain unchanged.',
        },
        {
          kind: 'greek',
          id: 'greek-metamorphoo',
          title: 'Metamorphoo — &ldquo;to Transform&rdquo; or &ldquo;to Transfigure&rdquo;',
          script: 'μεταμορφόω',
          translit: '<strong>metamorphoo</strong> · to change form; to transform; to transfigure',
          description: 'Not merely improvement or modification, but genuine transformation into a new form. The caterpillar becomes a butterfly. In you, the old self is being remade into the likeness of Christ. The Spirit is the agent; Christ is the image you are being conformed to.',
        },
        {
          kind: 'commentary',
          id: 'c-from-glory-glory',
          html: 'This transformation is not a one-time event that happened when you became a Christian. It is a continuous progression: <em>from glory to glory.</em>[res:bibleodyssey-metamorphosis-glory] You enter the process bearing a measure of Christ&apos;s image. But as you keep your gaze on Him, that image deepens. You grow in His likeness. Your character becomes more like His. Your responses, your patience, your compassion—all are being remade.',
        },
        {
          kind: 'commentary',
          id: 'c-by-spirit-lord',
          html: 'The agent of transformation is the Spirit of the Lord. Not your effort. Not your willpower. Not your self-improvement project. The Spirit works in you, conforming you to Christ&apos;s image. Your part is to keep your face unveiled, your gaze fixed on Jesus, and to not resist the work He is doing.',
        },
        {
          kind: 'christ',
          id: 'christ-transformation',
          title: 'Christ Connection — Becoming Like Him',
          html: 'Paul echoes the promise Jesus gives: "When he shall appear, we shall be like him; for we shall see him as he is" (1 John 3:2). And Romans 8:29 is even more explicit: "Those whom he did predestinate, he also called: and whom he called, them he also justified: and whom he justified, them he also glorified" (taking the future as already accomplished in God&apos;s sight). The trajectory of a Christian life, from beginning to end, is becoming like Christ. You are being transformed from glory to glory—each stage a new degree of His likeness. This is your destiny. Not escape from the body, not impersonal merger with the divine, but progressive transformation into the very image of Jesus.',
        },
        {
          kind: 'carry',
          html: 'This week, there are moments when you will see Christ—in a verse that hits your heart, in an act of kindness from someone whose faith runs deep, in a moment of answered prayer, in the simple fact that He is with you even now. In those moments, you are being changed. Not by gritting your teeth. Not by trying harder. But by the gentle, relentless work of the Spirit, conforming you to His image. The you of next year will be different from the you of today, because you have been gazing on Christ. And the you of eternity will be more changed still. From glory to glory, you are becoming like Him.',
        },
        {
          kind: 'reflection',
          id: 'cor3-glory-glory',
          prompt: 'What is one way you have already been changed from beholding Christ? And what is one aspect of His character you most need to be transformed into right now?',
        },
        {
          kind: 'artwork',
          matchTitle: /glory|light|transfiguration|transformation|face|behold|reflection|mirror/i,
          caption: '2 Corinthians 3:18 · From Glory to Glory',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'But we all, with open face beholding as in a glass the glory of the Lord, are changed into the same image from glory to glory, even as by the Spirit of the Lord.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Corinthians 3 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-exodus-34-sinai',
      kind: 'archive',
      source: 'Sefaria',
      label: 'Exodus 34: Moses and the Tablets of Stone',
      url: 'https://www.sefaria.org/Exodus.34?lang=bi',
      description: 'Hebrew + English of Moses receiving the stone tablets and the veiling of his face—the old covenant&apos;s glory that Paul contrasts with the Spirit&apos;s glory.',
    },
    {
      id: 'bibleodyssey-metamorphosis-glory',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Transformation and Glory in Paul',
      url: 'https://www.bibleodyssey.org/dictionary/glorify/',
      description: 'Scholarly entry on metamorphosis and the continuous transformation from glory to glory in Pauline theology.',
    },
    {
      id: 'intertextual-exodus-spirit',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Spirit Writing on Hearts (Exodus 34 ↔ 2 Corinthians 3)',
      url: 'https://intertextual.bible/text/exodus-34/2-corinthians-3.3/',
      description: 'Side-by-side comparison of stone tablets versus hearts—the shift from letter to Spirit.',
    },
  ],

  hasHebrew: false,
};
