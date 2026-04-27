import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 John 3 — Children of God & Love
 *
 * Behold what manner of love the Father hath bestowed upon us, that we should be called
 * the sons of God. We are God&apos;s children now, and it doth not yet appear what we shall be.
 * He that doeth righteousness is righteous. He that doeth sin is of the devil. Love one
 * another. Hereby we know we are passed from death unto life—because we love the brethren.
 */
export const FIRST_JOHN_3: RichChapterContent = {
  bookSlug: '1-john',
  bookName: '1 John',
  chapter: 3,

  intros: [
    'John opens with wonder: what manner of love has the Father shown us? We are called the children of God. This is not metaphorical language but reality. God has adopted us. We belong to His family. This changes everything. We are not orphans or servants, but beloved children.',
    'With this status comes both present reality and future hope. Now we are God&apos;s children. But what we shall be is not yet revealed. When He appears, we shall be like Him, seeing Him as He is. This hope purifies us. And the mark of being God&apos;s child is righteousness and love. We love one another because He first loved us. We do righteousness because that is the nature of the One whose children we are.',
  ],

  sections: [
    /* ─── 1 John 3:1–10 — Children of God ──────────────────────────── */
    {
      ref: '1 John 3:1–10',
      title: 'Behold, What Love',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(1, 'Behold, what manner of love the Father hath bestowed upon us, that we should be called the sons of God: therefore the world knoweth us not; because it knew him not.'),
            plain(2, 'Beloved, now are we the sons of God, and it doth not yet appear what we shall be: but we know that, when he shall appear, we shall be like him; for we shall see him as he is.'),
            plain(3, 'And every man that hath this hope in him purifieth himself, even as he is pure.'),
            plain(6, 'Whosoever abideth in him sinneth not: whosoever sinneth hath not seen him, neither known him.'),
            plain(7, 'Little children, let no man deceive you: he that doeth righteousness is righteous; he that doeth sin is of the devil; for the devil sinneth from the beginning.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1john3-sons',
          html:
            'John asks his readers to behold—to see—the love of the Father. It is so extraordinary, so lavish, that it has made us the sons of God. Not through our merit, not through our works, but through sheer grace. We are adopted into God&apos;s family. This is who we are now.',
        },
        {
          kind: 'greek',
          id: '1john3-tekna',
          title: 'Tekna — Children',
          script: 'τέκνα',
          translit: '<strong>Tekna</strong> · children; offspring; those born of parents; beloved dependents',
          description:
            'Tekna emphasizes genuine family relationship. We are not employees of God or subjects of a distant ruler. We are His children. This carries all the intimacy, affection, and security that family entails.',
        },
        {
          kind: 'commentary',
          id: '1john3-not-yet',
          html:
            'John acknowledges both present reality and future unveiling. Now we are God&apos;s children. But what we shall be is not yet revealed. In the resurrection, in the fullness of the kingdom, we shall see Him as He is. And we shall be like Him. This future hope, properly understood, purifies us now. It reorients our desires toward holiness.',
        },
        {
          kind: 'christ',
          id: '1john3-christ-like-him',
          title: 'Christ Connection — Made Like Him',
          html:
            'We shall be like Christ when He appears. This is the goal of redemption—not escape from creation, but transformation into His likeness. We are predestined to be conformed to the image of the Son. When that happens, we shall see Him fully, and we shall be fully healed and whole.',
        },
        {
          kind: 'carry',
          html:
            'John notes that the world does not know us because it did not know Him. Followers of Jesus will often be misunderstood, rejected, or opposed by those who do not know Him. This is not surprising. But it is the mark of belonging to Him. Your difference from the world is a sign of your relationship with Him.',
        },
        {
          kind: 'reflection',
          id: '1john3-sons',
          prompt: 'What does it mean to you to be called a child of God? How does that identity change the way you live?',
        },
      ],
    },

    /* ─── 1 John 3:11–24 — Love One Another ────────────────────────── */
    {
      ref: '1 John 3:11–24',
      title: 'Love One Another',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(11, 'For this is the message that ye heard from the beginning, That we should love one another.'),
            plain(14, 'We know that we have passed from death unto life, because we love the brethren. He that loveth not his brother abideth in death.'),
            plain(16, 'Hereby perceive we the love of God, because he laid down his life for us: and we ought to lay down our lives for the brethren.'),
            plain(17, 'But whoso hath this world&apos;s good, and seeth his brother have need, and shutteth up his bowels of compassion against him, how dwelleth the love of God in him?'),
            plain(18, 'My little children, let us not love in word, neither in tongue; but in deed and in truth.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1john3-love-one-another',
          html:
            'The message has been the same from the beginning: love one another. This is not a new command, but the central command of Christianity. It is not sentimental feeling but deliberate action. It is the expression of being God&apos;s children. Children of a loving God love one another.',
        },
        {
          kind: 'greek',
          id: '1john3-agape',
          title: 'Agape — Love',
          script: 'ἀγάπη',
          translit: '<strong>Agape</strong> · love; selfless regard for another; the love of God; covenant commitment',
          description:
            'Agape is not romantic love or preference. It is deliberate choice to regard another&apos;s good as important as one&apos;s own. It is the love God showed in Christ—laying down His life for those who did not deserve it.',
        },
        {
          kind: 'commentary',
          id: '1john3-love-brethren',
          html:
            'A sign that you have passed from death to life is that you love the brethren. Love of other believers is not optional. It is the proof of genuine faith. Those who refuse to love remain in death—they are still under the dominion of sin and selfishness.',
        },
        {
          kind: 'christ',
          id: '1john3-christ-laid-down',
          title: 'Christ Connection — He Laid Down His Life',
          html:
            'Christ demonstrated the ultimate love by laying down His life for us. This is the standard and example. Love is willing to sacrifice. It is not self-protective or self-interested. It serves. It gives. It suffers if necessary for the good of the beloved.',
        },
        {
          kind: 'carry',
          html:
            'John brings love into the concrete realm. If you have this world&apos;s goods and you see your brother in need, and you shut up your compassion, how can you claim the love of God dwells in you? Love is not merely feeling or speech. It is action. It is seeing need and responding. It is laying down your life—even in small ways—for others.',
        },
        {
          kind: 'reflection',
          id: '1john3-love-deed',
          prompt: 'Who in your life needs your love expressed in deed, not just in words? What concrete action can you take?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Behold, what manner of love the Father hath bestowed upon us, that we should be called the sons of God. We are God&apos;s children now. Love one another: for this is the message that ye heard from the beginning. He laid down his life for us.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 John 3 · Study Guide',
  },

  hasHebrew: false,
};
