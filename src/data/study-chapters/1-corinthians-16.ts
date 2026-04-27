import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Corinthians 16 — Collection, Greetings, Maranatha
 *
 * Paul concludes his letter with practical matters: instructions for a collection
 * for the Jerusalem church, travel plans, greetings, and a final cry of hope:
 * &quot;Maranatha&quot;—the Lord comes. Even in mundane details, Paul points to the gospel
 * and the hope of Christ&apos;s coming.
 */
export const FIRST_CORINTHIANS_16: RichChapterContent = {
  bookSlug: '1-corinthians',
  bookName: '1 Corinthians',
  chapter: 16,

  intros: [
    'Paul closes his letter with the practical and the eschatological woven together. He instructs the Corinthians to lay aside money each week for the saints at Jerusalem—a tangible expression of love across churches. He plans to travel to them. But overshadowing all is the return of Christ. &quot;Maranatha&quot;—the Lord comes! This is not merely a farewell sentiment. This is the ultimate reality that gives meaning to all Christian life and labor.',
    'The conclusion of 1 Corinthians reveals Paul&apos;s vision: the church is not a static institution, but a living body animated by hope in Christ&apos;s imminent return. Whether addressing divisions, doctrine, or the distribution of alms, Paul&apos;s eye is always on the eternal perspective.',
  ],

  sections: [
    {
      ref: '1 Corinthians 16:1–9',
      title: 'The Collection and Future Plans',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(1, 'Now concerning the collection for the saints, as I have given order to the churches of Galatia, even so do ye.'),
            plain(2, 'Upon the first day of the week let every one of you lay by him in store, as God hath prospered him, that there be no gatherings when I come.'),
            plain(5, 'Now I will come unto you, when I shall pass through Macedonia: for I do pass through Macedonia.'),
            plain(6, 'And it may be that I will abide, yea, and winter with you, that ye may bring me on my journey whithersoever I go.'),
            plain(8, 'But I will tarry at Ephesus until Pentecost.'),
            plain(9, 'For a great door and effectual is opened unto me, and there are many adversaries.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor16-1-collection',
          html:
            'Paul instructs a collection for the saints at Jerusalem—likely those suffering in a famine. The practice establishes an important principle: churches are not isolated. They care for one another across distance. Generosity is a form of fellowship.',
        },
        {
          kind: 'greek',
          id: 'cor16-1-logia',
          title: 'Logia — Collection; Contribution',
          script: 'λογία',
          translit: '<strong>Logia</strong> · collection; contribution; gathering of money',
          description:
            'The logia is not a tax or burden. It is a voluntary expression of the unity of the body across churches. Each gives &quot;as God hath prospered him.&quot; Prosperity is measured not in absolute terms but in relation to what God has given each person.',
        },
        {
          kind: 'commentary',
          id: 'cor16-1-plans',
          html:
            'Paul shares his travel plans: he will come after passing through Macedonia. He may winter with them. But his schedule is flexible, responsive to the opportunities and obstacles the Spirit places before him. His ministry is not rigid routine. It is living response to God&apos;s leading.',
        },
        {
          kind: 'christ',
          id: 'cor16-1-christ-fellowship',
          title: 'Christ Connection — Fellowship in Christ',
          html:
            'The collection is an act of fellowship—koinonia—rooted in the fact that all believers are members of one body in Christ. What affects one affects all. Generosity toward distant brothers is generosity toward Christ Himself.',
        },
        {
          kind: 'carry',
          html:
            'Let giving be a regular discipline. Set aside a portion each week for God&apos;s work and for those in need. Give not because you are obligated, but because you have been prospered by God and you recognize your unity with fellow believers.',
        },
        {
          kind: 'reflection',
          id: 'cor16-1-collect',
          prompt: 'How do you view giving to others in need? Is it an obligation or an expression of fellowship? How might your approach change if you saw all believers as members of your body?',
        },
      ],
    },

    {
      ref: '1 Corinthians 16:19–24',
      title: 'Greetings and Maranatha',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(19, 'The churches of Asia salute you. Aquila and Priscilla salute you much in the Lord, with the church that is in their house.'),
            plain(20, 'All the brethren greet you. Greet ye one another with an holy kiss.'),
            plain(22, 'If any man love not the Lord Jesus Christ, let him be Anathema Maranatha.'),
            plain(23, 'The grace of our Lord Jesus Christ be with you.'),
            plain(24, 'My love be with you all in Christ Jesus. Amen.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor16-2-maranatha',
          html:
            'Paul concludes with greetings from various churches and believers, then the eschatological cry: &quot;Maranatha&quot;—&quot;Our Lord comes!&quot; It is a prayer, a proclamation, a warning. The return of Christ is not distant. It is the constant hope that animates Christian life. Those who do not love Christ should tremble.',
        },
        {
          kind: 'greek',
          id: 'cor16-2-maranatha-word',
          title: 'Maranatha — Lord Come',
          script: 'μαράνα θά',
          translit: '<strong>Maranatha</strong> · Lord come; our Lord comes; an Aramaic cry',
          description:
            'Maranatha is an Aramaic phrase preserved in the Greek text—showing its antiquity and importance in the early church. It is both prayer and proclamation: a plea for Christ to come, and a statement that He will come.',
        },
        {
          kind: 'commentary',
          id: 'cor16-2-anathema',
          html:
            'The verse is puzzling: &quot;If any man love not the Lord Jesus Christ, let him be Anathema Maranatha.&quot; It is a warning: those who do not love Christ face judgment when He comes. Love for Christ is not optional. It is the mark of the believer.',
        },
        {
          kind: 'christ',
          id: 'cor16-2-christ-comes',
          title: 'Christ Connection — The Lord Comes',
          html:
            'The letter ends not with the church&apos;s stability or strength, but with Christ&apos;s return. This is the ultimate horizon. This is what gives meaning to all that precedes. The church exists in the light of Christ&apos;s coming.',
        },
        {
          kind: 'carry',
          html:
            'Live as though Christ might come today. Not in paralysis or fear, but in joyful expectation. Let every decision, every relationship, every work be illuminated by this hope. &quot;Maranatha&quot;—the Lord comes. Are you ready?',
        },
        {
          kind: 'reflection',
          id: 'cor16-2-ready',
          prompt: 'What would change in your life if you truly believed that Christ might come at any moment? How does this hope shape your priorities?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The grace of our Lord Jesus Christ be with you. My love be with you all in Christ Jesus.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Corinthians 16 · Study Guide',
  },

  hasHebrew: false,
};
