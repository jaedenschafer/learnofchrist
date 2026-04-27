import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Corinthians 3 — New Covenant; We Are Changed
 *
 * Paul contrasts the old covenant written on stone with the new covenant written
 * on hearts. The old covenant brings death; the new brings life. The old brings
 * condemnation; the new brings righteousness. Those under the new covenant are
 * being transformed from glory to glory into the image of Christ.
 */
export const SECOND_CORINTHIANS_3: RichChapterContent = {
  bookSlug: '2-corinthians',
  bookName: '2 Corinthians',
  chapter: 3,

  intros: [
    'Paul has been accused of inflating his own credentials. He responds that his credentials are not letters of recommendation from men, but the Corinthians themselves—transformed by his preaching, living letters written not with ink but with the Spirit of God. This leads to a profound meditation on the difference between the old and new covenants.',
    'The old covenant, written on tablets of stone, was glorious. But its glory is fading. The new covenant, written on hearts and administered by the Spirit, has a glory that exceeds it. Those under the new covenant are not slaves to law, but children of grace—and they are being transformed into the image of Christ.',
  ],

  sections: [
    {
      ref: '2 Corinthians 3:1–6',
      title: 'Letters Written on the Heart',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(1, 'Do we begin again to commend ourselves? or need we, as some others, epistles of commendation to you, or letters of commendation from you?'),
            plain(2, 'Ye are our epistle written in our hearts, known and read of all men.'),
            plain(3, 'Forasmuch as ye are manifestly declared to be the epistle of Christ ministered by us, written not with ink, but with the Spirit of the living God; not in tables of stone, but in fleshy tables of the heart.'),
            plain(6, 'Who also hath made us able ministers of the new testament; not of the letter, but of the spirit: for the letter killeth, but the spirit giveth life.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-3-epistle',
          html:
            'Paul&apos;s credentials are visible in the Corinthians themselves. They are his &quot;epistle written in our hearts, known and read of all men.&quot; The change in their lives is Paul&apos;s letter of recommendation. His authenticity is demonstrated in their transformation.',
        },
        {
          kind: 'greek',
          id: 'cor2-3-gramma',
          title: 'Gramma — Letter; Writing',
          script: 'γράμμα',
          translit: '<strong>Gramma</strong> · letter; writing; epistle',
          description:
            'The contrast is between gramma—the written letter, the law—and pneuma—the Spirit. The gramma may be powerful, but the pneuma is living and transformative.',
        },
        {
          kind: 'commentary',
          id: 'cor2-3-heart',
          html:
            'The Corinthians are written &quot;not with ink, but with the Spirit of the living God; not in tables of stone, but in fleshy tables of the heart.&quot; Their transformation is not external compliance but internal renewal. The Spirit has written the law upon their hearts.',
        },
        {
          kind: 'christ',
          id: 'cor2-3-christ-epistle',
          title: 'Christ Connection — The Epistle of Christ',
          html:
            'The Corinthians are &quot;the epistle of Christ.&quot; Their lives spell out the message of Christ. They are not so much read; they are lived. Their transformation declares Christ.',
        },
        {
          kind: 'carry',
          html:
            'Your life is a letter. Others read you every day. What does your life spell out? Are you a living epistle of Christ—written not with ink but with the Spirit? Or are you still under the letter, the law, seeking to justify yourself through external compliance?',
        },
        {
          kind: 'reflection',
          id: 'cor2-3-epistle-life',
          prompt: 'What would it mean for your life to be a &quot;letter of Christ&quot; that others read? What does your current life spell out?',
        },
      ],
    },

    {
      ref: '2 Corinthians 3:12–18',
      title: 'Transformation into His Image',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(12, 'Seeing then that we have such hope, we use great plainness of speech:'),
            plain(14, 'But their minds were blinded: for until this day remaineth the same vail untaken away in the reading of the old testament; which vail is done away in Christ.'),
            plain(16, 'Nevertheless when it shall turn to the Lord, the vail shall be taken away.'),
            plain(17, 'Now the Lord is that Spirit: and where the Spirit of the Lord is, there is liberty.'),
            plain(18, 'But we all, with open face beholding as in a glass the glory of the Lord, are changed into the same image from glory to glory, even as by the Spirit of the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-3-transformed',
          html:
            'Paul reaches the climax: &quot;We all, with open face beholding as in a glass the glory of the Lord, are changed into the same image from glory to glory.&quot; The believer&apos;s transformation is not a one-time event. It is a continuous process—from glory to glory, ever increasing, ever deepening.',
        },
        {
          kind: 'greek',
          id: 'cor2-3-metamorphoo',
          title: 'Metamorphoo — To Transform; To Change',
          script: 'μεταμορφόω',
          translit: '<strong>Metamorphoo</strong> · to transform; to change form; to transfigure',
          description:
            'Metamorphoo is not mere improvement. It is transformation into a new form. The believer is being transformed into the image of Christ. The process is gradual but relentless.',
        },
        {
          kind: 'commentary',
          id: 'cor2-3-vail',
          html:
            'The veil that obscured the vision of God in the Old Testament is removed in Christ. Now believers can behold &quot;the glory of the Lord&quot; directly—not hidden, not mediated through fear, but openly and transformatively.',
        },
        {
          kind: 'christ',
          id: 'cor2-3-christ-glory',
          title: 'Christ Connection — Beholding Christ&apos;s Glory',
          html:
            'To behold Christ&apos;s glory is to be changed by it. This is not passive observation. It is transformative encounter. As we gaze upon Christ, we are progressively remade into His likeness.',
        },
        {
          kind: 'carry',
          html:
            'You are being transformed. Not by your own effort, but by the Spirit. As you behold Christ—in prayer, in Scripture, in worship—the Spirit is conforming you to His image. This transformation will continue, from glory to glory, until you finally stand before Him.',
        },
        {
          kind: 'reflection',
          id: 'cor2-3-glory-glory',
          prompt: 'What does it mean to be changed &quot;from glory to glory&quot; into Christ&apos;s image? What are you becoming?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'But we all, with open face beholding as in a glass the glory of the Lord, are changed into the same image from glory to glory, even as by the Spirit of the Lord.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Corinthians 3 · Study Guide',
  },

  hasHebrew: false,
};
