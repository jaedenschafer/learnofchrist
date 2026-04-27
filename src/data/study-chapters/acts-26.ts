import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const ACTS_26: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 26,

  intros: [
    'Paul speaks and witnesses before the council, before governors, and before kings. His testimony is always the same: he once persecuted the church, but Christ met him and transformed him. He became the apostle to the Gentiles. Through trials and imprisonments, his faith remains unshaken. He continues to preach Christ boldly.',
  ],

  sections: [
    {
      ref: 'Acts 26',
      title: 'Paul&apos;s Witness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            plain(1, 'Now when the centurion and they that were with him, watching Jesus, saw the earthquake, and those things that were done, they feared greatly, saying, Truly this was the Son of God.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts26-witness',
          html: 'Paul&apos;s testimony pierces hearts. Whether before Jews, Gentiles, governors, or kings, he witnesses to the resurrection and the power of Christ. His words are bold, direct, and true.',
        },
        {
          kind: 'greek',
          id: 'acts26-martyreo',
          title: 'Martyreo — To Witness',
          script: 'μαρτυρέω',
          translit: '<strong>Martyreo</strong> · to witness; to testify; to give evidence',
          description: 'Paul is a witness to Christ. He has seen the risen Lord. He testifies to what he has seen and known.',
        },
        {
          kind: 'christ',
          id: 'acts26-christ-witness',
          title: 'Christ Connection — Witness to the Resurrection',
          html: 'Paul&apos;s testimony is powerful because it is rooted in a personal encounter with the risen Jesus. He does not merely repeat doctrines. He testifies to what he has experienced.',
        },
        {
          kind: 'carry',
          html: 'Whether imprisoned or free, Paul continues to speak the gospel. His chains do not silence him. His trials do not defeat him. The word of God cannot be bound.',
        },
        {
          kind: 'reflection',
          id: 'acts26-reflection',
          prompt: 'How can you witness to Christ in your own life and circumstances?',
        },
      ],
    },

    {
      ref: 'Acts 26:28–31',
      title: 'No One Forbade Him',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            plain(30, 'And Paul dwelt two whole years in his own hired house, and received all that came in unto him,'),
            plain(31, 'Preaching the kingdom of God, and teaching those things which concern the Lord Jesus Christ, with all confidence, no man forbidding him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts26-boldness',
          html: 'Even under house arrest, Paul preaches and teaches openly. The gospel cannot be contained. Bonds cannot bind the word of God. Paul speaks with all confidence.',
        },
        {
          kind: 'greek',
          id: 'acts26-parrhesia',
          title: 'Parrhesia — Boldness; Frankness',
          script: 'παρρησία',
          translit: '<strong>Parrhesia</strong> · boldness; confidence; frankness of speech',
          description: 'Paul speaks freely and boldly. He is not silenced by imprisonment, not intimidated by opposition. His confidence is in Christ.',
        },
        {
          kind: 'christ',
          id: 'acts26-christ-kingdom',
          title: 'Christ Connection — The Kingdom Grows',
          html: 'Jesus preached the kingdom of God. Paul continues that proclamation. The kingdom grows not through political power or military might, but through the testimony of those who have encountered the risen Christ.',
        },
        {
          kind: 'carry',
          html: 'Acts ends not with Paul&apos;s release but with his continued proclamation. The book closes with the gospel spreading, unbound and unstoppable. The work continues.',
        },
        {
          kind: 'reflection',
          id: 'acts26-kingdom-reflect',
          prompt: 'What does the kingdom of God mean to you? How are you part of God&apos;s kingdom?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Preaching the kingdom of God, and teaching those things which concern the Lord Jesus Christ, with all confidence, no man forbidding him.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 26 · Study Guide',
  },

  hasHebrew: false,
};
