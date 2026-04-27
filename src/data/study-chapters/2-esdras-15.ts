import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const SECOND_ESDRAS_15: RichChapterContent = {
  bookSlug: '2-esdras',
  bookName: '2 Esdras',
  chapter: 15,
  intros: [
    'Ezra speaks woes against the nations—Egypt, Assyria, Babylon. Each has grown drunk on power, forgetting the God who gives breath and life.',
    'Yet even in judgment, the voice is not glee but sorrow. These woes are urgent calls to turn back before the edge is reached.',
  ],
  sections: [
    {
      ref: '2 Esdras 15:1–19',
      title: 'Woes Upon the Proud',
      blocks: [
        { kind: 'scripture', chapter: 15, lines: [
          plain(8, 'Woe be unto thee, Babylon! thou art like a woman with child, which when she feeleth the pangs to come upon her, she crieth out upon a sudden.'),
          plain(10, 'For as a woman with child in the ninth month bringeth forth not by time, so shall the plagues come upon the earth out of a sudden, and the land shall travail, and all the inhabitants thereof shall mourn.'),
          plain(12, 'Hear therefore, O Babylon, and mourn; for as a woman doth bring forth the child which she travaileth withal, so shall the destruction come upon thee.'),
        ] },
        { kind: 'commentary', id: 'esd15-babylon', html: 'Babylon, Egypt, Assyria—all symbols of nations that trust in their own power. The woe is not arbitrary cruelty but consequence. Those who forget God cannot escape His judgment.' },
        { kind: 'hebrew', id: 'esd15-din', title: 'Din — Judgment; The Law', script: 'דִּין', translit: '<strong>Din</strong> · judgment; the law of justice', description: 'God\'s din is not vindictive but righteous. It flows from His nature. Nations reap what they have sown.' },
        { kind: 'christ', id: 'esd15-christ', title: 'Christ Connection — Weeping Over Nations', html: 'Jesus stands outside Jerusalem and weeps: "O that thou hadst known." His woes are not rejoicing in destruction but urgent calls to repentance.' },
        { kind: 'carry', html: 'Power built without God crumbles. What are you building your life upon? On what foundation can you truly stand?' },
        { kind: 'reflection', id: 'esd15-pangs', prompt: 'The woes come "upon a sudden." Why does God sometimes let nations (or individuals) reach the edge of disaster? What makes turning back so hard?' },
      ],
    },
    {
      ref: '2 Esdras 15:20–63',
      title: 'The Final Call',
      blocks: [
        { kind: 'scripture', chapter: 15, lines: [
          plain(26, 'How weak are thy hands, and how feeble thy fingers! thou hast not power to resist my word.'),
          plain(32, 'Behold, I shall bring upon thee strife, fear, and the sword.'),
          plain(46, 'Therefore I say unto thee, O Babylon, desolate thou thyself; that thou mayest be saved in the time of thy visitation.'),
        ] },
        { kind: 'commentary', id: 'esd15-desolate', html: 'Even in judgment, there is a path: desolation now, or destruction later. The woe is a final mercy—the offer to turn before it\'s too late.' },
        { kind: 'greek', id: 'esd15-metanoia', title: 'Metanoia — Repentance; Turning', script: 'μετάνοια', translit: '<strong>Metanoia</strong> · repentance; turning of mind and life', description: 'Metanoia is always available—the invitation to turn before judgment falls. God offers the way out even to the most stubborn.' },
        { kind: 'christ', id: 'esd15-christ2', title: 'Christ Connection — The Last Call', html: 'Jesus stands at the edge of nations and says: "Yet there is a way." His judgment is always paired with an invitation to turn.' },
        { kind: 'carry', html: 'You are hearing God\'s voice now. Will you turn? Or will you wait until the edge is too near?' },
        { kind: 'reflection', id: 'esd15-visitation', prompt: 'What does it mean that there is &quot;a time of thy visitation&quot;—a moment when God draws near, offering salvation before judgment?' },
      ],
    },
  ],
  bottomShare: {
    quote: 'Behold, I shall bring upon thee strife, fear, and the sword. Therefore, O Babylon, desolate thyself, that thou mayest be saved in the time of thy visitation.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Esdras 15 · Study Guide',
  },
};
