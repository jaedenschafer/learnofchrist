import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 2 Peter 3 — The Day of the Lord
 *
 * Peter closes his epistle with an eschatological vision. Some will mock the
 * promise of Christ&apos;s return, claiming it has failed or will never happen.
 * But Peter insists: God operates on a different timescale. A thousand years
 * are as a day in His reckoning. His apparent delay is not weakness—it is
 * patience. He is giving all time to repent. When He comes, it will be sudden
 * and transformative. The heavens will be unmade. The earth will be burned up.
 * Yet this is not pointless destruction. It is preparation for new creation.
 * And believers are called to grow in grace and knowledge of Christ as they
 * wait for that day.
 */
export const SECOND_PETER_3: RichChapterContent = {
  bookSlug: '2-peter',
  bookName: '2 Peter',
  chapter: 3,

  estimatedMinutes: { beginner: 10, intermediate: 15, deep: 25 },
  intros: [
    'Peter closes his epistle by stirring up the pure mind of his beloved readers. Some will come in the last days mocking the promise of Christ&apos;s return. They walk after their own lusts and point to delay—centuries have passed, they say, and nothing has changed. Where is this promised coming? But Peter insists: God operates on an eternal timescale. A thousand years are as a day in His reckoning. His longsuffering is not slack indifference but merciful patience, giving all time to repent.',
    'When Christ comes, it will be like a thief in the night—sudden, unexpected, transformative. The heavens will pass away with a great noise. The elements will melt with fervent heat. The earth and all its works will be burned up. Yet this is not an ending but a beginning. God will bring forth new heavens and a new earth wherein dwells righteousness. This hope should shape how believers live now: with diligence, in peace, without spot, and in eager growth toward Christ.',
  ],

  opener: {
    matchTitle: /last day|judgment|fire/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share 2 Peter 3',
    quote:
      'Scoffers will mock the promise of Christ&apos;s return. But the Lord is not slack concerning His promise. One day is with the Lord as a thousand years. When He comes, it will be as a thief in the night. We look for new heavens and new earth wherein dwelleth righteousness. Grow in grace and in the knowledge of Jesus Christ.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Peter 3 · Study Guide',
  },

  sections: [
    /* ─── 2 Peter 3:1–3 — Scoffers in the Last Days ────────────────────── */
    {
      ref: '2 Peter 3:1–3',
      title: 'Scoffers in the Last Days',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              1,
              t('This second epistle now, beloved, I write unto you; in both which I stir up your pure mind by way of remembrance;')
            ),
            verse(
              2,
              t('That ye may be mindful of the words which were spoken before by the holy prophets, and of the commandment of us the apostles of the Lord and Saviour:')
            ),
            verse(
              3,
              t('Knowing this first, that there shall come in the last days '),
              hy('scoffers', 'empaiktai'),
              t(', walking after their own lusts;')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'scoffers-intro',
          html:
            'Peter opens by reminding his readers of what they already know. He is not bringing new doctrine but stirring up the old. The prophets spoke it. The apostles taught it. And now Peter emphasizes a sign of the end times: scoffers will come. Not all will turn away. Some will mock the faith, the promise, the very hope that holds the church together.',
        },
        {
          kind: 'greek',
          id: 'empaiktai',
          title: 'Empaiktes — Scoffers',
          script: 'ἐμπαῖκτης',
          translit: '<strong>empaiktes</strong> · mocker; one who ridicules or jeers',
          description:
            'The scoffer does not argue rationally or debate theology. He ridicules. He jeers. He dismisses the promise of Christ&apos;s return not through intellectual refutation but through mockery. This kind of opposition is not won through argument but through steadfastness and faith.',
        },
        {
          kind: 'commentary',
          id: 'walking-after-lusts',
          html:
            'The scoffers are not merely skeptics. They are those who walk after their own lusts. Their opposition to the promise of Christ&apos;s return is rooted in their desire to live without accountability, without judgment. If Christ never comes, there is no final reckoning. They can pursue their desires unchecked. The mocking is defense of a way of life.',
        },
        {
          kind: 'carry',
          html:
            'Mockery is a powerful tool because it does not require argument. A scoff can silence more than logic can answer. In your own day, you may meet with scoffing—at prayer, at faith, at the hope of Christ&apos;s coming. The response is not to match mockery with mockery but to hold fast to what the prophets and apostles have spoken. Truth does not depend on who believes it.',
        },
        {
          kind: 'reflection',
          id: 'scoffers-reflect',
          prompt:
            'What promises of Christ do you sometimes doubt? What would strengthen your faith when you hear them mocked or dismissed?',
        },
      ],
    },

    /* ─── 2 Peter 3:4 — Where Is the Promise of His Coming? ──────────────── */
    {
      ref: '2 Peter 3:4',
      title: 'Where Is the Promise of His Coming?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              4,
              t('And saying, Where is the '),
              hp('promise of his coming', 'parousia'),
              t('? for since the fathers fell asleep, all things continue as they were from the beginning of the creation.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'centuries-passed',
          html:
            'The scoffers point to a historical fact: centuries have passed since Christ ascended into heaven, and He has not yet returned. The fathers—the generation of believers before them—fell asleep in death, and the world remained unchanged. No cosmic upheaval. No return of the King. Where is this promise? To the scoffer, the delay is evidence of failure.',
        },
        {
          kind: 'greek',
          id: 'parousia',
          title: 'Parousia — Coming',
          script: 'παρουσία',
          translit: '<strong>parousia</strong> · presence; coming; personal arrival',
          description:
            'Parousia originally meant the official visit of a king or dignitary. In the New Testament, it refers specifically to the second coming of Christ. It is not merely a spiritual event but a personal, bodily, visible arrival. The scoffers deny that this parousia will ever occur.',
        },
        {
          kind: 'christ',
          id: 'christ-coming',
          title: 'Christ Connection — He Will Come Again',
          html:
            'At the Last Supper, Jesus said, "If I go and prepare a place for you, I will come again" (John 14:3). To His disciples He promised: "You will see the Son of Man sitting at the right hand of power and coming on the clouds of heaven" (Matt. 26:64). The promise is personal. The coming is real. Not some invisible spiritual event, but His visible arrival.',
        },
        {
          kind: 'carry',
          html:
            'When the world seems unchanged for years—when prayers go unanswered, when promised deliverance is delayed, when the faithful seem to die without seeing the promise—doubt can whisper its accusations. Is He really coming? Is this real? The answer is not in what the world looks like, but in what Christ has spoken. His word does not fail because we do not yet see its fulfillment.',
        },
        {
          kind: 'reflection',
          id: 'promise-reflect',
          prompt:
            'Where in your faith do you feel the "delay"? What would it mean to trust the promise even while waiting?',
        },
      ],
    },

    /* ─── 2 Peter 3:5–7 — The Flood of Noah ──────────────────────────────── */
    {
      ref: '2 Peter 3:5–7',
      title: 'The Flood of Noah',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              5,
              t('For this they '),
              hy('willingly are ignorant of', 'lanthano'),
              t(', that by the word of God the heavens were of old, and the earth standing out of the water and in the water:')
            ),
            verse(
              6,
              t('Whereby the world that then was, being overflowed with water, perished;')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'willful-ignorance',
          html:
            'The scoffers choose not to remember. Peter says they "willingly are ignorant"—they have access to the memory and the meaning of the flood, but they reject it. Why? Because the flood is a prophecy of judgment. It shows that God once destroyed the world for its wickedness, and this pattern is not unique. What happened before will happen again.',
        },
        {
          kind: 'greek',
          id: 'lanthano',
          title: 'Lanthanō — To Forget; To Be Ignorant',
          script: 'λανθάνω',
          translit: '<strong>lanthanō</strong> · to escape notice; to be forgotten; to ignore willingly',
          description:
            'The word suggests not accidental forgetting but deliberate blindness. The scoffers have the witness of Noah&apos;s flood. They know the story. But they choose to ignore its meaning: that God judges the world, and judgment comes suddenly.',
        },
        {
          kind: 'commentary',
          id: 'flood-pattern',
          html:
            'The flood is a historical fact. The earth was formed by God&apos;s word. It stood out of the water and was surrounded by water. Then, judgment came in the form of an overwhelming flood. Everything perished—all flesh, all the world as it had been. And yet, the earth was not annihilated. It persisted, renewed. This pattern matters: judgment does not mean the end of all things, but the end of one world and the beginning of another.',
        },
        {
          kind: 'carry',
          html:
            'The flood is written into your world. It is not just ancient history. It is a template God inscribed into creation itself: that judgment is real, that it comes when it comes, and that what survives judgment is what is built on God&apos;s word, not on human wickedness. Every time you see water, every time you hear the flood story, you are being reminded.',
        },
        {
          kind: 'reflection',
          id: 'flood-reflect',
          prompt:
            'What did the flood reveal about God? What does that revelation mean for you in facing the final judgment?',
        },
      ],
    },

    /* ─── 2 Peter 3:7–9 — The Heavens and Earth Reserved unto Fire ────────── */
    {
      ref: '2 Peter 3:7–9',
      title: 'The Heavens and Earth Reserved unto Fire',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              7,
              t('But the heavens and the earth, which are now, by the same word are '),
              hy('kept in store, reserved unto fire', 'tethesaurizo'),
              t(' against the day of judgment and perdition of ungodly men.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'reserved-for-fire',
          html:
            'Peter shifts from past to future. Just as the word of God formed the earth and brought the flood, so that same word holds the present heavens and earth in reserve for a future day. But the instrument this time is not water but fire. The judgment will be more final than the flood. Not renewal, but burning up.',
        },
        {
          kind: 'greek',
          id: 'tethesaurizo',
          title: 'Thēsaurizō — To Store Up; To Keep in Reserve',
          script: 'θησαυρίζω',
          translit: '<strong>thēsaurizō</strong> · to store; to preserve; to hold in reserve for future use',
          description:
            'The earth is not abandoned or left to its own devices. It is actively preserved, kept, held in reserve by God. Every moment, every atom is held in place by the word that speaks it. And that same word that preserves it will, at the appointed time, consume it with fire.',
        },
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              8,
              t('But, beloved, be not ignorant of this one thing, that '),
              hg('one day is with the Lord as a thousand years, and a thousand years as one day', 'makrothumia'),
              t('.')
            ),
            verse(
              9,
              t('The Lord is not slack concerning his promise, as some men count slackness; but is '),
              hy('longsuffering', 'makrothumia'),
              t(' to us-ward, '),
              hp('not willing that any should perish, but that all should come to repentance', 'christ-longsuffering'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'thousand-years',
          html:
            'Peter now answers the scoffers. Why has two thousand years passed without Christ&apos;s return? Because God operates on a different timescale. To Him, a thousand years are as a day, and a day is as a thousand years. The delay, from human perspective, is not a failure but a mercy. Every year that passes is, in eternity, barely a breath.',
        },
        {
          kind: 'greek',
          id: 'makrothumia',
          title: 'Makrothymia — Longsuffering',
          script: 'μακροθυμία',
          translit: '<strong>makrothymia</strong> · patience; forbearance; longsuffering; endurance',
          description:
            'Makrothymia means long patience—the ability to endure and remain kind over a long time. God&apos;s patience is not passive waiting. It is active mercy, extending time so that more can repent. The delay is an expression of His character.',
        },
        {
          kind: 'christ',
          id: 'christ-longsuffering',
          title: 'Christ Connection — The Mercy of Delay',
          html:
            'Jesus came the first time as the mercy window. His patience was set forth before the foundation of the world (Rev. 13:8). Every moment since then—every day you wake up, every year the gospel is preached—is an extension of that same patience. His delay is His love. He is not willing that any perish, but longs for all to come to repentance. That longsuffering holds back judgment and opens the door to salvation.',
        },
        {
          kind: 'carry',
          html:
            'If God has not yet returned, it is not because He has failed. It is because He is patient. And that patience is an offer to you and everyone around you. There is still time to repent, still time to turn, still time to believe. But the time is not infinite. The day is kept in reserve. The fire is prepared. Live with gratitude for each day you are given.',
        },
        {
          kind: 'reflection',
          id: 'longsuffering-reflect',
          prompt:
            'How does knowing that God&apos;s delay is an expression of mercy change the way you think about unanswered prayers or postponed promises?',
        },
      ],
    },

    /* ─── 2 Peter 3:10 — The Day of the Lord Will Come as a Thief ──────────── */
    {
      ref: '2 Peter 3:10',
      title: 'The Day of the Lord Will Come as a Thief',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              10,
              t('But the day of the Lord will come as '),
              hp('a thief in the night', 'thief-coming'),
              t('; in the which the heavens shall '),
              hy('pass away with a great noise', 'rhēngnumi'),
              t(', and the elements shall '),
              hy('melt with fervent heat', 'luo'),
              t(', the earth also and the works that are therein shall be burned up.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'thief-in-night',
          html:
            'The day will come suddenly. Unexpectedly. No one will announce it. No countdown will warn you. A thief breaks in when you are not watching, when you do not expect it. So will Christ come. Not at a time the world expects. Not at a time the church has calculated. But in His hour, when the time is fulfilled.',
        },
        {
          kind: 'greek',
          id: 'rhēngnumi',
          title: 'Rhēgnymi — Pass Away; Break With Noise',
          script: 'ῥήγνυμι',
          translit: '<strong>rhēgnymi</strong> · to break; to tear; to pass away with a crash or noise',
          description:
            'The heavens will not quietly dissolve. They will pass away with a great noise—a tearing, a breaking, a catastrophic sound. The silence of the ages will shatter. What holds now will let loose.',
        },
        {
          kind: 'greek',
          id: 'luo',
          title: 'Luō — Melt; Dissolve',
          script: 'λύω',
          translit: '<strong>luō</strong> · to loose; to dissolve; to break up; to melt',
          description:
            'The elements will melt as if under intense heat. The very fabric of the physical world—what seems permanent and unchanging—will dissolve. All the works of human hands built upon the earth will be burned up, consumed, erased.',
        },
        {
          kind: 'christ',
          id: 'thief-coming',
          title: 'Christ Connection — He Comes as a Thief',
          html:
            'Jesus Himself said, "If you had known what hour the thief was coming, you would have kept watch" (Matt. 24:43). Paul echoed it: "The day of the Lord so comes as a thief in the night" (1 Thess. 5:2). Revelation reiterates it: "Behold, I come as a thief" (Rev. 16:15). The promise is consistent across the New Testament. His coming will be sudden, certain, and transformative. The watching church will not be caught unaware, but the world will be.',
        },
        {
          kind: 'carry',
          html:
            'In a world that loves predictability and control, the sudden return of Christ is unwelcome news. But for the faithful, it is a call to sobriety. To hold things loosely. To not build your heart into works that will burn. To fix your affection on what is eternal. The noise of the heavens breaking is not something to fear if your trust is in Him.',
        },
        {
          kind: 'reflection',
          id: 'thief-reflect',
          prompt:
            'What in your life would be destroyed if Christ returned today? What would remain? What does that tell you about where your heart is?',
        },
      ],
    },

    /* ─── 2 Peter 3:11–13 — Looking for and Hasting unto the Coming ────────── */
    {
      ref: '2 Peter 3:11–13',
      title: 'Looking for and Hasting unto the Coming',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              11,
              t('Seeing then that all these things shall be dissolved, '),
              hg('what manner of persons ought ye to be', 'anastrophē'),
              t(' in all holy conversation and godliness,')
            ),
            verse(
              12,
              t('Looking for and '),
              hy('hasting unto', 'speuō'),
              t(' the coming of the day of God, wherein the heavens being on fire shall be dissolved, and the elements shall melt with fervent heat?')
            ),
            verse(
              13,
              t('Nevertheless we, according to his promise, look for '),
              hp('new heavens and a new earth', 'christ-renewal'),
              t(', wherein dwelleth righteousness.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'dissolve-manner',
          html:
            'If all things—every work, every achievement, every monument we build—will be burned up, then the question becomes urgent: what manner of persons should we be? How should you live when you know that everything built on this earth will perish? The answer is: with holy conversation and godliness. With a manner of life that reflects not what passes away but what remains.',
        },
        {
          kind: 'greek',
          id: 'anastrophē',
          title: 'Anastrophē — Manner of Life; Conduct',
          script: 'ἀναστροφή',
          translit: '<strong>anastrophē</strong> · conduct; manner of life; behavior; conversation',
          description:
            'Anastrophē refers to the whole pattern of how you live—not just your words but your deeds, your choices, your character as it is visible in the world. The question is not "what do you believe?" but "how do you live?" The two are inseparable.',
        },
        {
          kind: 'greek',
          id: 'speuō',
          title: 'Speuō — To Hasten; To Make Haste',
          script: 'σπεύω',
          translit: '<strong>speuō</strong> · to hasten; to hurry; to be eager; to strive toward',
          description:
            'To hasten toward the day of God is not passive waiting but active longing. It is to live with eagerness, with readiness, with the knowledge that you are moving toward a day you love and long for. The word suggests not merely acceptance but anticipation.',
        },
        {
          kind: 'commentary',
          id: 'new-creation',
          html:
            'And yet—and this is crucial—the ending is not destruction but renewal. Not annihilation but transformation. New heavens and new earth wherein dwells righteousness. The old order passes away, but what is eternal, what is righteous, what is of God, abides. A new creation emerges. Not less real, not merely spiritual, but more real, more solid, than what we see now.',
        },
        {
          kind: 'christ',
          id: 'christ-renewal',
          title: 'Christ Connection — All Things New',
          html:
            'John saw it: "And I saw a new heaven and a new earth… And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away. And he that sat upon the throne said, Behold, I make all things new" (Rev. 21:1, 4–5). Christ does not destroy creation. He renews it. His redemption is not escape but restoration.',
        },
        {
          kind: 'carry',
          html:
            'The promise of new heavens and new earth is not an escape clause. It is a revelation of God&apos;s heart. He does not abandon the created order. He renews it. And that same renewal is available to you now. Whatever has been broken in your own story—your heart, your trust, your sense of home—Christ offers not destruction of it but restoration. New, not gone. Redeemed, not abandoned.',
        },
        {
          kind: 'reflection',
          id: 'new-earth-reflect',
          prompt:
            'What do you think righteousness will look like when it fully dwells in all things? How should that hope shape the way you pursue justice and mercy now?',
        },
      ],
    },

    /* ─── 2 Peter 3:14–15a — Even as Our Beloved Brother Paul ─────────────── */
    {
      ref: '2 Peter 3:14–15',
      title: 'Even as Our Beloved Brother Paul',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              14,
              t('Wherefore, beloved, seeing that ye look for such things, be '),
              hy('diligent', 'spoude'),
              t(' that ye may be found of him in peace, '),
              hg('without spot, and blameless', 'aspilos'),
              t('.')
            ),
            verse(
              15,
              t('And account that the longsuffering of our Lord is salvation; even as our '),
              hp('beloved brother Paul', 'paul-connection'),
              t(' also according to the wisdom given unto him hath written unto you;')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'diligent-found',
          html:
            'Looking for the coming of the day of God should produce diligence. Not frantic busywork, but steady, purposeful effort. To be found of Him in peace, without spot, and blameless. Not perfection—no one achieves that—but a life marked by intentionality toward holiness. A life in which you are actively working toward being found ready.',
        },
        {
          kind: 'greek',
          id: 'spoude',
          title: 'Spoudē — Diligence; Earnestness',
          script: 'σπουδή',
          translit: '<strong>spoudē</strong> · diligence; earnestness; haste; eagerness; care',
          description:
            'Spoudē is serious effort, given with care and attention. Not lazy hope, but active vigilance. Not passive waiting, but a kind of disciplined eagerness. It is the opposite of spiritual sloth.',
        },
        {
          kind: 'greek',
          id: 'aspilos',
          title: 'Aspilos — Without Spot; Unblemished',
          script: 'ἄσπιλος',
          translit: '<strong>aspilos</strong> · without spot; unblemished; undefiled; spotless',
          description:
            'Aspilos was used of sacrificial animals without blemish. To be without spot is to be clean, untainted by the corruptions of this world. It does not mean perfection but wholehearted allegiance to Christ over the stains of sin.',
        },
        {
          kind: 'commentary',
          id: 'paul-salute',
          html:
            'And here, remarkably, Peter salutes Paul. "Even as our beloved brother Paul." Two apostles who had their conflicts (Gal. 2:11–14) are now united in the faith. Paul has written to these same believers, and Peter affirms Paul&apos;s teaching. The wisdom given to Paul is recognized and honored. There is a profound unity here beneath the surface.',
        },
        {
          kind: 'christ',
          id: 'paul-connection',
          title: 'Christ Connection — United in Him',
          html:
            'Peter and Paul, once at odds, are now brothers united by Christ. Paul wrote of salvation and grace; Peter affirms it. Paul wrote to these same churches; Peter endorses his teaching. This is the body of Christ—not uniformity but unity, not perfect agreement on methods but agreement on the essentials. And all of it flows from the wisdom Christ gives.',
        },
        {
          kind: 'carry',
          html:
            'The longsuffering of the Lord is salvation. Every moment you breathe, every chance to repent, every prayer answered or unanswered, every delay in His coming—it is all part of His merciful work. And the apostles—Peter, Paul, James, John—all testify to the same Christ. Their witness is not divided but united. You are not following a private interpretation of faith but an apostolic, historical, united testimony.',
        },
        {
          kind: 'reflection',
          id: 'paul-reflect',
          prompt:
            'How does it comfort you to know that the apostles, though imperfect, all pointed to the same Christ? What does their unity teach you?',
        },
      ],
    },

    /* ─── 2 Peter 3:15c–17 — Things Hard to Understand ────────────────────── */
    {
      ref: '2 Peter 3:15c–17',
      title: 'Things Hard to Be Understood',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              15,
              t('As also in all his epistle, speaking in them of these things; in which are some things '),
              hy('hard to be understood', 'dusnoētos'),
              t(', which they that are unlearned and unstable '),
              hy('wrest', 'strebloō'),
              t(', as they do also the other scriptures, unto their own destruction.')
            ),
            verse(
              16,
              t('Ye therefore, beloved, knowing these things before, beware lest ye also, being led away with the error of the wicked, fall from your own stedfastness.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'hard-passages',
          html:
            'Paul&apos;s letters contain deep things—theology that requires thought, patience, and humility to understand. And there are always those who are unlearned and unstable who will twist Paul&apos;s words to justify whatever they wish. They will wrench meaning out of context, distort grace into license, and use Scripture against itself.',
        },
        {
          kind: 'greek',
          id: 'dusnoētos',
          title: 'Dusnoētos — Hard to Understand',
          script: 'δυσνόητος',
          translit: '<strong>dusnoētos</strong> · hard to understand; difficult to comprehend',
          description:
            'The prefix dus- means "hard" or "bad." Noētos comes from noēs, "mind." Together, they mean something that resists easy understanding. Scripture is not all simple. Some of it requires meditation, humility, and the Holy Spirit to grasp.',
        },
        {
          kind: 'greek',
          id: 'strebloō',
          title: 'Strebloō — To Wrest; To Twist',
          script: 'στρεβλόω',
          translit: '<strong>strebloō</strong> · to twist; to wrench; to wrest; to turn from its natural meaning',
          description:
            'Strebloō means to twist something out of shape, as you might wring a cloth. To take Scripture and bend it to your own desires, disconnecting it from its true meaning. The heretic does not merely misunderstand; he actively twists.',
        },
        {
          kind: 'commentary',
          id: 'beware-error',
          html:
            'Peter warns his beloved readers: beware that you do not fall from your own stedfastness by following the error of the wicked. Be discerning. Test what you hear against the whole counsel of Scripture. Do not be swayed by clever twisting of words. Hold fast to what you know to be true.',
        },
        {
          kind: 'carry',
          html:
            'In your own day, there are always voices twisting Scripture, using God&apos;s word against God&apos;s purposes. Some preach a false grace that licenses sin. Some twist passages about patience into permission for injustice. Some use Scripture to build their own kingdoms rather than God&apos;s. Your protection is steadfastness—a fixed anchor in the apostolic faith, tested by the whole body of Scripture, confirmed by the Holy Spirit.',
        },
        {
          kind: 'reflection',
          id: 'twist-reflect',
          prompt:
            'Where have you heard Scripture twisted to justify something you sense is wrong? How can you develop steadfastness against such deception?',
        },
      ],
    },

    /* ─── 2 Peter 3:18 — Grow in Grace and Knowledge ───────────────────────── */
    {
      ref: '2 Peter 3:18',
      title: 'Grow in Grace, and in the Knowledge of Our Lord and Saviour Jesus Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            verse(
              18,
              t('But '),
              hp('grow in grace', 'auxanō'),
              t(', and in the '),
              hy('knowledge', 'epignōsis'),
              t(' of our Lord and Saviour Jesus Christ. To him be glory both now and for ever. Amen.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'closing-exhortation',
          html:
            'Peter closes not with doctrine but with an exhortation. Grow. Not arrive. Not claim mastery. But grow. Grace is not static; it is a living, flowing thing. And knowledge of Christ is not intellectual accumulation but deepening relationship—knowing Him more intimately, more fully, more truly.',
        },
        {
          kind: 'greek',
          id: 'auxanō',
          title: 'Auxanō — To Grow; To Increase',
          script: 'αὐξάνω',
          translit: '<strong>auxanō</strong> · to grow; to increase; to become larger; to develop',
          description:
            'Growth is organic, not mechanical. Like a plant that grows toward the light, believers grow toward Christ. It is not by effort alone but by the life of Christ flowing through you. Yet you participate in the growth by submitting to it, by receiving it, by turning toward it.',
        },
        {
          kind: 'greek',
          id: 'epignōsis',
          title: 'Epignōsis — Knowledge',
          script: 'ἐπίγνωσις',
          translit: '<strong>epignōsis</strong> · knowledge; full knowledge; recognition; intimate acquaintance',
          description:
            'Epignōsis is not mere information about Christ (gnōsis), but full, intimate knowledge (epignōsis)—knowing His character, His heart, His ways. It is the difference between reading about someone and being their friend.',
        },
        {
          kind: 'christ',
          id: 'know-christ',
          title: 'Christ Connection — To Know Him',
          html:
            'Paul wrote, "That I may know him, and the power of his resurrection, and the fellowship of his sufferings, being made conformable unto his death" (Phil. 3:10). To know Christ is not to know about Him, but to know Him—to be joined to Him, to walk with Him, to be transformed by Him. This is the highest calling: to grow in the knowledge of the One who made you, redeemed you, and will come for you.',
        },
        {
          kind: 'carry',
          html:
            'Peter&apos;s final word is not judgment but growth. Not condemnation but hope. Not fear but love. You are invited to grow in grace—to receive more of God&apos;s unmerited favor, His kindness, His patience. And as you grow, you will know Christ better. His glory will become more visible to you. His presence more real. Your heart more fixed on Him. This is the call: to grow. To keep growing. To grow until the day you see Him and know Him fully.',
        },
        {
          kind: 'reflection',
          id: 'grow-reflect',
          prompt:
            'In what area of your faith do you most want to grow? What would it look like to give yourself to that growth—not by striving, but by opening yourself to Christ?',
        },
      ],
    },

    /* ─── 2 Peter 3:18 (final) — To Him Be Glory ──────────────────────────── */
    {
      ref: '2 Peter 3:18 · Doxology',
      title: 'To Him Be Glory Both Now and for Ever',
      blocks: [
        {
          kind: 'commentary',
          id: 'doxology',
          html:
            'The epistle closes with doxology—glory ascribed to Christ. Not a demand for His attention, not a request for favor, but a declaration of who He is. All glory. Both now and for ever. Present and eternal. This is the response of faith: to see Christ in His majesty and to worship. Everything Peter has written—the warning about scoffers, the vision of the day of the Lord, the call to grow in grace—all of it flows from and returns to this: Christ is worthy. He is glorious. He deserves all worship, all honor, all adoration, all time.',
        },
        {
          kind: 'carry',
          html:
            'Close your eyes and picture the future that Peter has described. The heavens breaking with a great noise. The elements melting with heat. The earth burning. And in the midst of it all, Christ coming. Not to destroy but to renew. To bring forth new heavens and new earth wherein dwells righteousness. And your own heart, made righteous, at home in righteousness. That day is coming. Not because the world is becoming more godly—it is not. But because Christ is faithful. Because His word stands. Because He will finish what He began. To Him be glory. Now. For ever. Amen.',
        },
      ],
    },
  ],

  hasHebrew: false,
};
