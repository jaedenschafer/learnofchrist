import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Luke 16 — Stewardship and Eternal Reality
 *
 * A rich man has a steward accused of wasting his goods. The master calls him
 * to account. The steward, knowing he will be dismissed, goes out and reduces
 * the debts others owe his master—making friends. "The lord commended the
 * unjust steward, because he had done wisely: for the children of this world
 * are in their generation wiser than the children of light." Jesus teaches:
 * "Make to yourselves friends of the mammon of unrighteousness; that, when ye
 * fail, they may receive you into everlasting habitations." The rich man and
 * Lazarus: the rich man, clothed in purple, feasts every day. Lazarus, a
 * beggar full of sores, lies at his gate. When both die, Lazarus is carried
 * to Abraham&apos;s bosom. The rich man cries out from Hades: "I am tormented
 * in this flame." There is a great gulf fixed.
 */
export const LUKE_16: RichChapterContent = {
  bookSlug: 'luke',
  bookName: 'Luke',
  chapter: 16,

  estimatedMinutes: { beginner: 1, intermediate: 4, deep: 6 },
  intros: [
    'A rich man has a steward. The steward is accused of wasting his master&apos;s goods. The master calls him and says: "Give an account of thy stewardship; for thou mayest be no longer steward." The steward realizes his position is lost. He cannot dig; he is ashamed to beg. So he goes to those who owe his master money and reduces their debts. He reduces one debt by fifty percent. Another by twenty percent. When his master hears what he has done, the master does not condemn him. Instead: "The lord commended the unjust steward, because he had done wisely."',
    'Jesus teaches: "Make to yourselves friends of the mammon of unrighteousness; that, when ye fail, they may receive you into everlasting habitations." Money is called mammon of unrighteousness. Yet it can be used wisely. Those who use earthly wealth to build relationships, to show kindness, to demonstrate mercy—they are making friends who will receive them into eternal habitation. But then Jesus tells a parable of stark contrast.',
  ],

  sections: [
    {
      ref: 'Luke 16:1–18',
      title: 'The Unjust Steward and True Riches',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(1, 'And he said also unto his disciples, There was a certain rich man, which had a steward; and the same was accused unto him that he had wasted his goods.'),
            plain(8, 'And the lord commended the unjust steward, because he had done wisely: for the children of this world are in their generation wiser than the children of light.'),
            plain(9, 'And I say unto you, Make to yourselves friends of the mammon of unrighteousness; that, when ye fail, they may receive you into everlasting habitations.'),
            plain(10, 'He that is faithful in that which is least is faithful also in much: and he that is unjust in the least is unjust also in much.'),
            plain(13, 'No servant can serve two masters: for either he will hate the one, and love the other; or else he will hold to the one, and despise the other. Ye cannot serve God and mammon.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke16-steward',
          html:
            'The unjust steward is told his position is lost. He cannot return. So he acts decisively. He reduces the debts owed his master. This is shrewd. In one action, he makes friends who will remember his kindness and perhaps help him when he is in need. His master, ironically, admires this shrewdness. "He had done wisely." Not morally. Wisely. He has arranged his affairs so that he will have shelter and support when he falls.',
        },
        {
          kind: 'greek',
          id: 'luke16-mamōna',
          title: 'Mamōna — Wealth; Money; Mammon',
          script: 'μαμών',
          translit: '<strong>Mamōna</strong> · wealth; money; mammon; riches; property',
          description:
            'Mammon is wealth that can be used either wisely or unwisely. Jesus calls it "mammon of unrighteousness"—wealth that has been acquired or is used unjustly. Yet even this can be converted to righteous use.',
        },
        {
          kind: 'commentary',
          id: 'luke16-faithful-least',
          html:
            'Jesus draws a principle: "He that is faithful in that which is least is faithful also in much." Faithfulness in small matters reveals character. How you handle earthly goods shows how trustworthy you are with spiritual goods. The reverse is also true: unfaithfulness in small things shows unfaithfulness in great things.',
        },
        {
          kind: 'commentary',
          id: 'luke16-two-masters',
          html:
            'Jesus states a stark principle: "No servant can serve two masters." You cannot serve both God and mammon. Not because mammon is neutral. But because mammon demands ultimate allegiance. It demands you trust it, depend on it, make decisions based on it. You cannot do this and also trust God. One must be the master. The other must be rejected.',
        },
        {
          kind: 'christ',
          id: 'luke16-christ-steward',
          title: 'Christ Connection — Faithful Stewardship',
          html:
            'The parable teaches that faithfulness in stewardship matters. How we use earthly wealth is not trivial. It reveals our character and determines our eternal reward. Yet wealth is not the ultimate good. God is. The wise steward recognizes this and acts accordingly.',
        },
        {
          kind: 'carry',
          html:
            'The Pharisees, who are covetous, hear these things and deride Jesus. But Jesus says: "Ye are they which justify yourselves before men; but God knoweth your hearts: for that which is highly esteemed among men is abomination in the sight of God." The world&apos;s values are not God&apos;s values.',
        },
        {
          kind: 'reflection',
          id: 'luke16-steward-reflect',
          prompt: 'How would the steward&apos;s approach change if he knew his master would never find out about his actions? What does this teach about the difference between wisdom and integrity?',
        },
      ],
    },

    {
      ref: 'Luke 16:19–31',
      title: 'The Rich Man and Lazarus',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(19, 'There was a certain rich man, which was clothed in purple and fine linen, and fared sumptuously every day:'),
            plain(20, 'And there was a certain beggar named Lazarus, which was laid at his gate, full of sores,'),
            plain(21, 'And desiring to be fed with the crumbs which fell from the rich man&apos;s table: moreover the dogs came and licked his sores.'),
            plain(23, 'And in hell he lift up his eyes, being in torments, and seeth Abraham afar off, and Lazarus in his bosom.'),
            plain(25, 'But Abraham said, Son, remember that thou in thy lifetime receivedst thy good things, and likewise Lazarus evil things: but now he is comforted, and thou art tormented.'),
            plain(26, 'And beside all this, between us and you there is a great gulf fixed: so that they which would pass from hence to you cannot; neither can they pass to us, that would come from thence.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'luke16-rich-man',
          html:
            'The rich man is clothed in purple and fine linen. Purple was the color of royalty and wealth. He fares sumptuously every day—he feasts lavishly every single day. This is not occasional indulgence. This is the pattern of his life. He is a man of pleasure, of luxury, of excess.',
        },
        {
          kind: 'commentary',
          id: 'luke16-lazarus',
          html:
            'Lazarus is laid at the rich man&apos;s gate, full of sores. He desires to be fed with crumbs that fall from the rich man&apos;s table. But apparently, even the crumbs are not given. Dogs come and lick his sores. This is the nadir of degradation. The contrast could not be more stark. One feasts every day. The other starves, covered in sores.',
        },
        {
          kind: 'greek',
          id: 'luke16-psuchē',
          title: 'Psychē — Soul; Life; Person',
          script: 'ψυχή',
          translit: '<strong>Psychē</strong> · soul; life; person; living being',
          description:
            'When both die, their eternal fates are determined by what they have chosen in life. The soul carries its condition into eternity. The rich man&apos;s feast becomes torment. Lazarus&apos;s suffering becomes comfort.',
        },
        {
          kind: 'commentary',
          id: 'luke16-hades',
          html:
            'The rich man dies and is buried. "In hell he lift up his eyes, being in torments, and seeth Abraham afar off, and Lazarus in his bosom." Hades is presented as a place of awareness, of memory, of torment. The rich man sees Lazarus comforted. Abraham explains: "Thou in thy lifetime receivedst thy good things... but now he is comforted, and thou art tormented."',
        },
        {
          kind: 'commentary',
          id: 'luke16-gulf',
          html:
            'The rich man asks Abraham to send Lazarus to him, to cool his tongue. But Abraham says: "Between us and you there is a great gulf fixed: so that they which would pass from hence to you cannot; neither can they pass to us, that would come from thence." There is no crossing. No second chance. No redemption once the die is cast. Eternity is fixed according to how we have lived.',
        },
        {
          kind: 'christ',
          id: 'luke16-christ-judgment',
          title: 'Christ Connection — Eternal Consequence',
          html:
            'This parable is stark. It teaches that our choices now have eternal consequence. The rich man&apos;s indifference to Lazarus&apos;s suffering, his failure to show mercy, his trust in riches—these choices have eternal implications. Yet Lazarus&apos;s faithfulness in suffering brings him eternal comfort. The reversal is complete and irreversible.',
        },
        {
          kind: 'reflection',
          id: 'luke16-lazarus-reflect',
          prompt: 'Who is the Lazarus at your gate—the poor, the suffering, the overlooked? What would Jesus ask you to do?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'No servant can serve two masters. Make to yourselves friends by means of unrighteous mammon. Between us and you there is a great gulf fixed.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Luke 16 · Study Guide',
  },

  hasHebrew: false,
};
