import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Acts 9 — Saul's Conversion and the Healing of Aeneas and Tabitha
 */
export const ACTS_9: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 9,

  intros: [
    'Saul is consumed with zeal to stamp out the followers of Jesus. But on the road to Damascus, a blinding light cuts him down. "Saul, Saul, why persecutest thou me?" It is Jesus—the One Saul has been fighting against. His entire trajectory changes. From then on, Saul becomes Paul, the apostle to the Gentiles. After his conversion, Peter heals Aeneas and raises Tabitha from the dead. Signs follow the apostles.',
  ],

  sections: [
    {
      ref: 'Acts 9:1–19',
      title: 'Saul&apos;s Conversion',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(3, 'And as he journeyed, he came near Damascus: and suddenly there shined round about him a light from heaven:'),
            plain(4, 'And he heard a voice saying unto him, Saul, Saul, why persecutest thou me?'),
            plain(5, 'And he said, Who art thou, Lord? And the Lord said, I am Jesus whom thou persecutest: it is hard for thee to kick against the pricks.'),
            plain(6, 'And he trembling and astonished said, Lord, what wilt thou have me to do? And the Lord said unto him, Arise, and go into the city, and it shall be told thee what thou must do.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts9-blinding',
          html: 'The light that blinds Saul is not metaphorical. He falls to the ground. Those traveling with him hear a voice but see no one. Saul is left sightless—a radical reversal of his relentless focus. He must now depend entirely on others.',
        },
        {
          kind: 'greek',
          id: 'acts9-kentron',
          title: 'Kentron — Pricks',
          script: 'κέντρον',
          translit: '<strong>Kentron</strong> · a prick; a goad; something that causes pain',
          description: 'The image is of an ox kicking against a goad—the sharp stick that urges it forward. To resist God is futile and painful. Saul has been kicking against the pricks all along, harming only himself.',
        },
        {
          kind: 'christ',
          id: 'acts9-christ-persecutor',
          title: 'Christ Connection — The Persecutor Becomes the Apostle',
          html: 'Saul meets the risen Jesus on the Damascus road. That encounter is not gentle or gradual. It is violent, undeniable, transformative. From that moment, his entire life is reordered. The persecutor becomes a vessel of grace.',
        },
        {
          kind: 'carry',
          html: 'Saul&apos;s blindness and recovery are spiritual as well as physical. He is blind to the truth, and then he sees. He is filled with the Spirit. He is baptized. The transformation is complete.',
        },
        {
          kind: 'reflection',
          id: 'acts9-conversion-reflect',
          prompt: 'What convictions do you hold so deeply that if challenged, they would shake your entire worldview?',
        },
      ],
    },

    {
      ref: 'Acts 9:32–42',
      title: 'Peter&apos;s Miracles: Aeneas and Tabitha',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(34, 'And Peter said unto him, Aeneas, Jesus Christ maketh thee whole: arise, and make thy bed. And he arose immediately.'),
            plain(36, 'Now there was at Joppa a certain disciple named Tabitha, which by interpretation is called Dorcas: this woman was full of good works and almsdeeds which she did.'),
            plain(40, 'But Peter put them all forth, and kneeled down, and prayed; and turning him to the body said, Tabitha, arise. And she opened her eyes: and when she saw Peter, she sat up.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts9-aeneas',
          html: 'Aeneas has been paralyzed for eight years. Peter&apos;s word to him is simple: "Jesus Christ maketh thee whole: arise, and make thy bed." The healing is instantaneous. The work of Jesus through His apostles continues.',
        },
        {
          kind: 'commentary',
          id: 'acts9-tabitha',
          html: 'Tabitha is a disciple full of good works. When she dies, the widows gather to mourn. They show the cloaks and garments she had made for them. But Peter raises her from the dead—not to restore her body, but to continue the work of her hands.',
        },
        {
          kind: 'greek',
          id: 'acts9-agathopoia',
          title: 'Agathopoia — Good Works',
          script: 'ἀγαθοποιία',
          translit: '<strong>Agathopoia</strong> · the doing of good; good deeds',
          description: 'Tabitha is remembered not for eloquence or theological knowledge, but for her hands. She made garments for the widows. Her faith was visible in her deeds. This too is the work of the apostle.',
        },
        {
          kind: 'christ',
          id: 'acts9-christ-resurrection',
          title: 'Christ Connection — The Power Over Death',
          html: 'Jesus raised the dead—Lazarus, the widow&apos;s son, Jairus&apos; daughter. Now His apostles, through the Holy Spirit, perform the same works. Death itself yields to the authority of Christ, extended through His servants.',
        },
        {
          kind: 'carry',
          html: 'Tabitha is restored to the widows she served. Aeneas arises to make his bed. The gospel is not only about forgiveness. It is about healing in this life, about restoration of the body.',
        },
        {
          kind: 'reflection',
          id: 'acts9-service-reflect',
          prompt: 'How do your hands serve others? What good works is God calling you to do?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Jesus Christ maketh thee whole: arise, and make thy bed.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 9 · Study Guide',
  },

  hasHebrew: false,
};
