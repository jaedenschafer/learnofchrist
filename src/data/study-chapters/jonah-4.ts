import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Jonah 4 — The Mercy Jonah Resists
 *
 * Jonah is furious that God has spared Nineveh. He would rather die than see
 * the enemies of Israel saved. God teaches him through the parable of the gourd:
 * "Should not I spare Nineveh, that great city, wherein are more than sixscore
 * thousand persons?"
 */
export const JONAH_4: RichChapterContent = {
  bookSlug: 'jonah',
  bookName: 'Jonah',
  chapter: 4,

  estimatedMinutes: { beginner: 2, intermediate: 4, deep: 5 },
  intros: [
    'Jonah preached. Nineveh repented. God spared the city. And Jonah is angry. Not grieved, not disappointed—angry. He wanted judgment. He wanted Nineveh destroyed. The God he serves has betrayed him by being exactly who He has always been: merciful, slow to anger, abounding in steadfast love. In Jonah&apos;s rage, we encounter a man who has obeyed God outwardly but whose heart has never turned.',
    'What follows is God&apos;s final lesson to His prophet. Through the parable of the gourd—a plant that grows in a day and dies in a day—God teaches Jonah the nature of his own love and shows him the vastness of God&apos;s pity for the lost. The book of Jonah ends with a question, not an answer. It invites the reader to stand with God.',
  ],

  sections: [
    {
      ref: 'Jonah 4:1–5',
      title: 'The Prophet&apos;s Anger',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(1, 'But it displeased Jonah exceedingly, and he was very angry.'),
            plain(2, 'And he prayed unto the Lord, and said, I pray thee, O Lord, was not this that I said when I was yet in my country? Therefore I fled before unto Tarshish: for I knew that thou art a gracious God, and merciful, slow to anger, and of great kindness, and repentest thee of the evil.'),
            plain(3, 'Therefore now, O Lord, take, I beseech thee, my life from me; for it is better for me to die than to live.'),
            plain(4, 'Then said the Lord, Doest thou well to be angry?'),
            plain(5, 'So Jonah went out of the city, and sat on the east side of the city, and there made him a booth, and sat under it in the shadow, till he might see what would become of the city.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jonah4-displeased',
          html:
            'Jonah is angry because God is merciful. This is the core of the book. Jonah fled not because he doubted God&apos;s power but because he knew God&apos;s character. He knew God is gracious and merciful, slow to anger and abounding in kindness. And he could not bear the thought of God extending that mercy to Nineveh. His own nationalism, his own hatred, his own desire for vengeance has become his gospel. When God refuses to destroy Nineveh, Jonah prefers death to life.',
        },
        {
          kind: 'hebrew',
          id: 'jonah4-charaph',
          title: 'Charaph — "Displeased"',
          script: 'חָרַד',
          translit: '<strong>Charaph</strong> · displeased; greatly troubled; grieved',
          description:
            'The Hebrew word conveys deep displeasure—not mere annoyance, but a fundamental offense. Jonah&apos;s entire world is overturned by God&apos;s mercy. The God he thought he knew has revealed Himself to be different from what Jonah believed.',
        },
        {
          kind: 'christ',
          id: 'jonah4-christ-pity',
          title: 'Christ Connection — God&apos;s Pity for the Lost',
          html:
            'In Matthew 23, Jesus weeps over Jerusalem: "How often would I have gathered thy children together, even as a hen gathereth her chickens under her wings, and ye would not!" This is the heart of God toward all who are lost, all who are far from Him. Jonah resents this pity. But Christ embodies it. He came to seek and to save that which was lost, even the enemies of the righteous.',
        },
        {
          kind: 'carry',
          html:
            'Jonah reveals a truth about all of us: we often want God&apos;s justice for others and God&apos;s mercy for ourselves. We are angry when others receive grace. We demand that God love whom we love and hate whom we hate. The book of Jonah is a mirror held up to our own hearts.',
        },
        {
          kind: 'reflection',
          id: 'jonah4-whose-enemies',
          prompt:
            'Who are the "Ninevites" in your own life—people or groups you think deserve judgment rather than mercy? What would it mean for you to share God&apos;s pity for them?',
        },
      ],
    },

    {
      ref: 'Jonah 4:6–11',
      title: 'The Lesson of the Gourd',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            plain(6, 'And the Lord God prepared a gourd, and made it to come up over Jonah, that it might be a shadow over his head, to deliver him from his grief. So Jonah was exceeding glad of the gourd.'),
            plain(7, 'But God prepared a worm when the morning rose the next day, and it smote the gourd that it withered.'),
            plain(8, 'And it came to pass, when the sun did arise, that God prepared a vehement east wind; and the sun beat upon the head of Jonah, that he fainted, and wished in himself to die, and said, It is better for me to die than to live.'),
            plain(9, 'And God said to Jonah, Doest thou well to be angry for the gourd? And he said, I do well to be angry, even unto death.'),
            plain(10, 'Then said the Lord, Thou hast had pity on the gourd, for the which thou hast not laboured, neither madest it grow; which came up in a night, and perished in a night:'),
            plain(11, 'And should not I spare Nineveh, that great city, wherein are more than sixscore thousand persons that cannot discern between their right hand and their left hand; and also much cattle?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jonah4-gourd',
          html:
            'God prepares a gourd to shade Jonah from the sun and heat. Jonah is "exceeding glad" of this plant. He loves it, rests under its shelter, finds comfort in it. Then God sends a worm, and the gourd withers. A vehement east wind blows. The sun beats down. And Jonah, bereft of the shade he enjoyed, wishes to die.',
        },
        {
          kind: 'commentary',
          id: 'jonah4-question',
          html:
            'God asks: "Doest thou well to be angry for the gourd?" And Jonah answers: "I do well to be angry, even unto death." He is willing to die for a plant that grew in a night and died in a night. Yet he begrudges God the desire to save 120,000 people—souls created in God&apos;s image, many of them children who cannot yet discern between right and left. The parable is devastating in its simplicity.',
        },
        {
          kind: 'christ',
          id: 'jonah4-christ-love',
          title: 'Christ Connection — The Shepherd Seeks the Lost',
          html:
            'In Luke 15, Christ tells of a shepherd who leaves ninety-nine sheep to search for one that is lost. When He finds it, He rejoices more over that one sheep than over the ninety-nine who never strayed. This is the heart of Christ—a willingness to pursue the lost, to value the one as much as the many, to find joy in the repentance of the wayward. This is the God Jonah could not accept. This is the God we are called to emulate.',
        },
        {
          kind: 'carry',
          html:
            'The book of Jonah does not end with Jonah accepting God&apos;s mercy toward Nineveh. It ends with a question—God&apos;s question to Jonah, and by extension, to all of us: "Should not I spare Nineveh?" The reader is invited to answer. The invitation stands at the end of Scripture too: will you, like Jonah, resist God&apos;s mercy, or will you join Him in it?',
        },
        {
          kind: 'reflection',
          id: 'jonah4-answer',
          prompt:
            'God&apos;s final question to Jonah is also a question to you: should God spare your enemies? Should He extend mercy to those who have wronged you? How do you answer?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Thou hast had pity on the gourd...and should not I spare Nineveh, that great city?',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jonah 4 · Study Guide',
  },

  hasHebrew: true,
};
