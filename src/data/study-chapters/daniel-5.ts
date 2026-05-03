import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Daniel 5 — The Handwriting on the Wall
 *
 * Belshazzar holds a great feast and commands that the golden vessels taken from
 * God&apos;s temple in Jerusalem be brought out. As they drink and praise their gods,
 * a hand writes upon the wall: MENE, MENE, TEKEL, UPHARSIN. The wise men cannot
 * read it. Daniel interprets: God hath numbered thy kingdom and finished it. Thou
 * art weighed in the balances and found wanting. Thy kingdom is divided. That night,
 * Belshazzar is slain and Darius the Mede takes the kingdom.
 */
export const DANIEL_5: RichChapterContent = {
  bookSlug: 'daniel',
  bookName: 'Daniel',
  chapter: 5,

  estimatedMinutes: { beginner: 2, intermediate: 5, deep: 5 },
  intros: [
    'Belshazzar the king makes a great feast to a thousand of his lords and drinks wine before the thousand. As the wine flows and the feast reaches its height, he commands that the golden and silver vessels be brought forth—the vessels that Nebuchadnezzar his father had taken from the temple of God in Jerusalem. The king and his lords, his wives and his concubines drink from them. They drink wine and praise the gods of gold and of silver, of brass and iron, of wood and of stone. In that moment of blasphemy, a sign appears.',
    'In the same hour, as the feasting reaches its peak and the king is exulting in his own power and wisdom, there comes forth the fingers of a man&apos;s hand. They write upon the wall of the palace: MENE, MENE, TEKEL, UPHARSIN. The king&apos;s countenance changes. His thoughts trouble him. His loins are loosed with fear. He cries out for the astrologers, the Chaldeans, the soothsayers. But none can read the writing. And in his desperation, he calls for Daniel, the man in whom the spirit of the holy gods dwells.',
  ],

  sections: [
    {
      ref: 'Daniel 5:22–28',
      title: 'The Writing Interpreted',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(22, 'And thou his son, O Belshazzar, hast not humbled thine heart, though thou knewest all this;'),
            plain(23, 'But hast lifted up thyself against the Lord of heaven; and they have brought the vessels of his house before thee, and thou, and thy lords, thy wives, and thy concubines, have drunk wine in them; and thou hast praised the gods of silver, and gold, of brass, iron, wood, and stone, which see not, nor hear, nor know: and the God in whose hand thy breath is, and whose are all thy ways, hast thou not glorified:'),
            plain(24, 'Then was the part of the hand sent from him; and this writing was written.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'resolve-empire-end',
          html: '<p>The feast, the hand, the writing: Babylon&apos;s end is declared. God sees every boast; nothing hidden is forever hidden.</p>[res:bibleodyssey-apocalyptic]',
        },
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(25, 'And this is the writing that was written, MENE, MENE, TEKEL, UPHARSIN.'),
            plain(26, 'This is the interpretation of the thing: MENE; God hath numbered thy kingdom, and finished it.'),
            plain(27, 'TEKEL; Thou art weighed in the balances, and art found wanting.'),
            plain(28, 'PERES; Thy kingdom is divided, and given to the Medes and Persians.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'daniel5-didst-know',
          html: 'Daniel does not mince words. He speaks the truth to the king with the directness of a prophet. Belshazzar knew what had happened to his father Nebuchadnezzar. He had heard the story of the king whose reason left him, who ate grass like the beasts until he lifted his eyes to heaven and acknowledged God&apos;s sovereignty. And yet, knowing this, Belshazzar has not humbled his heart. Instead, he has lifted up himself against the Lord of heaven. He has taken the vessels from God&apos;s house and drunk wine in them while praising gods of silver and gold, of brass and iron, of wood and stone—things that cannot see, hear, or know[res:daniel-revelation-intertextual].',
        },
        {
          kind: 'hebrew',
          id: 'daniel5-mene',
          title: 'Mene — "Numbered" (Counted)',
          script: 'מְנֵא',
          translit: '<strong>Mene</strong> · numbered; counted; measured; weighed; finished',
          description:
            'The word carries a sense of finality. Your days are numbered. Your kingdom is counted out. The measure is complete. God numbers us—not as we number ourselves in pride and presumption, but with the accuracy of divine knowledge. Every moment, every breath, every kingdom exists within God&apos;s reckoning. And when the number is complete, the time is finished.',
        },
        {
          kind: 'commentary',
          id: 'daniel5-tekel',
          html: 'TEKEL means thou art weighed in the balances and found wanting. This is the deepest judgment—not that you are weak, but that you are insufficient. You fall short. You do not measure up to what God requires. In the balances of heaven, where truth is weighed against truth, where deed is weighed against justice, Belshazzar is found light. He has no substance. He has no weight. He is hollow at the center, filled only with pride and blasphemy.',
        },
        {
          kind: 'commentary',
          id: 'daniel5-peres',
          html: 'PERES means thy kingdom is divided and given to the Medes and Persians. The kingdom that Belshazzar thought was his forever is divided from him. What he held will be taken away. What he believed was secure crumbles. And not to him, but to another power, to another people—this is the final humiliation. The pride that led him to drink from the vessels of God&apos;s temple leads him to lose his throne on the very night the writing appears.',
        },
      ],
    },

    {
      ref: 'Daniel 5:29–31',
      title: 'The Kingdom Falls',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(29, 'Then commanded Belshazzar to clothe Daniel with scarlet, and to put a chain of gold about his neck, and to make a proclamation concerning him, that he should be the third ruler in the kingdom.'),
            plain(30, 'In that night was Belshazzar the king of the Chaldeans slain.'),
            plain(31, 'And Darius the Mede took the kingdom, being about threescore and two years old.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'daniel5-reward',
          html:
            'Even in the moment of judgment, Belshazzar honors Daniel as the messenger of his doom. He offers him power, wealth, and station. But what good is a kingdom promised to a man when that kingdom is about to fall? The scarlet and the gold mean nothing. The throne he offers means nothing. That very night—before the scarlet fades, before the gold tarnishes—Belshazzar is slain. The kingdom passes to the Medes and Persians. The king who lifted up himself against the Lord of heaven does not live to see the sun rise.',
        },
        {
          kind: 'commentary',
          id: 'daniel5-darius',
          html:
            'Darius the Mede takes the kingdom. He is not a conqueror in the traditional sense. He is the instrument of God&apos;s judgment. The very thing that Belshazzar feared—the loss of his kingdom—comes upon him in a night. The hand that wrote on the wall did not write a warning. It wrote a verdict. And that verdict was executed before morning.',
        },
        {
          kind: 'christ',
          id: 'daniel5-christ-judgment',
          title: 'Christ Connection — The Judge Who Knows All Hearts',
          html:
            'Christ comes not as Belshazzar&apos;s god, visible in silver and gold, but as the invisible presence who writes upon the heart. He knows every hidden thing. He numbers our days. He weighs our hearts in the balances. In John 8, when the woman caught in adultery is brought before Him, the scribes and Pharisees trust that Jesus will endorse their sentence. But He bends down and writes upon the ground. We do not know what He wrote, but we know that His writing had the power to silence accusers and turn hearts toward mercy. Yet His ultimate word—for those who reject Him—is a verdict as final as Belshazzar&apos;s.',
        },
        {
          kind: 'carry',
          html:
            'Belshazzar&apos;s feast is a parable of false security. He feels powerful. He controls the greatest kingdom on earth. He drinks from the vessels of the God he has rejected. And yet, his kingdom has already been measured, weighed, and found wanting. It will be divided and given to another. The story warns us: pride and blasphemy do not go unchecked. God numbers our days. God weighs our choices. And God&apos;s judgment, when it comes, comes surely and finally. The only security is in humbling ourselves before God, as Nebuchadnezzar learned—and as Belshazzar would not.',
        },
        {
          kind: 'reflection',
          id: 'daniel5-writing',
          prompt: 'If God wrote words on the wall of your life tonight, what would they be? Are you building your life on solid ground, or on something that will be weighed and found wanting?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Thou art weighed in the balances, and art found wanting. Thy kingdom is divided, and given to the Medes and Persians.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Daniel 5 · Study Guide',
  },  resources: [
    {
      id: 'bibleodyssey-apocalyptic',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Apocalyptic Literature',
      url: 'https://www.bibleodyssey.org/dictionary/apocalypse/',
      description: 'SBL entry on the apocalyptic genre exemplified by Daniel.',
    },
    {
      id: 'daniel-revelation-intertextual',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Daniel 7 ↔ Revelation 13 / Matthew 24',
      url: 'https://intertextual.bible/text/daniel-7/revelation-13',
      description: 'Side-by-side comparison of Daniel&apos;s apocalyptic visions and their NT fulfillment.',
    }
  ],

  hasHebrew: true,
};
