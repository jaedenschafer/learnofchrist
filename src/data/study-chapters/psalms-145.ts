import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 145 — The Acrostic of Praise
 *
 * The only acrostic psalm attributed to David, Psalm 145 is a meditation on
 * God&apos;s character, moving through the alphabet—each verse beginning with the
 * next Hebrew letter. "I will extol thee, my God, O king...The Lord is gracious,
 * and full of compassion...The Lord is nigh unto all them that call upon him in
 * truth." The acrostic form—moving methodically from beginning to end—suggests
 * completeness. God&apos;s character is complete, His care is comprehensive, His
 * nearness extends to all who call upon Him.
 */
export const PSALMS_145: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 145,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 4 },
  intros: [
    'Psalm 145 is unique: it is the only alphabetic acrostic psalm attributed to David. An acrostic psalm works through the Hebrew alphabet systematically, beginning each verse with the next letter in sequence. This form creates a sense of completeness—from aleph to tav, from the beginning to the end, God&apos;s praise is complete. And what makes this psalm remarkable is what is said about God: His greatness is unsearchable. His kingdom is an everlasting kingdom. His dominion endures throughout all generations. Yet He is gracious, compassionate, slow to anger, and great in mercy. He is near to all who call upon Him in truth. The acrostic form is not mere literary device. It teaches: God&apos;s character, from beginning to end, is worthy of complete and comprehensive praise.',
  ],

  sections: [
    {
      ref: 'Psalm 145:1–9',
      title: 'The Great and Gracious God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 145,
          lines: [
            plain(1, 'I will extol thee, my God, O king; and I will bless thy name for ever and ever.'),
            plain(2, 'Every day will I bless thee; and I will praise thy name for ever and ever.'),
            plain(3, 'Great is the Lord, and greatly to be praised: and his greatness is unsearchable.'),
            plain(4, 'One generation shall praise thy works to another, and shall declare thy mighty acts.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps145-praise-works',
          html:
            'One generation praises God. Now the focus widens: every tongue will speak of his mighty acts. [res:sefaria-psalm-145]',
        },
        {
          kind: 'scripture',
          chapter: 145,
          lines: [
            plain(5, 'I will speak of the glorious honour of thy majesty, and of thy wondrous works.'),
            plain(6, 'And men shall speak of the might of thy terrible acts: and I will declare thy greatness.'),
            plain(7, 'They shall abundantly utter the memory of thy great goodness, and shall sing of thy righteousness.'),
            plain(8, 'The Lord is gracious, and full of compassion; slow to anger, and of great mercy.'),
            plain(9, 'The Lord is good to all: and his tender mercies are over all his works.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalm145-extol',
          html:
            '"I will extol thee, my God, O king." The opening is immediate and personal. Not an impersonal meditation, but "my God." And the commitment is absolute: "I will bless thy name for ever and ever...Every day will I bless thee." This is not prayer offered once and forgotten. It is a daily, eternal commitment to praise[res:bibleodyssey-hymns-praise].',
        },
        {
          kind: 'hebrew',
          id: 'psalm145-gadol',
          title: 'Gadol — "Great" (Mighty)',
          script: 'גָּדוֹל',
          translit: '<strong>Gadol</strong> · great, mighty, important, of highest status or power',
          description:
            'The word gadol encompasses both size and significance. God&apos;s greatness is not just spatial or quantitative. It is His authority, His importance, His supreme status.',
        },
        {
          kind: 'commentary',
          id: 'psalm145-unsearchable',
          html:
            '"Great is the Lord, and greatly to be praised: and his greatness is unsearchable." God&apos;s greatness cannot be exhaustively understood or catalogued. It exceeds all measure. Yet it is this unsearchable greatness that is to be praised—not because we can comprehend it fully, but because its very incomprehensibility inspires awe and worship.',
        },
        {
          kind: 'commentary',
          id: 'psalm145-generation',
          html:
            '"One generation shall praise thy works to another, and shall declare thy mighty acts." God&apos;s works are not known by a single generation and forgotten. Each generation receives them, praises them, passes them on. This is how God&apos;s memory remains alive in human hearts.',
        },
        {
          kind: 'commentary',
          id: 'psalm145-gracious',
          html:
            '"The Lord is gracious, and full of compassion; slow to anger, and of great mercy." Here the tone shifts. The God of great power is also the God of grace, compassion, and mercy. He is slow to anger—patient, not eager to judge. His mercy is great. The acrostic structure emphasizes that both—power and grace—are complete. God is entirely powerful and entirely compassionate.',
        },
        {
          kind: 'commentary',
          id: 'psalm145-tender-mercies',
          html:
            '"The Lord is good to all: and his tender mercies are over all his works." Goodness is not limited to the righteous. It extends to all creation. The tender mercies—the compassionate care—of God extend even to His creatures, not just to humans. Creation itself is held in divine care.',
        },
      ],
    },

    {
      ref: 'Psalm 145:10–21',
      title: 'The Lord Is Nigh to All Who Call',
      blocks: [
        {
          kind: 'scripture',
          chapter: 145,
          lines: [
            plain(10, 'All thy works shall praise thee, O Lord; and thy saints shall bless thee.'),
            plain(11, 'They shall speak of the glory of thy kingdom, and talk of thy power;'),
            plain(12, 'To make known to the sons of men his mighty acts, and the glorious majesty of his kingdom.'),
            plain(13, 'Thy kingdom is an everlasting kingdom, and thy dominion endureth throughout all generations.'),
            plain(14, 'The Lord upholdeth all that fall, and raiseth up all those that be bowed down.'),
            plain(15, 'The eyes of all wait upon thee; and thou givest them their meat in due season.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps145-mid',
          html:
            'God&apos;s kingdom is eternal and His dominion endures. But the focus shifts from cosmic rule to personal care: He upholds the fallen, provides for all creatures, opens His hand in generosity. The greatest King is also the most intimate Father.',
        },
        {
          kind: 'scripture',
          chapter: 145,
          lines: [
            plain(16, 'Thou openest thine hand, and satisfiest the desire of every living thing.'),
            plain(17, 'The Lord is righteous in all his ways, and holy in all his works.'),
            plain(18, 'The Lord is nigh unto all them that call upon him, to all that call upon him in truth.'),
            plain(19, 'He will fulfil the desire of them that fear him: he also will hear their cry, and will save them.'),
            plain(20, 'The Lord preserveth all them that love him: but all the wicked will he destroy.'),
            plain(21, 'My mouth shall speak the praise of the Lord: and let all flesh bless his holy name for ever and ever.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'psalm145-all-praise',
          html:
            '"All thy works shall praise thee, O Lord; and thy saints shall bless thee." Not just humans, but all creation participates in praising God. And the saints—those set apart—bless His name. Praise is universal.',
        },
        {
          kind: 'commentary',
          id: 'psalm145-everlasting',
          html:
            '"Thy kingdom is an everlasting kingdom, and thy dominion endureth throughout all generations." God&apos;s kingdom is not temporary. It is eternal. His rule does not fade with the rise and fall of earthly kingdoms. It endures throughout all generations.',
        },
        {
          kind: 'commentary',
          id: 'psalm145-uphold-fall',
          html:
            '"The Lord upholdeth all that fall, and raiseth up all those that be bowed down." The care of God extends to the fallen, to those brought low, to those bent under burden. He lifts them up. This is not abstract—it is the active, personal care of God for the broken.',
        },
        {
          kind: 'commentary',
          id: 'psalm145-meat-due-season',
          html:
            '"Thou openest thine hand, and satisfiest the desire of every living thing." The image of God&apos;s open hand—generous, giving—is beautiful. He provides for every living creature. Not just humans, but all. And not grudgingly, but generously, satisfying desire.',
        },
        {
          kind: 'commentary',
          id: 'psalm145-nigh',
          html:
            '"The Lord is nigh unto all them that call upon him, to all that call upon him in truth." Here is the psalm&apos;s heart: God is near. Not distant, not removed, not requiring elaborate ritual or intermediaries. Near to all who call—and the call must be in truth, sincere, from the heart.',
        },
        {
          kind: 'carry',
          html:
            'Psalm 145 invites a practice: to praise God daily, throughout life. To recognize God&apos;s greatness and goodness in small things—in daily bread, in upholding when we fall, in nearness when we call. The acrostic reminds us that God&apos;s praise is complete, comprehensive. There is no part of our existence that falls outside His care or deserves our gratitude.',
        },
        {
          kind: 'christ',
          id: 'psalm145-christ-nigh',
          title: 'Christ Connection — Christ, God Made Nigh',
          html:
            'In Philippians 4:5, Paul writes: "The Lord is near." This is the fulfillment of Psalm 145. In Christ, God became nigh in the most intimate way—present in human form, near to the sick and the broken, calling the weary to come to Him. Christ is God&apos;s answer to the soul that cries out: "Be near me." [res:bible-odyssey-psalm-145]',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I will extol thee, my God, O king...The Lord is nigh unto all them that call upon him in truth.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 145 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalm-145',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 145 with Jewish Commentary',
      url: 'https://www.sefaria.org/Psalms.145',
      description: 'Hebrew text with rabbinic and medieval Jewish commentaries.',
    },
    {
      id: 'bible-odyssey-psalm-145',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Psalm 145 Study Guide',
      url: 'https://www.bibleodyssey.org/?q=psalm+145',
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
