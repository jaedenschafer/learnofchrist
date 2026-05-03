import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Genesis 26 — The Famine, the Wells, and Isaac\'s Patience
 *
 * The only chapter of the Bible told almost entirely through Isaac. No
 * Abraham before him, no Jacob yet to steal the show. A quieter narrative
 * than his father\'s, and quieter than his son's — but patient, faithful,
 * and marked by a refusal to flee when circumstances press. Isaac digs again
 * what his father had dug. The Philistines stop the wells. He digs again.
 * This is the whole chapter: a man staying, persisting, not panicking when
 * the land seems to want him gone.
 */
export const GENESIS_26: RichChapterContent = {
  bookSlug: 'genesis',
  bookName: 'Genesis',
  chapter: 26,

  estimatedMinutes: { beginner: 9, intermediate: 14, deep: 18 },
  intros: [
    'Genesis 26 is Isaac\'s chapter — the only long narrative told mostly through his eyes. There is no Abraham to overshadow it, no Jacob to steal the story yet. And it is quieter than both: a chapter about staying when you would rather flee, and about digging again wells that others have filled in. A famine comes to the land. God appears to Isaac and tells him: do not go down to Egypt. Stay here. And so Isaac stays. He builds, he plants, he prospers — and when others tear down what he has built, he builds it again.',
    'The pattern repeats: Isaac sows, God multiplies it a hundredfold. Isaac digs a well, the Philistines stop it up. Isaac moves and digs another. Three wells in a row — Esek, Sitnah, Rehoboth — each one a small refusal to be driven away. Then comes rest: a covenant with Abimelech, the promise of God restated, a well that stays open. But the chapter ends not with victory but with grief: Esau marries foreign women, and Isaac and Rebekah\'s hearts are heavy. The reward of faithfulness is not always the happiness of your children.',
  ],

  bottomShare: {
    label: 'Share Genesis 26',
    quote:
      'Isaac planted crops and reaped a hundredfold. He dug wells and, when they were stopped up, dug others. He made a covenant with Abimelech at Beersheba. And the Lord appeared to him and said, "I am with you, and will bless you."',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Genesis 26 · Study Guide',
  },

  sections: [
    /* ─── Genesis 26:1–6 — Famine and God\'s Word ──────────────────────── */
    {
      ref: 'Genesis 26:1–6',
      title: 'Famine in the Land',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 1,
              spans: [
                t('And there was a '),
                hg('famine in the land', 'c-famine'),
                t(', beside the first famine that was in the days of Abraham. And Isaac went unto '),
                hp('Abimelech king of the Philistines', 'c-not-egypt'),
                t(' unto Gerar.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And the LORD appeared unto him, and said, '),
                hp('Go not down into Egypt', 'c-not-egypt'),
                t('; dwell in the land which I shall tell thee of:'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Sojourn in this land, and '),
                hp('I will be with thee', 'c-with-thee'),
                t(', and will bless thee; for to thee, and to thy seed, I will give all these countries, and I will perform the oath which I sware unto Abraham thy father;'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And I will make thy seed to multiply as the stars of heaven, and will give unto thy seed all these countries; and in thy seed shall all the nations of the earth '),
                hg('be blessed', 'c-blessed-seed'),
                t(';'),
              ],
            },
            {
              number: 5,
              spans: [
                t('Because that Abraham obeyed my voice, and kept my charge, my commandments, my statutes, and my laws.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('So Isaac dwelt in Gerar.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-famine',
          html:
            'Famine is to the patriarchs what the sea is to sailors — the constant threat, the moment when faith either deepens or shatters. Isaac is at Gerar when the famine strikes. The natural move is clear: flee south to Egypt, where water still runs and granaries still stand. Abraham had done it. Why shouldn\'t Isaac?',
        },
        {
          kind: 'commentary',
          id: 'c-not-egypt',
          html:
            'But God appears to Isaac before he leaves, and tells him: <em>stay here.</em> Don\'t go down to Egypt. The word is direct, even stern. No elaborate vision, no comfort — just a command and a reason. God is drawing a line for Isaac that Abraham did not have to draw. This is Isaac\'s test: not a military trial like Abraham\'s, but a test of whether he will trust the promise when staying looks foolish.',
        },
        {
          kind: 'christ',
          id: 'c-with-thee',
          title: 'Christ Connection — I Will Be With You',
          html:
            'The words are simple, but they carry the weight of every covenant God has ever made. "I will be with thee." Emmanuel. God-with-us. When Jesus sends His disciples into hostile territory, He says the same thing: "Lo, I am with you always, even unto the end of the world" (Matt. 28:20). The promise is not that the way will be easy — famine will still come, wells will still be stopped — but that you will not face it alone. Isaac\'s steadfastness rests on a presence, not a provision.',
        },
        {
          kind: 'commentary',
          id: 'c-blessed-seed',
          html:
            'Here is the covenant restated for Isaac, the second generation. The same promises: land, seed like the stars, blessing to the nations. Isaac does not have to earn this. It comes to him because Abraham believed, because Abraham kept God\'s law, because the covenant runs in his blood. Yet it also comes with an implied weight: will Isaac keep the faith as his father did?',
        },
        {
          kind: 'carry',
          html:
            'When you want to flee a hard situation, that impulse is usually not wrong — it is not born of cowardice but of self-care. The hard thing about faith is knowing when to stay and when to go. If you have heard God\'s word to stay, the famine does not cancel that word. The pressure to leave will feel reasonable, even wise. But the promise to you is not "no famine." It is "I will be with you in it." That changes what you do next.',
        },
        {
          kind: 'reflection',
          id: 'stay-or-flee',
          prompt:
            'Is there a place God has asked you to stay, even when staying looks foolish? What would it mean to trust "I will be with you" more than you trust your own plan to escape?',
        },
      ],
    },

    /* ─── Genesis 26:7–11 — The Lie About Rebekah ──────────────────────── */
    {
      ref: 'Genesis 26:7–11',
      title: 'The Lie About the Wife',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 7,
              spans: [
                t('And the men of the place asked him of his wife; and he said, She is my sister: for he feared to say, She is my wife; '),
                hg('lest', 'c-lest'),
                t(', said he, the men of the place should kill me for Rebekah; because she was fair to look upon.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And it came to pass, when he had been there a long time, that Abimelech king of the Philistines looked out at a window, and saw Isaac '),
                hy('sporting with Rebekah his wife', 'c-sporting'),
                t('.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And Abimelech called Isaac, and said, Behold, of a surety she is thy wife: and why saidst thou, She is my sister? And Isaac said unto him, Because I said, Lest I die for her.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And Abimelech said, What is this thou hast done unto us? one of the people might lightly have lain with thy wife, and thou shouldest have brought guiltiness upon us.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And Abimelech charged all his people, saying, He that toucheth this man or his wife shall surely be put to death.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-lest',
          html:
            'Isaac does exactly what his father Abraham did in Genesis 12 and 20. He tells the king that Rebekah is his sister, not his wife, out of fear that her beauty will get him killed. The lie is rational. It is also, apparently, endemic to this family. And it still works — in a sense. Abimelech doesn\'t kill him. But the text does not celebrate the deception. It simply records it, uncomfortable as it is. A man of faith can still act as if he has no faith.',
        },
        {
          kind: 'commentary',
          id: 'c-sporting',
          html:
            'How long does the lie last? Long enough that Abimelech eventually sees Isaac and Rebekah together in an intimate moment and figures out the truth. The word translated "sporting" carries overtones of tenderness, affection — the opposite of the suspicion Isaac\'s fear conjured. If Abimelech had known from the start that Rebekah was Isaac\'s wife, he would have protected her. Instead, Isaac\'s cowardice almost cost Rebekah her honor and Abimelech his unwitting guilt. The text holds both truths: Isaac got what he wanted (safety) and set the stage for a near-catastrophe. Fear-driven solutions often do.',
        },
        {
          kind: 'carry',
          html:
            'If you\'ve repeated your parents\' mistakes — the same lie, the same anxiety, the same way of protecting yourself that actually endangers others — you are in good company. The patriarchs show us that faithfulness is not genetic. You can be chosen by God, walk with Him, receive His promises, and still choose fear over trust in the moment. The grace is that God doesn\'t revoke the covenant when you do. But He also doesn\'t pretend it didn\'t happen. You stay and face it.',
        },
        {
          kind: 'reflection',
          id: 'inherited-lie',
          prompt:
            'What family patterns do you recognize in yourself? And what would it look like to break the pattern instead of repeating it?',
        },
      ],
    },

    /* ─── Genesis 26:12–22 — Prosperity and the Wells ─────────────────── */
    {
      ref: 'Genesis 26:12–22',
      title: 'Sowing and Digging Again',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 12,
              spans: [
                t('Then Isaac sowed in that land, and '),
                hy('received in the same year an hundredfold', 'hebrew-meah-shearim'),
                t(': and the LORD blessed him.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And the man waxed great, and went forward, and grew until he became very great:'),
              ],
            },
            {
              number: 14,
              spans: [
                t('For he had possession of flocks, and possession of herds, and great store of servants: and the Philistines envied him.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('For all the wells which his father\'s servants had digged in the days of Abraham his father, the Philistines had stopped them, and filled them with earth.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And Abimelech said unto Isaac, Go from us; for thou art much mightier than we.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And Isaac departed thence, and pitched his tent in the valley of Gerar, and dwelt there.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('And Isaac digged again the wells of water, which they had digged in the days of Abraham his father; for the Philistines had stopped them after the death of Abraham: and he called their names after the names by which his father had called them.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And Isaac\'s servants digged in the valley, and found there a well of springing water.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And the herdmen of Gerar did '),
                hy('strive with Isaac\'s herdmen', 'hebrew-esek'),
                t(', saying, The water is ours: and he called the name of the well '),
                hy('Esek', 'hebrew-esek'),
                t('; because they strove with him.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And they digged another well, and '),
                hy('strove for that also', 'hebrew-sitnah'),
                t(': and he called the name of it '),
                hy('Sitnah', 'hebrew-sitnah'),
                t('.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And he removed from thence, and digged another well; and for that they strove not: and he called the name of it '),
                hy('Rehoboth', 'hebrew-rehoboth'),
                t('; for now the LORD hath made room for us, and we shall be fruitful in the land.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-meah-shearim',
          title: 'Meah She\'arim — "hundredfold"',
          script: 'מֵאָה שְׁעָרִים',
          translit: '<strong>meah</strong> · hundred · <strong>she\'arim</strong> · gates, measures',
          description:
            'A hundredfold harvest. In Genesis 13:2, Abraham was already rich. But Isaac here is not the inheritor—he is the builder. In a famine, he plants, and God multiplies. The same abundance Christ speaks of in the parable of the sower, where good ground brings forth "some an hundredfold" (Mark 4:8).',
        },
        {
          kind: 'commentary',
          id: 'c-wells-history',
          html:
            'Abraham had dug wells. These were not luxury; they were survival. A well in the desert is the difference between life and death, between passing through and staying. When Isaac inherits, the Philistines have deliberately filled them in—not by accident, but by design. They have erased his father\'s mark on the land. And Isaac does not rage at them. He simply digs again.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-esek',
          title: 'Esek — "contention, strife"',
          script: 'עֵשֶׂק',
          translit: '<strong>esek</strong> · contention, strife, oppression',
          description:
            'The first well Isaac digs brings conflict. The Philistines claim it is theirs. Isaac names it Esek—the well of contention. He could have fought. Instead, he moves and digs another. Patience is not passivity; it is wisdom. The text is teaching us what patience looks like.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-sitnah',
          title: 'Sitnah — "enmity, adversity"',
          script: 'שִׂטְנָה',
          translit: '<strong>sitnah</strong> · enmity, adversity, hostility',
          description:
            'The second well brings more of the same. Again the Philistines claim it. Again Isaac moves. He names this one Sitnah—the well of enmity. Two tries. Two rebuffs. The pattern could break him. It doesn\'t.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-rehoboth',
          title: 'Rehoboth — "broad places, room"',
          script: 'רְחֹבוֹת',
          translit: '<strong>rehoboth</strong> · broad places, wide spaces, room',
          description:
            'The third well is finally left alone. And Isaac names it Rehoboth—"broad places," or "room." Now there is space. Not because the world changed, but because Isaac persisted. The blessing of persistence is not that enemies disappear. It is that you finally find room to live.',
        },
        {
          kind: 'commentary',
          id: 'c-wells-meaning',
          html:
            'What is the text teaching here? That Isaac is stronger than his enemies? No—he still has to move, abandon his wells, start over. That he is wise? Yes, but not in the way of the world. His wisdom is the patience to do the same work three times. To name each well with honest acknowledgment of what happened there—not bitterness, but memory. And to keep going. The wells are small thing, repeated. This is the whole of the chapter.',
        },
        {
          kind: 'carry',
          html:
            'Rehoboth means "room." When you are stuck in a pattern of loss—a boundary violated, a well filled in, a project blocked—persistence is the way you find room. Not by moving mountains. By digging again. By staying when the pressure is to leave. By naming what happened without letting it name you. The broad place comes not after one heroic effort but after you have already been refused twice and you dig anyway.',
        },
        {
          kind: 'reflection',
          id: 'wells',
          prompt:
            'Where in your life are you facing a second or third "Esek"—a boundary violated, a project blocked? What would it look like to dig one more well, trusting that Rehoboth will come?',
        },
        {
          kind: 'artwork',
          matchTitle: /well/i,
          matchArtist: /tissot/i,
          caption: 'Genesis 26:12–22 · Digging Again',
        },
      ],
    },

    /* ─── Genesis 26:23–33 — Covenant at Beersheba ─────────────────────── */
    {
      ref: 'Genesis 26:23–33',
      title: 'The Covenant and Rest',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 23,
              spans: [
                t('And he went up from thence to Beersheba.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And the LORD appeared unto him the same night, and said, '),
                hp('I am the God of Abraham thy father', 'c-god-abraham'),
                t(': fear not; for I am with thee, and will bless thee, and multiply thy seed for my servant Abraham\'s sake.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('And he builded an altar there, and called upon the name of the LORD, and pitched his tent there: and there Isaac\'s servants digged a well.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('Then Abimelech went to him from Gerar, and Ahuzzath one of his friends, and Phichol the chief captain of his army.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('And Isaac said unto them, Wherefore come ye to me, seeing ye hate me, and have sent me away from you?'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And they said, We saw certainly that the LORD was with thee: and we said, Let there be now an oath betwixt us, even betwixt us and thee, and let us make a covenant with thee;'),
              ],
            },
            {
              number: 29,
              spans: [
                t('That thou wilt do us no hurt, as we have not touched thee, and as we have done unto thee nothing but good, and have sent thee away in peace: thou art now the blessed of the LORD.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('And he made them a feast, and they did eat and drink.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('And they rose up betimes in the morning, and sware one to another: and Isaac sent them away, and they departed from him in peace.'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And it came to pass the same day, that Isaac\'s servants came, and told him concerning the well which they had digged, and said unto him, We have found water.'),
              ],
            },
            {
              number: 33,
              spans: [
                t('And he called it '),
                hg('Shebah', 'c-shebah'),
                t(': therefore the name of the city is '),
                t('Beersheba'),
                t(' unto this day.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-god-abraham',
          html:
            'Isaac moves to Beersheba, and God appears to him again. Not with new promises, but with a recitation of the old ones, grounded in something deeper: "I am the God of Abraham thy father." You are not earning this. Your father\'s faith is holding you up. The God who walked with Abraham walks with you. Fear not.',
        },
        {
          kind: 'commentary',
          id: 'c-covenant-peace',
          html:
            'After digging three wells, building an altar, and calling on God, Abimelech arrives. The man who drove Isaac out now comes seeking peace. And Isaac receives him. Not with revenge, not with refusal—with a feast. The shift is remarkable. Abimelech sees that "the LORD was with thee." The wells, the prosperity, the patience itself—they have become a visible sign. Enemies seek covenant with a blessed man.',
        },
        {
          kind: 'commentary',
          id: 'c-shebah',
          html:
            'At Beersheba a final well is dug, and it remains. Not one that Isaac has to defend or dig again, but one that stays open. Shebah means "oath" or "seven"—the number of completion, of rest. Like Rehoboth before it, it marks a turning. The pressure releases. There is room now, and covenant, and peace.',
        },
        {
          kind: 'christ',
          id: 'c-well-christ',
          title: 'Christ Connection — The Well You Cannot Stop',
          html:
            'Christ says to the woman at the well: "Whosoever drinketh of this water shall thirst again: but whosoever drinketh of the water that I shall give him shall never thirst" (John 4:13–14). The wells Isaac digs can be stopped. They can be filled in. A man can dig them a dozen times and enemies can still claim them. But the well Christ offers—the source of His own life, His own Spirit—cannot be stopped by any power in heaven or earth. It wells up into eternal life. Isaac\'s wells teach us patience; Christ\'s well teaches us that patience has an end, and its name is Himself.',
        },
        {
          kind: 'carry',
          html:
            'You may be in a Rehoboth season right now—finally finding room, the pressure easing, a well that will stay. Or you may still be digging through Esek and Sitnah, facing resistance every time you try to build. Either way, this chapter says the same thing: you are not the ultimate source of your own provision. Isaac built altars before Abimelech came with a covenant. He called on God in the valley before he found the broad place. What you call on now is preparing you for the peace that will come—whether in this life or the next.',
        },
        {
          kind: 'reflection',
          id: 'beersheba-rest',
          prompt:
            'Where have you found "Beersheba"—a place of rest and covenant after a season of digging and persistence? Or, if you\'re still in the digging season, what altar can you build now?',
        },
        {
          kind: 'artwork',
          matchTitle: /isaac/i,
          matchArtist: /abimelech/i,
          caption: 'Genesis 26:23–33 · Covenant at Beersheba',
        },
      ],
    },

    /* ─── Genesis 26:34–35 — The Grief of Esau\'s Wives ────────────────── */
    {
      ref: 'Genesis 26:34–35',
      title: 'Esau\'s Wives',
      blocks: [
        {
          kind: 'scripture',
          chapter: 26,
          lines: [
            {
              number: 34,
              spans: [
                t('And Esau was forty years old when he took to wife Judith the daughter of Beeri the Hittite, and Bashemath the daughter of Elon the Hittite:'),
              ],
            },
            {
              number: 35,
              spans: [
                t('Which were '),
                hg('a grief of mind unto Isaac and to Rebekah', 'c-grief'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-grief',
          html:
            'The chapter ends not with Isaac\'s vindication but with a parent\'s grief. Esau, forty years old, chooses Hittite women for wives. In the covenant world of Abraham and Isaac, this is serious. Not because Hittites are inferior—the text never says that—but because Esau is marrying outside the covenant family. The promise runs through Isaac, and will run through Jacob. Esau is choosing a different path. And it breaks Isaac and Rebekah\'s hearts.',
        },
        {
          kind: 'commentary',
          id: 'c-grief-meaning',
          html:
            'Notice: this is not a punishment or a betrayal that Isaac brought on himself. He did everything right. He stayed when told to stay. He prospered. He made covenant with his enemy. He was blessed. And his son still chose differently. The chapter teaches us something hard: faithfulness does not guarantee that your children will be faithful. The promises are for Isaac, not for Esau. The covenant goes to Jacob, not to Esau. And a faithful parent can only watch as their child walks away.',
        },
        {
          kind: 'carry',
          html:
            'If you have done the faithful thing—stayed, persisted, built your life on the covenant—and your children have gone a different way, you are in Isaac\'s position. The pain is real. It is not a sign that you failed. It is a sign that your children are free, as you are free, to choose their own path. The promise does not hang on them. It hangs on God, and on you, and on the faithfulness you will keep living whether they choose it or not.',
        },
        {
          kind: 'reflection',
          id: 'children-faith',
          prompt:
            'What expectations do you carry about your children\'s faith, or your friends\', or your community\'s? What would it mean to bless them in their freedom, even if they choose differently than you hoped?',
        },
      ],
    },
  ],
};
