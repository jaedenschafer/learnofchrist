import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const THIRD_MACCABEES_3: RichChapterContent = {
  bookSlug: '3-maccabees',
  bookName: '3 Maccabees',
  chapter: 3,
  intros: [
    'Ptolemy, now back in power but without God\'s blessing, turns his malice toward the Jewish people. He decrees that every Jew in Egypt be registered and enslaved.',
    'The registration becomes persecution. The enslaved people cry out, but Ptolemy\'s heart is hardened. The way forward appears closed.',
  ],
  sections: [
    {
      ref: '3 Maccabees 3:1–17',
      title: 'The Decree of Enslavement',
      blocks: [
        { kind: 'scripture', chapter: 3, lines: [
          plain(1, 'And Ptolemy said unto all his officers, Go forth and register all the Jews that are in my kingdom, that they may be made slaves.'),
          plain(12, 'And many of the Jews were gathered unto a certain place, and they were bound with bonds, and their substance was seized.'),
          plain(16, 'And the Jews cried out unto the Lord, saying, Deliver us from this great tribulation, for we have no helper but Thee.'),
        ] },
        { kind: 'commentary', id: 'mac3-3-decree', html: 'Registration is the first step toward control. The Jews are separated, counted, registered—the machinery of oppression turns. They lose property, freedom, identity. Yet their cry is to God alone.' },
        { kind: 'hebrew', id: 'mac3-3-tzaar', title: 'Tzaar — Suffering; Anguish', script: 'צַעַר', translit: '<strong>Tzaar</strong> · suffering; pain; tribulation', description: 'Tzaar is the cry from the depths. In it, God hears the voice of those with no other refuge.' },
        { kind: 'christ', id: 'mac3-3-christ', title: 'Christ Connection — The Suffering Servant', html: 'Jesus is registered and numbered among the transgressors. He suffers alongside the oppressed. His suffering becomes the basis of their liberation.' },
        { kind: 'carry', html: 'When have you been stripped of freedom? In that moment, who did you turn to? What does it mean to have "no helper but" God?' },
        { kind: 'reflection', id: 'mac3-3-registration', prompt: 'The oppressor registers and counts. What does it mean that even our numbering is known to God, and cared for?' },
      ],
    },
    {
      ref: '3 Maccabees 3:18–30',
      title: 'The Hardening of Ptolemy\'s Heart',
      blocks: [
        { kind: 'scripture', chapter: 3, lines: [
          plain(18, 'But Ptolemy\'s heart was hardened, and he would not hear their cry.'),
          plain(22, 'And he brought forth many camels, and he said, I will trample all the Jews under these beasts.'),
          plain(29, 'But the time of their deliverance had not yet come. The Lord looked upon them from heaven.'),
        ] },
        { kind: 'commentary', id: 'mac3-3-hardened', html: 'Like Pharaoh of old, Ptolemy\'s heart hardens. Each miracle, each prayer answered, drives him deeper into rebellion. Yet even in his hardness, God watches. The deliverance will come, but not yet.' },
        { kind: 'greek', id: 'mac3-3-sklerosis', title: 'Sklerosis — Hardening; Sclerosis', script: 'σκληρόσις', translit: '<strong>Sklerosis</strong> · hardening; rigidity; refusal', description: 'Sklerosis is the spiritual equivalent of physical hardening. The heart becomes rigid, resistant to God. Yet God permits it—for a time.' },
        { kind: 'christ', id: 'mac3-3-christ2', title: 'Christ Connection — The Patient God', html: 'Jesus is patient with hardened hearts. Yet He warns: there is a limit. Continued refusal to believe is itself the judgment.' },
        { kind: 'carry', html: 'Is your heart hardening somewhere? What truth are you resisting? What would it take to soften again?' },
        { kind: 'reflection', id: 'mac3-3-yet', prompt: 'In the darkness, "the Lord looked upon them from heaven." What does it mean that He sees, even when help seems far away?' },
      ],
    },
  ],
  bottomShare: {
    quote: 'Ptolemy decreed: "Register all the Jews in my kingdom, that they may be made slaves." The people cried out: "Deliver us, for we have no helper but Thee." But the Lord looked upon them from heaven.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '3 Maccabees 3 · Study Guide',
  },
};
