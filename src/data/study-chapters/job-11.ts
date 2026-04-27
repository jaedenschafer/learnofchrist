import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Job 11 — Zophar Speaks: The Harshness of Absolute Certainty
 *
 * Zophar is the third and harshest of Job's friends. While Bildad appealed to
 * convention and Job protested his confusion, Zophar offers only rebuke. "Should
 * thy lies make men hold their peace?" he begins—accusing Job directly of lying,
 * of speaking falsehoods about God. Zophar assumes that he understands the mind
 * of God, that he can comprehend the divine will. He chastises Job for claiming
 * innocence, insists that God is withholding judgment, and promises that if Job
 * will repent, restoration will come. Zophar speaks with the certainty of one who
 * has never doubted, never suffered, never encountered the dark side of faith.
 */
export const JOB_11: RichChapterContent = {
  bookSlug: 'job',
  bookName: 'Job',
  chapter: 11,

  intros: [
    'Job has finished speaking, and now Zophar rises to respond. Of the three friends, Zophar is perhaps the most severe. Where Eliphaz was grandfatherly and Bildad conventional, Zophar is harsh. He begins with an accusation: "Should thy lies make men hold their peace?" He is not asking this as a question. He is asserting that Job has been lying, that Job has been deceiving both his friends and himself.',
    'Zophar then claims access to truth that Job lacks. "Canst thou by searching find out God?" he asks—implying that Job cannot, but that Zophar can, or that he understands what Job does not. Zophar speaks as a man utterly certain of his theology, utterly certain that he knows the mind of God. And his certainty is itself a form of cruelty. He leaves no room for mystery, no room for the possibility that he might be wrong, no room for the genuine wrestling with faith that Job is engaged in. He offers Job only condemnation and a demand for repentance.',
  ],

  bottomShare: {
    quote:
      '"Canst thou by searching find out God?" Zophar claims to understand God&apos;s ways completely, and insists Job must repent and find restoration through absolute obedience.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Job 11 · Study Guide',
  },

  sections: [
    {
      ref: 'Job 11:1–6',
      title: '"Should Thy Lies Make Men Hold Their Peace?"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(1, 'Then answered Zophar the Naamathite, and said,'),
            plain(2, 'Should not the multitude of words be answered? and should a man full of talk be justified?'),
            plain(3, 'Should thy lies make men hold their peace? and when thou mockest, shall no man make thee ashamed?'),
            plain(4, 'For thou hast said, My doctrine is pure, and I am clean in thine eyes.'),
            plain(5, 'But oh that God would speak, and open his lips against thee;'),
            plain(6, 'And that he would shew thee the secrets of wisdom, that they are double to that which is! Know therefore that God exacteth of thee less than thine iniquity deserveth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'zophar-lies',
          html:
            '"Should thy lies make men hold their peace?"—Zophar opens with a direct accusation of falsehood. He does not debate with Job. He does not engage with Job&apos;s arguments. He simply asserts that Job has been lying, that Job&apos;s words are nothing but empty talk.',
        },
        {
          kind: 'commentary',
          id: 'zophar-mockest',
          html:
            '"When thou mockest, shall no man make thee ashamed?"—Zophar sees Job&apos;s honest lament as mockery. By questioning God, by expressing anguish, Job is, in Zophar&apos;s mind, mocking God. And Zophar believes it is time for someone to bring Job shame, to silence him.',
        },
        {
          kind: 'hebrew',
          id: 'zophar-kazav',
          title: 'Kazav — "Lie"',
          script: 'כָּזַב',
          translit: '<strong>Kazav</strong> · to lie, to speak falsehood, to act treacherously',
          description:
            'Zophar uses the harshest word for Job&apos;s speech. It is not mere error or misunderstanding. It is deliberate falsehood, treachery in speech. Zophar is not attempting to understand Job. He is condemning him.',
        },
        {
          kind: 'commentary',
          id: 'zophar-pure-doctrine',
          html:
            'Zophar accuses Job of claiming to be pure, of claiming to be "clean in thine eyes"—before God. And Zophar&apos;s response is to wish that God would speak directly against Job, to silence him, to prove him wrong.',
        },
        {
          kind: 'carry',
          html:
            'Zophar&apos;s cruelty lies in his certainty. He does not offer Job the possibility of innocence. He does not allow that Job might be genuinely confused or suffering unjustly. Zophar knows—absolutely, without doubt—that Job must deserve his suffering, and that Job is lying when he claims otherwise.',
        },
        {
          kind: 'reflection',
          id: 'zophar-certainty',
          prompt:
            'Have you encountered someone who was absolutely certain they understood your suffering better than you did? How did it feel to be told you were lying about your own experience?',
        },
      ],
    },

    {
      ref: 'Job 11:7–20',
      title: '"Canst Thou by Searching Find Out God?"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(7, 'Canst thou by searching find out God? canst thou find out the Almighty unto perfection?'),
            plain(8, 'It is as high as heaven; what canst thou do? deeper than hell; what canst thou know?'),
            plain(9, 'The measure thereof is longer than the earth, and broader than the sea.'),
            plain(10, 'If he cut off, and shut up, or gather together, then who can hinder him?'),
            plain(11, 'For he knoweth vain men: he seeth wickedness also; will he not then consider it?'),
            plain(12, 'For vain man would be wise, though man be born like a wild ass&apos;s colt.'),
            plain(13, 'If thou prepare thine heart, and stretch out thine hands toward him;'),
            plain(14, 'If iniquity be in thy hand, put it far away, and let not wickedness dwell in thy tabernacles;'),
            plain(15, 'For then shalt thou lift up thy face without spot; and thou shalt be stedfast, and shalt not fear:'),
            plain(16, 'Because thou shalt forget thy misery, and remember it as waters that pass away:'),
            plain(17, 'And thine age shall be clearer than the noonday; thou shalt shine forth, thou shalt be as the morning.'),
            plain(18, 'And thou shalt be secure, because there is hope; yea, thou shalt dig about thee, and thou shalt take thy rest in safety.'),
            plain(19, 'Also thou shalt lie down, and none shall make thee afraid; yea, many shall make suit unto thee.'),
            plain(20, 'But the eyes of the wicked shall fail, and they shall not escape, and their hope shall be as the giving up of the ghost.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'zophar-searching',
          html:
            '"Canst thou by searching find out God?"—Zophar begins with a genuine truth: God is incomprehensible to the human mind. God is higher than heaven, deeper than hell. But Zophar&apos;s point is not humble. It is proud. He seems to suggest that while Job cannot understand God, Zophar can—or at least that Zophar understands enough to judge Job.',
        },
        {
          kind: 'commentary',
          id: 'zophar-hinder',
          html:
            '"If he cut off, and shut up, or gather together, then who can hinder him?"—Zophar affirms God&apos;s absolute power. God is not bound by any law, any custom, any principle of justice that humans can appeal to. God is pure will, absolute authority.',
        },
        {
          kind: 'hebrew',
          id: 'zophar-reik',
          title: 'Reik — "Vain" (Empty, Worthless)',
          script: 'רֵיק',
          translit: '<strong>Reik</strong> · vain, empty, worthless, insubstantial',
          description:
            'Zophar calls humans "vain men"—empty, worthless creatures. A human being is born, he says, "like a wild ass&apos;s colt"—untamed, crude, without wisdom or worth. This is Zophar&apos;s assessment of human nature itself.',
        },
        {
          kind: 'commentary',
          id: 'zophar-prepare-heart',
          html:
            '"If thou prepare thine heart, and stretch out thine hands toward him"—Zophar&apos;s solution is absolute: Job must cleanse his heart, remove all iniquity, and stretch out his hands in supplication. If he does this, then—and only then—restoration will come.',
        },
        {
          kind: 'commentary',
          id: 'zophar-forget-misery',
          html:
            '"Thou shalt forget thy misery, and remember it as waters that pass away"—Zophar promises that if Job repents, his suffering will be erased from memory, will seem like nothing, like water that has flowed away. The pain will be gone. He will be restored. But this is a false promise. Trauma does not disappear through repentance. Grief does not vanish through submission.',
        },
        {
          kind: 'carry',
          html:
            'Zophar&apos;s entire speech is built on a false premise: that if Job will only submit, only repent completely, only cleanse himself of any iniquity, then everything will be restored and his suffering will be erased. But Zophar does not know what Job knows: that sometimes suffering cannot be undone through any amount of repentance. Sometimes loss is permanent.',
        },
        {
          kind: 'reflection',
          id: 'zophar-false-promise',
          prompt:
            'Have you ever been offered restoration on the condition of perfect submission or perfect repentance? What does that offer assume about pain and loss?',
        },
      ],
    },
  ],
};
