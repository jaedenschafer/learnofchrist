import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const REVELATION_17: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 17,

  intros: [
    "An angel shows John the great whore — &quot;Mystery, Babylon the Great, the mother of harlots and abominations of the earth.&quot; She rides a scarlet beast with seven heads and ten horns. The kings of the earth have committed fornication with her; the inhabitants of the earth are drunk on her wine.",
    "But the Lamb shall overcome them: &quot;He is Lord of lords, and King of kings: and they that are with him are called, and chosen, and faithful.&quot; The same beast that carries Babylon will turn and devour her. Evil has no loyalty even to itself.",
  ],

  sections: [
    {
      ref: 'Revelation 17:1–6',
      title: 'The Woman on the Beast',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(1, 'And there came one of the seven angels which had the seven vials, and talked with me, saying unto me, Come hither; I will shew unto thee the judgment of the great whore that sitteth upon many waters:'),
            plain(2, 'With whom the kings of the earth have committed fornication, and the inhabitants of the earth have been made drunk with the wine of her fornication.'),
            plain(4, 'And the woman was arrayed in purple and scarlet colour, and decked with gold and precious stones and pearls, having a golden cup in her hand full of abominations and filthiness of her fornication:'),
            plain(5, 'And upon her forehead was a name written, MYSTERY, BABYLON THE GREAT, THE MOTHER OF HARLOTS AND ABOMINATIONS OF THE EARTH.'),
            plain(6, 'And I saw the woman drunken with the blood of the saints, and with the blood of the martyrs of Jesus: and when I saw her, I wondered with great admiration.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev17-babylon',
          html: 'Babylon is more than any single empire. She is the world-system that seduces nations away from God — the seductive coalition of political power, commercial prosperity, and false religion. Across history different cities have sat in her seat: ancient Babel, imperial Rome, every counterfeit kingdom that promises glory and demands worship.',
        },
        {
          kind: 'greek',
          id: 'rev17-mysterion',
          title: 'Mysterion — Mystery',
          script: 'μυστήριον',
          translit: '<strong>mystērion</strong> · hidden truth disclosed',
          description: 'The mystery is not a puzzle but a hidden reality being unveiled. Heaven shows John what the seductive city really is, beneath her gold and pearls.',
        },
        {
          kind: 'carry',
          html: 'Babylon does not advertise as Babylon. She comes dressed in purple and scarlet, with a golden cup. Discernment asks not how something looks, but what its cup contains.',
        },
        {
          kind: 'reflection',
          id: 'rev17-ref-1',
          prompt: 'Where in your life are you most tempted to admire something that, beneath its surface, is leading you away from Christ?',
        },
      ],
    },

    {
      ref: 'Revelation 17:14–18',
      title: 'The Lamb Shall Overcome',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(14, 'These shall make war with the Lamb, and the Lamb shall overcome them: for he is Lord of lords, and King of kings: and they that are with him are called, and chosen, and faithful.'),
            plain(16, 'And the ten horns which thou sawest upon the beast, these shall hate the whore, and shall make her desolate and naked, and shall eat her flesh, and burn her with fire.'),
            plain(17, 'For God hath put in their hearts to fulfil his will, and to agree, and give their kingdom unto the beast, until the words of God shall be fulfilled.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev17-lamb',
          html: 'The world&apos;s power coalition will turn on itself. God has given them up to fulfilling His word even by their hatreds. The Lamb does not need to defeat each evil one by one; He overcomes by being who He is — Lord of lords and King of kings.',
        },
        {
          kind: 'christ',
          id: 'rev17-christ-king',
          title: 'Christ Connection — Lord of Lords and King of Kings',
          html: 'This title in Revelation 17:14 reappears in Revelation 19:16 written on Christ&apos;s thigh as He returns. The same name on the same Christ both names His sovereignty over the worst that Babylon can throw at Him and announces His final victory. He does not become King by winning. He wins because He is King.',
        },
        {
          kind: 'carry',
          html: 'You are with the Lamb if you are called, chosen, and faithful — not because you have defeated evil but because He has. Your faithfulness is the response, not the qualification.',
        },
        {
          kind: 'reflection',
          id: 'rev17-ref-2',
          prompt: 'What does it mean for you, today, to be one of those who are with the Lamb when He overcomes?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Revelation 17',
    quote: 'The Lamb shall overcome them: for he is Lord of lords, and King of kings: and they that are with him are called, and chosen, and faithful.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Revelation 17 · Study Guide',
  },
};
