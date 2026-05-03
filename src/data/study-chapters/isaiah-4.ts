import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Isaiah 4 — In That Day: The Branch of the Lord
 *
 * "In that day shall the branch of the Lord be beautiful and glorious." After the removal
 * and the judgment, Isaiah turns again to hope. A remnant will be left—those called holy,
 * written among the living in Jerusalem. God will create a cloud by day and a brightness
 * by night to cover the remnant, to protect them, to dwell in their midst. Christ is
 * that Branch—beautiful, glorious, able to bear the sin and shame of His people.
 */
export const ISAIAH_4: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 4,

  estimatedMinutes: { 5: 2, 10: 3, 15: 4 },
  intros: [
    'The darkness of judgment will not be the final word. Isaiah opens chapter 4 with the phrase "In that day"—a phrase that appears repeatedly throughout his prophecy, always signaling a turn toward hope. The judgment falls, but a remnant survives. Seven women will take hold of one man, asking only to bear his name and remove their reproach. And then the focus shifts: "In that day shall the branch of the Lord be beautiful and glorious, and the fruit of the earth shall be excellent and comely for them that are escaped of Israel."',
    'Here Isaiah introduces language that will echo through the New Testament: the Branch. This is not a sapling or a subsidiary thing. The Branch of the Lord is that which comes forth from the line of Jesse, that which grows from what appears to be dead or diminished wood. And this Branch is beautiful and glorious—the sole source of honor and restoration for those who remain. God will also establish a protective presence—a cloud by day and a fire by night—that recalls the exodus, the wilderness wandering, God&apos;s own protective dwelling with His people. In Christ, this promise finds its fulfillment.',
  ],

  sections: [
    {
      ref: 'Isaiah 4:2–6',
      title: 'The Branch of the Lord: Beautiful and Glorious',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(2, 'In that day shall the branch of the Lord be beautiful and glorious, and the fruit of the earth shall be excellent and comely for them that are escaped of Israel.'),
            plain(3, 'And it shall come to pass, that he that is left in Zion, and he that remaineth in Jerusalem, shall be called holy, even every one that is written among the living in Jerusalem:'),
            plain(4, 'When the Lord shall have washed away the filth of the daughters of Zion, and shall have purged the blood of Jerusalem from the midst thereof by the spirit of judgment, and by the spirit of burning.'),
            plain(5, 'And the Lord will create upon every dwelling place of mount Zion, and upon her assemblies, a cloud and smoke by day, and the shining of a flaming fire by night: for upon all the glory shall be a defence.'),
            plain(6, 'And there shall be a tabernacle for a shadow in the daytime from the heat, and for a place of refuge, and for a covert from storm and from rain.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isaiah4-branch',
          html:
            'The term "branch of the Lord" is rich with significance. In Isaiah, the Branch refers to the righteous descendant who will grow forth, one who will establish justice and righteousness. Here He is described as both beautiful (desirable, attractive) and glorious (full of divine weight and majesty). After judgment, after the stripping away of false ornaments and prideful pretense, the true beauty of the Branch becomes visible. This is not surface beauty. This is the beauty of one who embodies justice, mercy, and divine purpose.',
        },
        {
          kind: 'commentary',
          id: 'isaiah4-remnant',
          html:
            'The remnant—those who escape, those who are left—are the object of God&apos;s continued covenant care. They are called "holy, even every one that is written among the living in Jerusalem." Their names are written in God&apos;s book. They are not merely survivors of judgment; they are those who have been preserved, consecrated, marked as belonging to God. The filth of Zion will be washed away, the bloodguilt purged by the "spirit of judgment, and by the spirit of burning." Purification is necessary before the remnant can dwell in God&apos;s presence.',
        },
        {
          kind: 'hebrew',
          id: 'isaiah4-netser',
          title: 'Netser — "Branch"',
          script: 'נֵצֶר',
          translit: '<strong>Netser</strong> · branch, shoot, offspring; also from Nazareth',
          description:
            'The Hebrew word netser refers to a young branch or shoot that grows from a tree. It carries the sense of newness and growth. Interestingly, this word is connected to the name Nazareth (from the same root), where Jesus would be raised. The Branch grows from the stump of Jesse—from what appears to be a dead thing, new life emerges.',
        },
        {
          kind: 'christ',
          id: 'isaiah4-christ-branch',
          title: 'Christ Connection — The Branch Beautiful and Glorious',
          html:
            'In the New Testament, Jesus is explicitly identified with the Branch. Matthew and Luke trace His descent from David and ultimately from Jesse. The church fathers saw in the Branch a prophecy of the Messiah. Christ is the one in whom the true beauty and glory of God become visible. He is the one through whom the filth and blood-guilt of sin are washed away—not through human effort or ritual, but through His own sacrifice. And like the cloud and fire of the exodus, Christ&apos;s presence becomes the protection and the refuge for those who belong to Him. In Him, God dwells in the midst of His people once more.',
        },
        {
          kind: 'carry',
          html:
            'The promise of the Branch teaches us that beauty and glory are not found in self-cultivation, in the accumulation of ornaments, in the display of power. True beauty is the beauty of one who lives in perfect alignment with God&apos;s purpose—who brings forth justice, who bears fruit, who feeds others. And that beauty becomes the refuge and the defense for all who are gathered to Him. The cloud by day and the fire by night are not distant historical symbols. They are the present reality of Christ&apos;s protective presence for His people.',
        },
        {
          kind: 'reflection',
          id: 'isaiah4-beauty-reflect',
          prompt: 'What do you find beautiful in others? What do you wish to become beautiful in yourself? How might the beauty of Christ—His justice, His self-sacrifice, His faithfulness—transform your understanding of true beauty?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'In that day shall the branch of the Lord be beautiful and glorious, and the fruit of the earth shall be excellent and comely for them that are escaped of Israel.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 4:2 · Study Guide',
  },

  hasHebrew: true,
};
