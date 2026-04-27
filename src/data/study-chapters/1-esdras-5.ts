import { hp, hy, hg, t, plain, type RichChapterContent } from './types';
export const FIRST_ESDRAS_5: RichChapterContent = {
  bookSlug: '1-esdras',
  bookName: '1 Esdras',
  chapter: 5,
  intros: [
    'The decree is issued, and the exiles respond. Families gather. Possessions are collected. The journey back to Judea begins. Those who have never seen Jerusalem travel toward a homeland they know only through their parents&apos; stories. Those who remember the city approach it with joy and trepidation.',
    'Upon arrival, the work begins immediately. The foundation of the temple is laid. This should be pure celebration—the return, the renewal, the beginning of restoration. Yet it is complicated. The old men weep, remembering former glory. They know this temple will be smaller. The joy of return is shadowed by the loss of what was.',
  ],
  sections: [
    {
      ref: '1 Esdras 5:4–7',
      title: 'The List of Returnees',
      blocks: [
        { kind: 'scripture', chapter: 5, lines: [
          plain(4, 'And all they that were of the people of Israel, and of the priests, and of the Levites, and of the other that were separated unto them from the heathen of the land, came together.'),
          plain(7, 'And they offered unto the Lord on the altar sacrifices, since they had come back from exile, and also offered voluntary gifts of every kind.'),
        ] },
        { kind: 'commentary', id: 'esdras5-list', html: 'The genealogies matter. Each name represents a family, a lineage that survived exile. The list says: you are known. You are counted. You are part of God&apos;s people. In recording names, the text affirms that individual lives matter. Each returnee has a story, and each story is part of God&apos;s restoration.' },
        { kind: 'hebrew', id: 'esdras5-shem', title: 'Shem — Name', script: 'שֵׁם', translit: '<strong>Shem</strong> · name; reputation; identity', description: 'In Hebrew, a name is not a label; it is the expression of one&apos;s essence. To be named is to be known. To have your name recorded is to be affirmed as significant. God knows each by name.' },
        { kind: 'christ', id: 'esdras5-christ-known', title: 'Christ Connection — Known by Name', html: 'Jesus calls His sheep by name. To be known by Christ is the deepest security. He does not know us as masses or statistics. He knows each by name, each by heart. In His knowledge, we are affirmed, chosen, loved.' },
        { kind: 'carry', html: 'In a world of vast numbers, it is easy to feel forgotten. But God knows your name. He has counted you. Your return, restoration, your very existence matters to Him. You are not lost in the crowd.' },
        { kind: 'reflection', id: 'esdras5-named', prompt: 'What does it mean to you to be known by name? How does God&apos;s knowledge of you change how you live?' },
      ],
    },
    {
      ref: '1 Esdras 5:62–65',
      title: 'The Foundation Laid',
      blocks: [
        { kind: 'scripture', chapter: 5, lines: [
          plain(62, 'But many of the elder priests and elders were weeping with a loud voice, because they remembered the former house. But many shouted aloud for joy.'),
          plain(65, 'So that ye could not distinguish the noise of the pipes that were played aloud, and of the sound of the trumpets, and the noise of rejoicing of the people; for the sound was heard afar off.'),
        ] },
        { kind: 'commentary', id: 'esdras5-mixed', html: 'The scene is one of mingled joy and sorrow. The young rejoice—they have a temple now, something they may never have seen before. The old weep—they remember something greater that is gone forever. Both emotions are valid. Both voices are heard. The sound is so great it can be heard far away.' },
        { kind: 'greek', id: 'esdras5-phonē', title: 'Phonē — Sound; Voice', script: 'φωνή', translit: '<strong>Phonē</strong> · sound; voice; the cry of emotion', description: 'Phonē is not merely noise. It is voice—the expression of emotion and will. The sound of the people&apos;s joy and sorrow is so loud it cannot be distinguished. Both are lifted up to heaven.' },
        { kind: 'christ', id: 'esdras5-christ-both', title: 'Christ Connection — The One Who Weeps and Rejoices', html: 'Jesus weeps over Jerusalem even as He proclaims His kingdom. He is not above sorrow or beyond tears. He can hold both the joy of what is coming and the grief of what is lost. He validates both the old man&apos;s tears and the young man&apos;s shout.' },
        { kind: 'carry', html: 'Restoration is never simple. It brings both gain and loss. Do not deny your grief for what is gone. Do not diminish your joy for what is coming. Both are true. Both are valid. Both are heard by God.' },
        { kind: 'reflection', id: 'esdras5-both', prompt: 'What restoration have you experienced that brought both joy and sorrow? How did you honor both feelings?' },
      ],
    },
  ],
  bottomShare: {
    quote: 'But many of the elder priests and elders were weeping with a loud voice, because they remembered the former house. But many shouted aloud for joy. So that ye could not distinguish the noise.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Esdras 5 · Study Guide',
  },
  hasHebrew: true,
};
