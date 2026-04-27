import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Corinthians 13 — Examine Yourselves
 *
 * Paul concludes his second letter with a final appeal. The Corinthians should
 * examine themselves, test themselves to see whether they are in the faith. Paul
 * is writing from a distance, but when he comes, he will not be lenient with
 * those who persist in sin. Yet his ultimate goal is their restoration, not their
 * destruction.
 */
export const SECOND_CORINTHIANS_13: RichChapterContent = {
  bookSlug: '2-corinthians',
  bookName: '2 Corinthians',
  chapter: 13,

  intros: [
    'Paul closes 2 Corinthians with seriousness and hope. He has written sternly because discipline is necessary. But he is not writing to tear down; he is writing to build up. The Corinthians must examine themselves. Their faith must be real. And when Paul arrives, he hopes to find them strong, unified, walking with Christ.',
    'The letter began with comfort. It concludes with a call to self-examination. Both are necessary. Without comfort, we despair. Without self-examination, we drift into complacency. Paul holds both together.',
  ],

  sections: [
    {
      ref: '2 Corinthians 13:1–10',
      title: 'Coming with Authority; Building Up',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(1, 'This is the third time I am coming to you. In the mouth of two or three witnesses shall every word be established.'),
            plain(2, 'I told you before, and foretell you, as if I were present, the second time; and being absent now I write to them which heretofore have sinned, and to all other, that, if I come again, I will not spare:'),
            plain(4, 'For though he was crucified through weakness, yet he liveth by the power of God. For we also are weak in him, but we shall live with him by the power of God toward you.'),
            plain(9, 'For we are glad, when we are weak, and ye are strong: and this also we wish, even your perfection.'),
            plain(10, 'Therefore I write these things being absent, lest being present I should use sharpness, according to the power which the Lord hath given me to edification, and not to destruction.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-13-witnesses',
          html:
            'Paul is coming a third time and will bring witnesses to establish every charge. This is serious. Yet even this statement is made to prompt repentance, not punishment. Paul wants to arrive and find the situation already corrected.',
        },
        {
          kind: 'greek',
          id: 'cor2-13-dynamis',
          title: 'Dynamis — Power; Might; Authority',
          script: 'δύναμις',
          translit: '<strong>Dynamis</strong> · power; authority; ability; might',
          description:
            'The Lord has given Paul dynamis—authority—to edify and build up. He has the power to judge, but he chooses to use it for building, not destruction.',
        },
        {
          kind: 'commentary',
          id: 'cor2-13-perfection',
          html:
            '&quot;We are glad, when we are weak, and ye are strong: and this also we wish, even your perfection.&quot; Paul&apos;s ultimate goal is not his own vindication, but the Corinthians&apos; spiritual maturity and wholeness.',
        },
        {
          kind: 'christ',
          id: 'cor2-13-christ-weakness',
          title: 'Christ Connection — Christ&apos;s Weakness and Power',
          html:
            'Christ was &quot;crucified through weakness, yet he liveth by the power of God.&quot; His death appeared to be defeat. His resurrection proved it was victory. Paul participates in this pattern: weakness yielding to power.',
        },
        {
          kind: 'carry',
          html:
            'Paul is willing to come with authority and exercise discipline if necessary. But he would rather see repentance without confrontation. The question for the Corinthians—and for you—is: will you examine yourself and correct course before discipline becomes necessary?',
        },
        {
          kind: 'reflection',
          id: 'cor2-13-examine',
          prompt: 'What area of your life needs examination? What would you correct before confrontation becomes necessary?',
        },
      ],
    },

    {
      ref: '2 Corinthians 13:11–14',
      title: 'Final Exhortation and Benediction',
      blocks: [
        {
          kind: 'scripture',
          chapter: 13,
          lines: [
            plain(11, 'Finally, brethren, farewell. Be perfect, be of good comfort, be of one mind, live in peace; and the God of love and peace shall be with you.'),
            plain(12, 'Greet one another with an holy kiss.'),
            plain(13, 'All the saints salute you.'),
            plain(14, 'The grace of the Lord Jesus Christ, and the love of God, and the communion of the Holy Ghost, be with you all. Amen.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-13-final',
          html:
            'Paul&apos;s final word is benediction. &quot;The grace of the Lord Jesus Christ, and the love of God, and the communion of the Holy Ghost, be with you all.&quot; Grace, love, communion—the three gifts of God in the Trinity, resting on the church.',
        },
        {
          kind: 'greek',
          id: 'cor2-13-koinonia',
          title: 'Koinonia — Communion; Fellowship; Sharing',
          script: 'κοινωνία',
          translit: '<strong>Koinonia</strong> · communion; fellowship; participation; sharing',
          description:
            'The Holy Spirit brings koinonia—real communion, shared participation in the divine life. This is not mere cooperation but mystical union.',
        },
        {
          kind: 'commentary',
          id: 'cor2-13-peace',
          html:
            '&quot;Be of one mind, live in peace; and the God of love and peace shall be with you.&quot; The promise is: unity and peace do not depend on human achievement alone. They are the gift of God&apos;s presence.',
        },
        {
          kind: 'christ',
          id: 'cor2-13-trinity',
          title: 'Christ Connection — The Trinity&apos;s Blessing',
          html:
            'The benediction is Trinitarian: grace of Jesus Christ, love of God the Father, communion of the Holy Spirit. All three persons of the Godhead work together for the believer&apos;s blessing.',
        },
        {
          kind: 'carry',
          html:
            'This is Paul&apos;s final word: grace, love, and communion rest upon you. Not your perfection, but God&apos;s grace. Not your achievement, but God&apos;s love. Not your effort, but God&apos;s Spirit indwelling you.',
        },
        {
          kind: 'reflection',
          id: 'cor2-13-grace-love',
          prompt: 'What does it mean to live under the grace of Christ, the love of God, and the communion of the Holy Spirit? How are all three operating in your life?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The grace of the Lord Jesus Christ, and the love of God, and the communion of the Holy Ghost, be with you all.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Corinthians 13 · Study Guide',
  },

  hasHebrew: false,
};
