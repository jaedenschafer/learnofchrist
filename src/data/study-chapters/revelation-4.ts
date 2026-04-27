import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Revelation 4 — The Throne in Heaven
 *
 * John is caught up in the Spirit and sees the throne of God, surrounded by
 * twenty-four elders and four living creatures. The scene is one of worship
 * and majesty: "Holy, holy, holy, Lord God Almighty."
 */
export const REVELATION_4: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 4,

  intros: [
    'The letters to the churches conclude. Now John is transported to heaven itself. What the earthly churches face in tribulation is met by a vision of heavenly reality. Above all earthly thrones sits the throne of God—immovable, eternal, surrounded by worship. The suffering churches need to see what John sees: God reigns.',
    'The throne is not empty. It is filled by the presence of the Almighty. Around it, the four living creatures worship without ceasing: "Holy, holy, holy, Lord God Almighty." This is not entertainment. This is the reality that undergirds all existence.',
  ],

  sections: [
    {
      ref: 'Revelation 4:1–8',
      title: 'The Throne and the Creatures',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(1, 'After this I looked, and, behold, a door was opened in heaven: and the first voice which I heard was as it were of a trumpet talking with me; which said, Come up hither, and I will shew thee things which must be hereafter.'),
            plain(2, 'And immediately I was in the spirit: and, behold, a throne was set in heaven, and one sat on the throne.'),
            plain(4, 'And round about the throne were four and twenty seats: and upon the seats I saw four and twenty elders sitting, clothed in white raiment; and they had on their heads crowns of gold.'),
            plain(6, 'And before the throne there was a sea of glass like unto crystal: and in the midst of the throne, and round about the throne, were four beasts full of eyes before and behind.'),
            plain(8, 'And the four beasts said, Holy, holy, holy, Lord God Almighty, which was, and is, and is to come.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev4-throne',
          html:
            'John is invited into heaven with a trumpet voice—the call is clear and unmistakable. He finds a throne, and upon it sits one—God, the Father. The throne is not abstract but vivid, concrete, surrounded by the worship of creation. The twenty-four elders represent the redeemed—twelve tribes of Israel, twelve apostles of the church, the fullness of God&apos;s people.',
        },
        {
          kind: 'greek',
          id: 'rev4-thronos',
          title: 'Thronos — Throne',
          script: 'θρόνος',
          translit: '<strong>Thronos</strong> · throne; seat of authority; place of rule',
          description:
            'The throne is not decorative. It is the seat of ultimate authority. God sits upon it. All power flows from it. The throne is surrounded by worship because all existence is subordinate to it, dependent upon it, gathered in its presence.',
        },
        {
          kind: 'christ',
          id: 'rev4-christ-worthy',
          title: 'Christ Connection — Worthy of Worship',
          html:
            'The four beasts sing "Holy, holy, holy"—the threefold affirmation echoes Isaiah&apos;s vision of God&apos;s holiness. In the next chapter, the Lamb—Jesus—will be declared worthy of the same worship. Here, we see that all worship flows to the throne, and Christ shares that throne.',
        },
        {
          kind: 'carry',
          html:
            'When the foundations shake and the world trembles, remember: the throne of God is set. It cannot be moved. The worship of heaven continues. You are invited to join the twenty-four elders, to sit in white raiment with a crown of gold. Your faithfulness matters to the One who sits upon that throne.',
        },
        {
          kind: 'reflection',
          id: 'rev4-throne-worship',
          prompt: 'What does it mean to you that God&apos;s throne is immovable and surrounded by perpetual worship? How does that reality steady you?',
        },
      ],
    },

    {
      ref: 'Revelation 4:9–11',
      title: 'The Song of Creation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(9, 'And when those beasts give glory and honour and thanks to him that sat on the throne, who liveth for ever and ever,'),
            plain(10, 'The four and twenty elders fall down before him that sat on the throne, and worship him that liveth for ever and ever, and cast their crowns before the throne, saying,'),
            plain(11, 'Thou art worthy, O Lord, to receive glory and honour and power: for thou hast created all things, and for thy pleasure they are, and were created.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev4-worth',
          html:
            'The four beasts give glory to the One on the throne. The twenty-four elders fall down and cast their crowns before Him. They do not hold onto their honors. They surrender them. And they sing: Thou art worthy. Worthy because thou hast created all things. All existence stems from His creative word. All things are for His pleasure.',
        },
        {
          kind: 'greek',
          id: 'rev4-axios',
          title: 'Axios — Worthy',
          script: 'ἄξιος',
          translit: '<strong>Axios</strong> · worthy; deserving; of equal value',
          description:
            'Axios means to be of value equal to. God is worthy—His value exceeds all creation. His worthiness is not granted by creatures. It is intrinsic to His nature. Creator and creation cannot be compared. The difference is absolute.',
        },
        {
          kind: 'christ',
          id: 'rev4-christ-creation',
          title: 'Christ Connection — Through Whom All Things Were Made',
          html:
            'In Colossians 1:16, Paul writes: "By him [Christ] were all things created." The One seated on the throne and the Lamb are inseparable in creation. To worship one is to worship the other. All things find their meaning and purpose in Him.',
        },
        {
          kind: 'carry',
          html:
            'The elders cast down their crowns. This is the reversal of pride. Whatever you have achieved, whatever honor the world has given you—lay it down. The only true honor is to worship the One who created all things. Everything else is temporary.',
        },
        {
          kind: 'reflection',
          id: 'rev4-crowns',
          prompt: 'What crowns—what honors or achievements—are you holding too tightly? What would it look like to lay them at the feet of Christ?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Holy, holy, holy, Lord God Almighty, which was, and is, and is to come. Thou art worthy, O Lord, to receive glory and honour and power.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Revelation 4 · Study Guide',
  },

  hasHebrew: false,
};
