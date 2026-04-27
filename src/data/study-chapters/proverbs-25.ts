import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Proverbs 25 — The Beauty of a Word Fitly Spoken and Bread to an Enemy
 *
 * A word fitly spoken is like apples of gold in pictures of silver. If
 * thine enemy be hungry, give him bread to eat. This collection of Solomon&apos;s
 * proverbs celebrates the power of words and the grace of love toward enemies.
 */
export const PROVERBS_25: RichChapterContent = {
  bookSlug: 'proverbs',
  bookName: 'Proverbs',
  chapter: 25,

  intros: [
    'Proverbs 25 opens by noting that these are "the proverbs of Solomon which the men of Hezekiah king of Judah copied out." Here is wisdom from an earlier generation, rediscovered and treasured. The chapter celebrates the precise beauty of language—a word fitly spoken, like apples of gold in vessels of silver—and the transformative power of kindness toward an enemy. Break bread with the one who would break you, and watch what happens.',
  ],

  sections: [
    {
      ref: 'Proverbs 25:11; 25:15',
      title: 'The Artistry of Words',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            plain(11, 'A word fitly spoken is like apples of gold in pictures of silver.'),
            plain(15, 'By long forbearing is a prince persuaded, and a soft tongue breaketh the bone.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov25-word-fitly',
          html:
            'A word at the right time, in the right context, with the right tone—this is like finding apples of gold, precious objects, set in vessels of silver. It is beautiful not merely because the word itself is good, but because it is placed, fitted, made to land exactly where it needs to land. This is the art of communication—not eloquence, not volume, but precision.',
        },
        {
          kind: 'hebrew',
          id: 'prov25-davar',
          title: 'Davar — "Word" (Thing, Matter)',
          script: 'דָבָר',
          translit: '<strong>Davar</strong> · word; thing; matter; that which is spoken',
          description:
            'A davar is not merely a sound. It is a thing, a matter with weight and consequence. A fitly spoken word is not casual. It carries substance.',
        },
        {
          kind: 'commentary',
          id: 'prov25-soft-tongue',
          html:
            'By long forbearing—by patience, by restraint, by slow and gentle persuasion—a prince can be swayed. And a soft tongue breaks the bone. This is paradoxical. Softness breaks hardness. Gentleness overcomes resistance in a way force never can. The soft word, persistent over time, accomplishes what violence cannot.',
        },
        {
          kind: 'carry',
          html:
            'How many words do you speak in a day? How many are fitly placed? How many are soft, patient, designed to persuade rather than to wound?',
        },
        {
          kind: 'reflection',
          id: 'prov25-fitly',
          prompt: 'When have your words changed someone&apos;s mind or heart? What made them effective?',
        },
      ],
    },

    {
      ref: 'Proverbs 25:21–22',
      title: 'Bread and Coals for Your Enemy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            plain(21, 'If thine enemy be hungry, give him bread to eat; and if he be thirsty, give him water to drink:'),
            plain(22, 'For thou shalt heap coals of fire on his head, and the Lord shall reward thee.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov25-enemy-hungry',
          html:
            'An enemy is hungry. Your natural impulse is to let him starve, to let hunger be the price of his enmity. But Proverbs inverts this. Give him bread. Give him water. Meet his need despite the fact that he is your enemy. This is not weakness. This is a power beyond the natural human impulse.',
        },
        {
          kind: 'commentary',
          id: 'prov25-coals-fire',
          html:
            'To heap coals of fire on his head is an image of transformation. Some scholars read this as heaping shame upon him through your kindness—showing him up as ungrateful and unkind by contrast with your generosity. Others read it as bringing him to repentance. Either way, the effect is inner change. The enemy is not conquered by your sword but by your kindness.',
        },
        {
          kind: 'christ',
          id: 'prov25-christ-enemy',
          title: 'Christ Connection — Love Enemies, Overcome Evil',
          html:
            'In Romans 12:20–21, Paul quotes this passage and concludes: "Be not overcome of evil, but overcome evil with good." This is not strategy. This is transformation. Christ teaches and models a love so radical it extends even to enemies. He breaks the cycle of retaliation and hatred by refusing to participate in it.',
        },
        {
          kind: 'carry',
          html:
            'Is there an enemy you need to feed? Is there a person who has harmed you to whom you could extend mercy? Proverbs says the power is not in revenge but in redemption.',
        },
        {
          kind: 'reflection',
          id: 'prov25-enemy-bread',
          prompt: 'What would it cost you to meet the needs of someone who has hurt you? What might it heal?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'A word fitly spoken is like apples of gold in pictures of silver.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Proverbs 25 · Study Guide',
  },

  hasHebrew: true,
};
