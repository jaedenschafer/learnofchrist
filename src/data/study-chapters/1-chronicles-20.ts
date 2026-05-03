import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Chronicles 20 — Rabbah Captured; Giants Slain
 *
 * A short chapter, largely paralleling 2 Samuel 11–12 and 2 Samuel 21:18–22.
 * But the Chronicler&apos;s lens is sharp: he records Joab&apos;s siege of Rabbah and
 * the city&apos;s fall, David&apos;s taking of the king&apos;s crown, and the slaying of
 * four giants from Gath. Notably absent is the Bathsheba scandal — the
 * Chronicler is not interested in dwelling on David&apos;s failures. His purpose
 * is to encourage a post-exile community with a vision of a king whose people
 * finish the mighty works he starts. The seed of the woman crushes the seed of
 * the serpent, and the King&apos;s mighty men carry that victory to its end.
 */
export const CHRONICLES_1_20: RichChapterContent = {
  bookSlug: '1-chronicles',
  bookName: '1 Chronicles',
  chapter: 20,

  estimatedMinutes: { 5: 3, 10: 6, 15: 10 },
  intros: [
    'First Chronicles distills the history of Israel into a vision for the post-exile community: a people restored, a king vindicated, a temple rebuilt. The Chronicler&apos;s hand is deliberate. Where other histories (like 2 Samuel) record the scandal of David and Bathsheba, the seduction and murder that led to the death of their first child, the Chronicler does not. It is not that he denies it — it happened. But his point is elsewhere. He writes to a broken people who have returned from exile, and he shows them a king who finishes what he starts, whose mighty men vanquish the enemies of God.',
    'In this chapter, Joab lays siege to Rabbah, the capital of Ammon, and the city falls. David takes the golden crown of their king, finding it weighs a talent of gold and is set with precious stones. The spoil brought back is immense. The people of the city are put to severe labor. And then, in swift succession, the Chronicler records the slaying of four giants of Gath — each one a son or descendant of the giants Goliath represented. The giants that once seemed undefeatable are now falling by the hand of David and his servants. The kingdom is secure. The enemies are vanquished. And the King&apos;s people stand victorious.',
  ],

  bottomShare: {
    label: 'Share 1 Chronicles 20',
    quote:
      'The King finishes what He starts. The seed of the woman crushes the seed of the serpent, through the hands of his mighty men. Where giants once seemed undefeatable, they fall before those who trust in the God of David.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Chronicles 20 · Study Guide',
  },

  sections: [
    /* ─── 1 Chronicles 20:1–3 — Joab Sieges Rabbah; David Tarries ─────────── */
    {
      ref: '1 Chronicles 20:1–3',
      title: 'Joab Sieges Rabbah',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(
              1,
              'And it came to pass, that after the year was expired, at the time when kings go out to battle, Joab led forth the power of the army, and wasted the country of the children of Ammon, and came and besieged Rabbah. But David tarried at Jerusalem. And Joab smote Rabbah, and destroyed it.'
            ),
            plain(
              2,
              'And David took the crown of their king from off his head, and found it to weigh a talent of gold, and there were precious stones in it; and it was set upon David&apos;s head: and he brought also exceeding much spoil out of the city.'
            ),
            plain(
              3,
              'And he brought out the people that were therein, and cut them with saws, and with harrows of iron, and with axes. Even so dealt David with all the cities of the children of Ammon. And David and all the people returned to Jerusalem.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'rabbah-siege',
          html:
            'The Chronicler opens with a note of narrative precision: "After the year was expired, at the time when kings go out to battle." This is the proper season for war — when the spring rains cease and the roads are passable. Joab, David&apos;s commander, leads the army not to fight alongside the king, but to besiege Rabbah, the capital of Ammon. The city represents Ammonite power, the threat to Israel&apos;s eastern flank. The siege is methodical. It is thorough.',
        },
        {
          kind: 'commentary',
          id: 'david-tarries',
          html:
            'The Chronicler inserts a single, spare phrase: "But David tarried at Jerusalem." This is the Chronicler&apos;s hand at work. Where 2 Samuel dwells on why David stayed home — the seduction of Bathsheba, the scandal, the cover-up — the Chronicler does not. He simply notes that the king remained in the capital while his commander did the work of conquest. The fact stands. The judgment is left to the reader. The Chronicler&apos;s focus is on what comes next: victory.',
        },
        {
          kind: 'hebrew',
          id: 'rabbah-meaning',
          title: 'רַבָּה — Rabbah, "Great"',
          script: 'רַבָּה',
          translit: '<strong>Rabbah</strong> · "great"; "much"',
          description:
            'The name Rabbah means "great" in Hebrew — a fitting name for a great city, the capital of Ammon. It sits on the Jabbok River in what is now modern Jordan. In David&apos;s time, it represents the full strength of Ammonite power. By the close of this chapter, that great city will be destroyed, its people scattered, its power broken.',
        },
        {
          kind: 'commentary',
          id: 'crown-of-ammon',
          html:
            'David takes the crown of the Ammonite king — a crown that weighs a talent of gold (roughly 75 pounds) and is studded with precious stones. This crown, placed upon David&apos;s head, is a trophy and a sign. The king of Ammon is no more. His royal regalia now adorns the head of the king of Israel. The spoil brought back is immense: silver, gold, bronze, and all the riches of the conquered city.',
        },
        {
          kind: 'hebrew',
          id: 'rephaim-meaning',
          title: 'רָפָאִים — Rephaim, "Giants"',
          script: 'רָפָאִים',
          translit: '<strong>Rephaim</strong> · giants; the mighty ones',
          description:
            'The Rephaim — the giants — are a people of exceptional size and strength. Their name is ancient, and they appear throughout the history of Israel and Judah. They represent the primal forces of chaos, the enemies of God&apos;s covenant people. By the end of this chapter, the Chronicler will show that even they have fallen before David and his mighty men.',
        },
        {
          kind: 'carry',
          html:
            'When we are called to finish what God has started, we do not do it alone. David remains in Jerusalem, but Joab leads the siege. The conquest is thorough, the victory decisive. God works through the hands of His people — through strategy, patience, courage, and the loyalty of those who serve. What work has God called you to help finish? How can you support those who lead, even when the victory belongs to the Lord?',
        },
        {
          kind: 'reflection',
          id: 'rabbah-siege-reflection',
          prompt:
            'The Chronicler shows us a king who delegates great work to those he trusts. How do you feel when you are trusted with important work? How does it change your commitment to see that work through?',
        },
      ],
    },

    /* ─── 1 Chronicles 20:4–6 — Giants of Gath Slain ────────────────────────── */
    {
      ref: '1 Chronicles 20:4–6',
      title: 'The Giants of Gath Are Subdued',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(
              4,
              'And it came to pass after this, that there arose war at Gezer with the Philistines: at which time Sibbechai the Hushathite slew Sippai, that was of the children of the giant; and they were subdued.'
            ),
            plain(
              5,
              'And there was war again with the Philistines; and Elhanan the son of Jair slew Lahmi the brother of Goliath the Gittite, whose spear staff was like a weaver&apos;s beam.'
            ),
          ],
        },
        {
          kind: 'commentary',
          id: 'gezer-war',
          html:
            'The Chronicler moves swiftly from the fall of Rabbah to a new conflict: war at Gezer, a city on the border between Israel and Philistine territory. This is the frontier where Israel must constantly defend itself. And in this war, Sibbechai the Hushathite, one of David&apos;s mighty men, encounters Sippai, one of the giants. The giant is slain. The Philistines are subdued.',
        },
        {
          kind: 'hebrew',
          id: 'gibbor-meaning',
          title: 'גִּבּוֹר — Gibbor, "Mighty One"',
          script: 'גִּבּוֹר',
          translit: '<strong>Gibbor</strong> · mighty one; valiant warrior; strong man',
          description:
            'The term gibbor refers to a mighty warrior, a valiant one. David&apos;s soldiers are called his "mighty men" — gibborim — because they are warriors of exceptional skill and courage. But even the gibbor of ordinary height can fall to the hand of one who trusts in the God of Israel.',
        },
        {
          kind: 'commentary',
          id: 'lahmi-goliath-brother',
          html:
            'Elhanan, son of Jair, slays Lahmi, the brother of Goliath the Gittite. Goliath — the giant David faced in his youth, the one who fell to a stone from a sling — had a brother. That brother, too, was a giant, his spear staff as thick as a weaver&apos;s beam. But he, too, falls. The enemy that once seemed invincible has been vanquished, and even his kin, though mighty, cannot stand against the people of God.',
        },
        {
          kind: 'carry',
          html:
            'The giants that once seemed undefeatable are now falling. Sibbechai faces one. Elhanan faces another. Neither is David — David is in Jerusalem — yet the work of conquest continues through his mighty men. This is what it means to be part of a covenant people: the victory belongs to the Lord, but the hand that accomplishes it is ours. We are called to be brave, to trust, and to stand firm.',
        },
        {
          kind: 'reflection',
          id: 'giants-subdued',
          prompt:
            'What "giant" in your life seems undefeatable? What would it look like to face it not alone, but as part of a community of faith?',
        },
      ],
    },

    /* ─── 1 Chronicles 20:6–8 — The Seed of the Giant Falls ────────────────── */
    {
      ref: '1 Chronicles 20:6–8',
      title: 'The Seed of the Giant Falls',
      blocks: [
        {
          kind: 'scripture',
          chapter: 20,
          lines: [
            plain(
              6,
              'And yet again there was war at Gath: where was a man of great stature, whose fingers and his toes were four and twenty, six on each hand, and six on each foot: and he also was the son of the giant.'
            ),
            plain(
              7,
              'But when he defied Israel, Jonathan the son of Shimea David&apos;s brother slew him.'
            ),
            plain(8, 'These were born unto the giant in Gath; and they fell by the hand of David, and by the hand of his servants.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'man-great-stature',
          html:
            'The Chronicler describes the fourth giant in extraordinary detail: a man of great stature, whose fingers and toes number twenty-four — six on each hand, six on each foot. This is a description of someone radically different, abnormally formed, bearing the genetic mark of the giant bloodline. Such a man would have been terrifying: malformed, immensely strong, an avatar of chaos and disorder.',
        },
        {
          kind: 'commentary',
          id: 'jonathan-slays',
          html:
            'But Jonathan, the son of Shimea (David&apos;s brother), faces this giant and slays him. Jonathan is not David. He is not a famous king. He is a soldier in David&apos;s army, part of the household, one of the mighty men. Yet when the giant defies Israel, Jonathan stands and defeats him. This is the pattern: the work of redemption is accomplished not by the king alone, but through the whole people of God, each playing their part.',
        },
        {
          kind: 'christ',
          id: 'seed-crushing',
          title: 'Christ Connection — The Seed That Crushes the Serpent',
          html:
            'Genesis 3:15 speaks of the seed of the woman bruising the head of the serpent. Throughout Scripture, this promise echoes: the enemy that opposed God&apos;s people will ultimately be defeated, and the defeat will come through the seed — the people — that the woman bears. Here, in 1 Chronicles 20, we see that promise taking flesh. The seed of the giant — the enemies of God&apos;s covenant people — are falling one by one. Not by the hand of one hero, but by the hands of David and his servants. The victory belongs to the King, but the accomplishment is carried forward by his mighty men. In Romans 16:20, Paul writes: "And the God of peace shall bruise Satan under your feet shortly" — note the "your feet," plural. The victory of Christ is accomplished through His people. The seed of the woman continues to crush the seed of the serpent.',
        },
        {
          kind: 'hebrew',
          id: 'gibbor-seed',
          title: 'זֶרַע — Zera, "Seed"',
          script: 'זֶרַע',
          translit: '<strong>Zera</strong> · seed; offspring; descendant',
          description:
            'The Hebrew word zera (seed) carries theological weight throughout Scripture. It refers not only to literal offspring, but to the covenantal heir, the chosen lineage. The "seed of the giant" in this chapter echoes Genesis 3:15, where God promises that the seed of the woman will bruise the head of the seed of the serpent — a promise that extends to all who belong to Christ.',
        },
        {
          kind: 'carry',
          html:
            'You are part of the seed that crushes the serpent&apos;s head. Not as a hero standing alone, but as one among many, part of Christ&apos;s people, called to resist evil and stand firm. The giants may be great, but they are not greater than the God who calls you to fight. What enemy are you called to face today, not alone, but as part of the household of faith?',
        },
        {
          kind: 'reflection',
          id: 'seed-reflection',
          prompt:
            'The giants fall not to one hero, but to many hands. How does it change your perspective to know you are part of a larger story of redemption, where your faithfulness contributes to the triumph of Christ?',
        },
      ],
    },
  ],
};
