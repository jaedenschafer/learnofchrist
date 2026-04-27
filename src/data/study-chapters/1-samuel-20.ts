import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Samuel 20 — Jonathan's Covenant with David
 *
 * David, fleeing for his life, comes to Jonathan. In this chapter, Jonathan
 * and David seal a covenant of friendship that will outlast kingdoms, with
 * an ingenuity born of love and a parting that foreshadows the greatest
 * covenant of all. Here we see a crown prince choosing friendship over
 * ambition, renouncing the throne for the sake of the man God has chosen
 * to wear it.
 */
export const SAMUEL_1_20: RichChapterContent = {
  bookSlug: '1-samuel',
  bookName: '1 Samuel',
  chapter: 20,

  intros: [
    'David has come to Jonathan. He is hunted, afraid for his life. Saul&apos;s hatred has become violent — the king who once loved him now seeks him dead. And yet Jonathan, Saul&apos;s own son and heir, stands between them. In this chapter, Jonathan will prove the depth of his love by devising a test, risking his father&apos;s wrath, and ultimately saying goodbye to the man he loves more than the kingdom he is heir to. This is not the friendship of equals. This is the friendship of one who knows he is losing, and chooses love anyway.',
    'What unfolds is a moment of luminous self-sacrifice. Jonathan knows what David knows: David will be king, not Jonathan. The future belongs to David, the future heir to Saul&apos;s throne will be displaced. And Jonathan, instead of fighting for what should be his, fights for David. He shields him from his father&apos;s rage. He tests Saul&apos;s intentions with an arrow-signal. And when the moment comes to part, he weeps with a sorrow that echoes across centuries to the night when another friend, facing betrayal and loss, will weep on his disciples&apos; shoulders.',
  ],

  opener: {
    matchArtist: /tissot|rembrandt|pyle/i,
    matchTitle: /jonathan|david|covenant|arrows/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share 1 Samuel 20',
    quote:
      'Jonathan and David sealed a covenant of love and loyalty. When their parting came, they wept together, knowing the future belonged to David and not to Jonathan—yet Jonathan relinquished his claim gladly, for friendship was worth more than any throne.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Samuel 20 · Study Guide',
  },

  sections: [
    /* ─── 1 Samuel 20:1–5 — David's Fear & the Test Plan ───────────────── */
    {
      ref: '1 Samuel 20:1–5',
      title: 'David&apos;s Fear and Jonathan&apos;s Pledge',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(1, 'And David fled from Naioth in Ramah, and came and said before Jonathan, What have I done? what is mine iniquity? and what is my sin before thy father, that he seeketh my life?'),
            plain(2, 'And he said unto him, God forbid; thou shalt not die: behold, my father will do nothing either great or small, but that he will shew it me: and why should my father hide this thing from me? it is not so.'),
            plain(3, 'And David sware, Thy father certainly knoweth that I have found grace in thine eyes; and he saith, Let not Jonathan know this, lest he be grieved: but truly as the Lord liveth, and as thy soul liveth, there is but a step between me and death.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-fled',
          html:
            'David has fled. His safety is no longer a private concern — it is a matter between him and his closest friend. He comes to Jonathan and speaks his fear plainly: "What have I done? What is my sin?" He has not betrayed Saul, yet Saul has made him a hunted man. The confusion in David&apos;s question is real. He does not understand what crime he has committed against the king.',
        },
        {
          kind: 'commentary',
          id: 'c-jonathan-denial',
          html:
            'Jonathan answers with immediate loyalty: "God forbid; thou shalt not die." But notice what he adds — "my father will do nothing either great or small, but that he will shew it me; and why should my father hide this thing from me?" Jonathan is confident, but his confidence is not certainty. He does not yet know the full extent of Saul&apos;s intention to kill David. What he knows is loyalty: he will not hide the truth if his father confides in him.',
        },
        {
          kind: 'commentary',
          id: 'c-step',
          html:
            'David is more realistic. "As the Lord liveth, and as thy soul liveth, there is but a step between me and death." He speaks as a man who knows the sword is sharp. The affirmation "as thy soul liveth" — he swears by Jonathan&apos;s very life — shows how much he trusts him. Jonathan is not just an ally; he is David&apos;s life.',
        },

        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(4, 'Then said Jonathan unto David, Whatsoever thy soul desireth, I will even do it for thee.'),
            plain(5, 'And David said unto Jonathan, Behold, tomorrow is the new moon, and I should not fail to sit with the king at meat: but let me go, that I may hide myself in the field unto the third day at even.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-whatsoever',
          html:
            'Jonathan&apos;s answer is total commitment: "Whatsoever thy soul desireth, I will even do it for thee." These are the words of covenant, of a bond stronger than blood. He does not say "I will try" or "I will see." He says: "Whatever you need." And he means it.',
        },
        {
          kind: 'commentary',
          id: 'c-test-plan',
          html:
            'David proposes a test. Tomorrow is the new moon — a feast day when Saul sits with his court. David should be there. But instead, David will hide in the field for two days. If Saul does not miss him, David will know it is safe. If Saul grows angry and asks where David is, Jonathan will have an answer prepared — David asked permission to go to Bethlehem for a family sacrifice. The test is simple: Saul&apos;s reaction will tell the truth.',
        },
      ],
    },

    /* ─── 1 Samuel 20:6–17 — The Test & Covenant Confirmed ────────────── */
    {
      ref: '1 Samuel 20:6–17',
      title: 'The Covenant Sealed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(6, 'If thy father at all miss me, then say, David earnestly asked leave of me that he might run to Bethlehem his city: for there is a yearly sacrifice there for all the family.'),
            plain(7, 'If he say thus, It is well; thy servant shall have peace: but if he be very wroth, then be sure that evil is determined by him.'),
            plain(8, 'Therefore thou shalt deal kindly with thy servant; for thou hast brought thy servant into a covenant of the Lord with thee: notwithstanding, if there be in me iniquity, slay me thyself; why shouldest thou cause me to come to thy father?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-bethlehem',
          html:
            'David suggests the excuse carefully. His family has a yearly sacrifice in Bethlehem — a detail that is both true and humble. Not a grand explanation, but one that fits the reality of a man of Bethlehem coming from a house of worshippers. If Saul accepts this, David will know he is temporarily safe. If Saul "be very wroth," then David will know the truth: evil has been determined against him.',
        },
        {
          kind: 'hebrew',
          id: 'c-berit',
          title: 'Berit — Covenant',
          script: 'בְּרִית',
          translit: '<strong>berit</strong> · covenant; binding agreement; sacred bond',
          description:
            'David speaks of the covenant between him and Jonathan — a berit, a sacred bond. This is not a private agreement. This is a covenant sworn "in the name of the Lord" — it invokes God as witness and guarantor. Once made, a covenant cannot be broken without breaking faith with God himself.',
        },
        {
          kind: 'commentary',
          id: 'c-covenant-words',
          html:
            'Notice David&apos;s extraordinary proposal: "If there be in me iniquity, slay me thyself; why shouldest thou cause me to come to thy father?" David is saying: If I have done wrong, you can kill me yourself. But do not betray me to Saul. Even his own execution, in Jonathan&apos;s hand, would be preferable to being handed over to the king&apos;s rage. This is the depth of his trust — he would rather die by his friend&apos;s sword than his enemy&apos;s.',
        },

        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(9, 'And Jonathan said, Far be it from thee: for if I knew certainly that evil were determined by my father to come upon thee, then would not I tell it thee?'),
            plain(10, 'Then said David to Jonathan, Who shall tell me? or what if thy father answer thee roughly?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-jonathan-defense',
          html:
            'Jonathan is offended by David&apos;s doubt. "Far be it from thee" — he rejects the very idea that he would keep such knowledge hidden. If Saul had determined to kill David, Jonathan would warn him. Jonathan&apos;s loyalty is not in question. What matters now is discovering Saul&apos;s actual intention.',
        },
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(11, 'And Jonathan said unto David, Come, and let us go out into the field. And they went out both of them into the field.'),
            plain(12, 'And Jonathan said unto David, O Lord God of Israel, when I have sounded my father about to morrow any time, or the third day, and, behold, if there be good toward David, and I then send not unto thee, and shew it unto thee;'),
            plain(13, 'Then may the Lord do so and much more to Jonathan: but if it please my father to do thee evil, then I will shew it unto thee, and send thee away, that thou mayest go in peace: and the Lord be with thee, as he hath been with my father.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-field-oath',
          html:
            'Away from Saul&apos;s ears, in the open field, Jonathan takes an oath before God. He swears that he will sound out his father&apos;s intention — and whether Saul&apos;s heart is good toward David or evil, Jonathan will report it. He will not hide the truth. More than that: if Saul intends evil, Jonathan will not only warn David, he will ensure David&apos;s safe passage. "The Lord be with thee," he says, "as he hath been with my father" — a blessing that acknowledges what both men know. The Lord is with David, not with Saul.',
        },

        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(14, 'And thou shalt not only while yet I live shew me the kindness of the Lord, but also thou shalt not cut off thy kindness from my house for ever: no, not when the Lord hath cut off the enemies of David every one from the face of the earth.'),
            plain(15, 'So Jonathan made a covenant with the house of David, saying, Let the Lord even require it at the hand of David&apos;s enemies.'),
          ],
        },
        {
          kind: 'hebrew',
          id: 'c-chesed',
          title: 'Chesed — Covenant Loyalty',
          script: 'חֶ֫סֶד',
          translit: '<strong>chesed</strong> · loyalty; kindness; covenant love; steadfast mercy',
          description:
            'Jonathan asks David not only for kindness while Jonathan lives, but for a covenant loyalty that will extend to Jonathan&apos;s house forever. Chesed is not mere kindness — it is the binding loyalty that flows from covenant. It is the promise that what flows from Jonathan to David will flow backward, from David to Jonathan&apos;s family, long after Jonathan is dead. It is a promise that outlasts life.',
        },
        {
          kind: 'commentary',
          id: 'c-covenant-extended',
          html:
            'Here Jonathan makes something extraordinary clear: this covenant is not just between two men. It extends to houses, to descendants, to the future itself. Jonathan knows that David will be king. He knows his own sons may not be safe under Saul&apos;s murderous reign, or even after David rises to power. So he asks David to make a covenant not just with him, but with his house forever. David, who will become king and have the power to destroy Jonathan&apos;s line, must promise instead to preserve it.',
        },

        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(16, 'So Jonathan made a covenant with the house of David, saying, Let the Lord even require it at the hand of David&apos;s enemies.'),
            plain(17, 'And Jonathan caused David to swear again, because he loved him: for he loved him as he loved his own soul.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-love-soul',
          html:
            'The text ends with a statement of overwhelming love: Jonathan "loved him as he loved his own soul." His own soul — the thing most precious to him, the part of him that is most essentially himself. Jonathan&apos;s love for David is not less than his love for his own life. In fact, it is inseparable from it. To lose David would be to lose part of himself.',
        },
      ],
    },

    /* ─── 1 Samuel 20:18–29 — Saul's Wrath at the Feast ─────────────────── */
    {
      ref: '1 Samuel 20:18–29',
      title: 'The Feast and the Javelin',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(18, 'Then Jonathan said to David, To morrow is the new moon: and thou shalt be missed, because thy seat will be empty.'),
            plain(19, 'And when thou hast stayed three days, then thou shalt go down quickly, and come to the place where thou didst hide thyself when the business was in hand, and shalt remain by the stone Ezel.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-three-days',
          html:
            'Jonathan instructs David: disappear for three days. On the third day, come to the stone Ezel. The precision of the plan shows a mind at work — not desperation, but careful thought. Jonathan is thinking through every detail, every contingency.',
        },

        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(20, 'And I will shoot three arrows on the side thereof, as though I shot at a mark.'),
            plain(21, 'And, behold, I will send a lad, saying, Go, find out now the arrows. If I expressly say unto the lad, Behold, the arrows are on this side of thee, take them; then come thou: for there is peace to thee, and no evil, saith the Lord.'),
            plain(22, 'But if I say thus unto the young man, Behold, the arrows are beyond thee; go thy way: for the Lord hath sent thee away.'),
          ],
        },
        {
          kind: 'hebrew',
          id: 'c-chetz',
          title: 'Chetz — Arrow',
          script: 'חֵץ',
          translit: '<strong>chetz</strong> · arrow; instrument of purpose; signal',
          description:
            'Jonathan will use arrows as a signal. An arrow shot can be seen from a distance, can point direction, can carry meaning. Three arrows become the language of love — a way for one friend to tell another whether the path ahead is safe or must be abandoned. The arrow, an instrument of war, becomes here an instrument of devotion.',
        },
        {
          kind: 'commentary',
          id: 'c-arrow-signal',
          html:
            'The signal is elegant and simple. Jonathan will shoot three arrows. If he tells his servant "the arrows are on this side of thee, take them," David will know it is safe. Peace. No evil. But if Jonathan calls out "the arrows are beyond thee; go thy way," David will understand: flee. The Lord has sent you away. Run, and do not return. The arrows speak what Jonathan&apos;s mouth, overheard by servants, cannot say.',
        },

        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(23, 'And as touching the matter which thou and I have spoken of, behold, the Lord be between me and thee for ever.'),
            plain(24, 'So David hid himself in the field: and when the new moon was come, the king sat him down to eat meat.'),
            plain(25, 'And the king sat upon his seat, as at other times, even upon the seat by the wall: and Jonathan arose: and Abner sat by Saul&apos;s side: and David&apos;s place was empty.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-lord-between',
          html:
            'Jonathan speaks a final covenant formula: "The Lord be between me and thee for ever." God is invoked as witness, as keeper, as the bond that will hold fast long after these two men are gone. The covenant is sealed not in blood or signatures, but in the name of the God who sees all.',
        },

        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(26, 'Nevertheless Saul spake not any thing that day: for he thought, Something hath befallen him, he is not clean; surely he is not clean.'),
            plain(27, 'And it came to pass on the morrow, which was the second day of the new moon, that David&apos;s place was empty: and Saul said unto Jonathan, Wherefore cometh not the son of Jesse to meat, neither yesterday, nor to day?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-saul-silence',
          html:
            'On the first day of the feast, Saul notices David&apos;s absence, but he is silent. He reasons: David must be unclean, unfit to eat. But the silence is ominous. Saul is watching. By the second day, the silence breaks. Saul turns to Jonathan with a question edged with suspicion: "Wherefore cometh not the son of Jesse to meat?" The possessive coldness in "the son of Jesse" — not "David," not "the boy," but a genealogical dismissal — reveals Saul&apos;s contempt.',
        },

        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(28, 'And Jonathan answered Saul, David earnestly asked leave of me that he might go to Bethlehem:'),
            plain(29, 'And he said, Let me go, I pray thee; for our family hath a sacrifice in the city; and my brother, he hath commanded me to be there: and now, if I have found favour in thine eyes, let me go and see my brethren. Therefore he cometh not unto the king&apos;s table.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-jonathan-excuse',
          html:
            'Jonathan delivers the prepared excuse — smoothly, carefully, with respect. David asked leave to go to Bethlehem for a family sacrifice. It is a request that sounds reasonable, even humble. And for a moment, it might work. But Saul&apos;s response will tell the truth.',
        },

        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(30, 'Then Saul&apos;s anger was kindled against Jonathan, and he said unto him, Thou son of the perverse rebellious woman, do not I know that thou hast chosen the son of Jesse to thine own confusion, and unto the confusion of thy mother&apos;s nakedness?'),
            plain(31, 'For as long as the son of Jesse liveth upon the ground, thou shalt not be established, nor thy kingdom. Wherefore now send and fetch him unto me, for he shall surely die.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-saul-rage',
          html:
            'Saul&apos;s fury explodes. He lashes out at Jonathan himself, calling him "son of the perverse rebellious woman" — a curse against Jonathan&apos;s mother, against his very lineage. The anger is as much at Jonathan as at David. Saul sees the truth: Jonathan has chosen David. Jonathan has sided with the man Saul wants dead. And Saul sees the political threat clearly: "As long as the son of Jesse liveth upon the ground, thou shalt not be established, nor thy kingdom." If David lives, Jonathan&apos;s throne is forfeit. Saul cannot have his son choosing another man&apos;s succession. So Saul demands: "Fetch him unto me, for he shall surely die."',
        },

        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(32, 'And Jonathan answered Saul his father, Wherefore shall he be slain? what hath he done?'),
            plain(33, 'And Saul cast a javelin at him to smite him: by which Jonathan knew that it was determined of his father to slay David.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-javelin',
          html:
            'Jonathan dares to question his father. "Wherefore shall he be slain? what hath he done?" It is a simple, brave question. And Saul&apos;s answer is a javelin hurled at his own son. He tried the same thing with David once before, throwing a javelin in anger. Now he hurls it at Jonathan. The javelin is Saul&apos;s answer: death to anyone who gets in the way of his wrath. In that moment, Jonathan knows. The test is complete. Evil is determined by his father to come upon David. David&apos;s life is in real danger.',
        },

        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(34, 'So Jonathan arose from the table in fierce anger, and did eat no meat the second day of the month: for he was grieved for David, because his father had done him shame.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-jonathan-grieves',
          html:
            'Jonathan leaves the table. He will not eat. He will not participate. He is grieved — the Hebrew word carries a sense of breaking, of pain. His father has shamed him by casting a javelin at him, by treating him as an enemy for daring to question the murder of his friend. The feast, which should have been a celebration, has become an occasion of violence and shame.',
        },
      ],
    },

    /* ─── 1 Samuel 20:35–40 — The Arrow Signal ────────────────────────── */
    {
      ref: '1 Samuel 20:35–40',
      title: 'The Signal of the Arrows',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(35, 'And it came to pass in the morning, that Jonathan went out into the field at the time appointed with David, and a little lad with him.'),
            plain(36, 'And he said unto his lad, Run, find out now the arrows which I shoot. And as the lad ran, he shot an arrow beyond him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-morning-field',
          html:
            'In the morning, Jonathan goes out to the field with his servant boy, at the appointed time. The arrangements are held in place. There is no wavering, no reconsidering. What was promised must be kept. Jonathan shoots an arrow — deliberately, knowingly — beyond the boy, farther than the agreed peace-sign would require. The arrow travels past the point of safety.',
        },

        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(37, 'And when the lad came to the place of the arrow which Jonathan had shot, Jonathan cried after the lad, saying, Is not the arrow beyond thee?'),
            plain(38, 'And Jonathan cried after the lad, Make speed, haste, stay not. And the lad gathered the arrows, and came to his master.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-cry-after',
          html:
            'Jonathan cries after the boy: "Is not the arrow beyond thee?" The signal is given. The boy, gathering the arrows, does not understand. But David, listening from his hiding place, will understand perfectly. The arrows have spoken. Flee. Do not delay. Do not return.',
        },

        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(39, 'But the lad knew not any thing: only Jonathan and David knew the matter.'),
            plain(40, 'And Jonathan gave his artillery to the lad: Go, carry them to the city.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-lad-innocent',
          html:
            'The boy, innocent of the covenant and the stakes, knows nothing. He carries back the arrows and the bow — the weaponry Jonathan has used to speak his love. Only Jonathan and David understand. They are alone in this knowledge, alone in the weight of what must now happen.',
        },
      ],
    },

    /* ─── 1 Samuel 20:41–42 — The Parting ────────────────────────────── */
    {
      ref: '1 Samuel 20:41–42',
      title: 'The Kiss and the Parting',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(41, 'And as soon as the lad was gone, David arose out of a place toward the south, fell on his face to the ground, and bowed himself three times: and they kissed one another, and wept one with another, until David exceeded.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-arise',
          html:
            'The boy is gone. David comes out of hiding. He rises from his place, falls on his face — a gesture of profound reverence, or profound grief, or both. He bows three times. And then he and Jonathan embrace. They kiss one another. And they weep — a weeping so deep that David exceeds, overwhelmed beyond measure. This is not a quiet goodbye. This is a breaking apart of two souls that have been bound together.',
        },

        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(42, 'And Jonathan said to David, Go in peace, forasmuch as we have sworn both of us in the name of the Lord, saying, The Lord be between me and thee, and between my seed and thy seed for ever. And he arose and departed: and Jonathan went into the city.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-go-in-peace',
          html:
            'Jonathan speaks the final covenant words: "Go in peace, forasmuch as we have sworn both of us in the name of the Lord, saying, The Lord be between me and thee, and between my seed and thy seed for ever." It is a release and a binding all at once. Jonathan lets David go, but he binds himself to David&apos;s future, to David&apos;s children, to an eternal covenant. After David departs, Jonathan returns to the city. He goes back to his father. He stays, though his heart has departed with his friend.',
        },

        {
          kind: 'christ',
          id: 'greater-love',
          title: 'Christ Connection — No Greater Love',
          html:
            'Jesus will tell His disciples: "Greater love hath no man than this, that a man lay down his life for his friends" (John 15:13). Jonathan does not literally lay down his life here — but he lays down his throne. He is the crown prince of Israel, heir to Saul&apos;s kingdom, and he cedes that future entirely for the sake of a friend. He could have competed with David, fought to preserve his inheritance, used his position to harm the man who would displace him. Instead, he chooses love. He shields David from his father&apos;s wrath. He risks Saul&apos;s rage himself. And in the end, he lets David go. The weeping at their parting foreshadows another parting — when Jesus, in the hours before His death, will weep over His disciples, knowing He is leaving them, knowing what awaits them in a hostile world. But where Jonathan&apos;s parting is final, Christ&apos;s covenant promise is eternal: "Lo, I am with you alway, even unto the end of the world" (Matt. 28:20).',
        },

        {
          kind: 'carry',
          html:
            'You may know the experience of loving someone whose path must diverge from yours. Perhaps a child who must leave home, a friend who must move, a partner whose calling takes them elsewhere. Jonathan faces something even harder: he must watch the man he loves walk toward a throne that was meant to be his own. He could have resented David. He could have tried to stop him. Instead, Jonathan became David&apos;s shield. His covenant bound himself not only to David, but to David&apos;s descendants — a binding that outlasted both their lives. Years later, after David had conquered and become king, he would remember Jonathan. He would find Jonathan&apos;s surviving son, Mephibosheth, crippled and hiding in shame, and bring him to his table for life (2 Samuel 9). That is what the covenant meant. What you have given in love does not return void. The faithfulness you show in hard moments becomes the shape of how you treat those who remain.',
        },

        {
          kind: 'reflection',
          id: 'covenant-love',
          prompt:
            'Have you ever had to release something or someone you loved because it was right to do so? Or have you ever been the one who had to leave? What does it mean to love someone while also letting them go?',
        },
      ],
    },
  ],
};
