import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Hebrews 7 — The Priesthood of Melchisedec.
 *
 * The author takes the mysterious figure of Melchisedec from Genesis 14 and
 * unpacks him as the definitive type of Christ's eternal priesthood. Unlike the
 * Levites, whose priesthood passed from father to son and ended in death,
 * Melchisedec appears without genealogy, without beginning or end. Christ is such
 * a priest—eternal, unchangeable, able to save completely. His priesthood renders
 * the old order obsolete, guarantees a better covenant, and rests on the oath of
 * God Himself. Every shadow points to the substance: Christ alone.
 */
export const HEBREWS_7: RichChapterContent = {
  bookSlug: 'hebrews',
  bookName: 'Hebrews',
  chapter: 7,

  estimatedMinutes: { beginner: 7, intermediate: 17, deep: 22 },
  intros: [
    'Hebrews 7 is the key that unlocks the entire letter. The author has introduced Melchisedec in chapter 5 as a mystery—a priest-king who appears in Genesis 14 without warning, blesses Abraham, receives a tithe from him, and then vanishes. Most readers pass over him. Hebrews stops and asks: Who is this man? Why does he matter? And the answer reshapes everything you understand about priesthood, sacrifice, and Christ.',
    'The chapter moves through Melchisedec&apos;s unusual nature (without genealogy, without end, receiving honor from Abraham), then argues that Christ is "a priest forever after the order of Melchisedec"—a priesthood that is eternal, unchangeable, and far superior to the Levitical system. The old priesthood was weak because it operated under the Law and could not perfect anyone. Christ&apos;s priesthood is powerful because it is grounded in God&apos;s sworn oath, and it actually saves to the uttermost.',
    'As you read, notice the author&apos;s logic: If the old priesthood was sufficient, there would be no need for a new one. The very fact that Scripture speaks of "another priest after the order of Melchisedec" proves the Levitical order was incomplete. Christ did not come to improve the old system—He came to replace it entirely with something infinitely better.',
  ],

  opener: {
    matchArtist: /tissot|rembrandt|rubens/i,
    matchTitle: /melchizedek|priest/i,
    caption: 'Melchisedec Meets Abraham · The First Priest',
  },

  sections: [
    /* ─── Hebrews 7:1–3 — Melchisedec, King of Salem ───────────────────── */
    {
      ref: 'Hebrews 7:1–3',
      title: 'Melchisedec: King of Salem, Priest of the Most High God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(1,
              t('For this '),
              hp('Melchisedec', 'melchisedec-person'),
              t(', '),
              hp('king of Salem', 'salem-king'),
              t(', '),
              hp('priest of the most high God', 'priest-most-high'),
              t(', who '),
              hg('met Abraham returning from the slaughter of the kings', 'c-met-abraham'),
              t(', and '),
              hp('blessed him', 'blessed-abraham'),
              t(';'),
            ),
            verse(2,
              t('To whom also '),
              hg('Abraham gave a tenth part of all', 'c-tithe-abraham'),
              t('; first being by interpretation '),
              hy('King of righteousness', 'hebrew-tsedek'),
              t(', and after that also King of Salem, which is, '),
              hy('King of peace', 'hebrew-shalom'),
              t(';'),
            ),
            verse(3,
              t('Without father, without mother, without descent, having neither '),
              hp('beginning of days, nor end of life', 'eternal-priesthood'),
              t('; but '),
              hp('made like unto the Son of God', 'melchisedec-type'),
              t('; abideth a priest continually.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-met-abraham',
          html:
            'Genesis 14 places this meeting at a precise moment: Abraham has just defeated the five kings and rescued Lot. He is returning victorious but weary. It is in this moment—not when Abram is strong, but in the midst of his work—that Melchisedec appears. The author of Hebrews is drawing a contrast: the king of Sodom offers wealth; Melchisedec offers blessing. One tempts; one sanctifies.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-tsedek',
          title: 'Tsedek — Righteousness',
          script: 'צְדָקָה',
          translit: '<strong>tsedek</strong> · righteousness; justice; what is right',
          description:
            'Melchisedec&apos;s name (melech = king; tsedek = righteousness) means "King of Righteousness." Righteousness in Hebrew is not merely moral goodness—it is rightness in relationship, the restoration of proper order. He is a king who rules justly, who stands for what is right.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shalom',
          title: 'Shalom — Peace',
          script: 'שָׁלוֹם',
          translit: '<strong>shalom</strong> · peace; wholeness; completeness',
          description:
            'Salem may derive from shalom, making Melchisedec not only righteous but the ruler of peace. His kingship brings peace, wholeness, the sense that things are complete and in proper order. This is the peace Christ brings.',
        },
        {
          kind: 'commentary',
          id: 'melchisedec-person',
          html:
            'Melchisedec appears only twice in Scripture—Genesis 14 and referenced here in Hebrews 5-7. He is not explained, not introduced, not contextualized. He simply appears, as if the reader already knows him. This mysterious quality is exactly what makes him so powerful as a type of Christ. He is what priesthood looks like when you strip away time, genealogy, and succession.',
        },
        {
          kind: 'commentary',
          id: 'salem-king',
          html:
            'Salem is Jerusalem—the city that will later be the center of Jewish worship. Yet Melchisedec is already king here, already priest, before any Levitical order exists. He rules from the same city where Christ will be crucified and from where He will ascend.',
        },
        {
          kind: 'commentary',
          id: 'priest-most-high',
          html:
            'The title "priest of the most high God" (El Elyon) is significant. Melchisedec serves the God of all gods, the supreme deity, not a tribal god or a local cult. His priesthood is universal, eternal, not bound to the Levitical system that has not yet been created.',
        },
        {
          kind: 'commentary',
          id: 'blessed-abraham',
          html:
            'Abraham receives blessing from Melchisedec. Not wealth, not military aid—blessing. A spiritual transaction. And the author will argue: when the lesser is blessed by the greater, it demonstrates superiority. Abraham, the father of the nation, receives blessing from this priest. It proves Melchisedec&apos;s authority.',
        },
        {
          kind: 'greek',
          id: 'gk-aparkhé',
          title: 'Aparkhé — The First-fruits',
          script: 'ἀπαρχή',
          translit: '<strong>aparkhé</strong> · first-fruits; the initial portion offered to God',
          description:
            'When Abraham gives a tenth, he is offering aparkhé—the first-fruits. It is both a practical division and a spiritual declaration: I belong to God first. The tithe acknowledges Melchisedec&apos;s priesthood as legitimate.',
        },
        {
          kind: 'commentary',
          id: 'c-tithe-abraham',
          html:
            'Abraham gives Melchisedec a tenth of all his goods. This is remarkable. Abraham is the father of the faithful, yet he tithes to Melchisedec. The author&apos;s logic is: if Abraham tithes to Melchisedec, it proves Melchisedec is greater. A greater person receives from the lesser. Abraham&apos;s tithe is a tacit acknowledgment of superior authority.',
        },
        {
          kind: 'commentary',
          id: 'eternal-priesthood',
          html:
            'The phrase "without beginning of days, nor end of life" is crucial. In Genesis, Melchisedec simply appears and disappears—no birth, no death, no succession. The author takes this absence as theological: his priesthood is eternal because he is not bound by time. He does not die and pass his office to a son. He abides—perpetually present.',
        },
        {
          kind: 'commentary',
          id: 'melchisedec-type',
          html:
            'Made like unto the Son of God. This is typology at its height. Melchisedec is not the Son of God, but his nature as a priest—eternal, without genealogy, blessing the faithful, receiving honor—resembles Christ&apos;s priesthood so closely that the author uses him as the theological template for understanding Jesus.',
        },
        {
          kind: 'christ',
          id: 'christ-eternal-priest',
          title: 'Christ Connection — The Eternal Priest',
          html:
            'Christ, like Melchisedec, does not hold office by genealogy or Levitical descent. His priesthood is eternal—He does not die and pass the office to a successor. He abides a priest continually. And like Melchisedec, He blesses those who come to Him and receives their worship. The difference: Melchisedec is a type, a shadow, a mystery. Christ is the substance itself.',
        },
        {
          kind: 'carry',
          html:
            'You serve a priest who is not limited by time, not bound by succession, not weakened by death. Your high priest is eternal. He was before you. He will be after you. His priesthood will not pass to another because He never stops serving.',
        },
        {
          kind: 'reflection',
          id: 'reflect-eternal-priest',
          prompt: 'What does it mean that your priest is eternal? How does that change the way you approach Him in prayer?',
        },
      ],
    },

    /* ─── Hebrews 7:11–17 — The Levitical Priesthood Was Incomplete ─────── */
    {
      ref: 'Hebrews 7:11–17',
      title: 'Perfection Was Not by the Levitical Priesthood',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(11,
              t('If therefore '),
              hg('perfection were by the Levitical priesthood', 'c-levitical-incomplete'),
              t('(for under it the people received the law,) '),
              hp('what further need was there that another priest should rise after the order of Melchisedec', 'christ-order-melchisedec'),
              t(', and not be called after the order of Aaron?'),
            ),
            verse(14,
              t('For it is evident that our Lord '),
              hg('sprang out of Juda', 'c-judah-tribe'),
              t('; of which tribe '),
              hg('Moses spake nothing concerning priesthood', 'c-moses-priesthood'),
              t('.'),
            ),
            verse(16,
              t('Who is made, not after the law of a carnal commandment, but after the power of an '),
              hp('endless life', 'endless-life-power'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-levitical-incomplete',
          html:
            'This is the rhetorical hinge of the entire chapter. If the Levitical priesthood were complete, there would be no need for another priesthood. But Scripture explicitly prophesies another priest—Psalm 110:4, "Thou art a priest for ever after the order of Melchisedec." The very existence of this prophecy proves the old priesthood was insufficient.',
        },
        {
          kind: 'commentary',
          id: 'c-judah-tribe',
          html:
            'Jesus descended from Judah, not Levi. Under the Law, only Levites could be priests. Only descendants of Aaron could serve in the tabernacle. Jesus had no Levitical credentials whatsoever. Yet He is called a priest. How? Not by genealogy or law, but by power. His priesthood is grounded not in human succession but in His indestructible life.',
        },
        {
          kind: 'commentary',
          id: 'c-moses-priesthood',
          html:
            'Moses spoke nothing concerning priesthood when he appointed the tribe of Judah its leadership. Judah produced judges, kings, prophets—but no priests. David was a king from Judah who wrote psalms about priesthood (Psalm 110), but he was not himself a priest. Christ, from Judah, is both King and Priest—a combination the Law never provided for.',
        },
        {
          kind: 'greek',
          id: 'gk-aparalliaktoi',
          title: 'Aparalliaktoi — Unchangeable',
          script: 'ἀπαράλλακτος',
          translit: '<strong>aparalliaktoi</strong> · unchangeable; immutable; incapable of variation',
          description:
            'An unchangeable priesthood cannot be transferred, interrupted, or superseded. It stands perpetually the same. Christ&apos;s priesthood will never change hands, never be interrupted by death, never be improved upon.',
        },
        {
          kind: 'commentary',
          id: 'christ-order-melchisedec',
          html:
            'The prophecy itself (Psalm 110:4) was written long before Christ came. It sits in Scripture as a standing proof that the Melchisedec priesthood was always meant to come. The author is saying: You do not need to wonder if Christ&apos;s priesthood is legitimate. God prophesied it thousands of years in advance.',
        },
        {
          kind: 'commentary',
          id: 'endless-life-power',
          html:
            'The Levitical priesthood operated under "a carnal commandment"—a law written on stone and parchment. Christ&apos;s priesthood operates under "the power of an endless life." It rests not on rules but on reality—the reality of His resurrection and perpetual intercession.',
        },
        {
          kind: 'christ',
          id: 'christ-beyond-law',
          title: 'Christ Connection — Priesthood by Power, Not Law',
          html:
            'Christ is not your priest because He meets a genealogical requirement. He is your priest because He lives eternally. The old priesthood depended on a system of laws that regulated who could serve and when. Christ&apos;s priesthood depends on one thing: that He cannot die. Death cannot touch an endless life.',
        },
        {
          kind: 'carry',
          html:
            'You do not serve a priest whose qualifications could expire or whose office could pass to another. You serve a priest whose authority rests on unchangeable power. That means your access to Him is stable, your representation is permanent, your hope is secure.',
        },
        {
          kind: 'reflection',
          id: 'reflect-priesthood-power',
          prompt: 'Where are you still trying to earn access to God through rules and performance? What would it mean to rest in a priest who serves by endless life, not by law?',
        },
      ],
    },

    /* ─── Hebrews 7:18–22 — The Law Made Nothing Perfect ───────────────── */
    {
      ref: 'Hebrews 7:18–22',
      title: 'A Better Hope by the Oath of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(18,
              t('For there is verily a disannulling of the commandment going before for the weakness and unprofitableness thereof.'),
            ),
            verse(19,
              t('For the law '),
              hp('made nothing perfect', 'law-not-perfect'),
              t(', but the bringing in of a '),
              hp('better hope', 'better-hope'),
              t(' did; by the which we draw nigh unto God.'),
            ),
            verse(21,
              t('(For those priests were made without an oath; but this with an oath by him that said unto him, '),
              hy('Thou art a priest for ever after the order of Melchisedec', 'psalm-110-oath'),
              t(':)'),
            ),
            verse(22,
              t('By so much was '),
              hp('Jesus made a surety of a better testament', 'jesus-surety'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'law-not-perfect',
          html:
            'The author is not saying the Law was evil. He is saying it was weak. It could expose sin but not erase it. It could demand obedience but not supply the power to obey. It could tell you what was wrong but not make you right. Perfection—completeness, the achievement of the goal—was beyond the Law&apos;s capacity.',
        },
        {
          kind: 'commentary',
          id: 'better-hope',
          html:
            'What the Law could not do, hope can. Not vague optimism, but hope anchored in a person—Christ. And this hope is different in kind from the old system. It is not conditional on your performance. It rests on Christ&apos;s unchangeable nature.',
        },
        {
          kind: 'greek',
          id: 'gk-egguos',
          title: 'Egguos — Surety',
          script: 'ἔγγυος',
          translit: '<strong>egguos</strong> · surety; pledge; guarantor',
          description:
            'A surety is a guarantor—someone who backs a covenant with his own word and bond. Jesus is not just your priest; He is the guarantee of your new covenant. His life, His character, His oath are pledged to ensure the covenant holds.',
        },
        {
          kind: 'commentary',
          id: 'psalm-110-oath',
          html:
            'Psalm 110:4 is the only place in Scripture where God swears an oath about priesthood. The father of the faithful receives blessing from Melchisedec (Genesis 14). The psalmist celebrates a priest after that order (Psalm 110). The prophet (Hebrews) unveils that priest to be Christ. One prophecy, one office, one person—the entire arc of Scripture narrows to this point.',
        },
        {
          kind: 'commentary',
          id: 'jesus-surety',
          html:
            'Christ made a better testament—a better covenant. And He made it as a surety. That means you hold not just His promise, but His oath. And God has sworn that nothing will break His oath. Your access to the Father is not dependent on how much faith you have this morning. It is dependent on Christ&apos;s sworn office, which cannot change.',
        },
        {
          kind: 'christ',
          id: 'christ-oath',
          title: 'Christ Connection — Sworn by God Himself',
          html:
            'The old priests were appointed by law, without oath. But Christ was appointed by God&apos;s oath: "Thou art a priest for ever." God swore it. God bound Himself by it. Christ is not just a priest; He is an oath-sworn priest. Your covenant with God does not rest on your firmness or your constancy. It rests on God&apos;s sworn word about Christ.',
        },
        {
          kind: 'carry',
          html:
            'When you wonder if your salvation is secure, remember: it does not rest on you. It rests on a sworn oath. God has bound Himself to it. An oath is what you swear when a mere promise is not enough. God swore by Himself. That is the measure of how seriously He takes your salvation.',
        },
      ],
    },

    /* ─── Hebrews 7:23–25 — He Ever Liveth to Make Intercession ──────────── */
    {
      ref: 'Hebrews 7:23–25',
      title: 'He Ever Liveth to Make Intercession',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(23,
              t('And they truly were many priests, because they were not suffered to continue by reason of death:'),
            ),
            verse(24,
              t('But this man, because he '),
              hp('continueth ever', 'continueth-ever'),
              t(', hath an '),
              hg('unchangeable priesthood', 'unchangeable-priesthood'),
              t('.'),
            ),
            verse(25,
              t('Wherefore he is '),
              hp('able also to save them to the uttermost', 'save-uttermost'),
              t(' that come unto God by him, seeing he '),
              hp('ever liveth to make intercession for them', 'ever-intercession'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'continueth-ever',
          html:
            'The Levitical priests were many because death interrupted each one. Father died; son took his place. Son died; grandson took his place. An endless succession, because no one could hold the office permanently. Christ breaks this pattern. He does not die. He continues forever. No successor is needed. No replacement required.',
        },
        {
          kind: 'commentary',
          id: 'unchangeable-priesthood',
          html:
            'Because Christ continues ever, His priesthood cannot be transferred, interrupted, or made obsolete. Your priest will be the same today as tomorrow, as He was a thousand years ago. That constancy is your security.',
        },
        {
          kind: 'greek',
          id: 'gk-entugchanó',
          title: 'Entugchanó — To Intercede',
          script: 'ἐντυγχάνω',
          translit: '<strong>entugchanó</strong> · to intercede; to appeal to; to stand before on behalf of',
          description:
            'Intercession is not negotiating or begging. It is standing before a king on someone&apos;s behalf. Christ, right now, stands before the Father, making appeal for you. This is not a past act (the cross), but a present, ongoing work.',
        },
        {
          kind: 'commentary',
          id: 'save-uttermost',
          html:
            '"Save them to the uttermost." Not partially. Not conditionally. Not with loopholes or escape clauses. To the uttermost—completely, thoroughly, from every angle, at every level. No part of you is left outside His salvation. No corner of your brokenness is beyond His reach.',
        },
        {
          kind: 'commentary',
          id: 'ever-intercession',
          html:
            'Christ is making intercession right now. Not just at a fixed time, not just when you pray. Continually. This is the ongoing work of your high priest. While you sleep, He intercedes. While you fail, He intercedes. While you forget, He remembers you before the Father and speaks on your behalf.',
        },
        {
          kind: 'greek',
          id: 'gk-eis-panteles',
          title: 'Eis to Panteles — To the Uttermost',
          script: 'εἰς τὸ παντελές',
          translit: '<strong>eis to panteles</strong> · to the uttermost; to the very end; completely and forever',
          description:
            'This phrase suggests both completeness and eternality. It means He saves you entirely, and His salvation is without end. Nothing is left undone. Nothing will fail.',
        },
        {
          kind: 'christ',
          id: 'christ-intercession',
          title: 'Christ Connection — Your Advocate at the Throne',
          html:
            'Right now, Christ stands before the Father and intercedes for you. Not because you have been good enough. Not because you prayed well enough. But because that is what an unchangeable priesthood does: it continually represents you, continually stands for you, continually speaks your name to the Father. You are never alone before God because Christ is there.',
        },
        {
          kind: 'carry',
          html:
            'You are saved to the uttermost. And you are being saved to the uttermost, right now, through an ongoing intercession. When you fail, Christ does not abandon you—He intercedes for you. When you fear you have gone too far, Christ reminds the Father of His oath. You cannot fall outside His reach.',
        },
        {
          kind: 'reflection',
          id: 'reflect-intercession',
          prompt: 'What does it change in your day to know that right now, Christ is interceding for you before the Father? What would it look like to trust that presence?',
        },
      ],
    },

    /* ─── Hebrews 7:26–28 — Such an High Priest Became Us ─────────────── */
    {
      ref: 'Hebrews 7:26–28',
      title: 'Holy, Harmless, Undefiled, Separate from Sinners',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(26,
              t('For such an high priest '),
              hp('became us', 'priest-suited'),
              t(', who is '),
              hy('holy, harmless, undefiled', 'holiness-virtues'),
              t(', '),
              hy('separate from sinners', 'separate-sinners'),
              t(', and '),
              hy('made higher than the heavens', 'higher-heavens'),
              t(';'),
            ),
            verse(27,
              t('Who needeth not daily, as those high priests, to '),
              hg('offer up sacrifice, first for his own sins, and then for the people&apos;s', 'c-old-sacrifice'),
              t(': for '),
              hp('this he did once, when he offered up himself', 'offered-once'),
              t('.'),
            ),
            verse(28,
              t('For the law maketh men high priests which have infirmity; but the word of the oath, which was since the law, maketh the Son, who is '),
              hp('consecrated for evermore', 'consecrated-ever'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'priest-suited',
          html:
            'The language is exquisite: "such an high priest became us." Not "we managed to find one good enough," but "for us, this is exactly what was needed." Christ&apos;s character fits our condition perfectly. We needed a priest who could sympathize with our weakness yet remain untouched by it. Christ is precisely that.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-kadosh',
          title: 'Kadosh — Holy',
          script: 'קָדוֹשׁ',
          translit: '<strong>kadosh</strong> · holy; set apart; consecrated',
          description:
            'Holy does not mean morally superior in a distant way. It means radically separated unto God, wholly devoted, utterly dedicated. Christ&apos;s holiness is not cold perfection—it is burning dedication to the Father&apos;s purposes.',
        },
        {
          kind: 'commentary',
          id: 'holiness-virtues',
          html:
            'Holy—set apart for God alone. Harmless—without guile, without deception, without the bent toward self-protection that corrupts all other priests. Undefiled—having never touched corruption, never compromised, never bent a principle for survival. These are not abstract virtues. They describe a priest who can represent you because He understands your weakness but does not share your condition.',
        },
        {
          kind: 'commentary',
          id: 'separate-sinners',
          html:
            'Separate from sinners—yet not distant. He touched the sick, ate with the outcast, washed feet like a servant. Yet He remained separate. He was in the world but not of it. He experienced human suffering but not human sin. This is the paradox of Christ: completely human in His nature, completely untouched in His character.',
        },
        {
          kind: 'commentary',
          id: 'higher-heavens',
          html:
            'Made higher than the heavens. Christ ascended above all heavens, above all powers, above all principalities. He is exalted at the right hand of God. And from that position, He intercedes for you. Your priest is not merely beside you—He is above everything that could possibly harm you.',
        },
        {
          kind: 'greek',
          id: 'gk-apatórapatórmetos',
          title: 'Apatōr & Amḗtōr — Fatherless & Motherless',
          script: 'ἀπάτωρ · ἀμήτωρ',
          translit: '<strong>apatōr</strong> · without father; <strong>amḗtōr</strong> · without mother',
          description:
            'In Hebrews 7:3, Melchisedec is described as fatherless and motherless—without genealogy. This does not mean he had no biological parents, but that Scripture records none. His priesthood does not flow from a human family line. It stands alone, grounded not in succession but in his eternal nature.',
        },
        {
          kind: 'commentary',
          id: 'c-old-sacrifice',
          html:
            'The Levitical high priest had to offer sacrifice first for his own sins. He was a sinner interceding for sinners. Think of the irony: he was supposed to stand between God and the people, but he himself was impure. He had to ceremonially cleanse himself before approaching the holy place. Every day brought new sins that needed new sacrifices. It was exhausting and endless.',
        },
        {
          kind: 'commentary',
          id: 'offered-once',
          html:
            'Christ offered one sacrifice. Then He sat down. Not because He was resting, but because the work was complete. The old priest never sat down—there was always more to do, another sacrifice to offer. Christ sits, and His sitting is a declaration: it is finished. Nothing remains.',
        },
        {
          kind: 'commentary',
          id: 'consecrated-ever',
          html:
            'Consecrated for evermore. The old priests were anointed and ordained, but they aged, failed, died, and passed the office to their sons. Christ was consecrated—set apart and made perfect—eternally. His consecration does not fade. It cannot be revoked. It is forever.',
        },
        {
          kind: 'christ',
          id: 'christ-perfect-priest',
          title: 'Christ Connection — The Perfect Priest Forever',
          html:
            'Every strength of Christ&apos;s priesthood addresses a weakness of the old priesthood. The Levite was a sinner; Christ is holy. The Levite worked under the Law; Christ works by an oath. The Levite labored daily; Christ sacrificed once. The Levite died; Christ lives forever. You do not just have a priest—you have the priest against whom all other priests are only shadows.',
        },
        {
          kind: 'carry',
          html:
            'Stop trying to find a mediator other than Christ. Stop looking for spiritual authorities who might be closer to God than you. Stop accepting the notion that you need someone more holy to intercede. Christ is your priest. He is holy, harmless, undefiled. He is enough. More than enough. He is everything the old priesthood could never be.',
        },
        {
          kind: 'reflection',
          id: 'reflect-perfect-priest',
          prompt: 'Which aspect of Christ&apos;s priesthood—His holiness, His permanence, His once-and-for-all sacrifice—most changes how you approach Him in prayer today?',
        },
      ],
    },

    /* ─── Hebrews 7:1–10 (revisited) — Abraham&apos;s Recognition ───────────── */
    {
      ref: 'Hebrews 7:1–10 (cont.)',
      title: 'Abraham&apos;s Tithe and the Superiority of Melchisedec',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(4,
              t('Now '),
              hg('consider how great this man was', 'c-melch-greatness'),
              t(', unto whom even the patriarch Abraham gave the tenth of the spoils.'),
            ),
            verse(7,
              t('And without all contradiction the '),
              hp('less is blessed of the better', 'lesser-blessed-greater'),
              t('.'),
            ),
            verse(10,
              t('For he was yet in the loins of his father, when Melchisedec met him.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-melch-greatness',
          html:
            'The author builds the case through comparison. Abraham is the father of the nation, the friend of God, the man whose faith makes him the model for all believers. Yet he tithes to Melchisedec. If Abraham—the greatest figure in the OT narrative up to this point—recognizes Melchisedec&apos;s superiority through the tithe, how much greater must Melchisedec be?',
        },
        {
          kind: 'commentary',
          id: 'lesser-blessed-greater',
          html:
            'The principle is simple: when a lesser person is blessed by a greater, it demonstrates the greater&apos;s authority. Abraham received blessing from Melchisedec. That blessing is an act of authority. Blessing is something you give downward, not upward. Abraham&apos;s reception of blessing proves his subordinate position.',
        },
        {
          kind: 'commentary',
          id: 'c-melch-greatness-2',
          html:
            'The author is building an irrefutable logical case. Every line of evidence points the same direction: Melchisedec is great, greater than Abraham, greater than the Levitical system that will later arise from Abraham&apos;s descendants. And if Christ is a priest after Melchisedec&apos;s order, then Christ is necessarily greater than the entire Levitical system.',
        },
        {
          kind: 'divider',
        },
        {
          kind: 'artwork',
          matchArtist: /rembrandt|rubens|tissot|caravaggio/i,
          matchTitle: /blessing|communion|priest|offering/i,
          caption: 'Bread and Wine — The Priestly Blessing',
        },
      ],
    },

    /* ─── Conclusion — The Logic of Obsolescence ────────────────────────── */
    {
      ref: 'Hebrews 7 (overview)',
      title: 'Why the Old System Had to Go',
      blocks: [
        {
          kind: 'commentary',
          id: 'c-final-logic',
          html:
            'The author has built his case step by step. Scripture itself testifies to another priesthood. That priesthood is eternal, unchangeable, not grounded in human descent but in divine oath. It is necessarily superior to the Levitical system. If the old system were sufficient, a new one would not be needed. Yet Scripture prophesies a new one. Therefore, the old system was incomplete and is now obsolete. Not evil—just insufficient. Not wrong—just temporary. Its purpose was to point toward this eternal priesthood, and that purpose is fulfilled in Christ.',
        },
        {
          kind: 'carry',
          html:
            'You may feel like the Israelites felt: that you need a system, a law, a framework of rules to be acceptable to God. But Hebrews 7 is telling you that system is gone. It has been disannulled. Not because the law was wicked, but because something infinitely better has come. You have a priest now who does not operate by law. He operates by endless life, by eternal oath, by continual intercession. You are free to approach the throne not because you have earned it, but because He has made it accessible.',
        },
        {
          kind: 'reflection',
          id: 'reflect-system-freedom',
          prompt: 'What system or law are you still trying to fulfill to make yourself acceptable to God? What would it mean to truly leave that behind?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Hebrews 7',
    quote:
      'He is able also to save them to the uttermost that come unto God by him, seeing he ever liveth to make intercession for them. By so much was Jesus made a surety of a better testament.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Hebrews 7 · Study Guide',
  },

  hasHebrew: true,
};
