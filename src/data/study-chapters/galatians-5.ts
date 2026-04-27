import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Galatians 5 — Liberty Wherewith Christ Hath Made Us Free
 *
 * Paul calls believers to stand firm in liberty. Do not be entangled again
 * in yoke of bondage. Yet liberty is not license. The Spirit produces fruit—
 * love, joy, peace, patience, kindness. These are not the works of flesh
 * (sensuality, strife, envy) but the fruit of the Spirit.
 */
export const GALATIANS_5: RichChapterContent = {
  bookSlug: 'galatians',
  bookName: 'Galatians',
  chapter: 5,

  intros: [
    'Paul calls for steadfastness in freedom. Christ has liberated you. Do not allow anyone to drag you back under the yoke of the law. Yet freedom is not chaos. The Spirit produces a harvest of virtues—love, joy, peace, patience, kindness—that law could never produce.',
    'Galatians 5 presents the classic contrast: works of the flesh versus fruit of the Spirit. Flesh generates strife, envy, selfish ambition. The Spirit generates love and all its expressions. The Christian life is not sustained by effort but by the life of the Spirit within.',
  ],

  sections: [
    {
      ref: 'Galatians 5:1–12',
      title: 'Stand Fast in Liberty; Freedom from Yoke',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(1, 'Stand fast therefore in the liberty wherewith Christ hath made us free, and be not entangled again with the yoke of bondage.'),
            plain(2, 'Behold, I Paul say unto you, that if ye be circumcised, Christ shall profit you nothing.'),
            plain(4, 'Christ is become of no effect unto you, whosoever of you are justified by the law; ye are fallen from grace.'),
            plain(6, 'For in Jesus Christ neither circumcision availeth any thing, nor uncircumcision; but faith which worketh by love.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'gal-5-liberty',
          html:
            'Paul opens with urgent appeal: &quot;Stand fast in the liberty wherewith Christ hath made us free.&quot; This is not a gift to be set aside. It is the core of the gospel. Accepting circumcision is rejecting what Christ did.',
        },
        {
          kind: 'greek',
          id: 'gal-5-zenos',
          title: 'Zenos — Living; Alive; Animated',
          script: 'ζῶσα',
          translit: '<strong>Zenos</strong> · living; alive; active; energetic',
          description:
            'Faith that works—not faith plus works, but faith animated by love. This is the living faith that produces genuine righteousness.',
        },
        {
          kind: 'commentary',
          id: 'gal-5-grace',
          html:
            'To seek justification by the law is to fall from grace. This is not a loss of salvation but a rejection of the way of salvation. You cannot mix law and grace. You cannot have both.',
        },
        {
          kind: 'christ',
          id: 'gal-5-christ-freed',
          title: 'Christ Connection — Christ Made Us Free',
          html:
            'Christ made us free. This is not provisional freedom, temporary grace. It is the gift of liberation. To return to the yoke is to spurn Christ&apos;s work.',
        },
        {
          kind: 'carry',
          html:
            'You have been freed. Do not voluntarily return to bondage. When pressure comes—from family, from tradition, from false teachers—remember: Christ has freed you. Stand firm.',
        },
        {
          kind: 'reflection',
          id: 'gal-5-liberty',
          prompt: 'Where are you tempted to return to bondage? What yokes—from culture, from upbringing, from false teaching—are you still carrying? How can you more fully embrace your freedom?',
        },
      ],
    },

    {
      ref: 'Galatians 5:22–26',
      title: 'The Fruit of the Spirit; Love as Foundation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(22, 'But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith,'),
            plain(23, 'Meekness, temperance: against such there is no law.'),
            plain(24, 'And they that are Christ&apos;s have crucified the flesh with the affections and lusts.'),
            plain(25, 'If we live in the Spirit, let us also walk in the Spirit.'),
            plain(26, 'Let us not be desirous of vain glory, provoking one another, envying one another.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'gal-5-fruit',
          html:
            'The Spirit produces fruit—nine virtues, with love at the head. This is not a checklist but a harvest. Where the Spirit is present and active, these qualities naturally grow.',
        },
        {
          kind: 'greek',
          id: 'gal-5-karpos',
          title: 'Karpos — Fruit; Produce; Result; Effect',
          script: 'καρπός',
          translit: '<strong>Karpos</strong> · fruit; produce; crop; harvest; result',
          description:
            'Fruit is not something you fabricate. It grows. The Spirit produces fruit in those who yield to Him. This happens organically, not through effort.',
        },
        {
          kind: 'commentary',
          id: 'gal-5-love',
          html:
            'Love is the first fruit. All the others—joy, peace, patience, kindness—flow from love. Love is not sentiment but the willing good of others, the giving of oneself for their benefit.',
        },
        {
          kind: 'christ',
          id: 'gal-5-christ-spirit',
          title: 'Christ Connection — The Spirit of Christ',
          html:
            'The Spirit is the Spirit of Christ. Where Christ is, the Spirit produces love and virtue. The Christian life is not a law imposed from outside, but the flowering of the Spirit within.',
        },
        {
          kind: 'carry',
          html:
            'You cannot produce fruit through effort. You can only be a vessel for the Spirit&apos;s work. Yield to the Spirit. Let Him produce love in you. From love, all other virtues flow.',
        },
        {
          kind: 'reflection',
          id: 'gal-5-fruit',
          prompt: 'Which fruit of the Spirit do you see most clearly in your life? Where is the Spirit producing less fruit? What would it mean to yield more fully to His work?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Stand fast therefore in the liberty wherewith Christ hath made us free, and be not entangled again with the yoke of bondage.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Galatians 5 · Study Guide',
  },

  hasHebrew: false,
};
