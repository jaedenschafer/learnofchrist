import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Acts 18 — Corinth; Priscilla and Aquila
 *
 * Paul comes to Corinth and finds Aquila and Priscilla, tentmakers like himself.
 * He stays and works with them, preaching in the synagogues on the Sabbath.
 * When opposition arises, the Lord tells Paul, "I have much people in this city."
 * Paul remains in Corinth for a year and a half, teaching the word of God. Later,
 * when the Jews oppose Paul, he shakes his garments and says, "Your blood be upon
 * your own heads." But the gospel has taken root in Corinth.
 */
export const ACTS_18: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 18,

  intros: [
    'In Corinth, Paul meets Aquila and Priscilla, Jewish Christians recently expelled from Rome. They are tentmakers, and Paul, too, is a tentmaker. He lodges with them and works at his craft while preaching on the Sabbath in the synagogue. For Paul, there is no separation between daily labor and apostolic work. He makes his living with his hands and speaks the gospel with his lips.',
    'Opposition comes. The Jews resist and revile him. But the Lord speaks to Paul in a vision: "Be not afraid, but speak, and hold not thy peace: For I am with thee, and no man shall set on thee to hurt thee: for I have much people in this city." This assurance emboldens Paul to stay. And for eighteen months, the gospel works in Corinth. A community of believers forms, drawn from Jews and Greeks alike.',
  ],

  sections: [
    {
      ref: 'Acts 18:1–17',
      title: 'Priscilla and Aquila; the Lord&apos;s Assurance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(2, 'And found a certain Jew named Aquila, born in Pontus, lately come from Italy, with his wife Priscilla; (because that Claudius had commanded all Jews to depart from Rome:) and came unto them.'),
            plain(3, 'And because he was of the same craft, he abode with them, and wrought: for by their occupation they were tentmakers.'),
            plain(4, 'And he reasoned in the synagogue every sabbath, and persuaded the Jews and the Greeks.'),
            plain(9, 'And the Lord said unto Paul in the night by a vision, Be not afraid, but speak, and hold not thy peace:'),
            plain(10, 'For I am with thee, and no man shall set on thee to hurt thee: for I have much people in this city.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts18-work',
          html:
            'Paul is not a cloistered scholar or full-time religious figure. He is a tentmaker. He works with his hands, and his work supports both his own needs and his freedom to preach without accepting payment from his churches. Priscilla and Aquila are his co-workers in both craft and gospel.',
        },
        {
          kind: 'greek',
          id: 'acts18-skene',
          title: 'Skene — Tent',
          script: 'σκηνή',
          translit: '<strong>Skene</strong> · tent; tabernacle; dwelling',
          description:
            'The word for tent-making (skenopolos) echoes the tabernacle (skene) of the wilderness. Paul, like the ancient Israelites, is a sojourner making temporary shelters. His life is not rooted in one place, but given to the mission of proclaiming the gospel.',
        },
        {
          kind: 'christ',
          id: 'acts18-christ-presence',
          title: 'Christ Connection — I Am With You',
          html:
            'The Lord&apos;s promise to Paul is not that opposition will disappear, but that Christ is with him. "I am with thee, and no man shall set on thee to hurt thee." This is the consistency of Christ&apos;s presence: neither removing persecution nor permitting it to have ultimate power. Presence is the assurance.',
        },
        {
          kind: 'carry',
          html:
            'When opposition comes, you may wonder if you have heard God incorrectly, if you are on the wrong path. But the promise is not comfort without resistance. It is the guarantee that Christ walks with you into the resistance. His presence does not eliminate the difficulty; it makes it bearable and redemptive.',
        },
        {
          kind: 'reflection',
          id: 'acts18-presence',
          prompt: 'When have you needed the assurance "I am with thee"? How has Christ&apos;s presence changed your experience of opposition or difficulty?',
        },
      ],
    },

    {
      ref: 'Acts 18:18–28',
      title: 'The Gospel Takes Root',
      blocks: [
        {
          kind: 'scripture',
          chapter: 18,
          lines: [
            plain(18, 'And Paul after this tarried there yet a good while, and then took his leave of the brethren, and sailed into Syria, and with him Priscilla and Aquila; having shorn his head in Cenchrea: for he had a vow.'),
            plain(24, 'And a certain Jew named Apollos, born at Alexandria, an eloquent man, and mighty in the scriptures, came to Ephesus.'),
            plain(25, 'This man was instructed in the way of the Lord; and being fervent in the spirit, he spake and taught diligently the things of the Lord, knowing only the baptism of John.'),
            plain(26, 'And he began to speak boldly in the synagogue: but when Priscilla and Aquila had heard him, they took him unto them, and expounded unto him the way of God more perfectly.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts18-vow',
          html:
            'Paul takes a Nazirite vow, shearing his head in Cenchrea. This is not a rejection of his freedom from the law, but a voluntary choice—a personal commitment to God. Paul honors the practices of his people even while preaching that Gentiles are not bound by them.',
        },
        {
          kind: 'greek',
          id: 'acts18-dynamis',
          title: 'Dynamis — Mighty; Powerful',
          script: 'δύναμις',
          translit: '<strong>Dynamis</strong> · power; might; ability; miraculous power',
          description:
            'Apollos is "mighty" in the scriptures—he has grasped the power of the written word. Yet he knows only John&apos;s baptism. Priscilla and Aquila recognize his sincerity and his gap in understanding. They take him and expound the way of Christ more fully. Teaching is not hierarchical; it is mutual and humble.',
        },
        {
          kind: 'christ',
          id: 'acts18-christ-growth',
          title: 'Christ Connection — Growing in Understanding',
          html:
            'Apollos is not rebuked for his partial knowledge. Instead, he is invited into fuller understanding. His willingness to be taught, and Priscilla and Aquila&apos;s willingness to teach gently, models the kind of community where faith deepens. Christ&apos;s truth is not a possession some hold and others lack; it is a reality we all grow into together.',
        },
        {
          kind: 'carry',
          html:
            'Pride can prevent us from learning. Humility can prevent us from teaching. But when we hold our understanding lightly and remain open to deeper truth, we grow. And when we see others growing, even if their understanding is still incomplete, we welcome them and help them move further into the light.',
        },
        {
          kind: 'reflection',
          id: 'acts18-learning',
          prompt: 'Where is your understanding of Christ still incomplete? Who might be willing to help you understand "the way of God more perfectly"? Whom might you help along the way?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'I am with thee, and no man shall set on thee to hurt thee: for I have much people in this city. Priscilla and Aquila expounded unto him the way of God more perfectly.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 18 · Study Guide',
  },

  hasHebrew: false,
};
