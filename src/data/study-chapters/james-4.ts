import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * James 4 — Submission & Resistance
 *
 * James exposes the root of conflict: desires at war within us. Those lusts that
 * wage war in our members cry out for satisfaction, yet asking amiss, we do not
 * receive. The path to peace is surrender: submit to God, resist the devil, and he
 * will flee. Draw nigh to God, and he will draw nigh to you. Humble yourself, and
 * the Lord will exalt you.
 */
export const JAMES_4: RichChapterContent = {
  bookSlug: 'james',
  bookName: 'James',
  chapter: 4,

  intros: [
    'James moves from speech to action, from the tongue to the heart from which it flows. Where do conflicts in the church arise? From desires—lust for wealth, for status, for power. These desires wage war in the members of the body, breaking fellowship, creating faction. The solution is not to manage conflict externally but to address the desires that fuel it.',
    'He then calls for submission to God and resistance to the devil. This is not a call to become passive, but to become actively aligned with God&apos;s purposes. When we submit to Him and resist the enemy, the enemy flees. When we draw near to God, He draws near to us. The Christian life is not a balance between God&apos;s power and human effort. It is an absolute submission that paradoxically produces the strongest resistance to evil.',
  ],

  sections: [
    /* ─── James 4:1–10 — Desires & Submission ──────────────────────────── */
    {
      ref: 'James 4:1–10',
      title: 'War Within, Peace Through Surrender',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(1, 'From whence come wars and fightings among you? come they not hence, even of your lusts that war in your members?'),
            plain(2, 'Ye lust, and have not: ye kill, and desire to have, and cannot obtain: ye fight and war, yet ye have not, because ye ask not.'),
            plain(4, 'Know ye not that the friendship of the world is enmity with God? whosoever therefore will be a friend of the world is the enemy of God.'),
            plain(7, 'Submit yourselves therefore to God. Resist the devil, and he will flee from you.'),
            plain(8, 'Draw nigh to God, and he will draw nigh to you. Cleanse your hands, ye sinners; and purify your hearts, ye double minded.'),
            plain(10, 'Humble yourselves in the sight of the Lord, and he shall lift you up.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jam4-desires',
          html:
            'James asks a penetrating question: Where do wars and fightings come from? The answer is within. They come from desires that war in our own members. We want what we do not have. We covet status, wealth, recognition. Rather than asking God, we grasp for these things ourselves. Rather than submit to God&apos;s abundance, we hoard and compete.',
        },
        {
          kind: 'greek',
          id: 'jam4-epithumia',
          title: 'Epithumia — Desire',
          script: 'ἐπιθυμία',
          translit: '<strong>Epithumia</strong> · desire; lust; craving; what the heart yearns for',
          description:
            'Desire itself is not sinful. We are called to hunger and thirst for righteousness. But epithumia refers to desires gone awry—the craving for what does not belong to us, the hunger for things that corrupt. Such desires wage war, creating internal conflict that inevitably expresses itself in outward strife.',
        },
        {
          kind: 'commentary',
          id: 'jam4-submit-resist',
          html:
            'The paradox of the Christian life is here: submit yourselves to God, and resist the devil. Submission and resistance are not opposites. They are two sides of the same coin. When we submit to God—when we yield to His authority, His purposes, His lordship—we become strengthened against the enemy. He will flee. Submission to God is the greatest strength.',
        },
        {
          kind: 'christ',
          id: 'jam4-christ-submission',
          title: 'Christ Connection — Obedience unto Death',
          html:
            'Jesus exemplified this mystery perfectly. "Not my will, but thine, be done," he prayed in Gethsemane. His submission to the Father&apos;s will was absolute. Yet in that submission, he defeated death itself, conquered the devil, rose in power. Submission to God is not weakness. It is the path to unshakeable authority.',
        },
        {
          kind: 'carry',
          html:
            'The call is to draw near to God. This is not distant reverence but intimate approach. As we do, He draws near to us. We are to cleanse our hands and purify our hearts—turn from the double-mindedness that tries to serve both God and the world. God calls us to a whole-hearted devotion.',
        },
        {
          kind: 'reflection',
          id: 'jam4-submit',
          prompt: 'What is one area of your life where you struggle to submit to God? What would it look like to truly surrender there?',
        },
      ],
    },

    /* ─── James 4:11–17 — Speech & Presumption ──────────────────────────── */
    {
      ref: 'James 4:11–17',
      title: 'Judgment & Obedience',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(11, 'Speak not evil one of another, brethren. He that speaketh evil of his brother, and judgeth his brother, speaketh evil of the law, and judgeth the law: but if thou judgest the law, thou art not a doer of the law, but a judge.'),
            plain(14, 'For what is your life? It is even a vapour, that appeareth for a little time, and then vanisheth away.'),
            plain(15, 'For that ye ought to say, If the Lord will, we shall live, and do this, or that.'),
            plain(16, 'But now ye glory in your boastings: all such rejoicing is evil.'),
            plain(17, 'Therefore to him that knoweth to do good, and doeth it not, to him it is sin.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jam4-evil-speech',
          html:
            'James returns to the tongue. To speak evil of another is to judge him, to claim authority over him that belongs to God alone. When we judge the law—when we decide it does not apply to us or to others—we exalt ourselves above it. But the law comes from God. To judge the law is to judge God.',
        },
        {
          kind: 'greek',
          id: 'jam4-atmos',
          title: 'Atmos — Vapor',
          script: 'ἀτμός',
          translit: '<strong>Atmos</strong> · vapor; mist; something fleeting and insubstantial',
          description:
            'Life is not a solid thing we possess and control. It is vapor—present one moment, vanished the next. This truth should transform how we speak about others, how we make plans, how we boast. We are not the masters of our own destinies.',
        },
        {
          kind: 'commentary',
          id: 'jam4-lord-will',
          html:
            'The phrase "if the Lord will" was common in the early church and even today among Christians. It acknowledges our dependence on God. We make our plans, yes, but they are subject to God&apos;s will. To boast as if our future is guaranteed, as if we control outcomes, is to forget our place in God&apos;s creation.',
        },
        {
          kind: 'christ',
          id: 'jam4-christ-obedience',
          title: 'Christ Connection — Knowing & Doing',
          html:
            'Jesus lived with perfect awareness that He came to do the Father&apos;s will. He acted with intention, yet always submitted to the Father&apos;s timing and purposes. For us, to know good and not do it is sin. Knowledge without obedience is hypocrisy. Christ calls us to be doers, not merely knowers.',
        },
        {
          kind: 'carry',
          html:
            'The chapter closes with a stark truth: to know to do good and not do it is sin. This reverses how we often think. We focus on active sins—things we do wrong. But James reminds us that omission is equally sin. If we know the good we ought to do—the kindness, the generosity, the reconciliation—and we withhold it, we sin against God and against those we could have blessed.',
        },
        {
          kind: 'reflection',
          id: 'jam4-good',
          prompt: 'What good do you know you ought to do but are withholding? What would it mean to do it?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'From whence come wars and fightings among you? Submit yourselves therefore to God. Resist the devil, and he will flee from you. Draw nigh to God, and he will draw nigh to you. Humble yourselves in the sight of the Lord, and he shall lift you up.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'James 4 · Study Guide',
  },

  hasHebrew: false,
};
