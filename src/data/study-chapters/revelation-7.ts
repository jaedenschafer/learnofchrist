import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * Revelation 7 — The 144,000 Sealed and the Great Multitude
 *
 * A pause before the seventh seal opens. God&apos;s mercy holds. Four angels
 * hold back the four winds while the seal of the living God marks God&apos;s
 * servants—twelve thousand from each of the twelve tribes. Then John beholds
 * a multitude beyond numbering, clothed in white robes, washed clean by the
 * blood of the Lamb, standing before the throne in triumph and praise.
 */
export const REVELATION_7: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 7,

  estimatedMinutes: { beginner: 7, intermediate: 11, deep: 16 },
  intros: [
    'Revelation 6 ends with a cosmic question: "Who shall be able to stand?" before the wrath of the Lamb. Chapter 7 answers it. Before the seventh seal opens, God pauses. He seals His own—marking them with the seal of the living God, protecting them from what is to come. The 144,000, drawn from all twelve tribes of Israel, represent the fullness and completeness of God&apos;s redeemed people.',
    'But then the vision expands. John sees not just 144,000, but a multitude no one can number—from every nation, language, and people. They stand before the throne in white robes, triumphant not by their own strength but because they have washed their garments in the blood of the Lamb. They cry out with one voice: "Salvation to our God which sitteth upon the throne, and unto the Lamb." This is the church in victory, eternal and secure.',
  ],

  opener: {
    matchTitle: /seal|throne|multitude|lamb/i,
    matchArtist: /tissot|repin|doré/i,
    caption: 'The Sealed and the Throne',
  },

  sections: [
    /* ─── Revelation 7:1 — The Four Angels Hold Back the Winds ──────────── */
    {
      ref: 'Revelation 7:1',
      title: 'The Four Angels at the Four Corners',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(
              1,
              t('And after these things I saw '),
              hp('four angels standing on the four corners of the earth', 'rev7-corners'),
              t(', holding the '),
              hy('four winds of the earth', 'rev7-gonia'),
              t(', that the wind should not blow on the earth, nor on the sea, nor on any tree.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev7-timing',
          html:
            'The vision pauses. Before anything else happens—before the seventh seal, before the final trumpets sound—the winds are held. This is a moment of mercy in the midst of judgment. The earth, the sea, and the trees are about to suffer. But first, God ensures His servants are marked as His own[res:sefaria-daniel-12][res:sefaria-zechariah-14].',
        },
        {
          kind: 'greek',
          id: 'rev7-gonia',
          title: 'Gonia — Corner',
          script: 'γωνία',
          translit: '<strong>gonia</strong> · corner; extremity; the uttermost parts',
          description:
            'Four corners represent the four directions, the entire earth. The Greek emphasizes not just cardinal points but the farthest reaches—all that exists under heaven is held in the hands of God.',
        },
        {
          kind: 'carry',
          html:
            'When the world feels like it&apos;s spinning out of control, when winds howl from every direction and nothing feels stable, this verse is a whisper that God is at the corners. He holds what you cannot. He knows what you fear. And before anything else happens to you, He marks you[res:bibleodyssey-144000].',
        },
        {
          kind: 'reflection',
          id: 'rev7-corners',
          prompt: 'What "winds"—what forces—do you feel pressing against you right now? Can you actually believe God is holding them back for the sake of His own?',
        },
      ],
    },

    /* ─── Revelation 7:2–3 — "Hurt Not Till We Have Sealed" ────────────── */
    {
      ref: 'Revelation 7:2–3',
      title: '&quot;Hurt Not the Earth Till We Have Sealed&quot;',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(
              2,
              t('And I saw another angel ascending from the east, having '),
              hp('the seal of the living God', 'rev7-sphragis'),
              t(': and he cried with a loud voice to the four angels, to whom it was given to hurt the earth and the sea,'),
            ),
            verse(
              3,
              t('Saying, '),
              hy('Hurt not the earth, neither the sea, nor the trees', 'rev7-protection'),
              t(', till we have sealed the servants of our God in their foreheads.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev7-protection',
          html:
            'The seal comes before the judgment. This is God&apos;s order: mark first, then act. The forehead is the seat of identity, of the mind, of what you think and believe. To be sealed there is to be identified as God&apos;s, to be marked in the very place that makes you who you are. The sealing is not hidden or secret—it is public, in the foreheads, where all heaven can see it.',
        },
        {
          kind: 'greek',
          id: 'rev7-sphragis',
          title: 'Sphragis — Seal',
          script: 'σφραγίς',
          translit: '<strong>sphragis</strong> · seal; mark of ownership; authentication',
          description:
            'In the ancient world, a seal on a document was everything. It marked ownership, proved authenticity, and warned against tampering. To be sealed with God&apos;s seal is to belong to Him absolutely. Nothing and no one can break that seal.',
        },
        {
          kind: 'christ',
          id: 'rev7-christ-seal',
          title: 'Christ Connection — Sealed in the Holy Spirit',
          html:
            'Paul writes in Ephesians 1:13: "In whom also after that ye believed, ye were sealed with that Holy Spirit of promise." The sealing is the work of the Spirit, and the Spirit&apos;s seal marks you as belonging to Christ. When John sees this seal placed on the foreheads of God&apos;s servants, he is seeing the fulfillment of that promise made to every believer.',
        },
        {
          kind: 'carry',
          html:
            'You are marked. Not invisibly, not someday—now, in the depths of who you are. The Spirit has sealed you. This seal is not like the temporary marks we wear in this world; it is eternal, unbreakable, visible to all the powers of heaven. Whatever is coming, you are His.',
        },
      ],
    },

    /* ─── Revelation 7:4 — The Number of the Sealed ───────────────────── */
    {
      ref: 'Revelation 7:4',
      title: 'The Number of the Sealed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(
              4,
              t('And I heard the number of them which were sealed: and there were sealed an hundred and forty and four thousand of '),
              hy('all the tribes of the children of Israel', 'rev7-144k'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev7-144k',
          html:
            'Here is where patience matters. Twelve tribes. Twelve thousand from each. The number 144,000 speaks not of limitation but of completeness—the fullness of God&apos;s covenant people. Different Christian traditions have understood this in different ways, and Scripture permits multiple readings of what "Israel" means in John&apos;s vision. What is clear is that God&apos;s sealing is thorough, comprehensive, and purposeful. No tribe is left out. No one who belongs to God is forgotten.',
        },
        {
          kind: 'greek',
          id: 'rev7-arithmos',
          title: 'Arithmos — Number',
          script: 'ἀριθμός',
          translit: '<strong>arithmos</strong> · number; reckoning; tally',
          description:
            'A number can be counted. In a world where vastness often means namelessness, God&apos;s knowledge is precise. He knows by name. He tallies. He counts. Not one soul among His own is anonymous.',
        },
        {
          kind: 'reflection',
          id: 'rev7-144k-reflection',
          prompt: 'Does it comfort you that God knows you by number, by name, by heart? What would change if you truly believed you were that specifically marked?',
        },
      ],
    },

    /* ─── Revelation 7:5–8 — The Twelve Tribes by Name ──────────────── */
    {
      ref: 'Revelation 7:5–8',
      title: 'The Twelve Tribes Listed by Name',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(
              5,
              t('Of the tribe of Juda were sealed twelve thousand. Of the tribe of Reuben were sealed twelve thousand. Of the tribe of Gad were sealed twelve thousand.'),
            ),
            verse(
              6,
              t('Of the tribe of Aser were sealed twelve thousand. Of the tribe of Nepthalim were sealed twelve thousand. Of the tribe of Manasses were sealed twelve thousand.'),
            ),
            verse(
              7,
              t('Of the tribe of Simeon were sealed twelve thousand. Of the tribe of Levi were sealed twelve thousand. Of the tribe of Issachar were sealed twelve thousand.'),
            ),
            verse(
              8,
              t('Of the tribe of Zabulon were sealed twelve thousand. Of the tribe of Joseph were sealed twelve thousand. Of the tribe of Benjamin were sealed twelve thousand.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev7-tribe-list',
          html:
            'The roll call matters. Each tribe is named. This is not an abstract doctrine but a concrete reality: the God of Abraham, Isaac, and Jacob knows His people by lineage, by history, by covenant. The repetition—"twelve thousand…twelve thousand…"—creates a rhythm of completeness. Nothing is left to chance. The restoration of Israel&apos;s twelve tribes is a recurring hope throughout Scripture, and John is seeing it fulfilled. Whether you understand this as literal Israel or as the new covenant people called from all nations, the point is the same: God&apos;s promises are not forgotten.',
        },
        {
          kind: 'greek',
          id: 'rev7-phyle',
          title: 'Phyle — Tribe',
          script: 'φυλή',
          translit: '<strong>phyle</strong> · tribe; race; a people united by descent',
          description:
            'A tribe is family extended, covenant extended, promise extended across generations. To be sealed by tribe is to be marked not alone but as part of a continuous people.',
        },
        {
          kind: 'carry',
          html:
            'You are not sealed in isolation. You are sealed as part of something that stretches back through the centuries and forward into eternity. Your faith connects you to a people, a covenant, a promise older than you and deeper than yourself. You belong to something vast.',
        },
      ],
    },

    /* ─── Revelation 7:9 — A Multitude No Man Can Number ────────────── */
    {
      ref: 'Revelation 7:9',
      title: 'A Multitude No Man Could Number',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(
              9,
              t('After this I beheld, and, lo, a great multitude, which no man could number, '),
              hy('of all nations, and kindreds, and people, and tongues', 'rev7-expansion'),
              t(', stood before the '),
              hp('throne, and before the Lamb', 'rev7-christ-throne'),
              t(', clothed with white robes, and palms in their hands;'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev7-expansion',
          html:
            'The vision expands. We move from 144,000 (a specific, numbered people) to a multitude beyond numbering (the full scope of God&apos;s plan). The shift is not contradiction but fulfillment. "All nations, kindreds, people, and tongues"—the language echoes Babel, where language divided mankind, but here language unites them. All humanity stands together before the throne. This is redemption without limit.',
        },
        {
          kind: 'greek',
          id: 'rev7-ochlos',
          title: 'Ochlos Polys — Great Multitude',
          script: 'ὄχλος πολύς',
          translit: '<strong>ochlos polys</strong> · multitude; vast crowd; those too many to count',
          description:
            'Ochlos is the common crowd, but polys makes it vast beyond reckoning. Not an elite few, but crowds upon crowds. The gospel reaches beyond Israel to the ends of the earth.',
        },
        {
          kind: 'christ',
          id: 'rev7-christ-throne',
          title: 'Christ Connection — At the Heart of Heaven',
          html:
            'The throne is shared: God and the Lamb are both present. Christ is not subordinate but co-regent, as central to heavenly worship as the Father Himself. In Revelation 21:22, John later tells us there is no temple in the new Jerusalem "for the Lord God Almighty and the Lamb are the temple of it." Christ&apos;s presence at the throne is the heart of eternity.',
        },
        {
          kind: 'carry',
          html:
            'You are not an afterthought. You are not outside the circle. You stand among this multitude, before the throne itself. Your story is woven into a vision that spans all nations and all time. The Lamb is at the center of heaven, and you are there with Him.',
        },
        {
          kind: 'reflection',
          id: 'rev7-multitude',
          prompt: 'When you imagine standing before the throne, clothed in white, among a multitude from every nation and tongue—what does that vision stir in you? Fear? Joy? Longing?',
        },
      ],
    },

    /* ─── Revelation 7:10 — Salvation to Our God and the Lamb ────────── */
    {
      ref: 'Revelation 7:10',
      title: 'The Song of Salvation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(
              10,
              t('And cried with a loud voice, saying, '),
              hp('Salvation to our God which sitteth upon the throne, and unto the Lamb', 'rev7-cry'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev7-cry',
          html:
            'This is not whispered prayer but a loud cry. The multitude does not bow in silence but shouts their joy. And what do they shout? Not "We are saved" but "Salvation to God and the Lamb." The focus is not on their own deliverance but on the One who delivers. The triumph belongs to the Throne, not to themselves.',
        },
        {
          kind: 'greek',
          id: 'rev7-soteria',
          title: 'Soteria — Salvation',
          script: 'σωτηρία',
          translit: '<strong>soteria</strong> · salvation; deliverance; wholeness; safety',
          description:
            'Salvation is not narrowly individual redemption but cosmic deliverance—the restoration of all things broken, the healing of all that is fractured. The multitude ascribes this restoration entirely to God and the Lamb.',
        },
        {
          kind: 'carry',
          html:
            'What would it mean for your voice to join this cry? Not as a solo artist, not as one saved apart from others, but as part of a multitude whose entire attention is fixed on the One who saved them all?',
        },
      ],
    },

    /* ─── Revelation 7:13–14 — "Out of Great Tribulation" ────────────── */
    {
      ref: 'Revelation 7:13–14',
      title: 'Washed in the Blood of the Lamb',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(
              13,
              t('And one of the elders answered, saying unto me, What are these which are '),
              hy('arrayed in white robes', 'rev7-stole'),
              t('? and whence came they?'),
            ),
            verse(
              14,
              t('And I said unto him, Sir, thou knowest. And he said to me, These are they which '),
              hp('came out of great tribulation', 'rev7-whiteness'),
              t(', and have '),
              hp('washed their robes, and made them white in the blood of the Lamb', 'rev7-christ-blood'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev7-whiteness',
          html:
            'The multitude is not untested. They came "out of great tribulation." They were not spared from suffering but brought through it. And their whiteness is not due to their innocence or their strength; it comes from washing in the blood of the Lamb. Their victory is not moral achievement but redemptive grace. This is the only way to stand before the throne—through the cross.',
        },
        {
          kind: 'greek',
          id: 'rev7-thlipsis',
          title: 'Thlipsis Megalē — Great Tribulation',
          script: 'θλίψις μεγάλη',
          translit: '<strong>thlipsis megalē</strong> · great pressure; severe affliction; intense testing',
          description:
            'Thlipsis is not gentle sorrow but pressure, crushing, squeezing. The multitude has endured real suffering. They were not raptured away; they came through. And they are the stronger for it.',
        },
        {
          kind: 'greek',
          id: 'rev7-stole',
          title: 'Stolē Leukē — White Robe',
          script: 'στολή λευκή',
          translit: '<strong>stolē leukē</strong> · white robe; garment of purity; robe of righteousness',
          description:
            'The white robe symbolizes victory, holiness, and the completion of redemption. But this whiteness is not inherent; it has been given by washing in blood. Purity comes not from avoidance but from atonement.',
        },
        {
          kind: 'christ',
          id: 'rev7-christ-blood',
          title: 'Christ Connection — The Cleansing Power of His Blood',
          html:
            'Hebrews 10:14 declares: "For by one offering he hath perfected for ever them that are sanctified." The blood of the Lamb is not a symbol or a metaphor in Revelation; it is the actual cleansing agent of eternity. When John sees the multitude washed white in His blood, he is seeing the efficacy of the cross applied to every soul who believes. Christ&apos;s atonement is not past tense—it is perpetually effective.',
        },
        {
          kind: 'carry',
          html:
            'Whatever you have endured, whatever tribulation has pressed down on you, your whiteness before God is not dependent on your suffering being erased or your wounds being denied. It is dependent on the blood that covers you. You do not have to be perfect. You have to be washed.',
        },
        {
          kind: 'reflection',
          id: 'rev7-washed',
          prompt: 'What tribulation have you come through? How does it change that tribulation to know it has not disqualified you—that your robe is made white not in spite of your suffering but by something transcendent that covers it all?',
        },
      ],
    },

    /* ─── Revelation 7:15–16 — Service Before the Throne ────────────── */
    {
      ref: 'Revelation 7:15–16',
      title: 'Service Day and Night',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(
              15,
              t('Therefore are they before the throne of God, and serve him day and night in his temple: and he that sitteth on the throne shall '),
              hy('dwell among them', 'rev7-service'),
              t('.'),
            ),
            verse(
              16,
              t('They shall hunger no more, neither thirst any more; neither shall the sun light on them, nor any heat.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev7-service',
          html:
            'Their work is not yet over—they serve day and night. But notice what changes: the service is no longer strained, no longer a burden. They serve before the throne itself, with God dwelling among them. In Revelation 21:3, John will echo this: "Behold, the tabernacle of God is with men, and he will dwell with them." Eternity is not cessation but fulfillment. They serve the One whose presence is their joy.',
        },
        {
          kind: 'greek',
          id: 'rev7-phulate',
          title: 'Phulatē — Guard; Watch',
          script: 'φυλακή',
          translit: '<strong>phulatē</strong> · to guard; to keep watch; to tend',
          description:
            'Service in the biblical sense is not servitude but care, stewardship, the tending of something precious. The multitude serves by guarding, watching, keeping the presence of God.',
        },
        {
          kind: 'carry',
          html:
            'Your work is not in vain. The toil and service you give now will be transformed, not erased. You will continue to serve, but the source of your strength will shift from duty to joy, from obligation to presence. God will dwell with you.',
        },
      ],
    },

    /* ─── Revelation 7:17 — The Lamb Shall Feed Them ────────────────── */
    {
      ref: 'Revelation 7:17',
      title: 'The Lamb Shall Lead Them to Living Fountains',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            verse(
              17,
              t('For the '),
              hp('Lamb which is in the midst of the throne', 'rev7-christ-shepherd'),
              t(' shall '),
              hy('feed them, and shall lead them unto living fountains of waters', 'rev7-feeding'),
              t(': and God shall '),
              hy('wipe away all tears from their eyes', 'rev7-exaleipho'),
              t('.'),
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev7-feeding',
          html:
            'Here is the shepherd imagery applied to Christ. He feeds. He leads. He provides living water. The language echoes Psalm 23 ("He maketh me to lie down in green pastures; he leadeth me beside the still waters"), but now the shepherd is the Lamb. And the tears—not forgotten, not denied, but wiped away. This is not a promise that suffering never happened; it is a promise that suffering will be answered, that every tear will be honored and then healed.',
        },
        {
          kind: 'greek',
          id: 'rev7-exaleipho',
          title: 'Exaleiphō — Wipe Away',
          script: 'ἐξαλείφω',
          translit: '<strong>exaleiphō</strong> · to wipe away; to blot out; to make forgotten',
          description:
            'This word does not mean the tears never fell or were not real. It means God Himself tends to their memory with care, erasing their sting, ensuring that sorrow is not the final word.',
        },
        {
          kind: 'christ',
          id: 'rev7-christ-shepherd',
          title: 'Christ Connection — The Lamb in the Midst of the Throne',
          html:
            'In John 10:11, Christ says: "I am the good shepherd." Here in Revelation, the Lamb is in the midst of the throne—at the very center of reality itself. The care He promises in the Gospels is fulfilled here. And the living fountains echo John 4:14: "Whosoever drinketh of the water that I shall give him shall never thirst; but the water that I shall give him shall be in him a well of water springing up into everlasting life." Christ&apos;s provision extends from Calvary into eternity.',
        },
        {
          kind: 'carry',
          html:
            'You will not hunger. You will not thirst. Your tears will not be the story; they will be the thing healed. And at the center of all of this is the Lamb, in the midst of the throne, still feeding, still leading, still caring for you as He did on earth.',
        },
        {
          kind: 'reflection',
          id: 'rev7-lamb-midst',
          prompt: 'What does it mean that the Lamb is in the midst of the throne—not below it, not separate from it, but at its very center? How does that vision sustain you when you suffer?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Therefore are they before the throne of God, and serve him day and night in his temple: and he that sitteth on the throne shall dwell among them. They shall hunger no more, neither thirst any more; neither shall the sun light on them, nor any heat. For the Lamb which is in the midst of the throne shall feed them, and shall lead them unto living fountains of waters: and God shall wipe away all tears from their eyes.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Revelation 7 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-daniel-12',
      kind: 'study',
      source: 'Sefaria',
      label: 'Daniel 12 — The Resurrection and Number Sealed',
      url: 'https://www.sefaria.org/Daniel.12',
      description: 'OT foundation for "many shall be purified" and the 144,000 sealed — numbering the redeemed.',
    },
    {
      id: 'sefaria-zechariah-14',
      kind: 'study',
      source: 'Sefaria',
      label: 'Zechariah 14 — The Eschatological Day',
      url: 'https://www.sefaria.org/Zechariah.14',
      description: 'Apocalyptic climax with all nations gathering, echoed in the multitude that no man could number.',
    },
  ],

  hasHebrew: false,
};
