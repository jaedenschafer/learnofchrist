import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const ACTS_20: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 20,

  intros: [
    'Paul travels through Macedonia and Greece, strengthening the churches. In Troas, he speaks to the disciples all night. A young man named Eutychus sits in a window and, overcome with sleep, falls three stories to the ground. He is taken up dead. But Paul goes down, lies upon him, and raises him from the dead. He calls the disciples together and breaks bread with them. Then he goes on to Jerusalem, knowing that bonds and afflictions await him there.',
  ],

  sections: [
    {
      ref: 'Acts 20:7–12',
      title: 'Eutychus Raised',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(9, 'And there sat in a window a certain young man named Eutychus, being fallen into a deep sleep: and as Paul was long preaching, he sunk down with sleep, and fell down from the third loft, and was taken up dead.'),
            plain(10, 'And Paul went down, and fell on him, and embracing him said, Trouble not yourselves; for his life is in him.'),
            plain(12, 'And they brought the young man alive, and were not a little comforted.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts20-eutychus',
          html: 'Paul preaches all night. Eutychus, sitting in a window, falls into a deep sleep and tumbles three stories to the ground. He is taken up dead. But Paul raises him to life. Death yields to the power of Christ working through His apostle.',
        },
        {
          kind: 'greek',
          id: 'acts20-perissoteros',
          title: 'Perissoteros — More Abundantly',
          script: 'περισσότερος',
          translit: '<strong>Perissoteros</strong> · more abundantly; exceedingly; even more',
          description: 'Paul preaches long because he has much to share. His zeal for the gospel is evident in his persistence.',
        },
        {
          kind: 'christ',
          id: 'acts20-christ-power-death',
          title: 'Christ Connection — Life Over Death',
          html: 'Jesus raised the dead—Lazarus, Jairus&apos; daughter. Paul&apos;s raising of Eutychus shows that power continuing through the church. Christ&apos;s victory over death is extended.',
        },
        {
          kind: 'carry',
          html: 'Eutychus is brought back alive. The disciples are comforted. Paul breaks bread with them. The community of faith continues, strengthened by the witness of resurrection power.',
        },
        {
          kind: 'reflection',
          id: 'acts20-comfort-reflect',
          prompt: 'How does Christ&apos;s power over death comfort you?',
        },
      ],
    },

    {
      ref: 'Acts 20:22–35',
      title: 'Farewell to the Ephesian Elders',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(24, 'But none of these things move me, neither count I my life dear unto myself, so that I might finish my course with joy, and the ministry, which I have received of the Lord Jesus, to testify the gospel of the grace of God.'),
            plain(35, 'I have shewed you all things, how that so labouring ye ought to support the weak: and to remember the words of the Lord Jesus, how he said, It is more blessed to give than to receive.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts20-farewell',
          html: 'Paul knows danger and persecution await him in Jerusalem. But his one desire is to finish his course with joy. The gospel of the grace of God is worth any sacrifice.',
        },
        {
          kind: 'commentary',
          id: 'acts20-service',
          html: 'Paul charges the elders to shepherd the flock and support the weak. He reminds them of a saying of Jesus: "It is more blessed to give than to receive." Service is the mark of true leadership.',
        },
        {
          kind: 'greek',
          id: 'acts20-chara',
          title: 'Chara — Joy',
          script: 'χαρά',
          translit: '<strong>Chara</strong> · joy; delight; gladness',
          description: 'Paul&apos;s joy is not found in safety or comfort but in fulfilling his calling. Joy comes from alignment with God&apos;s purpose.',
        },
        {
          kind: 'christ',
          id: 'acts20-christ-service',
          title: 'Christ Connection — Service and Sacrifice',
          html: 'Jesus came not to be served but to serve and give His life. Paul follows that model, willing to lay down his life for the gospel and the churches he has established.',
        },
        {
          kind: 'carry',
          html: 'Paul goes to Jerusalem knowing what awaits him. Yet he moves toward the trial with courage and purpose. Faith is not the absence of danger but the courage to face it for the sake of Christ.',
        },
        {
          kind: 'reflection',
          id: 'acts20-sacrifice-reflect',
          prompt: 'What would you be willing to sacrifice for Christ and His kingdom?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'It is more blessed to give than to receive.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 20 · Study Guide',
  },

  hasHebrew: false,
};
