import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 96 — O Sing Unto the Lord a New Song
 *
 * "O sing unto the Lord a new song: sing unto the Lord, all the earth." The
 * new song is the song of salvation, of God&apos;s work among the nations.
 * "Declare his glory among the heathen; his wonders among all people." God&apos;s
 * salvation is not private, not hidden. It is declared among all nations. All
 * peoples are invited to know and worship the God of Israel. Christ Connection:
 * the gospel goes to the ends of the earth. Every nation, tribe, and tongue is
 * invited into God&apos;s kingdom through Christ.
 */
export const PSALMS_96: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 96,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 3 },
  intros: [
    'Psalm 96 celebrates the universality of God&apos;s salvation. It is not enough that Israel worships God. The psalmist&apos;s vision expands to include all peoples. "O sing unto the Lord, all the earth." "Declare his glory among the heathen." God&apos;s wonders are to be made known to every nation. The God of Israel is the God of all the earth.',
    'This is a vision of a world where God&apos;s glory is recognized everywhere. Where all peoples know His works. Where all nations bow before Him. Not through conquest or force, but through the declaration of His glory, the proclamation of His salvation, the witness of His power and His goodness.',
  ],

  sections: [
    {
      ref: 'Psalm 96:1–10',
      title: 'O Sing Unto the Lord a New Song',
      blocks: [
        {
          kind: 'scripture',
          chapter: 96,
          lines: [
            plain(1, 'O sing unto the Lord a new song: sing unto the Lord, all the earth.'),
            plain(2, 'Sing unto the Lord, bless his name; shew forth his salvation from day to day.'),
            plain(3, 'Declare his glory among the heathen; his wonders among all people.'),
            plain(4, 'For the Lord is great, and greatly to be praised: he is to be feared above all gods.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps96-newness-declare',
          html:
            'Sing to the Lord a new song. Now the proclamation broadens: declare his glory among the nations[res:bibleodyssey-hymns-praise].',
        },
        {
          kind: 'scripture',
          chapter: 96,
          lines: [
            plain(5, 'For all the gods of the nations are idols: but the Lord made the heavens.'),
            plain(7, 'Give unto the Lord, O ye kindreds of the people, give unto the Lord glory and strength.'),
            plain(8, 'Give unto the Lord the glory due unto his name: bring an offering, and come into his courts.'),
            plain(9, 'O worship the Lord in the beauty of holiness: fear before him, all the earth.'),
            plain(10, 'Say among the heathen that the Lord reigneth: the world also shall be established that it cannot be moved: he shall judge the people righteously.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms96-new-song',
          html: '"O sing unto the Lord a new song: sing unto the Lord, all the earth." The new song is the song of God&apos;s salvation, God&apos;s wonders, God&apos;s glory made manifest to all peoples. [res:sefaria-psalm-96] Not the old song of tribal or national worship alone, but a new song that resonates across all boundaries, reaching all earth.',
        },
        {
          kind: 'commentary',
          id: 'psalms96-declare-glory',
          html: '"Declare his glory among the heathen; his wonders among all people." The active work of proclamation is required. God&apos;s glory does not declare itself. God&apos;s wonders do not speak without witnesses. Those who know Him are called to tell all nations. This is the missionary impulse embedded in Scripture.',
        },
        {
          kind: 'commentary',
          id: 'psalms96-greatly-praised',
          html: '"For the Lord is great, and greatly to be praised: he is to be feared above all gods." Not one god among many, but the great God. Above all gods. All other deities are idols, human constructions. The Lord alone is the creator of the heavens. The Lord alone is worthy of worship.',
        },
        {
          kind: 'commentary',
          id: 'psalms96-kindreds',
          html: '"Give unto the Lord, O ye kindreds of the people, give unto the Lord glory and strength." Every people, every family, every nation is invited to give glory to God. Not one nation has monopoly on worship. All are invited. All are called.',
        },
        {
          kind: 'christ',
          id: 'psalms96-christ-gospel',
          title: 'Christ Connection — Gospel to the Nations',
          html: 'Christ is the fulfillment of this vision. His great commission is to "go therefore, and teach all nations." The gospel is not for Israel alone. It is for every tribe, every tongue, every nation. In Christ, the new song is sung in every language. In every corner of the earth. The vision of Psalm 96—God&apos;s glory declared among all peoples—finds its realization in the proclamation of Christ to the nations. [res:bible-odyssey-psalm-96]',
        },
        {
          kind: 'carry',
          html: 'Psalm 96 invites us to recognize that God&apos;s salvation is cosmic in scope. It is not private or parochial. It concerns all peoples, all nations, the whole earth. If you know this God, you are called to make Him known. Not through force, but through the declaration of His glory and His wonders.',
        },
        {
          kind: 'reflection',
          id: 'psalms96-declare-glory-2',
          prompt: 'How can you declare God&apos;s glory in your sphere of influence? What would it mean to be part of the proclamation of His salvation to those around you?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'O sing unto the Lord a new song...Declare his glory among the heathen; his wonders among all people.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 96 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalm-96',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 96 with Jewish Commentary',
      url: 'https://www.sefaria.org/Psalms.96',
      description: 'Hebrew text with rabbinic and medieval Jewish commentaries.',
    },
    {
      id: 'bible-odyssey-psalm-96',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Psalm 96 Study Guide',
      url: 'https://www.bibleodyssey.org/?q=psalm+96',
      description: 'Thematic study and historical background from the Society of Biblical Literature.',
    },
    {
      id: 'bibleodyssey-hymns-praise',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Hymns of Praise in the Psalter',
      url: 'https://www.bibleodyssey.org/articles/hymns/',
      description: 'SBL essay on the hymn genre — communal, doxological psalms that frame the Psalter&apos;s arc.',
    },

  ],

  hasHebrew: false,
};
