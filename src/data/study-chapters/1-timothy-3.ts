import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Timothy 3 — Qualifications for Leadership
 *
 * Paul sets before Timothy the standard for those who would lead the church.
 * Bishops and deacons are not chosen for eloquence, wealth, or social standing,
 * but for character. A bishop must be "blameless, the husband of one wife, vigilant,
 * sober, of good behaviour, given to hospitality, apt to teach." The list is
 * demanding: it describes a human being shaped by the Spirit of Christ.
 */
export const FIRST_TIMOTHY_3: RichChapterContent = {
  bookSlug: '1-timothy',
  bookName: '1 Timothy',
  chapter: 3,

  intros: [
    'Leadership in the church is not a prize to be grasped but a burden to be borne. Paul writes with clear-eyed realism. The stakes are high. A leader&apos;s fall is public. His failings poison the assembly. Therefore, character must be examined before authority is granted. Paul is not crafting an impossible ideal but describing the kind of person who has been remade by grace.',
    'Notice what is not on Paul&apos;s list: formal education, oratorical skill, wealth, political connections. What is there: faithfulness in marriage, the ability to manage a household, gentleness, hospitable affection, and the capacity to teach sound doctrine. These are not achievements but fruits of a transformed heart.',
  ],

  sections: [
    /* ─── 1 Timothy 3:1–7 — A Bishop Must Be ───────────────────────── */
    {
      ref: '1 Timothy 3:1–7',
      title: 'The Qualifications of a Bishop',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(1, 'This is a true saying, If a man desire the office of a bishop, he desireth a good work.'),
            plain(2, 'A bishop then must be blameless, the husband of one wife, vigilant, sober, of good behaviour, given to hospitality, apt to teach;'),
            plain(3, 'Not given to wine, no striker, not greedy of filthy lucre; but patient, not a brawler, not covetous;'),
            plain(4, 'One that ruleth well his own house, having his children in subjection with all gravity;'),
            plain(5, '(For if a man know not how to rule his own house, how shall he take care of the church of God?)'),
            plain(7, 'Moreover he must have a good report of them which are without; lest he fall into reproach and the snare of the devil.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim3-good-work',
          html:
            '"If a man desire the office of a bishop, he desireth a good work." Paul begins by affirming the aspiration—not as personal ambition but as desire to serve. The Greek word for "good work" is kalon ergon, beautiful work, the kind of labor that is fitting and noble. But Paul immediately qualifies: desire alone is not enough. Character must match calling.',
        },
        {
          kind: 'greek',
          id: 'tim3-anegkletos',
          title: 'Anegkletos — Blameless',
          script: 'ἀνέγκλητος',
          translit: '<strong>Anegkletos</strong> · blameless; irreproachable; without accusation',
          description:
            'Not sinless—Paul is a realist—but blameless means no legitimate charge can be brought. A leader&apos;s integrity is not hidden. It is open to public scrutiny. No secret life of deception undermines his public witness.',
        },
        {
          kind: 'commentary',
          id: 'tim3-house',
          html:
            'The proof of a leader&apos;s fitness is not his eloquence but his home. How does he love his wife? How do his children regard him? A man who rules his own house with grace and firmness—not tyranny, not laxity—demonstrates the spiritual maturity required to care for a larger family, the church. The personal precedes the public.',
        },
        {
          kind: 'christ',
          id: 'tim3-christ-shepherd',
          title: 'Christ Connection — Shepherd of the Flock',
          html:
            'Jesus is the Chief Shepherd. All other shepherds are under-shepherds. A bishop is appointed to feed the flock, not to lord over it (1 Peter 5:3). His authority is borrowed, provisional, and accountable. These qualifications are not arbitrary; they are the shape of a heart conformed to Christ&apos;s own sacrificial care.',
        },
        {
          kind: 'carry',
          html:
            'Whether or not you are a formal leader, Paul&apos;s standard applies to all. Can you manage your household with love and wisdom? Are you sober-minded, not enslaved to substances or status? Are you hospitable, seeing in the stranger a place to practice Christ&apos;s welcome? These are not elite virtues. They are the fruit of the Spirit in any believer.',
        },
        {
          kind: 'reflection',
          id: 'tim3-character',
          prompt: 'Which of Paul&apos;s qualifications do you struggle with most? How might growing in that area deepen your own leadership—in your family, your workplace, your community?',
        },
      ],
    },

    /* ─── 1 Timothy 3:8–13 — Likewise Deacons ─────────────────────── */
    {
      ref: '1 Timothy 3:8–13',
      title: 'The Qualifications of Deacons',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(8, 'Likewise must the deacons be grave, not doubletongued, not given to much wine, not greedy of filthy lucre;'),
            plain(9, 'Holding the mystery of the faith in a pure conscience.'),
            plain(10, 'And let these also first be proved; then let them use the office of a deacon, being found blameless.'),
            plain(11, 'Even so must their wives be grave, not slanderers, sober, faithful in all things.'),
            plain(12, 'Let the deacons be the husbands of one wife, ruling their children and their own houses well.'),
            plain(13, 'For they that have used the office of a deacon well purchase to themselves a good degree, and great boldness in the faith which is in Christ Jesus.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'tim3-deacons',
          html:
            'Deacons are servants—their name comes from the Greek diakonos. Yet their qualifications are not lower than bishops&apos;. In some ways they are higher. A deacon deals directly with the suffering, the poor, the vulnerable. He must be incorruptible, since he handles money and goods meant for the widows and needy. His integrity is not ornamental; lives depend on it.',
        },
        {
          kind: 'greek',
          id: 'tim3-mysterion',
          title: 'Mysterion — Mystery',
          script: 'μυστήριον',
          translit: '<strong>Mysterion</strong> · mystery; secret; hidden truth',
          description:
            'In the New Testament, mystery is not something unknowable but something revealed. "Holding the mystery of the faith in a pure conscience" means guarding the central truths of the gospel and living them out with integrity. The deacon&apos;s inner conviction must match his outer conduct.',
        },
        {
          kind: 'commentary',
          id: 'tim3-proved',
          html:
            '"Let these also first be proved." Leadership is not automatic. A person is tested. His character is observed. Only when found faithful is he set apart for service. This prevents the appointment of unsuitable people and gives the individual himself assurance that his call comes from God through His people, not from personal ambition.',
        },
        {
          kind: 'christ',
          id: 'tim3-christ-servant',
          title: 'Christ Connection — Servant Leader',
          html:
            'Jesus washed the disciples&apos; feet. He ate with sinners. He healed on the Sabbath in defiance of legal precision. A deacon models this servant heart. He does not wait for recognition. His reward is not earthly status but "great boldness in the faith"—the confidence of one who knows he has served the King Himself.',
        },
        {
          kind: 'carry',
          html:
            'A deacon&apos;s work is often invisible. No one applauds. The widow receives her aid quietly. The poor are fed without fanfare. Yet Paul says such service "purchases a good degree"—earns standing before God and fellow believers. If you do unseen work faithfully, take heart. Nothing is hidden from God.',
        },
        {
          kind: 'reflection',
          id: 'tim3-servant',
          prompt: 'What is one area of servant work—unseen, unglamorous—that you could embrace? What holds you back from giving yourself fully to it?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'A bishop then must be blameless, the husband of one wife, vigilant, sober, of good behaviour, given to hospitality, apt to teach.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Timothy 3 · Study Guide',
  },

  hasHebrew: false,
};
