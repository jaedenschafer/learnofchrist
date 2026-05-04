import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Samuel 28 — Saul and the Witch of Endor
 *
 * In desperation, King Saul violates his own decree and seeks out a medium
 * to contact the prophet Samuel, now dead. The encounter at Endor reveals
 * a king utterly abandoned by God — unable to hear through dreams, Urim, or
 * prophets — turning to the one method God forbids. What appears at Endor,
 * whether Samuel himself or a deception, speaks a prophecy that shatters
 * what little hope remains: tomorrow Saul and his sons will die.
 *
 * The chapter illuminates Saul's complete spiritual collapse, the danger of
 * seeking God through forbidden means, and a quiet mercy: even a witch shows
 * kindness to the broken king. It stands as a portrait of judgment and as a
 * warning about the shortcuts we take when faith has grown cold.
 */
export const SAMUEL_1_28: RichChapterContent = {
  bookSlug: '1-samuel',
  bookName: '1 Samuel',
  chapter: 28,

  estimatedMinutes: { beginner: 3, intermediate: 9, deep: 12 },
  opener: {
    matchTitle: /Saul at the Witch/i,
    caption: '1 Samuel 28',
  },
  intros: [
    'The Philistines are gathering for war. Achish tells David that he and his men will march into battle alongside the Philistine forces. But the chapter that follows is not about David. It shifts abruptly to Saul, gathering Israel against the very army David walks with — a narrative knot that will not untangle until we reach the battlefield.',
    'Saul is afraid. When he sees the Philistine host assembled, his heart "greatly trembled." He seeks the Lord, but the Lord does not answer — not through dreams, not through the Urim (the priestly casting lots), not through any prophet. The God who once spoke so clearly to Saul has gone silent. In desperation, Saul does the unthinkable: he breaks his own law against mediums and wizards, and goes by night to a woman at Endor who claims to traffic with the dead. What happens there is one of the strangest passages in Scripture.',
  ],

  bottomShare: {
    label: 'Share 1 Samuel 28',
    quote:
      'When Saul saw the Philistine host, he was afraid and sought the Lord, but God answered him not. In desperation, he sought a medium at Endor to inquire of the dead — and received a prophecy of doom. A chapter on faith&apos;s collapse and the danger of spiritual shortcuts.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Samuel 28 · Study Guide',
  },

  resources: [
    {
      id: 'sefaria-hannah-prayer',
      kind: 'study',
      source: 'Sefaria',
      label: 'Hannah&apos;s Prayer',
      url: 'https://www.sefaria.org/1_Samuel.1',
      description: 'Complete text and commentary on Hannah&apos;s prayer and Samuel&apos;s birth.',
    },
    {
      id: 'bible-odyssey-eli',
      kind: 'study',
      source: 'Bible Odyssey/SBL',
      label: 'Eli and the Priesthood',
      url: 'https://www.bibleodyssey.org/dictionary/eli/',
      description: 'Overview of Eli&apos;s role as high priest and the corruption of his sons.',
    },
    {
      id: 'iaa-shiloh',
      kind: 'archaeology',
      source: 'Israel Antiquities Authority',
      label: 'Shiloh Excavation',
      url: 'https://www.antiquities.org.il/',
      description: 'Archaeological evidence of the Shiloh temple site where Hannah and Eli worshipped.',
    },
  ],

  sections: [
    /* ─── 1 Samuel 28:1–7 — The God Who Will Not Answer ──────────────────── */
    {
      ref: '1 Samuel 28:1–7',
      title: 'The Silence of God',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            plain(1, 'And it came to pass in those days, that the Philistines gathered their armies together, for to go out to war against Israel. And Achish said unto David, Know thou assuredly, that thou shalt go out with me to battle, thou and thy men.'),
            plain(2, 'And David said to Achish, Surely thou shalt know what thy servant can do. And Achish said to David, Therefore will I make thee keeper of mine head for ever.'),
          ],
        },
        {
          kind: 'commentary',
          html:
            'The chapter begins at a crossroads. Achish trusts David fully now, calling him "keeper of my head" — guardian of my life. David, the fugitive, has won a place in the Philistine court. But we will see David will not actually march into battle against his own people.',
        },

        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            plain(3, 'Now Samuel was dead, and all Israel had lamented him, and buried him in Ramah, even in his own city. And Saul had put away those that had familiar spirits, and the wizards, out of the land.'),
          ],
        },
        {
          kind: 'commentary',
          html:
            'The narrative reminds us: Samuel is dead. Israel has mourned him. Saul himself outlawed necromancy — he cut off the mediums and wizards from the land. This was a righteous act, in line with God\'s law. But now Saul will violate that very law in his desperation.',
        },

        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            plain(4, 'And the Philistines gathered themselves together, and came and pitched in Shunem: and Saul gathered all Israel together, and they pitched in Gilboa.'),
            plain(5, 'And when Saul saw the host of the Philistines, he was afraid, and his heart greatly trembled.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-fear',
          html:
            'Saul looks at the Philistine army and is overwhelmed by fear. This is not the courage of a king. This is terror. His heart "greatly trembled" — the Hebrew is <em>yigel</em>, to tremble or quake. It is the fear of a man who knows he is about to lose.[res:sefaria-hannah-prayer][res:bible-odyssey-eli][res:iaa-shiloh]',
        },

        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            plain(6, 'And when Saul enquired of the Lord, the Lord answered him not, neither by dreams, nor by Urim, nor by prophets.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-silence',
          html:
            'Saul cries out to the Lord, but the Lord is silent. Not silent because God is absent — but because God has departed from Saul. The three appointed channels of revelation are closed: no dreams (the night voice that once came to Samuel and to others), no Urim (the casting of lots in the priest\'s ephod that revealed God\'s will), no prophets (the living voices that once spoke God\'s word). God has given Saul no answer. And Saul cannot bear the silence.',
        },

        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            plain(7, 'Then said Saul unto his servants, Seek me a woman that hath a familiar spirit, that I may go to her, and enquire of her. And his servants said to him, Behold, there is a woman that hath a familiar spirit at Endor.'),
          ],
        },
        {
          kind: 'hebrew',
          id: 'c-ob',
          title: 'אוֹב — Ob: The Familiar Spirit',
          script: 'אוֹב',
          translit: '<strong>ob</strong> · a familiar spirit, a medium',
          description:
            'The Hebrew <em>ob</em> refers to a familiar spirit or the person who channels it — a medium. The word may come from a root meaning "skin bottle" or "ghost," and suggests something thin, hollow, used as a vessel. It is forbidden in Deuteronomy 18:10–12: "There shall not be found among you... a charmer, or a consulter with familiar spirits, or a wizard, or a necromancer."',
        },

        {
          kind: 'carry',
          html:
            'When God\'s appointed means of guidance are closed, desperation opens doors to shortcuts we would never otherwise walk through. Saul had been right to forbid mediums — he knew the law. But in his fear, with no answer from heaven, that law suddenly seems less important than a way out of the darkness. We may not seek mediums, but we all know the temptation: to consult something forbidden because the approved path feels too slow, or too uncertain.',
        },
        {
          kind: 'reflection',
          id: 'silence-desperation',
          prompt:
            'Have you ever felt God\'s silence in a moment of fear or urgency? What were you tempted to turn to? What would it look like to wait for God\'s voice through His appointed means, even when waiting feels impossible?',
        },
      ],
    },

    /* ─── 1 Samuel 28:8–14 — The Woman at Endor ────────────────────────────── */
    {
      ref: '1 Samuel 28:8–14',
      title: 'The Séance at Endor',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            plain(8, 'And Saul disguised himself, and put on other raiment, and he went, and two men with him, and they came to the woman by night: and he said, I pray thee, divine unto me by the familiar spirit, and bring me him up, whom I shall name unto thee.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-disguise',
          html:
            'Saul disguises himself. The king removes his royal garments and wraps himself in a beggar\'s clothes — not from humility, but from shame. He comes in the night, in darkness, with only two men. This is not a king consulting a prophet in the light of day. This is an outlaw seeking what is forbidden.',
        },

        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            plain(9, 'And the woman said unto him, Behold, thou knowest what Saul hath done, how he hath cut off those that have familiar spirits, and the wizards, out of the land: wherefore then layest thou a snare for my life, to cause me to die?'),
          ],
        },
        {
          kind: 'commentary',
          html:
            'The woman is afraid. She knows what Saul has done to mediums — he has hunted them, cut them off from the land. She suspects a trap. Why would anyone come in the night asking for necromancy, except to entrap her? Her fear is not unfounded. Saul is the king. She is no one.',
        },

        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            plain(10, 'And Saul sware to her by the Lord, saying, As the Lord liveth, there shall no punishment happen to thee for this thing.'),
          ],
        },
        {
          kind: 'commentary',
          html:
            'Saul swears an oath. "As the Lord liveth, there shall no punishment happen to thee." He calls on God\'s name while asking her to do what God\'s law forbids. The irony is bitter. Saul is using the name of the God whose law he is violating, to reassure the very person who practices what God\'s law condemns.',
        },

        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            plain(11, 'Then said the woman, Whom shall I bring up unto thee? And he said, Bring me up Samuel.'),
          ],
        },
        {
          kind: 'commentary',
          html:
            'Saul names the one he seeks: Samuel. Not just any ghost, but the prophet — the man who anointed him king, who spoke God\'s word, who is now dead. Saul wants to hear from Samuel, the one voice that can speak with authority.',
        },

        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            plain(12, 'And when the woman saw Samuel, she cried with a loud voice: and the woman spake to Saul, saying, Why hast thou deceived me? for thou art Saul.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-recognition',
          html:
            'The woman sees Samuel — and recognizes Saul. Her cry is one of fear and indignation. In that moment, something has happened in her séance that she did not expect. Whether what appears is truly Samuel or a deception, the woman is shocked. She cries out that she has been deceived by the king.',
        },

        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            plain(13, 'And the king said unto her, Be not afraid: for what sawest thou? And the woman said unto Saul, I saw gods ascending out of the earth.'),
          ],
        },
        {
          kind: 'hebrew',
          id: 'c-elohim',
          title: 'אֱלֹהִים — Elohim: Gods or Divine Being',
          script: 'אֱלֹהִים',
          translit: '<strong>Elohim</strong> · God, gods, divine being',
          description:
            'The woman says "I saw <em>elohim</em> ascending" — gods, or a divine being. The plural form suggests either multiple beings or, more likely, the majesty and otherness of what appears. This is not a ghostly shade, but something with divine character.',
        },

        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            plain(14, 'And he said unto her, What form is he of? And she said, An old man cometh up; and he is covered with a mantle. And Saul perceived it was Samuel: and he stooped with his face to the ground, and bowed himself.'),
          ],
        },
        {
          kind: 'commentary',
          html:
            'An old man comes up, covered with a mantle. The description fits what we know of Samuel — the prophet, aged and dignified. Saul recognizes him. And Saul bows — not in greeting, but in the full prostration of one before a superior. Whatever is happening, Saul is terrified and submissive.',
        },

        {
          kind: 'christ',
          id: 'christ-mediator',
          title: 'Christ Connection — The Mediator Between Heaven and Earth',
          html:
            'The attempt to contact Samuel represents a fundamental spiritual error: seeking the dead instead of seeking the living God. Paul writes: "There is one God, and one mediator between God and men, the man Christ Jesus" (1 Timothy 2:5). There is no shortcut, no medium or wizard who stands between us and God\'s truth. Christ alone is the mediator. And He stands not behind a veil, like Samuel in death, but present, speaking, alive. The warning of Deuteronomy 18:10–12 stands not to mock those who mourn the dead, but to point away from darkness toward the true Light. In Jesus, we have direct access to God — no séance required.',
        },
      ],
    },

    /* ─── 1 Samuel 28:15–19 — The Prophecy of Doom ───────────────────────────── */
    {
      ref: '1 Samuel 28:15–19',
      title: 'Samuel Speaks: The Word of Judgment',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            plain(15, 'And Samuel said to Saul, Why hast thou disquieted me, to bring me up? And Saul answered, I am sore distressed; for the Philistines make war against me, and God is departed from me, and answereth me no more, neither by prophets, nor by dreams: therefore I have called thee, that thou mayest make known unto me what I shall do.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-disquieted',
          html:
            'Samuel\'s first words are a rebuke: "Why hast thou disquieted me?" Saul has disturbed the rest of the dead. And then Saul explains himself: "God is departed from me, and answereth me no more." It is a confession. Saul knows he is abandoned. He has no voice left but Samuel, and Samuel is dead.',
        },

        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            plain(16, 'Then said Samuel, Wherefore then dost thou ask of me, seeing the Lord is departed from thee, and is become thine enemy?'),
          ],
        },
        {
          kind: 'commentary',
          html:
            'Samuel\'s question cuts deeper. "Why ask me if the Lord is your enemy?" There is a logic to it: if God has departed, if God is against you, then the dead cannot change that. Samuel is saying: even I cannot help you now.',
        },

        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            plain(17, 'And the Lord hath done to him, as he spake by me: for the Lord hath rent the kingdom out of thine hand, and given it to thy neighbour, even to David:'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-torn-kingdom',
          html:
            'Samuel rehearses the word he gave before — when he told Saul that his kingdom would not continue, that God would give his throne to "a neighbour of thine that is better than thou" (1 Samuel 15:28). Now Samuel says plainly: "The Lord hath rent the kingdom out of thine hand, and given it to thy neighbour, even to David." The sentence is already executed.',
        },

        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            plain(18, 'Because thou obeyedst not the voice of the Lord, nor executedst his fierce wrath upon Amalek, therefore hath the Lord done this thing unto thee this day.'),
          ],
        },
        {
          kind: 'commentary',
          html:
            'Samuel points to the root: Saul\'s disobedience. He refused to execute God\'s judgment on Amalek (1 Samuel 15). He kept the spoil and the king alive, against the command. That one failure cascaded — it showed that Saul would not do what God required, that his obedience was partial and conditional. God saw that Saul could not be trusted with the throne.',
        },

        {
          kind: 'hebrew',
          id: 'c-yiddoni',
          title: 'יִדְּעֹנִי — Yiddoni: The Wizard or Diviner',
          script: 'יִדְּעֹנִי',
          translit: '<strong>Yiddoni</strong> · a wizard, diviner, or one who knows secrets',
          description:
            'The Hebrew <em>yiddoni</em> (from a root meaning "to know") refers to one who claims secret knowledge, a diviner or wizard. Like <em>ob</em> (familiar spirit), it is condemned in Deuteronomy 18:10–12. The prohibition covers both the one who consults and the one who practices — both Saul and the woman at Endor are guilty of what God forbade.',
        },

        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            plain(19, 'Moreover the Lord will also deliver Israel with thee into the hand of the Philistines: and tomorrow shalt thou and thy sons be with me: the Lord also shall deliver the host of Israel into the hand of the Philistines.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-tomorrow',
          html:
            'The final blow: "Tomorrow shalt thou and thy sons be with me." Not in some distant future — tomorrow. The battle is tomorrow, and Saul and his sons will fall. The text has already told us (26:19) that David is with the Philistines. And now Saul learns that his reign, his sons, his nation — all will fall to Philistine hands by tomorrow&apos;s night. It is the cruelest answer to his plea for help.',
        },

        {
          kind: 'carry',
          html:
            'There is a kind of desperation that seeks an answer — any answer — to a silence it cannot bear. Saul got an answer. It was worse than silence. Sometimes God\'s silence is a mercy, because His judgment spoken aloud is more terrible than we can survive. The question is not whether God will answer, but whether we will obey Him while we wait.',
        },
        {
          kind: 'reflection',
          id: 'judgment-spoken',
          prompt:
            'What answer are you seeking that you fear God will not give? Would you rather have silence, or the truth you dread? What does it look like to trust God\'s judgment even when you cannot see His plan?',
        },
      ],
    },

    /* ─── 1 Samuel 28:20–25 — The Woman's Kindness ────────────────────────────── */
    {
      ref: '1 Samuel 28:20–25',
      title: 'Bread in the Darkness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            plain(20, 'Then Saul fell straightway all along on the earth, and was sore afraid, because of the words of Samuel: and there was no strength in him; for he had eaten no bread all the day, nor all the night.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-collapse',
          html:
            'Saul falls to the ground, terrified, and "there was no strength in him." He has eaten nothing all day, all night — perhaps since yesterday. The prophecy of death, spoken from the lips of Samuel, breaks him completely. He lies on the earth, a broken king.',
        },

        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            plain(21, 'And the woman came unto him, and saw that he was sore troubled, and said unto him, Behold, thine handmaid hath obeyed thy voice, and I have put my life in mine hand, and have hearkened unto thy words which thou spakest unto me.'),
            plain(22, 'Now therefore, I pray thee, hearken thou also unto the voice of thine handmaid, and let me set a morsel of bread before thee; and eat, that thou mayest have strength, when thou goest on thy way.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-kindness',
          html:
            'And now, in this moment of extremity, the witch shows mercy. She speaks to the broken king with gentleness. She reminds him that she obeyed him, that she risked her life at his command. And then she asks him to listen to her: let her bring him bread. She is offering sustenance to the man who came to entrap her, who hunts people like her. She calls him to eat so he will have strength. It is an extraordinary moment — kindness from an unexpected quarter.',
        },

        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            plain(23, 'But he refused, and said, I will not eat. But his servants and the woman compelled him: and he hearkened unto their voice.'),
          ],
        },
        {
          kind: 'commentary',
          html:
            'Saul refuses. He is beyond comfort, beyond hunger. But his servants and the woman together urge him. They compel him to obey — gently, but firmly. And he listens.',
        },

        {
          kind: 'scripture',
          chapter: 28,
          lines: [
            plain(24, 'So he arose from the earth, and sat upon the bed.'),
            plain(25, 'And the woman had a fat calf in the house; she hasted, and killed it, and took flour, and kneaded it, and did bake unleavened bread thereof: And brought it before Saul and his servants; and they did eat. Then they rose up, and went away that night.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'c-calf',
          html:
            'The woman has a fat calf in her house. She kills it quickly — a significant sacrifice, not scraps. She makes bread. She brings it before the king and his servants, and they eat. Then they rise and go away in the night. There is a strange gentleness to this ending. Saul came to the woman in darkness seeking judgment. He received judgment. And then he received bread.',
        },

        {
          kind: 'carry',
          html:
            'We are all broken at some point — brought low by fear, by judgment, by the weight of what we cannot change. And often the mercy that meets us in that place comes from an unexpected source. From someone we thought was our enemy, or from someone whom our fear has made us despise. The witch at Endor had every reason to turn Saul away. Instead she offered him her calf, her flour, her bread. She gave him strength for a night he would not survive. Sometimes the smallest grace — a meal, a word, a moment of being seen — is the last warmth the dying feel.',
        },
        {
          kind: 'reflection',
          id: 'unexpected-mercy',
          prompt:
            'When have you received mercy from someone you did not expect it from? When have you been called to show mercy to someone who might be considered your adversary?',
        },
      ],
    },
  ],
};
