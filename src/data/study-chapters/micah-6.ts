import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Micah 6 — What the Lord Requires
 *
 * "What doth the Lord require of thee, but to do justly, and to love mercy,
 * and to walk humbly with thy God?" Micah distills God&apos;s entire moral law
 * into three commandments.
 */
export const MICAH_6: RichChapterContent = {
  bookSlug: 'micah',
  bookName: 'Micah',
  chapter: 6,

  estimatedMinutes: { beginner: 2, intermediate: 3, deep: 4 },
  intros: [
    'Micah presents God as calling Israel into a legal proceeding—a covenant lawsuit. God has a controversy with His people. He reminds them of all He has done: brought them up from Egypt, sent Moses and Aaron, delivered them from Balak&apos;s curse. And He asks: "What have I done to thee? Wherein have I wearied thee?" The implied answer is: nothing. God has done nothing but good.',
    'In response to God&apos;s faithfulness, the people ask: "Wherewith shall I come before the Lord?" And Micah answers with what may be the clearest statement of God&apos;s moral requirement in all of Scripture: Do justly. Love mercy. Walk humbly with your God. Not sacrifice, not ritual, not external observance, but a transformed heart and a changed life.',
  ],

  sections: [
    {
      ref: 'Micah 6:1–8',
      title: 'God&apos;s Covenant Lawsuit and What He Requires',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(1, 'Hear ye now what the Lord saith; Arise, contend thou before the mountains, and let the hills hear thy voice.'),
            plain(2, 'Hear, O ye mountains, the Lord&apos;s controversy with his people, and he will plead with Jacob.'),
            plain(3, 'O my people, what have I done unto thee? and wherein have I wearied thee? testify against me.'),
            plain(4, 'For I brought thee up out of the land of Egypt, and redeemed thee out of the house of servants; and I sent before thee Moses, Aaron, and Miriam.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'micah-6-78mid-1',
          html:
            'Micah pivots — from naming the wound to naming the healer. The next verses move closer to the hope that sustained him.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(5, 'O my people, remember now what Balak king of Moab consulted, and what Balaam the son of Beor answered him from Shittim unto Gilgal; that ye may know the righteousness of the Lord.'),
            plain(6, 'Wherewith shall I come before the Lord, and bow myself before the high God? shall I come before him with burnt offerings, with calves of a year old?'),
            plain(7, 'Will the Lord be pleased with thousands of rams, or with ten thousands of rivers of oil? shall I give my firstborn for my transgression, the fruit of my body for the sin of my soul?'),
            plain(8, 'He hath shewed thee, O man, what is good; and what doth the Lord require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'micah6-required',
          html:
            'God requires three things: to do justly—to act with integrity and fairness. To love mercy—not merely to grant it reluctantly, but to cherish and delight in compassion. To walk humbly—to move through life not with arrogance or pride, but in humility before God. These are not external rituals. They are the transformation of the inner person reflected in outward action.',
        },
        {
          kind: 'hebrew',
          id: 'micah6-hetsed',
          title: 'Hetsed — "Mercy"',
          script: 'חֶסֶד',
          translit: '<strong>Hetsed</strong> · mercy; loving-kindness; covenant loyalty',
          description:
            'The Hebrew word "hetsed" is deeply relational. It means the mercy and kindness that flows from knowing someone intimately and committing to their good. To love mercy is to love the character of God Himself.',
        },
        {
          kind: 'christ',
          id: 'micah6-christ-fulfills',
          title: 'Christ Connection — Christ Fulfills These Perfectly',
          html:
            'Christ embodies these three requirements perfectly. He acted with perfect justice, never compromising truth for comfort. He loved mercy—He did not condemn the woman taken in adultery, and He died for the sins of those who rejected Him. And He walked humbly—though equal to the Father, He emptied Himself, became human, washed His disciples&apos; feet. He is the man who does justly, loves mercy, and walks humbly with God.',
        },
        {
          kind: 'carry',
          html:
            'If we ask "What does God require of me?" the answer is the same now as in Micah&apos;s time. Not more sacrifice, not more striving to perfect ourselves through our own effort, but a fundamental reorientation toward justice, mercy, and humility. These three transform how we treat others and how we stand before God.',
        },
        {
          kind: 'reflection',
          id: 'micah6-require',
          prompt:
            'Of the three things God requires—do justly, love mercy, walk humbly—which comes most naturally to you? Which is the hardest to practice?',
        },
      ],
    },

    {
      ref: 'Micah 6:9–16',
      title: 'The Consequences of Injustice',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(9, 'The Lord&apos;s voice crieth unto the city, and the man of wisdom shall see thy name: hear ye the rod, and who hath appointed it.'),
            plain(10, 'Are there yet the treasures of wickedness in the house of the wicked, and the scant measure that is abominable?'),
            plain(11, 'Shall I count them pure with the wicked balances, and with the bag of deceitful weights?'),
            plain(12, 'For the rich men thereof are full of violence, and the inhabitants thereof have spoken lies, and their tongue is deceitful in their mouth.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'micah-6-78mid-2',
          html:
            'Micah pivots — from naming the wound to naming the healer. The next verses move closer to the hope that sustained him.',
        },
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(13, 'Therefore also will I make thee sick in smiting thee, in making thee desolate because of thy sins.'),
            plain(14, 'Thou shalt eat, but not be satisfied; and thy casting down shall be in the midst of thee; and thou shalt take hold, but shall not deliver; and that which thou deliverest will I give up to the sword.'),
            plain(15, 'Thou shalt sow, but thou shalt not reap; thou shalt tread the olives, but thou shalt not anoint thee with oil; and sweet wine, but shalt not drink wine.'),
            plain(16, 'For the statutes of Omri are kept, and all the works of the house of Ahab: and ye walk in their counsels; that I should make thee a desolation, and the inhabitants thereof an hissing: therefore ye shall bear the reproach of my people.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'micah6-deceit',
          html:
            'God condemns those who practice injustice in commerce—scant measures, deceitful weights, the tools of fraud. Those who enrich themselves through dishonesty. But God sees. And His judgment is precise: you will eat but not be satisfied. You will sow but not reap. Your labor will not bear fruit. The injustice that seemed profitable will become your undoing.',
        },
        {
          kind: 'commentary',
          id: 'micah6-omri',
          html:
            'Omri and his house—Ahab—are named as symbols of what Israel has become. The statutes of Omri, the works of Ahab, represent the systematic adoption of evil as a way of life. And for this, Israel will be made a desolation, a hissing among the nations.',
        },
        {
          kind: 'christ',
          id: 'micah6-christ-satisfaction',
          title: 'Christ Connection — Christ Satisfies the Hungry',
          html:
            'While injustice leaves people eating but not satisfied, Christ offers the bread of life—not bread that nourishes briefly, but bread that lasts unto eternity. He satisfies the deepest hunger of the human soul. Those who come to Him will never hunger.',
        },
        {
          kind: 'carry',
          html:
            'The promise of injustice is profit. The reality is emptiness. No amount of accumulated wealth through dishonest means will satisfy. But a life lived justly, mercifully, and humbly, though it may involve less material gain, brings the peace and contentment that injustice can never achieve.',
        },
        {
          kind: 'reflection',
          id: 'micah6-satisfaction',
          prompt:
            'Where do you seek satisfaction? Are there ways you have compromised justice or mercy in pursuit of it?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'What doth the Lord require of thee, but to do justly, and to love mercy, and to walk humbly with thy God?',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Micah 6 · Study Guide',
  },

  hasHebrew: true,
};
