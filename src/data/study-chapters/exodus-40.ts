import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Exodus 40 — The Glory Fills the Tabernacle.
 *
 * This is the final chapter of Exodus, and it is a fulfillment moment. For
 * 39 chapters, God has given the law, the Ten Commandments, the regulations
 * for the tabernacle. The people have built it—every curtain, every board,
 * every piece of furniture. Now, on the first day of the first month of the
 * second year (exactly one year after the Exodus), Moses assembles it all.
 * He places the ark, the table, the lampstand, the altar, the basin. He
 * anoints everything with holy oil. He clothes Aaron and his sons as priests.
 * And then—the cloud comes. The glory of the LORD fills the tabernacle so
 * completely that Moses cannot enter. What was a promise is now a presence.
 * What was a command is now a reality: God Himself will dwell in the camp of
 * Israel.
 *
 * This is the answer to the entire story. Not just liberation from Egypt.
 * But the dwelling of God with His people. It is the gospel arc in miniature:
 * bondage, deliverance, and then—the presence. And that presence, for the
 * reader who knows John 1:14, is the presence that one day takes flesh and
 * tabernacles among us, and we behold His glory.
 */
export const EXODUS_40: RichChapterContent = {
  bookSlug: 'exodus',
  bookName: 'Exodus',
  chapter: 40,

  estimatedMinutes: { beginner: 8, intermediate: 11, deep: 14 },
  intros: [
    'Exodus 40 brings the book to its greatest moment. After a year in the wilderness, the tabernacle is complete. Every piece is in place—the wood, the gold, the oil, the priestly garments. But until now it has been a structure, not a house. Now Moses will assemble it, anoint it, and dedicate it to God. What happens next changes everything.',
    'The chapter opens with careful, methodical work: place this here, put that there, anoint this with oil. It reads like an ancient instruction manual. But it is not meant to sound ordinary. Each act is an echo of creation itself—God ordering chaos, placing things in their proper space, calling them good. And the author wants us to feel the weight of it: this is not a human structure being finished. This is the place where God will dwell.',
    'By the chapter&apos;s end, a cloud descends. The glory of the LORD—the *kavod*, the manifest, visible weight of God&apos;s presence—fills the tabernacle so completely that Moses cannot enter. The priest who has spoken face to face with God cannot set foot in the holy place because the presence is too much. And so the book of Exodus closes not with a command, but with a sign: a cloud by day and fire by night, leading Israel forward into the wilderness. God is with them. He has come home.',
  ],

  opener: {
    matchTitle: /glory|cloud|tabernacle|tent.*congregation/i,
    caption: 'The Whole Chapter at a Glance',
  },

  sections: [
    /* ─── Exodus 40:1–15 — The Command to Assemble ────────────────────── */
    {
      ref: 'Exodus 40:1–15',
      title: 'The Command to Assemble',
      blocks: [
        {
          kind: 'scripture',
          chapter: 40,
          lines: [
            { number: 1, spans: [ t('And the LORD spake unto Moses, saying,') ] },
            { number: 2, spans: [ t('On the first day of the first month shalt thou set up the tabernacle of the tent of the congregation.') ] },
            { number: 3, spans: [ t('And thou shalt put therein the '), hp('ark of the testimony', 'ark-testimony'), t(', and cover the ark with the vail.') ] },
          ],
        },
        {
          kind: 'commentary',
          id: 'exodus_40_v1-7',
          html:
            '<p>Weaving God&apos;s ongoing care through each command and promise.</p>',
        },
        {
          kind: 'scripture',
          chapter: 40,
          lines: [
            { number: 4, spans: [ t('And thou shalt bring in the table, and set in order the things that are to be set in order upon it; and thou shalt bring in the candlestick, and light the lamps thereof.') ] },
            { number: 5, spans: [ t('And thou shalt set the altar of gold for the incense before the ark of the testimony, and put the hanging of the door to the tabernacle.') ] },
            { number: 6, spans: [ t('And thou shalt set the altar of the burnt offering before the door of the tabernacle of the tent of the congregation.') ] },
            { number: 7, spans: [ t('And thou shalt set the laver between the tent of the congregation and the altar, and shalt put water therein.') ] },
          ],
        },
        { kind: 'commentary', id: 'ex40-mid', html: 'The structure stands: ark in the holy of holies, furniture placed, altars set. The laver fills with water—the place for cleansing before approach. Now comes the anointing, the setting-apart, the consecration. The structure becomes the sanctuary.' },
        {
          kind: 'scripture',
          chapter: 40,
          lines: [
            { number: 8, spans: [ t('And thou shalt set up the court round about, and hang up the hanging at the court gate.') ] },
            { number: 9, spans: [ t('And thou shalt take the '), hy('anointing oil', 'oil-mashach'), t(', and anoint the tabernacle, and all that is therein, and shalt hallow it, and all the vessels thereof: and it shall be holy.') ] },
            { number: 10, spans: [ t('And thou shalt anoint the altar of the burnt offering, and all his vessels, and sanctify the altar: and it shall be an altar most holy.') ] },
            { number: 11, spans: [ t('And thou shalt anoint the laver and his foot, and sanctify it.') ] },
          ],
        },
        {
          kind: 'commentary',
          id: 'exodus_40_v8-15',
          html:
            '<p>Weaving God&apos;s ongoing care through each command and promise.</p>',
        },
        {
          kind: 'scripture',
          chapter: 40,
          lines: [
            { number: 12, spans: [ t('And thou shalt bring Aaron and his sons unto the door of the tabernacle of the congregation, and wash them with water.') ] },
            { number: 13, spans: [ t('And thou shalt put upon Aaron the holy garments, and anoint him, and sanctify him; that he may minister unto me in the priest&apos;s office.') ] },
            { number: 14, spans: [ t('And thou shalt bring his sons, and clothe them with coats:') ] },
            { number: 15, spans: [ t('And thou shalt anoint them, as thou didst anoint their father, that they may minister unto me in the priest&apos;s office: for their anointing shall surely be an everlasting priesthood throughout their generations.') ] },
          ],
        },
        {
          kind: 'commentary',
          id: 'ark-testimony',
          html: 'The ark is the seat of God&apos;s presence. It holds the testimony—the two tablets of the covenant—but it itself is the mercy seat, the place where God will speak to Israel. Everything else in the tabernacle is placed *around* this one object. The logic of the whole structure flows from the presence at the center[res:complete-glory].',
        },
        {
          kind: 'hebrew',
          id: 'oil-mashach',
          title: 'Mashach — &ldquo;to anoint&rdquo;',
          script: 'מָשַׁח',
          translit: '<strong>mashach</strong> · to anoint, to smear, to consecrate',
          description: 'The same root gives us *mashiach*, the Messiah—the anointed one. Anointing is not decoration. It is consecration. It sets apart. The objects and the people are anointed so that they become separated from the ordinary. Aaron becomes anointed—and so becomes priest. His sons become anointed—and so become priests in perpetuity.',
        },
        {
          kind: 'commentary',
          id: 'order-of-assembly',
          html: 'God does not say &quot;Assemble the tabernacle however you like.&quot; He specifies the order. First the ark, covered. Then the furniture placed around it. Then anointing. Then the priests. There is an order to holiness. A structure. A logic. It is not chaotic or improvised. Every detail moves toward the same end: creating a space where God&apos;s presence can be known[res:shekinah].',
        },
        {
          kind: 'carry',
          html: 'If you have ever wondered why God cares about *how* we approach Him—why it matters how we pray, whether we come with confession or joy or silence—this chapter is the answer. God establishes order not to control us, but to make a space where His presence is safe to enter. The anointing, the cleansing, the garments, the placement of each piece—it is all so that the ordinary person can come close to the holy without being consumed by it. God ordains the way so that you can find your way.',
        },
        {
          kind: 'reflection',
          id: 'reflect-order',
          prompt: 'What does it mean that there is an order to approaching God? Where in your life do you need to slow down and follow the way He has set?',
        },
      ],
    },

    /* ─── Exodus 40:16–33 — The Work Is Done ───────────────────────────── */
    {
      ref: 'Exodus 40:16–33',
      title: 'The Work Is Done',
      blocks: [
        {
          kind: 'scripture',
          chapter: 40,
          lines: [
            { number: 16, spans: [ t('Thus did Moses: according to all that the LORD commanded him, so did he.') ] },
            { number: 17, spans: [ t('And it came to pass in the first month in the second year, on the first day of the month, that the tabernacle was reared up.') ] },
            { number: 18, spans: [ t('And Moses reared up the tabernacle, and fastened his sockets, and set up the boards thereof, and put in the bars thereof, and reared up his pillars.') ] },
          ],
        },
        {
          kind: 'commentary',
          id: 'exodus_40_v16-22',
          html:
            '<p>Weaving God&apos;s ongoing care through each command and promise.</p>',
        },
        {
          kind: 'scripture',
          chapter: 40,
          lines: [
            { number: 19, spans: [ t('And he spread abroad the tent over the tabernacle, and put the covering of the tent above upon it; as the LORD commanded Moses.') ] },
            { number: 20, spans: [ t('And he took and put the testimony into the ark, and set the staves on the ark, and put the mercy seat above upon the ark:') ] },
            { number: 21, spans: [ t('And he brought the ark into the tabernacle, and set up the vail of the covering, and covered the ark of the testimony; as the LORD commanded Moses.') ] },
            { number: 22, spans: [ t('And he put the table in the tent of the congregation, upon the side of the tabernacle northward, without the vail.') ] },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex40-furniture-shift',
          html: 'The sanctuary frame is set: ark hidden behind the veil, table on the north. Now the light and incense follow—the lamps to burn continually, the golden altar where prayer rises as smoke. The furniture placement mirrors God&apos;s design exactly.',
        },
        {
          kind: 'scripture',
          chapter: 40,
          lines: [
            { number: 23, spans: [ t('And he set the bread in order upon it before the LORD; as the LORD had commanded Moses.') ] },
            { number: 24, spans: [ t('And he put the candlestick in the tent of the congregation, over against the table, on the side of the tabernacle southward.') ] },
            { number: 25, spans: [ t('And he lighted the lamps before the LORD; as the LORD commanded Moses.') ] },
            { number: 26, spans: [ t('And he put the golden altar in the tent of the congregation before the vail:') ] },
            { number: 27, spans: [ t('And he burnt sweet incense thereon; as the LORD commanded Moses.') ] },
            { number: 28, spans: [ t('And he set up the hanging at the door of the tabernacle.') ] },
          ],
        },
        {
          kind: 'commentary',
          id: 'assembly-furniture',
          html: 'The furniture goes in: table and lampstand flanking the altar of incense. Each piece in its place, each awaiting its service. The inner sanctuary is now complete.',
        },
        {
          kind: 'scripture',
          chapter: 40,
          lines: [
            { number: 29, spans: [ t('And he put the altar of burnt offering by the door of the tabernacle of the tent of the congregation, and offered upon it the burnt offering and the meat offering; as the LORD commanded Moses.') ] },
            { number: 30, spans: [ t('And he set the laver between the tent of the congregation and the altar, and put water there, to wash withal.') ] },
            { number: 31, spans: [ t('And Moses and Aaron and his sons washed their hands and their feet thereat:') ] },
            { number: 32, spans: [ t('When they went into the tent of the congregation, and when they came near unto the altar, they washed; as the LORD commanded Moses.') ] },
            { number: 33, spans: [ t('And he reared up the court round about the tabernacle and the altar, and set up the hanging of the court gate. So Moses finished the work.') ] },
          ],
        },
        {
          kind: 'commentary',
          id: 'moses-obedience',
          html: 'The refrain is relentless: &quot;as the LORD commanded Moses.&quot; It appears again and again. This is obedience—not reluctant, not partial, but complete. Moses does not add, does not subtract, does not improvise. What God commanded, Moses does. The work is not Moses&apos; invention. It is God&apos;s design, executed with precision. And when the chapter says &quot;Moses finished the work,&quot; it means the work is complete in every detail.',
        },
        {
          kind: 'commentary',
          id: 'two-year-mark',
          html: 'The date is the first day of the first month of the second year. Exactly one year ago, on the same date, Israel left Egypt (Exodus 12:41: &quot;at the end of the four hundred and thirty years... all the hosts of the LORD went out from the land of Egypt&quot;). One year of wandering, building, learning. Now: fulfillment. The tabernacle stands. God can dwell with them. The Exodus was not just about escape. It was about *invitation*—an invitation into the presence of the God who saves.',
        },
        {
          kind: 'carry',
          html: 'Obedience is not glamorous in the moment. It is a list of details: place this, put that, wash here, light there. But when you look back, obedience produces a space where God can dwell. The very specificity that felt burdensome becomes the architecture of presence. You are building something. Keep building according to His word.',
        },
        {
          kind: 'reflection',
          id: 'reflect-obedience',
          prompt: 'What command of God are you tempted to shorten or adjust? What would it look like to finish the work as the LORD commanded?',
        },
      ],
    },

    /* ─── Exodus 40:34–37 — The Glory Descends ───────────────────────────── */
    {
      ref: 'Exodus 40:34–37',
      title: 'The Glory Descends',
      blocks: [
        {
          kind: 'scripture',
          chapter: 40,
          lines: [
            { number: 34, spans: [ t('Then '), t('a cloud covered the tent of the congregation'), t(', and '), t('the glory of the LORD filled the tabernacle'), t('.') ] },
            { number: 35, spans: [ t('And Moses '), hy('was not able to enter into the tent of the congregation', 'unable-enter'), t(', because the cloud abode thereon, and the glory of the LORD filled the tabernacle.') ] },
            { number: 36, spans: [ t('And when the cloud was taken up from over the tabernacle, the children of Israel went onward in all their journeys:') ] },
            { number: 37, spans: [ t('But if the cloud were not taken up, then they journeyed not till the day that it was taken up.') ] },
          ],
        },
        {
          kind: 'hebrew',
          id: 'kavod-glory',
          title: 'Kavod — &ldquo;glory&rdquo;',
          script: 'כָּבוֹד',
          translit: '<strong>kavod</strong> · glory, weight, honor (root meaning: heavy, weighty)',
          description: 'The word for God&apos;s glory literally means &quot;weight.&quot; The glory of God is not thin air or abstraction. It is *heavy*. It has substance. It presses. When the text says the glory fills the tabernacle, it means something massive, something material, something that physically excludes entry. The Hebrew *shekinah*—the *dwelling*—is the rabbinic word for this cloud-glory settling on the tent. God&apos;s presence is no longer a voice. It is a *weight*, a visible, felt thing.',
        },
        {
          kind: 'commentary',
          id: 'unable-enter',
          html: 'Moses, the man who has spoken with God face to face, cannot enter his own tent because the presence is too much. This is not failure. It is awe. It is the appropriate response to the manifest presence of the holy. Even Moses—friend of God, lawgiver, intercessor—is brought to the threshold and cannot step beyond it. The glory is *that* much.',
        },
        {
          kind: 'christ',
          id: 'christ-glory-dwelling',
          title: 'Christ Connection — The Word Tabernacled',
          html: 'John begins his Gospel with three words from Genesis: &quot;In the beginning.&quot; But then he moves toward the climax of Exodus 40. &quot;The Word was made flesh, and dwelt among us; and we beheld his glory, the glory as of the only begotten of the Father, full of grace and truth&quot; (John 1:14). The Greek word for &quot;dwelt&quot; is *eskenōsen*—literally, &quot;pitched His tent,&quot; *tabernacled*. The cloud-glory of Exodus 40 becomes flesh. The same heavy presence that fills the tabernacle walks the dusty roads of Galilee. And when the disciples see Him transfigured, the cloud descends again (Matt. 17:5), the same cloud, the same glory. The *shekinah* has a face.',
        },
        {
          kind: 'commentary',
          id: 'cloud-pillar',
          html: 'The cloud becomes the means of guidance. When it is lifted, the people journey. When it settles, they wait. For the next forty years in the wilderness, the cloud and fire lead Israel. It is not a map. Not a compass. But a living presence, always ahead, always showing the way. The people do not choose their path. They follow the *kavod*.',
        },
        {
          kind: 'carry',
          html: 'You have been invited into the presence the way Moses was—not as an outsider, but as one coming home. The glory is no longer in a tent in the wilderness. It has dwelt among us in flesh. And it dwells still, in the Spirit, wherever the name of Jesus is believed. When you cannot see the way forward, when the path is unclear, you are not abandoned. The cloud-fire that led Israel still leads. Look for it. Follow it. It will not mislead you.',
        },
        {
          kind: 'reflection',
          id: 'reflect-glory',
          prompt: 'What does it change to know that the same presence that was too much for even Moses now dwells with those who trust Him? Where do you need to sense that presence most?',
        },
        {
          kind: 'artwork',
          matchTitle: /cloud|glory|tabernacle.*shekinah|moses.*tent/i,
          caption: 'Exodus 40:34–37 · The Glory Fills the Tabernacle',
        },
      ],
    },

    /* ─── Exodus 40:38 — The Cloud by Day and Fire by Night ────────────────── */
    {
      ref: 'Exodus 40:38',
      title: 'The Cloud by Day and Fire by Night',
      blocks: [
        {
          kind: 'scripture',
          chapter: 40,
          lines: [
            { number: 38, spans: [ t('For throughout all their journeys the cloud of the LORD was upon the tabernacle by day, and fire was on it by night, in the sight of all the house of Israel.') ] },
          ],
        },
        {
          kind: 'commentary',
          id: 'cloud-fire-guidance',
          html: 'This is the closing image of the entire book of Exodus. Not a promise. Not a command. But a fact: a visible, constant sign. Every morning, the cloud. Every night, the fire. The people do not need to wonder whether God is with them. The sky tells them. The *kavod* is visible. Tangible. Present in the very air they breathe.',
        },
        {
          kind: 'commentary',
          id: 'in-sight-of-all',
          html: 'The text says &quot;in the sight of all the house of Israel.&quot; This is not a private revelation given to the priests alone. Everyone sees it. The children, the sojourners, the mixed multitude that left Egypt—they all see the cloud and the fire. No one can claim not to have known. No one can say the way was unclear. The presence is public, universal, undeniable.',
        },
        {
          kind: 'christ',
          id: 'christ-ascension',
          title: 'Christ Connection — The Cloud at Ascension',
          html: 'When Jesus rises after the resurrection, the Gospels describe the same sign: &quot;A cloud received him out of their sight&quot; (Acts 1:9). The disciples stand in Jerusalem watching, and the cloud takes Him. But the promise comes: &quot;Why stand ye gazing up into heaven?... this same Jesus... shall so come in like manner as ye have seen him go into heaven&quot; (Acts 1:11). The cloud that filled the tabernacle, the cloud that Jesus disappeared into, will return. And Revelation closes the circle: &quot;Behold, he cometh with clouds&quot; (Rev. 1:7). The *shekinah* has not abandoned us. It has risen. And it will return. The fire and the cloud are the signature of His faithfulness.',
        },
        {
          kind: 'carry',
          html: 'You live under the same sign. Not a tent in the wilderness, but a Name, a Spirit, a presence that does not change. In your bright seasons, when everything is clear, you are under the cloud. In your dark seasons, when you cannot see far, you are under the fire—still led, still lit, still seen. You are never in the in-between where God has forgotten. The sign burns every night. You are noticed. You are guided. You are never abandoned in the dark.',
        },
        {
          kind: 'reflection',
          id: 'reflect-fire-cloud',
          prompt: 'When you are in a dark season of life, do you really believe God&apos;s fire is there, even if you cannot see anything else? What would it look like to trust the sign even when you cannot see the path?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'A cloud covered the tent of the congregation, and the glory of the LORD filled the tabernacle... the cloud of the LORD was upon the tabernacle by day, and fire was on it by night, in the sight of all the house of Israel.',
    snippet: 'Exodus 40:34–38 — A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Exodus 40 · Study Guide',
  },


  resources: [
    {
      id: 'complete-glory',
      kind: 'study',
      source: 'Sefaria',
      label: 'Exodus 40: Tabernacle Complete',
      url: 'https://www.sefaria.org/Exodus.40',
      description: 'Hebrew text on final assembly and God&apos;s presence.',
    },
    {
      id: 'shekinah',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Glory Cloud & Presence',
      url: 'https://www.bibleodyssey.org/dictionary/shekinah/',
      description: 'The cloud of glory filling the tabernacle.',
    },
  ],

  hasHebrew: true,
};
