import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Esdras 9 — The Law Proclaimed; The Covenant Renewed
 *
 * Ezra reads the law of God aloud to all the people. His voice carries across
 * the assembly, and the people weep as they hear God&apos;s word. They understand
 * how far they have fallen. They repent. They separate from those who violate
 * the covenant. The covenant is renewed, and a new beginning is possible.
 */
export const FIRST_ESDRAS_9: RichChapterContent = {
  bookSlug: '1-esdras',
  bookName: '1 Esdras',
  chapter: 9,

  intros: [
    'Ezra stands before all the people—men, women, children—and reads the law. He does not merely read; he proclaims. His voice carries the weight of God&apos;s word. As the people hear the law—the commandments they have forgotten, the standards they have violated—tears flow. They are confronted with the gap between what they are and what they are called to be.',
    'Yet tears give way to action. The people commit to reform. Those who have married outside the covenant separate. The covenant is renewed. The people stand again at Sinai, as it were, accepting the law anew. The exile is truly over. Not because they have returned to the land, but because they have returned to God.',
  ],

  sections: [
    {
      ref: '1 Esdras 9:1–15',
      title: 'The Law Read Aloud',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(1, 'And Esdras the priest brought the law before the congregation both of men and women, and all the priests, to hear the law.'),
            plain(3, 'And he read in the broad street that was before the water gate: and the ears of all the people were attentive unto the law.'),
            plain(8, 'And they read in the law of God distinctly, and gave the sense, and caused them to understand the reading.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras9-reading',
          html:
            'The law is read aloud in the open, before all people. It is not a secret doctrine hidden from the common people. It is proclaimed. And as it is read, it is interpreted. The people are helped to understand not just the words but their meaning. The law becomes alive, not merely text but truth that convicts and calls.',
        },
        {
          kind: 'hebrew',
          id: 'esdras9-kahal',
          title: 'Kahal — Assembly; Congregation',
          script: 'קָהָל',
          translit: '<strong>Kahal</strong> · assembly; congregation; gathering',
          description:
            'The kahal is the people gathered as one. In the kahal, the law is read to all together. Each person hears in community. The law is not individual instruction but communal covenant. To hear it together is to be bound together in response.',
        },
        {
          kind: 'christ',
          id: 'esdras9-christ-word',
          title: 'Christ Connection — The Word Made Known',
          html:
            'Ezra reads the law so all can hear. Jesus proclaims the good news openly. Neither hides God&apos;s word. Both make it available, accessible, undeniable. The word must be heard if it is to transform.',
        },
        {
          kind: 'carry',
          html:
            'When you hear God&apos;s word read aloud, do you listen as the people of Jerusalem listened? Do you let it convict you, challenge you, transform you? The law is meant to be heard, not bypassed.',
        },
        {
          kind: 'reflection',
          id: 'esdras9-hear',
          prompt: 'When you read or hear Scripture, what happens in you? How does it move you? Do you resist or open yourself to its challenge?',
        },
      ],
    },

    {
      ref: '1 Esdras 9:37–55',
      title: 'The Covenant Renewed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 9,
          lines: [
            plain(37, 'And they made a proclamation throughout Judea, that all they that were of the captivity should gather themselves together at Jerusalem:'),
            plain(42, 'And all that had taken strange wives of the people of the land put them away with their children.'),
            plain(55, 'Then stood up Esdras, and said, Ye have transgressed, and taken strange wives, to increase the trespasses of Israel. Now therefore make confession unto the Lord God of your fathers, and do his will.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'esdras9-renewal',
          html:
            'The reform is swift and thorough. The people act on what they have heard. They separate from those who violate the covenant. It is a painful action—these are spouses and children they love—yet it is necessary. Covenant requires boundaries. The people choose covenant over comfort.',
        },
        {
          kind: 'greek',
          id: 'esdras9-homologia',
          title: 'Homologia — Confession',
          script: 'ὁμολογία',
          translit: '<strong>Homologia</strong> · confession; agreement; speaking the same',
          description:
            'Homologia is agreement spoken aloud. To confess is to speak the same words as the covenant—to say yes to God&apos;s will, to align yourself with what is true. It is a joining, a unification of will.',
        },
        {
          kind: 'christ',
          id: 'esdras9-christ-confession',
          title: 'Christ Connection — The Confession That Saves',
          html:
            'To confess Christ is to make homologia—to speak the same word He speaks, to align your will with His will. The people of Jerusalem confess the law; believers confess Christ. Both are acts of covenant renewal.',
        },
        {
          kind: 'carry',
          html:
            'The exile is truly over when the people return to God in their hearts, not merely their bodies. The return is complete when they confess: "We have sinned. We will do your will." This is the renewal every person must make.',
        },
        {
          kind: 'reflection',
          id: 'esdras9-will',
          prompt: 'What does it mean for you to do God&apos;s will? What would change if you truly committed to it, regardless of the cost?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'And he read in the broad street that was before the water gate: and the ears of all the people were attentive unto the law. And they read in the law of God distinctly, and gave the sense, and caused them to understand the reading. Make confession unto the Lord God of your fathers, and do his will.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Esdras 9 · Study Guide',
  },

  hasHebrew: true,
};
