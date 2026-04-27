import { hp, hy, hg, t, plain, type RichChapterContent } from './types';

/**
 * 1 Samuel 5 — Dagon Falls Before the Ark
 *
 * The Philistines have captured the ark and brought it into Dagon's house.
 * What they thought was spoil turns out to be a sword. The false god falls
 * before the God of Israel — twice. The plague that follows echoes the exodus;
 * the acknowledgment that follows is without conversion. And Christ, entering
 * the strongholds of death itself, finds the false gods cannot stand before Him.
 */
export const SAMUEL_1_5: RichChapterContent = {
  bookSlug: '1-samuel',
  bookName: '1 Samuel',
  chapter: 5,

  intros: [
    "After Israel&apos;s defeat at Ebenezer, the Philistines have taken the ark of the covenant—the holiest object in Israel&apos;s worship, the place where the Lord is said to dwell between the cherubim. They bring it to Ashdod, into the house of Dagon, their grain and fish god, as a trophy of conquest. But possession of the ark is not spoil; it is plague. The false god cannot coexist with the true God. Dagon falls.",
    'What follows is a pattern the Old Testament returns to again and again: the God of Israel pursues His people through judgment, and even the nations around them are forced to acknowledge His power. The Philistines will learn, as Egypt learned at the plagues, that you cannot contain or control the Lord. And for the reader on this side of the cross, the picture deepens: Christ Himself will enter the strongholds of death and darkness—and the powers there will fall before Him just as surely as Dagon fell in his own house.',
  ],

  opener: {
    matchTitle: /dagon|ark|philistine/i,
    caption: 'The Whole Chapter at a Glance',
  },

  bottomShare: {
    label: 'Share 1 Samuel 5',
    quote:
      'The ark of God was brought into Dagon&apos;s house. When the Ashdodites arose, behold, Dagon had fallen on his face. The hand of the Lord was heavy upon them with tumors. Every city that received the ark was smitten with plague, until finally they sent it away, saying, "The ark of the God of Israel must go back to its own place."',
    snippet: 'A chapter-by-chapter study guide from Learn of Christ.',
    ref: '1 Samuel 5 · Study Guide',
  },

  sections: [
    /* ─── 1 Samuel 5:1–3 — Dagon Falls ───────────────────────────────── */
    {
      ref: '1 Samuel 5:1–3',
      title: 'Dagon Falls',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            plain(1, 'And the Philistines took the ark of God, and brought it from Eben-ezer unto Ashdod.'),
            {
              number: 2,
              spans: [
                t('So the Philistines took the ark of God, and brought it into the house of '),
                hy('Dagon', 'hebrew-dagon'),
                t(', and set it by '),
                hy('Dagon', 'hebrew-dagon'),
                t('.'),
              ],
            },
            {
              number: 3,
              spans: [
                t('And when they of Ashdod arose early on the morrow, behold, '),
                hg('Dagon was fallen upon his face to the earth before the ark of the Lord', 'c-dagon-falls'),
                t('. And they took Dagon, and set him in his place again.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-dagon',
          title: 'Dagon — דָּגוֹן',
          script: 'דָּגוֹן',
          translit: '<strong>dagon</strong> · grain or fish',
          description:
            'Dagon was a Philistine and Canaanite deity associated with grain and fertility, though the name may derive from <em>dag</em>, fish. Whether grain-god or sea-god, Dagon represents the false powers of provision and security that hold sway outside God&apos;s covenant. His house is his temple, his place of authority—yet he cannot stand before the ark.',
        },
        {
          kind: 'commentary',
          id: 'c-dagon-falls',
          html:
            'The image is unmistakable: Dagon has bowed before the ark. The Ashdodites fetch him and prop him back up, as if their hands could restore what their god could not keep upright. But the gesture is futile. A god that falls is no god at all.',
        },
        {
          kind: 'carry',
          html:
            'In your own life, what has fallen on its face? What god have you set up—work, approval, security, your own strength—only to watch it prostrate itself? The text invites you to notice: the Lord doesn&apos;t knock down Dagon with violence. He simply shows up. And whatever was ruling in his absence falls.',
        },
        {
          kind: 'reflection',
          id: 'dagon-falls',
          prompt:
            'What false god have you been propping back up, again and again? What would happen if you stopped?',
        },
      ],
    },

    /* ─── 1 Samuel 5:4 — Dagon Dismantled ────────────────────────────── */
    {
      ref: '1 Samuel 5:4',
      title: 'The God Dismantled',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 4,
              spans: [
                t('And when they arose early on the morrow morning, behold, '),
                hp('Dagon was fallen upon his face to the ground before the ark of the Lord; and the head of Dagon and both the palms of his hands were cut off upon the threshold', 'c-dagon-broken'),
                t('; only the '),
                hy('stump', 'hebrew-lul'),
                t(' of Dagon was left to him.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-dagon-broken',
          html:
            'The second fall is absolute. Not only is Dagon prostrate—his head and hands are severed and left on the threshold of his own temple. The god who was meant to protect is now butchered. The image is graphic and final: this god is no god. He cannot defend himself, let alone his people.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-lul',
          title: 'Lul — לוּל',
          script: 'לוּל',
          translit: '<strong>lul</strong> · stump or log',
          description:
            'Only the torso remains—the <em>lul</em>, a lifeless trunk. What stands is no longer a god; it is a monument to the fact that he never was one. The Philistines will remember this every time they enter the temple.',
        },
        {
          kind: 'christ',
          id: 'christ-connection-harrowing',
          title: 'Christ Connection — The Powers Undone',
          html:
            'Paul draws a line from this pattern to the cross itself: &ldquo;And having spoiled principalities and powers, he made a shew of them openly, triumphing over them in it&rdquo; (Col. 2:15). Christ did not defeat the dark powers by brute force from outside. He entered their stronghold—death itself, the deepest darkness—and rose. The false gods, the principalities that seemed so mighty, fell before Him. Like Dagon, they are dismantled. What remains is a trunk, a monument to the fact that they never had the power they claimed.',
        },
        {
          kind: 'reflection',
          id: 'dagon-dismantled',
          prompt:
            'What power in your life only seems mighty because you haven&apos;t yet brought it into the presence of Christ? Name it.',
        },
      ],
    },

    /* ─── 1 Samuel 5:5 — A Threshold No One Crosses ──────────────────── */
    {
      ref: '1 Samuel 5:5',
      title: 'The Threshold',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 5,
              spans: [
                t('Therefore neither the priests of Dagon, nor any that come into Dagon&apos;s house, '),
                hg('tread on the threshold of Dagon in Ashdod unto this day', 'c-threshold'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-threshold',
          html:
            'A threshold is a boundary. The priests of Dagon will no longer cross it—not out of piety, but out of dread. They have seen the dismembered god on this very spot. The threshold becomes a scar in their own temple, a place that says: <em>something happened here that we cannot explain away.</em> For generations, the Ashdodites will step carefully around those fragments.',
        },
        {
          kind: 'carry',
          html:
            'Sometimes a threshold is left unmarked in the story of your own life. A place where something fell that you didn&apos;t expect. A line you will not cross again. That scar is not a sign of weakness; it is evidence. It says: <em>God did this.</em> Do not be ashamed to step carefully around it.',
        },
      ],
    },

    /* ─── 1 Samuel 5:6–7 — The Plague at Ashdod ──────────────────────── */
    {
      ref: '1 Samuel 5:6–7',
      title: 'The Hand of the Lord',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 6,
              spans: [
                t('But '),
                hp('the hand of the Lord was heavy upon them of Ashdod', 'hebrew-yad'),
                t(', and he destroyed them, and smote them with '),
                hy('emerods', 'hebrew-techorim'),
                t(', even Ashdod and the coasts thereof.'),
              ],
            },
            {
              number: 7,
              spans: [
                t('And when the men of Ashdod saw it, they said, The ark of the God of Israel shall not abide with us: for his hand is sore upon us, and upon Dagon our god.'),
              ],
            },
          ],
        },
        {
          kind: 'hebrew',
          id: 'hebrew-yad',
          title: 'Yad Yahweh — יַד יְהוָה',
          script: 'יַד יְהוָה',
          translit: '<strong>yad Yahweh</strong> · the hand of the Lord',
          description:
            'The hand of the Lord is heavy—<em>kal</em> in Hebrew, a weight pressing down. Elsewhere it is a hand of tenderness or protection; here it is a hand of judgment. The same God, the same gesture, carrying different force depending on whether He is caring for His people or disciplining the world.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-techorim',
          title: 'Techorim — טְחֹרִים',
          script: 'טְחֹרִים',
          translit: '<strong>techorim</strong> · emerods, tumors, or hemorrhoids',
          description:
            'A plague of tumors—a humiliating, painful affliction. The Philistines are struck in their own bodies. This echoes the plagues on Egypt: God sends visible proof that He rules, that His presence unmakes His enemies.',
        },
        {
          kind: 'commentary',
          id: 'c-plague-echo',
          html:
            'The plague at Ashdod mirrors the plagues on Egypt in Exodus. Israel&apos;s pattern is repeating for a new enemy: the Lord judges through visible, unchosen suffering. The Ashdodites see it and understand: this god in our house is not our prize. He is our ruin.',
        },
        {
          kind: 'reflection',
          id: 'ashdod-plague',
          prompt:
            'What is the weight pressing down on you that you cannot attribute to chance? What is it saying?',
        },
      ],
    },

    /* ─── 1 Samuel 5:8–9 — To Gath ──────────────────────────────────── */
    {
      ref: '1 Samuel 5:8–9',
      title: 'To Gath',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 8,
              spans: [
                t('Therefore they sent and gathered all the lords of the Philistines unto them, and said, What shall we do with the ark of the God of Israel? And they answered, Let the ark of the God of Israel be carried about unto Gath. And they carried the ark of the God of Israel about thither.'),
              ],
            },
            {
              number: 9,
              spans: [
                t('And it was so, that, after they had carried it about, the hand of the Lord was against the city with a very great destruction: and he smote the men of the city, both small and great: and the '),
                hy('emerods', 'hebrew-techorim'),
                t(' brake out upon them.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-gath-failed',
          html:
            'The Philistine lords imagine they can pass the problem along. Move the ark to another city, and the curse will follow a different path. But the hand of the Lord is not territorial; it is relational. Wherever the ark of God goes, the judgment of God goes with it. Gath falls to the same plague.',
        },
        {
          kind: 'carry',
          html:
            'There is no geographical solution to a spiritual problem. You can run to another city, another job, another relationship, another scroll through another app—but the weight of being under the judgment of God does not lighten with a change of address. The only relief is acknowledgment and return.',
        },
      ],
    },

    /* ─── 1 Samuel 5:10–12 — To Ekron, and Finally Release ──────────── */
    {
      ref: '1 Samuel 5:10–12',
      title: 'Ekron and the Cry to Heaven',
      blocks: [
        {
          kind: 'scripture',
          chapter: 5,
          lines: [
            {
              number: 10,
              spans: [
                t('Therefore they sent the ark of God to Ekron. And as the ark of God came to Ekron, the Ekronites cried out, saying, They have brought about the ark of the God of Israel to us, to slay us and our people.'),
              ],
            },
            {
              number: 11,
              spans: [
                t('So they sent and gathered together all the lords of the Philistines, and said, Send away the ark of the God of Israel, and let it go again to his own place, that it slay us not, and our people: for there was a '),
                hg('deadly destruction throughout all the city', 'c-destruction'),
                t('; '),
                hp('the hand of God was very heavy there', 'c-heavy-hand'),
                t('.'),
              ],
            },
            {
              number: 12,
              spans: [
                t('And the men that died not were smitten with the '),
                hy('emerods', 'hebrew-techorim'),
                t('; and '),
                hg('the cry of the city went up to heaven', 'c-cry-heaven'),
                t('.'),
              ],
            },
          ],
        },
        {
          kind: 'commentary',
          id: 'c-destruction',
          html:
            'The plague has spread from city to city. Each place that receives the ark learns the same lesson: this is not a trophy to keep or a god to bargain with. The Ekronites are the first to say it clearly—send it back. They have read the pattern.',
        },
        {
          kind: 'hebrew',
          id: 'hebrew-yad-kabed',
          title: 'Yad Kabed — יַד כָּבֵד',
          script: 'יַד כָּבֵד',
          translit: '<strong>yad kabed</strong> · the hand was very heavy',
          description:
            'A repetition of the phrase from verse 6, but now <em>meod</em> (very) is added. The weight is pressing harder. The Lord&apos;s judgment is not diminishing as the ark moves from city to city—it is intensifying.',
        },
        {
          kind: 'commentary',
          id: 'c-heavy-hand',
          html:
            'The Philistines finally understand: if you want the hand of God to lift, you must return the ark to Israel. Not because they repent, but because the weight is too much to bear. This is acknowledgment without conversion—they admit His power, but not His lordship.',
        },
        {
          kind: 'commentary',
          id: 'c-cry-heaven',
          html:
            'The cry goes up to heaven. This echoes the cry of the Egyptians during the plagues, and before that, the cry of Sodom. It is the cry of a people under judgment—not yet the cry of repentance, but the cry of those who can no longer ignore that they are being judged.',
        },
        {
          kind: 'christ',
          id: 'christ-return-home',
          title: 'Christ Connection — His Own Place',
          html:
            'The Philistines say it: <em>"Let it go again to his own place."</em> The ark must return to Israel, to the temple, to the city of God. And Christ, who entered the strongholds of darkness, rose and returned to His Father&apos;s house, to His own place, taking all authority with Him. What was lost, captured, held in enemy territory—He brought home. And the principalities that held it could not follow.',
        },
        {
          kind: 'reflection',
          id: 'ekron-release',
          prompt:
            'What in your own story needs to go home? What captured good in you is crying out to return to its rightful place?',
        },
      ],
    },

    {
      blocks: [
        { kind: 'divider' },
        {
          kind: 'carry',
          html:
            'The chapter closes with no conversion. The Philistines send the ark back not out of faith, but out of desperation. And yet—the story is not over. Their refusal to repent will bring further judgment; their choice to return the ark will preserve them from annihilation. Even in a pattern that looks like judgment only, there is mercy woven through. God does not destroy what He can call home.',
        },
      ],
    },
  ],

  hasHebrew: true,
};
