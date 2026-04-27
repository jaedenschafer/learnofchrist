import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const THIRD_MACCABEES_4: RichChapterContent = {
  bookSlug: '3-maccabees',
  bookName: '3 Maccabees',
  chapter: 4,
  intros: [
    'The Jews are gathered at the hippodrome—a vast arena designed for slaughter. Thousands of men, women, and children stand there, surrounded by guards and armed soldiers. Death seems certain.',
    'Yet in this darkness, they do not despair. They pray. They sing. They comfort one another. Their faith becomes their strength.',
  ],
  sections: [
    {
      ref: '3 Maccabees 4:1–11',
      title: 'Gathered for Destruction',
      blocks: [
        { kind: 'scripture', chapter: 4, lines: [
          plain(1, 'Then all the Jews were gathered together into the hippodrome, men and women, old and young, little children with their parents.'),
          plain(8, 'And the soldiers surrounded them, and Ptolemy sat upon his throne, looking upon them, saying, This day I shall make an end of all the Jews that are in my realm.'),
          plain(10, 'But the Jews began to sing and to pray, and to call upon the Lord, saying, Save us, O God.'),
        ] },
        { kind: 'commentary', id: 'mac3-4-hippodrome', html: 'The hippodrome is a symbol of empire—built for spectacle, for the display of power over the helpless. Yet here, in the moment of apparent defeat, the Jews do not crumble. Prayer becomes their defiance.' },
        { kind: 'hebrew', id: 'mac3-4-zemirot', title: 'Zemirot — Songs; Praises', script: 'זְמִירוֹת', translit: '<strong>Zemirot</strong> · songs; praises; melodies of faith', description: 'Song in the darkness is the victory of spirit over circumstance. The Jews sing when death surrounds them—their song is their truth.' },
        { kind: 'christ', id: 'mac3-4-christ', title: 'Christ Connection — Song at the Edge', html: 'In the garden, Jesus prays. On the way to the cross, He sings with His disciples. Song is the language of faith—not denial of suffering, but transcendence of it.' },
        { kind: 'carry', html: 'When surrounded by darkness, will you sing? What songs of faith do you know? Who can you comfort with your voice?' },
        { kind: 'reflection', id: 'mac3-4-sing', prompt: 'The Jews sang even as death approached. What does this tell you about the power of faith? About the difference between hope and circumstance?' },
      ],
    },
    {
      ref: '3 Maccabees 4:12–22',
      title: 'Courage in the Darkness',
      blocks: [
        { kind: 'scripture', chapter: 4, lines: [
          plain(12, 'And the people comforted one another, saying, Be strong, and trust in the Lord.'),
          plain(15, 'And the mothers embraced their children, and they wept, but they did not despair.'),
          plain(20, 'For they knew that the Lord was with them in that place, and would not forsake them, even unto death.'),
        ] },
        { kind: 'commentary', id: 'mac3-4-courage', html: 'The Jews do not deny the sorrow. Mothers weep over children. But weeping is not the final word. Comfort, courage, faith—these bind them together. They face death as a community, not alone.' },
        { kind: 'greek', id: 'mac3-4-parresia', title: 'Parresia — Bold Confidence; Courage', script: 'παρρησία', translit: '<strong>Parresia</strong> · boldness; confidence; freedom of speech', description: 'Parresia in the face of death is faith made visible. It is not bravado but the quiet confidence that God is present.' },
        { kind: 'christ', id: 'mac3-4-christ2', title: 'Christ Connection — Do Not Fear, I Am With You', html: 'Jesus\' last words to His disciples are: "Lo, I am with you even unto the end of the world." Their courage comes from His presence.' },
        { kind: 'carry', html: 'Who do you need to comfort today? What courage can you offer? What courage do you need to receive?' },
        { kind: 'reflection', id: 'mac3-4-presence', prompt: 'The Jews knew "the Lord was with them." How do you know this presence? How do you remind yourself when fear rises?' },
      ],
    },
  ],
  bottomShare: {
    quote: 'The Jews were gathered in the hippodrome. They began to sing and to pray: "Save us, O God." They comforted one another: "Be strong, and trust in the Lord, for He will not forsake us."',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '3 Maccabees 4 · Study Guide',
  },
};
