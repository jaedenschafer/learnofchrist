import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 148 — Cosmic Praise
 *
 * "Praise ye the Lord...Praise him, all his angels...Praise him, all his hosts...
 * Praise him, sun and moon...Praise him, ye heavens of heavens...Let them praise
 * the name of the Lord: for his name alone is excellent; his glory is above the
 * earth and heaven." The psalm is a crescendo of praise emanating from every
 * corner of creation. Angels, heavenly bodies, weather, mountains, beasts, birds,
 * and finally humans—all are called to give praise. The universe itself becomes a
 * choir, singing the glory of God.
 */
export const PSALMS_148: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 148,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  intros: [
    'Psalm 148 is perhaps the most cosmic of all the psalms. It begins in heaven—with angels and celestial bodies—and works its way down to earth, calling every creature, every object, every force to praise. The sun and moon praise. The heavens and waters above the heavens praise. Mountains and hills, trees and cedars praise. Beasts and cattle, creeping things and flying fowl praise. Kings and judges, old and young praise. The psalm refuses to separate the heavenly from the earthly, the divine from the natural. All creation—seen and unseen, living and not living—is invited into the chorus of praise. And the reason: "His name alone is excellent; his glory is above the earth and heaven."',
  ],

  sections: [
    {
      ref: 'Psalm 148:1–6',
      title: 'Praise from Heaven',
      blocks: [
        {
          kind: 'scripture',
          chapter: 148,
          lines: [
            plain(1, 'Praise ye the Lord. Praise ye the Lord from the heavens: praise him in the heights.'),
            plain(2, 'Praise ye him, all his angels: praise ye him, all his hosts.'),
            plain(3, 'Praise ye him, sun and moon: praise him, all ye stars of light.'),
            plain(4, 'Praise ye him, ye heavens of heavens, and ye waters that be above the heavens.'),
            plain(5, 'Let them praise the name of the Lord: for he commanded, and they were created.'),
            plain(6, 'He hath also stablished them for ever and ever: he hath made a decree which shall not pass away.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalm148-heaven',
          html:
            '"Praise ye the Lord from the heavens." The call begins at the highest point—in heaven itself, where God&apos;s throne dwells. The heavens are summoned to praise. "Praise ye him, all his angels: praise ye him, all his hosts." The angels, the heavenly armies, are called to praise. These are the beings closest to God, witnesses of His glory in every moment. [res:sefaria-psalm-148]',
        },
        {
          kind: 'hebrew',
          id: 'psalm148-shemesh',
          title: 'Shemesh — "Sun" (Celestial Body)',
          script: 'שֶׁמֶשׁ',
          translit: '<strong>Shemesh</strong> · sun, source of light',
          description:
            'The sun is called to praise. In many ancient religions, the sun was itself divine. In Scripture, the sun is God&apos;s creation, bound to praise its Creator.',
        },
        {
          kind: 'commentary',
          id: 'psalm148-sun-moon',
          html:
            '"Praise ye him, sun and moon: praise him, all ye stars of light." The heavenly bodies—sun, moon, stars—are personified as praising entities. They are called to give praise. By their very existence and movements, they reflect the glory of their Creator.',
        },
        {
          kind: 'commentary',
          id: 'psalm148-waters-above',
          html:
            '"Praise ye him, ye heavens of heavens, and ye waters that be above the heavens." The reference to waters above the heavens likely refers to the firmament of Genesis 1, the waters that God placed above the sky. Even these—even the most distant, most incomprehensible parts of creation—are called to praise.',
        },
        {
          kind: 'commentary',
          id: 'psalm148-created',
          html:
            '"Let them praise the name of the Lord: for he commanded, and they were created." The reason given is simple and profound: they exist because God commanded. The act of creation itself—the command that brought them into being—is ground for their praise.',
        },
      ],
    },

    {
      ref: 'Psalm 148:7–14',
      title: 'Praise from Earth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 148,
          lines: [
            plain(7, 'Praise the Lord from the earth, ye dragons, and all deeps:'),
            plain(8, 'Fire, and hail; snow, and vapours; stormy wind fulfilling his word:'),
            plain(9, 'Mountains, and all hills; fruitful trees, and all cedars:'),
            plain(10, 'Beasts, and all cattle; creeping things, and flying fowl:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-148-78mid-1',
          html:
            'Praise from the heavens and celestial bodies opens into praise from earth and all creatures. Heaven joins earth in chorus.',
        },
        {
          kind: 'scripture',
          chapter: 148,
          lines: [
            plain(11, 'Kings of the earth, and all people; princes, and all judges of the earth:'),
            plain(12, 'Both young men, and maidens; old men, and children:'),
            plain(13, 'Let them praise the name of the Lord: for his name alone is excellent; his glory is above the earth and heaven.'),
            plain(14, 'For he hath lifted up the horn of his people, the praise of all his saints; even of the children of Israel, a people near unto him. Praise ye the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalm148-earth',
          html:
            'The call now comes down to earth: "Praise the Lord from the earth." Dragons (sea monsters), the deep places of the ocean, are called. Fire, hail, snow, vapors, wind—all weather phenomena are called to praise. They are personified as conscious beings fulfilling God&apos;s word.',
        },
        {
          kind: 'commentary',
          id: 'psalm148-mountains',
          html:
            '"Mountains, and all hills; fruitful trees, and all cedars." The geography of earth is called to praise. Mountains, hills, trees—the inanimate creation. Yet even these are invited into the cosmic chorus.',
        },
        {
          kind: 'commentary',
          id: 'psalm148-beasts',
          html:
            '"Beasts, and all cattle; creeping things, and flying fowl." The living creatures of earth—all are called. Not just noble beasts, but cattle, creeping things, flying birds. No creature is too small, too humble to be excluded from the chorus of praise.',
        },
        {
          kind: 'commentary',
          id: 'psalm148-humans',
          html:
            '"Kings of the earth, and all people; princes, and all judges of the earth: Both young men, and maidens; old men, and children." Finally, humans are called. And all of them—kings and common people, princes and judges, young and old, male and female, children and adults. All are invited to praise.',
        },
        {
          kind: 'carry',
          html:
            'Psalm 148 invites a radical shift in perspective: to see all creation—from the furthest stars to the smallest child—as part of a vast chorus of praise. Every creature, every force, every person is summoned to give voice to the glory of God. The question for us is simple: Will we join the chorus? Will we add our voice—our actions, our gratitude, our worship—to the praise that fills all creation?',
        },
        {
          kind: 'christ',
          id: 'psalm148-christ-praise',
          title: 'Christ Connection — Head of All Praise',
          html:
            'In Colossians 1:16–17, Paul writes: "All things were created by him, and for him: And he is before all things, and by him all things consist." Christ is the one toward whom all creation tends, the one whose glory all creation reflects. In Him, the cosmic chorus reaches its center and finds its meaning. [res:bible-odyssey-psalm-148]',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Praise ye the Lord from the heavens...Praise the Lord from the earth...Let them praise the name of the Lord.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 148 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalm-148',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 148 with Jewish Commentary',
      url: 'https://www.sefaria.org/Psalms.148',
      description: 'Hebrew text with rabbinic and medieval Jewish commentaries.',
    },
    {
      id: 'bible-odyssey-psalm-148',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Psalm 148 Study Guide',
      url: 'https://www.bibleodyssey.org/?q=psalm+148',
      description: 'Thematic study and historical background from the Society of Biblical Literature.',
    },
  ],

  hasHebrew: true,
};
