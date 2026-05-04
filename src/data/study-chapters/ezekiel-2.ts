import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ezekiel 2 — Standing in God's Presence
 *
 * After the overwhelming vision of God's throne, Ezekiel is addressed directly:
 * "Son of man, stand upon thy feet." It is not invitation but command. And with
 * the command comes a mission and a warning: the people you will speak to are
 * rebellious, hard-hearted, and will not listen. Yet you must stand. You must
 * speak. You must not be afraid of their words or their rejection.
 */
export const EZEKIEL_2: RichChapterContent = {
  bookSlug: 'ezekiel',
  bookName: 'Ezekiel',
  chapter: 2,

  estimatedMinutes: { beginner: 1, intermediate: 3, deep: 5 },
  opener: {
    matchTitle: /Ezekiel/i,
    caption: 'Ezekiel 2',
  },
  intros: [
    'The vision of God&apos;s throne has left Ezekiel undone. He falls on his face before the overwhelming reality of the divine presence. But immediately a voice addresses him: "Son of man, stand upon thy feet." This is the first of ninety times in Ezekiel that he is called "son of man" — a term that emphasizes not his majesty but his humanity, his littleness before God. Yet he is called to stand. To rise. To receive a commission. The God who sits enthroned in transcendent glory addresses a mortal exile and calls him to be a prophet. But there is a catch: the prophet will speak to people who do not want to hear. God tells him this upfront. Prepare yourself for rejection.',
  ],

  sections: [
    {
      ref: 'Ezekiel 2:1–7',
      title: 'Stand and Speak',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(1, 'And he said unto me, Son of man, stand upon thy feet, and I will speak unto thee.'),
            plain(2, 'And the spirit entered into me when he spake unto me, and set me upon my feet: and I heard him that spake unto me.'),
            plain(3, 'And he said unto me, Son of man, I send thee to the children of Israel, to a rebellious nation that hath rebelled against me: they and their fathers have transgressed against me, even unto this very day.'),
            plain(4, 'For they are impudent children and stiffhearted. I do send thee unto them; and thou shalt say unto them, Thus saith the Lord God.'),
            plain(5, 'And they, whether they will hear, or whether they will forbear, (for they are a rebellious house,) yet shall know that there hath been a prophet among them.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezk2-son-of-man',
          html: 'The term "son of man" is not glorifying. It means "mortal," "son of Adam." It is the gap between Ezekiel and the God who addresses him — infinite. Yet God narrows that gap by speaking to him, by entering his spirit, by setting him on his feet. The human becomes capable of standing only by the grace of God entering him[res:bibleodyssey-ezekiel].',
        },
        {
          kind: 'hebrew',
          id: 'ezk2-ben-adam',
          title: 'Ben Adam — "Son of Man"',
          script: 'בֶן־אָדָם',
          translit: '<strong>Ben Adam</strong> · son of man; mortal; human being in his frailty',
          description:
            'Throughout Ezekiel, God addresses the prophet as "son of man," emphasizing his humanity and dependence. This term appears rarely in the earlier prophets, but in Ezekiel it becomes the primary mode of address. It reminds the prophet and the reader that between the divine throne and the mortal messenger, there is a vast and unbridgeable gap — crossed only by God&apos;s initiative.',
        },
        {
          kind: 'commentary',
          id: 'ezk2-rebellious-nation',
          html: 'God is unflinching in His assessment: the people are impudent, stiff-hearted, rebellious. They have a history of transgression that goes back generations. And Ezekiel will speak to them. But notice what God does not say: "They will repent and listen." Instead He says: "You will speak, and they will know that a prophet has been among them." The prophet&apos;s task is not guaranteed success. It is guaranteed faithfulness. Whether they hear or forbear, the message stands[res:gog-magog-bibleodyssey].',
        },
        {
          kind: 'carry',
          html: 'Every calling from God contains this paradox: you are sent to speak truth to those who may refuse to listen. The calling does not depend on their response. It depends only on whether you will stand and speak. In our own time, we are each called to bear witness to truth, knowing that not all will receive it. The faithfulness is in the bearing, not in the result.',
        },
        {
          kind: 'reflection',
          id: 'ezk2-prophetic-word',
          prompt: 'Where are you called to speak truth knowing that it may not be received? How does Ezekiel&apos;s commission change the way you think about the purpose of speaking up — not as guaranteed to change minds, but as obedience to God&apos;s direction?',
        },
      ],
    },

    {
      ref: 'Ezekiel 2:8–10',
      title: 'Eat the Scroll',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(8, 'But thou, son of man, hear what I say unto thee; Be not thou rebellious like that rebellious house: open thy mouth, and eat that I give thee.'),
            plain(9, 'And when I looked, behold, an hand was sent unto me; and, lo, a roll of a book was therein;'),
            plain(10, 'And he spread it before me; and it was written within and without: and there was written therein lamentations, and mourning, and woe.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ezk2-eat-scroll',
          html: 'God hands Ezekiel a scroll written on both sides — inside and outside — with words of lament, mourning, and woe. This is the message he is to carry. But before he speaks it, he must eat it. He must internalize it. He must make it his own. What begins outside as written words must become inside him as lived truth. Only then can he speak it with authenticity[res:sefaria-ezekiel].',
        },
        {
          kind: 'christ',
          id: 'ezk2-christ-word-made-flesh',
          title: 'Christ Connection — The Word Incarnate',
          html: 'John declares: "The Word was made flesh, and dwelt among us." God did not merely write a message and send it. God became the message. Christ is the scroll eaten and internalized — not merely preached but lived, embodied, given to the world as His own flesh and blood. To follow Christ is to eat the scroll, to make His word so much our own that it becomes the substance of our being.',
        },
        {
          kind: 'carry',
          html: 'The scroll Ezekiel eats tastes of sorrow, loss, and judgment. Yet the message of judgment is itself an act of love — God breaking His silence about unfaithfulness, calling the exiles back toward truth. To eat such a scroll is to accept a burden. But it is also to participate in God&apos;s work of redemption.',
        },
        {
          kind: 'reflection',
          id: 'ezk2-internalizing-truth',
          prompt: 'What truths of God&apos;s word have you had to eat, to internalize, even when they bring sorrow or challenge? How does receiving God&apos;s word deeply — not just intellectually but in your whole being — transform how you live and speak?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: '"Son of man, stand upon thy feet, and I will speak unto thee." — Ezekiel 2:1',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ezekiel 2 · Study Guide',
  },  resources: [
    {
      id: 'bibleodyssey-ezekiel',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Ezekiel',
      url: 'https://www.bibleodyssey.org/passages/main-articles/ezekiel/',
      description: 'Peer-reviewed SBL entry on the prophet Ezekiel and the Babylonian exile.',
    },
    {
      id: 'gog-magog-bibleodyssey',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Gog and Magog',
      url: 'https://www.bibleodyssey.org/dictionary/gog/',
      description: 'SBL entry on the mysterious Gog figure in Ezekiel and Revelation.',
    },
    {
      id: 'sefaria-ezekiel',
      kind: 'study',
      source: 'Sefaria',
      label: 'Ezekiel',
      url: 'https://www.sefaria.org/Ezekiel',
      description: 'Open-source Hebrew Bible with translations and medieval commentaries.',
    }
  ],

  hasHebrew: true,
};
