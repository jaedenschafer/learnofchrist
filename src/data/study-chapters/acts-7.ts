import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Acts 7 — Stephen's Sermon and Stoning
 */
export const ACTS_7: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 7,

  intros: [
    'Stephen is arrested and brought before the council. But his words are not a defense—they are a prophet&apos;s rebuke. He traces Israel&apos;s history, revealing a pattern of resistance to God&apos;s messengers. The council itself is resisting the Holy Spirit. His courage provokes fury. They drag him outside Jerusalem and stone him while a young man named Saul watches and approves.',
  ],

  sections: [
    {
      ref: 'Acts 7:1–53',
      title: 'Stephen&apos;s Sermon',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(37, 'This is that Moses which said unto the children of Israel, A prophet shall the Lord your God raise up unto you of your brethren, like unto me; him shall ye hear.'),
            plain(51, 'Ye stiffnecked and uncircumcised in heart and ears, ye do always resist the Holy Ghost: as your fathers did, so do ye.'),
            plain(55, 'But he, being full of the Holy Ghost, looked up stedfastly into heaven, and saw the glory of God, and Jesus standing on the right hand of God,'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts7-history',
          html: 'Stephen recites Israel&apos;s history to reveal a pattern: prophets sent, resistance given, rejection faced. He shows his accusers this rejection is not new but fulfills the pattern of the covenant people.',
        },
        {
          kind: 'greek',
          id: 'acts7-stiffnecked',
          title: 'Sklerotrachelos — Stiff-Necked',
          script: 'σκληροτράχηλος',
          translit: '<strong>Sklerotrachelos</strong> · stiff-necked; stubborn',
          description: 'A neck so stiff it cannot bow, turn, or yield. To resist the Holy Spirit is to be locked in place, unable to hear or change. This resistance hardens over time into habitual refusal.',
        },
        {
          kind: 'christ',
          id: 'acts7-christ-standing',
          title: 'Christ Connection — The Standing Christ',
          html: 'Jesus stands at God&apos;s right hand—not sitting in distant triumph, but rising to receive His witness. The posture speaks: Jesus stands for Stephen, honoring this faithful martyr even as the world casts him out.',
        },
        {
          kind: 'carry',
          html: 'Stephen dies speaking words the council rejects. But in death he is not alone. His vision reveals the opened heavens and Jesus Himself watching. The world may close in, but the heavens remain open.',
        },
        {
          kind: 'reflection',
          id: 'acts7-witness-cost',
          prompt: 'What does it cost to speak truth others do not wish to hear?',
        },
      ],
    },

    {
      ref: 'Acts 7:54–60',
      title: 'Stephen&apos;s Martyrdom',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(57, 'Then they cast him out of the city, and stoned him: and the witnesses laid down their clothes at a young man&apos;s feet, whose name was Saul.'),
            plain(59, 'And they stoned Stephen, calling upon God, and saying, Lord Jesus, receive my spirit.'),
            plain(60, 'And he kneeled down, and cried with a loud voice, Lord, lay not this sin to their charge. And when he had said this, he fell asleep.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts7-stoning',
          html: 'Stephen is dragged outside the city and stoned. A young man named Saul stands guard over the witnesses&apos; cloaks. In this moment, a future apostle stands over a martyr he does not yet understand. The irony is profound; the grace is deeper still.',
        },
        {
          kind: 'christ',
          id: 'acts7-christ-martyr',
          title: 'Christ Connection — The Martyr&apos;s Mercy',
          html: 'Stephen echoes Jesus on the cross: forgive them. He becomes the first Christian martyr (martyr means witness), his death modeled on Christ&apos;s, complete with forgiveness extended to his killers. In Christ, even death becomes an act of grace.',
        },
        {
          kind: 'carry',
          html: 'Stephen falls asleep—not because death is nothing, but because it is not the end. The one who sleeps will wake. Stephen&apos;s story continues. So does Saul&apos;s.',
        },
        {
          kind: 'reflection',
          id: 'acts7-forgiveness-reflection',
          prompt: 'How does Stephen&apos;s forgiveness challenge or comfort you?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Lord, lay not this sin to their charge.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 7 · Study Guide',
  },

  hasHebrew: false,
};
