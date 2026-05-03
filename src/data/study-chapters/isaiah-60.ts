import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Isaiah 60 — The Light of the Nations
 *
 * "Arise, shine; for thy light is come, and the glory of the Lord is risen upon
 * thee." After the darkness of exile, Zion is called to wake and shine. Her light
 * has come in the person of the Messiah. The Gentiles will come to her light, and
 * kings to the brightness of her rising. The abundance of the seas will be turned
 * to her. Nations will serve her and bring wealth to God\'s house. All glory is
 * transformed—darkness becomes light, reproach becomes honor.
 */
export const ISAIAH_60: RichChapterContent = {
  bookSlug: 'isaiah',
  bookName: 'Isaiah',
  chapter: 60,

  estimatedMinutes: { beginner: 2, intermediate: 3, deep: 4 },
  intros: [
    'Isaiah 60 is a hymn of restoration and glory. After the separation and darkness of Isaiah 59, light breaks forth. Zion is awakened to her true condition: the glory of the Lord has risen upon her. What was dark is now radiant. What was forsaken is now sought. The Gentiles stream to her light. Kings and nations bring their wealth to God\'s temple. And beneath all this restoration is a single reality: Christ is the Light of the world, and those who belong to Him are light-bearers to the nations.',
  ],

  sections: [
    {
      ref: 'Isaiah 60:1–11',
      title: 'Zion\'s Rising Light',
      blocks: [
        {
          kind: 'scripture',
          chapter: 60,
          lines: [
            plain(1, 'Arise, shine; for thy light is come, and the glory of the Lord is risen upon thee.'),
            plain(2, 'For, behold, the darkness shall cover the earth, and gross darkness the people: but the Lord shall arise upon thee, and his glory shall be seen upon thee.'),
            plain(3, 'And the Gentiles shall come to thy light, and kings to the brightness of thy rising.'),
            plain(4, 'Lift up thine eyes round about, and see: all they gather themselves together, they come to thee: thy sons shall come from far, and thy daughters shall be nursed at thy side.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'resolve-light-shines',
          html:
            \'<p>Arise and shine; your light has come. Nations walk in your brightness; the Lord is your everlasting light.[res:sefaria-isaiah-60]</p>\',
        },
        {
          kind: 'hebrew',
          id: 'isaiah60-or',
          title: 'Or — "Light"',
          script: 'אוֹר',
          translit: '<strong>Or</strong> · light; illumination; clarity',
          description: 'The light of God\'s glory dawns upon Zion.',
        },
        {
          kind: 'scripture',
          chapter: 60,
          lines: [
            plain(5, 'Then thou shalt see, and flow together, and thine heart shall fear, and be enlarged; because the abundance of the sea shall be converted unto thee, the forces of the Gentiles shall come unto thee.'),
            plain(6, 'The multitude of camels shall cover thee, the dromedaries of Midian and Ephah; all they from Sheba shall come: they shall bring gold and incense; and they shall shew forth the praises of the Lord.'),
            plain(7, 'All the flocks of Kedar shall be gathered together unto thee, the rams of Nebaioth shall minister unto thee: they shall come up with acceptance on mine altar, and I will glorify the house of my glory.'),
            plain(9, 'Surely the isles shall wait for me, and the ships of Tarshish first, to bring thy sons from far, their silver and their gold with them, unto the name of the Lord thy God, and to the Holy One of Israel, because he hath glorified thee.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa60-arise',
          html:
            \'Zion is called to arise and shine. Her light has come. While darkness covers the earth, the Lord rises upon her. Her glory is the reflection of His glory. She becomes a beacon to the nations. The Gentiles see her light and come. Kings see the brightness of her rising and bow.\',
        },
        {
          kind: 'commentary',
          id: 'isa60-gather',
          html:
            'All her scattered children are gathered. Her sons come from far, her daughters are brought as children in the arms of kings and peoples. The sea\'s abundance flows to her. The forces of the Gentiles come to her. Camels and dromedaries from distant lands bring gold and incense. This is not economic conquest, but the willing homage of nations to the God who dwells in Zion.',
        },
        {
          kind: 'hebrew',
          id: 'isa60-or',
          title: 'Or — "Light"',
          script: 'אוֹר',
          translit: '<strong>Or</strong> · light; revelation; truth',
          description:
            'Light in Scripture is not merely illumination. It is truth, revelation, the presence of God. Zion shines because God\'s truth and presence rest upon her.',
        },
        {
          kind: 'christ',
          id: 'isa60-christ-light',
          title: 'Christ Connection — The Light of the World',
          html:
            'Jesus said: "I am the light of the world: he that followeth me shall not walk in darkness, but shall have the light of life" (John 8:12). And later: "Ye are the light of the world...Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven" (Matt. 5:14–16). The Church, Christ\'s body, reflects His light to the nations. As Zion draws the Gentiles in Isaiah 60, so Christ\'s Church draws all peoples to the light of the gospel.',
        },
        {
          kind: 'carry',
          html:
            \'Isaiah 60 invites us to see ourselves and our communities not as they are in the moment of despair, but as they are called to be—radiant, magnetic, centers of light and truth that draw others to God. This is not prideful ambition. This is the calling of everyone who follows Christ: to shine with His light so that others are drawn to His truth.\',
        },
        {
          kind: 'reflection',
          id: 'isa60-light',
          prompt: 'How are you a light to those around you? What would it mean to let Christ\'s light shine through your life so distinctly that others are drawn to Him?',
        },
      ],
    },

    {
      ref: 'Isaiah 60:15–22',
      title: 'From Forsaken to Forever',
      blocks: [
        {
          kind: 'scripture',
          chapter: 60,
          lines: [
            plain(15, 'Whereas thou hast been forsaken and hated, so that no man went through thee, I will make thee an eternal excellency, a joy of many generations.'),
            plain(16, 'Thou shalt also suck the milk of the Gentiles, and shalt suck the breast of kings: and thou shalt know that I the Lord am thy Saviour and thy Redeemer, the mighty One of Jacob.'),
            plain(17, 'For brass I will bring gold, and for iron I will bring silver, and for wood brass, and for stones iron: I will also make thy officers peace, and thine exactors righteousness.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'resolve-light-shines-2',
          html:
            \'<p>Instead of bronze, I will bring gold; instead of iron, silver. Peace as your overseer, righteousness as your leader.</p>\',
        },
        {
          kind: 'scripture',
          chapter: 60,
          lines: [
            plain(19, 'The sun shall be no more thy light by day; neither for brightness shall the moon give light unto thee: but the Lord shall be unto thee an everlasting light, and thy God thy glory.'),
            plain(20, 'Thy sun shall no more go down; neither shall thy moon withdraw itself: for the Lord shall be thine everlasting light, and the days of thy mourning shall be ended.'),
            plain(21, 'Thy people also shall be all righteous: they shall inherit the land for ever, the branch of my planting, the work of my hands, that I may be glorified.'),
            plain(22, 'A little one shall become a thousand, and a small one a strong nation: I the Lord will hasten it in his time.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'isa60-forsaken',
          html:
            \'What was forsaken and hated will become an eternal excellency, a joy of many generations. What was passed through with contempt will become a destination for pilgrims. The reversal is complete: the despised becomes the celebrated.\',
        },
        {
          kind: 'commentary',
          id: 'isa60-metals',
          html:
            \'In a radical transformation, all materials are upgraded. Brass becomes gold. Iron becomes silver. Wood becomes brass. Stones become iron. This is not merely material improvement. It is a complete renovation of creation itself—everything is refined, elevated, made more precious.\',
        },
        {
          kind: 'commentary',
          id: 'isa60-everlasting',
          html:
            'Most radically, the sun and moon are no longer needed as light. The Lord Himself is the everlasting light. The sun will not go down. The moon will not withdraw. Mourning will be ended. This is the vision of the new creation, where God\'s direct presence makes all other sources of light obsolete.',
        },
        {
          kind: 'carry',
          html:
            'Isaiah 60 speaks to all who feel small, forsaken, insignificant. A little one shall become a thousand. God takes the small and makes it mighty. He does not do it in a day, but His time will come. The journey from darkness to light, from forsaken to eternally celebrated, is God\'s work. We need only to arise, shine, and let His light work through us.',
        },
        {
          kind: 'reflection',
          id: 'isa60-forever',
          prompt: 'What areas of your life or your community feel forsaken, dark, small? What would it look like to trust God\'s promise that He will transform them into eternal excellency?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Arise, shine; for thy light is come...the Gentiles shall come to thy light, and kings to the brightness of thy rising.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Isaiah 60 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-isaiah-60',
      kind: 'study',
      source: 'Sefaria',
      label: 'Isaiah 60',
      url: 'https://www.sefaria.org/Isaiah.60',
      description: 'Sefaria open-access source text and translations for Isaiah 60.',
    },
  ],

  hasHebrew: true,
};
