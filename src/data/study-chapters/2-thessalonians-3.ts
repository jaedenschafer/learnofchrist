import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Thessalonians 3 — Work Ethic; Disobedience and Discipline
 *
 * "For even when we were with you, this we commanded you, that if any would
 * not work, neither should he eat." Paul addresses practical matters. Some
 * believers have become idle, perhaps in expectation of the imminent return of
 * Christ. Paul corrects them sternly: work is a mandate, not optional. Those
 * who will not work should not eat. Yet Paul also calls for mercy toward those
 * who are genuinely struggling.
 */
export const SECOND_THESSALONIANS_3: RichChapterContent = {
  bookSlug: '2-thessalonians',
  bookName: '2 Thessalonians',
  chapter: 3,

  intros: [
    'The second letter to the Thessalonians closes with Paul\'s final exhortation. He asks for their prayers, reassures them of God\'s faithfulness, and then addresses the problem of idleness in the church. Some have stopped working, either from the belief that Christ\'s return is imminent or from mere sloth.',
    'Paul\'s response is clear: work is not beneath believers. It is a command. Work supports life, provides dignity, and enables generosity. Those who will not work should not eat. Yet this is not cruelty; it is correction. The goal is that the idle would return to labor and become productive members of the community.',
  ],

  bottomShare: {
    label: 'Share 2 Thessalonians 3',
    quote:
      'If any would not work, neither should he eat. Withdraw yourselves from every brother that walketh disorderly. The Lord be with you all. Grace be with you all.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Thessalonians 3 · Study Guide',
  },

  sections: [
    {
      ref: '2 Thessalonians 3:1–15',
      title: 'Prayer; Work Ethic; Discipline and Mercy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 6,
              spans: [
                t('Now we command you, brethren, in the name of our Lord Jesus Christ, that ye '),
                hp('withdraw yourselves from every brother that walketh disorderly, and not after the tradition which he received of us', '2t3-withdraw'),
                t('.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('For even when we were with you, this we commanded you, That '),
                hg('if any would not work, neither should he eat', '2t3-work'),
                t('.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('For we hear that there are some which walk among you '),
                hy('disorderly, working not at all, but are busybodies', '2t3-busybodies'),
                t(';'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And if any man obey not our word by this epistle, note that man, and have no company with him, that he may be '),
                hp('ashamed', '2t3-shame'),
                t(';'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2t3-withdraw',
          html:
            '"Withdraw yourselves from every brother that walketh disorderly, and not after the tradition which he received of us." Church discipline is necessary. Those who reject the apostolic tradition and live in disorder cannot be permitted to set the tone. Yet withdrawal is corrective, not punitive—meant to bring the person to repentance.',
        },
        {
          kind: 'commentary',
          id: '2t3-work',
          html:
            '"If any would not work, neither should he eat." This is a principle, not merely punishment. Work is how humans participate in the creation order. To refuse work is to reject the human vocation. Paul applies this principle firmly: sustenance is tied to labor.',
        },
        {
          kind: 'commentary',
          id: '2t3-busybodies',
          html:
            '"Some which walk among you disorderly, working not at all, but are busybodies." The idle are not merely inactive; they are meddlesome. Without the discipline of work, they turn to gossip and interference. Idleness breeds disorder.',
        },
        {
          kind: 'commentary',
          id: '2t3-shame',
          html:
            '"Note that man, and have no company with him, that he may be ashamed." Shame is meant to awaken conscience. To exclude someone from fellowship for refusing work is not cruelty; it is the hope that shame will lead to repentance. The goal is restoration.',
        },
        {
          kind: 'greek',
          id: '2t3-ataktos',
          title: 'Ataktos — "Disorderly" or "Out of Line"',
          script: 'ἄτακτος',
          translit: '<strong>Ataktos</strong> · disorderly; unruly; undisciplined; out of line; not in proper order',
          description:
            'To walk disorderly is to step out of rank, to refuse the order and structure of community life. It is insubordination dressed in the language of freedom. True freedom is found in working, not in idleness.',
        },
        {
          kind: 'christ',
          id: '2t3-christ-work',
          title: 'Christ Connection — Christ Works; the Gospel Is Labor',
          html:
            'Jesus Himself worked as a carpenter. In His ministry, He labored—healing, teaching, traveling. After His resurrection, He continues His intercession and reign. Believers are called to work not because Christ has commanded withdrawal from the world, but because labor itself is part of the Christian calling.',
        },
        {
          kind: 'carry',
          html:
            'Work is not beneath you. It is part of your vocation as a human being and as a Christian. Whether your work is carpentry or teaching, homemaking or writing, your labor has dignity. It provides for yourself and your household. It enables you to help others. Do not be idle. Do not meddle in others\' affairs. Work with your hands.',
        },
        {
          kind: 'reflection',
          id: '2t3-work-reflect',
          prompt: 'How do you view your work? Is it drudgery or calling? How might you approach your labor with greater purpose and dignity?',
        },
      ],
    },

    {
      ref: '2 Thessalonians 3:16–18',
      title: 'Peace; Benediction',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 16,
              spans: [
                t('Now the Lord of peace himself give you '),
                hp('peace always by all means', '2t3-peace'),
                t('. The Lord be with you all.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('The salutation of '),
                hg('Paul with mine own hand', '2t3-hand'),
                t(', which is the token in every epistle: so I write.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('The grace of our Lord Jesus Christ be '),
                hy('with you all', '2t3-grace'),
                t('. Amen.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2t3-peace',
          html:
            '"The Lord of peace himself give you peace always by all means." Peace is the final word. Not the peace of escape or ease, but the peace that comes from being with God. "Always by all means"—in all circumstances, through all difficulties, in all relationships.',
        },
        {
          kind: 'commentary',
          id: '2t3-hand',
          html:
            '"The salutation of Paul with mine own hand." Paul has dictated most of the letter but writes this closing in his own hand. This personal touch authenticates the letter and shows Paul\'s investment in the Thessalonians. He is not a distant authority but a pastor who cares.',
        },
        {
          kind: 'commentary',
          id: '2t3-grace',
          html:
            '"The grace of our Lord Jesus Christ be with you all." The letter closes as it opened: with grace. Not judgment alone, but grace. Grace to repent, to work, to stand firm. Grace to the end.',
        },
        {
          kind: 'greek',
          id: '2t3-eirene-kyrios',
          title: 'Eirene — "Peace"',
          script: 'εἰρήνη',
          translit: '<strong>Eirene</strong> · peace; wholeness; harmony; reconciliation',
          description:
            'Peace with God is the foundation of all other peace. It is not freedom from difficulty but steadfastness in difficulty. The Lord Himself gives this peace, not as the world gives, but as a gift to those who trust Him.',
        },
        {
          kind: 'carry',
          html:
            'The Thessalonians have been turbulent: afflicted by persecution, alarmed by false teachings, distracted by idleness. Paul\'s final gift to them is peace. Not the peace of absence of conflict, but the presence of the Lord Himself. Hold this peace. Let it guard your hearts. Work steadily. Love faithfully. Wait patiently. The Lord of peace is with you.',
        },
        {
          kind: 'reflection',
          id: '2t3-peace-reflect',
          prompt: 'What does the peace of God mean to you? How can you cultivate and maintain this peace in the midst of life\'s difficulties?',
        },
      ],
    },
  ],
};
