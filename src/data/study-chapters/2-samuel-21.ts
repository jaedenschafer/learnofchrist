import { hp, hy, hg, t, plain, verse, type RichChapterContent } from './types';

/**
 * 2 Samuel 21 — The Famine, the Gibeonites, Rizpah's Vigil, and the Giants
 *
 * Three years of famine strike David&apos;s kingdom. When David asks the Lord
 * why, he is told: Saul broke an oath to the Gibeonites. God remembers the
 * covenant that was violated. Seeking atonement, David calls the Gibeonites —
 * not Israel&apos;s typical enemies, but a people bound to Israel by ancient
 * oath. They demand seven of Saul&apos;s descendants. David delivers them; they
 * are hanged at Gibeah. But then comes Rizpah, a concubine of Saul&apos;s, who
 * spreads sackcloth on a rock and guards the bodies from the birds and beasts,
 * from harvest until rain. Her vigil moves David&apos;s heart. He honors the
 * bones of Saul and Jonathan, burying them properly. And God answers. Four
 * giants of Gath rise in the aftermath — each one eventually falls to David
 * and his men. The chapter teaches that hidden sin brings public judgment, that
 * covenants bind us across generations, that grief borne faithfully honors the
 * dead, and that the giants of evil, however tall they stand, will fall before
 * the Lord&apos;s anointed and his servants.
 */
