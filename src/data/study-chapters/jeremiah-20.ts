import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Jeremiah 20 — The Word as Burning Fire in the Bones
 *
 * Pashur smites Jeremiah and puts him in the stocks. Yet Jeremiah declares:
 * "His word was in mine heart as a burning fire shut up in my bones, and I was
 * weary with forbearing, and I could not stay." The prophet cannot suppress the
 * word God has given him. Even under persecution, the burning word compels him
 * to speak.
 */
export const JEREMIAH_20: RichChapterContent = {
  bookSlug: 'jeremiah',
  bookName: 'Jeremiah',
  chapter: 20,

  estimatedMinutes: { beginner: 5, intermediate: 8, deep: 10 },
  topicTags: ['lament', 'judgment', 'hope', 'calling'],
  opener: {
    topical: true,
    caption: 'Jeremiah 20',
  },
  intros: [
    'Pashur, the chief priest at the Lord&apos;s house, hears Jeremiah prophesying and smites him, putting him in the stocks. It is a public humiliation, a silencing of the prophet. Yet Jeremiah&apos;s response is not to abandon his calling. Instead, he speaks of the word burning within him like fire that cannot be contained. The word of God, once given, cannot be suppressed. Even the prophet himself, weary of bearing it, cannot refrain from speaking.',
    'The chapter moves between Jeremiah&apos;s declaration of the burning word and his complaint to God — "Cursed be the day wherein I was born." He is torn between his calling and his suffering, between the fire of God&apos;s word and the pain of rejection. Yet he ultimately returns to trust: "But the Lord is with me as a mighty terrible one."',
  ],

  bottomShare: {
    label: 'Share Jeremiah 20',
    quote:
      '"His word was in mine heart as a burning fire shut up in my bones." The prophet cannot suppress the word God has given him, though it brings him persecution.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Jeremiah 20 · Study Guide',
  },

  sections: [
    /* ─── Jeremiah 20:1–6 — Pashur Smites Jeremiah ────────────────────────── */
    {
      ref: 'Jeremiah 20:1–6',
      title: 'Persecution by the Priest',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 1,
              spans: [
                t('Now Pashur the son of Immer the priest, who was also chief governor in the house of the Lord, heard that Jeremiah prophesied these things.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('Then Pashur smote Jeremiah the prophet, and put him in the stocks that were in the high gate of Benjamin, which was by the house of the Lord.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And it came to pass on the morrow, that Pashur brought forth Jeremiah out of the stocks. Then said Jeremiah unto him, The Lord hath not called thy name Pashur, but Magor-missabib.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('For thus saith the Lord, Behold, I will make thee a terror to thyself, and to all thy friends: and they shall fall by the sword of their enemies, and thine eyes shall behold it: and I will give all Judah into the hand of the king of Babylon, and he shall carry them captive into Babylon, and shall slay them with the sword.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Moreover I will give all the wealth of this city, and all the labours thereof, and all the precious things thereof, and all the treasures of the kings of Judah will I give into the hand of their enemies, which shall spoil them, and take them, and carry them to Babylon.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And thou, Pashur, and all that dwell in thine house shall go into captivity: and thou shalt come to Babylon, and there thou shalt die, and shalt be buried there, thou, and all thy friends, to whom thou hast prophesied lies.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer20-pashur',
          html: 'Pashur, chief priest, smites Jeremiah for prophesying. It is an act of authority wielded against truth. Jeremiah responds, not with recrimination, but with a new name for Pashur: "Magor-missabib," meaning "Terror on every side." The name is itself a prophecy — Pashur will become a terror to himself and his friends. The priest who tried to silence the prophet will be silenced by terror[res:babylonian-chronicle].',
        },
        {
          kind: 'hebrew',
          id: 'jer20-magor',
          title: 'Magor-Missabib — "Terror on Every Side"',
          script: 'מָגוֹר־מִסָּבִיב',
          translit: '<strong>Magor-Missabib</strong> · terror; fear on every side',
          description:
            'The new name Jeremiah gives to Pashur is a word-play and a prophetic renaming. It echoes throughout the rest of Jeremiah — "fear on every side" becomes the experience of those who reject God&apos;s word and persecute His prophets.',
        },
        {
          kind: 'carry',
          html: 'Those who try to silence truth do not succeed; they only multiply their own terror. Pashur thought he could stop Jeremiah by putting him in the stocks. But the word of God cannot be contained. And his attempt to silence truth becomes the occasion for his own judgment.',
        },
        {
          kind: 'reflection',
          id: 'jer20-persecute',
          prompt: 'Pashur persecutes Jeremiah for speaking truth. When have you been tempted to silence truth-telling? What did it cost you?',
        },
      ],
    },

    /* ─── Jeremiah 20:7–10 — The Prophet Deceived? ────────────────────────── */
    {
      ref: 'Jeremiah 20:7–10',
      title: 'Deceived or Burning?',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 7,
              spans: [
                t('O Lord, thou hast deceived me, and I was deceived: thou art stronger than I, and hast prevailed: I am in derision daily, every one mocketh me.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('For since I spake, I cried out, I cried violence and spoil; because the word of the Lord was made a reproach unto me, and a derision, daily.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Then I said, I will not make mention of him, nor speak any more in his name. But '),
                hp('his word was in mine heart as a burning fire shut up in my bones', 'jer20-burning-fire'),
                t(', and I was weary with forbearing, and I could not stay.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('For I heard the defaming of many, fear on every side: Report, say they, and we will report it. All my familiars watched for my halting, saying, Peradventure he will be enticed, and we shall prevail against him, and we shall take our revenge upon him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer20-burning-fire',
          html: 'Jeremiah has decided not to speak anymore — the reproach and derision are too much. But he cannot keep silent. The word burns within him like a fire shut up in his bones. He is "weary with forbearing" — exhausted from trying to contain it. The word of God is not a burden he can set down; it is a burning that consumes him[res:jer31-hebrews-intertextual].',
        },
        {
          kind: 'commentary',
          id: 'jer20-fear-on-every-side',
          html: 'Jeremiah hears "defaming of many, fear on every side" — the phrase echoes back to Pashur&apos;s name, Magor-missabib. Those who oppose Jeremiah are themselves living in fear, suspicion, and defamation. They plot against him, watching for him to stumble so they can take their revenge[res:lachish-letters].',
        },
        {
          kind: 'carry',
          html: 'The prophet experiences both the compulsion of the word and the suffering it brings. Jeremiah wants to stop prophesying, but he cannot. The word is a fire that consumes him from within. And we who have tasted the word of God in our own hearts know this experience — we may be exhausted by speaking truth, but silence becomes impossible. The word burns.',
        },
        {
          kind: 'reflection',
          id: 'jer20-burning-word',
          prompt: 'Jeremiah cannot suppress the word of God burning in his bones. What word of God burns in you? What would it cost you to keep silent?',
        },
      ],
    },

    /* ─── Jeremiah 20:11–13 — Trust Returns ───────────────────────────────── */
    {
      ref: 'Jeremiah 20:11–13',
      title: 'The Mighty Terrible One',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 11,
              spans: [
                t('But the Lord is with me as a mighty terrible one: therefore my persecutors shall stumble, and they shall not prevail: they shall be greatly ashamed; for they shall not prosper: their everlasting confusion shall never be forgotten.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('But, O Lord of hosts, that triest the righteous, and seest the reins and the heart, let me see thy vengeance on them: for unto thee have I opened my cause.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Sing unto the Lord, praise ye the Lord: for he hath delivered the soul of the poor from the hand of the evildoers.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer20-mighty-terrible',
          html: 'In the midst of his suffering, Jeremiah returns to trust. "The Lord is with me as a mighty terrible one." The same God who gives the burning word is present to protect the prophet. The persecutors will stumble; they will not prevail. Their shame will be everlasting.',
        },
        {
          kind: 'commentary',
          id: 'jer20-reins-heart',
          html:
            'Jeremiah appeals to God as the one "that triest the righteous, and seest the reins and the heart." God sees not the outward success or failure, but the inner integrity of the one faithful to His word. Jeremiah has opened his cause to God; he leaves his vindication in God&apos;s hands.',
        },
        {
          kind: 'christ',
          id: 'jer20-christ-persecuted',
          title: 'Christ Connection — The Word Made Flesh',
          html:
            'Jesus embodies the burning word that cannot be silenced. He is "the Word made flesh" (John 1:14). He is mocked, scourged, crucified — yet the word He carries cannot be killed. His resurrection vindicates the word. And He teaches His disciples: "Blessed are ye, when men shall revile you, and persecute you, and shall say all manner of evil against you falsely, for my sake" (Matthew 5:11). The burning word in the prophet finds its ultimate expression in Christ.',
        },
        {
          kind: 'carry',
          html:
            'Jeremiah does not end in despair. Even as he recounts his suffering, he turns to praise: "Sing unto the Lord, praise ye the Lord: for he hath delivered the soul of the poor from the hand of the evildoers." This is the way of the faithful — through suffering to praise, through persecution to vindication.',
        },
        {
          kind: 'reflection',
          id: 'jer20-vindication',
          prompt: 'Jeremiah moves from despair to praise, trusting in God&apos;s vindication. When have you moved through suffering to trust in God&apos;s faithfulness?',
        },
      ],
    },

    /* ─── Jeremiah 20:14–18 — Cursed Be the Day ──────────────────────────── */
    {
      ref: 'Jeremiah 20:14–18',
      title: 'The Lament Returns',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            {
              number: 14,
              spans: [
                t('Cursed be the day wherein I was born: let not the day wherein my mother bare me be blessed.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('Cursed be the man who brought tidings to my father, saying, A man child is born unto thee; making him very glad.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And let that man be as the cities which the Lord overthrew, and repented not: and let him hear the cry in the morning, and the shouting at noontide;'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Because he slew me not from the womb: or that my mother might have been my grave, and her womb to be always great with me.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Wherefore came I forth out of the womb to see labour and sorrow, that my days should be consumed with shame?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'jer20-birth-cursed',
          html:
            'After hope, Jeremiah returns to lament. He curses the day of his birth, wishes he had never been born. This is not weakness; it is honest expression of the cost of faithfulness. The prophet has tasted both the burning word and the pain of rejection. He cannot pretend the suffering is not real.',
        },
        {
          kind: 'commentary',
          id: 'jer20-labour-sorrow',
          html:
            'The phrase "labour and sorrow" captures the prophet&apos;s condition. He has seen the coming destruction of his people, has borne the weight of a message no one wants to hear, has suffered persecution for speaking truth. His life has been labor and sorrow.',
        },
        {
          kind: 'carry',
          html:
            'Even faithful servants of God do not escape depression, despair, or the deep weariness that comes from speaking truth in a world that rejects it. Jeremiah&apos;s honesty about his pain shows us that faithfulness does not mean perpetual cheerfulness. Sometimes the faithful cry out: "Why was I born?"',
        },
        {
          kind: 'reflection',
          id: 'jer20-why-born',
          prompt: 'Jeremiah curses the day of his birth. What moments in your own faithful walk have brought you to such despair? How did you move forward?',
        },
      ],
    },

    /* ─── Jeremiah 20 · The Burning Word ─────────────────────────────────── */
    {
      ref: 'Jeremiah 20 · All',
      title: 'Cannot Be Suppressed',
      blocks: [
        {
          kind: 'commentary',
          id: 'jer20-burning-constant',
          html:
            'The chapter presents the prophet as a man torn between his calling and his suffering, between the burning word he cannot suppress and the derision he endures. Yet it is precisely this tension that makes him a true prophet. He does not prophesy for comfort or acceptance. He prophesies because the word burns within him, consuming him, compelling him to speak.',
        },
        {
          kind: 'divider',
        },
      ],
    },
  ],  resources: [
    {
      id: 'babylonian-chronicle',
      kind: 'museum',
      source: 'British Museum',
      label: 'Babylonian Chronicle (Jerusalem siege)',
      url: 'https://www.britishmuseum.org/collection/object/Y_EA25091',
      description: 'Cuneiform tablet documenting the Babylonian assault on Jerusalem in 597 and 587 BCE.',
    },
    {
      id: 'jer31-hebrews-intertextual',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Jeremiah 31 ↔ Hebrews 8:8–12',
      url: 'https://intertextual.bible/text/jeremiah-31/hebrews-8',
      description: 'Side-by-side comparison of the new covenant promise in Jeremiah quoted in Hebrews.',
    },
    {
      id: 'lachish-letters',
      kind: 'archaeology',
      source: 'Israel Museum',
      label: 'Lachish Letters',
      url: 'https://www.imj.org.il/en/collections/lachish-letters',
      description: 'Ancient inscribed potsherds from the Judean siege of Lachish (587 BCE), contemporary with Jeremiah.',
    }
  ],
};
