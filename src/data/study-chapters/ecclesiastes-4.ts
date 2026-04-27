import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Ecclesiastes 4 — The Value of Companionship
 *
 * "Two are better than one." The Preacher turns from abstract futility to
 * human connection. Oppression is visible in the world—the tears of those
 * who are oppressed, with no comforter. Envy eats at the human heart. But in
 * the simplicity of two people working together, falling together, warming
 * each other, there is something that resists vanity. "And if one prevail
 * against him, two shall withstand him; and a threefold cord is not quickly
 * broken." There is strength, and comfort, and a third strand—perhaps the
 * divine—that binds them.
 */
export const ECCLESIASTES_4: RichChapterContent = {
  bookSlug: 'ecclesiastes',
  bookName: 'Ecclesiastes',
  chapter: 4,

  intros: [
    'Having established that life under the sun is vanity, that pleasure does not satisfy, that death renders all meaningless, the Preacher makes a surprising turn. He looks not at grand systems or personal ambitions, but at the simple fact of human connection. He observes the oppressed and sees tears. He sees envy and rivalry dividing people. And then he sees two people, working side by side, supporting each other, strengthened by companionship. In this small picture, he finds something that resists the tide of vanity.',
    'The observation is profound: you cannot remain completely, utterly alone. The pursuit of solitary satisfaction, the competition with others for status and wealth, these lead to greater emptiness. But the simple companionship—two people working together, falling and helping each other up, sharing warmth in the cold night—this has value. And if you add a third—a thread woven through both—a cord that is not quickly broken. The Preacher is not explicitly naming God, but he is hinting at a truth: we are made for connection, and that connection is itself a resistance to vanity.',
  ],

  sections: [
    {
      ref: 'Ecclesiastes 4:1–8',
      title: 'Oppression, Envy, and Labor',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(1, 'So I returned, and considered all the oppressions that are done under the sun: and behold the tears of such as were oppressed, and they had no comforter; and on the side of their oppressors there was power; but they had no comforter.'),
            plain(2, 'Wherefore I praised the dead which are already dead more than the living which are yet alive.'),
            plain(3, 'Yea, better is he than both they, which hath not yet been, who hath not seen the evil work that is done under the sun.'),
            plain(4, 'Again, I considered all travail, and every right work, that for this a man is envied of his neighbour. This is also vanity and vexation of spirit.'),
            plain(5, 'The fool foldeth his hands together, and eateth his own flesh.'),
            plain(6, 'Better is an handful with quietness, than both the hands full with travail and vexation of spirit.'),
            plain(7, 'Then I returned, and I saw vanity under the sun.'),
            plain(8, 'There is one alone, and there is not a second; yea, he hath neither child nor brother: yet is there no end of all his labour; neither is his eyes satisfied with riches; neither saith he, For whom do I labour, and bereave my soul of good? This is also vanity, yea, it is a sore travail.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ecc4-oppression',
          html:
            'The Preacher turns from abstraction to reality. He observes oppression—real human suffering. He sees the tears of the oppressed and notes with bitter clarity: they have no comforter. The oppressors have power, but that power is used to crush. And the oppressed have no one to comfort them. This is not vanity in the sense of being empty or unreal. This is vanity in the sense of being pointless cruelty. The Preacher is so moved by this sight that he says the dead are more fortunate than the living.',
        },
        {
          kind: 'commentary',
          id: 'ecc4-envy',
          html:
            'The Preacher turns next to envy. He sees that "for this a man is envied of his neighbour"—because he does good work, because he succeeds, because he rises above others. Success breeds envy. And envy breeds conflict. The person who works hard, who excels, becomes the target of his neighbor&apos;s resentment. And the Preacher judges: this is vanity and vexation of spirit. The struggle to surpass others, to rise above them, to distinguish yourself—this leads not to satisfaction but to conflict.',
        },
        {
          kind: 'commentary',
          id: 'ecc4-alone',
          html:
            'The Preacher then describes a particularly tragic figure: "There is one alone, and there is not a second." A person who labors alone, with no one to share his life, no child, no brother, no companion. He works endlessly, gathering riches, but the riches do not satisfy. And he never asks himself the obvious question: "For whom do I labour?" This is a portrait of the person who has pursued wealth and status at the cost of human connection, and finds at the end that he has emptied his soul of good to gather what cannot fulfill.',
        },
        {
          kind: 'carry',
          html:
            'The Preacher poses a simple contrast: "Better is an handful with quietness, than both the hands full with travail and vexation of spirit." Less, shared quietly with someone who matters, is better than more, pursued alone in conflict and envy. This is not a call to poverty, but a call to priority. To recognize what truly sustains human life: not accumulation, but companionship. Not status, but peace.',
        },
        {
          kind: 'reflection',
          id: 'ecc4-whose-labor',
          prompt: 'You labor—for what or for whom? If you have not asked this question in a while, what might the answer reveal about your priorities?',
        },
      ],
    },

    {
      ref: 'Ecclesiastes 4:9–16',
      title: 'Two Are Better Than One',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(9, 'Two are better than one; because they have a good reward for their labour.'),
            plain(10, 'For if they fall, the one will lift up his fellow: but woe to him that is alone when he falleth; for he hath not another to help him up.'),
            plain(11, 'Again, if two lie together, then they have heat: but how can one be warm alone?'),
            plain(12, 'And if one prevail against him, two shall withstand him; and a threefold cord is not quickly broken.'),
            plain(13, 'Better is a poor and a wise child than an old and foolish king, who will no more be admonished.'),
            plain(14, 'For out of prison he cometh to reign; whereas also he that is born in his kingdom becometh poor.'),
            plain(15, 'I considered all the living which walk under the sun, with the second child that shall stand up in his stead.'),
            plain(16, 'There is no end of all the people, even of all that have been before them: yet they that come after shall not rejoice in him. Surely this is also vanity and vexation of spirit.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ecc4-two-better',
          html:
            '"Two are better than one; because they have a good reward for their labour." The Preacher is not speaking mystically but practically. Two people working together accomplish more than one working alone. They can support each other, comfort each other, strengthen each other. The reward for labor is multiplied. And this is not about romantic love—though it includes that—but about any two people bound together in work and life.',
        },
        {
          kind: 'commentary',
          id: 'ecc4-fall-together',
          html:
            'The image is concrete. "For if they fall, the one will lift up his fellow." In life, we fall—we fail, we suffer, we lose. The isolated person has no one to help him rise. But the person with a companion has someone who can lift him. This is not metaphorical. This is real survival. Warmth, physical presence, the ability to say "I am not alone in this"—these matter.',
        },
        {
          kind: 'hebrew',
          id: 'ecc4-cord',
          title: 'Rope, Cord',
          script: 'חוּט',
          translit: '<strong>Chut</strong> · cord, thread, line; something that binds',
          description:
            'The Hebrew word for the cord that "is not quickly broken" is chut. It carries the sense of something woven, something that binds two things together. A threefold cord suggests three strands woven together, making it stronger than if one or two strands were simply placed side by side. The image suggests not just human partnership, but a bond that is divine—three become one.',
        },
        {
          kind: 'christ',
          id: 'ecc4-christ-third',
          title: 'Christ Connection — The Third Strand',
          html:
            'The Preacher speaks of a threefold cord that is not quickly broken. In the New Testament, Christ becomes the third strand that binds His people together. When two or three gather in His name, He is in the midst of them. Marriage, friendship, community—when woven around Christ, become unbreakable. The promise of Christ is not isolation but connection: "Where two or three are gathered together in my name, there am I in the midst of them." The third strand is divine presence, divine love, the power that holds all things together.',
        },
        {
          kind: 'reflection',
          id: 'ecc4-three-strand',
          prompt: 'Who is your companion? Who would lift you if you fell? And if you have such a companion, is there a "third strand"—a shared faith or purpose—that strengthens your bond?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Two are better than one...And if one prevail against him, two shall withstand him; and a threefold cord is not quickly broken.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ecclesiastes 4 · Study Guide',
  },

  hasHebrew: true,
};
