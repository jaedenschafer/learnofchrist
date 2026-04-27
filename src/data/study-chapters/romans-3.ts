import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Romans 3 — All Have Sinned; All Are Justified by Grace
 *
 * Paul closes the case against humanity. All have sinned. Jew and Gentile
 * stand on equal ground before God—equally guilty, equally in need of
 * redemption. Yet the good news breaks through: being justified freely by
 * His grace through the redemption that is in Christ Jesus. This is the
 * pivot point of Paul&apos;s theology.
 */
export const ROMANS_3: RichChapterContent = {
  bookSlug: 'romans',
  bookName: 'Romans',
  chapter: 3,

  intros: [
    'Paul has systematically dismantled every human excuse. The Gentile cannot claim ignorance—creation testifies to God. The Jew cannot claim privilege—the law judges him as well. Now Paul closes the argument. All have sinned. All fall short of God&apos;s glory. There is no one righteous, not one. This verdict is not harsh injustice. It is the necessary truth upon which redemption is built.',
    'But the darkness of Romans 3 makes way for the light that is Romans 3. In the middle of this chapter, the gospel erupts. God has provided redemption through the blood of Christ, offered as an atonement. Those who believe are justified freely by grace—declared righteous not on the basis of their works but on the basis of what Christ has done. The law is not abolished. It stands as a mirror. But faith in Christ accomplishes what the law could never do: it restores man to right standing with God.',
  ],

  sections: [
    /* ─── Romans 3:19–28 — All Sinned; Justified by Grace ────────────────── */
    {
      ref: 'Romans 3:19–28',
      title: 'Universal Sin and Universal Grace',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(23, 'For all have sinned, and come short of the glory of God;'),
            plain(24, 'Being justified freely by his grace through the redemption that is in Christ Jesus:'),
            plain(25, 'Whom God hath set forth to be a propitiation through faith in his blood, to declare his righteousness: for the remission of sins that are past, through the forbearance of God;'),
            plain(26, 'To declare, I say, at this time his righteousness: that he might be just, and the justifier of him which believeth in Jesus.'),
            plain(28, 'Therefore we conclude that a man is justified by faith, without the deeds of the law.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom3-all-sinned',
          html:
            '"All have sinned, and come short of the glory of God." This is not a statement of doctrine alone. It is a declaration of universal human condition. Every person who has lived—except Christ—has at some point chosen their own will over God&apos;s. The Greek word for "come short" (hustereo) literally means to fall behind, to miss the mark. Sin is not merely breaking a rule. It is falling short of what we are made to be.',
        },
        {
          kind: 'greek',
          id: 'rom3-doxa',
          title: 'Doxa — Glory',
          script: 'δόξα',
          translit: '<strong>Doxa</strong> · glory; honor; splendor; manifest excellence',
          description:
            'The glory of God is His infinite goodness made visible. To fall short of God&apos;s glory means to fail to reflect that goodness, to miss the radiance we were made to bear. We are created in God&apos;s image, meant to shine with His light. Sin dims that light. The fall short is a corruption of our true nature.',
        },
        {
          kind: 'commentary',
          id: 'rom3-grace',
          html:
            '"Being justified freely by his grace through the redemption that is in Christ Jesus." The word "freely" (dorean) means without cause or deserving. Grace is God&apos;s unmerited favor. Justification is His declaration that despite our sin, we are now righteous in His sight—not because we have earned it, but because Christ has satisfied what justice requires.',
        },
        {
          kind: 'greek',
          id: 'rom3-hilasterion',
          title: 'Hilasterion — Propitiation',
          script: 'ἱλαστήριον',
          translit: '<strong>Hilasterion</strong> · propitiation; atoning sacrifice; mercy seat',
          description:
            'The hilasterion is the place where God&apos;s mercy and justice meet—originally the mercy seat of the ark, where the high priest sprinkled blood on the Day of Atonement. Christ Himself is the hilasterion, the place where God&apos;s wrath against sin is satisfied and His mercy is revealed.',
        },
        {
          kind: 'christ',
          id: 'rom3-christ-redemption',
          title: 'Christ Connection — The Price Paid',
          html:
            'Jesus Christ is the redemption. The Greek word (apolytrosis) means liberation or release at a price. We are held captive by sin and death. Christ pays the price—His own blood—to set us free. This is not metaphor. This is the transaction of salvation itself.',
        },
        {
          kind: 'carry',
          html:
            'When you understand that you have sinned—that you have fallen short of God&apos;s glory—you stand at the door of grace. The gospel is not that you are better than you thought. It is that you are worse than you imagined, and that God loves you anyway. Not because of what you have done, but because of what Christ has done. This overturns everything we naturally believe about worth and belonging.',
        },
        {
          kind: 'reflection',
          id: 'rom3-unmerited',
          prompt: 'What does it mean that you are justified freely, without deserving it? How does living in the reality of unmerited grace change the way you relate to God?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'All have sinned, and come short of the glory of God; Being justified freely by his grace through the redemption that is in Christ Jesus. A man is justified by faith, without the deeds of the law.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Romans 3 · Study Guide',
  },

  hasHebrew: false,
};
