import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 114 — The Power Over Creation
 *
 * "When Israel went out of Egypt...the sea saw it, and fled: Jordan was driven
 * back. The mountains skipped like rams, and the little hills like lambs." A
 * poetic hymn celebrating the exodus. Creation itself responds to God&apos;s power.
 * The sea flees, the earth trembles, the mountains dance. All creation obeys God.
 * The God who can move mountains and turn back rivers is the God Israel trusts.
 */
export const PSALMS_114: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 114,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  intros: [
    'Psalm 114 is one of the shortest psalms, yet it contains one of the grandest visions. The exodus—the deliverance of Israel from Egypt—is presented as a cosmic event. Creation itself trembles and shifts in response to God&apos;s power. The sea does not gradually recede; it flees in fear. The earth trembles. The mountains and hills dance like young animals. This is not merely a historical narrative. It is a testimony to God&apos;s power over all creation. And if God can do this, what obstacle can stand before His people?',
    'The psalm was sung during the Jewish Passover celebration, recalling God&apos;s mighty acts in delivering the people. It reminds each generation: the God who parted the sea for our ancestors is the God we worship. His power has not diminished. What He has done, He can do again.',
  ],

  sections: [
    {
      ref: 'Psalm 114:1–8',
      title: 'Creation&apos;s Response to God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 114,
          lines: [
            plain(1, 'When Israel went out of Egypt, the house of Jacob from a people of strange language;'),
            plain(2, 'Judah was his sanctuary, and Israel his dominion.'),
            plain(3, 'The sea saw it, and fled: Jordan was driven back.'),
            plain(4, 'The mountains skipped like rams, and the little hills like lambs.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-114-78mid-1',
          html:
            'The exodus and wilderness wonders of nature yield to question and transformation. Miracles prompt reflection. [res:sefaria-psalm-114]',
        },
        {
          kind: 'scripture',
          chapter: 114,
          lines: [
            plain(5, 'What ailed thee, O thou sea, that thou fleddest? thou Jordan, that thou wast driven back?'),
            plain(6, 'Ye mountains, that ye skipped like rams; and ye little hills, like lambs?'),
            plain(7, 'Tremble, thou earth, at the presence of the Lord, at the presence of the God of Jacob;'),
            plain(8, 'Which turned the rock into a standing water, the flint into a fountain of waters.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps114-israel-went-out',
          html:
            '"When Israel went out of Egypt, the house of Jacob from a people of strange language." The psalm begins with the moment of liberation. Israel was a house, a family, within the midst of a foreign people—Egypt. And they went out. They left their captivity behind. The language of Egypt was strange to them; it was not their native tongue. But now they are free, moving toward their own land.',
        },
        {
          kind: 'commentary',
          id: 'ps114-sea-fled',
          html:
            '"The sea saw it, and fled: Jordan was driven back." This is not a calm, gradual event. The sea sees Israel coming and flees in terror. The Jordan is driven back—waters that should flow forward are reversed. Creation itself responds to God&apos;s power. And then: "The mountains skipped like rams, and the little hills like lambs." The solid earth dances. The immovable becomes mobile. All creation is in movement at God&apos;s command.',
        },
        {
          kind: 'hebrew',
          id: 'ps114-rah',
          title: 'Ra&apos;ah — "Saw" (Witnessed with Awe)',
          script: 'רָאָה',
          translit: '<strong>Ra&apos;ah</strong> · saw; witnessed; perceived; understood',
          description:
            'The Hebrew word ra&apos;ah means to see, but in context it suggests to witness with understanding. The sea did not merely see Israel. It witnessed God&apos;s power and recognized what was happening. The sea understood that it was in the presence of something greater than itself.',
        },
        {
          kind: 'commentary',
          id: 'ps114-tremble-earth',
          html:
            'The psalmist then addresses creation directly: "What ailed thee, O thou sea, that thou fleddest?" It is as if creation needed to be asked why it responded as it did. The answer is given: "Tremble, thou earth, at the presence of the Lord." Creation trembles in awe. It obeys because God is present. All power belongs to Him.',
        },
        {
          kind: 'commentary',
          id: 'ps114-rock-water',
          html:
            '"Which turned the rock into a standing water, the flint into a fountain of waters." The final image recalls the time in the wilderness when God caused water to flow from a rock. The hardest, driest substance becomes a source of life. Again, creation obeys. The rock submits to God&apos;s word and becomes what Israel needs.',
        },
        {
          kind: 'christ',
          id: 'ps114-christ-power',
          title: 'Christ Connection — Power Over All Creation',
          html:
            'Jesus demonstrates power over creation: He walks on water and commands the storm to be still. He feeds thousands from a few loaves and fishes. He turns water into wine. He raises the dead. In each act, He shows Himself to be the one to whom all creation obeys. The God of the exodus—who parted the sea—is present in Jesus. His authority extends over all things. [res:bible-odyssey-psalm-114]',
        },
        {
          kind: 'carry',
          html:
            'The psalm invites us to marvel at God&apos;s power and to trust that power in our own lives. If God can part the sea and move mountains, what obstacle in our life is too great? The mountains are dancing; the sea is fleeing; the earth is trembling. This is the God we trust. Not a small god, but the Creator to whom all creation obeys.',
        },
        {
          kind: 'reflection',
          id: 'ps114-gods-power',
          prompt: 'What &quot;mountain&quot; or &quot;sea&quot; stands between you and God&apos;s promise? How does knowing that creation itself obeys God&apos;s word change how you face it?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'When Israel went out of Egypt...The sea saw it, and fled. The mountains skipped like rams, and the little hills like lambs.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 114 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalm-114',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 114 with Jewish Commentary',
      url: 'https://www.sefaria.org/Psalms.114',
      description: 'Hebrew text with rabbinic and medieval Jewish commentaries.',
    },
    {
      id: 'bible-odyssey-psalm-114',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Psalm 114 Study Guide',
      url: 'https://www.bibleodyssey.org/?q=psalm+114',
      description: 'Thematic study and historical background from the Society of Biblical Literature.',
    },
  ],

  hasHebrew: true,
};