export const SAMUEL_2_21: RichChapterContent = {
  bookSlug: '2-samuel',
  bookName: '2 Samuel',
  chapter: 21,

  estimatedMinutes: { beginner: 7, intermediate: 11, deep: 14 },
  intros: [
    'The book of 2 Samuel now turns inward, away from David&apos;s battles and glory, toward the hidden sickness in the kingdom. A famine has seized the land for three years. Crops fail. Animals sicken. The people suffer. But this is not random calamity. It is a judgment with a cause — a breach in the covenant sworn long ago.',
    'When David seeks the Lord, he learns the truth: Saul broke faith with the Gibeonites, an ancient people of Canaan with whom Israel had sworn a binding oath. Saul, in his zeal for Israel, tried to erase them. God saw. And now, decades later, God has not forgotten the bloodguilt that cries out from the ground. Atonement must be made. What unfolds is a chapter of restitution, of grief that will not stay hidden, and ultimately of covenant — both broken and restored.',
  ],

  bottomShare: {
    label: 'Share 2 Samuel 21',
    quote:
      'Rizpah spread sackcloth upon the rock, and neither suffered the birds of the air to rest on them by day, nor the beasts of the field by night. Her vigil teaches that grief borne faithfully honors what has been lost.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Samuel 21 · Study Guide',
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
    /* ─── 2 Samuel 21:1–2 — The Famine and Its Cause ──────────────────── */
    {
      ref: '2 Samuel 21:1–2',
      title: 'The Famine Reveals Hidden Sin',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 1,
              spans: [
                t('Then there was a '),
                hg('famine', 's21-famine-cause'),
                t(' in the days of David three years, year after year; and David enquired of the Lord. And the Lord answered, It is for Saul, and for his '),
                hy('bloody house', 's21-bloody-house'),
                t(', because he slew the Gibeonites.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And the king called the Gibeonites, and said unto them; (now the Gibeonites were not of the children of Israel, but of the remnant of the '),
                hg('Amorites', 's21-amorites'),
                t('; and the children of Israel had sworn unto them: and Saul sought to slay them in his zeal to the children of Israel and Judah.)'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's21-famine-cause',
          html:
            'The famine lasts three years — not a momentary hardship but a sustained plague. David seeks the Lord, and the answer comes: this is not natural drought. This is divine judgment. The calamity has a cause rooted in a previous king&apos;s act. God remembers. God sees. And God enforces the covenant even when the original oath-keeper is long dead.[res:sefaria-david-king][res:iaa-city-david][res:bible-odyssey-jerusalem]',
        },
        {
          kind: 'commentary',
          id: 's21-bloody-house',
          html:
            'Saul&apos;s "bloody house" — the text does not detail when or how Saul slew the Gibeonites, but the judgment is clear: he attacked a people under covenant protection. The bloodguilt attached itself to his house and to the land. In Scripture, bloodshed desecrates the ground (Numbers 35:33). The land will not yield its increase until the wrong is addressed.',
        },
        {
          kind: 'commentary',
          id: 's21-amorites',
          html:
            'The Gibeonites were not Israelites; they were Canaanites — Amorites — whom Joshua had encountered and deceived into a peace treaty (Joshua 9). Israel had sworn to them, and the oath was binding across the generations. Saul, in his zealous drive to unite the kingdom, trampled that covenant. This becomes the lesson of the chapter: covenants made by our ancestors bind us. We inherit both their promises and their debts.',
        },
        {
          kind: 'hebrew',
          id: 's21-kaphar',
          title: 'Kaphar — "To Cover" or "To Atone"',
          script: 'כָּפַר',
          translit: '<strong>Kaphar</strong> · to cover; to atone; to make expiation',
          description:
            'The word kaphar carries the sense of covering over, of wiping clean, of making restitution for a breach. Atonement is not forgetting the wrong; it is actively covering it, addressing it, restoring balance. David will seek to kaphar — to atone — for Saul&apos;s crime.',
        },
        {
          kind: 'carry',
          html:
            'We inherit more than names and property from those who came before us. We inherit their covenants, their broken promises, their debts. When you discover that someone in your family made a commitment or caused harm that still echoes today, what does it mean to take responsibility for what you did not do? David does not defend Saul; he faces the debt and pays it.',
        },
        {
          kind: 'reflection',
          id: 'famine-revelation',
          prompt: 'What hidden sin — in your family, your community, or your own life — has revealed itself through consequence? How did you recognize it?',
        },
      ],
    },

    /* ─── 2 Samuel 21:3–6 — Seeking Atonement from the Gibeonites ──────── */
    {
      ref: '2 Samuel 21:3–6',
      title: 'The Gibeonites Speak',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 3,
              spans: [
                t('Wherefore David said unto the Gibeonites, What shall I do for you? and wherewith shall I '),
                hp('make the atonement', 's21-atonement-ask'),
                t(', that ye may bless the Lord&apos;s people?'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And the Gibeonites said unto him, We will have no silver nor gold of Saul, nor of his house; neither for us shalt thou kill any man in Israel. And he said, What ye shall say, that will I do for you.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And they answered the king, The man that consumed us, and that devised against us that we should be destroyed from remaining in any of the coasts of Israel,'),
              ],
            },
            {
              number: 6,
              spans: [
                t('Let seven men of his sons be delivered unto us, and we will '),
                hg('hang them up', 's21-hang-them'),
                t(' unto the Lord in Gibeah of the Lord. And the king said, I will give them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's21-atonement-ask',
          html:
            'David opens the door to justice. "What shall I do for you?" He does not assume he knows what atonement requires. He asks. This is the posture of humility before those who have been wronged. And his question carries weight: "that ye may bless the Lord&apos;s people" — the lifting of the famine depends on the Gibeonites being satisfied, on the covenant being honored.',
        },
        {
          kind: 'commentary',
          id: 's21-hang-them',
          html:
            'The Gibeonites reject wealth or compensation. They ask for seven of Saul&apos;s sons — they ask for justice, not mercy. This is their demand: that the bloodguilt be paid with the blood of the house that shed it. David agrees without hesitation. This is not cruelty; this is covenant law. "Life for life, eye for eye, hand for hand, foot for foot" (Exodus 21:23–24). The innocent must not pay for the guilty; the guilty must answer.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes righting a wrong costs us something. David could have offered money, power, land — things he had. Instead, he gave what the wronged party asked for: recognition of the debt, acknowledgment that Saul&apos;s house must answer. In your own life, when you have caused harm (or inherited it), do you try to settle it cheaply, or do you pay what true atonement costs?',
        },
        {
          kind: 'reflection',
          id: 'gibeonites-speak',
          prompt: 'The Gibeonites ask for justice rather than compensation. What does true atonement look like to those who have been wronged?',
        },
      ],
    },

    /* ─── 2 Samuel 21:7–14 — Rizpah's Vigil and David&apos;s Honor ─────────── */
    {
      ref: '2 Samuel 21:7–14',
      title: 'Rizpah&apos;s Grief and David&apos;s Reverence',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 7,
              spans: [
                t('But the king spared Mephibosheth, the son of Jonathan the son of Saul, because of the Lord&apos;s oath that was between them, between David and Jonathan the son of Saul.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('But the king took the two sons of Rizpah the daughter of Aiah, whom she bare unto Saul, Armoni and Mephibosheth; and the five sons of Michal the daughter of Saul, whom she bare to Adriel the son of Barzillai the Meholathite:'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And he delivered them into the hands of the Gibeonites, and they hanged them in the hill before the Lord: and they fell all seven together in the beginning of barley harvest.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And Rizpah the daughter of Aiah took sackcloth, and spread it for her upon the rock, from the beginning of harvest until water dropped upon them out of heaven, and '),
                hg('suffered neither the birds of the air to rest on them by day, nor the beasts of the field by night', 's21-rizpah-vigil'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2-samuel-21-78mid-1',
          html:
            'The long reign of David moves toward its close. These final verses gather songs, lists, acts of valor, and the aging king&apos;s reflection. A reign is not one story—it is many, layered and long.',
        },
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 11,
              spans: [
                t('And it was told David what Rizpah the daughter of Aiah, the concubine of Saul, had done.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And David went and took the bones of Saul and the bones of Jonathan his son from the men of Jabesh-gilead, which had stolen them from the street of Beth-shan, where the Philistines had hanged them, when the Philistines had slain Saul in Gilboa:'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And he brought up from thence the bones of Saul and the bones of Jonathan his son; and they gathered the bones of them that were '),
                hp('hanged', 's21-hanged-gathered'),
                t('.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And they buried them in the country of Benjamin in Zelah, in the sepulchre of Kish his father: and they performed all that the king commanded. And after that God was entreated for the land.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's21-rizpah-vigil',
          html:
            'Then comes the voice that transforms the chapter. Rizpah — not a queen, not a wife, but a concubine of Saul — spreads sackcloth on a rock and guards her two dead sons and five grandsons from the birds and beasts. Night after night, from barley harvest until the rains come, she keeps her vigil. She does not let the bodies be desecrated. She does not rest. This is a mother&apos;s grief, bearing witness to the cost of her lover&apos;s sin. Her faithfulness to the dead, her refusal to abandon them to the wild, is an act of sacred love.',
        },
        {
          kind: 'carry',
          html:
            'Grief that goes public, that shows itself, that refuses to be forgotten — this is what moves kings. Rizpah did not demand justice or negotiate. She simply bore witness to loss. David, hearing of her vigil, is moved to honor. Is there a grief in your own life that has been waiting for you to bear witness to it? To say, "This matters. This was real. I will not forget"?',
        },
        {
          kind: 'reflection',
          id: 'rizpah-vigil-prompt',
          prompt: 'What cost did Rizpah pay to honor her dead? What does such faithfulness ask of us?',
        },
        {
          kind: 'commentary',
          id: 's21-hanged-gathered',
          html:
            'Moved by Rizpah&apos;s vigil, David goes further. He retrieves the bones of Saul and Jonathan from Jabesh-gilead — they had been stolen away and honored by men who remembered the old king with loyalty — and he gathers the bones of all seven who were hanged. He buries them with honor in the tomb of Kish, Saul&apos;s father. This is not a gesture of political rehabilitation. This is the recognition that even in judgment, even in the payment of bloodguilt, the dead must be treated with reverence. David has delivered seven to death for justice&apos;s sake. But he will not leave them abandoned.',
        },
        {
          kind: 'hebrew',
          id: 's21-qavurah',
          title: 'Qvurah — "Burial" or "Grave"',
          script: 'קְבוּרָה',
          translit: '<strong>Qvurah</strong> · burial; sepulcher; the act of caring for the dead',
          description:
            'In Scripture, qvurah — proper burial — is an act of covenant love. To bury someone is to honor them. To leave bodies unburied is the worst curse. David&apos;s decision to gather the remains and bury them properly, even those of Saul&apos;s sons who were hanged for his crime, shows that justice and honor need not exclude each other.',
        },
        {
          kind: 'christ',
          id: 's21-atone-connection',
          title: 'Christ Connection — Atonement and Covenant Remembering',
          html:
            'David seeks to make atonement (kaphar) for a sin committed by another. This pattern echoes the New Testament witness to Christ: "God commendeth his love toward us, in that, while we were yet sinners, Christ died for us" (Romans 5:8). Christ takes upon himself the debt of bloodguilt that belongs to us. And just as David gathered the remains of the dead and honored them with burial, so Christ&apos;s resurrection promises that the bodies of the redeemed will be honored, not left to decay. The atonement is both costly justice and tender reverence for what has been lost.',
        },
      ],
    },

    /* ─── 2 Samuel 21:15–17 — The Light of Israel Shall Not Be Quenched ── */
    {
      ref: '2 Samuel 21:15–17',
      title: 'The Light Cannot Be Quenched',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 15,
              spans: [
                t('Moreover the Philistines had yet war again with Israel; and David went down, and his servants with him, and fought against the Philistines: and David waxed faint.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And Ishbi-benob, which was of the sons of the giant, the weight of whose spear was three hundred shekels of brass in weight, he being girded with a new sword, thought to have slain David.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('But Abishai the son of Zeruiah succoured him, and smote the Philistine, and killed him. Then the men of David sware unto him, saying, Thou shalt go no more out with us to battle, that thou '),
                hp('quench not the light of Israel', 's21-light-quench'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's21-light-quench',
          html:
            'David, now an old man, still goes to battle. A giant, Ishbi-benob, nearly slays him. Abishai must rescue him. And then the men of David speak: "Thou shalt go no more out with us to battle, that thou quench not the light of Israel." The metaphor is stunning. David is not the king; he is the light. His life is the kingdom&apos;s light. To lose him in battle would be to extinguish that light. This is a moment of recognition that a leader&apos;s value lies not in his strength but in what he represents — the hope, the covenant promise, the continuity of God&apos;s people.',
        },
        {
          kind: 'carry',
          html:
            'You may not think of yourself as a light for others. But to those who depend on you — your family, your community, those who look to you for hope — your presence matters. Your survival matters. Not because you are invincible, but because you carry something sacred. Are you guarding your own light? Are you willing to step back from struggles that might extinguish what you are meant to preserve?',
        },
        {
          kind: 'reflection',
          id: 'light-israel-prompt',
          prompt: 'What light do you carry for those around you? What would it cost them if that light went out?',
        },
      ],
    },

    /* ─── 2 Samuel 21:18–22 — The Four Giants Fall ────────────────────── */
    {
      ref: '2 Samuel 21:18–22',
      title: 'Four Giants of Gath Are Slain',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 18,
              spans: [
                t('And it came to pass after this, that there was again a battle with the Philistines at Gob: then Sibbechai the Hushathite slew Saph, which was of the sons of the giant.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And there was again a battle in Gob with the Philistines, where Elhanan the son of Jaare-oregim, a Beth-lehemite, slew the brother of Goliath the Gittite, the staff of whose spear was like a weaver&apos;s beam.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And there was yet a battle in Gath, where was a man of great stature, that had on every hand six fingers and on every foot six toes, four and twenty in number; and he also was born to the giant.'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And when he defied Israel, Jonathan the son of Shimea the brother of David slew him.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('These four were born to the giant in Gath, and '),
                hy('fell by the hand of David', 's21-fell-by-hand'),
                t(', and by the hand of his servants.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's21-fell-by-hand',
          html:
            'Four giants rise from Gath — each one offspring of the giants David has long battled. Each one appears invincible: Saph, wielding the weight of ancient enmity; a brother of Goliath, the spear staff like a weaver&apos;s loom; a man with six fingers and six toes on every hand and foot, a figure of terrible strangeness and power. And yet, one by one, they fall. Not to David alone, but to David&apos;s men: Sibbechai, Elhanan, Jonathan (David&apos;s nephew). The text reminds us: "These four were born to the giant in Gath, and fell by the hand of David, and by the hand of his servants." The victory belongs to the anointed and his people together. The giants that seemed eternal fall.',
        },
        {
          kind: 'carry',
          html:
            'The giants do not disappear after 1 Samuel 17. They rise again — in your own battle against pride, fear, addiction, shame. Again and again, the same enemy returns. But again and again, if you stand with your people, with those who know you and believe in you, those giants can fall. You do not fight them alone. And they do not win simply because they are tall.',
        },
        {
          kind: 'reflection',
          id: 'giants-fall-prompt',
          prompt: 'What giant has faced you more than once? Who in your life has helped you stand when the enemy seemed too tall?',
        },
      ],
    },
  ],
};
