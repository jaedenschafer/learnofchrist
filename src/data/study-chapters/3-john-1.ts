import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 3 John — Commended & Condemned
 *
 * The elder writes to beloved Gaius, whom he loves in the truth. John is pleased that
 * Gaius walks in truth and shows hospitality to traveling missionaries. Yet Diotrephes
 * loves to have the preeminence and refuses to receive the brethren. Demetrius is
 * commended for his good works. Follow not that which is evil, but that which is good.
 */
export const THIRD_JOHN_1: RichChapterContent = {
  bookSlug: '3-john',
  bookName: '3 John',
  chapter: 1,

  intros: [
    'This shortest epistle is deeply personal. John writes to Gaius, a believer known for his hospitality and faithfulness to truth. John rejoices in Gaius&apos; walk. But he also addresses a problem: Diotrephes, a leader with an outsized ego, refuses to welcome the brothers sent by John and prevents others from welcoming them. This is a picture of ambition and control poisoning a community.',
    'In contrast, John commends Demetrius, who has a good report from all. The epistle is a microcosm of the church: some faithful, some corrupt; some humble, some proud; some open to the brothers, some closed. John calls the church to follow what is good and to be aware of what is evil.',
  ],

  sections: [
    /* ─── 3 John 1–14 — Hospitality & Integrity ────────────────────── */
    {
      ref: '3 John 1–14',
      title: 'Commended & Cautioned',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'The elder unto the wellbeloved Gaius, whom I love in the truth.'),
            plain(2, 'Beloved, I wish above all things that thou mayest prosper and be in health, even as thy soul prospereth.'),
            plain(3, 'For I rejoiced greatly, when the brethren came and testified of the truth that is in thee, even as thou walkest in the truth.'),
            plain(9, 'I wrote unto the church: but Diotrephes, who loveth to have the preeminence among them, receiveth us not.'),
            plain(10, 'Wherefore, if I come, I will remember his deeds which he doeth, prating against us with malicious words: and not content therewith, neither doth he himself receive the brethren, and forbiddeth them that would, and casteth them out of the church.'),
            plain(11, 'Beloved, follow not that which is evil, but that which is good. He that doeth good is of God: but he that doeth evil hath not seen God.'),
            plain(12, 'Demetrius hath good report of all men, and of the truth itself: yea, and we also bear record; and ye know that our record is true.'),
          ],
        },
        {
          kind: 'commentary',
          id: '3john1-gaius',
          html:
            'John opens with affirmation. Gaius is wellbeloved. John loves him in the truth—a consistent phrase meaning genuine, gospel-grounded love. John wishes that Gaius prosper physically and materially, but even more importantly that his soul prosper. True prosperity is spiritual thriving, not worldly wealth.',
        },
        {
          kind: 'greek',
          id: '3john1-psyche',
          title: 'Psyche — Soul',
          script: 'ψυχή',
          translit: '<strong>Psyche</strong> · soul; life; the seat of emotions and will; the inner self',
          description:
            'The soul is the seat of who we are. To prosper in soul is to grow in faith, in love, in obedience to God. This is the prosperity that matters eternally.',
        },
        {
          kind: 'commentary',
          id: '3john1-diotrephes',
          html:
            'Diotrephes is a cautionary figure. He loves to have the preeminence—he desires honor, power, authority above others. This is the opposite of the servant heart that characterizes true leadership. His ego prevents him from receiving the apostle&apos;s representatives. He even casts others out of the church for showing hospitality. This is manipulation and control.',
        },
        {
          kind: 'christ',
          id: '3john1-good',
          title: 'Christ Connection — Following What Is Good',
          html:
            'Jesus came not to be served, but to serve. He washed feet. He embraced the outcast. He welcomed those others rejected. To follow Christ is to imitate His humility and love. Diotrephes&apos; behavior is utterly contrary to the spirit of Christ.',
        },
        {
          kind: 'carry',
          html:
            'John&apos;s verdict is simple and clear: follow not that which is evil, but that which is good. He that doeth good is of God. He that doeth evil hath not seen God. This is a sharp statement, but it reflects reality. Actions reveal where your heart is. What you do shows whether you truly know God.',
        },
        {
          kind: 'reflection',
          id: '3john1-imitate',
          prompt: 'Are you more like Gaius, Diotrephes, or Demetrius? What kind of character is God forming in you?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The elder unto the wellbeloved Gaius, whom I love in the truth. I rejoiced greatly when the brethren testified of the truth in thee. Follow not that which is evil, but that which is good. He that doeth good is of God. Demetrius hath good report of all men.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '3 John · Study Guide',
  },

  hasHebrew: false,
};
