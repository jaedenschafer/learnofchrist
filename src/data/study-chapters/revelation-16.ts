import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Revelation 16 — the seven vials of wrath. Gold-standard Genesis-1 quality.
 *
 * Structure: intro (2 paragraphs) → 10 main sections (each vial its own block
 * with 1–3 verses + commentary + Greek callouts + Christ Connections + Carry)
 * → opener artwork → bottom share card.
 *
 * Doctrinal care: Armageddon not mapped to a specific modern political event.
 * No Trinity framing. Christ Connections to cross + "It is finished" + wrath.
 */
export const REVELATION_16: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 16,

  estimatedMinutes: { beginner: 7, intermediate: 15, deep: 20 },
  intros: [
    'Revelation 16 opens with seven angels standing before the throne of God, each holding a vial filled with His wrath. One by one they pour them out upon the earth—and what follows is not random chaos but the mirror image of the plagues of Egypt, now poured out at cosmic scale. Sores break out on those who bore the mark of the beast. The sea becomes blood. Rivers turn red. The sun scorches. Darkness falls. The Euphrates dries up. And three unclean spirits—frogs—gather the kings of the earth for a final assembly at a place called Armageddon.',
    'Yet the chapter is not a scream; it is a whisper from the throne. When the seventh vial is poured, the voice of God speaks two words: <em>"It is done."</em> The same words Jesus spoke from the cross. The wrath of God against sin was drunk by Christ Himself in our place. What Revelation 16 shows is that His finished work on the cross is also the unfinishing of every kingdom that stands against Him. For those who have trusted His blood, this chapter is not a threat—it is a vindication.',
  ],

  opener: {
    matchArtist: /bosch/i,
    matchTitle: /apocalypse|temptation|hell/i,
    caption: 'Wrath and the Unfinished Kingdom',
  },

  sections: [
    /* ─── Introduction: The Voice from the Temple ──────────────────────── */
    {
      ref: 'Revelation 16:1',
      title: 'The Voice from the Temple',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(
              1,
              t('And I heard '),
              hp('a great voice out of the temple', 'intro-temple'),
              t(' saying to the seven angels, Go your ways, and '),
              hg('pour out the vials of the wrath of God', 'intro-vials'),
              t(' upon the earth.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'intro-temple',
          html:
            'John is not given a vision of a distant judgment. He hears it <em>from the temple</em>—from the holy of holies itself, the center of worship and communion. The wrath that pours out does not come from rage or whim. It comes from the throne room, from the God who is just and true. In the Old Testament, the Day of the Lord always begins with a command from God&apos;s presence.',
        },
        {
          kind: 'commentary',
          id: 'intro-vials',
          html:
            'The seven vials are not poured in random order but in echo of a pattern John&apos;s readers would have known by heart: the ten plagues of Egypt. Each one a measured response to persistent rejection of God&apos;s word. Each one a call to turn. And each time, Pharaoh&apos;s heart hardened further. Revelation 16 asks: what will a world do when given seven chances to repent?',
        },
        {
          kind: 'greek',
          id: 'intro-phiale',
          title: 'Phiale — Vial',
          script: 'φιάλη',
          translit: '<strong>phialē</strong> · a shallow cup or bowl held in the hand',
          description:
            'Unlike the sealed scrolls or trumpets of earlier in Revelation, the vials are poured out swiftly and directly. No dramatic unsealings—the judgment is immediate and total, held and poured by the hand of an angel standing before the throne.',
        },
        {
          kind: 'carry',
          html:
            'When judgment falls, it does not fall as a surprise. God speaks first. He calls. He warns. The wrath that eventually comes is not the first sound from heaven—mercy is. But a world that hardens itself against mercy will eventually encounter the other face of justice. Thank God that face was turned to Christ Himself.',
        },
      ],
    },

    /* ─── First Vial: Sores ───────────────────────────────────────────── */
    {
      ref: 'Revelation 16:2',
      title: 'First Vial — Noisome Sores',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(
              2,
              t('And the first went, and poured out his vial upon the earth; and there fell '),
              hy('a noisome and grievous sore', 'vial1-sores'),
              t(' upon the men which had '),
              hp('the mark of the beast', 'vial1-mark'),
              t(', and upon them which worshipped his image.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'vial1-sores',
          html:
            'In Exodus 9, a plague of boils breaks out on humans and animals alike. Here in Revelation, the sores are selective—they strike those who have taken the mark of the beast and those who worship his image. There is a moral dimension to the plague. The mark is not merely a tattoo; it is a pledge of loyalty, a choice made. And that choice, made visible on the flesh, brings judgment.',
        },
        {
          kind: 'commentary',
          id: 'vial1-mark',
          html:
            'The mark of the beast is mentioned here as already worn by those on earth. Some have taken it willingly, others under coercion. But Revelation makes clear: those who wear it are those who have, in some way, refused to trust Christ and instead pledged themselves to the system opposing Him. The sore is not punishment for poverty or ignorance; it is judgment on apostasy.',
        },
        {
          kind: 'greek',
          id: 'vial1-helkos',
          title: 'Helkos — Sore',
          script: 'ἕλκος',
          translit: '<strong>helkos</strong> · a wound, ulcer, or burning sore',
          description:
            'In the Old Testament, the same Greek word (in the Septuagint) describes the boils of Exodus 9. The sore is visible, painful, and impossible to hide. A judgment written on the skin.',
        },
        {
          kind: 'reflection',
          id: 'vial1-ref',
          prompt:
            'Where have you pledged your loyalty—to approval, to wealth, to comfort, to power? What would it cost to un-pledge those things and belong wholly to Christ?',
        },
      ],
    },

    /* ─── Second Vial: Sea Becomes Blood ──────────────────────────────── */
    {
      ref: 'Revelation 16:3',
      title: 'Second Vial — The Sea Turns to Blood',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(
              3,
              t('And the second angel poured out his vial upon '),
              hy('the sea', 'vial2-sea'),
              t('; and it became as '),
              hg('the blood of a dead man', 'vial2-death'),
              t(': and every living soul died in the sea.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'vial2-sea',
          html:
            'The sea in Revelation is the boundary between the present age and the age to come—the chaotic waters out of which the beasts rise. It is the realm of commerce, of travel, of the kingdoms of this world. When the sea becomes blood, commerce ceases. The arteries through which the beast&apos;s power flows are cut. Life in the world that has refused Christ begins to stop.',
        },
        {
          kind: 'commentary',
          id: 'vial2-death',
          html:
            'Not the blood of sacrifice, but the blood of a <em>dead man</em>—blood that signals death, not life. The image is of putrefaction, of a corpse in the water. The sea becomes a tomb. Where there was movement and commerce, there is now only stillness and death.',
        },
        {
          kind: 'greek',
          id: 'vial2-thnetos',
          title: 'Nekrou — Dead, Corpse',
          script: 'νεκρου',
          translit: '<strong>nekrou</strong> · a corpse, the lifeless body',
          description:
            'The sea turns to the blood of the dead—not fresh red, but the dark, putrefied blood of a body in decay. The imagery is intentional: the systems that oppose God are not alive; they are already dead, and their stench is beginning to rise.',
        },
        {
          kind: 'reflection',
          id: 'vial2-ref',
          prompt:
            'What "seas" of commerce, comfort, or connection have you been relying on instead of Christ? What would it mean to lose them?',
        },
      ],
    },

    /* ─── Third Vial: Rivers & Fountains Blood ─────────────────────────── */
    {
      ref: 'Revelation 16:4–7',
      title: 'Third Vial — Rivers and Fountains Turn to Blood',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(
              4,
              t('And the third angel poured out his vial upon the '),
              hg('rivers and fountains of waters', 'vial3-water'),
              t('; and they became blood.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'vial3-water',
          html:
            'In Exodus 7, the Nile turns to blood, and Egypt begins to starve. Here, all freshwater—rivers and fountains—becomes blood. The inland sources of life are cut off. Nothing to drink. The life of the land is stopped at its source.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(
              5,
              t('And I heard the angel of the waters say, '),
              hp('Thou art righteous, O Lord', 'vial3-righteous'),
              t(', which art, and wast, and shalt be, because thou hast judged thus.')
            ),
            verse(
              6,
              t('For they have shed the blood of saints and prophets, and thou hast given them blood to drink; for they are worthy.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'vial3-righteous',
          html:
            'A voice from heaven speaks up—the angel who has charge of the waters. He does not cry out in protest. He affirms the righteousness of the judgment. The voice John hears is a hallelujah: <em>"Thou art righteous, O Lord."</em> God is just. This judgment is just. Those who have spilled the blood of the innocent are made to drink the blood they shed. The judgment fits the crime.',
        },
        {
          kind: 'greek',
          id: 'vial3-dikaios',
          title: 'Dikaios — Righteous',
          script: 'δίκαιος',
          translit: '<strong>dikaios</strong> · just, righteous, in right standing',
          description:
            'The angel&apos;s affirmation is not tentative. God&apos;s judgment is <em>dikaios</em>—it is perfectly aligned with what is right, true, and just. There is no shadow of injustice in the wrath of God. Every judgment is a vindication of His character.',
        },
        {
          kind: 'christ',
          id: 'vial3-christ-blood',
          title: 'Christ Connection — The Blood They Were Worthy Of',
          html:
            'The angel says, "Thou hast given them blood to drink; for they are worthy." But Christ—who shed the only perfectly innocent blood in history—did not give His blood for the world to drink in judgment. He gave it to drink in mercy: "This is my blood of the new testament, which is shed for many for the remission of sins" (Matt. 26:28). Those who drink His blood in faith are forgiven. Those who refuse it will, in the end, drink the other kind—the blood they themselves have earned. Your only safety is to have already drunk the cup Christ drank on your behalf.',
        },
        {
          kind: 'carry',
          html:
            'Every judgment of God is righteous. But so, too, is His mercy. Do not let fear of His justice drive you away from Him; let it drive you toward the cross where that justice was perfectly, finally, mercifully satisfied on your behalf.',
        },
      ],
    },

    /* ─── Fourth Vial: Sun Scorches ───────────────────────────────────── */
    {
      ref: 'Revelation 16:8–9',
      title: 'Fourth Vial — The Sun Scorches',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(
              8,
              t('And the fourth angel poured out his vial upon the '),
              hy('sun', 'vial4-sun'),
              t('; and power was given unto him to scorch men with fire.')
            ),
            verse(
              9,
              t('And men were scorched with great heat, and '),
              hg('blasphemed the name of God', 'vial4-blasphemy'),
              t(', which hath power over these plagues: and they repented not to give him glory.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'vial4-sun',
          html:
            'Earlier in Revelation, the sun darkens. Here it blazes with terrible intensity. The source of life becomes a source of agony. Light turns to heat. The sky that should nurture becomes a weapon. And still the earth does not turn toward God.',
        },
        {
          kind: 'commentary',
          id: 'vial4-blasphemy',
          html:
            'What is remarkable is not the scorching but the response: they blasphemed. They did not fall on their knees. They did not cry out for mercy. They saw the hand of God clearly—God&apos;s power over the very elements—and they cursed it. This is hardness of heart taken to its ultimate: not ignorance of God, but refusal of Him even when His judgment is undeniable.',
        },
        {
          kind: 'greek',
          id: 'vial4-blasphemeo',
          title: 'Blasphemeo — Blaspheme',
          script: 'βλασφημέω',
          translit: '<strong>blasphēmeō</strong> · to speak evil of, curse, revile',
          description:
            'Blasphemy is not mere swearing. It is a deliberate, conscious slander against God Himself. Even in the midst of judgment unmistakable, they choose to curse rather than repent. They are not victims of God&apos;s indifference; they are rebels in the face of His clarity.',
        },
        {
          kind: 'reflection',
          id: 'vial4-ref',
          prompt:
            'When God has made something clear to you, what is your reflex? Do you turn toward Him or, like these, reach for justifications to hold Him at a distance?',
        },
      ],
    },

    /* ─── Fifth Vial: Darkness on the Beast's Seat ────────────────────── */
    {
      ref: 'Revelation 16:10–11',
      title: 'Fifth Vial — Darkness Falls',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(
              10,
              t('And the fifth angel poured out his vial upon '),
              hg('the seat of the beast', 'vial5-seat'),
              t('; and his kingdom was full of darkness; and they gnawed their tongues for pain,')
            ),
            verse(
              11,
              t('And blasphemed the God of heaven because of their pains and their sores, and repented not of their deeds.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'vial5-seat',
          html:
            'The darkness falls not on the world at large but on the beast&apos;s throne itself. The darkness is <em>his</em>—his kingdom, his seat, his realm. What he built in arrogance he now sits in, unable to see, unable to act. And the pain is so great that his subjects gnaw their own tongues. They are suffering so acutely that they turn on their own bodies. Despair has come.',
        },
        {
          kind: 'reflection',
          id: 'vial5-ref',
          prompt:
            'What kingdom have you been building that will, in the end, collapse into darkness? What would it cost to abandon it now and build on Christ instead?',
        },
      ],
    },

    /* ─── Sixth Vial: Euphrates Dried Up & Frogs ──────────────────────── */
    {
      ref: 'Revelation 16:12–14',
      title: 'Sixth Vial — The Euphrates Dries Up',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(
              12,
              t('And the sixth angel poured out his vial upon the great river '),
              hy('Euphrates', 'vial6-euphrates'),
              t('; and the water thereof was dried up, that the way of the kings of the east might be prepared.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'vial6-euphrates',
          html:
            'The Euphrates is the boundary of the known world, the barrier between Babylon and the armies to the east. When it dries up, the way is opened. All the kings of the earth, from every direction, are being gathered. The gathering of the nations before God is not a new thing in Scripture—it is already announced in the Psalms. But here it comes not in worship but in opposition. The final assembly of rebellion is being prepared.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(
              13,
              t('And I saw three unclean spirits like '),
              hg('frogs', 'vial6-frogs'),
              t(' come out of the mouth of the dragon, and out of the mouth of the beast, and out of the mouth of the false prophet.')
            ),
            verse(
              14,
              t('For they are the spirits of devils, working miracles, which go forth unto the kings of the earth and of the whole world, to gather them to the battle of that great day of God Almighty.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'vial6-frogs',
          html:
            'In Exodus 8, frogs come up out of the Nile and overrun the land—tiny, numerous, impossible to stop. Here, three unclean spirits like frogs emerge from the mouths of the dragon, the beast, and the false prophet. These are demonic spirits—deceptive, persuasive, <em>working miracles</em>. False signs and wonders. They go out to the kings of the earth and gather them. The final deception of humanity is not ignorance—it is lying signs and wonders, miracles worked in the service of a lie.',
        },
        {
          kind: 'greek',
          id: 'vial6-batrachoi',
          title: 'Batrachoi — Frogs',
          script: 'βάτραχοι',
          translit: '<strong>batrachoi</strong> · frogs',
          description:
            'The Greek word is simple and precise. The spirits are compared to frogs—small, numerous, croaking, emerging from filthy water. The image is of a swarm that cannot be stopped, that comes from defilement.',
        },
        {
          kind: 'carry',
          html:
            'Do not be surprised when evil works miracles. Satan himself can appear as an angel of light (2 Cor. 11:14). When the end comes, there will be lying signs and wonders. Your only defense is not to judge by signs but by <em>whose voice you follow</em>. The sheep know their shepherd&apos;s voice.',
        },
      ],
    },

    /* ─── The Gathering: "Behold, I come as a thief" ────────────────────── */
    {
      ref: 'Revelation 16:15',
      title: '"Behold, I Come as a Thief"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(
              15,
              t('Behold, I come as '),
              hp('a thief', 'interlude-thief'),
              t('. '),
              hg('Blessed is he that watcheth', 'interlude-blessed'),
              t(', and keepeth his garments, lest he walk naked, and they see his shame.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'interlude-thief',
          html:
            'In the middle of the pouring of the vials, with demons gathering the nations, the voice of Christ Himself breaks in. <em>"Behold, I come as a thief."</em> It is a word to the church in the midst of the chaos. Christ is coming suddenly, when and where it is not expected. Not after the vials are poured—it is a present-tense reality even while the vials are still falling. The question is not whether He will come; the question is: will you be watching?',
        },
        {
          kind: 'commentary',
          id: 'interlude-blessed',
          html:
            'Blessed is the one who watches and keeps his garments—who does not strip himself naked in shame. In Revelation, nakedness is nakedness of deeds (Rev. 3:18). Garments are righteousness. To watch is to stay awake, alert, sober. To keep your garments is to live in the kind of faithfulness that will not be ashamed when He suddenly appears.',
        },
        {
          kind: 'christ',
          id: 'interlude-christ-thief',
          title: 'Christ Connection — The Thief in the Night',
          html:
            'Jesus said to His disciples, "Therefore be ye also ready: for in such an hour as ye think not the Son of man cometh" (Matt. 24:44). Paul writes: "For yourselves know perfectly that the day of the Lord so cometh as a thief in the night" (1 Thess. 5:2). The suddenness of His coming is not a threat to the watcher; it is a call to wakefulness. And for those who are in Christ, it is not a surprise—it is the fulfillment of a promise so certain that, from the throne of heaven in the midst of judgment, He can say it to the watching church right now.',
        },
        {
          kind: 'reflection',
          id: 'interlude-ref',
          prompt:
            'If Christ were to appear suddenly, right now, would you be awake and watching? Or have you grown drowsy? What would it take to shake you back into wakefulness?',
        },
      ],
    },

    /* ─── Armageddon ──────────────────────────────────────────────────── */
    {
      ref: 'Revelation 16:16',
      title: 'Armageddon',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(
              16,
              t('And he gathered them together into a place called in the Hebrew tongue '),
              hy('Armageddon', 'vial6b-armageddon'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'vial6b-armageddon',
          html:
            'Armageddon—the name breaks into the Greek text in Hebrew letters: <em>Har-Magedon</em>, the Mountain of Megiddo. It is a real place, a valley in ancient Israel where armies clashed and blood ran. Megiddo was the gateway between the great powers—where Egypt and Babylon collided. By the time John writes, Megiddo is a ruin, yet its name still summons the image of a field of slaughter. To call a gathering "Armageddon" is to say: this is the final collision, the climactic battle. But notice: John does not say the battle rages. He says they are gathered. The assembly meets. What happens next belongs to the seventh vial.',
        },
        {
          kind: 'greek',
          id: 'vial6b-harmageddon',
          title: 'Harmagedōn — Armageddon',
          script: 'Ἁρμαγεδών',
          translit: '<strong>Harmagedōn</strong> · the Mountain of Megiddo',
          description:
            'Not every gathering at Armageddon is the final battle. The name evokes a historic place of conflict—but the nature of the final gathering is determined by what God does, not what the assembled nations intend.',
        },
        {
          kind: 'carry',
          html:
            'The great powers assemble. The armies gather. The stage is set. But they have called no council that God was not aware of; they have made no plan that He was not already overruling. The gathered kingdoms are not about to surprise Him. The seventh vial comes next.',
        },
      ],
    },

    /* ─── Seventh Vial: "It Is Done" ──────────────────────────────────── */
    {
      ref: 'Revelation 16:17–21',
      title: 'Seventh Vial — "It Is Done"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(
              17,
              t('And the seventh angel poured out his vial into the air; and there came '),
              hp('a great voice out of the temple of heaven', 'vial7-temple'),
              t(', '),
              hg('from the throne', 'vial7-throne'),
              t(', saying, '),
              hp('It is done', 'vial7-done'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'vial7-temple',
          html:
            'The voice does not come from an angel or a prophet. It comes from the throne room itself, the seat of the Almighty. And it does not come with explanation or warning. It speaks one finished act into reality.',
        },
        {
          kind: 'commentary',
          id: 'vial7-throne',
          html:
            'Three times in Revelation 16 the voice comes from the throne: at verse 1 (commanding the angels to pour out the vials), at verse 5 (the angel of the waters affirming the righteousness of the judgment), and now at verse 17 (the verdict spoken). The throne is the center of all judgment.',
        },
        {
          kind: 'christ',
          id: 'vial7-done',
          title: 'Christ Connection — "It Is Finished"',
          html:
            'On the cross, Jesus spoke three words in Aramaic: <em>"Tetelestai—It is finished."</em> Every debt paid. Every sacrifice completed. The work of redemption entire. Now from the throne of heaven, the same proclamation goes out, but over the unraveling of every kingdom that opposes Him. His finished work on the cross is the same finished work that ends the kingdom of evil. The cross and the throne are one event, separated not in time but in revelation. When you trust His "It is finished" at Calvary, you are trusting the One who will also speak "It is done" over the end of all things.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(
              18,
              t('And there were voices, and thunders, and lightnings; and there was '),
              hy('a great earthquake', 'vial7-quake'),
              t(', such as was not since men were upon the earth, so mighty an earthquake, and so great.')
            ),
            verse(
              19,
              t('And the great city was divided into three parts, and the cities of the nations fell: and '),
              hg('great Babylon came in remembrance before God', 'vial7-babylon'),
              t(', to give unto her the cup of the wine of the fierceness of his wrath.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'vial7-quake',
          html:
            'The earthquake is cosmic. It is not a tremor; it is the unshaking of everything that was thought to be solid. Cities fall. Kingdoms crumble. The structure of the world opposed to God collapses.',
        },
        {
          kind: 'commentary',
          id: 'vial7-babylon',
          html:
            'Babylon—the great city that has ruled in John&apos;s vision—comes back into the mind of God. It is not forgotten. Every rebellion, every refusal, every act of defiance against the throne is held in the perfect memory of God, and the vial is poured out with His full attention. Babylon is not a historical empire; it is the symbol of every human kingdom that exalts itself against God.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            verse(
              20,
              t('And every island fled away, and the mountains were not found.')
            ),
            verse(
              21,
              t('And '),
              hg('great hail', 'vial7-hail'),
              t(' out of heaven fell upon men: every stone about the weight of a talent: and men blasphemed God because of the plague of the hail; for the plague thereof was exceeding great.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'vial7-hail',
          html:
            'The last plague is hail—stones falling from heaven, each one heavy as a talent (about 75 pounds). The sky that once could be relied on to give rain now gives only judgment. The natural world is weaponized against those who have rejected the God who made it. And still, even at the end, they blaspheme. Even faced with the undeniable power of God, they curse rather than repent.',
        },
        {
          kind: 'greek',
          id: 'vial7-gegonen',
          title: 'Gegonen — It Has Been Done',
          script: 'γέγονεν',
          translit: '<strong>gegonen</strong> · it has come to be, it is accomplished',
          description:
            'The word is in the perfect tense—not "it will be done," not "it is being done," but "it has been done." From the perspective of the throne, the verdict is already spoken. History, from God&apos;s point of view, is already finished. We live in the time between the cross and the throne—the promised is already true, though not yet seen.',
        },
        {
          kind: 'carry',
          html:
            'You live between two "It is done"s. The cross is behind you—already finished, already paid, already accomplished. The throne is ahead. The judgment is coming, the kingdoms will fall, the night will end. Do not live as though the outcome is still in doubt. Do not live as though God is still making up His mind about the future. The verdict from the throne is already spoken. Your only question is whether you will be on the side that has trusted His blood or the side that has hardened itself against it.',
        },
        {
          kind: 'reflection',
          id: 'vial7-ref',
          prompt:
            'The throne has already spoken: "It is done." How does it change the way you live today to know that the outcome is already decided? What does it free you to let go of?',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Revelation 16',
    quote:
      'From the throne: "It is done." The same voice that finished redemption speaks over the end of every kingdom that stands against God. Your safety is in Christ, in whom that finished work was already done for you.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Revelation 16 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-exodus-7-11',
      kind: 'study',
      source: 'Sefaria',
      label: 'Exodus 7–11 — The Ten Plagues Detailed',
      url: 'https://www.sefaria.org/Exodus.7-11',
      description: 'The Egyptian plagues model for the seven bowls of God&apos;s wrath in Revelation 16.',
    },
    {
      id: 'sefaria-psalm-79',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 79 — Pour Out Your Wrath',
      url: 'https://www.sefaria.org/Psalms.79',
      description: 'Psalmist&apos;s prayer for vindication and justice — foundation for bowl-judgment prayers.',
    },
    {
      id: 'intertextual-exodus-rev-16',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Exodus Plagues ↔ Revelation 16 Bowls',
      url: 'https://intertextual.bible/text/exodus-7/revelation-16.1',
      description: 'Parallel structure of redemptive and final plagues — the recapitulation of judgment.',
    },
  ],


};
