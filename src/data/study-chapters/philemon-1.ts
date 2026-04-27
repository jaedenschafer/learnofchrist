import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Philemon 1 — The Runaway Slave and Christian Brotherhood
 *
 * Paul writes a brief personal letter to Philemon on behalf of Onesimus, a
 * runaway slave. Onesimus has come to faith. Paul sends him back to his master
 * with a plea: "Receive him as myself." What was once a relationship of master
 * and slave is now transformed by the gospel into brotherhood. This letter is
 * revolutionary—not through rhetoric, but through the quiet assertion that in
 * Christ, the old divisions are unmade.
 */
export const PHILEMON_1: RichChapterContent = {
  bookSlug: 'philemon',
  bookName: 'Philemon',
  chapter: 1,

  intros: [
    'Onesimus ran away from his master Philemon. In Rome, he encountered Paul and became a believer. But Paul does not help him hide. He sends Onesimus back to face his master. What transforms this otherwise tragic situation into something redemptive is the gospel. Philemon is also a believer. And the gospel changes everything—even the relationship between master and slave.',
    'The letter is short but profound. It does not legislate abolition. That would come through the slow but inexorable working of the gospel. Instead, it shows the gospel doing its work in one relationship. A Christian master is asked to receive a formerly enslaved person as a brother. This is revolutionary.',
  ],

  sections: [
    /* ─── Philemon 1–7 — Thanksgiving and Appeal ─────────────────────── */
    {
      ref: 'Philemon 1–7',
      title: 'A Beloved Prisoner&apos;s Request',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'Paul, a prisoner of Jesus Christ, and Timothy our brother, unto Philemon our dearly beloved, and fellowlabourer,'),
            plain(2, 'And to the church in thy house: Grace to you, and peace, from God our Father and the Lord Jesus Christ.'),
            plain(4, 'I thank my God, making mention of thee always in my prayers,'),
            plain(5, 'Hearing of thy love and faith, which thou hast toward the Lord Jesus, and toward all saints;'),
            plain(6, 'That the communication of thy faith may become effectual by the acknowledging of every good thing which is in you in Christ Jesus.'),
            plain(7, 'For we have great joy and consolation in thy love, because the bowels of the saints are refreshed by thee, brother.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'phlm1-prisoner',
          html:
            'Paul does not hide his condition. He is a prisoner. Yet he does not ask pity. He asks partnership. Philemon is a "fellowlabourer"—a co-worker in the gospel. Their bond is not sentimental. It is rooted in shared faith in Christ. From this foundation, Paul will make his request.',
        },
        {
          kind: 'greek',
          id: 'phlm1-agape',
          title: 'Agape — Love',
          script: 'ἀγάπη',
          translit: '<strong>Agape</strong> · love; self-giving charity; covenant love',
          description:
            'Paul has heard of Philemon&apos;s love for the saints. This is agape—not sentimental feeling, but sacrificial commitment. Paul counts on this love. He knows that Philemon&apos;s generosity has earned him joy and consolation. Now Paul will ask him to extend that love beyond what he might naturally do.',
        },
        {
          kind: 'commentary',
          id: 'phlm1-communion',
          html:
            '"That the communication of thy faith may become effectual by the acknowledging of every good thing which is in you in Christ Jesus." Paul asks Philemon to see himself—his faith, his generosity, his love—and to let those qualities guide his response to Onesimus. His faith is incomplete until it works itself out in this relationship.',
        },
        {
          kind: 'christ',
          id: 'phlm1-christ-fellowship',
          title: 'Christ Connection — Fellowship in Christ',
          html:
            'Philemon and Onesimus stand on the same ground before Christ. Both are servants of the same Lord. Both are redeemed by His blood. The master-slave relationship is real, but it is not ultimate. Above it stands the fellowship of the gospel.',
        },
        {
          kind: 'carry',
          html:
            'Paul does not argue for abolition. He shows it happening through the gospel. How do you treat those below you in status—servants, subordinates, the poor? Do you see them as less than yourself, or as your brothers and sisters in Christ? Philemon&apos;s answer will reveal whether his faith is real.',
        },
        {
          kind: 'reflection',
          id: 'phlm1-fellowship',
          prompt: 'Who is someone you might be tempted to look down on or dismiss? How would the gospel transform that relationship?',
        },
      ],
    },

    /* ─── Philemon 8–25 — Receive Him as Myself ──────────────────────── */
    {
      ref: 'Philemon 8–25',
      title: 'Receive Him as Myself',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(8, 'Wherefore, though I might be much bold in Christ to enjoin thee that which is convenient,'),
            plain(9, 'Yet for love&apos;s sake I rather beseech thee, being such an one as Paul the aged, and now also a prisoner of Jesus Christ:'),
            plain(10, 'I beseech thee for my son Onesimus, whom I have begotten in my bonds:'),
            plain(11, 'Which in time past was to thee unprofitable, but now profitable to thee and to me:'),
            plain(12, 'Whom I have sent again: thou therefore receive him, that is, mine own bowels:'),
            plain(16, 'Not now as a servant, but above a servant, a brother beloved, specially to me, but how much more unto thee, both in the flesh, and in the Lord?'),
            plain(17, 'If thou count me therefore a partner, receive him as myself.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'phlm1-bold-appeal',
          html:
            'Paul could command. He has apostolic authority. But he chooses to beseech—to plead. "For love&apos;s sake." This is the way the gospel works. Not domination, but persuasion. Not force, but appeal to what is best in another person. Paul bets on Philemon&apos;s love.',
        },
        {
          kind: 'greek',
          id: 'phlm1-splagchna',
          title: 'Splagchna — Heart, Compassion',
          script: 'σπλάγχνα',
          translit: '<strong>Splagchna</strong> · heart; compassion; tender affection',
          description:
            'Paul says of Onesimus: "thou therefore receive him, that is, mine own bowels." To receive Onesimus is to receive the deepest affection of Paul himself. This is not abstract. It is personal. Paul identifies with Onesimus&apos; restoration.',
        },
        {
          kind: 'commentary',
          id: 'phlm1-unprofitable-profitable',
          html:
            '"Which in time past was to thee unprofitable, but now profitable to thee and to me." There is a pun here. Onesimus means "useful." Before, he was useless—he ran away. Now, transformed by the gospel, he is useful. But more: he is now profitable not as a slave but as a beloved brother.',
        },
        {
          kind: 'christ',
          id: 'phlm1-christ-status',
          title: 'Christ Connection — Transformation of Status',
          html:
            'In Christ, old divisions of status collapse. Master and slave stand as brothers. This did not happen through political upheaval but through spiritual transformation. The gospel is a power that works from the inside out, changing hearts before it changes structures.',
        },
        {
          kind: 'carry',
          html:
            'Paul asks Philemon to see Onesimus not as runaway property to be punished, but as a brother redeemed by Christ. And he asks him to extend this recognition "both in the flesh, and in the Lord"—in practical, material ways, and in spiritual truth. Your reception of others is a reception of Christ Himself.',
        },
        {
          kind: 'reflection',
          id: 'phlm1-brother',
          prompt: 'Is there someone you have written off or held at a distance? How would the gospel ask you to receive them as a brother or sister?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Not now as a servant, but above a servant, a brother beloved, specially to me, but how much more unto thee, both in the flesh, and in the Lord? If thou count me therefore a partner, receive him as myself.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Philemon 1 · Study Guide',
  },

  hasHebrew: false,
};
