import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Corinthians 4 — Stewards of the Mysteries of God
 *
 * Paul reframes the apostolic role. Apostles are not masters or judges of the
 * church. They are stewards—servants entrusted with God&apos;s mysteries. A steward
 * is accountable not to those he serves, but to the master who owns the household.
 * Paul&apos;s aim is faithfulness, not reputation.
 */
export const FIRST_CORINTHIANS_4: RichChapterContent = {
  bookSlug: '1-corinthians',
  bookName: '1 Corinthians',
  chapter: 4,

  intros: [
    'The Corinthians have begun to judge their leaders—to rank Paul and Apollos and Cephas. Paul radically reframes the conversation. He cares nothing for their judgment. He submits to one judgment alone: that of Christ. A steward&apos;s faithfulness is not measured by the approval of those he serves. It is measured by the approval of the one who owns everything.',
    'This chapter liberates the church from the tyranny of human opinion. It also humbles the leaders. Apostles are not celebrities. They are not lords. They are stewards, entrusted with something infinitely greater than themselves—the mysteries of God—and accountable to a Master whose standards are infinitely higher than man&apos;s.',
  ],

  sections: [
    {
      ref: '1 Corinthians 4:1–5',
      title: 'Stewards and Judges',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(1, 'Let a man so account of us, as of the ministers of Christ, and stewards of the mysteries of God.'),
            plain(2, 'Moreover it is required in stewards, that a man be found faithful.'),
            plain(3, 'But with me it is a very small thing that I should be judged of you, or of man&apos;s judgment: yea, I judge not mine own self.'),
            plain(4, 'For I know nothing by myself; yet am I not hereby justified: but he that judgeth me is the Lord.'),
            plain(5, 'Therefore judge nothing before the time, until the Lord come, who both will bring to light the hidden things of darkness, and will make manifest the counsels of the hearts: and then shall every man have praise of God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor4-1-steward',
          html:
            'Paul defines the apostolic office not as authority but as stewardship. A steward manages someone else&apos;s household. He has no right to the property. He is not the owner. He is a servant, entrusted with a task. The mysteries of God are not Paul&apos;s to dispense as he wishes. They are God&apos;s, and Paul holds them in trust.',
        },
        {
          kind: 'greek',
          id: 'cor4-1-oikonomos',
          title: 'Oikonomos — Steward',
          script: 'οἰκονόμος',
          translit: '<strong>Oikonomos</strong> · steward; household manager; one entrusted with another&apos;s goods',
          description:
            'An oikonomos has real responsibility—he manages the household well or poorly. But he has no ownership. If he is fired or dismissed, the household continues. The owner remains. So too with the apostle: his work matters, but he is not indispensable. The gospel does not depend on him.',
        },
        {
          kind: 'commentary',
          id: 'cor4-1-judgment',
          html:
            'Paul says it is &quot;a very small thing&quot; to be judged by the Corinthians. This is not arrogance. It is freedom. He has given up the need for their approval. He does not judge himself—he knows his own motives are mixed. But the Lord judges, and His judgment is all that matters.',
        },
        {
          kind: 'christ',
          id: 'cor4-1-christ-judge',
          title: 'Christ Connection — Christ Judges All',
          html:
            'The Lord will &quot;bring to light the hidden things of darkness, and will make manifest the counsels of the hearts.&quot; Only Christ can judge truly, because only He sees the heart. Not what we appear to be, but what we truly are, will be revealed. This is both terror and comfort—nothing remains hidden from Him.',
        },
        {
          kind: 'carry',
          html:
            'Stop seeking the judgment of men. You may be unfairly criticized. You may be unjustly praised. Neither matters. Your task is faithfulness. The evaluation that matters comes from the Lord, who judges the heart. Walk in integrity, knowing that Christ sees.',
        },
        {
          kind: 'reflection',
          id: 'cor4-1-judge',
          prompt: 'Whose judgment do you most fear or most crave? How would your life change if you truly cared only for Christ&apos;s judgment?',
        },
      ],
    },

    {
      ref: '1 Corinthians 4:9–21',
      title: 'The Apostles&apos; Condition',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(9, 'For I think that God hath set forth us the apostles last, as it were appointed to death: for we are made a spectacle unto the world, and to angels, and to men.'),
            plain(10, 'We are fools for Christ&apos;s sake, but ye are wise in Christ; we are weak, but ye are strong; ye are honourable, but we are despised.'),
            plain(12, 'And labour, working with our own hands: being reviled we bless; being persecuted we suffer it;'),
            plain(13, 'Being defamed, we intreat: we are made as the filth of the world, and are the offscouring of all things unto this day.'),
            plain(16, 'Wherefore I beseech you, be ye followers of me.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor4-2-appointed',
          html:
            'Paul describes the apostles as &quot;appointed to death,&quot; a &quot;spectacle unto the world, and to angels, and to men.&quot; They are not in the position of honor or comfort. They are exposed, vulnerable, suffering. Yet Paul does not resent this. He sees it as the cost of discipleship, the price of faithfulness.',
        },
        {
          kind: 'greek',
          id: 'cor4-2-theatron',
          title: 'Theatron — Theater; Spectacle',
          script: 'θέατρον',
          translit: '<strong>Theatron</strong> · theater; spectacle; show',
          description:
            'The apostles are a theatron—a spectacle for all to watch. Not a comfortable position. Exposed to judgment, to ridicule, to danger. Yet in this very exposure, Christ&apos;s power becomes visible through their weakness.',
        },
        {
          kind: 'commentary',
          id: 'cor4-2-contrast',
          html:
            'Paul draws a sharp contrast. The apostles are &quot;fools for Christ&apos;s sake&quot; while the Corinthians are &quot;wise in Christ.&quot; The apostles are weak, the Corinthians strong. The apostles despised, the Corinthians honored. Paul is not complaining. He is saying: the gospel has cost us everything, and the Corinthians are reaping the benefits. Yet some of them treat us as though we are less important.',
        },
        {
          kind: 'christ',
          id: 'cor4-2-christ-spectacle',
          title: 'Christ Connection — Fools for Christ&apos;s Sake',
          html:
            'To be &quot;a fool for Christ&apos;s sake&quot; is honor, not shame. The world sees foolishness. God sees faithfulness. Christ emptied Himself, took the form of a servant, suffered shame and death. His followers should expect no less.',
        },
        {
          kind: 'carry',
          html:
            'Paul ends with a plea: &quot;Be ye followers of me.&quot; He does not ask them to admire him. He asks them to follow him—in sacrifice, in faithfulness, in accepting weakness as the path of strength. The gospel calls not to comfort but to a transformed life.',
        },
        {
          kind: 'reflection',
          id: 'cor4-2-fool',
          prompt: 'In what way is God calling you to be &quot;a fool for Christ&apos;s sake&quot;? What would it mean to follow Paul&apos;s example of faithfulness over reputation?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Moreover it is required in stewards, that a man be found faithful.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Corinthians 4 · Study Guide',
  },

  hasHebrew: false,
};
