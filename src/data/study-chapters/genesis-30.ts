import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 30 — the rivalry of the sisters. Rachel barren, gives Bilhah.
 * Leah gives Zilpah. The eight more sons born, plus Dinah. The mandrakes
 * incident. Joseph finally born to Rachel. Jacob's wage negotiation: speckled
 * and spotted flocks; the peeled rods at the watering troughs. Jacob grows
 * rich. The sisters are competitive; the text doesn't judge them. God is
 * building Israel out of THIS family, dysfunction and all.
 */
export const GENESIS_30: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 30,

  estimatedMinutes: { 5: 10, 10: 15, 15: 21 },
  intros: [
    'Genesis 30 is the story of two sisters locked in a fertility competition. Rachel, the beloved wife, remains barren. Leah, the unwanted wife, keeps bearing sons. Rather than waiting on God, each sister finds a solution outside the covenant: they offer their handmaids to Jacob as surrogate wives. What follows is a catalog of eight more sons—Dan, Naphtali, Gad, Asher, Issachar, Zebulun, Dinah, and finally Joseph—born from four different mothers. The text reports this without comment. No sermon, no moral judgment. God is simply building His people out of a family that is messy, driven by envy, and utterly human.',
    'Then comes the mandrakes—a plant tied to ancient fertility folklore—and a marital negotiation so odd it sounds almost like a joke. But underneath the rivalries and the magical thinking is a deeper truth: God keeps His covenant not because the people who bear it are noble or patient, but because His word is inviolable. By the end, Jacob has won a new wage deal with Laban and begins to grow rich, not by magic rods but by selective breeding and God&apos;s favor. The chapter ends on the edge of Jacob&apos;s next trial: Laban&apos;s jealousy and the call to go home.',
  ],

  bottomShare: {
    label: 'Share Genesis 30',
    quote:
      'God built Israel out of Jacob and his four wives—Leah, Rachel, Bilhah, and Zilpah—each bearing sons, each competing, each longing. The pattern holds even now: God builds His people from broken families and answered prayers that come in shapes we didn&apos;t expect.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 30 · Study Guide',
  },

  sections: [
    /* ─── Genesis 30:1–8 — Rachel Gives Bilhah ────────────────────────── */
    {
      ref: 'Genesis 30:1–8',
      title: 'Rachel&apos;s Longing, Bilhah&apos;s Bearing',
      blocks: [
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 1,
              spans: [
                t('And when Rachel saw that she bare Jacob no children, Rachel '),
                hg('envied her sister', 'c-envy'),
                t('; and said unto Jacob, Give me children, or else '),
                hp('I die', 'christ-rachel-die'),
                t('.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And Jacob&apos;s anger was kindled against Rachel: and he said, Am I in God&apos;s stead, who hath withheld from thee the fruit of the womb?'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And she said, Behold my maid '),
                hy('Bilhah', 'hebrew-bilhah'),
                t(', go in unto her; and she shall bear upon my knees, that '),
                hg('I may also have children by her', 'c-surrogate'),
                t('.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And she gave him Bilhah her handmaid to wife: and Jacob went in unto her.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And Bilhah conceived, and bare Jacob a son.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And Rachel said, '),
                hg('God hath judged me', 'c-dan'),
                t(', and hath also heard my voice, and hath given me a son: therefore called she his name '),
                hy('Dan', 'hebrew-dan'),
                t('.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And Bilhah Rachel&apos;s maid conceived again, and bare Jacob a second son.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And Rachel said, '),
                hg('With great wrestlings have I wrestled with my sister, and I have prevailed', 'c-wrestling-prevailed'),
                t(': and she called his name '),
                hy('Naphtali', 'hebrew-naphtali'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-envy',
          html:
            'Rachel sees what Leah has been given and that longing becomes rage. Envy in the Bible is not a small sin; it is the refusal to receive. Rachel sees a sister&apos;s fruitfulness and instead of waiting, she seizes. But the text doesn&apos;t moralise. It simply watches what hunger does to a person you love.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-bilhah',
          title: 'Bilhah — "bashful"',
          script: 'בִלְהָה',
          translit: '<strong>bilhah</strong> · bashful, confused',
          description:
            'Bilhah is Rachel&apos;s handmaid, a woman whose own story the Bible barely tells. Yet she becomes one of the four mothers of Israel. She bears two sons and her role in Jacob&apos;s family is never hers to choose — it belongs to Rachel&apos;s desperation.',
        },
        {
          kind: 'commentary',
          id: 'c-surrogate',
          html:
            'Rachel doesn&apos;t ask; she commands. &ldquo;Go in unto her; and she shall bear upon my knees.&rdquo; The practice of surrogate motherhood was culturally accepted (Leah will do the same), but the text shows us a sister so frantic for children that she treats another woman&apos;s body as a solution to her own pain. The handmaids in this chapter are never asked what they want.',
        },
        {
          kind: 'commentary',
          id: 'c-dan',
          html:
            'Rachel calls her first surrogate son &ldquo;Dan&rdquo;—not because Bilhah chose it, but because Rachel names him for her own victory. She is claiming his birth as her own. &ldquo;God hath judged me&rdquo;—God has vindicated her in the eyes of her sister. The longing for a child has warped into the longing to win.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-dan',
          title: 'Dan — "judged"',
          script: 'דָן',
          translit: '<strong>dan</strong> · he judged, vindication',
          description:
            'The root is <em>din</em>, to judge or vindicate. Rachel hears in her barrenness a verdict against her, and in Bilhah&apos;s sons a reversal of that sentence. Dan will become one of the twelve tribes of Israel, though born from a mother not his own.',
        },
        {
          kind: 'commentary',
          id: 'c-wrestling-prevailed',
          html:
            'Rachel names him for her victory in the competition. She has prevailed over Leah, for now. Yet the name carries a deeper truth: wrestling itself—with God, with circumstance, with the people you love—is what it means to seek His face. Jacob will wrestle God directly and survive; Rachel is wrestling her sister and God will hear her.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-naphtali',
          title: 'Naphtali — "wrestled"',
          script: 'נַפְתָּלִי',
          translit: '<strong>naphtali</strong> · my wrestling, I have wrestled',
          description:
            'The root is <em>nifthal</em>, to wrestle or grapple. Rachel&apos;s name for her second surrogate son comes not from God&apos;s grace but from her own struggle. Yet the same root will describe Jacob wrestling the angel (Genesis 32:24). In the Bible, wrestling—whether with God or with your rival—is the way God&apos;s people learn to receive His blessing.',
        },
        {
          kind: 'christ',
          id: 'christ-rachel-die',
          title: 'Christ Connection — The Barren Woman Who Bears',
          html:
            'Rachel cries, &ldquo;Give me children, or else I die.&rdquo; Across the Bible, God has a pattern of choosing barren women—Sarah, Hannah, Elizabeth—and opening their wombs not in the timing they demanded but in His. Hannah will sing, &ldquo;The barren hath borne seven; and she that hath many children is waxed feeble&rdquo; (1 Sam. 2:5). Rachel will finally bear Joseph and then Benjamin, and it is Rachel&apos;s own line—through Joseph&apos;s two tribes—that becomes the mightiest in Israel. The delay was not punishment; it was the shape of His promise.',
        },
        {
          kind: 'carry',
          html:
            'Longing can become envy in a breath. Rachel looked at Leah&apos;s fruitfulness and instead of asking God, she seized. But watch what happens anyway: the children born from Bilhah become hers, and the waiting—the barrenness she cannot undo—becomes the shape of her story too. Whatever you are longing for that hasn&apos;t come, the delay is not indifference. God sees the waiting. And sometimes the deepest fruit comes after the longest dark.',
        },
        {
          kind: 'reflection',
          id: 'gen30-rachel-longing',
          prompt:
            'Where is your envy loudest—what do you see in someone else that makes you feel the sharp <em>I</em> <em>should</em> <em>have</em> that? What would it look like to turn that hunger toward God instead of toward her?',
        },
      ],
    },

    /* ─── Genesis 30:9–13 — Leah Gives Zilpah ───────────────────────────── */
    {
      ref: 'Genesis 30:9–13',
      title: 'Leah&apos;s Answer, Zilpah&apos;s Fortune',
      blocks: [
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 9,
              spans: [
                t('When Leah saw that she had left bearing, she took her maid '),
                hy('Zilpah', 'hebrew-zilpah'),
                t(', and gave her Jacob to wife.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And Zilpah Leah&apos;s maid bare Jacob a son.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And Leah said, A '),
                hg('troop cometh', 'c-gad'),
                t(': and she called his name '),
                hy('Gad', 'hebrew-gad'),
                t('.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And Zilpah Leah&apos;s maid bare Jacob a second son.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And Leah said, '),
                hg('Happy am I', 'c-asher'),
                t(', for the daughters will call me blessed: and she called his name '),
                hy('Asher', 'hebrew-asher'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-gad',
          html:
            'Leah mirrored Rachel instantly. When Rachel gave Bilhah, Leah gave Zilpah. The competition is no longer hidden. Now it is a race in the middle of Jacob&apos;s tent, and no one is asking Zilpah or Bilhah whether they want to run. Leah names her son &ldquo;Gad&rdquo;—a troop, good fortune—as if she has suddenly caught up. The envy goes both ways now.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-zilpah',
          title: 'Zilpah — "dripping"',
          script: 'זִלְפָּה',
          translit: '<strong>zilpah</strong> · dripping, flowing',
          description:
            'Like Bilhah, Zilpah is a handmaid whose name barely echoes in Scripture. Yet she mothers two of the twelve tribes. Her story—like so many women&apos;s stories—is swallowed by the ambitions of those with more power.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-gad',
          title: 'Gad — "troop, fortune"',
          script: 'גָד',
          translit: '<strong>gad</strong> · a troop, a fortune, good luck',
          description:
            'Leah claims Zilpah&apos;s son as her own turn of luck. Later, Gad will become a tribe known for warriors. But in this moment, his name is about Leah&apos;s perceived victory—one more son, one more reason to be blessed.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-asher',
          title: 'Asher — "happy, blessed"',
          script: 'אָשֵׁר',
          translit: '<strong>asher</strong> · happy, blessed, one who is happy',
          description:
            'Leah names Zilpah&apos;s second son for her own happiness. &ldquo;Happy am I, for the daughters will call me blessed.&rdquo; Her worth, in her own mind, is measured by how many sons she bears and how many people notice. Yet this too is the shape of God&apos;s building. Asher will be blessed with fat in his inheritance (Deut. 33:24).',
        },
        {
          kind: 'commentary',
          id: 'c-asher',
          html:
            'Leah&apos;s language shifts. She has moved from &ldquo;the LORD has given me&rdquo; (the language of grace) to &ldquo;happy am I&rdquo; (the language of luck and claim). She is no longer receiving; she is accounting. She measures her worth in the eyes of her daughters. But notice: even Leah&apos;s warped motivations cannot stop God from building His people. Asher becomes one of the twelve tribes. The dysfunction doesn&apos;t thwart the promise.',
        },
        {
          kind: 'carry',
          html:
            'Comparison is a pit, and once Leah matched Rachel&apos;s move, they were both falling. But God doesn&apos;t wait for perfect motives to build His kingdom. He uses the messy. He uses the envious. He uses the woman competing with her sister in front of the man who loves neither of them well. This is how the gospel works: not around our brokenness, but through it, and sometimes despite it.',
        },
        {
          kind: 'reflection',
          id: 'gen30-leah-match',
          prompt:
            'When have you mirrored someone else&apos;s grasping or competition, only to find yourself chasing the same thing? What would it look like to step out of that race?',
        },
      ],
    },

    /* ─── Genesis 30:14–21 — The Mandrakes and Dinah ───────────────────── */
    {
      ref: 'Genesis 30:14–21',
      title: 'The Mandrakes, and Leah Bears Again',
      blocks: [
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 14,
              spans: [
                t('And Reuben went in the days of wheat harvest, and found '),
                hy('mandrakes', 'hebrew-dudaim'),
                t(' in the field, and brought them unto his mother Leah. Then Rachel said to Leah, Give me, I pray thee, of thy son&apos;s mandrakes.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And she said unto her, Is it a small matter that thou hast taken my husband? and wouldest thou take away my son&apos;s mandrakes also? And Rachel said, Therefore he shall lie with thee to night for thy son&apos;s mandrakes.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And Jacob came out of the field in the evening, and Leah went out to meet him, and said, Thou must come in unto me; for surely I have hired thee with my son&apos;s mandrakes. And he lay with her that night.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And God '),
                hp('hearkened unto Leah', 'christ-hear-cry'),
                t(', and she conceived, and bare Jacob the fifth son.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And Leah said, God hath given me my hire, because I have given my maiden to my husband: and she called his name '),
                hy('Issachar', 'hebrew-issachar'),
                t('.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And Leah conceived again, and bare Jacob the sixth son.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And Leah said, God hath endued me with a good dowry; now will my husband dwell with me, because I have borne him six sons: and she called his name '),
                hy('Zebulun', 'hebrew-zebulun'),
                t('.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And afterwards she bare a daughter, and called her name '),
                hy('Dinah', 'hebrew-dinah'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-mandrakes-odd',
          html:
            'The mandrakes moment is strange. A plant linked to ancient fertility magic—the <em>duda&apos;im</em> in Hebrew, shaped like a tiny human figure, believed to aid conception. Rachel wants them. Leah bargains: give me a night with Jacob for your mandrakes. And then, oddly, <em>without</em> the mandrakes, Leah conceives. The text is not endorsing magic. It is watching what desperation makes us believe.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-dudaim',
          title: 'Duda&apos;im — "mandrakes"',
          script: 'דּוּדָאִים',
          translit: '<strong>duda&apos;im</strong> · mandrakes, love apples',
          description:
            'An ancient fertility charm, the mandrake plant was believed in the Near East to aid conception. The Bible names it plainly but does not endorse it. What matters is not the plant; what matters is Leah&apos;s prayer (verse 17) and God&apos;s hearing.',
        },
        {
          kind: 'commentary',
          id: 'c-issachar-hire',
          html:
            'The mandrakes scene reveals the depths of degradation Leah has reached. She has to <em>hire</em> her own husband by offering him a night with her body. Then she becomes pregnant anyway, not because of the plant but because God hears. She names the son &ldquo;Issachar&rdquo;—a name tied to wages, to hired work, to the strange market she has just made of herself.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-issachar',
          title: 'Issachar — "hire, wages"',
          script: 'יִשָּׂשכָר',
          translit: '<strong>issachar</strong> · there is hire, wages, reward',
          description:
            'Leah names him for the transaction. She hired her husband for the night by trading mandrakes. The name is a permanent mark of her humiliation. Yet Issachar will be a tribe strong and hardworking—the name that began as shame becomes a blessing.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-zebulun',
          title: 'Zebulun — "dwell"',
          script: 'זְבוּלוּן',
          translit: '<strong>zebulun</strong> · he will dwell with me, dwelling',
          description:
            'Leah finally stops naming sons for struggle or luck. She names Zebulun for presence. &ldquo;My husband will dwell with me.&rdquo; Not passion—just presence. By the end of her bearing, Leah is satisfied with a man simply staying in her tent.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-dinah',
          title: 'Dinah — "judged"',
          script: 'דִינָה',
          translit: '<strong>dinah</strong> · she is judged, vindication',
          description:
            'The only daughter born to Jacob in this account, and her name echoes her brother Dan&apos;s. She is judged. Later in Genesis 34, Dinah&apos;s story—her vulnerability—becomes a reason for violence. The Bible is honest about what happens to girls born in a family at war with itself.',
        },
        {
          kind: 'christ',
          id: 'christ-hear-cry',
          title: 'Christ Connection — God Hears the Cry of the Despised',
          html:
            'Notice the phrase: &ldquo;God hearkened unto Leah.&rdquo; Not Leah&apos;s magic rods. Not the mandrakes. God heard. The same verb appears when Hannah cries for a child (1 Sam. 1:13) and when the Psalms say God hears the prayer of the needy. Leah, despised and forced to bargain with her own body, is heard. Her sons are given not because she earned them but because God sees her desperation. That is the pattern of grace all through Scripture: God hears the cry of those the world has written off.',
        },
        {
          kind: 'carry',
          html:
            'Leah started this chapter hating her sister. By the end, she was satisfied with her husband simply staying the night. That is what competition does: it shrinks us. Yet notice: even in her smallest moments—even when she was trading away her dignity for a man who didn&apos;t love her—God heard. Your prayers don&apos;t need to be dignified to matter. They don&apos;t need to be strategic. If you are crying out, God is listening.',
        },
        {
          kind: 'reflection',
          id: 'gen30-leah-satisfied',
          prompt:
            'What is the smallest thing you&apos;ve settled for, and found it was enough? Where has God answered your prayer in a way that looked like less than you asked, but turned out to be mercy?',
        },
      ],
    },

    /* ─── Genesis 30:22–24 — Joseph Born ──────────────────────────────── */
    {
      ref: 'Genesis 30:22–24',
      title: 'Joseph: &ldquo;May He Add&rdquo;',
      blocks: [
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 22,
              spans: [
                t('And God '),
                hg('remembered Rachel', 'c-remember-rachel'),
                t(', and God hearkened to her, and '),
                hp('opened her womb', 'christ-joseph-birth'),
                t('.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And she conceived, and bare a son; and said, God hath taken away my reproach:'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And she called his name '),
                hy('Joseph', 'hebrew-joseph'),
                t('; and said, The LORD shall add to me another son.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-remember-rachel',
          html:
            'After the long silence, God <em>remembered</em> Rachel. The verb is not about forgetting and recalling; it means to act on a promise, to turn one&apos;s face toward someone. Rachel&apos;s longing did not move God because it was eloquent or deserving. It moved Him because He had promised. The barren become fruitful when God turns His face.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-joseph',
          title: 'Joseph — "may He add"',
          script: 'יוֹסֵף',
          translit: '<strong>yosef</strong> · may He add, may the LORD add',
          description:
            'The name is Rachel&apos;s prayer in one word. <em>May God add another son.</em> Joseph becomes the favorite, the dreamer, the one sold into slavery and raised to power—but his name begins as Rachel&apos;s incomplete joy. She has one son at last, but already she prays for a second. The barren woman&apos;s hunger never fully stops.',
        },
        {
          kind: 'christ',
          id: 'christ-joseph-birth',
          title: 'Christ Connection — The One Who Is "Added"',
          html:
            'Joseph&apos;s name means &ldquo;may the LORD add.&rdquo; He will be sold into Egypt and become the means of survival for Israel. Paul uses similar language for the Gentiles in Romans 11: the Church as the mystery of the <em>added</em> people, grafted into Israel&apos;s promise. Christ Himself is the ultimate Addition—the Son whose coming was promised, who appears in fullness of time to redeem. Joseph is a pattern of the One who is &ldquo;added&rdquo; to our story to save what was lost.',
        },
        {
          kind: 'carry',
          html:
            'Rachel prayed for a child, and when Joseph finally came, her first word was about what else she wanted. That is the peculiar ache of answered prayer sometimes—the relief of having received, mixed with the hunger for more. But watch what happens: Joseph becomes the son who saves the whole family. God heard Rachel not just once but twice—first giving her Joseph, then (as she hopes) giving her Benjamin. The answer comes not to her impatience but to her waiting. To her faith that God is not finished.',
        },
        {
          kind: 'reflection',
          id: 'gen30-joseph-birth',
          prompt:
            'What are you praying for so hard that you&apos;ve already started praying for the next thing? What would it look like to let God&apos;s answer be enough for one day?',
        },
      ],
    },

    /* ─── Genesis 30:25–43 — The Wage Negotiation ────────────────────── */
    {
      ref: 'Genesis 30:25–43',
      title: 'Jacob&apos;s Cunning, Laban&apos;s Jealousy',
      blocks: [
        {
          kind: 'scripture',
          chapter: 30,
          lines: [
            {
              number: 25,
              spans: [
                t('And it came to pass, when Rachel had born Joseph, that Jacob said unto Laban, '),
                hg('Send me away', 'c-jacob-leave'),
                t(', that I may go unto mine own place, and to my country.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('Give me my wives and my children, for whom I have served thee, and let me go: for thou knowest my service which I have done thee.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And Laban said unto him, I pray thee, if I have found favour in thine eyes, tarry: for I have learned by experience that the LORD hath blessed me for thy sake.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And he said, Appoint me thy '),
                hy('wages', 'c-wages'),
                t(', and I will give it.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('And Jacob said unto him, Thou knowest how I have served thee, and how thy cattle is become great with me.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('For it was little which thou hadst before I came, and '),
                hg('it is now increased unto a multitude', 'c-flocks-multiplied'),
                t('; and the LORD hath blessed thee since my coming: and now when shall I provide for mine own house also?'),
              ],
            },
            {
              number: 31,
              spans: [
                t('And Laban said, What shall I give thee? And Jacob said, Thou shalt not give me any thing: but if thou wilt do this one thing for me, I will again feed and keep thy flock.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('I will pass through all thy flock to day, removing from thence all the speckled and spotted cattle, and all the brown cattle among the sheep, and the spotted and speckled among the goats: and of such shall be my hire.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('So shall my righteousness answer for me in time to come, when it shall come for my hire before thy face: every one that is not speckled and spotted among the goats, and brown among the sheep, shall be counted stolen with me.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('And Laban said, Behold, I would it were according to thy word.'),
              ],
            },
            {
              number: 35,
              spans: [
                t('And he removed that day the he goats that were ringstraked and spotted, and all the she goats that were speckled and spotted, and every one that had some white in it, and all the brown among the sheep, and gave them into the hand of his sons.'),
              ],
            },
            {
              number: 36,
              spans: [
                t('And he set three days&apos; journey betwixt himself and Jacob: and Jacob fed the rest of Laban&apos;s flocks.'),
              ],
            },
            {
              number: 37,
              spans: [
                t('And Jacob took him rods of green poplar, and of the hazel and chestnut tree; and '),
                hy('pilled white strakes in them', 'c-peeled-rods'),
                t(','),
              ],
            },
            {
              number: 38,
              spans: [
                t('And he set the rods which he had pilled before the flocks in the gutters in the watering troughs when the flocks came to drink, that they should conceive when they came to drink.'),
              ],
            },
            {
              number: 39,
              spans: [
                t('And the flocks conceived before the rods, and brought forth cattle '),
                hg('ringstraked, speckled, and spotted', 'c-spotted'),
                t('.'),
              ],
            },
            {
              number: 40,
              spans: [
                t('And Jacob did '),
                hp('separate the lambs', 'christ-separate-increase'),
                t(', and set the faces of the flocks toward the ringstraked, and all the brown in the flock of Laban; and he put his own flocks by themselves, and put them not unto Laban&apos;s cattle.'),
              ],
            },
            {
              number: 41,
              spans: [
                t('And it came to pass, whensoever the stronger cattle did conceive, that Jacob laid the rods before the eyes of the cattle in the gutters, that they might conceive among the rods;'),
              ],
            },
            {
              number: 42,
              spans: [
                t('But when the cattle were feeble, he put them not in: so the feebler were Laban&apos;s, and the stronger Jacob&apos;s.'),
              ],
            },
            {
              number: 43,
              spans: [
                t('And the man increased exceedingly, and had much cattle, and maidservants, and menservants, and camels, and asses.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-jacob-leave',
          html:
            'Joseph is born. Suddenly Jacob can see the way home. Twenty years he has been in Laban&apos;s house, and now he is ready to leave. The wives are provided for. The children are born. Jacob is ready to be the master of his own household, not Laban&apos;s servant. But Laban is not ready to let him go.',
        },
        {
          kind: 'commentary',
          id: 'c-wages',
          html:
            'Laban won&apos;t let Jacob go empty. He is willing to pay him—because he has seen that God&apos;s blessing comes wherever Jacob is. Laban, an idolater, knows that Jacob&apos;s God is real. But he expects to keep Jacob. When Jacob asks for a wage, Laban is sure he will win.',
        },
        {
          kind: 'commentary',
          id: 'c-flocks-multiplied',
          html:
            'Jacob&apos;s first argument is simple: look what you have because of me. Your flocks grew. Your cattle increased. All because God blessed the work of your servant. It is not boastfulness; it is fact. And it is true. Wherever Jacob went, God made things prosper.',
        },
        {
          kind: 'commentary',
          id: 'c-peeled-rods',
          html:
            'The peeled rods are the strangest part. Jacob—or the text—seems to suggest they work through some sort of visual impression or magic. But here&apos;s what the text actually says: the flocks that saw the rods conceived. Then Jacob simply bred the strong animals on the spotted stock and the weaker on the regular stock. Selective breeding, dressed up in the language of ancient magic. Jacob is using practical intelligence to win his wage. He is not relying on superstition; he is relying on his eye for which animals to breed.',
        },
        {
          kind: 'commentary',
          id: 'c-spotted',
          html:
            'Whether the rods worked by magic or by his management, the result is clear: the spotted, speckled, and ringstraked animals began to appear. The animals that were supposed to be Jacob&apos;s by contract started multiplying. Laban expected to cheat Jacob; Jacob out-strategized him.',
        },
        {
          kind: 'christ',
          id: 'christ-separate-increase',
          title: 'Christ Connection — Separation and Increase',
          html:
            'Jacob separates his lambs from Laban&apos;s. The pattern runs through the Bible: separation often precedes blessing. The land separates from water on day three; then it brings forth fruit. Abram separates from Lot; then God tells him to look around—all the land is his. The Church is separated from the world (2 Cor. 6:17), and that separation is where her increase begins. Prosperity in the Bible is often the fruit of clear boundaries.',
        },
        {
          kind: 'carry',
          html:
            'Jacob didn&apos;t sit by passively. He negotiated. He strategized. He separated his interests from Laban&apos;s. And he prospered. The text is not saying magic works; it is saying that hard work, clarity, and good judgment are rewarded. God blesses the hands that are faithful. If you are in a situation where someone is exploiting your labor, learn from Jacob. Ask for what you are owed. Make clear boundaries. Work with excellence. And trust that God sees.',
        },
        {
          kind: 'reflection',
          id: 'gen30-jacob-wage',
          prompt:
            'Where in your life are you working for someone else&apos;s benefit while yours is unclear? What would it look like to ask for what you are owed and to protect what is yours?',
        },
      ],
    },
  ],
};
