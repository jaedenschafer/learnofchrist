import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Romans 12 — Living Sacrifice
 *
 * "Present your bodies a living sacrifice, holy, acceptable unto God, which
 * is your reasonable service." Be not conformed to this world; be transformed
 * by the renewing of your mind. Spiritual gifts. Overcome evil with good.
 */
export const ROMANS_12: RichChapterContent = {
  bookSlug: 'romans',
  bookName: 'Romans',
  chapter: 12,

  intros: [
    'Having established justification by faith and God&apos;s purpose for both Jews and Gentiles, Paul now turns to the practical life of faith. The theology of Romans 1-11 is not abstract. It calls for transformation. "Present your bodies a living sacrifice." Your physical self, your daily choices, your presence in the world—all of it is an offering to God.',
    'Romans 12 is the bridge between doctrine and discipleship. The mercies of God demand a response. That response is not merely internal sentiment. It is embodied, concrete, visible. You are transformed by the renewing of your mind. You use spiritual gifts in service of others. You overcome evil not with more evil but with good.',
  ],

  sections: [
    /* ─── Romans 12:1–8 — Living Sacrifice and Spiritual Gifts ──────────── */
    {
      ref: 'Romans 12:1–8',
      title: 'A Living Sacrifice',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(1, 'I beseech you therefore, brethren, by the mercies of God, that ye present your bodies a living sacrifice, holy, acceptable unto God, which is your reasonable service.'),
            plain(2, 'And be not conformed to this world: but be ye transformed by the renewing of your mind, that ye may prove what is that good, and acceptable, and perfect, will of God.'),
            plain(3, 'For I say, through the grace given unto me, to every man that is among you, not to think of himself more highly than he ought to think; but to think soberly, according as God hath dealt to every man the measure of faith.'),
            plain(6, 'Having then gifts differing according to the grace that is given to us, let us use them: if prophecy, let us prophesy according to the proportion of faith;'),
            plain(8, 'Or he that exhorteth, on exhortation: he that giveth, let him do it with liberality; he that ruleth, with diligence; he that sheweth mercy, with cheerfulness.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom12-bodies',
          html:
            '"Present your bodies a living sacrifice." In the Old Testament, sacrifice was an animal brought to the altar and killed. Paul redefines sacrifice: it is your body, alive, given to God. Not a moment of dedication but an ongoing offering—the daily surrender of your will to His will.',
        },
        {
          kind: 'greek',
          id: 'rom12-soma',
          title: 'Soma — Body',
          script: 'σῶμα',
          translit: '<strong>Soma</strong> · body; physical form; the self as embodied',
          description:
            'Soma is not the prison of the soul. It is the instrument through which the soul acts in the world. To present your soma to God is to make your physical presence, your actual choices in time and space, an offering.',
        },
        {
          kind: 'commentary',
          id: 'rom12-renewed-mind',
          html:
            '"Be ye transformed by the renewing of your mind." Transformation does not come from suppressing the body or denying the world. It comes from a renewed mind—thinking differently about God, about yourself, about what matters. When your thoughts change, your choices change.',
        },
        {
          kind: 'greek',
          id: 'rom12-metamorphoo',
          title: 'Metamorphoo — Transform',
          script: 'μεταμορφόω',
          translit: '<strong>Metamorphoo</strong> · transform; transfigure; change in form',
          description:
            'Metamorphoo is a radical change of form, not surface adjustment. It is the same word used for Jesus&apos; transfiguration. Transformation in Christ is a fundamental reshaping of who you are.',
        },
        {
          kind: 'christ',
          id: 'rom12-christ-gift',
          title: 'Christ Connection — Gifts Through Grace',
          html:
            'Each spiritual gift is a manifestation of grace. Christ distributes the gifts through His Spirit. Your gift is not your possession to hoard. It is Christ working through you to build up the body.',
        },
        {
          kind: 'carry',
          html:
            'Do not think more highly of yourself than you ought. But do not think less, either. You have been given grace and a measure of faith. You have gifts. Use them. The world does not need your false humility. It needs your actual service.',
        },
        {
          kind: 'reflection',
          id: 'rom12-gift',
          prompt: 'What gifts has God given you? How are you currently using them in service of others? Where are you tempted to keep them hidden?',
        },
      ],
    },

    /* ─── Romans 12:9–21 — Love and Nonretaliation ────────────────────────── */
    {
      ref: 'Romans 12:9–21',
      title: 'Love and Overcoming Evil',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(9, 'Let love be without dissimulation. Abhor that which is evil; cleave to that which is good.'),
            plain(14, 'Bless them which persecute you: bless, and curse not.'),
            plain(15, 'Rejoice with them that do rejoice, and weep with them that weep.'),
            plain(17, 'Recompense to no man evil for evil. Provide things honest in the sight of all men.'),
            plain(19, 'Dearly beloved, avenge not yourselves, but rather give place unto wrath: for it is written, Vengeance is mine; I will repay, saith the Lord.'),
            plain(21, 'Be not overcome of evil: but overcome evil with good.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rom12-love-genuine',
          html:
            '"Let love be without dissimulation." Love is not a feeling you sometimes have. It is a commitment to the good of another, made real in action. Dissimulation is pretense, playing a part. Genuine love cannot hide. It shows itself in concrete choices.',
        },
        {
          kind: 'greek',
          id: 'rom12-agape-anupokritos',
          title: 'Anupokritos — Without Pretense',
          script: 'ἀνυπόκριτος',
          translit: '<strong>Anupokritos</strong> · unfeigned; sincere; without pretense',
          description:
            'Love that is anupokritos is not a mask. It is the honest expression of genuine care for the other. It cannot be faked. Either it is real or it is not.',
        },
        {
          kind: 'commentary',
          id: 'rom12-bless',
          html:
            '"Bless them which persecute you: bless, and curse not." This is radical. Not defend yourself, not withdraw, not retaliate. Bless. Pray for good on the head of those who would harm you. This is possible only when you have been transformed by Christ.',
        },
        {
          kind: 'commentary',
          id: 'rom12-evil-good',
          html:
            '"Be not overcome of evil: but overcome evil with good." The world&apos;s way is to answer evil with greater evil, to match force with force. But this only multiplies evil. Christ&apos;s way—the only winning way—is to break the cycle with goodness. Let good have the last word.',
        },
        {
          kind: 'christ',
          id: 'rom12-christ-nonretaliation',
          title: 'Christ Connection — The Cross as Non-Retaliation',
          html:
            'Christ was crucified unjustly, yet He did not curse His killers. Instead, He prayed for them. His cross is the ultimate victory over evil—not through violence but through sacrifice, through bearing the wrong and returning good.',
        },
        {
          kind: 'carry',
          html:
            'When someone wrongs you, your first instinct will be to defend, to retaliate, to make them see their fault. Resist it. Bless instead. This is not weakness. This is the hardest strength—the strength to overcome evil with good. In doing this, you imitate Christ.',
        },
        {
          kind: 'reflection',
          id: 'rom12-overcome',
          prompt: 'Who has wronged you, and you are still tempted to retaliate or harbor resentment? What would it look like to truly bless them and overcome that evil with good?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Present your bodies a living sacrifice, holy, acceptable unto God. Be not conformed to this world; be transformed by the renewing of your mind. Bless them that persecute you. Overcome evil with good.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Romans 12 · Study Guide',
  },

  hasHebrew: false,
};
