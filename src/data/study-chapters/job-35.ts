import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Job 35 — Your Righteousness Profits God Nothing
 *
 * Elihu continues his argument with a crucial point: human righteousness or wickedness
 * does not affect God. God is unaffected by human action. Therefore, suffering cannot
 * be payment for sin in a transactional sense. God does not need Job&apos;s goodness, nor
 * is He harmed by human evil. This radically reframes the problem of suffering.
 */
export const JOB_35: RichChapterContent = {
  bookSlug: 'job',
  bookName: 'Job',
  chapter: 35,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 5 },
  intros: [
    'Elihu makes a seemingly radical claim: your righteousness profits God nothing. God is not in debt to you for your goodness. Nor is God harmed by your wickedness. This means that suffering is not a debt-payment system—you do not suffer because you owe God something. Rather, suffering serves other purposes: to teach, to refine, to call you back to God.',
  ],

  bottomShare: {
    quote:
      '"If thou be righteous, what givest thou him? or what receiveth he of thine hand?" Elihu reminds us that God does not depend on us. Our righteousness is our own gift to ourselves.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Job 35 · Study Guide',
  },

  resources: [
    {
      id: 'british-museum-theodicy',
      kind: 'museum',
      source: 'British Museum',
      label: 'Babylonian Theodicy',
      url: 'https://www.britishmuseum.org/',
      description: 'Ancient Akkadian dialogue on divine justice, suffering, and retribution.',
    },
    {
      id: 'sefaria-job-35',
      kind: 'study',
      source: 'Sefaria',
      label: 'Job 35 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Job.35',
      description: 'The Hebrew text of Job 35 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },
    {
      id: 'bibleodyssey-job-overview-35',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Job — SBL Overview',
      url: 'https://www.bibleodyssey.org/articles/job/',
      description: 'Open-access SBL essay on the historical and literary setting of Job.',
    },

  ],

  sections: [
    /* ─── Job 35:1–8 — God Is Not Affected by Human Acts ───────────────── */
    {
      ref: 'Job 35:1–8',
      title: 'Your Goodness Does Not Reach God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 35,
          lines: [
            plain(1, 'Elihu spake moreover, and said,'),
            plain(2, 'Thinkest thou this to be right, that thou saidst, My righteousness is more than God&apos;s?'),
            plain(3, 'For thou saidst, What advantage will it be unto thee? and, What profit shall I have, if I be cleansed from my sin?'),
            plain(4, 'I will answer thee, and thy companions with thee.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job35-mid-dispute-profit',
          html:
            'Calamity strips everything; faith asks: can you praise when silence is easier? [res:british-museum-theodicy]',
        },
        {
          kind: 'scripture',
          chapter: 35,
          lines: [
            plain(5, 'Look unto the heavens, and see; and behold the clouds which are higher than thou.'),
            plain(6, 'If thou sinnest, what doest thou against him? or if thy transgressions be multiplied, what doest thou unto him?'),
            plain(7, 'If thou be righteous, what givest thou him? or what receiveth he of thine hand?'),
            plain(8, 'Thy wickedness may hurt a man as thou art; and thy righteousness may profit the son of man.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job35-god-unaffected',
          html:
            'Elihu states the central truth: God is not affected by human sin or righteousness. "If thou sinnest, what doest thou against him?" Your wickedness cannot harm God. "If thou be righteous, what givest thou him?" Your goodness does not enrich God. God is in neither position of debt nor of deprivation relative to you[res:sefaria-job-35][res:bibleodyssey-job-overview-35].',
        },
        {
          kind: 'commentary',
          id: 'job35-righteousness-profits',
          html:
            '"Thy righteousness may profit the son of man"—it is your fellow creatures who benefit from your goodness, not God. And likewise, it is your fellow creatures who are harmed by your wickedness. Sin is not a violation of God&apos;s rights or interests. It is a violation of the rights and interests of others, and ultimately of yourself.',
        },
        {
          kind: 'hebrew',
          id: 'job35-yitran',
          title: 'Yitran — Profit or Benefit',
          script: 'יִתְרוֹן',
          translit: '<strong>Yitran</strong> · profit; advantage; gain; the benefit that comes from labor',
          description:
            'To say that righteousness gives yitran to God would be to say that God labors and needs the fruit of labor, like humans do. But God needs nothing. God is complete in Himself. This does not mean God is indifferent to human action, but rather that God&apos;s justice operates on a different plane than human obligation or debt.',
        },
        {
          kind: 'carry',
          html:
            'This reframe is liberating: you do not need to suffer to pay a debt to God, because you cannot pay or fail to pay anything that God needs. Your suffering is not transaction. It is something else—instruction, refinement, the path toward deeper relationship with God.',
        },
        {
          kind: 'reflection',
          id: 'job35-debt',
          prompt:
            'Do you approach God as if you owe Him something? How would your faith change if you truly believed God needed nothing from you?',
        },
      ],
    },

    /* ─── Job 35:9–16 — Why Does God Not Answer? ──────────────────────── */
    {
      ref: 'Job 35:9–16',
      title: 'God Does Hear, But...',
      blocks: [
        {
          kind: 'scripture',
          chapter: 35,
          lines: [
            plain(9, 'By reason of the multitude of oppressions they make the oppressed to cry: they cry out by reason of the arm of the mighty.'),
            plain(10, 'But none saith, Where is God my maker, who giveth songs in the night;'),
            plain(11, 'Who teacheth us more than the beasts of the earth, and maketh us wiser than the fowls of heaven?'),
            plain(12, 'There they cry, but none giveth answer, because of the pride of evil men.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job35b-mid-cry-arise',
          html:
            'Calamity strips everything; faith asks: can you praise when silence is easier?',
        },
        {
          kind: 'scripture',
          chapter: 35,
          lines: [
            plain(13, 'Surely God will not hear vanity, neither will the Almighty regard it.'),
            plain(14, 'Although thou sayest thou shalt not see him, yet judgment is before him; therefore trust thou in him.'),
            plain(15, 'But now, because it is not so, he hath visited thee in his anger; yet he knoweth it not in great extremity:'),
            plain(16, 'Therefore doth Job open his mouth in vain; he multiplieth words without knowledge.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job35-cry-not-answered',
          html:
            'Elihu notes that there are many who cry out in oppression and receive no answer. But he suggests the reason: they do not call upon God as their maker. They cry out against their oppressors, but they do not seek God. "None giveth answer, because of the pride of evil men."—the pride, perhaps, of the oppressors, or the false pride of those who cry out without humility.',
        },
        {
          kind: 'commentary',
          id: 'job35-songs-in-night',
          html:
            '"Who giveth songs in the night"—God is present in suffering, giving songs in the darkness. But this is available only to those who recognize God as their maker and approach with reverence rather than demand. Job, in Elihu&apos;s view, has come with defiance rather than reverence.',
        },
        {
          kind: 'hebrew',
          id: 'job35-rinah',
          title: 'Rinah — Song or Cry',
          script: 'רִנָּה',
          translit: '<strong>Rinah</strong> · song; cry; the outpouring of the heart in joy or sorrow',
          description:
            'God gives songs in the night—songs of comfort, of sustenance, of faith in darkness. But these songs are given to those who seek God, who call God maker, who approach with openness rather than accusation.',
        },
        {
          kind: 'carry',
          html:
            'Elihu suggests that the silence Job experiences may not be God&apos;s refusal to hear, but rather the consequence of approaching God with pride rather than reverence. If Job would seek God as maker, if he would humble himself, perhaps the answer would come.',
        },
        {
          kind: 'reflection',
          id: 'job35-songs-night',
          prompt:
            'In your darkest nights, have you found God&apos;s songs? What might be blocking you from hearing them?',
        },
      ],
    },

    /* ─── Job 35:14–16 — The Problem With Job&apos;s Words ──────────────────── */
    {
      ref: 'Job 35:14–16',
      title: 'Empty Words Without Understanding',
      blocks: [
        {
          kind: 'scripture',
          chapter: 35,
          lines: [
            plain(14, 'Although thou sayest thou shalt not see him, yet judgment is before him; therefore trust thou in him.'),
            plain(15, 'But now, because it is not so, he hath visited thee in his anger; yet he knoweth it not in great extremity:'),
            plain(16, 'Therefore doth Job open his mouth in vain; he multiplieth words without knowledge.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'job35-vanity',
          html:
            'Elihu&apos;s final point: Job opens his mouth in vain, multiplying words without knowledge. This is the opposite of the earlier image of God giving "songs in the night." Job&apos;s words are empty because they are not rooted in reverence or understanding. He argues without grasping the deeper truth that Elihu has been trying to teach.',
        },
        {
          kind: 'commentary',
          id: 'job35-trust',
          html:
            '"Although thou sayest thou shalt not see him, yet judgment is before him; therefore trust thou in him." Even if you cannot see God, even if you cannot understand God&apos;s ways, judgment is before Him. You should trust Him. This is faith without proof, hope without explanation.',
        },
        {
          kind: 'christ',
          id: 'job35-christ-grace',
          title: 'Christ Connection — Grace Not Earned',
          html:
            'Elihu teaches that God&apos;s favor is not earned through human effort or righteousness. Paul expresses this in Ephesians 2:8–9: "By grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast." God&apos;s grace is not payment for human goodness. It is a free gift. This frees us from the transactional relationship with God that the three friends—and even Job—assume. We do not earn God&apos;s favor. We receive it as grace.',
        },
        {
          kind: 'carry',
          html:
            'Elihu&apos;s message, despite its harshness toward Job, contains a profound truth: you cannot manipulate God through your righteousness, and you need not fear that your wickedness has put you beyond redemption. God operates on the plane of grace, not transaction. Release your grasp on the idea that you can earn or lose God&apos;s favor, and trust Him.',
        },
        {
          kind: 'reflection',
          id: 'job35-grace',
          prompt:
            'What would change in your faith if you truly believed you could not earn God&apos;s favor through your goodness, and could not lose it through your weakness?',
        },
      ],
    },
  ],
};
