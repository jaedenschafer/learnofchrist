import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Proverbs 13 — Hope Deferred and the Wisdom of Counsel
 *
 * "He that walketh with wise men shall be wise." The chapter emphasizes the
 * power of companionship and the company you keep. It includes one of the most
 * poignant of all proverbs: "Hope deferred maketh the heart sick: but when the
 * desire cometh, it is a tree of life." The chapter speaks to the human heart's
 * need for hope and the peril of its loss.
 */
export const PROVERBS_13: RichChapterContent = {
  bookSlug: 'proverbs',
  bookName: 'Proverbs',
  chapter: 13,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 5 },
  intros: [
    'The thirteenth chapter focuses on the influence of companionship and the power of hope. It opens with the fundamental claim that a wise son heeds instruction, but moves quickly to insist that the company you keep shapes who you become. "He that walketh with wise men shall be wise: but a companion of fools shall be destroyed." We are not isolated individuals. We are shaped by those we walk with.',
    'The chapter also speaks poignantly about hope and desire. "Hope deferred maketh the heart sick: but when the desire cometh, it is a tree of life." This is one of the most human of all the proverbs, acknowledging the deep human need for something to look forward to, something to hope for.',
  ],

  sections: [
    {
      ref: 'Proverbs 13:1–13',
      title: 'Companions and Counsel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(1, 'A wise son heareth his father&apos;s instruction: but a scorner heareth not rebuke.'),
            plain(2, 'A man shall eat good by the fruit of his mouth: but the soul of the transgressors shall eat violence.'),
            plain(3, 'He that keepeth his mouth keepeth his life: but he that openeth wide his lips shall have destruction.'),
            plain(4, 'The soul of the sluggard desireth, and hath nothing: but the soul of the diligent shall be made fat.'),
            plain(5, 'A righteous man hateth lying: but a wicked man is loathsome, and cometh to shame.'),
            plain(6, 'Righteousness keepeth him that is upright in the way: but wickedness overthroweth the sinner.'),
            plain(7, 'There is that maketh himself rich, yet hath nothing: there is that maketh himself poor, yet hath great riches.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov13-instruction-obedience',
          html: 'A wise son receives instruction; a scorner rejects rebuke. Righteousness keeps the upright; wickedness overthrows the sinner. The heart desires wisdom, but only the diligent are satisfied.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(8, 'The ransom of a man&apos;s life are his riches: but the poor heareth not rebuke.'),
            plain(9, 'The light of the righteous rejoiceth: but the lamp of the wicked shall be put out.'),
            plain(10, 'Only by pride cometh contention: but with the well advised is wisdom.'),
            plain(11, 'Wealth gotten by vanity shall be diminished: but he that gathereth by labour shall increase.'),
            plain(12, 'Hope deferred maketh the heart sick: but when the desire cometh, it is a tree of life.'),
            plain(13, 'Whoso despiseth the word shall be destroyed: but he that feareth the commandment shall be rewarded.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov13-wise-companionship',
          html: 'Verse 20, which follows this section, makes a claim central to wisdom: "He that walketh with wise men shall be wise: but a companion of fools shall be destroyed." You become like those you spend time with. If you surround yourself with wisdom, you absorb it. If you surround yourself with foolishness, you are contaminated by it. Choose your companions with care.',
        },
        {
          kind: 'hebrew',
          id: 'prov13-tikvah',
          title: 'Tikvah — "Hope" (Expectation, Waiting)',
          script: 'תִּקְוָה',
          translit: '<strong>Tikvah</strong> · hope; expectation; something waited for',
          description: 'The word suggests a waiting, a reaching forward, an expectation. Hope is not mere wishful thinking but a firm expectation rooted in something solid.',
        },
        {
          kind: 'commentary',
          id: 'prov13-hope-deferred',
          html: '"Hope deferred maketh the heart sick: but when the desire cometh, it is a tree of life." This is one of the most psychologically acute proverbs. The human heart needs hope, needs something to look forward to. When that hope is repeatedly delayed, when the desire is never fulfilled, the heart grows sick—depressed, depleted. But when the desired thing finally comes, it is a tree of life. It revives. It restores.',
        },
        {
          kind: 'carry',
          html: 'The proverbs invite you to consider the company you keep and the hopes you carry. Are you surrounding yourself with wisdom or foolishness? Are your hopes grounded in the real or the illusory? Are you giving yourself and others something to hope for?',
        },
        {
          kind: 'reflection',
          id: 'prov13-walk-wise',
          prompt: 'Who are you walking with? Are they leading you toward wisdom or away from it? What hopes are you carrying? Are they realistic or have they been deferred so long your heart is growing sick?',
        },
      ],
    },

    {
      ref: 'Proverbs 13:14–25',
      title: 'The Law as a Fountain of Life',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(14, 'The law of the wise is a fountain of life, to depart from the snares of death.'),
            plain(15, 'Good understanding giveth favour: but the way of transgressors is hard.'),
            plain(16, 'Every prudent man dealeth with knowledge: but a fool layeth open his folly.'),
            plain(17, 'A wicked messenger falleth into mischief: but a faithful ambassador is health.'),
            plain(18, 'Poverty and shame shall be to him that refuseth instruction: but he that regardeth reproof shall be honoured.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov13-law-instruction',
          html: 'The law of the wise is a fountain of life—not restrictive but liberating. Good understanding brings favor; the way of transgressors is hard. The prudent deal with knowledge; the fool exposes his folly. A faithful ambassador brings health; a wicked messenger falls into mischief. And the turning point: those who regard reproof are honored, while those who refuse instruction sink into poverty and shame. The choice determines the outcome.',
        },
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(19, 'The desire accomplished is sweet to the soul: but it is abomination to fools to depart from evil.'),
            plain(20, 'He that walketh with wise men shall be wise: but a companion of fools shall be destroyed.'),
            plain(21, 'Evil pursueth sinners: but to the righteous good shall be repayed.'),
            plain(22, 'A good man leaveth an inheritance to his children&apos;s children: and the wealth of the sinner is laid up for the just.'),
            plain(23, 'Much food is in the tillage of the poor: but there is that is destroyed for want of judgment.'),
            plain(24, 'He that spareth his rod hateth his son: but he that loveth him chasteneth him betimes.'),
            plain(25, 'The righteous eateth to the satisfying of his soul: but the belly of the wicked shall want.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov13-law-fountain',
          html: '"The law of the wise is a fountain of life, to depart from the snares of death." The law—God&apos;s instruction, the wisdom of the righteous—is not restrictive. It is life-giving, like a fountain. It does not constrain you but liberates you from the snares that would otherwise catch you.',
        },
        {
          kind: 'commentary',
          id: 'prov13-repoof-honored',
          html: 'Verse 18 again emphasizes the power of reproof: "Poverty and shame shall be to him that refuseth instruction: but he that regardeth reproof shall be honoured." The person who welcomes correction, who treats reproof as a gift, rises to honor. The person who refuses it sinks into poverty and shame.',
        },
        {
          kind: 'commentary',
          id: 'prov13-inheritance',
          html: 'Verse 22 speaks of legacy: "A good man leaveth an inheritance to his children&apos;s children: and the wealth of the sinner is laid up for the just." The righteous build something that lasts, that passes to their descendants. But the wealth of the sinner—even if accumulated—does not stay in the family. It passes to the just. This is not merely about money. It is about the legacy of character, of wisdom, of blessing.',
        },
        {
          kind: 'christ',
          id: 'prov13-christ-hope',
          title: 'Christ Connection — Christ Our Hope',
          html: 'Paul writes to the Colossians that Christ in them is "the hope of glory" (Colossians 1:27). The hope that Proverbs insists we need, the hope that when it comes becomes "a tree of life," is ultimately found in Christ. He is the fulfilled hope, the desire accomplished.',
        },
        {
          kind: 'carry',
          html: 'The question Proverbs poses is about the legacy you are building. Are you accumulating things that will perish, or are you building character and wisdom that will pass to your children&apos;s children? Are you surrounding yourself with the wise and letting them make you wise? Are you keeping hope alive?',
        },
        {
          kind: 'reflection',
          id: 'prov13-legacy',
          prompt: 'What inheritance are you leaving? Not just materially, but the inheritance of your character, your choices, your wisdom? What would your children&apos;s children say about the legacy you&apos;re building?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'He that walketh with wise men shall be wise...Hope deferred maketh the heart sick: but when the desire cometh, it is a tree of life.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Proverbs 13 · Study Guide',
  },

  hasHebrew: true,
};
