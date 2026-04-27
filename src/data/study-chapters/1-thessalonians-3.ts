import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Thessalonians 3 — Timothy's Report; Faith Tested and Strengthened
 *
 * "Now we live, if ye stand fast in the Lord." Paul had been separated from
 * the Thessalonians by opposition. So he sent Timothy to strengthen them and
 * to bring back a report of their faith. Timothy returns with good news: they
 * are standing firm. Paul's prayer is that their faith may grow "above measure."
 */
export const FIRST_THESSALONIANS_3: RichChapterContent = {
  bookSlug: '1-thessalonians',
  bookName: '1 Thessalonians',
  chapter: 3,

  intros: [
    'Paul could not bear his separation from the Thessalonians. In anxiety for them, he sent Timothy to establish them and to learn of their faith. The young church was facing tribulation. Would they fall away? Timothy returns with encouraging news: they remain steadfast, and they remember Paul with affection.',
    'This chapter opens a window into the pastoral heart of the apostle. Paul does not rule from a distance. He cares deeply for the saints he has birthed in faith. And he prays constantly that their faith may abound, that God would establish their hearts in holiness.',
  ],

  bottomShare: {
    label: 'Share 1 Thessalonians 3',
    quote:
      'Now we live, if ye stand fast in the Lord. Night and day praying for you, that we may see your face and perfect that which is lacking in your faith.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Thessalonians 3 · Study Guide',
  },

  sections: [
    {
      ref: '1 Thessalonians 3:1–13',
      title: 'Timothy Sent; Faith Tested and Strengthened',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            {
              number: 2,
              spans: [
                t('And sent Timotheus, our brother, and minister of God, and our '),
                hp('fellowlabourer in the gospel of Christ', '1t3-labour'),
                t(', to establish you, and to comfort you concerning your faith;'),
              ],
            },
            {
              number: 3,
              spans: [
                t('That no man should be moved by these afflictions: for yourselves know that we are '),
                hg('appointed thereunto', '1t3-appointed'),
                t('.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Therefore, brethren, we were comforted over you in all our affliction and distress by your '),
                hy('faith', '1t3-faith'),
                t(':'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And the Lord make you to '),
                hp('increase and abound in love one toward another, and toward all men', '1t3-increase'),
                t(', even as we do toward you:'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '1t3-labour',
          html:
            '"Our fellowlabourer in the gospel of Christ." Timothy is not an errand boy but a brother, a minister of God, a co-laborer in the gospel. Paul sends him not as a proxy but as a representative of his own pastoral care. The gospel is advanced through relationships of trust and affection.',
        },
        {
          kind: 'commentary',
          id: '1t3-appointed',
          html:
            '"We are appointed thereunto." Tribulation is not accident or punishment; it is appointment. Believers are appointed to afflictions as a testing of faith. This is not easy. But it is purposeful. Suffering, properly understood, strengthens faith rather than destroying it.',
        },
        {
          kind: 'commentary',
          id: '1t3-faith',
          html:
            '"We were comforted...by your faith." Paul is comforted by news of their steadfastness. They are not merely surviving; they are standing firm. This is not natural resilience. It is the work of the Holy Spirit within them.',
        },
        {
          kind: 'commentary',
          id: '1t3-increase',
          html:
            '"Increase and abound in love one toward another, and toward all men." Love is not static. It grows and overflows. Paul prays that their love would multiply—love for the household of faith and also for outsiders. Love is the expression of deepening faith.',
        },
        {
          kind: 'greek',
          id: '1t3-perisseuo',
          title: 'Perisseuo — "Abound" or "Overflow"',
          script: 'περισσεύω',
          translit: '<strong>Perisseuo</strong> · to abound; to overflow; to increase beyond measure; to be in excess',
          description:
            'To abound is not merely to have enough but to have more than enough, to overflow. Paul prays that their love would not be measured and rationed but abundant and overflowing.',
        },
        {
          kind: 'christ',
          id: '1t3-christ-comfort',
          title: 'Christ Connection — Christ Established Us',
          html:
            'Paul sends Timothy to "establish" the Thessalonians in faith. This is Christ\'s work in them. Jesus said, "Upon this rock I will build my church." The believer\'s steadfastness is not self-made but rooted in Christ\'s building.',
        },
        {
          kind: 'carry',
          html:
            'You have received the gospel. But that beginning is not the end. Faith must be established, tested, and strengthened. You will face afflictions. You will be tested. But you are appointed to these trials for a purpose—that your faith might grow and abound. Reach out to strengthen others in their faith. Pray for them as Paul prayed for the Thessalonians. Love beyond measure.',
        },
        {
          kind: 'reflection',
          id: '1t3-stand-reflect',
          prompt: 'How has tribulation tested your faith? Who has Timothy-like ministered to you in that testing? How can you be Timothy to someone else?',
        },
      ],
    },
  ],
};
