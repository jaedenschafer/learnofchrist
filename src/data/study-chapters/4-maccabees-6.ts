import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const FOURTH_MACCABEES_6: RichChapterContent = {
  bookSlug: '4-maccabees',
  bookName: '4 Maccabees',
  chapter: 6,
  intros: [
    'The torturers begin. Eleazar is whipped, and every stroke tears his flesh. The guards pause, waiting for him to yield. Instead, he speaks words of faith.',
    'In agony, Eleazar says: "Thou knowest, O God, that I die for thee." Not from despair, but from devotion.',
  ],
  sections: [
    {
      ref: '4 Maccabees 6:1–14',
      title: 'The Torture Begins',
      blocks: [
        { kind: 'scripture', chapter: 6, lines: [
          plain(1, 'And they laid their hands upon Eleazar, and brought him to the instruments of torture.'),
          plain(7, 'And they scourged him with whips, and he bled upon the ground, yet he would not cry out.'),
          plain(11, 'And Eleazar said, I suffer gladly, for I die for Thee, O Lord.'),
        ] },
        { kind: 'commentary', id: 'mac4-6-torture', html: 'The torture is designed to break the spirit through the body\'s pain. Yet Eleazar\'s spirit transcends his body. His suffering becomes a form of prayer—each stroke an offering.' },
        { kind: 'hebrew', id: 'mac4-6-alah', title: 'Alah — Suffering; Sighing', script: 'אָלָה', translit: '<strong>Alah</strong> · sighing; suffering; the sound of pain', description: 'Even in alah—suffering—the faithful cry out to God. The pain becomes a language of prayer.' },
        { kind: 'christ', id: 'mac4-6-christ', title: 'Christ Connection — Gethsemane', html: 'Jesus prays: "My Father, if it be possible, let this cup pass from me: nevertheless not as I will, but as thou wilt." Agony becomes obedience.' },
        { kind: 'carry', html: 'In your pain, can you say with Eleazar: "I suffer for Thee"? What would transform suffering from meaningless torment into an offering?' },
        { kind: 'reflection', id: 'mac4-6-gladly', prompt: 'Eleazar suffered "gladly." Is this faith, or denial? How does one come to welcome suffering for God\'s sake?' },
      ],
    },
    {
      ref: '4 Maccabees 6:15–29',
      title: 'The Unbreakable Spirit',
      blocks: [
        { kind: 'scripture', chapter: 6, lines: [
          plain(15, 'And the guards were amazed that the old man neither cried out nor yielded.'),
          plain(21, 'And Eleazar said unto them, Ye torment my flesh, but ye cannot torment my soul. For my soul is in the hand of God.'),
          plain(28, 'Thus did reason master even the most terrible pain, through love of God and of righteousness.'),
        ] },
        { kind: 'commentary', id: 'mac4-6-spirit', html: 'The guards face a mystery: their weapons are destroying the body, yet the spirit grows stronger. Eleazar\'s steadfastness is a rebuke to their power and a testimony to God\'s.' },
        { kind: 'greek', id: 'mac4-6-psyche', title: 'Psyche — Soul; Life; Spirit', script: 'ψυχή', translit: '<strong>Psyche</strong> · soul; the essence of life', description: 'The psyche is the true self—what remains after the body is torn. It is the eternal part, the part God claims.' },
        { kind: 'christ', id: 'mac4-6-christ2', title: 'Christ Connection — The Soul\'s Sanctuary', html: 'Jesus said: "Fear them not which kill the body, but are not able to kill the soul." The soul is beyond the torturers\' reach.' },
        { kind: 'carry', html: 'What part of you cannot be taken? Where is your sanctuary? Trust it. It belongs to God.' },
        { kind: 'reflection', id: 'mac4-6-cannot', prompt: 'Eleazar says his soul cannot be tormented. Is this true? Can our spirits be broken, or is there always something intact?' },
      ],
    },
  ],
  bottomShare: {
    quote: 'They scourged Eleazar, and he bled upon the ground, yet he would not cry out. He said: "Thou knowest, O God, that I die for thee. My soul is in the hand of God."',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '4 Maccabees 6 · Study Guide',
  },
};
