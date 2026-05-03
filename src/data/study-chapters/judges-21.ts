import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * Judges 21 — The Final Chapter of Judges
 *
 * The book closes on a horror story of moral reasoning gone wrong. The men of
 * Israel had sworn they would not give their daughters to Benjamin as wives,
 * yet they repented for Benjamin and sought to repair the tribe's near-extinction
 * through a massacre at Jabesh-gilead and the orchestrated abduction of young women
 * from a feast at Shiloh. Every attempt to fix a sin creates worse sins. And the
 * chapter ends with the same refrain the book began with: "In those days there was
 * no king in Israel: every man did that which was right in his own eyes."
 *
 * The ground is prepared for the monarchy — and ultimately, for Christ the King.
 */
export const JUDGES_21: RichChapterContent = {
  bookSlug: 'judges',
  bookName: 'Judges',
  chapter: 21,

  estimatedMinutes: { beginner: 6, intermediate: 9, deep: 12 },
  intros: [
    'Judges 21 is the final chapter of the book, and it reads as a tragedy. The men of Israel had sworn at Mizpeh that none of them would give his daughter unto Benjamin to wife. But when they learned that Benjamin was nearly extinct — cut off from Israel because of the depravity at Gibeah — they repented. Yet every attempt to undo the damage through human wisdom produced only horror: the massacre of Jabesh-gilead, the orchestrated abduction of daughters from Shiloh. Two wrongs, compounded into something worse.',
    'The chapter closes with the same refrain it opened with: "In those days there was no king in Israel: every man did that which was right in his own eyes." It is the refrain of the entire book, repeated like a funeral bell. This is exactly why Israel will later demand a king (1 Samuel 8). The ground is prepared for the monarchy — and for those of us who read beyond Israel\'s kings, the ground is prepared for Christ, the King whose rule alone produces wisdom.',
  ],

  sections: [
    /* ─── Judges 21:1–4 — The Weeping at Mizpeh ───────────────────────────── */
    {
      ref: 'Judges 21:1–4',
      title: 'The Oath and the Repentance',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 1,
              spans: [
                t('Now the men of Israel had sworn in Mizpeh, saying, '),
                hp('There shall not any of us give his daughter unto Benjamin to wife', 'oath-sworn'),
                t('.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And the people came to the house of God, and abode there till even before God; and lifted up their voices, and wept sore;'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And said, O Lord God of Israel, why is this come to pass in Israel, that there should be to day one tribe lacking in Israel?'),
              ],
            },
            {
              number: 4,
              spans: [
                t('And it came to pass on the morrow, that the people rose early, and built there an altar, and offered burnt offerings and peace offerings.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'oath-sworn',
          html: 'The oath was made in the heat of judgment against Benjamin\'s crime at Gibeah. It was a rash oath — the kind that Numbers 30 addresses. The men of Israel swore that not one of them would give his daughter unto Benjamin as a wife. But now, having nearly destroyed the tribe entirely, they repented. Yet their repentance is disconnected from God\'s wisdom. They weep and build altars, but the solutions they devise produce new sins.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-shevuah',
          title: 'Shevuah — "oath"',
          script: 'שְׁבוּעָה',
          translit: '<strong>shevuah</strong> · a binding promise; seven-fold binding',
          description: 'The Hebrew root connects to "seven" — an oath seals something seven times over. These oaths were meant to be unbreakable. But unbreakable oaths made in anger often become instruments of greater injustice.',
        },
        {
          kind: 'commentary',
          id: 'c-repentance-disconnect',
          html: 'They wept and offered sacrifices. The emotional and religious posture was real. But repentance that is not tethered to God\'s actual guidance produces grotesque solutions. The pattern is timeless: people feel genuinely sorry for a mistake, yet the remedy they devise creates something worse.',
        },
        {
          kind: 'reflection',
          id: 'oath-repent',
          prompt: 'Have you ever made a rash decision that later created a bind, then tried to fix it in ways that made things worse? What would true repentance have looked like?',
        },
      ],
    },

    /* ─── Judges 21:5–14 — The Massacre of Jabesh-gilead ──────────────────── */
    {
      ref: 'Judges 21:5–14',
      title: 'The Massacre at Jabesh-gilead',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 5,
              spans: [
                t('And the children of Israel said, Who is there among all the tribes of Israel that came not up with the congregation unto the Lord? For they had made a great oath that whosoever came not up to the Lord to Mizpeh should surely be put to death.'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And the children of Israel repented them for Benjamin their brother, saying, There is one tribe cut off from Israel this day.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('How shall we do for wives for them that remain, seeing we have sworn by the Lord that we will not give them of our daughters to wives?'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And they said, What one is there of the tribes of Israel that came not up to Mizpeh to the Lord? And, behold, there came none to the camp from Jabesh-gilead to the assembly.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('For the people were numbered, and, behold, there were none of the inhabitants of Jabesh-gilead there.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('And the congregation sent thither twelve thousand men of the valiantest, and commanded them, saying, Go and smite the inhabitants of Jabesh-gilead with the edge of the sword, with the women and the children.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('And this is the thing that ye shall do, Ye shall utterly destroy every male, and every woman that hath lain by man. But all the women children, that have not known a man by lying with him, keep alive for yourselves.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And they found among the inhabitants of Jabesh-gilead four hundred young virgins, which had not known man by lying with any male: and they brought them unto the camp to Shiloh, which is in the land of Canaan.'),
              ],
            },
            {
              number: 13,
              spans: [
                t('And the whole congregation sent some to speak to the children of Benjamin that were in the rock Rimmon, and to call peaceably unto them.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And Benjamin came again at that time; and they gave them the women which they had saved alive of the women of Jabesh-gilead: and yet so they sufficed them not.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-jabesh',
          html: 'Jabesh-gilead is singled out as the town that did not attend the assembly at Mizpeh. So the congregation sends twelve thousand men of the "valiantest" to destroy it utterly — to kill every male and every woman who has lain with a man, but to preserve the four hundred young virgins for Benjamin. This is genocide in the service of a "solution." Two wrongs have now multiplied into something horrific.',
        },
        {
          kind: 'commentary',
          id: 'c-jabesh-later',
          html: 'Jabesh-gilead appears again in 1 Samuel 11, where King Saul rescues it from the Ammonites. The town\'s history is scarred. A massacre to solve one problem becomes the very wound that the newly crowned king must address.',
        },
        {
          kind: 'reflection',
          id: 'jabesh-horror',
          prompt: 'The logic in these verses — punish one town to save another — was taken as righteous action. What blindness does human reasoning fall into when it is disconnected from God\'s voice?',
        },
      ],
    },

    /* ─── Judges 21:15–24 — The Abduction at Shiloh ────────────────────────── */
    {
      ref: 'Judges 21:15–24',
      title: 'The Abduction at Shiloh\'s Feast',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 15,
              spans: [
                t('And the people repented them for Benjamin, because that the Lord had made a breach in the tribes of Israel.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('Then the elders of the congregation said, How shall we do for wives for them that remain, seeing the women are destroyed out of Benjamin?'),
              ],
            },
            {
              number: 17,
              spans: [
                t('And they said, There must be an inheritance for them that be escaped of Benjamin, that a tribe be not destroyed out of Israel.'),
              ],
            },
            {
              number: 18,
              spans: [
                t('Howbeit we may not give them wives of our daughters: for the children of Israel have sworn, saying, Cursed be he that giveth a wife to Benjamin.'),
              ],
            },
            {
              number: 19,
              spans: [
                t('Then they said, Behold, there is a feast of the Lord in Shiloh yearly '),
                hy('in a place which is on the north side of Beth-el, on the east side of the highway that goeth up from Beth-el to Shechem, and on the south of Lebonah', 'c-shiloh-location'),
                t('.'),
              ],
            },
            {
              number: 20,
              spans: [
                t('Therefore they commanded the children of Benjamin, saying, '),
                hp('Go and lie in wait in the vineyards', 'c-abduction'),
                t(';'),
              ],
            },
            {
              number: 21,
              spans: [
                t('And see, and, behold, if the daughters of Shiloh come out to dance in dances, then come ye out of the vineyards, and catch you every man his wife of the daughters of Shiloh, and go to the land of Benjamin.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('And it shall be, when their fathers or their brethren come unto us to complain, that we will say unto them, Be favourable unto them for our sakes: because we reserved not to each man his wife in the war: for it is not as though ye had given unto them at your own accord.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('And the children of Benjamin did so, and took them wives, according to their number, of them that danced, whom they caught: and they went and returned unto their inheritance, and repaired the cities, and dwelt in them.'),
              ],
            },
            {
              number: 24,
              spans: [
                t('And the children of Israel departed thence at that time, every man to his tribe and to his family, and they went out from thence every man to his inheritance.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-shiloh-location',
          html: 'The precision of the location markers is striking. This is not a vague plan; it is a deliberate, choreographed abduction. The elders know exactly which feast, which place, which time. They are systematically orchestrating the kidnapping of daughters from a religious festival.',
        },
        {
          kind: 'commentary',
          id: 'c-abduction',
          html: 'The plan is laid bare: the men of Benjamin are to lie in wait in the vineyards and catch wives from the daughters of Shiloh during their dance. The fathers and brothers who come to complain are to be managed with a rationalization: "We reserved not to each man his wife in the war." In other words, the crime is justified as an acceptable byproduct of an earlier decision. The daughters of Shiloh are sacrificed to solve a problem they had no part in creating.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-melech',
          title: 'Melech — "king"',
          script: 'מֶלֶךְ',
          translit: '<strong>melech</strong> · a ruler; one who reigns',
          description: 'The word does not appear here, but it haunts this chapter. A king would have the authority and wisdom to settle disputes justly. Without a king, "every man did that which was right in his own eyes" — and the result is not justice but chaos.',
        },
        {
          kind: 'reflection',
          id: 'shiloh-abduction',
          prompt: 'The rationalization in verse 22 attempts to justify abduction by appealing to prior circumstance. When do we rationalize wrongs this way?',
        },
      ],
    },

    /* ─── Judges 21:25 — The Closing Refrain ────────────────────────────────── */
    {
      ref: 'Judges 21:25',
      title: '"Every Man Did That Which Was Right in His Own Eyes"',
      blocks: [
        {
          kind: 'scripture',
          chapter: 21,
          lines: [
            {
              number: 25,
              spans: [
                t('In those days there was '),
                hy('no king', 'c-no-king'),
                t(' in Israel: '),
                hp('every man did that which was right in his own eyes', 'c-right-eyes'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-no-king',
          html: 'This refrain appears four times in Judges (17:6, 18:1, 19:1, 21:25). Each time, it introduces a story of chaos and violence. The book began with Israel failing to drive out the Canaanites — they settled for tribute and accommodation. Now it ends with Israel having nearly destroyed itself from within. There is a direct line from the absence of God\'s rule to the presence of barbarism.',
        },
        {
          kind: 'commentary',
          id: 'c-right-eyes',
          html: 'The phrase "every man did that which was right in his own eyes" is not a celebration of autonomy. It is a diagnosis of disease. When there is no king — no centralized rule of law — every man becomes his own god, and the result is not freedom but violence. What appears to be righteousness from the inside is horror from the outside. One man\'s solution is another man\'s catastrophe. One tribe\'s oath becomes another tribe\'s obliteration.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-yashar',
          title: 'Yashar — "right, straight"',
          script: 'יָשַׁר',
          translit: '<strong>yashar</strong> · straight, right, correct',
          description: 'What appears "straight" to the eye — what seems right from where you stand — is not necessarily true or just. Only when eyes are directed by a King\'s wisdom does righteousness become possible.',
        },
        {
          kind: 'christ',
          id: 'c-king-christ',
          title: 'Christ Connection — The King We\'ve Been Waiting For',
          html: 'Israel\'s demand for a king in 1 Samuel 8 is both a failure and an opening. They were meant to have God as their King. But in their demand for an earthly king, the text records a deeper hunger: the hunger for rule, for order, for someone in authority to make things right. That hunger points forward to "a King of kings, and Lord of lords" (1 Timothy 6:15). For those on this side of Pentecost, the kingdom is not yet fully visible — "every man did that which was right in his own eyes" is still the daily report from our streets. But Christ\'s rule is already underway. At the end of all things, when His kingdom comes in its fullness, what everyone does will align at last with what is truly right in the eyes of God.',
        },
        {
          kind: 'carry',
          html: 'If the story of Judges teaches anything, it is that human reason, left to itself, produces horror. The right course is not found in what seems right to your eye, but in submission to the King whose eyes see truly. This week, in some small decision or judgment you are tempted to make, try asking: What does Jesus see that I don\'t? What would change if I waited for His wisdom instead of rushing to my own?',
        },
        {
          kind: 'reflection',
          id: 'king-reflection',
          prompt: 'When have you seen "every man did that which was right in his own eyes" play out in your own life or community? What is needed to move from that chaos toward wisdom?',
        },
      ],
    },
  ],

  bottomShare: {
    quote: 'In those days there was no king in Israel: every man did that which was right in his own eyes.',
    snippet: 'The final chapter of Judges — a study of how human reason, disconnected from God\'s rule, produces horror instead of justice.',
    ref: 'Judges 21:25 · Study Guide',
    label: 'Share Judges 21',
  },

  hasHebrew: true,
};
