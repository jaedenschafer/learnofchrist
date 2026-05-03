import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Proverbs 19 — Mercy for the Poor and the Standing Purpose of God
 *
 * He that hath pity upon the poor lendeth unto the Lord. Many are the
 * devices in a man&apos;s heart; nevertheless the counsel of the Lord, that
 * shall stand. God&apos;s purposes endure while human schemes come and go.
 */
export const PROVERBS_19: RichChapterContent = {
  bookSlug: 'proverbs',
  bookName: 'Proverbs',
  chapter: 19,

  estimatedMinutes: { beginner: 1, intermediate: 2, deep: 3 },
  intros: [
    'Proverbs 19 returns to themes of justice and God&apos;s sovereignty. Mercy toward the poor is not charity—it is a loan given to the Lord Himself, who will repay. And while humans scheme and devise endless strategies, the counsel of the Lord stands unmoved, outlasting every human contrivance. This is the world as it truly is: human busyness playing out beneath the gaze of God&apos;s unwavering purpose.',
  ],

  sections: [
    {
      ref: 'Proverbs 19:17',
      title: 'Lending to the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(17, 'He that hath pity upon the poor lendeth unto the Lord; and that which he hath given will he pay him again.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov19-lend-lord',
          html:
            'When you give to the poor, you are not merely dispensing charity to the unfortunate. You are making a loan to the Lord Himself. This transforms the act. It is no longer condescension—the rich helping the less fortunate. It is a transaction with the divine. And the Lord is a creditor who pays back. The man who shows pity to the poor is making an investment with eternal returns.',
        },
        {
          kind: 'commentary',
          id: 'prov19-repay',
          html:
            'The repayment is assured: "that which he hath given will he pay him again." Not in coin, perhaps. But in blessing, in preservation, in that mysterious multiplication that God gives to the generous. The promise is not metaphorical. It is stated with the certainty of a business transaction—the Lord is not in debt to anyone.',
        },
        {
          kind: 'christ',
          id: 'prov19-christ-poor',
          title: 'Christ Connection — In the Least of These',
          html:
            'In Matthew 25, Jesus identifies Himself with the poor, the hungry, the imprisoned: "Inasmuch as ye have done it unto one of the least of these my brethren, ye have done it unto me." To show pity to the poor is not merely to show pity to humans. It is to show pity to Christ Himself. This transforms mercy into worship.',
        },
        {
          kind: 'carry',
          html:
            'Do you see the poor as those you help, or as extensions of the Lord to whom you have made a loan? Let that shift change how you give.',
        },
        {
          kind: 'reflection',
          id: 'prov19-pity',
          prompt: 'How would your giving change if you truly believed you were lending directly to God?',
        },
      ],
    },

    {
      ref: 'Proverbs 19:21',
      title: 'The Counsel of the Lord Shall Stand',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(21, 'Many are the devices in a man&apos;s heart: nevertheless the counsel of the Lord, that shall stand.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'prov19-devices',
          html:
            'A man devises many things. His heart is full of schemes, plans, strategies, hopes. He is restless with possibility. This is not wrong—it is human nature. But many of these devices will come to nothing. Not because they are ill-intentioned, but because they are human, limited, subject to forces beyond human control. Yet the counsel of the Lord—His purpose, His plan for creation—that shall stand.',
        },
        {
          kind: 'commentary',
          id: 'prov19-stand',
          html:
            'The word "stand" appears multiple times in Proverbs. The righteous shall stand in judgment. The tower of the Lord stands firm. And here: the counsel of the Lord stands—established, unmovable, certain. While human plans scatter like leaves, God&apos;s purpose remains. This is not cause for despair. It is cause for trust. If your purposes align with His, you are on the side of the enduring.',
        },
        {
          kind: 'carry',
          html:
            'What are your devices today? What are you scheming, hoping for, planning? Hold them lightly. Seek instead to align yourself with the counsel of the Lord, the purpose that stands.',
        },
        {
          kind: 'reflection',
          id: 'prov19-align',
          prompt: 'What would change in your life if you stopped trying to force your plans to succeed and instead aligned yourself with God&apos;s counsel?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'He that hath pity upon the poor lendeth unto the Lord; and that which he hath given will he pay him again.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Proverbs 19 · Study Guide',
  },
};
