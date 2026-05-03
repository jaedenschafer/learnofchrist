import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Proverbs 22 — A Good Name and Training in Righteousness
 *
 * A good name is rather to be chosen than great riches. Train up a child
 * in the way he should go: and when he is old, he will not depart from it.
 * Proverbs 22 marks the beginning of "the words of the wise" and teaches
 * that character endures while wealth fades, and that early formation shapes
 * a lifetime.
 */
export const PROVERBS_22: RichChapterContent = {
  bookSlug: 'proverbs',
  bookName: 'Proverbs',
  chapter: 22,

  estimatedMinutes: { 5: 1, 10: 2, 15: 3 },
  intros: [
    'Proverbs 22 opens a new section—"the words of the wise"—and immediately establishes its scale of values. A good name, reputation, character—choose this over riches. Wealth fades, is lost, is stolen. But a good name, built slowly through consistent integrity, endures and opens doors riches cannot. The chapter also teaches the foundational principle of education: that how we form a child early shapes who they become. Training is not coercion. It is formation according to their nature.',
  ],

  sections: [
    {
      ref: 'Proverbs 22:1',
      title: 'A Good Name Above Riches',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            plain(1, 'A good name is rather to be chosen than great riches, and loving favour rather than silver and gold.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov22-good-name',
          html:
            'The world values wealth. Accumulate it, display it, let it define you. But Proverbs reverses this. A good name—your reputation, your character as known in your community—is more valuable than all the riches you could amass. Why? Because a good name is portable. It goes before you and opens doors. It is built slowly and lasts. Riches are fragile—lost to theft, misfortune, bad judgment. A name, once established as good, endures.',
        },
        {
          kind: 'commentary',
          id: 'prov22-loving-favour',
          html:
            'Loving favour—the esteem in which others hold you, not because you have paid them but because of who you are—this is more valuable than silver and gold. This is not popularity or flattery. This is genuine regard earned through consistent character.',
        },
        {
          kind: 'carry',
          html:
            'What are you building—a name or a fortune? Which would matter more if everything else fell away?',
        },
        {
          kind: 'reflection',
          id: 'prov22-name',
          prompt: 'What name are you building for yourself? Is it one you would choose to be known by?',
        },
      ],
    },

    {
      ref: 'Proverbs 22:6',
      title: 'Training a Child in Their Way',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            plain(6, 'Train up a child in the way he should go: and when he is old, he will not depart from it.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov22-train-child',
          html:
            'This verse is not a promise of perfect obedience. It is a statement about formation and habit. A child trained early in a certain way develops patterns—of thinking, of responding, of choosing—that tend to persist. "In the way he should go" suggests not a one-size-fits-all path, but formation suited to the child&apos;s particular nature. Training is the shaping of that nature toward wisdom and righteousness.',
        },
        {
          kind: 'commentary',
          id: 'prov22-old-depart',
          html:
            'When he is old, he will not depart from it. The implication is that the habits and values formed in childhood become deep channels in the personality. They can be departed from—nothing is absolute—but the path is familiar and the pull is strong. This is why early formation matters so profoundly.',
        },
        {
          kind: 'christ',
          id: 'prov22-christ-children',
          title: 'Christ Connection — The Training of the Beloved',
          html:
            'Jesus said, "Suffer little children to come unto me: for of such is the kingdom of heaven." He also said He came not to be served but to serve, and to give His life as a ransom. He modeled a life formed in righteousness, in obedience to the Father, in the way of love. He is the pattern toward which all training ultimately points.',
        },
        {
          kind: 'carry',
          html:
            'If you are a parent, a teacher, a mentor—you are forming lives. Be intentional. Know that what you form early tends to endure. If you are being formed, know that you are being shaped toward something. Cooperate with the formation that leads toward wisdom.',
        },
        {
          kind: 'reflection',
          id: 'prov22-formed',
          prompt: 'How were you formed as a child? What patterns were set that you still carry? Which serve you, and which might you need to change?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'A good name is rather to be chosen than great riches, and loving favour rather than silver and gold.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Proverbs 22 · Study Guide',
  },
};
