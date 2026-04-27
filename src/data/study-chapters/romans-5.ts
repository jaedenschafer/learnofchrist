import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Romans 5 — Peace with God and the Love of Christ
 *
 * Therefore being justified by faith, we have peace with God through Jesus
 * Christ. Suffering becomes testimony. God&apos;s love is commended toward us in
 * that while we were yet sinners, Christ died for us. Through Adam came sin
 * and death; through Christ comes righteousness and life.
 */
export const ROMANS_5: RichChapterContent = {
  bookSlug: 'romans',
  bookName: 'Romans',
  chapter: 5,

  intros: [
    'The declaration of justified faith leads to a profound conclusion: we have peace with God. Not peace with ourselves—that is often a work of time. But peace with God. The enmity is ended. We are no longer at odds with the source of all being. This peace is won through Jesus Christ, through His blood, through the surrender of His life.',
    'Romans 5 is the hymn of salvation. Paul celebrates the love of God poured out even while we were sinners. He contrasts Adam and Christ—through Adam sin and death entered the world; through Christ righteousness and life are made available to all. The grace of Christ abounds much more than the offense of Adam. Where sin has abounded, grace has much more abounded.',
  ],

  sections: [
    /* ─── Romans 5:1–11 — Peace and the Love of God ────────────────────── */
    {
      ref: 'Romans 5:1–11',
      title: 'Peace Through Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(1, 'Therefore being justified by faith, we have peace with God through Jesus Christ our Lord:'),
            plain(3, 'And not only so, but we glory in tribulations also: knowing that tribulation worketh patience;'),
            plain(5, 'And hope maketh not ashamed; because the love of God is shed abroad in our hearts by the Holy Ghost which is given unto us.'),
            plain(8, 'But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us.'),
            plain(9, 'Much more then, being now justified by his blood, shall we be saved from wrath through him.'),
            plain(10, 'For if, when we were enemies, we were reconciled to God by the death of his Son, much more, being reconciled, we shall be saved by his life.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom5-peace',
          html:
            '"Therefore being justified by faith, we have peace with God through Jesus Christ our Lord." The word "therefore" ties this to what came before. Because we are justified by faith, not by works, we are at peace. We are not constantly earning, constantly striving to be acceptable. We are accepted. This is the basis of peace.',
        },
        {
          kind: 'greek',
          id: 'rom5-eirene',
          title: 'Eirene — Peace',
          script: 'εἰρήνη',
          translit: '<strong>Eirene</strong> · peace; wholeness; right relationship',
          description:
            'Eirene is not the absence of conflict. It is a state of right relationship, of wholeness. In Hebrew, shalom. Peace with God means the end of alienation, the restoration of the relationship for which we are made. All other peace flows from this.',
        },
        {
          kind: 'commentary',
          id: 'rom5-love',
          html:
            '"But God commendeth his love toward us, in that, while we were yet sinners, Christ died for us." The Greek word for "commendeth" (sunistemi) literally means to stand together, to prove, to demonstrate. God proves His love not by waiting for us to become worthy but by giving Christ while we were yet sinners—weak, guilty, hostile to Him.',
        },
        {
          kind: 'greek',
          id: 'rom5-agape',
          title: 'Agape — Love',
          script: 'ἀγάπη',
          translit: '<strong>Agape</strong> · love; self-giving; covenant love; divine love',
          description:
            'Agape is not sentimental affection. It is love that acts, that sacrifices, that gives itself away. God&apos;s love for us is not based on our merit. It is based on His character. He is love, and love gives itself.',
        },
        {
          kind: 'christ',
          id: 'rom5-christ-love',
          title: 'Christ Connection — Love Demonstrated',
          html:
            'The death of Christ is God&apos;s love made visible. Not abstract principle but blood spilled, breath ceased, a human body given up. In Christ, God demonstrates that His love is willing to pay the ultimate price.',
        },
        {
          kind: 'carry',
          html:
            'Paul says we can glory in tribulations—not that they are good, but that they work something in us. Suffering teaches us that we cannot trust ourselves. We learn patience—the capacity to endure, to keep trusting even when we do not see deliverance. This is how love becomes not an idea but lived reality in our hearts.',
        },
        {
          kind: 'reflection',
          id: 'rom5-suffering',
          prompt: 'When have you experienced God&apos;s love most clearly in a time of trial? What did suffering teach you about trusting Him?',
        },
      ],
    },

    /* ─── Romans 5:12–21 — Adam and Christ ───────────────────────────────── */
    {
      ref: 'Romans 5:12–21',
      title: 'The Two Adams',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(12, 'Wherefore, as by one man sin entered into the world, and death by sin; and so death passed upon all men, for that all have sinned:'),
            plain(15, 'But not as the offence, so also is the free gift. For if through the offence of one many be dead, much more the grace of God, and the gift by grace, which is by one man, Jesus Christ, hath abounded unto many.'),
            plain(17, 'For if by one man&apos;s offence death reigned by one; much more they which receive abundance of grace and of the gift of righteousness shall reign in life by one, Jesus Christ;)'),
            plain(19, 'For as by one man&apos;s disobedience many were made sinners, so by the obedience of one shall many be made righteous.'),
            plain(20, 'Moreover the law entered, that the offence might abound. But where sin abounded, grace did much more abound:'),
            plain(21, 'That as sin hath reigned unto death, even so might grace reign through righteousness unto eternal life by Jesus Christ our Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom5-adam',
          html:
            'Paul traces sin and death back to Adam&apos;s transgression. "By one man sin entered into the world, and death by sin." Adam&apos;s refusal to obey set in motion the pattern for all human disobedience. Death became the wage, the inevitable result of rebellion against the God of life.',
        },
        {
          kind: 'greek',
          id: 'rom5-paraptoma',
          title: 'Paraptoma — Trespass/Offense',
          script: 'παράπτωμα',
          translit: '<strong>Paraptoma</strong> · trespass; transgression; side-step; stumble into sin',
          description:
            'Paraptoma suggests not merely rebellion but a stumble, a step in the wrong direction. Yet even a stumble has consequence. It breaks the harmony of creation and sets in motion a pattern that touches all who come after.',
        },
        {
          kind: 'commentary',
          id: 'rom5-grace-abounds',
          html:
            '"Where sin abounded, grace did much more abound." The word "much more" (perisseu) means exceedingly, superabundantly. If sin reached far, grace reaches infinitely farther. The gift of Christ is not merely equal to the offense of Adam. It exceeds it, transcends it, makes it pale before the tide of God&apos;s mercy.',
        },
        {
          kind: 'christ',
          id: 'rom5-christ-obedience',
          title: 'Christ Connection — The Obedience That Justifies',
          html:
            'Where Adam disobeyed and brought judgment, Christ obeyed and brought justification. He offered not His will in rebellion but in complete surrender to the Father&apos;s will. That obedience—even unto death—becomes the obedience credited to all who believe.',
        },
        {
          kind: 'carry',
          html:
            'Do not let sin tell you that it has you. Paul insists that grace abounds much more than sin. The trajectory you were born into—sin and death through Adam—is not your final destiny. Grace reaches you wherever you are, in whatever sin binds you. The reign of sin can be broken by yielding to the reign of grace through Christ.',
        },
        {
          kind: 'reflection',
          id: 'rom5-reign-grace',
          prompt: 'In what area of your life does sin still seem to reign? What would it mean to let grace reign instead, even before you feel like you have changed?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Being justified by faith, we have peace with God through Jesus Christ. God commendeth his love toward us, in that, while we were yet sinners, Christ died for us. Where sin abounded, grace did much more abound.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Romans 5 · Study Guide',
  },

  hasHebrew: false,
};
