import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

export const ACTS_18: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 18,

  intros: [
    'Paul comes to Corinth, where he meets Priscilla and Aquila, tentmakers like himself. He works with them and preaches in the synagogue on every Sabbath. When the Jews oppose him, he turns to the Gentiles. A church is established in Corinth. Apollos, an eloquent man and mighty in the scriptures, comes to Ephesus. Priscilla and Aquila help him understand the way of God more perfectly.',
  ],

  sections: [
    {
      ref: 'Acts 18:1–11',
      title: 'Paul in Corinth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(4, 'And he reasoned in the synagogue every sabbath, and persuaded the Jews and the Greeks.'),
            plain(9, 'Then spake the Lord to Paul in the night by a vision, Be not afraid, but speak, and hold not thy peace:'),
            plain(10, 'For I am with thee, and no man shall set on thee to hurt thee: for I have much people in this city.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts18-corinth',
          html: 'Paul reasons with Jews and Greeks in the synagogue every Sabbath. He works as a tentmaker to support himself. But opposition comes. The Lord reassures him: "Be not afraid... I am with thee... for I have much people in this city." God has a people in Corinth.',
        },
        {
          kind: 'greek',
          id: 'acts18-dialegomai',
          title: 'Dialegomai — To Reason',
          script: 'διαλέγομαι',
          translit: '<strong>Dialegomai</strong> · to reason; to discuss; to persuade through dialogue',
          description: 'Paul&apos;s method is reason and dialogue. He does not merely proclaim but engages his listeners in discussion.',
        },
        {
          kind: 'christ',
          id: 'acts18-christ-presence',
          title: 'Christ Connection — The Lord&apos;s Presence',
          html: 'Jesus promised His disciples: "Lo, I am with you alway." Paul experiences that promise in Corinth. The risen Christ speaks to him in a vision, assuring him of divine presence and protection.',
        },
        {
          kind: 'carry',
          html: 'Paul remains in Corinth for eighteen months, teaching the word of God. A community of faith grows. The Lord builds His church.',
        },
        {
          kind: 'reflection',
          id: 'acts18-presence-reflect',
          prompt: 'How do you experience the presence of Christ in your life?',
        },
      ],
    },

    {
      ref: 'Acts 18:24–28',
      title: 'Apollos and Priscilla',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(24, 'And a certain Jew named Apollos, born at Alexandria, an eloquent man, and mighty in the scriptures, came to Ephesus.'),
            plain(26, 'And he began to speak boldly in the synagogue: whom when Aquila and Priscilla had heard, they took him unto them, and expounded unto him the way of God more perfectly.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts18-apollos',
          html: 'Apollos is eloquent and knowledgeable in Scripture, but he knows only the baptism of John. Priscilla and Aquila recognize his potential and teach him more fully. He becomes a powerful preacher of Christ.',
        },
        {
          kind: 'commentary',
          id: 'acts18-priscilla',
          html: 'Priscilla, a woman, plays a vital role in completing Apollos&apos; understanding. She and Aquila work alongside Paul, establish a church in their home, and become teachers of the faith. The gospel includes all.',
        },
        {
          kind: 'greek',
          id: 'acts18-akribesteron',
          title: 'Akribesteron — More Perfectly',
          script: 'ἀκριβέστερον',
          translit: '<strong>Akribesteron</strong> · more exactly; more carefully; more perfectly',
          description: 'Knowledge of Christ grows through teaching and learning. Apollos&apos; faith is deepened and made complete.',
        },
        {
          kind: 'christ',
          id: 'acts18-christ-taught',
          title: 'Christ Connection — Known Through Teaching',
          html: 'Jesus sent disciples to teach all nations. Priscilla and Aquila continue that work, helping Apollos understand and preach Christ more fully.',
        },
        {
          kind: 'carry',
          html: 'Apollos goes to Corinth where his ministry bears fruit. He helps the believers who have believed through grace. The word spreads through faithful teachers.',
        },
        {
          kind: 'reflection',
          id: 'acts18-teaching-reflect',
          prompt: 'Who has helped you understand Christ more fully? How can you help others?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'For I am with thee, and no man shall set on thee to hurt thee: for I have much people in this city.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 18 · Study Guide',
  },

  hasHebrew: false,
};
