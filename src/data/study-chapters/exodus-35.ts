import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Exodus 35 — Sabbath restated, then an offering for the tabernacle.
 * The chapter opens with the Sabbath law (echoing Exodus 20), then pivots
 * to a call for willing hearts: "whosoever is of a willing heart, let him bring it."
 * The people give gold, silver, brass, fine materials, and the wise-hearted women
 * spin goat&apos;s hair. Bezalel and Aholiab are named again, filled with the Spirit.
 * 35 verses of generosity born from forgiveness.
 */
export const EXODUS_35: RichChapterContent = {
  bookSlug: 'exodus',
  bookName: 'Exodus',
  chapter: 35,

  estimatedMinutes: { beginner: 8, intermediate: 11, deep: 14 },
  topicTags: ['covenant', 'holiness', 'worship', 'sacrifice'],
  opener: {
    topical: true,
    caption: 'Exodus 35',
  },
  intros: [
    'Exodus 35 opens in the aftermath of the golden calf. Israel has sinned, Moses has interceded, God has promised His presence will go with them, and the people have been forgiven. Now comes this chapter: the Sabbath law is restated, and then Moses calls for offerings to build the tabernacle — not by commandment, but by invitation. The word nadiv-lev (willing-hearted) becomes the chapter&apos;s heartbeat. People who have just encountered grace give freely.',
    'The chapter marks a hinge in the exodus story. The wilderness is still ahead. But for now, Israel is gathering materials to build a house where God will dwell among them. The work of building belongs to Bezalel and Aholiab, filled with the Spirit. The work of giving belongs to every nadiv-lev — every willing heart — who hears Moses&apos; call. This is what forgiveness does: it opens hands.',
  ],

  bottomShare: {
    label: 'Share Exodus 35',
    quote:
      'Moses called for an offering to the Lord from every willing heart. Gold, silver, brass, fine linen, and goat&apos;s hair — the people brought them gladly. Bezalel and Aholiab, filled with the Spirit, were appointed to lead the work.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Exodus 35 · Study Guide',
  },

  resources: [
    {
      id: 'materials-collection',
      kind: 'study',
      source: 'Sefaria',
      label: 'Tabernacle: Materials Gathered',
      url: 'https://www.sefaria.org/Exodus.35',
      description: 'Hebrew text on gifts collected for sanctuary.',
    },
    {
      id: 'oil-incense',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Anointing Oil & Incense',
      url: 'https://www.bibleodyssey.org/dictionary/anointing/',
      description: 'Formulas and theological significance.',
    },
    {
      id: 'sefaria-exodus-35',
      kind: 'study',
      source: 'Sefaria',
      label: 'Exodus 35 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Exodus.35',
      description: 'The Hebrew text of Exodus 35 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  sections: [
    /* ─── Exodus 35:1–3 — The Sabbath Law ─────────────────────────────── */
    {
      ref: 'Exodus 35:1–3',
      title: 'The Sabbath Law',
      blocks: [
        {
          kind: 'scripture',
          chapter: 35,
          lines: [
            {
              number: 1,
              spans: [
                t('And '),
                hp('Moses gathered all the congregation', 'exo35-assembly'),
                t(' of the children of Israel together, and said unto them, These are the words which the LORD hath commanded, that ye should do them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'exo35-assembly',
          html:
            'Moses gathers the whole people. Not the elders alone, not the leaders — all the children of Israel. What follows is an address to everyone. The work of building the tabernacle is not a few people&apos;s task; it belongs to any who have a willing heart[res:materials-collection][res:sefaria-exodus-35].',
        },
        {
          kind: 'scripture',
          chapter: 35,
          lines: [
            {
              number: 2,
              spans: [
                t('Six days shall work be done, but on the seventh day there shall be to you an '),
                hg('holy day', 'c-sabbath-rest'),
                t(', a sabbath of rest to the LORD: whosoever doeth work therein shall be put to death.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Ye shall kindle no fire throughout your habitations upon the sabbath day.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-sabbath-rest',
          html:
            'The Sabbath law is restated word-for-word from Exodus 20. Even now, in the midst of building the Lord&apos;s house, six days are for labor and the seventh is for rest. Obedience to the Sabbath is not set aside by urgency — not even the work of God&apos;s tabernacle overrides the rhythm God has given. The holy day belongs to the Lord before the house does[res:oil-incense].',
        },
        {
          kind: 'carry',
          html:
            'If you are tempted to believe that the urgency of serving God justifies a life without rest, this chapter offers a different word. The people build the tabernacle, yes — but never at the cost of the Sabbath. The work that matters most is done by people who have kept one day holy. Whatever you are building this week, the seventh day still belongs to Him.',
        },
        {
          kind: 'reflection',
          id: 'sabbath-rest',
          prompt:
            'What have you been tempted to sacrifice the Sabbath for — even good work, even service? What would change if you kept the seventh day first?',
        },
      ],
    },

    /* ─── Exodus 35:4–9 — The Call for Offerings ──────────────────────── */
    {
      ref: 'Exodus 35:4–9',
      title: 'The Call for Offerings',
      blocks: [
        {
          kind: 'scripture',
          chapter: 35,
          lines: [
            {
              number: 4,
              spans: [
                t('And Moses spake unto all the congregation of the children of Israel, saying, This is the thing which the LORD commanded, saying,'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Take ye from among you an offering unto the LORD: '),
                hp('whosoever is of a willing heart', 'nadiv-willing'),
                t(', let him bring it, an offering of the LORD; gold, and silver, and brass,'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'nadiv-lev',
          title: 'Nadiv-lev — &ldquo;willing-hearted&rdquo;',
          script: 'נְדִיב־לֵב',
          translit: '<strong>nadiv</strong>-<strong>lev</strong> · noble, willing of heart',
          description:
            'Nadiv means noble or generous; lev is heart. A nadiv-lev is not someone forced to give, but someone whose heart is stirred toward generosity. The term appears nine times in Exodus 35–36, always tied to the building of the tabernacle. It is the counterweight to the golden calf: after sin, the people give freely because they have been forgiven.',
        },
        {
          kind: 'commentary',
          id: 'nadiv-willing',
          html:
            'The Lord does not command the offering; He invites it. The language shifts from decree to appeal: "whosoever is of a willing heart, let him bring it." This is not taxation; this is the freedom that follows forgiveness. After the calf, Israel has been brought low and then restored. Now the people are asked to offer — not because they owe it, but because their hearts have room to give.',
        },
        {
          kind: 'scripture',
          chapter: 35,
          lines: [
            {
              number: 6,
              spans: [
                t('And blue, and purple, and scarlet, and fine linen, and goats&apos; hair,'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And rams&apos; skins dyed red, and badgers&apos; skins, and shittim wood,'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And oil for the light, and spices for anointing oil, and for the sweet incense,'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And onyx stones, and stones to be set for the ephod, and for the breastplate.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-materials',
          html:
            'The list is specific: precious metals, dyed fabrics, skins, wood, oil, spices, and stones. These are not scraps; they are the finest things people own. And the chapter will show that the people bring them all — not in obligation, but in willing abundance. The materials for a holy place come from hands already moved by grace.',
        },
        {
          kind: 'christ',
          id: 'christ-giver',
          title: 'Christ Connection — The Cheerful Giver',
          html:
            'Paul writes: "God loveth a cheerful giver" (2 Corinthians 9:7). But look at the step before: "Though he was rich, yet for your sakes he became poor, that ye through his poverty might be rich" (2 Corinthians 8:9). Christ gives first, out of His riches. Only because He has given do we find ourselves able to give. Exodus 35 shows the same pattern: Israel has been forgiven (given grace), and from that place, the willing hearts open and bring their finest things.',
        },
        {
          kind: 'carry',
          html:
            'You may think your giving is the measure of your faith. But watch how Exodus 35 reverses that. The people give freely not because they are strong, but because they have been forgiven. If your hands are closed right now, it may not be because you don&apos;t have enough; it may be because you haven&apos;t yet rested in what you&apos;ve already been given. Grace opens hands. Start there.',
        },
        {
          kind: 'reflection',
          id: 'offerings-call',
          prompt:
            'What is the Lord inviting you to bring — not from obligation, but from a willing heart? What would need to be true about your sense of forgiveness for that gift to flow?',
        },
      ],
    },

    /* ─── Exodus 35:10–19 — The Work and the Workers ────────────────── */
    {
      ref: 'Exodus 35:10–19',
      title: 'The Work and the Workers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 35,
          lines: [
            {
              number: 10,
              spans: [
                t('And every wise hearted among you shall come, and make all that the LORD hath commanded;'),
              ],
            },
            {
              number: 11,
              spans: [
                t('The tabernacle, his tent, and his covering, his taches, and his boards, his bars, his pillars, and his sockets,'),
              ],
            },
            {
              number: 12,
              spans: [
                t('The ark, and the staves thereof, with the mercy seat, and the vail of the covering,'),
              ],
            },
            {
              number: 13,
              spans: [
                t('The table, and his staves, and all his vessels, and the shewbread,'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And the candlestick for the light, and his furniture, and his lamps, and the oil for the light,'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex35-furniture-listed',
          html:
            'The tabernacle furniture is named one piece at a time — table, lampstand, altar, laver. Each item is a station of approach; together they form a path into God&apos;s presence.',
        },
        {
          kind: 'scripture',
          chapter: 35,
          lines: [
            {
              number: 15,
              spans: [
                t('And the incense altar, and his staves, and the anointing oil, and the sweet incense, and the hanging for the door at the entering in of the tabernacle,'),
              ],
            },
            {
              number: 16,
              spans: [
                t('The altar of burnt offering, with his brasen grate, his staves, and all his vessels, the laver and his foot,'),
              ],
            },
            {
              number: 17,
              spans: [
                t('The hangings of the court, his pillars, and their sockets, and the hanging for the gate of the court,'),
              ],
            },
            {
              number: 18,
              spans: [
                t('The pins of the tabernacle, and the pins of the court, and their cords,'),
              ],
            },
            {
              number: 19,
              spans: [
                t('The cloths of service, to do service in the holy place, the holy garments for Aaron the priest, and the garments of his sons, to minister in the priest&apos;s office.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-wise-hearted',
          html:
            'The "wise hearted" are called to do the work. In the Hebrew, "wise hearted" (ḥakam-lev) carries the sense of skillful, knowledgeable, experienced. These are the craftspeople — the ones who know how to work wood, weave, shape metal. The work of building is not everyone&apos;s task. But the giving is. That is the genius of the structure: some give materials; some craft them. Everyone has a part.',
        },
        {
          kind: 'carry',
          html:
            'You may think the work that counts is the work of the few — the skilled, the called, the ones with obvious gifts. But Exodus 35 holds both at once: the tabernacle is built by the wise-hearted workers, yes, but only because the nadiv-lev, the willing hearts of the whole people, have brought the materials. Your gift may never be seen in the finished work. But without it, the work does not happen. Both are essential.',
        },
        {
          kind: 'reflection',
          id: 'wise-work',
          prompt:
            'Are you a crafter of the work, or a giver of the materials? (Or both?) How might you honor the other role more this week?',
        },
      ],
    },

    /* ─── Exodus 35:20–29 — The People&apos;s Generosity ──────────────────── */
    {
      ref: 'Exodus 35:20–29',
      title: 'The People Respond',
      blocks: [
        {
          kind: 'scripture',
          chapter: 35,
          lines: [
            {
              number: 20,
              spans: [
                t('And all the congregation of the children of Israel departed from the presence of Moses.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And they came, every one whose '),
                hp('heart stirred him up', 'c-stirred'),
                t(', and every one whom his spirit made willing, and they brought the LORD&apos;s offering to the work of the tabernacle of the congregation, and for all his service, and for the holy garments.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-stirred',
          html:
            'The phrase "heart stirred him up" (nesa&apos; otam libam) is active: the people are moved from within. This is not a collection, not a tax — this is the Spirit of God moving human hearts toward willing generosity. After the golden calf, when hearts were turned toward something false, now hearts are turned toward something true. The movement is inward first, then outward in gift.',
        },
        {
          kind: 'scripture',
          chapter: 35,
          lines: [
            {
              number: 22,
              spans: [
                t('And they came, both men and women, as many as were willing hearted, and brought bracelets, and earrings, and rings, and tablets, all jewels of gold: and every man that offered offered an offering of gold unto the LORD.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And every man, with whom was found blue, and purple, and scarlet, and fine linen, and goats&apos; hair, and red skins of rams, and badgers&apos; skins, brought them.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('Every one that did offer an offering of silver and brass brought the LORD&apos;s offering: and every man, with whom was found shittim wood for any work of the service, brought it.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And all the women that were wise hearted did spin with their hands, and brought that which they had spun, both of blue, and of purple, and of scarlet, and of fine linen.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And all the women whose heart stirred them up in wisdom spun goats&apos; hair.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-women-spin',
          html:
            'The women are named specifically: "the women that were wise hearted did spin." This is not incidental. In ancient manufacture, spinning goat&apos;s hair is labor-intensive, skilled work. The women of Israel do not simply give their materials — they give their time, their craft, their hands. The tabernacle is built on the labor of willing hearts, men and women both.',
        },
        {
          kind: 'scripture',
          chapter: 35,
          lines: [
            {
              number: 27,
              spans: [
                t('And the rulers brought onyx stones, and stones to be set, for the ephod, and for the breastplate;'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And spice, and oil for the light, and for the anointing oil, and for the sweet incense.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('The children of Israel brought a willing offering unto the LORD, every man and woman whose heart made them willing to bring for all manner of work, which the LORD had commanded to be made by the hand of Moses.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-all-brought',
          html:
            'The refrain repeats: "every man and woman whose heart made them willing." The rulers bring the precious stones, the people bring metals and fabrics, the women spin the hair — and all of it is summarized in the same phrase. Nadiv-lev. Willing-hearted. By verse 29, the pattern is unmistakable: forgiveness has produced generosity.',
        },
        {
          kind: 'carry',
          html:
            'If you are measuring the health of your faith by how much you give, you have the direction backward. Ask instead: have I rested in forgiveness? Am I moving from grace? For it is the heart that has known forgiveness that opens and gives freely. The work of your hands, the resources you steward, the time you spend — these flow from a heart at peace with God. Tend to the peace first. The giving will follow.',
        },
        {
          kind: 'reflection',
          id: 'willing-hearts',
          prompt:
            'When was the last time you gave something without being asked or obligated? What made your heart open that way?',
        },
      ],
    },

    /* ─── Exodus 35:30–36 — Bezalel and Aholiab Named ────────────────── */
    {
      ref: 'Exodus 35:30–36',
      title: 'The Craftsmen Named',
      blocks: [
        {
          kind: 'scripture',
          chapter: 35,
          lines: [
            {
              number: 30,
              spans: [
                t('And Moses said unto the children of Israel, See, the LORD hath called by name '),
                hg('Bezaleel', 'c-bezaleel'),
                t(' the son of Uri, the son of Hur, of the tribe of Judah;'),
              ],
            },
            {
              number: 31,
              spans: [
                t('And he hath filled him with the spirit of God, in wisdom, in understanding, and in knowledge, and in all manner of workmanships;'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And to devise curious works, to work in gold, and in silver, and in brass,'),
              ],
            },
            {
              number: 33,
              spans: [
                t('And in the cutting of stones, to set them, and in carving of wood, to make any manner of curious work.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('And he hath put in his heart that he may teach, both he, and '),
                hg('Aholiab', 'c-aholiab'),
                t(' the son of Ahisamach, of the tribe of Dan.'),
              ],
            },
            {
              number: 35,
              spans: [
                t('Them hath he filled with wisdom of heart, to work all manner of work, of the engraver, and of the cunning workman, and of the embroiderer, in blue, and in purple, and in scarlet, and in fine linen, and of the weaver; even of them that do any work, and of those that devise cunning work.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-bezaleel',
          html:
            'Bezaleel is named a second time (he was first called in Exodus 31:2). The emphasis is not on his fame or choice by men, but on the Spirit of God. "The Lord hath called by name Bezaleel" — and filled him with the spirit of God in wisdom, understanding, and knowledge. The craftsman&apos;s skill is not his own achievement; it is the gift of the Spirit.',
        },
        {
          kind: 'commentary',
          id: 'c-aholiab',
          html:
            'Aholiab stands beside Bezaleel. The work of building is not one person&apos;s task. Bezaleel and Aholiab are both filled with the Spirit; both are called to teach others. The structure of the tabernacle will be carried forward by the wisdom of both, and by the hands they train.',
        },
        {
          kind: 'christ',
          id: 'christ-spirit-fills',
          title: 'Christ Connection — The Spirit&apos;s Filling and Gift',
          html:
            'The Holy Spirit fills Bezaleel and Aholiab for the work of crafting. In the New Testament, the same Spirit fills the apostles, the disciples, the believers in the early church — each filled for the work they are called to do. Peter says to the Sanhedrin: "We are his witnesses of these things; and so is also the Holy Ghost, whom God hath given to them that obey him" (Acts 5:32). The pattern is the same: the Spirit gives both the capacity and the calling for the work.',
        },
        {
          kind: 'carry',
          html:
            'If you have been given a skill or a craft, a way of understanding others, or a particular kind of work — that is the Spirit at work in you. You did not earn it; you were filled with it. The question now is: are you offering that skill to the Lord&apos;s work? Are you like Bezaleel and Aholiab, using what the Spirit has given you in service of something larger than yourself?',
        },
        {
          kind: 'reflection',
          id: 'spirit-fills',
          prompt:
            'What skill or gift has the Spirit given you? How might you offer it this week — not for payment or recognition, but as an offering?',
        },
      ],
    },
  ],

  hasHebrew: true,
};
