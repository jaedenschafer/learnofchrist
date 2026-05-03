import { hp, hy, hg, t, verse, plain, type RichChapterContent } from './types';

/**
 * 1 Corinthians 10 — Israel&apos;s Wilderness: A Warning for the Church
 *
 * Paul anchors the Corinthians&apos; spiritual liberty in Israel&apos;s wilderness history.
 * Israel was baptized, ate spiritual food, drank from a spiritual rock—Christ
 * Himself. Yet most perished through idolatry and immorality. The chapter asks:
 * What makes the difference between those who receive God&apos;s gifts and remain faithful,
 * and those who receive them yet fall away? Paul&apos;s answer frames temptation as common
 * to all humans, but also promises that God always provides a way of escape. The
 * Lord&apos;s Supper itself—the cup and bread—is a covenant act that binds believers
 * to Christ and to one another, incompatible with idol-worship. Everything the
 * Corinthians eat and drink, do and endure, must be done to the glory of God.
 */
export const FIRST_CORINTHIANS_10: RichChapterContent = {
  bookSlug: '1-corinthians',
  bookName: '1 Corinthians',
  chapter: 10,

  estimatedMinutes: { beginner: 13, intermediate: 21, deep: 31 },
  intros: [
    'The Corinthians are confident in their standing with God. They have been baptized. They partake of the Lord&apos;s Supper. They believe they have the Holy Spirit. But confidence can curdle into complacency, and Paul will not allow it. He turns to Israel&apos;s desert wanderings as a mirror for the church&apos;s own danger. Israel had even greater visible privileges than the Corinthians have—the cloud, the sea, the manna, the rock—yet most of that generation perished in the wilderness because of idolatry and sexual immorality. Paul&apos;s message is stark: spiritual privilege is not spiritual insurance.',
    'The chapter divides into two halves. Verses 1–13 use the wilderness account as a warning and frame temptation as universal but not overwhelming. God&apos;s faithfulness ensures a way of escape from every trial. Verses 14–22 apply this directly to the Corinthian question about eating meat offered to idols. The Lord&apos;s Supper is participation in Christ&apos;s body and blood—a covenant bond with Him and with the church. This bond is incompatible with sitting at an idol&apos;s table. The chapter ends with the principle that governs every choice: whether you eat, drink, or do anything at all, do it to the glory of God.',
  ],

  sections: [
    /* ─── 1 Corinthians 10:1–2 — Under the Cloud ────────────────────────── */
    {
      ref: '1 Corinthians 10:1–2',
      title: 'Under the Cloud',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            verse(
              1,
              t('Moreover, brethren, I would not that ye should be ignorant, how that all our fathers were '),
              hy('under the cloud', 'cor10-cloud'),
              t(', and all passed through the sea;'),
            ),
            verse(
              2,
              t('And were all '),
              hp('baptized unto Moses in the cloud and in the sea', 'christ-baptism-wilderness'),
              t(';'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor10-cloud',
          html:
            'The cloud that guided Israel out of Egypt (Exodus 13:21–22) becomes in Paul&apos;s reading a sign of <em>all Israel&apos;s</em> standing under God&apos;s protection and covenant. The cloud is a symbol of God&apos;s presence—the Shekinah, the place where God dwells visibly. Not every Israelite touched the cloud or passed through the sea themselves, but <em>all</em> were under it. They belonged to a covenanted people. No individual could claim exemption from the pattern that would follow.',
        },
        {
          kind: 'christ',
          id: 'christ-baptism-wilderness',
          title: 'Christ Connection — Baptized unto Moses, Baptized unto Christ',
          html:
            'Paul&apos;s phrase &ldquo;baptized unto Moses&rdquo; is striking—Israel was brought through the sea in a way that bound them to Moses as their leader and deliverer. But for the Corinthian readers, the parallel is direct: <em>you</em> have been baptized unto Christ. Your baptism has sealed you to Him as Israel&apos;s was sealed to Moses. That baptism is not a past moment to rest on. It is a declaration of allegiance that demands living faithfulness. The Corinthians must not assume that being baptized means being safe; rather, it means being accountable.',
        },
        {
          kind: 'carry',
          html:
            'Your baptism did not give you immunity from temptation. It gave you a covenant. You belong now to Christ as utterly as Israel belonged to Moses. The name &ldquo;Christian&rdquo; is not a badge of ease but a bond of allegiance. When you face a choice today that tests that allegiance, remember: you were not baptized into comfort or safety. You were baptized into Him.',
        },
        {
          kind: 'reflection',
          id: 'cor10-baptism-reflex',
          prompt:
            'What does it mean to you that your baptism was not just an individual transaction with God, but a covenant that binds you to Christ&apos;s body? Where might that bond be tested this week?',
        },
      ],
    },

    /* ─── 1 Corinthians 10:3–4 — Spiritual Food and Drink ────────────────── */
    {
      ref: '1 Corinthians 10:3–4',
      title: 'The Same Spiritual Meat',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            verse(
              3,
              t('And did all eat the same '),
              hy('spiritual meat', 'cor10-spiritual-food'),
              t(';'),
            ),
            verse(
              4,
              t('And did all drink the same '),
              hy('spiritual drink', 'cor10-spiritual-food'),
              t(': for they drank of that '),
              hp('spiritual Rock that followed them: and that Rock was Christ', 'christ-rock'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'cor10-spiritual-food',
          title: 'Pneumatikos — Spiritual',
          script: 'πνευματικός',
          translit: '<strong>pneuma-tik-os</strong> · belonging to the spirit; not merely physical but divine in origin and meaning',
          description:
            'The food Israel ate was manna (Exodus 16)[res:sefaria-exodus-13-17]. Physically it sustained their bodies. But Paul sees deeper: it was <em>spiritual</em> food, given by God&apos;s hand for a spiritual people learning to trust Him. The same applies to the water: the rock in the wilderness (Exodus 17)[res:sefaria-numbers-20] was not merely a physical stone, but a vessel of God&apos;s provision in the desert.',
        },
        {
          kind: 'commentary',
          id: 'cor10-drink-commentary',
          html:
            'The manna fell from heaven. The water flowed from a rock in the desert. Both were miracles—God providing where nothing naturally existed. But here is the shock of Paul&apos;s application: the rock <em>followed</em> them. Not a single rock struck once, but a continuous source of living water that traveled with Israel through the wilderness. Some ancient Jewish traditions held exactly this teaching—that the well of Miriam, a miraculous spring, accompanied Israel through the desert.',
        },
        {
          kind: 'christ',
          id: 'christ-rock',
          title: 'Christ Connection — The Rock That Followed',
          html:
            'The most direct statement of Christ&apos;s presence in the Old Testament: &ldquo;and that Rock was Christ.&rdquo; Not a type or a shadow, but <em>was</em>. In 1 Corinthians 10:9, Paul will say Israel &ldquo;tempted Christ&rdquo; in the wilderness. This is the pre-incarnate Christ sustaining His people. John 7:37 draws the same line: Christ stands in the temple and cries, &ldquo;If any man thirst, let him come unto me, and drink. He that believeth on me, as the scripture hath said, out of his belly shall flow rivers of living water.&rdquo; The water that followed Israel in the desert prefigures the living water that flows from Christ Himself (John 4:14).',
        },
        {
          kind: 'carry',
          html:
            'That rock followed Israel. It did not stand still and wait for them to find it; it moved with them through the wilderness. That is the nature of Christ&apos;s provision in your own wilderness seasons—not a distant resource you have to earn or locate, but a presence that follows you through the dark places. The question is not whether the provision exists. The question is whether you are drinking from it.',
        },
        {
          kind: 'reflection',
          id: 'cor10-rock-reflex',
          prompt:
            'When have you experienced Christ&apos;s provision as something that <em>followed you</em> through a difficult season? How does that change the way you approach the wilderness moments ahead?',
        },
      ],
    },

    /* ─── 1 Corinthians 10:5–11 — Yet Most Perished ──────────────────────── */
    {
      ref: '1 Corinthians 10:5–7',
      title: 'Overthrown in the Wilderness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            verse(
              5,
              t('But with many of them God was not well pleased: for they were '),
              hg('overthrown in the wilderness', 'cor10-overthrown'),
              t('.'),
            ),
            verse(
              6,
              t('Now these things were '),
              hg('our examples', 'cor10-examples'),
              t(', to the intent we should not lust after evil things, as they also lusted.'),
            ),
            verse(
              7,
              t('Neither be ye idolaters, as were some of them; as it is written, The people sat down to eat and drink, and rose up to play.'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'cor10-tupos',
          title: 'Tupos — Example, Type, Pattern',
          script: 'τύπος',
          translit: '<strong>typ-os</strong> · imprint; example; a pattern that shapes what comes after',
          description:
            'In verse 6, the Greek word is <em>tupos</em>—the same root as our word "type" in typology. Israel&apos;s wilderness failures are not mere historical curiosities. They are <em>types</em> cast into history to shape the Corinthian church&apos;s behavior. The word implies that those ancient events are stamped into the fabric of God&apos;s instruction to all His people.',
        },
        {
          kind: 'commentary',
          id: 'cor10-overthrown',
          html:
            'The word <em>overthrown</em> (Greek: <em>katatasso</em>, "to lay low, to destroy") refers to the generation that died in the wilderness. Numbers 14 records the fuller context: Israel rejected God&apos;s word, refused to enter the Promised Land, and God swore that generation would not see it. Forty years they wandered, and when they died, not one of that generation entered Canaan (except Joshua and Caleb). It was not Egypt that destroyed them, but disobedience in the midst of God&apos;s provision.',
        },
        {
          kind: 'commentary',
          id: 'cor10-examples',
          html:
            'Paul is explicit: these are <em>our</em> examples. Not just ancient history, but instruction written in the sand of the wilderness for later generations to read. The pattern repeats: privilege followed by unfaithfulness followed by judgment. The Corinthians are not exempt from this pattern; they are accountable to it.',
        },
        {
          kind: 'carry',
          html:
            'It is easy to read Corinthians 10 and think Paul is talking about other people—Israel then, some other church now. But Paul says "our examples." You are reading Scripture written because Israel failed in the wilderness and God wanted the church to learn from it. That means your unfaithfulness has consequences. Your idolatry—whatever form it takes, whether false gods or self-worship—is not private. It is a repetition of the pattern that destroyed a generation. The example is given so you might not repeat it.',
        },
        {
          kind: 'reflection',
          id: 'cor10-examples-reflex',
          prompt:
            'What are the modern equivalents of idolatry in your own life? What does it look like to "sit down to eat and drink and rise up to play" while ignoring your covenant with God?',
        },
      ],
    },

    /* ─── 1 Corinthians 10:8–11 — Other Wilderness Sins ──────────────────── */
    {
      ref: '1 Corinthians 10:8–11',
      title: 'Sexual Immorality, Testing, and Complaint',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            verse(
              8,
              t('Neither let us commit fornication, as some of them committed, and fell in one day three and twenty thousand.'),
            ),
            verse(
              9,
              t('Neither let us '),
              hg('tempt Christ', 'cor10-tempt-christ'),
              t(', as some of them also tempted, and were destroyed of serpents.'),
            ),
            verse(
              10,
              t('Neither murmur ye, as some of them also murmured, and were destroyed of the destroyer.'),
            ),
            verse(
              11,
              t('Now all these things happened unto them for ensamples: and they are written for our admonition, upon whom the ends of the world are come.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor10-fornication',
          html:
            'Paul cites Numbers 25, where Israel at Shittim committed sexual immorality with Moabite women who drew them to worship Baal-Peor. The plague that followed killed 24,000 (the slight discrepancy with Paul&apos;s number of 23,000 appears in ancient manuscripts; the point is massive judgment). Sexual sin is not minor disobedience. It is covenant-breaking.',
        },
        {
          kind: 'greek',
          id: 'cor10-peirazoo',
          title: 'Peirazoo — To Test, Tempt, Try',
          script: 'πειράζω',
          translit: '<strong>peir-az-oo</strong> · to test; to try one&apos;s faith; to solicit to sin',
          description:
            'Israel <em>tempted</em> Christ in the wilderness—not that they tempted Him to sin (Christ cannot be tempted to evil), but they tested His patience, His will to provide, His character. They said, "Is the LORD among us or not?" (Exodus 17:7). This is the sin of doubt wrapped in accusation.',
        },
        {
          kind: 'commentary',
          id: 'cor10-tempt-christ',
          html:
            'Paul&apos;s statement here is astonishing: "Neither let us tempt Christ, as some of them also tempted." This applies the New Testament identification of Christ (the pre-incarnate Word) to Old Testament events. Israel in the wilderness was testing <em>Christ</em>. Hebrews 3 draws the same conclusion, speaking of those who "provoked" Christ in the wilderness and asking the Corinthian readers not to "harden your hearts as in the provocation" (Heb. 3:8, 15). The wilderness generation tested God—but God, in the person of the Word, was the one being tested. That same Christ now stands in your life, and doubt is always a form of testing His faithfulness.',
        },
        {
          kind: 'christ',
          id: 'christ-tempt',
          title: 'Christ Connection — Israel Tempted Christ',
          html:
            'Paul&apos;s statement is astonishing: "Neither let us tempt Christ, as some of them also tempted." This applies the New Testament identification of Christ (the pre-incarnate Word) to Old Testament events. Israel in the wilderness was testing <em>Christ</em>. Hebrews 3 draws the same conclusion, speaking of those who "provoked" Christ in the wilderness and asking the Corinthian readers not to "harden your hearts as in the provocation" (Heb. 3:8, 15). The wilderness generation tested God—but God, in the person of the Word, was the one being tested. That same Christ now stands in your life, and doubt is always a form of testing His faithfulness.',
        },
        {
          kind: 'carry',
          html:
            'When you doubt whether God will provide, whether His promises are real, whether He actually cares—you are testing Christ. Not tempting Him to sin, but challenging Him to prove Himself. The wilderness generation did this over and over: at the Red Sea, at Marah, at Rephidim, at Sinai. Each test of God&apos;s faithfulness was really a test of His character. What are you testing Him about right now?',
        },
        {
          kind: 'commentary',
          id: 'cor10-serpents',
          html:
            'Numbers 21 records the incident: Israel complained about the manna, saying they hated it. God sent fiery serpents that bit them, and many died. The complaint seems small—they were tired of the same food, day after day. But in the context of God&apos;s wilderness provision, the complaint was ingratitude masking a deeper rejection of God&apos;s gifts.',
        },
        {
          kind: 'reflection',
          id: 'cor10-murmur-reflex',
          prompt:
            'Israel murmured—complained—and were destroyed. How do you distinguish between legitimate frustration and the kind of murmuring that becomes a refusal of God&apos;s provision? Where are you murmuring now?',
        },
      ],
    },

    /* ─── 1 Corinthians 10:12–13 — God's Faithfulness ──────────────────── */
    {
      ref: '1 Corinthians 10:12–13',
      title: 'Temptation, Faithfulness, and the Way of Escape',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            verse(
              12,
              t('Wherefore let him that '),
              hg('thinketh he standeth take heed lest he fall', 'cor10-standing'),
              t('.'),
            ),
            verse(
              13,
              t('There hath no '),
              hy('temptation taken you but such as is common to man', 'cor10-common-temptation'),
              t(': but God is faithful, who will not suffer you to be tempted above that ye are able; but will with the temptation also make a '),
              hp('way to escape', 'christ-escape'),
              t(', that ye may be able to bear it.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor10-standing',
          html:
            'Confidence can be the first sign of danger. The Corinthians believed they were strong, spiritually mature, secure in their knowledge of God. Paul warns: confidence that is not grounded in watchfulness is a cliff you cannot see until you have already fallen off it. Standing firm is not a stable platform you reach once; it is a posture you must take and retake, hour by hour, with your eyes open.',
        },
        {
          kind: 'greek',
          id: 'cor10-ekbasis',
          title: 'Ekbasis — Way of Escape, Way Out',
          script: 'ἔκβασις',
          translit: '<strong>ek-bas-is</strong> · a way out; an exit; deliverance from danger',
          description:
            'The Greek word literally means "a way out" or "an exit." When you are in the grip of temptation, you feel cornered—as if there is no way out, only forward into sin. Paul promises that with every temptation, God provides an <em>ekbasis</em>, an exit, a passage to safety. You are never trapped.',
        },
        {
          kind: 'commentary',
          id: 'cor10-common-temptation',
          html:
            'Temptation is universal. Paul does not promise a life without trials. He promises that no trial will be unique to you, no test so strange that it is beyond the ordinary experience of human beings. You are not singled out, isolated in your struggle. Every temptation you face is one that "man" (humans in general) has faced. That universality is itself comfort: God has built a world in which temptation is common <em>and</em> survivable.',
        },
        {
          kind: 'christ',
          id: 'christ-escape',
          title: 'Christ Connection — The Faithful God Provides Escape',
          html:
            'God&apos;s character is the foundation: He is <em>faithful</em>. Not just powerful, not just present, but faithful—trustworthy, true to His word, committed to His covenant. Hebrews 2:18 says Christ, "being tempted, is able to succor them that are tempted." The promise is not that temptation will disappear. It is that God will not let you be tested beyond your capacity to endure. That escape is not always a way around the trial—sometimes it is a way through it, with God&apos;s strength sustaining you. The cross itself was the ultimate temptation Christ faced—the invitation to save Himself, to refuse the Father&apos;s will. His "way of escape" was to embrace the cup and drink it to the bottom (Matt. 26:39–42). Your way of escape will not always be a bypass; sometimes it is endurance.',
        },
        {
          kind: 'carry',
          html:
            'You are not being tested beyond your capacity. That promise stands even when temptation feels overwhelming, even when you cannot see a way out. The way of escape may not be obvious—it may not be the way you hoped for—but it exists. Sometimes the escape is a friend you can call. Sometimes it is the Bible verse you suddenly remember. Sometimes it is simply the courage to say no and wait for the feeling to pass. God is faithful. Trust that. Look for the exit. It is always there.',
        },
        {
          kind: 'reflection',
          id: 'cor10-escape-reflex',
          prompt:
            'When you face temptation, what does your "way of escape" usually look like? How might you cultivate the habit of looking for it rather than feeling trapped?',
        },
      ],
    },

    /* ─── 1 Corinthians 10:14–17 — The Cup and Bread ──────────────────── */
    {
      ref: '1 Corinthians 10:14–17',
      title: 'Flee Idolatry, The Cup of Blessing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            verse(
              14,
              t('Wherefore, my dearly beloved, '),
              hg('flee from idolatry', 'cor10-flee-idolatry'),
              t('.'),
            ),
            verse(
              15,
              t('I speak as to wise men; judge ye what I say.'),
            ),
            verse(
              16,
              t('The '),
              hp('cup of blessing which we bless, is it not the communion of the blood of Christ', 'christ-cup-blood'),
              t('? '),
              hp('the bread which we break, is it not the communion of the body of Christ', 'christ-bread-body'),
              t('?'),
            ),
            verse(
              17,
              t('For we being many are one bread, and one body: for we are all partakers of that one bread.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor10-flee-idolatry',
          html:
            'Paul does not argue with the Corinthians. He does not offer a debate on whether eating meat offered to idols is permissible. He commands: <em>flee</em> from idolatry. The Greek word is <em>pheugo</em>—it means to run, to escape, as one flees from danger. This is not a suggestion. It is not a gray area open to personal judgment. The connection between eating at an idol&apos;s table and participation in idolatry is direct and will not tolerate compromise.',
        },
        {
          kind: 'commentary',
          id: 'cor10-communion-koinonia',
          html:
            'The word "communion" here is <em>koinonia</em> in Greek—more than mere participation or sharing. It means fellowship, partnership, a bond that unites. When you eat the bread and drink the cup, you are not engaging in a solo transaction with God; you are entering into <em>fellowship with Christ&apos;s sacrifice</em>. His body and blood, offered for you, are the substance and seal of that bond. To then turn and eat at an idol&apos;s table is to attempt to enter into the same kind of bond with that idol. The two bonds are incompatible. You cannot be in covenant with two masters.',
        },
        {
          kind: 'greek',
          id: 'cor10-koinonia',
          title: 'Koinonia — Fellowship, Sharing, Communion',
          script: 'κοινωνία',
          translit: '<strong>koin-o-ni-a</strong> · fellowship; partnership; sharing in a common life or inheritance',
          description:
            'More than mental agreement or intellectual assent. <em>Koinonia</em> means a real bond, a mutual participation in something shared. To have <em>koinonia</em> with Christ&apos;s blood means to be bound to Him in His sacrifice. You are not an observer; you are a participant.',
        },
        {
          kind: 'christ',
          id: 'christ-cup-blood',
          title: 'Christ Connection — The Cup of His Blood',
          html:
            'Jesus Himself instituted this language at the Last Supper: &ldquo;This is my blood of the new testament, which is shed for many for the remission of sins&rdquo; (Matt. 26:28). The Corinthians would have known the words from their own celebration of the Supper. Now Paul asks them to remember what they are doing when they drink: entering into the covenant bond of Christ&apos;s blood. That covenant cannot coexist with idolatry. The cup binds you to Christ in His sacrifice on the cross; it is a seal written in His own blood.',
        },
        {
          kind: 'christ',
          id: 'christ-bread-body',
          title: 'Christ Connection — The Bread of His Body',
          html:
            'Similarly with the bread: you are not eating bread and reflecting on Christ mentally. You are eating the <em>communion of His body</em>—entering into participation in His incarnation, His flesh, His covenant. This is not symbolic language. It is covenant language. The Eucharist—the Supper—is the renewal of your bond with Him.',
        },
        {
          kind: 'carry',
          html:
            'Every time you take the cup and bread, you are saying with your whole self: I belong to Christ. His blood is shed for me. His body is given for me. That is not a feeling to cultivate; it is a <em>reality to live out</em>. When you turn from the table and go into the world, the covenant you just renewed follows you. You cannot then sit at another table—the table of idolatry, self-worship, unchecked appetite—and pretend you are still faithful. Flee. The cup of blessing calls you to a single allegiance.',
        },
        {
          kind: 'reflection',
          id: 'cor10-cup-reflex',
          prompt:
            'When you next take the cup and bread, pause and ask: What covenant am I renewing? What am I promising? Then ask: Am I keeping that promise in my daily choices?',
        },
      ],
    },

    /* ─── 1 Corinthians 10:18–22 — The Table of the Lord ────────────────── */
    {
      ref: '1 Corinthians 10:18–22',
      title: 'You Cannot Drink Both Cups',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            verse(
              18,
              t('Behold Israel after the flesh: are not they which eat of the sacrifices partakers of the altar?'),
            ),
            verse(
              19,
              t('What say I then? that the idol is any thing? or that which is offered in sacrifice to idols is any thing?'),
            ),
            verse(
              20,
              t('But I say, that the things which the Gentiles sacrifice, they sacrifice to devils, and not to God: and I would not that ye should have fellowship with devils.'),
            ),
            verse(
              21,
              t('Ye cannot drink the cup of the Lord, and '),
              hg('the cup of devils', 'cor10-cup-devils'),
              t(': ye cannot be partakers of the Lord&apos;s table, and of the table of devils.'),
            ),
            verse(
              22,
              t('Do we provoke the Lord to jealousy? are we stronger than he?'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor10-sacrifices',
          html:
            'Israel&apos;s temple sacrifices were real. When an Israelite brought an animal to the altar, the act was meaningful. The one who ate of that sacrifice became a participant in the covenant meal, linked to the God of Israel. The question Paul raises cuts to the Corinthian problem: if eating from an altar created a real bond of fellowship with that God, does not eating from an idol&apos;s table create a real bond with that idol? The principle is the same.',
        },
        {
          kind: 'greek',
          id: 'cor10-daimon',
          title: 'Daimon — Demon, Evil Spirit',
          script: 'δαίμων',
          translit: '<strong>dai-mon</strong> · a supernatural being; in Christian usage, a demon or unclean spirit opposed to God',
          description:
            'Paul does not debate whether idols are real (he elsewhere says they are mere wood and stone). But the spiritual forces behind idolatry—the powers that draw humans away from God—are real and opposed to His purposes. To participate in idol-worship is to align yourself with those powers.',
        },
        {
          kind: 'commentary',
          id: 'cor10-cup-devils',
          html:
            'The contrast is absolute. There is no third way, no neutral ground. You drink <em>the</em> cup of the Lord—singular, exclusive—or you drink <em>the</em> cup of devils. You sit at <em>the</em> Lord&apos;s table or at <em>the</em> table of devils. The repetition of the article ("the") emphasizes the finality: you choose <em>which</em> table. You cannot sit at both.',
        },
        {
          kind: 'carry',
          html:
            'Paul&apos;s language is deliberate and severe. In your own choices, you sit at a table every day—the table of your appetites, your loyalties, your worship. You cannot sit at Christ&apos;s table on Sunday and at the table of idolatry the rest of the week. It is not possible. Not because God is being rigid or harsh, but because you are a single self, made for a single allegiance. To live well is to choose which table. To live in hypocrisy is to pretend you can eat at both.',
        },
        {
          kind: 'reflection',
          id: 'cor10-tables-reflex',
          prompt:
            'What tables are you sitting at in your actual life? Where are you trying to have it both ways? What does it mean, literally and not just spiritually, to choose one table?',
        },
      ],
    },

    /* ─── 1 Corinthians 10:23–26 — Lawful But Not Expedient ────────────── */
    {
      ref: '1 Corinthians 10:23–26',
      title: 'All Things Lawful, But Not All Things Expedient',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            verse(
              23,
              t('All things are lawful for me, but all things are not expedient: all things are lawful for me, but all things edify not.'),
            ),
            verse(
              24,
              t('Let no man seek his own, but '),
              hg('every man another&apos;s wealth', 'cor10-another-wealth'),
              t('.'),
            ),
            verse(
              25,
              t('Whatsoever is sold in the shambles, eat, asking no question for conscience sake:'),
            ),
            verse(
              26,
              t('For the earth is the Lord&apos;s, and the fulness thereof.'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'cor10-sumphero',
          title: 'Sumphero / Symphero — Expedient, Profitable, Beneficial',
          script: 'συμφέρω',
          translit: '<strong>sym-pher-o</strong> · to bring together; to be beneficial or profitable; to conduce to one&apos;s advantage',
          description:
            'The word literally means "to bring together." What is <em>expedient</em> is what brings together, what builds up, what serves the common good. The question is not "Is this legal?" but "Does this strengthen the body of Christ, or does it harm it?"',
        },
        {
          kind: 'commentary',
          id: 'cor10-another-wealth',
          html:
            'The word <em>wealth</em> here is archaic English (from the old translation). It means "well-being," "welfare," "advantage." The principle is simple and radical: when you have a choice, do not choose based on your own freedom or preference. Choose based on what benefits your brother or sister. The Corinthians are confident in their knowledge and freedom. Paul says that knowledge and freedom are real, but they are not the highest value. Love—the welfare of another—is.',
        },
        {
          kind: 'commentary',
          id: 'cor10-shambles',
          html:
            'The practical application: if you buy meat in the market[res:ascsa-corinth-macellum] without asking whether it was offered to an idol, you are free in conscience—because the earth is the Lord&apos;s[res:sefaria-psalm-24]. You do not need to investigate every source. But if someone tells you, "This was offered to an idol," then the question shifts. Eating it in that person&apos;s presence becomes an act of care—or a lack of it.',
        },
        {
          kind: 'carry',
          html:
            'You have freedoms. You are right to claim them. But freedom is always constrained by love. The question is never just "What can I do?" but "What does my brother or sister need from me right now?" This reversal of perspective—from self to other, from liberty to love—is not legalism. It is the deepest form of freedom: the freedom to surrender your preferences for the sake of someone else&apos;s growth.',
        },
        {
          kind: 'reflection',
          id: 'cor10-expedient-reflex',
          prompt:
            'Where in your life are you choosing what is lawful for you rather than what is expedient for someone else? What would change if you made your decisions based on another&apos;s well-being?',
        },
      ],
    },

    /* ─── 1 Corinthians 10:27–30 — Eat with a Clear Conscience ──────────── */
    {
      ref: '1 Corinthians 10:27–30',
      title: 'Conscience and the Glory of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            verse(
              27,
              t('If any of them that believe not bid you to a feast, and ye be disposed to go; whatsoever is set before you, eat, asking no question for conscience sake.'),
            ),
            verse(
              28,
              t('But if any man say unto you, This is offered in sacrifice unto idols, eat not for his sake that shewed it, and for conscience sake: for the earth is the Lord&apos;s, and the fulness thereof:'),
            ),
            verse(
              29,
              t('Conscience, I say, not thine own, but of the other: for why is my liberty judged of another man&apos;s conscience?'),
            ),
            verse(
              30,
              t('For if I by grace be a partaker, why am I evil spoken of for that for which I give thanks?'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor10-feast',
          html:
            'Paul allows freedom to accept a non-believer&apos;s dinner invitation and to eat what is set before you without worry. You are not responsible for investigating the backstory of the food. Your conscience does not have to bear the weight of possibilities. But if someone <em>tells you</em> that food was offered to an idol, everything changes. Then the choice becomes visible, personal, and the principle of love applies.',
        },
        {
          kind: 'commentary',
          id: 'cor10-conscience-not-thine',
          html:
            'Paul makes a subtle but crucial point. Conscience is important, but <em>not your own conscience alone</em>. The conscience of the weaker believer, the one who would be stumbled by your eating, is the one you should consider. This inverts the modern assumption that conscience is a private, individual matter. In Paul&apos;s view, conscience operates in community. My freedom to eat is constrained by your growth as a believer.',
        },
        {
          kind: 'carry',
          html:
            'The modern temptation is to say: "This is between me and God. My conscience is clear. If someone else is offended, that&apos;s their problem." Paul will not allow it. Your brother or sister is not someone else&apos;s problem. They are part of your body. The grace that forgives you is the same grace working on them. To undermine their faith for your freedom is to make a trade that God does not honor.',
        },
        {
          kind: 'reflection',
          id: 'cor10-conscience-reflex',
          prompt:
            'Who in your life is weaker in their faith right now? How might your choices—not your beliefs, but your actual choices—either strengthen or stumble them? Are you willing to give up something "lawful" for them?',
        },
      ],
    },

    /* ─── 1 Corinthians 10:31–32 — To the Glory of God ──────────────────── */
    {
      ref: '1 Corinthians 10:31–32',
      title: 'Whether You Eat or Drink, Do All to the Glory of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            verse(
              31,
              t('Whether therefore ye eat, or drink, or '),
              hp('whatsoever ye do, do all to the glory of God', 'christ-glory'),
              t(';'),
            ),
            verse(
              32,
              t('Give none offence, neither to the Jews, nor to the Gentiles, nor to the church of God:'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'cor10-doxa',
          title: 'Doxa — Glory, Splendor, Honor',
          script: 'δόξα',
          translit: '<strong>dox-a</strong> · honor; splendor; the manifest presence and nature of God',
          description:
            'Not just reputation or opinion, but <em>doxa</em>—the weighty, visible presence of God&apos;s character made manifest. To do something "to the glory of God" is to do it in a way that makes His character visible, that honors Him and reflects His nature.',
        },
        {
          kind: 'commentary',
          id: 'cor10-eat-drink',
          html:
            'Paul takes the most mundane actions—eating, drinking—and elevates them to cosmic significance. Nothing in your life is beneath God&apos;s notice or outside the question: Does this bring glory to Him? The Christian life is not divided into "sacred" hours (prayer, worship) and "secular" hours (eating, working, resting). Everything is the arena of God&apos;s glory. That is what it means to belong to Him completely.',
        },
        {
          kind: 'christ',
          id: 'christ-glory',
          title: 'Christ Connection — All to the Glory of God',
          html:
            'The apostle Paul says in Colossians 3:17: &ldquo;Whatsoever ye do in word or deed, do all in the name of the Lord Jesus, giving thanks to God and the Father by him.&rdquo; Christ did not come to carve out a holy realm separate from ordinary life. He came to redeem and sanctify <em>all</em> of it. Your eating, your work, your rest, your relationships—when done in His name and for His glory, they become acts of worship. The small choices are not small at all.',
        },
        {
          kind: 'carry',
          html:
            'Here is the governing principle for everything: <em>to the glory of God</em>. Before you eat, drink, speak, work, decide—pause and ask: Will this bring honor to God or dimness to His image? Will this show others who He is or hide Him? That single question, asked honestly, will clarify what you need to do. It does not eliminate freedom. It focuses freedom toward its truest end.',
        },
        {
          kind: 'reflection',
          id: 'cor10-glory-reflex',
          prompt:
            'Choose one ordinary activity you do every day. How might you do it differently if your conscious goal was to bring glory to God? What would change?',
        },
      ],
    },

    /* ─── 1 Corinthians 10:33 — The Example to Follow ──────────────────── */
    {
      ref: '1 Corinthians 10:33',
      title: 'Pleasing All, Seeking the Profit of Many',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            verse(
              33,
              t('Even as I '),
              hg('please all men in all things, not seeking mine own profit, but the profit of many, that they may be saved', 'cor10-paul-example'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor10-paul-example',
          html:
            'Paul does not end with abstract principle. He ends with his own example. This is not the language of a man protecting his own comfort or asserting his rights. "I please all men in all things"—not for flattery, but for the sake of the gospel. His liberty, his preferences, his claim to be "strong"—all are subordinate to <em>the profit of many, that they may be saved</em>. The goal is not moralistic rule-keeping. The goal is the salvation of souls.',
        },
        {
          kind: 'carry',
          html:
            'Paul does not ask the Corinthians to do anything he does not do himself. His example is the measure of what he teaches. And his example is relentless: every choice subordinated to the question "Will this lead someone toward Christ or away from Him?" That is a high calling. It is also the deepest freedom, because in pursuing the profit of others, you become most fully yourself.',
        },
        {
          kind: 'reflection',
          id: 'cor10-paul-reflex',
          prompt:
            'Paul says he tries to please all people, not for flattery but for their salvation. How does that motive change what it means to be "all things to all people"? What would you have to give up to live by it?',
        },
      ],
    },

    /* ─── Artwork hook ─────────────────────────────────────────────────── */
    {
      ref: '',
      title: '',
      blocks: [
        {
          kind: 'artwork',
          matchTitle: /israel|wilderness|manna|rock|communion|supper|corinth/i,
          caption: '1 Corinthians 10 · Israel in the Wilderness',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 1 Corinthians 10',
    quote:
      'That Rock was Christ. You cannot drink the cup of the Lord and the cup of devils. Whether you eat or drink, or whatsoever you do, do all to the glory of God.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Corinthians 10 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-exodus-13-17',
      kind: 'study',
      source: 'Sefaria',
      label: 'Exodus 13–17: The Wilderness Journey',
      url: 'https://www.sefaria.org/Exodus.13-17',
      description: 'The foundational narrative of Israel&apos;s exodus and desert wanderings — the cloud, the sea, the manna, and the rock that Paul references as types of Christ.',
    },
    {
      id: 'sefaria-numbers-20',
      kind: 'study',
      source: 'Sefaria',
      label: 'Numbers 20: The Rock at Horeb',
      url: 'https://www.sefaria.org/Numbers.20',
      description: 'Moses strikes the rock and water flows — the wilderness miracle that Paul identifies as Christ and that sustained Israel through the desert.',
    },
    {
      id: 'ascsa-corinth-macellum',
      kind: 'archaeology',
      source: 'ASCSA',
      label: 'Corinth: The Macellum (Meat Market)',
      url: 'https://agora.ascsa.net/',
      description: 'Excavation of the marketplace where Corinthian believers encountered meat sold in the shambles, the practical backdrop to Paul&apos;s teaching on conscience and community.',
    },
    {
      id: 'sefaria-psalm-24',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 24: The Earth Is the Lord&apos;s',
      url: 'https://www.sefaria.org/Psalms.24',
      description: 'The psalm Paul quotes at 1 Corinthians 10:26 — establishing that creation belongs to God, not to human appetite or proprietary claim.',
    },
  ],
};
