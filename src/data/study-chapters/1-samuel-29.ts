import { hp, hy, hg, t, type RichChapterContent } from './types';

/**
 * 1 Samuel 29 — David Dismissed from the Philistine Army
 *
 * The Philistines gather for war against Israel, and David marches with them—
 * but the Philistine princes see him and demand his removal. Achish, who has
 * trusted David, must let him go. What appears to be rejection becomes rescue.
 * God intervenes not through David&apos;s prayer or effort, but through the
 * suspicion of men. The chapter reveals how God often preserves His people
 * from impossible choices through means they do not even recognize at the time.
 */
export const SAMUEL_1_29: RichChapterContent = {
  bookSlug: '1-samuel',
  bookName: '1 Samuel',
  chapter: 29,

  intros: [
    'David has been living in the land of the Philistines, serving under Achish, the king of Gath. For months, he has played the part of a loyal Philistine vassal, even raiding towns he claims are in Israel while actually destroying Amalekite settlements. Achish trusts him completely. So when the Philistines muster their full army to attack Israel, David marches along with them.',
    'But the moment has come when David&apos;s double life becomes impossible. The Philistine princes see him in the ranks and refuse to go to war with him. They will not allow a Hebrew to march against them. What David cannot escape by his own cunning, God removes by the simple distrust of others. This is a chapter about divine rescue that looks like rejection, about God&apos;s providence working through the very people who oppose His purposes.',
  ],

  sections: [
    /* ─── 1 Samuel 29:1–2 — The Armies Marshal ──────────────────────── */
    {
      ref: '1 Samuel 29:1–2',
      title: 'The Philistines Gather for War',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 1,
              spans: [
                t('Now the Philistines gathered together all their armies to '),
                hg('Aphek', 'c-aphek'),
                t(': and the Israelites pitched by a fountain which is in '),
                hy('Jezreel', 'c-jezreel'),
                t('.'),
              ],
            },
            {
              number: 2,
              spans: [
                t('And the lords of the Philistines passed on by hundreds, by thousands: and '),
                hp('David and his men passed on in the rereward with Achish', 'c-david-rereward'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-aphek',
          html:
            'Aphek lies on the northern plain, a strategic position for the Philistines to stage their forces. This is the moment of maximum danger for Israel and for David. The armies are gathered, and David is marching with them.',
        },
        {
          kind: 'commentary',
          id: 'c-jezreel',
          html:
            'Jezreel, the Israelite position, is also the place where King Saul will fall in battle (1 Samuel 31:1). The fountain at Jezreel becomes the line between the two armies. David stands on the Philistine side.',
        },
        {
          kind: 'commentary',
          id: 'c-david-rereward',
          html:
            'David marches "in the rereward" — at the rear, with Achish. Achish is clearly placing him in a position of honor and trust. David has become so acceptable to the Philistine king that he is at his side as the armies assemble. And yet this position of trust is about to become untenable.',
        },
      ],
    },

    /* ─── 1 Samuel 29:3–5 — The Princes Object ───────────────────────── */
    {
      ref: '1 Samuel 29:3–5',
      title: 'The Lords of the Philistines Take Offense',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 3,
              spans: [
                t('Then said the princes of the Philistines, What do these '),
                hy('Hebrews here', 'c-hebrews'),
                t('? And Achish said unto the princes of the Philistines, Is not this David, the servant of Saul the king of Israel, which hath been with me these days, or these years, and I have found '),
                hg('no fault in him', 'c-no-fault'),
                t(' since he fell unto me unto this day?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-hebrews',
          html:
            'The Philistine lords see David and his men and immediately ask: "What do these Hebrews do here?" The word "Hebrew" in their mouth is not neutral—it is a name of distinction, even contempt. These are foreigners, and in a moment of war, the princes will not risk their certainty for Achish&apos;s trust.',
        },
        {
          kind: 'commentary',
          id: 'c-no-fault',
          html:
            'Achish defends David. He says, "I have found no fault in him since he fell unto me unto this day." This is Achish&apos;s genuine assessment. David has been loyal, has shown himself reliable, has done everything asked of him. Achish does not lie. And yet his judgment is not enough to sway the lords.',
        },

        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 4,
              spans: [
                t('And the princes of the Philistines were wroth with him; and the princes of the Philistines said unto him, Make this fellow return, that he may go again to his place which thou hast appointed him, and let him not go down with us to battle, lest in the battle he '),
                hg('be an adversary to us', 'c-adversary'),
                t(': for wherewith should he reconcile himself unto his master? should it not be with the heads of these men?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-adversary',
          html:
            'The lords are not accusing David of treachery—not yet. They are reasoning from probability. In battle, when blood is spilled, whose side will David really take? How can he be trusted when his original master is on the other side of the field? They will not risk it.',
        },

        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 5,
              spans: [
                t('Is not this David, of whom they sang one to another in dances, saying, '),
                hy('Saul slew his thousands, and David his ten thousands', 'c-song'),
                t('?'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'c-song',
          title: 'The Song of David&apos;s Victories',
          script: 'שָׁאוּל הִכָּה בַאֲלָפָיו וְדָוִד בְרִבְבוֹתָיו',
          translit: '<strong>Saul hikka be\'alaphav ve&apos;David biriv&apos;votav</strong> · Saul struck down in thousands; David in ten thousands',
          description:
            'This is the very song sung by the women of Israel after David&apos;s victory over Goliath (1 Samuel 18:7). The Philistines know it. David&apos;s reputation as a warrior is embedded in the culture he now serves. The princes are saying: this man is famous for killing Philistines. How can we trust him to kill Israelites?',
        },
        {
          kind: 'commentary',
          id: 'c-song-context',
          html:
            'The lords are invoking David&apos;s own song of victory. The song that once brought him honor among Israelites is now evidence against him among Philistines. His past cannot be erased. And the lords will not gamble with their own men.',
        },
      ],
    },

    /* ─── 1 Samuel 29:6–7 — Achish Dismisses David ────────────────────── */
    {
      ref: '1 Samuel 29:6–7',
      title: 'Achish Releases David',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 6,
              spans: [
                t('Wherefore Achish called David, and said unto him, Surely, as the Lord liveth, thou hast been '),
                hp('upright', 'c-upright'),
                t(', and thy going out and thy coming in with me in the host is good in my sight: for I have not found evil in thee since the day of thy coming unto me unto this day: nevertheless the lords '),
                hg('favour thee not', 'c-favour'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-upright',
          html:
            'Achish swears by the Lord—by the God of Israel, not a Philistine god. This is not sarcasm. Achish genuinely believes in David&apos;s uprightness. His judgment is not wrong. It is simply overruled by the judgment of men more cautious than he.',
        },
        {
          kind: 'commentary',
          id: 'c-favour',
          html:
            'The lords "favour thee not." Not because David has done anything wrong, but because of who he is. A Hebrew serving Philistines will always be suspect when battle comes. No amount of loyalty can overcome that. Achish is caught between his trust in David and the will of the lords who command with him.',
        },

        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 7,
              spans: [
                t('Wherefore now return, and go in peace, that thou displease not the lords of the Philistines.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'achish-release',
          html:
            'Achish releases David with a command: go in peace. He does not say "I believe you," but he also does not call David a traitor. He releases him—and in doing so, removes him from a situation that has become impossible. David must obey the lords, and Achish, bound by their will, must send him away.',
        },
      ],
    },

    /* ─── 1 Samuel 29:8–9 — David Protests ────────────────────────────── */
    {
      ref: '1 Samuel 29:8–9',
      title: 'David&apos;s Protest',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 8,
              spans: [
                t('And David said unto Achish, But what have I done? and what hast thou found in thy servant so long as I have been with thee unto this day, that I may not go fight against the enemies of my lord the king?'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-david-protest',
          html:
            'David protests. His words are carefully chosen. "What have I done?" he asks—as though his record should speak for itself. He is asking Achish to defend him, to fight for his place. David is maintaining the fiction of loyalty even as he is being sent away. This moment is morally murky. David has been pretending, and now he must keep pretending while actually being relieved.',
        },

        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 9,
              spans: [
                t('And Achish answered and said to David, I know that thou art '),
                hp('good in my sight, as an angel of God', 'c-angel-god'),
                t(': notwithstanding the princes of the Philistines have said, He shall not go up with us to the battle.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-angel-god',
          html:
            'Achish calls David "an angel of God." In the ancient world, angels are not always gentle beings. They are messengers of divine will, sometimes fearsome, sometimes gentle. Achish&apos;s compliment is sincere and also, unknowingly, ironic. David is indeed doing God&apos;s will, but not in the way Achish understands. God is using the Philistines&apos; distrust to accomplish His own purpose.',
        },
        {
          kind: 'carry',
          html:
            'David has built a life on a lie. He has promised loyalty to Achish while remaining Saul&apos;s subject. He has claimed to be raiding Israel while destroying the Amalekites. And now he is being sent away from the very battle he could never really have fought in. The text does not condemn David for his deception—it simply shows what happens when a man tries to serve two masters. And it shows something more: God does not need David&apos;s prayer, does not need David&apos;s plan. He simply lets the Philistine lords decide, and their distrust becomes David&apos;s salvation.',
        },
      ],
    },

    /* ─── 1 Samuel 29:10–11 — The Departure ────────────────────────────── */
    {
      ref: '1 Samuel 29:10–11',
      title: 'David Returns to Ziklag',
      blocks: [
        {
          kind: 'scripture',
          chapter: 29,
          lines: [
            {
              number: 10,
              spans: [
                t('Wherefore now rise up early in the morning with thy master&apos;s servants that are come with thee: and as soon as ye be up early in the morning, and have light, '),
                hp('depart', 'c-depart'),
                t('.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('So David and his men rose up early to depart in the morning, to return into the land of the Philistines. And the Philistines went up to Jezreel.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-depart',
          html:
            'David departs at dawn. He goes back to Ziklag, the city Achish has given him, and the Philistines march on to Jezreel—where they will face Saul and Israel. David is removed from the battle. He cannot be forced to fight against his own people.',
        },
        {
          kind: 'christ',
          id: 'christ-providence',
          title: 'Christ Connection — Providence Through Distrust',
          html:
            'Jesus will later tell His disciples: "The Son of man must suffer many things, and be rejected of the elders and chief priests and scribes, and be slain, and be raised the third day" (Luke 9:22). Jesus does not escape through the faith of His followers or their loyalty. He is delivered to death through the distrust and rejection of those in power. And yet His rejection is His redemption. It is the very thing that accomplishes God&apos;s purpose. In both David and Jesus, we see the pattern: distrust and rejection become the instruments of divine rescue. David is removed from a battle he cannot win. Jesus is removed from the world to complete the victory that the world cannot see. In both cases, what looks like the end becomes the turning point.',
        },
        {
          kind: 'carry',
          html:
            'You may be in a situation where you have carefully laid plans, promised loyalty, worked to hold two worlds together. And then something happens that you did not expect: someone&apos;s distrust, someone&apos;s refusal, someone&apos;s judgment against you. And you are removed from the very place you thought you needed to be. The moment can feel like failure. It can feel like the collapse of everything you built. But David&apos;s story teaches us that God often rescues His people not through our cunning or effort, but through the doubts of others. When you are removed from a situation by the will of people around you, do not assume it is defeat. Sometimes it is deliverance. Sometimes God is rescuing you from a choice you could never have made alone.',
        },
        {
          kind: 'reflection',
          id: 'distrust-deliverance',
          prompt:
            'Is there a situation in your life right now where you are facing distrust or rejection? What might God be protecting you from by allowing you to be removed from it? What would it look like to trust that His ways are hidden, and that what feels like loss might be deliverance?',
        },
      ],
    },
  ],

  bottomShare: {
    label: 'Share 1 Samuel 29',
    quote:
      'The Philistine princes refuse to let David fight against Israel, and Achish releases him. What appears to be rejection becomes rescue—God removes David from an impossible choice through the very distrust of his enemies.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Samuel 29 · Study Guide',
  },
};
