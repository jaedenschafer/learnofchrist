import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const ACTS_15: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 15,

  intros: [
    'A controversy arises in the church: must Gentiles be circumcised and keep the law of Moses to be saved? The apostles gather in Jerusalem to decide. Peter, James, and Paul speak. The decision is unanimous: "It seemed good to the Holy Ghost, and to us, to lay upon you no greater burden than these necessary things." The law is not abolished, but it is not required for salvation. Grace is supreme.',
  ],

  sections: [
    {
      ref: 'Acts 15:1–21',
      title: 'The Jerusalem Council',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(10, 'Now therefore why tempt ye God, to put a yoke upon the necks of the disciples which neither our fathers nor we were able to bear?'),
            plain(11, 'But we believe that through the grace of the Lord Jesus Christ we shall be saved, even as they.'),
            plain(28, 'For it seemed good to the Holy Ghost, and to us, to lay upon you no greater burden than these necessary things;'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts15-debate',
          html: 'Peter speaks: why tempt God by placing on the Gentiles a yoke that even Jews could not bear? Salvation is through grace, not works. James affirms this and applies it to the decision.',
        },
        {
          kind: 'greek',
          id: 'acts15-charis',
          title: 'Charis — Grace',
          script: 'χάρις',
          translit: '<strong>Charis</strong> · grace; favor; kindness unmerited',
          description: 'Grace is God&apos;s unmerited favor, freely given. It cannot be earned by law-keeping. It is the foundation of salvation.',
        },
        {
          kind: 'christ',
          id: 'acts15-christ-grace',
          title: 'Christ Connection — Salvation by Grace Alone',
          html: 'Jesus fulfilled the law and opened the way to God through grace. The council affirms that truth: salvation comes through faith in Christ, not through the works of the law.',
        },
        {
          kind: 'carry',
          html: 'The council sends a letter to the Gentile churches: "Forasmuch as we have heard that certain which went out from us have troubled you with words... it seemed good unto us... to lay upon you no greater burden than these necessary things." The gospel is liberated.',
        },
        {
          kind: 'reflection',
          id: 'acts15-grace-reflect',
          prompt: 'How does God&apos;s grace liberate you from the burden of trying to earn acceptance?',
        },
      ],
    },

    {
      ref: 'Acts 15:36–41',
      title: 'Paul and Barnabas Part',
      blocks: [
        {
          kind: 'scripture',
          chapter: 15,
          lines: [
            plain(36, 'And some days after Paul said unto Barnabas, Let us go again and visit our brethren in every city where we have preached the word of the Lord, and see how they do.'),
            plain(40, 'And Paul chose Silas, and departed, being recommended by the brethren unto the grace of God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts15-separation',
          html: 'Paul and Barnabas disagree about whether to take John Mark on a second journey. The disagreement is sharp, and they part ways. Paul takes Silas; Barnabas takes Mark. Two teams, two missions, one gospel.',
        },
        {
          kind: 'commentary',
          id: 'acts15-growth',
          html: 'God uses even human disagreement to accomplish His purposes. Mark, rejected by Paul, is restored by Barnabas. Later, Mark will prove valuable to the gospel. The Spirit works through flawed vessels.',
        },
        {
          kind: 'greek',
          id: 'acts15-paroxysmos',
          title: 'Paroxysmos — Sharp Disagreement',
          script: 'παροξυσμός',
          translit: '<strong>Paroxysmos</strong> · sharp disagreement; provocation; irritation',
          description: 'Even apostles disagree. But they resolve their disagreement and continue the work. What matters is not perfection but faithfulness.',
        },
        {
          kind: 'christ',
          id: 'acts15-christ-mission',
          title: 'Christ Connection — Mission Continues Through Conflict',
          html: 'Jesus commissioned His apostles despite their flaws, disagreements, and failures. The gospel spreads not through perfect unity but through continued obedience.',
        },
        {
          kind: 'carry',
          html: 'Paul and Silas are commended to the grace of God and depart. The second missionary journey begins. God&apos;s work continues, not delayed by human conflict.',
        },
        {
          kind: 'reflection',
          id: 'acts15-conflict-reflect',
          prompt: 'How can disagreement strengthen rather than weaken the faith?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'It seemed good to the Holy Ghost, and to us, to lay upon you no greater burden than these necessary things.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 15 · Study Guide',
  },

  hasHebrew: false,
};
