import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Exodus 27 — The altar of burnt offering, the courtyard, and the perpetual lamp.
 *
 * The chapter gives exact dimensions for the bronze altar (5x5x3 cubits) and the
 * courtyard enclosure (100x50 cubits), with white linen hangings. Then a command
 * for pure olive oil to keep the lamp burning continuously in the tent of meeting.
 *
 * Every detail is literal and theological at once. The altar is where whole
 * offerings (olah) ascend entirely to God—a foreshadow of Christ as the perfect
 * burnt offering. The horns of the altar become a place of refuge. The continually
 * burning lamp anticipates the Light of the World. Nothing here is casual.
 */
export const EXODUS_27: RichChapterContent = {
  bookSlug: 'exodus',
  bookName: 'Exodus',
  chapter: 27,

  estimatedMinutes: { beginner: 6, intermediate: 10, deep: 12 },
  intros: [
    'Exodus 27 moves from the tabernacle&apos;s interior (the ark, the table, the lampstand) to its furnishings and boundaries. The bronze altar stands in the courtyard, visible to all Israel. This is where whole burnt offerings rise continually—where the people give all of what they bring to God, holding nothing back. The altar&apos;s horns become a place of refuge for the one who commits unintended sin (see 1 Kings 1:50). Then comes the courtyard itself: a white-lined enclosure that separates the holy from the common, the sanctuary from the camp. And finally, a command that the lamp in the holy place burn continually through the night—a light that never goes out, kept alive by pure oil.',
    'These three elements—the altar, the courtyard, the perpetual lamp—form a theology of approach. The altar shows how sinful people can give to a holy God. The courtyard shows how the holy is set apart and protected. The lamp shows that God&apos;s presence is constant, unslumbering, always shining. For the Old Testament reader, these were the structures of covenant life. For the Christian reading them now, they all point toward Christ—the perfect offering, the way into God&apos;s presence, the Light that never dims.',
  ],

  opener: {
    matchTitle: /altar|tabernacle|courtyard|bronze/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share Exodus 27',
    quote:
      'The bronze altar of burnt offering was five cubits long and five cubits wide, a perfect square, and three cubits high. Its horns were of one piece with it. The courtyard was enclosed in white linen hangings. And the lamp of the tabernacle was to burn continually, night and day, from evening to morning before the Lord.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Exodus 27 · Study Guide',
  },

  sections: [
    /* ─── Exodus 27:1–8 — The Altar of Burnt Offering ──────────────────── */
    {
      ref: 'Exodus 27:1–8',
      title: 'The Bronze Altar',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 1,
              spans: [
                t('And thou shalt make an '),
                hy('altar', 'ex27-altar'),
                t(' of '),
                hp('shittim wood', 'christ-wood-offering'),
                t(': five cubits long, and five cubits broad; the altar shall be foursquare: and the height thereof shall be three cubits.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex27-altar',
          html:
            'A perfect square. Five by five—the number of grace repeated, stability through proportion. But it&apos;s not gold or stone; it&apos;s wood, the material of the tabernacle itself, standing in the courtyard where every Israelite could approach. The altar is not locked away in the Holy of Holies. It is the first structure anyone entering the court encounters. This is where a person gives their offering to God.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-olah',
          title: 'Olah — &ldquo;burnt offering&rdquo;',
          script: 'עֹלָה',
          translit: '<strong>&apos;olah</strong> · what ascends wholly in smoke',
          description:
            'From the root meaning &quot;to go up.&quot; In a burnt offering, the entire animal ascends to God—nothing is retained by the priest or the offerer. It is the purest form of gift. The person says, &quot;All of this is for You.&quot;',
        },
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 2,
              spans: [
                t('And thou shalt make the '),
                hy('horns of it', 'ex27-horns'),
                t(' upon the four corners thereof: his horns shall be of the same: and thou shalt overlay it with brass.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex27-horns',
          html:
            'The horns of the altar are not decorative. In ancient Near Eastern practice, the horns of an altar were places of refuge. Centuries later, when Adonijah fears Solomon&apos;s throne and flees Jerusalem, he &quot;caught hold on the horns of the altar&quot; (1 Kings 1:50), believing that sanctuary could not be violated. The horns point to the altar as a place of mercy, not merely judgment. Whoever brings an offering—even one made in fear or desperation—finds refuge at the altar.',
        },
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 3,
              spans: [
                t('And thou shalt make his pans to receive his ashes, and his shovels, and his basons, and his fleshhooks, and his firepans: all his vessels thou shalt make of brass.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And thou shalt make for it a grate of network of brass; and upon the net shalt thou make four brasen rings in the four corners thereof.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And thou shalt put it under the compass of the altar beneath, that the net may be even to the midst of the altar.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And thou shalt make staves for the altar, staves of shittim wood, and overlay them with brass.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And the staves shall be put into the rings, and the staves shall be upon the two sides of the altar, to bear it.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Hollow with boards shalt thou make it: as it was shewed thee in the mount, so shall they make it.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex27-hollow',
          html:
            'The altar is hollow—not solid, but empty within. It is made to be carried. Every detail of the tabernacle is portable: these are the furnishings of a tent-dwelling people who have not yet arrived at their rest. The altar moves with them through the desert. God&apos;s presence and the way of sacrifice do not wait for a permanent temple.',
        },
        {
          kind: 'christ',
          id: 'christ-wood-offering',
          title: 'Christ Connection — The Perfect Burnt Offering',
          html:
            'Hebrews 13:11–13 draws the line directly: &quot;For the bodies of those beasts, whose blood is brought into the sanctuary by the high priest for sin, are burned without the camp. Wherefore Jesus also, that he might sanctify the people with his own blood, suffered without the gate.&quot; Jesus is the <em>&apos;olah</em>—the whole offering that ascends entirely to God. Nothing of Him is held back. His death is not a payment extracted by force, but a gift given entirely. And like the altar in the courtyard, His sacrifice is not hidden in the temple; it happens outside the walls, visible, for all people to see.',
        },
        {
          kind: 'carry',
          html:
            'The ancient Israelite who brought an animal to the altar was saying something with their hands: &quot;I give all of this to God. I hold nothing back. This is my whole heart, at least in this moment.&quot; That posture—open-handed, emptied, giving all—is still the posture the altar teaches. Not the performance of righteousness, not the careful management of what you show God, but radical honesty and radical surrender. The altar asks: what would it mean to give the whole of what you are to Him?',
        },
        {
          kind: 'reflection',
          id: 'ex27-altar-refl',
          prompt: 'Where in your life are you holding something back from God, trying to keep a corner of it for yourself? What would it feel like to lay that down at the altar entirely?',
        },
      ],
    },

    /* ─── Exodus 27:9–19 — The Courtyard ─────────────────────────────── */
    {
      ref: 'Exodus 27:9–19',
      title: 'The Courtyard Enclosure',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 9,
              spans: [
                t('And thou shalt make the court of the tabernacle: for the south side southward there shall be hangings for the court of '),
                hy('fine twined linen', 'ex27-linen'),
                t(' of an hundred cubits long for one side:'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And the twenty pillars thereof and their twenty sockets shall be of brass; the hooks of the pillars and their fillets shall be of silver.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And likewise for the north side in length there shall be hangings of an hundred cubits long, and his twenty pillars and their twenty sockets of brass; the hooks of the pillars and their fillets of silver.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex27-linen',
          html:
            'White linen—clean, woven, the material of purity and separation. The courtyard is not a wall of stone; it is hangings, permeable but unmistakable. The boundary is clear, but it is not harsh. Anyone who approaches with a pure heart can enter. The white speaks to holiness without harshness; the hangings can be lifted and returned. This is a sanctuary, not a prison.',
        },
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 12,
              spans: [
                t('And for the west side shall be hangings of fifty cubits: their pillars ten, and their sockets ten.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And the east side eastward shall be fifty cubits.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('The hangings of one side of the gate shall be fifteen cubits: their pillars three, and their sockets three.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And on the other side shall be hangings fifteen cubits: their pillars three, and their sockets three.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex27-gate',
          html:
            'The dimensions are exact: 100 cubits on the north and south, 50 on the east and west. A rectangle, not a square. The gate opens to the east—the direction of the rising sun, the direction of approach. There is a way in. The altar is not locked behind impenetrable walls; the person who wants to approach God can find the gate.',
        },
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 16,
              spans: [
                t('And for the gate of the court shall be an '),
                hg('hanging of twenty cubits', 'ex27-gate-hanging'),
                t(', of blue, and purple, and scarlet, and fine twined linen, wrought with needlework: and their pillars shall be four, and their sockets four.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex27-gate-hanging',
          html:
            'The gate itself is a hanging of blue, purple, scarlet, and white—the colors of royalty and priesthood. It is not white like the rest of the courtyard; it is decorated and distinct. The gate is beautiful. It is an invitation. You can see from outside that something important happens here; you can approach without fear of rejection, but you cannot enter without intention. The gate marks that this space is sacred.',
        },
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 17,
              spans: [
                t('All the pillars round about the court shall be filleted with silver: their hooks shall be of silver, and their sockets of brass.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('The length of the court shall be an hundred cubits, and the breadth fifty every where, and the height of the hangings five cubits, of fine twined linen, and their sockets of brass.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('All the vessels of the tabernacle in all the service thereof, and all the pins thereof, and all the pins of the court, shall be of brass.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex27-brass-silver',
          html:
            'Brass for strength and function; silver for beauty and grace. Every element of the courtyard speaks to a God who is both holy and accessible. The boundary is real—it is maintained, it is respected—but it is beautiful. You approach God not through fear alone, but through longing for the beauty and the holiness you sense on the other side of the veil.',
        },
        {
          kind: 'carry',
          html:
            'The courtyard teaches a paradox: God is set apart, utterly holy, and yet accessible to His people. That same paradox runs through the whole Gospel. Jesus is the radiance of God&apos;s glory, infinite and unreachable—and yet He ate with sinners, touched the sick, let children climb into His lap. The courtyard hangs a gate. The cross removes the barrier altogether. In Christ, you don&apos;t look for the gate from far off anymore; you are invited to come <em>into</em> the very presence of the Father.',
        },
        {
          kind: 'reflection',
          id: 'ex27-courtyard-refl',
          prompt: 'What makes you feel like you&apos;re on the wrong side of the gate when you come to God? What truth about Christ&apos;s work actually lets you walk through?',
        },
        {
          kind: 'artwork',
          matchTitle: /tabernacle|sanctuary|altar.*courtyard/i,
          caption: 'Exodus 27:9–19 · The Courtyard',
        },
      ],
    },

    /* ─── Exodus 27:20–21 — The Perpetual Lamp ──────────────────────── */
    {
      ref: 'Exodus 27:20–21',
      title: 'Pure Oil for the Perpetual Lamp',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 20,
              spans: [
                t('And thou shalt command the children of Israel, that they bring thee '),
                hy('pure oil olive beaten', 'ex27-oil'),
                t(' for the light, to cause the '),
                hp('lamp to burn always', 'christ-light-always'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex27-oil',
          html:
            'Pure oil, beaten from olives—the finest, without adulteration. Not the oil left over from the press, not the oil mixed with other things, but the first, the cleanest, the best. The lamp that burns in the holy place must be fed with the purest substance the people can bring. There is no expense spared in keeping God&apos;s light burning.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-ner-tamid',
          title: 'Ner Tamid — &ldquo;perpetual lamp&rdquo;',
          script: 'נֵר תָּמִיד',
          translit: '<strong>ner tamid</strong> · a lamp that burns continuously, unending',
          description:
            'The same ner tamid that has burned in Jewish synagogues for two thousand years. The light that never goes out. In the temple, it testified that God is present, awake, watching over His people while they sleep. It is the opposite of the false gods who can be exhausted, who sleep, who need to be awakened by their priests.',
        },
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 21,
              spans: [
                t('In the tabernacle of the congregation without the vail which is before the testimony, Aaron and his sons shall dress it from evening to morning before the Lord: it shall be '),
                hg('a statute for ever', 'ex27-statute'),
                t(' unto the children of Israel throughout their generations.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex27-statute',
          html:
            '&quot;A statute for ever.&quot; This is not a temporary arrangement or a trial. The lamp is meant to burn through every generation. Every night, Aaron and his sons tend it—keeping the light alive, feeding the flame, trimming the wick. The lamp itself is a statement: God does not slumber. His presence does not fade. The covenant that burns in the holy place is eternal.',
        },
        {
          kind: 'christ',
          id: 'christ-light-always',
          title: 'Christ Connection — The Light That Never Dims',
          html:
            'John 1:9 announces Him as &quot;that was the true Light, which lighteth every man that cometh into the world.&quot; And in Revelation 1:13, John sees Christ standing &quot;in the midst of the seven candlesticks&quot;—the lamps of the churches. The perpetual lamp in Exodus 27 anticipated a Light that would never be extinguished, a presence that would never sleep, a covenant that would never fade. Jesus is that lamp, burning with the pure oil of the Father&apos;s love, shining into every darkness, tended through every night of the world by His ceaseless intercession (Rom. 8:34).',
        },
        {
          kind: 'carry',
          html:
            'In the darkness of your own night—worry, loss, fear, loneliness—there is a Light that burns. It does not go out when you stop praying. It does not dim when you forget about it. It does not depend on your faithfulness or your performance; it depends on Christ&apos;s intercession and His unchanging love. You are not left to navigate the dark alone. The lamp burns. The Light shines. You can rest.',
        },
        {
          kind: 'reflection',
          id: 'ex27-lamp-refl',
          prompt: 'What darkness in your life right now feels most real? How does it change things to know that God&apos;s light is burning through it, unslumbering and eternal?',
        },
        {
          kind: 'artwork',
          matchTitle: /lamp|light|menorah|oil.*light/i,
          caption: 'Exodus 27:20–21 · The Perpetual Lamp',
        },
      ],
    },
  ],
};
