import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Daniel 7 — The Son of Man Enthroned
 *
 * Daniel sees four great beasts rising from the sea—lion, bear, leopard, and a
 * terrible creature with iron teeth. These are kingdoms. Then Daniel sees the
 * ancient of days, His throne like fiery flame, thousands ministering. And "one
 * like the Son of man came with the clouds of heaven...and there was given him
 * dominion, and glory, and a kingdom, that all people, nations, and languages,
 * should serve him." Jesus quotes this prophecy of Himself.
 */
export const DANIEL_7: RichChapterContent = {
  bookSlug: 'daniel',
  bookName: 'Daniel',
  chapter: 7,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 6 },
  intros: [
    'In the first year of Belshazzar king of Babylon, Daniel has a vision in the night. He sees four great beasts rising from the sea, each different from the other. The first is like a lion with eagle&apos;s wings. The second is like a bear. The third is like a leopard with four wings and four heads. The fourth is terrible and strong, with great iron teeth. These beasts represent kingdoms—earthly powers that rise and struggle against one another, each thinking itself supreme.',
    'But then the scene shifts. Daniel sees the ancient of days take his seat. His throne is like fiery flame. A thousand thousands minister unto him, and ten thousand times ten thousand stand before him. And in this throne room of heaven, Daniel sees another vision: one like the Son of man comes with the clouds of heaven, and there is given him dominion, and glory, and a kingdom, that all people, nations, and languages should serve him. His dominion is an everlasting dominion which shall not pass away.',
  ],

  sections: [
    {
      ref: 'Daniel 7:1–12',
      title: 'The Four Beasts',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(1, 'In the first year of Belshazzar king of Babylon Daniel had a dream and visions of his head upon his bed: then he wrote the dream, and told the sum of the matters.'),
            plain(2, 'Daniel spake and said, I saw in my vision by night, and, behold, the four winds of the heaven strove upon the great sea.'),
            plain(3, 'And four great beasts came up from the sea, diverse one from another.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'resolve-vision-call',
          html: '<p>Daniel&apos;s night vision of kingdoms reveals God&apos;s final rule. From confusion comes clarity about what truly endures.</p>[res:bibleodyssey-apocalyptic]',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(4, 'The first was like a lion, and had eagle&apos;s wings: I beheld till the wings thereof were plucked, and it was lifted up from the earth, and made stand upon the feet as a man, and a man&apos;s heart was given to it.'),
            plain(5, 'And behold another beast, a second, like to a bear, and it raised up itself on one side, and it had three ribs in the mouth of it between the teeth of it: and they said thus unto it, Arise, devour much flesh.'),
            plain(6, 'After this I beheld, and lo another, like a leopard, which had upon the back of it four wings of a fowl; the beast had also four heads; and dominion was given to it.'),
            plain(7, 'After this I saw in the night visions, and behold a fourth beast, dreadful and terrible, and strong exceedingly; and it had great iron teeth: it devoured and brake in pieces, and stamped the residue with the feet of it: and it was diverse from all the beasts that were before it; and it had ten horns.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'daniel7-beasts',
          html: 'The four beasts represent earthly kingdoms and powers. They are monsters—fierce, hungry, brutal. They devour, they destroy, they war against one another. They are not merely imperfect; they are bestial. They are driven by appetite, by violence, by the lust for dominion. They come from the sea—from chaos, from the forces that oppose God&apos;s order. And they imagine themselves to be supreme, each ruling over all the earth. But none of them endures. They are replaced by one another, and they will all be replaced by the kingdom of the Son of Man[res:sefaria-daniel][res:sefaria-daniel-7].',
        },
        {
          kind: 'hebrew',
          id: 'daniel7-yam',
          title: 'Yam — "Sea" (Chaos)',
          script: 'יָם',
          translit: '<strong>Yam</strong> · sea; chaos; the waters of death and disorder',
          description:
            'The beasts rise from the sea, not from the land. The sea in Scripture represents chaos, the forces opposed to God&apos;s creation and order. Human kingdoms, no matter how mighty, how organized, how apparently solid, ultimately emerge from and return to chaos. They are temporary, unstable, and subject to forces beyond themselves. Only the kingdom of God, rooted in the heavens, endures forever.',
        },
      ],
    },

    {
      ref: 'Daniel 7:13–28',
      title: 'The Son of Man Comes',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(13, 'I saw in the night visions, and, behold, one like the Son of man came with the clouds of heaven, and came to the Ancient of days, and they brought him near before him.'),
            plain(14, 'And there was given him dominion, and glory, and a kingdom, that all people, nations, and languages, should serve him: his dominion is an everlasting dominion, which shall not pass away, and his kingdom that which shall not be destroyed.'),
            plain(15, 'I Daniel was grieved in my spirit in the midst of my body, and the visions of my head troubled me.'),
            plain(16, 'I came near unto one of them that stood by, and asked him the truth of all this. So he told me, and made known to me the interpretation of the things.'),
            plain(18, 'But the saints of the most High shall take the kingdom, and possess the kingdom for ever, even for ever and ever.'),
            plain(27, 'And the kingdom and dominion, and the greatness of the kingdom under the whole heaven, shall be given to the people of the saints of the most High: whose kingdom is an everlasting kingdom, and all dominions shall serve and obey him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'daniel7-son-of-man',
          html: 'The Son of Man—this title captures something essential. Not a beast. Not a monster. A man, yet more than a man. One like the Son of Man comes with the clouds of heaven. He comes before the Ancient of Days. And before Him there is given dominion and glory and a kingdom. All people, all nations, all languages serve Him. His dominion is everlasting. His kingdom shall not be destroyed. The kingdoms of the earth are temporal. The Kingdom of the Son of Man is eternal.',
        },
        {
          kind: 'hebrew',
          id: 'daniel7-bar-enash',
          title: 'Bar Enash — "Son of Man" (The Human)',
          script: 'בַר אֱנָשׁ',
          translit: '<strong>Bar enash</strong> · son of man; the human one; the person',
          description:
            'This phrase occurs only in Daniel 7 in the Old Testament, yet it becomes the title Jesus chooses for Himself throughout the gospels. "Son of Man" emphasizes Christ&apos;s humanity. He is not a being of pure spirit. He is not an angel. He is human, yet divine. He bears the image of humanity while bearing the nature of God. In Matthew 26:64, when asked if He is the Messiah, Jesus quotes this very prophecy: "Hereafter shall ye see the Son of man sitting on the right hand of power, and coming in the clouds of heaven."',
        },
        {
          kind: 'commentary',
          id: 'daniel7-saints-possess',
          html: 'And the saints of the Most High shall take the kingdom and possess it forever. The Kingdom of the Son of Man is not for Him alone. It is for those who belong to Him. The people of the saints of the Most High inherit an everlasting kingdom. All dominions—all the kingdoms that rose from the sea, all the earthly powers that thought themselves supreme—shall serve and obey Him. This is the promise: not that we will escape the kingdoms of this world, but that we will be raised with Christ into a Kingdom that cannot be shaken.',
        },
        {
          kind: 'christ',
          id: 'daniel7-christ-enthroned',
          title: 'Christ Connection — The King of Kings',
          html:
            'Jesus claims this prophecy for Himself. When He stands before the Sanhedrin, He says, "Ye shall see the Son of man sitting on the right hand of power, and coming in the clouds of heaven." He will come with the clouds of heaven as Daniel describes. He will sit in power. He will be given dominion over all peoples and nations and languages. The kingdoms of this world will bow before Him. And those who belong to Him will inherit His everlasting kingdom. All that Daniel sees in vision—the throne room of heaven, the glory of the Most High, the dominion given to the Son of Man—will be fully revealed when Christ returns.',
        },
        {
          kind: 'carry',
          html:
            'The story of Daniel 7 invites us to see beyond the kingdoms of this world—their power, their apparent permanence, their brutal strength—and to see the Kingdom that cannot be shaken. Earthly kingdoms rise and fall. They devour one another. They promise security and deliver chaos. But the Kingdom of the Son of Man is eternal. It does not depend on military might or economic power or political manipulation. It depends on the sovereign will and everlasting dominion of God. And those who belong to this Kingdom, who serve the Son of Man, inherit a dominion that shall not pass away.',
        },
        {
          kind: 'reflection',
          id: 'daniel7-kingdom',
          prompt: 'What kingdoms of this world are you investing your life and hopes in? What would it mean for you to shift your allegiance and your hope to the Kingdom of the Son of Man that shall never be destroyed?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'One like the Son of man came with the clouds of heaven...and there was given him dominion, and glory, and a kingdom, that all people, nations, and languages, should serve him.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Daniel 7 · Study Guide',
  },  resources: [
    {
      id: 'bibleodyssey-apocalyptic',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Apocalyptic Literature',
      url: 'https://www.bibleodyssey.org/dictionary/apocalypse/',
      description: 'SBL entry on the apocalyptic genre exemplified by Daniel.',
    },
    {
      id: 'sefaria-daniel',
      kind: 'study',
      source: 'Sefaria',
      label: 'Daniel',
      url: 'https://www.sefaria.org/Daniel',
      description: 'Open-source Hebrew Bible with translations and medieval commentaries.',
    },
    {
      id: 'sefaria-daniel-7',
      kind: 'study',
      source: 'Sefaria',
      label: 'Daniel 7 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Daniel.7',
      description: 'The Hebrew text of Daniel 7 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  hasHebrew: true,
};
