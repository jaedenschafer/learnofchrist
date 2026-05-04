import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 87 — "Glorious things are spoken of thee"
 *
 * A psalm of the sons of Korah, and it celebrates a city. Not for its walls,
 * not for its gates, but because it is the city of God. Glorious things are
 * spoken of it, not because of human achievement but because God has chosen
 * it. All nations will be born there, counted in the register of the people.
 * And the singers will say: "All my springs are in thee." This is a vision of
 * the heavenly city, the New Jerusalem, where all people from all nations
 * gather in the presence of God.
 */
export const PSALMS_87: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 87,

  estimatedMinutes: { beginner: 1, intermediate: 2, deep: 3 },
  topicTags: ['praise', 'lament', 'hope', 'protection'],
  opener: {
    topical: true,
    caption: 'Psalms 87',
  },
  intros: [
    'Psalm 87 is a celebration of Zion, the city of God. But it is not a celebration of stones and walls. It is a celebration of what Zion means: the place where God dwells, the gathering place of all people, the spiritual home of all nations. The psalmist speaks of glorious things that will be fulfilled in the coming kingdom of God.',
  ],

  sections: [
    {
      ref: 'Psalm 87:1–7',
      title: 'The City of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 87,
          lines: [
            plain(1, 'His foundation is in the holy mountains.'),
            plain(2, 'The Lord loveth the gates of Zion more than all the dwellings of Jacob.'),
            plain(3, 'Glorious things are spoken of thee, O city of God. Selah.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-87-78mid-1',
          html:
            'The foundation of Zion&apos;s glory opens into names of those who belong and promise of cosmic celebration. Ground becomes community. [res:sefaria-psalm-87]',
        },
        {
          kind: 'scripture',
          chapter: 87,
          lines: [
            plain(4, 'I will make mention of Rahab and Babylon to them that know me: behold Philistia, and Tyre, with Ethiopia; this man was born there.'),
            plain(5, 'And of Zion it shall be said, This and that man was born in her: and the highest himself shall establish her.'),
            plain(6, 'The Lord shall count, when he writeth up the people, that this man was born there. Selah.'),
            plain(7, 'As well the singers as the players on instruments shall be there: all my springs are in thee.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps87-foundation',
          html:
            'The city of God is not built on human genius or power. Its foundation is in the holy mountains. It is built by God, founded by God, established by God. This is why it cannot fall. This is why it endures. Not because of the skill of its architects, but because God is its foundation[res:bibleodyssey-korah-singers].',
        },
        {
          kind: 'commentary',
          id: 'ps87-gates',
          html:
            'The Lord loves the gates of Zion. Why? Not because they are more beautiful than other gates, but because they are the gates of the city where He dwells. What God loves is not the physical structure but what it represents: the place where His presence is found.',
        },
        {
          kind: 'commentary',
          id: 'ps87-nations',
          html:
            'The psalmist lists the nations: Rahab (Egypt), Babylon, Philistia, Tyre, Ethiopia. These are not Israel&apos;s friends. Some are Israel&apos;s enemies. Yet the psalmist says, "This man was born there"—meaning in Zion. All nations, even former enemies, will be born in Zion. They will be citizens of the city of God. This is a vision of radical inclusion, of all people welcomed into God&apos;s kingdom.',
        },
        {
          kind: 'hebrew',
          id: 'ps87-tzion',
          title: 'Tzion — "Zion" (God&apos;s Dwelling)',
          script: 'צִיּוֹן',
          translit: '<strong>Tzion</strong> · Zion; the holy mountain; God&apos;s dwelling place',
          description:
            'Zion is not merely a geographic location but a spiritual reality. It is the place where God dwells, where His presence is most fully revealed, where His people gather to worship Him.',
        },
        {
          kind: 'christ',
          id: 'ps87-christ-city',
          title: 'Christ Connection — The New Jerusalem',
          html:
            'In Revelation 21, John sees the New Jerusalem coming down from heaven, prepared as a bride adorned for her husband. All nations walk in its light. The gates never close. It is the ultimate fulfillment of what Zion foreshadows. Christ is the foundation of this city. He is the light. He is the reason all nations gather there. [res:bible-odyssey-psalm-87]',
        },
        {
          kind: 'reflection',
          id: 'ps87-born-there',
          prompt: 'What does it mean to be "born" in Zion, to become a citizen of the city of God? How does that identity shape who you are?',
        },
        {
          kind: 'carry',
          html:
            'There will be a moment this week when you feel like you don&apos;t belong. In a room full of people who know each other. In a conversation you don&apos;t understand. Among the successful, the brilliant, the thin, the healed. You&apos;ll feel like the outsider, the one who was born somewhere else. In that moment, Psalm 87 whispers: this and that man was born there. You were born in Zion. Your truest citizenship, your deepest belonging, is to the city of God. That is the place that cannot be taken from you.',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Glorious things are spoken of thee, O city of God. All my springs are in thee.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 87 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalm-87',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 87 with Jewish Commentary',
      url: 'https://www.sefaria.org/Psalms.87',
      description: 'Hebrew text with rabbinic and medieval Jewish commentaries.',
    },
    {
      id: 'bible-odyssey-psalm-87',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Psalm 87 Study Guide',
      url: 'https://www.bibleodyssey.org/?q=psalm+87',
      description: 'Thematic study and historical background from the Society of Biblical Literature.',
    },
    {
      id: 'bibleodyssey-korah-singers',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'The Sons of Korah',
      url: 'https://www.bibleodyssey.org/dictionary/korah/',
      description: 'SBL entry on the Korahite guild of temple singers and the psalms attributed to them.',
    },

  ],

};
