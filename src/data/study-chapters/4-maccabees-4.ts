import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const FOURTH_MACCABEES_4: RichChapterContent = {
  bookSlug: '4-maccabees',
  bookName: '4 Maccabees',
  chapter: 4,
  intros: [
    'When Antiochus III comes to the throne, he is kind to the Jews at first. But power corrupts him. He turns to violence, demanding that all practice pagan worship.',
    'The persecution is not random cruelty but calculated terror. Antiochus wants to prove that obedience to his will transcends obedience to God.',
  ],
  sections: [
    {
      ref: '4 Maccabees 4:1–11',
      title: 'The Tyrant\'s Demand',
      blocks: [
        { kind: 'scripture', chapter: 4, lines: [
          plain(1, 'Now when Antiochus perceived that the Jews would not yield to his commands, he was greatly angered.'),
          plain(5, 'And he spake unto them, saying, Ye shall eat the flesh of swine, and ye shall abandon your God. For I am the lord, and what I command is law.'),
          plain(9, 'Those who refuse shall suffer torture, and their families shall be taken from them.'),
        ] },
        { kind: 'commentary', id: 'mac4-4-demand', html: 'Antiochus does not seek mere obedience but apostasy. He wants the Jews not merely to obey, but to betray their God. His demand is designed to humiliate and to divide loyalty.' },
        { kind: 'hebrew', id: 'mac4-4-avodah', title: 'Avodah — Service; Worship', script: 'עֲבוֹדָה', translit: '<strong>Avodah</strong> · service; worship; the work of the spirit', description: 'Avodah to God and avodah to the king cannot coexist. The Jews must choose whose service defines them.' },
        { kind: 'christ', id: 'mac4-4-christ', title: 'Christ Connection — The Temptation in the Desert', html: 'Satan offers Jesus all the kingdoms of the world if He will worship him. Jesus refuses: "Thou shalt worship the Lord thy God, and him only shalt thou serve."' },
        { kind: 'carry', html: 'Where are you being asked to serve two masters? What loyalty is being demanded that contradicts your faith?' },
        { kind: 'reflection', id: 'mac4-4-divided', prompt: 'When loyalty to God and loyalty to earthly power collide, how do you choose? What price are you willing to pay?' },
      ],
    },
    {
      ref: '4 Maccabees 4:12–26',
      title: 'The Test Begins',
      blocks: [
        { kind: 'scripture', chapter: 4, lines: [
          plain(12, 'And the king brought forth instruments of torture, that the people might see that resistance was hopeless.'),
          plain(17, 'But he also showed clemency to those who yielded, that he might prove that surrender was easy, and that his rule was just.'),
          plain(23, 'Yet many saw through his deception. They understood: to yield would be to lose what made them who they were.'),
        ] },
        { kind: 'commentary', id: 'mac4-4-test', html: 'Antiochus uses both carrot and stick. He offers mercy to those who obey, torture to those who resist. His strategy is to isolate the faithful—to make resistance seem pointless.' },
        { kind: 'greek', id: 'mac4-4-dokimion', title: 'Dokimion — Proof; Test; What is Tested', script: 'δοκίμιον', translit: '<strong>Dokimion</strong> · test; proof; what is tried in fire', description: 'A dokimion is not mere examination but a trial that reveals what is genuine. Fire tests gold; persecution tests faith.' },
        { kind: 'christ', id: 'mac4-4-christ2', title: 'Christ Connection — The Trial of Faith', html: 'Peter wrote: "That the trial of your faith, being much more precious than gold...might be found unto praise and honor."' },
        { kind: 'carry', html: 'Your faith is being tested. Not by Antiochus, but by the pressures of your world. What will you hold fast to?' },
        { kind: 'reflection', id: 'mac4-4-isolation', prompt: 'Antiochus tried to isolate the faithful. What community sustains you in your trials? Who needs you to stand firm?' },
      ],
    },
  ],
  bottomShare: {
    quote: 'Antiochus said: "Ye shall eat swine flesh and abandon your God, for I am lord." But many saw through his deception. They understood: to yield would be to lose what made them who they were.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '4 Maccabees 4 · Study Guide',
  },
};
