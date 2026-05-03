import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Revelation 9 — The Fifth and Sixth Trumpets
 *
 * The angel sounds the fifth trumpet, and a star falls from heaven to open
 * the bottomless pit. Smoke billows forth, and locusts emerge—creatures that
 * torment those who lack the seal of God on their foreheads. Men seek death
 * but cannot find it. Then the sixth angel sounds, and four mighty angels
 * bound at the Euphrates are loosed. An army of two hundred million horsemen
 * brings death, yet the survivors refuse to repent.
 */
export const REVELATION_9: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 9,

  estimatedMinutes: { 5: 6, 10: 12, 15: 15 },
  intros: [
    'Chapter 9 marks a deepening of judgment. The first four trumpets brought destruction to creation itself—earth, sea, stars, light. But now the torment turns directly on those who are not sealed with God. A star falls from heaven carrying the key to the abyss. What emerges from that darkness is beyond nightmare: locusts with human faces and scorpion tails, commanded by a king whose name means Destroyer.',
    'Yet destruction alone is not the point. Even as judgment escalates, even as riders bring death across a third of the earth, those who witness it refuse to turn. They will not repent of idolatry, murder, sorcery, or theft. Judgment and grace collide. God&apos;s patience has a limit. The door is still open to those who will turn, but the window is closing.',
  ],

  opener: {
    matchTitle: /locust|abyss|trumpet|judgment|horsemen/i,
    matchArtist: /doré|tissot|repin/i,
    caption: 'Trumpets of Judgment and Torment',
  },

  sections: [
    /* ─── Revelation 9:1 — The Fifth Angel Sounds ──────────────────────── */
    {
      ref: 'Revelation 9:1',
      title: 'The Fifth Angel Sounds',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              1,
              t('And the fifth angel sounded, and I saw '),
              hp('a star fall from heaven unto the earth', 'rev9-starfall'),
              t(': and to him was given '),
              hy('the key of the bottomless pit', 'rev9-abyss'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev9-starfall',
          html:
            'A star falls. In heaven, this is an upheaval—things that seemed fixed are shaken loose. The star is not a point of light but a person, an angel carrying a key. To be given a key is to be granted authority, released to act. The pit itself is bottomless, without foundation or limit. What lies there has been bound, waiting. Now the seal breaks open.',
        },
        {
          kind: 'greek',
          id: 'rev9-abyss',
          title: 'Abyssos — Bottomless Pit',
          script: 'ἄβυσσος',
          translit: '<strong>abyssos</strong> · abyss; the deep; the boundless place',
          description:
            'This is not merely Hades or the grave. The abyss is the place of chaos and imprisonment, mentioned in Paul&apos;s letters and in apocalyptic literature as the domain where destructive powers are held. Its opening spells release, not relief.',
        },
        {
          kind: 'carry',
          html:
            'When you feel the ground shift—when stability you thought was permanent cracks open—remember that God alone holds the keys. Nothing escapes that has not been permitted to escape. Even in seeming chaos, His sovereignty stands.',
        },
      ],
    },

    /* ─── Revelation 9:2 — The Smoke from the Pit ──────────────────────── */
    {
      ref: 'Revelation 9:2',
      title: 'The Bottomless Pit Opens',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              2,
              t('And he opened the bottomless pit; and '),
              hy('there arose a smoke out of the pit', 'rev9-smoke'),
              t(', as the smoke of a great furnace; and the sun and the air were darkened by reason of the smoke of the pit.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev9-smoke',
          html:
            'Darkness rises. The smoke is not gentle or ordinary but comes from a furnace—a place of heat, refining, and destruction. The sun is darkened. The very air becomes unbreathable. This is not subtle judgment. When the abyss opens, it does not slip in unnoticed. All creation feels the shock.',
        },
        {
          kind: 'reflection',
          id: 'rev9-darkness',
          prompt: 'What kinds of darkness—spiritual, emotional, social—are you living in or witnessing? How does knowing that even this darkness exists within God&apos;s sovereignty shape your faith?',
        },
      ],
    },

    /* ─── Revelation 9:3–4 — The Locusts Emerge ────────────────────────── */
    {
      ref: 'Revelation 9:3–4',
      title: 'The Locusts of Judgment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              3,
              t('And there came out of the smoke '),
              hp('locusts upon the earth', 'rev9-akrides'),
              t(': and '),
              hy('unto them was given power, as the scorpions of the earth have power', 'rev9-scorpion'),
              t('.'),
            ),
            verse(
              4,
              t('And it was commanded them that '),
              hy('they should not hurt the grass of the earth, neither any green thing, neither any tree', 'rev9-limit'),
              t('; but only those men which have not the seal of God in their foreheads.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev9-limit',
          html:
            'Here is a boundary. For all the horror of these locusts, they are restrained. They cannot destroy the earth&apos;s vegetation. They cannot torment the sealed. God&apos;s mercy still holds. The sealing that happened in Chapter 7—when servants of God were marked in their foreheads—becomes the only shield that matters. Those without the mark will be tormented. Those with it will pass untouched.',
        },
        {
          kind: 'greek',
          id: 'rev9-akrides',
          title: 'Akris — Locust',
          script: 'ἀκρίς',
          translit: '<strong>akris</strong> · locust; the devouring insect',
          description:
            'In the Old Testament, locusts are a plague sent by God. They strip the land bare. But these locusts do not hunger for crops; they hunger for those who have rejected the mark of God. They are judgment incarnate.',
        },
        {
          kind: 'commentary',
          id: 'rev9-scorpion',
          html:
            'The power given to these locusts is a scorpion&apos;s power—to sting and torment. But this is a measured judgment. The torment lasts five months. It is painful but not eternal, a call to turn before the final judgment comes.',
        },
        {
          kind: 'carry',
          html:
            'What marks you as God&apos;s own? Is it something visible in your thoughts, your choices, your allegiance? Ask yourself: if judgment came looking for the sealed, would you be among them?',
        },
      ],
    },

    /* ─── Revelation 9:5–6 — "They Shall Seek Death and Not Find It" ────── */
    {
      ref: 'Revelation 9:5–6',
      title: '&quot;Men Shall Seek Death and Not Find It&quot;',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              5,
              t('And to them it was given that they should not kill them, but that they should be tormented five months: and their torment was as the torment of a scorpion, when he striketh a man.'),
            ),
            verse(
              6,
              t('And in those days '),
              hp('shall men seek death, and shall not find it', 'rev9-death'),
              t('; and shall desire to die, and death shall flee from them.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev9-death',
          html:
            'The torment has an endpoint—five months. But during that time, the afflicted will beg for death and be denied it. This is not meaningless cruelty; it is a final plea for repentance. When all comfort is gone, when pain is relentless, the only escape seems to be death. But even that is withheld. God extends the opportunity to turn, to choose differently, to seek His face.',
        },
        {
          kind: 'christ',
          id: 'rev9-christ-patience',
          title: 'Christ Connection — The Patience of God',
          html:
            'Peter writes in 2 Peter 3:9 that the Lord is "not willing that any should perish, but that all should come to repentance." The locusts do not kill. The torment is given as a teacher, a last call. Christ Himself, in His earthly ministry, wept over Jerusalem, saying He would have gathered her children as a hen gathers her brood (Matthew 23:37). The same compassion shows here—judgment that aims not at death but at turning.',
        },
        {
          kind: 'carry',
          html:
            'If your life has become unbearable, if you find yourself in a place where you cannot escape—that wilderness of suffering may be God&apos;s last, most urgent invitation to return. Do not flee deeper into the darkness. Turn toward the light.',
        },
      ],
    },

    /* ─── Revelation 9:7–9 — The Shape and Sound of the Locusts ──────────── */
    {
      ref: 'Revelation 9:7–9',
      title: 'The Locusts Described',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              7,
              t('And the shapes of the locusts were like unto '),
              hy('horses prepared unto battle', 'rev9-horseshape'),
              t('; and on their heads were as it were '),
              hy('crowns like gold', 'rev9-crowns'),
              t('; and their faces were as the faces of men.'),
            ),
            verse(
              8,
              t('And they had hair as the hair of women, and their teeth were as the teeth of lions.'),
            ),
            verse(
              9,
              t('And they had breastplates, as it were breastplates of iron; and '),
              hy('the sound of their wings was as the sound of chariots of many horses running to battle', 'rev9-sound'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev9-horseshape',
          html:
            'What John sees is not one creature but a hybrid of images. The locusts are war-beasts, armored and prepared for combat. Yet they also possess human features—faces, hair, teeth. The combination is deliberately unsettling. These are not natural animals. They are something worse: destruction with intelligence, wrath with purpose. They wear crowns as though they are royalty, though they serve the abyss.',
        },
        {
          kind: 'commentary',
          id: 'rev9-crowns',
          html:
            'Crowns of gold adorning these creatures of judgment suggest a twisted kingship. They appear victorious, adorned like conquerors, yet they serve the destroyer. Their crowns are parody crowns, the gold of this world adorning instruments of God&apos;s will.',
        },
        {
          kind: 'commentary',
          id: 'rev9-sound',
          html:
            'The sound of countless wings beating in unison creates the roar of an army. This is no subtle torment but announced, overwhelming, inescapable. The horses and their riders move with purpose and noise.',
        },
        {
          kind: 'reflection',
          id: 'rev9-shape-reflection',
          prompt: 'What modern forms of judgment or destruction do you see that blend the inhuman with the intelligent? What locust-like forces tear at people&apos;s faith?',
        },
      ],
    },

    /* ─── Revelation 9:10–11 — The King of the Locusts ──────────────────── */
    {
      ref: 'Revelation 9:10–11',
      title: 'Apollyon the Destroyer',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              10,
              t('And they had tails like unto scorpions, and there were stings in their tails: and their power was to hurt men five months.'),
            ),
            verse(
              11,
              t('And they had a king over them, which is '),
              hp('the angel of the bottomless pit', 'rev9-apollyon'),
              t(', whose name in the Hebrew tongue is '),
              hy('Abaddon', 'rev9-abaddon'),
              t(', but in the Greek tongue hath his name '),
              hy('Apollyon', 'rev9-apollyon-greek'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev9-apollyon',
          html:
            'The swarm has a commander. He rises from the abyss itself, and his name is the same in every language—Destruction. The duality is significant: in Hebrew, Abaddon names what he is; in Greek, Apollyon carries the same meaning but also echoes Apollo, the god of light and medicine. The irony cuts deep. Where destruction masquerades as enlightenment or healing, it is Apollyon at work. He is the ancient angel of the pit, now released to torment those who rejected God&apos;s seal.',
        },
        {
          kind: 'commentary',
          id: 'rev9-abaddon',
          html:
            'Abaddon in Hebrew means destruction, ruin, and the place of destruction. This name carries the weight of what he does. Judgment, loss, the undoing of human pride and rebellion.',
        },
        {
          kind: 'greek',
          id: 'rev9-apollyon-greek',
          title: 'Apollyon — Destroyer',
          script: 'Ἀπολλύων',
          translit: '<strong>Apollyon</strong> · the one who destroys; from apollymi (to ruin, annihilate)',
          description:
            'The name is an active verb form—not a static title but a living description. This being does not possess destruction; he is destruction itself. He unmakes, tears down, and brings to ruin all that stands against God.',
        },
        {
          kind: 'christ',
          id: 'rev9-christ-keys',
          title: 'Christ Connection — The Keys Belong to Christ',
          html:
            'In Revelation 1:18, Christ says of Himself: "I am he that liveth, and was dead; and, behold, I am alive for evermore, Amen; and have the keys of hell and of death." The fallen star is given a key to the abyss. But Christ holds the keys to death and Hades themselves. The abyss may be opened, its locusts loosed, but they operate under the ultimate authority of the Lamb. Destruction is not loose and wild; it is the servant of God&apos;s judgment.',
        },
        {
          kind: 'carry',
          html:
            'Whatever force of destruction you witness or feel—whether personal, social, or spiritual—it is not absolute. The keys of death and life belong to Christ. Apollyon does not have the final word.',
        },
      ],
    },

    /* ─── Revelation 9:12 — The First Woe Passes ────────────────────────── */
    {
      ref: 'Revelation 9:12',
      title: 'A Breath Between Woes',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              12,
              t('One woe is past; and, behold, there come two woes more hereafter.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev9-woe-past',
          html:
            'A moment of pause, a catching of breath. One woe has ended. The fifth trumpet belongs to history now. But the vision does not end with relief. It ends with warning. Two more woes are coming. The narrative rhythm accelerates. What John has witnessed is a sequence of escalating judgments, and we are not yet at the end.',
        },
        {
          kind: 'reflection',
          id: 'rev9-woe-breathing',
          prompt: 'Where in your life have you seen a season of difficulty end, only to have another begin? How do you maintain faith when one struggle passes but another waits?',
        },
      ],
    },

    /* ─── Revelation 9:13–14 — The Sixth Angel Sounds ───────────────────── */
    {
      ref: 'Revelation 9:13–14',
      title: 'The Sixth Angel Sounds',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              13,
              t('And the sixth angel sounded, and I heard a voice from the '),
              hy('four horns of the golden altar', 'rev9-altar'),
              t(', which is before God,'),
            ),
            verse(
              14,
              t('Saying to the sixth angel which had the trumpet, '),
              hy('Loose the four angels which are bound in the great river Euphrates', 'rev9-euphrates'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev9-altar',
          html:
            'The voice comes from the golden altar—the place where prayers and incense rise to God. This is not a random command but a response to the cries of those who have suffered. The sealed of God, those who were tormented by the locusts but held fast, their prayers reach heaven. And heaven responds. The boundless patience of God has limits. Mercy did not turn sinners in the first trial. Now comes a second judgment.',
        },
        {
          kind: 'commentary',
          id: 'rev9-euphrates',
          html:
            'The Euphrates appears in Scripture as the boundary of Eden, the river at the edge of the promised land. Here, four angels bound at that ancient river are loosed for judgment. What was held in check is now released. The geography is symbolic: from the easternmost boundary, judgment comes to all the earth.',
        },
        {
          kind: 'carry',
          html:
            'Your prayers matter. Even when they seem to go unanswered, they are heard at the golden altar. They rise like incense. And they shape what God does next in the world.',
        },
      ],
    },

    /* ─── Revelation 9:15–16 — The Cavalry of Judgment ───────────────────── */
    {
      ref: 'Revelation 9:15–16',
      title: 'Two Hundred Million Horsemen',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              15,
              t('And the four angels were loosed, which were prepared for an hour, and a day, and a month, and a year, for to slay the third part of men.'),
            ),
            verse(
              16,
              t('And '),
              hy('the number of the army of the horsemen were two hundred thousand thousand', 'rev9-number'),
              t(': and I heard the number of them.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev9-number',
          html:
            'Two hundred million. The numbering itself speaks to God&apos;s knowledge and precision. Yet again, as with the 144,000 sealed, the exact count is possible because nothing escapes His sight. These horsemen have been prepared from before the world began, held for this hour, this day, this month, this year. Their release is not random; it is scheduled, purposeful, measured. They will slay a third of humanity. The scale is vaster than anything yet witnessed.',
        },
        {
          kind: 'reflection',
          id: 'rev9-cavalry-reflection',
          prompt: 'In a world where death comes swiftly and often without warning, what does it mean to trust that God has numbered the days of nations and peoples?',
        },
      ],
    },

    /* ─── Revelation 9:17–19 — The Horsemen Described ──────────────────── */
    {
      ref: 'Revelation 9:17–19',
      title: 'The Horses and Their Riders',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              17,
              t('And thus I saw the horses in the vision, and them that sat on them, having '),
              hy('breastplates of fire and of jacinth and of brimstone', 'rev9-breastplate'),
              t(': and the heads of the horses were as the heads of lions; and out of their mouths issued fire and smoke and brimstone.'),
            ),
            verse(
              18,
              t('By these three was the third part of men killed, by the fire, and by the smoke, and by the brimstone, which issued out of their mouths.'),
            ),
            verse(
              19,
              t('For their power is in their mouth, and in their tails: for their tails were like unto serpents, and had heads, and with them they do hurt.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev9-breastplate',
          html:
            'Fire, smoke, and brimstone. These are not metaphorical devastations but real, violent destruction. The horses themselves become instruments of judgment, their mouths spewing the elements of the abyss. The image is apocalyptic in the fullest sense—a breaking open of the boundary between realms, between the natural and the infernal. The tails with heads are equally horrifying. These creatures are wholly given to destruction, in front and behind. There is no mercy in their design.',
        },
        {
          kind: 'carry',
          html:
            'When you see destruction in the world—war, plague, the consequences of human sin compounded and amplified—it is real and it matters. Do not spiritualize away the pain. But neither stop there. Know that this too is part of a larger story in which God&apos;s justice and mercy will have the final word.',
        },
      ],
    },

    /* ─── Revelation 9:20–21 — "Yet Repented Not" ────────────────────────── */
    {
      ref: 'Revelation 9:20–21',
      title: '&quot;Yet Repented Not&quot;',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            verse(
              20,
              t('And the rest of the men which were not killed by these plagues yet '),
              hp('repented not of the works of their hands', 'rev9-repent'),
              t(', that they should not worship demons, and idols of gold, and silver, and brass, and stone, and of wood: which neither can see, nor hear, nor walk:'),
            ),
            verse(
              21,
              t('Neither '),
              hy('repented they of their murders, nor of their sorceries, nor of their fornication, nor of their thefts', 'rev9-sin-list'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev9-repent',
          html:
            'Even after such devastation, the survivors do not turn. They have seen the fifth plague and the sixth. They have witnessed judgment pour from heaven. Yet their hearts remain fixed. This is the hardening of the heart that Jesus spoke of. It is what Paul described as God giving people over to the desires they have chosen. At some point, judgment no longer calls people back; it simply confirms the choice they have already made.',
        },
        {
          kind: 'greek',
          id: 'rev9-metanoeō',
          title: 'Metanoeō — Repent',
          script: 'μετανοέω',
          translit: '<strong>metanoeō</strong> · to turn around; to change one&apos;s mind and life direction',
          description:
            'To repent is not merely to feel sorrow but to turn. The word means a complete reversal. Those who do not repent keep walking the same path, deeper into darkness, even as destruction falls around them.',
        },
        {
          kind: 'commentary',
          id: 'rev9-sin-list',
          html:
            'The catalogue of sins—murders, sorceries, fornication, thefts—is a litany of human rebellion. These are the works of hands turned away from God. The survivors refuse to let go of them, even as God offers a final window for turning. Their refusal is deliberate. They choose the darkness.',
        },
        {
          kind: 'christ',
          id: 'rev9-christ-repentance',
          title: 'Christ Connection — The Call to Repentance',
          html:
            'Christ&apos;s first message, recorded in the Gospels, was "repent: for the kingdom of heaven is at hand" (Matthew 3:2). His final message, through His church, is the same: turn around. The fact that the unsealed refuse—even as judgment piles upon judgment—reveals the depth of human resistance to God. Yet this also shows why the sealed are sealed. They have answered the call. They have turned. They are marked as His.',
        },
        {
          kind: 'carry',
          html:
            'The question is not abstract. Will you turn? Will you answer when God calls? Or will you, like those in John&apos;s vision, harden your heart and double down on the very things destroying you?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'He that hath an ear, let him hear what the Spirit saith.',
    snippet: 'Revelation 9 — The fifth and sixth trumpets sound. Judgment comes upon those who have rejected God&apos;s seal.',
    ref: 'Revelation 9',
    label: 'Share Revelation 9',
  },
};
