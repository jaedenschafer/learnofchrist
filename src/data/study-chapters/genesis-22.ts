import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 22 — the Akedah, the binding of Isaac.
 *
 * Nineteen verses, every line weighted. The threefold promise of Genesis 12
 * rests on Isaac—the son of the impossible promise, born when Abraham was
 * a hundred years old. Then God asks for him back. Three days. A mountain.
 * "Where is the lamb?" And at the last moment, a ram caught in the thicket,
 * and a name: YHWH-Yireh, "the LORD will provide."
 *
 * This is the densest typology in Genesis—a foreshadow so specific that
 * Jesus Himself pointed to it. Abraham saw His day.
 */
export const GENESIS_22: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 22,

  estimatedMinutes: { beginner: 9, intermediate: 15, deep: 20 },
  intros: [
    'Abraham has waited ninety-nine years for the promise. Isaac, born when he was a hundred and his wife was past bearing age, is the entire future—the heir through whom all the nations of the earth would be blessed. Three times God made that covenant: in Genesis 12, Genesis 15, and Genesis 17. Every promise hinges on this boy.',
    'And then, in Genesis 22, God makes a request that seems to unmake everything. "Take now thy son, thine only son Isaac, whom thou lovest, and get thee into the land of Moriah; and offer him there for a burnt offering upon one of the mountains which I will tell thee of." Abraham is seventy-five when God first calls him. He is now past one hundred twenty, and God asks him to surrender the future He Himself gave. The chapter is the Bible\'s deepest meditation on faith—not as feeling safe, but as trusting God when every rational thing you see says He has abandoned you.',
    'It is also, though the chapter never names it, a profound act of substitution. A ram dies so Isaac lives. And in the New Testament, the Apostles will point back to this mountain and say: that was a picture of what happened on another mountain, in another land, where a Lamb died so that the world could live.',
  ],

  sections: [
    /* ─── Genesis 22:1–2 — The Test ───────────────────────────────────── */
    {
      ref: 'Genesis 22:1–2',
      title: 'The Test',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 1,
              spans: [
                t('And it came to pass after these things, that God '),
                hg('did tempt Abraham', 'c-test-meaning'),
                t(', and said unto him, Abraham: and he said, Behold, here I am.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And he said, '),
                hy('Take now thy son, thine only son Isaac', 'hebrew-na-son'),
                t(', '),
                hp('whom thou lovest', 'christ-spared-son'),
                t(', and get thee into the land of '),
                hy('Moriah', 'hebrew-moriah'),
                t('; and offer him there for a burnt offering upon one of the mountains which I will tell thee of.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-test-meaning',
          html:
            'The word "tempt" here does not mean to seduce into evil—it means to test, to try, as a metalsmith tests gold in fire. God is not asking Abraham to sin. God is asking Abraham to prove whether he trusts the promise more than the promise-bearer. "Do you believe in Me, or do you only believe in what I gave you?"',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-na-son',
          title: 'Na — &ldquo;now, I pray, please&rdquo;',
          script: 'נָא',
          translit: '<strong>na</strong> · particle of urgent, intimate request',
          description:
            'The Hebrew <em>na</em> (pronounced "nah") is a particle that softens a command into a request—a "please." It is the particle of deep feeling, of asking rather than demanding. Even God uses it when the weight of what is being asked is genuine. "Take, I ask you... thy son." This is not a cold command; it is a request that costs the speaker.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-moriah',
          title: 'Moriah — &ldquo;the LORD will see&rdquo;',
          script: 'מֹרִיָּה',
          translit: '<strong>Moriah</strong> · from <strong>ra\'ah</strong>, "to see" + <strong>YHWH</strong>',
          description:
            'The land of Moriah will reappear in 2 Chronicles 3:1 as the very mountain where Solomon builds the temple. This is the same mountain, the same sacred place. Later, Calvary will lie in sight of it. Abraham is walking toward a mountain prepared for a sacrifice since before the world began.',
        },
        {
          kind: 'christ',
          id: 'christ-spared-son',
          title: 'Christ Connection — A Father\'s Surrender',
          html:
            'Centuries later, Paul writes of this moment and hears in it an echo of the Cross: "He that spared not his own Son, but delivered him up for us all, how shall he not with him also freely give us all things?" (Rom. 8:32). The Greek word for "spared" is the same word used in the Greek Old Testament translation here. Abraham\'s willingness to surrender his son becomes the mirror of God the Father\'s actual surrender of His Son. Except God does not stop His knife. The Lamb on the second mountain actually dies.',
        },
        {
          kind: 'carry',
          html:
            'God\'s first request is not easy, and the chapter does not pretend it is. When the thing you love most is asked of you—your child, your future, your promise, your dream—the only way forward is the simple word Abraham spoke: "Behold, here I am." You do not have to feel ready. You have to show up and be present to what God is asking. That willingness is where faith begins.',
        },
        {
          kind: 'reflection',
          id: 'gen22-behold',
          prompt: 'What is the deepest thing you love right now? If God asked you for it, could you say "Behold, here I am"—not happily, but honestly, and ready to listen?',
        },
      ],
    },

    /* ─── Genesis 22:3–8 — The Journey ───────────────────────────────── */
    {
      ref: 'Genesis 22:3–8',
      title: 'The Three-Day Journey',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 3,
              spans: [
                t('And Abraham rose up early in the morning, and '),
                hg('saddled his ass', 'c-early-obedience'),
                t(', and took two of his young men with him, and Isaac his son, and clave the wood for the burnt offering, and rose up, and went unto the place of which God had told him.'),
              ],
            },
            {
              number: 4,
              spans: [t('Then on '), hg('the third day', 'c-third-day'), t(' Abraham lifted up his eyes, and saw the place afar off.')],
            },
            {
              number: 5,
              spans: [
                t('And Abraham said unto his young men, '),
                hg('Abide ye here with the ass; and I and the lad will go yonder and worship, and come again to you', 'c-come-again'),
                t('.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And Abraham took the wood of the burnt offering, and laid it upon Isaac his son; and he took the fire in his hand, and a knife; and they went both of them together.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And Isaac spake unto his father Abraham, and said, My father: and he said, Here am I, my son. And he said, '),
                hp('Behold the fire and the wood: but where is the lamb', 'christ-lamb-replacement'),
                t(' for a burnt offering?'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And Abraham said, My son, God will '),
                hy('provide himself a lamb', 'hebrew-yireh'),
                t(' for a burnt offering: so they went both of them together.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-early-obedience',
          html:
            'Abraham does not delay. He does not counsel with Sarah. He does not sleep on it and hope God changes His mind by morning. He wakes before dawn and begins. This is the obedience that faith looks like when faith has no feeling of assurance left—the body moving even when the heart is breaking.',
        },
        {
          kind: 'commentary',
          id: 'c-third-day',
          html:
            'Three days. Enough time for hope to drain away, for acceptance to set in. Three days of walking toward what looks like the death of everything. Later, Jesus will spend three days in a tomb, and on the third day, rise again. The Apostles will hear in that resurrection an echo of this mountain and say: Abraham saw this day and rejoiced (John 8:56).',
        },
        {
          kind: 'commentary',
          id: 'c-come-again',
          html:
            'Abraham tells the young men, "The lad and I will go yonder and worship, and come again to you." He says it as though he believes it. The chapter does not tell us whether Abraham\'s faith has a loophole—does he expect God to stop him at the last second?—or whether he has somehow, impossibly, committed to losing his son forever and to watching God raise him from the dead (as Hebrews 11:19 tells us he did). Either way, his voice, speaking to the servants, is the voice of a man betting everything on God.',
        },
        {
          kind: 'christ',
          id: 'christ-lamb-replacement',
          title: 'Christ Connection — The Lamb God Will Provide',
          html:
            'Isaac asks the question every child in that era would ask: where is the lamb? Abraham\'s answer is not a dodge. It is a declaration: "God will provide Himself a lamb." The Hebrew phrase is <em>Elohim yireh lo avetz</em>—the LORD will see/provide for himself the lamb. Fourteen verses later, a ram appears "caught in a thicket by his horns" (22:13), and Abraham names the place "Jehovah-jireh, as it is said to this day, In the mount of the LORD it shall be seen [provided]." But the chapter is not ultimately about a ram. It is about the Lamb. John the Baptist, standing at the Jordan centuries later, points at Jesus and says: "Behold the Lamb of God, which taketh away the sin of the world" (John 1:29). Abraham\'s words were true in a way he could not yet have imagined.',
        },
        {
          kind: 'carry',
          html:
            'When God asks something of you that feels impossible, His invitation is not to see the way out. It is to name what He will provide. "God will provide." You do not have to see the lamb. You only have to trust that He is not asking you to walk into a mountain and be left alone. Whatever God asks, He provides the grace for. Whatever He commands, He supplies the strength.',
        },
        {
          kind: 'reflection',
          id: 'gen22-provide',
          prompt: 'What is something you are walking toward right now that feels uncertain? Where do you need to declare, with Abraham, that "God will provide"?',
        },
      ],
    },

    /* ─── Genesis 22:9–12 — The Knife ─────────────────────────────────── */
    {
      ref: 'Genesis 22:9–12',
      title: 'The Test of the Knife',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 9,
              spans: [
                t('And they came to the place which God had told him of; and Abraham '),
                hg('built an altar there, and laid the wood in order', 'c-altar-ready'),
                t(', and bound his son Isaac, and laid him on the altar upon the wood.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And Abraham '),
                hg('stretched forth his hand', 'c-stretched-hand'),
                t(', and took the knife to slay his son.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('But the '),
                hp('angel of the LORD', 'christ-angel-stops'),
                t(' called unto him out of heaven, and said, Abraham, Abraham: and he said, Here am I.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And he said, '),
                hg('Lay not thine hand upon the lad', 'c-stop-now'),
                t(', neither do thou any thing unto him: for now I know that thou fearest God, seeing thou hast not withheld thy son, thine only son from me.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-altar-ready',
          html:
            'Abraham builds the altar. He arranges the wood. He binds Isaac. He does everything that would be required of him. The narrative gives no hint of hesitation or last-minute resistance. He is not waiting for God to stop him; he is prepared to complete the act. The depth of faith here is not faith that God will rescue you. It is faith that carries out what God has asked, trusting Him even past the point where trust feels safe.',
        },
        {
          kind: 'commentary',
          id: 'c-stretched-hand',
          html:
            'Abraham stretches out his hand and takes the knife. This is the moment. Every word before this has been leading here. The chapter does not tell us that Isaac struggles, or that Abraham is shaking, or that he is weeping. It simply reports the fact: he raises the knife. The text does not sensationalize the moment because the moment has already done its work. Abraham has proven, not by saying something, but by doing something, where his trust lies.',
        },
        {
          kind: 'commentary',
          id: 'c-stop-now',
          html:
            'The angel says: "Now I know that thou fearest God." Not "now you have decided to obey" or "now you have said you would trust." But "now I know"—because you have walked all the way to the edge. The trial is not about whether Abraham had good intentions. It is about whether, when the moment came and obedience cost everything, he obeyed. God does not stop him because He never wanted the sacrifice. He stops him because He wanted the heart—the whole heart, the surrendered heart, the heart that walks toward the mountain with the knife in its hand.',
        },
        {
          kind: 'christ',
          id: 'christ-angel-stops',
          title: 'Christ Connection — The Angel\'s Intervention',
          html:
            'An angel stops Abraham\'s hand. But when Jesus came to His own mountain, at His own altar, no angel stopped the knife. Instead, He drank the cup to the bottom. "Not my will," He prayed in the garden, "but thine be done" (Luke 22:42)—the same prayer Abraham lived out on Moriah. Jesus walked all the way to the end of that substitution. He did not say "I am willing." He said, and He meant it: I will lay down my life for the world. Abraham\'s test was stayed. Christ\'s was not. But the same faithful God who stopped the knife on Moriah raised His Son from the dead on the third day.',
        },
        {
          kind: 'carry',
          html:
            'The moment when God asks you to let go is the moment He knows your answer. You do not prove your faith by being calm or by not feeling the weight. You prove it by letting your hands open anyway. By saying yes when every part of you is screaming no. By trusting that a God who asks this much has already given enough.',
        },
        {
          kind: 'reflection',
          id: 'gen22-hand',
          prompt: 'What are you still holding onto, despite God asking you to let it go? What would change if you opened your hands—not because the pain would stop, but because you trust the God who asked?',
        },
      ],
    },

    /* ─── Genesis 22:13–14 — The Ram and the Name ──────────────────────── */
    {
      ref: 'Genesis 22:13–14',
      title: 'The Ram Caught in the Thicket',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 13,
              spans: [
                t('And Abraham lifted up his eyes, and '),
                hg('looked, and behold behind him a ram caught in a thicket by his horns', 'c-ram-caught'),
                t(': and Abraham went and took the ram, and offered him up for a burnt offering in the stead of his son.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And Abraham called the name of that place '),
                hy('Jehovah-jireh', 'hebrew-yireh-name'),
                t(': as it is said to this day, '),
                hg('In the mount of the LORD it shall be seen', 'c-name-meaning'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-ram-caught',
          html:
            'A ram appears. Caught. By its horns. Specifically the part that would be visible over the thicket. This is not a lucky accident. The animal appears exactly where Abraham would see it, exactly when he would need it, exactly as he would recognize it. And the chapter names what is substituted: the ram dies <em>in the stead of his son.</em> One life replaces another. Innocent death covers guilty life. This is the pattern God will teach all through the Old Testament: the innocent dies; the guilty goes free.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-yireh-name',
          title: 'Yireh — &ldquo;the LORD will see/provide&rdquo;',
          script: 'יִרְאֶה',
          translit: '<strong>yireh</strong> · from <strong>ra\'ah</strong>, "to see"; Jehovah-yireh = "the LORD will see"',
          description:
            'The Hebrew root <strong>ra\'ah</strong> carries both meanings: "to see" and "to provide/appear." Jehovah-jireh literally means "the LORD will see"—He will see what is needed, He will appear with what is needed, He will provide what His people cannot see or imagine on their own. This name echoes Abraham\'s words in verse 8: "God will provide himself a lamb." Now, after the substitute has appeared, Abraham names the place in commemoration.',
        },
        {
          kind: 'commentary',
          id: 'c-name-meaning',
          html:
            'The phrase "In the mount of the LORD it shall be seen" (or "provided") becomes a proverb. Every generation that hears this story will understand it: <em>On the LORD\'s mountain, provision appears.</em> Moriah becomes the place where God\'s seeing—His attention, His care, His willingness to provide—becomes tangible. It is where a ram appears when a ram is needed. It is where, later, a temple is built. And it is where, far later still, on a mount within sight of Moriah, another Lamb appears, provided by God Himself for the sins of the world.',
        },
        {
          kind: 'artwork',
          matchTitle: /sacrifice of isaac|binding of isaac|abraham and isaac/i,
          caption: 'Genesis 22:13–14 · The Ram Caught in the Thicket',
        },
        {
          kind: 'christ',
          id: 'christ-ram-crown',
          title: 'Christ Connection — The Crown of Horns',
          html:
            'The ram is caught by its horns. When Christ came to His substitution, Matthew tells us the soldiers plaited a crown of thorns and put it upon His head (Matt. 27:29). Thorns are the curse of Genesis 3—the curse that grows from the ground Adam was told he would cultivate in sweat. A crown of thorns is curse as crown, shame as glory. The ram caught by its horns in the thicket is the Old Testament shadow of the Lamb caught in a crown of thorns on Golgotha. Both die in the stead of those who deserve to die. Both become the provision of God.',
        },
        {
          kind: 'carry',
          html:
            'The ram was there before Abraham needed it. It was caught, held, waiting. When God asks you to release your grip on something, He is not asking you to step into a void. He is saying: I have already seen what you need. I have already provided it. Let go of what you are holding, and turn around. The answer is already here.',
        },
        {
          kind: 'reflection',
          id: 'gen22-turn',
          prompt: 'What have you been looking toward in grief or anxiety? What might change if you turned around and looked to see what God has already provided?',
        },
      ],
    },

    /* ─── Genesis 22:15–18 — The Covenant Renewed ─────────────────────── */
    {
      ref: 'Genesis 22:15–18',
      title: 'The Covenant Renewed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 15,
              spans: [
                t('And the '),
                hp('angel of the LORD', 'c-angel-speaks'),
                t(' called unto Abraham out of heaven the second time,'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And said, By myself have I sworn, saith the LORD, for because thou hast done this thing, and hast not withheld thy son, thine only son:'),
              ],
            },
            {
              number: 17,
              spans: [
                t('That in blessing I will bless thee, and in multiplying I will multiply thy seed as the stars of the heaven, and as the sand which is upon the sea shore; and thy seed shall possess the gate of his enemies;'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And in thy '),
                hp('seed shall all the nations of the earth be blessed', 'christ-blessing-nations'),
                t('; because thou hast obeyed my voice.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-angel-speaks',
          html:
            'The angel does not ask for anything more. It now gives. This is the pattern: God tests, God stops, God provides, God blesses. After the trial is answered, the blessing falls. The angel speaks a second time, and the words that follow are not counsel or guidance. They are the echoing, strengthened oath that God swore in Genesis 12, 15, and 17.',
        },
        {
          kind: 'commentary',
          id: 'c-oath-sworn',
          html:
            '"By myself have I sworn," the LORD says. God does not swear by a higher power; there is no higher authority. He swears by Himself. His own nature is the guarantee. And the oath is conditional—"because thou hast done this thing, because thou hast not withheld thy son." Abraham\'s willingness to surrender everything he was promised has, paradoxically, confirmed the promise. His willingness to lose it has secured it.',
        },
        {
          kind: 'christ',
          id: 'christ-blessing-nations',
          title: 'Christ Connection — All Nations Blessed',
          html:
            'The promise echoes what God said in Genesis 12: "In thee shall all families of the earth be blessed." Now, after the test, it is deepened and secured. The angel makes it clear: this blessing to the nations comes because of Abraham\'s obedience. Paul unpacks it: "Even as Abraham believed God, and it was accounted to him for righteousness... So then they which be of faith are blessed with faithful Abraham" (Gal. 3:6–7, 9). And Galatians 3:16 says this blessing to "all nations" points specifically to Christ: "Now to Abraham and his seed were the promises made... which is Christ."',
        },
        {
          kind: 'artwork',
          matchTitle: /abraham|covenant|promise/i,
          matchArtist: /caravaggio|rembrandt/i,
          caption: 'Genesis 22:15–18 · The Covenant Renewed',
        },
        {
          kind: 'carry',
          html:
            'When you have finally, completely, let go of what matters most, the next word from God is not rebuke. It is blessing. Not comfort, necessarily—the pain of having offered Isaac does not erase—but a kind of blessing that says: your obedience was not wasted. It was the thing that changed everything. Whatever you have surrendered at God\'s command becomes the door through which His blessing flows, not just to you, but through you to the world.',
        },
        {
          kind: 'reflection',
          id: 'gen22-bless',
          prompt: 'How might your obedience in some small surrender become the channel through which God blesses not just you, but others around you?',
        },
      ],
    },

    /* ─── Genesis 22:19 — Return ──────────────────────────────────────── */
    {
      ref: 'Genesis 22:19',
      title: 'The Return',
      blocks: [
        {
          kind: 'scripture',
          chapter: 22,
          lines: [
            {
              number: 19,
              spans: [
                t('So Abraham returned unto his young men, and they rose up and went together unto '),
                hg('Beer-sheba', 'c-beersheba'),
                t('; and Abraham dwelt at Beer-sheba.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-beersheba',
          html:
            'Abraham comes down the mountain. He meets his servants. They all return together to Beer-sheba, where Abraham has a well, a home, a place of settling. The chapter ends simply. No fanfare. No psychological inventory of Abraham\'s feelings. He has offered his son. He has received him back. He has heard the oath renewed. And now he goes home. Sometimes the deepest obedience looks like the quietest return.',
        },
        {
          kind: 'carry',
          html:
            'You do not have to feel resolved or at peace when the trial is over. You only have to go where God has called you to live. You return to your ordinary life. You live in it. You tend the well. You stay. And the God who walked with you up the mountain and stopped your knife stays with you on the ordinary Tuesday, in the ordinary house, in the ordinary work of being faithful to the people and the place He has given you. The miraculous thing is not what happened on the mountain. It is that you get to come home from it.',
        },
        {
          kind: 'reflection',
          id: 'gen22-home',
          prompt: 'After you have stood at your own mountain and surrendered what had to be surrendered, what does "coming home" look like? What is the ordinary faith you will need when the trial is over?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share Genesis 22',
    quote:
      'Abraham bound his son Isaac and laid him on the altar. But as he raised the knife, an angel called: "Lay not thine hand upon the lad." A ram appeared, caught in a thicket by its horns. And God named the place Jehovah-jireh—"the LORD will provide."',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 22 · Study Guide',
  },
};
