import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Baruch 4 — The Mother&apos;s Hope
 *
 * Jerusalem personified as a grieving mother. She speaks to her exiled children:
 * "This is the book of the commandments of God… all they that keep it shall come
 * to life; but such as leave it shall die." She sent them out with mourning; yet
 * God will bring them back with joy. "Be of good cheer, O my children, cry unto
 * the Lord, and he shall deliver you."
 */
export const BARUCH_4: RichChapterContent = {
  bookSlug: 'baruch',
  bookName: 'Baruch',
  chapter: 4,

  estimatedMinutes: { 5: 7, 10: 14, 15: 18 },
  intros: [
    'Baruch 4 is a shift from wisdom poetry into the voice of a mother. Jerusalem speaks—no longer to the nations or to God alone, but directly to her exiled children. She has watched them scatter. She knows their sin. Yet her words are not accusation but longing. She holds two things together: the reality of their rebellion and the certainty of their restoration. She is the figure of Zion personified—suffering, watching, waiting, calling them home.',
    'This chapter echoes Isaiah 40 ("Comfort ye, comfort ye my people") and anticipates the New Testament image of the heavenly Jerusalem as mother (Galatians 4:26). A mother who grieves, but not without hope. Who sees her children in captivity, yet speaks as if their return is already certain. In her words, the genre shifts: from the lament and instruction of chapters 1–3 to the active encouragement and vindication of chapter 4.',
  ],

  opener: {
    matchTitle: /jerusalem|zion|mother|lament|exile/i,
    caption: 'Jerusalem Personified as Mother to Her Exiled Children',
  },

  sections: [
    /* ─── Baruch 4:1–4 — This is the Book of the Commandments ────────── */
    {
      ref: 'Baruch 4:1–4',
      title: 'The Book of the Commandments',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 1,
              spans: [
                t('This is the '),
                hg('book of the commandments of God', 'bar4-entole'),
                t(', and the law that endureth for ever: all they that keep it shall come to '),
                hy('life', 'bar4-zoe'),
                t('; but such as leave it shall die.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'bar4-commandments-opening',
          html:
            'Baruch 4 opens with the simplest covenant statement in scripture: Keep the commandments and live; leave them and die. No middle ground. No compromise. The book—whether Deuteronomy, the Torah, or the entire written law—is not a burden to resent but the path to life itself. For an exiled people wondering if their God has abandoned them, Baruch restates the ancient offer: If you return to the law, you return to God. If you return to God, you return to life.',
        },
        {
          kind: 'greek',
          id: 'bar4-zoe',
          title: 'Zōē — "Life"',
          script: 'ζωή',
          translit: '<strong>Zōē</strong> · life; vitality; the life of God flowing through a person',
          description:
            'Zōē is not mere existence but the full, animated life that flows from God. It is the life that comes to those who return to the law, the life that belongs to the covenant-keepers.',
        },
        {
          kind: 'greek',
          id: 'bar4-entole',
          title: 'Entolē — "Commandment"',
          script: 'ἐντολή',
          translit: '<strong>Entolē</strong> · a command; an order; a word spoken forth',
          description:
            'In Greek, entolē is not merely a rule but the word of one in authority. God&apos;s commandments are not abstract law but the speaking of a Father who calls His children to life. To keep the entolē is to hear God&apos;s voice and obey.',
        },
        {
          kind: 'christ',
          id: 'bar4-christ-commandments',
          title: 'Christ Connection — The Law Fulfilled in Love',
          html:
            'Jesus is asked which is the greatest commandment. His answer: "Thou shalt love the Lord thy God with all thy heart, and with all thy soul, and with all thy mind… and thou shalt love thy neighbour as thyself. On these two commandments hang all the law and the prophets" (Matt. 22:37–40). Baruch says: keep the commandments and live. Jesus says: I AM the life (John 14:6). The commandments point to Him; He is their fulfillment and their goal.',
        },
        {
          kind: 'carry',
          html:
            'You may have thought of God&apos;s law as burden, as punishment, as something designed to restrict you. Baruch&apos;s opening line reframes it: These are the words that lead to life. Not life as escape, not life as comfort alone, but life as the fullness of what you were made for. Every commandment is a door to that fullness.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 2,
              spans: [
                t('Turn again, O Jacob, and take it: walk in the way by the light of it.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Give not thine honour to another, nor the things that shall profit thee to a strange nation.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('O blessed are we, O Israel: for things that are pleasing to God are made known unto us.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'bar4-turn-again',
          html:
            'The voice that speaks in verses 2–4 is composite: the voice of wisdom, the voice of instruction, the voice of the mother Jerusalem. She calls Jacob to turn again, to walk in the light of the law. She warns against surrendering glory to strangers—no idolatry, no assimilation, no forgetting who they are. And then she pronounces a blessing: "O blessed are we, O Israel; for things that are pleasing to God are made known unto us." Even in exile, even scattered, Israel has been given the law. Even far from the temple, far from the land, they have not been left without a path home.',
        },
        {
          kind: 'reflection',
          id: 'bar4-light',
          prompt:
            'What would it mean for you to "walk in the light" of God&apos;s commandments? What are you honoring instead of God that you might lay down?',
        },
      ],
    },

    /* ─── Baruch 4:5–9 — How Darkness Came; How to Return ────────────── */
    {
      ref: 'Baruch 4:5–9',
      title: 'Why You Suffer; How to Return',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 5,
              spans: [
                t('Wherefore dost thou mourn? wherefore is thy face sad? Turn thee again unto God, and he shall relieve thee of thy sorrows.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('For as thou hast been forsaken, so thy God will make thee to be joyful again.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'bar4-mourn-face',
          html:
            'The opening question—"Wherefore dost thou mourn?"—is not dismissive. It is a mother&apos;s knowing question. She sees her child&apos;s sorrow and asks it not to deny the sorrow but to point beyond it. Her child mourns because he has forsaken God. But the same God who forsook him for his rebellion can also make him joyful again. The one cause of sorrow is also the one who can lift it.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 7,
              spans: [
                t('For as the enemies rejoiced at thy ruin, so shall they be confounded at thy glory.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('For as thou hast had in the wilderness the penalties of thy sins, so God will deal with thee when thou turnest again to him.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('For God shall deliver thee out of the hand of thine enemies.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'bar4-enemies-rejoiced',
          html:
            'The enemies of Jerusalem laughed at her ruin. But their laughter will be silenced when her glory returns. The message is clear: Your shame is not permanent. Your enemies&apos; triumph is temporary. As you have drunk the cup of judgment in the wilderness, so God will turn that judgment to your exaltation. What was meant to break you will become the crucible of your transformation.',
        },
        {
          kind: 'greek',
          id: 'bar4-penthos',
          title: 'Penthos — "Mourning"',
          script: 'πένθος',
          translit: '<strong>Penthos</strong> · mourning; grief; deep sorrow',
          description:
            'Penthos is not light sorrow but deep, embodied grief—the kind that shows on your face, that changes how you move through the world. It is the sorrow that only turns when God turns it.',
        },
        {
          kind: 'carry',
          html:
            'You may feel that your ruin is permanent, your enemies&apos; victory absolute. The mother Jerusalem knows differently. She has watched her children scattered, her cities burned, her glory stripped. Yet she speaks as if restoration is not a hope but a certainty. Not because the exile will be easy, but because the God of the exile is still God.',
        },
        {
          kind: 'reflection',
          id: 'bar4-confound',
          prompt:
            'What enemy—external or internal—has rejoiced at your pain? How would it change your grief if you believed God would turn that rejoicing to confusion?',
        },
      ],
    },

    /* ─── Baruch 4:10–20 — Jerusalem Speaks Her Lament ───────────────── */
    {
      ref: 'Baruch 4:10–20',
      title: 'The Mother Speaks Her Sorrow',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 10,
              spans: [
                t('Hear, ye that dwell about Sion: God hath brought upon me great mourning: For I sent you out with weeping and lamentation:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'bar4-hear-dwell',
          html:
            'The voice shifts: Now Jerusalem herself speaks. Not a prophet speaking about her, but the mother city addressing those who know her, who have seen her walls, who were born within her gates. "God hath brought upon me great mourning." Note the honesty. She does not blame her children alone. She acknowledges that God has allowed this, that this is part of the covenant—faithlessness brings exile. Yet she also says "I sent you out," taking the role of the mother who does the sending. She is both grief-stricken and active, both victim and agent of her children&apos;s departure.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 11,
              spans: [
                t('For he hath destroyed me, and all my garments are rent asunder: my garments have I torn, and covered myself with sackcloth.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Hear me now, ye children, and be not disobedient to the commandments of God:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'bar4-garments-rent',
          html:
            'Jerusalem describes her own mourning in physical terms. Her garments are torn. She has covered herself with sackcloth. This is not abstract sorrow but embodied grief, visible to all who see her. Yet within this description of devastation, she does not wallow. She moves immediately to exhort her children: "Be not disobedient to the commandments of God." The mother&apos;s grief becomes her teaching. Through her torn garments and sackcloth, she speaks wisdom.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 13,
              spans: [
                t('For if ye will do that which is right in the sight of God, he will deliver you out of captivity, and will shew you mercy.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('For I have put my trust in the Everlasting to save you; and joy is come unto me from the Holy One, because of the mercy which shall soon come unto you from your Everlasting Saviour.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'bar4-joy-mercy',
          html:
            'Jerusalem moves from lament to promise. She does not offer comfort based on false hope; she offers it based on the character of God. If you do what is right, He will deliver. She has put her trust in the Everlasting. Her joy is not premature; it is rooted in the covenant itself. The mercy is coming. It is not a guess but a certainty grounded in who God is. And it will be swift: "soon come unto you."',
        },
        {
          kind: 'christ',
          id: 'bar4-christ-mother',
          title: 'Christ Connection — The Heavenly Jerusalem as Mother',
          html:
            'Paul writes: "But Jerusalem which is above is free, which is the mother of us all" (Gal. 4:26). Just as earthly Jerusalem speaks as mother to her scattered children, the heavenly Jerusalem—of which the Church is a part—gathers the children of God. Jesus echoes this in Matthew 23:37: "How often would I have gathered thy children together, even as a hen gathereth her chickens under her wings, and ye would not!" The mother&apos;s longing in Baruch becomes Christ&apos;s longing.',
        },
        {
          kind: 'carry',
          html:
            'Jerusalem&apos;s message is not softness; it is truth spoken through tears. "Obey God. Trust in His character. Your deliverance is coming." This is the wisdom of a mother who has suffered enough to know what matters and what does not. She is not promising ease; she is promising that the God of the covenant is faithful.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 15,
              spans: [
                t('For I sent you out with mourning and weeping: but God will give you to me again with joy and gladness for ever.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'bar4-sent-you-out',
          html:
            'This verse is the hinge of the chapter. In verse 10, Jerusalem said she "sent you out with weeping and lamentation." Now she repeats it, but with a reversal: Yes, I sent you out with mourning—but God will return you to me with joy. The same act (sending) that brought sorrow will be reversed to bring gladness. This is not denial of the exile but a reframing of it. What looked like an ending is a transition. What felt like abandonment was preparation for homecoming.',
        },
        {
          kind: 'reflection',
          id: 'bar4-sent-out',
          prompt:
            'What have you been "sent out" into—a loss, a failure, a season of exile from what felt like home? How might it be preparation rather than an ending?',
        },
      ],
    },

    /* ─── Baruch 4:21–29 — God Will Bring You Back with Joy ────────────── */
    {
      ref: 'Baruch 4:21–29',
      title: 'Your Return Is Certain',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 21,
              spans: [
                t('For as the neighbours of Sion have now seen thy captivity, so shall they shortly see the salvation of God which shall come upon thee, '),
                hg('with great glory', 'bar4-doxa'),
                t(', and brightness of the Everlasting.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'bar4-neighbours-seen',
          html:
            'The neighbors who watched Jerusalem fall will watch her rise. The shame that was public will be vindicated publicly. This is not private restoration but cosmic vindication. The salvation will come "with great glory and brightness"—visible, undeniable, overwhelming. Those who mocked will be silenced.',
        },
        {
          kind: 'greek',
          id: 'bar4-doxa',
          title: 'Doxa — "Glory"',
          script: 'δόξα',
          translit: '<strong>Doxa</strong> · glory; splendor; honor; the visible manifestation of God&apos;s nature',
          description:
            'Doxa is not mere reputation but the weightiness and presence of God Himself. When Jerusalem is restored "with great glory," it is not a mere return to former status. It is the presence of God made visible in her restoration.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 22,
              spans: [
                t('For God shall bring thee down from the mountains of the north, and shall place thee on high; and shall indue the everlasting light to shine forth upon thee.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('For God hath determined to fill thy valleys, that every high mountain and hill may be made low, that thou mayest walk safely.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'bar4-mountains-valleys',
          html:
            'The topography of return is reversed. Jerusalem will be brought down from the mountains of exile (Babylon is in the north) and placed on high. Her valleys will be filled. Mountains will be made low. Every obstacle to her return will be removed. The way will be made straight and safe. This echoes Isaiah 40: "Make straight in the desert a highway for our God." The mother is not asking her children to climb impossible heights to return. God is leveling the path.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 24,
              spans: [
                t('And the wood and every fragrant tree shall overshadow thee: for God shall lead thee in joy by the light of his glory, with the mercy and righteousness that cometh from him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'bar4-wood-fragrant',
          html:
            'The journey home will not be through wasteland but through forests and fragrant trees. This echoes the paradise of Eden. The exile, which was like being cast out of the garden, will be followed by a return that restores that garden beauty. God will lead them "in joy"—not in fear or resignation, but in gladness. The mercy and righteousness that flow from Him will be visible.',
        },
        {
          kind: 'carry',
          html:
            'You may have walked through valleys so long that you have forgotten what it feels like to walk on level ground. You may have grown accustomed to the weight, the darkness, the distance. But the mother&apos;s word is this: The path is being made straight. The wood and fragrant trees are being arranged to shelter you. Your return is not your doing; it is God&apos;s determination. You are being brought home.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 25,
              spans: [
                t('And herein shall the wood that was broken be healed, and the branches that were withered shall wax green again.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And God knoweth thee, acknowledging that thou wast despised: but he hath now visited thee with mercy.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('Wherefore bid thy children cry unto the Lord, that he may be pleased, and remember not against thee the sins of thy forefathers.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'bar4-wood-healed',
          html:
            'The metaphor shifts: The broken wood is Jerusalem herself. The withered branches are her people. But they will be healed. They will be green again. And this healing is rooted in knowledge: "God knoweth thee." He knows your shame. He knows your despising. And He has visited you with mercy. This is not ignorant forgiveness but known forgiveness. He sees what you have been and chooses anyway to gather you.',
        },
        {
          kind: 'reflection',
          id: 'bar4-wood-healed',
          prompt:
            'What part of you feels broken, withered? Can you receive the mother&apos;s word that God knows your shame and has visited you with mercy anyway?',
        },
      ],
    },

    /* ─── Baruch 4:28–35 — Be of Good Cheer ──────────────────────────── */
    {
      ref: 'Baruch 4:28–35',
      title: 'Be of Good Cheer, Cry Unto the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 29,
              spans: [
                t('Be of good cheer, O my children: cry unto the Lord, and he shall deliver you from the power and hand of the enemies.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'bar4-good-cheer',
          html:
            'The mother&apos;s final word is not a command to feel happy while ignoring pain. It is a call to courage rooted in trust. "Be of good cheer"—thársei in Greek—means to be of stout heart, to take courage. Not because the enemies are weak but because God is strong. And the mechanism of deliverance is simple: Cry unto the Lord. Call out. Let your voice be heard. God hears, and He acts.',
        },
        {
          kind: 'greek',
          id: 'bar4-tharsei',
          title: 'Tharsei — "Be of Good Cheer"',
          script: 'θάρρει',
          translit: '<strong>Tharsei</strong> · be of good courage; take heart; be bold',
          description:
            'Tharsei is the word Jesus uses in the Gospels when He comes walking on the water: "Be of good cheer; it is I; be not afraid" (Matt. 14:27). It is the same word. The mother speaks with the voice of Christ Himself.',
        },
        {
          kind: 'christ',
          id: 'bar4-christ-courage',
          title: 'Christ Connection — "Be of Good Cheer"',
          html:
            'Jesus tells His disciples: "These things I have spoken unto you, that in me ye might have peace. In the world ye shall have tribulation: but be of good cheer; I have overcome the world" (John 16:33). The exact phrase—"Be of good cheer"—that Jerusalem speaks to her exiled children is the phrase Christ speaks to His own. The mother&apos;s hope is the hope of the resurrected Christ.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 30,
              spans: [
                t('For I have put my trust in the Everlasting for your salvation: and joy is come unto me from the Holy One, who shall soon come to you, remembering the mercy of the Everlasting.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'bar4-trust-everlasting',
          html:
            'Jerusalem repeats what she said in verse 14, now with deepened certainty. Her trust is not in armies or politics but in the Everlasting. And this trust has already produced joy in her heart. She is not waiting to be happy when her children return; she is joyful now because she knows they will. This is the paradox of faith: to rejoice before the promise is fulfilled because the character of the Promise-giver is already known.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 31,
              spans: [
                t('Go my children, go; for I have left off to wear the garments of peace. Now do thou put them on, and perfect the beauty that cometh from God for ever.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('For God will lead thee with gladness in the light of his glory.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('And the name that he shall give thee is, Peace and Righteousness, a name full of glory.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'bar4-go-children',
          html:
            'The mother releases her children. She has put off the garments of peace (grief has stripped them from her), and now she calls them to put them on. The beauty that comes from God is theirs to wear. They are not orphans going out into darkness; they are children being led by the Light itself. And their new name—the name God will give them—is "Peace and Righteousness." Not shame. Not "the scattered ones" or "the exiled ones." Peace and Righteousness. Their identity is being remade by God.',
        },
        {
          kind: 'carry',
          html:
            'You have worn the garments of shame long enough. You have lived as the scattered child, the exiled one, the one who failed. The mother&apos;s final word is this: Go. Your father is waiting. Your name is being changed. You are being led in gladness. The beauty that comes from God is yours. Stop rehearsing your exile and start moving toward home.',
        },

        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 34,
              spans: [
                t('Make haste, O my children; for I am at rest.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'bar4-at-rest',
          html:
            'The mother does not hover anxiously. She is at rest. Not because the work is done—her children are still in exile—but because she has submitted to God&apos;s faithfulness. She is waiting with peace, not with fear. And this peace is contagious. She calls her children to hurry, not from desperation but from the certainty that when they arrive, they will find her already at peace, already certain of what God has promised.',
        },
        {
          kind: 'reflection',
          id: 'bar4-at-rest',
          prompt:
            'What would it look like for you to "make haste" toward God, not from panic but from the knowledge that He is already at rest, already certain of your salvation?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Baruch 4',
    quote:
      'This is the book of the commandments of God… all they that keep it shall come to life. Be of good cheer, O my children: cry unto the Lord, and he shall deliver you from the power and hand of the enemies. God shall bring you to me again with joy and gladness for ever.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Baruch 4 · Study Guide',
  },
};
