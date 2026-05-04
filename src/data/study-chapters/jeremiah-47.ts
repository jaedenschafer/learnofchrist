import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Jeremiah 47 — Against the Philistines
 *
 * A short word against Philistia. Waters are rising from the north, sweeping
 * away cities and peoples. The Philistines cry out in anguish, but there is no
 * defense. God's judgment is inexorable. The nations that have stood against
 * God's people will themselves be swept away by the tide of history.
 */
export const JEREMIAH_47: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 47,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 3 },
  topicTags: ['lament', 'judgment', 'hope', 'calling'],
  opener: {
    topical: true,
    caption: 'Jeremiah 47',
  },
  intros: [
    'The burden against Philistia is brief but vivid. The Philistines have long been enemies of Israel—from the days of Samson and Goliath to the reign of David. Now their end is coming. Waters are rising from the north, and all resistance will be washed away. This is not a word of political analysis. This is a word of divine judgment. God has determined the fate of this hostile nation.',
    'The image is one of overwhelming flood, of a deluge that cannot be resisted. Cities cry out. People flee in panic. Parents abandon their children in their flight. All the defensive works, all the armor, all the weapons—nothing can stand against the advancing waters. This is what it means to oppose God&apos;s purposes.',
  ],

  sections: [
    /* ─── Jeremiah 47:1–7 — The Waters Rise ──────────────────────────── */
    {
      ref: 'Jeremiah 47:1–7',
      title: 'The Judgment of the North',
      blocks: [
        {
          kind: 'scripture',
          chapter: 47,
          lines: [
            plain(2, 'Behold, waters rise up out of the north, and shall be an overflowing flood, and shall overflow the land, and all that is therein; the city, and them that dwell therein: then the men shall cry, and all the inhabitants of the land shall howl.'),
            plain(3, 'At the noise of the stamping of the hoofs of his strong horses, at the rushing of his chariots, and at the rumbling of his wheels, the fathers shall not look back to their children for feebleness of hands;'),
            plain(5, 'Baldness is come upon Gaza; Ashkelon is cut off with the remnant of their valley: how long wilt thou cut thyself?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jer47-waters',
          html: 'The waters rise from the north—the direction from which all of God&apos;s judgments come in Jeremiah. They are not a natural flood, but an image of an invading army. The description is vivid and terrible: overflowing flood, overwhelming land and city alike. The people cry and howl. This is not quiet judgment. This is catastrophe made manifest[res:jer31-hebrews-intertextual][res:sefaria-jeremiah-47].',
        },
        {
          kind: 'commentary',
          id: 'jer47-fathers',
          html: 'The chaos is so complete that fathers abandon their children. The text says they "shall not look back to their children for feebleness of hands"—that is, their hands are too weak, their strength too gone, to even turn and look back. All semblance of family, of order, of human care collapses before the advancing judgment. The strongest and most capable men are reduced to fleeing for their own lives[res:sefaria-jeremiah].',
        },
        {
          kind: 'commentary',
          id: 'jer47-baldness',
          html: 'Baldness is a sign of mourning and shame in the ancient world. Gaza and Ashkelon—great Philistine cities—are shaved bare, stripped of their power and pride. The rhetorical question—"how long wilt thou cut thyself?"—suggests that Philistia will continue to inflict wounds upon itself, to tear at itself in panic and despair.',
        },
        {
          kind: 'christ',
          id: 'jer47-christ-sovereignty',
          title: 'Christ Connection — God&apos;s Absolute Sovereignty',
          html: 'The nations that oppose God believe their chariots and their cities and their strength will protect them. But Christ reveals a God whose sovereignty is absolute and inescapable. The waters rise. The defenders flee. No human power can stand against the purposes of God. In Christ, this sovereignty becomes not a threat but a promise: the same God whose word brings low the proud is the God who lifts up the broken and heals the brokenhearted. His authority over all creation is exercised for the good of those who trust Him.',
        },
        {
          kind: 'carry',
          html:
            'This chapter presents a hard truth: God&apos;s judgment on the nations is inexorable. Those who have stood against His purposes will find no escape. Yet the lesson extends beyond external judgment. What in your own life have you defended that will inevitably fall before God&apos;s will? What pride, what confidence in your own strength, will be swept away?',
        },
        {
          kind: 'reflection',
          id: 'jer47-what-defends',
          prompt: 'What are you trusting to defend you—confidence in your own strength, your wealth, your connections, your reputation? How might God be calling you to release these defenses and trust Him instead?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Behold, waters rise up out of the north, and shall be an overflowing flood, and shall overflow the land, and all that is therein.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 47 · Study Guide',
  },  resources: [
    {
      id: 'jer31-hebrews-intertextual',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Jeremiah 31 ↔ Hebrews 8:8–12',
      url: 'https://intertextual.bible/text/jeremiah-31/hebrews-8',
      description: 'Side-by-side comparison of the new covenant promise in Jeremiah quoted in Hebrews.',
    },
    {
      id: 'sefaria-jeremiah',
      kind: 'study',
      source: 'Sefaria',
      label: 'Jeremiah',
      url: 'https://www.sefaria.org/Jeremiah',
      description: 'Open-source Hebrew Bible with translations and medieval commentaries.',
    },
    {
      id: 'sefaria-jeremiah-47',
      kind: 'study',
      source: 'Sefaria',
      label: 'Jeremiah 47 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Jeremiah.47',
      description: 'The Hebrew text of Jeremiah 47 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],
};
