import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 29 — Jacob at the well. The deceiver meets the woman he loves,
 * rolls the stone alone, works seven years "and they seemed unto him but
 * a few days, for the love he had to her." Laban switches Leah for Rachel
 * on the wedding night. Jacob serves seven more years. Leah bears four sons
 * — Reuben, Simeon, Levi, Judah — each name a prayer about her unbelovedness
 * and God&apos;s seeing. The chapter is a betrothal type-scene: well, foreigner,
 * bride-price, covenant. It is also the story of the deceiver deceived, and
 * God&apos;s choice of the unloved.
 */
export const GENESIS_29: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 29,

  estimatedMinutes: { beginner: 10, intermediate: 15, deep: 22 },
  intros: [
    'Jacob flees Canaan after stealing Esau&apos;s blessing. He travels east to find his mother&apos;s family, and at a well he meets a woman who will change everything. Genesis 29 is a betrothal type-scene — a pattern repeated in Scripture when a foreigner meets his bride at a well. Isaac met Rebekah the same way. Moses will meet Zipporah at a well. But Jacob&apos;s story carries an edge the others don&apos;t: the man who tricked his father and brother is about to be tricked in the dark, and the woman he doesn&apos;t love will become the mother of the line of Christ.',
    'The chapter moves between two loves and two labors. Jacob loves Rachel so much the seven years feel like days. Rachel loves him. Laban gives Jacob Leah instead — the older daughter, "tender eyed," passed over. Jacob serves seven more years for Rachel. But by then Leah has borne four sons, each name a word carved into her heartbreak: "the LORD has looked on my affliction," "the LORD has heard that I was hated," "now my husband will be joined to me," and finally, "now I will praise the LORD." God&apos;s pattern in Scripture: He chooses what the world overlooks. The unloved becomes the line of the King.',
  ],

  bottomShare: {
    label: 'Share Genesis 29',
    quote:
      'Jacob loved Rachel. Leah, the older daughter, was "tender eyed." Jacob worked seven years for Rachel, and they seemed to him but a few days for the love he had to her. Laban gave him Leah instead. Through Leah came Judah, and through Judah came Christ.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 29 · Study Guide',
  },

  sections: [
    /* ─── Genesis 29:1–8 — The Well ──────────────────────────────────── */
    {
      ref: 'Genesis 29:1–8',
      title: 'The Well',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 1,
              spans: [
                t('Then Jacob went on his journey, and came into the land of the people of the '),
                hy('east', 'hebrew-east'),
                t('.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And he looked, and behold a '),
                hg('well in the field', 'c-well-scene'),
                t(', and, lo, there were three flocks of sheep lying by it; for out of that well they watered the flocks: and a '),
                hy('great stone', 'hebrew-stone'),
                t(' was upon the well&apos;s mouth.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And thither were all the flocks gathered: and they rolled the stone from the well&apos;s mouth, and watered the sheep, and put the stone again upon the well&apos;s mouth in his place.'),
              ],
            },
            {
              number: 4,
              spans: [t('And Jacob said unto them, My brethren, whence be ye? And they said, Of Haran are we.')],
            },
            {
              number: 5,
              spans: [t('And he said unto them, Know ye Laban the son of Nahor? And they said, We know him.')],
            },
            {
              number: 6,
              spans: [t('And he said unto them, Is he well? And they said, He is well: and, behold, Rachel his daughter cometh with the sheep.')],
            },
            {
              number: 7,
              spans: [
                t('And he said, Lo, it is yet high day, neither is it time that the cattle should be gathered together: '),
                hg('water ye the sheep, and go and feed them', 'c-well-scene'),
                t('.'),
              ],
            },
            {
              number: 8,
              spans: [t('And they said, We cannot, until all the flocks be gathered together, and till we roll the stone from the well&apos;s mouth; then we water the sheep.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-well-scene',
          html:
            'The well scene is one of Scripture&apos;s great courtship patterns. Isaac met Rebekah at a well (Gen. 24). Moses met Zipporah at a well (Ex. 2:15–17). The well is where a foreigner, traveling far from home, meets his bride. But Genesis signals something in Jacob&apos;s case that is different: everyone else is waiting for the full company to arrive. It is too early, the shepherds say. Not yet time. Jacob, arriving alone at this threshold, will have to wait as well.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-east',
          title: 'Qedem — &ldquo;east&rdquo;',
          script: 'קֶדֶם',
          translit: '<strong>qedem</strong> · eastward, ancient times, east',
          description:
            'The same word is used for the garden God planted "eastward in Eden" (Gen. 2:8). Jacob is not just traveling; he is heading toward the direction of Eden, toward the family he fled to. The geography of the Bible is always theological — we move through space toward God or away from Him.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-stone',
          title: 'Eben — &ldquo;stone&rdquo;',
          script: 'אֶבֶן',
          translit: '<strong>eben</strong> · stone; a weight',
          description:
            'The stone that the shepherds could not roll alone will, in a few verses, be rolled by Jacob alone. A stone is about to measure the depth of a love the likes of which the shepherds can&apos;t fathom.',
        },
        {
          kind: 'carry',
          html:
            'The shepherds tell Jacob: "We cannot," and "Not yet time." Most of the real waiting in your life comes not from something broken you are trying to fix, but from something good you are watching for. The couple who can&apos;t conceive. The vocation that hasn&apos;t opened. The person you thought might love you. The well is already dug. The water is already there. But you are told to wait — and to wait because the moment is not yet full. The hardest obedience is sometimes just: be patient a little longer.',
        },
        {
          kind: 'reflection',
          id: 'gen29-well',
          prompt:
            'What good thing are you waiting for right now? Is your impatience a sign you need to push, or a sign you need to trust the "not yet"?',
        },
      ],
    },

    /* ─── Genesis 29:9–12 — Rachel ───────────────────────────────────── */
    {
      ref: 'Genesis 29:9–12',
      title: 'Rachel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 9,
              spans: [
                t('And while he yet spake with them, '),
                hp('Rachel came with her father&apos;s sheep', 'c-rachel-comes'),
                t('; for she kept them.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And it came to pass, when Jacob saw '),
                hy('Rachel the daughter of Laban his mother&apos;s brother', 'hebrew-rachel-name'),
                t(', and the sheep of Laban his mother&apos;s brother, that Jacob '),
                hp('went near, and rolled the stone', 'c-stone-alone'),
                t(' from the well&apos;s mouth, and watered the flock of Laban his mother&apos;s brother.'),
              ],
            },
            {
              number: 11,
              spans: [t('And Jacob kissed Rachel, and lifted up his voice, and wept.')],
            },
            {
              number: 12,
              spans: [
                t('And Jacob told Rachel that he was her father&apos;s '),
                hy('brother', 'hebrew-rachel-name'),
                t(', and that he was Rebekah&apos;s son: and she ran and told her father.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-rachel-comes',
          html:
            'Rachel appears without warning, and in that instant Jacob—who has been cautious with the other shepherds, asking questions, waiting—becomes capable of the impossible. "While he yet spake," the text says. He sees her, and strength enters him. This is what Scripture means by love: not a feeling, but a willingness to be remade by the presence of another.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-rachel-name',
          title: 'Rachel — &ldquo;ewe&rdquo;',
          script: 'רָחֵל',
          translit: '<strong>rachel</strong> · ewe, female sheep',
          description:
            'Her name is gentle: "ewe." The shepherds are bringing their flocks to the well; Rachel brings her father&apos;s. There is a pastoral innocence about her. She is not scheming or ambitious. She is simply there, doing her work, and Jacob&apos;s entire life turns toward her in an instant.',
        },
        {
          kind: 'commentary',
          id: 'c-stone-alone',
          html:
            'The shepherds said, "We cannot, until all the flocks be gathered." The stone required the whole company. But Jacob, alone, rolls it. The text moves from "they rolled" (v. 3) to "Jacob rolled" (v. 10)—and he does it without help, without waiting, because love gave him a strength that solitude had not. There is a kind of work that only love can do.',
        },
        {
          kind: 'carry',
          html:
            'Something shifts when you see what you love. A parent, exhausted, summons strength to catch a child who falls. A friend, sitting across from you, receives honesty you never thought you could speak. Love is not a feeling that floats above the real world; it is a force that moves you to do things you couldn&apos;t do alone. Whatever stone is in front of you that feels impossible, ask: what love might be enough to move it?',
        },
        {
          kind: 'reflection',
          id: 'gen29-rachel',
          prompt:
            'When was the last time love gave you strength for something you thought was impossible? And where might love be asking for that strength from you now?',
        },
      ],
    },

    /* ─── Genesis 29:13–20 — Seven Years ─────────────────────────────── */
    {
      ref: 'Genesis 29:13–20',
      title: 'Seven Years for Love',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 13,
              spans: [t('And it came to pass, when Laban heard the tidings of Jacob his sister&apos;s son, that he ran to meet him, and embraced him, and kissed him, and brought him to his house. And he told Laban all these things.')],
            },
            {
              number: 14,
              spans: [t('And Laban said to him, Surely thou art my bone and my flesh. And he abode with him the space of a month.')],
            },
            {
              number: 15,
              spans: [
                t('And Laban said unto Jacob, Because thou art my brother, shouldest thou therefore serve me for nought? tell me, what shall thy '),
                hg('wages be', 'c-love-Rachel'),
                t('?'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And Laban had two daughters: the name of the elder was '),
                hy('Leah', 'hebrew-leah-name'),
                t(': and the name of the younger was '),
                hp('Rachel', 'c-love-Rachel'),
                t('.'),
              ],
            },
            {
              number: 17,
              spans: [t('Leah was tender eyed; but Rachel was beautiful and well favoured.')],
            },
            {
              number: 18,
              spans: [
                t('And Jacob '),
                hp('loved Rachel', 'c-love-Rachel'),
                t('; and said, I will serve thee seven years for Rachel thy younger daughter.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And Laban said, It is better that I give her to thee, than that I should give her to another man: '),
                hg('abide with me', 'c-love-Rachel'),
                t('.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And Jacob served seven years for Rachel; and '),
                hp('they seemed unto him but a few days', 'c-few-days'),
                t(', for the love he had to her.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-leah-name',
          title: 'Leah — &ldquo;weary&rdquo;',
          script: 'לֵאָה',
          translit: '<strong>leah</strong> · weary, perhaps from <em>la&apos;ah</em>, to tire',
          description:
            'Leah&apos;s name carries a heaviness. "Tender eyed" may mean tired eyes, or eyes that lack the kind of beauty Rachel has. From the moment her name is spoken, she is secondary—the elder daughter, but the one not chosen. The text doesn&apos;t say she did anything to deserve this. She simply was born first to a man who prizes the younger.',
        },
        {
          kind: 'commentary',
          id: 'c-love-Rachel',
          html:
            'Jacob&apos;s love for Rachel is named explicitly, plainly, three times in these verses. Laban approves. Laban says yes to the arrangement. But Laban is a deceiver like Jacob—and deception, in Genesis, always carries consequences. Nothing here suggests Laban is planning betrayal yet. The text does not explain his heart. But when Laban has what he needs from Jacob, the twist will come.',
        },
        {
          kind: 'commentary',
          id: 'c-few-days',
          html:
            'Seven years of labor. Seven years of watching Rachel, working for the right to marry her, carrying the ache of desire. And the Bible says they "seemed unto him but a few days, for the love he had to her." This is what love does to time. Years disappear. Ordinary days become transparent. The length of suffering is measured only by the absence of what you love, not by the calendar. Jacob would have served seventy years if that&apos;s what it took. Love does not count the cost.',
        },
        {
          kind: 'christ',
          id: 'c-few-days',
          title: 'Christ Connection — Love That Labors',
          html:
            'Jacob labors seven years for the bride he loves, and the years seem like days. Christ, Bridegroom of the Church, labors through all of history for His bride—and the apostle Paul quotes this very verse to describe it: Christ "loved the church, and gave himself for it" (Eph. 5:25). The years from creation to the cross to the age to come are, from the perspective of eternity, a labor of love. His seven years—or seven thousand—are rendered nothing by the measure of His love. We are the Rachel He cannot stop working for.',
        },
        {
          kind: 'carry',
          html:
            'Notice what Jacob does: he doesn&apos;t bargain for something easier. He sets his eyes on what he loves and works. Seven years. No shortcuts. No second choice. He is not thinking about his own comfort or what&apos;s practical. He is thinking about her. Whatever good thing you are actually willing to labor for seven years—not in a romantic gesture, but in the daily, ordinary work—that is a clue to what your real love is. And the world is watching to see if you will keep working when the cost is high.',
        },
        {
          kind: 'reflection',
          id: 'gen29-labor',
          prompt:
            'What would you labor for seven years without counting the cost? Where is God asking you to do that labor right now, even though it doesn&apos;t feel like love yet?',
        },
        {
          kind: 'artwork',
          matchTitle: /jacob/i,
          matchArtist: /tissot|rembrandt|delacroix/i,
          caption: 'Genesis 29:13–20 · Seven Years for Love',
        },
      ],
    },

    /* ─── Genesis 29:21–25 — The Darkness ────────────────────────────── */
    {
      ref: 'Genesis 29:21–25',
      title: 'The Darkness and the Morning',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 21,
              spans: [
                t('And Jacob said unto Laban, Give me my wife, for my days are fulfilled, that '),
                hg('I may go in unto her', 'c-leah-given'),
                t('.'),
              ],
            },
            {
              number: 22,
              spans: [t('And Laban gathered together all the men of the place, and made a feast.')],
            },
            {
              number: 23,
              spans: [
                t('And it came to pass in the evening, that he took '),
                hy('Leah his daughter', 'c-leah-given'),
                t(', and brought her to him; and he went in unto her.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And Laban gave unto his daughter Leah '),
                hg('Zilpah his handmaid for an handmaid', 'c-handmaid'),
                t('.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And it came to pass, that in the morning behold, it was '),
                hp('Leah', 'c-leah-unmasked'),
                t(': and he said to Laban, What is this thou hast done unto me? did not I serve thee for Rachel? wherefore then hast thou beguiled me?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-leah-given',
          html:
            'Laban, who has been warm and welcoming, now shows his hand. He takes Leah—his own daughter—and brings her to Jacob in the darkness. The bride-switching is one of the most poignant betrayals in Scripture. Leah is not wicked; she is a pawn. Jacob is not told he is being deceived; he is told nothing. In the dark, in joy, he receives his bride—only to find, "in the morning, behold, it was Leah." The deceiver has been deceived by darkness. The phrase echoes Eden, where Adam and Eve hid in darkness after the Fall. But this darkness is not chosen; it is imposed. Jacob, like Leah, is a victim of his own father-in-law&apos;s deception.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-leah-unmasked',
          title: 'Leah — revealed in the light',
          script: 'לֵאָה',
          translit: '<strong>leah</strong> · and behold, it was Leah',
          description:
            'The story turns on a single word: morning. In the dark, Jacob cannot tell. In the light, he knows. The text does not say what Leah was thinking, if she wept, if she spoke. She is present in the darkness but unnamed until dawn breaks—and then the text speaks only of Jacob&apos;s shock, his question, his sense of betrayal. But Leah, now, is married. The deed is done. And she will bear him four children before he ever gives her the love she deserves.',
        },
        {
          kind: 'commentary',
          id: 'c-handmaid',
          html:
            'Laban gives Zilpah to Leah—as a handmaid, but also as a partial compensation for the marriage, perhaps a signal of status. It is a custom, a small mercy, a token of duty performed. But it cannot comfort Leah for the fact that she is married to a man who does not love her, and never chose her.',
        },
        {
          kind: 'christ',
          id: 'c-leah-unmasked',
          title: 'Christ Connection — Seen in the Morning Light',
          html:
            'The irony is terrible and beautiful: Jacob, the deceiver, is deceived in darkness. But the darkness does not last. Morning comes. Light reveals. In the resurrection of Christ, the same pattern appears—a darkness where the disciples cannot see, and then a morning where everything is made plain. "In the morning, behold, it was Leah"—and in that morning, Christ appears, and the disciples see Him. What is hidden in darkness is revealed at dawn. What is done in secret will be shown in the light.',
        },
        {
          kind: 'carry',
          html:
            'The switcharoo in the darkness is one of Scripture&apos;s cruelest ironies—not because Leah is cruel, but because deceit, by its nature, harms everyone. Jacob wanted Rachel and got Leah. Leah wanted to be chosen and was forced into a marriage with a man who didn&apos;t choose her. Laban won a cheat. What begins in darkness—in hidden deals, in lies told at night—always ends in the morning with someone hurt. The kindest thing you can do for the people you love is to step out of the darkness and tell the truth, even when it costs you.',
        },
        {
          kind: 'reflection',
          id: 'gen29-darkness',
          prompt:
            'Where are you in the darkness right now—being deceived, or deceiving? What would it take to step into the morning and tell the truth?',
        },
        {
          kind: 'artwork',
          matchTitle: /rachel|well/i,
          matchArtist: /tissot/i,
          caption: 'Genesis 29:21–25 · The Darkness Revealed',
        },
      ],
    },

    /* ─── Genesis 29:26–30 — The Wages ──────────────────────────────── */
    {
      ref: 'Genesis 29:26–30',
      title: 'Seven More Years',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 26,
              spans: [
                t('And Laban said, It must not be so done in our country, to '),
                hg('give the younger before the elder', 'c-elder-first'),
                t('.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('Fulfil her week, and we will give thee this also for the service which thou shalt serve with me yet '),
                hp('seven other years', 'c-seven-more'),
                t('.'),
              ],
            },
            {
              number: 28,
              spans: [t('And Jacob did so, and fulfilled her week: and he gave him Rachel his daughter to wife also.')],
            },
            {
              number: 29,
              spans: [
                t('And Laban gave to Rachel his daughter '),
                hg('Bilhah his handmaid to be her maid', 'c-elder-first'),
                t('.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And he went in also unto Rachel, and '),
                hg('he loved Rachel more than Leah', 'c-loved-more'),
                t(', and served with Laban yet seven other years.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-elder-first',
          html:
            'Laban&apos;s explanation is technically true—it was custom to marry off the elder daughter first. But his custom did not forbid him from saying so beforehand. He hid it, deceived Jacob, and only after the deed is done does he invoke custom as justification. This is how deception works: it uses truth as a mask. The law becomes an excuse only after the damage is done.',
        },
        {
          kind: 'commentary',
          id: 'c-seven-more',
          html:
            'Jacob agrees to seven more years. Not in anger, but in surrender. He has already given seven years. Now he will give seven more. Fourteen years of labor for the woman he loves, while living in a marriage—to Leah—that is unwanted. The text does not soften this. Jacob will have two wives, will love one and not the other, and will live in the house of a deceiver who holds him to further servitude. The consequences of deception ripple outward, catching everyone.',
        },
        {
          kind: 'commentary',
          id: 'c-loved-more',
          html:
            'The text says plainly: "he loved Rachel more than Leah." Not equally. More. Leah is present in the text by her absence. She is wife, she will be mother, she will bear sons—but the man she is married to loves another woman more. The Bible does not hide this tragedy. It names it. And it names it at the very moment when Leah, unknown to herself, is about to become the bearer of the line that leads to Christ.',
        },
        {
          kind: 'carry',
          html:
            'Fourteen years. Jacob did not bargain Laban down or run away. He stayed. He worked. He fulfilled both covenants. In the mess of a marriage where he loved one woman and was yoked to another, where he had been betrayed and kept working anyway, he showed something hard and true: the willingness to honor your word even when the cost is higher than you imagined. The cost of staying faithful is sometimes silence, sometimes pain, sometimes years that feel heavy. But the one who stays faithful is the one the Bible will later call "Israel"—a prince who has wrestled with God.',
        },
        {
          kind: 'reflection',
          id: 'gen29-years',
          prompt:
            'Where have you been given an unwanted covenant—a responsibility you didn&apos;t choose, a cost you didn&apos;t plan for? What would it look like to honor it faithfully, even if you don&apos;t love it?',
        },
      ],
    },

    /* ─── Genesis 29:31–35 — Leah&apos;s Four Sons ────────────────────────── */
    {
      ref: 'Genesis 29:31–35',
      title: 'Leah&apos;s Prayer in Four Names',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 31,
              spans: [
                t('And when the LORD saw that Leah was '),
                hy('hated', 'c-god-sees-leah'),
                t(', he '),
                hp('opened her womb', 'c-god-sees-leah'),
                t(': but Rachel was barren.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And Leah conceived, and bare a son, and she called his name '),
                hy('Reuben', 'hebrew-reuben'),
                t(': for she said, Surely the LORD hath looked upon my affliction; now therefore my husband will love me.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('And she conceived again, and bare a son; and said, Because the LORD hath heard that I was hated, she called his name '),
                hy('Simeon', 'hebrew-simeon'),
                t('.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('And she conceived again, and bare a son; and said, Now this time will my husband be joined unto me, because I have born him three sons: therefore was his name called '),
                hy('Levi', 'hebrew-levi'),
                t('.'),
              ],
            },
            {
              number: 35,
              spans: [
                t('And she conceived again, and bare a son: and she said, Now will I praise the LORD: therefore she called his name '),
                hp('Judah', 'hebrew-judah-praise'),
                t('; and left bearing.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-god-sees-leah',
          html:
            'The text introduces a new voice: the LORD. Not Laban, not Jacob. God. "When the LORD saw that Leah was hated, he opened her womb." The one who bore the shame of not being chosen is seen by God. The barren Rachel, whom Jacob loves, is set aside. The unloved Leah, whom the text has shown us with careful cruelty, is given fertility. God&apos;s eyes are on the person the world has overlooked. This is the pattern that will repeat throughout Scripture—the younger chosen over the older, the weak chosen over the strong, the overlooked chosen to bear the line of Christ.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-reuben',
          title: 'Reuben — &ldquo;see, a son&rdquo;',
          script: 'רְאוּבֵן',
          translit: '<strong>reuben</strong> · <strong>reu</strong> (see) + <strong>ben</strong> (son)',
          description:
            'Leah names her first son Reuben and explains: "the LORD hath looked upon my affliction." The name is a prayer. She is saying: at least one being—God—has seen her pain. The Lord has looked. A son. Proof that God sees what the world misses.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-simeon',
          title: 'Simeon — &ldquo;heard&rdquo;',
          script: 'שִׁמְעוֹן',
          translit: '<strong>simeon</strong> · from <em>shama</em>, to hear',
          description:
            'With her second son, Leah says: "Because the LORD hath heard that I was hated." Reuben is "the LORD has looked." Simeon is "the LORD has heard." Each name is a word of faith. God is not just watching; He is listening. He hears what cannot be said aloud—the unlovedness, the ache that will not be spoken because to speak it is to burden others with the knowledge that you are unwanted.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-levi',
          title: 'Levi — &ldquo;joined&rdquo;',
          script: 'לֵוִי',
          translit: '<strong>levi</strong> · from <em>lavah</em>, to join, to cleave',
          description:
            'With her third son, something shifts. Leah says: "Now this time will my husband be joined unto me." The prayer changes. The first two sons were about God seeing and hearing her pain. The third son is a prayer that Jacob will finally love her. She is still hoping that labor—bearing sons—will win the heart that was never hers. The hope, though, is fragile. She still feels the distance.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-judah-praise',
          title: 'Judah — &ldquo;praised, he praised&rdquo;',
          script: 'יְהוּדָה',
          translit: '<strong>judah</strong> · from <em>hodah</em>, to praise, to give thanks',
          description:
            'With her fourth son, Leah stops asking. She stops praying for Jacob&apos;s love and praises God instead. "Now will I praise the LORD," she says. Reuben saw. Simeon heard. Levi joined. But Judah is the name where Leah lets go of the hope that Jacob will ever love her—and turns her face toward God. The transformation is complete. She has moved from "my husband will love me" to "I will praise the LORD." And this son—born of the unloved wife, named in the moment when she stops waiting for the world&apos;s affection—this son will be the line of David. The line of Christ.',
        },
        {
          kind: 'christ',
          id: 'hebrew-judah-praise',
          title: 'Christ Connection — The Praise That Could Not Be Silenced',
          html:
            'Leah&apos;s fourth son, Judah, becomes the father of the royal line. David comes from Judah. Christ comes from Judah. The person the world rejected, the wife Jacob did not choose, became the mother of kings. The pattern echoes across Scripture: God chooses what humanity overlooks. Mary was not a wealthy woman. Ruth was a foreigner. Bathsheba was a poor woman in a king&apos;s way. And in each case, God chose the overlooked one to bear the line. Jesus came not through the powerful or the celebrated, but through the humble and the unwanted. And He made His first appearance after resurrection to Mary Magdalene—a woman everyone else had abandoned. God&apos;s eye has always been on the person the world turned away from.',
        },
        {
          kind: 'carry',
          html:
            'Leah&apos;s prayer, whispered in the names of her children, is the prayer of everyone who has ever felt passed over. Not chosen for the team. Not asked to the dance. Not loved the way you wanted. Overlooked, year after year. But her story ends not with bitterness but with this: she finally stops waiting for the love she could not have, and she praises God. And from her praise comes a son whose name echoes through all history. Whenever you feel like the second choice, the backup plan, the one who was never meant to be, remember Leah. You might be carrying the line of something greater than you know.',
        },
        {
          kind: 'reflection',
          id: 'gen29-names',
          prompt:
            'In Leah&apos;s four prayers—look, listen, join, praise—which one are you living in right now? What would it take to move to the next one?',
        },
      ],
    },
  ],
};
