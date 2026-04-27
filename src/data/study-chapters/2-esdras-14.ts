import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const SECOND_ESDRAS_14: RichChapterContent = {
  bookSlug: '2-esdras',
  bookName: '2 Esdras',
  chapter: 14,
  intros: [
    'God calls Ezra to restore the scriptures. Seventy scribes are brought. For forty days, Ezra speaks, and the scribes write down what the Spirit reveals.',
    'Twenty-four books are published for all to read. Seventy books are hidden, kept for the wise. God restores His word through the faithfulness of one man and many hands.',
  ],
  sections: [
    {
      ref: '2 Esdras 14:1–26',
      title: 'The Call to Restore',
      blocks: [
        { kind: 'scripture', chapter: 14, lines: [
          plain(12, 'And God said unto me, The world hath lost the way, and the times be full of errors.'),
          plain(13, 'I am now come to speak unto you these words.'),
          plain(20, 'And thou shalt teach these words unto the wise of the people, whose hearts thou knowest are able to comprehend them.'),
        ] },
        { kind: 'commentary', id: 'esd14-restore', html: 'The world loses the way when God\'s word is forgotten. Ezra is called not to create anew, but to restore what was lost. He becomes God\'s instrument to gather His truth again.' },
        { kind: 'hebrew', id: 'esd14-torah', title: 'Torah — The Teaching; The Way', script: 'תוֹרָה', translit: '<strong>Torah</strong> · law; teaching; the way', description: 'Torah is not law alone but God\'s guidance for living. To restore Torah is to restore the path of righteousness.' },
        { kind: 'christ', id: 'esd14-christ', title: 'Christ Connection — The Living Word', html: 'Jesus is the Word of God made flesh. He restores God\'s truth not through ink on parchment, but through His life, teachings, and presence.' },
        { kind: 'carry', html: 'God calls you to be His witness. What truth do you carry? With whom will you share it? What "wise of the people" will you teach?' },
        { kind: 'reflection', id: 'esd14-wise', prompt: 'God tells Ezra to teach the wise who can comprehend His words. What does it mean to be wise? To what truth are you open?' },
      ],
    },
    {
      ref: '2 Esdras 14:27–50',
      title: 'The Books Revealed',
      blocks: [
        { kind: 'scripture', chapter: 14, lines: [
          plain(44, 'And thou shalt make public the twenty four books which thou hast finished first, that the worthy and unworthy may read them.'),
          plain(45, 'But the seventy shall thou keep, to teach the wise people.'),
          plain(48, 'For in them is the spring of understanding, the fountain of wisdom, and the stream of knowledge.'),
        ] },
        { kind: 'commentary', id: 'esd14-books', html: 'Twenty-four books are opened to all—wise and unwise alike. Seventy books remain hidden, deep wisdom for those mature enough to hold it. Both are needed: accessible truth and profound mystery.' },
        { kind: 'greek', id: 'esd14-sophia', title: 'Sophia — Wisdom', script: 'σοφία', translit: '<strong>Sophia</strong> · wisdom; divine understanding', description: 'Sophia is not mere knowledge but the deep knowing that comes from communion with God. It is hidden from the proud, revealed to the humble.' },
        { kind: 'christ', id: 'esd14-christ2', title: 'Christ Connection — The Hidden and Revealed', html: 'Jesus spoke to crowds in parables—some understood, others did not. To His disciples He explained all things. He offers both public truth and hidden mysteries.' },
        { kind: 'carry', html: 'You are invited into both realms: the public testimony and the hidden mystery. Grow in understanding. Become worthy to hear what is meant for the wise.' },
        { kind: 'reflection', id: 'esd14-seventy', prompt: 'Some wisdom is hidden. Why might God hide His deepest truths? What must change in you to be ready to receive them?' },
      ],
    },
  ],
  bottomShare: {
    quote: 'Make public the twenty four books that the worthy and unworthy may read. But the seventy shall thou keep, to teach the wise people. In them is the spring of understanding.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Esdras 14 · Study Guide',
  },
};
