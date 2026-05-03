import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Micah 5 — The Ruler from Bethlehem
 *
 * "Bethlehem Ephratah...out of thee shall he come forth unto me that is to be
 * ruler in Israel; whose goings forth have been from of old, from everlasting."
 * A ruler will come from the little town of Bethlehem, and His origins are
 * eternal.
 */
export const MICAH_5: RichChapterContent = {
  bookSlug: 'micah',
  bookName: 'Micah',
  chapter: 5,

  estimatedMinutes: { beginner: 2, intermediate: 3, deep: 4 },
  intros: [
    'Among all the prophets, Micah speaks with particular clarity about the birthplace of the Messiah. Not Jerusalem, not the capital. A small town: Bethlehem Ephratah. And the Ruler who comes from there is no ordinary king. His goings forth have been from of old, from everlasting. He is not newly created or born for the first time. He has existed from the beginning. He comes to rule, but He comes from eternity.',
    'The prophecy stands in stark contrast to the darkness surrounding it. Israel is divided, besieged, struggling. But out of the least likely place will come the Ruler who will bring peace, who will shepherd His flock, who will be their peace when the Assyrian comes.',
  ],

  sections: [
    {
      ref: 'Micah 5:1–6',
      title: 'The Ruler from Bethlehem',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(1, 'Now gather thyself in troops, O daughter of troops: he hath laid siege against us: they shall smite the judge of Israel with a rod upon the cheek.'),
            plain(2, 'But thou, Bethlehem Ephratah, though thou be little among the thousands of Judah, yet out of thee shall he come forth unto me that is to be ruler in Israel; whose goings forth have been from of old, from everlasting.'),
            plain(3, 'Therefore will he give them up, until the time that she which travaileth hath brought forth: then the remnant of his brethren shall return unto the children of Israel.'),
            plain(4, 'And he shall stand and feed his flock in the strength of the Lord, in the majesty of the name of the Lord his God; and they shall abide: for now shall he be great unto the ends of the earth.'),
            plain(5, 'And this man shall be the peace, when the Assyrian shall come into our land: and when he shall tread in our palaces, then shall we raise against him seven shepherds, and eight principal men.'),
            plain(6, 'And they shall waste the land of Assyria with the sword, and the land of Nimrod in the entrances thereof: thus shall he deliver us from the Assyrian, when he cometh into our land, and when he treadeth within our borders.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'micah5-bethlehem',
          html:
            '"Bethlehem Ephratah, though thou be little among the thousands of Judah"—Israel&apos;s estimate of Bethlehem is that it is insignificant. But God&apos;s estimate is radically different. From this little town will come the Ruler. The contrast is intentional. God often works through what the world considers small or unimportant.',
        },
        {
          kind: 'hebrew',
          id: 'micah5-motzaot',
          title: 'Motzaot — "Goings Forth"',
          script: 'מוֹצָאוֹת',
          translit: '<strong>Motzaot</strong> · goings forth; comings out; origins',
          description:
            'The Hebrew word emphasizes origins and emergence. His goings forth are from of old, from everlasting. Not just His birth, but His very origins, are eternal. He does not come into being at Bethlehem. He comes forth from Bethlehem.',
        },
        {
          kind: 'christ',
          id: 'micah5-christ-born',
          title: 'Christ Connection — Christ Born in Bethlehem',
          html:
            'Matthew 2:6 quotes this prophecy directly, applying it to the birth of Jesus: "Thou Bethlehem...out of thee shall come a Governor, that shall rule my people Israel." The prophecy is specific—the place, Bethlehem. The role, ruler. The nature, eternal. Christ fulfills all three. He is born in Bethlehem, He rules as King, and He is eternally the Son of God.',
        },
        {
          kind: 'carry',
          html:
            'The Ruler from Bethlehem will feed His flock in the strength of the Lord. He will be the peace, standing between His people and their enemies. This is the image of the Good Shepherd—not distant, but present, feeding and protecting those under His care.',
        },
        {
          kind: 'reflection',
          id: 'micah5-shepherd',
          prompt:
            'How do you experience Christ as the Shepherd who feeds His flock? What does it mean for Him to feed you in the strength of the Lord?',
        },
      ],
    },

    {
      ref: 'Micah 5:7–15',
      title: 'The Remnant and God&apos;s Purpose',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(7, 'And the remnant of Jacob shall be in the midst of many people as a dew from the Lord, as the showers upon the grass, that tarrieth not for man, nor waiteth for the sons of men.'),
            plain(8, 'And the remnant of Jacob shall be among the Gentiles in the midst of many people as a lion among the beasts of the forest, as a young lion among the flocks of sheep: who, if he go through, both treadeth down, and teareth in pieces, and none can deliver.'),
            plain(9, 'Thine hand shall be lifted up upon thine adversaries, and all thine enemies shall be cut off.'),
            plain(10, 'And it shall come to pass in that day, saith the Lord, that I will cut off thy horses out of the midst of thee, and I will destroy thy chariots:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'micah-5-justice-strength',
          html:
            'The remnant will be like a lion. They shall tread enemies underfoot. No more fear. Justice and strength return together. God cuts off sorceries and idols. His people stand tall because He stands with them.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(11, 'And I will cut off the cities of thy land, and throw down all thy strong holds:'),
            plain(12, 'And I will cut off witchcrafts out of thine hand; and thou shalt have no more soothsayers:'),
            plain(13, 'Thy graven images also will I cut off, and thy standing images out of the midst of thee; and thou shalt no more worship the work of thine hands.'),
            plain(14, 'And I will pluck up thy groves out of the midst of thee: so will I destroy thy cities.'),
            plain(15, 'And I will execute vengeance in anger and fury upon the heathen, such as they have not heard.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'micah5-remnant-dew',
          html:
            'The remnant will be like dew from the Lord—gentle, life-giving, falling without human effort or permission. Yet the same remnant will also be like a lion among flocks, tearing in pieces. The dew and the lion are two aspects of the same people: powerful in God, yet humble; strong to overcome enemies, yet sustaining to the innocent.',
        },
        {
          kind: 'commentary',
          id: 'micah5-cleansing',
          html:
            'God will cleanse Israel of all that has kept them from Him: horses and chariots (false security), witchcraft and soothsayers (false knowledge), graven images (idolatry). The cleansing is radical. Everything that has supplanted trust in God will be removed.',
        },
        {
          kind: 'christ',
          id: 'micah5-christ-lion',
          title: 'Christ Connection — Christ the Lion of Judah',
          html:
            'In Revelation 5, Christ is called "the Lion of the tribe of Judah." Like Micah&apos;s image, He is both gentle and powerful—the Lamb slain, yet the Lion conquering. He breaks the power of death and Satan, yet He is merciful to those who come to Him.',
        },
        {
          kind: 'carry',
          html:
            'The cleansing God promises is not external only. It is an internal work, removing the things that block our trust and faith. When we let God cleanse us of false security and false knowledge, we become what we are meant to be: people fully committed to Him.',
        },
        {
          kind: 'reflection',
          id: 'micah5-cleansing-2',
          prompt:
            'What false securities, false knowledge, or idols does God need to cleanse from your own life and heart?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'Out of thee shall he come forth unto me that is to be ruler in Israel; whose goings forth have been from of old, from everlasting.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Micah 5 · Study Guide',
  },

  hasHebrew: true,
};
