import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Revelation 11 — The Two Witnesses and the Seventh Trumpet
 *
 * The angel commands John to measure the temple—the true worshippers.
 * Two witnesses prophesy in sackcloth for 1,260 days, empowered to
 * shut heaven and turn waters to blood. The beast overcomes them; their
 * bodies lie exposed for three and a half days. Then the Spirit raises them,
 * and they ascend. The seventh trumpet sounds: the kingdoms of this world
 * become the kingdoms of Christ.
 */
export const REVELATION_11: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 11,

  intros: [
    'Revelation 11 opens with a paradox: John is told to measure the temple and count the worshippers—as if the exact number matters, as if God keeps count. Then two figures emerge, dressed in sackcloth—the clothing of suffering and repentance. They are given authority to testify, to seal up heaven itself, to call down plagues. Yet they will be killed. Their bodies will lie unburied. Then something shifts: the Spirit enters them, they stand, they ascend into a cloud, and all heaven erupts with the proclamation that Christ reigns forever.',
    'This chapter moves between two tensions: the vulnerability of the witnesses and their ultimate vindication, the humiliation of the church and the triumph of the kingdom. In both, God has the final word.',
  ],

  opener: {
    matchArtist: /tissot|doré|dore/i,
    matchTitle: /witnesses|revelation|judgment/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share Revelation 11',
    quote:
      'And the seventh angel sounded; and there were great voices in heaven, saying, The kingdoms of this world are become the kingdoms of our Lord, and of his Christ; and he shall reign for ever and ever.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Revelation 11 · Study Guide',
  },

  sections: [
    /* ─── Revelation 11:1–2 — Measure the Temple ────────────────────── */
    {
      ref: 'Revelation 11:1–2',
      title: 'Measure the Temple',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 1,
              spans: [
                t('And there was '),
                hp('given me a reed like unto a rod', 'rev11-measure'),
                t(': and the angel stood, saying, Rise, and '),
                hy('measure the temple of God', 'rev11-measure'),
                t(', and the altar, and them that worship therein.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rev11-measure',
          html:
            'The command to measure is not about dimensions—it&apos;s about counting. God knows His people by number. Paul tells Timothy that the church is "the pillar and ground of the truth" (1 Tim. 3:15). Here, John is told that this temple—the congregation of the faithful—is known, marked, sealed. Nothing about the true worshippers is invisible to God.',
        },
        {
          kind: 'greek',
          id: 'rev11-metron',
          title: 'Metreō — "Measure"',
          script: 'μετρέω',
          translit: '<strong>metreō</strong> · to measure, mark, count',
          description:
            'In apocalyptic literature, measurement can mean judgment or protection. Here it means both: God measures the temple to separate the true from the false, and to mark them as His own.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 2,
              spans: [
                t('But the court which is without the temple leave out, and measure it not; for it is given unto the Gentiles: and the holy city shall they tread under foot forty and two months.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rev11-court-left-out',
          html:
            'The outer court is not measured—not sealed, not protected. This is the place of the nations. For forty-two months the holy city will be trampled. The true worshippers are known, but they are not exempt from suffering. Tribulation belongs to the age we inhabit.',
        },
        {
          kind: 'carry',
          html:
            'You have been measured and marked by God. Your name is known. Yet belonging to Christ does not protect you from living in a world that opposes Him. The outer court is trampled still. But the inner sanctuary—your worship, your prayer, your witness—is sealed. That sanctuary belongs to Him.',
        },
        {
          kind: 'reflection',
          id: 'rev11-measure-reflect',
          prompt:
            'Where do you feel the trampling of the outer court in your own life? What worship or witness have you had to protect and keep safe?',
        },
      ],
    },

    /* ─── Revelation 11:3 — I Will Give Power unto My Two Witnesses ──── */
    {
      ref: 'Revelation 11:3',
      title: '"I Will Give Power unto My Two Witnesses"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 3,
              spans: [
                t('And '),
                hp('I will give power unto my two witnesses', 'rev11-two-witnesses'),
                t(', and they shall prophesy a thousand two hundred and threescore days, clothed in sackcloth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rev11-two-witnesses',
          html:
            'Two witnesses—not one voice, but witness by twofold testimony. In the law, a matter is established by two or three witnesses (Deut. 19:15). The witnesses are clothed in sackcloth: the garb of mourning and repentance. They do not come with the robes of power or the pomp of authority. They come in suffering. Yet their power is real: they prophesy 1,260 days—three and a half years, the period of tribulation. Their testimony runs the length of the age.',
        },
        {
          kind: 'greek',
          id: 'rev11-martys',
          title: 'Martys — "Witness"',
          script: 'μάρτυς',
          translit: '<strong>martys</strong> · witness, one who testifies',
          description:
            'The Greek word for witness is the root of "martyr." To witness is to testify to what you have seen, often at cost. The two witnesses will eventually pay the ultimate price for their testimony.',
        },
        {
          kind: 'carry',
          html:
            'Your own testimony is numbered in the days of the two witnesses. You speak in sackcloth—with humility, from suffering, not from a place of worldly authority. But your words are not powerless. They are sealed by God. Speak on.',
        },
      ],
    },

    /* ─── Revelation 11:4 — Two Olive Trees and Two Candlesticks ──────── */
    {
      ref: 'Revelation 11:4',
      title: 'Two Olive Trees and Two Candlesticks',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 4,
              spans: [
                t('These are the '),
                hy('two olive trees', 'rev11-elaios'),
                t(', and the two candlesticks standing before the God of the earth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rev11-symbols',
          html:
            'Olive trees and candlesticks—symbols rich with Old Testament meaning. Zechariah saw two olive trees flanking a golden candlestick, representing the anointing of the Spirit (Zech. 4). The candlestick is the light-bearer; the olive is the source of oil, the symbol of the Spirit&apos;s anointing. These witnesses are not appointed by human authority. They stand before God. Their power flows from the Spirit, not the state.',
        },
        {
          kind: 'greek',
          id: 'rev11-elaios',
          title: 'Elaios — "Olive Tree"',
          script: 'ἐλαία',
          translit: '<strong>elaios</strong> · olive tree, source of oil and anointing',
          description:
            'In Scripture, oil signifies the Holy Spirit&apos;s anointing. The witnesses are instruments of the Spirit. They do not act in their own power but in His.',
        },
        {
          kind: 'reflection',
          id: 'rev11-olive-reflect',
          prompt:
            'What does it mean to stand as a candlestick before God in your own household, your own workplace, your own community? What light are you bearing?',
        },
      ],
    },

    /* ─── Revelation 11:5–6 — Fire and Plagues ────────────────────────── */
    {
      ref: 'Revelation 11:5–6',
      title: 'Fire and Plagues',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 5,
              spans: [
                t('And if any man will hurt them, '),
                hy('fire proceedeth out of their mouth', 'rev11-fire-mouth'),
                t(', and devoureth their enemies: and if any man will hurt them, he must in this manner be killed.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rev11-fire-mouth',
          html:
            'Fire from their mouth—the word of God burns and consumes. Paul speaks of Christ being revealed "in flaming fire taking vengeance on them that know not God" (2 Thess. 1:8). The witnesses&apos; words carry the judgment of God. To oppose them is to oppose Him.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 6,
              spans: [
                t('These have '),
                hy('power to shut heaven, that it rain not', 'rev11-power-plagues'),
                t(' in the days of their prophecy: and have power over waters to turn them to blood, and to smite the earth with all plagues, as often as they will.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rev11-power-plagues',
          html:
            'The witnesses wield the very powers of Elijah and Moses: shutting heaven (1 Kings 17:1), turning water to blood and calling down plagues (Exodus 7–10). Their authority echoes the greatest prophets. Yet notice: these powers are given <em>to them</em>. They are delegated authority, not inherent power. They speak and God acts.',
        },
        {
          kind: 'greek',
          id: 'rev11-exousia',
          title: 'Exousia — "Power/Authority"',
          script: 'ἐξουσία',
          translit: '<strong>exousia</strong> · power, authority, the right to act',
          description:
            'Exousia is not raw force but authorized power. The witnesses have been given the right to command heaven and earth. Their authority derives from God, not from conquest or position.',
        },
      ],
    },

    /* ─── Revelation 11:7–10 — The Beast Overcomes Them ────────────── */
    {
      ref: 'Revelation 11:7–10',
      title: 'The Great City — Where Our Lord Was Crucified',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 7,
              spans: [
                t('And when they shall have finished their testimony, the beast that ascendeth out of the bottomless pit shall make war against them, and shall overcome them, and kill them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rev11-beast-overcomes',
          html:
            'The testimony is complete—finished. But completion does not mean safety. The beast rises and wars against them. It overcomes them. It kills them. This is not a vision of success in worldly terms. The witnesses are defeated. Their bodies are left unburied in the street.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 8,
              spans: [
                t('And their dead bodies shall lie in the street of the great city, which spiritually is called '),
                hg('Sodom and Egypt, where also our Lord was crucified', 'rev11-great-city'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rev11-great-city',
          html:
            'The great city is Jerusalem—and more than Jerusalem. It is any place that rejects God&apos;s witnesses. It is called Sodom (sexual rebellion and inhospitality), Egypt (idolatry and oppression), and Calvary itself (the place of Christ&apos;s crucifixion). The geography is spiritual: wherever Christ is rejected, the witnesses are martyred there too.',
        },
        {
          kind: 'christ',
          id: 'rev11-christ-crucified',
          title: 'Christ Connection — The Place Where Our Lord Was Crucified',
          html:
            'The witnesses are killed in the city where Christ was crucified. John is connecting their deaths to His. Like Him, they are executed in the holy city. Like Him, they will be vindicated and raised. As He rose on the third day, they will rise after three and a half days. The pattern of Christ is played out in them.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 9,
              spans: [
                t('And they of the people and kindreds and tongues and nations shall see their dead bodies three days and an half, and shall not suffer their dead bodies to be put in graves.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And they that dwell upon the earth shall rejoice over them, and make merry, and shall send gifts one to another; because these two prophets tormented them that dwelt on the earth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rev11-three-and-half',
          html:
            'Three and a half days—half of seven. Not a complete rest, not a full resurrection yet (that comes after). The bodies lie exposed, unburied. In ancient shame-cultures, the denial of burial was the ultimate dishonor. All the world sees their humiliation. And the world rejoices. The witnesses who brought judgment are gone. For a brief moment, it seems the kingdom is defeated.',
        },
        {
          kind: 'carry',
          html:
            'If you have spoken truth that cost you dearly, if you have lost position or friendship or security for the sake of your witness, you know this moment. The great city celebrates. For a season it seems you were wrong to speak. Hold steady. The third and a half day is coming.',
        },
      ],
    },

    /* ─── Revelation 11:11 — The Spirit of Life ───────────────────────── */
    {
      ref: 'Revelation 11:11',
      title: '"The Spirit of Life from God Entered into Them"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 11,
              spans: [
                t('And after three days and an half the '),
                hy('Spirit of life from God entered into them', 'rev11-pneuma'),
                t(', and they stood upon their feet; and great fear fell upon them which saw them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rev11-resurrection',
          html:
            'The text does not say they were "raised" or "resurrected"—it says the Spirit of life <em>entered</em> them. They stood on their feet. They were alive. The world that celebrated their death now sees them stand. Terror falls on those who saw them. In that moment, the kingdom is vindicated.',
        },
        {
          kind: 'greek',
          id: 'rev11-pneuma',
          title: 'Pneuma — "Spirit"',
          script: 'πνεῦμα',
          translit: '<strong>pneuma</strong> · spirit, breath, the Holy Spirit',
          description:
            'The same Greek word is used when Jesus breathed on the disciples and said, "Receive ye the Holy Ghost" (John 20:22). Life comes from God&apos;s breath. The witnesses receive it.',
        },
        {
          kind: 'christ',
          id: 'rev11-christ-resurrection',
          title: 'Christ Connection — Resurrection on the Third Day',
          html:
            'Christ rose on the third day. The witnesses rise after three and a half days—an echo, a participation in His resurrection. Matthew writes of the dead rising when Christ rose (Matt. 27:52–53). Here too, the pattern established in Christ ripples through all who belong to Him.',
        },
        {
          kind: 'carry',
          html:
            'If you are in a season where your witness seems dead, if what you said seems to have failed, if the world is celebrating your silence, do not trust that ending. Three and a half days is a human count. God&apos;s timing is different. Stand ready for the breath of His Spirit.',
        },
        {
          kind: 'reflection',
          id: 'rev11-resurrection-reflect',
          prompt:
            'When have you felt spiritually dead, only to have God breathe life back into your witness? Or are you in that dark three-and-a-half-day season right now?',
        },
      ],
    },

    /* ─── Revelation 11:12 — Ascended to Heaven in a Cloud ────────────── */
    {
      ref: 'Revelation 11:12',
      title: 'Ascended to Heaven in a Cloud',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 12,
              spans: [
                t('And they heard a great voice from heaven saying unto them, Come up hither. And they '),
                hy('ascended up to heaven in a cloud', 'rev11-ascension'),
                t('; and their enemies beheld them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rev11-ascension',
          html:
            'The witnesses are taken up into heaven while their enemies watch. This is the ultimate vindication. They do not pass quietly into the next world. They ascend in plain sight. The ancient promise to Elijah—that he was caught up into heaven (2 Kings 2:11)—is repeated for the witnesses. They join the apostolic lineage of the raptured.',
        },
        {
          kind: 'greek',
          id: 'rev11-anabainō',
          title: 'Anabainō — "Ascend/Go Up"',
          script: 'ἀναβαίνω',
          translit: '<strong>anabainō</strong> · to go up, ascend',
          description:
            'The verb used for Christ&apos;s ascension into heaven (Acts 1:9–10). The witnesses share in the same upward journey. Enemies see them lifted, unable to stop it, unable to follow.',
        },
        {
          kind: 'christ',
          id: 'rev11-christ-ascension',
          title: 'Christ Connection — Ascension Witnessed',
          html:
            'When Christ ascended, His disciples watched (Acts 1:9). When the witnesses ascend, their enemies watch. Both ascensions are public. Both declare: this kingdom is not of this world. Its citizens belong to a higher order.',
        },
      ],
    },

    /* ─── Revelation 11:13 — The Earthquake ──────────────────────────── */
    {
      ref: 'Revelation 11:13',
      title: 'The Great Earthquake',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 13,
              spans: [
                t('And the same hour was there a great earthquake, and the tenth part of the city fell, and in the earthquake were slain of men seven thousand: and the remnant were affrighted, and gave glory to the God of heaven.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rev11-earthquake',
          html:
            'The witnesses&apos; vindication triggers cosmic response. An earthquake shakes the city. A tenth of it collapses. Seven thousand die—the number of completeness mixed with death. The remnant—those who remain—are terrified and give glory to God. Not all are saved, but some acknowledge Him. Some witness to God&apos;s power.',
        },
        {
          kind: 'carry',
          html:
            'When God vindicates the truth you have spoken, it will shake things. Not everyone will believe. But some will be afraid and give glory. A remnant will know. That is enough.',
        },
      ],
    },

    /* ─── Revelation 11:15 — The Seventh Trumpet ──────────────────────── */
    {
      ref: 'Revelation 11:15',
      title: 'The Seventh Angel Sounds',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 15,
              spans: [
                t('And the seventh angel sounded; and there were great voices in heaven, saying, '),
                hg('The kingdoms of this world are become the kingdoms of our Lord, and of his Christ', 'rev11-basileia'),
                t('; and he shall reign for ever and ever.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rev11-seventh-trumpet',
          html:
            'The seventh trumpet—the last, the final sound. The announcement is cosmic. The kingdoms of this world do not gradually transform into the kingdom of Christ. They <em>become</em> His kingdom. The transfer is complete. The reign is eternal. This is not speculation about the future; this is proclamation. It has already happened in heaven; earth is catching up to reality.',
        },
        {
          kind: 'greek',
          id: 'rev11-basileia',
          title: 'Basileia — "Kingdom"',
          script: 'βασιλεία',
          translit: '<strong>basileia</strong> · kingdom, reign, dominion',
          description:
            'Not a geographical territory but a kingdom of authority. Where Christ reigns, that is His kingdom. His dominion is not limited by what we see on earth. It is absolute, eternal, encompassing all.',
        },
        {
          kind: 'carry',
          html:
            'The kingdom of Christ is not coming; it is already here. The kingdoms of this world—your job, your politics, your bank account, your security—all of it is ultimately under Christ&apos;s rule. Live accordingly. Live as a citizen of a kingdom that cannot be moved.',
        },
        {
          kind: 'reflection',
          id: 'rev11-kingdom-reflect',
          prompt:
            'What worldly kingdom are you tempted to trust in? How would living as if Christ already reigns change the way you make decisions?',
        },
      ],
    },

    /* ─── Revelation 11:16–17 — The Elders Worship ────────────────────── */
    {
      ref: 'Revelation 11:16–17',
      title: '"We Give Thee Thanks, O Lord God Almighty"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 16,
              spans: [
                t('And the four and twenty elders, which sat before God on their seats, fell upon their faces, and worshipped God,'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Saying, We give thee thanks, O Lord God Almighty, which art, and wast, and art to come; because thou hast taken to thee thy great power, and hast reigned.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rev11-thanksgiving',
          html:
            'Heaven worships. The twenty-four elders—representing the church of all ages—fall and give thanks. The God who <em>is</em> (present reality), who <em>was</em> (eternal past), and who <em>is to come</em> (future consummation) has taken His great power. He has reigned. The victory is not just ahead; it is already true. This is the posture of heaven: worship and thanksgiving for a reign that spans all time.',
        },
        {
          kind: 'carry',
          html:
            'The elders do not celebrate the witness of the two prophets alone. They give thanks to God. They celebrate His reign, His power, His eternity. This is the habit of heaven: to turn all things toward thanksgiving and worship. You can join that habit now.',
        },
      ],
    },

    /* ─── Revelation 11:18–19 — The Temple Opened ────────────────────── */
    {
      ref: 'Revelation 11:18–19',
      title: 'The Temple of God Opened — The Ark of His Testament',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 18,
              spans: [
                t('And the nations were angry, and thy wrath is come, and the time of the dead, that they should be judged, and that thou shouldest give reward unto thy servants the prophets, and to the saints, and them that fear thy name, small and great; and shouldest destroy them which destroy the earth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rev11-judgment-reward',
          html:
            'Two things happen at the sounding of the seventh trumpet: judgment of the nations and reward of the faithful. The dead are judged. The prophets and saints are rewarded. Those who destroyed the earth are themselves destroyed. This is the fullness of God&apos;s kingdom: justice for all.',
        },
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            {
              number: 19,
              spans: [
                t('And the '),
                hy('temple of God was opened in heaven', 'rev11-ark'),
                t(': and there was seen in his temple the '),
                hg('ark of his testament', 'rev11-ark'),
                t(': and there were lightnings, and voices, and thunderings, and an earthquake, and great hail.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rev11-ark',
          html:
            'The temple of God opens in heaven. The ark of the covenant appears—the symbol of God&apos;s promises, His presence, His faithfulness. The covenant holds. Everything God swore to His people is affirmed. Storm and earthquake and hail mark the moment: the heavens themselves testify.',
        },
        {
          kind: 'greek',
          id: 'rev11-ark-kibōtos',
          title: 'Kibōtos — "Ark"',
          script: 'κιβωτός',
          translit: '<strong>kibōtos</strong> · ark, chest; the ark of the covenant',
          description:
            'The ark held the two tablets of the law, manna, and Aaron&apos;s rod. It was the throne of God in the temple. Its appearance in heaven is the ultimate promise: God&apos;s law holds, His provision endures, His priesthood remains eternal.',
        },
        {
          kind: 'carry',
          html:
            'Every promise God made—to Abraham, to David, to the prophets, to you—is held in that ark. It cannot be lost. It cannot be broken. The temple is open, and you can see it. The covenant is real. Live in light of that covenant.',
        },
        {
          kind: 'reflection',
          id: 'rev11-covenant-reflect',
          prompt:
            'What promise of God do you need to see opened in heaven right now? What covenant are you being asked to trust?',
        },
      ],
    },
  ],

  hasHebrew: false,
};
