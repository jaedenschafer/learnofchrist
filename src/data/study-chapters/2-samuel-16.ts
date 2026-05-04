import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * 2 Samuel 16 — Ziba, Shimei, and Ahithophel's Counsel
 *
 * King David flees Jerusalem as his own son Absalom pursues the throne.
 * Climbing past the summit of the Mount of Olives, David meets Ziba with
 * supplies — and is deceived. He meets Shimei, a kinsman of Saul, who curses
 * him with stones. Yet David does not retaliate. "Let him curse," he says,
 * "perhaps the Lord will regard my affliction." Hushai arrives at Absalom's
 * camp with ambiguous loyalty. Ahithophel advises Absalom to lie with David's
 * concubines in full public view — a breach so complete it turns back the
 * clock to Nathan's prophecy: David's own sin against his household returns
 * as public judgment. The chapter holds David in a moment of utter humiliation,
 * stripped of power, receiving insult and deception, yet trusting the Lord.
 */
export const SAMUEL_2_16: RichChapterContent = {
  bookSlug: '2-samuel',
  bookName: '2 Samuel',
  chapter: 16,

  estimatedMinutes: { beginner: 3, intermediate: 11, deep: 13 },
  opener: {
    matchTitle: /David Cursed by Shimei/i,
    caption: '2 Samuel 16',
  },
  intros: [
    'David has lost everything. His own son Absalom has turned the kingdom against him, and the king who seemed unshakeable is now a fugitive, climbing the Mount of Olives in disgrace. The chapter opens not with battle but with the smaller cruelties: a servant&apos;s calculated deception, a kinsman&apos;s curses, stones thrown at an aging king. What David does in this moment of total exposure — how he treats those who betray him and those who mock him — shows us a king whose identity rests somewhere deeper than power.',
    'The chapter is haunted by Nathan&apos;s prophecy from 2 Samuel 12:11 — "Behold, I will raise up evil against thee out of thine own house; and I will take thy wives before thine eyes, and give them unto thy neighbour." As Ahithophel advises Absalom to take David&apos;s concubines on the rooftop, the prophecy moves from word to act. The king is being repaid in his own household what he did in secret will be returned to him in public. Yet even in this darkness, David&apos;s response points forward to Christ — the King who suffers insult without defending Himself, who trusts the Father while the world strips Him bare.',
  ],

  sections: [
    /* ─── 2 Samuel 16:1–4 — Ziba Intercepts the King ──────────────────── */
    {
      ref: '2 Samuel 16:1–4',
      title: 'Ziba Meets the Fleeing King',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(1, 'And when David was a little past the top of the hill, behold, Ziba the servant of Mephibosheth met him, with a couple of asses saddled, and upon them two hundred loaves of bread, and an hundred bunches of raisins, and an hundred of summer fruits, and a bottle of wine.'),
            plain(2, 'And the king said unto Ziba, What meanest thou by these? And Ziba said, The asses be for the king\'s household to ride on; and the bread and summer fruit for the young men to eat; and the wine, that such as be faint in the wilderness may drink.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-ziba-gift',
          html:
            'Ziba appears at the moment when David is most vulnerable — at the peak of the Mount of Olives, looking back at the city he has just abandoned. He comes with provisions: bread, fruit, wine. The gift is abundant and practical. And David, in flight, in shock, receives it as a sign of loyalty. Ziba knows what to offer a king in distress.[res:sefaria-david-king][res:bible-odyssey-jerusalem][res:iaa-city-of-david]',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(3, 'And the king said unto Ziba, And where is thy master\'s son? And Ziba said, Behold, he abideth at Jerusalem: for he said, To day shall the house of Israel restore me the kingdom of my father.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-mephibosheth-claim',
          html:
            'Ziba&apos;s answer is venomous. He claims that Mephibosheth — David&apos;s friend, Jonathan&apos;s son, the one David swore to protect — has remained in Jerusalem hoping to seize his grandfather Saul&apos;s throne back. The accusation cuts deep. It suggests betrayal from the very house David has shown covenant mercy to.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(4, 'Then said the king to Ziba, Behold, thine are all that pertained unto Mephibosheth. And Ziba said, I humbly beseech thee that I may find grace in thy sight, my lord, O king.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hasty-judgment',
          html:
            'In that moment — exhausted, betrayed by his own son, vulnerable to despair — David makes a judgment. "All that pertained unto Mephibosheth" is now Ziba&apos;s. The king has transferred an entire household&apos;s property on the word of a servant. It is a decision made in distress, made hastily, made on incomplete knowledge. Later, in 2 Samuel 19, the full truth will emerge: Mephibosheth has not betrayed David. Ziba has lied. But the judgment, once spoken by a king, is not easily undone.',
        },
        {
          kind: 'carry',
          html:
            'We live in a world that teaches us to make quick judgments in moments of pain. When we are betrayed, we often reach for conclusions that fit our hurt. A servant&apos;s accusation sounds true when we are at our lowest. A story of betrayal makes sense when betrayal is what we are already grieving. David&apos;s choice to reward Ziba on incomplete evidence is human. But it is costly. It is worth asking: when you are in distress, who are you listening to? Whose words are you accepting as truth without waiting for the fuller picture?',
        },
        {
          kind: 'reflection',
          id: 'distress-judgment',
          prompt:
            'When has pain made you quicker to believe accusations or to judge others as disloyal? What happened when you later learned the fuller story?',
        },
      ],
    },

    /* ─── 2 Samuel 16:5–14 — Shimei Curses the King ──────────────────── */
    {
      ref: '2 Samuel 16:5–14',
      title: 'Shimei&apos;s Curse',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(5, 'And when king David came to Bahurim, behold, thence came out a man of the family of the house of Saul, whose name was Shimei, the son of Gera: he came forth, and cursed still as he came.'),
            plain(6, 'And he cast stones at David, and at all the servants of king David: and all the people and all the mighty men were on his right hand and on his left.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-shimei-appears',
          html:
            'Shimei is a kinsman of Saul. His family lost the throne when David became king. As David flees, surrounded by his household and his mighty men, Shimei appears on the hillside and begins to curse. Not in silence — the text says he "cursed still as he came," cursing as he walked, as if the cursing were his entire purpose. He throws stones. He is spitting out rage that has simmered since David took the crown.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(7, 'And thus said Shimei when he cursed, Come out, come out, thou bloody man, and thou man of Belial:'),
            plain(8, 'The Lord hath returned upon thee all the blood of the house of Saul, in whose stead thou hast reigned; and the Lord hath delivered the kingdom into the hand of Absalom thy son: and, behold, thou art taken in thy mischief, because thou art a bloody man.'),
          ],
        },
        {
          kind: 'hebrew',
          id: 'c-qalal',
          title: 'קָלַל Qalal — To Curse, To Make Light Of',
          script: 'קָלַל',
          translit: '<strong>qalal</strong> · to curse; to treat as light or insignificant',
          description:
            'Shimei&apos;s curse (qalal) is not a wish for future harm — it is a judgment spoken in the present. He is declaring that David is cursed, that he is light, that he is nothing. The same root means both "to curse" and "to make light of." To curse someone is to strip them of weight, of honor, of standing.',
        },
        {
          kind: 'hebrew',
          id: 'c-ish-damim',
          title: 'אִישׁ דָּמִים Ish Damim — "Bloody Man"',
          script: 'אִישׁ דָּמִים',
          translit: '<strong>ish damim</strong> · a man of blood; a man stained with killing',
          description:
            'Shimei calls David a "bloody man" — ish damim. He is referencing David&apos;s many wars, his victories, his enemies slain. Shimei sees in David a killer, a man whose hands are stained with death. And in one sense, Shimei is not wrong. David has shed blood. But Shimei is also blind — he sees only the killing, not the justice; only the victory, not the anointing; only the crown, not the God who placed it.',
        },

        {
          kind: 'commentary',
          id: 'c-belial',
          html:
            '"Thou man of Belial" — Belial meaning worthlessness, the absence of value. Shimei is not simply insulting David. He is trying to unmake him. He is trying to strip away every claim to kingship, every right to rule. And he does it by reminding David of something true: David has killed. Saul&apos;s house fell because David rose. And now, Shimei says, God is repaying. "The Lord hath returned upon thee all the blood of the house of Saul." Shimei is claiming that Absalom&apos;s rebellion is God&apos;s judgment.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(9, 'Then said Abishai the son of Zeruiah unto the king, Why should this dead dog curse my lord the king? let me, I pray thee, go over, and take off his head.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-abishai',
          html:
            'Abishai, David&apos;s nephew, offers the response of vengeance. A man curses the king? Kill him. It is the practical, the protective, the answer that makes sense if you believe might makes right. Abishai is not being unreasonable. He is being loyal. And he is offering David a way to reassert his power: silence Shimei by force.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(10, 'And the king said, What have I to do with you, ye sons of Zeruiah? so let him curse, because the Lord hath said unto him, Curse David. Who shall then say, Wherefore hast thou done so?'),
            plain(11, 'Behold, my son, which came forth of my bowels, seeketh my life: how much more now may this Benjamite do it? let him alone, let him curse; for the Lord hath bidden him. It may be that the Lord will look on mine affliction, and that the Lord will requite me good for his cursing this day.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-david-trust',
          html:
            'David&apos;s answer is stunning. He refuses Abishai&apos;s offer. He will not kill Shimei. Instead, David makes a theological claim: "The Lord hath said unto him, Curse David." He is saying that Shimei&apos;s curse is not independent — it is part of God&apos;s judgment. And if God has told Shimei to curse, then David has no right to stop it.',
        },
        {
          kind: 'commentary',
          id: 'c-bowels-rebellion',
          html:
            'Then David speaks the truth that is eating him. "Behold, my son, which came forth of my bowels, seeketh my life." Absalom — his own child — is the real enemy. And if his own son can betray him, why should he be shocked or angry that Shimei curses him? The greater betrayal has already happened. Everything else is consequence.',
        },
        {
          kind: 'christ',
          id: 'christ-silence',
          title: 'Christ Connection — Silent Under Accusation',
          html:
            'When Jesus stood before Pilate, and false witnesses brought accusations against Him, "he answered nothing" (Matt. 26:63). Peter writes: "For even hereunto were ye called: because Christ also suffered for us, leaving us an example, that ye should follow his steps: Who did no sin, neither was guile found in his mouth: Who, when he was reviled, reviled not again; when he suffered, he threatened not; but committed himself to him that judgeth righteously" (1 Peter 2:21–23). David does not kill Shimei. He does not curse back. He accepts the insult and commits himself to God&apos;s judgment. He is walking in a pattern that his greater Son will perfect — the pattern of the King who suffers, who is mocked, who is accused, and who will not defend Himself because He trusts the Father.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(12, 'So David and his men went by the way: and Shimei went along on the hill\'s side over against him, and cursed as he went, and threw stones at him, and cast dust.'),
            plain(13, 'And the king, and all the people that were with him, arrived weary: and refreshed themselves there.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-weary',
          html:
            'Shimei continues to curse. He throws stones and dust. And David continues walking — weary, arrived at a place to rest, but not retaliated. The king has absorbed the insult without striking back. He has chosen to trust God rather than assert his own power. And he arrives exhausted — worn not just by flight, but by humiliation.',
        },
        {
          kind: 'carry',
          html:
            'There are moments when you will be cursed by people who have a claim on your attention — a family member who has lost what your success took from them, a rival who sees you as the one who wronged them, a voice that speaks truth twisted into venom. Your first instinct may be to defend yourself, to strike back, to make clear that you are not what they say you are. David had the power to silence Shimei. He chose not to. Instead, he bore the insult and trusted that God was watching. There is a kind of strength that looks like weakness to the world — the strength of a person who will not defend their own honor because they have placed it in God&apos;s hands.',
        },
        {
          kind: 'reflection',
          id: 'curse-bearing',
          prompt:
            'When has someone spoken hard truth about you in anger, or accused you unfairly? What would it look like to trust God with your defense rather than trying to prove them wrong?',
        },
      ],
    },

    /* ─── 2 Samuel 16:15–19 — Hushai's Ambiguous Loyalty ──────────────── */
    {
      ref: '2 Samuel 16:15–19',
      title: 'Hushai Arrives at Absalom&apos;s Camp',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(15, 'And Absalom, and all the people the men of Israel, came to Jerusalem: and Ahithophel with him.'),
            plain(16, 'And it came to pass, when Hushai the Archite, David\'s friend, was come unto Absalom, that Hushai said unto Absalom, God save the king, God save the king.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hushai-arrives',
          html:
            'Hushai the Archite is introduced as "David&apos;s friend." But now he appears before Absalom and cries out: "God save the king, God save the king." Which king does he mean? The words are ambiguous on their face. Absalom hears them as a greeting to him. But Hushai, we will learn, is David&apos;s spy — sent to Absalom to thwart Ahithophel&apos;s counsel. His words are deliberately unclear.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(17, 'And Absalom said to Hushai, Is this thy kindness to thy friend? why wentest thou not with thy friend?'),
            plain(18, 'And Hushai said unto Absalom, Nay; but whom the Lord, and this people, and all the men of Israel, choose, his will I be, and with him will I abide.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hushai-ambiguity',
          html:
            '"Whom the Lord, and this people, and all the men of Israel, choose, his will I be." Hushai&apos;s answer is a masterpiece of deception. To Absalom&apos;s ear, it sounds like loyalty — "I will be with whoever you choose." But Hushai means something deeper. He means that he will follow "whom the Lord" chooses — and the Lord chose David. He will be "with him" — with David. Hushai&apos;s loyalty to David runs deeper than his words suggest, but he speaks in such a way that Absalom hears what Absalom wants to hear.',
        },
        {
          kind: 'commentary',
          id: 'c-disguised-loyalty',
          html:
            'There is a craft to Hushai&apos;s answer. He does not lie outright. He does not say, "I am David&apos;s spy." He simply speaks in a way that is true on multiple levels. To one who trusts in God, it means loyalty to God&apos;s chosen. To one who trusts in popular opinion, it means loyalty to the crowd. Hushai walks a knife&apos;s edge — appearing to switch sides while remaining faithful to David.',
        },
      ],
    },

    /* ─── 2 Samuel 16:20–23 — Ahithophel's Evil Counsel ────────────────── */
    {
      ref: '2 Samuel 16:20–23',
      title: 'The Counsel of Ahithophel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(20, 'Then said Absalom to Ahithophel, Give counsel among you what we shall do.'),
            plain(21, 'And Ahithophel said unto Absalom, Go in unto thy father\'s concubines, which he hath left to keep the house; and all Israel shall hear that thou art abhorred of thy father: then shall the hands of all that are with thee be strong.'),
          ],
        },
        {
          kind: 'hebrew',
          id: 'c-moetzah',
          title: 'מוֹעֵצָה Moetzah — Counsel, Advice',
          script: 'מוֹעֵצָה',
          translit: '<strong>moetzah</strong> · counsel; advice; a plan or scheme',
          description:
            'Ahithophel is about to give moetzah — counsel. In a few verses, the text will tell us that Ahithophel&apos;s counsel was "as if a man had inquired at the oracle of God." His words carry weight. His plans succeed. But this counsel is evil.',
        },
        {
          kind: 'commentary',
          id: 'c-rooftop-echo',
          html:
            'Ahithophel tells Absalom to "go in unto thy father&apos;s concubines, which he hath left to keep the house." The echo is immediate and terrible. In 2 Samuel 11, David saw Bathsheba bathing on a rooftop. He desired her and took her. He brought her into his house and lay with her. Then came the pregnancy, the cover-up, the murder of Uriah. Nathan&apos;s prophecy followed: "Now therefore the sword shall never depart from thine house… Behold, I will raise up evil against thee out of thine own house; and I will take thy wives before thine eyes, and give them unto thy neighbour, and he shall lie with thy wives in the sight of this sun" (2 Sam. 12:10–11). What David did in secret on a rooftop, his son will now do in public on a rooftop — with David&apos;s own women. The prophecy is being fulfilled.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(22, 'So they spread Absalom a tent upon the top of the house; and Absalom went in unto his father\'s concubines in the sight of all Israel.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-public-sin',
          html:
            'The text is explicit about the publicity. "In the sight of all Israel." A tent is pitched on the rooftop — the same rooftop where David sinned in secret. The act is done not in darkness but in full daylight, watched by the entire nation. It is a mirror of David&apos;s secret act, thrown back at him magnified, public, undeniable. The king is being repaid in the coin of his own house what he sowed.',
        },

        {
          kind: 'scripture',
          chapter: 16,
          lines: [
            plain(23, 'And the counsel of Ahithophel, which he counselled in those days, was as if a man had inquired at the oracle of God: so was all the counsel of Ahithophel both with David and with Absalom.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-oracle-counsel',
          html:
            'The text tells us that Ahithophel&apos;s counsel was "as if a man had inquired at the oracle of God." His plans succeed. His strategic advice is infallible. Both David and Absalom trusted his word. But — and this is critical — his counsel is evil. The fact that a plan is shrewd, that it will work, does not make it right. Ahithophel&apos;s genius is bound to his malice. He sees clearly, he advises well, and he advises toward darkness.',
        },
        {
          kind: 'commentary',
          id: 'c-ahithophel-fall',
          html:
            'What is remarkable is that Ahithophel&apos;s perfect counsel will fail. In 2 Samuel 17, Hushai will offer counter-counsel that Absalom will accept instead. And Ahithophel, seeing that his advice has been rejected, will go home and hang himself. The man whose wisdom was "as if he had inquired at the oracle of God" will be undone by an ambiguous sentence and the pride that will not allow him to survive the moment his counsel is dismissed. Even the brightest mind, bent toward evil, cannot ultimately prevail.',
        },

        {
          kind: 'carry',
          html:
            'The chapter offers a mirror to anyone who has intelligence, position, influence — the things that make counsel powerful. Ahithophel was smart. He was effective. He could see ten moves ahead. And he chose to use his gifts to destroy the king, to humiliate him, to tear his kingdom apart. The question is not whether you are capable. It is whether your capability is bent toward justice or toward harm. A brilliant mind in the service of malice is more dangerous than a simple mind with good intent. But a brilliant mind in the service of God&apos;s purpose is nearly unstoppable. Which will yours be?',
        },
        {
          kind: 'reflection',
          id: 'counsel-purpose',
          prompt:
            'In what area of your life do you have influence or counsel that others trust? Are you bending it toward justice and the good of others, or toward power and your own ends?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 2 Samuel 16',
    quote:
      'King David, fleeing his own son Absalom, is met by deception and cursing. Yet he refuses to retaliate, trusting instead that the Lord will judge. His humiliation and silence point toward a greater King who would suffer without defense, committing himself to the Father&apos;s justice.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Samuel 16 · Study Guide',
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
      id: 'bible-odyssey-jerusalem',
      kind: 'study',
      source: 'Bible Odyssey/SBL',
      label: 'Jerusalem Captured',
      url: 'https://www.bibleodyssey.org/dictionary/jerusalem/',
      description: 'David&apos;s capture of the city of Jerusalem and establishment as Israel&apos;s capital.',
    },
    {
      id: 'iaa-city-of-david',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'City of David Excavations',
      url: 'https://www.antiquities.org.il/article-2505-en/The-City-of-David.aspx',
      description: 'Continuous excavation revealing David-era structures and urban development in Jerusalem.',
    },
  ],
  hasHebrew: true,
};
