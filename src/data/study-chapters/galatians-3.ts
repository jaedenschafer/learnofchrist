import { hp, hy, hg, t, verse, plain, type RichChapterContent } from './types';

/**
 * Galatians 3 — The Work of Faith; Abraham's Children; Freedom in Christ
 *
 * Paul returns the Galatian churches to first principles. How did you receive
 * the Spirit? By faith, not by works. Abraham was justified by faith—centuries
 * before the law was given. The law is not your master; it is a tutor who led
 * you to Christ. In Christ, the ancient walls fall: Jew and Gentile, slave and
 * free, male and female, all one. All Abraham's children. All heirs of the promise.
 */
export const GALATIANS_3: RichChapterContent = {
  bookSlug: 'galatians',
  bookName: 'Galatians',
  chapter: 3,

  estimatedMinutes: { 5: 6, 10: 12, 15: 17 },
  intros: [
    'Paul opens with urgency and grief: "O foolish Galatians, who hath bewitched you?" The Galatians have turned from faith to works. They received the Spirit by faith; now they trust in the flesh. Paul takes them back to Abraham—not the law, but the man of faith. Abraham believed God, and that belief was counted as righteousness. The law came 430 years later. It was never meant to replace faith; it was meant to lead you to Christ.',
    'In Christ, the old divisions collapse. Jew and Gentile, slave and free, male and female—these categories no longer divide the believer. All are baptized into Christ. All have put on Christ. All are one in Him. All are Abraham&apos;s seed, heirs of the promise by faith. This is the gospel&apos;s scandal and its scandal is its power: the distinctions the world builds to divide and rank—ethnicity, status, gender—count for nothing in the kingdom of God.',
  ],

  opener: {
    matchArtist: /tissot/i,
    matchTitle: /faith|abraham|covenant/i,
    caption: 'Abraham Believed God—and It Was Counted to Him for Righteousness',
  },

  sections: [
    /* ─── Galatians 3:1–5 — O Foolish Galatians ──────────────────────── */
    {
      ref: 'Galatians 3:1–5',
      title: 'O Foolish Galatians: Bewitched Away from Faith',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              1,
              t('O foolish Galatians, '),
              hp('who hath bewitched you', 'gal-3-bewitched'),
              t(', that ye should not obey the truth, before whose eyes '),
              hp('Jesus Christ hath been evidently set forth, crucified among you', 'gal-3-cruci'),
              t('?'),
            ),
            verse(
              2,
              t('This only would I learn of you, Received ye the '),
              hp('Spirit by the works of the law', 'gal-3-works'),
              t(', or by the '),
              hp('hearing of faith', 'gal-3-faith'),
              t('?'),
            ),
          ],
        },
        {
          kind: 'greek',
          id: 'gal-3-bewitched',
          title: 'Baskainō — To Bewitch; To Put Under a Spell; To Fascinate',
          script: 'βασκαίνω',
          translit: '<strong>Baskainō</strong> · to bewitch; to fascinate; to put under a spell; to lead astray by enchantment',
          description:
            'Paul uses the language of witchcraft—a powerful metaphor. The Galatians are not dumb; they are under a spell. Someone has cast a charm over them, and they cannot see the truth in front of their faces. The law can enchant the flesh in a way faith cannot.',
        },
        {
          kind: 'commentary',
          id: 'gal-3-cruci',
          html:
            '&quot;Jesus Christ hath been evidently set forth, crucified among you.&quot; The cross has been painted before their eyes. It is not abstract theology—it is the scandal of the crucified Lord, the one cursed by the law, hanging as a criminal. And this is what the Galatians are turning away from, back to the works of the law that put Christ to death.',
        },
        {
          kind: 'commentary',
          id: 'gal-3-works',
          html:
            'The Galatians &quot;received&apos;&quot; the Spirit. This is not something they earned or built or achieved. The Spirit came to them, and the vehicle was faith—not circumcision, not the law, not any outward work. The beginning is always by grace.',
        },
        {
          kind: 'greek',
          id: 'gal-3-akoē',
          title: 'Akoē — Hearing; Report; That Which Is Heard',
          script: 'ἀκοή',
          translit: '<strong>Akoē</strong> · hearing; the sense of hearing; report; that which is heard; the Gospel message',
          description:
            'The &quot;hearing of faith&quot; is not mere audition—it is the message of the Gospel received with trust. You hear the word of Christ, and you believe it. This is how the Spirit comes. Not through your striving, but through your openness to what God has said.',
        },
        {
          kind: 'commentary',
          id: 'gal-3-faith',
          html:
            'Paul is not asking the Galatians an academic question. He is asking them to remember their own experience. The moment the Spirit came to them, they were not keeping the law—they were believing the Gospel. They heard the word of Christ and trusted. That is how grace works. Not through your achievement, but through your openness.',
        },
        {
          kind: 'carry',
          html:
            'You received the Spirit by faith, not by works. That was how the Spirit came the first time. Why would you think the opposite is true now? Why would you abandon the very thing that opened heaven to you?',
        },
        {
          kind: 'reflection',
          id: 'gal-3-refln-1',
          prompt: 'In what areas of your spiritual life are you tempted to trust in your own works instead of faith? What would it mean to receive the Spirit&apos;s fullness by faith alone?',
        },
      ],
    },

    /* ─── Galatians 3:6–9 — Abraham Believed God ───────────────────── */
    {
      ref: 'Galatians 3:6–9',
      title: 'Abraham Believed God; Faith, Not Law',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              6,
              t('Even as '),
              hp('Abraham believed God', 'gal-3-abr-faith'),
              t(', and it was '),
              hy('accounted to him for righteousness', 'gal-3-logizomai'),
              t('.'),
            ),
            plain(7, 'Know ye therefore that they which are of faith, the same are the children of Abraham.'),
            verse(
              8,
              t('And the scripture, foreseeing that God would '),
              hg('justify the heathen through faith', 'gal-3-justify'),
              t(', preached before the gospel unto Abraham, saying, '),
              hp('In thee shall all nations be blessed', 'gal-3-nations'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'christ',
          id: 'gal-3-abr-faith',
          title: 'Christ Connection — Faith Counted as Righteousness',
          html:
            'Paul quotes Genesis 15:6: Abraham &quot;believed God, and it was accounted to him for righteousness.&quot; This is not Abraham&apos;s obedience to a law—the law did not exist. This is pure faith in God&apos;s promise. Paul holds this moment as the template for how the gospel works: you believe, and God counts it as righteousness. This is how you stand before God—not by your works, but by your faith in Christ (Romans 4:1–8, 3:21–26). This is the exchange at the heart of the gospel: Christ becomes your sin so you become His righteousness (2 Corinthians 5:21).',
        },
        {
          kind: 'greek',
          id: 'gal-3-logizomai',
          title: 'Logizomai — To Reckon; To Count; To Credit',
          script: 'λογίζομαι',
          translit: '<strong>Logizomai</strong> · to reckon; to count; to credit; to impute; to consider',
          description:
            'This is the verb of accounting. God does not make Abraham righteous through works; He counts Abraham&apos;s faith as righteousness. It is an act of grace—God seeing the heart and crediting righteousness to it. This is how the believer stands before God: righteousness is imputed, not earned.',
        },
        {
          kind: 'commentary',
          id: 'gal-3-nations',
          html:
            '&quot;In thee shall all nations be blessed.&quot; This promise to Abraham is universal. Not just Jews. Not just the circumcised. All nations. This is the gospel in miniature: blessing is not restricted by ethnicity or law-keeping; it flows from faith. The heathen, the Gentiles, the outsider—all are included in Abraham&apos;s blessing through faith.',
        },
        {
          kind: 'commentary',
          id: 'gal-3-justify',
          html:
            'God will &quot;justify the heathen through faith.&quot; Not circumcision. Not the law. Not ethnicity. Faith. The promise to Abraham was not that his descendants would inherit because they kept the law—Abraham himself lived centuries before the law. The promise stands on faith. And if the heathen—the Gentiles—can be justified through faith, then the law is not the deciding factor. The line between insider and outsider, chosen and unchosen, is erased by faith.',
        },
        {
          kind: 'carry',
          html:
            'You are a child of Abraham by faith. That is your inheritance. Not by bloodline, not by your works, not by your striving. By your faith. This is not a lesser righteousness—this is how Abraham himself stood before God.',
        },
      ],
    },

    /* ─── Galatians 3:10–14 — Curse and Redemption ─────────────────── */
    {
      ref: 'Galatians 3:10–14',
      title: 'Under the Curse; Christ Made a Curse for Us',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              10,
              t('For as many as are of the works of the law are '),
              hg('under the curse', 'gal-3-curse'),
              t(': for it is written, '),
              hp('Cursed is every one that continueth not in all things which are written in the book of the law to do them', 'gal-3-curse-full'),
              t('.'),
            ),
            verse(
              13,
              hp('Christ hath redeemed us from the curse of the law', 'gal-3-redemption'),
              t(', '),
              hp('being made a curse for us', 'gal-3-curse-christ'),
              t(': for it is written, '),
              hg('Cursed is every one that hangeth on a tree', 'gal-3-tree'),
              t(':'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'gal-3-curse',
          html:
            'The law itself places a curse on those who depend on it. Not because the law is evil, but because no one can keep it perfectly. To stake your righteousness on your obedience to the law is to guarantee your own condemnation. The law is like a mirror—it shows you your failure, not your achievement.',
        },
        {
          kind: 'greek',
          id: 'gal-3-katara',
          title: 'Katara — Curse; Imprecation; Malediction',
          script: 'κατάρα',
          translit: '<strong>Katara</strong> · curse; malediction; imprecation; the expression of divine displeasure',
          description:
            'To be under a curse is to be under divine judgment. The law pronounces this curse on anyone who does not keep all its commands. But human weakness is universal—none keeps the law perfectly. The curse falls on everyone who tries to justify themselves by works.',
        },
        {
          kind: 'commentary',
          id: 'gal-3-curse-full',
          html:
            '&quot;Cursed is every one that continueth not in all things which are written in the book of the law to do them.&quot; The law&apos;s verdict is absolute. Not most things. Not the hard things. All things. The law is not a ladder you climb; it is a mirror that shows you your failure. Anyone who puts themselves under the law—who says, &quot;I will be righteous by keeping the law&quot;—is already cursed, because no one can keep it all.',
        },
        {
          kind: 'commentary',
          id: 'gal-3-curse-christ',
          html:
            'Christ was &quot;made a curse for us.&quot; This is not metaphor. In the ancient Near East, hanging on a tree was the ultimate symbol of curse—of being cut off from God, from the land, from blessing. Christ took that place. He accepted the full weight of what the law says: Cursed is the one who breaks the covenant. He bore it all.',
        },
        {
          kind: 'commentary',
          id: 'gal-3-tree',
          html:
            '&quot;Cursed is every one that hangeth on a tree.&quot; (Deuteronomy 21:23). Crucifixion was not just Roman; it was the curse of the law itself. Christ did not die by stoning or in a chamber—He died on a tree, under the law&apos;s own curse. He stepped into the very place that the law reserves for the worst offender.',
        },
        {
          kind: 'christ',
          id: 'gal-3-redemption',
          title: 'Christ Connection — The Great Exchange',
          html:
            '&quot;Christ hath redeemed us from the curse of the law, being made a curse for us.&quot; Here is the gospel&apos;s center. Christ does not cancel the law&apos;s power or declare it wrong. He accepts its verdict. He stands where the curse falls and absorbs it. The crucifixion is not an accident or a tragedy—it is Christ intentionally placing Himself under the law&apos;s curse so that you can be taken out from under it. The cross is the great exchange: He became what you are (cursed) so you could become what He is (blessed). &quot;He was made sin for us who knew no sin, that we might be made the righteousness of God in Him&quot; (2 Corinthians 5:21). &quot;As the Father hath loved me, so have I loved you&quot; (John 15:9). This is the depth of Christ&apos;s love—not to spare the law&apos;s demands, but to meet them Himself on your behalf.',
        },
        {
          kind: 'greek',
          id: 'gal-3-exagorazo',
          title: 'Exagorazo — To Redeem; To Buy Out; To Purchase from Slavery',
          script: 'ἐξαγοράζω',
          translit: '<strong>Exagorazo</strong> · to redeem; to buy out; to purchase from slavery; to liberate by payment',
          description:
            'Christ &quot;redeems&quot; us—He buys us out of slavery. The curse is not a fine you pay or a debt you settle; it is slavery. You are enslaved to the law&apos;s demand for perfection, and you cannot free yourself. Christ pays the price: His life. And you walk free.',
        },
        {
          kind: 'carry',
          html:
            'The law no longer holds you in its grip. Christ stood in your place. The curse that should have fallen on you fell on Him instead. You are redeemed. Walk in that freedom.',
        },
        {
          kind: 'reflection',
          id: 'gal-3-refln-2',
          prompt: 'What curse—what impossibly high demand—do you put on yourself? What would it mean to accept that Christ has already borne that burden for you?',
        },
      ],
    },

    /* ─── Galatians 3:15–22 — The Law as Custodian ────────────────── */
    {
      ref: 'Galatians 3:15–22',
      title: 'Wherefore the Law? The Law as Schoolmaster',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              16,
              t('Now to Abraham and his seed were the promises made. He saith not, And to seeds, as of many; but as of one, '),
              hp('And to thy seed, which is Christ', 'gal-3-seed-christ'),
              t('.'),
            ),
            verse(
              23,
              t('But before faith came, we were kept under the law, shut up unto the faith which should afterwards be revealed.'),
            ),
            verse(
              24,
              t('Wherefore '),
              hy('the law was our schoolmaster', 'gal-3-paidagogos'),
              t(' to bring us unto Christ, that we might be justified by faith.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'gal-3-seed-christ',
          html:
            'Paul makes a striking grammatical observation: &quot;He saith not, And to seeds, as of many; but as of one, And to thy seed, which is Christ.&quot; The promise to Abraham is singular—it points to one Seed, one Heir, one through whom the blessing flows to all nations. That Seed is Christ. Abraham is not the end; he is the beginning, pointing forward to Christ.',
        },
        {
          kind: 'greek',
          id: 'gal-3-paidagogos',
          title: 'Paidagogos — Tutor; Schoolmaster; Custodian; Guardian of a Child',
          script: 'παιδαγωγός',
          translit: '<strong>Paidagogos</strong> · tutor; pedagogue; schoolmaster; a slave guardian who escorted children to school',
          description:
            'A paidagogos was a slave in a wealthy household who walked the child to school and back, taught basic discipline, and prepared the way for the real teacher. The paidagogos was strict—even harsh—but that strictness served a purpose: to ready the child for growth. Once the child reached maturity, the paidagogos&apos; role ended. The law is that guardian. It has disciplined you, taught you that you cannot save yourself, and brought you to the door of faith. But its work is finished.',
        },
        {
          kind: 'commentary',
          id: 'gal-3-shut',
          html:
            '&quot;We were kept under the law, shut up unto the faith which should afterwards be revealed.&quot; The law confines. It shows you your sin (Romans 3:20). It tells you what you cannot do. It shuts you up—pens you in—so that you have nowhere to run but to grace. The law is not cruel; it is a teacher preparing you for the day you need something stronger than discipline: love.',
        },
        {
          kind: 'carry',
          html:
            'The law brought you to Christ. It did its work. Now Christ is your teacher, your justifier, your strength. The law trained you; Christ frees you. Do not retreat into a master you have outgrown.',
        },
      ],
    },

    /* ─── Galatians 3:25–29 — Children of God; Put On Christ ───────── */
    {
      ref: 'Galatians 3:25–29',
      title: 'Children of God; Neither Jew nor Greek; All One in Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              26,
              t('For ye are all the '),
              hp('children of God by faith in Christ Jesus', 'gal-3-children'),
              t('.'),
            ),
            verse(
              27,
              t('For as many of you as have been '),
              hg('baptized into Christ', 'gal-3-baptized'),
              t(' have '),
              hy('put on Christ', 'gal-3-put-on'),
              t('.'),
            ),
            verse(
              28,
              hp('There is neither Jew nor Greek', 'gal-3-neither'),
              t(', there is neither bond nor free, there is neither male nor female: for ye are all one in Christ Jesus.'),
            ),
            verse(
              29,
              t('And if ye be Christ&apos;s, then are ye '),
              hp('Abraham&apos;s seed, and heirs according to the promise', 'gal-3-heirs'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'gal-3-children',
          html:
            '&quot;Ye are all the children of God by faith in Christ Jesus.&quot; This is the answer to the opening question. How did you become God&apos;s children? Not by the law, not by works, but by faith in Christ. You are adopted into the family of God through faith, and that adoption is irreversible.',
        },
        {
          kind: 'greek',
          id: 'gal-3-endynō',
          title: 'Endynō — To Put On; To Clothe Oneself; To Invest Oneself With',
          script: 'ἐνδύνω',
          translit: '<strong>Endynō</strong> · to put on; to clothe oneself with; to be clothed in; to invest with',
          description:
            'Baptism is not a washing away of the past alone—it is a putting on of Christ. You are clothed with Him. His righteousness becomes your covering. His identity becomes your identity. As you wear a garment, you have put on Christ as your very nature before the Father.',
        },
        {
          kind: 'christ',
          id: 'gal-3-neither',
          title: 'Christ Connection — The Gospel Breaks Down All Walls',
          html:
            '&quot;There is neither Jew nor Greek, there is neither bond nor free, there is neither male nor female: for ye are all one in Christ Jesus.&quot; This is the scandal of the cross. The law maintains distinctions—Jew and Gentile, clean and unclean. But Christ transcends all of them. Not by erasing difference, but by making those differences irrelevant to your standing before God. You are not joined to Christ in spite of being a Gentile or a slave or a woman; you are joined in your full self. And in that union, the categories that the world uses to rank and divide lose all their power. This is why Ephesians says Christ &quot;hath broken down the middle wall of partition between us&quot; (Ephesians 2:14–16). What Paul is announcing is nothing less than the end of the old world&apos;s order and the beginning of a new family, built not on blood or status but on faith.',
        },
        {
          kind: 'commentary',
          id: 'gal-3-baptized',
          html:
            '&quot;Baptized into Christ&quot;—this is not entry into a club or adoption of a symbol. This is a union. You have been immersed into Christ&apos;s death and resurrection (Romans 6:3–5). You have died with Him and risen with Him. Your old identity, your old standing, is gone.',
        },
        {
          kind: 'commentary',
          id: 'gal-3-put-on',
          html:
            'You have &quot;put on Christ.&quot; When the Father looks at you, He sees you clothed in Christ&apos;s righteousness, wrapped in His perfection, covered by His love. You stand before the throne not in your own merit but in His.',
        },
        {
          kind: 'commentary',
          id: 'gal-3-heirs',
          html:
            'You are &quot;Abraham&apos;s seed, and heirs according to the promise.&quot; The promise that God made to Abraham—the promise of blessing, of descendants, of inheritance—belongs to you. Not because of your bloodline, but because you are in Christ, and Christ is the Seed Abraham was waiting for. You are not an afterthought or a substitute; you are the fulfillment of the promise.',
        },
        {
          kind: 'carry',
          html:
            'The distinctions the world prizes—ethnicity, social rank, gender—no longer define you. Christ does. You are one with every believer, regardless of where they come from or what they can do. This is the church. This is the family of God.',
        },
        {
          kind: 'reflection',
          id: 'gal-3-refln-3',
          prompt: 'What divisions—in your community, your church, your heart—do you struggle to overcome? What would it mean to truly live as if every believer is one with you in Christ?',
        },
      ],
    },

    /* ─── Galatians 3:29 — Heirs of the Promise ──────────────────────── */
    {
      ref: 'Galatians 3:29 (continued)',
      title: 'Heirs According to the Promise',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              29,
              t('And if ye be Christ&apos;s, then are ye Abraham&apos;s seed, and heirs according to the promise.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'gal-3-heirs-note',
          html:
            'This is the culmination. You are heirs. Not servants. Not guests. Heirs. The promise made to Abraham—the promise of blessing, of a land, of descendants as numerous as stars—belongs to you. Not because of bloodline, but because you belong to Christ, and Christ is the Seed Abraham was waiting for. You inherit not by adoption into a bloodline but by union with the one at the center of that bloodline&apos;s entire story.',
        },
        {
          kind: 'greek',
          id: 'gal-3-sperma',
          title: 'Sperma — Seed; Offspring; Descendant; That Which Is Sown',
          script: 'σπέρμα',
          translit: '<strong>Sperma</strong> · seed; offspring; descendant; that which is sown and grows',
          description:
            'Abraham&apos;s &quot;seed&quot; is singular—it is Christ. But all who are in Christ are Abraham&apos;s seed by union with Him. You are part of that one Seed. You share in the inheritance that flows from it.',
        },
        {
          kind: 'christ',
          id: 'gal-3-christ-heir',
          title: 'Christ Connection — The Inheritance Promised to Abraham',
          html:
            'The promise to Abraham was fulfilled not by his biological descendants keeping the law, but by Christ. And you inherit alongside Christ. &quot;If we be children, then heirs; heirs of God, and joint-heirs with Christ&quot; (Romans 8:16–17). What Abraham waited for, what the law pointed to, what the prophets announced—it is yours. Not through your striving, but through your faith in Christ.',
        },
        {
          kind: 'carry',
          html:
            'You are an heir of the promise. Not because of what you have done, but because you belong to Christ. That inheritance is your birthright.',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'And if ye be Christ&apos;s, then are ye Abraham&apos;s seed, and heirs according to the promise.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Galatians 3 · Study Guide',
  },

  hasHebrew: false,
};
