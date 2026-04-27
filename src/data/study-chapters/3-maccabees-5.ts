import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const THIRD_MACCABEES_5: RichChapterContent = {
  bookSlug: '3-maccabees',
  bookName: '3 Maccabees',
  chapter: 5,
  intros: [
    'Ptolemy orders the execution to begin. Elephants are brought forth, maddened and armed with iron spikes. They are to trample the Jews in the arena.',
    'But something extraordinary happens. God intervenes. The elephants turn—not on the Jews, but on Ptolemy\'s own guards. The oppressor\'s own instrument becomes his judgment.',
  ],
  sections: [
    {
      ref: '3 Maccabees 5:1–18',
      title: 'The Maddened Elephants',
      blocks: [
        { kind: 'scripture', chapter: 5, lines: [
          plain(2, 'And Ptolemy brought forth great elephants, made terrible with iron, and he cried unto the keepers, saying, Drive them upon the Jews, that they may be trampled.'),
          plain(8, 'And the Jews cried out unto the Lord with a great cry, knowing that they must die.'),
          plain(12, 'And the elephants did not go forward to the Jews, but turned upon them that drove them, trampling upon the king\'s guards.'),
        ] },
        { kind: 'commentary', id: 'mac3-5-elephants', html: 'The elephants—symbols of unstoppable force—will not move against the faithful. Instead, they turn on their handlers. God\'s protection is not passive but active. The machine of death reverses.' },
        { kind: 'hebrew', id: 'mac3-5-pittom', title: 'Pittom — Suddenly; At That Moment', script: 'פִּתְאוֹם', translit: '<strong>Pittom</strong> · suddenly; at that very moment', description: 'God\'s interventions often come "suddenly"—not after long calculation, but in the moment of greatest need.' },
        { kind: 'christ', id: 'mac3-5-christ', title: 'Christ Connection — The Stone That Crushes the Image', html: 'Daniel saw a stone cut out without hands that smashed the oppressor\'s image. Jesus is that stone—the force that turns all earthly power to dust.' },
        { kind: 'carry', html: 'What impossible situation are you facing? What if God\'s protection is not what you expect, but something far greater?' },
        { kind: 'reflection', id: 'mac3-5-turn', prompt: 'The elephants turned. When have you experienced a sudden reversal? What did it teach you about God\'s power?' },
      ],
    },
    {
      ref: '3 Maccabees 5:19–51',
      title: 'Deliverance Revealed',
      blocks: [
        { kind: 'scripture', chapter: 5, lines: [
          plain(19, 'And all the Jews saw that the Lord had delivered them, and they fell upon their faces, and worshipped God.'),
          plain(38, 'And Ptolemy, seeing this great sign, was amazed, and he knew that the God of the Jews was mighty beyond all gods.'),
          plain(42, 'And he made a decree, saying, Let all the Jews in my kingdom go free, and restore to them their goods.'),
        ] },
        { kind: 'commentary', id: 'mac3-5-deliverance', html: 'The Jews\' prayers are answered. They are freed. Ptolemy, the oppressor, finally acknowledges the truth. Yet his acknowledgment comes too late to restore what was lost. God\'s judgment and mercy move on their own timeline.' },
        { kind: 'greek', id: 'mac3-5-semeion', title: 'Semeion — Sign; Wonder', script: 'σημεῖον', translit: '<strong>Semeion</strong> · sign; wonder; miraculous token', description: 'A semeion points beyond itself to God\'s reality. The turning of the elephants is a sign that God is present and mighty.' },
        { kind: 'christ', id: 'mac3-5-christ2', title: 'Christ Connection — Signs Point to God', html: 'Jesus\' miracles are semeions—signs that point to the kingdom of God and the Father\'s power working through Him.' },
        { kind: 'carry', html: 'You have seen signs of God\'s power. How do they change you? How do they shape your faith in future trials?' },
        { kind: 'reflection', id: 'mac3-5-decree', prompt: 'Ptolemy changed his decree. What would it take for your oppressors to set you free? What if they never do?' },
      ],
    },
  ],
  bottomShare: {
    quote: 'Ptolemy brought forth great elephants to trample the Jews. But the elephants turned upon the king\'s guards, and Ptolemy saw that the God of the Jews was mighty beyond all gods.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '3 Maccabees 5 · Study Guide',
  },
};
