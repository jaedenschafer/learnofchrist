import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Ruth 1 — the book of Ruth opens in the dark days of the Judges, when a
 * famine forces a Bethlehem family into exile. The only character to walk
 * beside the grief-stricken Naomi is a Moabite widow. Her loyalty—her clinging—
 * becomes the hinge on which God&apos;s redemption turns.
 */
export const RUTH_1: RichChapterContent = {
  bookSlug: 'ruth',
  bookName: 'Ruth',
  chapter: 1,

  estimatedMinutes: { beginner: 7, intermediate: 11, deep: 13 },
  intros: [
    'Ruth 1 opens in darkness. The judges rule, but the land is hungry. A family abandons Bethlehem to find bread in Moab—and loses everything there. A widow named Naomi, once full, becomes empty. The only one who clings to her is the woman she has already lost everything to love. What happens next is the beginning of redemption.',
    'This short chapter holds one of Scripture&apos;s great loyalty pledges, and it is spoken not by a king or a prophet, but by a foreigner. Ruth&apos;s oath—"thy people shall be my people, and thy God my God"—echoes through the rest of her story, and sets her as the great-grandmother of David, the human ancestor of the Lord.',
  ],

  opener: {
    matchArtist: /tissot/i,
    matchTitle: /ruth|gleaning|field/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share Ruth 1',
    quote:
      'In the days when the judges ruled, a famine drove a family from Bethlehem to Moab. When the husband and sons died, Naomi determined to return home. Her daughter-in-law Ruth clung to her, swearing: "Thy people shall be my people, and thy God my God." They came to Bethlehem at barley harvest.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ruth 1 · Study Guide',
  },

  sections: [
    /* ─── Ruth 1:1–2 — The Famine and the Exile ────────────────────────── */
    {
      ref: 'Ruth 1:1–2',
      title: 'The Famine and the Exile',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 1,
              spans: [
                t('Now it came to pass in the days '),
                hy('when the judges ruled', 'c-judges'),
                t(', that there was a '),
                hg('famine', 'c-famine'),
                t(' in the land. And a certain man of Bethlehem-judah went to '),
                hg('sojourn', 'c-sojourn'),
                t(' in the country of Moab, he, and his wife, and his two sons.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-judges',
          html:
            'The book of Ruth opens with a direct anchor to Judges: "when the judges ruled." The book of Judges ends in chaos—sexual violence, tribal warfare, the line "there was no king in Israel" (Judg. 21:25). Ruth is the answer hiding inside that darkness. While the judges are failing, God is already building the lineage that will lead to the king.',
        },
        {
          kind: 'commentary',
          id: 'c-famine',
          html:
            'Famine in Scripture is rarely mere hunger. It is the sign of God&apos;s withdrawal of provision, often triggered by covenant unfaithfulness. The family does not trust that God will provide in the promised land. They run to Moab—not to Egypt (which would be imperial salvation) and not to another Israelite tribe, but to the land of Israel&apos;s ancient enemy.',
        },
        {
          kind: 'commentary',
          id: 'c-sojourn',
          html:
            'The father, Elimelech ("my God is king"), intends to <em>sojourn</em>—to stay temporarily. He leaves his inheritance, his land rights, behind. This is not the faith of Abraham, who left Ur knowing he would inherit a promise. Elimelech leaves knowing he wants to survive.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 2,
              spans: [
                t('The name of the man was Elimelech, and the name of his wife Naomi, and the name of his two sons Mahlon and Chilion, Ephrathites of Bethlehem-judah. And they came into the country of Moab, and '),
                hg('continued there', 'c-continued'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-continued',
          html:
            'Naomi means "pleasantness." Mahlon means "sickness" and Chilion means "failing." Their names carry a shadow from the beginning. The text notes they were Ephrathites—a reminder that they belong to Bethlehem, the city of bread, the city that will one day birth the king. But for now, they are in Moab, the field of the enemy.',
        },
      ],
    },

    /* ─── Ruth 1:3–5 — Loss ────────────────────────────────────────────── */
    {
      ref: 'Ruth 1:3–5',
      title: 'Loss',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 3,
              spans: [
                t('And Elimelech Naomi&apos;s husband '),
                hg('died', 'c-elimelech-dies'),
                t('; and she was left, and her two sons.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And they took them wives of the women of Moab; the name of the one was Orpah, and the name of the other Ruth: and they '),
                hg('dwelt there about ten years', 'c-ten-years'),
                t('.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And Mahlon and Chilion '),
                hg('died also', 'c-sons-die'),
                t(' both of them; and the woman was '),
                hp('left of her two sons and her husband', 'c-naomi-empty'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-elimelech-dies',
          html:
            'The man who fled the famine in Bethlehem dies in Moab. His faith failed. He sought bread in the wrong place and lost his life. His widow is left alone with her two sons—and in an ancient world, women without male provision were vulnerable.',
        },
        {
          kind: 'commentary',
          id: 'c-ten-years',
          html:
            'The sons marry Moabite women, establishing themselves in Moab. Ten years pass—enough time to think the exile is permanent, enough time to forget Bethlehem. Enough time to build a life that is not the life God promised.',
        },
        {
          kind: 'commentary',
          id: 'c-sons-die',
          html:
            'Both sons die childless. In the ancient world, this is the deepest curse. No one will carry their name forward. No one will inherit their portion of land. The family line is broken. Naomi has followed her husband&apos;s faithless choice into a land of death.',
        },
        {
          kind: 'christ',
          id: 'c-naomi-empty',
          title: 'Christ Connection — The Emptying',
          html:
            'Naomi is emptied. She came to Moab with a husband and two sons. Now she has nothing. The Gospel calls it kenosis—the self-emptying of Christ in the Incarnation (Phil. 2:7). It is also the condition of the human heart that God works in. "Blessed are the poor in spirit, for theirs is the kingdom of heaven" (Matt. 5:3). Naomi&apos;s emptying, her complete loss, is the place where God&apos;s redemption is about to break in.',
        },

        {
          kind: 'carry',
          html:
            'Grief is allowed in Scripture. Naomi will name it out loud in a few verses. Whatever emptying you are walking through—a loss you can still barely name, a future that collapsed, a dream that died—Scripture does not rush you past it. The oldest parts of the Bible sit with the pain before they answer it. Your lament is heard.',
        },
      ],
    },

    /* ─── Ruth 1:6–7 — The Journey Home Begins ────────────────────────── */
    {
      ref: 'Ruth 1:6–7',
      title: 'The Journey Home Begins',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 6,
              spans: [
                t('Then she arose with her daughters in law, that she might return from the country of Moab: for she had heard in the country of Moab how that the '),
                hg('Lord had visited his people', 'c-provision'),
                t(' in giving them bread.'),
              ],
            },
            {
              number: 7,
              spans: [t('Wherefore she went forth out of the place where she was; and her two daughters in law with her; and they went on the way to return unto the land of Judah.')],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-provision',
          html:
            'God has <em>visited</em> His people. The famine has ended. Bread has returned to Bethlehem. The news reaches Naomi in Moab—a sign that God has not forgotten the promised land, that He has not abandoned His people. The word "visit" (Hebrew <em>paqad</em>) carries the weight of divine attention and care. God is looking after His own.',
        },
        {
          kind: 'carry',
          html:
            'When grief cuts you off from the world, a piece of news sometimes reaches you anyway. A word from someone you haven&apos;t heard from in years. A reminder that somewhere, something is growing, something is being renewed. Naomi heard that the Lord had visited His people with bread. She decided to go home.',
        },
      ],
    },

    /* ─── Ruth 1:8–14 — Orpah and Ruth ────────────────────────────────── */
    {
      ref: 'Ruth 1:8–14',
      title: 'Orpah and Ruth',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 8,
              spans: [
                t('And Naomi said unto her two daughters in law, Go, return each to her mother&apos;s house: the Lord deal kindly with you, as ye have dealt with the dead, and with me.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('The Lord grant you that ye may find '),
                hg('rest', 'c-rest'),
                t(', each of you in the house of her husband. Then she kissed them; and they lifted up their voice, and wept.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-rest',
          html:
            'Naomi, in her grief, thinks of her daughters-in-law first. She blesses them and sends them home to their mothers. In the ancient world, without a husband or son, they have no provision—no future. Naomi is giving them back their chance at life. She wishes them <em>rest</em> (Hebrew <em>menuchah</em>)—settlement, security, a home.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 10,
              spans: [
                t('And they said unto her, Surely we will return with thee unto thy people.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And Naomi said, Turn again, my daughters: why will ye go with me? are there yet any more sons in my womb, that they may be your husbands?'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Turn again, my daughters, go your way; for I am too old to have an husband. If I should say, I have hope, if I should even have an husband also to night, and should also bear sons;'),
              ],
            },
            {
              number: 13,
              spans: [
                t('Would ye tarry for them till they were grown? would ye shut yourselves up for them, and have no husbands? nay, my daughters; for it grieveth me much for your sakes that the hand of the Lord is gone out against me.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-naomi-argument',
          html:
            'Naomi argues logically. There are no sons left. She is past childbearing age. The law of levirate marriage (Deuteronomy 25:5–10) would have called a brother-in-law to father a child for the dead man&apos;s name, but Naomi has no more sons. She is telling these women: stay with me and you get nothing. Go home and you can marry again, have security, have children.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 14,
              spans: [
                t('And they lifted up their voice, and wept again: and Orpah '),
                hg('kissed her mother in law', 'c-orpah-goodbye'),
                t('; but Ruth '),
                hp('clave unto her', 'c-ruth-cleaves'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-orpah-goodbye',
          html:
            'Orpah makes the logical choice. She kisses her mother-in-law, accepts the blessing, and returns to her people and her gods. This is not cruelty; it is reasonable. She is doing what any sensible person would do. Her name disappears after this verse.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-dabaq',
          title: 'Dabaq — "clave" (cleaved)',
          script: 'דָּבַק',
          translit: '<strong>dabaq</strong> · to cling, to adhere, to hold fast',
          description:
            'This is the word the psalmist uses: "My soul cleaveth unto thee" (Psalm 63:8). It is used in Genesis 2:24 of marriage—"shall a man leave his father and mother, and shall cleave unto his wife." Ruth does something marriage-like. She refuses the logical exit. She holds fast.',
        },
      ],
    },

    /* ─── Ruth 1:15–18 — "Thy People Shall Be My People" ───────────────── */
    {
      ref: 'Ruth 1:15–18',
      title: '"Thy People Shall Be My People"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 15,
              spans: [
                t('And she said, Behold, thy sister in law is gone back unto her people, and unto her gods: return thou after thy sister in law.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And Ruth said, '),
                hp('Intreat me not to leave thee, or to return from following after thee:', 'c-ruth-oath'),
                t(' for whither thou goest, I will go; and where thou lodgest, I will lodge: '),
                hp('thy people shall be my people, and thy God my God:', 'c-ruth-god'),
                t(' where thou diest, will I die, and there will I be buried: the Lord do so to me, and more also, if ought but death part thee and me.'),
              ],
            },
          ],
        },
        {
          kind: 'christ',
          id: 'c-ruth-oath',
          title: 'Christ Connection — The Covenant Pledge',
          html:
            'Ruth&apos;s oath is one of Scripture&apos;s great confession moments. It echoes the Shema—Israel&apos;s central pledge of loyalty to the Lord—but spoken by a woman binding herself to her mother-in-law, to a people not her own, to a God not the gods of her birth. The language is covenant language: pledges unto death, invoking the Lord as witness. When Ruth says "thy God my God," she is not converting to a cultural heritage. She is placing herself under the God of Israel&apos;s covenant, choosing the true God.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-chesed',
          title: 'Chesed — "lovingkindness" or "covenant loyalty"',
          script: 'חֶ֫סֶד',
          translit: '<strong>chesed</strong> · mercy, steadfast love, covenant loyalty',
          description:
            'Ruth will later embody <em>chesed</em> in how she gleans and cares for Naomi. Here, in this moment, she is the first to offer it. The word does not appear yet in the text, but her action is its definition: showing loyalty not because you gain from it, but because you have made a covenant.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 17,
              spans: [
                t('So when she saw that she was stedfastly minded to go with her, she '),
                hg('left speaking unto her', 'c-naomi-stops'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-naomi-stops',
          html:
            'Naomi stops arguing. She <em>sees</em> that Ruth is stedfastly minded—her intent cannot be moved. This is the moment Naomi&apos;s heart begins to turn. She came home to die. She is about to discover she is not going alone.',
        },

        {
          kind: 'carry',
          html:
            'Ruth makes a choice that has no security in it. She abandons her own people, her own future, her own gods. She follows a grieving widow to a land where she is a foreigner, with no inheritance laws to protect her. This is not logic. This is love. Somewhere in your story there is a moment like this—a person you chose to stay with even when staying cost you, a loyalty that made no sense to anyone but you. That choice was an echo of Ruth&apos;s cleaving. That loyalty looks like the loyalty of Jesus to His bride.',
        },

        {
          kind: 'reflection',
          id: 'ruth-oath',
          prompt: 'Ruth chose loyalty over security. Where is the Lord calling you to cling—to a person, a community, a conviction—even though walking away would be easier?',
        },
        { kind: 'divider' },
      ],
    },

    /* ─── Ruth 1:19–22 — "Call Me Mara" ───────────────────────────────── */
    {
      ref: 'Ruth 1:19–22',
      title: '"Call Me Mara"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 19,
              spans: [
                t('So they two went until they came to Bethlehem. And it came to pass, when they were come to Bethlehem, that '),
                hg('all the city was moved about them', 'c-bethlehem-moved'),
                t(', and they said, Is this Naomi?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-bethlehem-moved',
          html:
            'Naomi was a known woman in Bethlehem—a woman of some standing whose sudden exile must have shocked the town. Now she returns, different. The city is "moved" (Hebrew <em>hum</em>) at the sight of her. A stir, a commotion. Something is wrong with this picture.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 20,
              spans: [
                t('And she said unto them, Call me not Naomi, call me '),
                hy('Mara', 'hebrew-mara'),
                t(': for the Almighty hath dealt very bitterly with me.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('I went out full, and the '),
                hg('Lord hath brought me home again empty', 'c-full-empty'),
                t(': why then call ye me Naomi, seeing the Lord hath testified against me, and the Almighty hath afflicted me?'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-mara',
          title: 'Mara — "bitter"',
          script: 'מָרָה',
          translit: '<strong>Mara</strong> · bitter',
          description:
            'Naomi renames herself. She is no longer the woman of pleasantness. She is <em>Mara</em>—bitter. Scripture allows this kind of lament. God does not correct her or tell her to have faith. He lets her name the pain she has survived.',
        },
        {
          kind: 'commentary',
          id: 'c-full-empty',
          html:
            'Naomi&apos;s lament is precise. She went out with a full household—husband, two sons. She has returned with nothing. She "went out full," meaning she had provision, family, standing, hope. The Lord "brought me home again empty"—the journey was His doing (passive voice), but the emptying was real. She names God as the one who afflicted her. This is not distant theology; this is raw, face-to-face accusation.',
        },
        {
          kind: 'carry',
          html:
            'If you have ever felt bitter at God—really felt it—Naomi gives you permission to say it out loud. She does not soften it. She does not pretend. "The Almighty hath dealt very bitterly with me." God heard her, and her story did not end in bitterness. But it did not end in forced cheer either. It went through the lament. It went through the emptiness. And in that emptiness, a loyal heart entered.',
        },

        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 22,
              spans: [
                t('So Naomi returned, and Ruth the Moabitess, her daughter in law, with her, which returned out of the country of Moab: and they came to Bethlehem in the beginning of '),
                hp('barley harvest', 'c-harvest'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'christ',
          id: 'c-harvest',
          title: 'Christ Connection — Bethlehem and Harvest',
          html:
            'They come to Bethlehem—the house of bread—in the time of barley harvest. The famine is over. The grain is coming. The coincidence is the providence of God. Naomi came home expecting to die in bitterness. Instead, she arrives at the very moment when God is providing. Bethlehem is the place where the King will one day be born—not in a palace, but during harvest time, in a town of bread and provision. The foreigner Ruth, standing in the barley fields of Bethlehem, will be part of that lineage. Chapter 1 ends in emptiness, but the next chapter opens onto fields full of grain.',
        },

        {
          kind: 'reflection',
          id: 'call-me-mara',
          prompt: 'What loss has Naomi named as truly as you could—a full life that became empty, hope that turned bitter? What would it mean for you to let God work in the emptiness, rather than rushing past it?',
        },
        { kind: 'artwork', matchTitle: /ruth|naomi|gleaning|field/, caption: 'Ruth 1:22 · The Return to Bethlehem' },
      ],
    },
  ],
};
