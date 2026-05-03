import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Exodus 30 — The Altar of Incense, Ransom Money, the Laver, and Holy Oil.
 *
 * This chapter contains four key instructions for the tabernacle: the golden altar
 * placed before the veil (where incense is burned daily), the half-shekel ransom
 * paid per person, the bronze laver for washing, the holy anointing oil recipe,
 * and the sacred incense formula. Each item foreshadows Christ's redemptive work.
 */

export const EXODUS_30: RichChapterContent = {
  bookSlug: 'exodus',
  bookName: 'Exodus',
  chapter: 30,

  estimatedMinutes: { beginner: 9, intermediate: 15, deep: 18 },
  intros: [
    'Exodus 30 moves deeper into the tabernacle instructions with four precious items: the golden altar of incense, the atonement money, the bronze laver for washing, the holy anointing oil, and the sacred incense itself. Each is placed carefully and guarded carefully. The altar stands before the veil; the laver sits between the tent and the altar; the oil and incense are made to one exact formula, no substitute allowed.',
    'For readers who see Christ in the Old Testament types and patterns, this chapter is thick with it. The perpetual incense that rises from the altar becomes the prayers of the saints rising before God. The half-shekel ransom for every soul becomes a foreshadow of the ransom Jesus paid for all. The anointing oil, used to set apart priests and kings, points to the Anointed One Himself — the Messiah, the Christos.',
  ],

  sections: [
    /* ─── Exodus 30:1–10 — The Golden Altar of Incense ──────────────────── */
    {
      ref: 'Exodus 30:1–10',
      title: 'The Golden Altar of Incense',
      blocks: [
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 1,
              spans: [
                t('And thou shalt make an altar to burn '),
                hy('incense', 'hebrew-ketoret'),
                t(' upon: of shittim wood shalt thou make it.'),
              ],
            },
            {
              number: 2,
              spans: [t('A cubit shall be the length thereof, and a cubit the breadth thereof; foursquare shall it be: and two cubits shall be the height thereof: the horns thereof shall be of the same.')],
            },
            {
              number: 3,
              spans: [t('And thou shalt overlay it with pure gold, both the top thereof, and the sides thereof round about, and the horns thereof; and thou shalt make unto it a crown of gold round about.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-altar-gold',
          html:
            'The incense altar is small — one cubit square — but entirely covered in pure gold. It is not the largest piece of tabernacle furniture, but it is the most refined. Gold is used where worship happens or where God draws near. This altar sits before the veil, in the Holy Place, where the high priest enters to burn incense daily. It is the closest thing to the throne of God that the priests can approach while still living in the old covenant.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-ketoret',
          title: 'Ketoret — &ldquo;incense&rdquo;',
          script: 'קְטֹרֶת',
          translit: '<strong>ketoret</strong> · smoke; burnt offering; the fragrant offering that rises upward',
          description:
            'Ketoret is the general word for incense, but also for any sweet-smelling offering. In Revelation 8:3, the angel at the altar holds ketoret — the prayers of the saints rising as incense before God.',
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 4,
              spans: [t('And two golden rings shalt thou make to it under the crown of it, by the two corners thereof, upon the two sides of it shalt thou make it; and they shall be for places for the staves to bear it withal.')],
            },
            {
              number: 5,
              spans: [t('And thou shalt make the staves of shittim wood, and overlay them with gold.')],
            },
            {
              number: 6,
              spans: [t('And thou shalt put it before the veil that is by the ark of the covenant, before the mercy seat that is over the testimony, '), hg('where I will meet with thee', 'c-meeting-place'), t('.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-meeting-place',
          html:
            'God promises to meet with the people at the mercy seat — the lid of the ark, where the blood of atonement is sprinkled on the Day of Atonement. The incense altar stands outside the veil, in the space where priests enter. Yet it is situated so that its smoke rises into the Most Holy Place itself. Incense is the priest&apos;s prayer rising into the presence of God.',
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 7,
              spans: [
                t('And Aaron shall burn '),
                hp('thereon sweet incense every morning', 'christ-perpetual-incense'),
                t(': when he dresseth the lamps, he shall burn incense upon it.'),
              ],
            },
            {
              number: 8,
              spans: [t('And when Aaron lighteth the lamps at even, he shall burn incense upon it, a perpetual incense before the Lord throughout your generations.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-perpetual',
          html:
            'The incense burns twice daily — morning and evening, every single day. This is not a yearly event or a special occasion. It is perpetual. In Psalm 141:2, the psalmist prays, &ldquo;Let my prayer be set forth before thee as incense&rdquo; (Psalm 141:2). Every day, the altar smolders. Every day, smoke rises. The picture is prayer that does not stop.',
        },
        {
          kind: 'christ',
          id: 'christ-perpetual-incense',
          title: 'Christ Connection — Perpetual Intercession',
          html:
            'Revelation 8:3–4 tells us: &ldquo;Another angel came and stood at the altar, having a golden censer; and there was given unto him much incense, that he should offer it with the prayers of all saints upon the golden altar which was before the throne of God. And the smoke of the incense, which came with the prayers of the saints, ascended up before God.&rdquo; Hebrews 7:25 makes the connection explicit: Jesus &ldquo;ever liveth to make intercession for them.&rdquo; The perpetual incense on the altar is a type of Christ&apos;s perpetual prayer for us.',
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 9,
              spans: [t('Ye shall offer no strange incense thereon, nor burnt offering, nor meat offering; neither shall ye pour drink offering thereon.')],
            },
            {
              number: 10,
              spans: [
                t('And Aaron shall make an atonement upon the horns of it once a year with the blood of the sin offering of atonements: once in the year shall he make atonement upon it throughout your generations: it is most holy unto the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-nothing-else',
          html:
            'The altar is reserved entirely for incense. No other offering is permitted on it. And once a year, on the Day of Atonement, the high priest brings blood to the horns of this altar. The space where prayer rises must be covered with atonement. Without the blood, there is no approach — not even in prayer.',
        },
        {
          kind: 'carry',
          html:
            'If incense is prayer rising, then the incense altar is a picture of a life that prays. Morning and evening. Not once a year, not on special occasions — perpetual. In the middle of your week, in the middle of your year, prayer is your incense, rising before God. And here is the hard truth the chapter guards: there is no prayer that rises into God&apos;s presence except by the blood. The only way to approach is through atonement. In the old covenant, it was yearly. In the new, Christ&apos;s blood covers all our prayers perpetually.',
        },
        {
          kind: 'reflection',
          id: 'incense-altar',
          prompt: 'When you look at your own prayer life, is it more like incense rising perpetually, or more like a once-in-a-while event? What would it look like to let it become perpetual?',
        },
      ],
    },

    /* ─── Exodus 30:11–16 — The Ransom Money ──────────────────────────── */
    {
      ref: 'Exodus 30:11–16',
      title: 'The Atonement Money',
      blocks: [
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 11,
              spans: [
                t('And the Lord spake unto Moses, saying,'),
              ],
            },
            {
              number: 12,
              spans: [
                t('When thou takest the sum of the children of Israel after their number, then shall they give every man a '),
                hy('ransom for his soul', 'hebrew-kofer'),
                t(' unto the Lord, that there be no plague among them, when thou numberest them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-census-ransom',
          html:
            'A census is being taken — a count of the people. But a count carries a kind of risk in Scripture; numbering the people is presented as something that requires atonement. Each person must pay a ransom for his soul. The ransom is not payment for sin; it is acknowledgment that every soul belongs to God, and that we live only by His permission.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-kofer',
          title: 'Kofer — &ldquo;ransom&rdquo;',
          script: 'כֹּפֶר',
          translit: '<strong>kofer</strong> · redemption price; the payment that buys back a life',
          description:
            'Kofer appears throughout Scripture: a ransom paid to save a life (Ex. 21:30), atonement money, or the covering that makes peace between God and humanity. It is the word for both the price and the pardon.',
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 13,
              spans: [
                t('This they shall give, every one that passeth among them that are numbered, '),
                hg('half a shekel after the shekel of the sanctuary', 'c-half-shekel'),
                t(': (a shekel is twenty gerahs:) an half shekel shall be the offering of the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-half-shekel',
          html:
            'The ransom is exactly the same for everyone: half a shekel. Rich or poor, strong or weak, prominent or obscure — everyone pays the same amount. This is the only place in the Law where the standard payment is identical regardless of wealth. It underscores a truth: before God, a soul is a soul. No one is worth more; no one is worth less.',
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 14,
              spans: [t('Every one that passeth among them that are numbered, from twenty years old and above, shall give an offering unto the Lord.')],
            },
            {
              number: 15,
              spans: [
                t('The rich shall not give more, and the poor shall not give less than half a shekel, when they make an offering unto the Lord, to make an atonement for your souls.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-equal-souls',
          html:
            'The text is emphatic: rich and poor pay identically. No exceptions, no sliding scale. In a world where money buys everything else, here is something money cannot buy — equality before God. Every soul is ransomed for the same price.',
        },
        {
          kind: 'christ',
          id: 'christ-ransom-price',
          title: 'Christ Connection — The Ransom for All',
          html:
            'In 1 Timothy 2:6, Paul writes that Christ &ldquo;gave himself a ransom for all.&rdquo; In Mark 10:45, Jesus says the Son of Man came &ldquo;to give his life a ransom for many.&rdquo; The half-shekel in Exodus is a type — a physical payment that foreshadows the one true ransom. And notice: it is the <em>same</em> for all. Rich and poor, famous and unknown, Jew and Gentile — Christ&apos;s ransom price does not negotiate. It covers all souls equally.',
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 16,
              spans: [
                t('And thou shalt take the atonement money of the children of Israel, and shalt appoint it for the service of the tabernacle of the congregation; that it may be a memorial unto the children of Israel before the Lord, to make an atonement for your souls.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-ransom-used',
          html:
            'The ransom money is not hoarded. It is collected and used for the tabernacle — the house of God, the place of meeting. Your ransom buys into the common worship. You are not just redeemed as an individual; you are redeemed into a people, a community gathered around the one altar.',
        },
        {
          kind: 'carry',
          html:
            'You cannot buy your way out of God. Your bank account, your title, your reputation — none of it changes the price. You are ransomed for the same cost as everyone else: everything. And that cost has already been paid. You walk free — not because you earned it, not because you&apos;re worth it, but because the ransom was paid and the memorial stands. The only appropriate response is to join the common worship, to live as part of the people of God, redeemed together.',
        },
        {
          kind: 'reflection',
          id: 'ransom',
          prompt: 'What would change if you truly believed that your soul was ransomed — bought back at infinite cost — and that you now belong to God?',
        },
      ],
    },

    /* ─── Exodus 30:17–21 — The Bronze Laver ──────────────────────────── */
    {
      ref: 'Exodus 30:17–21',
      title: 'The Bronze Laver',
      blocks: [
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 17,
              spans: [
                t('And the Lord spake unto Moses, saying,'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Thou shalt also make a '),
                hy('laver', 'hebrew-kiyor'),
                t(' of brass, and his foot also of brass, to wash withal: and thou shalt put it between the tabernacle of the congregation and the altar, and thou shalt put water therein.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-laver-place',
          html:
            'The laver sits in the courtyard of the tabernacle, between the tent and the altar. It is the first major piece of equipment a priest encounters after entering the court. Before touching anything holy, before drawing near the altar, the priest must wash. The body comes into contact with the everyday; it must be cleansed before it approaches God.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-kiyor',
          title: 'Kiyor — &ldquo;laver&rdquo;',
          script: 'כִיוֹר',
          translit: '<strong>kiyor</strong> · a large basin; a washing vessel',
          description:
            'The word appears in other OT contexts for any large water basin. But here, it is the ritual washing place. Priests wash their hands and feet at the laver before approaching the altar or entering the tent. It is preparation for holiness.',
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 19,
              spans: [
                t('For '),
                hg('Aaron and his sons', 'c-priests-wash'),
                t(' shall wash their hands and their feet thereat:'),
              ],
            },
            {
              number: 20,
              spans: [
                t('When they go into the tabernacle of the congregation, they shall wash with water, that they die not; or when they come near to the altar to minister, to offer an offering made by fire unto the Lord:'),
              ],
            },
            {
              number: 21,
              spans: [
                t('So they shall wash their hands and their feet, that they die not: and it shall be a statute for ever to them, even to him and to his seed throughout their generations.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-priests-wash',
          html:
            'The washing is not optional. Verse 20 carries a stark warning: "they die not" — washing is a matter of life and death. Drawing near to God unwashed is fatal. The warning is not abstract; it is concrete. The priests must observe the boundary between the everyday world and the holy place. Water is the instrument of that boundary.',
        },
        {
          kind: 'carry',
          html:
            'In your own day, washing is a mundane act — practical, not spiritual. But the Scriptures invite you to see it differently. Each time you wash, you can ask: What needs cleansing in me before I approach God? Not obsessive guilt, but honest inventory. A thought you need to let go. A word you regret. Time spent on what doesn&apos;t matter. The laver stands between the everyday world and the altar. You, too, stand in that space every day. What would it look like to let running water be a small rhythm of preparation — hands clean, heart ready, before you turn to worship?',
        },
        {
          kind: 'reflection',
          id: 'laver',
          prompt: 'What barriers do you feel between yourself and God right now? What would washing — letting go, making clean — look like for you?',
        },
      ],
    },

    /* ─── Exodus 30:22–33 — The Holy Anointing Oil ──────────────────── */
    {
      ref: 'Exodus 30:22–33',
      title: 'The Holy Anointing Oil',
      blocks: [
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 22,
              spans: [
                t('Moreover the Lord spake unto Moses, saying,'),
              ],
            },
            {
              number: 23,
              spans: [
                t('Take thou also unto thee principal spices, of pure myrrh five hundred shekels, and of sweet cinnamon half so much, even two hundred and fifty shekels, and of sweet calamus two hundred and fifty shekels,'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And of cassia five hundred shekels, after the shekel of the sanctuary, and of olive oil a hin:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-oil-ingredients',
          html:
            'The recipe is exact. Myrrh, cinnamon, calamus, cassia — all precious, all imported, all expensive. These are not local materials; they come from far away. The anointing oil is costly. Myrrh especially carries weight in Scripture: the fragrance of suffering, the gift of the magi, the drink offered to Jesus at the cross. This oil is not perfume for decoration. It is the marker of being set apart by God.',
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 25,
              spans: [
                t('And thou shalt make it an oil of holy ointment, an ointment compound after the art of the apothecary: it shall be an '),
                hg('holy anointing oil', 'c-holy-oil'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-holy-oil',
          html:
            'The phrase &ldquo;holy anointing oil&rdquo; is not just a name — it is the oil&apos;s identity. Everything it touches becomes holy. The tabernacle, the altar, the vessels, the priests themselves — anointing makes them sacred, set apart, dedicated to God.',
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 26,
              spans: [
                t('And thou shalt anoint the tabernacle of the congregation therewith, and the ark of the testimony,'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And the table and all his vessels, and the candlestick and his vessels, and the altar of incense,'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And the altar of burnt offering with all his vessels, and the laver and his foot.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And thou shalt sanctify them, that they may be most holy: whatsoever toucheth them shall be holy.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-contagion-holy',
          html:
            'Holiness spreads. The oil anoints the objects, making them holy. And then, anything that touches these holy objects becomes holy itself. Holiness is not fragile; it is contagious in the right direction. The barrier between the sacred and the ordinary is permeable — and it yields to God&apos;s work, not the world&apos;s.',
        },
        {
          kind: 'christ',
          id: 'christ-anointed-one',
          title: 'Christ Connection — The Messiah Anointed',
          html:
            'The word &ldquo;Messiah&rdquo; in Hebrew is &ldquo;Mashiach&rdquo; — the Anointed One. In Greek, &ldquo;Christos.&rdquo; Every king and high priest of Israel was anointed with oil. But Jesus is the Anointed One par excellence — anointed not with oil, but with the Holy Spirit (Luke 4:18; Acts 10:38). The oil pointing forward to Him, the Spirit indwelling in Him, and through Him, available to us. When you are anointed by His Spirit, you, too, are set apart — holy, dedicated, contagious with the presence of God.',
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 30,
              spans: [
                t('And thou shalt anoint Aaron and his sons, and consecrate them, that they may minister unto me in the priest&apos;s office.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('And thou shalt speak unto the children of Israel, saying, This shall be an holy anointing oil unto me throughout your generations.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('Upon man&apos;s flesh shall it not be poured, and ye shall make no other like it, after the composition of it: it is holy, and it shall be holy unto you.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('Whosoever compoundeth any like it, or whosoever putteth any of it upon a stranger, shall even be cut off from his people.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-oil-guarded',
          html:
            'The oil is guarded as jealously as the incense. No substitutes. No imitations. No casual use. To make a copy or to anoint someone outside the covenant is to be cut off from the people. The boundaries around holiness are firm. God does not share His glory with counterfeits.',
        },
        {
          kind: 'carry',
          html:
            'If you have been anointed — set apart by the Spirit of Christ — you are set apart to belong to God, not to the world. The oil marks a boundary. You are meant to be different, holy, contagious with the presence of God. That does not mean withdrawal from the world; it means living among it as someone who has already been claimed, already been marked, already been made sacred. Your everyday life is now an anointing oil, spreading the mark of God&apos;s presence to the ordinary people and places you touch.',
        },
        {
          kind: 'reflection',
          id: 'anointing-oil',
          prompt: 'Do you live as though you have been anointed — set apart by God? What would change if you truly believed that the Holy Spirit marks you as sacred, separate, and fully His?',
        },
      ],
    },

    /* ─── Exodus 30:34–38 — The Sacred Incense ────────────────────────── */
    {
      ref: 'Exodus 30:34–38',
      title: 'The Sacred Incense Formula',
      blocks: [
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 34,
              spans: [
                t('And the Lord said unto Moses, Take unto thee sweet spices, stacte, and onycha, and galbanum, these sweet spices with pure frankincense: of each shall there be a like weight;'),
              ],
            },
            {
              number: 35,
              spans: [
                t('And thou shalt make it a perfume, a confection after the art of the apothecary, tempered together, pure and holy:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-incense-ingredients',
          html:
            'The incense formula is specific and balanced: stacte (a resin), onycha (a shell-based fragrance), galbanum (a bitter-scented resin), and frankincense (the most precious of all) — each in equal measure. The balance is not accidental. Four different sources, four different notes, combined into one fragrance. This is not haphazard; this is craft, skill, intention.',
        },
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 36,
              spans: [
                t('And thou shalt beat some of it very small, and put of it before the testimony in the tabernacle of the congregation, where I will meet with thee: it shall be unto you most holy.'),
              ],
            },
            {
              number: 37,
              spans: [
                t('And as for the perfume which thou shalt make, ye shall not make to yourselves according to the composition thereof: it shall be unto thee holy for the Lord.'),
              ],
            },
            {
              number: 38,
              spans: [
                t('Whosoever shall make like unto it, to smell thereto, shall even be cut off from his people.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-incense-guarded',
          html:
            'The incense, like the oil, is guarded. No one may make it for personal enjoyment. No one may replicate it. To do so is to be cut off. The boundaries are stern. These are not items to be commercialized or domesticated. They belong entirely to God&apos;s worship, to the space where He is met.',
        },
        {
          kind: 'carry',
          html:
            'In your own life, some things are holy and some are not. A meal with your family can be worship; scrolling on your phone usually is not. Time set apart for God is incense; time squandered on distraction is smoke that goes nowhere. The question is not whether you spend time or money — you will spend both. The question is whether you are offering the best of what you have, in the right measure, with the right intention, to God alone. Incense is prayer. Make yours count.',
        },
        {
          kind: 'reflection',
          id: 'incense-formula',
          prompt: 'What is the fragrance of your life rising before God? Is it carefully composed and fully dedicated, or scattered and mixed with substitutes?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'The golden altar stands before the veil. The half-shekel is paid by every soul. The laver waits between the world and the altar. The anointing oil marks the sacred. And incense — perpetual, guarded, exactly crafted — rises every morning and every evening, a fragrance of prayer before the Lord.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Exodus 30 · Study Guide',
  },
};
