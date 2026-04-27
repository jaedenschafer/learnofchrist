import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const SECOND_ESDRAS_13: RichChapterContent = {
  bookSlug: '2-esdras',
  bookName: '2 Esdras',
  chapter: 13,
  intros: [
    'Ezra sees a man rising from the sea. No earthly power birthed him. He emerges from the depths, born of God&apos;s own design.',
    'This man speaks, and ten thousand stand against him. Yet he fears nothing. He is the Messiah—the one through whom all nations will be judged and saved.',
  ],
  sections: [
    {
      ref: '2 Esdras 13:1–13',
      title: 'The Man from the Sea',
      blocks: [
        { kind: 'scripture', chapter: 13, lines: [
          plain(3, 'And I saw, and behold, there came up from the sea a man, and he flew with the clouds of heaven.'),
          plain(9, 'And all that heard his voice were afraid; and trembled.'),
          plain(10, 'And look when he shall lift up his eyes, he shall burn them that come unto him with the fire of his lips, and when he shall open his mouth, fire shall go out of his mouth.'),
        ] },
        { kind: 'commentary', id: 'esd13-man', html: 'The man from the sea is no human king. He rides the clouds—the place of God\'s glory. His eyes burn, his words are fire. He is divine judge and deliverer, terrible to those who resist, salvation to those who turn.' },
        { kind: 'hebrew', id: 'esd13-bar-enosh', title: 'Bar-Enosh — Son of Man', script: 'בַר אֱנוֹשׁ', translit: '<strong>Bar-enosh</strong> · son of man', description: 'In Hebrew vision-language, the Son of Man is the figure of divine authority, seated with God, coming to judge and redeem.' },
        { kind: 'christ', id: 'esd13-christ', title: 'Christ Connection — The Son of Man', html: 'Jesus calls Himself the Son of Man, echoing this vision. He comes from God, rides the clouds, speaks with authority, and judges all hearts.' },
        { kind: 'carry', html: 'What does it mean that the Messiah comes from God, not from earthly power? How might this reshape your understanding of true authority?' },
        { kind: 'reflection', id: 'esd13-fire', prompt: 'The man\'s words are fire. What truths from God burn within you? What truths do you resist?' },
      ],
    },
    {
      ref: '2 Esdras 13:14–58',
      title: 'The Ten Thousand Nations',
      blocks: [
        { kind: 'scripture', chapter: 13, lines: [
          plain(25, 'This is the interpretation of the vision which thou sawest. The man whom thou sawest is he whom the high God hath kept many ages.'),
          plain(26, 'By him shall the end of my world be brought about; and by him shall be judged them that are oppressed.'),
          plain(32, 'But he shall stand upon the top of the mount Sion; and Sion shall come, and shall be made manifest to all people, being prepared and builded.'),
        ] },
        { kind: 'commentary', id: 'esd13-judgment', html: 'The man comes to judge the oppressed—those crushed by power, forgotten by the world. His judgment is not vengeance; it is restoration. He gathers them and they dwell in peace.' },
        { kind: 'greek', id: 'esd13-krisis', title: 'Krisis — Judgment; Separation', script: 'κρίσις', translit: '<strong>Krisis</strong> · judgment; division; discernment', description: 'God\'s krisis separates the just from the unjust, the faithful from the faithless. It is both judgment and redemption.' },
        { kind: 'christ', id: 'esd13-christ2', title: 'Christ Connection — Judge of All Nations', html: 'Jesus gathers the scattered and the oppressed. He judges all nations, yet His judgment always opens a door to mercy for those who turn.' },
        { kind: 'carry', html: 'Are you oppressed? Forgotten? The Man from the sea comes for you. Are you the oppressor? He calls you also to turn and live.' },
        { kind: 'reflection', id: 'esd13-mountain', prompt: 'Sion stands upon the mount, visible to all peoples. What does it mean that God\'s kingdom will be made manifest, no longer hidden?' },
      ],
    },
  ],
  bottomShare: {
    quote: 'There came up from the sea a man, and he flew with the clouds of heaven. This is he whom the high God hath kept many ages; by him shall the end of my world be brought about.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Esdras 13 · Study Guide',
  },
};
