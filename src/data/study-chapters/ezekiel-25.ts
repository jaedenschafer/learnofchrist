import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Ezekiel 25 — Burdens Against the Nations
 *
 * Ezekiel turns from Israel to the nations that surround her—Ammon, Moab,
 * Edom, Philistia. Each has rejoiced at Israel&apos;s destruction. Each has
 * sought to exploit her weakness. God will judge them. "I will stretch out
 * mine hand upon thee, and will deliver thee for a spoil to the heathen."
 * Each nation will know "that I am the Lord." The pattern is consistent:
 * injustice does not go unnoticed. Cruelty invites judgment. But beneath the
 * judgment lies a deeper truth: God&apos;s justice extends to all nations. He is
 * Lord of all. He will vindicate the weak.
 */
export const EZEKIEL_25: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 25,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  intros: [
    'After pronouncing judgment on Israel, Ezekiel turns to the nations that surround her. Ammon gloated over Israel&apos;s destruction. Moab said that Israel is like all other nations, no longer special. Edom took vengeance on Judah. Philistia sought to destroy Israel completely. Each nation, in their own way, mocked or exploited Israel&apos;s weakness.',
    'God will judge each one. The refrain is repeated four times: they will know "that I am the Lord." God&apos;s justice is not limited to His covenant people. It extends to all nations. Those who exploit the weak, who gloat over another&apos;s ruin, who seek advantage through cruelty—these will be held accountable. God is Lord over all.',
  ],

  sections: [
    {
      ref: 'Ezekiel 25:1–14',
      title: 'Four Nations Judged',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            plain(3, 'And say unto the Ammonites, Hear the word of the Lord God; Thus saith the Lord God; Because thou saidst, Aha, against my sanctuary, when it was profaned; and against the land of Israel, when it was desolate; and against the house of Judah, when they went into captivity;'),
            plain(8, 'Thus saith the Lord God; Because that Moab and Seir do say, Behold, the house of Judah is like unto all the heathen;'),
            plain(12, 'Thus saith the Lord God; Because the Edomites have dealt against the house of Judah by taking vengeance, and hath greatly offended, and revenged himself upon them;'),
            plain(15, 'Thus saith the Lord God; Because the Philistines have dealt by revenge, and taken vengeance with a despiteful heart, to destroy it for the old hatred;'),
            plain(17, 'Thus will I execute great vengeance upon them with furious rebukes; and they shall know that I am the Lord, when I shall lay my vengeance upon them.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezek25-nations',
          html: 'Each nation has a particular sin. Ammon says "Aha" when God&apos;s sanctuary is profaned—they gloat. They despise Israel&apos;s weakness. Moab says that Judah is like all the heathen—denying that Israel has any special relationship to God. Edom takes vengeance on Judah for old grudges. Philistia seeks total destruction. Each nation&apos;s sin is rooted in a failure to recognize God&apos;s sovereignty. They see weakness and move to exploit it. They do not ask: why has this happened? Is there a God whose will is being worked out?[res:babylonian-exile-context]',
        },
        {
          kind: 'commentary',
          id: 'ezek25-vengeance',
          html: '"I will execute great vengeance upon them with furious rebukes; and they shall know that I am the Lord." The refrain echoes: they will know. Not through instruction, but through judgment. Not through conversion, but through experiencing the consequences of their cruelty. The knowledge of God comes not always through grace, but through the working out of divine justice[res:sefaria-ezekiel][res:sefaria-ezekiel-25].',
        },
        {
          kind: 'hebrew',
          id: 'ezek25-goel-avengers',
          title: 'Yada — "Know" (Recognize, Acknowledge)',
          script: 'יָדַע',
          translit: '<strong>Yada</strong> · to know, to recognize, to acknowledge intimately',
          description:
            'Yada is not mere intellectual knowledge. It is recognition, acknowledgment, an encounter that changes the knower. When the nations "know that I am the Lord," they will have encountered the reality of God&apos;s power. They cannot deny it.',
        },
        {
          kind: 'reflection',
          id: 'ezek25-justice',
          prompt: 'Where do you see injustice in the world—people exploiting the weak, gloating over another&apos;s suffering? What does it mean to trust that God sees and will judge?',
        },
      ],
    },

    {
      ref: 'Ezekiel 25:15–17',
      title: 'The Pattern of Divine Justice',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            plain(15, 'Thus saith the Lord God; Because the Philistines have dealt by revenge, and taken vengeance with a despiteful heart, to destroy it for the old hatred;'),
            plain(16, 'Therefore thus saith the Lord God; Behold, I will stretch out mine hand upon thee, and will deliver thee for a spoil to the heathen; and I will cut thee off from the people, and I will cause thee to perish out of the countries: I will destroy thee; and thou shalt know that I am the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezek25-pattern',
          html: 'The judgment is precise: each nation is judged for its specific sin. Ammon for gloating. Moab for denying God&apos;s special relationship to Israel. Edom for vengeance. Philistia for despiteful destruction. And each judgment is in kind: nations will be delivered as spoil, cut off, destroyed. The pattern is consistent throughout Ezekiel: injustice does not go unnoticed by God. He watches. He will act.',
        },
        {
          kind: 'commentary',
          id: 'ezek25-vindication',
          html: 'There is comfort here for the afflicted. When Israel feels powerless, scattered, destroyed, Ezekiel reminds them: God sees. The nations that gloat, that exploit, that take vengeance—they will answer. God&apos;s justice is universal. It is not limited to those who confess Him. It extends to all, and all will know that He is Lord.',
        },
        {
          kind: 'christ',
          id: 'ezek25-christ-vindicate',
          title: 'Christ Connection — God&apos;s Justice and Mercy',
          html:
            'In Christ, God&apos;s justice is not merely external judgment. It is borne by Christ Himself on the Cross. Jesus judges the evil intent of human hearts, but He judges it on Himself—in His own body and blood. This is the scandal and mercy of the Gospel: God does not merely judge the unjust from a distance. He enters into judgment Himself, bearing it so that those who turn might be freed.',
        },
        {
          kind: 'carry',
          html:
            'When you are weak, when you are exploited, when injustice seems to reign unchecked, remember: God is not indifferent. He sees. He will judge. But His judgment is not revenge. It is the working out of a justice that seeks to restore right relationship. Trust that God sees what you cannot yet vindicate.',
        },
        {
          kind: 'reflection',
          id: 'ezek25-vindication-2',
          prompt: 'Where do you need to trust that God will vindicate justice? Where are you tempted to take vengeance into your own hands?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Thus will I execute great vengeance upon them with furious rebukes; and they shall know that I am the Lord, when I shall lay my vengeance upon them.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 25 · Study Guide',
  },  resources: [
    {
      id: 'babylonian-exile-context',
      kind: 'museum',
      source: 'British Museum',
      label: 'Babylonian Exile Context',
      url: 'https://www.britishmuseum.org/collection/object/W_Y_EA25091',
      description: 'Cuneiform and archaeological evidence of Babylon under Nebuchadnezzar.',
    },
    {
      id: 'sefaria-ezekiel',
      kind: 'study',
      source: 'Sefaria',
      label: 'Ezekiel',
      url: 'https://www.sefaria.org/Ezekiel',
      description: 'Open-source Hebrew Bible with translations and medieval commentaries.',
    },
    {
      id: 'sefaria-ezekiel-25',
      kind: 'study',
      source: 'Sefaria',
      label: 'Ezekiel 25 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Ezekiel.25',
      description: 'The Hebrew text of Ezekiel 25 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  hasHebrew: true,
};
