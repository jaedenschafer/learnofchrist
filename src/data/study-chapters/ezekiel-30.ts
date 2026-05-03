import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Ezekiel 30 — The Day of the Lord Against Egypt
 *
 * Judgment continues and deepens. "The day of the Lord is near, even the day
 * of clouds." God will cut off the multitude of Egypt. "I will also destroy the
 * idols, and I will cause their images to cease out of Noph." All of Egypt&apos;s
 * pride—her military might, her wealth, her idols—will be destroyed. "The young
 * men of Aven and of Pibeseth shall fall by the sword: and these cities shall
 * go into captivity." And "I will set fire in Egypt." The judgment is
 * comprehensive. Every city, every stronghold, every source of confidence will
 * be consumed. Yet this judgment is part of a universal divine plan. God acts
 * not to destroy for destruction&apos;s sake, but because "the day of the Lord" is
 * coming—a day of reckoning for all nations, a time when all will know that He
 * is Lord.
 */
export const EZEKIEL_30: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 30,

  estimatedMinutes: { 5: 1, 10: 3, 15: 4 },
  intros: [
    'Ezekiel 30 completes the judgment oracle against Egypt with language of universal judgment. "The day of the Lord is near, even the day of clouds; it shall be the time of the heathen." What is spoken of Egypt is set within a larger framework—God&apos;s ultimate reckoning with all nations. The judgment of Egypt is a sign of the Day of the Lord itself.',
    'The chapter catalogs the destruction methodically: idols destroyed, cities burned, princes slain, the multitude cut off. But beneath the list of devastation lies a promise: "They shall know that I am the Lord." The judgment, terrible as it is, is God&apos;s way of forcing recognition of His power. When all earthly supports have been stripped away, then the nations will know that God alone is Lord.',
  ],

  sections: [
    {
      ref: 'Ezekiel 30:1–19',
      title: 'The Day of Clouds, The Reckoning',
      blocks: [
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            plain(2, 'Son of man, prophesy and say, Thus saith the Lord God; Howl ye, Woe worth the day!'),
            plain(3, 'For the day is near, even the day of the Lord is near, a cloudy day; it shall be the time of the heathen.'),
            plain(8, 'And they shall know that I am the Lord, when I shall set fire in Egypt, and when all her helpers shall be destroyed.'),
            plain(10, 'Thus saith the Lord God; I will also destroy the idols, and I will cause their images to cease out of Noph; and there shall be no more a prince of the land of Egypt: and I will put a fear in the land of Egypt.'),
            plain(12, 'And I will make the rivers dry, and sell the land into the hand of the wicked: and I will make the land waste, and all that is therein, by the hand of strangers: I the Lord have spoken it.'),
            plain(15, 'And I will pour my wrath upon Sin, the strength of Egypt; and I will cut off the multitude of No.'),
            plain(18, 'At Tehaphnehes also the day shall be darkened, when I shall break there the yokes of Egypt: and the pomp of her strength shall cease in her: as for her, a cloud shall cover her, and her daughters shall go into captivity.'),
            plain(19, 'Thus will I execute judgments in Egypt: and they shall know that I am the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezek30-day-of-lord',
          html:
            '"The day of the Lord is near, a cloudy day; it shall be the time of the heathen." The prophecy against Egypt is situated within the larger frame of the Day of the Lord—God&apos;s ultimate judgment of all nations. The clouds are a sign of God&apos;s presence, but also of judgment. What clouds over Egypt is the coming reckoning.',
        },
        {
          kind: 'commentary',
          id: 'ezek30-complete',
          html:
            'The judgment is comprehensive. Idols are destroyed—all the religious confidence that Egypt has placed in her gods. Cities are burned. The Nile rivers are dried up—the very source of Egypt&apos;s fertility and security. Princes fall. Multitudes are cut off. From north to south, from city to city, judgment sweeps through. There is nowhere to hide, nothing to trust in that will not be taken away.',
        },
        {
          kind: 'hebrew',
          id: 'ezek30-day-yom',
          title: 'Yom HaShoah — "Day of the Lord" (The Reckoning)',
          script: 'יוֹם הַשׁוֹאָה',
          translit: '<strong>Yom</strong> · day; <strong>Shoah</strong> · ruin, desolation',
          description:
            'The "day of the Lord" is a day of reckoning, of judgment, of the unveiling of God&apos;s power. It is the day when what is hidden is made manifest, when all earthly powers are brought low before God.',
        },
        {
          kind: 'reflection',
          id: 'ezek30-what-day',
          prompt: 'The Day of the Lord is both judgment and revelation. What will it look like when all nations stand before God and acknowledge His lordship?',
        },
      ],
    },

    {
      ref: 'Ezekiel 30:20–26',
      title: 'The Breaking of Pharaoh\'s Arm',
      blocks: [
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            plain(21, 'Son of man, I have broken the arm of Pharaoh king of Egypt; and, lo, it shall not be bound up to be healed, neither shall a plaister be laid upon it to bind it, so that it may be strong to hold the sword.'),
            plain(24, 'And I will strengthen the arms of the king of Babylon, and put my sword in his hand: but I will break Pharaoh&apos;s arms; and he shall groan before him with the groanings of a deadly wounded man.'),
            plain(25, 'But I will strengthen the arms of the king of Babylon, and the arms of Pharaoh shall fall down; and they shall know that I am the Lord: when I shall put my sword into the hand of the king of Babylon, and he shall stretch it out upon the land of Egypt.'),
            plain(26, 'And I will scatter the Egyptians among the nations, and disperse them through the countries; and they shall know that I am the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezek30-broken-arm',
          html:
            'God says: "I have broken the arm of Pharaoh." The arm speaks to power—the ability to wield the sword, to strike, to defend. Pharaoh&apos;s military might is broken. "It shall not be bound up to be healed." The injury is permanent. No physician can make it whole again. Pharaoh will be powerless.',
        },
        {
          kind: 'commentary',
          id: 'ezek30-groaning',
          html:
            '"He shall groan before him with the groanings of a deadly wounded man." This is not mere political defeat. This is anguish, the groan of one near death. Pharaoh will experience the pain of his own powerlessness. Meanwhile, God strengthens the arms of the king of Babylon. The transfer of power is complete. What was strong is made weak. What was weak is made strong.',
        },
        {
          kind: 'christ',
          id: 'ezek30-christ-kingdom',
          title: 'Christ Connection — The Kingdom That Cannot Be Shaken',
          html:
            'All earthly kingdoms rise and fall. Pharaoh&apos;s arm is broken. Babylon&apos;s arm grows strong. But in Christ, we are promised a kingdom "which cannot be moved" (Hebrews 12:28). Jesus said, "My kingdom is not of this world." It is not subject to the rise and fall of earthly powers. It endures forever because it is rooted not in military might, but in the love and faithfulness of God made manifest in Christ.',
        },
        {
          kind: 'carry',
          html:
            'We live in a world of competing powers, each claiming strength and permanence. But Scripture teaches: all earthly power is temporary. What endures is the kingdom of God. If we build on earthly power, we build on sand. If we build on the Rock—on Christ and His kingdom—we build on what cannot be shaken.',
        },
        {
          kind: 'reflection',
          id: 'ezek30-allegiance',
          prompt: 'To which kingdom do you pledge your primary allegiance? Where are you tempted to place your trust in earthly powers rather than in God?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The day is near, even the day of the Lord is near, a cloudy day; it shall be the time of the heathen...They shall know that I am the Lord.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 30 · Study Guide',
  },

  hasHebrew: true,
};
