import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Luke 13 — Repentance and the Kingdom Growing
 *
 * People tell Jesus of the Galileans whose blood Pilate mingled with their
 * sacrifices. Jesus says: "Suppose ye that these Galileans were sinners above
 * all the Galileans, because they suffered such things? I tell you, Nay: but,
 * except ye repent, ye shall all likewise perish." A fig tree has borne no
 * fruit for three years. The owner wants to cut it down. The dresser asks for
 * one more year: "Let it alone this year also, till I shall dig about it, and
 * dung it: and if it bear fruit, well: and if not, then after that thou shalt
 * cut it down." On the Sabbath, Jesus heals a bent woman. The synagogue ruler
 * is indignant. Jesus speaks of the kingdom: "It is like a grain of mustard
 * seed... It is like leaven, which a woman took and hid in three measures of meal."
 */
export const LUKE_13: RichChapterContent = {
  bookSlug: 'luke',
  bookName: 'Luke',
  chapter: 13,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 5 },
  intros: [
    'People come to Jesus with news: Pilate has mingled the blood of Galileans with their sacrifices. Some see this as a sign of their great sin—they suffered because they were especially wicked. But Jesus rebukes this reasoning. "Suppose ye that these Galileans were sinners above all the Galileans, because they suffered such things? I tell you, Nay." Suffering is not always proportionate to sin. But all must repent. "Except ye repent, ye shall all likewise perish."',
    'Jesus speaks parables of the kingdom. A man plants a fig tree in his vineyard. For three years it bears no fruit. He says to the dresser: "Cut it down; why cumbereth it the ground?" But the dresser asks: "Let it alone this year also, till I shall dig about it, and dung it: and if it bear fruit, well: and if not, then after that thou shalt cut it down." The kingdom is given time to grow, to bear fruit. But judgment comes if it does not.',
  ],

  sections: [
    {
      ref: 'Luke 13:1–21',
      title: 'Repentance and Growth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(3, 'I tell you, Nay: but, except ye repent, ye shall all likewise perish.'),
            plain(6, 'He spake also this parable; A certain man had a fig tree planted in his vineyard; and he came and sought fruit thereon, and found none.'),
            plain(9, 'And if it bear fruit, well: and if not, then after that thou shalt cut it down.'),
            plain(19, 'It is like a grain of mustard seed, which a man took, and cast into his garden; and it grew, and waxed a great tree; and the fowls of the air lodged in the branches of it.'),
            plain(20, 'And again he said, Whereunto shall I liken the kingdom of God?'),
            plain(21, 'It is like leaven, which a woman took and hid in three measures of meal, till the whole was leavened.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke13-repentance',
          html:
            'Jesus teaches a hard truth: suffering does not necessarily indicate special sin. The Galileans were not especially wicked because they suffered. But Jesus uses the occasion to call all to repentance. All are sinners. All must repent or perish. This is not judgment targeted at the wicked alone. It is a universal call.',
        },
        {
          kind: 'greek',
          id: 'luke13-metanoeō',
          title: 'Metanoeō — Repent; Turn Around',
          script: 'μετανοέω',
          translit: '<strong>Metanoeō</strong> · repent; turn around; change one&apos;s mind',
          description:
            'Jesus calls all to metanoeō—to turn around, to change direction. This is not optional. Without repentance, all will perish. Repentance is the precondition for salvation.',
        },
        {
          kind: 'commentary',
          id: 'luke13-fig-tree',
          html:
            'The parable of the fig tree presents a dialogue between justice and mercy. The owner has patience. The fig tree has failed to produce for three years. Why should it consume the ground? But the dresser intercedes: "Let it alone this year also." He will dig around it, nourish it, give it another chance. This is the patience of God. But patience is not infinite. If fruit does not come, the tree will be cut down.',
        },
        {
          kind: 'commentary',
          id: 'luke13-mustard-seed',
          html:
            'Jesus speaks of the kingdom as a mustard seed. It is tiny. It is insignificant. A man casts it into his garden. But it grows and becomes a great tree. The fowls lodge in its branches. From small beginnings, the kingdom grows to great size. This is not conquest by power. This is organic growth.',
        },
        {
          kind: 'christ',
          id: 'luke13-christ-kingdom-growth',
          title: 'Christ Connection — The Kingdom Growing',
          html:
            'The kingdom of God is not stationary. It grows. It spreads. It transforms. Like leaven, it works invisibly through the dough until the whole is leavened. This is the nature of the gospel—transformative, pervasive, unstoppable.',
        },
        {
          kind: 'carry',
          html:
            'Jesus heals a woman bent double for eighteen years on the Sabbath. The synagogue ruler is indignant: "There are six days in which men ought to work: in them therefore come and be healed; and not on the sabbath day." Jesus rebukes him. If you loose your ox on the Sabbath to give it water, why not loose this woman from her infirmity? The Sabbath was made for man, not man for the Sabbath.',
        },
        {
          kind: 'reflection',
          id: 'luke13-repent-reflect',
          prompt: 'Jesus calls all to repentance. What does this mean for you today? Where do you need to turn around?',
        },
      ],
    },

    {
      ref: 'Luke 13:22–35',
      title: 'The Strait Gate and the Rejected City',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(24, 'Strive to enter in at the strait gate: for many, I say unto you, will seek to enter in, and shall not be able.'),
            plain(25, 'When once the master of the house is risen up, and hath shut to the door, and ye begin to stand without, and to knock at the door, saying, Lord, Lord, open unto us; and he shall answer and say unto you, I know you not whence ye are:'),
            plain(28, 'There shall be weeping and gnashing of teeth, when ye shall see Abraham, and Isaac, and Jacob, and all the prophets, in the kingdom of God, and you yourselves thrust out.'),
            plain(31, 'The same day there came certain of the Pharisees, saying unto him, Get thee out, and depart hence: for Herod will kill thee.'),
            plain(34, 'O Jerusalem, Jerusalem, which killest the prophets, and stonest them that are sent unto thee; how often would I have gathered thy children together, as a hen doth gather her brood under her wings, and ye would not!'),
            plain(35, 'Behold, your house is left unto you desolate: and verily I say unto you, Ye shall not see me, until the time come when ye shall say, Blessed is he that cometh in the name of the Lord.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke13-strait-gate',
          html:
            'Jesus says: "Strive to enter in at the strait gate." The gate is narrow. The way is difficult. Yet many will seek to enter and shall not be able. Not because the gate is locked, but because they have delayed, put it off, found it too difficult. When the master shuts the door, those outside cannot enter. Too late.',
        },
        {
          kind: 'greek',
          id: 'luke13-stenos',
          title: 'Stenos — Strait; Narrow; Difficult',
          script: 'στενός',
          translit: '<strong>Stenos</strong> · narrow; strait; compressed; difficult',
          description:
            'The gate is stenos—narrow, compressed. It is not the wide gate of self-gratification. It is narrow, difficult, demanding. Yet this is the gate to life.',
        },
        {
          kind: 'commentary',
          id: 'luke13-jerusalem',
          html:
            'Jesus laments over Jerusalem. "O Jerusalem, Jerusalem, which killest the prophets, and stonest them that are sent unto thee; how often would I have gathered thy children together, as a hen doth gather her brood under her wings, and ye would not!" This is the pathos of Jesus—the yearning to gather, the refusal of those who should know better. Jerusalem has rejected its prophets. Now it rejects its Messiah.',
        },
        {
          kind: 'commentary',
          id: 'luke13-house-desolate',
          html:
            'Jesus says: "Behold, your house is left unto you desolate." The temple that Israel had trusted in, the city they had fortified, will be left empty. "Ye shall not see me, until the time come when ye shall say, Blessed is he that cometh in the name of the Lord." Judgment comes. But a future redemption is promised.',
        },
        {
          kind: 'christ',
          id: 'luke13-christ-rejected',
          title: 'Christ Connection — Rejection and Future Hope',
          html:
            'Jesus is rejected by Jerusalem. Yet even in rejection, there is hope. A day will come when the city will cry: "Blessed is he that cometh in the name of the Lord." Jesus speaks of His future coming in judgment and restoration.',
        },
        {
          kind: 'reflection',
          id: 'luke13-jerusalem-reflect',
          prompt: 'Jesus wept over Jerusalem because it did not recognize Him. What does it mean to recognize Jesus today? What prevents recognition?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Except ye repent, ye shall all likewise perish. Strive to enter in at the strait gate. O Jerusalem, I would have gathered thy children, but ye would not.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Luke 13 · Study Guide',
  },

  hasHebrew: false,
};
