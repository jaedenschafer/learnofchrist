import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 92 — Thanksgiving on the Sabbath
 *
 * "It is a good thing to give thanks unto the Lord." This is the Sabbath psalm,
 * and it speaks of rest, of gratitude, of the work of God. The psalmist delights
 * in the works of the Lord, marvels at His thoughts. While the wicked flourish
 * like grass and are destined for destruction, the righteous will flourish like
 * the palm tree, grow like the cedar of Lebanon. Rest is not idleness. Rest is
 * the place where we recognize that the work is God&apos;s work, and we can lay
 * down our burdens. In Christ, we find rest for our souls.
 */
export const PSALMS_92: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 92,

  estimatedMinutes: { beginner: 1, intermediate: 2, deep: 3 },
  intros: [
    'Psalm 92 is a psalm for the Sabbath day, and it is essentially a song of thanksgiving. The psalmist celebrates God&apos;s goodness, delights in His works, and finds rest in His faithfulness. Unlike many of the psalms, this one does not cry out in distress. Instead, it sings in contentment. It is a psalm for a day of rest, when the work ceases and we remember whose work we are.',
  ],

  sections: [
    {
      ref: 'Psalm 92:1–11',
      title: 'The Joy of Thanksgiving',
      blocks: [
        {
          kind: 'scripture',
          chapter: 92,
          lines: [
            plain(1, 'It is a good thing to give thanks unto the Lord, and to sing praises unto thy name, O most High:'),
            plain(2, 'To shew forth thy lovingkindness in the morning, and thy faithfulness every night,'),
            plain(3, 'Upon an instrument of ten strings, and upon the psaltery; upon the harp with a solemn sound.'),
            plain(4, 'For thou, Lord, hast made me glad through thy work: I will triumph in the works of thy hands.'),
            plain(5, 'O Lord, how great are thy works! and thy thoughts are very deep.'),
            plain(6, 'A brutish man knoweth not; neither doth a fool understand this.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps92-mid',
          html:
            'Gratitude turns to contrast. The wicked flourish like grass, but they are destined for ruin. The righteous, by contrast, endure. God&apos;s foolish cannot see this truth, but it runs through all of history. [res:sefaria-psalm-92]',
        },
        {
          kind: 'scripture',
          chapter: 92,
          lines: [
            plain(7, 'When the wicked spring as the grass, and when all the workers of iniquity do flourish; it is that they shall be destroyed for ever:'),
            plain(8, 'But thou, Lord, art most high for evermore.'),
            plain(9, 'For, lo, thine enemies, O Lord, for, lo, thine enemies shall perish; all the workers of iniquity shall be scattered.'),
            plain(10, 'But my horn shalt thou exalt like the horn of an unicorn: I shall be anointed with fresh oil.'),
            plain(11, 'Mine eye also shall see my desire on them that are mine enemies, and mine ears shall hear my desire of the wicked that rise up against me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps92-good',
          html:
            '"It is a good thing to give thanks unto the Lord." Not merely a duty, not merely a ritual, but a good thing—something that brings joy, that aligns the soul with reality, that opens the heart to receive what has been given. Thanksgiving is not about changing God&apos;s mind. It is about aligning our perception with reality: God is good, His works are great, we have received much.',
        },
        {
          kind: 'commentary',
          id: 'ps92-made-glad',
          html:
            '"Thou hast made me glad through thy work." God&apos;s work brings gladness. The psalmist is not claiming that his life is easy, but that as he contemplates what God has done, he finds cause for joy. The work of God—creation, redemption, sustenance—is grounds for gladness.',
        },
        {
          kind: 'hebrew',
          id: 'ps92-malachim',
          title: 'Malachim — "Works" (Actions, Deeds)',
          script: 'מַלְאָכִים',
          translit: '<strong>Malachim</strong> · works; deeds; accomplishments',
          description:
            'The psalmist delights in God&apos;s works—all that God has done, all that God sustains. To contemplate God&apos;s works is to find joy, because they reveal His wisdom, power, and love.',
        },
        {
          kind: 'reflection',
          id: 'ps92-joy',
          prompt: 'When was the last time you felt genuine joy as you contemplated God&apos;s works in your life? What specifically did you recognize?',
        },
      ],
    },

    {
      ref: 'Psalm 92:12–15',
      title: 'The Righteous Flourish',
      blocks: [
        {
          kind: 'scripture',
          chapter: 92,
          lines: [
            plain(12, 'The righteous shall flourish like the palm tree: he shall grow like a cedar in Lebanon.'),
            plain(13, 'Those that be planted in the house of the Lord shall flourish in the courts of our God.'),
            plain(14, 'They shall still bring forth fruit in old age; they shall be fat and flourishing;'),
            plain(15, 'To shew that the Lord is upright: he is my rock, and there is no unrighteousness in him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps92-palm',
          html:
            'The righteous are like the palm tree and the cedar—not delicate, not easy to uproot, not dependent on ideal conditions. They flourish. They bring forth fruit even in old age. This is not the false promise that the righteous will never suffer. Rather, it is the assurance that the righteous life bears fruit, that faithfulness endures, that God sustains His own.',
        },
        {
          kind: 'commentary',
          id: 'ps92-planted',
          html:
            '"Those that be planted in the house of the Lord shall flourish in the courts of our God." This is the key. To be planted in God&apos;s house is to have roots in Him. And those rooted in Him will flourish, will bear fruit, will endure.',
        },
        {
          kind: 'christ',
          id: 'ps92-christ-rest',
          title: 'Christ Connection — Rest for the Weary',
          html:
            'In Matthew 11:28, Jesus says, "Come unto me, all ye that labour and are heavy laden, and I will give you rest." The Sabbath rest foreshadows the rest found in Christ. Not idleness, but the peace that comes from trusting that the work is God&apos;s work, not ours alone. We rest in Him. [res:bible-odyssey-psalm-92]',
        },
        {
          kind: 'carry',
          html:
            'The Sabbath is not escape from work but perspective on it. One day of rest a week, when we cease our labors and remember that God is God and we are not. This is where we find renewal. This is where we give thanks. And this is where we remember that our deepest roots are not in our productivity, but in God.',
        },
        {
          kind: 'reflection',
          id: 'ps92-sabbath',
          prompt: 'How do you currently observe rest? What would it look like to truly give thanks, to lay down your labors, and to remember that God is sustaining all things?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'It is a good thing to give thanks unto the Lord. The righteous shall flourish like the palm tree.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 92 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalm-92',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalm 92 with Jewish Commentary',
      url: 'https://www.sefaria.org/Psalms.92',
      description: 'Hebrew text with rabbinic and medieval Jewish commentaries.',
    },
    {
      id: 'bible-odyssey-psalm-92',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Psalm 92 Study Guide',
      url: 'https://www.bibleodyssey.org/?q=psalm+92',
      description: 'Thematic study and historical background from the Society of Biblical Literature.',
    },
  ],

  hasHebrew: true,
};
