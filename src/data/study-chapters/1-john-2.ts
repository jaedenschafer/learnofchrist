import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * 1 John 2 — Advocate & Love
 *
 * If anyone sins, we have an advocate with the Father—Jesus Christ the righteous.
 * He is the propitiation for our sins, and not for ours only, but for the whole world.
 * The test of faith is obedience to His commandments. Love not the world, nor the things
 * in the world. The world passes away, but he that doeth the will of God abideth for ever.
 */
export const FIRST_JOHN_2: RichChapterContent = {
  bookSlug: '1-john',
  bookName: '1 John',
  chapter: 2,

  intros: [
    'John shifts from confession to comfort. We are not alone when we fall. We have an advocate—a lawyer, a defender—before the Father. That advocate is Jesus Christ, who is righteous and whose righteousness qualifies Him to represent us. His sacrifice has accomplished what no other offering could: He has become the payment for the sins of the world.',
    'John then poses a test of faith: do we keep His commandments? This is not legalism. It is the natural expression of love for Christ. Those who truly love Him will obey Him. And those who obey will discover that they no longer love the world. Their desires are reoriented toward what is eternal.',
  ],

  sections: [
    /* ─── 1 John 2:1 — If Any Man Sin, We Have an Advocate ─────────── */
    {
      ref: '1 John 2:1',
      title: 'If Any Man Sin, We Have an Advocate',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(1,
              t('My little children, these things write I unto you, that ye sin not. And if any man sin, we have '),
              t('an advocate with the Father'),
              t(', Jesus Christ the righteous:')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '1john2-advocate-intro',
          html:
            'John addresses believers as "little children"—a term of affection, not condescension. He is a shepherd watching over his flock, and his deepest desire is that they not sin. But he is also a realist. He knows that believers struggle, that we stumble, that failure comes. So he does not offer a path to sinlessness. He offers something better: a path to recovery.',
        },
        {
          kind: 'greek',
          id: '1john2-parakletos',
          title: 'Parakletos — Advocate',
          script: 'παράκλητος',
          translit: '<strong>Parakletos</strong> · advocate; helper; counselor; one called alongside to defend',
          description:
            'The Greek word parakletos means literally "one called alongside." In a courtroom, a parakletos is the lawyer who stands beside the defendant and argues his case. But here, He does not argue innocence. He argues on the basis of His own blood. He says to the Father: look at what I have done. This one is covered by My sacrifice.',
        },
        {
          kind: 'christ',
          id: '1john2-christ-advocate',
          title: 'Christ Connection — Jesus Christ the Righteous',
          html:
            'Only a righteous being can represent the guilty before a holy God. Jesus is that being. He has never sinned. He kept the whole law. His obedience is perfect. When He stands before the Father on your behalf, He stands as one who has fulfilled everything the law demands. His righteousness becomes the ground of your defense. You are justified not by your own goodness, but by His.',
        },
        {
          kind: 'carry',
          html:
            'When you sin—and you will—you do not need to hide. You do not need to perform extra works to earn back God&apos;s favor. You simply come back to the One who has already paid the price. Your Advocate is already there, already interceding, already presenting the case of your redemption. The recovery from sin is not a long climb back up the mountain. It is a simple turn back toward the One who never stopped loving you.',
        },
        {
          kind: 'reflection',
          id: '1john2-sin-advocate',
          prompt: 'What sin are you carrying shame about? What would change if you truly believed Jesus is before the Father right now, arguing your case?',
        },
      ],
    },

    /* ─── 1 John 2:2 — He Is the Propitiation for Our Sins ──────────── */
    {
      ref: '1 John 2:2',
      title: 'He Is the Propitiation for Our Sins',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(2,
              t('And he is '),
              t('the propitiation for our sins'),
              t(': and not for ours only, but also for the sins of the whole world.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '1john2-propitiation-meaning',
          html:
            'Propitiation is difficult language, but essential language. It means satisfaction. It means the removal of wrath through the offering of a perfect payment. In the Old Testament, the Day of Atonement centered on a mercy seat—the place where God&apos;s justice and mercy met. There, the High Priest would sprinkle blood. The wrath of God, which hung over the people, was turned aside because a substitutionary sacrifice had been made. Christ is our Propitiation. He is that sacrifice. He is the place where God&apos;s justice is satisfied and His mercy is poured out.',
        },
        {
          kind: 'greek',
          id: '1john2-hilasmos',
          title: 'Hilasmos — Propitiation',
          script: 'ἱλασμός',
          translit: '<strong>Hilasmos</strong> · propitiation; the payment that turns away wrath; the mercy seat made of flesh',
          description:
            'Hilasmos comes from the word for mercy seat—the golden cover on the Ark of the Covenant. Christ is the Propitiation; He is the mercy seat where God&apos;s justice is satisfied. His shed blood is the payment. His death absorbs what His holiness would otherwise demand.',
        },
        {
          kind: 'commentary',
          id: '1john2-whole-world',
          html:
            'Notice the scope: not for ours only, but for the sins of the whole world. This is not universalism—the idea that everyone will be saved. It is the declaration that Christ&apos;s sacrifice is sufficient for everyone. The payment has been made. The door is open. But each person must enter through faith. Yet the death of Christ stands as the proof that God loves the whole world, that His mercy reaches to every corner, that nobody is outside the scope of His desire to redeem.',
        },
        {
          kind: 'christ',
          id: '1john2-christ-payment',
          title: 'Christ Connection — The Sacrifice That Satisfies',
          html:
            'On the cross, Jesus became what the whole system of animal sacrifice was always pointing toward. The lamb of the Passover died and rose. The Day of Atonement lamb died to cover sins. But Christ did what no animal could: He rose from the dead, defeating not just the penalty of sin but the power of sin. He did not merely cover sin; He conquered it.',
        },
        {
          kind: 'carry',
          html:
            'The propitiation of Christ means that God&apos;s wrath has been satisfied on your behalf. You do not stand before God waiting for punishment. The punishment has already been executed—on Him. You stand covered by the finished work of the cross. This is not cheap grace; it cost everything. But it is grace nonetheless: freely given, not earned, received by faith alone.',
        },
        { kind: 'divider' },
      ],
    },

    /* ─── 1 John 2:3–4 — If We Keep His Commandments ────────────────── */
    {
      ref: '1 John 2:3–4',
      title: 'The Test: If We Keep His Commandments',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(3,
              t('And hereby we do know that we know him, if we '),
              t('keep his commandments'),
              t('.')
            ),
            verse(4,
              t('He that saith, I know him, and keepeth not his commandments, is a liar, and '),
              t('the truth is not in him'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '1john2-knowledge-test',
          html:
            'In the ancient world, to "know" someone meant more than information. It meant relationship. To know God is to be in covenant with Him, to experience His presence, to belong to Him. But John gives a test: how do you know you know Him? Not by feeling, not by profession, but by obedience. Real knowledge of Christ produces real change in behavior. If you claim to know Him but your life shows no evidence of that transformation, John calls you what it is: a liar.',
        },
        {
          kind: 'greek',
          id: '1john2-entole',
          title: 'Entolē — Commandment',
          script: 'ἐντολή',
          translit: '<strong>Entolē</strong> · commandment; instruction; what is commanded by authority',
          description:
            'Christ&apos;s commandments are not arbitrary rules. They flow from His character. To keep His commandments is to allow His life to shape your life, His values to reshape your values, His love to redirect your loves.',
        },
        {
          kind: 'christ',
          id: '1john2-christ-obedience',
          title: 'Christ Connection — Perfect Obedience',
          html:
            'Jesus obeyed the Father perfectly. Even in the garden, when He sweat blood, He said: "Nevertheless, not My will, but Thine be done." His entire life was a model of keeping commandments—not out of fear or obligation, but out of love. That same obedience becomes possible in us, not by our effort, but through the indwelling Spirit.',
        },
        {
          kind: 'carry',
          html:
            'This is not works-righteousness. It is the natural overflow of knowing Christ. When you are truly in relationship with Him, His commandments stop being burdensome rules and become invitations into life. You keep them not to earn His love, but because you already have it. The obedience proves the relationship. The fruit proves the root.',
        },
        {
          kind: 'reflection',
          id: '1john2-commandment-struggle',
          prompt: 'Which of Christ&apos;s commandments are you actually obeying? Which are you resisting? What does that resistance reveal about your knowledge of Him?',
        },
      ],
    },

    /* ─── 1 John 2:5–6 — Walk Even as He Walked ──────────────────── */
    {
      ref: '1 John 2:5–6',
      title: 'Walk Even as He Walked',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(5,
              t('But whoso keepeth his word, in him verily is '),
              t('the love of God perfected'),
              t(': hereby know we that we are in him.')
            ),
            verse(6,
              t('He that saith he abideth in him ought himself also so to '),
              t('walk, even as he walked'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '1john2-love-perfected-meaning',
          html:
            'The love of God is not yet "perfected" in you the first moment you believe. Rather, as you keep His word and walk in obedience, that love matures, deepens, becomes complete. It moves from initial experience toward transformation. The more you follow Him, the more you become like Him, the more His love—not your idea of love, but the divine love itself—works through you.',
        },
        {
          kind: 'commentary',
          id: '1john2-walk-meaning',
          html:
            'To "walk as He walked" is not to imitate His miracles or His unique mission, but to embody His character. How did He walk? In obedience to the Father. In sacrifice. In humility. In love toward the least and the lost. In refusal to let the world&apos;s systems dictate His values. That pattern is meant to become your pattern.',
        },
        {
          kind: 'christ',
          id: '1john2-christ-walked',
          title: 'Christ Connection — His Walk, Your Road',
          html:
            'Jesus walked a path of rejection, poverty, sacrifice, and death—yet also of power, victory, resurrection, and ascension. Following Him does not guarantee comfort. It guarantees purpose. It guarantees that your suffering, like His, means something eternal. It guarantees that what looks like loss in time becomes gain in eternity.',
        },
        {
          kind: 'carry',
          html:
            'You are not being asked to do what Jesus did—to save the world, to rise from the dead, to ascend to heaven. But you are being asked to walk as He walked: to lay down your life daily, to love enemies, to speak truth, to stay faithful when it costs, to believe that obedience to God matters more than comfort or approval. The shape of your days should echo the shape of His.',
        },
        { kind: 'divider' },
      ],
    },

    /* ─── 1 John 2:7–8 — Old Commandment, New Commandment ────────── */
    {
      ref: '1 John 2:7–8',
      title: 'An Old Commandment, Yet Ever New',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(7,
              t('Brethren, I write no new commandment unto you, but an '),
              t('old commandment which ye had from the beginning'),
              t(': the '),
              t('old commandment is the word which ye have heard'),
              t('.')
            ),
            verse(8,
              t('Again, a new commandment I write unto you, which thing is true in him and in you: because the darkness is passing away, and the true light now shineth.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '1john2-old-commandment',
          html:
            'The old commandment is to love—something believers heard from the beginning of their faith, something resonant all the way back to the Old Testament. But John then says He is writing a new commandment. The paradox is intentional. The commandment to love is ancient; yet in the light of Christ&apos;s example, it becomes new. The cross redefines love. The resurrection makes it possible. What the law could only demand, grace now enables.',
        },
        {
          kind: 'commentary',
          id: '1john2-darkness-light',
          html:
            'John frames the moment between the cross and the End as a time of transition. The darkness—the age of sin and death—is passing away. The light of Christ&apos;s redemption is already shining. Believers live in the overlap, able to see by both the fading darkness and the rising light. This is not mysticism. This is the already-and-not-yet reality of the gospel: already redeemed, not yet perfected; already in the light, not yet in glory.',
        },
        {
          kind: 'christ',
          id: '1john2-christ-light-new',
          title: 'Christ Connection — The True Light Revealing True Love',
          html:
            'Jesus said, "I am the light of the world." He said, "Love one another as I have loved you." Both commandments are fulfilled in Him. He is the light that shows us what love actually looks like—a willingness to die for those who reject Him, to absorb their guilt, to open the way home.',
        },
        {
          kind: 'carry',
          html:
            'The commandment you have always heard—love—is being lived out through you in a new way, in a new age. Because you live after the cross, because the resurrection has changed everything, your love can now participate in Christ&apos;s love. You are not returning to the Old Testament alone. You are walking in the light of the resurrection. That changes what obedience looks like.',
        },
        {
          kind: 'reflection',
          id: '1john2-new-old',
          prompt: 'Where are you being asked to love in a way that feels impossible? Where do you need the resurrection light to break into your darkness?',
        },
      ],
    },

    /* ─── 1 John 2:9–11 — He That Loveth His Brother Abideth in Light ─ */
    {
      ref: '1 John 2:9–11',
      title: 'He That Loveth His Brother Abideth in Light',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(9,
              t('He that saith he is in the light, and hateth his brother, is in darkness even until now.')
            ),
            verse(10,
              t('He that loveth his brother abideth in the light, and there is none occasion of stumbling in him.')
            ),
            verse(11,
              t('But he that hateth his brother is in darkness, and walketh in darkness, and knoweth not whither he goeth, because that darkness hath blinded his eyes.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '1john2-hatred-darkness',
          html:
            'John makes a stark claim: if you hate your brother, you are in darkness, regardless of what you claim. This is not a minor flaw in an otherwise sound faith. It is a sign that you have not actually met the light of Christ. For the light of Christ reveals our need, melts our hearts, and directs our love toward others. A person who truly knows that love cannot withhold it from those in God&apos;s family.',
        },
        {
          kind: 'commentary',
          id: '1john2-occasions-stumbling',
          html:
            'The person who loves his brother in the light does not stumble—does not lose his way. His feet are sure because his heart is aligned with Christ&apos;s. He is not confused about what matters; love clarifies everything. But the person in darkness stumbles, wanders, becomes lost. Hatred blinds you. It keeps you from seeing clearly, from moving confidently, from finding your way home.',
        },
        {
          kind: 'christ',
          id: '1john2-christ-enemy-love',
          title: 'Christ Connection — Love for Enemies',
          html:
            'Jesus loved His enemies. Even on the cross, He prayed forgiveness for them. Even before the cross, He ate with tax collectors, healed Romans, spoke kindly to the Samaritan woman. His love did not depend on whether the other person deserved it or returned it. It flowed from His identity as the Son of God.',
        },
        {
          kind: 'carry',
          html:
            'Your brother or sister in Christ is someone for whom Christ died. That alone should end the argument. Whatever they have done to you, whatever they owe you, whatever justice you feel they deserve—the cross has already settled it. When you choose to love them despite their failures, you are echoing the very love that saved you. You are living in the light.',
        },
        {
          kind: 'reflection',
          id: '1john2-brother-hate',
          prompt: 'Who in your faith community do you struggle to love? What would it look like to love them the way Christ loved you?',
        },
      ],
    },

    /* ─── 1 John 2:12–14 — Little Children, Fathers, Young Men ─────── */
    {
      ref: '1 John 2:12–14',
      title: 'Little Children, Fathers, Young Men',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(12,
              t('I write unto you, little children, because your sins are forgiven you for his name&apos;s sake.')
            ),
            verse(13,
              t('I write unto you, fathers, because ye have known him that is from the beginning. I write unto you, young men, because ye have overcome the wicked one. I write unto you, little children, because ye have known the Father.')
            ),
            verse(14,
              t('I have written unto you, fathers, because ye have known him that is of the beginning. I have written unto you, young men, because ye are strong, and the word of God abideth in you, and ye have overcome the wicked one.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '1john2-threefold-address',
          html:
            'John addresses the church in three stages of spiritual maturity. The little children—new believers—need to know that their sins are forgiven. The young men—those growing in strength and discernment—have the power to resist the enemy. The fathers—the mature and seasoned—carry the ancient knowledge of God. John repeats this structure twice, almost as a pastoral refrain. Each stage has a different need, yet all belong in the family.',
        },
        {
          kind: 'commentary',
          id: '1john2-overcome-wicked',
          html:
            'The young men have "overcome the wicked one"—they have stood against temptation and sin. This is not perfection, but victory. The world offers its systems, its seductions, its values. The young men in faith have tasted those offers and chosen something better. They have grown strong enough in Christ to say no. That strength is not their own; it is Christ&apos;s word abiding in them.',
        },
        {
          kind: 'christ',
          id: '1john2-christ-all-ages',
          title: 'Christ Connection — Christ in Every Season',
          html:
            'Jesus teaches the child to receive, the young man to resist, the father to lead. He meets each of us where we are. He does not demand maturity from infants in the faith. He does not coddle the strong. But He remains central at every stage. You grow toward Him. You rest in Him. You eventually teach others about Him.',
        },
        {
          kind: 'carry',
          html:
            'If you are a new believer, hear this: your sins are forgiven. All of them. You do not need to clean yourself up before coming to Jesus. You are clean already in Him. If you are young in the faith and beginning to taste real resistance, know this: you are strong enough. His word in you is more powerful than any temptation. If you are old in faith, know that your years of knowing Him matter. Your testimony is a gift to the next generation.',
        },
        { kind: 'divider' },
      ],
    },

    /* ─── 1 John 2:15–17 — Love Not the World ─────────────────────── */
    {
      ref: '1 John 2:15–17',
      title: 'Love Not the World',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(15,
              t('Love not the world, neither the things that are in the world. If any man love the world, '),
              t('the love of the Father is not in him'),
              t('.')
            ),
            verse(16,
              t('For all that is in the world, the '),
              t('lust of the flesh, and the lust of the eyes, and the pride of life'),
              t(', is not of the Father, but is of the world.')
            ),
            verse(17,
              t('And the world passeth away, and the lust thereof: but he that doeth the will of God abideth for ever.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '1john2-world-system',
          html:
            'When John says "the world," he does not mean the created world—God made that and called it good. He means the system of values and desires in rebellion against God. The world is not physical matter; it is a spiritual reality—the organized opposition to God&apos;s kingdom. When he says "love not the world," he is saying: do not embrace its values, do not let its seductions reshape your heart, do not make the world&apos;s definitions of success and fulfillment your own.',
        },
        {
          kind: 'greek',
          id: '1john2-kosmos',
          title: 'Kosmos — World',
          script: 'κόσμος',
          translit: '<strong>Kosmos</strong> · world; the system of values and desires opposed to God; organized rebellion against God&apos;s reign',
          description:
            'The world promises satisfaction through appetite, attraction, and achievement. It says: gratify yourself, acquire status, assert yourself. All three paths pull away from God and toward self. Yet they are seductive because they are not lies—they are half-truths. Food, beauty, and accomplishment are real goods. But they become corrupted when they replace God.',
        },
        {
          kind: 'commentary',
          id: '1john2-three-lusts-meaning',
          html:
            'The lust of the flesh is the craving for bodily gratification—not just sexual temptation, but all bodily indulgence without restraint. The lust of the eyes is status-seeking and materialism—the desire to own what others have, to display what sets you apart. The pride of life is arrogant self-assertion—the need to be right, to be in control, to be seen. Together, they cover the gamut of worldly temptation. They pull us away from dependence on God.',
        },
        {
          kind: 'christ',
          id: '1john2-christ-refused-world',
          title: 'Christ Connection — The Temptation He Refused',
          html:
            'In the wilderness, the Devil offered Jesus all three temptations: turn stones to bread (lust of flesh), all the kingdoms of the world (lust of eyes and pride of life). Jesus refused them all, not because they were not attractive, but because His hunger was for the Father&apos;s will. That is the pattern for believers: not asceticism, but reorientation. Your deepest appetite should be for God, not for what the world sells.',
        },
        {
          kind: 'carry',
          html:
            'This is not escapism. It is clarity. The world passes away. All that it offers—wealth, status, physical satisfaction—will burn up. But those who do the will of God abide forever. When you truly see that the world is temporary and eternity is real, your desires change. You stop mortgaging your soul for things that rust and fade. You invest in what lasts.',
        },
        {
          kind: 'reflection',
          id: '1john2-world-desire',
          prompt: 'Where are you tempted to love the world more than God? Which lust is calling you away from obedience?',
        },
      ],
    },

    /* ─── 1 John 2:18–20 — Antichrists & Unction from the Holy One ─── */
    {
      ref: '1 John 2:18–20',
      title: 'Unction from the Holy One',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(18,
              t('Little children, it is the last time: and as ye have heard that '),
              t('antichrist shall come'),
              t(', even now are there many antichrists; whereby we know that it is the last time.')
            ),
            verse(19,
              t('They went out from us, but they were not of us; for if they had been of us, they would no doubt have continued with us: but they went out, that they might be made manifest that they were not all of us.')
            ),
            verse(20,
              t('But ye have an '),
              hy('unction from the Holy One', '1john2-chrisma'),
              t(', and ye know all things.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '1john2-last-time',
          html:
            'We live in the last time—the age between the first coming of Christ and His return. During this age, false teachers will arise. They will offer alternatives to the gospel. They will claim to be the true voice of God. John calls them antichrists—not the final Antichrist, but many who oppose Christ&apos;s truth. They were once part of the community. They know the language. But their hearts are not aligned with Christ&apos;s. Eventually, they reveal themselves.',
        },
        {
          kind: 'greek',
          id: '1john2-antichristos',
          title: 'Antichristos — Antichrist',
          script: 'ἀντίχριστος',
          translit: '<strong>Antichristos</strong> · against-Christ; one opposed to Christ; one who opposes Christ&apos;s truth and rule',
          description:
            'Anti means "against" or "in place of." An antichrist is not simply an enemy of Christ, but one who offers a counter-gospel, a false way to salvation, a distortion of truth. In John&apos;s time, these were proto-Gnostics who denied that Christ came in the flesh. In every time, they deny some crucial aspect of Christ&apos;s work.',
        },
        {
          kind: 'commentary',
          id: '1john2-went-out',
          html:
            'The false teachers left the community—either by their own choice or by being confronted and cast out. This is instructive: those who do not belong to Christ will eventually separate. The test is not profession but continuance. Real faith endures. False faith, when pressure increases, abandons ship.',
        },
        {
          kind: 'greek',
          id: '1john2-chrisma',
          title: 'Chrisma — Unction; Anointing',
          script: 'χρίσμα',
          translit: '<strong>Chrisma</strong> · anointing oil; the anointing from the Holy Spirit; sanctifying presence and knowledge',
          description:
            'Believers have been anointed by the Holy Spirit. This anointing gives you discernment. It teaches you true doctrine. You have not been left defenseless against false teaching. The Spirit who dwells in you illuminates truth and exposes lies. You know all things—not as omniscience, but as the Spirit&apos;s illumination of what is true.',
        },
        {
          kind: 'christ',
          id: '1john2-christ-anointing',
          title: 'Christ Connection — The Anointed One',
          html:
            'Jesus Himself was anointed with the Holy Spirit at His baptism. The very word "Messiah" means "anointed." As the Father anointed Him for His work, so He has anointed believers through His Spirit. You carry the same anointing—not to save the world (that is His work), but to know truth, to walk in obedience, and to teach others.',
        },
        {
          kind: 'carry',
          html:
            'You do not need to be a theologian to discern truth. You do not need to be a scholar to recognize a lie. If you know Christ, the Holy Spirit in you makes you sensitive to what aligns with the gospel and what opposes it. Trust that sensitivity. When something feels off about a teaching, when a speaker contradicts what you know of Christ&apos;s character, listen to that inner caution. It is the anointing at work.',
        },
        {
          kind: 'reflection',
          id: '1john2-false-teaching',
          prompt: 'Where have you encountered teaching that denies or distorts Christ? How did you know it was wrong? What did that discernment feel like?',
        },
      ],
    },

    /* ─── 1 John 2:28 — Abide in Him; Have Confidence ────────────── */
    {
      ref: '1 John 2:28',
      title: 'Abide in Him; Have Confidence',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(28,
              t('And now, little children, '),
              t('abide in him'),
              t('; that, when he shall appear, we may have confidence, and not be ashamed before him at his coming.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: '1john2-abide-meaning',
          html:
            'To abide is to remain, to dwell, to make your home in. It is the opposite of the hollow profession or the wandering heart. John has tested believers through the whole chapter: Do you keep His commandments? Do you love your brothers? Do you discern false teaching? Now he calls them back to the foundation: abide in Him. Let Christ be the dwelling place of your soul. Root yourself in Him. Build your life upon Him.',
        },
        {
          kind: 'commentary',
          id: '1john2-his-coming',
          html:
            'John has in mind the parousia—the coming of Christ at the end of the age. When He appears, every hidden thing will be revealed. Every false profession will be exposed. Every heart will be made manifest. In that day, John says, you want to have confidence, not shame. That confidence comes not from perfection, but from genuine abiding. Those who truly dwell in Christ will not be afraid when He appears.',
        },
        {
          kind: 'greek',
          id: '1john2-parousia',
          title: 'Parousia — Coming; Presence',
          script: 'παρουσία',
          translit: '<strong>Parousia</strong> · coming; arrival; final presence; the return of Christ at the end of the age',
          description:
            'The parousia is not a secret rapture or a quiet return. It is the visible, glorious appearing of Christ. Every eye will see Him. Every ear will hear Him. The whole creation will be transformed. Those who have abided in Him will have boldness before Him.',
        },
        {
          kind: 'christ',
          id: '1john2-christ-appears',
          title: 'Christ Connection — His Appearing and Your Confidence',
          html:
            'Christ will return. Of this the Scripture is clear. And you can face that return with confidence if you are in Him. Not because you have earned it, not because you are sinless, but because you belong to Him and He belongs to you. Your abiding in Him guarantees your standing in that day.',
        },
        {
          kind: 'carry',
          html:
            'Live today as if you believed that Christ will come. How would you treat your spouse differently? How would you respond to the beggar, the difficult coworker, the person who has wronged you? The parousia is not a threat to those who abide in Christ; it is a hope. It clarifies what matters. It redirects your love toward eternity. When you live in light of His coming, everything else falls into proper perspective.',
        },
        {
          kind: 'reflection',
          id: '1john2-his-coming-reflect',
          prompt: 'When you imagine Christ appearing, what fills you with confidence? What causes shame? What needs to change in your abiding?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'If any man sin, we have an advocate with the Father, Jesus Christ the righteous. He is the propitiation for our sins. We know him if we keep his commandments. Love not the world. He that doeth the will of God abideth for ever.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 John 2 · Study Guide',
  },

  hasHebrew: false,
};
