import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Philippians 2 — Let This Mind Be in You; Christ's Humiliation and Exaltation
 *
 * "Let this mind be in you, which was also in Christ Jesus: who, being in the
 * form of God, thought it not robbery to be equal with God: but made himself
 * of no reputation, and took upon him the form of a servant..." This chapter
 * presents perhaps the most profound Christological passage in Scripture. Christ
 * emptied Himself. And in that self-emptying, He revealed the nature of God.
 */
export const PHILIPPIANS_2: RichChapterContent = {
  bookSlug: 'philippians',
  bookName: 'Philippians',
  chapter: 2,

  intros: [
    'Philippians 2 opens with an appeal: resolve disputes, cultivate humility, regard others as better than yourselves. Then Paul offers the reason—the ultimate example. Christ. And what is the shape of Christ&apos;s example? Radical humiliation. He who was equal with God became a servant. He who deserved all honor became nothing.',
    'But the passage does not end in humiliation. It ascends. After the cross comes the resurrection. After the grave comes exaltation. "Every knee should bow...every tongue should confess that Jesus Christ is Lord." The self-emptying is vindicated. The lowest point becomes the highest. This is the logic of the kingdom.',
  ],

  bottomShare: {
    label: 'Share Philippians 2',
    quote:
      'Let this mind be in you which was in Christ Jesus. He humbled Himself, taking the form of a servant. God exalted Him, and every knee shall bow, confessing He is Lord.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Philippians 2 · Study Guide',
  },

  sections: [
    /* ─── Philippians 2:1–11 — The Mind of Christ; Humiliation and Exaltation ─ */
    {
      ref: 'Philippians 2:1–11',
      title: 'Christ\'s Descent and Ascent',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 5,
              spans: [
                t('Let '),
                hp('this mind be in you, which was also in Christ Jesus', 'p2-mind'),
                t(':'),
              ],
            },
            {
              number: 6,
              spans: [
                t('Who, being in the form of God, thought it not robbery to be equal with God:'),
              ],
            },
            {
              number: 7,
              spans: [
                t('But '),
                hg('made himself of no reputation, and took upon him the form of a servant', 'p2-servant'),
                t(', and was made in the likeness of men:'),
              ],
            },
            plain(8, 'And being found in fashion as a man, he humbled himself, and became obedient unto death, even the death of the cross.'),
            {
              number: 9,
              spans: [
                t('Wherefore God also hath highly exalted him, and given him a name which is above every name:'),
              ],
            },
            {
              number: 10,
              spans: [
                t('That at the name of Jesus '),
                hy('every knee should bow', 'p2-knee'),
                t(', of things in heaven, and things in earth, and things under the earth;'),
              ],
            },
            plain(11, 'And that every tongue should confess that Jesus Christ is Lord, to the glory of God the Father.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'p2-mind',
          html:
            '"Let this mind be in you, which was also in Christ Jesus." Paul calls believers to adopt a mindset—a way of seeing the world that is shaped by Christ&apos;s example. What was Christ&apos;s mind? What was He thinking as He made His choices? It is this that believers are called to echo.',
        },
        {
          kind: 'commentary',
          id: 'p2-servant',
          html:
            '"Made himself of no reputation, and took upon him the form of a servant." Christ did not cling to equality with God. He emptied Himself. The Greek is "ekenosen"—He poured Himself out, voided Himself. This is the radical nature of the incarnation. The infinite became finite. The eternal entered time. The almighty became a servant.',
        },
        {
          kind: 'commentary',
          id: 'p2-knee',
          html:
            '"Every knee should bow...every tongue should confess that Jesus Christ is Lord." The passage moves from descent to ascent. The self-emptying is not the end. It is vindicated by resurrection and exaltation. The lowest point becomes the occasion for universal acknowledgment of His lordship.',
        },
        {
          kind: 'greek',
          id: 'p2-kenosis',
          title: 'Kenosis — "Emptied" or "Made of No Reputation"',
          script: 'κένωσις',
          translit: '<strong>Kenosis</strong> · emptying; self-emptying; making oneself of no reputation',
          description:
            'The doctrine of kenosis flows from this passage. Christ emptied Himself—not of His divine nature, but of His divine privileges. He chose to limit Himself, to humble Himself, to become dependent on the Father. This is the shape of self-giving love.',
        },
        {
          kind: 'christ',
          id: 'p2-christ-pattern',
          title: 'Christ Connection — The Pattern of Redemption',
          html:
            'Christ&apos;s descent and ascent is the pattern of all redemption. Death leads to life. Loss leads to gain. Humiliation leads to exaltation. Believers follow this same path: "Death is swallowed up in victory" (1 Corinthians 15:54). The crucifixion is not the tragedy that looks like the end of the story. It is the redemptive act that transforms all of reality.',
        },
        {
          kind: 'carry',
          html:
            'You are called to let this mind be in you. Not to cling to your advantages or your rights. But to empty yourself, to serve, to give. This runs counter to the world&apos;s logic of advancement and self-promotion. But it is the logic of the kingdom. And it is not a call to defeat. It is a call to redemption.',
        },
        {
          kind: 'reflection',
          id: 'p2-mind-reflect',
          prompt: 'What would it look like to let the mind of Christ—humility, self-emptying, service—shape your decisions and relationships?',
        },
      ],
    },

    /* ─── Philippians 2:12–18 — Work Out Your Salvation; Shine as Lights ────── */
    {
      ref: 'Philippians 2:12–18',
      title: 'Work Out What God Works In',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 12,
              spans: [
                t('Wherefore, my beloved, as ye have always obeyed, not as in my presence only, but now much more in my absence, '),
                hp('work out your own salvation with fear and trembling', 'p2-work'),
                t('.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('For it is God which '),
                hg('worketh in you both to will and to do of his good pleasure', 'p2-god-work'),
                t('.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('Do all things without murmurings and disputings:'),
              ],
            },
            {
              number: 15,
              spans: [
                t('That ye may be blameless and harmless, the sons of God, without rebuke, in the midst of a crooked and perverse nation, among whom ye '),
                hy('shine as lights in the world', 'p2-lights'),
                t(';'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'p2-work',
          html:
            '"Work out your own salvation with fear and trembling." This is not salvation by works. Rather, it is the call to make real, to actualize, to live out the salvation that has been given. Fear and trembling indicate seriousness—this is not a casual endeavor.',
        },
        {
          kind: 'commentary',
          id: 'p2-god-work',
          html:
            '"For it is God which worketh in you both to will and to do of his good pleasure." The paradox: you work, yet God is also working. Your effort and God&apos;s grace are not opposed. God provides the power; you provide the response. This is the partnership of redemption.',
        },
        {
          kind: 'commentary',
          id: 'p2-lights',
          html:
            '"Ye shine as lights in the world." The world is described as "crooked and perverse." Yet believers are not to retreat from it. They are to shine. To be witnesses. To illuminate the darkness with the light of Christ.',
        },
        {
          kind: 'carry',
          html:
            'You are called to work out your salvation—to make it real in your life through obedience, service, and love. But this work is not your own burden. It is God working in you. You respond. God empowers. And as you do, you become a light in a dark world.',
        },
        {
          kind: 'reflection',
          id: 'p2-work-reflect',
          prompt: 'God is working in you to will and to do His good pleasure. What part of your salvation are you called to work out more fully?',
        },
      ],
    },
  ],
};
