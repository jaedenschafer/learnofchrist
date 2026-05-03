import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Exodus 26 — the tabernacle veil: the parokhet (פָּרֹכֶת), the inner curtain
 * with cherubim woven in, separating the Holy Place from the Holy of Holies.
 * Technical, precise specifications — but the veil is the headline.
 *
 * Christ Connection: at the moment Jesus dies, "the veil of the temple was rent
 * in twain from the top to the bottom" (Matt. 27:51). The way is open.
 */
export const EXODUS_26: RichChapterContent = {
  bookSlug: 'exodus',
  bookName: 'Exodus',
  chapter: 26,

  estimatedMinutes: { beginner: 9, intermediate: 14, deep: 16 },
  intros: [
    'Exodus 26 is blueprint. Every verse is precise specification — dimensions, materials, how to fasten, how to hang. Ten curtains of fine twined linen with cherubim woven in, goat hair curtains, ram skins dyed red, badger skins. Shittim wood boards, sockets of silver. The parokhet — the veil that separates the Holy Place from the Holy of Holies, where God&apos;s presence dwells.',
    'It sounds like construction manual, and it is. But in the grammar of the Bible, buildings are not silent. They teach. The tabernacle is Israel&apos;s theology in wood and cloth — a place where heaven and earth meet, where a holy God and an unholy people can draw near to each other. And the veil is the threshold. It stands in the way. No one passes it except the high priest, once a year, on the Day of Atonement. The veil holds back. The veil separates.',
    'But then the cross comes. And in that moment, the veil tears from top to bottom. Not a careful unraveling — a violent tearing, as if God is tearing it open Himself. The cherubim woven into the veil, the same cherubim that guarded the way to the tree of life in Genesis 3:24 — they are torn, and the way is opened. For the first time in Israel&apos;s history, anyone can approach.',
  ],

  bottomShare: {
    quote: 'The veil hanging between the Holy Place and the Holy of Holies was woven with cherubim and dyed blue, purple, and scarlet, a barrier between a holy God and His people—until Christ&apos;s death tore it open from top to bottom.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Exodus 26 · Study Guide',
  },

  resources: [
    {
      id: 'priestly-garments',
      kind: 'study',
      source: 'Sefaria',
      label: 'Priestly Garments',
      url: 'https://www.sefaria.org/Exodus.28',
      description: 'Hebrew text on high priest&apos;s attire.',
    },
    {
      id: 'temple-parallels',
      kind: 'archaeology',
      source: 'Met Museum',
      label: 'ANE Temple Parallels',
      url: 'https://www.metmuseum.org/',
      description: 'Comparative sanctuary design in ancient world.',
    },
  ],

  sections: [
    /* ─── Exodus 26:1–6 — The Inner Curtains ──────────────────────────── */
    {
      ref: 'Exodus 26:1–6',
      title: 'The Fine Linen Curtains',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 1,
              spans: [
                t('Moreover thou shalt make the tabernacle with '),
                hy('ten curtains', 'num-ten'),
                t(' of '),
                hy('fine twined linen', 'linen-fine'),
                t(', and blue, and purple, and scarlet: and with '),
                hg('cherubim', 'cherub-woven'),
                t(' of cunning work shalt thou make them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'num-ten',
          html:
            'Ten curtains, a number of completion in Scripture. Each one the same size, each one holding the cherubim woven inside it. The tabernacle is not built of one great expanse but of ten pieces, carefully matched and fastened together[res:priestly-garments].',
        },
        {
          kind: 'commentary',
          id: 'linen-fine',
          html:
            'Fine twined linen — the finest cloth available. This is not rough material for daily use. This is the cloth of priestly garments, of the most sacred coverings. The inner layer of the tabernacle is woven with the same care as the garments of the priest who serves inside it[res:temple-parallels].',
        },
        {
          kind: 'commentary',
          id: 'cherub-woven',
          html:
            'The curtains are not plain cloth. They are woven with cherubim — the creatures that guard God&apos;s presence. Every time the priest moved inside the tabernacle, he was surrounded by woven reminders of the holiness he was entering. These are not decorative. They are theological.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-parokhet',
          title: 'Parokhet — &ldquo;veil&rdquo;',
          script: 'פָּרֹכֶת',
          translit: '<strong>parokhet</strong> · a barrier, a curtain that separates',
          description:
            'The parokhet is not a mere divider. It is the specific curtain mentioned in verse 31 that will hang between the Holy Place and the Holy of Holies. It defines the limit of approach. It is the threshold no one may pass.',
        },
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 2,
              spans: [t('The length of one curtain shall be eight and twenty cubits, and the breadth of one curtain four cubits: and all the curtains shall have one measure.')],
            },
            {
              number: 3,
              spans: [
                t('The five curtains shall be '),
                hg('coupled together', 'coupled-one'),
                t(' one to another; and other five curtains shall be coupled one to another.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And thou shalt make loops of blue upon the edge of the one curtain from the selvedge in the coupling; and likewise shalt thou make in the uttermost edge of another curtain, in the coupling of the second.'),
              ],
            },
            {
              number: 5,
              spans: [t('Fifty loops shalt thou make in the one curtain, and fifty loops shalt thou make in the edge of the curtain that is in the coupling of the second; that the loops may take hold one of another.')],
            },
            {
              number: 6,
              spans: [
                t('And thou shalt make fifty taches of gold, and '),
                hg('couple the curtains', 'couple-gold'),
                t(' together with the taches: and it shall be one tabernacle.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'coupled-one',
          html:
            'Ten curtains, each the same size, fastened together with loops and gold clasps. Individual, yet unified into one covering. The grammar says something: what covers God&apos;s house is made of many parts held together by gold. Complexity, woven into holiness.',
        },
        {
          kind: 'commentary',
          id: 'couple-gold',
          html:
            'Gold clasps — not ordinary fasteners. Gold is the metal of God&apos;s presence in the Bible. The whole apparatus of the tabernacle is not held together by expediency. It is held together by precious metal and careful work. This was built to last, built to honor the One who would dwell inside.',
        },
        {
          kind: 'carry',
          html:
            'The tabernacle took thousands of individual pieces, held together by care and precision, to make a single space where God could dwell. Your life is built the same way — small choices, small acts of obedience, woven together into something that can house God&apos;s presence. Not the grand gesture. The loop. The clasp. The daily care of your own little corner.',
        },
        {
          kind: 'reflection',
          id: 'linen-work',
          prompt: 'What small, daily work in your life feels like a loop or a clasp — holding something of God&apos;s together? How is that work holy?',
        },
      ],
    },

    /* ─── Exodus 26:7–13 — The Goat Hair Curtains ──────────────────────── */
    {
      ref: 'Exodus 26:7–13',
      title: 'The Outer Covering',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 7,
              spans: [
                t('And thou shalt make curtains of '),
                hy('goats&apos; hair', 'goat-hair'),
                t(' to be a covering upon the tabernacle: eleven curtains shalt thou make.'),
              ],
            },
            {
              number: 8,
              spans: [t('The length of one curtain shall be thirty cubits, and the breadth of one curtain four cubits: and the eleven curtains shall be all of one measure.')],
            },
            {
              number: 9,
              spans: [t('And thou shalt couple five curtains by themselves, and six curtains by themselves, and shalt double the sixth curtain in the forefront of the tabernacle.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'exodus_26_v7-13',
          html:
            '<p>Weaving God&apos;s ongoing care through each command and promise.</p>',
        },
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 10,
              spans: [
                t('And thou shalt make fifty loops on the edge of the one curtain that is outmost in the coupling, and fifty loops in the edge of the curtain which coupleth the second.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And thou shalt make fifty taches of brass, and put the taches into the loops, and '),
                hg('couple the tent together', 'tent-one'),
                t(', that it may be one.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And the remnant that remaineth of the curtains of the tent, the half curtain that remaineth, shall '),
                hg('hang over the backside', 'backside-hang'),
                t(' of the tabernacle.'),
              ],
            },
            {
              number: 13,
              spans: [t('And a cubit on the one side, and a cubit on the other side of that which remaineth in the length of the curtains of the tent, it shall hang over the sides of the tabernacle on this side and on that side, to cover it.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'goat-hair',
          html:
            'Goat hair, the material of a nomad&apos;s tent. Rough where the inner linen is fine. Practical where the inner layer is beautiful. Israel lived in the wilderness with portable homes made of goat hair — and here, the tabernacle itself wears that same garment. God&apos;s presence travels with them, housed in the same kind of material their own tents are made from.',
        },
        {
          kind: 'commentary',
          id: 'tent-one',
          html:
            'The outer layer is also one tent now, coupled together by bronze clasps. Two layers: fine linen with cherubim inside, goat hair outside. What God sees is woven beauty and the presence of the guardian cherubim. What weather sees is rough protection. The sacred and the practical, interwoven.',
        },
        {
          kind: 'commentary',
          id: 'backside-hang',
          html:
            'The remnant of the outer curtains hangs over the back, with a cubit of overhang on both sides. Nothing is wasted. The structure is also shelter. What looks like specification is actually care — every detail serves both the sacred function and the practical need of a people living in the wilderness.',
        },
        {
          kind: 'carry',
          html:
            'The tabernacle wore two faces: inside, woven with cherubim and blue and purple; outside, rough goat hair that kept out the desert wind and rain. You may wear the same two faces. In one room, you are one thing; in another, another. Both are real. Both are needed. What matters is that the inside — the place where God is — is woven with care and beauty.',
        },
        {
          kind: 'reflection',
          id: 'goat-outer',
          prompt: 'What is the rough, practical work you do that protects something beautiful? Where do people see only the goat hair and miss the linen inside?',
        },
      ],
    },

    /* ─── Exodus 26:14 — The Skin Coverings ──────────────────────────── */
    {
      ref: 'Exodus 26:14',
      title: 'The Innermost Covering',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 14,
              spans: [
                t('And thou shalt make a covering for the tent of '),
                hy('rams&apos; skins dyed red', 'rams-red'),
                t(', and a covering of '),
                hy('badgers&apos; skins', 'badger-skins'),
                t(' above.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'rams-red',
          html:
            'Ram skins dyed red. Red, the color of sacrifice throughout the Bible. The rams whose skins now cover the tabernacle are a foreshadow — skins that have been offered, that have become protection. And then a layer of badger skin on top — a creature that burrows into the earth, a creature of the hidden things. Three layers: linen, goat hair, ram skin, badger skin. Four walls of separation between the holy place and the unholy world.',
        },
        {
          kind: 'commentary',
          id: 'badger-skins',
          html:
            'The badger — a creature of the hidden places, the burrows, the earth. Its skin is the outermost layer, the final protection. What protects the sacred inner beauty is not something grand or visible, but something humble, hardworking, and hidden. The badger skin says something: the real work of protection is the work no one sees.',
        },
        {
          kind: 'carry',
          html:
            'The tabernacle is wrapped in layers — fine inside, rough outside, and then skins of sacrifice on top. Your own life has layers too: what you show, what you hide, what you&apos;ve surrendered. All of it is how you make space for the holy. The layers themselves are not the shame; they are the shelter.',
        },
      ],
    },

    /* ─── Exodus 26:15–25 — The Boards and Sockets ──────────────────── */
    {
      ref: 'Exodus 26:15–25',
      title: 'The Wooden Frame',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 15,
              spans: [
                t('And thou shalt make boards for the tabernacle of '),
                hy('shittim wood', 'shittim'),
                t(' standing up.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('Ten cubits shall be the length of a board, and a cubit and a half shall be the breadth of one board.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Two tenons shall there be in one board, set in order one against another: thus shalt thou make for all the boards of the tabernacle.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And thou shalt make the boards for the tabernacle, twenty boards on the south side southward.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And thou shalt make forty sockets of silver under the twenty boards; two sockets under one board for his two tenons, and two sockets under another board for his two tenons.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And for the second side of the tabernacle on the north side there shall be twenty boards:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'shittim',
          html:
            'Shittim wood — also called acacia. A wood that grows in the desert, hard enough to last, strong enough to bear weight. The tabernacle is built of desert wood, the material at hand where Israel was wandering. God does not import materials from foreign lands. He uses what already exists in the place His people are.',
        },
        {
          kind: 'commentary',
          id: 'boards-sockets',
          html:
            'Forty sockets of silver under the south side alone. Silver is the metal of redemption in Scripture — when Israel redeemed their firstborn, they paid in silver. The whole structure rests on silver sockets. The tabernacle does not stand on the ground; it stands on redemption. Every board, held up by the costly metal of God&apos;s atonement.',
        },
        {
          kind: 'commentary',
          id: 'exod26-sides-frame',
          html:
            'South side measured, north side mirrors it exactly. The structure is symmetrical, balanced, each side bearing equal weight. What is specified for the south is repeated for the north — redemption sockets beneath both sides equally. The frame is not lopsided; it is held from both directions.',
        },
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 21,
              spans: [
                t('And their forty sockets of silver; two sockets under one board, and two sockets under another board.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And for the sides of the tabernacle westward thou shalt make six boards.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And two boards shalt thou make for the corners of the tabernacle in the two sides.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And they shall be coupled together beneath, and they shall be coupled together above the head of it unto one ring: thus shall it be for them both; they shall be for the two corners.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And they shall be eight boards, and their sockets of silver, sixteen sockets; two sockets under one board, and two sockets under another board.'),
              ],
            },
          ],
        },
        {
          kind: 'carry',
          html:
            'The tabernacle stands on silver sockets — redemption beneath every plank, holding up the entire structure. Your own life, if it stands at all, stands on the same foundation. Not on your strength, not on your success. On His atonement. That is the only ground solid enough to build on.',
        },
        {
          kind: 'reflection',
          id: 'boards-sockets-r',
          prompt: 'What part of your life are you trying to hold up with your own strength instead of resting it on redemption?',
        },
      ],
    },

    /* ─── Exodus 26:26–30 — The Bars ───────────────────────────────── */
    {
      ref: 'Exodus 26:26–30',
      title: 'The Binding Bars',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 26,
              spans: [
                t('And thou shalt make bars of shittim wood; five for the boards of the one side of the tabernacle,'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And five bars for the boards of the other side of the tabernacle, and five bars for the boards of the side of the tabernacle, for the two sides westward.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And the middle bar in the midst of the boards shall reach from one end to the other:'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And thou shalt overlay the boards with gold, and make their rings of gold for places for the bars: and overlay the bars with gold.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And thou shalt rear up the tabernacle according to the fashion thereof which was shewed thee in the mount.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'bars-binding',
          html:
            'Bars running through the boards, holding them together, overlaid with gold. The tabernacle is not individual pieces leaning against each other. It is a unified structure, held tight by bars that run through the whole thing. What the eye cannot see — the interior binding — is what makes the structure hold.',
        },
        {
          kind: 'christ',
          id: 'christ-bars',
          title: 'Christ Connection — The Bars That Hold All Things',
          html:
            'Paul writes, &ldquo;By him all things consist&rdquo; (Col. 1:17). Jesus is the bar running through creation, holding it all together. In the tabernacle, the bars are overlaid with gold and hidden inside the structure. But without them, the whole thing collapses. He is the invisible binding force, the bars through the boards, the thing holding the whole house of God together.',
        },
        {
          kind: 'carry',
          html:
            'There is a binding force in your life too — not always visible, not always acknowledged. The small obedience that holds you steady when everything is shaking. The friend who keeps you from falling apart. The prayer that happens in the dark. The bars you cannot see but cannot live without. Notice them. That is Christ work in you.',
        },
      ],
    },

    /* ─── Exodus 26:31–35 — The Veil ───────────────────────────────── */
    {
      ref: 'Exodus 26:31–35',
      title: 'The Veil That Separates',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 31,
              spans: [
                t('And thou shalt make a '),
                hp('veil', 'christ-veil-torn'),
                t(' of blue, and purple, and scarlet, and fine twined linen of cunning work: with '),
                hg('cherubim', 'cherub-veil'),
                t(' shall it be made:'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And thou shalt hang it upon four pillars of shittim wood overlaid with gold: their hooks shall be of gold, upon the four sockets of silver.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('And thou shalt hang the veil under the taches, that thou mayest bring in thither within the veil the ark of the covenant: and the veil shall '),
                hg('divide', 'divide-holy'),
                t(' unto you between the holy place and the most holy.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('And thou shalt put the mercy seat upon the ark of the covenant in the most holy place.'),
              ],
            },
            {
              number: 35,
              spans: [
                t('And thou shalt set the table without the veil, and the candlestick over against the table on the side of the tabernacle toward the south: and thou shalt put the table on the north side.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'cherub-veil',
          html:
            'The veil is not plain. It is woven with cherubim — the guardians of God&apos;s holiness. In Genesis 3:24, after Adam and Eve eat the fruit, cherubim are placed at the east of the garden of Eden, guarding the way to the tree of life. No one may pass. Thousands of years later, the same cherubim are woven into the veil. They still guard. They still say: no one may pass. Except the high priest, once a year, on the Day of Atonement.',
        },
        {
          kind: 'commentary',
          id: 'divide-holy',
          html:
            'The veil divides. That is its purpose. On one side of the veil, the Holy Place — a space where priests enter regularly, where they work, where light burns. On the other side of the veil, the Holy of Holies — the space where God&apos;s presence dwells above the mercy seat. Two spaces. Two orders of holiness. One barrier.',
        },
        {
          kind: 'christ',
          id: 'christ-veil-torn',
          title: 'Christ Connection — The Veil Torn',
          html:
            'At the moment Jesus dies on the cross, Matthew records: &ldquo;Jesus, when he had cried again with a loud voice, yielded up the ghost. And, behold, the veil of the temple was rent in twain from the top to the bottom&rdquo; (Matt. 27:50–51). Not a careful unraveling. A violent tearing. Not a weakening — a tearing open. And Hebrews makes it explicit: &ldquo;By a new and living way, which he hath consecrated for us, through the veil, that is to say, his flesh&rdquo; (Heb. 10:19–20). Christ is the veil. He separates and He is torn open. The way that was barred is now open. The distance that was absolute is now bridged. Every human can now approach.',
        },
        {
          kind: 'carry',
          html:
            'There was a barrier that stood for fifteen hundred years. Cherubim woven in it. Silver sockets holding it up. Gold hooks from which it hung. It said, &ldquo;No one may pass.&rdquo; And then Christ was torn, and the barrier was torn with Him. If there is a wall in you today — a wall that says &ldquo;You cannot come close&rdquo; — that wall is also torn. Not because you earned your way past it. Because He was torn to open the way.',
        },
        {
          kind: 'reflection',
          id: 'veil-torn',
          prompt: 'What barrier have you believed stood between you and God that the tearing of the veil now removes?',
        },
        {
          kind: 'artwork',
          matchTitle: /veil|temple|curtain/i,
          caption: 'Exodus 26:31–35 · The Veil That Separates',
        },
      ],
    },

    /* ─── Exodus 26:36–37 — The Screen ────────────────────────────── */
    {
      ref: 'Exodus 26:36–37',
      title: 'The Screen at the Entrance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 36,
              spans: [
                t('And thou shalt make an hanging for the door of the tent, of blue, and purple, and scarlet, and fine twined linen, wrought of needlework;'),
              ],
            },
            {
              number: 37,
              spans: [
                t('And thou shalt make for the hanging five pillars of shittim wood overlaid with gold: and their hooks shall be of gold: and thou shalt cast five sockets of brass for them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'screen-entrance',
          html:
            'One more barrier. Not the inner veil, not the outer covering. This is the screen at the tent door — the first thing anyone encounters. Again, blue and purple and scarlet, colors of priesthood and sacrifice. The approach to God is not casual. There is a progression: a screen at the entrance, then the Holy Place, then the veil, then the Holy of Holies. Each threshold marks a step closer, each barrier reminds you: this place is set apart.',
        },
        {
          kind: 'carry',
          html:
            'The screen at the entrance is not as holy as the veil, but it is still holy. It marks a threshold. In your own life, what thresholds have you crossed to draw near to God? A prayer. A silence. A Sunday morning. A conversation with someone who knows Him. The smallest approach is still an approach. The screen honors the barrier and opens the way.',
        },
      ],
    },
  ],
};
