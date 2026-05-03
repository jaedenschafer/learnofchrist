import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ezekiel 48 — The City Named "The Lord Is There"
 *
 * The final chapter of Ezekiel completes the vision. The land is divided among
 * the tribes. The city of Jerusalem is renamed: "Jehovah Shammah"—The Lord Is There.
 * After centuries of exile, after the removal of God&apos;s presence, this is the
 * ultimate promise: God will dwell in your midst. You will not be orphaned.
 * The Lord is there.
 */
export const EZEKIEL_48: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 48,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  intros: [
    'Ezekiel&apos;s vision closes not with abstract theology but with a new name. "Jehovah Shammah"—The Lord Is There. This is not merely a poetic title. It is the entire promise of God distilled into four words. God is no longer distant. He is not absent. He is present. He dwells in your midst. After exile and exile and the long dark night of separation, this is the word that carries the exiles through: God is there.',
    'The city is described with precise measurements, but the measurements matter less than the name. Everything in the vision—the temple, the land, the river, the priests, the just weights and measures—all of it leads to this: The Lord is there. This is the name Israel will carry into the future. This is the promise that will sustain them. And this is the promise that echoes forward to Revelation, where John hears: "Behold, the tabernacle of God is with men, and he will dwell with them." The promise never changes. The Lord is there.',
  ],

  sections: [
    {
      ref: 'Ezekiel 48:1–29',
      title: 'The Land Divided by Tribes',
      blocks: [
        {
          kind: 'scripture',
          chapter: 48,
          lines: [
            plain(1, 'Now these are the names of the tribes. From the north end to the coast of the way of Hethlon, as one goeth to Hamath, Hazarenan, the border of Damascus northward, to the coast of Hamath; for these are his sides east and west; a portion for Dan.'),
            plain(8, 'And by the border of Judah, from the east side unto the west side, shall be the offering which ye shall offer of five and twenty thousand reeds in breadth, and in length as one of the other parts, from the east side unto the west side: and the sanctuary shall be in the midst of it.'),
            plain(15, 'And the five thousand, that are left in the breadth over against the five and twenty thousand, shall be a profane place for the city, for dwellings, and for suburbs: and the city shall be in the midst thereof.'),
            plain(30, 'And these are the goings out of the city on the north side, four thousand and five hundred measures.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezekiel48-territories',
          html: 'The tribes are named in order, each receiving their portion. After generations of exile, after the promises made and seemingly broken, here at last is the allocation. Each tribe returns to its territory. Order is restored. The promise is fulfilled[res:bibleodyssey-ezekiel].',
        },
        {
          kind: 'commentary',
          id: 'ezekiel48-center',
          html: 'The sanctuary is at the center. The city is at the center of the sanctuary. Everything radiates from the holy place. This is the order of renewed Israel: God at the center, the city around Him, the tribes radiating outward. The holy is not marginal. It is central[res:ezekiel-revelation-intertextual].',
        },
        {
          kind: 'hebrew',
          id: 'ezekiel48-shemmah',
          title: 'Shammah — "There" ',
          script: 'שָׁמָּה',
          translit: '<strong>Shammah</strong> · there; in that place; present',
          description:
            'A single word that encompasses the entire vision: God is there. Present. Not absent. Not distant. There.',
        },
        {
          kind: 'christ',
          id: 'ezekiel48-christ-presence',
          title: 'Christ Connection — God&apos;s Eternal Presence',
          html: 'In Matthew 28:20, Christ says to His disciples: "Lo, I am with you alway, even unto the end of the world." And in John 14:18, He promises: "I will not leave you comfortless: I will come to you." This is the fulfillment of Ezekiel&apos;s promise. Christ is Immanuel—God with us. His presence is not confined to a building or a city. It is available to all who trust in Him.',
        },
        {
          kind: 'carry',
          html: 'The vision began with the removal of God&apos;s presence—the glory departing from the temple. It ends with the absolute promise of that presence returning and remaining forever. In between is the journey of exile, judgment, repentance, and restoration. Your own spiritual journey may follow this pattern.',
        },
        {
          kind: 'reflection',
          id: 'ezekiel48-god-there',
          prompt: 'When have you felt that God was far away? Can you believe now that He is there, present, in your midst?',
        },
      ],
    },

    {
      ref: 'Ezekiel 48:30–35',
      title: 'Jehovah Shammah',
      blocks: [
        {
          kind: 'scripture',
          chapter: 48,
          lines: [
            plain(30, 'And these are the goings out of the city on the north side, four thousand and five hundred measures.'),
            plain(33, 'And at the south side, four thousand and five hundred measures: and three gates; one gate of Simeon, one gate of Issachar, one gate of Zebulun.'),
            plain(34, 'At the east side four thousand and five hundred: and three gates; and one gate of Joseph, one gate of Benjamin, one gate of Dan.'),
            plain(35, 'It was round about eighteen thousand measures: and the name of the city from that day shall be, The Lord Is There.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezekiel48-gates',
          html:
            'The city has twelve gates—one for each tribe. Every tribe has direct access to the city. No one is excluded. No border stands against the people of God. The gates are open to all who bear the name of the tribes.',
        },
        {
          kind: 'commentary',
          id: 'ezekiel48-name',
          html:
            'The final sentence is the climax of the entire book: "The name of the city from that day shall be, The Lord Is There." Not a new building. Not a new king. A new name. The name reveals the nature. And the nature is God&apos;s presence.',
        },
        {
          kind: 'carry',
          html:
            'The book of Ezekiel begins in exile, in a foreign land, with the glory of God removed. It ends in restoration, with God dwelling once more, with a city renamed to declare His presence. This is the arc of God&apos;s faithfulness: judgment followed by mercy, exile followed by return, loss followed by restoration.',
        },
        {
          kind: 'reflection',
          id: 'ezekiel48-restored',
          prompt: 'What in your life has been like exile? What has been removed? Can you see the possibility of restoration, and God being there in the center?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The name of the city from that day shall be, The Lord Is There.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 48 · Study Guide',
  },  resources: [
    {
      id: 'bibleodyssey-ezekiel',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Ezekiel',
      url: 'https://www.bibleodyssey.org/passages/main-articles/ezekiel/',
      description: 'Peer-reviewed SBL entry on the prophet Ezekiel and the Babylonian exile.',
    },
    {
      id: 'ezekiel-revelation-intertextual',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Ezekiel Temple Vision ↔ Revelation 21-22',
      url: 'https://intertextual.bible/text/ezekiel-40/revelation-21',
      description: 'Side-by-side comparison of Ezekiel&apos;s temple vision and John&apos;s new creation.',
    }
  ],

  hasHebrew: true,
};
