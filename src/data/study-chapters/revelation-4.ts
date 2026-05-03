import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Revelation 4 — The Throne in Heaven
 *
 * John is caught up in the Spirit and sees the throne of God, surrounded by
 * twenty-four elders and four living creatures full of eyes. The scene is one
 * of transcendent worship and majesty. Every visual detail—jasper, sardine,
 * rainbow, lightning, creatures—echoes Ezekiel and Isaiah&apos;s visions of God&apos;s
 * holiness. This is the pivot of Revelation: from earthly letters to the churches,
 * John shifts our gaze to what is true in heaven. Above the suffering, the throne stands.
 */
export const REVELATION_4: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 4,

  estimatedMinutes: { 5: 5, 10: 11, 15: 15 },
  intros: [
    'The letters to the seven churches are finished. Now the scene shifts—John is transported to heaven itself. What the earthly churches endure in tribulation is met here by a vision of an unchanging reality: God sits upon His throne. Above all earthly rulers, all human authority, all earthly sorrow, there reigns one whose kingdom can never be shaken. For every believer facing persecution or hardship, John&apos;s vision asks the same question: Will you believe what is eternally true, or only what you can presently see?',
    'Every detail in this chapter recalls the visions of Ezekiel and Isaiah—the throne, the rainbow, the four creatures, the unceasingly singing "Holy, holy, holy." This is not fanciful imagery but a window into the throne-room that has been God&apos;s seat since before time began. The creatures worship without ceasing. The elders cast down their crowns. All heaven sings the worthiness of the One who created all things. This is the song your life is meant to echo.',
  ],

  opener: {
    matchArtist: /gustave doré|tissot/i,
    matchTitle: /throne|heaven|revelation|vision/i,
    caption: 'The Throne of God in Heaven',
  },

  sections: [
    /* ─── Revelation 4:1 — Come Up Hither ────────────────────────────────── */
    {
      ref: 'Revelation 4:1',
      title: 'Come Up Hither',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              1,
              t('After this I looked, and, behold, '),
              hp('a door was opened in heaven', 'rev4-door'),
              t(': and the first voice which I heard was as it were of a trumpet talking with me; which said, '),
              hp('Come up hither', 'rev4-come-up'),
              t(', and I will shew thee things which must be hereafter.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev4-door',
          html:
            'A door opens. Not a vision of the distant past, but an invitation into what is presently happening. "After this"—after the letters—John sees what was always true but now becomes visible. Heaven is not closed. It is standing open. The boundary between earth and the throne-room of God is permeable to those who are willing to be transported by the Spirit.',
        },
        {
          kind: 'commentary',
          id: 'rev4-come-up',
          html:
            'The trumpet voice is unmistakable. A summons, not a whisper. Throughout Scripture, the trumpet announces the presence of God. At Sinai, God descended in thunder and trumpet. At the final day, the archangel will shout with the voice of the trumpet. Here, it calls John upward. And with him, through him, it calls every reader: come up. See what is real.',
        },
        {
          kind: 'carry',
          html:
            'In your confusion, in the news cycle&apos;s constant catastrophe, in your small dark room at night—a door stands open. The call to come up is not escapist. It is the opposite. To see the throne is to see what all earthly powers ultimately answer to. To be called up is to be reoriented toward what actually matters. Where is that call sounding in your life right now?',
        },
        {
          kind: 'reflection',
          id: 'rev4-door-reflection',
          prompt: 'When you feel farthest from God, or most surrounded by earthly trouble, what would change if you truly believed the door to heaven stands open?',
        },
      ],
    },

    /* ─── Revelation 4:2 — A Throne Was Set ──────────────────────────────── */
    {
      ref: 'Revelation 4:2',
      title: 'A Throne Was Set in Heaven',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              2,
              t('And immediately I was in the spirit: and, behold, '),
              hp('a throne was set in heaven', 'rev4-throne-set'),
              t(', and '),
              hp('one sat on the throne', 'rev4-one-sat'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev4-throne-set',
          html:
            'Immediately—without hesitation or distance—John is in the Spirit. The throne is not hidden or whispered about. It is <em>set</em>: placed, established, unmovable. This is not a throne that can be overturned, challenged, or displaced. It was set before Babylon rose, before Rome, before the empires John&apos;s readers feared. It will stand when all earthly kingdoms have turned to dust.',
        },
        {
          kind: 'greek',
          id: 'rev4-thronos',
          title: 'Thronos — Throne',
          script: 'θρόνος',
          translit: '<strong>thronos</strong> · seat of authority; place of judgment and rule',
          description:
            'A throne represents more than a chair. It is the seat of absolute authority. In the ancient world, to sit upon a throne was to claim dominion over all who approach it. Here, the throne is not in Rome or Jerusalem, but in heaven. The One who sits there rules not by military might, but by the word that brought all things into being.',
        },
        {
          kind: 'commentary',
          id: 'rev4-one-sat',
          html:
            'One sat on the throne. Not named yet—the next verses will describe Him. But notice: John does not argue for God&apos;s existence or power. He simply reports what he sees. Someone is sitting on that throne. That is the fundamental truth upon which all others rest. Before you believe anything else about God, you must see that He sits.',
        },
        {
          kind: 'reflection',
          id: 'rev4-throne-reflection',
          prompt: 'When you imagine God&apos;s throne, what comes to mind? Is it a place of fear, judgment, mercy, or something else?',
        },
      ],
    },

    /* ─── Revelation 4:3 — Jasper, Sardine, and Rainbow ───────────────────── */
    {
      ref: 'Revelation 4:3',
      title: 'Jasper, Sardine, and Rainbow',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              3,
              t('And he that sat was to look upon like a '),
              hy('jasper', 'rev4-jasper'),
              t(' and a '),
              hy('sardine stone', 'rev4-sardine'),
              t(': and there was a '),
              hy('rainbow round about the throne', 'rev4-rainbow'),
              t(', in sight like unto an emerald.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev4-jasper',
          html:
            'Jasper in the ancient world was a crystal-clear stone, often colorless or faintly white. It appears again in Revelation 21:11 as the description of the New Jerusalem itself. Light passes through jasper—it is transparent, brilliant, pure. The figure on the throne is described not as bronze or gold, but as translucent light.',
        },
        {
          kind: 'greek',
          id: 'rev4-iaspis',
          title: 'Iaspis — Jasper',
          script: 'ἴασπις',
          translit: '<strong>iaspis</strong> · jasper; a precious crystal stone',
          description:
            'Jasper represents clarity and translucence. Through it, light shines. God is light, and in Him is no darkness. To describe the One on the throne as looking like jasper is to say He is utterly transparent—no shadow, no deceit, no hidden judgment.',
        },
        {
          kind: 'commentary',
          id: 'rev4-sardine',
          html:
            'Sardine stone was deep red or crimson. It appears once more in Revelation 4 and then again in Isaiah&apos;s vision (Isa. 54:11–12), where it adorns the city of God. Red is the color of blood, of covenant, of sacrifice. The One on the throne wears the colors of redemption itself.',
        },
        {
          kind: 'commentary',
          id: 'rev4-rainbow',
          html:
            'A rainbow surrounds the throne, and John sees it like an emerald—green, the color of life and hope. This recalls the covenant rainbow after the flood (Genesis 9:12–17), God&apos;s promise never to destroy the earth again. Here, at the throne of God, that same rainbow encircles Him. Every judgment that flows from the throne is clothed in mercy. God rules with justice <em>and</em> with grace.',
        },
        {
          kind: 'greek',
          id: 'rev4-iris',
          title: 'Iris — Rainbow',
          script: 'ἶρις',
          translit: '<strong>iris</strong> · rainbow; also the goddess of the rainbow',
          description:
            'Iris in Greek mythology was the messenger goddess, the one who carried messages from the gods to mortals. In Scripture, the rainbow is God&apos;s covenant sign. Here it is not a goddess but a symbol—the promise that wraps around the throne.',
        },
        {
          kind: 'christ',
          id: 'rev4-christ-light',
          title: 'Christ Connection — Light Seen Directly',
          html:
            'John writes in his Gospel: "God is light, and in him is no darkness at all" (1 John 1:5). And: "I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life" (John 8:12). In Revelation 4, what John sees is the light of God&apos;s face, the transparency and purity that Jesus embodied when He walked the earth. To know Christ is to know what jasper and sardine and rainbow look like when they sit upon a throne.',
        },
        {
          kind: 'carry',
          html:
            'Whatever justice you fear from God, know this: it is surrounded by a rainbow. The One who rules the universe is clothed not in darkness but in crystal clearness, in the red of covenant-love, in the green of life. You are not approaching a capricious judge, but a sovereign who has already promised mercy.',
        },
      ],
    },

    /* ─── Revelation 4:4 — The Four and Twenty Elders ────────────────────── */
    {
      ref: 'Revelation 4:4',
      title: 'The Four and Twenty Elders',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              4,
              t('And round about the throne were four and twenty seats: and upon the seats I saw '),
              hy('four and twenty elders', 'rev4-elders'),
              t(' sitting, clothed in white raiment; and they had on their heads '),
              hg('crowns of gold', 'rev4-crowns'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev4-elders',
          html:
            'Twenty-four elders: twelve representing the twelve tribes of Israel, twelve representing the twelve apostles of the Church. All the redeemed—from the old covenant and the new—sit robed in white around the throne. They are not servants standing at attention, but seated, at rest. Their work is done. Their salvation is secure. They sit in the very presence of God.',
        },
        {
          kind: 'greek',
          id: 'rev4-presbyteros',
          title: 'Presbyteros — Elder',
          script: 'πρεσβύτερος',
          translit: '<strong>presbyteros</strong> · elder; one advanced in age or wisdom; one of authority',
          description:
            'An elder is not a child. Elders have lived, suffered, learned. That the redeemed are described as elders—not youths or servants—tells us something: God honors those who have endured with Him. Your faithfulness matters. Your years of walking with God matter. They are part of your crown.',
        },
        {
          kind: 'commentary',
          id: 'rev4-crowns',
          html:
            'The crowns are not royal crowns—they are <em>stephani</em>, wreaths, the crowns of victors in athletic games. These are the crowns Paul writes about (2 Tim. 4:8)—the crown of righteousness awarded to those who have loved His appearing. And yet, in the next chapter, these elders will cast them down at the feet of the Lamb (5:10). They receive them only to surrender them in worship.',
        },
        {
          kind: 'reflection',
          id: 'rev4-elders-reflection',
          prompt: 'What does it mean to you that the redeemed are seated, robed, crowned in the presence of God? What hope does that give you?',
        },
      ],
    },

    /* ─── Revelation 4:5–6 — Lightnings, Voices, and the Sea of Glass ────── */
    {
      ref: 'Revelation 4:5–6',
      title: 'Lightnings, Thunderings, and the Sea of Glass',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              5,
              t('And out of the throne proceeded '),
              hg('lightnings and thunderings and voices', 'rev4-power'),
              t(': and there were seven lamps of fire burning before the throne, which are the '),
              hy('seven Spirits of God', 'rev4-seven-spirits'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev4-power',
          html:
            'Lightnings and thunderings and voices—this is the language of Sinai, where God descended in fire and thunder. But notice: they <em>proceed</em> from the throne. They are not threats but manifestations of God&apos;s presence and power. Where God is, creation shakes. The atmosphere itself bears witness to His authority.',
        },
        {
          kind: 'commentary',
          id: 'rev4-seven-spirits',
          html:
            'Seven lamps burn before the throne—the number seven signifying completeness. These are identified as "the seven Spirits of God," a phrase that appears only in Revelation. Some interpret this as the Holy Spirit in His sevenfold nature (power, wisdom, understanding, counsel, knowledge, fear of the Lord—echoing Isaiah 11:2). Others see them as seven angelic attendants. But the key is this: the Spirit is not absent from the throne. He burns there as a perpetual flame, active, alive, filling all the earth.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              6,
              t('And before the throne there was '),
              hg('a sea of glass like unto crystal', 'rev4-glass-sea'),
              t(': and in the midst of the throne, and round about the throne, were '),
              hp('four beasts full of eyes before and behind', 'rev4-beasts'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev4-glass-sea',
          html:
            'A sea of glass—the image of water, but solid, transparent, like crystal. In Exodus 24:10, the elders of Israel saw God and "under his feet as it were a paved work of a sapphire stone." Here, the glass sea suggests both stability (solid as stone) and transparency (you can see through it). Before the throne, there is no murk, no hidden judgment, no shadow. Everything is visible.',
        },
        {
          kind: 'commentary',
          id: 'rev4-beasts',
          html:
            'In the midst of the throne—notice this: they are not opposed to it, but <em>in the midst of</em> it, surrounded by it, supported by it. Four beasts, full of eyes before and behind. Ezekiel saw these same creatures and was awestruck. Eyes everywhere—they see all things, understand all things, miss nothing. They exist to worship the One at the center.',
        },
        {
          kind: 'artwork',
          matchTitle: /living creatures|beasts|eyes/i,
          caption: 'The Four Living Creatures Full of Eyes',
        },
      ],
    },

    /* ─── Revelation 4:6–8 — The Four Living Creatures ───────────────────── */
    {
      ref: 'Revelation 4:6–8',
      title: 'The Four Living Creatures',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              6,
              t('And '),
              hg('the first beast was like a lion', 'rev4-lion'),
              t(', and the second beast like a calf, and '),
              hg('the third beast had a face as a man', 'rev4-man'),
              t(', and the fourth beast was like a flying eagle.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev4-lion',
          html:
            'Lion: power, majesty, courage. These are the four forms in which God is known throughout Scripture. The lion recalls both the Lion of Judah (the warrior-king) and the terrible judgment of God upon the wicked. Yet here, the lion is part of the throne-room worship.',
        },
        {
          kind: 'commentary',
          id: 'rev4-man',
          html:
            'Man (or human): rationality, dominion over creation, the image-bearer. A human face in the throne-room—traditional interpretation sees in these four faces the four Gospels: Matthew (man—genealogy, humanity of Jesus), Mark (lion—power), Luke (ox/calf—sacrifice and service), John (eagle—ascension, the divine perspective). Whether that connection holds or not, the human face reminds us that God became flesh and dwelt among us.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              8,
              t('And the four beasts said, Holy, holy, holy, Lord God Almighty, which was, and is, and is to come.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          html:
            'Their song is the <em>Trisagion</em>—the threefold "Holy, holy, holy"—from Isaiah 6:3, where Isaiah glimpses the throne of God and trembles. These creatures never sleep, never cease, never grow weary. All day and night, they sing the holiness of the One on the throne. This is not tedious repetition. This is rapture. To see God is to be captured by His beauty.',
        },
        {
          kind: 'carry',
          html:
            'You live in a world that shouts loud—a thousand voices competing for your attention, your fear, your despair. Meanwhile, in the throne-room of God, creatures who have seen Him with their own eyes sing without ceasing, "Holy, holy, holy." Let their song drown out the noise. Let their never-failing worship be the soundtrack of your faith.',
        },
        {
          kind: 'reflection',
          id: 'rev4-creatures-reflection',
          prompt: 'The creatures sing "Holy, holy, holy" without ceasing. What would it mean for you to join that song, even in the midst of your ordinary day?',
        },
      ],
    },

    /* ─── Revelation 4:9–10 — The Elders Worship ──────────────────────────── */
    {
      ref: 'Revelation 4:9–10',
      title: 'When Those Beasts Give Glory',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              9,
              t('And when those beasts give glory and honour and thanks to him that sat on the throne, who liveth for ever and ever,'),
            ),
            verse(
              10,
              t('The four and twenty elders fall down before him that sat on the throne, and worship him that liveth for ever and ever, and cast their '),
              hg('crowns before the throne', 'rev4-cast-crowns'),
              t(', saying,'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev4-cast-crowns',
          html:
            'When the creatures worship, the elders follow. It is not reluctant obedience; it is eager love. They cast their crowns down—an act of complete surrender. Everything they have achieved, every victory they won, every faithful endurance they showed, they lay at His feet. Not as a burden, but as an offering of joy.',
        },
        {
          kind: 'carry',
          html:
            'In heaven, the redeemed do not cling to their crowns. They do not say, "I earned these. I am proud of what I accomplished." Instead, they see the One on the throne and release their grip. Whatever you have built, whatever good you have done, whatever crowns the world has given you—they are temporary. The only worthy crown is His.',
        },
      ],
    },

    /* ─── Revelation 4:11 — Thou Art Worthy ──────────────────────────────── */
    {
      ref: 'Revelation 4:11',
      title: 'Thou Art Worthy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            verse(
              11,
              t('Thou art '),
              hp('worthy', 'rev4-axios'),
              t(', O Lord, to receive glory and honour and power: for thou hast created all things, and for thy pleasure they are and were created.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          html:
            'The song of heaven summarizes in a single sentence the reason for all worship: God created all things. Not just set them in motion, not just designed them and left them to run. He created them. All things exist because He willed them into being. And they were created for His pleasure, His joy, His glory—not for their own sake, and not for ours alone.',
        },
        {
          kind: 'greek',
          id: 'rev4-axios',
          title: 'Axios — Worthy',
          script: 'ἄξιος',
          translit: '<strong>axios</strong> · worthy; deserving; equal in value',
          description:
            'Axios does not mean "adequate" or "suitable." It means worthy of honor <em>equal to</em> one&apos;s status. God is worthy—not because creatures are generous in praise, but because His power and nature demand it. His worthiness is not dependent on our recognition. He is worthy whether anyone praises Him or not.',
        },
        {
          kind: 'christ',
          id: 'rev4-christ-creator',
          title: 'Christ Connection — All Things Created By Him',
          html:
            'John 1:3 teaches: "All things were made by him [Christ]; and without him was not any thing made that was made." Colossians 1:16 echoes it: "By him were all things created… And he is before all things, and by him all things consist" (KJV). The One on the throne and the Lamb who will appear in Chapter 5 are one in creation. To acknowledge God&apos;s worthiness as Creator is already to acknowledge Christ&apos;s power. All creation holds together <em>in Him</em>.',
        },
        {
          kind: 'carry',
          html:
            'Every atom of your body, every star, every breath—created by the hand of God for His pleasure. This means you are not an accident. You are not the product of blind chance. You exist because the One on the throne found pleasure in your existence. Let that truth reshape what you believe about yourself.',
        },
        {
          kind: 'reflection',
          id: 'rev4-worthy-reflection',
          prompt: 'If all things were created for God&apos;s pleasure, how does that change the way you understand your own purpose?',
        },
        {
          kind: 'artwork',
          matchArtist: /lucas cranach|michelangelo|raphael/i,
          matchTitle: /creation|throne|heaven/i,
          caption: 'Throne Room Worship',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Holy, holy, holy, Lord God Almighty, which was, and is, and is to come. Thou art worthy, O Lord, to receive glory and honour and power: for thou hast created all things, and for thy pleasure they are and were created.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Revelation 4 · Study Guide',
  },

  hasHebrew: false,
};
