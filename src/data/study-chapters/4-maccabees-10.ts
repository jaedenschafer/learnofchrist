import { hp, hy, hg, t, plain, type RichChapterContent } from './types';
export const FOURTH_MACCABEES_10: RichChapterContent = {
  bookSlug: '4-maccabees',
  bookName: '4 Maccabees',
  chapter: 10,
  intros: [
    'The second of the seven brothers faces the tyrant Antiochus. He is tortured, his tongue cut out for proclaiming the God of Israel. Yet even in silence, his witness rings out.',
    "In 4 Maccabees 10, the second brother is a living paradox: stripped of the power to speak, his faithfulness becomes louder than words. His death is not defeat but victory—reason triumphs over the body&apos;s pain.",
  ],
  sections: [
    {
      ref: '4 Maccabees 10:1–11',
      title: 'The Second Brother Tortured',
      blocks: [
        { kind: 'scripture', chapter: 10, lines: [
          plain(1, 'The second brother they brought to the wheel and fastened him to it, stretching his limbs upon the rack.'),
          plain(3, 'And when the tyrant saw that he was not moved by compassion, he ordered that his tongue be cut out.'),
          plain(5, 'But the brother, though deprived of speech, yet made a sign with his hands, proclaiming the God of heaven to all who stood near.'),
        ] },
        { kind: 'commentary', id: '4m10-witness', html: 'The second brother is stripped of speech but not of testimony. His silence becomes eloquence. Where the body fails, devotion speaks. The tyrant inflicts wounds; the brother inflicts conviction on his tormentors through the sheer integrity of his witness.' },
        { kind: 'greek', id: '4m10-martys', title: 'Martys — Witness', script: 'μάρτυς', translit: '<strong>Martys</strong> · witness; one who testifies', description: 'A witness in Greek is one whose body, life, and death testify to truth. The brother cannot speak, but his body and will bear witness to God&apos;s reality.' },
        { kind: 'christ', id: '4m10-christ', title: 'Christ Connection — Silent Witness Before the Throne', html: 'The brother is mute yet his witness shakes the throne room. Jesus stands silent before Pilate, yet His suffering testifies to all creation. The greatest witness may be wordless—the offering of self.' },
        { kind: 'carry', html: 'This brother lost the power of speech but not of testimony. Sometimes our greatest witness is not what we say but how we suffer, how we endure, how we refuse to deny God even when the cost is everything.' },
        { kind: 'reflection', id: '4m10-speech', prompt: 'When have you been silenced? When has your life had to speak for you, louder than words ever could?' },
      ],
    },
    {
      ref: '4 Maccabees 10:12–21',
      title: 'Victory Over the Body',
      blocks: [
        { kind: 'scripture', chapter: 10, lines: [
          plain(12, 'The tyrant was overcome with rage. He thrust him on the wheel, and the brother died, having conquered the tyrant&apos;s will through reason.'),
          plain(14, 'For he had shown that reason is stronger than the body, and that no torture can overcome a soul devoted to God.'),
          plain(16, 'The people wept at his courage. Even among those who had tortured him, some turned to recognize the power of piety.'),
        ] },
        { kind: 'commentary', id: '4m10-reason', html: 'Here 4 Maccabees makes its defining claim: reason (guided by devotion) masters the passions of the flesh. Pain, fear, and the will to live all assault the brother. Reason holds fast. This is no denial of the body but its proper ordering under the soul&apos;s command.' },
        { kind: 'hebrew', id: '4m10-gevura', title: 'Gevurah — Strength; Severity', script: 'גְּבוּרָה', translit: '<strong>Gevurah</strong> · strength; power; the severity of divine judgment', description: 'Hebrew gevurah is both the courage to endure and the severance of what is false. The brother&apos;s gevurah is the strength to let go of life itself rather than break covenant.' },
        { kind: 'christ', id: '4m10-christ2', title: 'Christ Connection — The Strength of Surrender', html: 'The brother&apos;s strength lies in refusing to save his own life. Jesus prays, "Not my will but thine." The deepest strength is surrender to God&apos;s will, even unto death.' },
        { kind: 'carry', html: 'The second brother teaches us that reason is not coldness but the soul&apos;s mastery of its own desires. To follow God faithfully sometimes means choosing what matters most over what feels safest.' },
        { kind: 'reflection', id: '4m10-master', prompt: 'What desires does your body demand that your soul must master? How does faith help reason to rule?' },
      ],
    },
  ],
  bottomShare: {
    quote: 'Reason is stronger than the body, and no torture can overcome a soul devoted to God.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '4 Maccabees 10 · Study Guide',
  },
};
