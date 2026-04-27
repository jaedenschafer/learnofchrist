import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 John 5 — Faith Overcomes the World
 *
 * Whosoever believeth that Jesus is the Christ is born of God. For whatsoever is born
 * of God overcometh the world: and this is the victory that overcometh the world, even
 * our faith. These things have I written unto you that believe on the name of the Son
 * of God; that ye may know that ye have eternal life.
 */
export const FIRST_JOHN_5: RichChapterContent = {
  bookSlug: '1-john',
  bookName: '1 John',
  chapter: 5,

  intros: [
    'John opens his final chapter with a powerful claim: belief in Jesus as the Christ is itself evidence of being born of God. You cannot truly believe in Jesus unless the Spirit has worked in your heart. But when you do believe, you receive power—the power to overcome the world and all its opposition.',
    'He closes his epistle with a summary statement of its purpose: to assure believers. These things have been written so that you may know that you have eternal life. This is not false confidence or presumption. It is justified assurance based on the work of God in and for you. Faith in Christ is the victory that enables us to stand.',
  ],

  sections: [
    /* ─── 1 John 5:1–12 — Faith & New Birth ────────────────────────── */
    {
      ref: '1 John 5:1–12',
      title: 'Victory Through Faith',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(1, 'Whosoever believeth that Jesus is the Christ is born of God: and every one that loveth him that begat loveth him also that is begotten of him.'),
            plain(4, 'For whatsoever is born of God overcometh the world: and this is the victory that overcometh the world, even our faith.'),
            plain(5, 'Who is he that overcometh the world, but he that believeth that Jesus is the Son of God?'),
            plain(9, 'If we receive the witness of men, the witness of God is greater: for this is the witness of God which he hath testified of his Son.'),
            plain(11, 'And this is the record, that God hath given to us eternal life, and this life is in his Son.'),
            plain(12, 'He that hath the Son hath life; and he that hath not the Son of God hath not life.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1john5-believes',
          html:
            'John identifies the sign of being born of God: belief that Jesus is the Christ. Not mere intellectual assent, but trust. Not superficial acknowledgment, but the foundation of one&apos;s life. Those who truly believe are born of God. And they love the Father because they love the Son.',
        },
        {
          kind: 'greek',
          id: '1john5-nike',
          title: 'Nike — Victory',
          script: 'νίκη',
          translit: '<strong>Nike</strong> · victory; the winning of a contest; triumph over opposition',
          description:
            'Believers overcome through faith. Not through human strength or cleverness, but through trust in Christ. The world opposes. It tempts. It threatens. But faith gives victory. This is the overcoming that matters—not worldly success but spiritual victory.',
        },
        {
          kind: 'commentary',
          id: '1john5-witness',
          html:
            'John contrasts human witness with God&apos;s witness. We accept testimony from people all the time. But the witness of God is greater and more sure. God has testified of His Son. This is the record—God&apos;s formal declaration. It is the most reliable testimony available.',
        },
        {
          kind: 'christ',
          id: '1john5-christ-life',
          title: 'Christ Connection — The Life',
          html:
            'God has given us eternal life, and that life is in His Son. To have Christ is to have life. Not merely existence, but life in all its fullness—life that is abundant, transformative, eternal. Without Him, there is only death. With Him, there is everything.',
        },
        {
          kind: 'carry',
          html:
            'The verdict is final and clear: he that hath the Son hath life; he that hath not the Son hath not life. This is not judgment pronounced in anger but reality stated plainly. Christ is the source of all life. To be disconnected from Him is to be cut off from life itself. To be in Him is to have everything that matters.',
        },
        {
          kind: 'reflection',
          id: '1john5-victory',
          prompt: 'What area of the world&apos;s opposition are you facing? How might faith in Christ give you victory?',
        },
      ],
    },

    /* ─── 1 John 5:14–21 — Assurance & Life ────────────────────────── */
    {
      ref: '1 John 5:14–21',
      title: 'Knowing Eternal Life',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(14, 'And this is the confidence that we have in him, that, if we ask any thing according to his will, he heareth us:'),
            plain(15, 'And if we know that he hear us, whatsoever we ask, we know that we have the petitions that we desired of him.'),
            plain(18, 'We know that whosoever is born of God sinneth not; but he that is begotten of God keepeth himself, and that wicked one toucheth him not.'),
            plain(19, 'And we know that we are of God, and the whole world lieth in wickedness.'),
            plain(20, 'And we know that the Son of God is come, and hath given us an understanding, that we may know him that is true, and we are in him that is true, even in his Son Jesus Christ. This is the true God, and eternal life.'),
          ],
        },
        {
          kind: 'commentary',
          id: '1john5-confidence',
          html:
            'John emphasizes confidence—certainty of access to God. If we ask according to His will, He hears us. And if we know He hears us, we know our petitions will be granted. This is not prosperity gospel promising automatic fulfillment. It is the assurance that our requests aligned with His will matter to Him and will be honored.',
        },
        {
          kind: 'greek',
          id: '1john5-oida',
          title: 'Oida — Know',
          script: 'οἶδα',
          translit: '<strong>Oida</strong> · to know; to perceive; to be assured; to understand',
          description:
            'John uses "we know" repeatedly in this passage—not as speculation but as certainty. This is the assurance that comes from faith, from experience of God&apos;s work in us, from the testimony of Scripture and the Spirit.',
        },
        {
          kind: 'commentary',
          id: '1john5-born-god',
          html:
            'John states: whoever is born of God does not sin habitually. This does not mean sinlessness, but a reoriented life. The person born of God keeps himself—he avoids what leads to sin. And the wicked one—Satan—does not touch Him in a way that destroys Him. God&apos;s protection covers those who are His.',
        },
        {
          kind: 'christ',
          id: '1john5-christ-understanding',
          title: 'Christ Connection — Given Understanding',
          html:
            'Christ has come and given us understanding so that we may know God who is true. He is not distant or abstract. He is personal. He is revealed in Christ. We are in Him that is true, in Jesus Christ. He is the true God, and in Him dwells eternal life.',
        },
        {
          kind: 'carry',
          html:
            'John closes by bringing all his themes together: faith, love, obedience, assurance, eternal life. The world lies in wickedness, but we are of God. We have understanding through Christ. We are in Him. He is the true God and eternal life. Therefore, keep yourselves from idols—from anything that would draw you away from Him. Be faithful. You have eternal life in Christ.',
        },
        {
          kind: 'reflection',
          id: '1john5-eternal',
          prompt: 'Do you know that you have eternal life? What gives you confidence in this assurance?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Whosoever believeth that Jesus is the Christ is born of God. Whatsoever is born of God overcometh the world. This is the victory that overcometh the world, even our faith. God hath given to us eternal life, and this life is in his Son.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 John 5 · Study Guide',
  },

  hasHebrew: false,
};
