import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 2 Samuel 19 — David Returns to Jerusalem
 *
 * After Absalom&apos;s death, David grieves so deeply that his kingdom
 * teeters on collapse. Joab, his commander, must deliver a hard truth:
 * the king&apos;s private anguish has become a public crisis. David rises,
 * shows his face to his people, and begins the journey home. But the path
 * back reveals the fractures in his kingdom — Shimei&apos;s repentance,
 * Mephibosheth&apos;s simple devotion, Barzillai&apos;s humble refusal, and
 * the first signs of the tribal jealousy that will ignite civil war.
 * A king restored, but not without cost.
 */
export const SAMUEL_2_19: RichChapterContent = {
  bookSlug: '2-samuel',
  bookName: '2 Samuel',
  chapter: 19,

  estimatedMinutes: { beginner: 7, intermediate: 17, deep: 23 },
  intros: [
    'David&apos;s rebellion is over. Absalom is dead. The kingdom is David&apos;s again. Yet in the moment of victory, the king retreats into grief so profound that it threatens to undo everything his army has just won. The people steal home "as people being ashamed." The victory has become a funeral. A king&apos;s private sorrow has become a kingdom&apos;s crisis.',
    'What follows is one of Scripture&apos;s most honest moments: a commander speaking hard truth to a grieving king. Joab tells David plainly: your love for your enemies and hatred of your friends will destroy this kingdom. It is a rebuke that breaks protocol, spoken by a man with blood on his own hands. And David listens. He rises. He shows his face. And the work of restoration begins — not with triumph, but with complicated mercy: a curse forgiven, a wronged man&apos;s heart tested, an old man&apos;s wisdom heard, and the first cracks appearing in the foundation of his house.',
  ],

  bottomShare: {
    label: 'Share 2 Samuel 19',
    quote:
      'After victory, David grieves so deeply for his son that his kingdom collapses. Joab speaks hard truth. The king rises, shows his face, and begins a return home marked by repentance, devotion, and the kindness that will cost him his throne.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Samuel 19 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-david-king',
      kind: 'study',
      source: 'Sefaria',
      label: 'David as King of Israel',
      url: 'https://www.sefaria.org/2_Samuel.1',
      description: 'David&apos;s consolidation of power and establishment of monarchy over united Israel.',
    },
    {
      id: 'iaa-city-david',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'City of David Excavations',
      url: 'https://www.antiquities.org.il/',
      description: 'Continuous excavation revealing David-era structures and urban development in Jerusalem.',
    },
    {
      id: 'bible-odyssey-jerusalem',
      kind: 'study',
      source: 'Bible Odyssey/SBL',
      label: 'Jerusalem Captured',
      url: 'https://www.bibleodyssey.org/dictionary/jerusalem/',
      description: 'David&apos;s capture of the Jebusite city and establishment as Israel&apos;s capital.',
    },
  ],

  sections: [
    /* ─── 2 Samuel 19:1–8 — Joab&apos;s Hard Rebuke ──────────────────────── */
    {
      ref: '2 Samuel 19:1–8',
      title: 'Joab Speaks Truth to the King',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(
              1,
              'And it was told Joab, Behold, the king weepeth and mourneth for Absalom.'
            ),
            plain(
              2,
              'And the victory that day was turned into mourning unto all the people: for the people heard say that day how the king was grieved for his son.'
            ),
            plain(
              3,
              'And the people gat them by stealth into the city, as people being ashamed steal away when they flee in battle.'
            ),
            plain(
              4,
              'But the king covered his face, and the king cried with a loud voice, O my son Absalom, O Absalom, my son, my son!'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-victory-mourning',
          html:
            'The victory is turned to mourning. This is not the triumph a king should show after his forces have won. David&apos;s private anguish becomes the nation&apos;s crisis. The soldiers who bled for him come home in shame — their victory stolen by their king&apos;s openly displayed grief. The people do not celebrate. They sneak into the city "as people being ashamed."[res:sefaria-david-king][res:iaa-city-david][res:bible-odyssey-jerusalem]',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-evel',
          title: 'Evel — Mourning',
          script: 'אֵבֶל',
          translit: '<strong>evel</strong> · mourning; lamentation; the garments and practices of grief',
          description:
            'Evel in Hebrew is not quiet sadness. It is public, performed, embodied grief. To be in evel is to wear it, to live it, to make it visible. David&apos;s evel is so complete that it swallows the kingdom. A king who mourns so openly that his victory becomes invisible.',
        },
        {
          kind: 'commentary',
          id: 'c-cried-loud',
          html:
            'David cries with a loud voice: "O my son Absalom, O Absalom, my son, my son!" The repetition, the loudness, the public nature of his anguish — this is a king who is not hiding his wound. In a moment when he should be uniting his fractured kingdom, he is deepening the fracture with every word. His grief is righteous. His timing is catastrophic.',
        },
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(
              5,
              'And Joab came into the house to the king, and said, Thou hast shamed this day the faces of all thy servants, which this day have saved thy life, and the lives of thy sons and of thy daughters, and the lives of thy wives, and the lives of thy concubines;'
            ),
            plain(
              6,
              'In that thou lovest thine enemies, and hatest thy friends. For thou hast declared this day, that thou regardest neither princes nor servants: for this day I perceive, that if Absalom had lived, and all we had died this day, then it had pleased thee well.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-joab-rebuke',
          html:
            'Joab walks into the royal house and speaks words that would cost most men their heads. But Joab is not most men. He is the commander who has done David&apos;s bloody work. He killed Absalom — not in formal battle, but in the grove, in an act that probably violated the king&apos;s unexpressed wish that Absalom live. And now he must speak the truth that no one else dares to speak: David&apos;s grief is not justice. It is betrayal. It is a betrayal of the men who died for him, of his family, of his people.',
        },
        {
          kind: 'commentary',
          id: 'c-lovest-enemies',
          html:
            '"Thou lovest thine enemies, and hatest thy friends." Joab speaks as a man who has read David&apos;s heart accurately. David has always struggled with the men closest to him — he loves Absalom, the rebel; he is suspicious of Joab, his loyal commander. The imbalance is destroying the kingdom.',
        },
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(
              7,
              'Now therefore arise, go forth, and speak comfortably unto thy servants: for I swear by the Lord, if thou go not forth, there will not tarry one with thee this night: and that will be worse unto thee than all the evil that befell thee from thy youth until now.'
            ),
            plain(
              8,
              'Then the king arose, and sat in the gate. And they told all the people, saying, Behold, the king doth sit in the gate. And all the people came before the king: for Israel had fled every man to his tent.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-worse-evil',
          html:
            'Joab&apos;s ultimatum is not gentle. "If thou go not forth, there will not tarry one with thee this night. And that will be worse unto thee than all the evil that befell thee from thy youth until now." The kingdom will abandon him if he does not show his face. Joab makes it clear: a king&apos;s private grief cannot come before his public duty.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes the person who loves you most speaks the hardest truth. Joab is no saint — he is a man with blood on his hands, a killer of his own cousins, a soldier who has bent or broken laws for David&apos;s sake. But he is also the voice that pulls David out of a grief that was becoming a suicide pact with his kingdom. The rebuke is not kind. It is necessary. And David listens. Not everyone who corrects you will be perfect. But perfect love sometimes wears the face of a hard truth spoken by an imperfect friend.',
        },
        {
          kind: 'reflection',
          id: 'joab-truth',
          prompt:
            'When have you heard a hard truth from someone flawed, someone who had no right to speak but spoke anyway? What made you listen — or what kept you from listening?',
        },
      ],
    },

    /* ─── 2 Samuel 19:9–15 — The Call to Bring the King Home ───────────── */
    {
      ref: '2 Samuel 19:9–15',
      title: 'A Divided Kingdom Calls for Its King',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(
              9,
              'And all the people were at strife throughout all the tribes of Israel, saying, The king saved us out of the hand of our enemies, and he delivered us out of the hand of the Philistines; and now he is fled out of the land for Absalom.'
            ),
            plain(
              10,
              'And Absalom, whom we anointed over us, is dead in battle. Now therefore why speak ye not a word of bringing the king back?'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-strife-tribes',
          html:
            'The tribes are divided, quarreling. Some remember David&apos;s victories — he saved them from enemies and Philistines. Others are confused: why did he flee for Absalom? Why are they debating whether to bring him home? The people are looking for leadership that the king, in his grief, is not providing.',
        },
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(
              11,
              'And king David sent to Zadok and to Abiathar the priests, saying, Speak unto the elders of Judah, saying, Why are ye the last to bring the king back to his house? seeing the speech of all Israel is come to the king.'
            ),
            plain(
              12,
              'Ye are my brethren, ye are my bones and my flesh: wherefore then are ye the last to bring back the king?'
            ),
            plain(
              13,
              'And say ye to Amasa, Art thou not of my bone, and of my flesh? God do so to me, and more also, if thou be not captain of the host before me continually in the room of Joab.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-amasa-joab',
          html:
            'David is now taking action — he is using priests to rally the elders, he is making a promise that will have profound consequences. He tells Amasa, Joab&apos;s cousin: "Be captain of the host before me continually in the room of Joab." In one sentence, David promises to replace his most loyal but most violent commander with a man who has just fought against him. This is an act of mercy, or of political necessity, or of misreading the men around him — or perhaps all three. Joab has just saved the kingdom by speaking hard truth. David will repay him by replacing him.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-tzedek',
          title: 'Bone and Flesh — Covenant Language',
          script: 'עֶצֶם וּבָשָׂר',
          translit: '<strong>etzem u-basar</strong> · bone and flesh; the language of covenant kinship',
          description:
            'When David says "Ye are my brethren, ye are my bones and my flesh," he is using the language of covenant. Not mere politics or strategy — but familial bond. Yet he is also testing that bond. The men of Judah are his "bone and flesh," yet he doubts their allegiance? And Amasa is "of my bone and my flesh," yet David did not see his own heart?',
        },
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(
              14,
              'And he bowed the heart of all the men of Judah, even as the heart of one man; so that they sent this word unto the king, Return thou, and all thy servants.'
            ),
            plain(
              15,
              'So the king returned, and came to Jordan: and Judah came to Gilgal, to go to meet the king, to conduct the king over Jordan.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-unity-return',
          html:
            'David&apos;s message to Judah works. The men of Judah are "bowed" — their hearts turn "as the heart of one man." They send word: Return. The king comes to Jordan. Judah comes to meet him at Gilgal. The machinery of reconciliation is beginning to turn. But it moves on a foundation that is already cracking.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes a kingdom — or a family, a community, a marriage — needs its leader to show up. Not perfectly, not with all the right answers, but simply present. David was lost in grief. Joab called him back. David made promises that he may not have fully thought through. But he showed his face, spoke to his people, and gave them something to move toward: a return home. The path would be complicated. The promises would cost him. But the alternative — a king hidden away, a people scattered — was not survivable.',
        },
        {
          kind: 'reflection',
          id: 'leadership-showing',
          prompt:
            'What does it look like to show up for people who are counting on you, even when you are grieving or uncertain? What costs did it?',
        },
      ],
    },

    /* ─── 2 Samuel 19:16–23 — Shimei&apos;s Repentance ───────────────────── */
    {
      ref: '2 Samuel 19:16–23',
      title: 'Shimei&apos;s Mercy — A Curse Forgiven',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(
              16,
              'And Shimei the son of Gera, a Benjamite, hasted, and came down with the men of Judah to meet king David.'
            ),
            plain(
              17,
              'And there were a thousand men of Benjamin with him, and Ziba the servant of the house of Saul, and his fifteen sons and his twenty servants with him; and they went over Jordan before the king.'
            ),
            plain(
              18,
              'And there went over a ferry boat to carry over the king&apos;s household, and to do what he thought good. And Shimei the son of Gera fell down before the king, as he was come over Jordan:'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-shimei-benjamite',
          html:
            'Shimei is a Benjamite — from the tribe of Saul, David&apos;s predecessor. Earlier in David&apos;s life, when David fled Jerusalem before Absalom, Shimei cursed him: "Come out, come out, thou bloody man, and thou man of Belial" (2 Sam 16:7). Shimei threw stones at David and his men. It was an act of rebellion, an act of courage (he was cursing the king), an act of grave insult. Abishai wanted David to let him kill Shimei. But David refused: "Let him curse" (2 Sam 16:11).',
        },
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(
              19,
              'And said unto the king, Let not my lord impute iniquity unto me, neither do thou remember that which thy servant did perversely the day that my lord the king went out of Jerusalem: let not the king take it to his heart.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-shimei-repent',
          html:
            'Shimei falls before David and pleads: "Let not my lord impute iniquity unto me." He is asking David to not hold the curse, not to remember the stones, not to take it to his heart. Shimei has crossed over Jordan with a thousand men — a show of force, a show of allegiance. But his words are words of complete repentance: "I did perversely. Forgive me."',
        },
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(
              20,
              'For thy servant doth know that I have sinned: therefore, behold, I am come the first this day of all the house of Joseph to go down to meet my lord the king.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-first-joseph',
          html:
            'Shimei makes a claim: he is the first from the house of Joseph — the northern tribes — to come and meet David. It is a claim of loyalty, of priority, of repentance turned to action. He is saying: I know I sinned. I was wrong. I am here to make it right.',
        },
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(
              21,
              'But Abishai the son of Zeruiah answered and said, Shall not Shimei be put to death for this, because he cursed the Lord&apos;s anointed?'
            ),
            plain(
              22,
              'And David said, What have I to do with you, ye sons of Zeruiah, that ye should this day be adversaries unto me? shall there any man be put to death this day in Israel? for do not I know that I am this day king over Israel?'
            ),
            plain(23, 'Therefore the king said unto Shimei, Thou shalt not die. And the king sware unto him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-david-mercy',
          html:
            'David stops Abishai coldly. He will not execute Shimei. The question he asks is pointed: "Shall there any man be put to death this day in Israel? For do not I know that I am this day king over Israel?" It is a strange statement. David has just learned that his people love him, that his kingdom is being restored. What does he choose to do with that power? He chooses mercy. He swears an oath to Shimei: you shall not die.',
        },
        {
          kind: 'christ',
          id: 'christ-restoration',
          title: 'Christ Connection — Restoration Without Retribution',
          html:
            'When Jesus is restored — crucified, risen, restored to His Father&apos;s right hand — His first act is not judgment. It is forgiveness. To Peter, who denied Him. To the disciples, who fled. To the very world that killed Him. "Father, forgive them; for they know not what they do" (Luke 23:34). A king who could demand the lives of those who cursed Him instead offers them peace. That is the pattern: a restoration that does not come with a bill for the past. David swears to Shimei, "Thou shalt not die." Jesus breathes on His disciples and says, "Peace be unto you" (John 20:19). The sword is sheathed. The account is closed. The future begins.',
        },
        {
          kind: 'carry',
          html:
            'You have cursed someone. Or someone has cursed you. Words were thrown like stones. The hurt was real, the anger was real, the rebellion was real. And now there is a moment to move forward — or to exact payment. David chose mercy. It is not because Shimei deserved it. It is because David knew that a kingdom divided by vengeance is a kingdom that will not stand. And more: he knew that power means nothing if it cannot offer forgiveness. If you hold the power to punish — and are in a position of any leadership, any love, any authority — what will you do with it?',
        },
        {
          kind: 'reflection',
          id: 'shimei-mercy',
          prompt:
            'When have you been in a position to punish someone who had wronged you, and chosen not to? Or been the one asking for mercy you did not deserve? What made the difference?',
        },
      ],
    },

    /* ─── 2 Samuel 19:24–30 — Mephibosheth&apos;s Devotion ──────────────── */
    {
      ref: '2 Samuel 19:24–30',
      title: 'Mephibosheth — "Let Him Take All"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(
              24,
              'And Mephibosheth the son of Saul came down to meet the king, and had neither dressed his feet, nor trimmed his beard, nor washed his clothes, from the day the king departed until the day he came again in peace.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-mephibosheth-uncovered',
          html:
            'Mephibosheth appears — Jonathan&apos;s son, Saul&apos;s grandson. He has not dressed his feet, not trimmed his beard, not washed his clothes. From the day David fled until David returned. In Hebrew, these are the marks of mourning — not formal evel, but the physical signs of a man in distress. Mephibosheth has been living in anguish for his lord.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-peace',
          title: 'Shalom — Peace; Wholeness; Safe Return',
          script: 'שָׁלוֹם',
          translit: '<strong>shalom</strong> · peace; wholeness; safety; the restoration of right relationship',
          description:
            'David returned "in peace" — in shalom. For Mephibosheth, this shalom means David is alive, is whole, has returned safely. It is not political peace. It is the peace of a man whose lord is safe. And Mephibosheth has waited in the wilderness of not-knowing, unwashed, unshaven, until that shalom came.',
        },
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(
              25,
              'And when he was come to Jerusalem to meet the king, the king said unto him, Wherefore wentest thou not with me, Mephibosheth?'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-why-not-with',
          html:
            'David asks the question that cuts. Mephibosheth is lame — he cannot walk properly. When David fled, Mephibosheth did not follow. Why not? The question carries accusation. Did you not flee with me because you were truly loyal to my son Absalom?',
        },
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(
              26,
              'And he answered, My lord, O king, my servant deceived me: for thy servant said, I will saddle me an ass that I may ride thereon, and go to the king; because thy servant is lame.'
            ),
            plain(
              27,
              'And he hath slandered thy servant unto my lord the king; but my lord the king is as an angel of God: do therefore what is good in thine eyes.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-ziba-deceit',
          html:
            'Mephibosheth answers carefully. His servant — Ziba — deceived him. Mephibosheth asked Ziba to saddle an ass so he could ride to David. But Ziba has slandered him. Ziba has told David that Mephibosheth stayed away to curry favor with Absalom. It is a lie. And Mephibosheth cannot prove it. His lameness kept him from following. His dependence on Ziba left him vulnerable to betrayal.',
        },
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(
              28,
              'For all of my father&apos;s house were but dead men before my lord the king: yet didst thou set thy servant among them that did eat at thine own table. What right therefore have I yet to cry any more unto the king?'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-dead-men',
          html:
            'Mephibosheth speaks from a place of radical grace-consciousness. He says: all my father&apos;s house were dead men before you. We were Saul&apos;s line — your enemy. Yet you set me at your table. You gave me life when you could have taken it. "What right therefore have I yet to cry any more unto the king?" In other words: you have given me more than I deserved. How can I ask for anything more?',
        },
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(
              29,
              'Then the king said unto him, Why speakest thou any more of thy matters? I have said, Thou and Ziba divide the land.'
            ),
            plain(
              30,
              'And Mephibosheth said unto the king, Yea, let him take all, forasmuch as my lord the king is come again in peace unto his own house.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-let-him-take',
          html:
            'David decides: you and Ziba divide the land. Ziba, who slandered Mephibosheth. Ziba gets half. Mephibosheth loses the inheritance David had given him. And Mephibosheth&apos;s response is one of the most beautiful in Scripture. He says: "Let him take all." All. Everything. "Forasmuch as my lord the king is come again in peace unto his own house." The land does not matter. The property does not matter. The king is home. That is enough.',
        },
        {
          kind: 'christ',
          id: 'christ-mephibosheth',
          title: 'Christ Connection — The Heart That Values the King Above All',
          html:
            'Jesus asks his disciples, "For what shall it profit a man, if he shall gain the whole world, and lose his own soul?" (Matt 16:26). Mephibosheth answers that question before Jesus asks it. He would lose the whole world, the whole inheritance, if it meant keeping his lord. When the disciples ask Jesus, "Lord, is it lawful for a man to put away his wife?" (Matt 19:3), the question is about property rights, about keeping what is yours. Jesus answers with a call to covenant and sacrifice. But it is Mephibosheth who models the heart that does not calculate loss. "The king is come again in peace. Let him take all." That is the Gospel. That is the heart of a human being who has understood grace — not as something owed to them, but as something received beyond their deserving, and now the only response is: the Master is home. Let everything else go.',
        },
        {
          kind: 'carry',
          html:
            'You have something — property, reputation, rights, what you believe you are owed. Someone may have slandered you, deceived you, or you may have simply lost things you thought were safe. And the person in power — the person who can set the terms of your future — divides your inheritance in a way that does not seem fair. What will you value then? Will you cling to the injustice, or will you let it go if it means being near someone you love? Mephibosheth&apos;s response seems foolish from the world&apos;s perspective. The world says: fight for your land, your rights, your reputation. Mephibosheth says: the king is home. That is all that matters.',
        },
        {
          kind: 'reflection',
          id: 'mephibosheth-all',
          prompt:
            'What would you be willing to let go of — truly let go of, not as a negotiation but as a gift — if it meant remaining close to someone you love? And what makes that response possible or impossible for you?',
        },
      ],
    },

    /* ─── 2 Samuel 19:31–39 — Barzillai&apos;s Farewell ──────────────────── */
    {
      ref: '2 Samuel 19:31–39',
      title: 'Barzillai — The Wisdom of Knowing Your Season',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(
              31,
              'And Barzillai the Gileadite came down from Rogelim, and went on with the king to Jordan, to conduct him over Jordan.'
            ),
            plain(
              32,
              'Now Barzillai was a very aged man, even fourscore years old: and he had provided the king of sustenance while he lay at Mahanaim.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-barzillai-aged',
          html:
            'Barzillai the Gileadite appears — a man of eighty years old. While David lay hiding from Absalom at Mahanaim, Barzillai fed him and his household. Not with words of loyalty, but with bread and water, with beds and provisions. He was present in David&apos;s darkest hour without claiming reward or recognition.',
        },
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(
              33,
              'And the king said unto Barzillai, Come thou over with me, and I will feed thee with me in Jerusalem.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-king-invitation',
          html:
            'David offers Barzillai the highest honor — to come to court, to eat at the king&apos;s table, to live in Jerusalem. This is David&apos;s way of saying: you showed me kindness when I had nothing. Now you shall have everything. Come and live in the palace.',
        },
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(
              34,
              'And Barzillai said unto the king, How long have I to live, that I should go up with the king unto Jerusalem?'
            ),
            plain(
              35,
              'I am this day fourscore years old: can I discern between good and evil? can thy servant taste what I eat or what I drink? can I hear any more the voice of singing men and singing women? wherefore then should thy servant be yet a burden unto my lord the king?'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-barzillai-decline',
          html:
            'Barzillai declines. And his words are a profound meditation on aging and human limitation. How long will he live? He is eighty. He can no longer taste his food, or hear music, or tell good from evil with clarity. What would be the point of coming to the court of the king if he cannot enjoy the sweetness of that court? He is not refusing David. He is reading his own body and his own season, and choosing not to be a burden on the king he loves.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-burden',
          title: 'Maschal — Burden; Also: Dominion',
          script: 'מִשְׁאָל',
          translit: '<strong>maschal</strong> · a burden carried; a load; that which one bears',
          description:
            'Barzillai says he does not wish to be "yet a burden" unto the king. The word carries the weight of genuine humility — not false modesty, but an honest reading of what an old man at court would be: someone who needs care, someone who consumes but cannot fully participate, someone who would sit at the table but not fully taste it.',
        },
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(
              36,
              'Thy servant will go a little way over Jordan with the king: and why should the king recompense it me with such a reward?'
            ),
            plain(
              37,
              'Let thy servant, I pray thee, turn back again, that I may die in mine own city, and be buried by the grave of my father and of my mother. But behold thy servant Chimham; let him go over with my lord the king; and do to him that which shall seem good unto thee.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-chimham',
          html:
            'Barzillai offers a compromise. He will go with David partway. But then he asks to return home — to his own city, to be buried by the grave of his father and mother. It is a statement of priorities. What matters is not the king&apos;s table, but the continuity of his own life, the ground of his ancestors, the place where he will die. And he offers his son Chimham in his stead: let him go with the king, let the king take him into his service.',
        },
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(
              38,
              'And the king said unto Barzillai, Chimham shall go over with me, and I will do to him that which shall seem good unto thee: and whatsoever thou shalt require of me, that will I do for thee.'
            ),
            plain(
              39,
              'And all the people went over Jordan. And the king kissed Barzillai, and blessed him; and he returned unto his own place.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-kiss-blessing',
          html:
            'David accepts Barzillai&apos;s wisdom. He takes Chimham as his servant. And he does something profound: he kissed Barzillai and blessed him. Not because Barzillai came to court, but because Barzillai understood what Barzillai needed, and asked for it, and sent his son in his place. The king honors the old man&apos;s clarity about his own season.',
        },
        {
          kind: 'christ',
          id: 'christ-season',
          title: 'Christ Connection — Knowing Your Season',
          html:
            'Jesus tells His disciples: "A man hath no greater love than this, that a man lay down his life for his friends" (John 15:13). Barzillai is seventy years into his life when he meets David. He has already given his sustenance, his hospitality, his home when the king needed it. Now David asks him to give his remaining years. And Barzillai says no — not out of selfishness, but out of a deep knowledge of what his body can bear, what his life can hold. "I cannot taste. I cannot hear. It is time for me to go home." This is not rebellion against the king. This is a different kind of love — the love that knows its own limits and honors them. Jesus Himself will say, "Not my will, but thine, be done" (Luke 22:42). That is Barzillai&apos;s prayer in miniature. He has read his own body, his own season. He knows when to let go.',
        },
        {
          kind: 'carry',
          html:
            'You may spend much of your life saying yes — yes to opportunity, yes to the demands of love, yes to the callings that come. But there is a season when the clarity comes: I cannot taste this anymore. I cannot do this anymore. I am eighty years old. And the wisdom is not in pushing harder, not in pretending you are still fifty, but in saying: let me go home. Let me return to the ground of my ancestors. Let me die where I belong. And then, perhaps, to offer something else — a son, a next generation, a different kind of faithfulness that honors the truth of who you are now.',
        },
        {
          kind: 'reflection',
          id: 'barzillai-season',
          prompt:
            'What season are you in right now? What have you been saying yes to that it might be time to let go of? What would it look like to honor the truth of where you are, rather than fighting against it?',
        },
      ],
    },

    /* ─── 2 Samuel 19:40–43 — The Cracks Appearing ───────────────────── */
    {
      ref: '2 Samuel 19:40–43',
      title: 'Tribal Jealousy — The First Signs of Division',
      blocks: [
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(
              40,
              'Then the king went on to Gilgal, and Chimham went on with him: and all the people of Judah conducted the king, and also half the people of Israel.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-gilgal-journey',
          html:
            'The king presses on to Gilgal. Chimham travels with him. The people of Judah conduct him — and also "half the people of Israel." But note the language: Judah conducts the king. The northern tribes are present, but they are not the primary actors. A fracture is forming.',
        },
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(
              41,
              'And, behold, all the men of Israel came to the king, and said unto the king, Why have our brethren the men of Judah stolen thee away, and have brought the king, and his household, and all David&apos;s men with him, over Jordan?'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-stolen-away',
          html:
            'Now the northern tribes speak. They say Judah has "stolen thee away." They have not taken David to Jerusalem with them. Judah has claimed him, has brought him across Jordan first. The men of Israel are not angry that David is returning — they are angry that Judah is getting first access to the king.',
        },
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(
              42,
              'And all the men of Judah answered the men of Israel, Because the king is near of kin to us: wherefore then be ye angry at this matter? have we eaten at all of the king&apos;s cost? or hath he given us any gift?'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-near-kin',
          html:
            'Judah answers: the king is near of kin to us. Judah is David&apos;s tribe — the tribe from which he came. We have eaten at his cost? No. We are claiming nothing but priority. And yet the accusation hangs in the air: we are closer to him. We called him home first.',
        },
        {
          kind: 'scripture',
          chapter: 19,
          lines: [
            plain(
              43,
              'And the men of Israel answered the men of Judah, and said, We have ten parts in the king, and we have also more right in David than ye: why then did ye despise us, that the advice of our bringing the king back was not heard before us? And the words of the men of Judah were fiercer than the words of the men of Israel.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-ten-parts',
          html:
            'Israel says: We have ten parts in the king. We are the ten northern tribes. We have more right in David than you do. Why did you despise us? Why did not our advice to bring the king home get heard first? The quarrel escalates. "The words of the men of Judah were fiercer than the words of the men of Israel." It is a sign of what is coming. Within a chapter, Sheba of Benjamin will raise a revolt. The kingdom will split.',
        },
        {
          kind: 'commentary',
          id: 'c-cracks-kingdom',
          html:
            'This moment is the turning point. David has been restored. Mercy has been offered. Shimei has been forgiven. Mephibosheth has found grace. Barzillai has returned home in peace. But the kingdom is fractured. North against South. The quarrel over who gets the king, who gets first place, who has the most right — it will consume the next chapter and threaten to tear the nation apart. A king can be restored. But his kingdom, once fractured, is harder to heal.',
        },
        {
          kind: 'carry',
          html:
            'Watch the pattern: crisis, hard truth, repentance, restoration. And then, almost immediately, new division. David has done much right in this chapter. He has listened to Joab. He has shown his face to his people. He has offered mercy to his enemy. He has honored the devoted and the aged. But he cannot hold his kingdom together. The pressure of the north and south, the old rivalries, the questions of priority and access and belonging — they erupt almost immediately. Sometimes our best efforts at restoration are still not enough to heal the deeper fractures. That does not mean the effort is wasted. But it means we need to read the world clearly, to see the cracks forming, and to acknowledge that not all divisions can be solved by a single act of grace.',
        },
        {
          kind: 'reflection',
          id: 'division-forms',
          prompt:
            'In your own life or community, have you seen how quickly healing can become the occasion for new division? What made the difference between conflicts that deepened and ones that found their way toward actual reconciliation?',
        },
      ],
    },
  ],
};

function plain(number: number, text: string) {
  return { number, spans: [{ kind: 'text' as const, text }] };
}
