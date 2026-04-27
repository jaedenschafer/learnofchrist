import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const HEBREWS_7: RichChapterContent = {
  bookSlug: 'hebrews',
  bookName: 'Hebrews',
  chapter: 7,

  intros: [
    'The author unpacks the figure of Melchisedec in detail. This mysterious priest, appearing in Genesis, existed without genealogy, without beginning or end. He received tithes from Abraham. He blessed Abraham. His priesthood is superior to the Levitical order. Christ is such a priest—eternal, unchanging, able to save completely those who draw near to Him.',
    'The passage establishes that Christ&apos;s priesthood made the old priesthood obsolete. The Law was weak. It could not perfect anyone. But the priesthood of Christ is powerful and eternal. It guarantees a better covenant.',
  ],

  sections: [
    {
      ref: 'Hebrews 7:1–10',
      title: 'Melchisedec Without Beginning or End',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(1, 'For this Melchisedec, king of Salem, priest of the most high God, who met Abraham returning from the slaughter of the kings, and blessed him;'),
            plain(2, 'To whom also Abraham gave a tenth part of all; first being by interpretation King of righteousness, and after that also King of Salem, which is, King of peace;'),
            plain(3, 'Without father, without mother, without descent, having neither beginning of days, nor end of life; but made like unto the Son of God; abideth a priest continually.'),
            plain(15, 'And it is yet far more evident: for that after the similitude of Melchisedec there ariseth another priest,'),
            plain(25, 'Wherefore he is able also to save them to the uttermost that come unto God by him, seeing he ever liveth to make intercession for them.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb7-melchisedec-eternal',
          html:
            'Melchisedec is uniquely described in scripture without genealogy or recorded death. The author reads this absence as theological significance—he is a type of eternal priesthood. Just so, Christ&apos;s priesthood is not limited by time. It endures.',
        },
        {
          kind: 'greek',
          id: 'heb7-agenealogetos',
          title: 'Agenealogetos — Without Genealogy',
          script: 'ἀγενεαλόγητος',
          translit: '<strong>Agenealogetos</strong> · without genealogy; of unknown descent',
          description:
            'In a culture where lineage determined status and legitimacy, Melchisedec stands outside the system. Yet he is superior. Christ similarly stands outside the Levitical system, yet supersedes it.',
        },
        {
          kind: 'commentary',
          id: 'heb7-uttermost',
          html:
            '"Able also to save them to the uttermost." Jesus does not save partially or provisionally. He saves completely. Totally. Finally. He saves you through and through, from every angle, at every level. And He does this eternally, continually, through His endless intercession.',
        },
        {
          kind: 'christ',
          id: 'heb7-christ-uttermost',
          title: 'Christ Connection — Salvation Complete',
          html:
            'Your salvation is not conditioned on your sustained effort. It rests on Christ&apos;s ability to save to the uttermost—completely, finally, forever. He is not a distant priest who intervenes only when you call. He is your constant advocate.',
        },
        {
          kind: 'carry',
          html:
            'You are saved to the uttermost. Not just from punishment. From the power of sin. From fear. From separation from God. Completely. Let this change your posture toward God.',
        },
        {
          kind: 'reflection',
          id: 'heb7-utter-save',
          prompt: 'What would it mean to be saved "to the uttermost"? Where are you still holding back from complete trust?',
        },
      ],
    },

    {
      ref: 'Hebrews 7:20–28',
      title: 'The Law Made Nothing Perfect',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(19, 'For the law made nothing perfect, but the bringing in of a better hope did; by the which we draw nigh unto God.'),
            plain(22, 'By so much was Jesus made a surety of a better testament.'),
            plain(24, 'But this man, because he continueth ever, hath an unchangeable priesthood.'),
            plain(26, 'For such an high priest became us, who is holy, harmless, undefiled, separate from sinners, and made higher than the heavens;'),
            plain(27, 'Who needeth not daily, as those high priests, to offer sacrifice, first for his own sins, and then for the people&apos;s: for this he did once, when he offered up himself.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb7-law-nothing-perfect',
          html:
            'The Law was not evil. It was insufficient. It could not make anyone perfect. It could expose sin but not erase it. It could demand obedience but not supply the power to obey. A better hope was needed—and that hope is Christ.',
        },
        {
          kind: 'greek',
          id: 'heb7-teleioo',
          title: 'Teleioo — Make Perfect',
          script: 'τελειόω',
          translit: '<strong>Teleioo</strong> · to make perfect; to complete; to mature',
          description:
            'Perfection here is not moral sinlessness (no one achieves that). It is completeness—being brought to the goal, entering into the full purpose of life. Only Christ can accomplish this.',
        },
        {
          kind: 'commentary',
          id: 'heb7-once-for-all',
          html:
            '"This he did once, when he offered up himself." One sacrifice. One act. Final. Unlike the Levitical priests who offered repeatedly, Jesus offered once and then sat down. The work is finished. Nothing remains to be done.',
        },
        {
          kind: 'christ',
          id: 'heb7-christ-once-final',
          title: 'Christ Connection — The Perfect Sacrifice',
          html:
            'Jesus is holy, harmless, undefiled—the perfect sacrifice. His sacrifice is not repeated. It does not need renewal. Its efficacy is eternal. He offered Himself. Not animals, not symbols, but Himself. Your redemption cost Him everything.',
        },
        {
          kind: 'carry',
          html:
            'Stop trying to perfect yourself through the Law. Stop adding works to faith. The Law made nothing perfect. Only Christ does. Rest in His sacrifice. Rest in His priesthood. Rest in His completeness.',
        },
        {
          kind: 'reflection',
          id: 'heb7-once-rest',
          prompt: 'Where are you still trying to perfect yourself? What would it mean to truly rest in Christ&apos;s "once and for all" sacrifice?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'He is able also to save them to the uttermost that come unto God by him, seeing he ever liveth to make intercession for them. By so much was Jesus made a surety of a better testament.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Hebrews 7 · Study Guide',
  },

  hasHebrew: false,
};
