import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const THIRD_MACCABEES_2: RichChapterContent = {
  bookSlug: '3-maccabees',
  bookName: '3 Maccabees',
  chapter: 2,
  intros: [
    'Simon, the high priest, stands alone before God. Ptolemy, still paralyzed, has ordered the slaughter of all Jews in Egypt. Simon kneels to pray—the only weapon left.',
    'His prayer rises. God hears. Before Simon finishes, God speaks back. Ptolemy, struck dumb, is healed—but only to flee in terror.',
  ],
  sections: [
    {
      ref: '3 Maccabees 2:1–20',
      title: 'Simon\'s Prayer in the Temple',
      blocks: [
        { kind: 'scripture', chapter: 2, lines: [
          plain(1, 'Then Simon the high priest, lifting up his hands toward heaven, cried out unto the Lord, saying:'),
          plain(2, 'O God, merciful and compassionate, we have sinned. Yet Thou art our God. Remember us, O Lord, and be not wroth with us utterly.'),
          plain(11, 'Thou art He that didst save our fathers from the Red Sea when Pharaoh pursued them with chariots and with a multitude.'),
        ] },
        { kind: 'commentary', id: 'mac3-2-simon', html: 'Simon stands in the gap. He is not a mighty warrior but a priest. His strength is in intercession. He reminds God of His covenant, His past deliverances. The prayer is not demand but remembrance.' },
        { kind: 'hebrew', id: 'mac3-2-kohen', title: 'Kohen — Priest; One Who Stands Between', script: 'כֹּהֵן', translit: '<strong>Kohen</strong> · priest; mediator; one who stands in the gap', description: 'The kohen stands between God and people, carrying both heavenward and bringing heavenly mercy down. Simon embodies this calling.' },
        { kind: 'christ', id: 'mac3-2-christ', title: 'Christ Connection — Our High Priest', html: 'Jesus is the High Priest who stands in the gap forever, offering intercession for all who come to Him. His prayer in the garden becomes the salvation of the world.' },
        { kind: 'carry', html: 'You are called to stand in the gap. Not as a priest alone, but as a believer. Whose deliverance will you pray for?' },
        { kind: 'reflection', id: 'mac3-2-remember', prompt: 'Simon appeals to God\'s memory. What has God done for you that you should appeal to now?' },
      ],
    },
    {
      ref: '3 Maccabees 2:21–33',
      title: 'God\'s Answer and Ptolemy\'s Reversal',
      blocks: [
        { kind: 'scripture', chapter: 2, lines: [
          plain(21, 'And Simon had scarce finished his prayer when God appeared unto him, saying, I have heard thy prayer.'),
          plain(23, 'And Ptolemy was healed of his infirmity; but he was sore afraid, and fled away, saying, Great is the God of the Jews.'),
          plain(25, 'And he could not speak a word, saying nothing more unto the Jews, but went to his own place.'),
        ] },
        { kind: 'commentary', id: 'mac3-2-answer', html: 'God\'s answer comes not as thunder but as presence. Ptolemy is healed—a gesture of mercy even to the enemy. Yet he flees, silenced by awe. Sometimes conversion requires distance.' },
        { kind: 'greek', id: 'mac3-2-phonos', title: 'Phonos — Voice; Word; Speech', script: 'φωνή', translit: '<strong>Phonos</strong> · voice; sound; the ability to speak', description: 'Ptolemy is silenced—his voice is taken. Speech returns only with his departure. Silence before God is sometimes the only appropriate response.' },
        { kind: 'christ', id: 'mac3-2-christ2', title: 'Christ Connection — The Peace That Silences', html: 'Jesus speaks and brings peace. Sometimes that peace is the silence of standing in His presence, words made empty before His reality.' },
        { kind: 'carry', html: 'When have you been silenced by God? What did that silence teach you that words never could?' },
        { kind: 'reflection', id: 'mac3-2-fled', prompt: 'Ptolemy fled in fear, yet acknowledged God\'s greatness. Is fear always the beginning of wisdom? How does it lead to change?' },
      ],
    },
  ],
  bottomShare: {
    quote: 'Simon the high priest cried unto the Lord: "O God, merciful and compassionate, remember us and be not wroth with us utterly." And God answered and delivered them.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '3 Maccabees 2 · Study Guide',
  },
};
