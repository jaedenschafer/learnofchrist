import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Psalm 19 — The Heavens Declare, The Law Restores
 *
 * "The heavens declare[res:sefaria-psalms-19] the glory of God." All of creation speaks. The heavens tell
 * of the handiwork of God. Yet there is more than natural revelation. "The law[res:bible-odyssey-torah-psalms] of
 * the Lord is perfect, converting the soul." From the cosmic witness of creation,
 * David turns to the perfect law of God, which restores, enlightens, and gives joy.
 * Christ is the perfect Word, the full embodiment of all truth that creation whispers
 * and Scripture declares.
 */
export const PSALMS_19: RichChapterContent = {
  bookSlug: 'psalms',
  bookName: 'Psalms',
  chapter: 19,

  estimatedMinutes: { beginner: 1, intermediate: 5, deep: 6 },
  intros: [
    'Psalm 19 is divided into two movements. The first describes natural revelation—how the heavens declare God&apos;s glory without uttering a word. The second movement shifts to revealed law, to God&apos;s word, which speaks directly and perfectly to the human soul. From the silent witness of creation to the vocal clarity of Scripture, David moves upward in the hierarchy of revelation. Yet both testify to the same God: the Creator of the heavens and the Giver of the law.',
    'This psalm stands at the intersection of all Christian theology. In Romans 1:20, Paul[res:intertextual-psalms-19-nt] quotes its opening: the heavens proclaim God&apos;s invisible attributes so clearly that those who refuse to acknowledge them are without excuse. In John 1, the Word that was with God and was God is revealed in flesh. This psalm opens the door to both.',
  ],

  sections: [
    {
      ref: 'Psalm 19:1–6',
      title: 'The Silent Witness of Creation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(1, 'The heavens declare the glory of God; and the firmament sheweth his handywork.'),
            plain(2, 'Day unto day uttereth speech, and night unto night sheweth knowledge.'),
            plain(3, 'There is no speech nor language, where their voice is not heard.'),
            plain(4, 'Their line is gone out through all the earth, and their words to the end of the world. In them hath he set a tabernacle for the sun:'),
            plain(5, 'Which is as a bridegroom coming out of his chamber, and rejoiceth as a strong man to run a race.'),
            plain(6, 'His going forth is from the end of the heaven, and his circuit unto the ends of it: and there is nothing hid from the heat thereof.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps19-declare',
          html:
            'The psalm opens with one of the most famous statements in Scripture: "The heavens declare the glory of God." This is natural revelation—the cosmos speaking. The heavens do not speak words, yet they communicate. They show forth the handiwork of God. Every person alive, wherever they are, has access to this testimony.',
        },
        {
          kind: 'hebrew',
          id: 'ps19-kvod',
          title: 'Kavod — "Glory"',
          script: 'כָּבוֹד',
          translit: '<strong>Kavod</strong> · glory; weight; honor; splendor; manifest presence',
          description:
            'Kavod is not a thin, ethereal concept. It is heavy, weighty, substantial. When the heavens declare God&apos;s glory, they are declaring the manifest splendor and presence of God, the weight of His reality.',
        },
        {
          kind: 'commentary',
          id: 'ps19-day-unto-day',
          html:
            '"Day unto day uttereth speech, and night unto night sheweth knowledge." The transmission is constant. Day passes the witness to night. Night passes it to the next day. There is no cessation. Day and night, in unbroken succession, testify to God&apos;s power.',
        },
        {
          kind: 'commentary',
          id: 'ps19-no-speech',
          html:
            '"There is no speech nor language, where their voice is not heard." The testimony of creation is universal. Every nation, every tribe, every person who looks up at the sky hears this witness. No language barrier exists. The heavens speak in a tongue that transcends all human speech.',
        },
        {
          kind: 'commentary',
          id: 'ps19-sun',
          html:
            'The sun is described as a bridegroom coming out of his chamber, rejoicing as a strong man to run a race. The sun is the centerpiece of creation&apos;s testimony—its light reaches to the ends of the earth. Nothing is hidden from its heat. The entire cosmos is illuminated by the sun that God has set in the heavens.',
        },
        {
          kind: 'carry',
          html:
            'Look at the sky. Watch the sunrise or sunset. Observe the order of the stars. Feel the warmth of the sun. All of this is testimony to a Creator. Creation speaks a language you can understand without ever opening a Scripture. The question is whether you will listen.',
        },
      ],
    },

    {
      ref: 'Psalm 19:7–11',
      title: 'The Perfect Law of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(7, 'The law of the Lord is perfect, converting the soul: the testimony of the Lord is sure, making wise the simple.'),
            plain(8, 'The statutes of the Lord are right, rejoicing the heart: the commandment of the Lord is pure, enlightening the eyes.'),
            plain(9, 'The fear of the Lord is clean, enduring for ever: the judgments of the Lord are true and righteous altogether.'),
            plain(10, 'More to be desired are they than gold, yea, than much fine gold: sweeter also than honey and the honeycomb.'),
            plain(11, 'Moreover by them is thy servant warned: and in keeping them there is great reward.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps19-law',
          html:
            'From creation, David turns to the law of God. And here he uses the language of perfection: "The law of the Lord is perfect." Perfect—complete, without flaw, lacking nothing. And what does this perfect law do? It converts the soul. It transforms. It changes the innermost being.',
        },
        {
          kind: 'commentary',
          id: 'ps19-testimony',
          html:
            '"The testimony of the Lord is sure, making wise the simple." The law of God is not tentative or conditional. It is sure, certain, reliable. And it does not require pre-existing wisdom to understand it. It makes wise the simple—those who come to it without knowledge find understanding through it.',
        },
        {
          kind: 'hebrew',
          id: 'ps19-mitzvah',
          title: 'Mitzvah — "Commandment"',
          script: 'מִצְוָה',
          translit: '<strong>Mitzvah</strong> · commandment; precept; instruction',
          description:
            'A mitzvah is not merely a rule imposed from outside. It is an instruction, a guide, a direction toward life. When God commands, He is pointing humanity toward flourishing, toward the path that leads to life.',
        },
        {
          kind: 'commentary',
          id: 'ps19-rejoice',
          html:
            'The statutes of the Lord are right, rejoicing the heart. The commandment of the Lord is pure, enlightening the eyes. The fear of the Lord is clean, enduring forever. David piles on the language of joy and purity and permanence. God&apos;s law is not burdensome. It is delightful.',
        },
        {
          kind: 'commentary',
          id: 'ps19-desire',
          html:
            '"More to be desired are they than gold...sweeter also than honey." This is not obligation speaking. This is desire. David declares that the law of God is more precious than anything the world values. It is sweeter than honey, more valuable than gold. This law is treasure.',
        },
        {
          kind: 'christ',
          id: 'ps19-christ-word',
          title: 'Christ Connection — The Perfect Word',
          html:
            'In Romans 1:20, Paul quotes this psalm: the heavens declare God&apos;s invisible attributes. But Paul also writes that Christ is "the image of the invisible God" (Colossians 1:15). Christ is the perfect embodiment of all the law points toward. He is the living, breathing expression of God&apos;s character. To follow Christ is to follow the perfect law made flesh.',
        },
        {
          kind: 'reflection',
          id: 'ps19-convert',
          prompt: 'How has God&apos;s law converted your soul—changed you from the inside out? What is one commandment you have found not burdensome but life-giving?',
        },
      ],
    },

    {
      ref: 'Psalm 19:12–14',
      title: 'Clean Hands, Pure Heart',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(12, 'Who can understand his errors? cleanse thou me from secret faults.'),
            plain(13, 'Keep back thy servant also from presumptuous sins; let them not have dominion over me: then shall I be upright, and I shall be innocent from the great transgression.'),
            plain(14, 'Let the words of my mouth, and the meditation of my heart, be acceptable in thy sight, O Lord, my strength, and my redeemer.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ps19-understand',
          html:
            'David asks: "Who can understand his errors?" He is not asking whether he has errors. He is asking who can fully perceive all the ways he has gone wrong. Some errors are hidden even from ourselves. So David pleads: "Cleanse thou me from secret faults." Only God can see and cleanse what is hidden.',
        },
        {
          kind: 'commentary',
          id: 'ps19-presumptuous',
          html:
            'And he asks God to keep him back from presumptuous sins—deliberate transgressions, sins committed with full knowledge of their wrongness. If such sins have dominion over him, he cannot be upright. He cannot be innocent. So he asks God to guard him, to keep him from deliberate rebellion.',
        },
        {
          kind: 'commentary',
          id: 'ps19-words',
          html:
            'And finally, the psalm closes with a prayer for integration: "Let the words of my mouth, and the meditation of my heart, be acceptable in thy sight." David asks that his outward speech and his inner thoughts be aligned, that both be pure and acceptable to God. This is the goal: to be whole, unified, entirely directed toward God.',
        },
        {
          kind: 'carry',
          html:
            'The heavens declare God&apos;s glory. God&apos;s law restores the soul. Yet you still struggle with hidden faults, secret sins, inner corruption. The answer is not to ignore God&apos;s law but to invite Him to cleanse you through it. Let His word convert you from the inside out.',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'The heavens declare the glory of God. The law of the Lord is perfect, converting the soul.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Psalm 19 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-psalms-19',
      kind: 'study',
      source: 'Sefaria',
      label: 'Psalms 19 — Hebrew & Commentaries',
      url: 'https://www.sefaria.org/Psalms.19',
      description: 'Dual hymn on creation and Torah with Jewish commentary.',
    },
    {
      id: 'bible-odyssey-torah-psalms',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Torah Praise Psalms',
      url: 'https://www.bibleodyssey.org/dictionary/psalms/',
      description: 'Psalms celebrating God&apos;s law and instruction.',
    },
    {
      id: 'intertextual-psalms-19-nt',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Psalm 19 in Romans & Evangelism',
      url: 'https://intertextual.bible/text/psalm-19',
      description: 'Paul quotes Psalm 19 on universal witness to God.',
    },
  ],

  hasHebrew: true,
};
