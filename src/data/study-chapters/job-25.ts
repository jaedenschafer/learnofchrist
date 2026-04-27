import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * Job 25 — Bildad&apos;s Final Speech: The Question of Justification
 *
 * Bildad speaks one last time, and his speech is remarkably brief—only six
 * verses. "How then can man be justified with God? or how can he be clean that
 * is born of a woman?" Bildad poses a question that cuts to the heart of Job&apos;s
 * crisis. If God is infinitely exalted and humans are dust, if humans are full
 * of corruption from birth, how can any human stand before God and be just?
 * Bildad does not answer his own question. He simply asks it and sits down. It
 * is perhaps the most honest thing Bildad has said: the recognition that human
 * justification in the sight of a holy God is impossible. But Bildad does not
 * know that the answer lies not in human effort, but in God&apos;s grace—in the
 * very Redeemer that Job has proclaimed.',
 */
export const JOB_25: RichChapterContent = {
  bookSlug: 'job',
  bookName: 'Job',
  chapter: 25,

  intros: [
    'Bildad has been silent since Job 18. Now he speaks one final time. His speech is the shortest of all the speeches of the friends—just six verses. And yet these six verses pose the deepest question of the entire book: "How then can man be justified with God? or how can he be clean that is born of a woman?" Bildad is asking the fundamental theological question of the human condition: given that God is infinitely exalted, given that humans are finite and corrupt, how can any human being stand before God and be just? This question lies beneath all of Job&apos;s suffering. This is the scandal: Job cannot justify himself before God. No one can.',
    'But Bildad does not answer his own question. He simply asks it and stops. In a sense, Bildad has finally arrived at humility. He has abandoned the attempt to explain Job&apos;s suffering through doctrine. He has fallen silent before the mystery. But he does not know—and Job does—that the answer to his question has already been spoken. The Redeemer liveth. The Redeemer will stand at the latter day. And through the Redeemer, the one born of a woman will be justified, will be made clean, will be able to stand before God and see God and live.',
  ],

  bottomShare: {
    quote:
      '"How then can man be justified with God? or how can he be clean that is born of a woman?" Bildad asks the deepest question—and reveals that human justification is impossible by human effort alone.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Job 25 · Study Guide',
  },

  sections: [
    /* ─── Job 25:1–6 — The Question Without Answer ──────────────────── */
    {
      ref: 'Job 25:1–6',
      title: 'How Can a Man Be Just?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 25,
          lines: [
            plain(1, 'Then answered Bildad the Shuhite, and said,'),
            plain(2, 'Dominion and fear are with him, he maketh peace in his high places.'),
            plain(3, 'Is there any number of his armies? and upon whom doth not his light arise?'),
            {
              number: 4,
              spans: [
                t('How then can '),
                hp('man be justified with God?', 'job25-justified'),
                t('\n'),
                hp('or how can he be clean that is born of a woman?', 'job25-clean'),
              ],
            },
            plain(5, 'Behold even to the moon, and it shineth not; yea, the stars are not pure in his sight.'),
            {
              number: 6,
              spans: [
                t('How much less '),
                hg('man, that is a worm', 'job25-worm'),
                t(', and the son of man, which is a worm?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'job25-justified',
          html:
            '"How then can man be justified with God?" This is the central question of theology. Not "Why does the wicked prosper?" Not "Why does the righteous suffer?" But the more fundamental: How can a mortal human being, who is finite and sinful, stand before God, who is infinite and holy, and be just? How can the gap be bridged? How can the contradiction be resolved?',
        },
        {
          kind: 'hebrew',
          id: 'job25-tsadak',
          title: 'Tsadak — "To Be Just" (To Be Made Right)',
          script: 'צָדַק',
          translit: '<strong>Tsadak</strong> · to be just, righteous, vindicated; to be justified',
          description:
            'To be tsadak is not merely to behave correctly. It is to be just in the sight of God, to be vindicated, to be made right. Bildad is asking: how can a human being achieve this state of being right before God? How is the justification of the human possible?',
        },
        {
          kind: 'commentary',
          id: 'job25-clean',
          html:
            '"How can he be clean that is born of a woman?" Bildad is saying that from birth, from the moment of conception in a woman&apos;s womb, a human is unclean, is corrupt, is separated from God. How can one born in such a state be made clean? How can one born in separation be made whole?',
        },
        {
          kind: 'hebrew',
          id: 'job25-tahor',
          title: 'Tahor — "Clean" (Ritually and Spiritually Pure)',
          script: 'טָהוֹר',
          translit: '<strong>Tahor</strong> · clean, pure, undefiled; ritually and spiritually clean',
          description:
            'To be tahor is to be ritually clean, fit to approach God, separated from defilement. Bildad is asking how a human, born of a woman, born in a state of defilement, can ever become tahor. The question assumes the impossibility of the answer.',
        },
        {
          kind: 'commentary',
          id: 'job25-worm',
          html:
            '"Man, that is a worm." Bildad reduces humanity to its most contemptible form: a worm. And not just man, but "the son of man"—an heir, a one of consequence—is also a worm. In the sight of God&apos;s infinite greatness, all human dignity is reduced to nothing. We are worms, insects, insignificant specks. How can a worm be justified? How can a worm be clean?',
        },
        {
          kind: 'carry',
          html:
            'Bildad&apos;s final speech is perhaps his most honest. He abandons the attempt to explain Job&apos;s suffering and instead acknowledges the fundamental impossibility of the human condition: how can a mortal, sinful being be just before an infinite, holy God? This question cannot be answered by doctrine. It can only be answered by grace.',
        },
        {
          kind: 'christ',
          id: 'job25-christ',
          title: 'Christ Connection — Justification by Grace',
          html:
            'Bildad asks: "How can man be justified with God?" The answer is given in the Gospel: not by human effort, not by moral achievement, but by grace. "For by grace are ye saved through faith; and that not of yourselves: it is the gift of God: Not of works, lest any man should boast" (Ephesians 2:8–9). Christ is the justifier. "God commendeth his love toward us, in that, while we were yet sinners, Christ died for us" (Romans 5:8). The human cannot justify himself. But Christ justifies the human through His own righteousness, offered as a gift. Job&apos;s vision of the Redeemer—the one who will stand at the latter day, who will make Job clean, who will cause Job to see God—this is the vision of Christ, the one who alone can answer Bildad&apos;s question. In Him, the impossible becomes possible. The worm becomes justified.',
        },
        {
          kind: 'reflection',
          id: 'job25-justified',
          prompt: 'Do you believe you can be justified before God by your own efforts? Or do you trust in grace, in the work of another on your behalf?',
        },
      ],
    },
  ],
};
