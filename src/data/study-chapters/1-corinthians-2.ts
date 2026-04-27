import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Corinthians 2 — We Preach Christ Crucified
 *
 * Paul explains the method of his preaching. He did not come to Corinth with
 * eloquence or human wisdom. He came weak, trembling, demonstrating the Spirit
 * and power. The gospel works not through the force of rhetoric but through the
 * Spirit of God piercing hearts.
 */
export const FIRST_CORINTHIANS_2: RichChapterContent = {
  bookSlug: '1-corinthians',
  bookName: '1 Corinthians',
  chapter: 2,

  intros: [
    'When Paul arrived in Corinth, he came not as the eloquent orator the Greeks admired. He came in weakness, in fear, in trembling. This was no accident. It was strategic. Paul refused to let his own eloquence become the foundation of the Corinthians&apos; faith. If they believed because Paul was persuasive, their faith would rest on the sand of his personality. Instead, Paul preaches in the demonstration of the Spirit and power, so that faith rests on Christ alone.',
    'Behind the weakness of the preacher stands the power of the Spirit. The Spirit searches the deep things of God and reveals them to those who believe. No human wisdom, no matter how refined, can achieve this revelation. The Spirit alone can open the eyes of the blind to see Jesus Christ.',
  ],

  sections: [
    {
      ref: '1 Corinthians 2:1–5',
      title: 'The Weakness of the Preacher',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(1, 'And I, brethren, when I came to you, came not with excellency of speech or of wisdom, declaring unto you the testimony of God.'),
            plain(2, 'For I determined not to know any thing among you, save Jesus Christ, and him crucified.'),
            plain(3, 'And I was with you in weakness, and in fear, and in much trembling.'),
            plain(4, 'And my speech and my preaching was not with enticing words of man&apos;s wisdom, but in demonstration of the Spirit and of power:'),
            plain(5, 'That your faith should not stand in the wisdom of men, but in the power of God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-1-weakness',
          html:
            'Paul makes a deliberate choice: he will not come with &quot;excellency of speech or of wisdom.&quot; The Corinthians are impressed by such things, but Paul knows they would become a trap. He determines to know only one thing: &quot;Jesus Christ, and him crucified.&quot; Everything else—his eloquence, his learning, his status—must fade away so that only Christ remains.',
        },
        {
          kind: 'greek',
          id: 'cor2-1-dynamis',
          title: 'Dynamis — Power',
          script: 'δύναμις',
          translit: '<strong>Dynamis</strong> · power; mighty work; miracle',
          description:
            'The dynamis of God is not intellectual persuasion. It is living power, the force that raises the dead and transforms hearts. Paul&apos;s preaching carries no dynamis of human eloquence, but the dynamis of God&apos;s Spirit moves through it.',
        },
        {
          kind: 'commentary',
          id: 'cor2-1-trembling',
          html:
            'Paul was &quot;with you in weakness, and in fear, and in much trembling.&quot; This is not a confession of inadequacy to be overcome. It is a requirement. When the preacher comes weak, when his own resources are exhausted, then the power of God can work without obstruction. The Corinthians&apos; faith must not rest in Paul&apos;s confidence but in God&apos;s power.',
        },
        {
          kind: 'christ',
          id: 'cor2-1-christ-crucified',
          title: 'Christ Connection — Christ Crucified Alone',
          html:
            'Paul determines to know &quot;Jesus Christ, and him crucified.&quot; This is not narrow-mindedness. This is focus. Everything Paul says, everything he does, points to the cross. There Christ accomplished what no human wisdom ever could—reconciliation between God and man.',
        },
        {
          kind: 'carry',
          html:
            'We are tempted to make our faith impressive—to frame it in language the world respects, to present it with confidence born of our own understanding. Paul says no. Let your weakness show. Let your trembling be visible. Then the power of God can work without your personality getting in the way.',
        },
        {
          kind: 'reflection',
          id: 'cor2-1-power-of-god',
          prompt: 'Where are you tempted to trust in your own words or wisdom? How might you step back so that God&apos;s power can work?',
        },
      ],
    },

    {
      ref: '1 Corinthians 2:10–16',
      title: 'The Spirit Reveals Deep Things',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(10, 'But God hath revealed them unto us by his Spirit: for the Spirit searcheth all things, yea, the deep things of God.'),
            plain(11, 'For what man knoweth the things of a man, save the spirit of man which is in him? even so the things of God knoweth no man, but the Spirit of God.'),
            plain(12, 'Now we have received, not the spirit of the world, but the spirit which is of God; that we might know the things that are freely given to us of God.'),
            plain(14, 'But the natural man receiveth not the things of the Spirit of God: for they are foolishness unto him: neither can he know them, because they are spiritually discerned.'),
            plain(16, 'For who hath known the mind of the Lord, that he may instruct him? But we have the mind of Christ.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'cor2-2-spirit',
          html:
            'The Spirit of God &quot;searcheth all things, yea, the deep things of God.&quot; Only God can know the mind of God. Only the Spirit can traverse the infinite mystery of the divine nature. We could never grasp it through reason alone. But the Spirit reveals these deep things to believers, imparting knowledge that transcends human understanding.',
        },
        {
          kind: 'greek',
          id: 'cor2-2-pneuma',
          title: 'Pneuma — Spirit',
          script: 'πνεῦμα',
          translit: '<strong>Pneuma</strong> · spirit; breath; the Holy Spirit',
          description:
            'Pneuma is the breath, the living force of God. It is not abstract knowledge imparted as information. It is the living presence of God that comes to dwell within the believer, bringing with it understanding that surpasses human learning.',
        },
        {
          kind: 'commentary',
          id: 'cor2-2-discerned',
          html:
            'The &quot;natural man&quot;—the person without the Spirit—cannot receive the things of God. They appear to him as foolishness. He cannot grasp them because they are &quot;spiritually discerned.&quot; Understanding God is not an intellectual achievement. It is a gift of the Spirit, given to those who believe.',
        },
        {
          kind: 'christ',
          id: 'cor2-2-christ-mind',
          title: 'Christ Connection — We Have the Mind of Christ',
          html:
            'The passage concludes with a staggering claim: &quot;We have the mind of Christ.&quot; Not through our own effort, but through the Spirit&apos;s work, we begin to think God&apos;s thoughts after Him. We begin to see as Christ sees, to love as Christ loves.',
        },
        {
          kind: 'carry',
          html:
            'If you struggle to understand Scripture, do not assume you lack intelligence. Understanding God requires not a sharper mind but the Spirit of God. Pray for the Spirit. Open your heart. Ask God to make the deep things plain. The Spirit does not require academic credentials. It requires humility and faith.',
        },
        {
          kind: 'reflection',
          id: 'cor2-2-spirit-revelation',
          prompt: 'When have you experienced the Spirit revealing something from Scripture to you? What does it mean to have &quot;the mind of Christ&quot;?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'And my speech and my preaching was not with enticing words of man&apos;s wisdom, but in demonstration of the Spirit and of power.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Corinthians 2 · Study Guide',
  },

  hasHebrew: false,
};
