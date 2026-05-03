import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 2 Samuel 1 — David Hears of Saul's Death
 *
 * After his years in exile, David learns that King Saul is dead. A young
 * Amalekite brings him the crown and bracelet, claiming to have killed Saul
 * himself. David weeps — not for an enemy defeated, but for the king who
 * hunted him. And then he speaks the most beautiful lament in all of Scripture,
 * "The Song of the Bow," mourning both Saul and Jonathan as the mighty fallen.
 * In this chapter, a king learns how a true king grieves.
 */
export const SAMUEL_2_1: RichChapterContent = {
  bookSlug: '2-samuel',
  bookName: '2 Samuel',
  chapter: 1,

  estimatedMinutes: { beginner: 7, intermediate: 12, deep: 16 },
  intros: [
    'The book of 2 Samuel opens at a moment of threshold. David, the anointed one whom Samuel crowned in secret, has spent years fleeing King Saul&apos;s jealous rage. He has survived in the wilderness, in foreign lands, in the service of Philistine kings — always hunted, never safe. And now, on the third day after his return from his latest expedition, a messenger comes to him with news that changes everything: Saul is dead.',
    'But the death of an enemy does not bring rejoicing. Instead, David tears his clothes. He weeps. He fasts. And when he learns the full story — that a young Amalekite has brought him Saul&apos;s crown and bracelet, claiming to have killed the Lord&apos;s anointed — David executes the messenger. The chapter closes not with triumph, but with "The Song of the Bow," one of the most haunting laments in Scripture, mourning Saul and his beloved Jonathan. In this moment, we see David&apos;s heart: not a soldier celebrating the fall of his rival, but a man who understands that even a king&apos;s death is a loss to the people of God.',
  ],

  bottomShare: {
    label: 'Share 2 Samuel 1',
    quote:
      'David wept for Saul and Jonathan, the mighty fallen. His lament echoes the grief of a man who loves his enemy and understands that even the death of a rival is a wound to the people of God.',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '2 Samuel 1 · Study Guide',
  },

  sections: [
    /* ─── 2 Samuel 1:1–3 — The Messenger Arrives ──────────────────────── */
    {
      ref: '2 Samuel 1:1–3',
      title: 'The Messenger Arrives',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(1, 'Now it came to pass after the death of Saul, when David was returned from the slaughter of the Amalekites, that David had abode two days in Ziklag;'),
            plain(2, 'It came even to pass on the third day, that, behold, a man came out of the camp from Saul with his clothes rent, and earth upon his head: and so it was, when he came to David, that he fell to the earth, and did obeisance.'),
            plain(3, 'And David said unto him, From whence comest thou? And he said unto him, Out of the camp of Israel am I escaped.'),
          ],
        },
        {
          kind: 'commentary',
          id: 'returned-amalekites',
          html:
            'David has just returned from raiding the Amalekites — a campaign against the very people he will soon encounter through this messenger. The text opens with layers of irony: David is resting in Ziklag, a city in Philistine territory where he has been seeking refuge from Saul. He has escaped the pursuit of a king. Now the news comes that the king himself is gone.',
        },
        {
          kind: 'commentary',
          id: 'messenger-signs',
          html:
            'The messenger comes in the manner of one bearing catastrophic news: clothes rent, earth on his head. These are signs of mourning, of disaster. He does obeisance to David — an act of submission and respect that presages what he will tell: that David, not Saul&apos;s son, is now the rightful king.',
        },
        {
          kind: 'carry',
          html:
            'News arrives unexpectedly, often in ways that overturn what we thought was settled. David was waiting, hiding, uncertain of the future. And in a single moment, the thing he could not fight for himself — his rightful place — became possible. Sometimes the door opens not because we pushed it, but because God moved what stood in the way.',
        },
        {
          kind: 'reflection',
          id: 'messenger-arrives',
          prompt: 'When has news you did not expect to hear changed the course of your circumstances? What did you do in that moment of surprise?',
        },
      ],
    },

    /* ─── 2 Samuel 1:4–10 — The Amalekite's Account ────────────────────── */
    {
      ref: '2 Samuel 1:4–10',
      title: 'The Amalekite&apos;s Story',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            plain(4, 'And David said unto him, How went the matter? I pray thee, tell me. And he said, The people are fled from the battle, and many of the people also are fallen and dead; and Saul and Jonathan his son are dead also.'),
            {
              number: 5,
              spans: [
                t('And David said unto the young man that told him, How knowest thou that Saul and Jonathan his son be '),
                hg('dead', 's1-knowest-thou'),
                t('?'),
              ],
            },
            {
              number: 6,
              spans: [
                t('And the young man that told him said, As I happened by chance upon mount Gilboa, behold, Saul leaned upon his spear; and, lo, the chariots and horsemen followed hard after him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2-samuel-1-78mid-1',
          html:
            'The narrative pivots — David&apos;s reign is rarely smooth, and the next verses press into a different corner of the story.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 7,
              spans: [
                t('And when he looked behind him, he saw me, and called unto me: and I answered, Here am I.'),
              ],
            },
            {
              number: 8,
              spans: [
                t('And he said unto me, Who art thou? And I answered him, I am an Amalekite.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And he said unto me again, Stand, I pray thee, upon me, and '),
                hy('slay me', 's1-slay-me'),
                t(': for anguish is come upon me, because my life is yet whole in me.'),
              ],
            },
            {
              number: 10,
              spans: [
                t('So I stood upon him, and slew him, because I was sure that he could not live after that he was fallen: and I took the crown that was upon his head, and the bracelet that was on his arm, and have brought them hither unto my lord.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's1-knowest-thou',
          html:
            'David&apos;s first question is shrewd. How do you know? But the Amalekite&apos;s answer is a carefully constructed narrative — one that may or may not be true. The account differs, notably, from what 1 Samuel 31 tells us: that Saul fell on his own sword, that he was discovered dead by the Philistines. This young man&apos;s story is convenient. He was there by chance. Saul asked him to kill him. He did, and took the crown as proof. Convenient. And David, listening, seems to understand the danger in such convenience.',
        },
        {
          kind: 'commentary',
          id: 's1-slay-me',
          html:
            'Saul, in his final moments, is in agony. He has fallen in battle, his enemies closing in. He asks the young man to kill him — a mercy stroke. But the Amalekite&apos;s version of this moment is suspicious. We are not told whether Saul truly asked, or whether the young man saw an opportunity.',
        },
        {
          kind: 'hebrew',
          id: 's1-mashiach',
          title: 'Mashiach — "The Lord&apos;s Anointed"',
          script: 'מָשִׁיחַ',
          translit: '<strong>Mashiach</strong> · anointed one; the anointed of God',
          description:
            'The term "mashiach," or "anointed," carries sacred weight in Scripture. To be anointed is to be set apart by God Himself — not merely a political ruler, but one chosen by heaven. Even a fallen, rejected king retains this sacred status. David will speak of Saul as "the Lord&apos;s anointed" throughout this chapter, affirming that the anointing remains even when the king fails.',
        },
        {
          kind: 'carry',
          html:
            'We tend to judge people by their usefulness to us. If someone is a rival, an obstacle, a problem — their death might seem like deliverance. But Scripture asks us to see further. Saul was the Lord&apos;s anointed, regardless of his failures, his jealousy, his pursuit of David. The sacred office remains sacred even when the person holding it falls. In our own lives, do we judge people only by their convenience to us, or do we see the sacred in them?',
        },
        {
          kind: 'reflection',
          id: 'amalekite-story',
          prompt: 'The Amalekite tells a story designed to please David — presenting himself as the one who killed David&apos;s enemy. What tempts you to present a false version of yourself to get approval from others?',
        },
      ],
    },

    /* ─── 2 Samuel 1:11–16 — David's Grief and Judgment ────────────────── */
    {
      ref: '2 Samuel 1:11–16',
      title: 'David Grieves and Judges',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 11,
              spans: [
                t('Then David took hold on his clothes, and '),
                hg('rent them', 's1-rent-clothes'),
                t('; and likewise all the men that were with him:'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And they '),
                hg('mourned, and wept, and fasted', 's1-mourned'),
                t(' until even, for Saul, and for Jonathan his son, and for the people of the Lord, and for the house of Israel; because they were fallen by the sword.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's1-rent-clothes',
          html:
            'David tears his clothes — a sign of such deep grief that all the men with him follow suit. This is not a private sorrow. This is a king mourning, and his mourning sets the tone for everyone around him. The gesture says: something sacred has been lost.',
        },
        {
          kind: 'commentary',
          id: 's1-mourned',
          html:
            'David&apos;s grief encompasses Saul, Jonathan, the people, and the house of Israel. He is not celebrating the removal of a rival. He is mourning the death of a king, the death of his beloved friend, and the catastrophe that has befallen his nation. This is a grief that looks outward, that understands the larger wound.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 13,
              spans: [
                t('And David said unto the young man that told him, Whence art thou? And he said, I am the son of a stranger, an Amalekite.'),
              ],
            },
            {
              number: 14,
              spans: [
                t('And David said unto him, How wast thou not afraid to stretch forth thine hand to destroy the '),
                hp('Lord&apos;s anointed', 's1-anointed-judgment'),
                t('?'),
              ],
            },
            {
              number: 15,
              spans: [
                t('And David called one of the young men, and said, Go near, and fall upon him. And he smote him that he died.'),
              ],
            },
            {
              number: 16,
              spans: [
                t('And David said unto him, Thy blood be upon thy head; for thy mouth hath testified against thee, saying, I have slain the '),
                hp('Lord&apos;s anointed', 's1-anointed-verdict'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's1-anointed-judgment',
          html:
            'David questions the Amalekite: How could you dare to lay hands on the Lord&apos;s anointed? The irony cuts deep — David himself, who has been hunted by Saul for years, refused to kill the king when he had the chance. He would not stretch forth his hand against the Lord&apos;s anointed. And now this young foreigner claims he did what David would not.',
        },
        {
          kind: 'commentary',
          id: 's1-anointed-verdict',
          html:
            'David&apos;s judgment is swift and final. The Amalekite&apos;s own mouth has testified against him. Whether his story is true or false, he has confessed to killing the Lord&apos;s anointed — and in doing so, has sealed his own fate. "Thy blood be upon thy head" — the consequence follows the confession. David executes him.',
        },
        {
          kind: 'christ',
          id: 's1-anointed-connection',
          title: 'Christ Connection — The Sacred Anointing',
          html:
            'The anointed one, though rejected and fallen, retains the sacred mark of God upon him. David will not raise his hand against Saul, even though Saul hunts him mercilessly. The anointing is permanent. This pattern echoes in the New Testament when Peter tells us that Christ, though crucified by His own people, is the "Anointed One," the "Holy One," whose death has cosmic significance (Acts 2:36; 3:14–15). The anointing is not cancelled by suffering or by the world&apos;s rejection. It remains.',
        },
        {
          kind: 'carry',
          html:
            'In a world that values power and victory, David&apos;s refusal to rejoice in his enemy&apos;s death stands out. He grieves. He honors the sacred office, even though it was wielded against him. He executes the man who claims to have destroyed it. This tells us something profound: God&apos;s people do not celebrate the fall of those in authority, even when that fall brings us relief. We mourn what was lost. We honor what was sacred.',
        },
        {
          kind: 'reflection',
          id: 'david-grief',
          prompt: 'Have you ever felt grief or sadness when someone you were afraid of or hurt by was removed from power? What does it mean to honor what was sacred in someone, even after they have harmed you?',
        },
      ],
    },

    /* ─── 2 Samuel 1:17–20 — The Lament Begins ───────────────────────── */
    {
      ref: '2 Samuel 1:17–20',
      title: 'The Song of the Bow Begins',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 17,
              spans: [
                t('And David lamented with this lamentation over Saul and over Jonathan his son:'),
              ],
            },
            {
              number: 18,
              spans: [
                t('(Also he bade them teach the children of Judah the use of the bow: behold, it is written in the book of Jasher.)'),
              ],
            },
            {
              number: 19,
              spans: [
                t('The '),
                hg('beauty of Israel', 's1-beauty-israel'),
                t(' is slain upon thy high places: how are the mighty '),
                hg('fallen', 's1-fallen'),
                t('!'),
              ],
            },
            {
              number: 20,
              spans: [
                t('Tell it not in Gath, publish it not in the streets of Askelon; lest the daughters of the Philistines rejoice, lest the daughters of the uncircumcised triumph.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's1-beauty-israel',
          html:
            'David begins to sing — "the beauty of Israel is slain." He does not say "King Saul is dead." He says "the beauty of Israel." He is singing of national glory, of splendor, of a light extinguished. In this opening, David lifts the mourning above personal politics. Israel herself has suffered a wound.',
        },
        {
          kind: 'hebrew',
          id: 's1-qinah',
          title: 'Qinah — "Lament" or "Dirge"',
          script: 'קִינָה',
          translit: '<strong>Qinah</strong> · lament; elegy; a poem of mourning',
          description:
            'This lament is called a qinah in Hebrew — a formal dirge or elegy. The qinah has a particular rhythm: a longer line followed by a shorter one, as if the breath is catching, as if grief is breaking the normal flow of speech. David&apos;s song of mourning for Saul and Jonathan is one of the finest qinahs in Scripture.',
        },
        {
          kind: 'commentary',
          id: 's1-fallen',
          html:
            'The refrain "how are the mighty fallen" will echo throughout this lament. It is not boastful. It is not victorious. It is a keen of loss. The mighty — the ones we thought were permanent, strong, secure — have fallen. And we, who remain, must sing what we have lost.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes we are called to name a loss, to sing of what has been taken from us — not to celebrate, but to witness. David does not hide his lament. He teaches it to the people. He makes a song of mourning so that Israel will remember. What losses in your own life have you named and mourned, rather than tried to move past quickly?',
        },
        {
          kind: 'reflection',
          id: 'lament-begins',
          prompt: 'David sings his lament so that Israel will not forget what has been lost. What in your life deserves to be mourned rather than forgotten?',
        },
      ],
    },

    /* ─── 2 Samuel 1:21–27 — "How Are the Mighty Fallen" ──────────────── */
    {
      ref: '2 Samuel 1:21–27',
      title: 'How Are the Mighty Fallen',
      blocks: [
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 21,
              spans: [
                t('Ye mountains of Gilboa, let there be no dew, neither let there be rain upon you, nor fields of offerings: for there the shield of the mighty is vilely cast away, the shield of Saul, as though he had not been anointed with oil.'),
              ],
            },
            {
              number: 22,
              spans: [
                t('From the blood of the slain, from the fat of the mighty, the bow of Jonathan turned not back, and the sword of Saul returned not empty.'),
              ],
            },
            {
              number: 23,
              spans: [
                t('Saul and Jonathan were lovely and pleasant in their lives, and in their death they were not divided: they were swifter than eagles, they were stronger than lions.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: '2-samuel-1-78mid-2',
          html:
            'The narrative pivots — David&apos;s reign is rarely smooth, and the next verses press into a different corner of the story.',
        },
        {
          kind: 'scripture',
          chapter: 1,
          lines: [
            {
              number: 24,
              spans: [
                t('Ye daughters of Israel, weep over Saul, who clothed you in scarlet, with other delights, who put on ornaments of gold upon your apparel.'),
              ],
            },
            {
              number: 25,
              spans: [
                t('How are the mighty fallen in the midst of the battle! O Jonathan, thou wast slain in thine high places.'),
              ],
            },
            {
              number: 26,
              spans: [
                t('I am distressed for thee, my brother Jonathan: very pleasant hast thou been unto me: thy love to me was wonderful, passing the '),
                hp('love of women', 's1-love-jonathan'),
                t('.'),
              ],
            },
            {
              number: 27,
              spans: [
                t('How are the mighty fallen, and the weapons of war perished!'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 's1-gilboa',
          html:
            'David curses the mountains of Gilboa where Saul fell — let them bear no dew, no rain, no fruit. The shield of Saul, the mark of his kingship, lies abandoned. It is "as though he had not been anointed with oil" — as though the sacred anointing meant nothing. This is not mere anger. This is the language of a man confronting the breakdown of order, the fall of the sacred.',
        },
        {
          kind: 'commentary',
          id: 's1-weapons',
          html:
            'David remembers Saul and Jonathan as warriors — their weapons did not return empty, their bow did not turn back. They were strong. They were effective. And now they are gone. The instruments of war have perished with them.',
        },
        {
          kind: 'commentary',
          id: 's1-lovely-pleasant',
          html:
            'In this moment, David speaks of Saul not as his enemy, but as a man — "lovely and pleasant in their lives." He is not diminishing Saul. He is honoring him. Even in conflict, in rivalry, there was a man worth honoring. And "in their death they were not divided" — Saul and Jonathan died together, at Gilboa. They were bound to each other.',
        },
        {
          kind: 'commentary',
          id: 's1-love-jonathan',
          html:
            'Here David speaks of Jonathan directly, with a tenderness that has provoked centuries of commentary. "Thy love to me was wonderful, passing the love of women." This is covenantal love — the bond between two souls who have sworn themselves to each other. It is not romantic in the modern sense; it is the language of sacred friendship, of brothers bound by covenant. Jonathan, the prince, loved David with a love that exceeded even the bonds of marriage. And in that love, there is a pattern: a chosen one loving the one who will take his place, without bitterness, without demand for return.',
        },
        {
          kind: 'christ',
          id: 's1-christ-grieves',
          title: 'Christ Connection — The King Who Weeps for His Enemies',
          html:
            'David grieves for Saul. He does not celebrate. He does not boast. He sings a dirge. This mirrors a moment in the New Testament when Jesus approaches Jerusalem, the city that will reject and crucify him: "And when he was come near, he beheld the city, and wept over it, saying, If thou hadst known, even thou, at least in this thy day, the things which belong unto thy peace! but now they are hid from thine eyes" (Luke 19:41–42). The King weeps for those who will not receive him. The anointed grieves over the place that will break His heart. Both David and Jesus understand that power without tears, victory without grief, is not true kingship. True kingship knows what has been lost.',
        },
        {
          kind: 'carry',
          html:
            'Do you weep when others fall? Do you grieve the loss of what was good in people who have hurt you, or do you only celebrate their defeat? David teaches us a harder way: to remember the strength that was there, to honor the sacred even when it was turned against us, to let grief complicate our victories. This is the way of the mature heart.',
        },
        {
          kind: 'reflection',
          id: 'mighty-fallen',
          prompt: 'Who in your life represents strength or goodness that you have lost — through death, estrangement, or change? How could you honor what was good about them, rather than only celebrating what has changed?',
        },
      ],
    },
  ],
};
