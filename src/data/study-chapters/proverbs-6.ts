import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Proverbs 6 — Six Things the Lord Hates
 *
 * "Go to the ant, thou sluggard." Here is wisdom drawn from the natural world,
 * from observation of how creatures live. Sloth is condemned not as a moral
 * failing alone but as a failure to learn from creation itself. The chapter then
 * moves into a catalog of six things the Lord hates—seven are an abomination—
 * warning against becoming a spreader of strife, a plotter of evil, a maker of
 * false witness. And again, the warning against the strange woman returns.
 */
export const PROVERBS_6: RichChapterContent = {
  bookSlug: 'proverbs',
  bookName: 'Proverbs',
  chapter: 6,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 5 },
  intros: [
    'The sixth chapter of Proverbs uses an unusual rhetorical strategy: it teaches by analogy and by catalog. The sluggard is invited to go to the ant, to watch how the creature labors without command, stores without direction, prepares without being told. This is wisdom available to observation. Creation itself teaches. But there is no teacher who can wake the sluggard if the sluggard will not rise.',
    'The chapter then catalogs what God hates: a proud look, a lying tongue, hands that shed innocent blood, a heart that devises wicked imaginations, feet swift to mischief, and the false witness. Seven things altogether—six explicitly named, and a seventh implied in the one who sows discord among brethren. The list is not arbitrary. These are the ways by which human community is broken.',
  ],

  sections: [
    {
      ref: 'Proverbs 6:1–11',
      title: 'The Sluggard and the Way of Sloth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(1, 'My son, if thou be surety for thy friend, if thou hast stricken thy hand with a stranger;'),
            plain(2, 'Thou art snared by the words of thy mouth: thou art taken by the words of thy mouth.'),
            plain(3, 'Do this now, my son, and deliver thyself, when thou art come into the hand of thy friend; go, humble thyself, and make sure thy friend.'),
            plain(4, 'Give not sleep to thine eyes, nor slumber to thine eyelids.'),
            plain(5, 'Deliver thyself as a roe from the hand of the hunter, and as a bird from the hand of the fowler.'),
            plain(6, 'Go to the ant, thou sluggard; consider her ways, and be wise:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov6-surety-snare',
          html: 'The chapter opens with a warning about becoming surety for a friend—placing yourself as collateral for another\'s debt. You speak the words, your hand seals the contract, and you are suddenly trapped. The entire passage is about how quickly we can ensnare ourselves through carelessness or overconfidence. But then comes the invitation: deliver yourself. Escape the trap you\'ve set.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(7, 'Which having no guide, overseer, or ruler,'),
            plain(8, 'Provideth her meat in the summer, and gathereth her food in the harvest.'),
            plain(9, 'How long wilt thou sleep, O sluggard? when wilt thou arise out of thy sleep?'),
            plain(10, 'Yet a little sleep, a little slumber, a little folding of the hands to sleep:'),
            plain(11, 'So shall thy poverty come as one that travelleth, and thy want as an armed man.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov6-sluggard',
          html: 'The sluggard is not condemned for being poor, but for the laziness that leads to poverty. "How long wilt thou sleep?" is not a sneer but a plea, a question that sounds almost affectionate in its exasperation. Yet there is urgency: from small slumber comes great want. The sluggard postpones—"a little sleep, a little slumber"—and does not see how the small postponements accumulate into a life of want.',
        },
        {
          kind: 'commentary',
          id: 'prov6-ant-teacher',
          html: 'The ant is the teacher. She has no overseer, no one commanding her, yet she works. She gathers in summer for winter that is not yet here. This is foresight, this is diligence, this is the way of creation itself. The sluggard is invited not to shame but to learn—to see in the ant what it means to live with intention, with preparation, with care for the future.',
        },
        {
          kind: 'carry',
          html: 'What work are you avoiding? What long-term provision are you failing to prepare for because you tell yourself there is yet time? The wisdom of Proverbs is that small choices, repeated, shape a life. The sluggard sleeps a little, then a little more, and wakes one day in poverty, with no one to blame but himself.',
        },
        {
          kind: 'reflection',
          id: 'prov6-sluggard-self',
          prompt: 'In what areas of your life are you living like a sluggard, postponing what needs to be done? What would change if you committed to beginning today?',
        },
      ],
    },

    {
      ref: 'Proverbs 6:12–35',
      title: 'Six Things the Lord Hates, and the Strange Woman Again',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(12, 'A naughty person, a man of iniquity, goeth with a froward mouth.'),
            plain(13, 'He winketh with his eyes, he speaketh with his feet, he teacheth with his fingers;'),
            plain(14, 'Frowardness is in his heart, he deviseth mischief continually; he soweth discord.'),
            plain(15, 'Therefore shall his calamity come suddenly; suddenly shall he be broken without remedy.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov6-naughty-person',
          html: 'The naughty person speaks with a froward mouth, winks with eyes, gestures with feet and fingers. He is not hidden—his iniquity is written in his body. He schemes, he sows discord. And his ruin comes swiftly. You cannot live in perpetual mischief without reaping sudden calamity.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(16, 'These six things doth the Lord hate: yea, seven are an abomination unto him:'),
            plain(17, 'A proud look, a lying tongue, and hands that shed innocent blood,'),
            plain(18, 'An heart that deviseth wicked imaginations, feet that be swift in running to mischief,'),
            plain(19, 'A false witness that speaketh lies, and he that soweth discord among brethren.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov6-six-things-expanded',
          html: 'The list cuts to the heart: pride, lies, bloodshed, wickedness, haste toward evil, and the poisoning of community itself. These are the ways by which the social order crumbles. Each is a violence against truth and trust.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(20, 'My son, keep thy father&apos;s commandment, and forsake not the law of thy mother:'),
            plain(21, 'Bind them continually upon thine heart, and tie them about thy neck.'),
            plain(22, 'When thou goest, it shall lead thee; when thou sleepest, it shall keep thee; and when thou awakest, it shall talk with thee.'),
            plain(23, 'For the commandment is a lamp; and the law is light; and reproofs of instruction are the way of life:'),
            plain(24, 'To keep thee from the evil woman, from the flattery of the tongue of a strange woman.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov6-commandment-lamp',
          html: 'Your parents&apos; wisdom is not a burden—it&apos;s a light. Bind it to your heart like a necklace. When you walk, it guides you. When you sleep, it guards you. When you wake, it speaks to you. This is a light in darkness, a guardrail against seduction.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(25, 'Lust not after her beauty in thine heart; neither let her take thee with her eyelids.'),
            plain(26, 'For by means of a whorish woman a man is brought to a piece of bread: and the adultress will hunt for the precious life.'),
            plain(27, 'Can a man take fire in his bosom, and his clothes not be burned?'),
            plain(28, 'Can one go upon hot coals, and his feet not be burned?'),
            plain(29, 'So he that goeth in to his neighbour&apos;s wife; whosoever toucheth her shall not be innocent.'),
            plain(30, 'Men do not despise a thief, if he steal to satisfy his soul when he is hungry;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov6-fire-bosom',
          html: 'The imagery rises to vivid intensity. Can you hold fire in your lap without being burned? Can you walk on hot coals without your feet blistering? The answer is obvious. So it is with adultery. You cannot invite someone else\'s wife into your heart and your bed without being burned. The fire of desire consumes everything it touches. The end of that path is always destruction.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(31, 'But if he be found, he shall restore sevenfold; he shall give all the substance of his house.'),
            plain(32, 'But whoso committeth adultery with a woman lacketh understanding: he that doeth it destroyeth his own soul.'),
            plain(33, 'A wound and dishonour shall he get; and his reproach shall not be wiped away.'),
            plain(34, 'For jealousy is the rage of a man: therefore he will not spare in the day of vengeance.'),
            plain(35, 'He will not regard any ransom; neither will he rest content, though thou givest many gifts.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov6-six-things',
          html: 'The list of six things God hates (with a seventh as an abomination) is not random. They are things that break community, that corrupt witness, that make trust impossible. A proud look says: "I am above your rules." A lying tongue says: "My words mean nothing." Hands that shed innocent blood, a heart that devises wicked imaginations, feet swift to mischief, a false witness—all of these are ways by which the fabric of human relationship is torn.',
        },
        {
          kind: 'hebrew',
          id: 'prov6-satah',
          title: 'Satah — "Abhors" (Detests)',
          script: 'שָׂטָה',
          translit: '<strong>Satah</strong> · to abhor; to detest; to regard with loathing',
          description: 'The verb is strong, personal, visceral. God does not merely disapprove of these things. He abhors them. He regards them with loathing. This is not abstract judgment but a response to what genuinely corrupts.',
        },
        {
          kind: 'commentary',
          id: 'prov6-adultery-fire',
          html: 'The warning against adultery rises to dramatic intensity. "Can a man take fire in his bosom, and his clothes not be burned?" This is not primarily about moral prohibition. It is about cause and effect. You cannot invite fire into your life and not be burned. The path of adultery destroys the one who walks it. And unlike theft, which can be restored sevenfold, adultery destroys the soul itself.',
        },
        {
          kind: 'christ',
          id: 'prov6-christ-integrity',
          title: 'Christ Connection — Christ and Integrity',
          html: 'Christ embodied every good that Proverbs calls for: humility (not a proud look), truth (not a lying tongue), innocence (hands that never shed innocent blood), a heart that devised only the Father&apos;s will, feet swift to do mercy. To follow Christ is to be called away from the ways the Lord hates and toward the way He loves.',
        },
        {
          kind: 'carry',
          html: 'The wisdom of Proverbs on adultery is not that desire is evil, but that desire outside covenant destroys both parties. The way forward is not to deny desire but to order it rightly—to bind your father&apos;s commandment about your heart, to let the law be a light on your path, to find satisfaction and joy within your covenant bonds.',
        },
        {
          kind: 'reflection',
          id: 'prov6-covenant-way',
          prompt: 'Where do you struggle with the ordering of desire? What would it mean for you to let God&apos;s commandment be a lamp guiding you away from paths that destroy?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Go to the ant, thou sluggard; consider her ways, and be wise. These six things doth the Lord hate: yea, seven are an abomination unto him.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Proverbs 6 · Study Guide',
  },

  hasHebrew: true,
};
