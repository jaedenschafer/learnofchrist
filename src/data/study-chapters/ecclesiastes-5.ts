import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Ecclesiastes 5 — Speech, Silence, and Desire
 *
 * The Preacher turns to matters of speech and desire. "Be not rash with thy
 * mouth, and let not thine heart be hasty to utter any thing before God."
 * Words spoken to God are binding. Promises made in haste become debts that
 * cannot be repaid. And regarding wealth: "He that loveth silver shall not be
 * satisfied with silver; nor he that loveth abundance with increase." The
 * desire for more is an endless hunger that cannot be filled. And the
 * Preacher concludes: Christ alone satisfies the soul that is weary.
 */
export const ECCLESIASTES_5: RichChapterContent = {
  bookSlug: 'ecclesiastes',
  bookName: 'Ecclesiastes',
  chapter: 5,

  estimatedMinutes: { beginner: 1, intermediate: 5, deep: 6 },
  intros: [
    'Having established that human connection has value, the Preacher turns to the power of speech and the hunger of the human heart. He begins with a warning about speech, particularly speech to God. Words matter. A vow made in haste becomes a debt. A promise spoken to God is binding. And the Preacher observes that many people speak much in worship but understand little. It is better to listen, to be silent, to fear God. And then he turns to the material world and observes a profound truth: "He that loveth silver shall not be satisfied with silver."',
    'The hunger for wealth is bottomless. The rich never have enough. The more they gain, the more they desire. Their sleep is disturbed by anxiety about what they possess. And in the end, they cannot take it with them. The Preacher sees clearly: this is vanity. But he also hints at a truth deeper than mere moralizing. There is a hunger in the human heart that wealth can never satisfy. It is a hunger for something transcendent, something that cannot be bought or possessed but only received, only enjoyed in the presence of the One who gives.',
  ],

  sections: [
    {
      ref: 'Ecclesiastes 5:1–7',
      title: 'The Caution of Words',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(1, 'Keep thy foot when thou goest to the house of God, and be more ready to hear, than to give the sacrifice of fools: for they consider not that they do evil.'),
            plain(2, 'Be not rash with thy mouth, and let not thine heart be hasty to utter any thing before God: for God is in heaven, and thou upon earth: therefore let thy words be few.'),
            plain(3, 'For a dream cometh through the multitude of business; and a fool&apos;s voice is known by multitude of words.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ecc5a-mid-fear-dreams',
          html:
            'Wisdom &amp; folly diverge; mark the turning point &amp; learn.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(4, 'When thou vowest a vow unto God, defer not to pay it; for he hath no pleasure in fools: pay that which thou hast vowed.'),
            plain(5, 'Better is it that thou shouldest not vow, than that thou shouldest vow and not pay.'),
            plain(6, 'Suffer not thy mouth to cause thy flesh to sin; neither say thou before the angel, that it was an error: wherefore should God be angry at thy voice, and destroy the work of thine hands?'),
            plain(7, 'For in the multitude of dreams and many words there are also divers vanities: but fear thou God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ecc5-listen',
          html:
            'The Preacher begins with a paradox. Do not be quick to speak in worship. Be more ready to hear than to give sacrifice. The "sacrifice of fools" is spoken of those who offer ritual without understanding, who go through the motions without reverence. The wise person approaches the house of God with caution, with listening ears. "Be not rash with thy mouth...therefore let thy words be few." God is in heaven, and we are on earth. The distance between God and man is infinite. Therefore, let our words be measured.',
        },
        {
          kind: 'commentary',
          id: 'ecc5-vow',
          html:
            'Words spoken to God are not casual. A vow is a binding promise. "When thou vowest a vow unto God, defer not to pay it." To vow and not pay is a sin. It is better not to vow at all than to make a promise you cannot or will not keep. The Preacher is speaking to the human tendency to make grand promises in moments of emotion, then fail to fulfill them. Once spoken, the words bind the speaker. And God holds the speaker accountable.',
        },
        {
          kind: 'commentary',
          id: 'ecc5-multitude-words',
          html:
            '"A fool&apos;s voice is known by multitude of words." The person who speaks much reveals their lack of wisdom. Silence is often wiser than speech. And excessive words in worship, excessive vows and promises, are often the marks of a foolish heart rather than a righteous one. The fear of God is not expressed in many words but in measured, careful, sincere speech.',
        },
        {
          kind: 'carry',
          html:
            'In our culture of endless talking—social media, streaming, entertainment—the Preacher&apos;s counsel to be slow to speak stands out. But the wisdom is ancient. Listen more than you speak. Think before you promise. Remember that words to God are heard and remembered. And that silence is not emptiness but a space for listening.',
        },
        {
          kind: 'reflection',
          id: 'ecc5-what-promised',
          prompt: 'What promises have you made that you have not kept? What vows to God have you deferred? And what promises might you still make if you thought carefully about whether you could fulfill them?',
        },
      ],
    },

    {
      ref: 'Ecclesiastes 5:8–20',
      title: 'Wealth, Desire, and Satisfaction',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(8, 'If thou seest the oppression of the poor, and violent perverting of judgment and justice in a province, marvel not at the matter: for he that is higher than the highest regardeth; and there be higher than he.'),
            plain(9, 'Moreover the profit of the earth is for all: the king himself is served by the field.'),
            plain(10, 'He that loveth silver shall not be satisfied with silver; nor he that loveth abundance with increase: this is also vanity.'),
            plain(11, 'When goods increase, they are increased that eat them: and what good is there to the owners thereof, saving the beholding of them with their eyes?'),
            plain(12, 'The sleep of a labouring man is sweet, whether he eat little or much: but the abundance of the rich will not suffer him to sleep.'),
            plain(13, 'There is a sore evil which I have seen under the sun, namely, riches kept for the owners thereof to their hurt.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ecc5-silver-insatiable',
          html: '"He that loveth silver shall not be satisfied with silver; nor he that loveth abundance with increase." The Preacher identifies a fundamental law: the pursuit of material wealth cannot be satisfied. Each gain breeds desire for more. The rich man will never have enough, no matter how much he accumulates. Yet the laborer who works hard sleeps well—the sleep of the satisfied. The rich man, anxious about his possessions, sleeps poorly. Abundance brings not rest but worry. This is the evil of hoarding: it hurts the one who hoards.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(14, 'But those riches perish by evil travail: and he begetteth a son, and there is nothing in his hand.'),
            plain(15, 'As he came forth of his mother&apos;s womb, naked shall he return to go as he came, and shall take nothing of his labour, which he may carry away in his hand.'),
            plain(16, 'And this also is a sore evil, that in all points as he came, so shall he go: and what profit hath he that hath laboured for the wind?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ecc5b-mid-love-labor',
          html:
            'Wisdom &amp; folly diverge; mark the turning point &amp; learn.',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(17, 'All his days also he eateth in darkness, and he hath much sorrow and wrath with his infirmity.'),
            plain(18, 'Behold that which I have seen: it is good and comely for one to eat and to drink, and to enjoy the good of all his labour that he taketh under the sun all the days of his life, which God giveth him: for this is his portion.'),
            plain(19, 'Every man also to whom God hath given riches and wealth, and hath given him power to enjoy them, and to take his portion, and to rejoice in his labour; this is the gift of God.'),
            plain(20, 'For he shall not much remember the days of his life; because God answereth him in the joy of his heart.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ecc5-silver',
          html:
            '"He that loveth silver shall not be satisfied with silver; nor he that loveth abundance with increase." The Preacher identifies a fundamental law of desire: the pursuit of material wealth cannot be satisfied. Each gain breeds a desire for more. The appetite grows with feeding. The rich man who loves money will never have enough, no matter how much he accumulates. This is not a moral failure—it is a structural impossibility. Desire itself is insatiable.',
        },
        {
          kind: 'commentary',
          id: 'ecc5-sleep',
          html:
            'The contrast between the sleeping patterns of rich and poor is revealing. "The sleep of a labouring man is sweet, whether he eat little or much: but the abundance of the rich will not suffer him to sleep." The laborer who works hard sleeps the sleep of the satisfied. The rich man, anxious about his possessions, sleeps poorly. Abundance brings not rest but worry.',
        },
        {
          kind: 'commentary',
          id: 'ecc5-take-nothing',
          html:
            '"As he came forth of his mother&apos;s womb, naked shall he return." Death is the great leveler. No one takes their wealth with them. The rich man who hoarded his wealth cannot carry a single coin into eternity. And if he has spent his life accumulating wealth at the cost of other goods—rest, peace, time with loved ones—he has labored for the wind.',
        },
        {
          kind: 'commentary',
          id: 'ecc5-gift',
          html:
            'But then the Preacher offers a corrective. "It is good and comely for one to eat and to drink, and to enjoy the good of all his labour." The key word is "enjoy." The person who can enjoy the fruit of his labor, who can eat and drink with pleasure and thanksgiving, who can receive wealth as a gift from God rather than pursuing it as an end in itself—this person has found something real. Not the wealth itself, but the joy of it. And that joy is something God can grant.',
        },
        {
          kind: 'christ',
          id: 'ecc5-christ-satisfies',
          title: 'Christ Connection — Christ Alone Satisfies',
          html:
            'Jesus said, "Come unto me, all ye that labour and are heavy laden, and I will give you rest." He spoke to the weary heart, the hungry soul. He offered something that silver cannot buy and abundance cannot provide: peace. Satisfaction. Rest. "I am the living bread which came down from heaven: if any man eat of this bread, he shall live for ever." Christ offers Himself to the spiritual hunger that material wealth can never touch. The Psalmist says, "Whom have I in heaven but thee? and there is none upon earth that I desire beside thee."',
        },
        {
          kind: 'reflection',
          id: 'ecc5-what-hungry-for',
          prompt: 'What are you hungry for that money cannot buy? What desire in your heart is not about wealth or status but about something deeper—peace, meaning, connection, belonging? What might change if you brought that hunger to Christ?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'He that loveth silver shall not be satisfied with silver...It is good and comely for one to eat and to drink, and to enjoy the good of all his labour that he taketh under the sun.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ecclesiastes 5 · Study Guide',
  },

  hasHebrew: false,
};
