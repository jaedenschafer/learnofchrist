import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Exodus 28 — The garments of the high priest.
 *
 * The ephod, the breastplate of judgment with Urim and Thummim,
 * the robe with bells and pomegranates, the golden plate engraved
 * "Holiness to the Lord." Every detail speaks of bearing the people
 * and their names before God.
 */
export const EXODUS_28: RichChapterContent = {
  bookSlug: 'exodus',
  bookName: 'Exodus',
  chapter: 28,

  estimatedMinutes: { beginner: 9, intermediate: 14, deep: 18 },
  opener: {
    matchTitle: /Aaron from De Biblie/i,
    caption: 'Exodus 28',
  },
  intros: [
    'Exodus 28 takes us inside the tabernacle workshop to dress the high priest. His garments are unlike any ordinary clothes — they are instruments of priesthood itself. The ephod holds the names of Israel&apos;s twelve tribes on its shoulder stones, one name on each shoulder: the priest does not carry the load of the people on his back, but bears them in strength on his shoulders, always visible to the Lord. The breastplate holds twelve more stones, one for each tribe, placed directly over the heart. These are the Urim and Thummim — the lots by which Israel sought God&apos;s guidance. A blue robe rings with bells and pomegranates, sounding his movements as he ministers before the Lord. And on his forehead, a golden plate engraved with "Holiness to the Lord," declaring that whatever is offered here is offered to the Lord alone.',
    'For every believer who has ever wondered, "Does God really see me?" or "What happens when I come before Him?" — this chapter answers. The high priest&apos;s garments show us what it looks like to stand in God&apos;s presence. And in the New Testament, Jesus is revealed as the High Priest whose work is even greater — He is both the priest and the offering, bearing our names on His shoulders not for a day, but forever.',
  ],

  tapHint: 'Tap highlighted text to jump to notes, then scroll back to where you were.',

  sections: [
    /* ─── Exodus 28:1–5 — The Calling of Aaron ────────────────────────── */
    {
      ref: 'Exodus 28:1–5',
      title: 'Aaron Set Apart',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 1,
              spans: [
                t('And '),
                hp('take thou unto thee Aaron thy brother', 'ex28-aaron'),
                t(', and his sons with him, from among the children of Israel, that he may minister unto me in the priest&apos;s office, even Aaron, Nadab and Abihu, Eleazar and Ithamar, Aaron&apos;s sons.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex28-aaron',
          html:
            'Aaron is not chosen because of special qualification or prior training. He is simply called out from Israel and set apart for the Lord&apos;s service. The priesthood is God&apos;s gift, not man&apos;s achievement. His sons are named: Nadab and Abihu will later die for offering strange fire before the Lord (Leviticus 10:1–2), so even priestly calling carries the weight of covenant obedience[res:lampstand-table][res:sefaria-exodus-28].',
        },

        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 2,
              spans: [
                t('And thou shalt make '),
                hy('holy garments', 'ex28-glory-beauty'),
                t(' for Aaron thy brother for glory and for beauty.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex28-glory-beauty',
          html:
            'The priest&apos;s garments are made for <em>glory</em> and <em>beauty</em> — they display the dignity of the office and the loveliness of serving the Lord. A holy priesthood is not meant to hide; it is meant to make visible what it looks like to stand before God[res:museum-model].',
        },

        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 3,
              spans: [
                t('And thou shalt speak unto all that are wisehearted, whom I have filled with the spirit of wisdom, that they may make Aaron&apos;s garments to consecrate him, that he may minister unto me in the priest&apos;s office.'),
              ],
            },
          ],
        },

        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 4,
              spans: [
                t('And these are the garments which they shall make; a breastplate, and an ephod, and a robe, and a broidered coat, a mitre, and a girdle: and they shall make holy garments for Aaron thy brother, and his sons, to minister unto me in the priest&apos;s office.'),
              ],
            },
          ],
        },

        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 5,
              spans: [
                t('And they shall take gold, and blue, and purple, and scarlet, and fine linen.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex28-materials',
          html:
            'Gold, blue, purple, and scarlet are the colors of heaven and royalty. Fine linen speaks of purity. Every material was freely given by the people in their offering — the same materials that built the tabernacle itself. The priest&apos;s garments, like the tabernacle, are a gift from the congregation.',
        },

        {
          kind: 'carry',
          html:
            'If you have ever wondered whether your place in God&apos;s kingdom has significance, notice this: Aaron is not dressed in sackcloth or ash. His garments are made to <em>display</em> his calling — in gold and blue and scarlet, made with wisdom, crafted for glory. Your own calling, whatever it is, is meant to be seen. It matters to God and to the body.',
        },

        {
          kind: 'reflection',
          id: 'ex28-calling',
          prompt:
            'What is one area where God has called you to serve — perhaps quietly, perhaps visibly? How might you dress it (make it visible) with more intention this week?',
        },
      ],
    },

    /* ─── Exodus 28:6–12 — The Ephod ──────────────────────────────────── */
    {
      ref: 'Exodus 28:6–12',
      title: 'The Ephod and Shoulder Stones',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 6,
              spans: [
                t('And they shall make the ephod of gold, of blue, and of purple, of scarlet, and fine twined linen, with cunning work.'),
              ],
            },
          ],
        },

        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 7,
              spans: [
                t('It shall have the two shoulderpieces thereof joined at the two edges thereof; and so it shall be joined together.'),
              ],
            },
          ],
        },

        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 8,
              spans: [
                t('And the curious girdle of the ephod, which is upon it, shall be of the same, according to the work thereof; even of gold, of blue, and purple, and scarlet, and fine twined linen.'),
              ],
            },
          ],
        },

        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 9,
              spans: [
                t('And thou shalt take two onyx stones, and grave on them the names of the children of Israel:'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Six of their names on one stone, and the other six names of the rest on the other stone, according to their birth.'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'ex28-onyx',
          html:
            'Two onyx stones, one on each shoulder. The twelve tribes of Israel — all of them, ordered by birth — are engraved on these stones. This is not a decoration; this is the priest&apos;s most sacred work: to carry the names of God&apos;s people into the presence of God, bearing them on his shoulders in strength.',
        },

        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 11,
              spans: [
                t('With the work of an engraver in stone, like the engravings of a signet, shalt thou engrave the two stones with the names of the children of Israel: thou shalt make them to be set in ouches of gold.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And thou shalt put the two stones upon the shoulderpieces of the ephod for stones of memorial unto the children of Israel: and Aaron shall bear their names before the Lord upon his two shoulders for a memorial.'),
              ],
            },
          ],
        },

        {
          kind: 'hebrew',
          id: 'hebrew-ephod',
          title: 'Ephod — &ldquo;priestly vest&rdquo;',
          script: 'אֵפוֹד',
          translit: '<strong>ephod</strong> · a linen garment with shoulder pieces',
          description:
            'The ephod is the primary garment of the high priest. The two shoulder stones inscribed with the names of the twelve tribes turn the priest himself into a living memorial before God.',
        },

        {
          kind: 'christ',
          id: 'christ-shoulders',
          title: 'Christ Connection — Bearing Our Names in Strength',
          html:
            'Jesus is described as the great High Priest who bore our sins "in his own body on the tree" (1 Peter 2:24). But notice where Aaron bore the names of the tribes: on his shoulders, in strength. The prophet Isaiah foresaw this: "For unto us a child is born, unto us a son is given: and the government shall be upon his shoulder" (Isaiah 9:6). The one who carries the government of God&apos;s kingdom on his shoulders is also the one who bears our names — every one of us — lifted up in His strength before the Father. Hebrews 4:14–16 calls us to approach His throne with confidence, knowing He is holding us there.',
        },

        {
          kind: 'carry',
          html:
            'You have a name. It is engraved on the shoulders of the High Priest. Not forgotten, not overlooked, not down the list — carried in strength, borne before God in the place of greatest prominence. Whatever you carry this week that feels heavy, notice that you yourself are being carried.',
        },

        {
          kind: 'reflection',
          id: 'ex28-shoulders',
          prompt:
            'What burden are you carrying that you need to remember is also being carried on His shoulders? How does that change your step today?',
        },
      ],
    },

    /* ─── Exodus 28:15–30 — The Breastplate of Judgment ──────────────── */
    {
      ref: 'Exodus 28:15–30',
      title: 'The Breastplate and Urim and Thummim',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 15,
              spans: [
                t('And thou shalt make a breastplate of judgment with cunning work; after the work of the ephod thou shalt make it; of gold, of blue, and of purple, and of scarlet, and of fine twined linen shalt thou make it.'),
              ],
            },
          ],
        },

        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 16,
              spans: [
                t('Foursquare it shall be being doubled; a span shall be the length thereof, and a span shall be the breadth thereof.'),
              ],
            },
          ],
        },

        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 17,
              spans: [
                t('And thou shalt set in it settings of stones, even four rows of stones: the first row shall be a sardius, a topaz, and a carbuncle: this shall be the first row.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And the second row shall be an emerald, a sapphire, and a diamond.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And the third row a ligure, an agate, and an amethyst.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And the fourth row a beryl, and an onyx, and a jasper: they shall be set in gold in their inclosings.'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'ex28-twelve-stones',
          html:
            'Twelve stones, one for each tribe, arranged in four rows. These are the same twelve stones, in the same order, that will later be set in the foundation walls of the New Jerusalem (Revelation 21:14, though there called the twelve apostles). The breastplate sits directly over the priest&apos;s heart. When the priest stands before God, the tribes are held against his heart.',
        },

        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 21,
              spans: [
                t('And the stones shall be with the names of the children of Israel, twelve, according to their names, like the engravings of a signet; every one with his name shall they be according to the twelve tribes.'),
              ],
            },
          ],
        },

        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 29,
              spans: [
                t('And Aaron shall bear the names of the children of Israel in the breastplate of judgment upon his heart, when he goeth in unto the holy place, for a memorial before the Lord continually.'),
              ],
            },
          ],
        },

        {
          kind: 'hebrew',
          id: 'hebrew-choshen',
          title: 'Choshen Mishpat — &ldquo;breastplate of judgment&rdquo;',
          script: 'חֹשֶׁן מִשְׁפָּט',
          translit: '<strong>choshen mishpat</strong> · the judgment-breastplate worn over the heart',
          description:
            'The breastplate is where the priest held the Urim and Thummim — the means by which God&apos;s will was discerned. Over the heart is where God&apos;s people are held in His judgment and His mercy.',
        },

        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 30,
              spans: [
                t('And thou shalt put in the breastplate of judgment '),
                hy('the Urim and the Thummim', 'ex28-urim'),
                t('; and they shall be upon Aaron&apos;s heart, when he goeth in before the Lord: and Aaron shall bear the judgment of the children of Israel upon his heart before the Lord continually.'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'ex28-urim',
          html:
            'The Urim and Thummim — "lights and perfections" — were likely sacred lots placed in a pouch in the breastplate. When Israel needed to know God&apos;s will, the priest would consult them. The exact mechanism is not explained; it remains mysterious. What matters is that God made a way for His people to ask and receive an answer. Guidance was not locked away in heaven but held in the priest&apos;s hands, literally over his heart.',
        },

        {
          kind: 'christ',
          id: 'christ-heart',
          title: 'Christ Connection — Bearing Our Names Over His Heart',
          html:
            'The High Priest bears Israel&apos;s names in two places: on his shoulders in strength, over his heart in love. Hebrews 7:24–28 reveals that Jesus is a priest who "ever liveth to make intercession for them" — His high-priestly work is ongoing. He does not lay down His robes after one day; He stands perpetually before the Father, holding each of His people in judgment and mercy. The twelve tribes are now the church. You are engraved on the heart of the High Priest.',
        },

        {
          kind: 'carry',
          html:
            'When you feel unseen, unloved, or like your name doesn&apos;t matter — remember where your name is written. Not on a public wall where everyone can see it. Over the heart. In the place of most intimate knowledge and deepest love. The High Priest knows you not because you performed well, but because you are engraved on His heart.',
        },

        {
          kind: 'reflection',
          id: 'ex28-heart',
          prompt:
            'If your name is engraved over the High Priest&apos;s heart, what burden of trying to prove yourself might you finally set down?',
        },
      ],
    },

    /* ─── Exodus 28:31–35 — The Robe ────────────────────────────────── */
    {
      ref: 'Exodus 28:31–35',
      title: 'The Robe with Bells and Pomegranates',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 31,
              spans: [
                t('And thou shalt make the robe of the ephod all of blue.'),
              ],
            },
          ],
        },

        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 32,
              spans: [
                t('And there shall be an hole in the top of it, in the midst thereof: it shall have a binding of woven work round about the hole of it, as it were the hole of an habergeon, that it be not rent.'),
              ],
            },
          ],
        },

        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 33,
              spans: [
                t('And beneath upon the hem of it thou shalt make pomegranates of blue, and of purple, and of scarlet, round about the hem thereof; and '),
                hg('bells of gold between them round about', 'ex28-bells'),
                t(':'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'ex28-bells',
          html:
            'Bells and pomegranates alternate on the hem of the blue robe. One ornament speaks of fruit, abundance, fertility — the blessing of God&apos;s fruitfulness. One speaks of sound, presence, announcement. As the priest moves through the tabernacle, his movements are heard. He does not approach God in silence; his service makes a sound.',
        },

        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 34,
              spans: [
                t('A golden bell and a pomegranate, a golden bell and a pomegranate, upon the hem of the robe round about.'),
              ],
            },
            {
              number: 35,
              spans: [
                t('And it shall be upon Aaron when he ministereth: and his sound shall be heard when he goeth in unto the holy place before the Lord, and when he cometh out, that he die not.'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'ex28-death',
          html:
            'The bells serve a life-and-death purpose. If the priest entered the holy place unworthy or in uncleanness, he could die in God&apos;s presence (Numbers 4:15–20, 1 Samuel 6:19). The bells announced his movement; silence would mean danger. The sound of his work is the sound of his ongoing faithfulness.',
        },

        {
          kind: 'christ',
          id: 'christ-bells',
          title: 'Christ Connection — Ever Living to Intercede',
          html:
            'The sound of the bells marks the priest&apos;s ceaseless work within the holy place. This is Paul&apos;s picture of Christ&apos;s priesthood: "But this man, because he continueth ever, hath an unchangeable priesthood. Wherefore he is able also to save them to the uttermost that come unto God by him, seeing he ever liveth to make intercession for them" (Hebrews 7:24–25). The bells of the robe are the sound of an endless intercession. Your High Priest is not silent. His work continues.',
        },

        {
          kind: 'carry',
          html:
            'You will have seasons this week when you feel invisible, when your efforts seem to go unnoticed. Notice the bells. The priest&apos;s work is made known by its sound, not by applause. Your faithfulness, your prayers, your small acts of obedience — they make a sound in heaven. The High Priest hears them.',
        },

        {
          kind: 'reflection',
          id: 'ex28-bells-2',
          prompt:
            'What is one faithful act you&apos;ve done quietly, thinking no one noticed? How would it change if you believed that sound reaches the throne of God?',
        },
      ],
    },

    /* ─── Exodus 28:36–43 — The Golden Plate ──────────────────────────── */
    {
      ref: 'Exodus 28:36–43',
      title: 'The Holiness Plate',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 36,
              spans: [
                t('And thou shalt make a plate of pure gold, and grave upon it, like the engravings of a signet, '),
                hp('Holiness to the Lord', 'ex28-plate'),
                t('.'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'ex28-plate',
          html:
            'A golden plate for the priest&apos;s forehead. On it, the words "<em>Holiness to the Lord</em>" — not "holiness in the Lord," not "through the Lord," but <em>to</em> the Lord. Every act of priestly service is dedicated to God alone. The plate is worn on the forehead, the place of highest visibility, the seat of thought and intention. The priest&apos;s whole mind is set toward the holiness of God.',
        },

        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 37,
              spans: [
                t('And thou shalt put it on a blue lace, that it may be upon the mitre; upon the forefront of the mitre it shall be.'),
              ],
            },
          ],
        },

        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 38,
              spans: [
                t('And it shall be upon Aaron&apos;s forehead, that Aaron may bear the iniquity of the holy things, which the children of Israel shall hallow in all their holy gifts: and it shall be always upon his forehead, that they may be accepted before the Lord.'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'ex28-iniquity',
          html:
            'The plate declares "Holiness to the Lord," yet Aaron bears the iniquity of the holy things. This mystery — that the priest wears both the declaration of holiness and the burden of the people&apos;s imperfection — points to the one High Priest who alone can reconcile these two truths. The priest is both holy and sinful; the sacrifice must be both.',
        },

        {
          kind: 'hebrew',
          id: 'hebrew-kodesh',
          title: 'Kodesh la-Yahweh — &ldquo;Holiness to the Lord&rdquo;',
          script: 'קֹדֶשׁ לַיהוָה',
          translit: '<strong>kodesh la-Yahweh</strong> · set apart, dedicated to the Lord',
          description:
            'The formula marks everything dedicated to God&apos;s exclusive service. Vessels, garments, even the priest himself are <em>kodesh</em> — separated from common use, belonging to God alone.',
        },

        {
          kind: 'christ',
          id: 'christ-holiness',
          title: 'Christ Connection — Holiness to the Lord in Person',
          html:
            'Jesus Himself is the one who perfectly embodies "Holiness to the Lord." He alone bears no iniquity, yet He bore it all. The prophet Isaiah foresaw: "Who hath believed our report? and to whom is the arm of the Lord revealed?" (Isaiah 53:1). And again, "the Lord hath laid on him the iniquity of us all" (Isaiah 53:6). The golden plate on the priest&apos;s forehead declares what Jesus is in His very person — holiness set apart, dedicated wholly to the Father, yet willing to carry the cost of redemption.',
        },

        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 39,
              spans: [
                t('And thou shalt embroider the coat of fine linen, and thou shalt make the mitre of fine linen: and thou shalt make the girdle of needlework.'),
              ],
            },
          ],
        },

        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 40,
              spans: [
                t('And for Aaron&apos;s sons thou shalt make coats, and thou shalt make for them girdles, and bonnets shalt thou make for them, for glory and for beauty.'),
              ],
            },
            {
              number: 41,
              spans: [
                t('And thou shalt put them upon Aaron thy brother, and his sons with him; and shalt anoint them, and consecrate them, and sanctify them, that they may minister unto me in the priest&apos;s office.'),
              ],
            },
          ],
        },

        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            {
              number: 42,
              spans: [
                t('And thou shalt make them linen breeches to cover their nakedness; from the loins even unto the thighs they shall reach:'),
              ],
            },
            {
              number: 43,
              spans: [
                t('And they shall be upon Aaron, and upon his sons, when they go in unto the tabernacle of the congregation, or when they come near unto the altar to minister in the holy place; that they bear not iniquity, and die: it shall be a statute for ever unto him and his seed after him.'),
              ],
            },
          ],
        },

        {
          kind: 'commentary',
          id: 'ex28-covered',
          html:
            'Even the priest&apos;s body is covered and protected by the garments. Nothing is left exposed in God&apos;s presence. This is not shame; it is mercy. The priest is covered so that he might live in the presence of holiness. The garments do not hide the priest — they protect him.',
        },

        {
          kind: 'carry',
          html:
            'The high priest approaches God neither naked nor defenseless, but clothed in garments made for glory and beauty, names borne on shoulders and heart, holiness declared on his forehead, his movements announced by bells. You, too, have a High Priest who goes before you clothed in righteousness that is not your own. You are covered. You are protected. You are presented as acceptable before the Lord.',
        },

        {
          kind: 'reflection',
          id: 'ex28-covered-2',
          prompt:
            'Where do you feel most exposed or unworthy before God? How does it change your prayer if you believe you are covered by the garments of your High Priest?',
        },
      ],
    },

    /* ─── Summary and Share Card ──────────────────────────────────────── */
    {
      ref: 'Exodus 28: Priestly Garments',
      title: 'A Priest Set Apart',
      blocks: [
        {
          kind: 'divider',
        },
        {
          kind: 'commentary',
          id: 'ex28-summary',
          html:
            'From head to toe, Aaron is dressed to stand before God on behalf of Israel. The names of the tribes rest on his shoulders in strength and lie over his heart in love. The Urim and Thummim rest in his hands. Bells announce his faithful work. And on his forehead, written in gold: "Holiness to the Lord." Every detail answers a question Israel had: <em>Does God see us? Does He know our names? Can we come before Him?</em> The answer is yes — through a priest who carries you, bears your name, and brings you into the presence of God.',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Aaron shall bear the names of the children of Israel in the breastplate of judgment upon his heart, when he goeth in unto the holy place, for a memorial before the Lord continually.',
    snippet: 'Exodus 28:29 — A study guide from Learn of Christ.',
    ref: 'Exodus 28 · Study Guide',
  },


  resources: [
    {
      id: 'lampstand-table',
      kind: 'study',
      source: 'Sefaria',
      label: 'Tabernacle Furnishings',
      url: 'https://www.sefaria.org/Exodus.35-37',
      description: 'Hebrew text on lampstand and table.',
    },
    {
      id: 'museum-model',
      kind: 'archaeology',
      source: 'Israel Museum',
      label: 'Tabernacle Model & Artifacts',
      url: 'https://www.imj.org.il/',
      description: 'Physical models of sanctuary layout.',
    },
    {
      id: 'sefaria-exodus-28',
      kind: 'study',
      source: 'Sefaria',
      label: 'Exodus 28 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Exodus.28',
      description: 'The Hebrew text of Exodus 28 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  hasHebrew: true,
};
