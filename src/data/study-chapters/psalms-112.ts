import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 112 — The Blessed Man
 *
 * Also an acrostic. "Blessed is the man that feareth the Lord, that delighteth
 * greatly in his commandments." The psalmist traces the marks of a righteous life:
 * strength, wealth, generosity, justice, stability. He "shall not be afraid of
 * evil tidings: his heart is fixed, trusting in the Lord." This is the portrait
 * of the blessed man, whose fear of God has issued in a life of fruitfulness.
 */
export const PSALMS_112: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 112,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  topicTags: ['praise', 'lament', 'hope', 'protection'],
  opener: {
    topical: true,
    caption: 'Psalms 112',
  },
  intros: [
    'Psalm 112 is the companion to Psalm 111. Where Psalm 111 speaks of God&apos;s character and works, Psalm 112 describes the person who has internalized that character and made God&apos;s ways his own. This is not a promise of material wealth or perfect circumstances. It is a portrait of a person whose life has been shaped by fear of God—reverence, awe, obedience. And what does that shaping produce? Strength, integrity, generosity, courage, stability. The blessed man does not avoid difficulty, but he faces it with a heart fixed in trust.',
    'The psalm is also an acrostic in the original Hebrew, following directly after Psalm 111. Together they compose a meditation on fear of God and what it produces: first the fear itself, then the person transformed by that fear.',
  ],

  sections: [
    {
      ref: 'Psalm 112:1–10',
      title: 'The Marks of the Blessed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 112,
          lines: [
            plain(1, 'Praise ye the Lord. Blessed is the man that feareth the Lord, that delighteth greatly in his commandments.'),
            plain(2, 'His seed shall be mighty upon earth: the generation of the upright shall be blessed.'),
            plain(3, 'Wealth and riches shall be in his house: and his righteousness endureth for ever.'),
            plain(4, 'Unto the upright there ariseth light in the darkness: he is gracious, and full of compassion, and righteous.'),
            plain(5, 'A good man sheweth favour, and lendeth: he will guide his affairs with discretion.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps112-blessing-steadfast',
          html:
            'The blessed man&apos;s character is set. Now watch what happens—his heart is firm, his way steadfast. [res:sefaria-psalm-112]',
        },
        {
          kind: 'scripture',
          chapter: 112,
          lines: [
            plain(6, 'Surely he shall not be moved for ever: the righteous shall be had in everlasting remembrance.'),
            plain(7, 'He shall not be afraid of evil tidings: his heart is fixed, trusting in the Lord.'),
            plain(8, 'His heart is established, he shall not be afraid, until he see his desire upon his enemies.'),
            plain(9, 'He hath dispersed, he hath given to the poor; his righteousness endureth for ever; his horn shall be exalted with honour.'),
            plain(10, 'The wicked shall see it, and be grieved; he shall gnash with his teeth, and melt away: the desire of the wicked shall perish.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps112-feareth-lord',
          html:
            '"Blessed is the man that feareth the Lord, that delighteth greatly in his commandments." The blessed man is not blessed by circumstance but by his posture toward God. He fears God—he stands in awe, recognizes authority, obeys. And this is not grim obedience. He delights in God&apos;s commandments. He finds joy in doing what God commands. The person whose heart has been transformed by reverence for God finds that obedience is not a burden but a delight[res:bibleodyssey-wisdom-psalms].',
        },
        {
          kind: 'commentary',
          id: 'ps112-seed-mighty',
          html:
            '"His seed shall be mighty upon earth; the generation of the upright shall be blessed." The blessing extends beyond the individual to his children and descendants. A righteous life does not merely benefit the person who lives it. It creates a legacy. The fruits of righteousness pass down through generations.',
        },
        {
          kind: 'hebrew',
          id: 'ps112-yashar',
          title: 'Yashar — "Upright" (Straightforward)',
          script: 'יָשָׁר',
          translit: '<strong>Yashar</strong> · upright; righteous; straight; direct in manner',
          description:
            'The Hebrew word yashar means upright, straight, right. It suggests a life that has a clear direction, that does not deviate or twist. The upright man is not devious or crooked. He lives with integrity, in alignment with God&apos;s way.',
        },
        {
          kind: 'commentary',
          id: 'ps112-light-darkness',
          html:
            '"Unto the upright there ariseth light in the darkness: he is gracious, and full of compassion, and righteous." Even when the upright man faces difficulty—darkness—light arises. This is not because he avoids trouble but because God provides illumination even in hard times. And his character is clear: gracious, compassionate, righteous. These are not external circumstances but the fruit of a heart oriented toward God.',
        },
        {
          kind: 'commentary',
          id: 'ps112-not-afraid',
          html:
            '"He shall not be afraid of evil tidings: his heart is fixed, trusting in the Lord." This is perhaps the core promise. Bad news comes to everyone. But the blessed man does not panic. His heart is fixed, trusting in God. He has done the inner work before the crisis comes. His trust is already established. So when difficulty strikes, he does not collapse into fear.',
        },
        {
          kind: 'christ',
          id: 'ps112-christ-blessed',
          title: 'Christ Connection — The Perfectly Blessed Man',
          html:
            'Christ is the blessed man of Psalm 112. He feared God with perfect reverence and delighted in God&apos;s commandments with complete obedience. He showed favor and lent freely. He was gracious and compassionate and righteous. He was not afraid of evil tidings. He walked toward His enemies—His crucifiers—with a heart fixed in trust in God the Father. In Christ, every promise of the psalm is fulfilled. And believers, as members of His body, share in His blessedness. [res:bible-odyssey-psalm-112]',
        },
        {
          kind: 'carry',
          html:
            'The psalm invites us to examine our own lives. Are we becoming the kind of people who fear God, who delight in His commandments, who are gracious and generous? Are we building legacies that will bless our children? Are we establishing our hearts in trust before the crises come? This is the work of a lifetime—becoming the blessed man or woman the psalmist describes.',
        },
        {
          kind: 'reflection',
          id: 'ps112-fixed-heart',
          prompt: 'Which mark of the blessed man—courage, generosity, integrity, compassion—do you need to develop most? What would it take to have a heart "fixed, trusting in the Lord"?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Blessed is the man that feareth the Lord, that delighteth greatly in his commandments. He shall not be afraid of evil tidings: his heart is fixed, trusting in the Lord.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 112 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalm-112',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 112 with Jewish Commentary',
      url: 'https://www.sefaria.org/Psalms.112',
      description: 'Hebrew text with rabbinic and medieval Jewish commentaries.',
    },
    {
      id: 'bible-odyssey-psalm-112',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Psalm 112 Study Guide',
      url: 'https://www.bibleodyssey.org/?q=psalm+112',
      description: 'Thematic study and historical background from the Society of Biblical Literature.',
    },
    {
      id: 'bibleodyssey-wisdom-psalms',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Wisdom Psalms',
      url: 'https://www.bibleodyssey.org/articles/wisdom-psalms/',
      description: 'SBL overview of the wisdom-psalm subgenre and its meditation on Torah and the righteous life.',
    },

  ],

  hasHebrew: true,
};
