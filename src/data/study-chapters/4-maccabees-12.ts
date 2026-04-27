import { hp, hy, hg, t, plain, type RichChapterContent } from './types';
export const FOURTH_MACCABEES_12: RichChapterContent = {
  bookSlug: '4-maccabees',
  bookName: '4 Maccabees',
  chapter: 12,
  intros: [
    'The fourth and fifth brothers come to the wheel. They stride forward with courage, encouraging each other. Brotherly love becomes their shield; no torture can separate what covenant has bound together.',
    'In 4 Maccabees 12, the narrative shifts: two brothers face death together, and their bond is unbreakable. The tyrant discovers that he cannot touch what exists between them.',
  ],
  sections: [
    {
      ref: '4 Maccabees 12:1–13',
      title: 'The Fourth and Fifth Brothers',
      blocks: [
        { kind: 'scripture', chapter: 12, lines: [
          plain(1, 'The fourth brother said to his companion: It is good that we depart together from this world. When we stand before our God, He shall see our bond unbroken.'),
          plain(5, 'The fifth brother, embracing his companion, said: Fear not. We shall not taste the bread of death but the feast of eternal life.'),
          plain(9, 'And the two brothers were stretched upon the racks together, yet their speech was not divided but joined. Each word of one brother sustained the other.'),
        ] },
        { kind: 'commentary', id: '4m12-brothers', html: 'The brothers do not face death as individuals but as a unit. Their encouragement is not distraction from pain but deeper root. They remind each other of what outlasts the body: the bond of covenant, the hope of God&apos;s presence beyond death.' },
        { kind: 'greek', id: '4m12-philadelphos', title: 'Philadelphos — Brotherly Love', script: 'φιλάδελφος', translit: '<strong>Philadelphos</strong> · brotherly; love of brethren', description: 'Greek philadelphos is the love that binds siblings not by blood alone but by shared purpose, faith, and sacrifice. It is stronger than death.' },
        { kind: 'christ', id: '4m12-christ', title: 'Christ Connection — Greater Love Hath No One', html: 'The brothers&apos; bond is unbreakable in death. Jesus said: "Greater love has no one than this, that he lay down his life for his friends." The cross reveals the deepest brotherly bond.' },
        { kind: 'carry', html: 'The fourth and fifth brothers teach us that we do not stand alone. When we are rooted in community bound by faith, no trial can isolate us from the strength of the whole.' },
        { kind: 'reflection', id: '4m12-bond', prompt: 'Who stands with you in your faith? What unbreakable bonds sustain you when trials come?' },
      ],
    },
    {
      ref: '4 Maccabees 12:14–26',
      title: 'Courage Through Community',
      blocks: [
        { kind: 'scripture', chapter: 12, lines: [
          plain(14, 'The tyrant observed that the brothers drew strength from their unity. He sought to separate them, saying: Betray your brother and I will grant you mercy.'),
          plain(18, 'But the fourth brother refused: What torment could be worse than betrayal? Even the fire of hell is less than the fire of apostasy.'),
          plain(22, 'And the fifth brother, seeing his companion unmoved, resolved: Together we entered this trial. Together we shall leave it. Our love shall not bow.'),
        ] },
        { kind: 'commentary', id: '4m12-separation', html: 'The tyrant tries the oldest strategy: divide and conquer. Yet the brothers see through it. Betrayal would be worse than death because it would destroy the very thing that makes their sacrifice meaningful: their bond, their witness, their shared faith.' },
        { kind: 'hebrew', id: '4m12-ahava', title: 'Ahava — Love; Covenant Bond', script: 'אַהֲבָה', translit: '<strong>Ahava</strong> · love; covenantal bond', description: 'Hebrew ahava is not sentiment but bond—the pledge that binds people in covenant to one another and to God. The brothers&apos; ahava is the deepest tie.' },
        { kind: 'christ', id: '4m12-christ2', title: 'Christ Connection — No One Left Behind', html: 'The brothers will not betray each other for safety. Jesus said to Peter: "Do you love me more than these?" and called him to follow unto death. Loyalty to Christ means loyalty to His body, the community of faith.' },
        { kind: 'carry', html: 'The fourth and fifth brothers show us that community is not a luxury but a necessity. The bonds we forge in faith are what sustain us when everything else fails.' },
        { kind: 'reflection', id: '4m12-shared', prompt: 'What would it mean to enter a trial "together" rather than alone? Who has stood with you, and for whom have you stood?' },
      ],
    },
  ],
  bottomShare: {
    quote: 'It is good that we depart together from this world. Our love shall not bow.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '4 Maccabees 12 · Study Guide',
  },
};
