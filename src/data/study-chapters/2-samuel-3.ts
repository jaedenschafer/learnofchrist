import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Samuel 3 — Abner's Death: Ambition, Betrayal, and the Innocent King
 *
 * As David rises in power, his position solidifies not through his own
 * violence but through the defections of Saul's servants and commanders.
 * Abner, Saul's general, betrays his old king to bring Israel under David's
 * rule—a political turning point. But Joab, David's commander, murders Abner
 * in cold blood to avenge his brother Asahel, disrupting David's diplomacy.
 * David, anointed king but bound by the violence of his own men, fasts and
 * mourns, proving his innocence and pointing toward a King whose servants'
 * violence could never compromise His character.
 */
export const SAMUEL_2_3: RichChapterContent = {
  bookSlug: '2-samuel',
  bookName: '2 Samuel',
  chapter: 3,

  estimatedMinutes: { beginner: 3, intermediate: 13, deep: 14 },
  intros: [
    'The chapter opens on a long civil war: the house of Saul growing weaker, the house of David growing stronger. The king who has never lost a battle is winning through patience and the loyalty of his enemies. Six sons are born to David in Hebron—a sign of stability, of a growing dynasty. But the real shift comes when Abner, the man who has held Saul\'s kingdom together, makes a choice that will reshape Israel.',
    'Abner\'s defection is not a sudden betrayal. It comes after Ish-bosheth, Saul\'s son, accuses him of lying with the dead king\'s concubine—an indirect charge of treason (lying with a king\'s wife was a claim to the throne). Abner, wounded by the accusation and seeing the writing on the wall, decides to switch his allegiance and bring all Israel to David. The wheels of history turn.',
    'But when Joab learns of Abner\'s visit, he sees only his brother\'s killer. Joab murders Abner in the gate of Hebron, disrupting David\'s diplomacy in a single act of blood vengeance. And David, anointed king of Israel, is powerless to prevent it. He fasts. He mourns. He laments that a "prince and a great man" has fallen, not by the king\'s hand, but by the hands of men the king cannot control. The narrative forces a question: what kind of king is bound by his own men\'s violence?',
  ],

  bottomShare: {
    label: 'Share 2 Samuel 3',
    quote:
      'As David waxed stronger and Saul\'s house grew weaker, Abner—the general of Saul\'s army—defected to David, promising to bring all Israel under his rule. But Joab murdered Abner in revenge for his brother. David, though king, mourned publicly, proving to all Israel that the blood was not of his doing.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Samuel 3 · Study Guide',
  },

  sections: [
    /* ─── 2 Samuel 3:1–5 — The Long War and David's Growing House ──── */
    {
      ref: '2 Samuel 3:1–5',
      title: 'The House of Saul Falls; The House of David Rises',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(
              1,
              'Now there was long war between the house of Saul and the house of David: but David waxed stronger and stronger, and the house of Saul waxed weaker and weaker.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'long-war',
          html:
            'The civil war that begins in 2 Samuel 2 continues without a decisive battlefield victory. David does not conquer Saul&apos;s territory by force of arms. Instead, he grows stronger while his rival grows weaker. The text gives no account of heroic campaigns. Instead it shows patience, stability, and the gradual defection of the northern tribes. This is the kingdom secured not by the sword alone, but by legitimacy.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(
              2,
              'And unto David were sons born in Hebron: and his firstborn was Amnon, of Ahinoam the Jezreelitess;'
            ),
            plain(3, 'And his second, Chileab, of Abigail the wife of Nabal the Carmelite; and the third, Absalom the son of Maacah the daughter of Talmai king of Geshur;'),
            plain(4, 'And the fourth, Adonijah the son of Haggith; and the fifth, Shephatiah the son of Abital;'),
            plain(5, 'And the sixth, Ithream, by Eglah David&apos;s wife. These were born to David in Hebron.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'six-sons',
          html:
            'Six sons are listed, each with a different mother. In the ancient Near East, a king&apos;s multiple wives and many sons signaled power, stability, and the continuation of dynasty. The catalogue emphasizes that David&apos;s house is taking root: there is a line, a succession, a future. The text names them and names their mothers—a deliberate record of legitimacy. While Saul&apos;s house diminishes, David&apos;s expands. The visual image is of a kingdom becoming stable, consolidated.',
        },
      ],
    },

    /* ─── 2 Samuel 3:6–11 — Ish-Bosheth Confronts Abner ───────────── */
    {
      ref: '2 Samuel 3:6–11',
      title: 'The Accusation That Broke the Kingdom',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(
              6,
              'And it came to pass, as there was war between the house of Saul and the house of David, that Abner made himself strong for the house of Saul.'
            ),
            plain(
              7,
              'And Saul had a concubine, whose name was Rizpah, the daughter of Aiah: and Ish-bosheth said to Abner, Wherefore hast thou gone in unto my father&apos;s concubine?'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'ish-bosheth-accusation',
          html:
            'Ish-bosheth, Saul&apos;s weak son, confronts Abner about lying with Rizpah, Saul&apos;s concubine. On the surface, it is a moral question. But the accusation carries a deeper meaning: to lie with the king&apos;s woman was to claim the king&apos;s throne. Ish-bosheth is not simply defending his father&apos;s honor—he is accusing Abner of harboring royal ambitions. Whether the accusation is true or a pretext, it wounds Abner deeply. It reveals that Ish-bosheth fears him. And that fear will cost him everything.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(8, 'Then was Abner very wroth for the words of Ish-bosheth, and said, Am I a dog&apos;s head, which against Judah do shew kindness this day unto the house of Saul thy father, to his brethren, and to his friends, and have not delivered thee into the hand of David, that thou chargest me to day with a fault concerning this woman?'),
          ],
        },
        {
          kind: 'commentary',
          id: 'dog-head',
          html:
            '"Am I a dog&apos;s head?" —the image of the lowest, most contemptible thing. Abner is saying: I have given my life to your father&apos;s house, fought for your throne, kept David at bay—and this is how you repay me? With an accusation? With suspicion? In this moment, Abner&apos;s loyalty shatters. The insult becomes the crack through which a kingdom will fall.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(
              9,
              'So do God to Abner, and more also, except, as the Lord hath sworn to David, even so I do to him;'
            ),
            plain(
              10,
              'To translate the kingdom from the house of Saul, and to set up the throne of David over Israel and over Judah, from Dan even to Beersheba.'
            ),
          ],
        },
        {
          kind: 'hebrew',
          id: 'abner-avner',
          title: 'Abner — "Father is Light"',
          script: 'אַבְנֵר',
          translit: '<strong>Avner</strong> · Father of light; My father is a lamp',
          description:
            'The name Abner carries irony—"father is light," a name suggesting illumination and guidance. Yet Abner has been the man holding Saul&apos;s failing kingdom together in darkness, a servant to a declining house. His shift to David is not a betrayal born of ambition, but a recognition that the light—God&apos;s anointed king—has changed. He abandons darkness for light.',
        },

        {
          kind: 'commentary',
          id: 'abner-vow',
          html:
            'Abner swears a vow: "So do God to me, and more also, except, as the Lord hath sworn to David, even so I do to him." He is acknowledging what he has long known—that the Lord has sworn the kingdom to David. Abner&apos;s turn is not sudden. He has watched David succeed against impossible odds. He has seen that God is with David, not with the weakening house of Saul. Now, wounded by the very king he has protected, Abner decides to act on what he has come to believe: David is Israel&apos;s true king.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(11, 'And Ish-bosheth could not answer Abner a word again, because he feared him.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'ish-bosheth-fear',
          html:
            'Ish-bosheth has no answer. He fears Abner—the man who has been his military protector now stands as his judge. In that silence, the house of Saul crumbles. A kingdom is lost not in battle, but in the moment when a weak king loses the loyalty of his strongest servant.',
        },
      ],
    },

    /* ─── 2 Samuel 3:12–16 — Abner's Defection; Michal Restored ──── */
    {
      ref: '2 Samuel 3:12–16',
      title: 'Abner Brings the Kingdom; Michal\'s Return',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(
              12,
              'And Abner sent messengers to David on his behalf, saying, Whose is the land? also saying, Make thy league with me, and, behold, my hand shall be with thee, to bring about all Israel unto thee.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'abner-league',
          html:
            'Abner opens negotiations not as a defeated man seeking mercy, but as a kingmaker. "Whose is the land?"—a rhetorical question suggesting that all Israel belongs to the side Abner now supports. He is offering David not just his personal allegiance, but his power to deliver the northern tribes. It is a stunning political coup, conducted through quiet diplomacy.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(
              13,
              'And he said, Well; I will make a league with thee: but one thing I require of thee, that is, Thou shalt not see my face, except thou first bring Michal Saul&apos;s daughter, when thou comest to see my face.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'michal-requirement',
          html:
            'David&apos;s condition is not military; it is personal. He demands Michal, Saul&apos;s daughter and his own former wife. Michal was taken from him after Saul became jealous of David (1 Samuel 25:44). Her return symbolizes David\'s legitimacy—he is not a usurper, but a king with a legal claim through marriage into Saul\'s house. The condition is shrewd: Abner must prove his commitment by recovering what belongs to David by right.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(
              14,
              'And David sent messengers to Ish-bosheth Saul&apos;s son, saying, Deliver me my wife Michal, which I espoused to me for an hundred foreskins of the Philistines.'
            ),
          ],
        },
        {
          kind: 'hebrew',
          id: 'michal-mika',
          title: 'Michal — "Who is Like God?"',
          script: 'מִיכַל',
          translit: '<strong>Mikal</strong> · Who is like God?',
          description:
            'Michal\'s name echoes the question at the heart of Israel\'s faith: "Who is like God?" She is the bridge between David and Saul\'s house, a woman caught between two kings, two worlds. Her return symbolizes the joining of what has been divided—not by her will, but by the will of men who own her.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(
              15,
              'And Ish-bosheth sent, and took her from her husband, even from Phaltiel the son of Laish.'
            ),
            plain(
              16,
              'And her husband went with her along weeping behind her to Bahurim. Then said Abner unto him, Go, return. And he returned.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'phaltiel-weeping',
          html:
            'The text does not look away from the human cost. Phaltiel, Michal\'s second husband, weeps as she is taken from him. He follows behind her, weeping, to Bahurim. The narrative gives us Phaltiel\'s grief—his love for Michal and his helplessness to keep her. Michal is no longer a person; she is a political possession, passed from one man to another. Abner tells Phaltiel to go back, and he obeys. There is sorrow in this restoration of David\'s political legitimacy, and the Bible does not hide it.',
        },
      ],
    },

    /* ─── 2 Samuel 3:17–21 — Abner Negotiates with Israel ───────── */
    {
      ref: '2 Samuel 3:17–21',
      title: 'Abner Brings All Israel',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(
              17,
              'And Abner had communication with the elders of Israel, saying, Ye sought for David in times past to be king over you:'
            ),
            plain(
              18,
              'Now then do it: for the Lord hath spoken of David, saying, By the hand of my servant David I will save my people Israel out of the hand of the Philistines, and out of the hand of all their enemies.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'abner-prophecy',
          html:
            'Abner appeals to the elders of Israel by invoking both their memory ("Ye sought for David") and God\'s word. He quotes a prophecy—not a known prophecy from earlier narrative, but a divine word that has circulated among the people and Abner himself has come to believe. The message is clear: God has spoken. David is the answer. The military general becomes a prophet, declaring God\'s intention to the nation.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(19, 'And Abner also spake in the ears of Benjamin: and Abner went also to speak in the ears of David in Hebron all that seemed good to Israel, and that the whole house of Benjamin.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'benjamin-abner',
          html:
            'Abner speaks particularly to Benjamin, Saul\'s own tribe. He is not simply declaring a fait accompli; he is persuading, negotiating, bringing consent from the very people who had most to lose—Saul\'s kinspeople. The fact that Benjamin is mentioned separately suggests that Abner has secured their agreement, a monumental political achievement.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(
              20,
              'And when Abner came to David to Hebron, and twenty men with him, David made Abner and the men that were with him a feast.'
            ),
            plain(
              21,
              'And Abner said unto David, I will arise and go, and will gather all Israel unto my lord the king, that they may make a league with thee, that thou mayest reign over all that thine heart desireth. And David sent Abner away in peace.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'feast-peace',
          html:
            'David receives Abner with a feast—a public ceremony that marks the end of war. Abner promises to deliver all Israel, from Dan to Beersheba. David sends him away in peace. The kingdom is about to be unified not through David\'s sword, but through the willing defection and diplomacy of the man who held Saul\'s kingdom together. Everything is set. The world is about to turn.',
        },
      ],
    },

    /* ─── 2 Samuel 3:22–27 — Joab Murders Abner ──────────────────── */
    {
      ref: '2 Samuel 3:22–27',
      title: 'Joab\'s Vengeance Breaks the Peace',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(
              22,
              'And, behold, the servants of David and Joab came from pursuing a troop, and brought in a great spoil: but Abner was not with David in Hebron; for he had sent him away in peace.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'abner-absent',
          html:
            'The narrative marks the moment carefully. Abner is gone. David has sent him away in peace. The kingdom is consolidating. Then Joab returns from a military campaign, bringing spoil—the fruits of war. He arrives to learn that Abner, the enemy general, has been at David\'s table.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(
              23,
              'And Joab came to the king, and said, What hast thou done? behold, Abner came unto thee; why is it that thou hast sent him away, and he is quite gone?'
            ),
            plain(
              24,
              'Thou knowest Abner the son of Ner, that he came to deceive thee, and to know thy going out and thy coming in, and to know all that thou doest.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'joab-accusation',
          html:
            'Joab challenges David. He accuses Abner of deception—of coming as a spy, to learn David\'s movements and routines. The accusation has logic; Abner has been David\'s enemy. But Joab is not truly concerned with David\'s safety. He speaks the language of security to cover what he is really feeling: rage over his brother Asahel, killed by Abner&apos;s hand. (See 2 Samuel 2:23.)',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(
              25,
              'And when Joab was come out from David, he sent messengers after Abner, and brought him again from the well of Sirah: but David knew it not.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'joab-messenger',
          html:
            'Joab does not challenge David directly. Instead, he sends messengers to bring Abner back, claiming David needs him. Abner, trusting in the treaty just made, returns to Hebron. David knows nothing of it. Joab is acting on his own authority, driven by blood vengeance.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(
              26,
              'And when Abner was returned to Hebron, Joab took him aside in the gate to speak with him quietly, and smote him there under the fifth rib, that he died, for the blood of Asahel his brother.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'joab-murder',
          html:
            'Joab takes Abner "aside in the gate to speak with him quietly"—the language of intimacy, of private conversation. Then he strikes him "under the fifth rib"—a killing blow. The text names the reason: "for the blood of Asahel his brother." Joab is exercising the ancient right of the blood avenger—but in a time of peace, in violation of David\'s covenant, and under cover of deception. It is murder masquerading as justice.',
        },
      ],
    },

    /* ─── 2 Samuel 3:28–37 — David\'s Response; the Lament ─────────── */
    {
      ref: '2 Samuel 3:28–37',
      title: 'The King\'s Innocence; the King\'s Powerlessness',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(
              28,
              'And afterward when David heard it, he said, I and my kingdom are guiltless before the Lord for ever from the blood of Abner the son of Ner:'
            ),
            plain(
              29,
              'Let it rest on the head of Joab, and on all his father&apos;s house; let there not fail from the house of Joab one that hath an issue, or that is a leper, or that leaneth on a staff, or that falleth on the sword, or that lacketh bread.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'david-innocence',
          html:
            'David immediately declares himself and his kingdom innocent. He curses Joab\'s house with plague, disease, weakness, and poverty—the opposite of blessing. David\'s response is not political calculation; it is a statement of principle. He says plainly: the blood is not of my doing. I am the anointed king, yet I am bound by the violence of my own men, and I cannot control it.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(
              30,
              'So Joab and Abishai his brother slew Abner, because he had killed their brother Asahel at Gibeon in the battle.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'asahel-debt',
          html:
            'The text confirms: Joab acted with his brother Abishai in blood vengeance for Asahel. It is a family matter—not treason, not rebellion, but kinship obligation. Yet it violates the king\'s peace. The narrative presents the tragedy in full: two goods in collision. Asahel\'s death deserves to be avenged. But not this way, not now, not by the king\'s commander against the king\'s guest.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(
              31,
              'And David said to Joab, and to all the people that were with him, Rend your clothes, and gird you with sackcloth, and mourn before Abner. And king David himself followed the bier.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'david-mourning',
          html:
            'David commands mourning—not as punishment, but as a public declaration. He wears sackcloth. He follows Abner\'s bier. He does not hide. He does not distance himself. The king grieves openly for the man his general killed. It is a political act. David is telling all Israel: this death was not of my doing. The blood is not on my hands.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(32, 'And they buried Abner in Hebron: and the king lifted up his voice and wept at the grave of Abner; and all the people wept.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'grave-weeping',
          html:
            'David weeps at Abner\'s grave. All the people weep. The text creates the image of a king publicly mourning the enemy who was about to become his ally. There is no celebration of a rival\'s death. There is only sorrow that it came to this—that a great man, who had made peace, has been taken by violence.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(
              33,
              'And the king lamented over Abner and said, Died Abner as a fool dieth?'
            ),
            plain(
              34,
              'Thy hands were not bound, nor thy feet put into fetters: as a man falleth before wicked men, so fellest thou.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'fool-death',
          html:
            'David\'s lament is a poem—and it is an accusation, though not of Abner. "Died Abner as a fool dieth?" No. His hands were not bound. He was not restrained, not imprisoned. He fell not in battle, not as an enemy, but as a victim "before wicked men." David is saying: Abner did not deserve this. He was slain by treachery, not in war. A great man has been murdered.',
        },

        {
          kind: 'christ',
          id: 'innocent-king',
          title: 'Christ Connection — The King Impeded by His Servants\' Violence',
          html:
            'David says, "I am this day weak, though anointed king; and these men the sons of Zeruiah be too hard for me" (v. 39). The anointed king is bound by the violence of his own commanders. He cannot control them. They act in blood vengeance, and he can only mourn and declare his innocence. The New Testament will speak of a King far greater—one whose disciples wanted to call down fire on His enemies (Luke 9:54), one who could have commanded armies to defend Him, yet did not. Jesus faced the same constraint: surrounded by men capable of violence, yet committed to a kingdom not of this world. When His disciples took up the sword, He rebuked them (John 18:10-11). But unlike David, Jesus never tolerated violence done in His name. The violence that would come in the church\'s history—the crusades, the inquisitions, the slaughter done by those claiming His authority—would be a betrayal of His person and teaching. The King whose kingdom is not of this world cannot be compromised by His servants\' sins, yet He grieves them. David\'s lament over Abner echoes forward to a grief far deeper: the King who will mourn every act of violence done in the name of His kingdom, knowing that it contradicts everything He came to teach.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(
              35,
              'And all the people came to cause David to eat meat while it was yet day: but David sware, saying, So do God to me, and more also, if I taste bread, or ought else, till the sun be down.'
            ),
            plain(36, 'And all the people took notice of it; and it pleased them: as whatsoever the king did pleased all the people.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'fast-approval',
          html:
            'David fasts. He refuses food until sunset. All the people witness his refusal, his grief. And the text says explicitly: it pleased them. His fasting, his mourning, his public declaration of innocence—all of it works. Israel sees a king who is truly grieved by what his men have done, who distances himself from their violence, who has not ordered Abner\'s death.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(
              37,
              'For all the people and all Israel understood that day that it was not of the king to slay Abner the son of Ner.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'understood-innocence',
          html:
            'The text moves from David\'s private grief to public knowledge: "All Israel understood that day that it was not of the king to slay Abner." David\'s mourning has worked. His innocence is established not by law, not by witnesses, but by the king\'s refusal to hide or justify what his men have done. He grieves openly. He declares the blood is not his. And Israel believes him.',
        },
      ],
    },

    /* ─── 2 Samuel 3:38–39 — The King Weak Though Anointed ────────── */
    {
      ref: '2 Samuel 3:38–39',
      title: 'The King\'s Lament: Weak Though Anointed',
      blocks: [
        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(
              38,
              'And the king said unto his servants, Know ye not that there is a prince and a great man fallen this day in Israel?'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'prince-fallen',
          html:
            'David speaks again, but now to his servants—to the people around him. He mourns not only Abner, but the loss to Israel itself. A prince has fallen. A great man—one who could have brought peace—is dead. The king sees the political consequence: the kingdom has lost a bridge, a kingmaker, a man of stature.',
        },

        {
          kind: 'scripture',
          chapter: 3,
          lines: [
            plain(
              39,
              'And I am this day weak, though anointed king; and these men the sons of Zeruiah be too hard for me: the Lord shall reward the doer of evil according to his wickedness.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'weak-anointed',
          html:
            'And here is the devastating statement: "I am this day weak, though anointed king." David has been anointed by the prophet Samuel. He has been chosen by God. Yet he is weak. His commanders—Joab and Abishai, "the sons of Zeruiah"—are too hard for him. They have their own code of honor, their own blood debts. The king cannot control them. The kingdom is being unified, but at the cost of David\'s own authority over his men. He does not seek revenge on Joab. Instead, he leaves vengeance to God: "The Lord shall reward the doer of evil according to his wickedness." The anointed king yields to divine justice.',
        },

        {
          kind: 'carry',
          html:
            'You may be in a position of authority—a parent, a leader, a teacher, a manager—and discover that you cannot control the people under you. You may have done everything right, made wise decisions, kept your own hands clean, and yet your people act without your permission, in their own strength, in blood debts of their own. The temptation is to pretend you had nothing to do with it, or to rage against your powerlessness. David does neither. He grieves. He mourns. He declares his innocence, not in secret, but in front of all Israel. And he leaves the ultimate judgment to God. If you are weak in your authority, it is not a sign that God has abandoned you. It is a sign that your authority is not finally yours. It belongs to God. Your job is to mourn what has been lost, to declare what you stand for, and to trust that God will set things right.',
        },

        {
          kind: 'reflection',
          id: 'weak-anointed-2',
          prompt:
            'Where in your life do you have responsibility but not control—authority that does not match your power? What would it look like to grieve that limitation, as David did, rather than pretending it doesn\'t exist or raging against it?',
        },
      ],
    },
  ],
};
