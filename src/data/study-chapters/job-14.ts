import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Job 14 — Job Speaks: Mortality and the Hope of Resurrection
 *
 * Job meditates on human mortality: "Man that is born of a woman is of few days,
 * and full of trouble." His days are like grass that grows and withers. His time
 * is short, and most of it is filled with suffering. But then Job moves to a
 * profound question: "If a man die, shall he live again?" Is there hope beyond
 * death? Job expresses a longing for the grave as a place of hiding, a refuge from
 * suffering. But he also expresses hope: "All the days of my appointed time will I
 * wait, till my change come." Job waits for a transformation, a change that will
 * come at the appointed time. He does not know what it will be, but he believes in
 * the possibility of resurrection, of life after death.
 */
export const JOB_14: RichChapterContent = {
  bookSlug: 'job',
  bookName: 'Job',
  chapter: 14,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 6 },
  intros: [
    'Job now moves to a profound meditation on the human condition. "Man that is born of a woman is of few days, and full of trouble." This is not bitterness now, but a kind of wisdom. Job is acknowledging something universal: all humans are born into a condition of limitation and suffering. We are of few days—our time is brief. And those few days are full of trouble. We do not get to choose the conditions into which we are born. We are trapped in a condition of mortality and pain.',
    'But from this acknowledgment of human limitation, Job moves to a radical question: "If a man die, shall he live again?" Is there something beyond death? Is there hope? Job does not have an answer. But he knows that he will wait. He speaks of a time when his "change" will come—a transformation that he does not yet understand but in which he places his hope. This chapter moves from the depths of despair to a tentative, uncertain hope.',
  ],

  bottomShare: {
    quote:
      '"If a man die, shall he live again?" Job asks the fundamental question of resurrection and expresses his hope: "All the days of my appointed time will I wait, till my change come."',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Job 14 · Study Guide',
  },

  sections: [
    {
      ref: 'Job 14:1–6',
      title: '"Man That Is Born of a Woman Is of Few Days"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(1, 'Man that is born of a woman is of few days, and full of trouble.'),
            plain(2, 'He cometh forth like a flower, and is cut down: he fleeth also as a shadow, and continueth not.'),
            plain(3, 'And dost thou open thine eyes upon such an one, and bringest me into judgment with thee?'),
            plain(4, 'Who can bring a clean thing out of an unclean? not one.'),
            plain(5, 'Seeing his days are determined, the number of his months are with thee, thou hast appointed his bounds that he cannot pass;'),
            plain(6, 'Turn from him, that he may rest, till he shall accomplish, as an hireling, his day.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job-born-woman',
          html:
            '"Man that is born of a woman is of few days, and full of trouble"—this is a universalizing statement. Job is not just talking about himself. He is speaking about the human condition. All humans are limited in time, all are full of trouble. This is what it means to be human.',
        },
        {
          kind: 'commentary',
          id: 'job-flower-cut-down',
          html:
            '"He cometh forth like a flower, and is cut down"—human life is like the life of a flower. It grows, it blooms, and then it is cut down. There is no permanence. There is no security. The beauty of the flower does not keep it from being cut.',
        },
        {
          kind: 'hebrew',
          id: 'job-yamin',
          title: 'Yamin — "Days" (Also "Strength," "Arm")',
          script: 'יָמִים',
          translit: '<strong>Yamin</strong> · days, time, also the right hand or arm',
          description:
            'The word for days carries a sense not just of time passing, but of the stuff of life itself. Job&apos;s days are few—not just in number, but in substance. Life is insubstantial.',
        },
        {
          kind: 'commentary',
          id: 'job-shadow-continueth-not',
          html:
            '"He fleeth also as a shadow, and continueth not"—the image is of human life as a shadow that passes, that has no substance. A shadow follows a body, but when the light changes, the shadow is gone. Human life is similar—passing, insubstantial, unable to endure.',
        },
        {
          kind: 'commentary',
          id: 'job-dost-thou-open',
          html:
            '"And dost thou open thine eyes upon such an one, and bringest me into judgment with thee?"—Job&apos;s bewilderment. Why does God even look upon such a brief, insignificant creature as a human? Why does God hold humans accountable, bring them to judgment? What is the point of judging something so temporary?',
        },
        {
          kind: 'carry',
          html:
            'Job&apos;s meditation on human mortality is not meant to inspire despair, but to raise a question: if humans are so brief, so insignificant, so full of trouble, what does God expect of us? Why hold us to such high standards?',
        },
        {
          kind: 'reflection',
          id: 'job-few-days',
          prompt:
            'Do you feel the brevity and fragility of human life? How does that feeling shape the way you live and the choices you make?',
        },
      ],
    },

    {
      ref: 'Job 14:7–22',
      title: '"If a Man Die, Shall He Live Again?"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            plain(7, 'For there is hope of a tree, if it be cut down, that it will sprout again, and that the tender branch thereof will not cease.'),
            plain(8, 'Though the root thereof wax old in the earth, and the stock thereof die in the ground;'),
            plain(9, 'Yet through the scent of water it will bud, and bring forth boughs like a plant.'),
            plain(10, 'But man dieth, and wasteth away: yea, man giveth up the ghost, and where is he?'),
            plain(11, 'As the waters fail from the sea, and the flood decayeth and drieth up:'),
            plain(12, 'So man lieth down, and riseth not: till the heavens be no more, they shall not awake, nor be raised out of their sleep.'),
            plain(13, 'O that thou wouldest hide me in the grave, that thou wouldest keep me secret, until thy wrath be past, that thou wouldest appoint me a set time, and remember me!'),
            plain(14, 'If a man die, shall he live again? all the days of my appointed time will I wait, till my change come.'),
            plain(15, 'Thou shalt call, and I will answer thee: thou wilt have a desire to the work of thine hands.'),
            plain(16, 'For now thou numberest my steps: but do not thou keep watch over my sin.'),
            plain(17, 'My transgression is sealed up in a bag, and thou sewest up mine iniquity.'),
            plain(18, 'And surely the mountain falling cometh to nought, and the rock is removed out of his place.'),
            plain(19, 'The waters wear the stones: thou washest away the things which grow out of the earth; and thou destroyest the hope of man.'),
            plain(20, 'Thou prevailest for ever against him, and he passeth: thou changest his countenance, and sendest him away.'),
            plain(21, 'His sons come to honour, and he knoweth it not; and they are brought low, but he perceiveth it not of them.'),
            plain(22, 'But his flesh upon him shall have pain, and his soul within him shall mourn.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job-tree-hope',
          html:
            '"For there is hope of a tree, if it be cut down, that it will sprout again"—Job observes something in nature that offers him a metaphor for hope. A tree that is cut down may grow again. Its roots may persist, and from them new growth may emerge. Is it possible that humans might have a similar hope?',
        },
        {
          kind: 'commentary',
          id: 'job-man-dieth',
          html:
            '"But man dieth, and wasteth away: yea, man giveth up the ghost, and where is he?"—yet human death is different. When a human dies, they waste away. They give up the ghost. Where are they? The word "where" carries both geographical and existential weight. Where, in any sense, is a dead person?',
        },
        {
          kind: 'hebrew',
          id: 'job-nishma',
          title: 'Nishma — "Ghost" (Breath, Spirit)',
          script: 'נִשְׁמָה',
          translit: '<strong>Nishma</strong> · breath, spirit, the animating force of life',
          description:
            'When a person dies, they give up their nishma—the breath, the spirit, the vital force that animated them. The question is whether that spirit continues elsewhere, or whether it simply ceases to exist.',
        },
        {
          kind: 'commentary',
          id: 'job-hide-grave',
          html:
            '"O that thou wouldest hide me in the grave, that thou wouldest keep me secret, until thy wrath be past"—Job expresses a longing for the grave. Not as a place of escape into nothingness, but as a place of hiding, a refuge where he might wait for God&apos;s wrath to pass.',
        },
        {
          kind: 'commentary',
          id: 'job-shall-live-again',
          html:
            '"If a man die, shall he live again?"—this is the central question of the chapter. And the fact that Job asks it, followed immediately by "all the days of my appointed time will I wait, till my change come," suggests that Job is answering his own question with hope. If he will wait, it is because he believes something will come to pass.',
        },
        {
          kind: 'commentary',
          id: 'job-change',
          html:
            '"Till my change come"—Job does not specify what this change will be. But he is certain that a change is coming, something that will transform his condition. He does not know what resurrection looks like, but he believes in its possibility.',
        },
        {
          kind: 'commentary',
          id: 'job-call-answer',
          html:
            '"Thou shalt call, and I will answer thee: thou wilt have a desire to the work of thine hands"—Job imagines a future moment when God will call, and he will answer. God will remember Job, the work of His hands. At that moment, the relationship will be restored.',
        },
        {
          kind: 'christ',
          id: 'job-christ-resurrection',
          title: 'Christ Connection — The Firstfruits of Resurrection',
          html:
            'Job asks: "If a man die, shall he live again?" Paul answers: "Christ is risen from the dead, and become the firstfruits of them that slept" (1 Corinthians 15:20). Christ is the proof that resurrection is real, that death is not final, that God&apos;s call to the dead will be answered. Job waits for his change. Christians know that change has already come through Christ, and is coming still for all who believe. Job did not know the name of what he waited for. We do.',
        },
        {
          kind: 'carry',
          html:
            'Job has moved from the depths of despair to a profound hope. He does not have certainty. He does not have proof. But he has faith that something awaits beyond death, that God will call again, that he will be restored. This is not the faith of one who has received clear promises. It is the faith of one who has experienced God&apos;s presence and trusts that presence will continue.',
        },
        {
          kind: 'reflection',
          id: 'job-resurrection-hope',
          prompt:
            'What does it mean to have hope in resurrection when you face loss and death? How does that hope change the way you live?',
        },
      ],
    },
  ],
};
