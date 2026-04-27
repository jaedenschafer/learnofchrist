import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Acts 8 — Philip and the Ethiopian Eunuch
 *
 * After Stephen&apos;s death, persecution scatters the Jerusalem church. Philip
 * goes to Samaria and preaches Christ with signs and wonders. Later, the Spirit
 * directs him to a desert road where he meets an Ethiopian eunuch, a royal
 * official reading Isaiah 53. Philip joins him, explains the good news, and the
 * eunuch is baptized in the first recorded conversion of a Gentile.
 */
export const ACTS_8: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 8,

  intros: [
    'The death of Stephen brings persecution. The church scatters across Judea and Samaria, and those scattered go everywhere preaching the word. Philip, one of the seven chosen to serve tables, becomes an evangelist. He goes to a city of Samaria and proclaims Christ. Signs and wonders follow—unclean spirits are cast out, the sick are healed, and the people listen with one accord.',
    'But God has a different calling for Philip. The Spirit says, "Go toward the south unto the way that goeth down from Jerusalem unto Gaza." On that desert road, Philip meets an Ethiopian—a man of authority, a treasurer of the queen. He is reading Isaiah the prophet. And in that moment, on that lonely road, the gospel crosses a new threshold.',
  ],

  sections: [
    {
      ref: 'Acts 8:1–25',
      title: 'Philip in Samaria',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(1, 'And Saul was consenting unto his death. And at that time there was a great persecution against the church which was at Jerusalem; and they were all scattered abroad throughout the regions of Judaea and Samaria, except the apostles.'),
            plain(5, 'Then Philip went down to the city of Samaria, and preached Christ unto them.'),
            plain(6, 'And the people with one accord gave heed unto those things which Philip spake, hearing and seeing the miracles which he did.'),
            plain(12, 'But when they believed Philip preaching the things concerning the kingdom of God, and the name of Jesus Christ, they were baptized, both men and women.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts8-scatter',
          html:
            'Persecution is often seen as the enemy of the gospel, but Luke shows us something different. When the Jerusalem church is scattered, the gospel spreads. The very act intended to suppress the message becomes the occasion for it to reach new places. Saul, who is consenting to Stephen&apos;s death, is unknowingly driving the church into its own mission field.',
        },
        {
          kind: 'greek',
          id: 'acts8-diaspeiro',
          title: 'Diaspeiro — Scatter',
          script: 'διασπείρω',
          translit: '<strong>Diaspeiro</strong> · to scatter; to disperse; to spread abroad',
          description:
            'The word diasperio literally means to scatter seed. As seeds are scattered and grow in many places, so too the believers, scattered by persecution, grow the church in many places. What looks like destruction is actually sowing. The enemies of Christ become, unknowingly, the agents of His kingdom.',
        },
        {
          kind: 'christ',
          id: 'acts8-christ-spread',
          title: 'Christ Connection — Good News Unstoppable',
          html:
            'No persecution can stop the gospel. No authority, no violence, no threat can contain the message of Christ risen. The church learns that faithfulness does not mean staying in one place in safety; it means being willing to go everywhere, even in danger, to proclaim what Christ has done.',
        },
        {
          kind: 'carry',
          html:
            'When difficulties arise in your own life, you might ask: Is God closing a door, or scattering me toward new purpose? The disciples lost their teacher to death and persecution, yet found that the Holy Spirit worked mightily through their dispersal. What if your current hardship is not an ending, but a beginning?',
        },
        {
          kind: 'reflection',
          id: 'acts8-scatter-seed',
          prompt: 'Have you experienced a time when loss or scattering led to unexpected growth or new purpose? How might the gospel be at work in transitions you&apos;re facing?',
        },
      ],
    },

    {
      ref: 'Acts 8:26–40',
      title: 'The Ethiopian Eunuch',
      blocks: [
        {
          kind: 'scripture',
          chapter: 8,
          lines: [
            plain(26, 'And the angel of the Lord spake unto Philip, saying, Arise, and go toward the south unto the way that goeth down from Jerusalem unto Gaza, which is desert.'),
            plain(28, 'Was returning, and sitting in his chariot read Esaias the prophet.'),
            plain(35, 'Then Philip opened his mouth, and began at the same scripture, and preached unto him Jesus.'),
            plain(36, 'And as they went on their way, they came unto a certain water: and the eunuch said, See, here is water; what doth hinder me to be baptized?'),
            plain(38, 'And he commanded the chariot to stand still: and they went down both into the water, both Philip and the eunuch; and he baptized him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts8-desert-road',
          html:
            'Philip is in Samaria, where his work is fruitful. But the Spirit calls him away to a desert road—to apparent emptiness, apparent purposelessness. Philip obeys. This is the pattern of faithful servants: willingness to leave success for obedience. On that desert road, the gospel meets a man the world had discounted—a eunuch, excluded from the Temple by Jewish law, a foreigner of high rank.',
        },
        {
          kind: 'greek',
          id: 'acts8-theletis',
          title: 'Theletes — Eunuch',
          script: 'εὐνοῦχος',
          translit: '<strong>Eunouchus</strong> · eunuch; a castrated man; an officer of a royal household',
          description:
            'A eunuch was considered ritually unclean under the Torah and barred from entering the Temple. Yet this man—this royal official—reads Isaiah. And in his reading, he comes to the passage about the suffering servant, the one led like a lamb to slaughter. He is reading about the very one who will include him in the kingdom.',
        },
        {
          kind: 'commentary',
          id: 'acts8-isaiah-53',
          html:
            'The eunuch is reading Isaiah 53—the prophecy of the suffering servant. "He is brought as a lamb to the slaughter." Philip does not begin with doctrine or theology. He begins with the text the eunuch is already reading and shows him Jesus. The gospel meets people where they are, in their genuine seeking, and makes clear what was always implied.',
        },
        {
          kind: 'christ',
          id: 'acts8-christ-inclusive',
          title: 'Christ Connection — The Inclusive Gospel',
          html:
            'The Ethiopian eunuch represents all those the old order had excluded. He is foreign, physically imperfect by Jewish law, yet his faith is immediate and complete. Jesus does not sort people by ethnicity, status, or compliance with purity codes. He comes for all who will believe. The gospel is not narrower than the law; it is infinitely wider.',
        },
        {
          kind: 'carry',
          html:
            'If you have ever felt excluded—by a church, by family, by society—know that the gospel meets you exactly where you are. The Ethiopian eunuch was reading scripture and seeking truth. Christ found him there. Your seeking, your questions, your desire to understand God&apos;s purpose is enough. You are not excluded from the kingdom.',
        },
        {
          kind: 'reflection',
          id: 'acts8-belonging',
          prompt: 'Where have you felt excluded or overlooked? How does the inclusion of the Ethiopian eunuch speak to your longing to belong and be known?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Then Philip opened his mouth, and began at the same scripture, and preached unto him Jesus. And he baptized him in the water.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 8 · Study Guide',
  },

  hasHebrew: false,
};
