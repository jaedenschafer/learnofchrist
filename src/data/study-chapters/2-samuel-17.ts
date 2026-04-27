import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 2 Samuel 17 — Hushai Defeats Ahithophel&apos;s Counsel
 *
 * When Absalom rebels against David, his counselor Ahithophel gives advice
 * that would surely end the king&apos;s life. But David has prayed, and the Lord
 * has sent Hushai the Archite to offer a counter-counsel so appealing that
 * Absalom rejects Ahithophel&apos;s wisdom for folly. Through &quot;mere&quot; words —
 * through the speech of faithful men — God defeats an evil plan. Ahithophel,
 * seeing his counsel rejected, takes his own life. And David, warned in time,
 * escapes. The invisible hand works through human counsel, through faithful
 * friends who risk themselves for the anointed king.
 */
export const SAMUEL_2_17: RichChapterContent = {
  bookSlug: '2-samuel',
  bookName: '2 Samuel',
  chapter: 17,

  intros: [
    'David&apos;s rebellion is in full motion. His own son Absalom has seized the throne. The kingdom is splitting. And in Absalom&apos;s tent, his counselor Ahithophel lays out a plan that should work perfectly: take twelve thousand men tonight, catch David tired and unprepared, strike down only the king, and bring the rest of the people back to Jerusalem in peace. The plan is sound. The timing is right. And it should have worked.',
    'But standing in the way is David&apos;s prayer. In the last chapter, David asked the Lord to make Absalom&apos;s counselors give foolish advice. And God sends a man named Hushai to answer that prayer — not with a miracle, not with a sign in the sky, but with words. Hushai listens to Ahithophel&apos;s counsel and then offers another counsel that sounds even better. Absalom chooses Hushai&apos;s words over the wisdom of a man known to be as sure as the oracle of God. The chapter teaches a profound truth: God works through human choice, through the faithfulness of people who stand in the gap, through counsel that speaks to what people already want to believe.',
  ],

  bottomShare: {
    label: 'Share 2 Samuel 17',
    quote:
      'When David&apos;s counselor gave wise counsel to defeat him, the Lord sent another counselor to speak foolish counsel instead. Absalom chose the foolish counsel, and the king escaped. God&apos;s hand works through human words, through the faithfulness of those who stand for the anointed.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Samuel 17 · Study Guide',
  },

  sections: [
    /* ─── 2 Samuel 17:1–13 — Ahithophel&apos;s Counsel / Hushai&apos;s Counter ─── */
    {
      ref: '2 Samuel 17:1–13',
      title: 'Counsel of War: Ahithophel vs. Hushai',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 1,
              spans: [
                t('Moreover Ahithophel said unto Absalom, Let me now choose out twelve thousand men, and I will arise and pursue after David this night:'),
              ],
            },
            {
              number: 2,
              spans: [
                t('I will come upon him while he is weary and weak handed, and will make him afraid: and all the people that are with him shall flee; and I will smite the king only:'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And I will bring back all the people unto thee: the man whom thou seekest is as if all returned: so all the people shall be in peace.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-ahithophel-counsel',
          html:
            'Ahithophel&apos;s plan is clear and ruthless. He wants to move tonight, catch David exhausted and unprepared, kill the king alone, and let everyone else come back unharmed. The people will follow Absalom not out of fear but out of relief — their king will be dead, and they can go home. It is the counsel of a military strategist who has thought through the problem completely.',
        },
        {
          kind: 'commentary',
          id: 'c-ahithophel-reputation',
          html:
            'The text later notes (verse 14) that Ahithophel&apos;s counsel was considered "as if a man had enquired at the oracle of God." He has a reputation as someone whose advice is infallible, as reliable as a direct word from God. That reputation is about to work against him.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 4,
              spans: [
                t('And the saying pleased Absalom well, and all the elders of Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-pleased-absalom',
          html:
            'Ahithophel&apos;s plan appeals to Absalom. It appeals to the elders. It makes sense. It will work. But Absalom does something unexpected: he asks for another opinion.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 5,
              spans: [
                t('Then said Absalom, Call now Hushai the Archite also, let us hear likewise what he saith.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And when Hushai was come to Absalom, Absalom spake unto him, saying, Ahithophel hath spoken after this manner: shall we do after his saying? if not; speak thou.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hushai-summoned',
          html:
            'Hushai is David&apos;s friend (verse 14 confirms this later). He has infiltrated Absalom&apos;s court as a spy, sent by David to &quot;defeat the counsel of Ahithophel.&quot; Now he is called to give his opinion. He listens to Ahithophel&apos;s perfectly good plan — and he is about to reject it.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 7,
              spans: [
                t('And Hushai said unto Absalom, '),
                hg('The counsel that Ahithophel hath given is not good at this time', 'c-hushai-rejects'),
                t('.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('For, said Hushai, thou knowest thy father and his men, that they be mighty men, and they be '),
                hy('chafed in their minds', 'c-chafed'),
                t(', as a bear robbed of her whelps in the field: and thy father is a man of war, will not lodge with the people.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hushai-rejects',
          html:
            'Hushai appeals to what Absalom knows but Ahithophel has ignored: David is not weak. David is a warrior. He has spent his whole life in battle. He will not be caught unprepared.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-chafed',
          title: 'Chafed in Their Minds — Desperate, Angry',
          script: 'נִמְלְחוּ',
          translit: '<strong>Nimlechu</strong> · embittered, chafed, raw with grief',
          description:
            'David and his men are not just tired — they are emotionally raw. They are like a bear robbed of her cubs, dangerous because they have nothing left to lose. Hushai reminds Absalom that desperation makes David and his followers more dangerous, not less.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 9,
              spans: [
                t('Behold, he is hid now in some pit, or in some other place: and it will come to pass, when some of them be overthrown at the first, that whosoever heareth it will say, There is a slaughter among the people that follow Absalom.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And he also that is valiant, whose heart is as the heart of a lion, shall utterly melt: for all Israel knoweth that thy father is a mighty man, and they which be with him are valiant men.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hidden-king',
          html:
            'Hushai points out what Ahithophel missed: David will not wait to be caught. He will hide. He will ambush. And if Absalom&apos;s men encounter David&apos;s ambush, the panic will spread. People will hear "There is a slaughter among Absalom&apos;s followers" and assume that means the king has been defeated. The rumor will break Absalom&apos;s coalition apart.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 11,
              spans: [
                t('Therefore I counsel that all Israel be generally gathered unto thee, from Dan even to Beersheba, as the sand that is by the sea for multitude; and that thou go to battle in thine own person. Then will we light upon him in some place where he shall be found, and we will light upon him as the dew falleth on the ground: and of him and of all the men that are with him there shall not be left so much as one.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('Moreover, if he be gotten into a city, then shall all Israel bring ropes to that city, and we will draw it into the river, until there be not one small stone found there.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hushai-plan',
          html:
            'Hushai&apos;s counter-counsel sounds even more appealing than Ahithophel&apos;s. Instead of a quick strike with twelve thousand men, Hushai suggests gathering &quot;all Israel, from Dan to Beersheba,&quot; an enormous force that will be impossible for David to hide from. Absalom himself will lead the armies. The language is grandiose and flattering: Absalom at the head of all Israel, a force as countless as sand. And as for any city where David hides, they will destroy it stone by stone. It appeals to Absalom&apos;s vanity and his desire to be seen as the chosen leader of all Israel.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 13,
              spans: [
                t('So Absalom and all the men of Israel said, '),
                hg('The counsel of Hushai the Archite is better than the counsel of Ahithophel', 'c-choice-hushai'),
                t('. '),
                hp('For the Lord had appointed to defeat the good counsel of Ahithophel', 'c-lord-defeats'),
                t(', to the intent that the Lord might bring evil upon Absalom.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-choice-hushai',
          html:
            'Absalom chooses. The choice seems reasonable — Hushai&apos;s plan is thorough, it flatters the king, and it seems more complete than Ahithophel&apos;s quick strike. But the Bible tells us the real reason for the choice.',
        },
        {
          kind: 'commentary',
          id: 'c-lord-defeats',
          html:
            'Here is the invisible hand: &quot;For the Lord had appointed to defeat the good counsel of Ahithophel.&quot; God is working through Hushai&apos;s words, through Absalom&apos;s choice, through human counsel that sounds wise but leads to destruction. Providence is not coercion — Absalom genuinely chooses. But his choice is guided by God toward the end God intends.',
        },
        {
          kind: 'carry',
          html:
            'We live in a world where counsel matters. Where words shape decisions. Where the advice we listen to determines our path. And we can believe two things at once: that our choices are real, and that God can work through those choices to accomplish His will. Hushai did not force Absalom. He simply spoke, and Absalom listened. But God was working through that listening, through that choice, toward a purpose Absalom did not see.',
        },
        {
          kind: 'reflection',
          id: 'counsel-providence',
          prompt:
            'When have you faced a choice between two paths, both seeming reasonable? How have you, in hindsight, seen God&apos;s hand guiding your choice toward something you could not have foreseen at the time?',
        },
      ],
    },

    /* ─── 2 Samuel 17:14–22 — The Message Couriered ──────────────────────── */
    {
      ref: '2 Samuel 17:14–22',
      title: 'The Message Sent in Secret',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 14,
              spans: [
                t('And Hushai said unto Zadok and to Abiathar the priests, Thus and thus did Ahithophel counsel Absalom and the elders of Israel; thus and thus have I counselled.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('Now therefore send quickly, and tell David, saying, Lodge not this night in the plains of the wilderness, but speedily pass over; lest the king be swallowed up, and all the people that are with him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hushai-priests',
          html:
            'Hushai runs to the priests Zadok and Abiathar — men loyal to David. He tells them the truth: this is what Ahithophel wanted to do, and this is what I told Absalom instead. But now Absalom has chosen my counsel, which means Ahithophel&apos;s quick strike is not coming. David has a window, but only if he moves immediately.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 16,
              spans: [
                t('Now Jonathan and Ahimaaz stayed by En-rogel; for they might not be seen to come into the city: and a wench went and told them; and they went and told king David.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-en-rogel',
          html:
            'Jonathan (the son of the priest Abiathar) and Ahimaaz (the son of Zadok) are waiting at En-rogel, a spring outside Jerusalem. They cannot come into the city openly without being noticed. So a servant girl brings them the message from Hushai, and they prepare to run to David.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 17,
              spans: [
                t('But a lad saw them, and told Absalom: but they went both of them away quickly, and came to a man&apos;s house in Bahurim, who had a well in his court; thither they went down.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-well-bahurim',
          html:
            'A servant boy sees them and reports them to Absalom. The couriers run for their lives and reach a house in Bahurim whose owner has a well in his courtyard. They climb down into the well to hide.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 18,
              spans: [
                t('And the woman took and spread a covering over the well&apos;s mouth, and spread ground corn thereon; and the thing was not known.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-covering-corn',
          html:
            'The woman of the house spreads a cloth over the well and scatters grain on top of it — making it look like grain is simply being dried there. It is the kind of quick, practical deception that appears throughout Scripture when the faithful must hide God&apos;s anointed.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 19,
              spans: [
                t('And when Absalom&apos;s servants came to the woman to the house, saying, Where is Ahimaaz and Jonathan? the woman said unto them, They be gone over the brook of water. And when they had sought and could not find them, they returned to Jerusalem.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-deception-saved',
          html:
            'Absalom&apos;s men arrive and demand to know where the couriers are. The woman lies. She says they went over the brook. The men search and find nothing. They return to Jerusalem. The deception holds.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 20,
              spans: [
                t('And when Absalom&apos;s servants came to the woman to the house, saying, Where is Ahimaaz and Jonathan? the woman said unto them, They be gone over the brook of water. And when they had sought and could not find them, they returned to Jerusalem.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And it came to pass, after they were departed, that they came up out of the well, and went and told king David, and said unto him, Arise, and pass quickly over the water: for thus hath Ahithophel counselled against you.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-message-delivered',
          html:
            'Once Absalom&apos;s men have left, Jonathan and Ahimaaz climb out of the well and rush to David. They deliver the message: Ahithophel was planning to strike tonight. You must move. Now.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 22,
              spans: [
                t('Then David arose, and all the people that were with him, and they passed over Jordan: by the morning light there lacked not one of them that was not gone over Jordan.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-david-escapes',
          html:
            'David does not hesitate. He and all his people rise up and cross the Jordan River. By dawn, not a single person remains on the western bank. The king and his followers have escaped.',
        },
        {
          kind: 'carry',
          html:
            'There is a whole network here of people risking themselves for David. Hushai, walking a razor&apos;s edge between Absalom&apos;s court and David&apos;s cause. The priests Zadok and Abiathar, maintaining the line of communication. The couriers Jonathan and Ahimaaz, running for their lives. The unnamed woman who lied to protect them. Each one of them, in their own small way, was faithful. And together, they saved the king.',
        },
        {
          kind: 'reflection',
          id: 'faithful-network',
          prompt:
            'Who are the people in your life who have risked themselves for you? Or to whom have you risked yourself, even in small ways, out of faithfulness? What does it cost to be part of that kind of network?',
        },
      ],
    },

    /* ─── 2 Samuel 17:23 — Ahithophel&apos;s Suicide ────────────────────────── */
    {
      ref: '2 Samuel 17:23',
      title: 'Ahithophel&apos;s End',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 23,
              spans: [
                t('And when Ahithophel saw that his '),
                hg('counsel was not followed', 'c-counsel-rejected'),
                t(', he saddled his ass, and arose, and gat him home to his city, and put his household in order, and '),
                hy('hanged himself', 'c-ahithophel-hangs'),
                t(', and died, and was buried in the sepulchre of his father.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-counsel-rejected',
          html:
            'Ahithophel learns that Absalom has chosen Hushai&apos;s counsel over his own. This is not merely a loss — it is a catastrophe. A man whose advice has been considered infallible, "as if a man had enquired at the oracle of God," has been rejected. His counsel was good. It would have worked. But it was not followed.',
        },
        {
          kind: 'commentary',
          id: 'c-ahithophel-hangs',
          html:
            'Rather than watch his rejected counsel play out into failure, Ahithophel goes home, puts his household in order (settling his affairs), and hangs himself. He chooses death rather than witness. It is the first suicide of a major counselor in Scripture — and it will be read, centuries later, as a foreshadowing.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-ahithophel',
          title: 'Ahithophel — "Brother of Folly"',
          script: 'אֲחִיתֹ֫פֶל',
          translit: '<strong>Ahithophel</strong> · brother of folly; he who counsels folly',
          description:
            'The name itself carries an irony. Ahithophel is called the wisest counselor in Israel, yet his name means "brother of folly." When his wisdom is rejected, when he cannot bear the shame of it, he becomes what his name suggested: a man who has embraced folly. He ends himself.',
        },
        {
          kind: 'christ',
          id: 'ahithophel-judas',
          title: 'Christ Connection — The Counselor Who Betrays',
          html:
            'In Acts 1:16–20, Peter connects Ahithophel to Judas Iscariot. Peter quotes Psalm 41:9 — "He that eateth bread with me hath lifted up his heel against me" — and applies it to Judas, who ate with Jesus and then betrayed Him. The name of the psalm is connected to David; David prayed it during Absalom&apos;s rebellion. Ahithophel was David&apos;s counselor, one of his inner circle, and he sided with Absalom. Judas was Jesus&apos; disciple, one of His twelve, and he sided with the authorities who wanted Him dead. In both cases, a friend becomes a betrayer. In both cases, God&apos;s hand works not by stopping the betrayal but by working through and beyond it. And in both cases, the betrayer ends in despair — Ahithophel in suicide, Judas in remorse that leads to death. The pattern is the same: proximity to God&apos;s anointed, the choice to betray, and the destruction that follows.',
        },
        {
          kind: 'carry',
          html:
            'Ahithophel knew the king. He had been trusted with counsel. And he chose to side with the rebellion. There is no indication that Ahithophel wanted to be king or that Absalom had won him over by argument. The text does not tell us why Ahithophel betrayed David. But his betrayal cost him everything. He could not live with the shame of being rejected. Some choices cannot be undone. Some councils cannot be taken back. Some acts of unfaithfulness leave only regret.',
        },
        {
          kind: 'reflection',
          id: 'ahithophel-loyalty',
          prompt:
            'Ahithophel was trusted and close to David, yet he betrayed him. What does it take to remain faithful when you are close enough to power that betrayal seems possible? When have you seen someone destroy themselves through the shame of their own choices?',
        },
      ],
    },

    /* ─── 2 Samuel 17:24–29 — David Provisioned ─────────────────────────── */
    {
      ref: '2 Samuel 17:24–29',
      title: 'The King Cared For',
      blocks: [
        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 24,
              spans: [
                t('And David came to Mahanaim. And Absalom passed over Jordan, he and all the men of Israel with him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-mahanaim',
          html:
            'David reaches Mahanaim, a city east of the Jordan. The name means "two camps" — and it was here that Jacob, fleeing his brother Esau, saw the angels of God and said, "This is God&apos;s host" (Genesis 32:2). It is a place of refuge, a place where the exiled heir finds protection.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-mahanaim',
          title: 'Mahanaim — "Two Camps"',
          script: 'מַחֲנַ֫יִם',
          translit: '<strong>Mahanaim</strong> · two camps; the place of two armies',
          description:
            'Mahanaim is historically a boundary city, a place between kingdoms. In Genesis, Jacob sees it as a place of divine protection — the camp of God meeting the camp of Jacob. Now David, fleeing his own son, comes to the same refuge. The name carries a kind of duality: the camp of the fugitive king and the camp of God, standing together.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 25,
              spans: [
                t('And Absalom made Amasa captain of the host instead of Joab.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-amasa-captain',
          html:
            'Absalom appoints Amasa as his general, replacing Joab (who remained loyal to David). Amasa is a relative of Joab and of David — the son of Ithra (or Jether), an Ishmaelite. So even in this rebellion, David&apos;s kinsmen are divided.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 26,
              spans: [
                t('So Shobi the son of Nahash of Rabbah of the children of Ammon, and Machir the son of Ammiel of Lo-debar, and Barzillai the Gileadite of Rogelim,'),
              ],
            },
            {
              number: 27,
              spans: [
                t('Brought beds, and basons, and earthen vessels, and wheat, and barley, and flour, and parched corn, and beans, and lentiles, and parched pulse,'),
              ],
            },
            {
              number: 28,
              spans: [
                t('And honey, and butter, and sheep, and cheese of kine, for David, and for the people that were with him, to eat: for they said, The people is hungry, and weary, and thirsty, in the wilderness.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-provisioners',
          html:
            'Three men come to David with supplies: Shobi (an Ammonite, whose father was the king of Ammon — normally an enemy of Israel), Machir (a man from Lo-debar who had sheltered Mephibosheth, Saul&apos;s grandson, and became his adopted son), and Barzillai (a wealthy Gileadite). They bring a massive provision: beds, vessels, grain, legumes, honey, butter, sheep, cheese. They see that David and his followers are exhausted and hungry.',
        },
        {
          kind: 'commentary',
          id: 'c-enemies-become-servants',
          html:
            'This is a moment of profound grace. Shobi, son of an Ammonite king (from a nation that had been at war with Israel), chooses to serve David. Machir, who had hidden Saul&apos;s grandson and shown him kindness, now shows the same kindness to the anointed king. Barzillai, a man of wealth and standing, brings everything he has. The king who has been abandoned is now surrounded by the faithful.',
        },

        {
          kind: 'scripture',
          chapter: 17,
          lines: [
            {
              number: 29,
              spans: [
                t('For they said, The people is hungry, and weary, and thirsty, in the wilderness.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-wilderness-care',
          html:
            'The text does not say they were commanded to do this. It says they saw the need. The king is in the wilderness, weary and thirsty. These three men choose to care for him.',
        },
        {
          kind: 'carry',
          html:
            'When you are running, when you have lost everything, when you are in the wilderness with nowhere to go, it matters who remains. Shobi could have turned away — he was an Ammonite, not an Israelite. Machir could have forgotten — he owed David nothing. Barzillai could have protected his wealth. But all three saw a need and met it. They did not wait to be asked. They did not wait for David to be restored before they served him. They served him in exile, in hunger, in the dust. And in doing so, they became part of the story of his restoration.',
        },
        {
          kind: 'reflection',
          id: 'faithful-provision',
          prompt:
            'Who has cared for you when you were in the wilderness? Or to whom have you brought provision and care, even though no one else was watching or would ever reward you for it? What does that kind of faithfulness look like?',
        },
      ],
    },
  ],
};
