import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 2 Samuel 14 — Joab Brings Absalom Home
 *
 * Joab, sensing that David's heart turns toward his banished son Absalom,
 * devises a parable through a wise woman of Tekoah. By speaking a hypothetical
 * grief, she moves the king to mercy. Yet the reconciliation is only partial:
 * Absalom returns to Jerusalem but cannot see David's face for two more years.
 * Half-reconciliation breeds resentment. The beauty of Absalom masks an interior
 * corruption. And in Christ, we see the contrast — full restoration, not partial.
 */
export const SAMUEL_2_14: RichChapterContent = {
  bookSlug: '2-samuel',
  bookName: '2 Samuel',
  chapter: 14,

  estimatedMinutes: { 5: 11, 10: 17, 15: 21 },
  intros: [
    'Two years have passed since David drove his son Absalom into exile for murdering his brother Amnon. The king\'s anger has cooled, but a distance remains — between a father and his son, between justice and mercy. Joab, David\'s military commander, perceives the shift in the king\'s heart. And Joab, practical and clever, knows how to open a closed door: not with argument, but with a parable.',
    'In this chapter, we meet one of Scripture\'s most remarkable characters: a woman from Tekoah, described as "wise," whom Joab instructs to present herself to the king as a widow seeking justice. She speaks a hypothetical grief — a story of two sons, one dead, one threatened. And through her words, the king finds permission to do what his heart wants: to bring his son home. Yet the homecoming is incomplete. Absalom sees Jerusalem but not his father\'s face. Mercy without full reconciliation. And in the shadow of this partial restoration, we hear echoes of our own exile and of Christ\'s perfect restoration.',
  ],

  opener: {
    matchArtist: /tissot|delacroix|rubens/i,
    matchTitle: /absalom|joab|wise woman|tekoah/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share 2 Samuel 14',
    quote:
      'Joab, perceiving the king\'s heart was toward Absalom, sends a wise woman to speak a parable that moves David to mercy. Yet Absalom returns to Jerusalem but cannot see the king\'s face — a partial reconciliation that breeds resentment.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Samuel 14 · Study Guide',
  },

  sections: [
    /* ─── 2 Samuel 14:1–3 — Joab's Plan ─────────────────────────────────── */
    {
      ref: '2 Samuel 14:1–3',
      title: 'Joab Perceives the King\'s Heart',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 1,
              spans: [
                t('Now Joab the son of Zeruiah perceived that the king\'s heart was toward '),
                hg('Absalom', 'c-absalom-intro'),
                t('.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And Joab sent to Tekoah, and fetched thence a '),
                hy('wise woman', 'c-wise-woman'),
                t(', and said unto her, I pray thee, feign thyself to be a mouther, and put on now mourning apparel, and anoint not thyself with oil: but be as a woman that had a long time mourned for the dead:'),
              ],
            },
            {
              number: 3,
              spans: [
                t('Come to the king, and speak on this manner unto him. So Joab '),
                hg('put the words in her mouth', 'c-words-mouth'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-absalom-intro',
          html:
            'Absalom is in exile in Geshur, banished for murdering Amnon — his half-brother who had assaulted their sister Tamar. The murder was justice, but David\'s law could not overlook it. Yet two years have passed, and Joab reads what David will not admit: the king\'s heart has turned. He loves his son. He wants him home. But David is king; he cannot simply forgive and recall. He needs permission, a reason, a release from his own conflict.',
        },
        {
          kind: 'commentary',
          id: 'c-wise-woman',
          html:
            'A "wise woman" — the Hebrew <em>isha chakama</em>, a woman of understanding. Tekoah was a town in Judah. This woman is described not by her name but by her wisdom. She appears, speaks, and disappears — but in her brief moment, she changes the king\'s mind. Proverbs 20:5 says, "Counsel in the heart of man is like deep water; but a man of understanding will draw it out." This woman is that man (or woman) of understanding.',
        },
        {
          kind: 'commentary',
          id: 'c-words-mouth',
          html:
            'Joab "put the words in her mouth." She is not acting out of her own grief. She is speaking Joab\'s strategy, Joab\'s theology, Joab\'s words. Yet what she will say is not false. It is truth. And sometimes truth needs to be spoken by a stranger, in a form the hearer is ready to receive.',
        },

        {
          kind: 'carry',
          html:
            'Sometimes a truth we need to hear comes from an unexpected source, and sometimes we need it framed in a way that lets us arrive at our own conclusion rather than being told what to do. God often works through the words of others. And sometimes the person speaking God\'s word is simply following a script — yet what is spoken is still true. Listen for truth, wherever it comes from.',
        },
      ],
    },

    /* ─── 2 Samuel 14:4–7 — The Woman's Parable ───────────────────────────── */
    {
      ref: '2 Samuel 14:4–7',
      title: 'The Story of the Two Sons',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 4,
              spans: [
                t('And when the woman of Tekoah spake to the king, she fell on her face to the ground, did obeisance, and said, Help, O king.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And the king said unto her, What aileth thee? And she answered, I am indeed a widow woman, and mine husband is dead.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And thy handmaid had two sons: and they two strove together in the field, and there was none to part them, but the one smote the other, and slew him.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And, behold, the whole family is risen against thine handmaid, saying, Deliver him that smote his brother, that we may kill him, for the '),
                hy('life of his brother whom he slew', 'c-blood-price'),
                t('; and we will destroy the heir also: thus they shall quench my coal which is left, and shall not leave to my husband neither name nor remainder upon the earth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-blood-price',
          html:
            'The woman speaks of a law of blood and vengeance: "the life of his brother whom he slew." In the ancient Near East, when a man kills another (even accidentally), the family of the dead has the right to pursue vengeance — to execute the killer. This is the "avenger of blood," a figure throughout Scripture. The family wants justice. But they want to destroy the entire line — both the son and the heir — which would be a destruction beyond justice. It would be the erasure of her family.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-goel',
          title: 'The Avenger of Blood — גֹּאֵל',
          script: 'גֹּאֵל',
          translit: '<strong>Goel</strong> · redeemer, kinsman-avenger',
          description:
            'The goel is the nearest male relative, tasked with avenging the death of a kinsman (Numbers 35:19–27). The concept underlies much of the revenge law in Scripture. But the woman\'s plea hints at what God has often done: move the avenger toward mercy, not blood. There are cities of refuge in Israel (Joshua 20) where a man who kills unintentionally can flee and be protected from the goel. Mercy and justice coexist in God\'s law.',
        },

        {
          kind: 'carry',
          html:
            'The woman\'s story carries a hidden weight. She is describing exactly what has happened to David: two sons, one killed, the other guilty. The family (or the law, or the conscience of the king) demands the death of the killer. But if the killer dies, what remains? An empty house. A name erased. A grief unhealed by further blood. Mercy and justice must balance. They are not the same thing.',
        },
      ],
    },

    /* ─── 2 Samuel 14:8–11 — The King's Initial Response ──────────────────── */
    {
      ref: '2 Samuel 14:8–11',
      title: 'The King Promises Protection',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 8,
              spans: [
                t('And the king said unto the woman, Go to thine house, and I will give charge concerning thee.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And the woman of Tekoah said unto the king, My lord, O king, the iniquity be on me, and on my father\'s house: and the king and his throne be '),
                hg('guiltless', 'c-guiltless'),
                t('.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And the king said, Whosoever saith ought unto thee, bring him to me, and he shall not touch thee any more.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('Then she said, I pray thee, let the king remember the Lord thy God, that thou wouldest not suffer the revengers of blood to destroy any more, lest they destroy my son. And the king said, '),
                hp('As the Lord liveth, there shall not one hair of thy son fall to the earth', 'c-hair-oath'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-guiltless',
          html:
            'The woman\'s language is careful. She says, "The iniquity be on me and on my father\'s house; the king and his throne be guiltless." She is absolving the king of responsibility in advance. She is saying: whatever happens, you are not liable. This is a rhetorical move — she is freeing David to act mercifully without guilt. She is saying: God will honor this. You will not be held accountable for choosing mercy.',
        },
        {
          kind: 'commentary',
          id: 'c-hair-oath',
          html:
            'David swears an oath: "As the Lord liveth, there shall not one hair of thy son fall to the earth." The language is absolute. Not a single hair. Not the smallest harm. This is the oath of a king who has power, who can deliver what he promises. But notice — it is an oath made to a stranger, about a parable, about a hypothetical son. Yet the words are true. The king means what he says. He just does not yet realize he is speaking about his own son.',
        },

        {
          kind: 'reflection',
          id: 'mercy-oath',
          prompt:
            'Have you ever been moved to show mercy toward someone when you heard their story reframed, presented differently than you had imagined it? What changed?',
        },
      ],
    },

    /* ─── 2 Samuel 14:12–17 — The Parable Deepens ────────────────────────── */
    {
      ref: '2 Samuel 14:12–17',
      title: 'God Devises Means That the Banished Return',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 12,
              spans: [
                t('Then the woman said, I pray thee, let thine handmaid speak one word unto my lord the king. And he said, Say on.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And she said, Wherefore then hast thou thought such a thing against the people of God? for the king doth speak this thing as one which is faulty, in that the king doth not fetch home again his '),
                hy('banished', 'hebrew-banui'),
                t('.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('For we must needs die, and are as water spilt on the ground, which cannot be gathered up again; neither doth God respect the person: yet doth he '),
                hp('devise means, that his banished be not expelled from him', 'c-devises-means'),
                t('.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('Now therefore that I am come to speak of this thing unto my lord the king, it is because the people have made me afraid: and thy handmaid said, I will now speak unto the king; it may be that the king will perform the request of his handmaid.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('For the king will hear, to deliver his handmaid out of the hand of the man that would destroy me and my son together out of the inheritance of God.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('Then thine handmaid said, The word of my lord the king shall now be comfortable: for as an angel of God, so is my lord the king to discern good and evil: therefore the Lord thy God will be with thee.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-banui',
          title: 'Banished — בָּנוּי',
          script: 'בָּנוּי',
          translit: '<strong>Banui</strong> · banished, exiled, driven away',
          description:
            'The word carries the sense of one cast out, separated from home and family. It is the condition of Absalom — and the woman has named it plainly. The king "doth not fetch home again his banished." She is speaking directly to David\'s unspoken wound.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-chashav',
          title: 'God Devises — חָשַׁב',
          script: 'חָשַׁב',
          translit: '<strong>Chashav</strong> · to devise, plan, reckon, consider',
          description:
            'God devises means. He plans. He schemes (in the good sense) so that His banished shall not be expelled. This is one of the most remarkable statements in Scripture about God\'s nature — not that He demands, but that He devices, plots, creates pathways for return. The word suggests creativity, intention, deliberate action toward restoration.',
        },
        {
          kind: 'commentary',
          id: 'c-devises-means',
          html:
            'Here is the theology of 2 Samuel 14: "Neither doth God respect the person: yet doth he devise means, that his banished be not expelled from him." Death is like water spilled on the ground — it cannot be gathered up. But God, who respects no person above another (no one is above the law of death), yet devises means. He invents a way. He creates a path. He does not nullify justice. He does not pretend the sin did not happen. But He finds a way for the banished to come home. This is grace. This is the essence of what God does.',
        },

        {
          kind: 'christ',
          id: 'christ-devises-means',
          title: 'Christ Connection — Full Restoration',
          html:
            'Jesus speaks often of banishment — of being cast out, separated, exiled. He tells the story of a son who goes into a far country and wastes his inheritance (Luke 15). And when that son comes to himself and decides to return, the father runs to meet him, embraces him, restores him fully. There is no period of separation, no years of living in the city but not seeing the father\'s face. The father devises means not just for the son to return, but for him to be restored completely — the ring, the robe, the feast. And Christ Himself, through His death and resurrection, devises means for all of us — the banished, the exiled, the separated — to be brought not just home, but fully into the Father\'s house. Not partially. Completely. "Now we are the sons of God" (1 John 3:2). Not in some future restoration. Now. The restoration is full.',
        },

        {
          kind: 'carry',
          html:
            'If you are in exile — from God, from yourself, from what you were meant to be — the God who devises means has not forgotten you. He is not waiting for you to be perfect before He finds a way to bring you home. He is devising the means right now. You do not have to wait. You do not have to earn your way back through years of separation. God devises means. That is His nature.',
        },
      ],
    },

    /* ─── 2 Samuel 14:18–20 — The Revelation ─────────────────────────────── */
    {
      ref: '2 Samuel 14:18–20',
      title: 'The King Perceives the Hand of Joab',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 18,
              spans: [
                t('Then the king answered and said unto the woman, Hide not from me, I pray thee, the thing that I shall ask thee. And the woman said, Let my lord the king now speak.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And the king said, Is not the hand of Joab with thee in all this? And the woman answered and said, As thy soul liveth, my lord the king, none can turn to the right hand or to the left from ought that my lord the king hath spoken: for thy servant Joab, he bade me, and he put all these words in the mouth of thine handmaid:'),
              ],
            },
            {
              number: 20,
              spans: [
                t('To fetch about this form of speech hath thy servant Joab done this thing: and my lord is wise, according to the wisdom of an angel of God, to know all things that are in the earth.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          html:
            'The king is no fool. He reads the parable. And he reads Joab\'s hand behind it. The woman confesses — yes, Joab sent me, Joab put words in my mouth. But notice: the king does not punish her. He does not reject the message because it came through artifice. He recognizes the truth of it, even if the method was cunning. Sometimes the truth needs a clever word. Sometimes wisdom speaks through a stratagem.',
        },
      ],
    },

    /* ─── 2 Samuel 14:21–24 — Absalom Recalled ────────────────────────────── */
    {
      ref: '2 Samuel 14:21–24',
      title: 'The Partial Reconciliation',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 21,
              spans: [
                t('And the king said to Joab, Behold now, I have done this thing: go therefore, bring the young man Absalom again.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And Joab fell to the ground on his face, and bowed himself, and thanked the king: and Joab said, To day thy servant knoweth that I have found grace in thy sight, my lord, O king, in that the king hath fulfilled the request of his servant.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('So Joab arose and went to Geshur, and brought Absalom to Jerusalem.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And the king said, '),
                hg('Let him turn to his own house, and let him not see my face', 'c-shadow-face'),
                t('. So Absalom returned to his own house, and saw not the king\'s face.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-shadow-face',
          html:
            'Here is the tragic conditional: Absalom is home, but not fully. He is in Jerusalem, but in shadow. He can see the city. He cannot see the king\'s face. The reconciliation is technical, legal, incomplete. His father has forgiven him enough to let him come home. But not enough to embrace him. The mercy is real. But the wall remains.',
        },

        {
          kind: 'carry',
          html:
            'There is a kind of reconciliation that is not yet whole. A parent might say, "You may come home, but I cannot fully trust you yet. You may live here, but we are not yet close." It is not the same as full restoration. And the partial reconciliation can breed resentment — the child is home but not welcomed, included but not embraced. If this is where you live — in a relationship that is half-healed — know that the half-healing is often a beginning. But it is not the end. Healing asks for more time, more conversation, more vulnerability. Do not settle for living in the shadow of someone\'s face when full reconciliation is possible.',
        },
      ],
    },

    /* ─── 2 Samuel 14:25–26 — Absalom's Beauty ────────────────────────────── */
    {
      ref: '2 Samuel 14:25–26',
      title: 'Absalom\'s Perfect Form',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 25,
              spans: [
                t('But in all Israel there was none to be so much praised for his beauty as Absalom: from the sole of his foot even to the crown of his head there was no blemish in him.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('And when he polled his head (for it was at every year\'s end that he polled it: because the hair was heavy on him, therefore he polled it:) he weighed the hair of his head at two hundred shekels after the king\'s weight.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-beauty-blemish',
          html:
            'Absalom\'s beauty is described in almost liturgical language — "from the sole of his foot even to the crown of his head there was no blemish." The description echoes the language used for a sacrificial offering that must be without blemish (Leviticus 1:3). But Absalom is not a sacrifice. He is a rebellion waiting to happen. His physical perfection is a mask. The next chapter will show his interior corruption — his pride, his ambition, his willingness to steal the hearts of Israel from his father. External beauty can hide internal rot. Beware the perfect surface.',
        },

        {
          kind: 'hebrew',
          id: 'hebrew-absalom',
          title: 'Absalom — אַבְשָׁלוֹם',
          script: 'אַבְשָׁלוֹם',
          translit: '<strong>Avshalom</strong> · father of peace',
          description:
            'The irony is built into his name. Absalom means "father of peace" — yet he will be the architect of war, of civil conflict, of the breaking of the kingdom. A name is not a destiny, but it can be a prayer that is answered backwards. He is called peace, but he makes war.',
        },

        {
          kind: 'reflection',
          id: 'absalom-beauty',
          prompt:
            'What does it mean that Scripture describes Absalom\'s physical beauty in such detail, and then tells us he will rebel? What do you learn when what is beautiful proves to be corrupt?',
        },
      ],
    },

    /* ─── 2 Samuel 14:27–32 — The Burning Field ──────────────────────────── */
    {
      ref: '2 Samuel 14:27–32',
      title: 'Absalom Demands an Audience',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 27,
              spans: [
                t('And unto Absalom there were born three sons, and one daughter, whose name was Tamar: she was a woman of a fair countenance.'),
              ],
            },
            {
              number: 28,
              spans: [
                t('So Absalom dwelt two full years in Jerusalem, and saw not the king\'s face.'),
              ],
            },
            {
              number: 29,
              spans: [
                t('Therefore Absalom sent for Joab, to have sent him to the king; but he would not come to him: and when he sent again the second time, he would not come.'),
              ],
            },
            {
              number: 30,
              spans: [
                t('Therefore he said unto his servants, See, Joab\'s field is near mine, and he hath barley there; go and '),
                hg('set it on fire', 'c-fire'),
                t('. And Absalom\'s servants set the field on fire.'),
              ],
            },
            {
              number: 31,
              spans: [
                t('Then Joab arose, and came to Absalom unto his house, and said unto him, Wherefore have thy servants set my field on fire?'),
              ],
            },
            {
              number: 32,
              spans: [
                t('And Absalom said unto Joab, Behold, I sent unto thee, saying, Come hither, that I may send thee to the king, to say, Wherefore am I come from Geshur? it had been good for me to have been there still: now therefore let me see the king\'s face; and if there be any iniquity in me, let him kill me.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-fire',
          html:
            'Two years of shadow. Two years of being in the city but not seeing the king. And Absalom\'s patience breaks. He burns Joab\'s barley field. It is calculated cruelty — not a crime of passion, but a deliberate act to force an audience. This is the true Absalom: willing to destroy someone else\'s livelihood to get what he wants. And notice what he says when confronted: he does not apologize. He justifies. He says: I did it to get to you, to get to the king. My needs override your property. This is the shadow of rebellion.',
        },

        {
          kind: 'hebrew',
          id: 'hebrew-iniquity',
          title: 'Iniquity — עָוֺן',
          script: 'עָוֺן',
          translit: '<strong>Avon</strong> · guilt, sin, twisted/bent form',
          description:
            'Absalom says: "If there be any iniquity in me, let him kill me." He is claiming innocence — or claiming that his crime (the murder of Amnon) can be forgiven and forgotten. But iniquity, in Hebrew, carries the sense of a twisted or bent form. It is not just the act. It is the state of being bent away from right. Absalom\'s iniquity is not one act. It is the twist in his interior that leads him to burn fields to get his way.',
        },

        {
          kind: 'carry',
          html:
            'Two years is a long time to wait in the shadow of someone\'s face. And sometimes waiting grows a bitterness in us. We begin to demand what was not given. We begin to act in ways that betray what we are truly made of. Absalom\'s cruelty toward Joab — burning the field, forcing the issue, refusing to acknowledge harm — shows us something true: mercy without full reconciliation breeds resentment. The solution is not to burn fields. It is to speak truth, to ask for what we need, to risk being rejected rather than to manipulate. Half-home is not home. And partial mercy can become a breeding ground for rebellion.',
        },
      ],
    },

    /* ─── 2 Samuel 14:33 — The Kiss and the Shadow ───────────────────────── */
    {
      ref: '2 Samuel 14:33',
      title: 'The King\'s Kiss',
      blocks: [
        {
          kind: 'scripture',
          chapter: 14,
          lines: [
            {
              number: 33,
              spans: [
                t('So Joab came to the king, and told him: and when he had called for Absalom, he came to the king, and '),
                hg('bowed himself on his face to the ground before the king: and the king kissed Absalom', 'c-kiss'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-kiss',
          html:
            'At last. The king kisses Absalom. The reconciliation is complete in appearance. But notice what is not said: David does not say, "I love you." He does not say, "All is forgiven." He kisses him. And that is all. The kiss is real. But the love is cautious. The trust is incomplete. The chapter ends not with embracing, not with feasting, not with full restoration — but with a kiss that is perfect and hollow at the same time.',
        },

        {
          kind: 'christ',
          id: 'christ-full-embrace',
          title: 'Christ Connection — Full Embrace, Not Hollow Reconciliation',
          html:
            'Jesus teaches about two kinds of reconciliation in the story of the prodigal son (Luke 15). When the son returns, his father does not kiss him distantly. He runs to him, falls on his neck, kisses him repeatedly. He calls for the finest robe, puts a ring on his finger, calls for a feast. The reconciliation is not half. It is lavish. It is complete. It is filled with joy and celebration. David\'s kiss to Absalom — though real — is a shadow of this. It is the kiss of a father who loves but does not fully trust. And in Christ, we receive a different kind of kiss — not the careful, guarded embrace of a king, but the reckless, joyful embrace of a Father who has fully restored us. We are not brought back into the city but kept at a distance. We are brought fully into the feast, fully into the family. Our reconciliation is complete because Christ\'s work is complete. He has done everything necessary. The embrace is no longer hollow.',
        },

        {
          kind: 'reflection',
          id: 'full-restoration',
          prompt:
            'Have you ever experienced a reconciliation that was technical but not warm — forgiveness without full embracing? What would it take for that relationship to move from partial restoration to full?',
        },

        {
          kind: 'divider',
        },

        {
          kind: 'commentary',
          html:
            '<em>2 Samuel 15 will show the cost of Absalom\'s resentment. The man brought home but not fully embraced will steal the hearts of Israel and lead a rebellion against his father. The partial reconciliation breeds the conflict that tears the kingdom apart. In God\'s kingdom, mercy and justice must be balanced — but when they are, the reconciliation must be full, not partial. Christ offers us that full reconciliation. We are no longer in the shadow of the Father\'s face. We are seated at His table.</em>',
        },
      ],
    },
  ],
};
