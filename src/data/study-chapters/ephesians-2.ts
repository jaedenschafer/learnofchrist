import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ephesians 2 — Grace, Not Works; One Body in Christ
 *
 * "By grace are ye saved through faith; and that not of yourselves: it is
 * the gift of God." This chapter contains some of Scripture's most liberating
 * words—and also some of its most practical. Paul teaches that salvation is
 * a gift, not an achievement. But it is also a gift that transforms the way
 * believers live together across the deepest divides.
 */
export const EPHESIANS_2: RichChapterContent = {
  bookSlug: 'ephesians',
  bookName: 'Ephesians',
  chapter: 2,

  intros: [
    'Ephesians 2 opens with a stark reality: before Christ, all people—Jew and Gentile alike—were dead in trespasses and sins, "by nature the children of wrath even as others." This is not a call to self-contempt. It is the necessary prelude to grace. You cannot understand grace until you understand what you were before grace.',
    'But Paul&apos;s main point is not despair. It is liberation. God has "made us alive together with Christ" and "hath raised us up together, and made us sit together in heavenly places in Christ Jesus." And in doing so, He has broken down the wall between Jew and Gentile. The cross is not just personal salvation; it is cosmic reconciliation.',
  ],

  bottomShare: {
    label: 'Share Ephesians 2',
    quote:
      'By grace are ye saved through faith. Paul teaches that salvation is a gift from God, not earned by works—and this grace is what makes one new creation, at peace with God and with one another.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ephesians 2 · Study Guide',
  },

  sections: [
    /* ─── Ephesians 2:1–10 — Saved by Grace, Made Alive in Christ ─────────── */
    {
      ref: 'Ephesians 2:1–10',
      title: 'Dead Made Alive; Workmanship of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 1,
              spans: [
                t('And you hath he quickened, who were '),
                hg('dead in trespasses and sins', 'e2-dead'),
                t(';'),
              ],
            },
            plain(2, 'Wherein in time past ye walked according to the course of this world, according to the prince of the power of the air, the spirit that now worketh in the children of disobedience:'),
            plain(4, 'But God, who is rich in mercy, for his great love wherewith he loved us,'),
            {
              number: 5,
              spans: [
                t('Even when we were '),
                hp('dead in sins', 'e2-mercy'),
                t(', hath quickened us together with Christ, (by grace ye are saved;)'),
              ],
            },
            plain(6, 'And hath raised us up together, and made us sit together in heavenly places in Christ Jesus:'),
            {
              number: 8,
              spans: [
                t('For by grace are ye '),
                hp('saved through faith', 'e2-grace'),
                t('; and that not of yourselves: it is the gift of God:'),
              ],
            },
            plain(9, 'Not of works, lest any man should boast.'),
            {
              number: 10,
              spans: [
                t('For we are his '),
                hg('workmanship, created in Christ Jesus unto good works', 'e2-workmanship'),
                t(', which God hath before ordained that we should walk in them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'e2-dead',
          html:
            'Paul describes the human condition before Christ as "dead in trespasses and sins." This is not exaggeration. Spiritual death is real—a separation from God, a bondage to the patterns of a world turned away from Him. Yet Paul does not dwell on guilt or shame. The point is what comes next: God "quickened" the dead.',
        },
        {
          kind: 'commentary',
          id: 'e2-mercy',
          html:
            'The conjunction "But God" turns the entire passage. While humans were dead, God acted. "But God, who is rich in mercy, for his great love wherewith he loved us, even when we were dead in sins, hath quickened us together with Christ." God&apos;s love did not wait for humans to become worthy. It acted in their unworthiness.',
        },
        {
          kind: 'commentary',
          id: 'e2-grace',
          html:
            '"By grace are ye saved through faith; and that not of yourselves: it is the gift of God: not of works, lest any man should boast." Salvation is not a human achievement. It is a gift. Faith is the means by which it is received, but even faith is not a work that earns salvation—it is the receptivity to grace already given.',
        },
        {
          kind: 'commentary',
          id: 'e2-workmanship',
          html:
            '"We are his workmanship, created in Christ Jesus unto good works." Salvation is not the end but the beginning. The one saved is God&apos;s "workmanship"—his craftwork, his creation. And the purpose of this creation is "good works, which God hath before ordained that we should walk in them." Works follow salvation; they do not precede or earn it.',
        },
        {
          kind: 'greek',
          id: 'e2-satheo',
          title: 'Sotiria — "Salvation"',
          script: 'σωτηρία',
          translit: '<strong>Sotiria</strong> · salvation; deliverance; wholeness; safety',
          description:
            'The Greek carries the sense of being saved from danger, brought into safety. Spiritual salvation means deliverance from the death and separation that sin brings, and entry into life with God. In Paul&apos;s teaching, this is not a future hope alone but a present reality—believers are already made alive with Christ.',
        },
        {
          kind: 'christ',
          id: 'e2-christ-reconcile',
          title: 'Christ Connection — The Reconciler Who Unites',
          html:
            'The passage says believers are "quickened together with Christ" and "made to sit together in heavenly places in Christ Jesus." Jesus is not merely an example or a teacher—He is the one whose life becomes the believer&apos;s life. To be in Christ is to share in His resurrection, His exaltation, His place in God&apos;s presence. This is union, not mere forgiveness.',
        },
        {
          kind: 'carry',
          html:
            'You cannot earn your way to God. This is the heart of Paul&apos;s message. Boasting is excluded. But you have been called to good works. Not to prove your worth or to earn favor, but because you have been made alive, created anew, fitted into God&apos;s purposes. Your works flow from your salvation; they do not produce it. What works has God ordained for you?',
        },
        {
          kind: 'reflection',
          id: 'e2-grace-reflect',
          prompt: 'You are saved by grace, not by works. What does it mean to accept this gift without trying to earn it? How does this change what you do with your life?',
        },
      ],
    },

    /* ─── Ephesians 2:11–22 — One Body; Hostility Abolished ────────────────── */
    {
      ref: 'Ephesians 2:11–22',
      title: 'The Breaking Down of the Wall',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(14, 'For he is our peace, who hath made both one, and hath broken down the middle wall of partition between us;'),
            {
              number: 15,
              spans: [
                t('Having abolished in his flesh the enmity, even the law of commandments contained in ordinances; for to make in himself of twain one new man, so making '),
                hp('peace', 'e2-peace'),
                t(';'),
              ],
            },
            plain(16, 'And that he might reconcile both unto God in one body by the cross, having slain the enmity thereby:'),
            {
              number: 17,
              spans: [
                t('And came and preached '),
                hg('peace to you which were afar off', 'e2-afar'),
                t(', and to them that were nigh.'),
              ],
            },
            plain(18, 'For through him we both have access by one Spirit unto the Father.'),
            {
              number: 19,
              spans: [
                t('Now therefore ye are no more strangers and foreigners, but '),
                hy('fellowcitizens with the saints', 'e2-citizens'),
                t(', and of the household of God;'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And are built upon the foundation of the apostles and prophets, Jesus Christ himself being the chief corner stone;'),
              ],
            },
            plain(21, 'In whom all the building fitly framed together groweth unto an holy temple in the Lord:'),
            {
              number: 22,
              spans: [
                t('In whom ye also are builded together for an '),
                hp('habitation of God through the Spirit', 'e2-habitation'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'e2-peace',
          html:
            '"He is our peace, who hath made both one, and hath broken down the middle wall of partition between us." The wall Paul has in mind is the historical partition between Jew and Gentile—the boundary that rendered Gentiles unclean, outside the covenant. But Christ did not preserve that boundary. He abolished it, making "of twain one new man."',
        },
        {
          kind: 'commentary',
          id: 'e2-afar',
          html:
            'Gentiles were "afar off"—far from God, far from the covenant, far from the promises given to Israel. But Christ "came and preached peace" to them. This is not a secondary narrative. This is the central claim: the gospel reaches those who were estranged and brings them into the family.',
        },
        {
          kind: 'commentary',
          id: 'e2-citizens',
          html:
            '"Ye are no more strangers and foreigners, but fellowcitizens with the saints, and of the household of God." The language of citizenship and household captures what Paul means: Gentiles are not second-class members. They have full standing, full belonging in God&apos;s people.',
        },
        {
          kind: 'commentary',
          id: 'e2-habitation',
          html:
            'The passage concludes with a stunning image: believers are "builded together for an habitation of God through the Spirit." The temple is no longer a physical building. It is the living community of those who have been reconciled to God and to each other. God dwells where His people are unified.',
        },
        {
          kind: 'greek',
          id: 'e2-irene',
          title: 'Eirene — "Peace"',
          script: 'εἰρήνη',
          translit: '<strong>Eirene</strong> · peace; wholeness; reconciliation; harmony',
          description:
            'Greek "eirene" is not merely the absence of conflict. It is a state of wholeness, of right relationship. When Paul says Christ "is our peace," he means that Christ&apos;s work restores what was broken—reconciliation between God and humanity, and between Jew and Gentile.',
        },
        {
          kind: 'carry',
          html:
            'The cross is not just personal salvation for you. It is cosmic reconciliation. It breaks down barriers that have stood for centuries—the wall between Jew and Gentile, between the near and the far. If Christ has made you one with those you once considered strangers, what barriers do you need to let Him break down in your own heart?',
        },
        {
          kind: 'reflection',
          id: 'e2-barrier-reflect',
          prompt: 'Christ abolished the wall between Jew and Gentile. What barriers stand in your life? Where is He calling you to reconciliation and peace?',
        },
      ],
    },
  ],
};
