import { hp, hy, hg, t, plain, type RichChapterContent } from './types';
export const FIRST_ESDRAS_1: RichChapterContent = {
  bookSlug: '1-esdras',
  bookName: '1 Esdras',
  chapter: 1,
  intros: [
    'Josiah inherits a kingdom where the law of God has been neglected. He undertakes a great reformation, culminating in a Passover celebration of extraordinary magnificence. He spares no expense, gathers the people, seeks to bind them to their covenant with God. For a moment, it seems the nation might be renewed.',
    'But one military campaign changes everything. Josiah falls in battle, and with him falls the spiritual vitality of Judah. His successors lack his devotion. Kings choose compromise over conviction. Within decades, Jerusalem is besieged, the temple violated, and the exiles marched away to Babylon. The great king&apos;s revival becomes a memory of what might have been.',
  ],
  sections: [
    {
      ref: '1 Esdras 1:1–13',
      title: 'The Great Passover',
      blocks: [
        { kind: 'scripture', chapter: 1, lines: [
          plain(1, 'And Josias held the feast of the passover in Jerusalem unto his Lord: and offered the passover, being an hundred and eighty thousand, and four thousand sheep.'),
          plain(2, 'And they feasted and made merry, and the Levites and the priests gave praise unto the Lord day by day, singing loud unto the Lord.'),
          plain(13, 'So the things that were spoken concerning Israel, Judas, and Jerusalem, were fulfilled in the days of Josias.'),
        ] },
        { kind: 'commentary', id: 'esdras1-passover', html: 'The Passover was the commemoration of God&apos;s power—the night when He freed His people from slavery. Josiah&apos;s feast is an act of memory and faith. By keeping the feast with such devotion, he says: "We remember what God did. We trust Him still." The scale shows Josiah&apos;s conviction. He holds nothing back.' },
        { kind: 'hebrew', id: 'esdras1-pesach', title: 'Pesach — Passover', script: 'פֶּסַח', translit: '<strong>Pesach</strong> · passover; the feast of deliverance', description: 'Pesach is not merely a historical remembrance. Each Passover renewal calls the people to remember their identity as the liberated ones. To keep Pesach faithfully is to declare: we are God&apos;s people, redeemed and chosen.' },
        { kind: 'christ', id: 'esdras1-christ-feast', title: 'Christ Connection — The Passover Lamb', html: 'Josiah&apos;s Passover looks forward to the gospel. Jesus is the Passover Lamb—the sacrifice that delivers not merely from Egypt but from sin itself. In His blood is the covering for all who believe.' },
        { kind: 'carry', html: 'Josiah knew something the later kings forgot: memory is vital. To remember God&apos;s past faithfulness is to anchor faith for the future. What acts of God are you remembering? What feast of remembrance do you keep?' },
        { kind: 'reflection', id: 'esdras1-remember', prompt: 'What has God done in your life that is worth remembering? How does remembrance strengthen your faith?' },
      ],
    },
    {
      ref: '1 Esdras 1:35–55',
      title: 'The Kingdom Falls',
      blocks: [
        { kind: 'scripture', chapter: 1, lines: [
          plain(35, 'And Josias died, and all Judea mourned for Josias, and Jeremy the prophet bewailed Josias with a lamentation.'),
          plain(47, 'And after Josias the people took Joachaz his son, and made him king instead of his father: but he reigned only three months and ten days.'),
          plain(55, 'And at last Nabuchodonosor king of Babylon carried away captive the remnant that were left of the people.'),
        ] },
        { kind: 'commentary', id: 'esdras1-fall', html: 'The narrative moves swiftly. After Josiah&apos;s death, the spiritual renewal dies with him. His successors lack his conviction. Some are appointed by foreign powers. Some turn from the law. Within decades, the temple—where Josiah celebrated his Passover—is razed. The people are exiled. One king&apos;s vision cannot sustain a nation unless the people themselves choose fidelity.' },
        { kind: 'greek', id: 'esdras1-genea', title: 'Genea — Generation', script: 'γενεά', translit: '<strong>Genea</strong> · generation; race; offspring', description: 'The fall is swift because the next generation does not share Josiah&apos;s commitment. One person&apos;s revival cannot endure unless it takes root in the hearts of those who follow. This is the challenge of faith: to transmit it, to let others own it, not merely inherit it.' },
        { kind: 'christ', id: 'esdras1-christ-fidelity', title: 'Christ Connection — The Faithful One', html: 'Jesus is the faithful King who does not fail. His kingdom will not fall. Where human kings depend on the fidelity of their successors, Christ&apos;s kingdom rests on His own eternal fidelity. He cannot deny Himself. His reign endures forever.' },
        { kind: 'carry', html: 'Josiah learned too late that one person&apos;s devotion cannot substitute for a people&apos;s choice. Each generation must choose God anew. Are you choosing Him? Are you passing on not just knowledge of God but passion for Him?' },
        { kind: 'reflection', id: 'esdras1-choice', prompt: 'What legacy of faith—or faithlessness—have you received? What will you pass on?' },
      ],
    },
  ],
  bottomShare: {
    quote: 'And Josias held the feast of the passover in Jerusalem unto his Lord: and offered the passover. And they feasted and made merry, and the Levites and the priests gave praise unto the Lord day by day.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Esdras 1 · Study Guide',
  },
  hasHebrew: true,
};
