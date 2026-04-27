import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Corinthians 7 — Marriage and Singleness
 *
 * Paul addresses questions about marriage, divorce, and singleness in light of
 * the gospel. He affirms both states—marriage and singleness—as valid callings,
 * each with its own gifts and challenges. The goal is undivided devotion to the
 * Lord, whether that devotion is expressed through marriage or celibacy.
 */
export const FIRST_CORINTHIANS_7: RichChapterContent = {
  bookSlug: '1-corinthians',
  bookName: '1 Corinthians',
  chapter: 7,

  intros: [
    'The Corinthian church has written to Paul asking about marriage, divorce, and whether believers should marry at all. Some in the church may have adopted an extreme asceticism, viewing marriage as inherently sinful. Paul corrects this error while affirming the value of singleness. Both states are gifts from God. What matters is not marital status but faithfulness to Christ.',
    'In this chapter, Paul navigates cultural, theological, and pastoral concerns with unusual care. He honors the integrity of both married and single believers. He addresses the believer married to an unbeliever—a situation fraught with spiritual tension. Throughout, his aim is clarity and compassion, helping each believer find their footing in Christ.',
  ],

  sections: [
    {
      ref: '1 Corinthians 7:1–16',
      title: 'Marriage, Divorce, and Divorce from Unbelievers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(1, 'Now concerning the things whereof ye wrote unto me: It is good for a man not to touch a woman.'),
            plain(2, 'Nevertheless, to avoid fornication, let every man have his own wife, and let every woman have her own husband.'),
            plain(3, 'Let the husband render unto the wife due benevolence: and likewise also the wife unto the husband.'),
            plain(8, 'I say therefore to the unmarried and widows, It is good for them if they abide even as I.'),
            plain(10, 'And unto the married I command, yet not I, but the Lord, Let not the wife depart from her husband:'),
            plain(12, 'But to the rest speak I, not the Lord: If any brother hath a wife that believeth not, and she be pleased to dwell with him, let him not put her away.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor7-1-marriage',
          html:
            'Paul quotes what some in Corinth may have said: &quot;It is good for a man not to touch a woman.&quot; He does not disagree in principle. But he adds immediately: marriage is also good, given to prevent fornication and to provide companionship. Both states are legitimate before God.',
        },
        {
          kind: 'greek',
          id: 'cor7-1-gyne',
          title: 'Gyne — Woman; Wife',
          script: 'γυνή',
          translit: '<strong>Gyne</strong> · woman; wife; female',
          description:
            'In the context of marriage, gyne refers to the wife as a equal partner. Paul does not speak of wives as subordinates but as bearers of their own dignity and worth within the marriage covenant.',
        },
        {
          kind: 'commentary',
          id: 'cor7-1-unequal',
          html:
            'Paul addresses the specific case of a believer married to an unbeliever—a &quot;mixed&quot; marriage. He does not command divorce but rather suggests that if the unbeliever remains in the marriage, the believer should stay. There is holiness in the attempt to preserve the marriage and possibly to bring the unbeliever to faith.',
        },
        {
          kind: 'christ',
          id: 'cor7-1-christ-union',
          title: 'Christ Connection — One Flesh in Christ',
          html:
            'Marriage is a covenant reflecting Christ&apos;s covenant with the church. It is not merely a civil arrangement but a sacred bond. Divorce tears what God has joined. Yet Christ&apos;s grace extends even to those whose marriages have failed.',
        },
        {
          kind: 'carry',
          html:
            'If you are married, Paul calls you to faithfulness and mutual care. If you are single, you have a gift—undivided attention for the Lord&apos;s work. Neither state is second-class. Each comes with its own calling and its own challenges. Seek to honor Christ in the state you are in.',
        },
        {
          kind: 'reflection',
          id: 'cor7-1-marriage-calling',
          prompt: 'What is your state—married or single? How is God calling you to honor Him in that state? What are the unique gifts and challenges of your situation?',
        },
      ],
    },

    {
      ref: '1 Corinthians 7:25–40',
      title: 'The Advantage of Singleness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(25, 'Now concerning virgins I have no commandment of the Lord: yet I give my judgment, as one that hath obtained mercy of the Lord to be faithful.'),
            plain(29, 'But this I say, brethren, the time is short: it remaineth, that both they that have wives be as though they had none;'),
            plain(32, 'But I would have you without carefulness. He that is unmarried careth for the things that belong to the Lord, how he may please the Lord:'),
            plain(33, 'But he that is married careth for the things that are of the world, how he may please his wife.'),
            plain(38, 'So then he that giveth her in marriage doeth well; but he that giveth her not in marriage doeth better.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor7-2-singleness',
          html:
            'Paul speaks carefully about singleness. It is not a commandment, but it is a calling with particular advantages. The single person, unburdened by the cares and affections of marriage, has the freedom to pursue undivided devotion to the Lord. This is not a criticism of marriage but a recognition of the unique opportunity singleness offers.',
        },
        {
          kind: 'greek',
          id: 'cor7-2-merimna',
          title: 'Merimna — Care; Anxiety',
          script: 'μέριμνα',
          translit: '<strong>Merimna</strong> · care; anxiety; divided attention',
          description:
            'Marriage necessarily divides your merimna—your care and concern. You care for your spouse, your household, your children. This is not evil, but it is a division of focus that singleness avoids.',
        },
        {
          kind: 'commentary',
          id: 'cor7-2-time',
          html:
            'Paul says &quot;the time is short.&quot; Whether he refers to the imminence of Christ&apos;s return or simply to the brevity of life, the point is the same: devote yourself to what is eternal. Do not be consumed with the temporary things of this world.',
        },
        {
          kind: 'christ',
          id: 'cor7-2-christ-undivided',
          title: 'Christ Connection — Undivided Devotion to Christ',
          html:
            'Christ is the ultimate Bridegroom. The church is His bride. Both married and single believers are members of this larger covenant. The question is how you best serve that ultimate union—whether in marriage or singleness.',
        },
        {
          kind: 'carry',
          html:
            'If you are single, do not view it as a temporary state to escape as quickly as possible. Embrace it as a season of freedom. Use it to deepen your walk with Christ, to serve others without the divided focus that marriage brings. If you marry, view your marriage as a ministry—a way of reflecting Christ&apos;s covenant love.',
        },
        {
          kind: 'reflection',
          id: 'cor7-2-undivided',
          prompt: 'What would it look like for you to have &quot;undivided&quot; devotion to the Lord in your current state? What distracts you from that focus?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I say therefore to the unmarried and widows, It is good for them if they abide even as I.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Corinthians 7 · Study Guide',
  },

  hasHebrew: false,
};
