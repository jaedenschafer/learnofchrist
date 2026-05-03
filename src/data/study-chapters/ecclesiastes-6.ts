import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Ecclesiastes 6 — Riches Without Enjoyment
 *
 * The Preacher describes a peculiar and tragic situation: "There is an evil
 * which I have seen under the sun, and it is common among men: A man to whom
 * God hath given riches, wealth, and honour, so that he wanteth nothing for
 * his soul of all that he desireth, yet God giveth him not power to enjoy
 * them, but a stranger eateth them." The cruelty is not in poverty but in
 * riches possessed but not enjoyed. The soul remains hungry even when the
 * table is full. "All the labour of man is for his mouth, and yet the
 * appetite is not filled."
 */
export const ECCLESIASTES_6: RichChapterContent = {
  bookSlug: 'ecclesiastes',
  bookName: 'Ecclesiastes',
  chapter: 6,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 4 },
  intros: [
    'The Preacher now describes a condition worse than poverty. A man has everything—riches, wealth, honor, sons, and long life. And yet he cannot enjoy any of it. His wealth does not satisfy him. His possessions do not bring him joy. His life is long, but it is empty. And when he dies, a stranger inherits what he labored to accumulate. This is not the lot of the poor—it is worse. It is the lot of the person who has gained the whole world but lost his own satisfaction.',
    'The Preacher observes that this is a common evil. Many people are trapped in this condition—trapped by inability to enjoy, by perpetual dissatisfaction, by the pursuit of something they can never define or obtain. And he asks a haunting question: "What hath the wise more than the fool?" If both end in the grave, if both face the same death, if the wise man cannot guarantee that he will enjoy his wisdom—what profit is there in wisdom? The answer is subtle. Wisdom has value, but only if it leads to contentment. Only if it teaches us to enjoy what we have.',
  ],

  sections: [
    {
      ref: 'Ecclesiastes 6:1–12',
      title: 'Riches Without Joy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(1, 'There is an evil which I have seen under the sun, and it is common among men: A man to whom God hath given riches, wealth, and honour, so that he wanteth nothing for his soul of all that he desireth, yet God giveth him not power to enjoy them, but a stranger eateth them: this is vanity, and it is an evil disease.'),
            plain(2, 'If a man beget an hundred children, and live many years, so that the days of his years be many, and his soul be not filled with good, and also that he have no burial; I say, that an untimely birth is better than he.'),
            plain(3, 'For he cometh in with vanity, and departeth in darkness, and his name shall be covered with darkness.'),
            plain(4, 'Moreover he hath not seen the sun, nor known any thing: this hath more rest than the other.'),
            plain(5, 'Yea, though he live a thousand years twice told, yet hath he seen no good: do not all go to one place?'),
            plain(6, 'All the labour of man is for his mouth, and yet the appetite is not filled.'),
            plain(7, 'For what hath the wise more than the fool? or what hath the poor, that knoweth to walk before the living?'),
            plain(8, 'Better is the sight of the eyes than the wandering of the desire: this is also vanity and vexation of spirit.'),
            plain(9, 'That which hath been is named already, and it is known that it is man: neither may he contend with him that is mightier than he.'),
            plain(10, 'Seeing there be many things that increase vanity, what is man the better?'),
            plain(11, 'For who knoweth what is good for man in this life, all the days of his vain life which he spendeth as a shadow? for who can tell a man what shall be after him under the sun?'),
            plain(12, 'For all his days are sorrows, and his travail grief; yea, his heart taketh not rest in the night. This is also vanity.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ecc6-common-evil',
          html:
            'The Preacher names the evil precisely: a man has everything he could desire, but God does not grant him the power to enjoy it. This is not just poverty. This is a peculiar curse—possessions without pleasure, abundance without contentment. The one who might inherit his wealth is a stranger. All his labor results in the enrichment of someone else. And the Preacher calls this "an evil disease."',
        },
        {
          kind: 'commentary',
          id: 'ecc6-hundred-children',
          html:
            'The Preacher offers a stark comparison. A man with a hundred children, living for many years—this sounds like a blessing. And yet, if his soul is not filled with good, if he never experiences true satisfaction, then an untimely birth—one who never lived—is better off than he. A stillborn child comes into the world in vanity and departs in darkness, and this is better than a long life of dissatisfaction.',
        },
        {
          kind: 'commentary',
          id: 'ecc6-appetite',
          html:
            '"All the labour of man is for his mouth, and yet the appetite is not filled." The Preacher identifies the fundamental problem: we work to feed ourselves, but the appetite is insatiable. Even when the table is full, we hunger. And this hunger is not just physical. It is a hunger of the soul for something that food cannot provide.',
        },
        {
          kind: 'commentary',
          id: 'ecc6-better-is-sight',
          html:
            '"Better is the sight of the eyes than the wandering of the desire." The Preacher offers a small piece of wisdom: contentment with what you have and can see and enjoy is better than endless wandering after what you lack. The satisfied person who sees and enjoys what is present is better off than the dissatisfied person who always chases something else.',
        },
        {
          kind: 'carry',
          html:
            'The Preacher invites us to examine the source of our dissatisfaction. Is it truly deprivation, or is it the inability to be content with what we have? Many people live in apparent abundance but experience poverty of the soul. Many have much but enjoy little. The wisdom the Preacher points toward is simple: learn to enjoy what is present. Be satisfied with the sight of your eyes rather than the wandering of desire.',
        },
        {
          kind: 'reflection',
          id: 'ecc6-power-enjoy',
          prompt: 'Do you have the "power to enjoy" what God has given you? Or are you so focused on what you lack or what you might gain that you cannot be satisfied with what is present? What would change if you could truly enjoy what you have?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'A man to whom God hath given riches, wealth, and honour...yet God giveth him not power to enjoy them...All the labour of man is for his mouth, and yet the appetite is not filled.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ecclesiastes 6 · Study Guide',
  },

  hasHebrew: false,
};
