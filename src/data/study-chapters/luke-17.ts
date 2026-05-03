import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Luke 17 — Forgiveness and the Kingdom Coming
 *
 * Jesus teaches His disciples: "It is impossible but that offences will come:
 * but woe unto him, through whom they come." Yet forgive seventy times seven.
 * A servant ploughs or feeds cattle. Does the master say "Sit down to meat"?
 * No. The servant eats after he has served. "So likewise ye, when ye shall
 * have done all those things which are commanded you, say, We are unprofitable
 * servants: we have done that which was our duty to do." Ten lepers approach
 * Jesus, standing afar off, asking for cleansing. Jesus says: "Go shew
 * yourselves unto the priests." As they go, they are cleansed. Only one
 * returns to give thanks—a Samaritan. Jesus asks: "Were there not ten
 * cleansed? but where are the nine?" The kingdom is now, yet not yet fully come.
 */
export const LUKE_17: RichChapterContent = {
  bookSlug: 'luke',
  bookName: 'Luke',
  chapter: 17,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 6 },
  intros: [
    'Jesus teaches His disciples about offences and forgiveness. "It is impossible but that offences will come: but woe unto him, through whom they come." Yet when offences come, forgive. The disciples say: "Lord, increase our faith." Jesus says: "If ye had faith as a grain of mustard seed, ye might say unto this sycamine tree, Be thou plucked up by the root, and be thou planted in the sea; and it should obey you." Faith is not measured by quantity but by its object. Faith in God, though small, can accomplish the impossible.',
    'Jesus speaks of servants and duty. "And which of you, having a servant ploughing or feeding cattle, will say unto him by and by, when he is come from the field, Go and sit down to meat?" No. The servant eats after his work is done. This is the picture of duty without presumption. We serve. We do what is commanded. We say: "We are unprofitable servants: we have done that which was our duty to do."',
  ],

  sections: [
    {
      ref: 'Luke 17:1–19',
      title: 'Forgiveness and Gratitude',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(3, 'Take heed to yourselves: If thy brother trespass against thee, rebuke him; and if he repent, forgive him.'),
            plain(4, 'And if he trespass against thee seven times in a day, and seven times in a day turn again to thee, saying, I repent; thou shalt forgive him.'),
            plain(7, 'But which of you, having a servant ploughing or feeding cattle, will say unto him by and by, when he is come from the field, Go and sit down to meat?'),
            plain(10, 'So likewise ye, when ye shall have done all those things which are commanded you, say, We are unprofitable servants: we have done that which was our duty to do.'),
            plain(15, 'And Jesus saith unto him, Were there not ten cleansed? but where are the nine?'),
            plain(18, 'There are not found that returned to give glory to God, save this stranger.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke17-forgive',
          html:
            'Jesus teaches forgiveness without limit. "If thy brother trespass against thee... if he repent, forgive him." Even if he trespasses seven times in a day, and seven times turns and repents, forgive him. This is radical. It is not retaliation, not keeping score, not waiting for perfect behavior before granting forgiveness. If he repents, forgive.',
        },
        {
          kind: 'greek',
          id: 'luke17-metanoeō',
          title: 'Metanoeō — Repent; Turn Around',
          script: 'μετανοέω',
          translit: '<strong>Metanoeō</strong> · repent; turn around; change one&apos;s mind',
          description:
            'Forgiveness is not given automatically. It requires metanoia—turning around, change of mind. The brother must repent. Then forgiveness is offered without measure.',
        },
        {
          kind: 'commentary',
          id: 'luke17-servant',
          html:
            'A master does not invite his servant to sit down and eat before the servant has finished working. The servant works first. Then eats. This is the order of things. When we have done all we are commanded, we say: "We are unprofitable servants." We have done our duty. No more, no less. We do not deserve reward. We have done what was obligatory.',
        },
        {
          kind: 'commentary',
          id: 'luke17-lepers',
          html:
            'Ten lepers stand afar off and cry out: "Jesus, Master, have mercy on us." Jesus says: "Go shew yourselves unto the priests." As they go, they are cleansed. One of them, a Samaritan, returns and falls at Jesus&apos; feet, giving thanks. Jesus asks the question that hangs in the air: "Were there not ten cleansed? but where are the nine?" Only one, the outsider, the Samaritan, returns to give glory to God.',
        },
        {
          kind: 'christ',
          id: 'luke17-christ-mercy',
          title: 'Christ Connection — Mercy and Gratitude',
          html:
            'The healing of the lepers demonstrates that Jesus&apos; mercy is universal. Samaritans are healed. The command is to show themselves to the priests—to obey the law, to be reintegrated into society. Yet only one returns to give thanks. Gratitude is rare. Yet it is essential.',
        },
        {
          kind: 'carry',
          html:
            'Jesus says to the Samaritan: "Arise, go thy way: thy faith hath made thee whole." Not just his leprosy is cured. He is made whole—restored to health, restored to community, restored to his place before God. Faith and gratitude together make wholeness.',
        },
        {
          kind: 'reflection',
          id: 'luke17-gratitude-reflect',
          prompt: 'Are you like the nine who were healed and walked away? Or the one who returned to give thanks? What role does gratitude play in your faith?',
        },
      ],
    },

    {
      ref: 'Luke 17:20–37',
      title: 'The Kingdom and Its Coming',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            plain(20, 'And when he was demanded of the Pharisees, when the kingdom of God should come, he answered them and said, The kingdom of God cometh not with observation:'),
            plain(21, 'Neither shall they say, Lo here! or, lo there! for, behold, the kingdom of God is within you.'),
            plain(24, 'For as the lightning, that lighteneth out of the one part of heaven, shineth unto the other part of heaven; so shall also the Son of man be in his day.'),
            plain(26, 'And as it was in the days of Noe, so shall it be also in the days of the Son of man.'),
            plain(30, 'Even thus shall it be in the day when the Son of man is revealed.'),
            plain(37, 'And they said unto him, Where, Lord? And he said unto them, Wheresoever the body is, thither will the eagles be gathered together.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke17-kingdom-within',
          html:
            'The Pharisees ask: "When shall the kingdom of God come?" Jesus answers: "The kingdom of God cometh not with observation." No signs, no visible markers that can be calculated. "Neither shall they say, Lo here! or, lo there! for, behold, the kingdom of God is within you." The kingdom is interior, spiritual, present among those who have eyes to see.',
        },
        {
          kind: 'greek',
          id: 'luke17-basileia',
          title: 'Basileia — Kingdom; Reign; Rule',
          script: 'βασιλεία',
          translit: '<strong>Basileia</strong> · kingdom; reign; rule; sovereignty',
          description:
            'The kingdom is not a place to be entered at a specific date. It is the reign of God, present among those who receive it, growing invisibly like leaven in dough.',
        },
        {
          kind: 'commentary',
          id: 'luke17-lightning',
          html:
            'Jesus speaks of His coming: "As the lightning, that lighteneth out of the one part of heaven, shineth unto the other part of heaven; so shall also the Son of man be in his day." The coming will be sudden, visible to all, irresistible. But it will also be like the days of Noah—people eating, drinking, marrying, not aware until the flood comes.',
        },
        {
          kind: 'commentary',
          id: 'luke17-eagles',
          html:
            'Jesus speaks in apocalyptic imagery: "Wheresoever the body is, thither will the eagles be gathered together." Where death is, judgment is near. The coming of the Son of man will be a day of division—some taken, some left. The separation of the righteous from the unrighteous will be complete.',
        },
        {
          kind: 'christ',
          id: 'luke17-christ-return',
          title: 'Christ Connection — The Future and the Present',
          html:
            'Jesus teaches that the kingdom is both now and not yet. It is within you now—spiritual, invisible. But it will also come visibly when He returns. The disciple lives in both realities: enjoying the kingdom now, awaiting its full manifestation.',
        },
        {
          kind: 'reflection',
          id: 'luke17-kingdom-reflect',
          prompt: 'What does it mean that the kingdom of God is "within you"? How is the kingdom both present now and still to come?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'If he repent, forgive him. The kingdom of God is within you. As the lightning shineth, so shall the Son of man be.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Luke 17 · Study Guide',
  },

  hasHebrew: false,
};
