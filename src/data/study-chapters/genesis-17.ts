import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 17 — Abram becomes Abraham; Sarai becomes Sarah.
 * The everlasting covenant, the sign of circumcision, the promise of Isaac.
 *
 * Thirteen years of silence after Ishmael's birth, and God comes back to rename
 * everyone — a sign that identity is being rewritten. The covenant is sealed not
 * in ink but in the body itself, on the part that produces the next generation.
 * Names are how the Bible signals a life is being made new.
 */
export const GENESIS_17: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 17,

  estimatedMinutes: { beginner: 7, intermediate: 10, deep: 14 },
  intros: [
    'Thirteen years have passed since Genesis 16. Ishmael is a young man now, and Abram has settled into life as his father — but not his heir of promise. Then God appears again, and the first thing He does is rename Abram. Not with a title or a new title, but with a name that will be his for the rest of his life. <em>Abram becomes Abraham. Sarai becomes Sarah.</em> In the Bible, a name change is always a signal: your identity is being remade. You are stepping into a story that is not yours alone anymore.',
    'The centerpiece of this chapter is a covenant sign written on the body itself — the sign of circumcision. It falls on the part of the body that carries the future generations forward. The covenant is not written in words or wax; it is written in flesh. It is generational by design. Every time Abraham looks at this sign, he will see [res:bibleodyssey-abraham-covenant] the proof that his line will never end, that God is the one keeping His word, and that his body — despite his age, despite the impossibility — is the tool God is using to make a nation.',
  ],

  sections: [
    /* ─── Genesis 17:1–8 — I am Almighty God ────────────────────────────────── */
    {
      ref: 'Genesis 17:1–8',
      title: 'I am Almighty God; Walk Before Me',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 1,
              spans: [
                t('And when Abram was ninety years old and nine, the LORD appeared to Abram, and said unto him, '),
                hp('I am the Almighty God', 'god-almighty'),
                t('; '),
                t('walk before me, and be thou perfect'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'god-almighty',
          html:
            'Ninety-nine years old. The age when childbearing becomes biologically impossible. At the exact moment when every human standard says <em>enough, you have missed your season</em>, God says <em>I am El Shaddai</em> — the All-Sufficient One, the God who has enough of everything, enough power, enough blessing, enough time. God names Himself first. Before the promise. Before the covenant. Before the impossible gets made possible[res:sefaria-genesis-17][res:pennmuseum-abraham-era].',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-el-shaddai',
          title: 'El Shaddai — &ldquo;God Almighty&rdquo;',
          script: 'אֵל שַׁדַּי',
          translit: '<strong>El Shaddai</strong> · God of the mountain, the all-sufficient God',
          description:
            'The name carries the sense of mountain-strength, of one whose breast overflows with provision. The etymology is debated, but throughout Scripture El Shaddai appears at moments when God is doing the impossible: making childless women fertile, sustaining the wilderness wandering, opening blind eyes. This is God naming the kind of sufficiency He brings.',
        },
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 2,
              spans: [
                t('And I will make my '),
                hy('covenant', 'c-berith'),
                t(' between me and thee, and will '),
                t('multiply thee exceedingly'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-berith',
          html:
            'A covenant is not a deal between equals. It is a solemn binding on one side, usually the stronger, to protect and bless the weaker. When God makes a covenant, He is putting His own name and honor on the line: <em>my word binds me.</em>',
        },
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 3,
              spans: [
                t('And Abram fell on his face: and God talked with him, saying,'),
              ],
            },
            {
              number: 4,
              spans: [
                t('As for me, behold, my '),
                t('covenant is with thee'),
                t(', and thou shalt be a father of '),
                t('many nations'),
                t('.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Neither shall thy name any more be called Abram, but '),
                hy('thy name shall be Abraham', 'hebrew-abraham'),
                t('; for a father of many nations have I made thee.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-abraham',
          title: 'Abraham — &ldquo;father of a multitude&rdquo;',
          script: 'אַבְרָהָם',
          translit: '<strong>Avraham</strong> · father + multitude; the sound is almost a lullaby',
          description:
            '<em>Abram</em> simply means "exalted father." But <em>Abraham</em> is rewritten into the covenant itself — he will be father, not of one son, but of <em>multitude.</em> Every time someone calls his name, they are speaking the promise. His identity and God\'s covenant become one word.',
        },
        {
          kind: 'carry',
          html:
            'There are times when your name — the way you introduce yourself, the label others use — no longer fits the story God is writing. A name might carry old shame, old failure, old smallness. The step into what God is calling you to be sometimes starts with letting that name go and stepping into a new one. Not to pretend the old story didn\'t happen, but to name that you are no longer bound by it.',
        },
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 6,
              spans: [
                t('And I will make thee exceeding fruitful, and I will make nations of thee, and kings shall come out of thee;'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And I will '),
                hp('establish my covenant', 'covenant-eternal'),
                t(' between me and thee and thy seed after thee in their generations for an '),
                t('everlasting covenant'),
                t(', to be a God unto thee, and to thy seed after thee.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And I will give unto thee, and to thy seed after thee, the land wherein thou art a stranger, all the land of Canaan, for an everlasting possession; and I will be their God.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'covenant-eternal',
          html:
            'The word is <em>olam</em> — without end, written into the age itself. This is not a promise for Abraham alone. <em>For thy seed after thee</em> — the covenant runs through the generations. Every son of Abraham\'s line, every believer grafted into his family, will inherit the promise that God is <em>their God.</em>',
        },
        {
          kind: 'reflection',
          id: 'gen17-almighty',
          prompt:
            'When have you most needed God to be El Shaddai — all-sufficient, overflowing, enough? Where is He inviting you to trust His sufficiency now?',
        },
      ],
    },

    /* ─── Genesis 17:9–14 — The Sign of Circumcision ──────────────────────────── */
    {
      ref: 'Genesis 17:9–14',
      title: 'The Covenant Sign: Circumcision',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 9,
              spans: [
                t('And God said unto Abraham, Thou shalt keep my covenant therefore, thou, and thy seed after thee in their generations.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('This is my covenant, which ye shall keep, Between me and you and thy seed after thee; Every man child among you shall be '),
                hy('circumcised', 'hebrew-milah'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-milah',
          title: 'Milah — &ldquo;circumcision&rdquo;',
          script: 'מִילָה',
          translit: '<strong>milah</strong> · cutting, marking the beginning',
          description:
            'The sign falls on the part of the body that carries generation forward. The covenant is not abstract or spiritual-only; it is written in flesh. It is a permanent mark that says: this body belongs to God, this lineage belongs to God\'s story, and every descendant carries the sign.',
        },
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 11,
              spans: [
                t('And ye shall '),
                hg('circumcise the flesh of your foreskin', 'c-sign'),
                t('; and it shall be a token of the covenant betwixt me and you.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And he that is eight days old shall be circumcised among you, every man child in your generations: he that is born in the house, or bought with money of any stranger, which is not of thy seed.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('He that is born in thy house, and he that is bought with thy money, must needs be circumcised: and my covenant shall be in your flesh for an everlasting covenant.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And the uncircumcised man child whose flesh of his foreskin is not circumcised, that soul shall be cut off from his people; he hath broken my covenant.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-sign',
          html:
            'A covenant sign is more than a symbol. It is a marking that says <em>I belong to this God, this people, this story.</em> The sign is bodily and permanent — every time Abraham was aware of his own body, he carried the covenant with him. No one outside could force it on him. No one could remove it. It was his choice to keep it, renewed every time a son was born into his family.',
        },
        {
          kind: 'christ',
          id: 'christ-circumcision',
          title: 'Christ Connection — The Circumcision of Christ',
          html:
            'Jesus submitted to circumcision (Luke 2:21) — fully identifying with Abraham\'s covenant line. But Paul reads it forward: "Circumcision is that of the heart, in the spirit, and not in the letter" (Romans 2:29). The flesh is circumcised; the heart is transformed. "Ye are circumcised with the circumcision made without hands, in putting off the body of the sins of the flesh by the circumcision of Christ" (Colossians 2:11). What once was written on the body is now written on the heart. Baptism takes its place as the new sign — immersion into His death and resurrection, a mark that we belong to Him.',
        },
        {
          kind: 'carry',
          html:
            'The covenant sign was permanent and visible — a daily reminder written on the body. Your covenant too is marked. The sign you carry is not on your flesh but on your spirit: <em>you are His.</em> In the moments when you wonder if you still belong, if the promise is still holding, if the lineage still stands — the mark is still there. Written not in blood on the body this time, but in the resurrection life of the One who signed it with His own body, once and for all.',
        },
        {
          kind: 'reflection',
          id: 'gen17-circumcision',
          prompt:
            'What mark or decision has most shaped your identity as someone who belongs to God? How do you carry and renew that mark?',
        },
      ],
    },

    /* ─── Genesis 17:15–22 — Sarai Becomes Sarah; Isaac Named ──────────────────── */
    {
      ref: 'Genesis 17:15–22',
      title: 'Sarai Becomes Sarah; Isaac Is Named',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 15,
              spans: [
                t('And God said unto Abraham, As for Sarai thy wife, thou shalt not call her name Sarai, but '),
                hy('Sarah', 'hebrew-sarah'),
                t(' shall her name be.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And I will bless her, and give thee a son also of her: yea, I will '),
                hg('bless her, and she shall be a mother of nations', 'c-sarah-nations'),
                t('; kings of people shall be of her.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-sarah',
          title: 'Sarah — &ldquo;princess&rdquo;',
          script: 'שָׂרָה',
          translit: '<strong>Sarah</strong> · princess, the one who rules',
          description:
            '<em>Sarai</em> means "my princess" — dependent, limited to one man\'s household. <em>Sarah</em> means "princess" — a title in her own right. God renames her not down or sideways, but up. She is no longer the barren woman defined by what she cannot do. She is Sarah, mother of nations, mother of kings.',
        },
        {
          kind: 'commentary',
          id: 'c-sarah-nations',
          html:
            'The promise is not reserved for Abraham alone. Sarah is not a vessel or a bystander. She is the mother through whom nations will come. Centuries later, Paul will call the Church "the bride of Christ," using the language of a wife brought into her husband\'s glory, now seated with him. Sarah is the first picture of this: the woman renamed, elevated, made a mother of multitudes.',
        },
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 17,
              spans: [
                t('Then Abraham fell upon his face and laughed, and said in his heart, Shall a child be born unto him that is an hundred years old? and shall Sarah, that is ninety years old, '),
                hg('bear a child', 'c-laughter'),
                t('?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-laughter',
          html:
            'Abraham\'s laughter is neither mocking nor purely joyful. The Hebrew root of his laugh — <em>tzachak</em> — is the same root as the name <em>Yitzchak</em>, Isaac. The text is not saying Abraham laughed from unbelief. It is saying Abraham laughed because the promise was so impossible, so wildly beyond the boundaries of what could happen, that laughter was the only response he could make. The laugh is the sound of the boundary breaking.',
        },
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 18,
              spans: [
                t('And Abraham said unto God, O that Ishmael might live before thee!'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And God said, Sarah thy wife shall bear thee a son indeed; and thou shalt call his name '),
                hy('Isaac', 'hebrew-isaac'),
                t(': and I will establish my covenant with him for an everlasting covenant, and with his seed after him.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-isaac',
          title: 'Isaac — &ldquo;he laughs&rdquo;',
          script: 'יִצְחָק',
          translit: '<strong>Yitzchak</strong> · he laughs, he laughs aloud',
          description:
            'Not "he is laughed at," but "he laughs." The child\'s very name encodes the miracle — the sound of an old man\'s laughter at the promise of an old woman becoming fertile. Every time Abraham and Sarah call his name, they call out the impossible that became real.',
        },
        {
          kind: 'carry',
          html:
            'Sarah heard it all the first time — the promise that at ninety she would bear a child. Ninety. The age when your body has decided the story is closed. And yet the promise stands. Maybe your own story looks impossible from where you stand. The timeline has run out. The doctors have said no. The years have said it\'s too late. The promise in that moment is not to change the circumstances. It is to rename you: not the one who cannot, but the one called to mother something in this world, to be fruitful, to bring something forward. Whether that is a literal child or a life you steward, a dream you nurture, a gift you give — you are not too old, not too barren, not too broken to be a Sarah.',
        },
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 20,
              spans: [
                t('And as for Ishmael, I have heard thee: Behold, I have blessed him, and will make him fruitful, and will multiply him exceedingly; '),
                hg('twelve princes shall he beget', 'c-ishmael'),
                t(', and I will make him a great nation.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('But my '),
                t('covenant will I establish with Isaac'),
                t(', which Sarah shall bear unto thee at this set time in the next year.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And he left off talking with him, and God went up from Abraham.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-ishmael',
          html:
            'God does not dismiss Ishmael. He blesses him, explicitly and generously. But He makes the distinction clear: Ishmael is blessed. Isaac is the heir. The covenant line runs through the one born of the promise, not the one born of Abram\'s own strength. This is not a rejection of Ishmael; it is a statement that God\'s covenant works through what He does, not through what we arrange.',
        },
        {
          kind: 'reflection',
          id: 'gen17-isaac',
          prompt:
            'What is the promised thing in your life that seems impossible by every timeline and standard? Can you hear it being named for you — not someday, but this coming year?',
        },
      ],
    },

    /* ─── Genesis 17:23–27 — Abraham Circumcises His Household ──────────────────── */
    {
      ref: 'Genesis 17:23–27',
      title: 'Abraham and His Household Circumcised',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 23,
              spans: [
                t('And Abraham took Ishmael his son, and all that were born in his house, and all that were bought with his money, every male among the men of Abraham\'s house; and '),
                hg('circumcised the flesh of their foreskin', 'c-household'),
                t(' in the selfsame day, as God had said unto him.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And Abraham was ninety years old and nine, when he was circumcised in the flesh of his foreskin.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And Ishmael his son was thirteen years old, when he was circumcised in the flesh of his foreskin.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('In the selfsame day was Abraham circumcised, and Ishmael his son.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And all the men of his house, born in the house, and bought with money of the stranger, were circumcised with him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-household',
          html:
            '<em>In the selfsame day.</em> Abraham does not wait. He does not deliberate or delay. The covenant is given, and he acts on it immediately — and he brings his whole household with him. Ishmael at thirteen, every servant born in his house, every person he has brought into his family. The sign is not just for the blood-descendants; it is for everyone Abraham\'s life touches. When Abraham steps into the covenant, his whole world steps in with him.',
        },
        {
          kind: 'carry',
          html:
            'When you step into a covenant with God — when you decide that this promise is your boundary and your belonging — you rarely take that step alone. The people around you see it. Some will follow. Some will resist. Some will not understand. But your decision to be marked, to carry the sign, to keep the covenant — that ripples. The people you lead, the children you raise, the household you steward — they inherit both your faithfulness and, if you keep breaking it, your wavering. What mark are you carrying that will be carried by those who follow you?',
        },
        {
          kind: 'reflection',
          id: 'gen17-household',
          prompt:
            'Whose household are you part of — spiritually, relationally, professionally? What would it mean to bring them fully into a covenant you have made?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Genesis 17',
    quote:
      'God appeared to Abraham at ninety-nine years old and renamed him. Sarah was renamed too. The covenant was sealed with a sign on the body — circumcision — a mark that would run through every generation. And the impossible was named: Sarah would bear a son, and he would be called Isaac.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 17 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-genesis-17',
      kind: 'lexicon',
      source: 'Sefaria',
      label: 'Genesis 17 · Hebrew + Jewish commentary',
      url: 'https://www.sefaria.org/Genesis.17',
      description: 'Hebrew text with rabbinic commentary on the covenant, circumcision, and the promise of Isaac.',
    },
    {
      id: 'pennmuseum-abraham-era',
      kind: 'museum',
      source: 'Penn Museum',
      label: 'Mari & Nuzi Tablets (Abraham&apos;s era)',
      url: 'https://www.penn.museum/collections/west-asia/',
      description: 'Ancient Near Eastern covenant rituals and naming practices illuminating Abraham&apos;s world.',
    },
    {
      id: 'bibleodyssey-abraham-covenant',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Abraham and the Covenant',
      url: 'https://www.bibleodyssey.org/articles/abraham-sarah/',
      description: 'SBL article on the Abrahamic covenant, the promise of Isaac, and God&apos;s covenant sign.',
    },
  ],

  hasHebrew: true,
};
