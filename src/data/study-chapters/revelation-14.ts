import { hp, hy, hg, t, verse, plain, type RichChapterContent } from './types';

/**
 * Revelation 14 — The Lamb on Mount Zion and the Harvest
 *
 * The vision shifts to a still center: the Lamb stands on Mount Zion with the 144,000—
 * the redeemed, marked with His Father&apos;s name, singing a new song no one else can learn.
 * Three angels fly through the heavens: one proclaiming the everlasting gospel to every nation,
 * one announcing that Babylon has fallen, one warning of judgment upon those who bear the beast&apos;s mark.
 * Then the Son of Man appears with a sharp sickle. The harvest of the earth is ripe.
 * He reaps. Another angel gathers the vintage—the grapes of wrath—and treads the winepress.
 */
export const REVELATION_14: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 14,

  estimatedMinutes: { beginner: 9, intermediate: 18, deep: 23 },
  intros: [
    'Revelation 14 stands like a still center between the chaos of the beasts and the final pouring out of bowls. The Lamb is on Mount Zion. The 144,000—the sealed, the faithful, the overcomers—stand with Him, marked not with the beast&apos;s mark but with His Father&apos;s name. They are already secure while the world still reels.',
    'Then comes the proclamation. Three angels cry out across the heavens: the gospel is eternal; Babylon will fall; judgment comes for those who worship the beast. The message is clear: choose your allegiance now. The time of mercy is waning. The harvest is ripe. The Son of Man holds the sickle.',
    'This chapter is a hinge. It assures the faithful—you are sealed, you are seen, your song is sung—even as it warns the faithless. The harvest will come. Every seed sown will be reaped.',
  ],

  opener: {
    matchTitle: /(?:lamb|mount|zion|harvest|sickle|reap)/i,
    matchArtist: /(?:tissot|gustave|doré|raphael)/i,
    caption: 'The Lamb on Mount Zion with the 144,000',
  },

  sections: [
    /* ─── Revelation 14:1–2 — The Lamb on Mount Sion ─────────────────────── */
    {
      ref: 'Revelation 14:1–2',
      title: 'The Lamb on Mount Sion',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            verse(
              1,
              t('And I looked, and, lo, a '),
              hp('Lamb stood on the mount Sion', 'rev14-lamb-zion'),
              t(', and with him an hundred forty and four thousand, having his '),
              hy('Father&apos;s name written in their foreheads', 'rev14-name-foreheads'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev14-lamb-zion',
          html:
            'Mount Zion is the holy mountain, God&apos;s seat, the place of His kingdom. The Lamb stands there not in future promise but as a present reality in the vision. The 144,000—those sealed in chapters 7—stand with Him. While the world writhes under the rule of beasts, the redeemed are secure on Zion with their Redeemer. This is their anchor: the Lamb is there, and they are with Him.',
        },
        {
          kind: 'commentary',
          id: 'rev14-name-foreheads',
          html:
            'In Revelation 13, the beast&apos;s mark is placed on foreheads and hands—the mark of loyalty, of allegiance to the unholy power. Here, the redeemed bear a different mark: the Father&apos;s name. Not the beast&apos;s brand, but God&apos;s seal. Written on the forehead where all can see it. The mark proclaims ownership. These belong to God. They have been bought at a price and bear the insignia of their Redeemer.',
        },
        {
          kind: 'greek',
          id: 'rev14-arnion',
          title: 'Arnion — Lamb',
          script: 'ἀρνίον',
          translit: '<strong>arnion</strong> · a lamb; a small sheep; the Lamb (of Christ)',
          description:
            'Arnion appears twenty-nine times in Revelation, always referring to Jesus. It is the only title for Christ in the entire book. Not King, not Lord, not Judge—the Lamb. The word emphasizes His role as sacrifice. The One slain at Passover; the One who bore the world&apos;s sin; the One before whom creation bows.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            verse(
              2,
              t('And I heard a voice from heaven, as the voice of '),
              hg('many waters', 'rev14-many-waters'),
              t(', and as the voice of a great thunder: and I heard the voice of '),
              hg('harpers harping with their harps', 'rev14-harpers'),
              t(':')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev14-many-waters',
          html:
            'The voice from heaven is massive, overwhelming—like the roar of many waters. This is the voice John has already heard: "His voice as the sound of many waters" (1:15). It is the voice of God, the voice of Christ, filling all heaven. It speaks of power, of fullness, of authority that cannot be contested.',
        },
        {
          kind: 'commentary',
          id: 'rev14-harpers',
          html:
            'Harpers in heaven. Music. Worship. The scene is filled not with conflict but with adoration. The harp is the instrument of David, of the psalmist, of praise. Even while the world below tears itself apart under the rule of beasts, heaven sings. The redeemed sing. The Lamb receives their worship.',
        },
        {
          kind: 'christ',
          id: 'rev14-christ-lamb-zion',
          title: 'Christ Connection — The Lamb on the Holy Mountain',
          html:
            'Christ is the Lamb on Zion. This echoes Isaiah 29:8: "And the multitude of all the nations that fight against Ariel, even all that fight against her and her munition, and that distress her, shall be as a dream of a night vision." But also Psalm 2:6: "Yet have I set my king upon my holy hill of Zion." Jesus is both—the Lamb and the King, the sacrifice and the sovereign, the One who was slain and yet sits on the throne.',
        },
        {
          kind: 'carry',
          html:
            'You are invited to see what John sees: not the chaos of beasts ruling below, but the Lamb secure on Zion. Your allegiance is not to the powers of this age, but to the One already enthroned. When fear grips you, lift your eyes. The Lamb is on Zion, and you are sealed with His Father&apos;s name.',
        },
      ],
    },

    /* ─── Revelation 14:3–5 — The Song of the 144,000 ──────────────────── */
    {
      ref: 'Revelation 14:3–5',
      title: 'The 144,000 and Their New Song',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            verse(
              3,
              t('And they sung as it were a new song before the throne, and before the four beasts, and the elders: and '),
              hp('no man could learn that song but the hundred and forty and four thousand which were redeemed from the earth', 'rev14-new-song'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev14-new-song',
          html:
            'A new song. Not the old songs of the old age, but a song only the redeemed can sing. Only those who have been ransomed and freed can learn this music. It is a song of their own story—what it means to be bought at a price, to be redeemed from sin and death and the dominion of the beasts. The unredeemed cannot sing it because they do not know its meaning. But the 144,000 know. They have been redeemed.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            verse(
              4,
              t('These are they which '),
              hy('were not defiled with women', 'rev14-virgins'),
              t('; for they are virgins. These are they which '),
              hp('follow the Lamb whithersoever he goeth', 'rev14-follow-lamb'),
              t('. These were '),
              hy('redeemed from among men', 'rev14-aparche'),
              t(', being the firstfruits unto God and to the Lamb.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev14-virgins',
          html:
            'The language of virginity here is not literal—it is symbolic. To "not be defiled with women" means to remain faithful, to not be seduced by false worship, to not sell allegiance to the world system (often represented in Scripture as a woman of seduction—Babylon, the harlot). These 144,000 have kept themselves unstained. They have not drunk the wine of the world&apos;s idolatry. They have remained pure in their loyalty.',
        },
        {
          kind: 'commentary',
          id: 'rev14-follow-lamb',
          html:
            'To follow the Lamb wherever He goes. This is total, unreserved allegiance. Not following Him where it is convenient, not following Him where the world permits. Wherever. Up a mountain. Into a garden. To a cross. Through persecution. Through death itself. The 144,000 are radically committed to Christ alone.',
        },
        {
          kind: 'greek',
          id: 'rev14-aparche',
          title: 'Aparche — Firstfruits',
          script: 'ἀπαρχή',
          translit: '<strong>aparche</strong> · firstfruits; first portion of the harvest; first of the kind',
          description:
            'The firstfruits were always offered to God in the Law—the best of the crop, the first of the season, set apart as holy. The redeemed are God&apos;s firstfruits: the best, the finest, the first of what Christ&apos;s sacrifice has made possible. They are the pledge and promise of a coming harvest.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            verse(
              5,
              t('And '),
              hg('in their mouth was found no guile', 'rev14-guile'),
              t(': for they are '),
              hg('without fault before the throne of God', 'rev14-faultless'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev14-guile',
          html:
            'No guile. No deception. No lies. Not because they never sinned, but because their sins have been washed away by the Lamb&apos;s blood. They speak truth. They live honestly. Their allegiance is open and undisguised. They do not hide who they are or Whom they serve.',
        },
        {
          kind: 'commentary',
          id: 'rev14-faultless',
          html:
            'Without fault before the throne of God. This is not their achievement—it is Christ&apos;s work. He has redeemed them. He has washed them in His blood. He has made them spotless, blameless, faultless. They stand before the very throne of God and bear no condemnation. Their status is secure.',
        },
        {
          kind: 'christ',
          id: 'rev14-christ-follow',
          title: 'Christ Connection — Follow the Lamb Wherever He Goes',
          html:
            'This is the call to radical allegiance. Jesus said in Matthew 16:24: "If any man will come after me, let him deny himself, and take up his cross, and follow me." The 144,000 are those who answer that call with complete devotion. They follow not for comfort or safety, but because the Lamb is worthy of absolute allegiance.',
        },
        {
          kind: 'carry',
          html:
            'Your allegiance is not to the powers of this age, but to the One already enthroned. When fear grips you, lift your eyes. The Lamb is on Zion, and you are sealed with His Father&apos;s name. You are called to follow the Lamb wherever He goes—not for comfort, but for Christ&apos;s sake alone.',
        },
        {
          kind: 'reflection',
          id: 'rev14-follow-challenge',
          prompt: 'What does it mean, for you, to follow the Lamb whithersoever He goeth? Where is He calling you to go that you have not yet been willing to follow?',
        },
      ],
    },

    /* ─── Revelation 14:6–7 — The First Angel: The Everlasting Gospel ────── */
    {
      ref: 'Revelation 14:6–7',
      title: 'The First Angel — The Everlasting Gospel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            verse(
              6,
              t('And I saw another angel fly in the midst of heaven, having the '),
              hp('everlasting gospel to preach unto them that dwell on the earth', 'rev14-gospel'),
              t(', and to every nation, and kindred, and tongue, and people,')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev14-gospel',
          html:
            'The gospel is not new to Revelation 14—it is called <em>everlasting</em>. It is the good news that has always been God&apos;s plan, from before the foundation of the world. Peter wrote of Christ as "a lamb without blemish and without spot, who verily was foreordained before the foundation of the world" (1 Peter 1:20). The gospel is the oldest news, proclaimed by angels in every age, now proclaimed again to every nation, kindred, tongue, and people. No one is excluded from the offer of redemption.',
        },
        {
          kind: 'greek',
          id: 'rev14-aiōnios',
          title: 'Aiōnios — Everlasting, Eternal',
          script: 'αἰώνιος',
          translit: '<strong>aiōnios</strong> · everlasting, eternal, of the ages; belonging to the aeon',
          description:
            'The gospel is not bound to time. It predates creation. It will outlast this age. It is the eternal good news that God has reconciled the world to Himself through Christ.',
        },
        {
          kind: 'greek',
          id: 'rev14-euangelion',
          title: 'Euangelion — Gospel, Good News',
          script: 'εὐαγγέλιον',
          translit: '<strong>euangelion</strong> · good news, gospel; the message of salvation',
          description:
            'The gospel is the announcement that God has acted for humanity&apos;s salvation. Christ has died. Christ has risen. Christ is coming again. That is the good news that has always been proclaimed.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            verse(
              7,
              t('Saying with a loud voice, Fear God, and give glory to him; for the hour of his judgment is come: and '),
              hg('worship him that made heaven, and earth, and the sea, and the fountains of waters', 'rev14-worship'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev14-worship',
          html:
            'The angel&apos;s proclamation: fear God. Give Him glory. Worship the Maker of all things. This is the only proper response to the gospel. Not cheap grace, not easy assurance, but a call to worship the God who made all. The hour of judgment is come—the time for choosing is now. You will either fear the God who made heaven and earth, or you will fear the beast. You will either worship the Creator or the creation. There is no third way.',
        },
        {
          kind: 'christ',
          id: 'rev14-christ-gospel',
          title: 'Christ Connection — The Gospel Proclaimed in Every Age',
          html:
            'The gospel is Christ. His death, His resurrection, His coming again. This is the everlasting message. It was preached to Abraham, to Moses, to the prophets. It is preached now. It will be preached to every nation. Christ is the content and center of every gospel proclamation.',
        },
        {
          kind: 'carry',
          html:
            'You have heard the gospel. An angel has cried it out. God&apos;s grace is offered. The call is clear: fear God. Worship the Maker. The hour of judgment is come—not in the sense that it is too late, but in the sense that now is the day of decision. Now is when you choose your allegiance.',
        },
      ],
    },

    /* ─── Revelation 14:8 — The Second Angel: Babylon Fallen ────────────── */
    {
      ref: 'Revelation 14:8',
      title: 'The Second Angel — Babylon is Fallen',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            verse(
              8,
              t('And there followed another angel, saying, '),
              hp('Babylon is fallen, is fallen, that great city', 'rev14-babylon-fall'),
              t(', because she made all nations drink of the wine of the wrath of her fornication.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev14-babylon-fall',
          html:
            'Babylon falls. Not will fall, but <em>has fallen</em>. The repetition emphasizes the certainty and finality of judgment. Babylon represents the world system, the political and economic order that stands opposed to God, that seduces the nations with false promise and idolatry. The angel announces what is already true in God&apos;s sight, even if the world has not yet seen it. Babylon appears strong; but in God&apos;s kingdom, her defeat is already sealed.',
        },
        {
          kind: 'greek',
          id: 'rev14-porneia',
          title: 'Porneia — Fornication, Sexual Immorality',
          script: 'πορνεία',
          translit: '<strong>porneia</strong> · fornication; sexual unfaithfulness; idolatry',
          description:
            'Babylon seduces the nations with the wine of her fornication. In Scripture, fornication is also used metaphorically for idolatry—unfaithfulness to God, the worship of false gods. Babylon seduces all nations into spiritual adultery against God.',
        },
        {
          kind: 'christ',
          id: 'rev14-christ-babylon',
          title: 'Christ Connection — The Judge of Empires',
          html:
            'Jesus is King of kings. Every earthly power—Babylon, Rome, every empire that has ruled and will rule—stands under His ultimate authority. They may seem invincible now, but their end is determined by Him. The angel announces judgment; Christ pronounces it.',
        },
        {
          kind: 'carry',
          html:
            'Do not be deceived by the apparent power of the world system. Babylon will fall. The kingdoms that seduce billions into idolatry will crumble. Your allegiance should not be to them, but to the Kingdom that stands forever.',
        },
      ],
    },

    /* ─── Revelation 14:9–11 — The Third Angel: The Wine of Wrath ────────── */
    {
      ref: 'Revelation 14:9–11',
      title: 'The Third Angel — The Wine of the Wrath of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            verse(
              9,
              t('And the third angel followed them, saying with a loud voice, If any man '),
              hg('worship the beast and his image', 'rev14-beast-worship'),
              t(', and receive his '),
              hg('mark in his forehead, or in his hand', 'rev14-beast-mark'),
              t(',')
            ),
          ],
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            verse(
              10,
              t('The same shall drink of the wine of the wrath of God, which is poured out without mixture into the cup of his indignation; and he shall be tormented with fire and brimstone in the presence of the holy angels, and in the presence of the Lamb:')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev14-beast-worship',
          html:
            'The warning is stark. Those who worship the beast have rejected the gospel, rejected the call to fear God, rejected the Lamb. They have pledged themselves to the world system, to the antichrist power that rises against God. The consequence follows: judgment.',
        },
        {
          kind: 'commentary',
          id: 'rev14-beast-mark',
          html:
            'The mark in forehead or hand. The forehead represents the mind—what you think, your beliefs, your allegiance. The hand represents your works, your deeds, your service. Those who bear the beast&apos;s mark have given both thought and action to the pursuit of the beast&apos;s kingdom. They are marked as his.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            verse(
              11,
              t('And the smoke of their torment ascendeth up for ever and ever: and they have '),
              hg('no rest day nor night', 'rev14-no-rest'),
              t(', who worship the beast and his image, and whosoever receiveth the mark of his name.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev14-no-rest',
          html:
            'No rest. Day and night. The torment is eternal and unending. This is the consequence of absolute rejection of God, of deliberate allegiance to the enemy of God&apos;s kingdom. The third angel&apos;s message is the most severe. It is a final warning. The choice is clear: serve God or face judgment. There is no middle ground.',
        },
        {
          kind: 'greek',
          id: 'rev14-thumos',
          title: 'Thumos — Wrath, Anger',
          script: 'θυμός',
          translit: '<strong>thumos</strong> · wrath, anger, fierce indignation',
          description:
            'God&apos;s wrath is His righteous judgment against sin and rebellion. It is not arbitrary or cruel, but the inevitable consequence of rejecting the Good and embracing evil. The wine of God&apos;s wrath is the pouring out of divine judgment.',
        },
        {
          kind: 'christ',
          id: 'rev14-christ-judge-wrath',
          title: 'Christ Connection — The Judge and Vindicator',
          html:
            'Christ is both the Lamb upon whom judgment fell, and the Judge before whom judgment is executed. His blood was poured out "without mixture" for the salvation of those who believe. But for those who reject Him, the wine poured out is the wine of God&apos;s wrath. Christ is both Savior and Judge.',
        },
        {
          kind: 'reflection',
          id: 'rev14-worship-choice',
          prompt: 'The angel&apos;s message is clear: there are only two masters, two marks, two destinies. Whom do you worship? Who owns your mind and your hands? Where are you bearing the mark?',
        },
      ],
    },

    /* ─── Revelation 14:12–13 — The Patience of the Saints ───────────────── */
    {
      ref: 'Revelation 14:12–13',
      title: 'The Patience of the Saints',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            verse(
              12,
              t('Here is the patience of the saints: here are they that '),
              hp('keep the commandments of God, and the faith of Jesus', 'rev14-patience'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev14-patience',
          html:
            'In the midst of judgment, warning, and the specter of Babylon&apos;s seduction, the vision pauses to define the saints. They are patient. They endure. They are not rushed into panic or despair by the angel&apos;s warnings. They keep God&apos;s commandments—not perfectly, but with devotion. They keep the faith of Jesus—they trust in Him, they are faithful to His word, they have not abandoned the gospel even as the world rages against it. Patience is their mark.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            verse(
              13,
              t('And I heard a voice from heaven saying unto me, Write, '),
              hp('Blessed are the dead which die in the Lord from henceforth', 'rev14-blessed-dead'),
              t(': Yea, saith the Spirit, that they may '),
              hy('rest from their labours', 'rev14-rest'),
              t('; and their '),
              hg('works do follow them', 'rev14-works-follow'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev14-blessed-dead',
          html:
            'A voice from heaven. Not the angel, but God Himself or Christ. A beatitude for the dead who die in the Lord <em>from now on</em>. Why "from henceforth"? Because the end is near. The time of persecution is intensifying. Those who die for their faith from this point forward will die in the climactic days before the return of Christ. They die not in vain but in victory, their names written in the book of life.',
        },
        {
          kind: 'commentary',
          id: 'rev14-rest',
          html:
            'Rest from labours. The work of faith is over. The struggle is finished. This is the rest promised in Matthew 11:28: "Come unto me, all ye that labour and are heavy laden, and I will give you rest." For those who die in the Lord, the labor ends. Peace comes. Perfect peace.',
        },
        {
          kind: 'greek',
          id: 'rev14-anapauomai',
          title: 'Anapauomai — Rest, Cease from Labor',
          script: 'ἀναπαύω',
          translit: '<strong>anapauomai</strong> · to rest, to take rest, to cease from labor',
          description:
            'The dead in the Lord rest from their labors. This is the rest promised in Matthew 11:28: "Come unto me, all ye that labour and are heavy laden, and I will give you rest." The work of faith is over. The struggle is finished. Peace comes.',
        },
        {
          kind: 'commentary',
          id: 'rev14-works-follow',
          html:
            'Their works follow them. This does not mean they earn anything by their works—salvation is by grace alone. But the fruit of their faith, the evidence of their love, the lives they touched, the words they spoke, the example they set—all of that endures. Their legacy lives on. In heaven, they rest; on earth, their influence continues.',
        },
        {
          kind: 'christ',
          id: 'rev14-christ-rest',
          title: 'Christ Connection — Rest in Christ',
          html:
            'Jesus promised rest. In Matthew 11, He invites the weary to come to Him. In Hebrews 4, the author speaks of the Sabbath rest that remains for the people of God—the rest Christ gives. Those who die in the Lord enter that rest. Their labors end because they rest in Christ, the One who completed the work on the cross.',
        },
        {
          kind: 'carry',
          html:
            'Your work for the kingdom matters. What you do in the Lord&apos;s name is not wasted. It follows you. But you are not called to earn your way into heaven through labor. You are called to labor in faith, knowing that Christ has done the work that matters most. When your labor in this life is finished, you will rest. Truly rest.',
        },
      ],
    },

    /* ─── Revelation 14:14–16 — The Harvest of the Earth ────────────────── */
    {
      ref: 'Revelation 14:14–16',
      title: 'One Like unto the Son of Man',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            verse(
              14,
              t('And I looked, and behold a '),
              hp('white cloud', 'rev14-white-cloud'),
              t(', and upon the cloud one sat like unto the '),
              hp('Son of man', 'rev14-son-of-man'),
              t(', having on his head a '),
              hg('golden crown', 'rev14-golden-crown'),
              t(', and in his hand a '),
              hg('sharp sickle', 'rev14-sickle'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev14-white-cloud',
          html:
            'A white cloud. This echoes the appearance of Christ in 1 Thessalonians 4:17: "Then we which are alive and remain shall be caught up together with them in the clouds to meet the Lord in the air." White signifies purity, holiness, victory. This is not a dark and terrible coming—it is bright and glorious.',
        },
        {
          kind: 'commentary',
          id: 'rev14-son-of-man',
          html:
            'One like unto the Son of man. This is Christ. The title "Son of Man" comes from Daniel 7:13, where the prophet sees "one like the Son of man come with the clouds of heaven." In the Gospels, Jesus repeatedly refers to Himself as the Son of Man. It is the title of His humanity, His messianic role, His coming as Judge.',
        },
        {
          kind: 'commentary',
          id: 'rev14-golden-crown',
          html:
            'A golden crown on His head. This is the crown of victory, of kingship, of authority. Unlike the crowns of the elders (which they cast down before the throne), this is the crown Christ wears. He is King of kings.',
        },
        {
          kind: 'commentary',
          id: 'rev14-sickle',
          html:
            'A sharp sickle in His hand. The sickle is the tool of harvest. It is time to reap. The grain has ripened. The vintage is ready. Christ holds the instrument of judgment and gathering.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            verse(
              15,
              t('And another angel came out of the temple, crying with a loud voice to him that sat on the cloud, '),
              hp('Thrust in thy sickle, and reap', 'rev14-thrust-sickle'),
              t(': for the time is come for thee to reap; for the harvest of the earth is ripe.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev14-thrust-sickle',
          html:
            'An angel calls out from the temple—God&apos;s house—commanding the One on the cloud: "Thrust in thy sickle." The harvest is ripe. The time of waiting is over. The judgment is to begin. Jesus said in Matthew 13 that He will command the reapers: "Gather ye together first the tares, and bind them in bundles to burn them: but gather the wheat into my barn."',
        },
        {
          kind: 'greek',
          id: 'rev14-therizo',
          title: 'Therizo — To Reap, Harvest',
          script: 'θερίζω',
          translit: '<strong>therizo</strong> · to reap, harvest, gather in the crop',
          description:
            'To reap is to gather in what has been sown. "Whatsoever a man soweth, that shall he also reap" (Galatians 6:7). The harvest is both judgment and vindication—the righteous are gathered; the wicked are separated.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            verse(
              16,
              t('And he that sat on the cloud '),
              hp('thrust in his sickle on the earth', 'rev14-reap-earth'),
              t('; and the earth was reaped.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev14-reap-earth',
          html:
            'The command is obeyed instantly. Christ thrusts in His sickle. The earth is reaped. The judgment begins. All that has been sown—every seed of righteousness and every seed of sin—is now gathered and judged.',
        },
        {
          kind: 'christ',
          id: 'rev14-christ-reaper',
          title: 'Christ Connection — The Harvester',
          html:
            'Christ is the Reaper. Matthew 13:39 says: "The harvest is the end of the world; and the reapers are the angels." Jesus Himself directs the harvest. He separates the wheat from the tares, the sheep from the goats. He gathers the righteous into the kingdom; the wicked are cast out.',
        },
        {
          kind: 'carry',
          html:
            'The harvest will come. Your work, your choices, your allegiance—all of it will be gathered and judged. But if you are in Christ, if you have been redeemed by His blood, you are wheat. You will be gathered into His barn. Live in that hope. Work in that assurance. The Reaper knows His own.',
        },
      ],
    },

    /* ─── Revelation 14:17–20 — The Vintage and the Winepress ────────────── */
    {
      ref: 'Revelation 14:17–20',
      title: 'The Winepress of the Wrath of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            verse(
              17,
              t('And another angel came out of the temple which is in heaven, he also having a sharp sickle.')
            ),
          ],
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            verse(
              18,
              t('And another angel came out from the altar, which had power over fire; and cried with a loud cry to him that had the sharp sickle, saying, Thrust in thy sharp sickle, and gather the clusters of the vine of the earth; for her grapes are fully ripe.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev14-grapes-ripe',
          html:
            'Another angel, commanding another sickle. This is the vintage—the gathering of grapes for the winepress, the gathering of the wicked for judgment. The language is parallel to the wheat harvest, but the destination is different. The wheat goes to the barn; the grapes go to be crushed.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            verse(
              19,
              t('And the angel thrust in his sickle into the earth, and gathered the vine of the earth, and cast it into the great '),
              hp('winepress of the wrath of God', 'rev14-winepress'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev14-winepress',
          html:
            'The great winepress of the wrath of God. This is not salvation; this is judgment. The image is violent: grapes are crushed, their juice flows like blood. Isaiah 63:3 uses the same image: "I have trodden the winepress alone… and their blood shall be sprinkled upon my garments." The winepress is a symbol of God&apos;s judgment on sin.',
        },
        {
          kind: 'greek',
          id: 'rev14-lēnos',
          title: 'Lēnos — Winepress',
          script: 'ληνός',
          translit: '<strong>lēnos</strong> · winepress; wine vat; a place where grapes are crushed',
          description:
            'The winepress was where grapes were crushed to extract the juice. As a metaphor, it represents the crushing judgment of God upon the wicked. No grapes survive intact.',
        },
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            verse(
              20,
              t('And the winepress was trodden without the city, and blood came out of the winepress, even unto the horse bridles, by the space of a thousand and six hundred furlongs.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev14-blood-flow',
          html:
            'The image is horrifying. Blood flows from the winepress—the blood of the grapes that are crushed. It rises to the bridles of horses. A thousand and six hundred furlongs (roughly two hundred miles). The blood is not literal—the image is of judgment so vast, so overwhelming, that it colors the entire landscape. This is the final, terrible consequence of rejecting the Lamb and worshiping the beast.',
        },
        {
          kind: 'christ',
          id: 'rev14-christ-judge-vintage',
          title: 'Christ Connection — Christ as Judge',
          html:
            'Christ is the Judge of all the earth. In Revelation 19, He returns on a white horse with the armies of heaven. Here, He is the One who directs judgment. Not out of cruelty, but out of justice. The winepress crushes those who have opposed Him, who have loved darkness rather than light, who have chosen the beast over the Lamb.',
        },
        {
          kind: 'carry',
          html:
            'The winepress is not for you if you are in Christ. His wrath fell on Him, not on His people. But the image is a sober reminder: there is a judgment coming for all who reject Him. The call to repent is not a call to fear punishment, but a call to choose life. Choose the Lamb. Choose the kingdom. Escape the winepress.',
        },
        {
          kind: 'reflection',
          id: 'rev14-winepress-choice',
          prompt: 'What does it mean that Christ bore the winepress of God&apos;s wrath for you? How should that shape the way you live today?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Blessed are the dead which die in the Lord from henceforth: Yea, saith the Spirit, that they may rest from their labours; and their works do follow them.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Revelation 14 · Study Guide',
  },

  hasHebrew: false,
};
