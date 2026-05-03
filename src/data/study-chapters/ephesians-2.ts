import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Ephesians 2 — Dead Made Alive; Grace, Not Works; One New Body in Christ
 *
 * "By grace are ye saved through faith; and that not of yourselves: it is
 * the gift of God: not of works, lest any man should boast." This chapter
 * contains Scripture's most liberating words about salvation—and also its
 * most practical teaching on reconciliation. Paul begins with the human
 * condition before Christ (dead in trespasses, children of wrath), pivots
 * to God's mercy (quickened together with Christ, seated in heavenly places),
 * reveals the heart of the gospel (saved by grace through faith, not of works),
 * and then widens the lens: Christ did not merely save individuals. He broke
 * down the wall between Jew and Gentile and built one new humanity together.
 * The cross is personal salvation AND cosmic peace.
 */
export const EPHESIANS_2: RichChapterContent = {
  bookSlug: 'ephesians',
  bookName: 'Ephesians',
  chapter: 2,

  estimatedMinutes: { 5: 8, 10: 18, 15: 25 },
  intros: [
    'Ephesians 2 opens with a stark diagnosis: "You hath he quickened, who were dead in trespasses and sins." This is not a charge to shame you but to show you what grace means. You cannot understand grace until you understand what you were before grace—dead, captive to the patterns of a fallen world, by nature children of wrath. But that is not Paul&apos;s final word.',
    'The real pivot comes at verse 4: "But God, who is rich in mercy." While you were dead, God acted. He made you alive together with Christ, raised you up, and seated you in the heavenly places. And having done that cosmic work in you, He then did something even larger: He broke down the wall that had stood for centuries between Jew and Gentile, making "both one new man." The gospel is not just about individual souls. It is about the reconciliation of all things in Christ.',
  ],

  opener: {
    matchTitle: /resurrection|quickened|heavenly/i,
    caption: 'Dead Made Alive · Ephesians 2',
  },

  bottomShare: {
    label: 'Share Ephesians 2',
    quote:
      'By grace are ye saved through faith; and that not of yourselves: it is the gift of God: not of works. God has made one new humanity in Christ, breaking down every wall that divided us and seating us together in heavenly places.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ephesians 2 · Study Guide',
  },

  sections: [
    /* ─── Ephesians 2:1–3 — Dead in Trespasses and Sins ──────────────────── */
    {
      ref: 'Ephesians 2:1–3',
      title: 'Dead in Trespasses and Sins',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 1,
              spans: [
                t('And you hath he '),
                hp('quickened', 'e2-dead'),
                t(', who were '),
                hg('dead in trespasses and sins', 'e2-dead'),
                t(';'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Wherein in time past ye '),
                hy('walked', 'e2-walked'),
                t(' according to the course of this world, according to the '),
                hy('prince of the power of the air', 'e2-prince'),
                t(', the spirit that now worketh in the children of disobedience:'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Among whom also we all had our conversation in times past in the lusts of our flesh, '),
                hg('fulfilling the desires of the flesh and of the mind', 'e2-desires'),
                t('; and were by nature the '),
                hp('children of wrath', 'e2-wrath'),
                t(' even as others:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'e2-dead',
          html:
            'Paul describes the human condition before Christ as "dead in trespasses and sins." This is the spiritual reality—not merely weakened or wounded, but dead. Dead to God, separated, severed from life itself. Sin is not a minor failure; it is a death sentence. And this condition extends to all people—Jew and Gentile alike, before the gospel reached them.',
        },
        {
          kind: 'commentary',
          id: 'e2-walked',
          html:
            '"In time past ye walked according to the course of this world." The metaphor is movement, habit, a way of living. This walk was not chosen in isolation—it followed the current of the age, the patterns that shape how we speak, spend, and think when we are away from God. That walk is the outworking of spiritual death.',
        },
        {
          kind: 'commentary',
          id: 'e2-prince',
          html:
            '"The prince of the power of the air"—an unsettling phrase for the Devil himself. He is not depicted as supreme, but as a power operating in the domain of this world. His influence shows itself in the "spirit that now worketh in the children of disobedience." This is Paul&apos;s way of saying: your sinful actions are not incidental. They are part of a larger rebellion against God, shaped by a malevolent intelligence.',
        },
        {
          kind: 'commentary',
          id: 'e2-desires',
          html:
            '"Fulfilling the desires of the flesh and of the mind." Not just bodily appetite (flesh) but also the mental desires—pride, ambition, the cravings of an ego unchecked by God. Paul includes both because both can be forms of rebellion against God&apos;s lordship.',
        },
        {
          kind: 'greek',
          id: 'e2-nekros',
          title: 'Nekros — "Dead"',
          script: 'νεκρός',
          translit: '<strong>nekros</strong> · dead; without life; cut off',
          description:
            'The Greek word for physical death is the same word Paul uses for spiritual death. To be "dead in trespasses" is to be cut off from life itself—from communion with God. This is not a metaphor for being weak or struggling. It is the diagnosis of total separation.',
        },
        {
          kind: 'commentary',
          id: 'e2-wrath',
          html:
            '"By nature the children of wrath." Paul does not say humans are wrath-worthy only after deliberate sin. He says it is a matter of nature—the default state inherited by all. This is not a charge to despair but a statement of fact that makes grace necessary. You do not earn wrath; you are born into a condition that stands under God&apos;s just judgment.',
        },
        {
          kind: 'christ',
          id: 'e2-christ-resurrection',
          title: 'Christ Connection — Made Alive with Him',
          html:
            'Even in this dark opening, Paul has already used a word that points to the gospel: "quickened." This verb does not appear alone. It appears always with Christ. You are quickened "with Christ." Jesus rose from the dead; believers rise with Him. The diagnosis of death is real, but it is not final. The Gospel is that death is reversible—if you are united to the One who conquered it.',
        },
        {
          kind: 'carry',
          html:
            'Before grace, you were dead. Not weak. Not struggling against the odds. Dead. The Prince of the power of the air held sway. Your desires—of flesh and mind—shaped a life away from God. This is where you came from. And knowing this—really knowing it—is where grace begins to mean something. You did not pull yourself out. You could not. You were dead.',
        },
        {
          kind: 'reflection',
          id: 'e2-death-reflect',
          prompt:
            'Paul says you were "dead in trespasses and sins," captive to the course of this world. Before Christ, what would your life have looked like if you had never known Him? Sit with that reality for a moment.',
        },
      ],
    },

    /* ─── Ephesians 2:4–7 — But God; Quickened and Raised and Seated ────────── */
    {
      ref: 'Ephesians 2:4–7',
      title: 'But God, Who Is Rich in Mercy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 4,
              spans: [
                t('But '),
                hp('God', 'e2-but-god'),
                t(', who is rich in '),
                hy('mercy', 'e2-mercy'),
                t(', for his great love wherewith he loved us,'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Even when we were '),
                hg('dead in sins', 'e2-dead-sins'),
                t(', hath '),
                hp('quickened us together with Christ', 'e2-quickened-together'),
                t(', ('),
                hp('by grace ye are saved', 'e2-by-grace'),
                t(';)'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And hath '),
                hp('raised us up together', 'e2-raised'),
                t(', and made us sit together in '),
                hp('heavenly places in Christ Jesus', 'e2-heavenly'),
                t(':'),
              ],
            },
            {
              number: 7,
              spans: [
                t('That in the ages to come he might shew the '),
                hy('exceeding riches of his grace', 'e2-riches'),
                t(' in his kindness toward us through Christ Jesus.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'e2-but-god',
          html:
            'Two words turn the entire passage. "But God." In Greek, this is <em>alla ho theos</em>—a strong adversative. While you were dead, God acted. While you were captive to sin and the will of the air-prince, God did not wait for you to get your act together. God moved. Everything that follows flows from this turning point.',
        },
        {
          kind: 'commentary',
          id: 'e2-mercy',
          html:
            'God is described as "rich in mercy." Not stingy mercy, doled out sparingly. Not mercy that waits for repentance first. A richness of mercy—an abundance, a lavishness. And this mercy is driven by love. "For his great love wherewith he loved us." The love comes first. The mercy flows from it. God does not have to be persuaded to love you. He is already rich in it.',
        },
        {
          kind: 'greek',
          id: 'e2-suzoopoieo',
          title: 'Suzōopoieō — "Made Alive Together"',
          script: 'συζωοποιέω',
          translit: '<strong>suzōopoieō</strong> · to quicken, make alive together; to give life in union',
          description:
            'Paul uses a compound verb that carries union within it. <em>Su-</em> means together with; <em>zōopoieō</em> means to make alive. You are not made alive separately from Christ. You are made alive <em>with</em> Him, in Him, together with Him. This is not merely forensic (guilt erased). It is union (life shared).',
        },
        {
          kind: 'commentary',
          id: 'e2-dead-sins',
          html:
            'Paul repeats: "Even when we were dead in sins." No waiting period. No preliminary reform. You did not wake up part-way and meet God halfway. You were dead. And in that state—dead, without any power to resurrect yourself—God quickened you.',
        },
        {
          kind: 'commentary',
          id: 'e2-quickened-together',
          html:
            '"Hath quickened us together with Christ." This is not just about individual souls receiving life. It is about participation in Christ&apos;s own resurrection. His rising is your rising. His life becomes your life. Theologians call this "union with Christ"—you are incorporated into Him, made alive as part of His resurrection.',
        },
        {
          kind: 'commentary',
          id: 'e2-by-grace',
          html:
            'A parenthetical pause: "(by grace ye are saved;)" Paul cannot go further without clarifying: this quickening is grace. Pure gift. Unearned. This is salvation—not a future event alone, but a present reality already at work.',
        },
        {
          kind: 'commentary',
          id: 'e2-raised',
          html:
            '"Hath raised us up together." Not only quickened—made alive. But raised up. The metaphor is resurrection itself. Jesus rose from the dead; the believer, united to Him, rises with Him. This too is already true. You are not waiting to be raised; you have been raised.',
        },
        {
          kind: 'commentary',
          id: 'e2-heavenly',
          html:
            '"Made us sit together in heavenly places in Christ Jesus." Seated. At rest. In heavenly places—not a future promise alone, but a present position. Your body is still on earth, but your identity, your reality in Christ, is already seated at the right hand of God. This is Paul&apos;s answer to despair: you are not where you used to be.',
        },
        {
          kind: 'greek',
          id: 'e2-epouraniois',
          title: 'Epouraniois — "In Heavenly Places"',
          script: 'ἐπουράνιος',
          translit: '<strong>epouraniois</strong> · in the heavens; in the realm of the exalted; in the places above',
          description:
            'A spatial term that signals where the real action is. You are seated not in a basement or a waiting room but in the heavenly places—the realm where Christ reigns, where God dwells. This is your real address, even while you walk on earth.',
        },
        {
          kind: 'commentary',
          id: 'e2-riches',
          html:
            '"That in the ages to come he might shew the exceeding riches of his grace." Paul ends this section with a stunning purpose: God made you alive and raised you and seated you so that He could display His grace to the cosmos itself. In future ages, the angels will see what God did for you—for us—and marvel at the lavishness of grace. Your salvation is cosmic news.',
        },
        {
          kind: 'christ',
          id: 'e2-christ-exaltation',
          title: 'Christ Connection — Exalted in Him',
          html:
            'Every verb Paul uses here is already true of Jesus: quickened (He rose), raised (He ascended), seated in heavenly places (He reigns at the right hand of God). And you are drawn into those verbs because you are in Him. His resurrection is your resurrection. His exaltation is your exaltation. This is not mysticism. This is union—the deepest claim of the gospel.',
        },
        {
          kind: 'carry',
          html:
            'You were dead. That is past tense now. God, rich in mercy, has made you alive together with Christ. You have been raised. You are seated in heavenly places. Not someday. Now. Your emotions may deny it. Circumstances may tempt you to believe otherwise. But this is true. When you feel like a failure, remember: you are seated in heavenly places. When the world tells you that you are worthless, remember: God displays the exceeding riches of His grace in you. What would change if you lived like this were true?',
        },
        {
          kind: 'reflection',
          id: 'e2-seated-reflect',
          prompt:
            'Paul says you are "seated together in heavenly places in Christ Jesus"—not waiting to be saved, but already raised and positioned in Christ&apos;s exaltation. How does this truth challenge the way you see yourself?',
        },
        {
          kind: 'artwork',
          matchTitle: /resurrection|ascension|exalt/i,
          caption: 'Ephesians 2:4–7 · Raised and Seated',
        },
      ],
    },

    /* ─── Ephesians 2:8–10 — By Grace Through Faith; His Workmanship ────────── */
    {
      ref: 'Ephesians 2:8–10',
      title: 'By Grace Are Ye Saved Through Faith',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 8,
              spans: [
                t('For '),
                hp('by grace are ye saved', 'e2-grace-saved'),
                t(' through '),
                hy('faith', 'e2-faith'),
                t('; and that not of yourselves: it is the gift of God:'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Not of works, '),
                hp('lest any man should boast', 'e2-boast'),
                t(':'),
              ],
            },
            {
              number: 10,
              spans: [
                t('For we are his '),
                hg('workmanship, created in Christ Jesus unto good works', 'e2-workmanship'),
                t(', which God hath before ordained that we should walk in them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'e2-grace-saved',
          html:
            'These words have defined the Reformation and echo through centuries of Christian theology. "By grace are ye saved." Not by your effort. Not by your goodness. Not by your achievement. Grace—unmerited favor, the free gift of God&apos;s love toward you. Salvation comes through grace.',
        },
        {
          kind: 'greek',
          id: 'e2-charis',
          title: 'Charis — "Grace"',
          script: 'χάρις',
          translit: '<strong>charis</strong> · grace; favor; gift; the unmerited kindness of God',
          description:
            'Charis is the most generous word in the New Testament. It does not mean mere niceness. It means the divine kindness that reaches down to the undeserving and gives what cannot be earned. Grace is not something you attract by being good. It is something God gives because God is good.',
        },
        {
          kind: 'commentary',
          id: 'e2-faith',
          html:
            '"Through faith." Faith is how you receive grace. Not faith as a work you perform (as if you could boast, "I believed really hard"). Faith as receptivity. Faith as the empty hand that opens to receive what is freely given. You do not earn grace; you trust the One giving it.',
        },
        {
          kind: 'commentary',
          id: 'e2-boast',
          html:
            '"Not of works, lest any man should boast." Paul cuts off every angle by which pride could slip in. If salvation were by works, you could brag. You could say, "I earned this. I deserve this. Look what I did." But if it is by grace, boasting is excluded. Grace humbles you because it reminds you that you cannot make yourself right with God. Only God can. And He has.',
        },
        {
          kind: 'commentary',
          id: 'e2-workmanship',
          html:
            '"For we are his workmanship, created in Christ Jesus unto good works." Here is the pivot that prevents grace from becoming license. Salvation is not an achievement. But you are God&apos;s workmanship—His craft, His creation. And the purpose of your creation is "good works, which God hath before ordained that we should walk in them." Your works do not earn salvation. But they flow out of it. You are called to live out what you have been made to be.',
        },
        {
          kind: 'greek',
          id: 'e2-poiema',
          title: 'Poiēma — "Workmanship"',
          script: 'ποίημα',
          translit: '<strong>poiēma</strong> · a work; something made; a crafted thing; a masterpiece',
          description:
            'Paul uses a word that suggests artistry. You are not mass-produced. You are not a mistake. You are God&apos;s <em>poiema</em>—His work of art, carefully crafted, formed with intention. This is true because you are created in Christ Jesus, incorporated into His own person.',
        },
        {
          kind: 'christ',
          id: 'e2-christ-grace',
          title: 'Christ Connection — Saved by Grace in Him',
          html:
            'Grace is not abstract. Grace is Jesus. Paul says you are saved "through faith" and "in Christ Jesus." Jesus embodies grace—He is God&apos;s unearned kindness made flesh. When you trust Him, you receive what He gives. Your salvation is not negotiated between you and a distant God. It is relationship to Jesus Himself.',
        },
        {
          kind: 'carry',
          html:
            'You cannot earn your way to God. Stop trying. This is not a call to passivity—you are created for good works. But it is a call to surrender the project of self-justification. You cannot save yourself. You cannot make yourself worthy. Grace says: You are loved as you are. Now, having received that love, walk in the good works God has prepared for you. Not to earn it. To live it out.',
        },
        {
          kind: 'reflection',
          id: 'e2-grace-reflect',
          prompt:
            'Paul says your salvation is not of works, "lest any man should boast." Where are you still trying to earn God&apos;s favor? What would it mean to truly receive salvation as a gift?',
        },
      ],
    },

    /* ─── Ephesians 2:11–13 — Once Far Off; Now Made Nigh by the Blood ────────── */
    {
      ref: 'Ephesians 2:11–13',
      title: 'Ye Who Were Afar Off Made Nigh',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 11,
              spans: [
                t('Wherefore remember, that ye being in time past '),
                hy('Gentiles in the flesh', 'e2-gentiles'),
                t(', who are called Uncircumcision by that which is called the Circumcision in the flesh made by hands;'),
              ],
            },
            {
              number: 12,
              spans: [
                t('That at that time ye were without Christ, '),
                hg('being aliens from the commonwealth of Israel, and strangers from the covenants of promise', 'e2-aliens'),
                t(', '),
                hg('having no hope, and without God in the world', 'e2-no-hope'),
                t(':'),
              ],
            },
            {
              number: 13,
              spans: [
                t('But now in Christ Jesus ye who sometimes were '),
                hp('far off are made nigh', 'e2-nigh'),
                t(' by the '),
                hy('blood of Christ', 'e2-blood'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'e2-gentiles',
          html:
            'Paul shifts now from the universal condition (all humans dead in sin) to a specific historical division: Gentile and Jew. The Gentiles, from the Jewish perspective of the first century, were outside the law, outside the covenant, outside the promise. The term "Uncircumcision" was used by Jews to denote Gentiles as ritually unclean, separated by law from the people of God.',
        },
        {
          kind: 'commentary',
          id: 'e2-aliens',
          html:
            '"Being aliens from the commonwealth of Israel, and strangers from the covenants of promise." Paul is precise about the historical fact: Gentiles were not part of Israel. They had no claim on the covenants—with Abraham, with Moses, with David. This is the deepest alienation: not just cultural or ethnic, but spiritual and covenantal.',
        },
        {
          kind: 'commentary',
          id: 'e2-no-hope',
          html:
            '"Having no hope, and without God in the world." This is not pity. This is Paul stating plainly what it meant to be a Gentile outside of Christ. No hope because no covenant. Without God because separated from the God who had made Himself known to Israel. The Gentile world had many gods, many philosophies, but not the God of Abraham, Isaac, and Jacob.',
        },
        {
          kind: 'commentary',
          id: 'e2-nigh',
          html:
            '"But now in Christ Jesus ye who sometimes were far off are made nigh." The turning point—the moment the gospel reaches the Gentiles. What was impossible—a Gentile becoming part of God&apos;s people—becomes actual. Not through the law, not through circumcision, not through becoming Jewish. Through Christ.',
        },
        {
          kind: 'greek',
          id: 'e2-proseggizo',
          title: 'Proseggizō — "Made Nigh"',
          script: 'προσεγγίζω',
          translit: '<strong>proseggizō</strong> · to draw near; to bring near; to make accessible',
          description:
            'The word means physical approach but carries spiritual significance. To draw near means to have access, to enter, to belong. Gentiles, once at a distance, are now brought into the inner circle. The barrier is not merely softened—it is removed.',
        },
        {
          kind: 'commentary',
          id: 'e2-blood',
          html:
            '"By the blood of Christ." Not by law-keeping, not by becoming Jewish, not by any human effort. By the blood—the sacrifice of Christ, His death as payment for sin. The blood crosses the divide. It washes both Jew and Gentile equally. It is the price that grants access.',
        },
        {
          kind: 'christ',
          id: 'e2-christ-access',
          title: 'Christ Connection — The Blood That Draws Near',
          html:
            'Christ&apos;s death on the cross is the hinge on which history turns. It is the moment when Gentiles, cut off for centuries, suddenly have access to the promises of Israel. Not because the law was lowered, but because the One who fulfilled the law offered His blood as the sacrifice that grants entry. Every person who trusts Him—Jew or Gentile—is brought near by that blood.',
        },
        {
          kind: 'carry',
          html:
            'Whatever distance you have felt from God—because of your failures, your outsider status, your sense that you do not belong—that distance has been bridged. Not erased as if it never happened, but crossed. Christ&apos;s blood is the way. You who were far off are made nigh. You have access. You belong.',
        },
        {
          kind: 'reflection',
          id: 'e2-nigh-reflect',
          prompt:
            'Paul was addressing Gentiles who once felt far from God, cut off from His covenant and promises. Where do you feel far off? How does Christ&apos;s blood make you near?',
        },
      ],
    },

    /* ─── Ephesians 2:14–18 — He Is Our Peace; Middle Wall Broken ──────────────── */
    {
      ref: 'Ephesians 2:14–18',
      title: 'He Is Our Peace; The Middle Wall Broken',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 14,
              spans: [
                t('For '),
                hp('he is our peace', 'e2-our-peace'),
                t(', who hath made both one, and hath broken down the '),
                hy('middle wall of partition', 'e2-middle-wall'),
                t(' between us;'),
              ],
            },
            {
              number: 15,
              spans: [
                t('Having abolished in his flesh the enmity, '),
                hy('even the law of commandments contained in ordinances', 'e2-law-abolished'),
                t('; for to make in himself of twain '),
                hp('one new man', 'e2-one-new-man'),
                t(', so making peace;'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And that he might reconcile both unto God in one body by the cross, having slain the enmity thereby:'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And came and '),
                hg('preached peace', 'e2-preached-peace'),
                t(' to you which were '),
                hg('afar off', 'e2-afar-off'),
                t(', and to them that were nigh.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('For through him we both have '),
                hy('access by one Spirit unto the Father', 'e2-access-spirit'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'e2-our-peace',
          html:
            '"For he is our peace." Not a doctrine of peace. Not a principle of peace. But a person. Jesus. Peace is not something He teaches; it is something He is. He is the reconciler, the one in whom hostility ends.',
        },
        {
          kind: 'greek',
          id: 'e2-eirene',
          title: 'Eirēnē — "Peace"',
          script: 'εἰρήνη',
          translit: '<strong>eirēnē</strong> · peace; wholeness; reconciliation; the state of being restored',
          description:
            'Greek eirēnē is not the absence of conflict alone. It is the presence of right relationship, wholeness, the healing of what was broken. When Paul says Christ is our peace, he means Christ is the one who restores what sin shattered.',
        },
        {
          kind: 'commentary',
          id: 'e2-middle-wall',
          html:
            '"Broken down the middle wall of partition." Paul has a specific image in mind: the barrier in the Jerusalem Temple that separated the Court of the Gentiles (where Gentiles could go) from the inner courts (where only Jews could enter). This was not just architecture. It was a theological statement: Gentiles are not fully part of God&apos;s people. Christ demolished that wall—not metaphorically, but in reality, by making a new way.',
        },
        {
          kind: 'greek',
          id: 'e2-mesotoichon',
          title: 'Mesotoichon — "Middle Wall"',
          script: 'μεσότοιχον',
          translit: '<strong>mesotoichon</strong> · a middle wall; a partition; a dividing wall',
          description:
            'This word appears only once in the New Testament, here in Ephesians. Paul may be referencing the literal barrier in the Temple, or using it metaphorically for the law that separated Jew from Gentile. Either way, he says it is broken.',
        },
        {
          kind: 'commentary',
          id: 'e2-law-abolished',
          html:
            '"Having abolished in his flesh the enmity, even the law of commandments contained in ordinances." The law—with its dietary rules, its Sabbath laws, its circumcision requirement—was the mechanism by which Jew and Gentile were kept apart. Christ "abolished" it, not by lowering God&apos;s standard, but by fulfilling it Himself. He is the end of the law as a dividing wall.',
        },
        {
          kind: 'commentary',
          id: 'e2-one-new-man',
          html:
            '"For to make in himself of twain one new man, so making peace." Out of two peoples—Jewish and Gentile—Christ makes one new humanity. Not by erasing Jewish identity or demanding Gentiles become Jewish. But by creating something new, something unified in Him. The enmity is not papered over; it is ended by transformation.',
        },
        {
          kind: 'commentary',
          id: 'e2-preached-peace',
          html:
            '"And came and preached peace to you which were afar off, and to them that were nigh." Paul describes the Gospel proclamation. To the Gentiles (afar off), peace meant access to what was closed to them. To the Jews (nigh), peace meant release from the burden of separatism, the law that hemmed them in. Both groups received peace, but peace that reunited them.',
        },
        {
          kind: 'commentary',
          id: 'e2-afar-off',
          html:
            'The reference back to verse 13: those who were "afar off"—spatially and spiritually distant from the God of Israel. Now they hear the same peace the Jews hear. One Gospel reaches both.',
        },
        {
          kind: 'commentary',
          id: 'e2-access-spirit',
          html:
            '"For through him we both have access by one Spirit unto the Father." The final word on unity: both Jew and Gentile have the same access to God. Not separate doors. Not different terms. One Spirit, one Father. The Spirit grants access to the Father through Christ. This is the democracy of grace.',
        },
        {
          kind: 'christ',
          id: 'e2-christ-peace',
          title: 'Christ Connection — The Reconciler',
          html:
            'Jesus does not merely teach peace between Gentiles and Jews. He creates it by His death. His cross is the place where the deepest human division—centuries of law, custom, theology keeping two peoples apart—is healed. If Christ can reconcile Jew and Gentile, He can reconcile anything. This is the cosmic scope of the Gospel. No division He cannot cross.',
        },
        {
          kind: 'carry',
          html:
            'The wall between Jew and Gentile stood for 1,500 years. It seemed permanent, scripturally justified, theologically rooted. And Christ broke it. Not by compromise. Not by diluting the faith. By His death, which so completely addressed what the law was addressing (sin, separation, the need for blood sacrifice) that the boundary became pointless. What walls in your own heart has He broken? Where are you being called to reconciliation?',
        },
        {
          kind: 'reflection',
          id: 'e2-wall-reflect',
          prompt:
            'Christ broke down the wall between Jew and Gentile by His death. What barriers—between you and others, between parts of yourself—is He calling you to let Him reconcile?',
        },
        {
          kind: 'artwork',
          matchTitle: /temple|reconcil|peace/i,
          caption: 'Ephesians 2:14–18 · One New Humanity',
        },
      ],
    },

    /* ─── Ephesians 2:19–22 — Fellowcitizens with the Saints; Christ the Cornerstone ── */
    {
      ref: 'Ephesians 2:19–22',
      title: 'The Holy Temple; Christ the Cornerstone',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 19,
              spans: [
                t('Now therefore ye are no more strangers and foreigners, but '),
                hy('fellowcitizens with the saints', 'e2-citizens'),
                t(', and of the household of God;'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And are built upon the foundation of the apostles and prophets, Jesus Christ himself being the '),
                hp('chief corner stone', 'e2-cornerstone'),
                t(';'),
              ],
            },
            {
              number: 21,
              spans: [
                t('In whom all the building fitly framed together groweth unto an '),
                hg('holy temple in the Lord', 'e2-temple'),
                t(':'),
              ],
            },
            {
              number: 22,
              spans: [
                t('In whom ye also are builded together for an '),
                hp('habitation of God through the Spirit', 'e2-habitation'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'e2-citizens',
          html:
            '"Ye are no more strangers and foreigners, but fellowcitizens with the saints." The language shifts from "far off" and "aliens" to "citizens." Not permanent outsiders. Not guests in someone else&apos;s home. Citizens with full standing, full belonging. And these saints—these are the community, the people of God across the ages. You belong to them and they to you.',
        },
        {
          kind: 'commentary',
          id: 'e2-cornerstone',
          html:
            '"Jesus Christ himself being the chief corner stone." A cornerstone is the foundational stone, often placed at the corner where two walls meet, bearing the weight of both. It is also the stone chosen for its strength and beauty, the one that determines the alignment of the entire building. Christ is not merely one stone in a building. He is the cornerstone on which everything else rests and against which everything else aligns.',
        },
        {
          kind: 'greek',
          id: 'e2-akrogoniaios',
          title: 'Akrogōniaios — "Chief Corner Stone"',
          script: 'ἀκρογωνιαῖος',
          translit: '<strong>akrogōniaios</strong> · cornerstone; chief corner stone; the stone at the corner',
          description:
            'This word combines <em>akron</em> (extremity, chief) and <em>gonia</em> (angle, corner). It is the stone at the most important point—not hidden but prominent, bearing weight, essential to the structure. Peter identifies Jesus as this stone (1 Peter 2:6), citing Isaiah 28:16. It is a prophetic word.',
        },
        {
          kind: 'commentary',
          id: 'e2-temple',
          html:
            '"In whom all the building fitly framed together groweth unto an holy temple in the Lord." Paul is not describing a future edifice. He is describing a growing, living structure—the church, the people of God, being built together. The temple is no longer a building of stone. It is a building of people. And it grows. It is living, organic, dynamic.',
        },
        {
          kind: 'commentary',
          id: 'e2-habitation',
          html:
            '"In whom ye also are builded together for an habitation of God through the Spirit." The culmination: this temple—made not of stone but of people, all the believers across all ages—is the dwelling place of God. Where once the Spirit hovered over the waters (Genesis 1:2), now the Spirit dwells in the community. This is God&apos;s house. You are God&apos;s house.',
        },
        {
          kind: 'christ',
          id: 'e2-christ-cornerstone',
          title: 'Christ Connection — The Cornerstone and Foundation',
          html:
            'Jesus is not just a member of the structure. He is the cornerstone on which it all rests. Paul cites Isaiah 28:16 ("Behold, I lay in Zion a stone, a tried stone, a precious corner stone") and applies it to Jesus, claiming that ancient prophecy was pointing to Him. And Peter does the same in 1 Peter 2:4–6. The entire building of God&apos;s people, across time, aligns itself to Christ. He is the alignment point.',
        },
        {
          kind: 'carry',
          html:
            'You are not a stranger anymore. You are a citizen. And you are part of something larger—a temple, a living building being built on the Chief Cornerstone, Jesus. Your life is not random. It is fitted into a structure. God dwells in you not as an individual alone but as part of a people. The Holy Spirit makes you, together with all believers, a holy temple in the Lord. What does it mean for your daily life that you are part of God&apos;s habitation?',
        },
        {
          kind: 'reflection',
          id: 'e2-temple-reflect',
          prompt:
            'Paul says believers are being "builded together" into "an habitation of God through the Spirit"—not a building of stone but a living temple made of people. How does this vision of the church change the way you see your own belonging?',
        },
        {
          kind: 'artwork',
          matchTitle: /temple|stone|building|cornerstone/i,
          caption: 'Ephesians 2:19–22 · One Holy Temple',
        },
      ],
    },
  ],
};
