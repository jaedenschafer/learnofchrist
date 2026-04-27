import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Timothy 2 — Endure as a Good Soldier
 *
 * Paul exhorts Timothy to endure hardship as a good soldier of Jesus Christ.
 * Discipline, focus, and single-minded devotion are required. False teaching
 * spreads like gangrene. But the foundation of God stands sure. Study to show
 * yourself approved unto God, a workman that needs not to be ashamed, rightly
 * dividing the word of truth. This is Timothy&apos;s calling: guard the gospel,
 * resist error, pursue holiness.
 */
export const SECOND_TIMOTHY_2: RichChapterContent = {
  bookSlug: '2-timothy',
  bookName: '2 Timothy',
  chapter: 2,

  intros: [
    'Paul piles image upon image: soldier, athlete, farmer. Each demands discipline. Each requires focus. Distraction is the enemy. False teachers circulate—Hymenaeus and Philetus claim the resurrection is already past. They shipwreck the faith of others. Yet Paul holds firm to reality: God&apos;s foundation stands, sealed with a divine name. Those who wish to serve the Master must purge themselves of dishonorable deeds. Purity enables usefulness.',
    'The passage moves from metaphor to practical command: "Study to shew thyself approved unto God." Not impressive before men. Approved by God. This is the standard. This is what makes a worker effective. The Greek word for study is spoudaze—to be diligent, to give eager effort. Timothy&apos;s labor matters. The gospel depends on faithful shepherds.',
  ],

  sections: [
    /* ─── 2 Timothy 2:1–13 — Endure, Suffer, Be Faithful ───────────────── */
    {
      ref: '2 Timothy 2:1–13',
      title: 'A Good Soldier of Jesus Christ',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(1, 'Thou therefore, my son, be strong in the grace that is in Christ Jesus.'),
            plain(2, 'And the things that thou hast heard of me among many witnesses, commit thou to faithful men, who shall be able to teach others also.'),
            plain(3, 'Thou therefore endure hardship, as a good soldier of Jesus Christ.'),
            plain(4, 'No man that warreth entangleth himself with the affairs of this life; that he may please him who hath chosen him to be a soldier.'),
            plain(11, 'It is a faithful saying: For if we be dead with him, we shall also live with him:'),
            plain(12, 'If we suffer, we shall also reign with him: if we deny him, he also will deny us:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim2-strong-grace',
          html:
            '"Be strong in the grace that is in Christ Jesus." This is not a generic call to inner strength. It is a call to anchor yourself in grace. Christ&apos;s grace is not a passive gift. It is active, sustaining power. To be strong means to rest in it, to receive from it, to let it undergird your trials.',
        },
        {
          kind: 'greek',
          id: 'tim2-stratiotou',
          title: 'Stratiotou — Soldier',
          script: 'στρατιώτης',
          translit: '<strong>Stratiotou</strong> · soldier; warrior; one in military service',
          description:
            'A soldier is not free to choose which orders to follow. He serves a commander. His will is subordinate to the mission. A Christian soldier serves Christ. The mission is to proclaim the gospel and resist error. Personal comfort is not the priority. The commander&apos;s orders are.',
        },
        {
          kind: 'commentary',
          id: 'tim2-entangled',
          html:
            '"No man that warreth entangleth himself with the affairs of this life." A soldier cannot serve two masters. If he is absorbed in business dealings, personal gain, or social standing, he is not effective. Timothy must keep his focus. The gospel is what matters. Everything else is secondary.',
        },
        {
          kind: 'christ',
          id: 'tim2-christ-suffering',
          title: 'Christ Connection — Die and Rise with Him',
          html:
            'The faithful saying speaks the core of the gospel: death and resurrection. If we are dead with Christ—our old life crucified—we shall live with Him. If we suffer with Him, we shall reign with Him. But if we deny Him out of fear, He will deny us. The reversal is stark. These are not threats meant to terrify. They are reality. Your covenant relationship with Christ is binding.',
        },
        {
          kind: 'carry',
          html:
            'What entangles you in the affairs of this life? What distracts you from the mission of following Christ? Paul is not calling you to asceticism. He is calling for priority. When two loyalties conflict, which comes first? If your answer is anything other than Christ, the entanglement is active.',
        },
        {
          kind: 'reflection',
          id: 'tim2-soldier',
          prompt: 'What would change if you truly lived as a "good soldier of Jesus Christ"? What orders would you obey differently?',
        },
      ],
    },

    /* ─── 2 Timothy 2:14–26 — Approved, Sanctified, Useful ─────────────── */
    {
      ref: '2 Timothy 2:14–26',
      title: 'Study to Show Thyself Approved',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(14, 'Of these things put them in remembrance, charging them before the Lord that they strive not about words to no profit, but to the subverting of the hearers.'),
            plain(15, 'Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth.'),
            plain(16, 'But shun profane and vain babblings: for they will increase unto more ungodliness.'),
            plain(21, 'If a man therefore purge himself from these, he shall be a vessel unto honour, sanctified, and meet for the master&apos;s use, and prepared unto every good work.'),
            plain(24, 'And the servant of the Lord must not strive; but be gentle unto all men, apt to teach, patient,'),
            plain(26, 'And the servant may recover himself out of the snare of the devil, who are taken captive by him at his will.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim2-approved',
          html:
            '"Study to shew thyself approved unto God." The standard is not human applause. It is not even congregational acclaim. It is approval before God. A workman who need not be ashamed is one whose labor holds up to divine scrutiny. No shortcuts. No compromise. Work worthy of the One who called you.',
        },
        {
          kind: 'greek',
          id: 'tim2-orthotomeo',
          title: 'Orthotomeo — Rightly Divide',
          script: 'ὀρθοτομέω',
          translit: '<strong>Orthotomeo</strong> · to cut straight; to rightly divide; to handle correctly',
          description:
            'The image is of a craftsman cutting material straight, without waste or deviation. To rightly divide the word of truth means to handle Scripture accurately, in context, with reverence. Not twisting it to support private agendas. Not cutting it to please an audience. But cutting it straight.',
        },
        {
          kind: 'commentary',
          id: 'tim2-vessel-honour',
          html:
            '"If a man therefore purge himself from these, he shall be a vessel unto honour." The key is purity. A vessel cannot be used by the Master while it is still contaminated. Self-purification is not passive. It requires discipline—refusing false teaching, renouncing unprofitable speech, maintaining integrity. The result: fitness for the Master&apos;s use.',
        },
        {
          kind: 'christ',
          id: 'tim2-christ-master',
          title: 'Christ Connection — Useful Instrument',
          html:
            'Jesus described Himself as a vessel—pouring out His life for others. A disciple who follows becomes a channel of His love and truth. The Master has a use in mind. But only a clean, sanctified vessel can carry what the Master wants to pour through it. Purity is not ascetic isolation. It is the condition of effectiveness.',
        },
        {
          kind: 'carry',
          html:
            'The servant of the Lord "must not strive." This stands against the tendency to win arguments, to dominate in debates, to crush opponents. Instead: be gentle, apt to teach, patient. This is not weakness. It takes more strength to be gentle under provocation than to lash out. A gentle heart opens doors that harsh words close.',
        },
        {
          kind: 'reflection',
          id: 'tim2-purge',
          prompt: 'What needs to be purged from you so that you become more useful to Christ? What resistance do you meet when you try?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Study to shew thyself approved unto God, a workman that needeth not to be ashamed, rightly dividing the word of truth. If we suffer, we shall also reign with him.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Timothy 2 · Study Guide',
  },

  hasHebrew: false,
};
