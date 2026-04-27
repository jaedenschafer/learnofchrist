import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Acts 8 — Philip's Ministry: Samaria and the Eunuch
 */
export const ACTS_8: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 8,

  intros: [
    'With Stephen&apos;s death, persecution scatters the church beyond Jerusalem. Philip preaches in Samaria and performs miracles. But he is called away to a dusty road where an Ethiopian eunuch reads Isaiah in his chariot. In that encounter, a conversion unfolds that crosses barriers of race, status, and geography. The gospel belongs to all people.',
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
            plain(5, 'Then Philip went down to the city of Samaria, and preached Christ unto them.'),
            plain(7, 'And the unclean spirits cried with loud voice: and many taken with palsies, and that were lame, were healed.'),
            plain(12, 'But when they believed Philip preaching the things concerning the kingdom of God, and the name of Jesus Christ, they were baptized, both men and women.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts8-samaria',
          html: 'Samaria is enemy territory for the Jews. But Philip goes there without hesitation, preaching Christ. The Samaritans respond. Signs and miracles attend his preaching. Unclean spirits cry out and leave. The lame are healed. The gospel belongs to all people, not just Jews.',
        },
        {
          kind: 'greek',
          id: 'acts8-dunamis',
          title: 'Dunamis — Power at Work',
          script: 'δύναμις',
          translit: '<strong>Dunamis</strong> · power; mighty works; miracles',
          description: 'The miracles in Samaria are signs that confirm Philip&apos;s message. Power is not wielded for personal gain. It is the validation that God is at work, that the kingdom is breaking into the world.',
        },
        {
          kind: 'christ',
          id: 'acts8-christ-samaritan',
          title: 'Christ Connection — Gospel Without Borders',
          html: 'Jesus broke barriers in His earthly ministry by speaking to the Samaritan woman at the well. Now, through Philip, the full proclamation of Christ reaches Samaria. The gospel is not confined to Jerusalem or to the Jewish people.',
        },
        {
          kind: 'carry',
          html: 'The disciples in Jerusalem hear that Samaria has received the word of God and send Peter and John. Even the barriers of history yield to the Spirit. The apostles lay hands on the believers, and they receive the Holy Ghost.',
        },
        {
          kind: 'reflection',
          id: 'acts8-samaria-reflect',
          prompt: 'Who are the people in your world that others dismiss or exclude?',
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
            plain(27, 'And he arose and went: and, behold, a man of Ethiopia, an eunuch of great authority under Candace queen of the Ethiopians, who had the charge of all her treasure, and had come to Jerusalem for to worship,'),
            plain(35, 'Then Philip opened his mouth, and began at the same scripture, and preached unto him Jesus.'),
            plain(37, 'And Philip said, If thou believest with all thine heart, thou mayest. And he answered and said, I believe that Jesus Christ is the Son of God.'),
            plain(39, 'And when they were come up out of the water, the Spirit of the Lord caught away Philip, that the eunuch saw him no more: and he went on his way rejoicing.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts8-eunuch',
          html: 'An Ethiopian eunuch—a man of power and means, yet also a man of exclusion. Eunuchs were barred from the temple by Jewish law. He traveled far to worship, yet was kept out. He seeks truth, and on a dusty road, he meets Philip, who helps him find it.',
        },
        {
          kind: 'commentary',
          id: 'acts8-isaiah',
          html: 'The eunuch reads Isaiah 53, the Suffering Servant passage: "He was led as a sheep to the slaughter." Philip uses this passage to proclaim Jesus. The eunuch, reading about rejection and suffering, is shown that the One described has come, has died, and has been vindicated.',
        },
        {
          kind: 'greek',
          id: 'acts8-hegeomai',
          title: 'Hegeomai — To Believe With All Your Heart',
          script: 'ἡγέομαι',
          translit: '<strong>Hegeomai</strong> · to lead; to believe; to be persuaded',
          description: 'The eunuch&apos;s confession is not hesitant. He believes with his whole heart. He is persuaded not by coercion but by recognition: he sees Jesus described and knows He is the one.',
        },
        {
          kind: 'christ',
          id: 'acts8-christ-eunuch',
          title: 'Christ Connection — Restoration and Belonging',
          html: 'Jesus welcomed the outcast. The eunuch, barred from the temple, now becomes a son of God through faith in Christ. His exclusion ends. The barrier is broken by the grace that flows from the cross.',
        },
        {
          kind: 'carry',
          html: 'The eunuch is baptized in the water beside the road. No waiting. No more tests of worthiness. He goes on his way rejoicing—the outcast now included, the seeker now found.',
        },
        {
          kind: 'reflection',
          id: 'acts8-eunuch-reflect',
          prompt: 'When have you been excluded? What difference does it make to know that in Christ, you are fully included?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'And he went on his way rejoicing.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 8 · Study Guide',
  },

  hasHebrew: false,
};
