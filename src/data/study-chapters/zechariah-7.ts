import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Zechariah 7 — The Question of Fasting and the Heart
 */
export const ZECHARIAH_7: RichChapterContent = {
  bookSlug: 'zechariah',
  bookName: 'Zechariah',
  chapter: 7,

  intros: [
    'After the visions, Zechariah turns to answer a question posed by the people returning from exile. Should they continue the fast that commemorated the destruction of Jerusalem? The prophet&apos;s answer redirects their focus from external ritual to internal righteousness. God does not require fasts disconnected from justice, mercy, and truth. The heart matters more than the calendar.',
  ],

  sections: [
    {
      ref: 'Zechariah 7:1–7',
      title: 'The Question of Fasting',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(1, 'And it came to pass in the fourth year of king Darius, that the word of the Lord came unto Zechariah in the fourth day of the ninth month, even in Chisleu;'),
            plain(3, 'And to speak unto the priests which were in the house of the Lord of hosts, and to the prophets, saying, Should I weep in the fifth month, separating myself, as I have done these so many years?'),
            plain(4, 'Then came the word of the Lord of hosts unto me, saying,'),
            plain(5, 'Speak unto all the people of the land, and to the priests, saying, When ye fasted and mourned in the fifth and seventh month, even those seventy years, did ye at all fast unto me, even to me?'),
            plain(6, 'And when ye did eat, and when ye did drink, did not ye eat for yourselves, and drink for yourselves?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'zech7-fast-question',
          html: 'The people ask whether they should continue fasting in the fifth month to commemorate the destruction of the Temple. It&apos;s a reasonable question—they have observed this fast for seventy years. But God&apos;s response challenges them: Was this fast truly for Me, or for yourselves? When you ate, you ate for yourselves. The external practice is hollow if the heart is not engaged.',
        },
        {
          kind: 'hebrew',
          id: 'zech7-tzom',
          title: 'Tzom — "Fast"',
          script: 'צום',
          translit: '<strong>Tzom</strong> · fast; abstinence from food; self-denial',
          description: 'Fasting in Scripture is often a sign of repentance or seeking God. But God makes clear that the fast is meaningless without genuine turning of the heart.',
        },
        {
          kind: 'christ',
          id: 'zech7-christ-heart',
          title: 'Christ Connection — Heart-Religion Over Ritual',
          html: 'Christ echoes this teaching throughout His ministry, confronting the Pharisees for their empty observances. "This people draweth nigh unto me with their mouth, and honoureth me with their lips; but their heart is far from me." True religion is a matter of the heart, not outward show.',
        },
        {
          kind: 'carry',
          html: 'Any spiritual discipline—prayer, fasting, service—becomes empty if the heart is not involved. God sees not just your actions but the intentions behind them. The question to ask yourself is not "Am I doing the right thing?" but "Is my heart engaged with God in this?"',
        },
        {
          kind: 'reflection',
          id: 'zech7-reflect-heart',
          prompt: 'What spiritual practices do you observe? Are they expressions of genuine turning toward God, or have they become mere habit? What would it mean to engage your heart more fully in them?',
        },
      ],
    },

    {
      ref: 'Zechariah 7:8–14',
      title: 'The Word Written on the Heart',
      blocks: [
        {
          kind: 'scripture',
          chapter: 7,
          lines: [
            plain(8, 'And the word of the Lord came unto Zechariah, saying,'),
            plain(9, 'Thus speaketh the Lord of hosts, saying, Execute true judgment, and shew mercy and compassions every man to his brother:'),
            plain(10, 'And oppress not the widow, nor the fatherless, the stranger, nor the poor; and let none of you imagine evil against his brother in your heart.'),
            plain(11, 'But they refused to hearken, and pulled away the shoulder, and stopped their ears, that they should not hear.'),
            plain(12, 'Yea, they made their hearts as an adamant stone, lest they should hear the law, and the words which the Lord of hosts hath sent in his spirit by the former prophets: therefore came a great wrath from the Lord of hosts.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'zech7-judgment-mercy',
          html: 'God tells Israel what He truly desires: true judgment, mercy, compassion, protection for the widow and orphan, and integrity of heart. These are the fruit of a genuinely turned heart. Yet Israel refused to listen. They hardened their hearts like adamant stone, pulling away from the prophets who brought God&apos;s word. Their refusal to listen brought God&apos;s wrath.',
        },
        {
          kind: 'commentary',
          id: 'zech7-adamant',
          html: 'A heart hardened like adamant—harder than flint—cannot receive God&apos;s word. Israel made a choice to resist the prophets and the purposes of God. But Zechariah is writing to a new generation, a generation returning from exile. The question is: will they choose differently? Will they listen and let their hearts be shaped by justice and mercy?',
        },
        {
          kind: 'hebrew',
          id: 'zech7-shomer',
          title: 'Shomer — "Guard" (Hearken)',
          script: 'שמר',
          translit: '<strong>Shomer</strong> · to guard; to listen; to obey',
          description: 'To guard God&apos;s word is to listen to it and let it shape your life. Israel refused to guard, to listen, to obey. The consequence was exile and separation from God.',
        },
        {
          kind: 'christ',
          id: 'zech7-christ-listen',
          title: 'Christ Connection — The One Who Listens and Obeys',
          html: 'Christ is the one who perfectly listens to God&apos;s word and obeys it. "The Father loveth me, because I lay down my life," He says. Unlike hardened Israel, Christ&apos;s heart is always open to God&apos;s word and purposes.',
        },
        {
          kind: 'carry',
          html: 'The history of Israel is a warning against hardening your heart. When God speaks—through Scripture, through conscience, through circumstances—you have a choice: to listen or to pull away your shoulder in refusal. The people returning from exile had a chance to choose differently. So do you.',
        },
        {
          kind: 'reflection',
          id: 'zech7-reflect-listen',
          prompt: 'In what ways do you resist God&apos;s word or the call to justice and mercy? What would it mean for you to soften your heart and truly listen?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'Execute true judgment, and shew mercy and compassions every man to his brother...oppress not the widow, nor the fatherless, the stranger, nor the poor.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Zechariah 7 · Study Guide',
  },

  hasHebrew: true,
};
