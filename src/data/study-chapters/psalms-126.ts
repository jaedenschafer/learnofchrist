import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 126 — When the Lord Turned Again the Captivity of Zion
 *
 * "When the Lord turned again the captivity of Zion, we were like them that dream."
 * A song of ascents celebrating God's restoration of His people.
 * "They that sow in tears shall reap in joy. He that goeth forth and weepeth,
 * bearing precious seed, shall doubtless come again with rejoicing, bringing his sheaves with him."
 * Christ connection: tears now, joy at harvest; suffering and resurrection;
 * the promise that sorrow gives way to eternal joy.
 */
export const PSALMS_126: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 126,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  intros: [
    'Psalm 126 celebrates a return, a restoration, an undoing of captivity. The people have been in exile, separated from their land, their temple, their home. And then—the Lord &quot;turns again&quot; their captivity. They are freed. They come home. The joy is so overwhelming that it seems unreal, a dream. "We were like them that dream." They had almost given up hope. But hope has been vindicated. They have returned. Yet the psalm is not merely a song of past deliverance. It is a meditation on the pattern God establishes in the world: sowing in tears, reaping in joy. Suffering that leads to triumph. Winter that precedes spring.',
  ],

  sections: [
    {
      ref: 'Psalm 126:1–6',
      title: 'From Tears to Harvest',
      blocks: [
        {
          kind: 'scripture',
          chapter: 126,
          lines: [
            plain(1, 'When the Lord turned again the captivity of Zion, we were like them that dream.'),
            plain(2, 'Then was our mouth filled with laughter, and our tongue with singing: then said they among the heathen, The Lord hath done great things for them.'),
            plain(3, 'The Lord hath done great things for us; whereof we are glad.'),
            plain(4, 'Turn again our captivity, O Lord, as the streams in the south.'),
            plain(5, 'They that sow in tears shall reap in joy.'),
            plain(6, 'He that goeth forth and weepeth, bearing precious seed, shall doubtless come again with rejoicing, bringing his sheaves with him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps126-dream',
          html:
            'The psalmist reaches for the word "dream" to capture the unreality of deliverance. They had been captive so long that freedom seemed impossible, unreal, like the impossible visions of sleep. And then it happened. The Lord acted. The impossible became real. The dream became memory. Yet the sense of wonder persists—how can this be real?',
        },
        {
          kind: 'commentary',
          id: 'ps126-laughter',
          html:
            'The response is laughter and singing. Not restrained, not modest, but overflowing joy. The mouths that had been silent in captivity are filled with laughter. The tongues that had been heavy with sorrow are filled with singing. And others—the nations, the heathen—witness this transformation and acknowledge: "The Lord hath done great things for them." The deliverance is so complete, so obvious, that even outsiders must acknowledge God&apos;s power.',
        },
        {
          kind: 'commentary',
          id: 'ps126-sow',
          html:
            'But then the psalm shifts. "They that sow in tears shall reap in joy." The psalmist moves from remembrance of a past deliverance to an eternal principle. There is a divine pattern woven into the very structure of the world: sowing in tears yields harvests of joy. The farmer goes forth weeping, bearing seed—precious seed, valuable seed—and plants it in hope. But hope requires faith, requires waiting, requires endurance through the unknown period between planting and harvest.',
        },
        {
          kind: 'commentary',
          id: 'ps126-harvest',
          html:
            '"He that goeth forth and weepeth, bearing precious seed, shall doubtless come again with rejoicing, bringing his sheaves with him." The promise is absolute. Not "may come," not "might come," but "shall doubtless come." The harvester will return. He will return with rejoicing. He will bring his sheaves. The suffering of the sowing is real. The work is hard. The tears are genuine. Yet they are not the final word. Joy comes. Harvest comes. The cycles of nature testify to God&apos;s faithfulness.',
        },
        {
          kind: 'christ',
          id: 'ps126-christ-harvest',
          title: 'Christ Connection — The Harvest of Resurrection',
          html:
            'John 12:24 records Jesus&apos; teaching: "Except a corn of wheat fall into the ground and die, it abideth alone: but if it die, it bringeth forth much fruit." Christ&apos;s suffering and death were the seed cast into the ground. His resurrection is the harvest, the overflowing sheaves of redemption brought back in rejoicing. Believers follow the same pattern—dying to self, sowing in tears, yet reaping the harvest of eternal life in the resurrection.',
        },
        {
          kind: 'carry',
          html:
            'Psalm 126 speaks to anyone in the midst of sowing, in the difficult season between planting and harvest. You may be weeping. You may be bearing a precious burden. You may be uncertain whether your sowing will yield any fruit. The psalm calls you to hold fast to the promise: you shall reap in joy. The cycle is sure. The pattern is woven into creation itself. Sorrow is not the end. Harvest comes.',
        },
        {
          kind: 'reflection',
          id: 'ps126-tears',
          prompt:
            'What seed are you sowing that requires tears? Where are you in the cycle—planting, waiting, harvesting? What would it mean to trust that sorrow now will yield joy later? How might that change the way you endure difficulty?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'They that sow in tears shall reap in joy. He that goeth forth and weepeth, bearing precious seed, shall doubtless come again with rejoicing, bringing his sheaves with him.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 126 · Study Guide',
  },
};
