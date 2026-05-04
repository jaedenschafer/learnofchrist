import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Jonah 3 — The Repentance of Nineveh
 *
 * God commands Jonah a second time. This time Jonah obeys and goes to Nineveh,
 * proclaiming judgment. The entire city—from the king to the beasts—repents.
 * God sees their repentance and "repents of the evil" He threatened.
 */
export const JONAH_3: RichChapterContent = {
  bookSlug: 'jonah',
  bookName: 'Jonah',
  chapter: 3,

  estimatedMinutes: { beginner: 2, intermediate: 3, deep: 4 },
  opener: {
    matchTitle: /Jonah Preaches to the/i,
    caption: 'Jonah 3',
  },
  intros: [
    'Having been delivered from the fish, Jonah receives the same call a second time: "Arise, go unto Nineveh." This time he rises. He obeys. He goes into the great city and proclaims the coming judgment. What happens next is astonishing: Nineveh believes. From the king on his throne to the common beggar in the street, from the people to their cattle, all turn away from their wickedness. They fast, they put on sackcloth, they turn toward the God they do not yet know.',
    'What Jonah witnesses in Nineveh is a mass repentance, a city-wide turning. And God, seeing their turning, withholds the judgment He threatened. The fundamental rule of God&apos;s mercy is now visible: those who turn from evil shall live. Those who repent shall be spared.',
  ],

  sections: [
    {
      ref: 'Jonah 3:1–4',
      title: 'The Reluctant Preacher',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(1, 'And the word of the Lord came unto Jonah the second time, saying,'),
            plain(2, 'Arise, go unto Nineveh, that great city, and preach unto it the preaching that I bid thee.'),
            plain(3, 'So Jonah arose, and went unto Nineveh. Now Nineveh was an exceeding great city of three days&apos; journey in breadth.'),
            plain(4, 'And Jonah began to enter into the city a day&apos;s journey, and he cried, and said, Yet forty days, and Nineveh shall be overthrown.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jonah3-obey',
          html:
            'This time Jonah obeys. He has learned in the fish&apos;s belly what he refused to learn on the dock at Joppa: that God will pursue His purpose, that flight is futile, that the call to go to Nineveh will follow him even out of death. And so he arises. He enters the great city. And he preaches what God has bid him: in forty days, judgment[res:sefaria-jonah-3][res:bibleodyssey-jonah-repentance].',
        },
        {
          kind: 'hebrew',
          id: 'jonah3-nahpach',
          title: 'Nahpach — "Overthrown"',
          script: 'נִהְפַּךְ',
          translit: '<strong>Nahpach</strong> · overturned; overthrown; destroyed',
          description:
            'The Hebrew word Jonah uses—"Yet forty days, and Nineveh shall be nahpach"—is the language of destruction. The city will be turned upside down, destroyed. This is not ambiguous preaching. This is not hedged with hope. This is judgment, plain and clear.',
        },
        {
          kind: 'christ',
          id: 'jonah3-christ-preacher',
          title: 'Christ Connection — Preaching Repentance',
          html:
            'Jesus began His ministry with the same proclamation as Jonah: "Repent: for the kingdom of heaven is at hand." Like Jonah, Christ calls the city, the people, the nation to turn away from evil. Like Jonah, He warns of judgment. But unlike Jonah, Christ offers not just warning but redemption—His own sacrifice for all who turn toward Him[res:sefaria-jonah-3-v1].',
        },
        {
          kind: 'carry',
          html:
            'Sometimes obedience requires us to speak what others do not wish to hear. Jonah might have preached a gentler message—hints at the possibility of repentance, suggestions that God could be moved. Instead, he speaks the truth: forty days, then judgment. And it is that clarity that moves the city to repent.',
        },
        {
          kind: 'reflection',
          id: 'jonah3-unwilling-messenger',
          prompt:
            'Have you ever been called to speak a hard truth? What made it difficult, and what happened when you finally obeyed?',
        },
      ],
    },

    {
      ref: 'Jonah 3:5–10',
      title: 'A City Repents',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(5, 'So the people of Nineveh believed God, and proclaimed a fast, and put on sackcloth, from the greatest of them even to the least of them.'),
            plain(6, 'For word came unto the king of Nineveh, and he rose from his throne, and he laid his robe from him, and covered him with sackcloth, and sat in ashes.'),
            plain(7, 'And he caused it to be proclaimed and published through Nineveh by the decree of the king and his nobles, saying, Let neither man nor beast, herd nor flock, taste any thing: let them not feed, nor drink water:'),
            plain(8, 'But let man and beast be covered with sackcloth, and cry mightily unto God: yea, let them turn every one from his evil way, and from the violence that is in their hands.'),
            plain(9, 'Who can tell if God will turn and repent, and turn away from his fierce anger, that we perish not?'),
            plain(10, 'And God saw their works, that they turned from their evil way; and God repented of the evil that he had said that he would do unto them; and he did it not.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jonah3-believed',
          html:
            'The people of Nineveh believed God. Not the king alone, not a remnant, not just the righteous—the whole city believed. They understood that what Jonah spoke came from the God of heaven, and they turned. The king himself rose from his throne and put on sackcloth, a gesture of utter humiliation. The king of the great city, dressed in ashes, joining the common people in repentance.',
        },
        {
          kind: 'commentary',
          id: 'jonah3-repentance',
          html:
            'The repentance is complete. It extends to the beasts. It involves a fast—abstaining from food and water. It includes a royal proclamation: "Let every one turn from his evil way, and from the violence that is in their hands." The edict addresses not just ritual uncleanness but moral transformation. They did not merely fast. They turned from violence, from evil, from the ways that had made them enemies of God.',
        },
        {
          kind: 'christ',
          id: 'jonah3-christ-mercy',
          title: 'Christ Connection — God&apos;s Mercy on the Unworthy',
          html:
            'God repents of the evil He threatened. This is not weakness or change of mind. This is the revelation of God&apos;s nature: He has no delight in the death of the wicked, but rather that they turn and live. Christ embodies this mercy perfectly. He came not to condemn the world, but to save it. His willingness to die for sinners—even enemies, even the ungodly—is mercy made incarnate.',
        },
        {
          kind: 'carry',
          html:
            'The lesson of Nineveh&apos;s repentance is that no person, no city, no nation is beyond the reach of God&apos;s mercy if they will turn. The call to repentance is not a threat. It is an offer. It is God&apos;s willingness to spare those who turn away from evil.',
        },
        {
          kind: 'reflection',
          id: 'jonah3-never-too-late',
          prompt:
            'Is there a place in your own life where you have resisted turning—something you knew was wrong but kept doing? What would it take for you to turn as completely as Nineveh did?',
        },
      ],
    },
  ],

  bottomShare: {
    quote:
      'The people of Nineveh believed God, and proclaimed a fast, and put on sackcloth...And God repented of the evil that he had said that he would do unto them.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jonah 3 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-jonah-3',
      kind: 'study',
      source: 'Sefaria',
      label: 'Jonah 3 · Texts & Translations',
      url: 'https://www.sefaria.org/Jonah.3',
      description: 'Primary sources on Nineveh&apos;s repentance and God&apos;s merciful withdrawal of threatened judgment.',
    },
    {
      id: 'bibleodyssey-jonah-repentance',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'The Power of Repentance — Jonah 3',
      url: 'https://www.bibleodyssey.org/en/passages/main-passages/the-book-of-jonah/',
      description: 'Study of Nineveh&apos;s response to Jonah&apos;s message and God&apos;s delight in repentance over judgment.',
    },
    {
      id: 'sefaria-jonah-3-v1',
      kind: 'study',
      source: 'Sefaria',
      label: 'Jonah 3 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Jonah.3',
      description: 'The Hebrew text of Jonah 3 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  hasHebrew: true,
};
