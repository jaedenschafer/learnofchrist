import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Acts 10 — Cornelius and the Gentile Breakthrough
 *
 * Peter receives a vision of unclean animals in a sheet, lowered from heaven,
 * and hears a voice say, "Rise, Peter; kill, and eat." Bewildered, Peter refuses
 * on account of the food laws. But the message is not about eating. It is about
 * seeing the unclean as clean. Messengers from Cornelius, a Roman centurion,
 * arrive at that moment. Peter goes to Caesarea, preaches Christ to Gentiles,
 * and the Holy Spirit falls upon them. The barrier between Jew and Gentile
 * is broken open.
 */
export const ACTS_10: RichChapterContent = {
  bookSlug: 'acts',
  bookName: 'Acts',
  chapter: 10,

  intros: [
    'Cornelius is a Gentile, a centurion of the Italian regiment—a man of authority and respect among the Romans. He is also a devout man, one who fears God, gives alms, and prays. Yet he is unclean by Jewish law. No righteous Jew would enter his house or eat at his table. The barrier between the people of God and the nations seems absolute.',
    'But God is about to shatter that barrier. To Peter comes a vision that will remake his understanding of what is clean and unclean, what is acceptable and forbidden. And to Cornelius comes an angelic visitor with a command to seek Peter out. In the meeting of these two men, the gospel moves beyond its Jewish boundaries and becomes, for the first time, fully Gentile.',
  ],

  sections: [
    {
      ref: 'Acts 10:1–33',
      title: 'The Vision and the Call',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(9, 'On the morrow, as they went on their journey, and drew nigh unto the city, Peter went up upon the housetop to pray about the sixth hour:'),
            plain(10, 'And he became very hungry, and would have eaten: but while they made ready, he fell into a trance,'),
            plain(11, 'And saw heaven opened, and a certain vessel descending unto him, as it had been a great sheet knit at the four corners, and let down to the earth:'),
            plain(12, 'Wherein were all manner of fourfooted beasts of the earth, and wild beasts, and creeping things, and fowls of the air.'),
            plain(13, 'And there came a voice to him, Rise, Peter; kill, and eat.'),
            plain(14, 'But Peter said, Not so, Lord; for I have never eaten any thing that is common or unclean.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts10-vision-sheet',
          html:
            'Peter is hungry and prays. In his prayer, he falls into a trance. The sheet descends, filled with animals—clean and unclean according to the law. And the voice says, "Kill and eat." But Peter, faithful to the law he has kept his entire life, refuses. "Not so, Lord; for I have never eaten any thing that is common or unclean." Peter&apos;s refusal is not disobedience; it is faithfulness to what he understands to be God&apos;s law.',
        },
        {
          kind: 'greek',
          id: 'acts10-koinon',
          title: 'Koinon — Common; Unclean',
          script: 'κοινός',
          translit: '<strong>Koinon</strong> · common; shared; unclean; profane',
          description:
            'Koinon means not only unclean in the ceremonial sense, but profane, common, shared in a way that denies separation. Peter has lived his entire life with a clear boundary: clean and unclean. This boundary has been the shape of his faithfulness. To blur that boundary feels like apostasy.',
        },
        {
          kind: 'christ',
          id: 'acts10-christ-barrier-breaker',
          title: 'Christ Connection — The Barrier Breaker',
          html:
            'The voice that commands Peter three times to eat unclean things is the voice of the risen Christ. And in repeating the command three times, Christ is not just teaching Peter a lesson about food. He is teaching him that the barrier between Jew and Gentile, clean and unclean, is no longer standing. In Christ, the law&apos;s separation has been fulfilled and transcended.',
        },
        {
          kind: 'carry',
          html:
            'We all have boundaries that feel absolute. We construct categories of acceptable and unacceptable, safe and dangerous, those-like-us and those-not-like-us. The vision to Peter invites us to question those boundaries. What separations in your own thinking might Christ be asking you to reconsider?',
        },
        {
          kind: 'reflection',
          id: 'acts10-boundaries',
          prompt: 'What barriers do you maintain between yourself and others? What would it mean to be willing to have those barriers broken by an encounter with Christ?',
        },
      ],
    },

    {
      ref: 'Acts 10:34–48',
      title: 'Peter and Cornelius: The First Gentile Believers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 10,
          lines: [
            plain(34, 'Then Peter opened his mouth, and said, Of a truth I perceive that God is no respecter of persons:'),
            plain(35, 'But in every nation he that feareth him, and worketh righteousness, is accepted with him.'),
            plain(43, 'To him give all the prophets witness, that through his name whosoever believeth in him shall receive remission of sins.'),
            plain(44, 'While Peter yet spake these words, the Holy Ghost fell on all them which heard the word.'),
            plain(45, 'And they of the circumcision which believed were astonied, as many as came with Peter, because that on the Gentiles also was poured out the gift of the Holy Ghost.'),
            plain(47, 'Can any man forbid water, that these should not be baptized, which have received the Holy Ghost as well as we?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'acts10-no-respecter',
          html:
            'Peter now understands. "God is no respecter of persons." This is not a statement about abstract equality. It is Peter&apos;s acknowledgment that the boundaries he has kept—the distinctions that have defined Jewish identity and covenant—are not God&apos;s final boundaries. Cornelius, though uncircumcised, though a Roman, is accepted with God if he fears Him and works righteousness.',
        },
        {
          kind: 'greek',
          id: 'acts10-prosopoleptes',
          title: 'Prosopoleptes — Respecter of Persons',
          script: 'προσωπολήμπτης',
          translit: '<strong>Prosopolemptes</strong> · respecter of persons; one who judges by appearance',
          description:
            'The word literally means "one who takes faces"—who judges by the appearance, the external markers. God does not do this. He does not sort people by their ethnic markers, their ritual purity, their social status. He looks at the heart.',
        },
        {
          kind: 'commentary',
          id: 'acts10-spirit-falls',
          html:
            'While Peter is still speaking, the Holy Ghost falls on the Gentiles. They have not been baptized. They have not undergone Jewish conversion. Yet the Spirit comes upon them. The Jewish believers with Peter are astonished. God is moving faster than their theology. The gift of the Spirit to Gentiles is the definitive sign that God has accepted them.',
        },
        {
          kind: 'christ',
          id: 'acts10-christ-universal',
          title: 'Christ Connection — The Gospel for All Nations',
          html:
            'Peter speaks that through Christ&apos;s name, "whosoever believeth in him shall receive remission of sins." The gospel is not a Jewish possession to be guarded and doled out. It is a gift offered to all nations. Faith, not ethnicity; belief, not bloodline—these are the conditions. In Christ, the boundaries fall.',
        },
        {
          kind: 'carry',
          html:
            'If you have felt outside looking in—not part of the "right" group, not meeting someone&apos;s criteria for acceptance—know that God looks past all such boundaries. Cornelius was outside every boundary of Jewish identity, yet God moved toward him. He moves toward you. Your belonging in God&apos;s family depends not on your status or your background, but on your willingness to believe.',
        },
        {
          kind: 'reflection',
          id: 'acts10-universality',
          prompt: 'How does the inclusion of the Gentiles expand your understanding of who belongs to God&apos;s people? Where in your own life might you be excluding someone God wants to include?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Then Peter opened his mouth, and said, Of a truth I perceive that God is no respecter of persons: But in every nation he that feareth him, and worketh righteousness, is accepted with him.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Acts 10 · Study Guide',
  },

  hasHebrew: false,
};
