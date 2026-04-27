import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Acts 11 — Peter&apos;s Defense; The Church in Antioch
 *
 * When Peter returns to Jerusalem, the circumcised believers question him for
 * eating with uncircumcised Gentiles. Peter recounts the vision and the falling
 * of the Spirit on Cornelius&apos;s household. The church accepts that God has also
 * granted repentance to the Gentiles. Meanwhile, scattered believers reach
 * Antioch and preach the good news to Greeks as well as Jews. Many are
 * converted, and the disciples are first called "Christians" in Antioch.
 */
export const ACTS_11: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 11,

  intros: [
    'The church in Jerusalem hears that Peter has done the unthinkable: he has eaten with Gentiles. The news causes controversy. The circumcised believers, zealous for the law that has defined God&apos;s covenant people since Abraham, demand an explanation. They cannot understand how Peter could share table fellowship with those outside the covenant.',
    'But Peter does not defend himself; he tells the story. He recounts the vision, the messengers, the household, and the falling of the Spirit. And in the telling, the church comes to a new understanding: God has opened a door to the Gentiles. Meanwhile, in Antioch, far from Jerusalem&apos;s scrutiny, scattered believers preach Christ not only to Jews but to Greeks. And there, for the first time, the disciples are called by a new name: "Christians."',
  ],

  sections: [
    {
      ref: 'Acts 11:1–18',
      title: 'Peter&apos;s Account and the Church&apos;s Understanding',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(2, 'And when Peter was come up to Jerusalem, they that were of the circumcision contended with him,'),
            plain(3, 'Saying, Thou wentest in to men uncircumcised, and didst eat with them.'),
            plain(4, 'But Peter rehearsed the matter from the beginning, and expounded it by order unto them, saying,'),
            plain(15, 'And as I began to speak, the Holy Ghost fell on them, as on us at the beginning.'),
            plain(17, 'Forasmuch then as God gave them the like gift as he did unto us, who believed on the Lord Jesus Christ; what was I, that I could withstand God?'),
            plain(18, 'When they heard these things, they held their peace, and glorified God, saying, Then hath God also to the Gentiles granted repentance unto life.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts11-circumcision',
          html:
            'The "circumcision" party is not presenting a wild or baseless objection. Circumcision was the sign of the covenant with Abraham, the marker that separated the people of God from all other nations. For a millennium, this boundary had been absolute. To blur it seemed like a betrayal of God&apos;s covenant itself. Their concern is rooted in Scripture and tradition.',
        },
        {
          kind: 'greek',
          id: 'acts11-diakrino',
          title: 'Diakrino — Distinguish; Contend',
          script: 'διακρίνω',
          translit: '<strong>Diakrino</strong> · to distinguish; to discern; to judge; to contend',
          description:
            'The circumcision party is not questioning Peter hostilely, but seeking to discern the right course. Yet there is a tension: they are trying to distinguish (diakrino) between what should be kept separate (Jews and Gentiles), even as the Spirit is dissolving that distinction.',
        },
        {
          kind: 'christ',
          id: 'acts11-christ-vindication',
          title: 'Christ Connection — The Spirit Vindicates the Gospel',
          html:
            'Peter appeals not to argument or theological reasoning, but to the Spirit. "The Holy Ghost fell on them, as on us at the beginning." The Spirit&apos;s gift is the decisive sign. God has made His will known not through debate, but through the gift of His own presence. What God has cleansed, no one may declare unclean.',
        },
        {
          kind: 'carry',
          html:
            'When we are uncertain about God&apos;s will, we often look for perfect clarity or irrefutable argument. But sometimes God&apos;s leading comes as the Spirit&apos;s presence breaking into our categories and assumptions. Openness to the unexpected work of God requires a willingness to let go of our certainties.',
        },
        {
          kind: 'reflection',
          id: 'acts11-openness',
          prompt: 'What certainties about God or faith might you be holding too tightly? How might God be calling you to expand your understanding of who belongs in His kingdom?',
        },
      ],
    },

    {
      ref: 'Acts 11:19–30',
      title: 'The Church in Antioch',
      blocks: [
        {
          kind: 'scripture',
          chapter: 11,
          lines: [
            plain(19, 'Now they which were scattered abroad upon the persecution that arose about Stephen travelled as far as Phenice, and Cyprus, and Antioch, preaching the word to none but unto the Jews only.'),
            plain(20, 'And some of them were men of Cyprus and Cyrene, which, when they were come to Antioch, spake unto the Grecians, preaching the Lord Jesus.'),
            plain(21, 'And the hand of the Lord was with them: and a great number believed, and turned unto the Lord.'),
            plain(26, 'And when he had found him, he brought him unto Antioch. And it came to pass, that a whole year they assembled themselves with the church, and taught much people. And the disciples were called Christians first in Antioch.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts11-scatter',
          html:
            'The scattered believers from Stephen&apos;s persecution have traveled widely. Some go to Phoenice and Cyprus, preaching only to Jews. But in Antioch, something different happens. Men from Cyprus and Cyrene, Hellenistic Jews, begin preaching not only to Jews but to Greeks. They do so not from a directive from Jerusalem, but from the initiative of the Spirit and their own sense of the gospel&apos;s universality.',
        },
        {
          kind: 'greek',
          id: 'acts11-christianos',
          title: 'Christianos — Christian',
          script: 'Χριστιανός',
          translit: '<strong>Christianos</strong> · Christian; follower of Christ',
          description:
            'The word "Christian" was likely a term of mockery, coined by outsiders. To be called a "Christian" was to be marked, identified with a controversial Galilean. Yet the disciples in Antioch embraced the name. They were willing to be known not as Jews, not as philosophers, but as followers of Christ.',
        },
        {
          kind: 'commentary',
          id: 'acts11-antioch',
          html:
            'Antioch becomes the first major Gentile church. It is in Antioch that the gospel comes fully into the light of the Gentile world. And it is from Antioch that missionaries will eventually reach Rome and the ends of the earth. The movement from Jerusalem to Samaria to Caesarea to Antioch traces the expanding boundary of God&apos;s people.',
        },
        {
          kind: 'christ',
          id: 'acts11-christ-unnamed',
          title: 'Christ Connection — Known by a New Name',
          html:
            'The disciples in Antioch are identified first and foremost as followers of Christ. Not by their ethnicity, not by their observance of the law, but by their faith in Jesus. This new identity, this name, becomes the defining marker of their belonging to God.',
        },
        {
          kind: 'carry',
          html:
            'What are you first known as? By your position, your background, your achievements? The Antioch church shows us that the most radical identity is to be known as a Christian—a follower of Christ. Everything else—ethnicity, status, learning—becomes secondary.',
        },
        {
          kind: 'reflection',
          id: 'acts11-identity',
          prompt: 'If you were first called a "Christian" by those who know you, would that designation ring true? What would need to change for your primary identity to be your faith in Christ?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'And the disciples were called Christians first in Antioch. Then hath God also to the Gentiles granted repentance unto life.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 11 · Study Guide',
  },

  hasHebrew: false,
};
