import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Titus 1 — Elders and False Teachers
 *
 * Paul addresses Titus, left in Crete to set in order the things lacking and to
 * appoint elders. As in 1 Timothy, character is paramount. An elder must be
 * blameless, faithful in marriage, not given to wine or pursuit of gain, but
 * given to hospitality and the teaching of sound doctrine. For Crete is full of
 * false teachers—liars, empty talkers, deceivers who turn people away from the truth.
 */
export const TITUS_1: RichChapterContent = {
  bookSlug: 'titus',
  bookName: 'Titus',
  chapter: 1,

  intros: [
    'Crete had a reputation—not a good one. The proverb ran: "Cretans are always liars." Into this environment, Titus is sent to complete the organizing of the church and to appoint elders. The task is not ceremonial. It is spiritual warfare. False teachers, seductive deceivers, prey on the young and unstable. The church must be led by men of integrity who can both teach truth and refute error.',
    'Paul lays out the same high standard for Crete as he did for Ephesus with Timothy. But he also gives Titus permission to be severe where needed: "Rebuke them sharply, that they may be sound in the faith." Gentleness has its place. But so does firmness against error.',
  ],

  sections: [
    /* ─── Titus 1:1–9 — Appointing Elders ───────────────────────────── */
    {
      ref: 'Titus 1:1–9',
      title: 'Elders of Unblamable Character',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'Paul, a servant of God, and an apostle of Jesus Christ, according to the faith of God&apos;s elect, and the acknowledging of the truth which is after godliness;'),
            plain(5, 'For this cause left I thee in Crete, that thou shouldest set in order the things that are wanting, and ordain elders in every city, as I had appointed thee:'),
            plain(6, 'If any be blameless, the husband of one wife, having faithful children not accused of riot or unruly.'),
            plain(7, 'For a bishop must be blameless, as the steward of God; not selfwilled, not soon angry, not given to wine, no striker, not given to filthy lucre;'),
            plain(8, 'But a lover of hospitality, a lover of good men, sober, just, holy, temperate;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'tit1-faith-elect',
          html:
            'Paul identifies himself as "a servant of God, and an apostle of Jesus Christ, according to the faith of God&apos;s elect." His authority rests not on popular acclaim but on divine election. He proclaims the faith that produces acknowledgment of truth. This truth is not abstract doctrine. It leads to godliness—practical holiness.',
        },
        {
          kind: 'greek',
          id: 'tit1-episkope',
          title: 'Episkope — Overseer, Bishop',
          script: 'ἐπισκοπή',
          translit: '<strong>Episkope</strong> · oversight; visitation; bishop',
          description:
            'An overseer is one who sees over—who has a vision for the whole flock and takes responsibility. Not a CEO but a shepherd. The character traits Paul lists create such a person: humble, temperate, hospitable, devoted to truth.',
        },
        {
          kind: 'commentary',
          id: 'tit1-steward',
          html:
            'An elder is "the steward of God." A steward owns nothing. He manages God&apos;s household according to the Master&apos;s will, not his own. This reorients leadership. It is not about power or gain. It is about faithful administration of what belongs to God.',
        },
        {
          kind: 'christ',
          id: 'tit1-christ-truth',
          title: 'Christ Connection — Steward of Christ',
          html:
            'An elder serves as steward of God&apos;s household. In the New Testament, the household is the church—the body of Christ. To lead it faithfully is to serve Christ Himself. The standard is high because the stakes are eternal. The souls entrusted to a shepherd answer to Christ.',
        },
        {
          kind: 'carry',
          html:
            'Whether or not you hold formal office, you are a steward of something—your home, your talents, your time, your words. Are you self-willed or submitted to God&apos;s purposes? Are you quick to anger or patient? Are you hospitable or withdrawn? The character Paul describes produces an environment where truth flourishes and error is resisted.',
        },
        {
          kind: 'reflection',
          id: 'tit1-steward-life',
          prompt: 'In what are you a steward? How well are you managing it according to God&apos;s will rather than your own?',
        },
      ],
    },

    /* ─── Titus 1:10–16 — Refute Deceivers, Hold Fast Truth ──────────── */
    {
      ref: 'Titus 1:10–16',
      title: 'Rebuke False Teachers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(10, 'For there are many unruly and vain talkers and deceivers, specially they of the circumcision:'),
            plain(11, 'Whose mouths must be stopped, who subvert whole houses, teaching things which they ought not, for filthy lucre&apos;s sake.'),
            plain(13, 'This witness is true. Wherefore rebuke them sharply, that they may be sound in the faith;'),
            plain(14, 'Not giving heed to Jewish fables, nor to commandments of men that turn from the truth.'),
            plain(15, 'Unto the pure all things are pure: but unto them that are defiled and unbelieving, nothing is pure; but even their mind and conscience is defiled.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'tit1-false-teachers',
          html:
            'Paul does not mince words. False teachers are not simply misguided. They are deceivers. They "subvert whole houses"—leading families away from Christ. And their motive is "filthy lucre"—money. They make prey of others for personal gain. This is spiritual predation.',
        },
        {
          kind: 'greek',
          id: 'tit1-stomatizo',
          title: 'Stomatizo — Stop the Mouth',
          script: 'στοματίζω',
          translit: '<strong>Stomatizo</strong> · to stop the mouth; to silence; to muzzle',
          description:
            'Harsh language. But Paul is clear: these teachers must be silenced. Not through violence, but through refutation. When their falsehood is exposed, their mouths are stopped. The truth is more powerful than deception if it is clearly proclaimed.',
        },
        {
          kind: 'commentary',
          id: 'tit1-sharp-rebuke',
          html:
            '"Rebuke them sharply, that they may be sound in the faith." Gentleness has limits. When error threatens the flock, firmness is compassionate. A sharp rebuke that awakens someone to truth serves them better than gentle affirmation of falsehood. Titus is given permission—indeed, a charge—to confront.',
        },
        {
          kind: 'christ',
          id: 'tit1-christ-purity',
          title: 'Christ Connection — Purified by Truth',
          html:
            'The pure see purity everywhere. But the defiled and unbelieving see defilement. Their mind and conscience are darkened. Jesus came to purify—not just our actions but our inner sight. When we are made clean by faith in Him, we begin to see reality as it truly is.',
        },
        {
          kind: 'carry',
          html:
            'Truth is not one opinion among many. Some teachings are simply false and dangerous. Paul gives Titus permission to be strong in response. In your own circle, are you willing to identify and gently rebuke falsehood? Or do you allow error to spread for the sake of being agreeable? Compassion sometimes requires clarity.',
        },
        {
          kind: 'reflection',
          id: 'tit1-error',
          prompt: 'What falsehoods are you tempted to tolerate rather than address? Where is your clarity compromised?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'For a bishop must be blameless, as the steward of God; not selfwilled, not soon angry, not given to wine, no striker, not given to filthy lucre; But a lover of hospitality, a lover of good men, sober, just, holy, temperate.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Titus 1 · Study Guide',
  },

  hasHebrew: false,
};
