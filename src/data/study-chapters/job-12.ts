import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Job 12 — Job's Second Response: Wisdom Belongs to God, Not to Friends
 *
 * Job responds to all three friends with bitter sarcasm. "No doubt but ye are the
 * people, and wisdom shall die with you." He mocks their certainty, their
 * assumptions that they understand God and His ways. But then Job shifts. He
 * speaks of God&apos;s true wisdom—the wisdom that encompasses the complexity of the
 * world, that knows the mystery of things. "With him is wisdom and strength, he
 * hath counsel and understanding." Job acknowledges that God is wise, but he
 * insists that God&apos;s wisdom is not the simple formula his friends present. It is
 * vast, mysterious, beyond human comprehension.
 */
export const JOB_12: RichChapterContent = {
  bookSlug: 'job',
  bookName: 'Job',
  chapter: 12,

  estimatedMinutes: { beginner: 1, intermediate: 5, deep: 6 },
  intros: [
    'Job has now heard from all three friends. Each has tried to convince him that his suffering must be the result of his sin. Each has assured him that if he will repent and seek God, he will be restored. And each has spoken with absolute certainty, as though the ways of God were transparent, as though the connection between sin and suffering were obvious and universal. Job responds to all of them at once, with a sarcasm so bitter it cuts like a blade.',
    '"No doubt but ye are the people, and wisdom shall die with you." This is Job&apos;s response. He is saying that his friends seem to believe that all wisdom lives in them, that when they die, wisdom will die with them. He is mocking their assumption that they understand God better than Job does, that they can see the truth about Job&apos;s situation more clearly than Job himself can.',
  ],

  bottomShare: {
    quote:
      '"With him is wisdom and strength, he hath counsel and understanding." Job affirms God&apos;s true wisdom—vast, mysterious, and utterly beyond the simple formulas his friends present.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Job 12 · Study Guide',
  },

  resources: [
    {
      id: 'british-museum-ludlul',
      kind: 'museum',
      source: 'British Museum',
      label: 'Ludlul Bel Nemeqi (I Will Praise the Lord)',
      url: 'https://www.britishmuseum.org/',
      description: 'Akkadian wisdom poem from Babylon: suffering, divine justice, vindication.',
    },
  ],

  sections: [
    {
      ref: 'Job 12:1–8',
      title: 'The Mockery of False Wisdom',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(1, 'And Job answered and said,'),
            plain(2, 'No doubt but ye are the people, and wisdom shall die with you.'),
            plain(3, 'But I have understanding as well as you; I am not inferior to you: yea, who knoweth not such things as these?'),
            plain(4, 'I am as one mocked of his neighbour, who calleth upon God, and he answereth him: the just and perfect man is laughed to scorn.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job12-mid-wisdom-mockery',
          html:
            'Calamity strips everything; faith asks: can you praise when silence is easier? [res:british-museum-ludlul]',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(5, 'For the thought of him that is at ease there is contempt, as a thing prepared for those whose foot slippeth:'),
            plain(6, 'The tabernacles of robbers prosper, and they that provoke God are secure; into whose hand God bringeth abundantly.'),
            plain(7, 'But ask now the beasts, and they shall teach thee; and the fowls of the air, and they shall tell thee:'),
            plain(8, 'Or speak to the earth, and it shall teach thee: and the fishes of the sea shall declare unto thee.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job-people-wisdom',
          html:
            '"No doubt but ye are the people, and wisdom shall die with you"—Job is engaging in bitter sarcasm. His tone says: you think you are the only ones who understand the world, the only ones whose words matter. When you die, wisdom itself will end because there will be no one left as wise as you.',
        },
        {
          kind: 'commentary',
          id: 'job-understanding',
          html:
            '"But I have understanding as well as you"—Job asserts his own capacity for understanding. He is not claiming to be wiser than his friends, but he is claiming that he is their equal in reason, in ability to think, in capacity to understand the world. His friends do not have a monopoly on wisdom.',
        },
        {
          kind: 'hebrew',
          id: 'job-hakam',
          title: 'Hakam — "Wisdom" (Understanding, Discernment)',
          script: 'חָכְמָה',
          translit: '<strong>Hakam</strong> · wisdom, understanding, skill, discernment',
          description:
            'Job speaks of wisdom not as abstract knowledge, but as the ability to discern, to understand the real workings of the world. His friends claim to have this wisdom—the ability to read God&apos;s mind, to understand why suffering happens. Job denies this claim.',
        },
        {
          kind: 'commentary',
          id: 'job-mocked-neighbor',
          html:
            '"I am as one mocked of his neighbour, who calleth upon God, and he answereth him"—Job is describing his own experience. He calls upon God, and his friends laugh at him for it. Why? Because the experience does not match his friends&apos; expectations. Job is righteous, yet suffering. The formula breaks down.',
        },
        {
          kind: 'commentary',
          id: 'job-robbers-prosper',
          html:
            '"The tabernacles of robbers prosper, and they that provoke God are secure"—Job describes what he observes in the world. The wicked flourish. Those who rob prosper. Those who provoke God are secure. This contradicts what his friends have taught him about the inevitable punishment of the wicked.',
        },
        {
          kind: 'carry',
          html:
            'Job&apos;s first move is to reject his friends&apos; assumed wisdom. They think they understand the world. But Job, in his own experience, has found that their understanding does not match reality. The wicked prosper. The righteous suffer. The formulas do not work.',
        },
        {
          kind: 'reflection',
          id: 'job-observed-reality',
          prompt:
            'What have you observed in the world that contradicts what you were taught about how God rewards righteousness and punishes sin?',
        },
      ],
    },

    {
      ref: 'Job 12:9–25',
      title: 'The Vastness of God&apos;s Wisdom',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(9, 'Who knoweth not in all these that the hand of the Lord hath wrought this?'),
            plain(10, 'In whose hand is the soul of every living thing, and the breath of all mankind.'),
            plain(11, 'Doth not the ear try words? and the mouth taste his meat?'),
            plain(12, 'With the ancient is wisdom; and in length of days understanding.'),
            plain(13, 'With him is wisdom and might: he hath counsel and understanding.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job12-split-1',
          html:
            'Job acknowledges a truth his friends cannot hear: God&apos;s hand has wrought all things. Every soul, every breath belongs to God. The ancient may possess wisdom, but where does that wisdom come from? God. With God is wisdom and might together—not wisdom that judges and condemns, but wisdom coupled with power.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(14, 'Behold, he breaketh down, and it cannot be built again: he shutteth up a man, and there can be no opening.'),
            plain(15, 'Behold, he withholdeth the waters, and they dry up: also he sendeth them out, and they overturn the land.'),
            plain(16, 'With him is strength and wisdom: the deceived and the deceiver are his.'),
            plain(17, 'He leadeth counsellors away spoiled, and maketh the judges fools.'),
            plain(18, 'He looseth the bond of kings, and girdeth their loins with a girdle.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job12-split-2',
          html:
            'God&apos;s power is not benign. It breaks what cannot be rebuilt. It withholds and sends floods. Even deception and truth are in God&apos;s hand. God makes counselors foolish and kings powerless. This is wisdom not as comforting doctrine but as raw cosmic authority.',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(19, 'He leadeth princes away spoiled, and overthroweth the mighty.'),
            plain(20, 'He removeth away the speech of the trusty, and taketh away the understanding of the aged.'),
            plain(21, 'He poureth contempt upon princes, and weakeneth the strength of the mighty.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job12b-mid-darkness-counsel',
          html:
            'Calamity strips everything; faith asks: can you praise when silence is easier?',
        },
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(22, 'He discovereth deep things out of darkness, and bringeth out to light the shadow of death.'),
            plain(23, 'He increaseth the nations, and destroyeth them: he enlargeth the nations, and straiteneth them again.'),
            plain(24, 'He taketh away the heart of the chief of the people of the earth, and causeth them to wander in a wilderness where there is no way.'),
            plain(25, 'They grope in the dark without light, and he maketh them to stagger like a drunken man.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job-hand-wrought',
          html:
            '"Who knoweth not in all these that the hand of the Lord hath wrought this?"—Job shifts from mocking his friends to acknowledging a truth: yes, God&apos;s hand is behind all things. God is active in the world. But God&apos;s activity is not simple. It is not reducible to the formula his friends present.',
        },
        {
          kind: 'commentary',
          id: 'job-soul-breath',
          html:
            '"In whose hand is the soul of every living thing, and the breath of all mankind"—God holds the fundamental forces of life itself. Every soul, every breath belongs to God. This is the basis of God&apos;s wisdom: God knows all things from the ground up.',
        },
        {
          kind: 'hebrew',
          id: 'job-chochmah',
          title: 'Chochmah — "Wisdom" (Divine Wisdom)',
          script: 'חׇכְמָה',
          translit: '<strong>Chochmah</strong> · wisdom, understanding, skill, the way things really work',
          description:
            'Job uses this word to describe not human wisdom, but divine wisdom. God&apos;s wisdom is the knowledge of how things really work, the hidden truths of the universe.',
        },
        {
          kind: 'commentary',
          id: 'job-breaketh-down',
          html:
            '"Behold, he breaketh down, and it cannot be built again: he shutteth up a man, and there can be no opening"—Job describes God&apos;s power not as the power to reward or punish according to merit, but as the raw power to destroy and control. God breaks down what cannot be rebuilt. God imprisons what cannot be released.',
        },
        {
          kind: 'commentary',
          id: 'job-witholdeth-waters',
          html:
            '"He withholdeth the waters, and they dry up: also he sendeth them out, and they overturn the land"—God controls the fundamental forces of nature. God can withhold water and cause drought. God can send floods that overturn the land. This is wisdom on a cosmic scale, not reducible to human categories of justice.',
        },
        {
          kind: 'commentary',
          id: 'job-deceived-deceiver',
          html:
            '"The deceived and the deceiver are his"—this is a striking statement. God rules over both the deceived (those who have been tricked) and the deceiver (the one who tricks them). Both are in God&apos;s hand. This suggests that even deception, even confusion, is within God&apos;s domain.',
        },
        {
          kind: 'commentary',
          id: 'job-counsellors-fools',
          html:
            '"He leadeth counsellors away spoiled, and maketh the judges fools"—God has the power to render human wisdom useless. The counselor, the judge—those who are supposed to understand and interpret justice—are made foolish by God. This is Job&apos;s implicit response to his friends, who consider themselves counselors and judges of his situation.',
        },
        {
          kind: 'carry',
          html:
            'Job&apos;s portrait of God&apos;s wisdom is not comforting. It is vast, powerful, and utterly beyond human categories. God does not operate according to the simple rules his friends present. God&apos;s wisdom encompasses deception and truth, poverty and riches, success and failure. All of these are in God&apos;s hand.',
        },
        {
          kind: 'christ',
          id: 'job12-christ',
          title: 'Christ Connection — All Treasures of Wisdom',
          html:
            'Job rightly insists that true wisdom belongs to God alone and cannot be reduced to human categories or formulas. But where does that wisdom finally become visible? Paul reveals it: "In whom are hid all the treasures of wisdom and knowledge" (Col. 2:3). Jesus is "the wisdom of God" (1 Cor. 1:24). The vastness that Job senses—the mystery that transcends human judgment—that same wisdom appeared in human flesh. God&apos;s inscrutability is not distant; it is intimate.',
        },
        {
          kind: 'reflection',
          id: 'job-god-wisdom',
          prompt:
            'When you think about God&apos;s wisdom, do you imagine it as simple and reducible to rules, or as vast and mysterious? How does that shape your faith?',
        },
      ],
    },
  ],
};
