import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Galatians 2 — I Am Crucified with Christ
 *
 * Paul recounts his meeting with the Jerusalem apostles and his confrontation
 * with Peter at Antioch. The issue is clear: must Gentiles become Jewish to
 * be fully Christian? Paul says no. Faith in Christ is complete. The old
 * identity is crucified; the new identity is hidden in Christ.
 */
export const GALATIANS_2: RichChapterContent = {
  bookSlug: 'galatians',
  bookName: 'Galatians',
  chapter: 2,

  intros: [
    'Paul faced a critical question: must Gentile believers observe the Jewish law to be saved? The Jerusalem church seemed to waver. Paul stood firm. Not because he was independent, but because the gospel is at stake. Gentiles do not need to become Jewish to be Christian.',
    'In this chapter, Paul makes the most famous declaration of his life: &quot;I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me.&quot; The old self, the identity formed by works and law, is dead. The Christian lives from a new source—Christ living within.',
  ],

  sections: [
    {
      ref: 'Galatians 2:1–10',
      title: 'The Jerusalem Council; Liberty in Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(2, 'And I went up by revelation, and communicated unto them that gospel which I preach among the Gentiles, but privately to them which were of reputation; lest by any means I should run, or had run, in vain:'),
            plain(4, 'And that because of false brethren unawares brought in, who came in privily to spy out our liberty which we have in Christ Jesus, that they might bring us into bondage:'),
            plain(7, 'But contrariwise, when they saw that the gospel of the uncircumcision was committed unto me, as the gospel of the circumcision was unto Peter;'),
            plain(10, 'Only they would that we should remember the poor; the same which I also was forward to do.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'gal-2-council',
          html:
            'Paul went to Jerusalem and shared his gospel with the apostles. Some had crept in unaware, insisting that Gentiles must be circumcised. Paul resisted. The gospel of liberty cannot be compromised by works of the law.',
        },
        {
          kind: 'greek',
          id: 'gal-2-eleuteria',
          title: 'Eleuteria — Liberty; Freedom',
          script: 'ἐλευθερία',
          translit: '<strong>Eleuteria</strong> · liberty; freedom; emancipation',
          description:
            'Liberty in Christ Jesus—freedom from the tyranny of law, from the constant calculation of works and merit. This is the central claim of Galatians.',
        },
        {
          kind: 'commentary',
          id: 'gal-2-recognition',
          html:
            'The apostles recognized Paul&apos;s calling. &quot;When they saw that the gospel of the uncircumcision was committed unto me.&quot; Gentiles need not become Jewish to be Christian. Paul&apos;s mission to the Gentiles is validated.',
        },
        {
          kind: 'christ',
          id: 'gal-2-christ-liberty',
          title: 'Christ Connection — Liberty in Christ',
          html:
            'Liberty belongs to Christ&apos;s followers. Not lawlessness, but freedom from the burden of earning salvation through works. Christ has accomplished what the law could not.',
        },
        {
          kind: 'carry',
          html:
            'You are not saved by works or by conformity to a code. You are saved by faith in Christ. That faith frees you from the endless burden of trying to be good enough. You are free—not to do whatever you wish, but to live from grace.',
        },
        {
          kind: 'reflection',
          id: 'gal-2-liberty',
          prompt: 'What does Christian liberty mean to you? Where do you still struggle with the sense that you must earn God&apos;s approval through works?',
        },
      ],
    },

    {
      ref: 'Galatians 2:11–21',
      title: 'Peter&apos;s Hypocrisy; I Am Crucified with Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(12, 'But when Peter was come to Antioch, I withstood him to the face, because he was to be blamed.'),
            plain(14, 'But when I saw that they walked not uprightly according to the truth of the gospel, I said unto Peter before them all, If thou, being a Jew, livest after the manner of Gentiles, and not as do the Jews, why compellest thou the Gentiles to live as do the Jews?'),
            plain(20, 'I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me: and the life which I now live in the flesh I live by the faith of the Son of God, who loved me, and gave himself for me.'),
            plain(21, 'I do not frustrate the grace of God: for if righteousness come by the law, then Christ is dead in vain.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'gal-2-hypocrisy',
          html:
            'Peter knew the truth—that Gentiles need not observe the law. Yet he withdrew from eating with them when the circumcision party arrived. Paul called him out publicly. Gospel truth cannot be compromised by social pressure.',
        },
        {
          kind: 'greek',
          id: 'gal-2-sugkatatithemi',
          title: 'Sunkatatithemi — To Condescend; To Give Assent',
          script: 'συγκατατίθημι',
          translit: '<strong>Sunkatatithemi</strong> · to condescend; to give assent; to go along with',
          description:
            'Paul will not condescend to a false gospel. He does not go along with error, however well-intentioned. Gospel truth requires bold speech.',
        },
        {
          kind: 'commentary',
          id: 'gal-2-crucified',
          html:
            '&quot;I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me.&quot; This is the Christian paradox. The old self is dead. What remains is not &quot;I&quot; but &quot;Christ in me.&quot; This is the end of self-reliance and the beginning of trust.',
        },
        {
          kind: 'christ',
          id: 'gal-2-christ-crucified',
          title: 'Christ Connection — Christ Living in You',
          html:
            'The Christian life is not self-improvement or self-discipline. It is Christ living within you. Your old self, your old identity—crucified. What you are now is a vessel for Christ&apos;s life and power.',
        },
        {
          kind: 'carry',
          html:
            'You cannot earn righteousness. You cannot achieve it through works. You receive it through faith—and in that faith, you discover something paradoxical: as you die to yourself, Christ begins to live in you. This is not your achievement. This is grace.',
        },
        {
          kind: 'reflection',
          id: 'gal-2-crucified',
          prompt: 'What does it mean for your old self to be crucified? What aspects of your identity do you need to release? How might Christ live more fully in you?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I am crucified with Christ: nevertheless I live; yet not I, but Christ liveth in me.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Galatians 2 · Study Guide',
  },

  hasHebrew: false,
};
