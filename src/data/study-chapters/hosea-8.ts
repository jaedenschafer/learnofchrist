import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const HOSEA_8: RichChapterContent = {
  bookSlug: 'hosea',
  bookName: 'Hosea',
  chapter: 8,

  estimatedMinutes: { 5: 1, 10: 2, 15: 4 },
  intros: [
    '"Set the trumpet to thy mouth. As an eagle against the house of the Lord." The judgment comes swiftly. Israel has broken the covenant. She has made kings without God&apos;s direction. She has cast a molten calf and worshipped it.',
    'The most famous verse stands at the center: "They have sown the wind, and they shall reap the whirlwind." This is not God&apos;s judgment imposed from outside but the natural consequence of unfaithfulness. You reap what you sow. Israel has sown wind — empty, worthless actions — and will reap the whirlwind — destruction that will sweep away everything.',
  ],

  bottomShare: {
    label: 'Share Hosea 8',
    quote:
      '"They have sown the wind, and they shall reap the whirlwind." Unfaithfulness brings not external punishment but the natural consequences of forsaking God.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Hosea 8 · Study Guide',
  },

  sections: [
    {
      ref: 'Hosea 8:1–6',
      title: 'The Trumpet of Judgment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(1, 'Set the trumpet to thy mouth. He shall come as an eagle against the house of the Lord, because they have transgressed my covenant, and trespassed against my law.'),
            plain(2, 'Israel shall cry unto me, My God, we know thee.'),
            plain(3, 'Israel hath cast off the thing that is good: the enemy shall pursue him.'),
            plain(4, 'They have set up kings, but not by me: they have made princes, and I knew it not: of their silver and their gold have they made them idols, that they may be cut off.'),
            {
              number: 5,
              spans: [
                t('Thy calf, O Samaria, hath cast thee off; mine anger is kindled against them: how long will it be ere they attain to innocency?'),
              ],
            },
            plain(6, 'For from Israel was it also: the workman made it; therefore it is not God: but the calf of Samaria shall be broken in pieces.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'hosea8-trumpet',
          html:
            'The trumpet sounds judgment. Israel has transgressed the covenant and trespassed against the law. Yet when danger comes, Israel will cry out, "My God, we know thee." But knowing God with the lips while casting off what is good is empty. The plea will not be heard because it comes without repentance.',
        },
        {
          kind: 'carry',
          html:
            'Israel set up kings without consulting God. She made princes without His knowledge. She took the silver and gold God gave her and fashioned idols — turning His gifts into objects of worship. What gifts has God given you that you have turned into false gods?',
        },
        {
          kind: 'reflection',
          id: 'hosea8-kings',
          prompt: 'Israel set up kings and princes without consulting God. Where are you making choices without seeking God&apos;s will? How are you relying on your own judgment instead of His?',
        },
      ],
    },

    {
      ref: 'Hosea 8:7–14',
      title: 'Sowing Wind, Reaping Whirlwind',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            {
              number: 7,
              spans: [
                t('For they have sown the wind, and they shall '),
                hp('reap the whirlwind', 'hosea8-whirlwind'),
                t(': it hath no stalk: the bud shall yield no meal: if so be it yield, the strangers shall swallow it up.'),
              ],
            },
            plain(8, 'Israel is swallowed up: now shall they be among the Gentiles as a vessel wherein is no pleasure.'),
            plain(9, 'For they are gone up to Assyria, a wild ass alone by himself: Ephraim hath hired lovers.'),
            plain(10, 'Yea, though they have hired among the nations, now will I gather them, and they shall sorrow a little for the burden of the king of princes.'),
            plain(11, 'Because Ephraim hath made many altars to sin, altars shall be unto him to sin.'),
            plain(12, 'I have written to him the great things of my law, but they were counted as a strange thing.'),
            plain(13, 'For the sacrifices of mine offerings they sacrifice flesh and eat it; but the Lord accepteth them not; now will he remember their iniquity, and visit their sins: they shall return to Egypt.'),
            plain(14, 'For Israel hath forgotten his Maker, and buildeth temples; and Judah hath multiplied fenced cities: but I will send a fire upon his cities, and it shall devour the palaces thereof.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'hosea8-whirlwind',
          html:
            'The verse "They have sown the wind, and they shall reap the whirlwind" speaks not of God imposing punishment but of consequences. Israel has sown emptiness — wind — and will reap destruction — the whirlwind. This is the law of the harvest written into creation itself. You reap what you sow.',
        },
        {
          kind: 'hebrew',
          id: 'hosea8-qatsir',
          title: 'Qatsir — "Reap"',
          script: 'קָצִיר',
          translit: '<strong>Qatsir</strong> · to reap; to harvest; to gather',
          description:
            'The word carries the sense not just of reaping but of inevitable harvest. What is sown must be reaped. The consequences are not external punishment but the natural outcome of unfaithfulness.',
        },
        {
          kind: 'carry',
          html:
            'Israel has forgotten her Maker. She has built temples and fortified cities, relying on her own strength and craftsmanship. But the fire will come. What are you building that you trust in instead of trusting in God? Where have you forgotten your Maker?',
        },
        {
          kind: 'reflection',
          id: 'hosea8-sow',
          prompt: 'What are you sowing? What will you reap? How does the law of the harvest call you to examine what you are doing?',
        },
      ],
    },

    {
      ref: 'Hosea 8 · All',
      title: 'The Law of Consequences',
      blocks: [
        {
          kind: 'commentary',
          id: 'hosea8-theme',
          html:
            'Hosea 8 teaches that unfaithfulness has natural consequences. God does not need to impose punishment from without. The wind you sow becomes the whirlwind you reap. The covenant you break becomes your own destruction. This is why returning to God is so urgent — not because God is arbitrary, but because the consequences are inevitable and severe.',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],
};
