import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 2 - the second account of creation, zoomed in on Day 6.
 *
 * Genesis 1 watches creation from far away, like a satellite. Genesis 2
 * comes down to ground level: one man, one garden, two trees, one rib,
 * one woman. Where chapter 1 names God Elohim - the Maker of all things
 * - chapter 2 names Him Yahweh Elohim, the LORD God: closer, covenanted,
 * a Father bending over the dust to give it His breath.
 */
export const GENESIS_2: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 2,

  estimatedMinutes: { beginner: 10, intermediate: 15, deep: 22 },
  intros: [
    'Genesis 1 watched creation from far away, day by day, sky and sea and land. Genesis 2 comes down to ground level. The lens narrows to a single garden, a single man formed from the dust, a single tree at the center, a single woman drawn from the man&apos;s side. Chapter 1 calls God by His Maker-name, <em>Elohim</em>. Chapter 2 calls Him <em>Yahweh Elohim</em> - &ldquo;the LORD God&rdquo; - closer, covenanted, a Father bending over dust to give it His breath.',
    'Two themes run through the chapter and meet at the end: <em>provision</em> and <em>partnership</em>. God plants every kind of tree the man could need. He digs four rivers to water the world. He gives the man work to do, and a single boundary to keep. And then He says the only &ldquo;not good&rdquo; in the Bible: <em>not good that the man should be alone[res:intertextual-genesis-ezer].</em> The chapter closes with a marriage in the world&apos;s first temple - a man and a woman, naked and not ashamed, in the place where God walks.',
  ],

  bottomShare: {
    label: 'Share Genesis 2',
    quote:
      'God formed man from the dust and breathed His own life into him. He planted a garden, set the man in it to keep it, and gave him a partner drawn from his own side - bone of his bone, flesh of his flesh.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 2 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-genesis-2',
      kind: 'lexicon',
      source: 'Sefaria',
      label: 'Genesis 2 · Hebrew + Jewish commentary',
      url: 'https://www.sefaria.org/Genesis.2',
      description: 'Hebrew text with Rashi and medieval commentary on creation, Eden, and the Sabbath.',
    },
    {
      id: 'bibleodyssey-garden-of-eden',
      kind: 'study',
      source: 'Bible Odyssey (SBL)',
      label: 'Garden of Eden',
      url: 'https://www.bibleodyssey.org/dictionary/garden-of-eden/',
      description: 'SBL overview of Eden as theological and spatial reality, with archaeological context.',
    },
    {
      id: 'intertextual-genesis-ezer',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'Ezer (helper) across scripture',
      url: 'https://intertextual.bible/concepts/ezer',
      description: 'Traces the Hebrew word for Eve\'s role across OT - showing its strength and dignity.',
    },
  ],

  sections: [
    /* ─── Genesis 2:1-3 - The Seventh Day ────────────────────────────── */
    {
      ref: 'Genesis 2:1-3',
      title: 'The Seventh Day, Hallowed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 1,
              spans: [t('Thus the heavens and the earth were finished, and all the host of them.')],
            },
            {
              number: 2,
              spans: [
                t('And on the seventh day God ended his work which he had made; and he '),
                hy('rested', 'c-shabbat'),
                t(' on the seventh day from all his work which he had made.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And '),
                hg('God blessed the seventh day, and sanctified it', 'c-sanctified'),
                t(': because that in it he had rested from all his work which God '),
                hp('created and made', 'christ-rest-2'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-shabbat',
          html:
            'God is not tired; the work is finished. In the ancient world a king &ldquo;rested&rdquo; when his temple was completed - meaning he moved in and began to reign. Day seven is God enthroned in the cosmos He has just built. The whole creation is His temple. The man and the woman, made in His image, are the priests inside it[res:sefaria-genesis-2][res:bibleodyssey-garden-of-eden].',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shabbat',
          title: 'Shabbat - &ldquo;ceased, kept sabbath&rdquo;',
          script: 'שָׁבַת',
          translit: '<strong>shabat</strong> · to cease, to stop, to keep sabbath',
          description:
            'The Hebrew verb behind &ldquo;rested&rdquo; is not <em>nuach</em> (to relax) but <em>shabat</em> (to cease). Sabbath is not God catching His breath; it is God laying His tools down because the work is good and complete. Every weekly Sabbath since is the people of God agreeing with Him: <em>this is enough.</em>',
        },
        {
          kind: 'commentary',
          id: 'c-sanctified',
          html:
            'The first thing in the Bible called <em>holy</em> is not a place, a person, or a ritual. It is a day. Time itself can be set apart for God - and the day He sets apart is the only day in the seven that has no &ldquo;evening and morning,&rdquo; no closing phrase. Day seven is left open in the text. As if waiting for someone to step into it.',
        },
        {
          kind: 'christ',
          id: 'christ-rest-2',
          title: 'Christ Connection - The Open Seventh Day',
          html:
            'Hebrews picks up the unfinished day: &ldquo;There remaineth therefore a rest to the people of God&rdquo; (Heb. 4:9). Jesus steps into that open seventh day and says, &ldquo;Come unto me, all ye that labour and are heavy laden, and I will give you rest&rdquo; (Matt. 11:28). Creation does not end with a closed door. It ends with an invitation - and Christ is the way in.',
        },
        {
          kind: 'carry',
          html:
            'A holy day in the modern world doesn&apos;t arrive as a rule; it arrives as a relief. One day a week where you stop producing and start receiving. A long meal with the people you love. A walk without a podcast. Phones in a drawer. Saying out loud what the rest of the week is too busy to admit: <em>the world can turn without me, because God is the one holding it together.</em> The Sabbath is God&apos;s weekly way of teaching you that you are a human, not a machine, and that your worth is never your output.',
        },
        {
          kind: 'reflection',
          id: 'gen2-sabbath',
          prompt:
            'If one day a week truly belonged to God and to you together, which day would it be? What would you set down? What would you pick up?',
        },
      ],
    },

    /* ─── Genesis 2:4-7 - Dust and Breath ────────────────────────────── */
    {
      ref: 'Genesis 2:4-7',
      title: 'Dust and Breath',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 4,
              spans: [
                t('These are the generations of the heavens and of the earth when they were created, in the day that the '),
                hg('LORD God', 'c-yahweh'),
                t(' made the earth and the heavens,'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And every plant of the field before it was in the earth, and every herb of the field before it grew: for the LORD God had not caused it to rain upon the earth, and there was not a man to till the ground.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('But there went up a mist from the earth, and watered the whole face of the ground.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And the LORD God '),
                hy('formed man of the dust of the ground', 'hebrew-adam-adamah'),
                t(', and '),
                hp('breathed into his nostrils the breath of life', 'christ-breath'),
                t('; and man became a '),
                hy('living soul', 'hebrew-nephesh'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-yahweh',
          html:
            'Chapter 1 calls God <em>Elohim</em> - the powerful Maker. Chapter 2 calls Him <em>Yahweh Elohim</em>, the LORD God. <em>Yahweh</em> is the covenant name, the name He will later give to Moses at the burning bush. The same God who spoke galaxies into being kneels in the dust to shape one man, and the Bible wants you to know it is the same Person.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-adam-adamah',
          title: 'Adam · Adamah - &ldquo;earthling · earth&rdquo;',
          script: 'אָדָם · אֲדָמָה',
          translit: '<strong>adam</strong> · the man / <strong>adamah</strong> · the ground',
          description:
            'The man&apos;s name is the Hebrew word for the ground he is made from. He is &ldquo;earthling.&rdquo; Every human being carries the dust of the planet in their bones - a built-in reminder that we belong here, that we are not strangers to the earth, and that humility (literally <em>humus</em>, ground) is closer to our nature than pride.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-nephesh',
          title: 'Nephesh chayyah - &ldquo;living being&rdquo;',
          script: 'נֶפֶשׁ חַיָּה',
          translit: '<strong>nephesh chayyah</strong> · a living, breathing creature',
          description:
            'The same phrase is used in Genesis 1:20 of fish and birds. Humans are not less embodied than animals - we are dust + breath, body and soul together. Greek philosophy will later treat the soul as a prisoner inside the body; the Hebrew Bible treats them as a single thing. You are not a soul that has a body. You are a living, breathing person.',
        },
        {
          kind: 'christ',
          id: 'christ-breath',
          title: 'Christ Connection - The Second Breath',
          html:
            'The risen Jesus walks into a locked room and does something only the Creator has ever done: He breathes on His disciples. &ldquo;He breathed on them, and saith unto them, Receive ye the Holy Ghost&rdquo; (John 20:22). The same breath that turned dust into Adam now turns frightened fishermen into the Church. Paul puts the line directly: &ldquo;The first man Adam was made a living soul; the last Adam was made a quickening spirit&rdquo; (1 Cor. 15:45). Genesis 2:7 is where Christianity&apos;s anthropology starts: every person carries the breath of God.',
        },
        {
          kind: 'carry',
          html:
            'Look at the back of your hand for a moment. Skin and bone, the same dust the rest of creation is made of. Then take a breath. The breath you just took is, in the Bible&apos;s telling, the breath God gave Adam - the same kind of life that the risen Jesus breathed on the apostles. Whatever you have done today, whatever has been done to you, you are still <em>nephesh chayyah</em>. A living being. Loved. Held together by the breath of God.',
        },
        {
          kind: 'reflection',
          id: 'gen2-dust',
          prompt:
            'Where has shame or failure made you forget that you are dust + breath, made on purpose? What would change if you really believed it again?',
        },
      ],
    },

    /* ─── Genesis 2:8-14 - A Garden Eastward in Eden ─────────────────── */
    {
      ref: 'Genesis 2:8-14',
      title: 'A Garden Eastward in Eden',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 8,
              spans: [
                t('And the LORD God planted a '),
                hg('garden eastward in Eden', 'c-garden'),
                t('; and there he put the man whom he had formed.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And out of the ground made the LORD God to grow every tree that is pleasant to the sight, and good for food; '),
                hp('the tree of life', 'christ-tree-life'),
                t(' also in the midst of the garden, and the tree of knowledge of good and evil.'),
              ],
            },
            {
              number: 10,
              spans: [t('And a river went out of Eden to water the garden; and from thence it was parted, and became into four heads.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'genesis-2-78mid-1',
          html: 'The garden&apos;s river flows outward, and now we count its headwaters-Eden&apos;s abundance measured and mapped across the known world.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 11,
              spans: [t('The name of the first is Pison: that is it which compasseth the whole land of Havilah, where there is gold;')],
            },
            {
              number: 12,
              spans: [t('And the gold of that land is good: there is bdellium and the onyx stone.')],
            },
            {
              number: 13,
              spans: [t('And the name of the second river is Gihon: the same is it that compasseth the whole land of Ethiopia.')],
            },
            {
              number: 14,
              spans: [t('And the name of the third river is Hiddekel: that is it which goeth toward the east of Assyria. And the fourth river is Euphrates.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-garden',
          html:
            'The Hebrew for &ldquo;garden&rdquo; is <em>gan</em> - an enclosed, irrigated park, the kind of place ancient kings would build for themselves. God doesn&apos;t plop the man down on a plain and tell him to figure it out. He plants a place. Eden means &ldquo;delight.&rdquo; The first home of humanity is a place a King would call beautiful, made for the people He loves.',
        },
        {
          kind: 'commentary',
          id: 'c-rivers',
          html:
            'The four rivers run out from Eden to the four corners of the world. Eden is not a tucked-away private resort - it is the source. From this one garden, water and gold and onyx flow out to fill the earth. The garden is a temple, and the temple is the spring. Centuries later, Ezekiel will see a river flowing out of the new temple (Ezek. 47), and John will see a river flowing from the throne of God and of the Lamb (Rev. 22:1). The shape never changes: God&apos;s presence at the center, and a river running out from Him to heal the world.',
        },
        {
          kind: 'christ',
          id: 'christ-tree-life',
          title: 'Christ Connection - The Tree at the Center',
          html:
            'The tree of life stands at the center of Eden. After the Fall, the way to it is barred (Gen. 3:24). On the last page of the Bible the way is opened again: &ldquo;the tree of life, which bare twelve manner of fruits&rdquo; (Rev. 22:2), and the leaves are for the healing of the nations. The fathers of the Church saw the cross as the new tree of life - the Tree God allowed humanity to eat from again. Whatever path led you out of the garden, it is a Tree that leads you back.',
        },
        {
          kind: 'carry',
          html:
            'God&apos;s first move toward the man He just made was not to give him a list. It was to plant a place. Beautiful trees, every kind of food, four rivers and gold and onyx, all for the man to enjoy. Whatever you have learned about God - strict, distant, hard to please - Genesis 2 tells a different story up front. He is a Father who plants gardens for the people He loves, and tells them to enjoy what He grew.',
        },
        {
          kind: 'reflection',
          id: 'gen2-garden',
          prompt:
            'Where in your week is there a garden - a small place of beauty, abundance, rest? What would it look like to receive it as a gift, instead of feeling like you should be doing something else?',
        },
      ],
    },

    /* ─── Genesis 2:15-17 - Dress It and Keep It ─────────────────────── */
    {
      ref: 'Genesis 2:15-17',
      title: 'Dress It and Keep It',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 15,
              spans: [
                t('And the LORD God took the man, and put him into the garden of Eden to '),
                hy('dress it and to keep it', 'hebrew-avad-shamar'),
                t('.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And the LORD God commanded the man, saying, '),
                hg('Of every tree of the garden thou mayest freely eat', 'c-freely'),
                t(':'),
              ],
            },
            {
              number: 17,
              spans: [
                t('But of the '),
                hp('tree of the knowledge of good and evil', 'christ-second-adam'),
                t(', thou shalt not eat of it: for in the day that thou eatest thereof thou shalt surely die.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-avad-shamar',
          title: 'Avad · Shamar - &ldquo;to serve · to guard&rdquo;',
          script: 'עָבַד · שָׁמַר',
          translit: '<strong>avad</strong> · to work, serve, worship / <strong>shamar</strong> · to keep, guard, watch over',
          description:
            'These are not gardening words; they are temple words. They are the same two verbs Moses will later use for the work of the priests in the tabernacle (Num. 3:7-8). Adam&apos;s job in Eden is the priest&apos;s job in the temple: serve the place and guard it. Human work, from the very beginning, is liturgical. To till a field, raise a child, run a business, cook a meal - done before God - is a kind of priesthood.',
        },
        {
          kind: 'commentary',
          id: 'c-freely',
          html:
            'The first word God speaks to the man is permission, not prohibition: <em>of every tree of the garden thou mayest freely eat.</em> God is not a stingy boss; He is a generous host. There is one boundary, and it comes only after a vast yes. We tend to remember Eden as a list of one rule. Eden was a garden of yeses with a single, careful no.',
        },
        {
          kind: 'christ',
          id: 'christ-second-adam',
          title: 'Christ Connection - The Second Adam in a Wilderness',
          html:
            'Where Adam is given a garden of yeses with a single no, the second Adam is taken to a wilderness with no food at all. The serpent says, <em>command this stone to be made bread.</em> Jesus answers from Deuteronomy: &ldquo;Man shall not live by bread alone&rdquo; (Luke 4:4). The first Adam was offered a tree and took. The last Adam was offered a tree and refused - and went to a different tree, and was given over to it for our sake. The story of the Bible is the story of the second Adam undoing what the first one did.',
        },
        {
          kind: 'carry',
          html:
            'Most of God&apos;s commands begin with a much larger gift. Sabbath rest is given inside a six-day permission to work. The boundary on the tree was given inside a permission to eat from every other tree in the world. When you next feel the weight of a &ldquo;no,&rdquo; ask what the &ldquo;yes&rdquo; around it is. Almost always there&apos;s a garden you forgot to notice.',
        },
        {
          kind: 'reflection',
          id: 'gen2-yes',
          prompt:
            "What 'no' from God have you been carrying as if it were the whole picture? What 'yes' was it sitting inside that you stopped seeing?",
        },
      ],
    },

    /* ─── Genesis 2:18-20 - Not Good to Be Alone ─────────────────────── */
    {
      ref: 'Genesis 2:18-20',
      title: 'Not Good to Be Alone',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 18,
              spans: [
                t('And the LORD God said, '),
                hg('It is not good that the man should be alone', 'c-not-good'),
                t('; I will make him an '),
                hy('help meet for him', 'hebrew-ezer'),
                t('.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And out of the ground the LORD God formed every beast of the field, and every fowl of the air; and brought them unto Adam to see what he would call them: and whatsoever Adam called every living creature, that was the name thereof.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And Adam '),
                hg('gave names', 'c-naming'),
                t(' to all cattle, and to the fowl of the air, and to every beast of the field; but for Adam there was not found an help meet for him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-not-good',
          html:
            'Six times in Genesis 1, God looks at His work and says it is good. Once, He looks at the whole and says it is very good. The first &ldquo;not good&rdquo; in the Bible is solitude. Even in a perfect garden, with God Himself walking close, the man being alone is the only thing the Maker pauses and corrects. We were not made to do this by ourselves. Loneliness is older than the Fall.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-ezer',
          title: 'Ezer kenegdo - &ldquo;help meet for him&rdquo;',
          script: 'עֵזֶר כְּנֶגְדּוֹ',
          translit: '<strong>ezer kenegdo</strong> · a strong helper corresponding to him',
          description:
            'The word <em>ezer</em> sounds gentle in English but is a strong word in Hebrew. It is used twice of Eve and twenty more times in the Old Testament - most often of God Himself, the &ldquo;helper&rdquo; of His people in battle (Ex. 18:4, Deut. 33:7, Ps. 33:20). <em>Kenegdo</em> means &ldquo;corresponding to, opposite, matching.&rdquo; Eve is not a subordinate; she is a strong companion who fits Adam exactly. The first marriage is two strengths meeting.',
        },
        {
          kind: 'commentary',
          id: 'c-naming',
          html:
            'God brings the animals to Adam &ldquo;to see what he would call them.&rdquo; Naming, in the ancient Near East, is what kings do. To name something is to discern its nature and to take responsibility for it. Adam&apos;s priestly vocation in verse 15 has now become a royal one too. Yet at the end of his first day&apos;s work, the inventory is not full. He is good at his job and still alone. Some longings work cannot fill.',
        },
        {
          kind: 'carry',
          html:
            'God could have made Eve in the same breath as Adam. He didn&apos;t. He let Adam feel the absence first - let him discover, after naming every animal, that nothing in all creation matched him. The longings you carry that work and hobbies and even great causes don&apos;t satisfy are not a flaw. They are the same ache God put in Adam to make him ready for what came next. The places where you feel most alone are where God is most likely to show you His next gift.',
        },
        {
          kind: 'reflection',
          id: 'gen2-alone',
          prompt:
            'Where in your life have you been trying to fill an &ldquo;ezer-shaped&rdquo; longing with work, with screens, with food, with achievement? What might happen if you let yourself feel it instead?',
        },
      ],
    },

    /* ─── Genesis 2:21-23 - Bone of My Bones ─────────────────────────── */
    {
      ref: 'Genesis 2:21-23',
      title: 'Bone of My Bones',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 21,
              spans: [
                t('And the LORD God caused a deep sleep to fall upon Adam, and he slept: and he took '),
                hp('one of his ribs', 'christ-side'),
                t(', and closed up the flesh instead thereof;'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And the rib, which the LORD God had taken from man, '),
                hg('made he a woman', 'c-built'),
                t(', and brought her unto the man.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And Adam said, This is now bone of my bones, and flesh of my flesh: she shall be called '),
                hy('Woman', 'hebrew-ish-isshah'),
                t(', because she was taken out of Man.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-built',
          html:
            'The Hebrew verb in verse 22 is <em>banah</em> - &ldquo;built.&rdquo; God did not <em>form</em> Eve as He formed Adam from dust; He <em>built</em> her, the way you build a temple. The animals were formed from the ground; the woman is built from the man&apos;s side, the same material, made with the care God uses for sacred architecture.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-ish-isshah',
          title: 'Ish · Isshah - &ldquo;man · woman&rdquo;',
          script: 'אִישׁ · אִשָּׁה',
          translit: '<strong>ish</strong> · man / <strong>isshah</strong> · woman',
          description:
            'Until now the man has been <em>adam</em> (earthling). When the woman appears he speaks for the first time and gives them both new names: <em>ish</em> and <em>isshah</em> - words that share a root, that mirror each other in sound. He is naming her not as below him but as <em>like</em> him. The first poetry in the Bible is a love song. The first thing the man does with his voice is praise.',
        },
        {
          kind: 'christ',
          id: 'christ-side',
          title: 'Christ Connection - From the Side of the Sleeping Man',
          html:
            'The early Church read this passage and never got over it. Adam falls into a deep sleep; from his pierced side, God builds the bride He will give him. On a Friday afternoon many ages later, the second Adam is laid into a sleep deeper than any other; from His pierced side flow blood and water (John 19:34) - and out of that sleep, the New Testament tells us, the bride of Christ is built (Eph. 5:31-32). What was promised in a garden was finished on a hill.',
        },
        {
          kind: 'carry',
          html:
            'Whatever has happened in your story, you were built - <em>banah</em>, like a temple. You were not an afterthought, not a backup plan, not God scrambling to fill a gap. The Maker took His time. Bone of bone, flesh of flesh, the careful work of a Father who builds the people He loves.',
        },
        {
          kind: 'reflection',
          id: 'gen2-built',
          prompt:
            'When was the last time you let yourself believe you are not a problem to be solved but a person God built on purpose? What does today look like if you start there?',
        },
      ],
    },

    /* ─── Genesis 2:24-25 - One Flesh ────────────────────────────────── */
    {
      ref: 'Genesis 2:24-25',
      title: 'One Flesh',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            {
              number: 24,
              spans: [
                t('Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be '),
                hp('one flesh', 'christ-one-flesh'),
                t('.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And they were both '),
                hg('naked, the man and his wife, and were not ashamed', 'c-naked'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-cleave',
          html:
            'The Hebrew for &ldquo;cleave&rdquo; is <em>davaq</em> - to stick to, to be welded to. The same word is used of a believer holding fast to God (Deut. 10:20). The marriage in Eden is a covenant of welding: a permanent joining where two become a new third thing, and the seam is meant to disappear.',
        },
        {
          kind: 'commentary',
          id: 'c-naked',
          html:
            'The chapter ends with two people fully seen and fully accepted. No clothing, no hiding, no fear of being known. This is the world before shame entered. By the next page, fig leaves will go on, and a long road of human hiding will begin. But Genesis tells you what God meant in the first place - the kind of intimacy human beings are made for. The next time the Bible describes someone fully seen and not ashamed, it is at the end of all things, when the bride steps forward in her white robes and is not afraid.',
        },
        {
          kind: 'christ',
          id: 'christ-one-flesh',
          title: 'Christ Connection - A Mystery of Christ and the Church',
          html:
            'Paul quotes this verse in Ephesians 5:31-32 and adds something startling: &ldquo;This is a great mystery: but I speak concerning Christ and the church.&rdquo; The marriage of Adam and Eve was never just about marriage. It was a picture, from the first chapter of human history, of a love story God had been planning all along. Every faithful marriage on earth is a tiny copy of the bigger story, where Christ leaves His Father&apos;s house and cleaves to His bride forever.',
        },
        {
          kind: 'carry',
          html:
            'The vision Genesis closes with - a man and woman seen and unashamed, in a garden God planted - is the world the gospel is restoring. Not by pretending the fig leaves of your life are not there, but by walking with you back to the place where you don&apos;t need them anymore. Whatever shame you woke up with this morning is not the last word over you. The last word is: <em>not ashamed</em>.',
        },
        {
          kind: 'reflection',
          id: 'gen2-not-ashamed',
          prompt:
            'Where are you wearing fig leaves today - hiding a part of your story, your body, your fear, your sin? What would it take to let one trusted person, and God, see what is under them?',
        },
      ],
    },
  ],
};
