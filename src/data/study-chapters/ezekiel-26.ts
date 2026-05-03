import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Ezekiel 26 — Burden Against Tyre
 *
 * Tyre was the great merchant city of the ancient world—powerful, wealthy,
 * confident in her strength. She said: "I am of perfect beauty." She brought
 * treasure from all the earth. But pride precedes destruction. God will bring
 * Nebuchadnezzar against her. "I will destroy the walls of Tyrus, and break
 * down her towers." The proud city will be made "like the top of a rock: it
 * shall be a place for the spreading of nets in the midst of the sea." From
 * wealth to ruin. From power to desolation. All who knew her will weep. But
 * Tyre&apos;s fall points to a deeper truth: worldly security, however impressive,
 * is ultimately fragile.
 */
export const EZEKIEL_26: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 26,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  intros: [
    'Tyre was the New York City of the ancient world—a merchant metropolis, a center of trade and wealth, a symbol of human achievement and power. Ships from every nation brought goods to her markets. She was islands connected by causeway, seemingly impregnable. And Tyre believed in her own greatness. "I am of perfect beauty," she said. But God sees deeper. Pride is the prelude to destruction.',
    'Ezekiel prophesies the siege of Tyre by Nebuchadnezzar. The walls will be broken. The towers will fall. The city that brought treasure from all the earth will become like the top of a rock—bare, desolate, a place for fishermen to spread their nets. All who knew her will mourn. But the lamentation over Tyre is also an invitation to reader: what you build on human pride will fall.',
  ],

  sections: [
    {
      ref: 'Ezekiel 26:1–9',
      title: 'The Proud City Laid Low',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            plain(2, 'Son of man, because that Tyrus hath said against Jerusalem, Aha, she is broken that was the gates of the people: she is turned unto me: I shall be replenished, now she is laid waste:'),
            plain(3, 'Therefore thus saith the Lord God; Behold, I am against thee, O Tyrus, and will cause many nations to come up against thee, as the sea causeth his waves to come up.'),
            plain(4, 'And they shall destroy the walls of Tyrus, and break down her towers: I will also scrape her dust from her, and make her like the top of a rock.'),
            plain(7, 'For thus saith the Lord God; Behold, I will bring upon Tyrus Nebuchadrezzar king of Babylon, a king of kings, from the north, with horses, and with chariots, and with horsemen, and companies, and much people.'),
            plain(12, 'And they shall make a spoil of thy riches, and make a prey of thy merchandise: and they shall break down thy walls, and destroy thy pleasant houses: and they shall lay thy stones and thy timber and thy dust in the midst of the water.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezek26-tyre-proud',
          html:
            'Tyre gloats over Jerusalem&apos;s destruction. "She is broken that was the gates of the people: she is turned unto me: I shall be replenished." Tyre sees Jerusalem&apos;s fall as opportunity for herself. She will capture Jerusalem&apos;s trade, her wealth. But in this moment of triumph, Tyre reveals her own blindness. She does not see the hand of God moving. She sees only her own advantage.',
        },
        {
          kind: 'commentary',
          id: 'ezek26-destruction',
          html:
            'And God promises destruction. "I will cause many nations to come up against thee, as the sea causeth his waves to come up." The language is of overwhelming force—like waves, they will come. Walls will be broken. Towers will fall. The city that brought riches from all the earth will be scraped bare. "I will make her like the top of a rock"—a barren stone where nothing can grow, where the only use is for fishermen to spread their nets.',
        },
        {
          kind: 'hebrew',
          id: 'ezek26-tyre-pride',
          title: 'Yafah — "Beautiful" (Perfect, Fair)',
          script: 'יָפָה',
          translit: '<strong>Yafah</strong> · to be beautiful, to be perfect, to be fair',
          description:
            'Tyre says "I am of perfect beauty." But in Scripture, beauty without humility becomes vanity. Perfection claimed for oneself is pride. The word yafah points not only to external beauty, but to a sense of completeness, of lacking nothing. This is Tyre&apos;s delusion.',
        },
        {
          kind: 'reflection',
          id: 'ezek26-beauty-pride',
          prompt: 'Where do you take pride in your own beauty, power, or success? What would it mean to hold these things lightly?',
        },
      ],
    },

    {
      ref: 'Ezekiel 26:15–21',
      title: 'The Lament Over Tyre',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            plain(15, 'Thus saith the Lord God to Tyrus; Shall not the isles shake at the sound of thy fall, when the wounded cry, when the slaughter is made in the midst of thee?'),
            plain(17, 'And all the princes of the sea shall come down from their thrones, and lay away their robes, and put off their broidered garments: they shall clothe themselves with trembling; they shall sit upon the ground, and shall tremble at every moment, and be astonied at thee.'),
            plain(18, 'Now shall the isles tremble in the day of thy fall; yea, the isles that are in the sea shall be troubled at thy desolation.'),
            plain(19, 'For thus saith the Lord God; When I shall make thee a desolate city, like the cities that are not inhabited; when I shall bring up the deep upon thee, and great waters shall cover thee;'),
            plain(20, 'When I shall bring thee down with them that descend into the pit, with the people of old time, and shall set thee in the low parts of the earth, in places desolate of old, with them that go down to the pit, that thou be not inhabited; and I shall set glory in the land of the living;'),
            plain(21, 'I will make thee a terror, and thou shalt be no more: though thou be sought for, yet shalt thou not be found again, saith the Lord God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezek26-princes-weep',
          html:
            'The princes of the sea will weep. These are the neighboring city-states, the trading partners, those who depended on Tyre&apos;s wealth and power. They remove their robes of office, clothe themselves with trembling, sit on the ground in the gesture of deepest mourning. Tyre&apos;s fall is not merely a local calamity. It shakes the whole trading world. What was stable becomes unstable. What was permanent becomes desolate.',
        },
        {
          kind: 'commentary',
          id: 'ezek26-terror',
          html:
            '"I will make thee a terror, and thou shalt be no more." Tyre will become a warning—the example of pride brought low. She sought to be of perfect beauty. Instead, she becomes a terror—a monument to what happens when the pride of human achievement is confronted by the God who alone endures.',
        },
        {
          kind: 'christ',
          id: 'ezek26-christ-glory',
          title: 'Christ Connection — The Glory That Endures',
          html:
            'Ezekiel contrasts Tyre&apos;s desolation with God&apos;s promise: "I shall set glory in the land of the living." Human glory, built on wealth and power, passes away. But the glory of God—revealed in Christ, His self-giving love, His willingness to empty Himself—this glory endures. Jesus emptied Himself, surrendered earthly glory, and in doing so revealed the only glory that matters: the glory of God.',
        },
        {
          kind: 'carry',
          html:
            'We live in a world that celebrates Tyre&apos;s virtues: power, wealth, beauty, the achievement of human ambition. But Ezekiel reminds us: such glory is fragile. It can be swept away like water. Only the glory of God—manifest in humility, in self-giving, in covenant fidelity—endures. Where are you building? On the rock of human pride? Or on the rock of God?',
        },
        {
          kind: 'reflection',
          id: 'ezek26-glory',
          prompt: 'What kind of glory are you pursuing? What would it mean to seek "glory in the land of the living"—the enduring glory of God—instead?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Thus saith the Lord God to Tyrus; Shall not the isles shake at the sound of thy fall, when the wounded cry, when the slaughter is made in the midst of thee?',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 26 · Study Guide',
  },

  hasHebrew: true,
};
