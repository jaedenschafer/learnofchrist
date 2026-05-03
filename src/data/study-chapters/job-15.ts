import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Job 15 — Eliphaz's Second Speech: Condemnation Hardens
 *
 * Eliphaz returns, and his second speech is harder than his first. He accuses Job
 * directly: "Thou castest off fear, and restrainest prayer before God." Job has
 * challenged the wisdom of the ancients, has questioned God&apos;s justice, and in doing
 * so, has revealed himself to be not righteous but guilty. Eliphaz then describes
 * the fate of the wicked: they "travail in pain all their days." This is Eliphaz&apos;s
 * attempt to frighten Job into submission. The message is clear: you are acting like
 * the wicked. This is what happens to the wicked. Stop this behavior, or face the
 * consequences. Eliphaz offers no comfort now. Only condemnation.
 */
export const JOB_15: RichChapterContent = {
  bookSlug: 'job',
  bookName: 'Job',
  chapter: 15,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 6 },
  intros: [
    'Eliphaz has been silent while Job made his long plea and his accusation against his friends. Now he speaks again, and his tone is fundamentally changed. Where his first speech was concerned and grandfatherly, this second speech is harsh and contemptuous. Job has gone too far. By refusing to accept his friends&apos; counsel, by insisting on his own righteousness, by demanding to speak to God directly, Job has revealed something crucial: he is not truly righteous. He is acting like a man guilty of grave sin.',
    'Eliphaz accuses Job: "Thou castest off fear, and restrainest prayer before God." By refusing to submit, by maintaining his own way, Job is "casting off fear"—showing disrespect for God. And he is restraining prayer—refusing to engage in the kind of supplication that would restore him. Eliphaz then delivers warnings about the fate of the wicked, descriptions of their torment. The implicit message is: this is what is coming to you if you do not change your ways. Eliphaz has abandoned the possibility of sympathy. He now sees Job as an example of the wicked, and he is trying to warn him—or frighten him—into submission.',
  ],

  bottomShare: {
    quote:
      '"The wicked man travaileth with pain all his days." Eliphaz hardens his stance, using fear and condemnation to try to force Job into submission.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Job 15 · Study Guide',
  },

  sections: [
    {
      ref: 'Job 15:1–16',
      title: 'Accusation and Condemnation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(1, 'Then answered Eliphaz the Temanite, and said,'),
            plain(2, 'Should a wise man utter vain knowledge, and fill his belly with the east wind?'),
            plain(3, 'Should he reason with unprofitable talk? or with speeches wherewith he can do no good?'),
            plain(4, 'Yea, thou castest off fear, and restrainest prayer before God.'),
            plain(5, 'For thy mouth uttereth thine iniquity, and thou choosest the tongue of the crafty.'),
            plain(6, 'Thine own mouth condemneth thee, and not I: yea, thine own lips testify against thee.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job15-split-1',
          html:
            'Eliphaz&apos;s tone hardens. He moves from concern to contempt. Job&apos;s words are vain, unprofitable, meaningless. Job "casts off fear" and "restrains prayer"—his refusal to submit looks to Eliphaz like irreverence. For Eliphaz, Job&apos;s own mouth is his judge.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(7, 'Art thou the first man that was born? or wast thou made before the hills?'),
            plain(8, 'Hast thou heard the secret of God? and dost thou restrain wisdom to thyself?'),
            plain(9, 'What knowest thou, that we know not? what understandest thou, which is not in us?'),
            plain(10, 'With us are both the grayheaded and very aged men, much elder than thy father.'),
            plain(11, 'Are the consolations of God small with thee? is there any secret thing with thee?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job15-split-2',
          html:
            'Eliphaz ridicules Job&apos;s presumption. Were you the first human? Have you heard God&apos;s secret counsel? The aged men among us—much older than your father—they possess the wisdom you lack. Eliphaz appeals to tradition, to age, to collective authority against Job&apos;s lonely claim of righteousness.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(12, 'Why doth thine heart carry thee away? and what do thy eyes wink at,'),
            plain(13, 'That thou turnest thy spirit against God, and lettest such words go out of thy mouth?'),
            plain(14, 'What is man, that he should be clean? and he which is born of a woman, that he should be righteous?'),
            plain(15, 'Behold, he putteth no trust in his saints; yea, the heavens are not clean in his sight.'),
            plain(16, 'How much more abominable and filthy is man, which drinketh iniquity like water?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'eliphaz-vain-knowledge',
          html:
            '"Should a wise man utter vain knowledge?"—Eliphaz questions whether Job is even wise. To speak as Job has spoken is to speak "vain knowledge"—empty, useless, false understanding. Eliphaz is attacking the very foundation of Job&apos;s credibility.',
        },
        {
          kind: 'commentary',
          id: 'eliphaz-fear-prayer',
          html:
            '"Thou castest off fear, and restrainest prayer before God"—Eliphaz accuses Job of showing disrespect for God and of refusing to pray. For Eliphaz, Job&apos;s honesty is impiety. Job&apos;s refusal to submit is a lack of fear. Job&apos;s unwillingness to confess guilt is a failure to pray rightly.',
        },
        {
          kind: 'hebrew',
          id: 'eliphaz-siah',
          title: 'Siah — "Thought" (Also "Complaint")',
          script: 'שִׂיחָה',
          translit: '<strong>Siah</strong> · thought, meditation, complaint, spoken thoughts',
          description:
            'Job&apos;s words are his own thoughts made audible. For Eliphaz, those spoken thoughts reveal the reality of Job&apos;s guilt. His own mouth condemns him.',
        },
        {
          kind: 'commentary',
          id: 'eliphaz-first-man',
          html:
            '"Art thou the first man that was born? or wast thou made before the hills?"—Eliphaz is mocking Job&apos;s presumption. Who does Job think he is? Does he imagine himself the first human, or the creator of the earth? His presumption in challenging the wisdom of the ancients is ridiculous.',
        },
        {
          kind: 'commentary',
          id: 'eliphaz-grayheaded',
          html:
            '"With us are both the grayheaded and very aged men, much elder than thy father"—Eliphaz appeals again to the authority of age and tradition. The friends are older and wiser. They have seen more. Job should defer to them.',
        },
        {
          kind: 'carry',
          html:
            'Eliphaz has moved from the paternal concern of his first speech to outright contempt. Job&apos;s honesty, his refusal to submit, his insistence on his own righteousness—all of this Eliphaz interprets as pride and guilt. Eliphaz no longer sees Job as a suffering brother in need of help. He sees him as a cautionary tale of what happens when someone resists God.',
        },
        {
          kind: 'reflection',
          id: 'eliphaz-condemnation',
          prompt:
            'When someone refuses to accept your advice, do you sometimes move from concern to condemnation? What does that transition reveal about your own faith?',
        },
      ],
    },

    {
      ref: 'Job 15:17–35',
      title: 'The Fate of the Wicked',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(17, 'I will shew thee, hear me; and that which I have seen I will declare;'),
            plain(18, 'Which wise men have told from their fathers, and have not hid it:'),
            plain(19, 'Unto whom alone the earth was given, and no stranger passed among them.'),
            plain(20, 'The wicked man travaileth with pain all his days, and the number of years is hidden to the tyrant.'),
            plain(21, 'A dreadful sound is in his ears: in prosperity the destroyer shall come upon him.'),
            plain(22, 'He believeth not that he shall return out of darkness, and he is waited for of the sword.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job15-split-3',
          html:
            'Eliphaz claims ancient wisdom—knowledge passed down from the fathers. The wicked man lives in constant pain and dread. Even in prosperity, he knows destruction comes. He has no hope of escape. The portrait is designed to frighten Job into submission.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(23, 'He wandereth abroad for bread, saying, Where is it? he knoweth that the day of darkness is ready at his hand.'),
            plain(24, 'Trouble and anguish shall make him afraid; they shall prevail against him, as a king ready to the battle.'),
            plain(25, 'For he stretcheth out his hand against God, and strengtheneth himself against the Almighty;'),
            plain(26, 'He runneth upon him, even on his neck, upon the thick bosses of his bucklers:'),
            plain(27, 'Because he covereth his face with his fatness, and maketh collops of fat upon his flanks;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job15-split-4',
          html:
            'The wicked man actively rebels—stretching out his hand against God, strengthening himself against the Almighty. He is not merely sinful; he is defiant. And this defiance brings him into direct conflict with God&apos;s power. He cannot win.',
        },
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(28, 'And he dwelleth in desolate cities, and in houses which no man inhabiteth, which are ready to become heaps.'),
            plain(29, 'He shall not be rich, neither shall his substance continue: neither shall he prolong the perfection thereof upon the earth.'),
            plain(30, 'He shall not depart out of darkness; the flame shall dry up his branches, and by the breath of his mouth shall he be taken away.'),
            plain(31, 'Let him not trust in vanity: for vanity shall be his recompence.'),
            plain(32, 'It shall be accomplished before his time, and his branch shall not be green.'),
            plain(33, 'He shall shake off his unripe grape as the vine, and shall cast off his flower as the olive.'),
            plain(34, 'For the congregation of hypocrites shall be desolate, and fire shall consume the tabernacles of bribery.'),
            plain(35, 'They conceive mischief, and bring forth vanity, and their belly prepareth deceit.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'eliphaz-wise-men-told',
          html:
            '"Which wise men have told from their fathers, and have not hid it"—Eliphaz is sharing ancient wisdom, knowledge passed down through generations. He is describing not his own observation, but what the wise have always known about the wicked.',
        },
        {
          kind: 'commentary',
          id: 'eliphaz-wicked-travail',
          html:
            '"The wicked man travaileth with pain all his days"—this is Eliphaz&apos;s portrait of the wicked. Their entire life is pain. Their years are hidden, uncertain. Dread sounds are always in their ears. Even in times of prosperity, they know destruction is coming.',
        },
        {
          kind: 'commentary',
          id: 'eliphaz-darkness-sword',
          html:
            '"He believeth not that he shall return out of darkness, and he is waited for of the sword"—the wicked live in despair. They do not believe in restoration. They wait for the sword—for violence, for judgment, for death.',
        },
        {
          kind: 'hebrew',
          id: 'eliphaz-rasha',
          title: 'Rasha — "Wicked" (Lawless, Guilty)',
          script: 'רָשָׁע',
          translit: '<strong>Rasha</strong> · wicked, lawless, guilty, one who acts against justice',
          description:
            'The wicked man in Eliphaz&apos;s description is someone who acts against the righteous order. He stretches out his hand against God, strengthens himself against the Almighty. He is not merely sinful. He is rebellious.',
        },
        {
          kind: 'commentary',
          id: 'eliphaz-stretch-hand',
          html:
            '"He stretcheth out his hand against God, and strengtheneth himself against the Almighty"—the wicked do not merely sin passively. They actively rebel against God. They fight against the divine order. And this rebellion is what brings their destruction.',
        },
        {
          kind: 'commentary',
          id: 'eliphaz-desolate-cities',
          html:
            '"He dwelleth in desolate cities, and in houses which no man inhabiteth"—the wicked end up isolated, living in places abandoned by the righteous. Their rebellion leaves them alone.',
        },
        {
          kind: 'christ',
          id: 'eliphaz-christ-condemnation',
          title: 'Christ Connection — No Condemnation in Christ',
          html:
            'Eliphaz sees Job as wicked and is condemning him. But Paul writes: "There is therefore now no condemnation to them which are in Christ Jesus" (Romans 8:1). Christ does not come to condemn. He comes to heal, to restore, to offer grace to those who recognize their need. Where Eliphaz offers only condemnation and fear, Christ offers forgiveness and hope. The fear Eliphaz uses to try to control Job—the portrait of the wicked suffering eternally—is exactly the kind of fear that Christ came to overcome.',
        },
        {
          kind: 'carry',
          html:
            'Eliphaz&apos;s description of the wicked is meant as a warning to Job. It is meant to frighten him into submission. But in describing the wicked in such detail—their despair, their isolation, their inevitable doom—Eliphaz reveals the danger of his own theology. It is a theology of fear, not love. Of condemnation, not grace.',
        },
        {
          kind: 'reflection',
          id: 'eliphaz-fear-theology',
          prompt:
            'Have you ever been motivated by fear—fear of punishment, fear of being condemned as wicked—rather than by love? How did that affect your faith?',
        },
      ],
    },
  ],
};
