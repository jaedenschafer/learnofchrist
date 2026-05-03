import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 37 — Joseph and his coat.
 *
 * The beloved son becomes the hated one. A coat of honor, two dreams, and a
 * descent into slavery begin the longest narrative arc in Genesis: the story
 * of how God hides a savior in Egypt. Joseph's brothers reject him with fury
 * — but the text offers no judgment on him for sharing his dreams. The shame
 * belongs to the ones who sell him for silver.
 */
export const GENESIS_37: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 37,

  estimatedMinutes: { beginner: 9, intermediate: 16, deep: 20 },
  intros: [
    'Genesis 37 opens a new arc — the story of Joseph, the favorite son of Jacob, and the fourteen-chapter journey that will reshape Israel itself. It begins with a coat, two dreams, and a hatred so fierce that brothers become merchants of flesh. This is where the text shows you human evil without softening it: the cruelty of the rejected, the casual nature of slavery, the absolute lies told to a father about his son. But it is also where the Bible begins to hide its savior.',
    'At the heart of Genesis 37 sits a pattern you will see again and again in Scripture: the beloved son sent by his father to his brothers, who reject him and seek his life. [res:bibleodyssey-joseph-egypt] The echoes are impossible to miss once you hear them. And the silver — the twenty pieces paid for Joseph — will haunt a different story fifteen hundred years forward, when another beloved Son is betrayed for money. Genesis 37 is not just Joseph\'s beginning. It is a shadow cast forward across all of Christian history.',
  ],

  bottomShare: {
    label: 'Share Genesis 37',
    quote:
      'Joseph was the favored son, given a coat of many colors. His brothers hated him for his dreams and sold him to traders bound for Egypt for twenty pieces of silver.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 37 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-genesis-37',
      kind: 'lexicon',
      source: 'Sefaria',
      label: 'Genesis 37 · Commentaries & Translations',
      url: 'https://www.sefaria.org/Genesis.37',
      description: 'Rabbinic and academic commentaries on Joseph&apos;s coat, dreams, and sale into slavery.',
    },
    {
      id: 'met-museum-egypt',
      kind: 'museum',
      source: 'Metropolitan Museum of Art',
      label: 'Ancient Egypt: Daily Life and Culture',
      url: 'https://www.metmuseum.org/art/metpublications/Egypt_and_the_Ancient_Near_East',
      description: 'Museum collections and scholarly essays on Egyptian civilization, trade, and social structures during the patriarchal period.',
    },
    {
      id: 'bibleodyssey-joseph-egypt',
      kind: 'study',
      source: 'Bible Odyssey',
      label: 'Joseph: From Slave to Sovereign',
      url: 'https://www.bibleodyssey.org/en/passages/related-articles/Joseph',
      description: 'Theological and narrative analysis of Joseph&apos;s journey from pit to palace and his role as prefigurement of Christ.',
    },
  ],

  sections: [
    /* ─── Genesis 37:1–4 — The Favorite Son ────────────────────────────── */
    {
      ref: 'Genesis 37:1–4',
      title: 'The Favorite Son',
      blocks: [
        {
          kind: 'scripture',
          chapter: 37,
          lines: [
            {
              number: 1,
              spans: [t('And Jacob dwelt in the land wherein his father was a stranger, in the land of Canaan.')],
            },
            {
              number: 2,
              spans: [
                t('These are the generations of Jacob. '),
                hg('Joseph, being seventeen years old, was feeding the flock with his brethren', 'c-joseph-young'),
                t('; and the lad was with the sons of Bilhah, and with the sons of Zilpah, his father\'s wives: and Joseph brought unto his father their '),
                hg('evil report', 'c-evil-report'),
                t('.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Now Israel loved Joseph more than all his children, because he was '),
                hg('the son of his old age', 'c-old-age'),
                t(': and he made him a '),
                hy('coat of many colors', 'hebrew-ketonet-passim'),
                t('.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And when his brethren saw that their father loved him more than all his brethren, they '),
                hg('hated him', 'c-hated'),
                t(', and could not speak peaceably unto him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-joseph-young',
          html:
            'Joseph is seventeen. Not yet a man, still a boy with older brothers whose respect he has not earned. He is keeping sheep with the half-brothers — the sons of Bilhah and Zilpah, Jacob\'s concubines — and something goes wrong. The text does not say Joseph caused the trouble; it says he brought an evil report to his father. He tells on them.',
        },
        {
          kind: 'commentary',
          id: 'c-evil-report',
          html:
            'A single verse, and Joseph\'s doom is set. Not by a great sin, but by a small choice: the teenager who goes home and reports his brothers. The brothers will hate him not because of the report itself, but because of what it means. [res:sefaria-genesis-37] Someone has run to their father. Someone is the favorite.',
        },
        {
          kind: 'commentary',
          id: 'c-old-age',
          html:
            'Joseph is born late. Rachel, Jacob\'s beloved wife, was barren for years, and Joseph is the first child God gives her. Jacob is in his nineties when Joseph arrives. [res:met-museum-egypt] The boy is literally the fruit of Jacob\'s love for a dead woman — and Jacob pours that entire ache into his youngest son.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-ketonet-passim',
          title: 'Ketonet Passim — "coat of many colors"',
          script: 'כְּתֹנֶת פַּסִּים',
          translit: '<strong>ketonet passim</strong> · long-sleeved or ornamented robe',
          description:
            'The same phrase is used of Tamar\'s royal robe in 2 Samuel 13:18. This is not a child\'s plaything — it is an aristocratic garment, the kind worn by the privileged, the kind that marks you as set apart. Jacob is not being sentimental; he is publicly announcing which son will inherit.',
        },
        {
          kind: 'commentary',
          id: 'c-hated',
          html:
            'The Hebrew word for &ldquo;hated&rdquo; (<em>sane</em>) is absolute. It is not resentment or jealousy — it is hatred. And they could not speak to him in peace. Every conversation was a minefield. The coat, visible every day, was a reminder to ten brothers that their father loved them less.',
        },
        {
          kind: 'carry',
          html:
            'Favoritism is a poison that tastes like love. A parent who openly prefers one child broadcasts to the others: you are less. The brothers\' hatred did not come from nowhere — it came from a father who loved Joseph too much and the other sons too little. The text does not excuse what they will do to Joseph. But it does not hide where the fracture started either.',
        },
        {
          kind: 'reflection',
          id: 'gen37-favorite',
          prompt:
            'Where have you felt like the less-loved one — in a family, a workplace, a friend group? Or where have you caught yourself playing favorite with people in your life?',
        },
        {
          kind: 'artwork',
          matchTitle: /joseph.*coat/i,
          caption: 'Genesis 37:1–4 · The Coat of Many Colors',
        },
      ],
    },

    /* ─── Genesis 37:5–11 — The Dreams ────────────────────────────────── */
    {
      ref: 'Genesis 37:5–11',
      title: 'The Dreams',
      blocks: [
        {
          kind: 'scripture',
          chapter: 37,
          lines: [
            {
              number: 5,
              spans: [
                t('And Joseph dreamed a dream, and he told it his brethren: and they '),
                hg('hated him yet the more', 'c-hatred-grows'),
                t('.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('For he said unto them, Hear, I pray you, this dream which I have dreamed:'),
              ],
            },
            {
              number: 7,
              spans: [
                t('For, behold, we were binding sheaves in the field, and, lo, my sheaf arose, and also '),
                t('stood upright'),
                t('; and behold, your sheaves stood round about, and made obeisance to my sheaf.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And his brethren said unto him, Shalt thou indeed reign over us? or shalt thou indeed '),
                hg('have dominion over us', 'c-dominion'),
                t('? And they hated him yet the more for his dreams, and for his words.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And he dreamed yet another dream, and told it his brethren, saying, Behold, I have dreamed a dream more; and, behold, the '),
                hy('sun', 'hebrew-halom'),
                t(', and '),
                hy('the moon', 'hebrew-halom'),
                t(', and the '),
                hy('eleven stars', 'hebrew-halom'),
                t(' made obeisance to me.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And he told it to his father, and to his brethren: and his father '),
                hg('rebuked him', 'c-father-rebukes'),
                t(', and said unto him, What is this dream that thou hast dreamed? Shall I and thy mother and thy brethren indeed come to bow down ourselves to thee to the earth?'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And his brethren '),
                t('envied him'),
                t('; but his father observed the saying.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hatred-grows',
          html:
            'The text does not moralize Joseph. It does not say he was proud or that he deserved to be hated. It simply names what happened: he dreamed and told the dream, and the hatred grew. The brothers\' response is the subject of the chapter, not Joseph\'s sin.',
        },
        {
          kind: 'commentary',
          id: 'c-dominion',
          html:
            'The brothers understand the dream immediately. In the language of Genesis, &ldquo;dominion&rdquo; means rulership — the same word used of humans ruling over creation in Genesis 1:28. The dream is not subtle. A seventeen-year-old boy is claiming authority over men in their thirties and forties. But the text does not say he invented the dream or was ambitious. It says he had it. And he told it.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-halom',
          title: 'Halom — "dream"',
          script: 'חֲלוֹם',
          translit: '<strong>halom</strong> · a dream, a vision in sleep',
          description:
            'God speaks through dreams throughout Genesis — to Abimelech (20:3), to Laban (31:24), to Pharaoh (41:1), and finally to Joseph, who will become the interpreter of all of them. Dreams are not private desires in this story; they are messages. Joseph\'s brothers hear them that way. So does Jacob. And eventually, so does Pharaoh.',
        },
        {
          kind: 'commentary',
          id: 'c-father-rebukes',
          html:
            'Jacob rebukes his son for the second dream — not because it is foolish, but because it offends him directly. The sun and moon are symbols for mother and father. Jacob hears his youngest son claiming his mother and father will bow to him, and he says so. But the text notes: <em>his father observed the saying.</em> He does not dismiss it. He holds it.',
        },
        {
          kind: 'carry',
          html:
            'A small gift, a young voice, a dream that lands badly — and suddenly you are the person everyone resents. The text does not promise that if you are innocent you will be loved. It promises something else: that God sees and holds what is said, even when everyone else is deaf with anger. Jacob observed. He did not understand yet. But he held the thing.',
        },
        {
          kind: 'reflection',
          id: 'gen37-dreams',
          prompt:
            'What have you said or shown that landed badly with people who were waiting for a reason to resent you? What would it look like to trust that God has observed it, even if no one else has?',
        },
      ],
    },

    /* ─── Genesis 37:12–18 — Sent to Find His Brothers ──────────────────── */
    {
      ref: 'Genesis 37:12–18',
      title: 'Sent to Find His Brothers',
      blocks: [
        {
          kind: 'scripture',
          chapter: 37,
          lines: [
            {
              number: 12,
              spans: [
                t('And his brethren went to feed the flock in Shechem.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And Israel said unto Joseph, Do not thy brethren feed the flock in Shechem? come, and I will send thee unto them. And he said to him, Here am I.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And he said to him, Go, I pray thee, see whether it be well with thy brethren, and well with the flocks; and bring me word again. So he sent him out of the valley of Hebron, and '),
                hg('he came to Shechem', 'c-shechem'),
                t('.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And a certain man found him, and, behold, he was wandering in the field: and the man asked him, saying, '),
                hg('What seekest thou', 'c-seeking'),
                t('?'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And he said, I seek my brethren: tell me, I pray thee, where they feed their flocks.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And the man said, They are departed hence; for I heard them say, Let us go to Dothan. And Joseph '),
                hg('went after his brethren', 'c-going'),
                t(', and found them in Dothan.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And when they saw him afar off, even before he came near unto them, they '),
                hg('conspired against him to slay him', 'c-plot'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-shechem',
          html:
            'Shechem is where Jacob\'s daughter Dinah was violated (Genesis 34). It is a place of shame for the family. The brothers have moved the flocks to Dothan, which is twelve miles away — at the edge of the wild country. They are as far as they can be while still technically working.',
        },
        {
          kind: 'commentary',
          id: 'c-seeking',
          html:
            'A stranger stops the boy and asks a simple question: What are you looking for? The man is kind — he does not mock the coat or the long journey. He simply points Joseph toward his brothers. All he does is answer a question. And it seals Joseph\'s fate.',
        },
        {
          kind: 'commentary',
          id: 'c-going',
          html:
            'Joseph does not hesitate. His father sends him; he goes. He walks twelve miles through the wilderness looking for men who hate him. The text never says he is afraid. It just says he went. The obedience is absolute.',
        },
        {
          kind: 'commentary',
          id: 'c-plot',
          html:
            'They see him coming from far away — the coat is visible across the open field. And in that moment, before he arrives, they decide. Not in the heat of a sudden argument, but in cold premeditation. While he is still yards away, walking toward them in the coat his father made him, they agree: let us kill him. The deliberation is what makes it terrible.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes obedience takes you straight into harm. You go because your father asked. You show up because someone needs you. And the ones you thought were family have already decided. The text does not tell you to avoid these moments. It tells you that God sees them, and that they do not have the last word.',
        },
        {
          kind: 'reflection',
          id: 'gen37-sent',
          prompt:
            'Where has obedience or vulnerability put you in a place where people were ready to hurt you? Did you know it was coming, or did you walk in blind?',
        },
        {
          kind: 'artwork',
          matchTitle: /joseph.*brethren/i,
          caption: 'Genesis 37:12–18 · The Journey to Dothan',
        },
      ],
    },

    /* ─── Genesis 37:19–24 — Reuben Intervenes ────────────────────────── */
    {
      ref: 'Genesis 37:19–24',
      title: 'Reuben Intervenes',
      blocks: [
        {
          kind: 'scripture',
          chapter: 37,
          lines: [
            {
              number: 19,
              spans: [
                t('And they said one to another, Behold, this dreamer cometh.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('Come now therefore, and let us slay him, and '),
                hg('cast him into some pit', 'c-pit'),
                t(', and we will say, Some evil beast hath devoured him: and we shall see what will become of his dreams.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And Reuben heard it, and '),
                hg('he delivered him out of their hands', 'c-reuben'),
                t('; saying, Let us not kill him.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And Reuben said unto them, Shed not blood, but cast him into this pit that is in the wilderness, and '),
                hy('lay no hand upon him', 'hebrew-kesef'),
                t('; that he might rid him out of their hands, to deliver him to his father again.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And it came to pass, when Joseph was come unto them, that they '),
                hg('stript him out of his coat', 'c-stripped'),
                t(', his coat of many colors that was on him;'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And they cast him into a pit: and the pit was empty, there was no water in it.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-pit',
          html:
            'They call him &ldquo;this dreamer&rdquo; — the word is almost mocking. And their plan is cynical: kill him, throw him away, lie to their father, and &ldquo;we shall see what will become of his dreams.&rdquo; They are trying to silence not just a boy but a voice they believe has wronged them.',
        },
        {
          kind: 'commentary',
          id: 'c-reuben',
          html:
            'Reuben is the oldest. He has lost his inheritance already — he slept with Jacob\'s wife and forfeited the firstborn\'s blessing (Genesis 35:22). He has nothing left to lose but his conscience. He cannot stop his brothers from hating Joseph, but he can stop them from murdering him. He does not sound heroic. He sounds like a man trying to minimize damage. But he acts.',
        },
        {
          kind: 'commentary',
          id: 'c-stripped',
          html:
            'The coat comes off. The thing that marked him as favored, the visible sign of Jacob\'s love, is taken and cast aside. They leave him in the darkness with nothing — no clothes, no name, no station. What Jacob gave him in one instant, his brothers strip away in the next.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-kesef',
          title: 'Kesef — "silver" (also bloodshed)',
          script: 'כֶּסֶף',
          translit: '<strong>kesef</strong> · silver; blood money',
          description:
            'The Hebrew word <em>kesef</em> means both silver and the spilling of blood. Reuben says, &ldquo;lay no hand upon him&rdquo; — do not shed blood. But the text is already whispering what will happen when the blood-silver and the brothers\' hands meet again.',
        },
        {
          kind: 'carry',
          html:
            'Reuben is not a saint. He does not love Joseph. He simply stops short of murder. In a moment when everyone around you has decided to destroy someone, stopping short of the worst is not nothing. Reuben cannot heal what his brothers started. He cannot change their minds. But he can refuse the final blow. Some small mercies come that way — not from love, but from conscience breaking through.',
        },
        {
          kind: 'reflection',
          id: 'gen37-reuben',
          prompt:
            'When have you been complicit in group cruelty but stopped short of the worst of it? Did that partial mercy matter, or did it just delay the inevitable?',
        },
      ],
    },

    /* ─── Genesis 37:25–28 — Sold for Twenty Pieces ──────────────────────── */
    {
      ref: 'Genesis 37:25–28',
      title: 'Sold for Twenty Pieces',
      blocks: [
        {
          kind: 'scripture',
          chapter: 37,
          lines: [
            {
              number: 25,
              spans: [
                t('And they sat down to eat bread: and they lifted up their eyes and looked, and, behold, a company of '),
                hg('Ishmaelites came from Gilead', 'c-traders'),
                t(' with their camels bearing spicery and balm and myrrh, going to carry it down to Egypt.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And Judah said unto his brethren, What profit is it if we slay our brother, and conceal his blood?'),
              ],
            },
            {
              number: 27,
              spans: [
                t('Come, and let us sell him to the Ishmaelites, and let not our hand be upon him; for he is our brother and our flesh. And his brethren were '),
                hg('content', 'c-content'),
                t('.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('Then there passed by Midianites merchantmen; and they drew and lifted up Joseph out of the pit, and '),
                hy('sold him for twenty pieces of silver', 'hebrew-kesef-silver'),
                t(': and they brought Joseph into Egypt.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-traders',
          html:
            'The timing is almost too perfect. While they are eating — sitting and resting after the crime — merchants appear. Ishmaelites, descendants of Abraham\'s son. They are bound for Egypt. Centuries later, this route will be well-traveled. For now, it looks like fate.',
        },
        {
          kind: 'commentary',
          id: 'c-content',
          html:
            'Judah\'s voice shifts the story. He is not trying to save Joseph — he is trying to profit from him. <em>What profit is it if we slay him?</em> The math is simple: a corpse is worth nothing. A slave is worth silver. And slavery in Egypt at least gets the brothers out of the conspiracy of murder. They can go home and say he disappeared. They are not killers. They are traders.',
        },
        {
          kind: 'commentary',
          id: 'c-reuben-fails',
          html:
            'Reuben is not present when the choice is made. Later, he will return to the pit, find Joseph gone, and tear his clothes in grief (verse 29). He stopped them from murdering their brother — and while his back was turned, they sold him. The refusal to do one evil thing does not protect against the next one.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-kesef-silver',
          title: 'Kesef — "twenty pieces of silver"',
          script: 'עֶשְׂרִים כָּסֶף',
          translit: '<strong>kesef</strong> · silver; twenty pieces',
          description:
            'The same word echoes across centuries. Judas will later be promised thirty pieces of silver for Jesus. Joseph is sold for twenty — the younger beloved son, betrayed by jealousy and greed. The number changes, but the story becomes a mirror.',
        },
        {
          kind: 'christ',
          id: 'christ-silver-coat',
          title: 'Christ Connection — Betrayed for Silver',
          html:
            'The pattern is impossible to miss. Joseph — the beloved son, favored by his father, dressed in a garment of honor — is stripped of his coat and sold for silver by those who should have loved him. Matthew records that Judas agreed with the chief priests to betray Jesus &ldquo;for thirty pieces of silver&rdquo; (Matt. 26:15). John notes that the soldiers &ldquo;parted his garments, casting lots&rdquo; (John 19:24) — just as Joseph\'s brothers took his coat. The Gospel writers knew Genesis. They saw in Joseph a picture of the One who would be stripped, sold, and brought down into darkness.',
        },
        {
          kind: 'carry',
          html:
            'Evil is sometimes dramatic. But often it is practical. A murder would be terrible but also risky. A sale is business. You go to market, you see an opportunity, you decide it is better to profit than to kill. The brothers comfort themselves with the thought that at least they did not spill blood. But the text calls it what it is: the flesh and blood that belonged to them was betrayed for coins.',
        },
        {
          kind: 'reflection',
          id: 'gen37-judah',
          prompt:
            'Where have you seen evil rationalized as practical necessity? Where have you rationalized hurting someone by doing something less terrible than you could have done?',
        },
      ],
    },

    /* ─── Genesis 37:29–36 — The Bloody Coat Brought Home ─────────────── */
    {
      ref: 'Genesis 37:29–36',
      title: 'The Lie',
      blocks: [
        {
          kind: 'scripture',
          chapter: 37,
          lines: [
            {
              number: 29,
              spans: [
                t('And Reuben returned unto the pit; and, behold, Joseph was not in the pit; and he '),
                hg('rent his clothes', 'c-reuben-returns'),
                t('.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And he returned unto his brethren, and said, The child is not; and I, whither shall I go?'),
              ],
            },
            {
              number: 31,
              spans: [
                t('And they took Joseph\'s coat, and killed a kid of the goats, and dipped the coat in the blood;'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And they sent the coat of many colors, and they brought it to their father; and said, This have we found: know now whether it be thy son\'s coat or no.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('And he knew it, and said, It is my son\'s coat; an '),
                hg('evil beast hath devoured him', 'c-beast'),
                t('; Joseph is without doubt rent in pieces.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('And Jacob '),
                hg('rent his clothes, and put sackcloth upon his loins, and mourned for his son many days', 'c-jacob-mourns'),
                t('.'),
              ],
            },
            {
              number: 35,
              spans: [
                t('And all his sons and all his daughters rose up to comfort him; but he '),
                hp('refused to be comforted', 'christ-unfathered'),
                t('; and he said, For I will go down into the grave unto my son mourning. Thus his father wept for him.'),
              ],
            },
            {
              number: 36,
              spans: [
                t('And the Midianites sold him into Egypt unto Potiphar, an officer of Pharaoh\'s, and captain of the guard.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-reuben-returns',
          html:
            'Reuben comes back to the pit and finds it empty. His plan has failed — not because his brothers betrayed him, but because they moved faster, sold in his absence, and covered it perfectly. He tears his clothes in genuine grief. And then he has to go tell the others he was caught.',
        },
        {
          kind: 'commentary',
          id: 'c-beast',
          html:
            'The lie is flawless. They use Joseph\'s own coat — the very thing that marked him as favored. They dip it in goat\'s blood. And they present it to Jacob as if they found it, asking: Is this your son\'s? The cruelty is exquisite. They know. Jacob will know. And there is nothing he can do but die inside, one day at a time.',
        },
        {
          kind: 'commentary',
          id: 'c-jacob-mourns',
          html:
            'Jacob does not ask questions. He sees the coat and believes it. The man who loved Joseph most is the one who grieves most deeply. He tears his clothes, puts on sackcloth — the garments of the bereaved — and mourns. Not for a day. For many days. The text returns to this later: he refused to be comforted. His youngest son is gone, and he will never believe otherwise.',
        },
        {
          kind: 'carry',
          html:
            'What the brothers did not know was that they did not kill Joseph — they killed their father. The man who favored Joseph will never smile again in this story. He will spend twenty years in grief, eating meals his sons prepare, and dying a little every time he remembers the coat. Evil always costs more than the perpetrator intends. The brothers got their vengeance. But they also got a father\'s lifetime of tears.',
        },
        {
          kind: 'reflection',
          id: 'gen37-jacob',
          prompt:
            'What loss have you caused someone by hurting a person they loved? Did you ever understand the full weight of what you took from them?',
        },
        {
          kind: 'christ',
          id: 'christ-unfathered',
          title: 'Christ Connection — A Father\'s Uncomforted Grief',
          html:
            'Jacob refuses to be comforted. He will go down to the grave mourning his son. But two chapters later, he will discover Joseph is alive, and the text says simply, &ldquo;the spirit of Jacob their father revived&rdquo; (45:27). The beloved son who was supposedly dead was alive in Egypt all along, preparing salvation. The father\'s grief was based on a lie, but the rescue was real. The Gospel is a resurrection answer to a father\'s grief that should never have happened. &ldquo;God so loved the world that he gave his only begotten Son&rdquo; (John 3:16) — and God the Father knew what Jacob did not know. The darkness Joseph walked into was already in the hand of God.',
        },
        {
          kind: 'artwork',
          matchTitle: /joseph.*coat.*blood/i,
          caption: 'Genesis 37:31–35 · The Bloody Coat',
        },
      ],
    },
  ],
};
