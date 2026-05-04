import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Exodus 1 — Israel multiplies in Egypt. A new pharaoh "which knew not Joseph"
 * arises, fears their numbers, and enslaves them. Edicts to kill Hebrew newborns.
 * Midwives Shiphrah and Puah refuse, fear God, and are blessed.
 *
 * First civil disobedience in scripture: ordinary people choosing God&apos;s command
 * over a ruler&apos;s decree. Foreshadows the slaughter of the innocents (Matt. 2:16).
 * Power that fears God&apos;s people multiplies always tries to crush it; God builds it more.
 */
export const EXODUS_1: RichChapterContent = {
  bookSlug: 'exodus',
  bookName: 'Exodus',
  chapter: 1,

  estimatedMinutes: { beginner: 6, intermediate: 11, deep: 13 },
  opener: {
    matchTitle: /Pharaoh and the Midwives/i,
    caption: 'Exodus 1',
  },
  intros: [
    'Four hundred years have passed since Joseph guided Egypt through famine and founded the dynasty that saved his family. Genesis ended with Jacob and his sons settled in Goshen, flourishing. Exodus begins with everything changed: a new pharaoh, a fresh fear, and God&apos;s people no longer guests but slaves. Yet the chapter&apos;s heartbeat is not despair—it is multiplication. The more the rulers of Egypt try to crush Israel, the more Israel multiplies. A power that fears the life God gives always tries to strangle it; God always builds it more.',
    'At the center are two midwives, Shiphrah and Puah—the first named act of civil disobedience in scripture. They refuse a royal command and instead obey God. No armies, no prophets, no signs: just two women afraid of God rather than a king, and it changes everything. Their refusal becomes the opening note of liberation.',
  ],

  sections: [
    /* ─── Exodus 1:1–5 — Israel in Egypt ──────────────────────────────────── */
    {
      ref: 'Exodus 1:1–5',
      title: 'Israel Settles in Egypt',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 1,
              spans: [
                t('Now these are the names of the children of Israel, which came into Egypt; every man and '),
                hg('his household came with Jacob', 'ex1-jacob-line'),
                t(':'),
              ],
            },
            {
              number: 2,
              spans: [t('Reuben, Simeon, Levi, and Judah,')],
            },
            {
              number: 3,
              spans: [t('Issachar, Zebulun, and Benjamin,')],
            },
            {
              number: 4,
              spans: [t('Dan, and Naphtali, Gad, and Asher.')],
            },
            {
              number: 5,
              spans: [
                t('And all the souls that came out of the loins of Jacob were '),
                hg('seventy souls', 'ex1-seventy'),
                t(': for Joseph was in Egypt already.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex1-jacob-line',
          html:
            'Genesis ended with Joseph establishing his father and brothers in Egypt as honored guests. Now Exodus opens with the same family—Jacob&apos;s line—rooted and multiplying in a foreign land. The list names twelve sons: the foundation of the twelve tribes. From family to nation; from guest to permanent resident[res:sefaria-exodus-1].',
        },
        {
          kind: 'commentary',
          id: 'ex1-seventy',
          html:
            'Seventy: the symbolic number of a complete, established people. Small enough to fit in wagons, large enough to become the seed of a multitude. The text is quiet about the time between Genesis and Exodus, but the silence holds generations.',
        },
        {
          kind: 'carry',
          html:
            'There may be seasons when your circumstances look settled, safe, even favored. Rooms in palaces, invitations to the king&apos;s table, the sense that you belong. Exodus reminds us that even settled places can shift. What matters is not the stability of any earthly arrangement, but the fidelity of God to His people through every change.',
        },
        {
          kind: 'reflection',
          id: 'ex1-settle',
          prompt:
            'What season are you in right now—settling, flourishing, or beginning to feel the weight of change? How does remembering God&apos;s faithfulness across generations shape how you wait?',
        },
      ],
    },

    /* ─── Exodus 1:6–14 — The Rise of a New Pharaoh ─────────────────────── */
    {
      ref: 'Exodus 1:6–14',
      title: 'A New Pharaoh and Slavery',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 6,
              spans: [
                t('And Joseph died, and all his brethren, and all that '),
                hg('generation', 'ex1-generation-dies'),
                t('.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And the children of Israel were '),
                hp('fruitful, and increased abundantly', 'christ-multiply'),
                t(', and multiplied, and waxed exceeding mighty; and '),
                hy('the land was filled with them', 'ex1-fill-land'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'christ',
          id: 'christ-multiply',
          title: 'Christ Connection — Multiplied Life',
          html:
            'God promised Abraham that his seed would multiply "as the stars of the heaven, and as the sand which is upon the sea shore" (Gen. 22:17). Pharaoh tries to reverse that blessing by death; God responds by multiplication. Jesus echoes this exact promise: "I am come that they might have life, and that they might have it more abundantly" (John 10:10). The God who multiplies life against death in Exodus is the same God who moves death itself toward resurrection in the Gospel.',
        },
        {
          kind: 'commentary',
          id: 'ex1-generation-dies',
          html:
            'Joseph, the bridge between Egypt and Israel, is gone. With him dies the memory of his service, his favor, his son&apos;s hand on the throne. A generation passes, and the contract that protected Israel dies with it.',
        },
        {
          kind: 'commentary',
          id: 'ex1-fill-land',
          html:
            'Yet in the very moment Joseph disappears, Israel multiplies. The language echoes God&apos;s command to Adam and Eve: "Be fruitful, and multiply, and replenish the earth." God&apos;s command to be fruitful outlasts any earthly protection. Israel fills the land not by royal favor, but by the life God has planted in them.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 8,
              spans: [
                t('Now there arose '),
                hg('a new king over Egypt, which knew not Joseph', 'ex1-knew-not'),
                t('.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And he said unto his people, Behold, the people of the children of Israel are '),
                hg('more and mightier than we', 'ex1-fear-numbers'),
                t(':'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Come on, let us '),
                hy('deal wisely with them', 'ex1-deal-wisely'),
                t('; lest they multiply, and it come to pass, that, when there falleth out any war, they join also unto our enemies, and fight against us, and so get them up out of the land.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex1-knew-not',
          html:
            'A king who knows not Joseph: a ruler with no memory of covenant, no gratitude for Joseph&apos;s service, no historical connection to the Hebrews. He sees only numbers. Only threat. The forgetting of one generation becomes the cruelty of the next.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-yare',
          title: 'Yare — "feared"',
          script: 'יָרֵא',
          translit: '<strong>yare</strong> · to fear, to revere, to stand in awe of',
          description:
            'The same verb will appear in verse 17 for the midwives who "feared God." Pharaoh fears the Hebrews; the midwives fear God. Two kinds of fear meet in this chapter, and only one leads to blessing.',
        },
        {
          kind: 'commentary',
          id: 'ex1-fear-numbers',
          html:
            'Pharaoh&apos;s fear is born of arithmetic: more Hebrews, more threat. He calculates that multiplied life is danger. But multiplication is God&apos;s command, not Pharaoh&apos;s permission to grant. What Pharaoh reads as a problem is actually God&apos;s covenant unfolding.',
        },
        {
          kind: 'commentary',
          id: 'ex1-deal-wisely',
          html:
            '"Deal wisely"—the language of cunning, of a strategy that looks careful but is actually fear dressed in policy. Pharaoh will manage the problem through labor. Slavery is his answer to the fruitfulness he cannot control.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 11,
              spans: [
                t('Therefore they did set over them '),
                hg('taskmasters to afflict them with their burdens', 'ex1-burdens'),
                t('. And they built for Pharaoh '),
                hg('treasure cities, Pithom and Raamses', 'ex1-cities'),
                t('.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('But '),
                hp('the more they afflicted them, the more they multiplied and grew', 'christ-multiply-more'),
                t('. And they were grieved because of the children of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'christ',
          id: 'christ-multiply-more',
          title: 'Christ Connection — Oppression Cannot Stop the Gospel',
          html:
            'The pattern of Exodus 1:12 becomes the pattern of Acts: the more the early church was persecuted, the more it multiplied (Acts 9:31, 12:24). "Then had the churches rest throughout all Judaea and Galilee and Samaria, and were edified; and walking in the fear of the Lord, and in the comfort of the Holy Ghost, were multiplied" (Acts 9:31). Oppression has never finally checked the spread of God&apos;s kingdom. What looks like it is being pressed into the ground is the seed pressed into soil—a foreshadowing of resurrection.',
        },
        {
          kind: 'commentary',
          id: 'ex1-burdens',
          html:
            'Oppression becomes a policy. Taskmasters, quotas, endless labor. Pharaoh tries to break Israel by exhaustion. But the text has already told us what he cannot stop: fruitfulness is not dependent on conditions. It is the work of God.',
        },
        {
          kind: 'commentary',
          id: 'ex1-cities',
          html:
            'Pithom and Raamses[res:met-egyptian-slavery]: storage cities for Pharaoh&apos;s wealth, built on Hebrew backs. Slavery is made architectural. Yet even as the Hebrews build monuments to Pharaoh&apos;s power, they multiply—the real monument is the life that cannot be squeezed out of them.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 13,
              spans: [
                t('And the Egyptians made the children of Israel to serve with '),
                hg('rigour', 'ex1-rigour'),
                t(':'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And they made their lives bitter with hard bondage, in morter, and in brick, and in all manner of service in the field: all their service, wherein they made them serve, was with rigour.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex1-rigour',
          html:
            'Rigour—Hebrew <em>perek</em>, a word that means harshness, cruelty, the breaking of what should bend. The whole machinery of state turned to one purpose: to reduce Israel to nothing. Yet by the end of the chapter, a simple refusal from two women will prove that Pharaoh&apos;s machinery is not as unbreakable as he imagines.',
        },
        {
          kind: 'carry',
          html:
            'Oppression has a way of seeming permanent, inevitable, built into the world itself. When systems are old and large and have been around all your life, they can feel like the natural order. Exodus says otherwise. What looks fixed can break. What looks unquestionable can be quietly refused. God&apos;s multiplication works in the middle of slavery—not because the slavery is good, but because it cannot finally contain what God has planted.',
        },
        {
          kind: 'reflection',
          id: 'ex1-slavery',
          prompt:
            'Where do you see systems designed to break the human spirit—in your world, your work, your news? How does it change something to know that God&apos;s life is fruitful even in the midst of them?',
        },
      ],
    },

    /* ─── Exodus 1:15–21 — The Midwives ─────────────────────────────────── */
    {
      ref: 'Exodus 1:15–21',
      title: 'The Midwives Who Feared God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 15,
              spans: [
                t('And the king of Egypt spake to the Hebrew midwives, of which the name of the one was '),
                hy('Shiphrah', 'hebrew-shiphrah'),
                t(', and the name of the other '),
                hy('Puah', 'hebrew-puah'),
                t(':'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And he said, When ye do the office of a midwife to the Hebrew women, and see them upon the stools; if it be a '),
                hg('son, then ye shall kill him', 'ex1-edict'),
                t(': but if it be a daughter, then she shall live.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shiphrah',
          title: 'Shiphrah — "beauty," "fairness"',
          script: 'שִׁפְרָה',
          translit: '<strong>shiphrah</strong> · from the root meaning to make fair, beautiful, or bright',
          description:
            'The midwife&apos;s name itself carries beauty and honor. She will spend her life bringing new life into the world—the work of beauty against a ruler&apos;s edict of death.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-puah',
          title: 'Puah — "splendor," "glory"',
          script: 'פּוּעָה',
          translit: '<strong>puah</strong> · from a root meaning to shine, to be visible or glorious',
          description:
            'Puah—splendor, radiance. These are not invisible women; they carry weight and honor in their community. That makes their refusal to obey the king more costly and more brave.',
        },
        {
          kind: 'commentary',
          id: 'ex1-edict',
          html:
            'The edict is clinical and total: every Hebrew son must die. Pharaoh names no reason beyond fear, no justification beyond control. He attempts to use the very people attending birth to orchestrate death. The midwives are positioned as his instruments. They must choose: obey the ruler or obey God.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 17,
              spans: [
                t('But the midwives '),
                hy('feared God', 'ex1-feared-god'),
                t(', and did not as the king of Egypt commanded them, but saved the men children alive.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex1-feared-god',
          html:
            'The chapter pivots on these four words: the midwives feared God.[res:hebrew-midwives] Pharaoh had tried to make fear work his way—fear of his power, his armies, his authority over life and death. But there is a fear older, deeper, and more binding. The fear of God. It is the first named civil disobedience in scripture: ordinary people saying no to a ruler&apos;s command because they hear a higher voice. Not a revolt, not heroic defiance. Just a refusal born of awe.',
        },
        {
          kind: 'christ',
          id: 'christ-slaughter',
          title: 'Christ Connection — The Slaughter of the Innocents',
          html:
            'Matthew opens the fulfillment of Exodus with the same pattern. Herod, like Pharaoh, hears that a child will challenge his power. Herod, like Pharaoh, tries to slaughter the boys in his jurisdiction. "Then was fulfilled that which was spoken by Jeremy the prophet, saying, In Rama was there a voice heard, lamentation, and weeping, and great mourning, Rachel weeping for her children" (Matt. 2:17–18). Both Pharaoh and Herod attempt to murder a deliverer in his cradle. Both fail. God always builds His people more than power can break them.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 18,
              spans: [
                t('And the king of Egypt called for the midwives, and said unto them, Why have ye done this thing, and have '),
                hg('saved the men children alive', 'ex1-saved-alive'),
                t('?'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And the midwives said unto Pharaoh, Because the Hebrew women are not as the Egyptian women; for they are '),
                hg('lively, and are delivered ere the midwives come', 'ex1-lively'),
                t(' in unto them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ex1-saved-alive',
          html:
            'Pharaoh demands an account. The midwives have disobeyed. He faces them directly. This is the moment where lesser courage would crack. But Shiphrah and Puah have already chosen God; they answer with a reason that is, if not truthful, at least plausible—and they do so without betraying the other midwives or naming names. Their refusal is not reckless; it is shrewd and measured.',
        },
        {
          kind: 'commentary',
          id: 'ex1-lively',
          html:
            'Lively, vigorous, strong. The midwives describe Hebrew women as robust, generative, delivered so quickly that even the midwives cannot always arrive in time. It is a description of fruitfulness—the very thing Pharaoh fears—and they say it to Pharaoh&apos;s face. The word for "delivered" echoes the word for "birth." Life brings forth life; what Pharaoh tries to stop is God&apos;s own work.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 20,
              spans: [
                t('Therefore God dealt well with the midwives: and the people '),
                hp('multiplied, and waxed very mighty', 'christ-multiply-bless'),
                t('.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And it came to pass, because the midwives '),
                hy('feared God', 'ex1-feared-god-2'),
                t(', that he made them '),
                hp('houses', 'ex1-houses'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'christ',
          id: 'christ-multiply-bless',
          title: 'Christ Connection — Blessing the Faithful',
          html:
            'God blesses the midwives with houses—not for their courage alone, but because their courage flowed from fearing Him. Jesus promises the same: "Blessed are they which are persecuted for righteousness&apos; sake: for theirs is the kingdom of heaven" (Matt. 5:10). The midwives did not topple Pharaoh; they simply chose God over fear. That choice drew His blessing. It always does.',
        },
        {
          kind: 'commentary',
          id: 'ex1-feared-god-2',
          html:
            'The refrain repeats: because the midwives feared God. It is the only reason given for God&apos;s blessing on them. Not their cleverness, not their political savvy, not the excellence of their argument. Their fear of God—their choice to honor Him over any earthly ruler—is what draws His blessing.',
        },
        {
          kind: 'commentary',
          id: 'ex1-houses',
          html:
            'God made them houses—not palaces, not wealth, but homes. Families, stability, a place in the community. The midwives who save life are given life in return. They had placed themselves at risk by refusing; God gives them security. The promise is not that they will escape all danger, but that they will be remembered, honored, and blessed by God Himself.',
        },
        {
          kind: 'carry',
          html:
            'There are moments when you are asked to choose: to obey a system that treats people as problems, or to honor the God who says every life is made in His image. It rarely comes with applause. It comes with small acts of quiet refusal. You may not see the full outcome. The midwives did not know they were writing the opening lines of a liberation story. But they chose the fear of God over the fear of a king, and it mattered—for the people, and for themselves. You are not called to topple every system. You are called to let the fear of God be bigger than any other fear.',
        },
        {
          kind: 'reflection',
          id: 'ex1-refuse',
          prompt:
            'When have you felt pressure to choose between honoring a system and honoring the image of God in someone? What would change if you trusted that fearing God was more powerful than fearing any consequence?',
        },
        {
          kind: 'artwork',
          matchTitle: /exodus|midwife/i,
          caption: 'Exodus 1:15–21 · The Midwives',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Exodus 1',
    quote:
      'God&apos;s people multiplied even under slavery. Two midwives refused a king&apos;s edict to kill Hebrew sons because they feared God more than Pharaoh. In their small act of refusal, the liberation of God&apos;s people began.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Exodus 1 · Study Guide',
  },


  resources: [
    {
      id: 'met-egyptian-slavery',
      kind: 'archaeology',
      source: 'Penn Museum',
      label: 'Egyptian Slavery in Archaeology',
      url: 'https://www.penn.museum/sites/expedition/',
      description: 'Artifacts and context on labor systems in Middle Kingdom and New Kingdom Egypt.',
    },
    {
      id: 'sefaria-exodus-1',
      kind: 'study',
      source: 'Sefaria',
      label: 'Exodus 1 — Hebrew + classical Jewish commentary',
      url: 'https://www.sefaria.org/Exodus.1',
      description: 'The Hebrew text of Exodus 1 alongside Rashi, Ibn Ezra, and other classical commentators.',
    },

  ],

  hasHebrew: true,
};
