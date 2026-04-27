import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Hebrews 3 — Christ as a Son Over His Own House
 *
 * The author returns to the theme of Christ&apos;s supremacy, now comparing Him to Moses.
 * Moses was faithful in God&apos;s house as a servant. But Christ is faithful as a Son
 * over His own house. The implication is clear: Christ is greater than Moses. But the
 * passage also contains a stern warning: do not harden your heart as the Israelites did
 * in the wilderness. "Today if ye will hear his voice, harden not your hearts."
 */
export const HEBREWS_3: RichChapterContent = {
  bookSlug: 'hebrews',
  bookName: 'Hebrews',
  chapter: 3,

  intros: [
    'For Jewish readers, Moses was the greatest figure in their tradition. He gave the Law. He led the exodus. He mediated the covenant. If the author can show that Christ is greater than Moses, the point is settled: Christ is supreme. The comparison is not degrading to Moses. It is simply establishing hierarchy. The Son is greater than the servant.',
    'But the passage turns darker. It invokes the wilderness generation—those who saw God&apos;s power yet refused to enter the promised land because of unbelief. The author warns: you are not immune to such hardening. If you refuse to believe, if you harden your heart, you too will fail to enter the rest God offers.',
  ],

  sections: [
    /* ─── Hebrews 3:1–6 — Christ Greater Than Moses ────────────────── */
    {
      ref: 'Hebrews 3:1–6',
      title: 'Faithful Over His Own House',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(1, 'Wherefore, holy brethren, partakers of the heavenly calling, consider the Apostle and High Priest of our profession, Christ Jesus;'),
            plain(2, 'Who was faithful to him that appointed him, as also Moses was faithful in all his house.'),
            plain(3, 'For this man was counted worthy of more glory than Moses, inasmuch as he who hath builded the house hath more honour than the house.'),
            plain(4, 'For every house is builded by some man; but he that built all things is God.'),
            plain(5, 'And Moses verily was faithful in all his house, as a servant, for a testimony of those things which were to be spoken after;'),
            plain(6, 'But Christ as a son over his own house; whose house are we, if we hold fast the confidence and the rejoicing of the hope firm unto the end.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb3-high-priest',
          html:
            'The author calls Jesus "the Apostle and High Priest of our profession." Apostle—one sent. High Priest—one who mediates between God and man. Both roles meet in Christ. He is the messenger from God and the mediator before God.',
        },
        {
          kind: 'greek',
          id: 'heb3-axioo',
          title: 'Axioo — Worthy, Deserve',
          script: 'ἄξιος',
          translit: '<strong>Axioo</strong> · worthy; deserving; of equal weight',
          description:
            'Christ was "counted worthy of more glory than Moses." This is not denigration of Moses. It is affirmation of Christ&apos;s greater honor. The builder of a house has more honor than the house itself. Christ is the builder. The house—His church—is the building He constructed.',
        },
        {
          kind: 'commentary',
          id: 'heb3-builders-honor',
          html:
            '"For every house is builded by some man; but he that built all things is God." The builder has more honor than what he builds. Moses was faithful in God&apos;s house as a servant. But Christ is the builder Himself. He is God, the architect and constructor of all things, including the church.',
        },
        {
          kind: 'christ',
          id: 'heb3-christ-son',
          title: 'Christ Connection — Son Over the House',
          html:
            'The decisive statement: "Christ as a son over his own house." Not a servant, not an agent, but a son with authority over his own inheritance. The church is His house. You belong to Him. The relationship is familial and complete.',
        },
        {
          kind: 'carry',
          html:
            'You are part of Christ&apos;s house. This means you belong to something lasting, something built by Christ Himself. But there is a condition: "if we hold fast the confidence and the rejoicing of the hope firm unto the end." Your belonging is secure if you remain faithful. Hold fast to your hope in Christ.',
        },
        {
          kind: 'reflection',
          id: 'heb3-house',
          prompt: 'What does it mean to you to be part of Christ&apos;s house? Where are you tempted to let go of that confidence?',
        },
      ],
    },

    /* ─── Hebrews 3:7–19 — Harden Not Your Heart ────────────────────── */
    {
      ref: 'Hebrews 3:7–19',
      title: 'Today If Ye Will Hear His Voice',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(7, 'Wherefore as the Holy Ghost saith, To day if ye will hear his voice,'),
            plain(8, 'Harden not your hearts, as in the provocation, in the day of temptation in the wilderness:'),
            plain(12, 'Take heed, brethren, lest there be in any of you an evil heart of unbelief, in departing from the living God.'),
            plain(13, 'But exhort one another daily, while it is called To day; lest any of you be hardened through the deceitfulness of sin.'),
            plain(14, 'For we are made partakers of Christ, if we hold the beginning of our confidence stedfast unto the end;'),
            plain(19, 'So we see that they could not enter in because of unbelief.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'heb3-harden-heart',
          html:
            '"Harden not your hearts." The author invokes the wilderness generation—those who saw God&apos;s signs and wonders yet refused to believe. They were hardened. Their refusal became a settled habit. By the time Moses sent spies, it was too late. They had already chosen unbelief.',
        },
        {
          kind: 'greek',
          id: 'heb3-skleruno',
          title: 'Skleruno — Harden',
          script: 'σκληρύνω',
          translit: '<strong>Skleruno</strong> · to harden; to make stiff; to become stubborn',
          description:
            'Hardening is a process. It does not happen all at once. It happens through repeated refusal to listen. Through subtle deceptions. Through drifting away bit by bit. The author urges constant vigilance.',
        },
        {
          kind: 'commentary',
          id: 'heb3-exhort-daily',
          html:
            '"Exhort one another daily, while it is called To day." Today is the time of grace. Tomorrow may be too late. Do not wait. Do not assume you will respond better later. Now is the time to listen, to believe, to hold fast. The author urges mutual accountability. We need each other&apos;s encouragement.',
        },
        {
          kind: 'christ',
          id: 'heb3-christ-voice',
          title: 'Christ Connection — His Voice, His Call',
          html:
            'The voice in the psalm is God&apos;s voice. But in the New Testament reality, it is Christ&apos;s voice calling. When you hear His voice through Scripture, through circumstance, through the witness of the Spirit, the response is immediate: listen. Do not delay. Do not harden yourself.',
        },
        {
          kind: 'carry',
          html:
            'You are not immune to hardening. It begins when you ignore God&apos;s voice. It deepens when you rationalize away His call. It solidifies when you actively turn away. The antidote is constant attention: listen daily, exhort and be exhorted, hold fast your confidence. Do not assume you are safe. Be vigilant.',
        },
        {
          kind: 'reflection',
          id: 'heb3-today',
          prompt: 'In what area is God&apos;s voice speaking to you today? What is your response? Are you listening or hardening?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Christ as a son over his own house; whose house are we, if we hold fast the confidence and the rejoicing of the hope firm unto the end. Today if ye will hear his voice, harden not your hearts.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Hebrews 3 · Study Guide',
  },

  hasHebrew: false,
};
