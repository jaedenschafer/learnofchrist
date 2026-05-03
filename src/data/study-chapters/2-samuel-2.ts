import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * 2 Samuel 2 — David Anointed King Over Judah; Ish-bosheth in the North
 *
 * The kingdom divides. David inquires of the Lord and is anointed king over
 * Judah at Hebron. But Abner takes Saul&apos;s son Ish-bosheth to Mahanaim and
 * crowns him king over the northern tribes. At the pool of Gibeon, a terrible
 * game of champions turns into a civil war. Asahel pursues Abner with reckless
 * courage. Abner warns him three times to turn aside. Asahel refuses. The
 * spear strikes, and a young man dies. That night, Abner speaks a question that
 * echoes through the bloodshed: "Shall the sword devour for ever?"
 *
 * God&apos;s purposes are not blocked by the division. The kingdom will not
 * remain split. But the path to unity runs through brother fighting brother,
 * through wisdom learned in sorrow, through a people learning that the sword
 * is not the final word.
 */
export const SAMUEL_2_2: RichChapterContent = {
  bookSlug: '2-samuel',
  bookName: '2 Samuel',
  chapter: 2,

  estimatedMinutes: { beginner: 6, intermediate: 12, deep: 18 },
  intros: [
    'Saul is dead. David has been anointed. But the kingdom is not yet united. Saul&apos;s son Ish-bosheth still lives, and the northern tribes have rallied behind him. Now we watch what happens when a nation divides against itself — when two kings claim the same throne, and the armies that follow them must meet.',
    'This chapter is not a battle with a hero and a loser. It is a glimpse into civil war itself: the terrible waste of it, the way courage without wisdom destroys the young, the way a captain can see the toll and speak against it even as the fighting continues. And beneath it all, God is working — not preventing the division, but moving steadily toward the day when the kingdom will be one.',
  ],

  opener: {
    matchTitle: /anointed|hebron|coronation/i,
    matchArtist: /tissot|rembrandt/i,
    caption: 'The Whole Chapter at a Glance',
  },

  sections: [
    /* ─── 2 Samuel 2:1–7 — David Anointed King at Hebron ──────────────── */
    {
      ref: '2 Samuel 2:1–7',
      title: 'David Inquires and Is Anointed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              1,
              t('And it came to pass after this, that David '),
              hp('inquired of the Lord', 'david-inquires'),
              t(', saying, Shall I go up into any of the cities of Judah? And the Lord said unto him, Go up. And David said, Whither shall I go up? And he said, Unto '),
              hy('Hebron', 'hebron-place'),
              t('.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'david-inquires',
          html:
            'David does not move without asking. Even in a moment of triumph, even when the way seems clear, he pauses to inquire of the Lord. The pattern is set: before any major step, David asks. He seeks guidance before he acts. This is the mark of a man who understands that a kingdom is not built by human strength alone.',
        },
        {
          kind: 'hebrew',
          id: 'hebron-place',
          title: 'Hebron — "Fellowship" or "Joining"',
          script: 'חֶבְרוֹן',
          translit: '<strong>Chebron</strong> · Associated with <em>chavir</em>, meaning "friend" or "companion"',
          description:
            'Hebron, in the Judean hills, is the ancient city of Abraham, Isaac, and Jacob. Its name echoes the Hebrew word for "friend" and "fellowship." David comes to Hebron not as a conqueror but as one coming home. It is a place of gathering, of joining together — a fitting place for a king to be anointed.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(2, 'So David went up thither, and his two wives also, Ahinoam the Jezreelitess, and Abigail the wife of Nabal the Carmelite.'),
            plain(3, 'And his men that were with him did David bring up, every man with his household: and they dwelt in Hebron.'),
          ],
        },
        {
          kind: 'commentary',
          html:
            'David brings everyone with him — his wives, his men, their households. He is not moving alone. He is establishing himself as a king must: with his people around him, with families, with a settled place. Hebron will be his capital in the south.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(4, 'And the men of Judah came, and there they anointed David king over the house of Judah. And they told David, saying, The men of Jabesh-gilead were they that buried Saul.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'jabesh-anointing',
          html:
            'The men of Judah gather and anoint David their king. In the same moment, David learns something important: men from Jabesh-gilead risked themselves to give Saul a proper burial. They honored the dead king. David listens.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              5,
              t('And David sent messengers unto the men of Jabesh-gilead, and said unto them, '),
              hg('Blessed be ye of the Lord', 'blessed-jabesh'),
              t(', that ye have shewed this kindness unto your lord, even unto Saul, and have buried him.')
            ),
            plain(6, 'And now the Lord shew kindness and truth unto you: and I also will requite you this kindness, because ye have done this thing.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'blessed-jabesh',
          html:
            'David does something remarkable. He is newly anointed king. His rival is dead. And yet his first royal act is to bless the men who honored his enemy. He does not wait for them to pledge loyalty. He sends them a promise of kindness. This is leadership that sees honor where others see only the spoils of victory.',
        },
        {
          kind: 'commentary',
          html:
            'David understands something deep: a kingdom is not built by erasing what came before. It is built by honoring what was true in the old regime, by showing respect where respect is due, by promising to the people that his rule will not bring revenge or terror, but &quot;kindness and truth.&quot; The men of Jabesh-gilead did what conscience demanded. David rewards that conscience.',
        },
        {
          kind: 'carry',
          html:
            'When a change comes — a transition in leadership, a shift in power — there is often a temptation to erase what came before. To punish those who served the old king. But David shows a different way. He honors those who did what was right under the old regime, and he promises them the same kindness under his rule. What would it look like to approach a transition in your own life — a new job, a new chapter, a new season — with this same magnanimity? To honor what was good before, and to move forward not with revenge but with a promise of kindness?',
        },
        {
          kind: 'reflection',
          id: 'david-kindness',
          prompt: 'When have you seen someone in a position of power choose kindness toward those who served a predecessor? What did that teach you about leadership? How might you practice that kind of magnanimity in your own circles?',
        },
      ],
    },

    /* ─── 2 Samuel 2:8–11 — Ish-bosheth and the Split Kingdom ──────────── */
    {
      ref: '2 Samuel 2:8–11',
      title: 'The Kingdom Divides',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              8,
              t('But '),
              hy('Abner', 'abner-name'),
              t(' the son of Ner, captain of Saul&apos;s host, took '),
              hy('Ish-bosheth', 'ish-bosheth-name'),
              t(', the son of Saul, and brought him over to Mahanaim;')
            ),
            plain(9, 'And made him king over Gilead, and over the Ashurites, and over Jezreel, and over Ephraim, and over Benjamin, and over all Israel.'),
          ],
        },
        {
          kind: 'hebrew',
          id: 'abner-name',
          title: 'Abner — "Father is Light"',
          script: 'אַבְנֵר',
          translit: '<strong>Avner</strong> · "Father is light" or "My father is light"',
          description:
            'Abner is the power behind the throne — not a weak man, but the strongest military figure in the north. He has spent his life serving Saul. Now he serves Saul&apos;s son. The captain is loyal, but to what? To the family? To the kingdom? Or to his own hand? These questions will shape the chapter.',
        },
        {
          kind: 'hebrew',
          id: 'ish-bosheth-name',
          title: 'Ish-bosheth — "Man of Shame"',
          script: 'אִישׁ־בּשֶׁת',
          translit: '<strong>Ish-Bosheth</strong> · "Man of shame"; also called Esh-baal ("man of Baal")',
          description:
            'The name itself tells the story. In 1 Samuel he is called Esh-baal — "Baal&apos;s man" — a name that made sense when Baal worship was common in the north. Now, as David gathers Judah, the scribes will rename him Ish-bosheth — "man of shame" — a name that signals his weakness. He is not his father. He will not hold the north.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(10, 'Ish-bosheth Saul&apos;s son was forty years old when he began to reign over Israel, and reigned two years. But the house of Judah followed David.'),
            plain(11, 'And the time that David was king in Hebron over the house of Judah was seven years and six months.'),
          ],
        },
        {
          kind: 'commentary',
          html:
            'The numbers tell the story starkly. Ish-bosheth reigns two years. David, in Hebron, will reign seven and a half years over the south. And the closing word is plain: "The house of Judah followed David." The south is his. The north is divided, weak, held together only by Abner&apos;s will. The kingdom cannot stay split. It is not a matter of if, but when.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes we resist the direction that is becoming clear. Ish-bosheth does not seize the moment Saul dies. He waits. Abner places him on the throne and holds him there. But he never truly commands. He is weak, and everyone knows it. What in your own life are you holding onto that is already fading? What is beginning to become clear that you are resisting?',
        },
        {
          kind: 'reflection',
          id: 'ish-bosheth-division',
          prompt: 'In what ways do you see division being resolved not by forcing agreement, but by one side gradually losing strength? What does that teach you about faith and the long view?',
        },
      ],
    },

    /* ─── 2 Samuel 2:12–17 — At the Pool of Gibeon ───────────────────── */
    {
      ref: '2 Samuel 2:12–17',
      title: 'The Strange Game at Gibeon',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(12, 'And Abner the son of Ner, and the servants of Ish-bosheth, went out from Mahanaim to Gibeon.'),
            plain(13, 'And Joab the son of Zeruiah, and the servants of David, went out, and met together by the pool of Gibeon: and they sat down, the one on the side of the pool on the one side, and the other on the other side of the pool.'),
          ],
        },
        {
          kind: 'commentary',
          html:
            'Two armies meet at the pool of Gibeon. The text says they "sat down" — not yet in battle, but facing each other across water. The pool is between them. One army on each side. Waiting.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              14,
              t('And Abner said to Joab, '),
              hg('Let the young men', 'young-men-play'),
              t(' now arise, and play before us. And Joab said, Let them arise.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'young-men-play',
          html:
            'Abner proposes something strange: "Let the young men now arise, and play before us." The word "play" is <em>tsachaq</em> in Hebrew — to mock, to jest, to sport violently. It is a choreographed test. Not quite dueling, not quite a real battle. A performance. Joab agrees. The two armies will watch their young men play.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              15,
              t('Then there arose and went over by number twelve of Benjamin, which pertained to Ish-bosheth the son of Saul, and twelve of the servants of David.')
            ),
            verse(
              16,
              t('And they caught every one his fellow by the head, and thrust his sword in his fellow&apos;s side; so they fell down together: wherefore that place was called '),
              hy('Helkath-hazzurim', 'helkath'),
              t(', the '),
              hg('field of strong men', 'field-strong'),
              t('.')
            ),
          ],
        },
        {
          kind: 'hebrew',
          id: 'helkath',
          title: 'Helkath-hazzurim — "Field of Strong Men"',
          script: 'חֶלְקַת־הַצּוּרִים',
          translit: '<strong>Helkath-hatzurim</strong> · "Field of (the) strong ones"; from <em>tsur</em>, strong',
          description:
            'Twelve young men from each side fight each other at the pool of Gibeon. All twenty-four die in the struggle, each grasping his opponent and driving a sword into him. They fall together. The place is named forever for what happened there: the field of strong men. But they are strong in death, not in victory.',
        },
        {
          kind: 'commentary',
          id: 'field-strong',
          html:
            'It is a grim tableau. Twenty-four young men, champions from both sides, engage in ritualized combat. They do not fight in formation. They grapple — head to head, hand to hand — and kill each other. The text says they "fell down together," locked in death. No winner emerges. Both sides have lost equally. The field is named for strength, but it marks a place of waste.',
        },
        {
          kind: 'carry',
          html:
            'Strength without wisdom is waste. These young men are strong. They are skilled. They are brave. And they die in a ritual that proves nothing except that there is a kingdom divided, and blood is the price of that division. Courage is not enough. Strength is not enough. Without the wisdom to ask whether the sword should devour, a young man dies far from home at the edge of a pool.',
        },
        {
          kind: 'reflection',
          id: 'helkath-courage',
          prompt: 'What do you think these young men were feeling as they faced each other at Gibeon? What is the difference between courage and wisdom? When have you seen strength used without wisdom?',
        },
      ],
    },

    /* ─── 2 Samuel 2:18–32 — Asahel&apos;s Pursuit and Death ───────────────── */
    {
      ref: '2 Samuel 2:18–32',
      title: 'Asahel Pursues, and Abner Warns',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              18,
              t('And there were three sons of Zeruiah there, Joab, and Abishai, and '),
              hy('Asahel', 'asahel-name'),
              t(': and Asahel was as '),
              hg('light of foot as a wild roe', 'asahel-speed'),
              t('.')
            ),
          ],
        },
        {
          kind: 'hebrew',
          id: 'asahel-name',
          title: 'Asahel — "God Made" or "Made by God"',
          script: 'עֲשָׂהְאֵל',
          translit: '<strong>Asahel</strong> · "God has made" or "made by God"',
          description:
            'Asahel is the youngest of the three brothers. Unlike Joab, who is calculating and strategic, Asahel is swift, brave, and young. He will run where angels fear to tread.',
        },
        {
          kind: 'hebrew',
          id: 'asahel-speed',
          title: 'Light of Foot as a Wild Roe',
          script: 'צְבִי',
          translit: '<strong>Tzvi</strong> · roe, gazelle; a creature of speed and lightness',
          description:
            'The text compares Asahel to a wild gazelle — not for gentleness, but for speed. He is swift and agile. He can outrun an ordinary soldier. But speed alone does not win a civil war.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(19, 'And Asahel pursued after Abner; and in going he turned not to the right hand nor to the left from following Abner.'),
            plain(20, 'Then Abner looked behind him, and said, Art thou Asahel? And he answered, I am.'),
          ],
        },
        {
          kind: 'commentary',
          html:
            'Asahel sets his course on Abner and does not swerve. He runs with the single focus of a young man who is fast enough to catch his prey. Abner recognizes him. Abner slows enough to see who chases him. And then, strangely, he tries to stop him.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              21,
              t('And Abner said unto him, Turn thee aside to thy right hand or to thy left, and lay thee hold on one of the young men, and take thee his armour. But Asahel would not turn aside from following him.')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'abner-first-warning',
          html:
            'Abner warns Asahel. It is the first warning: turn aside. Hunt someone your own size. Take armor from another soldier. Let me be. But Asahel does not hear, or does not listen. He is young. He is fast. He is certain. He will not turn aside.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              22,
              t('And Abner said again to Joab, Turn thee aside from following me: wherefore should I smite thee to the ground? how then should I hold up my face to Joab thy brother?')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'abner-second-warning',
          html:
            'Abner speaks a second time — and now he appeals to something deeper. He asks Asahel: "Why should I kill you? How would I face your brother Joab after?" Abner does not want this death. He is trying to save Asahel from what will happen if he does not turn aside. It is a plea from a soldier who has seen enough blood.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              23,
              t('Howbeit he refused to turn aside: wherefore Abner with the hinder end of the spear smote him under the fifth rib, that the spear came out behind him; and he fell down there, and died in the same place.')
            ),
          ],
        },
        {
          kind: 'commentary',
          html:
            'Asahel refuses. His refusal costs him. Abner does what he warned he would do. With the butt end of his spear — not a combat move but a desperate stroke, a killing stroke — he drives it into Asahel&apos;s belly. The spear goes through him. He falls. He dies at Gibeon, far from home, because he would not listen when an older soldier told him: turn aside.',
        },
        {
          kind: 'commentary',
          id: 'asahel-death',
          html:
            'What kills Asahel is not Abner&apos;s malice. It is Asahel&apos;s refusal to hear. Abner warned him twice. He gave the young man a chance to turn aside, to live, to let this war be fought by men meant for it. Asahel&apos;s speed was his gift. His refusal to hear was his death. There are things a young person can learn from someone older, if he will listen.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              24,
              t('And as many as came to the place where Asahel fell down and died stood still.')
            ),
          ],
        },
        {
          kind: 'commentary',
          html:
            'The soldiers stop. The text says they "stood still." Not in victory, not in defeat. Just still. Looking at one of their own, dead. The war has just become real.',
        },
        {
          kind: 'christ',
          id: 'asahel-christ',
          title: 'Christ Connection — Refusing the Warning',
          html:
            'Jesus will later speak about those who refuse the warnings of wisdom. In the parable of the vineyard, He describes servants sent to call the tenants back to God — and they are beaten, killed, rejected (Matthew 21:34–40). Asahel was warned, three times almost — first by the mere fact that Abner was an older, experienced warrior; second by Abner&apos;s explicit words; third by the appeal to his brother. But he would not turn aside. It is a small tragedy, the kind that happens in every generation: the young who will not hear from those who have walked before them, who insist on learning the hardest lessons themselves. By the time we understand, it is too late.',
        },
        {
          kind: 'carry',
          html:
            'You may be Asahel right now. Someone older, someone wiser, is saying: turn aside. Do not go this direction. Listen to your brother, consider what I am telling you. And something in you wants to press forward anyway. You are fast. You are strong. You are certain you can handle this yourself. But the text is clear: Asahel was fast enough to catch Abner, and Abner killed him. Sometimes the greatest courage is to listen, to turn aside, to admit that someone who has walked longer knows something you do not.',
        },
        {
          kind: 'reflection',
          id: 'asahel-warning',
          prompt: 'Is there a warning you are refusing to hear? Someone older, wiser, or simply more experienced trying to tell you to turn aside? What would it look like to listen?',
        },
      ],
    },

    /* ─── 2 Samuel 2:24–32 — The War Continues; Abner Questions the Sword ─ */
    {
      ref: '2 Samuel 2:24–32',
      title: '"Shall the Sword Devour for Ever?"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(24, 'But Joab and Abishai pursued after Abner: and the sun went down when they were come to the hill of Ammah, that lieth before Giah by the way of the wilderness of Gibeon.'),
          ],
        },
        {
          kind: 'commentary',
          html:
            'The sun is setting. Joab and Abishai pursue Abner into the gathering dark. But Asahel is still lying dead at Gibeon. That body is a marker, a line that has been crossed. The war is no longer a ritual. It is blood for blood.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(25, 'And the children of Benjamin gathered themselves together after Abner, and became one troop, and stood on the top of an hill.'),
            verse(
              26,
              t('Then Abner called to Joab, and said, '),
              hg('Shall the sword devour for ever?', 'sword-devour'),
              t(' knowest thou not that it will be bitterness in the latter end? how long shall it be then, ere thou bid the people return from following their brethren?')
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'sword-devour',
          html:
            'Abner speaks the central question of the chapter, perhaps of all civil war: "Shall the sword devour for ever?" He is not asking whether David or Ish-bosheth will win. He is asking a deeper question: When does it end? How many deaths? How much blood? How long will brothers fight brothers before someone says: enough?',
        },
        {
          kind: 'commentary',
          html:
            'Abner has just killed Asahel. He is the victor at Gibeon. He has every reason to drive forward, to crush Joab&apos;s forces, to secure the north for Ish-bosheth. But he does not. Instead, he stops and asks: Is this worth it? Will the sword keep devouring? Abner, the general, is asking whether the general&apos;s answer — more fighting, more pressure, more blood — is the right one. He is asking if there is another way.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            verse(
              27,
              t('And Joab said, As God liveth, unless thou hadst spoken, surely then in the morning the people had gone up every one from following his brother. And so Joab blew a trumpet; and all the people stood still, and pursued after Israel no more, neither fought they any more.')
            ),
          ],
        },
        {
          kind: 'commentary',
          html:
            'Joab hears the question. He answers with an oath: "As God liveth, unless thou hadst spoken, we would have kept pursuing in the morning." Abner&apos;s words are what stop the war — not for victory, not for defeat, but because someone asked the right question. Joab blows a trumpet. The fighting stops. They stand still.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(28, 'So Abner and his men walked all that night through the plain, and passed over Jordan, and went through all Bithron, and came to Mahanaim.'),
            plain(29, 'And Joab returned, and gathered all the people: and there lacked of David&apos;s servants nineteen men and Asahel.'),
            plain(30, 'But the servants of David had smitten of Benjamin and of Abner&apos;s men, three hundred and threescore men, that died.'),
          ],
        },
        {
          kind: 'commentary',
          html:
            'The count is written in blood. David lost 19 men. Abner lost 360. David&apos;s army is the victor. But the war does not end in a triumph at Mahanaim. It ends in a question — and a choice to stop.',
        },
        {
          kind: 'scripture',
          chapter: 2,
          lines: [
            plain(31, 'And they took up Asahel, and buried him in the sepulchre of his father at Bethlehem. And Joab and his men went all night, and came to Hebron at break of day.'),
          ],
        },
        {
          kind: 'commentary',
          html:
            'Asahel is buried in his father&apos;s tomb at Bethlehem. His body comes home. Joab and his men march through the night back to Hebron. The day is over. The kingdom is still divided. But the sword has stopped devouring — for now.',
        },
        {
          kind: 'carry',
          html:
            'Abner&apos;s question echoes beyond this moment in history. "Shall the sword devour for ever?" applies to any conflict that grinds on and on — any family feud that lasts for generations, any workplace war that never quite ends, any grudge that seems to have a life of its own. At some point, someone has to ask: When does this stop? And it will not stop until someone willing to be victorious is also willing to ask whether victory is worth the price. Abner had won. Joab had lost more men than David. But Abner&apos;s question changed everything. Sometimes the most powerful thing a leader can do is to lay down the sword and ask if it is time to ask for peace.',
        },
        {
          kind: 'reflection',
          id: 'sword-devour-2',
          prompt: 'Is there a conflict in your life — personal, professional, or relational — where the "sword" keeps devouring? What would it take for you to ask Abner&apos;s question: "Shall the sword devour for ever?" Who might listen?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 2 Samuel 2',
    quote:
      'David inquired of the Lord and was anointed king over Judah at Hebron. But the kingdom divided: Ish-bosheth reigned in the north, and civil war began. At Gibeon, young men died in ritual combat. Asahel pursued Abner and would not turn aside when warned — the spear found him. That night, Abner asked: "Shall the sword devour for ever?" And the fighting stopped.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Samuel 2 · Study Guide',
  },
};
