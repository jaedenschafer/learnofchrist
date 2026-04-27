import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const FOURTH_MACCABEES_9: RichChapterContent = {
  bookSlug: '4-maccabees',
  bookName: '4 Maccabees',
  chapter: 9,
  intros: [
    'The first brother is taken to torture and death. He does not cry out. His suffering is witnessed by his six brothers, who watch and grow in resolve.',
    'Each death strengthens the next. Their martyrdom becomes not isolated acts but a single, unbroken testimony.',
  ],
  sections: [
    {
      ref: '4 Maccabees 9:1–18',
      title: 'The First Brother\'s Martyrdom',
      blocks: [
        { kind: 'scripture', chapter: 9, lines: [
          plain(1, 'And the first brother was brought forth unto the instruments. And they broke his hands and his feet.'),
          plain(7, 'Yet he did not cry out, but said unto his brothers, Be strong. The God of our fathers is with us.'),
          plain(15, 'And when he gave up his spirit, all who beheld him knew that he had not been conquered by pain, but had conquered pain itself.'),
        ] },
        { kind: 'commentary', id: 'mac4-9-first', html: 'The first to die sets the pattern. By his refusal to cry out, by his exhortation to his brothers, he becomes the guide for those who follow. His steadfastness is their anchor.' },
        { kind: 'hebrew', id: 'mac4-9-gibor', title: 'Gibor — Strong; Mighty One', script: 'גִּבּוֹר', translit: '<strong>Gibor</strong> · mighty one; warrior; one who is strong', description: 'Strength is not measured by unbroken bones but by unbroken faith. The brother is a gibor in the truest sense.' },
        { kind: 'christ', id: 'mac4-9-christ', title: 'Christ Connection — The First Martyr', html: 'Stephen, the first martyr of the church, dies praising God. His death emboldened the disciples and changed the persecution\'s meaning forever.' },
        { kind: 'carry', html: 'Who has gone before you, showing faith in suffering? How do their lives strengthen yours? Who will you strengthen for what comes after you?' },
        { kind: 'reflection', id: 'mac4-9-conquered', prompt: 'The brother "conquered pain itself." What does it mean to conquer suffering? Is this possible, or a delusion?' },
      ],
    },
    {
      ref: '4 Maccabees 9:19–29',
      title: 'The Witness of the Remaining',
      blocks: [
        { kind: 'scripture', chapter: 9, lines: [
          plain(19, 'And the six brothers who remained said one to another, Our brother did not yield. Shall we?'),
          plain(23, 'And they looked upon his broken body, and they were not moved to despair, but to greater resolve.'),
          plain(28, 'For they understood: he had not been defeated. He had passed through into victory.'),
        ] },
        { kind: 'commentary', id: 'mac4-9-witness', html: 'The remaining brothers do not look at the corpse and despair. They see a passing-through, a transformation. Death has lost its sting.' },
        { kind: 'greek', id: 'mac4-9-martyria', title: 'Martyria — Witness; Testimony; Martyrdom', script: 'μαρτυρία', translit: '<strong>Martyria</strong> · witness; testimony; the act of bearing witness unto death', description: 'The martyria is not mere death but the act of witnessing to truth with one\'s whole self—blood, suffering, final breath.' },
        { kind: 'christ', id: 'mac4-9-christ2', title: 'Christ Connection — Surrounded by a Cloud of Witnesses', html: 'Hebrews speaks of being "surrounded by a cloud of witnesses." The martyrs who died before us run the race with us, cheering us on.' },
        { kind: 'carry', html: 'Who is running the race with you? Whose testimony from beyond death gives you strength to continue?' },
        { kind: 'reflection', id: 'mac4-9-passed', prompt: 'The brothers saw their brother as having "passed through into victory." What does this tell us about how the faithful view death?' },
      ],
    },
  ],
  bottomShare: {
    quote: 'The first brother was brought to torture. He did not cry out, but said: "Be strong. The God of our fathers is with us." The remaining brothers, seeing his steadfastness, were moved to greater resolve.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '4 Maccabees 9 · Study Guide',
  },
};
