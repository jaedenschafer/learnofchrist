import { hp, hy, hg, t, verse, type RichChapterContent } from './types';

/**
 * 4 Maccabees 2 — Reason Mastering the Passions
 *
 * Chapter 2 continues the philosophical argument: reason masters specific
 * passions through the law. Examples from Scripture show that sexual desire,
 * anger, greed, malice, envy, and pride can all yield to one trained by God&apos;s
 * law. Even the strongest appetites bow to devout reason.
 */
export const FOURTH_MACCABEES_2: RichChapterContent = {
  bookSlug: '4-maccabees',
  bookName: '4 Maccabees',
  chapter: 2,

  estimatedMinutes: { 5: 7, 10: 10, 15: 15 },
  intros: [
    'Chapter 1 made a daring claim: devout reason can master even the strongest passions. But Chapter 2 tests it. Does reason truly overcome hunger, lust, anger, greed? The writer turns to the law of Moses and to the great figures of Israel—finding proof that yes, it does.',
    'What Joseph did when Potiphar&apos;s wife pursued him, what the law forbids coveting because reason can govern appetite, what even the greatest trials cannot break—these are not abstract philosophy but the fruit of a mind surrendered to God.',
  ],

  sections: [
    /* ─── Reason and Sexual Desire ─────────────────────────────────────────── */
    {
      ref: '4 Maccabees 2:1–6',
      title: 'Reason and Sexual Desire',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(1, t('And I might prove this in many examples; but the finest instance is that of Joseph.')),
            verse(2, t('For the young man, when he was stripped naked, '), hg('overcame the impulse of concupiscence', 'mac4-2-epithymia'), t(', not by age, nor by toil, but by reason.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-2-epithymia',
          html:
            'Joseph, a foreigner in Egypt, enslaved in Potiphar&apos;s house, faces the sexual advance of a powerful woman who could destroy him if he refuses. The law he carries in his heart becomes stronger than the impulse that cries loudest from his body. Reason does not deny the desire—it acknowledges it and chooses something greater.',
        },
        {
          kind: 'greek',
          id: 'mac4-2-epithymia-greek',
          title: 'Epithymia — Sexual Desire',
          script: 'ἐπιθυμία',
          translit: '<strong>epithymia</strong> · passionate desire; longing of the flesh',
          description:
            'Epithymia is not evil—it is what the body naturally wants. The question is whether reason, aligned with God&apos;s law, can direct it or refuse it. Joseph shows that it can.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(3, t('For when his masters&apos; wife desired him, and even the dungeon could not weaken his resolve, he cried out: '), hp('"Reason, help me, reason!"', 'mac4-2-call')),
            verse(4, t('For if lust hath overcome virtue, what hope is there for mortals?')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-2-call',
          html:
            'The apostrophe to reason is not invocation of something separate from Joseph&apos;s soul, but the cry of a man calling his whole self back into alignment. It is like crying out to God: the inner appeal to what is highest in him when what is lowest most urgently claims him.',
        },
        {
          kind: 'christ',
          id: 'mac4-2-joseph',
          title: 'Christ Connection — Tempted in Every Way',
          html:
            'The letter to the Hebrews says of Jesus: "One who has been tempted in every way, just as we are—yet was without sin." Joseph&apos;s resistance to sexual temptation foreshadows the sinless obedience of Christ. But Joseph was merely human, strengthened by law. Christ, in His incarnation, carried divine nature itself into every temptation and overcame through absolute alignment with His Father&apos;s will—and offers that power to all who follow Him.',
        },
        {
          kind: 'carry',
          html:
            'Where does desire cry loudest in your own life? Not a question to shame you, but to awaken you to where reason—your truest self—is most needed. Joseph did not kill the desire by pretending it wasn&apos;t there. He felt it fully and said no. That &quot;no&quot; was not weakness; it was the greatest strength he possessed.',
        },
        {
          kind: 'reflection',
          id: 'mac4-2-joseph-reflect',
          prompt: 'What appetite most threatens your obedience? How would it change if you saw refusing it not as deprivation, but as alignment with your truest self?',
        },
      ],
    },

    /* ─── The Law and Reason ───────────────────────────────────────────────── */
    {
      ref: '4 Maccabees 2:7–14',
      title: 'The Law as Teacher',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(7, t('For the law also teacheth us: '), hy('"Thou shalt not covet."', 'mac4-2-covet')),
            verse(8, t('Why does the law forbid coveting, if not because reason ought to rule even desire before it becomes action?')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-2-covet',
          html:
            'The commandment against coveting is unlike the others. It does not forbid an act—killing, stealing, false testimony. It forbids a feeling, a wanting. God gives this law not to punish the heart, but to teach it: your passions are yours to govern. Reason can do what you thought impossible.',
        },
        {
          kind: 'hebrew',
          id: 'mac4-2-chamad',
          title: 'Chamad — To Desire; To Covet',
          script: 'חָמַד',
          translit: '<strong>chamad</strong> · to desire; to covet; the craving of the heart',
          description:
            'Chamad is not the desire itself, but the settling into it—the moment you stop resisting and begin to let it rule. The law forbids this moment of surrender, calling you instead to let reason keep the watch.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(9, t('Indeed, when the law saith "Thou shalt not covet," it teaches us to master even the feeling before it masters us.')),
            verse(10, t('And the sages teach: if reason can govern even inward desire, how much more can it govern the outward act.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-2-sages',
          html:
            'The writer appeals to what all wise people know: the inner commandment is the hardest, and therefore the most important. If you can master the desire itself, the action will follow. If you cannot master the inner impulse, the law alone will not save you from breaking faith.',
        },
        {
          kind: 'carry',
          html:
            'God gave the law not only to forbid bad actions, but to teach you something about yourself: that you are capable of saying no to what you most want. What you discover in that refusal is that your will is not bound to your appetites—that you have a self deeper than your cravings.',
        },
        {
          kind: 'reflection',
          id: 'mac4-2-law-reflect',
          prompt: 'What does it mean that God forbids not just the act, but the desire itself? Does this feel like grace or burden to you? Why?',
        },
        { kind: 'divider' },
      ],
    },

    /* ─── Reason and Anger ───────────────────────────────────────────────────── */
    {
      ref: '4 Maccabees 2:15–20',
      title: 'Mastering Anger',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(15, t('And if reason masters the lustful passion, how much more can it master anger?')),
            verse(16, t('For anger is the fire of the soul, burning to strike back, to wound, to shame. Yet the law teaches us: '), hg('"Thou shalt not hate thy brother in thine heart."', 'mac4-2-hate')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-2-hate',
          html:
            'The law forbids not just violence, but the internal state from which violence springs. Anger itself—the hot, justified feeling that someone has wronged you—must be brought under reason&apos;s rule. This is harder than physical obedience; this requires mastery of the self.',
        },
        {
          kind: 'greek',
          id: 'mac4-2-orge',
          title: 'Orgē — Anger; Wrath',
          script: 'ὀργή',
          translit: '<strong>orgē</strong> · anger; wrath; the burning impulse to retaliate',
          description:
            'Orgē is not mere irritation. It is the hot, righteous fire that demands vindication. To master it is to let reason cool what naturally burns, not by pretending the wrong didn&apos;t happen, but by refusing to let anger dictate your response.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(17, t('The man who is insulted and does not answer back in kind, who is struck and does not strike again—this man masters anger through reason.')),
            verse(18, t('It seems a small thing, yet it is the greatest victory: to let injustice go unanswered, to refuse to feed the fire that burns in your own chest.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-2-silence',
          html:
            'Silence in the face of injustice looks like weakness until you understand what it costs. To stay silent when anger screams is to choose something greater than vindication—you choose peace with God over peace with your pride.',
        },
        {
          kind: 'christ',
          id: 'mac4-2-anger-christ',
          title: 'Christ Connection — Fruit of the Spirit',
          html:
            'Paul lists the fruit of the Holy Spirit: "love, joy, peace, patience, kindness, goodness, faithfulness, gentleness, self-control." When anger rises in you and you refuse to let it rule, you are not suppressing it—you are yielding to the Spirit&apos;s work. Christ, crucified without cursing those who killed Him, modeled the mastery of anger as forgiveness.',
        },
        {
          kind: 'carry',
          html:
            'When someone wrongs you today, you will feel the heat. The question is: will you feed it or let reason cool it? You cannot control the rising of anger, but you can control what you do next. That choice is where your true freedom lies.',
        },
        {
          kind: 'reflection',
          id: 'mac4-2-anger-reflect',
          prompt: 'What usually triggers your anger? What does reason tell you to do instead? What makes it hard to listen?',
        },
      ],
    },

    /* ─── Reason and Greed ─────────────────────────────────────────────────── */
    {
      ref: '4 Maccabees 2:21–26',
      title: 'Mastering Greed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(21, t('And what of the impulse to gather, to own, to have more? The law forbids theft and covetousness alike.'), {
              kind: 'text',
              text: '',
            }),
            verse(22, t('For greed is the hunger that never fills. The man who masters greed through reason finds that he lacks nothing—not because he has all he wants, but because he wants only what he has.'), {
              kind: 'text',
              text: '',
            }),
          ],
        },
        {
          kind: 'greek',
          id: 'mac4-2-pleonexia',
          title: 'Pleonexia — Greed; Excess Desire',
          script: 'πλεονεξία',
          translit: '<strong>pleonexia</strong> · greed; the insatiable desire to have more',
          description:
            'Pleonexia literally means "having more." It is the passion that no amount of possession can satisfy. Reason masters it by teaching the soul to distinguish between need and want, between enough and excess.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(23, t('When the law forbids the hunger for another&apos;s goods, it does not merely forbid theft. It teaches the heart to be content.')),
            verse(24, t('For a man ruled by greed is enslaved—enslaved to the endless pursuit of what he does not own. But he who masters greed becomes free.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-2-greed-free',
          html:
            'Greed is not an appetite but a kind of spiritual blindness. The greedy man does not see the riches he already possesses; he sees only what he lacks. Reason restores his sight, teaching him gratitude for what is his and indifference to what is not.',
        },
        {
          kind: 'carry',
          html:
            'Look at what you own today—your home, your work, the people in your life, even your health. These are not things you acquired by right; they are gifts. The moment you see them as gifts rather than as achievements, greed loses its power over you. That shift happens when reason—your truest self—remembers what is true.',
        },
        {
          kind: 'reflection',
          id: 'mac4-2-greed-reflect',
          prompt: 'What do you most want to have or own? Why do you want it? What would change if you decided you already had enough?',
        },
      ],
    },

    /* ─── Reason and Malice ────────────────────────────────────────────────── */
    {
      ref: '4 Maccabees 2:27–31',
      title: 'Overcoming Malice',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(27, t('Yet further: there is malice—the desire to harm another, not for gain, but from sheer spite and envy.')),
            verse(28, t('What profit is there in another&apos;s hurt? The law forbids it, and reason condemns it: for it corrupts the soul more than it injures the body of another.')),
          ],
        },
        {
          kind: 'greek',
          id: 'mac4-2-poneria',
          title: 'Poneria — Malice; Wickedness',
          script: 'πονηρία',
          translit: '<strong>poneria</strong> · malice; wickedness; the desire to harm',
          description:
            'Poneria is not mere anger at an enemy; it is the twisted satisfaction of seeing another person suffer. It is malice as a form of pleasure—perhaps the darkest of all passions.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(29, t('The man who rejoices in the suffering of another has become like a sick thing himself, though he may not know it.')),
            verse(30, t('But he who masters malice through reason—he shows love even to those who have wronged him, and in that love, he is healed.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-2-malice-heal',
          html:
            'The writer shows that mastering malice is not primarily about restraint; it is about transformation. The man who stops wanting another&apos;s hurt experiences a kind of healing in his own soul. Reason teaches him that kindness is not weakness but liberation.',
        },
        {
          kind: 'christ',
          id: 'mac4-2-malice-christ',
          title: 'Christ Connection — Love Your Enemies',
          html:
            'Jesus commands: "Love your enemies, bless them that curse you, do good to them that hate you." This is not kindness as sentiment; it is reason aligned with God&apos;s nature. When you refuse malice and choose love toward those who oppose you, you become like your Father in heaven, "who maketh his sun to rise on the evil and on the good."',
        },
        {
          kind: 'carry',
          html:
            'Is there someone you wish ill? Someone whose failure would secretly delight you? That shadow in your own heart is what the law forbids. But reason shows you that letting malice live in you is like drinking poison and expecting the other person to die.',
        },
        {
          kind: 'reflection',
          id: 'mac4-2-malice-reflect',
          prompt: 'What would it take for you to genuinely wish good for someone who has hurt you? Is this possible for you right now, or does it seem like fantasy?',
        },
        { kind: 'divider' },
      ],
    },

    /* ─── Reason and Envy ──────────────────────────────────────────────────── */
    {
      ref: '4 Maccabees 2:32–35',
      title: 'Envy Mastered',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(32, t('And there is envy—the pain of seeing another prosper when you yourself are diminished.')),
            verse(33, t('Envy is a hunger that feeds on itself. The more the other has, the emptier you feel. Yet the law teaches us: do not compare your portion to another&apos;s, for in doing so, you lose peace.')),
          ],
        },
        {
          kind: 'greek',
          id: 'mac4-2-phthonos',
          title: 'Phthonos — Envy',
          script: 'φθόνος',
          translit: '<strong>phthonos</strong> · envy; painful resentment at another&apos;s good',
          description:
            'Phthonos is not mere wish for what another has; it is the pain caused by their having it. The envious man is miserable not because he lacks something, but because someone else possesses it. Reason reveals this as madness.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(34, t('For reason teaches us that your gift is your own, and another&apos;s gift is theirs. To envy is to insult the Creator, as if to say: why did you not give me what you gave them?')),
            verse(35, t('But he who masters envy through reason finds gratitude for his own portion, and he rejoices in the goodness that comes to others. This is the freedom of the heart.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-2-envy-gift',
          html:
            'Envy is the only sin that brings no pleasure—not even the twisted satisfaction of malice. It is pure pain. Reason offers an escape: recognize that each person&apos;s gift is theirs by God&apos;s calling, and your gift is yours. Comparison becomes irrelevant.',
        },
        {
          kind: 'carry',
          html:
            'Think of someone whose life you secretly wish was yours instead. Maybe their talent, their beauty, their success, their relationships. Envy whispers that they stole what should have been yours. Reason tells you that if God gave it to them, then by God&apos;s own choice, it belongs to them—and what He has given you, He has chosen for you. That realization does not come at once, but it comes.',
        },
        {
          kind: 'reflection',
          id: 'mac4-2-envy-reflect',
          prompt: 'Whose life do you wish was yours? What does your envy tell you about what you believe you deserve? Is that belief true?',
        },
      ],
    },

    /* ─── Reason and Pride ────────────────────────────────────────────────── */
    {
      ref: '4 Maccabees 2:36–42',
      title: 'The Law Trains the Will',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(36, t('And what of pride—the conviction that you alone are sufficient, that you bow to no law and no God?')),
            verse(37, t('The law teaches us to fear God, to humble ourselves before His word. This is the beginning of wisdom: to know that we are not the authors of our own lives.')),
          ],
        },
        {
          kind: 'greek',
          id: 'mac4-2-paideia',
          title: 'Paideia — Training; Education; Discipline',
          script: 'παιδεία',
          translit: '<strong>paideia</strong> · training; education; the formation of character',
          description:
            'Paideia is not mere instruction but the transformation of the whole person through discipline and love. God&apos;s law is paideia—it trains you the way a father trains a child, teaching you to become who you are made to be.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(38, t('The law itself is the training ground where reason is made strong. Every time you obey when you could refuse, every time you deny yourself what you want, every time you forgive when you could rage—you are being trained by God.')),
            verse(39, t('This training is not punishment. It is the way the spirit grows into its fullest shape, the way you become truly free.')),
          ],
        },
        {
          kind: 'commentary',
          id: 'mac4-2-training',
          html:
            'The chapter culminates in the realization that all these struggles—against lust, anger, greed, malice, envy, pride—are not burdens but the substance of spiritual maturity. Each act of obedience is a rep in the gym of the soul, building strength you will need for the real trials ahead.',
        },
        {
          kind: 'christ',
          id: 'mac4-2-training-christ',
          title: 'Christ Connection — Schoolmaster to Christ',
          html:
            'Paul writes: "The law was our schoolmaster to bring us unto Christ." The law was never meant to be permanent; it was meant to teach us to trust God, to show us our weakness, and to prepare us for the grace that comes through Christ. When the Spirit fills you, the external law becomes internal—the law written on your heart, not merely on tablets. And you find that what once was burden becomes joy.',
        },
        {
          kind: 'carry',
          html:
            'Every struggle you face is paideia—God&apos;s training. The moment you say no to something you want, you are not weakening yourself; you are strengthening the part of you that can obey. The law is not your prison; it is your gymnasium. And every day you train here is a day you grow closer to becoming who you were made to be.',
        },
        {
          kind: 'reflection',
          id: 'mac4-2-training-reflect',
          prompt: 'What is God currently training you in? What passion or impulse is He teaching you to govern? What would it look like to see this not as punishment, but as love?',
        },
        {
          kind: 'artwork',
          matchTitle: /joseph/i,
          matchArtist: /potiphar/i,
          caption: '4 Maccabees 2 · Joseph&apos;s Refusal',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'Devout reason masters all the passions: sexual desire, anger, greed, malice, envy, and pride. The law of God is not burden but training, teaching the human spirit to govern itself and to become free.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '4 Maccabees 2 · Study Guide',
  },
};
