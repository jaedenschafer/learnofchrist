import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Ruth[res:bibleodyssey-ruth-boaz-marry] 4 — Redemption and Lineage to David[res:sefaria-david-genealogy]
 *
 * Boaz as the kinsman-redeemer; the gate as ancient courtroom; Ruth's place
 * in the genealogy of Christ; restoration of Naomi from empty to full.
 */
export const RUTH_4: RichChapterContent = {
  bookSlug: 'ruth',
  bookName: 'Ruth',
  chapter: 4,

  estimatedMinutes: { beginner: 7, intermediate: 10, deep: 12 },
  intros: [
    'Ruth 4 resolves every thread of the story. Boaz goes to the gate — the ancient place where property is transferred and disputes are settled — to claim his right to redeem Ruth and her dead husband&apos;s land. But there is a nearer kinsman who holds the first right. The drama turns on a single moment: will he redeem, or will he refuse?',
    'The chapter ends not with Ruth and Boaz, but with a baby named Obed[res:intertextual-ruth-matthew-messiah]. The women announce to Naomi that a son is born to her — and the genealogy that closes the book reaches all the way to David, planting a royal line through the despised foreigner. For Christians, the line does not stop at David. It reaches forward to another child born to an unlikely family, and to redemption that would cost far more than a field.',
  ],

  opener: {
    matchArtist: /tissot/i,
    matchTitle: /ruth/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share Ruth 4',
    quote:
      'Boaz redeemed the land and took Ruth as his wife. She bore a son named Obed, father of Jesse, grandfather of King David. The despised Moabitess became the great-grandmother of Israel&apos;s greatest king — and grandmother of the Messiah.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Ruth 4 · Study Guide',
  },

  sections: [
    /* ─── Ruth 4:1–8 — The Gate and the Nearer Kinsman ───────────────── */
    {
      ref: 'Ruth 4:1–8',
      title: 'The Gate and the Nearer Kinsman',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 1,
              spans: [
                t('Then went Boaz up to the gate, and '),
                hg('sat him down there', 'c-gate-court'),
                t(': and, behold, the kinsman of whom Boaz spake came by; unto whom he said, Ho, such a one! turn aside, sit down here. And he turned aside, and sat down.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-gate-court',
          html:
            'The gate of the city was Israel&apos;s ancient courthouse. All property transfers, disputes, and contractual witnesses happened there in public. When Boaz takes a seat at the gate, he is beginning a legal proceeding that will be heard and judged by the community.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 2,
              spans: [
                t('And he took ten men of the elders of the city, and said, Sit ye down here. And they sat down.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And he said unto the kinsman, Naomi, that is come again out of the country of Moab, selleth a parcel of land, which was our brother Elimelech&apos;s:'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And I thought to advertise thee, saying, Buy it before the inhabitants, and before the elders of my people. If thou wilt redeem it, redeem it: but if thou wilt not redeem it, then tell me, that I may know: for there is none to redeem it beside thee; and I am after thee.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-gaal',
          title: 'Gaal — &ldquo;to redeem&rdquo;',
          script: 'גָּאַל',
          translit: '<strong>ga&apos;al</strong> · to redeem, buy back; to act as kinsman-redeemer',
          description:
            'The kinsman-redeemer in Israel&apos;s law had the right — and responsibility — to buy back family land sold in hardship, and to marry the widow of a dead brother to raise up his name. The word carries the weight of family honor restored.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 5,
              spans: [
                t('And the kinsman said, I will redeem it.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 6,
              spans: [
                t('Then said Boaz, What day thou buyest the field of the hand of Naomi, thou must buy it also of '),
                hp('Ruth the Moabitess', 'ruth-named'),
                t(', the wife of the dead, to '),
                hg('raise up the name of the dead', 'c-name-raise'),
                t(' upon his inheritance.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ruth-named',
          html:
            'The other kinsman did not know Ruth was part of the transaction. She was not visible in his calculation of profit and loss. The moment Boaz names her — <em>Ruth the Moabitess, the wife of the dead</em> — the kinsman sees the full cost.',
        },
        {
          kind: 'commentary',
          id: 'c-name-raise',
          html:
            'To &ldquo;raise up the name&rdquo; means to father a child who will inherit the dead man&apos;s property and perpetuate his line. Any son born to Ruth would legally be Mahlon&apos;s heir, not the kinsman&apos;s — which means the kinsman would buy the field but lose its inheritance to a child not his own.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 7,
              spans: [
                t('And the kinsman said, '),
                hy('I cannot redeem it', 'c-refusal'),
                t(' for myself, lest I mar mine own inheritance: redeem thou my right to thyself; for I cannot redeem it.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-refusal',
          html:
            'The kinsman draws back. His calculation is clear: the field might enrich his estate, but marrying Ruth and raising up Mahlon&apos;s heir will dilute his own inheritance by dividing it between his natural children and a child of obligation. He chooses his own security. His refusal opens the door for Boaz to step in.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 8,
              spans: [
                t('Now '),
                t('this was the manner in former time in Israel'),
                t(' concerning redeeming and concerning changing, for to confirm all things; a man plucked off his '),
                hy('shoe', 'hebrew-na-al'),
                t(', and gave it to his neighbour: and this was a testimony in Israel.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-na-al',
          title: 'Na&apos;al — &ldquo;shoe&rdquo;',
          script: 'נַ֫עַל',
          translit: '<strong>na&apos;al</strong> · a sandal or shoe; symbol of ownership and transfer',
          description:
            'The removal of the shoe was a public gesture of surrender — a man taking off his shoe and handing it over was saying, <em>I relinquish my claim.</em> The sandal remained in Israelite memory as a witness to the transaction.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 9,
              spans: [
                t('Therefore the kinsman said unto Boaz, Buy it for thee. So he drew off his shoe.'),
              ],
            },
          ],
        },
        {
          kind: 'carry',
          html:
            'The kinsman wanted the blessing without the cost. Boaz pays the full price — the field and the marriage — without calculating the cost to himself. That difference defines everything that follows.',
        },
        {
          kind: 'reflection',
          id: 'kinsman-refusal',
          prompt:
            'Where are you tempted to claim a blessing without accepting its weight? What would change if you accepted the full cost?',
        },
      ],
    },

    /* ─── Ruth 4:9–12 — Boaz Redeems ──────────────────────────────────── */
    {
      ref: 'Ruth 4:9–12',
      title: 'Boaz Redeems',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 9,
              spans: [
                t('And Boaz said unto the elders, and unto all the people, Ye are witnesses this day, that I have bought all that was Elimelech&apos;s, and all that was Chilion&apos;s and Mahlon&apos;s, of the hand of Naomi.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Moreover '),
                hp('Ruth the Moabitess', 'ruth-wife'),
                t(', the wife of Mahlon, have I purchased to be my wife, to '),
                hg('raise up the name of the dead', 'c-boaz-raise'),
                t(' upon his inheritance, that the name of the dead be not cut off from among his brethren, and from the gate of his place: '),
                hg('ye are witnesses this day', 'c-witnesses'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'ruth-wife',
          html:
            'Boaz announces it publicly: <em>Ruth the Moabitess.</em> Not hiding her foreigner status, not erasing her past, not pretending she is anyone other than who she is. He names her fully and claims her fully. This is not ashamed redemption.',
        },
        {
          kind: 'commentary',
          id: 'c-boaz-raise',
          html:
            'Boaz speaks his intention aloud: he will marry Ruth <em>to raise up the name of the dead.</em> A son born to them will legally be Mahlon&apos;s heir, perpetuating the dead man&apos;s line. Boaz accepts this without the kinsman&apos;s hesitation.',
        },
        {
          kind: 'commentary',
          id: 'c-witnesses',
          html:
            'Four times in Ruth 4 someone speaks: &ldquo;Ye are witnesses.&rdquo; Boaz is not redeeming in the dark. Every elder hears, every citizen sees, the covenant is sealed before the community.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 11,
              spans: [
                t('And all the people that were in the gate, and the elders, said, We are witnesses. The Lord make the woman that is come into thine house like Rachel and like Leah, which two did build the house of Israel: and do thou worthily in Ephratah, and be famous in Bethlehem:'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And let thy house be like the house of Pharez, whom Tamar bare unto Judah, of the seed which the Lord shall give thee of this young woman.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-blessing',
          html:
            'The elders pronounce a blessing: may Ruth be like Rachel and Leah, the ancestral mothers of Israel. And may this house be like the house of Pharez — Judah&apos;s son born of Tamar, another foreigner and widow in the lineage. The blessing plants Ruth firmly in the genealogy of the kingdom.',
        },
        {
          kind: 'christ',
          id: 'christ-redeemer',
          title: 'Christ Connection — The Redeemer Who Pays All',
          html:
            'Boaz is a type of Christ. He sees the broken and despised, pays what no one else will pay, refuses to hide what tradition would hide, and raises up new life where there was only grief. He takes a Moabitess as his own — one whom the law would exclude, whom the nation would despise, whom Israel was commanded never to admit to the assembly (Deut. 23:3). Yet he not only redeems her, he exalts her in public, before all the elders. Jesus does the same: He comes for the lost, the broken, the ones no one else will claim. He announces it in public. He makes us His Bride. He names us His own.',
        },
        {
          kind: 'carry',
          html:
            'If you have ever thought your past disqualifies you, that your origin is too foreign, that you are too damaged for redemption — the story of Ruth answers you. Boaz did not redeem her <em>despite</em> being a Moabitess. He redeemed her, and then <em>announced</em> it. Jesus does this in your life. He does not hide you. He does not apologize for you. He does not erase your story. He simply says, in front of God and everyone: &ldquo;This is mine. This is My beloved. I paid the full price. Let all of heaven and earth know it.&rdquo;',
        },
        {
          kind: 'reflection',
          id: 'redemption-public',
          prompt:
            'What part of your story do you wish was hidden? What would it mean to believe that God announces your redemption without shame?',
        },
      ],
    },

    /* ─── Ruth 4:13–17 — Obed Born to Naomi ──────────────────────────── */
    {
      ref: 'Ruth 4:13–17',
      title: 'Obed Born to Naomi',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 13,
              spans: [
                t('So Boaz took Ruth, and she was his wife: and when he went in unto her, the Lord gave her conception, and she bare a son.'),
              ],
            },
          ],
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 14,
              spans: [
                t('And the women said unto Naomi, Blessed be the Lord, which hath not left thee this day without a kinsman, that his name may be famous in Israel.'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And he shall be unto thee a restorer of thy life, and a nourisher of thine old age: for thy daughter in law, which loveth thee, which is '),
                hy('better to thee than seven sons', 'c-better-seven'),
                t(', hath born him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-better-seven',
          html:
            'Seven is the Bible&apos;s number of completeness and perfection. To say Ruth is &ldquo;better than seven sons&rdquo; is to say she is beyond measure, beyond the norm of blessing. The women are proclaiming that Ruth — the foreigner, the widow, the one with nothing — is now the source of Naomi&apos;s greatest joy.',
        },
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 16,
              spans: [
                t('And Naomi took the child, and laid it in her bosom, and became nurse unto it.'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And the women her neighbours gave it a name, saying, There is a son born to Naomi; and they called his name '),
                hg('Obed', 'hebrew-obed'),
                t(': he is the father of Jesse, the father of David.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-obed',
          title: 'Obed — &ldquo;servant&rdquo;',
          script: 'עוֹבֵד',
          translit: '<strong>&apos;Obed</strong> · servant, worshiper',
          description:
            'The child is named not by Boaz or Ruth, but by the women of Bethlehem. They name him Obed — servant — and the women declare to Naomi that a son is born to <em>her</em>. The baby born to Ruth is received as the answer to Naomi&apos;s emptiness.',
        },
        {
          kind: 'carry',
          html:
            'Look at the arc of Naomi in Ruth. She enters the story calling herself Mara — bitter, emptied by loss. She ends it nursing her grandson in her bosom, the women of Bethlehem announcing a son born to her. This is not sentiment; it is resurrection. Sometimes God does not take away the hard things. Sometimes He fills the spaces they left. A child born to Ruth becomes the restorer of Naomi&apos;s life. Look back at your own story. Where has something lost been replaced by something greater?',
        },
        {
          kind: 'reflection',
          id: 'empty-to-full',
          prompt:
            'Where did you feel most empty? How has God secretly been filling that space with something you did not expect?',
        },
      ],
    },

    /* ─── Ruth 4:18–22 — The Genealogy Reaching to David ──────────────── */
    {
      ref: 'Ruth 4:18–22',
      title: 'The Genealogy Reaching to David',
      blocks: [
        {
          kind: 'scripture',
          chapter: 4,
          lines: [
            {
              number: 18,
              spans: [
                t('Now these are the generations of Pharez: Pharez begat Hezron,'),
              ],
            },
            {
              number: 19,
              spans: [
                t('And Hezron begat Ram, and Ram begat Amminadab,'),
              ],
            },
            {
              number: 20,
              spans: [
                t('And Amminadab begat Nahshon, and Nahshon begat Salmon,'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And Salmon begat Boaz, and Boaz begat Obed,'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And Obed begat Jesse, and Jesse begat David.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-genealogy',
          html:
            'The book of Ruth closes not with Ruth and Boaz, not with their love story, but with a genealogy that leads to one name: David. This is the point. Ruth was not written to tell us about a beautiful marriage in Bethlehem. It was written to answer a question: How did a despised foreigner come to be the great-grandmother of Israel&apos;s greatest king?',
        },
        {
          kind: 'christ',
          id: 'christ-lineage',
          title: 'Christ Connection — Ruth in the Genealogy of the King',
          html:
            'Open Matthew 1:5. Among all the hundreds of women in the genealogy of Jesus, Matthew names four: Tamar, Rahab, Ruth, and Bathsheba. Three of them are outsiders — a Canaanite woman, a harlot from Jericho, a Moabitess. One is involved in sexual scandal. Matthew is not hiding these names. He is announcing them. The Messiah&apos;s line comes not through the pure and the powerful, but through the despised, the broken, the ones no one expected. The genealogy does not run backward from Jesus to Adam. Matthew runs it forward from Abraham through David to Jesus — and Ruth&apos;s son Obed is in that line. The King came from the foreigner. The Messiah came through the despised. And in Matthew 1:5, the text does not let us forget it.',
        },
        {
          kind: 'carry',
          html:
            'If you have ever believed that your family does not belong, that your outsider status disqualifies you, that the best things in God&apos;s kingdom are reserved for the already-acceptable — Ruth tells you otherwise. A Moabitess sits in the genealogy of the King. Not hidden. Not erased. Named. And the baby born to her does not just inherit a field. He fathers the royal line. Your bloodline, your weakness, your outsider story — in God&apos;s hands it does not ruin the future. It becomes the future.',
        },
        { kind: 'divider' },
        {
          kind: 'reflection',
          id: 'genealogy-hope',
          prompt:
            'What seems disqualified in your life or family that God might be quietly weaving into His story?',
        },
      ],
    },
  ],

  resources: [
    {
      id: 'sefaria-david-genealogy',
      kind: 'study',
      source: 'Sefaria',
      label: 'The Line to David',
      url: 'https://www.sefaria.org/Ruth.4',
      description: 'Ruth&apos;s place in Israel&apos;s royal genealogy and the significance of her lineage.',
    },
    {
      id: 'intertextual-ruth-matthew-messiah',
      kind: 'study',
      source: 'Intertextual Bible',
      label: 'From Ruth to Jesus: The Lineage of Redemption',
      url: 'https://intertextual.org/Ruth/4',
      description: 'The narrative arc from exile, faithfulness, and redemption to the coming Messiah.',
    },
  ]
};