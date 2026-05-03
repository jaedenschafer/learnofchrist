import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 128 — Blessed Is Every One That Feareth the Lord
 *
 * "Blessed is every one that feareth the Lord; that walketh in his ways."
 * A song of ascents celebrating the blessings that follow the fear of God.
 * The blessed man eats the labor of his hands. His wife is as a fruitful vine.
 * His children are as olive plants. Peace rests upon Israel.
 * Christ connection: blessing through Christ; the abundance that flows
 * from a life lived in reverence toward God.
 */
export const PSALMS_128: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 128,

  estimatedMinutes: { 5: 1, 10: 3, 15: 4 },
  intros: [
    'Psalm 128 echoes Psalm 1 with its opening word—blessed—and returns to the fundamental promise: blessedness flows from fearing the Lord, from walking in His ways. But this blessing is not abstract or spiritual only. It is concrete, domestic, abundant. The blessed man eats the fruit of his own labor. His wife is fruitful. His children flourish. His family is prosperous, at peace. The fear of the Lord—a deep reverence, a submission of the whole self to God&apos;s authority—is the root from which all these blessings grow.',
  ],

  sections: [
    {
      ref: 'Psalm 128:1–6',
      title: 'The Blessed and Fruitful Life',
      blocks: [
        {
          kind: 'scripture',
          chapter: 128,
          lines: [
            plain(1, 'Blessed is every one that feareth the Lord; that walketh in his ways.'),
            plain(2, 'For thou shalt eat the labour of thine hands: happy shalt thou be, and it shall be well with thee.'),
            plain(3, 'Thy wife shall be as a fruitful vine by the sides of thine house: thy children like olive plants round about thy table.'),
            plain(4, 'Behold, that thus shall the man be blessed that feareth the Lord.'),
            plain(5, 'The Lord shall bless thee out of Zion: and thou shalt see the good of Jerusalem all the days of thy life.'),
            plain(6, 'Yea, thou shalt see thy children&apos;s children, and peace upon Israel.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps128-fear',
          html:
            'To fear the Lord is not to cower in terror. It is to revere, to honor, to walk carefully in the awareness of His holiness and greatness. It is a submission of the will, a recognition that God&apos;s way is the true way. And the promise follows: every one who walks this path is blessed. Not some. Not the lucky few. Every one.',
        },
        {
          kind: 'commentary',
          id: 'ps128-labor',
          html:
            '"Thou shalt eat the labour of thine hands." The blessed man enjoys the fruit of his own work. He is not exploited. He is not robbed. What he labors for, he receives. This is not merely a statement about economics. It is a statement about the dignity of work, the righteousness of being able to enjoy what one has produced, the sense of satisfaction that comes from honest labor well rewarded.',
        },
        {
          kind: 'commentary',
          id: 'ps128-fruitful',
          html:
            '"Thy wife shall be as a fruitful vine by the sides of thine house." The image is domestic, intimate, domestic. The wife is not described as an ornament or a possession. She is fruitful, productive, bringing forth life. She is at the sides of the house—not hidden away, but present, central to the home. And the children—"like olive plants round about thy table." Young olive trees growing, strong, numerous. The table is the place of gathering, of nourishment, of family unity.',
        },
        {
          kind: 'commentary',
          id: 'ps128-zion',
          html:
            '"The Lord shall bless thee out of Zion." The blessing flows from the place where God dwells, from the seat of His presence and power. And the promise extends not just to the present moment, but to the future: "Thou shalt see thy children&apos;s children, and peace upon Israel." Longevity, continuity, generations continuing, peace spreading not just to one family but to all of God&apos;s people.',
        },
        {
          kind: 'christ',
          id: 'ps128-christ-blessing',
          title: 'Christ Connection — The Source of Blessing',
          html:
            'Jesus taught that the abundant life comes through abiding in Him (John 15:1–8). The fruitfulness described in Psalm 128—the wife as a fruitful vine, the children as olive plants—are images of blessing that find their ultimate source in Christ. To fear God in the Christian understanding is to surrender to Christ, to align oneself with His way. And from that alignment flows blessing that overflows to family, to work, to the whole community.',
        },
        {
          kind: 'carry',
          html:
            'Psalm 128 speaks to the goodness of ordinary life: work, marriage, children, family meals gathered around a table. It asserts that these things are not distractions from spirituality, but expressions of it. The person who fears the Lord and walks in His ways finds that blessing extends to the most intimate, everyday dimensions of life. Your work is blessed. Your family is blessed. Your home is a place of fruitfulness.',
        },
        {
          kind: 'reflection',
          id: 'ps128-ordinary',
          prompt:
            'Where do you see blessing in your ordinary life—your work, your relationships, your family? How might viewing these ordinary things as blessings from God change your gratitude and your stewardship of them? What would it look like to fear the Lord in the midst of your daily responsibilities?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Blessed is every one that feareth the Lord; that walketh in his ways. Thy wife shall be as a fruitful vine; thy children like olive plants round about thy table.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 128 · Study Guide',
  },
};
