import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Acts 12 — James Killed, Peter Freed, Herod Struck
 */
export const ACTS_12: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 12,

  intros: [
    'King Herod rises up to oppress the church. He kills James, the brother of John. He takes Peter and throws him in prison, intending to execute him. But the night before his trial, an angel appears. Peter&apos;s chains fall off. He walks past the guards as though they are shadows. Meanwhile, Herod himself is struck down—eaten by worms. The word of God grows and multiplies.',
  ],

  sections: [
    {
      ref: 'Acts 12:1–11',
      title: 'Peter&apos;s Miraculous Escape',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(5, 'Peter therefore was kept in prison: but prayer was made without ceasing of the church unto God for him.'),
            plain(7, 'And, behold, the angel of the Lord came upon him, and a light shined in the prison: and he smote Peter on the side, and raised him up, saying, Arise up quickly. And his chains fell off from his hands.'),
            plain(9, 'And Peter followed him out of the prison; but he wist not that it was true which was done by the angel; but thought he saw a vision.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts12-prayer',
          html: 'The church prays without ceasing. This is not polite prayer. This is desperate intercession. And in response, God acts. An angel appears. Peter&apos;s chains fall off. The prison cannot hold him.',
        },
        {
          kind: 'greek',
          id: 'acts12-deesis',
          title: 'Deesis — Prayer; Earnest Supplication',
          script: 'δέησις',
          translit: '<strong>Deesis</strong> · prayer; earnest request; supplication',
          description: 'The word conveys a sense of urgency and need. The church is not asking casually. It is interceding with intensity for Peter&apos;s life.',
        },
        {
          kind: 'christ',
          id: 'acts12-christ-deliverance',
          title: 'Christ Connection — Deliverance Through Prayer',
          html: 'Jesus taught His disciples to pray for daily bread and for deliverance from evil. Peter&apos;s release is the answer to the church&apos;s prayers. God hears. God acts. The impossible becomes the ordinary.',
        },
        {
          kind: 'carry',
          html: 'Peter is released but walks in a daze, unsure if what is happening is real or vision. Only when he reaches the street does he understand: "The Lord hath sent his angel, and hath delivered me." The concrete reality of God&apos;s work becomes clear.',
        },
        {
          kind: 'reflection',
          id: 'acts12-prayer-reflect',
          prompt: 'When have you prayed for something that seemed impossible?',
        },
      ],
    },

    {
      ref: 'Acts 12:20–23',
      title: 'Herod&apos;s Death',
      blocks: [
        {
          kind: 'scripture',
          chapter: 12,
          lines: [
            plain(21, 'And upon a set day Herod, arrayed in all his royal apparel, sat upon his throne, and made an oration unto them.'),
            plain(23, 'And immediately the angel of the Lord smote him, because he gave not God the glory: and he was eaten of worms, and gave up the ghost.'),
            plain(24, 'But the word of God grew and multiplied.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts12-herod',
          html: 'Herod sits on his throne in his royal apparel, making a speech. The people cry out: "It is the voice of a god, and not of a man." Herod accepts their worship. But he has not given glory to God. Immediately, he is struck. Worms eat his flesh. He dies.',
        },
        {
          kind: 'commentary',
          id: 'acts12-glory',
          html: 'The issue is simple: Herod took for himself the glory that belongs to God alone. He did not resist when the crowd called him divine. His death is a stark reminder that God will not share His glory.',
        },
        {
          kind: 'greek',
          id: 'acts12-doxa',
          title: 'Doxa — Glory; Honor',
          script: 'δόξα',
          translit: '<strong>Doxa</strong> · glory; honor; splendor; praise',
          description: 'To give glory to God is to acknowledge His authority, His power, His uniqueness. To take that glory for oneself is idolatry.',
        },
        {
          kind: 'christ',
          id: 'acts12-christ-glory',
          title: 'Christ Connection — All Glory to God',
          html: 'Jesus refused the glory that belonged to Him. He came not to be served but to serve. He pointed always to the Father. Herod&apos;s pride stands in stark contrast to the humility of Christ.',
        },
        {
          kind: 'carry',
          html: 'Peter escapes. Herod dies. The word of God grows and multiplies. Persecution and power cannot stop the kingdom. It grows like a seed planted in good soil.',
        },
        {
          kind: 'reflection',
          id: 'acts12-glory-reflect',
          prompt: 'To whom do you give your trust and honor?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'But the word of God grew and multiplied.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 12 · Study Guide',
  },

  hasHebrew: false,
};
