import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 27 - Jacob steals the blessing.
 *
 * Isaac is old, blind, and ready to bless his firstborn. Rebekah overhears,
 * plots with Jacob. Jacob deceives his father-goatskins on his arms, venison
 * on the table. Isaac whispers a blessing meant for Esau. By the time Esau
 * returns, Jacob already wears the blessing. The family fractures, and Rebekah
 * never sees Jacob again after sending him away.
 */
export const GENESIS_27: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 27,

  estimatedMinutes: { beginner: 12, intermediate: 18, deep: 21 },
  intros: [
    'Isaac is old. His eyes fail him. He knows the time has come to give his blessing-the prayer that would shape his eldest son&apos;s future, spoken by a dying father, irreversible once spoken. But while Isaac lies in his tent, Rebekah overhears from the doorway. The blessing Isaac means to give Esau is about to go to Jacob instead. And she is going to make it happen.',
    'Genesis 27 is about deception, yes. But it is also about something harder: the cost of what we want. Rebekah gets the blessing moved to Jacob. Esau goes away weeping. And Rebekah, the architect of the scheme, is never named again after this chapter. She stays in Canaan while Jacob flees to Haran and lives as a stranger for twenty years. The text does not moralize. It simply tells you what happened: you got what you wanted, and you paid with what you did not know you had.',
  ],

  opener: {
    matchTitle: /Isaac.*Esau|Esau.*blessing/i,
    caption: 'Genesis 27 - The Stolen Blessing',
  },

  bottomShare: {
    label: 'Share Genesis 27',
    quote:
      'Isaac, old and blind, prepares to bless his firstborn Esau. Rebekah hears. Jacob deceives him with goatskins and venison. The blessing goes to the wrong son. A family breaks.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 27 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-genesis-27',
      kind: 'lexicon',
      source: 'Sefaria',
      label: 'Genesis 27 · Commentaries & Translations',
      url: 'https://www.sefaria.org/Genesis.27',
      description: 'Rabbinic and academic commentaries on the blessing narrative and Jacob&apos;s deception.',
    },
    {
      id: 'iaa-israel-sites',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'Canaanite and Patriarchal Sites',
      url: 'https://www.antiquities.org.il/Article/ArticleFull/1',
      description: 'Archaeological records of settlements and family structures in Iron Age Canaan.',
    },
  ],

  sections: [
    /* ─── Genesis 27:1-4 - Isaac&apos;s Command ───────────────────────── */
    {
      ref: 'Genesis 27:1-4',
      title: 'A Blessing Prepared',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 1,
              spans: [
                t('And it came to pass, that when Isaac was old, and '),
                hy('his eyes were dim', 'hebrew-eyesdim'),
                t(', so that he could not see, he called Esau his eldest son, and said unto him, My son: and he said unto him, Behold, here am I.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And he said, Behold now, I am old, I know not the day of my death:'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Now therefore take, I pray thee, thy weapons, thy quiver and thy bow, and go out to the field, and take me some venison;'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And make me savoury meat, such as I love, and bring it to me, that I may eat; that my soul may '),
                hg('bless thee before I die', 'c-blessing-power'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-eyesdim',
          title: 'Eyes Dim - &ldquo;dimmed with age&rdquo;',
          script: 'כָּהוּ עֵינָיו',
          translit: '<strong>kahu</strong> · to be dim, to grow weak',
          description:
            'Isaac cannot see, but the chapter will show us he cannot fully hear either-or rather, he hears only what his body wants him to hear. Blindness is not only physical in this story; it is a kind of willing confusion.',
        },
        {
          kind: 'commentary',
          id: 'c-blessing-power',
          html:
            'The blessing in the ancient world was not a wish. It was a <em>word with power in it</em>-a father&apos;s prophetic prayer, once spoken, could not be unmade. Isaac knows this. He is moving carefully and ceremonially, with words that have already started to do their work before Esau ever brings the food. By verse 4, the blessing is not waiting-it has already begun.',
        },
        {
          kind: 'carry',
          html:
            'When you know something must change soon and cannot change again, how do you act? Isaac moves with the solemnity of a man running out of time. He calls his son. He names the stakes. He knows what he is about to do will reshape a future he will not live to see. You may be in a moment like that too-a choice that will outlast you, a word you are about to speak that will echo longer than you will. That weight, that careful knowing, is what Isaac carries into this chapter.',
        },
        {
          kind: 'reflection',
          id: 'isaac-blessing-weight',
          prompt:
            'What is something you know you need to decide or say soon that will outlast you? What weight does that carry?',
        },
      ],
    },

    /* ─── Genesis 27:5-17 - The Plot ──────────────────────────────────── */
    {
      ref: 'Genesis 27:5-17',
      title: 'Rebekah Hears',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 5,
              spans: [
                t('And '),
                hp('Rebekah heard', 'c-rebekah-hears'),
                t(' when Isaac spake to Esau his son. And Esau went to the field to hunt for venison, and to bring it.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And Rebekah spake unto Jacob her son, saying, Behold, I heard thy father speak unto Esau thy brother, saying,'),
              ],
            },
            {
              number: 7,
              spans: [
                t('Bring me venison, and make me savoury meat, that I may eat, and bless thee before the LORD before my death.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'genesis-27-78mid-1',
          html: 'Jacob, disguised, receives the blessing meant for Esau. Isaac is deceived completely--the words of covenant flow to the wrong son.',
        },
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 8,
              spans: [
                t('Now therefore, my son, obey my voice according to that which I command thee.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('Go now to the flock, and fetch me from thence two good kids of the goats; and I will make them savoury meat for thy father, such as he loveth:'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And thou shalt bring it to thy father, that he may eat, and that he may bless thee before his death.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And Jacob said to Rebekah his mother, Behold, '),
                hg('Esau my brother is a hairy man, and I am a smooth man', 'c-hairy-smooth'),
                t(':'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen27-jacob-objects',
          html:
            'Jacob&apos;s objection is not moral but practical - he&apos;s afraid of being caught. Rebekah&apos;s answer is just as practical: <em>upon me be thy curse.</em> A mother offering to take a curse for her son sounds noble, but the next chapters show what it actually costs. The deception will hold; the family will not.',
        },
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 12,
              spans: [
                t('My father peradventure will feel me, and I shall seem to him as a deceiver; and I shall bring a curse upon me, and not a blessing.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And his mother said unto him, Upon me be thy curse, my son: only obey my voice, and go fetch me them.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And he went, and fetched, and brought them to his mother: and his mother made savoury meat, such as his father loved.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And Rebekah took goodly raiment of her eldest son Esau, which were with her in the house, and put them upon Jacob her younger son:'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And she put the skins of the kids of the goats upon his hands, and upon the smooth of his neck:'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And she gave the savoury meat and the bread, which she had prepared, into the hand of her son Jacob.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-rebekah-hears',
          html:
            'One sentence: Rebekah heard. She does not ask the Father to move. She does not pray. She listens, understands immediately that the blessing is about to go to Esau, and decides in that moment to make it go to Jacob instead. This is not divine revelation. This is a woman making [res:bibleodyssey-jacob-israel] a choice about her son&apos;s future, and she chooses deceit. Notice what the text does not do: it does not condemn her in the moment. It simply shows her acting.',
        },
        {
          kind: 'commentary',
          id: 'c-hairy-smooth',
          html:
            'Jacob&apos;s objection is physical: Esau is hairy, I am smooth. My father will feel me and know I am deceiving him. Jacob is afraid. Rebekah answers with five words: <em>Upon me be thy curse.</em> She will bear the consequences. The prayer is already made. Now Jacob moves.',
        },
        {
          kind: 'christ',
          id: 'christ-deception-pattern',
          title: 'Christ Connection - The Pattern of God&apos;s Choosing',
          html:
            'Jacob is deceiving his way into a blessing that God has already promised he would have (25:23-&ldquo;the elder shall serve the younger&rdquo;). The promise is given. The deception is unnecessary. Yet God, watching Jacob put on goatskins and a dead man&apos;s garments, does not stop him. And later, when Jacob meets God face-to-face at Peniel (32:28), God does not take the blessing back. He renames Jacob &ldquo;Israel.&rdquo; The New Testament says Jesus came not for the righteous but for sinners (Matt. 9:13). The pattern starts here: God blesses the ones who are trying to steal their own blessing, because He has already decided the blessing is theirs.',
        },
        {
          kind: 'carry',
          html:
            'There is a deep shame in Jacob&apos;s deception-the shame of taking what you wanted before it was given, of not being able to wait for a promise, of reaching before you can trust. You may have felt that shame. Done the deceiving thing, the shortcutting thing, the taking-it-into-your-own-hands thing, even though you knew God&apos;s promise was already moving toward you. What the text is quietly saying is: that does not cancel the blessing. You still get the blessing. But you will also get what comes with deceiving your way into it.',
        },
        {
          kind: 'reflection',
          id: 'jacob-impatience',
          prompt:
            'Where have you taken control of a promise God already gave you? What did that deception cost you?',
        },
      ],
    },

    /* ─── Genesis 27:18-29 - The Voice and the Hands ───────────────────── */
    {
      ref: 'Genesis 27:18-29',
      title: 'The Voice Is Jacob&apos;s',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 18,
              spans: [
                t('And he came unto his father, and said, My father: and he said, Here am I; who art thou, my son?'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And Jacob said unto his father, I am Esau thy firstborn; I have done according as thou badest me: arise, I pray thee, sit and eat of my venison, that thy soul may bless me.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And Isaac said unto his son, How is it that thou hast found it so quickly, my son? And Jacob said, Because the LORD thy God brought it to me.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And Isaac said unto Jacob, Come near, I pray thee, that I may feel thee, my son, whether thou be my very son Esau or not.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And Jacob went near unto Isaac his father; and he felt him, and said, '),
                hg('The voice is Jacob&apos;s voice', 'c-voice-hands'),
                t(', but the '),
                hg('hands are the hands of Esau', 'c-voice-hands'),
                t('.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And he discerned him not, because his hands were hairy, as his brother Esau&apos;s hands: so he blessed him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen27-hands-succeeded',
          html:
            'The deception succeeds. Isaac feels the hairy hands and his doubt evaporates. The goatskins held. The meal tastes right. The voice is young but it is asking for a blessing. And Isaac proceeds with the blessing-the word that will reshape a future, spoken now, irreversible. The moment of doubt passes, and Isaac surrenders to the deception. He does not continue questioning.',
        },
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 24,
              spans: [
                t('And he said, Art thou my very son Esau? And he said, I am.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And he said, Bring it near to me, and I will eat of my son&apos;s venison, that my soul may bless thee. And he brought it near to him, and he did eat: and he brought him wine, and he drank.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And his father Isaac said unto him, Come near now, and '),
                hp('kiss me, my son', 'c-kiss'),
                t('.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And he came near, and kissed him: and he smelled the smell of his raiment, and blessed him, and said, See, the smell of my son is as the smell of a field which the LORD hath blessed:'),
              ],
            },
            {
              number: 28,
              spans: [
                t('Therefore God give thee of the dew of heaven, and the fatness of the earth, and plenty of corn and wine:'),
              ],
            },
            {
              number: 29,
              spans: [
                t('Let people serve thee, and nations bow down to thee: be lord over thy brethren, and let thy mother&apos;s sons bow down to thee: cursed be every one that curseth thee, and blessed be he that blesseth thee.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-voice-hands',
          html:
            'The most famous moment: Isaac&apos;s doubt. The voice is Jacob&apos;s voice, but the hands-those goatskin-wrapped hands-are Esau&apos;s. Isaac senses something is wrong. He hesitates. But the blessing is already pushing forward through his lips. He feels the hairy arms, smells what he expects to smell, eats what tastes right, and the hesitation dissolves. Doubt and desire collide, and desire wins. Isaac goes on blessing.',
        },
        {
          kind: 'commentary',
          id: 'c-kiss',
          html:
            'A father and son embrace. Isaac leans close enough to smell his raiment-and in that moment of physical intimacy, the deception succeeds completely. The smell of Esau&apos;s field-clothes seals what the goatskins began. Jacob&apos;s body is no longer himself in Isaac&apos;s senses; it is Esau.',
        },
        {
          kind: 'christ',
          id: 'christ-senses-deceived',
          title: 'Christ Connection - Truth Beneath the Deception',
          html:
            'Isaac&apos;s senses are confused, but the blessing he speaks is true. &ldquo;Be lord over thy brethren&rdquo;-that is exactly what God promised Jacob in 25:23. The one who blessed is blind and confused. The one who deceived spoke the truth only when he was lying. The irony is stinging: Jacob gets a true blessing through deception, while Isaac, the patriarch of honesty, pronounces a true word while being fooled. This is not how blessing is supposed to work-and yet it does. God, it seems, is not constrained by the honesty of the moment.',
        },
        {
          kind: 'carry',
          html:
            'Have you ever gotten exactly what you needed-comfort, help, a word that changed you-from someone or something that wasn&apos;t really what you needed on the surface? Have you ever spoken a true thing while angry, or received a true blessing from a place of confusion? The world is not supposed to work that way, and yet it does. God moves through the deception. Not because the deception is good-it isn&apos;t. But because the blessing is older than the lying, and nothing Jacob does in this tent can unmake it.',
        },
        {
          kind: 'reflection',
          id: 'true-blessing-false-moment',
          prompt:
            'When have you received something real and good through a moment that wasn&apos;t honest? Or given something true while you weren&apos;t in the best place to give it?',
        },
      ],
    },

    /* ─── Genesis 27:30-40 - Esau Returns ──────────────────────────────── */
    {
      ref: 'Genesis 27:30-40',
      title: 'Too Late',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 30,
              spans: [
                t('And it came to pass, as soon as Isaac had made an end of blessing Jacob, and Jacob was yet scarce gone out from the presence of Isaac his father, that Esau his brother came in from his hunting.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('And he also made savoury meat, and brought it unto his father, and said unto his father, Let my father arise, and eat of his son&apos;s venison, that thy soul may bless me.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And Isaac his father said unto him, '),
                hg('Who art thou?', 'c-esau-return'),
                t(' And he said, I am thy son, thy firstborn Esau.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('And Isaac trembled very exceedingly, and said, Who? where is he that hath taken venison, and brought it me, and I have eaten of all before thou camest, and have blessed him? yea, and '),
                hp('he shall be blessed', 'c-blessed-stands'),
                t('.'),
              ],
            },
            {
              number: 34,
              spans: [
                t('And when Esau heard the words of his father, he cried with a great and exceeding bitter cry, and said unto his father, '),
                hg('Bless me, even me also, O my father', 'c-esau-cry'),
                t('.'),
              ],
            },
            {
              number: 35,
              spans: [
                t('And he said, Thy brother came with subtilty, and hath taken away thy blessing.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'gen27-esau-understands',
          html:
            'In one sentence, Isaac tells Esau what happened: your brother deceived you and stole your blessing. The truth is laid bare. Jacob came with subtilty-with cunning, with design. And he took what was yours. Isaac does not excuse the deception. He names it clearly. And now Esau understands: his loss was not an accident. It was orchestrated. Someone he loved conspired against him.',
        },
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 36,
              spans: [
                t('And he said, Is not he '),
                hy('rightly named Jacob?', 'hebrew-jacob-name'),
                t(' for he hath supplanted me these two times: he took away my birthright; and, behold, now he hath taken away my blessing. And he said, Hast thou not reserved a blessing for me?'),
              ],
            },
            {
              number: 37,
              spans: [
                t('And Isaac answered and said unto Esau, Behold, I have made him thy lord, and all his brethren have I given to him for servants; and with corn and wine have I sustained him: and what shall I do now unto thee, my son?'),
              ],
            },
            {
              number: 38,
              spans: [
                t('And Esau said unto his father, Hast thou but one blessing, my father? bless me, even me also, O my father. And Esau lifted up his voice, and wept.'),
              ],
            },
            {
              number: 39,
              spans: [
                t('And Isaac his father answered and said unto him, Behold, thy dwelling shall be the fatness of the earth, and of the dew of heaven from above;'),
              ],
            },
            {
              number: 40,
              spans: [
                t('And by thy sword shalt thou live, and shalt serve thy brother: and it shall come to pass when thou shalt have the dominion, that thou shalt break his yoke from off thy neck.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-esau-return',
          html:
            'Timing matters. Esau returns with his own venison, his own gift, his own love. He asks a simple question: Who art thou? And Isaac understands in that moment what he has done. The voice was not Esau&apos;s. The hands were not Esau&apos;s. And now the blessing is gone, already given, already spoken, already irrevocable.',
        },
        {
          kind: 'commentary',
          id: 'c-blessed-stands',
          html:
            'Three words that end a world: <em>he shall be blessed.</em> Isaac understands what has happened. The blessing cannot be unmade. It cannot be taken back. Whatever blessing he gives Esau now, it will be lesser, secondary. The law of primogeniture has been broken. Jacob, the younger, has the greater blessing.',
        },
        {
          kind: 'commentary',
          id: 'c-esau-cry',
          html:
            'Read that cry slowly: <em>Bless me, even me also, O my father.</em> Esau is not angry in this moment. He is desperate. He is the eldest son, the one who was supposed to inherit the blessing, and he is asking his father if there is <em>something</em> left for him. The text does not judge Esau for weeping. It simply shows us a man who has lost what was his.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-jacob-name',
          title: 'Jacob - &ldquo;supplanter, heel-catcher&rdquo;',
          script: 'יַעֲקֹב',
          translit: '<strong>Ya&apos;akov</strong> · one who grasps the heel, one who supplants',
          description:
            'The name itself contains the pattern. Jacob was born grasping Esau&apos;s heel (25:26). Now in verse 36, Esau cries out: &ldquo;Is not he rightly named Jacob? for he hath supplanted me these two times.&rdquo; The name is becoming destiny. What was spoken at his birth is being lived out.',
        },
        {
          kind: 'christ',
          id: 'christ-esau-weeping',
          title: 'Christ Connection - Esau and Weeping Repentance',
          html:
            'In Hebrews 12:16-17, the author warns against being like Esau: &ldquo;who for one morsel of meat sold his birthright. For ye know how that afterward, when he would have inherited the blessing, he was rejected: for he found no place of repentance, though he sought it carefully with tears.&rdquo; Esau wept. He sought repentance. But the blessing, once given, was unalterable. The author of Hebrews uses Esau as a mirror: some choices, once made, reshape the entire contour of what comes after. Esau&apos;s grief is genuine-and it is also final.',
        },
        {
          kind: 'carry',
          html:
            'There is a particular grief in seeing someone else receive something that was meant for you. Esau experiences it. Families experience it when resources are divided, when inheritance gets muddied, when one sibling seems favored. The text does not ask you to take sides. It does not say Esau is weak for weeping, and it does not say Jacob&apos;s deception was justified. It simply shows you two brothers, one with a blessing he did not earn the way he should have, one without a blessing he was supposed to receive. This is what the Fall looks like inside a family.',
        },
        {
          kind: 'reflection',
          id: 'esau-loss',
          prompt:
            'When have you felt like Esau-asking for something you thought was yours, only to find it already given to someone else? How did you hold that?',
        },
      ],
    },

    /* ─── Genesis 27:41-46 - The Breaking ──────────────────────────────── */
    {
      ref: 'Genesis 27:41-46',
      title: 'Rebekah Sends Jacob Away',
      blocks: [
        {
          kind: 'scripture',
          chapter: 27,
          lines: [
            {
              number: 41,
              spans: [
                t('And Esau '),
                hy('hated Jacob', 'hebrew-hate-esau'),
                t(' because of the blessing wherewith his father blessed him: and Esau said in his heart, The days of mourning for my father are at hand; then will I slay my brother Jacob.'),
              ],
            },
            {
              number: 42,
              spans: [
                t('And these words of Esau her eldest son were told to Rebekah: and she sent and called Jacob her younger son, and said unto him, Behold, thy brother Esau, as touching thee, doth comfort himself, purposing to kill thee.'),
              ],
            },
            {
              number: 43,
              spans: [
                t('Now therefore, my son, obey my voice; and arise, flee thou to Laban my brother to Haran;'),
              ],
            },
            {
              number: 44,
              spans: [
                t('And tarry with him a few days, until thy brother&apos;s fury turn away;'),
              ],
            },
            {
              number: 45,
              spans: [
                t('Until thy brother&apos;s anger turn away from thee, and he forget that which thou hast done to him: then I will send, and fetch thee from thence: why should I be deprived also of you both in one day?'),
              ],
            },
            {
              number: 46,
              spans: [
                t('And Rebekah said to Isaac, I am weary of my life because of the daughters of Heth: if Jacob take a wife of the daughters of Heth, such as these which are of the daughters of the land, what good shall my life do me?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-esau-hate',
          html:
            'Esau&apos;s grief turns to rage. He has been dishonored in front of his father. The blessing that shaped his future has been taken by his younger brother. In his mind, there is one solution: Jacob must die. But not yet-not while Isaac lives, because he will not shame his dying father with fratricide. [res:sefaria-genesis-27] So Esau makes a mental note. When Isaac is dead, Jacob will pay.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-hate-esau',
          title: 'Hate - &ldquo;sane&apos;&rdquo;',
          script: 'שָׂנֵא',
          translit: '<strong>sane&apos;</strong> · to hate, to regard with hostility',
          description:
            'The same word appears in 29:31, where Leah &ldquo;was hated&rdquo; (sane&apos;ah)-less loved-by Jacob. Hatred in Scripture is often about being reduced in value, being placed second, being passed over. Esau is experiencing both: his identity as the firstborn has been overridden, and his brother is now the one his father loves.',
        },
        {
          kind: 'commentary',
          id: 'c-rebekah-pays',
          html:
            'Rebekah hears that Esau is planning to kill Jacob. She sends her younger son away. Notice what she does not do: she does not confess to Isaac. She does not ask for his help. She cannot face what she has done. Instead, she invents a cover story-something about the daughters of Heth being unsuitable wives-and sends Jacob away to her brother Laban in Haran. [res:iaa-israel-sites] &ldquo;A few days,&rdquo; she tells him, &ldquo;until thy brother&apos;s fury turn away.&rdquo; Jacob will be gone twenty years. The text says nothing more about Rebekah and Jacob together. They never see each other again.',
        },
        {
          kind: 'christ',
          id: 'christ-cost-of-winning',
          title: 'Christ Connection - The Cost of the Blessing',
          html:
            'Rebekah got what she wanted. Jacob was blessed. But the blessing came with a price she did not anticipate-exile, separation from her favorite son for two decades, and the fracturing of her family. The Bible does not promise that if you get the thing you were scheming for, your life will be simple. It shows you what it costs: relationships broken, families split, a woman who plotted so carefully for her son&apos;s future never to hold him again. Jesus will later teach: &ldquo;What shall it profit a man, if he shall gain the whole world, and lose his own soul?&rdquo; (Matt. 16:26). Rebekah gained the blessing she was after. She lost her son.',
        },
        {
          kind: 'carry',
          html:
            'There is a very human desire to arrange things so that the people we love get ahead. We see our children struggling, our siblings overlooked, and we scheme. We cannot help it. We think: if I just move this piece into place, if I just make this one thing happen, they will be okay. And sometimes we succeed. We get our way. We move the blessing. And then we have to live with what came with it. Not as punishment from God-just as the simple shape of a world where actions ripple further than we can see.',
        },
        {
          kind: 'reflection',
          id: 'rebekah-scheme',
          prompt:
            'What blessing have you been scheming to arrange for someone you love? What are you afraid will happen if you do not arrange it yourself?',
        },
        {
          kind: 'divider',
        },
      ],
    },

    /* ─── The Weight ──────────────────────────────────────────────────── */
    {
      ref: 'The Shape of Genesis 27',
      title: 'What We Do for Those We Love',
      blocks: [
        {
          kind: 'commentary',
          html:
            'Genesis 27 does not end with a moral. It ends with a fracture. A mother sends her favored son away. A father has blessed the wrong child-or rather, the right child by deception. Esau plots murder. The household is broken. And the blessing, once transferred, cannot be taken back. These are the stakes. Not &ldquo;do not deceive&rdquo;-though the chapter shows deception. Not &ldquo;take your turn to be blessed&rdquo;-though that would be easier. But: this is what it looks like when we take our future into our own hands, when we cannot wait for God&apos;s timing, when we love someone so much that we are willing to break everything to secure them a good.',
        },
        {
          kind: 'artwork',
          matchTitle: /Jacob.*disguise|Isaac.*Rebekah/i,
          caption: 'Genesis 27:1-46 · The Stolen Blessing',
        },
        {
          kind: 'reflection',
          id: 'genesis-27-weight',
          prompt:
            'What did you notice about yourself as you read this chapter? Where did your heart go-with Rebekah, with Jacob, with Esau, with Isaac?',
        },
      ],
    },
  ],
};
