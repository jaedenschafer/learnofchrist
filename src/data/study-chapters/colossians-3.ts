import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Colossians 3 — Set Your Affection on Things Above; Put Off the Old Man
 *
 * "If ye then be risen with Christ, seek those things which are above, where
 * Christ sitteth on the right hand of God. Set your affection on things above,
 * not on things on the earth." Colossians 3 moves from doctrine to ethics. If
 * you are raised with Christ, if your life is hid with Christ in God, then your
 * way of life must reflect that reality.
 */
export const COLOSSIANS_3: RichChapterContent = {
  bookSlug: 'colossians',
  bookName: 'Colossians',
  chapter: 3,

  intros: [
    'Colossians 3 opens with the indicative: "Ye are dead, and your life is hid with Christ in God." This is not aspiration; it is reality. Believers have died with Christ and are now hidden in Him. From this foundation flows the imperative: mortify your members, put off the old man, put on the new man.',
    'This is the rhythm of redemption: death and resurrection. Old life and new life. The practices Paul describes—put off anger, malice, filthy communication; put on compassion, meekness, forgiveness—are not arbitrary moral rules. They are the visible expression of the resurrection life.',
  ],

  bottomShare: {
    label: 'Share Colossians 3',
    quote:
      'You are risen with Christ. Set your affection on things above. Put off the old man with his deeds, put on the new man which is renewed in knowledge of Christ.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Colossians 3 · Study Guide',
  },

  sections: [
    /* ─── Colossians 3:1–17 — Risen with Christ; Put on the New Man ───────── */
    {
      ref: 'Colossians 3:1–17',
      title: 'Die and Rise; New Life in Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 1,
              spans: [
                t('If ye then be '),
                hp('risen with Christ, seek those things which are above', 'c3-risen'),
                t(', where Christ sitteth on the right hand of God.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Set your '),
                hg('affection on things above, not on things on the earth', 'c3-affection'),
                t('.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('For ye are dead, and your '),
                hy('life is hid with Christ in God', 'c3-hidden'),
                t('.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('But now ye also put off all these; anger, wrath, malice, blasphemy, filthy communication out of your mouth.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Lie not one to another, seeing that ye have '),
                hp('put off the old man with his deeds', 'c3-old'),
                t(';'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And have '),
                hp('put on the new man, which is renewed in knowledge after the image of him that created him', 'c3-new'),
                t(':'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c3-risen',
          html:
            '"If ye then be risen with Christ, seek those things which are above." The condition is not hypothetical. You have been raised with Christ. Therefore, seek what is above—the things of God, the things of eternity, not merely the things of time.',
        },
        {
          kind: 'commentary',
          id: 'c3-affection',
          html:
            '"Set your affection on things above, not on things on the earth." Affection means where your heart is set, what you love, what you pursue. Paul calls believers to reorient their desires toward the eternal, away from mere material accumulation.',
        },
        {
          kind: 'commentary',
          id: 'c3-hidden',
          html:
            '"Your life is hid with Christ in God." This is security. Your life is not exposed to the world&apos;s judgment. It is hidden—protected, secured—in Christ. This hiding is not escape; it is shelter.',
        },
        {
          kind: 'commentary',
          id: 'c3-old',
          html:
            '"Put off the old man with his deeds." The old man—the self shaped by sin, by the flesh, by the world—must be discarded. It is not reformed or improved. It is put off like rotted clothing.',
        },
        {
          kind: 'commentary',
          id: 'c3-new',
          html:
            '"Put on the new man, which is renewed in knowledge after the image of him that created him." The new man is Christ&apos;s image. As you put on this new self, you are being renewed in the knowledge of God. You are being conformed to the image of Christ.',
        },
        {
          kind: 'greek',
          id: 'c3-zeteo',
          title: 'Zeteo — "Seek"',
          script: 'ζητέω',
          translit: '<strong>Zeteo</strong> · to seek; to search for; to desire; to strive after',
          description:
            'To seek is not passive. It is active pursuit. When Paul says "seek those things which are above," he calls believers to actively, intentionally pursue the things of God, the things of eternity.',
        },
        {
          kind: 'christ',
          id: 'c3-christ-image',
          title: 'Christ Connection — Conformity to Christ&apos;s Image',
          html:
            'The new man is renewed "after the image of him that created him." Believers are being transformed into the image of Christ, who is the image of God. This is the goal of redemption: conformity to Christ.',
        },
        {
          kind: 'carry',
          html:
            'You have died with Christ. Your old life, your old patterns, your old identity—these are past. You are now alive in Christ, hidden with Him, seated in heavenly places. Let this reality shape your daily choices. Where your affection goes, your life will follow. Set it on things above.',
        },
        {
          kind: 'reflection',
          id: 'c3-new-reflect',
          prompt: 'You have put off the old man and put on the new. Where are you still influenced by old patterns? What are you still seeking that belongs to the old life?',
        },
      ],
    },

    /* ─── Colossians 3:12–17 — Clothe Yourselves with Compassion ───────────── */
    {
      ref: 'Colossians 3:12–17',
      title: 'The Garments of the New Life',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 12,
              spans: [
                t('Put on therefore, as the elect of God, holy and beloved, '),
                hg('bowels of mercies, kindness, humbleness of mind, meekness, longsuffering', 'c3-clothe'),
                t(';'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Forbearing one another, and forgiving one another, if any man have a quarrel against any: even as Christ forgave you, so also do ye.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And above all these things put on '),
                hy('charity, which is the bond of perfectness', 'c3-charity'),
                t('.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And let the peace of Christ rule in your hearts, to the which also ye are called in one body; and be ye thankful.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('Let the word of Christ dwell in you richly in all wisdom; teaching and admonishing one another in psalms and hymns and spiritual songs, singing with grace in your hearts to the Lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c3-clothe',
          html:
            'Paul lists the garments of the new man: compassion, kindness, humility, meekness, patience. These are not natural to the flesh. They must be "put on"—they are the dress of the redeemed.',
        },
        {
          kind: 'commentary',
          id: 'c3-charity',
          html:
            '"Charity, which is the bond of perfectness." Love is not just one virtue among others. It is the binding force that holds all other virtues together, making them complete. Without love, even good works are incomplete.',
        },
        {
          kind: 'carry',
          html:
            'You are the elect of God, holy and beloved. Therefore, clothe yourself with compassion, with kindness, with humility. These are the garments befitting your status. And over all, put on love. Let the peace of Christ rule in your heart. Let His word dwell in you richly.',
        },
        {
          kind: 'reflection',
          id: 'c3-clothe-reflect',
          prompt: 'Which of these garments do you find easiest to wear? Which do you most need to practice?',
        },
      ],
    },
  ],
};
