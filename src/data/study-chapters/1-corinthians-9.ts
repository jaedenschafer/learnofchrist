import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Corinthians 9 — All Things to All Men
 *
 * Paul illustrates the principle of self-limitation through his own example. He
 * has the right to be supported by the church, yet he has voluntarily worked with
 * his own hands. He has the right to bring a believing wife on his missionary
 * journeys, yet he has chosen not to. His aim: to &quot;become all things to all men,&quot;
 * removing obstacles to the gospel.
 */
export const FIRST_CORINTHIANS_9: RichChapterContent = {
  bookSlug: '1-corinthians',
  bookName: '1 Corinthians',
  chapter: 9,

  intros: [
    'Paul does not ask the Corinthians to do anything he has not already done. He speaks from hard-won experience. He has given up legitimate rights—the right to financial support, the right to marry and have his family supported, the right to ease—all in order to remove barriers between himself and those he is trying to reach. His example is one of radical accommodation, driven by a single vision: to save souls.',
    'The chapter reveals Paul&apos;s priorities. Rights matter. Freedom matters. But they matter less than the gospel. If using my freedom means losing someone to Christ, I will gladly lay my freedom aside. This is the cost of being an ambassador of Christ.',
  ],

  sections: [
    {
      ref: '1 Corinthians 9:1–14',
      title: 'Paul&apos;s Rights as an Apostle',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(1, 'Am I not an apostle? am I not free? have I not seen Jesus Christ our Lord? are not ye my work in the Lord?'),
            plain(4, 'Have we not power to eat and to drink?'),
            plain(5, 'Have we not power to lead about a sister, a wife, as well as other apostles, and as the brethren of the Lord, and Cephas?'),
            plain(12, 'If others be partakers of this power over you, are not we rather? Nevertheless we have not used this power; but suffer all things, lest we should hinder the gospel of Christ.'),
            plain(14, 'Even so hath the Lord ordained that they which preach the gospel should live of the gospel.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor9-1-apostle',
          html:
            'Paul establishes his standing. He is an apostle. He has seen the risen Christ. The Corinthians are the fruit of his apostolic labor. By these credentials, he has rights. He has the right to eat, to drink, to be supported. Yet he will not exercise these rights.',
        },
        {
          kind: 'greek',
          id: 'cor9-1-exousia',
          title: 'Exousia — Authority; Power; Right',
          script: 'ἐξουσία',
          translit: '<strong>Exousia</strong> · authority; right; power to act',
          description:
            'Paul has exousia—genuine authority and legitimate rights. They are not illegitimate. The Lord has ordained that those who preach should be supported. But Paul chooses not to exercise this right.',
        },
        {
          kind: 'commentary',
          id: 'cor9-1-hinder',
          html:
            'His reason: &quot;lest we should hinder the gospel of Christ.&quot; If Paul accepted support, some Corinthians might assume he was preaching for profit. By working with his own hands, he proves his sincerity. He is willing to sacrifice his rights for the sake of the gospel.',
        },
        {
          kind: 'christ',
          id: 'cor9-1-christ-gospel',
          title: 'Christ Connection — The Gospel Above All',
          html:
            'The gospel is the supreme value. Everything else—rights, dignity, comfort, reputation—is secondary. Paul&apos;s self-limitation is an act of devotion to Christ and His mission.',
        },
        {
          kind: 'carry',
          html:
            'You have rights. Legitimate ones. But ask: do you exercise them in a way that serves the gospel? Are there rights you could lay aside, sacrifices you could make, that would remove barriers between your witness and those you are trying to reach?',
        },
        {
          kind: 'reflection',
          id: 'cor9-1-rights',
          prompt: 'What rights are you clinging to? What legitimate claim do you assert that might actually hinder your witness?',
        },
      ],
    },

    {
      ref: '1 Corinthians 9:19–27',
      title: 'Becoming All Things to All Men',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(19, 'For though I be free from all men, yet have I made myself servant unto all, that I might gain the more.'),
            plain(20, 'And unto the Jews I became as a Jew, that I might gain the Jews; to them that are under the law, as under the law, that I might gain them that are under the law;'),
            plain(22, 'To the weak became I as weak, that I might gain the weak: I am made all things to all men, that I might by all means save some.'),
            plain(24, 'Know ye not that they which run in a race run all, but one receiveth the prize? So run, that ye may obtain.'),
            plain(27, 'But I keep under my body, and bring it into subjection: lest that by any means, when I have preached to others, I myself should be a castaway.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor9-2-gain',
          html:
            'Paul becomes &quot;all things to all men&quot;—not compromising his core convictions, but adapting his approach to what the listener needs. To the Jews he becomes as a Jew, to the weak he becomes as weak. His flexibility serves a single purpose: to &quot;gain&quot; them for Christ, to &quot;save some.&quot;',
        },
        {
          kind: 'greek',
          id: 'cor9-2-astheneo',
          title: 'Astheneo — To Be Weak; To Suffer',
          script: 'ἀσθενέω',
          translit: '<strong>Astheneo</strong> · to be weak; to suffer infirmity; to endure',
          description:
            'Paul does not simply speak about the weak from a distance. He &quot;becomes weak.&quot; He enters into their experience, their struggles, their conscience. This is empathy born of sacrifice.',
        },
        {
          kind: 'commentary',
          id: 'cor9-2-race',
          html:
            'Paul shifts to the image of a race. &quot;Know ye not that they which run in a race run all, but one receiveth the prize?&quot; The Christian life is not a casual stroll. It is a rigorous race requiring discipline, focus, sacrifice.',
        },
        {
          kind: 'christ',
          id: 'cor9-2-christ-discipline',
          title: 'Christ Connection — Discipline in Christ',
          html:
            'Paul keeps &quot;his body under&quot; and &quot;brings it into subjection.&quot; This is not harsh asceticism. This is the discipline that an athlete brings to training—all done in service to Christ and His purposes.',
        },
        {
          kind: 'carry',
          html:
            'You are called to adapt yourself to others—not to compromise your convictions, but to meet people where they are. This requires humility, flexibility, and a willingness to suffer. It requires discipline in your own life so that you can run the race with purpose.',
        },
        {
          kind: 'reflection',
          id: 'cor9-2-save-some',
          prompt: 'For whom are you willing to &quot;become all things&quot;? What would that look like? What is stopping you?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I am made all things to all men, that I might by all means save some.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Corinthians 9 · Study Guide',
  },

  hasHebrew: false,
};
