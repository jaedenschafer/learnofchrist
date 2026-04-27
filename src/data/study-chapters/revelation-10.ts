import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Revelation 10 — The Mighty Angel and the Little Book
 *
 * A mighty angel comes down from heaven with a little book. He sets his feet
 * on sea and land, roars like a lion, and seven thunders answer him. John is
 * commanded to take the book and eat it. He is told: "There should be time
 * no longer."
 */
export const REVELATION_10: RichChapterContent = {
  bookSlug: 'revelation',
  bookName: 'Revelation',
  chapter: 10,

  intros: [
    'A pause in the trumpet judgments. Before the final three trumpets sound, an angel appears. This is not a judgment angel, but a messenger of power and authority. He straddles the earth and sea, asserting dominion. Yet he comes with a little book—a book John is commanded to eat.',
    'The eating of the book is prophecy. John must internalize the word. He must digest it. And he is told: the time of delay is over. What remains must come.',
  ],

  sections: [
    {
      ref: 'Revelation 10:1–7',
      title: 'The Mighty Angel and the Seven Thunders',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(1, 'And I saw another mighty angel come down from heaven, clothed with a cloud: and a rainbow was upon his head: and his face was as it were the sun, and his feet as pillars of fire:'),
            plain(2, 'And he had in his hand a little book open: and he set his right foot upon the sea, and his left foot on the earth,'),
            plain(3, 'And cried with a loud voice, as when a lion roareth: and when he had cried, seven thunders uttered their voices.'),
            plain(4, 'And when the seven thunders had uttered their voices, I was about to write: and I heard a voice from heaven saying unto me, Seal up those things which the seven thunders uttered, and write them not.'),
            plain(6, 'And sware by him that liveth for ever and ever, who created heaven, and the things that therein are, and the earth, and the things that therein are, and the sea, and the things which are therein, That there should be time no longer:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev10-angel',
          html:
            'The mighty angel is clothed with a cloud and ringed with a rainbow—symbols of God&apos;s presence and mercy. His face shines like the sun. His feet are pillars of fire. He straddles the sea and land—all creation is beneath him. When he roars, seven thunders answer. Yet John is commanded not to write what the thunders say. Some knowledge is sealed. Some divine purposes remain hidden.',
        },
        {
          kind: 'greek',
          id: 'rev10-bronte',
          title: 'Bronte — Thunder',
          script: 'βροντή',
          translit: '<strong>Bronte</strong> · thunder; the voice of God',
          description:
            'In Scripture, thunder often represents God&apos;s voice. Seven thunders speak, but their message is sealed. Not all of God&apos;s counsel is revealed to humanity. There are mysteries that remain veiled until their time comes.',
        },
        {
          kind: 'christ',
          id: 'rev10-christ-time',
          title: 'Christ Connection — The One Who Fulfills All Time',
          html:
            'The angel swears that there shall be no more delay. The time appointed by God is at its end. Christ is the fulfillment of all time—the one toward whom all history moves. In Him, time and eternity meet.',
        },
        {
          kind: 'carry',
          html:
            'Some things remain hidden. Not all of God&apos;s purpose is revealed to you. Acceptance of mystery is part of faith. Trust that what is sealed is sealed for a reason. Focus on what is revealed: the little book, open, ready to be taken and eaten.',
        },
        {
          kind: 'reflection',
          id: 'rev10-mystery',
          prompt: 'What mystery about God or the future troubles you? How can you accept that not all answers are given?',
        },
      ],
    },

    {
      ref: 'Revelation 10:8–11',
      title: 'The Little Book Eaten',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(8, 'And the voice which I heard from heaven spake unto me again, and said, Go and take the little book which is open in the hand of the angel which standeth upon the sea and upon the earth.'),
            plain(9, 'And I went unto the angel, and said unto him, Give me the little book. And he said unto me, Take it, and eat it up; and it shall make thy belly bitter, but it shall be in thy mouth sweet as honey.'),
            plain(10, 'And I took the little book out of the angel&apos;s hand, and ate it up; and it was in my mouth sweet as honey: and as soon as I had eaten it, my belly was bitter.'),
            plain(11, 'And he said unto me, Thou must prophesy again before many peoples, and nations, and tongues, and kings.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'rev10-eaten',
          html:
            'The little book is open in the angel&apos;s hand. John is commanded to take it and eat it. The book is sweet in his mouth but bitter in his belly. This echoes Jeremiah (1:17–19), where Jeremiah eats the scroll of God&apos;s word. Prophecy is sweet—the truth of God—but it carries a cost. The prophet must bear suffering for the truth.',
        },
        {
          kind: 'greek',
          id: 'rev10-biblion',
          title: 'Biblion — Little Book',
          script: 'βιβλίον',
          translit: '<strong>Biblion</strong> · book; scroll; written word',
          description:
            'The biblion is the written word. To eat it is to internalize it. The metaphor of eating comes from Ezekiel 3:1–3: "I opened my mouth, and he caused me to eat that scroll." To consume the word is to make it part of yourself.',
        },
        {
          kind: 'christ',
          id: 'rev10-christ-word',
          title: 'Christ Connection — I Am the Word',
          html:
            'In John 1:1, Jesus is identified with the Word—the Logos that was with God and was God. To consume the word is, in a sense, to consume Christ. To take Him in, to let Him reshape you.',
        },
        {
          kind: 'carry',
          html:
            'You are called to prophesy—to testify to the truth. The truth is sweet. But it will cost you. Not all will believe. Not all will receive your word. Yet you are commanded to speak. Eat the book. Let the word transform you. Then speak.',
        },
        {
          kind: 'reflection',
          id: 'rev10-prophesy',
          prompt: 'What truth has God given you to speak? Where are you called to testify, even if it brings opposition?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'There should be time no longer. And I took the little book out of the angel&apos;s hand, and ate it up; and it was in my mouth sweet as honey.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Revelation 10 · Study Guide',
  },

  hasHebrew: false,
};
