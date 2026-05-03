import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 93 — The Lord Reigneth
 *
 * "The Lord reigneth, he is clothed with majesty." This is a brief psalm, but
 * it rings with cosmic confidence. The world is established. It cannot be
 * moved. God is enthroned above the flood of waters, stronger than the waves
 * of the sea. This is a psalm of absolute sovereignty. God rules not just over
 * a temple or a nation, but over all creation. In Revelation 19:6, John hears
 * the voice of a great multitude saying, "Alleluia: for the Lord God omnipotent
 * reigneth."
 */
export const PSALMS_93: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 93,

  estimatedMinutes: { beginner: 1, intermediate: 2, deep: 3 },
  intros: [
    'Psalm 93 is one of the shortest psalms, yet it is among the most cosmic in its vision. In just five verses, it declares the absolute reign of God. The world is established and cannot be shaken. God is enthroned over the waters. His holiness and strength are unmatched. This is a psalm to be sung by those who understand that whatever chaos rages in this world, God is firmly in control.',
  ],

  sections: [
    {
      ref: 'Psalm 93:1–5',
      title: 'The Establishment of God&apos;s Throne',
      blocks: [
        {
          kind: 'scripture',
          chapter: 93,
          lines: [
            plain(1, 'The Lord reigneth, he is clothed with majesty; the Lord is clothed with strength, wherewith he hath girded himself: the world also is stablished, that it cannot be moved.'),
            plain(2, 'Thy throne is established of old: thou art from everlasting.'),
            plain(3, 'The floods have lifted up, O Lord, the floods have lifted up their voice; the floods lift up their waves.'),
            plain(4, 'The Lord on high is mightier than the noise of many waters, yea, than the mighty waves of the sea.'),
            plain(5, 'Thy testimonies are very sure: holiness becometh thine house, O Lord, for ever.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps93-reigneth',
          html:
            'The declaration is immediate and unqualified: "The Lord reigneth." Not "will reign" or "may reign," but reigns now. And His reign is clothed with majesty. He is girded with strength. These are not abstract qualities but visible displays of power. God is not hiding. God is not uncertain. God reigns. [res:sefaria-psalm-93]',
        },
        {
          kind: 'commentary',
          id: 'ps93-stablished',
          html:
            '"The world also is stablished, that it cannot be moved." Because God reigns, the world stands. The order of creation is secure. It is not chaos held together by luck or chance. It is the ordered creation of a God who reigns.',
        },
        {
          kind: 'commentary',
          id: 'ps93-floods',
          html:
            'The floods are mentioned not as an actual threat but as a symbol of chaos, of the forces that would undo order. In ancient Near Eastern mythology, the sea represented chaos. Here, the psalmist acknowledges the power of the waters—they lift up their voice, they lift up their waves—yet God is mightier than all of it. The threats are real, but the Almighty is greater.',
        },
        {
          kind: 'hebrew',
          id: 'ps93-malach',
          title: 'Malach — "Reigneth" (Rules, Governs)',
          script: 'מָלַךְ',
          translit: '<strong>Malach</strong> · to reign; to rule; to govern',
          description:
            'The verb malach speaks not of mere existence but of active rule. God does not simply exist. He governs. He orders. He directs.',
        },
        {
          kind: 'christ',
          id: 'ps93-christ-enthroned',
          title: 'Christ Connection — Christ Enthroned',
          html:
            'In Revelation 19:6, John sees heaven opened and hears the voice of a great multitude saying, "Alleluia: for the Lord God omnipotent reigneth." This is the culmination of what Psalm 93 declares. Christ is seated at the right hand of God. He reigns. His kingdom is forever. The chaos of this world is not the final word. [res:bible-odyssey-psalm-93]',
        },
        {
          kind: 'carry',
          html:
            'In times of uncertainty, when the floods seem to rise and the waves seem to threaten, this psalm calls you to remember: the Lord reigns. The world is established and cannot be moved. God is on His throne. Whatever comes, He is mightier.',
        },
        {
          kind: 'reflection',
          id: 'ps93-chaos',
          prompt: 'What "flood" or "wave" feels like chaos in your life right now? How would it change things if you truly believed the Lord is mightier than it?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The Lord reigneth, he is clothed with majesty. The world also is stablished, that it cannot be moved.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 93 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalm-93',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 93 with Jewish Commentary',
      url: 'https://www.sefaria.org/Psalms.93',
      description: 'Hebrew text with rabbinic and medieval Jewish commentaries.',
    },
    {
      id: 'bible-odyssey-psalm-93',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Psalm 93 Study Guide',
      url: 'https://www.bibleodyssey.org/?q=psalm+93',
      description: 'Thematic study and historical background from the Society of Biblical Literature.',
    },
  ],

  hasHebrew: true,
};
