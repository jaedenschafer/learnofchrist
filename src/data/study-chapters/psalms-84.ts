import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 84 — "How amiable are thy tabernacles"
 *
 * One of the most beloved psalms in Scripture opens with an aching question:
 * "How amiable are thy tabernacles, O Lord of hosts!" A soul longs for the
 * presence of God. What is a tabernacle but the place where God has made His
 * dwelling? And the psalmist cannot rest until he is there, dwelling in that
 * presence. "A day in thy courts is better than a thousand." Here is the
 * deepest longing of the human heart—not possession, not power, not pleasure,
 * but nearness to God. And here is the promise: those who seek Him will find
 * Him, and in His presence they will lack no good thing.
 */
export const PSALMS_84: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 84,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 5 },
  intros: [
    'This psalm is a song of the sons of Korah, and it rings with a singular theme: the longing for God&apos;s presence. The psalmist is not content with distant knowledge of God. He burns with a desire to be in the tabernacle, to be in the courts of the Lord, to dwell in His house. This is not a request for things. This is a request for someone. This is the heart&apos;s deepest need—communion with God Himself.',
    'The promises contained in this psalm are staggering: no good thing will be withheld from those who walk uprightly and walk in the light of God&apos;s countenance. Grace and glory will be given. The soul and body will be blessed. Here is a psalm for anyone who has ever felt that one moment in God&apos;s presence is worth more than a thousand moments anywhere else.',
  ],

  sections: [
    {
      ref: 'Psalm 84:1–4',
      title: 'The Longing for God&apos;s Presence',
      blocks: [
        {
          kind: 'scripture',
          chapter: 84,
          lines: [
            plain(1, 'How amiable are thy tabernacles, O Lord of hosts!'),
            plain(2, 'My soul longeth, yea, even fainteth for the courts of the Lord: my heart and my flesh crieth out for the living God.'),
            plain(3, 'Yea, the sparrow hath found an house, and the swallow a nest for herself, where she may lay her young, even thine altars, O Lord of hosts, my King, and my God.'),
            plain(4, 'Blessed are they that dwell in thy house: they will be still praising thee. Selah.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps84-amiable',
          html:
            'The opening word carries a weight of tenderness: "How amiable"—how lovely, how beautiful, how beloved. Not "How grand" or "How powerful," but how amiable, how attractive. The tabernacle, the dwelling place of God, is precious not because of its size or splendor, but because it is where God dwells. And the psalmist&apos;s longing is not theoretical. His soul faints. His heart cries out. His flesh cries out. This is a yearning of the whole being. [res:sefaria-psalm-84]',
        },
        {
          kind: 'hebrew',
          id: 'ps84-yekahal',
          title: 'Aniim — "Amiable" (Yekahel)',
          script: 'אָנִיִּם',
          translit: '<strong>Anim</strong> · pleasant; beloved; lovely',
          description:
            'The Hebrew speaks of what is pleasant to the eye, beloved, worthy of desire. In Psalm 27:4, the psalmist also uses this word: "One thing have I desired...to behold the beauty of the Lord." It is not mere preference. It is profound attraction, the drawing power of what is beautiful and good.',
        },
        {
          kind: 'commentary',
          id: 'ps84-sparrow',
          html:
            'Even the sparrow finds a home in the altar of God. The humblest creature nests in the house of the Lord, safe and secure. The psalmist seems to say: If even the sparrow can find home at the altar, should not my soul find home there? This is not a boast of humility but an expression of deep longing: I belong nowhere else. My home is with my God.',
        },
        {
          kind: 'christ',
          id: 'ps84-christ-dwelling',
          title: 'Christ Connection — God&apos;s Dwelling Place',
          html:
            'In John 1:14, John writes that the Word became flesh and "dwelt among us"—literally, "pitched His tent among us." Christ is the living tabernacle, the place where God&apos;s presence dwells in a human body. In Revelation 21, John sees the final tabernacle: "Behold, the tabernacle of God is with men, and he will dwell with them." To dwell with God through Christ is the longing this psalm expresses—fulfilled in His presence. [res:bible-odyssey-psalm-84]',
        },
        {
          kind: 'reflection',
          id: 'ps84-longing',
          prompt: 'When was the last time your soul truly yearned for God&apos;s presence? What stands between you and a deeper longing for communion with Him?',
        },
      ],
    },

    {
      ref: 'Psalm 84:5–12',
      title: 'The Way of Blessing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 84,
          lines: [
            plain(5, 'Blessed is the man whose strength is in thee; in whose heart are the ways of them.'),
            plain(6, 'Who passing through the valley of Baca make it a well; the rain also filleth the pools.'),
            plain(7, 'They go from strength to strength, every one of them in Zion appeareth before God.'),
            plain(8, 'O Lord God of hosts, hear my prayer: give ear, O God of Jacob. Selah.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-84-78mid-1',
          html:
            'Longing for God&apos;s house opens into blessing of pilgrims and strength in the Lord. Desire becomes doxology.',
        },
        {
          kind: 'scripture',
          chapter: 84,
          lines: [
            plain(9, 'Behold, O God our shield, and look upon the face of thine anointed.'),
            plain(10, 'For a day in thy courts is better than a thousand. I had rather be a doorkeeper in the house of my God, than to dwell in the tents of wickedness.'),
            plain(11, 'For the Lord God is a sun and shield: the Lord will give grace and glory: no good thing will he withhold from them that walk uprightly.'),
            plain(12, 'O Lord of hosts, blessed is the man that trusteth in thee.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps84-strength',
          html:
            'The blessed life is not one of comfort or ease, but one whose strength is in God. The heart that knows "the ways of them"—the ways of pilgrimage to God&apos;s house—is a heart fixed on what matters. Even passing through the valley of Baca, a valley associated with weeping, becomes a well. Sorrow becomes fruitful. Every difficulty becomes an opportunity to draw nearer to God.',
        },
        {
          kind: 'commentary',
          id: 'ps84-thousand',
          html:
            'One day in God&apos;s courts is better than a thousand elsewhere. This is not poetic exaggeration. This is the voice of someone who knows what a thousand days of earthly pleasure cost and what one moment in God&apos;s presence is worth. To be a doorkeeper in God&apos;s house is preferable to dwelling in the tents of wickedness—to stand at the threshold of God&apos;s presence is richer than any palace of sin.',
        },
        {
          kind: 'hebrew',
          id: 'ps84-shemesh',
          title: 'Shemesh — "Sun" (Shemesh)',
          script: 'שֶׁמֶשׁ',
          translit: '<strong>Shemesh</strong> · sun; light; source of life',
          description:
            'God is described not as a hidden judge but as a sun—the source of all light and life. Without the sun, nothing grows, nothing flourishes, nothing is seen. God is to the soul what the sun is to the earth: the source of growth, visibility, and warmth.',
        },
        {
          kind: 'carry',
          html:
            'This psalm calls each reader to examine what their strength is rooted in. Are you seeking your strength from the opinions of others, from money, from your own capabilities? Or is your strength fixed in God? The promise is clear: if you trust Him, He will not withhold any good thing from you. But the good things He gives are not always what we would choose. They are what we truly need.',
        },
        {
          kind: 'reflection',
          id: 'ps84-whatelse',
          prompt: 'If a day in God&apos;s presence is truly better than a thousand days elsewhere, what are you settling for right now? What would change if you believed this deeply?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'How amiable are thy tabernacles, O Lord of hosts! A day in thy courts is better than a thousand.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 84 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalm-84',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 84 with Jewish Commentary',
      url: 'https://www.sefaria.org/Psalms.84',
      description: 'Hebrew text with rabbinic and medieval Jewish commentaries.',
    },
    {
      id: 'bible-odyssey-psalm-84',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Psalm 84 Study Guide',
      url: 'https://www.bibleodyssey.org/?q=psalm+84',
      description: 'Thematic study and historical background from the Society of Biblical Literature.',
    },
  ],

  hasHebrew: true,
};
