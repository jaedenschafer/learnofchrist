import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 97 — The Lord Reigneth; Let the Earth Rejoice
 *
 * "The Lord reigneth; let the earth rejoice; let the multitude of isles be glad
 * thereof." A declaration of God&apos;s sovereignty that extends to all the earth.
 * Clouds and darkness surround Him, but righteousness and judgment are the
 * foundation of His throne. Light is sown for the righteous, and gladness for
 * the upright in heart. The visible reign of God brings joy to the creation.
 */
export const PSALMS_97: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 97,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 3 },
  topicTags: ['praise', 'lament', 'hope', 'protection'],
  opener: {
    topical: true,
    caption: 'Psalms 97',
  },
  intros: [
    'Psalm 97 opens with a powerful affirmation echoed throughout the Psalms: The Lord reigneth. And immediately, the proper response is named: Let the earth rejoice. When God reigns, creation itself is invited to celebrate. This is not the reign of a tyrant, but of a righteous God whose rule brings joy and goodness.',
    'The psalm acknowledges that God is clothed in darkness—mystery, hiddenness, transcendence. Yet from that darkness comes light. Righteousness and judgment are the foundation of His throne. And those who are righteous, those who have upright hearts, rejoice in His light. They are glad.',
  ],

  sections: [
    {
      ref: 'Psalm 97:1–12',
      title: 'The Lord Reigneth; Let the Earth Rejoice',
      blocks: [
        {
          kind: 'scripture',
          chapter: 97,
          lines: [
            plain(1, 'The Lord reigneth; let the earth rejoice; let the multitude of isles be glad thereof.'),
            plain(2, 'Clouds and darkness are round about him: righteousness and judgment are the habitation of his throne.'),
            plain(3, 'A fire goeth before him, and burneth up his enemies round about.'),
            plain(4, 'His lightnings enlighten the world: the earth saw, and trembled.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms-97-78mid-1',
          html:
            'The Lord&apos;s cosmic reign opens into call for the righteous to rejoice and thanks to His holiness. Universal rule becomes personal response[res:bibleodyssey-hymns-praise].',
        },
        {
          kind: 'scripture',
          chapter: 97,
          lines: [
            plain(6, 'The heavens declare his righteousness: and all the people see his glory.'),
            plain(10, 'Ye that love the Lord, hate evil: he preserveth the souls of his saints; he delivereth them out of the hand of the wicked.'),
            plain(11, 'Light is sown for the righteous, and gladness for the upright in heart.'),
            plain(12, 'Rejoice in the Lord, ye righteous; and give thanks at the remembrance of his holiness.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalms97-reigneth',
          html: '"The Lord reigneth; let the earth rejoice; let the multitude of isles be glad thereof." The affirmation is absolute: The Lord reigns. [res:sefaria-psalm-97] And the proper response of all creation is joy. Not fear or trembling, but rejoicing. Even the islands—the distant, remote places—are called to be glad. God&apos;s reign extends everywhere.',
        },
        {
          kind: 'commentary',
          id: 'psalms97-clouds-darkness',
          html: '"Clouds and darkness are round about him: righteousness and judgment are the habitation of his throne." God is not fully visible or comprehensible. He is clothed in clouds and darkness—mystery, transcendence. Yet from that hiddenness comes a clear foundation: righteousness and judgment. God&apos;s throne is built on what is right and just.',
        },
        {
          kind: 'commentary',
          id: 'psalms97-fire-lightnings',
          html: '"A fire goeth before him, and burneth up his enemies...His lightnings enlighten the world." The metaphors are cosmic. Fire, lightning, the shaking of the earth—the visible manifestation of God&apos;s power. The lightnings that announce His coming also enlighten the world. God&apos;s power is directed both against enemies and for the illumination of all.',
        },
        {
          kind: 'commentary',
          id: 'psalms97-heavens-declare',
          html: '"The heavens declare his righteousness: and all the people see his glory." Creation itself testifies to God&apos;s righteousness. All people see His glory. Not just the righteous, not just believers, but all people are confronted with the evidence of God&apos;s character and power.',
        },
        {
          kind: 'commentary',
          id: 'psalms97-light-sown',
          html: '"Light is sown for the righteous, and gladness for the upright in heart." For those whose hearts are aligned with God&apos;s righteousness, there is light and gladness. Not darkness, not sorrow, but the joy of those who are in harmony with God&apos;s righteous reign.',
        },
        {
          kind: 'christ',
          id: 'ps97-christ',
          title: 'Christ Connection — The Lord Enthroned',
          html:
            'Hebrews quotes Psalm 97 directly about Jesus: "Let all the angels of God worship him" (Heb. 1:6, citing v. 7). The clouds and fire, the lightning and the shaking earth—they all announce a King. And Jesus took these images for His own return: "As the lightning cometh out of the east, and shineth even unto the west; so shall also the coming of the Son of man be" (Matt. 24:27). He will appear on the clouds with power and great glory (Rev. 1:7). The enthronement described here is His. [res:bible-odyssey-psalm-97]',
        },
        {
          kind: 'carry',
          html: 'Psalm 97 invites us to recognize that God&apos;s reign is marked by both holiness and joy. His righteousness is not grim or harsh; it is the foundation of gladness for those who are upright. We are invited to rejoice in His holiness, to find our joy in alignment with His righteous character.',
        },
        {
          kind: 'reflection',
          id: 'psalms97-rejoice-holiness',
          prompt: 'How might you rejoice in the Lord and give thanks at the remembrance of His holiness? What would it mean to have light and gladness sown for you?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The Lord reigneth; let the earth rejoice...Light is sown for the righteous, and gladness for the upright in heart.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 97 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalm-97',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 97 with Jewish Commentary',
      url: 'https://www.sefaria.org/Psalms.97',
      description: 'Hebrew text with rabbinic and medieval Jewish commentaries.',
    },
    {
      id: 'bible-odyssey-psalm-97',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Psalm 97 Study Guide',
      url: 'https://www.bibleodyssey.org/?q=psalm+97',
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
