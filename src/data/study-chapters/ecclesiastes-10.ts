import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Ecclesiastes 10 — Small Things Ruin Great Ones
 *
 * "Dead flies cause the ointment of the apothecary to send forth a stinking
 * savour: so doth a little folly him that is in reputation for wisdom and
 * honour." The entire chapter is a meditation on the power of small things to
 * ruin large ones. A little folly can destroy great wisdom. A single moment of
 * carelessness can undo a lifetime of work. Christ teaches that faithfulness in
 * small things is foundational. The kingdom grows from a mustard seed.
 */
export const ECCLESIASTES_10: RichChapterContent = {
  bookSlug: 'ecclesiastes',
  bookName: 'Ecclesiastes',
  chapter: 10,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 6 },
  intros: [
    'The Preacher turns his attention to the power of small things. A single dead fly can spoil a whole pot of valuable ointment. A small mistake can destroy a great reputation. A moment of folly can erase years of wisdom. The image is humble—dead flies, apothecary ointment—but the lesson is profound. We are not as secure as we think. Our accomplishments, our reputations, our positions—these are fragile, subject to destruction by small things we may not even see.',
    'The Preacher then moves through a series of observations about folly and wisdom. A wise man&apos;s heart inclines him to the right, but a fool&apos;s heart to the left. The fool shows his folly openly. Idleness brings decay. Even small rebellions, small refusals to do what is required, can undermine everything. The Preacher is teaching a necessary vigilance. Not paranoia, but awareness. Not anxiety, but attentiveness. The small compromise, the small folly, the small neglect—these compound. They matter.',
  ],

  sections: [
    {
      ref: 'Ecclesiastes 10:1–11',
      title: 'The Power of Small Folly',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(1, 'Dead flies cause the ointment of the apothecary to send forth a stinking savour: so doth a little folly him that is in reputation for wisdom and honour.'),
            plain(2, 'A wise man&apos;s heart is at his right hand; but a fool&apos;s heart at his left.'),
            plain(3, 'Yea also, when he that is a fool walketh by the way, his wisdom faileth him, and he saith to every one that he is a fool.'),
            plain(4, 'If the spirit of the ruler rise up against thee, leave not thy place; for yielding pacifieth great offences.'),
            plain(5, 'There is an evil which I have seen under the sun, as an error which proceedeth from the ruler:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ecc10-folly-ruins-reputation',
          html:
            'The Preacher moves from the personal to the systemic. Small folly spoils the precious. A wise man&apos;s behavior inclines him rightly; a fool&apos;s inclines him wrongly. The fool reveals himself through his actions. Even the wisdom of measured response—knowing when to yield to authority—is beyond the fool&apos;s grasp. And then the Preacher observes: folly is not merely personal vice. It corrupts structure, order, and hierarchy itself.',
        },
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(6, 'Folly is set in great dignity, and the rich sit in low place.'),
            plain(7, 'I have seen servants upon horses, and princes walking as servants upon the earth.'),
            plain(8, 'He that diggeth a pit shall fall into it; and whoso breaketh an hedge, a serpent shall bite him.'),
            plain(9, 'Whoso removeth stones shall be hurt therewith; and he that cleaveth wood shall be endangered thereby.'),
            plain(10, 'If the iron be blunt, and he do not whet the edge, then must he put to more strength: but wisdom is profitable to direct.'),
            plain(11, 'Surely the serpent will bite without enchantment; and a babbler is no better.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ecc10-dead-flies',
          html:
            '"Dead flies cause the ointment of the apothecary to send forth a stinking savour: so doth a little folly him that is in reputation for wisdom and honour." The ointment is valuable, precious, expensive. And a few dead flies render it worthless. The image is grotesque—the delicate, precious thing is spoiled by something small and contemptible. And the Preacher applies it: a wise man&apos;s reputation, built over a lifetime, can be destroyed by a moment of folly. A little scandal, a small compromising act, and the whole edifice of reputation collapses.',
        },
        {
          kind: 'commentary',
          id: 'ecc10-fool-walketh',
          html:
            '"When he that is a fool walketh by the way, his wisdom faileth him, and he saith to every one that he is a fool." The fool reveals himself wherever he goes. He does not need to be announced as a fool. His actions, his words, the way he conducts himself—all proclaim it. The wise man, by contrast, can walk through the world and his wisdom is not immediately apparent. He is not proclaimed a wise man because he displays it quietly through his decisions.',
        },
        {
          kind: 'commentary',
          id: 'ecc10-pit-serpent',
          html:
            '"He that diggeth a pit shall fall into it; and whoso breaketh an hedge, a serpent shall bite him." The Preacher offers consequences. The person who seeks to trap others often falls into their own trap. The person who breaks down barriers (hedges) is exposed to danger they had not anticipated. These are not arbitrary punishments but natural consequences. Folly contains its own undoing.',
        },
        {
          kind: 'carry',
          html:
            'The Preacher invites us to vigilance without obsession. Pay attention to small things. Do not neglect the small compromise, the small folly, the small neglect. These compound. They matter. And at the same time, do not be paralyzed by fear. Act with wisdom. Maintain your boundaries. Sharpen your tools. But do not think you are beyond the reach of small mistakes.',
        },
        {
          kind: 'reflection',
          id: 'ecc10-small-folly',
          prompt: 'What small folie have you compromised on? What habits, words, actions—small in themselves—have you begun to normalize? And what would it take to restore sharpness, to recommit to the small disciplines that protect what matters?',
        },
      ],
    },

    {
      ref: 'Ecclesiastes 10:12–20',
      title: 'The Fool&apos;s Mouth and the Fool&apos;s Heart',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(12, 'The words of a wise man&apos;s mouth are gracious; but the lips of a fool will swallow up himself.'),
            plain(13, 'The beginning of the words of his mouth is foolishness: and the end of his talk is mischievous madness.'),
            plain(14, 'A fool also is full of words: a man cannot tell what shall be; and what shall be after him, who can tell him?'),
            plain(15, 'The labour of the foolish wearieth every one of them, because he knoweth not how to go to the city.'),
            plain(16, 'Woe to thee, O land, when thy king is a child, and thy princes eat in the morning!'),
            plain(17, 'Blessed art thou, O land, when thy king is the son of nobles, and thy princes eat in due season, for strength, and not for drunkenness!'),
            plain(18, 'By much slothfulness the building decayeth; and through idleness of the hands the house droppeth through.'),
            plain(19, 'A feast is made for laughter, and wine maketh merry: but money answereth all things.'),
            plain(20, 'Curse not the king, no not in thy thought; and curse not the rich in thy bedchamber: for a bird of the air shall carry the voice, and that which hath wings shall tell the matter.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ecc10-fool-mouth',
          html:
            '"The words of a wise man&apos;s mouth are gracious; but the lips of a fool will swallow up himself." The fool is destroyed by his own words. He speaks, and the words consume him. He boasts, and his boasting brings him low. He deceives, and the deception unravels and exposes him. The wise man, by contrast, speaks with grace. His words are measured, true, and they build others up rather than tearing him down.',
        },
        {
          kind: 'commentary',
          id: 'ecc10-full-words',
          html:
            '"A fool also is full of words." The fool talks much. He fills the air with his voice. But his words are empty because he does not know the future, does not understand what will be. The wise man is more measured in his speech. He speaks when he has something to say. The fool speaks because he likes the sound of his own voice.',
        },
        {
          kind: 'commentary',
          id: 'ecc10-king-child',
          html:
            '"Woe to thee, O land, when thy king is a child." The Preacher turns to matters of government. A foolish or immature king brings woe to the land. But "Blessed art thou, O land, when thy king is the son of nobles, and thy princes eat in due season, for strength, and not for drunkenness!" A wise and noble king, whose princes are disciplined—this brings blessing. The leadership matters. The culture of a land is shaped by those who rule.',
        },
        {
          kind: 'carry',
          html:
            'The Preacher is teaching the power of words and the importance of discipline. Your words matter. Your speech reveals whether you are wise or foolish. And your actions matter. Idleness brings decay. Discipline brings order. A slip of the tongue, a moment of complaint, even unspoken criticism—these small things compound. Watch your mouth. Maintain your hands. Care for what has been entrusted to you.',
        },
        {
          kind: 'christ',
          id: 'ecc10-christ',
          title: 'Christ Connection — The Leaven of Righteousness',
          html:
            'Solomon warns that "a little folly leaveneth the whole lump"—a small corruption compounds into something that ruins everything. Paul applies this exact image to something deeper: "Know ye not that a little leaven leaveneth the whole lump? Purge out therefore the old leaven… For even Christ our passover is sacrificed for us" (1 Cor. 5:6–8). Christ is the Passover—the one whose righteousness is leaven-free, utterly uncorrupted. By His death and resurrection, He cleanses the lump entirely. The small folly we cannot undo, He undoes.',
        },
        {
          kind: 'reflection',
          id: 'ecc10-gracious-words',
          prompt: 'Are your words gracious? Do you speak life or destruction? And in what areas of your life have you allowed idleness and decay to set in? What small discipline, if restored, would begin to rebuild what has fallen?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Dead flies cause the ointment...a little folly him that is in reputation for wisdom...The words of a wise man&apos;s mouth are gracious; but the lips of a fool will swallow up himself.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ecclesiastes 10 · Study Guide',
  },

  hasHebrew: false,
};
