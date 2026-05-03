import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Galatians 4 — Abba, Father; Heir of God; Hagar and Sarah Allegory
 *
 * Paul weaves together two metaphors: the heir under guardians, and the
 * Hagar-Sarah narrative. Both point to the same truth: believers are freed
 * from slavery into sonship. When Christ came "in the fulness of time," He
 * redeemed those under the law. The Spirit cries "Abba, Father" in our hearts.
 * We are no longer servants but heirs. The old covenant (law, Hagar, bondage)
 * has been superseded by the new covenant (promise, Sarah, freedom).
 *
 * This chapter burns with intimacy: adoption, inheritance, crying out to God
 * as "Father." It also holds sharp warnings: against returning to slavery,
 * against dividing God's people by ethnicity or works.
 */
export const GALATIANS_4: RichChapterContent = {
  bookSlug: 'galatians',
  bookName: 'Galatians',
  chapter: 4,

  estimatedMinutes: { beginner: 7, intermediate: 13, deep: 19 },
  intros: [
    'Galatians 4 opens with a metaphor that Paul&apos;s listeners would recognize instantly. A child born to wealth is no different from a servant while still young. Both eat from the same table, wear the same clothes, answer to the same managers. But when maturity comes — when the appointed time arrives — the heir steps into freedom and inheritance. Everything changes. Paul is saying: believers are heirs. And the time of maturity has come. You are no longer slaves.',
    'The second half of the chapter turns to the Hagar[res:sefaria-genesis-hagar-sarah]-Sarah story from Genesis. Two women, two sons, two covenants. Hagar represents the old covenant, born of human effort and the flesh, that produces bondage. Sarah represents the new covenant, born of promise and grace, that produces freedom. Believers are Abraham&apos;s seed, children of Sarah&apos;s line — not through works, but through faith in Christ. You belong to the promise, not to the law. You are the children of the free woman.',
  ],

  sections: [
    /* ─── Galatians 4:1–3 — The Heir as a Child ──────────────────────────── */
    {
      ref: 'Galatians 4:1–3',
      title: 'The Heir Under Guardians',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              1,
              t('Now I say, '),
              hp('That the heir, as long as he is a child, differeth nothing from a servant', 'heir-servant'),
              t(', though he be lord of all;')
            ),
            verse(
              2,
              t('But is under '),
              hg('tutors and governors', 'c-tutors'),
              t(' until the time appointed of the father.')
            ),
            verse(
              3,
              t('Even so we, when we were '),
              hy('children', 'gal-greek-nepios'),
              t(', were in bondage under the '),
              hg('elements of the world', 'c-stoicheia'),
              t(':')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'heir-servant',
          html:
            'An heir and a servant look identical in status when the heir is still a child. The servant obeys because he is owned; the heir obeys because he is under guardians appointed by his father until he matures. The difference is not yet visible. But it is real. The future changes everything.',
        },
        {
          kind: 'commentary',
          id: 'c-tutors',
          html:
            'In Paul&apos;s world, a <em>pedagogue</em> (tutor) was not a teacher in the modern sense—he was a slave who escorted and disciplined the child, keeping him in line until maturity. The law played this role: it guarded, it restrained, it pointed toward the heir&apos;s coming freedom. But it was never meant to be permanent.',
        },
        {
          kind: 'greek',
          id: 'gal-greek-nepios',
          title: 'Nepios — &ldquo;Child&rdquo;',
          script: 'νήπιος',
          translit: '<strong>Nepios</strong> · a young child, an infant, one not yet mature',
          description:
            'The word means not just young but immature, dependent on guardians. Believers under the law were nepios — children in a household full of rules and restrictions, not yet inheriting their promised freedom.',
        },
        {
          kind: 'commentary',
          id: 'c-stoicheia',
          html:
            'The &ldquo;elements of the world&rdquo; (Greek: <em>stoicheia tou kosmou</em>) likely refers to the basic rules and principles of the law—circumcision, dietary laws, festival observances, the Ten Commandments themselves. Not evil, but elementary. The law was a necessary structure for children; it is not sufficient for heirs.',
        },
        {
          kind: 'carry',
          html:
            'You may be living under rules and restrictions right now—a schedule that feels like slavery, expectations that weigh on you, principles you follow out of fear rather than love. But Paul is telling you: that is not your final status. Maturity is coming. Freedom is your inheritance. The guardianship is temporary. Do not mistake the structure for the destination.',
        },
        {
          kind: 'reflection',
          id: 'heir-child',
          prompt: 'Where in your life are you still living like a child under guardians—following rules out of obligation rather than understanding? What would it feel like to step into the maturity God has already appointed for you?',
        },
      ],
    },

    /* ─── Galatians 4:4–7 — The Fulness of Time; Adopted as Sons ────────── */
    {
      ref: 'Galatians 4:4–7',
      title: 'When the Fulness of Time Was Come',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              4,
              t('But when the '),
              hy('fulness of the time', 'greek-pleroma'),
              t(' was come, God sent forth '),
              hp('his Son, made of a woman, made under the law', 'christ-incarnate'),
              t(',')
            ),
            verse(
              5,
              t('To '),
              hg('redeem them that were under the law', 'c-redeem-law'),
              t(', that '),
              hp('we might receive the adoption[res:bibleodyssey-adoption] of sons', 'greek-huiothesia'),
              t('.')
            ),
            verse(
              6,
              t('And because ye are sons, God hath sent forth '),
              hp('the Spirit of his Son into your hearts, crying, Abba[res:perseus-abba-aramaic], Father', 'greek-abba'),
              t(':')
            ),
            verse(
              7,
              t('Wherefore thou art no more a servant, but a son; and if a son, then an '),
              hy('heir of God through Christ', 'heir-god'),
              t('.')
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'greek-pleroma',
          title: 'Plērōma — &ldquo;Fulness of Time&rdquo;',
          script: 'πλήρωμα',
          translit: '<strong>Plērōma</strong> · fulness, fullness, completion; the measure or content of something',
          description:
            'The moment was appointed from the foundation of the world. God did not guess when Christ should come; He sent Him precisely when all preparations were complete, when the hour struck. This is the turning point of history.',
        },
        {
          kind: 'christ',
          id: 'christ-incarnate',
          title: 'Christ Connection — God Sent Forth His Son',
          html:
            'God did not send an angel. He sent His Son—the same Word who spoke creation into being, now <em>made of a woman, made under the law</em>. Christ took on flesh, assumed the human condition, placed Himself under the very law He gave at Sinai. He became what we are so that we might become what He is. &ldquo;For ye know the grace of our Lord Jesus Christ, that, though he was rich, yet for your sakes he became poor, that ye through his poverty might be rich&rdquo; (2 Corinthians 8:9).',
        },
        {
          kind: 'commentary',
          id: 'c-redeem-law',
          html:
            'Christ came to &ldquo;redeem&rdquo; (Greek: <em>exagorazō</em>, literally &ldquo;to buy out from&rdquo;) those under the law. The law carried a curse: &ldquo;Cursed is every one that continueth not in all things which are written in the book of the law to do them&rdquo; (Galatians 3:10). Christ, by becoming our substitute under that curse, purchased our freedom. He satisfied the demands of the law so that we would not have to.',
        },
        {
          kind: 'greek',
          id: 'greek-huiothesia',
          title: 'Huiothesia — &ldquo;Adoption of Sons&rdquo;',
          script: 'υἱοθεσία',
          translit: '<strong>Huiothesia</strong> · adoption, placing as a son, legal status as a child',
          description:
            'Adoption conferred full legal rights. An adopted child inherited, was called by the family name, belonged completely. Believers are adopted into God&apos;s family—not by birth, not by law, but by grace. You have every right of a born child of God.',
        },
        {
          kind: 'greek',
          id: 'greek-abba',
          title: 'Abba — &ldquo;Father&rdquo; (Aramaic Intimacy)',
          script: 'ἀββά',
          translit: '<strong>Abba</strong> · father (Aramaic), a child&apos;s word for father, intimate and familial',
          description:
            'Abba was not the formal "father" but the word a child spoke at home. Jewish teachers did not call God Abba; it was too intimate, too familiar. But Christ called God Abba (Mark 14:36). And now the Spirit gives believers the same cry. You do not pray to a distant judge; you cry out to your Father.',
        },
        {
          kind: 'christ',
          id: 'greek-abba',
          title: 'Christ Connection — "Abba" Echoes Gethsemane',
          html:
            'Mark 14:36: Jesus prayed in the garden, &ldquo;Abba, Father, all things are possible unto thee; take away this cup from me: nevertheless not what I will, but what thou wilt.&rdquo; Jesus cried Abba to His Father in His darkest hour. Now the Spirit gives you the same cry. You are not alone. You have the same access to God&apos;s presence that Christ Himself enjoyed. In your Gethsemane, you too can cry Abba.',
        },
        {
          kind: 'commentary',
          id: 'heir-god',
          html:
            'An heir does not serve the household; he owns it. A servant exists for the master&apos;s purposes; an heir shares in the master&apos;s wealth and future. You are no longer God&apos;s servant waiting for orders. You are God&apos;s heir, sharing in His inheritance. That inheritance is Christ, and all things in Him.',
        },
        {
          kind: 'carry',
          html:
            'Cry Abba, Father. Not as a slave fearing punishment, not as a servant earning wages, but as a beloved child. Your adoption is sealed by the Spirit. Your inheritance is secure. You belong to God completely, and He belongs to you. This is the freedom you have been redeemed into.',
        },
        {
          kind: 'reflection',
          id: 'abba-father',
          prompt: 'What keeps you from crying "Abba, Father" with full confidence and affection? Is there a part of your heart that still views God as a distant judge rather than a loving father?',
        },
      ],
    },

    /* ─── Galatians 4:8–11 — Ye Observe Days, Months, Times, Years ────────── */
    {
      ref: 'Galatians 4:8–11',
      title: 'Return to Slavery',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              8,
              t('Howbeit then, when ye knew not God, ye did service unto them which by nature are no gods.')
            ),
            verse(
              9,
              t('But now, after that '),
              hp('ye have known God', 'c-known'),
              t(', or rather are known of God, how turn ye again to the weak and beggarly elements, whereunto ye desire again to be in bondage?')
            ),
            verse(
              10,
              t('Ye '),
              hg('observe days, and months, and times, and years', 'c-days-months'),
              t('.')
            ),
            verse(
              11,
              t('I am afraid of you, lest I have bestowed upon you labour in vain.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-known',
          html:
            'To be "known of God" is to be loved, chosen, called. It is not primarily intellectual knowledge but covenant relationship—to be known as God knows. Yet the Galatians were turning back to slavery. They had tasted freedom and were choosing bondage again.',
        },
        {
          kind: 'commentary',
          id: 'c-days-months',
          html:
            'The Galatians were observing Jewish festivals, following dietary laws, keeping Sabbaths. These practices themselves are not evil—they are part of God&apos;s law—but they have been recontextualized by the new covenant. You do not keep them to earn God&apos;s favor or maintain your status as one of God&apos;s people. You are already in. The law&apos;s guardian role is finished.',
        },
        {
          kind: 'carry',
          html:
            'Where are you returning to slavery? What rules, traditions, or performance metrics are you using to earn approval that was already freely given to you in Christ? You have been redeemed. Do not rebuild the cage you have been released from. Freedom is not careless, but it is not earned.',
        },
        {
          kind: 'reflection',
          id: 'return-bondage',
          prompt: 'Are you tempted to return to bondage—trying to earn God&apos;s love through works or observances? What would it look like to truly live as a free child rather than a working slave?',
        },
      ],
    },

    /* ─── Galatians 4:12–20 — Travail in Birth Until Christ Be Formed ────── */
    {
      ref: 'Galatians 4:12–20',
      title: 'My Little Children; Christ Formed in You',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              12,
              t('Brethren, I beseech you, be as I am; for I am as ye are: ye have not injured me at all.')
            ),
            verse(
              13,
              t('Ye know how through '),
              hg('infirmity of the flesh I preached the gospel unto you at the first', 'c-infirmity-flesh'),
              t(';')
            ),
            verse(
              14,
              t('And '),
              hy('my temptation which was in my flesh ye despised not', 'c-temptation-flesh'),
              t(', nor rejected; but received me as an angel of God, even as Christ Jesus.')
            ),
            verse(
              15,
              t('Where is then the blessedness ye spake of? for I bear you record, that, if it had been possible, ye '),
              hp('would have plucked out your own eyes, and have given them to me', 'c-eyes-paul'),
              t('.')
            ),
            verse(
              16,
              t('Am I therefore become your enemy, because I tell you the truth?')
            ),
            verse(
              17,
              t('They zealously affect you, but not well; yea, they would exclude you, that ye might affect them.')
            ),
            verse(
              18,
              t('But it is good to be zealously affected always in a good thing, and not only when I am present with you.')
            ),
            verse(
              19,
              t('My '),
              hy('little children, of whom I travail in birth again until Christ be formed in you', 'greek-odinao'),
              t(',')
            ),
            verse(
              20,
              t('I desire to be present with you now, and to change my voice; for I stand in doubt of you.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-infirmity-flesh',
          html:
            'Paul refers to an illness or physical weakness that caused him to stop in Galatia and preach the gospel. We do not know what this infirmity was—some scholars suggest eye disease, migraines, malaria. But Paul is clear: his weakness was the occasion for God&apos;s strength. The Galatians did not despise him for it. They received him as if he were an angel.',
        },
        {
          kind: 'commentary',
          id: 'c-temptation-flesh',
          html:
            'His physical suffering could have been a "test" to their faith—a reason to reject him. But they did not. The phrase &ldquo;my temptation which was in my flesh&rdquo; likely means the trial of accepting someone who appeared weak and sick as a messenger of God. They passed that test.',
        },
        {
          kind: 'commentary',
          id: 'c-eyes-paul',
          html:
            'The reference to eyes suggests Paul may have had an eye ailment (possibly the "thorn in the flesh" of 2 Corinthians 12:7). The Galatians had loved him so completely they would have given him their own eyes. But now, as they turn to false teachers, Paul becomes their enemy—not because he attacks them, but because he tells them the truth that contradicts what they want to hear.',
        },
        {
          kind: 'greek',
          id: 'greek-odinao',
          title: 'Ōdinō — &ldquo;Travail in Birth&rdquo;',
          script: 'ὠδίνω',
          translit: '<strong>Ōdinō</strong> · to be in labor, to suffer birth pangs; to be in anguish',
          description:
            'Paul uses the metaphor of a woman in labor. The Galatians are his spiritual children. He travails, experiences birth pangs, until Christ is fully formed in them. The image is one of intense, intimate, sacrificial love—the kind of pain a mother endures for her child&apos;s life.',
        },
        {
          kind: 'christ',
          id: 'greek-odinao',
          title: 'Christ Connection — "Christ Be Formed in You"',
          html:
            '2 Corinthians 3:18: &ldquo;But we all, with open face beholding as in a glass the glory of the Lord, are changed into the same image from glory to glory, even as by the Spirit of the Lord.&rdquo; Christ is not just your savior; He is being formed inside you, reshaping you from the inside out. This is not a one-time event but a lifelong birth labor, and the Spirit Himself is the midwife.',
        },
        {
          kind: 'carry',
          html:
            'Someone loves you enough to travail, to suffer, to risk being called your enemy because they tell you the truth. And more: Christ is being formed in you. You are not a finished work. Every day, the Spirit is midwifing Christ&apos;s growth in your heart. That labor is tender, even when it is painful. Trust it.',
        },
        {
          kind: 'reflection',
          id: 'christ-formed',
          prompt: 'Where is Christ being formed in you? What habits, patterns, or old selves are being replaced by His character? What would it look like to cooperate more fully with that birth labor?',
        },
      ],
    },

    /* ─── Galatians 4:21–27 — The Allegory of Hagar and Sarah ────────────── */
    {
      ref: 'Galatians 4:21–27',
      title: 'The Allegory: Two Covenants, Two Women',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              21,
              t('Tell me, ye that desire to be under the law, do ye not hear the law?')
            ),
            verse(
              22,
              t('For it is written, that Abraham had two sons, the one by a '),
              hg('bondmaid', 'c-bondmaid'),
              t(', the other by a '),
              hy('free woman', 'c-freewoman'),
              t('.')
            ),
            verse(
              23,
              t('But he who was of the bondmaid was born after the flesh; but he of the free woman was by promise.')
            ),
            verse(
              24,
              t('Which things are an '),
              hy('allegory', 'greek-allegoreo'),
              t(': for these are the two covenants; the one from the mount Sinai, which gendereth to bondage, which is Agar;')
            ),
            verse(
              25,
              t('For this Agar is mount Sinai in Arabia, and answereth to '),
              hp('Jerusalem which now is', 'c-jerusalem-now'),
              t(', and is in bondage with her children.')
            ),
            verse(
              26,
              t('But '),
              hp('Jerusalem which is above is free', 'c-jerusalem-above'),
              t(', which is the mother of us all.')
            ),
            verse(
              27,
              t('For it is written, Rejoice, thou barren that bearest not; break forth and cry, thou that travailest not: for the desolate hath many more children than she which hath an husband.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-bondmaid',
          html:
            'Hagar is the slave woman who bore Ishmael. She was not Abraham&apos;s wife by covenant but a servant given to him by Sarai to fulfill the promise through human effort. She represents those who live by works and the flesh.',
        },
        {
          kind: 'commentary',
          id: 'c-freewoman',
          html:
            'Sarah is Abraham&apos;s wife, the one to whom God made the covenant promise. She was barren until God&apos;s appointed time, then bore Isaac by promise alone. She represents those who live by faith and grace.',
        },
        {
          kind: 'greek',
          id: 'greek-allegoreo',
          title: 'Allegorēo — &ldquo;Allegory&rdquo;; Allegorical Reading',
          script: 'ἀλληγορέω',
          translit: '<strong>Allegorēo</strong> · to speak allegorically; to interpret or understand figuratively',
          description:
            'Paul reads the Hagar-Sarah narrative not as literal history (which it is) but as theological pattern. Genesis 16 and 21 tell what happened; Galatians 4 reveals what those events mean: a clash between flesh and promise, law and grace, bondage and freedom. The narrative carries a weight beyond its surface.',
        },
        {
          kind: 'commentary',
          id: 'c-jerusalem-now',
          html:
            'The Jerusalem "which now is"—the earthly Jerusalem—is in bondage with her children. The Galatians who were turning back to the law were aligning themselves with that earthly, slave-bearing city. They were choosing the Hagar line.',
        },
        {
          kind: 'commentary',
          id: 'c-jerusalem-above',
          html:
            'But there is a Jerusalem "above," the Jerusalem of promise, the mother of believers everywhere. This is the city Abraham and Sarah dreamed of—the heavenly city whose architect and maker is God (Hebrews 11:10). That city is free. And she is your mother.',
        },
        {
          kind: 'christ',
          id: 'c-jerusalem-above',
          title: 'Christ Connection — "Jerusalem Above"',
          html:
            'Revelation 21:2–3: &ldquo;And I John saw the holy city, new Jerusalem, coming down from God out of heaven… And I heard a great voice out of heaven saying, Behold, the tabernacle of God is with men, and he will dwell with them, and they shall be his people, and God himself shall be with them, and be their God.&rdquo; Christ is the One who makes the heavenly city possible. He is the Lamb in the midst of the throne, and His presence makes it home.',
        },
        {
          kind: 'carry',
          html:
            'You are a child of the Jerusalem above. You belong to the covenant of promise, not the covenant of fear. You are not Ishmael, born of effort and the flesh. You are Isaac, born when it was impossible, and your birth was God&apos;s idea from the start. Carry that identity into your day.',
        },
        {
          kind: 'reflection',
          id: 'hagar-sarah',
          prompt: 'Do you see yourself in Sarah&apos;s line or still trying to be born of flesh like Ishmael? Where are you trying to earn what God has already promised you?',
        },
      ],
    },

    /* ─── Galatians 4:28–31 — Cast Out the Bondwoman ────────────────────── */
    {
      ref: 'Galatians 4:28–31',
      title: 'Children of the Promise; Cast Out the Bondwoman',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              28,
              t('Now we, brethren, as '),
              hy('Isaac was, are the children of promise', 'c-isaac-promise'),
              t('.')
            ),
            verse(
              29,
              t('But as then '),
              hg('he that was born after the flesh persecuted him that was born after the Spirit', 'c-persecution'),
              t(', even so it is now.')
            ),
            verse(
              30,
              t('Nevertheless what saith the scripture? '),
              hp('Cast out the bondwoman and her son', 'c-cast-out'),
              t(': for the son of the bondwoman shall not be heir with the son of the freewoman.')
            ),
            verse(
              31,
              t('So then, brethren, '),
              hy('we are not children of the bondwoman, but of the free', 'c-free-woman-children'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-isaac-promise',
          html:
            'Isaac was born when Sarah was 90 and Abraham 100. Biologically, it was impossible. But God had promised. When God speaks a word, it stands even when nature says no. You are Isaac. Your salvation, your identity, your inheritance rest on promise alone, not on anything you have done or can do.',
        },
        {
          kind: 'commentary',
          id: 'c-persecution',
          html:
            'Genesis 21:9 records that Ishmael "mocked" Isaac. The word suggests ridicule, contempt. Those who live by flesh and law often mock those who live by faith. The false teachers in Galatia were doing the same—pressuring believers to keep the law, implying that faith alone was insufficient. This is the same old persecution: Ishmael mocking Isaac.',
        },
        {
          kind: 'greek',
          id: 'greek-ekkleio',
          title: 'Ekkleio (implied) — "Cast Out"; Separation',
          script: 'ἐκκλείω',
          translit: '<strong>Ekkleio</strong> · to shut out, to expel, to cast out',
          description:
            'Two lines cannot both inherit the same promise. The flesh-born line (the law) and the promise-born line (the gospel) are incompatible. Paul is not being cruel; he is being clear about what the text itself says. One produces bondage; the other produces freedom. They cannot live together.',
        },
        {
          kind: 'commentary',
          id: 'c-cast-out',
          html:
            'Paul quotes Genesis 21:10: "Cast out this bondmaid and her son: for the son of this bondmaid shall not be heir with my son, even with Isaac." Sarah demands it; Abraham is grieved but obeys. This is difficult. But the text is clear: you cannot inherit through both flesh and promise. You cannot serve both law and grace. The voice of Paul is firm here, echoing Scripture: choose one or choose the other. You cannot have both.',
        },
        {
          kind: 'commentary',
          id: 'c-free-woman-children',
          html:
            'This is your identity. Not Ishmael&apos;s, but Isaac&apos;s. Not born of slave Hagar&apos;s desperation, but of freeborn Sarah&apos;s promise. Everything in your Christian life flows from this: you are free, you are the heir, you belong to the covenant of grace.',
        },
        {
          kind: 'carry',
          html:
            'Your inheritance is secure because it rests on God&apos;s promise, not on your performance. Do not let anyone shame you back into slavery. Do not doubt your status because you are not trying hard enough. You are the child of the free woman. That cannot be taken from you. Live from that identity, not toward it. It is already yours.',
        },
        {
          kind: 'reflection',
          id: 'cast-out',
          prompt: 'What voices in your life are trying to pull you back toward slavery—back toward earning your worth? How will you silence them and affirm your identity as a child of the promise?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'And because ye are sons, God hath sent forth the Spirit of his Son into your hearts, crying, Abba, Father: Wherefore thou art no more a servant, but a son; and if a son, then an heir of God through Christ.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Galatians 4 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-genesis-hagar-sarah',
      kind: 'archive',
      source: 'Sefaria',
      label: 'Genesis 16 & 21—Hagar and Sarah Allegory Source',
      url: 'https://www.sefaria.org/Genesis.16',
      description: 'OT narratives of the bondmaid and the freewoman that Paul reads allegorically in Galatians 4:21–31 as types of the two covenants.',
    },
    {
      id: 'bibleodyssey-adoption',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Huiothesia—Adoption into God&apos;s Family',
      url: 'https://www.bibleodyssey.org/dictionary/adoption/',
      description: 'SBL entry on the legal and theological meaning of adoption in the Greco-Roman world and its significance for Galatians 4:5.',
    },
    {
      id: 'perseus-abba-aramaic',
      kind: 'lexicon',
      source: 'Perseus Scaife Digital Library',
      label: 'Abba—Aramaic Intimate Address to God',
      url: 'https://scaife.perseus.org/',
      description: 'Lexical and cultural analysis of the Aramaic term abba and its revolutionary intimacy in Jewish prayer; echoes Jesus in Gethsemane (Mark 14:36).',
    },
  ],

  hasHebrew: false,
};
