import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const SECOND_ESDRAS_16: RichChapterContent = {
  bookSlug: '2-esdras',
  bookName: '2 Esdras',
  chapter: 16,
  intros: [
    'Ezra\'s final words are woes and urgent summons. Calamities are coming. The wicked will fall. The faithful must stand firm.',
    'Yet in the darkness of judgment, one truth shines: those who love God, who keep His covenant, will be delivered. The woe is not for them.',
  ],
  sections: [
    {
      ref: '2 Esdras 16:1–39',
      title: 'Calamities Declared',
      blocks: [
        { kind: 'scripture', chapter: 16, lines: [
          plain(15, 'Now therefore take heed to yourselves, saith the Lord; for I will bring evils upon the world—sword, famine, and the multitude of the wicked.'),
          plain(18, 'And there shall not be one man left in the earth, whom God hath not tried.'),
          plain(20, 'The strong shall be weak, and they that have plenty shall have nothing.'),
        ] },
        { kind: 'commentary', id: 'esd16-calamities', html: 'The calamities are not arbitrary but consequences of a world that has turned from God. Famine, war, death—these are the harvest of godlessness. Yet God declares them beforehand, that the faithful might prepare their hearts.' },
        { kind: 'hebrew', id: 'esd16-tzarah', title: 'Tzarah — Distress; Calamity', script: 'צָרָה', translit: '<strong>Tzarah</strong> · distress; calamity; narrow place', description: 'Tzarah is the narrow place where faith is tested. In calamity, what you truly trust is revealed.' },
        { kind: 'christ', id: 'esd16-christ', title: 'Christ Connection — In the Narrow Place', html: 'Jesus walked the narrow way. In His Passion, all strength was tested. Yet He remained faithful. His calamity became salvation for all.' },
        { kind: 'carry', html: 'Calamities will come. What are you building now that will sustain you then? What foundation will hold?' },
        { kind: 'reflection', id: 'esd16-tested', prompt: 'Every man shall be tried. What trials are you facing now? What do they reveal about your faith?' },
      ],
    },
    {
      ref: '2 Esdras 16:40–78',
      title: 'Promise for the Faithful',
      blocks: [
        { kind: 'scripture', chapter: 16, lines: [
          plain(40, 'Therefore saith the Lord unto all that hear and understand these words of the Lord: Blessed be they which love his commandments.'),
          plain(72, 'Behold, I come soon, saith the Lord, and my mercies shall be made manifest, and my judgments shall be accomplished: saith the Lord, that hateth unrighteousness.'),
          plain(77, 'Blessed are they which have understanding in these days, and know the ways of the Lord.'),
        ] },
        { kind: 'commentary', id: 'esd16-blessed', html: 'Even as judgment is announced, blessing is promised to those who love God\'s commandments. In the calamities, they will be delivered. Their faith is not in vain.' },
        { kind: 'greek', id: 'esd16-makarios', title: 'Makarios — Blessed; Happy', script: 'μακάριος', translit: '<strong>Makarios</strong> · blessed; supremely happy; favored by God', description: 'Makarios is the deep happiness of those whom God favors—not the absence of sorrow, but the presence of God in all things.' },
        { kind: 'christ', id: 'esd16-christ2', title: 'Christ Connection — Blessed Are Those Who Follow', html: 'Jesus began the Sermon on the Mount with blessings: "Blessed are the poor in spirit, the merciful, the pure in heart." His kingdom belongs to the faithful.' },
        { kind: 'carry', html: 'You are called to understand these times. Will you love God\'s commandments? Will you trust Him even in calamity?' },
        { kind: 'reflection', id: 'esd16-ways', prompt: 'To know "the ways of the Lord"—what does this mean? How do you learn and recognize God\'s way in your life?' },
      ],
    },
  ],
  bottomShare: {
    quote: 'Blessed are they which love his commandments. Behold, I come soon, saith the Lord, and my mercies shall be made manifest. Blessed are they that have understanding.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Esdras 16 · Study Guide',
  },
};
