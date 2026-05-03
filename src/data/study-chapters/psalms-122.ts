import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 122 — I Was Glad When They Said Unto Me
 *
 * "I was glad when they said unto me, Let us go into the house of the Lord."
 * A song of ascents celebrating arrival at the temple.
 * "Pray for the peace of Jerusalem: they shall prosper that love thee."
 * Christ connection: pilgrimage to God's house, journey to the place
 * where God dwells; Christ the door through whom we enter.
 */
export const PSALMS_122: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 122,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  intros: [
    'The pilgrim journey has reached its destination. Psalm 122 is a hymn of arrival and belonging. "I was glad when they said unto me, Let us go into the house of the Lord." The gladness spoken of here is not mere pleasure. It is a deep satisfaction, a rightness, a sense of coming home. The psalmist stands within the gates of Jerusalem, the city built compactly together, and sees in it a symbol of unity—all the tribes gathering in one place, united in worship, bound together by the presence of God.',
  ],

  sections: [
    {
      ref: 'Psalm 122:1–9',
      title: 'Pray for the Peace of Jerusalem',
      blocks: [
        {
          kind: 'scripture',
          chapter: 122,
          lines: [
            plain(1, 'I was glad when they said unto me, Let us go into the house of the Lord.'),
            plain(2, 'Our feet shall stand within thy gates, O Jerusalem.'),
            plain(3, 'Jerusalem is builded as a city that is compact together:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-122-78mid-1',
          html:
            'Joy at entering Jerusalem&apos;s gates opens into prayer for its peace and blessing. Arrival becomes intercession. [res:sefaria-psalm-122]',
        },
        {
          kind: 'scripture',
          chapter: 122,
          lines: [
            plain(6, 'Pray for the peace of Jerusalem: they shall prosper that love thee.'),
            plain(7, 'Peace be within thy walls, and prosperity within thy palaces.'),
            plain(8, 'For my brethren and companions&apos; sakes, I will now say, Peace be within thee.'),
            plain(9, 'Because of the house of the Lord our God I will seek thy good.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps122-glad',
          html:
            'The gladness the psalmist expresses is visceral. Someone has said to him, "Let us go into the house of the Lord," and his response is immediate and enthusiastic. This is not reluctant obedience, not mere duty. This is desire. The house of the Lord is the place where heaven and earth meet, where God&apos;s presence dwells, where the fragmented and scattered are drawn into unity[res:iaa-pilgrimage-psalms].',
        },
        {
          kind: 'commentary',
          id: 'ps122-compact',
          html:
            '"Jerusalem is builded as a city that is compact together." The city is not spread out in isolation. It is drawn close, pressed together, a community made one. This compactness symbolizes the unity of the tribes, the gathering of God&apos;s people into one place, the abolition of separation. Where the tribes have scattered, Jerusalem calls them back to gather.',
        },
        {
          kind: 'commentary',
          id: 'ps122-peace',
          html:
            '"Pray for the peace of Jerusalem." The psalmist shifts from personal joy to intercession. He does not merely rejoice in his own arrival. He prays for the city, for its peace, for the prosperity of those who love it. This is prayer that extends beyond the self to encompass the entire community. "They shall prosper that love thee"—the city&apos;s good is linked to the love of those who dwell in it and visit it.',
        },
        {
          kind: 'christ',
          id: 'ps122-christ-house',
          title: 'Christ Connection — The House of God',
          html:
            'Jesus declared Himself to be the true temple (John 2:19–21). Where the Old Covenant temple was a place where God dwelt, Christ is the living house of God, the place where heaven and earth meet. "I am the door," He said (John 10:7–9). To enter into Christ is to enter into the house of God. To gather in His name is to find the unity that Jerusalem symbolized—the scattered made one, the broken made whole, all nations gathering before the God who dwells in flesh. [res:bible-odyssey-psalm-122]',
        },
        {
          kind: 'carry',
          html:
            'Psalm 122 speaks to the joy of belonging—of being called to gather with others in the presence of God. It speaks to the power of community, of unity, of standing together in worship. But it also invites you to pray for the peace of the places you love, to work toward the good of the communities you belong to, and to recognize that your own peace is intertwined with the peace of the whole.',
        },
        {
          kind: 'reflection',
          id: 'ps122-peace-2',
          prompt:
            'When have you experienced genuine gladness at being called to gather with others in God&apos;s presence? What is the difference between praying for your own peace and praying for the peace of the community? How might your perspective change if you viewed your own well-being as bound up with the well-being of the whole?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I was glad when they said unto me, Let us go into the house of the Lord. Pray for the peace of Jerusalem.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 122 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalm-122',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 122 with Jewish Commentary',
      url: 'https://www.sefaria.org/Psalms.122',
      description: 'Hebrew text with rabbinic and medieval Jewish commentaries.',
    },
    {
      id: 'bible-odyssey-psalm-122',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Psalm 122 Study Guide',
      url: 'https://www.bibleodyssey.org/?q=psalm+122',
      description: 'Thematic study and historical background from the Society of Biblical Literature.',
    },
    {
      id: 'iaa-pilgrimage-psalms',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'Pilgrimage Roads to Jerusalem',
      url: 'https://www.antiquities.org.il/',
      description: 'Archaeological survey of the ascent roads pilgrims traveled while singing the Songs of Ascent.',
    },

  ],

};
