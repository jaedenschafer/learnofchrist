import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Revelation 21 — The New Heaven and New Earth
 *
 * The Bible opens in Genesis 1 with "In the beginning God created the heaven and the earth."
 * It closes in Revelation 21 with "I saw a new heaven and a new earth." The story is a circle.
 *
 * But between those two moments, everything breaks. The world becomes groaning, fallen,
 * scarred with death and sorrow and crying and pain. Revelation 21 is God&apos;s answer to
 * that brokenness. Not escape, but restoration. Not replacement, but renewal. The new
 * creation is not Plan B. It is Plan A finally completed—the tabernacle of God dwelling
 * with humanity, no more separation, no more tears, no more distance. The Lamb is the light.
 * The city is built on the apostles. The gates are pearl. The foundations are precious stone.
 * And the holiness is not enforced from a distance by guards and laws. It grows from within,
 * written on hearts, lived out in a people who have been washed in the blood of the Lamb and
 * written in His book of life.
 */
export const REVELATION_21: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 21,

  estimatedMinutes: { beginner: 10, intermediate: 16, deep: 23 },
  intros: [
    'Revelation 21 is the climax of Scripture. The whole story of redemption—from the fall in Genesis 3 through the exile, the prophets&apos; longing, the incarnation, the cross, the resurrection, and the present outpouring of the Spirit—all of it moves toward this moment. John sees a new heaven and a new earth. He sees the holy city, new Jerusalem, coming down from God out of heaven like a bride adorned for her husband. He hears a loud voice: "Behold, the tabernacle of God is with men, and he will dwell with them, and they shall be his people, and God himself shall be with them, and be their God." The great distance that opened between God and humanity in the garden is closed forever. No more temple, because the whole city is the presence of God. No sun, no moon, because the Lamb is the light.',
    'This is not escape into an ethereal, disembodied future. It is the healing of the world—a redeemed earth, a renewed cosmos, the kingdom of God made visible. The architecture is specific: twelve gates inscribed with the names of the twelve tribes, twelve foundations bearing the names of the twelve apostles, a city foursquare, pure gold like clear glass, with a wall of jasper and a street of gold. This is a building. This is a place. And the greatest detail: "they which are written in the Lamb&apos;s book of life" will dwell there. Your name written in that book is your security for eternity, your citizenship in the city of God.',
  ],

  opener: {
    matchTitle: /new heaven|new earth|new jerusalem|city of god/i,
    matchArtist: /[jJ]ohn|[hH]ubmaier|[bB]lakelock/i,
    caption: 'The New Heaven and New Earth',
  },

  sections: [
    /* ─── Revelation 21:1–3 — A New Heaven and New Earth ───────────────────── */
    {
      ref: 'Revelation 21:1–3',
      title: 'A New Heaven and New Earth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            verse(1, t('And I saw a new heaven and a new earth: for '), hg('the first heaven and the first earth were passed away', 'c-passed-away'), t('; and there was '), hy('no more sea', 'c-no-sea'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-passed-away',
          html: 'The old creation does not vanish into nothing. It passes away. It is transformed, not destroyed. The word is <em>aparchemai</em>—to depart, to go away. The framework of the old age gives way to the new. The curse lifts. The groaning stops. Paul wrote that all creation groans in travail (Romans 8:22)—groans because it is held captive to decay, waiting for redemption. Here is that redemption.',
        },
        {
          kind: 'greek',
          id: 'greek-kainos',
          title: 'Kainos — New in Quality, Not Mere Sequence',
          script: 'καινός',
          translit: '<strong>kainos</strong> · new in nature; fresh; unprecedented; qualitatively new',
          description: 'John does not use <em>neos</em> (new in time, like a new car off the lot). He uses <em>kainos</em>—new in essence, renewed, redeemed. The heaven and earth are not discarded for cheap replacements. They are made new the way a resurrected body is made new: the same person, glorified.',
        },
        {
          kind: 'commentary',
          id: 'c-no-sea',
          html: 'In John&apos;s time, the sea was chaos—the realm of monsters and storms, a barrier between peoples. "No more sea" means no more separation, no more barrier between nations. But it also means the curse is lifted. The sea that once threatened to drown creation (Genesis 7) is gone. The divide is closed.',
        },
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            verse(2, t('And I John saw the holy city, new Jerusalem, coming down from God out of heaven, prepared as a '), hy('bride adorned for her husband', 'greek-nymphe'), t('.')),
          ],
        },
        {
          kind: 'greek',
          id: 'greek-nymphe',
          title: 'Nymphē — &ldquo;Bride&rdquo;',
          script: 'νύμφη',
          translit: '<strong>nymphē</strong> · a bride; a woman on her wedding day; espoused virgin',
          description: 'The city is not described as a fortress or a capital. It is described as a bride. The relationship between God and His people is not governed by law or contract, but by covenant love. Marriage is the deepest bond Israel knew. Here, the city—the gathered people of God—appears as a bride coming to meet her husband.',
        },
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            verse(3, t('And I heard a great voice out of heaven saying, Behold, '), hp('the tabernacle of God is with men', 'christ-tabernacle'), t(', and he will '), hy('dwell with them', 'greek-skenoō'), t(', and they shall be his people, and God himself shall be with them, and be their God.')),
          ],
        },
        {
          kind: 'greek',
          id: 'greek-skenoō',
          title: 'Skenōō — &ldquo;to Dwell&rdquo; (literally, to Pitch Tent)',
          script: 'σκηνόω',
          translit: '<strong>skenōō</strong> · to dwell; to pitch tent; to tabernacle',
          description: 'The Greek echoes the Hebrew <em>shkn</em>, the word behind "shekinah"—the manifest presence of God. From the beginning of redemption (when God met Israel at Sinai in the tent of meeting) to the incarnation ("the Word... dwelt [skenōō] among us," John 1:14) to the end of Scripture here: God pitches His tent with His people.',
        },
        {
          kind: 'christ',
          id: 'christ-tabernacle',
          title: 'Christ Connection — The Word Became Flesh and Tabernacled Among Us',
          html: 'John 1:14 says the Word "dwelt among us" using the exact same verb—skenōō. Jesus was the tabernacle in His own body. He carried God&apos;s presence into the world. Revelation 21 takes that intimate fact and makes it permanent, universal, final. No more temple building needed. No more veil between the holy of holies and the people. The presence itself indwells the city. You will live in the literal presence of God.',
        },
        {
          kind: 'carry',
          html: 'Right now, the presence of God is mediated—through prayer, through Scripture, through the Spirit in your inner self. But you sense a distance. You pray, but you don&apos;t hear an audible voice. You believe, but you don&apos;t see Him face to face. Revelation 21 tells you this is not the permanent state. The tabernacle of God is coming. And it is coming to be with you.',
        },
        {
          kind: 'reflection',
          id: 'rev21-ref-1',
          prompt: 'How do you experience the presence of God right now? What will it mean when He dwells with you, not mediated through anything, but directly?',
        },
        {
          kind: 'artwork',
          matchTitle: /new jerusalem|heavenly city|city of god|bride/i,
          caption: 'Revelation 21:1–3 · The Holy City Descends',
        },
      ],
    },

    /* ─── Revelation 21:4–5 — God Shall Wipe Away All Tears ───────────────── */
    {
      ref: 'Revelation 21:4–5',
      title: 'God Shall Wipe Away All Tears',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            verse(4, t('And God shall wipe away all tears from their eyes; and there shall be '), hy('no more death', 'c-no-death'), t(', neither sorrow, nor crying, neither shall there be any more pain: for '), hg('the former things are passed away', 'c-former-passed'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-no-death',
          html: 'Not the removal of physical tears of happiness, but the cessation of the tears that grieve. No more death—and death is the taproot of all other griefs. Every sorrow in Scripture grows from the knowledge of mortality, the breaking of bonds, the parting at the grave. Here, death itself is gone.',
        },
        {
          kind: 'commentary',
          id: 'c-former-passed',
          html: 'The language moves from specific griefs (tears, death, sorrow, crying, pain) to a single summary: the former things are passed away. Not destroyed, not negated—passed away, like the old creation itself. The age of suffering is over. A new age has begun.',
        },
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            verse(5, t('And he that sat upon the throne said, Behold, '), hg('I make all things new', 'c-make-new'), t('. And he said unto me, Write: for these words are true and faithful.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-make-new',
          html: 'God speaks from the throne. "Behold, I make all things new." Not "I will have made" (a past perfect, as if the work is already done), but "I make"—the work is active, present, real. The renewal is not merely promised; it is being effected. And it is universal: all things.',
        },
        {
          kind: 'greek',
          id: 'greek-penthos',
          title: 'Penthos — &ldquo;Sorrow&rdquo; (Deep Grief)',
          script: 'πένθος',
          translit: '<strong>penthos</strong> · grief; mourning; the emotional weight of loss',
          description: 'Penthos is not mild sadness. It is the kind of sorrow that bends you, that marks you. Matthew says the disciples felt penthos when Jesus was taken (John 16:6). Revelation 21:4 promises that this kind of deep grief will be entirely gone.',
        },
        {
          kind: 'christ',
          id: 'christ-new',
          title: 'Christ Connection — &ldquo;I Make All Things New&rdquo; (2 Corinthians 5:17)',
          html: 'Paul echoes this in 2 Corinthians 5:17: "If any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new." The new creation has already begun in you, if you are in Christ. You are a down payment, a foretaste, a living promise of what Revelation 21 describes. You carry within you the renewal of all things. And one day that renewal will ripple out to fill the whole cosmos.',
        },
        {
          kind: 'carry',
          html: 'You may know sorrow today. You may weep. But you do not weep into a void. Every tear is seen by the One on the throne. And He has promised—with words He calls true and faithful—that He will wipe them away. Not deny them. Not minimize them. But wipe them away.',
        },
        {
          kind: 'reflection',
          id: 'rev21-ref-2',
          prompt: 'What grief do you most long to see wiped away? What would it mean to trust that God&apos;s promise to do so is "true and faithful"?',
        },
      ],
    },

    /* ─── Revelation 21:6–7 — I Am Alpha and Omega ───────────────────────── */
    {
      ref: 'Revelation 21:6–7',
      title: 'I Am Alpha and Omega',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            verse(6, t('And he said unto me, It is done. I am '), hp('Alpha and Omega', 'christ-alpha-omega'), t(', the beginning and the end. I will give unto him that is athirst '), hy('the fountain of the water of life', 'c-fountain-life'), t(' freely.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-fountain-life',
          html: 'The image echoes Psalm 36:9: "With thee is the fountain of life." But here, the fountain is freely given. No price. No condition. Simply: come and drink. You don&apos;t have to earn it, deserve it, or perform for it. Thirst is the only requirement.',
        },
        {
          kind: 'christ',
          id: 'christ-alpha-omega',
          title: 'Christ Connection — Jesus Is Alpha and Omega',
          html: 'This title—Alpha and Omega, the beginning and the end—belongs to God alone (Revelation 1:8). Yet here Jesus speaks it as His own. He is the beginning because He is the Word who spoke creation into being (John 1:1–3). He is the end because all things are moving toward His kingdom, and in the new creation He is the light. He is the One in whom all things hold together (Colossians 1:17), and toward whom all things are moving. The story of the cosmos is His story.',
        },
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            verse(7, t('He that overcometh shall inherit all things; and I will be his God, and he shall be my son.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-overcometh',
          html: 'To overcome is not to conquer by force, but to persevere in faith. It is the word for endurance under trial, for holding fast even when everything pressures you to let go. And the reward is not a thing but a relationship: "I will be his God, and he shall be my son." Inheritance is secondary. The relationship is primary.',
        },
        {
          kind: 'carry',
          html: 'You are thirsty. That thirst for God, for home, for wholeness—it is the beginning of everything. You don&apos;t have to overcome your thirst first. You just have to come, parched as you are, and drink. And the One offering the water is the Alpha and Omega—the One who holds the beginning and the end, who knows the whole of your story from start to finish, and who calls you His child.',
        },
        {
          kind: 'reflection',
          id: 'rev21-ref-3',
          prompt: 'Where is your thirst deepest right now? What would it look like to drink freely from Christ&apos;s fountain in that place?',
        },
      ],
    },

    /* ─── Revelation 21:8 — Those Outside the City ────────────────────────── */
    {
      ref: 'Revelation 21:8',
      title: 'But the Fearful and the Unbelieving',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            verse(8, t('But the fearful, and unbelieving, and the abominable, and murderers, and whoremongers, and sorcerers, and idolaters, and all liars, shall have their part in the lake which burneth with fire and brimstone: which is the second death.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-fearful-first',
          html: 'Notice what stands first in the list: the fearful. Not the violent, not the murderous, but those who are afraid. Fear is listed alongside all the grievous sins—and it is listed first. Why? Because fear that refuses to trust God is the root of all sin. Every sin is an attempt to secure yourself, to take control, to refuse to rest in God&apos;s care. The fearful ones are those who never drank from the fountain offered freely in verse 6.',
        },
        {
          kind: 'commentary',
          id: 'c-second-death',
          html: 'The second death is not annihilation. It is the final consequence of refusing the new creation. To be outside the city, outside the presence of God, outside the water of life—that separation is death. The first death is the body&apos;s return to dust. The second death is permanent exclusion from life.',
        },
        {
          kind: 'carry',
          html: 'This verse is not meant to frighten, but to clarify the stakes. The invitation in verse 6 is real. The fountain is freely given. But so is the choice to refuse. To live in the new creation with God is one choice. To live outside it is another. And the choice is active and continuous. Every time you turn to God in trust is a step toward the city. Every time you choose to manage your own fear through something other than faith is a step away.',
        },
        {
          kind: 'reflection',
          id: 'rev21-ref-4',
          prompt: 'What fear in your life is controlling you? What would trust in Christ instead of control look like?',
        },
      ],
    },

    /* ─── Revelation 21:9–14 — The Twelve Gates and Twelve Foundations ────── */
    {
      ref: 'Revelation 21:9–14',
      title: 'Twelve Gates and Twelve Foundations',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            verse(9, t('And there came unto me one of the seven angels which had the seven vials full of the seven last plagues, and talked with me, saying, Come hither, I will shew thee the bride, the Lamb&apos;s wife.')),
            verse(10, t('And he carried me away in the spirit to a great and high mountain, and shewed me that great city, the holy Jerusalem, descending out of heaven from God,')),
          ],
        },
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            verse(11, t('Having the glory of God: and her light was like unto a stone most precious, as it were a jasper stone clear as crystal;')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-glory-god',
          html: 'The city shines with the glory of God—not its own light, but His light reflected and contained. And that light is like a crystal, transparent and precious. The city does not hide God&apos;s glory; it radiates it.',
        },
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            verse(12, t('And had a wall great and high, and had twelve gates, and at the gates twelve angels; and names written thereon, which are the names of the twelve tribes of the children of Israel:')),
            verse(13, t('On the east three gates; on the north three gates; on the south three gates; and on the west three gates.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-twelve-gates',
          html: 'The twelve gates are inscribed with the names of the twelve tribes. Every tribe—every piece of Israel&apos;s story, every family line—has a gate. The gates face all directions. This is not a hidden city. It is open. The wall protects, but it does not isolate. Entry is possible from every direction.',
        },
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            verse(14, t('And the wall of the city had twelve foundations, and in them the names of the twelve apostles of the Lamb.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-twelve-apostles',
          html: 'The foundations bear the names of the twelve apostles. If the gates represent the old covenant (the twelve tribes of Israel), the foundations represent the new covenant (the twelve apostles who were sent by Jesus to all nations). The city is built on both: Israel&apos;s story did not end; it was carried forward and opened to the world.',
        },
        {
          kind: 'christ',
          id: 'christ-apostles',
          title: 'Christ Connection — The Foundation of Apostles (Ephesians 2:20)',
          html: 'Paul writes: "Ye are built upon the foundation of the apostles and prophets, Jesus Christ himself being the chief corner stone." The church is built on the testimony of the apostles—their witness to Christ, their sacrifice, their faithfulness. You are not floating in a void. You are standing on the foundation of those who saw the risen Lord and gave their lives to tell about Him.',
        },
        {
          kind: 'carry',
          html: 'Your story is written in that city. Whether you are a descendant of Jacob, or a gentile drawn into the faith through the apostles&apos; preaching, you have a gate inscribed with your tribe&apos;s name, and you are standing on a foundation laid by those who encountered Christ and were remade by Him. Your faith is not private. It is part of a vast architecture stretching back to Abraham and forward to the end of time.',
        },
        {
          kind: 'reflection',
          id: 'rev21-ref-5',
          prompt: 'Which of the twelve apostles speaks to you most? What would it mean to stand on the foundation of his faith?',
        },
        {
          kind: 'artwork',
          matchTitle: /twelve|gates|foundation|walls/i,
          caption: 'Revelation 21:12–14 · The Gates and Foundations',
        },
      ],
    },

    /* ─── Revelation 21:15–21 — The Measure of the City ────────────────────── */
    {
      ref: 'Revelation 21:15–21',
      title: 'The City Foursquare',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            verse(15, t('And he that talked with me had a golden reed to measure the city, and the gates thereof, and the wall thereof.')),
            verse(16, t('And the city lieth foursquare, and the length is as large as the breadth: and he measured the city with the reed, twelve thousand furlongs. The length and the breadth and the height of it are equal.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-foursquare',
          html: 'A foursquare city means it is perfect, complete, stable. Each dimension—length, breadth, and height—is equal. Twelve thousand furlongs is approximately 1,500 miles per side. This is not metaphor; this is a real place, of impossible vastness. Every tribe of the earth will have room. There is no scarcity in God&apos;s kingdom.',
        },
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            verse(17, t('And he measured the wall thereof, an hundred and forty and four cubits, according to the measure of a man, that is, of the angel.')),
            verse(18, t('And the building of the wall of it was of jasper: and the city was pure gold, like unto clear glass.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-gold-glass',
          html: 'The city is pure gold, but like clear glass. Gold is precious, solid, lasting. Glass is transparent. The heavenly city is both solid and luminous. Its riches are not hidden but visible, and its transparency means nothing is obscured or secret. All is open, all is known, all is seen.',
        },
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            verse(19, t('And the foundations of the wall of the city were garnished with all manner of precious stones. The first foundation was jasper; the second, sapphire; the third, a chalcedony; the fourth, an emerald;')),
            verse(20, t('The fifth, sardonyx; the sixth, sardius; the seventh, chrysolite; the eighth, beryl; the ninth, a topaz; the tenth, a chrysoprasus; the eleventh, a jacinth; the twelfth, an amethyst.')),
            verse(21, t('And the twelve gates were twelve pearls; every several gate was of one pearl: and the street of the city was pure gold, as it were transparent glass.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-precious-stones',
          html: 'The list of gems mirrors the breastplate of the high priest (Exodus 28:17–20). The whole city is a holy of holies. Every resident is a priest. Access to the most holy place is open to all. And the twelve pearls at the gates represent entry not through violence or conquest, but through something precious formed in suffering—pearls are created by an irritant inside the shell, covered with healing layers. The way in is through what Christ endured.',
        },
        {
          kind: 'carry',
          html: 'You are not destined for a pale, ethereal, disembodied existence. You are destined for a city of gold and precious stones, a place solid and real and beautiful beyond imagining. And the way in is not locked. It is made of pearl.',
        },
        {
          kind: 'reflection',
          id: 'rev21-ref-6',
          prompt: 'What draws you most about this description of the city—its size, its transparency, its precious stones, its openness? What does that attraction tell you about what you most long for?',
        },
      ],
    },

    /* ─── Revelation 21:22–23 — The Lamb Is the Light ───────────────────────── */
    {
      ref: 'Revelation 21:22–23',
      title: 'The Lord God Almighty and the Lamb Are the Temple',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            verse(22, t('And I saw no temple therein: for the Lord God Almighty and the Lamb are the temple of it.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-no-temple',
          html: 'In every previous dispensation, there was a temple—a place where God dwelt, mediated through priests, accessed through sacrifice, separated from the people by veils and holy places. Here, there is no temple. Not because the presence is diminished, but because it is universal. The whole city is the presence of God.',
        },
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            verse(23, t('And the city had '), hy('no need of the sun', 'c-no-sun'), t(', neither of the moon, to shine in it: for the glory of God did lighten it, and the Lamb is the light thereof.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-no-sun',
          html: 'No artificial light needed—not even the sun, the greatest light source known to creation. Why? Because the light is not external. It is the glory of God Himself, reflected in the Lamb. The city is lit from within by the presence of God.',
        },
        {
          kind: 'greek',
          id: 'greek-lychnos',
          title: 'Lychnos — &ldquo;Lamp&rdquo; or &ldquo;Light&rdquo;',
          script: 'λύχνος',
          translit: '<strong>lychnos</strong> · a lamp; a light-bearer; that which gives illumination',
          description: 'The Lamb is described as the city&apos;s lamp, its light source. Jesus took this image for Himself: "I am the light of the world" (John 8:12). In Revelation 21, that claim is total and final. His light fills everything.',
        },
        {
          kind: 'christ',
          id: 'christ-light-lamp',
          title: 'Christ Connection — The True Light (John 8:12; Genesis 1:3)',
          html: 'Genesis 1 opens with God saying "Let there be light" before the sun exists. The light is God&apos;s first gift. Revelation 21 closes the circle: the light is back, and it is the Lamb. Jesus in John 8:12 says "I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life." In the new creation, that promise is total. No darkness. No shadows. No places hidden from the Light of the world.',
        },
        {
          kind: 'carry',
          html: 'In this present age, you walk by faith, not by sight. The light is real, but it is mediated—through Scripture, through prayer, through the Spirit. But you live in a world of shadow and question. Revelation 21 promises you that one day the mediation will be unnecessary. You will not need a Bible to know Him. You will not need to pray through a veil. The Lamb Himself will be your light, and His light will fill every place, every moment.',
        },
        {
          kind: 'reflection',
          id: 'rev21-ref-7',
          prompt: 'Where do you walk in darkness right now—fear, uncertainty, grief, doubt? How does it change your perspective to know the Lamb is coming as the light of that place?',
        },
        {
          kind: 'artwork',
          matchTitle: /light|lamb|glory|temple/i,
          caption: 'Revelation 21:22–23 · The Lamb Is the Light',
        },
      ],
    },

    /* ─── Revelation 21:24–27 — The Nations and the Book of Life ──────────── */
    {
      ref: 'Revelation 21:24–27',
      title: 'The Nations Walk in the Light',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            verse(24, t('And the nations of them which are saved shall walk in the light of it: and the kings of the earth do bring their glory and honour into it.')),
            verse(25, t('And the gates of it shall not be shut at all by day: for there shall be no night there.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-nations-saved',
          html: 'The nations are not obliterated in the new creation. They are transformed. They walk in the light. Their kings bring their glory—not their weapons, not their dominion, but their cultural gifts, their achievements, the beauty they have created. Nothing good is lost in the renewal of all things.',
        },
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            verse(26, t('And they shall bring the glory and honour of the nations into it:')),
            verse(27, t('And there shall in no wise enter into it any thing that defileth, neither whatsoever worketh abomination, or maketh a lie: but they which are written in the '), hy('Lamb&apos;s book of life', 'c-lambs-book'), t('.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-lambs-book',
          html: 'The final criterion for entry is not achievement, not goodness, not works, but one thing: being written in the Lamb&apos;s book of life. This name is written not by you, but by Him. And it is written in the blood, in the cross, in His finished work. Entrance is by grace, through faith, from the very beginning.',
        },
        {
          kind: 'greek',
          id: 'greek-phōs',
          title: 'Phōs — &ldquo;Light&rdquo; (Spiritual Illumination)',
          script: 'φῶς',
          translit: '<strong>phōs</strong> · light; illumination; truth; the divine light of revelation',
          description: 'Phōs is not just physical light but spiritual light—the light of truth, revelation, the knowledge of God. To walk in the light is to walk in truth, in the presence of God, in complete transparency.',
        },
        {
          kind: 'carry',
          html: 'Your name in the Lamb&apos;s book of life is not earned. It is written by His hand, signed in His blood. You don&apos;t achieve it by being good enough or strong enough. You receive it by faith—by turning to Him and trusting that He has done what you could never do. That name, written there, is your security forever.',
        },
        {
          kind: 'reflection',
          id: 'rev21-ref-8',
          prompt: 'What does it mean to you that your entrance into the city is not based on your accomplishments or righteousness, but on being written in the Lamb&apos;s book of life?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Revelation 21',
    quote:
      'And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain: for the former things are passed away. Behold, I make all things new.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Revelation 21 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-genesis-2-3',
      kind: 'study',
      source: 'Sefaria',
      label: 'Genesis 2–3 — The Garden of Eden',
      url: 'https://www.sefaria.org/Genesis.2-3',
      description: 'The original creation and fall — the template for the restoration in Revelation&apos;s new creation.',
    },
    {
      id: 'sefaria-ezekiel-47-48',
      kind: 'study',
      source: 'Sefaria',
      label: 'Ezekiel 47–48 — The Holy City Restored',
      url: 'https://www.sefaria.org/Ezekiel.47-48',
      description: 'OT vision of the restored temple city with river and division of the land.',
    },
    {
      id: 'intertextual-genesis-revelation-garden',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Genesis 2–3 ↔ Revelation 21–22',
      url: 'https://intertextual.bible/text/genesis-2/revelation-21.1',
      description: 'The garden returning — from Eden lost to Eden restored as the new Jerusalem.',
    },
  ],


};
