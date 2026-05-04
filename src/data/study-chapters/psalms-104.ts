import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 104 — The Majesty of Creation
 *
 * "Bless the Lord, O my soul. O Lord my God, thou art very great." This is a
 * creation hymn—a celebration of God as revealed through what He has made. The
 * psalmist surveys the heavens, the earth, the sea, the creatures. He sees God
 * in the precision of gravity holding the world, in the springs that water the
 * valleys, in the nesting birds, in the wine that makes the heart glad. All things
 * are held in being by God, who is clothed in light as a garment.
 */
export const PSALMS_104: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 104,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 6 },
  topicTags: ['praise', 'lament', 'hope', 'protection'],
  opener: {
    topical: true,
    caption: 'Psalms 104',
  },
  intros: [
    'Psalm 104 opens the same way Psalm 103 opens—"Bless the Lord, O my soul"—but here the psalmist directs our attention outward, to the created world. Where Psalm 103 celebrates God&apos;s mercy toward us, Psalm 104 celebrates God as Creator and Sustainer of all things. The psalmist sees divinity written across creation. God stretches out the heavens like a curtain. He lays the beams of His chambers in the waters. He rides on the wings of the wind. He speaks and things come into being. And then the psalmist zooms in: he sees the springs that water the creatures, the grass that feeds the animals, the bread that nourishes humans, the wine that makes the heart glad. All of this—from the vast vault of heaven to the small thing of a bird finding its nest—is the work of God&apos;s hands.',
    'This psalm teaches us to read creation as a text written by God. When we walk through a forest, when we see the organization and interdependence of nature, when we observe how each creature has a role and a place, we are reading God&apos;s commentary on His own character. God is powerful, precise, generous, and caring. All of this is visible in what He has made.',
  ],

  sections: [
    {
      ref: 'Psalm 104:1–18',
      title: 'The Work of God&apos;s Hands',
      blocks: [
        {
          kind: 'scripture',
          chapter: 104,
          lines: [
            plain(1, 'Bless the Lord, O my soul. O Lord my God, thou art very great; thou art clothed with honour and majesty.'),
            plain(2, 'Who coverest thyself with light as with a garment: who stretchest out the heavens like a curtain:'),
            plain(3, 'Who layeth the beams of his chambers in the waters: who maketh the clouds his chariot: who walketh upon the wings of the wind:'),
            plain(4, 'Who maketh his angels spirits; his ministers a flaming fire:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps104-creator-care',
          html:
            'The psalmist has called everything to praise. Now he zooms into one truth: God feeds them all. [res:sefaria-psalm-104]',
        },
        {
          kind: 'scripture',
          chapter: 104,
          lines: [
            plain(5, 'Who laid the foundations of the earth, that it should not be removed for ever.'),
            plain(8, 'The mountains rose, the valleys sank down to the place which thou hadst founded for them.'),
            plain(10, 'He sendeth the springs into the valleys, which run among the hills.'),
            plain(12, 'By them shall the fowls of the heaven have their habitation, which sing among the branches.'),
            plain(13, 'He watereth the hills from his chambers: the earth is satisfied with the fruit of thy works.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps104-mid',
          html:
            'The psalmist stops describing the heavens and starts describing the herbs. The same God who set the stars feeds the cattle. The cosmic and the daily are one work of one Creator[res:bibleodyssey-hymns-praise].',
        },
        {
          kind: 'scripture',
          chapter: 104,
          lines: [
            plain(14, 'He causeth the grass to grow for the cattle, and herb for the service of man: that he may bring forth food out of the earth;'),
            plain(15, 'And wine that maketh glad the heart of man, and oil to make his face to shine, and bread which strengtheneth man&apos;s heart.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps104-clothed-light',
          html:
            'The psalmist describes God with cosmic imagery. He is clothed with light as a garment. He stretches the heavens like a curtain. He lays beams in the waters and rides on the wings of wind. These are not literal descriptions but poetic attempts to capture God&apos;s scale and power. God is so vast that the heavens are His fabric, so mighty that the winds are His transportation. He is beyond our categories and yet revealed through what we can see.',
        },
        {
          kind: 'commentary',
          id: 'ps104-foundations',
          html:
            'But then the imagery shifts. After the cosmic sweep, the psalmist zooms in. He sees the springs that flow into the valleys, the hills that are watered, the grass that feeds the cattle. He sees the wine that makes the heart glad, the oil that makes the face shine, the bread that strengthens the heart. These small things—a spring of water, a blade of grass, a cup of wine—are also God&apos;s work. He is not only the maker of cosmos but the maker of small mercies.',
        },
        {
          kind: 'hebrew',
          id: 'ps104-gadol',
          title: 'Gadol — "Great" (Vastness)',
          script: 'גָּדוֹל',
          translit: '<strong>Gadol</strong> · great; large; mighty; significant; of great importance',
          description:
            'The Hebrew word gadol means great—not merely in size but in significance and power. God is gadol not because He takes up space but because His power and significance are immeasurable. To call God gadol is to acknowledge that we stand before something beyond our comprehension and control.',
        },
        {
          kind: 'carry',
          html:
            'The psalm invites us to practice a kind of sacred attention: looking at the world and asking, "What is God revealing here?" When you see a spring of water flowing through a desert, you are seeing God&apos;s generosity. When you taste bread or wine, you are tasting God&apos;s provision. The world is not mute. It is constantly speaking about the One who made it. But we must learn to listen.',
        },
        {
          kind: 'reflection',
          id: 'ps104-gods-work',
          prompt: 'Find something in nature—a plant, an animal, a weather pattern, a geological formation. What does it reveal about God&apos;s character?',
        },
      ],
    },

    {
      ref: 'Psalm 104:19–35',
      title: 'The Care of the Creator',
      blocks: [
        {
          kind: 'scripture',
          chapter: 104,
          lines: [
            plain(19, 'He appointed the moon for seasons: the sun knoweth his going down.'),
            plain(24, 'O Lord, how manifold are thy works! in wisdom hast thou made them all: the earth is full of thy riches.'),
            plain(27, 'These wait all upon thee; that thou mayest give them their meat in due season.'),
            plain(28, 'That thou givest them they gather: thou openest thine hand, they are filled with good.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps104-creation-rhythm',
          html:
            'The psalmist pivots from the sea&apos;s creatures to the daily provisioning of all things. The God who made leviathan also fills the sparrow&apos;s mouth.',
        },
        {
          kind: 'scripture',
          chapter: 104,
          lines: [
            plain(29, 'Thou hidest thy face, they are troubled: thou takest away their breath, they die, and return to their dust.'),
            plain(30, 'Thou sendest forth thy spirit, they are created: and thou renewest the face of the earth.'),
            plain(33, 'I will sing unto the Lord as long as I live: I will sing praise to my God while I have my being.'),
            plain(34, 'My meditation of him shall be sweet: I will be glad in the Lord.'),
            plain(35, 'Let the sinners be consumed out of the earth, and let the wicked be no more. Bless thou the Lord, O my soul. Praise ye the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps104-manifold-works',
          html:
            'The psalmist surveys all of creation and exclaims: "O Lord, how manifold are thy works! In wisdom hast thou made them all." Creation is not a random sprawl but an ordered wisdom. Each creature is provided for. Each has its sustenance. The moon marks the seasons. The sun knows when to set. All creatures wait upon God for their food, and when He opens His hand they are satisfied.',
        },
        {
          kind: 'commentary',
          id: 'ps104-hide-face',
          html:
            'And then the psalmist speaks of God&apos;s hiddenness: "Thou hidest thy face, they are troubled." When God withdraws His sustaining presence, the creatures die and return to dust. But then: "Thou sendest forth thy spirit, they are created: and thou renewest the face of the earth." Creation is not self-sustaining. It depends on God&apos;s continuous upholding. Every breath taken by every creature is a breath given by God. Every spring that flows, every plant that grows—all exist because God is actively sustaining them.',
        },
        {
          kind: 'christ',
          id: 'ps104-christ-sustainer',
          title: 'Christ Connection — By Whom All Things Consist',
          html:
            'Paul describes Christ in Colossians 1:17: "By him all things consist." The One who created the world also sustains it. Every breath taken by every creature is sustained by Christ&apos;s power. Every spring that flows, every seed that grows, every atom that holds together—all are upheld by the Word of God. Psalm 104 is a hymn to Christ&apos;s continuous, moment-by-moment care for creation. [res:bible-odyssey-psalm-104]',
        },
        {
          kind: 'carry',
          html:
            'Knowing that God sustains all things can reshape how we move through the world. Every meal is a gift. Every sunrise is a renewal. We are invited not to take creation for granted but to live in constant awareness that we are dependent, moment by moment, on God&apos;s generosity. The psalmist responds with singing: "I will sing unto the Lord as long as I live...My meditation of him shall be sweet."',
        },
        {
          kind: 'reflection',
          id: 'ps104-sustained',
          prompt: 'What would change about the way you live if you truly believed that every breath, every bite of food, every moment of existence is sustained by God?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'O Lord my God, thou art very great. How manifold are thy works! In wisdom hast thou made them all.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 104 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalm-104',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 104 with Jewish Commentary',
      url: 'https://www.sefaria.org/Psalms.104',
      description: 'Hebrew text with rabbinic and medieval Jewish commentaries.',
    },
    {
      id: 'bible-odyssey-psalm-104',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Psalm 104 Study Guide',
      url: 'https://www.bibleodyssey.org/?q=psalm+104',
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

  hasHebrew: true,
};
