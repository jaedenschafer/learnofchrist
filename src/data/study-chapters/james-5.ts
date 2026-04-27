import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * James 5 — Prayer, Patience & Faith
 *
 * James closes with a meditation on patience and prayer. The rich who have hoarded
 * their wealth will face judgment, but the righteous are called to patience—to endure
 * suffering and injustice without losing hope. Prayer is the wellspring of that patience.
 * The prayer of faith heals the sick. Elijah prayed and stopped the rain. Confess your
 * sins to one another, and pray for one another, that you may be healed.
 */
export const JAMES_5: RichChapterContent = {
  bookSlug: 'james',
  bookName: 'James',
  chapter: 5,

  intros: [
    'James opens with a warning to the rich who have hoarded wealth and exploited workers. Their riches have rotted. The gold and silver they trusted in will testify against them. But his primary message is not judgment on the rich, but encouragement to the poor and suffering: wait for the Lord. The patience of Job—who endured great suffering and yet trusted God—is the model. The coming of the Lord is at hand.',
    'He then closes with a call to prayer. This is the heart of the Christian life: asking God for wisdom, for healing, for forgiveness. Prayer is not a last resort but the primary weapon of faith. The effectual fervent prayer of a righteous man accomplishes much. When we confess our sins to one another and pray for one another, healing comes—spiritual and physical. The church gathers not to judge but to intercede for one another.',
  ],

  sections: [
    /* ─── James 5:1–11 — Patience in Suffering ────────────────────────── */
    {
      ref: 'James 5:1–11',
      title: 'Patience & Hope',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(1, 'Go to now, ye that say, To day or to morrow we will go into such a city, and continue there a year, and buy and sell, and get gain:'),
            plain(4, 'Behold, the hire of the labourers who have reaped down your fields, which is of you kept back by fraud, crieth: and the cries of them which have reaped are entered into the ears of the Lord of sabaoth.'),
            plain(7, 'Be patient therefore, brethren, unto the coming of the Lord. Behold, the husbandman waiteth for the precious fruit of the earth, and hath long patience for it, until he receive the early and latter rain.'),
            plain(8, 'Be ye also patient; stablish your hearts: for the coming of the Lord draweth nigh.'),
            plain(10, 'Take, my brethren, the prophets, who have spoken in the name of the Lord, for an example of suffering affliction, and of patience.'),
            plain(11, 'Behold, we count them happy which endure. Ye have heard of the patience of Job, and have seen the end of the Lord; that the Lord is very pitiful, and of tender mercy.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jam5-rich',
          html:
            'James addresses the rich who make their plans without reference to God. They boast of their commerce, their gains, their ability to secure their future. But their riches will rot. The gold and silver will rust. And worse, they have defrauded their workers—withheld wages, exploited labor. The cries of the oppressed have reached God&apos;s ears.',
        },
        {
          kind: 'greek',
          id: 'jam5-makrothumia',
          title: 'Makrothumia — Patience',
          script: 'μακροθυμία',
          translit: '<strong>Makrothumia</strong> · patience; longsuffering; steadfast endurance',
          description:
            'This is not passive waiting, but active endurance. It means bearing up under difficulty without losing hope or faith. It is the long patience of a farmer waiting for harvest—trusting in the seasons, trusting in what he cannot control.',
        },
        {
          kind: 'commentary',
          id: 'jam5-job',
          html:
            'James holds up Job as the model of patience. Job lost everything—his health, his wealth, his children—and yet he did not curse God. He waited. He endured. And in the end, the Lord showed him compassion and restored him abundantly. This is the kind of patience the suffering are called to: not the patience of those who lack hardship, but the steadfast faith of those who endure it.',
        },
        {
          kind: 'christ',
          id: 'jam5-christ-passion',
          title: 'Christ Connection — Suffering & Glory',
          html:
            'Jesus endured suffering with perfect patience, knowing that beyond the cross lay resurrection. He is the ultimate example of one who suffered unjustly yet trusted God. His coming again is the promise that our suffering, too, will give way to glory and healing.',
        },
        {
          kind: 'carry',
          html:
            'The farmer waiting for harvest trusts in the early rain and the latter rain—the seasons he does not control. So too the Christian must trust. Hardship may come. Injustice may strike. But the Lord&apos;s coming draws near. God sees every tear, every exploitation, every injustice. He will make it right.',
        },
        {
          kind: 'reflection',
          id: 'jam5-patience',
          prompt: 'In what area of your life are you being called to patient endurance? How might Job&apos;s example strengthen you?',
        },
      ],
    },

    /* ─── James 5:12–18 — Prayer & Healing ──────────────────────────────── */
    {
      ref: 'James 5:12–18',
      title: 'The Power of Prayer',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(12, 'But above all things, my brethren, swear not, neither by heaven, neither by the earth, neither by any other oath: but let your yea be yea; and your nay, nay; lest ye fall into condemnation.'),
            plain(14, 'Is any sick among you? let him call for the elders of the church; and let them pray over him, anointing him with oil in the name of the Lord:'),
            plain(15, 'And the prayer of faith shall save the sick, and the Lord shall raise him up; and if he have committed sins, they shall be forgiven him.'),
            plain(16, 'Confess your faults one to another, and pray one for another, that ye may be healed. The effectual fervent prayer of a righteous man availeth much.'),
            plain(17, 'Elias was a man subject to like passions as we are, and he prayed earnestly that it should not rain: and it rained not on the earth by the space of three years and six months.'),
            plain(18, 'And he prayed again, and the heaven gave rain, and the earth brought forth her fruit.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jam5-oaths',
          html:
            'James emphasizes simplicity and truth. Do not swear elaborate oaths. Let your word be true. Say yes when you mean yes, no when you mean no. This reflects the larger theme: the Christian&apos;s life is to be one of transparent honesty and dependence on God, not elaborate schemes or false vows.',
        },
        {
          kind: 'greek',
          id: 'jam5-proseuchomai',
          title: 'Proseuchomai — To Pray',
          script: 'προσεύχομαι',
          translit: '<strong>Proseuchomai</strong> · to pray; to make earnest request to God; supplication',
          description:
            'Prayer is not mere religious formality but earnest conversation with God. It is bringing our needs, our desires, our intercessions directly before Him with confidence that He hears.',
        },
        {
          kind: 'commentary',
          id: 'jam5-sick',
          html:
            'When someone is sick, the church gathers. The elders pray over him and anoint him with oil. This is the church at its truest—not judging or condemning, but interceding for one another. The prayer of faith saves the sick. Not faith in medicine alone, but faith in the God who speaks sickness and health into being. And forgiveness follows healing, for often our sicknesses are bound to our sins.',
        },
        {
          kind: 'christ',
          id: 'jam5-christ-healer',
          title: 'Christ Connection — Healer & Intercessor',
          html:
            'Jesus healed the sick in the presence and power of the Holy Spirit. He taught his disciples to pray for the sick and to see healing as a sign of the kingdom of God. Even now, he sits at the right hand of God making intercession for us. He is both healer and advocate before the Father.',
        },
        {
          kind: 'carry',
          html:
            'James gives the example of Elijah—a man subject to the same passions as we are, yet his prayer had cosmic effect. He prayed and stopped the rain. He prayed again and it came. This is the power available to ordinary believers. When we pray with faith, when we confess our sins to one another and intercede for one another, healing comes—spiritual, relational, and physical.',
        },
        {
          kind: 'reflection',
          id: 'jam5-prayer',
          prompt: 'What do you need to bring before God in prayer right now? Who do you need to intercede for?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Be patient therefore, brethren, unto the coming of the Lord. The prayer of faith shall save the sick, and the Lord shall raise him up. Confess your faults one to another, and pray one for another, that ye may be healed.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'James 5 · Study Guide',
  },

  hasHebrew: false,
};
