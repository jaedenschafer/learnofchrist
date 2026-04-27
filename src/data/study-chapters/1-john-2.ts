import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 John 2 — Advocate & Love
 *
 * If anyone sins, we have an advocate with the Father—Jesus Christ the righteous.
 * He is the propitiation for our sins, and not for ours only, but for the whole world.
 * The test of faith is obedience to His commandments. Love not the world, nor the things
 * in the world. The world passes away, but he that doeth the will of God abideth for ever.
 */
export const FIRST_JOHN_2: RichChapterContent = {
  bookSlug: '1-john',
  bookName: '1 John',
  chapter: 2,

  intros: [
    'John shifts from confession to comfort. We are not alone when we fall. We have an advocate—a lawyer, a defender—before the Father. That advocate is Jesus Christ, who is righteous and whose righteousness qualifies Him to represent us. His sacrifice has accomplished what no other offering could: He has become the payment for the sins of the world.',
    'John then poses a test of faith: do we keep His commandments? This is not legalism. It is the natural expression of love for Christ. Those who truly love Him will obey Him. And those who obey will discover that they no longer love the world. Their desires are reoriented toward what is eternal.',
  ],

  sections: [
    /* ─── 1 John 2:1–6 — Advocate & Obedience ─────────────────────── */
    {
      ref: '1 John 2:1–6',
      title: 'Christ Our Advocate',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(1, 'My little children, these things write I unto you, that ye sin not. And if any man sin, we have an advocate with the Father, Jesus Christ the righteous:'),
            plain(2, 'And he is the propitiation for our sins: and not for ours only, but also for the sins of the whole world.'),
            plain(3, 'And hereby we do know that we know him, if we keep his commandments.'),
            plain(4, 'He that saith, I know him, and keepeth not his commandments, is a liar, and the truth is not in him.'),
            plain(5, 'But whoso keepeth his word, in him verily is the love of God perfected: therefore know we that we are in him.'),
            plain(6, 'He that saith he abideth in him ought himself also so to walk, even as he walked.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1john2-advocate',
          html:
            'John addresses believers as "little children"—a term of affection and instruction. He desires that they not sin. But he is realistic: sin occurs. When it does, do not despair. You have an advocate. Not a distant judge, but a defender before the Father. Jesus Christ stands for you, and His righteousness makes Him worthy to be heard.',
        },
        {
          kind: 'greek',
          id: '1john2-parakletos',
          title: 'Parakletos — Advocate',
          script: 'παράκλητος',
          translit: '<strong>Parakletos</strong> · advocate; helper; counselor; one called alongside to defend',
          description:
            'The parakletos is not an accuser but a defender. He speaks for us before the Father. He presents our case. He shows why we should be forgiven—because of His sacrifice and righteousness.',
        },
        {
          kind: 'commentary',
          id: '1john2-propitiation',
          html:
            'Christ is the propitiation—the satisfaction of God&apos;s justice. He has paid the price. His blood covers all sin—not just ours, but the sins of the whole world. God&apos;s wrath against sin is not vented on those who believe in Christ. Instead, it was poured out on Him at the cross. He absorbed it. He satisfied it. We go free.',
        },
        {
          kind: 'christ',
          id: '1john2-christ-righteous',
          title: 'Christ Connection — The Righteous One',
          html:
            'Jesus is righteous. He never sinned. He kept the whole law. His perfect obedience qualifies Him to be our advocate. He does not argue our innocence—we are guilty. He argues our case on the basis of His sacrifice and righteousness.',
        },
        {
          kind: 'carry',
          html:
            'The test of faith is not emotion or profession, but obedience. To know Christ is to keep His commandments. This is not oppressive legalism. It is the overflow of love. Those who love Him obey Him. And in that obedience, they discover that His love is perfected in them—they are in Him, walking as He walked.',
        },
        {
          kind: 'reflection',
          id: '1john2-obedience',
          prompt: 'How do your actions reveal whether you truly know Christ? What commandment are you struggling to obey?',
        },
      ],
    },

    /* ─── 1 John 2:15–17 — Love Not the World ──────────────────────── */
    {
      ref: '1 John 2:15–17',
      title: 'The World vs. Eternity',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(15, 'Love not the world, neither the things that are in the world. If any man love the world, the love of the Father is not in him.'),
            plain(16, 'For all that is in the world, the lust of the flesh, and the lust of the eyes, and the pride of life, is not of the Father, but is of the world.'),
            plain(17, 'And the world passeth away, and the lust thereof: but he that doeth the will of God abideth for ever.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1john2-world',
          html:
            'John speaks of the world—not the created physical world (which God made and called good) but the system of values opposed to God. The world offers: gratification of desires, beauty and status, pride and power. These are not evil in themselves, but they can become idols that replace God in the heart.',
        },
        {
          kind: 'greek',
          id: '1john2-kosmos',
          title: 'Kosmos — World',
          script: 'κόσμος',
          translit: '<strong>Kosmos</strong> · world; the system of values and desires opposed to God; organized rebellion against God&apos;s reign',
          description:
            'The kosmos is not physical matter but a spiritual reality—the organized rebellion of human desires against God. To love the kosmos is to embrace its values: materialism, status-seeking, sensuality, pride.',
        },
        {
          kind: 'commentary',
          id: '1john2-lusts',
          html:
            'The lust of the flesh is the craving for bodily gratification. The lust of the eyes is the desire for status and beauty. The pride of life is arrogant self-assertion. These three cover the gamut of worldly temptation. They pull us away from God. They promise fulfillment but deliver emptiness.',
        },
        {
          kind: 'christ',
          id: '1john2-christ-eternal',
          title: 'Christ Connection — The Eternal Perspective',
          html:
            'Christ came not to gratify the flesh, pursue status, or assert Himself. He emptied Himself. He humbled Himself. He gave up everything earthly. Yet He endures eternally. Those who follow Him must likewise reorient their desires. The world is passing away, but Christ is forever.',
        },
        {
          kind: 'carry',
          html:
            'John provides the ultimate perspective: the world passes away. All that the world values—wealth, beauty, power—will burn up. But those who do the will of God abide forever. This is not escapism. It is clarity. When you truly see that the world is temporary and eternity is real, your desires change. You begin to invest in what lasts.',
        },
        {
          kind: 'reflection',
          id: '1john2-lusts',
          prompt: 'Where are you tempted to love the world more than God? What worldly desire is calling you away from obedience?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'If any man sin, we have an advocate with the Father, Jesus Christ the righteous. He is the propitiation for our sins. We know him, if we keep his commandments. Love not the world. He that doeth the will of God abideth for ever.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 John 2 · Study Guide',
  },

  hasHebrew: false,
};
