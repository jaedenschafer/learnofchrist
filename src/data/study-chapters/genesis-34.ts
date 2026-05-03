import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 34 — Dinah, Shechem, and the violence that follows.
 *
 * This is one of the hardest chapters in Genesis. A young woman is violated.
 * A young man desires her and proposes marriage. Her brothers respond with
 * deception and slaughter. The chapter ends with a curse that will follow
 * Simeon and Levi through Israel&apos;s history.
 *
 * We read it with grief, not vindication. The text does not endorse the
 * brothers&apos; violence. Jacob curses it at the end of his life (Gen 49:5-7).
 * Christ Connections here are lament-shaped, not triumphant.
 */
export const GENESIS_34: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 34,

  estimatedMinutes: { beginner: 7, intermediate: 10, deep: 13 },
  intros: [
    'Genesis 34 is a hard chapter. A young woman named Dinah goes out to see the daughters of the land, and Shechem, the prince of the country, sees her, takes her, and violates her. Then he wants to marry her. The text does not soften what happened — it uses a word that means rape — and we should not soften it either.',
    'What follows is a chapter of attempted negotiation, deception, and mass slaughter. Jacob remains silent while his daughter is violated. Her brothers trick an entire city into a covenant of circumcision, then on the third day while the men are weak from the ritual, Simeon and Levi massacre every male. [res:bibleodyssey-jacob-israel] The chapter ends with the brothers defending their violence. But Jacob curses them. The text does not approve what they did. We are meant to sit with the gravity of sexual violence and the way vengeance cycles compound suffering rather than heal it.',
  ],

  bottomShare: {
    label: 'Share Genesis 34',
    quote:
      'A young woman is violated. Her brothers exact a terrible revenge. The chapter shows Israel&apos;s sin as Israel&apos;s sin — and makes clear that even the chosen are not innocent. Romans 3:23.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 34 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-genesis-34',
      kind: 'lexicon',
      source: 'Sefaria',
      label: 'Genesis 34 · Commentaries & Translations',
      url: 'https://www.sefaria.org/Genesis.34',
      description: 'Rabbinic and academic commentaries on sexual violence and the massacre at Shechem.',
    },
    {
      id: 'iaa-israel-sites',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'Canaanite and Patriarchal Sites',
      url: 'https://www.antiquities.org.il/Article/ArticleFull/1',
      description: 'Archaeological records of settlements and family structures in Iron Age Canaan.',
    },
    {
      id: 'bibleodyssey-jacob-israel',
      kind: 'study',
      source: 'Bible Odyssey',
      label: 'Jacob &amp; Israel: Deception, Wrestling, &amp; Divine Naming',
      url: 'https://www.bibleodyssey.org/en/passages/related-articles/Jacob-Israel',
      description: 'Theological exploration of Jacob&apos;s role in covenant continuation and God&apos;s sovereign choice.',
    },
  ],

  sections: [
    /* ─── Genesis 34:1–3 — Dinah Is Violated ─────────────────────────── */
    {
      ref: 'Genesis 34:1–3',
      title: 'Dinah Is Violated',
      blocks: [
        {
          kind: 'scripture',
          chapter: 34,
          lines: [
            {
              number: 1,
              spans: [
                t('And Dinah the daughter of Leah, which she bare unto Jacob, went out to see the daughters of the land.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And when Shechem the son of Hamor the Hivite, prince of the country, saw her, he '),
                hy('took her, and lay with her', 'hebrew-anah'),
                t(', and '),
                hy('defiled her', 'hebrew-anah'),
                t('.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And his soul '),
                hg('clave unto Dinah', 'c-love-after-violence'),
                t(', the daughter of Jacob, and he loved the damsel, and spake kindly unto her.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-anah',
          title: 'Anah — &ldquo;humbled, violated, afflicted&rdquo;',
          script: 'עָנָה',
          translit: '<strong>anah</strong> · to humble, oppress, afflict',
          description:
            'The same verb is used in Deuteronomy 22:24 and 2 Samuel 13:14 for rape. The text does not call it seduction or love. It calls it violation. Hebrew Scripture is clear about the language.',
        },
        {
          kind: 'commentary',
          id: 'c-love-after-violence',
          html:
            'The text reports that Shechem then loved Dinah and spoke kindly to her. But the violence came first. It is crucial to understand the order: violation, then tenderness. Love that begins as an assault is not love. The narrative reports what happened — Shechem&apos;s later affection for Dinah — but it does not redeem the act that came before it. [res:sefaria-genesis-34] Dinah is given no voice in this chapter. She is taken, violated, and then appears only as the object of other people&apos;s negotiations and anger.',
        },
        {
          kind: 'carry',
          html:
            'If you have known violence like this, the quiet tenderness that sometimes follows can be confusing — can even make you doubt whether the first act was truly violence. It was. The later kindness does not erase it. And if you are struggling to name something in your own story, the Bible names it here without flinching: violation is violation, whether it is followed by affection or not.',
        },
        {
          kind: 'reflection',
          id: 'gen34-voice',
          prompt:
            'What strikes you about Dinah&apos;s silence in this chapter? If Dinah could speak one sentence about what happened to her, what would it be?',
        },
      ],
    },

    /* ─── Genesis 34:4–12 — Hamor Negotiates ──────────────────────── */
    {
      ref: 'Genesis 34:4–12',
      title: 'Hamor Negotiates',
      blocks: [
        {
          kind: 'scripture',
          chapter: 34,
          lines: [
            {
              number: 4,
              spans: [t('And Shechem spake unto his father Hamor, saying, Get me this damsel to wife.')],
            },
            {
              number: 5,
              spans: [t('And Jacob heard that he had defiled Dinah his daughter: now his sons were with his cattle in the field: and Jacob held his peace until they were come.')],
            },
            {
              number: 6,
              spans: [t('And Hamor the father of Shechem went out unto Jacob to commune with him.')],
            },
            {
              number: 7,
              spans: [
                t('And the sons of Jacob came out of the field when they heard it: and the men were grieved, and they were very wroth, because he had '),
                hg('wrought folly in Israel', 'c-nebalah'),
                t(' in lying with Jacob&apos;s daughter; which thing ought not to be done.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen34-deception-deceit',
          html:
            'Dinah&apos;s brothers begin their deception; now they execute it—guile becomes the instrument of their vengeance.',
        },
        {
          kind: 'scripture',
          chapter: 34,
          lines: [
            {
              number: 8,
              spans: [
                t('And Hamor communed with them, saying, The soul of my son Shechem longeth for your daughter: I pray you give her unto him to wife.'),
              ],
            },
            {
              number: 9,
              spans: [t('And make ye marriages with us, and give your daughters unto us, and take our daughters unto you.')],
            },
            {
              number: 10,
              spans: [
                t('And ye shall dwell with us: and the land shall be before you; dwell and trade ye therein, and '),
                hg('get you possessions therein', 'c-possessions'),
                t('.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And Shechem said unto her father, Let me find grace in your eyes, and whatsoever ye shall say unto me I will give.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Ask me ever so much dowry and gift, and I will give according as ye shall say unto me: but give me the damsel to wife.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-nebalah',
          html:
            'The brothers call the act <em>nebalah</em> — &ldquo;folly,&rdquo; &ldquo;outrage,&rdquo; &ldquo;wanton violation.&rdquo; This is the language for the worst kind of moral transgression. The brothers are correct in their assessment of what Shechem did. The question is what they will do about it.',
        },
        {
          kind: 'commentary',
          id: 'c-possessions',
          html:
            'Hamor&apos;s proposal is remarkably generous — intermarriage, shared land, mutual possession and benefit. He is also offering something that, from a negotiating standpoint, makes the violation transactional: your daughter for land and wealth. Dinah becomes a piece in a deal. Her voice is never asked for. [res:iaa-israel-sites] The men who violated her and the men of her family conduct a business negotiation while she remains silent.',
        },
        {
          kind: 'commentary',
          id: 'jacob-silence',
          html:
            'Jacob held his peace. In verse 5, when he hears the news, he says nothing. He will not speak until after his sons have acted. That silence is not neutrality — it is a kind of permission. Later, his sons will defend their revenge with a rhetorical question: &ldquo;Should he deal with our sister as with an harlot?&rdquo; But Jacob never answers that question. He curses them instead (Gen 49:5-7). His silence in this moment may be the greatest injury of all.',
        },
        {
          kind: 'carry',
          html:
            'When silence is a choice — when you know harm has been done and you do not speak — that silence becomes a form of complicity. If you have been silent in a moment when speaking mattered, you know the weight of it. And if you are waiting for someone to speak for you when you cannot speak for yourself, do not assume their silence means agreement. It may only mean fear. Dinah had no one to advocate for her. That injustice echoes.',
        },
        {
          kind: 'reflection',
          id: 'gen34-silence',
          prompt:
            'When have you been silenced by an injustice? When have you chosen silence instead of speaking? What would speaking have cost? What did the silence cost?',
        },
      ],
    },

    /* ─── Genesis 34:13–19 — The Deception of Circumcision ──────────── */
    {
      ref: 'Genesis 34:13–19',
      title: 'The Deception of Circumcision',
      blocks: [
        {
          kind: 'scripture',
          chapter: 34,
          lines: [
            {
              number: 13,
              spans: [
                t('And the sons of Jacob answered Shechem and Hamor his father '),
                hg('deceitfully', 'c-deceit-begins'),
                t(', and said, Because he had defiled Dinah their sister:'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And they said unto them, We cannot do this thing, to give our sister to one that is '),
                hy('uncircumcised', 'hebrew-circumcision'),
                t('; for that were a reproach unto us:'),
              ],
            },
            {
              number: 15,
              spans: [
                t('But in this will we consent unto you: If ye will be as we are, if every male of you be circumcised;'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'genesis-34-78mid-1',
          html:
            'The narrative shifts here — a new scene, a new voice in the room, the same patient God moving the story forward.',
        },
        {
          kind: 'scripture',
          chapter: 34,
          lines: [
            {
              number: 16,
              spans: [
                t('Then will we give our daughters unto you, and we will take your daughters to us, and we will dwell with you, and we will become one people.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('But if ye will not hearken unto us, to be circumcised; then will we take our daughter, and we will be gone.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And their words pleased Hamor, and Shechem Hamor&apos;s son.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And the young man deferred not to do the thing, because he had delight in Jacob&apos;s daughter: and he was more honourable than all the house of his father.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-deceit-begins',
          html:
            'The brothers answer &ldquo;deceitfully.&rdquo; They are already planning what they will do. The proposal is not genuine. They are using the sign of the covenant — circumcision, the mark God gave Abraham as a sign of relationship with Him — as a weapon. The religious practice becomes a trap.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-circumcision',
          title: 'Circumcision — a Covenant Sign Weaponized',
          script: 'מִלָה',
          translit: '<strong>milah</strong> · circumcision',
          description:
            'Circumcision was the sign of Abraham&apos;s covenant with God (Gen 17). Here it becomes the instrument of deception and mass killing. The brothers weaponize the holiest sign they have. The text does not endorse this. It is presented as a perversion of what the covenant sign was meant to be.',
        },
        {
          kind: 'reflection',
          id: 'gen34-weaponized',
          prompt:
            'What holy things in your tradition have you seen twisted into weapons? What does that damage cost?',
        },
      ],
    },

    /* ─── Genesis 34:20–29 — The Slaughter ──────────────────────────── */
    {
      ref: 'Genesis 34:20–29',
      title: 'The Third Day',
      blocks: [
        {
          kind: 'scripture',
          chapter: 34,
          lines: [
            {
              number: 20,
              spans: [
                t('And Hamor and Shechem his son came unto the gate of their city, and communed with the men of their city, saying,'),
              ],
            },
            {
              number: 21,
              spans: [
                t('These men are peaceable with us; therefore let them dwell in the land, and trade therein; for the land, behold, it is large enough for them; let us take their daughters to us for wives, and let us give them our daughters.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('Only herein will the men consent unto us for to dwell with us, to be one people, if every male among us be circumcised, as they are circumcised.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('Shall not their cattle and their substance and every beast of theirs be ours? only let us consent unto them, and they will dwell with us.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And unto Hamor and unto Shechem his son hearkened all that went out of the gate of his city; and every male was circumcised, all that went out of the gate of his city.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen34-plunder-aftermath',
          html:
            'The city is plundered; the brothers justify themselves to Jacob—violence is done, but the aftermath lingers.',
        },
        {
          kind: 'scripture',
          chapter: 34,
          lines: [
            {
              number: 25,
              spans: [
                t('And it came to pass on the '),
                hy('third day', 'c-third-day'),
                t(', when they were sore, that two of the sons of Jacob, Simeon and Levi, Dinah&apos;s brethren, took each man his sword, and came upon the city boldly, and slew all the males.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And they slew Hamor and Shechem his son with the edge of the sword, and took Dinah out of Shechem&apos;s house, and went out.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('The sons of Jacob came upon the slain, and spoiled the city, because they had defiled their sister.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('They took their sheep, and their oxen, and their asses, and that which was in the city, and that which was in the field,'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And all their wealth, and all their little ones, and their wives took they captive, and spoiled all that was in their houses.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-third-day',
          html:
            'On the third day, while the men of Shechem are weak and in pain from circumcision, Simeon and Levi attack. They slaughter not only Shechem but the entire male population of the city. The violence is not proportional. It is not justice. It is vengeance that destroys an entire community and enslaves their women and children. The text reports what they did. It does not approve it.',
        },
        {
          kind: 'carry',
          html:
            'Vengeance has a terrible logic: it feels necessary, it feels righteous, it feels like the only language that will be heard. And it destroys far more than the one who caused the harm. Dinah is rescued, but her family has now made enemies of the whole region. The cycle of violence has begun. If you are in a place of rage right now, where a wrong seems to demand a response in kind, the blood of an entire city is what that path leads to. There may be a way through your pain that does not require that much death.',
        },
        {
          kind: 'reflection',
          id: 'gen34-vengeance',
          prompt:
            'Where in your life have you seen vengeance cycle through a family or community? What would have broken the cycle?',
        },
      ],
    },

    /* ─── Genesis 34:30–31 — Jacob&apos;s Rebuke and the Brothers&apos; Defiance ──── */
    {
      ref: 'Genesis 34:30–31',
      title: 'Judgment and Defiance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 34,
          lines: [
            {
              number: 30,
              spans: [
                t('And Jacob said to Simeon and Levi, '),
                hg('Ye have troubled me to make me to stink among the inhabitants of the land', 'c-jacob-rebuke'),
                t(', among the Canaanites and the Perizzites: and I being few in number, they shall gather themselves together against me, and slay me; and I shall be destroyed, I and my house.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('And they said, '),
                hp('Should he deal with our sister as with an harlot?', 'christ-sisters-honor'),
                t(''),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-jacob-rebuke',
          html:
            'Jacob finally speaks, but he rebukes them on grounds of his own safety, not on grounds of the brothers&apos; sin. He does not say, &ldquo;What you did was wrong.&rdquo; He says, &ldquo;You have made us vulnerable to our enemies.&rdquo; The text will later supply the judgment Jacob should have made: on his deathbed, Jacob curses Simeon and Levi for their cruelty. &ldquo;Cursed be their anger, for it was fierce; and their wrath, for it was cruel&rdquo; (Genesis 49:7). But in this moment, Jacob does not curse them. He only complains about the consequences to himself.',
        },
        {
          kind: 'christ',
          id: 'christ-sisters-honor',
          title: 'Christ Connection — The Silence of Heaven',
          html:
            'The brothers ask their rhetorical question: &ldquo;Should he deal with our sister as with a harlot?&rdquo; And the text leaves it unanswered. No one says what should have happened. No one gives voice to what Dinah herself would have wanted. The question stands in the silence. And in Revelation 8:1, there is &ldquo;silence in heaven about the space of half an hour&rdquo; — a silence before the seven seals of judgment are opened. Christ&apos;s silence before His accusers (Matthew 26:63) is a chosen silence, not an absent one. And sometimes the deepest comfort is that God does not answer human rage with more rage. He enters the silence Himself, and in His presence, even the heaviest questions find not a word but a consolation — &ldquo;He will wipe away all tears&rdquo; (Revelation 21:4).',
        },
        {
          kind: 'carry',
          html:
            'If you are waiting for someone to defend you, or if you are waiting to hear that what was done to you was wrong, you may wait a long time in this world. But the God who did not answer the brothers&apos; question directly did not forget Dinah&apos;s silence. He does not forget what is done to those who have no voice. Wait for His answer, not the world&apos;s.',
        },
        {
          kind: 'reflection',
          id: 'gen34-justice',
          prompt:
            'What wrong in your life is still waiting for someone to name it out loud? What would it mean if you never got the apology, but you had God&apos;s presence instead?',
        },
      ],
    },
  ],
};
