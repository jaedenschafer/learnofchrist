import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Acts 6 — The Seven Deacons, Stephen&apos;s Wonder
 *
 * The church grows so rapidly that oversight of the widows&apos; aid becomes
 * difficult. Seven men, full of the Holy Ghost and wisdom, are chosen to
 * oversee this service. Stephen, full of faith and power, works great wonders.
 */
export const ACTS_6: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 6,

  intros: [
    'The apostolic church swells beyond a few hundred believers. New needs arise. Widows are overlooked in the daily distribution of aid. The apostles recognize that to minister to both word and works requires delegation. They call the multitude and propose that seven men be chosen to oversee this service. The criteria are clear: men of honest report, full of the Holy Ghost and wisdom. Stephen, described as a man full of faith and of the Holy Ghost, is chosen. But he will become known not for his work distributing aid, but for the wonders and miracles he works.',
    'Controversy arises. Certain freedmen rise up and dispute with Stephen. But they cannot resist the wisdom and the spirit by which he speaks. False witnesses are suborned to accuse him of blasphemy against Moses and God.',
  ],

  sections: [
    {
      ref: 'Acts 6:1–7',
      title: 'The Seven Deacons Chosen',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(3, 'Wherefore, brethren, look ye out among you seven men of honest report, full of the Holy Ghost and of wisdom, whom we may appoint over this business.'),
            plain(5, 'And the saying pleased the whole multitude: and they chose Stephen, a man full of faith and of the Holy Ghost, and Philip, and Prochorus, and Nicanor, and Timon, and Parmenas, and Nicolas a proselyte of Antioch:'),
            plain(6, 'Whom they set before the apostles: and when they had prayed, they laid their hands on them.'),
            plain(7, 'And the word of God increased; and the number of the disciples multiplied in Jerusalem greatly; and a great company of the priests were obedient to the faith.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts6-delegation',
          html:
            'The apostles do not attempt to do everything themselves. They recognize that to minister to both word and table requires delegating responsibility. This is not a demotion—it is an essential function of the church. The ones chosen are themselves full of the Holy Ghost, not second-class believers.',
        },
        {
          kind: 'greek',
          id: 'acts6-diakonia',
          title: 'Diakonia — Service',
          script: 'διακονία',
          translit: '<strong>Diakonia</strong> · service; ministry; care',
          description:
            'Diakonia is not menial labor beneath the apostles. It is genuine ministry—the care of the vulnerable, the provision for the poor. Jesus Himself came as a servant (diakonos). Service is never secondary in the kingdom.',
        },
        {
          kind: 'commentary',
          id: 'acts6-growth',
          html:
            'The result of this orderly arrangement is not only practical efficiency. The word of God increases, the number of disciples multiplies, and even great company of priests are obedient to the faith. Order and delegation free the apostles to preach and pray. The whole community thrives.',
        },
        {
          kind: 'christ',
          id: 'acts6-christ-service',
          title: 'Christ Connection — Leadership as Service',
          html:
            'Jesus washed the disciples&apos; feet. He came not to be served, but to serve. The apostles learn this lesson and delegate, not to avoid work, but to ensure all work is done well. Authority in the church serves the body, not the other way around.',
        },
        {
          kind: 'carry',
          html:
            'Stephen is "full of faith and of the Holy Ghost." He is chosen for practical service, yet he is described in the same spiritual terms as the apostles themselves. Every work in God&apos;s kingdom, done in faith and obedience, is noble and dignified.',
        },
        {
          kind: 'reflection',
          id: 'acts6-service-reflection',
          prompt: 'What kind of service is God calling you to? How can you approach all your work as ministry done for Christ and His kingdom?',
        },
      ],
    },

    {
      ref: 'Acts 6:8–15',
      title: 'Stephen&apos;s Power and Opposition',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(8, 'And Stephen, full of faith and power, did great wonders and miracles among the people.'),
            plain(9, 'Then there arose certain of the synagogue, which is called the synagogue of the Libertines, and Cyrenians, and Alexandrians, and of them of Cilicia and of Asia, disputing with Stephen.'),
            plain(10, 'And they were not able to resist the wisdom and the spirit by which he spake.'),
            plain(13, 'And set up false witnesses, which said, This man ceaseth not to speak blasphemous words against this holy place, and the law:'),
            plain(15, 'And all that sat in the council, looking steadfastly on him, saw his face as it had been the face of an angel.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts6-wonders',
          html:
            'Stephen, though chosen for practical service, is full of faith and power, and works great wonders and miracles. He does not confine himself to his appointed role. The Holy Ghost overflows through him in power. This is the theme of Acts: when the Spirit fills a believer, that believer&apos;s gifts and work expand far beyond what was anticipated.',
        },
        {
          kind: 'commentary',
          id: 'acts6-opposition',
          html:
            'Opposition arises. Men from various synagogues dispute with Stephen, but they cannot resist the wisdom and spirit by which he speaks. Frustrated, they suborn false witnesses to accuse him of blasphemy. This is the pattern: truth provokes hostility, and those who cannot answer truth resort to lies and violence.',
        },
        {
          kind: 'greek',
          id: 'acts6-anthistemi',
          title: 'Anthistemi — Resist',
          script: 'ἀνθίστημι',
          translit: '<strong>Anthistemi</strong> · resist; oppose; stand against',
          description:
            'They could not resist Stephen. His wisdom and the spirit of God working through him were simply too powerful. This is not victory through argument alone, but through the testimony of a man aligned with God&apos;s purpose and filled with God&apos;s Spirit.',
        },
        {
          kind: 'christ',
          id: 'acts6-christ-witness-stephen',
          title: 'Christ Connection — Stephen&apos;s Witness',
          html:
            'Stephen stands before the council with the face of an angel. He is about to give his testimony before the same body that condemned Jesus. Like his Lord, he will bear witness unto death. But in his faithfulness, his face shines with the glory of the risen Christ.',
        },
        {
          kind: 'carry',
          html:
            'Stephen&apos;s face is seen as the face of an angel. Not because he is not human, but because the divine glory is shining through him. What would it mean for your face, your presence, to reflect the glory of Christ?',
        },
        {
          kind: 'reflection',
          id: 'acts6-witness-reflection',
          prompt: 'What is God asking you to witness to, even if it brings opposition? How can your life be a testimony to the gospel of Christ?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Wherefore, brethren, look ye out among you seven men of honest report, full of the Holy Ghost and of wisdom. And Stephen, full of faith and power, did great wonders and miracles among the people.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 6 · Study Guide',
  },

  hasHebrew: false,
};
