import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Timothy 3 — The Last Days and Scripture
 *
 * Paul paints a dark portrait of the last days: lovers of themselves, covetous,
 * proud, blasphemers, disobedient to parents, unthankful, unholy. In such times,
 * what endures? "All scripture is given by inspiration of God, and is profitable
 * for doctrine, for reproof, for correction, for instruction in righteousness."
 * The Word stands when all else fails. It equips the man of God for every good work.
 */
export const SECOND_TIMOTHY_3: RichChapterContent = {
  bookSlug: '2-timothy',
  bookName: '2 Timothy',
  chapter: 3,

  intros: [
    'Paul describes the moral collapse that precedes the end times. "Perilous times shall come." His list is sobering: self-love, materialism, pride, blasphemy, family breakdown, ingratitude, impiety. These are not future speculation. Timothy is already living in them. What sustains faith in such darkness? The Scripture itself—God&apos;s Word, which endures when earthly structures crumble.',
    'Paul does not offer Timothy escape from the chaos. Instead, he offers him a weapon: the Word of God. Profitable for teaching, for reproof, for correction, for training in righteousness. The Bible is not primarily information. It is transformation. It remakes you, equips you, prepares you for every good work.',
  ],

  sections: [
    /* ─── 2 Timothy 3:1–9 — Perilous Times ──────────────────────────── */
    {
      ref: '2 Timothy 3:1–9',
      title: 'Perilous Times Shall Come',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(1, 'This know also, that in the last days perilous times shall come.'),
            plain(2, 'For men shall be lovers of their own selves, covetous, boasters, proud, blasphemers, disobedient to parents, unthankful, unholy,'),
            plain(5, 'Having a form of godliness, but denying the power thereof: from such turn away.'),
            plain(7, 'Ever learning, and never able to come to the knowledge of the truth.'),
            plain(8, 'Now as Jannes and Jambres withstood Moses, so do these also resist the truth: men of corrupt minds, reprobate concerning the faith.'),
            plain(9, 'But they shall proceed no further: for their folly shall be manifest unto all men, as theirs also was.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim3-perilous',
          html:
            'Paul does not soften or spiritualize. "Perilous times shall come." The Greek word chalepoi means grievous, hard, fierce. He is not describing distant apocalypse. He is speaking of the reality Timothy is witnessing. The remedy is not to escape but to stand firm.',
        },
        {
          kind: 'greek',
          id: 'tim3-philautoi',
          title: 'Philautoi — Lovers of Self',
          script: 'φιλαύτοι',
          translit: '<strong>Philautoi</strong> · lovers of themselves; self-centered; selfish',
          description:
            'The root is unusual. Philautoi is a new word in Paul&apos;s vocabulary here—self-love as the organizing principle. This is not healthy self-regard. It is the diversion of all affection toward oneself. When this happens, every other virtue inverts. Boastfulness replaces humility. Covetousness replaces gratitude. Disobedience replaces reverence.',
        },
        {
          kind: 'commentary',
          id: 'tim3-form-power',
          html:
            '"Having a form of godliness, but denying the power thereof." The most dangerous heresy is not crude atheism but empty religion. People can look faithful, speak piously, gather to worship—while rejecting the transforming power of the gospel. Paul warns Timothy to separate from such people. Not to judge them harshly, but to refuse their influence.',
        },
        {
          kind: 'christ',
          id: 'tim3-christ-truth',
          title: 'Christ Connection — The Truth That Transforms',
          html:
            'The people Paul describes are "ever learning, and never able to come to the knowledge of the truth." But Christ IS the truth. Knowledge of Him is not merely intellectual. It is relational, transformative, saving. When you stop pursuing His reality and settle for doctrine, you have begun to deny the power of godliness.',
        },
        {
          kind: 'carry',
          html:
            'Paul&apos;s catalog might describe temptations you face. Self-love, covetousness, pride, ingratitude—these are not distant failings but daily snares. The antidote is not vigilance alone but active choosing. Choose gratitude. Choose others. Choose honesty. Choose devotion to truth. These are not passive virtues. They are deliberate acts of resistance.',
        },
        {
          kind: 'reflection',
          id: 'tim3-form-power',
          prompt: 'Where in your own life do you see "a form of godliness but deny the power thereof"? What would allow the power to become real?',
        },
      ],
    },

    /* ─── 2 Timothy 3:14–17 — All Scripture Is Inspired ──────────────── */
    {
      ref: '2 Timothy 3:14–17',
      title: 'All Scripture Inspired by God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(14, 'But continue thou in the things which thou hast learned and hast been assured of, knowing of whom thou hast learned them;'),
            plain(15, 'And that from a child thou hast known the holy scriptures, which are able to make thee wise unto salvation through faith which is in Christ Jesus.'),
            plain(16, 'All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness:'),
            plain(17, 'That the man of God may be perfect, thoroughly furnished unto all good works.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim3-continue-learned',
          html:
            '"Continue thou in the things which thou hast learned." Paul does not offer novelty. He calls Timothy to hold fast to the gospel as handed down from the apostles. This is not stagnation. It is fidelity to a deposit of truth entrusted to the church. Innovation is not the same as faithfulness.',
        },
        {
          kind: 'greek',
          id: 'tim3-theopneustos',
          title: 'Theopneustos — Inspired by God',
          script: 'θεόπνευστος',
          translit: '<strong>Theopneustos</strong> · inspired by God; God-breathed; divinely inspired',
          description:
            'The word literally means "breathed out by God." Scripture is not human invention later blessed by God. It is the living breath of God taking written form. This does not deny human agency. Writers wrote. But they wrote as instruments of the Spirit.',
        },
        {
          kind: 'commentary',
          id: 'tim3-profitable',
          html:
            'Paul lists four uses of Scripture. Doctrine—what to believe. Reproof—correction of error. Correction—restoration to right path. Instruction in righteousness—training toward virtue. Together, these equip a person for "every good work." The Bible is not academic. It is practical, transformative, life-shaping.',
        },
        {
          kind: 'christ',
          id: 'tim3-christ-wisdom',
          title: 'Christ Connection — Wise Unto Salvation',
          html:
            'The Scriptures, Paul says, make wise unto salvation through faith in Christ Jesus. Christ is not separate from Scripture but its center. The entire Old Testament testimony points to Him. The Gospels record His appearing. The epistles explain His work. To know the Scriptures is to encounter Christ.',
        },
        {
          kind: 'carry',
          html:
            'Do you approach Scripture as practical guidance or as intellectual exercise? Paul calls Timothy to let Scripture form him—reprove him when he errs, correct him when he wanders, train him toward righteousness. This requires a posture of submission. Not skeptical distance. Not uncritical acceptance. But honest, open responsiveness to what God is saying.',
        },
        {
          kind: 'reflection',
          id: 'tim3-scripture-transform',
          prompt: 'How has Scripture reproved, corrected, or instructed you? Where are you resisting its voice?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness: That the man of God may be perfect, thoroughly furnished unto all good works.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Timothy 3 · Study Guide',
  },

  hasHebrew: false,
};
