import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Micah 4 — The Mountain of the Lord Exalted
 *
 * "They shall beat their swords into plowshares, and their spears into
 * pruning hooks." The mountain of the Lord&apos;s house shall be established as
 * the highest, and all nations shall flow unto it. A vision of peace and the
 * Messianic kingdom.
 */
export const MICAH_4: RichChapterContent = {
  bookSlug: 'micah',
  bookName: 'Micah',
  chapter: 4,

  estimatedMinutes: { beginner: 2, intermediate: 3, deep: 4 },
  intros: [
    'After the judgment and darkness of the earlier chapters, Micah lifts his eyes to a vision of what shall be in the latter days. The mountain of the Lord&apos;s house will be exalted above all other mountains. All nations will stream toward it, desiring to learn God&apos;s ways. The result is revolutionary: swords will become plowshares, spears will become pruning hooks, and nation will not lift up sword against nation anymore.',
    'This is not a vague spiritual vision. It is a concrete image of a transformed world where the tools of war become tools of cultivation, where the desire to destroy is replaced by the desire to build. And it rests on a single foundation: that God&apos;s law will go forth from Jerusalem, and His word from Zion.',
  ],

  sections: [
    {
      ref: 'Micah 4:1–5',
      title: 'The Vision of Peace',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(1, 'But in the last days it shall come to pass, that the mountain of the house of the Lord shall be established in the top of the mountains, and it shall be exalted above the hills; and people shall flow unto it.'),
            plain(2, 'And many nations shall come, and say, Come, and let us go up to the mountain of the Lord, and to the house of the God of Jacob; and he will teach us of his ways, and we will walk in his paths: for the law shall go forth of Zion, and the word of the Lord from Jerusalem.'),
            plain(3, 'And he shall judge among many people, and rebuke strong nations afar off; and they shall beat their swords into plowshares, and their spears into pruning hooks: nation shall not lift up a sword against nation, neither shall they learn war any more.'),
            plain(4, 'But they shall sit every man under his vine and under his fig tree; and none shall make them afraid: for the mouth of the Lord of hosts hath spoken it.'),
            plain(5, 'For all people will walk every one in the name of his god; and we will walk in the name of the Lord our God for ever and ever.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'micah4-exalted',
          html:
            'The mountain of the Lord&apos;s house will be established—not as one among many, but as the highest. It will be exalted above all hills. And people will flow toward it—not forced, not compelled, but drawn by desire to learn God&apos;s ways. This is a world transformed by the attraction of truth and the beauty of God&apos;s law.',
        },
        {
          kind: 'hebrew',
          id: 'micah4-yitku',
          title: 'Yitku — "Shall Beat"',
          script: 'יִתְכּוּ',
          translit: '<strong>Yitku</strong> · shall beat; shall forge; shall transform',
          description:
            'The Hebrew verb means not merely to reshape but to transform completely—to take the very instrument of war and remake it into an instrument of peace. It is a complete reversal of purpose and use.',
        },
        {
          kind: 'christ',
          id: 'micah4-christ-kingdom',
          title: 'Christ Connection — The Messianic Kingdom',
          html:
            'In Revelation 21, John sees a new heaven and new earth where God dwells with men. "And God shall wipe away all tears from their eyes; and there shall be no more death, neither sorrow, nor crying, neither shall there be any more pain." Christ&apos;s kingdom brings the peace that Micah envisions. Under His reign, war ceases, and all nations learn His ways.',
        },
        {
          kind: 'carry',
          html:
            'The vision of Micah teaches us that peace is not merely the absence of war. It is the presence of a transformed society where instruments of violence become instruments of growth, where people sit under their own vines unafraid, where justice and mercy reign.',
        },
        {
          kind: 'reflection',
          id: 'micah4-vine',
          prompt:
            'The image of sitting under your own vine and fig tree unafraid speaks of security and peace. What would it take for you to experience that kind of peace?',
        },
      ],
    },

    {
      ref: 'Micah 4:6–13',
      title: 'The Gathering and Strengthening of Zion',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(6, 'In that day, saith the Lord, will I assemble her that halteth, and I will gather her that is driven out, and her that I have afflicted;'),
            plain(7, 'And I will make her that halted a remnant, and her that was cast far off a strong nation: and the Lord shall reign over them in mount Zion from henceforth, even for ever.'),
            plain(8, 'And thou, O tower of the flock, the strong hold of the daughter of Zion, unto thee shall it come, even the first dominion; the kingdom shall come to the daughter of Jerusalem.'),
            plain(9, 'Now why dost thou cry out aloud? is there no king in thee? is thy counsellor perished? for pangs have taken thee as a woman in travail.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'micah-4-78mid-1',
          html:
            '&quot;In the last days&quot; — Micah pivots from present judgment to a vision of the mountain of the LORD lifted up, the nations streaming to it.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(10, 'Be in pain, and labour to bring forth, O daughter of Zion, like a woman in travail: for now shalt thou go forth out of the city, and thou shalt dwell in the field, and thou shalt go even to Babylon; there shalt thou be delivered; there the Lord shall redeem thee from the hand of thine enemies.'),
            plain(11, 'Now also many nations are gathered against thee, saying, Let her be defiled, and let our eye look upon Zion.'),
            plain(12, 'But they know not the thoughts of the Lord, neither understand they his counsel: for he shall gather them as the sheaves into the floor.'),
            plain(13, 'Arise and thresh, O daughter of Zion: for I will make thine horn iron, and I will make thy hooves brass: and thou shalt beat in pieces many people: and I will consecrate their gain unto the Lord, and their substance unto the Lord of the whole earth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'micah4-assemble',
          html:
            'God will assemble the scattered, gather the driven out, make the broken ones strong. The halted will become a remnant, the cast-off will become a strong nation. This is not comfort given without cost. Zion must labor like a woman in travail. She must go into captivity, to Babylon, before she is delivered. But the deliverance is sure.',
        },
        {
          kind: 'commentary',
          id: 'micah4-sheaves',
          html:
            'The nations gather against Zion, thinking to destroy her. But they do not know the thoughts of the Lord. They will be gathered as sheaves into the threshing floor—gathered by God, not for their own purpose, but for His. And Zion, given the strength of iron hooves and horns, will thresh the nations and consecrate their spoil to the Lord.',
        },
        {
          kind: 'christ',
          id: 'micah4-christ-reign',
          title: 'Christ Connection — Christ Reigns Over Zion Forever',
          html:
            '"The Lord shall reign over them in mount Zion from henceforth, even for ever." This is the promise fulfilled in Christ. He sits on the throne of David, ruling not just one nation but all nations. His kingdom knows no end. He gathers all peoples unto Himself.',
        },
        {
          kind: 'carry',
          html:
            'The suffering that precedes vindication—the labor pains that precede birth—is not wasted. It is the means by which new life comes forth. God&apos;s people must pass through trial and captivity before they experience full restoration. But restoration is certain.',
        },
        {
          kind: 'reflection',
          id: 'micah4-labor',
          prompt:
            'Are you in a season that feels like labor pains, like travail? How do you hold onto the promise of what comes after?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'They shall beat their swords into plowshares, and their spears into pruning hooks: nation shall not lift up a sword against nation.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Micah 4 · Study Guide',
  },

  hasHebrew: true,
};
