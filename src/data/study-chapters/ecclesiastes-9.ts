import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Ecclesiastes 9 — Do Your Work With All Your Might
 *
 * "Whatsoever thy hand findeth to do, do it with thy might." The Preacher has
 * spent much of Ecclesiastes describing the futility of labor—how all is
 * vanity. And yet here he counsels vigor. Do what you can do, and do it fully.
 * For the grave comes. "There is no work, nor device, nor knowledge, nor
 * wisdom, in the grave, whither thou goest." But until that day, work as if
 * your work matters. And Christ is our wisdom—the One who gives meaning to
 * labor, to life, to the years we have been given.
 */
export const ECCLESIASTES_9: RichChapterContent = {
  bookSlug: 'ecclesiastes',
  bookName: 'Ecclesiastes',
  chapter: 9,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 5 },
  intros: [
    'The Preacher faces a seeming paradox. All is vanity. Death comes for everyone. And yet the proper response is not paralysis but engagement. You are still alive. You still have hands that can work. You still have days ahead. Therefore, do your work with all your might. The fact that all is meaningless does not mean nothing is worth doing. The fact that you will die does not mean you should not live fully now.',
    'The Preacher observes that the living have an advantage over the dead, even though death comes for both. The living can still act, still strive, still enjoy. And he counsels joy as well as work. Go through your days with a companion. Enjoy what you are given. Work with your whole heart. And know that all of it is provisional—all of it will end in the grave. But that does not negate what is now. That does not make the present empty. The present is where we live.',
  ],

  sections: [
    {
      ref: 'Ecclesiastes 9:1–12',
      title: 'Work While You Have Time',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(1, 'For all this I considered in my heart even to declare all this, that the righteous, and the wise, and their works, are in the hand of God: no man knoweth either love or hatred by all that is before them.'),
            plain(2, 'All things come alike to all: there is one event to the righteous, and to the wicked; to the good and to the clean, and to the unclean; to him that sacrificeth, and to him that sacrificeth not: as is the good, so is the sinner; and he that sweareth, as he that feareth an oath.'),
            plain(3, 'This is an evil among all things that are done under the sun, that there is one event unto all: yea, also the heart of the sons of men is full of evil, and madness is in their heart while they live, and after that they go to the dead.'),
            plain(4, 'For to him that is joined to all the living there is hope: for a living dog is better than a dead lion.'),
            plain(5, 'For the living know that they shall die: but the dead know not any thing, neither have they any more a reward; for the memory of them is forgotten.'),
            plain(6, 'Also their love, and their hatred, and their envy, is now perished; neither have they any more a portion for ever in any thing that is done under the sun.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ecc9-death-leveler-living-advantage',
          html:
            'The Preacher establishes the problem: death is universal and final. Yet here lies the pivot point. The dead know nothing, have no reward, are forgotten. But this observation—that death is the great leveler—contains within it a hidden affirmation: the living still have something. They have awareness, choice, the capacity to act. What the dead have lost, the living possess. And this possession demands response.[res:british-museum-mesopotamia]',
        },
        {
          kind: 'greek',
          id: 'ecc9-psyche',
          title: 'Psyche — "Soul" or "Life"',
          script: 'ψυχή',
          translit: '<strong>Psyche</strong> · soul; life; the living self',
          description: 'The soul or psyche is the living essence. All that the soul desires, it pursues—yet all eventually faces death.',
        },
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(7, 'Go thy way, therefore, and eat thy bread with joy, and drink thy wine with a merry heart; for God now accepteth thy works.'),
            plain(8, 'Let thy garments be always white; and let thy head lack no ointment.'),
            plain(9, 'Live joyfully with the wife whom thou lovest all the days of the life of thy vanity, which he hath given thee under the sun, all the days of thy vanity: for that is thy portion in this life, and in thy labour which thou takest under the sun.'),
            plain(10, 'Whatsoever thy hand findeth to do, do it with thy might; for there is no work, nor device, nor knowledge, nor wisdom, in the grave, whither thou goest.'),
            plain(11, 'I returned, and saw under the sun, that the race is not to the swift, nor the battle to the strong, neither yet bread to the wise, nor yet riches to men of understanding, nor yet favour to men of skill; but time and chance happeneth to them all.'),
            plain(12, 'For man also knoweth not his time: as the fishes that are taken in an evil net, and as the birds that are caught in the snare; so are the sons of men snared in an evil time, when it falleth suddenly upon them.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ecc9-one-event',
          html:
            '"All things come alike to all: there is one event to the righteous, and to the wicked." Death is the great leveler. Righteous and wicked, good and evil, the one who sacrifices and the one who does not—all face the same end. The Preacher calls this "an evil," a tragedy. It is not fair that the good die as the wicked do. But it is the reality we live with.[res:sefaria-ecclesiastes-9]',
        },
        {
          kind: 'commentary',
          id: 'ecc9-living-know',
          html:
            '"The living know that they shall die: but the dead know not any thing." This is the Preacher&apos;s ground for action. The dead are beyond hope, beyond memory, beyond change. But the living—the living still have something. They still have awareness, choice, the ability to act. "A living dog is better than a dead lion." The weakest living creature has something that the noblest dead creature has lost: the possibility of action.[res:theoi-stoic-epicurean]',
        },
        {
          kind: 'commentary',
          id: 'ecc9-eat-drink-joy',
          html:
            '"Go thy way, therefore, and eat thy bread with joy, and drink thy wine with a merry heart; for God now accepteth thy works." The Preacher counsels not despair but engagement. Enjoy what you have. Work that you do is accepted by God. There is no need to earn acceptance by endless striving or self-denial. God accepts your works. Therefore, do them with joy.',
        },
        {
          kind: 'commentary',
          id: 'ecc9-might',
          html:
            '"Whatsoever thy hand findeth to do, do it with thy might." This is the answer to the paradox. Yes, all is vanity. Yes, death comes for all. And therefore, do what you do with your whole heart. Don&apos;t do it halfheartedly because it will not last. Do it fully because it is what you have to do now. In the grave, there is no work, no wisdom, no knowledge. But you are not in the grave yet. You have work to do.',
        },
        {
          kind: 'carry',
          html:
            'The Preacher invites us to live with double vision: aware that all is temporary, yet fully committed to what we are doing now. Eat with joy. Work with might. Love fully. Accept that chance and circumstance can overtake us at any moment. And still, engage fully with life. This is not contradiction. This is wisdom.',
        },
        {
          kind: 'reflection',
          id: 'ecc9-might-hand',
          prompt: 'What work has your hand found to do? Are you doing it with your whole heart, or are you holding back, doubting whether it matters? What would change if you committed fully to your work, knowing it will pass but that it matters now?',
        },
      ],
    },

    {
      ref: 'Ecclesiastes 9:13–18',
      title: 'Wisdom is Better Than Strength',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(13, 'This wisdom have I seen also under the sun, and it seemed great unto me:'),
            plain(14, 'There was a little city, and few men within it; and there came a great king against it, and besieged it, and built great bulwarks against it:'),
            plain(15, 'Now there was found in it a poor wise man, and he by his wisdom delivered the city; yet no man remembered that same poor man.'),
            plain(16, 'Then said I, Wisdom is better than strength: nevertheless the poor man&apos;s wisdom is despised, and his words are not heard.'),
            plain(17, 'The words of wise men are heard in quiet more than the cry of him that ruleth among fools.'),
            plain(18, 'Wisdom is better than weapons of war: but one sinner destroyeth much good.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ecc9-poor-wise-man',
          html:
            'The Preacher tells a story: a little city faces a great king. And a poor man, by his wisdom, saves the city. Yet no one remembers him. He is forgotten. And the Preacher observes: "Wisdom is better than strength." Yet the wise man is despised because he is poor. The world honors power and forgets wisdom that comes from the weak. This is the way of the world: it values visible might over quiet wisdom.',
        },
        {
          kind: 'commentary',
          id: 'ecc9-words-quiet',
          html:
            '"The words of wise men are heard in quiet more than the cry of him that ruleth among fools." The wise person does not shout. He speaks quietly, and those who have ears to hear will listen. The fool, by contrast, cries loudly, ruling through noise and force. But the quiet word of the wise carries more weight than all the shouting.',
        },
        {
          kind: 'christ',
          id: 'ecc9-christ-our-wisdom',
          title: 'Christ Connection — Christ Our Wisdom',
          html:
            'Jesus said, "My kingdom is not of this world." He did not conquer through military might or political power. He conquered through wisdom, through love, through the quiet word that reorders the human heart. He was poor, despised, remembered by the world as a failure. Yet His wisdom has transformed history. His quiet words have outlasted empires. Christ teaches us that true power is not in force but in truth, not in might but in wisdom, not in what the world sees but in what God knows.',
        },
        {
          kind: 'reflection',
          id: 'ecc9-quiet-word',
          prompt: 'Do you tend to seek strength and visibility, or do you trust the quiet word? What would it mean to believe that wisdom whispered quietly is more powerful than force shouted loudly?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Whatsoever thy hand findeth to do, do it with thy might...Wisdom is better than strength...The words of wise men are heard in quiet.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ecclesiastes 9 · Study Guide',
  },

    resources: [
    {
      id: 'sefaria-ecclesiastes-9',
      kind: 'study',
      source: 'Sefaria',
      label: 'Ecclesiastes 9',
      url: 'https://www.sefaria.org/Ecclesiastes.9',
      description: 'Sefaria open-access source text and translations for Ecclesiastes 9.',
    },
    {
      id: 'british-museum-mesopotamia',
      kind: 'museum',
      source: 'British Museum',
      label: 'ANE Wisdom Literature (Mesopotamia)',
      url: 'https://www.britishmuseum.org/',
      description: 'Mesopotamian wisdom texts paralleling Ecclesiastes&apos; quest for meaning under existential circularity.',
    },
    {
      id: 'theoi-stoic-epicurean',
      kind: 'archive',
      source: 'Theoi Classical Texts',
      label: 'Stoic and Epicurean Philosophy',
      url: 'https://www.theoi.com/',
      description: 'Hellenistic philosophical parallels to Ecclesiastes on pleasure, virtue, and the good life.',
    },
  ],

  hasHebrew: true,
};
