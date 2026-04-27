import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 John — Truth & Love
 *
 * The elder writes to the elect lady and her children, whom he loves in the truth.
 * He rejoices that her children walk in truth. He beseeches her to love one another.
 * Many deceivers are gone out into the world who confess not that Jesus Christ is come
 * in the flesh. Receive them not into thy house, neither bid them Godspeed.
 */
export const SECOND_JOHN_1: RichChapterContent = {
  bookSlug: '2-john',
  bookName: '2 John',
  chapter: 1,

  intros: [
    'The apostle John writes a brief letter to a specific community—referred to as "the elect lady." This may be a woman of influence in the church or a metaphor for a particular church. John writes with warmth and affection. He loves these people because they walk in truth. His greatest joy is hearing that her children persist in faith.',
    'Yet he also warns. Deceivers are at work—those who deny the incarnation, who refuse to confess that Jesus Christ has come in the flesh. These are not innocent errors but destructive heresies. John urges discernment and boundary: such deceivers should not be welcomed or supported. Love and truth must go together. True hospitality does not mean hosting those who undermine the gospel.',
  ],

  sections: [
    /* ─── 2 John 1–13 — Truth, Love, & Boundaries ──────────────────── */
    {
      ref: '2 John 1–13',
      title: 'Walking in Truth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'The elder unto the elect lady and her children, whom I love in the truth; and not I only, but also all they that have known the truth;'),
            plain(2, 'For the truth&apos;s sake which dwelleth in us, and shall be with us for ever.'),
            plain(3, 'Grace be with you, mercy, and peace, from God the Father, and from the Lord Jesus Christ, the Son of the Father, in truth and love.'),
            plain(4, 'I rejoiced greatly that I found of thy children walking in truth, as we have received commandment from the Father.'),
            plain(6, 'And this is love, that we walk after his commandments. This is the commandment, That, as ye have heard from the beginning, ye should walk in it.'),
            plain(7, 'For many deceivers are entered into the world, who confess not that Jesus Christ is come in the flesh. This is a deceiver and an antichrist.'),
            plain(10, 'If there come any unto you, and bring not this doctrine, receive him not into your house, neither bid him God speed:'),
            plain(11, 'For he that biddeth him God speed is partaker of his evil deeds.'),
          ],
        },
        {
          kind: 'commentary',
          id: '2john1-elect-lady',
          html:
            'John addresses his recipients as "the elect lady." This is a term of dignity and affection. They are chosen—chosen by God, precious to Him. John&apos;s love for them is grounded in truth. This is not sentimental attachment, but love rooted in shared faith, in common conviction that the gospel is true and saves.',
        },
        {
          kind: 'greek',
          id: '2john1-aletheia',
          title: 'Aletheia — Truth',
          script: 'ἀλήθεια',
          translit: '<strong>Aletheia</strong> · truth; reality; that which is true; the revelation of God',
          description:
            'Truth in John is not abstract philosophy. It is the gospel itself—God&apos;s self-revelation in Christ. To walk in truth is to live according to the gospel, to embrace Christ as Lord and Saviour.',
        },
        {
          kind: 'commentary',
          id: '2john1-grace-mercy',
          html:
            'John pronounces blessing: "Grace be with you, mercy, and peace, from God the Father, and from the Lord Jesus Christ." This is not mere formality. Grace, mercy, and peace come from both Father and Son—a statement of the full divinity and full authority of Christ. And these gifts are given "in truth and love"—grounded in reality, flowing from God&apos;s heart.',
        },
        {
          kind: 'christ',
          id: '2john1-christ-incarnate',
          title: 'Christ Connection — Incarnate Truth',
          html:
            'The essence of Christian truth is the incarnation. Jesus Christ has come in the flesh. He is not merely spiritual or divine. He is human. He ate, slept, suffered, died. To deny this is to deny the gospel. Christ is God&apos;s ultimate truth made visible, touchable, personal.',
        },
        {
          kind: 'carry',
          html:
            'John states plainly: this is love—that we walk after His commandments. Love is not doing whatever feels good. Love is obedience. When you love God and love others, you keep His commandments. And those who truly walk in truth will recognize and be wary of deceivers.',
        },
        {
          kind: 'reflection',
          id: '2john1-boundaries',
          prompt: 'How do you balance hospitality and discernment? Where do you need to be more careful about what teachings you embrace?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The elder unto the elect lady and her children, whom I love in the truth. I rejoiced greatly that I found of thy children walking in truth. Love is that we walk after his commandments. Many deceivers are entered into the world, who confess not that Jesus Christ is come in the flesh.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 John · Study Guide',
  },

  hasHebrew: false,
};
