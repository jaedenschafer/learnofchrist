import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Exodus 25 — Blueprints for the dwelling place.
 *
 * God gives Moses the specifications for the tabernacle, the portable sanctuary
 * where the God of the exodus will dwell among His people. It begins with a call
 * for willing offerings—gold, silver, brass, fine linen, shittim wood. Then come
 * the furnishings: the ark of the covenant (the holiest thing), the mercy seat
 * with its two gold cherubim facing each other, the table of showbread, and the
 * seven-branched lampstand. These are not decorative. Each is a window into who
 * God is and how He relates to His people. The mercy seat is the meeting place,
 * the place where God looks down on the blood and passes over sin. The bread
 * points to sustenance and presence. The light points to truth and revelation.
 * And the ark itself—a chest where the broken law rests under the mercy
 * seat—becomes the image of the cross: the place where judgment and mercy kiss.
 */
export const EXODUS_25: RichChapterContent = {
  bookSlug: 'exodus',
  bookName: 'Exodus',
  chapter: 25,

  estimatedMinutes: { beginner: 11, intermediate: 16, deep: 21 },
  opener: {
    matchTitle: /Mozes staande bij de/i,
    caption: 'Exodus 25',
  },
  intros: [
    'Exodus 25 is God saying, &quot;I will live with you.&quot; He has just freed Israel from Egypt and brought them to the mountain. They stand at Sinai, trembling at the voice of God. The law is given. The covenant is made. And now God says: Build me a house. Not a house in heaven. Not a house somewhere far away. A house here, in the middle of your camp. Wherever you go, I go with you. Wherever you dwell, I will dwell.',
    'The chapter opens with a remarkable line: &quot;Speak unto the children of Israel, that they bring me an offering.&quot; Not a tax. Not a command enforced with a sword. A voluntary gift. God does not demand the materials for His dwelling place. He asks. The people respond with their own hands, their own resources, because they want Him there. The dwelling place is made of their love.',
    'For a Christian reader, Exodus 25 is a map of the cross. The mercy seat—the place where God and sinful people meet—is made of gold and sits above a wooden chest. The blood is sprinkled on it. The New Testament will call Jesus &quot;the propitiation for our sins.&quot; The Greek word is <em>hilasterion</em>—the mercy seat. Jesus is the place where God looks down on your guilt and the blood covers it. The lampstand stands in darkness, burning seven lamps. Jesus will say, &quot;I am the light of the world.&quot; The table holds bread to sustain the priest in his work. Jesus will say, &quot;I am the bread of life.&quot; Every piece of furniture in this chapter is waiting for Him.',
  ],

  sections: [
    /* ─── Exodus 25:1–9 — The Call for Offerings ─────────────────────────── */
    {
      ref: 'Exodus 25:1–9',
      title: 'The Voluntary Gift',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            { number: 1, spans: [ t('And the LORD spake unto Moses, saying,') ] },
            { number: 2, spans: [ t('Speak unto the children of Israel, that they '), hy('bring me an offering', 'terumah-gift'), t(': of every man that giveth it willingly with his heart ye shall take my offering.') ] },
            { number: 3, spans: [ t('And this is the offering which ye shall take of them; gold, and silver, and brass,') ] },
            { number: 4, spans: [ t('And blue, and purple, and scarlet, and fine linen, and goats&apos; hair,') ] },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex25-offerings-listed',
          html:
            'Gold, silver, brass, blue, purple, scarlet — the materials for the tabernacle come from a willing heart. Worship begins with what the people gladly give[res:sefaria-exodus-25].',
        },
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            { number: 5, spans: [ t('And rams&apos; skins dyed red, and badgers&apos; skins, and shittim wood,') ] },
            { number: 6, spans: [ t('Oil for the light, spices for anointing oil, and for sweet incense,') ] },
            { number: 7, spans: [ t('Onyx stones, and stones to be set in the ephod, and in the breastplate.') ] },
            { number: 8, spans: [ t('And let them make me a '), hy('sanctuary', 'mikdash-sanctuary'), t('; that I may '), hp('dwell among them', 'christ-dwelling'), t('.') ] },
            { number: 9, spans: [ t('According to all that I shew thee, after the pattern of the tabernacle, and the pattern of all the instruments thereof, even so shall ye make it.') ] },
          ],
        },
        {
          kind: 'hebrew',
          id: 'terumah-gift',
          title: 'Terumah — &ldquo;offering&rdquo;',
          script: 'תְּרוּמָה',
          translit: '<strong>terumah</strong> · a gift lifted up, a contribution; from the root meaning &ldquo;to raise, to lift&rdquo;',
          description:
            'The word does not mean payment or tax. It means a gift lifted up—something given out of love and desire. God does not conscript the materials for His house. He invites. The people respond with their own hands.',
        },
        {
          kind: 'hebrew',
          id: 'mikdash-sanctuary',
          title: 'Mikdash — &ldquo;sanctuary&rdquo;',
          script: 'מִקְדָּשׁ',
          translit: '<strong>mikdash</strong> · a holy place; from <strong>kadosh</strong> (holy), meaning set apart, consecrated',
          description:
            'A sanctuary is not just a building. It is a threshold—a place where the holy and the ordinary meet. It is a place where heaven comes down to earth, where the invisible God takes residence among visible people.',
        },
        {
          kind: 'commentary',
          id: 'willing-heart-note',
          html:
            'The phrase &quot;willingly with his heart&quot; appears three times in these verses. God is not building His house through obligation or law. He is building it through the generosity of His people. After the devastation of slavery, after the terror of the plagues, after the sea splitting open—now the people bring gifts. Freely. With joy. The tabernacle is made of the people&apos;s love made tangible[res:tabernacle].',
        },
        {
          kind: 'christ',
          id: 'christ-dwelling',
          title: 'Christ Connection — God Dwells Among Us',
          html:
            'John opens his Gospel with a statement that echoes this verse: &quot;And the Word was made flesh, and dwelt among us, (and we beheld his glory, the glory as of the only begotten of the Father,) full of grace and truth&quot; (John 1:14). The word for &quot;dwelt&quot; in the Greek is <em>skenoo</em>—to pitch a tent, to tabernacle. Jesus is God tabernacling among us. He is the sanctuary made flesh. Not distant. Not hidden in heaven. Here. Touchable. Visible. Calling us into the same kind of willingness: bring what you have, give what you can, and let Me dwell there.',
        },
        {
          kind: 'carry',
          html:
            'You know what it is to want someone in your home. The care you take, the meals you prepare, the welcome you extend—all of it comes from the desire to have that person near you. The tabernacle is what that looks like when God is the guest. The people bring their best—gold, fine linen, precious stones. They bring what they have, not because the law demands it, but because they want Him there. And He comes. He dwells.',
        },
        {
          kind: 'reflection',
          id: 'reflect-dwelling',
          prompt:
            'What would it look like to invite God to dwell in your life—not out of obligation, but out of a willing heart?',
        },
      ],
    },

    /* ─── Exodus 25:10–22 — The Ark and the Mercy Seat ──────────────────── */
    {
      ref: 'Exodus 25:10–22',
      title: 'The Ark of the Covenant',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            { number: 10, spans: [ t('And they shall make an ark of '), hy('shittim wood', 'acacia-wood'), t(': two cubits and a half shall be the length thereof, and a cubit and a half the breadth thereof, and a cubit and a half the height thereof.') ] },
            { number: 11, spans: [ t('And thou shalt overlay it with pure gold, within and without shalt thou overlay it, and shalt make upon it a crown of gold round about.') ] },
            { number: 12, spans: [ t('And thou shalt cast four rings of gold for it, and put them in the four corners thereof; and two rings shall be in the one side of it, and two rings in the other side of it.') ] },
          ],
        },
        {
          kind: 'commentary',
          id: 'exodus_25_v10-16',
          html:
            '<p>Weaving God&apos;s ongoing care through each command and promise.</p>',
        },
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            { number: 13, spans: [ t('And thou shalt make staves of shittim wood, and overlay them with gold.') ] },
            { number: 14, spans: [ t('And thou shalt put the staves into the rings by the sides of the ark, that the ark may be borne with them.') ] },
            { number: 15, spans: [ t('The staves shall be in the rings of the ark: they shall not be taken from it.') ] },
            { number: 16, spans: [ t('And thou shalt put into the ark the '), hg('testimony', 'testimony-law'), t(', which I shall give thee.') ] },
          ],
        },
        { kind: 'commentary', id: 'ex25-mid', html: 'The ark is complete—a wooden chest overlaid with gold, carried by staves, holding the covenant within. Now comes the crown upon it, the mercy covering, the place where God will meet His people. The structure holds the law; the mercy seat holds the relationship.' },
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            { number: 17, spans: [ t('And thou shalt make a '), hy('mercy seat', 'kaporet-mercy'), t(' of pure gold: two cubits and a half shall be the length thereof, and a cubit and a half the breadth thereof.') ] },
            { number: 18, spans: [ t('And thou shalt make two '), hy('cherubims', 'cherubim-angels'), t(' of gold, of beaten work shalt thou make them, in the two ends of the mercy seat.') ] },
            { number: 19, spans: [ t('And make one cherub on the one end, and the other cherub on the other end: even of the mercy seat shall ye make the cherubims on the two ends thereof.') ] },
            { number: 20, spans: [ t('And the cherubims shall stretch forth their wings on high, covering the mercy seat with their wings, and their faces shall look one to another; toward the mercy seat shall the faces of the cherubims be.') ] },
            { number: 21, spans: [ t('And thou shalt put the mercy seat above upon the ark; and in the ark thou shalt put the '), hp('testimony that I shall give thee', 'christ-mercy'), t('.') ] },
            { number: 22, spans: [ t('And there I will meet with thee, and I will commune with thee from above the '), hg('mercy seat', 'mercy-meeting'), t(', from between the two cherubims which are upon the ark of the testimony, of all things which I will give thee in commandment unto the children of Israel.') ] },
          ],
        },
        {
          kind: 'hebrew',
          id: 'acacia-wood',
          title: 'Shittim Wood — &ldquo;acacia&rdquo;',
          script: 'שִׁטִּים',
          translit: '<strong>shittim</strong> · acacia wood, hard and durable; grows in the desert',
          description:
            'Acacia is a wood that grows in arid places, resistant to decay. It is overlaid with pure gold—the incorruptible material covering the incorruptible wood. In Jewish tradition, the wood represents humanity, the gold represents God. The ark is both wood and gold together.',
        },
        {
          kind: 'commentary',
          id: 'testimony-law',
          html:
            'The &quot;testimony&quot; refers to the two stone tablets—the Ten Commandments. They go inside the ark. Above them sits the mercy seat. The image is profound: the broken law rests beneath the place of mercy. The judgment is underneath. The mercy covers it. This is the pattern Christ fulfills: the law condemns, but Christ covers the condemnation with His own blood[res:israel-museum-tab].',
        },
        {
          kind: 'hebrew',
          id: 'kaporet-mercy',
          title: 'Kaporet — &ldquo;mercy seat&rdquo;',
          script: 'כַּפֹּרֶת',
          translit: '<strong>kaporet</strong> · mercy seat; from the root <strong>kaphar</strong>, meaning &ldquo;to cover, to atone, to make atonement&rdquo;',
          description:
            'The mercy seat is not a throne where God sits to judge. It is a cover placed over the law. It is the place where blood is sprinkled on the Day of Atonement. It is grace covering judgment, mercy covering the letter of the law. When God looks down, He looks at the blood first.',
        },
        {
          kind: 'hebrew',
          id: 'cherubim-angels',
          title: 'Kerubim — &ldquo;cherubims&rdquo;',
          script: 'כְּרוּבִים',
          translit: '<strong>kerubim</strong> · mighty angelic beings; guardians of holiness',
          description:
            'The cherubim face each other, looking down at the mercy seat. They are not looking away or in terror. They are attending to the place of mercy with reverence. In ancient temple symbolism, they guard the threshold between the human and divine.',
        },
        {
          kind: 'commentary',
          id: 'mercy-meeting',
          html:
            'God says, &quot;There I will meet with thee.&quot; Not everywhere in the sanctuary. Not in the courtyard. At the mercy seat. Between the two cherubim. The meeting place is the place of atonement. You cannot meet God without the mercy seat. You cannot draw near without blood covering the law. This is where communion happens—at the boundary between judgment and grace.',
        },
        {
          kind: 'christ',
          id: 'christ-mercy',
          title: 'Christ Connection — The Mercy Seat Made Flesh',
          html:
            'Paul writes: &quot;Whom God hath set forth to be a propitiation through faith in his blood&quot; (Rom. 3:25). The word is <em>hilasterion</em>—mercy seat. Jesus is the mercy seat. He is the place where God meets sinners. He is the cover over the broken law. He is the atonement made visible. And like the ark of the covenant, He holds two truths together: the law and mercy, judgment and grace, the wood of His humanity and the gold of His divinity. You meet God in Christ, just as Israel met God at the mercy seat.',
        },
        {
          kind: 'carry',
          html:
            'You do not come to God on the basis of how well you have kept His law. You come through the mercy seat. You come through Christ. The cherubim are not barring the way. They are attending to the place where mercy covers judgment. When you approach God, you are not approaching a judge holding a gavel. You are approaching the mercy seat. The blood is already there. The law is already covered. You are welcome.',
        },
        {
          kind: 'reflection',
          id: 'reflect-mercy-seat',
          prompt:
            'What would change in your prayer life if you truly believed that you approach God at the mercy seat—the place where mercy covers the law—rather than at a throne of judgment?',
        },
        {
          kind: 'artwork',
          matchTitle: /ark.*covenant|mercy.*seat|cherub/i,
          caption: 'Exodus 25:10–22 · The Ark of the Covenant and Mercy Seat',
        },
      ],
    },

    /* ─── Exodus 25:23–30 — The Table of Showbread ───────────────────────── */
    {
      ref: 'Exodus 25:23–30',
      title: 'The Table of Showbread',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            { number: 23, spans: [ t('Thou shalt also make a table of shittim wood: two cubits shall be the length thereof, and a cubit the breadth thereof, and a cubit and a half the height thereof.') ] },
            { number: 24, spans: [ t('And thou shalt overlay it with pure gold, and make thereto a crown of gold round about.') ] },
            { number: 25, spans: [ t('And thou shalt make unto it a border of an hand breadth round about, and thou shalt make a golden crown to the border thereof round about.') ] },
            { number: 26, spans: [ t('And thou shalt make for it four rings of gold, and put the rings in the four corners that are on the four feet thereof.') ] },
          ],
        },
        {
          kind: 'commentary',
          id: 'exodus_25_v23-30',
          html:
            '<p>Weaving God&apos;s ongoing care through each command and promise.</p>',
        },
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            { number: 27, spans: [ t('Over against the border shall the rings be, for places of the staves to bear the table.') ] },
            { number: 28, spans: [ t('And thou shalt make the staves of shittim wood, and overlay them with gold, that the table may be borne with them.') ] },
            { number: 29, spans: [ t('And thou shalt make the '), hy('dishes thereof', 'dishes-vessels'), t(', and spoons thereof, and covers thereof, and bowls thereof, to cover withal: of pure gold shalt thou make them.') ] },
            { number: 30, spans: [ t('And thou shalt set upon the table '), hg('shewbread', 'lechem-panim'), t(' before me alway.') ] },
          ],
        },
        {
          kind: 'commentary',
          id: 'table-placement',
          html:
            'The table is on the north side of the sanctuary. It is not as central as the ark of the covenant, but it is not hidden either. It stands in the holy place, a table set with bread. The priests who serve in the sanctuary will eat that bread as a sign of their covenant with God. They sustain themselves on the presence of God made tangible.',
        },
        {
          kind: 'hebrew',
          id: 'lechem-panim',
          title: 'Lechem Panim — &ldquo;showbread&rdquo;',
          script: 'לֶחֶם הַפָּנִים',
          translit: '<strong>lechem panim</strong> · bread of the face; literally &ldquo;bread of the presence&rdquo;',
          description:
            'It is bread set continually before God—a sign of constant provision and communion. Twelve loaves, one for each tribe, sitting on the table. The priest eats bread in the presence of God as a sign that God sustains His people.',
        },
        {
          kind: 'commentary',
          id: 'dishes-vessels',
          html:
            'Every vessel is made of gold. The dishes for the bread, the spoons for the drink offering, the cups and bowls. Nothing is common. Everything is set apart. The meal is made of holy things. The sustenance is sacred because it is shared in the presence of God.',
        },
        {
          kind: 'christ',
          id: 'christ-bread-life',
          title: 'Christ Connection — The Bread of Life',
          html:
            'Jesus stands in a synagogue and tells a crowd: &quot;I am the bread of life: he that cometh to me shall never hunger; and he that believeth on me shall never thirst&quot; (John 6:35). He is reading the table of showbread. He is saying: The bread in the sanctuary was pointing to Me. I am the sustenance. I am the presence. I am the bread that does not spoil, the meal that does not run out. And He goes further: &quot;This is that bread which came down from heaven… if any man eat of this bread, he shall live for ever&quot; (John 6:58). The table in the tabernacle pointed to a meal that would sustain the world.',
        },
        {
          kind: 'carry',
          html:
            'You eat bread today without thinking much about it. Your pantry is full. Your refrigerator has plenty. But when Jesus names Himself the bread of life, He is speaking to a hunger that bread cannot fill. A hunger for presence, for communion, for knowing that you are sustained by more than calories. Every time you eat, you can remember: I am sustained by the One who is my bread. The literal food is a sign of a deeper sustenance—Christ in you, the hope of glory.',
        },
        {
          kind: 'reflection',
          id: 'reflect-bread',
          prompt:
            'What would change if you truly believed that Christ sustains you more deeply than food sustains your body?',
        },
      ],
    },

    /* ─── Exodus 25:31–40 — The Lampstand ──────────────────────────────── */
    {
      ref: 'Exodus 25:31–40',
      title: 'The Seven-Branched Lampstand',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            { number: 31, spans: [ t('And thou shalt make a '), hy('candlestick', 'menorah-lamp'), t(' of pure gold: of beaten work shall the candlestick be made: his shaft, and his branches, his bowls, his knops, and his flowers, shall be of the same.') ] },
            { number: 32, spans: [ t('And six branches shall come out of the sides of it; three branches of the candlestick out of the one side, and three branches out of the other side:') ] },
            { number: 33, spans: [ t('Three bowls made like unto almonds, with a knop and a flower in one branch; and three bowls made like almonds in the other branch, with a knop and a flower: so in the six branches that come out of the side of the candlestick.') ] },
            { number: 34, spans: [ t('And in the candlestick shall be four bowls made like unto almonds, with their knops and their flowers.') ] },
            { number: 35, spans: [ t('And there shall be a knop under two branches of the same, and a knop under two branches of the same, and a knop under two branches of the same, according to the six branches that proceed out of the candlestick.') ] },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex25-lampstand-detailed',
          html:
            'The lampstand is hammered from one piece of pure gold — branches, knops, flowers, all of one substance. Light in the holy place will not be assembled; it will be one work.',
        },
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            { number: 36, spans: [ t('Their knops and their branches shall be of the same: all it shall be one beaten work of pure gold.') ] },
            { number: 37, spans: [ t('And thou shalt make the seven lamps thereof: and they shall light the lamps thereof, that they may '), hg('give light over against it', 'lamps-light'), t('.') ] },
            { number: 38, spans: [ t('And the tongs thereof, and the snuffers thereof, shall be of pure gold.') ] },
            { number: 39, spans: [ t('Of a talent of pure gold shall he make it, with all these vessels.') ] },
            { number: 40, spans: [ t('And look that thou make them after their '), hp('pattern', 'pattern-given'), t(', which was shewed thee in the mount.') ] },
          ],
        },
        {
          kind: 'hebrew',
          id: 'menorah-lamp',
          title: 'Menorah — &ldquo;lampstand&rdquo;',
          script: 'מְנוֹרָה',
          translit: '<strong>menorah</strong> · a lamp-stand; from the root <strong>nur</strong>, meaning &ldquo;to light, to shine&rdquo;',
          description:
            'The lampstand has seven branches—a central stem with three branches on each side. Seven is the number of completion in Hebrew thinking. The menorah burns constantly, casting light into the holy place where the priest works.',
        },
        {
          kind: 'commentary',
          id: 'lamps-light',
          html:
            'The lamps are not for decoration. They are for giving light. In the holy place of the tabernacle, there are no windows. All the light comes from the seven lamps of the menorah. The priest cannot see his work unless the lamps are burning. The light is not incidental to the sanctuary—it is necessary. It is how the priest reads the law, prepares the offerings, performs the work of God.',
        },
        {
          kind: 'commentary',
          id: 'beaten-work',
          html:
            'The lampstand is made of beaten gold—one talent of pure gold worked by a craftsman&apos;s hammer into an intricate shape. Not poured into a mold. Not cast. Beaten. Shaped. Each curve and branch formed under the blow of the hammer. The detail is remarkable: almond blossoms, buds, flowers—all made in gold, all beaten by hand. The most expensive thing in the sanctuary is also the most beautiful thing in it.',
        },
        {
          kind: 'commentary',
          id: 'pattern-given',
          html:
            'The phrase &quot;after the pattern&quot; recurs through Exodus. A pattern was shown to Moses on the mount—a vision, a blueprint, a picture of reality as God intended it to be. The sanctuary is not to be invented or decorated according to the builder&apos;s taste. It is to be built precisely as God showed it. The pattern is from God. The execution is the people&apos;s. But the vision belongs to God alone.',
        },
        {
          kind: 'christ',
          id: 'christ-light-world',
          title: 'Christ Connection — The Light of the World',
          html:
            'Jesus stands in Jerusalem and speaks in a voice so clear that the city must listen: &quot;I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life&quot; (John 8:12). The menorah burned with borrowed light—oil had to be supplied, the lamps had to be tended. But Jesus is the light himself. He does not reflect. He generates. He is the lamp that never goes dark, the burning that never consumes itself. And later, in the Revelation, John sees the risen Christ walking among seven golden candlesticks—the churches. Christ walks in their midst as the light. The lamp in the tabernacle was waiting for Him.',
        },
        {
          kind: 'carry',
          html:
            'You live in a world that is not always clear. There are decisions to make, paths to choose, truths to discern. And the promise Christ makes is that you do not have to walk in darkness. The light is given. It is given to you, for you, to show you the way. Not a flashlight you carry yourself, but a light that surrounds you because you follow the One who is light. Your work in this world is not shrouded in confusion if you are walking in His light.',
        },
        {
          kind: 'reflection',
          id: 'reflect-light',
          prompt:
            'What part of your life right now feels dark? What would it mean to walk in the light of Christ rather than your own understanding?',
        },
        {
          kind: 'artwork',
          matchTitle: /menorah|lampstand|seven.*lamp/i,
          caption: 'Exodus 25:31–40 · The Seven-Branched Lampstand',
        },
      ],
    },

    /* ─── Exodus 25:1–9 (Recap) — All the Furnishings Together ────────────── */
    {
      ref: 'Exodus 25 · The Pattern from the Mount',
      title: 'The Sanctuary Made Visible',
      blocks: [
        {
          kind: 'divider',
        },
        {
          kind: 'commentary',
          id: 'tabernacle-unity',
          html:
            'Three pieces of furniture stand in the holy place: the ark of the covenant (the holiest), the table of showbread (on the north), and the lampstand (on the south). Together they tell a story. The ark is the place where God meets His people—mercy covering judgment. The table is the place where God feeds His people—sustenance for covenant-keeping. The lamp is the place where God illuminates His people—truth lighting the way. A sanctuary is complete when judgment, mercy, sustenance, and light are all present. A sanctuary is complete when God dwells in the middle of it all.',
        },
        {
          kind: 'commentary',
          id: 'pattern-detail',
          html:
            'Moses is told to build everything &quot;according to the pattern&quot; shown on the mount. The word is used carefully in Scripture. When God says there is a pattern, He means something invisible is being made visible. The tabernacle is the visible form of invisible realities. The mercy seat is visible grace. The table is visible sustenance. The lampstand is visible truth. The boards and curtains and curtain rods are the scaffolding that holds the invisible world in place so Israel can see it, touch it, remember it, and know God is real.',
        },
        {
          kind: 'christ',
          id: 'christ-pattern',
          title: 'Christ Connection — The Pattern Made Flesh',
          html:
            'Hebrews tells us: &quot;Now of the things which we have spoken this is the sum: We have such an high priest, who is set on the right hand of the throne of the Majesty in the heavens; A minister of the sanctuary, and of the true tabernacle, which the Lord pitched, and not man&quot; (Heb. 8:1–2). Jesus is not merely another priest offering in the tabernacle. He is the reality to which the tabernacle pointed. The pattern that was shown on the mount was a pattern of Him. The mercy seat is mercy in Him. The bread is sustenance in Him. The light is truth in Him. The entire sanctuary—all its gold, all its careful measurements, all its intricate work—was a shadow. The substance is Christ.',
        },
        {
          kind: 'carry',
          html:
            'You do not need a tent in the wilderness to encounter God. You do not need gold furniture or burning lamps. But you do need what they pointed to: mercy, sustenance, light, and the knowledge that God dwells with His people. And all of that is found in Christ. Your sanctuary is portable. It is internal. It is carried with you wherever you go, because the One you meet in the mercy seat dwells in you by His Spirit.',
        },
        {
          kind: 'reflection',
          id: 'reflect-sanctuary',
          prompt:
            'What would it mean to carry a sanctuary inside you—a place where mercy, sustenance, and light are always available?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Exodus 25',
    quote:
      'A sanctuary made of gold and wood, set apart by willing offerings. An ark where mercy covers judgment. A table where bread sustains the covenant-keepers. A lampstand that gives light. God does not ask for marble temples or vast cathedrals. He asks for a people who will offer what they have, and in the middle of their wilderness, He will dwell.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Exodus 25 · Study Guide',
  },


  resources: [
    {
      id: 'tabernacle',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Tabernacle Structure',
      url: 'https://www.bibleodyssey.org/dictionary/tabernacle/',
      description: 'Architectural and theological overview.',
    },
    {
      id: 'israel-museum-tab',
      kind: 'archaeology',
      source: 'Israel Museum',
      label: 'Tabernacle & Temple Models',
      url: 'https://www.imj.org.il/',
      description: 'Museum models and ANE temple architecture.',
    },
    {
      id: 'sefaria-exodus-25',
      kind: 'study',
      source: 'Sefaria',
      label: 'Exodus 25 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Exodus.25',
      description: 'The Hebrew text of Exodus 25 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  hasHebrew: true,
};
