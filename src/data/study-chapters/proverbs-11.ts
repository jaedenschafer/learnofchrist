import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Proverbs 11 — Pride and the Saving of Souls
 *
 * "When pride cometh, then cometh shame." The chapter continues the collection
 * of short sayings, building on themes of humility, integrity, and righteousness.
 * It includes one of the most stirring claims: "He that winneth souls is wise."
 * The chapter sets before the reader the consequences of pride and the blessing
 * that comes from living with honesty and in service to others.
 */
export const PROVERBS_11: RichChapterContent = {
  bookSlug: 'proverbs',
  bookName: 'Proverbs',
  chapter: 11,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 5 },
  intros: [
    'The eleventh chapter continues Solomon&apos;s collection of pithy sayings, now focusing on pride, integrity, and the nature of genuine success. The chapter opens with the claim that pride precedes shame, and honor follows those who are humble. It moves through various domains—commerce, conduct, speech, legacy—showing how wisdom and foolishness play out in the fabric of everyday life.',
    'One saying stands out for its moral weight: "He that winneth souls is wise." This is not merely about personal success or spiritual conquest. It is a claim that the highest wisdom is found in bringing others into alignment with truth, in leading them away from folly toward life. The person who spends their energy on the salvation of others is engaged in the highest work.',
  ],

  sections: [
    {
      ref: 'Proverbs 11:1–15',
      title: 'Humility, Integrity, and Righteousness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(1, 'A false balance is abomination to the Lord: but a just weight is his delight.'),
            plain(2, 'When pride cometh, then cometh shame: but with the humble is wisdom.'),
            plain(3, 'The integrity of the upright shall guide them: but the frowardness of transgressors shall destroy them.'),
            plain(4, 'Riches profit not in the day of wrath: but righteousness delivereth from death.'),
            plain(5, 'The righteousness of the perfect shall direct his way: but the wicked shall fall by his own wickedness.'),
            plain(6, 'The righteousness of the upright shall deliver them: but transgressors shall be taken in their own naughtiness.'),
            plain(7, 'When a wicked man dieth, his expectation shall perish: and the hope of unjust men perisheth.'),
            plain(8, 'The righteous is delivered out of trouble, and the wicked cometh in his stead.'),
            plain(9, 'An hypocrite with his mouth destroyeth his neighbour: but through knowledge shall the just be delivered.'),
            plain(10, 'When it goeth well with the righteous, the city rejoiceth: and when the wicked perish, there is shouting.'),
            plain(11, 'By the blessing of the upright the city is exalted: but it is overthrown by the mouth of the wicked.'),
            plain(12, 'He that is void of wisdom despiseth his neighbour: but a man of understanding holdeth his peace.'),
            plain(13, 'A talebearer revealeth secrets: but he that is of a faithful spirit concealeth the matter.'),
            plain(14, 'Where no counsel is, the people fall: but in the multitude of counsellors there is safety.'),
            plain(15, 'He that is surety for a stranger shall smart for it: and he that hateth suretiship is sure.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov11-pride-shame',
          html: 'One of the most famous proverbs: "When pride cometh, then cometh shame: but with the humble is wisdom." Pride is not confidence or self-respect. It is the assumption that you do not need to learn, that you are above correction, that your way is the right way without question. And shame follows as naturally as day follows night. But humility—the willingness to be teachable, to learn, to defer to wisdom beyond yourself—is where wisdom dwells.',
        },
        {
          kind: 'hebrew',
          id: 'prov11-gaavah',
          title: 'Gaavah — "Pride" (Arrogance)',
          script: 'גַּאֲוָה',
          translit: '<strong>Gaavah</strong> · pride; arrogance; exaltation; haughtiness',
          description: 'The word suggests a kind of swelling, a puffing up. Pride is not mere self-confidence. It is self-inflation, seeing yourself as larger and more important than you actually are.',
        },
        {
          kind: 'commentary',
          id: 'prov11-integrity-guide',
          html: 'Integrity means wholeness, consistency, honesty. "The integrity of the upright shall guide them." If you are whole, if your inner life is consistent with your outer life, if you do not speak one thing and do another, then you have a guide built into your character. You can trust yourself. But the frowardness of transgressors destroys them—the inconsistency, the split between inner and outer, the deception catches up with them.',
        },
        {
          kind: 'commentary',
          id: 'prov11-soul-winning',
          html: 'Verse 30 (in the second section) will claim: "He that winneth souls is wise." This is a stunning claim about what wisdom consists of. Not wealth, not power, not fame, but the ability and willingness to lead others toward life. The soul-winner is engaged in the highest work.',
        },
        {
          kind: 'carry',
          html: 'The proverbs invite you to see the structure of reality. Integrity guides. Pride brings shame. Righteousness delivers. Wickedness destroys itself. The world has a moral logic built into it. If you live according to that logic, you flourish. If you work against it, you suffer.',
        },
        {
          kind: 'reflection',
          id: 'prov11-integrity-life',
          prompt: 'Is your integrity guiding you? Are the different parts of your life—what you do in public, what you do in private, what you say and what you believe—aligned? Where is there frowardness?',
        },
      ],
    },

    {
      ref: 'Proverbs 11:16–31',
      title: 'The Soul-Winner and the Consequences of Our Ways',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(16, 'A gracious woman retaineth honour: and strong men retain riches.'),
            plain(17, 'The merciful man doeth good to his own soul: but he that is cruel troubleth his own flesh.'),
            plain(18, 'The wicked worketh a deceitful work: but to him that soweth righteousness shall be a sure reward.'),
            plain(19, 'As righteousness tendeth to life: so he that pursueth evil pursueth it to his own death.'),
            plain(20, 'They that are of a froward heart are abomination to the Lord: but such as are upright in their way are his delight.'),
            plain(21, 'Though hand join in hand, the wicked shall not be unpunished: but the seed of the righteous shall be delivered.'),
            plain(22, 'As a jewel of gold in a swine&apos;s snout, so is a fair woman which is without discretion.'),
            plain(23, 'The desire of the righteous is only good: but the expectation of the wicked is wrath.'),
            plain(24, 'There is that scattereth, and yet increaseth; and there is that withholdeth more than is meet, but it tendeth to poverty.'),
            plain(25, 'The liberal soul shall be made fat: and he that watereth shall be watered also himself.'),
            plain(26, 'He that withholdeth corn, the people shall curse him: but blessing shall be upon the head of him that selleth it.'),
            plain(27, 'He that diligently seeketh good procureth favour: but he that seeketh mischief, it shall come unto him.'),
            plain(28, 'He that trusteth in his riches shall fall: but the righteous shall flourish as a branch.'),
            plain(29, 'He that troubleth his own house shall inherit the wind: and the fool shall be servant to the wise of heart.'),
            plain(30, 'The fruit of the righteous is a tree of life; and he that winneth souls is wise.'),
            plain(31, 'Behold, the righteous shall be recompensed in the earth: much more the wicked and the sinner.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov11-merciful-soul',
          html: 'Verse 17 is penetrating: "The merciful man doeth good to his own soul: but he that is cruel troubleth his own flesh." Cruelty wounds the one who is cruel. Mercy heals the one who is merciful. You cannot harm others without harming yourself. You cannot bless others without blessing yourself. Your actions return to you in ways you may not expect.',
        },
        {
          kind: 'commentary',
          id: 'prov11-scattering-increasing',
          html: 'One of the paradoxical proverbs: "There is that scattereth, and yet increaseth; and there is that withholdeth more than is meet, but it tendeth to poverty." The person who gives generously finds themselves with more. The person who hoards finds themselves with less. The kingdom of God runs on this paradox: the way to increase is to give.',
        },
        {
          kind: 'commentary',
          id: 'prov11-soul-winning-wise',
          html: 'Verse 30 makes one of the boldest claims in Proverbs: "He that winneth souls is wise." Not the one who accumulates wealth, not the one who gains power or fame, but the one who brings others into alignment with truth, who leads them away from folly toward life—this is the wise one. Soul-winning is the highest wisdom.',
        },
        {
          kind: 'christ',
          id: 'prov11-christ-tree-life',
          title: 'Christ Connection — Christ as Tree of Life',
          html: 'Verse 30 speaks of "the fruit of the righteous is a tree of life." This echoes the tree of life in Genesis and in Revelation. Christ is that tree. His fruit is everlasting life. To participate in the fruitfulness of righteousness is to participate in the life of Christ.',
        },
        {
          kind: 'carry',
          html: 'The proverbs of chapter 11 paint a consistent picture: righteousness tends to life. Generosity tends to increase. Mercy benefits the merciful. Cruelty harms the cruel. The world is not neutral. It responds to how you live. The highest work is the work of bringing souls from death to life.',
        },
        {
          kind: 'reflection',
          id: 'prov11-winning-souls',
          prompt: 'Who are you trying to win toward life? Whose soul are you investing in? Where might you be withholding yourself when you could be scattering and increasing?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'When pride cometh, then cometh shame: but with the humble is wisdom...He that winneth souls is wise.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Proverbs 11 · Study Guide',
  },

  hasHebrew: true,
};
