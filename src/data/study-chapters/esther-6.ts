import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * Esther 6 — The King&apos;s Sleepless Night
 *
 * The night before the second banquet, the king cannot sleep. He calls for the
 * book of records — the chronicles of the kingdom — to be read to him. As they
 * read, they find written: Mordecai had exposed a conspiracy against the king.
 * "What honour and dignity hath been done to Mordecai for this?" the king asks.
 * "There is nothing done for him," his servants reply. Just then, Haman enters
 * the outer court, ready to ask the king to hang Mordecai. But the king speaks
 * first: "What shall be done unto the man whom the king delighteth to honour?"
 * Haman, thinking the honor must be for himself, proposes elaborate honors: royal
 * apparel the king himself has worn, a horse the king has ridden, a proclamation
 * through the streets. "Thus shall it be done unto the man whom the king delighteth
 * to honour." The king says: "Make haste, and do even so to Mordecai the Jew...
 * let nothing fail." Haman, with his own hands, must lead Mordecai through the
 * city proclaiming his honor. Then he hastens home, head covered in mourning.
 * His wife Zeresh knows: if Mordecai be of the seed of the Jews, thou shalt not
 * prevail against him, but shalt surely fall before him.
 */
export const ESTHER_6: RichChapterContent = {
  bookSlug: 'esther',
  bookName: 'Esther',
  chapter: 6,

  estimatedMinutes: { beginner: 5, intermediate: 9, deep: 12 },
  intros: [
    'That night — the night before the second banquet, the night after Haman has ordered the gallows built — the king cannot sleep. A sleepless night is a small thing, a trivial detail. But in the economy of God, a sleepless king becomes the hinge upon which all of history turns.',
    'The king calls for the book of records to be read. As his servants read, they come upon an old entry: Mordecai, the Jew, had uncovered a conspiracy against the king. His life was saved because of Mordecai&apos;s loyalty. And nothing has been done to honor him. The king asks: what reward has been given? Nothing. And as he is still pondering this, Haman appears.',
    'What follows is one of the most exquisite reversals in Scripture. Haman comes to ask for Mordecai&apos;s death. The king, not knowing his request, asks him: "What shall be done unto the man whom the king delighteth to honour?" And Haman, thinking only of himself, describes the greatest honors he can imagine — honors that he will be forced to bestow on the very man he has come to destroy. By the end of the chapter, Haman goes home not to rest, but to mourn. His wife and friends see the truth: he will fall before Mordecai.',
  ],

  bottomShare: {
    label: 'Share Esther 6',
    quote:
      'The king could not sleep. And in his sleeplessness, he read of a debt unpaid. Then Haman came, not knowing that the king would ask him to honor the man whose death he sought. And the man he had come to destroy, Haman himself must lift up and proclaim.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: 'Esther 6 · Study Guide',
  },

  resources: [
    {
      id: 'theoi-herodotus',
      kind: 'archive',
      source: 'Theoi Classical Texts',
      label: 'Herodotus on Xerxes I',
      url: 'https://www.theoi.com/Text/HerodotusHistories.html',
      description: 'Herodotus accounts of Xerxes, Persian court intrigues, and royal authority.',
    },
  ],

  sections: [
    /* ─── Esther 6:1–5 — The Sleepless King ────────────────────────── */
    {
      ref: 'Esther 6:1–5',
      title: 'The King Cannot Sleep',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            plain(1, 'On that night could not the king sleep: therefore he commanded to bring the book of records of the chronicles; and they were read before the king.'),
            {
              number: 2,
              spans: [
                t('And it was found written, that Mordecai had told of Bigthana and Teresh, two of the king&apos;s chamberlains, the keepers of the door, who sought to lay hand on the king Ahasuerus.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And the king said, What honour and dignity hath been done to Mordecai for this? Then said the king&apos;s servants that ministered unto him, There is nothing done for him.'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And the king said, Who is in the court? Now Haman was come into the outward court of the king&apos;s house, to speak unto the king to hang Mordecai on the gallows that he had prepared for him.'),
              ],
            },
            {
              number: 5,
              spans: [
                t('And the king&apos;s servants said unto him, Behold, Haman standeth in the court. And the king said, Let him come in.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'esth6-sleepless',
          html:
            'The king cannot sleep. This is not insomnia from worry or fever, but the hand of God working in the ordinary — in a sleepless night, in a king&apos;s boredom, in the simple act of calling for the chronicles to be read. Nothing happens without purpose. And on this particular night, the records are opened to the entry that will change everything. [res:theoi-herodotus]',
        },
        {
          kind: 'hebrew',
          id: 'esth6-sefer-hazikronot',
          title: 'סֵפֶר הַזִּכְרֹנוֹת — Sefer ha-Zikronot (Book of Records)',
          script: 'סֵפֶר הַזִּכְרֹנוֹת',
          translit: '<strong>Sefer ha-zikronot</strong> · book of records; the written account of deeds remembered',
          description:
            'The book of records contains the deeds of those who have served the king faithfully. It is a record of debts unpaid, of gratitude not yet given, of loyalty that has been forgotten. Mordecai&apos;s act of service is written there — and now, on this sleepless night, it is read aloud before the king.',
        },
        {
          kind: 'commentary',
          id: 'esth6-mordecai-saved',
          html:
            'Years ago, Mordecai exposed a conspiracy against the king. Two of the king&apos;s own chamberlains, keepers of the door, sought to lay hands on him — to assassinate him. Mordecai discovered the plot and reported it. The king&apos;s life was saved. But this act of loyalty has not been rewarded. The king is only now learning of it. What might Mordecai have lost, what might Esther have gone through, if the king&apos;s sleep had not failed him this night?',
        },
        {
          kind: 'carry',
          html:
            'God is awake when we sleep. God remembers what we have forgotten. There are debts unpaid in the world, kindnesses done in secret that have never been acknowledged. And God keeps the record. In the night, when our own schemes seem foolproof, God is arranging a different story — reading an old entry in a book we thought was closed.',
        },
        {
          kind: 'reflection',
          id: 'sleepless-night',
          prompt: 'When have you seen God work through a seemingly small circumstance — a sleepless night, a chance encounter, a forgotten detail? How has God&apos;s timing surprised you?',
        },
      ],
    },

    /* ─── Esther 6:6–11 — The Question and the Answer ────────────────── */
    {
      ref: 'Esther 6:6–11',
      title: 'The Man Whom the King Delighteth to Honour',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 6,
              spans: [
                t('So Haman came in. And the king said unto him, What shall be done unto the man whom the king delighteth to honour? Now Haman thought in his heart, To whom would the king delight to do honour more than to myself?'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And Haman answered the king, For the man whom the king delighteth to honour,'),
              ],
            },
            {
              number: 8,
              spans: [
                t('Let the royal apparel be brought which the king useth to wear, and the horse that the king rideth upon, and the crown royal which is set upon his head:'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And let this apparel and horse be delivered to the hand of one of the king&apos;s most noble princes, that he may array the man whom the king delighteth to honour, and bring him on horseback through the street of the city, and proclaim before him, Thus shall it be done to the man whom the king delighteth to honour.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('Then the king said to Haman, Make haste, and take the apparel and the horse, as thou hast said, and do even so to Mordecai the Jew that sitteth at the king&apos;s gate: let nothing fail of all that thou hast spoken.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('So Haman took the apparel and the horse, and arrayed Mordecai, and brought him on horseback through the street of the city, and proclaimed before him, Thus shall it be done unto the man whom the king delighteth to honour.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'esth6-haman-thought',
          html:
            'Haman enters the king&apos;s presence, ready to ask for Mordecai&apos;s death. But the king speaks first. And in that moment, Haman&apos;s vanity answers the question. "To whom would the king delight to do honour more than to myself?" Haman cannot imagine anyone more worthy of honor than himself. So he describes the greatest honors he can imagine, fully believing they will be for him.',
        },
        {
          kind: 'hebrew',
          id: 'esth6-yaqar',
          title: 'יָקָר — Yaqar (Honor, Weightiness)',
          script: 'יָקָר',
          translit: '<strong>Yaqar</strong> · honor; weightiness; value; dignity',
          description:
            'To honor someone is to give them weight, to recognize their value, to place them in a position of dignity. Haman proposes that the man of honor be dressed in the king&apos;s own apparel, ride the king&apos;s own horse, be proclaimed throughout the city. It is the greatest honor a subject can receive. And Haman is about to discover that it is being given to his enemy.',
        },
        {
          kind: 'commentary',
          id: 'esth6-royal-apparel',
          html:
            'Haman proposes: let the man wear the king&apos;s own apparel, ride the king&apos;s own horse, wear the crown royal upon his head. Let a noble prince array him and proclaim throughout the city: "Thus shall it be done unto the man whom the king delighteth to honour." In these honors, Haman is describing the pinnacle of earthly favor — to wear what the king wears, to ride what the king rides, to be proclaimed as favored above all others.',
        },
        {
          kind: 'commentary',
          id: 'esth6-haman-commanded',
          html:
            'And then the king says: "Make haste, and do even so to Mordecai the Jew." Haman, standing before the king, hearing his own words turned against him, must obey. He must take the royal apparel, array Mordecai in it, lead him on the king&apos;s own horse through the city, and proclaim before him: "Thus shall it be done unto the man whom the king delighteth to honour." With his own hands, Haman must lift up the man he came to destroy.',
        },
        {
          kind: 'carry',
          html:
            'Our pride often blinds us to the truth. We assume that the honors we seek, the positions we covet, the recognition we demand — these are surely meant for us. We cannot imagine them going to another. And so we describe our own destruction without realizing it, ask for our own judgment without knowing it. What honors are you demanding that might be given to another? What if God has already decided who is truly worthy?',
        },
        {
          kind: 'reflection',
          id: 'haman-honors',
          prompt: 'Haman described great honors, assuming they were for himself. When have you made assumptions about what you deserve or what God intends? How did God surprise you with a different answer?',
        },
      ],
    },

    /* ─── Esther 6:12–14 — Haman's Mourning ───────────────────────── */
    {
      ref: 'Esther 6:12–14',
      title: 'The Fall Begins',
      blocks: [
        {
          kind: 'scripture',
          chapter: 6,
          lines: [
            {
              number: 12,
              spans: [
                t('And Mordecai came again to the king&apos;s gate. But Haman hasted to his house mourning, and having his head covered.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And Haman told Zeresh his wife and all his friends every thing that had befallen him. Then said his wise men and Zeresh his wife unto him, If Mordecai be of the seed of the Jews, before whom thou hast begun to fall, thou shalt not prevail against him, but shalt surely fall before him.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And while they were yet talking with him, came the king&apos;s chamberlains, and hasted to bring Haman unto the banquet that Esther had prepared.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'esth6-mourning',
          html:
            'Haman leaves the king&apos;s presence not exalted, but mourning. His head is covered — the gesture of one in deepest shame and sorrow. He has just been forced to honor the man he meant to destroy. He has proclaimed Mordecai&apos;s elevation with his own voice. The triumph he felt last night has turned to ashes.',
        },
        {
          kind: 'commentary',
          id: 'esth6-wife-counsel',
          html:
            'Haman tells his wife Zeresh everything that has happened. And Zeresh, whom we heard advising him to build the gallows just hours ago, now speaks a different word. "If Mordecai be of the seed of the Jews, before whom thou hast begun to fall, thou shalt not prevail against him, but shalt surely fall before him." She sees the truth: Mordecai is a Jew. And the Jews have a God who fights for them. The fall has already begun.',
        },
        {
          kind: 'commentary',
          id: 'esth6-haman-to-feast',
          html:
            'Even as they speak, the king&apos;s chamberlains arrive to bring Haman to Esther&apos;s second banquet. He must go to the feast where Esther will reveal his crimes, where the king will learn of his plot to destroy the Jews. Haman goes not to be honored, but to be condemned. And he still does not know it.',
        },
        {
          kind: 'christ',
          id: 'esth6-christ-eye',
          title: 'Christ Connection — The King&apos;s Sleepless Eye',
          html:
            'The Psalmist sings, "He that keepeth thee will not slumber. Behold, he that keepeth Israel shall neither slumber nor sleep" (Psalm 121:4–5). The King—whether earthly or heavenly—does not sleep. While we sleep, while we rest, while we scheme, God is awake. God is reading the records of what we have done. God is arranging the circumstances that will bring forth justice. The sleepless night of the earthly king becomes the type of God&apos;s vigilance over His people. He sees what we cannot see. He remembers what we have forgotten. And in His sleeplessness, He moves to preserve and protect.',
        },
        {
          kind: 'christ',
          id: 'esth6-proud-exalted',
          title: 'Christ Connection — The Proud Forced to Exalt the Humble',
          html:
            'The New Testament speaks of a reversal that comes through Christ: "Wherefore God also hath highly exalted him, and given him a name which is above every name: That at the name of Jesus every knee should bow, of things in heaven, and things in earth, and things under the earth; And that every tongue should confess that Jesus Christ is Lord, to the glory of God the Father" (Philippians 2:9–11). Haman forced to array and proclaim Mordecai is a shadow of this cosmic reversal: the one who plotted destruction becomes the herald of the deliverer&apos;s honor. What the enemy meant for harm, God turns to the exaltation of His chosen one.',
        },
        {
          kind: 'carry',
          html:
            'When we are small, when we are overlooked, when we are threatened with destruction — God is not sleeping. The records are kept. The debts are remembered. And the God who can turn the heart of a king in a sleepless night, who can make our enemies proclaim our honor, can move heaven and earth for those who call upon Him.',
        },
        {
          kind: 'reflection',
          id: 'god-awake',
          prompt: 'Mordecai sat at the king&apos;s gate, not knowing that the king would soon honor him, that his enemy would be forced to exalt him. In what situation are you waiting, unsure of how God will work? How does Mordecai&apos;s story speak to your faith?',
        },
      ],
    },
  ],
};
