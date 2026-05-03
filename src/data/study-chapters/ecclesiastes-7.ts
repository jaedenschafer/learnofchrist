import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Ecclesiastes 7 — Better, Better, Better
 *
 * The Preacher builds his argument through a series of "better" statements.
 * "Better is the day of one&apos;s death than the day of one&apos;s birth."
 * "A good name is better than precious ointment." "It is better to go to the
 * house of mourning than the house of feasting." The Preacher is not
 * celebrating death or mourning. He is teaching that the depth of death, the
 * sobriety of mourning, the reality of our end brings wisdom. And wisdom,
 * once earned, is better than any worldly pleasure.
 */
export const ECCLESIASTES_7: RichChapterContent = {
  bookSlug: 'ecclesiastes',
  bookName: 'Ecclesiastes',
  chapter: 7,

  estimatedMinutes: { beginner: 1, intermediate: 5, deep: 6 },
  intros: [
    'The Preacher now enters a series of paradoxes. Death is better than birth. Mourning is better than feasting. Sorrow is better than laughter. These statements seem to contradict the good counsel of earlier chapters, where he urged us to enjoy food and drink and the fruit of our labor. But the Preacher is not saying to despise life. He is saying that the deep things—the awareness of death, the sorrow of loss, the reality of suffering—these bring wisdom. A house of mourning teaches what a house of feasting cannot. The sight of tears teaches what laughter never will.',
    'And the Preacher adds: "Better is a good name than precious ointment." Reputation, character, the moral legacy of a life—these endure after we are gone. They outlast possessions. They survive us. The Preacher is directing us toward what truly matters, what truly lasts. And he notes that wickedness and folly can destroy a person as surely as money can. It is not merely excess in pleasure that we should avoid. It is excess in any direction. The wise person is the one who can hold opposites together: enjoy life, but remember death; seek joy, but honor sorrow; build your reputation, but do not trust in it.',
  ],

  sections: [
    {
      ref: 'Ecclesiastes 7:1–14',
      title: 'The Value of Sorrow',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(1, 'A good name is better than precious ointment; and the day of death than the day of one&apos;s birth.'),
            plain(2, 'It is better to go to the house of mourning, than to go to the house of feasting: for that is the end of all men; and the living will lay it to his heart.'),
            plain(3, 'Sorrow is better than laughter: for by the sadness of the countenance the heart is made better.'),
            plain(4, 'The heart of the wise is in the house of mourning; but the heart of fools is in the house of mirth.'),
            plain(5, 'It is better to hear the rebuke of the wise, than for a man to hear the song of fools.'),
            plain(6, 'For as the crackling of thorns under a pot, so is the laughter of the fool: this is also vanity.'),
            plain(7, 'Surely oppression maketh a wise man mad; and a gift destroyeth the heart.'),
            plain(8, 'Better is the end of a thing than the beginning thereof: and the patient in spirit is better than the proud in spirit.'),
            plain(9, 'Be not hasty in thy spirit to be angry: for anger resteth in the bosom of fools.'),
            plain(10, 'Say not thou, What is the cause that the former days were better than these? for thou dost not inquire wisely concerning this.'),
            plain(11, 'Wisdom is good with an inheritance: and by it there is profit to them that see the sun.'),
            plain(12, 'For wisdom is a defence, and money is a defence: but the excellency of knowledge is, that wisdom giveth life to them that have it.'),
            plain(13, 'Consider the work of God: for who can make that straight, which he hath made crooked?'),
            plain(14, 'In the day of prosperity be joyful, but in the day of adversity consider: God also hath set the one over against the other, to the end that man should find nothing after him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ecc7-good-name',
          html:
            '"A good name is better than precious ointment." The ointment fades, and the fragrance dissipates. But a good name—a reputation built on integrity, on faithfulness, on wisdom—this lasts. This is something we leave behind. The Preacher is teaching that what we leave in the memory and hearts of others matters more than what we accumulate in material goods.',
        },
        {
          kind: 'commentary',
          id: 'ecc7-mourning',
          html:
            '"It is better to go to the house of mourning than to go to the house of feasting." The house of mourning reminds us of our mortality. We see the end. We confront the reality of death. And this confrontation, though painful, teaches us. It makes us sober. It strips away illusion. The house of feasting, by contrast, can seduce us into forgetting that we die. The Preacher says the living should "lay it to his heart"—remember that this is the end of all men.',
        },
        {
          kind: 'commentary',
          id: 'ecc7-sorrow-better',
          html:
            '"Sorrow is better than laughter: for by the sadness of the countenance the heart is made better." This is not an invitation to depression. It is an observation that sorrow educates the heart in ways that laughter cannot. The heart refined by sorrow has depth. It has compassion. It has wisdom. The fool laughs carelessly. The wise person has learned from sadness.',
        },
        {
          kind: 'commentary',
          id: 'ecc7-patient-spirit',
          html:
            '"Better is the end of a thing than the beginning thereof." We prize the beginning—the new romance, the new project, the fresh start. But the Preacher says the ending is better, because it shows what a thing was made of. The marriage that lasts fifty years shows love more truly than the wedding day. The project that sees completion shows wisdom more than the brilliant proposal. And "the patient in spirit is better than the proud in spirit." The one who can wait, who can endure, who does not demand immediate glory—this person shows true strength.',
        },
        {
          kind: 'carry',
          html:
            'The Preacher invites us to reconsider what we value. In a culture that celebrates the beginning, the young, the beautiful, the new—he reminds us that depth comes from time. Character is built through adversity. Wisdom is earned through sorrow. And a good name is more valuable than anything we can buy or possess.',
        },
        {
          kind: 'reflection',
          id: 'ecc7-good-name-built',
          prompt: 'What is your name worth? What will you be remembered for? And what sorrow, what difficulty, what loss has shaped the deepest parts of who you are?',
        },
      ],
    },

    {
      ref: 'Ecclesiastes 7:15–29',
      title: 'Wisdom and Folly, Righteousness and Wickedness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(15, 'All things have I seen in the days of my vanity: there is a just man that perisheth in his righteousness; and there is a wicked man that prolongeth his life in his wickedness.'),
            plain(16, 'Be not righteous over much; neither make thyself over wise: why shouldest thou destroy thyself?'),
            plain(17, 'Be not over much wicked, neither be thou foolish: why shouldest thou die before thy time?'),
            plain(18, 'It is good that thou shouldest take hold of this; yea, also from this withdraw not thine hand: for he that feareth God shall come forth of them all.'),
            plain(19, 'Wisdom strengtheneth the wise more than ten mighty men which are in the city.'),
            plain(20, 'For there is not a just man upon earth, that doeth good, and sinneth not.'),
            plain(21, 'Also take not heed unto all words that are spoken; lest thou hear thy servant curse thee:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ecc7-middle-way',
          html: 'The Preacher observes an injustice: just men perish, wicked men prosper. The moral universe does not balance fairly. Yet he counsels a middle way: don&apos;t be righteous over much, destroying yourself with unrealistic perfectionism, but don&apos;t give in to wickedness either. Fear God and keep His commandments, but hold lightly to your own righteousness. Acknowledge that all are infected with sin. No one does pure good. The wise understand this reality and navigate between extremes. Such a one finds strength and wisdom.',
        },
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(22, 'For oftentimes also thine own heart knoweth that thou thyself likewise hast cursed others.'),
            plain(23, 'All this have I proved by wisdom: I said, I will be wise; but it was far from me.'),
            plain(24, 'That which is far off, and exceeding deep, who can find it out?'),
            plain(25, 'I turned about, and my heart was to know, and to search, and to seek out wisdom, and the reason of things, and to know the wickedness of folly, even of foolishness and madness:'),
            plain(26, 'And I find more bitter than death the woman whose heart is snares and nets, and her hands as bands: whoso pleaseth God shall escape from her; but the sinner shall be taken by her.'),
            plain(27, 'Behold, this have I found, saith the Preacher, counting one by one, to find out the account:'),
            plain(28, 'Which yet my soul seeketh, but I find not: one man among a thousand have I found; but a woman among all those have I not found.'),
            plain(29, 'Lo, this only have I found, that God made man upright; but they have sought out many inventions.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ecc7-just-perish',
          html:
            'The Preacher observes an injustice in the world: "There is a just man that perisheth in his righteousness; and there is a wicked man that prolongeth his life in his wickedness." The moral universe does not balance fairly. The good die young. The wicked prosper. This is not an observation about God&apos;s character but about the brokenness of the earthly order. And the Preacher counsels: don&apos;t be righteous over much. Don&apos;t destroy yourself with unrealistic perfectionism. But also, don&apos;t give in to wickedness. The wise path is the middle way—fear God and keep His commandments, but hold lightly to your own righteousness.',
        },
        {
          kind: 'commentary',
          id: 'ecc7-no-just-man',
          html:
            '"There is not a just man upon earth, that doeth good, and sinneth not." The Preacher acknowledges that all are infected with sin. No one does pure good. All have failed. This is not despair but realism. The person who insists on his own righteousness is blind to his own corruption. But the person who fears God, who seeks wisdom, who tries to live well—even as he acknowledges his failure—such a person finds something true.',
        },
        {
          kind: 'christ',
          id: 'ecc7-christ-blessing-mourning',
          title: 'Christ Connection — Christ in Mourning Blesses',
          html:
            'Jesus wept at the grave of Lazarus. He mourned with those who mourn. And He taught: "Blessed are they that mourn, for they shall be comforted." Christ did not flee from sorrow or pretend the world was not broken. He entered into it. He bore it. And through His tears, through His death, He brought a redemption that makes all sorrow meaningful. Christ in mourning blesses—He teaches us that sorrow is not meaningless, that suffering can produce wisdom, and that death itself does not have the final word.',
        },
        {
          kind: 'reflection',
          id: 'ecc7-middle-way-2',
          prompt: 'Do you tend toward excessive righteousness—trying to be perfect and destroying yourself? Or toward excessive wickedness—compromising your integrity? What would it look like to find the middle way: to fear God and seek wisdom without demanding perfection of yourself?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'A good name is better than precious ointment...It is better to go to the house of mourning than to the house of feasting...The patient in spirit is better than the proud in spirit.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ecclesiastes 7 · Study Guide',
  },

  hasHebrew: false,
};
