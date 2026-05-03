import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 137 — Remembering Zion in Exile
 *
 * "By the rivers of Babylon, there we sat down, yea, we wept, when we
 * remembered Zion." This is exile distilled into a few lines. The psalmist is
 * far from home, enslaved or captive, forced to sing songs of joy while the
 * heart breaks with longing. The psalmist refuses: he will not forget
 * Jerusalem. He will not let his grief be turned to entertainment for
 * oppressors. And the psalm ends with an imprecation—a raw prayer for justice
 * against those who destroyed Zion. This is pain given words.
 */
export const PSALMS_137: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 137,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 4 },
  intros: [
    'Psalm 137 is traditionally read as a prayer of the Israelites during the Babylonian captivity, written after the fall of Jerusalem in 586 BC. It is a psalm of grief, homesickness, and rage. Yet it is also a psalm about faithfulness—a refusal to forget, to betray, or to compromise conviction even in exile. The psalmist sits by the rivers of Babylon, far from the temple, far from home. Captors demand songs. But the psalmist refuses to sing joy while heart-broken, refusing to turn sacred memory into entertainment for oppressors. Instead, the psalm offers something rarer: the honest, unfiltered cry of the exiled soul.',
  ],

  sections: [
    {
      ref: 'Psalm 137:1–4',
      title: 'By the Rivers of Babylon',
      blocks: [
        {
          kind: 'scripture',
          chapter: 137,
          lines: [
            plain(1, 'By the rivers of Babylon, there we sat down, yea, we wept, when we remembered Zion.'),
            plain(2, 'We hanged our harps upon the willows in the midst thereof.'),
            plain(3, 'For there they that carried us away captive required of us a song; and they that wasted us required of us mirth, saying, Sing us one of the songs of Zion.'),
            plain(4, 'How shall we sing the Lord&apos;s song in a strange land?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalm137-babylon',
          html:
            'The opening image is devastating: by the rivers of Babylon, they sat down and wept. They were far from home, captive, displaced. The rivers of Babylon were not the Jordan. Babylon was not Zion. Yet while they wept, the captors came with a request—a demand, really—for entertainment. Sing for us. Give us your sacred songs. Make us mirth with the music of your god. The cruelty is compounded: they are asked to perform joy while enslaved, to turn their most sacred traditions into entertainment for their oppressors. [res:sefaria-psalm-137]',
        },
        {
          kind: 'commentary',
          id: 'psalm137-harps',
          html:
            'So the psalmist hung his harp upon a willow tree. The instrument of praise, of celebration, of connection to God became mute. It could not be played because the heart could not sing. "How shall we sing the Lord&apos;s song in a strange land?" This is not refusal born of bitterness alone. It is theological integrity. The songs of Zion were songs of the temple, of God&apos;s presence in Jerusalem. To sing them in Babylon as if God were there, as if the captors&apos; entertainment mattered more than truth, would be a lie. The psalmist refuses[res:bibleodyssey-psalter-laments].',
        },
        {
          kind: 'hebrew',
          id: 'psalm137-zamar',
          title: 'Zamar — "Sing" (Play Music)',
          script: 'זָמַר',
          translit: '<strong>Zamar</strong> · to make music, to sing, to play an instrument (especially with joyful intent)',
          description:
            'The verb zamar means to play music, to sing, often in a context of celebration and praise. To refuse to zamar is to refuse celebration, to refuse to make the soul light when it is broken. It is an act of grief, of resistance, of fidelity to the truth of what one feels and knows.',
        },
        {
          kind: 'carry',
          html:
            'Psalm 137 raises a question that touches every exiled soul: How do you maintain your core identity and values when the world around you demands something different? How do you remember what you truly love and believe when forces around you insist you perform something else? The psalmist&apos;s answer is simple: you don&apos;t. You hang up your harp. You refuse the lie of false cheer. You hold to what is true.',
        },
      ],
    },

    {
      ref: 'Psalm 137:5–9',
      title: 'I Will Not Forget',
      blocks: [
        {
          kind: 'scripture',
          chapter: 137,
          lines: [
            plain(5, 'If I forget thee, O Jerusalem, let my right hand forget her cunning.'),
            plain(6, 'If I forget thee, let my tongue cleave to the roof of my mouth; if I prefer not Jerusalem above my chief joy.'),
            plain(7, 'Remember, O Lord, the children of Edom in the day of Jerusalem; who said, Rase it, rase it, even to the foundation thereof.'),
            plain(8, 'O daughter of Babylon, who art to be destroyed; happy shall he be, that rewardeth thee as thou hast dealt with us.'),
            plain(9, 'Happy shall he be, that taketh thy little ones and dasheth them against the stones.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalm137-covenant',
          html:
            'Then comes a solemn oath: "If I forget thee, O Jerusalem, let my right hand forget her cunning." The psalmist is swearing an oath of faithfulness. To forget Jerusalem would be to lose his very identity, his skill as a musician, his tongue. Jerusalem is not one city among many. It is the center of covenant, the place of God&apos;s presence, the heart of what makes him himself. To forget it would be to become less than human, to lose the very faculties that make him alive.',
        },
        {
          kind: 'commentary',
          id: 'psalm137-imprecation',
          html:
            'But then the psalm turns harsh. It recalls the enemies of Jerusalem—Edom and Babylon. "Remember, O Lord, the children of Edom...who said, Rase it, rase it, even to the foundation thereof." Rase means to level, to destroy utterly. The Edomites gloated over Jerusalem&apos;s fall. So the psalmist prays for judgment. And the prayer is not gentle. "Happy shall he be, that taketh thy little ones and dasheth them against the stones." This is the psalmist&apos;s demand for justice—that Babylon be destroyed as it destroyed Zion, that its children suffer as Zion&apos;s suffered.',
        },
        {
          kind: 'commentary',
          id: 'psalm137-imprecation-meaning',
          html:
            'These words are difficult. Yet they are honest. The psalm does not hide the psalmist&apos;s rage, his thirst for revenge, his desire to see justice done. Whether or not we agree with the prayer, we recognize its authenticity. The psalmist brings his full heart—grief, anger, sense of betrayal—before God. He does not sanitize it. He does not pretend peace. He asks God to see what was done to his people and to make it right.',
        },
        {
          kind: 'christ',
          id: 'psalm137-christ-exile',
          title: 'Christ Connection — Christ in Exile and Return',
          html:
            'Christ knows exile. He was born into a world that did not receive Him. He was rejected, betrayed, crucified far from home—far from the Father&apos;s side, though only briefly. Yet unlike the psalmist&apos;s vision of divine vengeance on enemies, Christ&apos;s response to those who destroyed Him was forgiveness: "Father, forgive them; for they know not what they do." Christ transforms the exile&apos;s cry. The imprecation gives way to redemption. [res:bible-odyssey-psalm-137]',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'By the rivers of Babylon, there we sat down, yea, we wept, when we remembered Zion.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 137 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalm-137',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 137 with Jewish Commentary',
      url: 'https://www.sefaria.org/Psalms.137',
      description: 'Hebrew text with rabbinic and medieval Jewish commentaries.',
    },
    {
      id: 'bible-odyssey-psalm-137',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Psalm 137 Study Guide',
      url: 'https://www.bibleodyssey.org/?q=psalm+137',
      description: 'Thematic study and historical background from the Society of Biblical Literature.',
    },
    {
      id: 'bibleodyssey-psalter-laments',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Laments in the Psalter',
      url: 'https://www.bibleodyssey.org/articles/laments/',
      description: 'SBL essay on the lament-psalm form and its function in giving voice to grief, complaint, and trust.',
    },

  ],

  hasHebrew: true,
};
