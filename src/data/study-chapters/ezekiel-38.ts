import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ezekiel 38 — The Invasion of Gog
 *
 * A mysterious figure, Gog of Magog, rises with an army against Israel. The nations
 * gather for final battle. But God will intervene. He will bring Gog down upon the
 * mountains of Israel. This prophecy has been interpreted in many ways, but it
 * speaks to the ultimate conflict between God&apos;s kingdom and the forces arrayed
 * against it. It points to Revelation 20, where Christ conquers His enemies.
 */
export const EZEKIEL_38: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 38,

  estimatedMinutes: { 5: 1, 10: 3, 15: 4 },
  intros: [
    'After the restoration of Israel, after the dry bones have been made alive, after the covenant of peace has been established, a new threat emerges. Gog, a mysterious figure from the north—the name is perhaps symbolic or perhaps a tyrant of whom the ancients knew—gathers an army of immense nations: Meshech, Tubal, Persia, Ethiopia, and Libya. They march toward restored Israel, imagining they will seize the wealth of a recovered people. But what they do not reckon with is God.',
    'This is the final battle, the ultimate test of God&apos;s power. Will the restored kingdom be overthrown? Will the covenant of peace be broken? No. God will bring Gog down. He will shake the mountains. He will rain fire and brimstone. His victory will be absolute and undeniable. All the nations will know that He alone is God.',
  ],

  sections: [
    {
      ref: 'Ezekiel 38:1–13',
      title: 'Gog Rises',
      blocks: [
        {
          kind: 'scripture',
          chapter: 38,
          lines: [
            plain(1, 'And the word of the Lord came unto me, saying,'),
            plain(2, 'Son of man, set thy face against Gog, the land of Magog, the chief prince of Meshech and Tubal: and prophesy against him,'),
            plain(3, 'And say, Thus saith the Lord God; Behold, I am against thee, O Gog, the chief prince of Meshech and Tubal:'),
            plain(11, 'And thou shalt say, I will go up to the land of unwalled villages; I will go to them that are at rest, that dwell safely, all of them dwelling without walls, and having neither bars nor gates,'),
            plain(12, 'To take a spoil, and to take a prey; to turn thine hand upon the desolate places that are now inhabited, and upon the people that are gathered out of the nations, which have gotten cattle and goods, that dwell in the midst of the land.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezekiel38-gog',
          html:
            'Gog is not named elsewhere in Scripture. His identity remains ambiguous. Yet he represents a principle: the gathering of all hostile forces against God&apos;s people in the end times. He comes from the north, the place of cold and darkness in biblical geography. He is drawn to attack Israel not by God, but seemingly by his own cupidity and ambition. Yet God will use this very impulse to bring judgment.',
        },
        {
          kind: 'commentary',
          id: 'ezekiel38-safe',
          html:
            'Gog is attracted to Israel precisely because Israel dwells in security—without walls, without bars, without gates. They have peace because they trust in God, not in fortifications. Gog sees this as weakness and opportunity. He does not understand that the protection of Israel is not in walls, but in the hand of God.',
        },
        {
          kind: 'hebrew',
          id: 'ezekiel38-boggim',
          title: 'Boggim — "Magog" ',
          script: 'מָגוֹג',
          translit: '<strong>Magog</strong> · land of Gog; the north; enemy nations',
          description:
            'The term suggests a kingdom of enemies, a confederation of hostile forces. In apocalyptic literature, it becomes a symbol of all forces arrayed against God.',
        },
        {
          kind: 'christ',
          id: 'ezekiel38-christ-final',
          title: 'Christ Connection — The Final Battle',
          html:
            'In Revelation 20:7–9, John sees Gog and Magog gathering for the final battle after a thousand years of peace. But Christ defeats them. Fire comes down from heaven and destroys them. This is the ultimate vindication: evil gathers one last time, and Christ crushes it entirely. There is no ongoing conflict. Victory is complete and final.',
        },
        {
          kind: 'carry',
          html:
            'The comfort in Ezekiel&apos;s vision is this: God does not pretend there will be no opposition. But neither does He fear it. He says: "I am against thee, O Gog." The outcome is not in doubt. God will bring Gog low. Trust in His ultimate power, not in your own military or political might.',
        },
        {
          kind: 'reflection',
          id: 'ezekiel38-trust-walls',
          prompt: 'What "walls" do you build to feel safe, and do you trust them more than you trust God? What would it look like to dwell in safety without walls?',
        },
      ],
    },

    {
      ref: 'Ezekiel 38:14–23',
      title: 'God Brings Gog Down',
      blocks: [
        {
          kind: 'scripture',
          chapter: 38,
          lines: [
            plain(16, 'And thou shalt come up against my people of Israel, as a cloud to cover the land; it shall be in the latter days, and I will bring thee against my land, that the heathen may know me, when I shall be sanctified in thee, O Gog, before their eyes.'),
            plain(19, 'For in my jealousy and in the fire of my wrath have I spoken, Surely in that day there shall be a great shaking in the land of Israel;'),
            plain(21, 'And I will call for a sword against him throughout all my mountains, saith the Lord God: every man&apos;s sword shall be against his brother.'),
            plain(22, 'And I will plead against him with pestilence and with blood; and I will rain upon him, and upon his bands, and upon the many people that are with him, an overflowing rain, and great hailstones, fire, and brimstone.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezekiel38-shaking',
          html:
            'The response of God is not a military maneuver. It is cosmic intervention. The earth itself shakes. Fire and brimstone rain from heaven. The enemies turn on each other. This is not warfare as humans know it. This is divine judgment.',
        },
        {
          kind: 'commentary',
          id: 'ezekiel38-sanctified',
          html:
            'God says: "I will be sanctified in thee, O Gog, before their eyes." Gog is the instrument by which God shows His holiness. His destruction, his utter defeat, will be the demonstration that God is holy, that God is sovereign, that God alone rules over all nations.',
        },
        {
          kind: 'carry',
          html:
            'In times when the world seems to be arraying itself against truth and righteousness, this vision reminds us that God is not bewildered or overtaken. He sees the gathering of forces. He knows the end before the beginning. His power is not limited by the armies of men.',
        },
        {
          kind: 'reflection',
          id: 'ezekiel38-overthrow',
          prompt: 'What forces in the world seem overwhelming to you? Can you imagine God saying to them, as He says to Gog: "I am against thee"?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I am against thee, O Gog...I will be sanctified in thee before their eyes.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 38 · Study Guide',
  },

  hasHebrew: true,
};
