import { hp, hy, hg, t, plain, type RichChapterContent } from './types';
export const FOURTH_MACCABEES_17: RichChapterContent = {
  bookSlug: '4-maccabees',
  bookName: '4 Maccabees',
  chapter: 17,
  intros: [
    'All have now fallen. Seven sons and their mother rest in a shared tomb. Over the grave stands an inscription. The text makes a stunning claim: these deaths are not tragedy but redemption—a ransom for the nation.',
    'In 4 Maccabees 17, the author reveals the true meaning of martyrdom: their blood is the price of Israel&apos;s liberation.',
  ],
  sections: [
    {
      ref: '4 Maccabees 17:1–12',
      title: 'The Tomb and Its Inscription',
      blocks: [
        { kind: 'scripture', chapter: 17, lines: [
          plain(1, 'And they buried the mother and her seven sons together in one tomb. Upon the stone was written:'),
          plain(4, '"Here lie those who died for the law of our fathers. By their death the nation is redeemed. Their blood is ransom for Israel."'),
          plain(8, 'Antiochus saw the tomb and was overcome. He understood that he had not conquered but had been conquered by the faith he could not kill.'),
        ] },
        { kind: 'commentary', id: '4m17-ransom', html: 'The inscription transforms the meaning of death. These are not victims of tyranny but sacrifices. Their deaths are a price paid. The blood they shed becomes the redemption of a people. This is theology of atonement—not yet Christian, but pointing toward it.' },
        { kind: 'greek', id: '4m17-antilytron', title: 'Antilytron — Ransom; Price of Redemption', script: 'ἀντίλυτρον', translit: '<strong>Antilytron</strong> · ransom; price of redemption', description: 'The ransom is the price paid to secure liberation. The brothers and mother have paid the price in blood; Israel is ransomed by their sacrifice.' },
        { kind: 'christ', id: '4m17-christ', title: 'Christ Connection — The Ransom for Many', html: 'Jesus said: "The Son of Man came... to give his life as a ransom for many." The brothers and mother point forward to the One whose blood is the ransom for the world.' },
        { kind: 'carry', html: 'The martyrs teach us that our suffering is not meaningless. When offered to God in faith, it becomes redemptive—it purifies, restores, and reconciles.' },
        { kind: 'reflection', id: '4m17-price', prompt: 'What price have you paid for your faith? What might it mean for your sacrifices to become ransom for others?' },
      ],
    },
    {
      ref: '4 Maccabees 17:13–26',
      title: 'Blood as Purification',
      blocks: [
        { kind: 'scripture', chapter: 17, lines: [
          plain(13, 'The blood of the martyrs cried out. It was not the cry of accusation but of intercession. They did not cry for vengeance but for the purification of Israel.'),
          plain(17, 'And the blood cleansed. Where before was defilement from idolatry, now was atonement. The nation was washed clean in the blood of the faithful.'),
          plain(23, 'This blood stands eternal—a ransom paid once, forever efficacious. The covenant is sealed, and Israel is redeemed through the faithfulness of the few.'),
        ] },
        { kind: 'commentary', id: '4m17-blood', html: 'The text uses the language of the Temple and sacrifice. The blood of animals once cleansed; now the blood of the faithful purifies. There is a hint here of a greater sacrifice to come—one perfect and eternal.' },
        { kind: 'hebrew', id: '4m17-kapparah', title: 'Kapparah — Atonement; Covering', script: 'כַּפָּרָה', translit: '<strong>Kapparah</strong> · atonement; covering; reconciliation', description: 'Hebrew atonement is the covering or restoration of relationship between God and people. The martyrs effect atonement through their sacrifice.' },
        { kind: 'christ', id: '4m17-christ2', title: 'Christ Connection — Once for All', html: '1 Peter: "Christ... suffered once for sins, the righteous for the unrighteous." The martyrs foreshadow the One whose blood is the eternal atonement.' },
        { kind: 'carry', html: 'The martyrs remind us that we are part of something larger than ourselves. Our faithfulness or our witness may become the ransom that redeems others. We are not isolated but are woven into God&apos;s redemptive story.' },
        { kind: 'reflection', id: '4m17-redeemed', prompt: 'How have you been redeemed by the faithfulness of those who came before you? How might your own faithfulness redeem others?' },
      ],
    },
  ],
  bottomShare: {
    quote: 'Here lie those whose blood is ransom for Israel. By their death the nation is redeemed.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '4 Maccabees 17 · Study Guide',
  },
};
